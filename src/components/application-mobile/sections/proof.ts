// Section PREUVES — alignée sur les neuf autres pages services.
// Hagnéré Code n'a pas encore de client externe : aucune citation, aucune note,
// aucune app référencée. Les quatre produits liés appartiennent au groupe Hagnéré
// et sont des produits web publics : leur disponibilité ne prouve ni application
// mobile publiée, ni téléchargements, ni résultat.
//
// Passe UX du 31/08/2026 — deux corrections, toutes deux pour s'aligner sur les
// pages sœurs :
//
//   1. POSITION. Cette section était la deuxième de la page, juste après le
//      hero : la deuxième chose qu'un visiteur lisait sur « application mobile »
//      était qu'aucune application n'avait jamais été publiée, avant même
//      d'avoir compris ce qu'on lui vend. Sur les trois autres pages le même
//      message arrive après l'offre, la méthode et les prix (15/20 sur vitrines,
//      14/19 sur SaaS, 19/22 sur e-commerce). Elle est descendue après le bloc
//      tarifaire — voir composed-body.ts.
//   2. GABARIT. Elle empilait un pavé gris de quatre logos là où les pages
//      sœurs alignent trois cartes blanches descriptives (cf. « ec-testi » sur
//      /services/ecommerce). Les logos sont partis ouvrir la page dans
//      « logo-wall.ts » ; ici restent trois cartes, une par chose réellement
//      vérifiable.
//
// ⚠️ Ces trois cartes décrivent des produits WEB. Aucune ne doit laisser entendre
// qu'une application mobile de ces produits existe, est publiée ou a été
// réalisée par le studio — la réserve sous la grille le dit explicitement, et un
// garde-fou de test l'exige.

export const proofHtml = `
<!-- PREUVES PUBLIQUES -->
<section class="mob-proof" aria-labelledby="mob-proof-title">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce que nous pouvons prouver</div>
        <h2 id="mob-proof-title">Aucun témoignage client.<br>Quatre produits en ligne à la place.</h2>
      </div>
      <div class="right">
        Nous n'avons pas encore de client externe, donc aucun témoignage et aucune note à afficher&nbsp;:
        nous préférons le dire plutôt que le fabriquer. <b>Aucune application publiée sur l'App Store
        ou Google Play n'est revendiquée sur cette page</b>, et les maquettes du haut de page portent la
        mention «&nbsp;données fictives&nbsp;». Ce qui suit est vérifiable en ouvrant les pages.
      </div>
    </div>

    <div class="mob-proof-grid">
      <article class="mob-proof-card reveal">
        <div class="mob-proof-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 015 5v3H7V7a5 5 0 015-5z"/><rect x="4" y="10" width="16" height="11" rx="2"/></svg>
          COMPTE ET ABONNEMENT
        </div>
        <p class="mob-proof-quote">
          LMNP.AI présente publiquement une offre par abonnement, ses fonctionnalités et son parcours
          d'accès au compte. C'est exactement la brique qu'une application mobile réutiliserait&nbsp;;
          la page ne dit rien du volume d'utilisateurs, des paiements traités ni d'une quelconque
          déclinaison mobile — il n'y en a pas.
        </p>
        <div class="mob-proof-meta">
          <div class="mob-proof-name"><a href="https://lmnp.ai" target="_blank" rel="noopener">LMNP.AI</a></div>
          <div class="mob-proof-role">Produit web · <b>page publique à consulter</b></div>
        </div>
      </article>

      <article class="mob-proof-card reveal reveal-d-1">
        <div class="mob-proof-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 20V9"/></svg>
          CATALOGUE ET FICHES
        </div>
        <p class="mob-proof-quote">
          Hagnéré Investissement présente publiquement des biens sous forme de fiches et de parcours de
          consultation — listes, filtres, pages de détail. On peut observer cette présentation&nbsp;;
          on n'en déduit ni le stock réel, ni la tenue sous charge, ni une version pour store.
        </p>
        <div class="mob-proof-meta">
          <div class="mob-proof-name"><a href="https://hagnere-investissement.fr" target="_blank" rel="noopener">Hagnéré Investissement</a></div>
          <div class="mob-proof-role">Produit web · <b>page publique à consulter</b></div>
        </div>
      </article>

      <article class="mob-proof-card reveal reveal-d-2">
        <div class="mob-proof-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16M4 12h16M4 19h10"/></svg>
          CONTENU ET FORMULAIRES
        </div>
        <p class="mob-proof-quote">
          Hagnéré Patrimoine publie des contenus et des formulaires accessibles à tous. Ces interfaces
          sont contrôlables publiquement&nbsp;; le back-office, le traitement réel des demandes et
          l'exploitation ne sont pas présentés ici comme des preuves.
        </p>
        <div class="mob-proof-meta">
          <div class="mob-proof-name"><a href="https://hagnere-patrimoine.fr" target="_blank" rel="noopener">Hagnéré Patrimoine</a></div>
          <div class="mob-proof-role">Produit web · <b>pages publiques à consulter</b></div>
        </div>
      </article>
    </div>

    <p class="mob-proof-note reveal">
      Le quatrième produit, <a href="https://sci-ai.app" target="_blank" rel="noopener">SCI-AI.app</a>,
      présente lui aussi une offre et des fonctions sur une page publique. Ce sont des
      <b>produits du groupe Hagnéré</b>, pas des clients indépendants, et ce sont des produits web&nbsp;:
      on peut constater que les pages sont accessibles et lire les fonctions qu'elles présentent, pas en
      déduire une application mobile, un volume de téléchargements, une note de store ni un résultat
      commercial.
    </p>

    <div class="mob-proof-foot reveal">
      <a href="/realisations" class="btn btn-ghost">Voir nos réalisations</a>
      <a href="/services/saas-applications-metier" class="btn btn-ghost">Voir l'offre back-office &amp; API</a>
    </div>
  </div>
</section>
`;
