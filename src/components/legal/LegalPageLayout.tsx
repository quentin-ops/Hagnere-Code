"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { MainNav } from "@/components/design-shared/MainNav";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import "./legal-page.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/nav-dropdown.css";
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

const LEGAL_PAGES = [
  { href: "/legal/mentions", label: "Mentions légales" },
  { href: "/legal/confidentialite", label: "Confidentialité" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/cgv", label: "Conditions générales de vente" },
  { href: "/legal/reclamations", label: "Réclamations" },
  { href: "/legal/accessibilite", label: "Accessibilité" },
] as const;

function formatDate(iso: string): string {
  // Noon in local time keeps a date-only value stable across time zones.
  const d = new Date(`${iso}T12:00:00`);
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
  const pathname = usePathname();
  const titleLines = title.split("\n");
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
    target.focus({ preventScroll: true });
    // Offset so the section title isn't hidden behind the sticky nav.
    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <div ref={rootRef} className="hc-design lp-root">
      <MainNav />

      {/* Hero */}
      <header className="lp-hero">
        <div className="lp-hero-bg-grid" aria-hidden="true" />
        <div className="lp-hero-radial" aria-hidden="true" />
        <div className="wrap lp-hero-inner">
          {/* Deux niveaux, comme le BreadcrumbList JSON-LD injecté par chacune
              des six pages. Il n'existe pas de page d'index /legal : un niveau
              intermédiaire « Légal » renverrait vers les mentions légales et
              contredirait le balisage. */}
          <nav className="lp-breadcrumb" aria-label="Fil d’Ariane">
            <ol>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li aria-current="page">
                <span>{breadcrumb}</span>
              </li>
            </ol>
          </nav>

          <div className="lp-hero-head">
            <p className="lp-hero-eyebrow">Informations juridiques</p>
            <h1>
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="lp-hero-intro">{intro}</p>

            <div className="lp-hero-meta">
              <span className="lp-date-badge">
                <span className="lp-date-dot" aria-hidden="true" />
                Dernière mise à jour :{" "}
                <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
              </span>
              <span className="lp-reading-meta">
                {sections.length} sections · consultation libre
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Two-column layout : sticky ToC + article */}
      <main id="main-content" tabIndex={-1} className="lp-main">
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
                <Link href="#legal-contact" className="btn btn-ghost btn-sm">
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
                  Voir les coordonnées
                </Link>
              </div>
            </div>
          </aside>

          {/* Right : article content */}
          <article className="lp-article">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="lp-section"
                tabIndex={-1}
              >
                <div className="lp-section-head">
                  <div className="lp-section-n">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2>{s.title}</h2>
                </div>
                <div className="lp-section-body">{s.body}</div>
              </section>
            ))}

            <section
              id="legal-contact"
              className="lp-article-foot"
              aria-labelledby="lp-contact-title"
            >
              <div>
                <div className="lp-foot-kicker">Contact</div>
                <h2 className="lp-foot-title" id="lp-contact-title">
                  Coordonnées pour ce document
                </h2>
                <p>
                  Pour une question relative au contenu de cette page, à vos
                  droits ou à un incident, vous pouvez utiliser l&apos;un des
                  canaux ci-contre.
                </p>
              </div>
              <div className="lp-contact-details">
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <span>Adresse e-mail</span>
                  <strong>{CONTACT_EMAIL}</strong>
                </a>
                <a href={`tel:${CONTACT_PHONE_E164}`}>
                  <span>Téléphone</span>
                  <strong>{CONTACT_PHONE_DISPLAY}</strong>
                </a>
              </div>
            </section>

            <footer className="lp-document-footer">
              <div className="lp-version-card">
                <div className="lp-version-mark" aria-hidden="true">
                  V
                </div>
                <div>
                  <div className="lp-version-kicker">Version actuelle</div>
                  <p>
                    Mise à jour du{" "}
                    <time dateTime={lastUpdated}>
                      {formatDate(lastUpdated)}
                    </time>
                  </p>
                  <small>
                    Cette date identifie la version affichée de ce document.
                  </small>
                </div>
              </div>

              <nav
                className="lp-related"
                aria-label="Autres documents légaux"
              >
                <div className="lp-related-head">
                  <span className="lp-related-kicker">À consulter aussi</span>
                  <h2>Documents légaux</h2>
                </div>
                <ul>
                  {LEGAL_PAGES.map((page) => {
                    const isCurrent = pathname === page.href;

                    return (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          className={isCurrent ? "is-current" : undefined}
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          <span>{page.label}</span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </footer>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
