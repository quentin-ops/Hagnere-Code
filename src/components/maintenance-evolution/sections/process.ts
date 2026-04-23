export const processHtml = `
<!-- PROCESS M&E — 7 étapes, 3 phases (onboarding / run / scale) -->
<section class="me-proc" id="process">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Notre process</div>
        <h2>De la prise en main à la<br>relation long-terme, en 7 étapes.</h2>
      </div>
      <div class="right">
        Pas d'intégration de 3 mois avant de commencer à produire. <b>Onboarding en 4 semaines</b>,
        puis rythme hebdo tenu pendant 3, 5, 10 ans. Trois phases claires, sept étapes, jalons documentés.
      </div>
    </div>

    <!-- PHASE 1 : ONBOARDING -->
    <div class="me-proc-phase reveal">
      <div class="me-proc-phase-head" data-phase="setup">
        <span class="me-proc-phase-k">PHASE 01 · ONBOARDING</span>
        <span class="me-proc-phase-d">Jour -5 → Semaine 4</span>
        <span class="me-proc-phase-n">4 étapes</span>
      </div>
    </div>
    <div class="me-proc-grid reveal reveal-d-1">
      <article class="me-proc-step" data-phase="setup">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">01</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
        </div>
        <h4>Audit flash &amp; diagnostic</h4>
        <p>Revue code, infra, sécurité, dépendances, backups, monitoring existant. Livrable&nbsp;: rapport 15-25 pages + plan de remédiation priorisé impact/effort.</p>
        <div class="me-proc-step-foot">J-5 → J+5 · 2 devs full-time</div>
      </article>

      <article class="me-proc-step" data-phase="setup">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">02</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          </div>
        </div>
        <h4>Prise de contrôle accès</h4>
        <p>Bascule GitHub org, comptes cloud, DNS, Stripe, Intercom. Rotation des secrets, revue IAM. <b>Tout reste en propriété client</b> — on devient admin, pas propriétaire.</p>
        <div class="me-proc-step-foot">Semaine 1 → 2 · sans coupure</div>
      </article>

      <article class="me-proc-step" data-phase="setup">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">03</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l3 3 4-8 4 12 3-5h4"/></svg>
          </div>
        </div>
        <h4>Branchement observability</h4>
        <p>Sentry, Better Stack, Grafana, Axiom, PagerDuty installés et calibrés. Statuspage publique mise en ligne. Premier dashboard health opérationnel.</p>
        <div class="me-proc-step-foot">Semaine 2 → 3 · alerte Slack live</div>
      </article>

      <article class="me-proc-step" data-phase="setup">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">04</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l3-3 3 3M3 12l4-4 5 5 5-5 4 4"/></svg>
          </div>
        </div>
        <h4>Backlog &amp; roadmap initiale</h4>
        <p>Linear ou Notion ouvert, reprise des tickets Jira / Asana existants, priorisation ensemble. Roadmap 90 jours co-construite, OKRs tech alignés.</p>
        <div class="me-proc-step-foot">Semaine 3 → 4 · comité J+30 calé</div>
      </article>
    </div>

    <!-- PHASE 2 : RUN -->
    <div class="me-proc-phase reveal">
      <div class="me-proc-phase-head" data-phase="launch">
        <span class="me-proc-phase-k">PHASE 02 · RUN</span>
        <span class="me-proc-phase-d">Mois 2 → permanent</span>
        <span class="me-proc-phase-n">2 étapes</span>
      </div>
    </div>
    <div class="me-proc-grid me-proc-grid-2 reveal reveal-d-1">
      <article class="me-proc-step" data-phase="launch">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">05</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
          </div>
        </div>
        <h4>Sprint maintenance + évolutions</h4>
        <p>Rythme hebdomadaire&nbsp;: standup Slack lundi, ship mid-week, revue vendredi. Bugs critiques en hotfix, features dans les sprints, refactos ciblés en continu. <b>14 deploys/trimestre en moyenne</b>.</p>
        <div class="me-proc-step-foot">Rythme hebdo · 52 sprints/an</div>
      </article>

      <article class="me-proc-step" data-phase="launch">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">06</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 4v4M16 4v4"/></svg>
          </div>
        </div>
        <h4>Rituels mensuels &amp; reporting</h4>
        <p>Comité produit/tech 1 h le 5 de chaque mois avec votre équipe. Rapport mensuel business-ready (PDF board-ready). Incidents post-mortem sous 72 h, sans blame. <b>Vous ne découvrez jamais une dérive en fin de trimestre</b>.</p>
        <div class="me-proc-step-foot">Le 5 du mois · 1 h · rapport 15-20 p.</div>
      </article>
    </div>

    <!-- PHASE 3 : SCALE -->
    <div class="me-proc-phase reveal">
      <div class="me-proc-phase-head" data-phase="pilot">
        <span class="me-proc-phase-k">PHASE 03 · SCALE &amp; RÉVISION</span>
        <span class="me-proc-phase-d">Trimestriel + annuel</span>
        <span class="me-proc-phase-n">1 étape en continu</span>
      </div>
    </div>
    <div class="me-proc-grid me-proc-grid-1 reveal reveal-d-1">
      <article class="me-proc-step me-proc-step-wide" data-phase="pilot">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">07</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
          </div>
        </div>
        <div class="me-proc-step-wide-body">
          <h4>Revue trimestrielle, scaling, révision annuelle</h4>
          <p>Tous les 3 mois&nbsp;: revue DORA (uptime, MTTR, deploy freq, CFR), ajustement de forfait si scaling, revue sécurité. Tous les 12 mois&nbsp;: <b>revue stratégique produit</b> avec vos décideurs. <b>La relation se renégocie explicitement chaque année</b> — pas par défaut silencieux.</p>
          <div class="me-proc-step-wide-grid">
            <div class="me-proc-step-wide-item">
              <span class="me-proc-step-wide-k">Chaque lundi</span>
              <span class="me-proc-step-wide-v">Standup Slack · priorités de la semaine</span>
            </div>
            <div class="me-proc-step-wide-item">
              <span class="me-proc-step-wide-k">Le 5 du mois</span>
              <span class="me-proc-step-wide-v">Comité 1 h · rapport mensuel</span>
            </div>
            <div class="me-proc-step-wide-item">
              <span class="me-proc-step-wide-k">Fin trimestre</span>
              <span class="me-proc-step-wide-v">Revue DORA · ajustement forfait</span>
            </div>
            <div class="me-proc-step-wide-item">
              <span class="me-proc-step-wide-k">Annuel</span>
              <span class="me-proc-step-wide-v">Revue stratégique · renégociation</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
`;
