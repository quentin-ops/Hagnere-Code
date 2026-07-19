export const comparisonHtml = `
<!-- COMPARISON E-COMMERCE PLATEFORMES -->
<section class="ec-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer honnêtement</div>
        <h2>Shopify, Presta / Woo,<br>ou sur mesure ?</h2>
      </div>
      <div class="right">
        Cette grille indique quoi vérifier, sans fabriquer de moyenne universelle. Shopify reste souvent pertinent
        pour démarrer ou exploiter son écosystème ; le choix se tranche avec le besoin et le TCO documenté.
      </div>
    </div>

    <div class="ec-cmp-table reveal">
      <div class="ec-cmp-head">
        <div class="ec-cmp-col ec-cmp-col-label"></div>
        <div class="ec-cmp-col">
          <div class="ec-cmp-kind">Entrée de gamme</div>
          <div class="ec-cmp-title">Shopify Standard</div>
          <div class="ec-cmp-price">Tarif selon plan et engagement</div>
        </div>
        <div class="ec-cmp-col">
          <div class="ec-cmp-kind">SaaS premium</div>
          <div class="ec-cmp-title">Shopify Plus</div>
          <div class="ec-cmp-price">Tarif et frais selon contrat</div>
        </div>
        <div class="ec-cmp-col">
          <div class="ec-cmp-kind">Open source</div>
          <div class="ec-cmp-title">Prestashop / Woo</div>
          <div class="ec-cmp-price">Développement + hébergement + modules</div>
        </div>
        <div class="ec-cmp-col ec-cmp-col-us">
          <div class="ec-cmp-kind">Nous</div>
          <div class="ec-cmp-title">Hagnéré Code</div>
          <div class="ec-cmp-price">Devis + coûts tiers + TMA éventuelle</div>
        </div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Commission plateforme/agence hors paiement</div>
        <div class="ec-cmp-col">Selon plan et moyen de paiement</div>
        <div class="ec-cmp-col">Selon contrat et moyen de paiement</div>
        <div class="ec-cmp-col">Pas de commission plateforme ; coûts PSP et modules à compter</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>Pas de commission Hagnéré ; coûts PSP à compter</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Personnalisation du checkout</div>
        <div class="ec-cmp-col">Selon le plan et les extensions disponibles</div>
        <div class="ec-cmp-col">Selon le contrat et Checkout Extensibility</div>
        <div class="ec-cmp-col">Selon le thème, les modules et le développement</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>À cadrer dans les limites du PSP et du droit</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Performance</div>
        <div class="ec-cmp-col">À mesurer avec le thème, les apps et le catalogue réels</div>
        <div class="ec-cmp-col">À mesurer sur le storefront retenu</div>
        <div class="ec-cmp-col">Dépend de l'hébergement, du thème, des modules et du cache</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>Budget et conditions de mesure au devis</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Apps, modules et services tiers</div>
        <div class="ec-cmp-col">Selon le besoin et le plan</div>
        <div class="ec-cmp-col">Selon le besoin et le contrat</div>
        <div class="ec-cmp-col">Modules gratuits, payants ou développement spécifique</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>Liste et coûts explicités au devis</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Intégrations FR natives (Alma, Colissimo, Sage, Chorus Pro)</div>
        <div class="ec-cmp-col">Apps ou connecteurs à vérifier</div>
        <div class="ec-cmp-col">Apps, partenaires ou développement spécifique</div>
        <div class="ec-cmp-col">Modules ou développement spécifique</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>Connecteurs chiffrés un par un</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">App mobile iOS/Android native</div>
        <div class="ec-cmp-col">Shop app ou solution tierce selon le besoin</div>
        <div class="ec-cmp-col">Solution tierce ou développement dédié</div>
        <div class="ec-cmp-col">PWA, module ou application séparée</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>React Native si incluse au devis</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Facturation électronique et TVA OSS</div>
        <div class="ec-cmp-col">Configuration et connecteurs à valider</div>
        <div class="ec-cmp-col">Configuration et connecteurs à valider</div>
        <div class="ec-cmp-col">Modules ou développement à valider</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>Périmètre validé avec comptable et PA</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Résidence, transferts et sous-traitants</div>
        <div class="ec-cmp-col">Documentation du compte, DPA et transferts à vérifier</div>
        <div class="ec-cmp-col">Documentation du contrat, DPA et transferts à vérifier</div>
        <div class="ec-cmp-col">Dépend de l'hébergeur et des modules choisis</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>Hébergeur et sous-traitants choisis au devis</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Coût total 3 ans (2 M€ GMV)</div>
        <div class="ec-cmp-col">À calculer : licence + apps + frais</div>
        <div class="ec-cmp-col">À calculer sur le contrat complet</div>
        <div class="ec-cmp-col">Dev + hébergement + maintenance</div>
        <div class="ec-cmp-col ec-cmp-col-us"><b>Forfait + TMA selon périmètre</b></div>
      </div>

      <div class="ec-cmp-row ec-cmp-row-verdict">
        <div class="ec-cmp-col ec-cmp-col-label">À choisir si…</div>
        <div class="ec-cmp-col">
          Boutique en démarrage,<br>
          catalogue standard,<br>
          peu d'intégrations FR
        </div>
        <div class="ec-cmp-col">
          écosystème Shopify assumé,<br>
          équipe marketing forte,<br>
          lock-in accepté
        </div>
        <div class="ec-cmp-col">
          Équipe dev interne,<br>
          gestion des mises à jour,<br>
          budget modules maîtrisé
        </div>
        <div class="ec-cmp-col ec-cmp-col-us">
          <b>TCO documenté sur 36 mois,</b><br>
          intégrations FR lourdes,<br>
          besoins spécifiques documentés
        </div>
      </div>
    </div>

    <div class="ec-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Tarifs à vérifier sur la <a href="https://www.shopify.com/fr/tarifs" target="_blank" rel="noopener noreferrer">page officielle Shopify</a> et résidence/transferts dans la <a href="https://help.shopify.com/fr/manual/privacy-and-security/privacy/international-data-transfers/onward-transfers" target="_blank" rel="noopener noreferrer">documentation de confidentialité Shopify</a> (consultées le 19 juillet 2026), puis dans votre contrat. Pas sûr d'être dans notre zone ? <a href="#contact">30 min avec un expert</a> — si Shopify est mieux pour vous, on le dit franchement.
    </div>
  </div>
</section>
`;
