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
        80 % des projets outils internes qu'on prend entrent dans l'une de ces trois situations.
        Cliquez sur la vôtre : les livrables, l'équipe, la durée et le prix indicatif s'ajustent.
      </div>
    </div>

    <div class="oi-scen-tabs reveal" role="tablist">
      <button type="button" class="oi-scen-tab" data-scenario="excel" role="tab" aria-selected="true">
        <span class="oi-scen-tab-k">SCÉNARIO 01</span>
        <span class="oi-scen-tab-t">Sortir d'Excel</span>
        <span class="oi-scen-tab-d">2–5 semaines</span>
      </button>
      <button type="button" class="oi-scen-tab" data-scenario="saas" role="tab" aria-selected="false">
        <span class="oi-scen-tab-k">SCÉNARIO 02</span>
        <span class="oi-scen-tab-t">Remplacer un SaaS</span>
        <span class="oi-scen-tab-d">4–8 semaines</span>
      </button>
      <button type="button" class="oi-scen-tab" data-scenario="paper" role="tab" aria-selected="false">
        <span class="oi-scen-tab-k">SCÉNARIO 03</span>
        <span class="oi-scen-tab-t">Digitaliser papier / email</span>
        <span class="oi-scen-tab-d">5–10 semaines</span>
      </button>
    </div>

    <!-- PANEL EXCEL -->
    <div class="oi-scen-panel" data-panel="excel" role="tabpanel" aria-hidden="false">
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
            <h4>Ce qu'on livre</h4>
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
        <aside class="oi-scen-aside">
          <div class="oi-scen-meta">
            <div class="oi-scen-meta-row"><span class="k">Durée</span><span class="v">2 à 5 semaines</span></div>
            <div class="oi-scen-meta-row"><span class="k">Équipe</span><span class="v">1 associé + 1 dev</span></div>
            <div class="oi-scen-meta-row"><span class="k">Prix indicatif</span><span class="v">8 à 25 k€ forfait</span></div>
            <div class="oi-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 10 jours</span></div>
            <div class="oi-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit processus 1j · 990 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent oi-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="oi-scen-ref">Référence : suivi-clients + relances auto pour un cabinet comptable — 12 h/sem. économisées dès la semaine 3.</div>
        </aside>
      </div>
    </div>

    <!-- PANEL SAAS -->
    <div class="oi-scen-panel" data-panel="saas" role="tabpanel" aria-hidden="true" hidden>
      <div class="oi-scen-cols">
        <div class="oi-scen-col-main">
          <div class="oi-scen-kind">POUR QUI</div>
          <h3>ETI qui paye un SaaS<br>qui ne colle pas (vraiment).</h3>
          <p>
            Vous avez Salesforce, HubSpot, Monday ou un SaaS vertical qui coûte <b>800 à 3 000 €/mois</b>
            mais qui force vos équipes à entrer des données qu'elles ne comprennent pas, ou qui ne
            sait pas parler à votre Sage. Vous gagneriez plus à construire ce qui <b>vous</b> correspond.
          </p>
          <div class="oi-scen-deliv">
            <h4>Ce qu'on livre</h4>
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
        <aside class="oi-scen-aside">
          <div class="oi-scen-meta">
            <div class="oi-scen-meta-row"><span class="k">Durée</span><span class="v">4 à 8 semaines</span></div>
            <div class="oi-scen-meta-row"><span class="k">Équipe</span><span class="v">1 associé + 2 devs + 1 designer</span></div>
            <div class="oi-scen-meta-row"><span class="k">Prix indicatif</span><span class="v">25 à 60 k€ forfait</span></div>
            <div class="oi-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 3 semaines</span></div>
            <div class="oi-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit processus 1j · 990 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent oi-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="oi-scen-ref">Typique : 2 200 €/mois de licences SaaS remplacées par un outil sur-mesure ROI 9 mois.</div>
        </aside>
      </div>
    </div>

    <!-- PANEL PAPER -->
    <div class="oi-scen-panel" data-panel="paper" role="tabpanel" aria-hidden="true" hidden>
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
            <h4>Ce qu'on livre</h4>
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
        <aside class="oi-scen-aside">
          <div class="oi-scen-meta">
            <div class="oi-scen-meta-row"><span class="k">Durée</span><span class="v">5 à 10 semaines</span></div>
            <div class="oi-scen-meta-row"><span class="k">Équipe</span><span class="v">1 associé + 2 devs + 1 mobile + 1 IA</span></div>
            <div class="oi-scen-meta-row"><span class="k">Prix indicatif</span><span class="v">40 à 120 k€ forfait</span></div>
            <div class="oi-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 3 à 4 semaines</span></div>
            <div class="oi-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit processus 1j sur site · 990 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent oi-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="oi-scen-ref">Typique : PME BTP 40 pers. — app terrain + extraction factures IA, ROI 11 mois.</div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
