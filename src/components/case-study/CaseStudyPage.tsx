import Link from "next/link";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import type { CaseStudy } from "./cases";
import "./case-study.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/site-footer.css";

export function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  return (
    <div className="cs-page">
      <div className="cs-wrap">
        <nav className="cs-crumb" aria-label="Breadcrumb">
          <Link href="/">Accueil</Link>
          <span className="sep">/</span>
          <Link href="/services/maintenance-evolution">Maintenance & évolution</Link>
          <span className="sep">/</span>
          <span className="cs-crumb-current">Reprise app orpheline</span>
        </nav>

        {/* HERO */}
        <section className="cs-hero">
          <div className="cs-hero-eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
            {cs.eyebrow}
          </div>
          <h1>
            {cs.title}<br />
            <span className="accent">{cs.titleAccent}</span>
          </h1>
          <p className="cs-hero-sub">{cs.subtitle}</p>

          <div className="cs-hero-metrics">
            {cs.heroMetrics.map((m, i) => (
              <div key={i}>
                <div className="cs-hero-metric-v">
                  {m.v}
                  {m.vUnit ? <span>{m.vUnit}</span> : null}
                </div>
                <div className="cs-hero-metric-k">{m.k}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTEXT */}
        <section className="cs-context">
          <div className="cs-section-label">Contexte</div>
          <h2>Une scale-up parisienne en panique, à 4 mois après l'abandon de son agence.</h2>
          <div className="cs-context-grid" style={{ marginTop: 28 }}>
            {cs.context.map((c, i) => (
              <div key={i} className="cs-context-cell">
                <div className="cs-context-k">{c.k}</div>
                <div className="cs-context-v">{c.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="cs-section">
          <div className="cs-section-label">Avant / Après</div>
          <h2>De l'hémorragie silencieuse <span className="accent">à la prod sereine.</span></h2>
          <p>Point de départ et livrables post-reprise. Tout est mesuré sur la même app, même code base, sans re-architecture — seul le management a changé.</p>

          <div className="cs-split">
            <div className="cs-split-col cs-split-col-before">
              <div className="cs-split-head">
                <div className="cs-split-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                </div>
                <div className="cs-split-title">Avant · l'héritage</div>
              </div>
              <ul className="cs-split-list">
                {cs.before.items.map((it, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-split-col cs-split-col-after">
              <div className="cs-split-head">
                <div className="cs-split-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                </div>
                <div className="cs-split-title">Après · livré à J+30</div>
              </div>
              <ul className="cs-split-list">
                {cs.after.items.map((it, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="cs-section">
          <div className="cs-section-label">Timeline</div>
          <h2>6 étapes · du kickoff au run stabilisé.</h2>
          <p>Chaque semaine un jalon documenté dans Notion, revue avec le COO client. Pas de surprise, pas d'étape fantôme.</p>

          <div className="cs-timeline">
            {cs.timeline.map((t, i) => (
              <div key={i} className="cs-tl-item">
                <div className="cs-tl-marker">{t.marker}</div>
                <div className="cs-tl-body">
                  <div className="cs-tl-date">{t.date}</div>
                  <h4>{t.title}</h4>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* METRICS */}
        <section className="cs-section">
          <div className="cs-section-label">Résultats mesurés · 12 mois plus tard</div>
          <h2>Ce qui a changé <span className="accent">dans les dashboards.</span></h2>
          <p>Chiffres bruts, tirés de Better Stack + Sentry + GitHub Actions + Linear. Disponibles en call avec votre CTO sur demande.</p>

          <div className="cs-metrics-grid">
            {cs.metrics.map((m, i) => (
              <div key={i} className="cs-metric">
                <div className="cs-metric-k">{m.k}</div>
                <div className="cs-metric-row">
                  <span className="cs-metric-before">{m.before}</span>
                  <span className="cs-metric-arrow">→</span>
                  <span className="cs-metric-after">{m.after}</span>
                </div>
                <span className="cs-metric-delta">{m.delta}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="cs-section">
          <div className="cs-section-label">Architecture · stack avant / après</div>
          <h2>Pas de re-architecture.<br /><span className="accent">Juste une stack tenue à jour.</span></h2>
          <p>On n'a pas refait l'app. On l'a mise à jour, monitorée, sécurisée. Plan de modernisation progressive sur 12 mois pour passer à Laravel 10 + Vue 3 sans risque big-bang.</p>

          <div className="cs-archi">
            <div className="cs-archi-col cs-archi-col-before">
              <div className="cs-archi-head">Avant · hérité</div>
              <ul className="cs-archi-list">
                {cs.archiBefore.map((it, i) => (
                  <li key={i} className="ko">
                    <span className="dot"></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cs-archi-col cs-archi-col-after">
              <div className="cs-archi-head">Après · J+30</div>
              <ul className="cs-archi-list">
                {cs.archiAfter.map((it, i) => (
                  <li key={i} className="ok">
                    <span className="dot"></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* QUOTE */}
      <section className="cs-quote">
        <div className="cs-wrap">
          <div className="cs-quote-box">
            <div className="cs-quote-stars">{"★".repeat(cs.quote.stars)}</div>
            <p className="cs-quote-q">« {cs.quote.text} »</p>
            <div className="cs-quote-who">
              <div className="cs-quote-avatar">
                <svg viewBox="0 0 48 48" aria-hidden="true">
                  <defs>
                    <linearGradient id={`cs-av-${cs.slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={cs.quote.avatarGradient[0]} />
                      <stop offset="100%" stopColor={cs.quote.avatarGradient[1]} />
                    </linearGradient>
                  </defs>
                  <rect width="48" height="48" fill={`url(#cs-av-${cs.slug})`} />
                  <text
                    x="24"
                    y="30"
                    textAnchor="middle"
                    fontFamily="Geist"
                    fontWeight="600"
                    fontSize="18"
                    fill="#fff"
                  >
                    {cs.quote.avatarInitials}
                  </text>
                </svg>
              </div>
              <div>
                <div className="cs-quote-name">{cs.quote.name}</div>
                <div className="cs-quote-role">{cs.quote.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cs-cta">
        <div className="cs-wrap">
          <h2>Votre app vit une situation similaire ?</h2>
          <p>On fait un audit flash 5 jours · 2 000 € HT · déduit du 1er mois si mission. Vous repartez avec un rapport chiffré et un plan de remédiation priorisé, qu'on bosse ensemble ou pas.</p>
          <div className="cs-cta-row">
            <Link href="/services/maintenance-evolution#tarifs" className="btn btn-accent btn-lg">
              Voir les forfaits TMA
              <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/services/maintenance-evolution#contact" className="btn btn-ghost btn-lg">
              Réserver l'audit flash
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
