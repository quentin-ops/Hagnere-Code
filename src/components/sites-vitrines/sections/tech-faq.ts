export const techFaqHtml = `
<!-- TECH FAQ — pour CTO / décideurs techniques -->
<section class="sv-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions qu'un CTO<br>nous pose en call.</h2>
      </div>
      <div class="right">
        Les neuf questions techniques qu'on entend systématiquement de la part des
        CTO / lead devs qui évaluent notre travail. Réponses directes, sans jargon.
      </div>
    </div>

    <div class="sv-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-1">
          Comment vous gérez les migrations de base en production ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-1" hidden>
          <b>Migrations SQL versionnées (Drizzle)</b> + review en pair avant merge. Déploiement
          zero-downtime (expand / migrate / contract) pour les schémas sensibles. Pour les
          très grosses tables, on utilise <b>pt-online-schema-change</b> ou des colonnes temporaires
          backfillées en batch via queue, jamais de ALTER bloquant en prod.
          Rollback toujours testé avant release.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-2">
          Quelle stratégie de queues et de jobs ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-2" hidden>
          <b>Files d'attente (Redis)</b>. Queues séparées par criticité (default, notifications,
          ai-heavy, exports). <b>Retries exponentiels</b>, dead-letter queue sur échec définitif,
          alerting Sentry sur backlog &gt; X. Les jobs IA coûteux tournent sur
          une queue dédiée avec rate-limit + timeout strict pour ne jamais bloquer l'API.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-3">
          Vos stratégies de backup et de disaster recovery ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-3" hidden>
          La sauvegarde dépend de l'hébergement et de la criticité : journal continu,
          snapshots, rétention et copie chez un autre fournisseur sont des options à
          dimensionner. Le devis précise fréquence, chiffrement, responsables, tests de
          restauration et, lorsque nécessaire, des objectifs RTO/RPO dans un runbook.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-4">
          Observabilité, logs, traces — qu'est-ce qu'on a ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-4" hidden>
          <b>Sentry</b> pour les erreurs (front + back + mobile) avec context riche (user,
          tenant, release). <b>Monitoring applicatif</b> pour perfs &amp; slow queries. <b>Dashboards
          dédiés</b> pour les queues. <b>Logs structurés JSON</b> (Monolog → stdout → agrégateur).
          <b>PostHog</b> peut servir aux événements produit avec le consentement requis.
          Canaux, horaires et niveaux d'alerte sont définis dans le contrat de maintenance.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-5">
          Comment vous tenez la charge à 10 000+ users actifs ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-5" hidden>
          Architecture pensée <b>stateless</b>, scale horizontal via Docker/Coolify ou
          Vercel / Cloudflare. <b>PostgreSQL avec index ciblés + partitioning sur tables chaudes</b>.
          Redis pour le cache applicatif, les sessions, le rate-limit. Queries lentes
          tracées, réécrites et testées. La capacité n'est jamais déduite de l'architecture
          seule : elle est mesurée par des tests de charge correspondant au trafic prévu.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-6">
          Votre stratégie de tests ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-6" hidden>
          <b>Pyramide classique</b>. Unit tests sur la logique métier (Vitest).
          Feature tests sur chaque route critique (billing, auth, permissions).
          <b>End-to-end Playwright</b> sur les 5 parcours utilisateurs principaux.
          Tests IA <b>déterministes</b> avec mocks de réponses LLM. CI GitHub Actions
          bloque le merge si la couverture des modules critiques baisse.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-7">
          Accessibilité WCAG pour nos gros clients B2B — vous savez faire ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-7" hidden>
          <b>Oui — cible RGAA / WCAG 2.1 niveau AA</b>. Contrastes vérifiés dès les maquettes,
          navigation clavier complète (focus visibles, skip-links), attributs <b>aria</b> et
          landmarks sémantiques, alternatives textuelles, formulaires étiquetés. Chaque
          livraison passe un audit <b>Lighthouse + axe</b>, corrections incluses dans le
          forfait. Sur demande, grille d'audit RGAA documentée pour vos appels d'offres.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-8">
          SSO / comptes entreprise pour un espace client — vous savez faire ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-8" hidden>
          <b>Oui, nativement</b>. SAML 2.0 via WorkOS ou intégration directe (Azure AD,
          Okta, Google Workspace, JumpCloud). SCIM pour le provisioning / deprovisioning auto.
          Audit logs conservés horodatés. Utile dès qu'un espace client ou un extranet
          s'ajoute au site vitrine — on le cadre et on le chiffre séparément.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-showcase-tech-9">
          Vous êtes auditables ? Pen test, SOC2, audit de code extérieur ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-showcase-tech-9" hidden>
          Les revues externes, pentests et dossiers SOC 2 peuvent être préparés avec le
          client, puis réalisés par les tiers compétents. Les contrôles CI, le périmètre du
          SAST et la cadence des audits sont écrits dans le devis : ils ne sont pas réputés
          inclus ni certifiants par défaut.
        </div>
      </div>
    </div>
  </div>
</section>
`;
