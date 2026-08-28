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
import { isProviderTimeoutError } from "@/lib/provider-timeout";

// 25 MB hard cap on the audio payload. Whisper's input ceiling is 25 MB
// already; rejecting earlier protects us from being used as a free
// transcription proxy via large multi-hour files.
const MAX_AUDIO_BYTES = 25 * 1024 * 1024;
// Marge pour l'enveloppe multipart (nom, headers et boundary).
const MAX_REQUEST_BYTES = MAX_AUDIO_BYTES + 1024 * 1024;
// Laisse à la fonction le temps de construire une réponse explicite avant le
// timeout de plateforme et évite de retenir une exécution sur un fetch suspendu.
const GROQ_TIMEOUT_MS = 45_000;
/**
 * Plafond de transcriptions simultanées PAR INSTANCE. Le rate-limit compte des
 * requêtes par heure, pas des exécutions concurrentes : sans ce garde-fou,
 * quelques envois simultanés de taille maximale suffisent à saturer la mémoire
 * d'une fonction serverless et à faire tomber la route entière en 500.
 * Le dépassement renvoie un 503 « réessayez », jamais une erreur silencieuse.
 */
const MAX_CONCURRENT_TRANSCRIPTIONS = parseInt(
  process.env.TRANSCRIBE_MAX_CONCURRENT || "4",
  10,
);
let inFlightTranscriptions = 0;

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
  // Garde-fou de concurrence : la mémoire, pas le quota horaire, est la
  // ressource critique quand plusieurs uploads maximum arrivent ensemble.
  if (inFlightTranscriptions >= MAX_CONCURRENT_TRANSCRIPTIONS) {
    log.warn("transcribe_concurrency_limit_reached", {
      inFlight: inFlightTranscriptions,
    });
    return NextResponse.json(
      {
        error:
          "Trop de dictées en cours. Réessayez dans quelques secondes ou saisissez votre texte.",
      },
      { status: 503, headers: { "Retry-After": "10" } },
    );
  }
  inFlightTranscriptions += 1;
  try {
    return await handleTranscription(request);
  } finally {
    inFlightTranscriptions -= 1;
  }
}

async function handleTranscription(request: NextRequest) {
  const ip = getClientIp(request);
  const userAgent = request.headers.get("user-agent");

  // 0. Provenance : la dictée n'est appelée que par une page du site, et
  // navigateurs comme `sendBeacon` envoient toujours `Origin` sur un POST.
  // Exiger l'en-tête coupe l'usage hors navigateur de ce proxy Whisper sans
  // rien retirer à un prospect. Ce n'est pas une preuve d'identité — un
  // client peut forger l'en-tête — mais cela ferme l'accès trivial.
  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");
  if (!origin || origin !== requestOrigin) {
    return NextResponse.json({ error: "Origine refusée." }, { status: 403 });
  }

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
    return NextResponse.json(
      { error: rateCheck.message },
      {
        status: 429,
        headers: { "Retry-After": String(rateCheck.retryAfterSec) },
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
      // Pas de copie supplémentaire : `readRequestBytesWithLimit` retourne
      // déjà un Uint8Array neuf, adossé à un ArrayBuffer standard exactement
      // dimensionné. Recopier ici doublait inutilement le pic mémoire d'une
      // requête (jusqu'à 26 Mo de payload autorisés).
      body: bodyBytes,
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
      reservationId: rateCheck.reservationId,
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
      reservationId: rateCheck.reservationId,
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
        signal: AbortSignal.timeout(GROQ_TIMEOUT_MS),
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
        reservationId: rateCheck.reservationId,
        service: "transcribe",
        ip,
        userAgent,
        status: "ai_error",
        durationMs: Date.now() - startedAt,
      });
      // Le statut du fournisseur ne devient JAMAIS le nôtre. Relayé tel quel,
      // un 401 de clé expirée ou un 429 de quota Groq se lisait côté client
      // comme un refus de notre API : le visiteur voyait « trop de tentatives »
      // alors qu'il n'avait rien dépassé, et nos propres plafonds devenaient
      // indiscernables d'une panne fournisseur. 429 reste donc réservé au
      // limiteur d'IP et à la réservation de coût ; toute défaillance amont
      // sort en 502. Le statut réel du fournisseur reste dans le journal
      // serveur `transcribe_groq_api_error` ci-dessus.
      return NextResponse.json(
        {
          error:
            "La transcription est momentanément indisponible. Réessayez ou saisissez votre texte.",
        },
        { status: 502 },
      );
    }

    const data = await response.json();

    // Le coût a déjà été réservé atomiquement avant l'appel. Cette ligne
    // enregistre uniquement l'issue et la latence afin de ne pas le doubler.
    await logAiCall({
      reservationId: rateCheck.reservationId,
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
    const timedOut = isProviderTimeoutError(err);
    log.error(timedOut ? "transcribe_provider_timeout" : "transcribe_unexpected_error", {
      err: err as Error,
    });
    await logAiCall({
      reservationId: rateCheck.reservationId,
      service: "transcribe",
      ip,
      userAgent,
      status: "ai_error",
      durationMs: Date.now() - startedAt,
    });
    return NextResponse.json(
      {
        error: timedOut
          ? "La transcription prend trop de temps. Réessayez avec un extrait plus court ou saisissez votre texte."
          : "Erreur lors de la transcription. Veuillez réessayer.",
      },
      { status: timedOut ? 504 : 500 },
    );
  }
}
