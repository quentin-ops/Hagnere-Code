// Logo-wall : quatre pages produit publiques du groupe Hagnéré, en ouverture de
// page, sur le gabarit des pages sœurs (« ec-clients-wall » sur /services/ecommerce,
// « sv-clients-wall » sur /services/sites-vitrines).
//
// Passe UX du 31/08/2026 : cette page était la seule des quatre à ne pas ouvrir
// sur ce bandeau — elle ouvrait sur la frise « Cadré / Mesuré / Testé / Encadré /
// Écrit », puis reservait les logos douze lignes plus bas, empilés dans un pavé
// gris à l'intérieur de la section « Pas de client à citer ». Les logos sont
// remontés ici ; la section preuves, elle, est descendue après les tarifs.
//
// Le kicker et la phrase de qualification sous la bande sont OBLIGATOIRES :
// sans eux, quatre logos alignés sous un hero se lisent comme un mur de logos
// clients, ce qu'interdit la règle d'or du dépôt. Ces produits sont des produits
// WEB : leur disponibilité ne prouve aucune application mobile publiée.

export const logoWallHtml = `
<!-- PRODUCT LOGO WALL -->
<section class="mob-logo-wall" aria-label="Les quatre produits du groupe Hagnéré">
  <div class="wrap">
    <div class="mob-lw-kicker">— Les quatre produits du groupe Hagnéré, en ligne</div>
    <div class="mob-lw-grid">
      <div class="mob-lw-logo">
        <img src="/logos/produits/lmnp-ai.webp" alt="LMNP.AI" width="160" height="57" loading="lazy" decoding="async" />
      </div>
      <div class="mob-lw-sep"></div>
      <div class="mob-lw-logo">
        <img src="/logos/produits/sci-ai.webp" alt="SCI-AI.app" width="160" height="78" loading="lazy" decoding="async" />
      </div>
      <div class="mob-lw-sep"></div>
      <div class="mob-lw-logo">
        <img src="/logos/produits/hagnere-patrimoine-320.webp" alt="Hagnéré Patrimoine" width="160" height="68" loading="lazy" decoding="async" />
      </div>
      <div class="mob-lw-sep"></div>
      <div class="mob-lw-logo">
        <img src="/logos/produits/hagnere-investissement-320.webp" alt="Hagnéré Investissement" width="160" height="56" loading="lazy" decoding="async" />
      </div>
    </div>
    <div class="mob-lw-foot">
      <span><span class="mob-lw-dot"></span> Ce sont des <b>produits du groupe Hagnéré</b>, pas des clients indépendants, et ce sont des <b>produits web</b>. Les 4 pages permettent de vérifier leur disponibilité et leurs fonctions visibles&nbsp;: on n'en déduit ni application mobile publiée, ni téléchargements, ni note de store.</span>
    </div>
  </div>
</section>
`;
