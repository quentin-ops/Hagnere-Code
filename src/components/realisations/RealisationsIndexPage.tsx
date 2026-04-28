"use client";

import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { CASES } from "./cases";
import "./index-page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const cases = Object.values(CASES);

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <div className="brand-mark">HC</div>
          <div className="brand-name">
            <b>Hagnéré</b> <span>Code</span>
          </div>
        </Link>
        <div className="nav-links">
          <div className="nav-item">
            <Link href="/#services" className="nav-trigger">
              Services
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <div className="nav-dd">
              <div className="dd-col">
                <h6>Construire</h6>
                <Link className="dd-link" href="/services/saas-applications-metier"><span className="dd-ic">S</span><span className="dd-meta"><span className="dd-title">SaaS & applis métier</span><span className="dd-sub">Plateformes B2B, espaces clients.</span></span></Link>
                <Link className="dd-link" href="/services/outils-internes-sur-mesure"><span className="dd-ic">O</span><span className="dd-meta"><span className="dd-title">Outils internes</span><span className="dd-sub">Back-office, workflows.</span></span></Link>
                <Link className="dd-link" href="/services/sites-vitrines"><span className="dd-ic">W</span><span className="dd-meta"><span className="dd-title">Sites vitrines</span><span className="dd-sub">Sites qui convertissent.</span></span></Link>
                <Link className="dd-link" href="/services/ecommerce"><span className="dd-ic">E</span><span className="dd-meta"><span className="dd-title">E-commerce</span><span className="dd-sub">Boutiques et tunnels.</span></span></Link>
              </div>
              <div className="dd-col">
                <h6>Faire grandir</h6>
                <Link className="dd-link" href="/services/referencement-google"><span className="dd-ic">R</span><span className="dd-meta"><span className="dd-title">SEO & référencement</span><span className="dd-sub">Contenu, tech, netlinking.</span></span></Link>
                <Link className="dd-link" href="/services/publicite-en-ligne"><span className="dd-ic">A</span><span className="dd-meta"><span className="dd-title">Publicité en ligne</span><span className="dd-sub">Google, Meta, LinkedIn.</span></span></Link>
                <Link className="dd-link" href="/services/contenu-video"><span className="dd-ic">V</span><span className="dd-meta"><span className="dd-title">Contenu & vidéo</span><span className="dd-sub">Studio, motion, YouTube.</span></span></Link>
              </div>
              <div className="dd-col">
                <h6>Opérer</h6>
                <Link className="dd-link" href="/services/maintenance-evolution"><span className="dd-ic">M</span><span className="dd-meta"><span className="dd-title">Maintenance</span><span className="dd-sub">Support et évolution.</span></span></Link>
                <Link className="dd-link" href="/services/securite-rgpd"><span className="dd-ic">G</span><span className="dd-meta"><span className="dd-title">Sécurité & RGPD</span><span className="dd-sub">Audit, conformité.</span></span></Link>
                <Link className="dd-link" href="/services/audit-technique"><span className="dd-ic">T</span><span className="dd-meta"><span className="dd-title">Audit technique</span><span className="dd-sub">Code, perf, sécurité.</span></span></Link>
              </div>
              <div className="dd-cta">
                <div className="dd-cta-body">
                  <div className="tag">Pas sûr ?</div>
                  <div className="dd-cta-title">On vous aide à choisir le bon service.</div>
                  <div className="dd-cta-sub">30 min avec un associé pour cadrer votre besoin.</div>
                  <Link href="/contact" className="btn btn-accent">Réserver un créneau</Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/methode">Méthode</Link>
          <Link href="/realisations" className="active">Réalisations</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-ghost">Prendre RDV</Link>
          <Link href="/demarrer-un-projet" className="btn btn-primary">
            Démarrer un projet
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function RealisationsIndexPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design rl-modern">
      <Nav />

      <main>
        <section className="rlm-hero">
          <div className="wrap rlm-hero-inner">
            <div className="rlm-copy">
              <div className="eyebrow">— Réalisations</div>
              <h1>Quatre projets, quatre mécaniques business.</h1>
              <p>
                Une vraie page réalisations doit expliquer le contexte, ce qui a été construit,
                comment ça fonctionne et quels chiffres peuvent être publiés. Voici quatre cas
                détaillés avec stack, modules livrés et résultats mesurés.
              </p>
              <div className="rlm-actions">
                <Link href="#cas" className="btn btn-primary btn-lg">Voir les 4 cas</Link>
                <Link href="/contact" className="btn btn-ghost btn-lg">Discuter d&apos;un projet</Link>
              </div>
            </div>
            <div className="rlm-panel" aria-label="Synthèse des réalisations">
              <div className="rlm-panel-top">Ce qu&apos;on documente</div>
              <div className="rlm-panel-grid">
                <span>Contexte</span>
                <span>Fonctionnement</span>
                <span>Modules livrés</span>
                <span>Chiffres</span>
                <span>Stack</span>
                <span>Suite possible</span>
              </div>
            </div>
          </div>
        </section>

        <section className="rlm-proof">
          <div className="wrap rlm-proof-grid">
            <div><b>2 SaaS fiscaux</b><span>LMNP.AI et SCI-AI.app</span></div>
            <div><b>2 sites acquisition</b><span>Patrimoine et investissement</span></div>
            <div><b>4 pages détaillées</b><span>Avec contexte, modules livrés, stack et résultats</span></div>
          </div>
        </section>

        <section className="rlm-cases" id="cas">
          <div className="wrap">
            <div className="section-head">
              <div className="left">
                <div className="eyebrow">— Les cas</div>
                <h2>Des fiches faites pour vendre, pas juste montrer.</h2>
              </div>
              <div className="right">
                Chaque carte mène vers une étude détaillée : contexte, problème, solution, modules livrés, stack et résultats mesurés.
              </div>
            </div>

            <div className="rlm-case-list">
              {cases.map((c) => (
                <article className="rlm-case" key={c.slug} style={{ "--brand": c.brandColor, "--brand-soft": c.brandSoft } as CSSProperties}>
                  <div className="rlm-case-head">
                    <div className="rlm-logo">{c.brandLogo}</div>
                    <div>
                      <div className="rlm-kind">{c.category}</div>
                      <h3>{c.brandName}</h3>
                    </div>
                  </div>

                  <p className="rlm-tagline">{c.tagline}</p>
                  <p className="rlm-intro">{c.heroIntro}</p>

                  <div className="rlm-split">
                    <div>
                      <h4>Ce qui fonctionne</h4>
                      <ul>
                        {c.solution.slice(0, 3).map((item) => (
                          <li key={item.title}>{item.title}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Modules clés</h4>
                      <ul>
                        {c.features.slice(0, 5).map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="rlm-metrics">
                    {c.metrics.slice(0, 4).map((metric) => (
                      <div className="rlm-metric" key={`${c.slug}-${metric.label}`}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                        {metric.note && <em>{metric.note}</em>}
                      </div>
                    ))}
                  </div>

                  <div className="rlm-case-foot">
                    <div className="rlm-stack">{c.stack.slice(0, 4).join(" · ")}</div>
                    <Link href={`/realisations/${c.slug}`} className="btn btn-primary">Lire le cas</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rlm-needed">
          <div className="wrap rlm-needed-inner">
            <div>
              <div className="eyebrow on-dark">— Études de cas approfondies</div>
              <h2>Vous voulez plus de détails ?</h2>
            </div>
            <div className="rlm-needed-list">
              <p>Récits techniques longs, métriques avant/après, captures produit, retours d&apos;expérience anonymisés sous NDA : voir les <Link href="/etudes-de-cas" style={{ color: "#c4b5fd", textDecoration: "underline" }}>études de cas approfondies</Link>. Pour mise en relation directe avec d&apos;anciens clients avant signature, écrivez-nous.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/etudes-de-cas" className="btn btn-ghost">Voir les études de cas</Link>
                <Link href="/contact" className="btn btn-accent">Demander une mise en relation</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
