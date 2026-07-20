export const comparisonHtml = `
<!-- COMPARISON -->
<section class="sv-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer</div>
        <h2>Wix, WordPress, Webflow,<br>freelance ou nous ?</h2>
      </div>
      <div class="right">
        On ne prétend pas être la meilleure option dans tous les cas.
        Cette grille donne des questions à poser, pas des moyennes universelles.
        Prix, performances, export et maintenance varient selon la formule et l'implémentation.
      </div>
    </div>

    <div class="sv-cmp-table reveal">
      <div class="sv-cmp-head">
        <div class="sv-cmp-col sv-cmp-col-label"></div>
        <div class="sv-cmp-col"><div class="sv-cmp-kind">Option A</div><div class="sv-cmp-title">Wix / Squarespace</div><div class="sv-cmp-price">20–50 €/mois</div></div>
        <div class="sv-cmp-col"><div class="sv-cmp-kind">Option B</div><div class="sv-cmp-title">WordPress + Divi</div><div class="sv-cmp-price">2–5 k€ freelance</div></div>
        <div class="sv-cmp-col sv-cmp-col-us"><div class="sv-cmp-kind">Nous</div><div class="sv-cmp-title">Hagnéré Code</div><div class="sv-cmp-price">7–25 k€ forfait</div></div>
        <div class="sv-cmp-col"><div class="sv-cmp-kind">Option D</div><div class="sv-cmp-title">Webflow</div><div class="sv-cmp-price">3–8 k€ + 30–300 €/mois</div></div>
      </div>

      <div class="sv-cmp-row">
        <div class="sv-cmp-col sv-cmp-col-label">Performance (Lighthouse)</div>
        <div class="sv-cmp-col sv-cmp-bad">55–75 / 100</div>
        <div class="sv-cmp-col sv-cmp-bad">40–70 / 100</div>
        <div class="sv-cmp-col sv-cmp-col-us sv-cmp-good"><b>Objectif et conditions au devis</b></div>
        <div class="sv-cmp-col">80–90 / 100</div>
      </div>

      <div class="sv-cmp-row">
        <div class="sv-cmp-col sv-cmp-col-label">Temps de chargement</div>
        <div class="sv-cmp-col">3–5 s</div>
        <div class="sv-cmp-col sv-cmp-bad">4–8 s</div>
        <div class="sv-cmp-col sv-cmp-col-us sv-cmp-good"><b>Mesuré page par page</b></div>
        <div class="sv-cmp-col">1,5–3 s</div>
      </div>

      <div class="sv-cmp-row">
        <div class="sv-cmp-col sv-cmp-col-label">SEO technique</div>
        <div class="sv-cmp-col sv-cmp-bad">Bloqué par la plateforme</div>
        <div class="sv-cmp-col">Dépend du dev + plugins</div>
        <div class="sv-cmp-col sv-cmp-col-us sv-cmp-good"><b>Livrables SEO inventoriés</b></div>
        <div class="sv-cmp-col">Correct mais limité</div>
      </div>

      <div class="sv-cmp-row">
        <div class="sv-cmp-col sv-cmp-col-label">Propriété du code</div>
        <div class="sv-cmp-col sv-cmp-bad">Non, captif plateforme</div>
        <div class="sv-cmp-col">Oui, mais dette technique</div>
        <div class="sv-cmp-col sv-cmp-col-us sv-cmp-good"><b>Droits et dépôt au devis</b></div>
        <div class="sv-cmp-col sv-cmp-bad">Non, export limité</div>
      </div>

      <div class="sv-cmp-row">
        <div class="sv-cmp-col sv-cmp-col-label">Design sur mesure</div>
        <div class="sv-cmp-col sv-cmp-bad">Templates limités</div>
        <div class="sv-cmp-col">Possible, rarement original</div>
        <div class="sv-cmp-col sv-cmp-col-us sv-cmp-good"><b>Maquettes et révisions chiffrées</b></div>
        <div class="sv-cmp-col sv-cmp-good">Très flexible</div>
      </div>

      <div class="sv-cmp-row">
        <div class="sv-cmp-col sv-cmp-col-label">Maintenance &amp; sécurité</div>
        <div class="sv-cmp-col">Gérée par la plateforme</div>
        <div class="sv-cmp-col sv-cmp-bad">Plugins à patcher, hacks fréquents</div>
        <div class="sv-cmp-col sv-cmp-col-us sv-cmp-good"><b>Maintenance adaptée à la stack</b></div>
        <div class="sv-cmp-col">Gérée par Webflow</div>
      </div>

      <div class="sv-cmp-row">
        <div class="sv-cmp-col sv-cmp-col-label">Coût total sur 3 ans</div>
        <div class="sv-cmp-col">≈ 1 500 €</div>
        <div class="sv-cmp-col">≈ 12 k€ (dont hacks)</div>
        <div class="sv-cmp-col sv-cmp-col-us sv-cmp-good"><b>Chiffré sur trois ans</b></div>
        <div class="sv-cmp-col">≈ 15 k€ (abo inclus)</div>
      </div>

      <div class="sv-cmp-row">
        <div class="sv-cmp-col sv-cmp-col-label">Évolutivité</div>
        <div class="sv-cmp-col sv-cmp-bad">Plafond fonctionnel rapide</div>
        <div class="sv-cmp-col">Limitée aux plugins dispo</div>
        <div class="sv-cmp-col sv-cmp-col-us sv-cmp-good"><b>Selon architecture et budget</b></div>
        <div class="sv-cmp-col">OK en SaaS, contraint hors-cadre</div>
      </div>

      <div class="sv-cmp-row sv-cmp-row-verdict">
        <div class="sv-cmp-col sv-cmp-col-label">À choisir si…</div>
        <div class="sv-cmp-col">Test rapide &lt; 1 k€, besoin basique, usage personnel</div>
        <div class="sv-cmp-col">Besoin &lt; 3 k€, vous acceptez dette tech + maintenance</div>
        <div class="sv-cmp-col sv-cmp-col-us"><b>Site pro 6–25 k€, enjeu conversion, 3+ ans de durée de vie, vous voulez être autonome</b></div>
        <div class="sv-cmp-col">Start-up qui veut du Figma-to-web sans dev</div>
      </div>
    </div>

    <div class="sv-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Comparez toujours la formule exacte, les limites d'export, les coûts tiers et le coût humain sur trois ans. <a href="#contact">Nous pouvons relire votre besoin</a> sans présumer la solution.
    </div>
  </div>
</section>
`;
