// Section "preuves" — Hagnéré Code n'a aucun client externe : pas de témoignage,
// pas de note, pas de référence anonymisée. La preuve, ce sont les quatre produits
// du groupe que l'agence a construits ET qu'elle exploite en production, à des URL
// publiques que n'importe qui peut ouvrir.
// Classes réutilisées telles quelles depuis sections.css (aucune classe inventée).

export const testimonialsHtml = `
<!-- PREUVES AUDIT · quatre produits en production, vérifiables publiquement -->
<section class="at-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Preuves publiques · aucun témoignage</div>
        <h2>Nous n'affichons aucun avis client.<br>Nous affichons quatre produits<br>que nous exploitons.</h2>
      </div>
      <div class="right">
        Hagnéré Code n'a pas encore de client externe. Publier des témoignages reviendrait donc à les inventer.
        Ce que nous pouvons montrer est plus rare&nbsp;: <b>quatre produits que nous avons conçus, développés,
        et que nous faisons tourner nous-mêmes en production</b>. Les adresses sont ci-dessous, ouvertes à tous.
      </div>
    </div>

    <div class="at-testi-grid">
      <!-- PREUVE 01 · LMNP.AI -->
      <article class="at-testi-card reveal">
        <div class="at-testi-role">SAAS FISCAL LMNP / LMP · EN PRODUCTION</div>
        <div class="at-testi-name">LMNP.AI</div>
        <p class="at-testi-quote">
          Un moteur de calcul fiscal, des liasses générées, des échéances légales qui ne se négocient pas.
          Nous en assumons l'exploitation quotidienne&nbsp;: les corrections de calcul, les montées de version,
          les sauvegardes, les périodes de clôture. <b>Auditer une application métier à forte logique de calcul,
          nous commençons par le faire sur la nôtre.</b>
        </p>
        <div class="at-testi-meta">
          <div class="at-testi-role">
            Ce que cela apporte à votre audit&nbsp;: <b>lecture d'un domaine métier complexe, traçabilité des
            calculs, tests de non-régression sur des règles qui changent chaque année</b>.
          </div>
        </div>
        <a class="at-testi-casestudy" href="https://lmnp.ai" target="_blank" rel="noopener noreferrer">
          Ouvrir lmnp.ai
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
      </article>

      <!-- PREUVE 02 · SCI-AI.app -->
      <article class="at-testi-card reveal reveal-d-1">
        <div class="at-testi-role">SAAS COMPTABLE SCI (IR &amp; IS) · EN PRODUCTION</div>
        <div class="at-testi-name">SCI-AI.app</div>
        <p class="at-testi-quote">
          Deux régimes fiscaux, une base de données multi-comptes, des exports comptables qui doivent tomber
          juste du premier coup. Nous suivons ses migrations, ses factures d'infrastructure et ses incidents.
          <b>C'est ce qui fixe nos critères de revue d'architecture&nbsp;: non pas ce qui est élégant sur le
          papier, mais ce qui tient dans la durée.</b>
        </p>
        <div class="at-testi-meta">
          <div class="at-testi-role">
            Ce que cela apporte à votre audit&nbsp;: <b>revue du schéma de données, coût réel d'exploitation,
            dette de migration et stratégie de sauvegarde</b>.
          </div>
        </div>
        <a class="at-testi-casestudy" href="https://sci-ai.app" target="_blank" rel="noopener noreferrer">
          Ouvrir sci-ai.app
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
      </article>

      <!-- PREUVE 03 · Hagnéré Patrimoine & Hagnéré Investissement -->
      <article class="at-testi-card reveal reveal-d-2">
        <div class="at-testi-role">SITE ÉDITORIAL, CRM &amp; PLATEFORME · EN PRODUCTION</div>
        <div class="at-testi-name">Hagnéré Patrimoine &amp; Hagnéré Investissement</div>
        <p class="at-testi-quote">
          Un site éditorial adossé à un CRM, et une plateforme d'investissement immobilier. Volume de contenu,
          référencement, formulaires, données personnelles, dépendances tierces&nbsp;: nous vivons avec les
          conséquences de chaque décision technique prise il y a plusieurs années. <b>Un audit se juge là —
          sur ce qu'il coûte à celui qui reste.</b>
        </p>
        <div class="at-testi-meta">
          <div class="at-testi-role">
            Ce que cela apporte à votre audit&nbsp;: <b>performance et SEO technique, protection des données
            personnelles, inventaire des dépendances et des points de rupture</b>.
          </div>
        </div>
        <a class="at-testi-casestudy" href="https://hagnere-patrimoine.fr" target="_blank" rel="noopener noreferrer">
          Ouvrir hagnere-patrimoine.fr
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
        <a class="at-testi-casestudy" href="https://hagnere-investissement.fr" target="_blank" rel="noopener noreferrer">
          Ouvrir hagnere-investissement.fr
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </a>
      </article>
    </div>

    <p class="at-testi-foot reveal">
      Presque toutes les agences livrent puis s'en vont. <b>Nous, nous restons dessus</b>&nbsp;: la dette technique
      que nous créons, c'est nous qui la payons. C'est exactement le point de vue depuis lequel nous lisons votre
      code. Vous n'avez rien à nous croire sur parole&nbsp;— ouvrez les quatre adresses. Le premier échange se fait
      avec Quentin Hagnéré, qui a écrit et exploite ce code, sous 24&nbsp;h ouvrées.
    </p>
  </div>
</section>
`;
