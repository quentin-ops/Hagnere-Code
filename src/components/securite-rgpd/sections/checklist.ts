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
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Registre Article 30</b> — responsable + sous-traitant, livré dans Notion ou Dastra selon votre stack.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Audit DPA</b> — relecture de <b>tous les sous-traitants</b> identifiés en cartographie, classés par criticité (accès données / transferts / durée), négociation amendements si nécessaire.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>SCC + DPF</b> — analyse des transferts hors UE, clauses contractuelles types signées avec sous-traitants US.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Assistance technique aux AIPD</b> — flux, mesures, tests et preuves préparés pour validation par votre DPO ou conseil.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Procédure DSAR</b> — process d'exercice des droits accès / effacement / portabilité, traité sous 1 mois.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Bannière cookies + Consent Mode v2</b> — paramétrage Tag Manager côté serveur si besoin.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Inventaire AI Act</b> — systèmes, finalités, fournisseurs, données et mesures documentés ; qualification validée avec votre conseil.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Audit applicatif boîte grise</b> — OWASP Top 10, revue archi, IAM cloud, secrets management.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Pipeline SAST/DAST en CI</b> — Snyk + ZAP + Trivy intégrés à votre GitHub Actions / GitLab CI.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Veille AI Act / NIS2 / DORA / CRA</b> — newsletter mensuelle + alertes sur changements applicables à vous.</div></li>
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
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Pen-test nécessitant une qualification particulière</b> — confié au prestataire sélectionné et vérifié par le client.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Procédure contradictoire CNIL</b> — si la CNIL ouvre une procédure formelle, c'est un avocat habilité (Lexing, Haas) qui prend le relai. On vous y emmène, on n'y entre pas seuls.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Certification ISO 27001 finale</b> — réalisée par un organisme accrédité indépendant ; notre contribution éventuelle est définie au devis.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Audit SOC 2 Type II final</b> — réalisé par l'auditeur compétent choisi par le client ; les outils logiciels ne délivrent pas l'attestation.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Achat des licences SaaS conformes</b> — abonnement Drata, OneTrust, Dastra, OVHcloud Trust : à votre charge.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Formation grand public</b> — on forme votre équipe interne (DPO, dev, RH). Pour des sessions ouvertes au public, voir notre offre formation.</div></li>
          <li><div class="sr-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Contentieux civil / pénal cyber</b> — escroquerie, ransomware avec dépôt de plainte : avocat spécialisé + experts judiciaires. On vous oriente.</div></li>
        </ul>
      </div>

    </div>
  </div>
</section>
`;
