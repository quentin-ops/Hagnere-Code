export const comparisonHtml = `
<!-- COMPARISON M&E -->
<section class="me-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer</div>
        <h2>Freelance, grande ESN, régie<br>TJM — ou nous ?</h2>
      </div>
      <div class="right">
        On ne prétend pas être la meilleure option partout.
        Cette grille sert à préparer vos questions. Les prix et modalités d'un tiers varient&nbsp;:
        <b>vérifiez-les dans son devis plutôt que de les tenir pour acquis</b>.
      </div>
    </div>

    <div class="me-cmp-table reveal">
      <div class="me-cmp-head">
        <div class="me-cmp-col me-cmp-col-label"></div>
        <div class="me-cmp-col"><div class="me-cmp-kind">Option A</div><div class="me-cmp-title">Freelance</div><div class="me-cmp-price">Tarif et capacité à vérifier</div></div>
        <div class="me-cmp-col"><div class="me-cmp-kind">Option B</div><div class="me-cmp-title">ESN / agence</div><div class="me-cmp-price">Tarif et capacité à vérifier</div></div>
        <div class="me-cmp-col me-cmp-col-us"><div class="me-cmp-kind">Nous</div><div class="me-cmp-title">Hagnéré Code</div><div class="me-cmp-price">Sur devis selon capacité et couverture</div></div>
        <div class="me-cmp-col"><div class="me-cmp-kind">Option D</div><div class="me-cmp-title">Régie / renfort</div><div class="me-cmp-price">TJM et capacité à vérifier</div></div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Modèle de facturation</div>
        <div class="me-cmp-col">Forfait ou TJM à vérifier</div>
        <div class="me-cmp-col">Forfait ou régie à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Forfait et inclusions au devis</b></div>
        <div class="me-cmp-col">TJM et plafond à vérifier</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Équipe sur votre compte</div>
        <div class="me-cmp-col">Nom, disponibilité et relais à vérifier</div>
        <div class="me-cmp-col">Noms, statuts et rotation à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Intervenants et relais au devis</b></div>
        <div class="me-cmp-col">Noms, capacité et rotation à vérifier</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Monitoring &amp; observability</div>
        <div class="me-cmp-col">Outils, alertes et coût à vérifier</div>
        <div class="me-cmp-col">Outils, alertes et coût à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Outils et alertes au devis</b></div>
        <div class="me-cmp-col">Responsabilité et coût à vérifier</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Délai de traitement des CVE</div>
        <div class="me-cmp-col">Délai par criticité à vérifier</div>
        <div class="me-cmp-col">Délai par criticité à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Délai défini au devis selon criticité</b></div>
        <div class="me-cmp-col">Délai par criticité à vérifier</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Astreinte et MTTR cible</div>
        <div class="me-cmp-col">Couverture et relais à vérifier</div>
        <div class="me-cmp-col">Couverture et tarif à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Option chiffrée selon la couverture</b></div>
        <div class="me-cmp-col">Couverture et tarif à vérifier</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Mesure et conséquence d'un SLA</div>
        <div class="me-cmp-col">Mesure et conséquence à vérifier</div>
        <div class="me-cmp-col">Mesure et conséquence à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Mesure et conséquence au contrat</b></div>
        <div class="me-cmp-col">Mesure et responsabilité à vérifier</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Propriété code + infra</div>
        <div class="me-cmp-col">Droits, dépôt et comptes à vérifier</div>
        <div class="me-cmp-col">Droits, dépôt et comptes à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Comptes client · droits selon CGV</b></div>
        <div class="me-cmp-col">Droits, dépôt et comptes à vérifier</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Rituels &amp; reporting mensuel</div>
        <div class="me-cmp-col">Rythme et format à vérifier</div>
        <div class="me-cmp-col">Rythme et format à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Rythme et format définis au devis</b></div>
        <div class="me-cmp-col">Responsable et format à vérifier</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Flexibilité contractuelle</div>
        <div class="me-cmp-col">Durée et préavis à vérifier</div>
        <div class="me-cmp-col">Durée et préavis à vérifier</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Durée et préavis écrits au devis</b></div>
        <div class="me-cmp-col">Durée, sortie et relais à vérifier</div>
      </div>

      <div class="me-cmp-row me-cmp-row-verdict">
        <div class="me-cmp-col me-cmp-col-label">À choisir si…</div>
        <div class="me-cmp-col">Besoin compatible avec une personne et un plan de relais clair</div>
        <div class="me-cmp-col">Besoin compatible avec sa gouvernance et son organisation</div>
        <div class="me-cmp-col me-cmp-col-us"><b>Besoin de maintenance cadrée, capacité réservée et interlocuteurs nommés</b></div>
        <div class="me-cmp-col">Équipe interne capable de piloter un renfort en régie</div>
      </div>
    </div>

    <div class="me-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Pas sûr d'être dans notre zone ? <a href="#contact">Parlons-en 30 minutes</a> — si c'est un freelance ou une grande agence qu'il vous faut, on vous le dira franchement.
    </div>
  </div>
</section>
`;
