export const securityHtml = `
<!-- SÉCURITÉ & CONFORMITÉ DSI -->
<section class="oi-security">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Pensé pour passer le filtre DSI / RSSI</div>
        <h2 style="margin-top:14px">Sécurité &amp; conformité,<br>cadrées avant de construire.</h2>
      </div>
      <div class="right">
        Un outil interne touche vos données sensibles (RH, commercial, finance, opérationnel).
        Nous partons des risques, des obligations et de votre checklist DSI/RSSI. Le devis précise
        les contrôles retenus, leur périmètre, les preuves attendues et qui les opère&nbsp;: aucune
        certification ni conformité globale n'est déduite d'une simple liste de fonctions.
      </div>
    </div>

    <div class="oi-sec-grid">
      <div class="oi-sec-card reveal">
        <div class="oi-sec-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"/></svg>
        </div>
        <h3>SSO Active Directory / Azure AD / Okta</h3>
        <p>
          SAML, OIDC et SCIM font partie des options étudiées lorsque l'annuaire, le fournisseur
          d'identité et les licences le permettent. Les rôles, le MFA et le cycle de vie des comptes
          sont testés sur votre configuration avant mise en production.
        </p>
        <div class="oi-sec-tags">
          <span>SAML 2.0</span><span>OIDC</span><span>SCIM</span><span>Azure AD</span><span>Okta</span><span>LDAP</span>
        </div>
      </div>

      <div class="oi-sec-card reveal reveal-d-1">
        <div class="oi-sec-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <h3>Permissions RBAC granulaires</h3>
        <p>
          Rôles fins par département, équipe, site ou entité. Visibilité par ressource
          (le commercial voit ses clients, le manager voit son équipe, le DAF voit tout).
          <b>Impersonation</b> pour le support sans partage de mot de passe, tracée dans l'audit log.
        </p>
        <div class="oi-sec-tags">
          <span>Rôles fins</span><span>Multi-entité</span><span>Impersonation</span><span>Audit trail</span>
        </div>
      </div>

      <div class="oi-sec-card reveal reveal-d-2">
        <div class="oi-sec-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>
        </div>
        <h3>Audit trail &amp; traçabilité</h3>
        <p>
          Les événements sensibles à tracer sont définis avec vous&nbsp;: acteur, action, ressource,
          horodatage et, si pertinent, valeurs avant/après. La rétention, l'intégrité et les exports
          dépendent de la finalité et des obligations applicables.
        </p>
        <div class="oi-sec-tags">
          <span>Logs horodatés</span><span>Exports audit</span><span>Non-répudiation</span><span>SAPIN II</span>
        </div>
      </div>

      <div class="oi-sec-card reveal reveal-d-3">
        <div class="oi-sec-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3>RGPD by design</h3>
        <p>
          Nous documentons les flux, sous-traitants et mesures techniques appartenant au périmètre.
          Le DPA, le registre, les fonctions d'exercice des droits, les durées et la localisation sont
          cadrés selon le rôle de chaque partie, avec votre DPO ou conseil pour la validation juridique.
        </p>
        <div class="oi-sec-tags">
          <span>DPA fourni</span><span>Registre traitements</span><span>Droit à l'oubli</span><span>Scaleway / OVH</span>
        </div>
      </div>

      <div class="oi-sec-card reveal">
        <div class="oi-sec-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
        </div>
        <h3>3 options de déploiement</h3>
        <p>
          Plusieurs modèles peuvent être étudiés : environnement opéré, compte cloud du client ou
          déploiement sur son infrastructure. La faisabilité, la responsabilité d'exploitation,
          la localisation et la réversibilité sont écrites dans l'architecture et le devis.
        </p>
        <div class="oi-sec-tags">
          <span>Cloud mutualisé</span><span>Cloud client</span><span>On-premise</span><span>Hybrid</span>
        </div>
      </div>

      <div class="oi-sec-card reveal reveal-d-1">
        <div class="oi-sec-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 12V8H6a2 2 0 010-4h12v4M4 6v12a2 2 0 002 2h14v-4"/><circle cx="16" cy="14" r="2"/></svg>
        </div>
        <h3>Chiffrement &amp; sauvegardes</h3>
        <p>
          Les mécanismes de chiffrement au repos et en transit, la gestion des secrets, les sauvegardes
          et les accès sont choisis selon l'architecture retenue. Les objectifs de reprise ne sont annoncés
          qu'après documentation des dépendances et tests de restauration.
        </p>
        <div class="oi-sec-tags">
          <span>Chiffrement</span><span>Transport sécurisé</span><span>Rétention cadrée</span><span>Reprise testée</span>
        </div>
      </div>
    </div>

    <div class="oi-sec-note reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      Votre RSSI a une checklist ? Envoyez-la nous avant le premier call — on répond point par point avec nos pratiques concrètes.
    </div>
  </div>
</section>
`;
