import { TEAM_TOTAL_COUNT } from "@/lib/team";

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

    <div class="cmp-context reveal">
      <div class="cmp-context-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Lecture du tableau
      </div>
      <p>
        Les fourchettes ci-dessous sont <b>indicatives</b> et reposent sur un projet-type récurrent
        chez nous : <b>un SaaS métier ou outil interne PME — 8 à 15 écrans, authentification,
        paiements Stripe, dashboard, back-office, hébergement FR</b>. Un projet plus simple
        (landing, site vitrine) descend nettement, un projet plus complexe (multi-tenant, IA, marketplace)
        monte. <b>Votre cas est chiffré individuellement</b> en 48 h après un cadrage de 30 min — vous
        pouvez aussi décrire votre projet en 3 min et recevoir une réponse personnelle sous 24 h ouvrées.
      </p>
      <a href="/demarrer-un-projet" class="cmp-context-cta">
        Décrire mon projet (3 min)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>

    <div class="cmp-table reveal">
      <div class="cmp-head">
        <div class="cmp-col cmp-col-label"></div>
        <div class="cmp-col">
          <div class="cmp-kind">Option A</div>
          <div class="cmp-title">Freelance solo</div>
          <div class="cmp-price">≈ 5 – 15 k€<span class="cmp-price-note">sur le projet-type</span></div>
        </div>
        <div class="cmp-col cmp-col-us">
          <div class="cmp-kind">Nous</div>
          <div class="cmp-title">Hagnéré Code</div>
          <div class="cmp-price">≈ 25 – 60 k€<span class="cmp-price-note">sur le projet-type · sur devis</span></div>
        </div>
        <div class="cmp-col">
          <div class="cmp-kind">Option C</div>
          <div class="cmp-title">Grand cabinet / ESN</div>
          <div class="cmp-price">≈ 80 – 200 k€<span class="cmp-price-note">sur le projet-type</span></div>
        </div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Équipe dédiée à votre projet</div>
        <div class="cmp-col">1 personne</div>
        <div class="cmp-col cmp-col-us"><b>Binôme à trinôme de seniors</b> (gérant-lead, dev, designer ou expert IA selon besoin), piochés dans une équipe de ${TEAM_TOTAL_COUNT}</div>
        <div class="cmp-col">1 senior + 4 à 8 juniors</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Continuité (vacances, maladie)</div>
        <div class="cmp-col cmp-bad">Projet à l'arrêt</div>
        <div class="cmp-col cmp-col-us cmp-good">Équipe identifiée, relais organisé</div>
        <div class="cmp-col cmp-good">Équipe assurée mais rotation fréquente</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Interlocuteur</div>
        <div class="cmp-col">Le freelance lui-même</div>
        <div class="cmp-col cmp-col-us"><b>Quelqu'un qui code aussi</b></div>
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
        <div class="cmp-col cmp-col-label">Délai de livraison <span class="cmp-row-hint">(projet-type)</span></div>
        <div class="cmp-col">Variable, dépend d'une personne</div>
        <div class="cmp-col cmp-col-us"><b>4 à 10 semaines</b> · démos hebdo · cadrage en 30 min</div>
        <div class="cmp-col">6 à 12 mois · jalons trimestriels</div>
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
        <div class="cmp-col cmp-col-us cmp-good"><b>Droits, dépôt et hébergement au devis</b></div>
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
          Projet ponctuel &amp; circonscrit,<br>
          compétence précise,<br>
          vous pilotez vous-même
        </div>
        <div class="cmp-col cmp-col-us">
          <b>PME/ETI sans équipe tech,</b><br>
          besoin d'un produit complet,<br>
          forfait fixe &amp; transparence
        </div>
        <div class="cmp-col">
          Gros volumes,<br>
          enjeux réglementaires lourds,<br>
          besoin d'une marque rassurante
        </div>
      </div>
    </div>

    <div class="cmp-disclaimer reveal">
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      <span>
        <b>Tous les chiffrages sont sur devis</b> — la fourchette ci-dessus n'a de sens que sur le projet-type cité.
        Pour votre cas&nbsp;: <a href="/demarrer-un-projet">décrivez votre projet (3 min)</a> ou
        <a href="#contact">réservez un cadrage de 30 min avec l'équipe</a>.
      </span>
    </div>
  </div>
</section>
`;
