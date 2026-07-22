import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("leads-google-ads-non-qualifies");

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
        alt: "Diagnostic des contacts Google Ads qui ne correspondent pas à l’offre",
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
      name: "Leads Google Ads non qualifiés",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu’est-ce qu’un contact Google Ads non qualifié ?",
    answer:
      "C’est une demande qui échoue clairement à un critère indispensable de votre entreprise, avec un motif que vous pouvez expliquer : mauvais type de client, zone non servie, service absent ou condition réellement incompatible. Une impression vague ou une absence de réponse ne suffit pas à classer le contact.",
  },
  {
    question: "Un prospect injoignable est-il non qualifié ?",
    answer:
      "Non, pas automatiquement. Tant que personne n’a pu vérifier le besoin, le type de client et la zone, son statut reste en attente. Le ranger parmi les mauvais contacts embellit artificiellement le taux de traitement et mélange un problème de rappel avec un problème de ciblage.",
  },
  {
    question: "Faut-il ajouter davantage de questions au formulaire ?",
    answer:
      "Seulement si une réponse change réellement ce que votre équipe fait ensuite. Une question peut orienter une demande vers le bon service ou confirmer une zone ; dix champs ajoutés par précaution peuvent aussi décourager des personnes adaptées sans résoudre la cause.",
  },
  {
    question: "Faut-il passer tous les mots-clés en correspondance exacte ?",
    answer:
      "Non. Commencez par les recherches et les dossiers réellement observés. Google précise que la correspondance exacte peut couvrir des formulations de même sens ou de même intention ; elle ne signifie donc pas que seuls les mots strictement identiques seront utilisés.",
  },
  {
    question:
      "Faut-il exclure chaque recherche qui a donné un mauvais contact ?",
    answer:
      "Non. Excluez un terme clairement sans rapport après l’avoir documenté, mais gardez de la prudence avec une formulation ambiguë. Elle peut révéler une annonce trop large, une page imprécise ou une qualification commerciale incomplète plutôt qu’un mot à supprimer.",
  },
  {
    question:
      "Pourquoi des demandes viennent-elles de l’extérieur de ma zone ?",
    answer:
      "Le réglage peut inclure des personnes présentes dans la zone ou qui montrent un intérêt pour elle, et Google indique que la localisation n’est pas précise à 100 %. Vérifiez l’option active, le rapport géographique et la zone déclarée par le contact avant de modifier la campagne.",
  },
  {
    question: "Un appel long est-il forcément un bon contact ?",
    answer:
      "Non. Une durée permet éventuellement de compter un appel selon la configuration, mais elle ne prouve ni le besoin, ni la zone, ni le type de client. Il faut rapprocher l’appel reçu de son motif et de son résultat commercial.",
  },
  {
    question: "Google peut-il qualifier automatiquement les formulaires ?",
    answer:
      "Certaines réponses peuvent être configurées comme qualifiantes dans les formulaires Google compatibles, mais ce classement reflète la règle choisie. Il ne prouve ni qu’un échange commercial a eu lieu, ni qu’une proposition ou une vente a suivi.",
  },
  {
    question: "Combien de contacts faut-il analyser avant de décider ?",
    answer:
      "Il n’existe pas de seuil universel. Prenez une période où l’offre et les réglages principaux sont restés comparables, incluez tous les contacts uniques et laissez les dossiers non terminés en attente. Un petit ensemble de dossiers peut révéler une erreur évidente sans permettre de prévoir un taux futur.",
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
          { label: "Leads Google Ads non qualifiés" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous recevez des appels ou des formulaires grâce à Google Ads, mais ils viennent de particuliers, de personnes hors zone ou de prospects qui demandent un service que vous ne vendez pas ? Classez d’abord une période complète pour savoir ce qu’il faut vraiment corriger."
        heroAction={{
          href: "#bon-probleme",
          label: "Trouver la première cause",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Une période complète",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Un motif par contact",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Une correction à la fois",
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
            href: "/services/publicite-en-ligne",
            label: "Gestion et audit Google Ads",
          },
          {
            href: "/guides/pourquoi-google-ads-ne-convertit-pas",
            label: "Diagnostiquer une campagne sans résultat",
          },
          {
            href: "/guides/suivi-conversions-google-ads",
            label: "Relier conversions, demandes et ventes",
          },
          {
            href: "/guides/landing-page-google-ads",
            label: "Vérifier la page utilisée par les annonces",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Contrôler l’ensemble du compte Google Ads",
          },
          {
            href: "/guides/budget-google-ads-pme",
            label: "Décider du budget après le diagnostic",
          },
        ]}
        faqTitle="Contacts Google Ads hors cible : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous payez Google Ads et des demandes arrivent. Le problème, c’est
          qu’elles viennent souvent de particuliers alors que vous travaillez
          avec des entreprises, de personnes situées hors de votre zone ou de
          prospects qui cherchent un service que vous ne proposez pas. Avant de
          couper la campagne ou d’ajouter des réglages partout, prenez{" "}
          <strong>
            tous les contacts d’une même période, classez chacun avec un motif
            principal, puis remontez vers la recherche, la zone, l’annonce, la
            page ou le traitement commercial
          </strong>
          . Vous pourrez alors tester une seule correction et savoir ce qu’elle
          change réellement.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Un « mauvais contact » n’explique pas sa propre cause. Un particulier
          peut avoir suivi une recherche trop large, une annonce ambiguë ou une
          page qui ne dit jamais « réservé aux entreprises ». Une demande hors
          zone peut venir du réglage géographique, mais aussi d’une zone mal
          comprise. Classez les dossiers avant de modifier le budget.
        </InfoBox>

        <GuideToc
          items={[
            { id: "bon-probleme", label: "1. Vérifier le bon problème" },
            { id: "definition", label: "2. Définir un contact utile" },
            { id: "periode", label: "3. Classer une période complète" },
            { id: "recherche-zone", label: "4. Vérifier recherche et zone" },
            {
              id: "promesse-traitement",
              label: "5. Vérifier le message et le traitement",
            },
            { id: "exemple", label: "6. Exemple fictif recalculable" },
            { id: "corriger", label: "7. Choisir une seule correction" },
            {
              id: "remontee-google",
              label: "8. Renvoyer les bons statuts à Google",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="bon-probleme">
          1. Vérifiez d’abord que des contacts arrivent réellement
        </h2>

        <p>
          Ce guide commence après la réception. Un formulaire apparaît dans
          votre boîte mail, un appel est bien arrivé ou une demande existe dans
          votre logiciel commercial, mais son contenu ne correspond pas à ce que
          vous pouvez vendre. Si Google affiche des conversions sans qu’aucun
          contact ne soit retrouvé, le problème est différent : il faut d’abord
          tester le suivi et la transmission.
        </p>

        <p>
          Vous êtes au bon endroit si vous pouvez montrer au moins un cas
          concret :
        </p>

        <ul>
          <li>
            « cette personne habite ou intervient dans une zone que nous ne
            servons pas » ;
          </li>
          <li>
            « ce particulier demande une prestation réservée aux entreprises » ;
          </li>
          <li>
            « cette demande concerne une réparation alors que nous vendons
            uniquement l’installation » ;
          </li>
          <li>
            « ce dossier est un test, un doublon ou un spam et ne doit pas
            compter comme une vraie demande ».
          </li>
        </ul>

        <p>
          À l’inverse, « la personne n’a pas signé » ne signifie pas forcément
          qu’elle était hors cible. Le prix, le délai, la proposition, la
          relance ou la capacité disponible peuvent expliquer l’absence de
          vente. Le guide sur une{" "}
          <Link href="/guides/pourquoi-google-ads-ne-convertit-pas">
            campagne Google Ads qui ne convertit pas
          </Link>{" "}
          couvre ce parcours plus large.
        </p>

        <h2 id="definition">
          2. Écrivez ce qu’est un contact utile pour votre entreprise
        </h2>

        <p>
          Un contact qualifié n’est pas « quelqu’un qui semble motivé ». C’est
          une personne ou une entreprise que vous pouvez réellement servir et
          pour laquelle une prochaine étape commerciale a du sens. La définition
          appartient à votre activité ; Google ne peut pas l’inventer à votre
          place.
        </p>

        <p>Écrivez les critères en répondant à ces questions simples :</p>

        <ul>
          <li>
            quel type de client acceptez-vous : particulier, entreprise ou les
            deux ?
          </li>
          <li>
            quel besoin précis traitez-vous et quels services ne vendez-vous pas
            ?
          </li>
          <li>
            dans quelle zone pouvez-vous réellement intervenir ou livrer ?
          </li>
          <li>
            quelles conditions rendent le projet impossible, et pourquoi ?
          </li>
          <li>quelle information peut encore manquer avant de décider ?</li>
          <li>
            quelle prochaine étape prouve que le dossier avance : rappel,
            rendez-vous ou devis ?
          </li>
        </ul>

        <p>
          Google distingue lui-même le{" "}
          <a
            href="https://support.google.com/google-ads/answer/11459091?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            prospect qualifié et le prospect converti
          </a>
          , ce dernier ayant franchi une étape ultérieure définie par
          l’annonceur. Ces catégories ne prouvent ni une vente ni une marge :
          elles deviennent utiles uniquement lorsque votre définition reste
          stable et que l’équipe classe les dossiers de la même manière.
        </p>

        <InfoBox
          variant="amber"
          title="Injoignable ne veut pas dire hors cible"
        >
          Tant que le besoin n’a pas été vérifié, gardez le dossier « en attente
          ». Le classer trop vite parmi les mauvais contacts transforme un
          problème de réception ou de rappel en problème publicitaire et fausse
          la base de calcul de vos résultats.
        </InfoBox>

        <h2 id="periode">
          3. Prenez toute une période, pas seulement les trois pires appels
        </h2>

        <p>
          Choisissez une période terminée pendant laquelle l’offre, la zone et
          les principaux réglages sont restés comparables. Fixez aussi une date
          d’observation : un dossier reçu le dernier jour peut encore être en
          attente deux semaines plus tard. Cette séparation évite de traiter un
          dossier non mûr comme un refus définitif.
        </p>

        <GuideTable
          caption="Les statuts à séparer avant de juger la qualité"
          headers={["Statut", "Ce qu’il signifie", "Ce qu’il ne prouve pas"]}
          rows={[
            [
              "Demande brute",
              "Un formulaire, appel ou événement apparaît dans les outils",
              "Qu’une vraie personne a été reçue une seule fois",
            ],
            [
              "Contact unique",
              "Une vraie demande reste après retrait des tests et doublons",
              "Qu’elle correspond à l’offre",
            ],
            [
              "En attente",
              "L’équipe ne dispose pas encore des informations nécessaires",
              "Que le contact est mauvais ou bon",
            ],
            [
              "Non qualifié",
              "Un critère indispensable échoue avec un motif documenté",
              "Que Google est automatiquement la cause",
            ],
            [
              "Qualifié",
              "Le dossier peut passer à l’étape commerciale suivante",
              "Qu’un devis, une vente ou une marge suivra",
            ],
          ]}
        />

        <p>
          Dans votre registre, utilisez un identifiant interne plutôt que de
          recopier inutilement des noms, e-mails ou numéros. Notez la date, la
          campagne, les mots recherchés lorsqu’ils sont disponibles, la zone, le
          statut et un seul motif principal. Les autres éléments peuvent rester
          en commentaire.
        </p>

        <p>
          La CNIL rappelle le principe de{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            minimisation des données collectées
          </a>
          : elles doivent être adéquates, pertinentes et limitées à ce qui est
          nécessaire. Ce guide ne remplace pas l’analyse juridique de votre
          formulaire ou de vos outils ; il invite précisément à ne pas collecter
          une information qui ne change aucune décision.
        </p>

        <h2 id="recherche-zone">
          4. Pour chaque refus, regardez d’abord la recherche et la zone
        </h2>

        <p>
          Un mot-clé est ajouté dans la campagne. Le terme de recherche
          correspond aux mots utilisés par la personne. Google explique cette
          différence dans son{" "}
          <a
            href="https://support.google.com/google-ads/answer/2472708?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport sur les termes de recherche
          </a>
          . Le rapport aide à comprendre une partie des déclenchements, mais il
          n’est pas exhaustif : certaines requêtes de faible activité sont
          omises pour respecter les normes de confidentialité.
        </p>

        <p>
          Reliez une recherche visible au dossier qu’elle a produit lorsque
          c’est possible. Un terme clairement consacré à un service absent peut
          être exclu. Une formulation ambiguë mérite une vérification de
          l’annonce et de la page avant d’être bloquée. La{" "}
          <a
            href="https://support.google.com/google-ads/answer/7478529?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les options de correspondance
          </a>{" "}
          précise aussi que la correspondance exacte peut couvrir des variantes
          de même sens ou de même intention ; elle n’est donc pas une copie
          littérale des mots choisis.
        </p>

        <p>
          Pour la zone, regardez le réglage actif et le lieu déclaré par le
          contact. L’option géographique par défaut peut inclure les personnes
          présentes, régulièrement présentes ou qui montrent un intérêt pour la
          zone ; l’option fondée sur la présence est plus restrictive. Google
          précise toutefois que son{" "}
          <a
            href="https://support.google.com/google-ads/answer/1722038?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            ciblage géographique repose sur plusieurs signaux et n’est pas
            précis à 100 %
          </a>
          . Resserrer ce réglage peut réduire la diffusion sans faire
          disparaître absolument toute demande extérieure.
        </p>

        <h2 id="promesse-traitement">
          5. Vérifiez ensuite ce que la personne a compris et ce que votre
          équipe a fait
        </h2>

        <p>
          Lisez la recherche, l’annonce et le premier écran de la page comme une
          seule conversation. Le type de client, le service, la zone et les
          limites importantes doivent raconter la même chose. Les règles Google
          demandent notamment que la promotion reste cohérente avec sa
          destination et que les informations déterminantes soient accessibles,
          dans les pages sur les{" "}
          <a
            href="https://support.google.com/adspolicy/answer/15937063?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            offres indisponibles
          </a>{" "}
          et les{" "}
          <a
            href="https://support.google.com/adspolicy/answer/6020955?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            déclarations trompeuses
          </a>
          . Respecter ces règles ne garantit pas la qualification ; cela aide à
          repérer une promesse plus large que l’offre réelle.
        </p>

        <p>
          Le formulaire doit ensuite demander uniquement ce qui sert à orienter
          ou traiter le dossier. « Êtes-vous une entreprise ? » peut être utile
          pour une offre strictement professionnelle. « Décrivez votre besoin »
          peut rester trop vague si deux services totalement différents suivent
          deux traitements différents. Une question n’est justifiée que si sa
          réponse change la suite.
        </p>

        <p>
          Enfin, vérifiez la réception. Un clic sur un numéro peut mesurer le
          clic plutôt que l’appel lui-même, et une conversion d’appel peut être
          définie à partir d’une durée minimale selon la configuration. La{" "}
          <a
            href="https://support.google.com/google-ads/answer/6100664?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Google sur le suivi des appels
          </a>{" "}
          ne transforme donc pas une durée en preuve de besoin. Rapprochez appel
          compté, appel reçu, rappel réalisé, motif et résultat commercial.
        </p>

        <GuideTable
          caption="Du symptôme à la première preuve"
          headers={[
            "Ce que vous observez",
            "À vérifier d’abord",
            "Premier test possible",
          ]}
          rows={[
            [
              "Beaucoup de particuliers pour une offre réservée aux entreprises",
              "Recherche, annonce, premier écran et question sur le type de client",
              "Écrire clairement « pour les entreprises » à l’endroit où la promesse commence",
            ],
            [
              "Demandes hors zone",
              "Option géographique, zones correspondantes et zone déclarée",
              "Comparer l’option fondée sur la présence sans modifier le reste",
            ],
            [
              "Service non vendu",
              "Terme recherché, mot-clé, annonce et page",
              "Exclure un hors sujet précis ou clarifier le service réellement proposé",
            ],
            [
              "Beaucoup d’injoignables",
              "Réception, horaires, tentatives et statut du dossier",
              "Conserver « en attente » et tester le traitement avant le ciblage",
            ],
            [
              "Doublons ou tests",
              "Identifiant, origine et livraison dans le logiciel commercial",
              "Dédupliquer avant de recalculer la qualité",
            ],
          ]}
        />

        <h2 id="exemple">
          6. Exemple illustratif fictif : 30 demandes et 28 contacts uniques
        </h2>

        <p>
          L’exemple suivant est entièrement fictif. Il ne décrit ni un client,
          ni une performance moyenne, ni un résultat promis. Une entreprise
          entretient des machines pour des ateliers professionnels dans une zone
          définie. Sa campagne diffusée dans les résultats de recherche, sa page
          et son offre restent inchangées du 1er au 30 juin ; les dossiers sont
          observés au 15 juillet.
        </p>

        <GuideTable
          caption="Période fictive à remplacer par vos propres dossiers"
          headers={["Étape", "Nombre fictif", "Lecture correcte"]}
          rows={[
            ["Demandes brutes", "30", "Avant retrait des tests et doublons"],
            ["Tests ou doublons", "2", "À retirer avant de juger la qualité"],
            ["Contacts uniques", "28", "Vraies demandes effectivement reçues"],
            ["Dossiers en attente", "4", "Issue encore inconnue au 15 juillet"],
            [
              "Dossiers classés",
              "24",
              "7 hors zone, 5 particuliers, 4 mauvais services, 2 incompatibles et 6 qualifiés",
            ],
            [
              "Contacts qualifiés",
              "6",
              "Dont 4 propositions et 1 vente connue à la date d’observation",
            ],
          ]}
        />

        <p>
          Les contrôles sont simples : <strong>30 − 2 = 28</strong>, puis{" "}
          <strong>28 − 4 = 24</strong>, et enfin{" "}
          <strong>7 + 5 + 4 + 2 + 6 = 24</strong>. Avec 2 800 € de dépenses
          média fictives, le coût média par contact unique vaut{" "}
          <strong>2 800 € ÷ 28 = 100 €</strong>. Le coût média provisoire par
          contact qualifié vaut <strong>2 800 € ÷ 6 = 466,67 €</strong>, arrondi
          au centime.
        </p>

        <p>
          Six contacts qualifiés sur les 24 dossiers déjà classés représentent{" "}
          <strong>25 %</strong>. Rapportés aux 28 contacts uniques, dossiers en
          attente inclus, ils représentent <strong>21,43 %</strong>, arrondi au
          centième. Les deux chiffres sont exacts mais ne répondent pas à la
          même question : nommez toujours la base de calcul.
        </p>

        <p>
          Dans ce cas fictif, « hors zone » est le premier motif individuel.
          L’entreprise constate que la campagne utilise « présence ou intérêt ».
          Elle consulte aussi le{" "}
          <a
            href="https://support.google.com/google-ads/answer/7492954?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            zones géographiques correspondantes
          </a>
          , puis teste uniquement l’option fondée sur la présence. Elle ne
          change ni l’annonce, ni la page, ni le formulaire au même moment.
          Aucun résultat ultérieur n’est inventé : la diffusion peut aussi
          diminuer.
        </p>

        <h2 id="corriger">
          7. Corrigez une cause, puis observez une période comparable
        </h2>

        <p>
          Si vous changez simultanément la zone, les mots-clés, l’annonce, la
          page, le formulaire et la manière de rappeler, vous ne saurez pas ce
          qui a produit la différence. Choisissez la cause la mieux documentée,
          notez le changement et conservez une période de comparaison compatible
          avec votre volume et votre délai commercial.
        </p>

        <ul>
          <li>
            <strong>Maintenir</strong> si les dossiers sont encore en attente ou
            si aucun motif dominant n’est prouvé.
          </li>
          <li>
            <strong>Corriger les recherches</strong> lorsqu’un hors sujet précis
            revient et que l’offre n’y répond jamais.
          </li>
          <li>
            <strong>Clarifier l’annonce ou la page</strong> lorsque le message
            fait comprendre un service, un client ou une zone différents.
          </li>
          <li>
            <strong>Corriger la réception commerciale</strong> lorsque des
            appels ou formulaires utiles sont perdus, dupliqués ou mal classés.
          </li>
          <li>
            <strong>Réduire ou suspendre</strong> si l’entreprise ne peut pas
            servir l’offre annoncée, si la mesure reste inutilisable ou si le
            risque financier n’est plus acceptable.
          </li>
          <li>
            <strong>Revoir le budget seulement après</strong> avoir isolé la
            qualité, le coût complet et la marge disponible.
          </li>
        </ul>

        <GuideInlineCTA
          title="Faire diagnostiquer les contacts reçus avant de modifier toute la campagne"
          description="Indiquez l’offre vendue, le type de clients, la zone, la période analysée, le nombre de contacts uniques et les principaux motifs de refus. Une personne qui gère des campagnes et vérifie les formulaires, les appels et les ventes examine directement votre demande et cherche à répondre le jour ouvré qui suit, sans garantir ce délai. Cette première orientation est gratuite et sans engagement ; elle peut recommander d’attendre, de corriger le traitement ou de réduire la campagne. Ne transmettez ni mot de passe ni fichier contenant inutilement des données personnelles."
          tags={[
            "Une cause à la fois",
            "Dossiers en attente conservés",
            "Aucune promesse de volume",
          ]}
          ctaLabel="Décrire mes contacts Google Ads"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="remontee-google">
          8. Ne renvoyez les contacts qualifiés à Google qu’après avoir
          stabilisé la définition
        </h2>

        <p>
          Lorsque votre équipe sait distinguer contact unique, en attente,
          qualifié et vendu, il peut devenir utile de rapprocher ces étapes de
          la campagne. Google recommande de cartographier le parcours de la
          première interaction jusqu’à la vente dans ses{" "}
          <a
            href="https://support.google.com/google-ads/answer/13489421?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            bonnes pratiques pour les prospects de qualité
          </a>
          . Cette recommandation vient du fournisseur de la plateforme ; elle ne
          remplace ni vos critères commerciaux ni votre analyse de rentabilité.
        </p>

        <p>
          Sur certains formulaires directement intégrés à Google, il est
          possible de définir des{" "}
          <a
            href="https://support.google.com/google-ads/answer/17050941?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            réponses qualifiantes
          </a>
          . Cette règle trie une réponse selon les critères que vous avez
          choisis ; elle ne prouve pas qu’un échange, un devis ou une vente a
          réellement eu lieu.
        </p>

        <p>
          N’automatisez pas une définition encore discutée. Si deux personnes
          classent le même dossier différemment, si les doublons ne sont pas
          retirés ou si une vente n’est jamais enregistrée, renvoyer ces statuts
          donnera à Google une information techniquement transmise mais
          commercialement incohérente. Le guide sur le{" "}
          <Link href="/guides/suivi-conversions-google-ads">
            suivi des conversions Google Ads jusqu’aux ventes
          </Link>{" "}
          détaille ce travail de mesure.
        </p>

        <InfoBox variant="emerald" title="Ce que vous pouvez faire ce lundi">
          Choisissez la dernière période comparable, retirez uniquement les
          tests et doublons, gardez les dossiers non terminés en attente, puis
          comptez un motif principal pour chaque refus. Si une cause domine et
          possède une preuve, testez une seule correction. Sinon, ne modifiez
          pas encore la campagne : complétez d’abord les informations
          manquantes.
        </InfoBox>

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Les liens ont été consultés le 22 juillet 2026. Les pages Google
          décrivent le fonctionnement et les recommandations de son propre
          produit ; elles ne constituent ni une garantie de qualité, ni une
          estimation de rentabilité. Le registre, les décisions et l’exemple
          chiffré sont une méthode éditoriale Hagnéré Code à adapter.
        </p>

        <ul>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/2472708?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Rapport sur les termes de recherche
            </a>
            , pour la différence entre recherche et mot-clé, les exclusions et
            la limite d’exhaustivité.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/1722038?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Options avancées de ciblage géographique
            </a>
            , pour « présence ou intérêt », l’option fondée sur la présence et
            les limites de précision.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/11459091?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Prospects qualifiés et convertis
            </a>
            , pour les définitions produit à adapter aux critères de
            l’annonceur.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/6100664?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Suivi des conversions par appel
            </a>
            , pour distinguer clic, appel compté et résultat commercial.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Minimiser les données collectées
            </a>
            , pour le principe de données adéquates, pertinentes et limitées.
          </li>
        </ul>

        <p>
          Aucun pourcentage de cet article n’est une moyenne de marché. Aucun
          nombre minimal de contacts, délai de rappel ou réglage universel n’est
          recommandé. Une modification peut réduire la diffusion ou déplacer la
          composition des demandes sans améliorer les ventes. Comparez toujours
          la même définition, le même ensemble de contacts et les coûts
          réellement inclus.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
