export const securityHtml = `
<!-- SÉCURITÉ & CONFORMITÉ DSI -->
<section class="oi-security">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Pensé pour passer le filtre DSI / RSSI</div>
        <h2 style="margin-top:14px">Sécurité &amp; conformité,<br>de série.</h2>
      </div>
      <div class="right">
        Un outil interne touche vos données sensibles (RH, commercial, finance, opérationnel).
        On applique <b>par défaut</b> les exigences qu'un RSSI ETI demande : SSO entreprise,
        permissions fines, audit trail, hébergement France, RGPD by design. Vous n'avez pas
        à négocier ces cases en avenant.
      </div>
    </div>

    <div class="oi-sec-grid">
      <div class="oi-sec-card reveal">
        <div class="oi-sec-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"/></svg>
        </div>
        <h3>SSO Active Directory / Azure AD / Okta</h3>
        <p>
          Connexion automatique depuis votre annuaire d'entreprise via <b>SAML 2.0 ou OIDC</b>.
          Vos équipes n'ont aucun mot de passe nouveau à retenir. Provisioning / deprovisioning
          automatique via SCIM pour les arrivées / départs.
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
          Chaque action utilisateur est <b>horodatée</b> : qui, quoi, quand, ancienne valeur, nouvelle
          valeur. Exigence DAF pour les litiges et les contrôles internes (SAPIN II, SOX si groupe coté).
          Exports CSV/JSON pour les audits externes.
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
          DPA signé, registre des traitements à jour, gestion des droits (accès, rectification,
          suppression), sous-traitants documentés, consentements et finalités tracés.
          Données <b>hébergées en France</b> (Scaleway Paris / OVH Roubaix) par défaut.
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
          Selon votre exigence souveraineté : <b>(1) Cloud mutualisé Hagnéré</b> (Scaleway FR, le
          plus rapide) ; <b>(2) Cloud client dédié</b> (AWS, Azure, OVH privé, sur votre compte) ;
          <b>(3) On-premise</b> dans votre datacenter, image Docker livrée.
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
          <b>AES-256 at-rest</b>, <b>TLS 1.3 in-transit</b>, secrets dans un coffre chiffré (Vault / AWS KMS).
          Sauvegardes PostgreSQL toutes les 15 min + snapshots hebdo conservés 1 an, stockés
          sur un <b>second provider</b> (règle 3-2-1). RTO 2 h, RPO 15 min documentés.
        </p>
        <div class="oi-sec-tags">
          <span>AES-256</span><span>TLS 1.3</span><span>Backups 15 min</span><span>RTO 2h</span>
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
