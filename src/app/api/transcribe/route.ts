import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "@/lib/rate-limit";
import {
  checkServiceRateLimit,
  logAiCall,
  reserveServiceCost,
} from "@/lib/ai-rate-limit";
import { log } from "@/lib/logger";
import {
  PayloadTooLargeError,
  readRequestBytesWithLimit,
} from "@/lib/read-request-body";

// 25 MB hard cap on the audio payload. Whisper's input ceiling is 25 MB
// already; rejecting earlier protects us from being used as a free
// transcription proxy via large multi-hour files.
const MAX_AUDIO_BYTES = 25 * 1024 * 1024;
// Marge pour l'enveloppe multipart (nom, headers et boundary).
const MAX_REQUEST_BYTES = MAX_AUDIO_BYTES + 1024 * 1024;

// Allowed MIME prefixes — matches what the funnel's MediaRecorder produces
// (webm/opus, mp4, mpeg, wav). Anything else is suspicious.
const ALLOWED_MIME_PREFIXES = ["audio/webm", "audio/mp4", "audio/mpeg", "audio/wav", "audio/ogg"];

/**
 * Magic-bytes check sur les premiers octets du fichier — bloque les
 * payloads texte/zip/exe déguisés en `audio/webm` (le MIME header est
 * fourni par le client donc spoofable).
 *
 * Signatures couvertes :
 *   - WebM (Matroska)  : 1A 45 DF A3
 *   - MP4 / M4A (ftyp) : ?? ?? ?? ?? 66 74 79 70  (offset 4 = "ftyp")
 *   - MP3 frame sync   : FF F? (FFE0..FFFF, premier nibble FF + Fx)
 *   - MP3 ID3v2 tag    : 49 44 33  ("ID3")
 *   - WAV (RIFF/WAVE)  : 52 49 46 46 ?? ?? ?? ?? 57 41 56 45
 *   - OGG              : 4F 67 67 53  ("OggS")
 */
function isAudioMagic(buf: Uint8Array): boolean {
  if (buf.length < 4) return false;
  // WebM
  if (buf[0] === 0x1a && buf[1] === 0x45 && buf[2] === 0xdf && buf[3] === 0xa3) return true;
  // MP4/M4A — "ftyp" à l'offset 4
  if (
    buf.length >= 8 &&
    buf[4] === 0x66 && buf[5] === 0x74 && buf[6] === 0x79 && buf[7] === 0x70
  ) return true;
  // OGG — "OggS"
  if (buf[0] === 0x4f && buf[1] === 0x67 && buf[2] === 0x67 && buf[3] === 0x53) return true;
  // WAV — "RIFF" + "WAVE"
  if (
    buf.length >= 12 &&
    buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 &&
    buf[8] === 0x57 && buf[9] === 0x41 && buf[10] === 0x56 && buf[11] === 0x45
  ) return true;
  // MP3 ID3v2 tag — "ID3"
  if (buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33) return true;
  // MP3 frame sync — premier byte 0xFF, second 0xE0..0xFF
  if (buf[0] === 0xff && (buf[1]! & 0xe0) === 0xe0) return true;
  return false;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const userAgent = request.headers.get("user-agent");

  // 1. Size cap déclarative (optimisation). La taille réelle est contrôlée
  // plus bas pendant la lecture du flux.
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { error: "Fichier audio trop volumineux (max 25 MB)." },
      { status: 413 },
    );
  }

  // 2. Rate limit Postgres-backed AVANT de lire/bufferiser le multipart.
  // C'est la protection principale de cette route depuis le retrait de
  // Cloudflare Turnstile : un bot qui martèle l'endpoint est coupé par
  // les paliers IP + le plafond de bytes/jour (coût Groq borné).
  let rateCheck;
  try {
    rateCheck = await checkServiceRateLimit(ip, null, "transcribe", userAgent);
  } catch (err) {
    // La dictée déclenche un appel externe facturé. Si la protection
    // persistante est indisponible, on refuse temporairement l'appel au lieu
    // de contourner silencieusement le rate-limit.
    log.error("transcribe_rate_limit_unavailable", {
      err: err as Error,
    });
    return NextResponse.json(
      {
        error:
          "La dictée est temporairement indisponible. Vous pouvez continuer en saisissant votre texte.",
      },
      { status: 503, headers: { "Retry-After": "60" } },
    );
  }
  if (!rateCheck.allowed) {
    await logAiCall({
      service: "transcribe",
      ip,
      userAgent,
      status: "blocked",
      blockReason: rateCheck.reason,
    });
    return NextResponse.json(
      { error: rateCheck.message || "Trop de transcriptions. Réessaye plus tard." },
      {
        status: 429,
        headers: { "Retry-After": String(rateCheck.retryAfterSec || 3600) },
      },
    );
  }

  // 3. Lecture bornée du flux, y compris en chunked, puis parsing multipart.
  let formData: FormData;
  try {
    const bodyBytes = await readRequestBytesWithLimit(request, MAX_REQUEST_BYTES);
    const boundedRequest = new Request(request.url, {
      method: "POST",
      headers: request.headers,
      // La copie garantit un Uint8Array adossé à un ArrayBuffer standard,
      // compatible avec BodyInit même lorsque le flux source expose un
      // ArrayBufferLike plus large dans les types TypeScript.
      body: new Uint8Array(bodyBytes),
    });
    formData = await boundedRequest.formData();
  } catch (err) {
    if (err instanceof PayloadTooLargeError) {
      return NextResponse.json(
        { error: "Fichier audio trop volumineux (max 25 MB)." },
        { status: 413 },
      );
    }
    log.error("transcribe_formdata_parse_failed", { err: err as Error });
    return NextResponse.json({ error: "Payload invalide." }, { status: 400 });
  }

  // 4. Audio file extraction + checks
  const audioFile = formData.get("audio") as File | null;
  if (!audioFile) {
    await logAiCall({
      service: "transcribe",
      ip,
      userAgent,
      status: "validation",
    });
    return NextResponse.json(
      { error: "Fichier audio requis" },
      { status: 400 },
    );
  }

  // Defense in depth: re-check size after parse (content-length is the
  // multipart envelope, not the actual file).
  if (audioFile.size > MAX_AUDIO_BYTES) {
    return NextResponse.json(
      { error: "Fichier audio trop volumineux (max 25 MB)." },
      { status: 413 },
    );
  }

  // MIME validation — block direct calls trying to upload non-audio
  // payloads. Browser-recorded blobs always carry a real audio/* type.
  const mime = audioFile.type || "";
  if (!ALLOWED_MIME_PREFIXES.some((p) => mime.startsWith(p))) {
    return NextResponse.json(
      { error: "Format audio non supporté." },
      { status: 415 },
    );
  }

  // Magic-bytes check — le MIME est fourni par le client donc spoofable.
  // Lit les 16 premiers octets seulement (le reste reste streamable côté
  // FormData → Groq).
  const head = new Uint8Array(await audioFile.slice(0, 16).arrayBuffer());
  if (!isAudioMagic(head)) {
    log.warn("transcribe_magic_bytes_mismatch", {
      mime,
      headHex: Array.from(head).map((b) => b.toString(16).padStart(2, "0")).join(""),
    });
    return NextResponse.json(
      { error: "Format audio non supporté." },
      { status: 415 },
    );
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    log.error("transcribe_groq_key_missing");
    return NextResponse.json(
      { error: "Configuration serveur manquante" },
      { status: 500 },
    );
  }

  if (!rateCheck.reservationId) {
    log.error("transcribe_rate_limit_reservation_missing");
    return NextResponse.json(
      {
        error:
          "La dictée est temporairement indisponible. Vous pouvez continuer en saisissant votre texte.",
      },
      { status: 503, headers: { "Retry-After": "60" } },
    );
  }

  let costReservation;
  try {
    costReservation = await reserveServiceCost(
      rateCheck.reservationId,
      "transcribe",
      audioFile.size,
    );
  } catch (err) {
    log.error("transcribe_cost_reservation_unavailable", {
      err: err as Error,
    });
    return NextResponse.json(
      {
        error:
          "La dictée est temporairement indisponible. Vous pouvez continuer en saisissant votre texte.",
      },
      { status: 503, headers: { "Retry-After": "60" } },
    );
  }
  if (!costReservation.allowed) {
    await logAiCall({
      service: "transcribe",
      ip,
      userAgent,
      status: "blocked",
      blockReason: costReservation.reason,
    });
    return NextResponse.json(
      { error: costReservation.message },
      {
        status: 429,
        headers: {
          "Retry-After": String(costReservation.retryAfterSec || 3600),
        },
      },
    );
  }

  const startedAt = Date.now();
  try {
    // Create form data for Groq API
    const groqFormData = new FormData();
    groqFormData.append("file", audioFile);
    groqFormData.append("model", "whisper-large-v3");
    groqFormData.append("language", "fr");
    groqFormData.append("response_format", "json");

    const response = await fetch(
      "https://api.groq.com/openai/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        body: groqFormData,
      },
    );

    if (!response.ok) {
      log.error("transcribe_groq_api_error", {
        status: response.status,
        providerRequestId:
          response.headers.get("x-request-id") ||
          response.headers.get("request-id") ||
          undefined,
      });
      await logAiCall({
        service: "transcribe",
        ip,
        userAgent,
        status: "ai_error",
        durationMs: Date.now() - startedAt,
      });
      return NextResponse.json(
        { error: "Erreur lors de la transcription" },
        { status: response.status },
      );
    }

    const data = await response.json();

    // Le coût a déjà été réservé atomiquement avant l'appel. Cette ligne
    // enregistre uniquement l'issue et la latence afin de ne pas le doubler.
    await logAiCall({
      service: "transcribe",
      ip,
      userAgent,
      status: "ok",
      tokensUsed: 0,
      durationMs: Date.now() - startedAt,
    });

    return NextResponse.json({
      text: data.text || "",
    });
  } catch (err) {
    log.error("transcribe_unexpected_error", { err: err as Error });
    await logAiCall({
      service: "transcribe",
      ip,
      userAgent,
      status: "ai_error",
      durationMs: Date.now() - startedAt,
    });
    return NextResponse.json(
      { error: "Erreur lors de la transcription. Veuillez réessayer." },
      { status: 500 },
    );
  }
}
