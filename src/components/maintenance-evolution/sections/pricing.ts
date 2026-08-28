export const pricingHtml = `
<!-- PRICING M&E · porte d'entrée + 3 forfaits Care (mêmes noms que la grille /tarifs) -->
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
        <h3>Audit flash</h3>
        <div class="plan-sub">Audit du code, de l'infrastructure, de la sécurité et de la dette. Durée, profondeur, format du rapport, horizon du plan et restitution sont confirmés au devis.</div>
        <div class="plan-price">
          <span class="amount">2 000 €</span>
          <span class="per">HT · one-shot</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit code + dépendances + CVE</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit infra + backups + DR</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Plan de remédiation priorisé et chiffré</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Check-list sécurité adaptée au référentiel visé</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Restitution selon le format convenu</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Remise éventuelle uniquement si écrite au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Demander l'audit</a></div>
      </div>

      <!-- CARE -->
      <div class="plan reveal reveal-d-1">
        <div class="plan-tag">CARE · RUN</div>
        <h3>Care</h3>
        <div class="plan-sub">App stable, peu d'évolutions, PME 10-30 salariés. On tient la prod, on patche, on évolue au rythme de vos besoins métier.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">HT · forfait mensuel</span>
        </div>
        <p class="plan-hint">Repère indicatif&nbsp;: <b>≈ 2 500 € HT / mois</b> sur un scénario-type publié plus haut. Le forfait est fixé au devis.</p>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>1-2 j/mois d'intervention dev</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Monitoring et couverture précisés au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Priorités de sécurité définies au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Canal et délai cible de support cadrés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Objectifs de disponibilité selon la stack</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Reporting et règles de consommation écrits</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Durée d'engagement au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Cadrer mon forfait</a></div>
      </div>

      <!-- CARE+ (featured) -->
      <div class="plan featured reveal reveal-d-2">
        <div class="plan-badge">ÉVOLUTIONS RÉGULIÈRES</div>
        <div class="plan-tag">CARE+ · ÉVOLUTION</div>
        <h3>Care+</h3>
        <div class="plan-sub">Scale-up ou SaaS en croissance. Capacité, rythme d'évolution et éventuelle astreinte sont dimensionnés dans le devis.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">HT · forfait mensuel</span>
        </div>
        <p class="plan-hint">Repère indicatif&nbsp;: <b>≈ 3 500 € HT / mois</b> sur un scénario-type publié plus haut. Le forfait est fixé au devis.</p>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Capacité mensuelle et intervenants précisés au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Stack obs complète + Grafana Cloud</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Astreinte optionnelle et chiffrée</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Support prioritaire selon horaires convenus</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Niveau de service mesuré au contrat</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap trimestrielle + comité mensuel</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Scan Snyk + pentest annuel sur option</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement défini au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Cadrer Care+</a></div>
      </div>

      <!-- CARE PRO -->
      <div class="plan reveal reveal-d-3">
        <div class="plan-tag">CARE PRO · PARTNER</div>
        <h3>Care Pro</h3>
        <div class="plan-sub">Dispositif renforcé pour applications critiques&nbsp;: équipe, couverture, reprise et accompagnement sécurité configurés sur mesure.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">HT · forfait mensuel</span>
        </div>
        <p class="plan-hint">Repère indicatif&nbsp;: <b>≈ 14 000 € HT / mois</b> sur un scénario-type publié plus haut. Le forfait est fixé au devis.</p>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Capacité renforcée&nbsp;: jours/mois et intervenants nommés au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Couverture d'astreinte à dimensionner</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA et conséquences contractuelles sur mesure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit offensif par tiers qualifié si requis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>RPO/RTO cibles selon infrastructure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Appui technique à votre DPO ou auditeur</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Capacité confirmée avant signature</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement défini au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parler au fondateur</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:44px;color:var(--mute);font-size:14px">
      <b style="color:var(--ink)">Les trois montants mensuels sont des repères indicatifs</b>, hors taxes&nbsp;: ce sont les ordres de grandeur
      des scénarios-types publiés plus haut sur cette page. Le forfait réel est fixé au devis, en fonction du volume, de la criticité et de la couverture retenue.
    </p>
    <p style="text-align:center;margin-top:14px;color:var(--mute);font-size:14px">
      <b style="color:var(--ink)">À confirmer dans chaque devis</b> : outils de supervision, dépendances, sécurité, suivi, canaux de support, comptes au nom du client et règles de consommation.
    </p>
    <p style="text-align:center;margin-top:14px;color:var(--mute);font-size:14px">
      Care, Care+ et Care Pro sont les mêmes forfaits que ceux publiés sur la
      <a href="/tarifs">grille tarifaire</a>. L'audit flash est la porte d'entrée payante propre à ce service&nbsp;:
      il ne remplace pas le Discovery Sprint d'un projet de développement, et une éventuelle déduction
      n'existe que si elle est écrite au devis.
    </p>
  </div>
</section>
`;
