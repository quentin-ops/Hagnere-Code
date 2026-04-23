export const techFaqHtml = `
<!-- TECH FAQ — pour CTO / décideurs techniques -->
<section class="seo-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions qu'un CTO<br>nous pose en call.</h2>
      </div>
      <div class="right">
        Les huit questions techniques qu'on entend systématiquement de la part des
        CTO / lead devs qui évaluent notre travail. Réponses directes, sans bullshit.
      </div>
    </div>

    <div class="seo-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Comment vous gérez les migrations de base en production ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Migrations Laravel versionnées</b> + review en pair avant merge. Déploiement
          zero-downtime (expand / migrate / contract) pour les schémas sensibles. Pour les
          très grosses tables, on utilise <b>pt-online-schema-change</b> ou des colonnes temporaires
          backfillées en batch via queue, jamais de ALTER bloquant en prod.
          Rollback toujours testé avant release.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Quelle stratégie de queues et de jobs ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Laravel Horizon + Redis</b>. Queues séparées par criticité (default, notifications,
          ai-heavy, exports). <b>Retries exponentiels</b>, dead-letter queue sur échec définitif,
          alerting Sentry + Pulse sur backlog &gt; X. Les jobs IA coûteux tournent sur
          une queue dédiée avec rate-limit + timeout strict pour ne jamais bloquer l'API.
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
          (3-2-1). Procédure de restauration testée tous les trimestres sur environnement
          isolé. <b>RTO cible : 2 h. RPO cible : 15 min.</b> Documenté dans un runbook.
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
          pour les queues. <b>Logs structurés JSON</b> (Monolog → stdout → agrégateur).
          <b>PostHog</b> pour les events produit. Alerting Slack 24/7 sur signaux critiques.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous tenez la charge à 10 000+ users actifs ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Architecture pensée <b>stateless</b>, scale horizontal via Docker/Coolify ou
          Laravel Cloud. <b>PostgreSQL avec index ciblés + partitioning sur tables chaudes</b>.
          Redis pour le cache applicatif, les sessions, le rate-limit. Queries lentes
          tracées, réécrites, parfois réindexées par IA. On a des SaaS en prod qui tiennent
          sans effort plusieurs milliers de requêtes / seconde.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Votre stratégie de tests ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Pyramide classique</b>. Unit tests sur la logique métier (Pest).
          Feature tests sur chaque route critique (billing, auth, permissions).
          <b>End-to-end Playwright</b> sur les 5 parcours utilisateurs principaux.
          Tests IA <b>déterministes</b> avec mocks de réponses LLM. CI GitHub Actions
          bloque le merge si la couverture des modules critiques baisse.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Hreflang et multilingue pour nos gros clients B2B — vous savez faire ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Oui, nativement</b>. SAML 2.0 via WorkOS ou intégration directe (Azure AD,
          Okta, Google Workspace, JumpCloud). SCIM pour le provisioning / deprovisioning auto.
          Audit logs conservés horodatés. C'est souvent un feature-flag réservé aux plans
          entreprise — on gère le pricing gating côté billing dès la livraison.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vous êtes auditables ? Pen test, SOC2, audit de code extérieur ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Oui, et encouragés</b>. On a déjà livré du code soumis à pen test externe
          (OWASP top 10, headers sécu, injections, race conditions). On prépare le terrain
          SOC2 Type 2 sans faire l'audit nous-mêmes (il est mené par un tiers habilité).
          Le code passe <b>SAST (Psalm, Larastan) en CI</b>. Un audit de sécurité annuel est
          inclus dans les forfaits maintenance.
        </div>
      </div>
    </div>
  </div>
</section>
`;
