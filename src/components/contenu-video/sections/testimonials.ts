// Section « preuves » et non « témoignages » : l'agence n'a aucun client externe
// à ce jour. On assume la situation au lieu de fabriquer des citations anonymes :
// les quatre produits du groupe sont en ligne, publics, et nous les exploitons
// nous-mêmes. Aucun chiffre de résultat, aucune mise en relation promise.

export const testimonialsHtml = `
<!-- PREUVES CONTENU VIDÉO -->
<section class="cv-testi">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Preuves vérifiables</div>
        <h2>Aucun témoignage ici.<br><em>Quatre produits en ligne,<br>que nous exploitons.</em></h2>
      </div>
      <div class="right">
        Une agence peut filmer un produit, livrer les fichiers et ne jamais le revoir. Nous, non :
        les quatre produits ci-dessous, nous les avons conçus, développés, et
        <b>nous les faisons tourner tous les jours</b>. Pas encore de client externe, donc pas de citation
        inventée — seulement des adresses que vous pouvez ouvrir tout de suite.
      </div>
    </div>

    <div class="cv-testi-grid">
      <article class="cv-testi-card reveal">
        <div class="cv-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
          CONSULTABLE SANS RENDEZ-VOUS
        </div>
        <p class="cv-testi-quote">
          Pas de logos empruntés, pas d'initiales sous accord de confidentialité. Nos réalisations sont
          publiques : deux logiciels de comptabilité fiscale, un site éditorial adossé à un cabinet de
          conseil, une plateforme d'investissement immobilier. <b>Vous jugez sur pièces</b>, pas sur une
          note attribuée à un inconnu.
        </p>
        <div class="cv-testi-meta">
          <div>
            <div class="cv-testi-name">Les quatre adresses, en clair</div>
            <div class="cv-testi-role"><b>lmnp.ai</b> · <b>sci-ai.app</b> · <b>hagnere-patrimoine.fr</b> · <b>hagnere-investissement.fr</b></div>
          </div>
        </div>
      </article>

      <article class="cv-testi-card reveal reveal-d-1">
        <div class="cv-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
          NOUS FILMONS CE QUE NOUS OPÉRONS
        </div>
        <p class="cv-testi-quote">
          Écrire un script de démonstration suppose de connaître le produit de l'intérieur. Sur LMNP.AI et
          SCI-AI.app, personne n'a besoin de nous expliquer l'amortissement d'un bien meublé ou le passage
          d'une SCI à l'impôt sur les sociétés : <b>nous avons écrit les règles de calcul</b> et nous
          répondons aux utilisateurs qui les interrogent. La vidéo part de là, pas d'une réunion de cadrage.
        </p>
        <div class="cv-testi-meta">
          <div>
            <div class="cv-testi-name">LMNP.AI et SCI-AI.app</div>
            <div class="cv-testi-role">Logiciels de comptabilité fiscale <b>conçus, développés et exploités en interne</b></div>
          </div>
        </div>
      </article>

      <article class="cv-testi-card reveal reveal-d-2">
        <div class="cv-testi-topic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-5"/></svg>
          LA VIDÉO ATTERRIT SUR UN VRAI SITE
        </div>
        <p class="cv-testi-quote">
          Une vidéo d'accueil trop lourde ralentit la page qui la porte — et sur nos propres sites,
          c'est nous qui en supportons les conséquences. Format, poids des fichiers, chargement différé,
          sous-titres, déclinaison verticale : <b>ces arbitrages, nous les tranchons d'abord chez nous</b>,
          sur Hagnéré Patrimoine et Hagnéré Investissement, avant de vous les recommander.
        </p>
        <div class="cv-testi-meta">
          <div>
            <div class="cv-testi-name">Hagnéré Patrimoine et Hagnéré Investissement</div>
            <div class="cv-testi-role">Site éditorial et plateforme d'investissement immobilier, <b>en production</b></div>
          </div>
        </div>
      </article>
    </div>

    <p class="cv-testi-foot reveal">
      Presque aucune agence vidéo ne vit avec ce qu'elle a produit : les astreintes, les factures
      d'hébergement, les utilisateurs réels. Nous, si. Le jour où un client extérieur voudra témoigner,
      son nom apparaîtra ici — d'ici là, les quatre adresses ci-dessus restent notre seule preuve, et
      elles s'ouvrent en une seconde.
    </p>
  </div>
</section>
`;
