// Exemples exclusivement fondés sur des décisions et bilans publics de la CNIL.
// Les montants illustrent des contextes propres à chaque dossier : ils ne
// constituent ni un barème, ni une estimation automatique du risque d'un prospect.

export const riskRadarHtml = `
<!-- RISK RADAR · décisions publiques & documentation utile -->
<section class="sr-radar">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Décisions publiques</div>
        <h2>Ce que la CNIL a<br><em>effectivement sanctionné.</em></h2>
      </div>
      <div class="right">
        Des décisions publiques, reliées à leur source officielle. Elles montrent des sujets concrets —
        consentement, retrait, collecte, information, conservation et droits — sans transposer leur montant
        à votre organisation. <b>Chaque risque dépend des faits, de la gravité, de la durée et des personnes concernées.</b>
      </div>
    </div>

    <div class="sr-radar-split">

      <!-- LEFT · décisions publiques -->
      <div class="sr-radar-col sr-radar-col-cost reveal">
        <div class="sr-radar-col-head">
          <div class="sr-radar-col-tag sr-radar-col-tag-cost">SOURCES CNIL</div>
          <h3>Décisions et bilan<br><em>2023-2025.</em></h3>
        </div>

        <ul class="sr-radar-list">
          <li class="sr-radar-row sr-radar-row-l">
            <div class="sr-radar-row-amount">150 M€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co"><a href="https://www.cnil.fr/fr/cookies-deposes-sans-consentement-la-cnil-sanctionne-shein-dune-amende-de-150-millions-deuros" target="_blank" rel="noopener noreferrer">SHEIN</a> <span class="sr-radar-row-badge">PUBLIC · 2025</span></div>
              <div class="sr-radar-row-why">Cookies déposés sans consentement, information et mécanismes de refus ou de retrait défaillants.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-l">
            <div class="sr-radar-row-amount">50 M€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co"><a href="https://www.cnil.fr/fr/publicites-inserees-entre-les-courriels-sanction-de-50-millions-deuros-orange" target="_blank" rel="noopener noreferrer">ORANGE</a> <span class="sr-radar-row-badge">PUBLIC · 2024</span></div>
              <div class="sr-radar-row-why">Publicités sans consentement et poursuite de la lecture de cookies après le retrait du consentement.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-m">
            <div class="sr-radar-row-amount">32 M€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co"><a href="https://www.cnil.fr/fr/surveillance-des-salaries-la-cnil-sanctionne-amazon-france-logistique-dune-amende-de-32-millions" target="_blank" rel="noopener noreferrer">Amazon France Logistique</a> <span class="sr-radar-row-badge">PUBLIC · 2023</span></div>
              <div class="sr-radar-row-why">Surveillance des salariés jugée excessivement intrusive et conservation de données trop détaillées.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-s">
            <div class="sr-radar-row-amount">240 k€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co"><a href="https://www.cnil.fr/fr/aspiration-de-donnees-sanction-de-240-000-euros-lencontre-de-la-societe-kaspr" target="_blank" rel="noopener noreferrer">KASPR</a> <span class="sr-radar-row-badge">PUBLIC · 2024</span></div>
              <div class="sr-radar-row-why">Collecte de coordonnées, durée de conservation, information et réponse aux demandes d'accès.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-s">
            <div class="sr-radar-row-amount">83</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co"><a href="https://www.cnil.fr/fr/bilan-sanctions-2025" target="_blank" rel="noopener noreferrer">Sanctions prononcées par la CNIL</a> <span class="sr-radar-row-badge">BILAN · 2025</span></div>
              <div class="sr-radar-row-why">Bilan annuel : 83 sanctions, complétées par des mises en demeure, rappels aux obligations et avertissements.</div>
            </div>
          </li>
        </ul>

        <div class="sr-radar-col-foot">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/>
          </svg>
          <span><b>À retenir :</b> un montant publié n'est pas un barème. L'autorité apprécie chaque dossier dans son contexte.</span>
        </div>
      </div>

      <!-- RIGHT · utilité conditionnelle d'une documentation sérieuse -->
      <div class="sr-radar-col sr-radar-col-gain reveal reveal-d-1">
        <div class="sr-radar-col-head">
          <div class="sr-radar-col-tag sr-radar-col-tag-gain">EFFETS À PROUVER</div>
          <h3>Ce qu'une documentation<br><em>sérieuse peut faciliter.</em></h3>
        </div>

        <ul class="sr-radar-list">
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">ACHATS</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Questionnaires sécurité et vie privée <span class="sr-radar-row-badge sr-radar-row-badge-anon">SELON LE CLIENT</span></div>
              <div class="sr-radar-row-why">Un inventaire des flux, des fournisseurs et des mesures techniques aide à répondre avec des preuves plutôt qu'avec des déclarations générales.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">DUE DIL.</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Revue d'un investisseur ou d'un acquéreur <span class="sr-radar-row-badge sr-radar-row-badge-anon">EFFET POSSIBLE</span></div>
              <div class="sr-radar-row-why">Des contrats, registres et décisions archivés rendent la revue plus lisible, sans garantir son résultat ni son calendrier.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">AO</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Dossiers de consultation <span class="sr-radar-row-badge sr-radar-row-badge-anon">SI EXIGÉ</span></div>
              <div class="sr-radar-row-why">Les pièces demandées peuvent être préparées lorsque le règlement de consultation les exige. Elles ne rendent pas une candidature recevable à elles seules.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">INCIDENT</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Réaction et traçabilité <span class="sr-radar-row-badge sr-radar-row-badge-anon">À TESTER</span></div>
              <div class="sr-radar-row-why">Des rôles, contacts, journaux et procédures testés réduisent le temps perdu au démarrage d'un incident.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">SORTIE</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Réversibilité et changement de prestataire <span class="sr-radar-row-badge sr-radar-row-badge-anon">AU CONTRAT</span></div>
              <div class="sr-radar-row-why">Des responsabilités, formats d'export, accès et délais définis au contrat facilitent la passation lorsque ces engagements sont réellement exécutés.</div>
            </div>
          </li>
        </ul>

        <div class="sr-radar-col-foot sr-radar-col-foot-gain">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-5"/>
          </svg>
          <span><b>Limite :</b> aucun dossier ne garantit une certification, un contrat, un financement ou l'absence de sanction.</span>
        </div>
      </div>

    </div>
  </div>
</section>
`;
