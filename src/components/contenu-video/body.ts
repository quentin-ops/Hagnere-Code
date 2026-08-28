export const bodyHtml = `
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <a href="/services">Services</a>
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
      <div class="shero-eyebrow"><span class="pill"><span class="dot"></span> Service · Contenu &amp; vidéo sur mesure</span></div>
      <h1>Contenu vidéo :<br>un pilotage produit,<br><span class="accent">des intervenants identifiés.</span></h1>
      <div class="shero-tagline">
        <span>Équipe nommée au devis</span>
        <span class="sep"></span>
        <span>IA en accélérateur, pas en remplacement</span>
        <span class="sep"></span>
        <span>Forfait mensuel affiché</span>
      </div>
      <p class="shero-sub">
        Hagnéré Code cadre le besoin, les formats, les droits et la diffusion. Si le projet requiert du
        montage, du motion ou un tournage spécialisé, <b>chaque intervenant est nommé dans la proposition</b>
        avec son statut interne ou externe. Les outils IA éventuels restent assistés, déclarés et soumis
        aux consentements nécessaires&nbsp;: <b>aucune équipe vidéo permanente ni studio équipé n'est inventé ici.</b>
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
            <div class="shero-badge-key">NOM<span class="shero-badge-key-unit">·mé</span></div>
            <div class="shero-badge-label">Intervenants identifiés au devis</div>
          </div>
        </div>

        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">IA<span class="shero-badge-key-unit">·assistée</span></div>
            <div class="shero-badge-label">Aucun gain chiffré sans mesure</div>
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

          <!-- Étiquetage obligatoire de la maquette (règle d'or : zéro invention) -->
          <div class="cv-editor-flag">MAQUETTE · MARQUE FICTIVE</div>

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
`;
