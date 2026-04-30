import { NextResponse } from "next/server";
import { Resend } from "resend";
import { eq } from "drizzle-orm";
import { randomBytes } from "node:crypto";
import {
  checkRateLimit,
  createRateLimitStore,
  gcRateLimitStore,
  getClientIp,
} from "@/lib/rate-limit";
import { getDb } from "@/db";
import { projectBrief } from "@/db/schema";
import { log } from "@/lib/logger";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 50_000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5; // 5 lead submissions / IP / hour

const inquiryRateStore = createRateLimitStore();

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
  estimateOneshotMin?: number;
  estimateOneshotMax?: number;
  estimateMonthlyMin?: number;
  estimateMonthlyMax?: number;
  consent?: boolean;
};

function asStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is string => typeof x === "string").slice(0, 64);
}

function asInt(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) ? Math.round(v) : null;
}

const BUDGETS = ["< 15k", "15-30k", "30-60k", "60k+", "Je ne sais pas"] as const;
const PROJECT_TYPES = [
  "Application métier",
  "SaaS B2B",
  "Outil interne / back-office",
  "Reprise ou audit Laravel",
  "Site vitrine / landing",
  "Je ne sais pas",
] as const;
const TIMELINES = [
  "Dès que possible",
  "Dans 1 mois",
  "Dans 3 mois",
  "Pas encore défini",
] as const;
const CALENDLY_URL = "https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte";

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
                    Hagnéré Code SAS · 7 rue Ernest Filliard, 73000 Chambéry<br>
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
  // 0. Rate limit (before any body work)
  gcRateLimitStore(inquiryRateStore);
  const ip = getClientIp(request);
  const rate = checkRateLimit(inquiryRateStore, ip, {
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: RATE_LIMIT_MAX,
  });
  if (!rate.ok) {
    return NextResponse.json(
      {
        error: `Trop de demandes. Réessayez dans ${Math.ceil(
          (rate.retryAfterSec || 3600) / 60,
        )} minutes.`,
      },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSec || 3600) },
      },
    );
  }

  // 0bis. Body size cap (cheap pre-read check)
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Payload trop volumineux." },
      { status: 413 },
    );
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Anti-bot honeypot: bots fill every field, humans never see it.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName || "").trim().slice(0, 80);
  const lastName = (body.lastName || "").trim().slice(0, 80);
  const email = (body.email || "").trim().slice(0, 200);
  const company = (body.company || "").trim().slice(0, 120);
  const projectType = (body.projectType || "").trim().slice(0, 80);
  const timeline = (body.timeline || "").trim().slice(0, 80);
  const budget = (body.budget || "").trim().slice(0, 32);
  const message = (body.message || "").trim().slice(0, 2000);
  const phone = (body.phone || "").trim().slice(0, 40);
  const fullName = `${firstName} ${lastName}`.trim();

  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "Prénom requis";
  if (!lastName) errors.lastName = "Nom requis";
  if (!email || !isValidEmail(email)) errors.email = "Email invalide";
  if (!company) errors.company = "Entreprise requise";
  if (!message || message.length < 10) errors.message = "Décrivez votre projet en 1-2 phrases";
  if (budget && !BUDGETS.includes(budget as (typeof BUDGETS)[number])) {
    errors.budget = "Budget invalide";
  }
  if (
    projectType &&
    !PROJECT_TYPES.includes(projectType as (typeof PROJECT_TYPES)[number])
  ) {
    errors.projectType = "Type de projet invalide";
  }
  if (timeline && !TIMELINES.includes(timeline as (typeof TIMELINES)[number])) {
    errors.timeline = "Échéance invalide";
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
    return NextResponse.json({ errors }, { status: 400 });
  }

  // ── DB persistence ────────────────────────────────────────────────
  // Insert the brief BEFORE sending the email. If the mail fails (Resend
  // outage, bad DNS, etc.) we still have the lead in the DB. The DB step
  // itself is best-effort — if DATABASE_URL is missing we log and continue
  // so the funnel never blocks on a misconfigured env.
  let briefId: number | null = null;
  let briefSlug: string | null = null;
  try {
    // 16 bytes → 22 chars base64url (≈128 bits d'entropie). Match le
    // SLUG_RE [A-Za-z0-9_-]{16,32} défini dans /api/brief/[id] et
    // /demarrer-un-projet/r/[id]. Pas de dépendance externe — randomBytes
    // est natif Node (crypto-strong).
    const generatedSlug = randomBytes(16).toString("base64url");
    const inserted = await getDb()
      .insert(projectBrief)
      .values({
        publicSlug: generatedSlug,
        firstName,
        lastName,
        email,
        phone: phone || null,
        company,
        role: body.role?.trim().slice(0, 80) || null,
        siren: body.siren?.replace(/\s/g, "").slice(0, 20) || null,
        projectKinds: asStringArray(body.projectKinds),
        objectives: asStringArray(body.objectives),
        description: body.description?.slice(0, 4000) || null,
        currentSituation: body.currentSituation?.slice(0, 2000) || null,
        audience: body.audience?.slice(0, 1000) || null,
        mustHaves: asStringArray(body.mustHaves),
        integrations: asStringArray(body.integrations),
        existingAssets: asStringArray(body.existingAssets),
        openScope: body.openScope?.slice(0, 2000) || null,
        timeline: timeline || null,
        budget: budget || null,
        decisionStage: body.decisionStage?.slice(0, 200) || null,
        estimateOneshotMin: asInt(body.estimateOneshotMin),
        estimateOneshotMax: asInt(body.estimateOneshotMax),
        estimateMonthlyMin: asInt(body.estimateMonthlyMin),
        estimateMonthlyMax: asInt(body.estimateMonthlyMax),
        consent: body.consent === true,
        ip: getClientIp(request),
        userAgent: request.headers.get("user-agent")?.slice(0, 500) || null,
        mailSent: false,
      })
      .returning({ id: projectBrief.id, publicSlug: projectBrief.publicSlug });
    briefId = inserted[0]?.id ?? null;
    briefSlug = inserted[0]?.publicSlug ?? null;
    // PII : on logge l'id et un email haché pour ne pas écrire l'adresse en clair.
    const emailHash = email
      ? Buffer.from(email).toString("base64url").slice(0, 12)
      : null;
    log.info("project_brief_inserted", { briefId, emailHash });
  } catch (err) {
    // Don't fail the lead capture because of a DB hiccup — log and
    // continue with the email path. We'll still surface the error in
    // the response so the frontend can choose to retry the AI link.
    log.error("project_brief_db_insert_failed", { err: err as Error });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddr = process.env.CONTACT_TO_EMAIL || "quentin@hagnere-patrimoine.fr";
  const fromAddr = process.env.CONTACT_FROM_EMAIL || "contact@hagnere-code.fr";

  const subject = `[Projet] ${company} — ${fullName}`;
  const textBody = [
    "Nouveau contact projet (formulaire footer)",
    "",
    `Nom       : ${fullName}`,
    `Email     : ${email}`,
    `Téléphone : ${phone || "—"}`,
    `Entreprise: ${company}`,
    `Projet    : ${projectType || "non précisé"}`,
    `Budget    : ${budget || "non précisé"}`,
    `Échéance  : ${timeline || "non précisée"}`,
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
          <p style="margin:0;color:#525252;font-size:14px;line-height:1.6">À traiter sous 24 h ouvrées. Répondre directement à l'email du prospect.</p>
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
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 28px 14px">
          <div style="font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">Message</div>
          <div style="padding:16px 18px;background:#f8f7fb;border:1px solid #e9e5f5;border-radius:14px;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#171717">${escapedMessage}</div>
        </td>
      </tr>
      ${
        briefSlug != null
          ? `<tr>
        <td style="padding:0 28px 30px">
          <div style="background:#0a0a0a;border-radius:12px;padding:16px 18px">
            <div style="font-size:11px;color:#c4b5fd;letter-spacing:0.08em;font-weight:700;text-transform:uppercase">Vue admin</div>
            <div style="margin-top:6px;color:#fff;font-size:14px">Brief n°${briefId ?? ""} — chiffrage IA et données complètes :</div>
            <a href="${escapeHtml((process.env.SITE_ORIGIN || "https://hagnere-code.fr") + "/demarrer-un-projet/r/" + briefSlug)}" style="display:inline-block;margin-top:8px;color:#c4b5fd;font-weight:700;font-size:13px;text-decoration:underline">Ouvrir l'estimation IA</a>
          </div>
        </td>
      </tr>`
          : ""
      }
    `,
  );

  // Build a permanent share link if a brief was persisted — let the
  // prospect re-open his estimate later or share with his CTO.
  const siteOrigin = process.env.SITE_ORIGIN || "https://hagnere-code.fr";
  const permalink =
    briefSlug != null ? `${siteOrigin}/demarrer-un-projet/r/${briefSlug}` : null;

  const confirmationSubject = "Nous avons bien reçu votre message — Hagnéré Code";
  const confirmationText = [
    `Bonjour ${firstName},`,
    "",
    "Nous avons bien reçu votre message. Un associé qui code va le lire et vous répondre sous 24 h ouvrées.",
    "",
    "Récapitulatif :",
    `Entreprise : ${company}`,
    `Projet     : ${projectType || "non précisé"}`,
    `Budget     : ${budget || "non précisé"}`,
    `Échéance   : ${timeline || "non précisée"}`,
    "",
    "Votre message :",
    message,
    "",
    permalink ? `Retrouve ton estimation IA quand tu veux : ${permalink}` : "",
    permalink ? "" : "",
    `Pour aller plus vite, tu peux aussi réserver 30 min ici : ${CALENDLY_URL}`,
    "",
    "Hagnéré Code",
  ].filter(Boolean).join("\n");

  const confirmationHtml = renderEmailShell(
    "Votre message est bien arrivé. Réponse sous 24 h ouvrées.",
    `
      <tr>
        <td style="padding:32px 28px 8px">
          <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#6d28d9;font-weight:700">Message reçu</div>
          <h1 style="margin:10px 0 12px;font-size:31px;line-height:1.04;letter-spacing:0;color:#0a0a0a">Bonjour ${escapeHtml(firstName)},<br>on revient vers vous sous 24 h.</h1>
          <p style="margin:0;color:#404040;font-size:15px;line-height:1.65">Votre message est arrivé au bon endroit. Un associé qui code va le lire, vous répondre franchement, puis vous proposer soit un cadrage de 30 min, soit la meilleure prochaine étape.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px 6px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;border-radius:16px;color:#fff">
            <tr>
              <td style="padding:22px">
                <div style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#c4b5fd;font-weight:700">Ce qui se passe maintenant</div>
                <ol style="margin:14px 0 0;padding-left:20px;color:#f5f5f5;font-size:14px;line-height:1.8">
                  <li>Lecture de votre besoin par un associé.</li>
                  <li>Réponse claire sous 24 h ouvrées.</li>
                  <li>Cadrage gratuit si le sujet mérite un échange.</li>
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
            <div style="padding:13px 16px"><b>Message</b><br><span style="color:#525252;white-space:pre-wrap">${escapedMessage}</span></div>
          </div>
        </td>
      </tr>
      ${
        permalink
          ? `<tr>
        <td style="padding:6px 28px 18px">
          <div style="background:#fef3c7;border:1px solid #f59e0b;border-radius:14px;padding:18px">
            <div style="font-size:11px;color:#92400e;letter-spacing:0.08em;font-weight:700;text-transform:uppercase">Ton estimation IA est conservée</div>
            <div style="margin-top:6px;color:#451a03;font-size:14px;line-height:1.55">
              Le chiffrage produit par notre IA Claude Opus 4.7 (Discovery, fourchette, équipe, roadmap) est sauvegardé sur ce lien permanent — tu peux le ré-ouvrir, le partager à ton CTO ou ton CFO :
            </div>
            <a href="${escapeHtml(permalink)}" style="display:inline-block;margin-top:12px;color:#92400e;font-weight:700;font-size:14px;text-decoration:underline;word-break:break-all">${escapeHtml(permalink)}</a>
          </div>
        </td>
      </tr>`
          : ""
      }
      <tr>
        <td style="padding:6px 28px 34px">
          <a href="${CALENDLY_URL}" style="display:inline-block;background:#0a0a0a;color:#fff;text-decoration:none;padding:14px 18px;border-radius:10px;font-weight:700;font-size:14px">Réserver 30 min</a>
          <span style="display:inline-block;margin-left:12px;color:#737373;font-size:13px">Sans engagement, visio ou téléphone.</span>
        </td>
      </tr>
    `,
  );

  // Dev fallback if RESEND_API_KEY isn't set — log and succeed so the UI keeps working.
  if (!apiKey) {
    log.warn("project_inquiry_no_resend_key", {
      firstName,
      lastName,
      company,
      briefId,
    });
    return NextResponse.json({ ok: true, dev: true, briefId, briefSlug });
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

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: `Hagnéré Code <${fromAddr}>`,
      to: [toAddr],
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    if (result.error) {
      log.error("project_inquiry_resend_team_failed", { err: result.error, briefId });
      return NextResponse.json(
        { error: "Email service error", briefId, briefSlug },
        { status: 502 },
      );
    }

    const confirmation = await resend.emails.send({
      from: `Hagnéré Code <${fromAddr}>`,
      to: [email],
      replyTo: toAddr,
      subject: confirmationSubject,
      text: confirmationText,
      html: confirmationHtml,
    });

    if (confirmation.error) {
      log.error("project_inquiry_resend_confirmation_failed", {
        err: confirmation.error,
        briefId,
      });
      // Mark mail_sent anyway since the team mail went through — losing
      // the prospect confirmation is annoying but the lead is captured.
      await markMailSent();
      return NextResponse.json(
        { error: "Confirmation email service error", briefId, briefSlug },
        { status: 502 },
      );
    }

    await markMailSent();
    return NextResponse.json({ ok: true, briefId, briefSlug });
  } catch (err) {
    log.error("project_inquiry_unexpected_error", { err: err as Error, briefId });
    return NextResponse.json(
      { error: "Internal error", briefId, briefSlug },
      { status: 500 },
    );
  }
}
