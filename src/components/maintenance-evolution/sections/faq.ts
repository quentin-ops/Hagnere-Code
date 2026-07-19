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
            Après le diagnostic initial, le devis fixe les accès, priorités, outils, jalons et critères observables. Les délais dépendent de la documentation, des environnements disponibles et des incidents ouverts.
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
            Les conditions de révision, la durée d'engagement, le préavis et le traitement d'un écart de service sont ceux du devis ou du contrat signé. Les comptes placés au nom du client restent sous son contrôle et les livrables sont remis selon les CGV.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">Quels niveaux de service pouvez-vous contractualiser ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Disponibilité, temps de prise en charge, plage d'astreinte, outil de mesure et éventuelles pénalités sont adaptés à l'architecture. Ils ne sont opposables que lorsqu'ils figurent explicitement dans le contrat signé.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">Combien de temps prend l'onboarding ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            La durée dépend des accès, de la documentation, de l'infrastructure et des incidents déjà ouverts. Le plan d'onboarding, ses responsables et ses jalons sont validés au cadrage.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">On a déjà un freelance / un prestataire, comment ça se passe ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Nous proposons un inventaire des accès, une reprise progressive, des points avec le prestataire sortant et une documentation partagée. La durée et le coût de ce recouvrement sont définis au devis avec les parties concernées.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <div class="faq-q">Qui va s'occuper concrètement de mon app ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Les intervenants, leurs rôles et leur statut sont nommés dans le devis — <a href="#equipe" style="color:var(--accent-ink);text-decoration:underline">voir la composition publique</a>. Le canal, les horaires, les délais cibles et les modalités de continuité sont également précisés.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">Quelle taille d'app faut-il pour que ça vaille le coup ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            La taille d'audience ne suffit pas à décider. La criticité, la fréquence des changements, la dette existante, les obligations de sécurité et le niveau de support attendu déterminent le dispositif utile.
          </div>
        </div>

        <div class="faq-item" data-persona="cto ceo">
          <div class="faq-q">Que se passe-t-il si le dev qui gère mon compte part ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le devis précise l'équipe référente, la documentation attendue et les modalités de remplacement ou de recouvrement. Aucun délai de transition ni absence totale d'impact n'est promis hors contrat.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto daf">
          <div class="faq-q">Si on part, on récupère quoi ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Les comptes placés au nom du client restent sous son contrôle. Les éléments nécessaires à la reprise sont remis conformément aux CGV&nbsp;; le contenu, la durée et l'éventuel coût d'une passation sont précisés au devis.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <div class="faq-q">C'est quoi exactement dans les 2 000 € de l'audit flash ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le diagnostic initial est cadré au devis&nbsp;: intervenants, jours mobilisés, code et infrastructure couverts, livrables et restitution. Aucune déduction automatique n'est prévue par les CGV publiques.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
