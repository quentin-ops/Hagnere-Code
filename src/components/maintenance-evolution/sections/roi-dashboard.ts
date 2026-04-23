export const roiDashboardHtml = `
<!-- SLA DASHBOARD M&E — dial uptime + 4 KPIs DORA + leviers -->
<section class="me-roi" id="sla">
  <div class="me-roi-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on signe, mesuré</div>
        <h2>99,98 % d'uptime réel.<br>Les 4 métriques DORA qu'on<br>publie chaque trimestre.</h2>
      </div>
      <div class="right">
        Pas des engagements marketing vagues. Les chiffres mesurés sur nos 9 plus gros contrats
        TMA sur les 12 derniers mois, <b>auto-calculés via Better Stack + GitHub Actions</b>.
        Rapport trimestriel public sur votre Statuspage.
      </div>
    </div>

    <!-- Dashboard principal -->
    <div class="me-roi-main reveal reveal-d-1">

      <!-- Dial card (gauche) -->
      <div class="me-roi-dial-card">
        <div class="me-roi-dial-head">
          <span class="me-roi-dial-k">UPTIME SLA</span>
          <span class="me-roi-dial-meta">Médiane 9 contrats</span>
        </div>

        <!-- SVG arc gauge -->
        <div class="me-roi-dial">
          <svg viewBox="0 0 220 140" class="me-roi-dial-svg" aria-hidden="true">
            <!-- background arc -->
            <path d="M 20 120 A 90 90 0 0 1 200 120" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="14" stroke-linecap="round"/>
            <!-- active arc (99.98% of range 99-100 = ~98% of the arc) -->
            <path d="M 20 120 A 90 90 0 0 1 198 122" fill="none" stroke="url(#me-roi-grad)" stroke-width="14" stroke-linecap="round"/>
            <!-- gradient -->
            <defs>
              <linearGradient id="me-roi-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#10B981"/>
                <stop offset="60%" stop-color="#34D399"/>
                <stop offset="100%" stop-color="#6EE7B7"/>
              </linearGradient>
            </defs>
            <!-- ticks (percentile scale) -->
            <g class="me-roi-ticks">
              <text x="16" y="135" text-anchor="middle">99,0%</text>
              <text x="46" y="70" text-anchor="middle">99,5%</text>
              <text x="110" y="36" text-anchor="middle">99,9%</text>
              <text x="175" y="70" text-anchor="middle">99,99%</text>
              <text x="204" y="135" text-anchor="middle">100%</text>
            </g>
            <!-- needle dot -->
            <circle cx="198" cy="122" r="7" fill="#fff" stroke="#10B981" stroke-width="3"/>
          </svg>

          <div class="me-roi-dial-value">
            <span class="v">99,98<span style="font-size:0.5em;color:#6EE7B7;margin-left:2px">%</span></span>
            <span class="k">Uptime 12 mois</span>
          </div>
        </div>

        <div class="me-roi-dial-foot">
          <span class="me-roi-dial-chip">Better Stack</span>
          <span class="me-roi-dial-chip">Mesuré</span>
          <span class="me-roi-dial-chip">Public</span>
        </div>
      </div>

      <!-- 4 KPIs DORA (droite) -->
      <div class="me-roi-kpis">
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">23<span>min</span></div>
          <div class="me-roi-kpi-k">MTTR incidents P1</div>
          <div class="me-roi-kpi-n">cible &lt; 30 min · norme DORA elite</div>
        </div>
        <div class="me-roi-kpi me-roi-kpi-hot">
          <div class="me-roi-kpi-delta">14<span>/trim</span></div>
          <div class="me-roi-kpi-k">Fréquence de déploiement</div>
          <div class="me-roi-kpi-n">vs. 2-3 en TMA classique · DORA elite</div>
        </div>
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">&lt; 48h</div>
          <div class="me-roi-kpi-k">Patch CVE critique</div>
          <div class="me-roi-kpi-n">CVSS ≥ 7 · hotfix + déploiement ferme</div>
        </div>
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">8<span>%</span></div>
          <div class="me-roi-kpi-k">Change failure rate</div>
          <div class="me-roi-kpi-n">vs. norme DORA elite &lt; 15 %</div>
        </div>
      </div>

    </div>

    <!-- Comment on y arrive : 4 leviers -->
    <div class="me-roi-how reveal reveal-d-2">
      <div class="me-roi-how-head">
        <span class="me-roi-how-n">/ comment on tient ces chiffres</span>
        <h3>Pas de magie. 4 pratiques qu'on<br>applique sur <b>chaque</b> contrat.</h3>
      </div>

      <div class="me-roi-how-grid">
        <div class="me-roi-step">
          <div class="me-roi-step-top">
            <span class="me-roi-step-n">01</span>
            <div class="me-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l3 3 4-8 4 12 3-5h4"/></svg>
            </div>
          </div>
          <h4>Monitoring proactif &lt; 5 min</h4>
          <p>Sentry + Better Stack + Grafana branchés dès J+1. <b>On détecte l'incident avant vos clients</b>. Alertes Slack contextualisées, pas du bruit.</p>
          <div class="me-roi-step-foot">→ MTTD médian&nbsp;: 2-4 min</div>
        </div>

        <div class="me-roi-step">
          <div class="me-roi-step-top">
            <span class="me-roi-step-n">02</span>
            <div class="me-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
          </div>
          <h4>Patches sécurité automatisés</h4>
          <p>Dependabot + Snyk + GitGuardian en CI. Les mises à jour mineures sont <b>auto-merged</b> sous tests verts. Les majors passent en revue humaine avec tests.</p>
          <div class="me-roi-step-foot">→ 7 CVE patchés / mois en moyenne</div>
        </div>

        <div class="me-roi-step">
          <div class="me-roi-step-top">
            <span class="me-roi-step-n">03</span>
            <div class="me-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
            </div>
          </div>
          <h4>Deploys zero-downtime</h4>
          <p>Blue-green via Forge / Vercel, migrations Laravel en expand/migrate/contract, feature flags, rollback 1-clic. <b>Jamais de fenêtre de maintenance visible</b>.</p>
          <div class="me-roi-step-foot">→ 14 deploys/trim · 0 rollback en moyenne</div>
        </div>

        <div class="me-roi-step">
          <div class="me-roi-step-top">
            <span class="me-roi-step-n">04</span>
            <div class="me-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
            </div>
          </div>
          <h4>Équipe nommée · pas de pool tournant</h4>
          <p>2 à 4 personnes nommément identifiées dans votre contrat. <b>Binôme obligatoire</b> sur chaque projet (pas de bus factor = 1). Overlap 2 semaines si rotation.</p>
          <div class="me-roi-step-foot">→ ancienneté équipe moyenne&nbsp;: 4 ans</div>
        </div>
      </div>

      <div class="me-roi-how-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Chiffres mesurés sur nos 9 plus gros contrats TMA (Scale &amp; Premium) sur 12 mois glissants. Secteurs&nbsp;: SaaS B2B, e-commerce DTC, cabinets conseil, éditeurs. Apps de 10k à 200k MAU. <b>Méthodologie et accès aux dashboards en call sur demande</b>.
      </div>
    </div>
  </div>
</section>
`;
