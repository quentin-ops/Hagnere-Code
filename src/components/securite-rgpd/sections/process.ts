export const processHtml = `
<!-- PROCESS · trio cadrage / DPO mensuel / remédiation -->
<section class="sr-proc" id="audit">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Comment on travaille ensemble</div>
        <h2>Le trio<br><em>conformité &amp; code</em>.</h2>
      </div>
      <div class="right">
        Trois moments distincts, trois facturations distinctes, zéro confusion. <b>Cadrage</b> en forfait fixe.
        <b>DPO</b> en abonnement mensuel. <b>Remédiation</b> en sprint dev quand c'est nécessaire.
        Vous voyez où va chaque euro.
      </div>
    </div>

    <div class="sr-proc-grid">

      <!-- Phase 01 · cadrage -->
      <article class="sr-proc-card reveal">
        <div class="sr-proc-rail">
          <div class="sr-proc-rail-num">01</div>
          <div class="sr-proc-rail-line" aria-hidden="true"></div>
        </div>
        <div class="sr-proc-body">
          <div class="sr-proc-tag">CADRAGE · FORFAIT FIXE</div>
          <h3>2-4 semaines pour <em>tout cartographier</em>.</h3>
          <p>
            On part de votre stack et on remonte jusqu'au registre. Sous-traitants, transferts, traitements,
            systèmes IA, surface d'attaque applicative. À la fin, vous avez <b>un plan d'action priorisé,
            chiffré, défendable</b> face à la CNIL.
          </p>
          <ul class="sr-proc-deliv">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Cartographie sous-traitants + flux de données</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Gap analysis RGPD / AI Act / NIS2 / DORA</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit applicatif (boîte grise) + revue infra</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Plan d'action priorisé + chiffrage remédiation</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Restitution 90 min visio + rapport 25-40 p.</li>
          </ul>
          <div class="sr-proc-cost">
            <div class="sr-proc-cost-k">Forfait à partir de</div>
            <div class="sr-proc-cost-v">5 000 € HT</div>
            <div class="sr-proc-cost-note">déduit à 100 % du DPO mensuel si signature sous 60 j</div>
          </div>
        </div>
      </article>

      <!-- Phase 02 · DPO mensuel -->
      <article class="sr-proc-card sr-proc-card-recurring reveal reveal-d-1">
        <div class="sr-proc-rail">
          <div class="sr-proc-rail-num">02</div>
          <div class="sr-proc-rail-line" aria-hidden="true"></div>
        </div>
        <div class="sr-proc-body">
          <div class="sr-proc-tag sr-proc-tag-recurring">DPO MENSUEL · ABONNEMENT</div>
          <h3>Une équipe DPO + tech<br>sur <em>toute l'année</em>.</h3>
          <p>
            Vous nous nommez DPO externe auprès de la CNIL. On suit la veille (AI Act, NIS2, sanctions),
            on relit chaque nouvelle feature avant prod, on mène les AIPD, on est le point de contact en cas
            de plainte ou contrôle. <b>Pas de TJM aveugle.</b>
          </p>
          <ul class="sr-proc-deliv">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Désignation officielle CNIL</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Revue mensuelle 1 h + livrable structuré</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>1 à 4 AIPD / an + revues features IA illimitées (Scale)</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Veille AI Act / DORA / NIS2 / CRA</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Slack dédié, SLA 4 h ouvrées sur incidents</li>
          </ul>
          <div class="sr-proc-cost">
            <div class="sr-proc-cost-k">Abonnement</div>
            <div class="sr-proc-cost-v">1 200 - 3 500 € / mois</div>
            <div class="sr-proc-cost-note">selon nombre de salariés et systèmes IA · engagement 12 mois</div>
          </div>
        </div>
      </article>

      <!-- Phase 03 · remédiation codée (avec visuel PR) -->
      <article class="sr-proc-card sr-proc-card-build sr-proc-card-wide reveal reveal-d-2">
        <div class="sr-proc-rail">
          <div class="sr-proc-rail-num">03</div>
        </div>
        <div class="sr-proc-body">
          <div class="sr-proc-tag sr-proc-tag-build">REMÉDIATION CODÉE · SPRINT DEV</div>
          <h3>Nos devs corrigent<br>dans <em>votre code</em>.</h3>
          <p>
            Là où Lexing pond un PDF et Wavestone laisse un rapport, nous on rentre dans votre repo.
            Chiffrement, logs, IAM, gestion des consentements, anonymisation, pipeline SAST/DAST, policies
            cloud — codés, testés, mergés. <b>Sprint Hagnéré standard, à votre cadence.</b>
          </p>

          <!-- PR MOCK -->
          <div class="sr-pr-mock">
            <div class="sr-pr-mock-head">
              <svg class="sr-pr-mock-ic" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/>
                <path d="M6 9v6M18 15V9a3 3 0 00-3-3h-4"/>
              </svg>
              <span class="sr-pr-mock-branch">feat/ai-act-logs</span>
              <span class="sr-pr-mock-arrow">→</span>
              <span class="sr-pr-mock-branch sr-pr-mock-branch-main">main</span>
              <span class="sr-pr-mock-status">OPEN</span>
            </div>
            <div class="sr-pr-mock-title">
              <b>feat(ai-act):</b> structured logs on every model inference + human override
              <span class="sr-pr-mock-sha">#427 · hagnere-code</span>
            </div>
            <div class="sr-pr-mock-diff">
              <div class="sr-pr-mock-line sr-pr-mock-line-file"><span class="sr-pr-mock-file">apps/api/src/ai/inference.service.ts</span></div>
              <div class="sr-pr-mock-line sr-pr-mock-line-context"><span class="sr-pr-mock-gutter">+12</span>async runInference(input: ScoringInput) {</div>
              <div class="sr-pr-mock-line sr-pr-mock-line-add"><span class="sr-pr-mock-gutter">+13</span>+ <span class="sr-pr-mock-hl">const decisionId = uuid();</span></div>
              <div class="sr-pr-mock-line sr-pr-mock-line-add"><span class="sr-pr-mock-gutter">+14</span>+ <span class="sr-pr-mock-hl">await this.aiAuditLog.record({ decisionId, input, model, version });</span></div>
              <div class="sr-pr-mock-line sr-pr-mock-line-context"><span class="sr-pr-mock-gutter">+15</span>  const result = await this.model.score(input);</div>
              <div class="sr-pr-mock-line sr-pr-mock-line-add"><span class="sr-pr-mock-gutter">+16</span>+ <span class="sr-pr-mock-hl">await this.aiAuditLog.attachResult(decisionId, result);</span></div>
              <div class="sr-pr-mock-line sr-pr-mock-line-add"><span class="sr-pr-mock-gutter">+17</span>+ <span class="sr-pr-mock-hl">if (result.score &gt; THRESHOLD) return this.humanReview.queue(decisionId);</span></div>
              <div class="sr-pr-mock-line sr-pr-mock-line-context"><span class="sr-pr-mock-gutter">+18</span>  return result;</div>
              <div class="sr-pr-mock-line sr-pr-mock-line-context"><span class="sr-pr-mock-gutter">+19</span>}</div>
            </div>
            <div class="sr-pr-mock-foot">
              <span class="sr-pr-mock-check">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
                ci · tests passed (47/47)
              </span>
              <span class="sr-pr-mock-check">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
                snyk · 0 vuln
              </span>
              <span class="sr-pr-mock-check sr-pr-mock-check-pending">
                <span class="sr-pr-mock-spinner"></span>
                review · 1 pending
              </span>
            </div>
          </div>

          <ul class="sr-proc-deliv">
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>PR ouvertes sur votre repo Git</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tests de non-régression sur chaque correction</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Pair-programming avec vos devs (transfert)</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Ré-audit gratuit en fin de sprint</li>
            <li><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Documentation technique livrée</li>
          </ul>
          <div class="sr-proc-cost">
            <div class="sr-proc-cost-k">Sprint dev</div>
            <div class="sr-proc-cost-v">Forfait par lot</div>
            <div class="sr-proc-cost-note">potentiellement éligible CIR sur la part R&amp;D · à valider avec votre expert-comptable</div>
          </div>
        </div>
      </article>

    </div>

    <!-- Bottom rail timeline -->
    <div class="sr-proc-rail-bottom reveal">
      <div class="sr-proc-rail-axis">
        <span class="sr-proc-rail-tick" style="left: 0%"><span>J+0</span></span>
        <span class="sr-proc-rail-tick" style="left: 25%"><span>J+14</span></span>
        <span class="sr-proc-rail-tick" style="left: 50%"><span>J+30</span></span>
        <span class="sr-proc-rail-tick" style="left: 75%"><span>J+90</span></span>
        <span class="sr-proc-rail-tick" style="left: 100%"><span>continu</span></span>
      </div>
      <div class="sr-proc-rail-bands">
        <span class="sr-proc-rail-band sr-proc-rail-band-1">CADRAGE</span>
        <span class="sr-proc-rail-band sr-proc-rail-band-2">DPO MENSUEL · CONTINU</span>
        <span class="sr-proc-rail-band sr-proc-rail-band-3">REMÉDIATION · SPRINTS À LA DEMANDE</span>
      </div>
    </div>
  </div>
</section>
`;
