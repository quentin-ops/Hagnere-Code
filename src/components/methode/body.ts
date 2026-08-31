import { navHtml } from "@/components/design-shared/nav-html";
import {
  STUDIO_LOCATION,
  TEAM_OTHER_DEVELOPERS_COUNT,
  TEAM_TOTAL_COUNT,
} from "@/lib/team";

export const bodyHtml = `
${navHtml}
<!-- HERO MANIFESTE — full-bleed sombre, totalement différent des autres pages -->
<section class="mhero">
  <div class="mhero-grid"></div>
  <div class="mhero-radial"></div>
  <div class="mhero-noise"></div>

  <div class="wrap mhero-inner">
    <div class="mhero-top">
      <div class="mhero-crumb">
        <a href="/">Accueil</a>
        <span class="sep">/</span>
        <span>Méthode</span>
      </div>
      <div class="mhero-stamp">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4M21 12c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4 9 4z"/></svg>
        <span>MÉTHODE PROPRIÉTAIRE · SPRINT FIXE</span>
      </div>
    </div>

    <div class="mhero-tag">
      <span class="mhero-tag-pill">SPRINT FIXE</span>
      <span class="mhero-tag-text">La méthode propriétaire de Hagnéré Code</span>
    </div>

    <h1 class="mhero-title">
      <span class="line mhero-kicker">Développement web au forfait fixe :</span>
      <span class="line">Le périmètre, le prix</span>
      <span class="line"><em>et</em> les jalons sont écrits.</span>
      <span class="line">Les validations aussi.</span>
      <span class="line accent">Le devis signé reste<br>la seule promesse.</span>
    </h1>

    <div class="mhero-bottom">
      <div class="mhero-creds">
        <div class="mhero-cred">
          <div class="mhero-cred-n">PRIX</div>
          <div class="mhero-cred-l">Périmètre et avenants<br>cadrés par écrit.</div>
        </div>
        <div class="mhero-cred">
          <div class="mhero-cred-n">RECETTE</div>
          <div class="mhero-cred-l">Critères et corrections<br>définis au devis.</div>
        </div>
      </div>

      <div class="mhero-cta">
        <a href="#piliers" class="btn btn-accent btn-lg mhero-btn">
          Lire la méthode
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
        <a href="/rendez-vous" class="mhero-btn-ghost">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2 16 16 0 01-16-16z"/></svg>
          Réserver un cadrage
        </a>
      </div>
    </div>

    <div class="mhero-signature">
      <div class="mhero-sig-line">
        <span>MÉTHODE PORTÉE PAR ·</span>
        <span>QUENTIN HAGNÉRÉ · NICOLAS WALLERAND</span>
      </div>
      <div class="mhero-sig-meta">${STUDIO_LOCATION.toUpperCase()}</div>
    </div>
  </div>

  <div class="mhero-scroll" aria-hidden="true">
    <span>SCROLLEZ POUR LIRE</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
  </div>
</section>

<!-- TOC FLOTTANTE STYLE LINEAR — desktop only -->
<aside class="mtoc" aria-label="Sommaire de la méthode">
  <div class="mtoc-inner">
    <div class="mtoc-h">SOMMAIRE</div>
    <ol class="mtoc-list">
      <li><a class="mtoc-link" href="#anti-pattern" data-section="anti-pattern"><span class="mtoc-num">1.0</span><span class="mtoc-t">Ce qu'on a abandonné</span></a></li>
      <li><a class="mtoc-link" href="#piliers" data-section="piliers"><span class="mtoc-num">2.0</span><span class="mtoc-t">Les cinq piliers</span></a></li>
      <li><a class="mtoc-link" href="#timeline" data-section="timeline"><span class="mtoc-num">3.0</span><span class="mtoc-t">Timeline d'un Sprint Fixe</span></a></li>
      <li><a class="mtoc-link" href="#preuves" data-section="preuves"><span class="mtoc-num">4.0</span><span class="mtoc-t">Points de contrôle</span></a></li>
      <li><a class="mtoc-link" href="#journal" data-section="journal"><span class="mtoc-num">5.0</span><span class="mtoc-t">Une semaine de sprint</span></a></li>
      <li><a class="mtoc-link" href="#claude" data-section="claude"><span class="mtoc-num">6.0</span><span class="mtoc-t">Claude Code en copilote</span></a></li>
      <li><a class="mtoc-link" href="#stack" data-section="stack"><span class="mtoc-num">7.0</span><span class="mtoc-t">Notre stack technique</span></a></li>
      <li><a class="mtoc-link" href="#temoignages" data-section="temoignages"><span class="mtoc-num">8.0</span><span class="mtoc-t">Ce que vous pouvez vérifier</span></a></li>
      <li><a class="mtoc-link" href="#exclusion" data-section="exclusion"><span class="mtoc-num">9.0</span><span class="mtoc-t">Pas pour vous si…</span></a></li>
      <li><a class="mtoc-link" href="#faq" data-section="faq"><span class="mtoc-num">10.0</span><span class="mtoc-t">Contre-objections (FAQ)</span></a></li>
      <li><a class="mtoc-link" href="#cta-finale" data-section="cta-finale"><span class="mtoc-num">11.0</span><span class="mtoc-t">Budgets repères et prochaine étape</span></a></li>
    </ol>
    <div class="mtoc-foot">
      <span class="mtoc-foot-tag">SPRINT FIXE</span>
    </div>
  </div>
</aside>

<!-- L'ANTI-PATTERN -->
<section class="anti" id="anti-pattern">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Quatre risques à cadrer</div>
        <h2>Quatre zones de risque<br>à rendre explicites<br><span class="strike-bad">avant de signer</span>.</h2>
      </div>
      <div class="right">
        Régie, rythme de validation, accès et cadrage peuvent tous fonctionner, à condition que
        leurs règles soient comprises. Voici les points que notre proposition cherche à écrire clairement.
      </div>
    </div>

    <div class="anti-grid">
      <div class="anti-card reveal">
        <div class="anti-broken">
          <span class="anti-x">×</span>
          <span class="anti-broken-label">RISQUE À ÉVITER</span>
        </div>
        <h3 class="anti-bad">Régie au TJM extensible</h3>
        <p class="anti-bad-p">
          Une régie sans plafond, estimation de charge ni règle d'arbitrage peut rendre le budget
          difficile à anticiper. Le risque dépend du contrat, du pilotage et de la précision du suivi.
        </p>
        <div class="anti-divider"></div>
        <div class="anti-good">
          <span class="anti-check">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span class="anti-good-label">CE QU'ON FAIT À LA PLACE</span>
        </div>
        <h4 class="anti-good-h">Forfait fixe contractuel</h4>
        <p class="anti-good-p">
          Le prix, le périmètre, les hypothèses et la procédure d'avenant sont écrits dans le devis.
          Aucun coût supplémentaire ne s'applique sans accord écrit dans les conditions signées.
        </p>
      </div>

      <div class="anti-card reveal reveal-d-1">
        <div class="anti-broken">
          <span class="anti-x">×</span>
          <span class="anti-broken-label">RISQUE À ÉVITER</span>
        </div>
        <h3 class="anti-bad">Démo en fin de projet</h3>
        <p class="anti-bad-p">
          Une validation trop tardive peut laisser grandir un écart entre le besoin et le produit.
          Le devis doit préciser quand les démonstrations ont lieu et qui valide quoi.
        </p>
        <div class="anti-divider"></div>
        <div class="anti-good">
          <span class="anti-check">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span class="anti-good-label">CE QU'ON FAIT À LA PLACE</span>
        </div>
        <h4 class="anti-good-h">Démonstrations à cadence convenue</h4>
        <p class="anti-good-p">
          Une cadence régulière permet de contrôler les choix et de corriger la trajectoire plus tôt.
          Le jour, le rythme et les personnes attendues sont définis pour chaque projet.
        </p>
      </div>

      <div class="anti-card reveal reveal-d-2">
        <div class="anti-broken">
          <span class="anti-x">×</span>
          <span class="anti-broken-label">RISQUE À ÉVITER</span>
        </div>
        <h3 class="anti-bad">Repo + hébergement chez nous</h3>
        <p class="anti-bad-p">
          Des accès, droits ou procédures de sortie non écrits peuvent compliquer une reprise.
          La propriété des comptes ne se déduit ni du nom du prestataire ni de l'outil utilisé.
        </p>
        <div class="anti-divider"></div>
        <div class="anti-good">
          <span class="anti-check">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span class="anti-good-label">CE QU'ON FAIT À LA PLACE</span>
        </div>
        <h4 class="anti-good-h">Code, accès et réversibilité documentés</h4>
        <p class="anti-good-p">
          Le devis précise où se trouvent le dépôt et l'hébergement, qui détient les accès et
          comment s'organise la reprise. La cession des livrables spécifiques intervient après paiement complet.
        </p>
      </div>

      <div class="anti-card reveal reveal-d-3">
        <div class="anti-broken">
          <span class="anti-x">×</span>
          <span class="anti-broken-label">RISQUE À ÉVITER</span>
        </div>
        <h3 class="anti-bad">Discovery « gratuit »</h3>
        <p class="anti-bad-p">
          Un cadrage annoncé comme gratuit peut rester utile, mais son niveau de détail et ses
          livrables doivent être explicites pour permettre une comparaison honnête des offres.
        </p>
        <div class="anti-divider"></div>
        <div class="anti-good">
          <span class="anti-check">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span class="anti-good-label">CE QU'ON FAIT À LA PLACE</span>
        </div>
        <h4 class="anti-good-h">Discovery payé · livrables identifiés</h4>
        <p class="anti-good-p">
          1 500 € pour 2 jours de cadrage sérieux. Vrais livrables (proto Figma, specs, devis ferme).
          Toute remise sur une phase suivante et les droits sur ces livrables sont écrits dans la proposition signée.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- LES 5 PILIERS SPRINT FIXE -->
<section class="piliers" id="piliers">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Les 5 piliers</div>
        <h2>Cinq choses qu'on fait<br>sur chaque projet.<br><span class="grad-accent">Dans cet ordre.</span></h2>
      </div>
      <div class="right">
        Chaque pilier décrit un geste concret de l'équipe, suivi de la note correspondante à retrouver
        dans votre devis. Cette page décrit notre méthode de travail, pas un contrat universel&nbsp;:
        le périmètre, le rythme, les conséquences d'un écart et les conditions de réversibilité
        n'engagent les parties que s'ils figurent dans le devis ou le contrat signé.
      </div>
    </div>

    <div class="pil-grid">
      <div class="pil-card pil-card-featured reveal">
        <div class="pil-num">PILIER 01</div>
        <div class="pil-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div class="pil-schema" aria-hidden="true">
          <svg viewBox="0 0 220 60" preserveAspectRatio="xMidYMid meet">
            <!-- Discovery box -->
            <rect x="6" y="14" width="64" height="32" rx="6" fill="none" class="sk-accent-stroke" stroke-width="1.5"/>
            <text x="38" y="29" text-anchor="middle" class="sk-mono-accent">DISCOVERY</text>
            <text x="38" y="40" text-anchor="middle" class="sk-mono-accent">1 500 €</text>
            <!-- Arrow with minus -->
            <path d="M76 30 L 132 30" stroke-width="1.5" class="sk-stroke" fill="none" stroke-dasharray="3 3"/>
            <path d="M127 25 L 134 30 L 127 35" stroke-width="1.5" class="sk-stroke" fill="none"/>
            <text x="104" y="22" text-anchor="middle" class="sk-mono-mute">si prévu</text>
            <!-- Project box (bigger) -->
            <rect x="138" y="6" width="76" height="48" rx="6" fill="none" class="sk-stroke" stroke-width="1.5"/>
            <text x="176" y="22" text-anchor="middle" class="sk-mono">PHASE 2</text>
            <text x="176" y="34" text-anchor="middle" class="sk-mono-mute">30 000 €</text>
            <line x1="148" y1="40" x2="204" y2="40" class="sk-mute" stroke-width="1"/>
            <text x="176" y="50" text-anchor="middle" class="sk-mono-accent">AU DEVIS</text>
          </svg>
        </div>
        <h3>On cadre avant de chiffrer</h3>
        <p>Au-delà de 8 k€, on ouvre systématiquement par deux jours de cadrage payés (1 500 € HT)&nbsp;: atelier avec vos décideurs, specs fonctionnelles, prototype cliquable, schéma d'architecture. Vous repartez avec ces livrables, que la suite se fasse avec nous ou non.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">NOTE · AU DEVIS</span>
          <span class="pil-clause-t">Le livrable attendu, son prix, son calendrier et les conditions d'une éventuelle remise sur la phase suivante.</span>
        </div>
      </div>

      <div class="pil-card reveal reveal-d-1">
        <div class="pil-num">PILIER 02</div>
        <div class="pil-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg>
        </div>
        <div class="pil-schema" aria-hidden="true">
          <svg viewBox="0 0 220 60" preserveAspectRatio="xMidYMid meet">
            <!-- Devis (sheet of paper) -->
            <rect x="40" y="4" width="100" height="52" rx="4" fill="var(--paper)" class="sk-stroke" stroke-width="1.5"/>
            <!-- Schéma d'illustration : jamais de numéro de devis. -->
            <text x="50" y="16" class="sk-mono-mute">DEVIS · EXEMPLE</text>
            <line x1="50" y1="22" x2="130" y2="22" class="sk-mute" stroke-width="1"/>
            <line x1="50" y1="30" x2="120" y2="30" class="sk-mute" stroke-width="0.8"/>
            <line x1="50" y1="36" x2="115" y2="36" class="sk-mute" stroke-width="0.8"/>
            <line x1="50" y1="42" x2="105" y2="42" class="sk-mute" stroke-width="0.8"/>
            <!-- TOTAL highlighted -->
            <rect x="48" y="46" width="84" height="8" rx="2" class="sk-accent-fill-soft"/>
            <text x="52" y="52" class="sk-mono-accent">TOTAL · 30 000 €</text>
            <!-- Padlock right -->
            <g transform="translate(150 14)">
              <rect x="0" y="14" width="34" height="28" rx="4" class="sk-fill"/>
              <path d="M8 14 L 8 8 a 9 9 0 0 1 18 0 L 26 14" stroke-width="2.5" class="sk-accent-stroke" fill="none"/>
              <circle cx="17" cy="26" r="3" fill="#fff"/>
              <rect x="15.5" y="28" width="3" height="6" fill="#fff"/>
            </g>
          </svg>
        </div>
        <h3>On fige le périmètre avant la première ligne de code</h3>
        <p>On ne démarre pas tant que le prix et le périmètre ne sont pas arrêtés. Ensuite, une demande qui sort du périmètre est chiffrée à part et vous décidez si elle vaut le coup. Rien de nouveau n'est facturé sans votre accord écrit.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">NOTE · AU DEVIS</span>
          <span class="pil-clause-t">Le prix et le périmètre signés, puis un avenant écrit avant toute évolution qui modifie le coût ou le calendrier.</span>
        </div>
      </div>

      <div class="pil-card reveal reveal-d-2">
        <div class="pil-num">PILIER 03</div>
        <div class="pil-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 7v5l3 2"/></svg>
        </div>
        <div class="pil-schema" aria-hidden="true">
          <svg viewBox="0 0 220 60" preserveAspectRatio="xMidYMid meet">
            <!-- Title -->
            <text x="110" y="10" text-anchor="middle" class="sk-mono-mute">RYTHME CONVENU</text>
            <!-- Timeline rail -->
            <line x1="14" y1="32" x2="206" y2="32" stroke-width="1.5" class="sk-mute" stroke-dasharray="2 3"/>
            <!-- 5 demo dots -->
            <circle cx="20" cy="32" r="4" class="sk-fill"/>
            <text x="20" y="46" text-anchor="middle" class="sk-mono-mute">V1</text>
            <circle cx="64" cy="32" r="4" class="sk-fill"/>
            <text x="64" y="46" text-anchor="middle" class="sk-mono-mute">V2</text>
            <circle cx="110" cy="32" r="4" class="sk-fill"/>
            <text x="110" y="46" text-anchor="middle" class="sk-mono-mute">V3</text>
            <circle cx="156" cy="32" r="4" class="sk-fill"/>
            <text x="156" y="46" text-anchor="middle" class="sk-mono-mute">V4</text>
            <circle cx="200" cy="32" r="6" class="sk-fill" stroke="#A78BFA" stroke-width="1.5"/>
            <text x="200" y="48" text-anchor="middle" class="sk-mono-accent">V5</text>
            <!-- Footer labels -->
            <text x="14" y="58" class="sk-mono-mute">SPRINT 1</text>
            <text x="206" y="58" text-anchor="end" class="sk-mono-mute">LIVRAISON</text>
          </svg>
        </div>
        <h3>On vous montre le produit qui tourne, pas des captures</h3>
        <p>À chaque jalon de suivi, vous ouvrez une version déployée et vous la manipulez vous-même. Vous corrigez la trajectoire pendant que ça coûte encore peu&nbsp;; le jour et le rythme sont arrêtés avec vous au lancement.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">NOTE · AU DEVIS</span>
          <span class="pil-clause-t">Le rythme des démonstrations, les personnes attendues et le mode de validation des décisions prises.</span>
        </div>
      </div>

      <div class="pil-card pil-card-warning reveal reveal-d-3">
        <div class="pil-num">PILIER 04</div>
        <div class="pil-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div class="pil-schema" aria-hidden="true">
          <svg viewBox="0 0 220 60" preserveAspectRatio="xMidYMid meet">
            <!-- Timeline -->
            <line x1="14" y1="30" x2="206" y2="30" stroke-width="1.5" class="sk-stroke"/>
            <!-- Date promise -->
            <line x1="100" y1="20" x2="100" y2="40" stroke-width="2" stroke="#16A34A"/>
            <text x="100" y="14" text-anchor="middle" class="sk-mono" fill="#16A34A">DATE J</text>
            <!-- Zone de suivi du planning -->
            <rect x="100" y="26" width="34" height="8" rx="1" fill="#16A34A" opacity="0.15"/>
            <text x="117" y="32.5" text-anchor="middle" font-family="Geist Mono" font-size="6.5" font-weight="600" fill="#16A34A">SUIVI</text>
            <!-- Zone de décision -->
            <rect x="134" y="26" width="68" height="8" rx="1" fill="#9A3412" opacity="0.18"/>
            <text x="168" y="32.5" text-anchor="middle" font-family="Geist Mono" font-size="6.5" font-weight="700" fill="#9A3412">ALERTE · DÉCISION</text>
            <!-- End mark -->
            <circle cx="202" cy="30" r="3" fill="#9A3412"/>
            <text x="202" y="46" text-anchor="middle" class="sk-mono-mute">AVENANT</text>
            <!-- Bottom note -->
            <text x="110" y="56" text-anchor="middle" class="sk-mono-mute">PROCÉDURE DÉFINIE DANS LE DEVIS</text>
          </svg>
        </div>
        <h3>On vous prévient dès qu'un jalon est menacé</h3>
        <p>Les dépendances, les validations attendues et la procédure d'alerte sont écrites avant le démarrage&nbsp;: quand un jalon dérape, vous l'apprenez à ce moment-là, pas à la livraison. <b>Aucune pénalité automatique n'est promise ici.</b></p>
        <div class="pil-clause">
          <span class="pil-clause-h">NOTE · AU DEVIS</span>
          <span class="pil-clause-t">Les causes de suspension, les validations attendues, la procédure d'alerte et les remèdes réellement acceptés par les deux parties.</span>
        </div>
      </div>

      <div class="pil-card reveal">
        <div class="pil-num">PILIER 05</div>
        <div class="pil-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
        </div>
        <div class="pil-schema" aria-hidden="true">
          <svg viewBox="0 0 220 60" preserveAspectRatio="xMidYMid meet">
            <!-- Source: Hagnéré Code (left, neutral) -->
            <g transform="translate(8 14)">
              <rect width="56" height="32" rx="6" fill="none" class="sk-stroke" stroke-width="1.5"/>
              <text x="28" y="14" text-anchor="middle" class="sk-mono">HAGNÉRÉ CODE</text>
              <text x="28" y="26" text-anchor="middle" class="sk-mono-mute">repo init</text>
            </g>
            <!-- Arrow -->
            <g transform="translate(70 30)">
              <line x1="0" y1="0" x2="80" y2="0" stroke-width="2" class="sk-accent-stroke"/>
              <path d="M75 -5 L 82 0 L 75 5" stroke-width="2" class="sk-accent-stroke" fill="none"/>
              <text x="40" y="-8" text-anchor="middle" class="sk-mono-accent">J + 1</text>
              <text x="40" y="14" text-anchor="middle" class="sk-mono-mute">git push</text>
            </g>
            <!-- Destination: Client repo (right, accent box) -->
            <g transform="translate(156 8)">
              <rect width="56" height="44" rx="6" class="sk-accent-fill-soft" stroke="#A78BFA" stroke-width="1.5"/>
              <text x="28" y="16" text-anchor="middle" class="sk-mono-accent">VOTRE</text>
              <text x="28" y="28" text-anchor="middle" class="sk-mono-accent">REPO GIT</text>
              <line x1="6" y1="33" x2="50" y2="33" stroke="#A78BFA" stroke-width="0.8" opacity="0.5"/>
              <text x="28" y="40" text-anchor="middle" class="sk-mono-mute">main · v1.0</text>
            </g>
          </svg>
        </div>
        <h3>On code chez vous dès le premier jour</h3>
        <p>Le dépôt et l'hébergement sont ouverts au démarrage et vous disposez des accès pendant toute la mission&nbsp;: vous voyez les commits arriver, vous n'attendez pas la fin pour découvrir le code. Le transfert des livrables spécifiques suit les conditions de paiement prévues aux CGV.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">NOTE · CLAUSE CGV</span>
          <span class="pil-clause-t">« Sauf stipulation contraire, les livrables spécifiques sont transférés après paiement complet. Les éléments préexistants, open source et outils génériques restent soumis à leurs droits respectifs. »</span>
        </div>
      </div>

      <div class="pil-download reveal reveal-d-1">
        <div class="pil-dl-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>
        </div>
        <div class="pil-dl-body">
          <div class="pil-dl-tag">CONDITIONS PUBLIQUES · DEVIS NOMINATIF</div>
          <h4>Lisez nos conditions avant de signer.</h4>
          <p>Nos CGV publiques posent le cadre général. Le devis nominatif décrit ensuite les
          livrables, jalons, responsabilités et conditions particulières de votre mission. Faites-le
          relire avant de signer si votre contexte l'exige.</p>
          <a href="/legal/cgv" class="btn btn-ghost btn-dl">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
            Lire les CGV publiques
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LA TIMELINE D'UN SPRINT FIXE -->
<section class="timeline" id="timeline">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— La timeline</div>
        <h2>À quoi ressemble<br>un Sprint Fixe semaine<br>par semaine ?</h2>
      </div>
      <div class="right">
        Exemple illustratif d'un MVP organisé sur <b>6 semaines</b>. Ce n'est ni un devis ni une
        promesse de délai&nbsp;: votre séquence dépend du périmètre, des intégrations, des validations
        et des ressources précisées lors du cadrage.
      </div>
    </div>

    <div class="tl-wrap reveal">
      <div class="tl-rail"></div>

      <div class="tl-step tl-discovery">
        <div class="tl-marker">
          <span>D</span>
        </div>
        <div class="tl-card">
          <div class="tl-meta">
            <span class="tl-week">DISCOVERY</span>
            <span class="tl-dur">2 jours · 1 500 €</span>
          </div>
          <h3>Cadrage métier &amp; technique</h3>
          <p>Workshop avec les décideurs, ateliers wireframing, schéma d'architecture, devis ferme phase 2. <b>Livrables réutilisables</b> si vous ne partez pas avec nous.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">📄 Specs fonctionnelles</span>
            <span class="tl-deliv-item">🎨 Proto Figma</span>
            <span class="tl-deliv-item">🏗️ Architecture</span>
            <span class="tl-deliv-item">💰 Devis ferme</span>
          </div>
        </div>
      </div>

      <div class="tl-gap">
        <div class="tl-gap-line"></div>
        <span class="tl-gap-tag">SIGNATURE · ACOMPTE AU DEVIS</span>
      </div>

      <div class="tl-step">
        <div class="tl-marker">
          <span>1</span>
        </div>
        <div class="tl-card">
          <div class="tl-meta">
            <span class="tl-week">SEMAINE 1</span>
            <span class="tl-dur">J+1 → J+5</span>
          </div>
          <h3>Setup &amp; design system</h3>
          <p>Le dépôt et les accès sont organisés comme prévu au devis. La stack, la base et le design system sont initialisés ; les premiers écrans deviennent des composants testables.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">🔐 Dépôt et accès organisés</span>
            <span class="tl-deliv-item">⚙️ Stack opérationnelle</span>
            <span class="tl-deliv-item">🎨 Design system codé</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            CRÉNEAU D'EXEMPLE · premiers écrans cliquables
          </div>
        </div>
      </div>

      <div class="tl-step">
        <div class="tl-marker">
          <span>2</span>
        </div>
        <div class="tl-card">
          <div class="tl-meta">
            <span class="tl-week">SEMAINE 2</span>
            <span class="tl-dur">J+8 → J+12</span>
          </div>
          <h3>Authentification &amp; espaces utilisateurs</h3>
          <p>Login, signup, reset password, gestion des rôles &amp; permissions. Espaces utilisateurs personnalisés. Tests unitaires en parallèle.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">🔑 Auth complète</span>
            <span class="tl-deliv-item">👥 Rôles &amp; permissions</span>
            <span class="tl-deliv-item">🧪 Tests unitaires</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            CRÉNEAU D'EXEMPLE · login fonctionnel à tester
          </div>
        </div>
      </div>

      <div class="tl-step">
        <div class="tl-marker">
          <span>3</span>
        </div>
        <div class="tl-card">
          <div class="tl-meta">
            <span class="tl-week">SEMAINE 3</span>
            <span class="tl-dur">J+15 → J+19</span>
          </div>
          <h3>Features métier · cœur du produit</h3>
          <p>Les écrans qui font la valeur du produit. Workflows métier, formulaires complexes, dashboards. C'est aussi le moment où l'équipe a assez de contexte pour repérer une amélioration utile hors périmètre&nbsp;: <b>elle n'est jamais due</b>, elle est proposée seulement si le budget et le planning le permettent, et chiffrée avant d'être réalisée.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">⚡ Features cœur</span>
            <span class="tl-deliv-item">📊 Dashboards</span>
            <span class="tl-deliv-item">💡 Arbitrage d'amélioration éventuelle</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            CRÉNEAU D'EXEMPLE · parcours principal à tester
          </div>
        </div>
      </div>

      <div class="tl-gap mid">
        <div class="tl-gap-line"></div>
        <span class="tl-gap-tag">JALON MI-PARCOURS · ÉCHÉANCE AU DEVIS</span>
      </div>

      <div class="tl-step">
        <div class="tl-marker">
          <span>4</span>
        </div>
        <div class="tl-card">
          <div class="tl-meta">
            <span class="tl-week">SEMAINE 4</span>
            <span class="tl-dur">J+22 → J+26</span>
          </div>
          <h3>Intégrations tierces &amp; agents IA</h3>
          <p>Stripe pour la facturation, Pennylane pour la compta, agents Claude pour l'automatisation. Webhooks, queues, retry logic, monitoring Sentry.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">💳 Stripe + facturation</span>
            <span class="tl-deliv-item">🤖 Agents IA</span>
            <span class="tl-deliv-item">📡 Webhooks &amp; queues</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            CRÉNEAU D'EXEMPLE · paiements et IA à tester
          </div>
        </div>
      </div>

      <div class="tl-step">
        <div class="tl-marker">
          <span>5</span>
        </div>
        <div class="tl-card">
          <div class="tl-meta">
            <span class="tl-week">SEMAINE 5</span>
            <span class="tl-dur">J+29 → J+33</span>
          </div>
          <h3>QA, sécurité, RGPD</h3>
          <p>Revue de sécurité adaptée au périmètre, points techniques liés aux données personnelles, tests et pré-recette. Les documents juridiques et la conformité restent à valider par les responsables compétents du client.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">🛡️ Audit sécurité</span>
            <span class="tl-deliv-item">📜 Points techniques RGPD</span>
            <span class="tl-deliv-item">✅ Tests E2E verts</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            CRÉNEAU D'EXEMPLE · pré-recette à valider
          </div>
        </div>
      </div>

      <div class="tl-step tl-final">
        <div class="tl-marker">
          <span>6</span>
        </div>
        <div class="tl-card">
          <div class="tl-meta">
            <span class="tl-week">SEMAINE 6 · LIVRAISON</span>
            <span class="tl-dur">J+36 → J+40</span>
          </div>
          <h3>Mise en production &amp; formation</h3>
          <p>Déploiement, formation et documentation selon le périmètre signé. La recette et la période de correction applicable commencent selon les conditions prévues au devis.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">🚀 Mise en prod</span>
            <span class="tl-deliv-item">🎓 Formation équipe</span>
            <span class="tl-deliv-item">📚 Docs &amp; runbook</span>
            <span class="tl-deliv-item">🛡️ Recette et corrections cadrées</span>
          </div>
          <div class="tl-friday tl-friday-final">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            JALON DE LIVRAISON · RECETTE · SOLDE SELON LE DEVIS
          </div>
        </div>
      </div>

      <div class="tl-after">
        <div class="tl-after-grid">
          <div class="tl-after-card">
            <div class="tl-after-h">APRÈS LIVRAISON · RECETTE</div>
            <div class="tl-after-t">Anomalies qualifiées et corrigées selon le document signé.</div>
          </div>
          <div class="tl-after-card">
            <div class="tl-after-h">ENSUITE · MAINTENANCE</div>
            <div class="tl-after-t">Forfait de maintenance mensuel optionnel ou autonomie complète.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- POINTS DE CONTRÔLE AVANT SIGNATURE -->
<section class="proof" id="preuves">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— La preuve utile</div>
        <h2>Quatre points à vérifier<br>avant de signer.<br><span class="grad-accent">Noir sur blanc.</span></h2>
      </div>
      <div class="right">
        Nous ne publions pas de taux de réussite ou de compteur client sans jeu de données auditable.
        La preuve opposable reste votre devis signé&nbsp;: vérifiez-y ces quatre éléments avant de commander.
      </div>
    </div>

    <div class="proof-grid">
      <div class="proof-card reveal">
        <div class="proof-meta">À VÉRIFIER · BUDGET</div>
        <div class="proof-n">01</div>
        <div class="proof-l"><b>Périmètre, prix et exclusions</b> sont identifiables.</div>
        <div class="proof-bar">
          <div class="proof-bar-fill" style="width:100%"></div>
        </div>
        <div class="proof-since">Toute évolution qui modifie le coût ou le délai passe par un avenant accepté.</div>
      </div>

      <div class="proof-card reveal reveal-d-1">
        <div class="proof-meta">À VÉRIFIER · PLANNING</div>
        <div class="proof-n">02</div>
        <div class="proof-l"><b>Jalons, dépendances et validations</b> sont datés.</div>
        <div class="proof-bar">
          <div class="proof-bar-fill" style="width:100%"></div>
        </div>
        <div class="proof-since">La procédure d'alerte et les conséquences d'un décalage sont explicites.</div>
      </div>

      <div class="proof-card reveal reveal-d-2">
        <div class="proof-meta">À VÉRIFIER · SUIVI</div>
        <div class="proof-n">03</div>
        <div class="proof-l"><b>Cadence des démonstrations</b> et décideurs sont nommés.</div>
        <div class="proof-bar">
          <div class="proof-bar-fill" style="width:100%"></div>
        </div>
        <div class="proof-since">Chaque arbitrage important laisse une trace partageable.</div>
      </div>

      <div class="proof-card reveal reveal-d-3">
        <div class="proof-meta">À VÉRIFIER · SORTIE</div>
        <div class="proof-n">04</div>
        <div class="proof-l"><b>Accès, cession et réversibilité</b> sont distingués.</div>
        <div class="proof-bar">
          <div class="proof-bar-fill" style="width:100%"></div>
        </div>
        <div class="proof-since">Les composants tiers et préexistants restent soumis à leurs licences.</div>
      </div>

    </div>

    <div class="proof-foot reveal">
      <div class="proof-foot-ic">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
      <span>Cette grille est pédagogique. Les seuls engagements applicables sont ceux des <a href="/legal/cgv">CGV publiques</a> et du document nominatif signé pour votre projet.</span>
    </div>
  </div>
</section>

<!-- JOURNAL DE SUIVI -->
<section class="friday" id="journal">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Exemple de journal de suivi</div>
        <h2>À quoi ressemble<br>une semaine<br><span class="grad-accent">de sprint.</span></h2>
      </div>
      <div class="right">
        Une démo et une mise à jour du journal peuvent être organisées à la cadence convenue.
        Ci-dessous, <b>un exemple illustratif</b> — pas le compte rendu de missions réelles :
        il montre un format possible, pas un livrable contractuel universel. Le devis précise le
        support, la fréquence et l'emplacement du journal de votre projet.
      </div>
    </div>

    <div class="fri-list reveal">
      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">1</div>
          <div class="fri-date-m">SEM.</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-saas">EXEMPLE · MVP SAAS</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 1 / 6</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">DÉMO DE CADRAGE</span>
          </div>
          <h3>Les premiers écrans deviennent cliquables</h3>
          <p>Ce que vous voyez à cette démo : le repo ouvert sur votre organisation, la stack en place, et les maquettes transformées en composants réels. <b>Ce que vous décidez :</b> valider la direction visuelle pendant qu'elle coûte encore zéro à changer.</p>
        </div>
      </div>

      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">3</div>
          <div class="fri-date-m">SEM.</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-saas">EXEMPLE · MVP SAAS</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 3 / 6</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">DÉMO MI-PARCOURS</span>
          </div>
          <h3>Le cœur métier tourne, les arbitrages se posent</h3>
          <p>Les écrans qui portent la valeur du produit passent en démo. C'est le rendez-vous où l'équipe a assez de contexte pour proposer une amélioration hors périmètre, chiffrée avant réalisation. <b>Ce que vous décidez :</b> l'accepter, la refuser, ou en demander une autre.</p>
        </div>
      </div>

      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">4</div>
          <div class="fri-date-m">SEM.</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-ecom">EXEMPLE · ARBITRAGE</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 4 / 6</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">DÉMO D'INTÉGRATIONS</span>
          </div>
          <h3>Une démo sert aussi à retirer du périmètre</h3>
          <p>Paiements, webhooks, automatisations : les briques risquées passent devant vous dès qu'elles fonctionnent, jamais à la fin. Si une fonctionnalité s'avère trop coûteuse pour ce qu'elle apporte, on la sort — et l'arbitrage est acté par avenant, pas subi.</p>
        </div>
      </div>

      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">5</div>
          <div class="fri-date-m">SEM.</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-vitrine">EXEMPLE · QUALITÉ</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 5 / 6</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">DÉMO DE PRÉ-RECETTE</span>
          </div>
          <h3>Les scores se mesurent devant vous</h3>
          <p>Revue de sécurité, points techniques liés aux données personnelles et tests de bout en bout. Un score Lighthouse peut être mesuré en direct, avec son URL, son appareil et ses conditions&nbsp;; un seuil ne devient contractuel que s'il figure au devis.</p>
        </div>
      </div>

      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">6</div>
          <div class="fri-date-m">SEM.</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-internal">EXEMPLE · LIVRAISON</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 6 / 6 · LIVRAISON</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">DÉMO DE MISE EN PROD</span>
          </div>
          <h3>Le dernier jalon illustratif est celui de la mise en ligne</h3>
          <p>Déploiement, formation et remise de la documentation prévue. La recette, les corrections et une maintenance éventuelle suivent les modalités du devis&nbsp;; le forfait de maintenance reste optionnel.</p>
        </div>
      </div>
    </div>

    <div class="fri-cta reveal">
      <div class="fri-cta-ic">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div class="fri-cta-body">
        <b>Vous voulez voir la méthode en action ?</b>
        <span>Les pages publiques de LMNP.AI, SCI-AI, Hagnéré Patrimoine et Hagnéré Investissement peuvent servir de support de discussion. Elles prouvent leur disponibilité et leurs fonctions visibles, pas leur conception, leur exploitation ni leurs résultats.</span>
      </div>
      <a href="#contact" class="btn btn-ghost">
        Demander une démonstration
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- CLAUDE CODE COMME MULTIPLICATEUR (pas en pilier #1, comme recommandé par la recherche) -->
<section class="claude-mult" id="claude">
  <div class="wrap">
    <div class="claude-card reveal">
      <div class="claude-bg-grid"></div>
      <div class="claude-bg-radial"></div>

      <div class="claude-left">
        <div class="claude-tag">
          <span>OUTIL</span>
          <span>Claude Code · pas un pilier, un copilote</span>
        </div>
        <h2>${TEAM_TOTAL_COUNT} personnes :<br>1 président, 1 CTO, ${TEAM_OTHER_DEVELOPERS_COUNT} autres devs,<br><span class="accent">Claude Code en copilote.</span></h2>
        <p class="claude-lead">
          Beaucoup d'agences brandissent l'IA comme un argument marketing. Chez nous, c'est un
          outil de productivité opéré par chaque dev senior — recherche de doc, exploration de bibliothèques,
          plans d'implémentation, génération de tests, doc technique. <b>Le gain dépend de la tâche
          et n'est pas présenté comme une réduction chiffrée universelle.</b> Un humain reste responsable du code intégré.
        </p>

        <div class="claude-rules">
          <div class="claude-rule">
            <div class="claude-rule-num">RÈGLE 01</div>
            <h3>Claude défriche, le dev tranche</h3>
            <p>L'IA explore les options techniques, propose des plans. Le dev valide, ajuste, tranche. Jamais l'inverse.</p>
          </div>
          <div class="claude-rule">
            <div class="claude-rule-num">RÈGLE 02</div>
            <h3>Revue humaine adaptée au risque</h3>
            <p>Les changements passent par une revue humaine adaptée au risque. Les choix structurants sont validés par le responsable technique.</p>
          </div>
          <div class="claude-rule">
            <div class="claude-rule-num">RÈGLE 03</div>
            <h3>Les outils restent un moyen, pas une ligne magique</h3>
            <p>Le devis porte sur des livrables et un périmètre. L'outil utilisé ne remplace ni les tests, ni l'explication des choix.</p>
          </div>
        </div>
      </div>

      <div class="claude-right">
        <div class="claude-stat">
          <div class="claude-stat-row">
            <svg viewBox="0 0 512 512" fill="#D97757" aria-hidden="true" width="32" height="32"><path d="M301.86 65h70.94l129.4 382h-70.93l-26.48-81.3H269.2l-26.48 81.3h-70.94L301.86 65zm-11.96 240h94.86l-47.43-145.7L289.9 305z"/></svg>
            <span class="claude-stat-cred">PRODUCTIVITÉ</span>
          </div>
          <div class="claude-stat-n">AIDE</div>
          <div class="claude-stat-l">Accélération possible sur la recherche, les tests et la documentation, sans moyenne publique revendiquée.</div>
        </div>
        <div class="claude-stat">
          <div class="claude-stat-row">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="claude-stat-cred">TRAÇABILITÉ</span>
          </div>
          <div class="claude-stat-n">TRACE</div>
          <div class="claude-stat-l">Les hypothèses et décisions importantes doivent rester lisibles dans les tickets, commits et revues.</div>
        </div>
        <div class="claude-stat">
          <div class="claude-stat-row">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span class="claude-stat-cred">RESPONSABILITÉ</span>
          </div>
          <div class="claude-stat-n">HUMAIN</div>
          <div class="claude-stat-l">Un membre identifié de l'équipe reste responsable de la validation et de l'intégration.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CE QUE VOUS POUVEZ VÉRIFIER — produits du groupe, aucun témoignage client -->
<section class="quotes" id="temoignages">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ouvrez-les dans un autre onglet</div>
        <h2>Ce que vous pouvez<br><span class="grad-accent">vérifier vous-même.</span></h2>
      </div>
      <div class="right">
        Quatre produits du <b>groupe Hagnéré</b> sont en ligne. Ce ne sont pas des clients indépendants&nbsp;:
        ce sont nos propres produits, et c'est précisément pour ça que vous pouvez les ouvrir, cliquer
        dans les parcours et juger le travail sur pièce. Chaque fiche renvoie à l'analyse détaillée des
        fonctions réellement visibles sur la page publique.
      </div>
    </div>

    <div class="quotes-grid reveal">
      <a class="pcard pcard-featured" href="/realisations/lmnp-ai">
        <div class="pcard-top">
          <span class="pcard-badge">PRODUIT DU GROUPE</span>
          <span class="pcard-url">lmnp.ai</span>
        </div>
        <h3 class="pcard-name">LMNP.AI</h3>
        <div class="pcard-cat">Logiciel en ligne · Comptabilité LMNP/LMP</div>
        <p class="pcard-desc">Une page publique consacrée à la comptabilité LMNP/LMP au régime réel.</p>
        <ul class="pcard-feats">
          <li>Deux formules affichées : autonomie ou accompagnement par un expert-comptable</li>
          <li>Gestion multi-biens, amortissement automatique, fichier FEC</li>
          <li>Génération des formulaires 2031 et tableaux 2033, transmission EDI par un partenaire</li>
        </ul>
        <span class="pcard-go">Lire l'analyse des fonctions publiques
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </span>
      </a>

      <a class="pcard" href="/realisations/sci-ai">
        <div class="pcard-top">
          <span class="pcard-badge">PRODUIT DU GROUPE</span>
          <span class="pcard-url">sci-ai.app</span>
        </div>
        <h3 class="pcard-name">SCI-AI.app</h3>
        <div class="pcard-cat">Logiciel en ligne · Comptabilité SCI</div>
        <p class="pcard-desc">Une page publique consacrée à la comptabilité des SCI à l'IR et à l'IS.</p>
        <span class="pcard-go">Lire l'analyse des fonctions publiques
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </span>
      </a>

      <a class="pcard" href="/realisations/hagnere-patrimoine">
        <div class="pcard-top">
          <span class="pcard-badge">SITE DU GROUPE</span>
          <span class="pcard-url">hagnere-patrimoine.fr</span>
        </div>
        <h3 class="pcard-name">Hagnéré Patrimoine</h3>
        <div class="pcard-cat">Site éditorial · Conseil patrimonial</div>
        <p class="pcard-desc">Un site public qui organise expertises, simulateurs, guides et prise de contact.</p>
        <span class="pcard-go">Lire l'analyse des fonctions publiques
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </span>
      </a>

      <a class="pcard" href="/realisations/hagnere-investissement">
        <div class="pcard-top">
          <span class="pcard-badge">SITE DU GROUPE</span>
          <span class="pcard-url">hagnere-investissement.fr</span>
        </div>
        <h3 class="pcard-name">Hagnéré Investissement</h3>
        <div class="pcard-cat">Site vitrine · Investissement locatif</div>
        <p class="pcard-desc">Un site public qui présente un service, un mini-simulateur et une prise de rendez-vous.</p>
        <span class="pcard-go">Lire l'analyse des fonctions publiques
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </span>
      </a>
    </div>

    <div class="quotes-foot reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
      <span><b>Ce que ces pages prouvent&nbsp;:</b> leur disponibilité et leurs fonctions visibles. Elles ne prouvent ni un résultat commercial, ni une référence externe — une référence client ne sera publiée ici qu'avec preuve et autorisation.</span>
    </div>
  </div>
</section>

<!-- PAS POUR VOUS SI… (anti-clients explicite) -->
<section class="not-for-you" id="exclusion">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Honnêteté commerciale</div>
        <h2>Sprint Fixe <span class="strike-bad">n'est pas</span><br>la bonne réponse pour vous<br>dans ces 4 cas.</h2>
      </div>
      <div class="right">
        Certaines situations ne correspondent pas à notre modèle. Nous le signalons pendant le
        cadrage et pouvons, lorsque nous connaissons un interlocuteur pertinent, suggérer une autre piste
        sans faire de cette orientation une prestation ou une garantie.
      </div>
    </div>

    <div class="nfy-grid">
      <div class="nfy-card reveal">
        <div class="nfy-num">CAS 01</div>
        <h3>Votre scope est franchement flou.</h3>
        <p>Vous avez « une intuition », pas un objectif clair. Le forfait fixe n'a aucun sens — on signerait
        un chiffre qu'on ne pourrait pas tenir. <b>Faites d'abord un Discovery Sprint</b> (1 500 €, 2 jours).
        Si après ça le scope reste flou, on vous oriente vers une mission de pré-cadrage produit
        chez un cabinet de consulting produit ou un studio orienté discovery.</p>
        <div class="nfy-redir">→ Discovery Sprint d'abord, ou pré-cadrage chez un cabinet produit.</div>
      </div>

      <div class="nfy-card reveal reveal-d-1">
        <div class="nfy-num">CAS 02</div>
        <h3>Votre budget est sous notre ticket d'entrée.</h3>
        <p>Notre coût d'opération minimal sur un projet (cadrage, suivi, recette, documentation, formation)
        rend non-rentable un forfait situé sous le prix d'entrée publié — <b>6,9 k€ pour un site vitrine</b>,
        le format le moins cher de notre <a href="/tarifs">grille tarifaire</a>. <b>Ce n'est pas que ça ne
        nous intéresse pas — c'est qu'on perdrait votre confiance en bâclant.</b> On vous oriente vers une
        plateforme de freelances seniors avec laquelle ça marchera mieux pour ce périmètre.</p>
        <div class="nfy-redir">→ Plateforme de freelances seniors pour les missions courtes.</div>
      </div>

      <div class="nfy-card reveal reveal-d-2">
        <div class="nfy-num">CAS 03</div>
        <h3>Vous voulez du temps &amp; matériel (régie / TJM).</h3>
        <p>Sprint Fixe, c'est l'inverse de la régie. Si votre process interne <b>nécessite</b> des feuilles
        de temps, des ajustements quotidiens, et un développeur loué à la journée, on n'est pas la
        bonne équipe — on en perdrait notre âme et vous votre méthode. <b>On vous oriente vers une ESN
        classique</b> qui maîtrise ce modèle, ou une plateforme de freelances seniors en mission longue.</p>
        <div class="nfy-redir">→ ESN classique ou plateforme de freelances pour la régie.</div>
      </div>

      <div class="nfy-card reveal reveal-d-3">
        <div class="nfy-num">CAS 04</div>
        <h3>Vous voulez étendre un legacy en .NET, Python ou Java.</h3>
        <p>On code en Next.js + React. Si votre existant est dans une autre stack et qu'il faut
        l'étendre <b>en restant dessus</b>, on n'est pas la bonne équipe — on apprendrait
        sur votre projet, et c'est exactement ce qu'on s'interdit. On vous oriente vers
        des spécialistes par stack ; on a des contacts éprouvés à recommander selon le contexte.</p>
        <div class="nfy-redir">→ Spécialistes par stack, on partage des contacts éprouvés.</div>
      </div>
    </div>

    <div class="nfy-foot reveal">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      <span>Nous préférons <b>dire non</b> plutôt que mal livrer. C'est une règle, pas une posture.</span>
    </div>
  </div>
</section>

<!-- FAQ contre-objections -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— Contre-objections</div>
        <h2 style="margin-top:14px">Neuf objections<br>qu'on entend tout<br>le temps.</h2>
        <p>Les réponses honnêtes, pas les réponses commerciales. Manquante ? <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">Posez-la directement</a>.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <button type="button" class="faq-q" aria-expanded="true" aria-controls="faq-a-methode-1">
            Et si on veut ajouter du scope en cours de route ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-1">
            Tout ajout passe par un <b>avenant chiffré au forfait fixe</b>, signé avant que la moindre
            ligne de code ne soit écrite. Vous décidez si l'ajout vaut le coup. Le périmètre initial
            reste figé et le total contrôlable. Rien de nouveau ne doit être facturé sans acceptation écrite.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-methode-2">
            Vous êtes une équipe restreinte — qu'est-ce qui se passe si quelqu'un démissionne ou tombe malade ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-2" hidden>
            Le référent, les personnes mobilisées et le dispositif de continuité sont précisés au lancement.
            Les décisions et accès utiles sont documentés pour limiter la dépendance à une personne.
            En cas d'indisponibilité, nous informons le client et appliquons la procédure convenue au devis.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-methode-3">
            Vous bossez sur combien de projets en parallèle ? Suis-je une priorité ou un dossier dans la pile ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-3" hidden>
            La capacité disponible et la date réaliste de démarrage sont confirmées avant signature.
            Elles varient avec les missions en cours&nbsp;: nous ne publions donc ni quota permanent ni
            faux nombre de créneaux. Le devis nomme le référent et le rythme de suivi prévu.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-methode-4">
            Le forfait fixe pour un MVP, OK. Mais pour un projet à scope évolutif sur 6 mois ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-4" hidden>
            Bonne question. <b>Sprint Fixe marche bien sur des projets à périmètre cadrable</b>
            (MVP SaaS, refonte vitrine, outil interne défini). Pour un projet vraiment évolutif
            (R&amp;D, recherche utilisateur en continu, pivot fréquent), on bascule sur un
            <b>forfait de maintenance et d'évolutions mensuel, sur devis</b>&nbsp;: la capacité mensuelle,
            la durée d'engagement et le préavis sont fixés au contrat.
            <a href="/services/maintenance-evolution">Voir les formats de maintenance</a>. C'est plus
            adapté qu'un forfait fixe qui se réécrirait tous les mois.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-methode-5">
            Et si je suis en retard sur mes validations ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-5" hidden>
            Un retard de validation ou un élément manquant peut décaler le planning. Le délai de réponse,
            la procédure d'alerte, la suspension éventuelle et ses conséquences doivent être écrits dans
            le devis signé. Cette page n'ajoute ni pénalité ni frais automatiques.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-methode-6">
            Combien coûte un Sprint Fixe typique ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-6" hidden>
            <b>Tout est sur devis</b>. Chaque projet (site vitrine, outil interne, MVP SaaS, refonte
            e-commerce) est cadré et chiffré individuellement — la durée et le prix dépendent du
            périmètre, des intégrations et des ressources de votre côté. Le ticket d'entrée publié est
            de <b>6,9 k€</b> (site vitrine). <b>Au-delà de 8 k€, le Discovery Sprint à 1 500 € HT est un
            préalable systématique</b>&nbsp;: nous ne signons pas de forfait de ce niveau sans cadrage payé.
            En dessous, il est proposé lorsque le besoin exige un cadrage distinct.
            <a href="/tarifs">Détails complets sur la page tarifs</a>.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-methode-7">
            Vous codez sur quelle stack ? Et si on a déjà un existant en .NET / Node / Python ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-7" hidden>
            On code en <b>Next.js + React (TypeScript)</b> par défaut — c'est la stack qui nous fait gagner
            le plus de temps. On reprend aussi l'existant <b>Laravel/PHP</b> — audit, maintenance, évolutions.
            Si vous avez un existant en .NET / Node / Python qu'on devrait étendre,
            on vous le dit honnêtement : <b>on n'est pas la bonne équipe</b>, et on vous oriente vers
            des confrères spécialisés. En revanche, si vous voulez <b>ré-écrire from scratch</b> ou
            ajouter un outil nouveau à côté de votre existant, Next.js marche très bien — vos deux outils
            communiquent par API.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-methode-8">
            Et si Claude Code se trompe ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-8" hidden>
            Claude Code est un outil d'assistance. Un développeur reste responsable des choix,
            des tests et de la validation des changements avant leur intégration. L'outil ne réduit
            ni nos obligations contractuelles ni la nécessité d'une revue adaptée au risque.
          </div>
        </div>

        <div class="faq-item">
          <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-methode-9">
            Et si Hagnéré Code ferme ses portes ?
            <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
          </button>
          <div class="faq-a" id="faq-a-methode-9" hidden>
            La réversibilité prévue aux CGV organise la remise du code, des accès et de la documentation
            nécessaires à une reprise. Les livrables spécifiques sont transférés après paiement complet,
            sous réserve des composants tiers et préexistants. Le détail dépend du périmètre signé.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!--
  CLOTURE METHODE — budgets repères et prochaine étape.
  Ne PAS réintroduire le marqueur "CTA FINAL" ici : stripFinalCta()
  (src/components/design-shared/stripBody.ts) supprimerait la section entière
  au rendu, fourchettes comprises. Un test verrouille cet invariant.
-->
<section class="mfinal" id="cta-finale">
  <div class="mfinal-grid"></div>
  <div class="mfinal-radial"></div>

  <div class="wrap mfinal-inner">
    <div class="mfinal-tag">
      <span class="mfinal-tag-pill">PROCHAINE ÉTAPE</span>
      <span class="mfinal-tag-text">Discovery Sprint · 1 500 € · 2 jours</span>
    </div>

    <h2 class="mfinal-title">
      Vous avez lu Sprint Fixe<br>jusqu'au bout.<br>
      <span class="mfinal-accent">Cadrons votre projet.</span>
    </h2>

    <p class="mfinal-lead">
      30 minutes en visio pour comprendre votre besoin et vérifier si notre équipe est adaptée.
      Au-delà de 8 k€, le devis ferme est établi après le Discovery Sprint, dont le contenu, le
      calendrier et le prix sont proposés séparément.
      Aucune commande n'est créée par la simple prise de rendez-vous.
    </p>

    <div class="mfinal-cta">
      <a href="/rendez-vous" class="btn btn-accent btn-lg mfinal-btn">
        📅 Réserver 30 min sur Calendly
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a href="/tarifs" class="mfinal-btn-ghost">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 7h6M9 12h6M9 17h3"/></svg>
        Voir les fourchettes de prix
      </a>
      <a href="/legal/cgv" class="mfinal-btn-ghost">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>
        Lire les CGV publiques
      </a>
    </div>

    <div class="mfinal-fourchettes">
      <div class="mfinal-fourchette-h">EXEMPLES INDICATIFS · À RECALCULER APRÈS CADRAGE</div>
      <div class="mfinal-fourchette-grid">
        <div class="mfinal-fourchette">
          <div class="mfinal-fourchette-name">Site vitrine</div>
          <div class="mfinal-fourchette-price">6,9–14,9 k€</div>
          <div class="mfinal-fourchette-meta">3–20 pages · délai au devis</div>
        </div>
        <div class="mfinal-fourchette">
          <div class="mfinal-fourchette-name">Outil interne</div>
          <div class="mfinal-fourchette-price">8–50 k€</div>
          <div class="mfinal-fourchette-meta">process ciblé → CRM/ERP léger</div>
        </div>
        <div class="mfinal-fourchette mfinal-fourchette-hot">
          <div class="mfinal-fourchette-tag">EXEMPLE</div>
          <div class="mfinal-fourchette-name">MVP SaaS B2B</div>
          <div class="mfinal-fourchette-price">15–60 k€</div>
          <div class="mfinal-fourchette-meta">3–5 écrans → 10–15 écrans</div>
        </div>
        <div class="mfinal-fourchette">
          <div class="mfinal-fourchette-name">Refonte e-commerce</div>
          <div class="mfinal-fourchette-price">30–120 k€</div>
          <div class="mfinal-fourchette-meta">multi-canal → B2B multi-pays</div>
        </div>
      </div>
      <div class="mfinal-fourchette-foot">
        Repères repris de la <a href="/tarifs">grille tarifaire</a>, en euros HT. Le ticket d'entrée
        publié est de 6,9 k€&nbsp;; au-delà de 8 k€, le devis ferme est établi après le Discovery Sprint.
      </div>
    </div>

    <div class="mfinal-trust">
      <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Objectif : prochain jour ouvré</span>
      <span class="sep"></span>
      <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Par un expert · pas un commercial</span>
      <span class="sep"></span>
      <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Sans engagement</span>
    </div>
  </div>
</section>
`;
