export const techFaqHtml = `
<!-- TECH FAQ e-commerce -->
<section class="ec-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions qu'un lead tech<br>e-com nous pose à chaque call.</h2>
      </div>
      <div class="right">
        Huit questions techniques qu'on entend systématiquement de la part des CTO / lead devs / responsables
        DSI qui évaluent une agence e-commerce. Réponses directes, sans jargon marketing.
      </div>
    </div>

    <div class="ec-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Stack exact — qu'est-ce que vous utilisez vraiment en prod ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Storefront</b> : Next.js 15 App Router (React 19, Server Components, Server Actions) + Tailwind v4.
          <b>Back</b> : Laravel 13 (PHP 8.4), Cashier Stripe, Horizon queues Redis, Filament 3 admin, Scout + Meilisearch.
          <b>Mobile</b> : React Native + Expo, EAS Build + Update.
          <b>DB</b> : PostgreSQL 17 + <b>pgvector</b> pour la recherche sémantique, Redis 7 cache/queues/sessions.
          <b>IA</b> : Claude Opus 4.7 via Prism, embeddings Voyage ou OpenAI.
          <b>Infra</b> : Scaleway ou OVH, Vercel pour le front, Cloudflare CDN + WAF + sGTM Worker.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Combien de commandes/minute votre infra tient-elle sous charge ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Architecture <b>stateless</b> : le front Next.js est sur edge (Vercel ou Cloudflare Workers),
          l'API Laravel scale horizontalement (k8s, Vapor, ou Scaleway scale set selon déploiement).
          Sur nos derniers benchs : <b>500 à 1 000 commandes/minute soutenues</b> sur une config à 4 pods
          et une DB Postgres db-prod-16. On teste chaque livraison avec <b>k6 à 10× le pic normal</b>
          avant go-live.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vous gérez comment la PCI-DSS côté paiement ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>SAQ-A</b> systématique via <b>Stripe Elements</b>, <b>Mollie</b> ou <b>Adyen Drop-in</b>.
          Les données carte <b>ne transitent jamais</b> par nos serveurs. Tokens one-shot côté client,
          webhooks signés côté serveur. 3DS2 frictionless activé par défaut. Aucune information carte
          en base, y compris dans les logs. Pen test sur l'API de commande encouragé, on fournit les accès.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Migration depuis Shopify / Prestashop — procédure exacte ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Shopify</b> : export via Admin API (produits, collections, commandes, clients, metafields,
          redirections existantes). <b>Prestashop</b> : dump SQL + API webservice pour les attachements.
          Import dans notre nouvelle stack via jobs idempotents (peut être rejoué). Mapping 301 généré
          automatiquement à partir des slugs anciens + nouveaux. Jeu de tests : 100 produits représentatifs
          sélectionnés par vous + comparaison before/after pixel-perfect.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Backup, DR, RTO/RPO ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Postgres : <b>WAL continu</b>, snapshots toutes les 15 min, rétention 30 jours + snapshots
          hebdo conservés 1 an. Stockés sur un <b>second provider</b> (règle 3-2-1).
          <b>RTO cible 2 h, RPO cible 15 min.</b> Procédure de restauration testée tous les trimestres
          sur un environnement isolé. Runbook fourni au client. Possibilité d'export chiffré vers votre
          propre bucket S3 si souveraineté critique.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Observabilité : logs, traces, alertes, dashboards ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Sentry</b> (front + back + mobile) avec context riche (user, commande, release), sourcemaps.
          <b>Laravel Pulse</b> pour perfs &amp; slow queries. <b>Horizon</b> pour queues.
          <b>PostHog</b> pour events produit + funnels. Logs structurés JSON → agrégateur (Better Stack ou
          Grafana Loki). Alerts Slack sur : 5xx &gt; seuil, queue backlog, paiement échoué, stock négatif,
          uptime &lt; 99,5 %.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Tests : coverage, E2E, régression ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Pyramide classique. Unit tests sur la logique métier (Pest), feature tests sur chaque route
          critique (checkout, paiement, commande, stock, permissions), <b>end-to-end Playwright</b>
          sur les 5 parcours principaux (recherche, fiche, ajout panier, checkout invité, checkout connecté).
          CI GitHub Actions bloque le merge si coverage critique baisse. Tests IA <b>déterministes</b>
          avec mocks de réponses Claude.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          SLA maintenance, temps de déploiement, rollback ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>SLA TMA</b> : réponse &lt; 4 h ouvrées sur bug bloquant, &lt; 24 h ouvrées sur bug majeur.
          Déploiement zero-downtime via Laravel Vapor / Envoyer / Kamal (selon infra), typiquement
          <b>3 à 6 minutes</b> de build-deploy. Rollback en 1 commande, &lt; 2 min. Déploiement automatique
          sur staging depuis la branche <code>main</code>, validation manuelle pour prod.
        </div>
      </div>
    </div>
  </div>
</section>
`;
