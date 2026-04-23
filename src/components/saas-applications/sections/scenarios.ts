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
        La plupart des projets qu'on prend entrent dans l'un de ces trois scénarios.
        Cliquez sur le vôtre : l'équipe, la durée, le livrable et le prix indicatif changent.
      </div>
    </div>

    <div class="sa-scen-tabs reveal" role="tablist">
      <button type="button" class="sa-scen-tab" data-scenario="mvp" role="tab" aria-selected="true">
        <span class="sa-scen-tab-k">SCÉNARIO 01</span>
        <span class="sa-scen-tab-t">MVP court</span>
        <span class="sa-scen-tab-d">3–6 sem.</span>
      </button>
      <button type="button" class="sa-scen-tab" data-scenario="scale" role="tab" aria-selected="false">
        <span class="sa-scen-tab-k">SCÉNARIO 02</span>
        <span class="sa-scen-tab-t">MVP + Scale</span>
        <span class="sa-scen-tab-d">3 mois</span>
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
            Vous avez une idée validée (LOI, pré-inscriptions, waiting list), quelques
            utilisateurs pilotes identifiés, et 15 à 60 k€ de budget. Le but : un SaaS
            <b>solide, vendable, monétisable</b> en moins de 6 semaines — pas un
            prototype jetable, pas un monstre de 20 features.
          </p>
          <div class="sa-scen-deliv">
            <h4>Ce qu'on livre</h4>
            <ul>
              <li>5 à 15 écrans web + back-office admin</li>
              <li>Auth complète, Stripe billing, multi-tenant</li>
              <li>1 à 2 agents IA ciblés (extraction, RAG)</li>
              <li>Conformité RGPD clé en main + hébergement FR</li>
              <li>Handover filmé + repo Git chez vous</li>
            </ul>
          </div>
        </div>
        <aside class="sa-scen-aside">
          <div class="sa-scen-meta">
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">3 à 6 semaines</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">1 associé + 1 dev + 1 designer</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix indicatif</span><span class="v">15 à 60 k€ forfait</span></div>
            <div class="sa-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 2 semaines</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Discovery Sprint 2j · 1 500 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">Référence : LMNP.AI — MVP livré en 5 semaines, 6 000+ clients payants aujourd'hui.</div>
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
            Vous faites 5 à 50 k€ de MRR, la traction est là, mais l'architecture
            commence à craquer : churn invisible, onboarding artisanal, dashboards
            qui rament, mobile absent. Il faut <b>consolider + scaler</b> sans casser ce qui marche.
          </p>
          <div class="sa-scen-deliv">
            <h4>Ce qu'on livre</h4>
            <ul>
              <li>Refonte des goulets d'étranglement (perf, queues, cache)</li>
              <li>Self-serve complet (onboarding, billing, gestion équipe)</li>
              <li>App mobile iOS/Android React Native</li>
              <li>Analytics produit + feature flags + A/B testing</li>
              <li>Agents IA autonomes 24/7 (support, enrichissement, relances)</li>
              <li>SSO enterprise + audit logs pour deals B2B</li>
            </ul>
          </div>
        </div>
        <aside class="sa-scen-aside">
          <div class="sa-scen-meta">
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">2 à 4 mois</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">1 associé + 2 devs + 1 designer + 1 IA</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix indicatif</span><span class="v">60 à 150 k€ forfait</span></div>
            <div class="sa-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 3 à 4 semaines</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit technique 1 jour · 1 500 €</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">Typique : SaaS B2B à 20 k€ MRR qui doit sortir son app mobile + passer à 10× users avec la même équipe.</div>
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
            <div class="sa-scen-meta-row"><span class="k">Durée</span><span class="v">2 à 6 mois selon l'existant</span></div>
            <div class="sa-scen-meta-row"><span class="k">Équipe</span><span class="v">2 à 4 seniors full-stack</span></div>
            <div class="sa-scen-meta-row"><span class="k">Prix indicatif</span><span class="v">Sur devis après audit</span></div>
            <div class="sa-scen-meta-row"><span class="k">Démarrage</span><span class="v">Audit en 2 semaines</span></div>
            <div class="sa-scen-meta-row"><span class="k">Point d'entrée</span><span class="v">Audit technique · 1 500 € (déductibles)</span></div>
          </div>
          <a href="#contact" class="btn btn-accent sa-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sa-scen-ref">70 % des audits débouchent sur une reprise — 30 % sur une réécriture ciblée quand le coût de reprise dépasse celui d'un nouveau build.</div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
