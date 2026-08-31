export const faqHtml = `
<!-- FAQ COMMERCIALE SÉCURITÉ & RGPD -->
<section class="sr-faq" id="faq">
  <div class="wrap">
    <div class="sr-faq-grid">
      <div class="sr-faq-intro reveal">
        <div class="eyebrow">— FAQ commerciale</div>
        <h2>Les 18 questions<br>qu'on entend <em>avant</em><br>de signer.</h2>
        <p>Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. Un interlocuteur senior vous répond sur le périmètre technique et identifie les sujets à valider avec votre DPO ou conseil.</p>
      </div>

      <div class="sr-faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <button type="button" class="faq-q" aria-expanded="true" aria-controls="faq-a-sec-faq-1">Vous êtes une agence ou un cabinet juridique ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-1">
            <b>Nous sommes un studio de développement.</b> Notre rôle est d'auditer les mesures techniques,
            documenter les écarts et <a href="/services/maintenance-evolution"><b>coder la remédiation</b></a>.
            Les avis juridiques, contentieux et missions de DPO désigné restent confiés aux professionnels habilités choisis par le client.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-2">Vous pouvez être notre DPO officiel ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-2" hidden>
            <b>Pas au titre de l'offre actuellement publiée.</b> Hagnéré Code ne revendique ici ni désignation DPO,
            ni certification personnelle AFNOR/CIPP-E. Nous pouvons mettre en œuvre les mesures techniques et travailler
            avec le DPO interne ou externe que vous avez valablement désigné.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-3">Combien de temps avant le premier livrable ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-3" hidden>
            Le calendrier dépend du nombre de traitements, d'applications, de fournisseurs et de systèmes IA.
            Le devis distingue cadrage, audit technique, remédiation et accompagnement récurrent, avec un premier livrable daté.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-4">Quelle durée pour l'accompagnement récurrent ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-4" hidden>
            La durée dépend du plan d'action, de la fréquence des changements et des niveaux de service attendus.
            Engagement, renouvellement et préavis sont indiqués au devis ; ils ne découlent pas d'une prétendue règle universelle de la CNIL.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-5">Si on a déjà un cabinet juridique, vous le remplacez ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-5" hidden>
            <b>Pas forcément.</b> Garder votre avocat habilité fait sens (contentieux, droit social, droit
            commercial). Nous pouvons prendre l'audit et la remédiation codée, sous la gouvernance de votre DPO
            ou conseil. Les responsabilités et validations sont écrites avant le démarrage.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-6">Vous garantissez zéro sanction CNIL ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-6" hidden>
            Non. <b>Personne de sérieux ne garantit ça.</b> La CNIL peut sanctionner sur des sujets qu'on
            n'a pas encore audités, sur de nouveaux usages déployés en interne sans nous prévenir, ou sur
            l'interprétation jurisprudentielle d'un texte. Le devis et le contrat fixent la <b>méthode, les jalons,
            les délais et les limites de la mission</b> ; aucun accompagnement ne supprime tout risque.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-7">Vos prix sont vraiment fixes ou il y a des dépassements cachés ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-7" hidden>
            <b>Forfait fixe sur le périmètre validé au devis.</b> Si vous ajoutez un nouveau système IA en
            cours de mission ou si vous nous demandez une procédure non prévue (ex. réponse à un contrôle
            CNIL), on devise <b>séparément</b> avant de commencer. Aucun avenant surprise sur la facture du mois.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-8">Vous êtes un partenaire CNIL ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-8" hidden>
            Non. Hagnéré Code ne revendique aucun mandat, agrément ou partenariat de la CNIL. Le studio ne publie
            pas non plus de statut de membre AFCDP ni de certification personnelle AFNOR/CIPP-E sans justificatif
            nominatif vérifiable.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-9">Si on part, on récupère quoi ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-9" hidden>
            <b>Les éléments expressément prévus au devis</b> : par exemple support de registre, dossier de preuves
            pour l'AIPD, plan d'action technique, scripts d'audit, code de remédiation ou configuration de gestion du consentement. Les formats,
            comptes et modalités de remise sont définis avant le démarrage.
            Si un DPO distinct intervient, la passation de nos livrables techniques est organisée selon le devis.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-sec-faq-10">Combien ça coûte de vraiment démarrer ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-sec-faq-10" hidden>
            Le cadrage, l'audit, la remédiation et l'accompagnement récurrent sont chiffrés séparément selon le
            périmètre. Les prix affichés dans la section <a href="#tarifs" style="color:var(--accent-ink);text-decoration:underline">Forfaits &amp; tarifs</a>
            restent indicatifs jusqu'au devis et n'incluent pas une désignation DPO.
          </div>
        </div>

        <!-- h3 et non span : ce sous-groupe introduit huit questions, il est
             donc un niveau de la page. Rendu en span, il disparaissait de la
             navigation par titres — la page perdait un repère pour qui explore
             au lecteur d'écran, et la FAQ semblait n'avoir qu'un seul bloc. La
             classe .eyebrow porte toute l'apparence : le rendu ne bouge pas.
             (Aucun accent grave ici : ce commentaire vit dans un littéral de
             gabarit, où un accent grave fermerait la chaîne.) -->
        <div class="sr-faq-sub">
          <h3 class="eyebrow">— Pour les profils techniques</h3>
        </div>

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
  </div>
</section>
`;
