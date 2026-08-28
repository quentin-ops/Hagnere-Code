// Maillage interne éditorialisé, rendu dans <main>.
// Le <footer> hérité de body.ts est retiré au rendu par stripFooter.

export const relatedServicesHtml = `
<!-- SERVICES LIÉS -->
<section class="rel-svc" aria-labelledby="rel-svc-title-me">
  <div class="wrap">
    <div class="eyebrow">— Services liés</div>
    <h2 id="rel-svc-title-me" style="margin:12px 0 0">Ce qu'on branche<br>autour d'un contrat de run.</h2>
    <p class="rel-svc-lead">
      Chacune de ces prestations se cadre et se facture séparément du forfait mensuel.
      Rien n'est ajouté automatiquement&nbsp;: le devis dit ce qui est réellement couvert.
    </p>
    <div class="rel-svc-grid">
      <a class="rel-svc-card" href="/services/audit-technique">
        <div class="rel-svc-kind">Audit technique</div>
        <div class="rel-svc-title">Faire établir un état des lieux indépendant</div>
        <div class="rel-svc-why">Quand la décision porte sur une levée, une acquisition ou un go/no-go de refonte, le format d'audit est plus profond que l'audit flash de cette page.</div>
      </a>
      <a class="rel-svc-card" href="/services/securite-rgpd">
        <div class="rel-svc-kind">Sécurité &amp; RGPD</div>
        <div class="rel-svc-title">Documenter la conformité de l'application maintenue</div>
        <div class="rel-svc-why">Registre, sous-traitants, DPA et remédiation codée. Le run ne vaut pas conformité&nbsp;: la qualification reste confiée à votre DPO ou à votre conseil.</div>
      </a>
      <a class="rel-svc-card" href="/services/saas-applications-metier">
        <div class="rel-svc-kind">SaaS &amp; applications métier</div>
        <div class="rel-svc-title">Construire les évolutions hors capacité du forfait</div>
        <div class="rel-svc-why">Un nouveau module qui dépasse la capacité mensuelle sort du run et se chiffre au forfait projet.</div>
      </a>
    </div>
  </div>
</section>
`;
