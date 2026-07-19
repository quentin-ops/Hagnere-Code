import {
  ECOMMERCE_COST_EXAMPLE,
  SHOPIFY_PRICING_SOURCE,
} from "@/lib/ecommerce-cost-comparison";

const formatNumber = (value: number) => value.toLocaleString("fr-FR");

export const gmvCalculatorHtml = `
<!-- GMV CALCULATOR + TCO SHOPIFY (interactif) -->
<section class="ec-calc" id="simulateur">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Simulateur de coût sur ${ECOMMERCE_COST_EXAMPLE.horizonMonths} mois</div>
        <h2>Estimez votre TCO Shopify,<br>avec vos vrais montants.</h2>
      </div>
      <div class="right">
        Le résultat dépend de votre contrat : abonnement, apps, frais variables et maintenance.
        Remplacez chaque hypothèse par le montant de votre facture ou de votre devis ; le calcul ne cache
        aucun supplément et ne prétend pas fixer un seuil de rentabilité universel.
      </div>
    </div>

    <div class="ec-calc-grid">
      <div class="ec-calc-copy reveal">
        <p>
          Formule Shopify appliquée : <b>(abonnement mensuel + apps mensuelles) × ${ECOMMERCE_COST_EXAMPLE.horizonMonths}
          + GMV annuel × frais variables × ${ECOMMERCE_COST_EXAMPLE.horizonMonths / 12}</b>.
        </p>
        <p>
          Comparaison Hagnéré utilisée dans cet exemple : <b>${formatNumber(ECOMMERCE_COST_EXAMPLE.hagnereInitialProject)} €
          de projet + ${formatNumber(ECOMMERCE_COST_EXAMPLE.hagnereMonthlyMaintenance)} €/mois de TMA ×
          ${ECOMMERCE_COST_EXAMPLE.horizonMonths}, soit ${formatNumber(
            ECOMMERCE_COST_EXAMPLE.hagnereInitialProject +
              ECOMMERCE_COST_EXAMPLE.hagnereMonthlyMaintenance *
                ECOMMERCE_COST_EXAMPLE.horizonMonths,
          )} € sur trois ans</b>. Le coût initial est compté intégralement : aucun amortissement sur cinq ans.
        </p>
        <ul class="chks">
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Horizon identique de ${ECOMMERCE_COST_EXAMPLE.horizonMonths} mois pour les deux options</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Aucun taux Shopify ajouté en dehors du champ « frais variables »</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Résultat indicatif à confirmer avec vos contrats et votre comptable</li>
        </ul>
        <div class="ec-calc-source">
          Source tarifaire : <a href="${SHOPIFY_PRICING_SOURCE.url}" target="_blank" rel="noopener noreferrer">${SHOPIFY_PRICING_SOURCE.label}</a>,
          consultée le ${SHOPIFY_PRICING_SOURCE.checkedAt}. Shopify publie ses tarifs de référence en dollars US
          et les conditions varient selon le plan et l'engagement. Le montant en euros ci-contre est donc un
          <b>exemple modifiable</b>, pas une conversion automatique ni une promesse de tarif.
        </div>
        <div class="ec-calc-note">
          <div class="ec-calc-note-k">À RETENIR</div>
          <div class="ec-calc-note-v">
            Le point de croisement dépend uniquement des hypothèses saisies. S'il existe, le simulateur l'affiche ;
            sinon il indique que Shopify reste moins cher dans ce scénario sur trois ans.
          </div>
        </div>
      </div>

      <div class="ec-calc-calc reveal reveal-d-1">
        <div class="ec-calc-row">
          <label for="ec-calc-license">Votre abonnement Shopify réellement facturé</label>
          <div class="ec-calc-input">
            <input type="range" id="ec-calc-license" min="0" max="5000" step="10" value="${ECOMMERCE_COST_EXAMPLE.shopifyMonthlyLicense}">
            <div class="ec-calc-val"><span id="ec-calc-license-v">${formatNumber(ECOMMERCE_COST_EXAMPLE.shopifyMonthlyLicense)}</span> € / mois</div>
          </div>
        </div>

        <div class="ec-calc-row">
          <label for="ec-calc-gmv">GMV annuel utilisé pour le calcul</label>
          <div class="ec-calc-input">
            <input type="range" id="ec-calc-gmv" min="100000" max="10000000" step="50000" value="${ECOMMERCE_COST_EXAMPLE.annualGmv}">
            <div class="ec-calc-val"><span id="ec-calc-gmv-v">${formatNumber(ECOMMERCE_COST_EXAMPLE.annualGmv)}</span> € / an</div>
          </div>
        </div>

        <div class="ec-calc-row">
          <label for="ec-calc-apps">Apps et services Shopify</label>
          <div class="ec-calc-input">
            <input type="range" id="ec-calc-apps" min="0" max="3000" step="50" value="${ECOMMERCE_COST_EXAMPLE.shopifyMonthlyApps}">
            <div class="ec-calc-val"><span id="ec-calc-apps-v">${formatNumber(ECOMMERCE_COST_EXAMPLE.shopifyMonthlyApps)}</span> € / mois</div>
          </div>
        </div>

        <div class="ec-calc-row">
          <label for="ec-calc-fees">Frais variables propres à votre contrat Shopify</label>
          <div class="ec-calc-input">
            <input type="range" id="ec-calc-fees" min="0" max="3" step="0.1" value="${ECOMMERCE_COST_EXAMPLE.shopifyVariableFeePercent}">
            <div class="ec-calc-val"><span id="ec-calc-fees-v">${String(ECOMMERCE_COST_EXAMPLE.shopifyVariableFeePercent).replace(".", ",")}</span> % du GMV</div>
          </div>
        </div>

        <div class="ec-calc-result">
          <div class="ec-calc-line ec-calc-line-shopify">
            <span class="ec-calc-line-k">Coût Shopify estimé (${ECOMMERCE_COST_EXAMPLE.horizonMonths} mois)</span>
            <span class="ec-calc-line-v"><span id="ec-calc-shopify-total">—</span> €</span>
          </div>
          <div class="ec-calc-line ec-calc-line-hc">
            <span class="ec-calc-line-k">Projet Hagnéré + TMA (${ECOMMERCE_COST_EXAMPLE.horizonMonths} mois)</span>
            <span class="ec-calc-line-v"><span id="ec-calc-hc-total">—</span> €</span>
          </div>
          <div class="ec-calc-diff">
            <span class="ec-calc-diff-k" id="ec-calc-diff-label">Écart estimé sur trois ans</span>
            <span class="ec-calc-diff-v" id="ec-calc-diff"><span id="ec-calc-diff-amount">—</span> €</span>
          </div>
          <div class="ec-calc-sub" id="ec-calc-breakeven">Avec ces seules hypothèses, le coût initial est rattrapé au mois <b id="ec-calc-months">—</b>.</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
