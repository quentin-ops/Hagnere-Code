import { NextResponse } from "next/server";
import { CALENDLY_URL } from "@/lib/calendly";
import { Resend } from "resend";
import { eq } from "drizzle-orm";
import { getClientIp } from "@/lib/rate-limit";
import {
  bindReservationEmail,
  checkServiceRateLimit,
  hashEmail,
  logAiCall,
} from "@/lib/ai-rate-limit";
import {
  getMathChallengeSecret,
  isValidMathChallenge,
} from "@/lib/math-challenge";
import { getDb } from "@/db";
import { projectBrief } from "@/db/schema";
import { log } from "@/lib/logger";
import {
  confirmationMailFailureOutcome,
  deliverInquiryEmails,
  missingMailProviderOutcome,
  teamMailFailureOutcome,
} from "@/lib/project-inquiry-delivery";
import { sendResendEmail } from "@/lib/resend-email";
import {
  createInquirySlug,
  isValidInquiryIdempotencyKey,
} from "@/lib/inquiry-idempotency";
import {
  PayloadTooLargeError,
  readJsonWithLimit,
} from "@/lib/read-request-body";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 50_000;
const PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION = "2026-07-20";

// Extended payload — the funnel sends the FULL state so we can persist
// every field in the DB (the email message stays the human-readable summary).
type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  projectType?: string;
  timeline?: string;
  budget?: string;
  message?: string;
  phone?: string;
  honeypot?: string;
  mathChallenge?: unknown;

  // Funnel-specific fields (added for DB persistence)
  role?: string;
  siren?: string;
  projectKinds?: unknown;
  objectives?: unknown;
  description?: string;
  currentSituation?: string;
  audience?: string;
  mustHaves?: unknown;
  integrations?: unknown;
  existingAssets?: unknown;
  openScope?: string;
  decisionStage?: string;
  consent?: boolean;
};

function asStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is string => typeof x === "string").slice(0, 64);
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

/**
 * projectType / timeline / budget arrivent de deux formulaires aux options
 * différentes (footer + funnel /demarrer-un-projet, dont les libellés
 * varient selon le type de projet). Pas d'allowlist stricte — on vérifie
 * seulement que la valeur ressemble à un libellé court et pas à du spam
 * (URL, balisage). Les valeurs sont de toute façon échappées dans les
 * emails et stockées telles quelles en base.
 */
function isPlausibleLabel(v: string): boolean {
  if (!v) return true;
  if (/https?:\/\//i.test(v)) return false;
  // Bloque uniquement ce qui ressemble à une balise ("<script", "</b")
  // — PAS le "<" isolé : les libellés de budget légitimes commencent
  // par "< 15k", "< 3k€/mois", etc.
  if (/<[a-zA-Z/!]/.test(v)) return false;
  return true;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmailShell(preheader: string, innerHtml: string): string {
  return `
    <!doctype html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hagnéré Code</title>
      </head>
      <body style="margin:0;background:#f6f5f8;color:#0a0a0a;font-family:Inter,Arial,sans-serif">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${escapeHtml(preheader)}</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f5f8;padding:32px 12px">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e7e5ea;border-radius:20px;overflow:hidden;box-shadow:0 24px 70px rgba(17,17,17,0.08)">
                <tr>
                  <td style="background:#0a0a0a;padding:24px 28px;color:#fff">
                    <div style="display:inline-block;background:#fff;color:#0a0a0a;border-radius:8px;padding:7px 8px;font-weight:800;font-size:13px;letter-spacing:0">HC</div>
                    <div style="display:inline-block;margin-left:10px;vertical-align:middle;font-size:15px;font-weight:700">Hagnéré <span style="font-weight:400;color:#c4b5fd">Code</span></div>
                    <div style="height:3px;width:92px;background:#7c3aed;border-radius:999px;margin-top:18px"></div>
                  </td>
                </tr>
                ${innerHtml}
                <tr>
                  <td style="padding:22px 28px;background:#fafafa;border-top:1px solid #ededed;color:#737373;font-size:12px;line-height:1.55">
                    HAGNERE CODE · SASU au capital de 10 € · RCS Chambéry 993 672 856<br>
                    82 impasse de Bellevue, 73000 Bassens<br>
                    <a href="mailto:quentin@hagnere-patrimoine.fr" style="color:#4c1d95;text-decoration:none">quentin@hagnere-patrimoine.fr</a> · <a href="tel:+33374472018" style="color:#4c1d95;text-decoration:none">+33 3 74 47 20 18</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const userAgent = request.headers.get("user-agent");
  const idempotencyKey = request.headers.get("idempotency-key")?.trim() || null;

  let body: Body;
  try {
    body = await readJsonWithLimit<Body>(request, MAX_BODY_BYTES);
  } catch (err) {
    if (err instanceof PayloadTooLargeError) {
      return NextResponse.json(
        { error: "Payload trop volumineux." },
        { status: 413 },
      );
    }
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // 1. Anti-bot honeypot: bots fill every field, humans never see it.
  // Feign success silently so the bot doesn't retry.
  if (asText(body.honeypot)) {
    return NextResponse.json({ ok: true });
  }

  const mathChallengeSecret = getMathChallengeSecret();
  if (!mathChallengeSecret) {
    return NextResponse.json(
      {
        error:
          "Le contrôle anti-robot est temporairement indisponible. Écrivez à quentin@hagnere-patrimoine.fr ou réessayez plus tard.",
      },
      { status: 503 },
    );
  }

  // 2. Le rate-limit est réservé AVANT la validation du calcul. Ainsi, même
  // les réponses fausses et les relectures d'un token signé restent bornées
  // par IP et volume global. Le quota email n'est lié qu'après validation.
  // Une panne du stockage échoue fermée.
  let rateCheck: Awaited<ReturnType<typeof checkServiceRateLimit>>;
  try {
    rateCheck = await checkServiceRateLimit(
      ip,
      null,
      "inquiry",
      userAgent,
    );
  } catch (err) {
    log.error("project_inquiry_rate_limit_unavailable", { err: err as Error });
    return NextResponse.json(
      {
        error:
          "Le formulaire est temporairement indisponible. Écrivez à quentin@hagnere-patrimoine.fr ou réessayez plus tard.",
      },
      { status: 503 },
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

  // 3. L'équation a été émise et signée côté serveur. C'est une friction
  // anti-automatisation, complétée par le rate-limit ; ce n'est pas une preuve
  // autonome qu'un humain est à l'origine de la requête.
  if (!isValidMathChallenge(body.mathChallenge, mathChallengeSecret)) {
    await logAiCall({
      reservationId: rateCheck.reservationId,
      service: "inquiry",
      ip,
      userAgent,
      status: "blocked",
      blockReason: "captcha_failed",
    });
    return NextResponse.json(
      {
        error:
          "La réponse au calcul anti-robot est incorrecte. Vérifiez le calcul puis réessayez, ou écrivez à quentin@hagnere-patrimoine.fr.",
      },
      { status: 403 },
    );
  }

  const firstName = asText(body.firstName).trim().slice(0, 80);
  const lastName = asText(body.lastName).trim().slice(0, 80);
  const email = asText(body.email).trim().slice(0, 200);
  const company = asText(body.company).trim().slice(0, 120);
  const projectType = asText(body.projectType).trim().slice(0, 120);
  const timeline = asText(body.timeline).trim().slice(0, 80);
  const budget = asText(body.budget).trim().slice(0, 40);
  // 9000 : le message du funnel est un brief structuré complet — le
  // client compile jusqu'à 8000 caractères (brief-format.ts) plus un
  // en-tête ; la marge évite de tronquer les dernières lignes du brief.
  const message = asText(body.message).trim().slice(0, 9000);
  const phone = asText(body.phone).trim().slice(0, 40);
  const fullName = `${firstName} ${lastName}`.trim();

  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "Prénom requis";
  if (!lastName) errors.lastName = "Nom requis";
  if (!email || !isValidEmail(email)) errors.email = "Email invalide";
  if (!company) errors.company = "Entreprise requise";
  if (!message || message.length < 10) errors.message = "Décrivez votre projet en 1-2 phrases";
  if (body.consent !== true) {
    errors.consent =
      "Confirmez avoir pris connaissance de la politique de confidentialité et demander le traitement de votre demande professionnelle.";
  }
  if (!isPlausibleLabel(budget)) errors.budget = "Budget invalide";
  if (!isPlausibleLabel(projectType)) errors.projectType = "Type de projet invalide";
  if (!isPlausibleLabel(timeline)) errors.timeline = "Échéance invalide";
  if (!isValidInquiryIdempotencyKey(idempotencyKey)) {
    errors.submission = "Identifiant de soumission invalide";
  }
  // Phone : si fourni, doit ressembler à un numéro plausible.
  if (phone) {
    const phoneDigits = phone.replace(/[^\d]/g, "");
    if (
      phoneDigits.length < 6 ||
      phoneDigits.length > 18 ||
      !/^[+\d\s().-]{6,40}$/.test(phone)
    ) {
      errors.phone = "Numéro de téléphone invalide";
    }
  }

  if (Object.keys(errors).length > 0) {
    await logAiCall({
      reservationId: rateCheck.reservationId,
      service: "inquiry",
      ip,
      email,
      userAgent,
      status: "validation",
    });
    return NextResponse.json({ errors }, { status: 400 });
  }

  // Le quota lié à l'adresse n'est attaché qu'après captcha et validation.
  // Une requête invalide ne peut donc pas épuiser le quota d'un tiers.
  let emailRateCheck: Awaited<ReturnType<typeof bindReservationEmail>>;
  try {
    emailRateCheck = await bindReservationEmail(
      rateCheck.reservationId,
      "inquiry",
      email,
    );
  } catch (err) {
    log.error("project_inquiry_email_rate_limit_unavailable", {
      err: err as Error,
    });
    return NextResponse.json(
      {
        error:
          "Le formulaire est temporairement indisponible. Écrivez à quentin@hagnere-patrimoine.fr ou réessayez plus tard.",
      },
      { status: 503 },
    );
  }
  if (!emailRateCheck.allowed) {
    await logAiCall({
      reservationId: rateCheck.reservationId,
      service: "inquiry",
      ip,
      email,
      userAgent,
      status: "blocked",
      blockReason: emailRateCheck.reason,
    });
    return NextResponse.json(
      { error: emailRateCheck.message },
      {
        status: 429,
        headers: { "Retry-After": String(emailRateCheck.retryAfterSec) },
      },
    );
  }

  // ── DB persistence ────────────────────────────────────────────────
  // Insert the brief BEFORE sending the email. If the mail fails (Resend
  // outage, bad DNS, etc.) we still have the lead in the DB. The DB step
  // itself is best-effort — if DATABASE_URL is missing we log and continue
  // so the funnel never blocks on a misconfigured env.
  let briefId: number | null = null;
  const canonicalPayload = JSON.stringify([
    firstName,
    lastName,
    email.toLowerCase(),
    company,
    phone,
    projectType,
    timeline,
    budget,
    message,
    asText(body.role).trim(),
    asText(body.siren).replace(/\s/g, ""),
    asStringArray(body.projectKinds),
    asStringArray(body.objectives),
    asText(body.description),
    asText(body.currentSituation),
    asText(body.audience),
    asStringArray(body.mustHaves),
    asStringArray(body.integrations),
    asStringArray(body.existingAssets),
    asText(body.openScope),
    asText(body.decisionStage),
  ]);
  // Identifiant interne non énumérable et racine stable des clés Resend.
  // Il n'est jamais exposé dans la réponse publique.
  const briefSlug = createInquirySlug({
    secret: mathChallengeSecret,
    clientKey: idempotencyKey,
    canonicalPayload,
  });
  try {
    const db = getDb();
    const inserted = await db
      .insert(projectBrief)
      .values({
        publicSlug: briefSlug,
        firstName,
        lastName,
        email,
        phone: phone || null,
        company,
        role: asText(body.role).trim().slice(0, 80) || null,
        siren: asText(body.siren).replace(/\s/g, "").slice(0, 20) || null,
        projectKinds: asStringArray(body.projectKinds),
        objectives: asStringArray(body.objectives),
        description: asText(body.description).slice(0, 4000) || null,
        currentSituation: asText(body.currentSituation).slice(0, 2000) || null,
        audience: asText(body.audience).slice(0, 1000) || null,
        mustHaves: asStringArray(body.mustHaves),
        integrations: asStringArray(body.integrations),
        existingAssets: asStringArray(body.existingAssets),
        openScope: asText(body.openScope).slice(0, 2000) || null,
        timeline: timeline || null,
        budget: budget || null,
        decisionStage: asText(body.decisionStage).slice(0, 200) || null,
        consent: body.consent === true,
        privacyNoticeVersion: PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION,
        mailSent: false,
      })
      .onConflictDoNothing({ target: projectBrief.publicSlug })
      .returning({ id: projectBrief.id });
    briefId = inserted[0]?.id ?? null;
    if (briefId == null) {
      const existing = await db
        .select({ id: projectBrief.id })
        .from(projectBrief)
        .where(eq(projectBrief.publicSlug, briefSlug))
        .limit(1);
      briefId = existing[0]?.id ?? null;
    }
    // PII : on logge l'id et un email haché pour ne pas écrire l'adresse en clair.
    log.info("project_brief_inserted", { briefId, emailHash: hashEmail(email) });
  } catch (err) {
    // Don't fail the lead capture because of a DB hiccup — log and
    // continue with the email path.
    log.error("project_brief_db_insert_failed", { err: err as Error });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddr = process.env.CONTACT_TO_EMAIL || "quentin@hagnere-patrimoine.fr";
  const fromAddr = process.env.CONTACT_FROM_EMAIL || "contact@hagnere-code.ai";

  const subject = `[Projet] ${company} — ${fullName}`;
  const textBody = [
    "Nouveau contact projet — hagnere-code.ai",
    "",
    `Nom       : ${fullName}`,
    `Email     : ${email}`,
    `Téléphone : ${phone || "—"}`,
    `Entreprise: ${company}`,
    `Projet    : ${projectType || "non précisé"}`,
    `Budget    : ${budget || "non précisé"}`,
    `Échéance  : ${timeline || "non précisée"}`,
    `Notice vie privée lue : version ${PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION}`,
    "",
    "Message :",
    message,
  ].join("\n");

  const escapedMessage = escapeHtml(message);
  const htmlBody = renderEmailShell(
    `Nouveau contact projet : ${company}`,
    `
      <tr>
        <td style="padding:30px 28px 10px">
          <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6d28d9;font-weight:700">Nouveau projet</div>
          <h1 style="margin:10px 0 8px;font-size:28px;line-height:1.08;letter-spacing:0;color:#0a0a0a">Contact reçu depuis le site.</h1>
          <p style="margin:0;color:#525252;font-size:14px;line-height:1.6">Objectif interne : traiter le prochain jour ouvré. Répondre directement à l'email du prospect.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 28px 4px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 8px">
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Nom</td><td style="font-size:15px;font-weight:700">${escapeHtml(fullName)}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Email</td><td style="font-size:15px"><a href="mailto:${escapeHtml(email)}" style="color:#4c1d95;text-decoration:none">${escapeHtml(email)}</a></td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Téléphone</td><td style="font-size:15px">${escapeHtml(phone || "—")}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Entreprise</td><td style="font-size:15px">${escapeHtml(company)}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Projet</td><td style="font-size:15px">${escapeHtml(projectType || "non précisé")}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Budget</td><td style="font-size:15px">${escapeHtml(budget || "non précisé")}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Échéance</td><td style="font-size:15px">${escapeHtml(timeline || "non précisée")}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Notice vie privée</td><td style="font-size:15px">Version ${PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION} — prise de connaissance confirmée</td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 28px 30px">
          <div style="font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">Message</div>
          <div style="padding:16px 18px;background:#f8f7fb;border:1px solid #e9e5f5;border-radius:14px;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#171717">${escapedMessage}</div>
        </td>
      </tr>
    `,
  );

  const confirmationSubject = "Nous avons bien reçu votre message — Hagnéré Code";
  const confirmationText = [
    `Bonjour ${firstName},`,
    "",
    "Nous avons bien reçu votre message.",
    "",
    "Ce qui se passe maintenant :",
    "1. Votre brief est lu personnellement par notre équipe.",
    "2. Nous visons une réponse argumentée le prochain jour ouvré, sans délai garanti.",
    "3. Si le sujet s'y prête, nous vous proposons un créneau d'échange.",
    "",
    "Récapitulatif :",
    `Entreprise : ${company}`,
    `Projet     : ${projectType || "non précisé"}`,
    `Budget     : ${budget || "non précisé"}`,
    `Échéance   : ${timeline || "non précisée"}`,
    `Notice vie privée lue : version ${PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION}`,
    "",
    "Votre message :",
    message,
    "",
    `Pour aller plus vite, vous pouvez aussi réserver 30 min ici : ${CALENDLY_URL}`,
    "",
    "Hagnéré Code",
  ].filter(Boolean).join("\n");

  const confirmationHtml = renderEmailShell(
    "Votre message est bien arrivé. Objectif : le prochain jour ouvré.",
    `
      <tr>
        <td style="padding:32px 28px 8px">
          <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6d28d9;font-weight:700">Message reçu</div>
          <h1 style="margin:10px 0 12px;font-size:31px;line-height:1.04;letter-spacing:0;color:#0a0a0a">Bonjour ${escapeHtml(firstName)},<br>votre demande est bien arrivée.</h1>
          <p style="margin:0;color:#404040;font-size:15px;line-height:1.65">Votre message est arrivé au bon endroit. Il sera lu par quelqu'un qui code, pas par un commercial — et vous recevrez une réponse franche sur la meilleure prochaine étape.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px 6px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;border-radius:16px;color:#fff">
            <tr>
              <td style="padding:22px">
                <div style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#c4b5fd;font-weight:700">Ce qui se passe maintenant</div>
                <ol style="margin:14px 0 0;padding-left:20px;color:#f5f5f5;font-size:14px;line-height:1.8">
                  <li>Votre brief est lu personnellement par notre équipe.</li>
                  <li>Nous visons une réponse argumentée le prochain jour ouvré, sans délai garanti.</li>
                  <li>Si le sujet s'y prête, nous vous proposons un créneau d'échange.</li>
                </ol>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 28px">
          <div style="font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">Récapitulatif</div>
          <div style="border:1px solid #ededed;border-radius:14px;overflow:hidden">
            <div style="padding:13px 16px;border-bottom:1px solid #ededed"><b>Entreprise</b><br><span style="color:#525252">${escapeHtml(company)}</span></div>
            <div style="padding:13px 16px;border-bottom:1px solid #ededed"><b>Projet</b><br><span style="color:#525252">${escapeHtml(projectType || "non précisé")}</span></div>
            <div style="padding:13px 16px;border-bottom:1px solid #ededed"><b>Budget</b><br><span style="color:#525252">${escapeHtml(budget || "non précisé")}</span></div>
            <div style="padding:13px 16px;border-bottom:1px solid #ededed"><b>Échéance</b><br><span style="color:#525252">${escapeHtml(timeline || "non précisée")}</span></div>
            <div style="padding:13px 16px;border-bottom:1px solid #ededed"><b>Information vie privée</b><br><span style="color:#525252">Version ${PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION} — prise de connaissance confirmée</span></div>
            <div style="padding:13px 16px"><b>Message</b><br><span style="color:#525252;white-space:pre-wrap">${escapedMessage}</span></div>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:6px 28px 34px">
          <a href="${CALENDLY_URL}" style="display:inline-block;background:#0a0a0a;color:#fff;text-decoration:none;padding:14px 18px;border-radius:10px;font-weight:700;font-size:14px">Réserver 30 min</a>
          <span style="display:inline-block;margin-left:12px;color:#737373;font-size:13px">Sans engagement, visio ou téléphone.</span>
        </td>
      </tr>
    `,
  );

  // Sans fournisseur mail, un succès fictif n'est acceptable qu'en local.
  // En production, on distingue une capture DB (202) d'une perte totale (503).
  if (!apiKey) {
    log.warn("project_inquiry_no_resend_key", {
      briefId,
      persisted: briefId != null,
    });
    const outcome = missingMailProviderOutcome(
      process.env.NODE_ENV === "production",
      briefId != null,
    );
    return NextResponse.json(outcome.payload, { status: outcome.status });
  }

  // Helper to update mail_sent flag on the brief row (best-effort).
  async function markMailSent(): Promise<void> {
    if (briefId == null) return;
    try {
      await getDb()
        .update(projectBrief)
        .set({ mailSent: true, updatedAt: new Date() })
        .where(eq(projectBrief.id, briefId));
    } catch (err) {
      log.error("project_brief_mark_mail_sent_failed", { err: err as Error, briefId });
    }
  }

  const resend = new Resend(apiKey);
  const delivery = await deliverInquiryEmails(
    async () => {
      const result = await sendResendEmail(
        resend,
        {
          from: `Hagnéré Code <${fromAddr}>`,
          to: [toAddr],
          replyTo: email,
          subject,
          text: textBody,
          html: htmlBody,
        },
        `inquiry-${briefSlug}-team`,
      );
      return result.error
        ? { ok: false, errorName: result.error.name }
        : { ok: true };
    },
    async () => {
      const result = await sendResendEmail(
        resend,
        {
          from: `Hagnéré Code <${fromAddr}>`,
          to: [email],
          replyTo: toAddr,
          subject: confirmationSubject,
          text: confirmationText,
          html: confirmationHtml,
        },
        `inquiry-${briefSlug}-confirmation`,
      );
      return result.error
        ? { ok: false, errorName: result.error.name }
        : { ok: true };
    },
  );

  if (delivery.kind === "team_failed") {
    log.error("project_inquiry_resend_team_failed", {
      providerErrorName: delivery.errorName,
      briefId,
    });
    await logAiCall({
      reservationId: rateCheck.reservationId,
      service: "inquiry",
      ip,
      email,
      userAgent,
      status: "ai_error",
      briefId,
    });
    const outcome = teamMailFailureOutcome(briefId != null);
    return NextResponse.json(outcome.payload, { status: outcome.status });
  }

  await markMailSent();
  await logAiCall({
    reservationId: rateCheck.reservationId,
    service: "inquiry",
    ip,
    email,
    userAgent,
    status: "ok",
    briefId,
  });

  if (delivery.kind === "confirmation_failed") {
    log.error("project_inquiry_resend_confirmation_failed", {
      providerErrorName: delivery.errorName,
      briefId,
    });
    const outcome = confirmationMailFailureOutcome();
    return NextResponse.json(outcome.payload, { status: outcome.status });
  }

  return NextResponse.json({
    ok: true,
    captured: true,
    teamNotified: true,
    confirmationSent: true,
  });
}
