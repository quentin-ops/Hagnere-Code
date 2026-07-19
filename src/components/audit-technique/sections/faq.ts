import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

export const faqHtml = `
<!-- FAQ COMMERCIALE AUDIT · 12 Q · filtres persona CEO/CTO/DAF/VC -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ</div>
        <h2 style="margin-top:14px">Les 12 questions<br>qu'on nous pose<br>avant de signer.</h2>
        <p>Filtrez par profil décideur. Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. On répond sous 24 h ouvrées, par un expert, sans détour.</p>

        <div class="at-faq-filters" role="tablist" aria-label="Filtrer les questions par profil">
          <button type="button" class="at-faq-filter is-active" data-faq-filter="all" role="tab" aria-selected="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            Tous <span class="at-faq-count">12</span>
          </button>
          <button type="button" class="at-faq-filter" data-faq-filter="ceo" role="tab" aria-selected="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            CEO <span class="at-faq-count">8</span>
          </button>
          <button type="button" class="at-faq-filter" data-faq-filter="cto" role="tab" aria-selected="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            CTO <span class="at-faq-count">7</span>
          </button>
          <button type="button" class="at-faq-filter" data-faq-filter="daf" role="tab" aria-selected="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            DAF <span class="at-faq-count">6</span>
          </button>
          <button type="button" class="at-faq-filter" data-faq-filter="vc" role="tab" aria-selected="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            VC <span class="at-faq-count">6</span>
          </button>
        </div>
      </div>

      <div class="faq-list reveal reveal-d-1" data-faq-filter="all">
        <div class="faq-item open" data-persona="ceo cto daf vc">
          <div class="faq-q">Combien de temps avant les premiers insights ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Premiers insights transmis à J+5</b> par note de synthèse 3-4 pages (format Standard). <b>Rapport complet livré à J+10</b> (Standard), J+5 (Express), J+20 (Deep), J+30 (Tech DD M&amp;A). Vous pouvez arrêter l'audit à tout moment si le scope doit pivoter — vous payez <b>au prorata des jours consommés</b>.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf vc">
          <div class="faq-q">Le prix est-il vraiment fixe ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Oui, et publiquement affiché</b>&nbsp;: Express 8 000 €, Standard 18 000 €, Deep 38 000 €, Tech DD M&amp;A 68 000 € HT. Les extras (pentest, retest, shadow CTO, etc.) sont <b>chiffrés à l'avance dans le devis initial</b>. <b>Zéro avenant surprise</b> en cours d'audit — tout ajout nécessite votre accord écrit.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf vc">
          <div class="faq-q">Pourquoi une clause de non-conflit d'intérêt publique ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Les constats sont séparés des hypothèses de coût et chaque recommandation renvoie à une preuve. Toute remise ou déduction liée à une mission ultérieure doit figurer explicitement dans le devis&nbsp;: elle n'est pas présumée par les CGV publiques.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">Si je ne suis pas satisfait du rapport ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Les critères d'acceptation, le nombre et le format des recommandations, ainsi que la procédure de correction ou de contestation sont écrits au devis. Aucun remboursement automatique n'est annoncé s'il n'est pas prévu par le contrat signé.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto vc">
          <div class="faq-q">Vous garantissez quoi exactement ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le devis liste les livrables, critères d'acceptation, accès, confidentialité, calendrier, réversibilité et droits de propriété. Les CGV s'appliquent ensuite&nbsp;: transfert des livrables spécifiques après paiement complet, avec réserve pour les composants préexistants et licences tierces.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">Combien de temps prend l'onboarding / le démarrage ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Démarrage sous 5 j ouvrés</b> après signature (3 j pour une urgence justifiée). J-5 à J0&nbsp;: brief technique 90 min, NDA signé, accès read-only configurés (GitHub, cloud, Sentry, Linear, Notion). J+1&nbsp;: snapshot du code + branchement SonarQube + Semgrep + Snyk. Tout est automatisé côté notre infra — votre équipe a <b>2 h de travail total</b> pour la partie setup.
          </div>
        </div>

        <div class="faq-item" data-persona="cto">
          <div class="faq-q">On a déjà SonarQube, Snyk, Datadog — pourquoi vous ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Ces outils <b>trouvent des bugs, pas des problèmes de business</b>. Aucun SaaS ne chiffre votre dette tech en €, ne priorise par impact board, ne vous dit quoi dire à votre CA. Un audit, ce n'est pas un scan, c'est une <b>traduction technique → business</b>. On agrège vos outils + les nôtres + entretiens équipe pour produire un verdict défendable en board / VC / M&amp;A.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">Qui va ausculter concrètement notre code ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>2 seniors + le lead nommés dans le devis</b> (photo, prénom, LinkedIn — <a href="#equipe" style="color:var(--accent-ink);text-decoration:underline">voir la section Équipe</a>). Pas de stagiaire, pas de junior, pas de sous-traitance offshore. <b>Chaque dimension a un owner dédié</b> qui la signe. Zéro rotation en cours d'audit. <b>${TEAM_PUBLIC_COMPOSITION}</b>. Toute l'équipe partage les mêmes rituels.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">Quelle taille d'app pour que ça vaille le coup ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            En dessous de <b>1 000 utilisateurs actifs mensuels</b> et sans enjeu board / VC / compliance, un audit Express (8 k€) suffit souvent. Au-dessus, Standard (18 k€) couvre l'immense majorité des situations. <b>Règle empirique&nbsp;: si votre prochaine décision tech vaut plus de 80 k€, un audit Standard se rembourse en économies de mauvaises décisions</b>. Le mini-audit ci-dessus vous aide à choisir.
          </div>
        </div>

        <div class="faq-item" data-persona="cto vc">
          <div class="faq-q">Que se passe-t-il si le VC demande plus que notre rapport ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le fonds ou son cabinet peut demander des preuves ou analyses supplémentaires. Le devis peut alors prévoir un addendum ciblé ou une réunion de clarification. Le rapport ne remplace pas la due diligence décidée par l'investisseur.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto daf vc">
          <div class="faq-q">Si on part, on récupère quoi ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le devis énumère les livrables remis et la procédure de révocation des accès. Conformément aux CGV, les livrables spécifiques sont transférés après paiement complet, sous réserve des éléments préexistants, outils génériques et licences tierces.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">C'est quoi exactement dans les 18 000 € du Standard ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            10 jours ouvrés de travail par <b>2 seniors + 1 lead</b>&nbsp;: audit code (SAST, coverage, complexité), architecture (C4 AS-IS/TO-BE), performance (p95/p99, N+1), sécurité (OWASP, CVE, secrets, RGPD), infrastructure (IaC, DR), DevEx (DORA), FinOps, équipe (5-8 entretiens). Livrables&nbsp;: rapport 40-70 p. + <b>Tech Debt P&amp;L chiffré</b> + deck 12-18 slides + version board-safe + backlog Notion 20-30 tickets + C4 + Loom + roadmap 6/12/18 mois. <b>Licences enterprise SonarQube / Snyk / Datadog incluses</b>.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
