"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./legal-page.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

export type LegalSection = {
  /** Used as anchor id + key */
  id: string;
  /** Short label for the ToC */
  label: string;
  /** Section title inside the article */
  title: string;
  /** Rendered content */
  body: ReactNode;
};

type Props = {
  /** Page title shown in the hero */
  title: string;
  /** One-line page intro under the title */
  intro: string;
  /** ISO date string (e.g. "2026-04-22") — displayed in hero */
  lastUpdated: string;
  /** Label for the breadcrumb last segment */
  breadcrumb: string;
  /** Sections rendered with both ToC entry + article body */
  sections: LegalSection[];
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function LegalPageLayout({
  title,
  intro,
  lastUpdated,
  breadcrumb,
  sections,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  // ----- ScrollSpy : highlight the ToC item matching the section in view.
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = sections
      .map((s) => root.querySelector<HTMLElement>(`#${s.id}`))
      .filter((n): n is HTMLElement => Boolean(n));

    if (targets.length === 0) return;

    // An entry is considered "active" when it crosses ~120px below the nav.
    const observer = new IntersectionObserver(
      (entries) => {
        // Track which sections are currently intersecting in this batch,
        // then recompute the one closest to the top of the viewport among all.
        const visibleIds = entries
          .filter((e) => e.isIntersecting)
          .map((e) => (e.target as HTMLElement).id);

        if (visibleIds.length === 0) return;

        // Pick the section whose top is closest to the scroll marker (120px).
        const sorted = [...visibleIds].sort((a, b) => {
          const ra = root.querySelector<HTMLElement>(`#${a}`)?.getBoundingClientRect().top ?? 0;
          const rb = root.querySelector<HTMLElement>(`#${b}`)?.getBoundingClientRect().top ?? 0;
          return Math.abs(ra - 120) - Math.abs(rb - 120);
        });
        setActiveId(sorted[0]);
      },
      {
        // Top offset = sticky nav height (~64px) + a bit of breathing room
        rootMargin: "-100px 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  function onTocClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    const target = rootRef.current?.querySelector<HTMLElement>(`#${id}`);
    if (!target) return;
    e.preventDefault();
    setActiveId(id);
    // Offset so the section title isn't hidden behind the sticky nav.
    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <div ref={rootRef} className="hc-design lp-root">
      {/* Nav (shared shell) */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <div className="brand-mark">HC</div>
            <div className="brand-name">
              <b>Hagnéré</b> <span>Code</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link href="/#services">Services</Link>
            <Link href="/methode">Méthode</Link>
            <Link href="/#realisations">Réalisations</Link>
            <Link href="/equipe">Équipe</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="nav-cta">
            <Link href="/#contact" className="btn btn-ghost">
              Prendre RDV
            </Link>
            <Link href="/#contact" className="btn btn-primary">
              Démarrer un projet
              <svg
                className="arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-hero-bg-grid" aria-hidden="true" />
        <div className="lp-hero-radial" aria-hidden="true" />
        <div className="wrap lp-hero-inner">
          <div className="crumb">
            <Link href="/">Accueil</Link>
            <span className="sep">/</span>
            <Link href="/#contact">Légal</Link>
            <span className="sep">/</span>
            <span>{breadcrumb}</span>
          </div>

          <div className="lp-hero-head">
            <div className="lp-hero-eyebrow">
              <span className="pill">
                <span className="dot" /> Document légal · opposable
              </span>
            </div>
            <h1>
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="lp-hero-intro">{intro}</p>

            <div className="lp-hero-meta">
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Dernière mise à jour : <b>{formatDate(lastUpdated)}</b>
              </span>
              <span className="sep" />
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
                {sections.length} sections · lecture ~8 min
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column layout : sticky ToC + article */}
      <section className="lp-main">
        <div className="wrap lp-grid">
          {/* Left : sticky table of contents */}
          <aside className="lp-toc-wrap" aria-label="Sommaire">
            <div className="lp-toc">
              <div className="lp-toc-kicker">Sommaire</div>
              <ol className="lp-toc-list">
                {sections.map((s, i) => (
                  <li
                    key={s.id}
                    className={
                      "lp-toc-item" +
                      (activeId === s.id ? " is-active" : "")
                    }
                  >
                    <a
                      href={`#${s.id}`}
                      onClick={(e) => onTocClick(e, s.id)}
                    >
                      <span className="lp-toc-n">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="lp-toc-label">{s.label}</span>
                    </a>
                  </li>
                ))}
              </ol>

              <div className="lp-toc-foot">
                <Link href="/#contact" className="btn btn-ghost btn-sm">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  Question ? Écrivez-nous
                </Link>
              </div>
            </div>
          </aside>

          {/* Right : article content */}
          <article className="lp-article">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="lp-section">
                <div className="lp-section-head">
                  <div className="lp-section-n">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2>{s.title}</h2>
                </div>
                <div className="lp-section-body">{s.body}</div>
              </section>
            ))}

            <div className="lp-article-foot">
              <div>
                <div className="lp-foot-kicker">Besoin d'une précision ?</div>
                <div className="lp-foot-title">
                  Notre équipe répond à toute demande sous 5 jours ouvrés.
                </div>
                <p>
                  Pour toute question relative à ce document, à vos droits,
                  ou à un incident, écrivez à{" "}
                  <a href="mailto:hello@hagnere-code.fr">
                    hello@hagnere-code.fr
                  </a>{" "}
                  ou appelez-nous au{" "}
                  <a href="tel:+33374472018">+33 3 74 47 20 18</a>.
                </p>
              </div>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Nous contacter
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
              </Link>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
