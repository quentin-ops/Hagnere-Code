export const verticalsHtml = `
<!-- VERTICALS M&E — 6 secteurs -->
<section class="me-verticals">
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

    <div class="me-vt-grid">
      <!-- 01 SaaS B2B mature -->
      <div class="me-vt-card reveal">
        <div class="me-vt-head">
          <div class="me-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
          <span class="me-vt-tag me-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>SaaS B2B mature</h3>
        <p>Application multi-tenant en production avec facturation récurrente et besoin d'évolutions continues. Le diagnostic vérifie la charge, la sécurité, les dépendances et la capacité réellement nécessaire.</p>
        <div class="me-vt-feats">
          <span>Multi-tenant</span>
          <span>Billing Stripe</span>
          <span>SSO enterprise</span>
        </div>
      </div>

      <!-- 02 E-commerce / marketplace -->
      <div class="me-vt-card reveal reveal-d-1">
        <div class="me-vt-head">
          <div class="me-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg></div>
          <span class="me-vt-tag me-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>E-commerce custom &amp; marketplaces</h3>
        <p>Checkout custom, PCI-DSS à jour, pics saisonniers (BFCM, soldes). <b>Uptime contractuel élevé</b>, scaling pré-Black Friday anticipé, monitoring tunnel paiement end-to-end.</p>
        <div class="me-vt-feats">
          <span>PCI-DSS</span>
          <span>Scaling BFCM</span>
          <span>Tunnel monitoré</span>
        </div>
      </div>

      <!-- 03 Scale-up post-levée -->
      <div class="me-vt-card reveal reveal-d-2">
        <div class="me-vt-head">
          <div class="me-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg></div>
          <span class="me-vt-tag me-vt-tag-live">● Cœur de cible</span>
        </div>
        <h3>Scale-up post-levée série A/B</h3>
        <p>Vous venez de lever, le CTO arrive, vous avez besoin d'une équipe de run qui <b>décharge vos devs internes</b> des features périphériques + maintenance pendant qu'ils bossent sur le core.</p>
        <div class="me-vt-feats">
          <span>Binôme CTO</span>
          <span>Features périphériques</span>
          <span>Complément équipe</span>
        </div>
      </div>

      <!-- 04 Outils internes / apps métier -->
      <div class="me-vt-card reveal">
        <div class="me-vt-head">
          <div class="me-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 9h6v6H9z"/></svg></div>
          <span class="me-vt-tag">● Courant</span>
        </div>
        <h3>Outils internes &amp; apps métier</h3>
        <p>Back-office B2B, CRM maison, ERP custom ou application de gestion interne. Les règles métier, les habilitations, les intégrations et la criticité opérationnelle déterminent le dispositif.</p>
        <div class="me-vt-feats">
          <span>Règles métier</span>
          <span>Back-office</span>
          <span>SAML entreprise</span>
        </div>
      </div>

      <!-- 05 Secteurs réglementés -->
      <div class="me-vt-card reveal reveal-d-1">
        <div class="me-vt-head">
          <div class="me-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
          <span class="me-vt-tag">● Courant</span>
        </div>
        <h3>Secteurs réglementés</h3>
        <p>Banque, assurance, santé, juridique ou données sensibles. <b>Le référentiel, les rôles RGPD, le DPA, les sous-traitants et les preuves attendues doivent être cadrés avec votre conseil ou votre DPO</b>.</p>
        <div class="me-vt-feats">
          <span>Référentiel cadré</span>
          <span>Audit logs</span>
          <span>DPA au périmètre</span>
        </div>
      </div>

      <!-- 06 Legacy à moderniser -->
      <div class="me-vt-card reveal reveal-d-2">
        <div class="me-vt-head">
          <div class="me-vt-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 4 4 4-6"/></svg></div>
          <span class="me-vt-tag me-vt-tag-hot">● Remédiation</span>
        </div>
        <h3>Legacy à maintenir avant refonte</h3>
        <p>Stack vieillissante, versions parfois non supportées et équipe historique partie. Un <b>plan de remédiation progressive</b> peut préparer la refonte&nbsp;: correctifs, refactorisations ciblées et modernisation incrémentale.</p>
        <div class="me-vt-feats">
          <span>Plan remédiation</span>
          <span>Refactos ciblés</span>
          <span>Pré-refonte</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
