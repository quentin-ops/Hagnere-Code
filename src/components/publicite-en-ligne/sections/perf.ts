export const perfHtml = `
<!-- ROI-SEO dashboard (remplace la section perf/CWV de sites-vitrines) -->
<section class="ads-perf">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— ROI mesuré, pas vanity</div>
        <h2>Le SEO qu'on fait<br>se mesure en euros.</h2>
      </div>
      <div class="right">
        Vous n'achetez pas des positions Google. Vous achetez du <b>trafic qualifié, des leads, du CA</b>.
        Notre reporting le prouve chaque mois — pas dans 12 mois.
      </div>
    </div>

    <div class="ads-perf-grid">
      <!-- Left : big dial (trafic +) -->
      <div class="ads-perf-dial reveal">
        <svg viewBox="0 0 240 240" width="100%" aria-hidden="true">
          <defs>
            <linearGradient id="adsPerfGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#6D28D9"/>
              <stop offset="1" stop-color="#A78BFA"/>
            </linearGradient>
          </defs>
          <circle cx="120" cy="120" r="96" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="14"/>
          <circle cx="120" cy="120" r="96" fill="none" stroke="url(#adsPerfGrad)" stroke-width="14" stroke-linecap="round" stroke-dasharray="540 604" transform="rotate(-90 120 120)"/>
          <text x="120" y="126" text-anchor="middle" font-family="Geist" font-weight="700" font-size="54" fill="#fff">12</text>
          <text x="120" y="156" text-anchor="middle" font-family="Geist Mono" font-size="10" fill="#A78BFA" letter-spacing="2">MOIS D'HORIZON</text>
        </svg>
        <div class="ads-perf-dial-caption">
          <div class="ads-perf-dial-kind">HORIZON DE TRAVAIL</div>
          <div class="ads-perf-dial-sub">Le SEO se joue sur 9 à 12 mois. Vos objectifs de clics organiques sont fixés avec vous au cadrage, puis suivis chaque mois dans le reporting.</div>
        </div>
      </div>

      <!-- Right : 4 metrics -->
      <div class="ads-perf-cwv reveal reveal-d-1">
        <div class="ads-perf-cwv-kicker">Les 4 KPIs qu'on suit chaque mois</div>

        <div class="ads-perf-cwv-row">
          <div class="ads-perf-cwv-label">
            <span class="ads-perf-cwv-abbr">Trafic</span>
            <span class="ads-perf-cwv-full">Clics organiques (Search Console)</span>
          </div>
          <div class="ads-perf-cwv-val">
            <b>+ 80 à + 300 %</b>
            <span>en 9–12 mois</span>
          </div>
          <div class="ads-perf-cwv-bar"><i style="width:88%"></i></div>
        </div>

        <div class="ads-perf-cwv-row">
          <div class="ads-perf-cwv-label">
            <span class="ads-perf-cwv-abbr">Positions</span>
            <span class="ads-perf-cwv-full">Mots-clés en top 10 Google</span>
          </div>
          <div class="ads-perf-cwv-val">
            <b>120 à 400</b>
            <span>nouveaux MC sur 9 mois</span>
          </div>
          <div class="ads-perf-cwv-bar"><i style="width:82%"></i></div>
        </div>

        <div class="ads-perf-cwv-row">
          <div class="ads-perf-cwv-label">
            <span class="ads-perf-cwv-abbr">Autorité</span>
            <span class="ads-perf-cwv-full">Domain Rating (Ahrefs)</span>
          </div>
          <div class="ads-perf-cwv-val">
            <b>DR + 15 à + 25</b>
            <span>en 10–12 mois</span>
          </div>
          <div class="ads-perf-cwv-bar"><i style="width:72%"></i></div>
        </div>

        <div class="ads-perf-cwv-row">
          <div class="ads-perf-cwv-label">
            <span class="ads-perf-cwv-abbr">CA</span>
            <span class="ads-perf-cwv-full">Revenu organique attribuable</span>
          </div>
          <div class="ads-perf-cwv-val">
            <b>ROI × 3 à × 6</b>
            <span>vs SEA équivalent</span>
          </div>
          <div class="ads-perf-cwv-bar"><i style="width:90%"></i></div>
        </div>

        <div class="ads-perf-cwv-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/><path d="M9 12l2 2 4-4"/></svg>
          <b>Ces plages sont documentées sur des cas clients récents</b>, screenshots Search Console vérifiables en call. Aucune promesse de position spécifique — Google l'interdit, on ne joue pas à ce jeu-là.
        </div>
      </div>
    </div>

    <!-- How we do it -->
    <div class="ads-perf-how reveal reveal-d-2">
      <div class="ads-perf-how-kicker">Comment on y arrive</div>
      <div class="ads-perf-how-grid">
        <div class="ads-perf-how-item"><div class="ads-perf-how-n">01</div><h4>Audit technique &amp; fix avant contenu</h4><p>Inutile d'ajouter des articles sur un site qui indexe mal. On corrige la technique d'abord, le contenu ensuite.</p></div>
        <div class="ads-perf-how-item"><div class="ads-perf-how-n">02</div><h4>Cocons sémantiques, pas articles isolés</h4><p>Page pilier + 8 à 15 pages filles reliées par maillage interne dense. La structure qui tient sur 3+ ans.</p></div>
        <div class="ads-perf-how-item"><div class="ads-perf-how-n">03</div><h4>Rédaction experte, pas IA brute</h4><p>Briefs précis, interview d'experts métier, validation SEO. 4 à 8 h de travail humain par article.</p></div>
        <div class="ads-perf-how-item"><div class="ads-perf-how-n">04</div><h4>Netlinking blanc, pas PBN</h4><p>Placements presse, partenariats sectoriels, RP digitales. Des liens qui tiennent 5 ans, pas 5 mois.</p></div>
        <div class="ads-perf-how-item"><div class="ads-perf-how-n">05</div><h4>Signaux E-E-A-T systématiques</h4><p>Pages auteurs, schema Person, sources citées, mentions externes. Critique depuis HCU 2023.</p></div>
        <div class="ads-perf-how-item"><div class="ads-perf-how-n">06</div><h4>Attribution CA business</h4><p>GA4 + CRM + Looker Studio. Vous voyez quelle page rapporte quel euro, pas juste du trafic brut.</p></div>
      </div>
    </div>
  </div>
</section>
`;
