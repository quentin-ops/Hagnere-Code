export const comparisonHtml = `
<!-- COMPARISON AUDIT · 5 colonnes -->
<section class="at-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer</div>
        <h2>SonarQube SaaS, freelance Malt,<br>grande ESN, DIY interne<br>— ou nous ?</h2>
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
        <div class="at-cmp-col"><div class="at-cmp-kind">Option A</div><div class="at-cmp-title">SonarQube SaaS · Codacy</div><div class="at-cmp-price">200–800 €/mois</div></div>
        <div class="at-cmp-col"><div class="at-cmp-kind">Option B</div><div class="at-cmp-title">Freelance Malt senior</div><div class="at-cmp-price">6–15 k€ · 5-15 j</div></div>
        <div class="at-cmp-col at-cmp-col-us"><div class="at-cmp-kind">Nous</div><div class="at-cmp-title">Hagnéré Code</div><div class="at-cmp-price">8–68 k€ · fixe publié</div></div>
        <div class="at-cmp-col"><div class="at-cmp-kind">Option D</div><div class="at-cmp-title">Grande ESN · OCTO / Theodo</div><div class="at-cmp-price">40–120 k€ · 4-12 sem.</div></div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Nature du livrable</div>
        <div class="at-cmp-col at-cmp-bad">Dashboard automated · pas board-ready</div>
        <div class="at-cmp-col">Opinion + slides · qualité variable</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Rapport + Tech Debt P&amp;L · deck board-ready · backlog chiffré</b></div>
        <div class="at-cmp-col">Rapport lourd · polish corporate</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Défendable en board / VC / M&amp;A</div>
        <div class="at-cmp-col at-cmp-bad">Non · trop technique, pas de narratif</div>
        <div class="at-cmp-col at-cmp-bad">Rare · pas de brand trust tiers</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Oui · version board-safe + Loom · format 2026</b></div>
        <div class="at-cmp-col at-cmp-good">Oui · très "corporate"</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Dimensions couvertes</div>
        <div class="at-cmp-col at-cmp-bad">1-2 · code quality uniquement</div>
        <div class="at-cmp-col">3-4 · selon spécialité du freelance</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>8 dimensions · grille documentée</b></div>
        <div class="at-cmp-col at-cmp-good">8-9 · méthodologie propriétaire</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Conflit d'intérêt traité</div>
        <div class="at-cmp-col">Non applicable · produit SaaS</div>
        <div class="at-cmp-col at-cmp-bad">Aucune clause · freelance cherche mission</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Constats et hypothèses de coût séparés · remédiation sur devis distinct</b></div>
        <div class="at-cmp-col at-cmp-bad">Ambigu · cabinet pousse delivery</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Tech Debt chiffrée en euros</div>
        <div class="at-cmp-col at-cmp-bad">Non · score arbitraire /100</div>
        <div class="at-cmp-col at-cmp-bad">Rarement · pas de méthodo propriétaire</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Oui · Tech Debt P&amp;L livrable signature</b></div>
        <div class="at-cmp-col">Oui mais format dense · lisible techniciens</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">NDA mutuel &amp; confidentialité</div>
        <div class="at-cmp-col">CGU SaaS standard · données sur leur infra</div>
        <div class="at-cmp-col">NDA optionnel · clauses incertaines</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>NDA disponible avant les accès · confidentialité et droits précisés au devis</b></div>
        <div class="at-cmp-col at-cmp-good">NDA renforcé · assurances solides</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Délai de livraison</div>
        <div class="at-cmp-col at-cmp-good">Instant · scan continu</div>
        <div class="at-cmp-col">5-15 j · selon planning freelance</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Calendrier et prérequis fixés dans le devis</b></div>
        <div class="at-cmp-col at-cmp-bad">4-12 semaines · process lourd</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Équipe nommée dans le devis</div>
        <div class="at-cmp-col at-cmp-bad">Non · produit</div>
        <div class="at-cmp-col">Une personne unique</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Intervenants et rôles nommés dans le devis selon le périmètre</b></div>
        <div class="at-cmp-col at-cmp-bad">Équipe senior garantie sur devis uniquement</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Méthodologie documentée</div>
        <div class="at-cmp-col">Documentation éditeur · règles génériques</div>
        <div class="at-cmp-col at-cmp-bad">Inexistante ou orale</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Grille, référentiels et exemple de livrable présentés au cadrage</b></div>
        <div class="at-cmp-col at-cmp-good">Book of knowledge interne propriétaire</div>
      </div>

      <div class="at-cmp-row">
        <div class="at-cmp-col at-cmp-col-label">Garantie qualité</div>
        <div class="at-cmp-col">SLA uptime du SaaS</div>
        <div class="at-cmp-col at-cmp-bad">Aucune · "si pas satisfait, on s'arrange"</div>
        <div class="at-cmp-col at-cmp-col-us at-cmp-good"><b>Livrables et critères d'acceptation écrits au devis</b></div>
        <div class="at-cmp-col">Retake partiel possible · négocié</div>
      </div>

      <div class="at-cmp-row at-cmp-row-verdict">
        <div class="at-cmp-col at-cmp-col-label">À choisir si…</div>
        <div class="at-cmp-col">Vous voulez un monitoring continu de la qualité code · enjeu interne uniquement</div>
        <div class="at-cmp-col">Budget &lt; 10 k€, enjeu interne non board-level, confiance déjà établie avec le freelance</div>
        <div class="at-cmp-col at-cmp-col-us"><b>PME / ETI / scale-up 10-500 salariés, enjeu board / VC / M&amp;A / compliance, besoin d'un rapport défendable en 10 jours avec Tech Debt P&amp;L chiffré</b></div>
        <div class="at-cmp-col">Budget &gt; 40 k€, grand compte, besoin d'une "marque rassurante" corporate, timeline pas critique</div>
      </div>
    </div>

    <div class="at-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Pas sûr d'être dans notre zone ? <a href="#contact">Parlons-en 30 minutes</a> — si c'est du SonarQube SaaS ou une grande ESN qu'il vous faut, on vous le dira franchement et on vous orientera.
    </div>
  </div>
</section>
`;
