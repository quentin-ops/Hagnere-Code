export const techFaqHtml = `
<!-- TECH FAQ · pour CTO / DPO techniques / responsables sécu -->
<section class="sr-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions à trancher<br>avec le CTO, le DPO et le RSSI.</h2>
      </div>
      <div class="right">
        Huit sujets à documenter avant un audit applicatif ou une remédiation. Les responsabilités juridiques,
        techniques et cyber sont distinguées explicitement.
      </div>
    </div>

    <div class="sr-tfaq-list reveal reveal-d-1">

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-tech-1">
          Outils internes d'audit — qu'est-ce que vous utilisez ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-sec-tech-1" hidden>
          Les outils dépendent des accès autorisés, du cloud, du dépôt et du type de test. L'inventaire peut
          combiner entretiens, contrats, DNS, code et comptes fournisseurs. SAST, DAST, SCA, revue IAM et tests
          de consentement sont sélectionnés au plan d'audit ; aucune collecte automatisée n'est lancée hors périmètre.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-tech-2">
          Vous "rentrez dans notre code" — concrètement, comment ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-sec-tech-2" hidden>
          Le plan d'accès privilégie le moindre privilège et une durée limitée. L'audit peut rester en lecture seule.
          La remédiation passe par une branche ou un fork autorisé, des PR, des tests et la revue de votre équipe.
          Les comptes, journaux, révocations et responsabilités sont définis avant l'ouverture des accès.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-tech-3">
          Comment vous gérez les rapports d'audit confidentiels ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-sec-tech-3" hidden>
          Le devis ou l'annexe sécurité précise les espaces autorisés, le MFA, le chiffrement, les personnes habilitées,
          la gestion des secrets, la conservation et la suppression. Les rapports sensibles sont séparés des espaces
          de collaboration courante et les accès sont révoqués en fin de mission selon la procédure convenue.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-tech-4">
          Pour SOC 2 Type II, vous remplacez Drata / Vanta ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-sec-tech-4" hidden>
          Ces outils peuvent collecter des preuves ; ils ne remplacent ni les contrôles ni l'auditeur final.
          Hagnéré Code peut implémenter des mesures techniques retenues au plan d'action. L'intégration de l'outil,
          la préparation organisationnelle et l'audit indépendant restent des périmètres distincts au devis.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-tech-5">
          AI Act — concrètement, qu'est-ce que vous codez ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-sec-tech-5" hidden>
          Selon le système et la qualification validée : journalisation minimisée, version du modèle, supervision
          humaine, tests sur jeux de référence, documentation versionnée et procédure de retrait. Le plan précise
          aussi les données qu'il ne faut pas journaliser et les durées de conservation.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-tech-6">
          Cookies / Consent Mode v2 — vraiment compliant ou alibi ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-sec-tech-6" hidden>
          Nous inventorions les traceurs, finalités et déclencheurs, puis testons les parcours accepter, refuser
          et retirer son choix. Le plan de marquage et la CMP doivent respecter la décision validée par votre DPO
          ou conseil. Le server-side tagging et Consent Mode ne doivent jamais contourner un refus.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-tech-7">
          Transferts hors UE — votre méthode pour les SCC ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-sec-tech-7" hidden>
          L'inventaire documente le fournisseur, les données, les lieux, les rôles et les garanties invoquées.
          Votre DPO ou conseil valide le mécanisme applicable et l'éventuelle analyse d'impact du transfert.
          Nous configurons ensuite la région, la minimisation et les contrôles techniques décidés.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-tech-8">
          Réponse à incident (data breach) — votre runbook ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-sec-tech-8" hidden>
          Le runbook identifie détection, confinement, préservation des preuves, qualification, décision et communication.
          Votre responsable de traitement et son DPO ou conseil décident des notifications et délais applicables ;
          Hagnéré Code fournit les faits techniques, exécute les mesures autorisées et consigne la chronologie.
        </div>
      </div>

    </div>
  </div>
</section>
`;
