export const faqHtml = `
<!-- FAQ COMMERCIALE SÉCURITÉ & RGPD -->
<section class="sr-faq" id="faq">
  <div class="wrap">
    <div class="sr-faq-grid">
      <div class="sr-faq-intro reveal">
        <div class="eyebrow">— FAQ commerciale</div>
        <h2>Les 10 questions<br>qu'on entend <em>avant</em><br>de signer.</h2>
        <p>Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. On répond sous 24 h ouvrées, par un DPO senior, sans détour.</p>
      </div>

      <div class="sr-faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">Vous êtes une agence ou un cabinet juridique ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Ni l'un ni l'autre.</b> On est un studio dev qui a structuré une équipe DPO + cyber audit en interne.
            Notre angle : <b>on code la remédiation</b>, là où Lexing pond un PDF et Wavestone livre un rapport.
            Pour une procédure contradictoire CNIL ou un contentieux, on collabore avec un cabinet partenaire.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous pouvez vraiment être notre DPO officiel ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Oui, désignation officielle CNIL.</b> Notre DPO référent est certifié AFNOR + CIPP/E (IAPP),
            membre AFCDP, RC Pro DPO Hiscox 2 M€. Vous nous nommez via le formulaire CNIL, on apparaît comme
            point de contact officiel pour vos clients, partenaires et l'autorité.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Combien de temps avant le premier livrable ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>2 semaines</b> pour un cadrage simple (PME 10-50 salariés, peu de systèmes IA). <b>4 semaines</b>
            pour un cadrage complet incluant audit applicatif boîte grise + classification AI Act détaillée.
            Le DPO mensuel démarre dès la signature, pas après le cadrage.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Pourquoi 12 mois d'engagement sur le DPO ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            La <b>désignation DPO auprès de la CNIL</b> implique une stabilité de mandat — la CNIL n'apprécie
            pas les changements toutes les 4 semaines. 12 mois est le standard du marché. Au-delà, reconduction
            tacite avec préavis 60 jours.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Si on a déjà un cabinet juridique, vous le remplacez ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Pas forcément.</b> Garder votre avocat habilité fait sens (contentieux, droit social, droit
            commercial). On prend le DPO + l'audit + la remédiation codée. Beaucoup de nos clients gardent
            Lexing ou Haas pour les parties contentieuses, et nous pour le pilotage opérationnel.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous garantissez zéro sanction CNIL ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Non. <b>Personne de sérieux ne garantit ça.</b> La CNIL peut sanctionner sur des sujets qu'on
            n'a pas encore audités, sur de nouveaux usages déployés en interne sans nous prévenir, ou sur
            l'interprétation jurisprudentielle d'un texte. On garantit la <b>méthode, les jalons, les délais
            contractuels</b>, et un suivi continu pour minimiser le risque.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vos prix sont vraiment fixes ou il y a des dépassements cachés ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Forfait fixe sur le périmètre validé au devis.</b> Si vous ajoutez un nouveau système IA en
            cours de mission ou si vous nous demandez une procédure non prévue (ex. réponse à un contrôle
            CNIL), on devise <b>séparément</b> avant de commencer. Aucun avenant surprise sur la facture du mois.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous êtes un partenaire CNIL ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Non, et <b>personne ne l'est</b> — la CNIL ne délivre pas ce statut. Méfiez-vous des cabinets
            qui revendiquent ça. Ce qui existe : être <b>membre AFCDP</b> (ce qu'on est) et avoir une
            certification de personne (CIPP/E, AFNOR DPO) — ce qu'on a aussi.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Si on part, on récupère quoi ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Tout</b> : registre, AIPD, plan d'action, scripts d'audit, code de remédiation, configuration
            Tag Manager / Consent Mode, charte interne IA. Tout est livré sur votre Notion / Git / drive.
            Désignation CNIL retransférée à votre nouveau DPO. Passation 30 jours incluse.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Combien ça coûte de vraiment démarrer ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>5 000 €</b> pour le cadrage initial (déduit à 100 % du DPO mensuel si vous signez sous 60 jours).
            <b>1 200 € à 3 500 €/mois</b> pour le DPO externalisé (engagement 12 mois). Sprint de remédiation
            codée à la carte. Prix affichés sur la section <a href="#tarifs" style="color:var(--accent-ink);text-decoration:underline">Forfaits &amp; tarifs</a>.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
