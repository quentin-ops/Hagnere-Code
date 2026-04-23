export const scenariosHtml = `
<!-- SCÉNARIOS ADS — 4 tabs interactifs -->
<section class="ads-scenarios" data-active="cleanup">
  <div class="ads-scen-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Quel scénario vous correspond ?</div>
        <h2>Quatre situations,<br>quatre plans d'action.</h2>
      </div>
      <div class="right">
        La plupart des missions Ads qu'on signe entrent dans un de ces quatre scénarios.
        <b>Cliquez sur le vôtre</b>&nbsp;: les livrables, le budget media typique et le rythme changent.
      </div>
    </div>

    <div class="ads-scen-tabs reveal" role="tablist">
      <button type="button" class="ads-scen-tab is-active" data-scenario="cleanup" role="tab" aria-selected="true">
        <div class="ads-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/></svg>
        </div>
        <div class="ads-scen-tab-body">
          <div class="ads-scen-tab-top">
            <span class="ads-scen-tab-k">Scénario 01</span>
            <span class="ads-scen-tab-d">3–6 mois</span>
          </div>
          <div class="ads-scen-tab-t">Compte qui fuit, CAC qui explose</div>
          <div class="ads-scen-tab-sub">« On spend 15-40 k€/mois, on ne sait plus ce qui convertit »</div>
        </div>
        <div class="ads-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="ads-scen-tab" data-scenario="agency" role="tab" aria-selected="false">
        <div class="ads-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        </div>
        <div class="ads-scen-tab-body">
          <div class="ads-scen-tab-top">
            <span class="ads-scen-tab-k">Scénario 02</span>
            <span class="ads-scen-tab-d">2 mois · transition</span>
          </div>
          <div class="ads-scen-tab-t">Sortir d'une agence au %</div>
          <div class="ads-scen-tab-sub">« Mon agence me facture 15 %, on pousse toujours plus le budget »</div>
        </div>
        <div class="ads-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="ads-scen-tab" data-scenario="launch" role="tab" aria-selected="false">
        <div class="ads-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
        </div>
        <div class="ads-scen-tab-body">
          <div class="ads-scen-tab-top">
            <span class="ads-scen-tab-k">Scénario 03</span>
            <span class="ads-scen-tab-d">Sprint 15 j</span>
          </div>
          <div class="ads-scen-tab-t">Lancement produit / levée</div>
          <div class="ads-scen-tab-sub">« Deadline dans 2 semaines, tout est à faire »</div>
        </div>
        <div class="ads-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>

      <button type="button" class="ads-scen-tab" data-scenario="multichannel" role="tab" aria-selected="false">
        <div class="ads-scen-tab-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h6M9 18h6M6 9v6M18 9v6"/></svg>
        </div>
        <div class="ads-scen-tab-body">
          <div class="ads-scen-tab-top">
            <span class="ads-scen-tab-k">Scénario 04</span>
            <span class="ads-scen-tab-d">6–9 mois</span>
          </div>
          <div class="ads-scen-tab-t">Ouvrir de nouveaux canaux</div>
          <div class="ads-scen-tab-sub">« Google Ads tient, je veux ouvrir Meta / TikTok / LinkedIn »</div>
        </div>
        <div class="ads-scen-tab-chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></div>
      </button>
    </div>

    <!-- PANEL cleanup -->
    <div class="ads-scen-panel is-active" data-panel="cleanup">
      <div class="ads-scen-cols">
        <div class="ads-scen-main">
          <div class="ads-scen-kind">Restructuration · Compte mature qui dérive</div>
          <h3>« On spend 15-40 k€/mois, le CAC a triplé, on ne sait plus ce qui convertit. »</h3>
          <p class="ads-scen-lead">
            Compte Google Ads / Meta historique, tracking client-side cassé depuis iOS 14,
            PMax qui cannibalise la brand, trop de campagnes empilées par plusieurs prestataires successifs.
            On remet à plat&nbsp;: tracking server-side, structuration propre, exclusions, bid strategies calibrées.
            <b>Le CAC baisse pendant qu'on reprend le contrôle.</b>
          </p>
          <div class="ads-scen-items-title">CE QU'ON LIVRE</div>
          <div class="ads-scen-items">
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Audit comptes + mesure du signal perdu</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Tracking server-side déployé (GTM SS + CAPI + EC)</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Restructuration comptes sans interruption</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>PMax dompté, exclusions brand, scripts monitor</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Dashboard Looker CRM × Ads × margin</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Pilotage hebdo + reporting mensuel business</div>
          </div>
        </div>
        <aside class="ads-scen-aside">
          <div class="ads-scen-aside-head">
            <span class="ads-scen-aside-kind">Forfait mensuel</span>
            <div class="ads-scen-aside-price">2 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="ads-scen-meta">
            <div class="ads-scen-meta-row"><dt>Budget media client</dt><dd>15–40 k€ / mois</dd></div>
            <div class="ads-scen-meta-row"><dt>Durée recommandée</dt><dd>3 à 6 mois, puis maintenance</dd></div>
            <div class="ads-scen-meta-row"><dt>Équipe</dt><dd>Consultant senior + tracking lead</dd></div>
            <div class="ads-scen-meta-row"><dt>Premier effet</dt><dd>CAC en baisse à 4–8 semaines</dd></div>
            <div class="ads-scen-meta-row"><dt>Démarrage</dt><dd>Audit 1 500 € (déductible)</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg ads-scen-cta">
            Cadrer l'audit
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ads-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Comptes et assets restent chez vous
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL agency -->
    <div class="ads-scen-panel" data-panel="agency" hidden>
      <div class="ads-scen-cols">
        <div class="ads-scen-main">
          <div class="ads-scen-kind">Transition · Sortie d'agence au %</div>
          <h3>« Mon agence me facture 15 % du spend, elle pousse toujours plus le budget. »</h3>
          <p class="ads-scen-lead">
            Le biais est structurel&nbsp;: une agence rémunérée au pourcentage du media
            a <b>intérêt à ce que vous dépensiez plus</b>, pas à ce que votre CAC baisse.
            On prend la suite en forfait fixe mensuel, on audite les 12 derniers mois,
            on récupère les comptes, les pixels, les audiences, les creatives.
            Transition sans coupure.
          </p>
          <div class="ads-scen-items-title">CE QU'ON LIVRE</div>
          <div class="ads-scen-items">
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Audit 12 mois + décompte du spend gaspillé</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Prise de contrôle comptes (MCC, BM, accès)</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Récupération creatives, audiences, pixels, data</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Passage forfait fixe (aligné sur votre CAC)</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Tracking server-side + Looker Studio transparent</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Transition sans coupure de campagne</div>
          </div>
        </div>
        <aside class="ads-scen-aside">
          <div class="ads-scen-aside-head">
            <span class="ads-scen-aside-kind">Forfait fixe</span>
            <div class="ads-scen-aside-price">2 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="ads-scen-meta">
            <div class="ads-scen-meta-row"><dt>Budget media client</dt><dd>20–80 k€ / mois</dd></div>
            <div class="ads-scen-meta-row"><dt>Transition</dt><dd>2 semaines · sans coupure</dd></div>
            <div class="ads-scen-meta-row"><dt>Économie typique</dt><dd>5 à 15 k€ / mois vs ancienne facture %</dd></div>
            <div class="ads-scen-meta-row"><dt>Engagement</dt><dd>3 mois puis mois par mois</dd></div>
            <div class="ads-scen-meta-row"><dt>Démarrage</dt><dd>Audit 1 500 € (déductible)</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg ads-scen-cta">
            Organiser la transition
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ads-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            NDA + confidentialité totale vis-à-vis de l'ancienne agence
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL launch -->
    <div class="ads-scen-panel" data-panel="launch" hidden>
      <div class="ads-scen-cols">
        <div class="ads-scen-main">
          <div class="ads-scen-kind">Sprint · Lancement produit ou levée de fonds</div>
          <h3>« Deadline dans 2 semaines, tout est à faire&nbsp;: comptes, tracking, creatives, landing. »</h3>
          <p class="ads-scen-lead">
            Levée, salon, lancement produit, saisonnalité forte. Vous avez besoin d'un
            <b>setup complet opérationnel en 15 jours</b>&nbsp;: pas 2 trimestres d'alignement.
            Sprint clé en main, ressources dédiées full-time, livraison jalonnée J+7 / J+15.
            On vise la traction démontrable à la deadline.
          </p>
          <div class="ads-scen-items-title">CE QU'ON LIVRE</div>
          <div class="ads-scen-items">
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Comptes MCC, BM, LinkedIn créés &amp; vérifiés</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Tracking server-side minimal fonctionnel</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Landing pages dédiées (Webflow / Framer)</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>4–6 creatives brand + 6 creatives performance</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Campagnes brand + performance lancées J+15</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Point quotidien pendant le sprint + daily report</div>
          </div>
        </div>
        <aside class="ads-scen-aside ads-scen-aside-hot">
          <div class="ads-scen-aside-head">
            <span class="ads-scen-aside-kind">Sprint 15 jours</span>
            <div class="ads-scen-aside-price">9 800 <span>€ HT forfait</span></div>
          </div>
          <dl class="ads-scen-meta">
            <div class="ads-scen-meta-row"><dt>Budget media client</dt><dd>10–50 k€ sur la période</dd></div>
            <div class="ads-scen-meta-row"><dt>Durée</dt><dd>15 jours ouvrés · full-time</dd></div>
            <div class="ads-scen-meta-row"><dt>Équipe</dt><dd>3 pers. full-time + tracking lead</dd></div>
            <div class="ads-scen-meta-row"><dt>Résultat</dt><dd>Traction démontrable à J+15</dd></div>
            <div class="ads-scen-meta-row"><dt>Suite</dt><dd>Forfait mensuel si continuité</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg ads-scen-cta">
            Bloquer un sprint
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ads-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            1 slot par mois · réservation 3 semaines à l'avance
          </div>
        </aside>
      </div>
    </div>

    <!-- PANEL multichannel -->
    <div class="ads-scen-panel" data-panel="multichannel" hidden>
      <div class="ads-scen-cols">
        <div class="ads-scen-main">
          <div class="ads-scen-kind">Expansion · Nouveaux canaux d'acquisition</div>
          <h3>« Google Ads tient, je veux ouvrir Meta / TikTok / LinkedIn sans cramer. »</h3>
          <p class="ads-scen-lead">
            Vous avez un canal qui rapporte (souvent Google Search ou LinkedIn), vous voulez
            diversifier. La tentation&nbsp;: lancer partout en même temps avec des petits budgets.
            <b>On fait l'inverse</b>&nbsp;: priorisation par ICP, un canal à la fois, budget de test
            significatif, tracking propre, puis on scale ce qui marche.
          </p>
          <div class="ads-scen-items-title">CE QU'ON LIVRE</div>
          <div class="ads-scen-items">
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Priorisation canaux selon ICP &amp; funnel</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Budget test calibré (pas 500 € saupoudrés)</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Ouverture 1 canal / 6-8 semaines, go/no-go clair</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Creatives adaptées (TikTok ≠ LinkedIn ≠ Meta)</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Attribution multi-touch via Looker Studio</div>
            <div class="ads-scen-item"><span class="ads-scen-item-ic"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg></span>Scaling progressif des canaux validés</div>
          </div>
        </div>
        <aside class="ads-scen-aside">
          <div class="ads-scen-aside-head">
            <span class="ads-scen-aside-kind">Forfait mensuel</span>
            <div class="ads-scen-aside-price">4 500 <span>€ HT / mois</span></div>
          </div>
          <dl class="ads-scen-meta">
            <div class="ads-scen-meta-row"><dt>Budget media client</dt><dd>30–120 k€ / mois</dd></div>
            <div class="ads-scen-meta-row"><dt>Durée</dt><dd>6 à 9 mois</dd></div>
            <div class="ads-scen-meta-row"><dt>Équipe</dt><dd>Consultant senior + 1 media buyer + creative</dd></div>
            <div class="ads-scen-meta-row"><dt>Méthode</dt><dd>Test → validation → scale, un canal à la fois</dd></div>
            <div class="ads-scen-meta-row"><dt>Engagement</dt><dd>3 mois puis mois par mois</dd></div>
          </dl>
          <a href="#contact" class="btn btn-accent btn-lg ads-scen-cta">
            Parler à un associé
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ads-scen-aside-foot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4zM9 12l2 2 4-4"/></svg>
            Scaling pragmatique · on coupe ce qui ne rapporte pas
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
