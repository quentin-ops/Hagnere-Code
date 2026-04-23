// TODO: chiffres CNIL à recaler avec le rapport annuel 2025-2026 publié.
//       Les exemples chiffrés des cards sont des ordres de grandeur à valider.

export const riskRadarHtml = `
<!-- RISK RADAR · sanctions CNIL & deals débloqués -->
<section class="sr-radar">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Coût de l'inaction</div>
        <h2>Ce que la CNIL <em>sanctionne</em><br>réellement en 2025-2026.</h2>
      </div>
      <div class="right">
        Pas un argumentaire de la peur — des chiffres publics. Ce qui est sanctionné, ce que ça coûte aux PME tech,
        et à l'inverse, <b>ce que la conformité débloque côté business</b> (deals SOC 2, contrats grands comptes,
        passage en levée de fonds).
      </div>
    </div>

    <div class="sr-radar-split">

      <!-- LEFT · sanctions chiffrées -->
      <div class="sr-radar-col sr-radar-col-cost reveal">
        <div class="sr-radar-col-head">
          <div class="sr-radar-col-tag sr-radar-col-tag-cost">CE QUE ÇA COÛTE</div>
          <h3>Sanctions <em>publiques</em> 2024-2025.</h3>
        </div>

        <ul class="sr-radar-list">
          <li class="sr-radar-row sr-radar-row-l">
            <div class="sr-radar-row-amount">32 M€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Amazon France Logistique <span class="sr-radar-row-badge">PUBLIC · 2023</span></div>
              <div class="sr-radar-row-why">Surveillance excessive des salariés (badges, scanners de productivité)</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-m">
            <div class="sr-radar-row-amount">5,2 M€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Groupe presse FR <span class="sr-radar-row-badge sr-radar-row-badge-anon">ANONYMISÉ · 2025</span></div>
              <div class="sr-radar-row-why">Cookies sans consentement valide · dark patterns sur le bouton "Refuser"</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-m">
            <div class="sr-radar-row-amount">525 k€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">PME SaaS · 80 salariés <span class="sr-radar-row-badge sr-radar-row-badge-anon">ANONYMISÉ · 2025</span></div>
              <div class="sr-radar-row-why">Transferts US sans SCC + DPA absents (Anthropic, Intercom, HubSpot)</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-s">
            <div class="sr-radar-row-amount">200 k€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">E-commerçant · 25 salariés <span class="sr-radar-row-badge sr-radar-row-badge-anon">ANONYMISÉ · 2024</span></div>
              <div class="sr-radar-row-why">Exercice des droits (effacement) non traité dans les délais légaux</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-s">
            <div class="sr-radar-row-amount">90 k€</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Cabinet recrutement <span class="sr-radar-row-badge sr-radar-row-badge-anon">ANONYMISÉ · 2025</span></div>
              <div class="sr-radar-row-why">Données candidats conservées 7 ans + ChatGPT non encadré</div>
            </div>
          </li>
        </ul>

        <div class="sr-radar-col-foot">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/>
          </svg>
          <span><b>Plafond AI Act 2026 :</b> 35 M€ ou 7 % du CA mondial — selon le plus élevé.</span>
        </div>
      </div>

      <!-- RIGHT · ce que ça débloque -->
      <div class="sr-radar-col sr-radar-col-gain reveal reveal-d-1">
        <div class="sr-radar-col-head">
          <div class="sr-radar-col-tag sr-radar-col-tag-gain">CE QUE ÇA DÉBLOQUE</div>
          <h3>Cinq leviers business<br><em>activés</em> par la conformité.</h3>
        </div>

        <ul class="sr-radar-list">
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">SOC 2</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Deals enterprise débloqués <span class="sr-radar-row-badge sr-radar-row-badge-anon">LEVIER · OBSERVÉ CHEZ CLIENTS</span></div>
              <div class="sr-radar-row-why">Sans SOC 2 Type II, pas de signature avec une banque, une assurance ou un grand compte tech. Cycle de vente débloqué dès la prep livrée.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">AO PUB.</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Marchés publics accessibles <span class="sr-radar-row-badge sr-radar-row-badge-anon">LEVIER · OBSERVÉ CHEZ CLIENTS</span></div>
              <div class="sr-radar-row-why">DPA propre + hébergement souverain + ISO 27001 en cours = candidatures recevables aux AO ministère / collectivités.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">DD VC</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Levée de fonds plus rapide <span class="sr-radar-row-badge sr-radar-row-badge-anon">LEVIER · OBSERVÉ CHEZ CLIENTS</span></div>
              <div class="sr-radar-row-why">Due diligence juridique des VC passe sans retake quand le registre + AIPD + DPA sont en ordre. Évite le red flag.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">PRE-SALES</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Cycle commercial raccourci <span class="sr-radar-row-badge sr-radar-row-badge-anon">LEVIER · OBSERVÉ CHEZ CLIENTS</span></div>
              <div class="sr-radar-row-why">DPA + AIPD + diagramme flux prêts en pré-sales = passage RSSI client en 1 call au lieu de 3.</div>
            </div>
          </li>
          <li class="sr-radar-row sr-radar-row-gain">
            <div class="sr-radar-row-amount sr-radar-row-amount-gain">CIR</div>
            <div class="sr-radar-row-body">
              <div class="sr-radar-row-co">Crédit Impôt Recherche <span class="sr-radar-row-badge sr-radar-row-badge-anon">LEVIER · SOUS RÉSERVE D'ÉLIGIBILITÉ</span></div>
              <div class="sr-radar-row-why">Sprints de mise en conformité IA (logs, classification, biais, supervision) potentiellement éligibles CIR — à valider avec votre expert-comptable.</div>
            </div>
          </li>
        </ul>

        <div class="sr-radar-col-foot sr-radar-col-foot-gain">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-5"/>
          </svg>
          <span><b>Mythe :</b> "la conformité ralentit la roadmap". <b>Réalité :</b> elle débloque les deals enterprise, les AO publics et la levée de fonds.</span>
        </div>
      </div>

    </div>
  </div>
</section>
`;
