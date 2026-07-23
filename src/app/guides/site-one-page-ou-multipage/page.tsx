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

const guide = getGuide("site-one-page-ou-multipage");

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
        alt: "Répartir les offres d’une entreprise entre une page unique et plusieurs pages distinctes",
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
      name: "Site one-page ou multipage",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Un site one-page peut-il paraître professionnel ?",
    answer:
      "Oui. Une page unique peut être professionnelle si elle présente une offre cohérente, répond aux questions importantes, montre des éléments vérifiables et permet de contacter l’entreprise sans ambiguïté. Le nombre de pages ne remplace ni la qualité du message ni celle de la réalisation.",
  },
  {
    question: "Un site one-page peut-il apparaître dans Google ?",
    answer:
      "Oui. Google peut proposer une page unique dans ses résultats si son robot peut y accéder, si elle fonctionne et si son contenu est lisible. Cela ne garantit ni sa présence effective dans Google ni une position. Une page longue doit aussi rester bien organisée et réellement utile.",
  },
  {
    question: "Faut-il créer une page pour chaque service ?",
    answer:
      "Non. Séparez un service seulement s’il s’adresse à un public différent, répond à une question autonome, demande ses propres explications ou conduit à une autre action. Deux intitulés commerciaux peuvent rester sur la même page lorsqu’ils racontent en réalité la même offre.",
  },
  {
    question: "Combien de pages faut-il pour un site vitrine ?",
    answer:
      "Il n’existe pas de nombre universel. Le bon nombre correspond aux réponses autonomes que l’entreprise peut réellement écrire, prouver et maintenir. Une page vide créée pour remplir un menu n’aide ni le prospect ni l’entreprise.",
  },
  {
    question: "Une page distincte doit-elle viser un seul mot-clé ?",
    answer:
      "Non. Une page répond à une question et à ses formulations utiles, pas à un mot isolé. Créer plusieurs pages presque identiques pour des variantes de termes risque surtout de produire des réponses répétitives et difficiles à maintenir.",
  },
  {
    question: "Peut-on commencer avec une page puis agrandir le site ?",
    answer:
      "Oui. Commencez avec une page cohérente ou avec l’accueil et la page d’offre la plus importante, puis ajoutez une adresse lorsqu’une nouvelle réponse possède son public, ses preuves, son action et une personne pour la maintenir.",
  },
  {
    question: "Un site one-page est-il la même chose qu’une landing page ?",
    answer:
      "Pas nécessairement. Un site one-page peut être la présence durable d’une entreprise à l’offre simple, tandis qu’une landing page sert souvent une campagne ou une offre précise. Si vous hésitez encore entre campagne et site durable, cette décision doit être prise avant l’architecture traitée ici.",
  },
];

const architectureFields = [
  {
    field: "Offre",
    question: "Quel résultat précis l’entreprise vend-elle ?",
    output:
      "Une formulation concrète, pas seulement « accompagnement » ou « solutions ».",
  },
  {
    field: "Public",
    question: "Qui doit se reconnaître dans cette réponse ?",
    output:
      "Un type de client ou une situation, sans empiler toutes les cibles possibles.",
  },
  {
    field: "Question",
    question: "Quelle phrase le prospect prononce-t-il réellement ?",
    output:
      "Une question principale assez précise pour guider le contenu de la page.",
  },
  {
    field: "Preuve",
    question: "Qu’est-ce qui l’aidera à croire et à choisir ?",
    output:
      "Une explication, une démonstration ou un élément réel que l’entreprise peut publier.",
  },
  {
    field: "Action",
    question: "Que doit pouvoir faire la personne après sa lecture ?",
    output:
      "Demander un devis, appeler, préparer des informations ou lire une réponse liée.",
  },
  {
    field: "Personne responsable",
    question: "Qui vérifie que l’information reste exacte ?",
    output: "Une personne ou un rôle qui peut valider une modification.",
  },
  {
    field: "Mise à jour",
    question: "Quel événement impose de relire cette information ?",
    output:
      "Changement d’offre, de prix, de zone, de preuve, d’équipe ou de parcours.",
  },
  {
    field: "Décision",
    question:
      "Cette réponse reste-t-elle avec une autre ou devient-elle autonome ?",
    output:
      "« Regrouper » ou « séparer », suivi d’une phrase qui explique pourquoi.",
  },
];

const decisionChecks = [
  {
    title: "La même personne cherche-t-elle la réponse ?",
    keep: "Oui : les deux contenus peuvent encore former une même conversation.",
    split:
      "Non : chaque public mérite probablement une entrée qui le nomme et répond à sa situation.",
  },
  {
    title: "La question principale reste-t-elle la même ?",
    keep: "Oui : deux prestations proches peuvent être expliquées dans des sections de la même page.",
    split:
      "Non : une réponse autonome évite au prospect de démêler plusieurs sujets.",
  },
  {
    title: "Les explications et les éléments qui rassurent sont-ils communs ?",
    keep: "Oui : les répéter sur plusieurs adresses créerait peu de valeur.",
    split:
      "Non : chaque offre peut montrer ses propres étapes, limites et éléments vérifiables.",
  },
  {
    title: "La prochaine action est-elle identique ?",
    keep: "Oui : la page peut mener naturellement vers un même contact ou une même préparation.",
    split:
      "Non : séparer permet de demander les bonnes informations au bon moment.",
  },
];

const multipageExample = [
  [
    "Création de site vitrine — professionnel qui veut présenter son activité",
    "« Pouvez-vous créer un site crédible pour mon entreprise ? » — pages réellement publiables, méthode de collecte et limites de l’offre",
    "Préparer un projet de site — adresse candidate fictive : /sites-vitrines",
  ],
  [
    "Application métier — dirigeant dont l’équipe perd du temps dans un processus",
    "« Peut-on remplacer nos tableaux et doubles saisies par un outil adapté ? » — parcours expliqué, maquette signalée fictive ou fonctions publiques vérifiables",
    "Décrire le processus actuel — adresse candidate fictive : /applications-metier",
  ],
  [
    "Maintenance d’application — entreprise qui possède déjà une application",
    "« Qui peut corriger les bugs et faire évoluer l’outil sans perdre les accès ? » — plan de reprise, règles d’accès et exemple de suivi sans faux résultat client",
    "Préparer l’inventaire — adresse candidate fictive : /maintenance-applicative",
  ],
];

const prospectTasks = [
  {
    task: "Trouver la bonne offre",
    prompt:
      "« Votre entreprise possède déjà une application qui tombe en panne. Où iriez-vous ? »",
    observe:
      "La personne choisit-elle le bon lien sans que vous lui expliquiez le menu ?",
  },
  {
    task: "Comprendre ce qui sera obtenu",
    prompt:
      "« Après avoir lu cette page, que pensez-vous pouvoir demander à l’entreprise ? »",
    observe:
      "Sa réponse correspond-elle à l’offre réelle ou mélange-t-elle plusieurs services ?",
  },
  {
    task: "Trouver la prochaine étape",
    prompt:
      "« Que feriez-vous maintenant, et quelles informations prépareriez-vous ? »",
    observe:
      "La page mène-t-elle vers une action claire sans forcer un contact commercial ?",
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
          { label: "Site one-page ou multipage" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez plusieurs services à présenter : faut-il tout garder sur une page ou créer une page par offre ? La réponse dépend des personnes visées, de leurs questions et de l’action attendue après lecture."
        heroAction={{
          href: "#carte",
          label: "Construire ma carte de pages",
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
            title: "Une règle de regroupement",
            description: "",
            color: "blue",
          },
          {
            number: "02",
            title: "Une carte en huit champs",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "Des pages à maintenir",
            description: "",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/landing-page-ou-site-vitrine",
            label: "Choisir entre landing page et site vitrine",
          },
          {
            href: "/guides/preparer-contenus-site-vitrine",
            label: "Préparer les contenus du site vitrine",
          },
          {
            href: "/guides/template-ou-site-sur-mesure",
            label: "Choisir entre template et site sur mesure",
          },
        ]}
        faqTitle="Questions fréquentes sur les sites one-page et multipages"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous avez choisi de créer un site vitrine durable, mais vous ne savez
          pas si vos trois services doivent tenir sur une seule page ou disposer
          chacun de leur propre page. Gardez une page lorsque vous parlez à la
          même personne, répondez à la même question et proposez la même action.
          Créez une adresse distincte — une <strong>URL</strong> — lorsqu’une
          offre s’adresse à un autre public, demande une autre explication ou
          conduit à une autre prochaine étape. Dans l’exemple illustratif fictif
          utilisé ici, une entreprise qui présente des sites vitrines, des
          applications métier et de la maintenance aura souvent besoin d’un
          accueil court puis d’une page par offre, car les questions et les
          éléments qui rassurent changent. Ce guide vous aide à écrire vos
          offres et questions, remplir une carte simple et écarter les pages qui
          n’apporteraient rien au lecteur.
        </p>

        <InfoBox
          variant="emerald"
          title="Même personne, même question, même action : gardez ensemble"
        >
          <p className="m-0">
            Si l’un de ces éléments change assez pour exiger sa propre réponse,
            créez une page distincte. Si tout reste commun, plusieurs sections
            bien titrées peuvent suffire. Le nombre de services affichés sur une
            brochure ne décide pas, à lui seul, du nombre de pages.
          </p>
        </InfoBox>

        <p>
          Ce guide suppose que vous avez déjà choisi un site vitrine durable. Si
          vous hésitez encore entre une page destinée à une campagne précise et
          un site qui présente l’entreprise dans la durée, commencez par{" "}
          <Link href="/guides/landing-page-ou-site-vitrine">
            comparer landing page et site vitrine
          </Link>
          . Le choix traité ici vient ensuite : comment répartir les réponses à
          l’intérieur de ce site.
        </p>

        <GuideToc
          items={[
            {
              id: "offres",
              label: "1. Écrivez vos offres et les questions avant le menu",
            },
            {
              id: "carte",
              label: "2. Remplissez huit champs pour chaque offre",
            },
            {
              id: "regrouper",
              label:
                "3. Regroupez seulement ce qui raconte la même conversation",
            },
            {
              id: "one-page",
              label: "4. Une page suffit quand l’offre reste cohérente",
            },
            {
              id: "multipage",
              label: "5. Séparez les pages lorsque la réponse change",
            },
            {
              id: "progressif",
              label: "6. Commencez simple et ajoutez des pages utiles",
            },
            {
              id: "seo",
              label: "7. Ce que plusieurs URL changent pour Google",
            },
            {
              id: "test",
              label: "8. Testez la carte comme un prospect",
            },
            {
              id: "accompagnement",
              label: "9. Quand faire relire l’architecture",
            },
            {
              id: "sources",
              label: "Sources et limites",
            },
          ]}
        />

        <h2 id="offres">
          1. Écrivez vos offres et les questions avant de dessiner le menu
        </h2>

        <p>
          Prenez une feuille ou des cartes. Écrivez une offre par carte avec les
          mots que vous utilisez dans un devis. Ne commencez pas par « Accueil
          », « À propos », « Services » ou « Contact » : ce sont des
          emplacements, pas encore les réponses que cherche un prospect.
        </p>

        <p>
          Sous chaque offre, notez les questions réellement entendues en
          rendez-vous, au téléphone ou par e-mail. Une question comme «
          intervenez-vous dans mon secteur ? » n’appelle pas la même page que «
          pouvez-vous reprendre l’application construite par mon ancien
          prestataire ? ». Gardez les formulations ordinaires, même si elles ne
          ressemblent pas à des mots-clés.
        </p>

        <div className="not-prose my-7 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "CARTE 1",
              title: "Ce que vous vendez",
              example:
                "Exemple fictif : créer un site qui présente clairement une activité locale.",
              color:
                "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20",
            },
            {
              label: "CARTE 2",
              title: "La question entendue",
              example:
                "Exemple fictif : « Mes clients vont-ils comprendre ce que je propose ? »",
              color:
                "border-violet-200 bg-violet-50 dark:border-violet-900 dark:bg-violet-950/20",
            },
            {
              label: "CARTE 3",
              title: "Ce que la personne fera ensuite",
              example:
                "Exemple fictif : préparer les informations nécessaires à une demande de devis.",
              color:
                "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20",
            },
          ].map((card) => (
            <article
              key={card.label}
              className={`rounded-2xl border p-5 ${card.color}`}
            >
              <p className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                {card.label}
              </p>
              <h3 className="mb-0 mt-3 text-base font-semibold text-zinc-950 dark:text-white">
                {card.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {card.example}
              </p>
            </article>
          ))}
        </div>

        <p>
          Vous pouvez constater que plusieurs lignes commerciales forment une
          seule offre. « Installation », « formation » et « assistance au
          démarrage » peuvent être trois parties du même service, destinées à la
          même personne et conclues par la même demande. Les séparer par réflexe
          produirait des pages maigres et répétitives.
        </p>

        <p>
          L’inverse existe aussi. Une entreprise écrit parfois « nos solutions »
          sur une seule page alors qu’elle parle successivement à un commerçant
          qui veut un site, à un dirigeant qui cherche un logiciel interne et à
          une équipe qui doit faire reprendre une application. Ces personnes ne
          posent pas la même question. Elles ne doivent pas démêler les trois
          réponses dans une longue liste.
        </p>

        <h2 id="carte">2. Remplissez huit champs pour chaque offre</h2>

        <p>
          Recopiez les huit champs ci-dessous dans votre tableur. Une ligne
          correspond à une offre ou à une question qui pourrait devenir une
          page. Vous n’avez pas besoin d’écrire le texte final : une phrase
          précise par case suffit pour prendre la décision.
        </p>

        <GuideTable
          caption="Les huit champs de la carte de pages"
          headers={["Champ", "Question à poser", "Résultat attendu"]}
          rows={architectureFields.map((item) => [
            item.field,
            item.question,
            item.output,
          ])}
        />

        <p>
          Commencez par l’offre, le public, la question et l’action. Ces quatre
          cases portent la décision principale. Ajoutez ensuite la preuve, la
          personne responsable et l’événement de mise à jour. Une page qui n’a
          personne pour vérifier ses informations vieillira, qu’elle soit seule
          ou entourée de vingt autres.
        </p>

        <InfoBox variant="amber" title="Une case vide peut imposer d’attendre">
          <p className="m-0">
            Si l’offre n’est pas stabilisée, si aucune question réelle n’est
            connue ou si l’entreprise ne possède aucun élément publiable pour
            l’expliquer, ne créez pas une page uniquement pour occuper une place
            dans le menu. Clarifiez l’offre ou préparez le contenu avant de
            payer sa réalisation.
          </p>
        </InfoBox>

        <p>
          Si vous n’avez pas encore réuni les descriptions, les images et les
          éléments vérifiables, utilisez d’abord le guide pour{" "}
          <Link href="/guides/preparer-contenus-site-vitrine">
            préparer les contenus du site vitrine
          </Link>
          . La carte de pages répartit une matière existante ; elle ne peut pas
          inventer ce que l’entreprise ne sait pas encore expliquer.
        </p>

        <h2 id="regrouper">
          3. Regroupez seulement ce qui raconte la même conversation
        </h2>

        <p>
          Posez les quatre questions suivantes à chaque paire de cartes. Une
          petite différence ne justifie pas automatiquement une nouvelle page.
          Séparez lorsque la différence oblige à réécrire l’essentiel de la
          réponse ou change réellement ce que la personne doit faire.
        </p>

        <div className="not-prose my-7 space-y-4">
          {decisionChecks.map((check, index) => (
            <article
              key={check.title}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-start gap-3 border-b border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <h3 className="m-0 pt-1 text-base font-semibold text-zinc-950 dark:text-white">
                  {check.title}
                </h3>
              </div>
              <div className="grid gap-0 sm:grid-cols-2">
                <div className="border-b border-zinc-200 p-4 sm:border-b-0 sm:border-r dark:border-zinc-800">
                  <p className="m-0 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                    Garder ensemble
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {check.keep}
                  </p>
                </div>
                <div className="p-4">
                  <p className="m-0 text-xs font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                    Envisager une page distincte
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {check.split}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p>
          Écrivez la justification dans la dernière colonne de votre tableau. «
          Séparer pour le SEO » est trop vague. « Séparer parce que le dirigeant
          qui cherche une application métier doit expliquer son processus, alors
          que le commerçant qui veut un site prépare ses offres et ses visuels »
          décrit une différence exploitable.
        </p>

        <h2 id="one-page">4. Une page suffit quand l’offre reste cohérente</h2>

        <p>
          <strong>Exemple illustratif fictif, situation A :</strong> une petite
          entreprise numérique sait créer des sites, des applications et assurer
          de la maintenance, mais elle décide de commercialiser au lancement une
          seule offre : créer puis entretenir un site vitrine pour des
          professionnels locaux. Les autres compétences ne sont pas encore des
          offres autonomes.
        </p>

        <p>
          Le public, la question et l’action restent communs. Le prospect veut
          comprendre si l’entreprise peut construire une présence crédible,
          quels contenus préparer, comment le site sera suivi et comment
          demander une proposition. Une seule page peut conduire cette
          conversation sans détour.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 dark:border-emerald-900 dark:bg-emerald-950/20 sm:p-6">
          <p className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
            Architecture one-page de l’exemple fictif
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "À qui s’adresse le service",
              "Ce que comprend la création du site",
              "Les contenus à préparer",
              "Les éléments réels qui rassurent",
              "La manière d’entretenir le site",
              "Les informations pour demander un devis",
            ].map((section, index) => (
              <div
                key={section}
                className="rounded-xl border border-emerald-200 bg-white p-4 dark:border-emerald-900 dark:bg-zinc-950"
              >
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  SECTION {index + 1}
                </span>
                <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                  {section}
                </p>
              </div>
            ))}
          </div>
          <p className="mb-0 mt-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            La page se termine par une seule demande de contact, commune à toute
            l’offre. L’entreprise ne crée pas encore de page « application
            métier » : elle n’a pas décidé de vendre cette offre, de la prouver
            ni de la maintenir publiquement.
          </p>
        </div>

        <p>
          Une page unique ne signifie pas un texte compact sans repères. Google{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommande d’organiser un contenu long en paragraphes, sections et
            titres qui facilitent sa lecture
          </a>
          . Le{" "}
          <a
            href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3C rappelle aussi que les titres et libellés doivent décrire leur
            sujet ou leur but
          </a>
          . Un prospect doit pouvoir parcourir la page et reconnaître la section
          qui répond à sa question.
        </p>

        <p>
          Gardez une page par choix, pas par économie automatique. Si la page
          doit bientôt recevoir trois publics, trois formulaires et trois séries
          de réponses sans rapport, l’économie recherchée aujourd’hui peut
          réapparaître sous forme de réécriture. À l’inverse, ne fabriquez pas
          plusieurs pages lorsque des titres clairs suffisent à organiser une
          seule réponse.
        </p>

        <h2 id="multipage">5. Séparez les pages lorsque la réponse change</h2>

        <p>
          <strong>Exemple illustratif fictif, situation B :</strong> la même
          entreprise décide maintenant de commercialiser réellement trois offres
          distinctes : créer un site vitrine, développer une application métier
          et reprendre la maintenance d’une application existante. Les
          compétences existaient déjà ; ce sont les publics, les questions, les
          explications et les actions commerciales qui changent l’architecture.
        </p>

        <GuideTable
          caption="Exemple illustratif fictif — trois réponses qui méritent leur propre page"
          headers={[
            "Offre et public",
            "Question et éléments à préparer",
            "Action et adresse candidate",
          ]}
          rows={multipageExample}
        />

        <p>
          L’accueil ne répète pas ces trois pages. Il aide la personne à
          reconnaître sa situation, résume chaque réponse et lui donne un lien
          descriptif vers la bonne adresse. La page d’offre peut ensuite
          approfondir les limites, les étapes, les éléments qui rassurent et les
          informations nécessaires au contact.
        </p>

        <p>
          Toutes les pages ne doivent pas forcément encombrer le premier niveau
          du menu. Le menu présente les chemins importants pour les visiteurs.
          Des liens placés dans une phrase peuvent relier une question à sa
          suite logique. Google indique que les liens explorables l’aident à
          trouver d’autres pages, et que{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            leur texte visible donne aux internautes et à Google des indications
            sur la page de destination
          </a>
          . Écrivez donc « maintenance d’une application existante » plutôt que
          « en savoir plus ».
        </p>

        <InfoBox
          variant="amber"
          title="Une page distincte doit posséder une réponse distincte"
        >
          <p className="m-0">
            Changer le titre et quelques mots ne suffit pas. Si deux adresses
            reprennent la même promesse, les mêmes paragraphes et la même
            action, regroupez-les. Une adresse devient utile lorsqu’elle peut
            répondre honnêtement à sa propre question et être maintenue sans
            copier sa voisine.
          </p>
        </InfoBox>

        <h2 id="progressif">6. Commencez simple et ajoutez des pages utiles</h2>

        <p>
          Le choix n’est pas forcément « une page maintenant pour toujours » ou
          « un grand site dès le premier jour ». Vous pouvez publier une
          architecture progressive : un accueil qui explique l’entreprise, une
          première page pour l’offre la mieux définie, puis une liste des
          réponses à produire lorsque leur contenu et leur responsable seront
          prêts.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
          {[
            {
              label: "MAINTENANT",
              title: "Publier la réponse déjà défendable",
              body: "L’offre, le public, les éléments qui rassurent et l’action sont connus. La page peut être relue et entretenue.",
              color:
                "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20",
            },
            {
              label: "ENSUITE",
              title: "Préparer la prochaine réponse",
              body: "Les questions existent, mais les exemples, les limites ou la personne responsable doivent encore être réunis.",
              color:
                "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20",
            },
            {
              label: "PAS ENCORE",
              title: "Refuser la page de remplissage",
              body: "Le seul motif est un mot-clé, une ville ou une ligne de menu. Aucun contenu utile et distinct n’est prêt.",
              color:
                "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20",
            },
          ].map((step) => (
            <article
              key={step.label}
              className={`rounded-2xl border p-5 ${step.color}`}
            >
              <p className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
                {step.label}
              </p>
              <h3 className="mb-0 mt-3 text-base font-semibold text-zinc-950 dark:text-white">
                {step.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <p>
          Donnez dès le départ un nom clair aux réponses candidates. Google
          explique que des{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            adresses descriptives peuvent aider les utilisateurs à comprendre le
            contenu d’un résultat
          </a>
          . Une adresse comme `/maintenance-applicative` explique davantage son
          sujet que `/page-2`. Cette règle ne vous oblige pas à créer l’adresse
          avant que sa page soit prête.
        </p>

        <p>
          Révisez la carte lorsque l’offre, le public, la prochaine action ou la
          personne responsable change. Une nouvelle ligne de service ne devient
          pas automatiquement une nouvelle page. Reprenez les huit champs,
          comparez avec les réponses existantes et justifiez la séparation.
        </p>

        <h2 id="seo">
          7. Ce que plusieurs URL changent pour Google — et ce qu’elles ne
          garantissent pas
        </h2>

        <p>
          Après avoir découvert et exploré une page, Google peut en analyser le
          texte, les images et les autres éléments, puis tenter de l’enregistrer
          dans son index. Sa documentation sur le{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            fonctionnement de Google Search
          </a>{" "}
          appelle cette étape l’<strong>indexation</strong>. Une page unique
          peut donc apparaître dans Google. Pour être prise en compte, elle doit
          notamment permettre l’accès au robot de Google, fonctionner
          correctement et présenter un contenu que celui-ci peut lire. Les{" "}
          <a
            href="https://developers.google.com/search/docs/essentials/technical?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            exigences techniques minimales de Google
          </a>{" "}
          précisent ces conditions minimales. Google indique qu’une page qui les
          respecte n’est pas pour autant assurée d’apparaître dans ses
          résultats.
        </p>

        <p>
          Plusieurs pages donnent la possibilité d’écrire pour chaque réponse un
          titre, une adresse, un contenu et des liens propres. Le{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide de démarrage SEO de Google
          </a>{" "}
          indique qu’une organisation logique peut aider les internautes et les
          moteurs à comprendre la relation entre les pages. Il ne prescrit aucun
          nombre idéal de pages et ne dit pas que les multiplier améliore
          automatiquement la visibilité.
        </p>

        <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Ce qu’une page distincte permet
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>nommer précisément une réponse autonome ;</li>
              <li>expliquer une offre sans mélanger plusieurs publics ;</li>
              <li>
                relier cette réponse aux pages qui la précèdent ou la suivent ;
              </li>
              <li>
                faire relire et maintenir son contenu par la bonne personne.
              </li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Ce qu’elle ne garantit pas
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>son indexation effective ;</li>
              <li>une position sur une recherche ;</li>
              <li>des visites ou des demandes commerciales ;</li>
              <li>
                la qualité d’un texte simplement réparti sur plusieurs URL.
              </li>
            </ul>
          </article>
        </div>

        <p>
          Le référencement ne doit donc pas décider à la place du prospect.
          Commencez par les questions, les réponses et les actions. Utilisez
          ensuite les titres, les adresses et les liens pour rendre cette
          organisation compréhensible. Une page créée uniquement pour « mettre
          un mot-clé » n’a pas encore de raison suffisante d’exister.
        </p>

        <h2 id="test">8. Testez la carte comme un prospect</h2>

        <p>
          Avant le design et le développement, montrez la liste des pages et
          leurs titres à une personne qui n’a pas participé à sa préparation. Ne
          lui expliquez pas l’architecture. Donnez-lui trois tâches courtes et
          observez l’endroit où elle hésite.
        </p>

        <div className="not-prose my-7 space-y-4">
          {prospectTasks.map((item, index) => (
            <article
              key={item.task}
              className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-[180px_1fr_1fr]"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-violet-600 dark:text-violet-300">
                  TÂCHE {index + 1}
                </span>
                <h3 className="mb-0 mt-2 text-base font-semibold text-zinc-950 dark:text-white">
                  {item.task}
                </h3>
              </div>
              <div>
                <p className="m-0 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Question à donner
                </p>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {item.prompt}
                </p>
              </div>
              <div>
                <p className="m-0 text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Ce que vous observez
                </p>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {item.observe}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p>
          Si la personne demande ce que signifie un titre, réécrivez-le. Si deux
          liens semblent mener à la même réponse, regroupez-les ou rendez leur
          différence visible. Si aucune page ne correspond à sa question,
          ajoutez cette question à la carte avant d’ajouter une URL.
        </p>

        <p>
          Ce test ne prédit ni le référencement ni le taux de conversion. Il
          vérifie une chose plus simple : une personne peut-elle comprendre les
          choix proposés sans l’explication orale de celui qui a conçu le site ?
          Corriger ce problème avant les maquettes évite de demander au design
          de masquer une architecture confuse.
        </p>

        <h2 id="accompagnement">
          9. Quand faire relire l’architecture avant la réalisation
        </h2>

        <p>
          Une relecture devient utile lorsque plusieurs offres ont été
          stabilisées, que les questions des prospects sont connues et que
          l’entreprise peut préparer les éléments qui rassurent. Le travail
          consiste alors à vérifier les regroupements, nommer les pages et
          choisir les liens avant de dessiner les écrans.
        </p>

        <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Hagnéré Code peut être pertinent si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>vos offres sont réelles et suffisamment expliquées ;</li>
              <li>vous connaissez les questions posées par vos prospects ;</li>
              <li>
                vous pouvez préparer des éléments publiables pour rassurer ;
              </li>
              <li>
                une personne entretiendra les informations après la mise en
                ligne ;
              </li>
              <li>
                vous acceptez de commencer avec moins de pages si elles sont
                plus utiles.
              </li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Hagnéré Code ne sera pas le bon interlocuteur si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>vous demandez une page par mot-clé sans réponse propre ;</li>
              <li>
                vous voulez multiplier des pages de villes presque identiques ;
              </li>
              <li>les offres ne peuvent pas encore être décrites ;</li>
              <li>aucun contenu ni élément vérifiable ne sera fourni ;</li>
              <li>
                personne ne pourra corriger les informations devenues fausses.
              </li>
            </ul>
          </article>
        </div>

        <GuideInlineCTA
          title="Préparez votre demande de relecture avant de payer le design"
          description="Le bouton ouvre un brief guidé d’environ trois minutes. Votre demande est ensuite lue par notre équipe. Nous visons un premier retour personnalisé pendant le jour ouvré suivant, sans délai garanti, pour indiquer la prochaine étape utile : clarifier, retirer, regrouper ou approfondir certaines pages. Le brief et la réponse sont gratuits et sans engagement ; ce premier retour n’est pas une validation automatique et complète de l’architecture."
          tags={[
            "Une raison claire par page",
            "Les pages inutiles peuvent être retirées",
            "Le plan reste évolutif",
          ]}
          ctaLabel="Préparer ma demande de relecture"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <p>
          Une page unique n’est ni un raccourci honteux ni une solution
          universelle. Plusieurs pages ne sont ni un signe automatique de
          professionnalisme ni une formule de référencement. Gardez ensemble ce
          qui parle à la même personne, répond à la même question et mène à la
          même action. Séparez ce qui exige une réponse autonome, puis ne
          construisez que les pages que l’entreprise peut réellement expliquer
          et maintenir.
        </p>

        <h2 id="sources">Sources et limites</h2>

        <p>
          Sources consultées le 23 juillet 2026. Les recommandations Google et
          les documents d’accessibilité peuvent évoluer ; revérifiez-les avant
          une modification importante de l’architecture.
        </p>

        <ul>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              découverte, exploration et indexation dans le fonctionnement de
              Google Search
            </a>
            .
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide de démarrage SEO
            </a>{" "}
            sur l’organisation logique, les adresses descriptives, les contenus
            lisibles et les titres.
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              bonnes pratiques concernant les liens explorables et leur texte
            </a>
            .
          </li>
          <li>
            Google Search Central —{" "}
            <a
              href="https://developers.google.com/search/docs/essentials/technical?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              exigences techniques minimales et absence de garantie d’apparition
              dans les résultats
            </a>
            .
          </li>
          <li>
            W3C Web Accessibility Initiative —{" "}
            <a
              href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              comprendre le critère sur les titres et libellés descriptifs
            </a>
            .
          </li>
        </ul>

        <p>
          La règle « même public, même question, même réponse, même action » et
          la carte en huit champs sont des recommandations éditoriales Hagnéré
          Code. Google ne prescrit aucun nombre idéal de pages. Ce guide ne
          fournit aucun prix, délai, nombre de mots, volume de recherche, gain
          de position ou garantie de conversion. L’architecture finale dépend de
          vos offres réelles, des questions de vos prospects, des contenus
          disponibles et des personnes qui les maintiendront.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
