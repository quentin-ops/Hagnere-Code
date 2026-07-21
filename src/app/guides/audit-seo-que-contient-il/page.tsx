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

const guide = getGuide("audit-seo-que-contient-il");

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
        alt: "Audit SEO : ce que le rapport doit expliquer et permettre de corriger",
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
      name: "Audit SEO : que doit-il contenir ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Quelle est la différence entre un audit SEO et un scan automatisé ?",
    answer:
      "Le scan trouve des alertes ; l’audit vous dit lesquelles méritent votre temps et votre budget. Un logiciel peut repérer des liens cassés, des balises absentes ou des pages lentes. L’auditeur vérifie ensuite les pages concernées, les données disponibles, l’effet possible sur vos visiteurs et l’ordre des corrections. Un export d’outil sans explication n’est donc pas un audit complet.",
  },
  {
    question: "Que doit contenir le rapport final d’un audit SEO ?",
    answer:
      "Le rapport doit vous permettre de décider quoi faire, dans quel ordre et avec qui. Il précise les pages et les données examinées, explique les problèmes avec des exemples, distingue les faits des hypothèses, classe les actions par importance et indique comment contrôler chaque correction. Les listes techniques détaillées peuvent rester en annexe.",
  },
  {
    question: "Quels accès faut-il donner à l’auditeur ?",
    answer:
      "Donnez d’abord des accès en lecture seule aux outils nécessaires. Search Console et votre outil de mesure d’audience suffisent souvent pour commencer. Selon le problème, l’auditeur peut ensuite demander les traces du serveur, l’administration du site ou des données commerciales. Chaque accès supplémentaire doit avoir une raison claire, une durée et un niveau de droit adapté.",
  },
  {
    question: "Combien de pages faut-il analyser ?",
    answer:
      "Le bon nombre dépend du site, pas d’un forfait universel. Un petit site peut être contrôlé page par page. Pour une grande boutique, il faut couvrir chaque type de page, les sections importantes et un échantillon expliqué. Le rapport doit dire combien d’adresses ont été trouvées, combien ont été examinées et ce qui est resté hors de l’analyse.",
  },
  {
    question: "Comment savoir quelles corrections SEO faire en premier ?",
    answer:
      "Commencez par ce qui empêche une page importante d’être trouvée, comprise ou utilisée. Regardez ensuite le nombre de pages touchées, leur rôle commercial, la certitude du diagnostic, le coût de la correction et le risque de régression. Une erreur sur un formulaire de contact peut être plus urgente que des centaines de descriptions manquantes.",
  },
  {
    question: "Un audit SEO garantit-il une hausse de trafic ?",
    answer:
      "Non. Il peut garantir qu’un problème est documenté et qu’une correction sera vérifiable, pas que Google donnera une position ou un volume de visites précis. Une page techniquement accessible reste seulement susceptible d’être indexée. Le contenu, la concurrence, la demande et les évolutions du moteur comptent aussi.",
  },
  {
    question: "Faut-il toujours commander un audit SEO complet ?",
    answer:
      "Non. Un contrôle ciblé est souvent plus utile lorsque la question est précise : une chute sur une catégorie, des pages qui disparaissent de Google ou une refonte à préparer. L’audit complet est pertinent lorsque les causes sont inconnues, que plusieurs parties du site sont concernées ou qu’il faut bâtir un plan de travail global.",
  },
  {
    question: "Qui doit appliquer les recommandations ?",
    answer:
      "La personne dépend de l’action : développeur, rédacteur, responsable marketing, hébergeur ou direction. Le rapport doit le préciser. Il doit aussi séparer l’analyse, l’autorisation de modifier le site et la vérification finale. Même si le même prestataire réalise plusieurs étapes, vous devez garder vos accès et savoir exactement ce qui a changé.",
  },
];

function SeoAuditReceptionSheet() {
  const fields = [
    [
      "1",
      "Le constat",
      "Que voit-on précisément aujourd’hui ?",
      "text-emerald-300",
    ],
    [
      "2",
      "Les pages",
      "Quelles pages et quelles dates ont été examinées ?",
      "text-blue-300",
    ],
    [
      "3",
      "L’enjeu",
      "Pourquoi cela compte-t-il pour vos visiteurs ou votre activité ?",
      "text-amber-300",
    ],
    [
      "4",
      "La correction",
      "Que faut-il changer, sans ambiguïté ?",
      "text-violet-300",
    ],
    [
      "5",
      "Le responsable",
      "Qui décide, qui réalise et qui contrôle ?",
      "text-cyan-300",
    ],
    [
      "6",
      "Le contrôle",
      "Quel test permettra de fermer la tâche ?",
      "text-rose-300",
    ],
  ];

  return (
    <figure
      id="fiche-reception"
      className="not-prose my-8 scroll-mt-24 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="seo-reception-title"
    >
      <figcaption id="seo-reception-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
          À vérifier pour chaque recommandation
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Six réponses avant de financer une correction
        </span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-400">
          Une réponse manque ? Demandez-la avant de lancer le travail, surtout
          si la correction est coûteuse ou difficile à annuler.
        </span>
      </figcaption>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map(([number, title, description, color]) => (
          <div
            key={number}
            className="rounded-xl border border-white/10 bg-white/[0.045] p-4"
          >
            <div className="flex items-center gap-2">
              <span
                className={
                  "flex size-6 items-center justify-center rounded-full bg-white/5 text-xs font-bold " +
                  color
                }
              >
                {number}
              </span>
              <p className="m-0 text-sm font-bold text-white">{title}</p>
            </div>
            <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </figure>
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
          { label: "Audit SEO : que doit-il contenir ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous envisagez un audit SEO, ou vous venez d’en recevoir un ? Voici ce que le rapport doit expliquer pour que vous sachiez quoi corriger, dans quel ordre et pourquoi — sans devoir devenir spécialiste de Google."
        heroAction={{
          href: "#fiche-reception",
          label: "Contrôler une recommandation",
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
            title: "Ce que le rapport doit expliquer",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Comment choisir les priorités",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Comment contrôler les corrections",
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
            href: "/guides/prix-referencement-naturel",
            label: "Prix du référencement naturel",
          },
          {
            href: "/guides/refonte-sans-perdre-son-seo",
            label: "Refondre sans perdre son SEO",
          },
          {
            href: "/guides/choisir-son-agence-web",
            label: "Choisir son agence web",
          },
          {
            href: "/services/referencement-google",
            label: "Notre accompagnement SEO",
          },
        ]}
        faqTitle="Comprendre un audit SEO avant de le commander ou de l’accepter"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous cherchez peut-être à comprendre pourquoi votre site ne remonte
          pas sur Google, pourquoi les visites baissent ou ce qu’une agence va
          réellement vous livrer. Un <strong>audit SEO</strong> est l’examen du
          site, de ses contenus et de ses données pour repérer ce qui limite sa
          visibilité dans les moteurs de recherche. À la fin, vous devez savoir
          <strong>
            {" "}
            ce qui pose problème, ce qu’il faut traiter d’abord, qui doit s’en
            charger et comment vérifier le résultat
          </strong>
          . Si le rapport se contente d’aligner des centaines d’alertes
          techniques, il ne vous aide pas encore à décider.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Un audit SEO utile contient cinq choses : les pages et les données
          examinées, les problèmes illustrés par des exemples, leur conséquence
          probable, un plan classé par importance et un moyen de contrôler
          chaque correction. Il ne garantit ni une première position, ni un
          nombre de visites. Il transforme une situation floue en décisions
          compréhensibles et vérifiables.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "quatre-resultats",
              label: "Ce que vous devez pouvoir décider",
            },
            {
              id: "quatre-prestations",
              label: "Scan, audit, conseil ou correction ?",
            },
            {
              id: "perimetre",
              label: "Ce que l’auditeur a réellement examiné",
            },
            {
              id: "sources-preuves",
              label: "Pourquoi plusieurs sources sont nécessaires",
            },
            { id: "socle", label: "Les contrôles indispensables" },
            { id: "modules", label: "Les contrôles propres à votre site" },
            { id: "rapport", label: "À quoi ressemble un bon rapport" },
            { id: "reception", label: "Contrôler une recommandation" },
            {
              id: "prioriser",
              label: "Choisir ce qu’il faut corriger d’abord",
            },
            { id: "niveau", label: "Audit ciblé ou audit complet ?" },
            { id: "apres", label: "Que faire après le rapport ?" },
            { id: "alertes", label: "Les signaux qui doivent vous alerter" },
            { id: "sources-limites", label: "Sources et limites" },
          ]}
        />

        <h2 id="quatre-resultats">
          À la fin de l’audit, que devez-vous pouvoir décider ?
        </h2>

        <p>
          Imaginez que vous recevez 80 pages et un score de 62 sur 100. Vous
          savez que le site possède des « erreurs », mais pas si elles empêchent
          un prospect de vous trouver, si elles touchent une page importante ou
          si elles valent 30 minutes ou trois semaines de travail. Le rapport
          est long, mais la décision reste entière.
        </p>

        <p>Un bon audit doit répondre à ces quatre questions de direction :</p>

        <GuideTable
          headers={["Question", "Réponse attendue", "Décision possible"]}
          rows={[
            [
              "Quelle est la situation aujourd’hui ?",
              "Pages examinées, période, outils, accès et limites de l’analyse.",
              "Accepter le diagnostic ou demander les éléments manquants.",
            ],
            [
              "Qu’est-ce qui gêne vraiment le site ?",
              "Problèmes expliqués avec des exemples et un degré de certitude.",
              "Distinguer le problème réel de la simple alerte d’un logiciel.",
            ],
            [
              "Que faut-il faire d’abord ?",
              "Actions classées selon l’enjeu, le nombre de pages touchées et l’effort.",
              "Allouer le budget et choisir les bons intervenants.",
            ],
            [
              "Comment vérifier le travail ?",
              "Un test précis pour chaque correction et une mesure à suivre ensuite.",
              "Valider la livraison sans exiger une promesse de position Google.",
            ],
          ]}
        />

        <p>
          Une correction technique et son effet commercial ne se contrôlent pas
          de la même façon. On peut vérifier immédiatement qu’un lien fonctionne
          ou qu’une page est accessible. On ne peut pas garantir quand Google
          l’indexera, à quelle position elle apparaîtra ni combien de demandes
          elle générera. Google rappelle qu’une page conforme à ses{" "}
          <a
            href="https://developers.google.com/search/docs/essentials/technical?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            exigences techniques minimales
          </a>{" "}
          reste seulement susceptible d’être indexée.
        </p>

        <h2 id="quatre-prestations">
          Un scan, un audit, des conseils et des corrections ne sont pas la même
          chose
        </h2>

        <p>
          Cette distinction évite beaucoup de déceptions. Un outil automatique
          peut être utile pour trouver rapidement des anomalies, mais il ne
          connaît ni vos marges, ni vos meilleurs services, ni la raison pour
          laquelle une page existe. Demandez clairement ce qui est inclus dans
          la proposition reçue.
        </p>

        <GuideTable
          headers={[
            "Ce que vous achetez",
            "Ce que vous recevez",
            "Ce qui reste à faire",
          ]}
          rows={[
            [
              "Un scan automatique",
              "Une liste d’alertes sur les pages parcourues par un logiciel.",
              "Comprendre les causes, vérifier les exemples et choisir les priorités.",
            ],
            [
              "Un audit SEO",
              "Une analyse expliquée et un plan d’actions classé.",
              "Décider, faire réaliser les corrections et les contrôler.",
            ],
            [
              "Une stratégie SEO",
              "Les publics, les sujets et les pages à développer pour être trouvé.",
              "Vérifier que le site peut soutenir cette stratégie.",
            ],
            [
              "La mise en œuvre",
              "Les contenus, réglages ou développements effectivement réalisés.",
              "Contrôler la livraison et observer les effets dans le temps.",
            ],
          ]}
        />

        <InfoBox variant="amber" title="La question à poser avant de signer">
          « À la fin de votre intervention, quelles décisions pourrons-nous
          prendre sans refaire l’analyse ? » La réponse doit parler de votre
          site, de vos pages et des actions attendues — pas seulement du nombre
          d’outils utilisés ou de lignes dans le rapport.
        </InfoBox>

        <h2 id="perimetre">
          Le rapport doit dire ce que l’auditeur a réellement examiné
        </h2>

        <p>
          La mention « audit complet » ne suffit pas. Votre site peut comprendre
          une boutique, plusieurs langues, un espace client, un ancien blog ou
          des pages créées automatiquement. Si une partie n’a pas été regardée,
          vous devez le savoir avant d’interpréter les conclusions.
        </p>

        <p>Demandez une page simple qui précise :</p>

        <ul>
          <li>les domaines et les parties du site incluses ou exclues ;</li>
          <li>la date de l’analyse et la période de trafic étudiée ;</li>
          <li>le nombre d’adresses trouvées, parcourues et vérifiées ;</li>
          <li>les types de pages contrôlés à la main ;</li>
          <li>
            les accès utilisés et les données qui n’étaient pas disponibles ;
          </li>
          <li>
            les événements récents : refonte, panne, campagne ou changement de
            mesure.
          </li>
        </ul>

        <p>
          Un <strong>crawl</strong> est simplement le parcours automatique des
          adresses du site. Sa couverture dépend de ses réglages. Bing le
          précise pour son propre{" "}
          <a
            href="https://www.bing.com/webmasters/help/site-scan-623520c9"
            target="_blank"
            rel="noreferrer"
          >
            outil Site Scan
          </a>{" "}
          : la profondeur, la vitesse et le nombre de pages peuvent être
          limités. Un total d’alertes sans ces informations n’est donc pas
          comparable d’un audit à l’autre.
        </p>

        <h2 id="sources-preuves">
          Pourquoi l’audit doit croiser plusieurs sources
        </h2>

        <p>
          Chaque outil voit une partie différente de la réalité. Search Console
          montre ce qui se passe dans Google. Votre outil de statistiques suit
          une partie des visites. Les données commerciales indiquent si un
          contact devient un client. Un bon audit rapproche ces informations au
          lieu de prétendre qu’une seule suffit.
        </p>

        <GuideTable
          headers={[
            "Source",
            "Ce qu’elle permet de comprendre",
            "Ce qu’elle ne dit pas seule",
          ]}
          rows={[
            [
              "Parcours automatique du site",
              "Liens, erreurs, redirections, balises et pages rencontrées.",
              "L’importance commerciale d’une page ou la cause certaine d’un problème.",
            ],
            [
              "Google Search Console",
              "Requêtes, impressions, clics et informations données par Google.",
              "Toutes les requêtes, les autres moteurs ou la qualité d’un prospect.",
            ],
            [
              "Outil de mesure d’audience",
              "Visites et actions enregistrées selon sa configuration.",
              "Les visites bloquées, non consenties ou les ventes réalisées hors ligne.",
            ],
            [
              "Traces du serveur",
              "Les demandes réellement reçues par le site, y compris celles des robots.",
              "Pourquoi un moteur a choisi une page ou si son contenu convainc.",
            ],
            [
              "Lecture humaine et données métier",
              "Clarté de l’offre, parcours de contact et valeur des demandes reçues.",
              "Une tendance représentative sans données ni test auprès de lecteurs.",
            ],
          ]}
        />

        <p>
          Il est normal que Search Console et l’outil de mesure d’audience
          n’affichent pas exactement les mêmes nombres : leurs définitions et
          leurs méthodes diffèrent. La{" "}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            documentation de Google sur ces écarts
          </a>{" "}
          invite à comprendre les différences plutôt qu’à forcer une égalité.
        </p>

        <h2 id="socle">Les contrôles que tout audit sérieux doit couvrir</h2>

        <p>
          Le vocabulaire technique importe moins que la question posée. Vous
          n’avez pas besoin de mémoriser cent points de contrôle : vous devez
          comprendre pourquoi une page importante pourrait ne pas être trouvée,
          lue ou utilisée.
        </p>

        <GuideTable
          headers={[
            "Question de dirigeant",
            "Ce que l’auditeur vérifie",
            "Décision attendue",
          ]}
          rows={[
            [
              "Google peut-il atteindre les bonnes pages ?",
              "Liens, erreurs, redirections, fichier robots.txt et plans du site.",
              "Rendre les pages utiles accessibles et retirer les chemins inutiles.",
            ],
            [
              "Google comprend-il quelle page montrer ?",
              "Doublons, instructions d’indexation et adresse de référence.",
              "Conserver, regrouper ou retirer les versions concurrentes.",
            ],
            [
              "Le site répond-il aux questions des prospects ?",
              "Clarté, profondeur, originalité et correspondance avec les recherches.",
              "Améliorer, fusionner, créer ou supprimer un contenu.",
            ],
            [
              "Les pages sont-elles faciles à trouver et à utiliser ?",
              "Navigation, liens internes, mobile, vitesse et parcours de contact.",
              "Lever les obstacles qui font abandonner un visiteur.",
            ],
            [
              "Pourrons-nous mesurer les progrès ?",
              "Accès, événements suivis, formulaires, appels et qualité des contacts.",
              "Corriger la mesure avant de conclure sur le retour du SEO.",
            ],
          ]}
        />

        <p>
          Deux raccourcis sont particulièrement fréquents. Un fichier sitemap
          aide les moteurs à découvrir des adresses, mais Google indique qu’il
          ne garantit ni leur exploration ni leur indexation. De même, des
          données structurées valides peuvent rendre une page admissible à un
          affichage enrichi sans garantir qu’il apparaisse. Consultez les
          explications officielles sur les{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            sitemaps
          </a>{" "}
          et les{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            données structurées
          </a>
          .
        </p>

        <h2 id="modules">
          Certains contrôles ne sont utiles que pour certains sites
        </h2>

        <p>
          Une boutique et un cabinet local n’ont pas les mêmes risques. Payer
          une liste identique pour tous les sites n’est pas un gage de
          profondeur. L’audit doit expliquer pourquoi il ajoute ou écarte les
          contrôles suivants.
        </p>

        <GuideTable
          headers={[
            "Votre situation",
            "Contrôle supplémentaire utile",
            "Question à résoudre",
          ]}
          rows={[
            [
              "Boutique en ligne",
              "Filtres, variantes, stocks, catégories et produits retirés.",
              "Le catalogue crée-t-il trop de pages ou masque-t-il celles qui vendent ?",
            ],
            [
              "Activité locale",
              "Établissement, coordonnées, zones réellement servies et pages locales.",
              "Chaque page correspond-elle à une activité réelle et crédible ?",
            ],
            [
              "Plusieurs langues ou pays",
              "Correspondance entre les versions et navigation internationale.",
              "Le bon contenu est-il proposé au bon public ?",
            ],
            [
              "Site très interactif",
              "Contenu disponible au chargement, erreurs et navigation en JavaScript.",
              "Les visiteurs et les moteurs reçoivent-ils toujours l’information importante ?",
            ],
            [
              "Refonte prochaine",
              "Inventaire des adresses, redirections et contrôles avant et après la mise en ligne.",
              "Comment éviter de perdre les pages déjà connues des moteurs ?",
            ],
            [
              "Site riche en articles",
              "Dates, auteurs, sources, catégories, contenus proches et mises à jour.",
              "Quels articles restent utiles et lesquels se concurrencent ?",
            ],
          ]}
        />

        <p>
          Les fonctions d’intelligence artificielle de Google ne demandent pas,
          à ce jour, un fichier ou un balisage spécial. La documentation sur les{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/ai-features?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            fonctionnalités d’IA dans Google Search
          </a>{" "}
          renvoie aux mêmes fondamentaux : contenu utile, accessible, visible
          dans la page et correctement relié. Cette documentation évolue ; elle
          doit être vérifiée au moment de l’audit.
        </p>

        <h2 id="rapport">À quoi ressemble un rapport vraiment exploitable ?</h2>

        <p>
          La direction doit pouvoir lire l’essentiel en quelques minutes, puis
          transmettre chaque action à la bonne personne. Les détails techniques
          sont utiles, mais ils viennent après la décision.
        </p>

        <ol>
          <li>
            <strong>Une synthèse courte :</strong> les trois à cinq sujets les
            plus importants, leur conséquence et la prochaine décision.
          </li>
          <li>
            <strong>Ce qui a été examiné :</strong> parties du site, période,
            outils, accès, volume et limites.
          </li>
          <li>
            <strong>Les constats :</strong> exemples de pages, explication en
            français courant et niveau de certitude.
          </li>
          <li>
            <strong>Le plan :</strong> action, responsable, ordre, charge
            indicative et dépendances.
          </li>
          <li>
            <strong>Le contrôle :</strong> test à réaliser lorsque la correction
            est livrée, puis indicateur à observer dans le temps.
          </li>
          <li>
            <strong>Les annexes :</strong> exports, captures et listes complètes
            pour les personnes qui exécuteront le travail.
          </li>
        </ol>

        <h2 id="reception">
          Contrôlez chaque recommandation avant de lancer le travail
        </h2>

        <SeoAuditReceptionSheet />

        <p>
          <strong>Exemple illustratif fictif :</strong> un logiciel signale « 1
          247 pages dupliquées — urgence élevée ». Pris seul, ce nombre ne dit
          pas si les pages sont visibles dans Google, utiles à vos clients ou
          volontairement proches. Voici comment transformer l’alerte en
          décision.
        </p>

        <GuideTable
          headers={["À demander", "Réponse exploitable"]}
          rows={[
            [
              "Ce qui a été vu",
              "Le 20 juillet, le logiciel a trouvé 1 247 adresses créées par les filtres de trois catégories ; 312 montrent presque le même contenu.",
            ],
            [
              "Ce que l’on ignore encore",
              "Les traces du serveur n’ont pas été fournies : on ne sait pas à quelle fréquence les moteurs visitent ces adresses.",
            ],
            [
              "Pourquoi cela compte",
              "Ces adresses compliquent la navigation et la maintenance ; leur effet sur la visibilité reste à confirmer.",
            ],
            [
              "Ce qu’il faut faire",
              "Tester une correction sur un seul type de filtre, sans toucher aux pages qui génèrent des ventes.",
            ],
            [
              "Comment contrôler",
              "Vérifier le fonctionnement des filtres et l’accès aux pages importantes avant d’étendre la correction.",
            ],
          ]}
        />

        <h2 id="prioriser">
          Comment choisir ce qu’il faut corriger en premier ?
        </h2>

        <p>
          N’utilisez pas automatiquement la gravité donnée par l’outil. Une
          alerte classée « critique » peut toucher une ancienne page sans
          visite. Une erreur moins impressionnante peut bloquer le formulaire de
          votre service le plus rentable. Pour chaque action, posez cinq
          questions :
        </p>

        <ul>
          <li>le problème empêche-t-il une page importante de fonctionner ?</li>
          <li>combien de pages et quels services sont concernés ?</li>
          <li>
            le lien entre le problème et la conséquence est-il certain ou
            seulement probable ?
          </li>
          <li>combien coûte la correction et que risque-t-elle de casser ?</li>
          <li>peut-on commencer par un petit test facile à annuler ?</li>
        </ul>

        <InfoBox variant="emerald" title="Deux moments de contrôle">
          À la livraison, vérifiez que la correction fonctionne : la bonne page
          répond, le lien mène au bon endroit, le formulaire envoie la demande.
          Ensuite, observez les impressions, les visites et les contacts sur une
          période adaptée. Le premier contrôle valide le travail ; le second
          étudie son effet sans l’inventer.
        </InfoBox>

        <h2 id="niveau">Audit ciblé ou audit complet : lequel choisir ?</h2>

        <p>
          Le plus gros rapport n’est pas toujours le meilleur achat. Partez de
          la question que vous devez résoudre. Le budget des différentes
          prestations est détaillé dans notre guide sur le{" "}
          <Link href="/guides/prix-referencement-naturel">
            prix du référencement naturel
          </Link>
          .
        </p>

        <GuideTable
          headers={[
            "Votre situation",
            "Format adapté",
            "Ce que vous devez recevoir",
          ]}
          rows={[
            [
              "Une question simple et bien localisée",
              "Contrôle interne ou avis ponctuel.",
              "Constat, décision, responsable et test final.",
            ],
            [
              "Une chute sur une section ou un problème précis",
              "Audit ciblé.",
              "Analyse des pages concernées, causes possibles et plan limité au problème.",
            ],
            [
              "Des causes inconnues ou une refonte importante",
              "Audit complet.",
              "Vue d’ensemble, contrôles propres au site et plan de travail ordonné.",
            ],
          ]}
        />

        <GuideInlineCTA
          title="Vous voulez savoir quel audit est réellement nécessaire ?"
          description="Expliquez-nous le site, le symptôme observé et la décision que vous devez prendre. Nous vous dirons quels accès et quels contrôles sont utiles — y compris lorsqu’un contrôle ciblé suffit et vous évite un audit trop large."
          tags={[
            "Réponse adaptée au problème",
            "Priorités compréhensibles",
            "Aucune promesse de position",
          ]}
          ctaLabel="Présenter mon problème SEO"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="apres">Que faire après avoir reçu le rapport ?</h2>

        <p>
          N’envoyez pas immédiatement tout le document au développeur avec la
          consigne « corriger ». Réunissez les personnes concernées, acceptez ou
          reformulez les actions importantes, puis lancez les corrections par
          petits groupes cohérents.
        </p>

        <ol>
          <li>
            Conservez les données et captures prises avant les changements.
          </li>
          <li>
            Validez les priorités avec la personne qui connaît les enjeux
            commerciaux.
          </li>
          <li>Nommez qui décide, qui réalise et qui contrôle chaque action.</li>
          <li>
            Commencez par les problèmes bloquants et les tests peu risqués.
          </li>
          <li>
            Vérifiez le site sur mobile et ordinateur après chaque mise en
            ligne.
          </li>
          <li>
            Observez ensuite les données sans attribuer trop vite toute
            variation à une seule correction.
          </li>
        </ol>

        <p>
          Une refonte demande un suivi particulier : liste des anciennes
          adresses, correspondance avec les nouvelles, redirections et contrôle
          après la mise en ligne. Notre guide pour{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">
            refondre un site sans perdre son SEO
          </Link>{" "}
          détaille cette opération.
        </p>

        <p>
          Une baisse de trafic peut aussi venir de plusieurs causes : changement
          technique, saison, évolution de la demande, mise à jour du moteur ou
          modification du contenu. La méthode officielle de Google pour{" "}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            analyser une baisse de trafic
          </a>{" "}
          recommande de conserver plusieurs explications possibles tant que les
          données ne permettent pas de trancher.
        </p>

        <h2 id="alertes">Les signaux qui doivent vous alerter</h2>

        <ul>
          <li>
            le rapport ne dit pas quelles pages et quelles dates ont été
            examinées ;
          </li>
          <li>un score global remplace l’explication des problèmes ;</li>
          <li>les alertes d’un logiciel sont copiées sans exemple concret ;</li>
          <li>toutes les erreurs sont présentées comme urgentes ;</li>
          <li>
            les recommandations ne disent ni qui intervient ni comment vérifier
            ;
          </li>
          <li>
            une conformité RGPD ou accessibilité est annoncée sans audit
            spécialisé ;
          </li>
          <li>
            l’auditeur demande des droits de modification avant d’expliquer
            pourquoi ;
          </li>
          <li>
            une position, un trafic, un délai ou un chiffre d’affaires sont
            garantis.
          </li>
        </ul>

        <p>
          Google recommande de commencer avec un accès Search Console en lecture
          seule, d’examiner les recommandations avant les modifications
          importantes et de se méfier des garanties de première position. Sa
          page officielle pour{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            choisir un prestataire SEO
          </a>{" "}
          constitue une bonne base. Notre guide pour{" "}
          <Link href="/guides/choisir-son-agence-web">
            choisir une agence web
          </Link>{" "}
          complète les questions sur le devis, les accès et la relation de
          travail.
        </p>

        <h2 id="sources-limites">Sources et limites de ce guide</h2>

        <p>
          Les documents ci-dessous ont été consultés le 20 juillet 2026. Ils
          peuvent évoluer. Un audit SEO ne remplace pas un audit juridique,
          l’examen complet de l’accessibilité ni une étude commerciale de vos
          prospects.
        </p>

        <ul>
          <li>
            Google Search Central : les{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/core-web-vitals?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Core Web Vitals
            </a>{" "}
            mesurent des aspects de l’expérience réelle, sans résumer à eux
            seuls le classement.
          </li>
          <li>
            Google explique aussi les{" "}
            <a
              href="https://developers.google.com/search/blog/2022/10/performance-data-deep-dive"
              target="_blank"
              rel="noreferrer"
            >
              limites des données Search Console
            </a>
            , notamment les requêtes masquées et les limites d’export.
          </li>
          <li>
            La CNIL encadre sous conditions l’exemption de consentement de
            certains outils de mesure d’audience : voir les{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience"
              target="_blank"
              rel="noreferrer"
            >
              règles relatives à la mesure d’audience
            </a>
            .
          </li>
          <li>
            Le{" "}
            <a
              href="https://accessibilite.numerique.gouv.fr/"
              target="_blank"
              rel="noreferrer"
            >
              référentiel général d’amélioration de l’accessibilité
            </a>{" "}
            possède sa propre méthode. Repérer un problème dans un audit SEO ne
            suffit pas à déclarer un site conforme.
          </li>
        </ul>

        <InfoBox
          variant="amber"
          title="Ce qu’un audit SEO peut honnêtement promettre"
        >
          Il peut rendre les problèmes compréhensibles, les décisions explicites
          et les corrections contrôlables. Il ne peut pas certifier une future
          position Google, un volume de trafic, un nombre de clients ni une
          conformité juridique complète.
        </InfoBox>

        <p>
          Vous pouvez évaluer notre{" "}
          <Link href="/services/referencement-google">
            accompagnement en référencement naturel
          </Link>{" "}
          avec les mêmes questions : quelles pages seront examinées, quelles
          actions seront proposées, qui les réalisera et comment vous pourrez
          les contrôler.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
