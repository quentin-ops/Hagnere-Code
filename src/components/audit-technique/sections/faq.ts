import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

export const faqHtml = `
<!-- FAQ COMMERCIALE AUDIT · 12 Q · filtres persona CEO/CTO/DAF/VC -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ</div>
        <h2 style="margin-top:14px">Les 20 questions<br>qu'on nous pose<br>avant de signer.</h2>
        <p>Filtrez par profil décideur. Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. Nous visons une réponse d'un expert le prochain jour ouvré, sans délai garanti.</p>

        <div class="at-faq-filters" role="group" aria-label="Filtrer les questions par profil">
          <button type="button" class="at-faq-filter is-active" data-faq-filter="all" aria-pressed="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            Tous <span class="at-faq-count">20</span>
          </button>
          <button type="button" class="at-faq-filter" data-faq-filter="ceo" aria-pressed="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            CEO <span class="at-faq-count">8</span>
          </button>
          <button type="button" class="at-faq-filter" data-faq-filter="cto" aria-pressed="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            CTO <span class="at-faq-count">15</span>
          </button>
          <button type="button" class="at-faq-filter" data-faq-filter="daf" aria-pressed="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            DAF <span class="at-faq-count">6</span>
          </button>
          <button type="button" class="at-faq-filter" data-faq-filter="vc" aria-pressed="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            VC <span class="at-faq-count">6</span>
          </button>
        </div>
      </div>

      <div class="faq-list reveal reveal-d-1" data-faq-filter="all">
        <div class="faq-item open" data-persona="ceo cto daf vc">
          <button type="button" class="faq-q" aria-expanded="true" aria-controls="faq-a-audit-faq-1">Combien de temps avant les premiers insights ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-1">
            Le devis fixe les jalons, les restitutions intermédiaires, le rapport final et la procédure à suivre si le périmètre évolue. Aucun paiement au prorata ni droit d'arrêt particulier n'est présumé s'il n'est pas écrit au contrat.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf vc">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-2">Le prix est-il vraiment fixe ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-2" hidden>
            <b>Oui, et publiquement affiché</b>&nbsp;: Express 8 000 €, Standard 18 000 €, Deep 38 000 €, Tech DD M&amp;A 68 000 € HT. Les extras (pentest, retest, shadow CTO, etc.) sont <b>chiffrés à l'avance dans le devis initial</b>. <b>Zéro avenant surprise</b> en cours d'audit — tout ajout nécessite votre accord écrit.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf vc">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-3">Pourquoi une clause de non-conflit d'intérêt publique ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-3" hidden>
            Les constats sont séparés des hypothèses de coût et chaque recommandation renvoie à une preuve. Toute remise ou déduction liée à une mission ultérieure doit figurer explicitement dans le devis&nbsp;: elle n'est pas présumée par les CGV publiques.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-4">Si je ne suis pas satisfait du rapport ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-4" hidden>
            Les critères d'acceptation, le nombre et le format des recommandations, ainsi que la procédure de correction ou de contestation sont écrits au devis. Aucun remboursement automatique n'est annoncé s'il n'est pas prévu par le contrat signé.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto vc">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-5">Vous garantissez quoi exactement ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-5" hidden>
            Le devis liste les livrables, critères d'acceptation, accès, confidentialité, calendrier, réversibilité et droits de propriété. Les CGV s'appliquent ensuite&nbsp;: transfert des livrables spécifiques après paiement complet, avec réserve pour les composants préexistants et licences tierces.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-6">Combien de temps prend l'onboarding / le démarrage ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-6" hidden>
            La date de démarrage dépend des disponibilités, de la confidentialité, des accès en lecture seule et des personnes à interviewer. Le devis précise les outils autorisés, le plan de mobilisation et la charge attendue côté client.
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-7">On a déjà SonarQube, Snyk, Datadog — pourquoi vous ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-7" hidden>
            Les scanners apportent des signaux utiles mais ne remplacent pas l'examen du contexte, de l'architecture, de l'exploitation et de la décision à sécuriser. Le devis précise quelles preuves automatiques et humaines seront utilisées ainsi que les limites de l'analyse.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-8">Qui va ausculter concrètement notre code ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-8" hidden>
            Le devis nomme les personnes réellement mobilisées, leur statut, leurs dimensions de revue et le responsable de synthèse
            (<a href="#equipe" style="color:var(--accent-ink);text-decoration:underline">voir les profils mobilisables</a>).
            Il précise aussi les modalités de remplacement et de validation. <b>${TEAM_PUBLIC_COMPOSITION}</b>.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-9">Quelle taille d'app pour que ça vaille le coup ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-9" hidden>
            Le bon format dépend du périmètre technique, des accès disponibles, du niveau de preuve attendu et de la décision à sécuriser. Le mini-diagnostic ci-dessus aide à préparer le cadrage&nbsp;; il ne promet ni format automatique ni retour financier garanti.
          </div>
        </div>

        <div class="faq-item" data-persona="cto vc">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-10">Que se passe-t-il si le VC demande plus que notre rapport ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-10" hidden>
            Le fonds ou son cabinet peut demander des preuves ou analyses supplémentaires. Le devis peut alors prévoir un addendum ciblé ou une réunion de clarification. Le rapport ne remplace pas la due diligence décidée par l'investisseur.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto daf vc">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-11">Si on part, on récupère quoi ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-11" hidden>
            Le devis énumère les livrables remis et la procédure de révocation des accès. Conformément aux CGV, les livrables spécifiques sont transférés après paiement complet, sous réserve des éléments préexistants, outils génériques et licences tierces.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-faq-12">C'est quoi exactement dans les 18 000 € HT du Standard ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-faq-12" hidden>
            Le devis Standard précise les jours mobilisés, les intervenants, les dimensions réellement auditées, les outils autorisés, les livrables, le calendrier et les critères d'acceptation. Une licence ou analyse tierce n'est incluse que lorsqu'elle est explicitement chiffrée.
          </div>
        </div>

        <!-- Huit questions techniques, rapatriées de la section « TECH FAQ »
             qui les publiait séparément en fin de page. Deux FAQ à la suite
             obligeaient à parcourir la première en entier pour découvrir que
             la seconde existait ; le filtre par profil, lui, existait déjà. -->
        <div class="faq-sub">
          <h3 class="eyebrow">— Pour les profils techniques</h3>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-tech-1">
            Accès read-only, OK · mais comment garantissez-vous que rien ne soit modifié ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-tech-1" hidden>
            Les accès sont configurés au <b>niveau minimal nécessaire</b> sur le cloud, le dépôt et les outils d'observabilité.
            Les rôles, journaux disponibles, exceptions indispensables et date de révocation sont documentés avant l'audit.
            Un accès en lecture seule est privilégié&nbsp;; toute action nécessitant une écriture reste exécutée ou validée par l'équipe du client.
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-tech-2">
            Comment vous branchez SonarQube Enterprise sur un repo privé sans tout casser ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-tech-2" hidden>
            Le mode d'analyse est choisi avec vous&nbsp;: exécution dans votre environnement, copie de travail isolée ou outil déjà autorisé.
            Le périmètre, les éventuels transferts, la durée de conservation et la suppression sont écrits avant tout accès.
            Les exports réellement produits sont remis dans les formats prévus au devis, sans promettre un outil ou une licence non nécessaire.
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-tech-3">
            SAST + DAST + SCA · quelle couverture en 10 jours ouvrés ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-tech-3" hidden>
            Le devis précise la couverture SAST, SCA et DAST réellement adaptée au dépôt, aux environnements disponibles et aux contraintes d'accès.
            Les zones exclues et limites des outils sont explicites. Pour un <b>DAST exhaustif ou un pentest complet</b>,
            le devis peut prévoir un pentest indépendant réalisé par un prestataire qualifié PASSI sélectionné
            et vérifié par le client lorsque cette qualification est réellement requise.
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-tech-4">
            RPO / RTO mesurés vs. déclarés · comment vous vérifiez ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-tech-4" hidden>
            <b>On demande une restauration test sur un environnement isolé</b> pendant l'audit&nbsp;: votre équipe lance la procédure,
            on chronomètre le RTO réel (temps de restauration effectif), on vérifie le RPO réel (point de restauration atteint vs. promis).
            L'écart entre le RTO annoncé et le temps observé est documenté sans présumer son ampleur. Son impact peut ensuite être estimé à partir du coût d'indisponibilité et d'hypothèses explicites.
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-tech-5">
            Comment vous faites les entretiens équipe sans fragiliser le management ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-tech-5" hidden>
            <b>Off-the-record total</b>&nbsp;: les interviews ne sont ni enregistrées, ni retranscrites nominativement dans le rapport.
            Framework SPACE (Satisfaction, Performance, Activity, Communication, Efficiency) de Google + MS Research. <b>Focus sur les systèmes, pas les personnes</b>&nbsp;:
            un bottleneck vient presque toujours d'une contrainte orga ou temporelle, pas d'un dev. Les devs sont <b>co-auteurs du plan de remédiation</b>,
            pas cibles. Aucune citation nominative, aucun « blame personnel ».
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-tech-6">
            Méthodologie ISO 19011 · c'est quoi concrètement ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-tech-6" hidden>
            ISO 19011 fournit des lignes directrices pour les audits de systèmes de management. Nous pouvons nous en inspirer pour
            structurer l'indépendance, les preuves, les risques et la restitution, sans présenter la mission comme une certification ISO.
            La grille utilisée et un exemple expurgé de livrable peuvent être présentés pendant le cadrage, selon leur disponibilité.
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-tech-7">
            Comment situez-vous nos scores · méthodologie ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-tech-7" hidden>
            <b>Grille documentée et publique</b>, pas une boîte noire. Chaque audit score /100 par dimension (code, archi, perf, sécu, infra, DevEx, FinOps, équipe),
            selon une grille de critères remise avec le devis et adossée à des <b>référentiels externes vérifiables</b>&nbsp;:
            DORA pour la livraison, OWASP ASVS pour la sécurité applicative, Core Web Vitals et le Web Almanac pour la performance, ISO 19011 pour la conduite d'audit.
            Chaque note renvoie au critère qui la produit&nbsp;: vous pouvez contester ligne à ligne, et refaire le calcul vous-même après nos remédiations.
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-audit-tech-8">
            Conformité SOC2 / ISO 27001 / HDS / ACPR · vous auditez officiellement ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-audit-tech-8" hidden>
            <b>Non.</b> L'évaluation officielle et la certification relèvent des organismes, auditeurs ou autorités compétents&nbsp;:
            cette prestation ne délivre pas de certification HDS, ni aucune autre.
            Nous pouvons fournir les éléments techniques prévus au devis et contribuer à une analyse d'écart sous leur cadrage.
            Le référentiel, les contrôles applicables, le calendrier et les preuves attendues doivent être confirmés avec eux&nbsp;;
            aucun gain de délai ni obtention de certification n'est garanti.
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
`;
