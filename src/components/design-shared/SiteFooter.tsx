"use client";

import Link from "next/link";
import { useCallback, useRef, useState, type FormEvent } from "react";
import { VoiceDictateButton } from "./VoiceDictateButton";
import {
  MathChallenge,
  isMathAnswerCorrect,
  toMathChallengePayload,
  type MathChallengeValue,
} from "@/components/project-funnel/MathChallenge";
import { TEAM_TOTAL_COUNT } from "@/lib/team";
import { CALENDLY_URL } from "@/lib/calendly";
import {
  clearProjectInquiryClientKey,
  getProjectInquiryClientKey,
} from "@/lib/project-inquiry-client-key";
import "./site-footer.css";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message?: string }
  | { kind: "error"; message: string; fields?: Record<string, string> };

const BUDGETS = ["< 15k", "15-30k", "30-60k", "60k+", "Je ne sais pas"];
const PROJECT_TYPES = [
  "Application métier",
  "SaaS B2B",
  "Outil interne / back-office",
  "Reprise ou audit Laravel",
  "Site vitrine / landing",
  "Site e-commerce / boutique en ligne",
  "Application mobile",
  "Je ne sais pas",
];
const TIMELINES = [
  "Dès que possible",
  "Dans 1 mois",
  "Dans 3 mois",
  "Pas encore défini",
];

type ContactProjectSectionProps = {
  headingLevel?: "h1" | "h2";
  className?: string;
  contactPageCopy?: boolean;
};

export function ContactProjectSection({
  headingLevel = "h2",
  className = "",
  contactPageCopy = false,
}: ContactProjectSectionProps) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [message, setMessage] = useState("");
  const [challengeEnabled, setChallengeEnabled] = useState(false);
  // Anti-bot maison : question de calcul, vérifiée côté client avant envoi
  // puis revalidée server-side par /api/project-inquiry.
  const [math, setMath] = useState<MathChallengeValue | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const submissionKeyRef = useRef<string | null>(null);

  const handleTranscribed = useCallback((text: string) => {
    setMessage((prev) => {
      const trimmed = prev.trim();
      const next = trimmed ? `${trimmed}\n\n${text}` : text;
      // Re-focus the textarea so the user sees the cursor land at the end.
      requestAnimationFrame(() => {
        const el = messageRef.current;
        if (el) {
          el.focus();
          el.setSelectionRange(next.length, next.length);
        }
      });
      return next;
    });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!challengeEnabled) {
      setChallengeEnabled(true);
      setStatus({
        kind: "error",
        message: "Complétez le contrôle anti-robot qui vient de s’afficher.",
        fields: { mathChallenge: "Répondez au calcul avant l’envoi." },
      });
      return;
    }

    if (!isMathAnswerCorrect(math)) {
      setStatus({
        kind: "error",
        message: "La réponse au calcul anti-robot est incorrecte.",
        fields: { mathChallenge: "Réponse incorrecte — recomptez." },
      });
      return;
    }

    const payload = {
      firstName: String(data.get("firstName") || "").trim(),
      lastName: String(data.get("lastName") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      projectType: String(data.get("projectType") || "").trim(),
      timeline: String(data.get("timeline") || "").trim(),
      budget: String(data.get("budget") || "").trim(),
      message: String(data.get("message") || "").trim(),
      honeypot: String(data.get("honeypot") || ""),
      mathChallenge: toMathChallengePayload(math),
      consent: data.get("consent") === "on",
    };

    setStatus({ kind: "submitting" });

    try {
      const submissionKey =
        submissionKeyRef.current ?? getProjectInquiryClientKey();
      submissionKeyRef.current = submissionKey;
      const res = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": submissionKey,
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({
          kind: "error",
          message:
            json.error ||
            "Une erreur est survenue, merci de réessayer dans un instant.",
          fields: json.errors,
        });
        return;
      }
      setStatus({ kind: "success", message: json.message });
      submissionKeyRef.current = null;
      clearProjectInquiryClientKey();
      form.reset();
      setMessage("");
      setMath(null);
      setChallengeEnabled(false);
    } catch {
      setStatus({
        kind: "error",
        message:
          "Impossible de contacter le serveur. Réessayez dans un instant ou écrivez-nous directement.",
      });
    }
  }

  const errs = status.kind === "error" ? status.fields || {} : {};
  const Heading = headingLevel;
  const classNames = ["sf-contact", className].filter(Boolean).join(" ");
  const heading = contactPageCopy ? (
    <>
      Parlons de votre projet web sur mesure.{" "}
      <span className="sf-accent">30 minutes, c&apos;est tout.</span>
    </>
  ) : (
    <>
      Parlons de <br />
      votre projet.{" "}
      <span className="sf-accent">30 minutes, c&apos;est tout.</span>
    </>
  );
  const intro = contactPageCopy ? (
    <>
      SaaS B2B, application métier, outil interne, reprise Laravel ou site
      vitrine premium : quelqu&apos;un qui code lit votre demande.
      <b> Premier cadrage gratuit, sans engagement.</b>
    </>
  ) : (
    <>
      Choisissez ce qui vous va : un créneau direct avec un expert, un email
      rapide, ou un formulaire si vous préférez écrire.
      <b> Objectif de réponse le prochain jour ouvré, sans délai garanti.</b>
    </>
  );

  return (
    <section
      className={classNames}
      id="contact"
      aria-labelledby="contact-project-title"
    >
      <div className="sf-bg-grid" aria-hidden="true" />
      <div className="wrap sf-contact-inner">
        <div className="sf-contact-head">
          <div className="eyebrow on-dark">— Prochaine étape</div>
          <Heading id="contact-project-title">{heading}</Heading>
          <p>{intro}</p>
        </div>

        <div className="sf-contact-grid">
          {/* Colonne gauche — Calendly + email + tel */}
          <div className="sf-left">
            <div className="sf-card">
              <div className="sf-card-top">
                <div className="sf-card-ic">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <div>
                  <div className="sf-card-kind">LE PLUS RAPIDE</div>
                  <div className="sf-card-title">30 min avec un expert</div>
                </div>
              </div>
              <p className="sf-card-body">
                Pas un commercial, pas un chef de projet : un expert qui code
                vous écoute, vous donne un avis franc, et repart avec votre
                brief si ça matche.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-lg sf-card-cta"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Réserver un créneau
                <svg
                  className="arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <div className="sf-card-meta">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                Sans engagement · visio ou téléphone
              </div>
            </div>

            <div className="sf-direct">
              <div className="sf-direct-row">
                <div className="sf-direct-k">Email</div>
                <a
                  href="mailto:quentin@hagnere-patrimoine.fr"
                  className="sf-direct-v"
                >
                  quentin@hagnere-patrimoine.fr
                </a>
              </div>
              <div className="sf-direct-row">
                <div className="sf-direct-k">Téléphone</div>
                <a href="tel:+33374472018" className="sf-direct-v">
                  +33 3 74 47 20 18
                </a>
              </div>
              <div className="sf-direct-row">
                <div className="sf-direct-k">Adresse</div>
                <div className="sf-direct-v sf-direct-addr">
                  82 impasse de Bellevue
                  <br />
                  73000 Bassens
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <form
            className="sf-form"
            onSubmit={onSubmit}
            onFocusCapture={() => setChallengeEnabled(true)}
            noValidate
          >
            <div className="sf-form-head">
              <div className="sf-card-kind">OU ÉCRIVEZ-NOUS</div>
              <div className="sf-card-title">Formulaire projet</div>
            </div>

            <div className="sf-grid-2">
              <label className="sf-field">
                <span>Prénom</span>
                <input
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  aria-invalid={!!errs.firstName}
                />
                {errs.firstName && <em>{errs.firstName}</em>}
              </label>
              <label className="sf-field">
                <span>Nom</span>
                <input
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  aria-invalid={!!errs.lastName}
                />
                {errs.lastName && <em>{errs.lastName}</em>}
              </label>
            </div>

            <label className="sf-field">
              <span>Email professionnel</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-invalid={!!errs.email}
              />
              {errs.email && <em>{errs.email}</em>}
            </label>

            <div className="sf-grid-2">
              <label className="sf-field">
                <span>Entreprise</span>
                <input
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  aria-invalid={!!errs.company}
                />
                {errs.company && <em>{errs.company}</em>}
              </label>
              <label className="sf-field">
                <span>
                  Téléphone <em className="sf-opt">(optionnel)</em>
                </span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>

            <label className="sf-field">
              <span>
                Type de projet <em className="sf-opt">(optionnel)</em>
              </span>
              <select
                name="projectType"
                defaultValue=""
                aria-invalid={!!errs.projectType}
              >
                <option value="" disabled>
                  Choisir le sujet…
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errs.projectType && <em>{errs.projectType}</em>}
            </label>

            <div className="sf-grid-2">
              <label className="sf-field">
                <span>Budget envisagé</span>
                <select
                  name="budget"
                  defaultValue=""
                  aria-invalid={!!errs.budget}
                >
                  <option value="" disabled>
                    Choisir une fourchette…
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b === "Je ne sais pas" ? b : `${b} €`}
                    </option>
                  ))}
                </select>
                {errs.budget && <em>{errs.budget}</em>}
              </label>

              <label className="sf-field">
                <span>
                  Échéance <em className="sf-opt">(optionnel)</em>
                </span>
                <select
                  name="timeline"
                  defaultValue=""
                  aria-invalid={!!errs.timeline}
                >
                  <option value="" disabled>
                    Choisir un timing…
                  </option>
                  {TIMELINES.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
                {errs.timeline && <em>{errs.timeline}</em>}
              </label>
            </div>

            <label className="sf-field sf-field-message">
              <div className="sf-field-head">
                <span>En quelques phrases</span>
                <VoiceDictateButton
                  className="sf-mic"
                  onTranscribed={handleTranscribed}
                />
              </div>
              <textarea
                ref={messageRef}
                name="message"
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={!!errs.message}
                placeholder="Ex. : on veut remplacer nos Excels par une plateforme qui centralise nos 42 clients et sort les factures auto. Cliquez sur Dicter pour parler au lieu d'écrire."
              />
              {errs.message && <em>{errs.message}</em>}
            </label>

            {/* honeypot (invisible) */}
            <label className="sf-honeypot" aria-hidden="true">
              <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            {/* Anti-bot maison : question de calcul (remplace Turnstile). */}
            {challengeEnabled ? (
              <MathChallenge
                className="sf-field sf-field-captcha"
                onChange={setMath}
                error={errs.mathChallenge}
              />
            ) : (
              <div className="sf-field sf-field-captcha sf-captcha-pending">
                <span>Contrôle anti-robot</span>
                <small>
                  Le calcul est chargé uniquement lorsque vous commencez ce
                  formulaire.
                </small>
              </div>
            )}

            <label className="sf-consent">
              <input type="checkbox" name="consent" required />
              <span>
                J&apos;ai pris connaissance de la{" "}
                <a href="/legal/confidentialite">
                  politique de confidentialité
                </a>{" "}
                et je demande à HAGNERE CODE de traiter mes informations afin de
                répondre à ma demande. Selon que j&apos;agis en mon nom ou pour
                mon organisation, ce traitement repose sur des mesures
                précontractuelles ou sur l&apos;intérêt légitime à traiter une
                demande professionnelle. Les données sont accessibles à HAGNERE
                CODE et aux prestataires nécessaires, puis conservées au maximum
                trois ans après le dernier échange utile en l&apos;absence de
                contrat. La politique détaille les destinataires et vos droits.
              </span>
            </label>
            {errs.consent && (
              <em className="sf-consent-error">{errs.consent}</em>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-lg sf-submit"
              disabled={status.kind === "submitting"}
            >
              {status.kind === "submitting" ? (
                "Envoi en cours…"
              ) : (
                <>
                  Envoyer
                  <svg
                    className="arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            {status.kind === "success" && (
              <div className="sf-alert sf-alert-ok" role="status">
                ✓{" "}
                {status.message ||
                  "Message bien reçu. Nous visons une réponse le prochain jour ouvré, sans délai garanti."}
              </div>
            )}
            {status.kind === "error" && (
              <div className="sf-alert sf-alert-err" role="alert">
                ✕ {status.message}
              </div>
            )}

            <p className="sf-legal-note">
              Pas de newsletter ni de vente de données. Les sous-traitants
              techniques nécessaires sont documentés dans notre politique.
            </p>
          </form>
        </div>

        <div className="sf-trust-row">
          <span>🇫🇷 Équipe 100% en France</span>
          <span className="sep" />
          <span>Prestataires et localisations documentés</span>
          <span className="sep" />
          <span>RGPD · contact interne identifié</span>
        </div>
      </div>
    </section>
  );
}

type SiteFooterProps = {
  showContact?: boolean;
};

export function SiteFooter({ showContact = true }: SiteFooterProps = {}) {
  return (
    <>
      {showContact && <ContactProjectSection />}
      {/* Footer principal */}
      <footer className="sf-footer">
        <div className="wrap">
          {/* ── Row 1 : Brand pitch ──────────────────────────────── */}
          <div className="sf-foot-brand-row">
            <div className="sf-foot-brand">
              <Link href="/" className="brand">
                <div className="brand-mark">HC</div>
                <div className="brand-name">
                  <b>Hagnéré</b> <span>Code</span>
                </div>
              </Link>
              <p>
                Studio de développement SaaS, applications métier et outils
                internes, basé à Bassens, aux portes de Chambéry. Next.js,
                React, Claude Code, forfait fixe.
              </p>
              <div className="sf-foot-trust">
                <span className="sf-foot-chip">
                  <span className="dot dot-green" /> {TEAM_TOTAL_COUNT}{" "}
                  personnes
                </span>
                <span className="sf-foot-chip">
                  <span className="dot dot-accent" /> Bassens · 100 % France
                </span>
              </div>
            </div>

            <Link href="/services" className="sf-foot-cta">
              <div className="sf-foot-cta-body">
                <span className="sf-foot-cta-kicker">11 services</span>
                <span className="sf-foot-cta-title">
                  Découvrir tout ce qu&apos;on peut construire pour vous
                </span>
              </div>
              <span className="sf-foot-cta-arrow" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* ── Row 2 : Services (11 tuiles, plein largeur) ───────── */}
          <div className="sf-foot-services">
            <p className="sf-foot-title">Services</p>
            <div className="sf-tile-grid sf-tile-grid-services">
              <Link
                className="sf-tile"
                href="/services/saas-applications-metier"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M2 20h20" />
                    <path d="M8 9h6M8 13h4" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  Développement SaaS sur mesure
                </span>
              </Link>
              <Link
                className="sf-tile"
                href="/services/outils-internes-sur-mesure"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </span>
                <span className="sf-tile-label">Outils internes</span>
              </Link>
              <Link className="sf-tile" href="/services/sites-vitrines">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                  </svg>
                </span>
                <span className="sf-tile-label">Sites vitrines</span>
              </Link>
              <Link className="sf-tile" href="/services/ecommerce">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6h15l-1.5 9h-12L6 6z" />
                    <path d="M6 6L4 2H1" />
                    <circle cx="9" cy="20" r="1.5" />
                    <circle cx="18" cy="20" r="1.5" />
                  </svg>
                </span>
                <span className="sf-tile-label">E-commerce</span>
              </Link>
              <Link className="sf-tile" href="/services/application-mobile">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2.5" />
                    <path d="M11 18h2" />
                  </svg>
                </span>
                <span className="sf-tile-label">Application mobile</span>
              </Link>
              <Link className="sf-tile" href="/services/referencement-google">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.5-4.5" />
                  </svg>
                </span>
                <span className="sf-tile-label">SEO &amp; référencement</span>
              </Link>
              <Link className="sf-tile" href="/services/publicite-en-ligne">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 11v2a4 4 0 004 4l9 4V5L7 9a4 4 0 00-4 2z" />
                    <path d="M11 18v2" />
                  </svg>
                </span>
                <span className="sf-tile-label">Publicité en ligne</span>
              </Link>
              <Link className="sf-tile" href="/services/contenu-video">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                    <path d="M22 8l-6 4 6 4V8z" />
                  </svg>
                </span>
                <span className="sf-tile-label">Contenu &amp; vidéo</span>
              </Link>
              <Link className="sf-tile" href="/services/securite-rgpd">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="sf-tile-label">Sécurité &amp; RGPD</span>
              </Link>
              <Link className="sf-tile" href="/services/maintenance-evolution">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 12a9 9 0 0115-6.7L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 01-15 6.7L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  Maintenance &amp; évolution
                </span>
              </Link>
              <Link className="sf-tile" href="/services/audit-technique">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 11h6M9 15h4" />
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M9 7h6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Audit technique</span>
              </Link>
            </div>
          </div>

          {/* ── Row 3 : Studio | Contact | Légal ─────────────────── */}
          <div className="sf-foot-cols">
            <div className="sf-foot-col">
              <p className="sf-foot-title">Studio</p>
              <Link className="sf-tile" href="/methode">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3h18v18H3z" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </span>
                <span className="sf-tile-label">Méthode Sprint Fixe™</span>
              </Link>
              <Link className="sf-tile" href="/realisations">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 6l10 6 10-6" />
                    <path d="M2 6v12l10 4 10-4V6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Réalisations</span>
              </Link>
              <Link className="sf-tile" href="/equipe">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2" />
                    <path d="M3 19c0-3 3-5 6-5s6 2 6 5M15 19c0-2 2-3.5 4-3.5" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  Équipe ({TEAM_TOTAL_COUNT} personnes)
                </span>
              </Link>
              <Link className="sf-tile" href="/tarifs">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v20M17 6H9a3 3 0 100 6h6a3 3 0 110 6H7" />
                  </svg>
                </span>
                <span className="sf-tile-label">Tarifs</span>
              </Link>
              <Link className="sf-tile" href="/demarrer-un-projet">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <span className="sf-tile-label">Décrire mon projet</span>
              </Link>
              <Link className="sf-tile" href="/outils/calculateur-cout-excel">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14.7 6.3a3 3 0 00-4.2 4.2l-7 7v3h3l7-7a3 3 0 004.2-4.2l-1.5 1.5-1.5-1.5 1.5-1.5z" />
                  </svg>
                </span>
                <span className="sf-tile-label">Calculateur coût Excel</span>
              </Link>
              <Link className="sf-tile" href="/ressources">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 2v4M16 2v4M8 10h8M8 14h5" />
                  </svg>
                </span>
                <span className="sf-tile-label">Ressources gratuites</span>
              </Link>
              <Link className="sf-tile" href="/guides">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </span>
                <span className="sf-tile-label">Guides web</span>
              </Link>
              <Link className="sf-tile" href="/livres-blancs">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M8 13h8M8 17h6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Livres blancs</span>
              </Link>
            </div>

            <div className="sf-foot-col">
              <p className="sf-foot-title">Contact</p>
              <a
                className="sf-tile"
                href="mailto:quentin@hagnere-patrimoine.fr"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  quentin@hagnere-patrimoine.fr
                </span>
              </a>
              <a className="sf-tile" href="tel:+33374472018">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.7.6 2.5a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.8.3 1.6.5 2.5.6a2 2 0 011.7 2z" />
                  </svg>
                </span>
                <span className="sf-tile-label">+33 3 74 47 20 18</span>
              </a>
              <Link className="sf-tile" href="/demarrer-un-projet">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Formulaire projet</span>
              </Link>
              <Link className="sf-tile" href="/contact">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
                  </svg>
                </span>
                <span className="sf-tile-label">Page contact</span>
              </Link>
              <Link className="sf-tile" href="/rendez-vous">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="M9 16l2 2 4-4" />
                  </svg>
                </span>
                <span className="sf-tile-label">Rendez-vous 30 min</span>
              </Link>
              <a
                className="sf-tile"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                <span className="sf-tile-label">Réserver 30 min</span>
              </a>
              <a
                className="sf-tile"
                href="https://wa.me/33374472018"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.3-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12 22h-.1a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 014.4 2.1 9.9 9.9 0 0112 0a9.8 9.8 0 017 2.9 9.8 9.8 0 012.9 7c0 5.5-4.4 9.9-9.9 9.9m8.4-18.3A11.8 11.8 0 0012.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7a11.9 11.9 0 005.7 1.4h.1c6.5 0 11.9-5.3 11.9-11.9a11.8 11.8 0 00-3.5-8.4z" />
                  </svg>
                </span>
                <span className="sf-tile-label">WhatsApp</span>
              </a>
            </div>

            <div className="sf-foot-col">
              <p className="sf-foot-title">Légal</p>
              <Link className="sf-tile" href="/legal/mentions">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </span>
                <span className="sf-tile-label">Mentions légales</span>
              </Link>
              <Link className="sf-tile" href="/legal/cgv">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <path d="M14 2v6h6M9 13l2 2 4-4" />
                  </svg>
                </span>
                <span className="sf-tile-label">CGV</span>
              </Link>
              <Link className="sf-tile" href="/legal/confidentialite">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 018 0v4" />
                  </svg>
                </span>
                <span className="sf-tile-label">Confidentialité</span>
              </Link>
              <Link className="sf-tile" href="/legal/cookies">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 00-9.6-12.8A2.5 2.5 0 0112 2z" />
                    <circle cx="9" cy="10" r="1" />
                    <circle cx="14" cy="14" r="1" />
                    <circle cx="9" cy="16" r="1" />
                  </svg>
                </span>
                <span className="sf-tile-label">Cookies</span>
              </Link>
              <button
                type="button"
                className="sf-tile"
                onClick={() => {
                  if (window.openCookiePreferences) {
                    window.openCookiePreferences();
                  } else {
                    window.location.assign("/legal/cookies");
                  }
                }}
                aria-label="Gérer mes cookies"
              >
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.01a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                  </svg>
                </span>
                <span className="sf-tile-label">Gérer mes cookies</span>
              </button>
              <Link className="sf-tile" href="/legal/reclamations">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    <path d="M8 9h8M8 13h5" />
                  </svg>
                </span>
                <span className="sf-tile-label">
                  Réclamations &amp; médiation
                </span>
              </Link>
              <Link className="sf-tile" href="/legal/accessibilite">
                <span className="sf-tile-ic">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="6" r="2" />
                    <path d="M5 12h14M9 12l-2 9M15 12l2 9M12 12v3" />
                  </svg>
                </span>
                <span className="sf-tile-label">Accessibilité</span>
              </Link>
            </div>
          </div>

          <div className="sf-foot-bot">
            <div>
              © {new Date().getUTCFullYear()} HAGNERE CODE · SASU au capital de
              10 € · RCS CHAMBÉRY 993 672 856 · TVA FR30 993 672 856 · Adresse
              du siège social : 82 impasse de Bellevue, 73000 Bassens
            </div>
            <div>BUILT WITH NEXT.JS + CLAUDE CODE</div>
          </div>
        </div>
      </footer>
    </>
  );
}
