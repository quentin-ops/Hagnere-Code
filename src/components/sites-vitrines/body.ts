import { navHtml } from "@/components/design-shared/nav-html";

export const bodyHtml = `
${navHtml}
<!-- BREADCRUMB -->
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <a href="/services">Services</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">Sites vitrines &amp; landing pages</span>
  </div>
</div>

<!-- HERO -->
<section class="shero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow"><span class="pill"><span class="dot"></span> Service · Sites vitrines &amp; landing pages</span></div>
      <h1>Le <span class="accent">site vitrine qui convertit</span>,<br>pas juste un site<br>qui existe.</h1>
      <div class="shero-tagline">
        <span>⚡ Budget de performance mesuré</span>
        <span class="sep"></span>
        <span>🎯 Pensé pour convertir</span>
        <span class="sep"></span>
        <span>💶 Forfait fixe, sans surprise</span>
      </div>
      <p class="shero-sub">
        Un site vitrine qui fait <b>signer vos prospects</b>, une landing page qui <b>transforme votre budget Ads en leads qualifiés</b>, un blog SEO qui vous positionne sur les bonnes requêtes.
        Design sur mesure, développement Next.js, objectifs de performance mesurés et CMS adapté —
        avec des accès, droits et conditions de réversibilité écrits au devis.
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Cadrer mon projet <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" class="btn btn-ghost btn-lg">Audit gratuit de mon site actuel</a>
      </div>
      <div class="shero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Livré en 2 à 8 semaines</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Objectifs LCP / CLS / INP au devis</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> CMS que vous éditez</span>
      </div>
    </div>

    <!-- VISUAL: stacked product mock -->
    <div class="shero-visual">
      <div class="mock-window mw-main">
        <div class="win-chrome">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url">votre-entreprise.fr</div>
        </div>
        <svg width="100%" viewBox="0 0 540 360" style="display:block">
          <!-- site vitrine preview : hero + sections layout -->
          <rect width="540" height="360" fill="#fff"/>
          <!-- top nav -->
          <rect x="0" y="0" width="540" height="40" fill="#fff"/>
          <rect x="0" y="39" width="540" height="1" fill="#f0f0f0"/>
          <rect x="24" y="16" width="22" height="8" rx="2" fill="#0A0A0A"/>
          <rect x="320" y="16" width="30" height="5" rx="2" fill="#737373"/>
          <rect x="360" y="16" width="24" height="5" rx="2" fill="#737373"/>
          <rect x="394" y="16" width="34" height="5" rx="2" fill="#737373"/>
          <rect x="440" y="12" width="64" height="16" rx="4" fill="#0A0A0A"/>
          <text x="472" y="23" text-anchor="middle" font-family="Geist" font-weight="600" font-size="7" fill="#fff">Contact</text>
          <!-- hero section -->
          <rect x="0" y="40" width="540" height="200" fill="url(#gheroG)"/>
          <defs>
            <linearGradient id="gheroG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#FAFAFA"/>
              <stop offset="1" stop-color="#EDE9FE"/>
            </linearGradient>
            <linearGradient id="gaccent" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-style="color:var(--accent)"/>
              <stop offset="1" stop-color="#A78BFA"/>
            </linearGradient>
          </defs>
          <!-- hero pill -->
          <rect x="56" y="70" width="108" height="20" rx="10" fill="#fff" stroke="#E5E5E5"/>
          <circle cx="70" cy="80" r="3" fill="#6D28D9"/>
          <rect x="78" y="77" width="74" height="6" rx="2" fill="#4C1D95"/>
          <!-- hero headline (big lines) -->
          <rect x="56" y="106" width="340" height="14" rx="3" fill="#0A0A0A"/>
          <rect x="56" y="126" width="280" height="14" rx="3" fill="#0A0A0A"/>
          <rect x="56" y="146" width="220" height="14" rx="3" fill="url(#gaccent)"/>
          <!-- subtitle -->
          <rect x="56" y="172" width="320" height="5" rx="2" fill="#737373"/>
          <rect x="56" y="183" width="260" height="5" rx="2" fill="#737373"/>
          <!-- CTAs -->
          <rect x="56" y="200" width="104" height="22" rx="5" fill="#6D28D9"/>
          <rect x="78" y="208" width="60" height="6" rx="2" fill="#fff"/>
          <rect x="170" y="200" width="104" height="22" rx="5" fill="#fff" stroke="#E5E5E5"/>
          <rect x="192" y="208" width="60" height="6" rx="2" fill="#404040"/>
          <!-- section separator -->
          <rect x="0" y="239" width="540" height="1" fill="#EFEFEF"/>
          <!-- features row (3 cards) -->
          <g transform="translate(0 254)">
            <rect x="56" y="0" width="132" height="88" rx="8" fill="#fff" stroke="#E5E5E5"/>
            <rect x="72" y="14" width="20" height="20" rx="4" fill="#EDE9FE"/>
            <rect x="76" y="18" width="12" height="12" rx="2" fill="#6D28D9"/>
            <rect x="72" y="44" width="84" height="6" rx="2" fill="#0A0A0A"/>
            <rect x="72" y="58" width="100" height="4" rx="2" fill="#a3a3a3"/>
            <rect x="72" y="66" width="80" height="4" rx="2" fill="#a3a3a3"/>
            <rect x="204" y="0" width="132" height="88" rx="8" fill="#fff" stroke="#E5E5E5"/>
            <rect x="220" y="14" width="20" height="20" rx="4" fill="#EDE9FE"/>
            <rect x="224" y="18" width="12" height="12" rx="2" fill="#6D28D9"/>
            <rect x="220" y="44" width="88" height="6" rx="2" fill="#0A0A0A"/>
            <rect x="220" y="58" width="104" height="4" rx="2" fill="#a3a3a3"/>
            <rect x="220" y="66" width="72" height="4" rx="2" fill="#a3a3a3"/>
            <rect x="352" y="0" width="132" height="88" rx="8" fill="#fff" stroke="#E5E5E5"/>
            <rect x="368" y="14" width="20" height="20" rx="4" fill="#EDE9FE"/>
            <rect x="372" y="18" width="12" height="12" rx="2" fill="#6D28D9"/>
            <rect x="368" y="44" width="76" height="6" rx="2" fill="#0A0A0A"/>
            <rect x="368" y="58" width="96" height="4" rx="2" fill="#a3a3a3"/>
            <rect x="368" y="66" width="68" height="4" rx="2" fill="#a3a3a3"/>
          </g>
        </svg>        </svg>
      </div>

      <div class="mock-window mw-side">
        <div class="win-chrome" style="background:#0d0d0d;border-color:rgba(255,255,255,0.08)">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url" style="color:rgba(255,255,255,0.5)">PageSpeed Insights · mobile</div>
        </div>
        <div style="padding:20px 22px 18px;background:#0A0A0A;color:#E5E5E5;font-family:'Geist',ui-sans-serif,system-ui,sans-serif;font-size:12px;line-height:1.5">
          <!-- Score dial (simulé) -->
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
            <svg width="64" height="64" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="5"/>
              <circle cx="32" cy="32" r="28" fill="none" stroke="#0CCE6B" stroke-width="5" stroke-linecap="round" stroke-dasharray="166 176" transform="rotate(-90 32 32)"/>
              <text x="32" y="38" text-anchor="middle" font-family="Geist" font-weight="700" font-size="20" fill="#fff">97</text>
            </svg>
            <div>
              <div style="font-family:'Geist Mono';font-size:9px;color:#737373;letter-spacing:0.12em">PERFORMANCE</div>
              <div style="font-size:13px;font-weight:600;color:#fff;margin-top:4px">Mobile · 97 / 100</div>
              <div style="font-family:'Geist Mono';font-size:10px;color:#0CCE6B;margin-top:2px">Optimal</div>
            </div>
          </div>
          <!-- CWV -->
          <div style="display:flex;flex-direction:column;gap:10px;padding-top:14px;border-top:1px solid rgba(255,255,255,0.08)">
            <div style="display:flex;justify-content:space-between;align-items:baseline">
              <span style="font-family:'Geist Mono';font-size:10px;color:#737373;letter-spacing:0.08em">LCP</span>
              <span style="font-family:'Geist Mono';font-size:12px;font-weight:600;color:#0CCE6B">1,1 s</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:baseline">
              <span style="font-family:'Geist Mono';font-size:10px;color:#737373;letter-spacing:0.08em">CLS</span>
              <span style="font-family:'Geist Mono';font-size:12px;font-weight:600;color:#0CCE6B">0,03</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:baseline">
              <span style="font-family:'Geist Mono';font-size:10px;color:#737373;letter-spacing:0.08em">INP</span>
              <span style="font-family:'Geist Mono';font-size:12px;font-weight:600;color:#0CCE6B">87 ms</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:baseline">
              <span style="font-family:'Geist Mono';font-size:10px;color:#737373;letter-spacing:0.08em">TBT</span>
              <span style="font-family:'Geist Mono';font-size:12px;font-weight:600;color:#0CCE6B">120 ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT WE BUILD -->
<section class="whatweb">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on construit</div>
        <h2>Un site vitrine, ce n'est pas<br>juste une brochure en ligne.</h2>
      </div>
      <div class="right">
        On construit des sites qui vendent vraiment (<a href="/guides/prix-site-vitrine">les prix du marché, gamme par gamme</a>) : <a href="/services/referencement-google">SEO technique</a> de série, CWV verts,
        CMS que vous éditez sans nous, formulaires branchés au CRM, tunnel de conversion pensé au pixel.
      </div>
    </div>

    <div class="use-grid">
      <div class="uc reveal">
        <div class="uc-num">/ 01</div>
        <h3>Sites vitrines corporate</h3>
        <p>Le site de votre entreprise, pensé pour <b>qualifier et convertir</b>. Pages services, équipe, cas clients, blog, contact. Design sur mesure, pas un template Divi.</p>
        <div class="uc-tags">
          <span class="uc-tag">10–25 pages</span>
          <span class="uc-tag">CMS headless</span>
          <span class="uc-tag">SEO technique</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 02</div>
        <h3>Landing pages haute conversion</h3>
        <p>Une LP longue optimisée pour un lancement produit, une campagne Ads ou un webinaire. Hero, preuve, objections, CTA, A/B testing setup, tracking multi-canaux.</p>
        <div class="uc-tags">
          <span class="uc-tag">1 page longue</span>
          <span class="uc-tag">A/B ready</span>
          <span class="uc-tag">GA4 · Meta · LinkedIn</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-2">
        <div class="uc-num">/ 03</div>
        <h3>Blog &amp; inbound SEO</h3>
        <p>Architecture de cocons sémantiques, 15 à 40 pages piliers, éditeur-friendly pour votre équipe marketing. Schema.org, sitemap dynamique, AMP si besoin.</p>
        <div class="uc-tags">
          <span class="uc-tag">Cocons SEO</span>
          <span class="uc-tag">Éditeur Sanity / Strapi</span>
          <span class="uc-tag">RSS · Newsletter</span>
        </div>
      </div>

      <div class="uc reveal">
        <div class="uc-num">/ 04</div>
        <h3>Refontes WordPress → Next.js</h3>
        <p>Une refonte WordPress vers Next.js peut réduire certaines dépendances et améliorer les performances, selon le thème, les extensions, les contenus et les services tiers. Le gain est mesuré avant et après, pas présumé.</p>
        <div class="uc-tags">
          <span class="uc-tag">Migration SEO</span>
          <span class="uc-tag">Redirections 301</span>
          <span class="uc-tag">Conservation positions</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 05</div>
        <h3>Sites multi-langue &amp; internationaux</h3>
        <p>Routing i18n, traductions intégrées au CMS, hreflang SEO, devises locales, tunnel de conversion adapté par pays. Pour une offre qui franchit les frontières.</p>
        <div class="uc-tags">
          <span class="uc-tag">i18n Next.js</span>
          <span class="uc-tag">hreflang</span>
          <span class="uc-tag">CDN global</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-2">
        <div class="uc-num">/ 06</div>
        <h3>E-commerce &amp; boutique légère</h3>
        <p>Catalogue, panier, Stripe, livraison, gestion de stock, emails transactionnels. Pour &lt; 500 commandes/mois, stack Next Commerce ou Shopify headless selon le besoin.</p>
        <div class="uc-tags">
          <span class="uc-tag">Stripe · PayPlug</span>
          <span class="uc-tag">Shopify headless</span>
          <span class="uc-tag">RGPD-ready</span>
        </div>
      </div>

      <div class="uc reveal">
        <div class="uc-num">/ 07</div>
        <h3>Micro-sites campagne &amp; événementiels</h3>
        <p>Lancement produit, événement entreprise, rapport annuel interactif, page de recrutement massive. Livré en <b>2 à 3 semaines</b>, éventuellement désactivable en un clic post-campagne.</p>
        <div class="uc-tags">
          <span class="uc-tag">2–3 semaines</span>
          <span class="uc-tag">Design éditorial</span>
          <span class="uc-tag">Analytics campagne</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 08</div>
        <h3>Espaces clients &amp; portails légers</h3>
        <p>Un espace sécurisé sans partir sur un vrai SaaS : téléchargement documents, suivi de commande, prise de rendez-vous, messagerie simple. Connecté à vos outils existants.</p>
        <div class="uc-tags">
          <span class="uc-tag">Auth magic-link</span>
          <span class="uc-tag">Documents sécurisés</span>
          <span class="uc-tag">Calendly intégré</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CAPABILITIES (dark) -->
<section class="caps">
  <div class="caps-grid-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:56px">
      <div class="left">
        <div class="eyebrow on-dark">— Briques natives</div>
        <h2 style="color:#fff">Tout ce dont un site<br>professionnel a besoin,<br>déjà dans notre boîte à outils.</h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.7)">
        SEO technique, performance, analytics, formulaires CRM, multilingue, A/B testing, RGPD&nbsp;: tout ce qu'on met par défaut dans chaque projet. Vous n'avez pas à nous demander — c'est inclus.
      </div>
    </div>

    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></div>
        <h4>SEO technique natif</h4>
        <p>Schema.org, sitemap dynamique, robots.txt, Open Graph, balises hreflang. Pré-rendu HTML côté serveur, indexation en moins de 14 jours.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg></div>
        <h4>Core Web Vitals optimisés</h4>
        <p>LCP < 1.5 s, CLS < 0.05, INP < 100 ms. Images AVIF auto-générées, fonts self-hosted, zéro JS bloquant en route critique.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/></svg></div>
        <h4>CMS headless éditeur-friendly</h4>
        <p>Sanity ou Strapi selon votre équipe. Votre community manager publie en 30 secondes, pas 30 minutes.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg></div>
        <h4>Formulaires branchés CRM</h4>
        <p>HubSpot, Pipedrive, Brevo, Mailchimp, Salesforce. Webhook + double opt-in RGPD + anti-spam invisible (pas de reCAPTCHA).</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-5"/></svg></div>
        <h4>Analytics privacy-first</h4>
        <p>Plausible ou Fathom en plus de GA4, sans bannière cookies tueuse de conversion. Dashboard agrégé fourni.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg></div>
        <h4>Multilingue natif</h4>
        <p>Routing i18n, traductions au CMS, hreflang automatique, devises et formats locaux. 2 à 10 langues selon besoin.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h4M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/></svg></div>
        <h4>A/B testing prêt à l'emploi</h4>
        <p>Setup GrowthBook ou Vercel Flags inclus, pour tester hero, CTA, ou tunnel sans rebranchement technique.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h4>RGPD &amp; confidentialité</h4>
        <p>Bannière minimaliste conforme CNIL, mentions légales, politique cookies, consent management si besoin d'Ads tracking.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
        <h4>Prise de RDV intégrée</h4>
        <p>Calendly, Cal.com ou HubSpot Meetings intégrés en natif. Rendez-vous pris sans sortir du site, pré-qualification facultative.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM2 6l10 7 10-7"/></svg></div>
        <h4>Emails transactionnels</h4>
        <p>Resend ou Postmark pour confirmation form, auto-responder, tunnel email. Templates versionnés, logs d'ouverture.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg></div>
        <h4>Blog &amp; architecture SEO</h4>
        <p>Cocons sémantiques, silos éditoriaux, fil d'Ariane, articles liés, author schema. Pensé pour ranker, pas juste publier.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></div>
        <h4>Composants sur-mesure</h4>
        <p>Bibliothèque Figma + React dédiée à votre projet. Pas de shadcn générique : votre charte, vos animations, votre style.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/></svg></div>
        <h4>Animations éditoriales</h4>
        <p>Scroll-reveal, parallax léger, transitions de page, hover interactifs. Sans alourdir, sans gêner l'accessibilité.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
        <h4>Images optimisées à la volée</h4>
        <p>Next/Image + CDN. AVIF servi quand supporté, fallback WebP/JPEG. Lazy loading, placeholder blur, srcset auto.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 6v6c0 6 4 10 8 10s8-4 8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>Sécurité sans maintenance</h4>
        <p>Site statique pré-rendu : pas de base de données exposée, pas de CMS PHP attaquable, pas de plugin obsolète à patcher.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="2"/><path d="M12 8v8m-4 0l4-4 4 4M6 13l6-3 6 3"/></svg></div>
        <h4>Accessibilité WCAG AA</h4>
        <p>Contrastes audités, navigation clavier, focus visible, labels ARIA, skip links, lecteurs d'écran testés.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 22h20z"/></svg></div>
        <h4>Déploiement sur Vercel ou OVH</h4>
        <p>Preview automatique par branche. Rollback en 1 clic. Monitoring intégré. Hébergement gratuit 12 mois inclus.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6.5L3 11l9 4.5 9-4.5zM3 11v6.5l9 4.5 9-4.5V11M3 14l9 4.5"/></svg></div>
        <h4>Formation &amp; doc</h4>
        <p>2 h de formation en visio pour votre équipe + guide PDF + vidéo Loom. Vous éditez le site sans nous dès le lendemain de la livraison.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <h4>SEO local &amp; pages villes</h4>
        <p>Template de pages villes automatisé pour une présence géo (ex. CGP à Lyon, à Grenoble, à Annecy). Ranking local en 3-4 mois.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg></div>
        <h4>Intégrations Ads</h4>
        <p>GA4, Meta Pixel, LinkedIn Insight, TikTok Pixel, Microsoft Ads. Server-side tracking sur demande pour contourner iOS 14+.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>Support 30 jours inclus</h4>
        <p>Hotfix, ajustements mineurs, questions. Après, forfait maintenance optionnel à la carte — sans engagement.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="process" id="process">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Notre process</div>
        <h2>De la signature à la mise<br>en ligne, en 5 étapes.</h2>
      </div>
      <div class="right">
        On ne disparaît pas plusieurs semaines pour revenir avec « le site final ». Vous voyez le design, puis le site, grandir chaque semaine — avec une démo live à chaque fin de sprint.
      </div>
    </div>

    <div class="proc-grid reveal reveal-d-1">
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 01</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 010 20M2 12h20"/></svg></div>
        <h4>Cadrage &amp; stratégie</h4>
        <p>Atelier 2 h avec les décideurs. Arborescence, 50 mots-clés ciblés, charte éditoriale, tone of voice. Livrable&nbsp;: brief de 3 pages validé avant tout design.</p>
        <div class="proc-dur">3–5 JOURS</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 02</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="10"/></svg></div>
        <h4>Design Figma</h4>
        <p>Maquettes desktop + mobile, prototype cliquable. <b>2 tours de révisions inclus</b>. Vous validez l'apparence avant la moindre ligne de code — pas de surprise visuelle.</p>
        <div class="proc-dur">1–2 SEMAINES</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 03</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div>
        <h4>Intégration Next.js</h4>
        <p>Environnement de preview en continu, lien partagé. Point hebdo 30 min. Commits visibles, branches par feature. Le site prend forme sous vos yeux.</p>
        <div class="proc-dur">2–4 SEMAINES</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 04</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg></div>
        <h4>Recette &amp; performance</h4>
        <p>Checklist 30 points, tests cross-browser, audit Core Web Vitals, intégration contenu final. <b>1 tour de corrections inclus</b>. Rapport Lighthouse avant mise en ligne.</p>
        <div class="proc-dur">3–5 JOURS</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 05</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
        <h4>Mise en ligne + suivi</h4>
        <p>Déploiement, redirections, monitoring, formation et période de correction selon le périmètre et les délais inscrits au devis.</p>
        <div class="proc-dur">AU DEVIS</div>
      </div>
    </div>
  </div>
</section>

<!-- STACK -->
<section class="stack">
  <div class="wrap">
    <div class="stack-grid">
      <div class="reveal">
        <div class="eyebrow">— Notre stack</div>
        <h2 style="margin-top:14px">Une stack pensée<br>pour la vitesse.</h2>
        <p style="color:var(--mute);font-size:16px;margin-top:20px;max-width:480px">
          Pour un site vitrine ou une landing page, <b>Next.js en pré-rendu statique</b> peut limiter le travail serveur. La performance, la sécurité et le coût dépendent toutefois du contenu, des scripts tiers, de l'hébergement et de l'exploitation&nbsp;: ils sont mesurés et chiffrés, jamais présumés.
        </p>

        <div class="stack-list">
          <div class="sl-row">
            <div class="sl-cat">BACKEND</div>
            <div class="sl-val">Next.js 16 · TypeScript · Node · PostgreSQL</div>
            <div class="sl-note">TYPED · TESTED</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">FRONTEND WEB</div>
            <div class="sl-val">React 19 · Next.js · Tailwind</div>
            <div class="sl-note">SELON CAS</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">MOBILE</div>
            <div class="sl-val">React Native · Expo · iOS &amp; Android</div>
            <div class="sl-note">1 CODEBASE · 2 STORES</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">UI / BACK-OFFICE</div>
            <div class="sl-val">React 19 · Tailwind</div>
            <div class="sl-note">DESIGN SYSTEM</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">DATABASE</div>
            <div class="sl-val">PostgreSQL · MySQL · Redis</div>
            <div class="sl-note">POLITIQUE AU DEVIS</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">IA / LLM</div>
            <div class="sl-val">Claude Opus 4.7 · GPT-4o · Embeddings</div>
            <div class="sl-note">AGENTS TYPÉS</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">INFRA</div>
            <div class="sl-val">Vercel · Cloudflare · Scaleway · AWS</div>
            <div class="sl-note">RÉGION AU DEVIS</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">OBSERVABILITÉ</div>
            <div class="sl-val">Sentry · Monitoring applicatif · Files Redis</div>
            <div class="sl-note">COUVERTURE AU DEVIS</div>
          </div>
        </div>
      </div>

      <div class="stack-visual reveal reveal-d-2">
        <div class="stack-orbit">
          <div class="orbit-ring"></div>
          <div class="orbit-ring r2"></div>
          <div class="orbit-center">
            <div class="mark">HC<span class="dot">.</span></div>
          </div>
          <div class="orbit-node" style="top:2%;left:50%;transform:translateX(-50%)">
            <span class="nd" style="background:var(--ink)"></span>Next.js
          </div>
          <div class="orbit-node" style="top:22%;right:-10px">
            <span class="nd" style="background:#61DAFB"></span>React / Next
          </div>
          <div class="orbit-node" style="bottom:22%;right:-5px">
            <span class="nd" style="background:#38BDF8"></span>Tailwind
          </div>
          <div class="orbit-node" style="bottom:2%;left:50%;transform:translateX(-50%)">
            <span class="nd" style="background:#336791"></span>PostgreSQL
          </div>
          <div class="orbit-node" style="bottom:22%;left:-10px">
            <span class="nd" style="background:#61DAFB"></span>React Native
          </div>
          <div class="orbit-node" style="top:22%;left:-20px">
            <span class="nd" style="background:var(--ink)"></span>Claude · GPT
          </div>
          <div class="orbit-node" style="top:50%;left:-14%;transform:translateY(-50%)">
            <span class="nd" style="background:#635BFF"></span>Stripe
          </div>
          <div class="orbit-node" style="top:50%;right:-14%;transform:translateY(-50%)">
            <span class="nd" style="background:#00B14F"></span>Postmark
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- RELATED CASES -->
<section class="scases">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Produits internes</div>
        <h2>Des produits en production,<br>présentés sans faux client.</h2>
      </div>
      <div class="right">
        <a href="/realisations" class="btn btn-ghost">Toutes les réalisations →</a>
      </div>
    </div>

    <div class="scase-grid">
      <a class="scase reveal" href="/realisations/lmnp-ai">
        <div class="scase-shot">
          <svg width="100%" height="100%" viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" style="background:#F5F5F5">
            <rect width="600" height="380" fill="#F5F5F5"/>
            <rect x="40" y="30" width="520" height="330" rx="10" fill="#fff" stroke="#E5E5E5"/>
            <rect x="40" y="30" width="110" height="330" fill="#FAFAFA" stroke="#E5E5E5"/>
            <text x="60" y="55" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">LMNP<tspan fill="#6D28D9">.AI</tspan></text>
            <rect x="55" y="80" width="80" height="6" rx="2" fill="#0A0A0A"/>
            <rect x="55" y="100" width="60" height="4" rx="2" fill="#d4d4d4"/>
            <rect x="55" y="115" width="70" height="4" rx="2" fill="#d4d4d4"/>
            <text x="175" y="60" font-family="Geist" font-weight="700" font-size="18" fill="#0A0A0A">Dashboard fiscal</text>
            <rect x="175" y="100" width="110" height="70" rx="6" fill="#F5F5F5"/>
            <text x="185" y="150" font-family="Geist" font-weight="700" font-size="22" fill="#0A0A0A">18 420€</text>
            <rect x="295" y="100" width="110" height="70" rx="6" fill="#EDE9FE"/>
            <text x="305" y="150" font-family="Geist" font-weight="700" font-size="22" fill="#0A0A0A">+4 210€</text>
            <rect x="415" y="100" width="125" height="70" rx="6" fill="#0A0A0A"/>
            <text x="425" y="150" font-family="Geist" font-weight="700" font-size="16" fill="#fff">Prête ✓</text>
            <rect x="175" y="185" width="365" height="150" rx="6" fill="#fff" stroke="#E5E5E5"/>
            <path d="M195 310 L235 290 L315 275 L395 260 L475 210 L515 215" stroke="#6D28D9" stroke-width="2.5" fill="none"/>
          </svg>
        </div>
        <div class="scase-body">
          <div class="scase-meta"><span>SaaS B2C</span><span class="tag-stack">IA native · Stripe</span><span>— en production</span></div>
          <h3>LMNP.AI</h3>
          <p>Comptabilité fiscale automatisée pour loueurs meublés. Extraction de factures et génération de liasse 2031 par IA.</p>
          <div class="scase-metric">
            <div class="scm"><div class="n">INTERNE</div><div class="l">Produit du groupe</div></div>
            <div class="scm"><div class="n">PUBLIC</div><div class="l">Étude de cas consultable</div></div>
          </div>
        </div>
      </a>

      <a class="scase reveal reveal-d-1" href="/realisations/sci-ai">
        <div class="scase-shot">
          <svg width="100%" height="100%" viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" style="background:#0A0A0A">
            <rect width="600" height="380" fill="#0A0A0A"/>
            <text x="40" y="60" font-family="Geist" font-weight="700" font-size="16" fill="#fff">Comptabilité<tspan fill="#6D28D9"> AI</tspan></text>
            <text x="40" y="80" font-family="Geist Mono" font-size="9" fill="#737373">bilan.2025.xlsx</text>
            <g font-family="Geist Mono" font-size="10">
              <rect x="40" y="100" width="520" height="22" fill="rgba(255,255,255,0.03)" rx="4"/>
              <text x="52" y="115" fill="#737373">2025-03-14</text>
              <text x="142" y="115" fill="#fff">HT Vente produit A</text>
              <text x="330" y="115" fill="#fff">707000</text>
              <text x="440" y="115" fill="#6D28D9">+ 14 800,00</text>
              <rect x="40" y="128" width="520" height="22" fill="rgba(255,255,255,0.03)" rx="4"/>
              <text x="52" y="143" fill="#737373">2025-03-14</text>
              <text x="142" y="143" fill="#fff">TVA collectée 20%</text>
              <text x="330" y="143" fill="#fff">445710</text>
              <text x="440" y="143" fill="#6D28D9">+ 2 960,00</text>
              <rect x="40" y="184" width="520" height="22" fill="rgba(109,40,217,0.1)" stroke="#6D28D9" stroke-width="0.5" rx="4"/>
              <text x="52" y="199" fill="#6D28D9">AI-SUGG</text>
              <text x="142" y="199" fill="#fff">Détection doublon avec écriture #1042</text>
            </g>
            <rect x="40" y="232" width="520" height="108" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
            <text x="54" y="254" font-family="Geist Mono" font-size="9" fill="#6D28D9">◆ BILAN AI · génération en cours</text>
            <rect x="54" y="268" width="360" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
            <rect x="54" y="268" width="280" height="4" rx="2" fill="#6D28D9"/>
          </svg>
        </div>
        <div class="scase-body">
          <div class="scase-meta"><span>SaaS B2B</span><span class="tag-stack">IA native</span><span>— levée en cours</span></div>
          <h3>Comptabilité AI</h3>
          <p>Comptabilité en partie double pour PME avec bilan automatisé par IA. Positionnement Blue Ocean.</p>
          <div class="scase-metric">
            <div class="scm"><div class="n">INTERNE</div><div class="l">Produit du groupe</div></div>
            <div class="scm"><div class="n">PUBLIC</div><div class="l">Étude de cas consultable</div></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Forfaits</div>
        <h2>Trois formats,<br>un prix fixe affiché.</h2>
      </div>
      <div class="right">
        On vend au forfait, pas au temps passé. Vous connaissez le prix et le délai
        <b>avant</b> de signer — pas d'avenant surprise, jamais.
      </div>
    </div>

    <div class="price-grid">
      <div class="plan reveal">
        <div class="plan-tag">LANDING PAGE</div>
        <h4>Essentiel</h4>
        <div class="plan-sub">Une landing page longue optimisée conversion, ou un mini-site de 3–5 pages. Idéal pour un lancement, une campagne, un test de marché.</div>
        <div class="plan-price">
          <span class="amount">à partir de 6 900 €</span>
          <span class="per">HT · forfait</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Design sur mesure + 2 révisions</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Budget de performance défini au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>CMS Sanity ou Strapi inclus</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SEO technique, tracking GA4 &amp; Meta</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement 1 an + formation 2 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 2 à 4 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Demander un devis</a></div>
      </div>

      <div class="plan featured reveal reveal-d-1">
        <div class="plan-badge">FORMULE INTERMÉDIAIRE</div>
        <div class="plan-tag">SITE COMPLET</div>
        <h4>Performance</h4>
        <div class="plan-sub">Le site vitrine corporate qui convertit sur la durée&nbsp;: 10–20 pages, blog éditorial, SEO technique et stratégique, intégration CRM complète.</div>
        <div class="plan-price">
          <span class="amount">14 900 €</span>
          <span class="per">HT · forfait fixe</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>10 à 20 pages + blog architecturé SEO</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Design sur mesure + 3 révisions</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>50 mots-clés ciblés, schema.org, cocons sémantiques</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Formulaires HubSpot / Brevo / Salesforce</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Calendly intégré, RGPD conforme</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement 1 an + formation 2 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 5 à 7 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer mon projet</a></div>
      </div>

      <div class="plan reveal reveal-d-2">
        <div class="plan-tag">PLATEFORME</div>
        <h4>Sur-mesure</h4>
        <div class="plan-sub">Site multilingue international, e-commerce headless, plateforme corporate avec espace client ou référentiel produit. Devis après cadrage.</div>
        <div class="plan-price">
          <span class="amount">à partir de 22 000 €</span>
          <span class="per">HT · devis personnalisé</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Multilingue (2 à 10 langues, hreflang)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>E-commerce headless (Stripe, Shopify)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Espace client sécurisé, documents, RDV</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Intégrations métier sur mesure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 8 à 14 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Cadrer mon besoin</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:44px;color:var(--mute);font-size:14px">
      <b style="color:var(--ink)">Chaque devis précise</b> : livrables et droits · dépôt et accès · hébergement et coûts tiers · formation · recette et garantie éventuelle · échéancier de paiement.
    </p>
  </div>
</section>

<!-- FAQ -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ</div>
        <h2 style="margin-top:14px">Les vraies questions<br>qu'on nous pose avant<br>de signer.</h2>
        <p>Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. On répond sous 24 h ouvrées, par un expert, sans détour.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">
            Combien de temps pour livrer mon site ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Le délai dépend du périmètre</b> — gabarits, contenus, intégrations, migration et validations. Le devis fixe les jalons, les dépendances et, si les parties le souhaitent, les conséquences précises d'un retard.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Est-ce qu'on est propriétaire du code et du site ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le devis précise les accès au dépôt, au domaine et à l'hébergement. Les livrables spécifiques sont transférés après paiement complet conformément aux CGV, sous réserve des composants préexistants et licences tierces.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Comment mettre à jour le contenu après la livraison ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Via un <b>CMS headless</b> (Sanity ou Strapi selon votre équipe) avec interface éditeur simple&nbsp;: votre community manager ou votre équipe marketing publie articles, visuels, pages sans nous appeler. Formation 2 h incluse + guide PDF + vidéo Loom de prise en main.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Et le référencement ? Je vais perdre mes positions si je refais ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Une refonte peut faire varier les positions. Le plan de migration inventorie les URLs, prépare les redirections, conserve les signaux utiles et définit un suivi post-mise en ligne. Aucun classement n'est garanti.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Pourquoi Next.js et pas WordPress, c'est moins cher ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le coût sur trois ans dépend de l'hébergement, du CMS, des intégrations, de la maintenance et de l'équipe disponible. Nous comparons ces postes avec vos chiffres&nbsp;; Next.js n'offre ni gain de conversion ni ROI automatique.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Combien coûte la maintenance après ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Même un site statique demande un suivi des dépendances, du domaine, des formulaires, des contenus et des services tiers. Le besoin et le budget de maintenance sont chiffrés selon l'architecture. Pour comparer les coûts sur trois ans, voir notre <a href="/guides/combien-coute-un-site-internet">guide des prix d'un site internet</a>.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous gérez les textes, les photos, le contenu ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Option rédaction SEO disponible&nbsp;: <b>80 à 150 € la page optimisée</b> (brief, rédaction, maillage interne). Pour les photos&nbsp;: on part de vos visuels, ou on utilise des banques premium (Unsplash+, Pexels Pro, inclus), ou on vous met en relation avec un photographe partenaire.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Et si je veux ajouter des pages ou fonctionnalités après ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Page supplémentaire simple&nbsp;: <b>300 à 500 €</b>. Module (formulaire avancé, calculateur, intégration) sur devis. Pour un partenariat long terme, forfait évolutions mensuel qui couvre un volume constant de petites évolutions sans friction devis.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Nos données et le site sont hébergés où ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Site statique&nbsp;: sur Vercel (edge CDN mondial) ou OVH (serveur français selon votre préférence). CMS et base de données&nbsp;: <b>Scaleway Paris</b> ou OVH Roubaix pour la conformité RGPD. Sauvegardes chiffrées quotidiennes. Compte d'hébergement <b>à votre nom</b>, pas au nôtre.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Qu'est-ce qui garantit que le site convertira ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Aucune agence ne peut garantir un taux de conversion. Le devis peut fixer un budget de performance, les pages et conditions de mesure, la structure SEO technique et les étapes de recette. Le trafic, le contenu, l'offre et les scripts tiers restent des variables distinctes.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            On paye comment, on signe quand ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Acompte <b>30 %</b> à la signature du devis, <b>30 %</b> à la validation du design Figma, <b>40 %</b> à la mise en ligne. Devis + contrat signés électroniquement (Yousign). Facturation SAS française avec TVA 20 %. Jamais de demande de paiement avant la signature du devis détaillé.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="scta">
  <div class="stats-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="eyebrow on-dark">— Prochaine étape</div>
    <h2 style="margin-top:18px">Un site qui convertit,<br>livré en 4 à 7 semaines.</h2>
    <p>Un call de 30 min avec un expert. Vous repartez avec un avis franc sur votre projet et, sous 48 h, un devis chiffré — sans engagement.</p>
    <div class="scta-cta">
      <a href="#contact" class="btn btn-accent btn-lg">
        📅 &nbsp;Réserver 30 min avec un expert
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a href="mailto:quentin@hagnere-patrimoine.fr" class="btn btn-ghost btn-lg" style="background:rgba(255,255,255,0.05);color:#fff;border-color:rgba(255,255,255,0.15)">
        Envoyer un email →
      </a>
    </div>
    <div class="scta-meta">RÉPONSE SOUS 24H OUVRÉES · PAR UN ASSOCIÉ QUI CODE · SANS ENGAGEMENT</div>
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
        <p>Agence de développement SaaS AI-native basée à Bassens, aux portes de Chambéry. Dev, design, SEO, ads, vidéo intégrée.</p>
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
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
        <div class="foot-col">
          <h5>LÉGAL</h5>
          <a href="#">CGV</a>
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
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
