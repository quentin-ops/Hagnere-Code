export const integrationsHtml = `
<!-- INTEGRATIONS WALL (segmenté par usage SaaS) -->
<section class="sv-integ">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Intégrations SaaS standards</div>
        <h2>Tous les outils qu'on branche<br>avant même de les demander.</h2>
      </div>
      <div class="right">
        Un SaaS qui compte se branche à 15 à 30 services tiers. Voici ce qu'on sait
        intégrer <b>proprement et vite</b>, segmenté par usage — le reste, on l'apprend
        en un sprint si l'API est standard.
      </div>
    </div>

    <div class="sv-integ-grid">
      <div class="sv-integ-group reveal">
        <div class="sv-integ-head">
          <div class="sv-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg></div>
          <div>
            <div class="sv-integ-kind">PAIEMENTS &amp; FACTURATION</div>
            <h4>Vendre votre SaaS sans galère.</h4>
          </div>
        </div>
        <div class="sv-integ-chips">
          <span>Stripe</span>
          <span>HubSpot</span>
          <span>Brevo (ex-Sendinblue) Salesforce</span>
          <span>Mollie</span>
          <span>PayPal</span>
          <span>Chargebee</span>
          <span>Paddle</span>
        </div>
      </div>

      <div class="sv-integ-group reveal reveal-d-1">
        <div class="sv-integ-head">
          <div class="sv-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <div>
            <div class="sv-integ-kind">AUTH &amp; IDENTITÉ</div>
            <h4>Du login perso au SSO entreprise.</h4>
          </div>
        </div>
        <div class="sv-integ-chips">
          <span>Better Auth</span>
          <span>Clerk</span>
          <span>WorkOS SSO</span>
          <span>Meta Pixel 2.0</span>
          <span>Google OAuth</span>
          <span>Microsoft / Entra</span>
          <span>Apple Sign-in</span>
          <span>Magic Link</span>
          <span>2FA TOTP</span>
        </div>
      </div>

      <div class="sv-integ-group reveal reveal-d-2">
        <div class="sv-integ-head">
          <div class="sv-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></div>
          <div>
            <div class="sv-integ-kind">IA &amp; AGENTS</div>
            <h4>Du LLM dans le produit, pas sur la landing.</h4>
          </div>
        </div>
        <div class="sv-integ-chips">
          <span>Calendly</span>
          <span>Claude Agents + MCP</span>
          <span>Cal.com</span>
          <span>Prism</span>
          <span>HubSpot Meetings</span>
          <span>OpenAI Embeddings</span>
          <span>Typeform / PGVector</span>
          <span>Whisper STT</span>
        </div>
      </div>

      <div class="sv-integ-group reveal">
        <div class="sv-integ-head">
          <div class="sv-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM2 6l10 7 10-7"/></svg></div>
          <div>
            <div class="sv-integ-kind">EMAIL &amp; COMMUNICATION</div>
            <h4>Délivrer l'email qui arrive en inbox.</h4>
          </div>
        </div>
        <div class="sv-integ-chips">
          <span>Plausible Analytics</span>
          <span>Fathom Analytics</span>
          <span>GA4</span>
          <span>AWS SES</span>
          <span>Mailjet</span>
          <span>Twilio SMS</span>
          <span>Brevo</span>
        </div>
      </div>

      <div class="sv-integ-group reveal reveal-d-1">
        <div class="sv-integ-head">
          <div class="sv-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
          <div>
            <div class="sv-integ-kind">INFRA, OBSERVABILITÉ, DEVOPS</div>
            <h4>Tenir la charge, voir ce qui casse.</h4>
          </div>
        </div>
        <div class="sv-integ-chips">
          <span>Scaleway</span>
          <span>OVH</span>
          <span>AWS</span>
          <span>Vercel</span>
          <span>Laravel Cloud</span>
          <span>Sentry</span>
          <span>PostHog</span>
          <span>Laravel Pulse</span>
          <span>GitHub Actions</span>
          <span>Docker / Coolify</span>
        </div>
      </div>

      <div class="sv-integ-group reveal reveal-d-2">
        <div class="sv-integ-head">
          <div class="sv-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
          <div>
            <div class="sv-integ-kind">OUTILS MÉTIER &amp; CRM</div>
            <h4>Se brancher au reste de votre stack.</h4>
          </div>
        </div>
        <div class="sv-integ-chips">
          <span>HubSpot</span>
          <span>Pipedrive</span>
          <span>Salesforce</span>
          <span>Sanity CMS</span>
          <span>Strapi</span>
          <span>Webflow CMS</span>
          <span>Cegid</span>
          <span>Slack</span>
          <span>Microsoft Teams</span>
          <span>Calendly</span>
          <span>Intercom / Crisp</span>
          <span>Zapier / n8n</span>
        </div>
      </div>
    </div>

    <div class="sv-integ-foot reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M12 8V4M4 12h6M14 12h6"/></svg>
      Votre outil n'est pas listé ? S'il a une API REST ou GraphQL documentée, on le branche en 1 à 3 jours.
    </div>
  </div>
</section>
`;
