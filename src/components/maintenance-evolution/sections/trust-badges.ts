export const trustBadgesHtml = `
<!-- TRUST BADGES M&E — 8 engagements contractuels -->
<section class="me-trust">
  <div class="wrap">
    <div class="me-trust-head reveal">
      <div class="eyebrow">— Engagements &amp; garanties</div>
      <h2>Ce qu'on signe<br>avant de commencer.</h2>
      <p>Des promesses écrites dans le devis, pas des slogans de landing. Si l'une n'est pas tenue, vous le voyez et vous nous le reprochez — et <b>les pénalités SLA s'appliquent automatiquement</b>.</p>
    </div>

    <div class="me-trust-grid">
      <div class="me-trust-card reveal">
        <div class="me-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg>
        </div>
        <h4>Équipe nommée dans le contrat</h4>
        <p>Photo, prénom, rôle et LinkedIn des 2 à 4 personnes qui gèrent votre compte. <b>1 remplacement max sur 12 mois</b>, overlap 2 semaines obligatoire en cas de rotation.</p>
        <div class="me-trust-foot">— Clause contractuelle explicite</div>
      </div>

      <div class="me-trust-card reveal reveal-d-1">
        <div class="me-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>
        </div>
        <h4>SLA uptime contractuel avec pénalités</h4>
        <p>99,5 % (Essentiel) · 99,9 % (Scale) · 99,95 % (Premium). Si dépassé, <b>avoir automatique chiffré en CGV</b>, sans discussion. Public sur Statuspage trimestrielle.</p>
        <div class="me-trust-foot">— Pénalités chiffrées en CGV</div>
      </div>

      <div class="me-trust-card reveal reveal-d-2">
        <div class="me-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <h4>100 % de propriété client</h4>
        <p>GitHub org, comptes cloud, DNS, Stripe, Sentry, Better Stack, Linear : <b>tout est à votre nom dès J+1</b>. Aucun lock-in. Passation documentée 5 j offerts si départ.</p>
        <div class="me-trust-foot">— Cession écrite en CGV</div>
      </div>

      <div class="me-trust-card reveal reveal-d-3">
        <div class="me-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        </div>
        <h4>CVE patchés sous 48 h garanti</h4>
        <p>CVSS ≥ 7&nbsp;: hotfix + déploiement + communication documentés sous 48 h ouvrées. <b>Vous êtes prévenus avant que vos clients ne posent la question</b>.</p>
        <div class="me-trust-foot">— Délais contractuels</div>
      </div>

      <div class="me-trust-card reveal">
        <div class="me-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <h4>Rollover 30 % · pas de jour perdu</h4>
        <p>Si vous consommez moins que le forfait un mois, <b>jusqu'à 30 % des jours non utilisés sont reportés</b> sur les 3 mois suivants. Timesheet Linear/Notion visible en temps réel.</p>
        <div class="me-trust-foot">— Clause CGV &amp; rapport mensuel</div>
      </div>

      <div class="me-trust-card reveal reveal-d-1">
        <div class="me-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9 8.5 8.5 0 018.5 8.5z"/></svg>
        </div>
        <h4>Réversibilité 60 j · passation 5 j offerte</h4>
        <p>Préavis 60 jours pour partir. <b>5 jours de passation offerts</b> à votre prestataire suivant&nbsp;: docs + Loom + 1 call + runbooks. <b>Pas de rétention par l'ignorance</b>.</p>
        <div class="me-trust-foot">— Clause réversibilité CGV</div>
      </div>

      <div class="me-trust-card reveal reveal-d-2">
        <div class="me-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h4>RGPD · sous-traitants documentés</h4>
        <p>DPA fourni à la signature, registre RGPD tenu, sous-traitants (Stape, Sentry, Better Stack, OVH, Scaleway) documentés. <b>Base légale + durées de rétention explicites</b>.</p>
        <div class="me-trust-foot">— DPA fourni au kickoff</div>
      </div>

      <div class="me-trust-card reveal reveal-d-3">
        <div class="me-trust-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V15"/></svg>
        </div>
        <h4>Équipe stable · turnover &lt; 10 %</h4>
        <p>Ancienneté moyenne des devs&nbsp;: <b>4 ans</b>. Turnover interne &lt; 10&nbsp;% (vs industrie à 25 %). Nos 3 plus anciens clients sont avec nous depuis 4 ans ou plus.</p>
        <div class="me-trust-foot">— Chiffre vérifiable sur LinkedIn</div>
      </div>
    </div>
  </div>
</section>
`;
