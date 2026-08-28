// Maillage interne éditorialisé, rendu dans <main>.
// Le <footer> hérité de body.ts est retiré au rendu par stripFooter : ses liens
// n'atteignent jamais un lecteur. Ce bloc porte donc le cross-sell réel de la page.

export const relatedServicesHtml = `
<!-- SERVICES LIÉS -->
<section class="rel-svc" aria-labelledby="rel-svc-title-ads">
  <div class="wrap">
    <div class="eyebrow">— Services liés</div>
    <h2 id="rel-svc-title-ads" style="margin:12px 0 0">Ce qu'on branche le plus souvent<br>autour d'un budget média.</h2>
    <p class="rel-svc-lead">
      Chacune de ces prestations se cadre et se facture séparément. Rien n'est ajouté
      automatiquement à un forfait Ads&nbsp;: le devis dit ce qui est réellement engagé.
    </p>
    <div class="rel-svc-grid">
      <a class="rel-svc-card" href="/services/referencement-google">
        <div class="rel-svc-kind">Référencement naturel</div>
        <div class="rel-svc-title">Travailler l'organique sur les mêmes requêtes</div>
        <div class="rel-svc-why">Les mots-clés les plus chers aux enchères sont souvent ceux qu'il faut aussi gagner en organique. Les deux canaux se pilotent ensemble ou séparément.</div>
      </a>
      <a class="rel-svc-card" href="/services/sites-vitrines">
        <div class="rel-svc-kind">Sites vitrines &amp; landing pages</div>
        <div class="rel-svc-title">Refaire la page qui reçoit les clics</div>
        <div class="rel-svc-why">Un budget média ne rattrape pas une page d'atterrissage lente ou peu claire. La refonte se chiffre à part, avant d'augmenter la dépense.</div>
      </a>
      <a class="rel-svc-card" href="/services/contenu-video">
        <div class="rel-svc-kind">Contenu &amp; vidéo</div>
        <div class="rel-svc-title">Produire les créations que consomment les campagnes</div>
        <div class="rel-svc-why">Le volume de variantes créatives est la première contrainte d'un compte qui monte. Le devis précise qui les produit, vous ou nous.</div>
      </a>
    </div>
  </div>
</section>
`;
