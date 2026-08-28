import Link from "next/link";
import type { CSSProperties } from "react";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { MainNav } from "@/components/design-shared/MainNav";
import { CASES, RELATED_SERVICES } from "./cases";
import "./index-page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const cases = Object.values(CASES);

/**
 * Passerelle vers le silo « offre ». Ces entrées décrivent nos services et
 * non une prestation réalisée sur les produits du groupe analysés ci-dessus.
 */
const HUB_SERVICE_KEYS = [
  "saas-applications-metier",
  "outils-internes-sur-mesure",
  "sites-vitrines",
  "referencement-google",
  "publicite-en-ligne",
  "maintenance-evolution",
];

const hubServices = HUB_SERVICE_KEYS.map((key) => RELATED_SERVICES[key]).filter(
  (service) => service !== undefined,
);

export function RealisationsIndexPage() {
  return (
    <InteractiveDesignRoot className="hc-design rl-modern">
      <MainNav />

      <main id="main-content" tabIndex={-1}>
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="rlm-hero">
          <div className="rlm-hero-bg" aria-hidden="true">
            <div className="rlm-hero-glow" />
            <div className="rlm-hero-grid" />
          </div>

          <div className="wrap rlm-hero-inner">
            <div className="rlm-copy reveal">
              <div className="rlm-eyebrow-pill">
                <span className="rlm-eyebrow-dot" />
                <span><b>4 produits du groupe</b> · pages publiques · source datée</span>
              </div>
              <h1>
                Les quatre produits du groupe.<br />
                Des pages publiques à lire{" "}
                <span className="rlm-accent">avec leur niveau de preuve</span>.
              </h1>
              <p>
                Ces quatre marques — LMNP.AI, SCI-AI.app, Hagnéré Patrimoine et Hagnéré
                Investissement — appartiennent au groupe Hagnéré : ce ne sont pas des clients
                indépendants. Chaque fiche inventorie uniquement ce qui est visible sur leur
                page publique à la date indiquée, et ne revendique ni la conception, ni la
                livraison, ni la technologie, ni l&apos;acquisition, ni les résultats.
              </p>
              <div className="rlm-actions">
                <Link href="#cas" className="btn btn-accent btn-lg">
                  Découvrir les 4 cas
                  <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                  Discuter d&apos;un projet
                </Link>
              </div>
            </div>

            {/* Right visual: 4 floating brand cards */}
            <div className="rlm-hero-visual reveal" aria-hidden="true">
              {cases.map((c, i) => (
                <div
                  key={c.slug}
                  className={`rlm-float-card rlm-float-${i + 1}`}
                  style={{
                    "--brand": c.brandColor,
                    "--brand-soft": c.brandSoft,
                  } as CSSProperties}
                >
                  <div className="rlm-float-logo">{c.brandLogo}</div>
                  <div className="rlm-float-meta">
                    <span className="rlm-float-name">{c.brandName}</span>
                    <span className="rlm-float-cat">{c.category.split(" · ")[0]}</span>
                  </div>
                  <span className="rlm-float-status">
                    <span className="rlm-float-dot" /> PAGE PUBLIQUE
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STATS STRIP ─────────────────────────────────────────── */}
        <section className="rlm-stats">
          <div className="wrap">
            <div className="rlm-stats-grid">
              <div className="rlm-stat reveal">
                <div className="rlm-stat-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                </div>
                <div className="rlm-stat-body">
                  <div className="rlm-stat-v">4</div>
                  <div className="rlm-stat-k">produits publics du groupe</div>
                </div>
              </div>

              <div className="rlm-stat reveal reveal-d-1">
                <div className="rlm-stat-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></svg>
                </div>
                <div className="rlm-stat-body">
                  <div className="rlm-stat-v">2 + 2</div>
                  <div className="rlm-stat-k">2 logiciels présentés · 2 sites de services</div>
                </div>
              </div>

              <div className="rlm-stat reveal reveal-d-2">
                <div className="rlm-stat-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11l-3-3M22 11l-3 3M19 8h6"/></svg>
                </div>
                <div className="rlm-stat-body">
                  <div className="rlm-stat-v">Daté</div>
                  <div className="rlm-stat-k">éléments visibles lors de la consultation</div>
                </div>
              </div>

              <div className="rlm-stat reveal reveal-d-3">
                <div className="rlm-stat-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div className="rlm-stat-body">
                  <div className="rlm-stat-v">Groupe</div>
                  <div className="rlm-stat-k">aucune intervention Hagnéré Code revendiquée</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CASES GRID 2×2 ──────────────────────────────────────── */}
        <section className="rlm-cases" id="cas">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="left">
                <div className="eyebrow">— Les analyses</div>
                <h2>4 produits du groupe,<br />4 inventaires datés.</h2>
              </div>
              <div className="right">
                Chaque carte renvoie vers l&apos;inventaire d&apos;une page publique du
                groupe, avec son lien source et sa date de consultation. Ces analyses
                ne sont ni des références client, ni des preuves d&apos;intervention de
                Hagnéré Code.
              </div>
            </div>

            <div className="rlm-case-grid">
              {cases.map((c, idx) => (
                <Link
                  key={c.slug}
                  href={`/realisations/${c.slug}`}
                  className="rlm-case reveal"
                  style={{
                    "--brand": c.brandColor,
                    "--brand-soft": c.brandSoft,
                    "--reveal-delay": `${idx * 0.08}s`,
                  } as CSSProperties}
                >
                  {/* Branded header strip */}
                  <div className="rlm-case-cover">
                    <div className="rlm-case-cover-glow" aria-hidden="true" />
                    <div className="rlm-case-cover-grid" aria-hidden="true" />
                    <div className="rlm-case-logo">{c.brandLogo}</div>
                    <span className="rlm-case-status">
                      <span className="rlm-case-status-dot" /> PAGE PUBLIQUE
                    </span>
                  </div>

                  <div className="rlm-case-body">
                    <div className="rlm-case-meta">
                      <span className="rlm-case-cat">{c.category}</span>
                      <span className="rlm-case-sep" />
                      <span className="rlm-case-dur">{c.engagement}</span>
                    </div>

                    <h3>{c.brandName}</h3>
                    <p className="rlm-case-tagline">{c.tagline}</p>

                    {/* Stable product highlights; no unsourced outcomes. */}
                    <div className="rlm-case-metrics">
                      {c.highlights.slice(0, 3).map((highlight) => (
                        <div className="rlm-case-metric" key={`${c.slug}-${highlight.label}`}>
                          <strong>{highlight.value}</strong>
                          <span>{highlight.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Publicly observable elements only. */}
                    <div className="rlm-case-section">
                      <div className="rlm-case-section-h">Éléments visibles</div>
                      <div className="rlm-case-features">
                        {c.features.slice(0, 5).map((feat) => (
                          <span key={feat}>{feat}</span>
                        ))}
                      </div>
                    </div>

                    <div className="rlm-case-foot">
                      <span className="rlm-case-cta">
                        Lire l&apos;analyse publique
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BANDE SERVICES ──────────────────────────────────────── */}
        <section className="rlm-svc">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="left">
                <div className="eyebrow">— Nos services</div>
                <h2>Ce que Hagnéré Code<br />conçoit et fait vivre.</h2>
              </div>
              <div className="right">
                Ces pages décrivent notre offre. Elles ne décrivent aucune
                intervention sur les quatre produits du groupe analysés ci-dessus
                et ne valent pas preuve de réalisation.
              </div>
            </div>

            <div className="rlm-svc-grid">
              {hubServices.map((service, idx) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rlm-svc-card reveal"
                  style={{ "--reveal-delay": `${idx * 0.06}s` } as CSSProperties}
                >
                  <span className="rlm-svc-name">{service.label}</span>
                  <span className="rlm-svc-blurb">{service.blurb}</span>
                  <span className="rlm-svc-foot">
                    Voir le service
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="rlm-svc-actions reveal">
              <Link href="/demarrer-un-projet" className="btn btn-accent btn-lg">
                Décrire votre projet
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/services" className="btn btn-ghost btn-lg">
                Voir tous les services
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CTA niveau de preuve ─────────────────────────────────── */}
        <section className="rlm-cta">
          <div className="wrap">
            <div className="rlm-cta-card reveal">
              <div className="rlm-cta-bg" aria-hidden="true">
                <div className="rlm-cta-glow rlm-cta-glow-1" />
                <div className="rlm-cta-glow rlm-cta-glow-2" />
                <div className="rlm-cta-grid" />
              </div>

              <div className="rlm-cta-body">
                <div className="rlm-cta-eyebrow">
                  <span className="rlm-cta-dot" /> NIVEAU DE PREUVE
                </div>
                <h2>
                  Vous voulez vérifier<br />
                  <span className="rlm-cta-accent">ce qui compte pour votre projet ?</span>
                </h2>
                <p>
                  Consultez les pages liées et vérifiez les informations
                  auprès de leur éditeur. Ces analyses éditoriales ne remplacent ni une
                  référence client, ni une preuve de livraison, ni un audit technique.
                </p>
                <div className="rlm-cta-actions">
                  <Link href="/contact" className="btn btn-accent btn-lg">
                    Discuter du niveau de preuve
                    <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </Link>
                  <Link href="/methode" className="btn btn-ghost-light btn-lg">
                    Voir notre méthode
                  </Link>
                </div>
              </div>

              <div className="rlm-cta-side" aria-hidden="true">
                <div className="rlm-cta-tile">
                  <div className="rlm-cta-tile-k">4</div>
                  <div className="rlm-cta-tile-l">pages<br />publiques</div>
                </div>
                <div className="rlm-cta-tile rlm-cta-tile-accent">
                  <div className="rlm-cta-tile-k">2</div>
                  <div className="rlm-cta-tile-l">SaaS<br />fiscaux</div>
                </div>
                <div className="rlm-cta-tile">
                  <div className="rlm-cta-tile-k">2</div>
                  <div className="rlm-cta-tile-l">sites<br />métier</div>
                </div>
                <div className="rlm-cta-tile rlm-cta-tile-accent">
                  <div className="rlm-cta-tile-k">Source</div>
                  <div className="rlm-cta-tile-l">publique<br />consultable</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </InteractiveDesignRoot>
  );
}
