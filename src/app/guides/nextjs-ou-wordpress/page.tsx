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

const guide = getGuide("nextjs-ou-wordpress");

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
    publishedTime: guide.datePublished + "T09:00:00+02:00",
    modifiedTime: guide.dateModified + "T09:00:00+02:00",
    authors: [SITE_URL + "/equipe"],
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
  image: [guideUrl(guide) + "/opengraph-image"],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": SITE_URL + "/guides",
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: SITE_URL + "/equipe",
    knowsAbout: [
      "Développement web",
      "Next.js",
      "React",
      "WordPress",
      "SEO technique",
      "Architecture web",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_URL + "/logos/logo-dark.png",
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: SITE_URL + "/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Next.js ou WordPress",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Next.js est-il meilleur que WordPress pour le référencement naturel ?",
    answer:
      "Non, aucune des deux technologies ne reçoit un avantage automatique de Google. WordPress comme Next.js peuvent produire des pages faciles à explorer, rapides et bien structurées. Le résultat dépend du contenu, des liens, du code livré, de l’hébergement et de l’entretien du site. Demandez donc des objectifs et des tests mesurables plutôt qu’une promesse fondée sur le nom de l’outil.",
  },
  {
    question: "WordPress est-il encore un bon choix en 2026 ?",
    answer:
      "Oui, surtout si une équipe non technique publie souvent et connaît déjà son interface. WordPress reste aussi pertinent pour un site simple lorsque le budget initial est limité et qu’un professionnel assure les mises à jour. Il devient moins évident si le site doit se comporter comme une application, intégrer des règles très spécifiques ou atteindre des objectifs de performance difficiles avec le thème et les extensions envisagés.",
  },
  {
    question: "Quels sont les principaux inconvénients de WordPress ?",
    answer:
      "Il faut gérer le cœur du logiciel, le thème, les extensions, les sauvegardes et leur compatibilité. Un constructeur de pages ou une extension peut aussi rendre une future migration plus lourde. Ces risques restent maîtrisables avec peu d’extensions bien choisies, des mises à jour suivies et des sauvegardes réellement testées.",
  },
  {
    question: "Quels sont les principaux inconvénients de Next.js ?",
    answer:
      "Next.js demande un développeur compétent et ne fournit pas, à lui seul, une interface pour modifier les contenus. Il faut choisir ou construire cet outil d’édition, maintenir les dépendances et prévoir la reprise du site par un autre prestataire. Certaines fonctions d’hébergement demandent aussi une configuration particulière en dehors de Vercel.",
  },
  {
    question: "WordPress est-il gratuit ?",
    answer:
      "Le logiciel WordPress peut être utilisé sans payer de licence, mais le site ne l’est pas. Il faut compter la conception, l’hébergement, le nom de domaine, les extensions payantes éventuelles, les sauvegardes, la sécurité, l’assistance et les évolutions. Comparez ces dépenses sur trois ans avec celles d’une autre solution.",
  },
  {
    question: "Peut-on modifier soi-même un site Next.js ?",
    answer:
      "Oui, si le projet inclut une interface d’édition adaptée. Un outil de gestion de contenu peut permettre de changer les textes, les images et certaines pages sans toucher au code. Sans cet outil, les modifications passent par le développeur. La décision doit être prise avant le devis à partir de ce que votre équipe modifiera réellement.",
  },
  {
    question: "Peut-on utiliser WordPress et Next.js ensemble ?",
    answer:
      "Oui. WordPress peut servir uniquement à rédiger les contenus, tandis que Next.js affiche le site public. Cette architecture sépare l’interface d’édition du site visité. Elle peut convenir à une équipe éditoriale importante, mais elle ajoute deux systèmes à maintenir et coûte généralement plus cher qu’un site vitrine simple.",
  },
  {
    question: "Next.js remplace-t-il WordPress ?",
    answer:
      "Non. WordPress est un produit prêt à gérer des contenus ; Next.js est un outil de développement pour construire un site ou une application. Ils répondent à des besoins qui se recoupent seulement en partie. La bonne question est : qui doit publier, quelles fonctions le site doit-il remplir et qui pourra l’entretenir pendant trois ans ?",
  },
  {
    question: "Comment quitter WordPress sans perdre son référencement ?",
    answer:
      "Il faut inventorier les anciennes adresses, déplacer les contenus, créer une correspondance vers les nouvelles pages, mettre en place des redirections permanentes et contrôler le site avant puis après la mise en ligne. Cette méthode réduit les risques techniques, mais ne garantit pas le maintien de chaque position Google. Faites inscrire la migration et son suivi dans le devis.",
  },
  {
    question: "Pourquoi un site WordPress peut-il être lent ?",
    answer:
      "Les causes fréquentes sont l’hébergement, le thème, les extensions, les images, les scripts externes, la base de données et un cache mal réglé. WordPress peut être rapide et un site Next.js peut être lent. Mesurez quelques pages importantes sur de vrais téléphones avant de décider si le problème vient de l’outil ou de sa mise en œuvre.",
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
          { label: "Next.js ou WordPress" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous devez créer ou refaire le site de votre entreprise et deux prestataires vous proposent des technologies différentes ? Voici comment choisir selon l’autonomie de votre équipe, les fonctions attendues, le budget et la maintenance."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Une réponse selon votre usage",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "SEO et vitesse sans promesse magique",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Un coût comparé sur 3 ans",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Prix d’un site vitrine",
          },
          {
            href: "/guides/prix-site-e-commerce",
            label: "Prix d’un site e-commerce",
          },
          {
            href: "/services/sites-vitrines",
            label: "Création de site sur mesure",
          },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/realisations", label: "Nos réalisations Next.js" },
        ]}
        faqTitle="Next.js ou WordPress : les réponses avant de choisir"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous cherchez peut-être le meilleur choix pour un site vitrine, un
          blog ou une refonte. WordPress est un logiciel prêt à l’emploi pour
          créer et modifier des contenus depuis une interface d’administration.
          Next.js est un outil utilisé par les développeurs pour construire un
          site ou une application plus librement.
        </p>
        <p>
          <strong>
            WordPress est souvent le choix le plus simple pour publier
            régulièrement avec une équipe non technique. Next.js devient
            pertinent lorsqu’il faut une expérience sur mesure, des connexions
            particulières ou un contrôle plus fin du site.
          </strong>{" "}
          Aucun des deux n’est automatiquement meilleur pour Google, la vitesse
          ou la sécurité.
        </p>

        <InfoBox variant="blue" title="La réponse courte">
          Choisissez WordPress si votre priorité est de publier facilement, que
          les fonctions existent déjà sous une forme fiable et que vous avez un
          budget de maintenance. Choisissez un site développé avec Next.js si le
          site doit être conçu autour de votre marque, intégrer des fonctions
          propres à votre activité ou évoluer vers une application. Si votre
          besoin est simple et votre budget très limité, un outil hébergé peut
          être plus raisonnable que les deux.
        </InfoBox>

        <p>
          Hagnéré Code développe des sites en Next.js. Ce choix commercial est
          donc explicite. La comparaison reste utile seulement si elle dit aussi
          quand WordPress suffit et quelles contraintes Next.js ajoute. La
          technologie n’est pas la décision finale : vous choisissez surtout qui
          pourra modifier le site, combien il coûtera pendant trois ans et ce
          qui se passera si vous changez de prestataire.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "Le verdict selon votre situation" },
            {
              id: "de-quoi-parle-t-on",
              label: "Comprendre la différence sans jargon",
            },
            { id: "performance", label: "Comparer la vitesse correctement" },
            { id: "seo", label: "Quel choix pour le référencement naturel ?" },
            { id: "securite", label: "Sécurité et maintenance" },
            { id: "gouvernance", label: "Pouvoir faire reprendre le site" },
            { id: "couts", label: "Comparer le coût sur trois ans" },
            { id: "contenu", label: "Modifier le site au quotidien" },
            { id: "headless", label: "Associer WordPress et Next.js" },
            { id: "grille-decision", label: "La décision finale" },
          ]}
        />

        <h2 id="reponse-rapide">
          Quel choix est le plus logique pour votre entreprise ?
        </h2>

        <GuideTable
          headers={["Votre besoin", "Choix à étudier d’abord", "Pourquoi"]}
          rows={[
            [
              "Publier plusieurs articles par semaine avec une équipe non technique.",
              "WordPress bien maintenu.",
              "L’interface éditoriale est intégrée et largement connue.",
            ],
            [
              "Présenter une petite activité avec très peu de budget.",
              "WordPress simple ou outil hébergé.",
              "Une solution standard bien utilisée vaut mieux qu’un sur-mesure trop réduit.",
            ],
            [
              "Conserver un WordPress existant qui remplit son rôle.",
              "Garder et corriger l’existant.",
              "Une migration ne se justifie pas par une préférence technique seule.",
            ],
            [
              "Faire du site un véritable outil d’acquisition et de différenciation.",
              "Comparer WordPress sur mesure et Next.js.",
              "Le design, la vitesse, les tests et le suivi des contacts deviennent décisifs.",
            ],
            [
              "Créer un espace client, un configurateur ou une fonction métier.",
              "Next.js ou autre architecture applicative.",
              "Le projet dépasse la simple publication de pages.",
            ],
            [
              "Vendre en ligne avec des besoins courants.",
              "Plateforme e-commerce spécialisée.",
              "Paiement, stock et livraison existent déjà sous une forme éprouvée.",
            ],
            [
              "Publier beaucoup tout en séparant l’outil d’édition du site public.",
              "WordPress avec une façade Next.js.",
              "L’équipe conserve son interface, au prix de deux systèmes à maintenir.",
            ],
          ]}
        />

        <p>
          Ce premier verdict suppose que les devis couvrent réellement le même
          contenu, le même design, les mêmes fonctions et le même niveau
          d’assistance. Notre guide{" "}
          <Link href="/guides/template-ou-site-sur-mesure">
            template, site personnalisé ou sur mesure
          </Link>{" "}
          aide à séparer la technologie du niveau de conception.
        </p>

        <h2 id="de-quoi-parle-t-on">
          WordPress et Next.js ne sont pas deux produits équivalents
        </h2>

        <p>
          WordPress est un <strong>CMS</strong>, c’est-à-dire un logiciel pour
          gérer des pages et des articles sans programmer. Il comprend une
          administration, des thèmes qui définissent l’apparence et des
          extensions qui ajoutent des fonctions comme un formulaire, un agenda
          ou une boutique.
        </p>

        <p>
          Next.js est un <strong>framework</strong> : une base de développement
          avec laquelle un professionnel construit le site. Il ne fournit pas
          automatiquement une administration comparable à WordPress. Si vous
          devez modifier les contenus vous-même, le projet doit prévoir un outil
          d’édition séparé.
        </p>

        <GuideTable
          headers={["Question", "WordPress", "Next.js"]}
          rows={[
            [
              "Qui construit les pages ?",
              "Le thème, les extensions et le prestataire.",
              "Le développeur compose les pages et les fonctions.",
            ],
            [
              "Qui modifie les contenus ?",
              "Votre équipe depuis l’administration.",
              "Votre équipe si un outil d’édition est prévu ; sinon le prestataire.",
            ],
            [
              "Comment ajouter une fonction ?",
              "Extension existante ou développement WordPress.",
              "Développement ou connexion à un service spécialisé.",
            ],
            [
              "Qui assure l’entretien ?",
              "Hébergeur, prestataire et responsables des extensions.",
              "Prestataire ou équipe technique, avec l’hébergeur et les services utilisés.",
            ],
          ]}
        />

        <p>
          Un site Next.js peut préparer certaines pages avant la visite et les
          servir depuis des serveurs proches des internautes. Il peut aussi
          produire des pages au moment de la demande. De son côté, WordPress
          peut utiliser un cache qui conserve une version déjà prête. Les
          oppositions « WordPress est toujours dynamique » et « Next.js est
          toujours statique » sont donc trop simples.
        </p>

        <p>
          WordPress est très répandu selon{" "}
          <a
            href="https://w3techs.com/technologies/details/cm-wordpress"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Techs
          </a>
          , et Next.js appartient à un environnement bien connu des
          développeurs, comme l’illustre{" "}
          <a
            href="https://2025.stateofjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            State of JavaScript 2025
          </a>
          . Cela facilite la recherche de compétences ; cela ne prouve ni le
          prix, ni la vitesse, ni la qualité de votre futur site. Demandez
          plutôt si un second prestataire pourra le reprendre, si vos accès
          seront remis et si les fonctions importantes seront testées.
        </p>
        <p>
          La popularité et les grandes références prouvent seulement qu’une
          solution peut fonctionner avec une équipe et un budget adaptés. Une
          référence utile ressemble à votre projet : même fréquence de
          publication, mêmes logiciels à relier, même autonomie et même exigence
          de disponibilité. Faites tester l’interface d’édition par la personne
          qui publiera réellement.
        </p>

        <h2 id="performance">
          Pour comparer la vitesse, mesurez les pages que vos prospects verront
        </h2>

        <p>
          Les moyennes publiées sur des millions de sites mélangent des thèmes,
          des hébergeurs et des qualités de réalisation très différents. Elles
          ne prédisent donc pas votre résultat. Demandez plutôt de mesurer, sur
          un téléphone courant, le temps d’affichage du contenu principal, la
          rapidité de réaction et la stabilité de trois pages représentatives.
          La méthode et les études agrégées restent indiquées dans les sources.
        </p>

        <GuideTable
          headers={[
            "À demander au prestataire",
            "Comment vérifier",
            "Ce que vous pouvez exiger",
          ]}
          rows={[
            [
              "Une cible pour l’accueil, une page de service et un article sur mobile.",
              "Mesure avant livraison, puis données réelles après mise en ligne.",
              "Un protocole et des corrections si la cible contractuelle n’est pas atteinte.",
            ],
            [
              "Le poids des images, polices et scripts extérieurs.",
              "Liste et mesure sur un téléphone courant.",
              "Une justification pour chaque élément lourd.",
            ],
            [
              "Le comportement en connexion mobile moyenne.",
              "Test sur appareil réel, pas seulement sur l’ordinateur du développeur.",
              "Une page utilisable avant la fin de tous les chargements secondaires.",
            ],
          ]}
        />

        <p>
          WordPress peut être rapide avec un thème sobre, peu d’extensions, un
          bon cache et un hébergement adapté. Next.js peut être lent si le site
          charge trop de JavaScript, d’animations ou de services externes. Si
          votre site actuel pose problème, le guide{" "}
          <Link href="/guides/pourquoi-mon-site-est-lent">
            pourquoi mon site est lent
          </Link>{" "}
          aide à chercher la cause avant de changer toute la technologie.
        </p>

        <h2 id="seo">
          Pour Google, le résultat compte davantage que le nom de l’outil
        </h2>

        <p>
          Google n’accorde pas un bonus automatique à WordPress ou à Next.js.
          Une page doit être accessible, contenir une réponse utile, posséder
          des liens compréhensibles et fonctionner correctement sur mobile. John
          Mueller, de Google, a rappelé qu’un CMS n’est pas{" "}
          <a
            href="https://www.searchenginejournal.com/googles-john-mueller-wordpress-not-inherently-better-for-seo/474737/"
            target="_blank"
            rel="noopener noreferrer"
          >
            favorisé par principe pour le référencement
          </a>
          .
        </p>

        <p>
          WordPress possède des extensions qui facilitent les titres, les plans
          du site et certaines données structurées. Next.js permet au
          développeur de contrôler précisément le HTML, les adresses et les
          données envoyées aux moteurs. Dans les deux cas, un mauvais réglage
          peut cacher du contenu ou créer des pages concurrentes. La
          documentation officielle de Google sur le{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
            target="_blank"
            rel="noreferrer"
          >
            référencement des sites utilisant JavaScript
          </a>{" "}
          fournit les contrôles techniques utiles.
        </p>

        <InfoBox variant="blue" title="Ce qu’il faut inscrire dans le devis">
          Demandez les adresses définitives, les redirections en cas de refonte,
          les titres et descriptions, le plan du site, les données structurées
          utiles, la mesure des formulaires et un contrôle de l’indexation après
          la mise en ligne. Ce travail compte davantage que l’étiquette
          WordPress ou Next.js.
        </InfoBox>

        <h2 id="securite">
          Les deux solutions demandent des mises à jour et des sauvegardes
        </h2>

        <p>
          WordPress expose généralement une administration, une base de données,
          un thème et des extensions. Chacun doit être surveillé. La
          documentation WordPress recommande de{" "}
          <a
            href="https://wordpress.org/documentation/article/manage-plugins/"
            target="_blank"
            rel="noreferrer"
          >
            maintenir les extensions à jour et de sauvegarder avant une mise à
            jour
          </a>
          . Un site avec peu d’extensions suivies et un professionnel réactif
          n’a pas le même risque qu’un assemblage abandonné.
        </p>

        <p>
          Next.js conserve lui aussi des dépendances logicielles, des comptes
          d’hébergement, des secrets et parfois des services accessibles au
          public. Un site composé uniquement de fichiers prêts à servir peut
          réduire certaines portes d’entrée, mais il ne supprime ni les mises à
          jour ni les erreurs humaines. Dans les deux cas, demandez qui reçoit
          les alertes, qui applique les correctifs et comment une sauvegarde est
          restaurée.
        </p>

        <GuideTable
          headers={["À vérifier", "WordPress", "Next.js"]}
          rows={[
            [
              "Éléments à mettre à jour",
              "Cœur, thème, extensions et serveur.",
              "Framework, bibliothèques, services et serveur selon le projet.",
            ],
            [
              "Sauvegarde",
              "Fichiers, base de données et configuration.",
              "Code, contenus, données, variables et configuration.",
            ],
            [
              "Accès sensibles",
              "Administration, hébergement, domaine et extensions payantes.",
              "Dépôt de code, hébergement, domaine, outil d’édition et services.",
            ],
            [
              "Retour après incident",
              "Restauration testée et journal des actions.",
              "Remise en ligne, restauration des données et renouvellement des clés et mots de passe techniques.",
            ],
          ]}
        />

        <h2 id="gouvernance">
          Demandez dès maintenant comment un autre prestataire reprendra le site
        </h2>

        <p>
          WordPress dépend de son hébergement, de son thème et de ses
          extensions. Next.js dépend de son hébergement, de ses bibliothèques et
          des services choisis par le développeur. Les deux peuvent être repris
          par une autre équipe si l’entreprise possède les comptes, reçoit le
          code et les contenus, connaît les licences et dispose d’une
          documentation utilisable. Next.js peut notamment être hébergé ailleurs
          que chez Vercel, comme l’explique sa{" "}
          <a
            href="https://nextjs.org/docs/app/guides/self-hosting"
            target="_blank"
            rel="noreferrer"
          >
            documentation d’hébergement autonome
          </a>
          .
        </p>

        <p>Quel que soit le choix, le contrat doit préciser :</p>

        <ul>
          <li>qui possède le nom de domaine et les comptes d’hébergement ;</li>
          <li>où se trouvent le code, les contenus et les données ;</li>
          <li>quels droits vous sont remis après paiement ;</li>
          <li>quelles licences ou services doivent continuer à être payés ;</li>
          <li>
            quelle documentation permettra à un autre prestataire de reprendre.
          </li>
        </ul>

        <h2 id="couts">
          Comparez les deux options sur trois ans avec le même contenu
        </h2>

        <p>
          Un WordPress construit à partir d’un thème peut coûter moins cher au
          départ qu’un site sur mesure. Ce n’est pas toujours le cas une fois
          ajoutés les licences, les corrections, la maintenance et une future
          refonte. Inversement, Next.js n’est pas « sans maintenance » et son
          développement initial peut être inutilement élevé pour un site simple.
        </p>

        <GuideTable
          headers={["Dépense sur 3 ans", "Option WordPress", "Option Next.js"]}
          rows={[
            ["Conception, contenus et migration", "___ €", "___ €"],
            ["Hébergement et nom de domaine", "___ €", "___ €"],
            ["Thème, extensions et autres licences", "___ €", "___ €"],
            ["Outil d’édition éventuel", "Inclus / ___ €", "Inclus / ___ €"],
            ["Mises à jour, sécurité et sauvegardes", "___ €", "___ €"],
            ["Assistance et évolutions", "___ €", "___ €"],
            ["Temps de votre équipe", "___ €", "___ €"],
            [
              "Export, redirections et changement de prestataire",
              "___ €",
              "___ €",
            ],
            ["Total sur 36 mois", "___ €", "___ €"],
          ]}
        />

        <p>
          Une valeur zéro doit être justifiée. Comparez aussi le même niveau de
          design, les mêmes pages, le même nombre de langues, les mêmes
          formulaires et la même assistance. Notre guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d’un site vitrine</Link>{" "}
          détaille les postes à faire chiffrer.
        </p>

        <p>
          WordPress permet d’exporter une partie importante des contenus dans un
          fichier prévu à cet effet, comme l’explique sa{" "}
          <a
            href="https://wordpress.org/documentation/article/tools-export-screen/"
            target="_blank"
            rel="noreferrer"
          >
            documentation d’export
          </a>
          . Cet export ne recrée pas automatiquement la mise en page d’un
          constructeur ou toutes les fonctions des extensions. Pour Next.js, la
          sortie dépend de la remise du code, des comptes, des contenus et de la
          documentation. Notre{" "}
          <Link href="/guides/wix-ou-wordpress">
            comparatif Wix ou WordPress
          </Link>{" "}
          explique aussi la différence avec les plateformes où le code du site
          n’est pas remis.
        </p>

        <h2 id="contenu">
          Qui modifiera les textes et les pages après la mise en ligne ?
        </h2>

        <p>
          C’est souvent le critère le plus concret. Si trois personnes publient
          chaque semaine, l’interface WordPress a une vraie valeur. Si le site
          change quatre fois par an, payer et maintenir une administration très
          complète n’est pas toujours nécessaire. Posez la question avec des
          tâches réelles, pas avec une promesse vague « d’autonomie ».
        </p>

        <GuideTable
          headers={["Modification réelle", "Avec WordPress", "Avec Next.js"]}
          rows={[
            [
              "Changer un texte ou une photo",
              "Depuis l’administration, si le thème le permet.",
              "Depuis l’outil d’édition prévu, ou par le prestataire.",
            ],
            [
              "Créer une nouvelle page de service",
              "Possible si un modèle adapté existe.",
              "Possible si le modèle et les champs ont été prévus.",
            ],
            [
              "Modifier la structure ou le design",
              "Intervention sur le thème ou le constructeur.",
              "Intervention du développeur.",
            ],
            [
              "Ajouter une réservation ou un paiement",
              "Extension à choisir, régler et maintenir.",
              "Service externe ou développement à intégrer et maintenir.",
            ],
          ]}
        />

        <p>
          Si vous préférez déléguer les rares mises à jour, vérifiez les délais
          et le prix dans un contrat de{" "}
          <Link href="/services/maintenance-evolution">
            maintenance et d’évolution
          </Link>
          . Si vous voulez publier en interne avec Next.js, faites tester
          l’outil d’édition avant d’accepter le devis.
        </p>

        <p>
          Si le délai de création est votre contrainte principale, notre guide{" "}
          <Link href="/guides/combien-de-temps-pour-creer-un-site">
            combien de temps faut-il pour créer un site
          </Link>{" "}
          aide à identifier ce qui bloque réellement : contenus, design,
          validations ou intégrations.
        </p>

        <p>
          Pour un WordPress existant, comparez le coût d’une remise à niveau au
          coût d’une refonte. Le guide du{" "}
          <Link href="/guides/prix-refonte-site-internet">
            prix d’une refonte
          </Link>
          , celui pour{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">
            refondre sans perdre son SEO
          </Link>{" "}
          et le guide pour{" "}
          <Link href="/guides/migrer-wordpress-vers-nextjs">
            migrer WordPress vers Next.js
          </Link>{" "}
          répondent à ces trois décisions différentes. Un{" "}
          <Link href="/services/audit-technique">audit technique</Link> peut
          aussi éviter une migration inutile si le problème vient de quelques
          causes identifiables.
        </p>

        <h3>Et pour vendre en ligne ?</h3>

        <p>
          Pour une boutique, commencez par les besoins de catalogue, paiement,
          livraison, taxes, retours et gestion des stocks. Une plateforme
          e-commerce spécialisée est souvent le point de départ le plus simple.
          WooCommerce peut convenir si WordPress est déjà au cœur du site
          éditorial. Un développement spécifique se justifie lorsque
          l’expérience d’achat, les tarifs par client ou les connexions métier
          sont réellement différents. Consultez notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">
            comparatif Shopify ou sur mesure
          </Link>{" "}
          et le guide du{" "}
          <Link href="/guides/prix-site-e-commerce">
            prix d’un site e-commerce
          </Link>
          .
        </p>

        <h2 id="headless">
          Associer WordPress et Next.js : utile dans certains cas, inutilement
          complexe dans d’autres
        </h2>

        <p>
          Dans une architecture dite <strong>headless</strong>, WordPress reste
          l’outil privé dans lequel l’équipe rédige. Next.js récupère ces
          contenus et construit le site public. Les rédacteurs gardent leurs
          habitudes, tandis que les développeurs contrôlent davantage
          l’affichage et les autres canaux.
        </p>

        <p>
          Cette solution peut convenir à un média, une marque publiant sur
          plusieurs supports ou un site très visité avec une équipe éditoriale
          organisée. Elle demande toutefois de maintenir WordPress, Next.js et
          la liaison entre les deux. L’{" "}
          <a
            href="https://bejamas.com/hub/case-studies/backlinko-case-study"
            target="_blank"
            rel="noopener noreferrer"
          >
            étude de cas publiée par Bejamas sur Backlinko
          </a>{" "}
          présente une amélioration importante après une telle migration. C’est
          un cas commercial particulier, pas un résultat garanti pour un autre
          site.
        </p>

        <InfoBox variant="amber" title="Pour un site vitrine simple">
          Une architecture avec deux systèmes est souvent trop lourde. Un
          WordPress bien entretenu, un site Next.js avec un outil d’édition plus
          léger ou même un site sans administration permanente peuvent répondre
          au besoin avec moins de coûts et moins de points de panne.
        </InfoBox>

        <h2 id="grille-decision">La décision finale tient en six réponses</h2>

        <ol>
          <li>
            <strong>Qui publie quoi, et combien de fois par mois ?</strong>
          </li>
          <li>
            <strong>
              Le site présente-t-il du contenu ou réalise-t-il aussi une tâche
              métier ?
            </strong>
          </li>
          <li>
            <strong>
              Quelles pages et fonctions doivent être particulièrement rapides ?
            </strong>
          </li>
          <li>
            <strong>
              Qui assure les mises à jour et les incidents pendant trois ans ?
            </strong>
          </li>
          <li>
            <strong>Que recevrez-vous si vous changez de prestataire ?</strong>
          </li>
          <li>
            <strong>
              Quel est le coût total des deux propositions sur 36 mois ?
            </strong>
          </li>
        </ol>

        <p>
          Utilisez le{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges du site
          </Link>{" "}
          pour demander le même contenu et les mêmes fonctions à chaque
          prestataire. Les guides du{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            prix d’un site internet
          </Link>{" "}
          et du{" "}
          <Link href="/guides/prix-site-e-commerce">
            prix d’un site e-commerce
          </Link>{" "}
          aident ensuite à compléter les budgets.
        </p>

        <p>
          Si votre besoin correspond à un site sur mesure, notre{" "}
          <Link href="/methode">méthode de travail</Link> et notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link> expliquent ce que
          nous construisons et ce qui doit être écrit au contrat.
        </p>

        <GuideInlineCTA
          title="Vous avez deux propositions difficiles à comparer ?"
          description="Présentez-nous le rôle du site, ce que votre équipe doit modifier et les fonctions attendues. Nous vous dirons si WordPress répond simplement au besoin ou ce qu’un site sur mesure changerait réellement, avec les dépenses à comparer sur trois ans."
          tags={[
            "Avis adapté à votre usage",
            "WordPress peut être recommandé",
            "Coût complet",
          ]}
          ctaLabel="Présenter mon projet de site"
          ctaHref="/demarrer-un-projet"
        />

        <h2>Sources et limites</h2>

        <p>
          Les statistiques et pages sectorielles ont été consultées en juillet
          2026 et peuvent évoluer. Les chiffres agrégés décrivent des ensembles
          de sites ; ils ne prédisent pas la vitesse, le coût ou le risque de
          votre projet.
        </p>

        <ul>
          <li>
            <a
              href="https://w3techs.com/technologies/details/cm-wordpress"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3Techs — utilisation de WordPress
            </a>
          </li>
          <li>
            <a
              href="https://www.searchenginejournal.com/2025-core-web-vitals-cms-rankings/552679/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Données Core Web Vitals par CMS relayées par Search Engine Journal
            </a>
          </li>
          <li>
            <a
              href="https://almanac.httparchive.org/en/2025/performance"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTTP Archive — Web Almanac 2025
            </a>
          </li>
          <li>
            <a
              href="https://www.searchenginejournal.com/googles-john-mueller-wordpress-not-inherently-better-for-seo/474737/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Propos de John Mueller sur CMS et SEO
            </a>
          </li>
          <li>
            <a
              href="https://2025.stateofjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              State of JavaScript 2025
            </a>
          </li>
          <li>
            <a
              href="https://bejamas.com/hub/case-studies/backlinko-case-study"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bejamas — étude de cas Backlinko
            </a>
          </li>
          <li>
            <a
              href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linux Foundation — projet FAIR
            </a>
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
