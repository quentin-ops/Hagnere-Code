export const faqHtml = `
<!-- FAQ COMMERCIALE SÉCURITÉ & RGPD -->
<section class="sr-faq" id="faq">
  <div class="wrap">
    <div class="sr-faq-grid">
      <div class="sr-faq-intro reveal">
        <div class="eyebrow">— FAQ commerciale</div>
        <h2>Les 10 questions<br>qu'on entend <em>avant</em><br>de signer.</h2>
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
      </div>
    </div>
  </div>
</section>
`;
