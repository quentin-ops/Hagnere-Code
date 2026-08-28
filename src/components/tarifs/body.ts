import { navHtml } from "@/components/design-shared/nav-html";

export const bodyHtml = `
${navHtml}
<!-- BREADCRUMB -->
<div class="wrap">
  <div class="crumb">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <span style="color:var(--ink-3)">Tarifs</span>
  </div>
</div>

<!-- HERO -->
<section class="thero">
  <div class="thero-grid"></div>
  <div class="thero-radial"></div>
  <div class="wrap thero-inner">
    <div class="thero-copy">
      <div class="thero-eyebrow"><span class="pill"><span class="dot"></span> Tarifs · <b style="color:var(--ink);font-weight:600">Forfait fixe, jamais de TJM</b></span></div>
      <h1>Tarifs développement web &amp; SaaS : <br>des prix au forfait, <br><span class="accent">un périmètre écrit.</span></h1>
      <p class="thero-sub">
        On vend un <b>résultat livré</b>, pas du temps passé. Vous savez exactement ce que vous payez
        et ce que vous recevez <b>avant de signer</b> : une fois le devis signé, le périmètre et le prix
        sont figés, et <b>aucun ajout n'est facturé sans votre accord écrit</b>.
      </p>
      <div class="thero-cta">
        <a href="#forfaits" class="btn btn-accent btn-lg">
          Voir les forfaits
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="/demarrer-un-projet" class="btn btn-ghost btn-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 7h6M9 12h6M9 17h3"/></svg>
          Décrire mon projet (3 min)
        </a>
      </div>
      <div class="thero-meta">
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Code &amp; data chez vous</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Recette et correction au devis</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Aucun ajout sans accord écrit</span>
      </div>
    </div>

    <!-- VISUAL : devis "preview" card -->
    <div class="thero-visual">
      <div class="qmock">
        <div class="qmock-bar">
          <div class="qmock-bar-l">
            <div class="qmock-dots"><span></span><span></span><span></span></div>
            <div class="qmock-path">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
              <span>exemple-de-devis.pdf</span>
            </div>
          </div>
          <div class="qmock-status is-sample"><span class="qmock-dot"></span> EXEMPLE</div>
        </div>

        <div class="qmock-head">
          <div class="qmock-from">
            <div class="qmock-logo">HC</div>
            <div>
              <div class="qmock-from-name"><b>Hagnéré Code</b> · Modèle de devis</div>
              <div class="qmock-from-sub"><b>Scénario fictif composite</b> · ni client ni devis réel</div>
            </div>
          </div>
          <div class="qmock-tags">
            <span class="qmock-tag">FORFAIT FIXE</span>
            <span class="qmock-tag">FR · TVA 20%</span>
          </div>
        </div>

        <div class="qmock-rows">
          <div class="qmock-row">
            <div class="qmock-row-l">
              <div class="qmock-row-num">01</div>
              <div>
                <div class="qmock-row-t">Discovery Sprint &amp; cadrage</div>
                <div class="qmock-row-s">2 jours · prototype Figma · specs</div>
              </div>
            </div>
            <div class="qmock-row-r"><b>1 500 €</b><span class="qmock-strike">cadrage</span></div>
          </div>

          <div class="qmock-row">
            <div class="qmock-row-l">
              <div class="qmock-row-num">02</div>
              <div>
                <div class="qmock-row-t">Plateforme SaaS · 12 écrans</div>
                <div class="qmock-row-s">Auth, billing Stripe, dashboards, API</div>
              </div>
            </div>
            <div class="qmock-row-r"><b>34 000 €</b></div>
          </div>

          <div class="qmock-row">
            <div class="qmock-row-l">
              <div class="qmock-row-num">03</div>
              <div>
                <div class="qmock-row-t">Agent IA d'extraction (RAG)</div>
                <div class="qmock-row-s">Claude + base vectorielle interne</div>
              </div>
            </div>
            <div class="qmock-row-r"><b>6 500 €</b></div>
          </div>

          <div class="qmock-row">
            <div class="qmock-row-l">
              <div class="qmock-row-num">04</div>
              <div>
                <div class="qmock-row-t">Hébergement &amp; care</div>
                <div class="qmock-row-s">Fournisseur, durée, sauvegardes et niveau de service précisés au devis</div>
              </div>
            </div>
            <div class="qmock-row-r"><b>au devis</b></div>
          </div>
        </div>

        <div class="qmock-total">
          <div class="qmock-total-l">
            <div class="qmock-total-tag">EXEMPLE DE DEVIS · MONTANTS ILLUSTRATIFS</div>
            <div class="qmock-total-sub">
              <span>Échéancier précisé au devis</span>
              <span class="sep"></span>
              <span>Aucun ajout sans accord écrit</span>
            </div>
          </div>
          <div class="qmock-total-r">
            <div class="qmock-total-cur">EUR · HT</div>
            <div class="qmock-total-val">42 000 €</div>
          </div>
        </div>

        <div class="qmock-foot">
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Cadrage écrit</span>
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Périmètre chiffré</span>
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Correction cadrée au devis</span>
        </div>
      </div>

      <div class="qmock-float">
        <div class="qmf-ic">€</div>
        <div>
          <div class="qmf-t">Forfait fixe</div>
          <div class="qmf-s">Périmètre et prix figés au devis</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- KPI BAR -->
<section class="kpi-bar">
  <div class="wrap">
    <div class="kpi-grid">
      <div class="kpi reveal">
        <div class="kpi-n">100<span class="kpi-s">%</span></div>
        <div class="kpi-l">Forfait fixe.<br>Pas de TJM caché.</div>
      </div>
      <div class="kpi reveal reveal-d-1">
        <div class="kpi-n">100<span class="kpi-s">%</span></div>
        <div class="kpi-l">Du forfait signé<br>engagé au contrat.</div>
      </div>
      <div class="kpi reveal reveal-d-2">
        <div class="kpi-n">Au<span class="kpi-s"> devis</span></div>
        <div class="kpi-l">Recette, garantie<br>et exclusions écrites.</div>
      </div>
      <div class="kpi reveal reveal-d-3">
        <div class="kpi-n">1 500<span class="kpi-s">€ HT</span></div>
        <div class="kpi-l">Pour cadrer.<br>Déduit si phase 2, conditions au devis.</div>
      </div>
    </div>
  </div>
</section>

<!-- PRINCIPES -->
<section class="principes">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Comment on chiffre</div>
        <h2>Quatre règles <br>écrites au devis.</h2>
      </div>
      <div class="right">
        Notre grille commerciale repose sur quatre principes. Seuls le devis signé et les CGV
        applicables au projet créent des engagements&nbsp;: ils précisent le périmètre, le prix,
        les livrables, les exclusions et les modalités d'avenant.
        <a href="/methode" style="color:var(--accent-ink);text-decoration:underline">Notre méthode de travail</a>
        décrit le déroulé auquel ces prix correspondent.
      </div>
    </div>

    <div class="prin-grid">
      <div class="prin reveal">
        <div class="prin-num">01</div>
        <div class="prin-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg>
        </div>
        <h3>Forfait, jamais TJM</h3>
        <p>Vous payez un livrable, pas des journées. On absorbe le risque de dérive — c'est notre métier de bien estimer.</p>
        <div class="prin-foot">
          <span class="prin-tag">RÉGIE = NON</span>
        </div>
      </div>

      <div class="prin reveal reveal-d-1">
        <div class="prin-num">02</div>
        <div class="prin-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M12 7v5l3 2"/></svg>
        </div>
        <h3>Discovery payé, déduction au devis</h3>
        <p>2 jours, 1 500 € HT, livrables réutilisables selon les droits prévus au devis. Si la phase suivante est lancée avec nous, le devis précise la déduction applicable ; sinon vous conservez les livrables remis.</p>
        <div class="prin-foot">
          <span class="prin-tag">DÉDUCTION AU DEVIS</span>
        </div>
      </div>

      <div class="prin reveal reveal-d-2">
        <div class="prin-num">03</div>
        <div class="prin-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        </div>
        <h3>Périmètre figé, ajout chiffré</h3>
        <p>Tout changement passe par un avenant écrit avec son prix. Vous décidez si ça vaut le coup. Pas de « ah ouais, on n'avait pas prévu… ».</p>
        <div class="prin-foot">
          <span class="prin-tag">AVENANT EXPLICITE</span>
        </div>
      </div>

      <div class="prin reveal reveal-d-3">
        <div class="prin-num">04</div>
        <div class="prin-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
        </div>
        <h3>Le périmètre bouge, le prix suit le devis</h3>
        <p>On peut sortir des fonctionnalités, en remettre, étaler les paiements. Toute modification du périmètre passe par un chiffrage écrit et un avenant&nbsp;: rien n'est facturé sans votre accord.</p>
        <div class="prin-foot">
          <span class="prin-tag">AVENANT ÉCRIT</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- DISCOVERY SPRINT (featured premium card) -->
<section class="discovery">
  <div class="wrap">
    <div class="disc-card reveal">
      <div class="disc-bg-grid"></div>
      <div class="disc-bg-radial"></div>

      <div class="disc-left">
        <div class="disc-tag">
          <span>NOUVEAU</span>
          <span>Le point de départ</span>
        </div>
        <h2>Discovery Sprint <br><span class="accent">à 1 500 € HT.</span></h2>
        <p class="disc-lead">
          <b>2 jours payés</b> pour transformer une idée floue en un plan exécutable, chiffré et dérisqué.
          C'est le cadrage payant d'un <b>projet de développement</b>&nbsp;; les autres services ont le leur, listé
          <a href="#points-d-entree" style="color:inherit;text-decoration:underline">juste en dessous</a>. Si la phase 2 est lancée
          avec nous, <b>le devis précise la déduction applicable</b>.
        </p>

        <ul class="disc-list">
          <li>
            <div class="disc-li-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Specs fonctionnelles</b><br><span>15 à 25 pages, écrites par quelqu'un qui code</span></div>
          </li>
          <li>
            <div class="disc-li-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Prototype Figma cliquable</b><br><span>Les 3 à 5 écrans clés, navigables sur mobile et desktop</span></div>
          </li>
          <li>
            <div class="disc-li-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Architecture technique</b><br><span>Stack, intégrations, hébergement, modèle de données</span></div>
          </li>
          <li>
            <div class="disc-li-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Devis phase 2 chiffré</b><br><span>Forfait, délai, dépendances et conséquences éventuelles écrits</span></div>
          </li>
        </ul>

        <div class="disc-foot">
          <a href="#contact" class="btn btn-accent btn-lg">
            Démarrer un Discovery
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="disc-foot-meta">
            <span class="disc-foot-pill">2 jours</span>
            <span>Date de démarrage confirmée avant signature</span>
          </div>
        </div>
      </div>

      <div class="disc-right">
        <div class="disc-price-card">
          <div class="disc-price-tag">FORFAIT FIXE</div>
          <div class="disc-price-row">
            <span class="disc-price-amount">1 500</span>
            <span class="disc-price-cur">€ HT</span>
          </div>
          <div class="disc-price-line">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            <span>Déduit si phase 2 · conditions au devis</span>
          </div>
          <div class="disc-price-line">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            <span>Livrables réutilisables ailleurs</span>
          </div>
          <div class="disc-price-line">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            <span>Aucun engagement sur la suite</span>
          </div>
          <div class="disc-price-hr"></div>
          <div class="disc-price-foot">
            Signature électronique. Facturé après le sprint, payable à 30 jours.
          </div>
        </div>

        <div class="disc-stack">
          <div class="disc-stack-row">
            <span class="disc-stack-k">JOUR 1</span>
            <span class="disc-stack-v">Cadrage métier · users · contraintes</span>
          </div>
          <div class="disc-stack-row">
            <span class="disc-stack-k">JOUR 1.5</span>
            <span class="disc-stack-v">Wireframes &amp; prototype Figma</span>
          </div>
          <div class="disc-stack-row">
            <span class="disc-stack-k">JOUR 2</span>
            <span class="disc-stack-v">Architecture · stack · estimation</span>
          </div>
          <div class="disc-stack-row last">
            <span class="disc-stack-k">J + 3</span>
            <span class="disc-stack-v">Devis phase 2 + planning détaillés</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- POINTS D'ENTRÉE PAYANTS -->
<section class="entrypoints" id="points-d-entree">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Avant tout engagement</div>
        <h2>Les points d&#39;entrée payants. <br>Un seul à la fois.</h2>
      </div>
      <div class="right">
        Le Discovery Sprint n'est pas le seul cadrage payé du studio&nbsp;: cinq services publient le leur, sur leur
        propre page. <b>Ils ne se cumulent pas</b> — on engage celui qui correspond à votre demande, et lui seul.
        Une déduction sur la suite n'existe que si elle est écrite au devis&nbsp;; aucune remise n'est présumée.
      </div>
    </div>

    <div class="ep-table reveal">
      <div class="ep-head">
        <div class="ep-col ep-col-name">POINT D&#39;ENTRÉE</div>
        <div class="ep-col">PRIX</div>
        <div class="ep-col">DURÉE PUBLIÉE</div>
        <div class="ep-col ep-col-wide">SUITE ÉVENTUELLE</div>
      </div>

      <div class="ep-row">
        <div class="ep-col ep-col-name">
          <a href="/services/outils-internes-sur-mesure">
            <b>Audit processus</b>
            <span>Outils internes sur mesure</span>
          </a>
        </div>
        <div class="ep-col"><b>990 € HT</b></div>
        <div class="ep-col"><span>1 jour, sur site ou en visio</span></div>
        <div class="ep-col ep-col-wide"><span>Si une mission suit, le devis précise la déduction applicable.</span></div>
      </div>

      <div class="ep-row">
        <div class="ep-col ep-col-name">
          <a href="#forfaits">
            <b>Discovery Sprint</b>
            <span>Projet de développement</span>
          </a>
        </div>
        <div class="ep-col"><b>1 500 € HT</b></div>
        <div class="ep-col"><span>2 jours</span></div>
        <div class="ep-col ep-col-wide"><span>Déduit si la phase 2 est lancée avec nous&nbsp;: conditions au devis.</span></div>
      </div>

      <div class="ep-row">
        <div class="ep-col ep-col-name">
          <a href="/services/publicite-en-ligne">
            <b>Audit Ads</b>
            <span>Publicité en ligne</span>
          </a>
        </div>
        <div class="ep-col"><b>1 500 € HT</b></div>
        <div class="ep-col"><span>Prestation unique, restitution 90 min</span></div>
        <div class="ep-col ep-col-wide"><span>Remise éventuelle uniquement si elle est écrite au devis.</span></div>
      </div>

      <div class="ep-row">
        <div class="ep-col ep-col-name">
          <a href="/services/maintenance-evolution">
            <b>Audit flash</b>
            <span>Maintenance &amp; évolution</span>
          </a>
        </div>
        <div class="ep-col"><b>2 000 € HT</b></div>
        <div class="ep-col"><span>Prestation unique, durée confirmée au devis</span></div>
        <div class="ep-col ep-col-wide"><span>Remise éventuelle uniquement si elle est écrite au devis.</span></div>
      </div>

      <div class="ep-row">
        <div class="ep-col ep-col-name">
          <a href="/services/securite-rgpd">
            <b>Cadrage initial</b>
            <span>Sécurité &amp; RGPD</span>
          </a>
        </div>
        <div class="ep-col"><b>5 000 € HT</b></div>
        <div class="ep-col"><span>Durée au devis, restitution 90 min</span></div>
        <div class="ep-col ep-col-wide"><span>Sans engagement de suite. Déduction éventuelle écrite au devis.</span></div>
      </div>

      <div class="ep-row">
        <div class="ep-col ep-col-name">
          <a href="/services/audit-technique">
            <b>Audit Express</b>
            <span>Audit technique</span>
          </a>
        </div>
        <div class="ep-col"><b>8 000 € HT</b></div>
        <div class="ep-col"><span>Durée et intervenants au devis</span></div>
        <div class="ep-col ep-col-wide"><span>Remise éventuelle indiquée au devis.</span></div>
      </div>
    </div>

    <div class="ptable-foot reveal">
      <div class="ptf-ic">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
      <div class="ptf-body">
        <b>Lequel choisir&nbsp;?</b> Celui de la page qui décrit votre demande. Au-delà de <b>8 k€ HT</b> de projet,
        un cadrage payé est systématique&nbsp;: c'est le Discovery Sprint pour un développement, le point d'entrée
        du service concerné dans les autres cas. Jamais les deux. Ces montants sont hors taxes.
      </div>
      <a href="/contact" class="btn btn-ghost ptf-cta">
        Choisir avec nous
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- FORFAITS PRINCIPAUX (4 plans) -->
<section class="pricing" id="forfaits">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Forfaits projet</div>
        <h2>Quatre formats, <br>un prix fixe par projet.</h2>
      </div>
      <div class="right">
        Du site vitrine au SaaS multi-utilisateurs, en passant par le partenariat long terme.
        On vous oriente vers le bon format pendant le Discovery — pas avant.
      </div>
    </div>

    <div class="price-grid">
      <div class="plan plan-discovery reveal">
        <div class="plan-tag">LE POINT DE DÉPART</div>
        <h3>Discovery Sprint</h3>
        <div class="plan-sub">2 jours payés pour transformer votre idée en plan exécutable. Aucun engagement sur la phase 2.</div>
        <div class="plan-price">
          <span class="amount">1 500 €</span>
          <span class="per">HT · forfait 2 j.</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Specs fonctionnelles rédigées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Prototype Figma cliquable</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Architecture technique cadrée</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Devis phase 2 forfait fixe</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Déduit si phase 2 · conditions au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Démarrer un Discovery</a></div>
      </div>

      <div class="plan reveal reveal-d-1">
        <div class="plan-tag">DÉMARRAGE</div>
        <h3>Essentiel</h3>
        <div class="plan-sub">Un site vitrine, une landing ou un MVP court. Idéal pour une première collaboration.</div>
        <div class="plan-price">
          <span class="amount">6,9–15 k€</span>
          <span class="per">HT · forfait fixe</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Site 3–5 pages, jusqu'à 10–20 selon le palier, OU MVP 3–5 écrans</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Design sur mesure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SEO technique de série</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement et durée précisés au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Planning et jalons précisés au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Demander un devis</a></div>
      </div>

      <div class="plan featured reveal reveal-d-2">
        <div class="plan-badge">FORMULE INTERMÉDIAIRE</div>
        <div class="plan-tag">PROJET COMPLET</div>
        <h3>Standard</h3>
        <div class="plan-sub">Un SaaS, un outil interne ou une marketplace. Le sweet spot des PME ambitieuses.</div>
        <div class="plan-price">
          <span class="amount">25–60 k€</span>
          <span class="per">HT · forfait fixe</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>10–15 écrans + back-office riche</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Workflows métier complexes</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Intégrations tierces (Stripe, Pennylane…)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Agents IA selon besoin</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Mesures techniques et documents RGPD au périmètre</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Planning et jalons précisés au devis</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer mon projet</a></div>
      </div>

      <div class="plan reveal reveal-d-3">
        <div class="plan-tag">CO-BUILD</div>
        <h3>Partenariat</h3>
        <div class="plan-sub">On devient votre équipe tech externalisée. Plusieurs projets, forfait mensuel.</div>
        <div class="plan-price">
          <span class="amount">8–20 k€</span>
          <span class="per">HT / mois</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Intervenants et rôles précisés au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap co-construite</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Niveau de service et éventuelle astreinte au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Durée et modalités de sortie négociées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Equity en complément possible</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parlons-en</a></div>
      </div>
    </div>

    <p class="pricing-note reveal">
      <b>Tous les montants de cette page sont en euros hors taxes</b>, TVA en sus. Le ticket d'entrée publié est de
      <b>6,9 k€ HT</b> (site vitrine). <b>Ces quatre formats couvrent tous les services</b>&nbsp;: leur fourchette part
      du service le moins cher du format, pas du vôtre. La fourchette propre à votre besoin est celle du
      <a href="#tableau-services" style="color:var(--accent-ink);text-decoration:underline">tableau par service ci-dessous</a> et de la page
      service correspondante — un MVP SaaS « Essentiel » démarre par exemple à 15 k€ HT, pas à 6,9 k€ HT.
      Chaque devis précise&nbsp;: <b>livrables et droits</b> · <b>dépôt et accès</b> ·
      <b>formation</b> · <b>recette et éventuelle garantie</b>
    </p>
  </div>
</section>

<!-- TABLEAU PAR SERVICE -->
<section class="ptable" id="tableau-services">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Détail par service</div>
        <h2>Combien ça coûte <br>vraiment, par type <br>de projet ?</h2>
      </div>
      <div class="right">
        Les repères ci-dessous sont calibrés sur <b>nos barèmes internes</b> — charge de travail,
        profils mobilisés, périmètre fonctionnel. Ce sont des <b>ordres de grandeur indicatifs</b>
        sur des projets-types, destinés à situer un budget avant le cadrage&nbsp;: seul le devis
        nominatif remis après le cadrage payant engage les parties. Les hypothèses, inclusions et facteurs
        de variation sont détaillés ci-dessous, poste par poste, pour comparer des périmètres
        réellement équivalents.
      </div>
    </div>

    <div class="ptable-wrap reveal">
      <div class="ptable-head">
        <div class="ptcol ptcol-svc">SERVICE</div>
        <div class="ptcol">ENTRÉE · HT</div>
        <div class="ptcol">STANDARD · HT</div>
        <div class="ptcol">PREMIUM · HT</div>
        <div class="ptcol ptcol-time">DÉLAI</div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/sites-vitrines">
            <div class="ptcol-svc-ic" style="background:var(--accent-soft);color:var(--accent)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Sites vitrines &amp; landings</div>
              <div class="ptcol-svc-s">Showcase, conversion, SEO</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>6,9 k€ HT</b><span>Essentiel — 3–5 pages</span></div>
        <div class="ptcol"><b>14,9 k€ HT</b><span>Performance — 10–20 pages, blog</span></div>
        <div class="ptcol"><b>22 k€ HT</b><span>Sur-mesure — multi-langue, e&#8209;com</span></div>
        <div class="ptcol ptcol-time"><b>Sur devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/saas-applications-metier">
            <div class="ptcol-svc-ic" style="background:#FFE7CC;color:#9A3412">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">SaaS &amp; applis métier</div>
              <div class="ptcol-svc-s">B2B, espace client, marketplace</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>15 k€ HT</b><span>Essentiel — MVP 3–5 écrans</span></div>
        <div class="ptcol"><b>30–60 k€ HT</b><span>Standard — 10–15 écrans + IA</span></div>
        <div class="ptcol"><b>8–20 k€/m HT</b><span>Partenariat — forfait mensuel, intervenants et rôles au devis</span></div>
        <div class="ptcol ptcol-time"><b>Sur devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/outils-internes-sur-mesure">
            <div class="ptcol-svc-ic" style="background:#D1FADF;color:#166534">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18M7 14l3-3 4 4 5-5"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Outils internes</div>
              <div class="ptcol-svc-s">Back-office, workflows, automatisations</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>8 k€ HT</b><span>Starter — process ciblé, 1 équipe</span></div>
        <div class="ptcol"><b>25 k€ HT</b><span>Pro — CRM/ERP léger + intégrations</span></div>
        <div class="ptcol"><b>80 k€ HT</b><span>Enterprise — SSO, multi-départements</span></div>
        <div class="ptcol ptcol-time"><b>Sur devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/ecommerce">
            <div class="ptcol-svc-ic" style="background:#FCE7F3;color:#831843">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">E-commerce</div>
              <div class="ptcol-svc-s">Shopify, WooCommerce, sur mesure</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>15 k€ HT</b><span>Launch — 500 produits, Stripe/Alma</span></div>
        <div class="ptcol"><b>30 k€ HT</b><span>Scale — + app mobile, marketplaces</span></div>
        <div class="ptcol"><b>70–120 k€ HT</b><span>Enterprise — B2B + multi-pays</span></div>
        <div class="ptcol ptcol-time"><b>Sur devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/application-mobile">
            <div class="ptcol-svc-ic" style="background:#DBEAFE;color:#1E3A8A">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Apps mobiles iOS / Android</div>
              <div class="ptcol-svc-s">React Native, Expo, push, hors-ligne</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>Sur devis</b><span>Lancement — 1 cas d'usage, iOS + Android</span></div>
        <div class="ptcol"><b>Sur devis</b><span>Performance — périmètre étendu, paiement, back-office</span></div>
        <div class="ptcol"><b>Sur devis</b><span>Sur-mesure — marketplace, BLE / NFC, ERP</span></div>
        <div class="ptcol ptcol-time"><b>Sur devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/referencement-google">
            <div class="ptcol-svc-ic" style="background:#FEF3C7;color:#92400E">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">SEO &amp; référencement</div>
              <div class="ptcol-svc-s">Qualité, formats, validation et acquisition définis au devis</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>Sur devis</b><span>Audit SEO actionnable — périmètre et tarif établis au devis</span></div>
        <div class="ptcol"><b>Sur devis</b><span>Sprint de correction — périmètre écrit avant intervention</span></div>
        <div class="ptcol"><b>Sur devis</b><span>Accompagnement organique — production et acquisition cadrées au devis</span></div>
        <div class="ptcol ptcol-time"><b>Durée au devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/publicite-en-ligne">
            <div class="ptcol-svc-ic" style="background:#FFE4E6;color:#9F1239">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-8v18L3 13zM11 7v10"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Publicité en ligne</div>
              <div class="ptcol-svc-s">Google Ads, Meta, LinkedIn</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>1 800 €/m HT</b><span>Starter — 2 canaux + tracking SS</span></div>
        <div class="ptcol"><b>3 500 €/m HT</b><span>Scale — 3+1 canaux + 8-12 creatives</span></div>
        <div class="ptcol"><b>4 500 €/m HT</b><span>Premium — 4-6 canaux, intervenants nommés au devis</span></div>
        <div class="ptcol ptcol-time"><b>Durée au devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/contenu-video">
            <div class="ptcol-svc-ic" style="background:#E0E7FF;color:#3730A3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Contenu &amp; vidéo</div>
              <div class="ptcol-svc-s">Production vidéo, motion, YouTube</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>2 500 € HT</b><span>vidéo unique, sans engagement</span></div>
        <div class="ptcol"><b>3 500 €/m HT</b><span>YouTube Founder — 4 longues + 16 shorts</span></div>
        <div class="ptcol"><b>6 900 €/m HT</b><span>Content Retainer — ~25 livrables/mois</span></div>
        <div class="ptcol ptcol-time"><b>6 mois min. retainer</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/audit-technique">
            <div class="ptcol-svc-ic" style="background:#F3E8FF;color:#6B21A8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Audit technique</div>
              <div class="ptcol-svc-s">Code review, perf, sécurité</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>8 k€ HT</b><span>Express — durée et intervenants au devis</span></div>
        <div class="ptcol"><b>18 k€ HT</b><span>Standard — 8 dimensions, rapport 40-70 p.</span></div>
        <div class="ptcol"><b>38–68 k€ HT</b><span>Deep &amp; Tech DD M&amp;A</span></div>
        <div class="ptcol ptcol-time"><b>Sur devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/securite-rgpd">
            <div class="ptcol-svc-ic" style="background:#DCFCE7;color:#166534">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Sécurité &amp; RGPD</div>
              <div class="ptcol-svc-s">Cadrage, conformité, remédiation</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>5 k€ HT</b><span>Cadrage initial — état des lieux</span></div>
        <div class="ptcol"><b>1 200 €/m HT</b><span>Starter — accompagnement continu</span></div>
        <div class="ptcol"><b>3 500 €/m HT</b><span>Scale — + sprints dev 3–15 k€ HT/lot</span></div>
        <div class="ptcol ptcol-time"><b>Sur devis</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/maintenance-evolution">
            <div class="ptcol-svc-ic" style="background:#E0F2FE;color:#075985">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Maintenance &amp; évolution</div>
              <div class="ptcol-svc-s">TMA, correctifs, reprise de legacy</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>2 000 € HT</b><span>Audit flash — point d'entrée payant</span></div>
        <div class="ptcol"><b>Sur devis</b><span>Care — périmètre au contrat</span></div>
        <div class="ptcol"><b>Sur devis</b><span>Care+ et Care Pro — repères ≈ 3 500 à 14 000 €/m HT, rôles au devis</span></div>
        <div class="ptcol ptcol-time"><b>Sur devis</b></div>
      </div>
    </div>

    <div class="ptable-foot reveal">
      <div class="ptf-ic">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
      <div class="ptf-body">
        <b>Comment lire ce tableau ?</b> <b>Tous les montants sont en euros hors taxes</b>, TVA en sus. Les fourchettes sont
        par projet (forfait fixe), sauf pour les prestations récurrentes (Ads, vidéo, accompagnement continu, forfaits Care), notées « /m ».
        Une cellule « Sur devis » signale un prix arrêté au devis, jamais avant. Deux cas se distinguent&nbsp;:
        soit un <b>repère indicatif</b> existe et il est écrit avec « ≈ » — c'est le cas des forfaits Care, dont les
        ordres de grandeur mensuels sont repris ci-dessous des scénarios-types de la page maintenance&nbsp;;
        soit <b>aucune page du site ne publie de montant</b>, et c'est alors vrai ici comme sur la page service. Le SEO
        est dans ce second cas&nbsp;: les trois colonnes
        correspondent aux trois formats publiés sur
        <a href="/services/referencement-google" style="color:var(--accent-ink);text-decoration:underline">la page référencement</a> — Audit SEO actionnable, Sprint de correction,
        Accompagnement organique — dont le prix dépend du nombre d'URL, des gabarits et de la profondeur demandée,
        et n'est chiffré ni ici ni là-bas.
        Une ligne ne reprend pas toujours toute l'offre de sa page service&nbsp;: sur
        <a href="/services/contenu-video" style="color:var(--accent-ink);text-decoration:underline">contenu &amp; vidéo</a>, le
        retainer <b>Motion &amp; brand</b> (4 500 €/m HT, engagement minimum de 6 mois) et le <b>Studio dédié</b>
        (forfait dès 15 k€ HT, sur devis — ce n'est pas un montant mensuel) s'y ajoutent.
        Une durée d'engagement n'existe que si elle est écrite au contrat. Le prix exact est
        figé après le cadrage payant correspondant, dans un devis ferme contractuel.
      </div>
      <a href="/demarrer-un-projet" class="btn btn-ghost ptf-cta">
        Décrire mon projet
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- POINTS CADRÉS DANS CHAQUE DEVIS -->
<section class="included">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Lisible avant de signer</div>
        <h2>Chaque poste est cadré. <br><span class="grad-accent">Aucune inclusion implicite.</span></h2>
      </div>
      <div class="right">
        Le devis distingue ce qui est livré, ce qui reste en option et ce qui sera payé directement à un tiers.
        Vous pouvez ainsi comparer les offres sur un périmètre réellement équivalent.
      </div>
    </div>

    <div class="incl-grid">
      <div class="incl reveal">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div>
        <h3>Livrables et droits explicites</h3>
        <p>Les livrables spécifiques sont transférés après paiement complet selon les CGV. Dépôt, accès, composants préexistants et licences tierces sont inventoriés.</p>
      </div>
      <div class="incl reveal reveal-d-1">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/></svg></div>
        <h3>Hébergement</h3>
        <p>Fournisseur, région, titulaire du compte, coût et durée éventuellement incluse sont précisés.</p>
      </div>
      <div class="incl reveal reveal-d-2">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h3>Recette et garantie au devis</h3>
        <p>Période de correction, sévérités couvertes, exclusions et délais cibles sont fixés avant engagement.</p>
      </div>
      <div class="incl reveal reveal-d-3">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
        <h3>Formation des équipes</h3>
        <p>Publics, supports, sessions et critères d'autonomie sont définis lorsque la formation est nécessaire.</p>
      </div>
      <div class="incl reveal">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg></div>
        <h3>Documentation</h3>
        <p>Spécifications, architecture, README et éventuel runbook sont listés comme de vrais livrables.</p>
      </div>
      <div class="incl reveal reveal-d-1">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h3>Délai et dépendances</h3>
        <p>Jalons, validations attendues, causes de report et conséquences éventuelles sont écrits avant le démarrage.</p>
      </div>
      <div class="incl reveal reveal-d-2">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h3>RGPD &amp; sécurité</h3>
        <p>Les mesures techniques et documents attendus sont adaptés aux données et au rôle de chaque partie.</p>
      </div>
      <div class="incl reveal reveal-d-3">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div>
        <h3>Sauvegarde et reprise</h3>
        <p>Fréquence, rétention, responsabilité, RPO/RTO cibles et tests de restauration sont dimensionnés.</p>
      </div>
    </div>
  </div>
</section>

<!-- MAINTENANCE / CARE -->
<section class="care" id="care">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Après la livraison</div>
        <h2>Forfaits Care. <br>On reste à vos côtés.</h2>
      </div>
      <div class="right">
        <a href="/services/maintenance-evolution" style="color:var(--accent-ink);text-decoration:underline">Hébergement, monitoring, sauvegardes, bug fixes, petites évolutions</a>.
        <b>Trois niveaux indicatifs</b>. La durée, le préavis et les modalités de sortie figurent dans le contrat.
      </div>
    </div>

    <div class="care-grid">
      <div class="care-card reveal">
        <div class="care-tag">CARE</div>
        <h3>Care</h3>
        <p class="care-sub">L'essentiel pour dormir tranquille. Idéal après un site vitrine ou un MVP léger.</p>
        <div class="care-price">
          <span class="amount">Sur devis</span>
          <span class="per">HT · forfait mensuel</span>
        </div>
        <p class="care-hint">Repère indicatif&nbsp;: <b>≈ 2 500 € HT / mois</b> sur un scénario-type publié sur <a href="/services/maintenance-evolution">la page maintenance</a>. Le forfait est fixé au devis.</p>
        <div class="care-hr"></div>
        <ul class="care-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement retenu au devis</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Sauvegardes selon criticité</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Mises à jour sécurité</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Canal et délai cible précisés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Capacité d'évolution au devis</li>
        </ul>
        <div class="care-cta"><a href="#contact" class="btn btn-ghost">Activer Care</a></div>
      </div>

      <div class="care-card featured reveal reveal-d-1">
        <div class="care-badge">RECOMMANDÉ</div>
        <div class="care-tag">CARE+</div>
        <h3>Care+</h3>
        <p class="care-sub">Le bon niveau pour un SaaS ou un outil interne en production avec des utilisateurs actifs.</p>
        <div class="care-price">
          <span class="amount">Sur devis</span>
          <span class="per">HT · forfait mensuel</span>
        </div>
        <p class="care-hint">Repère indicatif&nbsp;: <b>≈ 3 500 € HT / mois</b> sur un scénario-type publié sur <a href="/services/maintenance-evolution">la page maintenance</a>. Le forfait est fixé au devis.</p>
        <div class="care-hr"></div>
        <ul class="care-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tout Care, plus :</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Surveillance et alertes dimensionnées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Objectif de disponibilité au contrat</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Canal et délai cible de support</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Capacité mensuelle définie</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Cadence de revue convenue</li>
        </ul>
        <div class="care-cta"><a href="#contact" class="btn btn-accent">Activer Care+</a></div>
      </div>

      <div class="care-card reveal reveal-d-2">
        <div class="care-tag">CARE PRO</div>
        <h3>Care Pro</h3>
        <p class="care-sub">Pour les SaaS critiques avec usage 24/7, gros volumes ou contrainte de continuité de service.</p>
        <div class="care-price">
          <span class="amount">Sur devis</span>
          <span class="per">HT · forfait mensuel</span>
        </div>
        <p class="care-hint">Repère indicatif&nbsp;: <b>≈ 14 000 € HT / mois</b> sur un scénario-type publié sur <a href="/services/maintenance-evolution">la page maintenance</a>. Le forfait est fixé au devis.</p>
        <div class="care-hr"></div>
        <ul class="care-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tout Care+, plus :</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Astreinte et horaires en option</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA et conséquences contractuelles sur mesure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Capacité d'évolution adaptée</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Plan de reprise et tests cadrés</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Rythme de pilotage défini</li>
        </ul>
        <div class="care-cta"><a href="#contact" class="btn btn-ghost">Parler au fondateur</a></div>
      </div>
    </div>

    <p class="care-note reveal">
      Care, Care+ et Care Pro sont les <b>mêmes trois forfaits</b> que ceux publiés sur
      <a href="/services/maintenance-evolution" style="color:var(--accent-ink);text-decoration:underline">la page maintenance &amp; évolution</a>,
      sous les mêmes noms et avec les <b>mêmes repères mensuels</b>. Ces trois montants sont des
      <b>ordres de grandeur indicatifs</b> hors taxes, tirés des scénarios-types publiés sur la page service&nbsp;:
      <b>le forfait est fixé au devis</b>, selon le volume, la criticité et la couverture retenue. Durée, préavis,
      capacité et coûts tiers sont détaillés avant signature&nbsp;: <b>le devis indique qui paie chaque fournisseur</b>
      et si une marge ou des frais de gestion s'appliquent.
    </p>
  </div>
</section>

<!-- COMPARAISON HC vs marché -->
<section class="vsmarket">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Comparer sans se tromper</div>
        <h2>La même grille <br>pour chaque devis.</h2>
      </div>
      <div class="right">
        Il n'existe pas ici d'étude représentative des agences et freelances. Cette grille indique
        <b>les points à demander à chaque candidat</b> et les engagements que notre propre devis doit expliciter.
      </div>
    </div>

    <div class="vsm-table reveal">
      <div class="vsm-head">
        <div class="vsm-cell">CRITÈRE</div>
        <div class="vsm-cell vsm-cell-us">Hagnéré Code</div>
        <div class="vsm-cell">Agence candidate</div>
        <div class="vsm-cell">Freelance candidat</div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Modèle de facturation</div>
        <div class="vsm-cell vsm-cell-us"><b>Forfait fixe</b><span>Total signé, pas de surprise</span></div>
        <div class="vsm-cell"><span>Forfait ou régie</span><span>Demander total, hypothèses et avenants</span></div>
        <div class="vsm-cell"><span>Forfait ou TJM</span><span>Demander plafond et critères de fin</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">MVP SaaS B2B (10 écrans)</div>
        <div class="vsm-cell vsm-cell-us"><b>30–60 k€ HT</b><span>Périmètre et planning confirmés au devis</span></div>
        <div class="vsm-cell"><span>À comparer</span><span>Périmètre, équipe et délai écrits</span></div>
        <div class="vsm-cell"><span>À comparer</span><span>Disponibilité et relais documentés</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Site vitrine 10 pages</div>
        <div class="vsm-cell vsm-cell-us"><b>6,9–15 k€ HT</b><span>Délai, pages et cible de performance au devis</span></div>
        <div class="vsm-cell"><span>À comparer</span><span>Design, CMS, contenu et mesure inclus ?</span></div>
        <div class="vsm-cell"><span>À comparer</span><span>Mêmes livrables et mêmes conditions ?</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Discovery / cadrage</div>
        <div class="vsm-cell vsm-cell-us"><b>1 500 € HT</b><span>Déduit si phase 2 · conditions au devis</span></div>
        <div class="vsm-cell"><span>Gratuit ou payant</span><span>Vérifier les livrables réutilisables</span></div>
        <div class="vsm-cell"><span>Gratuit ou payant</span><span>Vérifier les livrables réutilisables</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Propriété du code</div>
        <div class="vsm-cell vsm-cell-us"><b>Écrit au devis</b><span>Cession, dépôt, accès et exclusions</span></div>
        <div class="vsm-cell"><span>Variable</span><span>Lire cession, licences et accès</span></div>
        <div class="vsm-cell"><span>Variable</span><span>Lire le contrat</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Garantie après livraison</div>
        <div class="vsm-cell vsm-cell-us"><b>Écrite au devis</b><span>Recette, durée, sévérités et exclusions</span></div>
        <div class="vsm-cell"><span>À vérifier</span><span>Durée et définition d'un bug</span></div>
        <div class="vsm-cell"><span>À vérifier</span><span>Disponibilité après livraison</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Maintenance mensuelle</div>
        <div class="vsm-cell vsm-cell-us"><b>Sur devis</b><span>3 niveaux Care · repères ≈ 2 500 à 14 000 €/m HT</span></div>
        <div class="vsm-cell"><span>À comparer</span><span>Capacité, SLA, outils et préavis</span></div>
        <div class="vsm-cell"><span>À comparer</span><span>Capacité, relais et préavis</span></div>
      </div>

      <div class="vsm-row vsm-verdict">
        <div class="vsm-cell vsm-cell-label">Verdict</div>
        <div class="vsm-cell vsm-cell-us"><b>À juger sur le devis signé</b></div>
        <div class="vsm-cell">À juger sur le même périmètre</div>
        <div class="vsm-cell">À juger sur le même périmètre</div>
      </div>
    </div>

    <div class="vsm-disclaimer reveal">
      <div class="vsm-dis-ic">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
      <span>
        Grille de lecture éditoriale, pas étude de marché. Pour comparer utilement, imposez à tous les candidats
        les mêmes livrables, hypothèses, coûts tiers, droits, délais et conditions de maintenance.
      </span>
    </div>
  </div>
</section>

<!-- CE QU'ON NE FAIT PAS -->
<section class="refuse">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Honnêteté</div>
        <h2>Ce qu'on <br><span class="strike-bad">ne fait pas</span> <br>(et pourquoi).</h2>
      </div>
      <div class="right">
        Ces choix nous coûtent du chiffre d'affaires court terme, mais ils nous évitent
        de vous facturer un projet bancal. Si vous reconnaissez votre besoin ici, on vous
        oriente vers les bonnes personnes — gratuitement.
      </div>
    </div>

    <div class="refuse-grid">
      <div class="ref-card reveal">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h3>« 100 % equity, pas de cash »</h3>
        <p>On a une équipe à payer. Equity en complément d'un cash floor, oui. À la place du cash, jamais.</p>
        <div class="ref-because">→ on oriente vers des CTO indépendants ou des incubateurs.</div>
      </div>

      <div class="ref-card reveal reveal-d-1">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h3>Régie au TJM</h3>
        <p>On vend un livrable, pas du temps. La régie transfère le risque chez vous, et c'est le contraire de notre promesse.</p>
        <div class="ref-because">→ allez voir des ESN ou des plateformes type Malt.</div>
      </div>

      <div class="ref-card reveal reveal-d-2">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h3>Low-code (Bubble, Webflow logic)</h3>
        <p>Bien pour prototyper, piège technique au-delà de 10 utilisateurs payants. On préfère un code Next.js/TypeScript propre et durable.</p>
        <div class="ref-because">→ comparez avec un spécialiste low-code dont les références et certifications sont vérifiables.</div>
      </div>

      <div class="ref-card reveal reveal-d-3">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h3>« Refais-moi un Uber pour X »</h3>
        <p>Si vous n'avez ni utilisateurs, ni distribution, ni vision claire, le code ne sauvera pas le projet. On vous fait perdre du temps.</p>
        <div class="ref-because">→ commencez par valider le marché, on en reparle après.</div>
      </div>

      <div class="ref-card reveal">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h3>Maintenance d'un projet qu'on n'a pas fait</h3>
        <p>Sans audit préalable. Reprendre du code mal écrit aveuglément, c'est nous mettre dans une position perdante.</p>
        <div class="ref-because">→ on commence par l'<a href="/services/maintenance-evolution" style="color:inherit;text-decoration:underline">audit flash à 2 000 € HT</a>, on décide ensuite.</div>
      </div>

      <div class="ref-card reveal reveal-d-1">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h3>Devis sans cadrage payé préalable</h3>
        <p>Au-delà de 8 k€ HT, on ne signe rien sans cadrage payé. Trop d'incertitudes, trop de mauvais devis. C'est protecteur pour les deux. Selon la demande, ce cadrage est le Discovery Sprint <b>ou</b> le point d'entrée payant de la page service concernée — jamais les deux.</p>
        <div class="ref-because">→ <a href="#points-d-entree" style="color:inherit;text-decoration:underline">choisir son point d'entrée payant</a> : de 990 € à 8 000 € HT selon le service.</div>
      </div>
    </div>
  </div>
</section>

<!-- BRIEF FUNNEL TEASER -->
<section class="calc-teaser">
  <div class="wrap">
    <div class="ct-card reveal">
      <div class="ct-bg-grid"></div>
      <div class="ct-bg-radial"></div>

      <div class="ct-left">
        <div class="ct-tag">
          <span>DÉMARRER UN PROJET</span>
          <span>Brief en ligne</span>
        </div>
        <h3>Décrivez votre projet <br><span class="accent">en 3 minutes.</span></h3>
        <p class="ct-lead">
          Quelques questions guidées sur votre besoin, votre contexte et vos délais —
          puis notre équipe lit votre brief et vise une réponse personnelle le
          prochain jour ouvré, sans délai garanti. Pas de robot, pas d'appel commercial.
        </p>

        <div class="ct-bullets">
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> 3 minutes chrono</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Objectif : prochain jour ouvré</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Sans engagement ni création de compte</span>
        </div>

        <div class="ct-cta">
          <a href="/demarrer-un-projet" class="btn btn-accent btn-lg">
            Décrire mon projet
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" class="btn btn-ghost btn-lg">Préférer un appel direct</a>
        </div>
      </div>

      <div class="ct-right">
        <div class="ct-mini">
          <div class="ct-mini-bar">
            <div class="ct-mini-dots"><span></span><span></span><span></span></div>
            <div class="ct-mini-name">votre-brief — hagnere-code.ai</div>
          </div>
          <div class="ct-mini-tabs">
            <div class="ct-mini-tab active">Votre brief</div>
            <div class="ct-mini-tab">Envoi</div>
            <div class="ct-mini-tab">Réponse</div>
          </div>
          <div class="ct-mini-rows">
            <div class="ct-mini-row"><span>Type de projet</span><span><b>SaaS B2B</b></span></div>
            <div class="ct-mini-row"><span>Objectif</span><span><b>automatiser la facturation</b></span></div>
            <div class="ct-mini-row"><span>Utilisateurs</span><span><b>≈ 40 internes</b></span></div>
            <div class="ct-mini-row"><span>Intégrations</span><span><b>Stripe, CRM</b></span></div>
            <div class="ct-mini-row"><span>Existant</span><span><b>Excel partagé</b></span></div>
            <div class="ct-mini-row"><span>Délai souhaité</span><span><b>6 sem.</b></span></div>
          </div>
          <div class="ct-mini-total">
            <div class="ct-mini-total-l">
              <div class="ct-mini-total-tag">BRIEF ENVOYÉ</div>
              <div class="ct-mini-total-sub">réponse personnelle et argumentée</div>
            </div>
            <div class="ct-mini-total-r">objectif : prochain jour ouvré</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— Questions fréquentes</div>
        <h2 style="margin-top:14px">Sur les prix. <br>Et la facturation.</h2>
        <p>Manquante ? <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">Posez-la directement</a>, nous visons le prochain jour ouvré, sans délai garanti.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">
            Pourquoi un prix fixe et pas un TJM ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Parce qu'on vend un <b>résultat</b>, pas du temps. Le TJM transfère tout le risque de dérive sur vous :
            si on est mauvais en estimation, c'est votre budget qui explose.
            Le forfait nous oblige à <b>bien cadrer en amont</b> — c'est tout l'intérêt du Discovery Sprint à 1 500 € HT.
            Et c'est protecteur pour les deux : vous savez ce que vous payez, on sait ce qu'on doit livrer.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Que se passe-t-il en cas de dépassement de périmètre ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le périmètre est <b>cadré puis signé</b>. Une demande supplémentaire est expliquée et chiffrée
            avant réalisation dans un avenant ou un nouveau lot. Vous décidez si elle vaut le coût&nbsp;:
            aucun dépassement ne peut être ajouté unilatéralement.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Le Discovery Sprint à 1 500 € HT est-il vraiment déduit ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            La déduction, son délai et les droits de réutilisation sont indiqués dans l'offre de Discovery signée.
            Le format public courant prévoit une déduction lorsque la phase 2 est lancée avec nous, mais seul le devis
            nominatif fixe les conditions et les livrables que vous pourrez remettre à une autre équipe.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Pourquoi des fourchettes (25–60 k€) et pas un prix sec ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Parce que tant qu'on n'a pas fait le Discovery, le périmètre n'est pas figé.
            Les fourchettes affichées sont des <b>ordres de grandeur éditoriaux</b>, pas une statistique
            issue de 23 missions externes. Après cadrage, vous recevez un devis nominatif&nbsp;: seul son
            périmètre et son prix engagent les parties.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Comment marchent les acomptes et l'échelonnement ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            L'acompte, les jalons, le solde et le délai de paiement sont précisés dans le devis ou le contrat.
            Le paiement s'effectue par les moyens indiqués sur la facture. Si un financement ou une aide impose
            un calendrier particulier, sa compatibilité est vérifiée avant signature.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            L'hébergement et les outils tiers sont-ils compris ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le devis distingue l'hébergement et chaque outil tiers&nbsp;: titulaire du compte, région,
            durée éventuellement incluse, prix et mode de facturation. Aucun coût tiers n'est réputé compris
            s'il n'est pas listé, et toute marge ou frais de gestion doit être visible avant signature.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Comment est cadrée la période de correction ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le devis précise la durée, les niveaux de sévérité, les anomalies couvertes, la procédure de signalement
            et les délais cibles. Une évolution fonctionnelle reste un nouveau périmètre et fait l'objet d'un chiffrage séparé.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous prenez de l'equity à la place du cash ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Une composante en capital peut être étudiée au cas par cas, uniquement en complément
            d'une rémunération en numéraire couvrant le travail prévu. Elle n'est jamais présumée
            ni présentée comme un moyen de financer intégralement le projet.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vos prix sont-ils négociables ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Le périmètre est négociable, le prix non.</b> On peut sortir des features pour baisser le total,
            étaler le paiement, démarrer plus tard, mais on ne fait pas de remise sur la même prestation.
            L'objectif est de garder un lien explicite entre le périmètre, la charge, le risque et le prix.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous facturez les réunions et les allers-retours ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Le volume et la cadence sont précisés au devis.</b> Les échanges nécessaires au
            périmètre signé sont inclus selon ces modalités. Une demande nouvelle ou hors périmètre
            fait l'objet d'un accord et, si nécessaire, d'un avenant chiffré avant réalisation.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
