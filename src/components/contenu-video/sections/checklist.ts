export const checklistHtml = `
<!-- CHECKLIST inclus / hors scope -->
<section class="cv-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qui est inclus</div>
        <h2>Transparence totale<br>sur chaque livrable.</h2>
      </div>
      <div class="right">
        Voici ce qui rentre dans le forfait. Et ce qui n'y rentre pas (plutôt que de le découvrir à J+30).
      </div>
    </div>

    <div class="cv-check-grid">
      <!-- INCLUS -->
      <div class="cv-check-col reveal">
        <div class="cv-check-badge cv-check-badge-in">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
          INCLUS DANS CHAQUE FORFAIT
        </div>
        <h3>Tout ce qui rend la vidéo vendable.</h3>
        <ul class="cv-check-list">
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Brief &amp; stratégie</b> — 30 min visio, angle validé, KPIs définis.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Scripts rédigés</b> — Claude + relecture humaine, 3 angles proposés.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Montage Premiere Pro senior</b> — un des deux monteurs, jamais d'auto-cut.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Motion &amp; typo After Effects</b> — lower thirds, transitions, end card.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Sous-titres auto-générés</b> — FR natif + relus, multilangue ElevenLabs si besoin.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Déclinaisons natives</b> — 16:9, 1:1, 9:16 par canal (YouTube, Meta, Reels, TikTok).</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>2 révisions majeures</b> par vidéo, illimitées sur les micro-ajustements.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Musique &amp; banque de sons</b> — licences Artgrid / Epidemic Sound incluses.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Rushs livrés à la fin</b> — tous vos fichiers sources vous appartiennent.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div><div><b>Dashboard mensuel</b> — vues, CTR, CPM, rétention, ROAS selon canaux.</div></li>
        </ul>
      </div>

      <!-- HORS SCOPE -->
      <div class="cv-check-col cv-check-col-out reveal reveal-d-1">
        <div class="cv-check-badge cv-check-badge-out">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
          HORS SCOPE (ON LE DIT TÔT)
        </div>
        <h3>Ce qui n'est pas dans le forfait.</h3>
        <ul class="cv-check-list">
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Achat média</b> — Google Ads, Meta Ads budget, c'est votre service <b>publicité en ligne</b> à part.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Location studio externe</b> — notre studio Chambéry suffit à 90 %. Au-delà, refacturation.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Cachet comédien hors catalogue</b> — voix pro FR/EN de notre banque incluse, comédien custom sur devis.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Droit à l'image créateurs UGC externes</b> — contrats signés directement entre vous et eux.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Animation 3D photoréaliste</b> — on fait du motion 2D / 2.5D excellent, pas du Blender photoréaliste.</div></li>
          <li><div class="cv-check-ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div><div><b>Community management</b> — on publie, on ne répond pas aux commentaires (sauf option).</div></li>
        </ul>
      </div>
    </div>
  </div>
</section>
`;
