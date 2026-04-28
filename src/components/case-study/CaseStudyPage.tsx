"use client";

import Link from "next/link";
import { useRef } from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import type { CaseStudy } from "./cases";
import "./case-study.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/hagnere-code/30min";

export function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design cs-root">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand" aria-label="Hagnéré Code — Retour à l'accueil">
            <div className="brand-mark" aria-hidden="true">HC</div>
            <div className="brand-name">
              <b>Hagnéré</b> <span>Code</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link href="/#services">Services</Link>
            <Link href="/methode">Méthode</Link>
            <Link href="/realisations">Réalisations</Link>
            <Link href="/equipe">Équipe</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/guide">Guide</Link>

            <Link href="/contact">Contact</Link>
          </div>
          <div className="nav-cta">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Prendre RDV
            </a>
            <Link href="/demarrer-un-projet" className="btn btn-primary">
              Démarrer un projet
              <svg aria-hidden="true" className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <div className="wrap">
        <nav className="cs-crumb" aria-label="Breadcrumb">
          <Link href="/">Accueil</Link>
          <span className="sep">/</span>
          <Link href="/etudes-de-cas">Études de cas</Link>
          <span className="sep">/</span>
          <Link href="/services/maintenance-evolution">Maintenance &amp; évolution</Link>
          <span className="sep">/</span>
          <span className="cs-crumb-current">Reprise app orpheline</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-hero-bg-grid" aria-hidden="true" />
        <div className="cs-hero-radial" aria-hidden="true" />
        <div className="wrap cs-hero-inner">
          <div className="cs-hero-eyebrow">
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            {cs.eyebrow}
          </div>
          <h1>
            {cs.title}
            <br />
            <span className="accent">{cs.titleAccent}</span>
          </h1>
          <p className="cs-hero-sub">{cs.subtitle}</p>

          <div className="cs-hero-cta">
            <Link href="/services/maintenance-evolution#tarifs" className="btn btn-accent btn-lg">
              Voir les forfaits TMA
              <svg aria-hidden="true" className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Réserver l&rsquo;audit flash
            </a>
          </div>

          <div className="cs-hero-metrics">
            {cs.heroMetrics.map((m, i) => (
              <div key={i} className="cs-hero-metric">
                <div className="cs-hero-metric-v">
                  {m.v}
                  {m.vUnit ? <span>{m.vUnit}</span> : null}
                </div>
                <div className="cs-hero-metric-k">{m.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXT INFO BAR */}
      <section className="cs-info">
        <div className="wrap">
          <div className="cs-info-grid">
            {cs.context.map((c, i) => (
              <div key={i} className="cs-info-cell">
                <div className="cs-info-k">{c.k}</div>
                <div className="cs-info-v">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="cs-section">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Avant / Après</div>
            <h2>
              De l&rsquo;hémorragie silencieuse
              <br />
              <span className="accent">à la prod sereine.</span>
            </h2>
            <p className="cs-prose">
              Point de départ et livrables post-reprise. Tout est mesuré sur la même app,
              même code base, sans re-architecture — seul le management a changé.
            </p>
          </div>

          <div className="cs-split">
            <div className="cs-split-col cs-split-col-before">
              <div className="cs-split-head">
                <div className="cs-split-icon">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <div className="cs-split-title">{cs.before.title}</div>
              </div>
              <ul className="cs-split-list">
                {cs.before.items.map((it, i) => (
                  <li key={i}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M6 6l12 12M6 18L18 6" />
                    </svg>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-split-col cs-split-col-after">
              <div className="cs-split-head">
                <div className="cs-split-icon">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="cs-split-title">{cs.after.title}</div>
              </div>
              <ul className="cs-split-list">
                {cs.after.items.map((it, i) => (
                  <li key={i}>
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="cs-section cs-section-soft">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Timeline</div>
            <h2>6 étapes · du kickoff au run stabilisé.</h2>
            <p className="cs-prose">
              Chaque semaine un jalon documenté dans Notion, revue avec le COO client.
              Pas de surprise, pas d&rsquo;étape fantôme.
            </p>
          </div>

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
        </div>
      </section>

      {/* METRICS */}
      <section className="cs-section">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Résultats mesurés · 12 mois plus tard</div>
            <h2>
              Ce qui a changé <span className="accent">dans les dashboards.</span>
            </h2>
            <p className="cs-prose">
              Chiffres bruts, tirés de Better Stack + Sentry + GitHub Actions + Linear.
              Disponibles en call avec votre CTO sur demande.
            </p>
          </div>

          <div className="cs-metrics-grid">
            {cs.metrics.map((m, i) => (
              <div key={i} className="cs-metric">
                <div className="cs-metric-k">{m.k}</div>
                <div className="cs-metric-row">
                  <span className="cs-metric-before">{m.before}</span>
                  <span className="cs-metric-arrow" aria-hidden="true">→</span>
                  <span className="cs-metric-after">{m.after}</span>
                </div>
                <span className="cs-metric-delta">{m.delta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="cs-section cs-section-soft">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Architecture · stack avant / après</div>
            <h2>
              Pas de re-architecture.
              <br />
              <span className="accent">Juste une stack tenue à jour.</span>
            </h2>
            <p className="cs-prose">
              On n&rsquo;a pas refait l&rsquo;app. On l&rsquo;a mise à jour, monitorée, sécurisée.
              Plan de modernisation progressive sur 12 mois pour passer à Laravel 10 + Vue 3
              sans risque big-bang.
            </p>
          </div>

          <div className="cs-archi">
            <div className="cs-archi-col cs-archi-col-before">
              <div className="cs-archi-head">Avant · hérité</div>
              <ul className="cs-archi-list">
                {cs.archiBefore.map((it, i) => (
                  <li key={i} className="ko">
                    <span className="dot" />
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
                    <span className="dot" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="cs-section cs-section-dark">
        <div className="wrap">
          <div className="cs-quote-box">
            <svg className="cs-quote-mark" width="48" height="40" viewBox="0 0 48 40" fill="currentColor" aria-hidden="true">
              <path d="M14 0v12H8c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14zM34 0v12h-6c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14z" opacity="0.3" />
            </svg>
            <div className="cs-quote-stars" aria-label={`${cs.quote.stars} sur 5 étoiles`}>
              {"★".repeat(cs.quote.stars)}
            </div>
            <blockquote className="cs-quote-q">« {cs.quote.text} »</blockquote>
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
        <div className="wrap">
          <div className="cs-cta-inner">
            <div className="eyebrow">— Prochaine étape</div>
            <h2>
              Votre app vit une situation similaire ?
              <br />
              <span className="accent">Faisons le point.</span>
            </h2>
            <p>
              On fait un audit flash 5 jours · 2 000 € HT · déduit du 1<sup>er</sup> mois si mission.
              Vous repartez avec un rapport chiffré et un plan de remédiation priorisé,
              qu&rsquo;on bosse ensemble ou pas.
            </p>
            <div className="cs-cta-row">
              <Link href="/services/maintenance-evolution#tarifs" className="btn btn-accent btn-lg">
                Voir les forfaits TMA
                <svg aria-hidden="true" className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-lg"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Réserver 30 min
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
