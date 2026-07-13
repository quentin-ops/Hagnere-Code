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
    <span style="color:var(--ink-3)">Application mobile iOS &amp; Android</span>
  </div>
</div>

<!-- HERO -->
<section class="shero mob-hero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow"><span class="pill"><span class="dot"></span> Service · Application mobile iOS &amp; Android</span></div>
      <h1>Votre application mobile<br>sur les <span class="accent">stores dès 12 semaines</span>,<br>pas dans 2 ans.</h1>
      <div class="mob-hero-feats">
        <span class="mob-hero-feat">
          <span class="mob-hero-feat-ic">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2.5"/>
              <path d="M11 18h2"/>
            </svg>
          </span>
          <span class="mob-hero-feat-label">iOS + Android d'un seul coup</span>
        </span>
        <span class="mob-hero-feat">
          <span class="mob-hero-feat-ic">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </span>
          <span class="mob-hero-feat-label">Forfait fixe après cadrage</span>
        </span>
        <span class="mob-hero-feat">
          <span class="mob-hero-feat-ic">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="4" y="11" width="16" height="10" rx="2"/>
              <path d="M8 11V7a4 4 0 018 0"/>
            </svg>
          </span>
          <span class="mob-hero-feat-label">Code &amp; comptes stores à vous J+1</span>
        </span>
      </div>
      <p class="shero-sub">
        Une vraie app native iOS et Android livrée en <b>React Native + Expo</b>, publiée
        <b>sous vos comptes App Store &amp; Google Play</b>, branchée à votre stack existante (Stripe, <a href="/services/outils-internes-sur-mesure">votre back-office</a>, votre CRM).
        Vous parlez à quelqu'un qui code — pas à un commercial qui revendra le projet à une équipe que vous ne verrez jamais.
      </p>
      <div class="shero-cta">
        <a href="/rendez-vous" class="btn btn-accent btn-lg">
          Cadrer mon app en 30 min <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="/demarrer-un-projet" class="btn btn-ghost btn-lg">Décrire mon projet (3 min)</a>
      </div>
      <div class="shero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Livré en 8 à 20 semaines</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Soumission stores incluse</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Hot-fixes en 10 min via OTA</span>
      </div>
    </div>

    <!-- VISUAL : 2 phones overlap + store rating card -->
    <div class="shero-visual mob-hero-visual" aria-hidden="true">
      <!-- Phone 1 — main, "Mon Service" generic loyalty / booking app -->
      <div class="mob-phone mob-phone-front">
        <div class="mob-phone-sidebtn mob-phone-sidebtn-l1"></div>
        <div class="mob-phone-sidebtn mob-phone-sidebtn-l2"></div>
        <div class="mob-phone-sidebtn mob-phone-sidebtn-r"></div>
        <svg viewBox="0 0 280 580" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto" role="img" aria-label="App mobile fictive d'un service de fidélité">
          <defs>
            <linearGradient id="mobBG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#FAFAFA"/>
              <stop offset="100%" stop-color="#F5F5F5"/>
            </linearGradient>
            <linearGradient id="mobAccent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#7C3AED"/>
              <stop offset="100%" stop-color="#5B21B6"/>
            </linearGradient>
            <linearGradient id="mobDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1A1A1A"/>
              <stop offset="100%" stop-color="#0A0A0A"/>
            </linearGradient>
            <radialGradient id="mobGlow" cx="0.5" cy="0.3" r="0.7">
              <stop offset="0%" stop-color="rgba(124,58,237,0.18)"/>
              <stop offset="100%" stop-color="rgba(124,58,237,0)"/>
            </radialGradient>
          </defs>

          <!-- Screen background -->
          <rect width="280" height="580" fill="url(#mobBG)" rx="28"/>

          <!-- Status bar -->
          <text x="22" y="34" font-family="Geist Mono" font-weight="700" font-size="11" fill="#0A0A0A">9:41</text>
          <g transform="translate(196 26)" fill="rgba(10,10,10,0.85)">
            <rect x="0" y="6" width="2.5" height="5" rx="0.6"/>
            <rect x="4" y="4" width="2.5" height="7" rx="0.6"/>
            <rect x="8" y="2" width="2.5" height="9" rx="0.6"/>
            <rect x="12" y="0" width="2.5" height="11" rx="0.6"/>
          </g>
          <g transform="translate(216 28)" fill="none" stroke="rgba(10,10,10,0.85)" stroke-width="1.4" stroke-linecap="round">
            <path d="M0 5 Q6 -1 12 5"/>
            <path d="M2.5 7.5 Q6 4.5 9.5 7.5"/>
            <circle cx="6" cy="10" r="0.8" fill="rgba(10,10,10,0.85)" stroke="none"/>
          </g>
          <g transform="translate(236 26)">
            <rect x="0" y="2" width="22" height="10" rx="2.5" fill="none" stroke="rgba(10,10,10,0.4)" stroke-width="1"/>
            <rect x="2" y="4" width="16" height="6" rx="1" fill="rgba(10,10,10,0.85)"/>
            <rect x="23" y="5" width="1.5" height="4" rx="0.5" fill="rgba(10,10,10,0.4)"/>
          </g>

          <!-- Dynamic island -->
          <rect x="93" y="14" width="94" height="26" rx="13" fill="#0A0A0A"/>
          <circle cx="170" cy="27" r="3.5" fill="#1a1a1a"/>
          <circle cx="170" cy="27" r="1.5" fill="#2a2a2a"/>

          <!-- Greeting -->
          <text x="22" y="76" font-family="Geist" font-size="11" fill="rgba(10,10,10,0.5)" letter-spacing="0.04em">BONJOUR,</text>
          <text x="22" y="98" font-family="Geist" font-weight="700" font-size="22" fill="#0A0A0A" letter-spacing="-0.025em">Camille 👋</text>

          <!-- Profile avatar -->
          <circle cx="248" cy="86" r="18" fill="url(#mobAccent)"/>
          <text x="248" y="93" text-anchor="middle" font-family="Geist" font-weight="700" font-size="14" fill="#fff">C</text>
          <circle cx="259" cy="76" r="5" fill="#FF3B30" stroke="#FAFAFA" stroke-width="2"/>
          <text x="259" y="79" text-anchor="middle" font-family="Geist" font-weight="700" font-size="7" fill="#fff">3</text>

          <!-- Loyalty / rewards card -->
          <rect x="20" y="120" width="240" height="116" rx="18" fill="url(#mobAccent)"/>
          <rect x="20" y="120" width="240" height="116" rx="18" fill="url(#mobGlow)" opacity="0.6"/>
          <text x="36" y="146" font-family="Geist Mono" font-size="9.5" fill="rgba(255,255,255,0.65)" letter-spacing="0.16em">VOTRE SOLDE FIDÉLITÉ</text>
          <text x="36" y="186" font-family="Geist" font-weight="700" font-size="36" fill="#fff" letter-spacing="-0.03em">2 480</text>
          <text x="138" y="186" font-family="Geist" font-weight="500" font-size="14" fill="rgba(255,255,255,0.7)">points</text>
          <!-- Progress bar -->
          <rect x="36" y="204" width="208" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
          <rect x="36" y="204" width="156" height="6" rx="3" fill="#fff"/>
          <text x="36" y="226" font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.6)" letter-spacing="0.04em">520 PTS POUR LA RÉCOMPENSE SUIVANTE</text>

          <!-- Quick actions row -->
          <g transform="translate(20 260)">
            <rect x="0" y="0" width="60" height="68" rx="14" fill="#fff" stroke="#EFEFEF"/>
            <g transform="translate(20 14)" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round">
              <rect x="0" y="2" width="20" height="20" rx="3"/>
              <line x1="0" y1="7" x2="20" y2="7"/>
              <circle cx="6" cy="14" r="1"/>
            </g>
            <text x="30" y="56" text-anchor="middle" font-family="Geist" font-weight="500" font-size="9" fill="#0A0A0A">Réserver</text>

            <rect x="64" y="0" width="60" height="68" rx="14" fill="#fff" stroke="#EFEFEF"/>
            <g transform="translate(82 12)" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round">
              <path d="M11 0 L20 0 L20 18 L0 18 L0 8 L4 4 L8 8"/>
              <circle cx="14" cy="6" r="2"/>
            </g>
            <text x="94" y="56" text-anchor="middle" font-family="Geist" font-weight="500" font-size="9" fill="#0A0A0A">Boutique</text>

            <rect x="128" y="0" width="60" height="68" rx="14" fill="#fff" stroke="#EFEFEF"/>
            <g transform="translate(148 14)" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round">
              <path d="M10 0 L0 12 L7 12 L5 22 L18 8 L11 8 L13 0 Z"/>
            </g>
            <text x="158" y="56" text-anchor="middle" font-family="Geist" font-weight="500" font-size="9" fill="#0A0A0A">Cadeaux</text>

            <rect x="192" y="0" width="68" height="68" rx="14" fill="#0A0A0A"/>
            <g transform="translate(214 14)" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round">
              <path d="M0 0 H22 V22 H0 Z M3 3 V19 M19 3 V19 M3 11 H19"/>
            </g>
            <text x="226" y="56" text-anchor="middle" font-family="Geist" font-weight="500" font-size="9" fill="#fff">Scan</text>
          </g>

          <!-- Push notification card -->
          <g transform="translate(20 348)">
            <rect x="0" y="0" width="240" height="78" rx="14" fill="#fff" stroke="#EFEFEF"/>
            <rect x="14" y="14" width="36" height="36" rx="9" fill="url(#mobAccent)"/>
            <g transform="translate(24 22)" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round">
              <path d="M8 0a6 6 0 016 6v6l1 2H1l1-2V6a6 6 0 016-6z"/>
              <path d="M5 16a3 3 0 006 0"/>
            </g>
            <text x="60" y="28" font-family="Geist Mono" font-size="8.5" fill="rgba(10,10,10,0.5)" letter-spacing="0.08em">NOUVELLE OFFRE · IL Y A 2 MIN</text>
            <text x="60" y="44" font-family="Geist" font-weight="600" font-size="12" fill="#0A0A0A">-20 % sur votre RDV de samedi.</text>
            <text x="60" y="60" font-family="Geist" font-size="10.5" fill="rgba(10,10,10,0.55)">Valable jusqu'à demain 23 h</text>
          </g>

          <!-- Apple Pay / Google Pay row -->
          <g transform="translate(20 442)">
            <rect x="0" y="0" width="240" height="48" rx="14" fill="url(#mobDark)"/>
            <g transform="translate(28 14) scale(0.85)" fill="#fff">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.1zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </g>
            <text x="56" y="31" font-family="Geist" font-weight="600" font-size="14" fill="#fff" letter-spacing="-0.005em">Pay</text>
            <text x="120" y="31" font-family="Geist Mono" font-size="10" fill="rgba(255,255,255,0.5)" letter-spacing="0.04em">·</text>
            <text x="135" y="31" font-family="Geist" font-weight="600" font-size="13" fill="#fff">Confirmer · 28 €</text>
          </g>

          <!-- Bottom tab bar -->
          <g transform="translate(0 506)">
            <rect x="0" y="0" width="280" height="74" fill="#fff"/>
            <line x1="0" y1="0" x2="280" y2="0" stroke="#EFEFEF" stroke-width="1"/>

            <g transform="translate(34 14)">
              <path d="M0 8 L6 0 L12 8 L12 14 L0 14 Z" fill="#7C3AED"/>
              <text x="6" y="30" text-anchor="middle" font-family="Geist Mono" font-size="8.5" fill="#7C3AED" font-weight="700" letter-spacing="0.04em">ACCUEIL</text>
            </g>
            <g transform="translate(96 14)" fill="none" stroke="rgba(10,10,10,0.4)" stroke-width="1.6" stroke-linecap="round">
              <rect x="0" y="0" width="14" height="14" rx="2"/>
              <path d="M3 4h8M3 7h6M3 10h4"/>
              <text x="7" y="30" text-anchor="middle" font-family="Geist Mono" font-size="8.5" fill="rgba(10,10,10,0.45)" font-weight="600" letter-spacing="0.04em" stroke="none">CARTE</text>
            </g>
            <g transform="translate(158 14)" fill="none" stroke="rgba(10,10,10,0.4)" stroke-width="1.6" stroke-linecap="round">
              <circle cx="6" cy="5" r="3"/>
              <path d="M0 14 a6 6 0 0112 0"/>
              <text x="6" y="30" text-anchor="middle" font-family="Geist Mono" font-size="8.5" fill="rgba(10,10,10,0.45)" font-weight="600" letter-spacing="0.04em" stroke="none">PROFIL</text>
            </g>
            <g transform="translate(220 14)" fill="none" stroke="rgba(10,10,10,0.4)" stroke-width="1.6" stroke-linecap="round">
              <circle cx="6" cy="6" r="6"/>
              <path d="M6 3v3l2 2"/>
              <text x="6" y="30" text-anchor="middle" font-family="Geist Mono" font-size="8.5" fill="rgba(10,10,10,0.45)" font-weight="600" letter-spacing="0.04em" stroke="none">RÉCENT</text>
            </g>
          </g>

          <!-- Home indicator -->
          <rect x="96" y="562" width="88" height="4" rx="2" fill="rgba(10,10,10,0.65)"/>
        </svg>
      </div>

      <!-- Phone 2 — back, "App Store / Play Store" listings card overlay -->
      <div class="mob-store-card">
        <div class="mob-store-card-head">
          <div class="mob-store-card-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.1zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          </div>
          <div>
            <div class="mob-store-card-kicker">App Store</div>
            <div class="mob-store-card-name">Mon Service</div>
          </div>
        </div>
        <div class="mob-store-card-rating">
          <span class="mob-store-card-stars">★★★★★</span>
          <span class="mob-store-card-rate">4,9 · 184 avis</span>
        </div>
        <div class="mob-store-card-meta">
          <span class="mob-store-card-pill">Top 50 · Lifestyle</span>
          <span class="mob-store-card-pill">v1.4.2</span>
        </div>
      </div>

      <div class="mob-store-card mob-store-card-android">
        <div class="mob-store-card-head">
          <div class="mob-store-card-ic mob-store-card-ic-google">
            <svg width="22" height="22" viewBox="0 0 24 24"><path d="M3.6 1.2c-.4.4-.6 1-.6 1.8v18c0 .8.2 1.4.6 1.8l11-11-11-10.6z" fill="#34A853"/><path d="M16.6 8.4l-3-3-9.4 9.2 3 3 9.4-9.2z" fill="#4285F4"/><path d="M21 11l-4.4-2.6-3.4 3.6 3.4 3.6L21 13c1-.6 1-1.4 0-2z" fill="#FBBC04"/><path d="M14 14.6l-9.4 9.2 11-11L14 14.6z" fill="#EA4335"/></svg>
          </div>
          <div>
            <div class="mob-store-card-kicker">Google Play</div>
            <div class="mob-store-card-name">Mon Service</div>
          </div>
        </div>
        <div class="mob-store-card-rating">
          <span class="mob-store-card-stars">★★★★★</span>
          <span class="mob-store-card-rate">4,8 · 312 avis</span>
        </div>
        <div class="mob-store-card-meta">
          <span class="mob-store-card-pill">Editor's choice</span>
          <span class="mob-store-card-pill">10 k+ téléch.</span>
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
        <h2>L'app dont votre métier<br>a vraiment besoin.</h2>
      </div>
      <div class="right">
        Pas une "super app" copiée d'Uber. Une app focalisée sur <b>1 à 3 cas d'usage</b> qui font la différence pour vos clients
        — et qui s'amortissent en 12 à 18 mois grâce à la rétention, la fidélité et le panier moyen mobile.
      </div>
    </div>

    <div class="use-grid">
      <div class="uc reveal">
        <div class="uc-num">/ 01</div>
        <h3>App e-commerce mobile</h3>
        <p>Extension de votre boutique web : catalogue, panier, Apple Pay / Google Pay, push promo, fidélité. Sur le secteur retail mobile, l'app convertit nettement mieux que le site mobile et le panier moyen tend à grimper — avec une exécution sérieuse.</p>
        <div class="uc-tags">
          <span class="uc-tag">Stripe · Apple Pay</span>
          <span class="uc-tag">Sync Shopify</span>
          <span class="uc-tag">Push promo</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 02</div>
        <h3>Programme fidélité &amp; cartes</h3>
        <p>Cartes dématérialisées, points, récompenses, push géolocalisée à proximité de votre boutique. Pour <b>restaurants, salons, retail, salles de sport</b>. Effet rétention reconnu sur le CA récurrent (cf. études Bain & Company sur la fidélité).</p>
        <div class="uc-tags">
          <span class="uc-tag">Wallet Apple/Google</span>
          <span class="uc-tag">Push géoloc</span>
          <span class="uc-tag">QR en caisse</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-2">
        <div class="uc-num">/ 03</div>
        <h3>Réservation &amp; prise de RDV</h3>
        <p>Calendrier temps réel, paiement de l'acompte, rappels SMS + push, gestion no-show. Pour <b>médical, beauté, sport, services à la personne</b>. Synchro Google / Outlook native.</p>
        <div class="uc-tags">
          <span class="uc-tag">Calendar sync</span>
          <span class="uc-tag">Acompte Stripe</span>
          <span class="uc-tag">Anti no-show</span>
        </div>
      </div>

      <div class="uc reveal">
        <div class="uc-num">/ 04</div>
        <h3>Click &amp; collect / livraison locale</h3>
        <p>Catalogue, créneaux retrait ou livraison, paiement, scan en caisse. Pour <b>boulangerie, primeur, traiteur, retail de proximité</b>. Stock synchro avec votre POS existant.</p>
        <div class="uc-tags">
          <span class="uc-tag">Stock POS</span>
          <span class="uc-tag">Créneaux</span>
          <span class="uc-tag">Tournée chauffeur</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 05</div>
        <h3>Marketplace 2-sided</h3>
        <p>Profils dual (offre / demande), listings, messagerie temps réel, paiement séquestre, KYC, modération. Pour <b>plateformes type Vinted, Le Bon Coin vertical, Malt-like</b>.</p>
        <div class="uc-tags">
          <span class="uc-tag">Stripe Connect</span>
          <span class="uc-tag">KYC + escrow</span>
          <span class="uc-tag">Modération + KYC</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-2">
        <div class="uc-num">/ 06</div>
        <h3>Coaching, sport, nutrition, santé</h3>
        <p>Programmes vidéo / audio, tracking, chat coach, intégration HealthKit / Health Connect. Pour <b>coachs, salles de sport, applis bien-être, télésuivi médical</b>.</p>
        <div class="uc-tags">
          <span class="uc-tag">HealthKit</span>
          <span class="uc-tag">Vidéo offline</span>
          <span class="uc-tag">RGPD santé</span>
        </div>
      </div>

      <div class="uc reveal">
        <div class="uc-num">/ 07</div>
        <h3>App B2B terrain &amp; force de vente</h3>
        <p>Catalogue, prise de commande offline (3G chez le client), signature, lien CRM. Pour <b>commerciaux, techniciens, livreurs, agents terrain</b>. Synchro à la reconnexion.</p>
        <div class="uc-tags">
          <span class="uc-tag">Offline-first</span>
          <span class="uc-tag">Signature</span>
          <span class="uc-tag">Sync ERP</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-1">
        <div class="uc-num">/ 08</div>
        <h3>E-learning &amp; formation</h3>
        <p>Player vidéo, lecture offline (avion, train), quiz, paiement abonnement, certificats. Pour <b>organismes de formation, créateurs de contenu, écoles, podcasts premium</b>.</p>
        <div class="uc-tags">
          <span class="uc-tag">Vidéo DRM</span>
          <span class="uc-tag">Offline mode</span>
          <span class="uc-tag">Stripe webview · hors IAP</span>
        </div>
      </div>

      <div class="uc reveal reveal-d-2">
        <div class="uc-num">/ 09</div>
        <h3>Communauté &amp; messagerie verticale</h3>
        <p>Feed, posts, messagerie temps réel, événements, modération. Pour <b>associations, clubs, médias, communautés métier</b>. Notifications édito ciblées.</p>
        <div class="uc-tags">
          <span class="uc-tag">Realtime chat</span>
          <span class="uc-tag">Modération</span>
          <span class="uc-tag">Push édito</span>
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
        <div class="eyebrow on-dark">— Briques natives mobiles</div>
        <h2 style="color:#fff">Tout ce qui transforme<br>un site en vraie app native,<br>déjà dans la boîte.</h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.7)">
        Push, biométrie, Apple Pay / Google Pay, mode hors-ligne, paiement in-app, géoloc, scan QR, OTA updates, deep links, App Clip…
        Pas une option "à débloquer" : <b>tout est inclus dans le forfait</b>, parce qu'une app sans ça n'est pas une app.
      </div>
    </div>

    <div class="caps-grid">
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5"/><path d="M9 17a3 3 0 006 0"/></svg></div>
        <h4>Push notifications natives</h4>
        <p>iOS APNs + Android FCM via Firebase ou Batch. Segmentation, scheduling, géofencing. <b>Taux d'ouverture nettement supérieur à l'email</b>, opt-in contextuel RGPD-friendly.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg></div>
        <h4>Mode hors-ligne</h4>
        <p>L'app fonctionne en 3G, dans le métro, en avion. Cache local, sync à la reconnexion, queue de mutations. Indispensable pour <b>terrain, livraison, coaching, formation</b>.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z"/></svg></div>
        <h4>Apple Pay + Google Pay</h4>
        <p>Checkout 1-tap avec Face ID / Touch ID / empreinte. Conversion <b>×2 vs saisie carte manuelle</b>. Branché sur Stripe (web pricing) ou IAP Apple (digital).</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 010 20M2 12h20"/></svg></div>
        <h4>OTA updates via EAS</h4>
        <p>Bug fix en prod en <b>10 minutes</b>, pas 3 jours de review Apple. Zéro republication store pour des correctifs JS / contenu / config. Rollback en 1 clic.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="11" r="3"/><path d="M21 11c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/></svg></div>
        <h4>Géolocalisation &amp; géofencing</h4>
        <p>Push à 50 m d'une boutique, store locator, déclencheurs zones. Permission Apple/Google conforme : on demande la géoloc <b>uniquement quand c'est utile</b>.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h4v4H3zM17 3h4v4h-4zM3 17h4v4H3zM17 17h4v4h-4zM9 10h6v4H9z"/></svg></div>
        <h4>Scan QR &amp; code-barres</h4>
        <p>Scanner natif via caméra : QR fidélité en caisse, scan produit pour réassort, billet d'événement, Wi-Fi pairing. Lecture offline, ultra-rapide.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg></div>
        <h4>Wallet Apple &amp; Google</h4>
        <p>Carte fidélité, billet, ticket, abonnement transports — directement dans l'app Wallet, sans installer la nôtre. Mises à jour push (solde, expiration).</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3z"/><path d="M7 7l5 5 5-5M7 17l5-5 5 5"/></svg></div>
        <h4>Deep links &amp; universal links</h4>
        <p>Un lien email ouvre directement la bonne fiche dans l'app. Onboarding, parrainage, tracking attribution. Universal Links iOS + App Links Android natifs, ou Branch.io en option pour l'attribution multi-canal.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>Biométrie Face ID / empreinte</h4>
        <p>Connexion 1-tap, validation paiement, accès zone sensible. Stockage sécurisé via Keychain iOS / Keystore Android. Conforme banques &amp; santé.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20M6 14h4"/></svg></div>
        <h4>Paiement web (Stripe / PayPlug)</h4>
        <p>Pour les biens physiques, livraisons, services — Stripe / PayPlug en webview, <b>0 % de commission Apple</b>. Pour le digital, IAP Apple obligatoire.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/></svg></div>
        <h4>App Clip &amp; Instant App</h4>
        <p>Une mini-version sans téléchargement (quelques Mo) déclenchée par QR ou NFC. Idéal pour <b>commande au resto, paiement parking, ouverture casier</b>.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 6v6c0 6 8 10 8 10s8-4 8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>RGPD &amp; CNIL prêt à l'audit</h4>
        <p>La CNIL contrôle les apps depuis 2025. On livre <b>politique de confidentialité dédiée, gestion permissions (geo, contacts, micro), DPA signé</b>. Sanction max évitée : 4 % CA.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h4>Background tasks &amp; sync</h4>
        <p>Sync silencieuse en arrière-plan, refresh contenu, géofencing, badge non-lus. L'app reste vivante même fermée. Conforme limites Apple/Google batterie.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1v22M5 5l14 14M19 5L5 19M1 12h22"/></svg></div>
        <h4>Watch &amp; Wear OS</h4>
        <p>Apple Watch + Wear OS pour les apps fitness, paiement contactless, notifications discrètes. Sur option, dans le forfait Sur-mesure.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg></div>
        <h4>Tracking attribution opt-in</h4>
        <p>Conforme ATT iOS 14.5+ : tracking n'est activé que si l'utilisateur consent. AppsFlyer / Adjust / Branch en option pour <b>mesurer Ads ROI</b>.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-5"/></svg></div>
        <h4>Analytics produit &amp; dashboards</h4>
        <p>DAU / MAU, rétention J1 / J7 / J30, funnel d'onboarding, churn, événements custom. Firebase, Amplitude, PostHog. Dashboard partagé en lecture.</p>
      </div>
      <div class="cap reveal">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg></div>
        <h4>Chat &amp; messagerie temps réel</h4>
        <p>WebSockets, Stream Chat, Pusher ou Firebase Realtime. Indicateurs typing, lus / non-lus, push si app fermée. Pour <b>coaching, support, communauté, marketplace</b>.</p>
      </div>
      <div class="cap reveal reveal-d-1">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg></div>
        <h4>Caméra, photos, vidéo, micro</h4>
        <p>Capture in-app, scan documents (avec OCR), enregistrement audio, upload progressif avec resume. Compression côté client, pas de surcoût bande passante.</p>
      </div>
      <div class="cap reveal reveal-d-2">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg></div>
        <h4>Crash reporting &amp; monitoring</h4>
        <p>Sentry mobile + Firebase Crashlytics inclus. Stack trace symbolisée, bread­crumbs, session replay. <b>SLA 4 h ouvrées sur crashs bloquants</b> dans le forfait maintenance.</p>
      </div>
      <div class="cap reveal reveal-d-3">
        <div class="cap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>30 jours de garantie post-stores</h4>
        <p>À la mise en ligne sur App Store + Play Store, 30 j de garantie : bugs corrigés gratuitement. Après, forfait maintenance optionnel à la carte, chiffré sur devis selon le scope retenu.</p>
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
        <h2>Du brief à la première<br>review Apple, en 5 étapes.</h2>
      </div>
      <div class="right">
        Démos hebdomadaires sur TestFlight (iOS) et Internal Testing (Android), <b>vous voyez l'app grandir chaque semaine</b> sur votre propre téléphone.
        Pas d'effet tunnel, pas de surprise à la livraison.
      </div>
    </div>

    <div class="proc-grid reveal reveal-d-1">
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 01</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><circle cx="12" cy="12" r="10"/><path d="M12 2a15 15 0 010 20M2 12h20"/></svg></div>
        <h4>Discovery Sprint</h4>
        <p>Atelier <b>payant et déductible</b> (déduit du devis si on continue) : on cadre le scope MVP, on défriche les 5-7 écrans clés, on sort un prototype Figma cliquable. Si on arrête là, vous repartez avec un livrable utilisable par n'importe quel autre studio.</p>
        <div class="proc-dur">2 JOURS</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 02</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="10"/></svg></div>
        <h4>Design iOS + Android</h4>
        <p>Maquettes Figma haute fidélité, respect des Human Interface Guidelines (Apple) et Material 3 (Google). Prototype cliquable. <b>2 tours de révisions inclus</b>. Vous validez avant la moindre ligne de code.</p>
        <div class="proc-dur">2–3 SEMAINES</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 03</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div>
        <h4>Développement React Native + Expo</h4>
        <p>Sprints de 2 semaines, démo TestFlight + Internal Testing à chaque fin de sprint. Vous installez l'app sur votre iPhone / Android dès la 4ᵉ semaine. <b>Tests E2E</b> (Maestro), monitoring Sentry actif dès le sprint 1.</p>
        <div class="proc-dur">6–14 SEMAINES</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 04</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg></div>
        <h4>Recette &amp; tests sur vrais devices</h4>
        <p>Tests sur <b>iPhone SE (entrée de gamme), Android Pixel 5, tablette</b>. Audit performances (fluidité 60 fps cible), accessibilité, RGPD CNIL, batterie. Beta fermée 50–100 utilisateurs en TestFlight. <b>1 tour de corrections inclus</b>.</p>
        <div class="proc-dur">1–2 SEMAINES</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 05</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
        <h4>Soumission stores + suivi 30 j</h4>
        <p>On gère App Store Connect + Google Play Console : fiche store, captures, ASO, soumission, <b>1 à 3 itérations de review Apple</b> (24-48 h chacune). 30 j de garantie post-publication. Formation 2 h.</p>
        <div class="proc-dur">5–10 JOURS · J+30</div>
      </div>
    </div>
  </div>
</section>

<!-- STACK -->
<section class="stack">
  <div class="wrap">
    <div class="stack-grid">
      <div class="reveal">
        <div class="eyebrow">— Notre stack mobile</div>
        <h2 style="margin-top:14px">Un seul codebase,<br>deux stores, cinq plateformes.</h2>
        <p style="color:var(--mute);font-size:16px;margin-top:20px;max-width:480px">
          On fait <b>React Native + Expo</b> par défaut : iOS, Android, web mobile, tablette, Apple Watch via 1 seule codebase TypeScript.
          Coût divisé par 2 vs natif Swift/Kotlin séparé, perfs 60 fps, et <b>OTA updates en 10 min</b>. On sort du natif Swift/Kotlin
          uniquement si la perf critique l'exige (jeu, IoT BLE pointu, finance lourde).
        </p>

        <div class="stack-list">
          <div class="sl-row">
            <div class="sl-cat">FRAMEWORK</div>
            <div class="sl-val">React Native 0.78 · Expo SDK 53 · TypeScript</div>
            <div class="sl-note">1 CODEBASE · 2 STORES</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">DISTRIBUTION</div>
            <div class="sl-val">EAS Build · EAS Submit · EAS Update (OTA)</div>
            <div class="sl-note">FIX EN 10 MIN</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">UI / DESIGN</div>
            <div class="sl-val">React Native Reanimated · Skia · Tamagui · NativeWind</div>
            <div class="sl-note">ANIMATIONS FLUIDES</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">PAIEMENT</div>
            <div class="sl-val">Stripe Mobile · Apple Pay · Google Pay · Apple IAP · RevenueCat</div>
            <div class="sl-note">PHYSIQUE OU DIGITAL</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">PUSH &amp; ANALYTICS</div>
            <div class="sl-val">Firebase Cloud Messaging · Batch · Amplitude · PostHog</div>
            <div class="sl-note">SEGMENTÉ · OPT-IN</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">BACK-END</div>
            <div class="sl-val">Next.js API · Supabase · Firebase</div>
            <div class="sl-note">VOTRE STACK</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">QA &amp; MONITORING</div>
            <div class="sl-val">Maestro (E2E) · Detox · Sentry · Crashlytics</div>
            <div class="sl-note">SLA 4H BLOQUANT</div>
          </div>
          <div class="sl-row">
            <div class="sl-cat">NATIF SI BESOIN</div>
            <div class="sl-val">Swift / SwiftUI · Kotlin / Compose · Modules custom</div>
            <div class="sl-note">PERF CRITIQUE UNIQUEMENT</div>
          </div>
        </div>
      </div>

      <div class="stack-visual reveal reveal-d-2">
        <div class="stack-orbit">
          <div class="orbit-ring"></div>
          <div class="orbit-ring r2"></div>
          <div class="orbit-center">
            <div class="mark">RN<span class="dot">.</span></div>
          </div>
          <div class="orbit-node" style="top:2%;left:50%;transform:translateX(-50%)">
            <span class="nd" style="background:var(--ink)"></span>iOS Swift
          </div>
          <div class="orbit-node" style="top:22%;right:-10px">
            <span class="nd" style="background:#3DDC84"></span>Android Kotlin
          </div>
          <div class="orbit-node" style="bottom:22%;right:-5px">
            <span class="nd" style="background:#635BFF"></span>Stripe + Apple Pay
          </div>
          <div class="orbit-node" style="bottom:2%;left:50%;transform:translateX(-50%)">
            <span class="nd" style="background:#FF9500"></span>App Store
          </div>
          <div class="orbit-node" style="bottom:22%;left:-10px">
            <span class="nd" style="background:#01875F"></span>Google Play
          </div>
          <div class="orbit-node" style="top:22%;left:-20px">
            <span class="nd" style="background:#FFCA28"></span>Firebase
          </div>
          <div class="orbit-node" style="top:50%;left:-14%;transform:translateY(-50%)">
            <span class="nd" style="background:var(--ink)"></span>API Next.js
          </div>
          <div class="orbit-node" style="top:50%;right:-14%;transform:translateY(-50%)">
            <span class="nd" style="background:var(--ink)"></span>EAS Updates
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Trois formats, devis sur mesure</div>
        <h2>Chaque app est unique.<br>Le devis l'est aussi.</h2>
      </div>
      <div class="right">
        On vend au forfait fixe, pas au TJM — mais on ne chiffre <b>jamais</b> avant
        d'avoir compris votre cas d'usage, votre cible et votre back-end existant.
        Le périmètre est cadré au discovery, le devis est ferme ensuite.
      </div>
    </div>

    <div class="price-grid">
      <div class="plan reveal">
        <div class="plan-tag">MVP / LANCEMENT</div>
        <h4>Lancement</h4>
        <div class="plan-sub">Une app native iOS + Android focalisée sur 1 cas d'usage : fidélité, réservation, click &amp; collect, app interne. Idéal pour valider un marché ou digitaliser un service existant.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">forfait fixe après cadrage</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>iOS + Android (React Native + Expo)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Périmètre resserré, 1 cas d'usage central</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Soumission App Store + Play Store incluse</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tests E2E sur 3 devices réels</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement back 1 an + formation 2 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 8 à 12 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Demander un devis</a></div>
      </div>

      <div class="plan featured reveal reveal-d-1">
        <div class="plan-badge">LE PLUS DEMANDÉ</div>
        <div class="plan-tag">APP COMPLÈTE</div>
        <h4>Performance</h4>
        <div class="plan-sub">L'app que vos clients utilisent <b>tous les jours</b> : commerce, fidélité, communauté, paiement, push géoloc, back-office complet. La gamme qui s'amortit sur 12-18 mois.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">forfait fixe après cadrage</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>iOS + Android + Web mobile (1 codebase)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Périmètre étendu, design sur mesure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Apple Pay + Google Pay + Stripe + IAP</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Push géoloc, biométrie, mode hors-ligne, OTA EAS</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Back-office React / Strapi inclus</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tests E2E Maestro · monitoring Sentry</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 14 à 20 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer mon projet</a></div>
      </div>

      <div class="plan reveal reveal-d-2">
        <div class="plan-tag">PLATEFORME</div>
        <h4>Sur-mesure</h4>
        <div class="plan-sub">Marketplace 2-sided, app entreprise terrain avec offline complexe, IoT / BLE, IA embarquée, multi-langue, intégrations ERP. Devis personnalisé après un cadrage approfondi.</div>
        <div class="plan-price">
          <span class="amount">Sur devis</span>
          <span class="per">après cadrage approfondi</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Marketplace 2-sided (KYC, Stripe Connect, escrow)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>IoT / Bluetooth LE / NFC / scan documents IA</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Modules natifs Swift / Kotlin si perf critique</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Watch / Wear OS · Apple TV · App Clip</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Multi-langue, multi-tenant, intégration ERP (Sage, Cegid, SAP)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 5 à 9 mois</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Cadrer mon besoin</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:44px;color:var(--mute);font-size:14px">
      <b style="color:var(--ink)">Tous les forfaits incluent</b> : code source 100 % à vous · repo Git J+1 · comptes App Store + Google Play à votre nom · soumission stores · 30 j de garantie post-publication · paiement échelonné.
      &nbsp;&nbsp;<i>Frais Apple Developer + Google Play facturés directement à votre nom.</i>
    </p>
  </div>
</section>

<!-- FAQ -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ commerciale</div>
        <h2 style="margin-top:14px">Les vraies questions<br>qu'on nous pose<br>avant de signer.</h2>
        <p>Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. On répond sous 24 h ouvrées, par quelqu'un qui code, sans détour ni jargon.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">
            Combien ça coûte vraiment, une vraie app mobile en France ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Sur devis</b>, après un cadrage qui définit le périmètre exact. Le coût varie fortement selon la complexité : un MVP focalisé sur un seul cas d'usage n'a pas le même prix qu'une marketplace 2-sided ou qu'une app entreprise avec intégrations ERP. Pour situer les fourchettes du marché, lisez notre <a href="/guides/combien-coute-une-application-mobile">guide des prix d'une application mobile</a>. <b>On ne chiffre jamais sur un brief de 3 lignes</b> : on commence par un Discovery Sprint, on cadre les écrans clés, et le forfait fixe arrive ensuite — ferme et sans avenant sur le scope validé.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Combien de temps avant qu'elle soit sur les stores ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>8-12 semaines</b> pour un MVP, <b>14-20 semaines</b> pour une app complète, <b>5-9 mois</b> pour une marketplace ou app entreprise. Soumission Apple = 24-48 h par cycle, 1 à 3 itérations en moyenne. On planifie avec marge. Délais contractualisés au cadrage, avec <b>clause de pénalité de retard</b> écrite dans le contrat au-delà de la date livrée.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Qui possède le code et les comptes stores ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Vous, à 100 %, dès J+1.</b> Repo Git sur votre organisation GitHub. Compte Apple Developer + Google Play Console créés <b>à votre nom</b>, et facturés directement à vous par Apple et Google. Certificats iOS, clés API, fichiers Figma, icônes : tout est sous votre contrôle. Si on disparaît demain, n'importe quelle ESN React Native peut reprendre. <b>Aucun lock-in technique ou contractuel.</b>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Et si Apple refuse mon app ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            On gère la soumission de A à Z. Apple refuse 40 % des apps au 1ᵉʳ envoi (critère 2.1 : app incomplète ou buggée), nous on prévoit 1 à 3 itérations dans le forfait. Connaissance des points sensibles : permissions tracking ATT, IAP vs Stripe, contenu généré par utilisateurs (modération obligatoire), abos clairement affichés. <b>Pas de surcoût si Apple demande 2-3 retouches.</b>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            React Native vs Flutter vs natif Swift/Kotlin : qu'est-ce qui est mieux ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            On fait <b>React Native + Expo par défaut</b> : couvre la grande majorité des besoins PME, mutualise iOS et Android sur une seule codebase, animations fluides à 60 fps via Reanimated, OTA updates via EAS. <b>Flutter</b> est techniquement équivalent — on n'en fait pas car notre stack web est React et la cohérence avec votre back-end existant, quel qu'il soit, est meilleure. <b>Natif Swift/Kotlin</b> uniquement si la perf est critique (jeu 3D, IoT BLE pointu, finance lourde) — sur option dans le forfait Sur-mesure, pour les modules concernés.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Apple/Google prennent-ils 30 % sur tout ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Non, <b>uniquement sur les biens digitaux et abonnements in-app</b>. <b>Petites entreprises (&lt; 1 M$ CA / an) : 15 %</b> via Apple Small Business Program. <b>Biens physiques, livraisons, click &amp; collect, services réservés via l'app</b> : <b>0 % de commission</b>, vous passez par Stripe / PayPlug en webview. On vous conseille la bonne stratégie au cadrage selon votre business model.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            La maintenance après le lancement, ça coûte combien ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Forfait maintenance <b>optionnel, sur devis selon volume et criticité</b>, sans engagement de durée. Inclus selon le scope retenu : compatibilité iOS / Android annuelle (iOS 18 → 19), correctifs sécurité, monitoring 24/7, hot-fixes via OTA, releases régulières. Une app non maintenue est désinstallée à 6 mois — donc même si vous repoussez la maintenance, on en parle au cadrage pour planifier la trajectoire.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Comment je suis sûr que les utilisateurs téléchargeront ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Aucune agence sérieuse ne peut le garantir</b> : 42 % des startups d'apps échouent par manque de besoin réel, pas de tech. C'est pour ça qu'on fait un Discovery Sprint <b>avant</b> le forfait, pour challenger l'idée. On insiste aussi pour un <b>budget marketing 20-25 %</b> du projet (ASO, push, paid social) — sans ça, la meilleure app reste invisible. On vous le dira franchement avant que vous signiez.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            iOS d'abord, Android d'abord, ou les deux ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Avec React Native, <b>les deux d'un coup</b>, dans la même codebase. En France : iOS représente environ 30 % des utilisateurs mais <b>une part bien plus grande du chiffre d'affaires app</b> (CSP+, paniers premium). Si votre cible est CSP+ et que vous voulez prioriser la beta, on peut commencer par <b>TestFlight iOS</b> puis sortir Android au sprint suivant. En pratique, sur React Native, l'écart est minime — autant publier sur les deux stores en même temps.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            On paye comment, on signe quand ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Échéancier <b>30 / 40 / 30</b> : 30 % à la signature du devis, 40 % à la validation du design Figma, 30 % à la mise en ligne stores. Devis + contrat signés électroniquement (Yousign). Facturation SAS française, TVA française applicable. <b>Une partie du projet (R&amp;D mobile, IA embarquée, modules natifs) peut être éligible au Crédit Impôt Recherche</b> — on documente les prestations CIR-éligibles dans le rapport technique de fin de projet.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Et si je veux ajouter des fonctionnalités après le lancement ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Évolution mineure (1 écran, 1 intégration) : <b>chiffrée au ticket</b> sur la base d'un cadrage rapide. Module (paiement supplémentaire, vertical secondaire, watch app) : sur devis. <b>Releases mensuelles en standard</b>. Pour un partenariat long terme, on propose un forfait évolutions mensuel cadré ensemble — <b>volume et budget définis selon votre rythme</b> — sans friction de devis pour chaque ajustement.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            CNIL, RGPD, données santé, mineurs : qu'est-ce qu'on risque ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            La CNIL contrôle les apps depuis <b>printemps 2025</b>, sanction max <b>4 % du CA / 20 M€</b>. On livre <b>politique de confidentialité dédiée mobile</b>, gestion permissions (geo, contacts, micro, photos) conforme, DPA signé, hébergement Scaleway Paris ou OVH Roubaix. Pour <b>données santé</b> : hébergement HDS, consentement renforcé, DPO obligatoire. Pour <b>mineurs</b> : double consentement parental.
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
    <h2 style="margin-top:18px">Votre app sur les stores,<br>cadrée et chiffrée par quelqu'un qui code.</h2>
    <p>Un call de 30 min avec un expert. Vous repartez avec un avis franc sur votre projet et, sous 48 h, un devis chiffré au forfait — sans engagement.</p>
    <div class="scta-cta">
      <a href="#contact" class="btn btn-accent btn-lg">
        📅 &nbsp;Réserver 30 min avec un expert
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a href="mailto:quentin@hagnere-patrimoine.fr" class="btn btn-ghost btn-lg" style="background:rgba(255,255,255,0.05);color:#fff;border-color:rgba(255,255,255,0.15)">
        Envoyer un email →
      </a>
    </div>
    <div class="scta-meta">RÉPONSE SOUS 24 H · PAR UN ASSOCIÉ QUI CODE · SANS ENGAGEMENT · DISCOVERY SPRINT DÉDUCTIBLE DU DEVIS</div>
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
        <p>Studio de développement SaaS, applications métier, e-commerce, sites vitrines et apps mobiles. Basé à Chambéry. Forfait fixe.</p>
      </div>
      <div class="foot-cols">
        <div class="foot-col">
          <h5>SERVICES</h5>
          <a href="/services/saas-applications-metier">SaaS &amp; applis métier</a>
          <a href="/services/outils-internes-sur-mesure">Outils internes</a>
          <a href="/services/sites-vitrines">Sites vitrines</a>
          <a href="/services/ecommerce">E-commerce</a>
          <a href="/services/application-mobile">Application mobile</a>
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
