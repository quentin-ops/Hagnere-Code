export const techFaqHtml = `
<!-- TECH FAQ (CTO / dev senior) -->
<section class="mob-tech-faq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— FAQ technique</div>
        <h2>Pour les CTO, dev seniors,<br>et curieux qui creusent.</h2>
      </div>
      <div class="right">
        Réponses précises sur la stack, les choix d'archi, les permissions stores, l'observabilité.
        Si vous êtes dirigeant non-tech : sautez cette section et passez au CTA — tout est résumé en clair plus haut.
      </div>
    </div>

    <div class="mob-tech-faq-grid">
      <div class="mob-tech-faq-item reveal">
        <h3>Pourquoi Expo et pas React Native bare ?</h3>
        <p>
          La compatibilité d'Expo avec les modules requis (push, paiement, BLE, géolocalisation, biométrie, caméra ou fichiers) est vérifiée pendant le cadrage.
          On gagne <b>EAS Build, EAS Submit et EAS Update (OTA)</b> sans bricoler de scripts Fastlane custom.
          Si vous avez besoin d'un module natif tiers non couvert, on prebuild en mode "expo-dev-client" (vs ejecter).
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-1">
        <h3>Stratégie offline-first : optimistic UI, sync, conflits ?</h3>
        <p>
          Approche standard : <b>cache local SQLite (WatermelonDB ou Op-SQLite)</b>, queue de mutations,
          optimistic UI sur les actions utilisateur, sync différentielle à la reconnexion. Conflits gérés
          via <b>last-write-wins</b> par défaut, ou <b>CRDT (Y.js)</b> sur les cas collaboratifs de type éditeur partagé (notes, documents).
          Pour le chat temps réel, on s'appuie plutôt sur Stream Chat ou Pusher avec ordering serveur.
          On documente les invariants dans le runbook.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-2">
        <h3>Comment vous gérez ATT / IDFA / tracking iOS 14.5+ ?</h3>
        <p>
          Par défaut, <b>aucun tracking activé</b>. Si vous avez un budget Ads à mesurer, on ajoute AppsFlyer ou Adjust avec
          un opt-in ATT contextuel (jamais au cold start), configuré et recetté au regard des règles Apple. Pour le tracking
          analytics produit (DAU, rétention), on utilise des SDK first-party (Amplitude, PostHog, Firebase Analytics)
          qui ne déclenchent pas l'ATT.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-3">
        <h3>Apple IAP vs Stripe : où est la frontière exacte ?</h3>
        <p>
          Les règles de paiement varient selon le type de bien ou service, le pays, le programme applicable et les modalités autorisées au moment de la soumission.
          Le cadrage vérifie les règles Apple et Google à jour avant de retenir achat intégré, paiement externe ou un autre parcours,
          puis documente la justification nécessaire dans les consoles des stores.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal">
        <h3>Releases : OTA via EAS Update vs nouvelle build sur les stores ?</h3>
        <p>
          <b>OTA EAS Update</b> peut convenir à certains changements JS/TS, contenus, configurations et correctifs visuels, sous réserve de leur éligibilité et des règles des stores.
          Une <b>nouvelle build store</b> reste notamment nécessaire pour certaines modifications de code natif, permissions, SDK Expo ou version d'API cible.
          Les channels EAS, les tests, le rollback et le délai cible sont définis au devis&nbsp;; aucune diffusion instantanée ni absence de revue n'est promise.
          Le coût d'infrastructure EAS est cadré selon le volume et le plan Expo retenu.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-1">
        <h3>Observabilité, monitoring, alerting : la stack ?</h3>
        <p>
          <b>Sentry</b> pour le crash reporting cross-platform avec source maps + stack traces symbolisées (iOS dSYMs auto-uploadés).
          <b>Firebase Crashlytics</b> en backup natif. <b>PostHog</b> ou <b>Amplitude</b> pour les funnels. <b>UptimeRobot</b> sur l'API back-end.
          Alertes Slack / email sur seuils de crashs, ANR Android et latence API. Le délai cible sur les blocages dépend du forfait de maintenance signé.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-2">
        <h3>Tests : quel niveau de couverture, quels outils ?</h3>
        <p>
          <b>Jest</b> pour les tests unitaires de logique métier et <b>React Native Testing Library</b> pour les composants. Le niveau de couverture cible est défini selon les risques du produit.
          <b>Maestro</b> pour les flows end-to-end critiques (login, achat, push, paiement). <b>Detox</b> en complément si modules natifs custom.
          Lancés en CI sur GitHub Actions à chaque PR. Snapshots visuels via Jest + screenshots Maestro sur les écrans clés.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-3">
        <h3>Reprise d'app existante : audit, refactor, migration ?</h3>
        <p>
          On accepte les reprises Cordova / Ionic / Flutter / RN bare → migration React Native + Expo
          via une <b>phase d'audit payante</b> (chiffrée selon la taille du repo et la complexité). Livrable : rapport sur la dette, les bugs critiques,
          la stratégie de migration (rewrite vs refactor par modules), un chiffrage avec et sans préservation des données utilisateur.
          Migration de la base utilisateurs sans interruption (Apple Transfer App possible si même nom).
        </p>
      </div>
    </div>
  </div>
</section>
`;
