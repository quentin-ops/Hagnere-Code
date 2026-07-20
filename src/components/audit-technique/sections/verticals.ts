export const verticalsHtml = `
<!-- VERTICALS AUDIT · 6 secteurs où notre méthodologie est affûtée -->
<section class="at-verticals">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour qui on audite le mieux</div>
        <h2>Six verticales où notre méthode<br>est la plus affûtée.</h2>
      </div>
      <div class="right">
        Pas parce qu'on refuse les autres, mais parce qu'on a <b>outillé notre grille pour ces 6 profils</b>&nbsp;:
        on connaît leurs architectures typiques, leurs dimensions critiques,
        et le vocabulaire pour parler à leurs VC / acquéreurs / clients enterprise.
      </div>
    </div>

    <div class="at-vt-grid">
      <!-- 01 SaaS B2B -->
      <div class="at-vt-card reveal">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
          <span class="at-vt-tag at-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>SaaS B2B mature</h3>
        <p>Exemple de contexte à auditer&nbsp;: application existante, utilisateurs actifs, facturation récurrente, multi-tenant ou SSO. Les dimensions retenues peuvent inclure l'isolation des données, les cas limites de facturation et la préparation à un référentiel de sécurité.</p>
        <div class="at-vt-feats">
          <span>Multi-tenant</span>
          <span>Billing edge-cases</span>
          <span>SOC2-ready</span>
        </div>
      </div>

      <!-- 02 E-commerce DTC -->
      <div class="at-vt-card reveal reveal-d-1">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg></div>
          <span class="at-vt-tag at-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>E-commerce DTC &amp; custom</h3>
        <p>Checkout custom, tunnel optimisé CVR, pics saisonniers (BFCM). Dimensions critiques auditées&nbsp;: <b>PCI-DSS à jour, tunnel de paiement monitoré, scaling pré-Black Friday anticipé, idempotency sur les webhooks Stripe</b>.</p>
        <div class="at-vt-feats">
          <span>PCI-DSS</span>
          <span>Scaling BFCM</span>
          <span>Webhook idempotency</span>
        </div>
      </div>

      <!-- 03 Marketplace -->
      <div class="at-vt-card reveal reveal-d-2">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M9 6h6M8 8l3 7M16 8l-3 7"/></svg></div>
          <span class="at-vt-tag at-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>Marketplace 2-sided</h3>
        <p>Supply + demand sur une même plateforme. Dimensions critiques auditées&nbsp;: <b>attribution cross-side, anti-fraude, escrow &amp; payout splits, compliance TRACFIN</b>. Ces zones sont souvent les plus dettues dans les marketplaces scale-up.</p>
        <div class="at-vt-feats">
          <span>Attribution 2-sided</span>
          <span>Escrow &amp; splits</span>
          <span>TRACFIN compliance</span>
        </div>
      </div>

      <!-- 04 Edtech -->
      <div class="at-vt-card reveal">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10l10-6 10 6-10 6L2 10z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5M22 10v6"/></svg></div>
          <span class="at-vt-tag">● Courant</span>
        </div>
        <h3>Edtech &amp; formation</h3>
        <p>SaaS B2B2C (écoles, OPCO, CPF). Dimensions critiques auditées&nbsp;: <b>accessibilité RGAA / WCAG 2.2, analytics apprenant, compliance Qualiopi, volumes de vidéos &amp; storage coûts</b>. Les edtech sont souvent fortes en UX mais faibles en FinOps.</p>
        <div class="at-vt-feats">
          <span>RGAA / WCAG 2.2</span>
          <span>Qualiopi</span>
          <span>Storage FinOps</span>
        </div>
      </div>

      <!-- 05 HealthTech régulé -->
      <div class="at-vt-card reveal reveal-d-1">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
          <span class="at-vt-tag at-vt-tag-hot">● Régulé</span>
        </div>
        <h3>HealthTech régulée</h3>
        <p>Données de santé, MedTech, télémédecine. Le cadrage peut couvrir <b>l'applicabilité de l'hébergement HDS, le chiffrement, la pseudonymisation, la journalisation des accès et les exigences RGPD</b>. Leur applicabilité doit être validée avec vos responsables juridiques, votre DPO et, lorsqu'une certification est visée, les organismes compétents&nbsp;: cette prestation ne délivre pas de certification HDS.</p>
        <div class="at-vt-feats">
          <span>HDS à vérifier</span>
          <span>Pseudonymisation</span>
          <span>Audit logs renforcés</span>
        </div>
      </div>

      <!-- 06 Fintech régulée -->
      <div class="at-vt-card reveal reveal-d-2">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
          <span class="at-vt-tag at-vt-tag-hot">● Régulé</span>
        </div>
        <h3>Fintech régulée</h3>
        <p>EMI, agent PSP, paiements, crédit, compta-as-a-service. Dimensions critiques auditées&nbsp;: <b>DSP2, KYC, AML, obligations ACPR, immuabilité des logs financiers, reconciliation cross-systems</b>. Audit préparatoire pour agrément ou certification partenaire.</p>
        <div class="at-vt-feats">
          <span>DSP2 · ACPR</span>
          <span>KYC · AML</span>
          <span>Logs immuables</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
