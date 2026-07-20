export const migrationHtml = `
<!-- MIGRATION E-COMMERCE CONTRÔLÉE -->
<section class="ec-migration">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Migrer sans perdre votre SEO</div>
        <h2>Inventorier, rediriger,<br>mesurer et corriger.</h2>
      </div>
      <div class="right">
        Une refonte peut faire varier le trafic pour des raisons techniques, éditoriales, concurrentielles ou
        algorithmiques. La méthode réduit les risques contrôlables et permet d'identifier rapidement les écarts ;
        elle ne peut pas garantir des positions ou un trafic immobiles.
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
          <h3>Mapping 301 contrôlé URL → URL</h3>
          <p>
            Fichier CSV de <b>correspondance vérifiable</b> pour les URL inventoriées : catégories, produits,
            pages CMS et contenus éditoriaux. Les variantes, paramètres et pages supprimées reçoivent une règle
            explicite. Le fichier et les exceptions sont relus avant la bascule.
          </p>
          <div class="ec-mig-tag">Inventaire croisé · priorités trafic · CSV validé</div>
        </div>
      </div>

      <div class="ec-mig-step reveal reveal-d-2">
        <div class="ec-mig-num">03</div>
        <div class="ec-mig-body">
          <h3>Import données + préservation contenu</h3>
          <p>
            Extraction propre depuis Shopify/Prestashop/Magento (API ou dump SQL), nettoyage, import
            dans la nouvelle stack. Le plan de migration vérifie ce qui doit être transféré ou reconstruit : balises
            title, meta description, H1, textes de catégorie, avis, images et données structurées.
          </p>
          <div class="ec-mig-tag">Products · Clients · Orders · Reviews</div>
        </div>
      </div>

      <div class="ec-mig-step reveal reveal-d-3">
        <div class="ec-mig-num">04</div>
        <div class="ec-mig-body">
          <h3>Bascule + redirections en production</h3>
          <p>
            La fenêtre de bascule, le gel des données et le retour arrière sont préparés à l'avance. Les redirections
            301 validées partent avec la nouvelle version ; le sitemap et les données structurées sont contrôlés puis
            signalés dans Search Console.
          </p>
          <div class="ec-mig-tag">DNS · 301 actifs · GSC re-submit</div>
        </div>
      </div>

      <div class="ec-mig-step reveal">
        <div class="ec-mig-num">05</div>
        <div class="ec-mig-body">
          <h3>Monitoring SEO 30 jours</h3>
          <p>
            Tableau de bord dédié : <b>données Search Console</b>, requêtes prioritaires, erreurs de crawl et 404.
            Les seuils d'alerte, la fréquence de suivi et les délais d'intervention sont écrits dans le devis.
            Chaque anomalie technique imputable à la migration est qualifiée, corrigée puis recontrôlée.
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
        <h3>Un engagement de recette, pas une promesse de classement</h3>
        <p>
          Le contrat peut couvrir l'inventaire, les redirections, la recette, la surveillance et la correction des
          anomalies techniques imputables à la migration. Il ne promet pas un niveau de trafic ou une position Google,
          qui dépendent aussi de facteurs extérieurs au développement.
        </p>
      </div>
    </div>
  </div>
</section>
`;
