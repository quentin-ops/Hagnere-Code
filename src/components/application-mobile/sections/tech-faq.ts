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
        <h4>Pourquoi Expo et pas React Native bare ?</h4>
        <p>
          Expo SDK 53+ couvre 99 % des modules natifs dont une app PME a besoin (Push, IAP, Apple Pay, BLE, géoloc, biométrie, caméra, contacts, calendrier, fichiers).
          On gagne <b>EAS Build, EAS Submit et EAS Update (OTA)</b> sans bricoler de scripts Fastlane custom.
          Si vous avez besoin d'un module natif tiers non couvert, on prebuild en mode "expo-dev-client" (vs ejecter).
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-1">
        <h4>Stratégie offline-first : optimistic UI, sync, conflits ?</h4>
        <p>
          Approche standard : <b>cache local SQLite (WatermelonDB ou Op-SQLite)</b>, queue de mutations,
          optimistic UI sur les actions utilisateur, sync différentielle à la reconnexion. Conflits gérés
          via <b>last-write-wins</b> par défaut, ou <b>CRDT (Y.js)</b> sur les cas collaboratifs de type éditeur partagé (notes, documents).
          Pour le chat temps réel, on s'appuie plutôt sur Stream Chat ou Pusher avec ordering serveur.
          On documente les invariants dans le runbook.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-2">
        <h4>Comment vous gérez ATT / IDFA / tracking iOS 14.5+ ?</h4>
        <p>
          Par défaut, <b>aucun tracking activé</b>. Si vous avez un budget Ads à mesurer, on ajoute AppsFlyer ou Adjust avec
          un opt-in ATT contextuel (jamais au cold start), conforme aux guidelines Apple. Pour le tracking
          analytics produit (DAU, rétention), on utilise des SDK first-party (Amplitude, PostHog, Firebase Analytics)
          qui ne déclenchent pas l'ATT.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-3">
        <h4>Apple IAP vs Stripe : où est la frontière exacte ?</h4>
        <p>
          Règle Apple App Review §3.1 : <b>biens digitaux et abonnements consommés in-app</b> = Apple IAP obligatoire (15-30 %).
          <b>Biens physiques, services rendus hors app, livraisons, dons</b> = paiement web autorisé (Stripe / PayPlug, 0 % Apple).
          Cas tendus : SaaS B2B (Apple a assoupli), formations en ligne, contenus média : on cadre au discovery,
          on documente la justification dans App Store Connect.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal">
        <h4>Releases : OTA via EAS Update vs nouvelle build sur les stores ?</h4>
        <p>
          <b>OTA EAS Update</b> pour les changements JS/TS, copy, config, correctifs visuels = déploiement en 10 min sans review Apple/Google.
          <b>Nouveau build store</b> obligatoire pour : modification de code natif, ajout de permission, mise à jour SDK Expo, changement de version target API.
          On configure des <b>channels EAS</b> (preview, staging, production) pour rollback en 1 clic.
          Le coût d'infrastructure EAS (plan Expo) est cadré au devis selon le volume de MAU prévu.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-1">
        <h4>Observabilité, monitoring, alerting : la stack ?</h4>
        <p>
          <b>Sentry</b> pour le crash reporting cross-platform avec source maps + stack traces symbolisées (iOS dSYMs auto-uploadés).
          <b>Firebase Crashlytics</b> en backup natif. <b>PostHog</b> ou <b>Amplitude</b> pour les funnels. <b>UptimeRobot</b> sur l'API back-end.
          Alertes Slack / email sur seuils crashs, ANR Android, latence API. SLA 4 h ouvrées sur bloquants.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-2">
        <h4>Tests : quel niveau de couverture, quels outils ?</h4>
        <p>
          <b>Jest</b> pour les tests unitaires logique métier (~70 % couverture cible). <b>React Native Testing Library</b> pour les composants.
          <b>Maestro</b> pour les flows end-to-end critiques (login, achat, push, paiement). <b>Detox</b> en complément si modules natifs custom.
          Lancés en CI sur GitHub Actions à chaque PR. Snapshots visuels via Jest + screenshots Maestro sur les écrans clés.
        </p>
      </div>

      <div class="mob-tech-faq-item reveal reveal-d-3">
        <h4>Reprise d'app existante : audit, refactor, migration ?</h4>
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
