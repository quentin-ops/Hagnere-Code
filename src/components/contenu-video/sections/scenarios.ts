export const scenariosHtml = `
<!-- SCENARIOS 3 PACKS -->
<section class="cv-scenarios" data-active="yt">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Trois scénarios à cadrer</div>
        <h2>Choisissez votre terrain.<br>On <em>s'occupe du reste</em>.</h2>
      </div>
      <div class="right">
        Trois cas typiques, trois forfaits mensuels. Cliquez sur le vôtre : livrables, cadence et prix s'ajustent.
        Si votre besoin sort de ces trois, on monte un <b>pack sur-mesure</b>.
      </div>
    </div>

    <div class="cv-scen-tabs reveal" role="tablist">
      <button type="button" class="cv-scen-tab" data-scenario="yt" role="tab" aria-selected="true">
        <span class="cv-scen-tab-k">PACK 01</span>
        <span class="cv-scen-tab-t">YouTube Founder</span>
        <span class="cv-scen-tab-d">3 500 €/mois</span>
      </button>
      <button type="button" class="cv-scen-tab" data-scenario="motion" role="tab" aria-selected="false">
        <span class="cv-scen-tab-k">PACK 02</span>
        <span class="cv-scen-tab-t">Motion &amp; brand</span>
        <span class="cv-scen-tab-d">4 500 €/mois</span>
      </button>
      <button type="button" class="cv-scen-tab" data-scenario="retainer" role="tab" aria-selected="false">
        <span class="cv-scen-tab-k">PACK 03</span>
        <span class="cv-scen-tab-t">Content retainer</span>
        <span class="cv-scen-tab-d">6 900 €/mois</span>
      </button>
    </div>

    <!-- PANEL YT -->
    <div class="cv-scen-panel" data-panel="yt" role="tabpanel" aria-hidden="false">
      <div class="cv-scen-cols">
        <div class="cv-scen-col-main">
          <div class="cv-scen-kind">POUR QUI</div>
          <h3>CEO, founder ou expert<br>qui veut <em>exister sur YouTube</em>.</h3>
          <p>
            Vous avez de vraies choses à dire mais <b>pas le temps d'écrire, de tourner et de monter</b>. On écrit les scripts à partir de 30 min d'interview, vous tournez 1 h par semaine face cam (iPhone suffit), on livre le reste.
          </p>
          <div class="cv-scen-deliv">
            <h4>Ce qu'on livre chaque mois</h4>
            <ul>
              <li><b>4 vidéos longues</b> (10-18 min) montées Premiere Pro</li>
              <li><b>16 shorts / reels / TikToks</b> dérivés</li>
              <li>Scripts rédigés à partir d'interview Claude</li>
              <li>Thumbnails A/B testées</li>
              <li>Optimisation VidIQ + GA4 mensuelle</li>
              <li>Publication directe depuis votre chaîne</li>
            </ul>
          </div>
        </div>
        <aside class="cv-scen-aside">
          <div class="cv-scen-price">
            <div class="cv-scen-price-amount">3 500 <span>€ / mois</span></div>
            <span class="cv-scen-price-note">HT · ENGAGEMENT 6 MOIS</span>
          </div>
          <div class="cv-scen-meta">
            <div class="cv-scen-meta-row"><span class="k">Cadence</span><span class="v">1 longue + 4 shorts / semaine</span></div>
            <div class="cv-scen-meta-row"><span class="k">Votre temps</span><span class="v">1 h de tournage / semaine</span></div>
            <div class="cv-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 2 semaines</span></div>
            <div class="cv-scen-meta-row"><span class="k">Option voix IA</span><span class="v">+600 € / mois (clone vôtre)</span></div>
          </div>
          <a href="#contact" class="btn btn-accent cv-scen-cta">
            Discuter de ce pack
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </aside>
      </div>
    </div>

    <!-- PANEL MOTION -->
    <div class="cv-scen-panel" data-panel="motion" role="tabpanel" aria-hidden="true" hidden>
      <div class="cv-scen-cols">
        <div class="cv-scen-col-main">
          <div class="cv-scen-kind">POUR QUI</div>
          <h3>Marque ou SaaS qui a besoin<br>d'un <em>langage visuel fort</em>.</h3>
          <p>
            Explainer produit, teaser de lancement, motion de fiche, intégrations natives web (Rive, Lottie). On construit un <b>design system vidéo</b> qui traverse site, ads, pitch deck, emails.
          </p>
          <div class="cv-scen-deliv">
            <h4>Ce qu'on livre chaque mois</h4>
            <ul>
              <li><b>1 vidéo brand hero</b> (30-60s) par mois</li>
              <li><b>3 motion courts</b> (15s) pour site / ads</li>
              <li><b>5 animations Rive / Lottie</b> natives web</li>
              <li>Design system vidéo (typo, lower thirds, transitions)</li>
              <li>Déclinaisons 16:9 / 1:1 / 9:16 natives</li>
              <li>Fichiers After Effects sources livrés</li>
            </ul>
          </div>
        </div>
        <aside class="cv-scen-aside">
          <div class="cv-scen-price">
            <div class="cv-scen-price-amount">4 500 <span>€ / mois</span></div>
            <span class="cv-scen-price-note">HT · ENGAGEMENT 6 MOIS</span>
          </div>
          <div class="cv-scen-meta">
            <div class="cv-scen-meta-row"><span class="k">Cadence</span><span class="v">1 hero + 3 courts + 5 natives / mois</span></div>
            <div class="cv-scen-meta-row"><span class="k">Votre temps</span><span class="v">1 validation / semaine</span></div>
            <div class="cv-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 2 à 3 semaines</span></div>
            <div class="cv-scen-meta-row"><span class="k">Design system</span><span class="v">Livré à J+30, évolue ensuite</span></div>
          </div>
          <a href="#contact" class="btn btn-accent cv-scen-cta">
            Discuter de ce pack
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </aside>
      </div>
    </div>

    <!-- PANEL RETAINER -->
    <div class="cv-scen-panel" data-panel="retainer" role="tabpanel" aria-hidden="true" hidden>
      <div class="cv-scen-cols">
        <div class="cv-scen-col-main">
          <div class="cv-scen-kind">POUR QUI</div>
          <h3>Équipe growth / marque DTC<br>qui a besoin de <em>volume mensuel</em>.</h3>
          <p>
            Vous êtes <b>une marque DTC ou un SaaS en scale</b> et vous avez besoin de contenu chaque semaine pour nourrir Meta Ads, Reels, TikTok, LinkedIn, la newsletter, le site. On monte un pipeline industriel, sans jamais sacrifier la DA.
          </p>
          <div class="cv-scen-deliv">
            <h4>Ce qu'on livre chaque mois</h4>
            <ul>
              <li><b>12 ads payantes</b> (Meta / TikTok / Google) scroll-stopper</li>
              <li><b>8 UGC</b> briefés et montés</li>
              <li><b>4 motion courts</b> (feature, testimonial, bundle)</li>
              <li><b>2 vidéos produit</b> e-com (PDP + Amazon / Shopify)</li>
              <li>Dashboard mensuel CTR / CPM / ROAS</li>
              <li>Bibliothèque partagée + accès rushs</li>
            </ul>
          </div>
        </div>
        <aside class="cv-scen-aside">
          <div class="cv-scen-price">
            <div class="cv-scen-price-amount">6 900 <span>€ / mois</span></div>
            <span class="cv-scen-price-note">HT · ENGAGEMENT 6 MOIS</span>
          </div>
          <div class="cv-scen-meta">
            <div class="cv-scen-meta-row"><span class="k">Cadence</span><span class="v">~25 livrables / mois</span></div>
            <div class="cv-scen-meta-row"><span class="k">Votre temps</span><span class="v">Brief mensuel 1 h</span></div>
            <div class="cv-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 3 à 4 semaines</span></div>
            <div class="cv-scen-meta-row"><span class="k">Localisation</span><span class="v">FR / EN / DE incluses</span></div>
          </div>
          <a href="#contact" class="btn btn-accent cv-scen-cta">
            Discuter de ce pack
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </aside>
      </div>
    </div>

  </div>
</section>
`;
