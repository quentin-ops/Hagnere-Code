export const comparisonHtml = `
<!-- COMPARISON E-COMMERCE PLATEFORMES -->
<section class="ec-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer honnêtement</div>
        <h2>Shopify, Prestashop, Magento,<br>ou sur mesure ?</h2>
      </div>
      <div class="right">
        Comparatif factuel sur les points qui comptent vraiment à l'usage. On ne prétend pas être la
        bonne option pour tout le monde — Shopify reste parfait pour démarrer petit ou tester un marché.
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
          <div class="ec-cmp-price">10–30 k€ dev + modules</div>
        </div>
        <div class="ec-cmp-col ec-cmp-col-us">
          <div class="ec-cmp-kind">Nous</div>
          <div class="ec-cmp-title">Hagnéré Code</div>
          <div class="ec-cmp-price">15–120 k€ forfait fixe</div>
        </div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">% sur vos ventes</div>
        <div class="ec-cmp-col">Selon plan et moyen de paiement</div>
        <div class="ec-cmp-col">Selon contrat et moyen de paiement</div>
        <div class="ec-cmp-col">0</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>0 %</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Personnalisation du checkout</div>
        <div class="ec-cmp-col ec-cmp-bad">Très limitée</div>
        <div class="ec-cmp-col">Checkout Extensions</div>
        <div class="ec-cmp-col ec-cmp-good">Libre</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>100 % sur mesure</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Performances (LCP médian)</div>
        <div class="ec-cmp-col">2–3 s</div>
        <div class="ec-cmp-col">1,5–2,5 s</div>
        <div class="ec-cmp-col ec-cmp-bad">3–5 s avec modules</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>&lt; 1,5 s (SSR/ISR Next)</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Apps tiers obligatoires</div>
        <div class="ec-cmp-col ec-cmp-bad">5–10 apps payantes</div>
        <div class="ec-cmp-col ec-cmp-bad">8–15 apps</div>
        <div class="ec-cmp-col">Modules communauté</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>0 (tout inclus)</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Intégrations FR natives (Alma, Colissimo, Sage, Chorus Pro)</div>
        <div class="ec-cmp-col">Apps payantes 30–150 €/mois chacune</div>
        <div class="ec-cmp-col">Apps payantes + code custom</div>
        <div class="ec-cmp-col">Modules payants FR</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>Incluses dans le forfait</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">App mobile iOS/Android native</div>
        <div class="ec-cmp-col ec-cmp-bad">"Shop app" générique</div>
        <div class="ec-cmp-col">SDK mobile (cher)</div>
        <div class="ec-cmp-col ec-cmp-bad">Aucune / PWA</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>React Native incluse Scale/Enterprise</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Conformité 2026 (Factur-X, TVA OSS)</div>
        <div class="ec-cmp-col ec-cmp-bad">Via apps, partielle</div>
        <div class="ec-cmp-col">Via apps, partielle</div>
        <div class="ec-cmp-col ec-cmp-bad">À coder / modules</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>Native, fournie J+1</b></div>
      </div>

      <div class="ec-cmp-row">
        <div class="ec-cmp-col ec-cmp-col-label">Hébergement &amp; souveraineté</div>
        <div class="ec-cmp-col ec-cmp-bad">Cloud Shopify (Canada/US)</div>
        <div class="ec-cmp-col ec-cmp-bad">Idem</div>
        <div class="ec-cmp-col">Au choix</div>
        <div class="ec-cmp-col ec-cmp-col-us ec-cmp-good"><b>France (Scaleway/OVH) ou on-premise</b></div>
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
          app mobile + 0 %
        </div>
      </div>
    </div>

    <div class="ec-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Tarifs Shopify à vérifier sur la <a href="https://www.shopify.com/fr/tarifs" target="_blank" rel="noopener noreferrer">page officielle</a> (consultée le 19 juillet 2026), puis dans votre contrat. Pas sûr d'être dans notre zone ? <a href="#contact">30 min avec un expert</a> — si Shopify est mieux pour vous, on le dit franchement.
    </div>
  </div>
</section>
`;
