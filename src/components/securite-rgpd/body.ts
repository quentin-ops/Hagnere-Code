import { navHtml } from "@/components/design-shared/nav-html";

export const bodyHtml = `
${navHtml}
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <a href="/services">Services</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">Sécurité &amp; RGPD</span>
  </div>
</div>

<!-- HERO · cartographie vivante des sous-traitants -->
<section class="shero sr-shero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow">
        <span class="pill"><span class="dot"></span> Service · Sécurité &amp; RGPD · DPO externalisé</span>
      </div>
      <h1>RGPD : votre stack a<br>47 sous-traitants.<br><span class="accent">Votre DPO en connaît 6.</span></h1>
      <div class="shero-tagline">
        <span>Audit + remédiation codée</span>
        <span class="sep"></span>
        <span>RGPD · AI Act · DORA · NIS2</span>
        <span class="sep"></span>
        <span>Forfait + DPO mensuel</span>
      </div>
      <p class="shero-sub">
        On <b>audite votre exposition réelle</b> (sous-traitants IA, transferts hors UE, registres, AI Act, NIS2),
        puis <b>nos devs corrigent dans votre code</b> — chiffrement, logs, consentement, anonymisation, IAM.
        Pas un cabinet juridique qui pond un PDF de 80 pages. Pas un cabinet cyber qui livre 60 findings sans remédier.
        <b>Un studio qui code et qui audite.</b>
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Auditer mon exposition <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#offre" class="btn btn-ghost btn-lg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/></svg>
          Voir les 4 domaines couverts
        </a>
      </div>
      <div class="shero-badges">
        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="9"/>
              <path d="M12 7v5l3 3"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">2-4<span class="shero-badge-key-unit"> sem.</span></div>
            <div class="shero-badge-label">Cadrage + plan d'action priorisé</div>
          </div>
        </div>

        <div class="shero-badge sr-badge-warn">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">35<span class="shero-badge-key-unit"> M€</span></div>
            <div class="shero-badge-label">Sanction max AI Act · 7 % CA</div>
          </div>
        </div>

        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">DPO<span class="shero-badge-key-unit"> + dev</span></div>
            <div class="shero-badge-label">Une seule équipe, pas trois cabinets</div>
          </div>
        </div>
      </div>
    </div>

    <!-- VISUAL: cartographie des sous-traitants & flux de données -->
    <div class="shero-visual sr-stage">
      <div class="sr-stage-bg" aria-hidden="true"></div>
      <div class="sr-stage-grid" aria-hidden="true"></div>

      <!-- Window chrome wrapping the data-flow map -->
      <div class="sr-map">
        <div class="sr-map-chrome">
          <div class="sr-map-chrome-l">
            <span class="sr-map-traffic"></span>
            <span class="sr-map-traffic"></span>
            <span class="sr-map-traffic"></span>
          </div>
          <div class="sr-map-title">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>
            </svg>
            <span>data-flow.audit · acme-saas.io</span>
            <span class="sr-map-badge">LIVE</span>
          </div>
          <div class="sr-map-chrome-r">
            <span class="sr-map-time">scan #142 · 12s ago</span>
          </div>
        </div>

        <!-- Tab bar (décoratif, non interactif — assistive tech skip) -->
        <div class="sr-map-tabs" aria-hidden="true">
          <span class="sr-map-tab active">Sous-traitants</span>
          <span class="sr-map-tab">Transferts</span>
          <span class="sr-map-tab">DPA</span>
          <span class="sr-map-tab">AI Act</span>
        </div>

        <!-- Map canvas (SVG node-edge graph) -->
        <div class="sr-map-canvas">
          <svg viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%" role="img" aria-label="Exemple illustratif de cartographie des sous-traitants d'une PME tech : 31 conformes (verts), 11 DPA à mettre à jour (orange), 5 transferts hors UE non encadrés (rouges).">
            <defs>
              <linearGradient id="srMapBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#0F0F12"/>
                <stop offset="100%" stop-color="#0A0A0A"/>
              </linearGradient>
              <radialGradient id="srGlow" cx="0.5" cy="0.5" r="0.6">
                <stop offset="0%" stop-color="rgba(109,40,217,0.18)"/>
                <stop offset="100%" stop-color="rgba(109,40,217,0)"/>
              </radialGradient>
              <pattern id="srDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.6" fill="rgba(255,255,255,0.06)"/>
              </pattern>
              <!-- Pulsing animations along edges -->
              <linearGradient id="srEdgeGreen" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="rgba(34,197,94,0.15)"/>
                <stop offset="50%" stop-color="rgba(34,197,94,0.85)"/>
                <stop offset="100%" stop-color="rgba(34,197,94,0.15)"/>
              </linearGradient>
              <linearGradient id="srEdgeOrange" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="rgba(249,115,22,0.15)"/>
                <stop offset="50%" stop-color="rgba(249,115,22,0.85)"/>
                <stop offset="100%" stop-color="rgba(249,115,22,0.15)"/>
              </linearGradient>
              <linearGradient id="srEdgeRed" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="rgba(239,68,68,0.15)"/>
                <stop offset="50%" stop-color="rgba(239,68,68,0.85)"/>
                <stop offset="100%" stop-color="rgba(239,68,68,0.15)"/>
              </linearGradient>
            </defs>

            <rect width="520" height="360" fill="url(#srMapBg)"/>
            <rect width="520" height="360" fill="url(#srDots)"/>
            <ellipse cx="260" cy="180" rx="240" ry="120" fill="url(#srGlow)"/>

            <!-- Region tags -->
            <g font-family="Geist Mono" font-size="8.5" letter-spacing="0.18em">
              <text x="20" y="26" fill="rgba(255,255,255,0.32)">EU · FR</text>
              <text x="500" y="26" text-anchor="end" fill="rgba(255,255,255,0.32)">US</text>
              <text x="20" y="350" fill="rgba(255,255,255,0.32)">EU · DE / IE</text>
            </g>

            <!-- EU/US dashed boundary -->
            <line x1="305" y1="40" x2="305" y2="320" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="3 5"/>
            <text x="312" y="48" font-family="Geist Mono" font-size="7" fill="rgba(255,255,255,0.4)" letter-spacing="0.18em">FRONTIÈRE UE</text>

            <!-- EDGES (drawn first so nodes overlap) -->
            <!-- Central app to nodes -->
            <line x1="180" y1="180" x2="80" y2="100" stroke="url(#srEdgeGreen)" stroke-width="1.5"/>
            <line x1="180" y1="180" x2="80" y2="260" stroke="url(#srEdgeGreen)" stroke-width="1.5"/>
            <line x1="180" y1="180" x2="380" y2="90" stroke="url(#srEdgeRed)" stroke-width="1.8" stroke-dasharray="0">
              <animate attributeName="stroke-dasharray" values="0 360;360 0" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="180" y1="180" x2="430" y2="170" stroke="url(#srEdgeOrange)" stroke-width="1.5"/>
            <line x1="180" y1="180" x2="380" y2="270" stroke="url(#srEdgeOrange)" stroke-width="1.5"/>
            <line x1="180" y1="180" x2="450" y2="280" stroke="url(#srEdgeRed)" stroke-width="1.8">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite"/>
            </line>
            <line x1="180" y1="180" x2="100" y2="320" stroke="url(#srEdgeGreen)" stroke-width="1.5"/>

            <!-- CENTRAL NODE: your app -->
            <g transform="translate(180 180)">
              <circle r="48" fill="rgba(109,40,217,0.08)" stroke="rgba(109,40,217,0.35)" stroke-width="1" stroke-dasharray="2 4"/>
              <circle r="32" fill="#1A0F2E" stroke="#6D28D9" stroke-width="1.2"/>
              <text y="-2" text-anchor="middle" font-family="Geist Mono" font-size="7.5" fill="#A78BFA" letter-spacing="0.16em">VOUS</text>
              <text y="11" text-anchor="middle" font-family="Geist" font-size="11" font-weight="600" fill="#fff">acme-saas.io</text>
            </g>

            <!-- NODE: Hosting FR (green) -->
            <g transform="translate(80 100)">
              <rect x="-48" y="-18" width="96" height="36" rx="8" fill="#0F1A12" stroke="rgba(34,197,94,0.55)" stroke-width="1"/>
              <circle cx="-34" cy="0" r="3.5" fill="#22c55e"/>
              <text x="-26" y="-3" font-family="Geist" font-size="10.5" font-weight="600" fill="#fff">Hosting · FR</text>
              <text x="-26" y="9" font-family="Geist Mono" font-size="7" fill="rgba(255,255,255,0.5)" letter-spacing="0.1em">DPA OK</text>
            </g>

            <!-- NODE: AI EU (green) -->
            <g transform="translate(80 260)">
              <rect x="-50" y="-18" width="100" height="36" rx="8" fill="#0F1A12" stroke="rgba(34,197,94,0.55)" stroke-width="1"/>
              <circle cx="-36" cy="0" r="3.5" fill="#22c55e"/>
              <text x="-28" y="-3" font-family="Geist" font-size="10.5" font-weight="600" fill="#fff">AI Model · EU</text>
              <text x="-28" y="9" font-family="Geist Mono" font-size="7" fill="rgba(255,255,255,0.5)" letter-spacing="0.1em">DPA OK</text>
            </g>

            <!-- NODE: AI provider US (red, transfert non encadré) -->
            <g transform="translate(380 90)">
              <rect x="-62" y="-22" width="124" height="44" rx="8" fill="#1F0F0F" stroke="rgba(239,68,68,0.7)" stroke-width="1.2"/>
              <circle cx="-48" cy="0" r="3.5" fill="#ef4444">
                <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite"/>
              </circle>
              <text x="-40" y="-5" font-family="Geist" font-size="10.5" font-weight="600" fill="#fff">AI Provider · US</text>
              <text x="-40" y="6" font-family="Geist Mono" font-size="7" fill="rgba(255,180,180,0.85)" letter-spacing="0.1em">DPA NON SIGNÉ</text>
              <text x="-40" y="16" font-family="Geist Mono" font-size="6" fill="rgba(255,140,140,0.6)" letter-spacing="0.1em">⚠ TRANSFERT NON ENCADRÉ</text>
            </g>

            <!-- NODE: Payments US (orange, DPA OK via DPF) -->
            <g transform="translate(430 170)">
              <rect x="-52" y="-18" width="104" height="36" rx="8" fill="#1F1810" stroke="rgba(249,115,22,0.6)" stroke-width="1"/>
              <circle cx="-38" cy="0" r="3.5" fill="#f97316"/>
              <text x="-30" y="-3" font-family="Geist" font-size="10.5" font-weight="600" fill="#fff">Payments · US</text>
              <text x="-30" y="9" font-family="Geist Mono" font-size="7" fill="rgba(255,210,150,0.7)" letter-spacing="0.1em">DPF · DPA OK</text>
            </g>

            <!-- NODE: Support US (orange) -->
            <g transform="translate(380 270)">
              <rect x="-52" y="-18" width="104" height="36" rx="8" fill="#1F1810" stroke="rgba(249,115,22,0.6)" stroke-width="1"/>
              <circle cx="-38" cy="0" r="3.5" fill="#f97316"/>
              <text x="-30" y="-3" font-family="Geist" font-size="10.5" font-weight="600" fill="#fff">Support · US</text>
              <text x="-30" y="9" font-family="Geist Mono" font-size="7" fill="rgba(255,210,150,0.7)" letter-spacing="0.1em">DPF · À VÉRIFIER</text>
            </g>

            <!-- NODE: CRM US (red · DPA périmé) -->
            <g transform="translate(450 280)">
              <rect x="-48" y="42" width="96" height="36" rx="8" fill="#1F0F0F" stroke="rgba(239,68,68,0.7)" stroke-width="1.2"/>
              <circle cx="-34" cy="60" r="3.5" fill="#ef4444">
                <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite"/>
              </circle>
              <text x="-26" y="57" font-family="Geist" font-size="10.5" font-weight="600" fill="#fff">CRM · US</text>
              <text x="-26" y="69" font-family="Geist Mono" font-size="7" fill="rgba(255,180,180,0.85)" letter-spacing="0.1em">DPA PÉRIMÉ</text>
            </g>

            <!-- NODE: DB EU (green) -->
            <g transform="translate(100 320)">
              <rect x="-50" y="-18" width="100" height="36" rx="8" fill="#0F1A12" stroke="rgba(34,197,94,0.55)" stroke-width="1"/>
              <circle cx="-34" cy="0" r="3.5" fill="#22c55e"/>
              <text x="-26" y="-3" font-family="Geist" font-size="10.5" font-weight="600" fill="#fff">DB · EU-IE</text>
              <text x="-26" y="9" font-family="Geist Mono" font-size="7" fill="rgba(255,255,255,0.5)" letter-spacing="0.1em">DPA OK</text>
            </g>

            <!-- Floating "scan in progress" caption -->
            <g transform="translate(260 50)">
              <rect x="-60" y="-12" width="120" height="22" rx="11" fill="rgba(10,10,10,0.65)" stroke="rgba(255,255,255,0.08)" stroke-width="0.6"/>
              <circle cx="-46" cy="-1" r="3" fill="#A78BFA">
                <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
              </circle>
              <text x="-38" y="2.5" font-family="Geist Mono" font-size="8" fill="rgba(255,255,255,0.7)" letter-spacing="0.14em">EXEMPLE · 47 NODES DÉTECTÉS</text>
            </g>
          </svg>
        </div>

        <!-- Footer counter row -->
        <div class="sr-map-foot">
          <div class="sr-map-foot-cell">
            <span class="sr-dot sr-dot-green"></span>
            <span class="sr-map-foot-k">31</span>
            <span class="sr-map-foot-l">conformes</span>
          </div>
          <div class="sr-map-foot-cell">
            <span class="sr-dot sr-dot-orange"></span>
            <span class="sr-map-foot-k">11</span>
            <span class="sr-map-foot-l">DPA à mettre à jour</span>
          </div>
          <div class="sr-map-foot-cell">
            <span class="sr-dot sr-dot-red"></span>
            <span class="sr-map-foot-k">5</span>
            <span class="sr-map-foot-l">transferts non encadrés</span>
          </div>
        </div>
      </div>

      <!-- Floating risk pill (absolute, top-right) -->
      <div class="sr-risk-pill">
        <div class="sr-risk-pill-head">
          <span class="sr-risk-pill-label">EXPOSITION TYPIQUE</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M7 17l9-9M9 7h7v7"/></svg>
        </div>
        <div class="sr-risk-pill-amount">
          0,3 - 2 <span>M€</span>
        </div>
        <div class="sr-risk-pill-sub">PME tech 50-300 sal. · à auditer</div>
      </div>

      <!-- Floating CNIL ticker (absolute, bottom-left) -->
      <div class="sr-ticker">
        <div class="sr-ticker-head">
          <span class="sr-ticker-dot"></span>
          <span>CNIL · sanctions récentes</span>
        </div>
        <div class="sr-ticker-rows">
          <div class="sr-ticker-row">
            <span class="sr-ticker-amount">35 M€</span>
            <span class="sr-ticker-co">Amazon France · 2024</span>
          </div>
          <div class="sr-ticker-row">
            <span class="sr-ticker-amount">5,2 M€</span>
            <span class="sr-ticker-co">Cookies · presse · 2025</span>
          </div>
          <div class="sr-ticker-row">
            <span class="sr-ticker-amount">525 k€</span>
            <span class="sr-ticker-co">PME tech · transfert US</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="scta" id="contact">
  <div class="scta-bg"></div>
  <div class="wrap inner">
    <div class="eyebrow on-dark">— Prochaine étape</div>
    <h2 style="margin-top:14px">Auditons votre exposition.<br><span class="accent">2 semaines, livrable chiffré.</span></h2>
    <p>Un cadrage avec un DPO + un lead dev. On cartographie vos sous-traitants, vos flux, vos risques RGPD / AI Act / NIS2 — et on chiffre la remédiation à la fin du sprint.</p>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="wrap"></div>
</footer>
`;
