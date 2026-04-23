export const comparisonHtml = `
<!-- COMPARISON ADS -->
<section class="ads-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer</div>
        <h2>Agence au %, grande agence,<br>DIY / freelance — ou nous ?</h2>
      </div>
      <div class="right">
        On ne prétend pas être la meilleure option partout.
        Voici la comparaison honnête — <b>si vous êtes dans une colonne qui
        n'est pas la nôtre, on vous le dira en 30 min</b>.
      </div>
    </div>

    <div class="ads-cmp-table reveal">
      <div class="ads-cmp-head">
        <div class="ads-cmp-col ads-cmp-col-label"></div>
        <div class="ads-cmp-col"><div class="ads-cmp-kind">Option A</div><div class="ads-cmp-title">Agence au % du media</div><div class="ads-cmp-price">12–20 % du spend</div></div>
        <div class="ads-cmp-col"><div class="ads-cmp-kind">Option B</div><div class="ads-cmp-title">Grande agence intégrée</div><div class="ads-cmp-price">6 000–15 000 €/mois</div></div>
        <div class="ads-cmp-col ads-cmp-col-us"><div class="ads-cmp-kind">Nous</div><div class="ads-cmp-title">Hagnéré Code</div><div class="ads-cmp-price">1 800–4 500 €/mois</div></div>
        <div class="ads-cmp-col"><div class="ads-cmp-kind">Option D</div><div class="ads-cmp-title">Freelance / DIY interne</div><div class="ads-cmp-price">≈ 2 500 €/mois coût caché</div></div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Rémunération</div>
        <div class="ads-cmp-col ads-cmp-bad">% du spend (conflit d'intérêt)</div>
        <div class="ads-cmp-col">Forfait + rebillings outils</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>Forfait fixe · aligné sur votre CAC</b></div>
        <div class="ads-cmp-col">Salaire / TJM · coût variable</div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Tracking server-side</div>
        <div class="ads-cmp-col ads-cmp-bad">Client-side cassé iOS 14</div>
        <div class="ads-cmp-col">Souvent sous-traité à un tiers</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>GTM SS + CAPI + EC inclus de série</b></div>
        <div class="ads-cmp-col ads-cmp-bad">Dépend du niveau du freelance</div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Qui s'occupe de vous</div>
        <div class="ads-cmp-col ads-cmp-bad">Junior + account manager tournants</div>
        <div class="ads-cmp-col">Team hiérarchique, contact via AM</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>Consultant senior en direct</b></div>
        <div class="ads-cmp-col">1 personne · fragilité si absent</div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Pipeline creative</div>
        <div class="ads-cmp-col ads-cmp-bad">Aucun ou very minimal</div>
        <div class="ads-cmp-col">Studio interne premium (coût élevé)</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>8–12 variantes/mois · motion + UGC inclus</b></div>
        <div class="ads-cmp-col ads-cmp-bad">Dépend de ressources internes</div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Propriété des comptes</div>
        <div class="ads-cmp-col ads-cmp-bad">MCC agence · vous perdez l'accès</div>
        <div class="ads-cmp-col">Souvent mixte, récup à négocier</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>100 % chez vous · passation garantie</b></div>
        <div class="ads-cmp-col ads-cmp-good">Chez vous par défaut</div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Attribution CRM business</div>
        <div class="ads-cmp-col ads-cmp-bad">ROAS auto-reporté plateformes</div>
        <div class="ads-cmp-col">Disponible si budget data dédié</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>Looker Studio CRM × Ads × margin</b></div>
        <div class="ads-cmp-col ads-cmp-bad">Rarement branché correctement</div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Alertes temps réel</div>
        <div class="ads-cmp-col ads-cmp-bad">Aucune</div>
        <div class="ads-cmp-col">Selon contrat / niveau de service</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>Slack · spend / CPA / ROAS / tracking</b></div>
        <div class="ads-cmp-col">À construire soi-même</div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Flexibilité contractuelle</div>
        <div class="ads-cmp-col ads-cmp-bad">12 mois · % du spend verrouillé</div>
        <div class="ads-cmp-col ads-cmp-bad">12–24 mois engagement</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>3 mois puis mois par mois</b></div>
        <div class="ads-cmp-col ads-cmp-good">Aucun engagement</div>
      </div>

      <div class="ads-cmp-row">
        <div class="ads-cmp-col ads-cmp-col-label">Transparence prix</div>
        <div class="ads-cmp-col ads-cmp-bad">% opaque + spend incités à monter</div>
        <div class="ads-cmp-col ads-cmp-bad">Rebillings outils / médias</div>
        <div class="ads-cmp-col ads-cmp-col-us ads-cmp-good"><b>Tout inclus · prix publié sur le site</b></div>
        <div class="ads-cmp-col">Coût du temps interne sous-estimé</div>
      </div>

      <div class="ads-cmp-row ads-cmp-row-verdict">
        <div class="ads-cmp-col ads-cmp-col-label">À choisir si…</div>
        <div class="ads-cmp-col">Budget &lt; 8 k€/mois et la simplicité facturation prime, ou gros spend où le % reste concurrentiel</div>
        <div class="ads-cmp-col">Grand compte international, besoin de "marque" rassurante, équipe 360 sur plaquette</div>
        <div class="ads-cmp-col ads-cmp-col-us"><b>PME / ETI / scale-up 10-500 salariés, budget media 10-80 k€/mois, veut un interlocuteur direct et des KPIs business CRM</b></div>
        <div class="ads-cmp-col">Vous avez un media buyer senior en interne qui gère déjà le tracking et la creative</div>
      </div>
    </div>

    <div class="ads-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Pas sûr d'être dans notre zone ? <a href="#contact">Parlons-en 30 minutes</a> — si c'est une grande agence ou un freelance qu'il vous faut, on vous le dira franchement.
    </div>
  </div>
</section>
`;
