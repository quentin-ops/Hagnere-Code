export const comparisonHtml = `
<!-- COMPARISON TABLE -->
<section class="compare" id="comparaison">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer</div>
        <h2>Freelance, grand cabinet,<br>ou nous ?</h2>
      </div>
      <div class="right">
        On ne prétend pas être la meilleure option dans tous les cas.
        Voici une comparaison honnête pour savoir quand nous choisir —
        et quand aller voir ailleurs.
      </div>
    </div>

    <div class="cmp-table reveal">
      <div class="cmp-head">
        <div class="cmp-col cmp-col-label"></div>
        <div class="cmp-col">
          <div class="cmp-kind">Option A</div>
          <div class="cmp-title">Freelance solo</div>
          <div class="cmp-price">5 – 15 k€</div>
        </div>
        <div class="cmp-col cmp-col-us">
          <div class="cmp-kind">Nous</div>
          <div class="cmp-title">Hagnéré Code</div>
          <div class="cmp-price">25 – 60 k€</div>
        </div>
        <div class="cmp-col">
          <div class="cmp-kind">Option C</div>
          <div class="cmp-title">Grand cabinet / ESN</div>
          <div class="cmp-price">80 – 200 k€</div>
        </div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Équipe dédiée à votre projet</div>
        <div class="cmp-col">1 personne</div>
        <div class="cmp-col cmp-col-us"><b>Binôme à trinôme de seniors</b> (associé-lead, dev, designer ou expert IA selon besoin), piochés dans une équipe de 6</div>
        <div class="cmp-col">1 senior + 4 à 8 juniors</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Continuité (vacances, maladie)</div>
        <div class="cmp-col cmp-bad">Projet à l'arrêt</div>
        <div class="cmp-col cmp-col-us cmp-good">Équipe en CDI, relais assuré</div>
        <div class="cmp-col cmp-good">Équipe assurée mais rotation fréquente</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Interlocuteur</div>
        <div class="cmp-col">Le freelance lui-même</div>
        <div class="cmp-col cmp-col-us"><b>Un associé qui code aussi</b></div>
        <div class="cmp-col">Commercial → chef de projet → dev</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Compétences</div>
        <div class="cmp-col">Une spécialité (front OU back OU IA)</div>
        <div class="cmp-col cmp-col-us"><b>Full-stack</b> + design + IA + DevOps</div>
        <div class="cmp-col">Full-stack mais dilué</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Tarification</div>
        <div class="cmp-col">Régie (compteur qui tourne)</div>
        <div class="cmp-col cmp-col-us"><b>Forfait fixe</b>, prix annoncé = prix payé</div>
        <div class="cmp-col">Forfait + avenants chronophages</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Délai de livraison</div>
        <div class="cmp-col">Variable, dépend d'une personne</div>
        <div class="cmp-col cmp-col-us"><b>2 à 12 semaines</b> · démos hebdo</div>
        <div class="cmp-col">3 à 12 mois · jalons trimestriels</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Process & revue de code</div>
        <div class="cmp-col cmp-bad">Rarement formalisé</div>
        <div class="cmp-col cmp-col-us cmp-good">Tests + CI/CD + code review systématique</div>
        <div class="cmp-col cmp-good">Process lourds, audit possible</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Propriété du code &amp; données</div>
        <div class="cmp-col">À négocier au cas par cas</div>
        <div class="cmp-col cmp-col-us cmp-good"><b>100% à vous dès J1</b> (Git, hébergement FR)</div>
        <div class="cmp-col">À vous, après validation juridique</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Rapport qualité / prix</div>
        <div class="cmp-col">Excellent pour tickets &lt; 15 k€</div>
        <div class="cmp-col cmp-col-us cmp-good"><b>Sweet spot des projets PME ambitieux</b></div>
        <div class="cmp-col">Justifié uniquement au-dessus de 200 k€</div>
      </div>

      <div class="cmp-row cmp-row-verdict">
        <div class="cmp-col cmp-col-label">À choisir si…</div>
        <div class="cmp-col">
          Besoin ponctuel &lt; 15 k€,<br>
          compétence précise,<br>
          vous pilotez vous-même
        </div>
        <div class="cmp-col cmp-col-us">
          <b>Projet PME/ETI 25-100 k€,</b><br>
          pas (ou peu) d'équipe tech,<br>
          forfait fixe &amp; transparence
        </div>
        <div class="cmp-col">
          Budget 150 k€+,<br>
          enjeux réglementaires lourds,<br>
          besoin d'une marque rassurante
        </div>
      </div>
    </div>

    <div class="cmp-disclaimer reveal">
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Pas sûr d'être dans notre zone ? <a href="#contact">Parlons-en 30 minutes</a> — si ce n'est pas pour nous, on vous oriente vers le bon interlocuteur, franchement.
    </div>
  </div>
</section>
`;
