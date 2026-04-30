export const refuseHtml = `
<!-- REFUSE / RED FLAGS -->
<section class="mob-refuse">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'on ne fait pas + erreurs à éviter</div>
        <h2>Sept signaux qui doivent<br>vous faire fuir une agence.</h2>
      </div>
      <div class="right">
        On préfère vous prévenir maintenant. Si vous consultez aussi d'autres studios,
        gardez ces signaux en tête — ils expliquent <b>la majorité des projets app qui finissent à la poubelle</b>.
      </div>
    </div>

    <div class="mob-refuse-grid">
      <div class="mob-refuse-card reveal">
        <div class="mob-refuse-flag">⚠ SIGNAL</div>
        <h4>Un devis ridiculement bas pour iOS + Android</h4>
        <p>
          Une app native iOS + Android propre demande des semaines de design, dev, tests sur vrais devices et soumission stores. Un prix anormalement bas, c'est presque toujours
          de la sous-traitance offshore non assumée, code livré sans tests, refus quasi-certain de l'App Store. <b>L'app finit à la poubelle dans 6 mois.</b>
        </p>
      </div>

      <div class="mob-refuse-card reveal reveal-d-1">
        <div class="mob-refuse-flag">⚠ SIGNAL</div>
        <h4>L'agence garde le code "tant que vous payez la maintenance"</h4>
        <p>
          C'est un classique : on vous fait signer un contrat où le code reste propriété de l'agence.
          Vous êtes prisonnier — chaque évolution se négocie. <b>Exigez clause de cession exclusive et totale</b>
          dans le devis (en France, sans cession écrite, l'agence reste propriétaire).
        </p>
      </div>

      <div class="mob-refuse-card reveal reveal-d-2">
        <div class="mob-refuse-flag">⚠ SIGNAL</div>
        <h4>"On vous crée le compte App Store, ne vous inquiétez pas"</h4>
        <p>
          Comprendre : le compte est <b>au nom de l'agence</b>. Si vous changez d'agence, vous perdez l'app, les avis,
          le ranking. Le compte développeur Apple <b>doit être à votre nom</b>, payé par vous, dès le départ.
          C'est non-négociable.
        </p>
      </div>

      <div class="mob-refuse-card reveal">
        <div class="mob-refuse-flag">⚠ SIGNAL</div>
        <h4>Pas de discovery / pas de prototype avant le forfait</h4>
        <p>
          Une agence qui signe un forfait sur un brief de 1 page sans cadrage écrit prend
          son risque… qu'elle compense par un coût élevé ET un scope flou. Vous finirez en
          dépassement. <b>Exigez un Discovery Sprint payant et structuré</b> avant tout chiffrage.
        </p>
      </div>

      <div class="mob-refuse-card reveal reveal-d-1">
        <div class="mob-refuse-flag">⚠ SIGNAL</div>
        <h4>"On code en natif Swift + natif Kotlin, c'est mieux"</h4>
        <p>
          Pour la grande majorité des apps PME, c'est <b>nettement plus cher pour des performances indiscernables</b> côté utilisateur final. React Native + Expo
          atteint 60 fps via Reanimated, gère push / paiement / biométrie nativement, et permet l'OTA. Le natif a sa place
          (jeu 3D, IoT BLE pointu, finance lourde) mais doit être justifié par un cas d'usage précis.
        </p>
      </div>

      <div class="mob-refuse-card reveal reveal-d-2">
        <div class="mob-refuse-flag">⚠ SIGNAL</div>
        <h4>Aucun mot sur la maintenance dans le devis</h4>
        <p>
          Une app non maintenue est désinstallée à 6 mois (compatibilité iOS, sécurité, crashs).
          Si l'agence ne propose <b>aucun forfait maintenance dimensionné</b>, soit elle vous le sortira
          en avenant après livraison (cher), soit l'app va mourir.
        </p>
      </div>

      <div class="mob-refuse-card reveal">
        <div class="mob-refuse-flag">⚠ SIGNAL</div>
        <h4>"On vous livrera tout d'un coup à la fin"</h4>
        <p>
          Effet tunnel mortel : 4 mois sans démo, puis livraison "finale" qui ne ressemble pas à votre brief.
          Une bonne agence vous met sur <b>TestFlight / Internal Testing dès le sprint 4</b> et vous fait
          installer l'app sur votre propre téléphone toutes les 2 semaines.
        </p>
      </div>

      <div class="mob-refuse-card reveal reveal-d-1">
        <div class="mob-refuse-flag mob-refuse-flag-self">↳ NOUS NON PLUS</div>
        <h4>Ce qu'on ne fait PAS, nous</h4>
        <p>
          <b>Pas d'apps de jeux 3D / AR lourd</b> (pas notre métier). <b>Pas d'apps "TikTok-killer" sans MVP cadré</b>.
          <b>Pas de devis sans Discovery Sprint payant</b>. <b>Pas de régie au TJM</b> (que des forfaits).
          <b>Pas de sous-traitance offshore cachée</b> — vous parlez à un associé qui code.
        </p>
      </div>
    </div>
  </div>
</section>
`;
