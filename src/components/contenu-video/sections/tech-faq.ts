export const techFaqHtml = `
<!-- TECH/PROD FAQ contenu vidéo -->
<section class="cv-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques &amp; brand leads</div>
        <h2>Les questions qu'un DA,<br>un lead motion ou un brand<br>lead nous posent à chaque call.</h2>
      </div>
      <div class="right">
        Huit questions techniques qu'on entend systématiquement de la part des directions artistiques,
        head of brand, CMO exigeants. Réponses directes, sans bullshit marketing.
      </div>
    </div>

    <div class="cv-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Stack exact — qu'utilisez-vous vraiment en montage &amp; post ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Montage narration</b> : Adobe Premiere Pro (version CC 2025), jamais de templating générique.
          <b>Étalonnage</b> : DaVinci Resolve Studio (node-based, LUT custom par client).
          <b>Motion</b> : After Effects + Cavalry pour les courts, Cinema 4D + Redshift si 3D.
          <b>Natif web</b> : Rive + Lottie + GSAP + Three.js.
          <b>Son</b> : Adobe Audition pour le mix, iZotope RX pour le denoise.
          <b>Gestion rushs</b> : Frame.io (review) + Dropbox Replay + bunny.net pour la livraison client.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Quelle IA, concrètement, et à quelle étape du pipeline ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Scripts</b> : Claude Sonnet 4.5 avec prompts maison (tone of voice client, angle testé).
          <b>Voix</b> : ElevenLabs v3 (voix multilingues FR/EN/DE + clone de la vôtre si activé).
          <b>Rush secs</b> : Descript pour le transcript + cut silences, Opus Clip pour suggérer les shorts.
          <b>Avatars</b> : HeyGen <b>uniquement sur votre image avec consentement écrit</b>.
          <b>B-roll</b> : Runway Gen-4 + Sora 2 / Veo 3 pour inserts courts, toujours signalés en métadonnées.
          <b>L'IA ne valide jamais seule</b> — toujours un monteur senior en sortie.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Votre charte éthique IA — c'est écrit où ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Publiée sur <code>hagnere-code.fr/charte-ia</code> et annexée aux CGV. 4 principes : <b>(1)</b> aucun clone vocal / avatar sans consentement écrit signé, <b>(2)</b> aucune génération 100 % IA vendue comme "tournée", <b>(3)</b> aucune imitation de concurrent, <b>(4)</b> métadonnées de synthèse sur tous les inserts génératifs. Auditable par vos équipes legal.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Formats de livraison et specs par canal ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>YouTube</b> : H.264 4K 25p, bitrate 45 Mbps, miniature 1280×720 PNG.
          <b>Meta / TikTok / Reels</b> : H.264 1080×1920 9:16, 30 fps, &lt; 150 Mo, sous-titres burned-in.
          <b>LinkedIn</b> : 1080×1080 1:1, &lt; 200 Mo, version carrée native.
          <b>Web / Lottie</b> : JSON &lt; 500 Ko, 60 fps, compatible Rive si interactif.
          <b>Brand hero</b> : ProRes 422 HQ master + H.265 delivery.
          Fichiers livrés via bunny.net ou votre Dropbox / Google Drive.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Comment tenez-vous la cadence sur un retainer 25 livrables / mois ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Pipeline industriel à 5 postes parallélisés : <b>scriptwriter + DA + 2 monteurs + 1 motion designer</b>.
          Tournage groupé 1 fois par mois (6-8 h), dérushage J+2, premier cut J+5, révisions J+8, master J+10.
          Les shorts / dérivés partent sur un <b>second flux</b> avec Opus Clip en pré-tri + monteur junior
          qui finalise. Chaque livrable a son jalon dans <b>Notion</b>, vous le voyez en temps réel.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Licences musique, droit à l'image, archives — comment c'est géré ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Musique</b> : abonnements <b>Artgrid + Epidemic Sound</b> à notre nom, licences
          "paid media" activées (donc diffusables en ads). Sur demande, on peut mettre les licences
          <b>à votre nom</b> pour les vidéos hero.
          <b>Droit à l'image</b> : cessions signées pour chaque personne filmée,
          modèles fournis.
          <b>Archives (films, illustrations, rushs tiers)</b> : on privilégie Artgrid Stock,
          GettyImages si inévitable (surcoût à votre charge, devisé).
          <b>Fiche licence par livrable</b> jointe à la livraison finale.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Revues, révisions, validation — quel workflow concret ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Frame.io</b> pour les revues vidéo : timecode exact par commentaire, versions traquées,
          export des notes vers Premiere.
          <b>Dropbox Replay</b> en alternative si vous êtes déjà équipés.
          <b>2 révisions majeures incluses</b> par vidéo longue (cut + couleur + son), révisions mineures
          illimitées (typos, timing minuscule, remplacer une musique).
          Cycle de validation : <b>cut J+5 → feedback J+7 → master J+10</b>. Au-delà, révisions supplémentaires
          facturées à la journée (rare en pratique).
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Tournage en dehors de Chambéry — comment ça se passe ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Studio Chambéry</b> par défaut (fixe, fond blanc, scène éditoriale, lumières, son pro).
          Tournage <b>Paris / Lyon / Genève</b> inclus dans le retainer motion ou content (1 à 2 jours/mois).
          <b>Hors de cette zone</b> : refacturation des frais réels (train + hôtel + location matos si besoin),
          pas de surcoût prestation. Pour les campagnes hero multi-jours, équipe 2-4 personnes, budget
          voyage prévu au devis.
        </div>
      </div>
    </div>
  </div>
</section>
`;
