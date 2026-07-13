import { navHtml } from "@/components/design-shared/nav-html";

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
        <span>MÉTHODE PROPRIÉTAIRE · SPRINT FIXE™</span>
      </div>
    </div>

    <div class="mhero-tag">
      <span class="mhero-tag-pill">SPRINT FIXE<span class="tm">™</span></span>
      <span class="mhero-tag-text">La méthode propriétaire de Hagnéré Code</span>
    </div>

    <h1 class="mhero-title">
      <span class="line mhero-kicker">Développement web au forfait fixe :</span>
      <span class="line">Le prix annoncé</span>
      <span class="line"><em>est</em> le prix payé.</span>
      <span class="line">La date annoncée</span>
      <span class="line"><em>est</em> la date livrée.</span>
      <span class="line accent">Ou chaque semaine de retard<br>vous est offerte.</span>
    </h1>

    <div class="mhero-bottom">
      <div class="mhero-creds">
        <div class="mhero-cred">
          <div class="mhero-cred-n">100<span class="mhero-cred-s">%</span></div>
          <div class="mhero-cred-l">Forfait initial<br>tenu sur les projets livrés.</div>
        </div>
        <div class="mhero-cred">
          <div class="mhero-cred-n">0<span class="mhero-cred-s"> €</span></div>
          <div class="mhero-cred-l">Pénalités de retard<br>versées à ce jour.</div>
        </div>
      </div>

      <div class="mhero-cta">
        <a href="#piliers" class="btn btn-accent btn-lg mhero-btn">
          Lire la méthode
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
        <a href="#contact" class="mhero-btn-ghost">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2 16 16 0 01-16-16z"/></svg>
          Réserver un cadrage
        </a>
      </div>
    </div>

    <div class="mhero-signature">
      <div class="mhero-sig-line">
        <span>SIGNÉ ·</span>
        <svg viewBox="0 0 280 60" preserveAspectRatio="xMinYMid meet" aria-hidden="true">
          <path d="M5 35 C 18 12, 30 50, 42 22 S 70 35, 88 28 S 125 18, 142 32 S 178 22, 195 30 S 232 12, 248 28 S 268 30, 275 25" stroke="#A78BFA" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.85"/>
        </svg>
        <span>QUENTIN HAGNÉRÉ · NICOLAS WALLERAND</span>
      </div>
      <div class="mhero-sig-meta">CHAMBÉRY · MISE À JOUR LE {{LAST_UPDATE}} · V.4.2</div>
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
      <li><a class="mtoc-link" href="#piliers" data-section="piliers"><span class="mtoc-num">2.0</span><span class="mtoc-t">Les 5 piliers contractuels</span></a></li>
      <li><a class="mtoc-link" href="#timeline" data-section="timeline"><span class="mtoc-num">3.0</span><span class="mtoc-t">Timeline d'un Sprint Fixe™</span></a></li>
      <li><a class="mtoc-link" href="#lagniappe" data-section="lagniappe"><span class="mtoc-num">4.0</span><span class="mtoc-t">La lagniappe</span></a></li>
      <li><a class="mtoc-link" href="#preuves" data-section="preuves"><span class="mtoc-num">5.0</span><span class="mtoc-t">Preuves chiffrées</span></a></li>
      <li><a class="mtoc-link" href="#journal" data-section="journal"><span class="mtoc-num">6.0</span><span class="mtoc-t">Journal du vendredi</span></a></li>
      <li><a class="mtoc-link" href="#claude" data-section="claude"><span class="mtoc-num">7.0</span><span class="mtoc-t">Claude Code en copilote</span></a></li>
      <li><a class="mtoc-link" href="#temoignages" data-section="temoignages"><span class="mtoc-num">8.0</span><span class="mtoc-t">Ce qu'en disent les clients</span></a></li>
      <li><a class="mtoc-link" href="#exclusion" data-section="exclusion"><span class="mtoc-num">9.0</span><span class="mtoc-t">Pas pour vous si…</span></a></li>
      <li><a class="mtoc-link" href="#faq" data-section="faq"><span class="mtoc-num">10.0</span><span class="mtoc-t">Contre-objections (FAQ)</span></a></li>
      <li><a class="mtoc-link" href="#contact" data-section="contact"><span class="mtoc-num">11.0</span><span class="mtoc-t">Cadrer votre projet</span></a></li>
    </ol>
    <div class="mtoc-foot">
      <span class="mtoc-foot-tag">SPRINT FIXE™ · v.4.2</span>
    </div>
  </div>
</aside>

<!-- L'ANTI-PATTERN -->
<section class="anti" id="anti-pattern">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on a essayé puis abandonné</div>
        <h2>Quatre pratiques courantes<br>qui nous ont fait perdre<br>des projets — <span class="strike-bad">avant Sprint Fixe™</span>.</h2>
      </div>
      <div class="right">
        On ne juge pas les agences qui les pratiquent (on en a fait partie).
        Mais à force de livrer des projets au forfait fixe, on a la conviction que ces quatre pratiques
        détruisent la confiance plus qu'elles ne servent le client. Voici nos conclusions.
      </div>
    </div>

    <div class="anti-grid">
      <div class="anti-card reveal">
        <div class="anti-broken">
          <span class="anti-x">×</span>
          <span class="anti-broken-label">CE QU'ON FAISAIT AVANT</span>
        </div>
        <h3 class="anti-bad">Régie au TJM extensible</h3>
        <p class="anti-bad-p">
          « 600 €/jour, on verra combien de jours ça prend. » Sur nos premiers projets,
          la dérive moyenne tournait à +35 %. C'est <em>nous</em> qui avions mal cadré, le client payait.
        </p>
        <div class="anti-divider"></div>
        <div class="anti-good">
          <span class="anti-check">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span class="anti-good-label">CE QU'ON FAIT MAINTENANT</span>
        </div>
        <h4 class="anti-good-h">Forfait fixe contractuel</h4>
        <p class="anti-good-p">
          Le devis vaut engagement. Si on dépasse, c'est notre problème, pas votre facture.
          On absorbe le risque de dérive — c'est notre métier de bien estimer.
        </p>
      </div>

      <div class="anti-card reveal reveal-d-1">
        <div class="anti-broken">
          <span class="anti-x">×</span>
          <span class="anti-broken-label">CE QU'ON FAISAIT AVANT</span>
        </div>
        <h3 class="anti-bad">Démo en fin de projet</h3>
        <p class="anti-bad-p">
          On disparaissait 3 mois et on revenait avec un livrable. Sur 4 projets,
          on a dû refaire 25-30 % du périmètre parce que le client découvrait trop tard
          que ce n'était pas ce qu'il avait imaginé.
        </p>
        <div class="anti-divider"></div>
        <div class="anti-good">
          <span class="anti-check">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span class="anti-good-label">CE QU'ON FAIT MAINTENANT</span>
        </div>
        <h4 class="anti-good-h">Démo chaque vendredi · 16 h</h4>
        <p class="anti-good-p">
          Vous voyez votre produit grandir semaine après semaine. Vous corrigez la trajectoire
          en temps réel, avant que ce soit coûteux. Pas de grande révélation finale.
        </p>
      </div>

      <div class="anti-card reveal reveal-d-2">
        <div class="anti-broken">
          <span class="anti-x">×</span>
          <span class="anti-broken-label">CE QU'ON FAISAIT AVANT</span>
        </div>
        <h3 class="anti-bad">Repo + hébergement chez nous</h3>
        <p class="anti-bad-p">
          On gardait la main « pour faciliter ». En réalité, ça créait un lock-in déguisé.
          Un client a mis 2 mois à récupérer son code chez un confrère. On s'est dit : plus jamais.
        </p>
        <div class="anti-divider"></div>
        <div class="anti-good">
          <span class="anti-check">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span class="anti-good-label">CE QU'ON FAIT MAINTENANT</span>
        </div>
        <h4 class="anti-good-h">Code &amp; data chez vous · J+1</h4>
        <p class="anti-good-p">
          Repo Git sur votre organisation GitHub dès le lendemain de la signature. Hébergement
          à votre nom. Documentation à jour. Si vous arrêtez demain, vous gardez tout.
        </p>
      </div>

      <div class="anti-card reveal reveal-d-3">
        <div class="anti-broken">
          <span class="anti-x">×</span>
          <span class="anti-broken-label">CE QU'ON FAISAIT AVANT</span>
        </div>
        <h3 class="anti-bad">Discovery « gratuit »</h3>
        <p class="anti-bad-p">
          On offrait un cadrage de 2-3 jours en avant-vente. Résultat : on sous-investissait
          sur les zones grises pour rester rentable. Les zones grises explosaient ensuite,
          en cours de projet.
        </p>
        <div class="anti-divider"></div>
        <div class="anti-good">
          <span class="anti-check">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          </span>
          <span class="anti-good-label">CE QU'ON FAIT MAINTENANT</span>
        </div>
        <h4 class="anti-good-h">Discovery payé · déduit</h4>
        <p class="anti-good-p">
          1 500 € pour 2 jours de cadrage sérieux. Vrais livrables (proto Figma, specs, devis ferme).
          Déduits à 100 % si phase 2. Si vous ne partez pas avec nous, vous gardez tout.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- LES 5 PILIERS SPRINT FIXE™ -->
<section class="piliers" id="piliers">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Les 5 piliers</div>
        <h2>Sprint Fixe™ tient<br>sur cinq piliers.<br><span class="grad-accent">Tous contractuels.</span></h2>
      </div>
      <div class="right">
        Pas de baratin marketing. Chacun de ces piliers est une <b>clause précise</b> de notre contrat type,
        que vous pouvez télécharger ci-dessous. Si un pilier saute, vous êtes en droit de
        rompre le contrat sans pénalité — et de récupérer tout le code livré jusqu'alors.
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
            <text x="104" y="22" text-anchor="middle" class="sk-mono-mute">déduit</text>
            <!-- Project box (bigger) -->
            <rect x="138" y="6" width="76" height="48" rx="6" fill="none" class="sk-stroke" stroke-width="1.5"/>
            <text x="176" y="22" text-anchor="middle" class="sk-mono">PHASE 2</text>
            <text x="176" y="34" text-anchor="middle" class="sk-mono-mute">30 000 €</text>
            <line x1="148" y1="40" x2="204" y2="40" class="sk-mute" stroke-width="1"/>
            <text x="176" y="50" text-anchor="middle" class="sk-mono-accent">−1 500 €</text>
          </svg>
        </div>
        <h3>Discovery payé, déduit</h3>
        <p>2 jours payés (1 500 €) pour transformer une idée floue en plan exécutable. Proto Figma + specs + devis ferme. Déduits à 100 % si phase 2.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">CLAUSE CONTRAT</span>
          <span class="pil-clause-t">« Le montant du Discovery Sprint (1 500 € HT) sera intégralement déduit du forfait de la phase 2 si celle-ci est engagée dans les 90 jours. »</span>
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
            <text x="50" y="16" class="sk-mono-mute">DEVIS · #2026-118</text>
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
        <h3>Forfait fixe, prix verrouillé</h3>
        <p>Le devis vaut engagement total. Tout ajout de scope passe par un avenant chiffré, signé avant développement. Aucun dépassement caché possible.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">CLAUSE CONTRAT</span>
          <span class="pil-clause-t">« Le prix du forfait est ferme et définitif. Toute évolution de périmètre fera l'objet d'un avenant écrit, chiffré et signé préalablement à sa réalisation. »</span>
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
            <text x="110" y="10" text-anchor="middle" class="sk-mono-mute">VENDREDI · 16 H</text>
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
        <h3>Démo client chaque vendredi</h3>
        <p>Toutes les semaines à 16 h, en visio, vous voyez votre produit prendre forme. Pas de longue absence. Vous redirigez la trajectoire avant que ce soit coûteux.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">CLAUSE CONTRAT</span>
          <span class="pil-clause-t">« Une démonstration hebdomadaire de l'avancement sera organisée chaque vendredi à 16 h. L'absence de démo deux semaines consécutives entraîne un avoir de 5 % du forfait. »</span>
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
            <!-- Tolerance zone (2 weeks free) -->
            <rect x="100" y="26" width="34" height="8" rx="1" fill="#16A34A" opacity="0.15"/>
            <text x="117" y="32.5" text-anchor="middle" font-family="Geist Mono" font-size="6.5" font-weight="600" fill="#16A34A">+14 j tolérés</text>
            <!-- Penalty zone (after) -->
            <rect x="134" y="26" width="68" height="8" rx="1" fill="#9A3412" opacity="0.18"/>
            <text x="168" y="32.5" text-anchor="middle" font-family="Geist Mono" font-size="6.5" font-weight="700" fill="#9A3412">−7 % / sem.</text>
            <!-- End mark -->
            <circle cx="202" cy="30" r="3" fill="#9A3412"/>
            <text x="202" y="46" text-anchor="middle" class="sk-mono-mute">SOLDE</text>
            <!-- Bottom note -->
            <text x="110" y="56" text-anchor="middle" class="sk-mono-mute">DÉPASSEMENT DÉDUIT DU SOLDE RESTANT</text>
          </svg>
        </div>
        <h3>Pénalité de retard contractuelle</h3>
        <p>Au-delà de 2 semaines de retard, chaque semaine supplémentaire est facturée 0 € et déduite du solde restant. Pas du marketing : <b>une vraie clause</b>.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">CLAUSE CONTRAT</span>
          <span class="pil-clause-t">« Au-delà de 14 jours calendaires de retard sur la date de livraison contractuelle, le client bénéficie d'un avoir hebdomadaire équivalent à 7 % du forfait, déductible du solde dû. »</span>
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
        <h3>Code &amp; données chez vous, J+1</h3>
        <p>Repo Git sur votre compte GitHub dès le lendemain de la signature. Hébergement à votre nom. Aucun lock-in. Si vous arrêtez demain, vous gardez tout.</p>
        <div class="pil-clause">
          <span class="pil-clause-h">CLAUSE CONTRAT</span>
          <span class="pil-clause-t">« La propriété intellectuelle du code source est cédée au client dès le premier paiement. L'accès au repository est ouvert sous 24 h ouvrées sur l'organisation Git désignée par le client. »</span>
        </div>
      </div>

      <div class="pil-download reveal reveal-d-1">
        <div class="pil-dl-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>
        </div>
        <div class="pil-dl-body">
          <div class="pil-dl-tag">CONTRAT TYPE · CGV</div>
          <h4>Lisez nos conditions avant de signer.</h4>
          <p>Notre contrat type Sprint Fixe™ (8 pages, juridiquement validé) est public.
          Téléchargez-le, faites-le relire par votre juriste, posez-nous toutes les questions
          avant de vous engager.</p>
          <a href="#contact" class="btn btn-ghost btn-dl">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Demander le contrat type (PDF)
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LA TIMELINE D'UN SPRINT FIXE™ -->
<section class="timeline" id="timeline">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— La timeline</div>
        <h2>À quoi ressemble<br>un Sprint Fixe™ semaine<br>par semaine ?</h2>
      </div>
      <div class="right">
        Exemple concret pour un MVP SaaS de 30 k€ livré en <b>6 semaines</b>.
        Toutes les dates et durées sont fixées au cadrage et inscrites au contrat.
        Vous savez exactement où vous en êtes à chaque jour J.
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
          <h4>Cadrage métier &amp; technique</h4>
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
        <span class="tl-gap-tag">SIGNATURE · ACOMPTE 30 %</span>
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
          <h4>Setup &amp; design system</h4>
          <p>Repo Git créé sur votre organisation. Setup Next.js + base de données + design system Tailwind. Les premiers écrans Figma deviennent des composants codés.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">🔐 Repo Git ouvert J+1</span>
            <span class="tl-deliv-item">⚙️ Stack opérationnelle</span>
            <span class="tl-deliv-item">🎨 Design system codé</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            DÉMO VENDREDI 16 H · les premiers écrans cliquables
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
          <h4>Authentification &amp; espaces utilisateurs</h4>
          <p>Login, signup, reset password, gestion des rôles &amp; permissions. Espaces utilisateurs personnalisés. Tests unitaires en parallèle.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">🔑 Auth complète</span>
            <span class="tl-deliv-item">👥 Rôles &amp; permissions</span>
            <span class="tl-deliv-item">🧪 Tests unitaires</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            DÉMO VENDREDI 16 H · login fonctionnel, vous testez en direct
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
          <h4>Features métier · cœur du produit</h4>
          <p>Les écrans qui font la valeur du produit. Workflows métier, formulaires complexes, dashboards. <b>C'est là qu'on annonce la lagniappe</b> : la feature bonus identifiée par l'équipe à mi-parcours.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">⚡ Features cœur</span>
            <span class="tl-deliv-item">📊 Dashboards</span>
            <span class="tl-deliv-item">🎁 Lagniappe annoncée</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            DÉMO VENDREDI 16 H · le produit prend vraiment forme
          </div>
        </div>
      </div>

      <div class="tl-gap mid">
        <div class="tl-gap-line"></div>
        <span class="tl-gap-tag">JALON MI-PARCOURS · ACOMPTE 30 %</span>
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
          <h4>Intégrations tierces &amp; agents IA</h4>
          <p>Stripe pour la facturation, Pennylane pour la compta, agents Claude pour l'automatisation. Webhooks, queues, retry logic, monitoring Sentry.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">💳 Stripe + facturation</span>
            <span class="tl-deliv-item">🤖 Agents IA</span>
            <span class="tl-deliv-item">📡 Webhooks &amp; queues</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            DÉMO VENDREDI 16 H · paiements + IA en live
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
          <h4>QA, sécurité, RGPD</h4>
          <p>Audit OWASP, conformité RGPD, CGV/CGU, registre des traitements, DPA. Tests E2E automatisés. Pré-recette interne, dernier passage code review CTO.</p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">🛡️ Audit sécurité</span>
            <span class="tl-deliv-item">📜 RGPD complet</span>
            <span class="tl-deliv-item">✅ Tests E2E verts</span>
          </div>
          <div class="tl-friday">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            DÉMO VENDREDI 16 H · UAT pré-prod, vous validez
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
          <h4>Mise en production &amp; formation</h4>
          <p>Déploiement zero-downtime sur votre infrastructure. Formation de vos équipes (4 h incluses). Documentation, runbook ops, schéma archi remis. <b>Garantie 30 j déclenche.</b></p>
          <div class="tl-deliv">
            <span class="tl-deliv-item">🚀 Mise en prod</span>
            <span class="tl-deliv-item">🎓 Formation équipe</span>
            <span class="tl-deliv-item">📚 Docs &amp; runbook</span>
            <span class="tl-deliv-item">🛡️ Garantie 30 j ON</span>
          </div>
          <div class="tl-friday tl-friday-final">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            LIVRAISON CONTRACTUELLE · ACOMPTE 40 % · GARANTIE ENGAGÉE
          </div>
        </div>
      </div>

      <div class="tl-after">
        <div class="tl-after-grid">
          <div class="tl-after-card">
            <div class="tl-after-h">J+30 · FIN GARANTIE</div>
            <div class="tl-after-t">Tout bug critique corrigé gratuit. Bilan post-launch.</div>
          </div>
          <div class="tl-after-card">
            <div class="tl-after-h">J+30 → ∞ · CARE</div>
            <div class="tl-after-t">Forfait Care mensuel optionnel ou autonomie complète.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LE CHOCOLATE -->
<section class="chocolate" id="lagniappe">
  <div class="wrap">
    <div class="choc-card reveal">
      <div class="choc-bg-grid"></div>
      <div class="choc-bg-radial"></div>

      <div class="choc-left">
        <div class="choc-tag">
          <span>SIGNATURE</span>
          <span>« La Lagniappe » · le petit cadeau en plus</span>
        </div>
        <h2>À mi-parcours,<br>on vous offre une feature<br><span class="choc-accent">qu'on a vu manquer.</span></h2>
        <p class="choc-lead">
          <em>Lagniappe</em> (n.f., du cajun-créole) : <b>un petit cadeau ajouté à un achat,
          sans que le client le demande</b>. Notre rituel : à mi-parcours, l'équipe identifie une feature
          qui rendrait votre produit meilleur — hors périmètre signé — et la livre en bonus.
          Pas un placeholder. Une vraie feature pensée et exécutée. Sans la facturer.
        </p>

        <div class="choc-bullets">
          <div class="choc-bullet">
            <div class="choc-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>Annoncée en démo de la semaine 3</b><br>
              <span>Quand on a assez de contexte pour proposer du juste.</span>
            </div>
          </div>
          <div class="choc-bullet">
            <div class="choc-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>Livrée sur la quasi-totalité de nos projets</b><br>
              <span>Seuls les projets très courts (&lt; 3 sem.) n'ont pas eu de lagniappe.</span>
            </div>
          </div>
          <div class="choc-bullet">
            <div class="choc-bullet-ic">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            </div>
            <div>
              <b>+2 à 5 jours de boulot</b><br>
              <span>Jamais facturés. C'est notre cadeau de fin de parcours.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="choc-right">
        <div class="choc-examples-h">DERNIÈRES « LAGNIAPPES » LIVRÉES</div>

        <div class="choc-example">
          <div class="choc-example-icon">🤖</div>
          <div class="choc-example-body">
            <div class="choc-example-project">SaaS comptabilité immobilière</div>
            <div class="choc-example-feat">Agent IA d'export CSV vers FEC EDI bancaire</div>
            <div class="choc-example-impact">+2 jours · économie 4 h/mois pour l'expert-comptable</div>
          </div>
        </div>

        <div class="choc-example">
          <div class="choc-example-icon">⚡</div>
          <div class="choc-example-body">
            <div class="choc-example-project">Plateforme RH</div>
            <div class="choc-example-feat">Mode dark + raccourcis clavier (cmd+K palette)</div>
            <div class="choc-example-impact">+3 jours · adoption RH +40 % la première semaine</div>
          </div>
        </div>

        <div class="choc-example">
          <div class="choc-example-icon">📊</div>
          <div class="choc-example-body">
            <div class="choc-example-project">Marketplace B2B</div>
            <div class="choc-example-feat">Dashboard d'export Excel multi-feuilles avec graphs</div>
            <div class="choc-example-impact">+4 jours · feature reportée en V2 → livrée en V1</div>
          </div>
        </div>

        <div class="choc-example">
          <div class="choc-example-icon">🔔</div>
          <div class="choc-example-body">
            <div class="choc-example-project">Outil interne logistique</div>
            <div class="choc-example-feat">Notifications Slack en temps réel sur stocks bas</div>
            <div class="choc-example-impact">+2 jours · −80 % de ruptures de stock le mois suivant</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- COMPTEUR PUBLIC (preuves chiffrées) -->
<section class="proof" id="preuves">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— La preuve par les chiffres</div>
        <h2>Sprint Fixe™ tient<br>ses promesses.<br><span class="grad-accent">Vérifiable.</span></h2>
      </div>
      <div class="right">
        Métriques publiques, mises à jour à chaque livraison de projet. Si demain on rate
        une promesse, le compteur le montrera — pas de communication contrôlée. Notre
        crédibilité tient à cette transparence.
      </div>
    </div>

    <div class="proof-grid">
      <div class="proof-card reveal">
        <div class="proof-meta">PROMESSE · BUDGET</div>
        <div class="proof-n">100<span class="proof-s">%</span></div>
        <div class="proof-l">Forfait initial <b>tenu sur les projets livrés</b>.</div>
        <div class="proof-bar">
          <div class="proof-bar-fill" style="width:100%"></div>
        </div>
        <div class="proof-since">Quand le scope dérape côté client, l'écart est absorbé à notre charge — pas facturé.</div>
      </div>

      <div class="proof-card proof-zero reveal reveal-d-1">
        <div class="proof-meta">PROMESSE · RETARD</div>
        <div class="proof-n">0<span class="proof-s"> €</span></div>
        <div class="proof-l"><b>Pénalités de retard versées</b> depuis le lancement.</div>
        <div class="proof-bar">
          <div class="proof-bar-fill proof-bar-fill-zero" style="width:0%"></div>
        </div>
        <div class="proof-since">Clause active sur tous nos contrats</div>
      </div>

      <div class="proof-card reveal reveal-d-2">
        <div class="proof-meta">PROMESSE · DÉMOS</div>
        <div class="proof-n">51<span class="proof-s">/52</span></div>
        <div class="proof-l">Démos hebdo <b>tenues comme prévu</b> en 2025.</div>
        <div class="proof-bar">
          <div class="proof-bar-fill" style="width:98%"></div>
        </div>
        <div class="proof-since">1 reportée (mariage d'un dev) · rattrapée le lundi</div>
      </div>

      <div class="proof-card reveal reveal-d-3">
        <div class="proof-meta">PROMESSE · J+1</div>
        <div class="proof-n">100<span class="proof-s">%</span></div>
        <div class="proof-l">Repo Git <b>ouvert chez vous dès J+1</b>.</div>
        <div class="proof-bar">
          <div class="proof-bar-fill" style="width:100%"></div>
        </div>
        <div class="proof-since">Aucune licence, aucun lock-in, aucun avenant gratté.</div>
      </div>

    </div>

    <div class="proof-foot reveal">
      <div class="proof-foot-ic">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
      <span>Compteur mis à jour <b>après chaque livraison</b>. Quand on ratera une promesse, ce sera affiché ici — pas un trophée, un journal de bord. Pour vérifier une métrique, <a href="mailto:quentin@hagnere-patrimoine.fr?subject=Demande%20historique%20m%C3%A9triques">demandez-nous l'historique brut</a>.</span>
    </div>
  </div>
</section>

<!-- JOURNAL DU VENDREDI -->
<section class="friday" id="journal">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Le journal du vendredi</div>
        <h2>Cinq démos récentes.<br>Anonymisées.<br><span class="grad-accent">Mais réelles.</span></h2>
      </div>
      <div class="right">
        Chaque vendredi à 16 h, on fait une démo en visio à chaque client actif.
        Voici, anonymisées, cinq démos issues de notre journal de bord (extrait sur
        une période récente). Si vous voulez creuser un cas précis, on vous met en
        relation avec le client concerné (avec son accord). Pour le journal complet
        à jour, <a href="mailto:quentin@hagnere-patrimoine.fr?subject=Journal%20du%20vendredi%20-%20demande%20d%27acc%C3%A8s">demandez-nous l'accès</a>.
      </div>
    </div>

    <div class="fri-list reveal">
      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">18</div>
          <div class="fri-date-m">AVR</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-saas">SAAS B2B</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 4 / 6</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">28 min de démo</span>
          </div>
          <h4>Plateforme de gestion d'événements RH</h4>
          <p>Live demo des notifications email + Slack temps-réel sur changement de statut. Validation client OK, on passe en QA semaine 5. <b>Lagniappe annoncée :</b> dashboard mobile responsive optimisé tablette.</p>
        </div>
        <div class="fri-status">
          <span class="fri-status-dot"></span>
          ON TRACK
        </div>
      </div>

      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">11</div>
          <div class="fri-date-m">AVR</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-internal">OUTIL INTERNE</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 6 / 6 · LIVRAISON</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">52 min de démo</span>
          </div>
          <h4>Back-office logistique multi-sites (livraison)</h4>
          <p>Démo de mise en production. Formation des 14 utilisateurs en parallèle. Garantie 30 j enclenchée. Care+ activé pour 12 mois.</p>
        </div>
        <div class="fri-status fri-status-done">
          <span class="fri-status-dot"></span>
          LIVRÉ
        </div>
      </div>

      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">04</div>
          <div class="fri-date-m">AVR</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-vitrine">SITE VITRINE</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 2 / 3</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">18 min de démo</span>
          </div>
          <h4>Refonte d'un site cabinet patrimoine</h4>
          <p>Présentation des 12 pages développées, animations fluides, images optimisées (Lighthouse 99/96). <b>Lagniappe :</b> simulateur de fiscalité ajouté gratuitement.</p>
        </div>
        <div class="fri-status">
          <span class="fri-status-dot"></span>
          ON TRACK
        </div>
      </div>

      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">28</div>
          <div class="fri-date-m">MAR</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-saas">SAAS B2C</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 8 / 10</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">40 min de démo</span>
          </div>
          <h4>App de comptabilité immobilière (LMNP)</h4>
          <p>Intégration de l'EDI à la DGFiP validée — c'est le gros morceau. Pré-prod accessible aux 50 beta-testeurs. Bug Stripe découvert en démo, corrigé sous 2 h.</p>
        </div>
        <div class="fri-status">
          <span class="fri-status-dot"></span>
          ON TRACK
        </div>
      </div>

      <div class="fri-row">
        <div class="fri-date">
          <div class="fri-date-d">21</div>
          <div class="fri-date-m">MAR</div>
        </div>
        <div class="fri-body">
          <div class="fri-meta">
            <span class="fri-tag fri-tag-ecom">E-COMMERCE</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-week">SEMAINE 5 / 8</span>
            <span class="fri-meta-sep">·</span>
            <span class="fri-meta-dur">35 min de démo</span>
          </div>
          <h4>Boutique Shopify Plus marque outdoor</h4>
          <p>Tunnel de paiement custom validé, intégration ERP en cours. Décision client en démo : on retire la fonctionnalité « bundle » trop complexe. <b>Économie 6 j de dev</b>, scope ajusté.</p>
        </div>
        <div class="fri-status fri-status-warn">
          <span class="fri-status-dot"></span>
          ARBITRAGE
        </div>
      </div>
    </div>

    <div class="fri-cta reveal">
      <div class="fri-cta-ic">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div class="fri-cta-body">
        <b>Vous voulez voir une démo en direct ?</b>
        <span>On vous invite gratuitement à une démo client réelle (avec leur accord) pour que vous voyiez la méthode en action avant de signer.</span>
      </div>
      <a href="#contact" class="btn btn-ghost">
        Assister à une démo
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
        <h3>Un gérant qui code, 3 CDI full-stack<br>+ 3 freelances long-terme,<br><span class="accent">Claude Code en copilote.</span></h3>
        <p class="claude-lead">
          Beaucoup d'agences brandissent l'IA comme un argument marketing. Chez nous, c'est un
          outil de productivité opéré par chaque dev senior — recherche de doc, exploration de bibliothèques,
          plans d'implémentation, génération de tests, doc technique. <b>Moins de boilerplate,
          plus de réflexion produit.</b> Et le code commit reste 100 % revu par un humain.
        </p>

        <div class="claude-rules">
          <div class="claude-rule">
            <div class="claude-rule-num">RÈGLE 01</div>
            <h4>Claude défriche, le dev tranche</h4>
            <p>L'IA explore les options techniques, propose des plans. Le dev valide, ajuste, tranche. Jamais l'inverse.</p>
          </div>
          <div class="claude-rule">
            <div class="claude-rule-num">RÈGLE 02</div>
            <h4>Code review humaine systématique</h4>
            <p>Chaque PR (générée par Claude ou non) est reviewée par un dev senior. Le CTO valide les choix architecturaux.</p>
          </div>
          <div class="claude-rule">
            <div class="claude-rule-num">RÈGLE 03</div>
            <h4>Vous ne payez pas l'IA, vous bénéficiez du gain</h4>
            <p>Notre marge sur les outils IA est nulle pour vous. Le gain de productivité = délais courts à coût équivalent.</p>
          </div>
        </div>
      </div>

      <div class="claude-right">
        <div class="claude-stat">
          <div class="claude-stat-row">
            <svg viewBox="0 0 512 512" fill="#D97757" aria-hidden="true" width="32" height="32"><path d="M301.86 65h70.94l129.4 382h-70.93l-26.48-81.3H269.2l-26.48 81.3h-70.94L301.86 65zm-11.96 240h94.86l-47.43-145.7L289.9 305z"/></svg>
            <span class="claude-stat-cred">NOTRE CONSTAT INTERNE</span>
          </div>
          <div class="claude-stat-n">−1<span> sem.</span></div>
          <div class="claude-stat-l">Gain moyen mesuré sur un MVP de 6 semaines (vs cycle pré-Claude).</div>
        </div>
        <div class="claude-stat">
          <div class="claude-stat-row">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span class="claude-stat-cred">DISCOVERY SPRINT</span>
          </div>
          <div class="claude-stat-n">−4<span> h</span></div>
          <div class="claude-stat-l">Temps gagné en moyenne sur les phases de recherche.</div>
        </div>
        <div class="claude-stat">
          <div class="claude-stat-row">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span class="claude-stat-cred">CODE REVIEW HUMAINE</span>
          </div>
          <div class="claude-stat-n">100<span>%</span></div>
          <div class="claude-stat-l">Lignes commit reviewées par un dev senior.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TÉMOIGNAGES CLIENTS (quote wall) -->
<section class="quotes" id="temoignages">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'en disent les clients</div>
        <h2>Sprint Fixe™ vu<br>de l'autre côté du contrat.</h2>
      </div>
      <div class="right">
        Quatre clients qui ont vécu Sprint Fixe™ en conditions réelles. Pas des extraits choisis :
        des passages bruts d'emails post-livraison ou de retros. Si vous voulez les contacter pour
        en discuter, on vous met en relation — avec leur accord.
      </div>
    </div>

    <div class="quotes-grid reveal">
      <figure class="quote-card quote-featured">
        <div class="quote-mark">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 2C7 2 5 4 5 6.5v3c0 2.5 2 4.5 4.5 4.5H10v3c0 1-1 2-2 2v2c3 0 5-2 5-5V6.5C13 4 11 2 8.5 2H9.4zM19.4 2C17 2 15 4 15 6.5v3c0 2.5 2 4.5 4.5 4.5H20v3c0 1-1 2-2 2v2c3 0 5-2 5-5V6.5C23 4 21 2 18.5 2h.9z"/></svg>
        </div>
        <blockquote>
          On a signé chez vous parce que vous étiez les seuls à mettre une <em>vraie pénalité</em>
          dans le contrat. À la livraison, on s'est rendu compte que le contrat servait à
          <em>vous obliger à bien estimer</em>, pas à nous protéger contre vous. C'est exactement
          la promesse, tenue.
        </blockquote>
        <figcaption class="quote-meta">
          <div class="quote-avatar quote-avatar-1">JD</div>
          <div class="quote-meta-body">
            <div class="quote-meta-name">Julien D.</div>
            <div class="quote-meta-role">Directeur des opérations · groupe immobilier 90 salariés</div>
          </div>
          <div class="quote-context">
            <span class="quote-context-tag">PROJET 38 K€</span>
            <span class="quote-context-meta">Outil interne · livré sem. 5 sur 5</span>
          </div>
        </figcaption>
      </figure>

      <figure class="quote-card">
        <div class="quote-mark">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 2C7 2 5 4 5 6.5v3c0 2.5 2 4.5 4.5 4.5H10v3c0 1-1 2-2 2v2c3 0 5-2 5-5V6.5C13 4 11 2 8.5 2H9.4zM19.4 2C17 2 15 4 15 6.5v3c0 2.5 2 4.5 4.5 4.5H20v3c0 1-1 2-2 2v2c3 0 5-2 5-5V6.5C23 4 21 2 18.5 2h.9z"/></svg>
        </div>
        <blockquote>
          La démo du vendredi, on l'a d'abord trouvée chronophage. Au sprint 4, on s'est rendu
          compte qu'on avait redirigé 3 fois la roadmap en 3 semaines. Sans démos, on payait un
          MVP qu'on n'aurait pas voulu.
        </blockquote>
        <figcaption class="quote-meta">
          <div class="quote-avatar quote-avatar-2">SM</div>
          <div class="quote-meta-body">
            <div class="quote-meta-name">Sophie M.</div>
            <div class="quote-meta-role">CEO · SaaS RH 12 salariés</div>
          </div>
          <div class="quote-context">
            <span class="quote-context-tag">PROJET 52 K€</span>
            <span class="quote-context-meta">SaaS B2B · livré sem. 8 sur 8</span>
          </div>
        </figcaption>
      </figure>

      <figure class="quote-card">
        <div class="quote-mark">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 2C7 2 5 4 5 6.5v3c0 2.5 2 4.5 4.5 4.5H10v3c0 1-1 2-2 2v2c3 0 5-2 5-5V6.5C13 4 11 2 8.5 2H9.4zM19.4 2C17 2 15 4 15 6.5v3c0 2.5 2 4.5 4.5 4.5H20v3c0 1-1 2-2 2v2c3 0 5-2 5-5V6.5C23 4 21 2 18.5 2h.9z"/></svg>
        </div>
        <blockquote>
          Le truc bizarre : ils nous ont <em>refusé</em> le projet la première fois, parce que notre
          scope était flou. Ils nous ont fait revenir 6 semaines plus tard avec un cadrage clair.
          Aucune autre agence n'aurait fait ça.
        </blockquote>
        <figcaption class="quote-meta">
          <div class="quote-avatar quote-avatar-3">TL</div>
          <div class="quote-meta-body">
            <div class="quote-meta-name">Thomas L.</div>
            <div class="quote-meta-role">Fondateur · marketplace B2B agroalimentaire</div>
          </div>
          <div class="quote-context">
            <span class="quote-context-tag">PROJET 67 K€</span>
            <span class="quote-context-meta">Marketplace · refusé puis accepté</span>
          </div>
        </figcaption>
      </figure>

      <figure class="quote-card">
        <div class="quote-mark">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 2C7 2 5 4 5 6.5v3c0 2.5 2 4.5 4.5 4.5H10v3c0 1-1 2-2 2v2c3 0 5-2 5-5V6.5C13 4 11 2 8.5 2H9.4zM19.4 2C17 2 15 4 15 6.5v3c0 2.5 2 4.5 4.5 4.5H20v3c0 1-1 2-2 2v2c3 0 5-2 5-5V6.5C23 4 21 2 18.5 2h.9z"/></svg>
        </div>
        <blockquote>
          La lagniappe annoncée semaine 3 : un export FEC bancaire pour notre expert-comptable.
          Pas demandée, pas facturée, livrée. Ça a fait gagner 4 h/mois à notre cabinet —
          plus rentable que la moitié des features qu'on avait spécifiées.
        </blockquote>
        <figcaption class="quote-meta">
          <div class="quote-avatar quote-avatar-4">CG</div>
          <div class="quote-meta-body">
            <div class="quote-meta-name">Camille G.</div>
            <div class="quote-meta-role">CFO · cabinet patrimoine 25 salariés</div>
          </div>
          <div class="quote-context">
            <span class="quote-context-tag">PROJET 24 K€</span>
            <span class="quote-context-meta">SaaS comptabilité · livré dans le budget</span>
          </div>
        </figcaption>
      </figure>
    </div>

    <div class="quotes-foot reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
      <span>Témoignages anonymisés (initiales + secteur). <b>Mise en relation possible</b> avec n'importe lequel sur demande, avec leur accord préalable.</span>
    </div>
  </div>
</section>

<!-- PAS POUR VOUS SI… (anti-clients explicite) -->
<section class="not-for-you" id="exclusion">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Honnêteté commerciale</div>
        <h2>Sprint Fixe™ <span class="strike-bad">n'est pas</span><br>la bonne réponse pour vous<br>dans ces 4 cas.</h2>
      </div>
      <div class="right">
        On a refusé 6 projets sur 29 demandes en 2025. Pas par confort — par honnêteté.
        Si vous reconnaissez votre situation ci-dessous, on vous oriente <b>gratuitement</b>
        vers une équipe mieux adaptée. C'est plus utile pour vous, et ça nous évite un projet
        qu'on n'aurait pas livré dans les conditions promises.
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
        <h3>Votre projet fait moins de 8 k€.</h3>
        <p>Notre coût d'opération minimal sur un projet (cadrage, démos, garantie 30 j, doc, formation)
        rend non-rentable un forfait inférieur à 8 k€. <b>Ce n'est pas que ça ne nous intéresse pas —
        c'est qu'on perdrait votre confiance en bâclant.</b> On vous oriente vers une plateforme
        de freelances seniors avec laquelle ça marchera mieux pour ce périmètre.</p>
        <div class="nfy-redir">→ Plateforme de freelances seniors pour les missions courtes.</div>
      </div>

      <div class="nfy-card reveal reveal-d-2">
        <div class="nfy-num">CAS 03</div>
        <h3>Vous voulez du temps &amp; matériel (régie / TJM).</h3>
        <p>Sprint Fixe™, c'est l'inverse de la régie. Si votre process interne <b>nécessite</b> des feuilles
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
      <span>On a refusé <b>6 projets sur 29 demandes</b> en 2025. Préférer dire non que mal livrer.</span>
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
          <div class="faq-q">
            Et si on veut ajouter du scope en cours de route ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Tout ajout passe par un <b>avenant chiffré au forfait fixe</b>, signé avant que la moindre
            ligne de code ne soit écrite. Vous décidez si l'ajout vaut le coup. Le périmètre initial
            reste figé, le total reste contrôlé. <b>On n'a jamais facturé d'avenant non-signé.</b>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous êtes une équipe restreinte — qu'est-ce qui se passe si quelqu'un démissionne ou tombe malade ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            On a un <b>bus factor de 2 minimum</b> sur chaque projet : un dev référent + un binôme qui
            connaît le contexte et peut prendre le relais en 24 h. Tout passe par notre repo Git, notre
            Linear et notre runbook documenté — aucune info critique ne reste dans la tête d'une seule
            personne. Si un dev est indisponible &gt; 1 semaine, on prévient, on bascule, et la date de
            livraison reste celle du contrat. La clause de pénalité de retard s'applique à <b>nous</b>,
            pas à vos imprévus de RH.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous bossez sur combien de projets en parallèle ? Suis-je une priorité ou un dossier dans la pile ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            On limite volontairement à <b>3 projets actifs en parallèle</b> sur l'équipe tech (1 par binôme).
            C'est ce qui nous permet de tenir les démos vendredi sans contexte switching destructeur.
            Si on est en flux tendu, on vous le dit en cadrage et on vous propose une date de démarrage
            décalée — jamais on ne signe un projet qu'on ne peut pas honorer dans les délais. <b>2 créneaux
            ouverts pour le prochain trimestre.</b>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Le forfait fixe pour un MVP, OK. Mais pour un projet à scope évolutif sur 6 mois ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Bonne question. <b>Sprint Fixe™ marche bien sur des projets à périmètre cadrable</b>
            (MVP SaaS, refonte vitrine, outil interne défini). Pour un projet vraiment évolutif
            (R&amp;D, recherche utilisateur en continu, pivot fréquent), on bascule sur un forfait
            <b>Care+ mensuel, sur devis</b> — 8 h d'évolutions par mois (cumulables), sans engagement
            de durée, préavis d'un mois. C'est plus adapté qu'un forfait fixe
            qui se réécrirait tous les mois.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Et si MOI je suis en retard sur mes validations ? Ça décale la pénalité ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Oui, et c'est cadré dans le contrat. <b>Toute attente de validation client &gt; 5 jours
            ouvrés décale d'autant la date de livraison contractuelle</b> (clause type "delay of game").
            On vous prévient par email à J+3 sans réponse. Si vous êtes silencieux 2 semaines, le projet
            est mis en pause facturée (50 €/jour) jusqu'à reprise. Honnête : on ne peut pas tenir
            un délai sur lequel on n'a pas la main.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Combien coûte un Sprint Fixe™ typique ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Tout est sur devis</b>. Chaque projet (site vitrine, outil interne, MVP SaaS, refonte
            e-commerce) est cadré et chiffré individuellement — la durée et le prix dépendent du
            périmètre, des intégrations, des ressources de votre côté. Le <b>Discovery Sprint à
            1 500 €</b> est obligatoire pour tout projet engagé : il transforme votre besoin en
            devis ferme à un chiffre unique. <a href="/tarifs">Détails complets sur la page tarifs</a>.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous codez sur quelle stack ? Et si on a déjà un existant en .NET / Node / Python ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
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
          <div class="faq-q">
            Et si Claude Code se trompe ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le code généré ou suggéré par Claude est revu à <b>100 % par un dev humain senior</b>
            avant le commit, puis re-revu en code review systématique avant le merge.
            Claude est un assistant qui défriche, pas un dev qui commit. Si un bug en prod
            est imputable à Claude, il est imputable à nous, point.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Et si Hagnéré Code ferme ses portes ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Vous gardez tout :</b> repo Git sur votre compte dès J+1, hébergement à votre nom,
            documentation à jour, runbook ops complet. N'importe quelle équipe React/Next.js
            peut reprendre votre projet en moins de 5 jours. Pas de lock-in technique,
            pas de royalties, pas de dépendance. C'est pour ça qu'on impose le pilier #5.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA FINAL — passage à l'acte -->
<section class="mfinal" id="cta-finale">
  <div class="mfinal-grid"></div>
  <div class="mfinal-radial"></div>

  <div class="wrap mfinal-inner">
    <div class="mfinal-tag">
      <span class="mfinal-tag-pill">PROCHAINE ÉTAPE</span>
      <span class="mfinal-tag-text">Discovery Sprint · 1 500 € · 2 jours</span>
    </div>

    <h2 class="mfinal-title">
      Vous avez lu Sprint Fixe™<br>jusqu'au bout.<br>
      <span class="mfinal-accent">Cadrons votre projet.</span>
    </h2>

    <p class="mfinal-lead">
      30 minutes en visio avec quelqu'un qui code. On comprend votre besoin, on vous dit honnêtement
      si on est la bonne équipe. Si oui, on enchaîne sur un Discovery Sprint payé 2 jours plus tard.
      <b>Si non, on vous oriente — gratuitement — vers la bonne équipe.</b>
    </p>

    <div class="mfinal-cta">
      <a href="#contact" class="btn btn-accent btn-lg mfinal-btn">
        📅 Réserver 30 min sur Calendly
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a href="/tarifs" class="mfinal-btn-ghost">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 7h6M9 12h6M9 17h3"/></svg>
        Voir les fourchettes de prix
      </a>
      <a href="mailto:quentin@hagnere-patrimoine.fr?subject=Demande%20du%20contrat%20type%20Sprint%20Fixe" class="mfinal-btn-ghost">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/></svg>
        Demander le contrat type
      </a>
    </div>

    <div class="mfinal-fourchettes">
      <div class="mfinal-fourchette-h">FOURCHETTES TYPIQUES SPRINT FIXE™</div>
      <div class="mfinal-fourchette-grid">
        <div class="mfinal-fourchette">
          <div class="mfinal-fourchette-name">Site vitrine 6 pages</div>
          <div class="mfinal-fourchette-price">6–12 k€</div>
          <div class="mfinal-fourchette-meta">3 semaines</div>
        </div>
        <div class="mfinal-fourchette">
          <div class="mfinal-fourchette-name">Outil interne complet</div>
          <div class="mfinal-fourchette-price">15–30 k€</div>
          <div class="mfinal-fourchette-meta">5 semaines</div>
        </div>
        <div class="mfinal-fourchette mfinal-fourchette-hot">
          <div class="mfinal-fourchette-tag">LE PLUS CHOISI</div>
          <div class="mfinal-fourchette-name">MVP SaaS B2B</div>
          <div class="mfinal-fourchette-price">25–50 k€</div>
          <div class="mfinal-fourchette-meta">6 semaines</div>
        </div>
        <div class="mfinal-fourchette">
          <div class="mfinal-fourchette-name">Refonte e-commerce Plus</div>
          <div class="mfinal-fourchette-price">30–60 k€</div>
          <div class="mfinal-fourchette-meta">8 semaines</div>
        </div>
      </div>
    </div>

    <div class="mfinal-trust">
      <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Réponse sous 24 h ouvrées</span>
      <span class="sep"></span>
      <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Par un expert · pas un commercial</span>
      <span class="sep"></span>
      <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Sans engagement</span>
    </div>
  </div>
</section>
`;
