import { TEAM_TOTAL_COUNT } from "@/lib/team";
import { FIRST_CALL_CONTACT_SHORT } from "../first-call";

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
        On ne prétend pas être la meilleure option dans tous les cas, et on ne chiffre
        pas les offres des autres. Cinq critères factuels à vérifier
        dans chaque proposition que vous recevrez&nbsp;— y compris la nôtre.
      </div>
    </div>

    <div class="cmp-table reveal">
      <div class="cmp-head">
        <div class="cmp-col cmp-col-label"></div>
        <div class="cmp-col">
          <div class="cmp-kind">Option A</div>
          <div class="cmp-title">Freelance solo</div>
        </div>
        <div class="cmp-col cmp-col-us">
          <div class="cmp-kind">Nous</div>
          <div class="cmp-title">Hagnéré Code</div>
        </div>
        <div class="cmp-col">
          <div class="cmp-kind">Option C</div>
          <div class="cmp-title">Grand cabinet / ESN</div>
        </div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Équipe dédiée à votre projet</div>
        <div class="cmp-col">1 personne</div>
        <div class="cmp-col cmp-col-us"><b>Intervenants nommés au devis</b>, choisis parmi les ${TEAM_TOTAL_COUNT} profils présentés sur cette page</div>
        <div class="cmp-col">Composition à vérifier dans la proposition</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Continuité (vacances, maladie)</div>
        <div class="cmp-col">Dépend de l'organisation prévue</div>
        <div class="cmp-col cmp-col-us cmp-good">Relais nommé et modalités de remplacement écrits avant la signature</div>
        <div class="cmp-col">Dépend de l'équipe et du contrat</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Interlocuteur</div>
        <div class="cmp-col">Le freelance lui-même</div>
        <div class="cmp-col cmp-col-us"><b>${FIRST_CALL_CONTACT_SHORT} au premier appel</b>, puis un intervenant projet identifié</div>
        <div class="cmp-col">Circuit à vérifier dans la proposition</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Modèle de facturation</div>
        <div class="cmp-col">Forfait ou régie selon l'offre</div>
        <div class="cmp-col cmp-col-us cmp-good"><b>Forfait uniquement, jamais de régie</b> · aucun dépassement sans accord écrit</div>
        <div class="cmp-col">Forfait ou régie selon l'offre</div>
      </div>

      <div class="cmp-row">
        <div class="cmp-col cmp-col-label">Propriété du code &amp; données</div>
        <div class="cmp-col">À lire dans le devis, les CGV et les licences</div>
        <div class="cmp-col cmp-col-us cmp-good"><b>Dépôt, accès et droits écrits</b> · transfert après paiement complet selon les CGV, hors composants préexistants et licences tierces</div>
        <div class="cmp-col">À lire dans le devis, les CGV et les licences</div>
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
        Les pratiques varient d'un prestataire à l'autre&nbsp;: les colonnes A et C indiquent
        ce qu'il faut faire préciser dans leur proposition, pas ce qu'elles valent.
        Pour votre cas&nbsp;: <a href="/demarrer-un-projet">décrivez votre projet (3 min)</a>,
        <a href="/tarifs">consultez les tarifs</a> ou
        <a href="#contact">réservez un cadrage de 30 min avec ${FIRST_CALL_CONTACT_SHORT}</a>.
      </span>
    </div>
  </div>
</section>
`;
