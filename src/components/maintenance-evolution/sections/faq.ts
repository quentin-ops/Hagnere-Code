export const faqHtml = `
<!-- FAQ COMMERCIALE M&E · filtres par persona (CTO / CEO / DAF) -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ</div>
        <h2 style="margin-top:14px">Les 12 questions<br>qu'on nous pose<br>avant de signer.</h2>
        <p>Filtrez par profil décideur. Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. Votre demande est relue personnellement, par un consultant senior, sans détour.</p>

        <div class="me-faq-filters" role="group" aria-label="Filtrer les questions par profil">
          <button type="button" class="me-faq-filter is-active" data-faq-filter="all" aria-pressed="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            Tous <span class="me-faq-count">12</span>
          </button>
          <button type="button" class="me-faq-filter" data-faq-filter="ceo" aria-pressed="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            CEO <span class="me-faq-count">10</span>
          </button>
          <button type="button" class="me-faq-filter" data-faq-filter="cto" aria-pressed="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            CTO <span class="me-faq-count">8</span>
          </button>
          <button type="button" class="me-faq-filter" data-faq-filter="daf" aria-pressed="false">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            DAF <span class="me-faq-count">6</span>
          </button>
        </div>
      </div>

      <div class="faq-list reveal reveal-d-1" data-faq-filter="all">
        <div class="faq-item open" data-persona="ceo cto daf">
          <button type="button" class="faq-q" aria-expanded="true" aria-controls="faq-a-care-faq-1">Combien de temps avant les premiers effets mesurables ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-1">
            Après le diagnostic initial, le devis fixe les accès, priorités, outils, jalons et critères observables. Les délais dépendent de la documentation, des environnements disponibles et des incidents ouverts.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-2">Qui paye le cloud / l'hébergement ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-2" hidden>
            Le devis identifie le titulaire de chaque compte AWS, OVH, Scaleway, Vercel ou équivalent, le payeur, les licences et les rôles d'administration. Une facturation directe au client peut être retenue pour faciliter la réversibilité.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-3">Pourquoi refusez-vous le TJM / la régie ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-3" hidden>
            Refus de principe. La régie pousse à facturer des heures, pas à produire du résultat. Le forfait fixe nous <b>oblige à être efficaces</b>&nbsp;: moins de temps passé sur un incident = meilleure marge pour nous ET meilleur service pour vous. Les intérêts sont alignés par construction.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-4">Si je ne suis pas satisfait au bout de 3 mois ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-4" hidden>
            Les conditions de révision, la durée d'engagement, le préavis et le traitement d'un écart de service sont ceux du devis ou du contrat signé. Les comptes placés au nom du client restent sous son contrôle et les livrables sont remis selon les CGV.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-5">Quels niveaux de service pouvez-vous contractualiser ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-5" hidden>
            Disponibilité, temps de prise en charge, plage d'astreinte, outil de mesure et éventuelles pénalités sont adaptés à l'architecture. Ils ne sont opposables que lorsqu'ils figurent explicitement dans le contrat signé.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-6">Combien de temps prend l'onboarding ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-6" hidden>
            La durée dépend des accès, de la documentation, de l'infrastructure et des incidents déjà ouverts. Le plan d'onboarding, ses responsables et ses jalons sont validés au cadrage.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-7">On a déjà un freelance / un prestataire, comment ça se passe ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-7" hidden>
            Le <a href="/guides/reprendre-logiciel-metier-existant">test de relève du logiciel existant</a> aide d'abord à distinguer les preuves disponibles, les inconnues et les blocages. Nous proposons ensuite un inventaire des accès, une reprise progressive, des points avec le prestataire sortant et une documentation partagée. La durée et le coût de ce recouvrement sont définis au devis avec les parties concernées.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-8">Qui va s'occuper concrètement de mon app ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-8" hidden>
            Les intervenants, leurs rôles et leur statut sont nommés dans le devis — <a href="#equipe" style="color:var(--accent-ink);text-decoration:underline">voir la composition publique</a>. Le canal, les horaires, les délais cibles et les modalités de continuité sont également précisés.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-9">Quelle taille d'app faut-il pour que ça vaille le coup ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-9" hidden>
            La taille d'audience ne suffit pas à décider. La criticité, la fréquence des changements, la dette existante, les obligations de sécurité et le niveau de support attendu déterminent le dispositif utile.
          </div>
        </div>

        <div class="faq-item" data-persona="cto ceo">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-10">Que se passe-t-il si le dev qui gère mon compte part ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-10" hidden>
            Le devis précise l'équipe référente, la documentation attendue et les modalités de remplacement ou de recouvrement. Aucun délai de transition ni absence totale d'impact n'est promis hors contrat.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo cto daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-11">Si on part, on récupère quoi ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-11" hidden>
            Les comptes placés au nom du client restent sous son contrôle. Les éléments nécessaires à la reprise sont remis conformément aux CGV&nbsp;; le contenu, la durée et l'éventuel coût d'une passation sont précisés au devis.
          </div>
        </div>

        <div class="faq-item" data-persona="ceo daf">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-care-faq-12">C'est quoi exactement dans les 2 000 € HT de l'audit flash ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-care-faq-12" hidden>
            Le diagnostic initial est cadré au devis&nbsp;: intervenants, jours mobilisés, code et infrastructure couverts, livrables et restitution. Aucune déduction automatique n'est prévue par les CGV publiques.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
