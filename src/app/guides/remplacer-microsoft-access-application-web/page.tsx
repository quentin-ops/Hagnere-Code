import Image from "next/image";
import Link from "next/link";
import {
  Database,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  PackageCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { GuideTable, InfoBox } from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import type { GuideEntry } from "@/lib/guides";
import { formatGuideDate } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { AccessExitDossierTool } from "./access-exit-dossier";

export const accessGuide: GuideEntry = {
  slug: "remplacer-microsoft-access-application-web",
  title: "Remplacer Microsoft Access : 7 options comparées",
  cardTitle: "Remplacer Microsoft Access sans perdre le métier",
  metaDescription:
    "Comment remplacer Access sans perdre données ni règles métier ? Inventaire, 7 options, limites des conversions automatiques et migration progressive.",
  cardDescription:
    "Un dossier de sortie local, sept options comparées sur les mêmes critères et une migration progressive, sans imposer d’emblée une application web.",
  heroTitle: "Remplacer Microsoft Access sans perdre le travail qu’il contient",
  section: "Outils internes et automatisation",
  datePublished: "2026-08-01T12:58:33+02:00",
  dateModified: "2026-08-02T11:51:04+02:00",
  readTimeMin: 20,
  articleImagePaths: [
    "/guides/remplacer-microsoft-access-application-web/article-sortie-access-16x9.svg",
    "/guides/remplacer-microsoft-access-application-web/article-sortie-access-4x3.svg",
    "/guides/remplacer-microsoft-access-application-web/article-sortie-access-1x1.svg",
  ],
  editorialStatus: "ready-for-human-review",
};

const pagePath = `/guides/${accessGuide.slug}`;
const breadcrumbName = "Remplacer Microsoft Access";

export const metadata = buildGuideMetadata(
  accessGuide,
  "Dossier de sortie Microsoft Access : inventaire, options et contrôles de reprise",
);

export const structuredData = buildGuideStructuredData(
  accessGuide,
  breadcrumbName,
);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Répondre et sécuriser",
    shortLabel: "Réponse",
  },
  {
    id: "travail",
    number: "02",
    label: "Retrouver le vrai travail",
    shortLabel: "Travail",
  },
  {
    id: "inventaire",
    number: "03",
    label: "Construire le dossier de sortie",
    shortLabel: "Inventaire",
  },
  {
    id: "transfert",
    number: "04",
    label: "Comprendre les outils automatiques",
    shortLabel: "Outils",
  },
  {
    id: "choix",
    number: "05",
    label: "Comparer sept options",
    shortLabel: "Choix",
  },
  {
    id: "pilote",
    number: "06",
    label: "Migrer par étapes",
    shortLabel: "Pilote",
  },
  {
    id: "devis",
    number: "07",
    label: "Clarifier coût et responsabilités",
    shortLabel: "Coût",
  },
  {
    id: "premiere-action",
    number: "08",
    label: "Commencer lundi",
    shortLabel: "Action",
  },
];

const trajectories = [
  {
    number: "1",
    icon: ShieldCheck,
    title: "Conserver et stabiliser Access",
    fit: "Le besoin reste local ou limité, l’application est comprise et la version utilisée peut être maintenue.",
    proof:
      "Copie saine et restaurable, responsable nommé, droits revus, copies locales de l’interface maîtrisées et procédure de reprise jouée.",
    risk: "Reporter une dépendance humaine, une version en fin de support ou un usage réseau mal conçu.",
  },
  {
    number: "2",
    icon: Layers3,
    title: "Séparer l’interface et les données",
    fit: "Les formulaires et rapports Access restent utiles, mais plusieurs personnes doivent travailler sur une base mieux organisée.",
    proof:
      "Copie locale de l’interface distribuée à chaque utilisateur, fichier de données protégé, versions maîtrisées et test depuis chaque poste représentatif.",
    risk: "Une base Access scindée n’est pas une architecture web et ne doit pas être étirée sans test sur un réseau reliant plusieurs sites (WAN).",
  },
  {
    number: "3",
    icon: Database,
    title: "Migrer seulement le stockage",
    fit: "Le modèle de données ou la concurrence d’accès pose problème, tandis que l’interface Access peut rester transitoirement utile.",
    proof:
      "Requêtes mesurées, types et clés vérifiés, mode de connexion choisi, liens recréés et résultats source/cible comparés.",
    risk: "Les requêtes peuvent devenir lentes ou fonctionner ligne par ligne ; certains types et comportements changent.",
  },
  {
    number: "4",
    icon: PackageCheck,
    title: "Adopter un logiciel standard",
    fit: "Le travail est courant et une solution du marché couvre les cas importants sans adaptations permanentes.",
    proof:
      "Essai sur des scénarios réels, export testé, droits et coût au volume confirmés, contrat de sortie lu.",
    risk: "Choisir sur une démonstration préparée ou sous-estimer la reprise des historiques et des rapports.",
  },
  {
    number: "5",
    icon: GitBranch,
    title: "Utiliser une plateforme avec peu de code (low-code)",
    fit: "La plateforme est déjà connue de l’équipe, ses règles d’administration sont assumées et le besoin s’y prête.",
    proof:
      "Prototype des règles difficiles, licences réelles, environnements, comptes de service, export et maintenance vérifiés.",
    risk: "Déplacer la dépendance vers une plateforme, ses licences, ses limites et ses compétences rares.",
  },
  {
    number: "6",
    icon: MonitorSmartphone,
    title: "Reconstruire progressivement une application web dédiée",
    fit: "L’accès navigateur, les parcours, les intégrations ou la durée de vie justifient un produit maintenu comme tel.",
    proof:
      "Premier parcours représentatif, résultats attendus pour le valider, migration répétable, retour arrière et responsabilités d’exploitation.",
    risk: "Copier les écrans sans comprendre le métier, élargir le chantier et oublier rapports, tâches planifiées ou exceptions.",
  },
  {
    number: "7",
    icon: Wrench,
    title: "Ne pas migrer maintenant",
    fit: "L’urgence est corrigée, le besoin futur n’est pas stable ou aucune option n’a encore démontré sa valeur.",
    proof:
      "Risque accepté explicitement, surveillance, version et sauvegarde maîtrisées, date de réexamen fixée.",
    risk: "Confondre décision documentée et abandon silencieux jusqu’au prochain incident.",
  },
] as const;

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "commencer",
    num: "01",
    label: "Comprendre le point de départ",
    items: [
      {
        question: "Microsoft Access est-il abandonné ?",
        answer:
          "Non. Microsoft commercialise encore Access pour PC dans Microsoft 365 et en version perpétuelle Access 2024. En revanche, chaque version et chaque configuration ont leur propre cycle de support : vérifiez le produit réellement installé avant de décider.",
      },
      {
        question:
          "Faut-il remplacer Access parce que le fichier approche 2 Go ?",
        answer:
          "Pas sur ce seul chiffre. Microsoft publie une taille totale maximale de 2 Go par base, dont il faut retrancher l’espace nécessaire aux objets système. Ce maximum n’est ni un seuil de confort ni une preuve qu’une application web est nécessaire. Mesurez les usages, les erreurs, la croissance, les utilisateurs, la restauration et les dépendances.",
      },
      {
        question: "Peut-on mettre simplement le fichier Access dans OneDrive ?",
        answer:
          "Microsoft déconseille d’ouvrir un fichier Access depuis OneDrive ou une bibliothèque SharePoint, car chaque utilisateur peut télécharger une copie et produire des comportements inattendus. Cela ne condamne pas tous les usages réseau : il faut vérifier précisément le mode de partage envisagé.",
      },
    ],
  },
  {
    key: "migration",
    num: "02",
    label: "Choisir et migrer",
    items: [
      {
        question: "Un outil peut-il convertir toute la base automatiquement ?",
        answer:
          "Non. Les outils peuvent inventorier ou convertir une partie des tables, requêtes et données, mais ils ne comprennent pas à eux seuls l’importance métier, toutes les dépendances, les exceptions, les formulaires, les rapports, les macros et le VBA. Une revue humaine et des scénarios de validation restent nécessaires.",
      },
      {
        question: "Doit-on réécrire toute l’application en une fois ?",
        answer:
          "Non. Une stabilisation, une séparation interface/données, une migration du stockage ou un parcours web progressif peuvent réduire l’ampleur du chantier. Le bon découpage dépend des liens entre les objets et de la possibilité de réconcilier les résultats.",
      },
      {
        question:
          "Power Apps et Dataverse remplacent-ils directement les écrans Access ?",
        answer:
          "Pas automatiquement. Après migration des tables et données vers Dataverse, Microsoft permet de conserver l’interface Access reliée aux tables Dataverse pendant une transition. Si vous choisissez Power Apps, cette nouvelle interface doit être construite séparément. Dans les deux cas, vérifiez types, relations, licences, rôles et lignes non migrées.",
      },
    ],
  },
  {
    key: "securite",
    num: "03",
    label: "Sécurité, reprise et budget",
    items: [
      {
        question: "Peut-on promettre une migration sans interruption ?",
        answer:
          "Non. On peut réduire et préparer l’indisponibilité, pas promettre qu’aucun aléa ne surviendra. Définissez la fenêtre, le fonctionnement dégradé, le moment où revenir à l’ancienne version, la comparaison des données et la personne qui décide de poursuivre ou d’annuler.",
      },
      {
        question: "Comment obtenir un devis comparable ?",
        answer:
          "Donnez le même dossier de sortie à chaque prestataire : tâches, objets, volumes, dépendances, règles, rapports, connexions, droits, licences, résultats à valider, reprise et responsabilités après livraison. Une inconnue doit rester « à confirmer », pas être facturée comme si elle valait zéro.",
      },
      {
        question: "Quand peut-on éteindre définitivement Access ?",
        answer:
          "Seulement après avoir validé les scénarios représentatifs, comparé les données et rapports entre l’ancien et le nouvel outil, traité les historiques, testé les droits et la restauration, organisé les archives et confirmé que les anciennes sauvegardes restent lisibles pendant leur durée de conservation.",
      },
    ],
  },
];

function TrajectoryCards() {
  return (
    <ol className="not-prose my-8 grid gap-4">
      {trajectories.map((trajectory) => {
        const Icon = trajectory.icon;
        return (
          <li
            key={trajectory.number}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="grid sm:grid-cols-[86px_1fr]">
              <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-900 sm:flex-col sm:justify-center sm:border-b-0 sm:border-r">
                <span className="grid size-10 place-items-center rounded-xl bg-indigo-600 text-base font-bold text-white">
                  {trajectory.number}
                </span>
                <Icon
                  className="size-5 text-indigo-700 dark:text-indigo-300"
                  aria-hidden="true"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="mt-0 text-lg font-bold text-zinc-950 dark:text-white">
                  {trajectory.title}
                </h3>
                <dl className="mt-4 grid gap-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-zinc-950 dark:text-white">
                      Quand l’examiner
                    </dt>
                    <dd className="mt-1 text-zinc-600 dark:text-zinc-300">
                      {trajectory.fit}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-950 dark:text-white">
                      Contrôle à réussir
                    </dt>
                    <dd className="mt-1 text-zinc-600 dark:text-zinc-300">
                      {trajectory.proof}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-950 dark:text-white">
                      Risque à surveiller
                    </dt>
                    <dd className="mt-1 text-zinc-600 dark:text-zinc-300">
                      {trajectory.risk}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function Page() {
  return (
    <GuidesShell>
      {structuredData.map((item) => (
        <script
          key={item["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <GuidePremiumLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: breadcrumbName },
        ]}
        badges={[
          { label: "Guide décisionnel 2026", variant: "dark" },
          { label: "Dirigeants de PME", variant: "neutral" },
          { label: "Dossier local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(accessGuide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Remplacer Microsoft Access sans perdre"
        heroTitleEm="le travail qu’il contient"
        heroDescription="Access n’est pas un simple fichier à convertir : il peut contenir des données, des règles, des écrans, des impressions et des habitudes décisives. Sécurisez d’abord l’existant, puis comparez sept options sans présumer qu’une application web est la bonne réponse."
        stats={[
          { label: "Options comparées", value: "7" },
          { label: "Seuil automatique", value: "Aucun" },
          { label: "Dossier", value: "Local" },
          { label: "Promesse zéro arrêt", value: "Non" },
          { label: "Lecture", value: `${accessGuide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Étude de la migration",
          titleStart: "Faire examiner",
          titleEm: "votre application Access",
          description:
            "Apportez une copie saine, trois tâches réelles et le dossier de sortie. Le premier échange peut conclure qu’il vaut mieux stabiliser Access ou choisir un standard.",
          benefits: [
            "Les tâches à préserver sont identifiées",
            "Les inconnues restent visibles",
            "La solution future n’est pas décidée avant l’inventaire",
          ],
          primaryCtaLabel: "Décrire mon application Access",
          primaryCtaHref: "/demarrer-un-projet",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="Sommaire de la migration Access"
        mobileCtaLabel="Cadrer Access"
        sidebarContextCta={{
          eyebrow: "Outils internes sur mesure",
          title: "Une application web est-elle vraiment la bonne cible ?",
          description:
            "Présentez les tâches, objets, dépendances et résultats attendus après migration, sans secret ni donnée personnelle. Nous comparons d’abord stabilisation, stockage, standard, plateforme avec peu de code et développement dédié.",
          benefits: [
            "Aucune réécriture décidée d’avance",
            "Premier essai limité et critères de sortie",
            "Propriété, maintenance et reprise clarifiées",
          ],
          ctaLabel: "Voir le service outils internes",
          ctaHref: "/services/outils-internes-sur-mesure",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
          badgeLabel: "Premier échange sans garantie de faisabilité",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Quitter Access sans",
          titleEm: "effacer le métier.",
          titleEnd: "",
          subtitle:
            "Des réponses directes sur le support, OneDrive, l’automatisation, Dataverse, l’interruption, le devis et l’arrêt définitif.",
        }}
        legalSources={[
          {
            source: "Microsoft · produit Access",
            href: "https://www.microsoft.com/fr-fr/microsoft-365/access",
            description:
              "Page produit française actuelle : Access est proposé pour PC dans Microsoft 365 et Access 2024 est présenté comme la version perpétuelle la plus récente.",
          },
          {
            source: "Microsoft · cycle Access 2024",
            href: "https://learn.microsoft.com/en-us/lifecycle/products/access-2024",
            description:
              "La fiche officielle affiche le champ « Retirement Date » au 9 octobre 2029 sous la politique de cycle moderne. C’est le libellé de retrait publié par Microsoft, pas une garantie détachée des conditions de cette politique.",
          },
          {
            source: "Microsoft · cycle Access 2021",
            href: "https://learn.microsoft.com/en-us/lifecycle/products/access-2021",
            description:
              "La fiche officielle affiche le champ « Retirement Date » au 13 octobre 2026 sous la politique de cycle moderne. Vérifiez le produit réellement installé et les conditions de prise en charge.",
          },
          {
            source: "Microsoft · Microsoft 365 Apps",
            href: "https://learn.microsoft.com/en-us/lifecycle/products/microsoft-365-apps",
            description:
              "Fiche officielle indiquant Microsoft 365 Apps « In Support » sous la politique de cycle moderne. Elle ne donne pas de date fixe de fin de support pour la version courante.",
          },
          {
            source: "Microsoft · politique de cycle moderne",
            href: "https://learn.microsoft.com/en-us/lifecycle/policies/modern",
            description:
              "La prise en charge suppose trois conditions cumulatives : rester à jour selon les exigences de service et système publiées, disposer d’une licence ou du droit d’usage, et que Microsoft propose encore la prise en charge du produit ou service.",
          },
          {
            source: "Microsoft · spécifications Access",
            href: "https://support.microsoft.com/en-us/access/access-specifications",
            description:
              "Maxima publiés : 2 Go au total par base, moins l’espace nécessaire aux objets système, et 255 utilisateurs simultanés. Ce ne sont pas des capacités pratiques promises ni des seuils universels de migration.",
          },
          {
            source: "Microsoft · structure Access",
            href: "https://support.microsoft.com/en-us/access/learn-the-structure-of-an-access-database",
            description:
              "Présentation des quatre familles d’objets principales : tables, requêtes, formulaires et rapports. Cette structure technique ne décrit pas à elle seule les tâches ni les règles hors Access.",
          },
          {
            source: "Microsoft · Database Documenter",
            href: "https://support.microsoft.com/en-us/access/document-and-print-your-database-design",
            description:
              "Le Database Documenter produit un rapport détaillé pour les objets sélectionnés, jusqu’aux propriétés, contrôles, modules associés et permissions d’un formulaire. Il ne hiérarchise pas leur importance métier.",
          },
          {
            source: "Microsoft · Object Dependencies",
            href: "https://support.microsoft.com/en-us/access/use-the-object-dependencies-pane-to-see-how-objects-relate",
            description:
              "Le volet affiche jusqu’à quatre niveaux mais exclut notamment macros, modules de code et certaines requêtes SQL. Il ne constitue pas une cartographie exhaustive.",
          },
          {
            source: "Microsoft · SSMA Access",
            href: "https://learn.microsoft.com/en-us/sql/ssma/access/converting-access-database-objects-accesstosql?view=sql-server-ver17",
            description:
              "Conversion vers SQL Server : tables, index, relations et plusieurs requêtes ; formulaires, rapports, macros, modules, requêtes action/paramétrées/croisées demandent un autre traitement.",
          },
          {
            source: "Microsoft · évaluation SSMA",
            href: "https://learn.microsoft.com/en-us/sql/ssma/access/assessing-access-database-objects-for-conversion-accesstosql?view=sql-server-ver17",
            description:
              "Le rapport d’évaluation présente notamment un pourcentage de conversion et une estimation du temps technique de migration ou de correction ; il ne mesure pas l’importance métier.",
          },
          {
            source: "Microsoft · guide Access vers SQL Server",
            href: "https://learn.microsoft.com/en-us/sql/sql-server/migrate/guides/access-to-sql-server?view=sql-server-ver17",
            description:
              "Le guide demande de comparer les objets convertis, puis de créer des requêtes de validation source/cible dans un environnement de test isolé et de comparer aussi les performances.",
          },
          {
            source: "Microsoft · Access lié à SQL Server",
            href: "https://learn.microsoft.com/en-us/sql/ssma/access/linking-access-applications-to-sql-server-azure-sql-db-accesstosql?view=sql-server-ver17",
            description:
              "Pendant une transition avec des tables SQL liées, certaines requêtes peuvent ralentir ou fonctionner ligne par ligne. Des types peuvent différer et le mot de passe peut être stocké en clair si l’authentification SQL est enregistrée ; Microsoft recommande Windows Authentication quand elle est possible.",
          },
          {
            source: "Microsoft · données Access vers Dataverse",
            href: "https://learn.microsoft.com/fr-fr/power-apps/maker/data-platform/migrate-access-to-dataverse",
            description:
              "Dataverse reprend des données mais pas tous les types ou limites Access. Dataverse reste la source de données ; l’interface dépend de Power Apps ou d’un autre composant Power Platform, avec licences et capacités à vérifier.",
          },
          {
            source: "Microsoft · scénario hybride Access–Dataverse",
            href: "https://support.microsoft.com/en-US/Access/get-started-migrate-access-data-to-dataverse",
            description:
              "Microsoft décrit des transitions mixtes : données dans Dataverse, tables liées et interface Access existante conservée, tandis que Power Apps ou Teams proposent des interfaces distinctes.",
          },
          {
            source: "Microsoft · partager une base Access",
            href: "https://support.microsoft.com/en-us/access/ways-to-share-an-access-desktop-database",
            description:
              "Avertissement précis contre l’ouverture d’un fichier Access depuis OneDrive ou une bibliothèque SharePoint, en raison des copies locales et comportements inattendus possibles.",
          },
          {
            source: "Microsoft · déployer Access",
            href: "https://support.microsoft.com/en-us/access/deploy-an-access-application",
            description:
              "Séparation interface/données et avertissement précis contre une base Access scindée sur WAN ou Azure file shares, en raison de lenteurs et corruptions possibles.",
          },
          {
            source: "Microsoft · scinder une base Access",
            href: "https://support.microsoft.com/en-us/access/split-an-access-database",
            description:
              "Une base scindée place les tables dans un fichier de données partagé et distribue à chaque utilisateur une copie locale de l’interface. Microsoft demande une sauvegarde préalable et signale les contraintes de compatibilité.",
          },
          {
            source: "Microsoft · anciennes Access Web Apps",
            href: "https://support.microsoft.com/en-gb/office/decide-whether-to-create-a-desktop-database-or-an-access-web-app-7bf7ccc9-0850-48f2-858f-273271d30fa0",
            description:
              "Page historique sur le retrait des Access Services 2010/2013 des futures versions de SharePoint et la recommandation de ne pas créer de nouvelle Access Web App ; elle ne vise pas Access desktop.",
          },
          {
            source: "CNIL · sauvegarder",
            href: "https://www.cnil.fr/fr/securite-sauvegarder",
            description:
              "Sauvegardes fréquentes, copie séparée et hors ligne, protection proportionnée, intégrité et restauration testées. Portée principale : sécurité des données personnelles.",
          },
          {
            source: "ANSSI · essentiels migration",
            href: "https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf",
            description:
              "Guide général de migration des systèmes d’information, version 1.0 de janvier 2026 : inventaires, risques, continuité, possibilité de revenir ou de sortir, sauvegardes et retrait de l’ancien système. À proportionner au contexte d’une PME.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title: "Une méthode de préparation, pas un diagnostic technique",
          description:
            "Ce guide ne répare pas un fichier endommagé et ne réalise ni audit de sécurité ni contrôle de conformité. Il ne choisit pas une architecture et ne garantit ni coût, ni délai, ni absence d’interruption. En cas de corruption, perte, fraude ou indisponibilité active, isolez la situation et mobilisez d’abord les responsables et professionnels compétents.",
        }}
        relatedGuides={[
          {
            label: "Votre entreprise a-t-elle besoin d’un logiciel métier ?",
            href: "/guides/signes-besoin-logiciel-metier",
          },
          {
            label: "Quel processus métier automatiser en premier ?",
            href: "/guides/automatiser-processus-metier",
          },
        ]}
        relatedGuidesLabel="2 suites possibles"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse courte"
          readingTime="3 min"
          title="Faut-il vraiment remplacer Microsoft Access ?"
        >
          <p>
            <strong>
              Pas nécessairement, et surtout pas avant d’avoir sécurisé
              l’existant.
            </strong>{" "}
            Si l’application fonctionne, que sa version est maintenue, que les
            droits sont maîtrisés et qu’une restauration a été réellement
            testée, la conserver peut être une décision rationnelle.
          </p>
          <p>
            Si un incident est actif — corruption, perte, accès compromis ou
            fichier indisponible — arrêtez le projet de migration. Traitez
            d’abord l’incident : une refonte n’est pas une procédure de secours.
          </p>
          <p>
            Microsoft commercialise encore Access pour PC dans Microsoft 365 et
            en version perpétuelle Access 2024. Dans les fiches Lifecycle, le
            champ anglais « Retirement Date » indique le{" "}
            <strong>13 octobre 2026</strong> pour Access 2021 et le{" "}
            <strong>9 octobre 2029</strong> pour Access 2024. Il s’agit des
            dates de retrait publiées, pas d’une promesse autonome de « support
            garanti jusqu’à ». Sous la politique de cycle moderne, le produit
            doit rester à jour selon les exigences de service et système
            publiées. L’utilisateur doit disposer d’une licence ou d’un droit
            d’usage. Enfin, il faut que Microsoft propose encore la prise en
            charge.
          </p>
          <p>
            La fiche Microsoft 365 Apps est actuellement « In Support » sans
            date fixe de retrait. La phrase « Access est mort » ne permet donc
            aucune décision. Relevez le produit exact, sa version, son mode de
            licence et les postes qui l’utilisent.
          </p>
          <p>
            La technologie vient plus tard. Pour l’instant, demandez :{" "}
            <strong>
              quelles tâches doivent continuer, avec quelles données, quelles
              règles, quelles personnes et quelle preuve de reprise ?
            </strong>{" "}
            Cette « preuve » est un résultat observable : par exemple, retrouver
            à l’identique trois factures choisies pour le test, avec les mêmes
            droits. Elle vaut mieux qu’une case « migré ».
          </p>
          <p>
            Application web, logiciel standard, plateforme avec peu de code (
            <em>low-code</em>), serveur de données ou maintien d’Access : toutes
            ces pistes restent à comparer.
          </p>

          <GuidePremiumMemo
            eyebrow="Urgence avant modernisation"
            title="Les cinq vérifications qui précèdent tout devis"
          >
            <ul>
              <li>
                Créer une copie saine sans modifier l’original de production.
              </li>
              <li>
                Tester la restauration sur un emplacement et un poste séparés.
              </li>
              <li>
                Noter la version d’Access, le format du fichier et les licences.
              </li>
              <li>
                Identifier le propriétaire du fichier et le responsable métier.
              </li>
              <li>
                Écrire le fonctionnement dégradé si l’application s’arrête.
              </li>
            </ul>
          </GuidePremiumMemo>

          <figure className="not-prose my-8 overflow-hidden rounded-3xl border border-zinc-200 bg-[#f4f1e8] dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src={`${pagePath}/article-sortie-access-16x9.svg`}
              width={1600}
              height={900}
              unoptimized
              priority
              alt="Une base Access au centre d’un inventaire menant à sept trajectoires possibles et à des preuves de reprise"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-zinc-200 bg-white px-4 py-3 text-xs leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 sm:px-5">
              La cible arrive après l’inventaire. Une flèche technique ne prouve
              jamais que le travail métier a été repris.
            </figcaption>
          </figure>

          <InfoBox variant="amber" title="Deux raccourcis à éviter">
            <p>
              Le plafond publié est de 2 Go par base, moins l’espace nécessaire
              aux objets système ; 255 est le maximum publié d’utilisateurs
              simultanés. Ces deux valeurs restent des plafonds techniques.
              Elles ne décrivent pas une capacité pratique promise et ne fixent
              ni seuil de confort ni déclencheur universel. La taille ne dit
              donc pas tout : certains petits fichiers sont critiques et
              opaques, alors qu’une base plus volumineuse reste parfois
              maîtrisée. Pour décider s’il faut remplacer Access, partez plutôt
              des usages réels, des incidents, de la croissance, des dépendances
              et des résultats que les utilisateurs devront retrouver.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="travail"
          number="02"
          label="Métier avant objets"
          readingTime="4 min"
          title="Où se cache le vrai travail dans une base Access ?"
        >
          <p>
            Les tables ne suffisent pas pour savoir quoi préserver. Une base
            Access combine souvent quatre familles d’objets visibles :{" "}
            <strong>tables</strong> pour conserver les données,{" "}
            <strong>requêtes</strong> pour les filtrer ou les transformer,{" "}
            <strong>formulaires</strong> pour travailler et{" "}
            <strong>rapports</strong> pour imprimer ou restituer. Des macros,
            des modules VBA, des tables liées et des connexions extérieures
            peuvent ajouter des règles qui ne se voient pas dans la liste des
            colonnes.
          </p>
          <p>
            Le fichier n’est pourtant pas la spécification. L’habitude d’une
            assistante ou le nom d’une pièce jointe peuvent faire partie de la
            règle. Même chose pour un modèle Word appelé depuis VBA, un dossier
            réseau ou une correction faite chaque vendredi avant l’export
            comptable. Interrogez la personne qui réalise le travail et celle
            qui utilise le résultat.
          </p>

          <GuidePremiumCase
            initial="DV"
            eyebrow="Exemple fictif 1 · devis"
            title="Le bouton « Envoyer » fait plus qu’un envoi"
          >
            <p>
              Le formulaire valide une remise et crée un numéro. Il génère aussi
              un PDF, choisit un modèle selon le client et ouvre Outlook. Migrer
              seulement la table des devis conserverait les lignes, mais pas la
              tâche complète ni ses exceptions.
            </p>
          </GuidePremiumCase>
          <GuidePremiumCase
            initial="PL"
            eyebrow="Exemple fictif 2 · planning"
            title="La couleur du planning encode une décision"
          >
            <p>
              La requête calcule le retard, puis le formulaire applique une
              couleur. C’est ce signal qui conduit le responsable à appeler les
              dossiers rouges. La couleur traduit donc une règle et déclenche
              une action humaine à documenter ; elle n’est pas décorative.
            </p>
          </GuidePremiumCase>
          <GuidePremiumCase
            initial="CF"
            eyebrow="Exemple fictif 3 · clôture"
            title="Le rapport mensuel dépend d’un chemin local"
          >
            <p>
              Un état lit une table liée et charge un taux depuis un classeur
              placé sur un lecteur réseau. Il dépose ensuite un export dans un
              dossier surveillé. Une conversion automatisée peut repérer la
              requête.
            </p>
            <p>
              En revanche, son résultat n’indique ni qui fournit le taux, ni qui
              surveille le dossier, ni comment corriger un échec.
            </p>
          </GuidePremiumCase>

          <GuideTable
            caption="Ce qu’il faut documenter au-delà des objets Access"
            headers={["Élément", "Questions", "Résultat à conserver"]}
            rows={[
              [
                "Tâche métier",
                "Qui déclenche, qui décide, quel résultat est utilisé ?",
                "Trois cas réels, dont une exception et un échec",
              ],
              [
                "Données",
                "Clés, doublons, valeurs manquantes, pièces jointes, historiques ?",
                "État des données et échantillon comparé à la source",
              ],
              [
                "Règles",
                "Requêtes action, paramètres, calculs, validations, macros, VBA ?",
                "Règle expliquée par son responsable et scénario associé",
              ],
              [
                "Sorties",
                "Rapports, impressions, PDF, Excel, courriels, dossiers surveillés ?",
                "Résultat de référence et destinataire nommé",
              ],
              [
                "Connexions",
                "ODBC, API, Outlook, Word, fichiers, lecteurs, tâches planifiées ?",
                "Compte, droits, fréquence, erreur et reprise documentés",
              ],
            ]}
          />

          <p>
            La technologie viendra plus tard. Pour l’instant, le dossier de
            sortie réunit des tâches observables, les objets qui les servent et
            les personnes capables d’expliquer le résultat attendu.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="inventaire"
          number="03"
          label="Outil local"
          readingTime="10 à 30 min"
          title="Construisez un dossier de sortie, pas une simple liste de tables"
        >
          <p>
            Commencez par les tâches que l’équipe devra continuer à accomplir,
            quelle que soit l’option retenue. Reliez ensuite les objets
            techniques à ces tâches. Une ligne peut désigner un formulaire, une
            requête, un rapport, une macro, un module VBA, une connexion, une
            tâche planifiée, une pièce jointe, un lien hypertexte ou un chemin
            local. Si vous ignorez le type, gardez « à vérifier ».
          </p>
          <p>
            Pour chaque ligne, nommez le responsable, la fréquence, les
            dépendances et la nature des données. Notez aussi la criticité,
            c’est-à-dire ce qui arrive à l’activité si cet élément s’arrête. Si
            vous avez déjà une option en tête, notez-la comme une hypothèse, pas
            comme une décision.
          </p>
          <p>
            Gardez surtout une colonne pour la{" "}
            <strong>preuve de reprise</strong>. Elle répond à une question
            concrète : quel résultat observable l’utilisateur devra-t-il
            retrouver pour confirmer que la tâche fonctionne encore après le
            changement ?
          </p>

          <AccessExitDossierTool />

          <p>
            Même une fiche complète ne choisit rien à votre place : elle sert
            seulement à ouvrir la discussion. Avant de basculer un élément
            critique, désignez son responsable, précisez le résultat à retrouver
            et vérifiez que ses dépendances sont comprises.
          </p>

          <InfoBox
            variant="blue"
            title="Sauvegarde et restauration ne sont pas synonymes"
          >
            <p>
              La CNIL recommande des sauvegardes fréquentes, protégées au même
              niveau que les données, dont une séparée géographiquement et une
              hors ligne, ainsi que des tests réguliers d’intégrité et de
              restauration. Le périmètre principal est la protection des données
              personnelles. Pour les autres données critiques de l’entreprise,
              adaptez l’organisation avec les responsables compétents.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="transfert"
          number="04"
          label="Automatisation"
          readingTime="5 min"
          title="Que voient les outils de migration — et que manquent-ils ?"
        >
          <p>
            Les outils automatiques inventorient ce qu’ils peuvent lire ou
            convertir et signalent certaines incompatibilités. Pour savoir ce
            que l’équipe devra continuer à accomplir, quelle que soit l’option
            retenue, complétez cette analyse par l’étude des usages. Il reste
            nécessaire d’interroger les utilisateurs, d’analyser la sécurité et
            d’organiser les tests d’acceptation — parfois appelés « recette ».
          </p>

          <GuideTable
            caption="Portée réelle de quatre outils Microsoft utiles autour d’Access"
            headers={[
              "Outil",
              "Ce qu’il aide à voir",
              "Limite décisive",
              "Usage prudent",
            ]}
            rows={[
              [
                "Database Documenter",
                "Détails des tables, requêtes, formulaires, contrôles, rapports, macros et modules selon la sélection.",
                "Un rapport volumineux n’explique pas la priorité métier ni les habitudes hors Access.",
                "Produire un inventaire de départ, puis relier chaque objet à une tâche et un responsable.",
              ],
              [
                "Object Dependencies",
                "Objets qui utilisent ou sont utilisés par un objet, jusqu’à quatre niveaux.",
                "Object Dependencies ne couvre ni les macros ni les modules. Des limites subsistent pour les requêtes UNION, de définition de données ou pass-through, pour les sous-requêtes et pour les droits de conception.",
                "Repérer des liens visibles sans qualifier la carte d’exhaustive.",
              ],
              [
                "SSMA for Access",
                "Évaluation, tables, colonnes, index, clés étrangères et conversion de plusieurs requêtes SELECT vers SQL Server.",
                "Pas les formulaires, rapports, macros ou modules : ces éléments restent hors conversion. SSMA ne convertit pas non plus les requêtes UPDATE, les requêtes SELECT paramétrées ou les requêtes croisées.",
                "Lire erreurs et avertissements, estimer le travail technique puis valider les données et requêtes source/cible.",
              ],
              [
                "Export vers Dataverse",
                "Tables et données, relations compatibles et tables Dataverse liées pour conserver temporairement le frontal Access.",
                "Types et limites diffèrent ; certaines lignes restent en erreur. Une interface Power Apps ne résulte pas de l’export et les licences varient.",
                "Sauvegarder, examiner les tables d’erreurs, tester les rôles ; valider le frontal Access hybride ou construire et tester séparément l’interface Power Apps.",
              ],
            ]}
          />

          <p>
            Le rapport d’évaluation SSMA fournit notamment un pourcentage de
            conversion et une estimation du temps de migration ou de correction.
            Le pourcentage et l’estimation décrivent uniquement la conversion
            technique reconnue par l’outil. Pour juger l’importance des objets,
            leur adoption, les droits, le nettoyage des données et les travaux
            menés hors Access, complétez ce rapport par une analyse métier.
          </p>
          <p>
            Pendant une transition, Access peut conserver les formulaires et
            rapports tout en se reliant à des tables SQL Server. Microsoft
            avertit toutefois que certaines requêtes peuvent ralentir, que des
            mises à jour peuvent devenir ligne par ligne et que des types ou
            comportements changent.
          </p>
          <p>
            Avec l’authentification SQL, le mot de passe peut être stocké en
            clair dans la table liée ; Microsoft recommande l’authentification
            Windows quand elle est possible. Le test ne doit pas s’arrêter à la
            connexion : faites aussi vérifier l’architecture et les droits.
          </p>

          <InfoBox
            variant="amber"
            title="OneDrive, WAN et partages Azure : trois cas à traiter avec prudence"
          >
            <p>
              Microsoft déconseille d’ouvrir un fichier Access depuis OneDrive
              ou une bibliothèque SharePoint, car plusieurs copies locales et
              des comportements inattendus peuvent apparaître. Microsoft avertit
              aussi qu’une base Access scindée sur un WAN ou des partages de
              fichiers Azure peut devenir lente et se corrompre. Ces
              avertissements visent ces configurations précises. Ils ne
              s’étendent pas automatiquement à tous les réseaux, à tous les
              services cloud ni à toute séparation des données.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="choix"
          number="05"
          label="Décision"
          readingTime="6 min"
          title="Quelle option choisir pour remplacer Access ?"
        >
          <p>
            Pour chaque option, posez les trois mêmes questions : dans quel cas
            convient-elle, quel test doit-elle passer et quel risque nouveau
            crée-t-elle ? Cette base commune évite de favoriser la solution la
            plus séduisante ou la plus chère.
          </p>
          <p>
            Avec une plateforme <em>low-code</em> — une plateforme qui réduit la
            quantité de code à écrire — vous configurez une grande partie de
            l’application. Certaines fonctions exigent malgré tout du
            développement. Évaluez les sept trajectoires à partir des mêmes
            tâches du quotidien : la comparaison portera sur l’usage réel, avec
            la même règle pour toutes.
          </p>
          <p>
            La réponse peut différer selon la partie de l’application. Conserver
            les rapports historiques, migrer le stockage et reconstruire
            seulement la saisie terrain réduit le périmètre à refaire. Cette
            combinaison doit néanmoins passer les mêmes contrôles que les autres
            trajectoires.
          </p>

          <TrajectoryCards />

          <p>
            Attention au nom : les anciennes « Access Web Apps » de SharePoint
            ne sont ni Access de bureau ni l’équivalent d’une application web
            actuelle. Microsoft a annoncé le retrait des Access Services
            2010/2013 des versions futures de SharePoint et déconseille de créer
            de nouvelles Access Web Apps. Ce retrait ne signifie donc pas qu’il
            faut réécrire toutes les bases Access de bureau.
          </p>

          <GuidePremiumMemo
            eyebrow="Verdict possible"
            title="« Ne pas migrer maintenant » est une décision, pas une absence de décision"
          >
            <ul>
              <li>
                Une personne clairement désignée accepte par écrit le risque
                résiduel.
              </li>
              <li>La sauvegarde et la restauration restent testées.</li>
              <li>
                Consignez la version en service, vérifiez les droits et
                identifiez la personne responsable.
              </li>
              <li>Un événement et une date déclenchent le réexamen.</li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="pilote"
          number="06"
          label="Migration progressive"
          readingTime="5 min"
          title="Comment migrer par étapes sans promettre zéro interruption ?"
        >
          <p>
            Le bon objectif n’est pas de promettre zéro risque : c’est de
            réduire l’incertitude à chaque étape. L’ANSSI recommande de tenir à
            jour les cartographies, les inventaires et l’analyse de risques
            pendant la transition. Elle recommande aussi d’adapter la continuité
            et la reprise, de protéger les exports et de rester capable de
            restaurer les anciennes sauvegardes jusqu’à leur échéance.
          </p>

          <ol>
            <li>
              <strong>Limiter le premier essai.</strong> Choisissez une tâche
              représentative avec un responsable, une exception et un résultat
              précis à retrouver. Pendant ce premier essai, évitez de lancer en
              parallèle un autre changement important.
            </li>
            <li>
              <strong>Créer une extraction répétable.</strong> Documentez la
              source, l’heure, les filtres, les types, les rejets et les
              contrôles. Un export manuel unique n’est pas encore un processus
              de migration.
            </li>
            <li>
              <strong>Nettoyer sans falsifier l’historique.</strong> Classez
              doublons, valeurs manquantes, relations cassées et champs
              détournés. Pour chaque règle de correction, désignez la personne
              qui la valide et gardez-en la trace.
            </li>
            <li>
              <strong>Rejouer les mêmes scénarios.</strong> Comparez les lignes,
              totaux, documents, droits, délais et erreurs entre source et
              cible. Incluez un cas normal, une exception, un échec et un retour
              arrière.
            </li>
            <li>
              <strong>Ouvrir à un groupe limité.</strong> Décidez qui saisit où,
              comment éviter les doubles écritures et qui compare les écarts.
              Sans règle claire, les deux outils peuvent contenir des données
              différentes sans que l’équipe sache laquelle fait référence.
            </li>
            <li>
              <strong>Décider la bascule.</strong> Avant la bascule, notez la
              fenêtre d’indisponibilité probable et le mode dégradé. Fixez aussi
              le moment limite du retour arrière et désignez la personne qui
              décidera de poursuivre, de reporter ou d’annuler.
            </li>
            <li>
              <strong>
                Retirer l’ancien système sans effacer l’historique.
              </strong>{" "}
              Supprimez les comptes, tâches et accès devenus inutiles, archivez
              ce qui doit l’être et conservez les moyens de lire les anciennes
              sauvegardes pendant leur durée de conservation.
            </li>
          </ol>

          <p>
            Pour une migration Access vers SQL Server, le guide Microsoft
            recommande de construire des requêtes de validation, puis de les
            exécuter sur la source et la cible dans un environnement isolé. Il
            demande aussi de comparer les performances. Cette méthode ne
            garantit pas le résultat et ne couvre pas à elle seule les écrans ou
            les règles métier, mais elle fournit une base de contrôle
            reproductible.
          </p>

          <GuideTable
            caption="Contrôle minimal d’un parcours migré"
            headers={[
              "Scénario",
              "Source attendue",
              "Cible attendue",
              "Décision",
            ]}
            rows={[
              [
                "Cas normal",
                "Résultat de référence horodaté",
                "Même résultat ou écart expliqué",
                "Accepter seulement si le responsable métier valide",
              ],
              [
                "Exception connue",
                "Contournement et raison documentés",
                "Exception traitée explicitement, sans perte inexpliquée",
                "Corriger, accepter l’écart ou exclure du premier essai",
              ],
              [
                "Échec de connexion",
                "Message, journal et reprise actuelle",
                "Alerte, trace et reprise testée",
                "Bloquer la bascule si l’erreur reste invisible",
              ],
              [
                "Retour arrière",
                "Dernier état cohérent identifié",
                "Écritures réconciliées ou annulées",
                "Poursuivre seulement si le retour est exécutable",
              ],
            ]}
          />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="devis"
          number="07"
          label="Coût complet"
          readingTime="4 min"
          title="Que doit contenir un devis de sortie d’Access ?"
        >
          <p>
            Compter les tables ne suffit pas pour comparer deux offres. Le devis
            doit chiffrer la découverte, le nettoyage, le modèle cible, les
            écrans, les requêtes, les rapports, les automatismes et les
            connexions.
          </p>
          <p>
            Il doit aussi décrire la migration répétable, les tests, la
            formation, l’éventuelle période de double fonctionnement, la
            bascule, le support, la maintenance et la sortie future. Les
            inconnues sont des postes à confirmer, pas des zéros.
          </p>

          <GuideTable
            caption="Les mêmes questions pour comparer les devis"
            headers={["Sujet", "À écrire dans le devis", "Contrôle de fin"]}
            rows={[
              [
                "Travail couvert",
                "Tâches, objets, volumes, exceptions, historiques et exclusions",
                "Dossier de sortie versionné et signé par le responsable métier",
              ],
              [
                "Données",
                "Nettoyage, rejets, pièces jointes, liens, conservation et scénarios définis pour tester les données",
                "Rapport de migration et réconciliation source/cible",
              ],
              [
                "Droits et sécurité",
                "Rôles, comptes nominatifs, comptes de service, journaux, environnements et sauvegardes",
                "Tests d’accès, restauration, révocation et traçabilité définis",
              ],
              [
                "Licences",
                "Access/Runtime, base cible, low-code, connecteurs, BI, stockage et environnements",
                "Coût calculé avec le nombre réel d’utilisateurs et les fonctions nécessaires",
              ],
              [
                "Propriété",
                "Code, schéma, scripts de migration, configuration, comptes, documentation et données",
                "Accès administrateur transmis et remise de chaque élément contrôlée",
              ],
              [
                "Exploitation",
                "Supervision, alertes, correctifs, support, sauvegarde, restauration et évolutions",
                "Responsable, délai de prise en charge et exercice de reprise",
              ],
              [
                "Sortie future",
                "Exports, format, documentation, assistance et coût de sortie",
                "Export ouvert et relu, puis procédure de sortie rejouée avant toute dépendance critique",
              ],
            ]}
          />

          <p>
            Pour un logiciel standard ou une plateforme low-code, le tarif
            affiché n’est qu’une partie du coût : ajoutez utilisateurs ou
            capacité, environnements, connecteurs premium, stockage,
            automatismes, support et administration. Une application dédiée
            déplace une partie de ces dépenses vers le développement et
            l’exploitation. Comparez le coût total sur la même période. Si un
            poste ne peut pas encore être chiffré, laissez-le « à confirmer » au
            lieu de lui attribuer un coût nul.
          </p>

          <InfoBox
            variant="emerald"
            title="Ce qu’il faut réunir avant de solliciter Hagnéré Code"
          >
            <p>
              L’étude est utile lorsqu’un responsable métier est disponible, que
              les tâches sont observables, qu’une copie est exploitable et
              qu’une personne peut arrêter le premier essai. Elle ne peut pas
              être menée sérieusement sans accès à l’application, sans
              utilisateurs, sans données de test ou pendant un incident actif.
              Vous pouvez{" "}
              <Link href="/demarrer-un-projet">
                présenter le dossier de sortie et les trois tâches prioritaires
              </Link>{" "}
              ; le premier résultat attendu est une liste de vérifications, pas
              une promesse de développement.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="premiere-action"
          number="08"
          label="Prochaine étape"
          readingTime="2 min"
          title="Que faire lundi matin, avant de chercher une agence ?"
        >
          <p>
            Prenez une heure avec la personne qui utilise réellement Access.
            Avant de parler d’écran cible ou de technologies, préservez la
            capacité de l’équipe à travailler et à expliquer le fonctionnement
            actuel.
          </p>

          <ol>
            <li>
              Notez la version exacte d’Access, le format et les postes
              concernés.
            </li>
            <li>
              Faites créer et restaurer une copie saine sans toucher à
              l’original.
            </li>
            <li>
              Choisissez trois tâches : une fréquente, une critique et une qui
              comporte beaucoup d’exceptions.
            </li>
            <li>
              Reliez leurs formulaires, requêtes, rapports, macros, VBA et
              connexions.
            </li>
            <li>
              Dans le dossier local, notez pour chaque tâche le résultat à
              retrouver après toute évolution du système.
            </li>
            <li>
              Comparez au moins trois pistes : stabiliser Access, choisir un
              outil standard ou étudier une transformation adaptée au besoin.
            </li>
            <li>
              Repérez l’inconnue la plus risquée, puis organisez un essai limité
              pour obtenir la réponse manquante.
            </li>
          </ol>

          <p>
            À la fin, vous ne saurez peut-être pas encore quelle technologie
            choisir. C’est normal. Vous saurez ce qui ne doit pas disparaître,
            ce qui reste inconnu et quel résultat exiger avant d’engager la
            suite.{" "}
            <strong>
              Le fichier Access seul ne suffit pas : ce dossier rassemble ce
              qu’il faut préserver pour décider de la suite et, si vous migrez,
              ne pas perdre le travail réel.
            </strong>
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
