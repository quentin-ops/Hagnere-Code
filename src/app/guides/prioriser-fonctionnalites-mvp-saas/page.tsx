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

const guide = getGuide("prioriser-fonctionnalites-mvp-saas");

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
        alt: "Choisir les fonctionnalités de la prochaine version d’un SaaS : construire, tester, corriger ou reporter",
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
      name: "SaaS : prioriser les fonctionnalités après le MVP",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Faut-il toujours écouter le client qui paie le plus ?",
    answer:
      "Non, mais sa demande mérite d’être examinée sérieusement. Vérifiez le travail qu’elle bloque, son importance dans le contrat, son utilité pour les autres clients visés et le coût durable d’une fonction conçue pour un seul compte.",
  },
  {
    question: "Combien de demandes clients suffisent pour développer ?",
    answer:
      "Aucun nombre universel ne suffit. Trois demandes peuvent cacher trois problèmes différents, tandis qu’une seule observation peut révéler un blocage majeur. Comparez la situation, les faits disponibles, le résultat attendu et les personnes réellement concernées.",
  },
  {
    question: "RICE ou MoSCoW : quelle méthode choisir ?",
    answer:
      "Aucune méthode ne remplace la décision. RICE peut aider lorsque les demandes utilisent la même période, les mêmes unités et des estimations comparables. Une liste simple « maintenant, à tester, plus tard » est souvent plus honnête lorsque les informations restent incomplètes.",
  },
  {
    question: "Peut-on promettre une fonctionnalité pour plus tard ?",
    answer:
      "Vous pouvez promettre de la réexaminer lorsqu’un événement précis arrive, par exemple un nombre d’usages observés ou une décision contractuelle. Ne promettez une date de livraison qu’après avoir choisi le lot, vérifié ses dépendances et obtenu un engagement réaliste de l’équipe.",
  },
];

const requestFields = [
  {
    title: "1. La phrase reçue",
    text: "Recopiez la demande sans la corriger : « Il nous faut un export Excel. »",
  },
  {
    title: "2. La personne et la situation",
    text: "Qui essaie de faire quoi, à quel moment, et avec quelle conséquence si elle échoue ?",
  },
  {
    title: "3. Le problème observé",
    text: "Décrivez le travail impossible, lent ou risqué sans imposer encore la solution.",
  },
  {
    title: "4. Les faits disponibles",
    text: "Usage observé, ticket, entretien, vente bloquée, erreur mesurée ou simple intuition à vérifier.",
  },
  {
    title: "5. Le résultat attendu",
    text: "Quel comportement, coût, délai, risque ou résultat client devrait réellement changer ?",
  },
  {
    title: "6. Ce qui doit exister avant",
    text: "Accès, données, décision, autre fonction, contrat, correction ou travail d’un partenaire.",
  },
  {
    title: "7. Tout le travail nécessaire",
    text: "Compréhension, écrans, développement, tests, aide, suivi et entretien futur — pas seulement le code.",
  },
  {
    title: "8. La décision et son retour",
    text: "Construire, tester, corriger d’abord ou reporter ; puis écrire ce qui fera rouvrir la demande.",
  },
];

const outsideScore = [
  {
    title: "Une panne ou une erreur qui endommage déjà le service",
    text: "Décidez selon la gravité, les personnes touchées et le moyen de rétablir un fonctionnement sûr. Ce travail ne doit pas perdre contre une idée plus séduisante parce qu’il rapporte moins de votes.",
    color: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/25",
  },
  {
    title: "Une obligation réellement applicable",
    text: "Vérifiez sa source, sa date, les entreprises concernées et l’échéance. Une exigence supposée n’est pas prioritaire ; une obligation confirmée ne devient pas facultative à cause d’un score.",
    color:
      "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/25",
  },
  {
    title: "Un engagement écrit avec un client",
    text: "Relisez le contrat et distinguez l’engagement signé de la demande commerciale. Si le contrat reste ambigu, faites-le examiner avant de transformer l’idée en développement urgent.",
    color:
      "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/25",
  },
  {
    title: "Un travail indispensable à tout le reste",
    text: "Une connexion, une donnée ou une correction peut devoir précéder une fonction plus visible. Rendez cet ordre explicite au lieu de gonfler artificiellement la note du travail préalable.",
    color:
      "border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/25",
  },
];

const fictiveRequests = [
  {
    request: "« Corriger la double création d’une facture »",
    finding:
      "Dans ce scénario, l’équipe a reproduit l’erreur sur un dossier autorisé : une seule validation peut créer deux factures, et aucun contournement sûr n’est disponible.",
    decision:
      "Corriger puis vérifier qu’une action ne crée qu’une facture avant de comparer les nouvelles fonctions.",
    tone: "red",
  },
  {
    request: "« Valider cinquante dossiers en une seule action »",
    finding:
      "Plusieurs utilisateurs accomplissent déjà la même série d’actions et l’équipe peut observer le temps, les erreurs et le résultat attendu.",
    decision:
      "Candidat au prochain lot, avec un test qui empêche une validation involontaire.",
    tone: "emerald",
  },
  {
    request: "« Ajouter un tableau de bord personnalisable »",
    finding:
      "Les personnes demandent des graphiques différents, mais personne n’a encore nommé la décision que ces graphiques doivent aider à prendre.",
    decision: "Tester d’abord un rapport manuel sur une décision précise.",
    tone: "blue",
  },
  {
    request: "« Connecter le produit au système d’un prospect »",
    finding:
      "La vente est importante, mais les accès, les données échangées, le responsable du système tiers et l’entretien futur restent inconnus.",
    decision:
      "Tester d’abord les accès, les données et les responsabilités ; reporter le développement tant que ces informations manquent.",
    tone: "amber",
  },
  {
    request: "« Pouvoir choisir la couleur de chaque écran »",
    finding:
      "La demande exprime une préférence, sans travail bloqué ni résultat attendu identifié.",
    decision: "Reporter jusqu’à l’apparition d’un besoin vérifiable.",
    tone: "zinc",
  },
];

const toneClasses: Record<string, string> = {
  red: "border-red-200 bg-red-50/60 dark:border-red-900 dark:bg-red-950/20",
  emerald:
    "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20",
  blue: "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20",
  amber:
    "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20",
  zinc: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
};

const completedRequestExample = [
  ["1. Phrase reçue", "« Corriger la double création d’une facture. »"],
  [
    "2. Personne et situation",
    "La responsable facturation valide un dossier après une coupure de réseau ; elle ne sait pas qu’une première facture a déjà été créée.",
  ],
  [
    "3. Problème observé",
    "Une seule action peut produire deux factures. Le client reçoit alors deux documents et l’équipe doit retrouver puis annuler le doublon.",
  ],
  [
    "4. Faits disponibles",
    "Dans cet exemple fictif, l’équipe a reproduit le défaut sur un dossier autorisé et ne dispose d’aucun contournement sûr. La fréquence réelle reste à mesurer dans les journaux.",
  ],
  [
    "5. Résultat attendu",
    "Une validation ne crée qu’une facture ; si la réponse du serveur tarde, l’écran indique l’état réel sans inviter à recommencer.",
  ],
  [
    "6. Ce qui doit exister avant",
    "Un cas de reproduction, une sauvegarde vérifiée, les droits nécessaires et la règle décidant quelle facture conserver en cas de doublon.",
  ],
  [
    "7. Tout le travail",
    "Comprendre la cause, sécuriser l’écriture, traiter les doublons existants, tester les reprises réseau, informer l’équipe et surveiller les erreurs.",
  ],
  [
    "8. Décision et retour",
    "Corriger avant le nouveau lot. La correction est acceptée après les tests de reprise réseau et le contrôle des journaux ; elle est rouverte si un nouveau doublon apparaît.",
  ],
] as const;

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
          { label: "SaaS : prioriser les fonctionnalités après le MVP" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vos clients, vos commerciaux et votre équipe réclament chacun une fonction différente ? Voici comment choisir la prochaine version sans confondre insistance, urgence et utilité."
        heroAction={{
          href: "#fiche-demande",
          label: "Voir la fiche de tri",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "05",
            title: "5 demandes comparées",
            description: "",
            color: "violet",
          },
          {
            number: "04",
            title: "4 décisions possibles",
            description: "",
            color: "blue",
          },
          {
            number: "08",
            title: "8 lignes à remplir",
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
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Définir ce qui doit fonctionner dans le premier MVP",
          },
          {
            href: "/guides/mvp-prototype-ou-poc",
            label: "Choisir entre prototype, POC, pilote et MVP",
          },
          {
            href: "/guides/cahier-des-charges-saas",
            label: "Décrire le lot retenu dans un cahier des charges SaaS",
          },
          {
            href: "/guides/faire-evoluer-saas-apres-mvp",
            label: "Organiser les décisions et livraisons après le lot choisi",
          },
          {
            href: "/guides/combien-de-temps-developper-saas",
            label: "Construire le calendrier du lot choisi",
          },
          {
            href: "/guides/agence-saas-ou-freelance",
            label: "Choisir l’équipe qui réalisera le SaaS",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Développement de SaaS et d’applications métier",
          },
        ]}
        faqTitle="Prioriser les fonctions d’un SaaS : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Votre équipe a dix demandes pour la prochaine version du SaaS, mais
            le budget n’en finance que quelques-unes ?
          </strong>{" "}
          Ne classez pas directement les solutions réclamées. Cherchez d’abord
          qui est bloqué, dans quelle situation, ce que vous avez réellement
          observé et ce qui devrait changer après le développement. Traitez à
          part les pannes, les obligations confirmées et les travaux dont les
          autres fonctions dépendent. Pour le reste, choisissez entre quatre
          décisions : construire maintenant, faire un petit test, corriger
          d’abord un problème existant ou reporter. Vous trouverez ci-dessous
          une fiche de huit lignes et cinq demandes fictives entièrement triées
          lors d’un premier passage. Une demande est ensuite remplie jusqu’au
          bout pour montrer comment passer d’une phrase urgente à une décision
          vérifiable. Le but n’est pas de produire une note parfaite, mais une
          prochaine version que vous pourrez expliquer et assumer.
        </p>

        <p>
          Ici, MVP signifie une première version volontairement limitée, déjà
          assez utilisable pour apprendre auprès de vraies personnes. Si vous
          cherchez encore{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            ce qui doit absolument fonctionner pour servir un premier client
          </Link>
          , commencez par ce guide-là. La méthode présentée ici commence après :
          le service existe, et plusieurs améliorations se disputent le même
          prochain lot.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Construire",
              text: "Le problème est observé, le résultat attendu est important et le lot peut être testé.",
              color:
                "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/25",
            },
            {
              label: "Tester",
              text: "L’idée paraît utile, mais les faits manquent encore pour financer toute la fonction.",
              color:
                "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/25",
            },
            {
              label: "Corriger d’abord",
              text: "Une panne, une erreur ou une dépendance empêche déjà le service de fonctionner correctement.",
              color:
                "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/25",
            },
            {
              label: "Reporter",
              text: "Le problème reste flou, une solution plus simple suffit ou un événement futur manque encore.",
              color:
                "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
            },
          ].map((decision) => (
            <div
              key={decision.label}
              className={`rounded-2xl border p-5 ${decision.color}`}
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {decision.label}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {decision.text}
              </p>
            </div>
          ))}
        </div>

        <GuideToc
          items={[
            {
              id: "demande-et-probleme",
              label: "1. Retrouver le travail bloqué derrière la demande",
            },
            {
              id: "avant-classement",
              label: "2. Traiter ce qui ne doit pas entrer dans un score",
            },
            {
              id: "fiche-demande",
              label: "3. Remplir la même fiche pour chaque demande",
            },
            {
              id: "tester-avant-developper",
              label: "4. Tester lorsque les faits manquent",
            },
            {
              id: "score",
              label:
                "5. Utiliser un score seulement entre demandes comparables",
            },
            {
              id: "exemple-fictif",
              label: "6. Comparer cinq demandes fictives",
            },
            {
              id: "ecrire-decision",
              label: "7. Écrire ce qui entre et ce qui attend",
            },
            {
              id: "bon-moment",
              label: "8. Savoir quand développer, acheter ou attendre",
            },
            {
              id: "aide",
              label: "9. Faire examiner le prochain lot",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="demande-et-probleme">
          1. Une demande de fonction cache souvent un travail bloqué
        </h2>

        <p>
          « Il nous faut un export Excel » décrit une solution. La situation
          utile à comparer ressemble plutôt à ceci : « Chaque vendredi, la
          responsable financière retape les mêmes montants pour rapprocher les
          factures, et certaines lignes restent sans correspondance. » Vous
          pouvez alors examiner plusieurs réponses : améliorer l’export
          existant, transmettre les données au logiciel comptable, corriger
          l’écran de rapprochement ou conserver la procédure actuelle.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs"
            target="_blank"
            rel="noopener noreferrer"
          >
            manuel GOV.UK consacré aux besoins des utilisateurs
          </a>{" "}
          recommande de formuler le besoin comme un problème à résoudre et de
          traiter les retours non observés auprès des utilisateurs comme des
          hypothèses. Ce cadre vient des services publics britanniques ; il
          n’est pas une norme pour un SaaS français. La leçon reste utile :
          conservez la phrase du client, puis cherchez le travail qu’elle décrit
          avant de financer sa solution préférée.
        </p>

        <InfoBox
          variant="blue"
          title="Deux demandes identiques peuvent cacher deux problèmes différents"
        >
          Un client veut un export pour archiver. Un autre veut les mêmes
          colonnes pour alimenter un logiciel. Le premier peut avoir besoin d’un
          document lisible ; le second d’une connexion automatique. Le nombre de
          votes ne suffit pas tant que vous n’avez pas séparé ces usages.
        </InfoBox>

        <h2 id="avant-classement">
          2. Traitez d’abord les pannes, les obligations et les travaux
          indispensables
        </h2>

        <p>
          Une liste mélange souvent nouvelles fonctions, erreurs, sécurité,
          engagements signés et travaux invisibles. Les faire concourir dans une
          seule note crée une fausse précision. Une correction grave peut
          recevoir peu de votes parce que les utilisateurs ne la voient pas ;
          elle n’en devient pas moins nécessaire.
        </p>

        <div className="not-prose my-7 grid gap-3">
          {outsideScore.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border p-5 ${item.color}`}
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Le principe d’ingénierie{" "}
          <a
            href="https://engineering.homeoffice.gov.uk/principles/design-from-evidence/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design from evidence du Home Office britannique
          </a>{" "}
          demande que les décisions gardent des éléments vérifiables et rappelle
          que les exigences peuvent venir de l’usage, du droit, de la sécurité
          ou de la performance. Le{" "}
          <a
            href="https://csrc.nist.gov/projects/ssdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            référentiel américain NIST SSDF
          </a>{" "}
          relie aussi le développement sécurisé au risque, aux besoins de
          l’organisation et aux dépendances entre travaux. Ces documents ne
          créent aucune obligation générale en France. Ils soutiennent une
          précaution simple : ne maquillez pas une exigence ou une correction en
          « fonction moins rentable » pour la faire entrer dans le même
          classement.
        </p>

        <h2 id="fiche-demande">
          3. Remplissez la même fiche pour chaque demande
        </h2>

        <p>
          Recopiez les huit lignes ci-dessous pour cinq demandes au maximum.
          Commencer par un petit nombre oblige l’équipe à compléter les
          informations manquantes au lieu d’entretenir une liste infinie. Aucune
          donnée n’est envoyée à Hagnéré Code : vous pouvez reprendre la fiche
          dans votre document ou votre tableur.
        </p>

        <ol className="not-prose my-7 grid gap-3 p-0 md:grid-cols-2">
          {requestFields.map((field) => (
            <li
              key={field.title}
              className="list-none rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {field.title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {field.text}
              </p>
            </li>
          ))}
        </ol>

        <p>
          Si vous ne savez pas remplir la personne, le problème et les faits
          disponibles, la demande n’est pas prête à être chiffrée. Si vous ne
          savez pas nommer le résultat attendu, elle n’est pas prête à gagner
          face aux autres. Si personne ne peut vérifier que le résultat
          fonctionne, le lot n’est pas prêt à être accepté.
        </p>

        <h2 id="tester-avant-developper">
          4. Si vous manquez de faits, testez avant de développer
        </h2>

        <p>
          Une idée prometteuse ne doit pas forcément être abandonnée. Elle peut
          devenir un essai plus petit : produire manuellement un rapport,
          montrer des écrans, accompagner quelques usages ou vérifier une
          connexion isolée. Le but est de faire apparaître une information qui
          changera la décision, pas de fabriquer une démonstration destinée à
          justifier l’idée initiale.
        </p>

        <ol>
          <li>
            <strong>Écrivez ce que vous pensez :</strong> « Si les responsables
            voient les dossiers en retard, ils relancent plus tôt. »
          </li>
          <li>
            <strong>Choisissez un essai plus court :</strong> envoyez un rapport
            préparé manuellement avant de construire le tableau de bord.
          </li>
          <li>
            <strong>Nommez ce que vous observerez :</strong> quelles personnes
            l’ouvrent, quelle action elles prennent et ce qui reste impossible.
          </li>
          <li>
            <strong>Écrivez la suite avant l’essai :</strong> construire,
            modifier l’idée ou l’abandonner selon le résultat.
          </li>
        </ol>

        <p>
          La{" "}
          <a
            href="https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test Card publiée par Strategyzer
          </a>{" "}
          sépare ce qui doit être vrai, la manière de le vérifier, la mesure et
          le seuil choisi. C’est un outil méthodologique édité par une société
          de conseil et de formation, pas une garantie de marché. Utilisez-le
          seulement pour rendre l’essai falsifiable : un résultat défavorable
          doit pouvoir conduire à ne pas construire.
        </p>

        <h2 id="score">
          5. Un score n’aide que si les demandes sont comparables
        </h2>

        <p>
          RICE est une méthode de classement qui combine la portée sur une
          période, l’effet attendu par personne, le niveau de confiance dans les
          informations et le travail nécessaire. Cette méthode a été développée
          chez Intercom et présentée dans un article signé Sean McBride.
          L’article recommande d’utiliser des mesures réelles quand elles
          existent, d’inclure le temps de toute l’équipe et précise que le
          résultat n’est pas une règle absolue. Les dépendances ou les fonctions
          indispensables peuvent justifier un autre ordre. La{" "}
          <a
            href="https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            présentation originale de RICE chez Intercom
          </a>{" "}
          reste la source de cette définition.
        </p>

        <FormulaBox>
          {
            "RICE = portée sur une même période × effet estimé par personne × confiance\n       ÷ travail total de l’équipe"
          }
        </FormulaBox>

        <p>
          Pour pouvoir refaire le calcul, fixez une période commune et la même
          unité de portée pour toutes les demandes. Annoncez l’échelle employée
          pour l’effet, convertissez la confiance en fraction — 80&nbsp;%
          devient 0,8 — et comptez l’effort total de tous les métiers dans une
          même unité, par exemple des personnes-mois. Si l’une des lignes compte
          des utilisateurs mensuels, l’autre des ventes annuelles et la
          troisième un risque juridique, le résultat ne compare rien d’honnête.
          Ne modifiez pas les valeurs pour faire remonter la solution que vous
          avez déjà choisie. Dans ce cas, abandonnez le score et écrivez les
          raisons de la décision.
        </p>

        <InfoBox
          variant="amber"
          title="MoSCoW ne rend pas non plus la décision automatique"
        >
          Classer une demande en « indispensable », « importante », « possible »
          ou « pas maintenant » rend les exclusions visibles. Cela ne dit pas à
          lui seul pourquoi elle est indispensable, combien de travail elle
          demande ni quel résultat elle changera. Conservez donc la fiche de
          huit lignes, même avec cette classification.
        </InfoBox>

        <h2 id="exemple-fictif">
          6. Voyons ce que cela change sur cinq demandes fictives
        </h2>

        <p>
          <strong>Exemple illustratif fictif :</strong> le SaaS et les demandes
          ci-dessous sont entièrement inventés. Ils ne décrivent ni un client,
          ni un devis, ni un résultat obtenu par Hagnéré Code. Ils montrent
          seulement comment des phrases toutes qualifiées d’« urgentes » peuvent
          conduire à quatre décisions différentes.
        </p>

        <div className="not-prose my-7 space-y-4">
          {fictiveRequests.map((item) => (
            <article
              key={item.request}
              className={`rounded-2xl border p-5 ${toneClasses[item.tone]}`}
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.request}
              </h3>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Ce que la fiche révèle
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.finding}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Décision possible
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {item.decision}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Le prochain lot ne reprend donc pas simplement les demandes qui
          semblent les plus séduisantes ou les plus souvent citées. Dans ce
          scénario, il commence par la correction qui protège le service
          existant. Il peut ensuite traiter la validation groupée si l’équipe
          confirme son effet, ses droits d’accès et la manière d’annuler une
          erreur. Le rapport manuel sert de test avant de financer un tableau de
          bord. La connexion reste un test de faisabilité, puis un report tant
          que les informations techniques et contractuelles manquent. La
          personnalisation des couleurs reste reportée.
        </p>

        <h3>Une demande remplie sur les huit lignes</h3>

        <p>
          Voici la première demande développée. Les faits restent fictifs : dans
          une entreprise réelle, ils devraient venir des utilisateurs, des
          tickets et des journaux de l’application.
        </p>

        <dl className="not-prose my-7 grid gap-3 md:grid-cols-2">
          {completedRequestExample.map(([term, description]) => (
            <div
              key={term}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <dt className="text-sm font-semibold text-zinc-950 dark:text-white">
                {term}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {description}
              </dd>
            </div>
          ))}
        </dl>

        <InfoBox
          variant="blue"
          title="Le procès-verbal obtenu dans cet exemple"
        >
          Correction préalable : empêcher la double facture et vérifier les
          reprises réseau. Fonction retenue sous condition : validation groupée,
          avec droits d’accès et annulation testés. Test : envoyer d’abord un
          rapport manuel avant le tableau de bord. Reports : personnalisation
          des couleurs ; connexion complète tant que les accès, le contrat et le
          responsable tiers manquent. Réexamen : après le test du rapport ou la
          réception des informations de connexion.
        </InfoBox>

        <h2 id="ecrire-decision">
          7. Écrivez ce qui entre dans la prochaine version — et pourquoi
        </h2>

        <p>
          Une décision utile se termine par un document court. Il ne s’agit pas
          d’une liste de souhaits pour l’année. Il décrit le prochain lot, le
          résultat qui permettra de l’accepter, les demandes laissées de côté et
          les événements qui permettront de les rouvrir.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm sm:p-6 dark:border-zinc-800">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
            Décision à recopier
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`RÉSULTAT ATTENDU DE LA PROCHAINE VERSION :

CORRECTION À TERMINER AVANT :

FONCTIONS RETENUES :

PERSONNES QUI LES TESTERONT :

CE QUI PROUVERA QU’ELLES FONCTIONNENT :

DEMANDES À TESTER AVANT DE DÉVELOPPER :

DEMANDES REPORTÉES ET RAISON :

ÉVÉNEMENT QUI ROUVRIRA CHAQUE DEMANDE :

RESPONSABLE DE LA DÉCISION :

DATE DE LA PROCHAINE REVUE :`}
          </pre>
        </div>

        <p>
          Évitez « peut-être au trimestre prochain ». Écrivez plutôt « à
          réexaminer lorsque nous aurons observé le rapport manuel avec les
          personnes concernées » ou « lorsque le partenaire aura fourni sa
          documentation et nommé un responsable ». Vous ne promettez pas la
          fonction ; vous promettez une nouvelle décision lorsque les
          informations manquantes existent.
        </p>

        <h2 id="bon-moment">
          8. Quand faut-il développer, acheter ou attendre ?
        </h2>

        <div className="not-prose my-7 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "Développer",
              text: "Le SaaS est utilisé, le problème est observé, le résultat compte pour la cible choisie et votre équipe peut vérifier la fonction.",
            },
            {
              title: "Acheter ou connecter",
              text: "Une fonction standard existe déjà et sa configuration, son abonnement et sa sortie coûtent moins que sa construction et son entretien.",
            },
            {
              title: "Attendre ou tester",
              text: "La demande vient d’une intuition, personne n’est disponible pour essayer, les données manquent ou une décision plus importante reste ouverte.",
            },
          ].map((choice) => (
            <div
              key={choice.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {choice.title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {choice.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Revenez à la{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            validation de l’idée
          </Link>{" "}
          si le SaaS n’a encore aucun utilisateur ni acheteur identifiable. Si
          vous hésitez sur l’objet à construire pour répondre à une question,
          comparez plutôt{" "}
          <Link href="/guides/mvp-prototype-ou-poc">
            prototype, POC, pilote et MVP
          </Link>
          . Si le lot est choisi mais difficile à dater, construisez ensuite son{" "}
          <Link href="/guides/combien-de-temps-developper-saas">
            calendrier à partir des travaux et des attentes réelles
          </Link>
          .
        </p>

        <h2 id="aide">9. Que peut apporter Hagnéré Code à cette décision ?</h2>

        <h3>Le bon contexte pour nous appeler</h3>

        <p>
          Hagnéré Code peut examiner avec vous cinq demandes, vérifier les
          informations qui manquent, séparer les corrections du nouveau
          développement et transformer le choix retenu en un lot testable. Le
          premier échange sert à comprendre le produit, les personnes qui
          l’utilisent et la décision à prendre. Il ne garantit ni une vente, ni
          une date, ni que le développement sur mesure sera la meilleure
          réponse.
        </p>

        <h3>Le cas où une autre étape doit passer avant</h3>

        <p>
          L’échange est moins adapté si personne n’utilise encore le produit, si
          un outil existant couvre déjà le besoin, si un incident de sécurité
          exige une intervention immédiate ou si l’entreprise refuse de reporter
          la moindre demande. Dans ces situations, valider, acheter, contenir
          l’incident ou nommer un décideur doit précéder le prochain lot.
        </p>

        <GuideInlineCTA
          title="Choisir le prochain lot de votre SaaS"
          description="Apportez jusqu’à cinq demandes et les faits disponibles. Nous cherchons avec vous ce qui doit être corrigé, testé, développé ou reporté, puis les informations nécessaires à un devis sérieux."
          tags={[
            "Un prochain lot explicable",
            "Une solution standard possible",
            "Un report possible",
          ]}
          ctaLabel="Faire examiner mes demandes"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Cette page propose une méthode de décision éditoriale, pas une norme
          de gestion de produit. Elle ne remplace ni l’analyse d’un contrat, ni
          une intervention de sécurité, ni l’étude de vos utilisateurs. Aucun
          seuil de clients, de votes ou de budget n’est universel.
        </p>

        <ul>
          <li>
            <a
              href="https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK Service Manual — Learning about users and their needs
            </a>{" "}
            : formuler les besoins comme des problèmes et continuer à les
            vérifier pendant la vie du service.
          </li>
          <li>
            <a
              href="https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sean McBride / Intercom — RICE
            </a>{" "}
            : définition originale de la méthode, données à employer et limites
            du score.
          </li>
          <li>
            <a
              href="https://www.strategyzer.com/library/validate-your-ideas-with-the-test-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategyzer — Test Card
            </a>{" "}
            : hypothèse, manière de vérifier, mesure et seuil avant
            l’expérience.
          </li>
          <li>
            <a
              href="https://engineering.homeoffice.gov.uk/principles/design-from-evidence/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home Office Engineering — Design from evidence
            </a>{" "}
            : décisions documentées et exigences venant de plusieurs sources.
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/projects/ssdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIST — Secure Software Development Framework
            </a>{" "}
            : pratiques de développement sécurisé à adapter aux risques, besoins
            et dépendances.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
