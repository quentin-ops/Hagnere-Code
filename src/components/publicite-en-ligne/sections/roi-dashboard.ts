export const roiDashboardHtml = `
<!-- ROI / ROAS DASHBOARD — dial + KPIs + comment on y arrive -->
<section class="ads-roi" id="roi">
  <div class="ads-roi-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que vous gagnez, mesuré</div>
        <h2>×4,2 de ROAS blended<br>à 9 mois. Vérifié côté CRM.</h2>
      </div>
      <div class="right">
        Pas un ROAS auto-reporté par Meta ou Google Ads. Un ROAS <b>blended multi-canaux</b>, dédupé côté serveur, réconcilié avec les deals signés dans votre CRM. Médiane des 9 dernières missions Scale et Premium.
      </div>
    </div>

    <!-- Dashboard principal -->
    <div class="ads-roi-main reveal reveal-d-1">

      <!-- Dial card (gauche) -->
      <div class="ads-roi-dial-card">
        <div class="ads-roi-dial-head">
          <span class="ads-roi-dial-k">ROAS BLENDED</span>
          <span class="ads-roi-dial-meta">Médiane 9 missions</span>
        </div>

        <!-- SVG arc gauge -->
        <div class="ads-roi-dial">
          <svg viewBox="0 0 220 140" class="ads-roi-dial-svg" aria-hidden="true">
            <!-- background arc -->
            <path d="M 20 120 A 90 90 0 0 1 200 120" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="14" stroke-linecap="round"/>
            <!-- active arc (0 to 4.2x out of 6x = 70%) -->
            <path d="M 20 120 A 90 90 0 0 1 173 43" fill="none" stroke="url(#roi-grad)" stroke-width="14" stroke-linecap="round"/>
            <!-- gradient -->
            <defs>
              <linearGradient id="roi-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#8B5CF6"/>
                <stop offset="60%" stop-color="#A78BFA"/>
                <stop offset="100%" stop-color="#C4B5FD"/>
              </linearGradient>
            </defs>
            <!-- ticks -->
            <g class="ads-roi-ticks">
              <text x="16" y="135" text-anchor="middle">0</text>
              <text x="46" y="70" text-anchor="middle">1×</text>
              <text x="110" y="36" text-anchor="middle">3×</text>
              <text x="175" y="70" text-anchor="middle">5×</text>
              <text x="204" y="135" text-anchor="middle">6×</text>
            </g>
            <!-- needle dot -->
            <circle cx="173" cy="43" r="7" fill="#fff" stroke="#8B5CF6" stroke-width="3"/>
          </svg>

          <div class="ads-roi-dial-value">
            <span class="v">×4,2</span>
            <span class="k">ROAS blended</span>
          </div>
        </div>

        <div class="ads-roi-dial-foot">
          <span class="ads-roi-dial-chip">CRM-attribué</span>
          <span class="ads-roi-dial-chip">Dédupé</span>
          <span class="ads-roi-dial-chip">Multi-canaux</span>
        </div>
      </div>

      <!-- 4 KPIs (droite) -->
      <div class="ads-roi-kpis">
        <div class="ads-roi-kpi">
          <div class="ads-roi-kpi-delta">÷ 2,1</div>
          <div class="ads-roi-kpi-k">Coût d'acquisition client</div>
          <div class="ads-roi-kpi-n">vs. setup client-side avec agence au %</div>
        </div>
        <div class="ads-roi-kpi">
          <div class="ads-roi-kpi-delta">&lt; 90 j</div>
          <div class="ads-roi-kpi-k">Payback media buy</div>
          <div class="ads-roi-kpi-n">vs. 6–12 mois typique sans attribution CRM</div>
        </div>
        <div class="ads-roi-kpi ads-roi-kpi-hot">
          <div class="ads-roi-kpi-delta">+ 42<span>%</span></div>
          <div class="ads-roi-kpi-k">Signaux de conversion</div>
          <div class="ads-roi-kpi-n">récupérés via GTM SS + CAPI + EC</div>
        </div>
        <div class="ads-roi-kpi">
          <div class="ads-roi-kpi-delta">− 25<span>%</span></div>
          <div class="ads-roi-kpi-k">Spend inutile coupé</div>
          <div class="ads-roi-kpi-n">search terms pourris, PMax brand, redundant placements</div>
        </div>
      </div>

    </div>

    <!-- Comment on y arrive : 4 leviers -->
    <div class="ads-roi-how reveal reveal-d-2">
      <div class="ads-roi-how-head">
        <span class="ads-roi-how-n">/ comment on y arrive</span>
        <h3>Pas de miracle, 4 leviers qu'on<br>active dans les 60 premiers jours.</h3>
      </div>

      <div class="ads-roi-how-grid">
        <div class="ads-roi-step">
          <div class="ads-roi-step-top">
            <span class="ads-roi-step-n">01</span>
            <div class="ads-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
          </div>
          <h4>Tracking server-side réparé</h4>
          <p>Les algos Google et Meta reçoivent enfin du signal propre, dédupé. Ils optimisent sur <b>les clients réels</b>, pas sur les form submits bruts.</p>
          <div class="ads-roi-step-foot">→ Gain typique&nbsp;: +15 à +30 % de ROAS apparent</div>
        </div>

        <div class="ads-roi-step">
          <div class="ads-roi-step-top">
            <span class="ads-roi-step-n">02</span>
            <div class="ads-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/></svg>
            </div>
          </div>
          <h4>Boucle CRM en temps réel</h4>
          <p>Les stages MQL → SQL → won remontent dans Ads via webhook. <b>Vous arrêtez d'optimiser sur les clics</b>, vous optimisez sur les deals signés.</p>
          <div class="ads-roi-step-foot">→ Gain typique&nbsp;: CAC divisé par 1,8 à 2,5</div>
        </div>

        <div class="ads-roi-step">
          <div class="ads-roi-step-top">
            <span class="ads-roi-step-n">03</span>
            <div class="ads-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h3"/></svg>
            </div>
          </div>
          <h4>Creative cadencé 8–12 / mois</h4>
          <p>Fini la creative qui tourne 6 mois et fatigue. Nouveau batch chaque mois, tests par hooks / angles / offres. <b>Le ROAS tient dans la durée.</b></p>
          <div class="ads-roi-step-foot">→ Gain typique&nbsp;: +20 % de durée de vie par ad set</div>
        </div>

        <div class="ads-roi-step">
          <div class="ads-roi-step-top">
            <span class="ads-roi-step-n">04</span>
            <div class="ads-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
            </div>
          </div>
          <h4>Budget allocation hebdo</h4>
          <p>Revue chaque lundi&nbsp;: pauses, scaling, bascules entre canaux. Budget suit la perf, pas l'inertie. <b>Documenté dans Notion, pas dans un chat oublié.</b></p>
          <div class="ads-roi-step-foot">→ Gain typique&nbsp;: –20 à –30 % de spend inutile</div>
        </div>
      </div>

      <div class="ads-roi-how-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Chiffres issus de 9 missions Scale &amp; Premium · 2024-2026. Budget media médian&nbsp;: 22 k€/mois. Secteurs&nbsp;: SaaS B2B, e-commerce DTC, formation pro, services. Les chiffres bruts de chaque mission sont partagés en call sous NDA.
      </div>
    </div>
  </div>
</section>
`;
