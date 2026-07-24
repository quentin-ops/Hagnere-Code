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

const guide = getGuide("seo-local-pme");

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
        alt: "Parcours local de la recherche Google jusqu’à une demande qualifiée",
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
      name: "SEO local pour PME",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Peut-on garantir une place dans les trois premiers résultats locaux ?",
    answer:
      "Non. Google indique que les résultats locaux dépendent principalement de la pertinence, de la distance et de la notoriété, et qu’il n’existe aucun moyen de demander ou payer un meilleur classement local.",
  },
  {
    question: "Une fiche Google Business Profile est-elle gratuite ?",
    answer:
      "Oui, l’entreprise peut ajouter ou revendiquer gratuitement sa fiche puis la faire valider. Un prestataire peut facturer son travail de configuration ou de suivi, mais pas la propriété de la fiche ni une position garantie.",
  },
  {
    question:
      "Une entreprise qui intervient chez ses clients peut-elle avoir une fiche ?",
    answer:
      "Oui, si elle rencontre réellement ses clients et respecte les règles d’éligibilité. Si elle ne reçoit personne à son adresse, elle doit masquer celle-ci et représenter honnêtement sa zone de service. Une activité uniquement en ligne ou une société de génération de prospects n’est pas éligible.",
  },
  {
    question: "Faut-il créer une page pour chaque ville desservie ?",
    answer:
      "Non, pas par principe. Une page locale n’est utile que si l’entreprise sert réellement la zone et peut apporter une réponse, des modalités et des informations propres ; une série de pages presque identiques aide peu le lecteur.",
  },
  {
    question: "Peut-on offrir une remise contre un avis Google ?",
    answer:
      "Non. Google interdit les incitations et les manipulations d’avis, ainsi que la sélection des seuls clients satisfaits pour publier un commentaire positif.",
  },
  {
    question: "Le site internet est-il encore utile avec une fiche Google ?",
    answer:
      "Oui, dans de nombreux parcours. La fiche répond aux questions immédiates ; le site peut expliquer le service, la zone réellement couverte, les modalités, les limites et ce qui se passe après la prise de contact.",
  },
  {
    question:
      "Le balisage LocalBusiness améliore-t-il automatiquement le classement ?",
    answer:
      "Non. Ce balisage aide les systèmes à comprendre des informations exactes sur l’établissement et ses horaires, mais Google ne garantit ni affichage enrichi ni meilleure position.",
  },
];

const journey = [
  {
    step: "1",
    title: "La personne cherche",
    question:
      "Elle écrit un métier, un service, une ville ou « près de moi » depuis l’endroit où elle se trouve.",
    risk: "Votre entreprise n’est pas éligible, la fiche n’est pas validée ou les informations ne permettent pas à Google et au client de comprendre l’activité.",
    action:
      "Vérifier d’abord l’existence, la propriété et la représentation réelle de l’entreprise.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    step: "2",
    title: "Elle ouvre la fiche",
    question:
      "Elle regarde le nom, la catégorie, les horaires, la zone, les services, les photos et les avis.",
    risk: "Un horaire faux, une mauvaise catégorie ou une zone ambiguë suffit à faire douter ou à provoquer un déplacement inutile.",
    action:
      "Répondre aux questions immédiates avec des informations exactes et maintenues.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    step: "3",
    title: "Elle demande davantage de détails",
    question:
      "Elle visite le site pour savoir si le service correspond à son problème, à sa zone et à son niveau d’attente.",
    risk: "La fiche renvoie vers une page d’accueil qui parle de l’entreprise, mais ne décrit ni l’intervention ni la zone réellement servie.",
    action:
      "Relier la fiche à la page qui répond le mieux à cette intention, sans fabriquer une page par ville.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    step: "4",
    title: "Elle vérifie si elle peut faire confiance",
    question:
      "Elle compare les explications, les photos actuelles et les avis laissés après de vraies expériences.",
    risk: "Des avis achetés, récompensés ou filtrés fragilisent la confiance et contreviennent aux politiques Google.",
    action:
      "Demander honnêtement un avis à tous les clients concernés, sans cadeau ni sélection du sentiment.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    step: "5",
    title: "Elle appelle, demande un itinéraire ou remplit le formulaire",
    question:
      "L’entreprise répond-elle, comprend-elle le besoin et confirme-t-elle la zone et l’échéance ?",
    risk: "La visibilité progresse, mais les appels restent sans réponse ou toutes les demandes sont comptées comme des ventes.",
    action:
      "Suivre séparément interaction, demande qualifiée, devis et résultat métier.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
];

const profileQuestions = [
  {
    customer: "« Est-ce bien l’entreprise que je cherche ? »",
    profile:
      "Nom utilisé dans la vie réelle, catégorie principale précise et activités secondaires justifiées.",
    owner:
      "Comparer la fiche avec l’enseigne, le site, les documents commerciaux et l’activité réellement exercée.",
  },
  {
    customer: "« Est-elle ouverte maintenant ? »",
    profile:
      "Horaires habituels et horaires exceptionnels tenus à jour selon les possibilités de la fiche.",
    owner:
      "Nommer la personne qui modifie les horaires avant une fermeture, un jour férié ou un changement d’organisation.",
  },
  {
    customer: "« Se déplace-t-elle réellement chez moi ? »",
    profile:
      "Adresse ou zone de service représentée honnêtement selon le fonctionnement réel de l’entreprise.",
    owner:
      "Retirer les fausses adresses et les zones ajoutées uniquement pour viser des villes où le service n’est pas assuré.",
  },
  {
    customer: "« Propose-t-elle exactement ce service ? »",
    profile:
      "Services et description qui reprennent l’offre réelle, sans empiler les noms de villes ni les promesses.",
    owner:
      "Utiliser les mots des clients et renvoyer vers une page qui explique les conditions du service.",
  },
  {
    customer: "« Puis-je l’appeler ou visiter son site ? »",
    profile:
      "Téléphone, site et autres moyens d’action actuels, suivis sans renvoyer vers une page cassée ou un ancien numéro.",
    owner:
      "Tester chaque lien et chaque numéro depuis un téléphone, puis corriger le premier blocage.",
  },
];

const siteAnswers = [
  {
    title: "Le problème traité",
    text: "Une personne doit pouvoir reconnaître son besoin en quelques lignes, sans décoder une liste générale de métiers.",
  },
  {
    title: "La zone réellement couverte",
    text: "Expliquez les villes ou secteurs où l’entreprise se déplace réellement et dans quelles conditions. Une liste de communes n’est pas une promesse de présence physique.",
  },
  {
    title: "Le déroulement",
    text: "Dites ce qui se passe après l’appel ou le formulaire, qui rappelle et quelles informations préparer.",
  },
  {
    title: "Les limites utiles",
    text: "Précisez les demandes non prises en charge, les contraintes d’accès ou les délais à confirmer au lieu de laisser le prospect les découvrir trop tard.",
  },
  {
    title: "Les éléments qui rassurent",
    text: "Présentez l’entreprise réelle, ses qualifications prouvables, des photos exactes et des réponses concrètes — jamais un faux témoignage.",
  },
  {
    title: "L’action suivante",
    text: "Le téléphone ou formulaire doit fonctionner sur mobile et permettre à l’équipe d’identifier la demande locale.",
  },
];

const reviewPractices = [
  {
    title: "Demander après une expérience réelle",
    good: "Partager le lien ou le QR code officiel avec les clients concernés après la prestation, selon un moment compréhensible.",
    bad: "Acheter des commentaires, faire écrire un avis sans expérience ou organiser des comptes destinés à gonfler la note.",
  },
  {
    title: "Demander sans récompense",
    good: "Expliquer que l’avis aide les futurs clients à comprendre l’expérience, sans condition sur sa teneur.",
    bad: "Offrir une remise, un cadeau, une participation ou un avantage en échange de l’avis.",
  },
  {
    title: "Ne pas filtrer le sentiment",
    good: "Utiliser le même processus de demande pour les clients concernés, qu’ils paraissent satisfaits ou critiques.",
    bad: "Envoyer les clients contents vers Google et retenir les autres dans un questionnaire privé.",
  },
  {
    title: "Répondre avec des faits",
    good: "Remercier, reconnaître la situation publiquement sans exposer de données personnelles et proposer un canal approprié pour résoudre le problème.",
    bad: "Révéler le dossier du client, menacer, réciter une réponse générique ou contester automatiquement toute critique.",
  },
];

const controls = [
  {
    title: "Vous pouvez contrôler",
    items: [
      "l’éligibilité et la validation de la fiche ;",
      "le compte propriétaire et les accès du prestataire ;",
      "le nom réel, la catégorie, les horaires et la zone ;",
      "les services, photos et liens tenus à jour ;",
      "la page du site qui explique l’offre locale ;",
      "la demande d’avis sans incitation ni filtrage ;",
      "la réponse aux contacts et leur qualification.",
    ],
    color:
      "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Vous ne pouvez pas contrôler directement",
    items: [
      "l’endroit exact où chaque personne lance sa recherche ;",
      "la distance entre cette personne et l’entreprise ;",
      "les actions et la notoriété des concurrents ;",
      "les changements du moteur et de ses résultats ;",
      "la personnalisation liée au contexte de recherche ;",
      "une place précise ou un délai de classement ;",
      "la décision finale d’achat d’un prospect.",
    ],
    color: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
  },
];

const rankingFactors = [
  {
    title: "Pertinence : aider Google et le client à comprendre l’activité",
    text: "Choisissez la catégorie principale qui décrit le métier réel, complétez les coordonnées, horaires et services, puis reliez la fiche à une page qui répond précisément à la recherche. Répéter des villes ou ajouter des services inexistants ne crée pas une meilleure correspondance.",
    color:
      "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Distance : représenter le lieu ou la zone, sans pouvoir l’effacer",
    text: "Indiquez l’adresse exacte si les clients y sont réellement reçus ; sinon, masquez-la et renseignez les zones effectivement servies. Vous pouvez corriger une information fausse, pas rapprocher artificiellement l’entreprise de chaque personne qui cherche.",
    color:
      "border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Notoriété : construire des signes réels, pas un score artificiel",
    text: "Des avis authentiques, leur note, des liens et mentions légitimes sur le Web, ainsi que des articles ou annuaires réellement utiles peuvent contribuer à la notoriété. Le site mérite en parallèle son propre travail de référencement. Aucun de ces éléments ne garantit une place précise.",
    color:
      "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
];

const measurementStages = [
  {
    stage: "Visibilité",
    examples:
      "Recherches et vues disponibles dans les statistiques de la fiche.",
    proves:
      "La fiche ou la page a été présentée dans un contexte mesuré. Cela ne prouve pas que la personne a lu ni contacté.",
    color: "bg-blue-500",
  },
  {
    stage: "Interaction dans Google",
    examples:
      "Clic sur le bouton d’appel, demande d’itinéraire, clic vers le site ou autre interaction disponible.",
    proves:
      "Une personne a cliqué ou demandé une action. Dans les performances de la fiche, « appels » compte les clics sur le bouton : cela ne prouve pas que l’appel a été établi ou décroché.",
    color: "bg-violet-500",
  },
  {
    stage: "Contact réellement reçu",
    examples:
      "Appel arrivé et traité, formulaire reçu, message ou réservation retrouvé dans l’outil utilisé par l’équipe.",
    proves:
      "L’entreprise a bien reçu le contact. Cela ne prouve pas encore que son besoin, sa zone ou son échéance correspondent à l’offre.",
    color: "bg-cyan-500",
  },
  {
    stage: "Demande qualifiée",
    examples:
      "Besoin, zone, type de client et échéance correspondent aux critères écrits.",
    proves:
      "L’entreprise reconnaît un prospect qu’elle peut réellement servir. Cela ne prouve pas la vente.",
    color: "bg-amber-500",
  },
  {
    stage: "Résultat métier",
    examples:
      "Rendez-vous tenu, devis accepté, prestation ou vente selon le processus.",
    proves:
      "Un résultat commercial a été enregistré. Son attribution à une seule vue locale demande encore prudence.",
    color: "bg-emerald-500",
  },
];

const auditSteps = [
  {
    title: "Choisissez une recherche qu’un client prononcerait",
    action:
      "Écrivez le métier ou le service et la zone pertinente. N’ajoutez pas le nom de votre entreprise.",
    record:
      "Requête exacte, lieu du test, appareil, date et heure. Les résultats locaux changent selon la localisation et le contexte.",
  },
  {
    title: "Regardez ce qui apparaît avant de chercher votre position",
    action:
      "Vérifiez si la bonne fiche existe, si un doublon apparaît et si l’établissement présenté correspond réellement à l’entreprise.",
    record:
      "Fiche trouvée ou non, doublon éventuel, propriétaire connu et première incohérence.",
  },
  {
    title: "Ouvrez la fiche comme un prospect",
    action:
      "Lisez catégorie, horaires, zone, services, téléphone, site, photos et avis sans utiliser votre mémoire interne.",
    record:
      "Question à laquelle la fiche ne répond pas, information fausse ou action qui échoue.",
  },
  {
    title: "Suivez le lien vers le site",
    action:
      "Demandez-vous si la page ouverte explique ce service, cette zone, les limites et la prochaine action.",
    record:
      "Promesse cohérente ou contradiction, page trop générale, lien cassé et information manquante.",
  },
  {
    title: "Testez le contact sans perturber l’activité",
    action:
      "Effectuez un appel ou formulaire contrôlé, identifiable comme test, puis vérifiez qui le reçoit et comment il est traité.",
    record:
      "Heure, destination, information transmise, réponse obtenue et moyen de retirer le test des résultats métier.",
  },
  {
    title: "Classez les ruptures dans l’ordre du parcours",
    action:
      "Corrigez d’abord la propriété ou l’éligibilité, puis les informations, la page, le contact et enfin les contenus supplémentaires.",
    record:
      "Une correction prioritaire, son responsable et la manière de vérifier qu’elle est terminée.",
  },
];

const sevenDayPlan = [
  {
    day: "Jour 1",
    task: "Refaire une recherche locale complète",
    result:
      "Une fiche de test datée avec requête, localisation, appareil et blocage prioritaire.",
  },
  {
    day: "Jour 2",
    task: "Vérifier propriété, validation, unicité et éligibilité",
    result:
      "Le dirigeant sait quel compte contrôle la fiche et quel problème de fond doit être réglé avant toute optimisation.",
  },
  {
    day: "Jour 3",
    task: "Corriger les informations qui provoquent une mauvaise décision",
    result:
      "Nom réel, catégorie, horaires, zone, téléphone et lien correspondent à l’entreprise aujourd’hui.",
  },
  {
    day: "Jour 4",
    task: "Relire la page ouverte depuis la fiche",
    result:
      "La page explique le service, la zone, les modalités, les limites et l’action suivante.",
  },
  {
    day: "Jour 5",
    task: "Installer une demande d’avis honnête",
    result:
      "Un lien ou QR code peut être partagé sans récompense, sélection des clients satisfaits ni consigne de note.",
  },
  {
    day: "Jour 6",
    task: "Tester l’appel ou le formulaire et la qualification",
    result:
      "L’équipe sait qui reçoit la demande, quelles informations vérifier et comment distinguer interaction et prospect utile.",
  },
  {
    day: "Jour 7",
    task: "Choisir une seule correction suivante",
    result:
      "Un responsable, une action, une date de contrôle et un résultat attendu — sans promesse de position.",
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
          { label: "SEO local pour PME" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vos concurrents apparaissent dans Google ou Maps et pas votre entreprise ? Suivez une recherche jusqu’au contact pour savoir quoi corriger en premier."
        heroAction={{
          href: "#audit",
          label: "Faire l’audit local",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "03",
            title: "3 éléments à aligner",
            description: "",
            color: "violet",
          },
          {
            number: "05",
            title: "5 étapes jusqu’au contact",
            description: "",
            color: "blue",
          },
          {
            number: "07",
            title: "7 jours de corrections",
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
            href: "/guides/pourquoi-site-pas-visible-google",
            label: "Diagnostiquer une page absente des résultats classiques",
          },
          {
            href: "/guides/preparer-contenus-site-vitrine",
            label: "Préparer les informations et preuves du site",
          },
          {
            href: "/guides/seo-ou-google-ads",
            label: "Choisir entre référencement naturel et publicité",
          },
          {
            href: "/guides/google-ads-commerce-local",
            label: "Mesurer une campagne pour un commerce local",
          },
          {
            href: "/services/referencement-google",
            label: "Découvrir notre accompagnement en référencement",
          },
        ]}
        faqTitle="SEO local : les questions pratiques des PME"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Une personne cherche votre métier près de chez elle, voit plusieurs
            concurrents dans Google Maps, ouvre leurs fiches et appelle celui
            dont les horaires, le service et la page lui paraissent clairs.
          </strong>{" "}
          Le référencement local consiste à aider cette personne à trouver,
          comprendre et contacter le bon établissement ou prestataire dans sa
          zone. Commencez par trois éléments cohérents : votre entreprise
          réelle, sa fiche d’établissement Google — appelée simplement « fiche
          Google » dans ce guide — et le site qui explique l’offre. Puis
          vérifiez les avis, l’appel ou le formulaire et la manière dont
          l’équipe reconnaît une vraie demande. Google indique que les résultats
          locaux dépendent principalement de la pertinence, de la distance et de
          la notoriété. Vous pouvez améliorer vos informations et votre
          parcours, mais personne ne peut garantir une place précise ni
          supprimer la distance entre l’entreprise et celui qui cherche.
        </p>

        <p>
          La première question n’est donc pas « combien de villes faut-il écrire
          sur le site ? ». Elle est : où une recherche locale se rompt-elle
          avant de devenir une demande utile ? Vous allez vérifier la propriété
          de la fiche, les réponses immédiates, la page ouverte, les avis, le
          contact et le suivi commercial — dans cet ordre.
        </p>

        <GuideToc
          items={[
            {
              id: "parcours",
              label: "1. Suivre une recherche jusqu’au contact",
            },
            {
              id: "propriete",
              label: "2. Vérifier que la fiche est légitime et contrôlée",
            },
            { id: "fiche", label: "3. Répondre aux questions immédiates" },
            {
              id: "site",
              label: "4. Utiliser le site pour expliquer le service",
            },
            { id: "avis", label: "5. Demander des avis sans les manipuler" },
            { id: "classement", label: "6. Distinguer ce que vous contrôlez" },
            { id: "mesure", label: "7. Mesurer jusqu’au résultat métier" },
            { id: "audit", label: "8. Auditer une recherche comme un client" },
            {
              id: "plan",
              label:
                "9. Corriger la fiche, le site et le contact en sept jours",
            },
            { id: "aide", label: "10. Savoir quand demander de l’aide" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="parcours">
          1. Le SEO local ne s’arrête pas au moment où votre fiche apparaît
        </h2>

        <p>
          Une position n’est qu’un moment du parcours. L’entreprise peut être
          visible et perdre la demande parce que l’horaire est faux, que le site
          ne décrit pas le service ou que personne ne répond. À l’inverse, une
          fiche moins souvent vue peut produire des contacts utiles si elle
          répond exactement à la situation du client et si l’équipe traite bien
          l’appel.
        </p>

        <div className="not-prose my-8 space-y-4">
          {journey.map((item) => (
            <article
              key={item.step}
              className={`rounded-2xl border p-5 sm:p-6 ${item.color}`}
            >
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {item.step}
                </span>
                <div>
                  <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.question}
                  </p>
                </div>
              </div>
              <dl className="mt-5 grid gap-4 border-t border-zinc-200 pt-4 dark:border-zinc-800 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Rupture possible
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.risk}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Décision de l’entreprise
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {item.action}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Plus loin, le cas entièrement fictif d’Aubeline Dépannage vous fera
          suivre ce parcours de bout en bout : de la fiche affichée jusqu’à la
          demande réellement traitée. Il permettra de repérer précisément où une
          entreprise visible peut encore perdre un client.
        </p>

        <h2 id="propriete">
          2. Avant toute optimisation, vérifiez que la fiche représente une
          entreprise éligible et reste sous votre contrôle
        </h2>

        <p>
          Google permet à une entreprise d’
          <a
            href="https://support.google.com/business/answer/2911778?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            ajouter ou revendiquer gratuitement une fiche puis de la faire
            valider
          </a>{" "}
          . La validation montre que vous êtes autorisé à représenter
          l’établissement et augmente ses chances d’apparaître dans la recherche
          Google et dans Maps. La fiche elle-même est gratuite ; sa
          configuration et son suivi peuvent demander du travail. Personne ne
          peut toutefois vous vendre sa propriété comme un abonnement
          obligatoire.
        </p>

        <p>
          Les{" "}
          <a
            href="https://support.google.com/business/answer/13763036?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            règles d’éligibilité et de propriété
          </a>{" "}
          posent un premier test simple : l’entreprise doit rencontrer ses
          clients en personne pendant ses horaires déclarés, sauf exceptions
          prévues par Google. Une activité uniquement en ligne et une société de
          génération de prospects ne sont notamment pas éligibles. Avant
          d’optimiser la fiche, identifiez donc le fonctionnement réel :
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Des clients viennent sur place
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Affichez l’adresse seulement si l’établissement les reçoit
              réellement, avec une présence et des horaires cohérents.
            </p>
          </article>
          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              L’équipe se déplace chez les clients
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Masquez l’adresse si personne n’y est reçu et renseignez les zones
              où l’entreprise intervient réellement.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Toute la relation se fait en ligne
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              N’inventez ni adresse ni accueil physique : ce modèle n’est pas
              éligible à une fiche d’établissement.
            </p>
          </article>
        </div>

        <p>
          Les{" "}
          <a
            href="https://support.google.com/business/answer/3038177?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            consignes Google pour représenter une entreprise
          </a>{" "}
          demandent notamment une organisation qui entre en contact avec les
          clients selon les conditions d’éligibilité, un nom réel, une adresse
          ou zone honnête, des catégories précises et une fiche unique dans les
          cas prévus. Une adresse inventée ou un doublon ne devient pas légitime
          parce qu’il permet de viser une ville.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm dark:border-zinc-800 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
            Vérification de propriété avant toute dépense
          </p>
          <ul className="mb-0 space-y-3 pl-5 text-sm leading-relaxed text-zinc-300">
            <li>
              La fiche représente-t-elle l’entreprise telle qu’elle existe ?
            </li>
            <li>Est-elle validée selon le processus Google disponible ?</li>
            <li>Quel compte de l’entreprise en est propriétaire ?</li>
            <li>Le dirigeant peut-il ajouter ou retirer un gestionnaire ?</li>
            <li>
              Existe-t-il un doublon ou une ancienne fiche encore visible ?
            </li>
            <li>
              Le prestataire peut-il rendre les accès sans bloquer l’entreprise
              ?
            </li>
          </ul>
        </div>

        <p>
          Lorsqu’un tiers gère la fiche, le{" "}
          <a
            href="https://support.google.com/business/answer/7353941?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement Google destiné aux prestataires
          </a>{" "}
          prévoit que l’entreprise reste propriétaire ou copropriétaire,
          interdit les garanties de classement et exige que l’accès puisse être
          rendu. Demandez donc le compte propriétaire, les gestionnaires, les
          changements réalisés et la procédure de restitution avant de payer une
          prestation.
        </p>

        <p>
          Une entreprise qui intervient chez le client doit aussi représenter sa
          zone honnêtement. Google précise dans ses{" "}
          <a
            href="https://support.google.com/business/answer/9157481?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            règles sur les zones desservies
          </a>{" "}
          qu’une entreprise de zone de service utilise en principe une seule
          fiche pour l’ensemble de la zone, sauf établissements distincts
          réellement exploités selon les règles. Si aucun client n’est reçu à
          l’adresse, celle-ci doit être masquée. La documentation indique
          actuellement jusqu’à 20 zones et conseille que l’ensemble ne dépasse
          pas environ deux heures de trajet depuis la base de l’entreprise :
          traitez ces nombres comme des paramètres de produit à revérifier, pas
          comme une stratégie commerciale. Si l’entreprise n’est pas éligible ou
          si la propriété reste inconnue, corrigez ce point avant d’acheter du
          contenu local.
        </p>

        <h2 id="fiche">
          3. La fiche doit répondre aux questions qui précèdent l’appel
        </h2>

        <p>
          Le client ne lit pas la fiche comme un spécialiste du référencement.
          Il veut savoir si l’entreprise est la bonne, si elle est ouverte, si
          elle intervient dans sa zone, si elle propose le service et comment la
          contacter. Chaque information doit donc avoir un responsable et une
          date naturelle de mise à jour.
        </p>

        <div className="not-prose my-8 space-y-4">
          {profileQuestions.map((item) => (
            <article
              key={item.customer}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.customer}
              </h3>
              <dl className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Réponse attendue dans la fiche
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.profile}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Travail du dirigeant ou de l’équipe
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {item.owner}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="Répéter les noms de villes ne remplace pas une information locale utile"
        >
          N’ajoutez pas toutes les communes dans le nom, la description ou une
          série de pages génériques. Écrivez les zones réellement servies et
          expliquez les modalités qui changent pour le client. Une page
          distincte demande un service, une réponse et des informations propres
          — pas une substitution automatique du nom de la ville.
        </InfoBox>

        <h2 id="site">
          4. Le site explique ce que la fiche ne peut pas résumer
        </h2>

        <p>
          La fiche permet d’identifier l’entreprise et d’agir vite. Le site peut
          répondre aux questions qui demandent davantage de place : quel
          problème est traité, comment se déroule l’intervention, où
          l’entreprise se déplace, ce qui est exclu et ce que le prospect doit
          préparer. Il peut aussi présenter des informations et qualifications
          réellement vérifiables.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {siteAnswers.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 dark:border-cyan-900 dark:bg-cyan-950/20"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="not-prose my-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-5 dark:border-cyan-900 dark:bg-cyan-950/20 sm:p-6">
          <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-cyan-800 dark:text-cyan-300">
            Cas rempli entièrement fictif — Aubeline Dépannage
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Cette entreprise fictive répare des volets roulants chez les
            particuliers et ne reçoit aucun client dans son atelier. Son adresse
            doit donc rester masquée ; sa fiche indique seulement les communes
            réellement desservies.
          </p>
          <dl className="mb-0 mt-5 grid gap-4 text-sm md:grid-cols-2">
            <div>
              <dt className="font-semibold text-zinc-950 dark:text-white">
                Recherche testée
              </dt>
              <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                « réparation volet roulant près de moi », depuis un lieu, un
                appareil, une date et une heure consignés.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-950 dark:text-white">
                Information fausse
              </dt>
              <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                La fiche annonce une ouverture le samedi alors que personne ne
                traite les demandes ce jour-là.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-950 dark:text-white">
                Page ouverte
              </dt>
              <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                Une page d’accueil générale, sans explication de la réparation,
                de la zone ni des informations à préparer.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-950 dark:text-white">
                Contact contrôlé
              </dt>
              <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                Le bouton d’appel ouvre le bon numéro, mais l’appel test n’est
                ni décroché ni rappelé dans le scénario.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-950 dark:text-white">
                Correction prioritaire
              </dt>
              <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                Corriger l’horaire et le traitement des appels, puis créer une
                page utile sur la réparation avant d’ajouter des pages locales.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-950 dark:text-white">
                Données à relever ensuite
              </dt>
              <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                Clics sur le bouton d’appel, appels réellement reçus, besoins
                qualifiés, devis et résultats métier, sans inventer un gain de
                classement.
              </dd>
            </div>
          </dl>
        </div>

        <p>
          Si les textes, photos et éléments de réassurance manquent encore,
          utilisez le guide{" "}
          <Link href="/guides/preparer-contenus-site-vitrine">
            préparer les contenus d’un site vitrine
          </Link>
          . Si le problème concerne une page classique absente de Google et non
          Maps, consultez plutôt{" "}
          <Link href="/guides/pourquoi-site-pas-visible-google">
            pourquoi une page du site n’est pas visible dans Google
          </Link>
          .
        </p>

        <h3>
          Les données structurées peuvent décrire l’établissement, pas garantir
          sa position
        </h3>

        <p>
          Google Search Central documente le{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            balisage LocalBusiness
          </a>{" "}
          pour décrire notamment un établissement et ses horaires dans le code
          du site. Les données doivent refléter le visible. Ce balisage ne
          garantit ni résultat enrichi ni meilleur classement et ne corrige pas
          une fiche fausse, une page pauvre ou un appel sans réponse.
        </p>

        <h2 id="avis">
          5. Les avis rassurent seulement s’ils reflètent de vraies expériences
        </h2>

        <p>
          Google autorise le partage d’un{" "}
          <a
            href="https://support.google.com/business/answer/16816815?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            lien ou QR code pour demander un avis
          </a>
          . La demande peut devenir une étape normale après la prestation :
          l’équipe explique à quoi sert l’avis et laisse le client écrire
          librement son expérience.
        </p>

        <p>
          La{" "}
          <a
            href="https://support.google.com/contributionpolicy/answer/7400114?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique Google Maps sur les contenus publiés par les utilisateurs
          </a>{" "}
          exige une expérience authentique et interdit notamment les
          incitations, la manipulation et la sélection des seuls avis positifs.
          N’achetez donc pas une note. Organisez une demande régulière et
          honnête, puis utilisez les critiques pour comprendre un problème réel.
        </p>

        <div className="not-prose my-8 space-y-4">
          {reviewPractices.map((practice) => (
            <article
              key={practice.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {practice.title}
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/20">
                  <p className="m-0 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                    Pratique honnête
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {practice.good}
                  </p>
                </div>
                <div className="rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20">
                  <p className="m-0 text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-300">
                    À écarter
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {practice.bad}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p>
          Aucun nombre minimum d’avis, rythme idéal ou taux de réponse universel
          n’est retenu ici. Demandez l’avis à un moment cohérent avec
          l’expérience réelle, conservez un processus simple et contrôlez
          régulièrement qu’aucun avantage ou filtrage n’a été réintroduit.
        </p>

        <h2 id="classement">
          6. Vous pouvez améliorer la cohérence, mais vous ne contrôlez ni la
          distance ni une place précise
        </h2>

        <p>
          Google explique que le{" "}
          <a
            href="https://support.google.com/business/answer/7091?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            classement local repose principalement sur la pertinence, la
            distance et la notoriété
          </a>{" "}
          et qu’il n’existe aucun moyen de demander ou payer un meilleur
          classement local. La pertinence concerne la correspondance entre la
          recherche et l’entreprise. La distance dépend de l’endroit où la
          personne cherche. La notoriété tient à la connaissance de l’entreprise
          dans le monde réel et en ligne.
        </p>

        <p>
          Cette explication ne livre pas une formule de classement. Elle aide à
          refuser deux promesses : « davantage de texte corrigera la distance »
          et « une agence peut vous garantir le top 3 ». Investissez dans ce que
          l’entreprise peut réellement tenir et mesurer.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
          {rankingFactors.map((factor) => (
            <article
              key={factor.title}
              className={`rounded-2xl border p-5 sm:p-6 ${factor.color}`}
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {factor.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {factor.text}
              </p>
            </article>
          ))}
        </div>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {controls.map((group) => (
            <article
              key={group.title}
              className={`rounded-2xl border p-5 sm:p-6 ${group.color}`}
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {group.title}
              </h3>
              <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <InfoBox
          variant="blue"
          title="Des coordonnées cohérentes évitent surtout de perdre ou tromper le client"
        >
          Utilisez le même nom réel, le bon téléphone, la bonne adresse ou zone
          et les bons horaires sur les supports que vous contrôlez. Cette
          cohérence réduit les contradictions pour les personnes et les
          systèmes. Les sources officielles retenues ne permettent pas d’en
          faire une promesse autonome de classement.
        </InfoBox>

        <h2 id="mesure">
          7. Une vue, un clic, un contact reçu et une vente ne sont pas le même
          résultat
        </h2>

        <p>
          Les statistiques d’une fiche validée peuvent inclure des recherches,
          des vues et des interactions comme des{" "}
          <a
            href="https://support.google.com/business/answer/9918094?hl=fr-fr&rd=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            appels, demandes d’itinéraire et clics vers le site
          </a>
          . Dans ce rapport, « appels » désigne le nombre de clics sur le bouton
          d’appel, pas les conversations effectivement établies. Toutes les
          métriques ne sont pas proposées à toutes les fiches, et le rapport
          peut réunir des actions issues des résultats naturels et de Google
          Ads. Ce total ne mesure donc pas, à lui seul, le référencement local
          ni les ventes.
        </p>

        <div className="not-prose my-8 space-y-3">
          {measurementStages.map((item, index) => (
            <article
              key={item.stage}
              className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-[42px_1fr]"
            >
              <span
                className={`flex size-10 items-center justify-center rounded-xl text-sm font-bold text-white ${item.color}`}
              >
                {index + 1}
              </span>
              <div>
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {item.stage}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <strong>Exemples :</strong> {item.examples}
                </p>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.proves}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p>
          Choisissez une période avant de lire les résultats et conservez les
          données réellement disponibles. Pour chaque appel ou formulaire que
          l’entreprise est autorisée à suivre, notez si le besoin, la zone et
          l’échéance correspondent. Reliez ensuite, avec prudence, rendez-vous,
          devis et ventes. N’attribuez pas automatiquement chaque vente à la
          dernière vue de fiche : recommandation, passage devant
          l’établissement, relation antérieure et autres actions peuvent avoir
          contribué.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm dark:border-zinc-800 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
            Relevé local minimal
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`PÉRIODE ANNONCÉE :

RECHERCHES OU VUES DISPONIBLES :

CLICS D’APPEL / ITINÉRAIRES / CLICS VERS LE SITE :

APPELS ET FORMULAIRES RÉELLEMENT REÇUS :

DEMANDES QUALIFIÉES :
— besoin correspondant
— zone correspondant
— échéance compatible

RENDEZ-VOUS OU DEVIS :

RÉSULTATS MÉTIER CONFIRMÉS :

DONNÉES MANQUANTES :

AUTRES SOURCES POSSIBLES DE LA DEMANDE :

PREMIÈRE RUPTURE À CORRIGER :`}
          </pre>
        </div>

        <h2 id="audit">
          8. Faites vous-même une recherche locale et corrigez la première
          rupture
        </h2>

        <p>
          Les résultats locaux varient selon l’endroit et le contexte. Un seul
          test ne mesure donc pas une position universelle. Il permet en
          revanche de vérifier un parcours concret : la bonne fiche
          apparaît-elle, ses informations aident-elles, le site répond-il et le
          contact arrive-t-il au bon endroit ?
        </p>

        <div className="not-prose my-8 space-y-4">
          {auditSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {step.action}
                  </p>
                </div>
              </div>
              <p className="mb-0 mt-4 border-t border-zinc-200 pt-4 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                <strong className="text-zinc-900 dark:text-zinc-100">
                  À relever :
                </strong>{" "}
                {step.record}
              </p>
            </article>
          ))}
        </div>

        <p>
          Recommencez depuis d’autres situations réellement pertinentes si la
          zone le justifie, sans prétendre produire une carte exhaustive du
          classement. Le résultat de l’audit est une liste de ruptures classées
          selon le parcours, pas une promesse que la correction fera gagner une
          place déterminée.
        </p>

        <h2 id="plan">
          9. Utilisez sept jours pour réparer l’existant, pas pour promettre un
          classement
        </h2>

        <p>
          Ce plan organise le travail d’une semaine ; il ne promet aucun effet
          visible dans Google au septième jour. Si un accès manque, si la
          validation exige une procédure plus longue ou si l’entreprise doit
          trancher une information, conservez l’ordre des décisions et adaptez
          le calendrier.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {sevenDayPlan.map((item) => (
            <article
              key={item.day}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
                {item.day}
              </p>
              <h3 className="mb-0 mt-2 text-base font-semibold text-zinc-950 dark:text-white">
                {item.task}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong className="text-zinc-900 dark:text-zinc-100">
                  Résultat du travail :
                </strong>{" "}
                {item.result}
              </p>
            </article>
          ))}
        </div>

        <p>
          Au terme de ces sept jours, vous pouvez décider de ne pas investir
          davantage : par exemple si personne ne répond encore aux demandes, si
          la propriété de la fiche n’est pas réglée ou si l’entreprise n’est pas
          éligible dans la forme envisagée. Corriger ces décisions vaut mieux
          qu’ajouter des articles et des pages locales sur une base incohérente.
        </p>

        <h2 id="aide">
          10. Une agence peut aligner le parcours ; elle ne peut pas vendre une
          place garantie
        </h2>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Un diagnostic peut être utile si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>l’entreprise est légitime et sert une zone réelle ;</li>
              <li>
                le dirigeant conserve ou récupère la propriété de la fiche ;
              </li>
              <li>les services peuvent être décrits précisément ;</li>
              <li>le site, la fiche et le contact doivent être réalignés ;</li>
              <li>l’équipe accepte de mesurer et qualifier les demandes.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Hagnéré Code ne sera pas le bon interlocuteur si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>
                vous demandez une fausse adresse ou plusieurs fiches
                artificielles ;
              </li>
              <li>vous voulez acheter, récompenser ou filtrer les avis ;</li>
              <li>
                vous exigez des pages de villes produites en série sans contenu
                propre ;
              </li>
              <li>
                vous attendez une garantie de top 3 ou de première place ;
              </li>
              <li>personne dans l’entreprise ne peut traiter les contacts.</li>
            </ul>
          </article>
        </div>

        <GuideInlineCTA
          title="Rendez votre parcours local cohérent, mesurable et exploitable"
          description="Décrivez-nous votre établissement, la zone réellement servie, votre fiche, la page du site et le traitement actuel des contacts. Lors de notre échange, nous chercherons avec vous la première incohérence, puis nous vous dirons clairement si nous pouvons prendre en charge les corrections de la fiche, du site et du suivi commercial. Aucun classement ni délai de visibilité n’est garanti."
          tags={[
            "Vous restez propriétaire de la fiche",
            "Les avis manipulés sont refusés",
            "Le parcours réel guide le travail",
          ]}
          ctaLabel="Présenter ma situation locale"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <p>
          Le SEO local commence par une entreprise réelle, une fiche sous son
          contrôle et un site qui tient la même promesse. Les avis authentiques
          rassurent, mais ils ne réparent pas une mauvaise zone ni un appel sans
          réponse. Mesurez ensuite les interactions, les demandes qualifiées et
          les résultats métier sans confondre visibilité et vente. Corrigez la
          priorité la plus concrète avant d’ajouter du contenu.
        </p>

        <h2 id="sources">Sources officielles et limites</h2>

        <p>
          Sources consultées le 23 juillet 2026. Les règles, interfaces et
          statistiques Google Business Profile peuvent évoluer ; revérifiez-les
          avant une modification substantielle. Google opère le moteur et
          documente ses propres produits. Ses pages soutiennent les règles et le
          fonctionnement décrits ici, pas une promesse de classement.
        </p>

        <ul>
          <li>
            Google Business Profile —{" "}
            <a
              href="https://support.google.com/business/answer/7091?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              améliorer le classement local
            </a>
            .
          </li>
          <li>
            Google Business Profile —{" "}
            <a
              href="https://support.google.com/business/answer/2911778?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              ajouter ou revendiquer une fiche
            </a>
            ,{" "}
            <a
              href="https://support.google.com/business/answer/13763036?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              vérifier l’éligibilité et la propriété
            </a>
            ,{" "}
            <a
              href="https://support.google.com/business/answer/3038177?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              consignes de représentation
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/business/answer/9157481?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              zones desservies
            </a>
            .
          </li>
          <li>
            Google Business Profile —{" "}
            <a
              href="https://support.google.com/business/answer/7353941?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              règlement destiné aux tiers
            </a>
            .
          </li>
          <li>
            Google Business Profile et Google Maps —{" "}
            <a
              href="https://support.google.com/business/answer/16816815?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              demander des avis
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/contributionpolicy/answer/7400114?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique sur les contenus publiés
            </a>
            .
          </li>
          <li>
            Google Business Profile —{" "}
            <a
              href="https://support.google.com/business/answer/9918094?hl=fr-fr&rd=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              statistiques de performance
            </a>
            .
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              données structurées LocalBusiness
            </a>
            .
          </li>
        </ul>

        <p>
          Ce guide n’a pas consulté votre fiche, votre site, vos appels ni vos
          ventes. Il ne fournit aucun volume, délai, position, nombre minimum
          d’avis, fréquence idéale, effet garanti de coordonnées cohérentes ou
          du balisage. Les résultats locaux varient selon la localisation et le
          contexte. L’audit manuel doit donc être répété dans des situations
          réellement pertinentes et relié au traitement commercial.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
