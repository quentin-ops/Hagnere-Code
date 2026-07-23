import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("google-search-ads-ou-performance-max");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: guideRobots(guide),
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Comparaison illustrée entre une campagne Google Search et Performance Max",
      },
    ],
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
  headline: guide.heroTitle,
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
      name: "Google Search Ads ou Performance Max",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Performance Max remplace-t-elle une campagne Search ?",
    answer:
      "Non, pas nécessairement. Google présente Performance Max comme un complément à Search ; les deux peuvent cohabiter si leurs objectifs, leurs conversions et leur lecture sont clairement organisés.",
  },
  {
    question: "Quelle campagne Google Ads donne le plus de contrôle ?",
    answer:
      "Cela dépend des réglages. Une campagne Search standard peut circonscrire les recherches avec ses mots clés, correspondances et exclusions. Si AI Max est activé, Search peut aussi élargir la mise en correspondance, adapter le texte et étendre l’URL finale. Performance Max délègue davantage la diffusion entre les canaux, mais fournit notamment des rapports par canal, des termes de recherche et des exclusions.",
  },
  {
    question: "Performance Max convient-elle au B2B ?",
    answer:
      "Elle peut convenir au B2B si l’entreprise transmet des conversions réellement qualifiées, dispose de contenus cohérents et sait traiter les contacts. Search reste souvent plus lisible lorsque la demande est étroite et les données encore pauvres.",
  },
  {
    question:
      "Combien de conversions faut-il avant de lancer Performance Max ?",
    answer:
      "Aucun seuil universel n’est établi par les sources officielles utilisées ici. Jugez plutôt la fiabilité, la fréquence et la valeur descriptive des conversions disponibles, sans inventer un nombre magique.",
  },
  {
    question: "Peut-on voir les recherches dans Performance Max ?",
    answer:
      "Oui, Google fournit un rapport sur les termes de recherche pour Performance Max. Sa lecture et son niveau de détail peuvent évoluer ; vérifiez la documentation et l’interface du compte au moment du test.",
  },
  {
    question: "Peut-on exclure des mots clés dans Performance Max ?",
    answer:
      "Oui. Google recommande toutefois les exclusions de marques pour écarter les recherches liées à une marque, et réserve les mots clés à exclure aux termes inadaptés ou essentiels à la sécurité de marque. Toute exclusion peut retirer une demande utile : vérifiez sa portée avant de l’appliquer.",
  },
  {
    question: "Quelle campagne Google Ads est la plus rentable ?",
    answer:
      "Aucune ne l’est par nature. La rentabilité dépend notamment de l’offre, de la demande, du suivi des conversions, de la qualification commerciale, des coûts et de la capacité à transformer les contacts en ventes.",
  },
];

const searchJourney = [
  {
    label: "Recherche exprimée",
    detail:
      "Une personne tape « logiciel planning atelier ». Cette formulation révèle une demande, mais pas encore sa qualification ni son budget.",
  },
  {
    label: "Règle choisie",
    detail:
      "Dans ce mini-parcours, AI Max est désactivé : l’entreprise choisit les mots clés, correspondances, zones et exclusions qui rendent la recherche éligible.",
  },
  {
    label: "Annonce et page",
    detail:
      "Le message et l’URL finale choisis répondent à la recherche. Avec AI Max, adaptation du texte et extension d’URL peuvent modifier ce parcours selon les réglages.",
  },
  {
    label: "Action mesurée",
    detail:
      "Un appel ou un formulaire est enregistré une seule fois, avec son origine et le consentement applicable.",
  },
  {
    label: "Qualification métier",
    detail:
      "L’équipe distingue ensuite une vraie demande d’entreprise d’un étudiant, d’un fournisseur ou d’un besoin hors zone.",
  },
];

const pmaxJourney = [
  {
    label: "Objectif transmis",
    detail:
      "L’entreprise indique l’action qu’elle veut obtenir et envoie à Google des conversions dont la définition est fiable.",
  },
  {
    label: "Éléments fournis",
    detail:
      "Textes, images, vidéos, pages de destination et informations sur l’offre donnent à la campagne de quoi composer ses annonces.",
  },
  {
    label: "Diffusion élargie",
    detail:
      "Google arbitre la diffusion sur plusieurs espaces de son inventaire selon l’objectif, les réglages et les signaux disponibles.",
  },
  {
    label: "Rapports et contrôles",
    detail:
      "L’entreprise lit notamment les termes de recherche et les performances par canal, puis distingue exclusions de marques et mots clés à exclure.",
  },
  {
    label: "Retour métier",
    detail:
      "Les contacts utiles, non qualifiés et ventes ou étapes commerciales confirmées reviennent dans la mesure sans doublon.",
  },
];

const conditions = [
  {
    title: "La demande existe-t-elle sous forme de recherches précises ?",
    search:
      "Search donne un point de départ lisible si l’entreprise peut nommer des recherches proches de l’intention commerciale et les relier à une page utile.",
    pmax: "PMax peut explorer plus largement, mais ne crée pas une offre claire ni une demande solvable à partir de rien.",
    repair:
      "Si les mots des clients, l’offre et la page restent flous, clarifiez-les avant de choisir le format.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title:
      "Les conversions et leurs valeurs décrivent-elles une action réellement utile ?",
    search:
      "Search reste mal évaluée si chaque clic est appelé prospect ou si une demande de démonstration et une vente reçoivent une valeur arbitraire.",
    pmax: "PMax dépend fortement des objectifs reçus : le compte doit dire s’il cherche le volume de demandes ou leur valeur, puis utiliser une règle métier cohérente.",
    repair:
      "Dédupliquez formulaires et appels, choisissez les actions principales, leur mode de comptage et une règle de valeur défendable, puis testez la remontée.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "L’entreprise possède-t-elle des contenus cohérents ?",
    search:
      "Une annonce textuelle et une page précise peuvent suffire pour tester une demande étroite.",
    pmax: "PMax utilise plusieurs formats et espaces : textes, visuels, vidéos et pages doivent raconter la même offre sans promesse contradictoire.",
    repair:
      "Ne lancez pas une diffusion large avec des éléments génériques ou des pages qui mélangent plusieurs services.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Quel contrôle faut-il garder au début ?",
    search:
      "Search peut rester circonscrite avec des réglages standards. AI Max, lorsqu’il est activé, ajoute une mise en correspondance plus large, l’adaptation du texte et l’extension d’URL finale.",
    pmax: "PMax délègue davantage la diffusion entre les canaux, mais elle fournit des rapports par canal, des termes de recherche, des exclusions de marques et des mots clés à exclure.",
    repair:
      "Écrivez les limites de zone, d’offre, de marque, de termes et d’URL, puis vérifiez quels réglages les appliquent réellement dans la campagne choisie.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
];

const coexistenceSteps = [
  {
    title: "Donnez un rôle à Search",
    text: "Par exemple, traiter une famille de recherches très explicites avec des annonces et pages dédiées. La campagne sert alors de référence lisible, pas de garantie de vente.",
  },
  {
    title: "Donnez un rôle distinct à Performance Max",
    text: "Par exemple, élargir la diffusion autour du même objectif métier lorsque les conversions et les créations sont assez fiables.",
  },
  {
    title: "Conservez une mesure commune",
    text: "Conservez les mêmes actions principales, modes de comptage, règles de valeur et attribution. Alignez aussi les objectifs et cibles d’enchère lorsque le test le demande.",
  },
  {
    title: "Lisez les règles de priorité actuelles",
    text: "Un mot clé Search en correspondance exacte, identique à la recherche, conserve une priorité étroite. Hors de ce cas, un thème PMax, une requête large, une expression ou AI Max peuvent être départagés selon l’éligibilité, la pertinence et le classement de l’annonce.",
  },
  {
    title: "Surveillez ce que chaque campagne apporte",
    text: "Lisez recherches disponibles, contacts, qualifications et ventes confirmées. Ne concluez pas à une cannibalisation totale sur la seule baisse d’un volume de clics.",
  },
];

const testProtocol = [
  {
    title: "1. Écrivez la décision avant de lancer",
    text: "Exemple : « conserver cette campagne si elle produit des demandes que l’équipe qualifie selon la définition écrite, sinon corriger ou arrêter ». Une vente certaine n’est pas un critère honnête.",
  },
  {
    title: "2. Définissez ce que la campagne doit maximiser",
    text: "Choisissez une action principale : demande qualifiée, rendez-vous tenu ou étape commerciale confirmée. Dites si vous cherchez le volume ou la valeur, avec une règle de valeur issue du métier plutôt qu’un montant inventé.",
  },
  {
    title: "3. Rendez les deux mesures comparables",
    text: "Contrôlez actions principales, mode de comptage, valeurs, attribution, consentement applicable et retour de qualification. Une même étiquette « conversion » ne suffit pas si ces réglages diffèrent.",
  },
  {
    title: "4. Choisissez le type de test avant la période",
    text: "Vérifiez l’expérience Google disponible et ses campagnes éligibles : impact, migration ou optimisation ne répondent pas à la même question. Consignez répartition du trafic ou du budget, objectifs et cibles tenus constants.",
  },
  {
    title: "5. Annoncez la période et les changements extérieurs",
    text: "Choisissez la période selon le cycle de vente et la capacité de traitement. Notez prix, page, offre, zone, saison, disponibilité et incidents ; n’arrêtez pas au premier jour favorable.",
  },
  {
    title: "6. Lisez recherche, canal, contact et vente ensemble",
    text: "Une recherche pertinente peut produire un contact non qualifié. Utilisez aussi le rapport PMax par canal, les diagnostics et les résultats commerciaux sans attribuer automatiquement toute variation au format.",
  },
  {
    title: "7. Décidez explicitement",
    text: "Conserver, corriger la mesure, resserrer, exclure, améliorer les contenus, combiner, laisser plus d’observation ou arrêter. La dépense passée ne justifie pas la dépense suivante.",
  },
];

const decisionQuestions = [
  {
    question: "1. Quelle recherche précise un prospect pourrait-il taper ?",
    evidence:
      "Écrivez trois à cinq formulations réellement entendues ou observées, sans prétendre connaître leur volume si vous ne l’avez pas mesuré.",
    meaning:
      "Une demande précise et étroite favorise un départ lisible avec Search.",
  },
  {
    question: "2. Quelle action doit être optimisée, en volume ou en valeur ?",
    evidence:
      "Distinguez visite, formulaire, contact qualifié et vente. Choisissez les actions principales, leur mode de comptage et, si nécessaire, une valeur issue d’une règle métier.",
    meaning:
      "Si le volume, la valeur ou les étapes se mélangent, réparez la mesure avant d’automatiser davantage.",
  },
  {
    question: "3. Les conversions sont-elles comparables et sans doublon ?",
    evidence:
      "Testez l’identifiant, le mode de comptage, la valeur, l’attribution et le retour de qualification appliqués à chaque campagne.",
    meaning:
      "Une donnée peu nombreuse mais propre et comparable est plus instructive qu’un volume gonflé.",
  },
  {
    question: "4. Quels éléments cohérents pouvez-vous fournir ?",
    evidence:
      "Listez pages, textes, images, vidéos et restrictions de marque ou de secteur réellement prêts.",
    meaning:
      "Des contenus incomplets ou contradictoires fragilisent particulièrement une diffusion multiespace.",
  },
  {
    question: "5. Qu’est-ce qui doit rester strictement circonscrit ?",
    evidence:
      "Zone, service, clientèle, termes hors sujet, produits indisponibles et promesses interdites.",
    meaning:
      "Un besoin fort de lecture et de limitation initiale favorise souvent Search.",
  },
  {
    question: "6. À quelle question votre test doit-il répondre ?",
    evidence:
      "Choisissez impact, migration ou optimisation selon les options disponibles. Écrivez la période, l’allocation, les réglages constants et les sorties « données insuffisantes » ou « campagne à arrêter ».",
    meaning:
      "Un test mal attribué ou non comparable ne prouve pas qu’un format gagne ; aucun format ne garantit une vente.",
  },
  {
    question: "7. Qui lira les recherches et traitera les contacts ?",
    evidence:
      "Nommez la personne, la fréquence adaptée, la définition d’un contact utile et l’autorité pour conserver, corriger ou arrêter.",
    meaning:
      "Sans responsable, reportez le lancement : l’automatisation ne remplace pas la décision commerciale.",
  },
];

const outcomes = [
  {
    title: "Commencez probablement par Search",
    when: "La demande est étroite et exprimable par des recherches précises, les données sont encore pauvres et vous avez besoin de comprendre ou limiter les termes, la zone et l’offre.",
    next: "Créez un test circonscrit, reliez annonce, page et conversion qualifiée, puis lisez les termes et le traitement commercial.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Testez Performance Max avec des garde-fous",
    when: "Les conversions utiles sont fiables, les contenus sont cohérents, l’objectif métier est clair et l’entreprise peut laisser Google arbitrer sur plusieurs espaces.",
    next: "Lancez un test éligible avec actions, valeurs, objectifs et critères écrits ; lisez termes, canaux, exclusions et résultats métier avant de poursuivre.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Combinez progressivement",
    when: "Search couvre une demande explicite tandis que PMax reçoit un objectif distinct ou élargit la diffusion, avec une mesure commune et des rôles documentés.",
    next: "Vérifiez les règles de priorité, les recherches, la qualification et les changements de volume sans conclure trop vite à la cannibalisation.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Ne lancez pas encore",
    when: "Le formulaire confond tout, l’offre ou la page reste floue, personne ne traite les demandes, ou l’entreprise exige des ventes garanties.",
    next: "Corrigez offre, page, mesure et responsabilité. Une campagne bien configurée ne répare pas un parcours commercial incapable de reconnaître un bon contact.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
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
          { label: "Search ou Performance Max" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous voulez faire de la publicité sur Google sans laisser le format décider à votre place ? Comparez la demande, la mesure, les contenus et le contrôle avant de dépenser."
        heroAction={{
          href: "#fiche",
          label: "Remplir les 7 questions",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "02",
            title: "2 modes de diffusion",
            description: "",
            color: "violet",
          },
          {
            number: "07",
            title: "7 questions de choix",
            description: "",
            color: "blue",
          },
          {
            number: "04",
            title: "4 décisions possibles",
            description: "",
            color: "emerald",
          },
          {
            number: "",
            title: guide.readTimeMin + " minutes de lecture",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/suivi-conversions-google-ads",
            label: "Fiabiliser le suivi des conversions avant PMax",
          },
          {
            href: "/guides/budget-google-ads-pme",
            label: "Construire le budget une fois le format choisi",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Auditer le compte après la phase de test",
          },
          {
            href: "/guides/seo-ou-google-ads",
            label: "Choisir d’abord entre SEO et Google Ads",
          },
          {
            href: "/services/publicite-en-ligne",
            label: "Découvrir notre accompagnement Google Ads",
          },
        ]}
        faqTitle="Search ou Performance Max : les questions avant de lancer"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            « Je veux faire de la publicité sur Google, mais dois-je choisir les
            annonces dans les résultats de recherche ou Performance Max ? »
          </strong>{" "}
          Search est souvent le départ le plus lisible lorsque vos prospects
          formulent une demande précise et que la campagne est réglée pour la
          circonscrire. Mais AI Max peut élargir les rapprochements, adapter le
          texte et l’URL si vous l’activez. Performance Max utilise vos
          objectifs, conversions et contenus pour diffuser sur plusieurs espaces
          Google. Elle devient pertinente lorsque ces entrées sont fiables et
          que vous acceptez de déléguer davantage d’arbitrages. Les deux peuvent
          cohabiter. Si votre mesure confond un clic, un formulaire inutile et
          une vraie demande, ne lancez rien : réparez d’abord ce que la campagne
          devra apprendre.
        </p>

        <p>
          Le choix ne porte donc pas sur « manuel contre intelligent ». Il porte
          sur le niveau de contrôle utile, la qualité des informations envoyées
          à Google, le choix entre volume et valeur et la décision commerciale
          que vous saurez prendre après le test. Ce guide raconte les deux
          campagnes depuis votre bureau : ce que vous voyez, ce que vous réglez,
          ce que Google arbitre et ce que votre équipe doit encore qualifier.
        </p>

        <GuideToc
          items={[
            {
              id: "verdict",
              label: "1. La réponse courte selon votre situation",
            },
            { id: "search", label: "2. Ce que vous voyez avec Search" },
            { id: "pmax", label: "3. Ce que vous confiez à Performance Max" },
            {
              id: "conditions",
              label: "4. Les quatre conditions qui changent le choix",
            },
            { id: "ensemble", label: "5. Faire cohabiter Search et PMax" },
            {
              id: "test",
              label: "6. Construire un test qui permet de décider",
            },
            { id: "fiche", label: "7. Répondre aux sept questions" },
            { id: "sorties", label: "8. Lire les quatre sorties possibles" },
            { id: "aide", label: "9. Savoir s’il faut déléguer" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="verdict">
          1. Votre point de départ dépend surtout de ce que vous savez déjà
          mesurer
        </h2>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20 sm:p-6">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
              Départ souvent lisible avec Search
            </p>
            <h3 className="mb-0 mt-3 text-lg font-semibold text-zinc-950 dark:text-white">
              Vous vendez un logiciel de planning d’atelier à une clientèle
              précise
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Vous connaissez plusieurs recherches proches du besoin, possédez
              une page dédiée et recevez encore peu de demandes qualifiées.
              Search permet de circonscrire le premier test et d’apprendre les
              mots réellement employés.
            </p>
          </article>
          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20 sm:p-6">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
              Un test PMax devient défendable
            </p>
            <h3 className="mb-0 mt-3 text-lg font-semibold text-zinc-950 dark:text-white">
              Vous savez reconnaître et renvoyer une vraie demande commerciale
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Vos formulaires et appels sont dédupliqués, la qualification
              revient dans la mesure, vos textes et visuels sont cohérents et
              votre équipe peut analyser puis soutenir une diffusion plus large.
            </p>
          </article>
        </div>

        <p>
          Ces deux scènes ne fixent pas une règle universelle. Search peut
          convenir à une entreprise disposant déjà de nombreuses données ;
          Performance Max peut convenir au B2B. Notre recommandation éditoriale
          est seulement la suivante : testez souvent Search lorsque la demande
          est étroite, les conversions rares ou le besoin de contrôle élevé ;
          testez PMax lorsque les données, les valeurs et les contenus
          permettent à l’automatisation de poursuivre un objectif utile. Dans
          les deux cas, écrivez les garde-fous avant le lancement.
        </p>

        <InfoBox
          variant="amber"
          title="Google décrit ses produits et vend aussi la publicité"
        >
          Les sources Google utilisées dans ce guide sont les plus fiables pour
          comprendre le fonctionnement actuel de Search, Performance Max, les
          priorités, rapports et exclusions. Elles ne prouvent ni la rentabilité
          de votre campagne ni la supériorité commerciale du produit promu.
        </InfoBox>

        <h2 id="search">
          2. Search peut partir d’une recherche que l’entreprise choisit de
          viser
        </h2>

        <p>
          Google explique qu’une{" "}
          <a
            href="https://support.google.com/google-ads/answer/9510373?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            campagne sur le Réseau de Recherche
          </a>{" "}
          permet d’afficher des annonces à des personnes qui recherchent
          activement les produits ou services de l’entreprise. Dans une
          configuration Search standard, le dirigeant choisit notamment les
          recherches qu’il souhaite approcher par les mots clés, les pages et
          les annonces. Il ne choisit pas chaque personne et ne garantit pas son
          intention d’achat.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 dark:border-blue-900 dark:from-blue-950/30 dark:to-zinc-950 sm:p-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
            Mini-campagne fictive · « logiciel planning atelier »
          </p>
          <div className="space-y-3">
            {searchJourney.map((step, index) => (
              <div
                key={step.label}
                className="flex gap-4 rounded-xl border border-blue-100 bg-white/80 p-4 dark:border-blue-900/70 dark:bg-zinc-950/70"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
                    {step.label}
                  </h3>
                  <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p>
          La{" "}
          <a
            href="https://support.google.com/google-ads/answer/1704371?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Google sur les mots clés
          </a>{" "}
          détaille les types de correspondance et les mots clés à exclure.
          Concrètement, l’entreprise peut élargir ou resserrer la relation entre
          le mot clé choisi et la recherche réelle, puis retirer des intentions
          manifestement hors sujet. Elle doit lire ces recherches et protéger
          les termes utiles au lieu de multiplier les exclusions à l’aveugle.
        </p>

        <InfoBox
          variant="blue"
          title="Search possède aussi un niveau d’automatisation à choisir"
        >
          <a
            href="https://support.google.com/google-ads/answer/15910187?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Max pour les campagnes Search
          </a>{" "}
          est une couche facultative. Google documente une mise en
          correspondance plus large, y compris sans mot clé, ainsi que
          l’adaptation du texte et l’extension d’URL finale selon les réglages.
          Les{" "}
          <a
            href="https://support.google.com/google-ads/answer/15913066?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            questions fréquentes AI Max
          </a>{" "}
          décrivent aussi des contrôles de marque, d’URL et des limites
          d’épinglage. Demandez donc « quels réglages Search ? », pas seulement
          « Search ou PMax ? ».
        </InfoBox>

        <p>
          Search est plus lisible, mais pas automatiquement simple ou rentable.
          Un mot clé apparemment précis peut cacher une recherche scolaire,
          gratuite, technique ou sans projet. Une annonce pertinente peut mener
          vers une page générique et perdre la personne. Et un formulaire peut
          être compté comme conversion alors que personne ne qualifie la
          demande.
        </p>

        <h2 id="pmax">
          3. Performance Max part de l’objectif et des éléments que vous
          fournissez
        </h2>

        <p>
          Selon la{" "}
          <a
            href="https://support.google.com/google-ads/answer/10724817?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation officielle de Performance Max
          </a>
          , la campagne repose sur un objectif et donne accès depuis une seule
          campagne à l’inventaire Google. Vous fournissez objectifs de
          conversion, textes, visuels, vidéos, pages et autres réglages utiles ;
          Google arbitre davantage la combinaison et la diffusion.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 dark:border-violet-900 dark:from-violet-950/30 dark:to-zinc-950 sm:p-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-violet-700 dark:text-violet-300">
            La même entreprise vue depuis une campagne PMax
          </p>
          <div className="space-y-3">
            {pmaxJourney.map((step, index) => (
              <div
                key={step.label}
                className="flex gap-4 rounded-xl border border-violet-100 bg-white/80 p-4 dark:border-violet-900/70 dark:bg-zinc-950/70"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
                    {step.label}
                  </h3>
                  <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p>
          « Google trouve les bons clients tout seul » serait une mauvaise
          description. La campagne poursuit les objectifs et signaux que le
          compte lui transmet dans le cadre de ses réglages. Si l’action la plus
          facile est un formulaire non qualifié, l’algorithme peut apprendre à
          en trouver davantage sans améliorer les ventes. L’entreprise doit donc
          envoyer une définition plus proche de la valeur métier et conserver la
          capacité de contrôler les résultats.
        </p>

        <p>
          Performance Max n’est pas non plus totalement opaque. Google documente
          un{" "}
          <a
            href="https://support.google.com/google-ads/answer/16327396?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport sur les termes de recherche PMax
          </a>{" "}
          et un{" "}
          <a
            href="https://support.google.com/google-ads/answer/16260130?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport de performances par canal
          </a>
          . Pour les dates disponibles à partir du 6 juin 2025, ce dernier
          ventile notamment impressions, clics, conversions, valeur et coût sur
          Search, Display, YouTube, Discover, Maps, Gmail et les partenaires
          Search, avec des diagnostics.
        </p>

        <p>
          Les exclusions n’ont pas toutes le même rôle. Google recommande les{" "}
          <a
            href="https://support.google.com/google-ads/answer/16669487?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            exclusions de marques
          </a>{" "}
          pour écarter les recherches liées à une marque, car elles couvrent
          aussi variantes et fautes courantes. Les{" "}
          <a
            href="https://support.google.com/google-ads/answer/16668865?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            mots clés à exclure
          </a>
          , plus restrictifs, servent surtout à bloquer des termes inadaptés ou
          indispensables à la sécurité de marque. Dans Performance Max, ils ne
          s’appliquent qu’aux inventaires Search et Shopping. Ils ne contrôlent
          donc pas, à eux seuls, les emplacements Display ou Video : Google
          documente pour ces canaux des{" "}
          <a
            href="https://support.google.com/google-ads/answer/13607727?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            réglages distincts de compatibilité des contenus et d’exclusion des
            emplacements
          </a>
          . Vérifiez toujours la portée du réglage utilisé : une exclusion trop
          large peut supprimer une demande utile, tandis qu’un réglage appliqué
          au mauvais inventaire peut laisser passer une diffusion que vous
          pensiez avoir bloquée.
        </p>

        <h2 id="conditions">
          4. Quatre conditions changent davantage le choix que le nom de la
          campagne
        </h2>

        <div className="not-prose my-8 space-y-5">
          {conditions.map((condition) => (
            <article
              key={condition.title}
              className={`rounded-2xl border p-5 sm:p-6 ${condition.color}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {condition.title}
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                    Ce que cela signifie pour Search
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {condition.search}
                  </p>
                </div>
                <div>
                  <p className="m-0 text-xs font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                    Ce que cela signifie pour PMax
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {condition.pmax}
                  </p>
                </div>
              </div>
              <p className="mb-0 mt-5 border-t border-zinc-200 pt-4 text-sm font-medium leading-relaxed text-zinc-950 dark:border-zinc-800 dark:text-white">
                Avant de lancer : {condition.repair}
              </p>
            </article>
          ))}
        </div>

        <p>
          Le{" "}
          <Link href="/guides/suivi-conversions-google-ads">
            guide sur le suivi des conversions Google Ads
          </Link>{" "}
          détaille la mesure. Ici, retenez seulement la porte de décision : si
          le compte confond une visite, une tentative technique, un formulaire
          répété et une demande qualifiée, aucune comparaison Search/PMax ne
          peut être interprétée correctement.
        </p>

        <h2 id="ensemble">
          5. Search et Performance Max peuvent cohabiter, à condition d’écrire
          le rôle de chacune
        </h2>

        <p>
          Google présente PMax comme un complément à Search, pas comme son
          remplacement obligatoire. La coexistence ne signifie pas lancer deux
          campagnes identiques puis regarder laquelle dépense le plus. Donnez à
          chacune une mission, puis alignez actions principales, comptage,
          valeurs, attribution, objectifs et cibles d’enchère lorsque le type de
          test exige leur comparabilité. Nommez enfin la personne qui lit les
          résultats.
        </p>

        <div className="not-prose my-7 space-y-3">
          {coexistenceSteps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-[42px_1fr]"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p>
          La{" "}
          <a
            href="https://support.google.com/google-ads/answer/2756257?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Google sur la priorité des campagnes et mots clés
          </a>{" "}
          décrit un cas de priorité étroit : un mot clé Search en correspondance
          exacte, identique au terme recherché — y compris avec les corrections
          orthographiques prévues par Google — est prioritaire s’il reste
          éligible. En dehors de ce cas, un thème PMax peut notamment passer
          devant un mot clé en expression ou requête large non identique ; les
          candidats Search, AI Max et PMax peuvent ensuite être départagés selon
          l’éligibilité, la pertinence et le classement de l’annonce. Budget,
          ciblage, faible volume et autres limites peuvent aussi rendre un
          candidat inéligible. La règle évite donc « PMax vole toujours Search »
          autant que « Search passe toujours devant PMax ».
        </p>

        <InfoBox
          variant="blue"
          title="Une baisse des clics Search ne prouve pas à elle seule une cannibalisation nuisible"
        >
          Vérifiez les recherches, les contacts qualifiés, les ventes ou étapes
          confirmées, les réglages et les changements extérieurs. Le volume peut
          se déplacer sans réduire la valeur, ou masquer au contraire une
          dégradation. Seule la chaîne métier permet de trancher.
        </InfoBox>

        <h2 id="test">6. Concevez le test avant de regarder les résultats</h2>

        <p>
          Un test trompeur commence souvent ainsi : on lance PMax, on constate
          davantage de conversions dans l’interface et on conclut qu’elle gagne.
          Mais les actions principales, leur comptage, leur valeur,
          l’attribution et les objectifs étaient-ils comparables ? Les
          formulaires ont-ils été qualifiés ? Une autre page, une promotion ou
          la saison a-t-elle changé ? Écrivez le protocole avant de dépenser.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {testProtocol.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {step.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <p>
          Google présente plusieurs{" "}
          <a
            href="https://support.google.com/google-ads/answer/12997711?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            expériences Performance Max
          </a>
          , notamment pour mesurer un impact, préparer une migration ou tester
          une optimisation, selon les campagnes éligibles. Pour certains
          comptes, un{" "}
          <a
            href="https://support.google.com/google-ads/answer/13827420?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            test d’impact
          </a>{" "}
          répartit un trafic entre traitement et contrôle afin d’estimer un
          effet supplémentaire. Vérifiez dans l’interface le type disponible,
          les campagnes comparables, l’allocation, les objectifs et les cibles à
          maintenir. Le mot « expérience » ne corrige ni une conversion mal
          définie ni des changements simultanés non consignés.
        </p>

        <p>
          Ce guide ne donne volontairement ni budget minimum ni durée standard.
          Le{" "}
          <Link href="/guides/budget-google-ads-pme">
            guide du budget Google Ads pour une PME
          </Link>{" "}
          vous aide à construire ensuite les hypothèses du test. La période doit
          être annoncée en fonction de la demande et du cycle de traitement,
          tout en acceptant qu’un résultat puisse rester insuffisant pour
          conclure.
        </p>

        <h2 id="fiche">
          7. Répondez à ces sept questions avant d’autoriser la dépense
        </h2>

        <p>
          Ne comptez pas les « oui » pour produire un score automatique. Une
          seule faiblesse peut suffire à reporter le lancement : par exemple,
          aucune personne ne traite les prospects, ou la conversion principale
          est déclenchée deux fois. Écrivez une réponse et la preuve qui la
          soutient.
        </p>

        <div className="not-prose my-8 space-y-4">
          {decisionQuestions.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.question}
              </h3>
              <dl className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Preuve à écrire
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.evidence}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Conséquence possible
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {item.meaning}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm dark:border-zinc-800 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
            Décision de test à copier
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`OFFRE ET ZONE :

RECHERCHES PRÉCISES CONNUES :

ACTION MÉTIER APPELÉE « CONVERSION » :

ACTION PRINCIPALE ET MODE DE COMPTAGE :

OPTIMISER LE VOLUME OU LA VALEUR — RÈGLE MÉTIER :

COMMENT LE CONTACT EST QUALIFIÉ :

ATTRIBUTION, OBJECTIFS ET CIBLES À COMPARER :

CONTENUS ET PAGES PRÊTS :

AI MAX ACTIVÉ OU NON — CONTRÔLES DE MARQUE, TERMES ET URL :

PERSONNE QUI LIT ET TRAITE :

TYPE DE TEST, ÉLIGIBILITÉ ET ALLOCATION :

PÉRIODE D’OBSERVATION CHOISIE ET POURQUOI :

CRITÈRE POUR CONSERVER :

CRITÈRE POUR CORRIGER LA MESURE OU LA CAMPAGNE :

CRITÈRE POUR ARRÊTER :

CHANGEMENTS EXTÉRIEURS À CONSIGNER :`}
          </pre>
        </div>

        <h2 id="sorties">
          8. Votre fiche doit produire une phrase argumentée, pas un gagnant
          universel
        </h2>

        <div className="not-prose my-8 space-y-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className={`rounded-2xl border p-5 sm:p-6 ${outcome.color}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {outcome.title}
              </h3>
              <dl className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Si votre fiche montre
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {outcome.when}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Prochaine action
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {outcome.next}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Dans l’exemple fictif de ce guide, une PME B2B possède une demande
          précise et encore peu de conversions. Elle commence par Search, rend
          la qualification exploitable, puis réévalue PMax. Cette progression
          est une recommandation conditionnelle, pas une règle « Search d’abord
          » applicable à tout compte.
        </p>

        <InfoBox
          variant="blue"
          title="Un départ PMax peut être tout aussi cohérent"
        >
          Dans un second exemple entièrement fictif, un éditeur B2B importe déjà
          ses demandes qualifiées et ses ventes, utilise une règle de valeur
          issue de son processus commercial et possède des textes, images,
          vidéos et pages cohérents. Il peut tester PMax avec des garde-fous, un
          type d’expérience éligible et une condition d’arrêt écrite. Cet
          exemple n’annonce aucun résultat : il montre seulement que Search
          n’est pas un passage obligatoire lorsque les entrées nécessaires sont
          fiables.
        </InfoBox>

        <h2 id="aide">
          9. Un prestataire peut cadrer et gérer la campagne ; il ne peut pas
          garantir vos ventes
        </h2>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Un accompagnement peut être utile si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>l’offre et la clientèle sont identifiables ;</li>
              <li>la mesure doit être conçue ou réparée ;</li>
              <li>l’équipe accepte de qualifier les demandes ;</li>
              <li>
                les critères de conservation ou d’arrêt peuvent être écrits ;
              </li>
              <li>la dépense sera reliée aux étapes commerciales réelles.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Ne lancez pas avec nous — ni avec quelqu’un d’autre — si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>vous exigez une vente certaine ou un rendement garanti ;</li>
              <li>vous refusez de mesurer et qualifier les conversions ;</li>
              <li>personne ne répond aux appels ou formulaires ;</li>
              <li>
                la page et l’offre ne permettent pas de comprendre le service ;
              </li>
              <li>
                vous ne pouvez pas laisser le test produire une conclusion
                défavorable.
              </li>
            </ul>
          </article>
        </div>

        <GuideInlineCTA
          title="Cadrez une campagne que vous pourrez réellement évaluer"
          description="Décrivez votre offre, les recherches visées, les conversions disponibles et la façon dont votre équipe qualifie une demande. Une personne relira le contexte. Nous pourrons proposer une architecture de campagne, un plan de mesure et des critères de décision — sans promettre de rentabilité ni de vente."
          tags={[
            "Search ou PMax peuvent être testés",
            "La mesure peut devoir être réparée",
            "Arrêter le test reste possible",
          ]}
          ctaLabel="Cadrer ma campagne"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <p>
          Search ou Performance Max n’est pas une question de mode. Choisissez
          Search pour circonscrire une demande lorsque vous avez besoin de
          lisibilité ; testez PMax avec des garde-fous lorsque l’objectif, les
          conversions, leurs valeurs et les contenus supportent une diffusion
          plus automatisée ; combinez-les si leurs rôles sont écrits ; ou
          reportez tout si l’offre, la mesure et le traitement commercial ne
          permettent pas encore d’apprendre.
        </p>

        <h2 id="sources">Sources officielles et limites du guide</h2>

        <p>
          Documentation Google Ads consultée le 23 juillet 2026. Les interfaces,
          contrôles, priorités et rapports peuvent évoluer ; revérifiez les
          pages officielles et le compte avant une mise à jour substantielle.
          Google est à la fois l’auteur de cette documentation et le vendeur de
          la plateforme : ces sources décrivent le produit, mais ne garantissent
          aucun résultat pour votre entreprise.
        </p>

        <ul>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/9510373?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              campagnes sur le Réseau de Recherche
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/1704371?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              mots clés et correspondances
            </a>
            ,{" "}
            <a
              href="https://support.google.com/google-ads/answer/15910187?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnement d’AI Max
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/15913066?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              questions fréquentes AI Max
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/10724817?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              à propos de Performance Max
            </a>
            , ainsi que les{" "}
            <a
              href="https://support.google.com/google-ads/answer/13775965?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              bonnes pratiques PMax pour la génération de prospects
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/2756257?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              priorité des mots clés et campagnes
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/16327396?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              rapport sur les termes de recherche PMax
            </a>{" "}
            ,{" "}
            <a
              href="https://support.google.com/google-ads/answer/16260130?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              performances par canal
            </a>
            ,{" "}
            <a
              href="https://support.google.com/google-ads/answer/16669487?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              exclusions de marques
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/16668865?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              mots clés à exclure
            </a>
            .
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/12997711?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              expériences Performance Max
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/13827420?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              tests d’impact
            </a>
            .
          </li>
        </ul>

        <p>
          Ce guide n’a consulté ni votre compte, ni vos volumes, ni votre cycle
          commercial. Il ne fournit aucun seuil minimum de conversions, coût par
          clic, budget, durée, rendement ou hausse moyenne. Il ne compare pas
          SEO et publicité, ne remplace pas un audit de compte actif et ne
          constitue pas une promesse de résultat. La décision finale dépend de
          l’offre, du marché, des données, des réglages et du travail commercial
          réel.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
