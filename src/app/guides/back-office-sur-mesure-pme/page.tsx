import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("back-office-sur-mesure-pme");

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
        alt: "Une commande passe du commercial à l’administration puis à la comptabilité dans un back-office de PME",
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
      name: "Back-office sur mesure pour PME",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu’est-ce qu’un back-office dans une PME ?",
    answer:
      "C’est l’écran de travail interne dans lequel une équipe ouvre un dossier, voit ce qui manque et réalise l’action suivante. Il peut servir à traiter des commandes, demandes, contrats ou interventions, sans être visible par le client.",
  },
  {
    question: "Un tableau de bord suffit-il comme back-office ?",
    answer:
      "Non, pas si l’équipe doit agir. Un tableau de bord montre par exemple douze commandes en attente ; un back-office permet d’ouvrir l’une d’elles, de joindre une pièce, de l’attribuer ou de la faire passer à l’étape suivante.",
  },
  {
    question: "Faut-il remplacer les logiciels de gestion existants ?",
    answer:
      "Pas forcément. Commencez par vérifier si une configuration, un module ou une vue de travail dans l’outil déjà payé couvre le parcours. Un écran dédié peut aussi s’appuyer sur l’outil de relation client ou le logiciel de gestion intégré sans les remplacer.",
  },
  {
    question: "Le no-code suffit-il pour un outil interne ?",
    answer:
      "Il peut suffire lorsque les règles sont compréhensibles, les droits restent gérables et les connexions nécessaires sont bien prises en charge. Il devient moins adapté si les exceptions, les volumes, les contrôles ou l’entretien dépassent ce que l’équipe peut maîtriser.",
  },
  {
    question: "Comment éviter que l’équipe refuse le nouvel outil ?",
    answer:
      "Faites essayer un parcours réel avant de généraliser. Une commande normale, une pièce manquante et une urgence révèlent rapidement les informations absentes, les actions inutiles et les règles que le projet avait oubliées.",
  },
];

const journeySteps = [
  {
    role: "Commercial",
    action: "Confirmer la commande reçue",
    information: "Devis signé, client, lignes commandées et date demandée",
    state: "Reçue → à vérifier",
    next: "Transmettre un dossier complet à l’administration des ventes",
    friction:
      "Le devis est dans l’email, l’adresse dans l’outil client et une remise n’apparaît que dans une note.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    role: "Administration des ventes",
    action: "Vérifier les pièces et accepter la commande",
    information:
      "Adresse de livraison, conditions, disponibilité et accord sur la remise",
    state: "À vérifier → validée ou incomplète",
    next: "Demander la pièce manquante ou transmettre la commande validée",
    friction:
      "Une ligne est recopiée dans un tableur pour signaler la pièce manquante, sans responsable visible.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    role: "Comptabilité",
    action: "Préparer la facturation",
    information:
      "Commande validée, livraison confirmée, coordonnées et conditions de facturation",
    state: "Livrée → prête à facturer",
    next: "Créer la facture ou renvoyer le dossier avec un motif précis",
    friction:
      "La comptabilité reçoit un message, mais ne sait pas si la dernière version de la commande est bien celle qui a été livrée.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
];

const solutionChoices = [
  {
    title: "Simplifier ou configurer l’existant",
    choose:
      "Les outils possèdent déjà les données et les actions nécessaires ; le problème vient surtout des champs, vues, règles ou responsabilités.",
    coverage:
      "Faites passer la commande normale, incomplète et urgente dans une vue configurée. Notez chaque contournement encore nécessaire.",
    effortAndCost:
      "Comptez le nettoyage des données, le paramétrage, la formation, les licences et le temps d’administration sur la même durée que les autres options.",
    continuity:
      "Vérifiez les rôles, l’historique, les sauvegardes proposées par l’éditeur et le retour aux anciens réglages avant la généralisation.",
    ownershipAndExit:
      "Nommez la personne qui maintient les règles et exportez données et paramètres utiles. Arrêtez l’essai si une étape essentielle reste manuelle à chaque dossier.",
    color: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
  },
  {
    title: "Adopter un logiciel ou un module standard",
    choose:
      "Le travail ressemble à une pratique courante — commandes, tickets, stocks — et l’entreprise peut adapter certaines habitudes.",
    coverage:
      "Testez les trois commandes avec les vraies règles, appareils et connexions. Une démonstration commerciale ne suffit pas.",
    effortAndCost:
      "Additionnez licences, paramétrage, migration, intégrations, formation et support sur une durée commune.",
    continuity:
      "Contrôlez les droits, l’historique, les sauvegardes, la restauration annoncée et le retour à l’ancien fonctionnement pendant le pilote.",
    ownershipAndExit:
      "Lisez les conditions de support et réalisez un export utilisable. Renoncez si une exception indispensable ne peut être traitée sans bricolage permanent.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    title: "Assembler un outil avec des blocs visuels (no-code)",
    choose:
      "Le parcours est limité, les règles restent lisibles et une personne identifiée peut administrer l’outil dans la durée.",
    coverage:
      "Rejouez les mêmes dossiers et volumes, y compris une connexion interrompue et une action répétée.",
    effortAndCost:
      "Comptez les abonnements par utilisateur ou automatisation, l’assemblage, les connexions, la formation et l’entretien sur la même durée.",
    continuity:
      "Vérifiez la finesse des droits, les journaux, les sauvegardes, la reprise après erreur et l’absence de doublon lors des échanges.",
    ownershipAndExit:
      "Nommez un administrateur, documentez les règles et testez l’export. Arrêtez si les droits, volumes ou connexions dépassent ce que l’équipe peut maîtriser.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Développer un back-office sur mesure",
    choose:
      "Les actions et exceptions sont propres à l’entreprise, plusieurs rôles doivent travailler ensemble et les solutions testées imposent des contournements durables.",
    coverage:
      "Commencez par un seul type de dossier et démontrez les trois cas avant d’ajouter d’autres équipes ou fonctions.",
    effortAndCost:
      "Comptez conception, développement, hébergement, sécurité, documentation, support et maintenance sur la même durée — pas seulement le devis initial.",
    continuity:
      "Exigez droits, historique, sauvegardes restaurées en essai, surveillance des erreurs et retour à la version précédente lors d’un déploiement défectueux.",
    ownershipAndExit:
      "Clarifiez les droits sur le code et les données, le dépôt, les accès, la documentation, l’export et la reprise par un tiers. Renoncez si un produit courant couvre le besoin à moindre risque.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Attendre, tout en corrigeant le travail",
    choose:
      "Les personnes ne s’accordent pas encore sur la règle, le volume reste faible ou personne n’est disponible pour tester.",
    coverage:
      "Cartographiez les trois commandes et simplifiez les champs, les doublons et les responsabilités sans ajouter d’outil.",
    effortAndCost:
      "Mesurez le temps d’attente, les reprises et le coût interne du fonctionnement actuel sur la même durée.",
    continuity:
      "Conservez un support compris par l’équipe, ses accès, ses sauvegardes et une procédure simple en cas d’absence ou d’erreur.",
    ownershipAndExit:
      "Nommez la personne qui réexaminera la décision et l’événement qui la déclenchera. Arrêtez d’attendre si le volume, les erreurs ou une obligation ont réellement changé.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
];

const stressTests = [
  {
    title: "Le dossier normal",
    question:
      "Chaque rôle trouve-t-il l’information, réalise-t-il son action et sait-il à qui le dossier passe ensuite ?",
    result:
      "Le chemin principal devient un critère d’acceptation, pas une simple démonstration préparée.",
  },
  {
    title: "La pièce manquante",
    question:
      "Qui voit le manque, qui relance, que peut-on continuer à faire et quel événement remet le dossier en mouvement ?",
    result:
      "L’équipe vérifie que « incomplet » est un état traité, pas une commande oubliée dans une boîte mail.",
  },
  {
    title: "L’urgence réelle",
    question:
      "Qui peut changer la priorité, avec quelle raison, et comment éviter que toutes les demandes deviennent urgentes ?",
    result:
      "L’exception reste visible et contrôlable sans contourner les droits ni effacer l’ordre normal.",
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
          { label: "Back-office PME" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre commande passe de l’email à l’outil client, puis au tableur et enfin à la comptabilité ? Suivez un seul dossier pour savoir s’il faut configurer, acheter, assembler, développer ou attendre."
        heroAction={{
          href: "#carte-dossier",
          label: "Voir la carte",
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
            title: "1 dossier à suivre",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "3 rôles à relier",
            description: "",
            color: "blue",
          },
          {
            number: "05",
            title: "5 choix possibles",
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
            href: "/guides/portail-client-b2b-sur-mesure",
            label: "Ouvrir une action aux clients professionnels",
          },
          {
            href: "/guides/signes-besoin-logiciel-metier",
            label: "Reconnaître un besoin de logiciel métier",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "Comparer no-code et développement sur mesure",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "Comparer logiciel de gestion et sur-mesure",
          },
          {
            href: "/guides/connecter-erp-crm-logiciel-metier",
            label: "Relier le back-office aux outils existants",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Préparer le cahier des charges du premier lot",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Découvrir le développement d’outils internes",
          },
        ]}
        faqTitle="Back-office de PME : les questions avant de choisir"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Votre commercial affirme que la commande est validée,
            l’administration cherche encore une pièce et la comptabilité attend
            la bonne version.
          </strong>{" "}
          Un back-office est l’écran interne où l’équipe ouvre ce dossier, voit
          ce qui manque et réalise l’action suivante. Cela ne signifie pas qu’il
          faut le développer sur mesure. Configurez d’abord l’outil déjà payé
          s’il sait faire le travail. Testez un logiciel standard si le besoin
          est courant, ou un outil assemblé avec des blocs visuels, sans
          développement classique — appelé « no-code » — si les règles restent
          simples. Le sur-mesure devient pertinent lorsque les actions, les
          rôles et les exceptions propres à l’entreprise résistent à ces
          solutions. Si le travail lui-même n’est pas décidé, attendez avant de
          coder — mais corrigez déjà les responsabilités et les doublons.
        </p>

        <p>
          Ce guide ne part donc pas d’une liste d’écrans. Il suit une commande
          fictive entre entreprises, du commercial à l’administration des
          ventes, puis à la comptabilité. Vous pourrez reprendre la même carte
          avec un devis, une intervention, un contrat ou une demande client.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {["Configurer", "Acheter", "Assembler", "Développer", "Attendre"].map(
            (choice) => (
              <div
                key={choice}
                className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-center text-sm font-semibold text-zinc-900 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
              >
                {choice}
              </div>
            ),
          )}
        </div>

        <GuideToc
          items={[
            {
              id: "film-dossier",
              label: "1. Suivre une commande entre trois rôles",
            },
            {
              id: "agir-ou-regarder",
              label: "2. Distinguer back-office et tableau de bord",
            },
            {
              id: "carte-dossier",
              label: "3. Cartographier un seul dossier",
            },
            {
              id: "actions-et-etats",
              label: "4. Nommer les actions et les états",
            },
            {
              id: "roles-et-droits",
              label: "5. Donner à chaque rôle ce dont il a besoin",
            },
            {
              id: "cinq-choix",
              label: "6. Comparer cinq réponses honnêtes",
            },
            {
              id: "tests-resistance",
              label: "7. Tester le normal, l’incomplet et l’urgent",
            },
            {
              id: "mesurer",
              label: "8. Mesurer avant de promettre un gain",
            },
            {
              id: "premier-lot",
              label: "9. Limiter le premier lot",
            },
            {
              id: "aide",
              label: "10. Savoir si nous sommes le bon interlocuteur",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="film-dossier">
          1. Suivez une commande entre trois rôles avant de dessiner un écran
        </h2>

        <p>
          <strong>Exemple illustratif fictif :</strong> cette PME, sa commande
          et ses difficultés sont entièrement inventées. Elles ne décrivent ni
          un client ni un résultat obtenu par Hagnéré Code.
        </p>

        <p>
          À 8 h 47, un client demande si sa commande est complète et peut être
          validée. Le commercial retrouve le devis dans sa boîte mail et le
          client dans son outil de gestion de la relation client, souvent appelé
          CRM. L’administration des ventes a déjà copié la commande dans un
          tableur, mais attend une adresse de livraison. La comptabilité voit
          une ancienne version du devis et ne sait pas quelle remise appliquer.
          Chacun travaille ; personne ne voit le dossier entier.
        </p>

        <div className="not-prose my-8 space-y-4">
          {journeySteps.map((step, index) => (
            <article
              key={step.role}
              className={`relative rounded-2xl border p-5 sm:p-6 ${step.color}`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                  {step.role}
                </h3>
                <span className="rounded-full border border-current/15 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                  {step.state}
                </span>
              </div>
              <dl className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Action
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {step.action}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Information nécessaire
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                    {step.information}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Prochaine action
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                    {step.next}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Ce qui casse aujourd’hui
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                    {step.friction}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Cette scène n’appelle pas encore une technologie. Elle révèle trois
          questions : quelle version fait foi, qui peut faire avancer la
          commande et qu’arrive-t-il lorsqu’une information manque ? Si une
          configuration du CRM répond à ces questions, un nouveau logiciel
          ajouterait seulement un cinquième endroit à consulter.
        </p>

        <h2 id="agir-ou-regarder">
          2. Un back-office ne sert pas seulement à regarder des chiffres
        </h2>

        <p>
          Un tableau de bord peut montrer « 12 commandes en attente ». Le
          back-office ouvre l’une de ces commandes, indique la pièce absente,
          permet à la bonne personne de la joindre, conserve la raison du
          blocage et prépare l’étape suivante. Voir et agir peuvent cohabiter
          dans le même outil, mais ils ne répondent pas au même besoin.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-2 text-sm font-semibold text-zinc-950 dark:text-white">
              Regarder
            </p>
            <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Compter les dossiers en retard, suivre un volume ou repérer une
              tendance. La réponse peut rester un rapport.
            </p>
          </div>
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <p className="mb-2 text-sm font-semibold text-zinc-950 dark:text-white">
              Agir
            </p>
            <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Compléter, attribuer, valider, refuser, rouvrir ou transmettre un
              dossier selon une règle connue. C’est le cœur du back-office.
            </p>
          </div>
        </div>

        <InfoBox
          variant="amber"
          title="Un écran unique ne veut pas dire une base de données unique"
        >
          Le CRM peut rester la source des clients et le logiciel de gestion
          intégré, souvent appelé ERP, celle des factures. Un back-office peut
          présenter les informations nécessaires et envoyer une action au bon
          système. Avant cela, il faut décider quelle source fait foi et ce qui
          se passe lorsqu’une connexion échoue.
        </InfoBox>

        <h2 id="carte-dossier">
          3. Recopiez cette carte pour un seul type de dossier
        </h2>

        <p>
          Le référentiel public{" "}
          <a
            href="https://design.numerique.gouv.fr/bien-concevoir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DesignGouv consacré à la conception des services numériques
          </a>{" "}
          recommande de partir des besoins, de définir les rôles et de tester
          avec les personnes concernées. Ce n’est pas une obligation générale
          pour une PME privée. La méthode évite néanmoins de dessiner des écrans
          à partir d’une réunion où personne n’exécute réellement le travail.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm sm:p-6 dark:border-zinc-800">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
            Carte à copier pour chaque passage du dossier
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`TYPE DE DOSSIER :

RÔLE QUI AGIT :

ACTION À RÉALISER :

INFORMATION NÉCESSAIRE :

OUTIL OUVERT AUJOURD’HUI :

ÉTAT AVANT → ÉTAT APRÈS :

PROCHAINE ACTION ET RESPONSABLE :

SI UNE INFORMATION MANQUE :

SI L’ACTION ÉCHOUE OU DOIT ÊTRE ANNULÉE :`}
          </pre>
        </div>

        <p>
          Remplissez-la pendant que la personne traite un vrai dossier autorisé,
          sans y recopier de donnée personnelle dans un document non prévu pour
          cela. Si deux rôles ne donnent pas le même nom au même état, notez le
          désaccord. Le projet doit résoudre cette règle avant de l’enfermer
          dans du code.
        </p>

        <h2 id="actions-et-etats">
          4. Nommez ce que l’équipe fait et ce que devient le dossier
        </h2>

        <p>
          Une liste comme « accueil, statistiques, utilisateurs, paramètres »
          décrit un menu générique. Un premier back-office se décrit mieux avec
          des verbes et des états : recevoir, compléter, valider, refuser,
          attribuer, facturer ; puis reçue, incomplète, validée, livrée, prête à
          facturer et close.
        </p>

        <ol>
          <li>
            <strong>Qui peut lancer l’action ?</strong> Une validation
            commerciale n’accorde pas automatiquement le droit de facturer.
          </li>
          <li>
            <strong>Quelles informations doivent être présentes ?</strong> Une
            commande sans adresse peut être enregistrée, mais pas forcément
            expédiée.
          </li>
          <li>
            <strong>Quel état obtient-on ?</strong> « Fait » ne suffit pas si
            chacun l’interprète différemment.
          </li>
          <li>
            <strong>Peut-on annuler ou corriger ?</strong> L’équipe doit savoir
            revenir en arrière sans effacer silencieusement l’historique utile.
          </li>
          <li>
            <strong>Qui agit ensuite ?</strong> Le dossier doit indiquer cette
            personne ou signaler clairement qu’elle manque ; aucun outil ne
            garantit à lui seul qu’un responsable sera toujours nommé.
          </li>
        </ol>

        <p>
          Le guide{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num sur l’automatisation des processus
          </a>{" "}
          invite notamment à examiner les étapes, les informations, les
          exceptions et les personnes responsables. Sa conclusion n’est pas «
          automatisez toujours » : la cartographie peut aussi montrer qu’une
          simplification suffit.
        </p>

        <h2 id="roles-et-droits">
          5. Chaque rôle a besoin d’une vue de travail, pas de tous les boutons
        </h2>

        <p>
          Le commercial a besoin de ses clients et commandes. L’administration
          vérifie les pièces et les conditions. La comptabilité consulte ce qui
          permet de facturer. Montrer toutes les données et toutes les actions à
          tout le monde simplifie la maquette, mais complique la sécurité, les
          erreurs et la compréhension.
        </p>

        <p>
          Pour les traitements de données personnelles, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de gérer les habilitations selon les besoins
          </a>
          . Privilégiez les comptes nominatifs. Un compte partagé doit rester
          une exception validée, tracée et réexaminée, pas le raccourci par
          défaut. Retirez aussi les accès qui ne sont plus nécessaires.
        </p>

        <div className="not-prose my-7 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "Données utiles",
              text: "Ne demandez pas un champ « au cas où ». La CNIL rappelle le principe de données adéquates, pertinentes et nécessaires.",
              href: "https://www.cnil.fr/fr/minimiser-les-donnees-collectees",
              label: "Minimiser les données",
            },
            {
              title: "Actions autorisées",
              text: "Distinguez consulter, modifier, valider, exporter et administrer. Un rôle peut voir un dossier sans pouvoir changer son état.",
              href: "https://www.cnil.fr/fr/securite-gerer-les-habilitations",
              label: "Gérer les habilitations",
            },
            {
              title: "Historique proportionné",
              text: "Tracez les opérations utiles à la sécurité et au diagnostic. La CNIL donne un repère général de six mois à un an, avec des adaptations à justifier : la finalité, les obligations, l’information des personnes et les accès doivent être décidés dans le projet.",
              href: "https://www.cnil.fr/fr/securite-tracer-les-operations",
              label: "Tracer les opérations",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="Mesurer un dossier ne justifie pas de surveiller les salariés"
        >
          Définissez une finalité précise et vérifiez qu’un moyen moins intrusif
          ne suffit pas. Préférez des mesures agrégées par type de dossier ou
          par équipe à un classement individuel. Lorsque des données sur
          l’activité des salariés sont traitées, déterminez les accès et la
          durée, informez les personnes et consultez le comité social et
          économique (CSE) lorsque les règles applicables l’exigent. La{" "}
          <a
            href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL indique qu’une surveillance permanente est en général excessive
          </a>
          . Une exception précise doit être nécessaire, proportionnée et
          examinée au cas par cas. Ces repères généraux ne remplacent pas
          l’examen de votre dispositif avec les interlocuteurs compétents.
        </InfoBox>

        <h2 id="cinq-choix">
          6. Comparez cinq réponses avant de financer du sur-mesure
        </h2>

        <p>
          La bonne comparaison ne commence pas par « quelle technologie
          préférez-vous ? ». Donnez aux cinq options le même dossier, les mêmes
          rôles, les mêmes exceptions, la même durée de coût et les mêmes
          exigences d’accès, de sauvegarde, de retour arrière et de sortie. Vous
          pourrez alors juger ce que chacune couvre réellement et ce qu’elle
          laisse à l’équipe.
        </p>

        <div className="not-prose my-8 space-y-4">
          {solutionChoices.map((choice) => (
            <article
              key={choice.title}
              className={`rounded-2xl border p-5 sm:p-6 ${choice.color}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {choice.title}
              </h3>
              <dl className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Quand l’essayer
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {choice.choose}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Couverture à démontrer
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {choice.coverage}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Effort et coût à comparer
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {choice.effortAndCost}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Droits, sauvegarde et retour arrière
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {choice.continuity}
                  </dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Responsable, sortie et condition d’arrêt
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {choice.ownershipAndExit}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Le guide public{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/pourquoi-utiliser-des-outils"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num consacré aux outils no-code
          </a>{" "}
          montre que cette voie peut convenir à des outils internes et à des
          portails. Il ne prouve pas qu’elle soit toujours plus rapide ou moins
          chère. Les règles, droits, volumes, connexions et personnes capables
          de maintenir l’assemblage changent la décision.
        </p>

        <p>
          Les deux articles France Num cités dans cette page sont des contenus
          d’experts hébergés par un portail public et signés par des
          prestataires du domaine. Nous les utilisons pour leurs questions
          pratiques, pas comme une norme officielle ni comme preuve de leurs
          bénéfices commerciaux.
        </p>

        <p>
          Si vous devez arbitrer plus largement entre les familles de solutions,
          poursuivez avec le comparatif{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou sur-mesure
          </Link>{" "}
          ou avec le choix{" "}
          <Link href="/guides/erp-ou-logiciel-sur-mesure">
            logiciel de gestion intégré ou logiciel sur mesure
          </Link>
          . Ici, ces options restent appliquées au dossier observé, sans refaire
          leurs coûts généraux.
        </p>

        <h2 id="tests-resistance">
          7. Faites passer le même dossier par trois épreuves
        </h2>

        <p>
          Une démonstration réussit facilement avec une commande complète et la
          bonne personne connectée. Le travail réel comporte des pièces
          absentes, des retours en arrière et des demandes urgentes. Faites
          jouer ces situations par les personnes concernées avant de généraliser
          l’outil.
        </p>

        <div className="not-prose my-7 grid gap-4 lg:grid-cols-3">
          {stressTests.map((test) => (
            <article
              key={test.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {test.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {test.question}
              </p>
              <p className="mb-0 mt-4 border-t border-zinc-200 pt-4 text-sm font-medium leading-relaxed text-zinc-900 dark:border-zinc-800 dark:text-zinc-100">
                {test.result}
              </p>
            </article>
          ))}
        </div>

        <p>
          La{" "}
          <a
            href="https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            boîte à outils de l’Anact sur la qualité de vie et les projets
            numériques
          </a>{" "}
          propose de simuler le travail futur avec les utilisateurs afin de
          révéler les ajustements nécessaires. Cette ressource traite de
          conduite du changement ; elle ne garantit ni adoption ni gain pour
          votre projet.
        </p>

        <h2 id="mesurer">8. Mesurez avant de promettre un gain de temps</h2>

        <p>
          Choisissez une période de clôture et un même type de dossier : ils
          forment une cohorte. Définissez le début, la fin et une durée de suivi
          après la clôture. Séparez le temps réellement travaillé du délai
          d’attente d’une information. Une commande terminée en trois jours peut
          n’avoir demandé que vingt minutes d’action et deux jours d’attente.
        </p>

        <FormulaBox>
          {
            "Minutes par dossier clos = somme des minutes consacrées aux dossiers clos de la cohorte ÷ nombre de dossiers distincts clos\n\nTaux de reprise (%) = dossiers distincts de cette cohorte rouverts au moins une fois pendant la durée de suivi ÷ dossiers distincts clos de la cohorte × 100"
          }
        </FormulaBox>

        <p>
          Ne calculez aucun taux si la cohorte ne contient aucun dossier clos ;
          affichez « non calculable », pas 0 %. Si dix dossiers fictifs clos
          demandent 240 minutes au total, la moyenne est de 24 minutes par
          dossier. Ajoutez la médiane ou la répartition lorsque quelques cas
          très longs déforment cette moyenne. Cela ne représente pas 240 minutes
          « économisées » après le projet. Un temps disponible ne devient un
          gain financier que s’il est réellement réaffecté ou si un coût est
          évité.
        </p>

        <InfoBox
          variant="blue"
          title="Mesurez aussi ce que l’outil pourrait déplacer"
        >
          Une saisie plus courte peut créer davantage de corrections plus tard.
          Ajoutez donc l’attente, les dossiers rouverts, les erreurs et les
          contournements à la comparaison. Sinon, le projet améliore un écran
          tout en déplaçant la charge vers une autre équipe.
        </InfoBox>

        <h2 id="premier-lot">
          9. Limitez le premier lot à un dossier, une équipe et quelques actions
        </h2>

        <p>
          Le premier lot n’a pas besoin de remplacer tous les outils. Pour
          l’exemple de commande, il peut se limiter à ouvrir le dossier,
          identifier la pièce manquante, l’attribuer, valider la commande et
          transmettre un état fiable à la comptabilité. Les tableaux de bord
          avancés, l’administration complète et les autres familles de dossiers
          peuvent attendre.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
          <p className="mb-3 font-semibold text-zinc-950 dark:text-white">
            Critères à faire réussir avant d’élargir
          </p>
          <ul className="m-0 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li>
              chaque rôle ouvre la commande autorisée sans la rechercher ;
            </li>
            <li>
              la pièce manquante et la personne chargée de la demander sont
              visibles ;
            </li>
            <li>une action répétée ne crée pas deux commandes ;</li>
            <li>
              une erreur peut être corrigée sans effacer l’historique utile ;
            </li>
            <li>
              la comptabilité reçoit l’état accepté, pas une copie ambiguë.
            </li>
          </ul>
        </div>

        <p>
          L’ordre dépend du travail réel : observer, décider les règles, essayer
          les options, construire ou configurer le lot, puis le faire jouer sur
          les trois épreuves. Aucun nombre de jours universel ne peut être
          promis avant de connaître les outils, les données, les connexions et
          les personnes disponibles.
        </p>

        <h2 id="aide">
          10. Quand Hagnéré Code peut-il utilement examiner ce parcours ?
        </h2>

        <h3>Le bon contexte</h3>

        <p>
          Nous pouvons être utiles si plusieurs personnes traitent le même type
          de dossier, si les règles principales sont décidées et si vous pouvez
          montrer le travail actuel. Nous pouvons alors comparer l’existant, un
          produit standard, un assemblage no-code et un développement dédié,
          puis décrire un premier lot testable. Le résultat peut être de ne pas
          développer sur mesure.
        </p>

        <h3>Le cas où il faut commencer autrement</h3>

        <p>
          Si l’équipe ne s’accorde pas sur la personne responsable, si le
          dossier apparaît rarement, si un module déjà payé couvre le besoin ou
          si personne ne pourra participer aux essais, corrigez d’abord ces
          points. Un incident de sécurité, une perte de données ou une
          obligation précise demande aussi une intervention adaptée avant ce
          travail de conception. Si les étapes elles-mêmes changent encore
          chaque semaine, commencez par le guide pour{" "}
          <Link href="/guides/automatiser-processus-metier">
            clarifier un processus avant de l’automatiser
          </Link>
          .
        </p>

        <GuideInlineCTA
          title="Présenter le premier parcours interne à simplifier"
          description="Le clic ouvre un formulaire guidé d’environ trois minutes. Décrivez un type de dossier et son passage entre les personnes. L’équipe relit ensuite la demande et répond personnellement ; aucun délai n’est garanti. La comparaison des options et d’un premier lot peut ensuite faire partie de l’échange."
          tags={[
            "L’existant reste possible",
            "Le standard reste possible",
            "Le sur-mesure n’est pas présupposé",
          ]}
          ctaLabel="Présenter mon parcours"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Cette page fournit une méthode de décision générale. Elle ne remplace
          ni un audit de sécurité ou de données, ni une analyse juridique, ni
          l’essai des logiciels dans votre contexte. Aucun prix, délai, gain de
          temps ou retour sur investissement universel n’est annoncé.
        </p>

        <ul>
          <li>
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DesignGouv — Bien concevoir un service numérique
            </a>{" "}
            : besoins, rôles, tests avec les utilisateurs et amélioration
            progressive.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — L’automatisation, une solution ?
            </a>{" "}
            : étapes, informations, exceptions et responsabilités à examiner.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/pourquoi-utiliser-des-outils"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — Pourquoi utiliser des outils no-code ?
            </a>{" "}
            : usages possibles et limites de cette alternative.
          </li>
          <li>
            <a
              href="https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anact — Boîte à outils QVCT et numérique
            </a>{" "}
            : simulation du travail futur avec les personnes concernées.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Gérer les habilitations
            </a>{" "}
            : accès selon les besoins, comptes nominatifs et exceptions
            encadrées.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Minimiser les données collectées
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noopener noreferrer"
            >
              tracer les opérations
            </a>{" "}
            : données nécessaires et historique proportionné.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Contrôle de l’activité des personnes employées
            </a>{" "}
            : finalité, proportionnalité, information, consultation du comité
            social et économique lorsqu’elle est requise et caractère en général
            excessif d’une surveillance permanente.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
