// Section « preuves » — aucun témoignage, aucun avis, aucune note.
// Hagnéré Code n'a pas de client externe : la preuve, ce sont les quatre produits
// accessibles publiquement. Ces liens ne prouvent ni exploitation, ni trafic,
// ni sécurité, ni résultat commercial.
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
        le dire plutôt que le fabriquer. Les liens ci-dessous permettent de vérifier <b>la disponibilité
        des pages et les fonctions qu'elles présentent</b>. Ils ne prouvent pas l'exploitation interne,
        les paiements, la sécurité, l'audience ni un résultat commercial.
      </div>
    </div>

    <div class="ec-testi-grid">
      <article class="ec-testi-card reveal">
        <div class="ec-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>
          TUNNEL DE COMMANDE
        </div>
        <p class="ec-testi-quote">
          LMNP.AI présente publiquement une offre par abonnement, ses fonctionnalités et son parcours
          d'accès. Ces éléments visibles peuvent être contrôlés sur le site&nbsp;; ils ne documentent
          ni les transactions, ni les relances, ni l'organisation qui traite les incidents de paiement.
        </p>
        <div class="ec-testi-meta">
          <div class="ec-testi-who">
            <div class="ec-testi-name">
            <a href="https://lmnp.ai" target="_blank" rel="noopener">LMNP.AI</a>
          </div>
            <div class="ec-testi-role">
            Comptabilité fiscale LMNP · <b>page publique à consulter</b>
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
          Hagnéré Investissement présente publiquement des offres immobilières sous forme de fiches
          et de parcours de consultation. Le lien permet d'observer cette présentation, sans conclure
          sur le stock interne, la vitesse sous charge ou l'exploitation technique.
        </p>
        <div class="ec-testi-meta">
          <div class="ec-testi-who">
            <div class="ec-testi-name">
            <a href="https://hagnere-investissement.fr" target="_blank" rel="noopener">Hagnéré Investissement</a>
          </div>
            <div class="ec-testi-role">
            Plateforme immobilière · <b>page publique à consulter</b>
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
          Hagnéré Patrimoine publie des contenus et des formulaires accessibles. Ces interfaces sont
          vérifiables publiquement&nbsp;; le back-office, son usage, l'indexation et le traitement réel
          des demandes ne sont pas présentés comme des preuves dans cette section.
        </p>
        <div class="ec-testi-meta">
          <div class="ec-testi-who">
            <div class="ec-testi-name">
            <a href="https://hagnere-patrimoine.fr" target="_blank" rel="noopener">Hagnéré Patrimoine</a>
          </div>
            <div class="ec-testi-role">
            Site éditorial et formulaires · <b>pages publiques à consulter</b>
          </div>
          </div>
        </div>
      </article>
    </div>

    <p class="ec-testi-foot reveal">
      Le quatrième produit, <a href="https://sci-ai.app" target="_blank" rel="noopener">SCI-AI.app</a>,
      présente elle aussi une offre et des fonctions sur une page publique. Ouvrez ces adresses pour
      vérifier ce qui est visible&nbsp;: aucune conclusion n'est tirée ici sur les comptes, la facturation,
      l'exploitation ou les résultats.
    </p>
  </div>
</section>
`;
