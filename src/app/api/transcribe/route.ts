import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  createRateLimitStore,
  gcRateLimitStore,
  getClientIp,
} from "@/lib/rate-limit";

// 25 MB hard cap on the audio payload. Whisper's input ceiling is 25 MB
// already; rejecting earlier protects us from being used as a free
// transcription proxy via large multi-hour files.
const MAX_AUDIO_BYTES = 25 * 1024 * 1024;

// Allowed MIME prefixes — matches what the funnel's MediaRecorder produces
// (webm/opus, mp4, mpeg, wav). Anything else is suspicious.
const ALLOWED_MIME_PREFIXES = ["audio/webm", "audio/mp4", "audio/mpeg", "audio/wav", "audio/ogg"];

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 h
const RATE_LIMIT_MAX = 20; // 20 transcriptions / IP / hour

const transcribeRateStore = createRateLimitStore();

export async function POST(request: NextRequest) {
  // 1. Rate limit
  gcRateLimitStore(transcribeRateStore);
  const ip = getClientIp(request);
  const rate = checkRateLimit(transcribeRateStore, ip, {
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: RATE_LIMIT_MAX,
  });
  if (!rate.ok) {
    return NextResponse.json(
      {
        error: `Trop de transcriptions. Réessayez dans ${Math.ceil(
          (rate.retryAfterSec || 3600) / 60,
        )} minutes.`,
      },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSec || 3600) },
      },
    );
  }

  // 2. Size cap (cheap, before reading body)
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_AUDIO_BYTES) {
    return NextResponse.json(
      { error: "Fichier audio trop volumineux (max 25 MB)." },
      { status: 413 },
    );
  }

  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File;

    if (!audioFile) {
      return NextResponse.json(
        { error: "Fichier audio requis" },
        { status: 400 }
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

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY is not set");
      return NextResponse.json(
        { error: "Configuration serveur manquante" },
        { status: 500 }
      );
    }

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
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API error:", errorText);
      return NextResponse.json(
        { error: "Erreur lors de la transcription" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      text: data.text || "",
    });
  } catch (error) {
    console.error("Transcription error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la transcription. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
