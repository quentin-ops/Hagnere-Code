export const techFaqHtml = `
<!-- TECH FAQ — pour DSI / RSSI / décideurs techniques -->
<section class="oi-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les DSI / RSSI / lead techs</div>
        <h2>Les questions qu'un DSI<br>doit pouvoir instruire.</h2>
      </div>
      <div class="right">
        Si votre DSI ou votre RSSI est déjà en train de nous auditer en lisant cette page,
        voici huit points techniques à cadrer avant de comparer les solutions.
      </div>
    </div>

    <div class="oi-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-tools-tech-1">
          Quel protocole SSO vous gérez ? SCIM pour le provisioning ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-tools-tech-1" hidden>
          SAML, OIDC et SCIM peuvent être étudiés selon votre fournisseur d'identité, ses licences et
          ses capacités. Le devis précise le protocole, le mapping des rôles, le MFA, le provisioning,
          le traitement des erreurs et les tests de départ d'un collaborateur.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-tools-tech-2">
          Hébergement : options de souveraineté et de résidence des données ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-tools-tech-2" hidden>
          Environnement opéré, compte cloud du client ou infrastructure sur site peuvent être étudiés.
          Le devis et le schéma de flux précisent fournisseur, région, accès, responsabilités,
          chiffrement, sauvegardes, sous-traitants et conditions de réversibilité.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-tools-tech-3">
          Comment on intègre proprement notre Sage / Cegid / SAP ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-tools-tech-3" hidden>
          Nous commençons par vérifier version, documentation, licence, accès et environnement de test.
          Pour les flux sensibles, lecture seule et validation de la cartographie précèdent les écritures.
          L'API, les fichiers d'échange, la traçabilité et la procédure de reprise dépendent des capacités
          réellement disponibles et sont validés avec l'exploitant de l'ERP.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-tools-tech-4">
          Votre stratégie de backup et de disaster recovery ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-tools-tech-4" hidden>
          La fréquence, la rétention, le chiffrement et l'éventuel second fournisseur sont définis selon la criticité.
          La restauration est testée selon une cadence convenue. <b>Les RTO et RPO cibles</b> sont documentés
          dans un runbook. Sur déploiement on-premise client, c'est votre équipe qui opère les backups.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-tools-tech-5">
          Logs d'audit : granularité, rétention, export ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-tools-tech-5" hidden>
          Les événements à tracer sont définis selon le risque&nbsp;: utilisateur, action, ressource,
          horodatage, source et éventuelles valeurs avant/après. <b>La rétention dépend de la finalité
          et des obligations applicables</b>. Les formats d'export et la séparation entre logs
          applicatifs et piste d'audit métier sont précisés dans l'architecture.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-tools-tech-6">
          Si on veut reprendre le code avec notre équipe interne, c'est possible ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-tools-tech-6" hidden>
          <b>Oui, si la réversibilité est cadrée dès le devis</b>. Stack, dépôt Git, accès,
          documentation d'architecture, runbook et procédure de reprise sont inventoriés.
          Le délai de prise en main dépend du périmètre et de l'état de la documentation. Les droits
          sur les livrables spécifiques, les composants préexistants et les licences tierces suivent
          le devis et les CGV.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-tools-tech-7">
          RGPD, DPA, sous-traitants, audit de conformité : vous gérez ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-tools-tech-7" hidden>
          Le devis précise le DPA si nécessaire, les sous-traitants, les flux, la conservation et les fonctions
          utiles à l'exercice des droits. Nous fournissons les preuves techniques et travaillons avec votre DPO,
          juriste ou RSSI ; nous ne revendiquons pas une désignation DPO ni un audit CNIL garanti.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-tools-tech-8">
          Pen test, scan de vulnérabilités, conformité sécurité ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-tools-tech-8" hidden>
          <b>Nous encourageons une évaluation indépendante adaptée au risque.</b> Les contrôles de code,
          d'en-têtes, d'API et de CI sont définis pour le projet puis vérifiés par des preuves. Une
          certification ou un test d'intrusion officiel relève d'un tiers compétent&nbsp;; son périmètre,
          son budget et le traitement des constats sont cadrés séparément.
        </div>
      </div>
    </div>
  </div>
</section>
`;
