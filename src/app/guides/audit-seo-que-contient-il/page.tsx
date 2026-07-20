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
        alt: "Fiche de réception d’un audit SEO reliant preuve, décision et vérification",
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
      "Un scan parcourt un périmètre configuré et signale des motifs connus : codes HTTP, balises, liens ou profondeur, par exemple. Un audit confronte ces observations aux données des moteurs, aux modèles de pages, aux objectifs de l’entreprise et aux limites de la collecte. Il explique ce qui compte, ce qui ne compte pas, ce qui reste hypothétique et comment vérifier chaque correction.",
  },
  {
    question: "Que doit contenir le rapport final d’un audit SEO ?",
    answer:
      "Au minimum : le périmètre daté, les accès et outils utilisés, les exclusions, une synthèse de décision, les constats avec leurs preuves, un plan priorisé, les responsables pressentis, les critères d’acceptation et un protocole de mesure après mise en œuvre. Les exports bruts peuvent être annexés, mais ils ne remplacent pas l’interprétation.",
  },
  {
    question: "Quels accès faut-il donner à l’auditeur ?",
    answer:
      "Commencez par les droits de lecture nécessaires : Search Console, outil de mesure d’audience et, selon le sujet, gestionnaire de balises ou exports. Google recommande explicitement la lecture seule de Search Console au stade de l’audit. Les journaux serveur, le système de gestion du site ou les données commerciales peuvent compléter l’analyse, avec un périmètre et une autorisation séparés.",
  },
  {
    question: "Combien de pages faut-il analyser ?",
    answer:
      "Il n’existe pas de nombre universel. Un petit site peut être parcouru intégralement ; un grand catalogue demande souvent une couverture par modèles, sections, profondeur et valeur métier. Le rapport doit indiquer le nombre d’URL découvertes et analysées, les limites de l’outil, les exclusions, les règles d’échantillonnage et les modèles de pages testés manuellement.",
  },
  {
    question: "Comment prioriser les corrections SEO ?",
    answer:
      "Croisez la gravité réelle, la portée, la valeur des pages touchées, le niveau de confiance, l’effort et les dépendances. Une anomalie bloquant l’accès à une section rentable peut passer avant des centaines d’avertissements mineurs. La priorité doit rester compréhensible sans score magique et préciser ce qui sera vérifié après correction.",
  },
  {
    question: "Un audit SEO garantit-il l’indexation ou une hausse de trafic ?",
    answer:
      "Non. Google précise qu’une page conforme aux exigences techniques minimales est seulement éligible à l’indexation, sans garantie d’être indexée. Une correction peut rendre une page accessible ou cohérente ; elle ne garantit ni sa position, ni ses clics, ni les demandes commerciales. Le rapport doit séparer résultat technique contrôlable et effet futur à observer.",
  },
  {
    question: "Faut-il toujours commander un audit SEO complet ?",
    answer:
      "Non. Une vérification ciblée suffit souvent lorsqu’une question et un périmètre sont clairement identifiés : baisse sur une section, problème d’indexation, modèle de page ou préparation d’une décision. Un audit complet devient pertinent lorsque les causes sont inconnues, que plusieurs systèmes interagissent ou qu’une feuille de route globale doit être arbitrée.",
  },
  {
    question: "Qui doit mettre en œuvre les recommandations ?",
    answer:
      "Le rapport doit attribuer chaque tâche au bon rôle : direction, développement, contenu, design, hébergement ou prestataire SEO. L’auditeur peut aussi exécuter, mais le diagnostic, l’autorisation de modifier et la recette gagnent à rester explicitement séparés. Le commanditaire doit conserver ses accès et pouvoir vérifier ce qui a changé.",
  },
];

function SeoAuditReceptionSheet() {
  const fields = [
    ["1", "Fait", "Que peut-on reproduire aujourd’hui ?", "text-emerald-300"],
    [
      "2",
      "Périmètre",
      "Quelles URL, données et dates ont été vues ?",
      "text-blue-300",
    ],
    [
      "3",
      "Conséquence",
      "Quel risque est plausible, et avec quelle confiance ?",
      "text-amber-300",
    ],
    [
      "4",
      "Action",
      "Qui change quoi, avec quelles dépendances ?",
      "text-violet-300",
    ],
    [
      "5",
      "Réception",
      "Quel test prouve que la tâche est bien exécutée ?",
      "text-cyan-300",
    ],
    [
      "6",
      "Mesure",
      "Quand observer l’effet, et que ne peut-on pas conclure ?",
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
          Fiche de réception
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Une recommandation SEO recevable tient en six preuves
        </span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-400">
          Si une case reste vide, la recommandation doit être complétée,
          reformulée ou conservée comme hypothèse — pas exécutée par réflexe.
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

      <div className="mt-3 rounded-xl border border-white/10 bg-black/20 p-4">
        <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">
          Sortie attendue
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Accepter", "Demander une preuve", "Tester d’abord", "Écarter"].map(
            (decision) => (
              <span
                key={decision}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-300"
              >
                {decision}
              </span>
            ),
          )}
        </div>
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
        heroDescription="Un bon audit ne se contente pas de trouver des erreurs. Il indique ce qui a été observé, ce qui reste incertain, ce qu’il faut traiter en premier et comment une autre personne pourra exécuter puis vérifier le plan d’action."
        heroAction={{
          href: "#fiche-reception",
          label: "Voir la fiche de réception",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "4 résultats obligatoires",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "6 preuves par recommandation",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Aucun score magique",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
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
        faqTitle="Recevoir et exploiter un audit SEO : les questions utiles"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>Scène fictive :</strong> vous recevez un rapport de 83 pages.
          La couverture est rouge, le score du site vaut 62 sur 100 et 1 247 «
          erreurs critiques » sont annoncées. Pourtant, personne ne sait dire
          quelles pages génèrent des demandes, pourquoi ces alertes seraient
          prioritaires, qui doit intervenir ni comment accepter le travail.{" "}
          <strong>
            Ce document est un relevé, pas encore un audit exploitable.
          </strong>
        </p>

        <InfoBox variant="blue" title="La réponse en une minute">
          Un audit SEO utile remet quatre résultats : une référence datée de
          l’existant, un diagnostic argumenté avec ses limites, un plan
          exécutable et un protocole de vérification. Le nombre de contrôles ou
          de pages du PDF ne suffit pas. À la fin, une personne qui n’a pas mené
          l’analyse doit pouvoir décider, réaliser et réceptionner les actions.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "quatre-resultats",
              label: "Les quatre résultats obligatoires",
            },
            {
              id: "quatre-prestations",
              label: "Scan, audit, stratégie ou mise en œuvre ?",
            },
            { id: "perimetre", label: "Le contrat de périmètre" },
            {
              id: "sources-preuves",
              label: "Ce que chaque source peut prouver",
            },
            { id: "socle", label: "Le socle systématique" },
            { id: "modules", label: "Les modules conditionnels" },
            { id: "rapport", label: "Le contenu du rapport final" },
            { id: "reception", label: "La fiche de réception" },
            { id: "prioriser", label: "Prioriser sans score magique" },
            { id: "niveau", label: "Audit ciblé ou complet ?" },
            { id: "apres", label: "Après le rapport" },
            { id: "alertes", label: "Les signaux d’alerte" },
            { id: "sources-limites", label: "Sources et limites" },
          ]}
        />

        <h2 id="quatre-resultats">Les quatre résultats obligatoires</h2>

        <p>
          Un audit peut prendre des formes différentes, mais son utilité se
          vérifie avec quatre sorties. Si l’une manque, la mission laisse une
          partie de la décision à reconstruire.
        </p>

        <GuideTable
          headers={["Sortie", "Ce qu’elle contient", "Question de réception"]}
          rows={[
            [
              "1. Référence datée",
              "Périmètre, date, configuration, accès, outils, volumes et exclusions",
              "Pourrait-on refaire le même constat demain ?",
            ],
            [
              "2. Diagnostic",
              "Faits, causes plausibles, conséquences, confiance et données manquantes",
              "Le rapport sépare-t-il observation et interprétation ?",
            ],
            [
              "3. Plan exécutable",
              "Action, priorité, responsable, dépendances, charge et ordre",
              "Une équipe extérieure pourrait-elle le réaliser ?",
            ],
            [
              "4. Vérification",
              "Critère d’acceptation immédiat et mesure différée de l’effet",
              "Comment saura-t-on que la tâche est faite puis utile ?",
            ],
          ]}
        />

        <p>
          La distinction entre vérification immédiate et résultat différé est
          essentielle. Une redirection peut être testée dès sa livraison. Son
          effet éventuel sur l’exploration, l’indexation, les impressions ou les
          demandes s’observe ensuite, sans calendrier ni résultat garantis.
          Google rappelle qu’une page qui respecte ses exigences techniques
          minimales reste seulement <em>éligible</em> à l’indexation :
          l’indexation elle-même n’est pas garantie. Consultez les{` `}
          <a
            href="https://developers.google.com/search/docs/essentials/technical?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            exigences techniques de Google Search
          </a>
          .
        </p>

        <h2 id="quatre-prestations">
          Scan, audit, stratégie ou mise en œuvre ?
        </h2>

        <p>
          Ces quatre prestations peuvent se suivre, mais elles ne promettent pas
          le même résultat. Les confondre crée la plupart des déceptions : un
          export d’outil est reçu comme une feuille de route, ou une stratégie
          est vendue alors que l’accès technique n’a jamais été contrôlé.
        </p>

        <GuideTable
          headers={[
            "Prestation",
            "Question traitée",
            "Livrable normal",
            "Ne prouve pas",
          ]}
          rows={[
            [
              "Scan automatisé",
              "Quels motifs connus l’outil détecte-t-il dans le périmètre parcouru ?",
              "Liste d’URL, erreurs, avertissements et paramètres du crawl",
              "La cause, la valeur métier ou la priorité réelle",
            ],
            [
              "Audit SEO",
              "Qu’est-ce qui bloque, limite ou fragilise la visibilité et la mesure ?",
              "Diagnostic sourcé, limites et liste d’actions recevable",
              "Le résultat futur d’une correction",
            ],
            [
              "Stratégie SEO",
              "Quels publics, sujets, pages et avantages faut-il travailler ?",
              "Choix éditoriaux, architecture cible, objectifs et arbitrages",
              "Que le socle technique est sain si aucun audit ne l’a établi",
            ],
            [
              "Mise en œuvre",
              "Comment réaliser les actions autorisées ?",
              "Code, contenus, redirections, paramétrage et preuves de recette",
              "L’indépendance du diagnostic si la même partie vend tout le lot",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Dix mots techniques, traduits">
          <strong>Crawl</strong> : parcours automatisé des URL.{" "}
          <strong>Indexation</strong> : enregistrement possible d’une page par
          un moteur. <strong>Canonique</strong> : URL indiquée comme version de
          référence. <strong>Maillage interne</strong> : liens entre les pages
          du site. <strong>Journaux serveur</strong> : traces des requêtes
          reçues par le serveur. <strong>Données structurées</strong> : balisage
          lisible par machine décrivant le contenu.{" "}
          <strong>Core Web Vitals</strong> : trois mesures d’expérience réelle.{" "}
          <strong>Backlink</strong> : lien provenant d’un autre site.{" "}
          <strong>Robots.txt</strong> : fichier qui indique aux robots les zones
          qu’ils peuvent explorer. <strong>Noindex</strong> : instruction
          demandant de ne pas indexer une page.
        </InfoBox>

        <h2 id="perimetre">Le premier livrable est un contrat de périmètre</h2>

        <p>
          Avant la première recommandation, le rapport doit expliquer ce qu’il a
          réellement observé. « Audit complet du site » ne veut rien dire si le
          site possède plusieurs domaines, une boutique, un espace connecté, des
          pages générées en JavaScript ou des versions internationales.
        </p>

        <p>La page de périmètre doit au minimum préciser :</p>

        <ul>
          <li>
            les domaines, sous-domaines, répertoires et environnements inclus ;
          </li>
          <li>les dates d’extraction et la période de performance étudiée ;</li>
          <li>
            le nombre d’URL découvertes, parcourues et retenues, sans les
            confondre ;
          </li>
          <li>
            les limites de profondeur, de quota, de rendu JavaScript et de
            vitesse du crawl ;
          </li>
          <li>
            les modèles testés manuellement : accueil, service, article,
            catégorie, produit, recherche ou erreur ;
          </li>
          <li>
            les accès utilisés et les données refusées, absentes ou trop
            récentes ;
          </li>
          <li>
            les événements susceptibles de fausser la comparaison : refonte,
            panne, campagne, saisonnalité ou changement de mesure.
          </li>
        </ul>

        <p>
          Même un outil officiel doit être décrit. Bing présente par exemple
          Site Scan comme un crawl à la demande dont le périmètre, la
          profondeur, la vitesse et le quota sont configurables. Le nombre
          d’erreurs obtenu dépend donc aussi de la{` `}
          <a
            href="https://www.bing.com/webmasters/help/site-scan-623520c9"
            target="_blank"
            rel="noreferrer"
          >
            configuration du scan
          </a>
          , pas seulement de l’état du site.
        </p>

        <h2 id="sources-preuves">
          Ce que chaque source peut prouver — et ce qu’elle ignore
        </h2>

        <p>
          Aucun outil ne voit toute la chaîne. Le crawl simule un parcours ; la
          Search Console décrit la relation avec Google Search ; l’outil de
          mesure d’audience observe une partie des visites ; les données métier
          disent si une demande devient utile. L’audit professionnel rapproche
          ces vues sans forcer leur égalité.
        </p>

        <GuideTable
          headers={["Source", "Ce qu’elle apporte", "Angle mort à écrire"]}
          rows={[
            [
              "Crawl",
              "Liens, statuts HTTP, balises, profondeur, variantes d’URL et modèles rencontrés",
              "Ce qui est hors périmètre, non lié, protégé ou rendu différemment",
            ],
            [
              "Search Console",
              "Exploration, indexation déclarée, requêtes, impressions et clics Google",
              "Requêtes masquées, limites d’export, autres moteurs et conversion métier",
            ],
            [
              "Mesure d’audience",
              "Sessions observées, pages, événements et parcours selon la configuration",
              "Consentement, bloqueurs, définitions, trafic sans balise et ventes hors ligne",
            ],
            [
              "Journaux serveur",
              "Requêtes réellement reçues, robots, statuts, fréquence et ressources demandées",
              "Intention du moteur, qualité du contenu et action humaine après la réponse",
            ],
            [
              "Données de liens",
              "Domaines et pages référentes connus de la base utilisée",
              "Exhaustivité, valeur réelle, causalité et liens inconnus de l’outil",
            ],
            [
              "Revue humaine",
              "Clarté, cohérence avec l’offre, utilité, expertise visible et obstacles du parcours",
              "Représentativité sans test utilisateur ni données comportementales",
            ],
          ]}
        />

        <p>
          Des chiffres différents ne prouvent donc pas automatiquement une
          panne. Google documente que les clics Search Console et les sessions
          de l’outil de mesure d’audience ne coïncident pas exactement,
          notamment parce que les outils utilisent des systèmes et des
          définitions différents. L’important est d’expliquer les écarts
          importants et de comparer des tendances cohérentes. Voir la
          documentation{` `}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            Search Console et outil de mesure d’audience
          </a>
          .
        </p>

        <h2 id="socle">Le socle systématique de l’audit</h2>

        <p>
          Le socle n’est pas une liste de cent cases identiques. Il suit la
          manière dont une page peut être découverte, comprise, choisie puis
          reliée à un résultat. Pour chaque axe, l’auditeur doit sélectionner
          quelques preuves représentatives et indiquer la portée du problème.
        </p>

        <GuideTable
          headers={["Axe", "Contrôles attendus", "Décision produite"]}
          rows={[
            [
              "Accès et exploration",
              "fichier robots.txt, statuts, redirections, liens, sitemaps, profondeur et pièges à URL",
              "Quelles pages importantes peuvent réellement être atteintes ?",
            ],
            [
              "Indexabilité et consolidation",
              "instruction noindex, canonique, doublons, pagination, variantes et rendu du contenu principal",
              "Quelle URL devrait représenter chaque intention ?",
            ],
            [
              "Architecture et maillage",
              "navigation, catégories, pages orphelines, ancres, profondeur et cohérence des parcours",
              "Comment utilisateurs et moteurs trouvent-ils les pages utiles ?",
            ],
            [
              "Contenu et intention",
              "réponse, preuves, originalité, date, auteur, chevauchement et utilité commerciale",
              "Faut-il conserver, fusionner, enrichir, créer ou retirer ?",
            ],
            [
              "Présentation dans les résultats",
              "titres, descriptions, données structurées, images et cohérence du contenu visible",
              "La page est-elle éligible et compréhensible sans promesse d’affichage ?",
            ],
            [
              "Expérience et fonctionnement",
              "mobile, performance réelle, stabilité, interactions, erreurs et parcours de contact",
              "Un visiteur peut-il comprendre et accomplir l’action attendue ?",
            ],
            [
              "Mesure et gouvernance",
              "Search Console, mesure d’audience, conversions, consentement, accès, propriétaires et historique",
              "Pourra-t-on mesurer et transmettre le travail sans dépendance cachée ?",
            ],
          ]}
        />

        <p>
          Deux nuances empêchent les faux raccourcis. Un sitemap aide à signaler
          des URL, mais Google le décrit comme une indication qui ne garantit ni
          son téléchargement ni l’exploration des pages. De même, des données
          structurées valides créent une éligibilité, pas une garantie de
          résultat enrichi. Les sources officielles détaillent ces limites pour
          les{` `}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            sitemaps
          </a>
          {` `}
          et les{` `}
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
          Les modules conditionnels : complets seulement si nécessaires
        </h2>

        <p>
          Un audit devient profond lorsqu’il suit les risques du site, pas
          lorsqu’il applique la même checklist à tous. Le périmètre doit prévoir
          des branches conditionnelles et justifier celles qui sont écartées.
        </p>

        <GuideTable
          headers={["Contexte", "Module à ajouter", "Question spécifique"]}
          rows={[
            [
              "Commerce en ligne",
              "filtres à combinaisons (facettes), stocks, variantes, catégories, produits retirés et données marchandes",
              "Le catalogue crée-t-il des URL inutiles ou perd-il des pages qui vendent ?",
            ],
            [
              "Entreprise locale",
              "zones réellement servies, établissement, cohérence des coordonnées et pages locales",
              "Chaque page correspond-elle à une présence ou un service défendable ?",
            ],
            [
              "International",
              "langues, pays, balises hreflang qui associent les versions, redirections et équivalences de contenu",
              "Quelle version doit être proposée à quel public ?",
            ],
            [
              "Application JavaScript",
              "HTML initial, rendu, activation interactive de la page (hydratation), navigation, erreurs et contenu accessible sans interaction",
              "Le contenu important arrive-t-il de façon fiable pour l’utilisateur et le moteur ?",
            ],
            [
              "Refonte ou migration",
              "inventaire, correspondance d’URL, redirections, environnement de test et contrôle après bascule",
              "Comment conserver les actifs et détecter une perte ?",
            ],
            [
              "Site éditorial ou actualité",
              "fraîcheur, auteurs, sources, archives, taxonomies et rythme de mise à jour",
              "Le corpus reste-t-il utile et maintenable dans le temps ?",
            ],
            [
              "Forte dépendance à l’IA",
              "accessibilité, contenu textuel, provenance, contrôles et mesure des parcours",
              "Les fondamentaux sont-ils solides sans inventer un balisage spécial ?",
            ],
          ]}
        />

        <p>
          À propos des fonctions d’intelligence artificielle dans Google Search,
          la documentation actuelle indique qu’il n’existe ni exigence technique
          supplémentaire, ni fichier spécial, ni schéma Schema.org particulier
          pour apparaître dans AI Overviews ou AI Mode. Elle recommande les
          mêmes fondamentaux : accès, liens internes, contenu textuel utile,
          expérience et cohérence entre balisage et page visible. Cette
          information est volatile et doit être revalidée :{` `}
          <a
            href="https://developers.google.com/search/docs/appearance/ai-features?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            fonctions IA et site web
          </a>
          .
        </p>

        <h2 id="rapport">
          Le contenu du rapport final, dans l’ordre de décision
        </h2>

        <p>
          Un rapport professionnel n’a pas besoin d’être spectaculaire. Il doit
          permettre trois niveaux de lecture : la direction comprend la décision
          en quelques minutes, les responsables arbitrent le plan et les
          exécutants retrouvent chaque preuve.
        </p>

        <ol>
          <li>
            <strong>Une synthèse d’une page :</strong> décision, risques
            majeurs, opportunités, inconnues et prochaine étape.
          </li>
          <li>
            <strong>Le périmètre :</strong> sites, périodes, accès, outils,
            couverture, exclusions et événements connus.
          </li>
          <li>
            <strong>La méthode :</strong> manière de collecter, limites,
            définitions et règles d’échantillonnage.
          </li>
          <li>
            <strong>Le diagnostic par axe :</strong> fait, preuve, portée,
            conséquence et confiance.
          </li>
          <li>
            <strong>Le plan priorisé :</strong> action, propriétaire,
            dépendances, charge indicative et ordre.
          </li>
          <li>
            <strong>Les fiches de réception :</strong> test immédiat, résultat
            attendu et retour arrière si nécessaire.
          </li>
          <li>
            <strong>Le plan de mesure :</strong> référence avant changement,
            indicateur, fenêtre d’observation et limites causales.
          </li>
          <li>
            <strong>Les annexes :</strong> exports, listes d’URL, captures
            datées et documentation utile.
          </li>
        </ol>

        <p>
          L’annexe peut compter des milliers de lignes. Le corps du rapport doit
          rester sélectif. Chaque exemple doit mener à une décision ; sinon il
          appartient à l’export brut.
        </p>

        <h2 id="reception">
          Réceptionner chaque recommandation avec six preuves
        </h2>

        <SeoAuditReceptionSheet />

        <p>
          Prenons un exemple entièrement fictif. Un outil annonce « 1 247 pages
          dupliquées, priorité haute ». La phrase ne dit pas si ces URL sont
          accessibles aux moteurs, si elles reçoivent des liens, si elles
          représentent des variantes légitimes ni si elles touchent une section
          utile.
        </p>

        <GuideTable
          headers={["Champ", "Exemple de formulation recevable"]}
          rows={[
            [
              "Fait et périmètre",
              "Le crawl du 20 juillet a rencontré 1 247 URL à paramètres depuis les filtres de trois catégories ; 312 renvoient un contenu très proche de leur catégorie de référence.",
            ],
            [
              "Preuve et limite",
              "Liste d’URL et chemin de découverte joints ; journaux serveur absents, donc fréquence réelle d’exploration inconnue.",
            ],
            [
              "Conséquence et confiance",
              "Dilution possible des chemins et maintenance plus complexe ; impact sur l’indexation non démontré. Confiance moyenne.",
            ],
            [
              "Action",
              "Tester la consolidation d’un modèle de filtre non générateur de ventes avant généralisation ; développement responsable, métier consulté.",
            ],
            [
              "Réception",
              "Les URL de test ne sont plus liées, renvoient la réponse décidée et la catégorie reste fonctionnelle sur mobile et ordinateur.",
            ],
            [
              "Mesure différée",
              "Comparer exploration et couverture de l’échantillon après retraitement ; ne pas promettre de hausse de position ou de chiffre d’affaires.",
            ],
          ]}
        />

        <p>
          Ce niveau de précision protège aussi le prestataire : il empêche de
          lui attribuer un résultat que le rapport n’a jamais garanti et rend
          visible une dépendance au développement, au contenu ou à la décision
          métier.
        </p>

        <h2 id="prioriser">Prioriser sans score magique</h2>

        <p>
          La gravité affichée par un outil exprime sa propre règle. La priorité
          de l’entreprise doit croiser plusieurs dimensions que personne ne peut
          additionner honnêtement sans expliquer le calcul.
        </p>

        <ul>
          <li>
            <strong>Gravité :</strong> la page devient-elle inaccessible,
            trompeuse ou simplement imparfaite ?
          </li>
          <li>
            <strong>Portée :</strong> une URL, un modèle, une section ou tout le
            site ?
          </li>
          <li>
            <strong>Valeur :</strong> quelles intentions, demandes, ventes ou
            fonctions sont touchées ?
          </li>
          <li>
            <strong>Confiance :</strong> fait reproduit, cause probable,
            hypothèse à tester ou donnée absente ?
          </li>
          <li>
            <strong>Effort et risque :</strong> correction isolée, chantier
            transversal, dépendance ou possibilité de retour arrière ?
          </li>
        </ul>

        <p>
          La bonne sortie n’est pas forcément « corriger ». Une ligne du plan
          peut devenir : conserver tel quel, documenter, mesurer davantage,
          tester sur un échantillon, fusionner avec un autre chantier ou écarter
          l’alerte. Une petite erreur sur le formulaire d’une page très demandée
          peut ainsi passer avant des centaines de descriptions manquantes.
        </p>

        <InfoBox variant="emerald" title="Deux critères, pas un seul">
          Le <strong>critère d’acceptation</strong> vérifie que la tâche est
          bien livrée : statut, contenu, lien ou événement attendu. La{" "}
          <strong>mesure différée</strong> observe ensuite ce qui évolue.
          Confondre les deux oblige le développeur à garantir une position qu’il
          ne contrôle pas, ou permet de clôturer une tâche sans vérifier sa mise
          en œuvre.
        </InfoBox>

        <h2 id="niveau">Revue interne, audit ciblé ou audit complet ?</h2>

        <p>
          Le périmètre le plus large n’est pas toujours le plus utile. La bonne
          prestation dépend du nombre d’inconnues et de la portée de la
          décision. Le budget est traité séparément dans notre guide sur le{` `}
          <Link href="/guides/prix-referencement-naturel">
            prix du référencement naturel
          </Link>
          .
        </p>

        <GuideTable
          headers={["Format", "À choisir quand", "Livrable minimal", "Limite"]}
          rows={[
            [
              "Revue interne",
              "Question simple, équipe compétente, changement limité et données accessibles",
              "Constat daté, décision, test et responsable",
              "Peut manquer de recul ou de temps d’enquête",
            ],
            [
              "Audit ciblé",
              "Baisse sur une section, problème d’indexation, modèle de page ou mesure précise",
              "Périmètre restreint, preuves croisées et plan propre au problème",
              "Ne constitue pas un bilan global du site",
            ],
            [
              "Audit complet",
              "Causes inconnues, plusieurs systèmes, refonte, catalogue ou feuille de route globale",
              "Socle, modules pertinents, arbitrages, dépendances et réception",
              "Demande davantage d’accès, de temps et d’implication métier",
            ],
          ]}
        />

        <GuideInlineCTA
          title="Faire cadrer le périmètre de mon audit"
          description="Décrivez le site, le symptôme et la décision à prendre. Nous préciserons les accès minimaux, les modules utiles et le livrable attendu — ou nous vous dirons si une revue interne ou ciblée suffit."
          tags={[
            "Périmètre explicite",
            "Preuves vérifiables",
            "Aucune garantie de position",
          ]}
          ctaLabel="Cadrer mon audit SEO"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="apres">
          Après le rapport : passer de la recommandation à la preuve
        </h2>

        <p>
          La livraison du rapport doit comprendre une restitution et un
          protocole de contrôle. L’exécution, la recette et le suivi peuvent
          relever d’un périmètre séparé, à écrire au devis. La boucle ci-dessous
          décrit donc la gouvernance à organiser après l’audit, quel que soit
          l’intervenant retenu.
        </p>

        <ol>
          <li>
            <strong>Geler la référence :</strong> conserver exports, captures,
            versions et période avant modification.
          </li>
          <li>
            <strong>Arbitrer :</strong> accepter, reformuler, tester ou écarter
            chaque priorité importante.
          </li>
          <li>
            <strong>Attribuer :</strong> nommer le décideur, l’exécutant et la
            personne qui réceptionne.
          </li>
          <li>
            <strong>Regrouper :</strong> ordonner les dépendances pour éviter de
            réécrire deux fois la même brique.
          </li>
          <li>
            <strong>Recetter :</strong> exécuter le test immédiat et documenter
            le résultat, y compris lorsqu’il échoue.
          </li>
          <li>
            <strong>Observer :</strong> attendre une fenêtre adaptée aux
            données, comparer avec la référence et conserver les autres causes
            possibles.
          </li>
        </ol>

        <p>
          Pour une refonte, cette séquence doit s’intégrer à un protocole de
          migration plus large : inventaire d’URL, correspondances, contrôle
          avant bascule et surveillance après mise en ligne. Notre guide{` `}
          <Link href="/guides/refonte-sans-perdre-son-seo">
            refonte sans perdre son SEO
          </Link>
          {` `}
          traite ce chantier spécifique.
        </p>

        <p>
          Une baisse de trafic mérite la même prudence. Google énumère plusieurs
          familles de causes — techniques, saisonnières, changements de demande,
          mises à jour ou évolution du site — et rappelle qu’une modification ne
          garantit pas un effet visible. Le rapport doit donc conserver les
          hypothèses concurrentes. Voir le guide officiel pour{` `}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            diagnostiquer une baisse de trafic Google Search
          </a>
          .
        </p>

        <h2 id="alertes">Douze signaux d’alerte dans un rapport SEO</h2>

        <ul>
          <li>
            le périmètre, la date ou la configuration du crawl ne sont pas
            indiqués ;
          </li>
          <li>un score global remplace l’explication des priorités ;</li>
          <li>
            les erreurs d’outil sont copiées sans exemples d’URL ni revue
            humaine ;
          </li>
          <li>observation, cause, corrélation et garantie sont mélangées ;</li>
          <li>
            Search Console et l’outil de mesure d’audience sont sommés
            d’afficher le même total ;
          </li>
          <li>
            un sitemap, une canonique ou des données structurées sont présentés
            comme une garantie d’indexation ou d’affichage ;
          </li>
          <li>
            le rapport ordonne de retirer ou désavouer des liens sans preuve ni
            contexte ;
          </li>
          <li>
            toutes les pages reçoivent le même modèle de contenu sans intention
            ni valeur propre ;
          </li>
          <li>
            une conformité RGPD, cookies ou accessibilité est déclarée sans
            audit spécialisé ;
          </li>
          <li>
            la recommandation ne nomme ni responsable, ni dépendance, ni critère
            d’acceptation ;
          </li>
          <li>
            l’auditeur demande immédiatement des droits d’écriture sans
            nécessité expliquée ni sauvegarde ;
          </li>
          <li>
            une première position, un délai, un trafic ou un chiffre d’affaires
            sont garantis.
          </li>
        </ul>

        <p>
          Google recommande lui-même de commencer un audit avec un accès Search
          Console en lecture seule, d’examiner les recommandations avant des
          modifications importantes et de se méfier des garanties de première
          position. La page officielle{` `}
          <a
            href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            choisir un référenceur
          </a>
          {` `}
          constitue un bon minimum contractuel. Pour comparer ensuite les
          personnes et les engagements, consultez aussi notre guide pour{` `}
          <Link href="/guides/choisir-son-agence-web">
            choisir une agence web
          </Link>
          .
        </p>

        <h2 id="sources-limites">Sources, conformité et limites de ce guide</h2>

        <p>
          Ce guide décrit la réception d’un audit SEO ; il ne certifie ni le
          site, ni un prestataire. Les fonctions des moteurs et de leurs outils
          évoluent. Les pages officielles ont été contrôlées le 20 juillet 2026
          et doivent être revalidées au moment d’une mission.
        </p>

        <ul>
          <li>
            Google Search Central :{` `}
            <a
              href="https://developers.google.com/search/docs/essentials/technical?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              exigences techniques
            </a>
            ,{` `}
            <a
              href="https://developers.google.com/search/docs/appearance/core-web-vitals?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Core Web Vitals
            </a>
            {` `}
            et{` `}
            <a
              href="https://developers.google.com/search/blog/2022/10/performance-data-deep-dive"
              target="_blank"
              rel="noreferrer"
            >
              limites des données Search Console
            </a>
            .
          </li>
          <li>
            CNIL : les traceurs de mesure d’audience ne peuvent être exemptés de
            consentement que sous conditions, selon leur finalité, leur
            configuration et l’usage des données. Voir les{` `}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience"
              target="_blank"
              rel="noreferrer"
            >
              conditions relatives à la mesure d’audience
            </a>
            .
          </li>
          <li>
            DINUM : le{` `}
            <a
              href="https://accessibilite.numerique.gouv.fr/"
              target="_blank"
              rel="noreferrer"
            >
              RGAA 4.1.2
            </a>
            {` `}
            possède une méthode et 106 critères. Signaler un problème visible
            dans un audit SEO ne permet pas de déclarer un niveau de conformité
            d’accessibilité.
          </li>
        </ul>

        <InfoBox
          variant="amber"
          title="Ce que l’audit ne peut pas certifier seul"
        >
          Ni l’indexation future, ni un classement, ni l’attribution certaine
          d’une variation, ni la conformité juridique ou d’accessibilité, ni la
          rentabilité commerciale. Il peut en revanche rendre les faits
          reproductibles, les décisions explicites et les corrections
          vérifiables. C’est déjà ce qui transforme un rapport en outil de
          direction.
        </InfoBox>

        <p>
          Vous pouvez présenter notre{` `}
          <Link href="/services/referencement-google">
            accompagnement en référencement naturel
          </Link>
          {` `}à cette même grille. Demandez le périmètre, les preuves, la
          personne responsable et la façon de vérifier chaque action. Un
          prestataire professionnel doit pouvoir répondre sans transformer une
          estimation en promesse.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
