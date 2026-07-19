export const perfHtml = `
<!-- PERF / CORE WEB VITALS (unique to sites vitrines) -->
<section class="sv-perf">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Performance, pas option</div>
        <h2>Lighthouse 95+,<br>contractuellement.</h2>
      </div>
      <div class="right">
        Chaque seconde de latence = <b>-7 % de conversion</b> (source&nbsp;: Google). On ne vous demande pas
        de nous croire sur parole&nbsp;: <b>on l'inscrit dans le devis</b>. Si on ne livre pas les scores
        promis, on corrige gratuitement jusqu'à les atteindre.
      </div>
    </div>

    <div class="sv-perf-grid">
      <!-- Left : big dial -->
      <div class="sv-perf-dial reveal">
        <svg viewBox="0 0 240 240" width="100%" aria-hidden="true">
          <defs>
            <linearGradient id="svPerfGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#0CCE6B"/>
              <stop offset="1" stop-color="#34D399"/>
            </linearGradient>
          </defs>
          <circle cx="120" cy="120" r="96" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="14"/>
          <circle cx="120" cy="120" r="96" fill="none" stroke="url(#svPerfGrad)" stroke-width="14" stroke-linecap="round" stroke-dasharray="585 604" transform="rotate(-90 120 120)"/>
          <text x="120" y="132" text-anchor="middle" font-family="Geist" font-weight="700" font-size="64" fill="#fff">97</text>
          <text x="120" y="158" text-anchor="middle" font-family="Geist Mono" font-size="10" fill="#0CCE6B" letter-spacing="2">/ 100 · MOBILE</text>
        </svg>
        <div class="sv-perf-dial-caption">
          <div class="sv-perf-dial-kind">LIGHTHOUSE PERFORMANCE</div>
          <div class="sv-perf-dial-sub">Exemple illustratif d'un objectif de performance — à mesurer sur vos pages et conditions réelles.</div>
        </div>
      </div>

      <!-- Right : Core Web Vitals details -->
      <div class="sv-perf-cwv reveal reveal-d-1">
        <div class="sv-perf-cwv-kicker">Core Web Vitals — engagements contractuels</div>

        <div class="sv-perf-cwv-row">
          <div class="sv-perf-cwv-label">
            <span class="sv-perf-cwv-abbr">LCP</span>
            <span class="sv-perf-cwv-full">Largest Contentful Paint</span>
          </div>
          <div class="sv-perf-cwv-val">
            <b>&lt; 1,5 s</b>
            <span>bon seuil Google&nbsp;: 2,5 s</span>
          </div>
          <div class="sv-perf-cwv-bar"><i style="width:88%"></i></div>
        </div>

        <div class="sv-perf-cwv-row">
          <div class="sv-perf-cwv-label">
            <span class="sv-perf-cwv-abbr">CLS</span>
            <span class="sv-perf-cwv-full">Cumulative Layout Shift</span>
          </div>
          <div class="sv-perf-cwv-val">
            <b>&lt; 0,05</b>
            <span>bon seuil Google&nbsp;: 0,1</span>
          </div>
          <div class="sv-perf-cwv-bar"><i style="width:92%"></i></div>
        </div>

        <div class="sv-perf-cwv-row">
          <div class="sv-perf-cwv-label">
            <span class="sv-perf-cwv-abbr">INP</span>
            <span class="sv-perf-cwv-full">Interaction to Next Paint</span>
          </div>
          <div class="sv-perf-cwv-val">
            <b>&lt; 100 ms</b>
            <span>bon seuil Google&nbsp;: 200 ms</span>
          </div>
          <div class="sv-perf-cwv-bar"><i style="width:85%"></i></div>
        </div>

        <div class="sv-perf-cwv-row">
          <div class="sv-perf-cwv-label">
            <span class="sv-perf-cwv-abbr">TBT</span>
            <span class="sv-perf-cwv-full">Total Blocking Time</span>
          </div>
          <div class="sv-perf-cwv-val">
            <b>&lt; 150 ms</b>
            <span>bon seuil Google&nbsp;: 300 ms</span>
          </div>
          <div class="sv-perf-cwv-bar"><i style="width:78%"></i></div>
        </div>

        <div class="sv-perf-cwv-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg>
          Contrôles automatisés sur <b>chaque déploiement</b> via Lighthouse CI. Si un de ces seuils passe au rouge, le déploiement est bloqué.
        </div>
      </div>
    </div>

    <!-- How we do it -->
    <div class="sv-perf-how reveal reveal-d-2">
      <div class="sv-perf-how-kicker">Comment on y arrive</div>
      <div class="sv-perf-how-grid">
        <div class="sv-perf-how-item">
          <div class="sv-perf-how-n">01</div>
          <h4>Next.js en pré-rendu statique</h4>
          <p>HTML généré au build, servi en edge CDN. Pas de base de données à interroger à chaque requête, pas de PHP à exécuter.</p>
        </div>
        <div class="sv-perf-how-item">
          <div class="sv-perf-how-n">02</div>
          <h4>Images AVIF + lazy native</h4>
          <p>Conversion automatique AVIF/WebP, srcset responsive, placeholder blur, lazy loading natif. Jamais d'image &gt; 150 Ko.</p>
        </div>
        <div class="sv-perf-how-item">
          <div class="sv-perf-how-n">03</div>
          <h4>Fonts self-hosted avec preload</h4>
          <p>Geist / Inter / autres fonts auto-hébergées via next/font, subsetting latin-ext, preload du fichier critique, FOIT éliminé.</p>
        </div>
        <div class="sv-perf-how-item">
          <div class="sv-perf-how-n">04</div>
          <h4>JS critique &lt; 30 Ko</h4>
          <p>Zéro library superflue, pas de jQuery, pas de bundle de 300 Ko de Material UI. Que du code qu'on a écrit, que vous pouvez lire.</p>
        </div>
        <div class="sv-perf-how-item">
          <div class="sv-perf-how-n">05</div>
          <h4>CDN edge global</h4>
          <p>Vercel ou Cloudflare selon votre cible géographique. Contenu servi depuis le POP le plus proche du visiteur, latence &lt; 40 ms mondial.</p>
        </div>
        <div class="sv-perf-how-item">
          <div class="sv-perf-how-n">06</div>
          <h4>Monitoring RUM temps réel</h4>
          <p>Vercel Analytics ou Sentry pour mesurer les CWV réels de vos vrais visiteurs, pas juste un lab Lighthouse. Dashboard partagé inclus.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;
