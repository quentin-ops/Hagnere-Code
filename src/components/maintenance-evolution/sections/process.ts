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
        Le diagnostic détermine la durée d'intégration réaliste. <b>Le devis fixe les jalons d'onboarding</b>,
        puis le contrat précise le rythme de run, les responsabilités, la durée et les revues.
      </div>
    </div>

    <!-- PHASE 1 : ONBOARDING -->
    <div class="me-proc-phase reveal">
      <div class="me-proc-phase-head" data-phase="setup">
        <span class="me-proc-phase-k">PHASE 01 · ONBOARDING</span>
        <span class="me-proc-phase-d">Calendrier au devis</span>
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
        <h3>Audit flash &amp; diagnostic</h3>
        <p>Revue du code, de l'infrastructure, de la sécurité, des dépendances, sauvegardes et outils existants. Le format du rapport, les intervenants et le plan de remédiation sont précisés au devis.</p>
        <div class="me-proc-step-foot">Charge et délai confirmés après inventaire</div>
      </article>

      <article class="me-proc-step" data-phase="setup">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">02</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          </div>
        </div>
        <h3>Prise de contrôle accès</h3>
        <p>GitHub, comptes cloud, DNS, Stripe, Intercom, secrets et IAM sont inventoriés avant toute bascule. <b>Titularité, droits, licences et transfert après paiement</b> suivent le devis et les CGV.</p>
        <div class="me-proc-step-foot">Protocole de bascule et retour arrière validé</div>
      </article>

      <article class="me-proc-step" data-phase="setup">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">03</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l3 3 4-8 4 12 3-5h4"/></svg>
          </div>
        </div>
        <h3>Branchement observability</h3>
        <p>Sentry, Better Stack, Grafana, Axiom, PagerDuty ou leurs équivalents sont sélectionnés selon la stack. Seuils, canaux, accès, licences et couverture sont calibrés au périmètre retenu.</p>
        <div class="me-proc-step-foot">Outils et jalon de mise en service au devis</div>
      </article>

      <article class="me-proc-step" data-phase="setup">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">04</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l3-3 3 3M3 12l4-4 5 5 5-5 4 4"/></svg>
          </div>
        </div>
        <h3>Backlog &amp; roadmap initiale</h3>
        <p>Linear, Notion ou l'outil convenu reprend les tickets existants. L'horizon de roadmap, les critères de priorité et le premier comité sont définis avec les responsables nommés.</p>
        <div class="me-proc-step-foot">Horizon et date de revue convenus</div>
      </article>
    </div>

    <!-- PHASE 2 : RUN -->
    <div class="me-proc-phase reveal">
      <div class="me-proc-phase-head" data-phase="launch">
        <span class="me-proc-phase-k">PHASE 02 · RUN</span>
        <span class="me-proc-phase-d">Après validation de l'onboarding</span>
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
        <h3>Sprint maintenance + évolutions</h3>
        <p>Le rythme de revue, de livraison et de maintenance est défini avec votre équipe. Bugs, évolutions et refactorings suivent des files et critères distincts, sans afficher de moyenne client inexistante.</p>
        <div class="me-proc-step-foot">Rythme et capacité définis au devis</div>
      </article>

      <article class="me-proc-step" data-phase="launch">
        <div class="me-proc-step-top">
          <span class="me-proc-step-n">06</span>
          <div class="me-proc-step-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 4v4M16 4v4"/></svg>
          </div>
        </div>
        <h3>Rituels mensuels &amp; reporting</h3>
        <p>Le devis fixe le rythme de comité, le format du rapport, les destinataires et le délai d'un éventuel post-mortem. Les alertes et décisions restent traçables entre deux revues.</p>
        <div class="me-proc-step-foot">Rythme · format · destinataires au devis</div>
      </article>
    </div>

    <!-- PHASE 3 : SCALE -->
    <div class="me-proc-phase reveal">
      <div class="me-proc-phase-head" data-phase="pilot">
        <span class="me-proc-phase-k">PHASE 03 · SCALE &amp; RÉVISION</span>
        <span class="me-proc-phase-d">Périodicité contractuelle</span>
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
          <h3>Revue trimestrielle, scaling, révision annuelle</h3>
          <p>Les indicateurs DORA, la sécurité, la capacité et la roadmap sont revus selon la périodicité convenue. Le contrat précise aussi les conditions de révision du forfait, de renouvellement, de sortie et de passation.</p>
          <div class="me-proc-step-wide-grid">
            <div class="me-proc-step-wide-item">
              <span class="me-proc-step-wide-k">Rythme opérationnel</span>
              <span class="me-proc-step-wide-v">Priorités et canal convenus</span>
            </div>
            <div class="me-proc-step-wide-item">
              <span class="me-proc-step-wide-k">Comité de service</span>
              <span class="me-proc-step-wide-v">Date, durée et rapport au devis</span>
            </div>
            <div class="me-proc-step-wide-item">
              <span class="me-proc-step-wide-k">Revue de performance</span>
              <span class="me-proc-step-wide-v">Indicateurs et décisions traçables</span>
            </div>
            <div class="me-proc-step-wide-item">
              <span class="me-proc-step-wide-k">Revue contractuelle</span>
              <span class="me-proc-step-wide-v">Renouvellement, sortie et passation</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
`;
