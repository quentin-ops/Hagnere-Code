export const comparisonHtml = `
<!-- COMPARISON M&E -->
<section class="at-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer</div>
        <h2>Freelance, grande ESN, régie<br>TJM — ou nous ?</h2>
      </div>
      <div class="right">
        On ne prétend pas être la meilleure option partout.
        Voici la comparaison honnête — <b>si vous êtes dans une colonne qui
        n'est pas la nôtre, on vous le dira en 30 min</b>.
      </div>
    </div>

    <div class="at-cmp-table reveal">
      <div class="at-cmp-head">
        <div class="at-cmp-col at-cmp-col-label"></div>
        <div class="at-cmp-col"><div class="at-cmp-kind">Option A</div><div class="at-cmp-title">Freelance senior solo</div><div class="at-cmp-price">TJM 550–900 € · 5-10 j/mois</div></div>
        <div class="at-cmp-col"><div class="at-cmp-kind">Option B</div><div class="at-cmp-title">Grande ESN / agence craft</div><div class="at-cmp-price">10 000–30 000 € / mois</div></div>
        <div class="at-cmp-col at-cmp-col-us"><div class="at-cmp-kind">Nous</div><div class="at-cmp-title">Hagnéré Code</div><div class="at-cmp-price">2 500–14 000 € / mois forfait</div></div>
        <div class="at-cmp-col"><div class="at-cmp-kind">Option D</div><div class="at-cmp-title">Régie / staff aug</div><div class="at-cmp-price">TJM 700–950 € · 15-20 j/mois</div></div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Modèle de facturation</div>
        <div class="at-cmp-col">TJM à l'unité · variable</div>
        <div class="at-cmp-col at-cmp-bad">Régie + avenants</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Forfait mensuel tout inclus</b></div>
        <div class="at-cmp-col at-cmp-bad">TJM régie · variable</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Équipe sur votre compte</div>
        <div class="at-cmp-col at-cmp-bad">1 personne · bus factor = 1</div>
        <div class="at-cmp-col">Pool tournant · account manager</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>2 à 4 pers. nommées · binôme</b></div>
        <div class="at-cmp-col">Devs staffés · rotation fréquente</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Monitoring &amp; observability</div>
        <div class="at-cmp-col at-cmp-bad">À la demande · souvent absent</div>
        <div class="at-cmp-col">Au forfait + rebilling outils</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Sentry + Better Stack + Grafana inclus</b></div>
        <div class="at-cmp-col at-cmp-bad">Non inclus · à votre charge</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">CVE patchés sous 48 h</div>
        <div class="at-cmp-col at-cmp-bad">Dépend de la dispo</div>
        <div class="at-cmp-col">Selon contrat SLA</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Contractuel · automatisé</b></div>
        <div class="at-cmp-col at-cmp-bad">Non garanti · sur demande</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Astreinte 7j/7 avec MTTR contractuel</div>
        <div class="at-cmp-col at-cmp-bad">Aucune · best effort</div>
        <div class="at-cmp-col">Tier premium uniquement</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Tier Scale &amp; Premium · pénalités auto</b></div>
        <div class="at-cmp-col at-cmp-bad">Non inclus</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">SLA avec pénalités chiffrées</div>
        <div class="at-cmp-col at-cmp-bad">Aucun</div>
        <div class="at-cmp-col at-cmp-bad">Discussion au cas par cas</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Avoir automatique si manqué</b></div>
        <div class="at-cmp-col at-cmp-bad">Hors sujet · régie</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Propriété code + infra</div>
        <div class="at-cmp-col at-cmp-good">Chez vous par défaut</div>
        <div class="at-cmp-col at-cmp-bad">Code chez vous · infra parfois mixte</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>100 % chez vous depuis J+1</b></div>
        <div class="at-cmp-col at-cmp-good">Chez vous</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Rituels &amp; reporting mensuel</div>
        <div class="at-cmp-col at-cmp-bad">Informel · pas de rapport</div>
        <div class="at-cmp-col">Standard · qualité variable</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Comité 1h/mois + rapport 15-20 p.</b></div>
        <div class="at-cmp-col at-cmp-bad">Dépend du PO interne</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Flexibilité contractuelle</div>
        <div class="at-cmp-col at-cmp-good">Aucun engagement · mais fragile</div>
        <div class="at-cmp-col at-cmp-bad">12-24 mois engagement strict</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>3-6 mois puis mois par mois</b></div>
        <div class="at-cmp-col">Mensuel · mais dépendance</div>
      </div>

      <div class="at-cmp-row at-cmp-row-verdict">
        <div class="at-cmp-col at-cmp-col-label">À choisir si…</div>
        <div class="at-cmp-col">App simple, usage &lt; 5 j/mois, tolérance au bus factor = 1</div>
        <div class="at-cmp-col">Grand compte, besoin de marque rassurante, budget &gt; 15 k€/mois</div>
        <div class="at-cmp-col at-cmp-col-us"><b>PME / ETI / scale-up 10-500 salariés, app en prod, budget 2,5-14 k€/mois, cherche relation long-terme avec équipe qui reste</b></div>
        <div class="at-cmp-col">CTO interne solide + besoin de capacité dev en plus · 15+ j/mois</div>
      </div>
    </div>

    <div class="at-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Pas sûr d'être dans notre zone ? <a href="#contact">Parlons-en 30 minutes</a> — si c'est un freelance ou une grande agence qu'il vous faut, on vous le dira franchement.
    </div>
  </div>
</section>
`;
