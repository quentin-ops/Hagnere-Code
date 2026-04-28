export const bodyHtml = `
<!-- NAV -->
<nav class="nav">
  <div class="nav-inner">
    <a href="/" class="brand">
      <div class="brand-mark">HC</div>
      <div class="brand-name"><b>Hagnéré</b> <span>Code</span></div>
    </a>
    <div class="nav-links">
      <div class="nav-item">
        <a href="/#services" class="nav-trigger">Services
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <div class="nav-dd">
          <div class="dd-col">
            <h6>Construire</h6>
            <a class="dd-link" href="/services/saas-applications-metier">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
              <div class="dd-meta"><div class="dd-title">SaaS &amp; applis métier</div><div class="dd-sub">Plateformes B2B, espaces clients.</div></div>
            </a>
            <a class="dd-link" href="/services/outils-internes-sur-mesure">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18M7 14l3-3 4 4 5-5"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Outils internes sur mesure</div><div class="dd-sub">Back-office, workflows, automatisations.</div></div>
            </a>
            <a class="dd-link" href="/services/sites-vitrines">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Sites vitrines &amp; landings</div><div class="dd-sub">Sites qui convertissent, pas qui informent.</div></div>
            </a>
            <a class="dd-link" href="/services/ecommerce">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></div>
              <div class="dd-meta"><div class="dd-title">E-commerce</div><div class="dd-sub">Boutiques haut de gamme, Shopify Plus.</div></div>
            </a>
          </div>
          <div class="dd-col">
            <h6>Faire grandir</h6>
            <a class="dd-link" href="/services/referencement-google">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
              <div class="dd-meta"><div class="dd-title">SEO &amp; référencement</div><div class="dd-sub">Contenu, tech, netlinking.</div></div>
            </a>
            <a class="dd-link" href="/services/publicite-en-ligne">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Publicité en ligne</div><div class="dd-sub">Google Ads, Meta, LinkedIn.</div></div>
            </a>
            <a class="dd-link" href="/services/contenu-video">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Contenu &amp; vidéo</div><div class="dd-sub">Studio interne, motion, YouTube.</div></div>
            </a>
          </div>
          <div class="dd-col">
            <h6>Protéger &amp; opérer</h6>
            <a class="dd-link" href="/services/maintenance-evolution">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Maintenance &amp; évolution</div><div class="dd-sub">Forfait mensuel, support prioritaire.</div></div>
            </a>
            <a class="dd-link" href="/services/securite-rgpd">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Sécurité &amp; RGPD</div><div class="dd-sub">Audit, conformité, hébergement FR.</div></div>
            </a>
            <a class="dd-link" href="/services/audit-technique">
              <div class="dd-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg></div>
              <div class="dd-meta"><div class="dd-title">Audit technique</div><div class="dd-sub">Code review, perf, sécurité.</div></div>
            </a>
          </div>
          <div class="dd-cta">
            <div class="dd-cta-body">
              <div class="tag">Pas sûr ?</div>
              <div class="dd-cta-title">On vous aide à choisir le bon service.</div>
              <div class="dd-cta-sub">30 min avec un associé, gratuit, pour cadrer votre besoin.</div>
              <a href="https://calendly.com/hagnere-code/30min" target="_blank" rel="noopener noreferrer" class="btn btn-accent">Réserver un créneau →</a>
            </div>
          </div>
        </div>
      </div>
      <a href="/methode">Méthode</a>
      <a href="/realisations">Réalisations</a>
      <a href="/equipe">Équipe</a>
      <a href="/tarifs">Tarifs</a>
      <a href="/demarrer-un-projet">Calculateur</a>
      <a href="/guide">Guide</a>
      <a href="/contact" class="active">Contact</a>
    </div>
    <div class="nav-cta">
      <button class="nav-burger" type="button" aria-label="Menu" aria-expanded="false">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      <a href="#contact" class="btn btn-ghost">Prendre RDV</a>
      <a href="/demarrer-un-projet" class="btn btn-primary">Démarrer un projet
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</nav>

<!-- CONTACT HERO -->
<section class="c-hero">
  <div class="wrap c-hero-inner">
    <div class="c-hero-left">
      <div class="c-crumb">
        <a href="/">Accueil</a>
        <span class="sep">/</span>
        <span>Contact</span>
      </div>
      <div class="eyebrow">— Contact</div>
      <h1>Dites-nous<br>bonjour.</h1>
      <p class="c-hero-lead">
        Un associé qui code lit votre message, vous répond <b>sous 24 h ouvrées</b>,
        et vous dit franchement si c'est pour nous — ou pas. Pas de commercial,
        pas de filtre, pas de ballet. On va droit au but.
      </p>
      <div class="c-hero-cta">
        <a href="#contact" class="btn btn-primary btn-lg">
          Formulaire projet
          <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="https://calendly.com/hagnere-code/30min" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-lg">Réserver 30 min →</a>
      </div>
      <div class="c-hero-meta">
        <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Réponse sous 24 h</span>
        <span class="sep"></span>
        <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Sans engagement</span>
        <span class="sep"></span>
        <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Gratuit tant qu'on cadre</span>
      </div>
    </div>

    <div class="c-hero-right">
      <div class="c-dir-card">
        <div class="c-dir-kicker">CANAUX DIRECTS</div>
        <div class="c-dir-title">Vous préférez un contact direct ?</div>

        <a href="mailto:hello@hagnere-code.fr" class="c-dir-row">
          <div class="c-dir-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
          </div>
          <div class="c-dir-body">
            <div class="c-dir-k">Email</div>
            <div class="c-dir-v">hello@hagnere-code.fr</div>
          </div>
          <svg class="c-dir-arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </a>

        <a href="tel:+33374472018" class="c-dir-row">
          <div class="c-dir-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z"/></svg>
          </div>
          <div class="c-dir-body">
            <div class="c-dir-k">Téléphone</div>
            <div class="c-dir-v">+33 3 74 47 20 18</div>
          </div>
          <svg class="c-dir-arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </a>

        <div class="c-dir-row c-dir-row-static">
          <div class="c-dir-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="c-dir-body">
            <div class="c-dir-k">Bureau</div>
            <div class="c-dir-v">7 rue Ernest Filliard · 73000 Chambéry</div>
          </div>
        </div>

        <div class="c-dir-foot">
          <div class="c-dir-avail">
            <span class="c-dir-dot"></span>
            Disponible lun–ven · 9 h – 19 h
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROJETS & ZONE -->
<section class="c-fit">
  <div class="wrap">
    <div class="c-fit-head reveal">
      <div>
        <div class="eyebrow">— Pour quels projets nous contacter</div>
        <h2>Si c'est un outil web stratégique, on sait le cadrer.</h2>
      </div>
      <p>
        Hagnéré Code accompagne les PME, ETI et indépendants structurés sur des
        projets web sur mesure : application métier, SaaS B2B, outil interne,
        reprise Laravel ou site vitrine orienté conversion.
      </p>
    </div>

    <div class="c-fit-grid">
      <a class="c-fit-card reveal" href="/services/saas-applications-metier">
        <span class="c-fit-tag">SaaS &amp; app métier</span>
        <h3>Construire un produit web maintenable.</h3>
        <p>Portail client, plateforme B2B, espace abonné, workflow métier ou MVP exploitable.</p>
      </a>

      <a class="c-fit-card reveal reveal-d-1" href="/services/outils-internes-sur-mesure">
        <span class="c-fit-tag">Back-office</span>
        <h3>Remplacer Excel, Notion ou un CRM bricolé.</h3>
        <p>Outil interne, automatisation, reporting, facturation, relance ou synchronisation d'outils.</p>
      </a>

      <a class="c-fit-card reveal reveal-d-2" href="/services/audit-technique">
        <span class="c-fit-tag">Reprise / audit</span>
        <h3>Reprendre une base Laravel ou Next.js.</h3>
        <p>Audit, stabilisation, dette technique, sécurité, performance et plan de reprise réaliste.</p>
      </a>

      <a class="c-fit-card reveal reveal-d-3" href="/services/sites-vitrines">
        <span class="c-fit-tag">Site &amp; acquisition</span>
        <h3>Lancer un site qui sert le commercial.</h3>
        <p>Site vitrine premium, landing SEO/Ads, pages services, formulaires et tracking propre.</p>
      </a>
    </div>

    <div class="c-local reveal">
      <div class="c-local-main">
        <div class="eyebrow">— Studio basé à Chambéry</div>
        <h2>Savoie, Haute-Savoie, Lyon, Grenoble — et France entière en visio.</h2>
        <p>
          Notre bureau est au <b>7 rue Ernest Filliard, 73000 Chambéry</b>.
          On travaille localement avec les dirigeants et équipes métiers quand
          la proximité aide, et à distance quand le projet demande surtout de la
          méthode, du code propre et des points courts.
        </p>
      </div>
      <div class="c-local-aside">
        <div class="c-local-row"><span>Réponse</span><b>Sous 24 h ouvrées</b></div>
        <div class="c-local-row"><span>Premier échange</span><b>30 min gratuites</b></div>
        <div class="c-local-row"><span>Horaires</span><b>Lun-ven · 9 h-19 h</b></div>
        <div class="c-local-row"><span>Téléphone</span><a href="tel:+33374472018">+33 3 74 47 20 18</a></div>
      </div>
    </div>

    <div class="c-proof-mini reveal">
      <a href="/realisations/lmnp-ai" class="c-proof-item">
        <span>SaaS comptable</span>
        <b>LMNP.AI</b>
        <em>Produit en production, clients payants, automatisations métier.</em>
      </a>
      <a href="/realisations/sci-ai" class="c-proof-item">
        <span>Application métier</span>
        <b>SCI-AI.app</b>
        <em>Comptabilité SCI, parcours guidé, logique réglementaire.</em>
      </a>
      <a href="/realisations/hagnere-patrimoine" class="c-proof-item">
        <span>Acquisition B2B</span>
        <b>Hagnéré Patrimoine</b>
        <em>SEO, qualification commerciale, site premium orienté leads.</em>
      </a>
    </div>
  </div>
</section>

<!-- COMMENT ÇA SE PASSE -->
<section class="c-flow">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Comment ça se passe</div>
        <h2>Pas de ballet commercial.<br>On va droit au sujet.</h2>
      </div>
      <div class="right">
        Quatre étapes entre votre message et un devis ferme (ou une orientation honnête
        vers le bon confrère). Rien n'est engageant avant signature.
      </div>
    </div>

    <div class="c-flow-grid">
      <div class="c-flow-step reveal">
        <div class="c-flow-head">
          <div class="c-flow-num">01</div>
          <div class="c-flow-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
        </div>
        <h4>Vous nous écrivez</h4>
        <p>Formulaire, email, téléphone ou Calendly — selon ce qui vous va. Même brief flou, même idée floue : c'est OK.</p>
        <div class="c-flow-tag">Vous · quelques minutes</div>
      </div>

      <div class="c-flow-step reveal reveal-d-1">
        <div class="c-flow-head">
          <div class="c-flow-num">02</div>
          <div class="c-flow-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg></div>
        </div>
        <h4>Un associé vous répond</h4>
        <p>En pratique 3–6 h, garanti sous 24 h ouvrées. Vrai humain, pas un accusé de réception auto ni un chatbot.</p>
        <div class="c-flow-tag">Nous · sous 24 h</div>
      </div>

      <div class="c-flow-step reveal reveal-d-2">
        <div class="c-flow-head">
          <div class="c-flow-num">03</div>
          <div class="c-flow-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
        </div>
        <h4>30 min de cadrage offert</h4>
        <p>Visio ou téléphone. On écoute, on pose les bonnes questions, on donne un avis franc. Zéro engagement, zéro pression.</p>
        <div class="c-flow-tag">Ensemble · 30 min · gratuit</div>
      </div>

      <div class="c-flow-step reveal reveal-d-3">
        <div class="c-flow-head">
          <div class="c-flow-num">04</div>
          <div class="c-flow-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12l5 5L20 7"/></svg></div>
        </div>
        <h4>Devis ferme ou orientation</h4>
        <p>Soit on vous propose un forfait fixe avec date de livraison, soit on vous oriente vers le bon interlocuteur. Dans les deux cas, vous repartez avec une direction claire.</p>
        <div class="c-flow-tag">Vous décidez · J+5 max</div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ CONTACT -->
<section class="faq c-faq-wrap" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— Avant de nous écrire</div>
        <h2 style="margin-top:14px">Cinq questions<br>qui reviennent<br>tout le temps.</h2>
        <p>Si la vôtre n'est pas ci-dessous, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">glissez-la dans le formulaire</a>, on répond sous 24 h ouvrées.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">Je n'ai pas encore de brief précis — je vous dérange ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Non, au contraire.</b> La moitié de nos prospects arrive avec une idée mais pas de cahier des charges.
            C'est exactement le moment où un cadrage honnête vous fait gagner 3 mois. On vous pose les bonnes
            questions, vous repartez avec une direction claire — même si on ne bosse finalement pas ensemble.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">C'est gratuit, vraiment ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Oui, 100 %.</b> Le premier échange (30 min), le cadrage léger et l'avis franc sont gratuits.
            Si on décide ensemble de creuser, on passe à un Discovery Sprint payé (1 500 €, 2 jours,
            entièrement déduit du devis final). Aucune facturation avant signature d'un forfait.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Combien de temps avant votre réponse ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>24 h ouvrées maximum</b>, en pratique 3–6 h la plupart du temps. Le week-end et les jours
            fériés, on coupe : mieux vaut un associé reposé le lundi qu'un associé rincé le dimanche.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Et si mon projet n'est pas pour vous ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            On vous le dit en 2 minutes et on vous oriente. Réseau de confrères freelances et studios sur
            Chambéry, Lyon, Paris, Bordeaux. Si ce n'est pas Laravel, pas PME/ETI, pas web — on vous envoie
            vers le bon interlocuteur. <b>Zéro intérêt à vous garder chez nous si on n'est pas la bonne équipe.</b>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Je veux voir du code avant de vous parler.
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Normal. <a href="/realisations" style="color:var(--accent-ink);text-decoration:underline">Nos 4 projets publics</a>
            (LMNP.AI, SCI-AI, Hagnéré Patrimoine, Hagnéré Investissement) sont tous visitables en direct.
            Pendant l'appel de 30 min, on peut aussi vous faire une démo live en partage d'écran sur nos
            repos Git privés.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
