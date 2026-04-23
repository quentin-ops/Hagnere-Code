export const pricingHtml = `
<!-- PRICING · 4 cards : cadrage / DPO mensuel x2 / sprint dev -->
<section class="sr-pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Forfaits &amp; tarifs</div>
        <h2>Forfait, abonnement<br>ou sprint, <em>prix affiché</em>.</h2>
      </div>
      <div class="right">
        Quatre options. Le <b>cadrage</b> en forfait fixe pour démarrer. Deux niveaux de <b>DPO mensuel</b>
        selon votre taille. Et la <b>remédiation codée</b> à la demande quand on doit corriger dans le repo.
        Pas de "sur devis" déguisé.
      </div>
    </div>

    <div class="sr-price-grid">

      <div class="sr-price-card reveal">
        <div class="sr-price-tag">PHASE 01</div>
        <h4>Cadrage initial</h4>
        <div class="sr-price-sub">Cartographie, gap analysis, audit applicatif, plan d'action chiffré. Sans engagement de suite.</div>
        <div class="sr-price-amount">5 000 <span>€ HT</span></div>
        <ul class="sr-price-feats">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Cartographie sous-traitants</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Gap RGPD / AI Act / NIS2</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit applicatif boîte grise</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Plan d'action chiffré</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Restitution 90 min visio</li>
        </ul>
        <div class="sr-price-cta"><a href="#contact" class="btn btn-ghost">Démarrer un cadrage</a></div>
        <div class="sr-price-note">déduit à 100 % du DPO mensuel si signature sous 60 j</div>
      </div>

      <div class="sr-price-card reveal reveal-d-1">
        <div class="sr-price-tag">DPO · 01</div>
        <h4>DPO Starter</h4>
        <div class="sr-price-sub">Pour PME tech 10-100 salariés, 1-3 systèmes IA, peu de transferts hors UE.</div>
        <div class="sr-price-amount">1 200 <span>€ / mois</span></div>
        <ul class="sr-price-feats">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Désignation officielle CNIL</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Revue mensuelle 1 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>1 AIPD / an</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Veille AI Act / NIS2</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA 8 h ouvrées</li>
        </ul>
        <div class="sr-price-cta"><a href="#contact" class="btn btn-ghost">Demander un devis</a></div>
        <div class="sr-price-note">engagement 12 mois</div>
      </div>

      <div class="sr-price-card sr-price-card-featured reveal reveal-d-2">
        <div class="sr-price-badge">LE PLUS CHOISI</div>
        <div class="sr-price-tag">DPO · 02</div>
        <h4>DPO Scale</h4>
        <div class="sr-price-sub">Pour scale-ups 100-500 salariés, plusieurs systèmes IA haut risque, transferts internationaux fréquents.</div>
        <div class="sr-price-amount">3 500 <span>€ / mois</span></div>
        <ul class="sr-price-feats">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tout DPO Starter, +</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Revues bi-mensuelles 1 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Revues features IA illimitées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>4 AIPD / an</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Slack dédié, SLA 4 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Support contrôle CNIL inclus</li>
        </ul>
        <div class="sr-price-cta"><a href="#contact" class="btn btn-accent">Démarrer ce pack</a></div>
        <div class="sr-price-note">engagement 12 mois · le plus pris en série A/B</div>
      </div>

      <div class="sr-price-card reveal reveal-d-3">
        <div class="sr-price-tag">REMÉDIATION</div>
        <h4>Sprint dev codé</h4>
        <div class="sr-price-sub">Quand le rapport pointe une faille (chiffrement, IAM, consent, anonymisation), nos devs codent la correction directement dans votre repo.</div>
        <div class="sr-price-amount">3-15 <span>k€ / lot</span></div>
        <ul class="sr-price-feats">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Forfait par lot cadré au planning</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>PR ouvertes sur votre Git</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tests de non-régression</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Pair-prog avec vos devs</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Ré-audit gratuit en fin</li>
        </ul>
        <div class="sr-price-cta"><a href="#contact" class="btn btn-ghost">Cadrer un sprint</a></div>
        <div class="sr-price-note">potentiellement éligible CIR sur la part R&amp;D · à valider avec votre expert-comptable</div>
      </div>

    </div>

    <p class="sr-price-foot">
      Tous les forfaits incluent : <b>RC Pro DPO Hiscox 2 M€ · DPO certifié AFNOR · CIPP/E in-house · membre AFCDP · SMSI aligné ISO 27001</b>. TVA en sus. Prix valables 30 jours.
    </p>
  </div>
</section>
`;
