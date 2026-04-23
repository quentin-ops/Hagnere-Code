export const complianceHtml = `
<!-- CONFORMITÉ 2026 FR -->
<section class="ec-compliance">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Conformité e-commerce 2026</div>
        <h2>Prêt pour les obligations<br>qui arrivent en septembre 2026.</h2>
      </div>
      <div class="right">
        2026, c'est l'année où plusieurs obligations entrent en vigueur pour les e-commerçants FR :
        <b>facturation électronique obligatoire</b>, fin des cookies tiers Chrome, TVA intracom renforcée.
        On livre vos boutiques <b>compliant dès J+1</b>, pas dans 6 mois en avenant.
      </div>
    </div>

    <div class="ec-comp-grid">
      <div class="ec-comp-card reveal">
        <div class="ec-comp-deadline">1<sup>er</sup> SEPT. 2026 · OBLIGATOIRE</div>
        <h3>Factur-X + Plateforme Agréée</h3>
        <p>
          À partir du 1<sup>er</sup> septembre 2026, les <b>grandes entreprises et ETI</b> doivent émettre
          leurs factures au format <b>Factur-X</b> (PDF/A-3 + XML CII) et les déposer sur une Plateforme Agréée
          (Pennylane, Docaposte, Generix, Tenor…). Le 1<sup>er</sup> septembre 2027 pour les PME/TPE.
        </p>
        <div class="ec-comp-tags">
          <span>Factur-X</span><span>XML CII / UBL 2.1</span><span>Pennylane (PA)</span><span>Docaposte (PA)</span>
        </div>
        <div class="ec-comp-foot">Livré natif dans toutes nos boutiques, e-reporting B2C inclus.</div>
      </div>

      <div class="ec-comp-card reveal reveal-d-1">
        <div class="ec-comp-deadline">EN VIGUEUR · PSD2 / DSP2</div>
        <h3>3DS2 &amp; Strong Customer Authentication</h3>
        <p>
          100 % des transactions CB &gt; 30 € doivent déclencher une authentification forte (3DS2). Les
          anciennes intégrations SOAP (SystemPay v1, Paybox legacy) <b>ne sont plus compatibles</b>.
          Stripe, Mollie, SystemPay REST v4, Adyen sont conformes et optimisés pour le "frictionless" 3DS2.
        </p>
        <div class="ec-comp-tags">
          <span>3DS2 frictionless</span><span>SCA</span><span>Stripe / Mollie / Adyen</span>
        </div>
        <div class="ec-comp-foot">Gateway choisi avec vous selon votre banque et votre volume.</div>
      </div>

      <div class="ec-comp-card reveal reveal-d-2">
        <div class="ec-comp-deadline">FIN 2026 · CHROME COOKIES</div>
        <h3>Server-side tracking natif</h3>
        <p>
          Chrome retire les cookies tiers d'ici fin 2026 (Safari l'a fait en 2020). Le tracking GA4
          et Meta CAPI côté client <b>perd 30 à 50 % de conversions</b>. Solution : server-side tracking
          via sGTM Cloudflare Workers / Node — incluse dans nos boutiques.
        </p>
        <div class="ec-comp-tags">
          <span>sGTM</span><span>Meta CAPI</span><span>Google Ads CAPI</span><span>Consent Mode v2</span>
        </div>
        <div class="ec-comp-foot">Setup &amp; dashboard analytics livrés, pas en option.</div>
      </div>

      <div class="ec-comp-card reveal reveal-d-3">
        <div class="ec-comp-deadline">EN VIGUEUR · TVA OSS+</div>
        <h3>TVA intracom multi-pays</h3>
        <p>
          Seuil 10 k€/an par pays dépassé = TVA du pays de destination due. Le régime <b>OSS (One-Stop-Shop)</b>
          permet de déclarer en une fois sur 27 pays UE. Votre boutique calcule la TVA du bon pays à la commande,
          sort la déclaration OSS mensuelle ou trimestrielle.
        </p>
        <div class="ec-comp-tags">
          <span>TVA OSS</span><span>Multi-pays UE</span><span>Multi-devise</span><span>Déclaration auto</span>
        </div>
        <div class="ec-comp-foot">Forfaits Scale et Enterprise uniquement (pour export multi-pays).</div>
      </div>

      <div class="ec-comp-card reveal">
        <div class="ec-comp-deadline">EN VIGUEUR · CNIL / RGPD</div>
        <h3>RGPD + CMP + droits</h3>
        <p>
          CMP type <b>Axeptio</b> ou <b>Didomi</b> pour les cookies, Consent Mode v2 branché sur GA4 et
          Meta, DPA fourni, registre des traitements, sous-traitants listés. Droits clients (accès,
          rectification, portabilité, suppression) implémentés dans le compte client.
        </p>
        <div class="ec-comp-tags">
          <span>Axeptio / Didomi</span><span>DPA signé</span><span>Droit à l'oubli</span><span>Consent Mode v2</span>
        </div>
        <div class="ec-comp-foot">Audit CNIL passable sans friction.</div>
      </div>

      <div class="ec-comp-card reveal reveal-d-1">
        <div class="ec-comp-deadline">2026 · DIRECTIVE DCD BNPL</div>
        <h3>Paiement fractionné encadré</h3>
        <p>
          La nouvelle <b>Directive Consumer Credit</b> (DCD) encadre le BNPL : Alma, Klarna, Oney assimilés
          crédit conso, obligation d'afficher un taux, droit de rétractation 14 jours, évaluation de
          solvabilité. On intègre les bonnes mentions légales et les widgets conformes.
        </p>
        <div class="ec-comp-tags">
          <span>Alma compliant</span><span>Klarna compliant</span><span>Mentions légales</span><span>Rétractation</span>
        </div>
        <div class="ec-comp-foot">Widgets certifiés des gateways, zéro risque juridique.</div>
      </div>
    </div>
  </div>
</section>
`;
