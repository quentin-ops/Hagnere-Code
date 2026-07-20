export const scenariosHtml = `
<!-- SCÉNARIOS AUDIT · 5 tabs interactifs (DD levée · DD M&A · CTO · refonte · SOC2) -->
<section class="at-scenarios" data-active="dd-seller">
  <div class="at-scen-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Quel scénario vous correspond ?</div>
        <h2>Cinq situations types,<br>cinq plans d'audit chiffrés.</h2>
      </div>
      <div class="right">
        Ces cinq scénarios servent à préparer le cadrage, sans prétendre refléter une fréquence client.
        <b>Cliquez sur le vôtre</b>&nbsp;: les questions de périmètre et de livrables changent.
      </div>
    </div>

    <div class="at-scen-tabs reveal" role="tablist">
      <button type="button" class="at-scen-tab is-active" data-scenario="dd-seller" role="tab" aria-selected="true">
        <span class="at-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
        </span>
        <span class="at-scen-tab-body">
          <span class="at-scen-tab-top">
            <span class="at-scen-tab-k">Scénario 01</span>
            <span class="at-scen-tab-d">15-20 j · 38 k€</span>
          </span>
          <span class="at-scen-tab-t">Tech DD pré-levée · côté vendeur</span>
          <span class="at-scen-tab-sub">« Notre VC demande une tech DD avant le term sheet final »</span>
        </span>
        <span class="at-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
      </button>

      <button type="button" class="at-scen-tab" data-scenario="dd-buyer" role="tab" aria-selected="false">
        <span class="at-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3M9 12l2 2 4-4M8 3v4h8V3"/></svg>
        </span>
        <span class="at-scen-tab-body">
          <span class="at-scen-tab-top">
            <span class="at-scen-tab-k">Scénario 02</span>
            <span class="at-scen-tab-d">20-30 j · 68 k€</span>
          </span>
          <span class="at-scen-tab-t">Tech DD pré-acquisition · côté acheteur</span>
          <span class="at-scen-tab-sub">« On rachète une boîte, il faut dérisquer le code »</span>
        </span>
        <span class="at-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
      </button>

      <button type="button" class="at-scen-tab" data-scenario="cto-baseline" role="tab" aria-selected="false">
        <span class="at-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
        </span>
        <span class="at-scen-tab-body">
          <span class="at-scen-tab-top">
            <span class="at-scen-tab-k">Scénario 03</span>
            <span class="at-scen-tab-d">10 j · 18 k€</span>
          </span>
          <span class="at-scen-tab-t">Baseline nouveau CTO</span>
          <span class="at-scen-tab-sub">« Je viens d'arriver, je veux un diagnostic neutre pour mon plan 100 jours »</span>
        </span>
        <span class="at-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
      </button>

      <button type="button" class="at-scen-tab" data-scenario="refonte" role="tab" aria-selected="false">
        <span class="at-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
        </span>
        <span class="at-scen-tab-body">
          <span class="at-scen-tab-top">
            <span class="at-scen-tab-k">Scénario 04</span>
            <span class="at-scen-tab-d">15-20 j · 38 k€</span>
          </span>
          <span class="at-scen-tab-t">Go / no-go refonte</span>
          <span class="at-scen-tab-sub">« On hésite entre patcher ou refondre, il faut un verdict chiffré »</span>
        </span>
        <span class="at-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
      </button>

      <button type="button" class="at-scen-tab" data-scenario="soc2" role="tab" aria-selected="false">
        <span class="at-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </span>
        <span class="at-scen-tab-body">
          <span class="at-scen-tab-top">
            <span class="at-scen-tab-k">Scénario 05</span>
            <span class="at-scen-tab-d">10 j · 18 k€ + pentest 10 k€</span>
          </span>
          <span class="at-scen-tab-t">Préparation SOC2 / ISO 27001</span>
          <span class="at-scen-tab-sub">« Un client enterprise exige SOC2 avant signature »</span>
        </span>
        <span class="at-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
      </button>
    </div>

    <!-- PANEL dd-seller -->
    <div class="at-scen-panel is-active" data-panel="dd-seller">
      <div class="at-scen-cols">
        <div class="at-scen-main">
          <div class="at-scen-kind">Tech Due Diligence · côté vendeur · pré-levée</div>
          <h3>« Notre VC demande une tech DD avant de signer le term sheet final. »</h3>
          <p class="at-scen-lead">
            Vous closez une Série A ou B. Le fonds mandate une tech DD via un cabinet externe (souvent OCTO / Theodo / Thoughtworks).
            Une revue côté vendeur peut aider à découvrir les constats plus tôt et à préparer les preuves.
            Le fonds reste libre de mandater sa propre due diligence&nbsp;: notre rapport ne remplace pas ses procédures
            et aucune économie ni absence de renégociation n'est garantie.
          </p>
          <div class="at-scen-items-title">CE QU'ON LIVRE</div>
          <div class="at-scen-items">
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Rapport, dimensions et volume définis au devis</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Tech Debt P&amp;L chiffré en euros · deck investisseur-ready</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Liste des findings potentiels côté fonds + réponses pré-rédigées</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Version "data room" anonymisée (sans noms internes)</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Indicateurs internes et références publiques, avec sources et limites</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Restitution board 90 min + Loom 30 min pour le fonds</div>
          </div>
        </div>
        <aside class="at-scen-aside">
          <div class="at-scen-aside-head">
            <span class="at-scen-aside-kind">Format Deep</span>
            <div class="at-scen-aside-price">38 000 <span>€ HT · fixe</span></div>
          </div>
          <dl class="at-scen-meta">
            <div class="at-scen-meta-row"><dt>Durée</dt><dd>15 à 20 jours ouvrés</dd></div>
            <div class="at-scen-meta-row"><dt>Intervenants</dt><dd>Nommés au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Confidentialité</dt><dd>Accord validé avant les accès</dd></div>
            <div class="at-scen-meta-row"><dt>Remise éventuelle</dt><dd>Uniquement si écrite au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Timing</dt><dd>Selon disponibilités et accès</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg at-scen-cta">
            Cadrer la DD vendeur
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="at-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Appel de cadrage 30 min offert avant signature
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL dd-buyer -->
    <div class="at-scen-panel" data-panel="dd-buyer" hidden>
      <div class="at-scen-cols">
        <div class="at-scen-main">
          <div class="at-scen-kind">Tech Due Diligence M&amp;A · côté acheteur</div>
          <h3>« On rachète une scale-up, il faut chiffrer la remédiation post-deal. »</h3>
          <p class="at-scen-lead">
            Vous êtes sur le point d'acquérir une société et devez instruire le risque technique.
            <b>Votre LOI peut inclure une clause de découverte tech</b>. L'analyse vise à
            documenter les hypothèses de remédiation, détecter les <b>points bloquants potentiels</b>
            (licences GPL dans du code distribué, CVE critiques non patchées, IP floue, propriété des comptes cloud),
            préparer la roadmap de remédiation post-deal chiffrée en capex pour votre board.
          </p>
          <div class="at-scen-items-title">CE QU'ON LIVRE</div>
          <div class="at-scen-items">
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Rapport DD M&amp;A 80-120 p. · format acquisition standard</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Analyse licences open source + IP + propriété code</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Liste des deal-breakers flaggés + recommandation go/no-go/renegotier</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Roadmap de remédiation post-deal chiffrée (12 mois + 24 mois)</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Coordination avec vos avocats M&amp;A pour les clauses de garantie</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Restitution comité d'investissement + argumentaire de re-négo</div>
          </div>
        </div>
        <aside class="at-scen-aside at-scen-aside-hot">
          <div class="at-scen-aside-head">
            <span class="at-scen-aside-kind">Format Tech DD M&amp;A</span>
            <div class="at-scen-aside-price">68 000 <span>€ HT · fixe</span></div>
          </div>
          <dl class="at-scen-meta">
            <div class="at-scen-meta-row"><dt>Durée</dt><dd>20 à 30 jours ouvrés</dd></div>
            <div class="at-scen-meta-row"><dt>Intervenants</dt><dd>Nommés au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Confidentialité</dt><dd>Coordonnée avec vos conseils</dd></div>
            <div class="at-scen-meta-row"><dt>Conflits d'intérêts</dt><dd>Déclarés et traités au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Timing</dt><dd>Selon disponibilités et accès</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg at-scen-cta">
            Parler à un expert
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="at-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Démarche confidentielle · coordination avec vos avocats selon leurs propres règles
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL cto-baseline -->
    <div class="at-scen-panel" data-panel="cto-baseline" hidden>
      <div class="at-scen-cols">
        <div class="at-scen-main">
          <div class="at-scen-kind">Baseline · Nouveau CTO / VP Eng</div>
          <h3>« Je viens d'arriver, je veux un diagnostic neutre pour mon plan 100 jours. »</h3>
          <p class="at-scen-lead">
            Vous venez d'être recruté comme CTO ou VP Eng. Vous devez présenter <b>votre plan 100 jours au CEO / board</b>
            d'ici 4-8 semaines. Vous sentez que la dette tech est élevée mais vous n'avez pas encore l'autorité politique
            pour le dire sans passer pour celui qui casse l'héritage. <b>Un tiers externe vous donne la parole</b>,
            chiffre ce que vous pressentez, et devient le co-auteur de votre plan d'action.
            L'équipe en place l'accepte mieux de l'externe que de vous.
          </p>
          <div class="at-scen-items-title">CE QU'ON LIVRE</div>
          <div class="at-scen-items">
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Audit Standard 10 j · 9 dimensions + Tech Debt P&amp;L</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Plan 100 jours co-construit avec vous · priorités P1/P2/P3</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Version board-safe (sans noms) pour le CEO / CA</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Version équipe (co-auteure) qui favorise l'adoption</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Positionnement sur critères publics, sans faux percentile propriétaire</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Option&nbsp;: Shadow CTO 4 semaines post-audit · +8 à 15 k€</div>
          </div>
        </div>
        <aside class="at-scen-aside">
          <div class="at-scen-aside-head">
            <span class="at-scen-aside-kind">Format Standard</span>
            <div class="at-scen-aside-price">18 000 <span>€ HT · fixe</span></div>
          </div>
          <dl class="at-scen-meta">
            <div class="at-scen-meta-row"><dt>Durée</dt><dd>10 jours ouvrés</dd></div>
            <div class="at-scen-meta-row"><dt>Intervenants</dt><dd>Nommés au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Méthode</dt><dd>Co-construction · no-blame · off-the-record</dd></div>
            <div class="at-scen-meta-row"><dt>Remise éventuelle</dt><dd>Uniquement si écrite au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Timing</dt><dd>Selon disponibilités et accès</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg at-scen-cta">
            Cadrer ma baseline
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="at-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Vous restez aux commandes — on vous donne les arguments, pas les ordres
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL refonte -->
    <div class="at-scen-panel" data-panel="refonte" hidden>
      <div class="at-scen-cols">
        <div class="at-scen-main">
          <div class="at-scen-kind">Go / no-go refonte · arbitrage CEO vs CFO</div>
          <h3>« On hésite entre patcher l'existant ou refaire à zéro. Verdict chiffré nécessaire. »</h3>
          <p class="at-scen-lead">
            Votre CTO veut refondre. Votre CFO refuse un capex de 600 k€ sur une V2 dont il n'a pas la certitude.
            Vous avez besoin d'un <b>verdict chiffré "coût de maintien sur 3 ans vs coût de refonte"</b>, présenté au board
            avec plusieurs scénarios et hypothèses explicites. Une éventuelle mission de refonte fait l'objet
            d'un devis distinct&nbsp;; les conflits d'intérêts potentiels sont déclarés avant l'audit.
          </p>
          <div class="at-scen-items-title">CE QU'ON LIVRE</div>
          <div class="at-scen-items">
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Rapport 60-80 p. · 9 dimensions · <b>Tech Debt P&amp;L sur 3 ans</b></div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>3 scenarios chiffrés&nbsp;: patch agressif · refonte partielle · refonte complète</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Dashboard comparatif opex vs capex par scenario · sur 3 ans</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Analyse du risque d'exécution (réussite historique des refontes du secteur)</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Recommandation motivée + deck board-ready 18 slides</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Restitution trilatérale CTO + CFO + CEO · pour alignement</div>
          </div>
        </div>
        <aside class="at-scen-aside">
          <div class="at-scen-aside-head">
            <span class="at-scen-aside-kind">Format Deep</span>
            <div class="at-scen-aside-price">38 000 <span>€ HT · fixe</span></div>
          </div>
          <dl class="at-scen-meta">
            <div class="at-scen-meta-row"><dt>Durée</dt><dd>15 à 20 jours ouvrés</dd></div>
            <div class="at-scen-meta-row"><dt>Intervenants</dt><dd>Nommés au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Indépendance</dt><dd>Constats et hypothèses de coût séparés</dd></div>
            <div class="at-scen-meta-row"><dt>Acceptation</dt><dd>Critères et procédure écrits au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Timing</dt><dd>Selon disponibilités et accès</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg at-scen-cta">
            Cadrer le go/no-go
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="at-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Clé de décision CEO · on refuse de servir un agenda
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL soc2 -->
    <div class="at-scen-panel" data-panel="soc2" hidden>
      <div class="at-scen-cols">
        <div class="at-scen-main">
          <div class="at-scen-kind">Préparation SOC2 / ISO 27001 · gap analysis</div>
          <h3>« Un client enterprise exige SOC2 avant signature. On veut être prêts en 6 mois. »</h3>
          <p class="at-scen-lead">
            Votre pipeline commercial contient un gros client B2B qui exige une certification que vous n'avez pas encore.
            Vous avez besoin d'une analyse d'écart cadrée avec l'auditeur ou le conseil compétent&nbsp;:
            référentiel et contrôles applicables, preuves disponibles, plan d'action et estimation des coûts.
            La certification officielle et son calendrier restent sous la responsabilité des tiers habilités.
          </p>
          <div class="at-scen-items-title">CE QU'ON LIVRE</div>
          <div class="at-scen-items">
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Analyse d'écart sur le référentiel et le périmètre convenus</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Plan d'action et hypothèses de charge documentés</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Recommandation outils (Vanta / Drata / Secureframe) + coûts estimés</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span><b>Pentest indépendant à chiffrer</b> · prestataire qualifié PASSI si requis</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Liste des cabinets d'audit officiels recommandés (tiers habilités)</div>
            <div class="at-scen-item"><span class="at-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Deck commercial pour rassurer votre prospect enterprise · 8 slides</div>
          </div>
        </div>
        <aside class="at-scen-aside">
          <div class="at-scen-aside-head">
            <span class="at-scen-aside-kind">Standard + Pentest</span>
            <div class="at-scen-aside-price">28 000 <span>€ HT · 18 k + 10 k pentest</span></div>
          </div>
          <dl class="at-scen-meta">
            <div class="at-scen-meta-row"><dt>Durée</dt><dd>10 j ouvrés audit + 5 j pentest partenaire</dd></div>
            <div class="at-scen-meta-row"><dt>Équipe</dt><dd>Composition et éventuel prestataire indépendant au devis</dd></div>
            <div class="at-scen-meta-row"><dt>Référentiel</dt><dd>Confirmé avec le tiers compétent</dd></div>
            <div class="at-scen-meta-row"><dt>Suite</dt><dd>On ne fait pas l'audit officiel (tiers habilité)</dd></div>
            <div class="at-scen-meta-row"><dt>Timing</dt><dd>Selon disponibilités, périmètre et tiers</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg at-scen-cta">
            Planifier la gap analysis
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="at-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            On prépare le terrain · l'audit officiel est mené par un tiers habilité
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
