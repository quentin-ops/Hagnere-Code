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
    <span style="color:var(--ink-3)">Publicité en ligne</span>
  </div>
</div>

<!-- HERO -->
<section class="shero">
  <div class="shero-grid"></div>
  <div class="shero-radial"></div>
  <div class="wrap shero-inner">
    <div>
      <div class="shero-eyebrow"><span class="pill"><span class="dot"></span> Service · Publicité en ligne · SEA + Paid Social</span></div>
      <h1>Google Ads &amp; Meta Ads :<br>relier le budget media <span class="accent">aux ventes réelles</span><br>dans votre CRM.</h1>
      <div class="shero-tagline">
        <span>📊 Tracking server-side inclus</span>
        <span class="sep"></span>
        <span>🎯 KPIs business, pas ROAS vanity</span>
        <span class="sep"></span>
        <span>💶 Forfait fixe, pas de % media</span>
      </div>
      <p class="shero-sub">
        Google Ads, Meta, LinkedIn, TikTok — on pilote votre media buying comme un
        <b>canal d'acquisition mesurable</b>, avec GTM server-side, Meta CAPI et Enhanced
        Conversions configurés par nos soins. Votre budget sur votre compte, vos campagnes
        chez vous, <b>rémunération en forfait fixe</b> — zéro biais à pousser la dépense.
      </p>
      <div class="shero-cta">
        <a href="#contact" class="btn btn-accent btn-lg">
          Cadrer ma stratégie Ads <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" class="btn btn-ghost btn-lg">Échange de cadrage · 30 min</a>
      </div>
      <div class="shero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Budget media sur votre compte</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> CAPI + GTM SS inclus</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Durée et préavis au devis</span>
      </div>
    </div>

    <!-- VISUAL: stacked product mock -->
    <div class="shero-visual">
      <div class="mock-window mw-main">
        <div class="win-chrome">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url">lookerstudio · dashboard Ads multichannel</div>
        </div>
        <svg width="100%" viewBox="0 0 540 360" style="display:block">
          <rect width="540" height="360" fill="#fff"/>
          <!-- Top bar -->
          <rect x="0" y="0" width="540" height="44" fill="#fff"/>
          <rect x="0" y="43" width="540" height="1" fill="#f0f0f0"/>
          <rect x="20" y="14" width="28" height="16" rx="4" fill="#4285F4"/>
          <text x="34" y="25" text-anchor="middle" font-family="Geist" font-weight="800" font-size="10" fill="#fff">L</text>
          <text x="56" y="27" font-family="Geist" font-weight="700" font-size="13" fill="#0A0A0A">Ads · multichannel</text>
          <rect x="430" y="12" width="92" height="20" rx="4" fill="#EDE9FE"/>
          <text x="476" y="26" text-anchor="middle" font-family="Geist Mono" font-size="9" font-weight="700" fill="#6D28D9">EXEMPLE FICTIF</text>

          <!-- KPIs row -->
          <g transform="translate(24 64)">
            <rect x="0" y="0" width="120" height="68" rx="10" fill="#F5F5F5"/>
            <text x="14" y="22" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">SPEND 30J</text>
            <text x="14" y="52" font-family="Geist" font-weight="700" font-size="20" fill="#0A0A0A">38,4 k€</text>

            <rect x="132" y="0" width="120" height="68" rx="10" fill="#EDE9FE"/>
            <text x="146" y="22" font-family="Geist Mono" font-size="8" fill="#4C1D95" letter-spacing="1">ROAS BLENDED</text>
            <text x="146" y="52" font-family="Geist" font-weight="700" font-size="20" fill="#0A0A0A">4,2×</text>
            <text x="220" y="52" font-family="Geist Mono" font-size="9" font-weight="700" fill="#22C55E">+38%</text>

            <rect x="264" y="0" width="120" height="68" rx="10" fill="#F5F5F5"/>
            <text x="278" y="22" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">CA ATTRIBUÉ</text>
            <text x="278" y="52" font-family="Geist" font-weight="700" font-size="20" fill="#0A0A0A">161 k€</text>

            <rect x="396" y="0" width="96" height="68" rx="10" fill="#0A0A0A"/>
            <text x="410" y="22" font-family="Geist Mono" font-size="8" fill="#737373" letter-spacing="1">CPA</text>
            <text x="410" y="52" font-family="Geist" font-weight="700" font-size="20" fill="#fff">47 €</text>
            <text x="450" y="52" font-family="Geist Mono" font-size="9" font-weight="700" fill="#22C55E">-28%</text>
          </g>

          <!-- Channels breakdown (bars) -->
          <rect x="24" y="150" width="492" height="188" rx="10" fill="#fff" stroke="#E5E5E5"/>
          <text x="40" y="172" font-family="Geist Mono" font-size="9" fill="#737373" letter-spacing="1">CA PAR CANAL · ATTRIBUTION MULTI-TOUCH</text>

          <!-- Channel row 1 : Google Search -->
          <g transform="translate(40 190)">
            <text x="0" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">Google Search</text>
            <rect x="116" y="0" width="320" height="14" rx="3" fill="#F5F5F5"/>
            <rect x="116" y="0" width="210" height="14" rx="3" fill="#4285F4"/>
            <text x="444" y="10" font-family="Geist Mono" font-size="9" font-weight="700" fill="#0A0A0A" text-anchor="end">62,4k€</text>
          </g>
          <g transform="translate(40 216)">
            <text x="0" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">Google PMax</text>
            <rect x="116" y="0" width="320" height="14" rx="3" fill="#F5F5F5"/>
            <rect x="116" y="0" width="155" height="14" rx="3" fill="#34A853"/>
            <text x="444" y="10" font-family="Geist Mono" font-size="9" font-weight="700" fill="#0A0A0A" text-anchor="end">41,2k€</text>
          </g>
          <g transform="translate(40 242)">
            <text x="0" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">Meta Ads</text>
            <rect x="116" y="0" width="320" height="14" rx="3" fill="#F5F5F5"/>
            <rect x="116" y="0" width="128" height="14" rx="3" fill="#1877F2"/>
            <text x="444" y="10" font-family="Geist Mono" font-size="9" font-weight="700" fill="#0A0A0A" text-anchor="end">34,8k€</text>
          </g>
          <g transform="translate(40 268)">
            <text x="0" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">LinkedIn Ads</text>
            <rect x="116" y="0" width="320" height="14" rx="3" fill="#F5F5F5"/>
            <rect x="116" y="0" width="62" height="14" rx="3" fill="#0A66C2"/>
            <text x="444" y="10" font-family="Geist Mono" font-size="9" font-weight="700" fill="#0A0A0A" text-anchor="end">16,9k€</text>
          </g>
          <g transform="translate(40 294)">
            <text x="0" y="10" font-family="Geist" font-weight="500" font-size="11" fill="#0A0A0A">TikTok Ads</text>
            <rect x="116" y="0" width="320" height="14" rx="3" fill="#F5F5F5"/>
            <rect x="116" y="0" width="22" height="14" rx="3" fill="#0A0A0A"/>
            <text x="444" y="10" font-family="Geist Mono" font-size="9" font-weight="700" fill="#0A0A0A" text-anchor="end">5,7k€</text>
          </g>

          <!-- Footer line -->
          <line x1="40" y1="318" x2="500" y2="318" stroke="#F5F5F5"/>
          <text x="40" y="332" font-family="Geist Mono" font-size="8" fill="#a3a3a3">5 canaux actifs</text>
          <text x="500" y="332" text-anchor="end" font-family="Geist Mono" font-size="8" fill="#6D28D9" font-weight="600">Looker · mis à jour il y a 4 min</text>
        </svg>        </svg>
      </div>

      <div class="mock-window mw-side">
        <div class="win-chrome" style="background:#0d0d0d;border-color:rgba(255,255,255,0.08)">
          <div class="win-dots"><span></span><span></span><span></span></div>
          <div class="win-url" style="color:rgba(255,255,255,0.5)">Meta Ads Manager · campagnes actives</div>
        </div>
        <div style="padding:18px 20px 16px;background:#0A0A0A;color:#E5E5E5;font-family:'Geist',ui-sans-serif,system-ui,sans-serif;font-size:12px;line-height:1.4">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px">
            <div>
              <div style="font-family:'Geist Mono';font-size:9px;color:#737373;letter-spacing:0.12em">CAMPAGNES ACTIVES</div>
              <div style="font-size:20px;font-weight:700;color:#fff;margin-top:4px">12 · 3 canaux</div>
            </div>
            <div style="font-family:'Geist Mono';font-size:10px;color:#22C55E;font-weight:700">● OPTIMISÉES</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
            <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:11px">
              <div>
                <span style="color:#fff">Prospection · Advantage+</span>
                <div style="font-family:'Geist Mono';font-size:10px;color:#737373;margin-top:2px">Meta · budget 8k€/sem</div>
              </div>
              <span style="font-family:'Geist Mono';color:#22C55E;font-weight:700;font-size:13px">3,8×</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:11px">
              <div>
                <span style="color:#fff">Retargeting · DPA</span>
                <div style="font-family:'Geist Mono';font-size:10px;color:#737373;margin-top:2px">Meta · budget 2k€/sem</div>
              </div>
              <span style="font-family:'Geist Mono';color:#22C55E;font-weight:700;font-size:13px">9,2×</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:11px">
              <div>
                <span style="color:#fff">Search brand · Google</span>
                <div style="font-family:'Geist Mono';font-size:10px;color:#737373;margin-top:2px">Google · budget 1,5k€/sem</div>
              </div>
              <span style="font-family:'Geist Mono';color:#22C55E;font-weight:700;font-size:13px">12,4×</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:11px">
              <div>
                <span style="color:#fff">Lead Gen ABM · LinkedIn</span>
                <div style="font-family:'Geist Mono';font-size:10px;color:#737373;margin-top:2px">LinkedIn · budget 3k€/sem</div>
              </div>
              <span style="font-family:'Geist Mono';color:#F59E0B;font-weight:700;font-size:13px">CPL 112€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT WE BUILD -->

<!-- CTA -->
<section class="scta">
  <div class="stats-bg" aria-hidden="true"></div>
  <div class="wrap">
    <div class="eyebrow on-dark">— Prochaine étape</div>
    <h2 style="margin-top:18px">Un audit pour savoir<br>où on peut vous emmener.</h2>
    <p>Un échange avec un consultant senior pour analyser votre situation et vous donner un avis franc. Le périmètre, le délai et le chiffrage éventuel sont confirmés après cadrage. <b>Sans engagement.</b></p>
    <div class="scta-cta">
      <a href="#contact" class="btn btn-accent btn-lg">
        📊 &nbsp;Demander un échange d'audit
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a href="mailto:quentin@hagnere-patrimoine.fr" class="btn btn-ghost btn-lg" style="background:rgba(255,255,255,0.05);color:#fff;border-color:rgba(255,255,255,0.15)">
        Envoyer un email →
      </a>
    </div>
    <div class="scta-meta">AUDIT 30 MIN OFFERT · PÉRIMÈTRE ET DÉLAI CONFIRMÉS APRÈS CADRAGE</div>
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
          <h3>SERVICES</h3>
          <a href="/services/saas-applications-metier">Sites vitrines &amp; landing pages</a>
          <a href="/services/outils-internes-sur-mesure">Outils internes</a>
          <a href="/services/sites-vitrines">Sites vitrines</a>
          <a href="/services/referencement-google">SEO</a>
          <a href="/services/publicite-en-ligne">Publicité</a>
        </div>
        <div class="foot-col">
          <h3>STUDIO</h3>
          <a href="/methode">Méthode</a>
          <a href="/realisations">Réalisations</a>
          <a href="/equipe">Équipe</a>
          <a href="/tarifs">Tarifs</a>
        </div>
        <div class="foot-col">
          <h3>CONTACT</h3>
          <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>
          <a href="https://www.linkedin.com/in/quentin-hagnere" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div class="foot-col">
          <h3>LÉGAL</h3>
          <a href="/legal/cgv">CGV</a>
          <a href="/legal/mentions">Mentions légales</a>
          <a href="/legal/confidentialite">Confidentialité</a>
        </div>
      </div>
    </div>
    <div class="foot-bot">
      <div>© 2026 HAGNERE CODE · SASU au capital de 10 € · RCS Chambéry 993 672 856 · TVA FR30 993 672 856 · NAF 62.01Z · 82 impasse de Bellevue, 73000 Bassens</div>
      <div>BUILT WITH LARAVEL + CLAUDE CODE</div>
    </div>
  </div>
</footer>

`;
