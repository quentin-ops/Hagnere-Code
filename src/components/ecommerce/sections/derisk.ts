export const deriskHtml = `
<!-- DE-RISK 4 PEURS E-COMMERCE -->
<section class="ec-derisk">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Les quatre peurs qui freinent une refonte</div>
        <h2>On les nomme.<br>On y répond par contrat.</h2>
      </div>
      <div class="right">
        Chaque fois qu'un e-commerçant vient nous voir pour une refonte, les mêmes quatre peurs reviennent.
        Voici comment on y répond — avec des engagements écrits dans le contrat, pas dans la brochure.
      </div>
    </div>

    <div class="ec-derisk-grid">
      <div class="ec-derisk-card reveal">
        <div class="ec-derisk-num">/ 01</div>
        <div class="ec-derisk-fear">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          « Le sur-mesure sera plus lent que Shopify. »
        </div>
        <h3>Core Web Vitals verts garantis.</h3>
        <p>
          LCP &lt; 2,5 s, INP &lt; 200 ms, CLS &lt; 0,1 sur <b>100 % des pages principales</b>, mesurés au
          lancement et dans le rapport de recette. Next.js 15 + SSR/ISR + CDN Cloudflare +
          images AVIF/WebP = stack bâtie pour la perf. Si les perfs baissent sous le seuil après la livraison, c'est notre bug à corriger gratuitement.
        </p>
        <div class="ec-derisk-proof">
          <span>✓ LCP &lt; 1,5 s sur fiche produit</span>
          <span>✓ PageSpeed &gt; 90</span>
          <span>✓ Audit livré</span>
        </div>
      </div>

      <div class="ec-derisk-card reveal reveal-d-1">
        <div class="ec-derisk-num">/ 02</div>
        <div class="ec-derisk-fear">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          « On va perdre notre SEO à la migration. »
        </div>
        <h3>Zéro perte SEO · engagement contractuel.</h3>
        <p>
          Méthodologie décrite dans la section "Migration zero-downtime" : mapping 301 exhaustif,
          préservation de toutes les balises SEO, monitoring GSC quotidien sur 30 jours. <b>Clause écrite</b> :
          si le trafic organique global baisse de plus de <b>10 %</b> à J+30 à cause de la migration,
          on corrige gratuitement jusqu'au retour au niveau antérieur.
        </p>
        <div class="ec-derisk-proof">
          <span>✓ Mapping 301 à vous</span>
          <span>✓ Monitoring 30 j</span>
          <span>✓ Clause -10% = correction</span>
        </div>
      </div>

      <div class="ec-derisk-card reveal reveal-d-2">
        <div class="ec-derisk-num">/ 03</div>
        <div class="ec-derisk-fear">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          « Black Friday et le panier tombe, on est morts. »
        </div>
        <h3>Test de charge à 10× le pic normal avant go-live.</h3>
        <p>
          Avant la bascule, on lance un <b>test de charge k6</b> à 10× votre pic de commandes attendu.
          On valide : temps de réponse API sous charge, auto-scaling workers Horizon, tenue de la DB,
          rollback en 5 min si alerte. Infra <b>stateless</b>, scale horizontal auto, CDN Cloudflare devant.
          Monitoring Sentry + UptimeRobot 24/7 avec alertes Slack.
        </p>
        <div class="ec-derisk-proof">
          <span>✓ Load test k6 10×</span>
          <span>✓ Auto-scaling</span>
          <span>✓ Rollback 5 min</span>
        </div>
      </div>

      <div class="ec-derisk-card reveal reveal-d-3">
        <div class="ec-derisk-num">/ 04</div>
        <div class="ec-derisk-fear">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          « Et si vous disparaissez dans 3 ans ? »
        </div>
        <h3>Code à vous dès J+1 · stack standard · zéro lock-in.</h3>
        <p>
          Repo Git <b>sur votre organisation dès J+1</b>. Stack 100 % standard (Laravel, Next.js, PostgreSQL),
          documentation technique, runbook, Docker compose. Une autre ESN française Laravel/React peut
          reprendre en <b>2-3 semaines de ramp-up</b>. Aucun framework propriétaire, aucune clé cachée,
          escrow contractuel possible si votre DSI le souhaite.
        </p>
        <div class="ec-derisk-proof">
          <span>✓ Git chez vous J+1</span>
          <span>✓ Stack 100 % standard</span>
          <span>✓ Reprise possible 2-3 sem</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
