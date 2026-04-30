export const architectureHtml = `
<!-- ARCHITECTURE SCHEMATIC -->
<section class="sv-arch">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Sous le capot</div>
        <h2 style="margin-top:14px">Voici à quoi ressemble<br>un SaaS qu'on livre.</h2>
      </div>
      <div class="right">
        Pas une slide marketing. L'architecture réelle d'un de nos SaaS en production,
        simplifiée : front-ends web &amp; mobile, API Laravel, data, services externes,
        infra. Chaque brique est un standard industriel.
      </div>
    </div>

    <div class="sv-arch-diagram reveal">
      <svg viewBox="0 0 1200 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture type d'un SaaS Hagnéré Code">
        <!-- Background subtle grid -->
        <defs>
          <pattern id="archgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          </pattern>
          <linearGradient id="purpleEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6D28D9" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#6D28D9" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="640" fill="url(#archgrid)"/>

        <!-- CLIENT LAYER -->
        <text x="60" y="60" font-family="Geist Mono" font-size="11" fill="#6D28D9" letter-spacing="0.08em">— CLIENTS</text>
        <!-- Web client -->
        <g transform="translate(60 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">WEB CLIENT</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Next.js 15 + React 19</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Dashboard, marketing, onboarding</text>
        </g>
        <!-- Mobile client -->
        <g transform="translate(340 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">MOBILE CLIENT</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">React Native + Expo</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">iOS &amp; Android · 1 codebase</text>
        </g>
        <!-- Back-office -->
        <g transform="translate(620 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">BACK-OFFICE ADMIN</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Filament + Livewire</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Support, stats, impersonation</text>
        </g>
        <!-- Public API -->
        <g transform="translate(900 80)">
          <rect width="240" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">API PUBLIQUE</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">REST + OpenAPI</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Clés, rate-limit, webhooks</text>
        </g>

        <!-- Arrows to API core -->
        <g stroke="rgba(109,40,217,0.5)" stroke-width="1.5" fill="none">
          <path d="M 190 168 L 420 240"/>
          <path d="M 470 168 L 520 240"/>
          <path d="M 750 168 L 640 240"/>
          <path d="M 1020 168 L 740 240"/>
        </g>

        <!-- API CORE -->
        <text x="60" y="220" font-family="Geist Mono" font-size="11" fill="#6D28D9" letter-spacing="0.08em">— CORE API</text>
        <g transform="translate(340 240)">
          <rect width="520" height="96" rx="12" fill="#6D28D9" stroke="rgba(255,255,255,0.18)"/>
          <text x="24" y="34" font-family="Geist Mono" font-size="11" fill="rgba(255,255,255,0.8)" letter-spacing="0.06em">LARAVEL 13 · PHP 8.4</text>
          <text x="24" y="60" font-family="Geist" font-size="20" font-weight="600" fill="#fff">Hagnéré Core</text>
          <text x="24" y="82" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.8)">Auth · RBAC · Billing · Multi-tenant · API · Events · Jobs</text>
        </g>

        <!-- Side boxes next to core -->
        <g transform="translate(60 240)">
          <rect width="240" height="96" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">AGENTS IA</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Claude · GPT-4o · Prism</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Extraction, RAG, tool-calling</text>
        </g>
        <g transform="translate(900 240)">
          <rect width="240" height="96" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">QUEUES &amp; CRON</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Horizon + Redis</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Jobs async, retries, observabilité</text>
        </g>

        <!-- Arrows down to data -->
        <g stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none" stroke-dasharray="4 4">
          <path d="M 600 336 L 600 408"/>
          <path d="M 180 336 L 300 408"/>
          <path d="M 1020 336 L 900 408"/>
        </g>

        <!-- DATA -->
        <text x="60" y="388" font-family="Geist Mono" font-size="11" fill="#6D28D9" letter-spacing="0.08em">— DATA</text>
        <g transform="translate(60 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">POSTGRESQL</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Base principale</text>
          <text x="20" y="68" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.55)">Multi-tenant, migrations versionnées</text>
        </g>
        <g transform="translate(330 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">REDIS</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Cache + queues + rate-limit</text>
          <text x="20" y="68" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.55)">Sessions, cache applicatif, sockets</text>
        </g>
        <g transform="translate(600 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">S3 / OBJECT STORE</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Fichiers + backups</text>
          <text x="20" y="68" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.55)">Scaleway Object / AWS S3, chiffré</text>
        </g>
        <g transform="translate(870 408)">
          <rect width="270" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">MEILISEARCH</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Recherche full-text</text>
          <text x="20" y="68" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.55)">Index tuné, facettes, typo-tolerant</text>
        </g>

        <!-- EXTERNAL SERVICES -->
        <text x="60" y="540" font-family="Geist Mono" font-size="11" fill="#6D28D9" letter-spacing="0.08em">— SERVICES EXTERNES</text>
        <g font-family="Geist Mono" font-size="11" fill="rgba(255,255,255,0.75)">
          <rect x="60" y="560" width="100" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="110" y="584" text-anchor="middle">Stripe</text>

          <rect x="170" y="560" width="120" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="230" y="584" text-anchor="middle">GoCardless</text>

          <rect x="300" y="560" width="110" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="355" y="584" text-anchor="middle">Postmark</text>

          <rect x="420" y="560" width="100" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="470" y="584" text-anchor="middle">Resend</text>

          <rect x="530" y="560" width="100" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="580" y="584" text-anchor="middle">Sentry</text>

          <rect x="640" y="560" width="110" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="695" y="584" text-anchor="middle">PostHog</text>

          <rect x="760" y="560" width="100" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="810" y="584" text-anchor="middle">Twilio</text>

          <rect x="870" y="560" width="120" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="930" y="584" text-anchor="middle">HubSpot / CRM</text>

          <rect x="1000" y="560" width="140" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="1070" y="584" text-anchor="middle">Pennylane / Axonaut</text>
        </g>
      </svg>
    </div>

    <div class="sv-arch-caption reveal">
      <div class="sv-arch-caption-k">
        <span><span class="sv-arch-dot" style="background:#6D28D9"></span> Cœur de la stack</span>
        <span><span class="sv-arch-dot" style="background:#404040"></span> Composants maîtrisés</span>
        <span><span class="sv-arch-dot" style="background:rgba(255,255,255,0.2)"></span> Services externes</span>
      </div>
      <p>
        Chaque bloc est un standard industriel documenté, observable et remplaçable.
        Pas de magie, pas de boîte noire — votre équipe technique peut reprendre sans frictions.
      </p>
    </div>
  </div>
</section>
`;
