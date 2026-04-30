export const timelineHtml = `
<!-- TIMELINE PROCESS SEMAINE PAR SEMAINE -->
<section class="oi-timeline">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qui se passe, semaine par semaine</div>
        <h2>De la signature à la mise en prod,<br>en 6 semaines types.</h2>
      </div>
      <div class="right">
        Un projet Pro typique. On contractualise les dates au kickoff, avec pénalité de retard
        écrite dès <b>J+7</b> après la date annoncée. Les jalons ci-dessous sont des points
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
          <p>Repo Git chez vous. SSO Azure AD / Active Directory en place. Modèle de données validé avec votre DAF. Environnement de staging accessible à vos référents.</p>
          <ul class="oi-tl-deliv">
            <li>Repo Git livré</li>
            <li>SSO fonctionnel</li>
            <li>Staging URL</li>
            <li>1er demo call</li>
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
          <p>Mise en production. Monitoring actif 7 jours. Standby associé pour incidents J+1 à J+7. Garantie 30 jours puis forfait maintenance optionnel (290 €/mois).</p>
          <ul class="oi-tl-deliv">
            <li>Go live signé</li>
            <li>Monitoring</li>
            <li>Runbook remis</li>
            <li>Garantie 30j</li>
          </ul>
        </div>
      </div>

      <div class="oi-tl-step oi-tl-step-future reveal reveal-d-2">
        <div class="oi-tl-dot oi-tl-dot-future"></div>
        <div class="oi-tl-week">J+30 &amp; J+90</div>
        <div class="oi-tl-phase">Q&amp;A ADOPTION — INCLUS AU FORFAIT</div>
        <div class="oi-tl-body">
          <p>Sessions retour d'expérience avec vos équipes. Mesure du temps réellement gagné. Ajustements gratuits sur les irritants restants. Pas un support payant.</p>
          <ul class="oi-tl-deliv">
            <li>Session J+30</li>
            <li>Session J+90</li>
            <li>KPIs adoption</li>
            <li>Ajustements inclus</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="oi-tl-foot reveal">
      <div class="oi-tl-foot-k">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        Chaque date est contractualisée
      </div>
      <div class="oi-tl-foot-v">
        Au cadrage, on fixe la date de livraison dans le contrat — avec <b>pénalité de 7 % du forfait
        par semaine de retard</b> au-delà de J+14. On tient nos dates sur la quasi-totalité de nos projets,
        et on le paie quand on ne tient pas.
      </div>
    </div>
  </div>
</section>
`;
