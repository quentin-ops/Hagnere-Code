import { TEAM_TOTAL_COUNT } from "@/lib/team";

export const comparisonHtml = `
<!-- COMPARISON TABLE -->
<section class="compare" id="comparaison">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer</div>
        <h2>Comparer trois modes<br>de prestation.</h2>
      </div>
      <div class="right">
        On ne prétend pas être la meilleure option dans tous les cas.
        Les pratiques varient d'un prestataire à l'autre&nbsp;: ce tableau indique
        les points à vérifier dans chaque proposition, pas des vérités sur tout un marché.
      </div>
    </div>

    <div class="cmp-context reveal">
      <div class="cmp-context-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Lecture du tableau
      </div>
      <p>
        Notre fourchette est <b>indicative</b> et repose sur un projet-type
        chez nous : <b>un SaaS métier ou outil interne PME — 8 à 15 écrans, authentification,
        paiements Stripe, dashboard, back-office, hébergement FR</b>. Un projet plus simple
        (landing, site vitrine) descend nettement, un projet plus complexe (multi-tenant, IA, marketplace)
        monte. Les tarifs des autres prestataires dépendent de leur proposition et ne sont pas estimés ici.
        <b>Votre fourchette est établie après cadrage</b>. Vous pouvez aussi décrire votre projet
        en 3 min&nbsp;: notre objectif est de répondre le prochain jour ouvré, sans délai garanti.
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
          <div class="cmp-price">Sur devis<span class="cmp-price-note">selon profil et périmètre</span></div>
        </div>
        <div class="cmp-col cmp-col-us">
          <div class="cmp-kind">Nous</div>
          <div class="cmp-title">Hagnéré Code</div>
          <div class="cmp-price">≈ 25 – 60 k€<span class="cmp-price-note">sur le projet-type · sur devis</span></div>
        </div>
        <div class="cmp-col">
          <div class="cmp-kind">Option C</div>
          <div class="cmp-title">Grand cabinet / ESN</div>
          <div class="cmp-price">Sur devis<span class="cmp-price-note">selon équipe et périmètre</span></div>
        </div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Équipe dédiée à votre projet</div>
        <div class="cmp-col">1 personne</div>
        <div class="cmp-col cmp-col-us"><b>Intervenants nommés au devis</b> (président-lead, dev, designer ou expert IA selon le besoin), parmi ${TEAM_TOTAL_COUNT} profils présentés</div>
        <div class="cmp-col">Composition à vérifier dans la proposition</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Continuité (vacances, maladie)</div>
        <div class="cmp-col">Dépend de l'organisation prévue</div>
        <div class="cmp-col cmp-col-us cmp-good">Relais et modalités de remplacement écrits au devis</div>
        <div class="cmp-col">Dépend de l'équipe et du contrat</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Interlocuteur</div>
        <div class="cmp-col">Le freelance lui-même</div>
        <div class="cmp-col cmp-col-us"><b>Intervenant projet identifié</b></div>
        <div class="cmp-col">Circuit à vérifier dans la proposition</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Compétences</div>
        <div class="cmp-col">Dépend du profil retenu</div>
        <div class="cmp-col cmp-col-us"><b>Compétences mobilisées et nommées</b> selon le périmètre</div>
        <div class="cmp-col">Dépend de l'équipe proposée</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Tarification</div>
        <div class="cmp-col">Forfait ou régie selon l'offre</div>
        <div class="cmp-col cmp-col-us"><b>Prix du périmètre écrit</b> · aucun dépassement sans accord écrit</div>
        <div class="cmp-col">Forfait ou régie selon l'offre</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Délai de livraison <span class="cmp-row-hint">(projet-type)</span></div>
        <div class="cmp-col">Planning proposé au cas par cas</div>
        <div class="cmp-col cmp-col-us"><b>Jalons, dépendances et recette au devis</b></div>
        <div class="cmp-col">Planning proposé au cas par cas</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Process & revue de code</div>
        <div class="cmp-col">Pratiques à demander avant signature</div>
        <div class="cmp-col cmp-col-us cmp-good">Tests, CI/CD et revues précisés selon le projet</div>
        <div class="cmp-col">Pratiques à demander avant signature</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Propriété du code &amp; données</div>
        <div class="cmp-col">À lire dans le devis, les CGV et les licences</div>
        <div class="cmp-col cmp-col-us cmp-good"><b>Accès et droits écrits au devis</b> · transfert après paiement complet selon les CGV, hors composants préexistants et licences tierces</div>
        <div class="cmp-col">À lire dans le devis, les CGV et les licences</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Comparaison utile</div>
        <div class="cmp-col">Périmètre, disponibilité et références du profil</div>
        <div class="cmp-col cmp-col-us cmp-good"><b>Livrables, équipe, jalons, prix et droits écrits</b></div>
        <div class="cmp-col">Composition, gouvernance, livrables et coûts tiers</div>
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
        <b>Ce tableau n'est pas une étude de marché</b> — les pratiques des prestataires doivent être vérifiées dans leur proposition.
        La fourchette Hagnéré Code n'a de sens que sur le projet-type cité et le devis signé fait foi.
        Pour votre cas&nbsp;: <a href="/demarrer-un-projet">décrivez votre projet (3 min)</a> ou
        <a href="#contact">réservez un cadrage de 30 min avec l'équipe</a>.
      </span>
    </div>
  </div>
</section>
`;
