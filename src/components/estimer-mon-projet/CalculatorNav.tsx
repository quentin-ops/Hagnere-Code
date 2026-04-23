/**
 * Same nav as service pages, but as React JSX (the calculator is a fully
 * interactive React app, not an HTML-as-string injection like the static
 * pages). Mirrors body.ts nav block 1:1 in markup so the design matches.
 */

import Link from "next/link";

export function CalculatorNav() {
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
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <div className="nav-dd">
              <div className="dd-col">
                <h6>Construire</h6>
                <Link className="dd-link" href="/services/saas-applications-metier">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">SaaS &amp; applis métier</div>
                    <div className="dd-sub">Plateformes B2B, espaces clients.</div>
                  </div>
                </Link>
                <Link className="dd-link" href="/services/outils-internes-sur-mesure">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18M7 14l3-3 4 4 5-5" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">Outils internes sur mesure</div>
                    <div className="dd-sub">Back-office, workflows, automatisations.</div>
                  </div>
                </Link>
                <Link className="dd-link" href="/services/sites-vitrines">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15 15 0 010 20" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">Sites vitrines &amp; landings</div>
                    <div className="dd-sub">Sites qui convertissent, pas qui informent.</div>
                  </div>
                </Link>
                <Link className="dd-link" href="/services/ecommerce">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">E-commerce</div>
                    <div className="dd-sub">Boutiques haut de gamme, Shopify Plus.</div>
                  </div>
                </Link>
              </div>
              <div className="dd-col">
                <h6>Faire grandir</h6>
                <Link className="dd-link" href="/services/referencement-google">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">SEO &amp; référencement</div>
                    <div className="dd-sub">Contenu, tech, netlinking.</div>
                  </div>
                </Link>
                <Link className="dd-link" href="/services/publicite-en-ligne">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 11l18-8v18L3 13zM11 7v10" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">Publicité en ligne</div>
                    <div className="dd-sub">Google Ads, Meta, LinkedIn.</div>
                  </div>
                </Link>
                <Link className="dd-link" href="/services/contenu-video">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">Contenu &amp; vidéo</div>
                    <div className="dd-sub">Studio interne, motion, YouTube.</div>
                  </div>
                </Link>
              </div>
              <div className="dd-col">
                <h6>Protéger &amp; opérer</h6>
                <Link className="dd-link" href="/services/maintenance-evolution">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">Maintenance &amp; évolution</div>
                    <div className="dd-sub">Forfait mensuel, support prioritaire.</div>
                  </div>
                </Link>
                <Link className="dd-link" href="/services/securite-rgpd">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">Sécurité &amp; RGPD</div>
                    <div className="dd-sub">Audit, conformité, hébergement FR.</div>
                  </div>
                </Link>
                <Link className="dd-link" href="/services/audit-technique">
                  <div className="dd-ic">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <path d="M14 2v6h6M16 13H8M16 17H8" />
                    </svg>
                  </div>
                  <div className="dd-meta">
                    <div className="dd-title">Audit technique</div>
                    <div className="dd-sub">Code review, perf, sécurité.</div>
                  </div>
                </Link>
              </div>
              <div className="dd-cta">
                <div className="dd-cta-body">
                  <div className="tag">Pas sûr ?</div>
                  <div className="dd-cta-title">On vous aide à choisir le bon service.</div>
                  <div className="dd-cta-sub">30 min avec un associé, gratuit, pour cadrer votre besoin.</div>
                  <Link href="/#contact" className="btn btn-accent">
                    Réserver un créneau →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/methode">Méthode</Link>
          <Link href="/#realisations">Réalisations</Link>
          <Link href="/equipe">Équipe</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/outils/estimer-mon-projet" className="active">
            Calculateur
          </Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="nav-cta">
          <Link href="/#contact" className="btn btn-ghost">
            Prendre RDV
          </Link>
          <Link href="/#contact" className="btn btn-primary">
            Démarrer un projet
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
