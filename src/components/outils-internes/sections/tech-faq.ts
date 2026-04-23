export const techFaqHtml = `
<!-- TECH FAQ — pour DSI / RSSI / décideurs techniques -->
<section class="oi-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les DSI / RSSI / lead techs</div>
        <h2>Les questions qu'un DSI<br>nous pose systématiquement.</h2>
      </div>
      <div class="right">
        Si votre DSI ou votre RSSI est déjà en train de nous auditer en lisant cette page,
        voici les réponses directes aux huit questions qu'on entend sur chaque deal ETI.
      </div>
    </div>

    <div class="oi-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Quel protocole SSO vous gérez ? SCIM pour le provisioning ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>SAML 2.0</b> (Azure AD, Okta, ADFS, JumpCloud) et <b>OIDC</b>. Provisioning / deprovisioning
          automatique via <b>SCIM 2.0</b> (création/désactivation des comptes quand un collaborateur
          arrive/part dans l'annuaire). Rôles mappés depuis les groupes AD. MFA obligatoire si votre
          IdP l'exige.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Hébergement : options de souveraineté et de résidence des données ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Trois options : <b>(1) Cloud mutualisé Hagnéré</b> sur Scaleway Paris ou OVH Roubaix —
          données 100 % France ; <b>(2) Cloud client dédié</b> (votre compte AWS, Azure, OVH ou GCP,
          on déploie via Terraform) ; <b>(3) On-premise</b> sur vos serveurs, image Docker Compose
          livrée. Tous chiffrés at-rest AES-256, TLS 1.3 in-transit.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment on intègre proprement notre Sage / Cegid / SAP ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Sprint 1 : read-only</b> via un compte technique dédié, cartographie des données,
          validation avec votre DAF. <b>Sprint 2 : écritures</b> via API officielle ou fichier
          d'échange (EDI, CSV, XML selon l'ERP). Jamais d'écriture directe sur la base de prod.
          Tout est tracé, rollback possible. Pour les ERP sans API publique (AS400, Divalto ancien),
          on passe par fichiers programmés ou middleware.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Votre stratégie de backup et de disaster recovery ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Backups PostgreSQL toutes les 15 min</b> (WAL continu), rétention 30 jours + snapshots
          hebdo conservés 1 an, stockés sur un <b>second provider</b> (règle 3-2-1). Restauration
          testée tous les trimestres sur environnement isolé. <b>RTO 2 h, RPO 15 min</b>, documentés
          dans un runbook. Sur déploiement on-premise client, c'est votre équipe qui opère les backups.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Logs d'audit : granularité, rétention, export ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Chaque action utilisateur loggée : utilisateur, action, ressource, horodatage UTC,
          IP source, user-agent, ancienne valeur, nouvelle valeur. <b>Rétention 3 ans par défaut</b>
          (paramétrable). Exports CSV/JSON pour audits externes ou contrôles (URSSAF, commissaire aux
          comptes, SAPIN II). Les logs applicatifs sont dans Sentry + Pulse, séparés de l'audit métier.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Si on veut reprendre le code avec notre équipe interne, c'est possible ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Oui, c'est le point central du "sur mesure"</b>. Stack 100 % standard (Laravel, React,
          PostgreSQL, Redis), repo Git chez vous, docker-compose livré, README technique,
          documentation d'architecture, runbook d'exploitation, procédure de rollback. Une ESN
          ou votre équipe interne peut prendre le relais en 2-3 semaines de ramp-up. Aucun
          royalties, aucun outil propriétaire Hagnéré.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          RGPD, DPA, sous-traitants, audit de conformité : vous gérez ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Oui.</b> DPA fourni dès le devis, registre de traitements à jour, liste exhaustive des
          sous-traitants (OVH, Scaleway, Anthropic, OpenAI, Postmark — tous signés). Droits RGPD
          de série (accès, rectification, portabilité, suppression). DPO interne disponible pour
          votre DPO ou juriste sous 48 h. Sur demande, on passe un audit CNIL ou un audit RSSI
          externe sans friction.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Pen test, scan de vulnérabilités, conformité sécurité ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>On encourage les pen tests externes</b>. Le code passe SAST (Psalm, Larastan) en CI,
          headers sécurité configurés (CSP, HSTS, X-Frame-Options), rate-limiting sur API publique,
          protection CSRF native Laravel. On prépare le terrain SOC 2 Type 2 / ISO 27001 mais
          l'audit officiel est chez un tiers habilité. Budget pen test : 3-8 k€ chez un cabinet
          français, on oriente si besoin.
        </div>
      </div>
    </div>
  </div>
</section>
`;
