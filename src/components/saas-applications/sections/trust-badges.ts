// Trust badges : engagements contractuels factuels (forfait fixe, propriété code,
// garantie bugs, hébergement FR, audit de sortie). Pas de revendication de certifications
// non détenues — les options de financement sont présentées comme éligibilité à étudier.

export const trustBadgesHtml = `
<!-- TRUST BADGES -->
<section class="sa-trust">
  <div class="wrap">
    <div class="sa-trust-head reveal">
      <div class="eyebrow">— Engagements &amp; garanties</div>
      <h2>Ce qu'on signe<br>avant de commencer.</h2>
      <p>Cette page décrit les points à cadrer. Seuls les engagements repris dans le devis ou le contrat signé s'appliquent à votre projet.</p>
    </div>

    <div class="sa-trust-grid">
      <div class="sa-trust-card reveal">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        </div>
        <h4>Documentation R&amp;D sur option</h4>
        <p>Le devis peut prévoir une documentation technique exploitable par votre conseil. <b>Hagnéré Code ne valide ni l'éligibilité au CIR ni son acceptation</b>.</p>
        <div class="sa-trust-foot">— Périmètre à valider avec votre conseil</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-1">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg>
        </div>
        <h4>Localisation et reprise documentées</h4>
        <p>Hébergement France ou Union européenne selon le besoin. Le devis précise <b>la localisation, les sous-traitants, le chiffrement, les sauvegardes, le RPO et le RTO</b>.</p>
        <div class="sa-trust-foot">— Architecture et runbook remis au client</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-2">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
        </div>
        <h4>Forfait fixe contractuel</h4>
        <p>Le prix couvre le périmètre validé. <b>Aucun dépassement unilatéral</b>&nbsp;: une demande nouvelle est chiffrée et acceptée avant réalisation. Une pénalité ou remise ne s'applique que si le contrat signé la prévoit.</p>
        <div class="sa-trust-foot">— Périmètre et changements écrits</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-3">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <h4>Livrables et droits inventoriés</h4>
        <p>Les livrables spécifiques sont transférés après paiement complet selon les CGV. Le devis précise dépôt, accès et réversibilité, avec les composants préexistants et licences tierces.</p>
        <div class="sa-trust-foot">— Cession et exclusions explicites</div>
      </div>

      <div class="sa-trust-card reveal">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        </div>
        <h4>Recette et garantie définies</h4>
        <p>Les critères de recette, la période de correction, les niveaux de sévérité et les délais cibles figurent au devis. Aucun délai universel n'est promis par cette page.</p>
        <div class="sa-trust-foot">— Couverture et exclusions écrites</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-1">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/><path d="M12 22a10 10 0 000-20"/></svg>
        </div>
        <h4>Dossier de sortie cadré</h4>
        <p>Le devis liste le code, les accès, dépendances, procédures de déploiement, documentation et éventuel audit de sortie remis lors de la passation.</p>
        <div class="sa-trust-foot">— Contenu du handover au devis</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-2">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V15"/></svg>
        </div>
        <h4>Stack documentée et réversible</h4>
        <p><b>Next.js, React, TypeScript, Laravel ou React Native</b> selon le besoin. Les versions, dépendances, services tiers et procédures de déploiement figurent dans le dossier de passation.</p>
        <div class="sa-trust-foot">— Aucun badge ni partenariat technique revendiqué</div>
      </div>

      <div class="sa-trust-card reveal reveal-d-3">
        <div class="sa-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
        </div>
        <h4>Formation dimensionnée</h4>
        <p>Public, durée, support, enregistrement et documentation sont adaptés au produit et chiffrés dans le devis.</p>
        <div class="sa-trust-foot">— Format explicite avant engagement</div>
      </div>
    </div>
  </div>
</section>
`;
