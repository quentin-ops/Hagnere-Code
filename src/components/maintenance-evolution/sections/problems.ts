export const problemsHtml = `
<!-- PROBLEMS M&E -->
<section class="me-problems" id="problems">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Vous êtes probablement ici</div>
        <h2>Six situations qu'on entend<br>chaque semaine en call.</h2>
      </div>
      <div class="right">
        Aucune n'est honteuse. Toutes se règlent. Mais chaque semaine qui passe,
        <b>votre dette technique grossit, vos dépendances vieillissent, vos équipes perdent confiance en leur app</b>.
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
        <p>L'agence a facturé la version 1.0, puis plus personne ne répond sous 15 jours. Le freelance a pris un autre client plus rentable. <b>Vous êtes seul avec une app en prod et aucune équipe qui connaît le code.</b></p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Reprise + audit éclair · 5 jours · équipe nommée</span>
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
        <p>Un champ en plus, une règle métier qui change, une intégration CRM&nbsp;? <b>Nickel-and-diming au ticket Jira</b>, délais de 3 semaines, motivation des équipes métier à zéro. On n'ose plus demander.</p>
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
        <p>Composer / npm sans mises à jour depuis 18-24 mois. Laravel 9, Node 16, PHP 7.4. <b>Pas de Dependabot, pas de Snyk, pas de scan SAST</b>. Votre prochain audit SOC2 ou pentest client va hurler.</p>
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
        <p>Si votre freelance / CTO / lead dev tombe malade ou part demain, <b>personne ne peut prendre le relais en moins de 2 mois</b>. Code peu documenté, choix techniques dans la tête d'une personne. Fragilité critique à cacher au board.</p>
        <div class="sap-foot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Binôme obligatoire + docs vivantes + Loom onboarding</span>
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
        <h3>« On a 0 roadmap. Les évolutions dorment depuis 8 mois »</h3>
        <p>Des dizaines de tickets dans Notion, aucun shipped depuis mars. Le prestataire exécute sans proposer, <b>aucune vision à 3-6 mois</b>, aucun comité produit. Votre app stagne pendant que les concurrents sortent 2 features par trimestre.</p>
        <div class="sap-foot sap-foot-hot">
          <span class="sap-foot-k">Solution</span>
          <span class="sap-foot-v">Roadmap trimestrielle co-construite · 14 deploys/trim.</span>
        </div>
      </article>
    </div>
  </div>
</section>
`;
