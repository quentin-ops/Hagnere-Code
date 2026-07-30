export const scenariosHtml = `
<!-- SCÉNARIOS PROJET (interactive toggle) -->
<section class="oi-scenarios" data-active="excel">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Quelle est votre situation ?</div>
        <h2>Trois cas de départ,<br>trois chemins clairs.</h2>
      </div>
      <div class="right">
        Ces trois situations couvrent des points de départ fréquents.
        Cliquez sur la vôtre : les livrables possibles et les éléments à cadrer s'ajustent.
      </div>
    </div>

    <div class="oi-scen-tabs reveal" role="tablist" aria-label="Choisir un scénario">
      <button type="button" class="oi-scen-tab" data-scenario="excel" role="tab" aria-selected="true" id="oi-scenario-tab-excel" aria-controls="oi-scenario-panel-excel" tabindex="0">
        <span class="oi-scen-tab-k">SCÉNARIO 01</span>
        <span class="oi-scen-tab-t">Sortir d'Excel</span>
        <span class="oi-scen-tab-d">Planning sur devis</span>
      </button>
      <button type="button" class="oi-scen-tab" data-scenario="saas" role="tab" aria-selected="false" id="oi-scenario-tab-saas" aria-controls="oi-scenario-panel-saas" tabindex="-1">
        <span class="oi-scen-tab-k">SCÉNARIO 02</span>
        <span class="oi-scen-tab-t">Remplacer un SaaS</span>
        <span class="oi-scen-tab-d">Planning sur devis</span>
      </button>
      <button type="button" class="oi-scen-tab" data-scenario="paper" role="tab" aria-selected="false" id="oi-scenario-tab-paper" aria-controls="oi-scenario-panel-paper" tabindex="-1">
        <span class="oi-scen-tab-k">SCÉNARIO 03</span>
        <span class="oi-scen-tab-t">Digitaliser papier / email</span>
        <span class="oi-scen-tab-d">Planning sur devis</span>
      </button>
    </div>

    <!-- PANEL EXCEL -->
    <div class="oi-scen-panel" data-panel="excel" role="tabpanel" tabindex="0" aria-hidden="false" id="oi-scenario-panel-excel" aria-labelledby="oi-scenario-tab-excel">
      <div class="oi-scen-cols">
        <div class="oi-scen-col-main">
          <div class="oi-scen-kind">POUR QUI</div>
          <h3>PME 10–50 personnes.<br>Excel partagé qui sature.</h3>
          <p>
            Vous avez un <b>Suivi-Clients-v47-FINAL.xlsx</b> ouvert par 8 personnes simultanément,
            des formules qui sautent, des erreurs silencieuses, des post-it "ne pas toucher à la colonne D".
            L'information existe déjà — elle est juste dans des fichiers au lieu d'être dans un vrai outil.
          </p>
          <div class="oi-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>App web qui reprend vos 3–5 fichiers Excel clés</li>
              <li>Import propre des données existantes</li>
              <li>Permissions par utilisateur / équipe</li>
              <li>SSO Azure AD / Google Workspace</li>
              <li>1 automatisation IA ciblée (relances, extraction)</li>
              <li>Formation équipe + Loom vidéo + guide PDF</li>
            </ul>
          </div>
        </div>
        <div class="oi-scen-aside">
          <div class="oi-scen-meta">
            <div class="oi-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Intervenants</span><span class="v">Définis au devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Démarrage</span><span class="v">Selon disponibilité</span></div>
            <div class="oi-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit processus 1j · 990 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent oi-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="oi-scen-ref">
            À mesurer : temps de ressaisie, erreurs, délais de relance et adoption avant / après pilote.
            Avant de comparer les propositions, <a href="/guides/choisir-prestataire-application-metier">soumettez les candidats au même cas métier</a>.
            <a href="/guides/securite-application-metier">Avant la mise en service, vérifiez que le socle de sécurité est prouvé et testé.</a>
          </div>
        </div>
      </div>
    </div>

    <!-- PANEL SAAS -->
    <div class="oi-scen-panel" data-panel="saas" role="tabpanel" tabindex="0" aria-hidden="true" id="oi-scenario-panel-saas" aria-labelledby="oi-scenario-tab-saas" hidden>
      <div class="oi-scen-cols">
        <div class="oi-scen-col-main">
          <div class="oi-scen-kind">POUR QUI</div>
          <h3>ETI qui paye un SaaS<br>qui ne colle pas (vraiment).</h3>
          <p>
            Vous avez Salesforce, HubSpot, Monday ou un SaaS vertical qui coûte <b>800 à 3 000 €/mois</b>
            mais qui force vos équipes à entrer des données qu'elles ne comprennent pas, ou qui ne
            sait pas parler à votre Sage. Comparez alors le coût total du maintien, du paramétrage,
            du remplacement et de la sortie avant de choisir du sur-mesure.
          </p>
          <div class="oi-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>Outil métier calibré sur vos vrais process</li>
              <li>Migration des données depuis l'ancien SaaS (via API)</li>
              <li>Intégrations natives Sage / Cegid / Pennylane</li>
              <li>SSO enterprise + permissions fines</li>
              <li>Dashboards DAF / commercial / ops</li>
              <li>Change management : sessions J+30 et J+90 incluses</li>
            </ul>
          </div>
        </div>
        <div class="oi-scen-aside">
          <div class="oi-scen-meta">
            <div class="oi-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Intervenants</span><span class="v">Définis au devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Démarrage</span><span class="v">Selon disponibilité</span></div>
            <div class="oi-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit processus 1j · 990 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent oi-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="oi-scen-ref">
            À comparer : licences, migration, maintenance, formation, réversibilité et coût total sur trois ans.
            Si le remplacement est retenu, <a href="/guides/migrer-logiciel-metier-sans-interruption">préparez une bascule réversible</a>.
          </div>
        </div>
      </div>
    </div>

    <!-- PANEL PAPER -->
    <div class="oi-scen-panel" data-panel="paper" role="tabpanel" tabindex="0" aria-hidden="true" id="oi-scenario-panel-paper" aria-labelledby="oi-scenario-tab-paper" hidden>
      <div class="oi-scen-cols">
        <div class="oi-scen-col-main">
          <div class="oi-scen-kind">POUR QUI</div>
          <h3>Industrie, BTP, terrain :<br>process 100 % papier ou email.</h3>
          <p>
            Vos opérateurs remplissent des fiches papier que quelqu'un ressaisit dans Excel.
            Vos chefs de chantier envoient des comptes-rendus par email. Vos fournisseurs envoient
            des factures PDF que votre compta traite à la main. L'outil existe dans votre tête —
            il faut juste le coder.
          </p>
          <div class="oi-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>App web + app mobile compagnon (React Native)</li>
              <li>Saisie terrain hors ligne (mode offline first)</li>
              <li>Scan QR code, photo, signature tactile</li>
              <li>Extraction IA des factures / bons / fiches</li>
              <li>Intégration au Sage / Cegid / ERP existant</li>
              <li>Dashboard temps réel pour la direction</li>
            </ul>
          </div>
        </div>
        <div class="oi-scen-aside">
          <div class="oi-scen-meta">
            <div class="oi-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Intervenants</span><span class="v">Définis au devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="oi-scen-meta-row"><span class="k">Démarrage</span><span class="v">Selon disponibilité</span></div>
            <div class="oi-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit processus 1j sur site · 990 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent oi-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="oi-scen-ref">
            À tester : saisie hors ligne, qualité d'extraction, reprise sur erreur et usage réel sur le terrain.
            Avant la livraison, <a href="/guides/plan-recette-application-metier">préparez des cas de recette rejouables</a>.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
