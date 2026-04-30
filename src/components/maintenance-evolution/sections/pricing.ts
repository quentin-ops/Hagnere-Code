export const pricingHtml = `
<!-- PRICING M&E · 3 tiers + audit -->
<section class="pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Forfaits TMA</div>
        <h2>Un audit pour commencer,<br>trois rythmes pour tenir.</h2>
      </div>
      <div class="right">
        Tout est inclus dans le forfait&nbsp;: monitoring, sécurité, deploys, patches, reporting, astreinte (selon tier).
        <b>Aucun rebilling.</b> Cloud et licences SaaS tierces à votre nom. Engagement 3 à 6 mois, puis mensuel.
      </div>
    </div>

    <div class="price-grid">
      <!-- AUDIT FLASH -->
      <div class="plan reveal">
        <div class="plan-tag">PORTE D'ENTRÉE</div>
        <h4>Audit flash</h4>
        <div class="plan-sub">5 jours d'audit code + infra + sécurité + dette. Rapport 15-25 pages + plan de remédiation priorisé 12 mois. Livré en visio 1h30.</div>
        <div class="plan-price">
          <span class="amount">2 000 €</span>
          <span class="per">HT · one-shot</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit code + dépendances + CVE</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit infra + backups + DR</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Plan de remédiation 12 mois chiffré</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Check-list sécurité SOC2-ready</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Restitution 1h30 en visio</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg><b>Déduit du 1er mois si TMA</b></li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Réserver l'audit</a></div>
      </div>

      <!-- ESSENTIEL -->
      <div class="plan reveal reveal-d-1">
        <div class="plan-tag">ESSENTIEL · RUN</div>
        <h4>Essentiel</h4>
        <div class="plan-sub">App stable, peu d'évolutions, PME 10-30 salariés. On tient la prod, on patche, on évolue au rythme de vos besoins métier.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">forfait mensuel</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>1-2 j/mois d'intervention dev</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Monitoring Sentry + Better Stack 24/7</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Patches sécurité mensuels + CVE &lt; 48 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Support Slack HO · &lt; 24 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA uptime 99,5 %</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Rapport mensuel · rollover 30 %</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement 3 mois min.</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Cadrer mon forfait</a></div>
      </div>

      <!-- SCALE (featured) -->
      <div class="plan featured reveal reveal-d-2">
        <div class="plan-badge">LE PLUS CHOISI</div>
        <div class="plan-tag">SCALE · ÉVOLUTION</div>
        <h4>Scale</h4>
        <div class="plan-sub">Scale-up 30-150 salariés, SaaS en croissance. Équipe dédiée 2 pers., sprint mensuel d'évolutions, astreinte 7j/7.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">forfait mensuel</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>4-6 j/mois · 2 devs nommés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Stack obs complète + Grafana Cloud</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Astreinte 7j/7 PagerDuty · MTTR &lt; 30 min</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Support Slack prioritaire · &lt; 2 h HO</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA uptime 99,9 %</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap trimestrielle + comité mensuel</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Scan Snyk + pentest annuel sur option</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement 6 mois min.</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer le scale</a></div>
      </div>

      <!-- PREMIUM -->
      <div class="plan reveal reveal-d-3">
        <div class="plan-tag">PREMIUM · PARTNER</div>
        <h4>Premium</h4>
        <div class="plan-sub">ETI &amp; scale-up série B+, éditeurs B2B avec clients grands comptes. Équipe dédiée 3-4 pers., SLA 99,95 %, compliance SOC2/ISO27001-ready.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">forfait mensuel</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>12-16 j/mois · équipe 3-4 pers. + PO</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Astreinte 24/7 · MTTR &lt; 1 h P1</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA uptime 99,95 % + pénalités chiffrées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Pentest annuel + audit sécurité trim.</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>RPO 15 min · RTO 1 h testés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SOC2-ready + DPA + NDA + ISO27001-ready</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>2 slots max en parallèle · sélectif</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement 12 mois min.</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parler au gérant</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:44px;color:var(--mute);font-size:14px">
      <b style="color:var(--ink)">Tous les forfaits incluent</b> : Sentry · Better Stack · statuspage publique · Dependabot · Renovate · GitGuardian · Linear · Slack Connect · comptes au nom du client · <b style="color:var(--ink)">rollover 30 % des jours non consommés</b> sur 3 mois.
    </p>
  </div>
</section>
`;
