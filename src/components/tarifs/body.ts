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
      <h1>Tarifs développement web &amp; SaaS :<br>des prix au forfait,<br><span class="accent">jamais de surprise.</span></h1>
      <p class="thero-sub">
        On vend un <b>résultat livré</b>, pas du temps passé. Vous savez exactement ce que vous payez
        et ce que vous recevez <b>avant de signer</b>. Si on dépasse, c'est pour nous —
        pas pour vous.
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
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>30 j de garantie</span>
        <span class="sep"></span>
        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>0 dépassement caché</span>
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
              <span>devis-acme-q3-2026.pdf</span>
            </div>
          </div>
          <div class="qmock-status"><span class="qmock-dot"></span> SIGNÉ</div>
        </div>

        <div class="qmock-head">
          <div class="qmock-from">
            <div class="qmock-logo">HC</div>
            <div>
              <div class="qmock-from-name"><b>Hagnéré Code</b> · Devis nº 2026-118</div>
              <div class="qmock-from-sub">Émis le 14 avril · Pour Acme Industries</div>
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
            <div class="qmock-row-r"><b>1 500 €</b><span class="qmock-strike">déduit phase 2</span></div>
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
                <div class="qmock-row-t">Hébergement &amp; care 12 mois</div>
                <div class="qmock-row-s">Scaleway Paris · backups · SLA 99,9</div>
              </div>
            </div>
            <div class="qmock-row-r"><b>inclus</b></div>
          </div>
        </div>

        <div class="qmock-total">
          <div class="qmock-total-l">
            <div class="qmock-total-tag">FORFAIT FERME · LIVRAISON 6 SEMAINES</div>
            <div class="qmock-total-sub">
              <span>30/30/40</span>
              <span class="sep"></span>
              <span><b>0 €</b> de dépassement contractuel</span>
            </div>
          </div>
          <div class="qmock-total-r">
            <div class="qmock-total-cur">EUR · HT</div>
            <div class="qmock-total-val">42 500 €</div>
          </div>
        </div>

        <div class="qmock-foot">
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Cadrage validé</span>
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Périmètre signé</span>
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Garantie 30 j</span>
        </div>
      </div>

      <div class="qmock-float">
        <div class="qmf-ic">€</div>
        <div>
          <div class="qmf-t">Forfait fixe</div>
          <div class="qmf-s">Budget annoncé = budget facturé</div>
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
        <div class="kpi-l">Forfait initial tenu<br>sur les projets livrés.</div>
      </div>
      <div class="kpi reveal reveal-d-2">
        <div class="kpi-n">30<span class="kpi-s">j</span></div>
        <div class="kpi-l">Garantie incluse<br>après livraison.</div>
      </div>
      <div class="kpi reveal reveal-d-3">
        <div class="kpi-n">1 500<span class="kpi-s">€</span></div>
        <div class="kpi-l">Pour cadrer.<br>Déduit si on part ensemble.</div>
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
        <h2>Quatre règles<br>qui ne bougent jamais.</h2>
      </div>
      <div class="right">
        Notre modèle économique tient en quatre principes, écrits dans chaque devis et dans nos CGV.
        Si on les enfreint un jour, c'est nous qui payons l'écart — pas vous.
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
        <h3>Discovery payé, déduit</h3>
        <p>2 jours, 1 500 €, livrable utilisable par n'importe qui. Si vous partez avec nous, c'est offert. Si vous ne partez pas, vous gardez tout.</p>
        <div class="prin-foot">
          <span class="prin-tag">−1 500 € PHASE 2</span>
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
        <h3>Tout est négociable, sauf le prix</h3>
        <p>On peut sortir des features, en remettre, étaler les paiements. Mais une fois signé, le total ne bouge pas. C'est notre contrat moral.</p>
        <div class="prin-foot">
          <span class="prin-tag">CONTRAT MORAL</span>
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
        <h2>Discovery Sprint<br><span class="accent">à 1 500 €.</span></h2>
        <p class="disc-lead">
          <b>2 jours payés</b> pour transformer une idée floue en un plan exécutable, chiffré et dérisqué.
          C'est le seul format où on engage du temps avant de signer un gros forfait. Si on part ensuite ensemble,
          <b>les 1 500 € sont déduits à 100 %</b>.
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
            <div><b>Devis phase 2 chiffré</b><br><span>Forfait ferme avec délai contractuel et clause de pénalité</span></div>
          </li>
        </ul>

        <div class="disc-foot">
          <a href="#contact" class="btn btn-accent btn-lg">
            Démarrer un Discovery
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="disc-foot-meta">
            <span class="disc-foot-pill">2 jours</span>
            <span>Démarrage sous 2 semaines</span>
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
            <span>Déduit à 100 % si phase 2</span>
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

<!-- FORFAITS PRINCIPAUX (4 plans) -->
<section class="pricing" id="forfaits">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Forfaits projet</div>
        <h2>Quatre formats,<br>un prix fixe par projet.</h2>
      </div>
      <div class="right">
        Du site vitrine au SaaS multi-utilisateurs, en passant par le partenariat long terme.
        On vous oriente vers le bon format pendant le Discovery — pas avant.
      </div>
    </div>

    <div class="price-grid">
      <div class="plan plan-discovery reveal">
        <div class="plan-tag">LE POINT DE DÉPART</div>
        <h4>Discovery Sprint</h4>
        <div class="plan-sub">2 jours payés pour transformer votre idée en plan exécutable. Aucun engagement sur la phase 2.</div>
        <div class="plan-price">
          <span class="amount">1 500 €</span>
          <span class="per">forfait 2 j.</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Specs fonctionnelles rédigées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Prototype Figma cliquable</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Architecture technique cadrée</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Devis phase 2 forfait fixe</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Déduit à 100 % si lancement</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Démarrer un Discovery</a></div>
      </div>

      <div class="plan reveal reveal-d-1">
        <div class="plan-tag">DÉMARRAGE</div>
        <h4>Essentiel</h4>
        <div class="plan-sub">Un site vitrine, une landing ou un MVP court. Idéal pour une première collaboration.</div>
        <div class="plan-price">
          <span class="amount">6–15 k€</span>
          <span class="per">forfait fixe</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Site 5–10 pages OU MVP 3–5 écrans</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Design sur mesure</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SEO technique de série</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement 1 an inclus</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 2–4 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Demander un devis</a></div>
      </div>

      <div class="plan featured reveal reveal-d-2">
        <div class="plan-badge">LE PLUS CHOISI</div>
        <div class="plan-tag">PROJET COMPLET</div>
        <h4>Standard</h4>
        <div class="plan-sub">Un SaaS, un outil interne ou une marketplace. Le sweet spot des PME ambitieuses.</div>
        <div class="plan-price">
          <span class="amount">25–60 k€</span>
          <span class="per">forfait fixe</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>10–15 écrans + back-office riche</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Workflows métier complexes</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Intégrations tierces (Stripe, Pennylane…)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Agents IA selon besoin</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Conformité RGPD clé en main</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Livraison 5–10 semaines</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-accent">Démarrer mon projet</a></div>
      </div>

      <div class="plan reveal reveal-d-3">
        <div class="plan-tag">CO-BUILD</div>
        <h4>Partenariat</h4>
        <div class="plan-sub">On devient votre équipe tech externalisée. Plusieurs projets, forfait mensuel.</div>
        <div class="plan-price">
          <span class="amount">8–20 k€</span>
          <span class="per">/ mois</span>
        </div>
        <div class="plan-hr"></div>
        <ul class="plan-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Équipe dédiée 2 à 5 personnes</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Roadmap co-construite</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA 99,9 % · astreinte Lun–Ven 8 h–20 h</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Engagement 6 mois minimum</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Equity en complément possible</li>
        </ul>
        <div class="plan-cta"><a href="#contact" class="btn btn-ghost">Parlons-en</a></div>
      </div>
    </div>

    <p class="pricing-note reveal">
      Tous les forfaits incluent : <b>propriété complète du code</b> · <b>repo Git chez vous</b> · <b>formation équipe</b> · <b>30 jours de garantie post-livraison</b>
    </p>
  </div>
</section>

<!-- TABLEAU PAR SERVICE -->
<section class="ptable">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Détail par service</div>
        <h2>Combien ça coûte<br>vraiment, par type<br>de projet ?</h2>
      </div>
      <div class="right">
        Les fourchettes ci-dessous sont calibrées sur <b>nos projets livrés et nos barèmes internes</b>.
        100 % de nos devis tombent <b>au milieu de la fourchette</b> annoncée — d'où notre confiance à les afficher.
        Pour situer ces prix par rapport au marché, poste par poste, lisez notre guide
        <a href="/guides/combien-coute-un-site-internet">combien coûte un site internet en 2026</a>.
      </div>
    </div>

    <div class="ptable-wrap reveal">
      <div class="ptable-head">
        <div class="ptcol ptcol-svc">SERVICE</div>
        <div class="ptcol">ENTRÉE</div>
        <div class="ptcol">STANDARD</div>
        <div class="ptcol">PREMIUM</div>
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
        <div class="ptcol"><b>6,9 k€</b><span>Essentiel — 3–5 pages</span></div>
        <div class="ptcol"><b>14,9 k€</b><span>Performance — 10–20 pages, blog</span></div>
        <div class="ptcol"><b>22 k€</b><span>Sur-mesure — multi-langue, e&#8209;com</span></div>
        <div class="ptcol ptcol-time"><b>2–14 sem.</b></div>
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
        <div class="ptcol"><b>15 k€</b><span>Essentiel — MVP 3–5 écrans</span></div>
        <div class="ptcol"><b>30 k€</b><span>Standard — 10–15 écrans + IA</span></div>
        <div class="ptcol"><b>120 k€</b><span>Partenariat — équipe dédiée</span></div>
        <div class="ptcol ptcol-time"><b>3–24 sem.</b></div>
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
        <div class="ptcol"><b>8 k€</b><span>Starter — process ciblé, 1 équipe</span></div>
        <div class="ptcol"><b>25 k€</b><span>Pro — CRM/ERP léger + intégrations</span></div>
        <div class="ptcol"><b>80 k€</b><span>Enterprise — SSO, multi-départements</span></div>
        <div class="ptcol ptcol-time"><b>2–12 sem.</b></div>
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
        <div class="ptcol"><b>15 k€</b><span>Launch — 500 produits, Stripe/Alma</span></div>
        <div class="ptcol"><b>30 k€</b><span>Scale — + app mobile, marketplaces</span></div>
        <div class="ptcol"><b>70 k€</b><span>Enterprise — B2B + multi-pays</span></div>
        <div class="ptcol ptcol-time"><b>6–16 sem.</b></div>
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
        <div class="ptcol"><b>+12,5 k€</b><span>compagnon d'un SaaS</span></div>
        <div class="ptcol"><b>30 k€</b><span>app autonome 8–12 écrans</span></div>
        <div class="ptcol"><b>60 k€</b><span>native complexe (BLE, AR)</span></div>
        <div class="ptcol ptcol-time"><b>4–10 sem.</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/referencement-google">
            <div class="ptcol-svc-ic" style="background:#FEF3C7;color:#92400E">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">SEO &amp; référencement</div>
              <div class="ptcol-svc-s">Audit, contenu, tech, netlinking</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>1 450 €/m</b><span>Fondations — 8 articles + 3 BL</span></div>
        <div class="ptcol"><b>2 850 €/m</b><span>Croissance — 14 articles + 6 BL</span></div>
        <div class="ptcol"><b>4 900 €/m</b><span>Premium — 20+ contenus + équipe</span></div>
        <div class="ptcol ptcol-time"><b>3 mois min.</b></div>
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
        <div class="ptcol"><b>1 800 €/m</b><span>Starter — 2 canaux + tracking SS</span></div>
        <div class="ptcol"><b>3 500 €/m</b><span>Scale — 3+1 canaux + 8-12 creatives</span></div>
        <div class="ptcol"><b>4 500 €/m</b><span>Premium — 4-6 canaux + équipe 3 pers.</span></div>
        <div class="ptcol ptcol-time"><b>3 mois min.</b></div>
      </div>

      <div class="ptable-row">
        <div class="ptcol ptcol-svc">
          <a href="/services/contenu-video">
            <div class="ptcol-svc-ic" style="background:#E0E7FF;color:#3730A3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            </div>
            <div>
              <div class="ptcol-svc-t">Contenu &amp; vidéo</div>
              <div class="ptcol-svc-s">Studio interne, motion, YouTube</div>
            </div>
          </a>
        </div>
        <div class="ptcol"><b>2 500 €</b><span>vidéo unique, sans engagement</span></div>
        <div class="ptcol"><b>3 500 €/m</b><span>YouTube Founder — 4 longues + 16 shorts</span></div>
        <div class="ptcol"><b>6 900 €/m</b><span>Content Retainer — 25+ livrables/mois</span></div>
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
        <div class="ptcol"><b>8 k€</b><span>Express — 3-5 j ouvrés, 1 senior</span></div>
        <div class="ptcol"><b>18 k€</b><span>Standard — 10 j, rapport 40-70 p.</span></div>
        <div class="ptcol"><b>38 k€</b><span>Deep — 15-20 j, restitution CEO/CTO/CFO</span></div>
        <div class="ptcol ptcol-time"><b>3–20 j. ouvrés</b></div>
      </div>
    </div>

    <div class="ptable-foot reveal">
      <div class="ptf-ic">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
      <div class="ptf-body">
        <b>Comment lire ce tableau ?</b> Les fourchettes sont par projet (forfait fixe), sauf pour SEO / Ads / Vidéo qui sont des prestations récurrentes.
        Le prix exact est figé après le Discovery Sprint, dans un devis ferme contractuel.
      </div>
      <a href="/demarrer-un-projet" class="btn btn-ghost ptf-cta">
        Décrire mon projet
        <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- INCLUS PARTOUT -->
<section class="included">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Inclus dans tous les forfaits</div>
        <h2>Tout ça, dans le prix.<br><span class="grad-accent">Sans option cachée.</span></h2>
      </div>
      <div class="right">
        Les agences classiques facturent en option ce qui devrait être la base.
        Chez nous, c'est inclus systématiquement et écrit noir sur blanc dans le devis.
      </div>
    </div>

    <div class="incl-grid">
      <div class="incl reveal">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg></div>
        <h4>Code 100 % à vous</h4>
        <p>Repo Git chez vous dès J+1. Aucun lock-in, aucune royalty, jamais.</p>
      </div>
      <div class="incl reveal reveal-d-1">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/></svg></div>
        <h4>Hébergement FR</h4>
        <p>Scaleway Paris ou OVH Roubaix, inclus 6 à 12 mois selon forfait.</p>
      </div>
      <div class="incl reveal reveal-d-2">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>Garantie 30 jours</h4>
        <p>Tout bug critique post-livraison est corrigé gratuitement, sans débat.</p>
      </div>
      <div class="incl reveal reveal-d-3">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div>
        <h4>Formation des équipes</h4>
        <p>Vos équipes savent utiliser le produit avant la mise en production.</p>
      </div>
      <div class="incl reveal">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg></div>
        <h4>Documentation à jour</h4>
        <p>Specs, architecture, runbook ops, README. Auto-générés &amp; versionnés.</p>
      </div>
      <div class="incl reveal reveal-d-1">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h4>Délai contractuel</h4>
        <p>Date de livraison fixée et contractualisée. Clause de pénalité de retard.</p>
      </div>
      <div class="incl reveal reveal-d-2">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h4>RGPD &amp; sécurité</h4>
        <p>Conformité dès la conception. Chiffrement at-rest, in-transit, audit logs.</p>
      </div>
      <div class="incl reveal reveal-d-3">
        <div class="incl-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div>
        <h4>Sauvegardes automatiques</h4>
        <p>Toutes les 15 minutes, retention 30 jours, restauration testée chaque semaine.</p>
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
        <h2>Forfaits Care.<br>On reste à vos côtés.</h2>
      </div>
      <div class="right">
        <a href="/services/maintenance-evolution" style="color:var(--accent-ink);text-decoration:underline">Hébergement, monitoring, sauvegardes, bug fixes, petites évolutions</a>.
        <b>Trois niveaux</b>, sans engagement de durée. Vous arrêtez quand vous voulez,
        avec préavis d'un mois.
      </div>
    </div>

    <div class="care-grid">
      <div class="care-card reveal">
        <div class="care-tag">CARE</div>
        <h3>Care</h3>
        <p class="care-sub">L'essentiel pour dormir tranquille. Idéal après un site vitrine ou un MVP léger.</p>
        <div class="care-price">
          <span class="amount">Sur devis</span>
          <span class="per">forfait mensuel</span>
        </div>
        <div class="care-hr"></div>
        <ul class="care-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Hébergement Scaleway Paris</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Sauvegardes auto 15 min</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Mises à jour sécurité</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Support email · 48h ouvrées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>2 h de petites évos / mois</li>
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
          <span class="per">forfait mensuel</span>
        </div>
        <div class="care-hr"></div>
        <ul class="care-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tout Care, plus :</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Monitoring 24/7 + alerting</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA 99,5 % (downtime &lt; 3h45/mois)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Support Slack · 4h ouvrées</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>8 h évos / mois (cumulables)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Audit perf trimestriel</li>
        </ul>
        <div class="care-cta"><a href="#contact" class="btn btn-accent">Activer Care+</a></div>
      </div>

      <div class="care-card reveal reveal-d-2">
        <div class="care-tag">CARE PRO</div>
        <h3>Care Pro</h3>
        <p class="care-sub">Pour les SaaS critiques avec usage 24/7, gros volumes ou contrainte de continuité de service.</p>
        <div class="care-price">
          <span class="amount">Sur devis</span>
          <span class="per">forfait mensuel</span>
        </div>
        <div class="care-hr"></div>
        <ul class="care-features">
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Tout Care+, plus :</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Astreinte 24/7 (1 h MTTR)</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>SLA 99,9 % avec pénalités</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>20 h évos / mois</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>DRP testé 2× / an</li>
          <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>Comité produit mensuel</li>
        </ul>
        <div class="care-cta"><a href="#contact" class="btn btn-ghost">Parler au gérant</a></div>
      </div>
    </div>

    <p class="care-note reveal">
      Pas d'engagement de durée, préavis d'un mois.
      <b>Coût d'hébergement réel facturé sans marge</b> au-delà des seuils inclus (40–200 €/mois selon trafic).
    </p>
  </div>
</section>

<!-- COMPARAISON HC vs marché -->
<section class="vsmarket">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— On se compare au marché</div>
        <h2>Pourquoi nos prix<br>tiennent la route ?</h2>
      </div>
      <div class="right">
        On a sondé une cinquantaine d'agences et freelances francophones sur les <b>mêmes briefs</b> que les nôtres.
        Voici ce qu'on a trouvé.
      </div>
    </div>

    <div class="vsm-table reveal">
      <div class="vsm-head">
        <div class="vsm-cell">CRITÈRE</div>
        <div class="vsm-cell vsm-cell-us">Hagnéré Code</div>
        <div class="vsm-cell">Agence classique</div>
        <div class="vsm-cell">Freelance</div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Modèle de facturation</div>
        <div class="vsm-cell vsm-cell-us"><b>Forfait fixe</b><span>Total signé, pas de surprise</span></div>
        <div class="vsm-cell"><span class="x">TJM + régie</span><span>Dérive de 30 à 80 %</span></div>
        <div class="vsm-cell"><span class="x">TJM</span><span>Aucune garantie de fin</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">MVP SaaS B2B (10 écrans)</div>
        <div class="vsm-cell vsm-cell-us"><b>30–60 k€</b><span>5–6 sem., devis ferme</span></div>
        <div class="vsm-cell"><span>80–150 k€</span><span>3–6 mois, sous-traitance</span></div>
        <div class="vsm-cell"><span>25–80 k€</span><span>Délai imprévisible</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Site vitrine 10 pages</div>
        <div class="vsm-cell vsm-cell-us"><b>8–15 k€</b><span>2–4 sem., LCP &lt; 1,5 s</span></div>
        <div class="vsm-cell"><span>15–35 k€</span><span>Template WordPress</span></div>
        <div class="vsm-cell"><span>4–10 k€</span><span>Qualité variable</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Discovery / cadrage</div>
        <div class="vsm-cell vsm-cell-us"><b>1 500 €</b><span>Déduit à 100 % phase 2</span></div>
        <div class="vsm-cell"><span class="x">Gratuit (= argument commercial)</span><span>Pour vendre, pas cadrer</span></div>
        <div class="vsm-cell"><span>500–2 000 €</span><span>Selon le freelance</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Propriété du code</div>
        <div class="vsm-cell vsm-cell-us"><b>Vous, dès J+1</b><span>Repo Git chez vous</span></div>
        <div class="vsm-cell"><span class="x">À la livraison</span><span>Parfois royalties</span></div>
        <div class="vsm-cell"><span>Variable</span><span>Lire le contrat</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Garantie après livraison</div>
        <div class="vsm-cell vsm-cell-us"><b>30 jours</b><span>Bug critique = corrigé gratuit</span></div>
        <div class="vsm-cell"><span>10 j max</span><span>Souvent contesté</span></div>
        <div class="vsm-cell"><span class="x">Aucune</span><span>Ou en option payante</span></div>
      </div>

      <div class="vsm-row">
        <div class="vsm-cell vsm-cell-label">Maintenance mensuelle</div>
        <div class="vsm-cell vsm-cell-us"><b>Sur devis</b><span>3 niveaux Care</span></div>
        <div class="vsm-cell"><span>800 € à 5 000 €</span><span>Souvent obligatoire</span></div>
        <div class="vsm-cell"><span class="x">À la demande</span><span>Délais aléatoires</span></div>
      </div>

      <div class="vsm-row vsm-verdict">
        <div class="vsm-cell vsm-cell-label">Verdict</div>
        <div class="vsm-cell vsm-cell-us"><b>Prix moyen, garanties premium</b></div>
        <div class="vsm-cell">Cher, sans contre-partie</div>
        <div class="vsm-cell">Pas cher, mais risqué</div>
      </div>
    </div>

    <div class="vsm-disclaimer reveal">
      <div class="vsm-dis-ic">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      </div>
      <span>
        Comparatif fondé sur 47 devis publics ou anonymisés (juin 2025 à mars 2026), pour des projets équivalents.
        Sources disponibles sur demande, on n'a rien à cacher.
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
        <h2>Ce qu'on<br><span class="strike-bad">ne fait pas</span><br>(et pourquoi).</h2>
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
        <h4>« 100 % equity, pas de cash »</h4>
        <p>On a une équipe à payer. Equity en complément d'un cash floor, oui. À la place du cash, jamais.</p>
        <div class="ref-because">→ on oriente vers des CTO indépendants ou des incubateurs.</div>
      </div>

      <div class="ref-card reveal reveal-d-1">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h4>Régie au TJM</h4>
        <p>On vend un livrable, pas du temps. La régie transfère le risque chez vous, et c'est le contraire de notre promesse.</p>
        <div class="ref-because">→ allez voir des ESN ou des plateformes type Malt.</div>
      </div>

      <div class="ref-card reveal reveal-d-2">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h4>Low-code (Bubble, Webflow logic)</h4>
        <p>Bien pour prototyper, piège technique au-delà de 10 utilisateurs payants. On préfère un code Next.js/TypeScript propre et durable.</p>
        <div class="ref-because">→ partenaires Bubble certifiés disponibles sur demande.</div>
      </div>

      <div class="ref-card reveal reveal-d-3">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h4>« Refais-moi un Uber pour X »</h4>
        <p>Si vous n'avez ni utilisateurs, ni distribution, ni vision claire, le code ne sauvera pas le projet. On vous fait perdre du temps.</p>
        <div class="ref-because">→ commencez par valider le marché, on en reparle après.</div>
      </div>

      <div class="ref-card reveal">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h4>Maintenance d'un projet qu'on n'a pas fait</h4>
        <p>Hors Discovery Sprint de cadrage (1 500 € HT). Reprendre du code mal écrit aveuglément, c'est nous mettre dans une position perdante.</p>
        <div class="ref-because">→ commençons par un audit, on décide ensuite.</div>
      </div>

      <div class="ref-card reveal reveal-d-1">
        <div class="ref-x">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </div>
        <h4>Devis sans Discovery préalable</h4>
        <p>Au-delà de 8 k€, on ne signe rien sans cadrage payé. Trop d'incertitudes, trop de mauvais devis. C'est protecteur pour les deux.</p>
        <div class="ref-because">→ Discovery Sprint 1 500 €, déduit si phase 2.</div>
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
        <h3>Décrivez votre projet<br><span class="accent">en 3 minutes.</span></h3>
        <p class="ct-lead">
          Quelques questions guidées sur votre besoin, votre contexte et vos délais —
          puis notre équipe lit votre brief et vous adresse une réponse personnelle
          et argumentée sous 24 h ouvrées. Pas de robot, pas d'appel commercial.
        </p>

        <div class="ct-bullets">
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> 3 minutes chrono</span>
          <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg> Réponse personnelle sous 24 h ouvrées</span>
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
            <div class="ct-mini-total-r">sous 24 h</div>
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
        <h2 style="margin-top:14px">Sur les prix.<br>Et la facturation.</h2>
        <p>Manquante ? <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">Posez-la directement</a>, on répond sous 24h ouvrées.</p>
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
            Le forfait nous oblige à <b>bien cadrer en amont</b> — c'est tout l'intérêt du Discovery Sprint à 1 500 €.
            Et c'est protecteur pour les deux : vous savez ce que vous payez, on sait ce qu'on doit livrer.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Que se passe-t-il en cas de dépassement de périmètre ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Le périmètre est <b>figé au cadrage</b> et signé. Si vous voulez ajouter des choses en cours de route,
            on chiffre l'ajout en <b>avenant clair</b> (toujours forfait fixe). Vous décidez si ça vaut le coup ou pas.
            On n'a jamais facturé de dépassement caché — toutes les évolutions sont chiffrées
            et acceptées avant de commencer.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Le Discovery Sprint à 1 500 € est-il vraiment déduit ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Oui, à 100 %.</b> Si vous lancez la phase 2 avec nous (sous 90 jours), les 1 500 € sont
            <b>retirés du devis final</b>. Si vous ne partez pas avec nous, vous gardez le prototype Figma
            et les specs — utilisables par n'importe quelle autre équipe. C'est un format peu engageant
            qui sert à <b>valider qu'on est la bonne agence</b> pour vous, et inversement.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Pourquoi des fourchettes (15-30 k€) et pas un prix sec ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Parce que tant qu'on n'a pas fait le Discovery, le périmètre n'est pas figé.
            Les fourchettes affichées ici sont le <b>résultat statistique de nos 23 derniers projets</b>
            par catégorie. À l'issue du Discovery Sprint, vous recevez un <b>devis ferme à un prix unique</b>,
            pas une fourchette — et c'est ce prix-là qui est contractuel.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Comment marchent les acomptes et l'échelonnement ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>30 % à la signature, 30 % à mi-parcours, 40 % à la livraison.</b> Pour les projets &gt; 50 k€,
            on peut découper en jalons mensuels avec acceptation de livrable à chaque étape.
            Paiement par <b>virement</b>, factures conformes Pennylane, TVA française récupérable.
            On accepte aussi les BPI / aides régionales — on vous aide à monter le dossier.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            L'hébergement et les outils tiers sont-ils compris ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>L'hébergement est inclus 6 à 12 mois</b> selon le forfait, puis facturé
            <b>à coût réel sans marge</b> au-delà (40 à 200 €/mois selon le trafic).
            Les outils tiers (Stripe, Loops, OpenAI, Claude, Twilio…) sont sur <b>vos comptes à vous</b>,
            vous les payez directement à l'éditeur. On ne fait jamais de revente avec marge — c'est un piège.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            La garantie 30 jours, ça veut dire quoi exactement ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>30 jours après la mise en production</b>, on corrige <b>gratuitement tout bug critique</b>
            (bloquant, sécurité, perte de data). Au-delà, c'est facturé en TJM ou couvert par un forfait
            <b>Care mensuel</b>. Les évolutions fonctionnelles (« on aimerait ajouter telle feature »)
            sont hors garantie dans tous les cas — c'est un nouveau périmètre, donc un nouveau devis.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous prenez de l'equity à la place du cash ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Uniquement en mode Partenariat long terme</b> avec un projet à fort potentiel — et <b>toujours en complément
            d'un cash floor</b> couvrant nos coûts directs. On ne fait pas de « 100 % equity ».
            Ce serait malhonnête vis-à-vis de nos équipes salariées, et ça ne sert pas votre projet
            non plus (le besoin de cash réel est rarement compatible avec un BFR à zéro).
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
            C'est une question de respect — vis-à-vis du client précédent qui a payé plein pot, et vis-à-vis
            de notre équipe qu'on doit payer correctement.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">
            Vous facturez les réunions et les allers-retours ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Non, jamais.</b> Le forfait inclut tous les calls, démos, allers-retours design et code reviews.
            On ne décompte rien à la minute — on est sur un livrable, pas sur du temps.
            Seules exceptions facturées : ateliers en présentiel hors Chambéry (déplacement à coût réel)
            et formations équipe au-delà des 4 h incluses.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
