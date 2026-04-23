export const comparisonHtml = `
<!-- COMPARATIF : SUR-MESURE vs ALTERNATIVES -->
<section class="oi-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pourquoi pas no-code, SaaS ou ESN classique ?</div>
        <h2>On décline l'excuse la plus courante<br>point par point.</h2>
      </div>
      <div class="right">
        Chaque alternative a sa place. Aucune ne fait ce qu'un outil sur mesure bien calibré
        apporte à une PME ou ETI qui a un vrai process métier. Lecture à froid, sans sophisme.
      </div>
    </div>

    <div class="oi-compare-table reveal">
      <div class="oi-compare-row oi-compare-head">
        <div class="oi-compare-cell oi-compare-cell-k">— CRITÈRE</div>
        <div class="oi-compare-cell oi-compare-cell-us">
          <div class="oi-compare-us-tag">NOUS</div>
          <div class="oi-compare-us-title">Sur mesure Hagnéré</div>
        </div>
        <div class="oi-compare-cell">
          <div class="oi-compare-other-tag">ALTERNATIVE 1</div>
          <div class="oi-compare-other-title">No-code (Airtable, Notion, Softr)</div>
        </div>
        <div class="oi-compare-cell">
          <div class="oi-compare-other-tag">ALTERNATIVE 2</div>
          <div class="oi-compare-other-title">SaaS du marché (HubSpot, Monday)</div>
        </div>
        <div class="oi-compare-cell">
          <div class="oi-compare-other-tag">ALTERNATIVE 3</div>
          <div class="oi-compare-other-title">ESN classique (régie, TJM)</div>
        </div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Adapté à votre vrai process</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Modélisé après 3–5 interviews terrain</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Souple mais plafonne vite (20-30 users)</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ko"></span>Votre métier tordu pour rentrer dans leur modèle</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Dépend fortement du chef de projet que vous avez</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Intègre Sage, Cegid, AD, ERP legacy</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Connecteurs dès la v1, pas en option</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ko"></span>Zapier entre deux, rarement robuste</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Seulement ce que le SaaS veut bien exposer</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ok"></span>Techniquement oui, mais cher en TJM</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Propriété du code &amp; portabilité</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>Repo Git chez vous dès J+1, stack standard</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ko"></span>Lock-in total, export limité</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ko"></span>Abonnement à vie, pas de sortie propre</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Oui, mais tech maison souvent exotique</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Coût sur 5 ans (équipe 15 pers.)</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>25–50 k€ one-shot · ≈ 8 k€/an maintenance</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>≈ 18 k€/an licences, +20 %/an au fil des users</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ko"></span>≈ 36 k€/an, incompressible, +prix chaque année</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ko"></span>150–300 k€ sur devis ouvert, budget glissant</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Délai de livraison</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>2 à 10 semaines, date contractualisée</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ok"></span>Rapide (1–3 sem.) mais usure après 6 mois</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Onboarding 3–6 mois chez l'éditeur</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ko"></span>6 à 18 mois, dates qui glissent</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Risque DSI / RSSI</div>
        <div class="oi-compare-cell oi-compare-cell-us"><span class="oi-compare-dot ok"></span>SSO · RBAC · audit trail · hébergement FR</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot ko"></span>Données souvent aux États-Unis, SSO premium</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>SOC 2 oui, mais vous ne maîtrisez rien</div>
        <div class="oi-compare-cell"><span class="oi-compare-dot warn"></span>Dépend entièrement de l'ESN</div>
      </div>

      <div class="oi-compare-row">
        <div class="oi-compare-cell oi-compare-cell-k">Verdict honnête</div>
        <div class="oi-compare-cell oi-compare-cell-us oi-compare-verdict"><b>Pour PME/ETI 10–250 pers.</b> qui ont un vrai process métier différenciant.</div>
        <div class="oi-compare-cell oi-compare-verdict">Parfait pour <b>prototyper</b> une idée. Mauvais pour tenir en production.</div>
        <div class="oi-compare-cell oi-compare-verdict">Bien si votre métier <b>colle</b> déjà à l'outil. Piège si vous êtes atypique.</div>
        <div class="oi-compare-cell oi-compare-verdict">Utile pour <b>gros projets groupe</b>, pas pour un outil interne PME.</div>
      </div>
    </div>

    <div class="oi-compare-foot reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      Si vous hésitez entre ces 4 options, l'Audit processus 1 jour à 990 € vous sort de l'hésitation avec des chiffres sur votre cas précis.
    </div>
  </div>
</section>
`;
