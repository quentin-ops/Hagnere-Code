export const architectureHtml = `
<!-- ARCHITECTURE SCHEMATIC OUTIL INTERNE -->
<section class="oi-arch">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Sous le capot</div>
        <h2 style="margin-top:14px">À quoi ressemble<br>un outil interne qu'on livre.</h2>
      </div>
      <div class="right">
        Une architecture de référence à adapter : utilisateurs via SSO, cœur métier,
        traitements automatisés et <b>connecteurs à votre SI existant</b>. Ce schéma n'est pas une
        architecture client vérifiable. Les composants,
        fournisseurs, flux et exigences de réversibilité sont choisis et documentés au devis.
      </div>
    </div>

    <div class="oi-arch-diagram reveal">
      <svg viewBox="0 0 1200 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture type d'un outil interne Hagnéré Code">
        <defs>
          <pattern id="oiarchgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="1200" height="640" fill="url(#oiarchgrid)"/>

        <!-- USERS LAYER -->
        <text x="60" y="60" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.08em">— VOS UTILISATEURS INTERNES</text>

        <g transform="translate(60 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">WEB (SSO AD)</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Compta, commercial, DAF</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Dashboards, saisies, exports</text>
        </g>
        <g transform="translate(340 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">MOBILE TERRAIN</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Chantier, atelier, livreurs</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Offline-first, QR, photo</text>
        </g>
        <g transform="translate(620 80)">
          <rect width="260" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">BACK-OFFICE ADMIN</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">DSI &amp; super-users</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Permissions, audit, support</text>
        </g>
        <g transform="translate(900 80)">
          <rect width="240" height="88" rx="10" fill="#171717" stroke="rgba(255,255,255,0.12)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">EMAIL / SLACK / TEAMS</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Notifications + workflow</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Approbations, relances</text>
        </g>

        <g stroke="rgba(109,40,217,0.5)" stroke-width="1.5" fill="none">
          <path d="M 190 168 L 420 240"/>
          <path d="M 470 168 L 520 240"/>
          <path d="M 750 168 L 640 240"/>
          <path d="M 1020 168 L 740 240"/>
        </g>

        <!-- SSO LAYER (top-right box) -->
        <g transform="translate(900 0)">
          <rect width="240" height="60" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" stroke-dasharray="4 3"/>
          <text x="20" y="24" font-family="Geist Mono" font-size="12" fill="#a3e47f" letter-spacing="0.06em">SSO ENTREPRISE</text>
          <text x="20" y="46" font-family="Geist Mono" font-size="12" fill="#fff">Azure AD · Okta · SAML · SCIM</text>
        </g>
        <path d="M 1020 60 L 1020 80" stroke="rgba(163,228,127,0.5)" stroke-dasharray="3 3"/>

        <!-- API CORE -->
        <text x="60" y="220" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.08em">— CŒUR MÉTIER</text>
        <g transform="translate(340 240)">
          <rect width="520" height="96" rx="12" fill="#6D28D9" stroke="rgba(255,255,255,0.18)"/>
          <text x="24" y="34" font-family="Geist Mono" font-size="12" fill="rgba(255,255,255,0.8)" letter-spacing="0.06em">NEXT.JS 16 · TYPESCRIPT</text>
          <text x="24" y="60" font-family="Geist" font-size="20" font-weight="600" fill="#fff">Hagnéré Core</text>
          <text x="24" y="82" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.8)">RBAC · Audit trail · Events · Workflows · Jobs · API REST</text>
        </g>

        <g transform="translate(60 240)">
          <rect width="240" height="96" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">AGENTS IA</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Claude · OCR</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Extraction, classif., relances</text>
        </g>
        <g transform="translate(900 240)">
          <rect width="240" height="96" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">JOBS &amp; CRON</text>
          <text x="20" y="52" font-family="Geist" font-size="15" font-weight="600" fill="#fff">Files d'attente Redis</text>
          <text x="20" y="72" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Relances auto, imports, exports</text>
        </g>

        <g stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none" stroke-dasharray="4 4">
          <path d="M 600 336 L 600 408"/>
          <path d="M 180 336 L 300 408"/>
          <path d="M 1020 336 L 900 408"/>
        </g>

        <!-- DATA -->
        <text x="60" y="388" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.08em">— VOS DONNÉES (LOCALISATION AU DEVIS)</text>
        <g transform="translate(60 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">POSTGRESQL</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Base métier principale</text>
          <text x="20" y="68" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Fournisseur et région au devis</text>
        </g>
        <g transform="translate(330 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">REDIS</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Cache + queues + sessions</text>
          <text x="20" y="68" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Perfs + jobs asynchrones</text>
        </g>
        <g transform="translate(600 408)">
          <rect width="250" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">AUDIT LOG</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Traçabilité horodatée</text>
          <text x="20" y="68" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Rétention cadrée · exports CSV</text>
        </g>
        <g transform="translate(870 408)">
          <rect width="270" height="80" rx="10" fill="#171717" stroke="rgba(255,255,255,0.1)"/>
          <text x="20" y="28" font-family="Geist Mono" font-size="12" fill="#6D28D9" letter-spacing="0.06em">OBJECT STORE CHIFFRÉ</text>
          <text x="20" y="50" font-family="Geist" font-size="14" font-weight="600" fill="#fff">Documents + backups</text>
          <text x="20" y="68" font-family="Geist" font-size="12" fill="rgba(255,255,255,0.55)">Stockage et chiffrement au devis</text>
        </g>

        <!-- LEGACY INTEGRATIONS -->
        <text x="60" y="540" font-family="Geist Mono" font-size="12" fill="#a3e47f" letter-spacing="0.08em">— VOTRE SI EXISTANT (LECTURE / ÉCRITURE)</text>
        <g font-family="Geist Mono" font-size="12" fill="rgba(255,255,255,0.75)">
          <rect x="60" y="560" width="100" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="110" y="584" text-anchor="middle">Sage 100</text>

          <rect x="170" y="560" width="100" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="220" y="584" text-anchor="middle">Cegid Loop</text>

          <rect x="280" y="560" width="100" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="330" y="584" text-anchor="middle">Pennylane</text>

          <rect x="390" y="560" width="100" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="440" y="584" text-anchor="middle">Salesforce</text>

          <rect x="500" y="560" width="100" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="550" y="584" text-anchor="middle">HubSpot</text>

          <rect x="610" y="560" width="110" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="665" y="584" text-anchor="middle">SharePoint</text>

          <rect x="730" y="560" width="110" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="785" y="584" text-anchor="middle">Chorus Pro</text>

          <rect x="850" y="560" width="100" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="900" y="584" text-anchor="middle">EBP</text>

          <rect x="960" y="560" width="100" height="40" rx="8" fill="rgba(163,228,127,0.08)" stroke="rgba(163,228,127,0.25)"/>
          <text x="1010" y="584" text-anchor="middle">AS400</text>

          <rect x="1070" y="560" width="70" height="40" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
          <text x="1105" y="584" text-anchor="middle">+15</text>
        </g>
      </svg>
    </div>

    <!-- Equivalent mobile du schema ci-dessus : memes couches, memes blocs, memes
         libelles, meme ordre de lecture. Le SVG porte un viewBox de 1200x640 : sur un
         telephone il tombait a ~316 px de large, soit une echelle de 0,26 qui reduisait
         des libelles declares a 9-11 px a 2,4-2,9 px effectifs. On ne redimensionne pas
         le schema, on le rejoue en couches empilees. Les deux vivent dans le DOM mais
         une seule est affichee a la fois (media query a 768 px dans sections.css), donc
         aucun doublon pour les lecteurs d'ecran : display:none sort de l'arbre
         d'accessibilite, inutile d'ajouter un aria-hidden.
         Les 49 noeuds de texte sont les memes un pour un (verifie au navigateur).
         L'ordre suit la lecture VISUELLE du schema, pas l'ordre de declaration des
         balises : le bloc SSO est dessine tout en haut du cadre (y 0-60), il ouvre donc
         la couche utilisateurs ; et AGENTS IA est dessine a gauche du coeur metier
         (x 60 contre x 340), il le precede donc. -->
    <div class="oi-arch-stack reveal">
      <div class="oi-arch-layer">
        <div class="oi-arch-layer-k">— VOS UTILISATEURS INTERNES</div>
        <div class="oi-arch-cards">
          <div class="oi-arch-card oi-arch-card-sso">
            <div class="oi-arch-card-k">SSO ENTREPRISE</div>
            <div class="oi-arch-card-t oi-arch-card-t-mono">Azure AD · Okta · SAML · SCIM</div>
          </div>
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">WEB (SSO AD)</div>
            <div class="oi-arch-card-t">Compta, commercial, DAF</div>
            <div class="oi-arch-card-d">Dashboards, saisies, exports</div>
          </div>
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">MOBILE TERRAIN</div>
            <div class="oi-arch-card-t">Chantier, atelier, livreurs</div>
            <div class="oi-arch-card-d">Offline-first, QR, photo</div>
          </div>
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">BACK-OFFICE ADMIN</div>
            <div class="oi-arch-card-t">DSI &amp; super-users</div>
            <div class="oi-arch-card-d">Permissions, audit, support</div>
          </div>
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">EMAIL / SLACK / TEAMS</div>
            <div class="oi-arch-card-t">Notifications + workflow</div>
            <div class="oi-arch-card-d">Approbations, relances</div>
          </div>
        </div>
      </div>

      <div class="oi-arch-flow"></div>

      <div class="oi-arch-layer">
        <div class="oi-arch-layer-k">— CŒUR MÉTIER</div>
        <div class="oi-arch-cards">
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">AGENTS IA</div>
            <div class="oi-arch-card-t">Claude · OCR</div>
            <div class="oi-arch-card-d">Extraction, classif., relances</div>
          </div>
          <div class="oi-arch-card oi-arch-card-core">
            <div class="oi-arch-card-k">NEXT.JS 16 · TYPESCRIPT</div>
            <div class="oi-arch-card-t">Hagnéré Core</div>
            <div class="oi-arch-card-d">RBAC · Audit trail · Events · Workflows · Jobs · API REST</div>
          </div>
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">JOBS &amp; CRON</div>
            <div class="oi-arch-card-t">Files d'attente Redis</div>
            <div class="oi-arch-card-d">Relances auto, imports, exports</div>
          </div>
        </div>
      </div>

      <div class="oi-arch-flow"></div>

      <div class="oi-arch-layer">
        <div class="oi-arch-layer-k">— VOS DONNÉES (LOCALISATION AU DEVIS)</div>
        <div class="oi-arch-cards">
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">POSTGRESQL</div>
            <div class="oi-arch-card-t">Base métier principale</div>
            <div class="oi-arch-card-d">Fournisseur et région au devis</div>
          </div>
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">REDIS</div>
            <div class="oi-arch-card-t">Cache + queues + sessions</div>
            <div class="oi-arch-card-d">Perfs + jobs asynchrones</div>
          </div>
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">AUDIT LOG</div>
            <div class="oi-arch-card-t">Traçabilité horodatée</div>
            <div class="oi-arch-card-d">Rétention cadrée · exports CSV</div>
          </div>
          <div class="oi-arch-card">
            <div class="oi-arch-card-k">OBJECT STORE CHIFFRÉ</div>
            <div class="oi-arch-card-t">Documents + backups</div>
            <div class="oi-arch-card-d">Stockage et chiffrement au devis</div>
          </div>
        </div>
      </div>

      <div class="oi-arch-layer">
        <div class="oi-arch-layer-k oi-arch-layer-k-si">— VOTRE SI EXISTANT (LECTURE / ÉCRITURE)</div>
        <div class="oi-arch-chips">
          <span>Sage 100</span>
          <span>Cegid Loop</span>
          <span>Pennylane</span>
          <span>Salesforce</span>
          <span>HubSpot</span>
          <span>SharePoint</span>
          <span>Chorus Pro</span>
          <span>EBP</span>
          <span>AS400</span>
          <span class="oi-arch-chip-more">+15</span>
        </div>
      </div>
    </div>

    <div class="oi-arch-caption reveal">
      <div class="oi-arch-caption-k">
        <span><span class="oi-arch-dot" style="background:#6D28D9"></span> Cœur métier Hagnéré</span>
        <span><span class="oi-arch-dot" style="background:#404040"></span> Composants standards</span>
        <span><span class="oi-arch-dot" style="background:#a3e47f"></span> Votre SI existant</span>
      </div>
      <p>
        Le schéma final précise l'hébergement, les flux, les sous-traitants, les accès et les conditions
        de reprise. L'option on-premise et le niveau de réversibilité dépendent du périmètre convenu.
      </p>
    </div>
  </div>
</section>
`;
