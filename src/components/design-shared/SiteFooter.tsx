"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import "./site-footer.css";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string; fields?: Record<string, string> };

const BUDGETS = ["< 15k", "15-30k", "30-60k", "60k+", "Je ne sais pas"];
const PROJECT_TYPES = [
  "Application métier",
  "SaaS B2B",
  "Outil interne / back-office",
  "Reprise ou audit Laravel",
  "Site vitrine / landing",
  "Je ne sais pas",
];
const TIMELINES = [
  "Dès que possible",
  "Dans 1 mois",
  "Dans 3 mois",
  "Pas encore défini",
];

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/hagnere-code/30min";

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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

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
    };

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      setStatus({ kind: "success" });
      form.reset();
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
      Parlons de<br />
      votre projet.{" "}
      <span className="sf-accent">30 minutes, c&apos;est tout.</span>
    </>
  );
  const intro = contactPageCopy ? (
    <>
      SaaS B2B, application métier, outil interne, reprise Laravel ou site
      vitrine premium : un associé qui code vous répond sous 24 h ouvrées.
      <b> Premier cadrage gratuit, sans engagement.</b>
    </>
  ) : (
    <>
      Choisissez ce qui vous va : un créneau direct avec un associé, un email
      rapide, ou un formulaire si vous préférez écrire.
      <b> Réponse sous 24 h ouvrées, toujours.</b>
    </>
  );

  return (
    <section className={classNames} id="contact">
      <div className="sf-bg-grid" aria-hidden="true" />
      <div className="wrap sf-contact-inner">
        <div className="sf-contact-head">
          <div className="eyebrow on-dark">— Prochaine étape</div>
          <Heading>{heading}</Heading>
          <p>{intro}</p>
        </div>

          <div className="sf-contact-grid">
            {/* Colonne gauche — Calendly + email + tel */}
            <div className="sf-left">
              <div className="sf-card">
                <div className="sf-card-top">
                  <div className="sf-card-ic">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div>
                    <div className="sf-card-kind">LE PLUS RAPIDE</div>
                    <div className="sf-card-title">30 min avec un associé</div>
                  </div>
                </div>
                <p className="sf-card-body">
                  Pas un commercial, pas un chef de projet : un associé qui
                  code vous écoute, vous donne un avis franc, et repart avec
                  votre brief si ça matche.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-lg sf-card-cta"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Réserver un créneau
                  <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="sf-card-meta">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Sans engagement · visio ou téléphone
                </div>
              </div>

              <div className="sf-direct">
                <div className="sf-direct-row">
                  <div className="sf-direct-k">Email</div>
                  <a href="mailto:hello@hagnere-code.fr" className="sf-direct-v">
                    hello@hagnere-code.fr
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
                    7 rue Ernest Filliard<br />
                    73000 Chambéry
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <form className="sf-form" onSubmit={onSubmit} noValidate>
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
                  <span>Téléphone <em className="sf-opt">(optionnel)</em></span>
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
              </div>

              <label className="sf-field">
                <span>Type de projet <em className="sf-opt">(optionnel)</em></span>
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
                  <select name="budget" defaultValue="" aria-invalid={!!errs.budget}>
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
                  <span>Échéance <em className="sf-opt">(optionnel)</em></span>
                  <select name="timeline" defaultValue="" aria-invalid={!!errs.timeline}>
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

              <label className="sf-field">
                <span>Votre projet en 1-2 phrases</span>
                <textarea
                  name="message"
                  rows={3}
                  required
                  aria-invalid={!!errs.message}
                  placeholder="Ex. : on veut remplacer nos Excels par une plateforme qui centralise nos 42 clients et sort les factures auto."
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
                    <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              {status.kind === "success" && (
                <div className="sf-alert sf-alert-ok" role="status">
                  ✓ Message bien reçu. Un email de confirmation vient de partir ; un associé vous répond sous 24 h ouvrées.
                </div>
              )}
              {status.kind === "error" && (
                <div className="sf-alert sf-alert-err" role="alert">
                  ✕ {status.message}
                </div>
              )}

              <p className="sf-legal-note">
                En envoyant ce formulaire, vous acceptez que vos données
                soient utilisées pour vous répondre. Pas de newsletter,
                pas de partage à des tiers.
              </p>
            </form>
          </div>

          <div className="sf-trust-row">
            <span>🇫🇷 Équipe 100% en France</span>
            <span className="sep" />
            <span>Données hébergées en France (OVH / Scaleway)</span>
            <span className="sep" />
            <span>Conformité RGPD · DPO interne</span>
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
          <div className="sf-foot-top">
            <div className="sf-foot-brand">
              <Link href="/" className="brand">
                <div className="brand-mark">HC</div>
                <div className="brand-name">
                  <b>Hagnéré</b> <span>Code</span>
                </div>
              </Link>
              <p>
                Studio de développement SaaS, applications métier et
                outils internes, basé à Chambéry. Laravel 13, Claude Code,
                forfait fixe.
              </p>
            </div>

            <div className="sf-foot-cols">
              <div className="sf-foot-col">
                <h5>SERVICES</h5>
                <Link href="/services">Tous les services</Link>
                <Link href="/services/saas-applications-metier">
                  SaaS &amp; applications métier
                </Link>
                <Link href="/services/outils-internes-sur-mesure">
                  Outils internes
                </Link>
                <Link href="/services/sites-vitrines">Sites vitrines</Link>
                <Link href="/services/referencement-google">SEO</Link>
                <Link href="/services/publicite-en-ligne">Publicité</Link>
                <Link href="/services/contenu-video">Contenu &amp; vidéo</Link>
              </div>
              <div className="sf-foot-col">
                <h5>STUDIO</h5>
                <Link href="/methode">Méthode</Link>
                <Link href="/realisations">Réalisations</Link>
                <Link href="/etudes-de-cas">Études de cas</Link>
                <Link href="/equipe">Équipe</Link>
                <Link href="/tarifs">Tarifs</Link>
                <Link href="/demarrer-un-projet">Démarrer un projet</Link>
                <Link href="/guide">Guide</Link>
                <Link href="/#comparaison">Nous comparer</Link>
                <Link href="/#metiers">Nos métiers</Link>
              </div>
              <div className="sf-foot-col">
                <h5>CONTACT</h5>
                <a href="mailto:hello@hagnere-code.fr">hello@hagnere-code.fr</a>
                <a href="tel:+33374472018">+33 3 74 47 20 18</a>
                <a href="/demarrer-un-projet">Formulaire projet</a>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver 30 min
                </a>
              </div>
              <div className="sf-foot-col">
                <h5>LÉGAL</h5>
                <Link href="/legal/mentions">Mentions légales</Link>
                <Link href="/legal/cgv">CGV</Link>
                <Link href="/legal/confidentialite">Confidentialité</Link>
                <Link href="/legal/cookies">Cookies</Link>
                <Link href="/legal/accessibilite">Accessibilité</Link>
              </div>
            </div>
          </div>

          <div className="sf-foot-bot">
            <div>
              © {new Date().getFullYear()} HAGNÉRÉ CODE SAS · RCS CHAMBÉRY
              993 672 856 · SIRET 993 672 856 00016 · TVA FR30 993 672 856 · NAF 62.01Z · 7 rue Ernest Filliard, 73000
              Chambéry
            </div>
            <div>BUILT WITH LARAVEL + CLAUDE CODE</div>
          </div>
        </div>
      </footer>
    </>
  );
}
