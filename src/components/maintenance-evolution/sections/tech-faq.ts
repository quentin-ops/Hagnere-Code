export const techFaqHtml = `
<!-- TECH FAQ M&E — pour CTO / DPO / lead devs -->
<section class="me-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions qu'un CTO<br>ou un DPO nous pose en call.</h2>
      </div>
      <div class="right">
        Huit questions techniques qu'on entend systématiquement de la part des CTO, lead devs
        ou DPO qui évaluent notre TMA. Réponses directes, sans jargon.
      </div>
    </div>

    <div class="me-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Comment vous gérez les migrations de base en production ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Les migrations peuvent être versionnées et revues en pair avant merge. Pour les schémas sensibles,
          une stratégie expand / migrate / contract vise à limiter les interruptions.
          Pour les très grosses tables, on utilise <b>pt-online-schema-change</b> ou des
          colonnes temporaires backfillées en batch via queue. Le protocole précise les opérations interdites,
          les tests, la fenêtre éventuelle et la stratégie de retour arrière.
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
          Les jobs coûteux peuvent tourner sur une queue dédiée avec rate-limit et timeout afin de réduire leur impact sur l'API.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vos stratégies de backup et de disaster recovery ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          WAL continu, snapshots et second fournisseur sont des options à dimensionner selon la criticité.
          Le devis précise la fréquence, la rétention, le chiffrement, la responsabilité et la cadence des tests.
          <b>RTO et RPO cibles</b> sont documentés dans le runbook lorsque le périmètre l'exige.
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
          Les canaux, plages de surveillance et niveaux d'alerte sont définis dans le contrat.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment validez-vous la capacité sous charge ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Architecture pensée <b>stateless</b>, scale horizontal via Docker/Laravel Forge ou
          Laravel Cloud. <b>PostgreSQL avec index ciblés + partitioning sur tables chaudes</b>.
          Redis pour le cache applicatif, les sessions, le rate-limit. Queries lentes
          tracées, réécrites, parfois réindexées. Un CDN peut compléter l'ensemble. La
          capacité est validée par des tests de charge représentatifs, jamais présumée.
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
          Les parcours <b>end-to-end Playwright</b> sont sélectionnés selon leur criticité.
          Les outils SAST, règles de CI, seuils de couverture et revues humaines sont définis selon le dépôt et le risque.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vous êtes SOC2 / ISO27001 ready ? Pour nos audits clients grands comptes ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Nous pouvons cadrer les preuves, journaux, droits, sous-traitants et contrôles
          nécessaires au référentiel retenu. Les outils, la fréquence des revues et les
          pentests sont dimensionnés au contrat. <b>L'audit officiel est mené par un tiers
          habilité</b> et aucun délai de certification n'est garanti.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vous êtes auditables ? Pen test, revue de code externe ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Une revue de code ou un pentest externe peut être organisé avec les accès et la
          documentation nécessaires. Le devis précise les contrôles CI, outils SAST,
          fréquences, responsabilités et éventuelles prestations tierces ; rien n'est
          présenté comme inclus ou certifiant sans engagement écrit.
        </div>
      </div>
    </div>
  </div>
</section>
`;
