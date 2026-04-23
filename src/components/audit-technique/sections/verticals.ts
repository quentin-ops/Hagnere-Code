export const verticalsHtml = `
<!-- VERTICALS M&E — 6 secteurs -->
<section class="at-verticals">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour qui on tient la prod</div>
        <h2>Six profils où notre TMA<br>fait la différence dans la durée.</h2>
      </div>
      <div class="right">
        Pas parce qu'on refuse les autres, mais parce qu'on a <b>affûté notre approche</b>
        sur ces profils — on connaît leurs contraintes métier, leurs pics saisonniers,
        leurs exigences compliance.
      </div>
    </div>

    <div class="at-vt-grid">
      <!-- 01 SaaS B2B mature -->
      <div class="at-vt-card reveal">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
          <span class="at-vt-tag at-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>SaaS B2B mature</h3>
        <p>App en prod depuis 2-6 ans, 1 000-50 000 MAU, facturation récurrente Stripe, multi-tenant. <b>Notre sweet spot</b>&nbsp;: évolutions continues + sécurité + scaling modéré, sans dramatique.</p>
        <div class="at-vt-feats">
          <span>Multi-tenant</span>
          <span>Billing Stripe</span>
          <span>SSO enterprise</span>
        </div>
      </div>

      <!-- 02 E-commerce / marketplace -->
      <div class="at-vt-card reveal reveal-d-1">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg></div>
          <span class="at-vt-tag at-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>E-commerce custom &amp; marketplaces</h3>
        <p>Checkout custom, PCI-DSS à jour, pics saisonniers (BFCM, soldes). <b>Uptime contractuel élevé</b>, scaling pré-Black Friday anticipé, monitoring tunnel paiement end-to-end.</p>
        <div class="at-vt-feats">
          <span>PCI-DSS</span>
          <span>Scaling BFCM</span>
          <span>Tunnel monitoré</span>
        </div>
      </div>

      <!-- 03 Scale-up post-levée -->
      <div class="at-vt-card reveal reveal-d-2">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg></div>
          <span class="at-vt-tag at-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>Scale-up post-levée série A/B</h3>
        <p>Vous venez de lever, le CTO arrive, vous avez besoin d'une équipe de run qui <b>décharge vos devs internes</b> des features périphériques + maintenance pendant qu'ils bossent sur le core.</p>
        <div class="at-vt-feats">
          <span>Binôme CTO</span>
          <span>Features périphériques</span>
          <span>Complément équipe</span>
        </div>
      </div>

      <!-- 04 Outils internes / apps métier -->
      <div class="at-vt-card reveal">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 9h6v6H9z"/></svg></div>
          <span class="at-vt-tag">● Courant</span>
        </div>
        <h3>Outils internes &amp; apps métier</h3>
        <p>Back-office B2B, CRM maison, ERP custom, app de gestion interne. Utilisateurs&nbsp;: vos 20-300 salariés. Peu de sécurité publique, beaucoup de règles métier. <b>Évolutions dictées par l'opérationnel terrain</b>.</p>
        <div class="at-vt-feats">
          <span>Règles métier</span>
          <span>Back-office</span>
          <span>SAML entreprise</span>
        </div>
      </div>

      <!-- 05 Secteurs réglementés -->
      <div class="at-vt-card reveal reveal-d-1">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
          <span class="at-vt-tag">● Courant</span>
        </div>
        <h3>Secteurs réglementés</h3>
        <p>Banque, assurance, santé, juridique, data sensible. <b>RGPD renforcé, SOC2-ready, ISO27001-ready, DPO, DPA avec sous-traitants documentés</b>. Logs chiffrés, accès traçés, revue sécurité trimestrielle.</p>
        <div class="at-vt-feats">
          <span>SOC2-ready</span>
          <span>Audit logs</span>
          <span>DPA complet</span>
        </div>
      </div>

      <!-- 06 Legacy à moderniser -->
      <div class="at-vt-card reveal reveal-d-2">
        <div class="at-vt-head">
          <div class="at-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 4 4 4-6"/></svg></div>
          <span class="at-vt-tag at-vt-tag-hot">● Remédiation</span>
        </div>
        <h3>Legacy à faire vivre 3-5 ans</h3>
        <p>App 6-10 ans, devs partis, stack vieillie (Laravel 7, Symfony 4, PHP 7.4). Vous avez besoin d'un <b>plan de remédiation progressive</b> avant refonte complète&nbsp;: patchs, refactos ciblés, modernisation incrementale.</p>
        <div class="at-vt-feats">
          <span>Plan remédiation</span>
          <span>Refactos ciblés</span>
          <span>Pré-refonte</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
