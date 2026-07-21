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
      "Aucune fourchette sérieuse ne peut être donnée avant les premières vérifications. Une démonstration simple peut cacher plusieurs services et beaucoup de données ; un projet plus volumineux peut au contraire se reconstruire proprement. Demandez d’abord ce qui sera examiné, ce que vous recevrez et la décision que cet examen doit permettre.",
  },
  {
    question: "Que transmettre pour obtenir un premier avis ?",
    answer:
      "Indiquez l’URL, l’outil utilisé, le service de base de données si vous le connaissez, l’existence d’un dépôt, les fonctions déjà utilisées et les accès qui manquent. Ne transmettez jamais un mot de passe ou une clé secrète dans un formulaire ou un e-mail ordinaire. Un accès en lecture seule peut être organisé ensuite si l’examen le justifie.",
  },
];

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
        heroDescription="Vous avez déjà une démonstration ou de premiers utilisateurs, mais vous ne savez pas si une autre équipe peut continuer. Vérifiez le code, la mise en ligne, les données, les accès et les comptes avant de conserver, migrer ou réécrire."
        heroAction={{
          href: "#reponse",
          label: "Voir les cinq vérifications",
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
            title: "tests à demander",
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
            number: "0",
            title: "refonte décidée d’avance",
            description: "",
            color: "emerald",
          },
          {
            number: "↗",
            title: "Lecture : " + guide.readTimeMin + " min",
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
              id: "preuve-code",
              label: "3. Reconstruire le code dans un espace temporaire",
            },
            {
              id: "preuve-deploiement",
              label: "4. Mettre en ligne une copie séparée",
            },
            {
              id: "preuve-donnees",
              label: "5. Restaurer les données et les fichiers",
            },
            {
              id: "preuve-acces",
              label: "6. Tester les accès et les clés",
            },
            {
              id: "preuve-comptes",
              label: "7. Reprendre les comptes et les licences",
            },
            {
              id: "choisir",
              label: "8. Choisir entre cinq décisions",
            },
            {
              id: "dossier-reprise",
              label: "9. Préparer le dossier de reprise",
            },
            {
              id: "audit",
              label: "10. Savoir ce qu’un audit doit livrer",
            },
            { id: "sources", label: "Sources et limites" },
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

        <h2 id="preuve-code">
          3. Une autre équipe reconstruit le projet depuis une copie propre
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
            href="https://docs.npmjs.com/cli/commands/npm-ci/"
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
          construction est reproductible ; elle ne certifie ni la logique métier
          ni les droits d’accès.
        </p>

        <p>
          La technologie exacte doit être constatée dans le projet. Par exemple,
          la{` `}
          <a
            href="https://docs.lovable.dev/introduction/faq"
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

        <h2 id="preuve-deploiement">
          4. Une copie est mise en ligne sans dépendre du bouton d’origine
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
            href="https://docs.lovable.dev/integrations/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            exportation et une synchronisation dans les deux sens avec GitHub
          </a>
          {` `}
          et la possibilité d’un{` `}
          <a
            href="https://docs.lovable.dev/tips-tricks/external-deployment-hosting"
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
            href="https://support.bolt.new/building/using-bolt/projects-files"
            target="_blank"
            rel="noopener noreferrer"
          >
            télécharger les fichiers du projet
          </a>
          . Dans v0,{` `}
          <a
            href="https://v0.app/docs/github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub est aussi décrit comme la source de vérité du code
          </a>
          , tandis que la{` `}
          <a
            href="https://v0.app/docs/projects"
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

        <h2 id="preuve-donnees">
          5. Les données et les fichiers sont sauvegardés puis relus
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
            href="https://supabase.com/docs/guides/platform/backups"
            target="_blank"
            rel="noopener noreferrer"
          >
            les sauvegardes de base Supabase ne contiennent pas les objets du
            service de stockage
          </a>
          . Bolt précise également que{` `}
          <a
            href="https://support.bolt.new/integrations/supabase"
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
            href="https://docs.lovable.dev/tips-tricks/external-deployment-hosting"
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

        <h2 id="preuve-acces">
          6. Les droits des utilisateurs et les clés sont testés
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
            href="https://supabase.com/docs/guides/getting-started/api-keys"
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
            href="https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
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
            href="https://docs.lovable.dev/features/security"
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

        <h2 id="preuve-comptes">
          7. L’entreprise contrôle les comptes, les contrats et les licences
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
          dépendre des contrats conclus, des licences et des éléments tiers. Les
          {` `}
          <a
            href="https://vercel.com/legal/ai-product-terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            conditions des produits IA de Vercel
          </a>
          {` `}
          et les{` `}
          <a
            href="https://vercel.com/legal/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            conditions générales
          </a>
          {` `}
          rappellent notamment que l’utilisateur doit évaluer les sorties de
          l’IA et les droits de tiers. Si la propriété d’un élément décisif est
          contestée ou incertaine, demandez un conseil juridique avant de le
          réutiliser ou de le diffuser.
        </p>

        <h2 id="choisir">
          8. Choisissez seulement après les vérifications : conserver,
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

        <h2 id="dossier-reprise">
          9. Préparez ce dossier avant de demander un devis de reprise
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

        <h2 id="audit">
          10. Un audit sérieux doit vous rendre une décision, pas une note
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

        <h2 id="sources">Sources et limites</h2>

        <p>
          Recherche vérifiée le 21 juillet 2026. Les outils évoluent rapidement
          ; les capacités exactes doivent être confirmées dans le projet et la
          documentation au moment de la reprise. Ce guide n’est ni une
          certification de sécurité, ni une réponse à incident, ni un avis
          juridique, ni une promesse de récupération. Il propose un ordre de
          preuves compréhensible pour décider.
        </p>

        <ul>
          <li>
            <a
              href="https://docs.lovable.dev/integrations/github"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lovable — connexion GitHub
            </a>
            , complétée par les pages de déploiement externe, sécurité et FAQ.
          </li>
          <li>
            <a
              href="https://support.bolt.new/integrations/git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bolt — intégration Git
            </a>
            , complétée par les pages sur les fichiers du projet, Supabase et
            les tables.
          </li>
          <li>
            <a
              href="https://v0.app/docs/github"
              target="_blank"
              rel="noopener noreferrer"
            >
              v0 — GitHub
            </a>
            , avec les documentations Projects et variables Vercel.
          </li>
          <li>
            <a
              href="https://supabase.com/docs/guides/platform/backups"
              target="_blank"
              rel="noopener noreferrer"
            >
              Supabase — sauvegardes de base de données
            </a>
            , complétée par les documentations sur le stockage et les clés API.
          </li>
          <li>
            <a
              href="https://docs.npmjs.com/cli/commands/npm-ci/"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm — installation reproductible avec npm ci
            </a>
            , et documentation GitHub sur la recherche de secrets.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
