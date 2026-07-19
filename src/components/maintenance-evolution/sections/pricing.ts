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
        Ces formats sont des bases de cadrage. <b>Le devis confirme</b> le volume, les outils, la couverture,
        les délais cibles, l'engagement et les licences tierces restant à votre charge.
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
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Remise éventuelle uniquement si écrite au devis</li>
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
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Priorités de sécurité définies au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Canal et délai cible de support cadrés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Objectifs de disponibilité selon la stack</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Reporting et règles de consommation écrits</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Durée d'engagement au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Cadrer mon forfait</a></div>
      </div>

      <!-- SCALE (featured) -->
      <div class="plan featured reveal reveal-d-2">
        <div class="plan-badge">ÉVOLUTIONS RÉGULIÈRES</div>
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
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Astreinte optionnelle et chiffrée</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Support prioritaire selon horaires convenus</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Niveau de service mesuré au contrat</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap trimestrielle + comité mensuel</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Scan Snyk + pentest annuel sur option</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement défini au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer le scale</a></div>
      </div>

      <!-- PREMIUM -->
      <div class="plan reveal reveal-d-3">
        <div class="plan-tag">PREMIUM · PARTNER</div>
        <h4>Premium</h4>
        <div class="plan-sub">Dispositif renforcé pour applications critiques&nbsp;: équipe, couverture, reprise et accompagnement sécurité configurés sur mesure.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">forfait mensuel</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>12-16 j/mois · équipe 3-4 pers. + PO</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Couverture d'astreinte à dimensionner</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA et conséquences contractuelles sur mesure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit offensif par tiers qualifié si requis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>RPO/RTO cibles selon infrastructure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Appui technique à votre DPO ou auditeur</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Capacité confirmée avant signature</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement défini au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parler au gérant</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:44px;color:var(--mute);font-size:14px">
      <b style="color:var(--ink)">À confirmer dans chaque devis</b> : outils de supervision, dépendances, sécurité, suivi, canaux de support, comptes au nom du client et règles de consommation.
    </p>
  </div>
</section>
`;
