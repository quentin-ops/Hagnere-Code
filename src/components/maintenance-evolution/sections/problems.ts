export const problemsHtml = `
<!-- PROBLEMS M&E -->
<section class="me-problems" id="problems">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Situations-types fictives</div>
        <h2>Six exemples pour préparer<br>un diagnostic de reprise.</h2>
      </div>
      <div class="right">
        Ces exemples sont fictifs et ne décrivent ni des clients réels ni une fréquence observée.
        Ils servent à repérer les accès, risques, dépendances et responsabilités à examiner.
      </div>
    </div>

    <div class="sap-grid">
      <!-- 01 · ABANDON POST-LIVRAISON -->
      <article class="sap-card reveal">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </div>
          <span class="sap-n">01</span>
        </div>
        <h3>« Mon prestataire a disparu après la release »</h3>
        <p>Le prestataire répond difficilement, la documentation est incomplète et aucune équipe de relais n'est identifiée. <b>La continuité doit être organisée à partir des accès et de l'état réel du code.</b></p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Diagnostic, calendrier et équipe au devis</span>
        </div>
      </article>

      <!-- 02 · FACTURATION TICKET -->
      <article class="sap-card reveal reveal-d-1">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h3"/></svg>
          </div>
          <span class="sap-n">02</span>
        </div>
        <h3>« Chaque évolution = devis d'avenant surprise »</h3>
        <p>Un champ, une règle métier ou une intégration peuvent déclencher des avenants imprévus si le contrat ne prévoit pas la gestion du backlog. <b>Capacité, priorité et procédure de changement doivent être écrites.</b></p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Forfait mensuel fixe · backlog trimestriel partagé</span>
        </div>
      </article>

      <!-- 03 · DÉPENDANCES / CVE -->
      <article class="sap-card reveal reveal-d-2">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg>
          </div>
          <span class="sap-n">03</span>
        </div>
        <h3>« Mes dépendances ont 2 ans, je ne dors plus sur les CVE »</h3>
        <p>Des dépendances anciennes, des versions non supportées et l'absence de suivi automatisé peuvent augmenter le risque. <b>Le diagnostic vérifie versions, exposition, contrôles existants et exigences du référentiel visé.</b></p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Plan de remédiation priorisé · délais par criticité</span>
        </div>
      </article>

      <!-- 04 · BUS FACTOR = 1 -->
      <article class="sap-card reveal">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
          </div>
          <span class="sap-n">04</span>
        </div>
        <h3>« Un seul dev connaît le projet · bus factor = 1 »</h3>
        <p>Lorsqu'une seule personne connaît le projet, son indisponibilité peut retarder la reprise. <b>Documentation, droits d'accès, recouvrement et modalités de remplacement</b> doivent être évalués sans promettre un délai universel.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Relais, documentation et recouvrement au devis</span>
        </div>
      </article>

      <!-- 05 · INCIDENTS AVEUGLES -->
      <article class="sap-card reveal reveal-d-1">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-4 10-9 12-5-2-9-6-9-12V6l9-3 9 3z"/><path d="M12 8v4M12 16h.01"/></svg>
          </div>
          <span class="sap-n">05</span>
        </div>
        <h3>« On découvre les downtimes par nos clients »</h3>
        <p>Pas de Sentry, pas de Better Stack, pas de Statuspage. Vos users voient l'erreur 500 <b>avant vous</b>. Support débordé, confiance qui s'effrite, post-mortems absents. Le CTO passe le lundi matin à gérer la crise de vendredi soir.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Surveillance, seuils, canaux et délai cible cadrés</span>
        </div>
      </article>

      <!-- 06 · PAS DE ROADMAP -->
      <article class="sap-card reveal reveal-d-2">
        <div class="sap-card-top">
          <div class="sap-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l4-4v3h14v2H7v3z"/><circle cx="21" cy="12" r="1.5"/></svg>
          </div>
          <span class="sap-n">06</span>
        </div>
        <h3>« La roadmap n'est pas arbitrée et les évolutions s'accumulent »</h3>
        <p>Des tickets existent sans responsable, horizon ni critères de priorité. <b>Une revue partagée doit relier capacité, risque, valeur métier et décisions</b>, selon un rythme convenu.</p>
        <div class="sap-foot sap-foot-hot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Roadmap, capacité et cadence définies au devis</span>
        </div>
      </article>
    </div>
  </div>
</section>
`;
