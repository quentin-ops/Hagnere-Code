export const roiDashboardHtml = `
<!-- SLA DASHBOARD M&E — dial uptime + 4 KPIs DORA + leviers -->
<section class="me-roi" id="sla">
  <div class="me-roi-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on signe, noir sur blanc</div>
        <h2>SLA 99,95 % contractuel.<br>Les 4 métriques DORA qu'on<br>s'engage à publier.</h2>
      </div>
      <div class="right">
        Pas des engagements marketing vagues&nbsp;: des seuils écrits dans le contrat, calibrés sur le
        référentiel DORA et sur ce qu'on applique déjà à nos quatre produits maison.
        <b>Auto-calculés via Better Stack + GitHub Actions</b>, publiés chaque trimestre sur votre Statuspage.
      </div>
    </div>

    <!-- Dashboard principal -->
    <div class="me-roi-main reveal reveal-d-1">

      <!-- Dial card (gauche) -->
      <div class="me-roi-dial-card">
        <div class="me-roi-dial-head">
          <span class="me-roi-dial-k">UPTIME SLA</span>
          <span class="me-roi-dial-meta">Plancher contractuel</span>
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
              <text x="175" y="70" text-anchor="middle">99,95 %</text>
              <text x="204" y="135" text-anchor="middle">100%</text>
            </g>
            <!-- needle dot -->
            <circle cx="198" cy="122" r="7" fill="#fff" stroke="#10B981" stroke-width="3"/>
          </svg>

          <div class="me-roi-dial-value">
            <span class="v">99,95<span style="font-size:0.5em;color:#6EE7B7;margin-left:2px">%</span></span>
            <span class="k">Uptime mensuel engagé</span>
          </div>
        </div>

        <div class="me-roi-dial-foot">
          <span class="me-roi-dial-chip">Better Stack</span>
          <span class="me-roi-dial-chip">Contractuel</span>
          <span class="me-roi-dial-chip">Public</span>
        </div>
      </div>

      <!-- 4 KPIs DORA (droite) -->
      <div class="me-roi-kpis">
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">&lt; 30<span>min</span></div>
          <div class="me-roi-kpi-k">MTTR incidents P1</div>
          <div class="me-roi-kpi-n">seuil contractuel · norme DORA elite</div>
        </div>
        <div class="me-roi-kpi me-roi-kpi-hot">
          <div class="me-roi-kpi-delta">0<span>fenêtre</span></div>
          <div class="me-roi-kpi-k">Maintenance visible en production</div>
          <div class="me-roi-kpi-n">deploys blue-green · rollback 1-clic</div>
        </div>
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">&lt; 48h</div>
          <div class="me-roi-kpi-k">Patch CVE critique</div>
          <div class="me-roi-kpi-n">CVSS ≥ 7 · hotfix + déploiement ferme</div>
        </div>
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">&lt; 15<span>%</span></div>
          <div class="me-roi-kpi-k">Change failure rate</div>
          <div class="me-roi-kpi-n">cible contractuelle · norme DORA elite</div>
        </div>
      </div>

    </div>

    <!-- Comment on y arrive : 4 leviers -->
    <div class="me-roi-how reveal reveal-d-2">
      <div class="me-roi-how-head">
        <span class="me-roi-how-n">/ comment on tient ces engagements</span>
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
          <div class="me-roi-step-foot">→ détection automatique, jamais sur signalement</div>
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
          <div class="me-roi-step-foot">→ CVSS ≥ 7 patché sous 48 h, sans surcoût</div>
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
          <div class="me-roi-step-foot">→ aucune fenêtre de maintenance annoncée</div>
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
          <div class="me-roi-step-foot">→ 1 remplacement maximum sur 12 mois</div>
        </div>
      </div>

      <div class="me-roi-how-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Ces valeurs sont des <b>seuils contractuels, pas des moyennes constatées chez des clients</b>&nbsp;: Hagnéré Code n'a pas encore de client externe en TMA. Elles reprennent le référentiel DORA et le dispositif qu'on applique déjà à nos quatre produits maison (LMNP.AI, SCI-AI.app, Hagnéré Patrimoine, Hagnéré Investissement). Le calcul est automatisé dès J+1 et publié sur votre Statuspage. <b>Méthodologie détaillée en call sur demande</b>.
      </div>
    </div>
  </div>
</section>
`;
