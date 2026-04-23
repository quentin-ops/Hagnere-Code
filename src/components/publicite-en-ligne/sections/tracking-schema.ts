export const trackingSchemaHtml = `
<!-- TRACKING SCHEMA — pipeline server-side, notre différenciant -->
<section class="ads-track" id="tracking">
  <div class="ads-track-bg-grid" aria-hidden="true"></div>
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— La mesure en 2026</div>
        <h2 style="color:#fff">Google et Meta voient la moitié<br>de vos conversions. On récupère<br>l'autre moitié.</h2>
      </div>
      <div class="right" style="color:rgba(255,255,255,0.65)">
        iOS 14, Consent Mode v2, ITP Safari, ad blockers : le tracking client-side perd
        <b style="color:#fff">30 à 50 % du signal</b>. Notre stack server-side reconnecte vos Ads à la réalité CRM.
      </div>
    </div>

    <!-- STATS : signal recovery -->
    <div class="ads-track-stats reveal">
      <div class="ads-track-stat">
        <div class="ads-track-stat-v">+42<span>%</span></div>
        <div class="ads-track-stat-k">Signaux de conversion récupérés</div>
        <div class="ads-track-stat-n">vs. setup client-side classique</div>
      </div>
      <div class="ads-track-stat ads-track-stat-hot">
        <div class="ads-track-stat-v">×2,3</div>
        <div class="ads-track-stat-k">ROAS affiché plus proche du réel</div>
        <div class="ads-track-stat-n">matching CRM vs. plateformes</div>
      </div>
      <div class="ads-track-stat">
        <div class="ads-track-stat-v">100<span>%</span></div>
        <div class="ads-track-stat-k">Conforme RGPD &amp; Consent Mode v2</div>
        <div class="ads-track-stat-n">modeled conversions incluses</div>
      </div>
      <div class="ads-track-stat">
        <div class="ads-track-stat-v">3<span>sem.</span></div>
        <div class="ads-track-stat-k">Pour déployer toute la stack</div>
        <div class="ads-track-stat-n">GTM SS + CAPI + EC + CRM webhook</div>
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
        <h4>Browser &amp; App</h4>
        <p>Visite, scroll, clic, formulaire, achat. First-party domain, cookies modernes, zéro pixel tiers qui casse sous ITP.</p>
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
        <h4>GTM Client minimal</h4>
        <p>Un seul script léger, pas une forêt de tags. Déclenche l'envoi vers notre conteneur serveur, jamais directement vers Meta ou Google.</p>
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
        <h4>GTM Server Container</h4>
        <p>Notre zone. Dedupe, enrichit (hash SHA-256 email/phone), filtre bots, applique Consent Mode, prépare les payloads par destination.</p>
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
        <h4>Destinations multiples</h4>
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
        <h4>Vos données, collectées sur votre domaine</h4>
        <p>Pas de cookies tiers bloqués par Safari / ITP / Firefox. Pas de pixels coupés par uBlock. <b>Chaque event part de votre sous-domaine</b> (ex. <code>metrics.votresite.com</code>).</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">02</span>
          <span class="ads-track-zone-k">Dedupe &amp; filtering</span>
        </div>
        <h4>1 conversion = 1 ligne propre</h4>
        <p>Un achat envoyé à Meta ET Google ET GA4 ET votre CRM, dedupé par <code>event_id</code>. <b>Fini les "Meta remonte 47 conv, le CRM en voit 19"</b>. Tout le monde voit la même vérité.</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">03</span>
          <span class="ads-track-zone-k">Conversion APIs</span>
        </div>
        <h4>Les algos reçoivent enfin du signal propre</h4>
        <p>Meta CAPI, Google Enhanced Conv., LinkedIn Conv API envoyés côté serveur avec email/phone hashés. <b>Enhanced Match 70-90 %</b> au lieu de 15-30 % en client-side.</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">04</span>
          <span class="ads-track-zone-k">CRM attribution</span>
        </div>
        <h4>Le lead devient client qualifié → won</h4>
        <p>Webhook vers HubSpot / Salesforce / Pipedrive / Zoho. Chaque stage (MQL, SQL, won, lost) remonte dans Ads et Looker. <b>Vous optimisez sur les deals signés, pas sur les form submits.</b></p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">05</span>
          <span class="ads-track-zone-k">Consent Mode v2</span>
        </div>
        <h4>RGPD sans perdre la mesure</h4>
        <p>Si le visiteur refuse les cookies, on envoie des signaux "ad_storage=denied" + modeled conversions Google. <b>Conforme CNIL, toujours un peu de donnée</b>. Pas de trou noir 40 %.</p>
      </div>

      <div class="ads-track-zone-card">
        <div class="ads-track-zone-head">
          <span class="ads-track-zone-n">06</span>
          <span class="ads-track-zone-k">Looker Studio</span>
        </div>
        <h4>Ads × CRM × margin, une seule vue</h4>
        <p>Dashboard live connecté au server-side. Vous voyez <b>CAC, LTV, payback</b>, margin contribuée par canal et par campagne. Le PDF d'impressions, c'est fini.</p>
      </div>
    </div>
  </div>
</section>
`;
