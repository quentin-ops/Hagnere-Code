export const bodyHtml = `
<!-- BREADCRUMB -->
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <a href="/services">Services</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">Audit technique</span>
  </div>
</div>

<!-- HERO -->
<section class="shero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow">
        <span class="pill"><span class="dot"></span> Service · Audit technique · mission cadrée</span>
        <span class="at-nda-pill" aria-label="Confidentialité définie avant les accès">
          <span class="at-nda-dot"></span>
          <span class="at-nda-txt">Confidentialité écrite</span>
          <span class="at-nda-state">● avant accès</span>
        </span>
      </div>
      <h1>Audit technique d'application :<br>des constats <span class="accent">sourcés</span>,<br>une décision documentée.</h1>

      <!-- KPI bar : chiffres concrets juste sous le H1 -->
      <div class="at-hero-kpis">
        <div class="at-hero-kpi">
          <div class="at-hero-kpi-v">8</div>
          <div class="at-hero-kpi-k">Dimensions auditées (code, archi, perf, sécu, infra, DevEx, FinOps, équipe)</div>
        </div>
        <div class="at-hero-kpi-sep"></div>
        <div class="at-hero-kpi">
          <div class="at-hero-kpi-v">DEVIS</div>
          <div class="at-hero-kpi-k">Calendrier, intervenants et livrables</div>
        </div>
        <div class="at-hero-kpi-sep"></div>
        <div class="at-hero-kpi">
          <div class="at-hero-kpi-v">ÉCRIT</div>
          <div class="at-hero-kpi-k">Constats, hypothèses et périmètre au devis</div>
        </div>
        <div class="at-hero-kpi-sep"></div>
        <div class="at-hero-kpi">
          <div class="at-hero-kpi-v">DROITS</div>
          <div class="at-hero-kpi-k">Usage, transfert et confidentialité écrits</div>
        </div>
      </div>

      <p class="shero-sub">
        Audit indépendant pour <b>VC en due diligence, acquéreur M&amp;A, CTO entrant, dirigeant avant refonte ou certification SOC2/ISO 27001</b>.
        Rapport board-ready avec <b>scoring /100 par dimension, Tech Debt P&amp;L chiffré en euros, matrice impact × effort, roadmap 6/12/18 mois</b>.
        Chaque constat est relié à une preuve et les hypothèses de coût sont explicites. Toute éventuelle remise liée à une <a href="/services/maintenance-evolution">mission de remédiation</a> figure au devis.
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Demander un exemple de livrable
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" class="btn btn-ghost btn-lg">Call de cadrage · 30 min offert</a>
      </div>
      <div class="shero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Prix fixe · publié sur cette page</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Critères d'acceptation définis au devis</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Format de restitution défini au devis</span>
      </div>
    </div>

    <p style="margin:18px 0 10px;font-family:'Geist Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.08em;color:#737373">
      EXEMPLE INTERNE ILLUSTRATIF — PAS UN RAPPORT CLIENT NI UNE MESURE RÉELLE
    </p>

    <!-- VISUAL: stacked product mock -->
    <div class="shero-visual">
      <div class="mock-window mw-main">
        <div class="win-chrome">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url">hagnere-code · audit tech · report v1.0</div>
        </div>
        <svg width="100%" viewBox="0 0 540 360" style="display:block">
          <defs>
            <linearGradient id="at-debt-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#6D28D9"/>
              <stop offset="100%" stop-color="#0A0A0A"/>
            </linearGradient>
            <linearGradient id="at-bar-green" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#34D399"/></linearGradient>
            <linearGradient id="at-bar-amber" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#FCD34D"/></linearGradient>
            <linearGradient id="at-bar-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#EF4444"/><stop offset="100%" stop-color="#FCA5A5"/></linearGradient>
          </defs>
          <rect width="540" height="360" fill="#fff"/>

          <!-- Top bar -->
          <rect x="0" y="0" width="540" height="44" fill="#fff"/>
          <rect x="0" y="43" width="540" height="1" fill="#f0f0f0"/>
          <rect x="20" y="14" width="28" height="16" rx="4" fill="#0A0A0A"/>
          <text x="34" y="25" text-anchor="middle" font-family="Geist Mono" font-weight="700" font-size="9" fill="#fff">HC</text>
          <text x="56" y="27" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">audit · report v1.0</text>
          <rect x="380" y="12" width="72" height="20" rx="4" fill="#FEF2F2" stroke="#FCA5A5"/>
          <text x="416" y="26" text-anchor="middle" font-family="Geist Mono" font-size="9" font-weight="700" fill="#B91C1C">● CONFIDENTIEL</text>
          <rect x="460" y="12" width="66" height="20" rx="4" fill="#F5F5F5"/>
          <text x="493" y="26" text-anchor="middle" font-family="Geist Mono" font-size="9" font-weight="600" fill="#737373">EXEMPLE · FICTIF</text>

          <!-- Tech Debt P&L card (gauche, dark) -->
          <g transform="translate(24 64)">
            <rect x="0" y="0" width="218" height="268" rx="14" fill="url(#at-debt-grad)"/>
            <text x="20" y="26" font-family="Geist Mono" font-size="8" fill="rgba(255,255,255,0.6)" letter-spacing="1">TECH DEBT P&amp;L</text>
            <rect x="182" y="14" width="20" height="16" rx="4" fill="rgba(167,139,250,0.2)" stroke="rgba(167,139,250,0.4)"/>
            <text x="192" y="25" text-anchor="middle" font-family="Geist Mono" font-size="8" font-weight="700" fill="#A78BFA">P1</text>

            <text x="20" y="80" font-family="Geist" font-weight="700" font-size="42" fill="#fff" letter-spacing="-0.03em">420<tspan font-size="24" fill="rgba(255,255,255,0.55)"> k€</tspan></text>
            <text x="20" y="102" font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.6)" letter-spacing="0.04em">DETTE TECH ESTIMÉE</text>

            <rect x="20" y="116" width="178" height="1" fill="rgba(255,255,255,0.1)"/>

            <text x="20" y="140" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.82)" font-weight="500">≈ 8 mois de vélocité perdue</text>
            <text x="20" y="158" font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.5)">par an sur l'équipe actuelle (6 devs)</text>

            <rect x="20" y="176" width="178" height="1" fill="rgba(255,255,255,0.1)"/>

            <!-- 3 mini chips breakdown -->
            <g transform="translate(20 192)">
              <rect x="0" y="0" width="58" height="24" rx="6" fill="rgba(239,68,68,0.18)" stroke="rgba(239,68,68,0.3)"/>
              <text x="29" y="10" text-anchor="middle" font-family="Geist Mono" font-size="7" font-weight="700" fill="#FCA5A5">SÉCURITÉ</text>
              <text x="29" y="19" text-anchor="middle" font-family="Geist" font-size="9" font-weight="700" fill="#fff">165 k€</text>

              <rect x="62" y="0" width="58" height="24" rx="6" fill="rgba(245,158,11,0.18)" stroke="rgba(245,158,11,0.3)"/>
              <text x="91" y="10" text-anchor="middle" font-family="Geist Mono" font-size="7" font-weight="700" fill="#FCD34D">ARCHI</text>
              <text x="91" y="19" text-anchor="middle" font-family="Geist" font-size="9" font-weight="700" fill="#fff">128 k€</text>

              <rect x="124" y="0" width="58" height="24" rx="6" fill="rgba(107,114,128,0.2)" stroke="rgba(107,114,128,0.3)"/>
              <text x="153" y="10" text-anchor="middle" font-family="Geist Mono" font-size="7" font-weight="700" fill="#D4D4D8">FINOPS</text>
              <text x="153" y="19" text-anchor="middle" font-family="Geist" font-size="9" font-weight="700" fill="#fff">127 k€</text>
            </g>

            <text x="20" y="244" font-family="Geist Mono" font-size="8" fill="rgba(255,255,255,0.45)" letter-spacing="0.04em">COÛT DE RÉMÉDIATION</text>
            <text x="20" y="258" font-family="Geist" font-size="13" font-weight="600" fill="#A78BFA">À ESTIMER · HYPOTHÈSES JOINTES</text>
          </g>

          <!-- 8 dimensions score (droite) -->
          <g transform="translate(254 64)">
            <rect x="0" y="0" width="262" height="268" rx="14" fill="#FAFAFA" stroke="#E5E5E5"/>
            <text x="16" y="24" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">SCORE ILLUSTRATIF · 8 DIMENSIONS</text>
            <rect x="212" y="14" width="36" height="14" rx="3" fill="#FEF3C7"/>
            <text x="230" y="24" text-anchor="middle" font-family="Geist Mono" font-size="8" font-weight="700" fill="#92400E">72/100</text>

            <!-- 8 dimensions rows -->
            <!-- Code quality 65 amber -->
            <g transform="translate(16 44)">
              <text x="0" y="8" font-family="Geist" font-size="10" font-weight="500" fill="#0A0A0A">Code quality</text>
              <rect x="108" y="2" width="108" height="8" rx="4" fill="#F0F0F0"/>
              <rect x="108" y="2" width="70" height="8" rx="4" fill="url(#at-bar-amber)"/>
              <text x="222" y="9" font-family="Geist Mono" font-size="9" font-weight="700" fill="#92400E">65</text>
            </g>

            <!-- Architecture 58 amber -->
            <g transform="translate(16 66)">
              <text x="0" y="8" font-family="Geist" font-size="10" font-weight="500" fill="#0A0A0A">Architecture</text>
              <rect x="108" y="2" width="108" height="8" rx="4" fill="#F0F0F0"/>
              <rect x="108" y="2" width="63" height="8" rx="4" fill="url(#at-bar-amber)"/>
              <text x="222" y="9" font-family="Geist Mono" font-size="9" font-weight="700" fill="#92400E">58</text>
            </g>

            <!-- Performance 82 green -->
            <g transform="translate(16 88)">
              <text x="0" y="8" font-family="Geist" font-size="10" font-weight="500" fill="#0A0A0A">Performance</text>
              <rect x="108" y="2" width="108" height="8" rx="4" fill="#F0F0F0"/>
              <rect x="108" y="2" width="89" height="8" rx="4" fill="url(#at-bar-green)"/>
              <text x="222" y="9" font-family="Geist Mono" font-size="9" font-weight="700" fill="#047857">82</text>
            </g>

            <!-- Sécurité 34 red -->
            <g transform="translate(16 110)">
              <text x="0" y="8" font-family="Geist" font-size="10" font-weight="500" fill="#0A0A0A">Sécurité</text>
              <rect x="108" y="2" width="108" height="8" rx="4" fill="#F0F0F0"/>
              <rect x="108" y="2" width="37" height="8" rx="4" fill="url(#at-bar-red)"/>
              <text x="222" y="9" font-family="Geist Mono" font-size="9" font-weight="700" fill="#B91C1C">34</text>
            </g>

            <!-- Infra 70 amber -->
            <g transform="translate(16 132)">
              <text x="0" y="8" font-family="Geist" font-size="10" font-weight="500" fill="#0A0A0A">Infrastructure</text>
              <rect x="108" y="2" width="108" height="8" rx="4" fill="#F0F0F0"/>
              <rect x="108" y="2" width="76" height="8" rx="4" fill="url(#at-bar-amber)"/>
              <text x="222" y="9" font-family="Geist Mono" font-size="9" font-weight="700" fill="#92400E">70</text>
            </g>

            <!-- DevEx 75 green -->
            <g transform="translate(16 154)">
              <text x="0" y="8" font-family="Geist" font-size="10" font-weight="500" fill="#0A0A0A">DevEx · DORA</text>
              <rect x="108" y="2" width="108" height="8" rx="4" fill="#F0F0F0"/>
              <rect x="108" y="2" width="81" height="8" rx="4" fill="url(#at-bar-green)"/>
              <text x="222" y="9" font-family="Geist Mono" font-size="9" font-weight="700" fill="#047857">75</text>
            </g>

            <!-- FinOps 42 red -->
            <g transform="translate(16 176)">
              <text x="0" y="8" font-family="Geist" font-size="10" font-weight="500" fill="#0A0A0A">FinOps cloud</text>
              <rect x="108" y="2" width="108" height="8" rx="4" fill="#F0F0F0"/>
              <rect x="108" y="2" width="45" height="8" rx="4" fill="url(#at-bar-red)"/>
              <text x="222" y="9" font-family="Geist Mono" font-size="9" font-weight="700" fill="#B91C1C">42</text>
            </g>

            <!-- Équipe 68 amber -->
            <g transform="translate(16 198)">
              <text x="0" y="8" font-family="Geist" font-size="10" font-weight="500" fill="#0A0A0A">Équipe &amp; org</text>
              <rect x="108" y="2" width="108" height="8" rx="4" fill="#F0F0F0"/>
              <rect x="108" y="2" width="73" height="8" rx="4" fill="url(#at-bar-amber)"/>
              <text x="222" y="9" font-family="Geist Mono" font-size="9" font-weight="700" fill="#92400E">68</text>
            </g>

            <rect x="16" y="220" width="230" height="1" fill="#E5E5E5"/>
            <text x="16" y="240" font-family="Geist Mono" font-size="8" fill="#737373">EXEMPLE · SCORE À REPRODUIRE SELON LE DEVIS</text>
          </g>

          <!-- Footer line -->
          <text x="24" y="352" font-family="Geist Mono" font-size="8" fill="#a3a3a3">Rapport 52 pages · Deck 16 slides · Backlog 28 tickets</text>
          <text x="516" y="352" text-anchor="end" font-family="Geist Mono" font-size="8" fill="#6D28D9" font-weight="600">FORMAT ILLUSTRATIF</text>
        </svg>
      </div>

      <div class="mock-window mw-side">
        <div class="win-chrome" style="background:#0d0d0d;border-color:rgba(255,255,255,0.08)">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url" style="color:rgba(255,255,255,0.5)">matrice · impact × effort</div>
        </div>
        <div style="padding:18px 20px 16px;background:#0A0A0A;color:#E5E5E5;font-family:'Geist',ui-sans-serif,system-ui,sans-serif;font-size:12px;line-height:1.4">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
            <div>
              <div style="font-family:'Geist Mono';font-size:9px;color:#737373;letter-spacing:0.12em">RECOS PRIORISÉES</div>
              <div style="font-size:20px;font-weight:700;color:#fff;margin-top:4px">28 tickets · <span style="color:#10B981">12 quick wins</span></div>
            </div>
            <div style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">● BOARD-READY</div>
          </div>

          <!-- Matrix 2x2 -->
          <div style="position:relative;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 16px 28px;margin-top:4px">
            <!-- axes labels -->
            <div style="position:absolute;top:8px;right:14px;font-family:'Geist Mono';font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:0.06em">IMPACT ↑</div>
            <div style="position:absolute;bottom:10px;right:14px;font-family:'Geist Mono';font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:0.06em">EFFORT →</div>

            <!-- SVG 2x2 grid -->
            <svg viewBox="0 0 340 220" style="width:100%;display:block">
              <!-- grid -->
              <line x1="20" y1="108" x2="320" y2="108" stroke="rgba(255,255,255,0.1)" stroke-dasharray="3 4"/>
              <line x1="170" y1="10" x2="170" y2="200" stroke="rgba(255,255,255,0.1)" stroke-dasharray="3 4"/>
              <!-- outer rect -->
              <rect x="20" y="10" width="300" height="190" rx="6" fill="none" stroke="rgba(255,255,255,0.15)"/>

              <!-- quadrant labels -->
              <text x="35" y="26" font-family="Geist Mono" font-size="8" fill="#34D399" font-weight="700" letter-spacing="0.08em">QUICK WINS · 12</text>
              <text x="185" y="26" font-family="Geist Mono" font-size="8" fill="#A78BFA" font-weight="700" letter-spacing="0.08em">STRATEGIC · 8</text>
              <text x="35" y="196" font-family="Geist Mono" font-size="8" fill="rgba(255,255,255,0.4)" font-weight="700" letter-spacing="0.08em">FILL-INS · 5</text>
              <text x="185" y="196" font-family="Geist Mono" font-size="8" fill="#FCA5A5" font-weight="700" letter-spacing="0.08em">BACK-BURNER · 3</text>

              <!-- tickets as dots -->
              <!-- Quick wins (low effort, high impact) -->
              <circle cx="48" cy="56" r="7" fill="#10B981" opacity="0.9"/>
              <circle cx="72" cy="48" r="6" fill="#10B981" opacity="0.85"/>
              <circle cx="95" cy="62" r="7" fill="#10B981" opacity="0.9"/>
              <circle cx="58" cy="78" r="5" fill="#10B981" opacity="0.75"/>
              <circle cx="112" cy="72" r="6" fill="#10B981" opacity="0.85"/>
              <circle cx="85" cy="88" r="6" fill="#10B981" opacity="0.85"/>
              <circle cx="138" cy="84" r="5" fill="#10B981" opacity="0.75"/>
              <circle cx="42" cy="94" r="4" fill="#10B981" opacity="0.7"/>
              <circle cx="125" cy="56" r="5" fill="#10B981" opacity="0.75"/>
              <circle cx="65" cy="68" r="4" fill="#10B981" opacity="0.7"/>
              <circle cx="148" cy="68" r="4" fill="#10B981" opacity="0.7"/>
              <circle cx="105" cy="96" r="4" fill="#10B981" opacity="0.7"/>

              <!-- Strategic (high effort, high impact) -->
              <circle cx="220" cy="52" r="8" fill="#A78BFA" opacity="0.92"/>
              <circle cx="252" cy="68" r="9" fill="#A78BFA" opacity="0.95"/>
              <circle cx="278" cy="48" r="7" fill="#A78BFA" opacity="0.88"/>
              <circle cx="198" cy="82" r="7" fill="#A78BFA" opacity="0.88"/>
              <circle cx="292" cy="82" r="6" fill="#A78BFA" opacity="0.85"/>
              <circle cx="240" cy="94" r="7" fill="#A78BFA" opacity="0.88"/>
              <circle cx="272" cy="96" r="5" fill="#A78BFA" opacity="0.8"/>
              <circle cx="215" cy="76" r="5" fill="#A78BFA" opacity="0.8"/>

              <!-- Fill-ins (low effort, low impact) -->
              <circle cx="56" cy="148" r="5" fill="rgba(255,255,255,0.3)"/>
              <circle cx="82" cy="168" r="4" fill="rgba(255,255,255,0.3)"/>
              <circle cx="118" cy="156" r="4" fill="rgba(255,255,255,0.3)"/>
              <circle cx="142" cy="172" r="3" fill="rgba(255,255,255,0.3)"/>
              <circle cx="98" cy="142" r="3" fill="rgba(255,255,255,0.3)"/>

              <!-- Back-burner (high effort, low impact) -->
              <circle cx="232" cy="158" r="5" fill="#EF4444" opacity="0.7"/>
              <circle cx="272" cy="172" r="4" fill="#EF4444" opacity="0.65"/>
              <circle cx="295" cy="146" r="4" fill="#EF4444" opacity="0.65"/>
            </svg>
          </div>

          <!-- Legend -->
          <div style="display:flex;justify-content:space-between;gap:10px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08);font-family:'Geist Mono';font-size:9.5px">
            <div style="display:flex;align-items:center;gap:6px;color:#34D399">
              <span style="width:7px;height:7px;border-radius:50%;background:#10B981"></span>
              faire en 1er
            </div>
            <div style="display:flex;align-items:center;gap:6px;color:#C4B5FD">
              <span style="width:7px;height:7px;border-radius:50%;background:#A78BFA"></span>
              plan 6-12 mois
            </div>
            <div style="display:flex;align-items:center;gap:6px;color:#FCA5A5">
              <span style="width:7px;height:7px;border-radius:50%;background:#EF4444"></span>
              à reporter
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT WE BUILD -->
`;
