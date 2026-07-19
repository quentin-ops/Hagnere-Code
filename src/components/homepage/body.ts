import { navHtml } from "@/components/design-shared/nav-html";
import {
  TEAM_OTHER_DEVELOPERS_COUNT,
  TEAM_PUBLIC_COMPOSITION,
  TEAM_TOTAL_COUNT,
} from "@/lib/team";

export const bodyHtml = `${navHtml}
<!-- HERO -->
<section class="hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-radial"></div>
  <div class="wrap hero-inner">
    <div>
      <div class="hero-eyebrow"><span class="pill hero-pill"><span class="dot"></span><span class="hero-pill-brand">Hagnéré Code</span><span class="hero-pill-tag">L'expertise humaine boostée à l'intelligence artificielle</span></span></div>
      <h1 data-variant="A">
        <span id="h1-content">Le studio qui construit<br>le SaaS, le site ou l'outil métier<br><span class="accent">dont vous rêvez.</span></span>
      </h1>
      <p class="hero-sub" id="hero-sub">
        On imagine, on conçoit, on développe, on lance et on maintient vos
        <b>sites, applications métier et SaaS sur mesure</b>. Une équipe d'experts
        qui combine savoir-faire technique pointu et intelligence artificielle
        pour livrer plus vite des produits qui transforment vraiment votre activité.
      </p>
      <div class="hero-cta">
        <a href="/demarrer-un-projet" class="btn btn-accent btn-lg">
          Démarrer un projet
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <button type="button" class="btn btn-ghost btn-lg" data-calendly-open>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          Réserver un rendez-vous
        </button>
      </div>
      <p class="hero-micro">
        Vous tomberez sur <b>quelqu'un qui code</b>, pas sur un commercial. 30 min, sans engagement.
      </p>
      <ul class="hero-badges" role="list">
        <li class="hero-badge">
          <span class="hero-badge-ic"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg></span>
          Forfait fixe, pas de régie
        </li>
        <li class="hero-badge">
          <span class="hero-badge-ic"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg></span>
          Code &amp; données chez vous
        </li>
        <li class="hero-badge">
          <span class="hero-badge-ic"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg></span>
          Réponse sous 24 h ouvrées
        </li>
      </ul>
    </div>

    <!-- Hero visual : "Living Product" — carte produit en glass-morphism + pills orbitales + lignes connectées -->
    <div class="hero-visual hero-visual-v2" aria-hidden="true">
      <div class="hv-bg-glow"></div>
      <div class="hv-bg-grid"></div>

      <!-- Particules ambiantes -->
      <div class="hv-particles">
        <span style="--x:12%;--d:0s;--dur:11s"></span>
        <span style="--x:28%;--d:-2s;--dur:13s"></span>
        <span style="--x:48%;--d:-4s;--dur:9s"></span>
        <span style="--x:67%;--d:-1s;--dur:14s"></span>
        <span style="--x:82%;--d:-6s;--dur:12s"></span>
        <span style="--x:92%;--d:-3s;--dur:10s"></span>
      </div>

      <!-- Services row (top) — types de produits qu'on construit -->
      <div class="hv-services" role="list">
        <span class="hv-svc" role="listitem">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
          SaaS
        </span>
        <span class="hv-svc" role="listitem">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          Outils internes
        </span>
        <span class="hv-svc" role="listitem">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Sites vitrine
        </span>
        <span class="hv-svc" role="listitem">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          E-commerce
        </span>
        <span class="hv-svc" role="listitem">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2.5"/><path d="M12 18h.01"/></svg>
          App mobile
        </span>
      </div>

      <!-- Lignes connectant les rangées et la carte produit -->
      <svg class="hv-lines" viewBox="0 0 520 540" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hvLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6D28D9" stop-opacity="0"/>
            <stop offset="50%" stop-color="#6D28D9" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#6D28D9" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <!-- Top descending lines from services row -->
        <path class="hv-line" d="M 90 50 C 130 110, 180 160, 200 200" />
        <path class="hv-line" d="M 200 50 C 210 110, 230 160, 240 200" />
        <path class="hv-line" d="M 320 50 C 310 110, 290 160, 280 200" />
        <path class="hv-line" d="M 430 50 C 390 110, 340 160, 320 200" />
        <!-- Bottom rising lines from stack row -->
        <path class="hv-line" d="M 90 490 C 140 440, 190 380, 210 340" />
        <path class="hv-line" d="M 200 500 C 220 440, 240 380, 250 340" />
        <path class="hv-line" d="M 320 500 C 300 440, 280 380, 270 340" />
        <path class="hv-line" d="M 430 490 C 380 440, 330 380, 310 340" />
      </svg>

      <!-- Carte produit centrale (glass) -->
      <div class="hv-product">
        <div class="hv-product-header">
          <span class="hv-tl"></span>
          <span class="hv-tl"></span>
          <span class="hv-tl"></span>
          <div class="hv-product-url">app.votre-projet.fr</div>
        </div>
        <div class="hv-product-body">
          <div class="hv-product-eyebrow">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12l3 3 5-5"/><path d="M3 19l3 3 5-5"/><path d="M14 8h7"/><path d="M14 15h7"/></svg>
            Tableau de bord
          </div>
          <div class="hv-product-stats">
            <div class="hv-stat">
              <div class="hv-stat-v">2&thinsp;480</div>
              <div class="hv-stat-k">utilisateurs actifs</div>
            </div>
            <div class="hv-stat hv-stat-accent">
              <div class="hv-stat-v">+47<span class="pct">%</span></div>
              <div class="hv-stat-k">vs mois dernier</div>
            </div>
          </div>
          <div class="hv-product-chart">
            <div class="hv-bar" style="--h:42%;--d:.05s"></div>
            <div class="hv-bar" style="--h:58%;--d:.10s"></div>
            <div class="hv-bar" style="--h:50%;--d:.15s"></div>
            <div class="hv-bar" style="--h:78%;--d:.20s"></div>
            <div class="hv-bar hv-bar-on" style="--h:88%;--d:.25s"></div>
            <div class="hv-bar hv-bar-on" style="--h:100%;--d:.30s"></div>
          </div>
          <div class="hv-product-rows">
            <div class="hv-row"></div>
            <div class="hv-row hv-row-short"></div>
          </div>
        </div>
        <div class="hv-product-footer">
          <span class="hv-product-status"><span class="hv-status-dot"></span> EN PRODUCTION</span>
          <span class="hv-product-version">v1.4.2</span>
        </div>
      </div>

      <!-- Stack row (bottom) — pills tech existantes -->
      <div class="hv-stack">
        <div class="hv-orbit">
          <span class="hv-orbit-ic">
            <img src="/logos/stack/authjs.webp" alt="Auth.js" loading="lazy" decoding="async" />
          </span>
          <div class="hv-orbit-body">
            <span class="hv-orbit-k">Auth.js</span>
            <span class="hv-orbit-v">SSO + 2FA</span>
          </div>
        </div>

        <div class="hv-orbit">
          <span class="hv-orbit-ic hv-orbit-ic-stripe">
            <img src="/logos/stack/stripe.svg" alt="Stripe" loading="lazy" decoding="async" />
          </span>
          <div class="hv-orbit-body">
            <span class="hv-orbit-k">Paiements</span>
            <span class="hv-orbit-v">Stripe natif</span>
          </div>
        </div>

        <div class="hv-orbit">
          <span class="hv-orbit-ic">
            <img src="/logos/stack/nextjs.svg" alt="Next.js" loading="lazy" decoding="async" />
          </span>
          <div class="hv-orbit-body">
            <span class="hv-orbit-k">Back-end</span>
            <span class="hv-orbit-v">Next.js · Node</span>
          </div>
        </div>

        <div class="hv-orbit">
          <span class="hv-orbit-ic hv-orbit-ic-claude">
            <img src="/logos/stack/anthropic.svg" alt="Claude" loading="lazy" decoding="async" />
          </span>
          <div class="hv-orbit-body">
            <span class="hv-orbit-k">Claude Code</span>
            <span class="hv-orbit-v">agent IA quotidien</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LOGO BAR -->
<section class="logobar" style="background-color: rgb(247, 247, 247)">
  <div class="wrap">
    <div class="lb-inner">
      <div class="lb-side">
        <div class="lb-kicker">Notre stack</div>
        <h3>Une stack <em>moderne</em>, choisie, maîtrisée.</h3>
        <p>Pas de framework choisi pour faire joli. Un socle standard, maintenable et lisible par d'autres équipes : Next.js/React, TypeScript, bases SQL, CI/CD, observabilité et agents IA modernes. Chaque brique a un rôle clair.</p>
        <div class="lb-note">— Versions revues trimestriellement · sécurité et dépendances surveillées</div>
      </div>

      <div class="lb-stack">
        <div class="lb-row">
          <div class="lb-row-label">Back-end</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/nextjs.svg" alt="Next.js" loading="lazy" decoding="async" />
              Next.js 16 <span class="lb-chip-dim">React 19 · Node</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/typescript.svg" alt="TypeScript" loading="lazy" decoding="async" />
              TypeScript <span class="lb-chip-dim">bout en bout</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/postgresql.svg" alt="PostgreSQL" loading="lazy" decoding="async" />
              PostgreSQL <span class="lb-chip-dim">Neon / Supabase</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/redis.svg" alt="Redis" loading="lazy" decoding="async" />
              Redis <span class="lb-chip-dim">cache + queues</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/drizzle.svg" alt="Drizzle ORM" loading="lazy" decoding="async" />
              Drizzle ORM <span class="lb-chip-dim">migrations typées</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/authjs.webp" alt="Auth.js" loading="lazy" decoding="async" />
              Auth.js <span class="lb-chip-dim">SSO / sessions</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/mysql.svg" alt="MySQL" loading="lazy" decoding="async" />
              MySQL 8 <span class="lb-chip-dim">legacy &amp; métier</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/laravel.svg" alt="Laravel" loading="lazy" decoding="async" />
              Laravel <span class="lb-chip-dim">reprises d'existant</span>
            </span>
          </div>
        </div>

        <div class="lb-row">
          <div class="lb-row-label">Front-end web</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/react.svg" alt="React" loading="lazy" decoding="async" />
              React 19.2
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/nextjs.svg" alt="Next.js" loading="lazy" decoding="async" />
              Next.js 16
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/react.svg" alt="React Server Components" loading="lazy" decoding="async" />
              React Server Components
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/tailwindcss.svg" alt="Tailwind CSS" loading="lazy" decoding="async" />
              Tailwind v4
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/typescript.svg" alt="TypeScript" loading="lazy" decoding="async" />
              TypeScript 5 <span class="lb-chip-dim">strict</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/radixui.svg" alt="Radix UI" loading="lazy" decoding="async" />
              Radix UI <span class="lb-chip-dim">accessibilité</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/motion.png" alt="Motion" loading="lazy" decoding="async" />
              Motion <span class="lb-chip-dim">interactions</span>
            </span>
          </div>
        </div>

        <div class="lb-row">
          <div class="lb-row-label">Mobile iOS/Android</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/react.svg" alt="React Native" loading="lazy" decoding="async" />
              React Native
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/expo.svg" alt="Expo" loading="lazy" decoding="async" />
              Expo SDK
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/apple.svg" alt="iOS" loading="lazy" decoding="async" />
              <img src="/logos/stack/android.svg" alt="Android" loading="lazy" decoding="async" />
              iOS &amp; Android
            </span>
            <span class="lb-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="stroke:var(--ink)" stroke-width="1.6" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="18" r="0.5" style="fill:var(--ink)"/></svg>
              Push · Offline · Caméra
            </span>
          </div>
        </div>

        <div class="lb-row">
          <div class="lb-row-label">IA &amp; agents</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/anthropic.svg" alt="Anthropic Claude" loading="lazy" decoding="async" />
              Claude Opus 4.7 <span class="lb-chip-dim">agents &amp; code</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/openai.svg" alt="OpenAI" loading="lazy" decoding="async" />
              GPT-5.5 <span class="lb-chip-dim">raisonnement &amp; code</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/prism.webp" alt="Prism PHP" loading="lazy" decoding="async" />
              Prism <span class="lb-chip-dim">LLM abstraction</span>
            </span>
            <span class="lb-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3" style="fill:var(--ink)"/><path d="M8 10h8M8 14h5" style="stroke:var(--paper)" stroke-width="1.5" stroke-linecap="round"/></svg>
              RAG <span class="lb-chip-dim">embeddings + citations</span>
            </span>
            <span class="lb-chip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#6D28D9"/><path d="M8 12h8M12 8v8" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>
              Tool calling <span class="lb-chip-dim">agents métier</span>
            </span>
          </div>
        </div>

        <div class="lb-row">
          <div class="lb-row-label">Infra &amp; ops</div>
          <div class="lb-chips">
            <span class="lb-chip">
              <img src="/logos/stack/vercel.svg" alt="Vercel" loading="lazy" decoding="async" />
              Vercel <span class="lb-chip-dim">edge</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/cloudflare.svg" alt="Cloudflare" loading="lazy" decoding="async" />
              Cloudflare <span class="lb-chip-dim">OpenNext</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/aws.svg" alt="AWS" loading="lazy" decoding="async" />
              AWS S3 + SES
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/docker.svg" alt="Docker" loading="lazy" decoding="async" />
              Docker <span class="lb-chip-dim">Coolify</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/githubactions.svg" alt="GitHub Actions" loading="lazy" decoding="async" />
              GitHub Actions
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/sentry.svg" alt="Sentry" loading="lazy" decoding="async" />
              Sentry <span class="lb-chip-dim">erreurs</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/betterstack.svg" alt="Better Stack" loading="lazy" decoding="async" />
              Better Stack <span class="lb-chip-dim">uptime</span>
            </span>
            <span class="lb-chip">
              <img src="/logos/stack/dependabot.svg" alt="Dependabot" loading="lazy" decoding="async" />
              Dependabot <span class="lb-chip-dim">CVE</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- STUDIO FULL-STACK -->
<section class="studio" id="services">
  <div class="wrap">
    <div class="studio-head reveal">
      <div class="shead-tag">
        <span class="shead-dot"></span>
        UN STUDIO · TOUT LE CYCLE PRODUIT
      </div>
      <h2>
        Construire. Faire grandir.<br>
        <span class="grad">Protéger &amp; opérer.</span>
      </h2>
      <p class="studio-lead">
        Vous pouvez venir avec une idée, un process qui bloque, un site qui ne convertit pas
        ou un produit existant à reprendre. On couvre le cadrage, le design, le développement,
        l'acquisition et l'exploitation technique.
        <a href="/services">Voir les 11 services&nbsp;→</a>
      </p>
    </div>

    <!-- Service phare (pleine largeur, mockup produit) -->
    <a href="/services/saas-applications-metier" class="svc-hero reveal">
      <div class="svc-hero-left">
        <div class="svc-hero-tag">
          <span>01</span>
          <span>·</span>
          <span>DEMANDE LA PLUS FRÉQUENTE</span>
        </div>
        <h3>
          Transformer un process métier<br>
          <span class="accent">en outil clair et rentable.</span>
        </h3>
        <p class="svc-hero-lead">
          CRM interne, portail client, suivi de dossiers, automatisation, paiement,
          reporting : on part de votre quotidien réel et on construit l'outil qui
          enlève les frictions au lieu d'ajouter une couche de complexité.
        </p>
        <ul class="svc-hero-list">
          <li>
            <div class="sh-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg></div>
            <div><b>Centraliser</b> vos dossiers, clients et actions</div>
          </li>
          <li>
            <div class="sh-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg></div>
            <div><b>Donner accès</b> à vos clients ou partenaires</div>
          </li>
          <li>
            <div class="sh-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M2 12h20"/></svg></div>
            <div><b>Automatiser</b> relances, documents et validations</div>
          </li>
          <li>
            <div class="sh-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 9h16M4 15h16M10 3l-4 18M18 3l-4 18"/></svg></div>
            <div><b>Connecter</b> Stripe, Pennylane, CRM et API</div>
          </li>
        </ul>
        <div class="svc-hero-foot">
          <span class="svc-hero-cta">
            Parler d'un outil sur mesure
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </span>
          <span class="svc-hero-price">Projet cadré dès <b>8 k€</b></span>
        </div>
      </div>

      <div class="svc-hero-right">
        <!-- Mockup produit animé -->
        <div class="svc-mock">
          <div class="svc-mock-chrome">
            <span></span><span></span><span></span>
            <div class="svc-mock-url">app.clientname.fr/pipeline</div>
          </div>
          <div class="svc-mock-body">
            <div class="svc-mock-side">
              <div class="svc-mock-logo">
                <div class="ml-mark">CL</div>
                <div>Cabinet Lefèvre</div>
              </div>
              <div class="svc-mock-nav">
                <div class="mn-item active"><span class="mn-ic">◆</span> Pipeline <span class="mn-badge">42</span></div>
                <div class="mn-item"><span class="mn-ic">○</span> Clients</div>
                <div class="mn-item"><span class="mn-ic">○</span> Devis</div>
                <div class="mn-item"><span class="mn-ic">○</span> Factures</div>
                <div class="mn-item"><span class="mn-ic">○</span> Analytics</div>
              </div>
            </div>
            <div class="svc-mock-main">
              <div class="svc-mock-head">
                <div>
                  <div class="mm-title">Pipeline commercial</div>
                  <div class="mm-sub">42 deals · 312 k€ en cours</div>
                </div>
                <div class="mm-filters">
                  <span class="mm-chip active">Tous</span>
                  <span class="mm-chip">Q2</span>
                  <span class="mm-chip">Q3</span>
                </div>
              </div>
              <div class="svc-mock-kanban">
                <div class="kb-col">
                  <div class="kb-head"><b>Prospection</b><span>12</span></div>
                  <div class="kb-card"><div class="kbc-name">SCI Durand</div><div class="kbc-v">8 400 €</div></div>
                  <div class="kb-card"><div class="kbc-name">Immobilière Lac</div><div class="kbc-v">14 200 €</div></div>
                  <div class="kb-card ghost"><div class="kbc-name">Martin &amp; Fils</div><div class="kbc-v">6 700 €</div></div>
                </div>
                <div class="kb-col">
                  <div class="kb-head"><b>Devis</b><span>18</span></div>
                  <div class="kb-card active"><div class="kbc-name">Bonnet Immo</div><div class="kbc-v">22 800 €</div></div>
                  <div class="kb-card"><div class="kbc-name">Groupe Alpes</div><div class="kbc-v">45 000 €</div></div>
                  <div class="kb-card ghost"><div class="kbc-name">Villa Chambéry</div><div class="kbc-v">11 300 €</div></div>
                </div>
                <div class="kb-col">
                  <div class="kb-head"><b>Signés</b><span>8</span></div>
                  <div class="kb-card"><div class="kbc-name">SCCV Mont-Blanc</div><div class="kbc-v">62 500 €</div><div class="kbc-tag">✓ Facturé</div></div>
                  <div class="kb-card"><div class="kbc-name">Cabinet Rivoire</div><div class="kbc-v">18 900 €</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Floating activity tag -->
        <div class="svc-float svc-float-1">
          <div class="sf-dot"></div>
          <div>
            <div class="sf-t">Facture auto-émise</div>
            <div class="sf-s">il y a 12 s · 18 900 €</div>
          </div>
        </div>
        <div class="svc-float svc-float-2">
          <div class="sf-icon">IA</div>
          <div>
            <div class="sf-t">Relance rédigée par Claude</div>
            <div class="sf-s">prêt à envoyer · 3 deals</div>
          </div>
        </div>
      </div>
    </a>

    <div class="svc-service-map reveal">
      <div class="svc-family" data-family="build">
        <div class="svc-family-head">
          <span class="svc-family-kicker">Construire</span>
          <h3>Créer le produit ou l'outil dont votre équipe a besoin.</h3>
          <p>Du site vitrine au SaaS métier complet : on transforme le besoin en interface utilisable, maintenable et connectée à vos outils.</p>
        </div>
        <div class="svc-family-list">
          <a class="svc-mini-card" href="/services/saas-applications-metier">
            <span class="svc-mini-num">01</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></span>
            <b>SaaS &amp; applications métier</b>
            <em>Plateformes B2B, espaces clients, rôles, paiements, workflows.</em>
          </a>
          <a class="svc-mini-card" href="/services/outils-internes-sur-mesure">
            <span class="svc-mini-num">02</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/></svg></span>
            <b>Outils internes sur mesure</b>
            <em>Back-office, automatisations, validations, exports, tableaux de bord.</em>
          </a>
          <a class="svc-mini-card" href="/services/sites-vitrines">
            <span class="svc-mini-num">03</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg></span>
            <b>Sites vitrines &amp; landings</b>
            <em>Site clair, rapide, orienté conversion et prise de contact.</em>
          </a>
          <a class="svc-mini-card" href="/services/ecommerce">
            <span class="svc-mini-num">04</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></span>
            <b>E-commerce</b>
            <em>Boutiques, paiements, catalogue, tunnels d'achat et automatisations.</em>
          </a>
        </div>
      </div>

      <div class="svc-family" data-family="grow">
        <div class="svc-family-head">
          <span class="svc-family-kicker">Faire grandir</span>
          <h3>Générer plus de demandes qualifiées après la mise en ligne.</h3>
          <p>Un bon produit ne suffit pas toujours : on peut aussi travailler l'acquisition, le contenu et la mesure de la conversion.</p>
        </div>
        <div class="svc-family-list">
          <a class="svc-mini-card" href="/services/referencement-google">
            <span class="svc-mini-num">05</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></span>
            <b>SEO &amp; référencement</b>
            <em>Structure technique, contenus, pages business, suivi Search Console.</em>
          </a>
          <a class="svc-mini-card" href="/services/publicite-en-ligne">
            <span class="svc-mini-num">06</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg></span>
            <b>Publicité en ligne</b>
            <em>Google, Meta, LinkedIn, landing pages et tracking des conversions.</em>
          </a>
          <a class="svc-mini-card" href="/services/contenu-video">
            <span class="svc-mini-num">07</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></span>
            <b>Contenu &amp; vidéo</b>
            <em>Pages, scripts, motion, contenus produit et supports de vente.</em>
          </a>
        </div>
      </div>

      <div class="svc-family" data-family="operate">
        <div class="svc-family-head">
          <span class="svc-family-kicker">Protéger &amp; opérer</span>
          <h3>Garder le produit fiable, sécurisé et capable d'évoluer.</h3>
          <p>Après la livraison, on peut rester pour maintenir, auditer, sécuriser et faire évoluer votre socle sans repartir de zéro.</p>
        </div>
        <div class="svc-family-list">
          <a class="svc-mini-card" href="/services/maintenance-evolution">
            <span class="svc-mini-num">08</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>
            <b>Maintenance &amp; évolution</b>
            <em>Corrections, petites évolutions, monitoring, support prioritaire.</em>
          </a>
          <a class="svc-mini-card" href="/services/securite-rgpd">
            <span class="svc-mini-num">09</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
            <b>Sécurité &amp; RGPD</b>
            <em>Audit, hébergement, sauvegardes, conformité et données sensibles.</em>
          </a>
          <a class="svc-mini-card" href="/services/audit-technique">
            <span class="svc-mini-num">10</span>
            <span class="svc-mini-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg></span>
            <b>Audit technique</b>
            <em>Performance, sécurité, dette technique et plan de reprise.</em>
          </a>
        </div>
      </div>
    </div>

    <div class="studio-foot reveal">
      <div>
        <div class="sfoot-tag">PAS SÛR DU BON SERVICE ?</div>
        <div class="sfoot-t">On vous aide à cadrer en 30 minutes.</div>
        <div class="sfoot-sub">Appel direct avec un développeur senior, aucun commercial dans la boucle.</div>
      </div>
      <a href="#contact" class="btn btn-primary btn-lg">
        Parler à un expert
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- DESCRIBE YOUR PROJECT -->
<section class="describe">
  <div class="wrap">
    <div class="descr-grid">
      <div class="descr-copy reveal">
        <div class="eyebrow">— Cadrage en 48h</div>
        <h2>Décrivez-nous votre besoin.<br>On s'occupe du reste.</h2>
        <p>
          Pas besoin d'un cahier des charges de 80 pages. En <b>30 minutes d'appel</b>, on comprend
          votre contexte, votre urgence, vos contraintes. Réponse argumentée sous <b>24 h ouvrées</b>,
          fourchette et plan sous <b>48 h</b> après l'échange — le devis ferme est établi après le
          Discovery Sprint (1 500 € HT, déduit à 100 % du forfait).
        </p>
        <ul class="chks">
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Un seul interlocuteur senior pendant toute la discussion</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Aucun engagement tant que vous n'avez pas validé le devis</li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Franchise totale : si ce n'est pas pour nous, on vous le dit</li>
        </ul>
        <div class="cta-row">
          <a href="#contact" class="btn btn-accent btn-lg">
            Parler à un expert
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <div class="dc-wrap reveal reveal-d-1">

        <div class="dc-card">
          <div class="dc-bar">
            <div class="dc-bar-left">
              <div class="dc-bar-dots"><span></span><span></span><span></span></div>
              <div class="dc-bar-path">
                <span>Inbox</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>
                <span>Cadrage 48h</span>
              </div>
            </div>
            <div class="dc-bar-right">
              <div class="dc-status">
                <span class="dc-status-dot"></span>
                PRÊT À SIGNER
              </div>
            </div>
          </div>

          <div class="dc-hero">
            <div class="dc-thread">
              <div class="dc-subj-l">
                <div class="dc-subj-avatar">MD</div>
                <div>
                  <div class="dc-subj-from"><b>Marc Dubois</b> <span class="dc-subj-co">· Cabinet Dubois &amp; Associés</span></div>
                  <div class="dc-subj-to">PME · 8 personnes · comptabilité</div>
                </div>
              </div>
              <p>« On recopie des deals entre Excel, HubSpot et Pennylane. On veut centraliser et sortir les factures automatiquement. »</p>
              <div class="dc-signal-row">
                <span><b>3</b> outils à connecter</span>
                <span><b>5</b> semaines</span>
                <span><b>48h</b> pour cadrer</span>
              </div>
            </div>

            <div class="dc-decision">
              <div class="dc-decision-kicker">Réponse Hagnéré Code</div>
              <h3>Back-office commercial sur mesure</h3>
              <p>Un outil interne branché sur l'existant, livré au forfait fixe, avec devis signable en ligne.</p>
              <div class="dc-decision-price">
                <span>Forfait HT</span>
                <b>28 000 €</b>
              </div>
            </div>
          </div>

          <div class="dc-output">
            <div class="dc-output-head">
              <div>
                <div class="dc-q-tag">DEVIS CADRÉ · RÉF 2026-0247</div>
                <div class="dc-q-title">Votre devis ferme après le Discovery Sprint</div>
              </div>
              <div class="dc-q-logo">HC</div>
            </div>

            <div class="dc-plan-grid">
              <div class="dc-plan-card">
                <span class="dc-plan-num">01</span>
                <b>Diagnostic</b>
                <p>CRM du marché inutile : besoin d'un back-office branché sur vos outils.</p>
              </div>
              <div class="dc-plan-card">
                <span class="dc-plan-num">02</span>
                <b>Périmètre</b>
                <p>Pipeline Kanban, relances IA, facturation auto, rapports hebdo.</p>
              </div>
              <div class="dc-plan-card">
                <span class="dc-plan-num">03</span>
                <b>Engagement</b>
                <p>5 semaines, équipe dédiée, budget verrouillé au Discovery Sprint, avant la première ligne de code.</p>
              </div>
            </div>

            <div class="dc-quote-compact">
              <div class="dc-mini-breakdown">
                <div><span>Produit &amp; ateliers</span><b>5 400 €</b></div>
                <div><span>Développement · 4 sprints</span><b>18 200 €</b></div>
                <div><span>Intégrations + IA</span><b>4 400 €</b></div>
              </div>
              <div class="dc-q-total">
                <div class="dc-q-tleft">
                  <div class="dc-q-ttag">FORFAIT TOUT COMPRIS · HT</div>
                  <div class="dc-q-tsub">
                    <span><b>30 %</b> signature</span>
                    <span class="sep"></span>
                    <span><b>30 %</b> mi-parcours</span>
                    <span class="sep"></span>
                    <span><b>40 %</b> livraison</span>
                  </div>
                  <div class="dc-q-footline">Hébergement 1 an · formation · 30 j de garantie · code sur votre Git</div>
                </div>
                <div class="dc-q-tright">
                  <div class="dc-q-tcurrency">MONTANT TOTAL</div>
                  <div class="dc-q-tval">28 000 €</div>
                </div>
              </div>
            </div>

            <div class="dc-q-actions">
              <a href="#contact" class="btn btn-accent" style="flex:1;justify-content:center">
                Obtenir mon cadrage
                <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <div class="dc-action-note">30 min avec le gérant · fourchette sous 48 h · devis ferme après Discovery Sprint</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- METHODE -->
<section class="methode" id="methode">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Notre méthode</div>
        <h2>La méthode<br><span class="sf-brand">Sprint Fixe<span class="sf-brand-tm">™</span></span>.</h2>
      </div>
      <div class="right">
        Pas de mystère, pas de « consulting » qui traîne. Quatre étapes claires,
        des livrables précis, des démos chaque vendredi, un forfait fixe sans dépassement.
      </div>
    </div>

    <!-- Sprint Fixe™ manifesto -->
    <div class="sf-manifesto reveal">
      <div class="sf-manifesto-pitch">
        <div class="sf-manifesto-tag">
          <span class="sf-manifesto-dot"></span>
          Notre engagement · simple, écrit, vérifiable
        </div>
        <h3>
          Le prix annoncé <span class="sf-manifesto-accent">est</span> le prix payé.<br>
          Le périmètre annoncé <span class="sf-manifesto-accent">est</span> le périmètre livré.<br>
          Les arbitrages sont visibles chaque semaine.
        </h3>
        <p class="sf-manifesto-copy">
          Une méthode courte pour passer d'un besoin flou à un périmètre signé,
          puis à des démos régulières sans tunnel ni surprise budgétaire.
        </p>
        <div class="sf-proof-strip">
          <span><b>30 min</b> cadrage</span>
          <span><b>48 h</b> fourchette &amp; plan</span>
          <span><b>J+30</b> garantie</span>
        </div>
      </div>

      <div class="sf-manifesto-pillars">
        <div class="sf-pillar">
          <div class="sf-pillar-n">01</div>
          <div class="sf-pillar-title">Périmètre verrouillé</div>
          <div class="sf-pillar-body">
            Le périmètre est figé au devis. Tout ajout passe par un avenant
            écrit, chiffré, signé — jamais une mauvaise surprise en fin de projet.
          </div>
        </div>

        <div class="sf-pillar">
          <div class="sf-pillar-n">02</div>
          <div class="sf-pillar-title">Démo chaque vendredi</div>
          <div class="sf-pillar-body">
            Vous voyez votre produit grandir en direct. Vous corrigez la trajectoire
            avant que ce soit coûteux. Pas de « grande révélation » en fin de projet.
          </div>
        </div>

        <div class="sf-pillar">
          <div class="sf-pillar-n">03</div>
          <div class="sf-pillar-title">Claude Code dès J1</div>
          <div class="sf-pillar-body">
            IA comme augmentation de l'équipe, pas comme vitrine marketing.
            Recherche, cadrage, tests, revues de code, doc — tout passe par
            Claude, ce qui compresse les délais sans rogner sur la qualité.
          </div>
        </div>

        <div class="sf-pillar">
          <div class="sf-pillar-n">04</div>
          <div class="sf-pillar-title">Code &amp; données à vous</div>
          <div class="sf-pillar-body">
            Repo Git sur votre organisation, hébergement à votre nom,
            documentation à jour en continu. Si vous arrêtez demain, vous
            gardez tout — et toute autre agence peut reprendre la main.
          </div>
        </div>
      </div>

      <div class="sf-manifesto-guarantee">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
        <div>
          <b>La garantie Sprint Fixe™</b> — devis clair, périmètre écrit,
          démos régulières, aucune ligne de régie cachée. Si le projet doit changer,
          l'avenant est chiffré avant de coder.
        </div>
      </div>
    </div>

    <div class="meth-rail">
    <div class="meth-rail-head">
      <span>Déroulé concret</span>
      <b>De l'appel au lancement</b>
    </div>
    <div class="meth-grid">
      <div class="meth-step reveal">
        <div class="meth-head">
          <div class="meth-num">ÉTAPE 01</div>
          <div class="meth-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
        </div>
        <h4>On écoute vraiment.</h4>
        <p>Un appel de <b>30 min avec un expert</b>. On comprend ce que vous voulez faire, pour qui et pourquoi. Sans jargon technique.</p>
        <div class="meth-foot">
          <div class="meth-dur"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>30 min</div>
          <div class="meth-tag free">Gratuit</div>
        </div>
      </div>

      <div class="meth-step reveal reveal-d-1">
        <div class="meth-head">
          <div class="meth-num">ÉTAPE 02</div>
          <div class="meth-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg></div>
        </div>
        <h4>On vous renvoie un chiffrage clair.</h4>
        <p>Réponse argumentée sous <b>24 h ouvrées</b>, fourchette et plan sous <b>48 h</b> après l'échange. Devis ferme après le Discovery Sprint (1 500 € HT, déduit à 100 %).</p>
        <div class="meth-foot">
          <div class="meth-dur"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>48 h</div>
          <div class="meth-tag">Forfait fixe</div>
        </div>
      </div>

      <div class="meth-step reveal reveal-d-2">
        <div class="meth-head">
          <div class="meth-num">ÉTAPE 03</div>
          <div class="meth-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></div>
        </div>
        <h4>On construit, vous suivez.</h4>
        <p>Démo <b>tous les vendredis</b>. Vous voyez votre produit grandir semaine après semaine. Vous ajustez la trajectoire en temps réel.</p>
        <div class="meth-foot">
          <div class="meth-dur"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>4 à 12 sem.</div>
          <div class="meth-tag">Démos hebdo</div>
        </div>
      </div>

      <div class="meth-step reveal reveal-d-3">
        <div class="meth-head">
          <div class="meth-num">ÉTAPE 04</div>
          <div class="meth-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
        </div>
        <h4>On livre et on reste.</h4>
        <p>Formation des équipes, mise en ligne, <b>30 jours de garantie</b>. Puis forfait maintenance mensuel si vous voulez qu'on s'occupe du reste.</p>
        <div class="meth-foot">
          <div class="meth-dur"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>J+30</div>
          <div class="meth-tag guarantee">Garantie</div>
        </div>
      </div>
    </div>

    <div class="meth-deepdive reveal">
      <div class="meth-deepdive-copy">
        <span class="meth-deepdive-tag">Aller plus loin</span>
        <p>
          Livrables détaillés par étape, exemples concrets, garanties contractuelles et
          comparatif avec une agence classique — tout est documenté.
        </p>
      </div>
      <a href="/methode" class="btn btn-accent btn-lg meth-deepdive-cta">
        Découvrir la méthode Sprint Fixe™ en détail
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
    </div>
  </div>
</section>

<!-- REALISATIONS -->
<section class="real" id="realisations">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Nos produits internes</div>
        <h2>Ce qu'on a construit<br>pour le groupe Hagnéré.</h2>
      </div>
      <div class="right">
        Quatre produits du groupe, conçus et opérés par le studio : deux SaaS IA de
        comptabilité immobilière, et deux sites à forte conversion dans la gestion
        de patrimoine. Ce sont nos preuves principales aujourd'hui : des produits
        réels, en production, avec des chiffres que l'on peut expliquer.
        <a href="/realisations">Toutes les réalisations&nbsp;→</a>
      </div>
    </div>

    <div class="real-grid">
      <!-- LMNP.AI — noir / blanc -->
      <a href="/realisations/lmnp-ai" class="real-card reveal" style="--brand:#0A0A0A;--brand-soft:#F5F5F5">
        <div class="real-shot" style="background:#0A0A0A">
          <svg width="100%" height="100%" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="340" fill="#0A0A0A"/>
            <!-- Subtle grid bg -->
            <defs><pattern id="gridLmnp" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1a1a" stroke-width="0.5"/></pattern></defs>
            <rect width="600" height="340" fill="url(#gridLmnp)"/>
            <!-- Floating card: résultat simulateur -->
            <rect x="110" y="56" width="380" height="228" rx="14" fill="#121212" stroke="#262626"/>
            <circle cx="132" cy="82" r="4" fill="#ffffff"/>
            <text x="146" y="86" font-family="Geist Mono" font-size="11" fill="#D4D4D4" letter-spacing="1">LMNP.AI · RÉSULTAT</text>
            <text x="132" y="130" font-family="Geist" font-weight="700" font-size="15" fill="#737373">Économie annuelle estimée</text>
            <text x="132" y="180" font-family="Geist" font-weight="700" font-size="52" fill="#fff" letter-spacing="-2">4 128<tspan font-size="30" fill="#A3A3A3"> €</tspan></text>
            <rect x="132" y="200" width="336" height="1" fill="#262626"/>
            <text x="132" y="226" font-family="Geist Mono" font-size="10" fill="#737373" letter-spacing="1">RÉGIME RECOMMANDÉ</text>
            <text x="132" y="248" font-family="Geist" font-weight="600" font-size="17" fill="#fff">LMNP au réel simplifié</text>
            <rect x="132" y="260" width="336" height="10" rx="5" fill="#1f1f1f"/>
            <rect x="132" y="260" width="280" height="10" rx="5" fill="#ffffff"/>
          </svg>
        </div>
        <div class="real-head">
          <div class="real-logo">L</div>
          <div class="real-head-main">
            <h3>LMNP.AI</h3>
            <span class="real-url">lmnp.ai</span>
          </div>
          <span class="real-chip">SaaS B2C</span>
        </div>
        <div class="real-body">
          <div class="real-meta">LARAVEL 12 <span class="dot"></span> SaaS B2C</div>
          <p>Logiciel de comptabilité LMNP/LMP en ligne. L'IA guide l'investisseur dans sa liasse fiscale, amortissements, transmission EDI. 163 guides fiscaux rédigés, 7,2 M impressions Google sur 12 mois, +61 % de marge nette grâce à l'automatisation.</p>
          <div class="real-metric">
            <div class="rm"><div class="n">6<span class="s"> k+</span></div><div class="l">inscrits</div></div>
            <div class="rm"><div class="n">156<span class="s"> k</span></div><div class="l">clics SEO · 12 mois</div></div>
            <div class="rm"><div class="n">3,8<span class="s"> M€</span></div><div class="l">valo société · 2 SaaS</div></div>
          </div>
        </div>
      </a>

      <!-- SCI-AI.app — indigo -->
      <a href="/realisations/sci-ai" class="real-card reveal reveal-d-1" style="--brand:#4F46E5;--brand-soft:#E0E7FF">
        <div class="real-shot" style="background:#EEF2FF">
          <svg width="100%" height="100%" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="340" fill="#EEF2FF"/>
            <!-- Dashboard SCI -->
            <rect x="40" y="40" width="520" height="260" rx="14" fill="#fff" stroke="#E0E7FF"/>
            <rect x="40" y="40" width="520" height="48" rx="14" fill="#fff"/>
            <rect x="40" y="86" width="520" height="1" fill="#EEF2FF"/>
            <circle cx="62" cy="64" r="5" fill="#4F46E5"/>
            <text x="76" y="68" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">SCI-AI.app</text>
            <text x="540" y="68" text-anchor="end" font-family="Geist Mono" font-size="10" fill="#737373">Liasse 2065 · IS</text>
            <!-- KPIs -->
            <g font-family="Geist">
              <rect x="64" y="108" width="152" height="76" rx="10" fill="#EEF2FF"/>
              <text x="78" y="128" font-family="Geist Mono" font-size="9" fill="#6B7B96" letter-spacing="1">BÉNÉFICE NET</text>
              <text x="78" y="158" font-weight="700" font-size="22" fill="#0A0A0A">12 840 €</text>
              <text x="78" y="174" font-family="Geist Mono" font-size="9" fill="#4F46E5">+ IS 15 %</text>

              <rect x="224" y="108" width="152" height="76" rx="10" fill="#EEF2FF"/>
              <text x="238" y="128" font-family="Geist Mono" font-size="9" fill="#6B7B96" letter-spacing="1">AMORT. ANNUEL</text>
              <text x="238" y="158" font-weight="700" font-size="22" fill="#0A0A0A">8 920 €</text>
              <text x="238" y="174" font-family="Geist Mono" font-size="9" fill="#4F46E5">6 composants</text>

              <rect x="384" y="108" width="152" height="76" rx="10" fill="#4F46E5"/>
              <text x="398" y="128" font-family="Geist Mono" font-size="9" fill="#C7D2FE" letter-spacing="1">ASSOCIÉS</text>
              <text x="398" y="158" font-weight="700" font-size="22" fill="#fff">3</text>
              <text x="398" y="174" font-family="Geist Mono" font-size="9" fill="#C7D2FE">parts à jour</text>
            </g>
            <!-- Bottom row -->
            <rect x="64" y="200" width="472" height="80" rx="10" fill="#EEF2FF"/>
            <text x="80" y="222" font-family="Geist" font-weight="600" font-size="12" fill="#0A0A0A">Transmission EDI · 2065</text>
            <text x="80" y="240" font-family="Geist Mono" font-size="10" fill="#6B7B96">DGFiP · accusé de réception reçu</text>
            <rect x="80" y="252" width="280" height="8" rx="4" fill="#E0E7FF"/>
            <rect x="80" y="252" width="280" height="8" rx="4" fill="#4F46E5"/>
            <text x="522" y="244" text-anchor="end" font-family="Geist Mono" font-weight="600" font-size="14" fill="#4F46E5">✓ Validée</text>
          </svg>
        </div>
        <div class="real-head">
          <div class="real-logo">S</div>
          <div class="real-head-main">
            <h3>SCI-AI.app</h3>
            <span class="real-url">sci-ai.app</span>
          </div>
          <span class="real-chip">SaaS B2C</span>
        </div>
        <div class="real-body">
          <div class="real-meta">LARAVEL 12 <span class="dot"></span> EDI DGFiP <span class="dot"></span> LIVRÉ AVRIL 2026</div>
          <p>Logiciel de comptabilité SCI (IR et IS). Liasses 2033, 2065, 2072 générées et télétransmises. Gestion des associés, parts, comptes courants, démembrement et amortissements par composants.</p>
          <div class="real-metric">
            <div class="rm"><div class="n">2</div><div class="l">régimes (IR/IS)</div></div>
            <div class="rm"><div class="n">3,8<span class="s"> M€</span></div><div class="l">valo société · 2 SaaS</div></div>
            <div class="rm"><div class="n">229<span class="s"> €</span></div><div class="l">/an autonomie</div></div>
          </div>
        </div>
      </a>

      <!-- HAGNÉRÉ PATRIMOINE — noir premium / or -->
      <a href="/realisations/hagnere-patrimoine" class="real-card reveal reveal-d-2" style="--brand:#C9A96E;--brand-soft:#FAF3E3">
        <div class="real-shot" style="background:#0A0A0A">
          <svg width="100%" height="100%" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice">
            <rect width="600" height="340" fill="#0A0A0A"/>
            <!-- Subtle vertical rule -->
            <line x1="40" y1="40" x2="40" y2="300" stroke="#C9A96E" stroke-width="1" opacity="0.5"/>
            <text x="60" y="60" font-family="Geist Mono" font-size="10" fill="#C9A96E" letter-spacing="2">◆ HAGNÉRÉ PATRIMOINE</text>
            <text x="60" y="128" font-family="Geist" font-weight="300" font-size="42" fill="#fff" letter-spacing="-1">Construisons</text>
            <text x="60" y="168" font-family="Geist" font-weight="300" font-size="42" fill="#fff" letter-spacing="-1">votre <tspan font-style="italic" fill="#C9A96E">patrimoine</tspan>,</text>
            <text x="60" y="208" font-family="Geist" font-weight="300" font-size="42" fill="#fff" letter-spacing="-1">ensemble.</text>
            <line x1="60" y1="232" x2="200" y2="232" stroke="#C9A96E" stroke-width="1"/>
            <text x="60" y="256" font-family="Geist Mono" font-size="10" fill="#9e9e9e" letter-spacing="1">CABINET DE GESTION · CHAMBÉRY</text>
            <!-- Right side metric -->
            <rect x="420" y="60" width="140" height="220" rx="2" fill="none" stroke="#C9A96E" stroke-width="1" opacity="0.3"/>
            <text x="490" y="110" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#C9A96E" letter-spacing="1.5">SOUS GESTION</text>
            <text x="490" y="170" text-anchor="middle" font-family="Geist" font-weight="300" font-size="44" fill="#fff" letter-spacing="-2">18 M€</text>
            <line x1="450" y1="190" x2="530" y2="190" stroke="#C9A96E" opacity="0.5"/>
            <text x="490" y="216" text-anchor="middle" font-family="Geist Mono" font-size="9" fill="#9e9e9e" letter-spacing="1">CIF · ORIAS</text>
            <text x="490" y="236" text-anchor="middle" font-family="Geist" font-weight="400" font-size="11" fill="#fff">284 clients</text>
          </svg>
        </div>
        <div class="real-head">
          <div class="real-logo">HP</div>
          <div class="real-head-main">
            <h3>Hagnéré Patrimoine</h3>
            <span class="real-url">hagnere-patrimoine.fr</span>
          </div>
          <span class="real-chip">Site vitrine</span>
        </div>
        <div class="real-body">
          <div class="real-meta">NEXT.JS <span class="dot"></span> SEO + ADS <span class="dot"></span> Site vitrine</div>
          <p>Refonte complète du cabinet de gestion de patrimoine : site vitrine premium, prise de RDV, tunnel de qualification, stratégie SEO longue traîne et campagnes Google Ads sur les requêtes patrimoniales.</p>
          <div class="real-metric">
            <div class="rm"><div class="n">1,46<span class="s"> M</span></div><div class="l">impressions · 12 mois</div></div>
            <div class="rm"><div class="n">26<span class="s"> k+</span></div><div class="l">clics SEO · 12 mois</div></div>
            <div class="rm"><div class="n">×12</div><div class="l">trafic SEO · 12 mois</div></div>
          </div>
        </div>
      </a>

      <!-- HAGNÉRÉ INVESTISSEMENT — navy / premium -->
      <a href="/realisations/hagnere-investissement" class="real-card reveal reveal-d-3" style="--brand:#0F172A;--brand-soft:#E2E8F0">
        <div class="real-shot" style="background:#F8FAFC">
          <svg width="100%" height="100%" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="hiNavy" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#1E293B"/>
                <stop offset="100%" stop-color="#0F172A"/>
              </linearGradient>
            </defs>
            <rect width="600" height="340" fill="#F8FAFC"/>
            <!-- Hero -->
            <rect x="40" y="40" width="330" height="260" rx="14" fill="url(#hiNavy)"/>
            <text x="62" y="70" font-family="Geist Mono" font-size="10" fill="#94A3B8" letter-spacing="1.5">◆ HAGNÉRÉ INVESTISSEMENT</text>
            <text x="62" y="128" font-family="Geist" font-weight="700" font-size="28" fill="#fff" letter-spacing="-1">Investir dans</text>
            <text x="62" y="160" font-family="Geist" font-weight="700" font-size="28" fill="#fff" letter-spacing="-1">l'immobilier rentable,</text>
            <text x="62" y="192" font-family="Geist" font-weight="700" font-size="28" fill="#94A3B8" letter-spacing="-1">100% clé-en-main.</text>
            <rect x="62" y="232" width="170" height="42" rx="8" fill="#fff"/>
            <text x="147" y="258" text-anchor="middle" font-family="Geist" font-weight="600" font-size="13" fill="#0F172A">Prendre RDV →</text>
            <!-- Right: rendement card -->
            <rect x="390" y="40" width="170" height="125" rx="14" fill="#fff" stroke="#E2E8F0"/>
            <text x="410" y="66" font-family="Geist Mono" font-size="9" fill="#64748B" letter-spacing="1">RENDEMENT BRUT MOYEN</text>
            <text x="410" y="108" font-family="Geist" font-weight="700" font-size="34" fill="#0F172A" letter-spacing="-1">9,07 %</text>
            <text x="410" y="128" font-family="Geist Mono" font-size="9" fill="#64748B">sur leurs projets réalisés</text>
            <rect x="410" y="138" width="130" height="4" rx="2" fill="#E2E8F0"/>
            <rect x="410" y="138" width="116" height="4" rx="2" fill="#0F172A"/>
            <!-- Right card 2 -->
            <rect x="390" y="175" width="170" height="125" rx="14" fill="#fff" stroke="#E2E8F0"/>
            <text x="410" y="200" font-family="Geist Mono" font-size="9" fill="#64748B" letter-spacing="1">LOGEMENTS RÉNOVÉS</text>
            <text x="410" y="242" font-family="Geist" font-weight="700" font-size="34" fill="#0F172A" letter-spacing="-1">144</text>
            <text x="410" y="262" font-family="Geist Mono" font-size="9" fill="#64748B">en 3 ans</text>
            <circle cx="420" cy="282" r="6" fill="#0F172A"/>
            <circle cx="432" cy="282" r="6" fill="#0F172A" opacity="0.7"/>
            <circle cx="444" cy="282" r="6" fill="#0F172A" opacity="0.4"/>
            <text x="460" y="286" font-family="Geist Mono" font-size="9" fill="#64748B">+ chaque mois</text>
          </svg>
        </div>
        <div class="real-head">
          <div class="real-logo">HI</div>
          <div class="real-head-main">
            <h3>Hagnéré Investissement</h3>
            <span class="real-url">hagnere-investissement.fr</span>
          </div>
          <span class="real-chip">Site vitrine</span>
        </div>
        <div class="real-body">
          <div class="real-meta">NEXT.JS <span class="dot"></span> SEO + ADS <span class="dot"></span> Site vitrine</div>
          <p>Site marque du cabinet d'investissement immobilier clé en main. Funnel de qualification de prospects investisseurs, simulateur de rendement, prise de RDV, contenus YouTube intégrés.</p>
          <div class="real-metric">
            <div class="rm"><div class="n">144</div><div class="l">logements rénovés</div></div>
            <div class="rm"><div class="n">9,07<span class="s"> %</span></div><div class="l">rendement brut moyen</div></div>
            <div class="rm"><div class="n">×2,5</div><div class="l">leads qualifiés</div></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- STATS -->
<section class="stats">
  <div class="stats-bg"></div>
  <div class="wrap inner">
    <div class="stats-head reveal">
      <div class="eyebrow on-dark">— En chiffres</div>
      <h2 style="margin-top:14px">Nos propres produits,<br>nos propres chiffres.</h2>
      <p>On ne gonfle pas les chiffres. Tous ceux ci-dessous sont issus directement des 4 réalisations présentées plus haut — Google Search Console à l'appui, vérifiables en un clic.</p>
    </div>

    <div class="stats-grid">
      <div class="stat reveal">
        <div class="k">PROJETS EN PROD</div>
        <div class="n">4</div>
        <div class="l">2 SaaS IA vivants + 2 sites vitrines à conversion, tous livrés en forfait fixe.</div>
      </div>
      <div class="stat reveal reveal-d-1">
        <div class="k">IMPRESSIONS GOOGLE · 12 MOIS</div>
        <div class="n">8,76<span class="s"> M</span></div>
        <div class="l">Cumulées sur LMNP.AI, Hagnéré Patrimoine et SCI-AI — position moyenne top 10.</div>
      </div>
      <div class="stat reveal reveal-d-2">
        <div class="k">CLICS SEO · 12 MOIS</div>
        <div class="n">183<span class="s"> k+</span></div>
        <div class="l">Trafic organique cumulé sur les 3 sites. LMNP.AI seul : 156 k clics, ×2,6 vs l'an passé.</div>
      </div>
      <div class="stat reveal reveal-d-3">
        <div class="k">VALORISATION GROUPE</div>
        <div class="n">3,8<span class="s"> M€</span></div>
        <div class="l">Cessions de parts + levée (LMNP.AI / SCI-AI), en moins de 3 ans.</div>
      </div>
    </div>
  </div>
</section>

<!-- EQUIPE -->
<section class="equipe" id="equipe">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— L'équipe</div>
        <h2>${TEAM_TOTAL_COUNT} personnes :<br>un gérant, un CTO et ${TEAM_OTHER_DEVELOPERS_COUNT} autres développeurs.</h2>
      </div>
      <div class="right">
        Pas de pool anonyme, pas de sous-traitance offshore, pas de white-label.
        <b>${TEAM_PUBLIC_COMPOSITION}</b>. Toute l'équipe partage les mêmes rituels et utilise Claude Code.
        Les personnes affectées à votre projet sont
        <b>nommées au cadrage</b> et figurent dans le devis.
      </div>
    </div>

    <div class="eq-grid">
      <!-- FONDATEUR -->
      <div class="eq-founder reveal">
        <div class="eq-founder-photo">
          <div class="eq-founder-tag">
            <span class="dot"></span>
            ASSOCIÉ DIRIGEANT
          </div>
          <img src="/team/quentin.webp" alt="Quentin Hagnéré, gérant associé codeur de Hagnéré Code" loading="lazy" />
        </div>
        <div class="eq-founder-body">
          <div>
            <div class="eq-founder-name">Quentin Hagnéré</div>
            <span class="eq-founder-role">Gérant associé codeur · Brief / Design / Front-end / Back-office</span>
            <a class="eq-founder-li" href="https://www.linkedin.com/in/quentin-hagnere" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Quentin Hagnéré"><svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> Voir le profil</a>
          </div>
          <div class="eq-founder-quote">
            « Je viens du terrain. Je sais ce qu'un métier attend vraiment d'un outil, pas ce qu'un brief en parle. C'est ça que j'apporte à chaque projet. »
          </div>
          <div class="eq-founder-meta">
            <div class="eq-fm">
              <span class="k">Domaine</span>
              <span class="v">Patrimoine · Immobilier · SaaS B2B</span>
            </div>
            <div class="eq-fm">
              <span class="k">Rôle projet</span>
              <span class="v">Brief · cadrage · design · intégration front</span>
            </div>
            <div class="eq-fm">
              <span class="k">Entreprises fondées</span>
              <span class="v">3 · dont 2 cabinets actifs</span>
            </div>
            <div class="eq-fm">
              <span class="k">Basé à</span>
              <span class="v">Bassens · Savoie</span>
            </div>
          </div>
        </div>
      </div>

      <!-- EQUIPE TECH -->
      <div class="eq-team">
        <div class="eq-team-intro reveal">
          <h3>Un CTO et des développeurs<br>seniors nommés,<br>augmentés par <em>Claude Code</em>.</h3>
          <p>
            Nicolas au CTO, puis Killian, Frédéric, Arthur, Ryan et Peter sur l'exécution.
            Tous seniors ou confirmés, spécialisés React/Next.js et TypeScript,
            avec une expertise Laravel pour les reprises d'existant.
            Le CTO apporte la vision transverse et le management tech, les devs la profondeur d'exécution.
            Et tous utilisent <b>Claude Code</b> comme assistant de développement : recherches, cadrage,
            architecture, plans d'implémentation. Résultat : <b>on pose moins de questions, on avance
            plus vite, on livre plus proprement</b>.
          </p>
        </div>

        <div class="eq-devs reveal reveal-d-1">
          <div class="eq-dev">
            <div class="eq-dev-head">
              <div class="eq-dev-avatar-wrap"><div class="eq-dev-avatar eq-dev-avatar-cto">NW</div><a class="eq-li-link" href="https://www.linkedin.com/in/nicolas-wallerand-86b0a079/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Nicolas Wallerand" title="LinkedIn Nicolas Wallerand"><svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div>
              <div class="eq-dev-meta">
                <div class="eq-dev-name">Nicolas Wallerand<span class="eq-dev-tag">CTO</span></div>
                <div class="eq-dev-years">CTO · Direction technique</div>
              </div>
            </div>
            <div class="eq-dev-spec">Vision architecture, management transverse, cadrage des projets complexes et revue de code senior.</div>
            <div class="eq-dev-stack"><span>ARCHITECTURE</span><span>TYPESCRIPT</span><span>MANAGEMENT</span></div>
          </div>

          <div class="eq-dev">
            <div class="eq-dev-head">
              <div class="eq-dev-avatar-wrap"><div class="eq-dev-avatar v2">AM</div><a class="eq-li-link" href="https://www.linkedin.com/in/arthurmonney/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Arthur Monney" title="LinkedIn Arthur Monney"><svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div>
              <div class="eq-dev-meta">
                <div class="eq-dev-name">Arthur Monney</div>
                <div class="eq-dev-years">Senior Dev · Back-end</div>
              </div>
            </div>
            <div class="eq-dev-spec">Architecture back-end, systèmes complexes, paiements et facturation. Reprises Laravel.</div>
            <div class="eq-dev-stack"><span>TYPESCRIPT</span><span>STRIPE</span><span>LARAVEL</span></div>
          </div>

          <div class="eq-dev">
            <div class="eq-dev-head">
              <div class="eq-dev-avatar-wrap"><div class="eq-dev-avatar v3">FC</div><a class="eq-li-link" href="https://www.linkedin.com/in/frederic-curinckx/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Frédéric Curinckx" title="LinkedIn Frédéric Curinckx"><svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div>
              <div class="eq-dev-meta">
                <div class="eq-dev-name">Frédéric Curinckx</div>
                <div class="eq-dev-years">Senior Dev · Full-stack</div>
              </div>
            </div>
            <div class="eq-dev-spec">Formulaires métier, interfaces temps-réel et queues — React Server Components, reprises Laravel/Livewire.</div>
            <div class="eq-dev-stack"><span>REACT</span><span>NEXT.JS</span><span>LARAVEL</span></div>
          </div>

          <div class="eq-dev">
            <div class="eq-dev-head">
              <div class="eq-dev-avatar-wrap"><div class="eq-dev-avatar v4">RM</div><a class="eq-li-link" href="https://www.linkedin.com/in/ryan-mazzitelli-907716262/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Ryan Mazzitelli" title="LinkedIn Ryan Mazzitelli"><svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div>
              <div class="eq-dev-meta">
                <div class="eq-dev-name">Ryan Mazzitelli</div>
                <div class="eq-dev-years">Senior Dev · Back-end & IA</div>
              </div>
            </div>
            <div class="eq-dev-spec">Intégrations IA, agents Claude, webhooks et APIs tierces. Reprises Laravel.</div>
            <div class="eq-dev-stack"><span>TYPESCRIPT</span><span>CLAUDE</span><span>LARAVEL</span></div>
          </div>

          <div class="eq-dev">
            <div class="eq-dev-head">
              <div class="eq-dev-avatar-wrap"><div class="eq-dev-avatar v5">KH</div><a class="eq-li-link" href="https://www.linkedin.com/in/killian-hoarau-960927138/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Killian Hoarau" title="LinkedIn Killian Hoarau"><svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div>
              <div class="eq-dev-meta">
                <div class="eq-dev-name">Killian Hoarau</div>
                <div class="eq-dev-years">Senior Dev · Back-end & DevOps</div>
              </div>
            </div>
            <div class="eq-dev-spec">DevOps, sécurité, scalabilité, CI/CD et tests automatisés.</div>
            <div class="eq-dev-stack"><span>TYPESCRIPT</span><span>DOCKER</span><span>AWS</span></div>
          </div>

          <div class="eq-dev">
            <div class="eq-dev-head">
              <div class="eq-dev-avatar-wrap"><div class="eq-dev-avatar v6">PS</div><a class="eq-li-link" href="https://www.codeur.com/-peterssk" target="_blank" rel="noopener noreferrer" aria-label="Profil Codeur Peter Sum Sie Kung" title="Profil Codeur Peter Sum Sie Kung"><svg class="eq-li-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg></a></div>
              <div class="eq-dev-meta">
                <div class="eq-dev-name">Peter Sum Sie Kung</div>
                <div class="eq-dev-years">Dev confirmé · Full-stack</div>
              </div>
            </div>
            <div class="eq-dev-spec">Full-stack React/Vue + PHP (Laravel, Symfony). Renforts API, modélisation BDD et intégrations.</div>
            <div class="eq-dev-stack"><span>REACT</span><span>VUE.JS</span><span>LARAVEL</span></div>
          </div>
        </div>

        <!-- Claude Code highlight -->
        <div class="eq-claude reveal reveal-d-2">
          <div class="eq-claude-icon">
            <svg viewBox="0 0 512 512" fill="#D97757" aria-hidden="true"><path d="M301.86 65h70.94l129.4 382h-70.93l-26.48-81.3H269.2l-26.48 81.3h-70.94L301.86 65zm-11.96 240h94.86l-47.43-145.7L289.9 305z"/></svg>
          </div>
          <div class="eq-claude-body">
            <span class="tag">Méthode · Claude Code</span>
            <h4>Vous décrivez le besoin. On gère le reste.</h4>
            <p>Pas de « 36 000 questions » : nos devs s'appuient sur Claude Code pour <b>faire la recherche de leur côté</b> — cadrage juridique, exploration technique, plans d'implémentation. Vous validez, on livre.</p>
          </div>
        </div>

        <!-- Stats -->
        <div class="eq-stats reveal reveal-d-3">
          <div class="eqs">
            <div class="n">7</div>
            <div class="l">développeurs travaillent avec le gérant</div>
          </div>
          <div class="eqs">
            <div class="n">Senior</div>
            <div class="l">niveau moyen de l'équipe tech</div>
          </div>
          <div class="eqs">
            <div class="n">0</div>
            <div class="l">offshore, white-label, pool anonyme</div>
          </div>
          <div class="eqs">
            <div class="n">100<span class="s"> %</span></div>
            <div class="l">de l'équipe outillée avec Claude Code</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TARIFS -->
<section class="pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Tarifs</div>
        <h2>Quatre façons<br>de travailler ensemble.</h2>
      </div>
      <div class="right">
        On vend au forfait, pas à la journée. Un Discovery Sprint payé pour cadrer,
        puis un plan chiffré forfait ferme. Chaque projet est unique : <b>pas de prix de catalogue</b> —
        chaque devis est calé sur votre périmètre réel.
      </div>
    </div>

    <div class="price-context reveal">
      <div class="price-context-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Comment lire les fourchettes
      </div>
      <p>
        Les fourchettes ci-dessous sont <b>indicatives sur des projets-types récurrents</b>
        (site vitrine, SaaS PME, partenariat tech). Votre projet — son périmètre, sa complexité, ses intégrations,
        son délai — sera <b>chiffré individuellement après cadrage</b>. Décrivez votre projet en 3 minutes :
        nous vous répondons personnellement sous 24 h ouvrées ; pour un devis ferme, on commence par un Discovery Sprint.
      </p>
      <a href="/demarrer-un-projet" class="price-context-cta">
        Décrire mon projet (3 min)
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>

    <div class="price-grid">
      <div class="plan plan-discovery reveal">
        <div class="plan-tag">LE POINT DE DÉPART</div>
        <h4>Discovery Sprint</h4>
        <div class="plan-sub">2 jours payés pour transformer votre idée en plan exécutable. Aucun engagement sur la phase 2.</div>
        <div class="plan-price">
          <span class="amount">1 500 €</span>
          <span class="per">forfait fixe · 2 jours</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Specs fonctionnelles rédigées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Prototype Figma cliquable</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Architecture technique cadrée</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Devis phase 2 chiffré forfait fixe</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Déduit à 100 % si vous lancez avec nous</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Démarrer un Discovery</a></div>
      </div>

      <div class="plan reveal">
        <div class="plan-tag">DÉMARRAGE</div>
        <h4>Essentiel</h4>
        <div class="plan-sub">Un site vitrine ou une landing qui convertit. Idéal pour une première collaboration.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">≈ 6–15 k€ sur projet-type · forfait fixe</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Design sur mesure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SEO technique de série</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement 1 an inclus</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Délai variable selon scope (cadrage en 30 min)</li>
        </ul>
        <div class="plan-cta"><a href="/demarrer-un-projet" class="btn btn-ghost">Décrire mon projet</a></div>
      </div>

      <div class="plan featured reveal reveal-d-1">
        <div class="plan-badge">LE PLUS CHOISI</div>
        <div class="plan-tag">PROJET COMPLET</div>
        <h4>Standard</h4>
        <div class="plan-sub">Un SaaS, un outil interne ou une marketplace. Le sweet spot des PME ambitieuses.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">≈ 25–60 k€ sur projet-type · forfait fixe</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Design produit + développement</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Workflows métier complexes</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Intégrations tierces (Pennylane, Stripe…)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Extraction IA selon besoin</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Formation des équipes</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Délai variable selon scope · démos hebdo</li>
        </ul>
        <div class="plan-cta"><a href="/demarrer-un-projet" class="btn btn-accent">Décrire mon projet</a></div>
      </div>

      <div class="plan reveal reveal-d-2">
        <div class="plan-tag">PARTENARIAT</div>
        <h4>Partenariat</h4>
        <div class="plan-sub">On devient votre équipe tech externalisée. Plusieurs projets, forfait mensuel.</div>
        <div class="plan-price">
          <span class="amount">Sur mesure</span>
          <span class="per">≈ 8–20 k€ / mois selon équipe dédiée</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Équipe dédiée dimensionnée selon vos besoins</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap co-construite</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA : uptime 99,9 % · astreinte Lun–Ven 8h–20h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement 6 mois minimum</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parlons-en</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:44px;color:var(--mute);font-size:14px">
      Tous les forfaits incluent : <b style="color:var(--ink)">propriété complète du code · repo Git chez vous · formation équipe · 30 jours de garantie post-livraison</b>
    </p>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ</div>
        <h2 style="margin-top:14px">Les questions<br>qu'on nous pose<br>tout le temps.</h2>
        <p>Manquante ? <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">Posez-la directement</a> par email, on répond sous 24 h ouvrées.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">On a pas de cahier des charges — c'est bloquant ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Pas du tout.</b> Beaucoup de projets démarrent avec une idée claire mais pas de doc formelle.
            Un appel de 30 minutes suffit pour qu'on comprenne l'essentiel. On rédige ensuite le périmètre
            avec vous — c'est notre métier, pas le vôtre.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Qui est propriétaire du code et des données ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Vous, entièrement.</b> Le code est sur votre repo Git dès le jour 1. Les données sont hébergées
            en France (Scaleway ou OVH) sous votre nom. Si vous arrêtez de travailler avec nous, vous gardez tout.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Pourquoi Next.js et React ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Next.js et React sont <b>notre stack de référence</b> : TypeScript de bout en bout,
            du formulaire à la base de données, et l'écosystème le plus large du marché — n'importe
            quelle équipe React peut reprendre le code demain. Les performances statiques et le SSR
            portent le SEO, et React Native mutualise le développement mobile avec le web.
            Et si votre existant est en Laravel ou PHP, on le reprend et on l'audite aussi.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Combien de temps pour livrer un projet type ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Site vitrine : <b>2 à 4 semaines</b>. Outil interne ou SaaS simple : <b>5 à 8 semaines</b>.
            Plateforme complexe : <b>3 à 6 mois</b>. On s'engage sur un délai fixe dans le devis,
            puis on vous montre l'avancement chaque semaine. Quand un risque apparaît, on le dit tôt,
            pas à la veille de la livraison.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Et après la livraison, comment ça se passe ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            30 jours de garantie systématique. Après, deux options : soit on signe un <b>forfait maintenance
            mensuel</b> (hébergement, bugs, petites évolutions), soit vous reprenez la main avec votre équipe tech.
            Aucune option n'est obligatoire.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous travaillez avec des ETI ou des grands comptes ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Notre sweet spot, ce sont les <b>dirigeants de PME, cabinets spécialisés et équipes métier</b>
            qui veulent un outil concret sans monter une équipe tech complète. Pour les très grandes
            organisations, on est pertinent sur un périmètre cadré, pas comme ESN généraliste.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="fcta" id="contact">
  <div class="fcta-bg"></div>
  <div class="wrap inner">
    <div class="eyebrow on-dark">— Prochaine étape</div>
    <h2 style="margin-top:18px">Parlons de<br>votre projet.<br><span class="accent">30 min, c'est tout.</span></h2>
    <p>Un call de cadrage gratuit avec un expert. Vous repartez avec un avis franc et, sous 48 h, une fourchette et un plan — sans engagement.</p>
    <div class="fcta-cta">
      <a href="https://calendly.com/hagnere-patrimoine/hagnere-code-entretien-de-decouverte" target="_blank" rel="noopener" class="btn btn-accent btn-lg">
        📅 &nbsp;Réserver 30 min sur Calendly
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a href="mailto:quentin@hagnere-patrimoine.fr" class="btn btn-ghost btn-lg" style="background:rgba(255,255,255,0.05);color:#fff;border-color:rgba(255,255,255,0.15)">
        Envoyer un email →
      </a>
    </div>
    <div class="fcta-meta">RÉPONSE SOUS 24H OUVRÉES · PAR UN ASSOCIÉ · SANS ENGAGEMENT</div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <a href="/" class="brand" style="margin-bottom:16px">
          <div class="brand-mark">HC</div>
          <div class="brand-name"><b>Hagnéré</b> <span>Code</span></div>
        </a>
        <p>Studio produit basé à Bassens, aux portes de Chambéry. SaaS, applications métier, sites vitrines et outils internes au forfait fixe.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col">
          <h5>SERVICES</h5>
          <a href="/services/saas-applications-metier">SaaS &amp; applications métier</a>
          <a href="/services/outils-internes-sur-mesure">Outils internes</a>
          <a href="/services/sites-vitrines">Sites vitrines</a>
          <a href="/services/referencement-google">SEO</a>
          <a href="/services/publicite-en-ligne">Publicité</a>
        </div>
        <div class="foot-col">
          <h5>STUDIO</h5>
          <a href="/methode">Méthode</a>
          <a href="/realisations">Réalisations</a>
          <a href="/equipe">Équipe</a>
          <a href="/tarifs">Tarifs</a>
        </div>
        <div class="foot-col">
          <h5>CONTACT</h5>
          <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>
          <a href="/contact">Formulaire contact</a>
          <a href="/demarrer-un-projet">Démarrer un projet</a>
        </div>
        <div class="foot-col">
          <h5>LÉGAL</h5>
          <a href="/legal/cgv">CGV</a>
          <a href="/legal/mentions">Mentions légales</a>
          <a href="/legal/confidentialite">Confidentialité</a>
          <a href="/legal/cookies">Cookies</a>
        </div>
      </div>
    </div>
    <div class="foot-bot">
      <div>© 2026 HAGNÉRÉ CODE SAS · RCS Chambéry 993 672 856 · SIRET 993 672 856 00016 · TVA FR30 993 672 856 · NAF 62.01Z</div>
      <div>BUILT WITH NEXT.JS + CLAUDE CODE</div>
    </div>
  </div>
</footer>
`;
