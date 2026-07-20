export const integrationsHtml = `
<!-- INTEGRATIONS ERP/CRM LEGACY FR -->
<section class="oi-integ">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— On parle à votre SI existant</div>
        <h2>Sage, Cegid, Active Directory :<br>on vérifie comment les relier.</h2>
      </div>
      <div class="right">
        Un outil interne sans intégration peut devenir un nouveau silo. On commence par lister les systèmes,
        versions, contrats, API, droits et propriétaires. Les noms ci-dessous sont des <b>candidats à étudier</b>,
        pas une liste de connecteurs déjà certifiés ni une promesse de compatibilité universelle.
      </div>
    </div>

    <div class="oi-integ-grid">
      <div class="oi-integ-group reveal">
        <div class="oi-integ-head">
          <div class="oi-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2h6l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h3z"/><path d="M14 2v6h6M8 12h8M8 16h8M8 20h4"/></svg></div>
          <div>
            <div class="oi-integ-kind">COMPTABILITÉ &amp; ERP FR</div>
            <h4>Là où votre DAF vit.</h4>
          </div>
        </div>
        <div class="oi-integ-chips">
          <span>Sage 100</span>
          <span>Sage X3</span>
          <span>Cegid Loop</span>
          <span>Cegid XRP</span>
          <span>EBP</span>
          <span>Pennylane</span>
          <span>Axonaut</span>
          <span>Sellsy</span>
          <span>Divalto</span>
          <span>Isacompta</span>
        </div>
      </div>

      <div class="oi-integ-group reveal reveal-d-1">
        <div class="oi-integ-head">
          <div class="oi-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
          <div>
            <div class="oi-integ-kind">CRM &amp; COMMERCIAL</div>
            <h4>Là où vos commerciaux bossent.</h4>
          </div>
        </div>
        <div class="oi-integ-chips">
          <span>Salesforce</span>
          <span>HubSpot</span>
          <span>Pipedrive</span>
          <span>Microsoft Dynamics</span>
          <span>Zoho CRM</span>
          <span>Monday</span>
          <span>Teamleader</span>
          <span>Sellsy CRM</span>
        </div>
      </div>

      <div class="oi-integ-group reveal reveal-d-2">
        <div class="oi-integ-head">
          <div class="oi-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <div>
            <div class="oi-integ-kind">IDENTITÉ &amp; SSO ENTREPRISE</div>
            <h4>Là où votre DSI contrôle.</h4>
          </div>
        </div>
        <div class="oi-integ-chips">
          <span>Active Directory</span>
          <span>Azure AD / Entra ID</span>
          <span>Google Workspace</span>
          <span>Okta</span>
          <span>SAML 2.0</span>
          <span>SCIM</span>
          <span>LDAP</span>
          <span>Keycloak</span>
          <span>2FA TOTP</span>
        </div>
      </div>

      <div class="oi-integ-group reveal">
        <div class="oi-integ-head">
          <div class="oi-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg></div>
          <div>
            <div class="oi-integ-kind">GED, SIGNATURE, FACTURATION</div>
            <h4>Les documents qui tournent.</h4>
          </div>
        </div>
        <div class="oi-integ-chips">
          <span>SharePoint</span>
          <span>OneDrive</span>
          <span>Google Drive</span>
          <span>Alfresco</span>
          <span>Nextcloud</span>
          <span>DocuSign</span>
          <span>Yousign</span>
          <span>Chorus Pro (facture publique)</span>
          <span>Factur-X</span>
        </div>
      </div>

      <div class="oi-integ-group reveal reveal-d-1">
        <div class="oi-integ-head">
          <div class="oi-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM2 6l10 7 10-7"/></svg></div>
          <div>
            <div class="oi-integ-kind">COMMUNICATION INTERNE</div>
            <h4>Email, chat, téléphonie.</h4>
          </div>
        </div>
        <div class="oi-integ-chips">
          <span>Microsoft Teams</span>
          <span>Slack</span>
          <span>Outlook / Exchange</span>
          <span>Gmail / Workspace</span>
          <span>Ringover</span>
          <span>Aircall</span>
          <span>Twilio SMS</span>
          <span>Postmark / Resend</span>
        </div>
      </div>

      <div class="oi-integ-group reveal reveal-d-2">
        <div class="oi-integ-head">
          <div class="oi-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg></div>
          <div>
            <div class="oi-integ-kind">BANQUE, PAIEMENTS, OUTILS MÉTIER</div>
            <h4>Le reste de votre stack.</h4>
          </div>
        </div>
        <div class="oi-integ-chips">
          <span>Qonto</span>
          <span>Shine</span>
          <span>BPCE / Crédit Agricole (EBICS)</span>
          <span>SEPA direct debit</span>
          <span>Stripe</span>
          <span>GoCardless</span>
          <span>AS400 (legacy)</span>
          <span>Oracle DB</span>
          <span>Zapier / n8n / Make</span>
        </div>
      </div>
    </div>

    <div class="oi-integ-foot reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M12 8V4M4 12h6M14 12h6"/></svg>
      Votre outil n'est pas listé ? Une étude vérifie la documentation, les droits, les quotas, les formats,
      la sécurité et la reprise sur erreur avant de chiffrer le connecteur.
    </div>
  </div>
</section>
`;
