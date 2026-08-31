export const bodyHtml = `
<!-- BREADCRUMB -->
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <a href="/services">Services</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">Maintenance &amp; évolution</span>
  </div>
</div>

<!-- HERO -->
<section class="shero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow">
        <span class="pill"><span class="dot"></span> Service · Maintenance &amp; évolution · TMA long-terme</span>
      </div>
      <h1>Maintenance applicative :<br><span class="accent">une équipe et des objectifs cadrés.</span></h1>

      <!-- KPI bar : modalités possibles + produits maison. -->
      <div class="me-hero-kpis">
        <div class="me-hero-kpi">
          <div class="me-hero-kpi-v">SLA<span>sur mesure</span></div>
          <div class="me-hero-kpi-k">Objectif et mesure au devis</div>
        </div>
        <div class="me-hero-kpi-sep"></div>
        <div class="me-hero-kpi">
          <div class="me-hero-kpi-v">P1<span>cadré</span></div>
          <div class="me-hero-kpi-k">Prise en charge selon couverture</div>
        </div>
        <div class="me-hero-kpi-sep"></div>
        <div class="me-hero-kpi">
          <div class="me-hero-kpi-v">4<span>pages</span></div>
          <div class="me-hero-kpi-k">Disponibilité et fonctions visibles</div>
        </div>
        <div class="me-hero-kpi-sep"></div>
        <div class="me-hero-kpi">
          <div class="me-hero-kpi-v">7<span>profils</span></div>
          <div class="me-hero-kpi-k">CDI et freelances présentés</div>
        </div>
      </div>

      <p class="shero-sub">
        On reprend votre app — construite chez nous, par un freelance disparu ou une autre agence —
        et on organise une <b>équipe tech dans la durée</b>. Supervision, correctifs de sécurité,
        évolutions et exploitation sont sélectionnés selon la production. <b>Le devis précise l'équipe,
        les comptes, les droits sur les livrables, la couverture et la réversibilité.</b>
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Reprendre mon app en main <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" class="btn btn-ghost btn-lg">Échange de cadrage · 20 min</a>
      </div>
      <div class="shero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Forfait fixe · pas à la ticket</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Astreinte et objectifs en option</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Comptes, droits et licences inventoriés</span>
      </div>
    </div>

    <!-- VISUAL: stacked product mock -->
    <div class="shero-visual">
      <div class="mock-window mw-main">
        <div class="win-chrome">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url">exemple d'interface · supervision &amp; engagements</div>
        </div>
        <svg width="100%" viewBox="0 0 540 360" style="display:block">
          <defs>
            <linearGradient id="me-sla-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#10B981"/>
              <stop offset="100%" stop-color="#34D399"/>
            </linearGradient>
            <linearGradient id="me-sla-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#10B981" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#10B981" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <rect width="540" height="360" fill="#fff"/>

          <!-- Top bar -->
          <rect x="0" y="0" width="540" height="44" fill="#fff"/>
          <rect x="0" y="43" width="540" height="1" fill="#f0f0f0"/>
          <rect x="20" y="14" width="28" height="16" rx="4" fill="#0A0A0A"/>
          <text x="34" y="25" text-anchor="middle" font-family="Geist Mono" font-weight="700" font-size="9" fill="#fff">HC</text>
          <text x="56" y="27" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">Supervision applicative</text>
          <rect x="224" y="13" width="72" height="18" rx="4" fill="#F5F5F5"/>
          <text x="260" y="25" text-anchor="middle" font-family="Geist Mono" font-size="8" font-weight="700" fill="#737373" letter-spacing="1">EXEMPLE</text>
          <circle cx="438" cy="22" r="4" fill="#10B981">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <rect x="448" y="12" width="78" height="20" rx="4" fill="#ECFDF5"/>
          <text x="487" y="26" text-anchor="middle" font-family="Geist Mono" font-size="9" font-weight="700" fill="#047857">● EN LIGNE</text>

          <!-- Exemple de jauge à configurer au contrat, pas une mesure observée -->
          <g transform="translate(24 64)">
            <rect x="0" y="0" width="248" height="108" rx="12" fill="#0A0A0A"/>
            <text x="20" y="24" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">SLA UPTIME · EXEMPLE À CADRER</text>
            <text x="20" y="72" font-family="Geist" font-weight="700" font-size="34" fill="#fff" letter-spacing="-0.03em">SUR MESURE</text>
            <text x="20" y="94" font-family="Geist Mono" font-size="9" fill="#10B981" font-weight="600">Méthode de mesure au contrat</text>
            <!-- seuil contractuel -->
            <path d="M 148 72 L 228 72" stroke="url(#me-sla-grad)" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="228" cy="72" r="3" fill="#10B981"/>
          </g>

          <!-- Engagements contractuels (aucune valeur mesurée) -->
          <g transform="translate(284 64)">
            <rect x="0" y="0" width="232" height="32" rx="8" fill="#F5F5F5"/>
            <text x="14" y="20" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">ASTREINTE · OPTION</text>
            <text x="214" y="21" font-family="Geist" font-weight="700" font-size="15" fill="#10B981" text-anchor="end">À CADRER</text>

            <rect x="0" y="38" width="232" height="32" rx="8" fill="#EDE9FE"/>
            <text x="14" y="58" font-family="Geist Mono" font-size="8" fill="#4C1D95" letter-spacing="1">PRISE EN CHARGE · P1</text>
            <text x="214" y="59" font-family="Geist" font-weight="700" font-size="15" fill="#6D28D9" text-anchor="end">AU DEVIS</text>

            <rect x="0" y="76" width="114" height="32" rx="8" fill="#F5F5F5"/>
            <text x="14" y="96" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">PERTE DE DONNÉES MAX</text>
            <text x="100" y="97" font-family="Geist" font-weight="700" font-size="15" fill="#0A0A0A" text-anchor="end">CIBLE</text>

            <rect x="118" y="76" width="114" height="32" rx="8" fill="#F5F5F5"/>
            <text x="132" y="96" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">INFRASTRUCTURE</text>
            <text x="218" y="97" font-family="Geist" font-weight="700" font-size="15" fill="#0A0A0A" text-anchor="end">Chez vous</text>
          </g>

          <!-- Services grid -->
          <rect x="24" y="190" width="492" height="148" rx="12" fill="#fff" stroke="#E5E5E5"/>
          <text x="40" y="212" font-family="Geist Mono" font-size="9" fill="#737373" letter-spacing="1">SERVICES SUPERVISÉS · EXEMPLE</text>

          <!-- Service row 1 -->
          <g transform="translate(40 226)">
            <circle cx="6" cy="6" r="4" fill="#10B981"/>
            <text x="20" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">API Laravel</text>
            <text x="160" y="10" font-family="Geist Mono" font-size="9" fill="#737373">opérationnel</text>
            <text x="470" y="10" font-family="Geist Mono" font-size="9" fill="#0A0A0A" font-weight="600" text-anchor="end">p95 230 ms</text>
          </g>
          <line x1="40" y1="238" x2="500" y2="238" stroke="#F5F5F5"/>

          <g transform="translate(40 252)">
            <circle cx="6" cy="6" r="4" fill="#10B981"/>
            <text x="20" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">PostgreSQL 16</text>
            <text x="160" y="10" font-family="Geist Mono" font-size="9" fill="#737373">opérationnel</text>
            <text x="470" y="10" font-family="Geist Mono" font-size="9" fill="#0A0A0A" font-weight="600" text-anchor="end">p95 45 ms</text>
          </g>
          <line x1="40" y1="264" x2="500" y2="264" stroke="#F5F5F5"/>

          <g transform="translate(40 278)">
            <circle cx="6" cy="6" r="4" fill="#10B981"/>
            <text x="20" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">Redis · queues</text>
            <text x="160" y="10" font-family="Geist Mono" font-size="9" fill="#737373">opérationnel · 12 j/s</text>
            <text x="470" y="10" font-family="Geist Mono" font-size="9" fill="#0A0A0A" font-weight="600" text-anchor="end">p95 2 ms</text>
          </g>
          <line x1="40" y1="290" x2="500" y2="290" stroke="#F5F5F5"/>

          <g transform="translate(40 304)">
            <circle cx="6" cy="6" r="4" fill="#10B981"/>
            <text x="20" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">Frontend Next.js</text>
            <text x="160" y="10" font-family="Geist Mono" font-size="9" fill="#737373">opérationnel · CWV 95</text>
            <text x="470" y="10" font-family="Geist Mono" font-size="9" fill="#0A0A0A" font-weight="600" text-anchor="end">LCP 1,4 s</text>
          </g>
          <line x1="40" y1="316" x2="500" y2="316" stroke="#F5F5F5"/>

          <!-- Footer line -->
          <text x="40" y="332" font-family="Geist Mono" font-size="8" fill="#a3a3a3">Sentry · Pulse · Horizon</text>
          <text x="500" y="332" text-anchor="end" font-family="Geist Mono" font-size="8" fill="#a3a3a3" font-weight="600">valeurs illustratives</text>
        </svg>
      </div>

      <div class="mock-window mw-side">
        <div class="win-chrome" style="background:#0d0d0d;border-color:rgba(255,255,255,0.08)">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url" style="color:rgba(255,255,255,0.5)">exemple · changelog mensuel livré</div>
        </div>
        <div style="padding:18px 20px 16px;background:#0A0A0A;color:#E5E5E5;font-family:'Geist',ui-sans-serif,system-ui,sans-serif;font-size:12px;line-height:1.4">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
            <div>
              <div style="font-family:'Geist Mono';font-size:9px;color:#737373;letter-spacing:0.12em">CHANGELOG MENSUEL · EXEMPLE</div>
              <div style="font-size:20px;font-weight:700;color:#fff;margin-top:4px">Chaque livraison <span style="color:#10B981">tracée</span></div>
            </div>
            <div style="font-family:'Geist Mono';font-size:10px;color:#737373;font-weight:700">● EXEMPLE</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:11px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.3.1</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· interface</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">✨ Refonte d'un parcours utilisateur</div>
              </div>
              <span style="font-family:'Geist Mono';color:#10B981;font-weight:700;font-size:10px;flex-shrink:0">feat</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.2.9</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· dépendances</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">🔐 Montée de version · correctifs amont</div>
              </div>
              <span style="font-family:'Geist Mono';color:#F59E0B;font-weight:700;font-size:10px;flex-shrink:0">sec</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.2.8</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· traitement</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">⚡ Optimisation des files d'attente</div>
              </div>
              <span style="font-family:'Geist Mono';color:#60A5FA;font-weight:700;font-size:10px;flex-shrink:0">perf</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.2.7</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· données</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">📊 Export de gros volumes de données</div>
              </div>
              <span style="font-family:'Geist Mono';color:#10B981;font-weight:700;font-size:10px;flex-shrink:0">feat</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.2.6</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· authentification</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">🐛 Correction d'un accès concurrent</div>
              </div>
              <span style="font-family:'Geist Mono';color:#EF4444;font-weight:700;font-size:10px;flex-shrink:0">fix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT WE BUILD -->
`;
