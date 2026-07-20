export const timelineHtml = `
<!-- TIMELINE PROCESS SEMAINE PAR SEMAINE -->
<section class="oi-timeline">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qui se passe, semaine par semaine</div>
        <h2>De la signature à la mise en prod,<br>un déroulé illustratif.</h2>
      </div>
      <div class="right">
        Exemple de séquencement, sans engagement de délai. Le devis contractualise les dates, les dépendances, les causes de report
        et les éventuelles conséquences d'un retard. Les jalons ci-dessous sont des points
        vérifiables par votre chef de projet — pas des slogans.
      </div>
    </div>

    <div class="oi-tl-rail reveal">
      <div class="oi-tl-track"></div>

      <div class="oi-tl-step reveal">
        <div class="oi-tl-dot"></div>
        <div class="oi-tl-week">SEMAINE 0</div>
        <div class="oi-tl-phase">CADRAGE &amp; AUDIT TERRAIN</div>
        <div class="oi-tl-body">
          <p>Interviews de 3–5 utilisateurs finaux. Observation du quotidien, captures d'écran des Excel et SaaS actuels. Cartographie Figma du workflow cible.</p>
          <ul class="oi-tl-deliv">
            <li>Roadmap datée</li>
            <li>Maquettes clés</li>
            <li>Liste intégrations</li>
            <li>Contrat + DPA signés</li>
          </ul>
        </div>
      </div>

      <div class="oi-tl-step reveal reveal-d-1">
        <div class="oi-tl-dot"></div>
        <div class="oi-tl-week">SEMAINE 1</div>
        <div class="oi-tl-phase">SOCLE TECHNIQUE + SSO</div>
        <div class="oi-tl-body">
          <p>Dépôt et accès selon le devis. Le SSO, le modèle de données et l'environnement de staging sont mis en place lorsqu'ils figurent dans le périmètre.</p>
          <ul class="oi-tl-deliv">
            <li>Dépôt configuré</li>
            <li>SSO si prévu</li>
            <li>Staging si prévu</li>
            <li>Revue planifiée</li>
          </ul>
        </div>
      </div>

      <div class="oi-tl-step reveal reveal-d-2">
        <div class="oi-tl-dot"></div>
        <div class="oi-tl-week">SEMAINE 2–3</div>
        <div class="oi-tl-phase">CŒUR MÉTIER + CONNECTEURS</div>
        <div class="oi-tl-body">
          <p>Écrans principaux (CRUD, listes, dashboards). Intégrations Sage / Pennylane / Cegid en lecture seule d'abord. Vos référents testent chaque sprint.</p>
          <ul class="oi-tl-deliv">
            <li>8–12 écrans</li>
            <li>Connecteurs read</li>
            <li>Permissions RBAC</li>
            <li>Audit log actif</li>
          </ul>
        </div>
      </div>

      <div class="oi-tl-step reveal reveal-d-3">
        <div class="oi-tl-dot oi-tl-dot-ai"></div>
        <div class="oi-tl-week">SEMAINE 3–4</div>
        <div class="oi-tl-phase">AGENTS IA + AUTOMATISATIONS</div>
        <div class="oi-tl-body">
          <p>Extraction IA (factures, documents), relances auto, alertes. Écritures sur Sage / Pennylane en post-validation humaine. Migration des données Excel historiques.</p>
          <ul class="oi-tl-deliv">
            <li>1–2 agents IA</li>
            <li>Workflows cron</li>
            <li>Écritures ERP</li>
            <li>Import Excel</li>
          </ul>
        </div>
      </div>

      <div class="oi-tl-step reveal">
        <div class="oi-tl-dot"></div>
        <div class="oi-tl-week">SEMAINE 5</div>
        <div class="oi-tl-phase">UAT + FORMATION ÉQUIPE</div>
        <div class="oi-tl-body">
          <p>Test final par 3–5 utilisateurs finaux. Corrections last-mile. Formation sur site (1 journée), enregistrement Loom, guide PDF remis à tous.</p>
          <ul class="oi-tl-deliv">
            <li>UAT signée</li>
            <li>Formation site</li>
            <li>Vidéo Loom 10 min</li>
            <li>Guide PDF</li>
          </ul>
        </div>
      </div>

      <div class="oi-tl-step reveal reveal-d-1">
        <div class="oi-tl-dot oi-tl-dot-done"></div>
        <div class="oi-tl-week">SEMAINE 6</div>
        <div class="oi-tl-phase">GO LIVE · PRODUCTION</div>
        <div class="oi-tl-body">
          <p>Mise en production, surveillance, support de lancement et période de correction selon la couverture et les délais inscrits au devis.</p>
          <ul class="oi-tl-deliv">
            <li>Go live signé</li>
            <li>Monitoring</li>
            <li>Runbook remis</li>
            <li>Correction au devis</li>
          </ul>
        </div>
      </div>

      <div class="oi-tl-step oi-tl-step-future reveal reveal-d-2">
        <div class="oi-tl-dot oi-tl-dot-future"></div>
        <div class="oi-tl-week">J+30 &amp; J+90</div>
        <div class="oi-tl-phase">Q&amp;A ADOPTION — SI PRÉVU AU DEVIS</div>
        <div class="oi-tl-body">
          <p>Sessions de retour d'expérience, mesure des usages et traitement des irritants selon la couverture prévue au devis.</p>
          <ul class="oi-tl-deliv">
            <li>Session J+30</li>
            <li>Session J+90</li>
            <li>KPIs adoption</li>
            <li>Couverture au devis</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="oi-tl-foot reveal">
      <div class="oi-tl-foot-k">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        Les dates du projet sont contractualisées
      </div>
      <div class="oi-tl-foot-v">
        Le contrat fixe le calendrier, les dépendances client et le traitement d'un retard.
        Une pénalité ou remise ne s'applique que si elle figure dans le document signé.
      </div>
    </div>
  </div>
</section>
`;
