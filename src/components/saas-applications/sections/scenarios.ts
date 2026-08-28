export const scenariosHtml = `
<!-- SCÉNARIOS PROJET (interactive toggle) -->
<section class="sa-scenarios" data-active="mvp">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Quel scénario vous correspond ?</div>
        <h2>Trois situations,<br>trois chemins clairs.</h2>
      </div>
      <div class="right">
        Ces trois archétypes couvrent des décisions différentes. Cliquez sur le vôtre :
        les livrables, l'ordre de grandeur du budget et les risques à traiter changent — et
        pour une reprise, le point d'entrée payant n'est pas le même. Les fourchettes citées
        sont celles des <a href="#tarifs">forfaits publiés plus bas</a> ; seul le devis engage.
      </div>
    </div>

    <div class="sa-scen-tabs reveal" role="tablist" aria-label="Choisir un scénario">
      <button type="button" class="sa-scen-tab" data-scenario="mvp" role="tab" aria-selected="true" id="sa-scenario-tab-mvp" aria-controls="sa-scenario-panel-mvp" tabindex="0">
        <span class="sa-scen-tab-k">SCÉNARIO 01</span>
        <span class="sa-scen-tab-t">MVP court</span>
        <span class="sa-scen-tab-d">Périmètre ciblé</span>
      </button>
      <button type="button" class="sa-scen-tab" data-scenario="scale" role="tab" aria-selected="false" id="sa-scenario-tab-scale" aria-controls="sa-scenario-panel-scale" tabindex="-1">
        <span class="sa-scen-tab-k">SCÉNARIO 02</span>
        <span class="sa-scen-tab-t">MVP + Scale</span>
        <span class="sa-scen-tab-d">Lots successifs</span>
      </button>
      <button type="button" class="sa-scen-tab" data-scenario="rebuild" role="tab" aria-selected="false" id="sa-scenario-tab-rebuild" aria-controls="sa-scenario-panel-rebuild" tabindex="-1">
        <span class="sa-scen-tab-k">SCÉNARIO 03</span>
        <span class="sa-scen-tab-t">Rebuild legacy</span>
        <span class="sa-scen-tab-d">Chiffré après audit</span>
      </button>
    </div>

    <!-- PANEL MVP -->
    <div class="sa-scen-panel" data-panel="mvp" role="tabpanel" tabindex="0" aria-hidden="false" id="sa-scenario-panel-mvp" aria-labelledby="sa-scenario-tab-mvp">
      <div class="sa-scen-cols">
        <div class="sa-scen-col-main">
          <div class="sa-scen-kind">POUR QUI</div>
          <h3>Founder early-stage qui doit<br>prouver la traction vite.</h3>
          <p>
            Vous avez une idée validée (entretiens, lettres d'intention, pré-inscriptions),
            des utilisateurs pilotes identifiés et un budget cohérent avec le périmètre.
            Le but : un SaaS <b>vendable et exploitable</b>, limité aux parcours qui prouvent l'usage.
          </p>
          <div class="sa-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>Un parcours critique web complet et ses opérations nécessaires</li>
              <li>Accès, isolation et administration adaptés aux données</li>
              <li>Paiement, intégrations ou IA seulement si le test ou le contrat les exige</li>
              <li>Mesures RGPD et hébergement documentés selon les données</li>
              <li>Handover filmé + repo Git chez vous</li>
            </ul>
          </div>
        </div>
        <div class="sa-scen-aside">
          <div class="sa-scen-meta">
            <div class="sa-scen-meta-row"><span class="k">Ordre de grandeur</span><span class="v">15–30 k€ HT · forfait Essentiel</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix</span><span class="v">Fixé au devis, après cadrage</span></div>
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">Planning et jalons arrêtés au devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">Rôles et disponibilité définis au devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Discovery Sprint 2 jours · 1 500 € HT · déduit si phase 2, conditions au devis</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">Élément vérifiable : <a href="https://lmnp.ai" target="_blank" rel="noopener">LMNP.AI</a> présente publiquement une offre et des fonctions. Ce lien ne prouve ni conception, ni exploitation, ni résultat.</div>
        </div>
      </div>
    </div>

    <!-- PANEL SCALE -->
    <div class="sa-scen-panel" data-panel="scale" role="tabpanel" tabindex="0" aria-hidden="true" id="sa-scenario-panel-scale" aria-labelledby="sa-scenario-tab-scale" hidden>
      <div class="sa-scen-cols">
        <div class="sa-scen-col-main">
          <div class="sa-scen-kind">POUR QUI</div>
          <h3>SaaS qui décolle, besoin<br>d'un palier technique.</h3>
          <p>
            Le produit est utilisé, mais l'architecture ou les opérations deviennent un frein :
            onboarding manuel, incidents, lenteurs, manque de mesure ou absence de parcours mobile.
            Il faut <b>mesurer, consolider puis faire évoluer</b> sans casser ce qui fonctionne.
          </p>
          <div class="sa-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>Refonte des goulets d'étranglement (perf, queues, cache)</li>
              <li>Self-serve complet (onboarding, billing, gestion équipe)</li>
              <li>App mobile iOS/Android React Native</li>
              <li>Analytics produit + feature flags + A/B testing</li>
              <li>Automatisations ou assistants IA avec règles de contrôle</li>
              <li>SSO enterprise + audit logs pour deals B2B</li>
            </ul>
          </div>
        </div>
        <div class="sa-scen-aside">
          <div class="sa-scen-meta">
            <div class="sa-scen-meta-row"><span class="k">Ordre de grandeur</span><span class="v">30–60 k€ HT · forfait Standard</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix</span><span class="v">Fixé au devis, après audit et priorisation</span></div>
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">Lots successifs, jalons arrêtés au devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">Équipe projet définie après audit</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Discovery Sprint 2 jours · 1 500 € HT · déduit si phase 2, conditions au devis</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">Décision de départ : isoler les goulots mesurés avant d'ajouter une nouvelle architecture ou une application mobile.</div>
        </div>
      </div>
    </div>

    <!-- PANEL REBUILD -->
    <div class="sa-scen-panel" data-panel="rebuild" role="tabpanel" tabindex="0" aria-hidden="true" id="sa-scenario-panel-rebuild" aria-labelledby="sa-scenario-tab-rebuild" hidden>
      <div class="sa-scen-cols">
        <div class="sa-scen-col-main">
          <div class="sa-scen-kind">POUR QUI</div>
          <h3>SaaS existant qui cale,<br>à reprendre en main.</h3>
          <p>
            Votre produit existe, il a des clients, mais il <b>rame, plante, coûte trop
            cher</b>, ou l'équipe technique d'origine est partie. On audite, on stabilise,
            on modernise — <b>sans tout casser et sans perdre vos utilisateurs</b>.
          </p>
          <div class="sa-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>Audit technique écrit (dette, sécurité, perf) avec priorisation</li>
              <li>Reprise du code ou réécriture partielle selon ROI</li>
              <li>Migration PostgreSQL / queues / cache sans downtime</li>
              <li>Remise à niveau RGPD, observabilité, CI/CD</li>
              <li>Documentation exhaustive + formation équipe interne</li>
              <li>Plan de sortie technique si vous voulez ensuite reprendre en interne</li>
            </ul>
          </div>
        </div>
        <div class="sa-scen-aside">
          <div class="sa-scen-meta">
            <div class="sa-scen-meta-row"><span class="k">Ordre de grandeur</span><span class="v">Chiffré après l'audit — stabiliser, reprendre ou réécrire ne coûtent pas la même chose</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix</span><span class="v">Fixé au devis remis avec le rapport d'audit</span></div>
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">Trajectoire arrêtée avec vous après l'audit</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">Compétences dimensionnées après lecture du code</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit de reprise · 2 000 € HT · déduction éventuelle au devis</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">Le rapport compare trois options : stabilisation, reprise progressive et réécriture ciblée. La recommandation dépend des preuves trouvées dans le code et les données. Le point d'entrée payant d'une reprise est l'audit publié sur <a href="/services/maintenance-evolution">maintenance &amp; évolution</a> ; le Discovery Sprint, lui, ouvre un projet de développement. Un seul cadrage payant est engagé, jamais les deux.</div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
