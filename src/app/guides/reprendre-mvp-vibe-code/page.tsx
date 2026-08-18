import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { MvpVibeCodeTakeoverDossier } from "@/components/guides/MvpVibeCodeTakeoverDossier";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import platformFacts from "@/lib/mvp-vibe-code-platform-facts.json";
import {
  MVP_VIBE_CODE_FICTITIOUS_TCO,
  MVP_VIBE_CODE_TCO_FIELDS,
  MVP_VIBE_CODE_TCO_HORIZONS,
  MVP_VIBE_CODE_TRAJECTORIES,
  MVP_VIBE_CODE_TRAJECTORY_IDS,
  calculateMvpVibeCodeTco,
} from "@/lib/mvp-vibe-code-takeover";
import workbookSources from "@/lib/mvp-vibe-code-workbook-sources.json";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("reprendre-mvp-vibe-code");

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
        alt: "Reprendre un MVP créé avec Lovable, Bolt ou v0",
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
      name: "Reprendre un MVP créé avec l’IA",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Un développeur peut-il reprendre un projet créé avec Lovable, Bolt ou v0 ?",
    answer:
      "Oui, souvent. Il faut toutefois vérifier le projet réel : accès aux fichiers et à leur historique, installation propre, construction sans erreur, mise en ligne, récupération des données et fichiers, droits des utilisateurs, clés et comptes tiers. Le nom de l’outil ne permet pas, à lui seul, de décider s’il faut conserver ou réécrire.",
  },
  {
    question: "Faut-il obligatoirement avoir un dépôt GitHub ?",
    answer:
      "Un dépôt Git facilite fortement la reprise, car il conserve les fichiers et leur historique. Un export peut permettre de commencer, mais il donne moins de preuves sur les versions et les modifications. Dans tous les cas, le dépôt ne remplace pas l’inventaire de la base, des fichiers, des clés, du domaine et des services externes.",
  },
  {
    question: "Un fichier ZIP constitue-t-il une sauvegarde complète du MVP ?",
    answer:
      "Non. Il contient généralement les fichiers du projet, pas forcément la base de données, les documents envoyés par les utilisateurs, les comptes, les clés, les réglages de connexion, le domaine ou l’historique des mises en ligne. Chacun de ces éléments doit être exporté ou documenté séparément.",
  },
  {
    question: "Faut-il quitter Lovable, Bolt ou v0 avant la reprise ?",
    answer:
      "Pas automatiquement. Rester peut être rationnel si le produit crée de la valeur, si l’entreprise contrôle ses comptes et si la dépendance est comprise. Le but du test de reprise est de rendre la décision explicite, pas d’imposer une migration technique sans bénéfice métier.",
  },
  {
    question: "Peut-on récupérer les utilisateurs et leurs mots de passe ?",
    answer:
      "Cela dépend du service de connexion utilisé. Pour une sortie de Lovable Cloud, la documentation actuelle prévoit l’export des données utilisateurs mais pas de leurs mots de passe : une réinitialisation doit être organisée. Un autre service peut avoir des possibilités différentes. Il faut donc vérifier le projet réel et prévenir les utilisateurs au lieu de promettre une migration invisible.",
  },
  {
    question: "Comment savoir si le MVP est sécurisé ?",
    answer:
      "Un scan sans alerte ne suffit pas. Il faut au minimum tester les droits avec plusieurs comptes, vérifier que les clés secrètes ne se trouvent pas dans le navigateur, examiner les bibliothèques réutilisées par le projet et rejouer les parcours sensibles. Selon les données et le risque, une revue de sécurité spécialisée peut être nécessaire ; ce guide ne délivre aucune certification.",
  },
  {
    question: "Combien coûte la reprise d’un MVP généré avec l’IA ?",
    answer:
      "Il n’existe pas de prix moyen défendable avant examen. Le coût dépend des accès disponibles, du nombre de couches et d’intégrations, du volume de données, de la criticité de la production et des inconnues juridiques ou de sécurité. Le périmètre minimal couvre trois phases : préserver et inventorier ; reconstruire une copie isolée, restaurer un échantillon et tester les accès ; rendre une décision et ses preuves. Il doit être élargi en cas d’incident, d’autorité absente, de droits contestés, de sauvegarde non restaurable, de données sensibles ou de paiements critiques.",
  },
  {
    question: "Que transmettre pour obtenir un premier avis ?",
    answer:
      "Indiquez l’URL, l’outil utilisé, le service de base de données si vous le connaissez, l’existence d’un dépôt, les fonctions déjà utilisées et les accès qui manquent. Ne transmettez jamais un mot de passe ou une clé secrète dans un formulaire ou un e-mail ordinaire. Un accès en lecture seule peut être organisé ensuite si l’examen le justifie.",
  },
  {
    question: "Le Data Act garantit-il que tout le MVP peut être exporté ?",
    answer:
      "Non. Le règlement européen sur les données organise notamment, dans son champ d’application, le changement de certains services de traitement de données et la sortie de données exportables et d’actifs numériques. Il ne transforme pas automatiquement chaque contrat Lovable, Bolt, v0, Vercel ou Supabase en promesse de migration complète. Le service, le contrat accepté, les actifs concernés, les droits de tiers et les limites techniques doivent être qualifiés. Le RGPD, le Data Act, les licences et le contrat répondent à des questions différentes.",
  },
  {
    question: "Que doit contenir le livrable final d’un audit de reprise ?",
    answer:
      "Il doit séparer ce qui a été exécuté, lu, déclaré, non testé et impossible à conclure. Attendez au minimum un inventaire des actifs et propriétaires, la chaîne source-build-déploiement, les résultats de restauration et d’accès, les risques de production, les inconnues juridiques, les cinq trajectoires comparées au même périmètre, un TCO 12/36/60 mois avec hypothèses et un plan de prochaine étape. Un score isolé, un scan vert ou une promesse de réécriture ne constituent pas ce dossier.",
  },
];

const platformSourceById = new Map(
  workbookSources.map((source) => [source.id, source]),
);

function sourceUrl(id: string) {
  const source = platformSourceById.get(id);
  if (!source) {
    throw new Error(`Source canonique introuvable : ${id}`);
  }
  return source.url;
}

const platformGroups = [
  {
    label: "Lovable",
    facts: platformFacts.filter((fact) =>
      fact.plateforme.startsWith("Lovable"),
    ),
  },
  {
    label: "Bolt",
    facts: platformFacts.filter((fact) => fact.plateforme.startsWith("Bolt")),
  },
  {
    label: "v0 et Vercel",
    facts: platformFacts.filter((fact) => fact.plateforme.startsWith("v0")),
  },
  {
    label: "Supabase",
    facts: platformFacts.filter((fact) => fact.plateforme === "Supabase"),
  },
  {
    label: "Build et provenance",
    facts: platformFacts.filter(
      (fact) =>
        fact.plateforme.startsWith("npm") ||
        fact.plateforme === "GitHub Actions",
    ),
  },
] as const;

const renderedPlatformFactIds = platformGroups.flatMap((group) =>
  group.facts.map((fact) => fact.id),
);
if (
  renderedPlatformFactIds.length !== platformFacts.length ||
  new Set(renderedPlatformFactIds).size !== platformFacts.length
) {
  throw new Error(
    "Chaque fait de plateforme doit être rendu exactement une fois.",
  );
}

const fictitiousTcoEvaluation = calculateMvpVibeCodeTco(
  MVP_VIBE_CODE_FICTITIOUS_TCO,
);
if (fictitiousTcoEvaluation.kind !== "known") {
  throw new Error(
    "Le cas TCO fictif canonique doit rester entièrement calculable.",
  );
}

const tcoReadingLimits = {
  conserve: "Ne prouve pas que les risques résiduels sont acceptables.",
  stabilise: "Dépend des écarts réellement découverts et corrigés.",
  migrate: "Inclut une double exploitation fictive, pas sa faisabilité.",
  rewrite: "Ne prouve ni une meilleure adoption ni moins de risque.",
  stop: "Ne préserve pas le même service ni la valeur qu’il produit.",
} as const;

function formatEuro(value: number | null) {
  return value === null
    ? "ND"
    : `${new Intl.NumberFormat("fr-FR", {
        maximumFractionDigits: 2,
      }).format(value)} €`;
}

function formatTcoAssumption(value: number | null, suffix: string) {
  return value === null
    ? "ND"
    : `${new Intl.NumberFormat("fr-FR", {
        maximumFractionDigits: 2,
      }).format(value)} ${suffix}`;
}

const applicationLayers = [
  {
    number: "01",
    title: "Code et historique",
    text: "Les fichiers du projet, leurs versions et la personne qui administre le dépôt.",
  },
  {
    number: "02",
    title: "Installation",
    text: "Les versions nécessaires et la commande qui transforme les fichiers en application prête à mettre en ligne.",
  },
  {
    number: "03",
    title: "Hébergement",
    text: "Le compte qui publie l’application, ses réglages, son domaine et l’historique technique des erreurs.",
  },
  {
    number: "04",
    title: "Base de données",
    text: "Les tables, les règles d’accès, les données et une restauration réellement essayée.",
  },
  {
    number: "05",
    title: "Fichiers",
    text: "Les photos, contrats ou pièces envoyés par les utilisateurs, souvent stockés à part.",
  },
  {
    number: "06",
    title: "Utilisateurs",
    text: "Les comptes, connexions, rôles et sessions qui donnent accès au produit.",
  },
  {
    number: "07",
    title: "Services externes",
    text: "Les clés, e-mails, paiements, notifications automatiques et connexions à d’autres logiciels.",
  },
  {
    number: "08",
    title: "Exploitation",
    text: "Les sauvegardes, alertes, tâches automatiques et instructions en cas de panne.",
  },
];

const decisions = [
  {
    label: "Conserver",
    condition:
      "Le produit est utile, les preuves passent et la dépendance actuelle est acceptée.",
    action:
      "Documentez les comptes, les sauvegardes et les responsabilités avant d’ajouter des fonctions.",
    style:
      "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20",
    labelStyle: "text-emerald-700 dark:text-emerald-300",
  },
  {
    label: "Stabiliser",
    condition:
      "Le produit rend service, mais la mise en ligne, les accès ou les sauvegardes restent fragiles.",
    action:
      "Corrigez les risques qui bloquent l’usage réel avant de développer la prochaine idée.",
    style:
      "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20",
    labelStyle: "text-blue-700 dark:text-blue-300",
  },
  {
    label: "Migrer progressivement",
    condition:
      "Le code et le besoin sont valables, mais un service crée une dépendance devenue gênante.",
    action:
      "Déplacez cette partie avec un fonctionnement parallèle et une possibilité de retour.",
    style:
      "border-violet-200 bg-violet-50/60 dark:border-violet-900 dark:bg-violet-950/20",
    labelStyle: "text-violet-700 dark:text-violet-300",
  },
  {
    label: "Réécrire une partie",
    condition:
      "Une zone empêche durablement la sécurité, la maintenance ou une fonction essentielle.",
    action:
      "Remplacez cette zone sans jeter les écrans, les données ou les règles déjà prouvés.",
    style:
      "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20",
    labelStyle: "text-amber-700 dark:text-amber-300",
  },
  {
    label: "Arrêter ou reporter",
    condition:
      "L’usage n’est pas confirmé, personne ne porte le produit ou la reprise n’éclaire aucune décision utile.",
    action:
      "Exportez ce qui doit l’être, révoquez les accès et conservez seulement les éléments nécessaires.",
    style:
      "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50",
    labelStyle: "text-zinc-700 dark:text-zinc-300",
  },
];

function ApplicationLayers() {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
      {applicationLayers.map((layer) => (
        <section
          key={layer.number}
          className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <p className="m-0 text-xs font-extrabold tracking-[0.14em] text-violet-600 dark:text-violet-400">
            {layer.number}
          </p>
          <h3 className="mb-0 mt-2 text-base font-bold text-zinc-950 dark:text-white">
            {layer.title}
          </h3>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {layer.text}
          </p>
        </section>
      ))}
    </div>
  );
}

function DecisionCards() {
  return (
    <div className="not-prose my-6 space-y-3">
      {decisions.map((decision) => (
        <section
          key={decision.label}
          className={"rounded-2xl border p-5 " + decision.style}
        >
          <p
            className={
              "m-0 text-xs font-extrabold uppercase tracking-[0.13em] " +
              decision.labelStyle
            }
          >
            {decision.label}
          </p>
          <p className="mb-0 mt-2 text-sm font-semibold leading-relaxed text-zinc-950 dark:text-zinc-100">
            {decision.condition}
          </p>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {decision.action}
          </p>
        </section>
      ))}
    </div>
  );
}

function ChapterGate({
  proof,
  stop,
  consequence,
}: {
  proof: string;
  stop: string;
  consequence: string;
}) {
  return (
    <div
      className="not-prose my-7 grid gap-3 sm:grid-cols-3"
      data-guide-chapter-gate="true"
    >
      <section className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-left dark:border-emerald-900 dark:bg-emerald-950/20">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
          Preuve attendue
        </p>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {proof}
        </p>
      </section>
      <section className="rounded-xl border border-red-200 bg-red-50/60 p-4 text-left dark:border-red-900 dark:bg-red-950/20">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-red-700 dark:text-red-300">
          STOP
        </p>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {stop}
        </p>
      </section>
      <section className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-left dark:border-blue-900 dark:bg-blue-950/20">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-blue-700 dark:text-blue-300">
          Conséquence
        </p>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {consequence}
        </p>
      </section>
    </div>
  );
}

function EvidenceFrameworkMap() {
  const levels = [
    {
      number: "05",
      title: "vérifications rapides",
      text: "Elles condensent le premier diagnostic : reconstruire, déployer une copie, restaurer données et fichiers, tester les accès, puis contrôler comptes et licences.",
    },
    {
      number: "09",
      title: "domaines de preuve",
      text: "Ils structurent le dossier vérifiable et conservent pour chaque domaine un statut, un propriétaire, une date et une référence — sans jamais copier le secret.",
    },
    {
      number: "15",
      title: "chapitres pédagogiques",
      text: "Ils expliquent l’ordre complet de décision. Chaque chapitre se termine par la preuve attendue, le motif de STOP et la conséquence opérationnelle.",
    },
  ];

  return (
    <section
      className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-left dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="niveaux-preuve-title"
    >
      <p
        id="niveaux-preuve-title"
        className="m-0 text-base font-bold text-zinc-950 dark:text-white"
      >
        5, 9 et 15 : trois niveaux, une seule méthode
      </p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {levels.map((level) => (
          <div
            key={level.number}
            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="m-0 text-xs font-extrabold tracking-[0.14em] text-violet-700 dark:text-violet-300">
              {level.number} {level.title}
            </p>
            <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {level.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TcoAssumptionsTable() {
  return (
    <section
      className="not-prose my-6 rounded-2xl border border-zinc-200 bg-white p-5 text-left dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="tco-assumptions-caption"
    >
      <p
        id="tco-assumptions-caption"
        className="m-0 text-sm font-bold leading-relaxed text-zinc-950 dark:text-white"
      >
        Les 9 hypothèses du cas fictif, affichées avant ses totaux
      </p>
      <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        Ces valeurs arbitraires servent uniquement à vérifier le calcul. Elles
        ne sont ni des tarifs Hagnéré Code, ni des moyennes de marché, ni un
        devis.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-[1320px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="px-3 py-3 font-bold text-zinc-950 dark:text-white">
                Trajectoire
              </th>
              {MVP_VIBE_CODE_TCO_FIELDS.map((field) => (
                <th
                  key={field.key}
                  className="px-3 py-3 font-bold text-zinc-950 dark:text-white"
                >
                  {field.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MVP_VIBE_CODE_TRAJECTORY_IDS.map((trajectoryId) => (
              <tr
                key={trajectoryId}
                className="border-b border-zinc-100 last:border-b-0 dark:border-zinc-900"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-3 py-3 font-semibold text-zinc-950 dark:text-white"
                >
                  {MVP_VIBE_CODE_TRAJECTORIES[trajectoryId].label}
                </th>
                {MVP_VIBE_CODE_TCO_FIELDS.map((field) => (
                  <td
                    key={field.key}
                    className="whitespace-nowrap px-3 py-3 text-zinc-700 dark:text-zinc-300"
                  >
                    {formatTcoAssumption(
                      MVP_VIBE_CODE_FICTITIOUS_TCO[trajectoryId][field.key],
                      field.suffix,
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PlatformBoundaryMatrix() {
  return (
    <div className="not-prose my-8 space-y-5 text-left">
      <p className="m-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        Suivez cet ordre : utilisez d’abord le transfert natif quand il transmet
        réellement la propriété utile, prouvez ensuite l’export ou la
        reconstruction, puis préparez une migration externe seulement pour les
        actifs qui ne suivent pas. Les comptes GitHub, Supabase, Vercel,
        registrar, identité, paiement ou e-mail conservent leurs propres
        propriétaires, contrats et autorisations.
      </p>

      <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
        1. Transfert natif : changer le bon propriétaire
      </h3>
      <GuideTable
        caption="Transferts natifs à vérifier dans le compte réel — faits relus le 28 juillet 2026"
        headers={["Opération", "Ce qui suit", "Ce qui reste à vérifier"]}
        rows={[
          [
            "Lovable — propriété ou workspace",
            "Le projet peut changer de propriétaire au sein du workspace ou être déplacé entre workspaces selon les droits.",
            "Reste séparé : comptes GitHub, Supabase, domaine et autres services tiers. Contrôle : comparer les rôles avant/après et ouvrir chaque console tierce.",
          ],
          [
            "Bolt — vers un autre workspace",
            "Le projet change de workspace ; les connexions Bolt Database, GitHub et Supabase restent associées.",
            "Reste séparé : propriétaires, contrats et droits des comptes externes. Contrôle : tester le projet dans le workspace cible et chaque propriétaire externe.",
          ],
          [
            "Bolt — vers un autre utilisateur",
            "Le projet et sa Bolt Database restent disponibles ; les réglages Supabase peuvent suivre.",
            "Reste séparé : GitHub est retiré à l’acceptation, le domaine personnalisé aussi, et Supabase se transfère à part. Contrôle : comparer Bolt, GitHub, Supabase et domaine, puis rejouer déploiement et accès.",
          ],
          [
            "v0 — chats et scopes",
            "Les chats peuvent passer entre scope personnel et équipes ; le projet Vercel lié suit si l’expéditeur est Owner de l’équipe actuelle.",
            "Reste séparé : permissions GitHub, comptes tiers, données et contrats. Contrôle : vérifier rôle Owner, scope, projet Vercel, variables, domaines et intégrations dans la cible.",
          ],
          [
            "Supabase — vers une autre organisation",
            "Le projet peut être transféré lorsque rôles et prérequis documentés sont satisfaits.",
            "Reste séparé : comptes tiers et région ; plan, fonctions, droits et disponibilité peuvent changer. Contrôle : vérifier Owner source, membre cible, GitHub inactif, rôles, log drains et disponibilité après transfert.",
          ],
        ]}
      />

      <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
        2. Export, copie et reconstruction : ne pas confondre les preuves
      </h3>
      <GuideTable
        caption="Copies de travail et preuve de reconstruction"
        headers={["Opération", "Ce qu’elle produit", "Manques et test décisif"]}
        rows={[
          [
            "Lovable — GitHub ou archive",
            "Une codebase synchronisée ou une photographie des fichiers selon le plan.",
            "Manques : données, stockage, identités, secrets, domaine et exploitation. Test : cloner ou extraire, construire puis déployer dans une cible isolée.",
          ],
          [
            "Bolt — duplication",
            "Une copie du code et de réglages selon le type de base et d’intégration.",
            "Manques : historique de chat effacé ; GitHub/Netlify et données Bolt Database non automatiquement copiés. Test : comparer fichiers, réglages, tables et intégrations, puis rejouer les parcours.",
          ],
          [
            "Bolt — ZIP",
            "Une photographie téléchargeable des fichiers du projet.",
            "Manques : données, domaines, intégrations, secrets, comptes et historique complet. Test : hasher, extraire, installer, construire et lancer les parcours critiques.",
          ],
          [
            "v0 — dépôt GitHub",
            "La source de vérité du code et ses branches par chat.",
            "Manques : variables, domaines, données, intégrations et preuve du binaire servi. Test : relier commit, build, artefact, projet Vercel et URL observée.",
          ],
        ]}
      />

      <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
        3. Migration externe : déplacer chaque couche séparément
      </h3>
      <GuideTable
        caption="Ce qu’une migration externe doit prouver"
        headers={["Couche", "Déplacement et limite", "Contrôle décisif"]}
        rows={[
          [
            "Code et hébergement",
            "Reconstruire puis déployer hors du compte d’origine. La portabilité du code transfère aussi des responsabilités d’exploitation.",
            "Artefact identifié, variables référencées, logs, domaine et rollback testés.",
          ],
          [
            "Base, fichiers et identités",
            "Exporter et restaurer séparément schéma, données, objets et comptes. Storage et mots de passe ne suivent pas nécessairement la sauvegarde de base.",
            "Réconciliation des volumes, droits, fichiers, reconnexion et RPO/RTO mesurés.",
          ],
          [
            "Services tiers",
            "Recréer ou transférer propriété, facturation, secrets et webhooks chez chaque fournisseur ; le projet générateur n’emporte pas l’autorité sur ces comptes.",
            "Inventaire avant/après, rotation des secrets et parcours métier exécutés.",
          ],
        ]}
      />

      <details className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <summary className="cursor-pointer text-left text-sm font-bold text-zinc-950 dark:text-white">
          Examiner les {platformFacts.length} capacités, limites et preuves
          datées
        </summary>
        <div className="mt-5 space-y-7">
          {platformGroups.map((group) => (
            <section key={group.label} className="text-left">
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                {group.label}
              </h3>
              <div className="mt-3 space-y-3">
                {group.facts.map((fact) => {
                  const source = platformSourceById.get(fact.source);
                  return (
                    <details
                      key={fact.id}
                      data-platform-fact-id={fact.id}
                      className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60"
                    >
                      <summary className="cursor-pointer text-left text-sm font-semibold leading-relaxed text-zinc-900 dark:text-zinc-100">
                        {fact.capacité}
                      </summary>
                      <dl className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        <div>
                          <dt className="font-bold text-zinc-950 dark:text-white">
                            Ne suit pas automatiquement
                          </dt>
                          <dd className="mt-1">{fact.ce_qui_ne_suit_pas}</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-zinc-950 dark:text-white">
                            Preuve à exécuter
                          </dt>
                          <dd className="mt-1">{fact.preuve_a_executer}</dd>
                        </div>
                        <div>
                          <dt className="font-bold text-zinc-950 dark:text-white">
                            Frontière
                          </dt>
                          <dd className="mt-1">{fact.frontière}</dd>
                        </div>
                      </dl>
                      <p className="mb-0 mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        Vérifié dans la documentation le 28 juillet 2026 ·{" "}
                        {source ? (
                          <a
                            href={source.url}
                            className="font-semibold text-violet-700 underline underline-offset-2 dark:text-violet-300"
                          >
                            {source.organisme} — {source.titre}
                          </a>
                        ) : (
                          fact.source
                        )}
                      </p>
                    </details>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </details>
    </div>
  );
}

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
          { label: "Reprendre un MVP créé avec l’IA" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Avant de conserver, stabiliser, migrer, réécrire ou arrêter, vérifiez les STOP, le build, les données, les droits, la production, le coût complet et la sortie sur une copie isolée."
        heroAction={{
          href: "#tester-avant-jeter",
          label: "Vérifier les STOP",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "09",
            title: "portes de preuve",
            description: "",
            color: "violet",
          },
          {
            number: "08",
            title: "éléments à reprendre",
            description: "",
            color: "blue",
          },
          {
            number: "05",
            title: "trajectoires comparées",
            description: "",
            color: "emerald",
          },
          {
            number: "12·36·60",
            title: "mois de TCO",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/creer-un-site-avec-ia",
            label: "Créer un site ou un prototype avec l’IA",
          },
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Choisir ce qu’un MVP SaaS doit contenir",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Reprendre une application déjà exploitée",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "Comparer no-code et développement sur mesure",
          },
          {
            href: "/services/audit-technique",
            label: "Faire réaliser un audit technique",
          },
        ]}
        faqTitle="Reprendre un MVP créé avec l’IA : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous avez créé un MVP avec Lovable, Bolt ou v0 — une première version
          destinée à vérifier que le produit rend réellement service. La
          démonstration fonctionne, des personnes l’ont peut-être déjà essayée,
          mais son créateur ne peut plus avancer ou vous voulez maintenant le
          rendre fiable. Un développeur peut-il le reprendre sans tout jeter ?
          {` `}
          <strong>Souvent oui.</strong> Mais un lien public, une archive ZIP ou
          même un dépôt GitHub — le dossier qui garde le code et l’historique de
          ses modifications — ne suffisent pas à le prouver. Avant d’accepter
          une réécriture complète ou, à l’inverse, de continuer les yeux fermés,
          demandez cinq vérifications : reconstruire le code, mettre en ligne
          une copie, récupérer les données et les fichiers, tester les accès,
          puis vérifier les comptes et les licences. Vous saurez alors ce qui
          mérite d’être conservé, stabilisé, déplacé, remplacé ou abandonné.
        </p>

        <div id="reponse">
          <InfoBox
            variant="blue"
            title="La réponse courte : testez le système, pas seulement les écrans"
          >
            Une belle démonstration ne prouve pas que le MVP est reprenable. Un
            code imparfait ne prouve pas non plus qu’il faut tout refaire. La
            bonne décision arrive quand une autre équipe peut reconstruire une
            copie, récupérer ce qui compte et expliquer ce qu’elle ne maîtrise
            pas encore.
          </InfoBox>
        </div>

        <EvidenceFrameworkMap />

        <GuideToc
          items={[
            {
              id: "tester-avant-jeter",
              label: "1. Tester avant de tout jeter",
            },
            {
              id: "code-application",
              label: "2. Comprendre ce que l’export ne contient pas",
            },
            {
              id: "matrice-plateformes",
              label: "3. Vérifier Lovable, Bolt, v0 et Supabase",
            },
            {
              id: "preuve-code",
              label: "4. Relier source, build et artefact",
            },
            {
              id: "preuve-deploiement",
              label: "5. Mettre en ligne une copie séparée",
            },
            {
              id: "preuve-donnees",
              label: "6. Restaurer données, fichiers et continuité",
            },
            {
              id: "preuve-acces",
              label: "7. Tester accès, tenants et secrets",
            },
            {
              id: "preuve-comptes",
              label: "8. Reprendre comptes, droits et contrats",
            },
            {
              id: "parcours-production",
              label: "9. Tester le métier et la production",
            },
            {
              id: "droit-donnees",
              label: "10. Qualifier droit, RGPD et Data Act",
            },
            {
              id: "choisir",
              label: "11. Comparer cinq décisions et leur TCO",
            },
            {
              id: "migration-reversible",
              label: "12. Préparer migration et rollback",
            },
            {
              id: "dossier-reprise",
              label: "13. Utiliser le dossier et le classeur",
            },
            {
              id: "audit",
              label: "14. Savoir ce qu’un audit doit livrer",
            },
            { id: "sources", label: "15. Benchmark, sources et limites" },
          ]}
        />

        <h2 id="tester-avant-jeter">
          1. Ne jetez pas le MVP avant d’avoir essayé de le reprendre
        </h2>

        <p>
          Les projets générés avec l’IA suscitent deux réactions tout aussi
          risquées. La première consiste à déclarer que « tout est à refaire »
          dès que le code paraît désordonné. La seconde consiste à croire que la
          présence du code rend automatiquement l’application exploitable. Dans
          les deux cas, vous décidez avant d’avoir testé.
        </p>

        <p>
          Commencez par préserver l’état actuel. Gardez une copie du dépôt,
          notez l’URL qui fonctionne et évitez de changer en même temps la base,
          les comptes et l’hébergement. Puis faites travailler le repreneur sur
          une copie isolée. Il doit pouvoir vous montrer ce qui repart, ce qui
          manque et ce qui échoue. Une erreur observée vaut mieux qu’une opinion
          générale sur la « qualité du code ».
        </p>

        <p>
          Le premier objectif n’est donc pas de rendre le projet parfait. Il
          consiste à savoir si vous contrôlez encore la capacité de le remettre
          en route. Si l’usage du produit n’a jamais été confirmé, ajoutez une
          autre question : la reprise permettra-t-elle de tester un besoin réel
          ou seulement de prolonger une idée qui ne rencontre aucun utilisateur
          ? Une bonne décision peut aussi être de reporter.
        </p>

        <h3>Cinq situations imposent un STOP avant l’audit ordinaire</h3>

        <ol>
          <li>
            <strong>Autorité absente :</strong> personne ne peut démontrer le
            mandat permettant d’accéder aux comptes, au dépôt ou aux données.
          </li>
          <li>
            <strong>Incident actif :</strong> une compromission, une fuite, une
            suppression ou un détournement de compte est soupçonné. Préservez
            les journaux et faites intervenir la réponse à incident.
          </li>
          <li>
            <strong>Litige matériel :</strong> la propriété du code, des
            contenus, du domaine ou des comptes est contestée. Ne réutilisez pas
            l’élément avant qualification juridique.
          </li>
          <li>
            <strong>Opération destructive :</strong> le premier test exige de
            toucher la production, de vraies données ou de vrais paiements sans
            copie ni retour arrière vérifié.
          </li>
          <li>
            <strong>Preuve non préservée :</strong> une manipulation pourrait
            effacer l’historique utile, les logs, la version publiée ou la seule
            sauvegarde disponible.
          </li>
        </ol>

        <p>
          Hors de ces STOP, gelez le périmètre : URL, commit supposé en
          production, liste des comptes, exports disponibles, date de dernière
          sauvegarde et fonctions critiques. Conservez une copie en lecture
          seule avant de changer une branche, une clé, un domaine ou une base.
          Ce gel ne bloque pas l’activité ; il donne un point de comparaison
          pour prouver qu’une correction améliore réellement la situation.
        </p>

        <ChapterGate
          proof="Un mandat, un snapshot horodaté et une zone d’essai isolée sont identifiés avant toute commande."
          stop="Incident, litige, autorité absente ou opération destructive non réversible."
          consequence="Reprise ordinaire, réponse à incident ou arbitrage juridique suivent trois routes différentes."
        />

        <h2 id="code-application">
          2. Exporter le code ne revient pas à récupérer toute l’application
        </h2>

        <p>
          Le code rassemble les instructions et les écrans du produit. Il ne
          contient pas nécessairement les clients enregistrés, leurs documents,
          les clés de paiement, les réglages d’e-mail, le domaine ou les tâches
          automatiques. Ces éléments peuvent être répartis entre Lovable, Bolt,
          Vercel, Supabase et d’autres services.
        </p>

        <ApplicationLayers />

        <p>
          Cette distinction explique pourquoi deux prestataires peuvent porter
          des jugements opposés en regardant le même écran. L’un examine les
          fichiers visibles ; l’autre pense à tout ce qui doit encore être
          retrouvé. Demandez donc un inventaire couche par couche. Ce qui est
          absent du dépôt n’est pas forcément perdu, mais il doit être localisé,
          exporté ou recréé.
        </p>

        <InfoBox
          variant="amber"
          title="Pouvoir partir n’oblige pas à quitter la plateforme"
        >
          Prouver que vous pourriez déplacer le produit ne signifie pas qu’il
          faut le déplacer maintenant. Si la plateforme répond au besoin, que
          son coût est accepté et que l’entreprise contrôle les comptes, rester
          peut être la meilleure décision. La preuve sert à rendre cette
          dépendance consciente.
        </InfoBox>

        <InfoBox
          variant="amber"
          title="Trois situations demandent un autre premier intervenant"
        >
          Si vous soupçonnez une attaque ou une fuite en cours, contactez une
          équipe de réponse à incident. Si les droits sur le produit sont
          contestés, demandez un avis juridique. Si personne n’est autorisé à
          récupérer les comptes, commencez par les procédures officielles de
          récupération. Un audit de reprise ordinaire ne doit pas masquer ces
          urgences.
        </InfoBox>

        <ChapterGate
          proof="Chaque couche possède un actif, un propriétaire, un compte d’entreprise, un environnement, une région, un export et une procédure de récupération."
          stop="Une fonction critique dépend d’un compte personnel inaccessible ou d’un service que personne ne peut identifier."
          consequence="L’inventaire détermine le périmètre réel du devis et évite de chiffrer seulement les écrans."
        />

        <h2 id="matrice-plateformes">
          3. Lovable, Bolt, v0 et Supabase n’emportent pas les mêmes choses
        </h2>

        <p>
          Le nom du générateur ne décrit pas l’architecture du projet. Un MVP
          Lovable récent peut différer d’un projet historique ; Bolt peut être
          relié à sa propre base ou à Supabase ; v0 s’inscrit généralement dans
          un projet Vercel dont le dépôt, les déploiements, les domaines et les
          variables restent des objets distincts. La seule réponse sérieuse
          consiste à lire le compte et le dépôt réels, puis à exécuter une
          preuve datée.
        </p>

        <p>
          La matrice suivante synthétise des documentations officielles relues
          le 28 juillet 2026. Elle établit ce que les éditeurs annoncent, pas ce
          que votre abonnement autorise ni ce que votre projet contient. Une
          documentation est une piste de contrôle ; le résultat exécuté sur une
          copie reste la preuve.
        </p>

        <PlatformBoundaryMatrix />

        <ChapterGate
          proof="Pour chaque plateforme, la capacité, la frontière, la source datée et le test réalisé dans le compte réel sont consignés."
          stop="Le devis déduit la stack, l’export ou la sécurité du seul nom Lovable, Bolt, v0 ou Supabase."
          consequence="Les opérations de reprise sont adaptées au projet observé et non à un tutoriel devenu obsolète."
        />

        <h2 id="preuve-code">
          4. Une autre équipe relie la source, le build et l’artefact déployé
        </h2>

        <p>
          Un <strong>dépôt Git</strong>, souvent hébergé sur GitHub, est le
          dossier qui conserve les fichiers du projet et l’historique de leurs
          modifications. Demandez que l’entreprise dispose d’un accès
          administrateur au dépôt utile. Un téléchargement isolé peut dépanner,
          mais il ne montre pas toujours quelle version a été publiée ni ce qui
          a changé depuis.
        </p>

        <p>
          Un dossier neuf ne suffit pas à protéger l’entreprise. Le repreneur
          examine d’abord les commandes susceptibles de s’exécuter, puis
          travaille dans un environnement temporaire sans donnée réelle, sans
          clé de production et sans accès aux autres systèmes de l’entreprise.
          Il suit ensuite ces étapes :
        </p>

        <ol>
          <li>
            récupérer la version exacte du projet sans modifier l’original ;
          </li>
          <li>
            installer la version de Node — le logiciel qui exécute ce type de
            projet — et les briques logicielles externes dont il dépend ;
          </li>
          <li>lancer les contrôles et les tests déjà présents ;</li>
          <li>
            produire la <strong>construction</strong>, c’est-à-dire la version
            que l’hébergeur sait réellement mettre en ligne ;
          </li>
          <li>noter chaque étape manuelle ou information manquante.</li>
        </ol>

        <p>
          Pour les projets npm, la commande{` `}
          <a
            href={sourceUrl("NPM-CI")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>npm ci</code> utilise le fichier qui verrouille les versions
          </a>
          {` `}
          et s’arrête si ce fichier ne correspond plus à la liste des briques
          attendues. La même documentation indique que des scripts
          d’installation peuvent être exécutés : d’où l’environnement temporaire
          et sans accès sensible. Cette vérification aide à savoir si la
          construction est <strong>reconstructible une première fois</strong> ;
          elle ne démontre pas encore sa reproductibilité, ni la logique métier,
          ni les droits d’accès.
        </p>

        <p>
          La technologie exacte doit être constatée dans le projet. Par exemple,
          la{` `}
          <a
            href={sourceUrl("LOV-FAQ")}
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Lovable distingue les projets récents et plus anciens
          </a>
          {` `}
          et annonce depuis le 13 mai 2026 une base TanStack Start avec rendu
          côté serveur pour de nouveaux projets, sous réserve d’exceptions. Ne
          laissez donc personne promettre une reprise parce qu’il « connaît
          l’ensemble technique de Lovable » sans avoir ouvert votre dépôt.
        </p>

        <h3>Les contrôles minimaux à conserver</h3>

        <ol>
          <li>
            identifier le dépôt administré par l’entreprise et le commit ;
          </li>
          <li>
            conserver le lockfile, les versions Node et npm et la configuration
            qui influence l’installation ;
          </li>
          <li>
            documenter les variables attendues sans copier leur valeur secrète ;
          </li>
          <li>
            exécuter l’installation propre, les migrations, les tests et le
            build dans une zone isolée ;
          </li>
          <li>
            enregistrer l’artefact produit, son empreinte et l’identifiant du
            pipeline ;
          </li>
          <li>
            relier cet artefact au déploiement observé et exécuter un retour à
            la version précédente.
          </li>
        </ol>

        <p>
          Ajoutez ensuite la chaîne d’approvisionnement. Un SBOM — inventaire
          logiciel au format SPDX ou CycloneDX, par exemple — doit couvrir les
          dépendances directes et transitives, mais aussi les morceaux copiés,
          polices, images et composants absents du gestionnaire de paquets.
          Associez version, provenance, licence, mainteneur, vulnérabilité
          connue, fin de support et décision de mise à jour. Un SBOM est un
          inventaire daté : il ne certifie ni la licence, ni la sécurité, ni la
          correspondance avec l’artefact réellement publié.
        </p>

        <p>
          Le <a href={sourceUrl("NIST-SSDF-1-1")}>NIST SSDF 1.1</a> devient ici
          un contrôle concret : une personne nommée protège le dépôt, fixe les
          exigences du build et conserve le traitement de chaque vulnérabilité.
          Les guides du{" "}
          <a href={sourceUrl("NCSC-PIPELINE")}>NCSC sur le pipeline</a> et sur
          la{" "}
          <a href={sourceUrl("NCSC-SUPPLY-CHAIN")}>
            chaîne d’approvisionnement
          </a>{" "}
          demandent de relier source, build et déploiement, puis d’inventorier
          dépendances, compilateurs et systèmes de build. Une exécution
          reproductible exige alors plusieurs builds indépendants dans des
          environnements figés, la comparaison de leurs artefacts et de leurs
          empreintes, ainsi que l’explication de tout écart. Un seul build vert
          ne fournit pas cette preuve. Ces références restent des cadres de
          travail, pas des certifications automatiques du MVP.
        </p>

        <ChapterGate
          proof="Un commit et son lockfile produisent un artefact identifié, déployé sur une copie puis relié à l’URL observée ; SBOM et licences sont archivés."
          stop="Installation avec secrets de production, scripts non examinés, dépendance inconnue critique ou impossibilité de relier le dépôt au déploiement."
          consequence="Le code devient reconstructible ; sa reproductibilité et sa supply chain ne deviennent prouvées qu’après builds indépendants, comparaison des artefacts et traçabilité."
        />

        <h2 id="preuve-deploiement">
          5. Une copie est mise en ligne sans dépendre du bouton d’origine
        </h2>

        <p>
          Construire le projet sur un ordinateur ne prouve pas encore qu’il peut
          être publié. Une seconde copie doit être mise en ligne dans un compte
          contrôlé par l’entreprise ou dans un environnement d’essai clairement
          séparé. N’y placez pas les vraies données tant que les droits et les
          secrets ne sont pas vérifiés.
        </p>

        <p>
          Lovable documente une{` `}
          <a
            href={sourceUrl("LOV-GIT")}
            target="_blank"
            rel="noopener noreferrer"
          >
            exportation et une synchronisation dans les deux sens avec GitHub
          </a>
          {` `}
          et la possibilité d’un{` `}
          <a
            href={sourceUrl("LOV-DEPLOY")}
            target="_blank"
            rel="noopener noreferrer"
          >
            déploiement externe
          </a>
          . Cela permet notamment de conserver une copie, travailler localement
          et publier hors de Lovable. Dans ce dernier cas, l’équipe reprend
          aussi les réglages, l’historique technique des erreurs et la
          disponibilité. Les
          <strong> variables d’environnement</strong> sont les réglages et clés
          conservés hors du code pour faire fonctionner chaque mise en ligne.
          Bolt permet de{` `}
          <a
            href={sourceUrl("BOLT-PROJECTS")}
            target="_blank"
            rel="noopener noreferrer"
          >
            télécharger les fichiers du projet
          </a>
          . Dans v0,{` `}
          <a
            href={sourceUrl("V0-GITHUB")}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub est aussi décrit comme la source de vérité du code
          </a>
          , tandis que la{` `}
          <a
            href={sourceUrl("V0-PROJECTS")}
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation consacrée aux projets
          </a>
          {` `}
          regroupe aussi les mises en ligne, domaines et réglages extérieurs au
          code.
        </p>

        <p>La démonstration attendue tient en quatre questions :</p>

        <ul>
          <li>quelle version du dépôt a produit cette copie ?</li>
          <li>
            dans quel compte et avec quels réglages extérieurs au code a-t-elle
            été publiée ?
          </li>
          <li>
            comment remet-on en ligne la version précédente si elle échoue ?
          </li>
          <li>
            qui peut lire l’historique technique des erreurs et reçoit une
            alerte en cas de panne ?
          </li>
        </ul>

        <p>
          Si vous choisissez finalement de rester sur l’hébergement intégré,
          gardez tout de même ces réponses. Elles évitent que la mise en ligne
          dépende d’un seul compte personnel ou d’une manipulation que personne
          ne sait répéter.
        </p>

        <ChapterGate
          proof="Une copie séparée est publiée depuis un artefact identifié, avec variables référencées, logs accessibles, alerte et rollback exécuté."
          stop="Le test exige la production, de vraies données ou une clé sensible ; aucune version précédente ne peut être restaurée."
          consequence="Rester sur l’hébergement intégré ou en sortir devient une décision documentée, pas un pari."
        />

        <h2 id="preuve-donnees">
          6. Les données, fichiers et mécanismes de continuité sont restaurés
        </h2>

        <p>
          La base de données contient par exemple les utilisateurs, commandes,
          droits ou abonnements. Les fichiers envoyés — images, contrats,
          factures ou pièces jointes — sont souvent conservés dans un espace
          séparé. Exporter l’un ne sauvegarde pas automatiquement l’autre.
        </p>

        <p>
          Cette séparation est documentée noir sur blanc :{` `}
          <a
            href={sourceUrl("SUPABASE-BACKUPS")}
            target="_blank"
            rel="noopener noreferrer"
          >
            les sauvegardes de base Supabase ne contiennent pas les objets du
            service de stockage
          </a>
          . Bolt précise également que{` `}
          <a
            href={sourceUrl("BOLT-SUPABASE")}
            target="_blank"
            rel="noopener noreferrer"
          >
            revenir à une ancienne version du projet ne restaure pas la base
            Supabase
          </a>
          . Un bouton de retour arrière peut donc remettre les écrans dans un
          état ancien tout en laissant les données dans leur état actuel.
        </p>

        <p>
          Ne testez jamais une restauration par-dessus le produit utilisé. Sur
          une copie isolée, vérifiez au moins ceci : quelques lignes cohérentes
          sont relues, un document peut être téléchargé, les liens entre les
          données restent valides et la date de la sauvegarde est connue. Si les
          utilisateurs ne peuvent pas être migrés directement, documentez la
          reconnexion ou la réinitialisation nécessaire.
        </p>

        <p>
          Pour une sortie de Lovable Cloud, la{` `}
          <a
            href={sourceUrl("LOV-DEPLOY")}
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation prévoit l’export des données utilisateurs, mais pas
            celui de leurs mots de passe
          </a>
          . Elle demande donc d’organiser une réinitialisation. Cette limite ne
          doit pas être généralisée à tous les services de connexion : le
          repreneur doit identifier celui du projet et tester son mode de
          sortie.
        </p>

        <InfoBox
          variant="blue"
          title="Voir un fichier d’export ne prouve pas la restauration"
        >
          Un fichier CSV — un tableau de données exporté — montre que certaines
          lignes ont été récupérées. Il ne prouve pas que les tables, les
          relations, les comptes, les fonctions et les fichiers peuvent être
          remis en service. Demandez une lecture réelle dans un environnement
          séparé et conservez la liste de ce qui n’a pas été testé.
        </InfoBox>

        <h3>Restaurer le système, pas seulement ses lignes</h3>

        <p>
          Le journal de restauration doit couvrir schéma, contraintes,
          relations, migrations, données de référence, fonctions, triggers,
          extensions, politiques d’accès, comptes, fournisseurs d’identité,
          objets Storage, tâches planifiées, files de messages, webhooks,
          e-mails et paiements. Comparez des comptages, des totaux métier, des
          relations et quelques échantillons. Un nombre de lignes identique peut
          cacher des documents manquants, des droits cassés ou un webhook rejoué
          deux fois.
        </p>

        <p>
          Définissez ensuite deux objectifs avec le métier. Le{" "}
          <strong>RPO</strong> est la quantité maximale de données que
          l’entreprise accepte de perdre, exprimée comme un point dans le temps.
          Le <strong>RTO</strong> est la durée maximale visée pour rétablir le
          service. Un backup quotidien ne signifie pas automatiquement « RPO 24
          heures » si le dernier fichier utilisable est plus ancien ; une
          restauration de base en deux heures ne prouve pas un RTO de deux
          heures si les identités et les fichiers restent absents.
        </p>

        <GuideTable
          caption="Exemple strictement fictif de cibles de continuité à remplacer par les décisions du métier"
          headers={["Parcours", "Cibles fictives (RPO / RTO)", "Preuve"]}
          rows={[
            [
              "Connexion",
              "4 h / 8 h",
              "Compte test restauré, reconnexion et session invalidée puis recréée.",
            ],
            [
              "Paiement",
              "0 transaction perdue / 2 h",
              "Rapprochement prestataire, webhooks doublés et remboursements rejoués.",
            ],
            [
              "Documents",
              "24 h / 12 h",
              "Objets, métadonnées, droits et téléchargements contrôlés sur une copie.",
            ],
          ]}
        />

        <p>
          Ces valeurs sont pédagogiques, pas des objectifs recommandés. Le
          responsable métier doit accepter les conséquences, puis l’équipe
          mesure la restauration. Un résultat partiel reste « échoué » ou « non
          testé » : il ne devient pas vert parce que la base seule est revenue.
        </p>

        <ChapterGate
          proof="Une restauration isolée réconcilie schéma, données, fichiers, identités et traitements différés ; la durée et le point restaurable sont comparés aux RPO/RTO acceptés."
          stop="La seule sauvegarde est en production, les objets Storage sont absents ou le test détruirait des données actuelles."
          consequence="Le risque de perte et la durée d’arrêt deviennent mesurables et intégrables dans le choix économique."
        />

        <h2 id="preuve-acces">
          7. Les droits, tenants, sessions et secrets sont testés
        </h2>

        <p>
          Une application peut sembler normale avec le compte de son créateur
          tout en laissant un client voir les informations d’un autre. Le test
          ne doit donc pas se limiter à la connexion administrateur. Créez au
          moins trois situations : un utilisateur ordinaire A, un utilisateur
          ordinaire B et une personne autorisée à administrer.
        </p>

        <p>Rejouez alors des actions très concrètes :</p>

        <ul>
          <li>A peut-il lire ou modifier une donnée appartenant à B ?</li>
          <li>
            un compte sans rôle peut-il ouvrir une page d’administration ?
          </li>
          <li>
            une personne déconnectée reçoit-elle encore une information privée ?
          </li>
          <li>
            un ancien utilisateur conserve-t-il un accès après sa suppression ?
          </li>
          <li>
            les actions sensibles laissent-elles une trace compréhensible ?
          </li>
        </ul>

        <p>
          Les <strong>secrets</strong> sont les clés qui autorisent une
          application à envoyer un e-mail, encaisser un paiement ou agir sur la
          base. Ils doivent rester du côté du serveur. Supabase rappelle que les
          {` `}
          <a
            href={sourceUrl("SUPABASE-KEYS")}
            target="_blank"
            rel="noopener noreferrer"
          >
            clés secrètes ne sont jamais sûres dans un navigateur
          </a>
          {` `}
          et qu’elles peuvent contourner les règles normales d’accès. Recherchez
          les clés exposées, remplacez-les et documentez où les nouvelles sont
          configurées. Lorsqu’elle est disponible et activée, la{` `}
          <a
            href={sourceUrl("GITHUB-SECRET-SCANNING")}
            target="_blank"
            rel="noopener noreferrer"
          >
            recherche de secrets de GitHub
          </a>
          {` `}
          aide à trouver des formats connus dans l’historique ; son silence ne
          démontre pas l’absence de secret.
        </p>

        <p>
          Ne confondez pas non plus un scanner intégré et un audit. Lovable{` `}
          <a
            href={sourceUrl("LOV-SECURITY")}
            target="_blank"
            rel="noopener noreferrer"
          >
            décrit les contrôles de sécurité disponibles et leurs limites
          </a>
          , notamment le fait que certains examens doivent être demandés et
          qu’une publication peut rester possible malgré des alertes critiques.
          Les outils signalent ; une personne doit encore comprendre les règles
          métier et vérifier les droits réels.
        </p>

        <p>
          Formalisez le test sous forme de matrice : rôles × ressources ×
          actions × états × organisation cliente. Couvrez l’accès horizontal — A
          tente de lire B —, l’accès vertical — un membre tente une action
          administrateur —, l’API, les fichiers, les exports, la suppression, la
          désactivation, l’invitation et les anciennes sessions. Pour chaque
          cellule, écrivez l’attendu, l’observé, la date, le testeur et la
          référence de preuve.
        </p>

        <GuideTable
          caption="Extrait de matrice d’accès — les réponses dépendent du produit réel"
          headers={["Situation", "Attendu et test", "STOP si"]}
          rows={[
            [
              "Membre A ouvre une ressource de B",
              "Refus côté serveur — tester URL, API et téléchargement direct.",
              "Une donnée ou un fichier de B est renvoyé.",
            ],
            [
              "Compte désactivé",
              "Sessions et jetons invalidés — tester Web, API, mobile et lien ancien.",
              "Une action sensible reste possible.",
            ],
            [
              "Administrateur",
              "Droits bornés et tracés — tester export, changement de rôle et suppression.",
              "Action invisible ou privilège non justifié.",
            ],
          ]}
        />

        <p>
          L’
          <a href={sourceUrl("OWASP-ASVS-5")}>OWASP ASVS 5.0</a> fournit des
          exigences de sécurité applicative testables et versionnées.
          Sélectionnez les contrôles proportionnés au risque et conservez leurs
          identifiants de version. Ne dites pas « conforme ASVS » parce qu’un
          scan passe : ASVS sert de référentiel de vérification, et le niveau
          d’assurance doit être décidé selon les données, les fonctions et
          l’exposition.
        </p>

        <ChapterGate
          proof="Une matrice attendu-observé couvre plusieurs rôles, tenants, états, API et fichiers ; les secrets sont référencés puis rotés sans être copiés."
          stop="Accès inter-client, clé privilégiée côté navigateur, session survivant à la révocation ou test non autorisé."
          consequence="La reprise peut continuer après correction et contre-test ; un écran connecté seul ne vaut plus preuve."
        />

        <h2 id="preuve-comptes">
          8. L’entreprise contrôle les comptes, les contrats et les licences
        </h2>

        <p>
          Un produit peut dépendre d’un compte GitHub personnel, d’un domaine
          acheté par un freelance ou d’une carte bancaire qui expire. Même si le
          code fonctionne, la reprise reste fragile tant que l’entreprise ne
          sait pas qui administre chaque service.
        </p>

        <p>Rassemblez au minimum :</p>

        <ul>
          <li>le dépôt et la plateforme de génération ;</li>
          <li>
            l’hébergement, le domaine et les réglages DNS qui relient ce domaine
            au bon service ;
          </li>
          <li>la base de données, le stockage et l’authentification ;</li>
          <li>les services d’e-mail, de paiement, d’analyse et de support ;</li>
          <li>
            les factures, abonnements, conditions et contacts de récupération ;
          </li>
          <li>
            les licences des composants, polices, images et contenus externes.
          </li>
        </ul>

        <p>
          L’inventaire ne remplace pas un avis juridique. Les droits peuvent
          dépendre des contrats conclus, des licences et des éléments tiers.
          Conservez la version réellement acceptée des{" "}
          <a href={sourceUrl("LOV-TERMS")}>conditions Lovable</a>, des{" "}
          <a href={sourceUrl("STACKBLITZ-TERMS")}>conditions StackBlitz/Bolt</a>
          , des{" "}
          <a href={sourceUrl("VERCEL-AI-TERMS")}>
            conditions des produits IA de Vercel
          </a>{" "}
          et de ses <a href={sourceUrl("VERCEL-TERMS")}>conditions générales</a>
          . Ces textes ne disent pas à eux seuls qui détient chaque contribution
          humaine, jeu de données, composant ou contenu tiers du projet réel. Si
          la propriété d’un élément décisif est contestée ou incertaine,
          demandez un conseil juridique avant de le réutiliser ou de le
          diffuser.
        </p>

        <ChapterGate
          proof="Dépôt, domaine, hébergement, base, e-mail, paiement, facturation et récupération sont rattachés à des organisations administrées par l’entreprise ; contrats et licences sont archivés."
          stop="Compte personnel irremplaçable, droit d’exploitation contesté, composant tiers critique sans licence identifiable ou facture essentielle inaccessible."
          consequence="L’entreprise peut administrer, payer, transmettre et récupérer le service sans dépendre d’une seule personne."
        />

        <h2 id="parcours-production">
          9. La logique métier et l’exploitation résistent aux vrais échecs
        </h2>

        <p>
          Une reprise n’est pas terminée lorsque la page d’accueil s’affiche.
          Rejouez les parcours qui créent une dette, un paiement, un document,
          un droit ou un engagement : inscription, invitation, changement de
          rôle, commande, abonnement, résiliation, remboursement, import,
          export, e-mail transactionnel et action d’administration. Pour chacun,
          testez le succès, l’échec, le retry, le doublon, deux actions
          simultanées et la reprise après interruption.
        </p>

        <p>
          L’
          <strong>idempotence</strong> signifie qu’une même demande répétée ne
          crée pas deux fois l’effet métier. Un webhook de paiement peut arriver
          en retard ou plusieurs fois ; un utilisateur peut cliquer deux fois ;
          un réseau peut couper après l’écriture mais avant la réponse. Le test
          doit vérifier la dette créée, le journal, la réponse utilisateur et le
          rapprochement avec le service externe. « Le bouton a fonctionné une
          fois » ne couvre aucun de ces cas.
        </p>

        <p>
          Pour la production, nommez les journaux, métriques, traces et alertes,
          leur rétention et leur propriétaire. Testez les quotas, le volume
          plausible, les requêtes lentes et la dégradation d’un service tiers.
          Un exercice d’incident doit déclencher une alerte vers une personne
          disponible, produire un diagnostic, une décision, une communication et
          une reprise chronométrée. La{" "}
          <a href={sourceUrl("CNIL-VIOLATIONS")}>
            procédure publiée par la CNIL sur les violations de données
          </a>{" "}
          demande de documenter et qualifier l’incident ; la notification à la
          CNIL dépend ensuite du risque, avec un délai de 72 heures lorsque les
          conditions sont réunies, et l’information des personnes suit son
          propre seuil.
        </p>

        <ChapterGate
          proof="Les parcours critiques sont rejoués avec doublons, concurrence et échecs ; une panne simulée déclenche alerte, diagnostic, communication et reprise chronométrée."
          stop="Double paiement, perte silencieuse, absence d’alerte, journal inexploitable ou capacité insuffisante pour l’usage annoncé."
          consequence="L’application est évaluée comme service exploitable, pas comme démonstration visuelle."
        />

        <h2 id="droit-donnees">
          10. Droit français, RGPD et Data Act : trois contrôles distincts
        </h2>

        <p>
          Contrôler un compte n’établit pas tous les droits d’exploitation. En
          France, l’
          <a href={sourceUrl("FR-CPI-L111-1")}>article L111-1</a> pose que
          l’auteur jouit sur son œuvre, du seul fait de sa création, d’un droit
          exclusif opposable à tous. Le paiement d’un prestataire ou l’accès à
          un compte ne constitue donc pas, à lui seul, une cession. Pour les
          logiciels créés par des salariés, l’
          <a href={sourceUrl("FR-CPI-L113-9")}>
            article L113-9 du Code de la propriété intellectuelle
          </a>{" "}
          prévoit, sous ses conditions et sauf stipulations contraires, la
          dévolution à l’employeur des droits patrimoniaux sur le logiciel et sa
          documentation créés par des employés dans l’exercice de leurs
          fonctions ou d’après ses instructions. Cette règle ne doit pas être
          étendue automatiquement à un freelance, une agence, un associé ou une
          sortie d’IA.
        </p>

        <p>
          Pour une cession, l’
          <a href={sourceUrl("FR-CPI-L131-3")}>article L131-3</a> demande
          notamment que les droits cédés soient mentionnés distinctement et que
          leur exploitation soit délimitée. Vérifiez contrat, avenants, chaîne
          de sous-traitance, composants tiers, contenus, polices et conditions
          réellement acceptées. Si une inconnue matérielle subsiste, un avocat
          en propriété intellectuelle doit l’arbitrer ; ce guide ne rend pas cet
          avis.
        </p>

        <p>
          Si l’équipe de reprise traite des données personnelles pour le compte
          de l’entreprise, qualifiez les rôles et le contrat de sous-traitance.
          La <a href={sourceUrl("CNIL-SOUS-TRAITANCE")}>CNIL</a> demande
          notamment de prévoir sécurité, authentification, restitution ou
          destruction en fin de contrat, incidents et chaîne de sous-traitance
          conformément, lorsque ces rôles s’appliquent, à l’article 28 du RGPD.
          Ajoutez finalités, bases, catégories, conservation, sous-traitants
          ultérieurs, localisation, transferts, droits des personnes et sort des
          sauvegardes. « Hébergé dans le cloud » ou « conforme par le
          fournisseur » n’est pas une qualification.
        </p>

        <p>
          Le <a href={sourceUrl("EU-DATA-ACT")}>règlement européen Data Act</a>{" "}
          s’applique depuis le 12 septembre 2025 et encadre notamment, dans son
          champ, le changement de certains services de traitement de données. Il
          ne garantit pas que tout code, mot de passe, composant tiers ou
          service managé d’un MVP peut être transféré à l’identique. Le Data Act
          et le{" "}
          <a href={sourceUrl("CNIL-PORTABILITE")}>
            droit à la portabilité du RGPD
          </a>{" "}
          ont des objets différents. Qualifiez le service et le contrat avant
          d’appliquer les points suivants ; ce n’est pas une conclusion
          juridique automatique.
        </p>

        <h3>
          Checklist prudente de changement de service au titre du Data Act
        </h3>

        <ul>
          <li>
            <strong>Données et actifs :</strong> inventorier les données
            exportables et actifs numériques concernés, puis distinguer les
            éléments tiers, la propriété intellectuelle et les secrets
            d’affaires.
          </li>
          <li>
            <strong>Formats et interfaces :</strong> demander formats,
            structures, interfaces utilisables et documentation, puis faire
            constater les restrictions techniques au lieu de supposer une
            exportation complète.
          </li>
          <li>
            <strong>Limites et délai :</strong> documenter les limites connues,
            fixer la période maximale de préavis et distinguer la période
            transitoire ordinaire de 30 jours calendaires de son éventuelle
            extension technique, qui peut aller jusqu’à sept mois dans les
            conditions du règlement.
          </li>
          <li>
            <strong>Période de récupération :</strong> confirmer la possibilité
            de récupérer les données pendant au moins 30 jours calendaires après
            la fin de la période transitoire, selon le cas applicable.
          </li>
          <li>
            <strong>Frais :</strong> distinguer les frais de changement réduits
            jusqu’au 12 janvier 2027, leur suppression ensuite, et les autres
            sommes éventuellement dues pour assistance supplémentaire demandée,
            résiliation anticipée ou utilisation parallèle.
          </li>
          <li>
            <strong>Résultat :</strong> consigner ce que la cible sait
            réellement reprendre. Le Data Act ne garantit pas l’équivalence
            fonctionnelle d’un SaaS ; les obligations de parité fonctionnelle
            sont plus étroites pour certains services d’infrastructure.
          </li>
        </ul>

        <p>
          Le contrat, sa date, la catégorie du service, les données concernées
          et les exclusions doivent être validés par le spécialiste compétent.
          La checklist prépare les questions et les preuves ; elle ne garantit
          ni applicabilité, ni délai, ni gratuité dans un dossier particulier.
        </p>

        <ChapterGate
          proof="Mandat, contrats, droits, licences, DPA, sous-traitants, transferts, conservation, restitution et suppression sont qualifiés par document et propriétaire."
          stop="Litige, cession incertaine, transfert non qualifié ou traitement sensible sans encadrement adapté."
          consequence="Les actifs techniquement récupérables sont séparés de ceux juridiquement réutilisables ; les inconnues partent au bon spécialiste."
        />

        <h2 id="choisir">
          11. Choisissez seulement après les vérifications : conserver,
          stabiliser, migrer, réécrire ou arrêter
        </h2>

        <p>
          Le verdict ne dépend pas du nombre de lignes générées par l’IA. Il
          dépend de la valeur du produit, des risques observés et du coût
          raisonnable pour retrouver le contrôle. Une interface utile, des
          règles métier déjà comprises et des données propres peuvent être
          conservées même si une partie technique doit changer.
        </p>

        <DecisionCards />

        <p>
          Comparez les cinq options avec les mêmes informations. Pour chacune,
          demandez les travaux ponctuels, les abonnements futurs, une éventuelle
          interruption, le temps demandé à vos équipes, le déplacement des
          données, la façon de revenir en arrière et les inconnues restantes.
          Sans ces sept lignes, une conservation et une réécriture ne sont pas
          réellement comparables, même si les deux devis affichent un total.
        </p>

        <p>
          Une réécriture totale devient défendable quand l’équipe ne peut pas
          reconstruire le projet, tester les fonctions essentielles, corriger
          les autorisations ou comprendre les données à un effort raisonnable. «
          Le code est laid » n’est pas une décision de dirigeant. Nommez la
          fonction empêchée, le risque, la preuve qui échoue et les alternatives
          comparées.
        </p>

        <p>
          Si plusieurs options restent plausibles, commencez par celle qui
          réduit le risque le plus grave ou produit la prochaine vérification au
          plus faible engagement. Vous pouvez stabiliser les accès avant de
          migrer l’hébergement, ou déplacer le stockage avant de retoucher
          l’interface. Le produit n’a pas besoin de changer partout le même
          jour.
        </p>

        <h3>Un même cas fictif, trois horizons</h3>

        <p>
          Le tableau ci-dessous est raccordé au cas pédagogique de l’outil. Les
          montants sont arbitraires, remplaçables et hors taxes ; ils ne sont ni
          des tarifs Hagnéré Code, ni des moyennes de marché, ni un devis. Le
          périmètre commun doit inclure les fonctions, les données, la sécurité,
          la continuité, le support et la sortie. Toute donnée absente reste «
          inconnue » : elle ne devient jamais zéro.
        </p>

        <TcoAssumptionsTable />

        <GuideTable
          caption="Totaux du cas fictif calculés par le même moteur canonique que le dossier interactif"
          headers={["Trajectoire", "Horizon", "Total et limite de lecture"]}
          rows={MVP_VIBE_CODE_TRAJECTORY_IDS.flatMap((trajectoryId) =>
            MVP_VIBE_CODE_TCO_HORIZONS.map((horizon) => [
              MVP_VIBE_CODE_TRAJECTORIES[trajectoryId].label,
              `${horizon} mois`,
              `${formatEuro(
                fictitiousTcoEvaluation.totals[trajectoryId][horizon],
              )} — ${tcoReadingLimits[trajectoryId]}`,
            ]),
          )}
        />

        <FormulaBox>
          {[
            "TCO(horizon) =",
            "  coûts ponctuels",
            "+ coûts mensuels × nombre de mois",
            "+ coûts annuels × nombre d’années",
            "+ temps interne ponctuel et mensuel × coût horaire",
            "+ double exploitation",
            "+ sortie ou archivage à l’horizon",
            "",
            "Toute entrée inconnue = ND, jamais 0 €.",
          ].join("\n")}
        </FormulaBox>

        <p>
          Le même cas fictif illustre un coût de panne observable : 8 heures ×
          25 personnes × 42 € = 8 400 €, auxquels s’ajoutent 3 600 € de marge
          contributive définitivement perdue, 2 000 € de rattrapage, 1 000 € de
          prestataire, 500 € de communication et 500 € de remboursements, soit
          16 000 €. Ce total ne valorise pas automatiquement réputation, départs
          clients, contentieux ou données irrécupérables. Une probabilité
          annuelle de 25 % donnerait 4 000 € d’espérance de perte, mais
          seulement si cette probabilité était documentée ; à défaut, laissez-la
          inconnue.
        </p>

        <ChapterGate
          proof="Les cinq trajectoires utilisent le même périmètre, des hypothèses sourcées et les mêmes horizons ; chaque inconnue reste ND."
          stop="Une option omet une fonction critique, transforme une inconnue en zéro ou valorise un risque sans source défendable."
          consequence="Le prix le plus bas n’est plus confondu avec la meilleure décision ; valeur, risque et capacité restent arbitrés humainement."
        />

        <h2 id="migration-reversible">
          12. Une migration se répète, se réconcilie et peut revenir en arrière
        </h2>

        <p>
          Une migration n’est pas un export suivi d’un import. Nommez d’abord la
          source d’autorité de chaque donnée et le système autorisé à écrire
          pendant la transition. Décidez si les deux systèmes fonctionnent en
          parallèle, si une double écriture est réellement nécessaire ou si un
          gel court est préférable. Capturez un export initial, puis les deltas
          créés jusqu’à la bascule. Pour chaque lot, comparez volumes, totaux,
          relations, fichiers, erreurs et événements externes.
        </p>

        <ol>
          <li>répéter la migration sur une copie représentative ;</li>
          <li>définir des critères GO, STOP et retour arrière mesurables ;</li>
          <li>
            figer ou synchroniser les écritures et annoncer la fenêtre aux
            utilisateurs ;
          </li>
          <li>
            basculer un groupe limité, vérifier les parcours et rapprocher les
            données ;
          </li>
          <li>
            étendre progressivement, conserver la version précédente et
            surveiller les erreurs ;
          </li>
          <li>
            organiser l’hypercare : responsables disponibles, alertes
            renforcées, points de décision et fin explicite.
          </li>
        </ol>

        <p>
          Le rollback doit préciser si l’on revient seulement au code, à la
          configuration ou aussi aux données. Après de nouvelles écritures, un
          retour technique sans réconciliation peut perdre ou dupliquer des
          opérations. Le{" "}
          <a href={sourceUrl("UK-DDAT-PLAYBOOK")}>
            Digital, Data and Technology Playbook britannique
          </a>{" "}
          fournit un benchmark utile sur plan de sortie, transfert de
          connaissances, actifs, dépendances et double fonctionnement. Il ne
          constitue pas une règle juridique française.
        </p>

        <ChapterGate
          proof="Bascule et rollback sont répétés sur copie, avec autorité d’écriture, delta, réconciliation, critères signés et hypercare."
          stop="Aucune source d’autorité, écritures non réconciliables, retour arrière non défini ou fenêtre incompatible avec le métier."
          consequence="La migration peut être progressive ; l’entreprise sait quand avancer, s’arrêter ou revenir."
        />

        <h2 id="dossier-reprise">
          13. Préparez et exportez le dossier avant de demander un devis
        </h2>

        <p>
          Vous n’avez pas besoin de connaître toute la technique. Remplissez ce
          que vous savez, écrivez « inconnu » pour le reste et n’envoyez jamais
          de mot de passe ou de clé dans le document. Les inconnues visibles
          permettent au prestataire de proposer un premier périmètre sérieux.
        </p>

        <FormulaBox>
          {[
            "DOSSIER DE REPRISE DU MVP",
            "",
            "Produit et URL actuellement utilisée :",
            "Outil de création : Lovable / Bolt / v0 / autre / inconnu",
            "Personne qui administre encore le projet :",
            "Utilisateurs réels et fonction la plus importante :",
            "Dépôt GitHub ou archive disponible : oui / non / inconnu",
            "Base de données et stockage de fichiers :",
            "Hébergement et propriétaire du domaine :",
            "E-mails, paiements et autres services reliés :",
            "Comptes contrôlés par l’entreprise :",
            "Accès manquants ou personnels :",
            "Dernière sauvegarde connue et restauration déjà testée :",
            "Erreur ou blocage qui déclenche la reprise :",
            "Décision à prendre après l’examen :",
            "",
            "CINQ PREUVES À DEMANDER",
            "[ ] installation et construction dans un environnement temporaire, sans donnée réelle ni accès sensible",
            "[ ] mise en ligne d’une copie isolée",
            "[ ] lecture de données et d’un fichier restaurés",
            "[ ] test des droits avec plusieurs comptes",
            "[ ] inventaire des comptes, contrats, clés et licences",
          ].join("\n")}
        </FormulaBox>

        <p>
          Ajoutez deux ou trois parcours réellement importants : créer un
          compte, payer, transmettre un dossier, modifier une commande ou
          exporter une facture. Un audit qui ne rejoue aucun usage peut trouver
          des erreurs techniques tout en manquant le problème qui bloque vos
          clients.
        </p>

        <InfoBox
          variant="emerald"
          title="Deux formats complémentaires, sans secret"
        >
          Utilisez le dossier interactif pour qualifier la situation, les neuf
          portes de preuve, les cinq TCO et le coût de panne. Utilisez le
          classeur pour travailler avec plusieurs responsables, conserver les
          références et recalculer hors du navigateur. N’inscrivez jamais une
          clé, un mot de passe, un jeton, une donnée personnelle ou une
          information confidentielle dans l’un de ces supports.
        </InfoBox>

        <p>
          <a
            href="/ressources/kit-reprise-mvp-vibe-code.xlsx"
            download
            className="font-semibold"
          >
            Télécharger le kit Excel de reprise d’un MVP vibe-coded
          </a>
          . Le classeur est un support de préparation ; il ne réalise aucun test
          sur votre application et ne conclut pas à la place des responsables.
        </p>

        <MvpVibeCodeTakeoverDossier />

        <ChapterGate
          proof="Le dossier distingue déclaré, vérifié, échoué, non applicable justifié et inconnu ; les exports conservent les hypothèses et références."
          stop="Un secret ou une donnée personnelle est saisi, une preuve est déclarée sans propriétaire/date ou un résultat incomplet est présenté comme final."
          consequence="Deux prestataires peuvent répondre au même dossier et les écarts restent auditables."
        />

        <h2 id="audit">
          14. Un audit sérieux doit vous rendre une décision, pas une note
          mystérieuse
        </h2>

        <p>
          Avant de signer, demandez quelles preuves seront réellement exécutées
          et dans quel environnement. Le livrable doit distinguer ce qui a été
          vérifié, ce qui a seulement été lu, ce qui reste inconnu et ce qui n’a
          pas pu être testé. Il doit aussi préserver une option moins chère que
          la refonte vendue par le prestataire.
        </p>

        <p>À la fin, vous devez recevoir au minimum :</p>

        <ul>
          <li>la liste des actifs et des accès contrôlés ou manquants ;</li>
          <li>le résultat des cinq preuves avec les erreurs observées ;</li>
          <li>les risques à corriger avant de confier de vraies données ;</li>
          <li>les options possibles, leurs dépendances et leurs inconnues ;</li>
          <li>
            la première étape recommandée et la façon de vérifier son résultat.
          </li>
        </ul>

        <ChapterGate
          proof="Le livrable relie chaque constat à une preuve, un propriétaire, une date, une limite, une option et une prochaine vérification."
          stop="Score opaque, scan seul, réécriture décidée avant les tests ou périmètre qui exclut données, exploitation et sortie."
          consequence="Le dirigeant peut accepter, corriger, conditionner, reporter ou arrêter avec des inconnues visibles."
        />

        <GuideInlineCTA
          title="Vous voulez savoir ce qui peut réellement être repris ?"
          description="Indiquez l’URL, l’outil utilisé, le dépôt s’il existe et le blocage principal — sans envoyer de secret. Nous vous répondons avec le premier point à vérifier, ce qui manque encore pour conclure et l’intérêt éventuel d’un audit de reprise."
          tags={[
            "Pas de refonte décidée d’avance",
            "Premier test expliqué",
            "Option simple possible",
            "Sans engagement",
          ]}
          ctaLabel="Faire examiner mon MVP"
          ctaService="audit-technique"
          ctaSource="guide-reprendre-mvp-vibe-code"
          showPhone={false}
        />

        <p>
          Votre prochaine action tient donc en trois gestes : préserver la
          version qui fonctionne, nommer les comptes contrôlés par l’entreprise
          et faire exécuter la première vérification dans un environnement
          temporaire isolé. Si elle échoue, vous obtenez un problème précis à
          résoudre. Si elle réussit, vous venez déjà de réduire la dépendance au
          créateur initial.
        </p>

        <p>
          Pour une application déjà indispensable aux opérations quotidiennes,
          complétez cette méthode avec notre guide sur la{` `}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            reprise d’un logiciel métier existant
          </Link>
          , qui traite plus largement la continuité, les incidents et le contrat
          de maintenance.
        </p>

        <h2 id="sources">
          15. Benchmark mondial, glossaire, sources et limites
        </h2>

        <p>
          Faits de plateforme revérifiés le 28 juillet 2026 et synthèse
          éditoriale mise à jour le 28 juillet 2026. Les outils évoluent
          rapidement ; les capacités exactes doivent être confirmées dans le
          projet et la documentation au moment de la reprise. Ce guide n’est ni
          une certification de sécurité, ni une réponse à incident, ni un avis
          juridique, ni une promesse de récupération. Il propose un ordre de
          preuves compréhensible pour décider.
        </p>

        <h3>Ce que les références internationales ajoutent</h3>

        <p>
          La sélection relie chaque référence à une vérification du dossier :
          <a href={sourceUrl("SLSA-1-2")}> SLSA 1.2</a>,{" "}
          <a href={sourceUrl("NIST-SSDF-1-1")}>NIST SSDF 1.1</a>,{" "}
          <a href={sourceUrl("OWASP-ASVS-5")}>OWASP ASVS 5.0</a>, les guides{" "}
          <a href={sourceUrl("NCSC-PIPELINE")}>pipeline</a> et{" "}
          <a href={sourceUrl("NCSC-SUPPLY-CHAIN")}>supply chain</a> du NCSC, les{" "}
          <a href={sourceUrl("ASD-SOFTWARE-2026")}>
            guidelines 2026 de l’ASD/ACSC
          </a>{" "}
          et les{" "}
          <a href={sourceUrl("JAPAN-DIGITAL-GUIDELINES")}>
            standards de la Digital Agency japonaise
          </a>
          . Ils permettent d’élargir les angles de contrôle, jamais de
          revendiquer une certification.
        </p>

        <GuideTable
          caption="Référentiels officiels utilisés comme benchmarks, jamais comme certificats automatiques"
          headers={["Référence", "Contrôle concret", "Preuve conservée et limite"]}
          rows={[
            [
              "SLSA 1.2 — international",
              "Relier source, workflow, commit et artefact sans confondre hash et provenance.",
              "Attestation vérifiée et digest comparé à l’artefact servi. Limite : aucun niveau SLSA revendiqué sans satisfaire toutes ses exigences.",
            ],
            [
              "NIST SSDF 1.1 — États-Unis",
              "Nommer les responsables, protéger la source, formaliser les exigences et traiter les vulnérabilités.",
              "Rôles, règles de dépôt, exigences du build et registre de remédiation. Limite : cadre fondé sur le risque, pas audit ni certification du projet.",
            ],
            [
              "OWASP ASVS 5.0 — international",
              "Sélectionner des exigences versionnées pour authentification, autorisations, sessions, API et fichiers.",
              "Identifiants ASVS retenus, attendu, résultat, date et référence de test. Limite : le niveau doit être choisi selon le risque et ne couvre pas seul le métier.",
            ],
            [
              "NCSC — Royaume-Uni",
              "Protéger pipeline et accès, inventorier dépendances et outils, puis tester déploiement et rollback.",
              "Droits du pipeline, SBOM, journal de build, provenance et rollback exécuté. Limite : guidance britannique à contextualiser, pas droit français.",
            ],
            [
              "ASD/ACSC — Australie",
              "Imposer une source autoritative, séparer les environnements et combiner threat modelling, SAST, DAST et SCA.",
              "Dépôt désigné, matrice d’environnements, modèle de menace et résultats des contrôles. Limite : référentiel gouvernemental australien à proportionner au contexte.",
            ],
            [
              "Digital Agency — Japon",
              "Attribuer les rôles sur tout le cycle et protéger CI/CD et chaîne d’approvisionnement.",
              "RACI, registre des risques, protections CI/CD et décisions de traitement. Limite : benchmark public japonais, parfois traduit, pas conformité française.",
            ],
          ]}
        />

        <h3>Glossaire pour décider sans faux jargon</h3>

        <dl>
          <dt>
            <strong>Artefact</strong>
          </dt>
          <dd>
            Fichier ou paquet réellement produit par le build et destiné au
            déploiement.
          </dd>
          <dt>
            <strong>SBOM</strong>
          </dt>
          <dd>
            Inventaire daté des composants logiciels ; il ne vaut pas audit de
            sécurité ou de licence.
          </dd>
          <dt>
            <strong>Tenant</strong>
          </dt>
          <dd>
            Organisation ou espace client dont les données doivent rester
            isolées des autres.
          </dd>
          <dt>
            <strong>RLS</strong>
          </dt>
          <dd>
            Règles de sécurité appliquées aux lignes d’une base ; leur présence
            ne prouve pas leur exactitude.
          </dd>
          <dt>
            <strong>RPO / RTO</strong>
          </dt>
          <dd>
            Perte de données acceptable et durée visée pour rétablir le service.
          </dd>
          <dt>
            <strong>Idempotence</strong>
          </dt>
          <dd>
            Propriété qui empêche une demande répétée de créer deux fois le même
            effet métier.
          </dd>
          <dt>
            <strong>Hypercare</strong>
          </dt>
          <dd>
            Période de surveillance et de disponibilité renforcées après une
            bascule.
          </dd>
          <dt>
            <strong>ND</strong>
          </dt>
          <dd>
            Non déterminé : information manquante qui doit rester visible et ne
            jamais être remplacée par zéro.
          </dd>
        </dl>

        <ul className="text-sm">
          {workbookSources.map((source) => (
            <li key={source.id}>
              <a href={source.url}>
                {source.organisme} — {source.titre}
              </a>{" "}
              <span className="text-zinc-500 dark:text-zinc-400">
                ({source.id}, vérifié le 28 juillet 2026)
              </span>
            </li>
          ))}
        </ul>

        <ChapterGate
          proof="Chaque affirmation instable renvoie à une source officielle datée et à une limite d’applicabilité ; le projet réel reste la preuve."
          stop="Source commerciale non recoupée, page éditeur obsolète ou benchmark étranger présenté comme droit français."
          consequence="La veille future sait quoi rouvrir, quand et pourquoi avant publication ou décision."
        />
      </GuideLayout>
    </GuidesShell>
  );
}
