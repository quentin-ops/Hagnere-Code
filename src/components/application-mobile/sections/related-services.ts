// Maillage interne éditorialisé, rendu dans <main>.
// Le <footer> hérité de body.ts est retiré au rendu par stripFooter.

export const relatedServicesHtml = `
<!-- SERVICES LIÉS -->
<section class="rel-svc" aria-labelledby="rel-svc-title-mob">
  <div class="wrap">
    <div class="eyebrow">— Services liés</div>
    <h2 id="rel-svc-title-mob" style="margin:12px 0 0">Une app ne vit pas seule<br>après sa mise en ligne.</h2>
    <p class="rel-svc-lead">
      Chacune de ces prestations se cadre et se facture séparément du projet d'application.
      Rien n'est ajouté automatiquement&nbsp;: le devis dit ce qui est réellement engagé.
    </p>
    <div class="rel-svc-grid">
      <a class="rel-svc-card" href="/services/maintenance-evolution">
        <div class="rel-svc-kind">Maintenance &amp; évolution</div>
        <div class="rel-svc-title">Tenir les mises à jour iOS et Android</div>
        <div class="rel-svc-why">Une app publiée suit les versions d'OS, les règles des stores et les correctifs de sécurité. Forfaits Care, Care+ et Care Pro, durée au devis.</div>
      </a>
      <a class="rel-svc-card" href="/services/saas-applications-metier">
        <div class="rel-svc-kind">SaaS &amp; applications métier</div>
        <div class="rel-svc-title">Construire le back-office et l'API derrière l'app</div>
        <div class="rel-svc-why">Comptes, données, droits et intégrations vivent côté serveur. Ce périmètre se chiffre séparément du client mobile.</div>
      </a>
      <a class="rel-svc-card" href="/services/securite-rgpd">
        <div class="rel-svc-kind">Sécurité &amp; RGPD</div>
        <div class="rel-svc-title">Cadrer données personnelles, permissions et consentements</div>
        <div class="rel-svc-why">Les fiches store exigent une déclaration de collecte exacte. La qualification juridique reste confiée à votre DPO ou à votre conseil.</div>
      </a>
    </div>
  </div>
</section>
`;
