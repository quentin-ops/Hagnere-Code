export const deriskHtml = `
<!-- DE-RISK 4 PEURS DSI / OPS -->
<section class="oi-derisk">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Les quatre peurs qui bloquent un projet interne</div>
        <h2>On les nomme.<br>On y répond par écrit.</h2>
      </div>
      <div class="right">
        À chaque Audit processus, on entend les mêmes quatre peurs — de la part du DSI,
        du DAF ou du dirigeant. On les traite frontalement, avec des <b>engagements contractuels</b>,
        pas des slogans.
      </div>
    </div>

    <div class="oi-derisk-grid">
      <!-- Peur 1 -->
      <div class="oi-derisk-card reveal">
        <div class="oi-derisk-num">/ 01</div>
        <div class="oi-derisk-fear">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          « Mes équipes ne l'utiliseront pas. »
        </div>
        <h3>Adoption pilotée dès la semaine 1.</h3>
        <p>
          On identifie <b>3 à 4 utilisateurs finaux référents</b> au kickoff. On les interviewe,
          on co-design avec eux, on teste chaque sprint avec eux. À la livraison : formation sur site,
          vidéo Loom, guide PDF, super-users formés. Sessions Q&amp;A <b>incluses à J+30 et J+90</b>
          pour mesurer l'adoption réelle et ajuster.
        </p>
        <div class="oi-derisk-proof">
          <span>✓ Référents au kickoff</span>
          <span>✓ Formation sur site</span>
          <span>✓ J+30 &amp; J+90 inclus</span>
        </div>
      </div>

      <!-- Peur 2 -->
      <div class="oi-derisk-card reveal reveal-d-1">
        <div class="oi-derisk-num">/ 02</div>
        <div class="oi-derisk-fear">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          « On va dépendre de vous à vie. »
        </div>
        <h3>Code chez vous J+1 · stack standard · zéro lock-in.</h3>
        <p>
          Repo Git sur <b>votre organisation dès J+1</b>. Stack 100 % standard (Laravel, React,
          PostgreSQL), documentation technique, runbook d'exploitation, Docker compose livré.
          Votre DSI interne ou n'importe quelle autre ESN française peut reprendre le code
          demain — aucun royalties, aucune licence propriétaire, aucune clé cachée.
        </p>
        <div class="oi-derisk-proof">
          <span>✓ Git chez vous J+1</span>
          <span>✓ Stack standard</span>
          <span>✓ Reprise possible</span>
        </div>
      </div>

      <!-- Peur 3 -->
      <div class="oi-derisk-card reveal reveal-d-2">
        <div class="oi-derisk-num">/ 03</div>
        <div class="oi-derisk-fear">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          « Ça va casser notre Sage / notre ERP. »
        </div>
        <h3>On se branche en lecture seule d'abord.</h3>
        <p>
          Premier sprint : <b>API en lecture seule</b> sur votre Sage / Cegid / EBP, avec les
          identifiants d'un compte technique dédié et isolé. On valide la cartographie des
          données <b>avant</b> toute écriture. Les écritures se font via webhook ou fichier
          d'échange, jamais en direct sur la base de production. Rollback en un clic.
        </p>
        <div class="oi-derisk-proof">
          <span>✓ Read-only d'abord</span>
          <span>✓ Compte technique isolé</span>
          <span>✓ Rollback 1 clic</span>
        </div>
      </div>

      <!-- Peur 4 -->
      <div class="oi-derisk-card reveal reveal-d-3">
        <div class="oi-derisk-num">/ 04</div>
        <div class="oi-derisk-fear">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          « Le RGPD / la conformité, on n'est pas sûr. »
        </div>
        <h3>RGPD by design · DPA signé · DPO interne.</h3>
        <p>
          <b>DPA fourni et signé</b> dès le devis. Registre des traitements à jour, sous-traitants
          documentés (OVH, Scaleway, Anthropic, OpenAI). Gestion des droits (accès, rectification,
          suppression) de série. Données hébergées <b>en France</b> par défaut, chiffrement AES-256.
          Notre DPO interne répond aux demandes de votre DPO ou juriste sous 48 h.
        </p>
        <div class="oi-derisk-proof">
          <span>✓ DPA signé</span>
          <span>✓ Données France</span>
          <span>✓ DPO interne dispo</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
