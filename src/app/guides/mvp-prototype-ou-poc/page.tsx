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

const guide = getGuide("mvp-prototype-ou-poc");

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
        alt: "Prototype, POC, pilote ou MVP : choisir le test utile",
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
      name: "Prototype, POC ou MVP",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Faut-il obligatoirement faire un POC avant un prototype ou un MVP ?",
    answer:
      "Non. Ces formats ne forment pas un parcours obligatoire. Choisissez celui qui permet de répondre à la question qui bloque votre décision, et ne construisez rien si une conversation, un essai manuel ou un outil existant suffit.",
  },
  {
    question: "Un prototype peut-il être développé avec du vrai code ?",
    answer:
      "Oui. Un prototype peut aller du dessin au code réaliste. Le devis doit toutefois préciser si ce code sert seulement à l’essai, s’il pourra être repris sous conditions ou s’il est déjà construit selon les exigences du futur produit.",
  },
  {
    question: "Peut-on réunir un prototype et un POC dans la même mission ?",
    answer:
      "Oui, si la mission répond à deux questions distinctes. Par exemple, des écrans cliquables peuvent vérifier la compréhension du parcours pendant qu’un essai technique isolé vérifie une connexion difficile. Chaque résultat doit conduire à sa propre décision.",
  },
  {
    question: "Un POC réussi prouve-t-il que des clients achèteront ?",
    answer:
      "Non. Un POC réussi montre seulement que la difficulté testée fonctionne dans les conditions écrites. Il ne démontre pas à lui seul l’utilité pour le client, sa volonté de payer, la sécurité du produit ou sa capacité à fonctionner à plus grande échelle.",
  },
  {
    question: "Que doit-on récupérer à la fin d’un prototype ou d’un POC ?",
    answer:
      "La liste doit être écrite avant la mission : fichiers, code éventuel, accès, données de test, méthode, résultats, limites et documentation. Le contrat doit distinguer ce qui vous est remis et les droits d’usage ou de cession prévus.",
  },
  {
    question: "Un pilote et un MVP peuvent-ils être le même logiciel ?",
    answer:
      "Oui. Le MVP décrit ce que vous construisez pour apprendre ; le pilote décrit le cadre limité dans lequel vous le déployez. Écrivez séparément la version disponible, les utilisateurs admis, l’aide fournie, la durée et la décision attendue.",
  },
];

const orderFields = [
  {
    title: "La décision aujourd’hui bloquée",
    example:
      "Exemple : décider si l’entreprise finance une première version utilisable.",
  },
  {
    title: "La seule question à laquelle le test doit répondre",
    example:
      "Une phrase interrogative, assez précise pour recevoir une réponse nette.",
  },
  {
    title: "Les utilisateurs à faire participer",
    example:
      "Les salariés ou futurs utilisateurs qui accomplissent la tâche concernée.",
  },
  {
    title: "Ce qui sera construit et ce qui restera simulé",
    example:
      "Écrans, connexion, traitement manuel ou logiciel réellement utilisable.",
  },
  {
    title: "Les cas et les données utilisés",
    example:
      "Cas normal, cas difficile et niveau de réalité des informations manipulées.",
  },
  {
    title: "Le résultat que vous devez pouvoir constater",
    example:
      "Une tâche terminée, une erreur mesurée ou une difficulté déclarée impossible.",
  },
  {
    title: "La décision prévue selon le résultat",
    example:
      "Les critères de décision sont écrits avant l’essai pour éviter de réinterpréter le résultat ensuite.",
  },
  {
    title: "Ce que l’entreprise récupère",
    example:
      "Fichiers, accès, notes, résultats, documentation et droits écrits au contrat.",
  },
  {
    title: "Le budget et le délai maximum du test",
    example:
      "Une limite de temps et de budget propre au test, sans prétendre valoir pour tous les projets.",
  },
  {
    title: "La date à laquelle vous déciderez de la suite",
    example:
      "Poursuivre, resserrer, acheter un outil existant, reporter ou arrêter.",
  },
];

const endings = [
  {
    title: "Poursuivre",
    text: "La réponse attendue est obtenue et l’inconnue suivante justifie une nouvelle dépense.",
  },
  {
    title: "Corriger puis retester",
    text: "Le test a révélé un problème précis que l’on peut isoler sans élargir la mission.",
  },
  {
    title: "Acheter autrement",
    text: "Un logiciel existant ou une procédure manuelle répond mieux au besoin observé.",
  },
  {
    title: "Reporter",
    text: "La bonne personne, les données ou la décision à prendre ne sont pas encore disponibles.",
  },
  {
    title: "Arrêter",
    text: "Le résultat montre que la suite ne mérite pas le budget prévu. Le test a alors rempli son rôle.",
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
          { label: "Prototype, POC ou MVP" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous devez montrer une idée, vérifier une difficulté technique ou faire essayer un vrai service ? Choisissez le test qui répond au doute actuel, sans financer trop tôt un produit complet."
        heroAction={{
          href: "#questions-avant-devis",
          label: "Copier les 10 questions",
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
            title: "1 question qui bloque",
            description: "",
            color: "violet",
          },
          {
            number: "04",
            title: "4 formats possibles",
            description: "",
            color: "blue",
          },
          {
            number: "10",
            title: "10 lignes à écrire",
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
            href: "/guides/valider-idee-saas-avant-developper",
            label: "Vérifier l’idée avant de construire",
          },
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Choisir ce qui doit fonctionner dans le MVP",
          },
          {
            href: "/guides/choisir-prestataire-application-metier",
            label: "Comparer les prestataires sur les mêmes demandes",
          },
          {
            href: "/guides/cahier-des-charges-saas",
            label: "Préparer le cahier des charges du produit",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Comprendre le budget complet d’un SaaS",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Développement de SaaS et d’applications métier",
          },
        ]}
        faqTitle="Prototype, POC, pilote et MVP : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Vous avez une idée de logiciel, mais vous ne savez pas s’il faut
            d’abord montrer des écrans, vérifier une difficulté technique ou
            développer une première version utilisable ?
          </strong>{" "}
          C’est ce qui distingue un prototype, un POC, un pilote et un MVP. Le
          prototype sert à faire essayer le parcours. Le POC, ou essai de
          faisabilité, vérifie un obstacle précis. Le pilote confronte la
          solution à une situation réelle et limitée. Le MVP est le test le plus
          léger qui permet d’apprendre auprès de vrais utilisateurs. Le bon
          choix n’est pas le plus ambitieux : c’est celui qui vous dira s’il
          faut poursuivre, corriger ou arrêter avant d’avoir trop dépensé. Ce
          guide vous aide à choisir et à écrire ce que le devis doit réellement
          prévoir.
        </p>

        <p>
          Ces définitions servent de repères dans ce guide ; elles ne forment
          pas une norme universelle. Les prestataires et les secteurs utilisent
          parfois les mêmes mots pour désigner des missions différentes. Le
          contenu écrit du devis compte donc davantage que son intitulé.
        </p>

        <p>
          Pilote et MVP peuvent se recouvrir : « pilote » décrit les conditions
          limitées du déploiement ; « MVP » décrit la version la plus légère qui
          permet d’apprendre. Une même première version peut donc être un MVP
          testé sous forme de pilote.
        </p>

        <GuideTable
          caption="Choisir le format à partir de la question qui bloque"
          headers={[
            "Votre question",
            "Format utile",
            "Ce qu’il ne démontre pas",
          ]}
          rows={[
            [
              "Les personnes comprennent-elles le parcours ?",
              "Prototype",
              "Que le produit pourra fonctionner en production ou que des clients l’achèteront.",
            ],
            [
              "La difficulté technique peut-elle être surmontée ?",
              "POC ciblé",
              "Que le service sera utilisé, rentable ou prêt pour la production.",
            ],
            [
              "Le travail fonctionne-t-il dans la situation réelle ?",
              "Pilote encadré",
              "Que le résultat restera identique à plus grande échelle.",
            ],
            [
              "De vrais utilisateurs doivent-ils essayer une première version ?",
              "MVP, parfois testé comme pilote",
              "Que le marché est acquis ou que toutes les fonctions sont prêtes.",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Choisissez le test le plus simple qui puisse vraiment vous renseigner"
        >
          Un écran cliquable serait insuffisant si seule une vraie connexion
          technique peut répondre. À l’inverse, un produit connecté à vos
          données et ouvert à des utilisateurs serait excessif si vous cherchez
          seulement à vérifier si un bouton est compris. Choisissez le test le
          plus simple qui donne une réponse assez fiable pour investir, corriger
          ou renoncer.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "question-qui-bloque",
              label: "1. Écrire la question qui peut changer la décision",
            },
            {
              id: "prototype",
              label: "2. Choisir un prototype pour voir et faire essayer",
            },
            {
              id: "poc",
              label: "3. Choisir un POC pour une difficulté précise",
            },
            {
              id: "pilote",
              label: "4. Tester la solution dans le travail quotidien",
            },
            {
              id: "mvp",
              label: "5. Choisir un MVP pour apprendre auprès d’utilisateurs",
            },
            {
              id: "pas-les-quatre",
              label: "6. Ne pas acheter les quatre par réflexe",
            },
            {
              id: "questions-avant-devis",
              label: "7. Copier les 10 questions avant le devis",
            },
            {
              id: "exemple-fictif",
              label: "8. Appliquer le choix à un même logiciel fictif",
            },
            {
              id: "fin-du-test",
              label: "9. Prendre une décision explicite",
            },
            {
              id: "aide",
              label: "10. Savoir quand demander de l’aide",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="question-qui-bloque">
          1. Commencez par la question qui peut changer votre décision
        </h2>

        <p>
          Une mission utile commence par une phrase que l’on pourra trancher. «
          Montrer le projet » n’est pas une question. « Un responsable peut-il
          comprendre comment valider un bon de commande sans explication ? » en
          est une. « Notre logiciel peut-il lire le montant et le fournisseur
          dans les documents les plus difficiles ? » en est une autre.
        </p>

        <p>
          Demandez ensuite ce que vous ferez si la réponse est mauvaise. Si rien
          ne change — ni la conception, ni le choix technique, ni la dépense
          suivante — le test ne vous aidera pas à décider et ne mérite
          probablement pas son budget. Le{" "}
          <a
            href="https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works"
            target="_blank"
            rel="noopener noreferrer"
          >
            manuel GOV.UK consacré à la phase d’exploration
          </a>{" "}
          recommande de tester les suppositions les plus risquées et accepte
          qu’un essai conduise à ne pas construire. Il s’agit d’une méthode de
          services publics britanniques, pas d’une règle obligatoire pour les
          entreprises françaises, mais la question est saine : qu’est-ce que ce
          résultat vous autorisera réellement à décider ?
        </p>

        <p>
          Si la réponse peut venir d’un entretien, d’un fichier manuel, d’une
          démonstration d’un logiciel existant ou d’un échantillon déjà
          disponible, commencez ainsi. Ne faites développer quelque chose que si
          ces méthodes plus simples ne suffisent pas à vous renseigner.
        </p>

        <h2 id="prototype">
          2. Choisissez un prototype pour voir et faire essayer un parcours
        </h2>

        <p>
          Un prototype représente la solution sans promettre qu’elle peut déjà
          fonctionner en production. Il peut s’agir d’un dessin, d’écrans
          cliquables ou de code réaliste. Le{" "}
          <a
            href="https://www.gov.uk/service-manual/design/making-prototypes"
            target="_blank"
            rel="noopener noreferrer"
          >
            manuel GOV.UK sur les prototypes
          </a>{" "}
          conseille d’adapter le niveau de réalisme à ce que l’équipe cherche à
          apprendre, et rappelle qu’un code de prototype peut ne pas respecter
          les exigences de sécurité, de qualité ou de performance de la
          production.
        </p>

        <p>
          Prenez ce format quand le doute porte sur l’enchaînement des écrans,
          les mots employés, une tâche difficile à comprendre ou la manière dont
          une personne cherche une information. Faites essayer le parcours aux
          personnes qui accomplissent réellement cette tâche. Observez ce
          qu’elles font ; ne vous contentez pas de leur demander si la maquette
          leur plaît.
        </p>

        <InfoBox
          variant="amber"
          title="Écrivez le sort du code avant de commencer"
        >
          Un prototype codé n’est ni forcément jetable, ni automatiquement le
          début du produit final. Le devis doit dire ce qui est simulé, ce qui a
          été construit pour durer, quelles vérifications manquent et dans
          quelles conditions le code pourrait être repris.
        </InfoBox>

        <h2 id="poc">
          3. Choisissez un POC si une difficulté précise peut bloquer le projet
        </h2>

        <p>
          POC signifie <i>proof of concept</i>, que l’on peut traduire ici par
          essai de faisabilité. Il isole un point technique ou scientifique :
          une connexion, une lecture automatique, un appareil, un volume de
          données ou une règle de calcul. La{" "}
          <a
            href="https://euraxess.ec.europa.eu/career-development/researchers/manual-major-steps-for-research-valorisation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commission européenne, dans son manuel EURAXESS de valorisation de
            la recherche
          </a>
          , présente le POC comme une démonstration de possibilité, pas comme un
          produit livrable. Ce contexte de recherche ne définit pas tous les
          contrats logiciels, mais il aide à conserver la bonne limite.
        </p>

        <p>
          Le test doit nommer le cas difficile, l’entrée utilisée, le résultat
          mesuré et ce qui restera volontairement absent. Un POC consacré à la
          lecture de documents ne doit pas financer en silence les comptes
          utilisateurs, la facturation, le support ou l’interface complète.
          Inversement, son succès ne dit rien sur ces fonctions.
        </p>

        <p>
          Décidez aussi avant l’essai comment traiter un résultat intermédiaire.
          Si certaines erreurs sont tolérables et d’autres bloquantes, un seul
          taux global masque la décision métier. Un montant mal lu n’a pas
          forcément le même effet qu’une référence secondaire manquante.
        </p>

        <h2 id="pilote">
          4. Choisissez un pilote si vous devez observer le travail réel
        </h2>

        <p>
          Un pilote fait utiliser une solution limitée dans une situation réelle
          et contrôlée. Il devient utile quand ni une maquette ni un essai isolé
          ne montrent comment les salariés travaillent, de quelle aide ils ont
          besoin, ce qui se passe en cas d’erreur ou comment la solution
          cohabite avec l’organisation actuelle. Ce n’est pas une étape
          obligatoire entre le POC et le MVP.
        </p>

        <p>
          Le{" "}
          <a
            href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/987136/Testing_and_piloting_services_guidance_note_May_2021.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide du Cabinet Office britannique sur les tests et pilotes
          </a>{" "}
          distingue la faisabilité ciblée des essais en conditions réelles et
          rappelle qu’un pilote limité ne suffit pas, à lui seul, à prévoir ce
          qui se passera partout. Ce guide concerne des services et politiques
          publics ; nous en retenons seulement cette prudence, pas une méthode
          contractuelle universelle.
        </p>

        <p>
          Nommez les personnes participantes, la tâche réelle, l’aide permise,
          l’environnement utilisé, la manière de revenir au fonctionnement
          précédent et la personne qui peut arrêter l’essai. Si des données
          personnelles sont concernées, le mot « pilote » ne réduit aucune
          obligation. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL encadre les données utilisées pendant le développement et les
            tests
          </a>
          . Pour le développement et les premiers tests, elle demande un
          environnement séparé et des données fictives ou anonymisées. Si des
          données personnelles réelles sont indispensables, elle ne les envisage
          qu’en préproduction, sécurisée comme la production et après les tests
          unitaires, d’intégration et fonctionnels. Un pilote réel doit en outre
          respecter le cadre applicable au traitement ; le nom « pilote » ne
          crée aucune dérogation.
        </p>

        <h2 id="mvp">
          5. Choisissez un MVP pour apprendre auprès de vrais utilisateurs
        </h2>

        <p>
          MVP signifie <i>minimum viable product</i>. Au sens d’
          <a
            href="https://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eric Ries
          </a>
          , il n’est défini ni par un nombre de fonctions ni par un niveau de
          finition : c’est le test le plus léger qui permet d’obtenir un
          apprentissage validé auprès des clients. Selon la question, il peut
          encore comporter des étapes manuelles ou prendre la forme d’une
          première version utilisable. Pour un logiciel métier, ne financez
          cette version exploitable que si un prototype, un POC ou un test
          manuel ne peut plus répondre.
        </p>

        <p>
          Si le test exige une version réellement exploitable, de vrais
          utilisateurs doivent pouvoir accomplir la tâche et leurs usages
          doivent guider la suite. Ce passage ajoute des responsabilités :
          accès, données, sauvegarde, aide, incidents et capacité à exploiter le
          service. Il ne suffit donc pas de rendre le prototype plus joli ou de
          connecter le POC à une interface.
        </p>

        <p>
          Ce guide ne décide pas des fonctions à inclure. Lorsque votre réponse
          exige une version exploitable, utilisez ensuite la{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            checklist de ce qui doit fonctionner dans un MVP SaaS
          </Link>
          . Si le problème, l’acheteur ou la volonté de payer restent
          hypothétiques, revenez plutôt à la{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            validation de l’idée avant tout développement
          </Link>
          .
        </p>

        <h2 id="pas-les-quatre">
          6. Vous n’avez pas à acheter les quatre formats
        </h2>

        <p>
          Il n’existe pas de passage obligé prototype, POC, pilote puis MVP. Un
          prototype peut suffire avant d’abandonner une idée. Un POC peut être
          inutile si la technologie est déjà connue. Un pilote peut précéder un
          achat de logiciel existant. Un MVP peut commencer directement lorsque
          le besoin, l’utilisateur et les responsabilités sont déjà compris et
          que seule l’utilisation répétée permet d’apprendre.
        </p>

        <div className="not-prose my-7 grid gap-3 md:grid-cols-2">
          {[
            {
              title: "Une seule question, un seul format",
              text: "Le parcours est incompris : faites-le essayer sans financer le produit.",
            },
            {
              title: "Deux questions, deux essais dans la même mission",
              text: "Montrez les écrans et isolez la connexion difficile, avec une décision séparée pour chacun.",
            },
            {
              title: "Aucun objet à construire",
              text: "L’outil du marché couvre déjà le besoin ou personne n’est disponible pour utiliser le résultat.",
            },
            {
              title: "Un usage réel dès le départ",
              text: "Le besoin est connu et vous devez observer plusieurs utilisations avant de choisir les améliorations. Le MVP peut alors être déployé comme pilote.",
            },
          ].map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {option.title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {option.text}
              </p>
            </div>
          ))}
        </div>

        <h2 id="questions-avant-devis">
          7. Avant le devis, copiez cette fiche de 10 questions
        </h2>

        <p>
          Cette fiche vous permet de comparer deux propositions sur la même
          base. Elle précise la question à résoudre, ce qui sera testé, le
          résultat attendu et ce que votre entreprise récupérera à la fin. Une
          réponse précise montre aussi ce que le prestataire a compris et ce
          qu’il refuse honnêtement de promettre.
        </p>

        <ol className="not-prose my-7 space-y-3 p-0">
          {orderFields.map((field, index) => (
            <li
              key={field.title}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm font-black text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                {index + 1}
              </span>
              <div>
                <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                  {field.title}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {field.example}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <h3 id="fichiers-droits">
          Distinguez ce qui est remis et ce que le contrat permet
        </h3>

        <p>
          Recevoir un fichier, un dépôt de code ou un accès ne répond pas à lui
          seul à la question des droits. En droit français,{" "}
          <a
            href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            l’article L131-3 du Code de la propriété intellectuelle
          </a>{" "}
          prévoit, lorsqu’il y a cession, que les droits cédés soient mentionnés
          distinctement et que leur domaine d’exploitation soit délimité. Cette
          information générale ne remplace pas l’analyse de votre contrat.
          Écrivez séparément les fichiers et accès remis, la documentation, les
          composants tiers et les droits d’usage ou de cession prévus.
        </p>

        <InfoBox
          variant="emerald"
          title="Une mission peut être utile même si le code est jeté"
        >
          Les notes, la méthode, les données de test autorisées, les résultats,
          les limites et la décision finale doivent rester exploitables. Vous ne
          payez alors pas « pour rien » : vous payez pour éviter ou modifier la
          dépense suivante sur une base observable.
        </InfoBox>

        <h2 id="exemple-fictif">
          8. Un même logiciel fictif peut demander quatre expériences
          différentes
        </h2>

        <p>
          <strong>Exemple illustratif fictif :</strong> une PME imaginaire veut
          un logiciel qui lit des bons de commande et prépare une validation.
          Les documents, nombres et résultats ci-dessous sont inventés pour
          expliquer la méthode. Il ne s’agit ni d’un client, ni d’un devis, ni
          d’une performance moyenne.
        </p>

        <div className="not-prose my-7 space-y-4">
          {[
            {
              label: "Le parcours est-il compris ?",
              format: "Prototype",
              text: "Des écrans cliquables montrent comment déposer un document, corriger une valeur et envoyer la validation. Des responsables accomplissent la tâche ; aucune lecture automatique n’est nécessaire pour répondre.",
            },
            {
              label:
                "La lecture automatique est-elle assez fiable pour continuer ?",
              format: "POC",
              text: "5 champs × 100 documents = 500 valeurs. Le test fictif est considéré comme concluant à partir de 475 valeurs exactes, soit 95 %. Ce seuil est purement illustratif : les erreurs bloquantes restent examinées séparément.",
            },
            {
              label: "Le traitement s’insère-t-il dans la journée de travail ?",
              format: "Pilote",
              text: "Une équipe limitée essaie la solution dans un environnement contrôlé, avec une aide nommée et un retour possible à la procédure précédente. Le résultat porte sur ce contexte, pas sur toute l’entreprise.",
            },
            {
              label:
                "Que faut-il améliorer après plusieurs utilisations réelles ?",
              format: "MVP",
              text: "Les utilisateurs autorisés traitent plusieurs dossiers, retrouvent les résultats et demandent de l’aide. L’entreprise observe les usages, les erreurs et le travail manuel restant. Cette première version peut aussi être déployée dans le cadre limité d’un pilote.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  {item.format}
                </span>
                <p className="mb-0 font-semibold text-zinc-950 dark:text-white">
                  {item.label}
                </p>
              </div>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Les quatre objets peuvent donc concerner le même projet sans répondre
          à la même question. Aucun résultat ne permet d’affirmer que tous les
          autres sont acquis. Si la lecture automatique fonctionne mais que les
          responsables ne comprennent pas comment corriger une erreur, le POC a
          réussi et le service reste pourtant inutilisable.
        </p>

        <h2 id="fin-du-test">
          9. À la fin du test, prenez une décision explicite
        </h2>

        <p>
          Fixez la date de décision avant le début. Le jour venu, comparez le
          résultat à ce qui était écrit et choisissez une action principale :
          poursuivre, corriger puis retester, acheter autrement, reporter ou
          arrêter. N’ajoutez pas une nouvelle fonction pour éviter de conclure
          et ne changez pas le critère parce que la démonstration paraît
          convaincante.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2">
          {endings.map((ending) => (
            <div
              key={ending.title}
              className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {ending.title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {ending.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Écrivez ensuite la question encore ouverte. Si elle n’est pas assez
          importante pour modifier la prochaine dépense, arrêtez la série de
          tests. Une expérience n’a pas vocation à entretenir le projet ; elle
          doit rendre une décision plus honnête.
        </p>

        <h2 id="aide">
          10. Vous hésitez encore entre un prototype, un POC et un MVP ?
        </h2>

        <p>
          Hagnéré Code peut vous aider à transformer votre projet en une
          question testable, puis à choisir le format le plus simple pour y
          répondre. Le premier échange permet de déterminer ce qu’il faut
          construire, ce qui peut rester simulé et les informations nécessaires
          pour établir un devis sérieux. Si un logiciel existant ou un simple
          essai manuel suffit, nous vous le dirons également.
        </p>

        <p>
          Commencez autrement si un logiciel existant couvre déjà le besoin, si
          personne n’est disponible pour essayer, si vous cherchez une garantie
          de financement ou si l’enjeu demande un avis juridique, scientifique
          ou de sécurité spécialisé. Dans ces situations, remplir la fiche
          ci-dessus suffit souvent à voir que le développement doit attendre.
        </p>

        <GuideInlineCTA
          title="Choisir le prochain test utile"
          description="Nous reformulons avec vous la question qui bloque, le test le plus simple capable d’y répondre et ce qu’il faudra récupérer. L’échange peut aussi conclure qu’un outil existant ou un report est préférable."
          tags={[
            "Question écrite",
            "Solution simple possible",
            "Report possible",
          ]}
          ctaLabel="Choisir le prochain test utile"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Les mots prototype, POC, pilote et MVP ne possèdent pas ici une
          définition contractuelle universelle. Le guide utilise des définitions
          de travail pour aider à comparer des propositions. Il ne remplace ni
          une analyse juridique du contrat, ni une analyse de sécurité, ni une
          validation scientifique ou réglementaire propre à votre secteur.
        </p>

        <ul>
          <li>
            <a
              href="https://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eric Ries — What Is an MVP?
            </a>{" "}
            : définition par l’apprentissage validé, sans nombre de fonctions ni
            calendrier imposé.
          </li>
          <li>
            <a
              href="https://www.gov.uk/service-manual/design/making-prototypes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK Service Manual — Making prototypes
            </a>{" "}
            : choix du niveau de réalisme et limites du code de prototype.
          </li>
          <li>
            <a
              href="https://euraxess.ec.europa.eu/career-development/researchers/manual-major-steps-for-research-valorisation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Commission européenne / EURAXESS — Research Result Valorisation
            </a>{" "}
            : POC de faisabilité dans le contexte de la valorisation de la
            recherche.
          </li>
          <li>
            <a
              href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/987136/Testing_and_piloting_services_guidance_note_May_2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cabinet Office — Testing and Piloting Services
            </a>{" "}
            : distinction prudente entre essai ciblé et conditions réelles.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Encadrer les développements informatiques
            </a>{" "}
            : séparation des environnements et données de test.
          </li>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code de la propriété intellectuelle, article L131-3
            </a>{" "}
            : mentions nécessaires lorsqu’une cession de droits est prévue.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
