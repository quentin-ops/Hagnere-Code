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
import { formatGuideDate, getGuide } from "@/lib/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";

const guide = getGuide("prioriser-fonctionnalites-mvp-saas");

export const metadata = buildGuideMetadata(
  guide,
  "Prioriser les fonctionnalités d’un SaaS : calculs et lot de 30 jours",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "SaaS : prioriser les fonctionnalités après le MVP",
);

const faqItems = [
  {
    question: "Faut-il toujours écouter le client qui paie le plus ?",
    answer:
      "Non, mais sa demande mérite un examen économique séparé. Vérifiez la contribution réellement à risque, l’engagement signé, la probabilité de départ, l’utilité pour le segment visé et le coût de construction puis d’entretien. Comparez aussi une option payante, une intégration standard, un service manuel ou un refus.",
  },
  {
    question: "Combien de demandes clients suffisent pour développer ?",
    answer:
      "Aucun nombre universel ne suffit. Trois demandes peuvent cacher trois problèmes différents, tandis qu’une seule observation peut révéler un blocage majeur. Comparez la situation, les faits disponibles, le résultat attendu et les personnes réellement concernées.",
  },
  {
    question: "RICE ou MoSCoW : quelle méthode choisir ?",
    answer:
      "RICE classe des candidats comparables avec portée, impact, confiance et effort. MoSCoW protège le contenu d’un lot déjà borné. WSJF met davantage en avant le coût du retard et la taille. Kano explore la perception de valeur ; une carte du parcours vérifie l’ordre d’usage. Ils ne répondent pas à la même question.",
  },
  {
    question: "Comment calculer un score RICE ?",
    answer:
      "Choisissez une période et une unité de portée communes. Multipliez la portée par l’impact et la confiance, puis divisez par l’effort total. Publiez les hypothèses : un score de 32 n’a aucun sens si une ligne compte des comptes par trimestre et l’autre des clics mensuels.",
  },
  {
    question: "La sécurité doit-elle entrer dans le score RICE ?",
    answer:
      "Pas lorsqu’il s’agit d’une correction critique ou d’une exigence confirmée. Traitez d’abord les incidents, obligations applicables, engagements signés et dépendances indispensables. Dimensionnez ensuite le travail ; ne laissez pas une exigence nécessaire perdre contre une fonction plus populaire.",
  },
  {
    question: "Faut-il acheter un module avant de développer ?",
    answer:
      "Il faut au minimum l’éprouver sur le même résultat attendu. Comparez abonnement, configuration, intégration, données, droits, support et sortie avec la construction et la maintenance. Acheter n’est pas toujours meilleur, mais ignorer une capacité standard rend le sur-mesure difficile à défendre.",
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
    text: "Corriger, réutiliser ou acheter, tester, construire ou reporter ; puis écrire ce qui fera rouvrir la demande.",
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
  {
    title: "Un risque critique de sécurité, de confidentialité ou d’accès",
    text: "Confirmez le risque, son exposition et la réponse proportionnée. Un correctif nécessaire ne doit pas perdre un concours de votes ; une crainte vague ne doit pas non plus devenir un chantier illimité.",
    color:
      "border-fuchsia-200 bg-fuchsia-50 dark:border-fuchsia-900 dark:bg-fuchsia-950/25",
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
      "La vente est importante. Un connecteur standard existe, mais les accès, les données échangées, les droits, le responsable tiers et le coût de sortie restent à tester.",
    decision:
      "Éprouver le connecteur sur un flux isolé ; acheter et connecter s’il passe les tests avant d’envisager un développement propre.",
    tone: "violet",
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
  violet:
    "border-violet-200 bg-violet-50/60 dark:border-violet-900 dark:bg-violet-950/20",
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
    "Corriger avant le nouveau lot. La correction est acceptée après les tests de reprise réseau et le contrôle des traces techniques ; elle est rouverte si un nouveau doublon apparaît.",
  ],
] as const;

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "SaaS : prioriser les fonctionnalités après le MVP" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Dix demandes, du temps pour en réaliser deux : écartez les urgences à traiter tout de suite, comparez les autres avec les mêmes critères et choisissez 30 jours de travail réellement tenables."
        heroAction={{
          href: "#kit",
          label: "Télécharger la grille",
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
            title: "5 issues possibles",
            description: "",
            color: "violet",
          },
          {
            number: "04",
            title: "4 scores recalculés",
            description: "",
            color: "blue",
          },
          {
            number: "30",
            title: "30 jours à répartir",
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
            Vos clients réclament dix fonctionnalités, votre équipe peut en
            livrer deux et chacune semble urgente. Comment choisir sans céder au
            plus insistant ?
          </strong>{" "}
          Commencez par mettre à part les pannes, les obligations confirmées,
          les engagements écrits et les travaux sans lesquels le reste ne peut
          pas fonctionner. Pour chaque autre demande, notez qui est bloqué, ce
          qui a été observé et le résultat à améliorer. Notre avis est simple :
          <strong> aucun score ne doit décider à votre place</strong>. Il sert
          seulement à comparer des demandes à partir des mêmes informations.
          Nous allons appliquer plusieurs méthodes aux mêmes demandes fictives,
          recalculer une estimation trompeuse, mesurer le gain de temps attendu
          et choisir des travaux qui tiennent dans 30 journées de travail. À la
          fin, vous saurez quoi corriger, acheter, tester, développer ou
          reporter — et à quelle condition rouvrir le sujet.
        </p>

        <p>
          Ici, MVP signifie une première version volontairement limitée, déjà
          assez utilisable pour apprendre auprès de vraies personnes. Si vous
          cherchez encore{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            ce qui doit absolument fonctionner pour servir un premier client
          </Link>
          , commencez par ce guide-là. La méthode présentée ici commence après :
          le service existe déjà et plusieurs améliorations se disputent le même
          ensemble de travaux pour la prochaine version — ce que la suite
          appellera le « lot ».
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {[
            {
              label: "Corriger",
              text: "Le service est déjà faux, dangereux ou incapable de tenir une exigence confirmée.",
              color:
                "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/25",
            },
            {
              label: "Réutiliser ou acheter",
              text: "Une capacité standard peut couvrir le résultat avec un coût total acceptable.",
              color:
                "border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/25",
            },
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
              label: "1. Partir du travail bloqué",
            },
            {
              id: "avant-classement",
              label: "2. Sortir les non-négociables du score",
            },
            {
              id: "objectif",
              label: "3. Choisir un objectif et un segment",
            },
            {
              id: "fiche-demande",
              label: "4. Qualifier chaque demande",
            },
            {
              id: "tester-avant-developper",
              label: "5. Tester ou réutiliser avant de construire",
            },
            {
              id: "score",
              label: "6. Vérifier ce que dit réellement le score",
            },
            {
              id: "methodes",
              label: "7. Choisir la méthode selon la question à trancher",
            },
            {
              id: "economie",
              label: "8. Chiffrer le gain et le test",
            },
            {
              id: "capacite",
              label: "9. Composer un lot de 30 jours",
            },
            {
              id: "ecrire-decision",
              label: "10. Écrire ce qui entre et ce qui attend",
            },
            {
              id: "gros-client",
              label: "11. Traiter la demande du plus gros client",
            },
            {
              id: "kit",
              label: "12. Télécharger la grille de décision",
            },
            { id: "aide", label: "Faire examiner le prochain lot" },
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
          traiter les opinions ou suggestions qui ne viennent pas d’utilisateurs
          comme des hypothèses à vérifier. Ce cadre vient des services publics
          britanniques ; il n’est pas une norme pour un SaaS français. La leçon
          reste utile : conservez la phrase du client, puis cherchez le travail
          qu’elle décrit avant de financer sa solution préférée.
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
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 800-218, version 1.1 du SSDF
          </a>{" "}
          relie aussi le développement sécurisé au risque, aux besoins de
          l’organisation et aux dépendances entre travaux. La{" "}
          <a
            href="https://csrc.nist.gov/Projects/ssdf/publications"
            target="_blank"
            rel="noopener noreferrer"
          >
            page officielle des publications SSDF
          </a>{" "}
          indiquait, au 24 juillet 2026, que la version 1.1 était finale et que
          la version 1.2 restait un projet public. Ces documents ne créent
          aucune obligation générale en France. Ils soutiennent une précaution
          simple : ne maquillez pas une exigence ou une correction en « fonction
          moins rentable » pour la faire entrer dans le même classement.
        </p>

        <h2 id="objectif">
          3. Un lot ne peut pas servir trois objectifs opposés
        </h2>

        <p>
          Avant les scores, écrivez la raison d’être de la prochaine version. «
          Améliorer le produit » n’est pas un objectif. « Réduire le temps de
          validation des responsables financiers des PME de 20 à 100 salariés,
          pendant le prochain trimestre, sans augmenter les doubles factures »
          donne une cible, une situation, une mesure et une limite. Une demande
          qui ne peut pas expliquer son lien avec cet objectif sort du concours
          — sauf si elle appartient aux non-négociables traités juste avant.
        </p>

        <GuideTable
          caption="Le filtre stratégique avant toute note"
          headers={[
            "Question",
            "Réponse fictive",
            "Effet sur la liste de demandes",
          ]}
          rows={[
            [
              "Pour qui ?",
              "Responsables financiers de PME de 20 à 100 salariés.",
              "Une préférence d’administrateur isolé ne représente pas ce segment.",
            ],
            [
              "Quel résultat ?",
              "Valider plus vite, avec une facture unique et traçable.",
              "La validation groupée et la correction du doublon restent candidates.",
            ],
            [
              "Sur quel horizon ?",
              "Le prochain trimestre.",
              "Portée, coût du retard et capacité utilisent la même période.",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Une fonction populaire peut sortir">
          <p className="mb-0">
            Soixante comptes visitent peut-être l’écran des couleurs. Cela ne
            prouve ni qu’ils ont un problème, ni que cette préférence sert
            l’objectif du trimestre. Mesurez les comptes réellement concernés
            avant de confondre disponibilité d’une donnée et pertinence d’une
            donnée.
          </p>
        </InfoBox>

        <h2 id="fiche-demande">
          4. Remplissez la même fiche pour chaque demande
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
          5. Si vous manquez de faits, testez ou réutilisez avant de développer
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
          seulement pour construire un essai capable de contredire votre idée :
          un résultat défavorable doit pouvoir conduire à ne pas construire.
        </p>

        <p>
          Cherchez ensuite une solution déjà disponible : fonction déjà
          présente, module, interface de programmation, connecteur ou procédure
          mieux outillée. Le critère 6 du{" "}
          <a
            href="https://www.digital.gov.au/policy/digital-experience/digital-service-standard/criteron-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Service Standard australien
          </a>{" "}
          demande explicitement de ne pas réinventer ce qui fonctionne déjà. Son
          périmètre est le service public australien, pas votre SaaS ; la
          question reste excellente. Comparez l’abonnement, le paramétrage, les
          données, les droits, le support et la sortie avant de conclure
          qu’acheter serait plus simple ou que construire serait plus libre.
        </p>

        <h2 id="score">
          6. Comparez les mêmes informations avant de calculer un score
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
          même unité. Ici, nous utilisons des jours-personnes de huit heures :
          10 jours de construction plus 10 heures internes deviennent 11,25
          jours. Le tableau de bord représente 18 jours plus 20 heures internes,
          soit 20,5 jours. Si l’une des lignes compte des utilisateurs mensuels,
          l’autre des ventes annuelles et la troisième un risque juridique, le
          résultat ne compare rien d’honnête. Ne modifiez pas les valeurs pour
          faire remonter la solution que vous avez déjà choisie.
        </p>

        <p>
          L’impact reprend l’échelle illustrative publiée par Intercom :
          <strong>
            {" "}
            3 pour massif, 2 pour élevé, 1 pour moyen, 0,5 pour faible et 0,25
            pour minimal
          </strong>
          . Cette échelle est une convention d’estimation, pas une mesure
          scientifique. Définissez chaque niveau par rapport à l’objectif du lot
          et utilisez la même convention pour tous les candidats.
        </p>

        <GuideTable
          caption="Exemple fictif RICE — même trimestre, portée en comptes et effort en jours-personnes"
          headers={["Candidat", "Hypothèses annoncées", "Score"]}
          rows={[
            [
              "Validation groupée",
              "40 comptes × impact 2 × confiance 0,8 ÷ effort 11,25.",
              "5,69",
            ],
            [
              "Couleurs — mesure initiale",
              "60 visites × impact 0,5 × confiance 0,8 ÷ effort 5.",
              "4,80, mais la portée est fausse",
            ],
            [
              "Tableau de bord",
              "120 comptes × impact 1 × confiance 0,5 ÷ effort 20,5.",
              "2,93",
            ],
            [
              "Intégration partenaire",
              "8 comptes × impact 3 × confiance 0,5 ÷ effort 12.",
              "1,00",
            ],
          ]}
        />

        <p>
          Dans les données, soixante comptes ont visité les réglages de couleur.
          Après lecture des entretiens, seuls six ont formulé le problème
          étudié. La portée corrigée n’est donc plus 60, mais 6. Le score tombe
          de 4,80 à 0,48. Un chiffre disponible dans les statistiques n’est pas
          automatiquement la bonne mesure.
        </p>

        <FormulaBox>
          {`Score corrigé des couleurs
= 6 comptes × 0,5 × 0,8 ÷ 5 jours-personnes
= 0,48

Sensibilité de la validation groupée
Confiance 0,8 : 40 × 2 × 0,8 ÷ 11,25 = 5,69
Confiance 0,4 : 40 × 2 × 0,4 ÷ 11,25 = 2,84

Le tableau de bord reste à 2,93 : une confiance divisée par deux inverse l'ordre.`}
        </FormulaBox>

        <InfoBox variant="emerald" title="Notre position professionnelle">
          <p className="mb-0">
            Un score ne décide pas. Il oblige l’équipe à montrer ses hypothèses.
            Si une ligne RICE ne résiste pas à la correction de sa portée ou à
            une baisse plausible de confiance, financez l’apprentissage avant la
            fonctionnalité. Nous déconseillons de vendre une construction sur
            mesure pour défendre un score que personne ne sait refaire.
          </p>
        </InfoBox>

        <h2 id="methodes">
          7. Quelle méthode utiliser selon la décision à prendre ?
        </h2>

        <p>
          Les catalogues de méthodes donnent parfois l’impression qu’il faut
          choisir un champion. C’est une mauvaise question. Utilisez chaque
          cadre pour le type de doute qu’il sait rendre visible, puis gardez la
          décision humaine et ses preuves.
        </p>

        <GuideTable
          caption="Cinq cadres appliqués à la même liste de demandes fictives"
          headers={["Cadre", "Question utile", "Ce qu’il révèle ici"]}
          rows={[
            [
              "RICE",
              "Quel ordre provisoire entre candidats comparables ?",
              "La validation groupée gagne, puis son avance devient fragile quand la confiance baisse.",
            ],
            [
              "MoSCoW",
              "Que doit contenir ce lot à horizon fixé ?",
              "La correction de double facture est indispensable ; les couleurs sont explicitement « pas cette fois ».",
            ],
            [
              "WSJF",
              "Quel travail court évite le plus de valeur perdue par le retard ?",
              "Une intégration liée à une échéance peut remonter malgré sa faible portée.",
            ],
            [
              "Kano",
              "Comment la présence ou l’absence est-elle perçue ?",
              "L’absence de facture fiable est un défaut de base ; la couleur peut rester indifférente.",
            ],
            [
              "Carte du parcours",
              "Dans quel ordre l’utilisateur accomplit-il son travail ?",
              "Corriger, sélectionner, valider, facturer puis analyser expose les dépendances.",
            ],
          ]}
        />

        <h3>Quand le coût du retard peut changer l’ordre — méthode WSJF</h3>

        <p>
          <strong>Exemple fictif :</strong> l’équipe note sur la même échelle
          relative la valeur pour le client et l’entreprise, l’urgence dans le
          temps, la réduction du risque ou l’ouverture d’une opportunité, puis
          la taille du travail. Les deux demandes ci-dessous ont un effort
          voisin et reçoivent donc la même taille relative de 8. Ces points ne
          sont ni des euros, ni des probabilités.
        </p>

        <GuideTable
          caption="Application illustrative de WSJF à deux demandes"
          headers={["Demande", "Hypothèses relatives", "Score WSJF"]}
          rows={[
            [
              "Validation groupée",
              "Valeur 13 + urgence 5 + risque/opportunité 3 = 21 ; taille 8.",
              "21 ÷ 8 = 2,63",
            ],
            [
              "Intégration partenaire avant une date de bascule",
              "Valeur 8 + urgence 13 + risque/opportunité 8 = 29 ; taille 8.",
              "29 ÷ 8 = 3,63",
            ],
          ]}
        />

        <p>
          L’intégration passe devant dans ce calcul parce que le retard ferait
          manquer une échéance fictive, malgré sa portée limitée à huit comptes.
          Si cette échéance n’est pas confirmée, sa note d’urgence doit baisser.
          WSJF ne découvre pas le coût du retard : il force l’équipe à montrer
          l’hypothèse qui le fait monter.
        </p>

        <p>
          La source maintenue par l’{" "}
          <a
            href="https://www.agilebusiness.org/resource/what-is-moscow-prioritization/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agile Business Consortium
          </a>{" "}
          rappelle que MoSCoW signifie « indispensable », « important », «
          possible » et « pas cette fois », dans un horizon défini. La{" "}
          <a
            href="https://framework.scaledagile.com/wsjf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation SAFe sur WSJF
          </a>{" "}
          estime pour sa part un coût relatif du retard divisé par une taille
          relative. Ces cadres appartiennent à leurs contextes ; leurs nombres
          ne sont ni des euros, ni une preuve d’effet réel.
        </p>

        <InfoBox
          variant="blue"
          title="L’effet sur la satisfaction reste ici une hypothèse — lecture Kano"
        >
          Dire que la fiabilité des factures serait une attente de base et que
          les couleurs laisseraient les utilisateurs indifférents n’est pas un
          résultat mesuré. Il faudrait le vérifier auprès d’utilisateurs du
          segment cible. Sans cette recherche, utilisez Kano pour formuler une
          question, pas pour maquiller une intuition en verdict.
        </InfoBox>

        <h3>La même liste de demandes conduit à cinq issues différentes</h3>

        <p>
          <strong>Exemple illustratif fictif :</strong> le SaaS et les demandes
          ci-dessous sont entièrement inventés. Ils ne décrivent ni un client,
          ni un devis, ni un résultat obtenu par Hagnéré Code. Ils montrent
          seulement comment des phrases toutes qualifiées d’« urgentes » peuvent
          conduire à corriger, réutiliser ou acheter, tester, construire ou
          reporter.
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
          bord. Pour la connexion, l’équipe éprouve d’abord le connecteur
          standard sur un flux isolé ; elle l’achète s’il passe les tests et ne
          développe que si un écart important demeure. La personnalisation des
          couleurs reste reportée.
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
          rapport manuel avant le tableau de bord. Réutilisation : tester le
          connecteur existant avant toute reconstruction. Report :
          personnalisation des couleurs. Réexamen : après le test du rapport, du
          connecteur ou l’arrivée d’une preuve d’usage nouvelle.
        </InfoBox>

        <h2 id="economie">
          8. Un gain de temps doit être chronométré, pas seulement ressenti
        </h2>

        <p>
          Prenons la validation groupée. L’équipe réalise 30 validations par
          semaine pendant 46 semaines et valorise une heure chargée à 35 €.
          Trois chronométrages donnent des hypothèses de 2, 4 et 8 minutes
          évitées par validation. Le coût initial fictif est de 7 350 € : 10
          jours de construction à 700 € et 10 heures internes à 35 €. La
          maintenance récurrente ajoute 100 € par mois, soit 1 200 € par an. Ce
          n’est ni un tarif Hagnéré Code, ni une moyenne de marché.
        </p>

        <GuideTable
          caption="Valeur annuelle fictive du temps récupéré"
          headers={["Scénario", "Calcul", "Résultat"]}
          rows={[
            [
              "Simple — 2 min",
              "30 × 2 min ÷ 60 × 46 × 35 €.",
              "46 h ; gain net 410 €/an ; point mort simple 17,93 ans.",
            ],
            [
              "Central — 4 min",
              "30 × 4 min ÷ 60 × 46 × 35 €.",
              "92 h ; gain net 2 020 €/an ; point mort simple 3,64 ans.",
            ],
            [
              "Exigeant — 8 min",
              "30 × 8 min ÷ 60 × 46 × 35 €.",
              "184 h ; gain net 5 240 €/an ; point mort simple 1,40 an.",
            ],
          ]}
        />

        <FormulaBox>
          {`Scénario central
= 30 validations × 4 min ÷ 60 × 46 semaines × 35 €/h
= 3 220 € par an

Coût fictif de première année
= 10 jours × 700 € + 10 h internes × 35 € + 12 × 100 €
= 8 550 €

Investissement initial = 7 350 €
Gain net annuel central = 3 220 € - 1 200 € = 2 020 €

Point mort simple central
= 7 350 € ÷ 2 020 €
= 3,64 ans`}
        </FormulaBox>

        <p>
          Ce calcul exclut volontairement réduction des erreurs, adoption,
          valeur client, fiscalité, coût du capital, inflation et évolution du
          volume. Il suppose aussi que les 1 200 € de maintenance restent
          constants. Ajoutez un effet seulement si vous pouvez le mesurer
          séparément. Le contrôle inverse retrouve les 4 minutes :{" "}
          <code>3 220 ÷ 35 = 92 heures</code>, puis{" "}
          <code>92 × 60 ÷ (30 × 46) = 4 minutes</code>.
        </p>

        <h3>Tester le tableau de bord coûte ici 5,4 % de sa construction</h3>

        <p>
          Trois rapports manuels demandent, dans cet autre exemple fictif, 6
          heures chacun à 40 €, soit 720 €. Le tableau de bord est estimé à 18
          jours à 700 € plus 20 heures internes à 35 €, soit 13 300 €. Le test
          représente <code>720 ÷ 13 300 = 5,4&nbsp;%</code> de cette
          construction. La condition est écrite avant : si les trois rapports ne
          déclenchent aucune décision identifiable, le tableau de bord n’est pas
          construit. S’ils sont utiles mais toujours coûteux à produire,
          l’équipe recalcule l’automatisation.
        </p>

        <h2 id="capacite">
          9. Une priorité qui ne tient pas dans la capacité n’est pas un plan
        </h2>

        <p>
          Le prochain horizon dispose de 30 jours-personnes réels, après retrait
          des congés, du support et des engagements déjà pris. La décision ne
          consiste plus à dire que cinq idées sont importantes : elle consiste à
          fermer la somme.
        </p>

        <GuideTable
          caption="Lot fictif fermé à 30 jours-personnes"
          headers={["Travail retenu", "Capacité", "Pourquoi maintenant"]}
          rows={[
            [
              "Correction de la double facture",
              "8 jours",
              "Le service existant produit une erreur reproduite sans contournement sûr.",
            ],
            [
              "Validation groupée",
              "12 jours",
              "L’estimation de 11,25 jours est arrondie à 12 pour réserver la capacité sans la sous-estimer.",
            ],
            [
              "Trois tests de rapport",
              "3 jours",
              "Apprendre avant le tableau de bord estimé à 18 jours.",
            ],
            [
              "Incertitude, mise en production et suivi",
              "7 jours",
              "Absorber les reprises, tests finaux et premières corrections sans dépasser.",
            ],
          ]}
        />

        <FormulaBox>
          {`8 jours + 12 jours + 3 jours + 7 jours = 30 jours

Capacité restante = 30 - 30 = 0 jour`}
        </FormulaBox>

        <p>
          Le tableau de bord et l’intégration complète ne perdent pas parce
          qu’ils seraient inutiles. Ils restent dehors parce que la capacité est
          épuisée et que le rapport manuel ou le test du connecteur doit encore
          produire une preuve. Ajouter l’un d’eux sans retirer autre chose
          transforme le planning en promesse mensongère.
        </p>

        <h2 id="ecrire-decision">
          10. Écrivez ce qui entre dans la prochaine version — et pourquoi
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

        <h2 id="gros-client">
          11. Le plus gros client mérite un dossier économique, pas un
          passe-droit
        </h2>

        <p>
          « Il représente 36 000 € par an et menace de partir » est une
          information importante, mais encore incomplète. Dans cet exemple
          fictif, les coûts directs de service sont estimés à 10 000 € : la
          contribution annuelle avant frais généraux est donc de 26 000 €. Ce
          montant n’est pas automatiquement la valeur de la fonctionnalité. Il
          faut encore estimer quelle part du renouvellement dépend réellement de
          cette demande.
        </p>

        <GuideTable
          caption="Sensibilité fictive de la contribution annuelle réellement à risque"
          headers={["Hypothèse", "Calcul", "Valeur à comparer"]}
          rows={[
            [
              "20 % du renouvellement dépend de la demande",
              "26 000 € × 20 %.",
              "5 200 €",
            ],
            [
              "50 % du renouvellement dépend de la demande",
              "26 000 € × 50 %.",
              "13 000 €",
            ],
            [
              "70 % du renouvellement dépend de la demande",
              "26 000 € × 70 %.",
              "18 200 €",
            ],
          ]}
        />

        <p>
          Demandez ensuite si la fonction sert le segment, si elle est écrite
          dans le contrat, si un service manuel peut tenir l’échéance et combien
          elle coûtera à maintenir après ce client. Un compte unique peut
          légitimement gagner : revenu, risque et stratégie comptent. Mais il ne
          doit pas transformer le SaaS commun en logiciel interne gratuit. Selon
          le cas, la bonne réponse peut être une fonction produit, une option
          payante, une prestation séparée, un connecteur standard ou un refus
          assumé.
        </p>

        <h3>Développer, acheter ou attendre : la décision finale</h3>

        <div className="not-prose my-7 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "Développer",
              text: "Le problème est observé, le résultat compte pour la cible, deux solutions existantes échouent et la valeur couvre construction, entretien et sortie.",
            },
            {
              title: "Acheter ou connecter",
              text: "Une fonction standard passe les cas réels et son abonnement, son intégration, son support et sa sortie coûtent moins que la construction.",
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

        <h2 id="kit">12. Téléchargez la grille et refaites les calculs</h2>

        <p>
          La grille reprend le filtre des non-négociables, l’objectif, le
          segment, les huit lignes de qualification, les quatre variables RICE,
          la décision, les jours consommés et le signal de réexamen. Les
          exemples fictifs sont fournis avec les formules arithmétiques ;
          effacez leurs valeurs et remplacez-les par vos mesures. Le fichier ne
          demande ni adresse e-mail ni formulaire.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20 sm:p-6">
          <p className="m-0 text-sm font-bold text-violet-950 dark:text-violet-100">
            Kit de priorisation du prochain lot SaaS
          </p>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-violet-900 dark:text-violet-200">
            Dix lignes prêtes à compléter, quatre exemples calculés, une colonne
            de capacité et un journal de décision. Le CSV s’ouvre dans Excel,
            Numbers, LibreOffice ou Google Sheets.
          </p>
          <a
            href="/ressources/kit-priorisation-fonctionnalites-saas.csv"
            download
            className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-bold text-white no-underline transition-colors hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
          >
            Télécharger la grille CSV
          </a>
        </div>

        <h2 id="aide">
          Ce que vous devez obtenir après une revue de vos demandes
        </h2>

        <h3>Le bon contexte pour nous appeler</h3>

        <p>
          Hagnéré Code peut examiner cinq demandes avec vous. Nous vérifions
          combien de clients sont réellement concernés, ce qui reste incertain
          et le temps que votre équipe peut consacrer à la prochaine version.
          Vous repartez avec une décision argumentée pour chaque demande, les
          travaux qui tiennent dans le temps disponible, ce qui est écarté et
          les conditions précises pour reconsidérer le sujet. Notre
          recommandation peut être de corriger, d’acheter un outil, de tester,
          d’attendre ou de développer.
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
          title="Décider quelles demandes traiter maintenant"
          description="Apportez jusqu’à cinq demandes, l’objectif de la prochaine version et le temps que votre équipe peut réellement y consacrer. Vous repartez avec un choix argumenté pour chacune : corriger, acheter, tester, développer ou reporter."
          tags={[
            "5 demandes comparées",
            "Temps disponible réparti",
            "Développer seulement si utile",
          ]}
          ctaLabel="Faire examiner mes demandes"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Cette page propose une méthode de décision, pas une norme de gestion
          de produit. Elle ne remplace ni l’analyse d’un contrat, ni une
          intervention de sécurité, ni l’étude de vos utilisateurs. Tous les
          chiffres du cas sont fictifs et pédagogiques. Aucun seuil de clients,
          de votes, de confiance, de budget ou de retour sur investissement
          n’est universel.
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
              href="https://www.agilebusiness.org/resource/what-is-moscow-prioritization/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agile Business Consortium — MoSCoW Prioritization
            </a>{" "}
            : catégories dans un horizon borné, critères partagés et exclusions
            visibles.
          </li>
          <li>
            <a
              href="https://framework.scaledagile.com/wsjf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scaled Agile Framework — Weighted Shortest Job First
            </a>{" "}
            : coût relatif du retard divisé par la taille relative du travail,
            dans le cadre SAFe.
          </li>
          <li>
            <a
              href="https://www.digital.gov.au/policy/digital-experience/digital-service-standard/criteron-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Australian Government — critère 6 du Digital Service Standard
            </a>{" "}
            : solutions existantes, plateformes, standards et solutions de
            remplacement à examiner avant une construction spécifique.
          </li>
          <li>
            <a
              href="https://www.digitalhealth.gov.au/healthcare-providers/initiatives-and-programs/digital-health-standards/digital-health-standards-guidelines/get-started/8-requirements/prioritisation-of-requirements"
              target="_blank"
              rel="noopener noreferrer"
            >
              Australian Digital Health Agency — Prioritisation of requirements
            </a>{" "}
            : accord sur les priorités, MVP testable et réexamen des fonctions
            moins prioritaires ; contexte santé numérique.
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/pubs/sp/800/218/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIST SP 800-218 — Secure Software Development Framework 1.1
            </a>{" "}
            : version 1.1 finale, pratiques de développement sécurisé et
            priorisation selon les besoins et les risques. La{" "}
            <a
              href="https://csrc.nist.gov/Projects/ssdf/publications"
              target="_blank"
              rel="noopener noreferrer"
            >
              liste officielle des publications
            </a>{" "}
            porte le statut de la version 1.2, encore en projet au 24 juillet
            2026.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
