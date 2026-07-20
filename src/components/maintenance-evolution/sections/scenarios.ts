export const scenariosHtml = `
<!-- SCÉNARIOS M&E — 4 tabs interactifs -->
<section class="me-scenarios" data-active="orphaned">
  <div class="me-scen-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Quel scénario vous correspond ?</div>
        <h2>Quatre situations d'entrée,<br>quatre plans de reprise.</h2>
      </div>
      <div class="right">
        <b>Ces quatre scénarios sont fictifs</b>&nbsp;: ils ne décrivent ni des clients réels, ni une répartition observée.
        Utilisez-les pour préparer les questions de diagnostic&nbsp;; seuls le devis et le contrat fixent livrables, rythme et budget.
      </div>
    </div>

    <div class="me-scen-tabs reveal" role="tablist" aria-label="Choisir un scénario">
      <button type="button" class="me-scen-tab is-active" data-scenario="orphaned" role="tab" aria-selected="true" id="me-scenario-tab-orphaned" aria-controls="me-scenario-panel-orphaned" tabindex="0">
        <div class="me-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </div>
        <div class="me-scen-tab-body">
          <div class="me-scen-tab-top">
            <span class="me-scen-tab-k">Scénario 01</span>
            <span class="me-scen-tab-d">Cas fictif · reprise</span>
          </div>
          <div class="me-scen-tab-t">App orpheline · prestataire disparu</div>
          <div class="me-scen-tab-sub">« L'agence ne répond plus, on a une app en prod et aucune équipe »</div>
        </div>
        <div class="me-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="me-scen-tab" data-scenario="freelance" role="tab" aria-selected="false" id="me-scenario-tab-freelance" aria-controls="me-scenario-panel-freelance" tabindex="-1">
        <div class="me-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
        </div>
        <div class="me-scen-tab-body">
          <div class="me-scen-tab-top">
            <span class="me-scen-tab-k">Scénario 02</span>
            <span class="me-scen-tab-d">Cas fictif · transition</span>
          </div>
          <div class="me-scen-tab-t">Montée en gamme depuis un freelance</div>
          <div class="me-scen-tab-sub">« Notre freelance est top, mais il est seul — on a peur du bus factor »</div>
        </div>
        <div class="me-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="me-scen-tab" data-scenario="scaleup" role="tab" aria-selected="false" id="me-scenario-tab-scaleup" aria-controls="me-scenario-panel-scaleup" tabindex="-1">
        <div class="me-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
        </div>
        <div class="me-scen-tab-body">
          <div class="me-scen-tab-top">
            <span class="me-scen-tab-k">Scénario 03</span>
            <span class="me-scen-tab-d">Cas fictif · organisation</span>
          </div>
          <div class="me-scen-tab-t">Scale-up cherche partenaire long-terme</div>
          <div class="me-scen-tab-sub">« On vient de lever, le CTO arrive, on a besoin d'un binôme run »</div>
        </div>
        <div class="me-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="me-scen-tab" data-scenario="legacy" role="tab" aria-selected="false" id="me-scenario-tab-legacy" aria-controls="me-scenario-panel-legacy" tabindex="-1">
        <div class="me-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div class="me-scen-tab-body">
          <div class="me-scen-tab-top">
            <span class="me-scen-tab-k">Scénario 04</span>
            <span class="me-scen-tab-d">Cas fictif · modernisation</span>
          </div>
          <div class="me-scen-tab-t">PME legacy à maintenir avant refonte</div>
          <div class="me-scen-tab-sub">« Stack vieillissante, équipe partie, trajectoire à décider »</div>
        </div>
        <div class="me-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>
    </div>

    <!-- PANEL orphaned -->
    <div class="me-scen-panel is-active" data-panel="orphaned" role="tabpanel" tabindex="0" aria-hidden="false" id="me-scenario-panel-orphaned" aria-labelledby="me-scenario-tab-orphaned">
      <div class="me-scen-cols">
        <div class="me-scen-main">
          <div class="me-scen-kind">Reprise · App orpheline sans prestataire actif</div>
          <h3>« L'agence a livré la 1.0 puis a disparu. On a une app en prod et plus personne. »</h3>
          <p class="me-scen-lead">
            Code reçu, accès partiel, pas de docs, ex-lead dev injoignable, dépendances obsolètes, monitoring absent.
            On commence par un diagnostic cadré, on cartographie les accès, on priorise les risques et on définit la reprise.
            Les délais de branchement du monitoring et de stabilisation dépendent de l'état réel de la stack.
          </p>
          <div class="me-scen-items-title">CE QU'ON LIVRE</div>
          <div class="me-scen-items">
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Diagnostic, format et livrable définis au devis</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Prise de contrôle GitHub, cloud, Stripe, DNS</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Monitoring selon faisabilité, outils et jalon convenus</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Plan de remédiation priorisé et daté après diagnostic</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>CVE priorisées selon sévérité, exposition et tests requis</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Documentation repartant de zéro (Notion + Loom)</div>
          </div>
        </div>
        <div class="me-scen-aside">
          <div class="me-scen-aside-head">
            <span class="me-scen-aside-kind">Forfait mensuel</span>
            <div class="me-scen-aside-price">3 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="me-scen-meta">
            <div class="me-scen-meta-row"><dt>Tier recommandé</dt><dd>Scale (reprise + run)</dd></div>
            <div class="me-scen-meta-row"><dt>Onboarding</dt><dd>Planning défini après inventaire</dd></div>
            <div class="me-scen-meta-row"><dt>Premier effet</dt><dd>Jalon observable inscrit au devis</dd></div>
            <div class="me-scen-meta-row"><dt>Engagement</dt><dd>Durée et préavis au devis</dd></div>
            <div class="me-scen-meta-row"><dt>Démarrage</dt><dd>Diagnostic initial sur devis</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg me-scen-cta">
            Cadrer la reprise
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="me-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Périmètre, prix et calendrier confirmés avant signature
          </div>
        </div>
      </div>
    </div>

    <!-- PANEL freelance -->
    <div class="me-scen-panel" data-panel="freelance" role="tabpanel" tabindex="0" aria-hidden="true" id="me-scenario-panel-freelance" aria-labelledby="me-scenario-tab-freelance" hidden>
      <div class="me-scen-cols">
        <div class="me-scen-main">
          <div class="me-scen-kind">Transition · Freelance vers équipe agence</div>
          <h3>« Notre freelance est top, mais il est seul. Bus factor = 1, pas scalable. »</h3>
          <p class="me-scen-lead">
            Une dépendance à une seule personne peut compliquer la continuité.
            Le protocole de transition définit l'overlap possible avec le freelance, les accès, la documentation, les validations
            et un plan de retour arrière. Il vise à limiter l'interruption sans promettre qu'elle sera impossible.
          </p>
          <div class="me-scen-items-title">CE QU'ON LIVRE</div>
          <div class="me-scen-items">
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Overlap et calendrier de transition définis au devis</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Documentation dont le périmètre est inventorié</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Intervenants et modalités de relais nommés au devis</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Stack observability pro branchée</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>CI/CD, tests, SAST modernisés</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Rituel mensuel + roadmap trimestrielle</div>
          </div>
        </div>
        <div class="me-scen-aside">
          <div class="me-scen-aside-head">
            <span class="me-scen-aside-kind">Forfait mensuel</span>
            <div class="me-scen-aside-price">2 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="me-scen-meta">
            <div class="me-scen-meta-row"><dt>Tier recommandé</dt><dd>Essentiel ou Scale</dd></div>
            <div class="me-scen-meta-row"><dt>Overlap freelance</dt><dd>Durée et coût au devis</dd></div>
            <div class="me-scen-meta-row"><dt>Équipe</dt><dd>Intervenants et relais nommés</dd></div>
            <div class="me-scen-meta-row"><dt>Engagement</dt><dd>Durée et préavis au devis</dd></div>
            <div class="me-scen-meta-row"><dt>Démarrage</dt><dd>Diagnostic initial chiffré</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg me-scen-cta">
            Organiser la transition
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="me-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Protocole de transition validé avec les parties
          </div>
        </div>
      </div>
    </div>

    <!-- PANEL scaleup -->
    <div class="me-scen-panel" data-panel="scaleup" role="tabpanel" tabindex="0" aria-hidden="true" id="me-scenario-panel-scaleup" aria-labelledby="me-scenario-tab-scaleup" hidden>
      <div class="me-scen-cols">
        <div class="me-scen-main">
          <div class="me-scen-kind">Partenariat · Scale-up post-levée</div>
          <h3>« On vient de lever, on recrute un CTO, on a besoin d'une équipe de run. »</h3>
          <p class="me-scen-lead">
            Votre financement est réalisé, le CTO arrive ou structure l'équipe, et les développeurs internes travaillent sur le <b>core
            product</b>. Nous, on prend le <b>long tail</b>&nbsp;: maintenance, back-office, intégrations CRM, évolutions
            périphériques, sécurité, infra. <b>La durée et la capacité sont définies avec votre CTO selon la feuille de route.</b>
          </p>
          <div class="me-scen-items-title">CE QU'ON LIVRE</div>
          <div class="me-scen-items">
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Intervenants, rôles et capacité nommés dans le devis</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Périmètre défini avec votre CTO&nbsp;: core vs. long tail</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Niveaux de service et horaires de support écrits au contrat</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Exigences de sécurité et preuves attendues cadrées avec vos clients</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Rythme de revue convenu avec votre CTO</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Modalités de documentation et de passation prévues au devis</div>
          </div>
        </div>
        <div class="me-scen-aside me-scen-aside-hot">
          <div class="me-scen-aside-head">
            <span class="me-scen-aside-kind">Tier Premium</span>
            <div class="me-scen-aside-price">14 000 <span>€ HT / mois</span></div>
          </div>
          <dl class="me-scen-meta">
            <div class="me-scen-meta-row"><dt>Formule</dt><dd>Dimensionnée sur devis</dd></div>
            <div class="me-scen-meta-row"><dt>Durée</dt><dd>Selon feuille de route</dd></div>
            <div class="me-scen-meta-row"><dt>Service</dt><dd>Objectifs mesurables au contrat</dd></div>
            <div class="me-scen-meta-row"><dt>Engagement</dt><dd>Durée et sortie négociées</dd></div>
            <div class="me-scen-meta-row"><dt>Capacité</dt><dd>Confirmée avant signature</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg me-scen-cta">
            Parler à un expert
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="me-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Capacité réelle confirmée avant signature
          </div>
        </div>
      </div>
    </div>

    <!-- PANEL legacy -->
    <div class="me-scen-panel" data-panel="legacy" role="tabpanel" tabindex="0" aria-hidden="true" id="me-scenario-panel-legacy" aria-labelledby="me-scenario-tab-legacy" hidden>
      <div class="me-scen-cols">
        <div class="me-scen-main">
          <div class="me-scen-kind">Modernisation · Legacy à faire vivre avant refonte</div>
          <h3>« La stack vieillit, les développeurs sont partis et la refonte n'est pas encore décidée. »</h3>
          <p class="me-scen-lead">
            Laravel 7, Symfony 4, Node 14, MySQL 5.7&hellip; votre app a bien servi mais la stack est vieillie.
            Refonte complète&nbsp;: trop cher, trop risqué tout de suite. On fait un <b>plan de remédiation progressive</b>&nbsp;:
            on priorise les vulnérabilités, on refactore les zones chaudes et on modernise module par module.
            L'horizon soutenable dépend du diagnostic, des versions supportées, des risques et du budget&nbsp;: aucune durée de vie supplémentaire n'est promise.
          </p>
          <div class="me-scen-items-title">CE QU'ON LIVRE</div>
          <div class="me-scen-items">
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Audit technique legacy + plan de modernisation 12 mois</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>CVE patchés en priorité · bump mineurs en continu</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Refactos ciblés sur les zones chaudes (billing, auth)</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Modernisation progressive module par module</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Documentation architecture + ADR (decisions records)</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Transition vers refonte si / quand vous le voulez</div>
          </div>
        </div>
        <div class="me-scen-aside">
          <div class="me-scen-aside-head">
            <span class="me-scen-aside-kind">Forfait mensuel</span>
            <div class="me-scen-aside-price">2 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="me-scen-meta">
            <div class="me-scen-meta-row"><dt>Tier recommandé</dt><dd>Essentiel · focus run + remédiation</dd></div>
            <div class="me-scen-meta-row"><dt>Durée</dt><dd>Horizon réévalué après diagnostic</dd></div>
            <div class="me-scen-meta-row"><dt>Objectif</dt><dd>Tenir · pas accélérer</dd></div>
            <div class="me-scen-meta-row"><dt>Engagement</dt><dd>Durée et préavis au devis</dd></div>
            <div class="me-scen-meta-row"><dt>Démarrage</dt><dd>Audit legacy 2 000 € (déductible)</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg me-scen-cta">
            Planifier l'audit legacy
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="me-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Refonte possible en option plus tard
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
