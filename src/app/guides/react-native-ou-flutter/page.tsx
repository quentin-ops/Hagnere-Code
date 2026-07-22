import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("react-native-ou-flutter");

// --- METADATA SEO (title/description/dates depuis src/lib/guides.ts) ---
export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
    // og:image générée par opengraph-image.tsx (convention Next.js).
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

// --- JSON-LD SCHEMAS (constantes statiques uniquement) ---
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
    question: "Quelle est la différence entre React Native et Flutter ?",
    answer:
      "Les deux permettent de créer une application iPhone et Android en partageant une grande partie du travail. React Native utilise JavaScript et React ; Flutter utilise Dart et son propre moteur d'affichage. Pour l'entreprise, la différence la plus concrète concerne les compétences disponibles, la reprise du projet et les besoins visuels.",
  },
  {
    question: "React Native est-il meilleur que Flutter ?",
    answer:
      "Non, pas dans tous les cas. React Native est souvent naturel pour une équipe déjà compétente en React. Flutter peut être pertinent pour une interface très personnalisée et une équipe qui le maîtrise. La qualité de la préparation, des tests et de la maintenance compte davantage qu'un classement général.",
  },
  {
    question: "Quel framework coûte le moins cher ?",
    answer:
      "Le cadre technique, parfois appelé framework, ne donne pas le prix à lui seul. Les grilles SILKHOM citées publient les mêmes repères de tarif journalier pour React Native et Flutter. Le budget dépend surtout des écrans, des fonctions, du serveur, du hors-ligne, des tests et de l'expérience de l'équipe.",
  },
  {
    question: "Peut-on partager tout le code entre iPhone et Android ?",
    answer:
      "Une grande partie peut être commune, mais rarement 100 %. Les notifications, permissions, achats, fonctions du téléphone et détails d'interface demandent parfois un travail propre à chaque plateforme. Shopify a publié 86 % de code commun sur son projet React Native ; ce cas ne garantit pas le même taux ailleurs.",
  },
  {
    question: "Quel choix pour une entreprise qui utilise déjà React ?",
    answer:
      "React Native mérite d'être étudié en premier, car l'équipe peut réutiliser une partie de ses connaissances et parfois de sa logique métier. Il faut néanmoins vérifier les fonctions mobiles, les modules disponibles et l'expérience réelle de l'équipe avant de conclure.",
  },
  {
    question: "Flutter convient-il aux applications métier ?",
    answer:
      "Oui. Formulaires, listes, tableaux de bord, photos, notifications et fonctionnement hors ligne peuvent être réalisés avec Flutter comme avec React Native. Le choix doit venir des compétences, des modules nécessaires et d'un test des scénarios les plus risqués.",
  },
  {
    question: "Faut-il choisir le natif plutôt que le multiplateforme ?",
    answer:
      "Le développement natif, séparé pour iPhone et Android, se justifie lorsque l'application dépend fortement des dernières fonctions de chaque appareil ou impose une exigence très particulière. Pour une application métier classique, le multiplateforme peut réduire le travail en double.",
  },
  {
    question: "Combien prévoir pour la maintenance d'une application ?",
    answer:
      "Le prix initial ne permet pas de déduire un budget annuel fiable. Partez des factures de services, de la couverture du contrat, des incidents observés, des versions d'iPhone et d'Android à tester et des publications prévues. Un besoin encore non chiffré doit rester visible comme montant inconnu.",
  },
  {
    question: "Comment éviter de dépendre de son prestataire mobile ?",
    answer:
      "Ouvrez les comptes Apple, Google et le dépôt de code au nom de l'entreprise. Faites écrire la cession des droits, la documentation, la procédure de publication, les accès et les conditions de maintenance. Ces garanties protègent davantage que le choix de la technologie à lui seul.",
  },
  {
    question: "Peut-on migrer de React Native vers Flutter, ou l'inverse ?",
    answer:
      "Oui, mais la partie mobile doit en grande partie être reconstruite. Le serveur, les données, les règles métier, les maquettes et les tests restent réutilisables s'ils sont bien séparés et documentés. Une migration doit résoudre un problème mesuré, pas suivre une mode technique.",
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
        heroDescription="React Native et Flutter permettent tous deux de créer une application iPhone et Android. Ce guide vous aide à choisir selon votre équipe, vos fonctions, votre budget de maintenance et la possibilité de faire reprendre le projet."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Deux solutions professionnelles",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "L’équipe et les usages doivent décider",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Maintenance et reprise à prévoir",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/combien-coute-une-application-mobile",
            label: "Combien coûte une application mobile ?",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Combien coûte un SaaS ?",
          },
          {
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          {
            href: "/guides/cahier-des-charges-application-mobile",
            label: "Cahier des charges d'app mobile",
          },
          { href: "/services/application-mobile", label: "Application mobile" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="React Native ou Flutter : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous devez créer une application pour iPhone et Android et deux
          prestataires vous recommandent des technologies différentes :{" "}
          <strong>React Native</strong> pour l&apos;un, <strong>Flutter</strong>{" "}
          pour l&apos;autre. Les deux solutions sont capables de produire une
          application professionnelle. Votre décision doit surtout répondre à
          quatre questions : qui pourra la développer, quelles fonctions sont
          réellement difficiles, combien coûtera son entretien et comment une
          autre équipe pourra la reprendre.
        </p>
        <p>
          Ce guide ne cherche pas à désigner un gagnant universel. Il vous aide
          à choisir la solution la plus raisonnable pour votre entreprise, même
          si vous n&apos;êtes pas technicien. Notre activité utilise
          majoritairement React ; ce biais est déclaré, et les cas où Flutter,
          le développement natif ou une application web conviennent mieux sont
          explicitement présentés.
        </p>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Le choix selon votre situation",
            },
            {
              id: "comprendre",
              label: "2. Ce que React Native et Flutter ont en commun",
            },
            {
              id: "equipe",
              label: "3. Commencer par l'équipe qui entretiendra l'application",
            },
            {
              id: "budget",
              label: "4. Ce qui fait réellement varier le budget",
            },
            {
              id: "usage",
              label: "5. Tester les fonctions difficiles avant de choisir",
            },
            { id: "performance", label: "6. Performance et qualité perçue" },
            {
              id: "perennite",
              label: "7. Pérennité, écosystème et dépendance",
            },
            {
              id: "maintenance",
              label: "8. Prévoir l'entretien après la mise en ligne",
            },
            {
              id: "alternatives",
              label: "9. Quand choisir une autre approche",
            },
            {
              id: "decider",
              label: "10. Les questions à poser aux prestataires",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Le choix selon votre situation</h2>
        <p>
          Si votre entreprise dispose déjà d&apos;une équipe React, React Native
          constitue un point de départ logique. Si l&apos;équipe qui réalisera
          et maintiendra le produit maîtrise Flutter, ou si l&apos;interface
          demande un travail visuel très spécifique, Flutter mérite la même
          attention. Sans équipe existante, comparez d&apos;abord les
          prestataires et leur capacité de reprise plutôt que les logos des
          technologies.
        </p>
        <GuideTable
          headers={[
            "Votre situation",
            "Option à étudier d'abord",
            "Ce qu'il faut vérifier",
          ]}
          rows={[
            [
              "Votre site ou votre logiciel utilise déjà React",
              "React Native",
              "Expérience mobile réelle, modules et capacité de publication",
            ],
            [
              "Votre équipe maîtrise Flutter et le produit mise sur une interface très dessinée",
              "Flutter",
              "Maintenabilité, recrutement et comportement sur les appareils ciblés",
            ],
            [
              "Vous partez sans équipe technique",
              "Les deux, sur le même cahier des charges",
              "Références, méthode, coût complet et solution de reprise",
            ],
            [
              "L'application pilote du matériel ou dépend fortement du téléphone",
              "Prototype comparatif, puis éventuellement natif",
              "Scénario critique testé sur de vrais appareils",
            ],
            [
              "L'usage est interne et peut fonctionner dans un navigateur",
              "Application web installable à évaluer",
              "Notifications, hors-ligne et fonctions du téléphone réellement nécessaires",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Ne choisissez pas à partir d'une démonstration fluide"
        >
          Une liste qui défile parfaitement ne dit rien sur votre
          synchronisation hors ligne, votre lecteur de code-barres, vos
          notifications ou votre connexion au logiciel de gestion. Demandez que
          le prestataire teste d&apos;abord la fonction qui peut faire échouer
          votre projet.
        </InfoBox>

        <h2 id="comprendre">2. Ce que React Native et Flutter ont en commun</h2>
        <p>
          Une application mobile développée séparément pour Apple et Android
          demande deux codes et souvent deux équipes. React Native et Flutter
          proposent une autre approche : une grande partie du travail est
          partagée, puis adaptée lorsque les deux systèmes se comportent
          différemment. On parle de développement{" "}
          <strong>multiplateforme</strong>.
        </p>
        <p>
          Ces cadres de développement, aussi appelés frameworks, fonctionnent
          différemment. React Native, créé par Meta, s&apos;appuie sur
          JavaScript et React. Flutter, créé par Google, utilise le langage Dart
          et dessine l&apos;interface avec son propre moteur. Pour le dirigeant,
          ces détails techniques deviennent utiles seulement lorsqu&apos;ils
          influencent le recrutement, les modules disponibles, la qualité
          visuelle ou le coût de reprise.
        </p>
        <p>
          Le code partagé n&apos;est jamais une promesse de 100 %. Shopify a
          publié 86 % de code commun entre iPhone et Android après sa migration
          vers React Native. C&apos;est une référence solide pour ce projet
          précis, pas un taux garanti. Les permissions, les achats, les
          notifications, certaines fonctions du téléphone et les finitions
          propres à chaque système peuvent demander du travail séparé.
        </p>

        <h2 id="equipe">
          3. Commencer par l&apos;équipe qui entretiendra l&apos;application
        </h2>
        <p>
          La meilleure technologie est d&apos;abord celle qu&apos;une équipe
          compétente peut maintenir pendant plusieurs années. Une entreprise qui
          utilise déjà React peut mutualiser des connaissances et parfois une
          partie de sa logique métier avec React Native. Une équipe Flutter
          expérimentée peut, à l&apos;inverse, livrer plus sûrement qu&apos;une
          équipe React qui découvre le mobile.
        </p>
        <p>
          Ne déduisez pas la disponibilité d’une équipe d’un comptage global de
          profils. Demandez qui travaillera réellement sur votre projet, son
          expérience de publication et la possibilité pour un second prestataire
          de reprendre le code.
        </p>
        <GuideTable
          headers={["À vérifier", "Question simple", "Preuve attendue"]}
          rows={[
            [
              "Compétence",
              "Avez-vous déjà publié une application comparable ?",
              "Une référence vérifiable et le rôle exact de l'équipe",
            ],
            [
              "Continuité",
              "Qui maintient l'application après le lancement ?",
              "Des noms, un budget et des délais d'intervention",
            ],
            [
              "Reprise",
              "Que se passe-t-il si nous changeons de prestataire ?",
              "Code, comptes, documentation et procédure de publication à votre nom",
            ],
          ]}
        />

        <h2 id="budget">4. Ce qui fait réellement varier le budget</h2>
        <p>
          Le baromètre SILKHOM 2025 cité en sources publie la même grille pour
          React Native, Flutter et le développement mobile natif. Le repère va
          d&apos;environ 330 à 720 € par jour à Paris selon le niveau
          d&apos;expérience, avec des écarts selon la région et le profil. Cela
          ne signifie pas que tous les projets coûtent pareil. Le nombre de
          jours reste la variable principale.
        </p>
        <GuideTable
          headers={["Poste", "Ce qui ajoute du travail", "Comment le préparer"]}
          rows={[
            [
              "Écrans et parcours",
              "Rôles, validations, cas d'erreur et accessibilité",
              "Maquettes et règles d'acceptation",
            ],
            [
              "Données et serveur",
              "Comptes, droits, synchronisation et connexions métier",
              "Liste des systèmes et données échangées",
            ],
            [
              "Fonctions mobiles",
              "Photo, GPS, paiement, notifications, hors-ligne ou matériel",
              "Prototype du scénario le plus risqué",
            ],
            [
              "Qualité et publication",
              "Appareils, versions, tests et règles des stores",
              "Matrice de tests et responsabilités écrites",
            ],
          ]}
        />
        <p>
          Pour mesurer l’économie éventuelle, comparez des devis couvrant
          exactement les mêmes écrans, fonctions, services côté serveur, tests
          et maintenance. Le partage d’une partie du code ne se transforme pas
          automatiquement en pourcentage de réduction du budget.
        </p>

        <h2 id="usage">5. Tester les fonctions difficiles avant de choisir</h2>
        <p>
          Pour une application composée de formulaires, de listes, de photos et
          de tableaux de bord, les deux technologies peuvent convenir. Le risque
          se situe davantage dans les conditions réelles : réseau instable,
          données volumineuses, caméra, Bluetooth, géolocalisation, paiement ou
          synchronisation avec un outil interne.
        </p>
        <p>
          Transformez le cas le plus risqué en un petit prototype. Par exemple :
          « un technicien saisit dix interventions sans réseau, prend vingt
          photos, puis récupère la connexion sans perdre ni doubler une donnée
          ». Ce test vaut davantage qu&apos;un comparatif général, car il
          reproduit ce que votre équipe vivra.
        </p>
        <InfoBox
          variant="blue"
          title="Un prototype n'est pas une première version cachée"
        >
          Il doit répondre à une question précise, sur un nombre limité
          d&apos;écrans, avec un résultat observable. S&apos;il devient un
          projet complet sans limite claire ni critère de réussite, vous perdez
          justement l&apos;avantage de cette étape.
        </InfoBox>

        <h2 id="performance">6. Performance et qualité perçue</h2>
        <p>
          Sur une application métier classique, un utilisateur ne devrait pas
          deviner si l&apos;équipe a choisi React Native ou Flutter. Il perçoit
          un démarrage rapide, des écrans compréhensibles, des messages
          d&apos;erreur utiles et l&apos;absence de perte de données. La qualité
          de conception et de test pèse donc davantage que quelques mesures
          obtenues dans un laboratoire.
        </p>
        <p>
          Flutter offre un contrôle très poussé sur le rendu visuel, ce qui peut
          aider pour des interfaces et animations spécifiques. React Native
          s&apos;intègre naturellement à l&apos;écosystème React et aux
          composants propres aux plateformes. Dans les deux cas, une liste mal
          construite, des images trop lourdes ou un serveur lent produiront une
          mauvaise expérience.
        </p>
        <p>
          Si une exigence de performance est réellement décisive, écrivez-la :
          temps maximal pour afficher un dossier, nombre d&apos;éléments à faire
          défiler, volume de données hors ligne ou modèle d&apos;appareil le
          plus ancien à supporter. Le prestataire peut alors la tester et
          l&apos;intégrer au contrat.
        </p>

        <h2 id="perennite">7. Pérennité, écosystème et dépendance</h2>
        <p>
          React Native est porté par Meta et reçoit aussi des contributions
          d&apos;entreprises comme Microsoft, Shopify ou Amazon. Flutter est
          porté principalement par Google. Les deux sont utilisés en production
          et disposent d&apos;outils, de bibliothèques et de communautés
          actives. Aucune source ne permet de garantir leur situation dans dix
          ans.
        </p>
        <p>
          Les réductions d&apos;effectifs signalées en 2024 dans les équipes
          Flutter et Dart ont alimenté des interrogations, tandis que Google a
          réaffirmé son investissement et communiqué sur une large adoption. Ce
          contexte mérite d&apos;être suivi, sans transformer une actualité
          d&apos;entreprise en annonce d&apos;abandon.
        </p>
        <p>
          Votre meilleure protection reste concrète : un code standard, peu de
          dépendances obscures, des versions entretenues, des tests, une
          documentation à jour et plusieurs équipes capables de reprendre le
          projet. Exigez aussi que les comptes Apple et Google ainsi que le
          dépôt de code soient ouverts au nom de votre entreprise.
        </p>

        <h2 id="maintenance">
          8. Prévoir l&apos;entretien après la mise en ligne
        </h2>
        <p>
          Une application publiée n&apos;est pas terminée pour toujours. Apple
          et Google font évoluer les versions de leurs systèmes, les outils de
          compilation et les exigences des magasins. Au 28 avril 2026, Apple
          demande Xcode 26 et les outils prévus pour iOS 26 lors des nouvelles
          soumissions. Google Play annonce Android 16, niveau technique 36, pour
          la plupart des nouvelles applications et mises à jour à compter du 31
          août 2026, avec les exceptions publiées par l&apos;éditeur.
        </p>
        <p>
          Ces règles rendent la maintenance nécessaire, mais n&apos;imposent pas
          un taux financier universel. Pour planifier, réunissez les factures
          des services utilisés, le contrat actuel, les incidents observés et
          les changements déjà décidés. Faites ensuite préciser :
        </p>
        <ul>
          <li>les versions d&apos;iPhone et d&apos;Android testées ;</li>
          <li>les mises à jour de la technologie et des modules externes ;</li>
          <li>la surveillance des plantages et des failles ;</li>
          <li>les délais de correction et les nouvelles publications ;</li>
          <li>
            ce qui relève de la maintenance ou d&apos;une évolution payante.
          </li>
        </ul>
        <p>
          Une application laissée sans mise à jour pendant plusieurs années peut
          demander plusieurs étapes de remise à niveau avant toute nouvelle
          fonction : outils de compilation, bibliothèques, règles des magasins
          et tests sur les appareils actuels. Demandez donc un budget annuel et
          une liste de tâches, plutôt qu’un pourcentage présenté comme garanti.
        </p>

        <h2 id="alternatives">9. Quand choisir une autre approche</h2>
        <GuideTable
          headers={["Approche", "Quand l'étudier", "Contrepartie principale"]}
          rows={[
            [
              "Développement natif séparé",
              "Fonctions très proches du matériel ou exigence propre à chaque plateforme",
              "Deux codes et davantage de travail à coordonner",
            ],
            [
              "Kotlin Multiplatform",
              "Équipe Kotlin existante et volonté de partager surtout la logique métier",
              "Interfaces parfois maintenues séparément",
            ],
            [
              "Application web installable",
              "Usage interne simple pouvant fonctionner dans le navigateur",
              "Accès plus limité à certaines fonctions du téléphone",
            ],
            [
              "Aucune application",
              "Un site mobile ou un outil existant répond déjà au besoin",
              "Moins de présence dans les stores, mais aucun produit inutile à maintenir",
            ],
          ]}
        />
        <p>
          Le développement mobile natif utilise Swift pour iPhone et Kotlin pour
          Android. Kotlin Multiplatform partage surtout la logique métier tout
          en conservant davantage de code propre à chaque plateforme. Une
          application web installable, parfois appelée PWA, reste un site qui
          peut être ajouté à l&apos;écran d&apos;accueil. Ces solutions ne sont
          pas des versions inférieures : elles répondent à d&apos;autres
          contraintes.
        </p>

        <h2 id="decider">10. Les questions à poser aux prestataires</h2>
        <ol>
          <li>
            <strong>Pourquoi cette technologie pour notre usage ?</strong>{" "}
            Demandez un raisonnement lié à vos équipes et à vos fonctions.
          </li>
          <li>
            <strong>
              Dans quel cas conseilleriez-vous l&apos;autre option ?
            </strong>{" "}
            La réponse révèle si la comparaison est réelle.
          </li>
          <li>
            <strong>Quelle fonction testerez-vous d&apos;abord ?</strong> Le
            prestataire doit identifier le risque principal avant de tout
            construire.
          </li>
          <li>
            <strong>Que comprend le prix ?</strong> Séparez application,
            serveur, design, publication, tests et maintenance.
          </li>
          <li>
            <strong>Qui possède les comptes, le code et les données ?</strong>{" "}
            La réponse doit être écrite au contrat.
          </li>
          <li>
            <strong>
              Comment une autre équipe reprendrait-elle le projet ?
            </strong>{" "}
            Demandez la documentation et la procédure de livraison.
          </li>
        </ol>

        <GuideInlineCTA
          title="Vous préparez une application mobile ?"
          description="Décrivez les utilisateurs, les trois fonctions indispensables, les outils à connecter et le scénario qui vous paraît le plus risqué. Nous pourrons vous répondre sur l'approche à tester avant de chiffrer toute l'application."
        />
        <p>
          Pour obtenir des propositions comparables, préparez notre{" "}
          <Link href="/guides/cahier-des-charges-application-mobile">
            cahier des charges d&apos;application mobile
          </Link>{" "}
          puis rapprochez les postes du{" "}
          <Link href="/guides/combien-coute-une-application-mobile">
            guide de prix d&apos;une application
          </Link>
          . Le meilleur devis n&apos;est pas celui qui promet une technologie
          supérieure : c&apos;est celui qui relie chaque décision à un usage, un
          test, un coût et une responsabilité.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide (consultées
          en juillet 2026) :{" "}
          <a
            href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            baromètre TJM SILKHOM 2025
          </a>{" "}
          (grilles identiques cross-platform/natif) ;{" "}
          <a
            href="https://shopify.engineering/five-years-of-react-native-at-shopify"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Engineering, « Five years of React Native » (janv. 2025)
          </a>{" "}
          ;{" "}
          <a
            href="https://techcrunch.com/2024/05/01/google-lays-off-staff-from-flutter-dart-python-weeks-before-its-developer-conference/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TechCrunch, licenciements équipes Flutter/Dart (mai 2024)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.googleblog.com/en/celebrating-flutters-production-era/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Developers Blog, réponse officielle (déc. 2024)
          </a>{" "}
          ;{" "}
          <a
            href="https://developer.apple.com/news/upcoming-requirements/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Developer, exigences SDK/Xcode
          </a>{" "}
          ;{" "}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/11926878"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play, exigences de niveau d&apos;API
          </a>
          .
        </p>
        <p className="text-sm">
          <em>
            React Native est une marque de Meta ; Flutter et Dart sont des
            marques de Google ; Kotlin est une marque de JetBrains. Ce guide est
            indépendant et son biais éditorial (agence React) est déclaré dans
            le corps de l&apos;article. Les repères de tarif proviennent du
            baromètre cité ; seul un devis établi sur votre besoin vous engage.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
