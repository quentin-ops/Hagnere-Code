export const gmvCalculatorHtml = `
<!-- GMV CALCULATOR + TCO SHOPIFY (interactif) -->
<section class="ec-calc" id="simulateur">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Simulateur coût réel Shopify vs sur-mesure</div>
        <h2>Combien vous coûte<br>vraiment Shopify par an ?</h2>
      </div>
      <div class="right">
        Les frais Shopify ne sont pas juste la licence. Il y a les apps (Klaviyo, Yotpo, Recharge, Bold…),
        les % sur les ventes, les fees paiement si vous utilisez un autre gateway. Ajustez les curseurs
        à votre réalité — le calcul se fait en direct.
      </div>
    </div>

    <div class="ec-calc-grid">
      <div class="ec-calc-copy reveal">
        <p>
          Formule appliquée : <b>licence Shopify (standard 36 €/mois ou Plus 2 300 €/mois) + apps
          mensuelles (moyenne des 5-10 apps classiques d'une boutique sérieuse) + 0,5 à 2 % de fees
          paiement Shopify si vous n'utilisez pas Shopify Payments + 0,15 % GMV (Shopify Plus).</b>
        </p>
        <ul class="chks">
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hypothèse conservative (10 apps moyennes)</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Coût sur-mesure amorti sur 5 ans</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Forfait TMA Hagnéré 1 500 €/mois inclus dans l'estimation</li>
        </ul>
        <div class="ec-calc-note">
          <div class="ec-calc-note-k">À RETENIR</div>
          <div class="ec-calc-note-v">
            Le sur-mesure devient rentable vs Shopify Plus à partir d'environ <b>500 k€ de GMV / an</b>.
            En-dessous, Shopify est probablement le bon choix. Notre job, c'est d'être honnêtes sur ce seuil.
          </div>
        </div>
      </div>

      <div class="ec-calc-calc reveal reveal-d-1">
        <div class="ec-calc-row">
          <label>Votre plan Shopify</label>
          <div class="ec-calc-segmented">
            <button type="button" class="ec-calc-seg" data-shopify-plan="basic" aria-pressed="false">Standard · 36 €</button>
            <button type="button" class="ec-calc-seg is-active" data-shopify-plan="plus" aria-pressed="true">Shopify Plus · 2 300 €</button>
          </div>
        </div>

        <div class="ec-calc-row">
          <label>GMV annuel (CA HT)</label>
          <div class="ec-calc-input">
            <input type="range" id="ec-calc-gmv" min="100000" max="10000000" step="50000" value="2000000">
            <div class="ec-calc-val"><span id="ec-calc-gmv-v">2 000 000</span> € / an</div>
          </div>
        </div>

        <div class="ec-calc-row">
          <label>Apps Shopify mensuelles (total €/mois)</label>
          <div class="ec-calc-input">
            <input type="range" id="ec-calc-apps" min="0" max="3000" step="50" value="900">
            <div class="ec-calc-val"><span id="ec-calc-apps-v">900</span> € / mois</div>
          </div>
        </div>

        <div class="ec-calc-row">
          <label>Frais paiement Shopify (% sur ventes)</label>
          <div class="ec-calc-input">
            <input type="range" id="ec-calc-fees" min="0" max="2" step="0.1" value="0.5">
            <div class="ec-calc-val"><span id="ec-calc-fees-v">0,5</span> %</div>
          </div>
        </div>

        <div class="ec-calc-result">
          <div class="ec-calc-line ec-calc-line-shopify">
            <span class="ec-calc-line-k">Coût total Shopify (3 ans)</span>
            <span class="ec-calc-line-v"><span id="ec-calc-shopify-total">—</span> €</span>
          </div>
          <div class="ec-calc-line ec-calc-line-hc">
            <span class="ec-calc-line-k">Forfait Hagnéré + TMA 3 ans</span>
            <span class="ec-calc-line-v"><span id="ec-calc-hc-total">—</span> €</span>
          </div>
          <div class="ec-calc-diff">
            <span class="ec-calc-diff-k" id="ec-calc-diff-label">Économies sur 3 ans</span>
            <span class="ec-calc-diff-v" id="ec-calc-diff"><span id="ec-calc-diff-amount">—</span> €</span>
          </div>
          <div class="ec-calc-sub" id="ec-calc-breakeven">Break-even à partir du mois <b id="ec-calc-months">—</b></div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
