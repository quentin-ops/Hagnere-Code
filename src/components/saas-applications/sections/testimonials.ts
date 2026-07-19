// Section de preuves produits — remplace l'ancien bloc de témoignages.
// Hagnéré Code n'a aucun client externe à ce jour : pas de citation, pas de note,
// pas de nom de tiers, pas de mise en relation promise. La seule preuve revendiquée
// est publique et vérifiable : les produits sont en ligne, à ces adresses.
// Classes réutilisées telles quelles depuis sections.css — aucune classe inventée.

export const testimonialsHtml = `
<!-- PREUVES PRODUITS -->
<section class="sa-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— La preuve, ce sont les produits, pas les citations</div>
        <h2>Aucun témoignage à afficher.<br>Des SaaS que nous exploitons nous-mêmes.</h2>
      </div>
      <div class="right">
        Nous n'avons pas encore de client externe, et nous préférons l'écrire plutôt que
        de fabriquer des citations invérifiables. En revanche, les produits ci-dessous, nous
        ne les avons pas seulement livrés : <b>nous les faisons tourner tous les jours</b>.
        Ils sont en ligne, à ces adresses — ouvrez-les et jugez sur pièce.
      </div>
    </div>

    <div class="sa-testi-grid">
      <article class="sa-testi-card reveal">
        <div class="sa-vt-head">
          <span class="sa-integ-kind">Comptabilité LMNP / LMP</span>
          <span class="sa-vt-tag sa-vt-tag-live">En ligne</span>
        </div>
        <p class="sa-testi-quote">
          Un SaaS de comptabilité fiscale complet : saisie des opérations, amortissements par
          composants, production de la liasse. Nous l'avons cadré, développé et mis en production
          — et c'est encore nous qui sommes joignables quand la période déclarative met le service
          sous tension. Chaque raccourci d'architecture que nous nous autorisons, nous le payons
          nous-mêmes quelques mois plus tard.
        </p>
        <div class="sa-testi-meta">
          <div class="sa-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#0A0A0A"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="700" font-size="14" fill="#fff">L<tspan fill="#6D28D9">A</tspan></text></svg>
          </div>
          <div>
            <div class="sa-testi-name"><a href="https://lmnp.ai" target="_blank" rel="noopener">lmnp.ai</a></div>
            <div class="sa-testi-role">Produit du groupe Hagnéré · <b>conçu, développé et exploité par nos soins</b></div>
          </div>
        </div>
      </article>

      <article class="sa-testi-card reveal reveal-d-1">
        <div class="sa-vt-head">
          <span class="sa-integ-kind">Comptabilité SCI à l'IR et à l'IS</span>
          <span class="sa-vt-tag sa-vt-tag-live">En ligne</span>
        </div>
        <p class="sa-testi-quote">
          Deux régimes fiscaux, deux moteurs de calcul, un seul produit à maintenir : exactement
          le type de complexité métier qu'on ne peut pas simuler dans une démonstration
          commerciale. Les migrations de base de données, les factures d'hébergement et les
          demandes d'évolution des utilisateurs nous reviennent directement. C'est la meilleure
          discipline de conception que nous connaissions.
        </p>
        <div class="sa-testi-meta">
          <div class="sa-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#0A0A0A"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="700" font-size="13" fill="#fff">SCI</text></svg>
          </div>
          <div>
            <div class="sa-testi-name"><a href="https://sci-ai.app" target="_blank" rel="noopener">sci-ai.app</a></div>
            <div class="sa-testi-role">Produit du groupe Hagnéré · <b>en production, maintenu par la même équipe</b></div>
          </div>
        </div>
      </article>

      <article class="sa-testi-card reveal reveal-d-2">
        <div class="sa-vt-head">
          <span class="sa-integ-kind">Application métier et CRM</span>
          <span class="sa-vt-tag sa-vt-tag-live">En ligne</span>
        </div>
        <p class="sa-testi-quote">
          Le site éditorial et l'outil interne d'un cabinet de conseil en investissements
          financiers : suivi des dossiers, pièces réglementaires, traitement des demandes
          entrantes. Des personnes travaillent dedans toute la journée et c'est nous qu'elles
          appellent quand quelque chose coince. Une application métier ne se juge pas le jour de
          la livraison, mais six mois après.
        </p>
        <div class="sa-testi-meta">
          <div class="sa-testi-av" aria-hidden="true">
            <svg viewBox="0 0 48 48"><rect width="48" height="48" fill="#0A0A0A"/><text x="24" y="30" text-anchor="middle" font-family="Geist" font-weight="700" font-size="14" fill="#fff">HP</text></svg>
          </div>
          <div>
            <div class="sa-testi-name"><a href="https://hagnere-patrimoine.fr" target="_blank" rel="noopener">hagnere-patrimoine.fr</a></div>
            <div class="sa-testi-role">Produit du groupe Hagnéré · <b>utilisé en interne tous les jours</b></div>
          </div>
        </div>
      </article>
    </div>

    <p class="sa-testi-foot reveal">
      Une quatrième plateforme, <a href="https://hagnere-investissement.fr" target="_blank" rel="noopener">hagnere-investissement.fr</a>,
      fonctionne sur le même principe. Ni logo emprunté, ni référence anonyme, ni note complaisante :
      construire un SaaS est une chose, l'exploiter en est une autre — nous faisons les deux, et c'est
      vérifiable en un clic.
    </p>
  </div>
</section>
`;
