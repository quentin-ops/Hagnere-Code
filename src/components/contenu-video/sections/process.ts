export const processHtml = `
<!-- PROCESS -->
<section class="cv-process">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Du brief au live</div>
        <h2>Six étapes. <br>Timeline annoncée, <em>tenue</em>.</h2>
      </div>
      <div class="right">
        Vous avez un slot Google Calendar pour chaque jalon. Kickoff le lundi, script le jeudi,
        première V1 en 7 jours. Si on glisse, vous le voyez en direct — on ne découvre pas la dérive à J+20.
      </div>
    </div>

    <!-- Timeline éditoriale façon roadmap de production -->
    <div class="cv-roadmap reveal reveal-d-1">
      <div class="cv-roadmap-axis" aria-hidden="true">
        <span class="cv-ra-tick" style="left:0%"><b>J+0</b></span>
        <span class="cv-ra-tick" style="left:20%"><b>J+3</b></span>
        <span class="cv-ra-tick" style="left:40%"><b>J+5</b></span>
        <span class="cv-ra-tick" style="left:60%"><b>J+7</b></span>
        <span class="cv-ra-tick" style="left:80%"><b>J+10</b></span>
        <span class="cv-ra-tick" style="left:100%"><b>J+14</b></span>
      </div>

      <!-- Track 1 : STRATÉGIE -->
      <div class="cv-roadmap-track">
        <div class="cv-roadmap-label">STRATÉGIE</div>
        <div class="cv-roadmap-lane">
          <div class="cv-roadmap-block cv-rm-block-a" style="left:0%;width:20%">
            <span class="cv-rm-num">01</span>
            <h4>Brief &amp; angle</h4>
            <p>Visio 30 min. On cadre l'objectif, l'audience, les KPIs. On sort avec un angle.</p>
            <div class="cv-rm-tag">1 SLOT · 30 MIN</div>
          </div>
          <div class="cv-roadmap-block cv-rm-block-b" style="left:20%;width:20%">
            <span class="cv-rm-num">02</span>
            <h4>Script &amp; storyboard</h4>
            <p>Claude rédige 3 angles, on polit à la main, vous validez en 1 clic.</p>
            <div class="cv-rm-tag">J+3 · V1 LIVRÉE</div>
          </div>
        </div>
      </div>

      <!-- Track 2 : PRODUCTION -->
      <div class="cv-roadmap-track">
        <div class="cv-roadmap-label">PRODUCTION</div>
        <div class="cv-roadmap-lane">
          <div class="cv-roadmap-block cv-rm-block-c" style="left:40%;width:20%">
            <span class="cv-rm-num">03</span>
            <h4>Tournage ou voix</h4>
            <p>Vous tournez 1h, on capte votre voix, ou on utilise un comédien selon votre choix.</p>
            <div class="cv-rm-tag">J+5 · ASSETS ACQUIS</div>
          </div>
          <div class="cv-roadmap-block cv-rm-block-d" style="left:60%;width:20%">
            <span class="cv-rm-num">04</span>
            <h4>Montage Premiere Pro</h4>
            <p>Un des deux monteurs senior assemble. J-cut, rythme, respiration — pas d'auto-cut algorithmique.</p>
            <div class="cv-rm-tag">J+7 · V1 MONTAGE</div>
          </div>
        </div>
      </div>

      <!-- Track 3 : POST & LIVE -->
      <div class="cv-roadmap-track">
        <div class="cv-roadmap-label">POST &amp; LIVE</div>
        <div class="cv-roadmap-lane">
          <div class="cv-roadmap-block cv-rm-block-e" style="left:80%;width:20%">
            <span class="cv-rm-num">05</span>
            <h4>Motion, sous-titres, localisation</h4>
            <p>Typo After Effects, lower thirds, burned-in subs FR/EN/DE si besoin.</p>
            <div class="cv-rm-tag">J+10 · V2 FINAL</div>
          </div>
          <div class="cv-roadmap-block cv-rm-block-f" style="left:100%;width:0%">
            <span class="cv-rm-num">06</span>
            <h4>Livraison + publication</h4>
            <p>Master ProRes + H.264, sortie sur vos canaux, dashboard VidIQ / GA4.</p>
            <div class="cv-rm-tag">J+14 · GO LIVE</div>
          </div>
        </div>
      </div>

      <!-- Playhead -->
      <div class="cv-roadmap-playhead" aria-hidden="true">
        <div class="cv-rm-playhead-line"></div>
        <div class="cv-rm-playhead-badge">
          <span class="cv-rm-playhead-dot"></span>
          EN PROD
        </div>
      </div>
    </div>

    <!-- Guarantees row -->
    <div class="cv-process-promise reveal">
      <div class="cv-pp-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg>
        <span><b>2 révisions majeures</b> incluses par vidéo</span>
      </div>
      <div class="cv-pp-sep"></div>
      <div class="cv-pp-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        <span><b>Délais contractualisés</b> · pénalité 7 %/sem au-delà de J+14</span>
      </div>
      <div class="cv-pp-sep"></div>
      <div class="cv-pp-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
        <span><b>Rushs à vous</b> · tous les fichiers sources livrés à la fin</span>
      </div>
    </div>
  </div>
</section>
`;
