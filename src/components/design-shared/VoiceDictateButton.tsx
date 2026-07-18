"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "recording" }
  | { kind: "processing" }
  | { kind: "error"; message: string };

type Props = {
  onTranscribed: (text: string) => void;
  className?: string;
  label?: string;
  processingLabel?: string;
  /** Durée max d'enregistrement (sec) avant arrêt automatique. */
  maxDurationSec?: number;
};

const VOICE_BARS = [0, 1, 2, 3, 4] as const;

function getRecorderMimeType(): string {
  if (typeof MediaRecorder === "undefined") return "";
  return [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/mpeg",
    "audio/wav",
  ].find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function getAudioFilename(mimeType: string): string {
  if (mimeType.includes("mp4")) return "brief.m4a";
  if (mimeType.includes("mpeg")) return "brief.mp3";
  if (mimeType.includes("wav")) return "brief.wav";
  return "brief.webm";
}

function microphoneErrorMessage(error: unknown): string {
  const name = error instanceof DOMException ? error.name : "";
  if (name === "NotAllowedError" || name === "SecurityError") {
    return "Autorisation micro refusée — autorisez l'accès dans le navigateur.";
  }
  if (name === "NotFoundError" || name === "DevicesNotFoundError") {
    return "Aucun micro détecté sur cet appareil.";
  }
  if (name === "NotReadableError" || name === "TrackStartError") {
    return "Le micro est occupé par une autre application.";
  }
  if (name === "NotSupportedError") {
    return "Enregistrement audio non supporté par ce navigateur.";
  }
  return "Impossible d'activer le micro. Écrivez à la main, ça marche aussi.";
}

function formatTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/**
 * Bouton de dictée vocale — port du composant MicroGroq de Finance AI.
 *
 * Trois états visuels :
 *   - idle       : capsule dégradé violet + balayage shimmer
 *   - recording  : capsule rouge pulsante, point animé, chrono, waveform
 *   - processing : dégradé violet fluide + spinner "Transcription…"
 *
 * Pipeline : click → MediaRecorder → blob → POST /api/transcribe (protégé
 * par rate limit server-side) → texte → callback `onTranscribed`.
 */
export function VoiceDictateButton({
  onTranscribed,
  className = "",
  label = "Dicter",
  processingLabel = "Transcription…",
  maxDurationSec = 120,
}: Props) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [elapsed, setElapsed] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const tickIntervalRef = useRef<number | null>(null);
  const autoStopTimeoutRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (tickIntervalRef.current !== null) {
      window.clearInterval(tickIntervalRef.current);
      tickIntervalRef.current = null;
    }
    if (autoStopTimeoutRef.current !== null) {
      window.clearTimeout(autoStopTimeoutRef.current);
      autoStopTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearTimers();
      try {
        const recorder = mediaRecorderRef.current;
        if (recorder && recorder.state !== "inactive") recorder.stop();
      } catch {
        /* noop */
      }
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, [clearTimers]);

  const stopRecording = useCallback(() => {
    const recorder = mediaRecorderRef.current;
    if (!recorder || recorder.state === "inactive") return;
    recorder.stop();
  }, []);

  const startRecording = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setStatus({
        kind: "error",
        message: "Enregistrement audio non supporté par ce navigateur.",
      });
      return;
    }

    let stream: MediaStream | null = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      streamRef.current = stream;

      const preferredMimeType = getRecorderMimeType();
      const recorder = preferredMimeType
        ? new MediaRecorder(stream, { mimeType: preferredMimeType })
        : new MediaRecorder(stream);
      const mimeType = recorder.mimeType || preferredMimeType || "audio/webm";
      const activeStream = stream;
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = async () => {
        clearTimers();
        setStatus({ kind: "processing" });
        activeStream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        try {
          const audio = new Blob(chunksRef.current, { type: mimeType });
          const formData = new FormData();
          formData.append("audio", audio, getAudioFilename(mimeType));
          const res = await fetch("/api/transcribe", {
            method: "POST",
            body: formData,
          });
          const json = (await res.json().catch(() => ({}))) as {
            text?: string;
            error?: string;
          };
          if (!res.ok) {
            setStatus({
              kind: "error",
              message: json.error || "Transcription impossible pour le moment.",
            });
            return;
          }
          if (json.text) onTranscribed(json.text.trim());
          setStatus({ kind: "idle" });
        } catch {
          setStatus({
            kind: "error",
            message: "La transcription a échoué. Réessayez ou écrivez à la main.",
          });
        }
      };

      recorder.start();
      setElapsed(0);
      setStatus({ kind: "recording" });
      tickIntervalRef.current = window.setInterval(() => {
        setElapsed((s) => s + 1);
      }, 1000);
      autoStopTimeoutRef.current = window.setTimeout(() => {
        stopRecording();
      }, maxDurationSec * 1000);
    } catch (err) {
      stream?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setStatus({ kind: "error", message: microphoneErrorMessage(err) });
    }
  }, [onTranscribed, maxDurationSec, stopRecording, clearTimers]);

  const isRecording = status.kind === "recording";
  const isProcessing = status.kind === "processing";
  const isError = status.kind === "error";

  return (
    <div className={`vdb-wrap ${className}`}>
      <button
        type="button"
        className={`vdb-btn ${isRecording ? "is-recording" : ""} ${isProcessing ? "is-processing" : ""}`}
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing}
        aria-label={
          isRecording
            ? "Arrêter la dictée"
            : isProcessing
              ? "Transcription en cours"
              : "Dicter votre projet"
        }
        aria-pressed={isRecording}
      >
        {isProcessing ? (
          <>
            <svg className="vdb-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M21 12a9 9 0 11-6.219-8.56" />
            </svg>
            <span>{processingLabel}</span>
          </>
        ) : isRecording ? (
          <>
            <span className="vdb-dot" aria-hidden="true" />
            <span className="vdb-timer">{formatTime(elapsed)}</span>
            <span className="vdb-bars" aria-hidden="true">
              {VOICE_BARS.map((bar) => (
                <span key={bar} className="vdb-bar" />
              ))}
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="6" width="12" height="12" rx="2.5" />
            </svg>
          </>
        ) : (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="9" y="3" width="6" height="12" rx="3" />
              <path d="M5 11a7 7 0 0014 0" />
              <path d="M12 18v3" />
            </svg>
            <span>{label}</span>
          </>
        )}
      </button>
      {isError && (
        <span className="vdb-error" role="alert">
          {status.message}
        </span>
      )}
    </div>
  );
}
