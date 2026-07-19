export const complianceHtml = `
<!-- CONFORMITÉ 2026 FR -->
<section class="ec-compliance">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Conformité e-commerce 2026</div>
        <h2>Facturation électronique :<br>deux échéances à préparer.</h2>
      </div>
      <div class="right">
        Au 1<sup>er</sup> septembre 2026, toutes les entreprises concernées doivent pouvoir recevoir des factures
        électroniques ; les grandes entreprises et ETI doivent aussi émettre et transmettre leurs données.
        Les PME et microentreprises passent à l'émission et à l'e-reporting le 1<sup>er</sup> septembre 2027.
      </div>
    </div>

    <div class="ec-comp-grid">
      <div class="ec-comp-card reveal">
        <div class="ec-comp-deadline">1<sup>er</sup> SEPT. 2026 · RÉCEPTION POUR TOUS</div>
        <h3>Réception, émission et Plateforme Agréée</h3>
        <p>
          Toutes les entreprises concernées doivent pouvoir <b>recevoir</b> des factures électroniques au
          1<sup>er</sup> septembre 2026. À cette date, les <b>grandes entreprises et ETI</b> doivent également
          émettre électroniquement et transmettre leurs données de transaction et de paiement. Cette obligation
          d'émission et d'e-reporting s'applique aux <b>PME et microentreprises le 1<sup>er</sup> septembre 2027</b>.
          Les formats admis comprennent notamment Factur-X, UBL et CII, via une Plateforme Agréée.
        </p>
        <div class="ec-comp-tags">
          <span>Factur-X</span><span>XML CII / UBL 2.1</span><span>Pennylane (PA)</span><span>Docaposte (PA)</span>
        </div>
        <div class="ec-comp-foot">Périmètre et plateforme validés avec votre comptable · <a href="https://www.impots.gouv.fr/professionnel/questions/partir-de-quand-suis-je-concerne-par-la-reforme-de-la-facturation" target="_blank" rel="noopener noreferrer">calendrier DGFiP consulté le 19 juillet 2026</a>.</div>
      </div>

      <div class="ec-comp-card reveal reveal-d-1">
        <div class="ec-comp-deadline">EN VIGUEUR · PSD2 / DSP2</div>
        <h3>3DS2 &amp; Strong Customer Authentication</h3>
        <p>
          Les paiements par carte sur Internet requièrent une authentification forte de façon quasi systématique,
          <b>sauf exemption prévue par la DSP2</b> : faible valeur, paiement récurrent, bénéficiaire de confiance ou
          transaction à risque limité. La banque émettrice décide in fine si l'exemption est accordée ; l'intégration
          doit donc gérer correctement 3DS2 et les refus, quel que soit le prestataire de paiement retenu.
        </p>
        <div class="ec-comp-tags">
          <span>3DS2</span><span>SCA</span><span>Exemptions gérées</span><span>Parcours de reprise</span>
        </div>
        <div class="ec-comp-foot">Gateway choisi selon votre banque et votre volume · <a href="https://www.banque-france.fr/fr/aide-faq?page=5" target="_blank" rel="noopener noreferrer">rappel DSP2 de la Banque de France</a>.</div>
      </div>

      <div class="ec-comp-card reveal reveal-d-2">
        <div class="ec-comp-deadline">MESURE · PRIVACY-FIRST</div>
        <h3>Tracking first-party sous consentement</h3>
        <p>
          Les restrictions des navigateurs, les bloqueurs et les choix exprimés dans la CMP rendent une mesure
          exclusivement côté client incomplète. Une collecte first-party ou server-side peut fiabiliser les événements
          autorisés, mais <b>elle ne doit jamais contourner un refus de consentement</b>. Le plan de marquage précise
          pour chaque événement sa finalité, sa base et sa durée de conservation.
        </p>
        <div class="ec-comp-tags">
          <span>Plan de marquage</span><span>Consent Mode</span><span>Server-side si justifié</span><span>Recette</span>
        </div>
        <div class="ec-comp-foot">Outils et événements arrêtés dans le devis selon votre contexte RGPD.</div>
      </div>

      <div class="ec-comp-card reveal reveal-d-3">
        <div class="ec-comp-deadline">EN VIGUEUR · TVA OSS</div>
        <h3>TVA intracom multi-pays</h3>
        <p>
          Le seuil de 10 k€ est <b>un seuil annuel global à l'échelle de l'Union européenne</b> pour les ventes à
          distance intracommunautaires concernées, pas un seuil par pays. Une fois les règles de TVA du pays de
          destination applicables, le guichet <b>OSS (One-Stop Shop)</b> permet de déclarer les opérations couvertes
          depuis un seul État membre. Le paramétrage final est validé avec votre comptable.
        </p>
        <div class="ec-comp-tags">
          <span>TVA OSS</span><span>Seuil UE global</span><span>Multi-pays</span><span>Exports comptables</span>
        </div>
        <div class="ec-comp-foot">Forfaits Scale et Enterprise · <a href="https://vat-one-stop-shop.ec.europa.eu/index_en" target="_blank" rel="noopener noreferrer">règles OSS de la Commission européenne</a>.</div>
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
        <div class="ec-comp-foot">Configuration documentée, à valider par votre DPO ou conseil selon vos traitements.</div>
      </div>

      <div class="ec-comp-card reveal reveal-d-1">
        <div class="ec-comp-deadline">20 NOV. 2026 · CRÉDIT À LA CONSOMMATION</div>
        <h3>Paiement fractionné encadré</h3>
        <p>
          La directive (UE) 2023/2225 inclut de nombreux dispositifs <b>« buy now, pay later »</b> dans son champ
          et prévoit l'application des mesures nationales à partir du 20 novembre 2026. Le périmètre exact dépend
          du montage et du droit français transposé : nous intégrons le prestataire retenu et ses informations,
          tandis que vos conseils valident les obligations commerciales et précontractuelles.
        </p>
        <div class="ec-comp-tags">
          <span>BNPL</span><span>Informations précontractuelles</span><span>Parcours prestataire</span><span>Validation juridique</span>
        </div>
        <div class="ec-comp-foot"><a href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32023L2225" target="_blank" rel="noopener noreferrer">Directive (UE) 2023/2225</a> · aucune intégration technique ne remplace une validation juridique.</div>
      </div>
    </div>
  </div>
</section>
`;
