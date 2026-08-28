export const bodyHtml = `
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <a href="/services">Services</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">E-commerce sur mesure</span>
  </div>
</div>

<!-- HERO -->
<section class="shero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow"><span class="pill"><span class="dot"></span> Service · Boutiques e-commerce sur mesure</span></div>
      <h1>Votre boutique e-commerce,<br><span class="accent">pas celle</span> de Shopify.</h1>
      <div class="shero-tagline">
        <span>Design &amp; charte graphique au devis</span>
        <span class="sep"></span>
        <span>App mobile iOS &amp; Android en option</span>
        <span class="sep"></span>
        <span>Forfait fixe, code à vous</span>
      </div>
      <p class="shero-sub">
        On construit des boutiques e-commerce <b>sur mesure, pensées pour le marché français 2026</b> :
        paiement, livraison, ERP et facturation électronique sont cadrés selon vos outils et vos obligations.
        Pas de commission Hagnéré sur vos ventes, pas de dépendance à un outil propriétaire de l'agence.
        <b>Votre code, votre serveur, votre marge.</b>
      </p>
      <p class="shero-sub" style="margin-top:10px;font-size:13px;opacity:0.78">
        Les boutiques montrées sur cette page sont des maquettes&nbsp;: « ÆTHER » est une MARQUE FICTIVE, et les
        prix, commandes et chiffres affichés sont des DONNÉES FICTIVES.
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Cadrer mon projet e-commerce <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#simulateur" class="btn btn-ghost btn-lg">Estimer le TCO Shopify sur 36 mois</a>
      </div>
      <div class="shero-badges">
        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 8H9a3 3 0 000 6h6a3 3 0 010 6H7"/>
              <path d="M12 4v4M12 16v4"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">0<span class="shero-badge-key-unit">%</span></div>
            <div class="shero-badge-label">Commission sur vos ventes</div>
          </div>
        </div>

        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <path d="M14 2v6h6"/>
              <path d="M9 14l2 2 4-4"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">FX<span class="shero-badge-key-unit">·PA</span></div>
            <div class="shero-badge-label">Factur-X et PA selon périmètre</div>
          </div>
        </div>

        <div class="shero-badge">
          <div class="shero-badge-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="shero-badge-body">
            <div class="shero-badge-key">FR<span class="shero-badge-pulse"></span></div>
            <div class="shero-badge-label">Hébergement en France disponible</div>
          </div>
        </div>
      </div>
    </div>

    <!-- VISUAL: premium storefront mock in studio stage -->
    <div class="shero-visual ec-stage">
      <div class="ec-stage-bg" aria-hidden="true"></div>
      <div class="ec-stage-grid" aria-hidden="true"></div>

      <div class="ec-desktop">
        <div class="ec-desktop-chrome">
          <div class="ec-desktop-chrome-l">
            <span class="ec-desktop-traffic"></span>
            <span class="ec-desktop-traffic"></span>
            <span class="ec-desktop-traffic"></span>
          </div>
          <div class="ec-desktop-domain">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
            <span>aether.fr <span class="ec-desktop-path">/ nouvelle-collection</span></span>
          </div>
          <div class="ec-desktop-chrome-r">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v14"/></svg>
          </div>
        </div>
        <div class="ec-desktop-screen">
        <svg width="100%" viewBox="0 0 540 360" style="display:block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#F7F3EE"/>
              <stop offset="100%" stop-color="#EEE8E0"/>
            </linearGradient>
            <linearGradient id="productBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#1a1a1a"/>
              <stop offset="100%" stop-color="#2d2d2d"/>
            </linearGradient>
            <linearGradient id="goldBottle" x1="0.3" y1="0" x2="0.7" y2="1">
              <stop offset="0%" stop-color="#D4A574"/>
              <stop offset="50%" stop-color="#B8864C"/>
              <stop offset="100%" stop-color="#8A5F2E"/>
            </linearGradient>
            <linearGradient id="bottleHighlight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="rgba(255,255,255,0.4)"/>
              <stop offset="40%" stop-color="rgba(255,255,255,0)"/>
              <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
            </linearGradient>
          </defs>
          <rect width="540" height="360" fill="#fff"/>

          <!-- Top nav bar (editorial / minimal) -->
          <rect x="0" y="0" width="540" height="38" fill="#fff" stroke="#F0F0F0"/>
          <text x="24" y="24" font-family="Geist" font-weight="700" font-size="12" fill="#0A0A0A" letter-spacing="3">ÆTHER</text>
          <g font-family="Geist" font-size="9.5" fill="#525252" letter-spacing="0.02em">
            <text x="180" y="24">Parfums</text>
            <text x="228" y="24">Soins</text>
            <text x="268" y="24">Rituels</text>
            <text x="314" y="24">Éditorial</text>
            <text x="362" y="24">Journal</text>
          </g>
          <g transform="translate(468 12)" fill="none" stroke="#0A0A0A" stroke-width="1.2">
            <circle cx="0" cy="6" r="5"/>
            <path d="M4 10l4 4"/>
          </g>
          <g transform="translate(490 8)">
            <path d="M0 4h12l-1 8H1z" fill="none" stroke="#0A0A0A" stroke-width="1.2"/>
            <path d="M3 4a3 3 0 016 0" fill="none" stroke="#0A0A0A" stroke-width="1.2"/>
            <circle cx="11" cy="2" r="3" fill="#6D28D9"/>
            <text x="11" y="3.8" text-anchor="middle" font-family="Geist Mono" font-weight="700" font-size="4.5" fill="#fff">2</text>
          </g>
          <g transform="translate(515 8)" fill="none" stroke="#0A0A0A" stroke-width="1.2">
            <circle cx="5" cy="5" r="3"/>
            <path d="M1 13a4 4 0 018 0"/>
          </g>

          <!-- Editorial hero block -->
          <rect x="0" y="38" width="540" height="226" fill="url(#heroBg)"/>

          <!-- Eyebrow -->
          <text x="32" y="76" font-family="Geist Mono" font-size="8.5" fill="#8A5F2E" letter-spacing="0.18em">— NOUVELLE COLLECTION · HIVER 2026</text>

          <!-- Main editorial title (serif-like weight hierarchy via size) -->
          <text x="32" y="122" font-family="Geist" font-weight="500" font-size="32" fill="#0A0A0A" letter-spacing="-0.03em">Les parfums</text>
          <text x="32" y="156" font-family="Geist" font-weight="500" font-size="32" fill="#0A0A0A" letter-spacing="-0.03em" font-style="italic">de l'hiver.</text>

          <!-- Supporting text -->
          <text x="32" y="182" font-family="Geist" font-size="10" fill="#525252">Six compositions inédites, extraites de nos</text>
          <text x="32" y="196" font-family="Geist" font-size="10" fill="#525252">cuves à Grasse, livrées chez vous.</text>

          <!-- CTAs -->
          <g transform="translate(32 218)">
            <rect x="0" y="0" width="108" height="32" rx="0" fill="#0A0A0A"/>
            <text x="54" y="20" text-anchor="middle" font-family="Geist" font-weight="500" font-size="10" fill="#fff" letter-spacing="0.04em">DÉCOUVRIR</text>
            <rect x="120" y="0" width="96" height="32" rx="0" fill="none" stroke="#0A0A0A" stroke-width="1"/>
            <text x="168" y="20" text-anchor="middle" font-family="Geist" font-weight="500" font-size="10" fill="#0A0A0A" letter-spacing="0.04em">LE RITUEL</text>
          </g>

          <!-- Hero product: gold perfume bottle, detailed -->
          <g transform="translate(360 68)">
            <!-- Bottle shadow -->
            <ellipse cx="70" cy="180" rx="58" ry="6" fill="#000" opacity="0.12"/>
            <!-- Bottle neck -->
            <rect x="60" y="14" width="20" height="22" rx="2" fill="url(#goldBottle)"/>
            <!-- Bottle cap -->
            <rect x="54" y="0" width="32" height="16" rx="2" fill="#0A0A0A"/>
            <rect x="54" y="0" width="32" height="4" fill="rgba(255,255,255,0.12)"/>
            <!-- Bottle body -->
            <path d="M40 40 Q40 36 48 36 L92 36 Q100 36 100 40 L100 170 Q100 178 92 178 L48 178 Q40 178 40 170 Z" fill="url(#goldBottle)"/>
            <!-- Bottle highlight -->
            <path d="M44 42 Q44 40 49 40 L52 40 L52 168 Q52 174 49 174 L44 174 Z" fill="url(#bottleHighlight)"/>
            <!-- Label -->
            <rect x="50" y="88" width="40" height="48" fill="rgba(10,10,10,0.85)"/>
            <text x="70" y="104" text-anchor="middle" font-family="Geist Mono" font-size="5.5" fill="#D4A574" letter-spacing="0.16em">ÆTHER</text>
            <line x1="58" y1="110" x2="82" y2="110" stroke="#D4A574" stroke-width="0.6"/>
            <text x="70" y="122" text-anchor="middle" font-family="Geist" font-style="italic" font-size="8" fill="#F7F3EE">Nuit</text>
            <text x="70" y="132" text-anchor="middle" font-family="Geist Mono" font-size="4.5" fill="rgba(247,243,238,0.6)" letter-spacing="0.12em">50 ML · EDP</text>
          </g>

          <!-- Divider -->
          <line x1="0" y1="264" x2="540" y2="264" stroke="#E5E0D8"/>

          <!-- Product grid row -->
          <g>
            <rect x="0" y="264" width="180" height="96" fill="#fff"/>
            <rect x="16" y="276" width="60" height="68" rx="1" fill="#EEE8E0"/>
            <rect x="40" y="284" width="12" height="52" rx="1" fill="url(#goldBottle)"/>
            <text x="88" y="292" font-family="Geist" font-weight="500" font-size="10" fill="#0A0A0A">Aube</text>
            <text x="88" y="306" font-family="Geist" font-size="8.5" fill="#8A8A8A">Eau de parfum · 50 ml</text>
            <text x="88" y="328" font-family="Geist" font-weight="600" font-size="10" fill="#0A0A0A">138 €</text>
            <text x="128" y="328" font-family="Geist Mono" font-size="8" fill="#6D28D9">ou 3× 46 €</text>
          </g>

          <g>
            <rect x="180" y="264" width="180" height="96" fill="#fff" stroke="#F0F0F0"/>
            <rect x="196" y="276" width="60" height="68" rx="1" fill="#E8E3DC"/>
            <rect x="220" y="284" width="12" height="52" rx="1" fill="#C9B08A"/>
            <text x="268" y="292" font-family="Geist" font-weight="500" font-size="10" fill="#0A0A0A">Brume</text>
            <text x="268" y="306" font-family="Geist" font-size="8.5" fill="#8A8A8A">Eau de parfum · 50 ml</text>
            <text x="268" y="328" font-family="Geist" font-weight="600" font-size="10" fill="#0A0A0A">148 €</text>
            <rect x="268" y="334" width="72" height="14" fill="#F7F3EE"/>
            <text x="272" y="344" font-family="Geist Mono" font-size="7" fill="#8A5F2E" letter-spacing="0.1em">⊕ AJOUTER</text>
          </g>

          <g>
            <rect x="360" y="264" width="180" height="96" fill="#fff"/>
            <rect x="376" y="276" width="60" height="68" rx="1" fill="#EEE8E0"/>
            <rect x="400" y="284" width="12" height="52" rx="1" fill="#B8864C"/>
            <text x="448" y="292" font-family="Geist" font-weight="500" font-size="10" fill="#0A0A0A">Nuit</text>
            <rect x="478" y="282" width="40" height="13" fill="#0A0A0A"/>
            <text x="498" y="291" text-anchor="middle" font-family="Geist Mono" font-size="6.5" fill="#fff" letter-spacing="0.1em">NOUVEAU</text>
            <text x="448" y="306" font-family="Geist" font-size="8.5" fill="#8A8A8A">Extrait · 30 ml</text>
            <text x="448" y="328" font-family="Geist" font-weight="600" font-size="10" fill="#0A0A0A">218 €</text>
            <text x="487" y="328" font-family="Geist Mono" font-size="8" fill="#6D28D9">ou 4× 54,50 €</text>
          </g>
        </svg>
        </div>
      </div>

      <div class="ec-phone">
        <div class="ec-phone-side ec-phone-side-left" aria-hidden="true">
          <span class="ec-phone-btn ec-phone-btn-silent"></span>
          <span class="ec-phone-btn ec-phone-btn-vol-up"></span>
          <span class="ec-phone-btn ec-phone-btn-vol-dn"></span>
        </div>
        <div class="ec-phone-side ec-phone-side-right" aria-hidden="true">
          <span class="ec-phone-btn ec-phone-btn-power"></span>
        </div>
        <div class="ec-phone-bezel">
          <div class="ec-phone-island" aria-hidden="true"></div>
          <div class="ec-phone-screen">
        <svg width="100%" viewBox="0 0 320 380" style="display:block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="phoneBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0F0F10"/>
              <stop offset="100%" stop-color="#050505"/>
            </linearGradient>
            <linearGradient id="mobileGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#D4A574"/>
              <stop offset="100%" stop-color="#8A5F2E"/>
            </linearGradient>
            <radialGradient id="glow" cx="0.5" cy="0.4" r="0.6">
              <stop offset="0%" stop-color="rgba(212,165,116,0.35)"/>
              <stop offset="100%" stop-color="rgba(212,165,116,0)"/>
            </radialGradient>
          </defs>
          <rect width="320" height="380" fill="url(#phoneBg)"/>

          <!-- Status bar -->
          <text x="22" y="26" font-family="Geist Mono" font-weight="700" font-size="10" fill="#fff">9:41</text>
          <g transform="translate(240 18)">
            <rect x="0" y="0" width="16" height="10" rx="2" fill="rgba(255,255,255,0.9)"/>
            <rect x="1" y="1" width="12" height="8" rx="1" fill="#0A0A0A"/>
            <rect x="1" y="1" width="10" height="8" rx="1" fill="rgba(255,255,255,0.9)"/>
          </g>
          <g transform="translate(265 18)" fill="rgba(255,255,255,0.9)">
            <rect x="0" y="6" width="2" height="4" rx="0.5"/>
            <rect x="3" y="4" width="2" height="6" rx="0.5"/>
            <rect x="6" y="2" width="2" height="8" rx="0.5"/>
            <rect x="9" y="0" width="2" height="10" rx="0.5"/>
          </g>

          <!-- Top bar -->
          <text x="22" y="56" font-family="Geist" font-weight="700" font-size="14" fill="#fff" letter-spacing="3">ÆTHER</text>
          <g transform="translate(265 46)" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.3">
            <circle cx="6" cy="6" r="5"/>
            <path d="M10 10l4 4"/>
          </g>
          <g transform="translate(290 46)" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.3">
            <path d="M0 4h12l-1 8H1z"/>
            <path d="M3 4a3 3 0 016 0"/>
          </g>

          <!-- Hero product card -->
          <rect x="16" y="74" width="288" height="200" rx="4" fill="#14100B"/>
          <rect x="16" y="74" width="288" height="200" rx="4" fill="url(#glow)"/>

          <!-- Push notification banner over -->
          <g transform="translate(22 82)">
            <rect x="0" y="0" width="276" height="36" rx="10" fill="rgba(255,255,255,0.08)"/>
            <rect x="0" y="0" width="276" height="36" rx="10" fill="none" stroke="rgba(255,255,255,0.08)"/>
            <rect x="8" y="8" width="20" height="20" rx="5" fill="#D4A574"/>
            <text x="14" y="22" text-anchor="middle" font-family="Geist" font-weight="700" font-size="9" fill="#0A0A0A">Æ</text>
            <text x="34" y="16" font-family="Geist Mono" font-size="7" fill="rgba(255,255,255,0.5)" letter-spacing="0.06em">ÆTHER · IL Y A 2 MIN</text>
            <text x="34" y="28" font-family="Geist" font-weight="500" font-size="9.5" fill="#fff">Nuit est disponible en précommande.</text>
          </g>

          <!-- Bottle composition inside card (shifted) -->
          <g transform="translate(124 142)">
            <ellipse cx="20" cy="100" rx="30" ry="4" fill="#000" opacity="0.5"/>
            <rect x="12" y="6" width="16" height="16" rx="2" fill="url(#mobileGold)"/>
            <rect x="8" y="0" width="24" height="10" rx="1" fill="#0A0A0A"/>
            <path d="M0 26 Q0 23 6 23 L34 23 Q40 23 40 26 L40 98 Q40 102 34 102 L6 102 Q0 102 0 98 Z" fill="url(#mobileGold)"/>
            <rect x="7" y="56" width="26" height="28" fill="rgba(10,10,10,0.85)"/>
            <text x="20" y="67" text-anchor="middle" font-family="Geist Mono" font-size="4" fill="#D4A574" letter-spacing="0.14em">ÆTHER</text>
            <text x="20" y="79" text-anchor="middle" font-family="Geist" font-style="italic" font-size="6" fill="#F7F3EE">Nuit</text>
          </g>

          <!-- Meta -->
          <text x="32" y="302" font-family="Geist" font-weight="500" font-size="13" fill="#fff">Nuit — Extrait 30 ml</text>
          <text x="32" y="318" font-family="Geist Mono" font-size="9" fill="rgba(255,255,255,0.45)" letter-spacing="0.04em">ÉDITION LIMITÉE · 420 FLACONS</text>

          <!-- Price + CTA -->
          <text x="32" y="350" font-family="Geist" font-weight="600" font-size="18" fill="#fff" letter-spacing="-0.02em">218 €</text>
          <text x="78" y="350" font-family="Geist Mono" font-size="10" fill="rgba(212,165,116,0.9)">ou 4× 54,50 € sans frais</text>

          <rect x="208" y="332" width="96" height="30" rx="4" fill="#D4A574"/>
          <text x="256" y="351" text-anchor="middle" font-family="Geist" font-weight="600" font-size="11" fill="#0A0A0A" letter-spacing="0.02em">AJOUTER</text>
        </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PROBLEMS -->
<section class="ec-problems">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Là où vous êtes probablement aujourd'hui</div>
        <h2>Six points de vigilance<br>avant une refonte.</h2>
      </div>
      <div class="right">
        Ces situations ne valent pas diagnostic à elles seules. Elles servent à identifier les coûts, dépendances
        et risques à documenter avant de choisir entre une optimisation de l'existant et une refonte.
      </div>
    </div>

    <div class="ecp-grid">
      <div class="ecp-card reveal">
        <div class="ecp-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg></div>
        <h3>« Notre coût Shopify complet augmente »</h3>
        <p>
          Licence Shopify Plus, apps marketing, frais variables et paiement selon votre contrat : le total peut
          s'éloigner du prix d'appel. La comparaison utile part de vos factures, pas d'un pourcentage générique.
        </p>
        <div class="ecp-foot">Ce qu'on construit : <b>la version sur-mesure sans % ni app stack</b>.</div>
      </div>

      <div class="ecp-card reveal reveal-d-1">
        <div class="ecp-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h3>« Notre Prestashop 1.7 bugge tous les mois »</h3>
        <p>
          Modules non maintenus, thème fragile à chaque mise à jour, performances dégradées ou paiement instable :
          mesurez le coût correctif réel avant de conclure qu'une refonte complète est nécessaire.
        </p>
        <div class="ecp-foot">Ce qu'on fait : <b>reprise ou refonte propre, migration contrôlée</b>.</div>
      </div>

      <div class="ecp-card reveal reveal-d-2">
        <div class="ecp-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg></div>
        <h3>« On n'a toujours pas d'app mobile »</h3>
        <p>
          Push, wallet, scan produit et compte permanent peuvent servir la fidélité, mais une app native n'est
          pertinente que si la fréquence d'achat, l'usage mobile et le coût d'exploitation justifient le projet.
        </p>
        <div class="ecp-foot">Ce qu'on chiffre : <b>app React Native dans les forfaits qui l'incluent ou en option explicite</b>.</div>
      </div>

      <div class="ecp-card reveal">
        <div class="ecp-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><path d="M18 9l-5 5-3-3-4 4"/></svg></div>
        <h3>« Notre SEO dégringole depuis la refonte »</h3>
        <p>
          Une migration sans inventaire, redirections ni recette peut dégrader le trafic et l'indexation.
          L'ampleur et la durée d'une variation dépendent du site, du marché et des changements réalisés.
        </p>
        <div class="ecp-foot">Ce qu'on met en place : <b>inventaire, mapping 301, recette et suivi post-bascule</b>.</div>
      </div>

      <div class="ecp-card reveal reveal-d-1">
        <div class="ecp-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg></div>
        <h3>« Facturation électronique 2026, on gère comment ? »</h3>
        <p>
          Dès le 1<sup>er</sup> septembre 2026, toutes les entreprises concernées doivent pouvoir recevoir des
          factures électroniques ; les grandes entreprises et ETI doivent aussi émettre et transmettre leurs données.
          L'émission et l'e-reporting s'appliquent aux PME et microentreprises le 1<sup>er</sup> septembre 2027.
        </p>
        <div class="ecp-foot">Ce qu'on peut intégrer : <b>Factur-X + connexion à la Plateforme Agréée retenue avec votre comptable</b>.</div>
      </div>

      <div class="ecp-card reveal reveal-d-2">
        <div class="ecp-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21"/></svg></div>
        <h3>« Le back-office mobilise trop de temps dans mon équipe »</h3>
        <p>
          Édition de BL, impression étiquettes Colissimo, ressaisie dans Sage, relance clients par email, tracking manuel,
          ressaisie marketplace : votre équipe passe plus de temps à administrer qu'à vendre.
        </p>
        <div class="ecp-foot">Ce qu'on automatise : <b>commandes → étiquettes → ERP → emails, avec contrôles et reprise manuelle</b>.</div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT WE BUILD -->
<section class="ec-build">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on construit</div>
        <h2>Une boutique complète,<br>pas juste un site web.</h2>
      </div>
      <div class="right">
        Une boutique e-commerce mobilise six chantiers liés. Le devis précise ceux qui sont nécessaires,
        les personnes mobilisées, les livrables attendus et les éventuels partenaires techniques.
        <b>Les visuels de cette section sont des maquettes</b>&nbsp;: « ÆTHER » est une MARQUE FICTIVE, et les
        prix, commandes et montants affichés sont des DONNÉES FICTIVES — ce ne sont pas des captures d'un site client.
      </div>
    </div>

    <div class="ec-bento">

      <!-- 01 — Design & charte : GRANDE card éditoriale (large) -->
      <article class="ec-bento-card ec-b-design ec-b-span-7 reveal">
        <div class="ec-bento-header">
          <div class="ec-bento-num">01</div>
          <div class="ec-bento-kind">Design</div>
        </div>
        <h3 class="ec-bento-title">Charte graphique &amp; design system <em>complets</em>.</h3>
        <p class="ec-bento-desc">Moodboard, palette, typo, design system Figma, déclinaisons web, mobile, email, print. Tout part d'un design, pas d'un template.</p>

        <div class="ec-b-design-canvas" aria-hidden="true">
          <div class="ec-b-design-palette">
            <div class="ec-b-swatch" style="--c:#0A0A0A"><span>#0A0A0A</span></div>
            <div class="ec-b-swatch" style="--c:#6D28D9"><span>#6D28D9</span></div>
            <div class="ec-b-swatch" style="--c:#D4A574"><span>#D4A574</span></div>
            <div class="ec-b-swatch" style="--c:#F7F3EE"><span>#F7F3EE</span></div>
            <div class="ec-b-swatch" style="--c:#166534"><span>#166534</span></div>
          </div>
          <div class="ec-b-design-typo">
            <div class="ec-b-typo-display">Æther</div>
            <div class="ec-b-typo-meta">Geist · 72 / 48 / 32 / 20 / 14 / 11</div>
          </div>
          <div class="ec-b-design-tokens">
            <span>radius · 14px</span>
            <span>shadow · xl</span>
            <span>spacing · 8 · 16 · 24 · 40</span>
          </div>
        </div>
      </article>

      <!-- 02 — Storefront premium : card dark (petite) -->
      <article class="ec-bento-card ec-b-store ec-b-span-5 ec-b-dark reveal reveal-d-1">
        <div class="ec-bento-header">
          <div class="ec-bento-num">02</div>
          <div class="ec-bento-kind">Storefront</div>
        </div>
        <h3 class="ec-bento-title">Next.js · objectifs mesurables.</h3>
        <p class="ec-bento-desc">SSR + ISR, fiche produit dynamique, recherche sémantique et panier persistant. Les seuils de performance sont définis et testés sur les parcours retenus.</p>

        <div class="ec-b-store-canvas" aria-hidden="true">
          <div class="ec-b-store-window">
            <div class="ec-b-store-chrome">
              <span></span><span></span><span></span>
              <div class="ec-b-store-url">aether.fr</div>
            </div>
            <div class="ec-b-store-screen">
              <div class="ec-b-store-nav">
                <span>ÆTHER</span>
                <small>Parfums · Rituels · Éditorial</small>
              </div>
              <div class="ec-b-store-hero">
                <div class="ec-b-store-bottle"></div>
                <div class="ec-b-store-lbl">Nuit — Extrait 30ml</div>
                <div class="ec-b-store-price">218 €</div>
              </div>
            </div>
          </div>
          <div class="ec-b-store-perf">
            <span class="ec-b-perf-dot" style="--d:#166534"></span> Objectifs de recette
            <span class="ec-b-perf-sep"></span>
            <span class="ec-b-perf-dot" style="--d:#166534"></span> LCP · INP · CLS
            <span class="ec-b-perf-sep"></span>
            <span class="ec-b-perf-dot" style="--d:#166534"></span> Mesurés au lancement
          </div>
        </div>
      </article>

      <!-- 03 — App mobile (moyenne) -->
      <article class="ec-bento-card ec-b-mobile ec-b-span-5 reveal">
        <div class="ec-bento-header">
          <div class="ec-bento-num">03</div>
          <div class="ec-bento-kind">App mobile</div>
        </div>
        <h3 class="ec-bento-title">iOS &amp; Android natives.</h3>
        <p class="ec-bento-desc">React Native + Expo, une seule codebase, deux stores. Push, wallet, scan code, hors-ligne, 1-click reorder.</p>

        <div class="ec-b-mobile-canvas" aria-hidden="true">
          <div class="ec-b-mobile-phone">
            <div class="ec-b-mobile-island"></div>
            <div class="ec-b-mobile-screen">
              <div class="ec-b-mobile-push">
                <div class="ec-b-mobile-push-av">Æ</div>
                <div class="ec-b-mobile-push-body">
                  <small>ÆTHER · à l'instant</small>
                  <strong>Votre panier attend. -15% ce soir.</strong>
                </div>
              </div>
              <div class="ec-b-mobile-card">
                <div class="ec-b-mobile-bottle"></div>
              </div>
            </div>
            <div class="ec-b-mobile-home"></div>
          </div>
          <div class="ec-b-mobile-badges">
            <span>Push</span><span>Wallet</span><span>Scan QR</span><span>Offline</span>
          </div>
        </div>
      </article>

      <!-- 04 — Back-office (large, dark accent) -->
      <article class="ec-bento-card ec-b-admin ec-b-span-7 reveal reveal-d-1">
        <div class="ec-bento-header">
          <div class="ec-bento-num">04</div>
          <div class="ec-bento-kind">Back-office ops</div>
        </div>
        <h3 class="ec-bento-title">Un admin taillé pour <em>votre</em> équipe.</h3>
        <p class="ec-bento-desc">Gestion commandes, édition BL/facture, impression étiquettes Colissimo/Chronopost en masse, stock temps réel, retours, SAV, programmes fidélité.</p>

        <div class="ec-b-admin-canvas" aria-hidden="true">
          <div class="ec-b-admin-sidebar">
            <div class="ec-b-admin-brand">ÆTHER</div>
            <div class="ec-b-admin-item is-active">Commandes <span>142</span></div>
            <div class="ec-b-admin-item">Produits</div>
            <div class="ec-b-admin-item">Clients</div>
            <div class="ec-b-admin-item">Stock</div>
            <div class="ec-b-admin-item">Retours <span>3</span></div>
          </div>
          <div class="ec-b-admin-main">
            <div class="ec-b-admin-stats">
              <div><small>CA JOUR</small><strong>4 218 €</strong></div>
              <div><small>COMMANDES</small><strong>32</strong></div>
              <div><small>EN ATTENTE</small><strong>8</strong></div>
            </div>
            <div class="ec-b-admin-table">
              <div class="ec-b-admin-row">
                <span class="ec-b-admin-check"></span>
                <span>#2841</span>
                <span>Dupont S.</span>
                <span>218,00 €</span>
                <span class="ec-b-admin-tag ec-b-tag-ok">Préparée</span>
              </div>
              <div class="ec-b-admin-row">
                <span class="ec-b-admin-check"></span>
                <span>#2840</span>
                <span>Martin L.</span>
                <span>134,50 €</span>
                <span class="ec-b-admin-tag ec-b-tag-ok">Expédiée</span>
              </div>
              <div class="ec-b-admin-row ec-b-admin-row-pending">
                <span class="ec-b-admin-check is-active"></span>
                <span>#2839</span>
                <span>Bernard C.</span>
                <span>402,00 €</span>
                <span class="ec-b-admin-tag ec-b-tag-wait">À préparer</span>
              </div>
            </div>
            <div class="ec-b-admin-actions">
              <span>Imprimer étiquettes (12)</span>
              <span>Exporter BL</span>
              <span>Envoyer emails</span>
            </div>
          </div>
        </div>
      </article>

      <!-- 05 — IA Claude (dark, terminal feel) -->
      <article class="ec-bento-card ec-b-ai ec-b-span-6 ec-b-dark reveal">
        <div class="ec-bento-header">
          <div class="ec-bento-num">05</div>
          <div class="ec-bento-kind">IA native</div>
        </div>
        <h3 class="ec-bento-title">Des agents Claude qui bossent, pas un chatbot.</h3>
        <p class="ec-bento-desc">Génération de fiches produit, traductions, recherche sémantique, recommandations, SAV augmenté, extraction de factures fournisseurs.</p>

        <div class="ec-b-ai-canvas" aria-hidden="true">
          <div class="ec-b-ai-prompt">
            <div class="ec-b-ai-prompt-head">
              <span class="ec-b-ai-dot"></span>
              claude · product-enricher
            </div>
            <code>POST /api/products/bulk-enrich<br>payload: 420 items · langues: fr, en, de, it</code>
          </div>
          <div class="ec-b-ai-stream">
            <div class="ec-b-ai-line ec-b-ai-line-in">
              <span class="ec-b-ai-token">✓ EAN 3401560123457</span>
              <span class="ec-b-ai-token">→ Rituel Nuit · 50 ml</span>
            </div>
            <div class="ec-b-ai-line ec-b-ai-line-in">
              <span class="ec-b-ai-label">SEO</span>
              <span>Un extrait boisé envoûtant, accord ambre &amp; santal, tenue 12 h.</span>
            </div>
            <div class="ec-b-ai-line ec-b-ai-line-in">
              <span class="ec-b-ai-label">TRADUIT</span>
              <span>EN · DE · IT</span>
              <span class="ec-b-ai-check">✓</span>
            </div>
            <div class="ec-b-ai-line">
              <span class="ec-b-ai-progress"><span style="width:78%"></span></span>
              <small>328 / 420 produits enrichis · 4 min restant</small>
            </div>
          </div>
        </div>
      </article>

      <!-- 06 — Maintenance / live status (moyenne) -->
      <article class="ec-bento-card ec-b-ops ec-b-span-6 reveal reveal-d-1">
        <div class="ec-bento-header">
          <div class="ec-bento-num">06</div>
          <div class="ec-bento-kind">Maintenance</div>
        </div>
        <h3 class="ec-bento-title">On reste votre équipe tech.</h3>
        <p class="ec-bento-desc">Forfait TMA mensuel : supervision, mises à jour de sécurité et capacité d'évolution. Disponibilité et délais d'intervention sont précisés au devis.</p>

        <div class="ec-b-ops-canvas" aria-hidden="true">
          <div class="ec-b-ops-status">
            <div class="ec-b-ops-badge ec-b-ops-live">
              <span class="ec-b-ops-pulse"></span>
              EXEMPLE DE SUPERVISION
            </div>
            <small>· données de démonstration</small>
          </div>
          <div class="ec-b-ops-grid">
            <div class="ec-b-ops-metric">
              <small>DISPONIBILITÉ</small>
              <strong>SUIVI<span> 30 j</span></strong>
              <div class="ec-b-ops-bars">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div class="ec-b-ops-metric">
              <small>PERFORMANCE</small>
              <strong>SEUIL<span> défini</span></strong>
              <div class="ec-b-ops-spark">
                <svg viewBox="0 0 60 18" preserveAspectRatio="none">
                  <path d="M0 14 L8 10 L16 12 L24 8 L32 11 L40 6 L48 9 L60 4" fill="none" stroke="currentColor" stroke-width="1.2"/>
                </svg>
              </div>
            </div>
            <div class="ec-b-ops-metric">
              <small>DÉPLOIEMENTS</small>
              <strong>CI/CD<span> tracée</span></strong>
              <div class="ec-b-ops-dots">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div class="ec-b-ops-metric">
              <small>SLA</small>
              <strong>SUR<span> devis</span></strong>
              <div class="ec-b-ops-sla">Selon le périmètre</div>
            </div>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="process" id="process">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Notre process</div>
        <h2>Six étapes,<br>un calendrier tenu par le périmètre.</h2>
      </div>
      <div class="right">
        Le devis fixe la date de départ, les jalons et la cadence de démonstration. Vous validez progressivement
        les parcours et livrables au lieu de découvrir l'ensemble uniquement en fin de projet.
      </div>
    </div>

    <div class="proc-grid reveal reveal-d-1">
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 01</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></div>
        <h3>Audit &amp; cadrage</h3>
        <p>Workshop avec décideur + équipe ops. Analyse de l'existant (perfs, SEO, stack). Catalogage des intégrations cibles.</p>
        <div class="proc-dur">À PLANIFIER</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 02</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div>
        <h3>Design &amp; Figma</h3>
        <p>Moodboard, charte graphique, design system. Prototype cliquable validé par vos équipes avant une seule ligne de code.</p>
        <div class="proc-dur">À PLANIFIER</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 03</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div>
        <h3>Sprint dev</h3>
        <p>Développement par itérations courtes, dépôt et environnements définis au lancement, démonstrations selon la cadence convenue.</p>
        <div class="proc-dur">SELON PÉRIMÈTRE</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 04</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4"/></svg></div>
        <h3>QA &amp; tests de charge</h3>
        <p>Tests unitaires et E2E, scénario de charge dimensionné, revue du parcours de paiement et budget de performance.</p>
        <div class="proc-dur">AU PLAN DE RECETTE</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 05</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M4 4h16v16H4zM4 12h16M12 4v16"/></svg></div>
        <h3>Migration 301</h3>
        <p>Inventaire des URL utiles, imports contrôlés, redirections, recette et plan de bascule avec procédure de retour.</p>
        <div class="proc-dur">SELON VOLUMES</div>
      </div>
      <div class="proc-step">
        <div class="proc-num">ÉTAPE 06</div>
        <div class="proc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent)"><path d="M5 12h14M13 5l7 7-7 7"/></svg></div>
        <h3>Go-live + TMA</h3>
        <p>Formation et documentation prévues au devis, bascule préparée et accompagnement post-lancement selon l'option retenue.</p>
        <div class="proc-dur">LIVRABLES CONTRACTUELS</div>
      </div>
    </div>
  </div>
</section>

<!-- STACK -->
<section class="ec-stack-section">
  <div class="wrap">
    <div class="ec-stack-head reveal">
      <div class="eyebrow">— Notre stack e-commerce</div>
      <h2>Il n'y a pas UN bon stack e-commerce.<br>Il y a le bon <em>pour vous</em>.</h2>
      <p>
        Shopify + Hydrogen, Medusa et Sylius répondent à des contraintes différentes. On ne fait pas semblant
        qu'une seule stack bat tout le monde en e-commerce : <b>on qualifie votre cas avant de proposer un moteur</b>.
        Trois pistes, avec leurs avantages et leurs contre-indications.
      </p>
    </div>

    <div class="ec-stack-tracks">

      <!-- Track A : DTC Shopify -->
      <article class="ec-stack-track reveal">
        <div class="ec-stack-track-head">
          <div class="ec-stack-track-tag">TRACK A</div>
          <div class="ec-stack-track-when">Pour les marques DTC · catalogue et processus plutôt standards</div>
        </div>
        <h3 class="ec-stack-track-title">Shopify Plus + storefront <em>sur mesure</em>.</h3>
        <p class="ec-stack-track-pitch">
          On s'appuie sur <b>un écosystème largement outillé</b> (checkout Shopify, Klaviyo, Gorgias,
          Judge.me). On ajoute un storefront <b>Hydrogen ou Next.js</b> quand le SEO, la vitesse
          ou l'identité de marque le justifient. Vous gardez Shopify. On apporte le sur-mesure là où ça compte.
        </p>
        <div class="ec-stack-track-chips">
          <span class="ec-stack-chip ec-stack-chip-main">Shopify Plus</span>
          <span class="ec-stack-chip">Hydrogen</span>
          <span class="ec-stack-chip">Next.js</span>
          <span class="ec-stack-chip">Remix / React Router 7</span>
          <span class="ec-stack-chip">Klaviyo</span>
          <span class="ec-stack-chip">Gorgias</span>
          <span class="ec-stack-chip">Stripe / Shopify Payments</span>
        </div>
        <div class="ec-stack-track-meta">
          <div><span class="k">Sweet spot</span><span class="v">Fashion · beauty · food · DTC</span></div>
          <div><span class="k">Planning</span><span class="v">Établi après cadrage</span></div>
          <div><span class="k">Quand l'envisager</span><span class="v">Après un TCO documenté sur 36 mois</span></div>
          <div><span class="k">Contre-indication</span><span class="v">B2B lourd, checkout custom extrême</span></div>
        </div>
      </article>

      <!-- Track B : Headless open-source -->
      <article class="ec-stack-track ec-stack-track-featured reveal reveal-d-1">
        <div class="ec-stack-track-badge">PISTE OPEN SOURCE</div>
        <div class="ec-stack-track-head">
          <div class="ec-stack-track-tag">TRACK B</div>
          <div class="ec-stack-track-when">Pour modèles spécifiques · B2B · marketplace · catalogue complexe</div>
        </div>
        <h3 class="ec-stack-track-title"><em>Medusa.js v2</em> ou Sylius + Next.js.</h3>
        <p class="ec-stack-track-pitch">
          Moteurs <b>open-source API-first</b> pensés pour le custom. <b>Medusa</b> (Node/TypeScript)
          pour les équipes JS et certains projets de marketplace.
          <b>Sylius</b> (Symfony) pour le B2B complexe avec workflows d'approbation et pricing multi-niveau.
          Le cœur peut rester open source, avec des dépendances et limites d'exploitation à documenter.
        </p>
        <div class="ec-stack-track-chips">
          <span class="ec-stack-chip ec-stack-chip-main">Medusa.js v2</span>
          <span class="ec-stack-chip ec-stack-chip-main">Sylius</span>
          <span class="ec-stack-chip">Next.js</span>
          <span class="ec-stack-chip">TypeScript / NestJS</span>
          <span class="ec-stack-chip">GraphQL</span>
          <span class="ec-stack-chip">PostgreSQL 17</span>
          <span class="ec-stack-chip">Meilisearch</span>
          <span class="ec-stack-chip">Stripe · Alma · Mollie</span>
        </div>
        <div class="ec-stack-track-meta">
          <div><span class="k">Sweet spot</span><span class="v">B2B · marketplace · subscriptions</span></div>
          <div><span class="k">Planning</span><span class="v">Établi après cadrage</span></div>
          <div><span class="k">Critère clé</span><span class="v">Complexité métier et maîtrise du moteur</span></div>
          <div><span class="k">Contre-indication</span><span class="v">Besoin standard avec lancement très court</span></div>
        </div>
      </article>

      <!-- Track C : Plateforme métier sur mesure -->
      <article class="ec-stack-track reveal reveal-d-2">
        <div class="ec-stack-track-head">
          <div class="ec-stack-track-tag">TRACK C</div>
          <div class="ec-stack-track-when">Pour plateformes métier avec composante commerce</div>
        </div>
        <h3 class="ec-stack-track-title">Next.js + TypeScript + <em>Stripe Billing</em>.</h3>
        <p class="ec-stack-track-pitch">
          Le track du <b>sur-mesure intégral</b> : SaaS avec paiement complexe, marketplace verticale,
          plateforme B2B propriétaire, back-office métier lourd.
          Stripe Billing pour les abonnements et back-office React taillé pour vos opérations, avec un délai chiffré après cadrage.
          Pas pour remplacer Shopify sur une boutique classique — pour <b>les cas où Shopify et Medusa ne sont pas les bons outils</b>.
        </p>
        <div class="ec-stack-track-chips">
          <span class="ec-stack-chip ec-stack-chip-main">Next.js 16</span>
          <span class="ec-stack-chip ec-stack-chip-main">TypeScript</span>
          <span class="ec-stack-chip">Stripe Billing</span>
          <span class="ec-stack-chip">React 19 · Tailwind</span>
          <span class="ec-stack-chip">React Native</span>
          <span class="ec-stack-chip">PostgreSQL 17</span>
          <span class="ec-stack-chip">Redis · Sentry</span>
        </div>
        <div class="ec-stack-track-meta">
          <div><span class="k">Sweet spot</span><span class="v">SaaS avec commerce · marketplaces verticales</span></div>
          <div><span class="k">Planning</span><span class="v">Établi après cadrage</span></div>
          <div><span class="k">Critère clé</span><span class="v">Règles métier qui justifient le sur-mesure</span></div>
          <div><span class="k">Contre-indication</span><span class="v">Pure DTC sans logique métier</span></div>
        </div>
      </article>

    </div>

    <!-- Ce qu'on apporte en plus -->
    <div class="ec-stack-extras reveal">
      <div class="ec-stack-extras-head">
        <div class="eyebrow">— Ce qu'on apporte en plus, quel que soit le track</div>
        <h3>Le vrai différenciateur n'est pas le moteur.</h3>
      </div>
      <div class="ec-stack-extras-grid">
        <div class="ec-stack-extra">
          <div class="ec-stack-extra-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
          </div>
          <h3>App mobile React Native</h3>
          <p>Même API, deux stores et mises à jour OTA compatibles avec leurs règles, si l'app figure au devis.</p>
        </div>
        <div class="ec-stack-extra">
          <div class="ec-stack-extra-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <h3>Back-office métier sur mesure (React)</h3>
          <p>Taillé pour votre équipe ops, pas un admin générique. Stocks, SAV, retours, reporting.</p>
        </div>
        <div class="ec-stack-extra">
          <div class="ec-stack-extra-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
          </div>
          <h3>IA Claude intégrée</h3>
          <p>Fiches produit multi-langues, recherche sémantique pgvector, agent SAV niveau 1, routing logistique.</p>
        </div>
        <div class="ec-stack-extra">
          <div class="ec-stack-extra-ic">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Infra EU + observabilité</h3>
          <p>Fournisseur, localisation, supervision, alertes et astreinte éventuelle sont choisis selon l'architecture.</p>
        </div>
      </div>
    </div>

    <!-- Ce qu'on refuse de faire -->
    <div class="ec-stack-honest reveal">
      <div class="ec-stack-honest-ic">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      </div>
      <div class="ec-stack-honest-body">
        <h3>Ce qu'on ne fait pas</h3>
        <p>
          Réinventer un checkout quand Shopify le fait mieux. Vendre du sur-mesure en moteur e-commerce
          quand Medusa ou Shopify est le bon outil. Livrer une boutique "templatée" déguisée en sur-mesure.
          Si votre cas est mieux servi par un intégrateur Shopify standard, on vous oriente — franchement.
        </p>
      </div>
    </div>

  </div>
</section>

<!-- PRICING -->
<section class="pricing" id="tarifs">
  <div class="wrap">
    <div class="section-head reveal" style="margin-bottom:0">
      <div class="left">
        <div class="eyebrow">— Forfaits</div>
        <h2>Trois paliers, un prix fixe.<br>Aucune commission Hagnéré sur vos ventes.</h2>
      </div>
      <div class="right">
        Le développement est chiffré au forfait. Les coûts tiers, l'hébergement, la maintenance et les éventuels
        frais de paiement restent identifiés séparément pour rendre le coût total lisible.
      </div>
    </div>

    <div class="price-grid">
      <div class="plan reveal">
        <div class="plan-tag">LAUNCH</div>
        <h3>Nouvelle boutique</h3>
        <div class="plan-sub">Pour lancer une boutique e-commerce propre et scalable, sans les contraintes d'un Shopify.</div>
        <div class="plan-price">
          <span class="amount">15–30 k€</span>
          <span class="per">budget projet indicatif HT</span>
        </div>
        <div class="plan-hr"></div>
        <div class="plan-sub"><b>Exemples de périmètre à confirmer au devis :</b></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Charte graphique + Figma</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Storefront Next.js jusqu'à ~500 produits</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Stripe + Alma + 2 transporteurs FR</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Back-office et flux ERP selon le besoin</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Factur-X + Plateforme Agréée selon périmètre</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Planning confirmé après cadrage</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Demander un devis</a></div>
      </div>

      <div class="plan featured reveal reveal-d-1">
        <div class="plan-badge">POUR UNE REFONTE ÉTENDUE</div>
        <div class="plan-tag">SCALE</div>
        <h3>Refonte + App mobile</h3>
        <div class="plan-sub">Pour refondre une boutique existante et, si l'usage le justifie, sortir l'app mobile dans le même programme.</div>
        <div class="plan-price">
          <span class="amount">30–70 k€</span>
          <span class="per">budget projet indicatif HT</span>
        </div>
        <div class="plan-hr"></div>
        <div class="plan-sub"><b>Exemples de périmètre à confirmer au devis :</b></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Socle Launch adapté au projet</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg><b>App iOS + Android selon le périmètre</b></li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Volumes de migration inventoriés au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>1–2 marketplaces (Amazon, CDiscount…)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Server-side tracking GA4 + Meta CAPI</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Agents IA (reco, descriptions, SAV)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Planning confirmé après audit de migration</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer mon projet</a></div>
      </div>

      <div class="plan reveal reveal-d-2">
        <div class="plan-tag">ENTERPRISE</div>
        <h3>B2B + B2C + multi-pays</h3>
        <div class="plan-sub">Pour les marques qui vendent sur plusieurs pays, avec une composante B2B (pros, revendeurs, grossistes).</div>
        <div class="plan-price">
          <span class="amount">70–120 k€</span>
          <span class="per">budget projet indicatif HT</span>
        </div>
        <div class="plan-hr"></div>
        <div class="plan-sub"><b>Exemples de périmètre à confirmer au devis :</b></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Socle Scale adapté au projet</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Multi-pays, multi-devise, TVA OSS intracom</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>B2B complet (tarifs pro, paiement 30 j, devis)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Multi-entrepôt + ship-from-store</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Programme fidélité + abonnements</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Accompagnement et durée précisés au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parlons-en</a></div>
      </div>
    </div>

    <p style="text-align:center;margin-top:40px;color:var(--mute);font-size:14px">
      Les montants sont à confirmer sur devis. Le devis précise la base fiscale, les livrables, les coûts tiers,
      la garantie corrective, la formation, l'hébergement et les éventuelles prestations récurrentes.
    </p>
  </div>
</section>

<!-- FAQ -->
<!-- Source unique injectée depuis faq-content.ts par composed-body.ts. -->
`;
