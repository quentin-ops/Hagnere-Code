// Maillage interne éditorialisé, rendu dans <main>.
// Le <footer> hérité de body.ts est retiré au rendu par stripFooter.

export const relatedServicesHtml = `
<!-- SERVICES LIÉS -->
<section class="rel-svc" aria-labelledby="rel-svc-title-cv">
  <div class="wrap">
    <div class="eyebrow">— Services liés</div>
    <h2 id="rel-svc-title-cv" style="margin:12px 0 0">Une vidéo ne sert à rien<br>si personne ne la voit.</h2>
    <p class="rel-svc-lead">
      Diffusion et page d'atterrissage se cadrent et se facturent séparément de la production.
      Rien n'est ajouté automatiquement à un forfait vidéo.
    </p>
    <div class="rel-svc-grid">
      <a class="rel-svc-card" href="/services/publicite-en-ligne">
        <div class="rel-svc-kind">Publicité en ligne</div>
        <div class="rel-svc-title">Diffuser les vidéos en payant</div>
        <div class="rel-svc-why">Google, Meta ou LinkedIn consomment des variantes créatives en continu. Le pilotage des campagnes et le budget média sont une prestation distincte.</div>
      </a>
      <a class="rel-svc-card" href="/services/sites-vitrines">
        <div class="rel-svc-kind">Sites vitrines &amp; landing pages</div>
        <div class="rel-svc-title">Poser la page qui reçoit le trafic</div>
        <div class="rel-svc-why">Une vidéo qui renvoie vers une page floue perd le bénéfice de l'attention gagnée. La page se conçoit avec le message de la vidéo.</div>
      </a>
      <a class="rel-svc-card" href="/services/referencement-google">
        <div class="rel-svc-kind">Référencement naturel</div>
        <div class="rel-svc-title">Faire durer les contenus au-delà de la campagne</div>
        <div class="rel-svc-why">Transcriptions, pages piliers et maillage prolongent la durée de vie d'un tournage. Aucune position n'est garantie pour autant.</div>
      </a>
    </div>
  </div>
</section>
`;
