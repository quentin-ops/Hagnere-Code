"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  TurnstileWidget,
  TURNSTILE_ENABLED,
} from "@/components/project-funnel/TurnstileWidget";

type Status =
  | { kind: "idle" }
  | { kind: "recording" }
  | { kind: "processing" }
  | { kind: "error"; message: string };

type Props = {
  onTranscribed: (text: string) => void;
  className?: string;
  label?: string;
  recordingLabel?: string;
  processingLabel?: string;
};

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

export function VoiceDictateButton({
  onTranscribed,
  className = "",
  label = "Dicter",
  recordingLabel = "Arrêter",
  processingLabel = "Transcription…",
}: Props) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  // En dev (NEXT_PUBLIC_ENV='development'), le serveur skip Turnstile :
  // on autorise toujours pour ne pas bloquer le local quand la site key
  // de prod n'est pas whitelistée sur localhost. En prod, on attend le token.
  const isDev = process.env.NEXT_PUBLIC_ENV === "development";
  const canRecord = isDev || !TURNSTILE_ENABLED || turnstileToken !== null;

  useEffect(() => {
    return () => {
      try {
        const recorder = mediaRecorderRef.current;
        if (recorder && recorder.state !== "inactive") recorder.stop();
      } catch {
        /* noop */
      }
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
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
        setStatus({ kind: "processing" });
        activeStream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        try {
          const audio = new Blob(chunksRef.current, { type: mimeType });
          const formData = new FormData();
          formData.append("audio", audio, getAudioFilename(mimeType));
          if (turnstileToken) formData.append("turnstileToken", turnstileToken);
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
      setStatus({ kind: "recording" });
    } catch (err) {
      stream?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setStatus({ kind: "error", message: microphoneErrorMessage(err) });
    }
  }, [onTranscribed, turnstileToken]);

  const stopRecording = useCallback(() => {
    const recorder = mediaRecorderRef.current;
    if (!recorder || recorder.state === "inactive") return;
    recorder.stop();
  }, []);

  const isRecording = status.kind === "recording";
  const isProcessing = status.kind === "processing";
  const isError = status.kind === "error";

  return (
    <div className={`vdb-wrap ${className}`}>
      {/* Turnstile invisible — fournit le token avant l'enregistrement.
          En dev sans NEXT_PUBLIC_TURNSTILE_SITE_KEY, le widget retourne null. */}
      <TurnstileWidget
        onToken={setTurnstileToken}
        onExpire={() => setTurnstileToken(null)}
      />
      <button
        type="button"
        className={`vdb-btn ${isRecording ? "is-recording" : ""} ${isProcessing ? "is-processing" : ""}`}
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing || (!isRecording && !canRecord)}
        aria-label={
          isRecording ? "Arrêter la dictée" : isProcessing ? "Transcription en cours" : "Dicter votre projet"
        }
      >
        {isProcessing ? (
          <svg className="vdb-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 12a9 9 0 11-6.219-8.56" />
          </svg>
        ) : isRecording ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="6" width="12" height="12" rx="2" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="3" width="6" height="12" rx="3" />
            <path d="M5 11a7 7 0 0014 0" />
            <path d="M12 18v3" />
          </svg>
        )}
        <span>
          {isProcessing ? processingLabel : isRecording ? recordingLabel : label}
        </span>
      </button>
      {isError && (
        <span className="vdb-error" role="alert">
          {status.message}
        </span>
      )}
      <span className="vdb-hint" aria-hidden="true">
        Whisper-large-v3 · Groq
      </span>
    </div>
  );
}
