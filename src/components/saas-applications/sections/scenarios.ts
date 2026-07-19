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
        le point d'entrée, les livrables et les risques à traiter changent.
      </div>
    </div>

    <div class="sa-scen-tabs reveal" role="tablist">
      <button type="button" class="sa-scen-tab" data-scenario="mvp" role="tab" aria-selected="true">
        <span class="sa-scen-tab-k">SCÉNARIO 01</span>
        <span class="sa-scen-tab-t">MVP court</span>
        <span class="sa-scen-tab-d">Périmètre ciblé</span>
      </button>
      <button type="button" class="sa-scen-tab" data-scenario="scale" role="tab" aria-selected="false">
        <span class="sa-scen-tab-k">SCÉNARIO 02</span>
        <span class="sa-scen-tab-t">MVP + Scale</span>
        <span class="sa-scen-tab-d">Lots successifs</span>
      </button>
      <button type="button" class="sa-scen-tab" data-scenario="rebuild" role="tab" aria-selected="false">
        <span class="sa-scen-tab-k">SCÉNARIO 03</span>
        <span class="sa-scen-tab-t">Rebuild legacy</span>
        <span class="sa-scen-tab-d">Sur devis</span>
      </button>
    </div>

    <!-- PANEL MVP -->
    <div class="sa-scen-panel" data-panel="mvp" role="tabpanel" aria-hidden="false">
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
            <h4>Ce qu'on livre</h4>
            <ul>
              <li>5 à 15 écrans web + back-office admin</li>
              <li>Auth complète, Stripe billing, multi-tenant</li>
              <li>1 à 2 agents IA ciblés (extraction, RAG)</li>
              <li>Mesures RGPD et hébergement documentés selon les données</li>
              <li>Handover filmé + repo Git chez vous</li>
            </ul>
          </div>
        </div>
        <aside class="sa-scen-aside">
          <div class="sa-scen-meta">
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">Rôles et disponibilité définis au devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Démarrage</span><span class="v">Date confirmée après cadrage</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Discovery Sprint 2j · 1 500 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">Preuve vérifiable : <a href="https://lmnp.ai" target="_blank" rel="noopener">LMNP.AI</a>, produit du groupe conçu, développé et exploité par notre équipe.</div>
        </aside>
      </div>
    </div>

    <!-- PANEL SCALE -->
    <div class="sa-scen-panel" data-panel="scale" role="tabpanel" aria-hidden="true" hidden>
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
            <h4>Ce qu'on livre</h4>
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
        <aside class="sa-scen-aside">
          <div class="sa-scen-meta">
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">Équipe projet définie après audit</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Démarrage</span><span class="v">Planifié après audit et priorisation</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit technique 1 jour · 1 500 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">Décision de départ : isoler les goulots mesurés avant d'ajouter une nouvelle architecture ou une application mobile.</div>
        </aside>
      </div>
    </div>

    <!-- PANEL REBUILD -->
    <div class="sa-scen-panel" data-panel="rebuild" role="tabpanel" aria-hidden="true" hidden>
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
            <h4>Ce qu'on livre</h4>
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
        <aside class="sa-scen-aside">
          <div class="sa-scen-meta">
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">Compétences dimensionnées après lecture du code</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis après audit</span></div>
            <div class="sa-scen-meta-row"><span class="k">Démarrage</span><span class="v">Créneau confirmé avant commande</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit technique · 1 500 € (déductibles)</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">Le rapport compare trois options : stabilisation, reprise progressive et réécriture ciblée. La recommandation dépend des preuves trouvées dans le code et les données.</div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
