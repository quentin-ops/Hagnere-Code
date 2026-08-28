// Maillage interne éditorialisé, rendu dans <main>.
// Le <footer> hérité de body.ts est retiré au rendu par stripFooter.

export const relatedServicesHtml = `
<!-- SERVICES LIÉS -->
<section class="rel-svc" aria-labelledby="rel-svc-title-sr">
  <div class="wrap">
    <div class="eyebrow">— Services liés</div>
    <h2 id="rel-svc-title-sr" style="margin:12px 0 0">Ce qui encadre<br>un chantier de conformité.</h2>
    <p class="rel-svc-lead">
      Chacune de ces prestations se cadre et se facture séparément. Aucune ne remplace la
      consultation juridique, la qualification réglementaire ni la représentation, qui restent
      confiées au professionnel habilité choisi par le client.
    </p>
    <div class="rel-svc-grid">
      <a class="rel-svc-card" href="/services/audit-technique">
        <div class="rel-svc-kind">Audit technique</div>
        <div class="rel-svc-title">Faire auditer le socle avant de documenter</div>
        <div class="rel-svc-why">Quand la demande vient d'un investisseur, d'un acquéreur ou d'un client grand compte, le format d'audit technique est plus large que le cadrage de cette page.</div>
      </a>
      <a class="rel-svc-card" href="/services/maintenance-evolution">
        <div class="rel-svc-kind">Maintenance &amp; évolution</div>
        <div class="rel-svc-title">Tenir les correctifs dans la durée</div>
        <div class="rel-svc-why">Mises à jour de sécurité, dépendances et suivi des écarts demandent un rythme régulier. Forfaits Care, Care+ et Care Pro, durée au devis.</div>
      </a>
      <a class="rel-svc-card" href="/services/saas-applications-metier">
        <div class="rel-svc-kind">SaaS &amp; applications métier</div>
        <div class="rel-svc-title">Reprendre l'application qui pose problème</div>
        <div class="rel-svc-why">Quand les écarts tiennent à l'architecture — cloisonnement, traçabilité, durées de conservation — la reconstruction se chiffre au forfait projet.</div>
      </a>
    </div>
  </div>
</section>
`;
