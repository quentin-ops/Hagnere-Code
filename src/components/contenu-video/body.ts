export const bodyHtml = `
<!-- NAV -->
<nav class="nav">
  <div class="nav-inner">
    <a href="/" class="brand">
      <div class="brand-mark">HC</div>
      <div class="brand-name"><b>Hagnéré</b> <span>Code</span></div>
    </a>
    <div class="nav-links">
      <div class="nav-item">
        <a href="/#services" class="nav-trigger active">Services
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dd">
          <div class="dd-col">
            <h6>Construire</h6>
            <a class="dd-link" href="/services/saas-applications-metier">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
              <div class="dd-meta"><div class="dd-title">SaaS &amp; applis métier</div><div class="dd-sub">Plateformes B2B, espaces clients.</div></div>
            </a>
            <a class="dd-link" href="/services/outils-internes-sur-mesure">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18M7 14l3-3 4 4 5-5"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Outils internes sur mesure</div><div class="dd-sub">Back-office, workflows, automatisations.</div></div>
            </a>
            <a class="dd-link" href="/services/sites-vitrines">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Sites vitrines &amp; landings</div><div class="dd-sub">Sites qui convertissent, pas qui informent.</div></div>
            </a>
            <a class="dd-link" href="/services/ecommerce">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></div>
              <div class="dd-meta"><div class="dd-title">E-commerce</div><div class="dd-sub">Boutiques haut de gamme sur mesure.</div></div>
            </a>
          </div>
          <div class="dd-col">
            <h6>Faire grandir</h6>
            <a class="dd-link" href="/services/referencement-google">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
              <div class="dd-meta"><div class="dd-title">SEO &amp; référencement</div><div class="dd-sub">Contenu, tech, netlinking.</div></div>
            </a>
            <a class="dd-link" href="/services/publicite-en-ligne">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Publicité en ligne</div><div class="dd-sub">Google Ads, Meta, LinkedIn.</div></div>
            </a>
            <a class="dd-link" href="/services/contenu-video">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Contenu &amp; vidéo</div><div class="dd-sub">Studio interne, motion, YouTube, IA.</div></div>
            </a>
          </div>
          <div class="dd-col">
            <h6>Protéger &amp; opérer</h6>
            <a class="dd-link" href="/services/maintenance-evolution">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Maintenance &amp; évolution</div><div class="dd-sub">Forfait mensuel, support prioritaire.</div></div>
            </a>
            <a class="dd-link" href="/services/securite-rgpd">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Sécurité &amp; RGPD</div><div class="dd-sub">Audit, conformité, hébergement FR.</div></div>
            </a>
            <a class="dd-link" href="/services/audit-technique">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg></div>
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
      <a href="/realisations">Réalisations</a>
      <a href="/equipe">Équipe</a>
      <a href="/tarifs">Tarifs</a>
      <a href="/contact">Contact</a>
    </div>
    <div class="nav-cta">
      <a href="/#contact" class="btn btn-ghost">Prendre RDV</a>
      <a href="/demarrer-un-projet" class="btn btn-primary">Démarrer un projet
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</nav>

<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <a href="/#services">Services</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">Contenu &amp; vidéo</span>
  </div>
</div>

<!-- HERO -->
<section class="shero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow"><span class="pill"><span class="dot"></span> Service · Studio contenu &amp; vidéo</span></div>
      <h1>Deux monteurs seniors.<br><span class="accent">Un pipeline IA.</span></h1>
      <div class="shero-tagline">
        <span>2 monteurs Adobe Premiere Pro</span>
        <span class="sep"></span>
        <span>IA en accélérateur, pas en remplacement</span>
        <span class="sep"></span>
        <span>Forfait mensuel affiché</span>
      </div>
      <p class="shero-sub">
        <b>Deux monteurs Adobe Premiere Pro seniors</b>, augmentés par un pipeline IA audité. On livre vos
        <b>ads payantes Meta &amp; Google</b>, vos <b>vidéos YouTube</b>, votre <b>motion produit</b> et vos <b>contenus marketing</b>.
        Soit vous tournez (on monte + on amplifie), soit on s'occupe de tout — scripts Claude,
        voix au choix (la vôtre enregistrée, clone ElevenLabs, ou un comédien humain). <b>L'humain reste aux manettes.</b>
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Parler à l'équipe · 30 min <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="/realisations" class="btn btn-ghost btn-lg">Voir un projet</a>
      </div>
      <div class="shero-badges">
        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">2<span class="shero-badge-key-unit">·senior</span></div>
            <div class="shero-badge-label">Monteurs Adobe Premiere Pro</div>
          </div>
        </div>

        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">3<span class="shero-badge-key-unit">×</span></div>
            <div class="shero-badge-label">Plus vite grâce à l'IA assistée</div>
          </div>
        </div>

        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M3 10h18M7 14h4"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">€<span class="shero-badge-pulse"></span></div>
            <div class="shero-badge-label">Forfait mensuel transparent</div>
          </div>
        </div>
      </div>
    </div>

    <!-- VISUAL: editor + thumbnails + AI pipeline -->
    <div class="shero-visual cv-stage">
      <div class="cv-stage-bg" aria-hidden="true"></div>
      <div class="cv-stage-grid" aria-hidden="true"></div>

      <!-- Main video editor window -->
      <div class="cv-editor">
        <div class="cv-editor-chrome">
          <div class="cv-editor-chrome-l">
            <span class="cv-editor-traffic"></span>
            <span class="cv-editor-traffic"></span>
            <span class="cv-editor-traffic"></span>
          </div>
          <div class="cv-editor-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <span>æther-reveal · v24</span>
            <span class="cv-editor-badge">REC</span>
          </div>
          <div class="cv-editor-chrome-r">
            <span class="cv-editor-time">00:28:14</span>
          </div>
        </div>

        <!-- Preview area -->
        <div class="cv-editor-preview">
          <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="display:block;width:100%;height:100%">
            <defs>
              <linearGradient id="cvHeroBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#1a1410"/>
                <stop offset="50%" stop-color="#0A0A0A"/>
                <stop offset="100%" stop-color="#171411"/>
              </linearGradient>
              <linearGradient id="cvGold" x1="0.3" y1="0" x2="0.7" y2="1">
                <stop offset="0%" stop-color="#D4A574"/>
                <stop offset="100%" stop-color="#8A5F2E"/>
              </linearGradient>
              <radialGradient id="cvGlow" cx="0.5" cy="0.5" r="0.6">
                <stop offset="0%" stop-color="rgba(212,165,116,0.45)"/>
                <stop offset="100%" stop-color="rgba(212,165,116,0)"/>
              </radialGradient>
            </defs>
            <rect width="480" height="270" fill="url(#cvHeroBg)"/>
            <ellipse cx="240" cy="180" rx="180" ry="80" fill="url(#cvGlow)" opacity="0.7"/>

            <!-- Editorial caption -->
            <text x="40" y="48" font-family="Geist Mono" font-size="10" fill="#8A5F2E" letter-spacing="0.24em">SCENE 03 · HERO PRODUCT</text>

            <!-- Main title -->
            <text x="40" y="100" font-family="Geist" font-weight="500" font-size="32" fill="#F7F3EE" letter-spacing="-0.03em">Un parfum</text>
            <text x="40" y="134" font-family="Geist" font-weight="500" font-size="32" font-style="italic" fill="#F7F3EE" letter-spacing="-0.03em">qui se porte la nuit.</text>

            <!-- Bottle -->
            <g transform="translate(340 80)">
              <ellipse cx="40" cy="160" rx="44" ry="4" fill="#000" opacity="0.35"/>
              <rect x="30" y="16" width="20" height="18" rx="1.5" fill="url(#cvGold)"/>
              <rect x="26" y="0" width="28" height="14" rx="1" fill="#0A0A0A"/>
              <path d="M8 40 Q8 36 14 36 L66 36 Q72 36 72 40 L72 156 Q72 160 66 160 L14 160 Q8 160 8 156 Z" fill="url(#cvGold)"/>
              <rect x="18" y="72" width="44" height="48" fill="rgba(10,10,10,0.85)"/>
              <text x="40" y="88" text-anchor="middle" font-family="Geist Mono" font-size="5.5" fill="#D4A574" letter-spacing="0.22em">ÆTHER</text>
              <line x1="26" y1="94" x2="54" y2="94" stroke="#D4A574" stroke-width="0.6"/>
              <text x="40" y="108" text-anchor="middle" font-family="Geist" font-size="10" font-style="italic" fill="#F7F3EE">Nuit</text>
              <text x="40" y="118" text-anchor="middle" font-family="Geist Mono" font-size="4" fill="rgba(247,243,238,0.6)" letter-spacing="0.16em">30 ML · EXTRAIT</text>
            </g>

            <!-- Bottom scrub bar / TC -->
            <rect x="40" y="220" width="400" height="2" rx="1" fill="rgba(255,255,255,0.08)"/>
            <rect x="40" y="220" width="168" height="2" rx="1" fill="#D4A574"/>
            <circle cx="208" cy="221" r="3.5" fill="#D4A574"/>

            <text x="40" y="242" font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.4)">00:28:14 / 01:04:02</text>
            <text x="440" y="242" text-anchor="end" font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.4)">4K · ProRes HQ</text>
          </svg>

          <!-- Overlay play button -->
          <div class="cv-editor-play" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          </div>
        </div>

        <!-- Timeline -->
        <div class="cv-editor-timeline">
          <div class="cv-track cv-track-video">
            <span class="cv-clip cv-clip-a" style="width:22%"></span>
            <span class="cv-clip cv-clip-b" style="width:38%"></span>
            <span class="cv-clip cv-clip-a" style="width:28%"></span>
            <span class="cv-clip cv-clip-c" style="width:12%"></span>
          </div>
          <div class="cv-track cv-track-audio">
            <span class="cv-clip cv-clip-audio" style="width:70%"></span>
            <span class="cv-clip cv-clip-audio-2" style="width:30%"></span>
          </div>
          <div class="cv-playhead" aria-hidden="true"></div>
        </div>
      </div>

      <!-- Floating AI pipeline card -->
      <div class="cv-ai-card">
        <div class="cv-ai-head">
          <span class="cv-ai-dot"></span>
          <span class="cv-ai-label">PIPELINE IA · EN COURS</span>
        </div>
        <div class="cv-ai-rows">
          <div class="cv-ai-row">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
            <span>Script Claude · 4 angles</span>
          </div>
          <div class="cv-ai-row">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
            <span>B-roll Runway Gen-4</span>
          </div>
          <div class="cv-ai-row cv-ai-row-active">
            <span class="cv-ai-spinner"></span>
            <span>Voix ElevenLabs v3 · FR / EN</span>
          </div>
          <div class="cv-ai-row cv-ai-row-pending">
            <span class="cv-ai-dot-pending"></span>
            <span>Shorts Opus Clip · 12 formats</span>
          </div>
        </div>
      </div>

      <!-- Floating vertical short thumbnail -->
      <div class="cv-short">
        <div class="cv-short-inner">
          <div class="cv-short-badge">SHORT · 00:24</div>
          <svg viewBox="0 0 120 213" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cvShortBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#6D28D9"/>
                <stop offset="60%" stop-color="#3B0F77"/>
                <stop offset="100%" stop-color="#0A0A0A"/>
              </linearGradient>
            </defs>
            <rect width="120" height="213" fill="url(#cvShortBg)"/>
            <circle cx="60" cy="100" r="30" fill="rgba(255,255,255,0.1)"/>
            <circle cx="60" cy="100" r="18" fill="rgba(255,255,255,0.2)"/>
            <polygon points="54 90 72 100 54 110" fill="#fff"/>
            <text x="14" y="180" font-family="Geist" font-weight="600" font-size="12" fill="#fff">Ce soir -30%</text>
            <text x="14" y="194" font-family="Geist Mono" font-size="7" fill="rgba(255,255,255,0.7)" letter-spacing="0.1em">NUIT · ÉDITION LIMITÉE</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA (sera strippé par stripFinalCta, remplacé par SiteFooter) -->
<section class="scta" id="contact">
  <div class="scta-bg"></div>
  <div class="wrap inner">
    <div class="eyebrow on-dark">— Prochaine étape</div>
    <h2 style="margin-top:14px">Parlons de votre contenu.<br><span class="accent">30 minutes, c'est tout.</span></h2>
    <p>Un call de cadrage gratuit avec un réal + un associé. On regarde vos besoins, votre audience, votre cadence, on sort une fourchette le soir même.</p>
  </div>
</section>

<!-- FOOTER (sera strippé par stripFooter, remplacé par SiteFooter) -->
<footer>
  <div class="wrap"></div>
</footer>
`;
