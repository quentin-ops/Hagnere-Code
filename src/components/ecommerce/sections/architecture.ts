export const architectureHtml = `
<!-- ARCHITECTURE E-COMMERCE -->
<section class="ec-arch">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Sous le capot</div>
        <h2 style="margin-top:14px">À quoi ressemble<br>une boutique Hagnéré.</h2>
      </div>
      <div class="right">
        Pas une slide marketing. L'architecture réelle d'une de nos boutiques en production : storefront
        Next.js + app mobile React Native + cœur Laravel + intégrations FR natives. Headless, standard,
        remplaçable. Votre DSI peut reprendre demain si besoin.
      </div>
    </div>

    <div class="ec-arch-diagram reveal">
      <svg viewBox="0 0 1200 680" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture type d'une boutique Hagnéré Code">
        <defs>
          <pattern id="ecarchgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="1200" height="680" fill="url(#ecarchgrid)"/>

        <!-- FRONTS -->
        <text x="60" y="60" font-family="Geist Mono" font-size="11" fill="#6D28D9" letter-spacing="0.08em">— FRONTS (VOS CLIENTS &amp; VOS ÉQUIPES)</text>
        <g transform="translate(60 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">STOREFRONT WEB</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Next.js 15 · React 19</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">SSR + ISR · LCP &lt; 1,5s</text>
        </g>
        <g transform="translate(340 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">APP MOBILE</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">React Native + Expo</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Push · wallet · scan · offline</text>
        </g>
        <g transform="translate(620 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">BACK-OFFICE OPS</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Filament 3 · Livewire</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Commandes, étiquettes, stock</text>
        </g>
        <g transform="translate(900 80)">
          <rect width="240" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">DASHBOARD DIRECTION</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">CA · marges · stocks</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Temps réel + exports</text>
        </g>

        <g stroke="rgba(109,40,217,0.5)" stroke-width="1.5" fill="none">
          <path d="M 190 168 L 420 240"/>
          <path d="M 470 168 L 520 240"/>
          <path d="M 750 168 L 640 240"/>
          <path d="M 1020 168 L 740 240"/>
        </g>

        <!-- CORE -->
        <text x="60" y="220" font-family="Geist Mono" font-size="11" fill="#6D28D9" letter-spacing="0.08em">— CŒUR MÉTIER E-COMMERCE</text>
        <g transform="translate(340 240)">
          <rect width="520" height="96" rx="12" fill="#6D28D9" stroke="rgba(255,255,255,0.18)"/>
          <text x="24" y="34" font-family="Geist Mono" font-size="11" fill="rgba(255,255,255,0.8)" letter-spacing="0.06em">LARAVEL 13 · PHP 8.3 · CASHIER STRIPE</text>
          <text x="24" y="60" font-family="Geist" font-size="20" font-weight="600" fill="#fff">Hagnéré Commerce Core</text>
          <text x="24" y="82" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.8)">Catalogue · panier · checkout · commandes · promo · loyalty · RGPD</text>
        </g>

        <g transform="translate(60 240)">
          <rect width="240" height="96" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">AGENTS IA</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Claude · Prism · pgvector</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Descriptions, reco, SAV, recherche</text>
        </g>
        <g transform="translate(900 240)">
          <rect width="240" height="96" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">JOBS &amp; CRON</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Horizon + Redis</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Étiquettes, factures, feeds</text>
        </g>

        <g stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none" stroke-dasharray="4 4">
          <path d="M 600 336 L 600 408"/>
          <path d="M 180 336 L 300 408"/>
          <path d="M 1020 336 L 900 408"/>
        </g>

        <!-- DATA -->
        <text x="60" y="388" font-family="Geist Mono" font-size="11" fill="#6D28D9" letter-spacing="0.08em">— VOS DONNÉES (HÉBERGÉES EN FRANCE)</text>
        <g transform="translate(60 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">POSTGRESQL 17</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Catalogue + commandes</text>
          <text x="20" y="68" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.55)">pgvector pour recherche sémantique</text>
        </g>
        <g transform="translate(330 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">REDIS 7</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Panier + cache + queues</text>
          <text x="20" y="68" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.55)">Sessions, rate-limit, workers</text>
        </g>
        <g transform="translate(600 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">MEILISEARCH</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Recherche facettée</text>
          <text x="20" y="68" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.55)">Typo-tolérant, multilingue</text>
        </g>
        <g transform="translate(870 408)">
          <rect width="270" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="10" fill="#6D28D9" letter-spacing="0.06em">OBJECT STORE + CDN</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Images · AVIF/WebP · Cloudflare</text>
          <text x="20" y="68" font-family="Geist" font-size="11" fill="rgba(255,255,255,0.55)">Scaleway Object / R2</text>
        </g>

        <!-- INTEGRATIONS FR -->
        <text x="60" y="540" font-family="Geist Mono" font-size="11" fill="#a3e47f" letter-spacing="0.08em">— INTÉGRATIONS FR NATIVES</text>
        <g font-family="Geist Mono" font-size="11" fill="rgba(255,255,255,0.75)">
          <rect x="60" y="560" width="100" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="110" y="584" text-anchor="middle">Stripe</text>

          <rect x="170" y="560" width="85" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="212" y="584" text-anchor="middle">Alma</text>

          <rect x="265" y="560" width="110" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="320" y="584" text-anchor="middle">Colissimo</text>

          <rect x="385" y="560" width="120" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="445" y="584" text-anchor="middle">Chronopost</text>

          <rect x="515" y="560" width="140" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="585" y="584" text-anchor="middle">Mondial Relay</text>

          <rect x="665" y="560" width="110" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="720" y="584" text-anchor="middle">Sage 100</text>

          <rect x="785" y="560" width="110" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="840" y="584" text-anchor="middle">Pennylane</text>

          <rect x="905" y="560" width="120" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="965" y="584" text-anchor="middle">Chorus Pro</text>

          <rect x="1035" y="560" width="105" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="1087" y="584" text-anchor="middle">+ 40 autres</text>

          <rect x="60" y="610" width="120" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="120" y="634" text-anchor="middle">Brevo / Klaviyo</text>

          <rect x="190" y="610" width="140" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="260" y="634" text-anchor="middle">Amazon SP-API</text>

          <rect x="340" y="610" width="120" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="400" y="634" text-anchor="middle">CDiscount Pro</text>

          <rect x="470" y="610" width="140" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="540" y="634" text-anchor="middle">Avis Vérifiés</text>

          <rect x="620" y="610" width="130" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="685" y="634" text-anchor="middle">GA4 server-side</text>

          <rect x="760" y="610" width="120" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="820" y="634" text-anchor="middle">Meta CAPI</text>

          <rect x="890" y="610" width="125" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="952" y="634" text-anchor="middle">Apple Pay</text>

          <rect x="1025" y="610" width="115" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="1082" y="634" text-anchor="middle">Google Pay</text>
        </g>
      </svg>
    </div>

    <div class="ec-arch-caption reveal">
      <div class="ec-arch-caption-k">
        <span><span class="ec-arch-dot" style="background:#6D28D9"></span> Cœur métier Hagnéré</span>
        <span><span class="ec-arch-dot" style="background:#404040"></span> Composants standards</span>
        <span><span class="ec-arch-dot" style="background:#a3e47f"></span> Écosystème FR intégré</span>
      </div>
      <p>
        Aucun framework propriétaire, aucune boîte noire, aucun SaaS tiers obligatoire.
        Votre équipe technique peut reprendre ce code avec n'importe quelle ESN française qui fait du Laravel +
        Next.js. C'est exactement ça, le "sur mesure".
      </p>
    </div>
  </div>
</section>
`;
