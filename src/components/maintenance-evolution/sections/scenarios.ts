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
        La plupart des missions TMA qu'on signe entrent dans un de ces quatre scénarios.
        <b>Cliquez sur le vôtre</b>&nbsp;: les livrables, le rythme d'onboarding et le budget changent.
      </div>
    </div>

    <div class="me-scen-tabs reveal" role="tablist">
      <button type="button" class="me-scen-tab is-active" data-scenario="orphaned" role="tab" aria-selected="true">
        <div class="me-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </div>
        <div class="me-scen-tab-body">
          <div class="me-scen-tab-top">
            <span class="me-scen-tab-k">Scénario 01</span>
            <span class="me-scen-tab-d">40 % des entrées</span>
          </div>
          <div class="me-scen-tab-t">App orpheline · prestataire disparu</div>
          <div class="me-scen-tab-sub">« L'agence ne répond plus, on a une app en prod et aucune équipe »</div>
        </div>
        <div class="me-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="me-scen-tab" data-scenario="freelance" role="tab" aria-selected="false">
        <div class="me-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
        </div>
        <div class="me-scen-tab-body">
          <div class="me-scen-tab-top">
            <span class="me-scen-tab-k">Scénario 02</span>
            <span class="me-scen-tab-d">25 % · transition</span>
          </div>
          <div class="me-scen-tab-t">Montée en gamme depuis un freelance</div>
          <div class="me-scen-tab-sub">« Notre freelance est top, mais il est seul — on a peur du bus factor »</div>
        </div>
        <div class="me-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="me-scen-tab" data-scenario="scaleup" role="tab" aria-selected="false">
        <div class="me-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
        </div>
        <div class="me-scen-tab-body">
          <div class="me-scen-tab-top">
            <span class="me-scen-tab-k">Scénario 03</span>
            <span class="me-scen-tab-d">20 % · post-levée</span>
          </div>
          <div class="me-scen-tab-t">Scale-up cherche partenaire long-terme</div>
          <div class="me-scen-tab-sub">« On vient de lever, le CTO arrive, on a besoin d'un binôme run »</div>
        </div>
        <div class="me-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="me-scen-tab" data-scenario="legacy" role="tab" aria-selected="false">
        <div class="me-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div class="me-scen-tab-body">
          <div class="me-scen-tab-top">
            <span class="me-scen-tab-k">Scénario 04</span>
            <span class="me-scen-tab-d">15 % · modernisation</span>
          </div>
          <div class="me-scen-tab-t">PME legacy à faire vivre 3-5 ans</div>
          <div class="me-scen-tab-sub">« App 6-10 ans, devs partis, stack vieillie, avant refonte »</div>
        </div>
        <div class="me-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>
    </div>

    <!-- PANEL orphaned -->
    <div class="me-scen-panel is-active" data-panel="orphaned">
      <div class="me-scen-cols">
        <div class="me-scen-main">
          <div class="me-scen-kind">Reprise · App orpheline sans prestataire actif</div>
          <h3>« L'agence a livré la 1.0 puis a disparu. On a une app en prod et plus personne. »</h3>
          <p class="me-scen-lead">
            Code reçu, accès partiel, pas de docs, ex-lead dev injoignable, dépendances obsolètes, monitoring absent.
            On arrive en mode <b>audit flash 5 jours</b>, on cartographie, on reprend les accès, on branche le monitoring,
            on stabilise. À J+30, votre app est entre des mains adultes — avec un plan de remédiation chiffré.
          </p>
          <div class="me-scen-items-title">CE QU'ON LIVRE</div>
          <div class="me-scen-items">
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Audit flash 5 j · rapport 15-25 pages</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Prise de contrôle GitHub, cloud, Stripe, DNS</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Monitoring branché dès S2 (Sentry + Better Stack)</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Plan de remédiation dette tech 6-12 mois</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Patches CVE critiques priorité absolue</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Documentation repartant de zéro (Notion + Loom)</div>
          </div>
        </div>
        <aside class="me-scen-aside">
          <div class="me-scen-aside-head">
            <span class="me-scen-aside-kind">Forfait mensuel</span>
            <div class="me-scen-aside-price">3 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="me-scen-meta">
            <div class="me-scen-meta-row"><dt>Tier recommandé</dt><dd>Scale (reprise + run)</dd></div>
            <div class="me-scen-meta-row"><dt>Onboarding</dt><dd>4 semaines · équipe 2 devs</dd></div>
            <div class="me-scen-meta-row"><dt>Premier effet</dt><dd>Monitoring live à J+14</dd></div>
            <div class="me-scen-meta-row"><dt>Engagement</dt><dd>6 mois puis mensuel</dd></div>
            <div class="me-scen-meta-row"><dt>Démarrage</dt><dd>Audit flash 2 500 € (déductible)</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg me-scen-cta">
            Cadrer la reprise
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="me-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Audit flash 5 j offert sur engagement 6 mois
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL freelance -->
    <div class="me-scen-panel" data-panel="freelance" hidden>
      <div class="me-scen-cols">
        <div class="me-scen-main">
          <div class="me-scen-kind">Transition · Freelance vers équipe agence</div>
          <h3>« Notre freelance est top, mais il est seul. Bus factor = 1, pas scalable. »</h3>
          <p class="me-scen-lead">
            Votre dev est bon, mais vous angoissez&nbsp;: s'il tombe malade ou se fait recruter ailleurs, <b>2 mois de reprise</b>.
            On prend le relais en douceur&nbsp;: le freelance reste 4-8 semaines en <b>consultant onboarding</b>, on reprend
            progressivement, on documente tout, il part serein avec un vrai BFA. <b>Aucune coupure</b>.
          </p>
          <div class="me-scen-items-title">CE QU'ON LIVRE</div>
          <div class="me-scen-items">
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Transition douce avec le freelance (overlap 4-8 sem.)</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Documentation exhaustive (Loom + Notion)</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Binôme 2 devs nommés · fin du bus factor</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Stack observability pro branchée</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>CI/CD, tests, SAST modernisés</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Rituel mensuel + roadmap trimestrielle</div>
          </div>
        </div>
        <aside class="me-scen-aside">
          <div class="me-scen-aside-head">
            <span class="me-scen-aside-kind">Forfait mensuel</span>
            <div class="me-scen-aside-price">2 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="me-scen-meta">
            <div class="me-scen-meta-row"><dt>Tier recommandé</dt><dd>Essentiel ou Scale</dd></div>
            <div class="me-scen-meta-row"><dt>Overlap freelance</dt><dd>4 à 8 semaines · payé par vous</dd></div>
            <div class="me-scen-meta-row"><dt>Équipe</dt><dd>2 devs nommés + lead</dd></div>
            <div class="me-scen-meta-row"><dt>Engagement</dt><dd>3 mois puis mensuel</dd></div>
            <div class="me-scen-meta-row"><dt>Démarrage</dt><dd>Audit 1 500 € (déductible)</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg me-scen-cta">
            Organiser la transition
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="me-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Sans couper la confiance avec votre freelance
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL scaleup -->
    <div class="me-scen-panel" data-panel="scaleup" hidden>
      <div class="me-scen-cols">
        <div class="me-scen-main">
          <div class="me-scen-kind">Partenariat · Scale-up post-levée</div>
          <h3>« On vient de lever, on recrute un CTO, on a besoin d'une équipe de run. »</h3>
          <p class="me-scen-lead">
            Votre série A/B est closée, le CTO arrive (ou est là depuis 3 mois), vos devs internes bossent sur le <b>core
            product</b>. Nous, on prend le <b>long tail</b>&nbsp;: maintenance, back-office, intégrations CRM, évolutions
            périphériques, sécurité, infra. <b>Contrat 12-18 mois pour vous laisser le temps de scale l'équipe interne.</b>
          </p>
          <div class="me-scen-items-title">CE QU'ON LIVRE</div>
          <div class="me-scen-items">
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Équipe dédiée 3 pers. · consultant + 2 devs</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Périmètre défini avec votre CTO&nbsp;: core vs. long tail</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>SLA 99,95 % · MTTR &lt; 1 h P1 (astreinte Premium)</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Compliance SOC2-ready pour vos clients grands comptes</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Revue hebdo avec votre CTO · sync OKRs tech</div>
            <div class="me-scen-item"><span class="me-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Passation progressive si scaling équipe interne</div>
          </div>
        </div>
        <aside class="me-scen-aside me-scen-aside-hot">
          <div class="me-scen-aside-head">
            <span class="me-scen-aside-kind">Tier Premium</span>
            <div class="me-scen-aside-price">14 000 <span>€ HT / mois</span></div>
          </div>
          <dl class="me-scen-meta">
            <div class="me-scen-meta-row"><dt>Tier recommandé</dt><dd>Premium · équipe 3 pers.</dd></div>
            <div class="me-scen-meta-row"><dt>Durée</dt><dd>12 à 18 mois · contrat-cadre</dd></div>
            <div class="me-scen-meta-row"><dt>SLA</dt><dd>99,95 % · MTTR &lt; 1 h</dd></div>
            <div class="me-scen-meta-row"><dt>Engagement</dt><dd>6 mois min · puis trim.</dd></div>
            <div class="me-scen-meta-row"><dt>Places</dt><dd>2 clients Premium en parallèle max.</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg me-scen-cta">
            Parler à un expert
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="me-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Pack sélectif · 2 slots Premium max en parallèle
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL legacy -->
    <div class="me-scen-panel" data-panel="legacy" hidden>
      <div class="me-scen-cols">
        <div class="me-scen-main">
          <div class="me-scen-kind">Modernisation · Legacy à faire vivre avant refonte</div>
          <h3>« App 6-10 ans, les devs sont partis, on doit la tenir 3-5 ans avant refonte. »</h3>
          <p class="me-scen-lead">
            Laravel 7, Symfony 4, Node 14, MySQL 5.7&hellip; votre app a bien servi mais la stack est vieillie.
            Refonte complète&nbsp;: trop cher, trop risqué tout de suite. On fait un <b>plan de remédiation progressive</b>&nbsp;:
            on patche les CVE critiques, on refactore les zones chaudes, on modernise module par module. <b>3 à 5 ans de vie
            supplémentaire</b> avant refonte, dans les meilleures conditions.
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
        <aside class="me-scen-aside">
          <div class="me-scen-aside-head">
            <span class="me-scen-aside-kind">Forfait mensuel</span>
            <div class="me-scen-aside-price">2 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="me-scen-meta">
            <div class="me-scen-meta-row"><dt>Tier recommandé</dt><dd>Essentiel · focus run + remédiation</dd></div>
            <div class="me-scen-meta-row"><dt>Durée</dt><dd>12 à 36 mois avant refonte</dd></div>
            <div class="me-scen-meta-row"><dt>Objectif</dt><dd>Tenir · pas accélérer</dd></div>
            <div class="me-scen-meta-row"><dt>Engagement</dt><dd>3 mois puis mensuel</dd></div>
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
        </aside>
      </div>
    </div>
  </div>
</section>
`;
