export const architectureHtml = `
<!-- ARCHITECTURE SCHEMATIC -->
<section class="sv-arch">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Sous le capot</div>
        <h2 style="margin-top:14px">Voici à quoi ressemble<br>un site qu'on livre.</h2>
      </div>
      <div class="right">
        Schéma de référence à adapter au projet : site statique Next.js, formulaires,
        CMS headless, services externes et infrastructure. Il ne décrit pas une architecture
        client vérifiable ; le devis liste les briques, dépendances et responsabilités retenues.
      </div>
    </div>

    <div class="sv-arch-diagram reveal">
      <svg viewBox="0 0 1200 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture type d'un site vitrine Hagnéré Code">
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

        <!-- FRONT LAYER -->
        <text x="60" y="60" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.08em">— FRONT</text>
        <!-- Public site -->
        <g transform="translate(60 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">SITE PUBLIC</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Next.js 16 · statique</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Pages, blog, landings, pages locales</text>
        </g>
        <!-- Content editing -->
        <g transform="translate(340 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">ÉDITION CONTENU</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Sanity Studio / Strapi</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Marketing publie en autonomie</text>
        </g>
        <!-- Forms -->
        <g transform="translate(620 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">FORMULAIRES</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Contact · Devis · RDV</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Anti-spam, RGPD, notifications</text>
        </g>
        <!-- Scheduling -->
        <g transform="translate(900 80)">
          <rect width="240" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">PRISE DE RDV</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Calendly / Cal.com</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Créneaux synchro agenda</text>
        </g>

        <!-- Arrows to site core -->
        <g stroke="rgba(109,40,217,0.5)" stroke-width="1.5" fill="none">
          <path d="M 190 168 L 420 240"/>
          <path d="M 470 168 L 520 240"/>
          <path d="M 750 168 L 640 240"/>
          <path d="M 1020 168 L 740 240"/>
        </g>

        <!-- SITE CORE -->
        <text x="60" y="220" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.08em">— CŒUR DU SITE</text>
        <g transform="translate(340 240)">
          <rect width="520" height="96" rx="12" fill="#6D28D9" stroke="rgba(255,255,255,0.18)"/>
          <text x="24" y="34" font-family="Geist Mono" font-size="12" fill="rgba(255,255,255,0.8)" letter-spacing="0.06em">NEXT.JS 16 · TYPESCRIPT</text>
          <text x="24" y="60" font-family="Geist" font-size="20" font-weight="600" fill="#fff">Site statique Next.js</text>
          <text x="24" y="82" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.8)">SSG · ISR · Routes API formulaires · SEO · Sitemap · Images optimisées</text>
        </g>

        <!-- Side boxes next to core -->
        <g transform="translate(60 240)">
          <rect width="240" height="96" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">SEO TECHNIQUE</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Schema.org · hreflang</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Redirections 301, Open Graph</text>
        </g>
        <g transform="translate(900 240)">
          <rect width="240" height="96" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">WEBHOOKS CRM</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">HubSpot / Brevo</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Leads poussés en temps réel</text>
        </g>

        <!-- Arrows down to data -->
        <g stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none" stroke-dasharray="4 4">
          <path d="M 600 336 L 600 408"/>
          <path d="M 180 336 L 300 408"/>
          <path d="M 1020 336 L 900 408"/>
        </g>

        <!-- CONTENT & MEASURE -->
        <text x="60" y="388" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.08em">— CONTENUS &amp; MESURE</text>
        <g transform="translate(60 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">CMS HEADLESS</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Contenus versionnés</text>
          <text x="20" y="68" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Sanity / Strapi, brouillons, rôles</text>
        </g>
        <g transform="translate(330 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">MEDIA / CDN</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Images optimisées</text>
          <text x="20" y="68" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">AVIF / WebP, resize à la volée</text>
        </g>
        <g transform="translate(600 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">S3 / OBJECT STORE</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Fichiers + backups</text>
          <text x="20" y="68" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Sauvegardes chiffrées du CMS</text>
        </g>
        <g transform="translate(870 408)">
          <rect width="270" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">ANALYTICS</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">GA4 / Plausible</text>
          <text x="20" y="68" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Events de conversion, consentement</text>
        </g>

        <!-- EXTERNAL SERVICES -->
        <text x="60" y="540" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.08em">— SERVICES EXTERNES</text>
        <g font-family="Geist Mono" font-size="12" fill="rgba(255,255,255,0.75)">
          <rect x="60" y="560" width="100" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="110" y="584" text-anchor="middle">HubSpot</text>

          <rect x="170" y="560" width="120" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="230" y="584" text-anchor="middle">Brevo</text>

          <rect x="300" y="560" width="110" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="355" y="584" text-anchor="middle">Calendly</text>

          <rect x="420" y="560" width="100" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="470" y="584" text-anchor="middle">Resend</text>

          <rect x="530" y="560" width="100" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="580" y="584" text-anchor="middle">Sentry</text>

          <rect x="640" y="560" width="110" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="695" y="584" text-anchor="middle">GA4</text>

          <rect x="760" y="560" width="100" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="810" y="584" text-anchor="middle">Meta Pixel</text>

          <rect x="870" y="560" width="120" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="930" y="584" text-anchor="middle">Search Console</text>

          <rect x="1000" y="560" width="140" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="1070" y="584" text-anchor="middle">Cloudflare CDN</text>
        </g>
      </svg>
    </div>

    <!-- Equivalent HTML du schema, affiche a la place du SVG sous 768px -->
    <div class="sv-arch-stack reveal">
      <div class="sv-arch-layer">
        <div class="sv-arch-layer-k">&mdash; FRONT</div>
        <div class="sv-arch-cards">
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">SITE PUBLIC</div>
          <div class="sv-arch-card-t">Next.js 16 &middot; statique</div>
          <div class="sv-arch-card-d">Pages, blog, landings, pages locales</div>
        </div>
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">&Eacute;DITION CONTENU</div>
          <div class="sv-arch-card-t">Sanity Studio / Strapi</div>
          <div class="sv-arch-card-d">Marketing publie en autonomie</div>
        </div>
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">FORMULAIRES</div>
          <div class="sv-arch-card-t">Contact &middot; Devis &middot; RDV</div>
          <div class="sv-arch-card-d">Anti-spam, RGPD, notifications</div>
        </div>
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">PRISE DE RDV</div>
          <div class="sv-arch-card-t">Calendly / Cal.com</div>
          <div class="sv-arch-card-d">Cr&eacute;neaux synchro agenda</div>
        </div>
        </div>
      </div>
      <div class="sv-arch-flow" aria-hidden="true"></div>
      <div class="sv-arch-layer">
        <div class="sv-arch-layer-k">&mdash; C&OElig;UR DU SITE</div>
        <div class="sv-arch-cards">
        <div class="sv-arch-card sv-arch-card-core">
          <div class="sv-arch-card-k">NEXT.JS 16 &middot; TYPESCRIPT</div>
          <div class="sv-arch-card-t">Site statique Next.js</div>
          <div class="sv-arch-card-d">SSG &middot; ISR &middot; Routes API formulaires &middot; SEO &middot; Sitemap &middot; Images optimis&eacute;es</div>
        </div>
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">SEO TECHNIQUE</div>
          <div class="sv-arch-card-t">Schema.org &middot; hreflang</div>
          <div class="sv-arch-card-d">Redirections 301, Open Graph</div>
        </div>
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">WEBHOOKS CRM</div>
          <div class="sv-arch-card-t">HubSpot / Brevo</div>
          <div class="sv-arch-card-d">Leads pouss&eacute;s en temps r&eacute;el</div>
        </div>
        </div>
      </div>
      <div class="sv-arch-flow" aria-hidden="true"></div>
      <div class="sv-arch-layer">
        <div class="sv-arch-layer-k">&mdash; CONTENUS &amp; MESURE</div>
        <div class="sv-arch-cards">
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">CMS HEADLESS</div>
          <div class="sv-arch-card-t">Contenus versionn&eacute;s</div>
          <div class="sv-arch-card-d">Sanity / Strapi, brouillons, r&ocirc;les</div>
        </div>
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">MEDIA / CDN</div>
          <div class="sv-arch-card-t">Images optimis&eacute;es</div>
          <div class="sv-arch-card-d">AVIF / WebP, resize &agrave; la vol&eacute;e</div>
        </div>
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">S3 / OBJECT STORE</div>
          <div class="sv-arch-card-t">Fichiers + backups</div>
          <div class="sv-arch-card-d">Sauvegardes chiffr&eacute;es du CMS</div>
        </div>
        <div class="sv-arch-card">
          <div class="sv-arch-card-k">ANALYTICS</div>
          <div class="sv-arch-card-t">GA4 / Plausible</div>
          <div class="sv-arch-card-d">Events de conversion, consentement</div>
        </div>
        </div>
      </div>
      <div class="sv-arch-layer">
        <div class="sv-arch-layer-k">&mdash; SERVICES EXTERNES</div>
        <ul class="sv-arch-chips">
          <li>HubSpot</li>
          <li>Brevo</li>
          <li>Calendly</li>
          <li>Resend</li>
          <li>Sentry</li>
          <li>GA4</li>
          <li>Meta Pixel</li>
          <li>Search Console</li>
          <li>Cloudflare CDN</li>
        </ul>
      </div>
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
