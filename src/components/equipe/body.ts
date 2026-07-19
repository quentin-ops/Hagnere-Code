import { navHtml } from "@/components/design-shared/nav-html";

export const bodyHtml = `
${navHtml}
<!-- BREADCRUMB -->
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">L'équipe</span>
  </div>
</div>

<!-- HERO -->
<section class="ehero">
  <div class="ehero-grid"></div>
  <div class="ehero-radial"></div>
  <div class="wrap ehero-inner">
    <div class="ehero-copy">
      <div class="ehero-eyebrow"><span class="pill hero-pill"><span class="dot"></span><span class="hero-pill-brand">L'équipe</span><span class="hero-pill-tag">Un gérant qui code · sept développeurs</span></span></div>
      <h1>L'équipe Hagnéré Code :<br>les développeurs full-stack qui<br><span class="accent">vont coder votre projet.</span></h1>
      <p class="ehero-sub">
        Pas de pool de freelances anonymes. Pas de sous-traitance offshore. Pas de white-label déguisé.
        <b>Un gérant associé codeur</b> et <b>sept développeurs</b> intégrés aux mêmes rituels —
        c'est cette équipe stable qui prend en charge votre projet du brief à la production,
        et qui reste vos interlocuteurs après.
      </p>
      <div class="ehero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Rencontrer l'équipe
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#fondateur" class="btn btn-ghost btn-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          Découvrir chacun
        </a>
      </div>
      <div class="ehero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Sept développeurs, tous nommés</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Pas de pool anonyme</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Studio à Chambéry</span>
      </div>
    </div>

    <!-- Visual : team mosaic preview -->
    <div class="ehero-visual">
      <div class="emos-frame">
        <div class="emos-header">
          <div class="emos-header-l"><span class="dot"></span> L'équipe complète</div>
          <div class="emos-header-r">ÉQUIPE NOMMÉE · CHAMBÉRY</div>
        </div>
        <div class="emos">
          <a class="emos-card emos-founder" href="#fondateur" aria-label="Voir Quentin Hagnéré">
            <div class="emos-avatar emos-avatar-founder">QH</div>
            <div class="emos-meta">
              <div class="emos-name">Quentin Hagnéré</div>
              <div class="emos-role">Fondateur</div>
            </div>
            <div class="emos-tag emos-tag-founder">ASSOCIÉ</div>
          </a>

          <a class="emos-card" href="#cto" aria-label="Voir Nicolas Wallerand">
            <div class="emos-avatar emos-avatar-cto">NW</div>
            <div class="emos-meta">
              <div class="emos-name">Nicolas Wallerand</div>
              <div class="emos-role">CTO</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#tech" aria-label="Voir Arthur Monney">
            <div class="emos-avatar emos-avatar-am">AM</div>
            <div class="emos-meta">
              <div class="emos-name">Arthur Monney</div>
              <div class="emos-role">Senior · Paiements</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#tech" aria-label="Voir Frédéric Curinckx">
            <div class="emos-avatar emos-avatar-fc">FC</div>
            <div class="emos-meta">
              <div class="emos-name">Frédéric Curinckx</div>
              <div class="emos-role">Senior · Livewire</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#tech" aria-label="Voir Ryan Mazzitelli">
            <div class="emos-avatar emos-avatar-rm">RM</div>
            <div class="emos-meta">
              <div class="emos-name">Ryan Mazzitelli</div>
              <div class="emos-role">Senior · IA</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#tech" aria-label="Voir Killian Hoarau">
            <div class="emos-avatar emos-avatar-kh">KH</div>
            <div class="emos-meta">
              <div class="emos-name">Killian Hoarau</div>
              <div class="emos-role">Senior · DevOps</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#tech" aria-label="Voir Peter Sum Sie Kung">
            <div class="emos-avatar emos-avatar-ps">PS</div>
            <div class="emos-meta">
              <div class="emos-name">Peter Sum Sie Kung</div>
              <div class="emos-role">Full-stack · PHP/JS</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>
        </div>

        <div class="emos-legend">
          <span class="emos-legend-dot" aria-hidden="true"></span>
          <span class="emos-legend-text">Cliquez sur une carte pour ouvrir le profil détaillé de la personne — <b>LinkedIn</b> pour la plupart, <b>Codeur.com</b> pour Peter.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- KPI BAR -->
<section class="kpi-bar">
  <div class="wrap">
    <div class="kpi-grid">
      <div class="kpi reveal">
        <div class="kpi-n">7<span class="kpi-s"></span></div>
        <div class="kpi-l">Développeurs travaillent<br>avec le gérant.</div>
      </div>
      <div class="kpi reveal reveal-d-1">
        <div class="kpi-n">5<span class="kpi-s">+</span></div>
        <div class="kpi-l">Années d'expérience<br>moyenne par personne.</div>
      </div>
      <div class="kpi reveal reveal-d-2">
        <div class="kpi-n">0<span class="kpi-s">%</span></div>
        <div class="kpi-l">Offshore, white-label,<br>pool anonyme.</div>
      </div>
      <div class="kpi reveal reveal-d-3">
        <div class="kpi-n">100<span class="kpi-s">%</span></div>
        <div class="kpi-l">De l'équipe outillée<br>avec Claude Code.</div>
      </div>
    </div>
  </div>
</section>

<!-- FONDATEUR — éditorial -->
<section class="founder" id="fondateur">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Le fondateur</div>
        <h2>Quentin Hagnéré.<br>Le brief, le design,<br>l'interlocuteur unique.</h2>
      </div>
      <div class="right">
        Quentin est l'expert qui prend votre appel, qui rédige les specs,
        qui dessine les écrans et qui reste votre point de contact pendant tout le projet.
        Il vient du <b>terrain métier</b>, pas du conseil — c'est ce qui fait la différence
        sur les premiers cadrages.
      </div>
    </div>

    <div class="founder-card reveal">
      <div class="founder-photo-wrap">
        <div class="founder-photo">
          <img src="/team/quentin.webp" alt="Quentin Hagnéré, gérant associé codeur de Hagnéré Code" loading="lazy" />
          <div class="founder-photo-tag">
            <span class="dot"></span>
            ASSOCIÉ DIRIGEANT
          </div>
        </div>

        <div class="founder-cards">
          <div class="founder-mini">
            <span class="founder-mini-k">3</span>
            <span class="founder-mini-l">entreprises fondées<br>(2 cabinets actifs)</span>
          </div>
          <div class="founder-mini">
            <span class="founder-mini-k">10+</span>
            <span class="founder-mini-l">ans à coder<br>en environnement métier</span>
          </div>
          <div class="founder-mini">
            <span class="founder-mini-k">100%</span>
            <span class="founder-mini-l">de vos appels<br>passent par lui</span>
          </div>
        </div>
      </div>

      <div class="founder-body">
        <div class="founder-head">
          <div>
            <h3 class="founder-name">Quentin Hagnéré</h3>
            <div class="founder-role">Gérant associé codeur — Brief client · Design · Front-end · Back-office</div>
          </div>
          <a class="founder-li" href="https://www.linkedin.com/in/quentin-hagnere" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Quentin Hagnéré">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Voir le profil LinkedIn
          </a>
        </div>

        <blockquote class="founder-quote">
          « Je viens du terrain. Je sais ce qu'un métier <em>attend</em> vraiment d'un outil,
          pas ce qu'un brief en parle. C'est ça que j'apporte à chaque projet : la capacité
          à challenger un besoin <em>avant</em> de l'écrire dans le code. »
        </blockquote>

        <div class="founder-section">
          <div class="founder-section-h">PARCOURS</div>
          <p>
            Quentin a fondé <b>3 entreprises</b> dans le patrimoine et le conseil, dont 2 cabinets
            toujours actifs aujourd'hui. Il code en parallèle depuis plus de 10 ans : front-end,
            design, intégration, back-offices React/Next.js. Le déclic Hagnéré Code est venu
            quand il s'est rendu compte qu'<b>aucune agence ne savait construire un outil métier
            sans le réduire à un cahier des charges</b>. D'où le studio.
          </p>
        </div>

        <div class="founder-section">
          <div class="founder-section-h">SUR VOS PROJETS</div>
          <ul class="founder-list">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> <b>Discovery &amp; cadrage métier</b> — c'est lui qui pose les bonnes questions.</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> <b>Design produit (Figma)</b> — wireframes, parcours, design system.</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> <b>Intégration front-end</b> — Tailwind, React, animations.</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> <b>Interlocuteur unique</b> — du brief à la livraison, et après.</li>
          </ul>
        </div>

        <div class="founder-stack">
          <div class="founder-stack-h">DOMAINES &amp; STACK</div>
          <div class="founder-stack-row">
            <span class="founder-stack-tag">Patrimoine</span>
            <span class="founder-stack-tag">Immobilier</span>
            <span class="founder-stack-tag">SaaS B2B</span>
            <span class="founder-stack-tag">Conseil RH</span>
          </div>
          <div class="founder-stack-row">
            <span class="founder-stack-tag mono">Figma</span>
            <span class="founder-stack-tag mono">Tailwind</span>
            <span class="founder-stack-tag mono">React</span>
            <span class="founder-stack-tag mono">Next.js</span>
            <span class="founder-stack-tag mono">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTO — éditorial -->
<section class="cto" id="cto">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Le CTO</div>
        <h2>Nicolas Wallerand.<br>L'architecte qui<br>tient la barre tech.</h2>
      </div>
      <div class="right">
        Quand Quentin attaque un brief, Nicolas attaque l'architecture.
        Sa mission : <b>garantir que ce qu'on livre tiendra 5 ans</b>, pas 3 mois.
        Code review systématique, choix techniques tranchés, vision long terme.
      </div>
    </div>

    <div class="cto-card reveal">
      <div class="cto-bg-grid"></div>
      <div class="cto-bg-radial"></div>

      <div class="cto-photo-wrap">
        <div class="cto-photo">
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="400" height="500" fill="#0f0f0f"/>
            <defs>
              <radialGradient id="ctoGrad" cx="50%" cy="30%" r="65%">
                <stop offset="0%" stop-color="#2a2a2a"/>
                <stop offset="100%" stop-color="#080808"/>
              </radialGradient>
            </defs>
            <rect width="400" height="500" fill="url(#ctoGrad)"/>
            <circle cx="200" cy="200" r="88" fill="#1f1f1f"/>
            <rect x="112" y="290" width="176" height="220" fill="#1f1f1f" rx="88"/>
            <text x="200" y="478" text-anchor="middle" font-family="Geist Mono" font-size="10" fill="#525252" letter-spacing="1">// PROFIL LINKEDIN</text>
          </svg>
          <div class="cto-photo-tag">
            <span class="dot"></span>
            CTO · ASSOCIÉ
          </div>
          <div class="cto-photo-name">NW</div>
        </div>
      </div>

      <div class="cto-body">
        <div class="cto-head">
          <div>
            <h3 class="cto-name">Nicolas Wallerand</h3>
            <div class="cto-role">CTO — Architecture · Code review · Cadrage technique</div>
          </div>
          <a class="cto-li" href="https://www.linkedin.com/in/nicolas-wallerand-86b0a079/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Nicolas Wallerand">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Voir LinkedIn
          </a>
        </div>

        <blockquote class="cto-quote">
          « Je n'écris pas du code pour faire fonctionner un truc demain.
          J'écris du code qu'<em>un autre dev pourra reprendre dans 5 ans</em> sans avoir
          envie de tout réécrire. C'est la définition que je donne à "qualité". »
        </blockquote>

        <div class="cto-grid">
          <div class="cto-block">
            <div class="cto-block-h">SPÉCIALITÉS</div>
            <ul class="cto-block-list">
              <li>Architecture Laravel 13 (Domain-Driven, Service Pattern)</li>
              <li>Cadrage technique de projets &gt; 60 k€</li>
              <li>Revue de code systématique (chaque PR)</li>
              <li>Mentorat &amp; montée en compétence des devs</li>
            </ul>
          </div>
          <div class="cto-block">
            <div class="cto-block-h">SUR VOS PROJETS</div>
            <ul class="cto-block-list">
              <li>Validation des choix d'architecture au cadrage</li>
              <li>Garant des standards qualité &amp; sécurité</li>
              <li>Point d'escalade pour toute question technique</li>
              <li>Comité produit mensuel sur les forfaits Care Pro</li>
            </ul>
          </div>
        </div>

        <div class="cto-stack">
          <span class="cto-stack-tag">ARCHITECTURE</span>
          <span class="cto-stack-tag">LARAVEL 13</span>
          <span class="cto-stack-tag">DDD</span>
          <span class="cto-stack-tag">PostgreSQL</span>
          <span class="cto-stack-tag">REDIS</span>
          <span class="cto-stack-tag">MANAGEMENT</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- L'ÉQUIPE TECH (4 devs) -->
<section class="tech" id="tech">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— L'équipe tech</div>
        <h2>Cinq développeurs seniors<br>aux compétences complémentaires.</h2>
      </div>
      <div class="right">
        Paiements, temps-réel, IA, DevOps, renforts full-stack. <b>Frédéric</b>, <b>Killian</b>,
        <b>Arthur</b>, <b>Ryan</b> et <b>Peter</b> sont intégrés aux mêmes rituels (daily, démo,
        revue de code) et travaillent tous sous la direction technique du CTO.
        Une équipe stable, sans pool externe.
      </div>
    </div>

    <div class="dev-grid">
      <!-- Arthur Monney -->
      <div class="dev-card reveal">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-am">AM</div>
          <a class="dev-li" href="https://www.linkedin.com/in/arthurmonney/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Arthur Monney" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <h3 class="dev-name">Arthur Monney</h3>
        <div class="dev-role">Senior Dev — Back-end Laravel · Paiements</div>
        <p class="dev-spec">
          Architecte des systèmes complexes : multi-tenant, facturation, paiements récurrents.
          Le go-to de l'équipe quand un client dit « il nous faut Stripe + Pennylane + comptabilité ».
        </p>
        <div class="dev-section">
          <div class="dev-section-h">SUR VOS PROJETS</div>
          <ul class="dev-section-list">
            <li>Architecture back-end Laravel</li>
            <li>Intégrations paiement (Stripe, GoCardless)</li>
            <li>Modèle de données &amp; migrations critiques</li>
          </ul>
        </div>
        <div class="dev-stack">
          <span>LARAVEL</span>
          <span>STRIPE</span>
          <span>MySQL</span>
          <span>PENNYLANE</span>
        </div>
        <div class="dev-foot">
          <span class="dev-foot-meta">5+ ans XP · Intégré à nos rituels</span>
        </div>
      </div>

      <!-- Frédéric Curinckx -->
      <div class="dev-card reveal reveal-d-1">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-fc">FC</div>
          <a class="dev-li" href="https://www.linkedin.com/in/frederic-curinckx/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Frédéric Curinckx" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <h3 class="dev-name">Frédéric Curinckx</h3>
        <div class="dev-role">Senior Dev — Laravel + Livewire · Temps-réel</div>
        <p class="dev-spec">
          Le maestro du Livewire / Flux UI. Construit des interfaces métier riches en quelques jours
          là où d'autres mettent des semaines. Spécialiste des formulaires complexes
          et des dashboards temps-réel.
        </p>
        <div class="dev-section">
          <div class="dev-section-h">SUR VOS PROJETS</div>
          <ul class="dev-section-list">
            <li>Interfaces Livewire / Flux UI</li>
            <li>Dashboards temps-réel &amp; reactive forms</li>
            <li>Queues, jobs, scheduled tasks</li>
          </ul>
        </div>
        <div class="dev-stack">
          <span>LARAVEL</span>
          <span>LIVEWIRE</span>
          <span>FLUX UI</span>
          <span>ALPINE.JS</span>
        </div>
        <div class="dev-foot">
          <span class="dev-foot-meta">5+ ans XP · Intégré à nos rituels</span>
        </div>
      </div>

      <!-- Ryan Mazzitelli -->
      <div class="dev-card reveal reveal-d-2">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-rm">RM</div>
          <a class="dev-li" href="https://www.linkedin.com/in/ryan-mazzitelli-907716262/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Ryan Mazzitelli" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <h3 class="dev-name">Ryan Mazzitelli</h3>
        <div class="dev-role">Senior Dev — Laravel + IA · Agents Claude</div>
        <p class="dev-spec">
          Le pont entre Laravel et l'IA. Construit les agents Claude, les RAG, les pipelines
          d'extraction et les intégrations LLM. Notre spécialiste pour transformer un dossier
          PDF en données structurées exploitables.
        </p>
        <div class="dev-section">
          <div class="dev-section-h">SUR VOS PROJETS</div>
          <ul class="dev-section-list">
            <li>Agents IA (Claude, GPT-4o, Mistral)</li>
            <li>RAG &amp; bases vectorielles (Pinecone, pgvector)</li>
            <li>Webhooks, APIs tierces, queues IA</li>
          </ul>
        </div>
        <div class="dev-stack">
          <span>LARAVEL</span>
          <span>CLAUDE</span>
          <span>PRISM</span>
          <span>PGVECTOR</span>
        </div>
        <div class="dev-foot">
          <span class="dev-foot-meta">5+ ans XP · Intégré à nos rituels</span>
        </div>
      </div>

      <!-- Killian Hoarau -->
      <div class="dev-card reveal reveal-d-3">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-kh">KH</div>
          <a class="dev-li" href="https://www.linkedin.com/in/killian-hoarau-960927138/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Killian Hoarau" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <h3 class="dev-name">Killian Hoarau</h3>
        <div class="dev-role">Senior Dev — Laravel + DevOps · Infrastructure</div>
        <p class="dev-spec">
          Le gardien de l'infra. Docker, CI/CD, monitoring, backups, sécurité.
          C'est lui qui s'assure que vos serveurs tiennent un pic de charge à 3 h du matin
          et que vos données sont restaurables en moins de 15 minutes.
        </p>
        <div class="dev-section">
          <div class="dev-section-h">SUR VOS PROJETS</div>
          <ul class="dev-section-list">
            <li>Infrastructure Scaleway / OVH / AWS</li>
            <li>CI/CD GitHub Actions, déploiements zero-downtime</li>
            <li>Monitoring, alerting, audits sécurité</li>
          </ul>
        </div>
        <div class="dev-stack">
          <span>LARAVEL</span>
          <span>DOCKER</span>
          <span>AWS</span>
          <span>FORGE</span>
        </div>
        <div class="dev-foot">
          <span class="dev-foot-meta">5+ ans XP · Intégré à nos rituels</span>
        </div>
      </div>

      <!-- Peter Sum Sie Kung -->
      <div class="dev-card reveal reveal-d-4">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-ps">PS</div>
          <a class="dev-li" href="https://www.codeur.com/-peterssk" target="_blank" rel="noopener noreferrer" aria-label="Profil Codeur Peter Sum Sie Kung" title="Profil Codeur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
          </a>
        </div>
        <h3 class="dev-name">Peter Sum Sie Kung</h3>
        <div class="dev-role">Dev confirmé — Full-stack PHP / Laravel / Symfony</div>
        <p class="dev-spec">
          Le couteau suisse back + front. Quand il faut produire vite et propre — endpoints API,
          intégrations, refactor — Peter livre. Bilingue PHP (Laravel, Symfony) et JS
          moderne (React, Vue.js), il enchaîne backend critique et UI sans rupture de tempo.
        </p>
        <div class="dev-section">
          <div class="dev-section-h">SUR VOS PROJETS</div>
          <ul class="dev-section-list">
            <li>API Laravel / Symfony, modélisation BDD, intégrations tierces</li>
            <li>Front React / Vue.js, composants métier, intégration depuis maquettes</li>
            <li>Renfort sprints courts ou modules délimités (1-3 sem.)</li>
          </ul>
        </div>
        <div class="dev-stack">
          <span>PHP</span>
          <span>LARAVEL</span>
          <span>SYMFONY</span>
          <span>REACT</span>
          <span>VUE.JS</span>
          <span>DOCKER</span>
          <span>MYSQL</span>
        </div>
        <div class="dev-foot">
          <span class="dev-foot-meta">3+ ans XP · Intégré à nos rituels</span>
        </div>
      </div>
    </div>

    <p class="tech-note reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <span>Chaque carte ouvre le profil de la personne (LinkedIn pour la plupart, Codeur pour Peter).</span>
    </p>
  </div>
</section>

<!-- STACK COLLECTIVE -->
<section class="stack-collective">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Compétences combinées</div>
        <h2>Ce que l'équipe sait<br>vraiment faire ensemble.</h2>
      </div>
      <div class="right">
        Mises bout à bout, les compétences de l'équipe couvrent l'intégralité d'un projet
        moderne : du design produit à l'IA, en passant par les paiements et la sécurité.
        Pas besoin de sous-traiter quoi que ce soit.
      </div>
    </div>

    <div class="stack-rows reveal">
      <div class="stack-row">
        <div class="stack-row-k">PRODUIT &amp; DESIGN</div>
        <div class="stack-row-v">
          <span class="sk-chip">Discovery / cadrage</span>
          <span class="sk-chip">Wireframing Figma</span>
          <span class="sk-chip">Design system</span>
          <span class="sk-chip">UI/UX produit</span>
          <span class="sk-chip">Tests utilisateurs</span>
        </div>
      </div>

      <div class="stack-row">
        <div class="stack-row-k">FRONT-END</div>
        <div class="stack-row-v">
          <span class="sk-chip mono">React 19</span>
          <span class="sk-chip mono">Next.js 16</span>
          <span class="sk-chip mono">TypeScript</span>
          <span class="sk-chip mono">Tailwind CSS</span>
          <span class="sk-chip mono">Radix UI</span>
          <span class="sk-chip mono">React Native + Expo</span>
        </div>
      </div>

      <div class="stack-row">
        <div class="stack-row-k">BACK-END</div>
        <div class="stack-row-v">
          <span class="sk-chip mono">Next.js 16 · Node</span>
          <span class="sk-chip mono">TypeScript</span>
          <span class="sk-chip mono">Drizzle ORM</span>
          <span class="sk-chip mono">Auth.js</span>
          <span class="sk-chip mono">React Server Components</span>
          <span class="sk-chip mono">Laravel / PHP (reprises)</span>
        </div>
      </div>

      <div class="stack-row">
        <div class="stack-row-k">DATA &amp; STOCKAGE</div>
        <div class="stack-row-v">
          <span class="sk-chip mono">PostgreSQL</span>
          <span class="sk-chip mono">MySQL</span>
          <span class="sk-chip mono">Redis</span>
          <span class="sk-chip mono">pgvector</span>
          <span class="sk-chip mono">S3</span>
          <span class="sk-chip mono">BigQuery</span>
        </div>
      </div>

      <div class="stack-row">
        <div class="stack-row-k">IA &amp; AGENTS</div>
        <div class="stack-row-v">
          <span class="sk-chip mono">Claude Sonnet / Opus</span>
          <span class="sk-chip mono">GPT-4o</span>
          <span class="sk-chip mono">Mistral</span>
          <span class="sk-chip mono">Prism</span>
          <span class="sk-chip mono">Pinecone</span>
          <span class="sk-chip mono">RAG</span>
        </div>
      </div>

      <div class="stack-row">
        <div class="stack-row-k">PAIEMENTS &amp; FACTURATION</div>
        <div class="stack-row-v">
          <span class="sk-chip mono">Stripe</span>
          <span class="sk-chip mono">GoCardless</span>
          <span class="sk-chip mono">Pennylane</span>
          <span class="sk-chip mono">Cashier</span>
          <span class="sk-chip mono">Mollie</span>
        </div>
      </div>

      <div class="stack-row">
        <div class="stack-row-k">INFRA &amp; DEVOPS</div>
        <div class="stack-row-v">
          <span class="sk-chip mono">Scaleway</span>
          <span class="sk-chip mono">OVH</span>
          <span class="sk-chip mono">AWS</span>
          <span class="sk-chip mono">Docker</span>
          <span class="sk-chip mono">Forge / Vapor</span>
          <span class="sk-chip mono">GitHub Actions</span>
          <span class="sk-chip mono">Sentry</span>
        </div>
      </div>

      <div class="stack-row">
        <div class="stack-row-k">SÉCURITÉ &amp; CONFORMITÉ</div>
        <div class="stack-row-v">
          <span class="sk-chip mono">RGPD by design</span>
          <span class="sk-chip mono">Audit OWASP</span>
          <span class="sk-chip mono">2FA / SSO</span>
          <span class="sk-chip mono">Hashing</span>
          <span class="sk-chip mono">Hébergement FR</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MÉTHODE / RITUALS -->
<section class="rituals">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Comment on travaille</div>
        <h2>Quatre rituels<br>qui font qu'on tient<br>nos délais.</h2>
      </div>
      <div class="right">
        Notre productivité ne vient pas de la pression ou des heures sup'.
        Elle vient de quatre rituels simples, tenus religieusement chaque semaine.
        Si on ne les respecte pas, on dérive — donc on les respecte.
      </div>
    </div>

    <div class="rit-grid">
      <div class="rit-card reveal">
        <div class="rit-num">01</div>
        <div class="rit-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 7v5l3 2"/></svg>
        </div>
        <h3>Daily 10 min · 9 h 30</h3>
        <p>Tous les jours, en visio. Chacun dit ce qu'il fait, ce qui le bloque. 10 minutes max — au-delà, on prend un call dédié. Pas de réunion qui dérape.</p>
        <div class="rit-foot">
          <span class="rit-tag">CHAQUE JOUR</span>
        </div>
      </div>

      <div class="rit-card reveal reveal-d-1">
        <div class="rit-num">02</div>
        <div class="rit-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <h3>Demo client · vendredi 16 h</h3>
        <p>Chaque vendredi, on partage l'écran et on montre ce qui a avancé cette semaine. Vous voyez le produit prendre forme, vous redonnez du feedback, on avance dans la bonne direction.</p>
        <div class="rit-foot">
          <span class="rit-tag">CHAQUE SEMAINE</span>
        </div>
      </div>

      <div class="rit-card reveal reveal-d-2">
        <div class="rit-num">03</div>
        <div class="rit-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
        </div>
        <h3>Code review · chaque PR</h3>
        <p>Aucun code ne part en production sans avoir été lu par au moins un autre dev senior. Le CTO valide les choix architecturaux. Ça nous coûte du temps, ça nous évite des bugs.</p>
        <div class="rit-foot">
          <span class="rit-tag">CHAQUE PR</span>
        </div>
      </div>

      <div class="rit-card reveal reveal-d-3">
        <div class="rit-num">04</div>
        <div class="rit-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>Retro mensuelle · 1 h</h3>
        <p>Une fois par mois, on regarde ce qui a marché, ce qui a dérapé, ce qu'on change. Pas de blâme, pas de posture. C'est ce rituel qui fait qu'on s'améliore mois après mois.</p>
        <div class="rit-foot">
          <span class="rit-tag">CHAQUE MOIS</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CLAUDE CODE -->
<section class="claude">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Notre multiplicateur</div>
        <h2>Augmentés par<br><span class="grad-accent">Claude Code.</span></h2>
      </div>
      <div class="right">
        Chaque dev de l'équipe pilote Claude Code (l'agent de développement d'Anthropic)
        au quotidien. Pas pour <i>remplacer</i> le code, pour <b>aller plus vite sur les phases d'exploration,
        de cadrage et de recherche</b>. Le résultat : 3× plus productifs sur les tâches non-créatives.
      </div>
    </div>

    <div class="claude-card reveal">
      <div class="claude-bg-grid"></div>
      <div class="claude-bg-radial"></div>

      <div class="claude-left">
        <div class="claude-tag">
          <span>MÉTHODE</span>
          <span>Claude Code · Anthropic</span>
        </div>
        <h3>Vous décrivez le besoin.<br><span class="accent">On gère le reste.</span></h3>
        <p class="claude-lead">
          Pas de « 36 000 questions au client » : nos devs s'appuient sur Claude Code pour
          <b>faire la recherche eux-mêmes</b>. Cadrage juridique, exploration technique,
          plans d'implémentation, audit du code existant — Claude défriche, nos seniors valident.
          Vous n'avez qu'à valider le résultat.
        </p>

        <div class="claude-bullets">
          <div class="claude-bullet">
            <div class="claude-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>Recherche &amp; veille</b><br>
              <span>Claude lit la doc, les SDK, les normes RGPD à votre place.</span>
            </div>
          </div>
          <div class="claude-bullet">
            <div class="claude-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>Plans d'implémentation</b><br>
              <span>Architecture proposée, validée par le CTO, livrée par le dev.</span>
            </div>
          </div>
          <div class="claude-bullet">
            <div class="claude-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>Code review augmentée</b><br>
              <span>Bug spotter, refacto suggestions, tests générés automatiquement.</span>
            </div>
          </div>
          <div class="claude-bullet">
            <div class="claude-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>Documentation automatique</b><br>
              <span>Specs, README, runbooks — toujours à jour, sans effort manuel.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="claude-right">
        <div class="claude-stat">
          <div class="claude-stat-ic">
            <svg viewBox="0 0 512 512" fill="#D97757" aria-hidden="true" width="40" height="40"><path d="M301.86 65h70.94l129.4 382h-70.93l-26.48-81.3H269.2l-26.48 81.3h-70.94L301.86 65zm-11.96 240h94.86l-47.43-145.7L289.9 305z"/></svg>
          </div>
          <div class="claude-stat-n">×3</div>
          <div class="claude-stat-l">Productivité moyenne sur les tâches non-créatives.</div>
        </div>
        <div class="claude-stat">
          <div class="claude-stat-ic">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div class="claude-stat-n">−40%</div>
          <div class="claude-stat-l">Sur le temps de cadrage technique d'un projet moyen.</div>
        </div>
        <div class="claude-stat">
          <div class="claude-stat-ic">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div class="claude-stat-n">100%</div>
          <div class="claude-stat-l">Code reviewé par un humain avant mise en prod.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ENGAGEMENTS / VALEURS -->
<section class="values">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Nos engagements</div>
        <h2>Ce qu'on vous garantit<br>en tant qu'équipe.</h2>
      </div>
      <div class="right">
        Six engagements écrits noir sur blanc dans nos contrats.
        Si on les enfreint, on rembourse — c'est notre contrat moral avec chaque client.
      </div>
    </div>

    <div class="val-grid">
      <div class="val-card reveal">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <h4>Interlocuteur unique</h4>
        <p>Quentin reste votre point de contact du brief à la livraison, et après. Pas de tournante de chefs de projet, pas de relance à 6 personnes différentes.</p>
      </div>

      <div class="val-card reveal reveal-d-1">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/></svg>
        </div>
        <h4>Pas de sous-traitance anonyme</h4>
        <p>Aucun pool anonyme, aucun offshore, aucun white-label. Chaque personne qui touche votre code est <b>nommée</b>, intégrée à nos rituels et signe un NDA — un gérant qui code et <b>sept développeurs</b>, point.</p>
      </div>

      <div class="val-card reveal reveal-d-2">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h4>Niveau senior &amp; encadrement</h4>
        <p>5+ ans d'expérience pour tous les seniors (Arthur, Ryan, Frédéric, Killian), CTO inclus. Notre dev confirmé Peter (3+ ans XP, full-stack PHP/JS) opère <b>toujours sous code review</b> du CTO et d'un senior. Personne n'apprend le métier en solo sur un projet.</p>
      </div>

      <div class="val-card reveal reveal-d-3">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
        </div>
        <h4>Code &amp; data chez vous</h4>
        <p>Repo Git sur votre compte dès J+1. Données hébergées en France sous votre nom. Vous pouvez à tout moment tout récupérer et le faire travailler par une autre équipe.</p>
      </div>

      <div class="val-card reveal">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        </div>
        <h4>Honnêteté dans le diagnostic</h4>
        <p>Si on n'est pas la bonne équipe pour vous, on vous le dit dès le call de cadrage et on vous oriente ailleurs. Gratuitement. C'est arrivé 8 fois en 2 ans.</p>
      </div>

      <div class="val-card reveal reveal-d-1">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        </div>
        <h4>Délais tenus</h4>
        <p>Date de livraison fixée et <b>contractualisée au cadrage</b>. Pénalité de retard prévue dans chaque devis. Si on dérape, c'est nous qui payons — pas vous.</p>
      </div>
    </div>
  </div>
</section>

<!-- ON RECRUTE -->
<section class="recrute">
  <div class="wrap">
    <div class="rec-card reveal">
      <div class="rec-bg-grid"></div>
      <div class="rec-bg-radial"></div>

      <div class="rec-left">
        <div class="rec-tag">
          <span>RECRUTEMENT</span>
          <span>On grandit, lentement.</span>
        </div>
        <h3>On recrute<br><span class="accent">les bons profils.</span></h3>
        <p class="rec-lead">
          On ne grossit pas pour grossir. On recrute <b>une à deux personnes par an</b>,
          uniquement quand on identifie une compétence manquante qui freine la production.
          Si vous reconnaissez votre profil ci-dessous, écrivez-nous — on étudie chaque candidature
          sous 5 jours ouvrés.
        </p>

        <div class="rec-jobs">
          <div class="rec-job">
            <div class="rec-job-status open">
              <span class="dot"></span>
              POSTE OUVERT · PROCHAIN CYCLE
            </div>
            <div class="rec-job-name">Designer produit / UX senior</div>
            <div class="rec-job-meta">CDI · Chambéry · 5+ ans · Figma + design system</div>
          </div>
          <div class="rec-job">
            <div class="rec-job-status soon">
              <span class="dot"></span>
              PIPELINE · PROCHAINEMENT
            </div>
            <div class="rec-job-name">Senior Dev — Front-end React/Next</div>
            <div class="rec-job-meta">CDI · Chambéry · 5+ ans · React + TypeScript + Next.js</div>
          </div>
        </div>
      </div>

      <div class="rec-right">
        <div class="rec-cta-card">
          <div class="rec-cta-tag">CANDIDATURES SPONTANÉES</div>
          <h4>Vous ne trouvez pas votre poste ?</h4>
          <p>Si vous êtes <b>5+ ans d'expérience</b>, basé(e) ou prêt(e) à venir à Chambéry, et aligné(e) avec nos valeurs, on étudie votre CV.</p>
          <a href="mailto:quentin@hagnere-patrimoine.fr?subject=Candidature%20spontan%C3%A9e" class="btn btn-accent">
            Envoyer ma candidature
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="rec-cta-meta">Réponse sous 5 jours ouvrés · par un expert</div>
        </div>

        <div class="rec-criteria">
          <div class="rec-cri-h">CE QU'ON CHERCHE</div>
          <ul>
            <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> 5+ ans d'expérience pro</li>
            <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Goût pour le craft &amp; les bons outils</li>
            <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Capacité à communiquer avec des non-techs</li>
            <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Envie de bosser en équipe restreinte</li>
            <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Basé / prêt à venir à Chambéry</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— Questions fréquentes</div>
        <h2 style="margin-top:14px">Sur l'équipe.<br>Et la collaboration.</h2>
        <p>Manquante ? <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">Posez-la directement</a>, on répond sous 24 h ouvrées.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">
            Qui sera mon interlocuteur pendant le projet ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Quentin</b> (le fondateur) reste votre interlocuteur principal du brief à la livraison,
            pour tout ce qui touche au produit, au cadrage et au design. <b>Nicolas</b> (CTO)
            intervient sur les questions d'architecture et de jalons techniques.
            Le <b>dev référent</b> du projet est nommé au cadrage et reste le même jusqu'à la livraison —
            pas de tournante, pas de chef de projet intermédiaire.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Travaillez-vous avec un pool externe ou de la sous-traitance ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Pas de pool anonyme, jamais.</b> Un gérant associé codeur (Quentin) et
            <b>sept développeurs</b> — Nicolas au CTO, Frédéric, Killian, Arthur et Ryan en seniors,
            Peter en dev confirmé — tous intégrés à nos rituels (daily, code review, démo),
            tous sous NDA, tous nommés sur cette page. Pas de sous-traitance offshore, pas de white-label,
            aucune rotation d'inconnus à chaque projet.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Tout le monde travaille à distance ou en local ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Mixte.</b> Le studio physique est à Bassens, aux portes de Chambéry (82 impasse de Bellevue), où l'équipe
            se retrouve <b>2 à 3 jours par semaine</b>. Les autres jours, télétravail.
            Les rituels (daily, planning, démo) sont systématiquement en visio pour garantir
            la même expérience à tout le monde, télétravailleur ou pas.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Que se passe-t-il si Quentin ou un dev clé est malade ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Tout passe par notre repo Git, notre Linear et notre documentation interne.
            Le <b>bus factor est de 2 minimum</b> sur chaque projet : un dev référent
            + un binôme qui peut prendre le relais immédiatement, sans rien perdre du contexte.
            Aucune information critique ne reste dans la tête d'une seule personne. Si Quentin
            est indisponible &gt; 48 h, c'est Nicolas qui prend le relais commercial.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Quel est le niveau d'expérience moyen de l'équipe ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>5 ans et plus</b> pour le fondateur, le CTO et les quatre seniors full-stack.
            Peter est <b>dev confirmé</b> (3+ ans XP) et travaille
            <b>toujours sous revue de code</b> du CTO et d'un senior — il n'est jamais seul
            décisionnaire sur un projet. Personne en stage, personne en alternance, personne en
            première année.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous parlez beaucoup de Claude Code — l'IA code à votre place ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Non.</b> Claude Code est un assistant de développement (recherche, exploration,
            plans d'implémentation) que <b>chaque dev pilote activement</b>. Le code commit
            est revu par un humain à 100 %. Cela nous permet d'aller environ 3 fois plus vite
            sur les phases d'exploration et de cadrage, et de poser <b>moins de questions</b>
            au client (« j'ai déjà demandé à Claude pour ce point, voilà ce que ça donne, valide-tu ? »).
            Vous bénéficiez de la productivité, vous ne payez pas le surcoût d'une équipe IA.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous recrutez ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Toujours</b> pour des profils alignés. Le prochain recrutement prévu
            est un <b>Designer produit / UX senior</b>. Les candidatures spontanées sont étudiées
            sous 5 jours ouvrés à <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a> —
            uniquement profils 5+ ans d'expérience, basés ou prêts à venir à Chambéry.
            On répond systématiquement, même si c'est négatif.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Et les compétences que vous n'avez pas en interne ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            On a un cercle restreint de <b>partenaires de confiance</b> (motion designer,
            spécialiste légal RGPD, expert SEO senior) sur des compétences ponctuelles
            qu'on ne maintient pas en interne. C'est <b>toujours mentionné transparentement</b>
            dans le devis, et c'est nous qui restons votre interlocuteur unique — vous n'avez
            jamais à gérer ces partenaires directement.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
