export const trackingSchemaHtml = `
<!-- TRACKING SCHEMA — pipeline server-side, notre différenciant -->
<section class="ads-track" id="tracking">
  <div class="ads-track-bg-grid" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— La mesure en 2026</div>
        <h2 style="color:#fff">Relier les événements publicitaires<br>aux données réellement exploitables.</h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.65)">
        Les restrictions des navigateurs, le consentement et les bloqueurs réduisent la mesure disponible.
        Une architecture server-side peut améliorer la fiabilité technique, sans contourner le choix de l'utilisateur ni garantir un volume récupéré.
      </div>
    </div>

    <!-- STATS : signal recovery -->
    <div class="ads-track-stats reveal">
      <div class="ads-track-stat">
        <div class="ads-track-stat-v">PLAN</div>
        <div class="ads-track-stat-k">Événements et finalités inventoriés</div>
        <div class="ads-track-stat-n">avant toute implémentation</div>
      </div>
      <div class="ads-track-stat ads-track-stat-hot">
        <div class="ads-track-stat-v">TEST</div>
        <div class="ads-track-stat-k">Déduplication et recettes documentées</div>
        <div class="ads-track-stat-n">sur les destinations retenues</div>
      </div>
      <div class="ads-track-stat">
        <div class="ads-track-stat-v">DROITS</div>
        <div class="ads-track-stat-k">Consentement et minimisation cadrés</div>
        <div class="ads-track-stat-n">avec validation juridique côté client</div>
      </div>
      <div class="ads-track-stat">
        <div class="ads-track-stat-v">DEVIS</div>
        <div class="ads-track-stat-k">Délai adapté aux accès</div>
        <div class="ads-track-stat-n">CMS, DNS, CMP, plateformes et CRM</div>
      </div>
    </div>

    <!-- PIPELINE : 4 stations -->
    <div class="ads-track-pipe reveal reveal-d-1">

      <!-- 01 -->
      <div class="ads-track-node ads-track-node-in">
        <div class="ads-track-node-head">
          <span class="ads-track-node-n">01</span>
          <div class="ads-track-node-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
        </div>
        <h3>Browser &amp; App</h3>
        <p>Visite, clic, formulaire ou achat selon le plan de marquage autorisé. Le domaine first-party ne neutralise ni ITP, ni le consentement, ni les bloqueurs.</p>
        <div class="ads-track-node-tags">
          <span>user.id</span>
          <span>event.id</span>
        </div>
      </div>

      <div class="ads-track-arrow" aria-hidden="true">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9h22M18 3l6 6-6 6"/></svg>
      </div>

      <!-- 02 -->
      <div class="ads-track-node">
        <div class="ads-track-node-head">
          <span class="ads-track-node-n">02</span>
          <div class="ads-track-node-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6 6 .9-4.5 4.4 1 6.7L12 17l-5.5 2.9 1-6.7L3 8.9 9 8l3-6z"/></svg>
          </div>
        </div>
        <h3>GTM Client minimal</h3>
        <p>Un plan de tags limité et documenté. Le routage direct ou server-side est choisi selon la plateforme et la configuration validée.</p>
        <div class="ads-track-node-tags">
          <span>dataLayer</span>
          <span>first-party</span>
        </div>
      </div>

      <div class="ads-track-arrow" aria-hidden="true">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9h22M18 3l6 6-6 6"/></svg>
      </div>

      <!-- 03 (core) -->
      <div class="ads-track-node ads-track-node-core">
        <div class="ads-track-node-head">
          <span class="ads-track-node-n">03</span>
          <div class="ads-track-node-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
        </div>
        <h3>GTM Server Container</h3>
        <p>Déduplique, filtre et prépare les données autorisées par destination. Le hachage n'anonymise pas automatiquement une donnée personnelle.</p>
        <div class="ads-track-node-tags">
          <span>dedupe</span>
          <span>enrich</span>
          <span>consent</span>
        </div>
        <div class="ads-track-node-badge">Notre stack</div>
      </div>

      <div class="ads-track-arrow" aria-hidden="true">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9h22M18 3l6 6-6 6"/></svg>
      </div>

      <!-- 04 -->
      <div class="ads-track-node ads-track-node-out">
        <div class="ads-track-node-head">
          <span class="ads-track-node-n">04</span>
          <div class="ads-track-node-ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h6M9 18h6M6 9v6M18 9v6"/></svg>
          </div>
        </div>
        <h3>Destinations multiples</h3>
        <p>Meta CAPI, Google Enhanced Conv., LinkedIn Conv API, GA4, CRM webhook, BigQuery, Slack alert. Un seul event source, N destinations propres.</p>
        <div class="ads-track-node-tags">
          <span>CAPI</span>
          <span>Enhanced Conv.</span>
          <span>CRM</span>
        </div>
      </div>

    </div>

    <!-- 6 zones annotées — pourquoi chaque couche compte -->
    <div class="ads-track-zones reveal reveal-d-2">
      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">01</span>
          <span class="ads-track-zone-k">First-party data</span>
        </div>
        <h3>Vos données, collectées sur votre domaine</h3>
        <p>Un sous-domaine first-party peut être prévu (ex. <code>metrics.votresite.com</code>). Il ne doit pas servir à contourner un refus de consentement ou les protections du navigateur.</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">02</span>
          <span class="ads-track-zone-k">Dedupe &amp; filtering</span>
        </div>
        <h3>1 conversion = 1 ligne propre</h3>
        <p>Un identifiant <code>event_id</code> permet de tester la déduplication entre destinations. Les écarts d'attribution peuvent subsister car les plateformes n'emploient pas toutes le même modèle.</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">03</span>
          <span class="ads-track-zone-k">Conversion APIs</span>
        </div>
        <h3>Les algos reçoivent enfin du signal propre</h3>
        <p>Meta CAPI, Google Enhanced Conversions ou LinkedIn Conversion API peuvent recevoir certains champs hachés lorsque la base légale, le consentement et les règles de la plateforme le permettent.</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">04</span>
          <span class="ads-track-zone-k">CRM attribution</span>
        </div>
        <h3>Le lead devient client qualifié → won</h3>
        <p>Un webhook CRM peut rapprocher les étapes MQL, SQL, won ou lost des campagnes lorsque les identifiants sont disponibles et que ce traitement est documenté.</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">05</span>
          <span class="ads-track-zone-k">Consent Mode v2</span>
        </div>
        <h3>Respecter le choix avant de mesurer</h3>
        <p>Les signaux <code>denied</code> et la modélisation éventuelle sont configurés selon la CMP et la validation juridique du client. Un refus ne donne pas droit à une collecte équivalente.</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">06</span>
          <span class="ads-track-zone-k">Looker Studio</span>
        </div>
        <h3>Ads × CRM × margin, une seule vue</h3>
        <p>Le tableau de bord expose les indicateurs calculables à partir des sources effectivement reliées, avec définitions et limites d'attribution.</p>
      </div>
    </div>
  </div>
</section>
`;
