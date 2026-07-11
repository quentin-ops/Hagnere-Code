import { navHtml } from "@/components/design-shared/nav-html";

export const bodyHtml = `
${navHtml}
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
        <a href="https://status.hagnere-code.fr" target="_blank" rel="noopener" class="me-status-pill" aria-label="Voir notre Statuspage publique">
          <span class="me-status-dot"></span>
          <span class="me-status-txt">status.hagnere-code.fr</span>
          <span class="me-status-state">● operational</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </a>
      </div>
      <h1>Votre équipe tech<br>dans 3 ans, 5 ans, 10 ans.<br><span class="accent">Pas un prestataire qui disparaît.</span></h1>

      <!-- KPI bar : chiffres concrets juste sous le H1 -->
      <div class="me-hero-kpis">
        <div class="me-hero-kpi">
          <div class="me-hero-kpi-v">99,95<span>%</span></div>
          <div class="me-hero-kpi-k">Uptime 12 mois · mesuré Better Stack</div>
        </div>
        <div class="me-hero-kpi-sep"></div>
        <div class="me-hero-kpi">
          <div class="me-hero-kpi-v">14<span>/trim</span></div>
          <div class="me-hero-kpi-k">Deploys · DORA elite</div>
        </div>
        <div class="me-hero-kpi-sep"></div>
        <div class="me-hero-kpi">
          <div class="me-hero-kpi-v">23<span>min</span></div>
          <div class="me-hero-kpi-k">MTTR médian · P1 astreinte</div>
        </div>
        <div class="me-hero-kpi-sep"></div>
        <div class="me-hero-kpi">
          <div class="me-hero-kpi-v">4,3<span>ans</span></div>
          <div class="me-hero-kpi-k">Ancienneté moyenne clients</div>
        </div>
      </div>

      <p class="shero-sub">
        On reprend votre app — construite chez nous, par un freelance disparu ou une autre agence —
        et on en devient votre <b>équipe tech long-terme</b>. Monitoring 24/7, patches sécurité,
        évolutions continues, hébergement &amp; infra ops. <b>Forfait fixe mensuel, équipe nommée dans le contrat,
        comptes et code chez vous, aucun vendor lock-in.</b>
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Reprendre mon app en main <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" class="btn btn-ghost btn-lg">Audit maintenance offert · 20 min</a>
      </div>
      <div class="shero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Forfait fixe · pas à la ticket</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Astreinte 7j/7 · MTTR &lt; 30 min</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Code &amp; comptes chez vous</span>
      </div>
    </div>

    <!-- VISUAL: stacked product mock -->
    <div class="shero-visual">
      <div class="mock-window mw-main">
        <div class="win-chrome">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url">hagnere-code · production · health</div>
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
          <text x="56" y="27" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">production · health</text>
          <circle cx="438" cy="22" r="4" fill="#10B981">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <rect x="448" y="12" width="78" height="20" rx="4" fill="#ECFDF5"/>
          <text x="487" y="26" text-anchor="middle" font-family="Geist Mono" font-size="9" font-weight="700" fill="#047857">● OPERATIONAL</text>

          <!-- SLA Gauge (hero stat) -->
          <g transform="translate(24 64)">
            <rect x="0" y="0" width="248" height="108" rx="12" fill="#0A0A0A"/>
            <text x="20" y="24" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">UPTIME · 30 DERNIERS JOURS</text>
            <text x="20" y="72" font-family="Geist" font-weight="700" font-size="46" fill="#fff" letter-spacing="-0.03em">99,95<tspan font-size="26" fill="#10B981">%</tspan></text>
            <text x="20" y="94" font-family="Geist Mono" font-size="9" fill="#10B981" font-weight="600">▲ 8 min downtime · bien sous SLA 99,9%</text>
            <!-- tiny sparkline -->
            <path d="M 148 72 L 158 72 L 168 72 L 178 60 L 188 72 L 198 72 L 208 72 L 218 72 L 228 72" stroke="url(#me-sla-grad)" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="228" cy="72" r="3" fill="#10B981"/>
          </g>

          <!-- 3 KPI stacked right -->
          <g transform="translate(284 64)">
            <rect x="0" y="0" width="232" height="32" rx="8" fill="#F5F5F5"/>
            <text x="14" y="20" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">INCIDENTS · 30J</text>
            <text x="214" y="21" font-family="Geist" font-weight="700" font-size="15" fill="#10B981" text-anchor="end">0</text>

            <rect x="0" y="38" width="232" height="32" rx="8" fill="#EDE9FE"/>
            <text x="14" y="58" font-family="Geist Mono" font-size="8" fill="#4C1D95" letter-spacing="1">DEPLOYS · TRIMESTRE</text>
            <text x="214" y="59" font-family="Geist" font-weight="700" font-size="15" fill="#6D28D9" text-anchor="end">14</text>

            <rect x="0" y="76" width="114" height="32" rx="8" fill="#F5F5F5"/>
            <text x="14" y="96" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">CVE PATCHÉS</text>
            <text x="100" y="97" font-family="Geist" font-weight="700" font-size="15" fill="#0A0A0A" text-anchor="end">7</text>

            <rect x="118" y="76" width="114" height="32" rx="8" fill="#F5F5F5"/>
            <text x="132" y="96" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">MTTR · P1</text>
            <text x="218" y="97" font-family="Geist" font-weight="700" font-size="15" fill="#0A0A0A" text-anchor="end">23 min</text>
          </g>

          <!-- Services grid -->
          <rect x="24" y="190" width="492" height="148" rx="12" fill="#fff" stroke="#E5E5E5"/>
          <text x="40" y="212" font-family="Geist Mono" font-size="9" fill="#737373" letter-spacing="1">SERVICES · STATUS LIVE</text>

          <!-- Service row 1 -->
          <g transform="translate(40 226)">
            <circle cx="6" cy="6" r="4" fill="#10B981"/>
            <text x="20" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">API Laravel</text>
            <text x="160" y="10" font-family="Geist Mono" font-size="9" fill="#737373">healthy</text>
            <text x="470" y="10" font-family="Geist Mono" font-size="9" fill="#0A0A0A" font-weight="600" text-anchor="end">p95 230 ms</text>
          </g>
          <line x1="40" y1="238" x2="500" y2="238" stroke="#F5F5F5"/>

          <g transform="translate(40 252)">
            <circle cx="6" cy="6" r="4" fill="#10B981"/>
            <text x="20" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">PostgreSQL 16</text>
            <text x="160" y="10" font-family="Geist Mono" font-size="9" fill="#737373">healthy</text>
            <text x="470" y="10" font-family="Geist Mono" font-size="9" fill="#0A0A0A" font-weight="600" text-anchor="end">p95 45 ms</text>
          </g>
          <line x1="40" y1="264" x2="500" y2="264" stroke="#F5F5F5"/>

          <g transform="translate(40 278)">
            <circle cx="6" cy="6" r="4" fill="#10B981"/>
            <text x="20" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">Redis · queues</text>
            <text x="160" y="10" font-family="Geist Mono" font-size="9" fill="#737373">healthy · 12 j/s</text>
            <text x="470" y="10" font-family="Geist Mono" font-size="9" fill="#0A0A0A" font-weight="600" text-anchor="end">p95 2 ms</text>
          </g>
          <line x1="40" y1="290" x2="500" y2="290" stroke="#F5F5F5"/>

          <g transform="translate(40 304)">
            <circle cx="6" cy="6" r="4" fill="#10B981"/>
            <text x="20" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">Frontend Next.js</text>
            <text x="160" y="10" font-family="Geist Mono" font-size="9" fill="#737373">healthy · CWV 95</text>
            <text x="470" y="10" font-family="Geist Mono" font-size="9" fill="#0A0A0A" font-weight="600" text-anchor="end">LCP 1,4 s</text>
          </g>
          <line x1="40" y1="316" x2="500" y2="316" stroke="#F5F5F5"/>

          <!-- Footer line -->
          <text x="40" y="332" font-family="Geist Mono" font-size="8" fill="#a3a3a3">Better Stack · Sentry · PagerDuty</text>
          <text x="500" y="332" text-anchor="end" font-family="Geist Mono" font-size="8" fill="#10B981" font-weight="600">● synced · il y a 12 s</text>
        </svg>
      </div>

      <div class="mock-window mw-side">
        <div class="win-chrome" style="background:#0d0d0d;border-color:rgba(255,255,255,0.08)">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url" style="color:rgba(255,255,255,0.5)">changelog · dernières releases</div>
        </div>
        <div style="padding:18px 20px 16px;background:#0A0A0A;color:#E5E5E5;font-family:'Geist',ui-sans-serif,system-ui,sans-serif;font-size:12px;line-height:1.4">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px">
            <div>
              <div style="font-family:'Geist Mono';font-size:9px;color:#737373;letter-spacing:0.12em">DEPLOYS · 30 DERNIERS JOURS</div>
              <div style="font-size:20px;font-weight:700;color:#fff;margin-top:4px">14 releases · <span style="color:#10B981">0 rollback</span></div>
            </div>
            <div style="font-family:'Geist Mono';font-size:10px;color:#10B981;font-weight:700">● MERGED TO MAIN</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:11px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.3.1</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· il y a 2 j</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">✨ Tunnel paiement Stripe · refonte UX</div>
              </div>
              <span style="font-family:'Geist Mono';color:#10B981;font-weight:700;font-size:10px;flex-shrink:0">feat</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.2.9</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· il y a 3 j</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">🔐 Patch CVE · Laravel 13.4.2 auto-merged</div>
              </div>
              <span style="font-family:'Geist Mono';color:#F59E0B;font-weight:700;font-size:10px;flex-shrink:0">sec</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.2.8</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· il y a 5 j</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">⚡ Optim queue Redis · −40 % latence jobs</div>
              </div>
              <span style="font-family:'Geist Mono';color:#60A5FA;font-weight:700;font-size:10px;flex-shrink:0">perf</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.2.7</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· il y a 7 j</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">📊 Export CSV multi-tenant · 10k lignes/s</div>
              </div>
              <span style="font-family:'Geist Mono';color:#10B981;font-weight:700;font-size:10px;flex-shrink:0">feat</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;font-size:11px;gap:10px">
              <div style="min-width:0;flex:1">
                <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
                  <span style="font-family:'Geist Mono';font-size:10px;color:#A78BFA;font-weight:700">v2.2.6</span>
                  <span style="font-family:'Geist Mono';font-size:9px;color:#525252">· il y a 9 j</span>
                </div>
                <div style="color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">🐛 Race condition SSO Azure · fix</div>
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
<section class="whatweb">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on livre</div>
        <h2>Le SEO, ce n'est pas<br>trois articles ChatGPT par mois.</h2>
      </div>
      <div class="right">
        Stratégie sémantique, production éditoriale experte, netlinking qualitatif, audits techniques et reporting business. Tout piloté par un consultant senior — pas un pool de stagiaires.</div>
    </div>

    <div class="use-grid">
      <div class="uc reveal">
        <div class="uc-num">/ 01</div>
        <h3>Audit SEO complet</h3>
        <p>Audit technique + sémantique + concurrentiel + backlinks. Rapport de 30 à 50 pages, roadmap 12 mois priorisée par impact/effort. Livré en 3 semaines.</p>
        <div class="uc-tags">
          <span class="uc-tag">Audit 200+ points</span>
          <span class="uc-tag">Roadmap priorisée</span>
          <span class="uc-tag">Restitution 2 h</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 02</div>
        <h3>SEO technique &amp; Core Web Vitals</h3>
        <p>Correction des erreurs d'indexation, optimisation vitesse, schema.org, sitemap, hreflang, JS rendering. On livre des specs exécutables directement par votre équipe dev.</p>
        <div class="uc-tags">
          <span class="uc-tag">Lighthouse 95+</span>
          <span class="uc-tag">CWV verts</span>
          <span class="uc-tag">Specs dev</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-2">
        <div class="uc-num">/ 03</div>
        <h3>Stratégie sémantique &amp; cocons</h3>
        <p>Cartographie des 500 à 1 500 mots-clés de votre marché, architecture en cocons sémantiques, plan éditorial 12 mois. <b>La fondation qui fait toute la différence sur 2 ans.</b></p>
        <div class="uc-tags">
          <span class="uc-tag">500–1 500 mots-clés</span>
          <span class="uc-tag">Silos SEO</span>
          <span class="uc-tag">Plan éditorial</span>
        </div>
      </div>

      <div class="uc reveal">
        <div class="uc-num">/ 04</div>
        <h3>Contenu éditorial premium</h3>
        <p>8 à 20 contenus par mois rédigés par nos soins. Process hybride IA + expert métier + relecture SEO. Jamais de publication sans validation humaine — on a vu trop de sites punis par HCU.</p>
        <div class="uc-tags">
          <span class="uc-tag">Rédaction humaine</span>
          <span class="uc-tag">E-E-A-T</span>
          <span class="uc-tag">Brief &amp; validation</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 05</div>
        <h3>Netlinking qualitatif</h3>
        <p>3 à 10 backlinks par mois sur des domaines pertinents et autoritatifs. Mix&nbsp;: partenariats, relations presse, placements thématiques. <b>Jamais de PBN, jamais de liens achetés en masse.</b></p>
        <div class="uc-tags">
          <span class="uc-tag">DR 40+</span>
          <span class="uc-tag">Topical relevance</span>
          <span class="uc-tag">White-hat only</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-2">
        <div class="uc-num">/ 06</div>
        <h3>SEO local &amp; pages villes</h3>
        <p>Optimisation Google Business Profile, citations locales, pages villes à contenu authentique (pas dupliqué). Pour artisans, multi-sites, franchises, professions réglementées.</p>
        <div class="uc-tags">
          <span class="uc-tag">Google Business</span>
          <span class="uc-tag">Pages villes</span>
          <span class="uc-tag">Avis automatisés</span>
        </div>
      </div>

      <div class="uc reveal">
        <div class="uc-num">/ 07</div>
        <h3>Récupération post-update Google</h3>
        <p>Votre site a perdu 30-80 % de trafic suite à HCU, Core Update ou Spam Update&nbsp;? Audit E-E-A-T, suppression du contenu low-value, signaux d'expertise, netlinking. <b>70 % des cas sont récupérables</b>.</p>
        <div class="uc-tags">
          <span class="uc-tag">Audit E-E-A-T</span>
          <span class="uc-tag">Content pruning</span>
          <span class="uc-tag">Signaux expertise</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 08</div>
        <h3>Reporting &amp; pilotage business</h3>
        <p>Dashboard Looker Studio mensuel qui relie trafic organique → leads qualifiés → CA attribué. Réunion d'1 h par mois avec votre consultant. <b>On parle euros, pas positions.</b></p>
        <div class="uc-tags">
          <span class="uc-tag">Looker Studio</span>
          <span class="uc-tag">Attribution GA4</span>
          <span class="uc-tag">Réunion mensuelle</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CAPABILITIES (dark) -->
<section class="caps">
  <div class="caps-grid-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:56px">
      <div class="left">
        <div class="eyebrow on-dark">— Livrables inclus</div>
        <h2 style="color:#fff">Tout ce qu'un SEO<br>sérieux doit couvrir,<br>dans chaque forfait.</h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.7)">
        SEO technique, performance, analytics, formulaires CRM, multilingue, A/B testing, RGPD&nbsp;: tout ce qu'on met par défaut dans chaque projet. Vous n'avez pas à nous demander — c'est inclus.
      </div>
    </div>

    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>Audit technique 200+ points</h4>
        <p>Crawl, indexation, vitesse, mobile, schema, logs server. Rapport priorisé impact/effort + specs dev.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <h4>Recherche sémantique large</h4>
        <p>500 à 1 500 mots-clés analysés : volume, difficulté, intention, saisonnalité, SERP features.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h10zM9 7h6M9 11h6M9 15h4"/></svg></div>
        <h4>Cartographie concurrentielle</h4>
        <p>Qui rank sur quoi, avec quels backlinks, quelle structure. On identifie les gaps exploitables.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l10 6-10 6L2 8z"/><path d="M2 16l10 6 10-6M2 12l10 6 10-6"/></svg></div>
        <h4>Architecture en cocons sémantiques</h4>
        <p>Silos thématiques, pages piliers, maillage interne optimisé. La fondation qui dure 3+ ans.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8"/></svg></div>
        <h4>Rédaction éditoriale experte</h4>
        <p>8 à 20 articles/mois rédigés par nos soins. IA pour structure, humain pour contenu, SEO pour optimisation.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h14"/></svg></div>
        <h4>Optimisation on-page</h4>
        <p>Titles, metas, Hx, internal links, schema, images ALT, core vitals. Page par page, pas en batch industriel.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg></div>
        <h4>Netlinking qualitatif</h4>
        <p>3 à 10 backlinks/mois sur domaines pertinents et autoritatifs. Partenariats, presse, placements thématiques.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h18M8 3h8a2 2 0 012 2v14H6V5a2 2 0 012-2zM12 11v4M10 13h4"/></svg></div>
        <h4>Relations presse &amp; citations</h4>
        <p>Placements dans la presse éco, bloggers vérifiés, interviews podcasts. Trust authority au-delà du DR.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>Stratégie E-E-A-T</h4>
        <p>Pages auteurs, schema Person/Article, sources citées, mentions externes. Critique depuis HCU 2023.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <h4>SEO local &amp; Google Business</h4>
        <p>Optimisation GBP, citations locales (Pages Jaunes, Yelp, Tripadvisor), pages villes authentiques.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg></div>
        <h4>Multilingue &amp; international</h4>
        <p>Structure hreflang, ciblage pays, adaptation SERP locales (Google.fr vs .de vs .es).</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg></div>
        <h4>Recherche &amp; gestion d'avis</h4>
        <p>Workflow avis clients automatisé (Google, Trustpilot). Trust signals qui boostent CTR SERP.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg></div>
        <h4>AI Overviews &amp; SGE-ready</h4>
        <p>Structuration contenu pour être cité par Google AI Overviews, Perplexity, Gemini. Le nouveau terrain 2025-2026.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3l4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"/></svg></div>
        <h4>Migration SEO sans perte</h4>
        <p>Plan de redirections 301 page à page, préservation des positions. 98 % des positions conservées sur nos migrations WordPress → Next.js.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20l9-16H3z"/><path d="M12 14v6M8 20h8"/></svg></div>
        <h4>CTR &amp; snippet optimization</h4>
        <p>Tests title/meta sur les pages #4-15 pour les remonter. +1,5 à +3 points de CTR régulièrement gagnés.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg></div>
        <h4>Schema.org &amp; rich snippets</h4>
        <p>Article, Organization, Breadcrumb, FAQ, Product, Review, LocalBusiness, VideoObject. Tout validé Search Console.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18l-2 14H5zM8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v5M14 11v5"/></svg></div>
        <h4>Content pruning &amp; rewrites</h4>
        <p>Identifier les pages qui tirent le site vers le bas. Suppression, fusion ou refonte. Méthode post-HCU.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg></div>
        <h4>Featured snippets &amp; position zéro</h4>
        <p>Structuration sémantique pour capturer les positions 0, People Also Ask, FAQ schema.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
        <h4>Data &amp; dashboard business</h4>
        <p>Looker Studio connecté Search Console + GA4 + CRM. Vue CA organique attribué, pas juste des courbes.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M10 13l2 2 4-4"/></svg></div>
        <h4>Reporting mensuel transparent</h4>
        <p>15-20 pages : KPIs, actions du mois, plan du mois suivant, FAQ. Pas un PDF automatique de Semrush.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h4>Veille algorithmique</h4>
        <p>Monitoring des updates Google. Si votre site est touché, diagnostic + plan d'ajustement inclus dans le forfait.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="process" id="process">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Notre process</div>
        <h2>Du diagnostic aux premiers<br>leads organiques, en 6 étapes.</h2>
      </div>
      <div class="right">
        Pas de « livrable fantôme » qui arrive après 3 mois. Chaque fin de mois = rapport business, point 1 h, plan du mois suivant. <b>Vous savez à tout moment où on en est.</b>
      </div>
    </div>

    <div class="proc-grid reveal reveal-d-1">
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 01</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="#6D28D9"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 010 20M2 12h20"/></svg></div>
        <h4>Audit &amp; stratégie</h4>
        <p>Audit technique + sémantique + concurrentiel. 500 à 1 500 mots-clés analysés. Restitution 2 h. Livrable&nbsp;: rapport 30-50 pages + roadmap 12 mois.</p>
        <div class="proc-dur">3 SEMAINES</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 02</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="#6D28D9"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="10"/></svg></div>
        <h4>Fondations techniques</h4>
        <p>Corrections critiques livrées en specs au dev interne (ou exécutées par nous). Setup tracking propre : Search Console, GA4, dashboard Looker Studio.</p>
        <div class="proc-dur">1–3 SEMAINES</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 03</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="#6D28D9"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div>
        <h4>Production éditoriale</h4>
        <p>Plan éditorial mensuel validé en avance. 8 à 20 contenus/mois rédigés et optimisés par nos soins. Process : brief → rédaction → SEO → validation → publication.</p>
        <div class="proc-dur">MENSUEL</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 04</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="#6D28D9"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg></div>
        <h4>Netlinking &amp; autorité</h4>
        <p>3 à 10 backlinks/mois sur domaines pertinents. Mix : partenariats, RP, contenu linkable, placements thématiques. Jamais de PBN ni de liens achetés en masse.</p>
        <div class="proc-dur">MENSUEL</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 05</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="#6D28D9"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
        <h4>Reporting business</h4>
        <p>Rapport mensuel 15-20 pages. Réunion 1 h avec votre consultant. Dashboard Looker accessible 24/7. <b>On parle CA organique, pas positions moyennes.</b></p>
        <div class="proc-dur">MENSUEL</div>
      </div>
    </div>
  </div>
</section>

<!-- STACK -->
<section class="stack">
  <div class="wrap">
    <div class="stack-grid">
      <div class="reveal">
        <div class="eyebrow">— Notre stack</div>
        <h2 style="margin-top:14px">Des outils pro,<br>pas des hacks.</h2>
        <p style="color:var(--mute);font-size:16px;margin-top:20px;max-width:480px">
          Outils pro utilisés au quotidien : <b>Ahrefs, Search Console, Screaming Frog, Looker Studio, Semji, Sistrix</b>. Pour le contenu : un workflow hybride <b>Claude Sonnet + rédacteur humain + relecteur SEO</b>. Côté netlinking : zéro outil d'automation douteux, tout en direct.
        </p>

        <div class="stack-list">
          <div class="sl-row">
            <div class="sl-cat">BACKEND</div>
            <div class="sl-val">Laravel 13 · PHP 8.4</div>
            <div class="sl-note">TYPED · TESTED</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">FRONTEND WEB</div>
            <div class="sl-val">React · Next.js · Livewire · Inertia · Tailwind</div>
            <div class="sl-note">SELON CAS</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">MOBILE</div>
            <div class="sl-val">React Native · Expo · iOS &amp; Android</div>
            <div class="sl-note">1 CODEBASE · 2 STORES</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">UI / BACK-OFFICE</div>
            <div class="sl-val">Tailwind CSS · Filament · Flux UI</div>
            <div class="sl-note">DESIGN SYSTEM</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">DATABASE</div>
            <div class="sl-val">PostgreSQL · MySQL · Redis</div>
            <div class="sl-note">SAUVEGARDES 15&nbsp;MIN</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">IA / LLM</div>
            <div class="sl-val">Claude Opus 4.7 · GPT-4o · Embeddings · Prism</div>
            <div class="sl-note">AGENTS TYPÉS</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">INFRA</div>
            <div class="sl-val">Laravel Cloud · Scaleway · Vercel · AWS</div>
            <div class="sl-note">DONNÉES EN FRANCE</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">OBSERVABILITÉ</div>
            <div class="sl-val">Sentry · Pulse · Horizon</div>
            <div class="sl-note">ALERTES 24/7</div>
          </div>
        </div>
      </div>

      <div class="stack-visual reveal reveal-d-2">
        <div class="stack-orbit">
          <div class="orbit-ring"></div>
          <div class="orbit-ring r2"></div>
          <div class="orbit-center">
            <div class="mark">HC<span class="dot">.</span></div>
          </div>
          <div class="orbit-node" style="top:2%;left:50%;transform:translateX(-50%)">
            <span class="nd" style="background:#FF2D20"></span>Laravel
          </div>
          <div class="orbit-node" style="top:22%;right:-10px">
            <span class="nd" style="background:#61DAFB"></span>React / Next
          </div>
          <div class="orbit-node" style="bottom:22%;right:-5px">
            <span class="nd" style="background:#38BDF8"></span>Tailwind
          </div>
          <div class="orbit-node" style="bottom:2%;left:50%;transform:translateX(-50%)">
            <span class="nd" style="background:#336791"></span>PostgreSQL
          </div>
          <div class="orbit-node" style="bottom:22%;left:-10px">
            <span class="nd" style="background:#61DAFB"></span>React Native
          </div>
          <div class="orbit-node" style="top:22%;left:-20px">
            <span class="nd" style="background:#0A0A0A"></span>Claude · GPT
          </div>
          <div class="orbit-node" style="top:50%;left:-14%;transform:translateY(-50%)">
            <span class="nd" style="background:#635BFF"></span>Stripe
          </div>
          <div class="orbit-node" style="top:50%;right:-14%;transform:translateY(-50%)">
            <span class="nd" style="background:#00B14F"></span>Postmark
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- RELATED CASES -->
<section class="scases">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ils ont choisi ce service</div>
        <h2>Des stratégies SEO<br>qui rapportent du CA.</h2>
      </div>
      <div class="right">
        <a href="/realisations" class="btn btn-ghost">Toutes les réalisations →</a>
      </div>
    </div>

    <div class="scase-grid">
      <a class="scase reveal" href="/realisations">
        <div class="scase-shot">
          <svg width="100%" height="100%" viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" style="background:#F5F5F5">
            <rect width="600" height="380" fill="#F5F5F5"/>
            <rect x="40" y="30" width="520" height="330" rx="10" fill="#fff" stroke="#E5E5E5"/>
            <rect x="40" y="30" width="110" height="330" fill="#FAFAFA" stroke="#E5E5E5"/>
            <text x="60" y="55" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">LMNP<tspan fill="#6D28D9">.AI</tspan></text>
            <rect x="55" y="80" width="80" height="6" rx="2" fill="#0A0A0A"/>
            <rect x="55" y="100" width="60" height="4" rx="2" fill="#d4d4d4"/>
            <rect x="55" y="115" width="70" height="4" rx="2" fill="#d4d4d4"/>
            <text x="175" y="60" font-family="Geist" font-weight="700" font-size="18" fill="#0A0A0A">Dashboard fiscal</text>
            <rect x="175" y="100" width="110" height="70" rx="6" fill="#F5F5F5"/>
            <text x="185" y="150" font-family="Geist" font-weight="700" font-size="22" fill="#0A0A0A">18 420€</text>
            <rect x="295" y="100" width="110" height="70" rx="6" fill="#EDE9FE"/>
            <text x="305" y="150" font-family="Geist" font-weight="700" font-size="22" fill="#0A0A0A">+4 210€</text>
            <rect x="415" y="100" width="125" height="70" rx="6" fill="#0A0A0A"/>
            <text x="425" y="150" font-family="Geist" font-weight="700" font-size="16" fill="#fff">Prête ✓</text>
            <rect x="175" y="185" width="365" height="150" rx="6" fill="#fff" stroke="#E5E5E5"/>
            <path d="M195 310 L235 290 L315 275 L395 260 L475 210 L515 215" stroke="#6D28D9" stroke-width="2.5" fill="none"/>
          </svg>
        </div>
        <div class="scase-body">
          <div class="scase-meta"><span>SaaS B2C</span><span class="tag-stack">Laravel · Livewire</span><span>— en production</span></div>
          <h3>LMNP.AI</h3>
          <p>Comptabilité fiscale automatisée pour loueurs meublés. Extraction de factures et génération de liasse 2031 par IA.</p>
          <div class="scase-metric">
            <div class="scm"><div class="n">6 000<span class="s">+</span></div><div class="l">Clients payants</div></div>
            <div class="scm"><div class="n">100<span class="s">%</span></div><div class="l">Growth organique</div></div>
          </div>
        </div>
      </a>

      <a class="scase reveal reveal-d-1" href="/realisations">
        <div class="scase-shot">
          <svg width="100%" height="100%" viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" style="background:#0A0A0A">
            <rect width="600" height="380" fill="#0A0A0A"/>
            <text x="40" y="60" font-family="Geist" font-weight="700" font-size="16" fill="#fff">Comptabilité<tspan fill="#6D28D9"> AI</tspan></text>
            <text x="40" y="80" font-family="Geist Mono" font-size="9" fill="#737373">bilan.2025.xlsx</text>
            <g font-family="Geist Mono" font-size="10">
              <rect x="40" y="100" width="520" height="22" fill="rgba(255,255,255,0.03)" rx="4"/>
              <text x="52" y="115" fill="#737373">2025-03-14</text>
              <text x="142" y="115" fill="#fff">HT Vente produit A</text>
              <text x="330" y="115" fill="#fff">707000</text>
              <text x="440" y="115" fill="#6D28D9">+ 14 800,00</text>
              <rect x="40" y="128" width="520" height="22" fill="rgba(255,255,255,0.03)" rx="4"/>
              <text x="52" y="143" fill="#737373">2025-03-14</text>
              <text x="142" y="143" fill="#fff">TVA collectée 20%</text>
              <text x="330" y="143" fill="#fff">445710</text>
              <text x="440" y="143" fill="#6D28D9">+ 2 960,00</text>
              <rect x="40" y="184" width="520" height="22" fill="rgba(109,40,217,0.1)" stroke="#6D28D9" stroke-width="0.5" rx="4"/>
              <text x="52" y="199" fill="#6D28D9">AI-SUGG</text>
              <text x="142" y="199" fill="#fff">Détection doublon avec écriture #1042</text>
            </g>
            <rect x="40" y="232" width="520" height="108" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
            <text x="54" y="254" font-family="Geist Mono" font-size="9" fill="#6D28D9">◆ BILAN AI · génération en cours</text>
            <rect x="54" y="268" width="360" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="54" y="268" width="280" height="4" rx="2" fill="#6D28D9"/>
          </svg>
        </div>
        <div class="scase-body">
          <div class="scase-meta"><span>SaaS B2B</span><span class="tag-stack">Laravel · Inertia</span><span>— levée en cours</span></div>
          <h3>Comptabilité AI</h3>
          <p>Comptabilité en partie double pour PME avec bilan automatisé par IA. Positionnement Blue Ocean.</p>
          <div class="scase-metric">
            <div class="scm"><div class="n">0<span class="s">→1</span></div><div class="l">Du MVP à la levée en 5 mois</div></div>
            <div class="scm"><div class="n">4</div><div class="l">Investisseurs confirmés</div></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Forfaits</div>
        <h2>Un audit pour commencer,<br>trois rythmes pour accélérer.</h2>
      </div>
      <div class="right">
        Tout est inclus dans le forfait&nbsp;: outils Ahrefs, contenus rédigés, netlinking, reporting, réunions.
        <b>Aucun rebilling caché.</b> Engagement 3 mois, puis reconductible mois par mois.
      </div>
    </div>

    <div class="price-grid">
      <div class="plan reveal">
        <div class="plan-tag">PORTE D'ENTRÉE</div>
        <h4>Audit SEO</h4>
        <div class="plan-sub">Audit technique + sémantique + concurrentiel + backlinks. Rapport 30-50 pages + roadmap 12 mois priorisée.</div>
        <div class="plan-price">
          <span class="amount">2 400 €</span>
          <span class="per">HT · one-shot</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit technique 200+ points</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>500 mots-clés analysés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Cartographie concurrentielle</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap 12 mois priorisée</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Restitution 2 h en visio</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg><b>Déduit du forfait si mission</b></li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Réserver l'audit</a></div>
      </div>

      <div class="plan reveal reveal-d-1">
        <div class="plan-tag">DÉMARRAGE</div>
        <h4>Fondations</h4>
        <div class="plan-sub">Pour PME avec site &lt; 5 000 visiteurs/mois qui veulent enfin se lancer sérieusement sur l'organique.</div>
        <div class="plan-price">
          <span class="amount">1 450 €</span>
          <span class="per">HT / mois</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>8 contenus/mois rédigés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>3 backlinks qualitatifs/mois</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Corrections techniques continues</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Reporting mensuel + réunion 1 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Consultant senior dédié</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement 3 mois min.</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Cadrer mon démarrage</a></div>
      </div>

      <div class="plan featured reveal reveal-d-2">
        <div class="plan-badge">LE PLUS CHOISI</div>
        <div class="plan-tag">SCALE</div>
        <h4>Croissance</h4>
        <div class="plan-sub">Pour PME 5 000-30 000 visiteurs/mois qui veulent accélérer. Pack idéal sur 6-12 mois pour générer leads qualifiés.</div>
        <div class="plan-price">
          <span class="amount">2 850 €</span>
          <span class="per">HT / mois</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>14 contenus/mois rédigés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>6 backlinks qualitatifs DR 40+</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Optimisation continue on-page</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Dashboard Looker business</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Consultant + rédacteur dédiés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tests CTR / snippet trimestriels</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement 3 mois min.</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer la croissance</a></div>
      </div>

      <div class="plan reveal reveal-d-3">
        <div class="plan-tag">PERFORMANCE</div>
        <h4>Premium</h4>
        <div class="plan-sub">Pour ETI ou SaaS en phase de scaling intense, ou récupération post-update Google (HCU, Core).</div>
        <div class="plan-price">
          <span class="amount">4 900 €</span>
          <span class="per">HT / mois</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>20+ contenus/mois full-funnel</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>10 backlinks top-tier + RP</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Stratégie SEO + E-E-A-T + AI Overviews</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Réunion bimensuelle + hotline</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Équipe dédiée 3 pers. (consultant + rédacteur + linker)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement 6 mois min.</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parler à un associé</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:44px;color:var(--mute);font-size:14px">
      <b style="color:var(--ink)">Tous les forfaits incluent</b> : outils Ahrefs / Search Console / Looker Studio · rédaction humaine · netlinking white-hat · reporting mensuel 15-20 pages · réunion avec consultant senior · <b style="color:var(--ink)">veille algorithmique et ajustements sans frais</b>.
    </p>
  </div>
</section>

<!-- FAQ -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ</div>
        <h2 style="margin-top:14px">Les 12 questions<br>qu'on nous pose<br>avant de signer.</h2>
        <p>Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. On répond sous 24 h ouvrées, par un consultant senior, sans détour.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">Combien de temps avant des résultats ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Premiers mouvements à 3 mois</b> (positions, impressions). <b>Trafic significatif à 6–9 mois</b>. <b>ROI business mesurable à 9–12 mois</b>. On pose des jalons mensuels pour que vous puissiez juger la trajectoire avant d'avoir les résultats finaux — et ajuster.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Est-ce que le SEO marche encore avec l'IA de Google (SGE, AI Overviews) ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Oui, et le trafic organique a même <b>augmenté</b> sur nos clients bien structurés en 2025. Les AI Overviews citent des sources&nbsp;: notre job est de faire que votre site soit <b>l'une de ces sources</b>. On optimise pour l'ère post-IA (E-E-A-T, contenu original, données propriétaires, structure claire).
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous garantissez des positions ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Non, et <b>personne de sérieux ne le fait</b> — Google l'interdit explicitement. Nous garantissons la méthode, la qualité des livrables, et des jalons intermédiaires (nouvelles pages indexées, impressions, backlinks acquis, positions en mouvement). Si à 4 mois la trajectoire n'est pas bonne, on adapte la stratégie gratuitement.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Si je ne suis pas satisfait au bout de 3 mois, je fais quoi ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Revue de pilotage à 3 mois. Si les jalons ne sont pas atteints, on ajuste la stratégie sans frais supplémentaire. L'engagement contractuel est <b>limité à 3 mois</b>, puis reconductible mois par mois avec <b>préavis de 30 jours</b>. Vous récupérez tous les contenus, accès et livrables.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous utilisez de l'IA pour rédiger ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Oui comme <b>outil d'assistance</b>. Non comme <b>générateur brut</b>. Nos contenus passent par 3 étapes&nbsp;: structure experte → rédaction hybride IA + humain → validation métier + SEO. Chaque contenu prend 4-8 h de travail humain. Le contenu IA brut se fait massacrer par HCU depuis 2023 — on ne joue pas avec ça.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Est-ce que je dois fournir le contenu ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Non, on écrit tout. On a besoin d'<b>1 h de votre temps par mois maximum</b> pour interview experte sur les sujets techniques / métier. Ça nous permet de garantir la profondeur et l'authenticité que Google attend depuis E-E-A-T. Si vous pouvez nous relier à un expert interne, encore mieux.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Comment vous mesurez le ROI ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Dashboard Looker Studio mensuel qui relie <b>trafic organique → conversions → leads qualifiés → CA attribuable</b>. Configuration GA4 + tracking formulaires + attribution incluse dans le forfait. Vous voyez l'euro de CA pour l'euro investi, chaque mois.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Qui va s'occuper concrètement de mon dossier ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Un consultant senior dédié + un rédacteur dédié</b>. Pas de rotation, pas de chargé de compte entre vous et les exécutants. Vous avez leur ligne directe, réponse sous 4 h ouvrées en semaine. Nous limitons à <b>15 clients actifs simultanément</b> pour garantir du temps par compte.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">C'est quoi la différence entre SEO et SEA (Google Ads) ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>SEA</b>&nbsp;: vous louez le trafic (0 clic quand vous arrêtez). <b>SEO</b>&nbsp;: vous possédez le trafic (il continue même sans dépense). Les deux sont complémentaires. Notre approche&nbsp;: construire l'organique pour <b>réduire votre dépendance au payant</b> d'ici 12–18 mois. Nos clients économisent en moyenne 8-25 k€/mois en Ads basculés vers l'organique.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Mon site a pris un coup de Google update, c'est récupérable ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>70 % des cas oui</b>, 30 % nécessitent de changer fondamentalement d'approche. On commence par un audit de récupération (inclus dans les forfaits Croissance / Premium) pour identifier la cause&nbsp;: contenu low-value, problèmes E-E-A-T, sur-optimisation, backlinks toxiques. Récupération partielle à 3-4 mois, stabilisation à 6-9 mois.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous faites du netlinking « acheté » ou du vrai ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Mix de <b>vrais placements rédactionnels</b> (presse éco, blogs spécialisés, médias verticaux) + partenariats + RP + contenu linkable. <b>Jamais de PBN, jamais de liens en masse sur plateformes douteuses</b>. Objectif&nbsp;: des liens qui tiennent 5 ans, pas 5 mois avant d'être désindexés par Google.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">C'est quoi exactement dans les 2 400 € de l'audit ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            3 semaines de travail&nbsp;: audit technique complet (200+ points), recherche sémantique (500 mots-clés), cartographie concurrentielle, analyse backlinks, audit E-E-A-T. Rapport écrit de 30-50 pages + roadmap 12 mois priorisée + restitution en visio 2 h. <b>Les 2 400 € sont déduits à 100 % du premier mois</b> si vous signez un accompagnement dans les 60 jours.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="scta">
  <div class="stats-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="eyebrow on-dark">— Prochaine étape</div>
    <h2 style="margin-top:18px">Un audit pour savoir<br>où on peut vous emmener.</h2>
    <p>30 min avec un consultant senior pour analyser votre situation, vous donner un avis franc, et — si ça matche — un plan d'action chiffré sous 48 h. <b>Sans engagement.</b></p>
    <div class="scta-cta">
      <a href="#contact" class="btn btn-accent btn-lg">
        📊 &nbsp;Réserver l'audit SEO offert
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a href="mailto:quentin@hagnere-patrimoine.fr" class="btn btn-ghost btn-lg" style="background:rgba(255,255,255,0.05);color:#fff;border-color:rgba(255,255,255,0.15)">
        Envoyer un email →
      </a>
    </div>
    <div class="scta-meta">AUDIT 30 MIN OFFERT · PAR UN CONSULTANT SENIOR · RAPPORT SOUS 48 H</div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <a href="/" class="brand" style="margin-bottom:16px">
          <div class="brand-mark">HC</div>
          <div class="brand-name"><b>Hagnéré</b> <span>Code</span></div>
        </a>
        <p>Agence de développement SaaS AI-native basée à Chambéry. Dev, design, SEO, ads, vidéo intégrée.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col">
          <h5>SERVICES</h5>
          <a href="/services/saas-applications-metier">Sites vitrines &amp; landing pages</a>
          <a href="/services/outils-internes-sur-mesure">Outils internes</a>
          <a href="/services/sites-vitrines">Sites vitrines</a>
          <a href="/services/referencement-google">SEO</a>
          <a href="/services/publicite-en-ligne">Publicité</a>
        </div>
        <div class="foot-col">
          <h5>STUDIO</h5>
          <a href="/methode">Méthode</a>
          <a href="/realisations">Réalisations</a>
          <a href="/equipe">Équipe</a>
          <a href="/tarifs">Tarifs</a>
        </div>
        <div class="foot-col">
          <h5>CONTACT</h5>
          <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
        <div class="foot-col">
          <h5>LÉGAL</h5>
          <a href="#">CGV</a>
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
        </div>
      </div>
    </div>
    <div class="foot-bot">
      <div>© 2026 HAGNÉRÉ CODE SAS · RCS Chambéry 993 672 856 · SIRET 993 672 856 00016 · TVA FR30 993 672 856 · NAF 62.01Z</div>
      <div>BUILT WITH LARAVEL + CLAUDE CODE</div>
    </div>
  </div>
</footer>

`;
