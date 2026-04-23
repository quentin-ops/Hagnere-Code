export const migrationHtml = `
<!-- MIGRATION ZERO-DOWNTIME -->
<section class="ec-migration">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Migrer sans perdre votre SEO</div>
        <h2>Zéro downtime.<br>Zéro trafic perdu. Zéro URL cassée.</h2>
      </div>
      <div class="right">
        C'est la peur n°1 d'une refonte e-commerce : perdre 30 à 50 % du trafic organique à cause
        d'une migration bricolée. On a une méthode qui élimine ce risque, appliquée sur nos 6
        dernières migrations sans perte mesurable.
      </div>
    </div>

    <div class="ec-mig-steps">
      <div class="ec-mig-step reveal">
        <div class="ec-mig-num">01</div>
        <div class="ec-mig-body">
          <h3>Audit SEO de l'existant</h3>
          <p>
            On crawle votre boutique actuelle avec Screaming Frog ou Sitebulb (jusqu'à 50 000 URLs).
            On liste : <b>URLs indexées, trafic GSC par page, positions, rich snippets, balises canonical,
            hreflang, sitemap</b>. Référentiel complet en début de projet.
          </p>
          <div class="ec-mig-tag">J+0 · crawl 50k URLs · inventaire GSC</div>
        </div>
      </div>

      <div class="ec-mig-step reveal reveal-d-1">
        <div class="ec-mig-num">02</div>
        <div class="ec-mig-body">
          <h3>Mapping 301 exhaustif URL → URL</h3>
          <p>
            Fichier CSV de <b>correspondance exacte</b> : chaque URL ancienne (catégorie, produit, page CMS,
            article blog) est mappée à sa nouvelle URL. On couvre les cas tordus : variantes de produit,
            query strings, anciennes catégories supprimées. Relecture par vous avant bascule.
          </p>
          <div class="ec-mig-tag">100 % des URLs trafic · CSV validé</div>
        </div>
      </div>

      <div class="ec-mig-step reveal reveal-d-2">
        <div class="ec-mig-num">03</div>
        <div class="ec-mig-body">
          <h3>Import données + préservation contenu</h3>
          <p>
            Extraction propre depuis Shopify/Prestashop/Magento (API ou dump SQL), nettoyage, import
            dans la nouvelle stack. <b>On conserve</b> : balises title, meta description, H1, texte SEO catégorie,
            avis clients, images avec leur alt, données produit structurées.
          </p>
          <div class="ec-mig-tag">Products · Clients · Orders · Reviews</div>
        </div>
      </div>

      <div class="ec-mig-step reveal reveal-d-3">
        <div class="ec-mig-num">04</div>
        <div class="ec-mig-body">
          <h3>Bascule + redirections en production</h3>
          <p>
            DNS basculé en dehors des heures de trafic. Les redirections 301 sont <b>actives dès la seconde 0</b>
            (pas 301 en plusieurs vagues, tout d'un coup). Sitemap.xml soumis à GSC immédiatement. Rich snippets
            régénérés.
          </p>
          <div class="ec-mig-tag">DNS · 301 actifs · GSC re-submit</div>
        </div>
      </div>

      <div class="ec-mig-step reveal">
        <div class="ec-mig-num">05</div>
        <div class="ec-mig-body">
          <h3>Monitoring SEO 30 jours</h3>
          <p>
            Dashboard dédié : <b>trafic GSC jour par jour</b>, positions sur top 100 requêtes,
            crawl errors, 404 détectées en temps réel. Toute dérive &gt; 5 % déclenche une alerte
            et on la corrige en moins de 24 h. Le projet n'est pas fini à la bascule —
            il l'est au J+30.
          </p>
          <div class="ec-mig-tag">GSC daily · positions top100 · alerts</div>
        </div>
      </div>
    </div>

    <div class="ec-mig-promise reveal">
      <div class="ec-mig-promise-left">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      </div>
      <div class="ec-mig-promise-right">
        <h4>Notre engagement écrit</h4>
        <p>
          Si le trafic organique global baisse de plus de <b>10 %</b> à J+30 à cause de la migration
          (et non d'une cause externe type mise à jour algo Google), on corrige gratuitement jusqu'au retour au niveau antérieur.
          <b>Clause dans le contrat, pas un slogan.</b>
        </p>
      </div>
    </div>
  </div>
</section>
`;
