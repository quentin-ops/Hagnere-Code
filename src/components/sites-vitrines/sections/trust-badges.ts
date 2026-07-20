// Trust badges : engagements contractuels factuels (forfait fixe, propriété code,
// garantie bugs, hébergement FR, audit de sortie). Pas de revendication de certifications
// non détenues — les options de financement sont présentées comme éligibilité à étudier.

export const trustBadgesHtml = `
<!-- TRUST BADGES -->
<section class="sv-trust">
  <div class="wrap">
    <div class="sv-trust-head reveal">
      <div class="eyebrow">— Engagements &amp; garanties</div>
      <h2>Ce qu'on signe<br>avant de commencer.</h2>
      <p>Cette page décrit les points à cadrer. Seuls les engagements repris dans le devis ou le contrat signé s'appliquent à votre projet.</p>
    </div>

    <div class="sv-trust-grid">
      <div class="sv-trust-card reveal">
        <div class="sv-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        </div>
        <h3>Objectifs et recette documentés</h3>
        <p>Le devis transforme le besoin en pages, fonctionnalités, contenus, critères de recette et dépendances client vérifiables.</p>
        <div class="sv-trust-foot">— Périmètre avant engagement</div>
      </div>

      <div class="sv-trust-card reveal reveal-d-1">
        <div class="sv-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg>
        </div>
        <h3>Hébergement documenté</h3>
        <p>Le fournisseur, le compte propriétaire, la région, les sous-traitants, les sauvegardes et la réversibilité sont précisés selon l'architecture retenue.</p>
        <div class="sv-trust-foot">— Configuration propre au projet</div>
      </div>

      <div class="sv-trust-card reveal reveal-d-2">
        <div class="sv-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
        </div>
        <h3>Forfait fixe contractuel</h3>
        <p>Le prix couvre le périmètre validé. <b>Aucun dépassement unilatéral</b>&nbsp;: une demande nouvelle est chiffrée et acceptée avant réalisation. Une pénalité ou remise ne s'applique que si le contrat signé la prévoit.</p>
        <div class="sv-trust-foot">— Changements approuvés avant réalisation</div>
      </div>

      <div class="sv-trust-card reveal reveal-d-3">
        <div class="sv-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <h3>Livrables et droits inventoriés</h3>
        <p>Les livrables spécifiques sont transférés après paiement complet selon les CGV. Le devis précise dépôt, accès et réversibilité, avec les composants préexistants et licences tierces.</p>
        <div class="sv-trust-foot">— Cession et exclusions explicites</div>
      </div>

      <div class="sv-trust-card reveal">
        <div class="sv-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        </div>
        <h3>Recette et garantie définies</h3>
        <p>Les critères de recette, la période de correction, les niveaux de sévérité et les délais cibles figurent au devis. Aucun délai universel n'est promis par cette page.</p>
        <div class="sv-trust-foot">— Couverture et exclusions écrites</div>
      </div>

      <div class="sv-trust-card reveal reveal-d-1">
        <div class="sv-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>Réversibilité organisée</h3>
        <p>Le compte du dépôt, l'hébergement, le domaine, la documentation et les éléments de passation sont listés au devis pour permettre une reprise réaliste.</p>
        <div class="sv-trust-foot">— Accès et passation au devis</div>
      </div>

      <div class="sv-trust-card reveal reveal-d-2">
        <div class="sv-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V15"/></svg>
        </div>
        <h3>Partenaire techno vérifié</h3>
        <p>Stack : <b>Next.js</b>, <b>React</b>, <b>TypeScript</b>, <b>Stripe</b>, <b>Claude</b>. Équipe formée aux dernières versions stables.</p>
        <div class="sv-trust-foot">— Mise à jour trimestrielle</div>
      </div>

      <div class="sv-trust-card reveal reveal-d-3">
        <div class="sv-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
        </div>
        <h3>Formation dimensionnée</h3>
        <p>Public, durée, support, enregistrement et documentation sont adaptés au site et chiffrés dans le devis.</p>
        <div class="sv-trust-foot">— Format explicite avant engagement</div>
      </div>
    </div>
  </div>
</section>
`;
