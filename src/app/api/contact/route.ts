import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SITE_URL = "https://hagnere-code.fr";
const CONTACT_EMAIL = "hello@hagnere-code.fr";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

interface ContactFormData {
  type: "individual" | "company";
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  // Company specific fields
  companyName?: string;
  siren?: string;
  website?: string;
}

export async function POST(request: NextRequest) {
  try {
    const resend = getResend();

    if (!resend) {
      console.error("[api/contact] RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Le formulaire est temporairement indisponible." },
        { status: 503 }
      );
    }

    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Build email content
    const isCompany = data.type === "company";
    const subject = isCompany
      ? `[Entreprise] Nouveau message de ${data.companyName || data.firstName}`
      : `[Particulier] Nouveau message de ${data.firstName} ${data.lastName}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #fafafa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e5e5; overflow: hidden;">

                  <!-- Header -->
                  <tr>
                    <td style="background-color: #171717; padding: 24px 40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="vertical-align: middle;">
                            <img src="${SITE_URL}/logos/logo-email.png" alt="Hagnéré Code" width="44" height="44" style="display: block; border-radius: 50%;" />
                          </td>
                          <td style="padding-left: 14px; vertical-align: middle;">
                            <h1 style="margin: 0; font-size: 18px; font-weight: 600; color: #ffffff; letter-spacing: -0.3px;">
                              Hagnéré Code
                            </h1>
                          </td>
                          <td align="right" style="vertical-align: middle;">
                            <span style="display: inline-block; padding: 6px 12px; background-color: ${isCompany ? "#3b82f6" : "#22c55e"}; color: #ffffff; font-size: 12px; font-weight: 500; border-radius: 9999px;">
                              ${isCompany ? "Entreprise" : "Particulier"}
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">

                      <!-- Title -->
                      <h2 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 600; color: #171717; letter-spacing: -0.5px;">
                        Nouveau message de contact
                      </h2>

                      ${isCompany && data.companyName ? `
                      <!-- Company Card -->
                      <div style="background-color: #fafafa; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
                        <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #737373; text-transform: uppercase; letter-spacing: 0.5px;">
                          Entreprise
                        </p>
                        <p style="margin: 0; font-size: 16px; font-weight: 600; color: #171717;">
                          ${data.companyName}
                        </p>
                        ${data.siren ? `<p style="margin: 8px 0 0 0; font-size: 14px; color: #525252;">SIREN: <span style="font-family: 'SF Mono', Monaco, monospace; background: #e5e5e5; padding: 2px 6px; border-radius: 4px;">${data.siren}</span></p>` : ""}
                        ${data.website ? `<p style="margin: 8px 0 0 0; font-size: 14px; color: #525252;">Site: <a href="${data.website}" style="color: #171717; text-decoration: underline;">${data.website}</a></p>` : ""}
                      </div>
                      ` : ""}

                      <!-- Contact Card -->
                      <div style="background-color: #fafafa; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
                        <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #737373; text-transform: uppercase; letter-spacing: 0.5px;">
                          Contact
                        </p>
                        <p style="margin: 0; font-size: 16px; font-weight: 600; color: #171717;">
                          ${data.firstName} ${data.lastName}
                        </p>
                        <table cellpadding="0" cellspacing="0" style="margin-top: 12px;">
                          <tr>
                            <td style="padding-right: 8px;">
                              <a href="mailto:${data.email}" style="display: inline-block; padding: 8px 16px; background-color: #171717; color: #ffffff; font-size: 13px; font-weight: 500; text-decoration: none; border-radius: 6px;">
                                ${data.email}
                              </a>
                            </td>
                            ${data.phone ? `
                            <td>
                              <a href="tel:${data.phone}" style="display: inline-block; padding: 8px 16px; background-color: #ffffff; color: #171717; font-size: 13px; font-weight: 500; text-decoration: none; border-radius: 6px; border: 1px solid #e5e5e5;">
                                ${data.phone}
                              </a>
                            </td>
                            ` : ""}
                          </tr>
                        </table>
                      </div>

                      <!-- Message Card -->
                      <div style="background-color: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px;">
                        <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 500; color: #737373; text-transform: uppercase; letter-spacing: 0.5px;">
                          Message
                        </p>
                        <p style="margin: 12px 0 0 0; font-size: 15px; line-height: 1.7; color: #171717; white-space: pre-wrap;">
${data.message}
                        </p>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid #e5e5e5; background-color: #fafafa;">
                      <p style="margin: 0; font-size: 12px; color: #a3a3a3; text-align: center;">
                        Ce message a été envoyé depuis le formulaire de contact de
                        <a href="${SITE_URL}" style="color: #737373; text-decoration: none; font-weight: 500;">hagnere-code.fr</a>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const textContent = `
Nouveau message de contact

Type: ${isCompany ? "Entreprise" : "Particulier"}
${isCompany && data.companyName ? `Entreprise: ${data.companyName}` : ""}
${isCompany && data.siren ? `SIREN: ${data.siren}` : ""}
${isCompany && data.website ? `Site web: ${data.website}` : ""}

Contact: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.phone ? `Téléphone: ${data.phone}` : ""}

Message:
${data.message}

---
Envoyé depuis hagnere-code.fr
    `.trim();

    // Email de notification pour Hagnéré Code
    const { data: emailData, error } = await resend.emails.send({
      from: `Hagnéré Code <${CONTACT_EMAIL}>`,
      to: ["quentin@hagnere-patrimoine.fr"],
      replyTo: data.email,
      subject: subject,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du message" },
        { status: 500 }
      );
    }

    // Email de confirmation pour le client
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #fafafa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fafafa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e5e5; overflow: hidden;">

                  <!-- Header -->
                  <tr>
                    <td style="background-color: #171717; padding: 24px 40px;">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="vertical-align: middle;">
                            <img src="${SITE_URL}/logos/logo-email.png" alt="Hagnéré Code" width="44" height="44" style="display: block; border-radius: 50%;" />
                          </td>
                          <td style="padding-left: 14px; vertical-align: middle;">
                            <h1 style="margin: 0; font-size: 18px; font-weight: 600; color: #ffffff; letter-spacing: -0.3px;">
                              Hagnéré Code
                            </h1>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">

                      <!-- Greeting -->
                      <h2 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 600; color: #171717; letter-spacing: -0.5px;">
                        Bonjour ${data.firstName},
                      </h2>
                      <p style="margin: 0 0 32px 0; font-size: 16px; color: #525252; line-height: 1.6;">
                        Merci de nous avoir contactés ! Nous avons bien reçu votre demande.
                      </p>

                      <!-- Confirmation Card -->
                      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="vertical-align: top; padding-right: 12px;">
                              <div style="width: 24px; height: 24px; background-color: #22c55e; border-radius: 50%; display: inline-block; text-align: center; line-height: 24px;">
                                <span style="color: #ffffff; font-size: 14px;">✓</span>
                              </div>
                            </td>
                            <td>
                              <p style="margin: 0 0 4px 0; font-size: 15px; font-weight: 600; color: #166534;">
                                Message bien reçu
                              </p>
                              <p style="margin: 0; font-size: 14px; color: #15803d;">
                                Nous revenons vers vous sous 24 heures ouvrées pour répondre à votre demande d'informations.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Recap Card -->
                      <div style="background-color: #fafafa; border: 1px solid #e5e5e5; border-radius: 8px; padding: 20px;">
                        <p style="margin: 0 0 16px 0; font-size: 11px; font-weight: 500; color: #737373; text-transform: uppercase; letter-spacing: 0.5px;">
                          Récapitulatif de votre message
                        </p>
                        <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #525252; white-space: pre-wrap; background: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e5e5e5;">
${data.message}
                        </p>
                      </div>

                      <!-- Contact Info -->
                      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
                        <p style="margin: 0 0 12px 0; font-size: 14px; color: #737373;">
                          Une question urgente ? Contactez-nous directement :
                        </p>
                        <table cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-right: 16px; padding-bottom: 8px;">
                              <a href="mailto:${CONTACT_EMAIL}" style="color: #171717; font-weight: 500; text-decoration: none; font-size: 14px;">
                                ${CONTACT_EMAIL}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 8px;">
                              <a href="tel:+33374472018" style="color: #171717; font-weight: 500; text-decoration: none; font-size: 14px;">
                                +33 3 74 47 20 18
                              </a>
                            </td>
                          </tr>
                        </table>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid #e5e5e5; background-color: #fafafa;">
                      <p style="margin: 0 0 8px 0; font-size: 14px; color: #525252; text-align: center;">
                        À très bientôt,
                      </p>
                      <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #171717; text-align: center;">
                        L'équipe Hagnéré Code
                      </p>
                      <p style="margin: 0 0 4px 0; font-size: 12px; color: #a3a3a3; text-align: center;">
                        <a href="${SITE_URL}" style="color: #737373; text-decoration: none;">hagnere-code.fr</a>
                      </p>
                      <p style="margin: 0; font-size: 12px; color: #a3a3a3; text-align: center;">
                        7 Rue Ernest Filliard, 73000 Chambéry
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const confirmationText = `
Bonjour ${data.firstName},

Merci de nous avoir contactés ! Nous avons bien reçu votre demande.

Nous revenons vers vous sous 24 heures ouvrées pour répondre à votre demande d'informations.

---
Récapitulatif de votre message :

${data.message}

---
Une question urgente ? Contactez-nous directement :
- Email : ${CONTACT_EMAIL}
- Téléphone : +33 3 74 47 20 18

À très bientôt,
L'équipe Hagnéré Code

hagnere-code.fr
7 Rue Ernest Filliard, 73000 Chambéry
    `.trim();

    // Envoyer l'email de confirmation au client (ne pas bloquer si ça échoue)
    await resend.emails.send({
      from: `Hagnéré Code <${CONTACT_EMAIL}>`,
      to: [data.email],
      subject: "Nous avons bien reçu votre message - Hagnéré Code",
      html: confirmationHtml,
      text: confirmationText,
    }).catch((err) => {
      console.error("Confirmation email error:", err);
      // On ne bloque pas si l'email de confirmation échoue
    });

    return NextResponse.json({
      success: true,
      messageId: emailData?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
