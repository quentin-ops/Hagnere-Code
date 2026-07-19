export const faqHtml = `
<!-- FAQ COMMERCIALE M&E · filtres par persona (CTO / CEO / DAF) -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ</div>
        <h2 style="margin-top:14px">Les 12 questions<br>qu'on nous pose<br>avant de signer.</h2>
        <p>Filtrez par profil décideur. Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. On répond sous 24 h ouvrées, par un consultant senior, sans détour.</p>

        <div class="me-faq-filters" role="tablist" aria-label="Filtrer les questions par profil">
          <button type="button" class="me-faq-filter is-active" data-faq-filter="all" role="tab" aria-selected="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            Tous <span class="me-faq-count">12</span>
          </button>
          <button type="button" class="me-faq-filter" data-faq-filter="ceo" role="tab" aria-selected="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            CEO <span class="me-faq-count">10</span>
          </button>
          <button type="button" class="me-faq-filter" data-faq-filter="cto" role="tab" aria-selected="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            CTO <span class="me-faq-count">8</span>
          </button>
          <button type="button" class="me-faq-filter" data-faq-filter="daf" role="tab" aria-selected="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            DAF <span class="me-faq-count">6</span>
          </button>
        </div>
      </div>

      <div class="faq-list reveal reveal-d-1" data-faq-filter="all">
        <div class="faq-item open" data-persona="ceo cto daf">
          <div class="faq-q">Combien de temps avant les premiers effets mesurables ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Monitoring live à J+14</b> (Sentry, Better Stack, Statuspage publique). <b>Premier deploy à J+21</b> (un fix utile). <b>SLA uptime stable à M+2</b>. Jalons documentés au kickoff, publiés dans le rapport mensuel pour que vous puissiez juger la trajectoire avant la fin du 1er trimestre.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">Qui paye le cloud / l'hébergement ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Vous, directement</b>. AWS / OVH / Scaleway / Vercel restent sur <b>votre compte</b>, facturés par le provider à votre entité. Pas de rebilling, pas de margeage, pas de lock-in. Nous on opère, mais on ne s'intercale pas dans la facture.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">Pourquoi refusez-vous le TJM / la régie ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Refus de principe. La régie pousse à facturer des heures, pas à produire du résultat. Le forfait fixe nous <b>oblige à être efficaces</b>&nbsp;: moins de temps passé sur un incident = meilleure marge pour nous ET meilleur service pour vous. Les intérêts sont alignés par construction.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">Si je ne suis pas satisfait au bout de 3 mois ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Revue de pilotage à 3 mois. Si les jalons ne sont pas atteints, on <b>ajuste sans frais supplémentaire</b>. L'engagement contractuel est limité à 3-6 mois (selon tier), puis reconductible mensuellement avec préavis de 60 jours. <b>Comptes, code, docs — tout reste chez vous</b>.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">Vous garantissez vraiment 99,9 % d'uptime ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Oui, et <b>avec pénalités auto-appliquées</b>. 99,5 % en Essentiel, 99,9 % en Scale, 99,95 % en Premium. Mesuré par Better Stack, affiché sur Statuspage publique, rapport trimestriel. Si on manque&nbsp;: avoir chiffré en CGV, sans discussion. <b>On assume contractuellement, pas en slogan</b>.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">Combien de temps prend l'onboarding ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>4 semaines</b> en standard&nbsp;: audit flash (S1), prise de contrôle accès (S1-S2), branchement observability (S2-S3), backlog + roadmap (S3-S4). À J+30 votre app est sous monitoring complet et on commence à shipper. Pour les apps simples, on peut compresser à 2-3 semaines.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">On a déjà un freelance / un prestataire, comment ça se passe ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Transition douce, pas de clash</b>. On propose un overlap de 4 à 8 semaines avec votre prestataire actuel (payé par vous), on reprend progressivement, on documente tout. Votre freelance part serein, vous gagnez un binôme. 80 % de nos transitions se passent en bons termes avec le sortant.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">Qui va s'occuper concrètement de mon app ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>2 à 4 personnes nommées dans votre contrat</b> (photo, prénom, LinkedIn — <a href="#equipe" style="color:var(--accent-ink);text-decoration:underline">voir la section Équipe</a>). Pas de rotation, pas de chargé de compte intermédiaire. Binôme obligatoire — jamais un seul dev sur votre projet. Réponse &lt; 2 h HO en Slack. <b>Maximum 8 clients actifs par consultant</b> pour garantir du temps par compte.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">Quelle taille d'app faut-il pour que ça vaille le coup ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            En dessous de <b>1 000 utilisateurs actifs mensuels</b> et si vous n'avez pas d'enjeu sécurité/SLA, un freelance à la tâche suffit probablement. Au-delà, le forfait fixe s'auto-justifie. Règle empirique&nbsp;: si vous avez une app en prod depuis 1+ an, 1 000+ MAU ou un enjeu de sécurité client, on parle. En dessous, on vous oriente vers un indépendant senior.
          </div>
        </div>

        <div class="faq-item" data-persona="cto ceo">
          <div class="faq-q">Que se passe-t-il si le dev qui gère mon compte part ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Binôme obligatoire dès J+1</b> — vous n'avez jamais un seul dev qui connaît votre projet. Si un dev part&nbsp;: overlap 2 semaines avec le remplaçant (clause CGV), documentation déjà à jour, Loom d'onboarding. Vous ne perdez <b>0 jour de productivité</b>. Le binôme et le recouvrement de deux semaines sont des clauses contractuelles, pas des intentions.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto daf">
          <div class="faq-q">Si on part, on récupère quoi ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Tout</b>&nbsp;: repo GitHub (déjà chez vous), comptes cloud, DNS, Stripe, Sentry, Better Stack, Linear, Notion. Runbooks à jour, post-mortems archivés, Loom onboarding, docs architecture + ADR. <b>Passation de 5 jours offerte</b> à votre prestataire suivant&nbsp;: 1 call + docs + vidéos de transfert. Pas de rétention par l'ignorance.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">C'est quoi exactement dans les 2 000 € de l'audit flash ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            5 jours de travail par 2 devs seniors&nbsp;: audit code (dette technique, patterns, dépendances, CVE), audit infra (backups, DR, scaling), audit sécurité (SAST, secrets, RGPD), audit dépendances obsolètes. <b>Rapport 15-25 pages + plan de remédiation 12 mois chiffré par priorité</b>. Restitution 1h30 en visio. <b>Déduits à 100 % du 1er mois</b> si vous signez un retainer dans les 60 jours.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
