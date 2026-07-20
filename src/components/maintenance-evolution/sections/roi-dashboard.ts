export const roiDashboardHtml = `
<!-- SLA DASHBOARD M&E — dial uptime + 4 KPIs DORA + leviers -->
<section class="me-roi" id="sla">
  <div class="me-roi-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Exemple de tableau de service</div>
        <h2>Un SLA utile doit être<br>mesurable, attribuable<br>et adapté à la stack.</h2>
      </div>
      <div class="right">
        Les valeurs ci-dessous illustrent un niveau exigeant&nbsp;: elles ne constituent ni une moyenne client,
        ni une offre automatique. Le devis retient les indicateurs, sources, fenêtres de mesure, exclusions
        et conséquences compatibles avec votre architecture et votre budget.
      </div>
    </div>

    <!-- Dashboard principal -->
    <div class="me-roi-main reveal reveal-d-1">

      <!-- Dial card (gauche) -->
      <div class="me-roi-dial-card">
        <div class="me-roi-dial-head">
          <span class="me-roi-dial-k">UPTIME SLA</span>
          <span class="me-roi-dial-meta">Exemple à négocier</span>
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
            <span class="k">Cible mensuelle illustrative</span>
          </div>
        </div>

        <div class="me-roi-dial-foot">
          <span class="me-roi-dial-chip">Source à définir</span>
          <span class="me-roi-dial-chip">Exemple</span>
          <span class="me-roi-dial-chip">Au devis</span>
        </div>
      </div>

      <!-- 4 KPIs DORA (droite) -->
      <div class="me-roi-kpis">
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">&lt; 30<span>min</span></div>
          <div class="me-roi-kpi-k">MTTR incidents P1</div>
          <div class="me-roi-kpi-n">exemple de seuil · à dimensionner</div>
        </div>
        <div class="me-roi-kpi me-roi-kpi-hot">
          <div class="me-roi-kpi-delta">0<span>fenêtre</span></div>
          <div class="me-roi-kpi-k">Maintenance visible en production</div>
          <div class="me-roi-kpi-n">exemple de stratégie · selon architecture</div>
        </div>
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">&lt; 48h</div>
          <div class="me-roi-kpi-k">Patch CVE critique</div>
          <div class="me-roi-kpi-n">exemple de délai · selon exposition</div>
        </div>
        <div class="me-roi-kpi">
          <div class="me-roi-kpi-delta">&lt; 15<span>%</span></div>
          <div class="me-roi-kpi-k">Change failure rate</div>
          <div class="me-roi-kpi-n">indicateur DORA · cible à définir</div>
        </div>
      </div>

    </div>

    <!-- Comment on y arrive : 4 leviers -->
    <div class="me-roi-how reveal reveal-d-2">
      <div class="me-roi-how-head">
        <span class="me-roi-how-n">/ comment rendre ces objectifs crédibles</span>
        <h3>Pas de magie. 4 pratiques à<br>adapter à <b>chaque</b> contrat.</h3>
      </div>

      <div class="me-roi-how-grid">
        <div class="me-roi-step">
          <div class="me-roi-step-top">
            <span class="me-roi-step-n">01</span>
            <div class="me-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l3 3 4-8 4 12 3-5h4"/></svg>
            </div>
          </div>
          <h3>Monitoring proactif</h3>
          <p>Les outils et seuils compatibles avec votre stack sont branchés selon un planning convenu. L'objectif est de réduire le temps de détection, sans promettre qu'aucun client ne verra jamais un incident.</p>
          <div class="me-roi-step-foot">→ sources, seuils et canaux documentés</div>
        </div>

        <div class="me-roi-step">
          <div class="me-roi-step-top">
            <span class="me-roi-step-n">02</span>
            <div class="me-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            </div>
          </div>
          <h3>Patches sécurité automatisés</h3>
          <p>Dependabot + Snyk + GitGuardian en CI. Les mises à jour mineures sont <b>auto-merged</b> sous tests verts. Les majors passent en revue humaine avec tests.</p>
          <div class="me-roi-step-foot">→ délai cible défini selon criticité et dépendances</div>
        </div>

        <div class="me-roi-step">
          <div class="me-roi-step-top">
            <span class="me-roi-step-n">03</span>
            <div class="me-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
            </div>
          </div>
          <h3>Déploiements maîtrisés</h3>
          <p>Blue-green, migrations progressives, feature flags ou fenêtres planifiées sont choisis selon l'architecture et le risque de chaque livraison.</p>
          <div class="me-roi-step-foot">→ stratégie et rollback préparés</div>
        </div>

        <div class="me-roi-step">
          <div class="me-roi-step-top">
            <span class="me-roi-step-n">04</span>
            <div class="me-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
            </div>
          </div>
          <h3>Équipe et continuité explicites</h3>
          <p>Les intervenants, leur statut, leurs responsabilités et les modalités de remplacement sont identifiés dans le devis selon le dispositif.</p>
          <div class="me-roi-step-foot">→ continuité proportionnée au périmètre</div>
        </div>
      </div>

      <div class="me-roi-how-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Les objectifs affichés dans une proposition ne sont <b>ni des moyennes clients ni des garanties universelles</b>. Ils doivent être adaptés à la stack, mesurés par des outils identifiés et repris dans le contrat pour devenir opposables.
      </div>
    </div>
  </div>
</section>
`;
