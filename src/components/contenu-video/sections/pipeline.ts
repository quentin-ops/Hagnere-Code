export const pipelineHtml = `
<!-- PIPELINE IA + ÉQUIPE HUMAINE (deux voies) -->
<section class="cv-pipeline">
  <div class="wrap">
    <div class="cv-pipeline-head reveal">
      <div class="eyebrow on-dark">— Deux voies, des responsables identifiés</div>
      <h2 style="margin-top:14px">Vous tournez. <em>Ou on s'occupe de tout.</em></h2>
      <p>
        Le devis nomme le responsable du montage et les éventuels spécialistes. L'IA n'est jamais seule à valider
        — elle accélère notre post-production invisible (scripts, b-roll, transcription, traduction, shorts).
        Vous avez le <b>choix complet</b> sur le degré d'implication de votre équipe.
      </p>
    </div>

    <div class="cv-pipeline-tracks">

      <!-- VOIE A : Vous tournez -->
      <article class="cv-track cv-track-a reveal">
        <div class="cv-track-label">VOIE A</div>
        <h3 class="cv-track-title">Vous tournez.<br>On <em>amplifie</em>.</h3>
        <p class="cv-track-intro">Vous avez une caméra, un iPhone, un smartphone Android. Vous tournez 1h par semaine en face cam, on prend le relais : montage, motion, b-roll, sous-titres, déclinaisons.</p>

        <ol class="cv-track-steps">
          <li>
            <div class="cv-step-ic cv-step-ic-human">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Vous tournez</strong>
              <span>iPhone / caméra / studio. Brief &amp; angle discutés en amont.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-human">VOUS</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-ai">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Transcription auto · chapitrage</strong>
              <span>Descript + Claude : on extrait la structure, on propose une timeline optimale.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-ai">IA</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-human">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Montage par l'intervenant identifié</strong>
              <span>Rythme, J-cut / L-cut, respiration. Un vrai monteur, pas un auto-cut IA.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-human">HUMAIN</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-ai">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>B-roll &amp; illustrations</strong>
              <span>Stock Artgrid / Pexels + Runway Gen-4 quand un plan très spécifique manque.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-ai">IA</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-human">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 4h16v16H4zM4 12h16M12 4v16"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Motion &amp; typo After Effects</strong>
              <span>Lower thirds, animations produit, transitions, end card. Design system vidéo à vous.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-human">HUMAIN</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-ai">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Shorts dérivés Opus Clip</strong>
              <span>1 long = 15 à 20 verticaux optimisés Reels / TikTok / Shorts, revus à la main.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-ai">IA</span>
          </li>
        </ol>

        <div class="cv-track-foot">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span>Délai typique · <b>7 à 10 jours</b> par vidéo longue</span>
        </div>
      </article>

      <!-- VOIE B : On s'occupe de tout -->
      <article class="cv-track cv-track-b reveal reveal-d-1">
        <div class="cv-track-label cv-track-label-full">VOIE B · CLÉ EN MAIN</div>
        <h3 class="cv-track-title">On s'occupe <em>de tout</em>.</h3>
        <p class="cv-track-intro">Vous n'avez pas le temps de tourner ? Pas à l'aise devant la caméra ? On gère de A à Z : script, voix (la vôtre clonée, ElevenLabs, ou un comédien humain), montage, motion, publication.</p>

        <ol class="cv-track-steps">
          <li>
            <div class="cv-step-ic cv-step-ic-ai">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Script par Claude + relecture humaine</strong>
              <span>On vous interviewe 30 min, Claude rédige 3 angles, on choisit ensemble, on polit à la main.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-hybrid">IA + HUMAIN</span>
          </li>
          <li class="cv-step-choice">
            <div class="cv-step-ic cv-step-ic-human">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Voix · 3 options au choix</strong>
              <div class="cv-step-opts">
                <span class="cv-step-opt"><b>A.</b> Vous enregistrez (10 min, dicté par téléphone)</span>
                <span class="cv-step-opt"><b>B.</b> Clone ElevenLabs v3 de votre voix (autorisation écrite)</span>
                <span class="cv-step-opt"><b>C.</b> Comédien humain FR / EN (banque de voix pro)</span>
              </div>
            </div>
            <span class="cv-step-tag cv-step-tag-choice">AU CHOIX</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-ai">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Visuel · b-roll &amp; avatars IA (optionnel)</strong>
              <span>Runway Gen-4 / Sora pour b-roll. HeyGen avatar (transparence : déclaré "vidéo IA" dans le fichier).</span>
            </div>
            <span class="cv-step-tag cv-step-tag-ai">IA</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-human">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Montage par l'intervenant identifié</strong>
              <span>Un vrai monteur assemble. Jamais d'auto-cut seul — le rythme décide, pas l'algo.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-human">HUMAIN</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-human">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Localisation 3 langues</strong>
              <span>FR / EN / DE doublées via ElevenLabs v3 (+ lip-sync HeyGen si visage à l'écran).</span>
            </div>
            <span class="cv-step-tag cv-step-tag-hybrid">IA + HUMAIN</span>
          </li>
          <li>
            <div class="cv-step-ic cv-step-ic-human">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 7h16M4 12h16M4 17h10"/></svg>
            </div>
            <div class="cv-step-body">
              <strong>Publication + analytics</strong>
              <span>Upload YouTube / Meta / LinkedIn avec vos codes. Dashboard mensuel VidIQ + GA4.</span>
            </div>
            <span class="cv-step-tag cv-step-tag-human">HUMAIN</span>
          </li>
        </ol>

        <div class="cv-track-foot">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span>Calendrier indicatif · <b>confirmé après brief</b> selon tournage, droits et validations</span>
        </div>
      </article>
    </div>

    <!-- Pipeline legend / ethics -->
    <div class="cv-pipeline-ethics reveal">
      <div class="cv-pipeline-ethics-ic">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      </div>
      <div class="cv-pipeline-ethics-body">
        <h4>Charte IA · transparente</h4>
        <p>
          <b>Avatar IA</b> : seulement avec votre accord écrit, déclaré comme "vidéo IA" dans les métadonnées
          et sous-titres. <b>Clone de voix</b> : uniquement la vôtre, autorisation explicite, destruction après mission.
          <b>B-roll IA</b> : toujours combiné à du stock ou du tournage réel, jamais 100% génératif. <b>Scripts IA</b> :
          toujours relus et validés par l'équipe avant livraison.
        </p>
      </div>
    </div>

  </div>
</section>
`;
