// Section MODÈLE DE CALCUL — remplace l'ancien dashboard de résultats.
// Hagnéré Code n'a aucun client externe : aucune médiane de missions, aucun
// budget média moyen, aucun gain constaté. Le bloc expose désormais la formule
// que nous appliquons et les leviers sur lesquels nous agissons — jamais un
// historique. Classes réutilisées telles quelles depuis sections.css.

export const roiDashboardHtml = `
<!-- ROI / ROAS — modèle de calcul : seuil + termes de la formule + leviers -->
<section class="ads-roi" id="roi">
  <div class="ads-roi-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Le calcul, pas le palmarès</div>
        <h2>Pas de ROAS moyen à afficher.<br>Le mode de calcul, oui.</h2>
      </div>
      <div class="right">
        Un ROAS moyen d'agence ne dit rien de votre compte&nbsp;: tout dépend du secteur, du panier et de la maturité du tracking. Ce que nous documentons ici, c'est le <b>mode de calcul</b> que nous appliquerons chez vous&nbsp;: un ROAS blended multi-canaux, dédupé côté serveur, réconcilié avec les deals signés dans votre CRM — jamais un ROAS auto-reporté par Meta ou Google Ads.
      </div>
    </div>

    <!-- Le modèle : seuil de recouvrement + termes de la formule -->
    <div class="ads-roi-main reveal reveal-d-1">

      <!-- Dial card (gauche) : le seuil, pas un résultat -->
      <div class="ads-roi-dial-card">
        <div class="ads-roi-dial-head">
          <span class="ads-roi-dial-k">ROAS BLENDED</span>
          <span class="ads-roi-dial-meta">modèle de calcul</span>
        </div>

        <!-- SVG arc gauge : zone située au-dessus du seuil de recouvrement -->
        <div class="ads-roi-dial">
          <svg viewBox="0 0 220 140" class="ads-roi-dial-svg" aria-hidden="true">
            <!-- background arc -->
            <path d="M 20 120 A 90 90 0 0 1 200 120" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="14" stroke-linecap="round"/>
            <!-- zone au-dessus du seuil : de 1x jusqu'au bout de l'échelle -->
            <path d="M 32 75 A 90 90 0 0 1 200 120" fill="none" stroke="url(#roi-grad)" stroke-width="14" stroke-linecap="round"/>
            <!-- gradient -->
            <defs>
              <linearGradient id="roi-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#8B5CF6"/>
                <stop offset="60%" stop-color="#A78BFA"/>
                <stop offset="100%" stop-color="#C4B5FD"/>
              </linearGradient>
            </defs>
            <!-- ticks -->
            <g class="ads-roi-ticks">
              <text x="16" y="135" text-anchor="middle">0</text>
              <text x="50" y="88" text-anchor="middle">1×</text>
              <text x="110" y="36" text-anchor="middle">3×</text>
              <text x="175" y="70" text-anchor="middle">5×</text>
              <text x="204" y="135" text-anchor="middle">6×</text>
            </g>
            <!-- marqueur du seuil -->
            <circle cx="32" cy="75" r="7" fill="#fff" stroke="#8B5CF6" stroke-width="3"/>
          </svg>

          <div class="ads-roi-dial-value">
            <span class="v">×1</span>
            <span class="k">SEUIL DE RECOUVREMENT</span>
          </div>
        </div>

        <div class="ads-roi-dial-foot">
          <span class="ads-roi-dial-chip">Blended</span>
          <span class="ads-roi-dial-chip">Dédupé côté serveur</span>
          <span class="ads-roi-dial-chip">Attribué au CRM</span>
        </div>
      </div>

      <!-- Les 4 termes du calcul (droite) -->
      <div class="ads-roi-kpis">
        <div class="ads-roi-kpi">
          <div class="ads-roi-kpi-delta">CA <span>signé</span></div>
          <div class="ads-roi-kpi-k">Le numérateur</div>
          <div class="ads-roi-kpi-n">le chiffre d'affaires réellement signé, relu dans votre CRM — pas les conversions déclarées par la régie</div>
        </div>
        <div class="ads-roi-kpi">
          <div class="ads-roi-kpi-delta">&divide; <span>média</span></div>
          <div class="ads-roi-kpi-k">Le dénominateur</div>
          <div class="ads-roi-kpi-n">toutes les dépenses média, tous canaux confondus, sans en écarter aucune pour embellir le ratio</div>
        </div>
        <div class="ads-roi-kpi ads-roi-kpi-hot">
          <div class="ads-roi-kpi-delta">1 <span>comptage</span></div>
          <div class="ads-roi-kpi-k">La règle de déduplication</div>
          <div class="ads-roi-kpi-n">GTM server-side, CAPI et Enhanced Conversions&nbsp;: une même conversion n'est comptée qu'une fois</div>
        </div>
        <div class="ads-roi-kpi">
          <div class="ads-roi-kpi-delta">Mensuel</div>
          <div class="ads-roi-kpi-k">La fréquence de recalcul</div>
          <div class="ads-roi-kpi-n">le modèle est rejoué chaque mois sur vos données, jamais figé sur un chiffre de vente</div>
        </div>
      </div>

    </div>

    <!-- Sur quoi nous agissons : 4 leviers -->
    <div class="ads-roi-how reveal reveal-d-2">
      <div class="ads-roi-how-head">
        <span class="ads-roi-how-n">/ ce sur quoi nous agissons</span>
        <h3>Pas de miracle, 4 leviers qu'on<br>active dans les 60 premiers jours.</h3>
      </div>

      <div class="ads-roi-how-grid">
        <div class="ads-roi-step">
          <div class="ads-roi-step-top">
            <span class="ads-roi-step-n">01</span>
            <div class="ads-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
          </div>
          <h3>Tracking server-side réparé</h3>
          <p>Les algos Google et Meta reçoivent enfin du signal propre, dédupé. Ils optimisent sur <b>les clients réels</b>, pas sur les form submits bruts.</p>
          <div class="ads-roi-step-foot">→ Ce que ça corrige&nbsp;: le signal envoyé aux régies</div>
        </div>

        <div class="ads-roi-step">
          <div class="ads-roi-step-top">
            <span class="ads-roi-step-n">02</span>
            <div class="ads-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/></svg>
            </div>
          </div>
          <h3>Boucle CRM en temps réel</h3>
          <p>Les stages MQL → SQL → won remontent dans Ads via webhook. <b>Vous arrêtez d'optimiser sur les clics</b>, vous optimisez sur les deals signés.</p>
          <div class="ads-roi-step-foot">→ Ce que ça corrige&nbsp;: l'objectif d'optimisation</div>
        </div>

        <div class="ads-roi-step">
          <div class="ads-roi-step-top">
            <span class="ads-roi-step-n">03</span>
            <div class="ads-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h3"/></svg>
            </div>
          </div>
          <h3>Creative cadencé 8–12 / mois</h3>
          <p>Fini la creative qui tourne 6 mois et fatigue. Nouveau batch chaque mois, tests par hooks / angles / offres. <b>L'usure se traite en amont</b>, pas une fois le coût envolé.</p>
          <div class="ads-roi-step-foot">→ Ce que ça corrige&nbsp;: l'usure de la création</div>
        </div>

        <div class="ads-roi-step">
          <div class="ads-roi-step-top">
            <span class="ads-roi-step-n">04</span>
            <div class="ads-roi-step-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
            </div>
          </div>
          <h3>Budget allocation hebdo</h3>
          <p>Revue chaque lundi&nbsp;: pauses, scaling, bascules entre canaux. Budget suit la perf, pas l'inertie. <b>Documenté dans Notion, pas dans un chat oublié.</b></p>
          <div class="ads-roi-step-foot">→ Ce que ça corrige&nbsp;: l'inertie du budget</div>
        </div>
      </div>

      <div class="ads-roi-how-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        <b>Rien sur cette page n'est un résultat client.</b> Nous n'avons pas encore de client externe&nbsp;: ni médiane de missions, ni budget média moyen, ni gain constaté à publier. Ce bloc décrit la formule que nous appliquons et les leviers que nous actionnons. Le seuil de ×1 est de l'arithmétique&nbsp;: en dessous, le média n'est pas remboursé&nbsp;; au-dessus, il reste à couvrir votre marge, que nous calons avec vous avant le premier euro dépensé. Les seuls comptes que nous pilotons aujourd'hui sont ceux de nos quatre produits — LMNP.AI, SCI-AI.app, Hagnéré Patrimoine, Hagnéré Investissement — et c'est notre trésorerie qui les finance.
      </div>
    </div>
  </div>
</section>
`;
