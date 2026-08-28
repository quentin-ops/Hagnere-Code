export const trustHtml = `
<!-- TRUST BADGES -->
<section class="trust" id="confiance">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Confiance &amp; conformité</div>
        <h2>Ce sur quoi<br>vous pouvez vraiment compter.</h2>
      </div>
      <!-- Chapeau en positif, aligné sur /methode : on annonce ce qui est
           vérifiable, jamais ce que d'autres feraient. Verrouillé par
           content-claims.test.ts. -->
      <div class="right">
        Voici ce que vous pouvez vérifier vous-même avant de signer&nbsp;: droits sur
        les livrables, prix et changements écrits, équipe identifiée, hébergement et
        éléments de réversibilité.
      </div>
    </div>

    <!-- Rangée 1 : règles à retrouver dans les documents contractuels -->
    <div class="tr-grid reveal">
      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">Livrables, accès et droits écrits</div>
          <div class="tr-sub">Transfert des livrables spécifiques après paiement complet selon les CGV ; dépôt, réversibilité, composants préexistants et licences tierces détaillés avant la signature.</div>
        </div>
      </div>

      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M2 12h20"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">Intervenants identifiés</div>
          <div class="tr-sub">Vous savez qui code chez vous : nom, rôle et statut de chaque intervenant sont annoncés avant le démarrage, et tout changement vous est communiqué.</div>
        </div>
      </div>

      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M3 10h18M7 20h10"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">Hébergement en France disponible</div>
          <div class="tr-sub">OVHcloud ou Scaleway selon le projet. Traitements et sous-traitants documentés ; contact RGPD identifié.</div>
        </div>
      </div>

      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">Prix et changements écrits</div>
          <div class="tr-sub">Le prix couvre le périmètre signé. Aucun dépassement ni travail hors périmètre sans accord écrit préalable.</div>
        </div>
      </div>

      <div class="tr-item">
        <div class="tr-ic">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
        </div>
        <div class="tr-body">
          <div class="tr-title">Recette et correction cadrées</div>
          <div class="tr-sub">Période, sévérités, couverture et délais cibles sont écrits avant la signature, pas découverts à la livraison.</div>
        </div>
      </div>
    </div>

    <!-- Rangée 2 : éléments vérifiables ou règles contractuelles.
         La stack technique n'est plus répétée ici : elle est exposée une seule
         fois sur la page, dans le bandeau « Notre stack » (logobar). -->

    <div class="tr-ratings reveal reveal-d-1">
      <div class="tr-rating">
        <div class="tr-rating-value">4</div>
        <div class="tr-rating-kind">Pages produit publiques</div>
        <div class="tr-rating-source">Liens consultables sans rendez-vous</div>
        <div class="tr-rating-meta">Deux logiciels et deux sites métier sont présentés publiquement ; ces liens prouvent leur disponibilité et leurs fonctions visibles, pas leurs résultats ni leur exploitation interne.</div>
      </div>

      <div class="tr-rating">
        <div class="tr-rating-value">ÉCRIT</div>
        <div class="tr-rating-kind">Périmètre et prix</div>
        <div class="tr-rating-source">Devis signé</div>
        <div class="tr-rating-meta">Les changements sont chiffrés et acceptés par écrit avant exécution ; aucun dépassement unilatéral.</div>
      </div>

      <div class="tr-rating">
        <div class="tr-rating-value">NOMMÉS</div>
        <div class="tr-rating-kind">Intervenants du projet</div>
        <div class="tr-rating-source">Rôles et statuts annoncés</div>
        <div class="tr-rating-meta">Vous savez qui intervient réellement sur votre projet, et ce qui est prévu en cas de remplacement.</div>
      </div>
    </div>
  </div>
</section>
`;
