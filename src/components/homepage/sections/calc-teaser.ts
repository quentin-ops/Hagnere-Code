import {
  calculateExcelCost,
  EXCEL_CALCULATOR_DEFAULTS,
} from "@/lib/excel-cost-calculator";

const teaserResult = calculateExcelCost(EXCEL_CALCULATOR_DEFAULTS);
const numberFr = (value: number, maximumFractionDigits = 0) =>
  value.toLocaleString("fr-FR", { maximumFractionDigits });

export const calcTeaserHtml = `
<!-- CALCULATOR TEASER -->
<section class="ct-section">
  <div class="wrap">
    <a href="/outils/calculateur-cout-excel" class="ct-card reveal">
      <div class="ct-bg-grid" aria-hidden="true"></div>

      <div class="ct-left">
        <div class="ct-tag">
          <span class="ct-dot"></span>
          Outil gratuit · 2 min
        </div>
        <h2>
          Combien vous coûte<br>
          <span class="ct-accent">réellement</span> votre Excel ?
        </h2>
        <p>
          Temps perdu, ressaisies, erreurs. Entrez 5 hypothèses, obtenez le coût
          annuel déclaré de vos tableurs et un écart brut sur trois ans face à
          une hypothèse de budget projet.
          <b>Sans email obligatoire pour voir le résultat.</b>
        </p>
        <div class="ct-meta">
          <span>✓ Calcul en direct</span>
          <span class="ct-sep"></span>
          <span>✓ Résultat détaillé à l'écran</span>
          <span class="ct-sep"></span>
          <span>✓ Sans engagement</span>
        </div>
        <div class="ct-cta">
          Lancer le calculateur
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </div>

      <div class="ct-right">
        <div class="ct-mock">
          <div class="ct-mock-head">
            <span class="ct-mock-kind">COÛT ANNUEL ESTIMÉ</span>
          </div>
          <div class="ct-mock-big">${numberFr(teaserResult.totalYearCost)} €</div>
          <div class="ct-mock-sub">${numberFr(teaserResult.timeYearCost)} € de temps déclaré + ${numberFr(teaserResult.errorYearCost)} € d'incidents estimés</div>
          <div class="ct-mock-formula">${numberFr(teaserResult.annualHours)} h × ${numberFr(teaserResult.hourlyCostExact, 2)} €/h + ${teaserResult.incidentsPerYear} incidents × ${EXCEL_CALCULATOR_DEFAULTS.errorCostPerIncident} €</div>
          <div class="ct-mock-sliders">
            <div class="ct-slider">
              <div class="ct-slider-label"><span>Personnes concernées</span><b>5</b></div>
              <div class="ct-slider-bar"><i style="width:40%"></i></div>
            </div>
            <div class="ct-slider">
              <div class="ct-slider-label"><span>Heures / semaine perdues</span><b>6 h</b></div>
              <div class="ct-slider-bar"><i style="width:30%"></i></div>
            </div>
            <div class="ct-slider">
              <div class="ct-slider-label"><span>Taux d'erreur estimé</span><b>15 %</b></div>
              <div class="ct-slider-bar"><i style="width:38%"></i></div>
            </div>
          </div>
          <div class="ct-mock-foot">
            <span>Seuil brut illustratif</span>
            <b>hypothèses visibles</b>
          </div>
        </div>
      </div>
    </a>
  </div>
</section>
`;
