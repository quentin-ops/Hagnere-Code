export const techFaqHtml = `
<!-- TECH FAQ ADS — pour CTO / DPO / profils techniques -->
<section class="ads-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions qu'un CTO<br>ou un DPO nous pose en call.</h2>
      </div>
      <div class="right">
        Huit questions techniques qu'on entend systématiquement de la part des CTO, lead devs
        ou DPO qui évaluent notre setup tracking. Réponses directes, sans jargon.
      </div>
    </div>

    <div class="ads-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Où est hébergé le conteneur GTM Server ? C'est chez vous ou chez nous ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Chez vous</b>, sur votre sous-domaine (ex. <code>metrics.votresite.com</code>), via
          <b>Stape.io EU</b> (Frankfurt / Amsterdam). Alternative possible&nbsp;: self-hosté sur votre GCP
          / AWS si vous avez déjà une équipe ops. Dans tous les cas,
          <b>le conteneur est en propriété client</b>&nbsp;: vous gardez les clés, les workspaces, les versions.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous gérez la dedupe entre Meta CAPI et Meta Pixel ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>event_id</b> unique généré côté serveur (UUID v4), propagé au pixel client
          ET à CAPI sur le même event. Meta dédupe sur event_name + event_id + event_time
          dans une fenêtre de 48 h. On vise un <b>Event Match Quality ≥ 8</b> avec email / phone
          / external_id hashés SHA-256. Tests de dedupe visibles dans
          Events Manager → Overlap.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Consent Mode v2 — comment vous gérez le "denied" et les modeled conversions ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          On paramètre <b>Consent Mode v2 "Advanced"</b>&nbsp;: si l'utilisateur refuse,
          on envoie quand même des pings sans cookies (ad_storage=denied, analytics_storage=denied).
          Google fait du modeling statistique pour estimer les conversions non-consentantes
          (typiquement <b>15-25 % de conversions modélisées récupérées</b>). Conforme CNIL,
          validé avec votre bandeau cookies (Didomi, Axeptio, OneTrust compatibles).
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Quelles données traversent votre stack ? Le DPO va nous demander.
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>PII hashées uniquement</b>&nbsp;: email SHA-256, phone SHA-256, external_id, event_id.
          Jamais de PII en clair. <b>Rétention</b>&nbsp;: 30 jours sur Stape, puis purge automatique.
          <b>Sous-traitants documentés</b>&nbsp;: Stape.io (EU), Google (via CAPI), Meta (via CAPI).
          DPA fourni à la signature, registre RGPD mis à jour, base légale = intérêt légitime
          + consentement pour les cookies.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous branchez notre CRM ? On a HubSpot / Salesforce / custom.
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Webhook sortant</b> du CRM vers notre endpoint GTM Server. À chaque changement
          de stage (MQL → SQL → won → lost), on reçoit un POST signé. On dédupe avec event_id
          et on renvoie les signaux qualifiés vers Meta, Google, LinkedIn. <b>HubSpot, Salesforce,
          Pipedrive, Zoho nativement</b>. Les CRM custom&nbsp;: REST API, Zapier, Make ou Workato
          en secours. On n'a jamais eu de CRM qu'on n'a pas su brancher.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Monitoring — on est prévenus comment si le tracking casse ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Healthchecks automatisés</b> toutes les heures sur chaque destination (Meta CAPI,
          Google Enhanced, LinkedIn Conv API, webhook CRM). Si un signal chute &gt; 30 % vs moyenne 7 j,
          <b>alerte Slack + email immédiate</b>. Logs conservés 30 jours pour root-cause analysis.
          En cas de casse non-liée à une release de votre équipe&nbsp;: re-déploiement sous <b>48 h max</b>,
          inclus dans le forfait.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          C'est quoi exactement "Enhanced Match" côté Meta ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Meta croise les PII hashées reçues via CAPI avec son graphe d'utilisateurs pour
          <b>ré-attribuer l'event à une personne</b>. Plus vous envoyez de paramètres (email,
          phone, firstname, city, zip, external_id, IP, user-agent), plus le match est fort.
          Score <b>8/10+</b> = excellent signal pour l'algo. Nos setups visent 8-9/10 de base,
          avec webhook CRM ça monte souvent à 9,5/10.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Est-ce que vous pouvez auditer notre setup avant de signer ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Oui, c'est le forfait Audit à 1 500 €</b>&nbsp;: on regarde votre conteneur GTM,
          votre Meta Events Manager, votre Google Ads Conv. settings, votre LinkedIn Insight Tag,
          votre bandeau Consent, votre CRM webhook. Rapport technique détaillé&nbsp;: quoi garder,
          quoi patcher, quoi refaire. Si vous signez un retainer après, <b>les 1 500 € sont déduits</b>
          à 100 % du premier mois.
        </div>
      </div>
    </div>
  </div>
</section>
`;
