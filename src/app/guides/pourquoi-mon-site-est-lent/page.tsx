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

const guide = getGuide("pourquoi-mon-site-est-lent");

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
      "Performance web",
      "Core Web Vitals",
      "SEO technique",
      "Next.js",
      "Hébergement web",
      "Optimisation front-end",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: SITE_URL + "/logos/logo-dark.png" },
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
      name: "Pourquoi mon site est lent",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Comment vérifier gratuitement si mon site est lent ?",
    answer:
      "Testez l'accueil et une page importante dans PageSpeed Insights, sur mobile puis sur ordinateur. Regardez les données réelles lorsqu'elles sont disponibles, puis les diagnostics de laboratoire. Refaites le test dans les mêmes conditions : un seul score ne suffit pas pour décider d'un chantier.",
  },
  {
    question: "Quel score PageSpeed faut-il viser ?",
    answer:
      "Ne transformez pas la note sur 100 en objectif commercial. Vérifiez surtout trois expériences : le contenu principal s'affiche-t-il rapidement, la page répond-elle lorsque l'on clique et les éléments restent-ils stables ? Google recommande un affichage principal en 2,5 secondes ou moins, une réponse aux actions en 200 millisecondes ou moins et très peu de déplacements visuels. Ces seuils doivent être respectés pour au moins trois visites sur quatre.",
  },
  {
    question: "Faut-il commencer par compresser les images ?",
    answer:
      "Seulement si les images font partie du problème. Une grande photo mal dimensionnée peut retarder l'affichage, mais elle ne corrigera ni un serveur lent, ni un script qui bloque les clics. Mesurez d'abord la page concernée, puis traitez la cause qui gêne réellement le visiteur.",
  },
  {
    question: "L'hébergement est-il toujours responsable ?",
    answer:
      "Non. Un délai avant le premier affichage peut venir de l'hébergement, mais aussi du cache, du code, de la base de données ou d'un service externe. Changer d'offre sans isoler la cause peut augmenter la facture sans changer l'expérience.",
  },
  {
    question: "Quand faut-il refaire le site plutôt que l'optimiser ?",
    answer:
      "Une refonte se justifie si la base technique n'est plus maintenue, si les corrections deviennent risquées ou si le site bloque aussi vos objectifs de contenu, de vente ou d'administration. Il n'existe pas de nombre magique de problèmes. Demandez deux chiffrages comparables : réparer l'existant et reconstruire.",
  },
  {
    question: "Combien coûte l'amélioration d'un site lent ?",
    answer:
      "Le prix dépend de la cause. Une correction sur quelques images n'a rien à voir avec un nettoyage du code ou une refonte. Exigez d'abord un diagnostic court, la liste des pages testées, les mesures de départ et les critères qui permettront d'accepter le résultat.",
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
          { label: "Pourquoi mon site est lent" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre site met du temps à afficher vos services, vos visiteurs attendent après un clic ou la page bouge pendant la lecture ? Voici comment trouver la cause, choisir la bonne correction et éviter une refonte inutile."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Tester les pages qui rapportent",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Relier chaque lenteur à une cause",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Réparer avant de parler de refonte",
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
          { href: "/services/audit-technique", label: "Audit technique" },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte",
          },
          {
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          {
            href: "/guides/cout-maintenance-site-internet",
            label: "Coût de la maintenance",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Pourquoi mon site ne convertit pas",
          },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Site lent : les réponses simples"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous avez peut-être ouvert votre site sur votre téléphone et attendu
          plusieurs secondes avant de voir l&apos;offre, le formulaire ou le
          bouton d&apos;achat. La première décision n&apos;est pas « faut-il
          refaire le site ? », mais{" "}
          <strong>
            « qu&apos;est-ce qui ralentit la page qui compte pour mon entreprise
            ? »
          </strong>
          . Une image trop lourde, un serveur qui répond tard et un outil de
          chat qui bloque la page ne se corrigent ni de la même façon, ni au
          même prix. Ce guide vous aide à mesurer le problème avec des mots
          simples, à demander le bon travail et à vérifier le résultat.
        </p>

        <InfoBox variant="amber" title="La réponse courte">
          Testez d&apos;abord trois pages : l&apos;accueil, la page qui présente
          votre service principal et la page où le visiteur doit agir. Si
          l&apos;une d&apos;elles est lente, ne signez pas immédiatement une
          refonte. Faites identifier la cause, chiffrer une correction ciblée et
          comparez ce scénario à une reconstruction seulement si la base
          technique est réellement en fin de vie.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Ce que la lenteur peut vous coûter",
            },
            {
              id: "mesurer",
              label: "2. Faire un premier test sans être technicien",
            },
            { id: "comprendre", label: "3. Comprendre les résultats utiles" },
            { id: "causes", label: "4. Relier le symptôme à la cause" },
            { id: "priorites", label: "5. Choisir la première correction" },
            { id: "refonte", label: "6. Optimiser ou refaire le site" },
            { id: "budget", label: "7. Préparer un budget réaliste" },
            {
              id: "prestataire",
              label: "8. Encadrer le travail du prestataire",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Ce que la lenteur peut vous coûter</h2>
        <p>
          Pour un dirigeant, un site lent n&apos;est pas d&apos;abord une
          mauvaise note dans un outil. C&apos;est un commercial qui présente
          l&apos;offre trop tard, un client qui doute au moment de payer ou un
          salarié qui perd du temps dans un espace interne. La priorité dépend
          donc de la page et de son rôle.
        </p>
        <GuideTable
          headers={[
            "Situation",
            "Risque pour l'entreprise",
            "Page à tester d'abord",
          ]}
          rows={[
            [
              "Site vitrine",
              "Le prospect ne voit pas assez vite l'offre ou le contact",
              "Accueil et page du service principal",
            ],
            [
              "Boutique en ligne",
              "La recherche, le panier ou le paiement devient pénible",
              "Catégorie, fiche produit et panier",
            ],
            [
              "Prise de rendez-vous",
              "Le visiteur abandonne avant la confirmation",
              "Page d'offre et parcours de réservation",
            ],
            [
              "Outil interne",
              "Chaque action répétée fait perdre du temps à l'équipe",
              "Écrans les plus utilisés au quotidien",
            ],
          ]}
        />
        <p>
          Commencez par ces pages, même si l&apos;accueil obtient une meilleure
          note. Une page secondaire qui porte la vente peut être plus importante
          pour votre chiffre d&apos;affaires qu&apos;une moyenne calculée sur
          tout le site.
        </p>

        <h2 id="mesurer">2. Faire un premier test sans être technicien</h2>
        <p>
          Ouvrez{" "}
          <a
            href="https://pagespeed.web.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PageSpeed Insights
          </a>
          , collez l&apos;adresse complète de la page et lancez l&apos;analyse.
          Faites le test sur mobile et sur ordinateur. Répétez-le deux ou trois
          fois dans les mêmes conditions : le résultat de laboratoire peut
          varier d&apos;un passage à l&apos;autre.
        </p>
        <ol>
          <li>
            <strong>Notez la page, la date et l&apos;appareil.</strong> Sans
            cela, deux résultats ne sont pas comparables.
          </li>
          <li>
            <strong>Regardez d&apos;abord l&apos;expérience réelle</strong> si
            l&apos;outil en affiche une. Elle vient de visiteurs Chrome
            éligibles sur les 28 jours précédents.
          </li>
          <li>
            <strong>Lisez ensuite le diagnostic de laboratoire.</strong> Il aide
            à trouver ce qui bloque sur cette page.
          </li>
          <li>
            <strong>Gardez une copie avant correction.</strong> Vous pourrez
            vérifier si le travail payé a amélioré la situation.
          </li>
        </ol>
        <InfoBox
          variant="blue"
          title="Pas de données réelles ? Ce n'est pas une erreur"
        >
          Google n&apos;affiche pas toujours les données de visiteurs pour une
          page peu visitée ou récente. Il peut alors remonter au niveau du
          domaine, ou ne rien afficher. Utilisez le laboratoire pour chercher
          les causes, mais ne présentez pas sa note comme l&apos;expérience de
          tous vos clients.
        </InfoBox>

        <h2 id="comprendre">3. Comprendre les résultats utiles</h2>
        <p>
          Vous n&apos;avez pas besoin de mémoriser tous les sigles. Retenez les
          trois questions auxquelles Google associe ses Core Web Vitals : le
          contenu principal arrive-t-il assez vite, la page répond-elle aux
          clics et reste-t-elle stable pendant le chargement ?
        </p>
        <GuideTable
          headers={[
            "Ce que vit le visiteur",
            "Nom dans l'outil",
            "Seuil recommandé",
          ]}
          rows={[
            [
              "Le contenu principal tarde à apparaître",
              "LCP",
              "2,5 secondes ou moins",
            ],
            [
              "Le clic ou la saisie répond avec retard",
              "INP",
              "200 millisecondes ou moins",
            ],
            ["Le texte ou le bouton se déplace", "CLS", "0,1 ou moins"],
          ]}
        />
        <p>
          Ces seuils sont évalués au 75e percentile : l&apos;objectif est que la
          grande majorité des visites soit au bon niveau — autrement dit, au
          moins trois visites sur quatre —, pas seulement votre ordinateur au
          bureau. Ils servent de repères d&apos;expérience. Ils ne garantissent
          ni une première place sur Google, ni une hausse automatique des
          ventes.
        </p>
        <InfoBox variant="amber" title="Deux mesures, deux usages">
          Les <strong>données terrain</strong> racontent ce que les visiteurs
          éligibles ont vécu. Les <strong>données de laboratoire</strong>{" "}
          rejouent un scénario contrôlé pour aider à diagnostiquer. Un
          prestataire sérieux montre les deux lorsqu&apos;elles existent et
          explique pourquoi elles peuvent différer.
        </InfoBox>

        <h2 id="causes">4. Relier le symptôme à la cause</h2>
        <p>
          Le même mot — « lent » — peut décrire des problèmes différents. Dites
          ce que vous voyez, sur quelle page et à quel moment. Cette description
          vaut mieux qu&apos;un score envoyé sans contexte.
        </p>
        <GuideTable
          headers={[
            "Ce que vous observez",
            "Causes à vérifier",
            "Contrôle utile",
          ]}
          rows={[
            [
              "La page reste blanche avant de s'afficher",
              "Hébergement, données, service externe ou réseau",
              "Délai de réponse et traces conservées par l'hébergement",
            ],
            [
              "La grande photo arrive très tard",
              "Fichier trop lourd, mauvaise dimension ou ordre de chargement",
              "Photo principale signalée par l'outil et poids téléchargé",
            ],
            [
              "La page apparaît puis se fige",
              "Trop de code exécuté ou service externe bloquant",
              "Opérations qui empêchent momentanément les clics",
            ],
            [
              "Le bouton bouge au moment du clic",
              "Espace non réservé pour une image, une police ou un bandeau",
              "Éléments responsables des déplacements",
            ],
            [
              "Le site ralentit aux heures de pointe",
              "Hébergement saturé, traitements trop lourds ou service externe ralenti",
              "Mesures au moment du problème",
            ],
          ]}
        />
        <p>
          Sur WordPress, une extension peut être en cause, mais son simple
          numéro dans la liste ne suffit pas. Sur un autre site, un composant ou
          un outil de suivi peut produire le même effet. Le test doit montrer
          l&apos;élément ou le calcul responsable avant de proposer sa
          suppression.
        </p>

        <InfoBox
          variant="blue"
          title="Exemple fictif : un cabinet reçoit moins de formulaires sur mobile"
        >
          Cet exemple ne décrit ni un client ni un témoignage réel. La page
          d&apos;accueil contient une vidéo, mais le formulaire se trouve sur
          une page de service. Le bon ordre n&apos;est pas de supprimer la vidéo
          au hasard : il faut tester les deux pages, vérifier si le formulaire
          répond correctement et regarder où les visiteurs quittent le parcours.
          Si la page est rapide mais que personne ne comprend l&apos;offre, le
          sujet relève de la conversion. Consultez alors notre guide sur les{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            sites qui ne convertissent pas
          </Link>
          .
        </InfoBox>

        <h2 id="priorites">5. Choisir la première correction</h2>
        <p>
          Classez les actions selon trois critères : gêne pour le visiteur,
          certitude sur la cause et risque de la modification. Une correction
          facile n&apos;est pas prioritaire si elle ne touche pas le parcours
          qui rapporte.
        </p>
        <GuideTable
          headers={[
            "Si le diagnostic montre…",
            "Première action",
            "Vérification après travaux",
          ]}
          rows={[
            [
              "Une image principale trop lourde",
              "Créer des dimensions et formats adaptés, puis régler sa priorité",
              "Comparer le LCP et contrôler la netteté",
            ],
            [
              "Des pages reconstruites à chaque visite",
              "Conserver temporairement les résultats réutilisables",
              "Vérifier vitesse, connexion et contenus personnalisés",
            ],
            [
              "Un service externe qui bloque",
              "Le charger plus tard, le remplacer ou le retirer",
              "Tester sa fonction métier et le consentement",
            ],
            [
              "Un traitement lent derrière le site",
              "Faire analyser le code et les échanges de données avant de changer d'offre",
              "Mesurer plusieurs pages et périodes de charge",
            ],
            [
              "Un hébergement réellement limité",
              "Choisir une offre dimensionnée et préparer la migration",
              "Tester avant et après, puis surveiller les erreurs",
            ],
          ]}
        />
        <p>
          Remesurez après chaque groupe de changements. Si tout est modifié en
          même temps, vous ne saurez pas ce qui a aidé, ce qui était inutile ou
          ce qui a cassé une fonction.
        </p>

        <h2 id="refonte">6. Optimiser ou refaire le site</h2>
        <p>
          Il n&apos;existe pas de règle honnête du type « trois voyants rouges =
          refonte ». La décision doit comparer le coût, le risque et la durée de
          vie des deux options.
        </p>
        <GuideTable
          headers={[
            "Optimiser l'existant si…",
            "Envisager une refonte si…",
            "Question à poser",
          ]}
          rows={[
            [
              "La base technique est maintenue et la cause est isolée",
              "La base technique ou ses composants ne sont plus maintenus",
              "La correction restera-t-elle compatible avec les mises à jour ?",
            ],
            [
              "Les parcours métier fonctionnent",
              "Les parcours doivent aussi être repensés",
              "La vitesse est-elle le seul problème ?",
            ],
            [
              "Les corrections sont testables et limitées",
              "Chaque correction crée de nouvelles régressions",
              "Quel est le coût probable sur deux ou trois ans ?",
            ],
            [
              "Le contenu reste simple à administrer",
              "L'équipe ne peut plus faire évoluer l'offre",
              "Que gagnera l'entreprise en dehors du score ?",
            ],
          ]}
        />
        <p>
          Demandez un plan écrit pour chaque scénario : travaux inclus, pages
          concernées, risques, délai, maintenance et résultat vérifiable. Notre
          guide sur le{" "}
          <Link href="/guides/prix-refonte-site-internet">
            prix d&apos;une refonte
          </Link>{" "}
          aide à comparer ces deux investissements.
        </p>

        <h2 id="budget">7. Préparer un budget réaliste</h2>
        <p>
          Une fourchette donnée avant de voir le site reste une hypothèse. Les
          repères ci-dessous décrivent des niveaux de travail, pas des prix
          officiels du marché ni une promesse pour votre projet.
        </p>
        <GuideTable
          headers={[
            "Niveau d'intervention",
            "Ce qui peut être inclus",
            "Ce qui fait varier le devis",
          ]}
          rows={[
            [
              "Diagnostic ciblé",
              "Quelques pages, mesures, cause probable et priorités",
              "Nombre de parcours, accès disponibles et reproductibilité",
            ],
            [
              "Corrections limitées",
              "Images, polices, cache ou quelques scripts identifiés",
              "Technologie, tests et risque de régression",
            ],
            [
              "Optimisation approfondie",
              "Code, base, extensions, services tiers et suivi",
              "Dette existante et environnement de test",
            ],
            [
              "Refonte",
              "Nouvelle base technique, contenus, redirections et validation finale",
              "Fonctions attendues, design, SEO et maintenance",
            ],
          ]}
        />
        <InfoBox
          variant="amber"
          title="Ce qu'un devis doit chiffrer séparément"
        >
          Demandez de distinguer le diagnostic, les corrections certaines, les
          options, les tests et le suivi après mise en ligne. Vous pourrez
          réduire la liste des travaux sans supprimer la vérification finale. Un
          forfait vague « optimisation SEO et vitesse » ne permet pas de savoir
          ce qui sera livré.
        </InfoBox>

        <h2 id="prestataire">8. Encadrer le travail du prestataire</h2>
        <p>
          Avant le démarrage, mettez-vous d&apos;accord sur une liste de
          contrôles assez simple pour être relue par une personne non technique.
          Elle doit contenir :
        </p>
        <ul>
          <li>les pages et les parcours prioritaires ;</li>
          <li>les appareils et conditions de test ;</li>
          <li>les mesures de départ conservées ;</li>
          <li>
            les fonctions qui ne doivent pas régresser : formulaire, paiement,
            connexion, suivi ;
          </li>
          <li>
            la façon de valider le résultat et de corriger un problème après
            livraison.
          </li>
        </ul>
        <p>
          Méfiez-vous d&apos;une garantie limitée à « 100/100 sur PageSpeed ».
          Un score de laboratoire ne remplace ni les mesures réelles, ni le test
          du parcours commercial, ni une garantie de référencement. Un bon
          engagement décrit les pages, les conditions et les responsabilités.
        </p>

        <GuideInlineCTA
          title="Vous voulez savoir s'il faut réparer ou refaire ?"
          description="Décrivez le problème, les pages concernées et votre objectif. Nous commencerons par les faits mesurables, puis nous comparerons les options sans vous imposer une refonte."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Mesures et seuils :{" "}
          <a
            href="https://web.dev/articles/vitals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google web.dev, Web Vitals
          </a>{" "}
          et{" "}
          <a
            href="https://developers.google.com/speed/docs/insights/v5/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation PageSpeed Insights
          </a>
          . Ces documents expliquent les seuils au 75e percentile, la différence
          entre terrain et laboratoire, ainsi que l&apos;absence possible de
          données réelles lorsqu&apos;un échantillon est insuffisant.
        </p>
        <p className="text-sm">
          Les exemples de situations et de devis sont pédagogiques. Ils ne
          constituent ni une mesure de votre site, ni une promesse de gain. Un
          chiffrage ferme exige l&apos;analyse de vos pages, de votre
          hébergement et de vos contraintes métier.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
