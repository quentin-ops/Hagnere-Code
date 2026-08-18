import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { MobileFrameworkDecisionDossier } from "@/components/guides/MobileFrameworkDecisionDossier";
import {
  formatGuideDate,
  getGuide,
  guidePath,
  guideRobots,
  guideUrl,
} from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("react-native-ou-flutter");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  robots: guideRobots(guide),
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.cardTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/guides`,
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: `${SITE_URL}/equipe`,
    knowsAbout: [
      "Développement web",
      "Applications mobiles",
      "React Native",
      "React",
      "Next.js",
      "Chiffrage de projets web",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo-dark.png`,
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "React Native ou Flutter",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Quelle différence entre React Native avec Expo et React Native sans framework ?",
    answer:
      "Expo fournit un cadre recommandé pour démarrer une application React Native et peut ajouter des services de build ou de mise à jour. Le chemin sans framework donne davantage de contrôle direct sur les projets iOS et Android. Dans les deux cas, le devis doit nommer les services, les projets natifs, le coût, les accès et la manière de reconstruire sans le prestataire.",
  },
  {
    question: "Une équipe React web suffit-elle pour React Native ?",
    answer:
      "Non. React et TypeScript sont utiles, mais l’équipe doit aussi savoir traiter les permissions, les modules natifs, Xcode, Android, les signatures, les stores et les incidents sur appareils. Demandez un responsable et un remplaçant pour ces compétences.",
  },
  {
    question: "React Native ou Flutter : lequel coûte le moins cher ?",
    answer:
      "Aucun n’est systématiquement moins cher. Comparez le même produit et additionnez construction, modules, tests, accessibilité, services, maintenance technique, évolutions, temps interne et sortie à 12, 36 et 60 mois. Un poste inconnu reste ND et bloque le total.",
  },
  {
    question: "Faut-il choisir le natif pour avoir de bonnes performances ?",
    answer:
      "Pas par principe. Mesurez le même parcours dans une build de production, sur les appareils planchers, avec plusieurs répétitions et des résultats p50/p95. Le natif devient rationnel si une fonction de plateforme ou un seuil important échoue durablement dans les autres options.",
  },
  {
    question: "Comment vérifier le fonctionnement hors ligne ?",
    answer:
      "Testez le mode avion, le démarrage sans réseau, l’arrêt forcé, les écritures répétées, deux modifications concurrentes et la reconnexion. Le résultat attendu est une règle de conflit explicite, aucune perte silencieuse et aucun doublon non résolu.",
  },
  {
    question: "Une PWA peut-elle remplacer une application mobile ?",
    answer:
      "Oui si les fonctions indispensables sont disponibles sur les navigateurs et appareils ciblés, et si la distribution par les stores n’apporte pas de valeur décisive. Testez cependant installation, hors-ligne, notifications, stockage et permissions sur le parc réel : l’étiquette PWA ne garantit pas ces capacités.",
  },
  {
    question: "Peut-on migrer sans tout réécrire ?",
    answer:
      "Souvent oui. Commencez par isoler les contrats d’API, les données, les règles métier, les exports et les tests d’acceptation. Migrez ensuite une fonction ou un parcours, avec double exploitation et retour à l’état sain, avant de décider une réécriture complète.",
  },
  {
    question: "Qui doit posséder le code, les comptes et les certificats ?",
    answer:
      "L’entreprise doit contrôler le dépôt, les comptes Apple et Google, les certificats, les clés et les services, avec au moins un second administrateur. Une équipe tierce doit pouvoir reconstruire et diffuser une bêta sans l’ordinateur ni le compte personnel du prestataire initial.",
  },
];

const optionCards = [
  {
    title: "React Native",
    good: "À garder si une équipe React réellement mobile existe, si les modules passent la New Architecture et si Expo ou le chemin sans framework est nommé.",
    stop: "À écarter provisoirement si la compétence se limite au web, si le module critique reste incompatible ou si la build dépend d’un compte prestataire.",
  },
  {
    title: "Flutter",
    good: "À garder si l’équipe maîtrise Dart, les intégrations iOS/Android, les plugins et la reprise, avec un besoin réel de système visuel commun.",
    stop: "À écarter provisoirement si le choix repose seulement sur le rendu ou le rechargement rapide, sans responsable natif ni budget de migration.",
  },
  {
    title: "Natif iOS + Android",
    good: "À garder quand une fonction dépend fortement de chaque système, que les deux compétences sont disponibles et que le risque de plateforme domine.",
    stop: "À écarter provisoirement si deux surfaces de code et deux chaînes de livraison ne sont ni financées ni organisées.",
  },
  {
    title: "Kotlin Multiplatform",
    good: "À garder si une logique partagée importante existe et si la frontière entre code commun, UI Compose ou interfaces natives est écrite et testée.",
    stop: "À écarter provisoirement si le pourcentage de partage est supposé ou si personne ne maîtrise la chaîne Kotlin, Gradle, Xcode et iOS.",
  },
  {
    title: "Web mobile ou PWA",
    good: "À garder si l’accès par URL prime et si chaque capacité indispensable passe sur les navigateurs, appareils, réseaux et modes d’installation ciblés.",
    stop: "À écarter si une fonction obligatoire manque ou reste instable sur un appareil du parc ; pas parce qu’un ancien comparatif dit que le web est limité.",
  },
  {
    title: "Aucune nouvelle application",
    good: "À garder si un site mobile, un outil existant ou une amélioration de processus accomplit déjà les tâches sans coût mobile supplémentaire.",
    stop: "À écarter si une fonction appareil, un usage hors ligne ou une présence persistante apporte un bénéfice observé que le canal actuel ne fournit pas.",
  },
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "React Native ou Flutter" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Ne choisissez pas un logo : éliminez d’abord les options qui échouent sur votre fonction critique, vos appareils, l’accessibilité, la publication ou la reprise, puis comparez leur coût complet."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Six voies réellement ouvertes",
            description: "RN, Flutter, natif, KMP, web/PWA ou aucune app.",
            color: "violet",
          },
          {
            number: "02",
            title: "Les échecs passent avant le prix",
            description: "Une donnée perdue ou une build impossible élimine.",
            color: "blue",
          },
          {
            number: "03",
            title: "TCO à 12, 36 et 60 mois",
            description:
              "Maintenance, évolutions, temps interne et sortie séparés.",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "Avec un dossier copiable et imprimable.",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/combien-coute-une-application-mobile",
            label: "Chiffrer une application mobile",
          },
          {
            href: "/guides/cahier-des-charges-application-mobile",
            label: "Préparer le cahier des charges mobile",
          },
          {
            href: "/guides/application-gestion-interventions-terrain",
            label: "Cadrer une application terrain hors ligne",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "Choisir entre no-code et sur-mesure",
          },
          { href: "/services/application-mobile", label: "Application mobile" },
        ]}
        faqTitle="Questions restantes avant de choisir"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous hésitez entre <strong>React Native</strong> et{" "}
          <strong>Flutter</strong> pour une application iPhone et Android ?{" "}
          <strong>Aucun des deux ne gagne pour tous les projets.</strong>{" "}
          Commencez par vérifier qu&apos;une application installée apporte
          vraiment quelque chose qu&apos;un site mobile, une PWA ou votre outil
          actuel ne fournit pas. Si l&apos;app est utile, éliminez toute option
          qui échoue sur la fonction critique, le hors-ligne, les appareils,{" "}
          <strong>VoiceOver et TalkBack</strong>, la publication ou la reprise
          par une autre équipe. Comparez seulement ensuite le coût complet à 12,
          36 et 60 mois.
        </p>
        <p>
          Hagnéré Code travaille principalement avec React et peut donc être
          naturellement attiré par React Native. Ce biais est déclaré : le
          protocole ci-dessous peut conclure Flutter, développement natif,
          Kotlin Multiplatform, web/PWA ou aucune nouvelle application. Vous
          repartirez avec un dossier de preuves partageable, pas avec un score
          opaque qui choisit à votre place.
        </p>

        <GuideToc
          items={[
            { id: "besoin-app", label: "1. Vérifier le besoin d’une app" },
            { id: "six-voies", label: "2. Comparer les six voies" },
            { id: "snapshot-2026", label: "3. Dater les technologies" },
            {
              id: "fonction-eliminatoire",
              label: "4. Prototyper la fonction qui peut échouer",
            },
            {
              id: "appareils",
              label: "5. Mesurer sur appareils réels",
            },
            {
              id: "accessibilite",
              label: "6. Tester VoiceOver et TalkBack",
            },
            {
              id: "equipe-publication",
              label: "7. Prouver équipe, CI et stores",
            },
            { id: "tco", label: "8. Calculer le TCO 12/36/60" },
            {
              id: "maintenance-sortie",
              label: "9. Organiser maintenance et sortie",
            },
            { id: "scenarios", label: "10. Appliquer quatre scénarios" },
            {
              id: "dossier-decision",
              label: "11. Remplir le dossier de décision",
            },
            {
              id: "position",
              label: "12. Décider, reporter ou renoncer",
            },
          ]}
        />

        <h2 id="besoin-app">
          1. Vérifiez d&apos;abord si vous avez besoin d&apos;une application
        </h2>
        <p>
          Une application n&apos;est pas une version plus prestigieuse d&apos;un
          site. Elle ajoute des comptes de distribution, des certificats, des
          versions iOS et Android, des mises à jour et un produit à maintenir.
          Elle devient raisonnable lorsqu&apos;elle améliore une tâche précise
          grâce au téléphone, au fonctionnement hors ligne, à une diffusion
          contrôlée ou à une présence persistante.
        </p>
        <div className="not-prose my-6 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "La tâche actuelle",
              text: "Observez qui fait quoi, combien de fois, avec quelles erreurs, attentes et coupures réseau.",
            },
            {
              title: "La valeur propre au mobile",
              text: "Nommez la fonction qu’un simple site ou outil existant ne rend pas assez fiable.",
            },
            {
              title: "La solution la plus petite",
              text: "Testez d’abord processus, site responsive ou PWA avant de financer deux distributions mobiles.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Une <strong>PWA</strong> est un service web qui peut être installé et
          utiliser certaines fonctions du navigateur. Elle peut mettre des
          ressources en cache et fonctionner partiellement hors ligne, mais les
          capacités diffèrent selon les navigateurs et systèmes. Les{" "}
          <a
            href="https://web.dev/learn/pwa/capabilities"
            target="_blank"
            rel="noopener noreferrer"
          >
            capacités PWA documentées par web.dev
          </a>{" "}
          doivent donc être testées sur votre parc, fonction par fonction. Si
          aucune valeur mesurée n&apos;exige l&apos;installation ou les stores,
          « ne pas créer d&apos;app » est une décision complète, pas un échec de
          projet.
        </p>

        <h2 id="six-voies">
          2. Comparez six voies sur le même produit, pas deux logos
        </h2>
        <p>
          Le périmètre commun doit fixer les mêmes utilisateurs, parcours,
          appareils, données, serveur, règles hors ligne, accessibilité, tests,
          diffusion, documentation, maintenance et sortie. Une proposition qui
          retire les tests ou suppose une API déjà construite ne peut pas être
          comparée à une autre qui les inclut.
        </p>
        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          {optionCards.map((option) => (
            <article
              key={option.title}
              className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                {option.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Bon signal :</strong> {option.good}
              </p>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                <strong>Arrêt ou preuve manquante :</strong> {option.stop}
              </p>
            </article>
          ))}
        </div>
        <p>
          Kotlin Multiplatform n&apos;impose pas une seule frontière. Sa{" "}
          <a
            href="https://kotlinlang.org/docs/multiplatform.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation officielle
          </a>{" "}
          permet de partager la logique et de conserver des interfaces propres à
          iOS et Android ;{" "}
          <a
            href="https://www.jetbrains.com/compose-multiplatform/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compose Multiplatform
          </a>{" "}
          permet aussi de partager tout ou partie de l&apos;interface. Un devis
          KMP doit donc écrire les couches communes, celles qui restent natives,
          les deux chaînes de build et leur responsable. Le taux de partage
          n&apos;est pas une hypothèse à remplir avant cet inventaire.
        </p>
        <InfoBox
          variant="amber"
          title="Un critère éliminatoire passe avant toute note"
        >
          Une option qui perd des données, bloque un parcours accessible, échoue
          sur la fonction métier ou ne peut pas produire une build signée ne
          récupère pas ces défauts grâce à un prix plus bas. Si la preuve
          manque, marquez <strong>ND — non déterminé</strong>, jamais zéro.
        </InfoBox>

        <h2 id="snapshot-2026">
          3. Écrivez les versions et services réellement comparés
        </h2>
        <p>
          Au <strong>25 juillet 2026</strong>, la page officielle{" "}
          <a
            href="https://reactnative.dev/versions"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Native Versions
          </a>{" "}
          présente React Native <strong>0.86</strong> comme branche stable
          récente. Depuis la version 0.82, la{" "}
          <a
            href="https://reactnative.dev/blog/2025/10/08/react-native-0.82"
            target="_blank"
            rel="noopener noreferrer"
          >
            New Architecture est la seule architecture
          </a>
          . Son moteur d&apos;interface Fabric, ses TurboModules pour les
          fonctions natives et Codegen, qui génère les contrats entre JavaScript
          et le code natif, déplacent les points de compatibilité sans les faire
          disparaître. En pratique, tout module critique doit passer avec cette
          architecture : un ancien exemple qui compile ne suffit pas.
        </p>
        <p>
          La documentation React Native{" "}
          <a
            href="https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommande un framework tel qu&apos;Expo pour une nouvelle app
          </a>
          , tout en documentant un{" "}
          <a
            href="https://reactnative.dev/docs/getting-started-without-a-framework"
            target="_blank"
            rel="noopener noreferrer"
          >
            démarrage sans framework
          </a>
          . L&apos;Expo SDK 57 courant est associé à React Native 0.86 dans la{" "}
          <a
            href="https://docs.expo.dev/versions/latest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            référence Expo
          </a>
          . Un devis « React Native » doit donc préciser Expo, Continuous Native
          Generation, éventuels services EAS, projets natifs, coûts et sortie,
          ou expliquer pourquoi le chemin sans framework est retenu. Consignez
          aussi la version de l&apos;outil en ligne de commande, le canal de
          mise à jour, la <code>runtimeVersion</code> lorsqu&apos;elle est
          utilisée, le profil de build et la politique de montée de version. Le
          chemin sans framework doit nommer son modèle de projet et les versions
          iOS/Android avec la même précision.
        </p>
        <p>
          Côté Flutter, les{" "}
          <a
            href="https://docs.flutter.dev/release/release-notes"
            target="_blank"
            rel="noopener noreferrer"
          >
            notes de version officielles
          </a>{" "}
          listent la branche stable <strong>3.44.x</strong> et la documentation
          consultée reflète le patch 3.44.7. Flutter peut appeler du code propre
          à iOS et Android par des{" "}
          <a
            href="https://docs.flutter.dev/platform-integration/platform-channels"
            target="_blank"
            rel="noopener noreferrer"
          >
            platform channels
          </a>
          . React Native utilise de son côté des modules qui peuvent nécessiter
          spécification, Codegen, Kotlin/Java et Swift/Objective-C, comme
          l&apos;explique la documentation des{" "}
          <a
            href="https://reactnative.dev/docs/turbo-native-modules-introduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            Turbo Native Modules
          </a>
          . « Une base de code » ne signifie donc jamais « aucun code natif ».
        </p>
        <div className="not-prose my-6 rounded-xl border border-violet-200 bg-violet-50 p-4 text-sm leading-relaxed text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100">
          <strong>Bornes de publication au 25 juillet 2026 :</strong> Apple
          exige depuis le 28 avril 2026 des soumissions construites avec Xcode
          26 et un SDK 26 ou ultérieur, selon sa page{" "}
          <a
            className="underline"
            href="https://developer.apple.com/app-store/submitting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submitting to the App Store
          </a>
          . Google Play annonce qu&apos;à compter du 31 août 2026, les nouvelles
          apps et mises à jour ordinaires doivent cibler Android 16/API 36, avec
          les{" "}
          <a
            className="underline"
            href="https://developer.android.com/google/play/requirements/target-sdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            exceptions publiées par Google
          </a>
          . Ces dates doivent être revérifiées avant chaque soumission.
        </div>

        <h2 id="fonction-eliminatoire">
          4. Prototypez la fonction qui peut faire échouer le projet
        </h2>
        <p>
          Ne commencez pas par le tableau de bord le plus séduisant. Construisez
          d&apos;abord, de bout en bout, le parcours le plus risqué : par
          exemple, un technicien ouvre sa tournée, réalise dix interventions
          sans réseau, prend vingt photos, fait signer, ferme brutalement
          l&apos;app, puis se reconnecte sans perdre ni doubler une donnée.
          C&apos;est un{" "}
          <strong>exemple illustratif fictif</strong> à remplacer par votre
          tâche réelle.
        </p>
        <p>
          Le hors-ligne est d&apos;abord un problème de données. Il faut décider
          quelle source fait foi, comment chaque opération est identifiée, quand
          une écriture attend, comment la file survit à un arrêt et qui arbitre
          deux modifications concurrentes. Les guides{" "}
          <a
            href="https://developer.android.com/topic/architecture/data-layer/offline-first"
            target="_blank"
            rel="noopener noreferrer"
          >
            offline-first d&apos;Android
          </a>{" "}
          et{" "}
          <a
            href="https://docs.flutter.dev/app-architecture/design-patterns/offline-first"
            target="_blank"
            rel="noopener noreferrer"
          >
            de Flutter
          </a>{" "}
          décrivent cette architecture ; aucun framework ne remplit à votre
          place les règles métier de conflit.
        </p>
        <div className="not-prose my-6 grid gap-3 md:grid-cols-2">
          {[
            [
              "Caméra, fichiers et vingt photos",
              "Version du module, stockage temporaire, reprise d’upload, licence, données, mémoire et plan B natif.",
            ],
            [
              "BLE, scanner, MDM et tâche de fond",
              "Appareils exacts, permissions, politique d’OS, énergie, mainteneur et test après verrouillage.",
            ],
            [
              "Notifications, paiement et identité",
              "APNs/FCM ou SDK, ouverture du bon dossier, refus de permission, secrets et révocation.",
            ],
            [
              "Mesure et incidents",
              "SDK analytics/crash, données collectées, destinataires, rétention, retrait et solution de remplacement.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Pour chaque module ou SDK, inscrivez nom, version, licence,
          plateformes compatibles, données et permissions, responsable, signal
          de maintenance, code natif restant et nombre de jours pour le
          remplacer. Les{" "}
          <a
            href="https://www.cnil.fr/fr/applications-mobiles-comment-integrer-des-sdk-et-respecter-la-vie-privee-des-utilisateurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations de la CNIL sur les SDK mobiles
          </a>{" "}
          aident à poser les questions de vie privée ; elles ne remplacent pas
          l&apos;analyse applicable à votre service. La vérification doit
          confronter cet inventaire aux dépendances verrouillées, à
          <code>Info.plist</code>, au manifeste Android et aux réglages de build
          : une permission ou un destinataire absent du tableau reste un écart à
          instruire.
        </p>

        <h2 id="appareils">
          5. Mesurez une build de production sur les appareils planchers
        </h2>
        <p>
          Un écran fluide en développement ne prouve rien pour
          l&apos;utilisateur. React Native demande de contrôler la performance
          en{" "}
          <a
            href="https://reactnative.dev/docs/performance"
            target="_blank"
            rel="noopener noreferrer"
          >
            build release
          </a>
          . Flutter recommande un appareil physique en mode{" "}
          <a
            href="https://docs.flutter.dev/perf/ui-performance"
            target="_blank"
            rel="noopener noreferrer"
          >
            profile proche de la release
          </a>{" "}
          pour diagnostiquer, puis une build release pour accepter.
        </p>
        <ol>
          <li>
            Figez le même parcours, les mêmes données, le même commit et les
            versions de chaque dépendance.
          </li>
          <li>
            Prenez un appareil physique plancher et un appareil récent pour iOS
            et Android ; le parc réel doit remplacer les hypothèses.
          </li>
          <li>
            Testez Wi-Fi, réseau dégradé, perte intermittente, mode avion,
            démarrage hors ligne, arrière-plan et arrêt forcé.
          </li>
          <li>
            Écrivez avant le test les seuils métier : temps pour agir, taux de
            réussite, mémoire, énergie, perte et doublon acceptables.
          </li>
          <li>
            Conservez plusieurs répétitions. Pour un prototype, 30 lancements ou
            parcours par condition donnent des distributions p50 et p95 plus
            utiles qu&apos;une mesure isolée ; augmentez si la variance reste
            forte.
          </li>
        </ol>
        <p>
          <strong>p50</strong> signifie que la moitié des mesures est plus
          rapide et l&apos;autre moitié plus lente. <strong>p95</strong> montre
          une expérience lente mais fréquente : 95 % des mesures sont
          meilleures. Pour la synchronisation du prototype, cinquante cas
          scriptés de conflit, redémarrage et reconnexion constituent un minimum
          interne proposé, pas une garantie statistique. Le résultat
          éliminatoire reste l&apos;absence de perte silencieuse et de doublon
          non résolu observés dans le jeu de tests défini.
        </p>

        <h2 id="accessibilite">
          6. Faites terminer la tâche avec VoiceOver et TalkBack
        </h2>
        <p>
          React Native et Flutter exposent des fonctions d&apos;accessibilité,
          mais aucune API ne rend une application accessible par défaut. Les
          documentations{" "}
          <a
            href="https://reactnative.dev/docs/accessibility"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Native Accessibility
          </a>{" "}
          et{" "}
          <a
            href="https://docs.flutter.dev/ui/accessibility"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flutter Accessibility
          </a>{" "}
          demandent des contrôles propres aux plateformes.
        </p>
        <p>
          Sur un iPhone physique avec VoiceOver puis un Android physique avec
          TalkBack, rejouez le parcours complet : ordre de focus, nom, rôle,
          état, valeur, erreur reliée au champ, chargement annoncé,
          synchronisation, succès, affichage agrandi, contraste, cibles tactiles
          et réduction des animations. Ajoutez clavier matériel, commande
          externe, scanner ou signature lorsque les utilisateurs en ont besoin.
        </p>
        <InfoBox
          variant="blue"
          title="Acceptez une tâche accomplie, pas un attribut dans le code"
        >
          « Le bouton possède un libellé » n&apos;est pas une recette. La preuve
          doit dire si une personne peut ouvrir la tournée, saisir, corriger une
          erreur, joindre une photo et envoyer sans assistance visuelle. Un
          blocage sur une tâche obligatoire reste éliminatoire tant
          qu&apos;aucune correction raisonnable n&apos;est démontrée.
        </InfoBox>

        <h2 id="equipe-publication">
          7. Prouvez que l&apos;équipe peut construire, signer et transmettre
        </h2>
        <p>
          Une équipe React web n&apos;est pas automatiquement une équipe React
          Native. Une équipe Flutter n&apos;est pas automatiquement capable de
          corriger un plugin Swift ou Kotlin. Pour chaque capacité, nommez une
          personne principale, un remplaçant, une preuve sur la version actuelle
          et son délai de mobilisation : produit et données, React/TypeScript ou
          Dart, iOS/Swift, Android/Kotlin, hors-ligne, accessibilité, sécurité,
          CI, signature et stores.
        </p>
        <p>
          Depuis un clone propre, une personne qui n&apos;a pas écrit le code
          doit pouvoir :
        </p>
        <ol>
          <li>installer les versions exactes de l&apos;outillage ;</li>
          <li>reconstruire iOS et Android sans secret stocké sur un poste ;</li>
          <li>
            exécuter les tests unitaires, d&apos;intégration, de parcours et les
            contrôles natifs liés au risque ;
          </li>
          <li>produire des artefacts signés liés à un commit ;</li>
          <li>
            diffuser sur TestFlight et une piste Google Play interne, ou sur le
            MDM prévu ;
          </li>
          <li>
            retrouver journaux, plantages et versions, puis produire un
            correctif.
          </li>
        </ol>
        <p>
          Le dépôt, les comptes Apple et Google, les certificats, clés, secrets
          et services doivent être détenus par l&apos;entreprise, avec au moins
          un second administrateur. Une diffusion progressive limite
          l&apos;exposition, mais arrêter une publication ne retire pas
          instantanément la version déjà installée. Prévoyez donc API
          rétrocompatibles, migrations locales sûres, fonctions désactivables et
          procédure de correctif.
        </p>

        <h2 id="tco">8. Comparez le coût complet à 12, 36 et 60 mois</h2>
        <p>
          Le <strong>TCO</strong>, ou coût complet, additionne une seule fois le
          cadrage, la construction, le code natif, les données/API, les tests,
          l&apos;accessibilité, la CI et les stores. Il ajoute ensuite, pour
          chaque année, la maintenance technique, les évolutions métier, les
          incidents, les services et le temps interne, puis le coût de sortie.
          Les deux options doivent conserver les mêmes fonctions et le même
          horizon.
        </p>
        <div className="not-prose my-6 rounded-xl border border-zinc-200 bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-100 sm:p-5 sm:text-sm">
          TCO(H) = construction initiale + coûts fixes
          <br />+ années × (maintenance technique + évolutions métier +
          incidents/sécurité + temps interne + services)
          <br />+ sortie et reprise à l&apos;horizon H
        </div>
        <p>
          Voici un <strong>exemple illustratif fictif</strong>. Il ne représente
          ni React Native, ni Flutter, ni un prix de marché. Les deux offres
          utilisent 650 € HT par journée technique, 500 € par journée interne,
          110 jours communs, 3 000 € de mise en place, 12 jours
          d&apos;évolutions, 6 jours d&apos;incidents, 8 jours internes et 4 800
          € de services par an, puis 12 jours de sortie. A ajoute 6 jours au
          départ et 20 jours de maintenance technique par an ; B ajoute 16 jours
          au départ et 18 jours par an.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              horizon: "12 mois",
              a: "A : 119 700 € HT",
              b: "B : 124 900 € HT",
              conclusion: "A coûte 5 200 € de moins.",
            },
            {
              horizon: "36 mois",
              a: "A : 186 700 € HT",
              b: "B : 189 300 € HT",
              conclusion: "L’écart tombe à 2 600 €.",
            },
            {
              horizon: "60 mois",
              a: "A : 253 700 € HT",
              b: "B : 253 700 € HT",
              conclusion: "Égalité dans ce scénario.",
            },
          ].map((item) => (
            <div
              key={item.horizon}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {item.horizon}
              </h3>
              <p className="mb-0 mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                {item.a}
                <br />
                {item.b}
              </p>
              <p className="mb-0 mt-2 text-xs font-semibold text-violet-700 dark:text-violet-300">
                {item.conclusion}
              </p>
            </div>
          ))}
        </div>
        <p>
          A économise dix jours au départ, soit 6 500 € HT. B économise deux
          jours de maintenance par an, soit 1 300 € HT : il absorbe l&apos;écart
          initial en cinq ans. Si un module critique ajoute vingt jours de code
          natif, tests et stabilisation à une option, la sensibilité vaut 20 ×
          650 = <strong>13 000 € HT</strong> et peut renverser le choix dès la
          première année. C&apos;est pourquoi le prototype du risque apporte
          plus qu&apos;un classement mondial.
        </p>

        <h2 id="maintenance-sortie">
          9. Séparez l&apos;entretien, les nouvelles fonctions et la sortie
        </h2>
        <div className="not-prose my-6 grid gap-3 md:grid-cols-2">
          {[
            [
              "Correctifs",
              "Plantage, perte, faille ou échec de build ; ce n’est pas une nouvelle fonction.",
            ],
            [
              "Prévention et adaptation",
              "Versions RN/Expo ou Flutter/Dart, SDK OS, plugins, target API, Xcode et politiques de store.",
            ],
            [
              "Évolutions métier",
              "Nouvel écran, nouvelle règle ou nouveau périphérique ; à budgéter séparément.",
            ],
            [
              "Exploitation",
              "Monitoring, certificats, secrets, services, support et traitement des incidents.",
            ],
            [
              "Reprise",
              "Documentation, checkout propre, build tierce, export des données et transfert des comptes.",
            ],
            [
              "Migration ou arrêt",
              "Maintien, migration progressive avec double exploitation, réécriture ou retour au web.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          La possibilité de changer ne se prouve pas par « technologies
          standards ». Une autre équipe doit reconstruire et publier une bêta,
          importer un export de données, retrouver les contrats d&apos;API et
          remplacer au moins sur le papier le module critique. Si cet exercice
          échoue, le coût de sortie reste ND ou l&apos;option échoue à la porte
          de reprise.
        </p>
        <p>
          Une migration devient rationnelle lorsqu&apos;une fonction stratégique
          ne peut plus évoluer, que les mises à niveau consomment une capacité
          devenue insoutenable, qu&apos;un module est abandonné, que les seuils
          mesurés restent hors d&apos;atteinte ou qu&apos;aucune équipe ne sait
          reprendre. Comparez alors maintien, migration par tranche avec double
          exploitation, réécriture complète et arrêt/retour au web. Un
          pourcentage de code « réutilisable » sans inventaire par couche ne
          permet pas de choisir.
        </p>
        <p>
          Le contrat de support doit transformer le budget annuel en capacité
          vérifiable : versions de RN/Expo ou Flutter/Dart et versions d&apos;OS
          prises en charge, journées réservées par catégorie, délai de prise en
          charge, responsable, remplaçant, plafond et règle au-delà du plafond.
          Les incidents, correctifs de sécurité et adaptations aux stores ne
          doivent pas consommer silencieusement l&apos;enveloppe des évolutions
          métier. Programmez enfin un exercice de mise à niveau depuis la
          version précédente, sur un clone propre, avant de promettre
          qu&apos;une upgrade annuelle est « comprise ».
        </p>

        <h2 id="scenarios">
          10. Voyez comment la décision change dans quatre situations
        </h2>
        <div className="not-prose my-6 space-y-4">
          {[
            {
              title: "Service consultatif, réseau normalement disponible",
              text: "Dossiers, formulaire court et photo occasionnelle, sans tâche de fond ni store obligatoire. Commencez par un web mobile ou une PWA ; aucune app gagne si l’installation ne change aucune tâche mesurée.",
            },
            {
              title: "Interventions pendant 24 heures sans réseau",
              text: "Dix interventions, vingt photos, signature et conflits possibles. RN, Flutter, KMP et natif restent candidats seulement après le test de stockage, file, arrêt forcé, reconnexion et absence de perte silencieuse observée ; une PWA reste candidate si elle passe sur le parc.",
            },
            {
              title: "Bluetooth, MDM ou tâche de fond critique",
              text: "Prototypez d’abord la fonction sur le matériel réel. Le natif sert de contrôle ; RN ou Flutter restent en lice si un module maintenu ou du code natif interne passe. Sur un parc mono-OS, comparez aussi une app native unique.",
            },
            {
              title: "Produit et équipe déjà en place",
              text: "Une équipe React mobile, Flutter, Android/Kotlin ou deux apps natives constitue un patrimoine seulement si elle réduit des jours prouvés et possède un relais. Partager une couche ou moderniser peut coûter moins qu’une réécriture.",
            },
          ].map((scenario, index) => (
            <article
              key={scenario.title}
              className="grid gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900 sm:grid-cols-[auto_1fr]"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-violet-700 text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                  {scenario.title}
                </h3>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {scenario.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <h2 id="dossier-decision">
          11. Remplissez deux dossiers avant de demander un devis final
        </h2>
        <p>
          L&apos;outil ci-dessous ne donne aucun conseil automatique et
          n&apos;envoie aucune donnée. Il oblige A et B à passer les mêmes
          portes, conserve chaque inconnue en ND et calcule le même TCO. Vous
          pouvez comparer React Native et Flutter, mais aussi Flutter et natif,
          RN et PWA, ou une app et le statu quo.
        </p>
        <MobileFrameworkDecisionDossier />

        <h2 id="position">
          12. Choisissez la plus petite option qualifiée — ou reportez
        </h2>
        <p>
          <strong>Position Hagnéré Code au 25 juillet 2026 :</strong> ne
          choisissez ni React Native ni Flutter avant d&apos;avoir vérifié le
          besoin d&apos;app, puis la fonction qui peut faire échouer le produit.
          Parmi les options qui passent, retenez la plus petite architecture que
          l&apos;équipe et son remplaçant peuvent publier, maintenir et
          reprendre dans un TCO acceptable. Notre maîtrise de React rend React
          Native efficace dans certains projets ; elle ne transforme pas cette
          familiarité en preuve de supériorité.
        </p>
        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100">
            <h3 className="m-0 text-sm font-bold">
              Un accompagnement peut être utile
            </h3>
            <ul className="mb-0 mt-3 space-y-2 pl-5 text-sm leading-relaxed">
              <li>plusieurs options passent encore les premières portes ;</li>
              <li>
                une fonction native, le hors-ligne ou les données concentrent le
                risque ;
              </li>
              <li>deux offres ne couvrent pas les mêmes responsabilités ;</li>
              <li>
                comptes, modules, publication ou reprise restent difficiles à
                prouver ;
              </li>
              <li>une hypothèse fait fortement varier le TCO.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
            <h3 className="m-0 text-sm font-bold">
              Il vaut mieux attendre ou ne pas nous solliciter
            </h3>
            <ul className="mb-0 mt-3 space-y-2 pl-5 text-sm leading-relaxed">
              <li>
                la technologie est imposée et aucune preuve ne peut changer la
                décision ;
              </li>
              <li>
                utilisateurs, tâche, données ou personne responsable ne sont pas
                disponibles ;
              </li>
              <li>
                la demande consiste seulement à valider un logo déjà préféré ;
              </li>
              <li>un site mobile ou un outil existant satisfait le besoin ;</li>
              <li>aucune personne ne peut accepter les risques résiduels.</li>
            </ul>
          </div>
        </div>

        <GuideInlineCTA
          title="Faire challenger votre dossier avant le devis final"
          description="Transmettez le besoin, les deux options, la fonction éliminatoire, les portes encore ND et les hypothèses TCO. La relecture vise une liste concrète de preuves à obtenir avant de choisir, y compris si une PWA, un outil existant ou un report est préférable."
          tags={[
            "Six voies considérées",
            "Inconnues conservées",
            "Aucun framework imposé",
          ]}
          ctaLabel="Demander la relecture du dossier"
          ctaHref="/demarrer-un-projet"
        />

        <p>
          Si vous devez maintenant formaliser les fonctions, les responsabilités
          et les critères de réception, poursuivez avec le{" "}
          <Link href="/guides/cahier-des-charges-application-mobile">
            cahier des charges d&apos;application mobile
          </Link>
          . Pour construire une enveloppe sans mélanger architecture et portée
          du produit, utilisez ensuite le{" "}
          <Link href="/guides/combien-coute-une-application-mobile">
            guide de coût d&apos;une application mobile
          </Link>
          .
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources et limites.</strong> Les fonctions et versions
          actuelles sont reliées dans chaque section à leurs documentations
          officielles. Les retours publics d&apos;entreprises peuvent montrer
          une méthode, jamais promettre leur coût, leur partage de code ou leur
          performance à votre projet. Les chiffres A/B sont fictifs et servent
          uniquement à rejouer le calcul. Les versions, exigences de store,
          plugins, licences et tarifs de services doivent être revérifiés au
          jour du devis et avant chaque publication.
        </p>
        <p className="text-sm">
          <em>
            Ce guide n&apos;est ni un audit de votre application, ni un conseil
            juridique individualisé, ni une garantie de performance, de
            publication sur les stores, d&apos;indexation ou de classement.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
