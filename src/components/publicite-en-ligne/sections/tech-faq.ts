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
        Huit points à trancher avec les profils techniques et juridiques avant d'implémenter
        une mesure publicitaire. Les réponses finales dépendent de votre architecture et du devis.
      </div>
    </div>

    <div class="ads-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Où est hébergé le conteneur GTM Server ? C'est chez vous ou chez nous ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Le devis précise le compte propriétaire, le sous-domaine, l'hébergeur, la région,
          les accès et la réversibilité. Stape, GCP ou AWS ne sont que des options&nbsp;:
          aucune architecture ni localisation n'est présumée avant le cadrage.
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
          selon les règles de la plateforme. Les tests de déduplication et les diagnostics
          sont consignés dans la recette&nbsp;; aucun score de correspondance n'est garanti.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Consent Mode v2 — comment vous gérez le "denied" et les modeled conversions ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Le mode Basic ou Advanced est choisi avec le responsable de traitement et son conseil.
          Un refus est respecté&nbsp;: aucun identifiant publicitaire n'est envoyé comme si le consentement
          avait été donné. La modélisation éventuelle relève de Google et ne garantit aucun volume récupéré.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Quelles données traversent votre stack ? Le DPO va nous demander.
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Le plan de données inventorie chaque champ, finalité, destinataire, durée et mesure de sécurité.
          Un hachage SHA-256 ne rend pas automatiquement une donnée anonyme. Le responsable de traitement
          valide la base légale, le consentement, les sous-traitants, les transferts et la durée de conservation.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous branchez notre CRM ? On a HubSpot / Salesforce / custom.
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Nous vérifions d'abord les API, webhooks, identifiants de rapprochement, limites et droits disponibles.
          HubSpot, Salesforce, Pipedrive, Zoho ou un CRM sur mesure peuvent nécessiter un connecteur,
          du développement ou rester partiellement incompatibles&nbsp;: le diagnostic le dit avant le devis.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Monitoring — on est prévenus comment si le tracking casse ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          La fréquence des contrôles, les destinations, le seuil d'alerte, le canal, la conservation des logs,
          les responsabilités et le délai cible de correction sont précisés dans le devis.
          Sans cet engagement écrit, aucune surveillance continue ni intervention immédiate n'est promise.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          C'est quoi exactement "Enhanced Match" côté Meta ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Meta utilise les paramètres autorisés reçus via CAPI pour tenter de rapprocher un événement.
          Nous minimisons les champs et n'envoyons que ceux validés dans le plan de données.
          Le score dépend de la qualité des données, du consentement et de la plateforme&nbsp;: il n'est pas garanti.
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
          quoi corriger et quoi reprendre. Une remise éventuelle sur une mission ultérieure ne s'applique
          que si elle figure explicitement dans le devis signé.
        </div>
      </div>
    </div>
  </div>
</section>
`;
