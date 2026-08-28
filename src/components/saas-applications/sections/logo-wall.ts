// Logo-wall : quatre pages produit publiques du groupe Hagnéré, pas des
// références clients. Le kicker et la phrase de qualification sous la bande
// sont obligatoires (verrouillés par logo-wall-qualification.test.ts) : sans
// eux, quatre logos alignés sous le hero se lisent comme un mur de logos
// clients, ce qu'interdit la règle d'or du dépôt.

export const logoWallHtml = `
<!-- PRODUCT LOGO WALL -->
<section class="sa-clients-wall" aria-label="Les quatre produits du groupe Hagnéré">
  <div class="wrap">
    <div class="sa-cw-kicker">— Les quatre produits du groupe Hagnéré, en ligne</div>
    <div class="sa-cw-grid">
      <div class="sa-cw-logo">
        <img src="/logos/produits/lmnp-ai.webp" alt="LMNP.AI" width="160" height="57" loading="lazy" decoding="async" />
      </div>
      <div class="sa-cw-sep"></div>
      <div class="sa-cw-logo">
        <img src="/logos/produits/sci-ai.webp" alt="SCI-AI.app" width="160" height="78" loading="lazy" decoding="async" />
      </div>
      <div class="sa-cw-sep"></div>
      <div class="sa-cw-logo">
        <img src="/logos/produits/hagnere-patrimoine-320.webp" alt="Hagnéré Patrimoine" width="160" height="68" loading="lazy" decoding="async" />
      </div>
      <div class="sa-cw-sep"></div>
      <div class="sa-cw-logo">
        <img src="/logos/produits/hagnere-investissement-320.webp" alt="Hagnéré Investissement" width="160" height="56" loading="lazy" decoding="async" />
      </div>
    </div>
    <div class="sa-cw-foot">
      <span><span class="sa-cw-dot"></span> Ce sont des <b>produits du groupe Hagnéré</b>, pas des clients indépendants. Les <b>4 pages</b> permettent de vérifier leur disponibilité et leurs fonctions visibles, pas leur conception, leur exploitation, leur audience ni leurs résultats.</span>
    </div>
  </div>
</section>
`;
