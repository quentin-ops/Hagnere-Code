export const techFaqHtml = `
<!-- TECH FAQ M&E — pour CTO / DPO / lead devs -->
<section class="at-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions qu'un CTO<br>ou un DPO nous pose en call.</h2>
      </div>
      <div class="right">
        Huit questions techniques qu'on entend systématiquement de la part des CTO, lead devs
        ou DPO qui évaluent notre TMA. Réponses directes, sans bullshit.
      </div>
    </div>

    <div class="at-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Comment vous gérez les migrations de base en production ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Migrations versionnées + review en pair</b> avant merge. Déploiement
          <b>zero-downtime</b> (expand / migrate / contract) pour les schémas sensibles.
          Pour les très grosses tables, on utilise <b>pt-online-schema-change</b> ou des
          colonnes temporaires backfillées en batch via queue. Jamais de ALTER bloquant
          en prod. Rollback toujours testé avant release.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Stratégie de queues et de jobs background ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Laravel Horizon + Redis</b> (ou BullMQ côté Node). Queues séparées par criticité
          (default, notifications, ai-heavy, exports). <b>Retries exponentiels</b>,
          dead-letter queue sur échec définitif, alerting Sentry + Pulse sur backlog &gt; X.
          Les jobs IA coûteux tournent sur une queue dédiée avec rate-limit + timeout strict
          pour ne jamais bloquer l'API.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vos stratégies de backup et de disaster recovery ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Backups PostgreSQL toutes les 15 minutes</b> (WAL continu), rétention 30 jours
          + snapshot hebdo conservé 1 an. Stockage chiffré sur un <b>second provider</b>
          (règle 3-2-1). Procédure de restauration <b>testée tous les trimestres</b> sur environnement
          isolé. <b>RTO cible : 1 h · RPO cible : 15 min</b>. Runbook DR versionné dans Notion.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Observabilité, logs, traces — qu'est-ce qu'on a ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Sentry</b> pour les erreurs (front + back + mobile) avec context riche (user,
          tenant, release). <b>Laravel Pulse</b> pour perfs &amp; slow queries. <b>Horizon</b>
          pour les queues. <b>Logs structurés JSON</b> (Monolog → stdout → Axiom). <b>Grafana Cloud</b>
          pour métriques infra + custom métier. Corrélation par <code>trace_id</code>. Alerting
          Slack 24/7 sur signaux critiques.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous tenez la charge à 10 000+ users actifs ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Architecture pensée <b>stateless</b>, scale horizontal via Docker/Laravel Forge ou
          Laravel Cloud. <b>PostgreSQL avec index ciblés + partitioning sur tables chaudes</b>.
          Redis pour le cache applicatif, les sessions, le rate-limit. Queries lentes
          tracées, réécrites, parfois réindexées. CDN edge Cloudflare en série. <b>On a des
          apps en prod qui tiennent plusieurs milliers de requêtes / seconde sans effort</b>.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Votre stratégie de tests et qualité code ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Pyramide classique</b>. Unit tests sur la logique métier (Pest / Vitest).
          Feature tests sur chaque route critique (billing, auth, permissions).
          <b>End-to-end Playwright</b> sur les 5 parcours utilisateurs principaux.
          <b>SAST (PHPStan niveau 8, Psalm, Biome) en CI</b>, <b>CodeRabbit AI review</b> avant humain.
          CI GitHub Actions bloque le merge si la couverture des modules critiques baisse.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vous êtes SOC2 / ISO27001 ready ? Pour nos audits clients grands comptes ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Oui, on prépare le terrain</b>. Vanta ou Drata branchés, secrets chiffrés (1Password Business),
          audit logs horodatés, RBAC strict, revue des accès trimestrielle, DPA complet, sous-traitants
          documentés, pentest annuel possible. <b>L'audit officiel est mené par un tiers habilité</b>,
          on ne prétend pas le faire nous-mêmes. Mais on rend votre app auditable en 3-6 mois.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vous êtes auditables ? Pen test, revue de code externe ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Oui, et encouragés</b>. On a déjà livré du code soumis à pen test externe
          (OWASP top 10, headers sécu, injections, race conditions). Revue de code externe
          possible tous les 6 mois&nbsp;: on fournit accès lecture au repo + walk-through.
          Le code passe <b>SAST (PHPStan, Psalm, Biome) en CI</b>. Un audit de sécurité
          annuel est <b>inclus dans le forfait Premium</b>, en option sur Scale.
        </div>
      </div>
    </div>
  </div>
</section>
`;
