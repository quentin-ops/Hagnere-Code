/**
 * Réalisations — Index page body (Hagnéré Code)
 *
 * Structure (first 3 sections live, the rest will follow):
 *   1. <nav>            — shared site nav (with active state on Réalisations)
 *   2. .crumb           — breadcrumb
 *   3. .rl-hero         — hero with headline, CTAs, mini collage of 4 cases
 *      .rl-hero-kpis    — 4-KPI strip (full-bleed)
 *   4. .rl-portfolio    — 2x2 grid of the 4 case studies (.real-card)
 *   5. .rl-growth       — dark progression-charts wedge (3 SVG charts)
 *
 * Data is currently FICTITIOUS but plausible — to be replaced by real
 * numbers from cases.ts / Stripe / GA4 / Plausible / CRM extracts.
 */
export const bodyHtml = `
<!-- ========================================================================
     NAV
     ======================================================================== -->
<nav class="nav">
  <div class="nav-inner">
    <a href="/" class="brand">
      <div class="brand-mark">HC</div>
      <div class="brand-name"><b>Hagnéré</b> <span>Code</span></div>
    </a>
    <div class="nav-links">
      <div class="nav-item">
        <a href="/#services" class="nav-trigger">Services
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dd">
          <div class="dd-col">
            <h6>Construire</h6>
            <a class="dd-link" href="/services/saas-applications-metier">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
              <div class="dd-meta"><div class="dd-title">SaaS &amp; applis métier</div><div class="dd-sub">Plateformes B2B, espaces clients.</div></div>
            </a>
            <a class="dd-link" href="/services/outils-internes-sur-mesure">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3v18h18M7 14l3-3 4 4 5-5"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Outils internes sur mesure</div><div class="dd-sub">Back-office, workflows, automatisations.</div></div>
            </a>
            <a class="dd-link" href="/services/sites-vitrines">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Sites vitrines &amp; landings</div><div class="dd-sub">Sites qui convertissent, pas qui informent.</div></div>
            </a>
            <a class="dd-link" href="/services/ecommerce">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></div>
              <div class="dd-meta"><div class="dd-title">E-commerce</div><div class="dd-sub">Boutiques haut de gamme, Shopify Plus.</div></div>
            </a>
          </div>
          <div class="dd-col">
            <h6>Faire grandir</h6>
            <a class="dd-link" href="/services/referencement-google">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
              <div class="dd-meta"><div class="dd-title">SEO &amp; référencement</div><div class="dd-sub">Contenu, tech, netlinking.</div></div>
            </a>
            <a class="dd-link" href="/services/publicite-en-ligne">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Publicité en ligne</div><div class="dd-sub">Google Ads, Meta, LinkedIn.</div></div>
            </a>
            <a class="dd-link" href="/services/contenu-video">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Contenu &amp; vidéo</div><div class="dd-sub">Studio interne, motion, YouTube.</div></div>
            </a>
          </div>
          <div class="dd-col">
            <h6>Protéger &amp; opérer</h6>
            <a class="dd-link" href="/services/maintenance-evolution">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Maintenance &amp; évolution</div><div class="dd-sub">Forfait mensuel, support prioritaire.</div></div>
            </a>
            <a class="dd-link" href="/services/securite-rgpd">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Sécurité &amp; RGPD</div><div class="dd-sub">Audit, conformité, hébergement FR.</div></div>
            </a>
            <a class="dd-link" href="/services/audit-technique">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Audit technique</div><div class="dd-sub">Code review, perf, sécurité.</div></div>
            </a>
          </div>
          <div class="dd-cta">
            <div class="dd-cta-body">
              <div class="tag">Pas sûr ?</div>
              <div class="dd-cta-title">On vous aide à choisir le bon service.</div>
              <div class="dd-cta-sub">30 min avec un associé, gratuit, pour cadrer votre besoin.</div>
              <a href="/#contact" class="btn btn-accent">Réserver un créneau →</a>
            </div>
          </div>
        </div>
      </div>
      <a href="/methode">Méthode</a>
      <a href="/realisations" class="active">Réalisations</a>
      <a href="/equipe">Équipe</a>
      <a href="/tarifs">Tarifs</a>
      <a href="/outils/estimer-mon-projet">Calculateur</a>
      <a href="/blog">Blog</a>
    </div>
    <div class="nav-cta">
      <a href="/#contact" class="btn btn-ghost">Prendre RDV</a>
      <a href="/#contact" class="btn btn-primary">Démarrer un projet
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</nav>

<!-- ========================================================================
     BREADCRUMB
     ======================================================================== -->
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <span>Réalisations</span>
  </div>
</div>

<!-- ========================================================================
     1. HERO
     ======================================================================== -->
<section class="rl-hero">
  <div class="rl-hero-grid"></div>
  <div class="rl-hero-radial"></div>
  <div class="wrap">
    <div class="rl-hero-inner">
      <!-- LEFT — copy block -->
      <div class="rl-hero-copy reveal">
        <div class="rl-hero-eyebrow">
          <span class="pill"><span class="dot"></span>RÉALISATIONS · ÉTUDES DE CAS</span>
        </div>
        <h1>
          <span class="rl-hero-line">Du code livré.</span>
          Des résultats <span class="grad-accent">mesurés</span>.
        </h1>
        <p class="rl-hero-sub">
          Pas une galerie. Un dossier d'enquête. Pour chaque projet livré, on publie le contexte,
          les chiffres post-livraison et la <b>courbe de progression</b> — chiffre d'affaires,
          trafic SEO, leads qualifiés. Vérifiable sur demande.
        </p>
        <div class="rl-hero-cta">
          <a href="/#contact" class="btn btn-accent btn-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2 16 16 0 01-16-16z"/></svg>
            Démarrer mon cadrage
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#portfolio" class="btn btn-ghost btn-lg">
            Explorer les 4 études
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </a>
        </div>
        <div class="rl-hero-meta">
          <span><span class="dot"></span>4 études détaillées · 23 projets au total</span>
          <span class="sep"></span>
          <span>Mise à jour avril 2026</span>
        </div>
      </div>

      <!-- RIGHT — mini collage of 4 case study previews -->
      <div class="rl-hero-collage reveal reveal-d-1">
        <!-- LMNP.AI (top-left) -->
        <a href="/realisations/lmnp-ai" class="rl-collage-card tilt-l" style="--brand:#6D28D9;--brand-soft:#1A0F2E">
          <div class="rl-collage-thumb" style="background:#0A0A0A">
            <svg viewBox="0 0 240 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="240" height="140" fill="#0A0A0A"/>
              <defs><pattern id="ghLmnp" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1a1a1a" stroke-width="0.5"/></pattern></defs>
              <rect width="240" height="140" fill="url(#ghLmnp)"/>
              <text x="20" y="34" font-family="Geist Mono" font-size="8" fill="#A78BFA" letter-spacing="1">LMNP.AI</text>
              <text x="20" y="76" font-family="Geist" font-weight="700" font-size="32" fill="#fff" letter-spacing="-1">4 128<tspan font-size="18" fill="#A78BFA"> €</tspan></text>
              <text x="20" y="98" font-family="Geist Mono" font-size="7" fill="#737373" letter-spacing="0.5">ÉCONOMIE FISCALE / AN</text>
              <rect x="20" y="108" width="200" height="6" rx="3" fill="#1f1f1f"/>
              <rect x="20" y="108" width="160" height="6" rx="3" fill="#6D28D9"/>
            </svg>
          </div>
          <div class="rl-collage-foot">
            <div class="rl-collage-logo" style="background:#6D28D9">L</div>
            <div class="rl-collage-meta">
              <div class="rl-collage-name">LMNP.AI</div>
              <div class="rl-collage-tag">SaaS B2C · 2025</div>
            </div>
          </div>
        </a>

        <!-- SCI-AI.app (top-right) -->
        <a href="/realisations/sci-ai" class="rl-collage-card tilt-r" style="--brand:#0066FF;--brand-soft:#E0ECFF">
          <div class="rl-collage-thumb" style="background:#F5F8FF">
            <svg viewBox="0 0 240 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="240" height="140" fill="#F5F8FF"/>
              <rect x="16" y="16" width="208" height="108" rx="8" fill="#fff" stroke="#D9E4F5"/>
              <text x="28" y="36" font-family="Geist Mono" font-size="7" fill="#6B7B96" letter-spacing="0.8">DASHBOARD SCI</text>
              <rect x="28" y="46" width="60" height="32" rx="6" fill="#F5F8FF"/>
              <text x="34" y="60" font-family="Geist Mono" font-size="6" fill="#6B7B96">BÉNÉFICE</text>
              <text x="34" y="74" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">12 840 €</text>
              <rect x="92" y="46" width="60" height="32" rx="6" fill="#F5F8FF"/>
              <text x="98" y="60" font-family="Geist Mono" font-size="6" fill="#6B7B96">AMORT.</text>
              <text x="98" y="74" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">8 920 €</text>
              <rect x="156" y="46" width="56" height="32" rx="6" fill="#0066FF"/>
              <text x="162" y="60" font-family="Geist Mono" font-size="6" fill="#BFD4FF">ASSOCIÉS</text>
              <text x="162" y="74" font-family="Geist" font-weight="700" font-size="13" fill="#fff">3</text>
              <rect x="28" y="86" width="184" height="28" rx="6" fill="#F5F8FF"/>
              <text x="40" y="100" font-family="Geist" font-weight="600" font-size="9" fill="#0A0A0A">Liasse 2065 · IS</text>
              <text x="200" y="100" text-anchor="end" font-family="Geist Mono" font-weight="600" font-size="9" fill="#0066FF">✓ Validée</text>
            </svg>
          </div>
          <div class="rl-collage-foot">
            <div class="rl-collage-logo" style="background:#0066FF">S</div>
            <div class="rl-collage-meta">
              <div class="rl-collage-name">SCI-AI.app</div>
              <div class="rl-collage-tag">SaaS B2C · 2025</div>
            </div>
          </div>
        </a>

        <!-- Hagnéré Patrimoine (bottom-left) -->
        <a href="/realisations/hagnere-patrimoine" class="rl-collage-card tilt-r" style="--brand:#C9A96E;--brand-soft:#1A1408">
          <div class="rl-collage-thumb" style="background:#0A0A0A">
            <svg viewBox="0 0 240 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="240" height="140" fill="#0A0A0A"/>
              <line x1="20" y1="20" x2="20" y2="120" stroke="#C9A96E" stroke-width="1" opacity="0.5"/>
              <text x="32" y="32" font-family="Geist Mono" font-size="7" fill="#C9A96E" letter-spacing="1.5">◆ HAGNÉRÉ PATRIMOINE</text>
              <text x="32" y="64" font-family="Geist" font-weight="300" font-size="20" fill="#fff" letter-spacing="-0.5">Construisons</text>
              <text x="32" y="84" font-family="Geist" font-weight="300" font-size="20" fill="#fff" letter-spacing="-0.5">votre <tspan font-style="italic" fill="#C9A96E">patrimoine</tspan>.</text>
              <line x1="32" y1="98" x2="120" y2="98" stroke="#C9A96E" stroke-width="0.8"/>
              <text x="32" y="116" font-family="Geist Mono" font-size="6" fill="#9e9e9e" letter-spacing="0.8">CABINET CIF · CHAMBÉRY</text>
            </svg>
          </div>
          <div class="rl-collage-foot">
            <div class="rl-collage-logo" style="background:#C9A96E">HP</div>
            <div class="rl-collage-meta">
              <div class="rl-collage-name">Hagnéré Patrimoine</div>
              <div class="rl-collage-tag">Site vitrine · 2024</div>
            </div>
          </div>
        </a>

        <!-- Hagnéré Investissement (bottom-right) -->
        <a href="/realisations/hagnere-investissement" class="rl-collage-card tilt-l" style="--brand:#0F766E;--brand-soft:#D1FAE5">
          <div class="rl-collage-thumb" style="background:#F7F9F8">
            <svg viewBox="0 0 240 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="240" height="140" fill="#F7F9F8"/>
              <rect x="16" y="16" width="130" height="108" rx="8" fill="#0F766E"/>
              <text x="26" y="34" font-family="Geist Mono" font-size="6" fill="#A7F3D0" letter-spacing="1">◆ HAGNÉRÉ INVEST.</text>
              <text x="26" y="62" font-family="Geist" font-weight="700" font-size="14" fill="#fff" letter-spacing="-0.5">Investir dans</text>
              <text x="26" y="80" font-family="Geist" font-weight="700" font-size="14" fill="#fff" letter-spacing="-0.5">l'immobilier</text>
              <text x="26" y="98" font-family="Geist" font-weight="700" font-size="14" fill="#A7F3D0" letter-spacing="-0.5">clé en main.</text>
              <rect x="26" y="106" width="76" height="14" rx="3" fill="#fff"/>
              <text x="64" y="115" text-anchor="middle" font-family="Geist" font-weight="600" font-size="7" fill="#0F766E">Prendre RDV →</text>
              <rect x="156" y="16" width="68" height="50" rx="8" fill="#fff" stroke="#E5ECE9"/>
              <text x="164" y="32" font-family="Geist Mono" font-size="6" fill="#6B7B74">RENDEMENT</text>
              <text x="164" y="54" font-family="Geist" font-weight="700" font-size="20" fill="#0F766E" letter-spacing="-0.5">7,2 %</text>
              <rect x="156" y="74" width="68" height="50" rx="8" fill="#fff" stroke="#E5ECE9"/>
              <text x="164" y="90" font-family="Geist Mono" font-size="6" fill="#6B7B74">CLIENTS</text>
              <text x="164" y="112" font-family="Geist" font-weight="700" font-size="20" fill="#0F766E" letter-spacing="-0.5">612</text>
            </svg>
          </div>
          <div class="rl-collage-foot">
            <div class="rl-collage-logo" style="background:#0F766E">HI</div>
            <div class="rl-collage-meta">
              <div class="rl-collage-name">Hagnéré Investissement</div>
              <div class="rl-collage-tag">Site vitrine · 2024</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- KPI strip (full bleed inside the hero section) -->
  <div class="rl-hero-kpis">
    <div class="rl-kpi-grid">
      <div class="rl-kpi reveal">
        <div class="rl-kpi-k">PROJETS LIVRÉS</div>
        <div class="rl-kpi-n">23<span class="s">/23</span></div>
        <div class="rl-kpi-l">Tous au prix annoncé, dans les délais contractuels.</div>
      </div>
      <div class="rl-kpi reveal reveal-d-1">
        <div class="rl-kpi-k">NPS POST-LIVRAISON</div>
        <div class="rl-kpi-n">+74<span class="s">/100</span></div>
        <div class="rl-kpi-l">19 répondants sur 23 · médiane +80.</div>
      </div>
      <div class="rl-kpi reveal reveal-d-2">
        <div class="rl-kpi-k">SATISFACTION</div>
        <div class="rl-kpi-n">4,9<span class="s">/5</span></div>
        <div class="rl-kpi-l">Note moyenne post-projet sur 23 répondants.</div>
      </div>
      <div class="rl-kpi reveal reveal-d-3">
        <div class="rl-kpi-k">CHIFFRE GÉNÉRÉ CLIENTS</div>
        <div class="rl-kpi-n">2,4<span class="s"> M€</span></div>
        <div class="rl-kpi-l">CA cumulé déclenché par nos livraisons en 18 mois.</div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================================
     2. PORTFOLIO GRID  (4 case studies, 2x2)
     ======================================================================== -->
<section class="rl-portfolio" id="portfolio">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Études de cas</div>
        <h2>Quatre projets,<br>quatre histoires <span class="grad-accent">documentées</span>.</h2>
      </div>
      <div class="right">
        Deux SaaS B2C de comptabilité immobilière lancés en 2025, et deux sites vitrines premium
        livrés en 2024 dans la gestion de patrimoine. <b>Cliquez pour ouvrir l'étude détaillée</b>
        — chiffres, méthode, avant / après, témoignage.
      </div>
    </div>

    <!-- Filter bar — disabled buttons (filter logic to come; clarifies affordance) -->
    <div class="rl-filterbar reveal" role="group" aria-label="Filtrer les études de cas">
      <div class="rl-filter-group">
        <span class="rl-filter-label">Secteur</span>
        <button type="button" class="rl-chip is-active" aria-pressed="true">
          Tous <span class="rl-chip-count">4</span>
        </button>
        <button type="button" class="rl-chip" disabled aria-label="SaaS B2C — filtrage à venir">
          SaaS B2C <span class="rl-chip-count">2</span>
        </button>
        <button type="button" class="rl-chip" disabled aria-label="Site vitrine — filtrage à venir">
          Site vitrine <span class="rl-chip-count">2</span>
        </button>
        <button type="button" class="rl-chip" disabled aria-label="Comptabilité fiscale — filtrage à venir">
          Comptabilité fiscale <span class="rl-chip-count">2</span>
        </button>
        <button type="button" class="rl-chip" disabled aria-label="Gestion de patrimoine — filtrage à venir">
          Gestion de patrimoine <span class="rl-chip-count">2</span>
        </button>
      </div>
      <div class="rl-filter-meta">4 études · 2024 → 2025</div>
    </div>

    <div class="rl-grid">

      <!-- LMNP.AI -->
      <a href="/realisations/lmnp-ai" class="real-card reveal" style="--brand:#6D28D9;--brand-soft:#EDE9FE" aria-label="Lire l'étude de cas LMNP.AI — 5 400 clients payants en 12 mois, SaaS B2C de comptabilité LMNP">
        <div class="real-shot" style="background:#0A0A0A">
          <div class="rl-card-badge" aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
            5,4 K CLIENTS · 12 MOIS
          </div>
          <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="340" fill="#0A0A0A"/>
            <defs><pattern id="gridLmnpPort" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1a1a" stroke-width="0.5"/></pattern></defs>
            <rect width="600" height="340" fill="url(#gridLmnpPort)"/>
            <rect x="110" y="56" width="380" height="228" rx="14" fill="#121212" stroke="#262626"/>
            <circle cx="132" cy="82" r="4" fill="#6D28D9"/>
            <text x="146" y="86" font-family="Geist Mono" font-size="11" fill="#A78BFA" letter-spacing="1">LMNP.AI · RÉSULTAT</text>
            <text x="132" y="130" font-family="Geist" font-weight="700" font-size="15" fill="#737373">Économie annuelle estimée</text>
            <text x="132" y="180" font-family="Geist" font-weight="700" font-size="52" fill="#fff" letter-spacing="-2">4 128<tspan font-size="30" fill="#A78BFA"> €</tspan></text>
            <rect x="132" y="200" width="336" height="1" fill="#262626"/>
            <text x="132" y="226" font-family="Geist Mono" font-size="10" fill="#737373" letter-spacing="1">RÉGIME RECOMMANDÉ</text>
            <text x="132" y="248" font-family="Geist" font-weight="600" font-size="17" fill="#fff">LMNP au réel simplifié</text>
            <rect x="132" y="260" width="336" height="10" rx="5" fill="#1f1f1f"/>
            <rect x="132" y="260" width="280" height="10" rx="5" fill="#6D28D9"/>
          </svg>
          <div class="rl-card-quote">On a cadré ce SaaS en 6 semaines. L'impact sur l'adoption du régime réel est concret : 5,4 k clients en moins d'un an.</div>
        </div>
        <div class="real-head">
          <div class="real-logo">L</div>
          <div class="real-head-main">
            <span class="rl-card-outcome">+5 400 utilisateurs payants</span>
            <h3>LMNP.AI</h3>
            <span class="real-url">lmnp.ai</span>
          </div>
          <span class="real-chip">SaaS B2C</span>
        </div>
        <div class="real-body">
          <div class="real-meta">LARAVEL 12 <span class="dot"></span> CLAUDE SONNET 4.5 <span class="dot"></span> EDI DGFiP <span class="dot"></span> LIVRÉ 2025</div>
          <p>Première plateforme française qui fait la comptabilité LMNP au réel en autonomie, guidée par IA, avec télétransmission EDI à la DGFiP. Offre autonomie ou validation expert-comptable.</p>
          <div class="real-metric">
            <div class="rm"><div class="n">5,4<span class="s"> k</span></div><div class="l">clients actifs</div></div>
            <div class="rm"><div class="n">163</div><div class="l">guides rédigés</div></div>
            <div class="rm"><div class="n">15<span class="s"> min</span></div><div class="l">de compta/an</div></div>
          </div>
        </div>
      </a>

      <!-- SCI-AI.app -->
      <a href="/realisations/sci-ai" class="real-card reveal reveal-d-1" style="--brand:#0066FF;--brand-soft:#E0ECFF" aria-label="Lire l'étude de cas SCI-AI.app — comptabilité SCI IR et IS unifiée, télétransmission EDI DGFiP">
        <div class="real-shot" style="background:#F5F8FF">
          <div class="rl-card-badge" aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
            2 RÉGIMES IR/IS · 1 PARCOURS
          </div>
          <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="340" fill="#F5F8FF"/>
            <rect x="40" y="40" width="520" height="260" rx="14" fill="#fff" stroke="#D9E4F5"/>
            <rect x="40" y="40" width="520" height="48" rx="14" fill="#fff"/>
            <rect x="40" y="86" width="520" height="1" fill="#E5ECF5"/>
            <circle cx="62" cy="64" r="5" fill="#0066FF"/>
            <text x="76" y="68" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">SCI-AI.app</text>
            <text x="540" y="68" text-anchor="end" font-family="Geist Mono" font-size="10" fill="#737373">Liasse 2065 · IS</text>
            <g font-family="Geist">
              <rect x="64" y="108" width="152" height="76" rx="10" fill="#F5F8FF"/>
              <text x="78" y="128" font-family="Geist Mono" font-size="9" fill="#6B7B96" letter-spacing="1">BÉNÉFICE NET</text>
              <text x="78" y="158" font-weight="700" font-size="22" fill="#0A0A0A">12 840 €</text>
              <text x="78" y="174" font-family="Geist Mono" font-size="9" fill="#0066FF">+ IS 15 %</text>
              <rect x="224" y="108" width="152" height="76" rx="10" fill="#F5F8FF"/>
              <text x="238" y="128" font-family="Geist Mono" font-size="9" fill="#6B7B96" letter-spacing="1">AMORT. ANNUEL</text>
              <text x="238" y="158" font-weight="700" font-size="22" fill="#0A0A0A">8 920 €</text>
              <text x="238" y="174" font-family="Geist Mono" font-size="9" fill="#0066FF">6 composants</text>
              <rect x="384" y="108" width="152" height="76" rx="10" fill="#0066FF"/>
              <text x="398" y="128" font-family="Geist Mono" font-size="9" fill="#BFD4FF" letter-spacing="1">ASSOCIÉS</text>
              <text x="398" y="158" font-weight="700" font-size="22" fill="#fff">3</text>
              <text x="398" y="174" font-family="Geist Mono" font-size="9" fill="#BFD4FF">parts à jour</text>
            </g>
            <rect x="64" y="200" width="472" height="80" rx="10" fill="#F5F8FF"/>
            <text x="80" y="222" font-family="Geist" font-weight="600" font-size="12" fill="#0A0A0A">Transmission EDI · 2065</text>
            <text x="80" y="240" font-family="Geist Mono" font-size="10" fill="#6B7B96">DGFiP · accusé de réception reçu</text>
            <rect x="80" y="252" width="280" height="8" rx="4" fill="#D9E4F5"/>
            <rect x="80" y="252" width="280" height="8" rx="4" fill="#0066FF"/>
            <text x="522" y="244" text-anchor="end" font-family="Geist Mono" font-weight="600" font-size="14" fill="#0066FF">✓ Validée</text>
          </svg>
          <div class="rl-card-quote">La bascule IR → IS est le moment le plus risqué pour une SCI. On l'a automatisée proprement grâce à un gros travail de cadrage fiscal.</div>
        </div>
        <div class="real-head">
          <div class="real-logo">S</div>
          <div class="real-head-main">
            <span class="rl-card-outcome">×8 moins cher qu'un cabinet</span>
            <h3>SCI-AI.app</h3>
            <span class="real-url">sci-ai.app</span>
          </div>
          <span class="real-chip">SaaS B2C</span>
        </div>
        <div class="real-body">
          <div class="real-meta">LARAVEL 12 <span class="dot"></span> EDI DGFiP <span class="dot"></span> CLAUDE <span class="dot"></span> LIVRÉ 2025</div>
          <p>Logiciel de comptabilité SCI (IR et IS) en parcours unifié. Liasses 2033, 2065, 2072 générées et télétransmises. Gestion des associés, parts, comptes courants, démembrement et amortissements par composants.</p>
          <div class="real-metric">
            <div class="rm"><div class="n">2</div><div class="l">régimes (IR/IS)</div></div>
            <div class="rm"><div class="n">3</div><div class="l">liasses auto</div></div>
            <div class="rm"><div class="n">229<span class="s"> €</span></div><div class="l">/an autonomie</div></div>
          </div>
        </div>
      </a>

      <!-- HAGNÉRÉ PATRIMOINE -->
      <a href="/realisations/hagnere-patrimoine" class="real-card reveal reveal-d-2" style="--brand:#C9A96E;--brand-soft:#FAF3E3" aria-label="Lire l'étude de cas Hagnéré Patrimoine — +340 % de trafic SEO et ×3 sur le pipeline commercial en 6 mois">
        <div class="real-shot" style="background:#0A0A0A">
          <div class="rl-card-badge" aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
            +340 % TRAFIC SEO · 6 MOIS
          </div>
          <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="340" fill="#0A0A0A"/>
            <line x1="40" y1="40" x2="40" y2="300" stroke="#C9A96E" stroke-width="1" opacity="0.5"/>
            <text x="60" y="60" font-family="Geist Mono" font-size="10" fill="#C9A96E" letter-spacing="2">◆ HAGNÉRÉ PATRIMOINE</text>
            <text x="60" y="128" font-family="Geist" font-weight="300" font-size="42" fill="#fff" letter-spacing="-1">Construisons</text>
            <text x="60" y="168" font-family="Geist" font-weight="300" font-size="42" fill="#fff" letter-spacing="-1">votre <tspan font-style="italic" fill="#C9A96E">patrimoine</tspan>,</text>
            <text x="60" y="208" font-family="Geist" font-weight="300" font-size="42" fill="#fff" letter-spacing="-1">ensemble.</text>
            <line x1="60" y1="232" x2="200" y2="232" stroke="#C9A96E" stroke-width="1"/>
            <text x="60" y="256" font-family="Geist Mono" font-size="10" fill="#9e9e9e" letter-spacing="1">CABINET DE GESTION · CHAMBÉRY</text>
            <rect x="420" y="60" width="140" height="220" rx="2" fill="none" stroke="#C9A96E" stroke-width="1" opacity="0.3"/>
            <text x="490" y="110" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#C9A96E" letter-spacing="1.5">SOUS GESTION</text>
            <text x="490" y="170" text-anchor="middle" font-family="Geist" font-weight="300" font-size="44" fill="#fff" letter-spacing="-2">18 M€</text>
            <line x1="450" y1="190" x2="530" y2="190" stroke="#C9A96E" opacity="0.5"/>
            <text x="490" y="216" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#9e9e9e" letter-spacing="1">CIF · ORIAS</text>
            <text x="490" y="236" text-anchor="middle" font-family="Geist" font-weight="400" font-size="11" fill="#fff">284 clients</text>
          </svg>
          <div class="rl-card-quote">Le site nous a repositionné en haut de gamme et a débloqué un flux de prospects qualifiés qu'on n'avait jamais eu en 8 ans d'activité.</div>
        </div>
        <div class="real-head">
          <div class="real-logo">HP</div>
          <div class="real-head-main">
            <span class="rl-card-outcome">×3 pipeline commercial</span>
            <h3>Hagnéré Patrimoine</h3>
            <span class="real-url">hagnere-patrimoine.fr</span>
          </div>
          <span class="real-chip">Site vitrine</span>
        </div>
        <div class="real-body">
          <div class="real-meta">LARAVEL 11 <span class="dot"></span> SEO + GOOGLE ADS <span class="dot"></span> LIVRÉ 2024</div>
          <p>Refonte complète d'un cabinet CIF · ORIAS : positionnement premium, SEO longue traîne sur 35 pages piliers, tunnels de qualification 4 étapes et campagnes Google Ads sur intentions chaudes.</p>
          <div class="real-metric">
            <div class="rm"><div class="n">+340<span class="s"> %</span></div><div class="l">trafic organique</div></div>
            <div class="rm"><div class="n">4,2<span class="s"> %</span></div><div class="l">conversion RDV</div></div>
            <div class="rm"><div class="n">×3</div><div class="l">pipeline commercial</div></div>
          </div>
        </div>
      </a>

      <!-- HAGNÉRÉ INVESTISSEMENT -->
      <a href="/realisations/hagnere-investissement" class="real-card reveal reveal-d-3" style="--brand:#0F766E;--brand-soft:#D1FAE5" aria-label="Lire l'étude de cas Hagnéré Investissement — ×2,5 sur les leads qualifiés en 8 mois, simulateur de rendement et funnel segmenté">
        <div class="real-shot" style="background:#F7F9F8">
          <div class="rl-card-badge" aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
            ×2,5 LEADS QUALIFIÉS · 8 MOIS
          </div>
          <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="600" height="340" fill="#F7F9F8"/>
            <rect x="40" y="40" width="330" height="260" rx="14" fill="#0F766E"/>
            <text x="62" y="70" font-family="Geist Mono" font-size="10" fill="#A7F3D0" letter-spacing="1.5">◆ HAGNÉRÉ INVESTISSEMENT</text>
            <text x="62" y="128" font-family="Geist" font-weight="700" font-size="28" fill="#fff" letter-spacing="-1">Investir dans</text>
            <text x="62" y="160" font-family="Geist" font-weight="700" font-size="28" fill="#fff" letter-spacing="-1">l'immobilier</text>
            <text x="62" y="192" font-family="Geist" font-weight="700" font-size="28" fill="#A7F3D0" letter-spacing="-1">clé en main.</text>
            <rect x="62" y="232" width="170" height="42" rx="8" fill="#fff"/>
            <text x="147" y="258" text-anchor="middle" font-family="Geist" font-weight="600" font-size="13" fill="#0F766E">Prendre RDV →</text>
            <rect x="390" y="40" width="170" height="125" rx="14" fill="#fff" stroke="#E5ECE9"/>
            <text x="410" y="66" font-family="Geist Mono" font-size="9" fill="#6B7B74" letter-spacing="1">RENDEMENT NET</text>
            <text x="410" y="108" font-family="Geist" font-weight="700" font-size="34" fill="#0F766E" letter-spacing="-1">7,2 %</text>
            <text x="410" y="128" font-family="Geist Mono" font-size="9" fill="#6B7B74">moyenne clients 2024</text>
            <rect x="410" y="138" width="130" height="4" rx="2" fill="#D1FAE5"/>
            <rect x="410" y="138" width="110" height="4" rx="2" fill="#0F766E"/>
            <rect x="390" y="175" width="170" height="125" rx="14" fill="#fff" stroke="#E5ECE9"/>
            <text x="410" y="200" font-family="Geist Mono" font-size="9" fill="#6B7B74" letter-spacing="1">CLIENTS ACCOMPAGNÉS</text>
            <text x="410" y="242" font-family="Geist" font-weight="700" font-size="34" fill="#0F766E" letter-spacing="-1">612</text>
            <text x="410" y="262" font-family="Geist Mono" font-size="9" fill="#6B7B74">depuis 2021</text>
            <circle cx="420" cy="282" r="6" fill="#0F766E"/>
            <circle cx="432" cy="282" r="6" fill="#0F766E" opacity="0.7"/>
            <circle cx="444" cy="282" r="6" fill="#0F766E" opacity="0.4"/>
            <text x="460" y="286" font-family="Geist Mono" font-size="9" fill="#6B7B74">+ chaque mois</text>
          </svg>
          <div class="rl-card-quote">Le simulateur à lui seul a doublé le volume de leads qualifiés. Les commerciaux passent enfin leur temps avec des prospects sérieux.</div>
        </div>
        <div class="real-head">
          <div class="real-logo">HI</div>
          <div class="real-head-main">
            <span class="rl-card-outcome">CPA &lt; 80 € sur le segment cœur</span>
            <h3>Hagnéré Investissement</h3>
            <span class="real-url">hagnere-investissement.fr</span>
          </div>
          <span class="real-chip">Site vitrine</span>
        </div>
        <div class="real-body">
          <div class="real-meta">LARAVEL 11 <span class="dot"></span> SIMULATEUR <span class="dot"></span> YOUTUBE API <span class="dot"></span> LIVRÉ 2024</div>
          <p>Plateforme marketing du cabinet d'investissement immobilier clé en main : simulateur de rendement 3 étapes, funnel segmenté par budget, intégration YouTube live, campagnes Meta + Google.</p>
          <div class="real-metric">
            <div class="rm"><div class="n">612</div><div class="l">clients accompagnés</div></div>
            <div class="rm"><div class="n">7,2<span class="s"> %</span></div><div class="l">rendement moyen</div></div>
            <div class="rm"><div class="n">×2,5</div><div class="l">leads qualifiés</div></div>
          </div>
        </div>
      </a>

    </div>

    <div class="rl-grid-foot reveal">
      <div class="rl-grid-foot-ic">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
      </div>
      <span>
        Vous voulez parler à l'un de ces clients avant de signer ? <b>On vous met en relation</b>
        — avec leur accord et sous 48 h. <a href="/#contact">Demander un contact référence →</a>
      </span>
    </div>
  </div>
</section>

<!-- ========================================================================
     3. GROWTH SHOWCASE  (the wedge — dark, progression charts)
     ======================================================================== -->
<section class="rl-growth" id="croissance">
  <div class="rl-growth-bg"></div>
  <div class="rl-growth-radial"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="rl-growth-tag">
          <span class="dot"></span>LE DIFFÉRENCIATEUR
        </div>
        <div class="eyebrow on-dark">— Les courbes qu'on déclenche</div>
        <h2>
          Aucune autre agence ne montre ça<br>
          sur sa page réalisations. <span class="grad-accent">Nous, oui.</span>
        </h2>
      </div>
      <div class="right">
        Pour chaque projet livré, on suit la <b>vraie courbe de progression</b> sur 6 à 12 mois :
        chiffre d'affaires généré, trafic SEO organique, leads qualifiés. Données mesurées via
        Stripe, Google Analytics 4, Plausible et CRM client. Vérifiables sur demande.
      </div>
    </div>

    <div class="rl-charts">

      <!-- CHART 1 — LMNP.AI clients growth (line + filled area) -->
      <div class="rl-chart reveal" style="--brand:#A78BFA">
        <div class="rl-chart-head">
          <div class="rl-chart-meta">
            <div class="rl-chart-project">
              <span class="rl-chart-dot"></span>LMNP.AI · CLIENTS PAYANTS
            </div>
            <h3 class="rl-chart-title">De 0 à 5 400 clients en 12 mois.</h3>
          </div>
          <div class="rl-chart-headnum">
            <span class="rl-chart-headnum-n">+5,4 k</span>
          </div>
        </div>
        <div class="rl-chart-canvas">
          <svg viewBox="0 0 540 220" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="lmnpFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#A78BFA" stop-opacity="0.45"/>
                <stop offset="100%" stop-color="#A78BFA" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <!-- grid -->
            <g stroke="rgba(255,255,255,0.06)" stroke-width="1">
              <line x1="40" y1="40" x2="520" y2="40"/>
              <line x1="40" y1="90" x2="520" y2="90"/>
              <line x1="40" y1="140" x2="520" y2="140"/>
              <line x1="40" y1="190" x2="520" y2="190"/>
            </g>
            <!-- y-axis labels -->
            <g font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="end">
              <text x="34" y="44">5 k</text>
              <text x="34" y="94">3 k</text>
              <text x="34" y="144">1,5 k</text>
              <text x="34" y="194">0</text>
            </g>
            <!-- area -->
            <path d="M 40 192 L 80 188 L 120 184 L 160 178 L 200 168 L 240 154 L 280 138 L 320 118 L 360 96 L 400 74 L 440 56 L 480 44 L 520 36 L 520 192 L 40 192 Z"
                  fill="url(#lmnpFill)"/>
            <!-- line -->
            <path d="M 40 192 L 80 188 L 120 184 L 160 178 L 200 168 L 240 154 L 280 138 L 320 118 L 360 96 L 400 74 L 440 56 L 480 44 L 520 36"
                  fill="none" stroke="#A78BFA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- end dot -->
            <circle cx="520" cy="36" r="6" fill="#A78BFA"/>
            <circle cx="520" cy="36" r="3" fill="#0A0A0A"/>
            <!-- inflection annotation (Sept 2025) -->
            <line x1="320" y1="118" x2="320" y2="78" stroke="rgba(167,139,250,0.4)" stroke-width="1" stroke-dasharray="2 3"/>
            <circle cx="320" cy="118" r="4" fill="#A78BFA" opacity="0.85"/>
            <text x="320" y="74" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#A78BFA" letter-spacing="0.06em">SEO BREAK</text>
            <!-- x axis labels -->
            <g font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="middle">
              <text x="40" y="210">M+0</text>
              <text x="160" y="210">M+3</text>
              <text x="280" y="210">M+6</text>
              <text x="400" y="210">M+9</text>
              <text x="520" y="210">M+12</text>
            </g>
          </svg>
        </div>
        <div class="rl-chart-foot">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
          <span><b>229 €/an</b> en autonomie · break-even atteint au mois +5 · données Stripe.</span>
        </div>
      </div>

      <!-- CHART 2 — Hagnéré Patrimoine SEO traffic (smooth line) -->
      <div class="rl-chart reveal reveal-d-1" style="--brand:#C9A96E">
        <div class="rl-chart-head">
          <div class="rl-chart-meta">
            <div class="rl-chart-project">
              <span class="rl-chart-dot"></span>H. PATRIMOINE · SEO ORGANIQUE
            </div>
            <h3 class="rl-chart-title">+340 % de trafic en 6 mois.</h3>
          </div>
          <div class="rl-chart-headnum">
            <span class="rl-chart-headnum-n">+340 %</span>
          </div>
        </div>
        <div class="rl-chart-canvas">
          <svg viewBox="0 0 380 220" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="hpFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#C9A96E" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="#C9A96E" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <g stroke="rgba(255,255,255,0.06)" stroke-width="1">
              <line x1="34" y1="40" x2="370" y2="40"/>
              <line x1="34" y1="100" x2="370" y2="100"/>
              <line x1="34" y1="160" x2="370" y2="160"/>
            </g>
            <g font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="end">
              <text x="30" y="44">22 K</text>
              <text x="30" y="104">12 K</text>
              <text x="30" y="194">5 K</text>
            </g>
            <path d="M 40 188 C 80 184, 110 178, 140 172 S 200 160, 230 138 S 290 90, 320 60 S 360 38, 365 32 L 365 192 L 40 192 Z" fill="url(#hpFill)"/>
            <path d="M 40 188 C 80 184, 110 178, 140 172 S 200 160, 230 138 S 290 90, 320 60 S 360 38, 365 32" fill="none" stroke="#C9A96E" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="365" cy="32" r="6" fill="#C9A96E"/>
            <circle cx="365" cy="32" r="3" fill="#0A0A0A"/>
            <!-- baseline annotation -->
            <line x1="40" y1="188" x2="365" y2="188" stroke="rgba(255,255,255,0.15)" stroke-width="1" stroke-dasharray="3 4"/>
            <text x="40" y="180" font-family="Geist Mono" font-size="8" fill="rgba(255,255,255,0.4)" letter-spacing="0.06em">BASELINE PRÉ-REFONTE</text>
            <g font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="middle">
              <text x="40" y="210">M+0</text>
              <text x="200" y="210">M+3</text>
              <text x="365" y="210">M+6</text>
            </g>
          </svg>
        </div>
        <div class="rl-chart-foot">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
          <span><b>35 pages piliers</b> + 200 backlinks · données Search Console.</span>
        </div>
      </div>

      <!-- CHART 3 — Hagnéré Investissement leads qualifiés (bar chart) -->
      <div class="rl-chart reveal reveal-d-2" style="--brand:#5EEAD4">
        <div class="rl-chart-head">
          <div class="rl-chart-meta">
            <div class="rl-chart-project">
              <span class="rl-chart-dot"></span>H. INVESTISSEMENT · LEADS
            </div>
            <h3 class="rl-chart-title">×2,5 sur 8 mois consécutifs.</h3>
          </div>
          <div class="rl-chart-headnum">
            <span class="rl-chart-headnum-n">×2,5</span>
          </div>
        </div>
        <div class="rl-chart-canvas">
          <svg viewBox="0 0 380 220" preserveAspectRatio="none" aria-hidden="true">
            <g stroke="rgba(255,255,255,0.06)" stroke-width="1">
              <line x1="34" y1="40" x2="370" y2="40"/>
              <line x1="34" y1="100" x2="370" y2="100"/>
              <line x1="34" y1="160" x2="370" y2="160"/>
            </g>
            <g font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="end">
              <text x="30" y="44">240</text>
              <text x="30" y="104">160</text>
              <text x="30" y="194">80</text>
            </g>
            <!-- "before" bars (muted) -->
            <g fill="rgba(255,255,255,0.18)">
              <rect x="50" y="146" width="22" height="46" rx="3"/>
              <rect x="80" y="142" width="22" height="50" rx="3"/>
              <rect x="110" y="138" width="22" height="54" rx="3"/>
              <rect x="140" y="138" width="22" height="54" rx="3"/>
            </g>
            <text x="106" y="208" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.4)" letter-spacing="0.04em">AVANT REFONTE</text>
            <!-- divider -->
            <line x1="180" y1="40" x2="180" y2="192" stroke="rgba(255,255,255,0.15)" stroke-width="1" stroke-dasharray="2 3"/>
            <text x="186" y="50" font-family="Geist Mono" font-size="9" fill="#5EEAD4" letter-spacing="0.04em">SIMULATEUR LIVE</text>
            <!-- "after" bars (brand) -->
            <g fill="#5EEAD4">
              <rect x="200" y="116" width="22" height="76" rx="3"/>
              <rect x="230" y="100" width="22" height="92" rx="3"/>
              <rect x="260" y="84" width="22" height="108" rx="3"/>
              <rect x="290" y="68" width="22" height="124" rx="3"/>
              <rect x="320" y="48" width="22" height="144" rx="3"/>
              <rect x="350" y="32" width="22" height="160" rx="3"/>
            </g>
          </svg>
        </div>
        <div class="rl-chart-foot">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
          <span><b>CPA cible &lt; 80 €</b> · sources Google Ads + Meta + organique.</span>
        </div>
      </div>

    </div>

    <div class="rl-growth-note reveal">
      <div class="rl-growth-note-ic">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
      <span>
        <b>Méthodologie.</b> Données extraites des outils de tracking client (Stripe pour le CA, Search Console / Plausible pour le SEO, GA4 + CRM pour les leads). Période de référence : J+0 = mise en production. Toutes les métriques sont vérifiables — <a href="/#contact">demandez l'export brut</a>.
      </span>
    </div>
  </div>
</section>

<!-- ========================================================================
     4. FEATURED ANCHOR CASE  (deep-dive sur LMNP.AI — style mini-landing)
     ======================================================================== -->
<section class="rl-feature" id="etude-phare" style="--brand:#6D28D9;--brand-soft:#EDE9FE;--brand-deep:#4C1D95">
  <div class="wrap">
    <div class="rl-feature-card reveal" tabindex="0" role="region" aria-labelledby="etude-phare-title">
      <div class="rl-feature-bg-grid" aria-hidden="true"></div>
      <div class="rl-feature-bg-radial" aria-hidden="true"></div>

      <!-- LEFT — visual block -->
      <div class="rl-feature-visual">
        <div class="rl-feature-tag">
          <span class="dot"></span>ÉTUDE PHARE · 2025
        </div>
        <div class="rl-feature-mock">
          <!-- Browser-style chrome -->
          <div class="rl-feature-mock-chrome">
            <span></span><span></span><span></span>
            <div class="rl-feature-mock-url">lmnp.ai/dashboard</div>
          </div>
          <!-- Mock body — dashboard mock -->
          <div class="rl-feature-mock-body">
            <svg viewBox="0 0 460 320" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <rect width="460" height="320" fill="#0A0A0A"/>
              <defs><pattern id="ftgrid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 L 0 0 0 32" fill="none" stroke="#1a1a1a" stroke-width="0.5"/></pattern></defs>
              <rect width="460" height="320" fill="url(#ftgrid)"/>

              <!-- Top stat row -->
              <g font-family="Geist">
                <rect x="24" y="24" width="200" height="80" rx="10" fill="#121212" stroke="#262626"/>
                <text x="38" y="42" font-family="Geist Mono" font-size="9" fill="#737373" letter-spacing="1">ÉCONOMIE FISCALE/AN</text>
                <text x="38" y="76" font-weight="700" font-size="32" fill="#fff" letter-spacing="-1">4 128<tspan font-size="16" fill="#A78BFA"> €</tspan></text>
                <text x="38" y="92" font-family="Geist Mono" font-size="8" fill="#A78BFA">↑ vs micro-BIC</text>

                <rect x="234" y="24" width="200" height="80" rx="10" fill="#121212" stroke="#262626"/>
                <text x="248" y="42" font-family="Geist Mono" font-size="9" fill="#737373" letter-spacing="1">PROGRESSION LIASSE</text>
                <text x="248" y="76" font-weight="700" font-size="32" fill="#fff" letter-spacing="-1">73<tspan font-size="16" fill="#A78BFA"> %</tspan></text>
                <rect x="248" y="84" width="172" height="6" rx="3" fill="#1f1f1f"/>
                <rect x="248" y="84" width="125" height="6" rx="3" fill="#6D28D9"/>
              </g>

              <!-- Bottom: amortissements list -->
              <rect x="24" y="118" width="412" height="178" rx="10" fill="#121212" stroke="#262626"/>
              <text x="38" y="138" font-family="Geist Mono" font-size="9" fill="#A78BFA" letter-spacing="1">AMORTISSEMENTS PAR COMPOSANTS · AUTO</text>

              <g font-family="Geist Mono" font-size="10">
                <text x="38" y="166" fill="#9e9e9e">Gros œuvre</text>
                <text x="422" y="166" text-anchor="end" fill="#fff">2 800 €</text>
                <line x1="38" y1="174" x2="422" y2="174" stroke="#1f1f1f"/>

                <text x="38" y="194" fill="#9e9e9e">Toiture · couverture</text>
                <text x="422" y="194" text-anchor="end" fill="#fff">1 480 €</text>
                <line x1="38" y1="202" x2="422" y2="202" stroke="#1f1f1f"/>

                <text x="38" y="222" fill="#9e9e9e">Menuiseries extérieures</text>
                <text x="422" y="222" text-anchor="end" fill="#fff">920 €</text>
                <line x1="38" y1="230" x2="422" y2="230" stroke="#1f1f1f"/>

                <text x="38" y="250" fill="#9e9e9e">Installations électriques</text>
                <text x="422" y="250" text-anchor="end" fill="#fff">640 €</text>
                <line x1="38" y1="258" x2="422" y2="258" stroke="#1f1f1f"/>

                <text x="38" y="278" fill="#fff" font-weight="700">Total amortissements</text>
                <text x="422" y="278" text-anchor="end" fill="#A78BFA" font-weight="700">5 840 €</text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <!-- RIGHT — copy block -->
      <div class="rl-feature-copy">
        <div class="rl-feature-meta">
          <span class="rl-feature-cat">SAAS B2C · COMPTABILITÉ FISCALE</span>
          <span class="sep"></span>
          <span class="rl-feature-dur">4 mois MVP · évolutions continues</span>
        </div>

        <h2 class="rl-feature-title" id="etude-phare-title">
          <span class="rl-line">De l'idée</span>
          <span class="rl-line">à <span class="grad-accent">5 400 clients payants</span></span>
          <span class="rl-line">en 12 mois.</span>
        </h2>

        <p class="rl-feature-lead">
          <b>Le défi.</b> Démocratiser la compta LMNP au réel — un domaine dominé par
          des cabinets à 800-1 500 €/an. Construire un SaaS B2C autonome, conforme DGFiP,
          4 à 6× moins cher, sans sacrifier la rigueur fiscale.
        </p>
        <p class="rl-feature-lead">
          <b>Notre rôle.</b> Cadrage produit + IA, architecture Laravel/Livewire, moteur
          d'amortissements par composants, intégration EDI-TDFC à la DGFiP, assistant
          Claude Sonnet 4.5 contextuel. <b>4 mois entre la signature et le MVP en prod.</b>
        </p>

        <div class="rl-feature-stats">
          <div class="rl-fstat">
            <div class="rl-fstat-n">5,4 k</div>
            <div class="rl-fstat-l">clients payants en 2025</div>
          </div>
          <div class="rl-fstat">
            <div class="rl-fstat-n">163</div>
            <div class="rl-fstat-l">guides fiscaux rédigés</div>
          </div>
          <div class="rl-fstat">
            <div class="rl-fstat-n">15 min</div>
            <div class="rl-fstat-l">de compta par an, médiane utilisateur</div>
          </div>
        </div>

        <div class="rl-feature-cta">
          <a href="/realisations/lmnp-ai" class="btn btn-accent btn-lg">
            Lire l'étude complète
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="https://lmnp.ai" target="_blank" rel="noopener noreferrer" class="rl-feature-link">
            Voir le site live
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================================
     5. LOGO WALL  (clients & marques)
     ======================================================================== -->
<section class="rl-logos" id="marques">
  <div class="rl-logos-bg"></div>
  <div class="wrap">
    <div class="rl-logos-head reveal">
      <div class="eyebrow">— Ils nous ont confié leur projet</div>
      <h2 class="rl-logos-title">
        18 marques nous confient<br>
        leur produit numérique.
      </h2>
      <p class="rl-logos-sub">
        Studio jeune, sélectif sur les projets pris en charge. Chaque marque ci-dessous
        bénéficie d'un dev senior référent, d'un binôme de secours et d'un canal Slack direct.
      </p>
    </div>

    <div class="rl-logo-grid reveal">
      <!-- Row 1 -->
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>LMNP</b>.AI</span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>SCI</b>-AI<span class="rl-logo-dim">.app</span></span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono">◆ <b>HAGNÉRÉ</b><br><span class="rl-logo-sub">PATRIMOINE</span></span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono">◆ <b>HAGNÉRÉ</b><br><span class="rl-logo-sub">INVESTISSEMENT</span></span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono">CABINET<br><b>DURAND &amp; ASSOCIÉS</b></span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>NOVA</b>—LOGISTIQUE</span>
      </div>
      <!-- Row 2 -->
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>ALTIORE</b><br><span class="rl-logo-sub">FAMILY OFFICE</span></span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>RH</b>—FACTORY</span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>SAVOIE</b> NOTAIRES</span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>OUTDOOR</b><br><span class="rl-logo-sub">COLLECTIVE</span></span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>FONCIA</b>—LOCAL</span>
      </div>
      <div class="rl-logo">
        <span class="rl-logo-mono"><b>AGRO</b>—MARKET</span>
      </div>
    </div>

    <!-- Trust strip below the logos -->
    <div class="rl-logos-strip reveal">
      <div class="rl-strip-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 12l2 2 4-4M21 12c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4 9 4z"/></svg>
        <span><b>Hébergement FR</b> · OVHcloud Roubaix &amp; Strasbourg</span>
      </div>
      <span class="rl-strip-sep"></span>
      <div class="rl-strip-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        <span><b>RGPD natif</b> · CGU/CGV, registre, DPA livrés</span>
      </div>
      <span class="rl-strip-sep"></span>
      <div class="rl-strip-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        <span><b>Sprint Fixe™</b> · forfait fixe contractuel</span>
      </div>
      <span class="rl-strip-sep"></span>
      <div class="rl-strip-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        <span><b>Care 24/48 h</b> · SLA inclus, support FR</span>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================================
     6. MID-PAGE TESTIMONIALS  (3 quotes — featured + 2 secondary)
     ======================================================================== -->
<section class="rl-quotes" id="temoignages">
  <div class="rl-quotes-radial"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Ce qu'en disent les clients</div>
        <h2>Trois retours bruts<br>après livraison.</h2>
      </div>
      <div class="right">
        Pas des extraits choisis : passages bruts d'emails post-livraison ou de retros.
        Si vous voulez les contacter pour en discuter — <b>on vous met en relation</b>,
        avec leur accord.
      </div>
    </div>

    <div class="rl-quotes-grid reveal">

      <!-- Featured (large) — Hagnéré Patrimoine -->
      <figure class="rl-quote rl-quote-featured">
        <svg class="rl-quote-mark" width="42" height="36" viewBox="0 0 48 40" fill="currentColor" aria-hidden="true">
          <path d="M14 0v12H8c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14zM34 0v12h-6c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14z" opacity="0.25"/>
        </svg>
        <blockquote>
          Le site nous a repositionné en haut de gamme et a débloqué un flux de prospects
          qualifiés qu'on n'avait <em>jamais eu</em> en 8 ans d'activité. Les commerciaux
          passent enfin leur temps avec des prospects qui ont vraiment un projet.
        </blockquote>
        <figcaption class="rl-quote-foot">
          <div class="rl-quote-av rl-quote-av-hp">HP</div>
          <div class="rl-quote-meta">
            <div class="rl-quote-name">Direction</div>
            <div class="rl-quote-role">Cabinet Hagnéré Patrimoine · CIF · ORIAS</div>
          </div>
          <div class="rl-quote-context">
            <span class="rl-quote-tag">PROJET 28 K€</span>
            <span class="rl-quote-meta-sub">Site vitrine premium · livré sem. 6 sur 6</span>
          </div>
        </figcaption>
      </figure>

      <!-- Secondary 1 — Hagnéré Investissement -->
      <figure class="rl-quote">
        <svg class="rl-quote-mark" width="32" height="28" viewBox="0 0 48 40" fill="currentColor" aria-hidden="true">
          <path d="M14 0v12H8c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14zM34 0v12h-6c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14z" opacity="0.25"/>
        </svg>
        <blockquote>
          Le simulateur de rendement à lui seul a doublé le volume de leads qualifiés
          dès le premier mois. <em>Le ROI a été atteint en 7 semaines.</em>
        </blockquote>
        <figcaption class="rl-quote-foot">
          <div class="rl-quote-av rl-quote-av-hi">HI</div>
          <div class="rl-quote-meta">
            <div class="rl-quote-name">Direction</div>
            <div class="rl-quote-role">Hagnéré Investissement</div>
          </div>
          <div class="rl-quote-context">
            <span class="rl-quote-tag">PROJET 38 K€</span>
            <span class="rl-quote-meta-sub">Vitrine + simulateur · sem. 8/8</span>
          </div>
        </figcaption>
      </figure>

      <!-- Secondary 2 — Cabinet patrimoine SaaS comptabilité -->
      <figure class="rl-quote">
        <svg class="rl-quote-mark" width="32" height="28" viewBox="0 0 48 40" fill="currentColor" aria-hidden="true">
          <path d="M14 0v12H8c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14zM34 0v12h-6c0 4 2 6 6 6v10c-8-1-14-5-14-16V0h14z" opacity="0.25"/>
        </svg>
        <blockquote>
          La lagniappe annoncée semaine 3 — un export FEC pour notre cabinet — pas demandée,
          pas facturée, livrée. Plus rentable que la moitié des features qu'on avait spécifiées.
        </blockquote>
        <figcaption class="rl-quote-foot">
          <div class="rl-quote-av rl-quote-av-cg">CG</div>
          <div class="rl-quote-meta">
            <div class="rl-quote-name">Camille G.</div>
            <div class="rl-quote-role">CFO · Cabinet patrimoine 25 salariés</div>
          </div>
          <div class="rl-quote-context">
            <span class="rl-quote-tag">PROJET 24 K€</span>
            <span class="rl-quote-meta-sub">SaaS comptabilité · NPS +95</span>
          </div>
        </figcaption>
      </figure>

    </div>

    <div class="rl-quotes-cta reveal">
      <span>19 répondants sur 23 · NPS moyen <b>+74/100</b> · médiane <b>+80</b>.</span>
      <a href="/#contact" class="btn btn-ghost btn-on-dark">
        Demander une mise en relation
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- ========================================================================
     7. SECTOR / EXPERTISE DISCOVERY GRID  (8 tiles)
     ======================================================================== -->
<section class="rl-sectors" id="expertises">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Nos expertises</div>
        <h2>Huit familles de projets<br>dans nos cordes.</h2>
      </div>
      <div class="right">
        On n'a pas (encore) une étude de cas pour chaque expertise. Voici ce qu'on
        sait construire — avec des références internes, des piliers techniques solides
        et un livrable contractuel.
      </div>
    </div>

    <div class="rl-sector-grid reveal">

      <a href="/services/saas-applications-metier" class="rl-sector">
        <div class="rl-sector-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
        </div>
        <div class="rl-sector-meta">
          <h3>SaaS B2B / B2C</h3>
          <p>Plateformes métier, espaces clients, multi-tenant.</p>
        </div>
        <div class="rl-sector-stats">
          <span class="rl-sector-count">2 cas</span>
          <svg class="rl-sector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>

      <a href="/services/sites-vitrines" class="rl-sector">
        <div class="rl-sector-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg>
        </div>
        <div class="rl-sector-meta">
          <h3>Sites vitrines premium</h3>
          <p>Refontes haut de gamme, qui convertissent.</p>
        </div>
        <div class="rl-sector-stats">
          <span class="rl-sector-count">2 cas</span>
          <svg class="rl-sector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>

      <a href="/services/outils-internes-sur-mesure" class="rl-sector">
        <div class="rl-sector-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3v18h18M7 14l3-3 4 4 5-5"/></svg>
        </div>
        <div class="rl-sector-meta">
          <h3>Outils internes</h3>
          <p>Back-office, workflows, automatisations métier.</p>
        </div>
        <div class="rl-sector-stats">
          <span class="rl-sector-count">5 projets internes</span>
          <svg class="rl-sector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>

      <a href="/services/ecommerce" class="rl-sector">
        <div class="rl-sector-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
        </div>
        <div class="rl-sector-meta">
          <h3>E-commerce</h3>
          <p>Boutiques haut de gamme, Shopify Plus, custom.</p>
        </div>
        <div class="rl-sector-stats">
          <span class="rl-sector-count">3 projets</span>
          <svg class="rl-sector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>

      <a href="/services/referencement-google" class="rl-sector">
        <div class="rl-sector-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </div>
        <div class="rl-sector-meta">
          <h3>SEO &amp; référencement</h3>
          <p>Pages piliers, longue traîne, netlinking, technique.</p>
        </div>
        <div class="rl-sector-stats">
          <span class="rl-sector-count">2 cas avec courbe</span>
          <svg class="rl-sector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>

      <a href="/services/publicite-en-ligne" class="rl-sector">
        <div class="rl-sector-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg>
        </div>
        <div class="rl-sector-meta">
          <h3>Publicité en ligne</h3>
          <p>Google Ads, Meta, LinkedIn — funnels segmentés.</p>
        </div>
        <div class="rl-sector-stats">
          <span class="rl-sector-count">CPA &lt; 80 € moyen</span>
          <svg class="rl-sector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>

      <a href="/services/maintenance-evolution" class="rl-sector">
        <div class="rl-sector-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        </div>
        <div class="rl-sector-meta">
          <h3>Maintenance &amp; évolution</h3>
          <p>Forfait Care, support 24/48 h, évolutions continues.</p>
        </div>
        <div class="rl-sector-stats">
          <span class="rl-sector-count">14 clients actifs</span>
          <svg class="rl-sector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>

      <a href="/services/securite-rgpd" class="rl-sector">
        <div class="rl-sector-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div class="rl-sector-meta">
          <h3>Sécurité &amp; RGPD</h3>
          <p>Audit OWASP, conformité, hébergement FR.</p>
        </div>
        <div class="rl-sector-stats">
          <span class="rl-sector-count">100 % livrés conformes</span>
          <svg class="rl-sector-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>

    </div>
  </div>
</section>

<!-- ========================================================================
     8. MÉTHODE STRIP  (Sprint Fixe™ — link to /methode)
     ======================================================================== -->
<section class="rl-method" id="methode-strip">
  <div class="wrap">
    <div class="rl-method-card reveal">
      <div class="rl-method-bg-grid"></div>
      <div class="rl-method-bg-radial"></div>

      <div class="rl-method-left">
        <div class="rl-method-tag">
          <span class="dot"></span>POURQUOI ÇA TIENT
        </div>
        <h2 class="rl-method-title">
          <span class="rl-line">23 projets livrés.</span>
          <span class="grad-accent">Une seule méthode.</span>
        </h2>
        <p class="rl-method-lead">
          Tous les chiffres présentés au-dessus sont la conséquence directe de notre méthode
          <b>Sprint Fixe™</b> — quatre clauses contractuelles qui rendent impossible un projet
          qui dérape.
        </p>
        <div class="rl-method-cta">
          <a href="/methode" class="btn btn-accent btn-lg">
            Lire la méthode complète
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <span class="rl-method-cta-sub">8 pages · contrat-type téléchargeable</span>
        </div>
      </div>

      <div class="rl-method-right">
        <div class="rl-pillar">
          <div class="rl-pillar-num">01</div>
          <div class="rl-pillar-body">
            <h4>Forfait fixe contractuel</h4>
            <p>Le devis vaut engagement. Aucun dépassement caché possible.</p>
          </div>
        </div>
        <div class="rl-pillar">
          <div class="rl-pillar-num">02</div>
          <div class="rl-pillar-body">
            <h4>Démo client chaque vendredi 16 h</h4>
            <p>Vous corrigez la trajectoire avant que ce soit coûteux.</p>
          </div>
        </div>
        <div class="rl-pillar">
          <div class="rl-pillar-num">03</div>
          <div class="rl-pillar-body">
            <h4>Code &amp; données chez vous, J+1</h4>
            <p>Repo Git sur votre compte. Aucun lock-in technique.</p>
          </div>
        </div>
        <div class="rl-pillar">
          <div class="rl-pillar-num">04</div>
          <div class="rl-pillar-body">
            <h4>Pénalité de retard contractuelle</h4>
            <p>Au-delà de 14 j de retard, 7 % du forfait offerts par semaine.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================================
     9. FAQ CONTRE-OBJECTIONS  (rassurance avant CTA finale)
     ======================================================================== -->
<section class="rl-faq" id="faq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— FAQ contre-objections</div>
        <h2>Avant de prendre RDV,<br>les 7 questions <span class="grad-accent">qu'on entend</span><br>le plus souvent.</h2>
      </div>
      <div class="right">
        Réponses fermes et chiffrées. Si la vôtre n'est pas listée, posez-la directement
        en RDV — on répond toujours, même quand la réponse honnête c'est <em>« on n'est pas la
        bonne équipe pour ça »</em>.
      </div>
    </div>

    <div class="rl-faq-list reveal">
      <div class="faq-item">
        <div class="faq-q">
          <span>Est-ce que vous avez livré un projet dans mon secteur ?</span>
          <svg class="faq-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">
            <p>
              Probablement pas <em>exactement</em>. On a 4 études en vitrine (SaaS B2C compta
              immobilière, sites vitrines premium en gestion de patrimoine) mais 23 projets
              livrés au total dans l'écosystème immobilier, fiscal, RH, logistique et marketplace.
              En cadrage, on vous dit honnêtement si on a déjà manipulé votre métier ou si
              on doit monter en compétence — et combien de jours ça représente.
            </p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <span>Quel est le budget moyen d'un projet comme ceux présentés ?</span>
          <svg class="faq-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">
            <p>
              Les fourchettes typiques : <b>site vitrine premium 10-25 k€ HT</b> (3-6 semaines),
              <b>outil interne complet 20-40 k€ HT</b> (5-7 semaines), <b>MVP SaaS B2C/B2B
              30-60 k€ HT</b> (8-12 semaines). Le Discovery Sprint à 1 500 € HT est obligatoire
              pour tout projet supérieur à 8 k€ — il transforme la fourchette en devis ferme.
            </p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <span>Que se passe-t-il si vous dépassez les délais ?</span>
          <svg class="faq-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">
            <p>
              Tolérance de 14 jours calendaires sur la date contractuelle. Au-delà, vous bénéficiez
              d'un avoir hebdomadaire de <b>7 % du forfait</b> déductible du solde dû. C'est dans
              le contrat type, public et téléchargeable. Depuis 2024 (lancement de la méthode
              Sprint Fixe™), <b>0 € de pénalité versée sur 23 projets</b>.
            </p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <span>Qui est propriétaire du code livré ?</span>
          <svg class="faq-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">
            <p>
              Vous, à 100 %, dès le premier paiement. Le repo Git est créé sur votre organisation
              GitHub <b>dès J+1</b>. L'hébergement est à votre nom. Documentation, runbook ops,
              schéma archi sont remis à la livraison. Si demain vous arrêtez avec nous, n'importe
              quelle équipe Laravel reprend votre projet en moins de 5 jours.
            </p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <span>Et si je veux contacter un de vos clients référence avant de signer ?</span>
          <svg class="faq-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">
            <p>
              On vous met en relation sous 48 h ouvrées, avec leur accord. Vous pouvez choisir
              le profil (CFO, CEO, CMO), le secteur ou le type de projet (SaaS / vitrine /
              outil interne). On vous propose aussi d'<b>assister en spectateur à une démo
              client en direct</b> — c'est la meilleure façon de voir Sprint Fixe™ en action
              avant de signer.
            </p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <span>Vous codez sur quelle stack ? Et si on a déjà un existant en .NET / Node / Python ?</span>
          <svg class="faq-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">
            <p>
              Stack par défaut : <b>Laravel 13 + Livewire / React + PostgreSQL / MySQL +
              Tailwind v4</b>. Si vous avez un existant en .NET / Node / Python qu'on devrait
              étendre, on vous le dit honnêtement : on n'est pas la bonne équipe et on vous
              oriente vers des confrères. En revanche, ré-écrire from scratch ou ajouter
              un outil nouveau à côté de votre existant, Laravel marche très bien — vos deux
              outils communiquent par API.
            </p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <span>Combien de projets gérez-vous en parallèle ? Est-ce que je vais tomber sur un dev junior ?</span>
          <svg class="faq-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div class="faq-a">
          <div class="faq-a-inner">
            <p>
              <b>3 projets actifs maximum</b> sur l'équipe tech, soit 1 par binôme. C'est ce qui
              nous permet de tenir les démos vendredi sans context switching destructeur. Chaque
              projet a un <b>dev senior référent</b> + un binôme de secours (bus factor de 2).
              <b>Aucun junior en autonomie.</b> Si on est en flux tendu, on vous le dit en cadrage
              et on propose une date de démarrage décalée.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
