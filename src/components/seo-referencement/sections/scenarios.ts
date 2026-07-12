export const scenariosHtml = `
<!-- SCÉNARIOS -->
<section class="seo-scenarios" data-active="invisible">
  <div class="seo-scen-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Quel scénario vous correspond ?</div>
        <h2>Quatre situations,<br>quatre stratégies dédiées.</h2>
      </div>
      <div class="right">
        La plupart des missions SEO qu'on signe entrent dans l'un de ces quatre scénarios.
        <b>Cliquez sur le vôtre</b>&nbsp;: les livrables, le rythme, l'équipe et le budget changent.
      </div>
    </div>

    <div class="seo-scen-tabs reveal" role="tablist">
      <button type="button" class="seo-scen-tab is-active" data-scenario="invisible" role="tab" aria-selected="true">
        <div class="seo-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </div>
        <div class="seo-scen-tab-body">
          <div class="seo-scen-tab-top">
            <span class="seo-scen-tab-k">Scénario 01</span>
            <span class="seo-scen-tab-d">9–12 mois</span>
          </div>
          <div class="seo-scen-tab-t">Invisible sur Google</div>
          <div class="seo-scen-tab-sub">« Je pars de zéro, je veux apparaître sérieusement »</div>
        </div>
        <div class="seo-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="seo-scen-tab" data-scenario="update" role="tab" aria-selected="false">
        <div class="seo-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6z"/><path d="M8 11l3 3 5-5"/></svg>
        </div>
        <div class="seo-scen-tab-body">
          <div class="seo-scen-tab-top">
            <span class="seo-scen-tab-k">Scénario 02</span>
            <span class="seo-scen-tab-d">6–9 mois</span>
          </div>
          <div class="seo-scen-tab-t">Récupération post-update</div>
          <div class="seo-scen-tab-sub">« J'ai perdu 40–80 % de trafic, je veux récupérer »</div>
        </div>
        <div class="seo-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="seo-scen-tab" data-scenario="inbound" role="tab" aria-selected="false">
        <div class="seo-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>
        </div>
        <div class="seo-scen-tab-body">
          <div class="seo-scen-tab-top">
            <span class="seo-scen-tab-k">Scénario 03</span>
            <span class="seo-scen-tab-d">12–18 mois</span>
          </div>
          <div class="seo-scen-tab-t">Inbound content SaaS/B2B</div>
          <div class="seo-scen-tab-sub">« Je veux un canal de leads full-funnel »</div>
        </div>
        <div class="seo-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="seo-scen-tab" data-scenario="local" role="tab" aria-selected="false">
        <div class="seo-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div class="seo-scen-tab-body">
          <div class="seo-scen-tab-top">
            <span class="seo-scen-tab-k">Scénario 04</span>
            <span class="seo-scen-tab-d">3–4 mois</span>
          </div>
          <div class="seo-scen-tab-t">SEO local &amp; pages villes</div>
          <div class="seo-scen-tab-sub">« Artisan multi-villes, j'ai besoin de dominer mon bassin »</div>
        </div>
        <div class="seo-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>
    </div>

    <!-- PANEL invisible -->
    <div class="seo-scen-panel is-active" data-panel="invisible">
      <div class="seo-scen-cols">
        <div class="seo-scen-main">
          <div class="seo-scen-kind">Démarrage SEO · Site sans trafic organique</div>
          <h3>« Je pars de zéro, je veux apparaître sérieusement sur Google. »</h3>
          <p class="seo-scen-lead">
            Site avec 500 à 3 000 visiteurs/mois, aucune stratégie SEO historique.
            On pose les fondations techniques, on construit une architecture en cocons,
            on alimente 12 mois de contenu éditorial + netlinking mensuel pour scaler proprement.
          </p>
          <div class="seo-scen-items-title">CE QU'ON LIVRE</div>
          <div class="seo-scen-items">
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Audit technique + recherche 1 000 mots-clés</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Architecture en cocons sémantiques</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>14 articles/mois rédigés &amp; optimisés</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>6 backlinks qualitatifs/mois</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Dashboard business Looker Studio</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Réunion mensuelle consultant senior</div>
          </div>
        </div>
        <aside class="seo-scen-aside">
          <div class="seo-scen-aside-head">
            <span class="seo-scen-aside-kind">Forfait mensuel</span>
            <div class="seo-scen-aside-price">2 850 <span>€ HT / mois</span></div>
          </div>
          <dl class="seo-scen-meta">
            <div class="seo-scen-meta-row"><dt>Durée</dt><dd>9 à 12 mois recommandés</dd></div>
            <div class="seo-scen-meta-row"><dt>Équipe</dt><dd>1 consultant senior + 1 rédacteur</dd></div>
            <div class="seo-scen-meta-row"><dt>Résultats</dt><dd>Premiers à 3 mois · significatifs à 6–9 mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Engagement</dt><dd>3 mois puis mois par mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Démarrage</dt><dd>Audit 2 400 € (déductible)</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg seo-scen-cta">
            Cadrer ma stratégie
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="seo-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Sans engagement long · audit gratuit 30 min
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL update -->
    <div class="seo-scen-panel" data-panel="update" hidden>
      <div class="seo-scen-cols">
        <div class="seo-scen-main">
          <div class="seo-scen-kind">Récupération · Site touché par Google update</div>
          <h3>« J'ai pris un coup de HCU ou Core Update, je veux remonter. »</h3>
          <p class="seo-scen-lead">
            Site qui a perdu 30 à 80 % de trafic suite à HCU 2023, Core Update 2024-2025
            ou Spam Update. On identifie la cause (contenu low-value, problèmes E-E-A-T, liens toxiques),
            on corrige, on attend le prochain core update pour mesurer.
          </p>
          <div class="seo-scen-items-title">CE QU'ON LIVRE</div>
          <div class="seo-scen-items">
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Audit de récupération post-update</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Content pruning (suppression / fusion)</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Signaux E-E-A-T (auteurs, sources, expertise)</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Refonte des pages gagnantes</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Audit backlinks + disavow toxiques</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Monitoring chaque update Google</div>
          </div>
        </div>
        <aside class="seo-scen-aside">
          <div class="seo-scen-aside-head">
            <span class="seo-scen-aside-kind">Forfait mensuel</span>
            <div class="seo-scen-aside-price">3 900 <span>€ HT / mois</span></div>
          </div>
          <dl class="seo-scen-meta">
            <div class="seo-scen-meta-row"><dt>Durée</dt><dd>6 à 9 mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Équipe</dt><dd>Consultant senior + rédacteur + lead tech</dd></div>
            <div class="seo-scen-meta-row"><dt>Récupération</dt><dd>Partielle à 3–4 mois · stabilisation 6–9 mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Engagement</dt><dd>3 mois puis mois par mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Taux succès</dt><dd>~ 70 % des cas récupèrent</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg seo-scen-cta">
            Diagnostic gratuit
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="seo-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Audit gratuit avant tout engagement
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL inbound -->
    <div class="seo-scen-panel" data-panel="inbound" hidden>
      <div class="seo-scen-cols">
        <div class="seo-scen-main">
          <div class="seo-scen-kind">Inbound · SaaS &amp; services B2B</div>
          <h3>« Je veux un vrai canal de leads qualifiés sur 12-18 mois. »</h3>
          <p class="seo-scen-lead">
            SaaS, éditeurs, services B2B avec cycle d'achat long. Cartographie sémantique
            par étape du funnel (TOFU / MOFU / BOFU), 20+ contenus mensuels, lead magnets,
            séquences email, attribution complète CA organique.
          </p>
          <div class="seo-scen-items-title">CE QU'ON LIVRE</div>
          <div class="seo-scen-items">
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Cartographie sémantique funnel complet</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>20+ articles/mois TOFU/MOFU/BOFU</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Lead magnets + CTAs conversion</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>10 backlinks top-tier (DR 50+)</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Attribution CA → pages (GA4 + CRM)</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Réunion bimensuelle + hotline</div>
          </div>
        </div>
        <aside class="seo-scen-aside">
          <div class="seo-scen-aside-head">
            <span class="seo-scen-aside-kind">Forfait mensuel</span>
            <div class="seo-scen-aside-price">4 900 <span>€ HT / mois</span></div>
          </div>
          <dl class="seo-scen-meta">
            <div class="seo-scen-meta-row"><dt>Durée</dt><dd>12 à 18 mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Équipe</dt><dd>3 pers. dédiées</dd></div>
            <div class="seo-scen-meta-row"><dt>Résultats</dt><dd>Leads à 4–6 mois · scaling 9–12 mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Engagement</dt><dd>6 mois minimum</dd></div>
            <div class="seo-scen-meta-row"><dt>ROI cible</dt><dd>×3 à ×6 sur 12 mois vs SEA</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg seo-scen-cta">
            Parler à un expert
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="seo-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Pack premium · sélectif (2 clients max en parallèle)
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL local -->
    <div class="seo-scen-panel" data-panel="local" hidden>
      <div class="seo-scen-cols">
        <div class="seo-scen-main">
          <div class="seo-scen-kind">SEO local · Artisans, multi-sites, franchises</div>
          <h3>« Je veux dominer Google sur 10–40 villes dans mon bassin. »</h3>
          <p class="seo-scen-lead">
            Artisans, professions réglementées, multi-sites physiques, réseaux de franchises.
            Optimisation Google Business Profile, pages villes à contenu authentique,
            workflow avis clients, citations locales. Résultats visibles en 6-10 semaines.
          </p>
          <div class="seo-scen-items-title">CE QU'ON LIVRE</div>
          <div class="seo-scen-items">
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Optimisation Google Business Profile</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>10 à 40 pages villes authentiques</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Citations locales (Pages Jaunes, Yelp…)</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Workflow avis automatisé</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Schema LocalBusiness par page ville</div>
            <div class="seo-scen-item"><span class="seo-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Tracking leads par zone géo</div>
          </div>
        </div>
        <aside class="seo-scen-aside">
          <div class="seo-scen-aside-head">
            <span class="seo-scen-aside-kind">Forfait mensuel</span>
            <div class="seo-scen-aside-price">1 450 <span>€ HT / mois</span></div>
          </div>
          <dl class="seo-scen-meta">
            <div class="seo-scen-meta-row"><dt>Durée</dt><dd>3 à 4 mois (+ maintenance)</dd></div>
            <div class="seo-scen-meta-row"><dt>Équipe</dt><dd>Consultant local + rédacteur</dd></div>
            <div class="seo-scen-meta-row"><dt>Résultats</dt><dd>Visibilité à 6–10 semaines · leads 3–4 mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Engagement</dt><dd>3 mois puis mois par mois</dd></div>
            <div class="seo-scen-meta-row"><dt>Zones</dt><dd>10 à 40 villes selon bassin</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg seo-scen-cta">
            Cadrer mon local
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="seo-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Devis par nombre de villes ciblées
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
