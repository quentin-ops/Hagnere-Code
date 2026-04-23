import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
  phone?: string;
  honeypot?: string;
};

const BUDGETS = ["< 15k", "15-30k", "30-60k", "60k+", "Je ne sais pas"] as const;

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

export async function POST(request: Request) {
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
  const budget = (body.budget || "").trim().slice(0, 32);
  const message = (body.message || "").trim().slice(0, 2000);
  const phone = (body.phone || "").trim().slice(0, 40);

  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "Prénom requis";
  if (!lastName) errors.lastName = "Nom requis";
  if (!email || !isValidEmail(email)) errors.email = "Email invalide";
  if (!company) errors.company = "Entreprise requise";
  if (!message || message.length < 10) errors.message = "Décrivez votre projet en 1-2 phrases";
  if (budget && !BUDGETS.includes(budget as (typeof BUDGETS)[number])) {
    errors.budget = "Budget invalide";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddr = process.env.CONTACT_TO_EMAIL || "hello@hagnere-code.fr";
  const fromAddr = process.env.CONTACT_FROM_EMAIL || "contact@hagnere-code.fr";

  const subject = `[Projet] ${company} — ${firstName} ${lastName}`;
  const textBody = [
    "Nouveau contact projet (formulaire footer)",
    "",
    `Nom       : ${firstName} ${lastName}`,
    `Email     : ${email}`,
    `Téléphone : ${phone || "—"}`,
    `Entreprise: ${company}`,
    `Budget    : ${budget || "non précisé"}`,
    "",
    "Message :",
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;color:#0a0a0a;line-height:1.5">
      <h2 style="margin:0 0 16px;font-size:18px;letter-spacing:-0.01em">Nouveau contact projet</h2>
      <p style="margin:0 0 20px;color:#737373;font-size:12px">Via formulaire footer</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:560px">
        <tr><td style="padding:6px 12px 6px 0;color:#737373;width:120px">Nom</td><td style="padding:6px 0"><b>${escapeHtml(firstName)} ${escapeHtml(lastName)}</b></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#737373">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#737373">Téléphone</td><td style="padding:6px 0">${escapeHtml(phone || "—")}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#737373">Entreprise</td><td style="padding:6px 0">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;color:#737373">Budget</td><td style="padding:6px 0">${escapeHtml(budget || "non précisé")}</td></tr>
      </table>
      <h3 style="margin:24px 0 8px;font-size:14px">Message</h3>
      <div style="padding:14px 16px;background:#fafafa;border:1px solid #e5e5e5;border-radius:10px;white-space:pre-wrap">${escapeHtml(message)}</div>
    </div>
  `;

  // Dev fallback if RESEND_API_KEY isn't set — log and succeed so the UI keeps working.
  if (!apiKey) {
    console.warn(
      "[api/project-inquiry] RESEND_API_KEY not set — email not sent. Payload:",
      { firstName, lastName, email, company, budget, phone, message },
    );
    return NextResponse.json({ ok: true, dev: true });
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
      console.error("[api/project-inquiry] Resend error:", result.error);
      return NextResponse.json(
        { error: "Email service error" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/project-inquiry] Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500 },
    );
  }
}
