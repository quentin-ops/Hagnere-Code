export const serpAnatomyHtml = `
<!-- SERP ANATOMY — remplace l'Architecture SaaS, spécifique au contexte SEO -->
<section class="seo-serp" id="serp">
  <div class="seo-serp-bg-grid" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Où apparaît votre contenu</div>
        <h2 style="color:#fff">Le SERP Google en 2026<br>a 6 zones. On vise les 6.</h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.65)">
        AI Overviews, Featured Snippets, People Also Ask, Local Pack : les SERPs
        ne sont plus « 10 liens bleus ». Notre job, c'est de <b style="color:#fff">vous positionner partout
        où les clics tombent encore</b>.
      </div>
    </div>

    <div class="seo-serp-layout reveal reveal-d-1">
      <!-- SERP mockup -->
      <div class="seo-serp-mock">
        <div class="seo-serp-chrome">
          <div class="seo-serp-url">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>
            google.com/search?q=logiciel+gestion+pme
          </div>
        </div>

        <div class="seo-serp-inner">
          <!-- Search bar -->
          <div class="seo-serp-bar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span>logiciel gestion pme</span>
          </div>
          <div class="seo-serp-meta">Environ 12 400 000 résultats (0,42 s)</div>

          <!-- 01 : AI Overview -->
          <div class="seo-serp-zone seo-serp-ai">
            <span class="seo-serp-hot">01</span>
            <div class="seo-serp-ai-head">
              <span class="seo-serp-ai-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.92 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.08-1.01L12 2z"/></svg>
                Aperçu généré par l'IA
              </span>
              <span class="seo-serp-ai-sources">4 sources</span>
            </div>
            <div class="seo-serp-ai-body">
              Pour gérer efficacement une PME, privilégiez un outil qui centralise facturation,
              CRM et trésorerie. Les solutions modernes intègrent…
            </div>
            <div class="seo-serp-ai-src">
              <span class="seo-serp-src-pill">client-hc.fr</span>
              <span class="seo-serp-src-pill">comparatif.io</span>
              <span class="seo-serp-src-pill">bpifrance.fr</span>
              <span class="seo-serp-src-pill">+ 1</span>
            </div>
          </div>

          <!-- 02 : Featured Snippet -->
          <div class="seo-serp-zone seo-serp-fs">
            <span class="seo-serp-hot">02</span>
            <div class="seo-serp-fs-title">Qu'est-ce qu'un bon logiciel de gestion PME ?</div>
            <div class="seo-serp-fs-body">
              Un bon logiciel de gestion PME couvre 5 fonctions clés&nbsp;: facturation,
              devis, suivi de trésorerie, CRM, reporting…
            </div>
            <div class="seo-serp-fs-url">client-hc.fr › guides › logiciel-gestion-pme</div>
          </div>

          <!-- 03 : PAA -->
          <div class="seo-serp-zone seo-serp-paa">
            <span class="seo-serp-hot">03</span>
            <div class="seo-serp-paa-title">Autres questions posées</div>
            <div class="seo-serp-paa-row">Quel est le meilleur logiciel pour une PME de 20 salariés ?<span>▾</span></div>
            <div class="seo-serp-paa-row">Combien coûte un logiciel de gestion PME ?<span>▾</span></div>
            <div class="seo-serp-paa-row">Peut-on gérer une PME avec Excel uniquement ?<span>▾</span></div>
          </div>

          <!-- 04 : Organic Top 3 -->
          <div class="seo-serp-zone seo-serp-org">
            <span class="seo-serp-hot">04</span>
            <div class="seo-serp-org-item seo-serp-org-win">
              <div class="seo-serp-org-url">client-hc.fr › produit › pme</div>
              <div class="seo-serp-org-title">Logiciel de gestion pour PME · Tout-en-un · Client HC</div>
              <div class="seo-serp-org-desc">Facturation, CRM, trésorerie en un seul outil. Essai 14 jours, sans engagement. Utilisé par 3 400 PME…</div>
            </div>
            <div class="seo-serp-org-item">
              <div class="seo-serp-org-url">concurrent-a.com › gestion</div>
              <div class="seo-serp-org-title">Le meilleur logiciel PME 2026 — Concurrent A</div>
              <div class="seo-serp-org-desc">Notre solution de gestion PME couvre tous les besoins…</div>
            </div>
            <div class="seo-serp-org-item">
              <div class="seo-serp-org-url">concurrent-b.fr</div>
              <div class="seo-serp-org-title">Logiciel gestion entreprise · Concurrent B</div>
              <div class="seo-serp-org-desc">Plateforme cloud pour TPE et PME, à partir de 29 €/mois…</div>
            </div>
          </div>

          <!-- 05 : Local Pack -->
          <div class="seo-serp-zone seo-serp-local">
            <span class="seo-serp-hot">05</span>
            <div class="seo-serp-local-head">
              <span>Entreprises locales</span>
              <span class="seo-serp-local-meta">3 à proximité</span>
            </div>
            <div class="seo-serp-local-row">
              <div class="seo-serp-local-dot" style="background:#22C55E"></div>
              <div class="seo-serp-local-body">
                <div class="seo-serp-local-name">Conseil Info 73</div>
                <div class="seo-serp-local-rating">★ 4,9 · 42 avis · Chambéry</div>
              </div>
            </div>
            <div class="seo-serp-local-row">
              <div class="seo-serp-local-dot" style="background:#F59E0B"></div>
              <div class="seo-serp-local-body">
                <div class="seo-serp-local-name">PME Services Savoie</div>
                <div class="seo-serp-local-rating">★ 4,7 · 28 avis · Annecy</div>
              </div>
            </div>
            <div class="seo-serp-local-row">
              <div class="seo-serp-local-dot" style="background:#6D28D9"></div>
              <div class="seo-serp-local-body">
                <div class="seo-serp-local-name">Digital Alpes</div>
                <div class="seo-serp-local-rating">★ 4,8 · 19 avis · Grenoble</div>
              </div>
            </div>
          </div>

          <!-- 06 : Related -->
          <div class="seo-serp-zone seo-serp-rel">
            <span class="seo-serp-hot">06</span>
            <div class="seo-serp-rel-head">Recherches associées</div>
            <div class="seo-serp-rel-chips">
              <span>logiciel comptable pme</span>
              <span>ERP pour petite entreprise</span>
              <span>facturation en ligne</span>
              <span>crm pme gratuit</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6 zones annotées -->
    <div class="seo-serp-zones reveal reveal-d-2">
      <div class="seo-serp-zone-card">
        <div class="seo-serp-zone-head">
          <span class="seo-serp-zone-n">01</span>
          <span class="seo-serp-zone-k">AI Overview</span>
        </div>
        <h4>Être cité par l'IA de Google</h4>
        <p>Google cite 4 sources en tête de SERP depuis SGE/Gemini. <b>L'objectif</b>&nbsp;: devenir l'une de ces 4. Ça passe par E-E-A-T fort, données propriétaires, réponses structurées, schema Author.</p>
      </div>

      <div class="seo-serp-zone-card">
        <div class="seo-serp-zone-head">
          <span class="seo-serp-zone-n">02</span>
          <span class="seo-serp-zone-k">Featured Snippet</span>
        </div>
        <h4>La position zéro</h4>
        <p>Snippet volé à la position #1 par structure sémantique précise&nbsp;: H2 en question, réponse 40-60 mots juste dessous, liste à puces bien formatée. <b>20-35 % de CTR</b> en moyenne.</p>
      </div>

      <div class="seo-serp-zone-card">
        <div class="seo-serp-zone-head">
          <span class="seo-serp-zone-n">03</span>
          <span class="seo-serp-zone-k">People Also Ask</span>
        </div>
        <h4>Les questions associées</h4>
        <p>Chaque clic ouvre votre réponse&nbsp;: <b>+1 exposition par requête</b>. On structure chaque article avec FAQ schema + questions réellement posées par votre audience (extraites de Quora, Reddit, SearchConsole).</p>
      </div>

      <div class="seo-serp-zone-card">
        <div class="seo-serp-zone-head">
          <span class="seo-serp-zone-n">04</span>
          <span class="seo-serp-zone-k">Top 3 organique</span>
        </div>
        <h4>Là où 60 % des clics tombent encore</h4>
        <p>Cocons sémantiques denses + autorité topicale (backlinks qualitatifs + contenu pilier) + on-page impeccable. <b>Le cœur du métier</b>, ce qui fait la différence sur la durée.</p>
      </div>

      <div class="seo-serp-zone-card">
        <div class="seo-serp-zone-head">
          <span class="seo-serp-zone-n">05</span>
          <span class="seo-serp-zone-k">Local Pack</span>
        </div>
        <h4>Les 3 cartes sur fond Maps</h4>
        <p>GBP optimisé, citations locales (Pages Jaunes, Yelp, PJ), workflow avis, schema LocalBusiness. Pour artisans, cabinets, multi-sites&nbsp;: <b>visibilité garantie sur le bassin</b>.</p>
      </div>

      <div class="seo-serp-zone-card">
        <div class="seo-serp-zone-head">
          <span class="seo-serp-zone-n">06</span>
          <span class="seo-serp-zone-k">Related searches</span>
        </div>
        <h4>La longue traîne associée</h4>
        <p>Ces suggestions en bas de SERP sont des <b>requêtes dérivées</b> à fort potentiel. Couverture sémantique large = ranking sur 3-5× plus de mots-clés pour la même page pilier.</p>
      </div>
    </div>
  </div>
</section>
`;
