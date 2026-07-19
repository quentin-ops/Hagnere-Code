"use client";

import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { MainNav } from "@/components/design-shared/MainNav";
import { CASES } from "./cases";
import "./index-page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const cases = Object.values(CASES);

export function RealisationsIndexPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design rl-modern">
      <MainNav />

      <main>
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
                <span><b>4 produits</b> · en production · 2024-2026</span>
              </div>
              <h1>
                Réalisations Hagnéré Code.<br />
                4 produits réels{" "}
                <span className="rlm-accent">en production</span>.
              </h1>
              <p>
                Chaque cas est documenté en détail&nbsp;: contexte, ce qui a été construit,
                comment ça fonctionne, modules livrés, stack, et chiffres mesurés.
                Pas de logos volés ni de témoignages anonymes — uniquement nos produits internes,
                qu&apos;on opère et qu&apos;on assume.
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
                    <span className="rlm-float-dot" /> EN PROD
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
                  <div className="rlm-stat-k">produits opérés en production</div>
                </div>
              </div>

              <div className="rlm-stat reveal reveal-d-1">
                <div className="rlm-stat-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></svg>
                </div>
                <div className="rlm-stat-body">
                  <div className="rlm-stat-v">2 + 2</div>
                  <div className="rlm-stat-k">2 SaaS fiscaux · 2 sites acquisition</div>
                </div>
              </div>

              <div className="rlm-stat reveal reveal-d-2">
                <div className="rlm-stat-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11l-3-3M22 11l-3 3M19 8h6"/></svg>
                </div>
                <div className="rlm-stat-body">
                  <div className="rlm-stat-v">8 000<span className="rlm-stat-sup">+</span></div>
                  <div className="rlm-stat-k">utilisateurs payants cumulés</div>
                </div>
              </div>

              <div className="rlm-stat reveal reveal-d-3">
                <div className="rlm-stat-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div className="rlm-stat-body">
                  <div className="rlm-stat-v">100<span className="rlm-stat-sup">%</span></div>
                  <div className="rlm-stat-k">propriété client · code &amp; données</div>
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
                <div className="eyebrow">— Les cas</div>
                <h2>4 produits internes,<br />4 mécaniques différentes.</h2>
              </div>
              <div className="right">
                Chaque carte renvoie vers une étude détaillée&nbsp;: contexte,
                problème, solution, modules livrés, stack et résultats mesurés.
                <b> Aucun client externe à exposer ici</b> — on assume nos produits maison
                comme preuve principale.
              </div>
            </div>

            <div className="rlm-group-note reveal" role="note">
              <div className="rlm-group-note-badges" aria-hidden="true">
                <span className="rlm-group-note-badge" style={{ "--brand": "#6D28D9" } as CSSProperties}>L</span>
                <span className="rlm-group-note-badge" style={{ "--brand": "#0066FF" } as CSSProperties}>S</span>
              </div>
              <div className="rlm-group-note-body">
                <span className="rlm-group-note-eyebrow">Même groupe</span>
                <p>
                  <b>LMNP.AI</b> et <b>SCI-AI.app</b> appartiennent à la même société —
                  valorisée à plus de <b>3,8&nbsp;M€</b> en moins de <b>2 ans et demi</b>.
                </p>
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
                      <span className="rlm-case-status-dot" /> EN PRODUCTION
                    </span>
                    <span className="rlm-case-year">{c.year}</span>
                  </div>

                  <div className="rlm-case-body">
                    <div className="rlm-case-meta">
                      <span className="rlm-case-cat">{c.category}</span>
                      <span className="rlm-case-sep" />
                      <span className="rlm-case-dur">{c.duration}</span>
                    </div>

                    <h3>{c.brandName}</h3>
                    <p className="rlm-case-tagline">{c.tagline}</p>

                    {/* Top 3 metrics as inline pills */}
                    <div className="rlm-case-metrics">
                      {c.metrics.slice(0, 3).map((metric) => (
                        <div className="rlm-case-metric" key={`${c.slug}-${metric.label}`}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mention légale : les pastilles ci-dessus n'affichent pas
                        metric.note, or c'est là que vit l'avertissement sur les
                        performances. Sans ce bloc, le disclaimer présent dans les
                        données disparaissait au rendu sur les deux cas relevant
                        d'une activité financière réglementée. */}
                    {(c.slug === "hagnere-investissement" ||
                      c.slug === "hagnere-patrimoine") && (
                      <p className="rlm-case-disclaimer">
                        Chiffres communiqués par le cabinet, relatifs à son activité
                        et non à une prestation de Hagnéré Code. Les performances
                        passées ne préjugent pas des performances futures et le
                        capital investi n&apos;est pas garanti.
                      </p>
                    )}

                    {/* Modules clés */}
                    <div className="rlm-case-section">
                      <div className="rlm-case-section-h">Modules clés</div>
                      <div className="rlm-case-features">
                        {c.features.slice(0, 5).map((feat) => (
                          <span key={feat}>{feat}</span>
                        ))}
                      </div>
                    </div>

                    {/* Stack */}
                    <div className="rlm-case-section">
                      <div className="rlm-case-section-h">Stack</div>
                      <div className="rlm-case-stack">
                        {c.stack.slice(0, 5).map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="rlm-case-foot">
                      <span className="rlm-case-cta">
                        Lire l&apos;étude détaillée
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA "Mise en relation" ──────────────────────────────── */}
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
                  <span className="rlm-cta-dot" /> MISE EN RELATION
                </div>
                <h2>
                  Vous voulez parler à<br />
                  <span className="rlm-cta-accent">un utilisateur réel ?</span>
                </h2>
                <p>
                  Avant signature, on organise volontiers une visio avec l&apos;équipe qui
                  exploite l&apos;un de nos quatre produits, au quotidien. Captures, choix
                  techniques, arbitrages assumés — sans filtre commercial.
                </p>
                <div className="rlm-cta-actions">
                  <Link href="/contact" className="btn btn-accent btn-lg">
                    Demander une mise en relation
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
                  <div className="rlm-cta-tile-l">produits<br />en production</div>
                </div>
                <div className="rlm-cta-tile rlm-cta-tile-accent">
                  <div className="rlm-cta-tile-k">8&thinsp;000<span>+</span></div>
                  <div className="rlm-cta-tile-l">utilisateurs<br />payants</div>
                </div>
                <div className="rlm-cta-tile">
                  <div className="rlm-cta-tile-k">99,9<span>%</span></div>
                  <div className="rlm-cta-tile-l">uptime<br />sur 90 j</div>
                </div>
                <div className="rlm-cta-tile rlm-cta-tile-accent">
                  <div className="rlm-cta-tile-k">2026</div>
                  <div className="rlm-cta-tile-l">millésime<br />du studio</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
