// Logo-wall : quatre pages produit publiques du groupe Hagnéré, pas des
// références clients. Le kicker et la phrase de qualification sous la bande
// sont obligatoires (verrouillés par logo-wall-qualification.test.ts) : sans
// eux, quatre logos alignés se lisent comme un mur de logos clients, ce
// qu'interdit la règle d'or du dépôt. La formulation reprend mot pour mot
// celle des pages services (sites-vitrines, saas-applications, ecommerce)
// pour que le visiteur lise la même qualification partout.

export const logoWallHtml = `
<!-- PRODUCT LOGO WALL -->
<section class="clients-wall" aria-label="Les quatre produits du groupe Hagnéré">
  <div class="wrap">
    <div class="cw-kicker">— Les quatre produits du groupe Hagnéré, en ligne</div>
    <div class="cw-grid">
      <div class="cw-logo cw-logo-img">
        <img src="/logos/produits/hagnere-patrimoine-320.webp" alt="Hagnéré Patrimoine" width="160" height="68" loading="lazy" decoding="async" />
      </div>
      <div class="cw-sep" aria-hidden="true"></div>
      <div class="cw-logo cw-logo-img">
        <img src="/logos/produits/hagnere-investissement-320.webp" alt="Hagnéré Investissement" width="160" height="56" loading="lazy" decoding="async" />
      </div>
      <div class="cw-sep" aria-hidden="true"></div>
      <div class="cw-logo cw-logo-img">
        <img src="/logos/produits/lmnp-ai.webp" alt="LMNP.AI" width="160" height="48" loading="lazy" decoding="async" />
      </div>
      <div class="cw-sep" aria-hidden="true"></div>
      <div class="cw-logo cw-logo-img">
        <img src="/logos/produits/sci-ai.webp" alt="SCI-AI.app" width="160" height="48" loading="lazy" decoding="async" />
      </div>
    </div>
    <div class="cw-foot">
      <span><span class="cw-dot" aria-hidden="true"></span> Ce sont des <b>produits du groupe Hagnéré</b>, pas des clients indépendants. Les <b>4 pages</b> permettent de vérifier leur disponibilité et leurs fonctions visibles, pas leur conception, leur exploitation, leur audience ni leurs résultats.</span>
    </div>
  </div>
</section>
`;
