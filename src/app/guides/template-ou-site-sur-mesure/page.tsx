import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("template-ou-site-sur-mesure");

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
        alt: "Cinq niveaux de conception entre site existant, template et sur mesure",
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
      name: "Template, site personnalisé ou sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Un template peut-il produire un site professionnel ?",
    answer:
      "Oui. Un template bien choisi, utilisé dans son domaine de pertinence et alimenté par des contenus, photos et preuves solides peut produire un site professionnel. La qualité se juge sur le résultat : clarté, cohérence de marque, mobile, accessibilité, performance, administration, maintenance et réversibilité. L’étiquette de production ne suffit dans aucun sens.",
  },
  {
    question: "Un template est-il mauvais pour le référencement naturel ?",
    answer:
      "Non par nature. L’étiquette de production ne prouve rien : un thème peut être très propre ou encombré, et un développement spécifique peut être bien rendu ou difficile à explorer. Jugez le résultat livré : contenu utile, HTML accessible, liens, métadonnées, expérience de page et comportement mobile. Les sources Google et les tests à exiger sont détaillés dans la section de recette.",
  },
  {
    question: "Design sur mesure et développement sur mesure, est-ce la même chose ?",
    answer:
      "Non. Une interface peut être conçue spécifiquement puis intégrée dans un CMS standard. À l’inverse, un développement technique spécifique peut réutiliser un kit graphique. Demandez séparément ce qui est conçu pour vous dans l’architecture des contenus, les maquettes, les composants, les fonctions, l’administration et l’infrastructure.",
  },
  {
    question: "Jusqu’où peut-on personnaliser un template ?",
    answer:
      "Jusqu’au point où les adaptations restent isolées, documentées, testables et compatibles avec les mises à jour. Il n’existe pas de seuil universel. Si chaque nouvelle page exige des correctifs visuels locaux, des extensions qui se chevauchent ou un contournement de la structure prévue, la base n’économise peut-être plus de complexité.",
  },
  {
    question: "Comment vérifier qu’un devis est réellement sur mesure ?",
    answer:
      "Faites lister les livrables spécifiques : recherche, arborescence, modèles de contenu, maquettes, système de design, composants, intégrations, interface d’administration, tests et documentation. Demandez aussi quelles briques restent standard. Le terme seul ne décrit ni le travail, ni les droits remis, ni le résultat accepté.",
  },
  {
    question: "Faut-il refaire le site existant pour changer de niveau ?",
    answer:
      "Pas toujours. Une correction des messages, des contenus, du parcours, des formulaires ou de la mesure peut suffire. En revanche, une plateforme fermée, une structure de données inadaptée, des adaptations impossibles à maintenir ou une migration nécessaire peuvent imposer une reconstruction. Diagnostiquez la cause avant le moyen.",
  },
  {
    question: "Qui possède le thème, les maquettes, le code et les contenus ?",
    answer:
      "Cela dépend des licences et du contrat. Distinguez nom de domaine, compte d’hébergement, contenus, médias, polices, thème, extensions, maquettes, code spécifique, données et accès aux outils. Un logiciel open source ne transfère pas automatiquement tous les autres actifs ; une promesse de sur-mesure non plus.",
  },
];

function PersonalizationContinuum() {
  const levels = [
    {
      number: "0",
      title: "Conserver et corriger",
      standard: "La base actuelle reste en place",
      specific: "Messages, contenus, parcours ou défaut précis",
      color: "border-zinc-600 bg-zinc-900/80",
      badge: "text-zinc-300",
    },
    {
      number: "1",
      title: "Template presque intact",
      standard: "Structure, composants et administration",
      specific: "Identité, contenus, médias et configuration",
      color: "border-blue-500/35 bg-blue-500/[0.08]",
      badge: "text-blue-300",
    },
    {
      number: "2",
      title: "Template personnalisé",
      standard: "Architecture générale et fonctions courantes",
      specific: "Quelques gabarits, styles ou comportements isolés",
      color: "border-cyan-500/35 bg-cyan-500/[0.08]",
      badge: "text-cyan-300",
    },
    {
      number: "3",
      title: "Approche hybride",
      standard: "CMS, sécurité de base et composants ordinaires",
      specific: "Parcours, pages, modèles ou intégrations décisifs",
      color: "border-violet-500/35 bg-violet-500/[0.09]",
      badge: "text-violet-300",
    },
    {
      number: "4",
      title: "Conception complète",
      standard: "Bibliothèques et services éprouvés restent réutilisés",
      specific: "Système éditorial, interface et comportements du projet",
      color: "border-amber-500/35 bg-amber-500/[0.08]",
      badge: "text-amber-300",
    },
  ];

  return (
    <figure
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="continuum-title"
    >
      <figcaption id="continuum-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
          Niveau de conception
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Cinq décisions, pas un duel
        </span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-400">
          Montez d’un niveau seulement lorsqu’une différence nommée ne peut pas
          être obtenue proprement au niveau précédent.
        </span>
      </figcaption>

      <div className="space-y-2.5">
        {levels.map((level) => (
          <div
            key={level.number}
            className={
              "grid gap-3 rounded-xl border p-4 md:grid-cols-[2.4rem_1.15fr_1fr_1fr] md:items-center " +
              level.color
            }
          >
            <span className={"font-mono text-lg font-black " + level.badge}>
              {level.number}
            </span>
            <p className="m-0 text-sm font-bold text-white">{level.title}</p>
            <p className="m-0 text-xs leading-relaxed text-zinc-400">
              <span className="font-semibold text-zinc-200">Standard : </span>
              {level.standard}
            </p>
            <p className="m-0 text-xs leading-relaxed text-zinc-400">
              <span className="font-semibold text-zinc-200">Spécifique : </span>
              {level.specific}
            </p>
          </div>
        ))}
      </div>
    </figure>
  );
}

function DifferenceOrder() {
  const layers = [
    ["01", "Message", "L’offre et ses preuves rentrent-elles sans les appauvrir ?"],
    ["02", "Contenus", "Les types de pages, relations et langues sont-ils prévus ?"],
    ["03", "Parcours", "L’action décisive suit-elle le chemin réellement utile ?"],
    ["04", "Interface", "Identité, mobile et accessibilité résistent-ils à la base ?"],
    ["05", "Exploitation", "Équipe, outils, mises à jour et sortie restent-ils maîtrisables ?"],
  ];

  return (
    <div className="not-prose my-8 rounded-2xl border border-violet-200 bg-violet-50/50 p-4 sm:p-6 dark:border-violet-900 dark:bg-violet-950/20">
      <p className="m-0 text-xs font-extrabold uppercase tracking-[0.17em] text-violet-700 dark:text-violet-300">
        Bon de commande des différences
      </p>
      <p className="mb-5 mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        Pour chaque couche, écrivez : l’écart observé, la solution proposée, la
        preuve d’acceptation et le coût supplémentaire. Une case vide n’est pas
        une justification du sur-mesure.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {layers.map(([number, title, question], index) => (
          <div
            key={number}
            className={
              "rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 " +
              (index === layers.length - 1 ? "sm:col-span-2" : "")
            }
          >
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs font-black text-violet-600 dark:text-violet-300">
                {number}
              </span>
              <div>
                <p className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                  {title}
                </p>
                <p className="mb-0 mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {question}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-0 mt-4 rounded-xl bg-zinc-950 p-4 text-sm leading-relaxed text-zinc-200">
        « Nous payons ______ de plus pour que ______ puisse ______, ce qui sera
        accepté lorsque ______. La base standard reste utilisée pour ______. »
      </p>
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
          { label: "Template ou site sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Ne payez ni une étiquette « sur mesure », ni une économie de façade. Séparez les couches du site, testez la page qui rentre le moins bien dans une base standard et financez seulement les différences utiles."
        heroAction={{
          href: "#page-la-moins-standard",
          label: "Faire le test décisif",
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
            title: "5 niveaux possibles",
            description: "De la correction au sur-mesure complet",
            color: "violet",
          },
          {
            number: "02",
            title: "Aucun prix universel",
            description: "Comparer les mêmes preuves",
            color: "blue",
          },
          {
            number: "03",
            title: "Template parfois préférable",
            description: "Le verdict peut rester standard",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/prix-site-vitrine",
            label: "Comprendre le prix d’un site vitrine",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Diagnostiquer un site qui ne convertit pas",
          },
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Rédiger le cahier des charges du site",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Vérifier la propriété et les accès",
          },
          {
            href: "/guides/wix-ou-wordpress",
            label: "Choisir entre Wix et WordPress",
          },
          {
            href: "/guides/nextjs-ou-wordpress",
            label: "Choisir entre Next.js et WordPress",
          },
        ]}
        faqTitle="Template ou sur mesure : les questions à trancher"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Deux devis peuvent promettre un « site sur mesure ». Le premier
            change une police, des couleurs et trois blocs d’un thème. Le second
            conçoit l’arborescence, les modèles de contenu, les maquettes, les
            composants et l’administration. Le mot est identique ; le travail,
            les risques et les livrables ne le sont pas.
          </strong>
        </p>

        <p>
          L’inverse est tout aussi trompeur. Un template n’est pas forcément un
          site impersonnel : l’offre, la rédaction, les preuves, les images et
          les choix éditoriaux peuvent créer l’essentiel de la différence. Et un
          développement spécifique n’est pas automatiquement plus rapide, plus
          accessible, mieux référencé ou plus efficace commercialement. Ces
          qualités se vérifient sur le résultat livré.
        </p>

        <InfoBox variant="blue" title="La règle de ce guide">
          Template, CMS et technologie sont trois axes différents. Un CMS est
          un logiciel qui permet à l’équipe de gérer les contenus ; un
          framework est une base de développement utilisée par les techniciens.
          Un thème WordPress peut être conçu sur mesure ; un site Next.js peut
          partir d’un kit préconçu. Ce guide choisit un{" "}
          <strong>niveau de conception</strong>, pas une marque de logiciel ni
          un framework.
        </InfoBox>

        <PersonalizationContinuum />

        <GuideToc
          items={[
            { id: "verdict", label: "Le verdict en cinq niveaux" },
            { id: "definitions", label: "Ce que les mots doivent désigner" },
            { id: "ne-pas-refaire", label: "Vérifier qu’il faut reconstruire" },
            { id: "page-la-moins-standard", label: "Tester la page la moins standard" },
            { id: "cinq-couches", label: "Séparer les cinq couches" },
            { id: "template", label: "Quand le template est professionnel" },
            { id: "personnalisation", label: "Repérer l’adaptation fragile" },
            { id: "hybride", label: "Définir une vraie approche hybride" },
            { id: "sur-mesure", label: "Justifier le sur-mesure complet" },
            { id: "devis", label: "Comparer avec le budget des différences" },
            { id: "recette", label: "Transformer les promesses en recette" },
            { id: "decision", label: "Prendre la décision" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="verdict">1. Le bon verdict est l’un de ces cinq niveaux</h2>

        <p>
          Commencez par la plus petite intervention susceptible d’obtenir le
          résultat. Le niveau augmente lorsqu’une contrainte importante résiste,
          pas lorsque le vocabulaire du prestataire devient plus valorisant.
        </p>

        <GuideTable
          caption="Cinq niveaux de conception possibles pour un site vitrine"
          headers={["Niveau", "Décision rationnelle si…", "Preuve avant de commander"]}
          rows={[
            [
              "Conserver et corriger",
              "la base fonctionne et le blocage vient d’un message, contenu, parcours, formulaire ou réglage identifiable",
              "diagnostic localisé, correctif testable et absence de contrainte structurelle",
            ],
            [
              "Template presque intact",
              "les pages, contenus et fonctions sont ordinaires et l’équipe accepte réellement la structure proposée",
              "démonstration avec des contenus représentatifs, sur mobile et dans l’administration",
            ],
            [
              "Template personnalisé",
              "quelques différences précises peuvent être isolées sans combattre la base à chaque mise à jour",
              "liste des adaptations, emplacement technique, tests et responsabilité de maintenance",
            ],
            [
              "Approche hybride",
              "les fonctions courantes restent standard, mais une partie du parcours, des contenus ou des intégrations mérite une conception propre",
              "carte explicite des briques réutilisées et des livrables spécifiques",
            ],
            [
              "Conception complète",
              "plusieurs contraintes essentielles imposent leur propre système éditorial, leur propre interface ou des comportements cohérents à faire évoluer",
              "exigences, prototypes, critères de recette, exploitation et sortie financés",
            ],
          ]}
        />

        <p>
          Aucun niveau n’est un rang de qualité. Un template proche de son usage
          prévu sera souvent plus sain qu’un « semi-mesure » formé de rustines.
          Une conception complète sera plus cohérente lorsqu’un projet possède
          de nombreuses différences interdépendantes. Entre les deux, l’hybride
          peut concentrer le travail là où le site doit vraiment se distinguer.
        </p>

        <h2 id="definitions">2. Exigez des mots que l’on peut réceptionner</h2>

        <p>
          Il n’existe pas de norme commerciale universelle du « site sur
          mesure ». Pour comparer, adoptez des définitions opérationnelles et
          demandez au devis de nommer le niveau réel.
        </p>

        <dl>
          <dt><strong>Template prêt à l’emploi</strong></dt>
          <dd>
            Structure graphique et fonctionnelle préexistante, réutilisée sans
            modification importante. Le travail porte encore sur la
            configuration, les contenus, les médias, les réglages et la recette.
          </dd>
          <dt><strong>Template personnalisé</strong></dt>
          <dd>
            Base existante dont on adapte l’identité, les composants disponibles
            et quelques comportements en conservant son architecture principale.
          </dd>
          <dt><strong>Approche hybride ou semi-mesure</strong></dt>
          <dd>
            CMS, infrastructure et briques courantes éprouvés ; parcours,
            modèles de contenu, composants ou intégrations spécifiques sur les
            différences réellement utiles.
          </dd>
          <dt><strong>Sur-mesure complet</strong></dt>
          <dd>
            Architecture éditoriale, interface, système de design et fonctions
            sont définis depuis les exigences du projet. Cela ne signifie pas
            tout recoder depuis zéro : authentification, hébergement,
            bibliothèques et autres services peuvent rester standards.
          </dd>
        </dl>

        <p>
          Dans WordPress, un thème organise la présentation et peut influer sur
          le comportement. Un{" "}
          <a
            href="https://developer.wordpress.org/themes/advanced-topics/child-themes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thème enfant sépare des personnalisations du thème parent
          </a>
          , ce qui aide à préserver les modifications lors des mises à jour.
          La documentation WordPress prévient aussi qu’une personnalisation très
          étendue peut devenir difficile à gérer. La question n’est donc pas
          « peut-on modifier ? », mais « ces modifications formeront-elles encore
          un système maintenable ? »
        </p>

        <h2 id="ne-pas-refaire">3. Avant le niveau, vérifiez qu’il faut refaire le site</h2>

        <p>
          Une refonte n’est pas le remède automatique à une baisse de demandes.
          Le trafic peut être mal ciblé, l’offre difficile à comprendre, les
          preuves insuffisantes, le formulaire défaillant ou le suivi commercial
          absent. Une nouvelle interface reproduirait alors le même problème avec
          d’autres couleurs.
        </p>

        <GuideTable
          caption="Test avant de décider une reconstruction du site"
          headers={["Constat", "Test le moins coûteux", "Reconstruction seulement si…"]}
          rows={[
            [
              "Le message est flou",
              "réécrire la promesse et les preuves sur une page",
              "la structure empêche de présenter l’offre correctement",
            ],
            [
              "Les contacts baissent",
              "vérifier trafic, formulaire, appels et suivi",
              "le parcours ou la base bloque une correction démontrée",
            ],
            [
              "Le site paraît daté",
              "tester une page et un système visuel resserré",
              "l’identité cohérente ne peut pas être déployée proprement",
            ],
            [
              "L’équipe dépend du prestataire",
              "tester une modification réelle dans l’administration",
              "le modèle de contenu ou les droits rendent l’autonomie impossible",
            ],
            [
              "Google perd des pages",
              "contrôler indexation, statuts, liens, rendu et URLs",
              "la correction isolée est plus risquée qu’une migration cadrée",
            ],
          ]}
        />

        <p>
          Le guide{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            pourquoi un site ne convertit pas
          </Link>{" "}
          permet de séparer offre, trafic, site, mesure et traitement commercial.
          Si la cause reste réparable, le niveau zéro — conserver et corriger —
          est une vraie décision, pas un projet abandonné.
        </p>

        <h2 id="page-la-moins-standard">4. Faites le test de la page la moins standard</h2>

        <p>
          Ne choisissez pas depuis la page d’accueil rêvée. Choisissez depuis la
          page, le contenu ou l’action qui rentre le moins bien dans une base
          existante. C’est là que les écarts deviennent concrets.
        </p>

        <ol>
          <li>
            Listez les trois actions essentielles : comprendre une offre,
            comparer, prendre rendez-vous, demander un devis, télécharger,
            localiser un point de vente ou autre action réellement utile.
          </li>
          <li>
            Choisissez la page la moins standard : étude de cas complexe,
            annuaire, fiche technique, offre multi-sites, simulateur simple,
            prise de rendez-vous ou contenu multilingue.
          </li>
          <li>
            Placez de vrais contenus dans le template pressenti, y compris le
            titre le plus long, la preuve la moins flatteuse, l’image disponible
            et le cas mobile.
          </li>
          <li>
            Notez chaque déformation : information supprimée, ordre forcé,
            doublon, extension ajoutée, édition incompréhensible, rupture mobile
            ou dépendance impossible à sortir.
          </li>
          <li>
            Demandez une solution, son emplacement, sa preuve de recette et son
            comportement lors d’une mise à jour ou d’une migration.
          </li>
        </ol>

        <InfoBox variant="emerald" title="Si aucune page ne résiste, c’est une bonne nouvelle">
          Lorsque toutes les pages utiles, les contenus et les actions tiennent
          proprement dans une base existante, le sur-mesure complet est difficile
          à justifier. Investissez plutôt dans le positionnement, la rédaction,
          les photos, la mesure, la recette et l’exploitation.
        </InfoBox>

        <p>
          À l’inverse, une seule page atypique ne justifie pas forcément un site
          entièrement spécifique. Elle peut devenir un gabarit ou un composant
          dédié dans une approche hybride. Ce test localise l’effort au lieu de
          transformer une exception en doctrine technique.
        </p>

        <h2 id="cinq-couches">5. Séparez les cinq couches avant d’écrire « personnalisé »</h2>

        <p>
          Un site peut être standard à un niveau et spécifique à un autre. La
          comparaison devient beaucoup plus claire lorsque chaque couche reçoit
          sa propre décision.
        </p>

        <GuideTable
          caption="Cinq couches à standardiser ou personnaliser séparément"
          headers={["Couche", "Question de décision", "Preuve à demander", "Personnalisation utile si…"]}
          rows={[
            [
              "Message et preuves",
              "l’offre, ses différences et ses limites sont-elles compréhensibles ?",
              "contenus réels dans une page, pas de faux texte",
              "la base force un discours générique ou masque une preuve décisive",
            ],
            [
              "Architecture de contenus",
              "quels types de pages, relations, filtres, langues et métadonnées faut-il gérer ?",
              "modèle de contenu et exemple rempli",
              "les contenus ne sont ni de simples pages ni de simples articles",
            ],
            [
              "Parcours et fonctions",
              "quelle action l’utilisateur accomplit-il et quelles erreurs faut-il traiter ?",
              "prototype avec états normal, vide, erreur et confirmation",
              "le chemin propre à l’activité ne tient pas dans les composants disponibles",
            ],
            [
              "Interface et identité",
              "quels principes visuels doivent rester cohérents sur mobile et dans le temps ?",
              "maquettes représentatives et règles réutilisables",
              "la reconnaissance et la hiérarchie exigent plus qu’une configuration cosmétique",
            ],
            [
              "Exploitation et sortie",
              "qui publie, met à jour, sauvegarde, restaure et transmet ?",
              "test dans l’administration, inventaire des accès et exercice de sortie",
              "les rôles, volumes ou contraintes de maintenance dépassent le modèle prévu",
            ],
          ]}
        />

        <p>
          Cette séparation évite deux erreurs symétriques. La première consiste à
          recoder des fonctions banales pour revendiquer le sur-mesure. La seconde
          consiste à compenser une architecture inadaptée par une accumulation de
          styles, d’extensions et d’exceptions. Le bon périmètre réutilise les
          solutions éprouvées et conçoit proprement ce qui porte la différence.
        </p>

        <h2 id="template">6. Un template est professionnel lorsqu’on accepte sa logique</h2>

        <p>
          Le template est une décision forte pour une offre stable, un nombre
          limité de types de pages et des fonctions ordinaires : présenter,
          rassurer, localiser, publier, recevoir une demande ou proposer un
          rendez-vous au moyen d’un service existant. Sa valeur vient de la
          réduction des décisions de conception, à condition que cette base
          corresponde vraiment au besoin.
        </p>

        <p>
          Il reste pourtant du travail. Il faut écrire, sélectionner ou produire
          les médias, configurer les formulaires, vérifier les traceurs, adapter
          le mobile, renseigner les métadonnées, préparer l’administration,
          tester les erreurs et organiser la maintenance. Un thème n’est pas un
          site fini et un aperçu de démonstration n’est pas une recette.
        </p>

        <GuideTable
          caption="Conditions pour qu’un template reste une décision saine"
          headers={["Condition", "Question de contrôle", "Signal d’alerte"]}
          rows={[
            [
              "Structure acceptée",
              "pouvez-vous conserver l’ordre et les types de pages sans déformer l’offre ?",
              "exceptions demandées avant même l’intégration des contenus",
            ],
            [
              "Contenus prêts",
              "les textes et médias réels ont-ils été testés ?",
              "choix fondé sur la belle démonstration du vendeur",
            ],
            [
              "Administration comprise",
              "une personne cible peut-elle publier et corriger ?",
              "autonomie seulement affirmée",
            ],
            [
              "Maintenance attribuée",
              "qui met à jour, sauvegarde, teste et revient en arrière ?",
              "template présenté comme sans entretien",
            ],
            [
              "Sortie connue",
              "quels contenus, comptes, fichiers et licences sont récupérables ?",
              "propriété résumée à une phrase",
            ],
          ]}
        />

        <p>
          La plateforme change aussi les conditions de sortie. Wix indique, par
          exemple, qu’un{" "}
          <a
            href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere"
            target="_blank"
            rel="noopener noreferrer"
          >
            site Wix doit fonctionner sur son infrastructure
          </a>
          . Ce fait ne s’étend pas à tous les templates : il montre pourquoi la
          portabilité technique doit être vérifiée séparément du choix graphique.
          Le comparatif{" "}
          <Link href="/guides/wix-ou-wordpress">Wix ou WordPress</Link>{" "}
          possède cette décision de plateforme.
        </p>

        <h2 id="personnalisation">7. Une adaptation devient fragile quand les exceptions font système</h2>

        <p>
          Personnaliser une base est normal. La fragilité apparaît lorsque
          personne ne sait plus distinguer la configuration, les styles, les
          composants ajoutés, les extensions, les données et les fonctions. Une
          nouvelle mise à jour ou un nouveau contenu déclenche alors des effets
          imprévisibles.
        </p>

        <p>
          Il n’existe pas un nombre magique d’adaptations au-delà duquel il faut
          repartir. Utilisez des preuves : emplacement du code, dépendances,
          tests, procédure de mise à jour, retour arrière et capacité d’une autre
          personne à reprendre. Sur WordPress, un thème enfant aide à isoler des
          modifications du parent ; il ne garantit ni leur qualité, ni leur
          compatibilité future.
        </p>

        <InfoBox variant="amber" title="Cinq signes que l’économie initiale se transforme en dette">
          <ul className="mb-0">
            <li>chaque page nouvelle nécessite une correction locale ;</li>
            <li>plusieurs extensions se chevauchent pour une même fonction ;</li>
            <li>une mise à jour ne peut pas être testée hors production ;</li>
            <li>le contenu réel doit être raccourci ou dupliqué pour tenir ;</li>
            <li>la reprise dépend de la mémoire de la personne qui a assemblé le site.</li>
          </ul>
        </InfoBox>

        <p>
          Dans ces situations, trois réponses restent possibles : retirer la
          différence peu utile, isoler un composant propre dans une approche
          hybride, ou remplacer la base si plusieurs contraintes essentielles
          sont concernées. « Continuer parce que nous avons déjà commencé » n’est
          pas une preuve de coût total favorable.
        </p>

        <h2 id="hybride">8. Une vraie approche hybride nomme le standard et le spécifique</h2>

        <p>
          L’hybride n’est pas un mot de compromis à placer dans un devis. Il doit
          tracer une frontière : quels services, composants et mécanismes
          éditoriaux sont réutilisés ; quels parcours, gabarits, modèles de
          contenu ou intégrations sont conçus pour le projet ; qui entretient
          chaque partie.
        </p>

        <p>
          Une PME industrielle peut, par exemple, conserver un CMS et des blocs
          courants pour l’équipe, les actualités et le contact, tout en concevant
          spécifiquement ses fiches techniques, leurs relations, leur recherche
          et leur passage vers le CRM, le logiciel de suivi commercial. Cet
          exemple est illustratif, pas un cas
          client ni une promesse de résultat. Sa leçon est la localisation de la
          différence : l’ensemble du site n’a pas besoin d’être atypique pour
          qu’une partie mérite une conception propre.
        </p>

        <GuideTable
          caption="Frontière vérifiable d’une approche hybride"
          headers={["Élément", "Peut rester standard", "Peut devenir spécifique", "Question de maintenance"]}
          rows={[
            [
              "Édition",
              "rôles, brouillons, médias et publication",
              "types de contenus et relations propres",
              "qui fait évoluer le schéma ?",
            ],
            [
              "Interface",
              "navigation, grille et composants ordinaires",
              "page décisive et système de preuves",
              "où sont documentées les variantes ?",
            ],
            [
              "Services",
              "hébergement, emails, recherche simple et formulaires",
              "liaison CRM, catalogue ou règles particulières",
              "qui surveille chaque dépendance ?",
            ],
            [
              "Mesure",
              "outil d’analyse et gestion du consentement",
              "événements liés au parcours métier",
              "qui vérifie les données après une évolution ?",
            ],
            [
              "Sortie",
              "exports et sauvegardes standards",
              "scripts, mapping et documentation propres",
              "une autre équipe peut-elle restaurer ?",
            ],
          ]}
        />

        <p>
          Cette approche est souvent une candidate utile, mais elle ne gagne pas
          par défaut. Si la page la moins standard tient dans le template, le
          niveau inférieur est plus simple. Si presque toutes les couches
          partagent des règles spécifiques, maintenir deux systèmes imbriqués
          peut être moins cohérent qu’une conception complète.
        </p>

        <h2 id="sur-mesure">9. Le sur-mesure complet se justifie par des différences liées entre elles</h2>

        <p>
          Une identité forte, seule, peut justifier un design propre sans imposer
          un développement entièrement spécifique. Le sur-mesure complet devient
          rationnel lorsque l’architecture des contenus, l’interface, les
          parcours et l’exploitation répondent à plusieurs exigences propres qui
          doivent rester cohérentes et évoluer ensemble.
        </p>

        <ul>
          <li>
            plusieurs modèles de contenu reliés structurent l’offre ou
            l’expertise ;
          </li>
          <li>
            un parcours décisif possède des états, erreurs ou règles que les
            composants disponibles ne représentent pas proprement ;
          </li>
          <li>
            l’identité doit former un système cohérent sur de nombreuses pages,
            pas une page spectaculaire isolée ;
          </li>
          <li>
            des intégrations, langues, rôles ou volumes imposent une
            administration et des tests propres ;
          </li>
          <li>
            l’entreprise finance documentation, maintenance, mesure et reprise,
            pas seulement la mise en ligne initiale.
          </li>
        </ul>

        <p>
          Même dans ce cas, « complet » ne signifie pas « inventé sans
          dépendance ». Réutiliser une bibliothèque accessible, un CMS éprouvé,
          un hébergeur ou un service de formulaires peut réduire le risque. Le
          devis doit expliquer les choix et leur responsabilité au lieu de
          facturer la réinvention comme preuve de qualité.
        </p>

        <p>
          Le choix entre CMS et framework arrive ensuite. Le guide{" "}
          <Link href="/guides/nextjs-ou-wordpress">Next.js ou WordPress</Link>{" "}
          compare architecture, édition et exploitation ; il ne faut pas déduire
          le niveau de conception du nom de la technologie.
        </p>

        <h2 id="devis">10. Comparez les devis avec un budget des différences</h2>

        <p>
          Les guides de prix du site détaillent les fourchettes et postes
          budgétaires. Ici, utilisez uniquement les montants de vos offres et
          rendez-les comparables sur le même horizon. Un prix initial plus bas
          peut demander davantage d’adaptations, de licences, de maintenance ou
          de reconstruction ; un prix plus élevé n’est pas pour autant justifié
          sans livrables et preuves supplémentaires.
        </p>

        <DifferenceOrder />

        <p>
          Construisez un cadre de coût comparable avec la même formule pour
          chaque option. Il ne devient un total qu’une fois chaque montant
          renseigné sur le même horizon :
        </p>

        <FormulaBox>
          coût comparable = cadrage + design + production + contenus
          {"\n"}+ adaptations + licences + intégrations + tests
          {"\n"}+ maintenance + évolutions prévues + temps interne
          {"\n"}+ migration et sortie
        </FormulaBox>

        <p>
          Choisissez un horizon cohérent avec la durée d’exploitation prévue.
          Si vous valorisez le temps interne, écrivez les heures, les rôles et le
          coût retenu ; sinon, comparez les heures séparément au lieu de leur
          attribuer un montant implicite. Conservez les inconnues comme « à
          confirmer » hors du total et, s’il faut une provision de risque,
          documentez pour chaque scénario sa probabilité, son impact et la source
          de l’hypothèse. N’inscrivez pas zéro par défaut pour la maintenance, la
          production des contenus ou la sortie.
          Le guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d’un site vitrine</Link>{" "}
          aide à contrôler les inclusions sans confondre budget et niveau de
          conception.
        </p>

        <GuideTable
          caption="Colonnes à demander dans chaque devis de site"
          headers={["Lot", "Standard réutilisé", "Différence financée", "Livrable", "Acceptation"]}
          rows={[
            [
              "Cadrage",
              "méthode et ateliers",
              "recherche propre au marché et aux utilisateurs",
              "décisions, exclusions et risques",
              "validation nommée",
            ],
            [
              "Contenus",
              "formats et composants",
              "structure, rédaction ou migration particulière",
              "inventaire et pages intégrées",
              "relecture avec vrais contenus",
            ],
            [
              "Design",
              "grille et composants éprouvés",
              "maquettes et règles de marque propres",
              "écrans et système de design",
              "états et largeurs représentatifs",
            ],
            [
              "Développement",
              "CMS, services et bibliothèques",
              "gabarits, composants et intégrations dédiés",
              "code, configuration et documentation",
              "tests et démonstration",
            ],
            [
              "Exploitation",
              "hébergement et outils courants",
              "procédures ou supervision propres",
              "accès, sauvegarde, maintenance et sortie",
              "exercice réalisé",
            ],
          ]}
        />

        <p>
          Un devis qui ne peut pas nommer ce qui reste standard ne prouve pas le
          sur-mesure. Un devis template qui ne nomme pas les contenus, les tests
          et l’exploitation ne prouve pas non plus son économie. Le livrable
          central est la frontière, pas l’adjectif.
        </p>

        <h2 id="recette">11. La recette juge le site réel, pas sa méthode de fabrication</h2>

        <p>
          Google rappelle qu’une{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/page-experience"
            target="_blank"
            rel="noopener noreferrer"
          >
            bonne expérience de page ou de bons Core Web Vitals
          </a>{" "}
          — des mesures de chargement, de réactivité et de stabilité — ne
          garantissent pas une première position. Il explique aussi que les{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
            target="_blank"
            rel="noopener noreferrer"
          >
            sites JavaScript doivent rester explorables et correctement rendus
          </a>
          . Ni le thème, ni le framework ne remplacent donc les tests sur les
          pages publiées.
        </p>

        <GuideTable
          caption="Critères de recette communs au template et au sur-mesure"
          headers={["Dimension", "Test concret", "Preuve de réception", "Limite à écrire"]}
          rows={[
            [
              "Contenus",
              "intégrer les pages et cas représentatifs",
              "inventaire rapproché et validation métier",
              "contenus fournis, rédigés ou exclus",
            ],
            [
              "Mobile",
              "parcourir navigation, pages et formulaires sur petits écrans",
              "captures et anomalies corrigées",
              "appareils et navigateurs couverts",
            ],
            [
              "Accessibilité",
              "tester clavier, focus, libellés, contrastes et structure selon l’objectif WCAG",
              "résultats, écarts et niveau visé",
              "aucune conformité déduite du template",
            ],
            [
              "Performance",
              "mesurer les pages représentatives dans des conditions déclarées",
              "rapport daté et budget convenu",
              "aucune position ou conversion garantie",
            ],
            [
              "SEO technique",
              "vérifier statuts, HTML rendu, titres, adresse de référence, liens, plan du site et redirections",
              "rapport d’exploration automatisée et liste d’URLs acceptés",
              "fluctuations possibles en migration",
            ],
            [
              "Données",
              "tester formulaires, consentement, retrait et services tiers",
              "réception des demandes et registre des outils",
              "analyse adaptée aux traitements réels",
            ],
            [
              "Administration",
              "faire publier, corriger et restaurer par le rôle cible",
              "scénario réussi sans accès indu",
              "formation et assistance précisées",
            ],
            [
              "Réversibilité",
              "exporter contenus, médias, code, configuration et accès puis restaurer",
              "inventaire et exercice documentés",
              "droits et licences à vérifier",
            ],
          ]}
        />

        <p>
          Les{" "}
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG constituent un standard technique stable
          </a>
          , mais l’accessibilité d’un site dépend de l’implémentation, des
          contenus et de l’exploitation. De même, les{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite"
            target="_blank"
            rel="noopener noreferrer"
          >
            règles CNIL relatives aux traceurs
          </a>{" "}
          et les obligations liées aux formulaires dépendent des traitements
          réels. Refusez les
          lignes « accessible », « SEO » ou « conforme RGPD » sans périmètre,
          responsable, test et réserve explicite.
        </p>

        <p>
          Si la refonte modifie les adresses, Google recommande une cartographie
          des URL, des redirections côté serveur, des tests et un suivi. Une{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
            target="_blank"
            rel="noopener noreferrer"
          >
            migration de site peut produire des fluctuations temporaires
          </a>
          . Aucun mode de production ne permet de promettre une migration « sans
          perte » ; il permet seulement de préparer, exécuter et surveiller les
          preuves appropriées.
        </p>

        <h2 id="decision">12. Prenez la décision en trente minutes, puis faites-la prouver</h2>

        <p>
          Réunissez la personne qui possède l’offre, celle qui produira les
          contenus et celle qui exploitera le site. La séance n’a pas pour but de
          dessiner ; elle doit rendre la commande vérifiable.
        </p>

        <ol>
          <li>
            Écrivez les trois actions essentielles et les contenus qui les
            rendent crédibles.
          </li>
          <li>
            Nommez la page la moins standard et placez-y de vrais contenus.
          </li>
          <li>
            Pour chacune des cinq couches, marquez « standard accepté »,
            « différence nécessaire » ou « inconnu à lever ».
          </li>
          <li>
            Associez chaque différence à une raison, un livrable, une preuve
            d’acceptation, un responsable et un coût.
          </li>
          <li>
            Choisissez le niveau le plus bas qui traite toutes les contraintes
            non négociables sans dette cachée.
          </li>
        </ol>

        <InfoBox variant="emerald" title="La décision finale tient en trois phrases">
          <p className="mb-2">
            « Nous choisissons le niveau ______ parce que les différences
            indispensables sont ______. »
          </p>
          <p className="mb-2">
            « Nous réutilisons ______ et nous faisons concevoir ______, accepté
            au moyen de ______. »
          </p>
          <p className="mb-0">
            « Nous ne reconstruisons pas / nous ne montons pas au niveau suivant
            parce que ______ ne produit pas de valeur ou de réduction de risque
            démontrable. »
          </p>
        </InfoBox>

        <p>
          <strong>Cas adapté à un cadrage externe :</strong> le site vitrine a un
          objectif identifiable, des contenus ou preuves accessibles, un
          décideur disponible et au moins une contrainte qui doit être testée.
          <strong> Cas inadapté :</strong> l’offre n’est pas définie, aucun
          contenu n’existe, le besoin est en réalité une boutique ou une
          application complexe, un incident de sécurité est actif, ou une hausse
          garantie des ventes est exigée du seul design.
        </p>

        <p>
          Hagnéré Code conçoit des{" "}
          <Link href="/services/sites-vitrines">
            sites vitrines professionnels
          </Link>
          . Un cadrage sérieux peut néanmoins conclure qu’un template propre,
          une page pilote, une correction de l’existant ou un travail de contenu
          doit précéder un développement spécifique.
        </p>

        <GuideInlineCTA
          title="Cadrer le niveau de personnalisation réellement utile"
          description="Décrivez l’offre, les contenus, la page la moins standard, les contraintes et les devis déjà reçus. Nous séparons ce qui peut rester éprouvé de ce qui mérite une conception propre — y compris si la bonne réponse est de conserver ou simplifier."
          tags={[
            "5 couches séparées",
            "Livrables et preuves nommés",
            "Aucun sur-mesure vendu par principe",
          ]}
          ctaLabel="Cadrer mon site vitrine"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <p>
          Sources consultées le 20 juillet 2026. Les documentations de
          plateformes décrivent leur propre périmètre et peuvent évoluer. Les
          recommandations Google ne dévoilent pas tous ses systèmes et ne
          garantissent ni classement, ni conversion. Les standards W3C et les
          ressources CNIL doivent être appliqués au site, aux contenus, aux
          traitements et au cadre juridique réels. Ce guide ne remplace ni un
          audit technique, ni une analyse juridique.
        </p>

        <ul>
          <li>
            <a
              href="https://wordpress.org/documentation/article/work-with-themes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress — Work with themes
            </a>{" "}
            : rôle d’un thème dans la présentation du site.
          </li>
          <li>
            <a
              href="https://developer.wordpress.org/themes/advanced-topics/child-themes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress Theme Handbook — Child themes
            </a>{" "}
            : séparation des adaptations et limite des personnalisations très
            étendues.
          </li>
          <li>
            <a
              href="https://wordpress.org/documentation/article/tools-export-screen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress — Tools Export screen
            </a>{" "}
            et{" "}
            <a
              href="https://wordpress.org/about/license/"
              target="_blank"
              rel="noopener noreferrer"
            >
              licence WordPress
            </a>{" "}
            : contenu exporté et droits du logiciel, sans les confondre avec une
            sauvegarde complète ou tous les actifs du projet.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/appearance/page-experience"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Page experience
            </a>{" "}
            : signaux d’expérience et absence de garantie de classement.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — JavaScript SEO basics
            </a>{" "}
            : rendu, liens, statuts et métadonnées à vérifier.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Mobile-first indexing
            </a>{" "}
            et{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
              target="_blank"
              rel="noopener noreferrer"
            >
              migrations avec changement d’URL
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3C/WAI — WCAG Overview
            </a>{" "}
            : principes et niveaux du standard d’accessibilité.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Cookies et traceurs
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel"
              target="_blank"
              rel="noopener noreferrer"
            >
              exemples de formulaire de collecte
            </a>
            .
          </li>
          <li>
            <a
              href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wix — Exporting or embedding your Wix site elsewhere
            </a>{" "}
            : limite de portabilité propre à Wix, non généralisable.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
