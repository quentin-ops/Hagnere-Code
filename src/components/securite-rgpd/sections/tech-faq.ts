export const techFaqHtml = `
<!-- TECH FAQ · pour CTO / DPO techniques / responsables sécu -->
<section class="sr-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions qu'un CTO ou<br>un DPO technique nous pose<br>à chaque appel.</h2>
      </div>
      <div class="right">
        Huit questions techniques qu'on entend systématiquement de la part des CTO, DPO techniques, RSSI
        de PME tech qui évaluent une équipe DPO + cyber. Réponses directes, sans bullshit marketing.
      </div>
    </div>

    <div class="sr-tfaq-list reveal reveal-d-1">

      <div class="faq-item">
        <div class="faq-q">
          Outils internes d'audit — qu'est-ce que vous utilisez ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Cartographie sous-traitants</b> : outil maison Hagnéré (scan DNS + scan code source via GitHub
          App + scan factures comptables). <b>Pipeline SAST/DAST/SCA</b> : Snyk + Trivy + ZAP intégrés
          GitHub Actions. <b>Scan IAM cloud</b> : Steampipe + Prowler + ScoutSuite (AWS / GCP / Azure / Scaleway).
          <b>Test de charge sécurité</b> : k6 + artillery. <b>Cookies / consent</b> : audit manuel + Optanon
          + Tarte au Citron compliance check.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vous "rentrez dans notre code" — concrètement, comment ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Vous nous donnez un accès <b>read-only sur votre repo</b> (GitHub / GitLab / Bitbucket). On fork,
          on lit, on ouvre des issues prioritisées. Pour la remédiation, on demande un accès <b>collaborator</b>
          temporaire, on ouvre des PR avec tests. Vous mergez (ou pas) après code review interne.
          <b>Aucune écriture sans validation</b>. Logs d'accès tracés.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment vous gérez les rapports d'audit confidentiels ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Workspace <b>privé restreint</b> (Notion ou Confluence selon client) avec MFA obligatoire pour
          la collaboration courante. <b>Rapports d'audit sensibles</b> (findings cyber, schémas archi,
          credentials test) stockés <b>chiffrés via Cryptomator</b> sur Scaleway Object Storage chiffré au
          repos. Secrets partagés via <b>1Password</b> avec rotation au départ d'un consultant.
          <b>Aucune copie sur drive personnel.</b> Suppression sécurisée 12 mois après fin de mission
          (ou immédiate sur demande). Conforme à nos politiques internes alignées ISO 27001.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Pour SOC 2 Type II, vous remplacez Drata / Vanta ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Non, on les complète.</b> Drata / Vanta automatisent la <b>collecte de preuves</b>. Nous, on
          conçoit et on code les <b>contrôles eux-mêmes</b> (IAM, change management, business continuity,
          monitoring). On installe Drata avec vous, on configure les intégrations (AWS, GitHub, Okta), on
          comble les contrôles manquants en code. L'audit final reste avec un cabinet CPA accrédité.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          AI Act — concrètement, qu'est-ce que vous codez ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>(1) Logs structurés</b> de chaque inférence IA (input, output, modèle, version, timestamp, user).
          <b>(2) Mécanismes de supervision humaine</b> (UI de validation pour décisions à haut risque,
          override loggé). <b>(3) Tests de biais</b> automatisés sur les datasets et les outputs.
          <b>(4) Documentation technique</b> Article 11 versionnée dans le repo. <b>(5) Procédure de retrait</b>
          de modèle si un biais est détecté en prod. Tout est <b>code + tests + monitoring</b>, pas un PDF mort.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Cookies / Consent Mode v2 — vraiment compliant ou alibi ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Vraiment. <b>(1) Bannière conforme CNIL</b> (refuser aussi visible que accepter, pas de cookie wall).
          <b>(2) Tag Manager côté serveur</b> (Stape.io ou Cloudflare Worker) qui ne déclenche aucun pixel
          avant consentement. <b>(3) Consent Mode v2</b> avec signaux ad_personalization / ad_user_data
          configurés. <b>(4) Audit régulier</b> via Cookie-Script + tests Playwright qui simulent un refus
          et vérifient qu'aucun cookie tiers ne se pose.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Transferts hors UE — votre méthode pour les SCC ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>(1) Inventaire</b> de chaque sous-traitant US (Anthropic, OpenAI, Vercel, HubSpot, Intercom,
          Stripe, etc.) via scan code + DNS + factures. <b>(2) Vérification</b> de l'adhésion EU-US Data
          Privacy Framework (DPF). Si non-DPF : <b>SCC Module 2/3</b> à signer. <b>(3) Transfer Impact
          Assessment</b> par sous-traitant si données sensibles. <b>(4) Préférence systématique</b> pour
          régions EU si disponibles (Anthropic EU, OpenAI EU resi, Stripe EU). Documenté dans le registre.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Réponse à incident (data breach) — votre runbook ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>T+0</b> : confinement (rotation creds, isolation système). <b>T+2 h</b> : qualification (qui,
          quoi, combien de personnes concernées, données impactées). <b>T+24 h</b> : décision de notification
          CNIL (obligatoire si risque pour les droits). <b>T+72 h</b> : notification CNIL si nécessaire
          (déclaration en ligne via votre compte). <b>T+5 j</b> : notification individuelle aux personnes
          concernées si risque élevé. Runbook complet livré au DPO Scale, exercice annuel inclus.
        </div>
      </div>

    </div>
  </div>
</section>
`;
