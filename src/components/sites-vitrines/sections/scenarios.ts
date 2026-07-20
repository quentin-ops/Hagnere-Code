export const scenariosHtml = `
<!-- SCÉNARIOS PROJET (interactive toggle) -->
<section class="sv-scenarios" data-active="refonte">
  <div class="sv-scen-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Quel scénario vous correspond ?</div>
        <h2>Trois situations,<br>trois chemins clairs.</h2>
      </div>
      <div class="right">
        La plupart des projets « sites vitrines » qu'on prend entrent dans l'un de ces trois scénarios.
        <b>Cliquez sur le vôtre</b>&nbsp;: l'équipe, la durée, le livrable et le prix indicatif changent.
      </div>
    </div>

    <div class="sv-scen-tabs reveal" role="tablist">
      <button type="button" class="sv-scen-tab is-active" data-scenario="refonte" role="tab" aria-selected="true">
        <div class="sv-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-5v-7H10v7H5a2 2 0 01-2-2z"/></svg>
        </div>
        <div class="sv-scen-tab-body">
          <div class="sv-scen-tab-top">
            <span class="sv-scen-tab-k">Scénario 01</span>
            <span class="sv-scen-tab-d">5 – 7 sem.</span>
          </div>
          <div class="sv-scen-tab-t">Refonte corporate</div>
          <div class="sv-scen-tab-sub">« Mon site a 5 ans et il ne fait plus le poids »</div>
        </div>
        <div class="sv-scen-tab-chev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </button>

      <button type="button" class="sv-scen-tab" data-scenario="landing" role="tab" aria-selected="false">
        <div class="sv-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
        </div>
        <div class="sv-scen-tab-body">
          <div class="sv-scen-tab-top">
            <span class="sv-scen-tab-k">Scénario 02</span>
            <span class="sv-scen-tab-d">2 – 4 sem.</span>
          </div>
          <div class="sv-scen-tab-t">Landing de lancement</div>
          <div class="sv-scen-tab-sub">« Ma campagne Ads démarre dans 15 jours »</div>
        </div>
        <div class="sv-scen-tab-chev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </button>

      <button type="button" class="sv-scen-tab" data-scenario="seo" role="tab" aria-selected="false">
        <div class="sv-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M8 11h6M11 8v6"/></svg>
        </div>
        <div class="sv-scen-tab-body">
          <div class="sv-scen-tab-top">
            <span class="sv-scen-tab-k">Scénario 03</span>
            <span class="sv-scen-tab-d">8 – 12 sem.</span>
          </div>
          <div class="sv-scen-tab-t">Site + blog SEO</div>
          <div class="sv-scen-tab-sub">« Je veux du trafic organique durable »</div>
        </div>
        <div class="sv-scen-tab-chev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </button>
    </div>

    <!-- PANEL refonte -->
    <div class="sv-scen-panel is-active" data-panel="refonte">
      <div class="sv-scen-cols">
        <div class="sv-scen-main">
          <div class="sv-scen-kind">Site corporate · Refonte complète</div>
          <h3>« Mon site a 5 ans, il ne fait plus le poids. »</h3>
          <p class="sv-scen-lead">
            Refonte complète d'un site vitrine existant&nbsp;: nouveau design,
            nouvelle structure SEO, migration du contenu et plan visant à préserver les signaux utiles,
            ajout de fonctions modernes (formulaires CRM, Calendly, blog).
          </p>
          <div class="sv-scen-items-title">CE QU'ON LIVRE</div>
          <div class="sv-scen-items">
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Audit existant + plan de migration SEO
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Design Figma sur mesure (2–3 révisions)
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              10 à 20 pages + blog architecturé SEO
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              CMS headless (Sanity / Strapi) + formation 2 h
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Formulaires CRM (HubSpot, Brevo, Salesforce)
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Redirections 301 + monitoring SEO 3 mois
            </div>
          </div>
        </div>

        <aside class="sv-scen-aside">
          <div class="sv-scen-aside-head">
            <span class="sv-scen-aside-kind">Forfait estimé</span>
            <div class="sv-scen-aside-price">Sur devis</div>
          </div>
          <dl class="sv-scen-meta">
            <div class="sv-scen-meta-row">
              <dt>Délai</dt>
              <dd>Sur devis</dd>
            </div>
            <div class="sv-scen-meta-row">
              <dt>Équipe</dt>
              <dd>1 président · 1 designer · 1 dev senior</dd>
            </div>
            <div class="sv-scen-meta-row">
              <dt>Livrables</dt>
              <dd>Site en prod · doc · 2 h de formation</dd>
            </div>
            <div class="sv-scen-meta-row">
              <dt>Paiement</dt>
              <dd>30 % / 40 % / 30 %</dd>
            </div>
            <div class="sv-scen-meta-row">
              <dt>Garantie</dt>
              <dd>30 jours post-livraison</dd>
            </div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg sv-scen-cta">
            Cadrer ma refonte
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sv-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Sans engagement · fourchette sous 48 h
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL landing -->
    <div class="sv-scen-panel" data-panel="landing" hidden>
      <div class="sv-scen-cols">
        <div class="sv-scen-main">
          <div class="sv-scen-kind">Landing Page · Lancement produit</div>
          <h3>« Je lance un produit, ma campagne Ads démarre dans 15 jours. »</h3>
          <p class="sv-scen-lead">
            Une landing page longue optimisée pour la conversion, couplée à vos campagnes
            Google / Meta / LinkedIn. Prête à passer en A/B testing dès le jour de la mise en ligne.
          </p>
          <div class="sv-scen-items-title">CE QU'ON LIVRE</div>
          <div class="sv-scen-items">
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              1 LP longue (10–15 sections) + design sur mesure
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Tunnel de conversion pensé section par section
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Tracking GA4 + Meta Pixel + LinkedIn Insight
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Setup A/B testing (GrowthBook ou Vercel Flags)
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              2 variantes hero + test de micro-copy
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Intégration CRM (HubSpot, Pipedrive, Brevo)
            </div>
          </div>
        </div>

        <aside class="sv-scen-aside">
          <div class="sv-scen-aside-head">
            <span class="sv-scen-aside-kind">Forfait estimé</span>
            <div class="sv-scen-aside-price">Sur devis</div>
          </div>
          <dl class="sv-scen-meta">
            <div class="sv-scen-meta-row"><dt>Délai</dt><dd>Sur devis</dd></div>
            <div class="sv-scen-meta-row"><dt>Équipe</dt><dd>Intervenants nommés au devis</dd></div>
            <div class="sv-scen-meta-row"><dt>Livrables</dt><dd>LP live · rapport A/B setup</dd></div>
            <div class="sv-scen-meta-row"><dt>Paiement</dt><dd>Échéancier au devis</dd></div>
            <div class="sv-scen-meta-row"><dt>Correction</dt><dd>Durée et couverture au devis</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg sv-scen-cta">
            Cadrer ma LP
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sv-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Sans engagement · fourchette sous 48 h
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL seo -->
    <div class="sv-scen-panel" data-panel="seo" hidden>
      <div class="sv-scen-cols">
        <div class="sv-scen-main">
          <div class="sv-scen-kind">Site + Blog · Stratégie inbound SEO</div>
          <h3>« Je veux générer du trafic organique, durablement. »</h3>
          <p class="sv-scen-lead">
            Architecture SEO en cocons sémantiques, 15 à 40 pages piliers, blog éditeur-friendly,
            contenu initial rédigé par nos soins si besoin. Le plan éditorial et ses résultats sont suivis sur 12 à 24 mois, sans position ni trafic garantis.
          </p>
          <div class="sv-scen-items-title">CE QU'ON LIVRE</div>
          <div class="sv-scen-items">
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Audit SEO + recherche 100 mots-clés ciblés
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Architecture en cocons sémantiques + silos
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              20–40 pages piliers + gabarit articles
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Rédaction SEO 10–20 premiers articles (option)
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Newsletter + flux RSS + schema auteurs
            </div>
            <div class="sv-scen-item">
              <span class="sv-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>
              Monitoring positions + rapport mensuel 6 mois
            </div>
          </div>
        </div>

        <aside class="sv-scen-aside">
          <div class="sv-scen-aside-head">
            <span class="sv-scen-aside-kind">Forfait estimé</span>
            <div class="sv-scen-aside-price">Sur devis</div>
          </div>
          <dl class="sv-scen-meta">
            <div class="sv-scen-meta-row"><dt>Délai</dt><dd>Sur devis</dd></div>
            <div class="sv-scen-meta-row"><dt>Équipe</dt><dd>Intervenants nommés au devis</dd></div>
            <div class="sv-scen-meta-row"><dt>Livrables</dt><dd>Site + blog + stratégie + monitoring</dd></div>
            <div class="sv-scen-meta-row"><dt>Paiement</dt><dd>Échéancier au devis</dd></div>
            <div class="sv-scen-meta-row"><dt>Correction</dt><dd>Durée et couverture au devis</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg sv-scen-cta">
            Cadrer ma stratégie SEO
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="sv-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Sans engagement · fourchette sous 48 h
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
