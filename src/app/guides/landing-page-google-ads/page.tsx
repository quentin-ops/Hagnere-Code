import type { Metadata } from "next";
import Link from "next/link";
import { LandingPageContinuityWorksheet } from "@/components/guides/LandingPageContinuityWorksheet";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("landing-page-google-ads");

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
        alt: "Landing page Google Ads : garder, corriger, créer ou reporter",
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
      name: "Landing page Google Ads",
      item: guideUrl(guide),
    },
  ],
});

const tocItems = [
  { id: "page-existante", label: "Votre page actuelle peut-elle suffire ?" },
  { id: "annonces", label: "Recopier tout ce que les annonces peuvent dire" },
  { id: "exemple", label: "L’exemple fictif ThermoBureau 73" },
  { id: "plan-page", label: "Dessiner la réponse avant le design" },
  { id: "formulaire", label: "Demander seulement les informations utiles" },
  { id: "essais", label: "Faire un vrai essai avant les clics" },
  { id: "apres-lancement", label: "Observer après le lancement" },
  { id: "decision", label: "Garder, corriger, créer ou reporter" },
];

const faqItems = [
  {
    question: "Faut-il retirer le menu d’une landing page Google Ads ?",
    answer:
      "Pas automatiquement. Gardez les liens qui aident réellement le prospect à vérifier l’entreprise, comprendre l’offre ou consulter les informations légales. Simplifiez le menu s’il détourne vers des offres sans rapport, mais ne présentez pas sa suppression comme une garantie de conversion.",
  },
  {
    question: "Comment tester la page si je reçois peu de demandes ?",
    answer:
      "Commencez par ce qui ne dépend pas du volume : compréhension du service, cohérence des annonces, fonctionnement sur téléphone, erreurs du formulaire, confirmation et réception. Avec peu de demandes, évitez de déclarer un gagnant statistique ; rapprochez plutôt chaque contact de sa suite commerciale.",
  },
  {
    question: "Faut-il une case de consentement dans le formulaire ?",
    answer:
      "Pas dans tous les cas. La réponse à une demande, une prospection ultérieure et le dépôt de traceurs sont des usages distincts, avec des règles qui dépendent du traitement réel. Informez clairement la personne, déterminez la base légale adaptée et faites vérifier le dispositif si nécessaire ; une case générique ne rend pas l’ensemble conforme.",
  },
];

const sourceClass =
  "font-medium text-violet-700 underline decoration-violet-300 underline-offset-2 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-200";

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
          { label: "Landing page Google Ads" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vérifiez que la recherche, les titres, les descriptions et la page racontent la même chose, puis testez le formulaire jusqu’à sa vraie réception."
        heroAction={{ href: "#fiche", label: "Vérifier ma page" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Page existante possible",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "4 décisions possibles",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Outil local sans envoi",
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
            href: "/guides/suivi-conversions-google-ads",
            label: "Relier les conversions Google Ads aux ventes",
          },
          {
            href: "/guides/budget-google-ads-pme",
            label: "Calculer un budget Google Ads pour une PME",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Auditer une campagne Google Ads active",
          },
          {
            href: "/guides/pourquoi-google-ads-ne-convertit-pas",
            label:
              "Comprendre pourquoi les clics ne deviennent pas des clients",
          },
          {
            href: "/services/publicite-en-ligne",
            label: "Accompagnement Google Ads",
          },
          {
            href: "/services/sites-vitrines",
            label: "Création de sites et pages de destination",
          },
        ]}
        faqTitle="Landing page Google Ads : trois questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous payez chaque clic Google Ads et vous hésitez à envoyer le
          prospect vers votre page d’accueil, une page de service existante ou
          une nouvelle page. La page qui s’ouvre après le clic s’appelle une
          landing page, ou page de destination. Elle n’a pas besoin d’être
          nouvelle : votre page actuelle peut suffire si elle reprend clairement
          le service, la zone, les conditions et l’action annoncés, puis
          transmet réellement la demande. Sinon, corrigez-la, créez une page
          dédiée si l’offre reste confuse, ou reportez la campagne.
        </p>
        <p>
          Ce guide concerne les annonces du Réseau de Recherche qui renvoient
          vers votre site. Il ne couvre pas Display, Shopping, YouTube ni
          Performance Max. Vous allez vérifier ce que vos annonces peuvent
          réellement afficher, puis essayer la page sur téléphone jusqu’à la
          boîte ou l’outil qui reçoit la demande.
        </p>

        <GuideToc items={tocItems} />

        <h2 id="page-existante">
          1. Votre page actuelle peut très bien suffire
        </h2>
        <p>
          Une nouvelle page n’est pas un passage obligé. Si votre page de
          service nomme déjà l’offre, le public, la zone, les conditions et la
          prochaine action, la dupliquer peut seulement ajouter deux versions à
          tenir à jour. Commencez donc par la page que vous avez, et posez une
          question simple : une personne qui vient de lire l’annonce
          reconnaît-elle immédiatement ce sur quoi elle a cliqué ?
        </p>
        <p>
          Google recommande de choisir une page qui correspond précisément à
          l’annonce et aux mots-clés, et d’y rendre l’action facile à trouver.
          Il s’agit d’un conseil d’optimisation, pas d’une promesse de ventes ni
          d’une obligation de créer une URL pour chaque mot-clé.{" "}
          <a
            href="https://support.google.com/google-ads/answer/6238826?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Lire les conseils officiels sur les annonces et les pages
          </a>
          .
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Gardez la page en l’état",
              text: "Tout ce que l’annonce peut affirmer se retrouve clairement sur la page, et la demande arrive à la bonne personne.",
              tone: "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20",
            },
            {
              title: "Corrigez puis recommencez les essais",
              text: "La page convient, mais un texte, une condition, le formulaire ou la confirmation crée encore un doute précis.",
              tone: "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20",
            },
            {
              title: "Créez une page dédiée",
              text: "La page générale mélange des offres ou des publics et ne peut pas expliquer celle de l’annonce sans devenir confuse.",
              tone: "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20",
            },
            {
              title: "Reportez la campagne",
              text: "L’offre n’est pas prête, une affirmation reste impossible à vérifier, le formulaire échoue ou personne ne traite les demandes.",
              tone: "border-red-200 bg-red-50/60 dark:border-red-900 dark:bg-red-950/20",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={"rounded-xl border p-4 " + item.tone}
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <InfoBox
          variant="blue"
          title="Une page approuvée peut encore être mauvaise"
        >
          <p className="mb-0">
            Les règles Google exigent notamment une destination fonctionnelle,
            accessible au robot de contrôle de Google Ads (Google AdsBot) et
            facile à parcourir. Une approbation ne prouve toutefois ni la clarté
            commerciale, ni la réception des demandes.{" "}
            <a
              href="https://support.google.com/adspolicy/answer/6368661?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceClass}
            >
              Consulter les exigences de destination
            </a>
            .
          </p>
        </InfoBox>

        <p>
          La qualité de la page participe aussi au classement de l’annonce avec
          plusieurs autres facteurs. Cela ne permet pas d’annoncer qu’une
          correction fera automatiquement baisser votre coût par clic. Le niveau
          de qualité est d’ailleurs présenté par Google comme un outil de
          diagnostic, pas comme une donnée utilisée directement dans l’enchère.{" "}
          <a
            href="https://support.google.com/google-ads/answer/1722122?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Comprendre le classement de l’annonce
          </a>{" "}
          et{" "}
          <a
            href="https://support.google.com/google-ads/answer/6167118?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            le rôle du niveau de qualité
          </a>
          .
        </p>

        <h2 id="annonces">
          2. Recopiez tout ce que vos annonces peuvent affirmer
        </h2>
        <p>
          Une annonce Search responsive n’est pas un texte unique. Vous
          fournissez plusieurs titres et descriptions ; Google peut les associer
          et les ordonner de différentes façons. L’aperçu n’affiche pas toutes
          les combinaisons possibles. Au moment de la consultation de ce guide,
          Google documente de 3 à 15 titres de 30 caractères maximum et de 2 à 4
          descriptions de 90 caractères maximum.{" "}
          <a
            href="https://support.google.com/google-ads/answer/7684791?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Voir le fonctionnement officiel des annonces responsives
          </a>
          .
        </p>
        <p>
          Ne testez donc pas seulement la combinaison qui vous plaît dans
          l’aperçu. Relevez chaque affirmation importante : service, public,
          zone, résultat remis, délai, disponibilité, prix, qualification,
          action et exclusion. Pour chacune, notez la phrase ou l’élément qui
          lui répond sur la page. Si vous ne trouvez rien, laissez la ligne
          inconnue ou marquez-la à corriger ; ne compensez pas ce vide par une
          belle image.
        </p>

        <h3>Le contrôle avancé à demander au gestionnaire Google Ads</h3>
        <p>
          Le compte peut contenir davantage que les titres de l’annonce ouverte
          à l’écran. Des textes peuvent être définis au niveau de la campagne,
          et des composants automatiques peuvent exister au niveau du compte. La
          « flexibilité améliorée » permet aussi à certains titres ou
          descriptions d’une autre annonce active du même groupe d’apparaître
          comme liens vers l’URL de cette autre annonce.{" "}
          <a
            href="https://support.google.com/google-ads/answer/7331111?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Lire la documentation sur les composants et leurs niveaux
          </a>
          .
        </p>
        <p>
          Si AI Max et l’adaptation du texte sont activés, Google peut générer
          d’autres titres et descriptions à partir du domaine, de la page, des
          annonces existantes et des mots-clés. L’extension d’URL finale peut
          également choisir une autre page pertinente du domaine. Demandez à la
          personne qui gère le compte de relever les réglages, les composants
          générés, leur rapport détaillé et les URL autorisées ou exclues.{" "}
          <a
            href="https://support.google.com/google-ads/answer/11259373?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Vérifier l’adaptation du texte dans Search
          </a>{" "}
          et{" "}
          <a
            href="https://support.google.com/google-ads/answer/15910187?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            les réglages AI Max
          </a>
          . Si personne ne peut faire ce relevé, l’information reste inconnue :
          l’outil ci-dessous ne prétend pas l’avoir devinée.
        </p>

        <div id="fiche">
          <LandingPageContinuityWorksheet />
        </div>

        <h2 id="exemple">
          3. Exemple fictif : ThermoBureau 73 passe sa page au crible
        </h2>
        <p>
          <strong>Exemple illustratif fictif.</strong> ThermoBureau 73 serait
          une entreprise inventée qui propose l’entretien de climatisations dans
          les bureaux autour de Chambéry. Tous les noms, textes et situations
          ci-dessous sont créés pour expliquer la méthode. Cet exemple ne décrit
          ni un client de Hagnéré Code, ni les performances d’une vraie
          campagne.
        </p>
        <p>
          Pour un même groupe d’annonces Search, l’entreprise prépare cinq
          titres : « Entretien climatisation », « Pour bureaux à Chambéry », «
          Demandez une visite », « Inventaire des équipements » et « Proposition
          d’entretien ». Deux descriptions précisent qu’un technicien recense
          les appareils sur place, puis remet une proposition adaptée au parc.
          Ces textes restent sous les limites documentées par Google, mais leur
          conformité technique ne suffit pas : la page doit répondre à chacune
          de leurs affirmations.
        </p>

        <div className="not-prose my-7 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Ce que l’annonce peut dire",
              items: [
                "entretien de climatisations",
                "bureaux situés autour de Chambéry",
                "visite sur demande",
                "inventaire des équipements",
                "proposition d’entretien remise ensuite",
              ],
            },
            {
              title: "Ce que la page doit permettre de comprendre",
              items: [
                "les équipements concernés et les exclusions",
                "la zone réellement desservie",
                "le déroulement de la visite",
                "ce qui est remis et ce qui reste payant",
                "la façon de demander un premier échange",
              ],
            },
            {
              title: "Ce que l’équipe doit essayer pour de vrai",
              items: [
                "ouvrir la bonne page depuis un téléphone",
                "envoyer une demande identifiable comme test",
                "retrouver le message chez le bon destinataire",
                "voir la confirmation et les erreurs éventuelles",
                "supprimer ensuite les données fictives du test",
              ],
            },
          ].map((card) => (
            <section
              key={card.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="mb-3 text-base font-semibold text-zinc-950 dark:text-white">
                {card.title}
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-violet-500">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p>
          Supposons maintenant qu’une autre annonce du même groupe parle de «
          dépannage » et renvoie vers une autre URL. Sa seule présence ne rend
          pas automatiquement la page d’entretien mauvaise. Il faut vérifier les
          annonces actives, leur URL et les réglages du compte dans leur
          contexte réel. Si un texte de dépannage peut conduire vers la page
          d’entretien et que celle-ci n’explique pas cette prestation, il existe
          un écart précis à corriger. Si les annonces et leurs pages restent
          bien séparées, il n’y a pas de problème à inventer.
        </p>
        <InfoBox
          variant="amber"
          title="Une phrase exacte vaut mieux qu’une promesse avantageuse"
        >
          <p className="mb-0">
            Si la visite n’est pas gratuite, n’écrivez pas seulement « demandez
            une visite » en espérant expliquer le prix plus tard. Si la zone
            dépend du nombre d’équipements, dites-le. La bonne page ne cherche
            pas à confirmer l’annonce à tout prix : elle évite que l’annonce
            affirme plus que l’entreprise ne peut tenir.
          </p>
        </InfoBox>

        <h2 id="plan-page">
          4. Dessinez la réponse avant de travailler le design
        </h2>
        <p>
          Quand la page doit être corrigée ou créée, commencez par un plan très
          simple sur la largeur d’un téléphone. À ce stade, les couleurs, les
          animations et les photographies comptent moins que l’ordre des
          réponses. Le prospect vient d’exprimer une recherche et de lire une
          annonce : la page doit poursuivre cette conversation, pas lui faire
          recommencer tout le site depuis l’accueil.
        </p>
        <p>
          Il n’existe pas de nombre universel de blocs, de mots ou de liens de
          menu. Une prestation connue peut être comprise rapidement ; une
          intervention engageante peut demander des conditions, des exemples et
          des réponses détaillées. Cherchez la longueur nécessaire pour prendre
          une décision honnête, puis retirez les répétitions.
        </p>

        <div className="not-prose my-7 space-y-3">
          {[
            {
              number: "01",
              title: "En-tête utile",
              text: "Identité de l’entreprise, moyen de revenir en arrière et liens réellement nécessaires pour vérifier qui vous êtes.",
            },
            {
              number: "02",
              title: "Premier écran compréhensible",
              text: "Service, public ou situation, zone éventuelle et prochaine action, sans formule abstraite ni défilement obligatoire pour comprendre l’offre.",
            },
            {
              number: "03",
              title: "Ce qui va se passer",
              text: "Étapes concrètes après la demande, résultat remis, éventuels coûts ou conditions et personne qui reprendra le contact.",
            },
            {
              number: "04",
              title: "Pour qui cela convient — et ne convient pas",
              text: "Cas adaptés, exclusions importantes et solution plus simple lorsque votre prestation ne serait pas le bon choix.",
            },
            {
              number: "05",
              title: "Éléments que le prospect peut vérifier",
              text: "Exemples authentiques, méthode expliquée, identité, informations légales et limites. Ne fabriquez ni témoignage ni résultat client.",
            },
            {
              number: "06",
              title: "Demande et suite visible",
              text: "Formulaire ou appel adapté, erreurs compréhensibles, confirmation exacte et réception réellement testée par l’équipe.",
            },
          ].map((zone) => (
            <div
              key={zone.number}
              className="grid gap-2 rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 sm:grid-cols-[3rem_1fr] dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <span className="text-sm font-bold text-violet-600 dark:text-violet-300">
                {zone.number}
              </span>
              <div>
                <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                  {zone.title}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {zone.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p>
          Google exige notamment une destination fonctionnelle, utile et facile
          à parcourir. Cette exigence publicitaire ne définit pas votre meilleur
          design, mais elle rappelle qu’une page difficile à utiliser ou presque
          vide n’est pas sauvée par une annonce bien écrite.{" "}
          <a
            href="https://support.google.com/adspolicy/answer/16427615?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Lire les règles Google sur l’expérience de la destination
          </a>
          .
        </p>

        <h2 id="formulaire">
          5. Demandez seulement ce dont votre équipe a besoin
        </h2>
        <p>
          Le bon formulaire n’a pas un nombre magique de champs. Il demande les
          informations nécessaires pour comprendre la demande et lui donner la
          bonne suite. Un nom, un moyen de contact et une courte description
          peuvent suffire dans certains cas. Une intervention sur plusieurs
          sites peut exiger une localisation ou le nombre d’équipements. Chaque
          champ supplémentaire doit avoir une utilité que l’équipe peut
          expliquer.
        </p>
        <p>
          Le principe de minimisation du Règlement général sur la protection des
          données (RGPD) consiste précisément à limiter les données à ce qui est
          adéquat, pertinent et nécessaire pour l’usage annoncé. Il faut aussi
          informer la personne, dans des mots compréhensibles, de l’usage de ses
          informations et de ses droits. L’information complète doit être
          immédiatement accessible depuis le formulaire. Elle peut être
          présentée en deux niveaux : l’essentiel près des champs, puis un lien
          explicite vers la notice détaillée. Elle précise notamment qui utilise
          les données, pourquoi, pour quelle raison juridique, qui peut les
          recevoir, combien de temps elles sont gardées, les droits de la
          personne, la façon de les exercer, le droit de saisir la CNIL et, s’il
          existe, le contact du délégué à la protection des données. Indiquez
          aussi les champs obligatoires ou facultatifs et la conséquence d’un
          champ obligatoire non rempli. D’autres mentions peuvent s’ajouter
          selon le traitement réel, par exemple un transfert hors de l’Union
          européenne ou une décision automatisée. Cette liste générale ne vaut
          pas validation RGPD de votre formulaire.{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Voir le rappel de la CNIL sur la minimisation
          </a>{" "}
          et{" "}
          <a
            href="https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            ses recommandations sur l’information des personnes
          </a>
          .
        </p>

        <h3>Ne mélangez pas trois usages différents</h3>
        <p>
          Répondre à la demande envoyée, recontacter plus tard la personne pour
          d’autres offres et déposer des traceurs publicitaires, par exemple un
          cookie qui suit la visite, ne sont pas une seule opération. Leur base
          légale — la raison juridique qui autorise chaque usage — et
          l’information à fournir dépendent de ce que vous faites réellement.
          Une case de consentement générique sous le formulaire ne règle pas
          tout à elle seule. Commencez par décrire chaque usage, puis faites
          valider le dispositif adapté à votre situation.{" "}
          <a
            href="https://www.cnil.fr/fr/les-bases-legales/liceite-essentiel-sur-les-bases-legales"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Comprendre les bases légales avec la CNIL
          </a>
          .
        </p>
        <p>
          Les outils de mesure d’audience et les traceurs publicitaires ne
          suivent pas non plus automatiquement la même règle. La CNIL détaille
          les conditions de l’exemption limitée de certains outils de mesure et
          répond aux questions courantes sur les cookies. Ne présentez donc pas
          un bandeau visible comme la preuve que tous les réglages derrière la
          page sont conformes.{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Vérifier les conditions pour la mesure d’audience
          </a>{" "}
          et{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            consulter la FAQ cookies de la CNIL
          </a>
          .
        </p>

        <h3>Une erreur ne doit jamais ressembler à un succès</h3>
        <p>
          Chaque champ doit être nommé clairement et chaque erreur doit dire ce
          qui manque. Le W3C, organisme qui publie des standards ouverts pour le
          Web, montre notamment comment associer les libellés, les instructions
          et les messages d’erreur aux champs concernés.{" "}
          <a
            href="https://www.w3.org/WAI/tutorials/forms/"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Consulter le tutoriel W3C sur les formulaires
          </a>
          . Surtout, n’affichez pas « merci, votre demande est envoyée » si le
          serveur n’a rien reçu. En cas d’échec, conservez ce que la personne a
          déjà saisi lorsque c’est possible et proposez une action
          compréhensible pour recommencer ou utiliser un autre moyen de contact.
        </p>
        <p>
          La page doit utiliser HTTPS et ne pas placer de données personnelles
          dans l’adresse visible du navigateur. Les destinataires, accès,
          journaux techniques et durées de conservation doivent également être
          maîtrisés. La CNIL publie une liste de précautions concrètes pour les
          sites web ; elle ne remplace pas l’analyse de sécurité propre à votre
          organisation.{" "}
          <a
            href="https://www.cnil.fr/fr/securite-securiser-les-sites-web"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Lire les recommandations de sécurité de la CNIL
          </a>
          .
        </p>

        <h2 id="essais">6. Faites un vrai essai avant d’acheter les clics</h2>
        <p>
          Une note automatique de vitesse ne vous dira pas si la mauvaise
          personne reçoit la demande, si un message d’erreur trompe le prospect
          ou si l’offre est incompréhensible. Avant le lancement, faites le
          parcours complet avec un vrai téléphone et une connexion proche de
          celles de vos clients. Une mesure de laboratoire peut aider à repérer
          un ralentissement ; elle ne garantit ni l’usage réel ni les ventes.
        </p>

        <ol className="space-y-4">
          <li>
            <strong>Lisez sans zoomer.</strong> Ouvrez l’URL finale prévue dans
            l’annonce. Vérifiez que le service, la zone, les conditions
            principales et l’action sont compris sans deviner ni faire défiler
            horizontalement.
          </li>
          <li>
            <strong>Parcourez au clavier.</strong> Sur ordinateur, utilisez la
            touche Tab et vérifiez qu’un contour visible indique toujours
            l’élément sélectionné au clavier. Les petits boutons doivent être
            utilisables sans précision excessive. Les règles internationales
            d’accessibilité du Web WCAG 2.2 définissent notamment, avec des
            exceptions, une cible d’au moins 24 pixels de large et de haut dans
            la mise en page, ou un espacement suffisant autour d’une cible plus
            petite.{" "}
            <a
              href="https://www.w3.org/TR/WCAG22/#focus-visible"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceClass}
            >
              Lire la règle sur le contour visible au clavier
            </a>{" "}
            et{" "}
            <a
              href="https://www.w3.org/TR/WCAG22/#target-size-minimum"
              target="_blank"
              rel="noopener noreferrer"
              className={sourceClass}
            >
              celle sur la taille des cibles
            </a>
            .
          </li>
          <li>
            <strong>Provoquez les erreurs.</strong> Laissez un champ nécessaire
            vide, saisissez une adresse incorrecte et, dans un environnement de
            test adapté, simulez une panne réseau ou serveur. La page ne doit
            jamais annoncer un envoi réussi lorsqu’il a échoué.
          </li>
          <li>
            <strong>Envoyez une demande fictive identifiable.</strong> Écrivez
            clairement qu’il s’agit d’un test, puis retrouvez la demande chez le
            destinataire attendu : boîte mail, outil commercial ou file de
            traitement. Vérifiez la date, les champs utiles et l’absence de
            données inattendues, puis supprimez le test selon vos règles.
          </li>
          <li>
            <strong>Recommencez après chaque changement important.</strong> Une
            correction visuelle peut déplacer le formulaire ; une modification
            technique peut casser la réception. Gardez la date, le téléphone, le
            navigateur, le résultat et le nom de la personne qui a vérifié.
          </li>
        </ol>

        <InfoBox
          variant="emerald"
          title="Le test est terminé quand la demande est retrouvée"
        >
          <p className="mb-0">
            Un clic sur « envoyer », une animation de confirmation ou un
            événement visible dans un outil de mesure ne prouvent pas que votre
            équipe peut traiter la demande. La vérification utile va jusqu’au
            destinataire réel, avec une demande fictive reconnaissable et sans
            donnée personnelle inutile.
          </p>
        </InfoBox>

        <h2 id="apres-lancement">
          7. Après le lancement, ne changez pas tout à la fois
        </h2>
        <p>
          Une fois la campagne active, regardez les termes de recherche que
          Google rend disponibles : ils montrent certaines requêtes ayant
          déclenché les annonces et permettent de repérer un besoin différent de
          celui décrit sur la page. Ce rapport n’est pas une liste exhaustive de
          toutes les recherches ; Google peut regrouper ou ne pas afficher les
          requêtes qui ne répondent pas à ses seuils de confidentialité.{" "}
          <a
            href="https://support.google.com/google-ads/answer/2472708?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Comprendre le rapport sur les termes de recherche
          </a>
          .
        </p>
        <p>
          Le rapport sur les pages de destination aide aussi à retrouver les URL
          utilisées et à consulter des indications sur leur compatibilité
          mobile. Servez-vous-en pour repérer une page inattendue ou une URL qui
          pose problème, sans confondre ce rapport avec une validation
          commerciale complète.{" "}
          <a
            href="https://support.google.com/google-ads/answer/7543502?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={sourceClass}
          >
            Voir le rapport Google sur les pages de destination
          </a>
          .
        </p>
        <p>
          Notez chaque modification avec sa date, la raison et la mesure que
          vous espérez faire évoluer. Corrigez d’abord les défauts certains :
          mauvaise offre, zone absente, formulaire cassé, destinataire erroné.
          Pour les améliorations moins évidentes, changez une idée importante à
          la fois et laissez assez de recul pour observer le parcours
          commercial. Avec peu de demandes, ne présentez pas une variation comme
          gagnante sur quelques clics.
        </p>
        <p>
          La page ne suffit enfin pas à dire si la campagne crée des ventes. Le
          suivi doit relier l’annonce, la demande reçue, sa qualification, le
          devis et la vente sans compter deux fois le même dossier. Le guide{" "}
          <Link href="/guides/suivi-conversions-google-ads">
            Suivi des conversions Google Ads : relier les clics aux ventes
          </Link>{" "}
          explique cette chaîne et les cas dans lesquels il vaut mieux ne pas
          automatiser les enchères tout de suite.
        </p>

        <h2 id="decision">
          8. Gardez, corrigez, créez ou reportez : prenez une décision
        </h2>
        <p>
          Vous n’avez pas besoin d’obtenir une page parfaite selon une liste
          universelle. Vous devez pouvoir expliquer pourquoi elle correspond à
          ce que les annonces actives peuvent dire, montrer qu’une personne la
          comprend sur son téléphone et prouver que la demande arrive à
          l’endroit prévu. Le résultat de la fiche et des essais conduit alors à
          l’une des quatre décisions ci-dessous.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Gardez la page",
              text: "Les affirmations concordent, le service et ses limites sont compris, le parcours fonctionne et la demande test a été retrouvée.",
            },
            {
              title: "Corrigez-la avant le lancement",
              text: "La page convient dans son ensemble, mais des écarts identifiés peuvent être corrigés puis vérifiés sans en créer une seconde.",
            },
            {
              title: "Faites chiffrer une page dédiée",
              text: "La page actuelle mélange trop d’offres ou ne peut pas répondre à la recherche et à l’annonce sans devenir difficile à comprendre.",
            },
            {
              title: "Reportez la campagne",
              text: "L’offre, la page, la réception ou le traitement commercial reste trop incertain. Ne payez pas des clics pour apprendre qu’aucune suite fiable n’est possible.",
            },
          ].map((decision) => (
            <div
              key={decision.title}
              className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {decision.title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {decision.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Si la page fonctionne mais que les clics ne donnent pas de clients, ne
          recommencez pas immédiatement le design. Utilisez le guide{" "}
          <Link href="/guides/pourquoi-google-ads-ne-convertit-pas">
            Pourquoi Google Ads ne convertit pas
          </Link>{" "}
          pour vérifier aussi la recherche, l’offre, le suivi et le traitement
          commercial. Si le doute porte surtout sur la somme à engager, le{" "}
          <Link href="/guides/budget-google-ads-pme">
            calculateur de budget Google Ads pour PME
          </Link>{" "}
          vous aide à poser les hypothèses avant de dépenser.
        </p>

        <GuideInlineCTA
          title="Présenter ma campagne et la page envisagée"
          description="Indiquez l’offre, la zone, les annonces prévues et l’URL que vous souhaitez utiliser. Quentin Hagnéré pourra donner une première orientation : garder la page, la corriger, faire chiffrer une page dédiée ou commander un audit séparé. Un audit documenté et une conception complète font l’objet d’un devis distinct ; aucune vente Google Ads ni aucun délai de réponse ne peuvent être garantis."
          tags={[
            "Première orientation humaine",
            "Audit séparé sur devis",
            "Option de reporter",
          ]}
          ctaLabel="Décrire mon projet Google Ads"
          ctaHref="/demarrer-un-projet"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
