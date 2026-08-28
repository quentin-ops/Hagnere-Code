// Maillage interne éditorialisé, rendu dans <main>.
// Le <footer> hérité de body.ts est retiré au rendu par stripFooter.

export const relatedServicesHtml = `
<!-- SERVICES LIÉS -->
<section class="rel-svc" aria-labelledby="rel-svc-title-at">
  <div class="wrap">
    <div class="eyebrow">— Services liés</div>
    <h2 id="rel-svc-title-at" style="margin:12px 0 0">Ce qui vient après<br>un rapport d'audit.</h2>
    <p class="rel-svc-lead">
      L'audit est indépendant de l'exécution&nbsp;: vous pouvez confier la suite à votre équipe,
      à votre prestataire actuel ou à un tiers. Si vous nous la confiez, elle fait l'objet d'un devis séparé.
    </p>
    <div class="rel-svc-grid">
      <a class="rel-svc-card" href="/services/securite-rgpd">
        <div class="rel-svc-kind">Sécurité &amp; RGPD</div>
        <div class="rel-svc-title">Traiter les écarts de conformité relevés</div>
        <div class="rel-svc-why">Cartographie des traitements, registre, sous-traitants et remédiation codée. La qualification juridique reste confiée à votre DPO ou à votre conseil.</div>
      </a>
      <a class="rel-svc-card" href="/services/maintenance-evolution">
        <div class="rel-svc-kind">Maintenance &amp; évolution</div>
        <div class="rel-svc-title">Faire exécuter le plan de remédiation dans la durée</div>
        <div class="rel-svc-why">Les priorités P1/P2 d'un audit demandent un rythme régulier plutôt qu'un coup de collier. Forfaits Care, Care+ et Care Pro, durée au devis.</div>
      </a>
      <a class="rel-svc-card" href="/services/saas-applications-metier">
        <div class="rel-svc-kind">SaaS &amp; applications métier</div>
        <div class="rel-svc-title">Décider entre réparer et reconstruire</div>
        <div class="rel-svc-why">Quand le verdict penche vers la refonte, le périmètre de reconstruction se chiffre séparément du rapport d'audit.</div>
      </a>
    </div>
  </div>
</section>
`;
