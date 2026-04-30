"use client";

/**
 * Reassurance band shown between the AI estimate and the final CTA.
 * Goal: humanize the experience, reduce friction at the moment of truth.
 *
 * Uses initials avatars (consistent with /equipe) until real photos /
 * client logos are provided — see CALCULATEUR_TODO.md.
 */

const FOUNDERS = [
  {
    initials: "QH",
    name: "Quentin Hagnéré",
    role: "Fondateur",
    quote:
      "C'est moi qui prendrai ton appel. Pas un commercial, pas un bot — un associé qui code depuis 10 ans.",
    linkedin: "https://www.linkedin.com/in/quentin-hagnere",
  },
  {
    initials: "NW",
    name: "Nicolas Wallerand",
    role: "CTO",
    quote:
      "Je valide chaque architecture en cadrage et je revue toutes les PR. Aucun code ne part sans mon œil.",
    linkedin: "https://www.linkedin.com/in/nicolas-wallerand-86b0a079/",
  },
];

// Until we have real client logos uploaded, we render typographic logo
// cards: each logo is a stylized monogram + wordmark with brand-like
// treatment (color-coded by sector, letter-spacing, weight). Looks closer
// to real logos than plain text. See CALCULATEUR_TODO.md → "Logos clients".
const CLIENT_LOGOS: Array<{
  name: string;
  monogram: string;
  wordmark: string;
  domain: string;
  hue: string; // CSS color for the monogram tile
}> = [
  {
    name: "LMNP.AI",
    monogram: "L",
    wordmark: "LMNP·AI",
    domain: "SaaS B2B comptabilité",
    hue: "#2563eb",
  },
  {
    name: "SCI-AI",
    monogram: "S",
    wordmark: "SCI·AI",
    domain: "SaaS B2B immobilier",
    hue: "#059669",
  },
  {
    name: "Hagnéré Patrimoine",
    monogram: "H",
    wordmark: "Hagnéré Patrimoine",
    domain: "Cabinet patrimoine",
    hue: "#0f172a",
  },
  {
    name: "Hagnéré Investissement",
    monogram: "H",
    wordmark: "Hagnéré Investissement",
    domain: "Cabinet investissement",
    hue: "#7c3aed",
  },
];

const STATS = [
  { value: "23", label: "Projets livrés" },
  { value: "0 €", label: "Pénalités versées" },
  { value: "100 %", label: "Forfait fixe contractuel" },
  { value: "30 j", label: "Garantie post-livraison" },
];

export function TrustBand() {
  return (
    <section className="rview-trust">
      <div className="rview-trust-tag">
        <span className="rview-trust-tag-pill">QUI VA TE LIVRER ?</span>
      </div>

      <h2 className="rview-trust-title">
        L&apos;estimation est juste au-dessus.<br />
        <span className="grad-accent">Voilà qui s&apos;en occupera.</span>
      </h2>

      {/* Founders */}
      <div className="rview-trust-founders">
        {FOUNDERS.map((f) => (
          <div key={f.initials} className="rview-trust-founder">
            <div className="rview-trust-founder-head">
              <div className={`rview-trust-avatar rview-trust-avatar-${f.initials.toLowerCase()}`}>
                {f.initials}
              </div>
              <div>
                <div className="rview-trust-founder-name">{f.name}</div>
                <div className="rview-trust-founder-role">{f.role}</div>
              </div>
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rview-trust-li"
                aria-label={`LinkedIn ${f.name}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <blockquote className="rview-trust-quote">{f.quote}</blockquote>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="rview-trust-stats">
        {STATS.map((s) => (
          <div key={s.label} className="rview-trust-stat">
            <div className="rview-trust-stat-value">{s.value}</div>
            <div className="rview-trust-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Clients */}
      <div className="rview-trust-clients">
        <div className="rview-trust-clients-h">CLIENTS QUI NOUS FONT CONFIANCE</div>
        <div className="rview-trust-clients-grid">
          {CLIENT_LOGOS.map((c) => (
            <div key={c.name} className="rview-trust-client" title={c.name}>
              <div
                className="rview-trust-client-mono"
                style={{ background: c.hue }}
                aria-hidden="true"
              >
                {c.monogram}
              </div>
              <div className="rview-trust-client-text">
                <div className="rview-trust-client-name">{c.wordmark}</div>
                <div className="rview-trust-client-domain">{c.domain}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rview-trust-clients-foot">
          + d'autres projets livrés depuis le lancement de l'agence
        </div>
      </div>
    </section>
  );
}
