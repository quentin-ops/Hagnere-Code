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
        <div class="me-cmp-col"><div class="me-cmp-kind">Option A</div><div class="me-cmp-title">Freelance senior solo</div><div class="me-cmp-price">TJM 550–900 € · 5-10 j/mois</div></div>
        <div class="me-cmp-col"><div class="me-cmp-kind">Option B</div><div class="me-cmp-title">Grande ESN / agence craft</div><div class="me-cmp-price">10 000–30 000 € / mois</div></div>
        <div class="me-cmp-col me-cmp-col-us"><div class="me-cmp-kind">Nous</div><div class="me-cmp-title">Hagnéré Code</div><div class="me-cmp-price">2 500–14 000 € / mois forfait</div></div>
        <div class="me-cmp-col"><div class="me-cmp-kind">Option D</div><div class="me-cmp-title">Régie / staff aug</div><div class="me-cmp-price">TJM 700–950 € · 15-20 j/mois</div></div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Modèle de facturation</div>
        <div class="me-cmp-col">TJM à l'unité · variable</div>
        <div class="me-cmp-col me-cmp-bad">Régie + avenants</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Forfait mensuel tout inclus</b></div>
        <div class="me-cmp-col me-cmp-bad">TJM régie · variable</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Équipe sur votre compte</div>
        <div class="me-cmp-col me-cmp-bad">1 personne · bus factor = 1</div>
        <div class="me-cmp-col">Pool tournant · account manager</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>2 à 4 pers. nommées · binôme</b></div>
        <div class="me-cmp-col">Devs staffés · rotation fréquente</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Monitoring &amp; observability</div>
        <div class="me-cmp-col me-cmp-bad">À la demande · souvent absent</div>
        <div class="me-cmp-col">Au forfait + rebilling outils</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Sentry + Better Stack + Grafana inclus</b></div>
        <div class="me-cmp-col me-cmp-bad">Non inclus · à votre charge</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">CVE patchés sous 48 h</div>
        <div class="me-cmp-col me-cmp-bad">Dépend de la dispo</div>
        <div class="me-cmp-col">Selon contrat SLA</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Délai défini au devis selon criticité</b></div>
        <div class="me-cmp-col me-cmp-bad">Non garanti · sur demande</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Astreinte 7j/7 avec MTTR contractuel</div>
        <div class="me-cmp-col me-cmp-bad">Aucune · best effort</div>
        <div class="me-cmp-col">Tier premium uniquement</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Option chiffrée selon la couverture</b></div>
        <div class="me-cmp-col me-cmp-bad">Non inclus</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">SLA avec pénalités chiffrées</div>
        <div class="me-cmp-col me-cmp-bad">Aucun</div>
        <div class="me-cmp-col me-cmp-bad">Discussion au cas par cas</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Mesure et conséquence au contrat</b></div>
        <div class="me-cmp-col me-cmp-bad">Hors sujet · régie</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Propriété code + infra</div>
        <div class="me-cmp-col me-cmp-good">Chez vous par défaut</div>
        <div class="me-cmp-col me-cmp-bad">Code chez vous · infra parfois mixte</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Comptes client · droits selon CGV</b></div>
        <div class="me-cmp-col me-cmp-good">Chez vous</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Rituels &amp; reporting mensuel</div>
        <div class="me-cmp-col me-cmp-bad">Informel · pas de rapport</div>
        <div class="me-cmp-col">Standard · qualité variable</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Comité 1h/mois + rapport 15-20 p.</b></div>
        <div class="me-cmp-col me-cmp-bad">Dépend du PO interne</div>
      </div>

      <div class="me-cmp-row">
        <div class="me-cmp-col me-cmp-col-label">Flexibilité contractuelle</div>
        <div class="me-cmp-col me-cmp-good">Aucun engagement · mais fragile</div>
        <div class="me-cmp-col me-cmp-bad">12-24 mois engagement strict</div>
        <div class="me-cmp-col me-cmp-col-us me-cmp-good"><b>Durée et préavis écrits au devis</b></div>
        <div class="me-cmp-col">Mensuel · mais dépendance</div>
      </div>

      <div class="me-cmp-row me-cmp-row-verdict">
        <div class="me-cmp-col me-cmp-col-label">À choisir si…</div>
        <div class="me-cmp-col">App simple, usage &lt; 5 j/mois, tolérance au bus factor = 1</div>
        <div class="me-cmp-col">Grand compte, besoin de marque rassurante, budget &gt; 15 k€/mois</div>
        <div class="me-cmp-col me-cmp-col-us"><b>PME / ETI / scale-up 10-500 salariés, app en prod, budget 2,5-14 k€/mois, cherche relation long-terme avec équipe qui reste</b></div>
        <div class="me-cmp-col">CTO interne solide + besoin de capacité dev en plus · 15+ j/mois</div>
      </div>
    </div>

    <div class="me-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Pas sûr d'être dans notre zone ? <a href="#contact">Parlons-en 30 minutes</a> — si c'est un freelance ou une grande agence qu'il vous faut, on vous le dira franchement.
    </div>
  </div>
</section>
`;
