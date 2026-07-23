import type { Metadata } from "next";
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
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("google-ads-ou-meta-ads");

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
        alt: "Google Ads ou Meta Ads selon la façon dont les clients découvrent une offre",
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
      name: "Google Ads ou Meta Ads",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Google Ads ou Meta Ads : lequel est le moins cher ?",
    answer:
      "Le coût du clic ne permet pas de répondre. Comparez, sur la même période, la dépense publicitaire, la création des annonces, les demandes correspondant à votre cible, les ventes et la marge. Un clic Meta moins cher peut coûter plus cher par vente, ou l’inverse.",
  },
  {
    question: "Google Ads convient-il mieux aux entreprises B2B ?",
    answer:
      "Pas automatiquement. Google Search est pertinent lorsqu’un acheteur formule déjà le problème ou la solution. Meta peut être utile pour montrer un usage, toucher plusieurs décideurs ou rappeler une offre. Le cycle d’achat, les preuves disponibles et le suivi des ventes comptent davantage que l’étiquette B2B.",
  },
  {
    question: "Peut-on utiliser Google Ads et Meta Ads ensemble ?",
    answer:
      "Oui, si chaque plateforme a une mission distincte et mesurable. Meta peut présenter l’offre, Google répondre à une recherche plus tard, ou l’ordre peut être inversé. Avec un budget limité, tester une seule hypothèse à la fois produit souvent une lecture plus claire.",
  },
  {
    question: "Faut-il choisir Meta Ads si mon produit est visuel ?",
    answer:
      "Un produit démontrable en photo ou vidéo donne davantage de matière à Meta, mais cela ne garantit pas les ventes. Vérifiez si la démonstration déclenche des demandes qualifiées et si votre page permet de décider, puis comparez le résultat commercial au coût complet.",
  },
  {
    question: "Quelle plateforme choisir pour une activité locale ?",
    answer:
      "Google Search peut répondre à une recherche locale déjà formulée ; Meta peut faire connaître une offre, un lieu ou un événement à une audience locale. Choisissez selon le comportement réel de vos clients et votre capacité à mesurer appels, réservations ou ventes.",
  },
  {
    question: "Quand faut-il reporter toute campagne ?",
    answer:
      "Reportez si l’offre reste difficile à expliquer, si la marge est inconnue, si la page ne rassure pas, si personne ne traite les demandes ou si les ventes ne peuvent pas être reliées au test. Corriger ces points rendra le budget suivant plus instructif.",
  },
];

const choices = [
  {
    answer: "Google Search d’abord",
    situation:
      "Vos clients nomment déjà le service ou le problème dans Google, et votre page répond précisément à cette recherche.",
    test: "Une campagne sur quelques recherches précises, suivie jusqu’aux demandes qualifiées et aux ventes.",
    color: "border-blue-300/30 bg-blue-400/[0.08]",
  },
  {
    answer: "Meta d’abord",
    situation:
      "L’offre doit être montrée ou expliquée avant que la personne pense à la chercher, et vous possédez de bons visuels.",
    test: "Une idée créative, un objectif lié au vrai résultat et une page cohérente avec la publicité.",
    color: "border-pink-300/30 bg-pink-400/[0.08]",
  },
  {
    answer: "Une séquence des deux",
    situation:
      "Le client découvre, compare puis recherche votre nom ou la solution avant de décider.",
    test: "Deux missions séparées, des liens suivis et une lecture des ventes sans attribuer deux fois le même résultat.",
    color: "border-violet-300/30 bg-violet-400/[0.08]",
  },
  {
    answer: "Aucun pour l’instant",
    situation:
      "Votre offre, votre page, votre marge ou votre suivi commercial empêche de comprendre un échec.",
    test: "Corriger d’abord le point qui ferait perdre même un visiteur parfaitement ciblé.",
    color: "border-amber-300/30 bg-amber-400/[0.08]",
  },
];

function DecisionCards() {
  return (
    <section
      className="not-prose my-8 grid gap-3 sm:grid-cols-2"
      aria-label="Réponse selon la situation de l’entreprise"
    >
      {choices.map((choice) => (
        <div
          key={choice.answer}
          className={`rounded-2xl border p-5 ${choice.color}`}
        >
          <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
            {choice.answer}
          </h3>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {choice.situation}
          </p>
          <p className="mb-0 mt-3 border-t border-current/10 pt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <strong className="text-zinc-900 dark:text-zinc-100">
              Premier test :
            </strong>{" "}
            {choice.test}
          </p>
        </div>
      ))}
    </section>
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
          { label: "Google Ads ou Meta Ads" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Google répond surtout à une demande déjà exprimée par une recherche. Facebook et Instagram peuvent montrer une offre avant que la personne la cherche. Ce guide vous aide à choisir selon le parcours d’achat réel, pas selon le clic le moins cher."
        heroAction={{
          href: "#reponse",
          label: "Voir la réponse selon mon cas",
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
            title: "Demande existante ou intérêt à créer",
            description: "",
            color: "blue",
          },
          {
            number: "02",
            title: "Ventes comparées, pas seulement clics",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "Option de ne rien lancer",
            description: "",
            color: "amber",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/calculer-cout-par-lead-google-ads",
            label: "Calculer le coût d’un prospect réellement qualifié",
          },
          {
            href: "/guides/google-search-ou-performance-max",
            label: "Choisir entre Google Search et Performance Max",
          },
          {
            href: "/guides/seo-ou-google-ads",
            label: "Comparer publicité Google et référencement naturel",
          },
          {
            href: "/guides/pourquoi-google-ads-ne-convertit-pas",
            label: "Diagnostiquer une campagne Google qui ne vend pas",
          },
        ]}
        faqTitle="Google Ads ou Meta Ads : les questions avant de choisir"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Vous hésitez entre Google Ads et les publicités Facebook ou
            Instagram ? Ne choisissez pas la plateforme qui affiche le clic le
            moins cher. Google Search est souvent plus direct lorsque vos
            clients recherchent déjà le service. Meta Ads est souvent plus utile
            lorsqu’il faut d’abord montrer une offre, expliquer son intérêt ou
            donner envie de la découvrir.
          </strong>
        </p>

        <p>
          La bonne décision dépend donc de la manière dont vos clients achètent,
          des annonces que vous pouvez produire et de votre capacité à suivre
          une demande jusqu’à la vente. Vous pouvez commencer par Google, par
          Meta, organiser une séquence des deux ou reporter toute campagne. Ce
          guide vous permet de trancher sans benchmark trompeur.
        </p>

        <div id="reponse">
          <DecisionCards />
        </div>

        <GuideToc
          items={[
            {
              id: "difference",
              label: "1. La différence dans la vie de votre client",
            },
            {
              id: "ventes",
              label: "2. Repartir de vos dix dernières ventes",
            },
            {
              id: "google",
              label: "3. Quand Google Search est le meilleur premier test",
            },
            {
              id: "meta",
              label: "4. Quand Meta est le meilleur premier test",
            },
            {
              id: "comparer",
              label: "5. Comparer un même résultat commercial",
            },
            {
              id: "couts",
              label: "6. Compter le travail autour de la publicité",
            },
            {
              id: "sequence",
              label: "7. Combiner les deux sans brouiller la mesure",
            },
            {
              id: "test",
              label: "8. Concevoir un test qui peut vraiment apprendre",
            },
            { id: "attendre", label: "9. Quand ne lancer aucune campagne" },
            { id: "sources", label: "Sources officielles et limites" },
          ]}
        />

        <h2 id="difference">
          1. La différence se voit au moment où votre client vous découvre
        </h2>

        <p>
          Imaginez deux personnes. La première écrit « logiciel de planning pour
          atelier » dans Google. Elle a déjà formulé un problème et cherche une
          réponse. Une campagne Search peut présenter une annonce à côté de
          cette recherche. Google décrit précisément ce format comme un moyen
          d’atteindre des personnes{" "}
          <a
            href="https://support.google.com/google-ads/answer/2567043?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            pendant qu’elles recherchent les produits ou services proposés
          </a>
          .
        </p>

        <p>
          La seconde personne consulte Instagram. Elle ne cherche pas un
          logiciel. Une courte démonstration lui montre pourtant qu’une tâche
          quotidienne pourrait être réalisée autrement. Meta peut diffuser ce
          message selon l’objectif choisi : notoriété, trafic, prospects ou
          ventes. La plateforme indique que son système recherche alors les
          personnes susceptibles d’effectuer{" "}
          <a
            href="https://www.facebook.com/business/ads/ad-objectives"
            target="_blank"
            rel="noopener noreferrer"
          >
            l’action liée à l’objectif de campagne
          </a>
          .
        </p>

        <InfoBox variant="blue" title="Un raccourci utile, pas une loi">
          On dit souvent que Google « capte » la demande et que Meta la « crée
          ». Cela aide à comprendre le premier choix, mais ce n’est pas absolu.
          Google propose aussi des formats de découverte ; Meta peut générer une
          demande immédiate. Ici, nous comparons volontairement Google Search à
          Meta pour garder une décision claire.
        </InfoBox>

        <p>
          Google répond à une intention plus explicite. Meta offre davantage de
          place pour faire comprendre une idée par l’image, la vidéo et la
          répétition. Aucun des deux n’est rentable par nature : une recherche
          peut être trop générale, et une belle vidéo attirer surtout des
          curieux.
        </p>

        <h2 id="ventes">
          2. Repartir de vos dix dernières ventes évite de choisir au hasard
        </h2>

        <p>
          Avant d’ouvrir un compte publicitaire, prenez dix ventes récentes.
          Pour chacune, demandez au commercial ou au dirigeant comment le client
          a découvert l’entreprise, ce qu’il cherchait à ce moment-là, quelle
          preuve l’a rassuré et combien de temps il a mis à décider.
        </p>

        <GuideTable
          headers={[
            "Ce que vous observez",
            "Google devient plausible si",
            "Meta devient plausible si",
          ]}
          rows={[
            [
              "Premier déclencheur",
              "Le client nomme un besoin et lance une recherche",
              "Une démonstration, une image ou une histoire fait naître l’intérêt",
            ],
            [
              "Preuve décisive",
              "Une page répond précisément aux critères de choix",
              "Le résultat se montre clairement avant une longue explication",
            ],
            [
              "Temps avant achat",
              "Le besoin est actif et la comparaison commence",
              "Il faut éduquer, rappeler ou faire mûrir le besoin",
            ],
            [
              "Mesure disponible",
              "Appels, formulaires et ventes peuvent revenir au mot ou à la campagne",
              "Les vues, visites, demandes et ventes peuvent être distinguées",
            ],
          ]}
          caption="Observer le parcours réel avant de choisir la plateforme"
        />

        <p>
          Vous ne cherchez pas une majorité parfaite. Vous cherchez la meilleure
          hypothèse à tester. Si huit ventes commencent par une recherche très
          précise, Google Search mérite un examen. Si le produit se vend surtout
          après une démonstration ou une recommandation, Meta peut mieux porter
          cette première découverte.
        </p>

        <p>
          Si personne ne sait répondre, ce manque est déjà un résultat utile :
          votre premier chantier porte sur le suivi des demandes. Le guide pour{" "}
          <Link href="/guides/calculer-cout-par-lead-google-ads">
            calculer le coût d’un vrai prospect
          </Link>{" "}
          montre comment séparer conversion, demande, qualification et vente.
        </p>

        <h2 id="google">
          3. Commencez par Google Search si le besoin est déjà formulé
        </h2>

        <p>
          Google Search est un bon premier test lorsque le client sait nommer le
          problème, le métier ou la solution. C’est souvent le cas d’un service
          urgent, d’un achat comparé ou d’une prestation locale recherchée au
          moment du besoin.
        </p>

        <p>Le test devient plus solide si :</p>
        <ul>
          <li>la recherche correspond à une offre précise et disponible ;</li>
          <li>la zone, les horaires et le profil de client sont clairs ;</li>
          <li>la page répond exactement à la recherche de l’annonce ;</li>
          <li>les termes réellement déclenchés peuvent être relus ;</li>
          <li>les appels et formulaires sont qualifiés jusqu’à la vente ;</li>
          <li>la marge permet de juger le coût d’acquisition.</li>
        </ul>

        <p>
          Les mots-clés ne donnent pas un contrôle absolu. Google explique que
          la correspondance utilise les mots ou expressions choisis, mais aussi
          le sens de la recherche et d’autres éléments du compte. Il faut donc
          lire les termes disponibles et exclure ceux qui décrivent un autre
          besoin.
        </p>

        <InfoBox
          variant="amber"
          title="Google est moins convaincant quand personne ne cherche encore la solution"
        >
          Une innovation sans catégorie connue peut être difficile à vendre avec
          quelques mots-clés. Le client ne peut pas chercher une formulation
          qu’il ne connaît pas. Vous pouvez alors viser le problème qu’elle
          résout, mais une démonstration sur Meta, un contenu pédagogique ou une
          prospection ciblée peut constituer un meilleur premier apprentissage.
        </InfoBox>

        <h2 id="meta">
          4. Commencez par Meta si vous devez d’abord montrer l’intérêt
        </h2>

        <p>
          Facebook et Instagram prennent l’avantage lorsque la valeur se voit :
          un avant-après, un produit, un lieu, un geste, une ambiance ou une
          courte démonstration. Ils peuvent aussi entretenir la mémoire d’une
          offre auprès de personnes qui ne cherchent pas au même instant.
        </p>

        <p>Meta devient un meilleur test si :</p>
        <ul>
          <li>une image ou une vidéo explique mieux l’offre qu’un mot-clé ;</li>
          <li>
            le public peut être décrit sans prétendre connaître chaque acheteur
            ;
          </li>
          <li>
            plusieurs angles créatifs peuvent être produits et renouvelés ;
          </li>
          <li>la page poursuit exactement la promesse de la publicité ;</li>
          <li>l’objectif choisi correspond à la vraie action attendue ;</li>
          <li>
            l’entreprise accepte qu’une partie du public découvre avant
            d’acheter.
          </li>
        </ul>

        <p>
          Le choix de l’objectif change la lecture. Meta décrit l’objectif{" "}
          <a
            href="https://www.facebook.com/business/ads/ad-objectives/traffic"
            target="_blank"
            rel="noopener noreferrer"
          >
            trafic comme un moyen d’envoyer des personnes vers une destination
          </a>
          . La même documentation recommande d’envisager un objectif prospects,
          messages ou ventes lorsque c’est le résultat recherché. Une campagne
          optimisée pour obtenir des visites ne doit pas être déclarée
          défaillante parce qu’elle n’a pas automatiquement trouvé les meilleurs
          acheteurs.
        </p>

        <p>
          Meta exige aussi davantage de matière publicitaire. Une seule image
          générique répétée pendant des semaines ne teste pas sérieusement la
          plateforme. Elle teste surtout cette image. Comptez le temps de
          tournage, de montage, d’écriture et de renouvellement avant d’opposer
          le coût média à celui de Google.
        </p>

        <h2 id="comparer">
          5. Comparez une vente à une vente, pas un clic à un clic
        </h2>

        <p>
          Dans cet <strong>exemple illustratif fictif</strong>, Atelier Noroît
          dépense 1 500 € sur Google Search et 1 500 € sur Meta pendant une même
          période. Meta apporte quatre fois plus de clics. Cette information ne
          suffit pas à déplacer le budget.
        </p>

        <p>L’entreprise remplit plutôt, pour chaque canal :</p>

        <FormulaBox>{`Coût d’une demande qualifiée
= dépenses publicitaires et production attribuables
÷ demandes correspondant au client visé

Coût d’une vente observée
= dépenses publicitaires et production attribuables
÷ ventes reliées au test

Marge après acquisition
= marge prudente des ventes observées
− coût publicitaire et coût de production attribuables`}</FormulaBox>

        <p>
          Les heures internes ne deviennent pas automatiquement des euros. Si
          vous les valorisez, écrivez le coût retenu et la raison : temps
          supplémentaire payé, prestation achetée ou travail réellement retiré
          d’une autre mission. Une inconnue reste « à confirmer ».
        </p>

        <p>
          Google permet d’importer des étapes commerciales hors ligne telles
          qu’un prospect qualifié ou une vente conclue. Meta propose sa
          Conversions API pour relier, selon la configuration, des événements du
          site, de l’application ou du système commercial. Ces outils améliorent
          la mesure ; ils ne rendent jamais l’attribution parfaite et doivent
          être configurés dans le respect des règles applicables aux données.
        </p>

        <h2 id="couts">
          6. La publicité coûte aussi du travail avant et après le clic
        </h2>

        <p>
          Deux budgets média identiques ne donnent pas deux tests de même coût.
          Ajoutez les éléments nécessaires à chaque plateforme :
        </p>

        <GuideTable
          headers={["Travail", "Google Search", "Meta Ads"]}
          rows={[
            [
              "Préparer",
              "Recherches, exclusions, annonces textuelles et pages très ciblées",
              "Angles, images ou vidéos, formats et renouvellement créatif",
            ],
            [
              "Répondre",
              "Traiter rapidement une personne qui compare déjà des solutions",
              "Expliquer davantage et accompagner une décision parfois moins mûre",
            ],
            [
              "Mesurer",
              "Relier recherche, appel ou formulaire à la qualification puis à la vente",
              "Distinguer vue, visite, demande, vente et influence possible sur un autre canal",
            ],
            [
              "Entretenir",
              "Relire les termes, budgets, annonces et pages",
              "Renouveler les créations, surveiller la répétition et garder le message cohérent",
            ],
          ]}
          caption="Le travail nécessaire autour du budget média"
        />

        <p>
          Une agence ou un salarié ne supprime pas ce travail. L’entreprise doit
          encore expliquer l’offre, fournir des preuves, répondre aux demandes
          et déclarer les ventes. Sans cette dernière étape, l’algorithme comme
          le dirigeant apprennent à partir d’un résultat incomplet.
        </p>

        <h2 id="sequence">
          7. N’utilisez les deux que si chacun a un rôle clair
        </h2>

        <p>
          Une combinaison peut être rationnelle. Meta présente un problème et
          montre le résultat. Plus tard, la personne cherche la marque ou la
          catégorie dans Google. Une autre entreprise peut suivre le trajet
          inverse : une recherche Google amène une première visite, puis une
          publicité Meta rappelle l’offre.
        </p>

        <p>
          Le danger consiste à attribuer la même vente deux fois. Pour l’éviter,
          écrivez avant le lancement :
        </p>

        <ol>
          <li>la mission de chaque campagne ;</li>
          <li>l’action mesurée à la sortie de chaque étape ;</li>
          <li>la fenêtre de lecture retenue et ses limites ;</li>
          <li>la règle utilisée lorsqu’une personne a rencontré les deux ;</li>
          <li>la décision qui sera prise après le test.</li>
        </ol>

        <p>
          Si le budget ne permet pas d’alimenter correctement deux campagnes,
          deux jeux d’annonces et deux lectures commerciales, testez d’abord
          l’hypothèse la plus importante. Être présent partout n’est pas une
          stratégie lorsque chaque résultat devient impossible à expliquer.
        </p>

        <h2 id="test">
          8. Un bon test publicitaire peut conclure que l’hypothèse était fausse
        </h2>

        <p>
          N’écrivez pas « tester Meta » ou « tester Google ». Écrivez la
          question précise : « Des dirigeants qui recherchent cette prestation
          demandent-ils un échange après avoir vu cette page ? » ou « Cette
          démonstration transforme-t-elle une audience froide en demandes
          correspondant à notre cible ? »
        </p>

        <InfoBox variant="emerald" title="La fiche de test à remplir">
          <ul className="m-0 space-y-2 pl-5">
            <li>hypothèse et profil de client visé ;</li>
            <li>offre, message et page utilisés ;</li>
            <li>budget total que l’entreprise accepte de perdre ;</li>
            <li>
              résultat principal : demande qualifiée, vente ou autre étape ;
            </li>
            <li>personne responsable de la qualification ;</li>
            <li>règle pour continuer, corriger ou arrêter ;</li>
            <li>inconnues qui empêcheront une conclusion ferme.</li>
          </ul>
        </InfoBox>

        <p>
          Ne changez pas simultanément la plateforme, l’offre, la page, le prix
          et le traitement des appels si vous voulez comprendre le résultat.
          Certaines corrections urgentes restent nécessaires, mais consignez-les
          au lieu de présenter la campagne comme une expérience parfaitement
          contrôlée.
        </p>

        <h2 id="attendre">
          9. Ne lancez aucune campagne si vous ne pouvez pas apprendre
        </h2>

        <p>
          Reporter la publicité est la meilleure décision lorsque l’offre n’est
          pas compréhensible, que la page ne correspond pas à l’annonce, que la
          marge reste inconnue ou que personne ne rappelle les demandes. Dans
          ces conditions, la plateforme peut apporter exactement le public visé
          sans que l’entreprise sache le reconnaître ni le convertir.
        </p>

        <p>
          Corrigez d’abord le maillon bloquant. Pour une page qui reçoit déjà du
          trafic mais peu de demandes, commencez par comprendre{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            pourquoi le site ne convertit pas
          </Link>
          . Pour une campagne Google existante, notre guide sur{" "}
          <Link href="/guides/pourquoi-google-ads-ne-convertit-pas">
            les campagnes qui dépensent sans produire de ventes
          </Link>{" "}
          aide à trouver où le parcours se rompt.
        </p>

        <GuideInlineCTA
          title="Choisir le premier canal à tester"
          description="Dites-nous comment vos dix derniers clients vous ont découvert, ce qu’ils cherchaient et ce que vous savez suivre jusqu’à la vente. Nous choisirons une première hypothèse Google, Meta — ou aucun canal tant que la page n’est pas prête."
          tags={[
            "Google, Meta ou report",
            "Résultat commercial défini",
            "Lecture jusqu’à la vente",
          ]}
          ctaLabel="Choisir mon premier test"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <ul>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/2567043?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — choisir le bon type de campagne
            </a>{" "}
            : rôle des campagnes Search.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/1722020?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — annonces et résultats de recherche
            </a>{" "}
            : correspondance entre recherches, mots-clés et annonces.
          </li>
          <li>
            <a
              href="https://www.facebook.com/business/ads/ad-objectives"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meta for Business — objectifs publicitaires
            </a>{" "}
            : mission donnée au système publicitaire.
          </li>
          <li>
            <a
              href="https://www.facebook.com/business/ads/ad-objectives/traffic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meta for Business — objectif trafic
            </a>{" "}
            : distinction entre visites et objectifs de prospects ou ventes.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/10029210?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — conversions hors ligne
            </a>{" "}
            et{" "}
            <a
              href="https://www.facebook.com/business/help/AboutConversionsAPI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meta — Conversions API
            </a>{" "}
            : possibilités actuelles de relier des étapes commerciales.
          </li>
        </ul>

        <p>
          Ces documentations décrivent les plateformes, pas la rentabilité de
          votre entreprise. Les fonctions, interfaces et règles de données
          évoluent. Le guide ne fournit aucun coût moyen, aucune attribution
          parfaite et aucune garantie de vente. Les obligations applicables à
          votre collecte et à vos transferts de données doivent être vérifiées
          pour votre configuration.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
