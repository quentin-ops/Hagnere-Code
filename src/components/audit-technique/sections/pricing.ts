export const pricingHtml = `
<!-- PRICING AUDIT · 4 tiers + 5 extras chiffrés à l'avance -->
<section class="pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Tarifs publics · fixes</div>
        <h2>Quatre formats d'audit,<br>prix fixe publié.<br>Extras chiffrés à l'avance.</h2>
      </div>
      <div class="right">
        Ces montants sont des bases HT. Après cadrage, le devis confirme les dimensions, l'équipe, le calendrier,
        les livrables, les critères d'acceptation et les éventuelles options. Seul le contrat signé fait foi.
      </div>
    </div>

    <div class="price-grid">
      <!-- EXPRESS -->
      <div class="plan reveal">
        <div class="plan-tag">EXPRESS · URGENCE</div>
        <h4>Express</h4>
        <div class="plan-sub">Post-incident, pré-décision urgente, 2e avis rapide. 3-5 jours · 1 senior · livrable Notion + Loom 15 min. Sans deck board-ready.</div>
        <div class="plan-price">
          <span class="amount">8 000 €</span>
          <span class="per">HT · fixe · one-shot</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>3 à 5 j · 1 senior dédié</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>4 à 5 dimensions couvertes</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livrable Notion + Loom 15 min</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tech Debt P&amp;L simplifié</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Démarrage sous 3 j ouvrés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Éventuelle remise indiquée au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Cadrer l'Express</a></div>
      </div>

      <!-- STANDARD (featured) -->
      <div class="plan featured reveal reveal-d-1">
        <div class="plan-badge">LE PLUS CHOISI</div>
        <div class="plan-tag">STANDARD · 10 J</div>
        <h4>Standard</h4>
        <div class="plan-sub">Le format complet&nbsp;: 8 dimensions couvertes, rapport board-ready, Tech Debt P&amp;L, deck 12-18 slides. Baseline CTO, pré-levée, SOC2-gap, go/no-go.</div>
        <div class="plan-price">
          <span class="amount">18 000 €</span>
          <span class="per">HT · fixe · one-shot</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>10 j ouvrés · 2 seniors + un lead</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg><b>8 dimensions couvertes · scoring /100</b></li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tech Debt P&amp;L chiffré en euros</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Deck 12-18 slides board-ready</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Version board-safe anonymisée</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Backlog Notion 20-30 tickets chiffrés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>5-8 entretiens équipe no-blame</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Positionnement vs référentiels publics</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap 6/12/18 mois · 3 scenarios</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Conditions commerciales au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Cadrer le Standard</a></div>
      </div>

      <!-- DEEP -->
      <div class="plan reveal reveal-d-2">
        <div class="plan-tag">DEEP · REFONTE / LEVÉE</div>
        <h4>Deep</h4>
        <div class="plan-sub">Pour les décisions &gt; 500 k€&nbsp;: go/no-go refonte, Série B côté vendeur, gros gap SOC2. 15-20 jours · 3 seniors + architecte + lead.</div>
        <div class="plan-price">
          <span class="amount">38 000 €</span>
          <span class="per">HT · fixe · one-shot</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>15 à 20 j · 3 seniors + architecte + lead</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tout inclus dans Standard &nbsp;·&nbsp; plus&nbsp;:</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Rapport 60-80 p. (vs. 40-70)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>3 scenarios chiffrés sur 3 ans</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Restitution trilatérale CEO + CTO + CFO</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Dashboard comparatif opex vs capex</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Version data-room contrôlée (levée)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Démarrage sous 5 j ouvrés</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Cadrer le Deep</a></div>
      </div>

      <!-- TECH DD M&A -->
      <div class="plan reveal reveal-d-3">
        <div class="plan-tag">TECH DD · M&amp;A</div>
        <h4>Tech DD M&amp;A</h4>
        <div class="plan-sub">Pour les acquéreurs&nbsp;: DD avant rachat scale-up. 20-30 jours · 4 pers. dédiées + lead · coordination avocats.</div>
        <div class="plan-price">
          <span class="amount">68 000 €</span>
          <span class="per">HT · fixe · one-shot</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>20 à 30 j · 4 pers. dédiées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tout inclus dans Deep &nbsp;·&nbsp; plus&nbsp;:</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Rapport format M&amp;A 80-120 p.</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Analyse licences OSS · IP · copyright</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Liste deal-breakers flaggés go/no-go</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Coordination avocats M&amp;A · clauses garantie</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Restitution comité investissement</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>NDA renforcé · attorney-client privilege</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Démarrage sous 3 j ouvrés</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parler à un expert</a></div>
      </div>
    </div>

    <!-- Extras chiffrés à l'avance -->
    <div class="at-pricing-extras reveal" style="margin-top:56px">
      <div class="at-pricing-extras-head">
        <div class="eyebrow">— Extras chiffrés à l'avance</div>
        <h3 style="margin:12px 0 14px">Cinq options récurrentes,<br>toutes au prix fixe publié.</h3>
        <p style="color:var(--mute);max-width:640px;margin:0 0 28px">
          Chaque extra est chiffré <b style="color:var(--ink)">dans le devis initial</b>, pas facturé en avenant surprise.
          Vous choisissez de les activer ou non au cadrage. Aucun ajout en cours d'audit sans votre accord écrit.
        </p>
      </div>

      <div class="at-pricing-extras-grid">
        <div class="at-pricing-extra">
          <div class="at-pricing-extra-ic">🔐</div>
          <div class="at-pricing-extra-body">
            <div class="at-pricing-extra-title">Pentest externe indépendant</div>
            <div class="at-pricing-extra-price">+ 8 000 à 15 000 € HT</div>
            <div class="at-pricing-extra-sub">Prestataire qualifié PASSI à sélectionner si le cahier des charges l'exige · périmètre et prix au devis</div>
          </div>
        </div>

        <div class="at-pricing-extra">
          <div class="at-pricing-extra-ic">🔁</div>
          <div class="at-pricing-extra-body">
            <div class="at-pricing-extra-title">Retest post-remédiation 60-90 j</div>
            <div class="at-pricing-extra-price">+ 30 % du prix initial</div>
            <div class="at-pricing-extra-sub">Vérifie l'implémentation des recos P1/P2 · livrable "après / avant" chiffré</div>
          </div>
        </div>

        <div class="at-pricing-extra">
          <div class="at-pricing-extra-ic">👤</div>
          <div class="at-pricing-extra-body">
            <div class="at-pricing-extra-title">Shadow CTO · 1 mois post-audit</div>
            <div class="at-pricing-extra-price">+ 8 000 à 15 000 € HT</div>
            <div class="at-pricing-extra-sub">Un senior embarque votre équipe 4 semaines pour implémenter les recos P1 sans dérapage</div>
          </div>
        </div>

        <div class="at-pricing-extra">
          <div class="at-pricing-extra-ic">📋</div>
          <div class="at-pricing-extra-body">
            <div class="at-pricing-extra-title">Restitution board physique · demi-journée</div>
            <div class="at-pricing-extra-price">+ 1 500 à 3 000 € HT</div>
            <div class="at-pricing-extra-sub">Paris / Lyon / Chambéry · Quentin + auditeur lead présentent au CA en direct</div>
          </div>
        </div>

        <div class="at-pricing-extra">
          <div class="at-pricing-extra-ic">☁️</div>
          <div class="at-pricing-extra-body">
            <div class="at-pricing-extra-title">FinOps deep-dive cloud</div>
            <div class="at-pricing-extra-price">+ 4 000 à 8 000 € HT</div>
            <div class="at-pricing-extra-sub">Analyse AWS/GCP/OVH selon périmètre · pistes chiffrées à partir de vos factures et métriques</div>
          </div>
        </div>

        <div class="at-pricing-extra">
          <div class="at-pricing-extra-ic">🤖</div>
          <div class="at-pricing-extra-body">
            <div class="at-pricing-extra-title">Couche IA / LLM</div>
            <div class="at-pricing-extra-price">+ 3 000 à 6 000 € HT</div>
            <div class="at-pricing-extra-sub">Si app utilise Claude / GPT / Gemini · audit prompts, coûts tokens, hallucination, AI Act</div>
          </div>
        </div>
      </div>
    </div>

    <p style="text-align:center;margin-top:44px;color:var(--mute);font-size:14px">
      <b style="color:var(--ink)">Le devis précise</b> : confidentialité, accès, équipe, outils, livrables, critères d'acceptation, délais et options. Le transfert des livrables spécifiques intervient selon les CGV après paiement complet.
    </p>
  </div>
</section>
`;
