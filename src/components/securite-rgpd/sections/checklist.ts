export const checklistHtml = `
<!-- CHECKLIST · inclus / hors scope -->
<section class="sr-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qui doit être cadré</div>
        <h2>Une checklist précise<br>pour construire le devis.</h2>
      </div>
      <div class="right">
        Cette liste sert de base. Le devis indique les éléments inclus, exclus ou optionnels, les quantités,
        le responsable de validation et les éventuels prestataires spécialisés.
      </div>
    </div>

    <div class="sr-check-grid">

      <!-- INCLUS -->
      <div class="sr-check-col reveal">
        <div class="sr-check-badge sr-check-badge-in">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          SOCLE À CONFIRMER AU DEVIS
        </div>
        <h3>Les livrables possibles<br>à sélectionner et quantifier.</h3>
        <ul class="sr-check-list">
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Cartographie sous-traitants</b> — outil interne, mise à jour mensuelle, alerte sur les nouveaux SaaS détectés.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Support de registre Article 30</b> — données structurées dans Notion ou Dastra, à compléter et valider par le responsable de traitement et son DPO ou conseil.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Inventaire technique des DPA</b> — sous-traitants, accès, lieux, transferts, durées et versions recensés ; les clauses et amendements sont validés par votre DPO ou conseil.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Transferts hors EEE</b> — mécanismes invoqués, sous-traitants ultérieurs et mesures techniques documentés pour qualification et contractualisation par les responsables compétents.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Assistance technique aux AIPD</b> — flux, mesures, tests et preuves préparés pour validation par votre DPO ou conseil.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Workflow d'exercice des droits</b> — outil de réception, recherche multicanale et traçabilité, paramétré à partir des règles validées par votre DPO ou conseil.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Bannière cookies + Consent Mode v2</b> — paramétrage Tag Manager côté serveur si besoin.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Inventaire AI Act</b> — systèmes, finalités, fournisseurs, données et mesures documentés ; qualification validée avec votre conseil.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Audit applicatif boîte grise</b> — OWASP Top 10, revue archi, IAM cloud, secrets management.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Pipeline SAST/DAST en CI</b> — Snyk + ZAP + Trivy intégrés à votre GitHub Actions / GitLab CI.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Suivi documentaire</b> — collecte de sources officielles et transmission à votre DPO ou conseil, sans analyse juridique personnalisée.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Canal et délai d'intervention</b> — plage de service, sévérités, escalade et exclusions écrites au devis.</div></li>
        </ul>
      </div>

      <!-- HORS SCOPE -->
      <div class="sr-check-col sr-check-col-out reveal reveal-d-1">
        <div class="sr-check-badge sr-check-badge-out">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
          HORS SCOPE (ON LE DIT TÔT)
        </div>
        <h3>Ce qui n'est pas dans le forfait.</h3>
        <ul class="sr-check-list">
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Consultation et qualification juridiques</b> — bases légales, clauses, applicabilité des textes, AIPD et transferts sont décidés et validés par le DPO, l'avocat ou le professionnel habilité mandaté par le client.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Pen-test nécessitant une qualification particulière</b> — confié au prestataire sélectionné et vérifié par le client.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Procédure contradictoire CNIL</b> — le client mandate son avocat ou son conseil pour piloter la procédure. Nous fournissons le dossier et les preuves techniques sous sa direction, dans le périmètre convenu.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Certification ISO 27001 finale</b> — réalisée par un organisme accrédité indépendant ; notre contribution éventuelle est définie au devis.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Audit SOC 2 Type II final</b> — réalisé par l'auditeur compétent choisi par le client ; les outils logiciels ne délivrent pas l'attestation.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Achat des licences SaaS retenues</b> — abonnement Drata, OneTrust, Dastra ou autre outil sélectionné après vérification : à votre charge.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Formation grand public</b> — on forme votre équipe interne (DPO, dev, RH). Pour des sessions ouvertes au public, voir notre offre formation.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Contentieux civil ou pénal cyber</b> — le client mandate les professionnels habilités et experts nécessaires ; ce rôle ne fait pas partie de l'offre publiée.</div></li>
        </ul>
      </div>

    </div>
  </div>
</section>
`;
