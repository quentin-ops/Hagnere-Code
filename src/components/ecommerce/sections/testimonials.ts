// Section « preuves » — aucun témoignage, aucun avis, aucune note.
// Hagnéré Code n'a pas de client externe : la preuve, ce sont les quatre produits
// du groupe que l'agence a conçus, développés et qu'elle exploite elle-même.
// Angles retenus pour l'e-commerce : (1) tunnel de commande et paiement /
// (2) catalogue et recherche / (3) administration et contenu.
// Classes strictement réutilisées depuis sections.css — rien d'inventé.

export const testimonialsHtml = `
<!-- PREUVES E-COMMERCE -->
<section class="ec-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que nous pouvons prouver</div>
        <h2>Aucun témoignage client.<br>Quatre produits en ligne à la place.</h2>
      </div>
      <div class="right">
        Hagnéré Code n'a pas encore de client externe, donc pas d'avis à afficher : nous préférons
        le dire plutôt que le fabriquer. En revanche, <b>nos produits, nous ne les avons pas
        seulement livrés — nous les exploitons</b> : hébergement, correctifs, astreinte, factures
        d'infrastructure, utilisateurs réels. Très peu d'agences vivent avec ce qu'elles construisent.
      </div>
    </div>

    <div class="ec-testi-grid">
      <article class="ec-testi-card reveal">
        <div class="ec-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>
          TUNNEL DE COMMANDE
        </div>
        <p class="ec-testi-quote">
          Un abonnement se vend en ligne comme un produit : une page, un choix, une carte bancaire,
          une facture, et une relance quand le prélèvement échoue. Nous avons construit ce parcours,
          puis nous l'avons gardé — les paiements refusés et les questions de facturation arrivent chez nous.
        </p>
        <div class="ec-testi-meta">
          <div class="ec-testi-who">
            <div class="ec-testi-name">
            <a href="https://lmnp.ai" target="_blank" rel="noopener">LMNP.AI</a>
          </div>
            <div class="ec-testi-role">
            Comptabilité fiscale LMNP · <b>en production</b>
          </div>
          </div>
        </div>
      </article>

      <article class="ec-testi-card reveal reveal-d-1">
        <div class="ec-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
          CATALOGUE ET RECHERCHE
        </div>
        <p class="ec-testi-quote">
          Une plateforme d'investissement immobilier, c'est un catalogue : des fiches détaillées, des
          filtres, une recherche qui doit rester rapide quand le stock bouge, des visuels lourds à
          servir sans alourdir la page. Ce sont les problèmes d'une boutique, le panier en moins.
        </p>
        <div class="ec-testi-meta">
          <div class="ec-testi-who">
            <div class="ec-testi-name">
            <a href="https://hagnere-investissement.fr" target="_blank" rel="noopener">Hagnéré Investissement</a>
          </div>
            <div class="ec-testi-role">
            Plateforme immobilière · <b>en production</b>
          </div>
          </div>
        </div>
      </article>

      <article class="ec-testi-card reveal reveal-d-2">
        <div class="ec-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h10"/></svg>
          ADMINISTRATION ET CONTENU
        </div>
        <p class="ec-testi-quote">
          Un site éditorial dense adossé à un outil de gestion : des pages à faire indexer, des
          formulaires qui alimentent des équipes, et un back-office utilisé toute la journée. C'est la
          moitié invisible d'un e-commerce, celle qui décide si les commandes se traitent ou s'accumulent.
        </p>
        <div class="ec-testi-meta">
          <div class="ec-testi-who">
            <div class="ec-testi-name">
            <a href="https://hagnere-patrimoine.fr" target="_blank" rel="noopener">Hagnéré Patrimoine</a>
          </div>
            <div class="ec-testi-role">
            Site éditorial et CRM · <b>en production</b>
          </div>
          </div>
        </div>
      </article>
    </div>

    <p class="ec-testi-foot reveal">
      Le quatrième produit, <a href="https://sci-ai.app" target="_blank" rel="noopener">SCI-AI.app</a>,
      repose sur la même mécanique de comptes et de facturation. Les quatre sont en ligne à ces adresses :
      ouvrez-les, testez-les, jugez sur pièces. C'est la seule preuve que nous nous autorisions aujourd'hui.
    </p>
  </div>
</section>
`;
