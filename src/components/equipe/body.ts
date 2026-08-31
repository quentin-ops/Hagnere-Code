import { navHtml } from "@/components/design-shared/nav-html";
import {
  TEAM_OTHER_DEVELOPERS_COUNT,
  TEAM_PUBLIC_COMPOSITION,
  TEAM_TOTAL_COUNT,
} from "@/lib/team";

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
      <div class="ehero-eyebrow"><span class="pill hero-pill"><span class="dot"></span><span class="hero-pill-brand">L'équipe</span><span class="hero-pill-tag">${TEAM_TOTAL_COUNT} personnes · toutes nommées</span></span></div>
      <h1>L'équipe Hagnéré Code :<br>les développeurs full-stack qui<br><span class="accent">vont coder votre projet.</span></h1>
      <p class="ehero-sub">
        Pas de pool de freelances anonymes. Pas de sous-traitance offshore. Pas de white-label déguisé.
        <b>${TEAM_PUBLIC_COMPOSITION}</b>. Toute l'équipe partage les mêmes rituels, du brief
        à la production ; les personnes affectées à votre projet, leur rôle et leurs relais
        sont nommés dans le devis.
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
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Équipe complète de ${TEAM_TOTAL_COUNT} personnes</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Pas de pool anonyme</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Studio à Bassens</span>
      </div>
    </div>

    <!-- Visual : team mosaic preview -->
    <div class="ehero-visual">
      <div class="emos-frame">
        <div class="emos-header">
          <div class="emos-header-l"><span class="dot"></span> L'équipe complète</div>
          <div class="emos-header-r">ÉQUIPE NOMMÉE · BASSENS</div>
        </div>
        <div class="emos">
          <a class="emos-card emos-founder" href="#fondateur" aria-label="Aller à la présentation de Quentin Hagnéré, plus bas sur cette page">
            <div class="emos-avatar emos-avatar-founder"><img src="/team/quentin.webp" alt="Quentin Hagnéré" width="60" height="60" loading="lazy" decoding="async" /></div>
            <div class="emos-meta">
              <div class="emos-name">Quentin Hagnéré</div>
              <div class="emos-role">Fondateur</div>
            </div>
            <div class="emos-tag emos-tag-founder">ASSOCIÉ</div>
          </a>

          <a class="emos-card" href="#cto" aria-label="Aller à la présentation de Nicolas Wallerand, plus bas sur cette page">
            <div class="emos-avatar emos-avatar-cto"><img src="/team/nicolas.webp" alt="Nicolas Wallerand" width="54" height="54" loading="lazy" decoding="async" /></div>
            <div class="emos-meta">
              <div class="emos-name">Nicolas Wallerand</div>
              <div class="emos-role">CTO</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#dev-arthur" aria-label="Aller à la fiche d'Arthur Monney, plus bas sur cette page">
            <div class="emos-avatar emos-avatar-am"><img src="/team/arthur.webp" alt="Arthur Monney" width="54" height="54" loading="lazy" decoding="async" /></div>
            <div class="emos-meta">
              <div class="emos-name">Arthur Monney</div>
              <div class="emos-role">Senior · Paiements</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#dev-frederic" aria-label="Aller à la fiche de Frédéric Curinckx, plus bas sur cette page">
            <div class="emos-avatar emos-avatar-fc"><img src="/team/frederic.jpeg" alt="Frédéric Curinckx" width="54" height="54" loading="lazy" decoding="async" /></div>
            <div class="emos-meta">
              <div class="emos-name">Frédéric Curinckx</div>
              <div class="emos-role">Senior · Livewire</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#dev-ryan" aria-label="Aller à la fiche de Ryan Mazzitelli, plus bas sur cette page">
            <div class="emos-avatar emos-avatar-rm"><img src="/team/ryan.jpeg" alt="Ryan Mazzitelli" width="54" height="54" loading="lazy" decoding="async" /></div>
            <div class="emos-meta">
              <div class="emos-name">Ryan Mazzitelli</div>
              <div class="emos-role">Senior · IA</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#dev-killian" aria-label="Aller à la fiche de Killian Hoarau, plus bas sur cette page">
            <div class="emos-avatar emos-avatar-kh"><img src="/team/killian.webp" alt="Killian Hoarau" width="54" height="54" loading="lazy" decoding="async" /></div>
            <div class="emos-meta">
              <div class="emos-name">Killian Hoarau</div>
              <div class="emos-role">Senior · DevOps</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>

          <a class="emos-card" href="#dev-peter" aria-label="Aller à la fiche de Peter Sum Sie Kung, plus bas sur cette page">
            <div class="emos-avatar emos-avatar-ps"><img src="/team/peter.webp" alt="Peter Sum Sie Kung" width="54" height="54" loading="lazy" decoding="async" /></div>
            <div class="emos-meta">
              <div class="emos-name">Peter Sum Sie Kung</div>
              <div class="emos-role">Full-stack · PHP/JS</div>
            </div>
            <span class="emos-card-arrow" aria-hidden="true"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>
        </div>

        <div class="emos-legend">
          <span class="emos-legend-dot" aria-hidden="true"></span>
          <span class="emos-legend-text">Cliquez sur une carte pour rejoindre la présentation détaillée de la personne, plus bas sur cette page. Sa fiche porte le lien vers son profil public — <b>LinkedIn</b>, ou <b>Codeur.com</b> pour Peter.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- KPI BAR -->
<section class="kpi-bar" aria-label="Repères chiffrés de l'équipe">
  <div class="wrap">
    <div class="kpi-grid">
      <div class="kpi reveal">
        <div class="kpi-n">${TEAM_TOTAL_COUNT}<span class="kpi-s"></span></div>
        <div class="kpi-l">Personnes au total,<br>président et CTO compris.</div>
      </div>
      <div class="kpi reveal reveal-d-1">
        <div class="kpi-n">${TEAM_OTHER_DEVELOPERS_COUNT}<span class="kpi-s"></span></div>
        <div class="kpi-l">Développeurs en plus<br>du président et du CTO.</div>
      </div>
      <div class="kpi reveal reveal-d-2">
        <div class="kpi-n">0<span class="kpi-s">%</span></div>
        <div class="kpi-l">Offshore, white-label,<br>pool anonyme.</div>
      </div>
      <!-- Repère vérifiable sur cette page même : chaque personne renvoie vers
           son profil public (LinkedIn, ou Codeur pour Peter). Verrouillé par
           content-claims.test.ts. -->
      <div class="kpi reveal reveal-d-3">
        <div class="kpi-n kpi-n-word">NOMMÉS<span class="kpi-s"></span></div>
        <div class="kpi-l">Profil public consultable<br>pour chacun des ${TEAM_TOTAL_COUNT}.</div>
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
        <h2>Quentin Hagnéré.<br>Le cadrage, le design,<br>l'interlocuteur principal.</h2>
      </div>
      <div class="right">
        Quentin pilote le premier échange et peut intervenir sur les spécifications,
        le design et le suivi. Son rôle, sa disponibilité et les autres interlocuteurs
        sont nommés dans le devis pour chaque projet.
        Il vient du <b>terrain métier</b>, pas du conseil — c'est ce qui fait la différence
        sur les premiers cadrages.
      </div>
    </div>

    <div class="founder-card reveal">
      <div class="founder-photo-wrap">
        <div class="founder-photo">
          <img src="/team/quentin.webp" alt="Quentin Hagnéré, président fondateur codeur de Hagnéré Code" width="740" height="926" loading="lazy" decoding="async" />
          <div class="founder-photo-tag">
            <span class="dot"></span>
            PRÉSIDENT FONDATEUR
          </div>
        </div>

        <div class="founder-cards">
          <div class="founder-mini">
            <span class="founder-mini-k">QH</span>
            <span class="founder-mini-l">président fondateur<br>et interlocuteur de cadrage</span>
          </div>
          <div class="founder-mini">
            <span class="founder-mini-k">10+</span>
            <span class="founder-mini-l">ans à coder<br>en environnement métier</span>
          </div>
          <div class="founder-mini">
            <span class="founder-mini-k">DIRECT</span>
            <span class="founder-mini-l">rôle et disponibilité<br>confirmés au devis</span>
          </div>
        </div>
      </div>

      <div class="founder-body">
        <div class="founder-head">
          <div>
            <h3 class="founder-name">Quentin Hagnéré</h3>
            <div class="founder-role">Président fondateur codeur — Brief client · Design · Front-end · Back-office</div>
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
            Quentin développe des activités dans le patrimoine, le conseil et le logiciel métier.
            Il code depuis plus de 10 ans : front-end, design, intégration et back-offices
            React/Next.js. Hagnéré Code est né de la volonté de relier le besoin métier, les décisions
            de conception et les critères de recette, sans réduire le projet à une simple liste de fonctions.
          </p>
        </div>

        <div class="founder-section">
          <div class="founder-section-h">SUR VOS PROJETS</div>
          <ul class="founder-list">
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> <b>Discovery &amp; cadrage métier</b> — c'est lui qui pose les bonnes questions.</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> <b>Design produit (Figma)</b> — wireframes, parcours, design system.</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> <b>Intégration front-end</b> — Tailwind, React, animations.</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> <b>Interlocuteur principal</b> — rôle et disponibilité confirmés au devis.</li>
          </ul>
        </div>

        <div class="founder-stack">
          <div class="founder-stack-h">DOMAINES &amp; STACK</div>
          <div class="founder-stack-row">
            <span class="founder-stack-tag">Patrimoine</span>
            <span class="founder-stack-tag">Immobilier</span>
            <span class="founder-stack-tag">SaaS B2B</span>
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
        Sa mission : <b>concevoir une architecture maintenable et documenter ses compromis</b>.
        Revue de code, choix techniques et critères de pérennité sont adaptés à la mission.
      </div>
    </div>

    <div class="cto-card reveal">
      <div class="cto-bg-grid"></div>
      <div class="cto-bg-radial"></div>

      <div class="cto-photo-wrap">
        <div class="cto-photo">
          <img src="/team/nicolas.webp" alt="Nicolas Wallerand, CTO de Hagnéré Code" width="600" height="600" loading="lazy" decoding="async" />
          <div class="cto-photo-tag">
            <span class="dot"></span>
            CTO · ASSOCIÉ
          </div>
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
              <li>Cadrage technique de projets à fort périmètre</li>
              <li>Revue de code selon le protocole et les risques du projet</li>
              <li>Mentorat &amp; montée en compétence des devs</li>
            </ul>
          </div>
          <div class="cto-block">
            <div class="cto-block-h">SUR VOS PROJETS</div>
            <ul class="cto-block-list">
              <li>Validation des choix d'architecture au cadrage</li>
              <li>Garant des standards qualité &amp; sécurité</li>
              <li>Point d'escalade pour toute question technique</li>
              <li>Comité produit lorsqu'il est prévu au contrat de maintenance</li>
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
        <h2>Quatre seniors et un développeur confirmé,<br>aux compétences complémentaires.</h2>
      </div>
      <div class="right">
        Paiements, temps-réel, IA, DevOps, renforts full-stack. <b>Frédéric</b>, <b>Killian</b>,
        <b>Arthur</b>, <b>Ryan</b> et <b>Peter</b> sont intégrés aux mêmes rituels (daily, démo,
        revue de code) et travaillent tous sous la direction technique du CTO.
        Une équipe nommée, sans pool externe.
      </div>
    </div>

    <div class="dev-grid">
      <!-- Arthur Monney -->
      <div class="dev-card reveal" id="dev-arthur">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-am"><img src="/team/arthur.webp" alt="Arthur Monney" width="62" height="62" loading="lazy" decoding="async" /></div>
          <a class="dev-li" href="https://www.linkedin.com/in/arthurmonney/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Arthur Monney" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <h3 class="dev-name">Arthur Monney</h3>
        <div class="dev-role">Senior Dev — Back-end Laravel · Paiements</div>
        <p class="dev-spec">
          Architecte des systèmes complexes : multi-tenant, facturation, paiements récurrents.
          C'est le référent de l'équipe dès qu'un projet touche à l'encaissement,
          aux abonnements ou au rapprochement comptable.
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
      <div class="dev-card reveal reveal-d-1" id="dev-frederic">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-fc"><img src="/team/frederic.jpeg" alt="Frédéric Curinckx" width="62" height="62" loading="lazy" decoding="async" /></div>
          <a class="dev-li" href="https://www.linkedin.com/in/frederic-curinckx/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Frédéric Curinckx" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <h3 class="dev-name">Frédéric Curinckx</h3>
        <div class="dev-role">Senior Dev — Laravel + Livewire · Temps-réel</div>
        <p class="dev-spec">
          Le maestro du Livewire / Flux UI. Construit des interfaces métier riches sans multiplier
          les couches. Spécialiste des formulaires complexes, des écrans de saisie longue
          et des tableaux de bord temps-réel.
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
      <div class="dev-card reveal reveal-d-2" id="dev-ryan">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-rm"><img src="/team/ryan.jpeg" alt="Ryan Mazzitelli" width="62" height="62" loading="lazy" decoding="async" /></div>
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
      <div class="dev-card reveal reveal-d-3" id="dev-killian">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-kh"><img src="/team/killian.webp" alt="Killian Hoarau" width="62" height="62" loading="lazy" decoding="async" /></div>
          <a class="dev-li" href="https://www.linkedin.com/in/killian-hoarau-960927138/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Killian Hoarau" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <h3 class="dev-name">Killian Hoarau</h3>
        <div class="dev-role">Senior Dev — Laravel + DevOps · Infrastructure</div>
        <p class="dev-spec">
          Le gardien de l'infra. Docker, CI/CD, supervision, sauvegardes, sécurité.
          C'est lui qui met en place la tenue de charge et la restauration des données.
          Les objectifs chiffrés et leurs tests sont définis dans le contrat de votre projet.
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
      <div class="dev-card reveal reveal-d-4" id="dev-peter">
        <div class="dev-card-top">
          <div class="dev-avatar dev-avatar-ps"><img src="/team/peter.webp" alt="Peter Sum Sie Kung" width="62" height="62" loading="lazy" decoding="async" /></div>
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
      <span>Sur chaque fiche, le bouton en haut à droite ouvre le profil public de la personne dans un nouvel onglet — LinkedIn, ou Codeur pour Peter.</span>
    </p>
  </div>
</section>

<!-- RELAIS DE CONVERSION — mi-page.
     Mesure du 30/08/2026 : entre le bouton du hero (855 px) et le bloc de
     contact du pied de page (10 231 px), la page ne proposait plus aucune
     action pendant plus de neuf ecrans, et la porte « Demarrer mon projet »
     n'apparaissait nulle part dans le contenu. -->
<section class="eq-relay">
  <div class="wrap">
    <div class="eq-relay-card reveal">
      <div class="eq-relay-copy">
        <div class="eyebrow">— La suite</div>
        <h2>Vous savez qui code. Parlons de votre projet.</h2>
        <p>
          Deux façons d'entrer : un échange de 30 minutes pour poser le cadre et repartir
          avec un avis franc, ou le formulaire de démarrage si votre besoin est déjà écrit.
          Dans les deux cas, les intervenants affectés et leur rôle sont nommés dans le devis.
        </p>
      </div>
      <div class="eq-relay-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Parler à un développeur
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="/demarrer-un-projet" class="btn btn-ghost btn-lg">
          Démarrer mon projet
        </a>
      </div>
    </div>
  </div>
</section>

<!-- STACK COLLECTIVE — inventaire unique des outils du site.
     /methode publiait la même liste en bande à logos ; elle y a été
     remplacée le 31/08/2026 par quatre choix argumentés qui renvoient ici.
     D'où l'ancre : le lien de /methode doit atterrir sur l'inventaire, pas
     en haut de page. -->
<section class="stack-collective" id="competences">
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
        <h2>Quatre gestes<br>qu'on répète<br>sur chaque projet.</h2>
      </div>
      <div class="right">
        Voici ce que l'équipe fait concrètement pendant une mission. La cadence
        exacte — jours, participants, durée — est arrêtée avec vous au lancement
        et inscrite au devis&nbsp;: elle aide à suivre les risques et les délais,
        sans constituer une garantie universelle de calendrier.
      </div>
    </div>

    <div class="rit-grid">
      <div class="rit-card reveal">
        <div class="rit-num">01</div>
        <div class="rit-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 7v5l3 2"/></svg>
        </div>
        <h3>On fait le point sur l'avancement et les blocages</h3>
        <p>L'équipe se réunit pour dire où en est chaque chantier, ce qui bloque et ce qui attend une décision de votre côté. Les participants et la durée sont fixés au lancement.</p>
        <div class="rit-foot">
          <span class="rit-tag">PILOTAGE</span>
        </div>
      </div>

      <div class="rit-card reveal reveal-d-1">
        <div class="rit-num">02</div>
        <div class="rit-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <h3>On vous montre une version que vous manipulez</h3>
        <p>À chaque jalon de suivi, vous ouvrez le produit déployé plutôt qu'un compte rendu. Le devis nomme les valideurs et précise comment vos retours modifient le planning ou le périmètre.</p>
        <div class="rit-foot">
          <span class="rit-tag">VALIDATION</span>
        </div>
      </div>

      <div class="rit-card reveal reveal-d-2">
        <div class="rit-num">03</div>
        <div class="rit-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
        </div>
        <h3>Un autre développeur relit avant intégration</h3>
        <p>Les changements passent par une revue humaine avant d'être intégrés. Son niveau, les branches protégées et les validateurs sont adaptés au risque, et vérifiables dans le dépôt lorsque cet accès est prévu.</p>
        <div class="rit-foot">
          <span class="rit-tag">QUALITÉ</span>
        </div>
      </div>

      <div class="rit-card reveal reveal-d-3">
        <div class="rit-num">04</div>
        <div class="rit-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>En fin de jalon, on écrit ce qu'on change</h3>
        <p>Écarts constatés, décisions prises et ajustements à appliquer au cycle suivant sont consignés par écrit, pour que la trajectoire du projet reste lisible des deux côtés.</p>
        <div class="rit-foot">
          <span class="rit-tag">AMÉLIORATION</span>
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
        comme outil d'assistance. Il peut accélérer certaines phases d'exploration, de cadrage et de
        recherche, mais nous ne publions aucun multiplicateur de productivité sans protocole de mesure.
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
          Nos développeurs peuvent s'appuyer sur Claude Code pour préparer une recherche,
          explorer une option technique ou proposer un plan d'implémentation. Une personne identifiée
          vérifie les sources, arbitre les choix, exécute les tests et reste responsable du résultat.
        </p>

        <div class="claude-bullets">
          <div class="claude-bullet">
            <div class="claude-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>Recherche &amp; veille</b><br>
              <span>Documentation et SDK peuvent être explorés plus vite ; les sources utiles restent vérifiées par l'équipe.</span>
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
              <span>Suggestions de défauts, de refactorisation et de tests, ensuite relues et exécutées.</span>
            </div>
          </div>
          <div class="claude-bullet">
            <div class="claude-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>Documentation automatique</b><br>
              <span>Specs, README et runbooks peuvent être préparés avec assistance, puis relus et maintenus dans le périmètre convenu.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="claude-right">
        <div class="claude-stat">
          <div class="claude-stat-ic">
            <svg viewBox="0 0 512 512" fill="#D97757" aria-hidden="true" width="40" height="40"><path d="M301.86 65h70.94l129.4 382h-70.93l-26.48-81.3H269.2l-26.48 81.3h-70.94L301.86 65zm-11.96 240h94.86l-47.43-145.7L289.9 305z"/></svg>
          </div>
          <div class="claude-stat-n">ASSISTÉE</div>
          <div class="claude-stat-l">Recherche et exploration, sans gain moyen revendiqué.</div>
        </div>
        <div class="claude-stat">
          <div class="claude-stat-ic">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div class="claude-stat-n">TRACÉE</div>
          <div class="claude-stat-l">Hypothèses, décisions et validations conservées dans les outils du projet.</div>
        </div>
        <div class="claude-stat">
          <div class="claude-stat-ic">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div class="claude-stat-n">HUMAINE</div>
          <div class="claude-stat-l">Responsabilité de la revue et de la validation attribuée à une personne.</div>
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
        <h2>Ce que l'équipe<br>cadre avec vous.</h2>
      </div>
      <div class="right">
        Six principes de travail. Seuls le devis et le contrat signés définissent les obligations,
        niveaux de service et conséquences applicables à votre mission.
      </div>
    </div>

    <div class="val-grid">
      <div class="val-card reveal">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
        </div>
        <h3>Point de contact défini</h3>
        <p>Quentin assure le premier cadrage. Le devis nomme ensuite le point de contact, les responsables et les relais prévus pour la mission.</p>
      </div>

      <div class="val-card reveal reveal-d-1">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/></svg>
        </div>
        <h3>Intervenants identifiés</h3>
        <p>Les personnes affectées à la mission, leur statut et leur rôle sont précisés avant intervention. Les obligations de confidentialité et les accès dépendent du contrat — <b>${TEAM_PUBLIC_COMPOSITION}</b> est présenté publiquement.</p>
      </div>

      <div class="val-card reveal reveal-d-2">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3>Niveau senior &amp; encadrement</h3>
        <p>Les expériences publiques figurent sur les profils. Le devis précise les rôles, et le dispositif de revue est adapté aux composants et aux risques de la mission.</p>
      </div>

      <div class="val-card reveal reveal-d-3">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
        </div>
        <h3>Code &amp; data chez vous</h3>
        <p>Les accès au dépôt et à l'hébergement sont organisés selon le devis. La réversibilité et le transfert des livrables spécifiques suivent les CGV et interviennent après paiement complet.</p>
      </div>

      <div class="val-card reveal">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        </div>
        <h3>Honnêteté dans le diagnostic</h3>
        <p>Si nous ne sommes pas la bonne équipe, nous le disons pendant le cadrage et pouvons suggérer un profil plus adapté, sans inventer de statistique historique.</p>
      </div>

      <div class="val-card reveal reveal-d-1">
        <div class="val-ic">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        </div>
        <h3>Délais tenus</h3>
        <p>Le devis fixe les jalons, les dépendances et la procédure applicable en cas d'écart. Une pénalité n'existe que si elle est expressément acceptée dans le document signé.</p>
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
        <p>Manquante ? <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">Posez-la directement</a>, nous visons le prochain jour ouvré, sans délai garanti.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">
            Qui sera mon interlocuteur pendant le projet ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Les interlocuteurs sont désignés au devis. <b>Quentin</b> (le fondateur)
            peut piloter le produit, le cadrage et le design ; <b>Nicolas</b> (CTO)
            peut intervenir sur l'architecture et les jalons techniques. Le
            <b>développeur référent</b>, les relais et tout changement d'affectation
            sont nommés ou communiqués selon le dispositif convenu.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Travaillez-vous avec un pool externe ou de la sous-traitance ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            ${TEAM_PUBLIC_COMPOSITION} est présenté publiquement avec les statuts déclarés. Le devis nomme
            les personnes réellement affectées, leur rôle, les éventuels intervenants extérieurs et les
            obligations de confidentialité applicables. Cette page ne vaut pas affectation de toute l'équipe.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Tout le monde travaille à distance ou en local ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Mixte.</b> Le studio est à Bassens, aux portes de Chambéry (82 impasse de Bellevue).
            La présence sur site, le télétravail et les rituels d'équipe varient selon les personnes
            et les projets. Le devis précise les réunions et interlocuteurs utiles à votre mission.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Que se passe-t-il si Quentin ou un dev clé est malade ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le dépôt, le suivi et la documentation servent à limiter la dépendance à une personne.
            Le référent, le binôme éventuel, les accès et la procédure d'indisponibilité sont définis
            selon le projet. Aucun relais immédiat ni délai universel n'est promis sur cette page.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Quel est le niveau d'expérience moyen de l'équipe ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Les profils indiquent une ancienneté déclarée de 10+ ans pour le fondateur et le CTO,
            5+ ans pour les profils seniors et 3+ ans pour le développeur confirmé. L'affectation,
            les responsabilités de décision et le niveau de revue sont précisés par mission.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous parlez beaucoup de Claude Code — l'IA code à votre place ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Non.</b> Claude Code peut assister la recherche, l'exploration et la préparation
            d'un changement. Une personne nommée reste responsable du besoin, des choix, des tests et de la
            validation avant intégration. L'usage éventuel de l'IA ne remplace ni la revue ni les preuves,
            et nous ne publions pas de multiplicateur de productivité non mesuré.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous recrutez ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Les candidatures spontanées sont bienvenues, sans qu'elles correspondent à un poste actuellement ouvert. Nous visons un premier retour
            sous cinq jours ouvrés, sans délai garanti, à <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>.
            Nous cherchons à répondre à chaque candidature, y compris lorsque la réponse est négative.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Et les compétences que vous n'avez pas en interne ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Une compétence ponctuelle peut nécessiter un intervenant extérieur. Son identité ou son statut,
            son rôle, ses accès et les obligations de confidentialité sont alors précisés dans le devis ou le
            contrat avant intervention. Le client sait qui intervient et qui reste responsable du pilotage.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
