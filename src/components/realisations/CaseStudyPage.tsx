import Link from "next/link";
import type { CSSProperties } from "react";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { MainNav } from "@/components/design-shared/MainNav";
import { CASES } from "./cases";
import type { CaseStudy } from "./cases";
import "./case-study.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/site-footer.css";

type Props = { caseStudy: CaseStudy };

export function CaseStudyPage({ caseStudy: c }: Props) {
  const otherCases = Object.values(CASES).filter((x) => x.slug !== c.slug);

  const brandVars: CSSProperties & Record<string, string> = {
    "--brand": c.brandColor,
    "--brand-soft": c.brandSoft,
  };

  return (
    <InteractiveDesignRoot className="hc-design cs-root" style={brandVars}>
      <MainNav />
      <main id="main-content" tabIndex={-1}>

      {/* Breadcrumb */}
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Accueil</Link>
          <span className="sep">/</span>
          <Link href="/realisations">Analyses publiques</Link>
          <span className="sep">/</span>
          <span>{c.brandName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero-bg" />
        <div className="wrap cs-hero-inner">
          <div className="cs-hero-meta">
            <span className="cs-chip">{c.category}</span>
            <span className="sep" />
            <span className="cs-year">{c.status}</span>
          </div>
          <div className="cs-hero-head">
            <div className="cs-hero-logo">{c.brandLogo}</div>
            <div>
              <h1>
                {c.brandName}
                <span className="cs-h1-cat">{c.category}</span>
              </h1>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="cs-hero-url">
                {c.url.replace(/^https?:\/\//, "")}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
          <p className="cs-hero-tagline">{c.tagline}</p>
          <p className="cs-hero-intro">{c.heroIntro}</p>
          <p className="cs-hero-intro">
            Le lien public permet de contrôler les seuls éléments recensés ici. Il ne
            démontre ni une intervention technique de Hagnéré Code, ni une équipe, ni une
            stack, ni une performance commerciale.
          </p>

          {/* Stable product highlights: capabilities, never unsourced outcomes. */}
          <div className="cs-kpis">
            {c.highlights.map((highlight) => (
              <div className="cs-kpi" key={`${highlight.value}-${highlight.label}`}>
                <div className="cs-kpi-value">{highlight.value}</div>
                <div className="cs-kpi-label">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="cs-info">
        <div className="wrap cs-info-grid">
          <div>
            <div className="cs-info-k">Source vérifiée</div>
            <div className="cs-info-v">{c.engagement}</div>
          </div>
          <div>
            <div className="cs-info-k">Nature</div>
            <div className="cs-info-v">Analyse éditoriale d&apos;une page externe</div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="cs-section">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Observation publique</div>
            <h2>Ce que présente la page liée.</h2>
          </div>
          <p className="cs-prose">{c.context}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="cs-section cs-section-dark">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow on-dark">— Besoins rendus visibles</div>
            <h2>Comment la page organise l&apos;information.</h2>
          </div>
          <div className="cs-cards">
            {c.problem.map((p, i) => (
              <div className="cs-card cs-card-dark" key={p.title}>
                <div className="cs-card-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="cs-section">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Éléments observables</div>
            <h2>Ce que le visiteur peut contrôler.</h2>
          </div>
          <div className="cs-cards">
            {c.solution.map((s, i) => (
              <div className="cs-card" key={s.title}>
                <div className="cs-card-num cs-card-num-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publicly observable features only. */}
      <section className="cs-section cs-section-soft">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Inventaire public</div>
            <h2>
              {c.features.length} éléments visibles<br />
              sur la page liée.
            </h2>
          </div>
          <div className="cs-features">
            {c.features.map((f) => (
              <div className="cs-feat" key={f}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="cs-section">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Illustrations</div>
            <h2>Représentations schématiques.</h2>
          </div>
          <div className="cs-shots">
            {c.screenshots.map((s) => (
              <div className="cs-shot" key={s.title}>
                <div className={`cs-shot-canvas cs-shot-${s.kind}`}>
                  {/* Placeholder visual, swapped for real screenshots later */}
                  <div className="cs-shot-chrome">
                    <span /> <span /> <span />
                    <div className="cs-shot-url">{c.url.replace(/^https?:\/\//, "")}</div>
                  </div>
                  <div className="cs-shot-body">
                    <div className="cs-shot-logo">{c.brandLogo}</div>
                    <div className="cs-shot-title">{s.title}</div>
                    <div className="cs-shot-mock-rows">
                      <div className="cs-shot-row" />
                      <div className="cs-shot-row cs-shot-row-short" />
                      <div className="cs-shot-row" />
                    </div>
                  </div>
                </div>
                <div className="cs-shot-caption">
                  <b>{s.title}.</b> {s.caption}
                </div>
              </div>
            ))}
          </div>
          <p className="cs-placeholder-note">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 9v4M12 17h.01" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            Visuels schématiques, non probants. La page publique peut être consultée sur{" "}
            <a href={c.url} target="_blank" rel="noopener noreferrer">
              {c.url.replace(/^https?:\/\//, "")}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Explicitly identified editorial note, never presented as a client review. */}
      <section className="cs-section cs-section-dark">
        <div className="wrap cs-testimonial">
          <div className="eyebrow on-dark">— Note éditoriale · pas un avis client</div>
          <svg className="cs-quote-mark" width="48" height="40" viewBox="0 0 48 40" fill="currentColor">
            <path d="M14 0v12H8c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14zM34 0v12h-6c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14z" opacity="0.2" />
          </svg>
          <blockquote>{c.testimonial.quote}</blockquote>
          <div className="cs-tauthor">
            <div className="cs-tav">{c.testimonial.initials}</div>
            <div>
              <div className="cs-tname">{c.testimonial.author}</div>
              <div className="cs-trole">{c.testimonial.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* AMF / disclaimer pour les cas patrimoine et investissement */}
      {(c.slug === "hagnere-investissement" || c.slug === "hagnere-patrimoine") && (
        <section className="cs-section">
          <div className="wrap">
            <div
              style={{
                background: "var(--paper-2)",
                border: "1px solid var(--line)",
                borderRadius: 12,
                padding: "20px 24px",
                fontSize: 13,
                lineHeight: 1.55,
                color: "var(--ink-4)",
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>Avertissement.</strong> Cette analyse porte sur la page
                publique externe de {c.brandName}. Elle ne constitue pas une preuve
                de réalisation, d&apos;intervention de Hagnéré Code ou de performance.
                Les écrans, simulateurs et parcours décrits ici ne constituent <strong>ni une
                offre, ni une recommandation d&apos;investissement</strong>.
                Toute simulation repose sur des hypothèses, le capital investi
                n&apos;est pas garanti et tout placement présente un risque de
                perte. Les informations réglementaires du professionnel sont
                à vérifier sur son site et, lorsqu&apos;il est concerné, dans le
                registre public de l&apos;ORIAS. Aucune prestation technique,
                marketing, SEO ou publicitaire de Hagnéré Code n&apos;est revendiquée ici.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Other cases */}
      <section className="cs-section cs-section-soft">
        <div className="wrap">
          <div className="cs-section-head">
            <div className="eyebrow">— Autres analyses publiques</div>
            <h2>Poursuivre la lecture.</h2>
          </div>
          <div className="cs-others">
            {otherCases.map((o) => (
              <Link
                key={o.slug}
                href={`/realisations/${o.slug}`}
                className="cs-other"
                style={{ ["--brand" as string]: o.brandColor }}
              >
                <div className="cs-other-head">
                  <div className="cs-other-logo">{o.brandLogo}</div>
                  <div>
                    <div className="cs-other-name">{o.brandName}</div>
                    <div className="cs-other-cat">{o.category}</div>
                  </div>
                </div>
                <p>{o.tagline}</p>
                <div className="cs-other-foot">
                  Lire l&apos;analyse
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <p className="cs-placeholder-note">
            <span>
              Un projet similaire ?{" "}
              <Link href="/demarrer-un-projet">Décrivez-le-nous</Link>.
            </span>
          </p>
        </div>
      </section>

      </main>
      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
