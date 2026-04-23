export const founderVideoHtml = `
<!-- FOUNDER VIDEO · message 60-90s pour décideur non-tech -->
<section class="me-founder-video" id="founder-video">
  <div class="wrap">
    <div class="at-fv-grid reveal">
      <!-- Video thumbnail -->
      <div class="at-fv-player">
        <button type="button" class="at-fv-play hero-video" data-loom-url="placeholder" aria-label="Lire le message du fondateur">
          <div class="at-fv-thumb">
            <svg viewBox="0 0 400 240" class="at-fv-thumb-svg" aria-hidden="true">
              <defs>
                <linearGradient id="at-fv-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1a1030"/>
                  <stop offset="50%" stop-color="#0a0a0a"/>
                  <stop offset="100%" stop-color="#1a1030"/>
                </linearGradient>
                <linearGradient id="at-fv-avatar" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#6D28D9"/>
                  <stop offset="100%" stop-color="#A78BFA"/>
                </linearGradient>
                <radialGradient id="at-fv-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(167,139,250,0.3)"/>
                  <stop offset="100%" stop-color="rgba(167,139,250,0)"/>
                </radialGradient>
              </defs>
              <rect width="400" height="240" fill="url(#at-fv-bg)"/>
              <!-- subtle grid -->
              <g opacity="0.08" stroke="#fff" stroke-width="0.5">
                <line x1="0" y1="60" x2="400" y2="60"/>
                <line x1="0" y1="120" x2="400" y2="120"/>
                <line x1="0" y1="180" x2="400" y2="180"/>
                <line x1="100" y1="0" x2="100" y2="240"/>
                <line x1="200" y1="0" x2="200" y2="240"/>
                <line x1="300" y1="0" x2="300" y2="240"/>
              </g>
              <!-- glow behind avatar -->
              <circle cx="200" cy="110" r="120" fill="url(#at-fv-glow)"/>
              <!-- avatar placeholder -->
              <circle cx="200" cy="110" r="52" fill="url(#at-fv-avatar)"/>
              <text x="200" y="122" text-anchor="middle" font-family="Geist" font-weight="600" font-size="32" fill="#fff">QH</text>
              <!-- caption at bottom -->
              <rect x="20" y="196" width="120" height="26" rx="13" fill="rgba(0,0,0,0.7)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
              <text x="34" y="212" font-family="Geist" font-size="11" fill="#fff" font-weight="500">Quentin Hagnéré</text>
              <rect x="330" y="198" width="52" height="22" rx="4" fill="rgba(239,68,68,0.9)"/>
              <text x="356" y="213" text-anchor="middle" font-family="Geist Mono" font-size="10" font-weight="700" fill="#fff">● LIVE</text>
            </svg>
          </div>
          <div class="at-fv-play-btn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><polygon points="8 5 19 12 8 19 8 5"/></svg>
          </div>
          <div class="at-fv-duration">1 min 22 s</div>
        </button>
      </div>

      <!-- Body -->
      <div class="at-fv-body">
        <div class="eyebrow">— Message du fondateur</div>
        <h2>« Pourquoi on fait de la TMA<br>alors que c'est moins rentable<br>qu'un nouveau projet. »</h2>
        <p>Une minute et demie avec Quentin Hagnéré pour répondre à la question qu'on entend le plus en call&nbsp;:
        pourquoi une agence qui sait construire des SaaS de zéro a choisi de faire de la maintenance long-terme
        son cœur de métier. <b>Ce qui nous motive, ce qui nous gonfle, et pourquoi nos clients restent 4 ans en moyenne.</b></p>

        <div class="at-fv-meta">
          <div class="at-fv-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span><b>1 min 22 s</b> · sans script</span>
          </div>
          <div class="at-fv-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            <span>Sous-titres FR · accessibilité WCAG</span>
          </div>
          <div class="at-fv-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            <span>Hébergé sur Loom · pas de tracking tiers</span>
          </div>
        </div>

        <a href="#contact" class="btn btn-ghost btn-lg at-fv-cta">
          Pas le temps de regarder&nbsp;? Réservez 20 min direct
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>
`;
