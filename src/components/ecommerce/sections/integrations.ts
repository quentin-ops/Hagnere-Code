export const integrationsHtml = `
<!-- INTEGRATIONS WALL (e-commerce FR segmenté) -->
<section class="ec-integ">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Écosystème e-commerce FR</div>
        <h2>Les intégrations à inventorier<br>avant de chiffrer.</h2>
      </div>
      <div class="right">
        Cette liste illustre les familles d'outils rencontrées en France. Une intégration n'est jamais présumée :
        accès, documentation, volumes, limites, homologation et coût sont vérifiés avant d'entrer au devis.
      </div>
    </div>

    <div class="ec-integ-grid">
      <div class="ec-integ-group reveal">
        <div class="ec-integ-head">
          <div class="ec-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg></div>
          <div>
            <div class="ec-integ-kind">PAIEMENT CB &amp; WALLETS</div>
            <h4>Encaisser simplement, 3DS2 compris.</h4>
          </div>
        </div>
        <div class="ec-integ-chips">
          <span>Stripe</span>
          <span>Mollie</span>
          <span>SystemPay</span>
          <span>PayZen (Lyra)</span>
          <span>HiPay</span>
          <span>Adyen</span>
          <span>Monetico CM</span>
          <span>Apple Pay</span>
          <span>Google Pay</span>
          <span>PayPal</span>
          <span>Amazon Pay</span>
        </div>
      </div>

      <div class="ec-integ-group reveal reveal-d-1">
        <div class="ec-integ-head">
          <div class="ec-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></div>
          <div>
            <div class="ec-integ-kind">PAIEMENT FRACTIONNÉ BNPL</div>
            <h4>Augmenter le panier moyen FR.</h4>
          </div>
        </div>
        <div class="ec-integ-chips">
          <span>Alma</span>
          <span>Oney (BNPP)</span>
          <span>FLOA Pay</span>
          <span>Klarna</span>
          <span>Scalapay</span>
          <span>Cofidis Pay</span>
          <span>Younited Pay</span>
        </div>
      </div>

      <div class="ec-integ-group reveal reveal-d-2">
        <div class="ec-integ-head">
          <div class="ec-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="10" rx="1"/><path d="M7 17v2M17 17v2M1 13h22"/></svg></div>
          <div>
            <div class="ec-integ-kind">TRANSPORT &amp; LIVRAISON</div>
            <h4>Étiquettes + tracking + retours.</h4>
          </div>
        </div>
        <div class="ec-integ-chips">
          <span>Colissimo</span>
          <span>Chronopost</span>
          <span>Mondial Relay</span>
          <span>DPD France</span>
          <span>Relais Colis</span>
          <span>Colis Privé</span>
          <span>UPS France</span>
          <span>TNT / FedEx</span>
          <span>Geodis</span>
          <span>Sendcloud</span>
          <span>Shipup</span>
          <span>Boxtal</span>
        </div>
      </div>

      <div class="ec-integ-group reveal">
        <div class="ec-integ-head">
          <div class="ec-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg></div>
          <div>
            <div class="ec-integ-kind">FACTURATION ÉLECTRONIQUE 2026</div>
            <h4>Factur-X, B2G et Plateformes Agréées.</h4>
          </div>
        </div>
        <div class="ec-integ-chips">
          <span>Factur-X</span>
          <span>Chorus Pro (B2G)</span>
          <span>Pennylane (PA)</span>
          <span>Docaposte (PA)</span>
          <span>Generix (PA)</span>
          <span>Tenor (PA)</span>
          <span>UBL 2.1</span>
          <span>Cegid e-Invoicing</span>
          <span>Sage e-Invoicing</span>
        </div>
      </div>

      <div class="ec-integ-group reveal reveal-d-1">
        <div class="ec-integ-head">
          <div class="ec-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
          <div>
            <div class="ec-integ-kind">ERP &amp; COMPTA FR</div>
            <h4>Des flux comptables à définir et rapprocher.</h4>
          </div>
        </div>
        <div class="ec-integ-chips">
          <span>Sage 100c</span>
          <span>Sage X3</span>
          <span>Cegid Loop</span>
          <span>Cegid XRP Flex</span>
          <span>EBP</span>
          <span>Ciel</span>
          <span>Pennylane</span>
          <span>Axonaut</span>
          <span>Sellsy</span>
          <span>Isacompta</span>
          <span>Chift (unified)</span>
        </div>
      </div>

      <div class="ec-integ-group reveal reveal-d-2">
        <div class="ec-integ-head">
          <div class="ec-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></div>
          <div>
            <div class="ec-integ-kind">MARKETPLACES</div>
            <h4>Un catalogue, N canaux.</h4>
          </div>
        </div>
        <div class="ec-integ-chips">
          <span>Amazon SP-API</span>
          <span>CDiscount Pro</span>
          <span>ManoMano</span>
          <span>Fnac / Darty</span>
          <span>Rakuten FR</span>
          <span>eBay FR</span>
          <span>LeBonCoin Pro</span>
          <span>Lengow</span>
          <span>ShoppingFeed</span>
          <span>Iziflux</span>
        </div>
      </div>

      <div class="ec-integ-group reveal">
        <div class="ec-integ-head">
          <div class="ec-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM2 6l10 7 10-7"/></svg></div>
          <div>
            <div class="ec-integ-kind">EMAIL · CRM · MARKETING</div>
            <h4>Retention et acquisition.</h4>
          </div>
        </div>
        <div class="ec-integ-chips">
          <span>Klaviyo</span>
          <span>Brevo (Sendinblue)</span>
          <span>HubSpot</span>
          <span>ActiveCampaign</span>
          <span>Mailchimp</span>
          <span>Postmark</span>
          <span>Resend</span>
          <span>AWS SES</span>
          <span>Twilio SMS</span>
        </div>
      </div>

      <div class="ec-integ-group reveal reveal-d-1">
        <div class="ec-integ-head">
          <div class="ec-integ-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 9l-5 5-3-3-4 4"/></svg></div>
          <div>
            <div class="ec-integ-kind">TRACKING · AVIS · RECHERCHE</div>
            <h4>Piloter ce qui convertit.</h4>
          </div>
        </div>
        <div class="ec-integ-chips">
          <span>GA4 server-side</span>
          <span>Meta CAPI</span>
          <span>Google Ads CAPI</span>
          <span>TikTok Events API</span>
          <span>Matomo</span>
          <span>Piano Analytics</span>
          <span>PostHog</span>
          <span>Axeptio / Didomi CMP</span>
          <span>Avis Vérifiés (Skeepers)</span>
          <span>Trustpilot</span>
          <span>Trusted Shops</span>
          <span>Algolia</span>
          <span>Meilisearch</span>
        </div>
      </div>
    </div>

    <div class="ec-integ-foot reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M12 8V4M4 12h6M14 12h6"/></svg>
      Votre outil n'est pas listé ? Nous vérifions la documentation, les accès de test, les quotas, le sens des flux
      et les contraintes contractuelles avant de donner un délai. Une API disponible ne garantit ni la faisabilité ni une intégration courte.
    </div>
  </div>
</section>
`;
