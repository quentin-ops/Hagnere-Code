import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("automatiser-saisie-donnees-entreprise");

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
        alt: "Automatiser une saisie sans cacher les erreurs",
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
      name: "Automatiser la saisie de données",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Faut-il mettre toutes les données dans un seul logiciel ?",
    answer:
      "Non. Choisissez plutôt, pour chaque information importante, l’endroit où elle doit être corrigée en premier. L’identité d’un client peut être tenue dans le logiciel commercial, le numéro de facture dans le logiciel comptable et le stock dans l’outil de gestion.",
  },
  {
    question: "Peut-on automatiser une saisie depuis un PDF ou un e-mail ?",
    answer:
      "Oui, mais commencez par un préremplissage que quelqu’un valide si les documents varient ou si une erreur a un effet important. La lecture automatique propose alors des champs ; elle ne transforme pas un document ambigu en information certaine.",
  },
  {
    question: "Que faire si les deux logiciels ne peuvent pas communiquer ?",
    answer:
      "Commencez par vérifier si une même fiche peut être consultée, si un export et un import contrôlés existent ou si un modèle de saisie suffit. Un robot qui reproduit des clics peut parfois dépanner, mais il mérite une surveillance renforcée car un changement d’écran peut l’arrêter.",
  },
  {
    question: "Qui corrige une information différente dans deux outils ?",
    answer:
      "La personne désignée pour le champ concerné corrige d’abord l’endroit de référence, puis vérifie les destinations utiles. Cette règle doit être écrite avant l’automatisation ; sinon, le système peut simplement propager la mauvaise version plus vite.",
  },
  {
    question: "Une automatisation supprime-t-elle les erreurs de saisie ?",
    answer:
      "Non. Elle peut supprimer certaines recopies manuelles, mais une mauvaise règle, un doublon ou un document mal interprété peut encore produire une erreur. Le gain vient d’une saisie évitée et d’un rejet visible, pas d’une promesse de perfection.",
  },
  {
    question: "Quand vaut-il mieux conserver une saisie manuelle ?",
    answer:
      "Conservez-la lorsque le cas est rare, les règles changent souvent, la source est très ambiguë ou la décision exige un jugement important. Si votre logiciel possède déjà la fonction nécessaire, réglez-la et testez-la avant d’étudier un autre projet.",
  },
];

const mapSections = [
  {
    number: "1",
    title: "Première saisie",
    questions: [
      "Quel événement fait entrer le dossier dans l’entreprise ?",
      "Qui saisit quels champs, dans quel outil ou document ?",
      "Quelle vérification est faite avant de continuer ?",
    ],
  },
  {
    number: "2",
    title: "Copies et utilisations",
    questions: [
      "Où l’information est-elle retapée, importée ou seulement consultée ?",
      "Pourquoi chaque copie existe-t-elle encore ?",
      "Quels champs changent de nom, de format ou de valeur ?",
    ],
  },
  {
    number: "3",
    title: "Endroit où corriger",
    questions: [
      "Où chaque champ doit-il être corrigé en premier ?",
      "Qui a le droit et la responsabilité de le corriger ?",
      "Comment la correction atteint-elle les destinations utiles ?",
    ],
  },
  {
    number: "4",
    title: "Contrôles et dossiers refusés",
    questions: [
      "Qu’est-ce qui bloque : champ vide, format, doublon ou autre motif ?",
      "Où voit-on le dossier arrêté et qui le reprend ?",
      "Comment vérifie-t-on qu’il n’est ni perdu ni créé deux fois ?",
    ],
  },
  {
    number: "5",
    title: "Décision",
    questions: [
      "Quelle copie peut disparaître ?",
      "Quelle transmission ou quel préremplissage faut-il essayer ?",
      "Quelle partie reste manuelle, et pourquoi ?",
    ],
  },
];

const answerOrder = [
  {
    title: "Supprimer la copie",
    text: "La destination n’utilise pas réellement l’information : retirez l’étape au lieu de la reproduire automatiquement.",
  },
  {
    title: "Montrer la même fiche",
    text: "La personne doit seulement consulter l’information : donnez-lui un accès adapté plutôt que de créer une nouvelle version.",
  },
  {
    title: "Utiliser un réglage, un export ou un import existant",
    text: "Le logiciel possède déjà un champ obligatoire, un modèle, un export ou un import qui couvre le besoin avec des refus contrôlables.",
  },
  {
    title: "Transmettre seulement les champs nécessaires",
    text: "Le volume ou la fréquence le justifie : envoyez les données utiles dans un seul sens et rendez chaque échec visible.",
  },
  {
    title: "Préremplir, puis faire valider",
    text: "La source est un PDF, un e-mail ou une image variable : proposez les champs, mais gardez une vérification humaine adaptée au risque.",
  },
  {
    title: "Conserver la saisie manuelle",
    text: "Le cas est rare, instable, très ambigu ou dépend d’un jugement important : le manuel peut rester le choix le plus simple et le plus sûr.",
  },
];

const testCases = [
  {
    title: "Dossier normal",
    test: "Tous les champs attendus sont présents.",
    expected: "Une seule fiche arrive dans la bonne destination.",
  },
  {
    title: "Dossier incomplet",
    test: "Un champ obligatoire manque.",
    expected: "Le dossier attend ou est refusé avec un motif compréhensible.",
  },
  {
    title: "Dossier déjà présent",
    test: "Le même envoi est relancé.",
    expected:
      "La relance ne crée pas silencieusement un second client ou une seconde commande.",
  },
  {
    title: "Correction après envoi",
    test: "Une adresse ou un statut change.",
    expected: "L’équipe sait où corriger et quelles destinations vérifier.",
  },
  {
    title: "Destination indisponible",
    test: "Le logiciel d’arrivée ne répond plus.",
    expected:
      "Le dossier n’est ni perdu ni déclaré reçu ; une procédure manuelle ou une attente contrôlée prend le relais.",
  },
  {
    title: "Correction puis nouvel envoi",
    test: "Une personne reprend un dossier refusé.",
    expected:
      "Elle le corrige, le renvoie une seule fois et voit son résultat final.",
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
          { label: "Automatiser la saisie de données" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Dans votre entreprise, le commercial saisit un client, l’administration le recopie et la comptabilité le retape encore. Suivez une seule information pour supprimer les copies inutiles sans cacher les erreurs."
        heroAction={{ href: "#carte", label: "Copier la carte de ressaisie" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "1 information suivie",
            description: "",
            color: "violet",
          },
          {
            number: "06",
            title: "6 cas à tester",
            description: "",
            color: "blue",
          },
          {
            number: "01",
            title: "1 responsable par rejet",
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
            href: "/guides/automatiser-processus-metier",
            label: "Choisir quelle tâche automatiser en premier",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer le coût complet si un projet devient nécessaire",
          },
          {
            href: "/guides/transformer-excel-en-application",
            label: "Décider si le fichier Excel lui-même doit être remplacé",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Préparer le cahier des charges de l’application",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes et applications métier",
          },
        ]}
        faqTitle="Automatiser la saisie : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Votre commercial saisit un client dans son logiciel,
            l’administration recopie son nom et son adresse dans un tableau,
            puis la comptabilité retape encore ces informations pour facturer.
          </strong>{" "}
          Automatiser la saisie consiste à éviter qu’une personne recopie une
          information déjà disponible. La bonne réponse n’est pas d’envoyer
          toutes vos données partout : suivez un client, une commande ou une
          intervention, décidez où chaque champ doit être corrigé, supprimez les
          copies inutiles et rendez tout dossier refusé visible. Ce guide vous
          aide à choisir la solution la plus simple, à tester les erreurs avant
          d’arrêter le copier-coller et à nommer la personne qui reprend la main
          quand le transfert bloque.
        </p>

        <p>
          Ne cherchez pas à représenter toute l’entreprise. Prenez un dossier
          récent et suivez seulement les informations qui passent d’une personne
          ou d’un logiciel à l’autre. Vous pourrez alors conclure qu’un accès à
          la même fiche, un réglage ou un import suffit, qu’une transmission
          limitée mérite d’être étudiée, ou que le manuel reste préférable.
        </p>

        <InfoBox
          variant="blue"
          title="La règle à écrire avant toute automatisation"
        >
          Cette information est saisie une fois à cet endroit, vérifiée avant
          d’être transmise, et corrigée ici si elle change. Les dossiers refusés
          apparaissent dans une liste connue et une personne nommée les reprend.
          Tant que cette phrase reste impossible à compléter, acheter un outil
          ajoute une nouvelle boîte noire au problème.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "suivre-une-information",
              label: "1. Suivre une information de bout en bout",
            },
            { id: "carte", label: "2. Copier la carte de ressaisie" },
            {
              id: "endroit-correction",
              label: "3. Choisir où chaque champ doit être corrigé",
            },
            {
              id: "supprimer-avant-automatiser",
              label: "4. Supprimer les copies inutiles",
            },
            {
              id: "rejets-visibles",
              label: "5. Rendre les dossiers refusés visibles",
            },
            {
              id: "tests",
              label: "6. Tester doublon, correction et panne",
            },
            {
              id: "mesure",
              label: "7. Comparer le même travail avant et après",
            },
            {
              id: "donnees-factures",
              label: "8. Garder les contrôles sur les données et factures",
            },
            {
              id: "decision",
              label: "9. Écrire une décision vérifiable",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="suivre-une-information">
          1. Suivez une information de son arrivée à sa dernière utilisation
        </h2>

        <p>
          Choisissez quelque chose que tout le monde peut reconnaître : un
          nouveau client, une commande acceptée, une intervention terminée ou un
          mouvement de stock. Prenez ensuite un dossier récent et demandez à une
          personne qui connaît le travail de raconter ce qui lui arrive, sans
          sauter les copier-coller jugés « provisoires ».
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {[
            ["1", "Arrivée", "E-mail, formulaire, PDF, appel ou bon reçu"],
            ["2", "Première saisie", "Personne, outil et champs saisis"],
            ["3", "Copies", "Tableau, logiciel ou document repris"],
            ["4", "Contrôle", "Champ vérifié et motif de refus"],
            ["5", "Dernier usage", "Commande, intervention, facture ou suivi"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-xs font-black text-violet-600 dark:text-violet-400">
                ÉTAPE {number}
              </span>
              <p className="mb-1 mt-2 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p>
          À chaque étape, notez qui agit, ce qui est lu, ce qui est modifié et
          ce qui prouve que l’étape est terminée. Une donnée simplement
          consultée n’a peut-être pas besoin d’être copiée. Une donnée modifiée
          dans deux endroits différents demande au contraire une règle claire :
          lequel doit être corrigé en premier ?
        </p>

        <p>
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num recommande de décrire les étapes, les informations, les
            exceptions et les rôles
          </a>{" "}
          avant d’automatiser, puis de commencer petit et de tester les
          transmissions et notifications. Son dossier donne un cadre général aux
          TPE et PME. Ici, nous l’appliquons à un seul trajet déjà choisi.
        </p>

        <h2 id="carte">2. Copiez cette carte de ressaisie</h2>

        <p>
          Copiez les cinq blocs ci-dessous dans une note partagée en interne.
          Remplissez-les avec des noms d’outils et de rôles, pas avec les noms,
          adresses, montants ou pièces de vrais clients. L’objectif est de
          préparer la décision ; aucune donnée n’est à saisir sur ce site.
        </p>

        <ol className="not-prose my-7 grid list-none gap-4 p-0 md:grid-cols-2">
          {mapSections.map((section) => (
            <li
              key={section.number}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm font-black text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  {section.number}
                </span>
                <p className="mb-0 font-semibold text-zinc-950 dark:text-white">
                  {section.title}
                </p>
              </div>
              <ul className="mb-0 space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {section.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h3>Exemple illustratif fictif : l’identité d’un nouveau client</h3>

        <p>
          Cet exemple n’est ni un client ni un résultat Hagnéré Code. Il montre
          seulement comment une entreprise fictive pourrait remplir une partie
          de la carte avant de choisir une solution.
        </p>

        <GuideTable
          caption="Exemple fictif d’un client saisi puis repris dans plusieurs outils"
          headers={["Étape", "Ce qui se passe", "Décision à écrire"]}
          rows={[
            [
              "Première saisie",
              "Le commercial crée le client après acceptation du devis.",
              "Le logiciel commercial garde le nom légal, le contact et l’adresse validée.",
            ],
            [
              "Tableau administratif",
              "L’administration recopie les coordonnées pour suivre l’ouverture du dossier.",
              "Supprimer la copie si le statut peut être affiché sur la fiche existante.",
            ],
            [
              "Facturation",
              "La comptabilité retape les champs nécessaires à la facture.",
              "Transmettre uniquement les champs validés ; conserver les contrôles du logiciel comptable.",
            ],
            [
              "Dossier refusé",
              "Le numéro attendu manque ou le client existe déjà.",
              "Afficher le motif dans une liste reprise par l’administration avant la facturation.",
            ],
          ]}
        />

        <h2 id="endroit-correction">
          3. Décidez où chaque champ doit être corrigé en premier
        </h2>

        <p>
          Vous n’avez pas besoin d’élire un logiciel unique qui aurait raison
          sur tout. Vous devez savoir où corriger chaque information importante.
          Dans l’exemple fictif, le logiciel commercial peut porter l’identité
          validée du client, le logiciel comptable le numéro de facture et le
          logiciel de stock la quantité disponible. Une correction commence à
          l’endroit désigné, puis atteint seulement les destinations qui en ont
          besoin.
        </p>

        <GuideTable
          caption="Choisir l’endroit où trois types d’informations sont corrigés"
          headers={[
            "Information",
            "Où la corriger d’abord",
            "Ce que les autres outils font",
          ]}
          rows={[
            [
              "Nom légal et adresse du client",
              "L’outil où l’identité est vérifiée par la personne responsable.",
              "Ils reçoivent la version validée ou la consultent sans la modifier.",
            ],
            [
              "Numéro et statut de la facture",
              "Le logiciel comptable ou de facturation compétent.",
              "Ils affichent le statut utile sans fabriquer un second numéro.",
            ],
            [
              "Quantité disponible",
              "L’outil qui enregistre réellement entrées, sorties et corrections de stock.",
              "Ils consultent la disponibilité nécessaire à la vente ou à la préparation.",
            ],
          ]}
        />

        <p>
          Pour les données personnelles, ce choix aide aussi à organiser les
          corrections. L’
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 5 du RGPD présenté par la CNIL
          </a>{" "}
          prévoit notamment que ces données soient limitées à ce qui est
          nécessaire, exactes et, si besoin, tenues à jour. Cela ne rend pas le
          trajet automatiquement conforme : finalité, base légale, durée, accès,
          sécurité et droits restent à examiner selon votre situation.
        </p>

        <InfoBox variant="amber" title="Deux versions, deux erreurs possibles">
          Si l’administration corrige l’adresse dans son tableau tandis que le
          commercial la corrige dans son logiciel, personne ne sait laquelle
          transmettre. L’automatisation ne tranche pas ce désaccord. Elle peut
          seulement diffuser plus vite la version qu’on lui a demandé
          d’utiliser.
        </InfoBox>

        <h2 id="supprimer-avant-automatiser">
          4. Supprimez les copies inutiles avant de transmettre le reste
        </h2>

        <p>
          L’ordre suivant est une recommandation Hagnéré Code, pas une règle de
          la CNIL ou de France Num. Commencez par la réponse qui ajoute le moins
          de travail et arrêtez-vous dès que le besoin est couvert durablement.
        </p>

        <ol className="not-prose my-7 space-y-3 p-0">
          {answerOrder.map((answer, index) => (
            <li
              key={answer.title}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-black text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                {index + 1}
              </span>
              <div>
                <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                  {answer.title}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {answer.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p>
          Certains logiciels proposent un accès conçu pour échanger des
          informations avec un autre outil : on parle souvent de connecteur ou
          d’<strong>API</strong>. Ce nom ne vous dit pas encore si l’échange est
          utile. Avant de le demander, donnez au prestataire la liste des champs
          nécessaires, l’endroit où chacun est corrigé, le contrôle attendu et
          la personne qui traite un refus. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-api-interfaces-de-programmation-applicative"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle, pour les échanges de données personnelles par API
          </a>
          , l’importance de définir les rôles, de limiter les données et les
          accès, de documenter, de tester et de conserver des traces adaptées.
          Elle ne dit pas qu’une API est obligatoire ni suffisante.
        </p>

        <h2 id="rejets-visibles">
          5. Rendez chaque dossier refusé visible et attribuez-le à une personne
        </h2>

        <p>
          Un transfert qui ne montre que ses réussites est dangereux. Un champ
          vide, un mauvais format, un doublon ou une panne doit produire un
          résultat visible : le dossier attend, il porte un motif et quelqu’un
          sait quand le reprendre. L’absence d’alerte ne prouve pas que tout est
          arrivé.
        </p>

        <FormulaBox>
          {[
            "PHRASE DE FONCTIONNEMENT À COMPLÉTER",
            "",
            "[Information] est saisie une fois dans [outil ou document].",
            "Après vérification de [champs], seules [données nécessaires]",
            "sont transmises à [destination].",
            "Les dossiers incomplets ou refusés apparaissent dans [liste]",
            "et sont repris par [rôle].",
            "[Décision ou champ à fort impact] reste manuel.",
          ].join("\n")}
        </FormulaBox>

        <p>
          La liste des refus n’a pas besoin de recopier tout le dossier. Pour
          comprendre ce qui s’est passé, gardez au minimum un identifiant
          interne non signifiant, la date et l’heure, l’action tentée, le
          résultat, le rôle de la personne ou du système et la référence du
          rejet ou de la correction. Définissez qui peut lire cette trace et
          combien de temps elle reste utile.
        </p>

        <GuideTable
          caption="Journal minimal d’un transfert et de sa correction"
          headers={[
            "À noter",
            "Exemple sans donnée client",
            "Question à trancher",
          ]}
          rows={[
            [
              "Dossier et moment",
              "Identifiant interne non signifiant + date et heure",
              "Permet-il de retrouver l’événement sans copier le document ?",
            ],
            [
              "Action et résultat",
              "Envoi tenté, reçu, refusé ou mis en attente",
              "Le résultat final est-il visible sans ouvrir plusieurs outils ?",
            ],
            [
              "Reprise",
              "Rôle responsable + référence du rejet ou de la correction",
              "Qui agit, avant quelle échéance métier, et comment clôture-t-il le cas ?",
            ],
          ]}
        />

        <p>
          Si cet identifiant permet encore de retrouver une personne, la trace
          reste une donnée personnelle. Elle doit alors être traitée avec les
          protections applicables ; remplacer un nom par un numéro ne suffit pas
          à rendre les données anonymes.
        </p>

        <h2 id="tests">
          6. Testez six situations avant d’arrêter le copier-coller
        </h2>

        <p>
          Pour un développement ou un test, n’utilisez pas les données
          personnelles réelles de production dans ce protocole. Préférez des
          scénarios représentatifs avec des valeurs fictives, ou des données
          effectivement anonymisées, dans un environnement distinct. La{" "}
          <a
            href="https://www.cnil.fr/fr/tester-vos-applications"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL explique comment tester une application sans exposer les
            données personnelles de production
          </a>
          . Elle précise aussi que des données seulement pseudonymisées restent
          des données personnelles ; son{" "}
          <a
            href="https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles"
            target="_blank"
            rel="noopener noreferrer"
          >
            rappel sur l’anonymisation
          </a>{" "}
          distingue bien les deux situations.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {testCases.map((test, index) => (
            <div
              key={test.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Essai {index + 1}
              </p>
              <h3 className="mt-0 text-base font-semibold text-zinc-950 dark:text-white">
                {test.title}
              </h3>
              <p className="mb-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Situation :</strong> {test.test}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Résultat attendu :</strong> {test.expected}
              </p>
            </div>
          ))}
        </div>

        <p>
          Comparez aussi le nombre et les identifiants des éléments envoyés avec
          ceux reçus. N’arrêtez la procédure manuelle que lorsque les cas
          normaux, incomplets, déjà présents, corrigés et rejoués ont produit le
          résultat attendu, et que la panne possède une reprise connue. Le
          contrôle humain peut ensuite être renforcé ou allégé selon le risque,
          la facilité de correction et la stabilité du trajet.
        </p>

        <h2 id="mesure">7. Comparez le même travail avant et après</h2>

        <p>
          Mesurez un même type de dossiers sur des périodes comparables. Notez
          les minutes consacrées uniquement à retaper ou reformater, mais aussi
          les dossiers incomplets, doublons, corrections, refus et minutes de
          reprise. Une semaine calme comparée à une clôture chargée ne permet
          pas d’attribuer l’écart au changement.
        </p>

        <GuideTable
          caption="Journal avant, pendant et après l’essai"
          headers={["Ce que vous comptez", "Avant", "Pendant puis après"]}
          rows={[
            [
              "Période et dossiers de même nature",
              "Dates, volume et cas difficiles",
              "Même définition, avec tout écart de volume signalé",
            ],
            [
              "Manipulation",
              "Minutes de recopie et de reformatage",
              "Minutes de contrôle et de reprise des refus",
            ],
            [
              "Qualité du trajet",
              "Incomplets, doublons, corrections et retards",
              "Envoyés, reçus, refusés, corrigés et cas restés manuels",
            ],
            [
              "Responsabilité",
              "Qui vérifie et qui corrige aujourd’hui",
              "Qui surveille la liste et clôture les refus demain",
            ],
          ]}
        />

        <h3>Exemple illustratif fictif : 40 dossiers sur dix jours ouvrés</h3>

        <p>
          Supposons 40 dossiers de même nature. Avant le changement fictif,
          chacun demande 3 minutes de création, 4 minutes de recopie
          administrative et 2 minutes de préparation pour la facturation. Cinq
          dossiers demandent ensuite 12 minutes de correction. Pendant l’essai,
          chaque dossier demande 1 minute de contrôle et quatre refus demandent
          5 minutes de reprise.
        </p>

        <FormulaBox>
          {[
            "AVANT",
            "40 × (3 + 4 + 2) min + 5 × 12 min",
            "= 360 + 60",
            "= 420 minutes, soit 7 heures",
            "",
            "PENDANT L’ESSAI",
            "40 × 1 min de contrôle + 4 × 5 min de reprise",
            "= 40 + 20",
            "= 60 minutes, soit 1 heure",
            "",
            "ÉCART SUR LE MÊME ÉCHANTILLON",
            "420 - 60 = 360 minutes = 6 heures",
            "360 / 420 × 100 = 85,714... %, soit 85,7 %",
            "Contrôle inverse : 60 + 360 = 420 minutes",
          ].join("\n")}
        </FormulaBox>

        <InfoBox
          variant="amber"
          title="85,7 % n’est ni un gain promis, ni un ROI"
        >
          Ce pourcentage appartient uniquement à l’exemple fictif et mesure du
          temps de manipulation sur quarante dossiers. Il n’inclut ni le coût de
          mise en place, ni l’abonnement, la maintenance, la formation, la
          sécurité ou les incidents. Il ne devient pas une économie en euros
          tant qu’aucune dépense évitée ou réaffectation utile du temps n’est
          démontrée. Si le changement mérite un investissement, utilisez le
          guide pour{" "}
          <Link href="/guides/calculer-roi-application-metier">
            calculer le coût complet et le retour d’une application métier
          </Link>
          .
        </InfoBox>

        <h2 id="donnees-factures">
          8. Conservez les contrôles sur les données personnelles et les
          factures
        </h2>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-800 dark:bg-blue-950/30">
            <h3 className="mt-0 text-base font-semibold text-blue-950 dark:text-blue-200">
              Si des données personnelles circulent
            </h3>
            <p className="text-sm leading-relaxed text-blue-900 dark:text-blue-300">
              Ne transmettez pas un champ « au cas où ». Notez la finalité, les
              catégories de données, les destinataires, la durée et les mesures
              de sécurité dans le travail RGPD approprié. La{" "}
              <a
                href="https://www.cnil.fr/fr/le-registre-rgpd-de-la-cnil"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
              >
                CNIL explique le contenu attendu du registre RGPD
              </a>
              . La carte de ce guide aide à poser les questions ; elle ne
              remplace pas ce registre ni l’analyse de votre situation.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
            <h3 className="mt-0 text-base font-semibold text-emerald-950 dark:text-emerald-200">
              Si le trajet prépare une facture
            </h3>
            <p className="text-sm leading-relaxed text-emerald-900 dark:text-emerald-300">
              Conservez la validation métier et les contrôles du logiciel de
              facturation. Les mentions obligatoires varient selon la situation
              et l’opération ; le{" "}
              <a
                href="https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
              >
                ministère de l’Économie tient une page officielle sur les
                mentions d’une facture
              </a>
              . Faites valider le cas qui vous concerne dans la source actuelle
              ou par votre expert-comptable. L’automatisation ne rend pas une
              facture conforme par elle-même.
            </p>
          </div>
        </div>

        <h2 id="decision">
          9. Écrivez une décision que l’équipe pourra vérifier
        </h2>

        <p>
          À ce stade, vous devez pouvoir remettre une phrase complète à votre
          équipe ou à un prestataire. Elle nomme l’information, son premier lieu
          de saisie, le contrôle, la destination, la liste des refus, la
          personne responsable et la partie qui reste manuelle. Si un de ces
          éléments manque, gardez la procédure actuelle pendant que vous le
          clarifiez.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
            <h3 className="mt-0 text-base font-semibold text-emerald-950 dark:text-emerald-200">
              Une transmission mérite d’être étudiée
            </h3>
            <ul className="mb-0 space-y-2 pl-5 text-sm leading-relaxed text-emerald-900 dark:text-emerald-300">
              <li>la même information est retapée régulièrement ;</li>
              <li>les règles et les champs nécessaires sont assez stables ;</li>
              <li>les erreurs et retards ont des conséquences observables ;</li>
              <li>
                une personne peut décider où corriger et reprendre un refus.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mt-0 text-base font-semibold text-zinc-950 dark:text-white">
              Gardez le manuel ou corrigez d’abord l’organisation
            </h3>
            <ul className="mb-0 space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              <li>
                la saisie est rare ou chaque dossier suit une règle différente ;
              </li>
              <li>la décision demande un jugement humain important ;</li>
              <li>personne ne peut prendre en charge les rejets ;</li>
              <li>
                une fonction disponible n’a pas encore été réglée ou testée.
              </li>
            </ul>
          </div>
        </div>

        <GuideInlineCTA
          title="Faire relire un trajet de ressaisie"
          description="Apportez un dossier type, les outils utilisés, les copies actuelles et les cas qui bloquent. L’échange sert à identifier ce qui peut disparaître, où corriger, comment traiter un refus et quelle réponse reste la plus simple — y compris un réglage existant ou aucun développement."
          tags={[
            "Un seul trajet étudié",
            "Rejets et responsable nommés",
            "Développement non imposé",
          ]}
          ctaLabel="Faire relire mon trajet"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites</h2>

        <p>
          Ce guide distingue les règles officielles des recommandations Hagnéré
          Code. France Num soutient la description des étapes, informations,
          exceptions, rôles et tests. La CNIL et le RGPD soutiennent les
          passages sur les données nécessaires, leur exactitude, les
          environnements de test, l’anonymisation, les accès et les traces.
          L’ordre « supprimer, montrer la même fiche, utiliser l’existant,
          transmettre, préremplir ou rester manuel » et l’obligation interne de
          nommer un responsable du rejet sont nos recommandations de
          préparation.
        </p>

        <p>
          La carte ne remplace ni une étude technique, ni un registre RGPD, ni
          un avis juridique ou comptable. Elle ne traite pas l’architecture
          détaillée entre un ERP, un CRM et une application métier, ni une
          transmission dans les deux sens. Elle sert à arriver à cette étude
          avec une information précise, des contrôles et des responsabilités
          déjà compris.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
