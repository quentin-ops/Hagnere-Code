import type { CreateEmailResponse, Resend } from "resend";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { sendResendEmail } from "@/lib/resend-email";

/**
 * Coquille HTML, gabarit et envoi de la notification équipe d'un brief projet.
 *
 * Ce module n'a pas été créé pour factoriser du HTML : il existe parce qu'un
 * brief doit pouvoir être RE-notifié. Tant que la coquille et l'envoi vivaient
 * dans le corps de `POST /api/project-inquiry`, un brief dont le mail d'équipe
 * avait échoué restait en base avec `mail_sent = false` sans qu'aucun autre
 * code ne sache le mettre en forme ni l'expédier : personne ne le voyait
 * jamais. La route de rejeu (`/api/cron/replay-briefs`) partage donc ici la
 * coquille, l'échappement, les clés d'idempotence et l'appel Resend.
 *
 * Ce que le module ne prend PAS en charge : le corps du mail de la soumission
 * en direct. La route dispose du message compilé par le tunnel — que
 * `project_brief` ne conserve pas — et compose son propre corps. Le rejeu, lui,
 * ne peut que reconstruire un corps depuis les colonnes stockées : les deux
 * textes ne peuvent pas être identiques, et prétendre le contraire aurait
 * produit un gabarit paramétré au point de n'être plus lisible.
 */

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderEmailShell(preheader: string, innerHtml: string): string {
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
                    ${CONTACT_ADDRESS.street}, ${CONTACT_ADDRESS.postalCode} ${CONTACT_ADDRESS.locality}<br>
                    <a href="mailto:${CONTACT_EMAIL}" style="color:#4c1d95;text-decoration:none">${CONTACT_EMAIL}</a> · <a href="tel:${CONTACT_PHONE_E164}" style="color:#4c1d95;text-decoration:none">${CONTACT_PHONE_DISPLAY}</a>
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

/** Ligne « libellé / valeur » du tableau récapitulatif du mail. */
export type InquiryMailRow = { label: string; value: string };

/**
 * Champs réellement affichés dans la notification. Volontairement plats : le
 * rejeu les relit des colonnes de `project_brief` et n'a pas à connaître la
 * forme du payload du tunnel.
 */
export type TeamInquiryEmailFields = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  privacyNoticeVersion: string;
  message: string;
  /**
   * Bloc « provenance » déjà formaté par `inquiry-email.ts` de la route :
   * les couples libellé/valeur pour le tableau HTML, et les lignes texte
   * alignées pour la version texte. On passe les DEUX plutôt que de recalculer
   * l'alignement ici — une seconde implémentation du même formatage finirait
   * par diverger, et la provenance ne doit pas se lire différemment selon que
   * le mail part à la soumission ou au rejeu.
   */
  provenance?: { rows: InquiryMailRow[]; textLines: string[] } | null;
  /**
   * Renseigné uniquement par le rejeu. Le lecteur doit savoir qu'il reçoit un
   * brief ancien, et d'où vient le corps du message : les colonnes stockées,
   * pas le texte d'origine.
   */
  replayNotice?: string | null;
};

export type TeamInquiryEmailContent = {
  subject: string;
  text: string;
  html: string;
};

export function buildTeamInquiryEmail(
  fields: TeamInquiryEmailFields,
): TeamInquiryEmailContent {
  const replayNotice = fields.replayNotice?.trim() || null;

  const subject = `[Projet] ${fields.company} — ${fields.fullName}`;
  const textBody = [
    "Nouveau contact projet — hagnere-code.ai",
    ...(replayNotice ? ["", replayNotice] : []),
    "",
    `Nom       : ${fields.fullName}`,
    `Email     : ${fields.email}`,
    `Téléphone : ${fields.phone || "—"}`,
    `Entreprise: ${fields.company}`,
    `Projet    : ${fields.projectType || "non précisé"}`,
    `Budget    : ${fields.budget || "non précisé"}`,
    `Échéance  : ${fields.timeline || "non précisée"}`,
    `Notice vie privée lue : version ${fields.privacyNoticeVersion}`,
    ...(fields.provenance
      ? ["", "Provenance :", ...fields.provenance.textLines]
      : []),
    "",
    "Message :",
    fields.message,
  ].join("\n");

  const html = renderEmailShell(
    `Nouveau contact projet : ${fields.company}`,
    `
      ${
        replayNotice
          ? `<tr>
        <td style="padding:22px 28px 0">
          <div style="padding:14px 16px;background:#fff7ed;border:1px solid #fed7aa;border-radius:14px;font-size:13px;line-height:1.6;color:#7c2d12">${escapeHtml(replayNotice)}</div>
        </td>
      </tr>`
          : ""
      }
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
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Nom</td><td style="font-size:15px;font-weight:700">${escapeHtml(fields.fullName)}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Email</td><td style="font-size:15px"><a href="mailto:${escapeHtml(fields.email)}" style="color:#4c1d95;text-decoration:none">${escapeHtml(fields.email)}</a></td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Téléphone</td><td style="font-size:15px">${escapeHtml(fields.phone || "—")}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Entreprise</td><td style="font-size:15px">${escapeHtml(fields.company)}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Projet</td><td style="font-size:15px">${escapeHtml(fields.projectType || "non précisé")}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Budget</td><td style="font-size:15px">${escapeHtml(fields.budget || "non précisé")}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Échéance</td><td style="font-size:15px">${escapeHtml(fields.timeline || "non précisée")}</td></tr>
            <tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">Notice vie privée</td><td style="font-size:15px">Version ${fields.privacyNoticeVersion} — prise de connaissance confirmée</td></tr>
            ${(fields.provenance?.rows ?? [])
              .map(
                (row) =>
                  `<tr><td style="width:130px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">${escapeHtml(row.label)}</td><td style="font-size:15px;color:#525252">${escapeHtml(row.value)}</td></tr>`,
              )
              .join("")}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:18px 28px 30px">
          <div style="font-size:12px;color:#737373;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px">Message</div>
          <div style="padding:16px 18px;background:#f8f7fb;border:1px solid #e9e5f5;border-radius:14px;white-space:pre-wrap;font-size:14px;line-height:1.6;color:#171717">${escapeHtml(fields.message)}</div>
        </td>
      </tr>
    `,
  );

  return { subject, text: textBody, html };
}

/**
 * Clé d'idempotence de la notification équipe, dérivée du slug interne du
 * brief. Deux soumissions identiques produisent le même slug, donc la même
 * clé : Resend ne délivre alors qu'un seul courriel.
 */
export function teamMailIdempotencyKey(briefSlug: string): string {
  return `inquiry-${briefSlug}-team`;
}

/**
 * Clé d'idempotence du REJEU. Distincte de celle de l'envoi initial, et c'est
 * délibéré : le corps rejoué est reconstruit depuis les colonnes stockées, il
 * ne peut pas être identique à l'original, et Resend refuse une même clé
 * portant une charge différente. Elle reste STABLE d'une exécution du cron à
 * l'autre — c'est ce qui empêche un cron toutes les quinze minutes de
 * renotifier le même brief en boucle si le drapeau `mail_sent` ne repasse pas.
 */
export function teamMailReplayIdempotencyKey(briefSlug: string): string {
  return `inquiry-${briefSlug}-team-replay`;
}

export type TeamMailAttempt = { ok: true } | { ok: false; errorName: string };

/** Envoie la notification équipe et normalise l'issue du fournisseur. */
export async function sendTeamInquiryEmail(
  resend: Pick<Resend, "emails">,
  args: {
    from: string;
    to: string;
    replyTo: string;
    idempotencyKey: string;
    content: TeamInquiryEmailContent;
  },
): Promise<TeamMailAttempt> {
  const result: CreateEmailResponse = await sendResendEmail(
    resend,
    {
      from: args.from,
      to: [args.to],
      replyTo: args.replyTo,
      subject: args.content.subject,
      text: args.content.text,
      html: args.content.html,
    },
    args.idempotencyKey,
  );
  return result.error
    ? { ok: false, errorName: result.error.name }
    : { ok: true };
}
