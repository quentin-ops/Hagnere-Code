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

const guide = getGuide("positions-google-baissent");

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
        alt: "Diagnostic d’une baisse de positions et de clics dans Google",
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
      name: "Positions Google en baisse",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Une mise à jour Google au même moment prouve-t-elle la cause ?",
    answer:
      "Non. Elle donne une date à ajouter à votre chronologie, pas un diagnostic de votre site. Vérifiez encore quelles pages et quelles recherches ont baissé, si un changement interne a eu lieu et si un rapport Google signale un problème précis.",
  },
  {
    question:
      "Une baisse de position moyenne signifie-t-elle que le SEO ne fonctionne plus ?",
    answer:
      "Non. Cette moyenne dépend des pages, des recherches et des filtres compris dans le rapport. Lisez-la avec les impressions, les clics et le taux de clics, puis regardez où la variation se concentre.",
  },
  {
    question: "Faut-il réécrire les articles qui ont perdu des clics ?",
    answer:
      "Non, pas avant d’avoir vérifié la demande, l’indexation, les recherches touchées et la manière dont le résultat apparaît. Une réécriture massive peut masquer la cause initiale et créer de nouveaux changements difficiles à comparer.",
  },
  {
    question: "La navigation privée montre-t-elle ma vraie position ?",
    answer:
      "Non. Elle retire une partie de la personnalisation, mais le lieu, l’appareil, la langue, l’heure et la composition des résultats peuvent encore varier. Une recherche manuelle reste une observation locale et datée.",
  },
  {
    question: "Combien de temps faut-il attendre avant d’agir ?",
    answer:
      "Il n’existe pas de délai universel. Un problème de sécurité, une action manuelle ou un obstacle technique confirmé se traite sans attendre. Une petite fluctuation sans perte de clics utiles peut au contraire être observée sans modifier la page.",
  },
];

const shortIncidentSheet = [
  "Date du relevé :",
  "Ce qui a baissé, avec le chiffre avant et après :",
  "Pages ou offres touchées :",
  "Conséquence réellement observée sur les demandes ou les ventes :",
  "Changement connu juste avant la baisse :",
  "Décision provisoire, personne chargée du contrôle et date de relecture :",
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
          { label: "Positions Google en baisse" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vos clics, vos impressions ou votre position moyenne reculent ? Comparez les mêmes données, trouvez les pages réellement touchées et choisissez quoi faire sans réécrire tout le site dans l’urgence."
        heroAction={{
          href: "#confirmer",
          label: "Commencer par les bons chiffres",
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
            title: "4 chiffres à séparer",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "1 chronologie",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "1 fiche à copier",
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
            href: "/guides/pourquoi-site-pas-visible-google",
            label: "Diagnostiquer une page qui n’apparaît plus",
          },
          {
            href: "/guides/refonte-sans-perdre-son-seo",
            label: "Contrôler une baisse après une refonte",
          },
          {
            href: "/guides/audit-seo-que-contient-il",
            label: "Savoir ce qu’un audit SEO doit livrer",
          },
          {
            href: "/guides/choisir-agence-seo",
            label: "Comparer des agences SEO",
          },
          {
            href: "/services/referencement-google",
            label: "Découvrir l’accompagnement SEO",
          },
        ]}
        faqTitle="Baisse des positions Google : les réponses directes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Vos clics Google baissent et un outil annonce que plusieurs pages ont
          perdu des places. Faut-il réécrire les articles, corriger le site ou
          attendre ? <strong>Ne changez rien à grande échelle</strong> tant que
          vous n’avez pas vérifié ce qui baisse vraiment. Ouvrez la bonne
          propriété dans Google Search Console et comparez deux périodes
          comparables avec exactement les mêmes filtres. Regardez séparément les
          impressions — les apparitions du site —, les clics, le taux de clics
          et la position moyenne. Ces quatre chiffres peuvent évoluer ensemble
          sans révéler, à eux seuls, la cause. Ce guide vous aide à localiser la
          baisse, vérifier un incident ou un changement du site, puis décider
          s’il faut réparer, améliorer, observer ou demander un audit ciblé.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Une courbe qui baisse ne dit pas encore ce qu’il faut corriger.
          Reproduisez d’abord le constat avec les mêmes dates et les mêmes
          filtres. Ensuite seulement, cherchez ce qui a changé sur les pages
          touchées. Cette séparation évite de payer une refonte ou une série
          d’articles pour un problème de mesure, une saison plus calme ou une
          erreur limitée à quelques pages.
        </InfoBox>

        <GuideToc
          items={[
            { id: "confirmer", label: "1. Confirmer que la baisse est réelle" },
            { id: "quatre-chiffres", label: "2. Lire les quatre chiffres" },
            { id: "localiser", label: "3. Trouver où la baisse se concentre" },
            {
              id: "chronologie",
              label: "4. Placer les changements sur une ligne du temps",
            },
            {
              id: "causes",
              label: "5. Distinguer site, demande et résultats Google",
            },
            { id: "exemple", label: "6. Refaire un exemple chiffré" },
            { id: "fiche", label: "7. Copier la fiche d’incident" },
            { id: "decider", label: "8. Choisir la prochaine action" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="confirmer">1. Confirmez que la baisse est réelle</h2>

        <p>
          Une recherche faite depuis votre téléphone ne suffit pas. Google peut
          afficher des résultats différents selon le lieu, l’appareil, la
          langue, le moment et l’historique récent. Le{" "}
          <a
            href="https://support.google.com/webmasters/answer/7576553?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport Performances de Search Console
          </a>{" "}
          permet de comparer des périodes, des pages et des recherches dans un
          cadre reproductible.
        </p>

        <p>Avant toute modification, notez ces éléments :</p>

        <ul>
          <li>la propriété Search Console exacte que vous consultez ;</li>
          <li>
            les deux périodes et la raison pour laquelle elles sont comparables
            ;
          </li>
          <li>
            le type de recherche, le pays, l’appareil et tous les filtres actifs
            ;
          </li>
          <li>
            si les données les plus récentes sont encore indiquées comme
            préliminaires ;
          </li>
          <li>
            la phrase factuelle : « les clics de ces pages sont passés de X à Y
            ».
          </li>
        </ul>

        <p>
          Comparez de préférence des semaines complètes ou des mois complets si
          votre activité varie selon les jours. Pour une saison annuelle,
          regardez aussi la période équivalente de l’année précédente. Google
          explique comment{" "}
          <a
            href="https://support.google.com/webmasters/answer/17011165?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            conserver des groupes et des filtres comparables
          </a>
          . Une date plus longue n’est pas toujours meilleure : elle doit
          répondre à votre question sans mélanger deux offres ou deux versions
          très différentes du site.
        </p>

        <InfoBox variant="amber" title="Vérifiez aussi le thermomètre">
          Consultez la{" "}
          <a
            href="https://support.google.com/webmasters/answer/6211453?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            page des anomalies de données Search Console
          </a>{" "}
          pour les dates et le rapport concernés. Une anomalie précise peut
          modifier une courbe sans décrire une baisse réelle du site. Ne
          généralisez pas un incident limité à Discover, à un rapport ou à
          quelques jours.
        </InfoBox>

        <h2 id="quatre-chiffres">
          2. Regardez lequel des quatre chiffres baisse
        </h2>

        <GuideTable
          caption="Ce que chaque chiffre permet de constater"
          headers={["Chiffre", "Ce qu’il raconte", "Premier contrôle utile"]}
          rows={[
            [
              "Impressions",
              "Le site a été affiché plus ou moins souvent dans la vue choisie.",
              "Pages, recherches, saison et indexation.",
            ],
            [
              "Clics",
              "Des clics sur un résultat Google conduisant vers le site ont augmenté ou diminué.",
              "Impressions, taux de clics et pages qui perdent le plus.",
            ],
            [
              "Taux de clics",
              "Une part plus ou moins grande des impressions produit un clic.",
              "Titre, extrait, place moyenne et présentation des résultats.",
            ],
            [
              "Position moyenne",
              "Le meilleur résultat retenu pour la propriété ou la page apparaît en moyenne plus haut ou plus bas.",
              "Recherches, pages et composition de la moyenne.",
            ],
          ]}
        />

        <p>
          La position moyenne n’est pas « votre place Google » pour tout le
          monde. Search Console calcule une moyenne à partir du résultat le
          mieux placé de la propriété ou de la ligne affichée. Si la composition
          des recherches ou des pages change, la moyenne peut changer sans que
          chaque requête ait reculé de la même manière. C’est pourquoi Google
          recommande de ne pas se concentrer uniquement sur une position absolue
          dans son{" "}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide pour examiner une baisse de trafic naturel
          </a>
          .
        </p>

        <p>
          Conservez aussi le même mode de regroupement. Les données regroupées
          par propriété et celles regroupées par page ne comptent pas toujours
          impressions, clics et position de la même façon. La{" "}
          <a
            href="https://support.google.com/webmasters/answer/17011364?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur l’agrégation des données
          </a>{" "}
          détaille cette différence. Ne faites pas la moyenne de plusieurs
          positions moyennes exportées : repartez de la même vue Search Console.
        </p>

        <h2 id="localiser">3. Trouvez où la baisse se concentre</h2>

        <p>
          Triez d’abord les pages par perte de clics, puis les recherches par
          perte d’impressions. Comparez ensuite le pays, l’appareil et le type
          de recherche lorsque ces découpages ont un sens pour votre activité.
          Gardez deux ou trois pages stables : elles servent de point de
          comparaison. Si seules les pages d’une offre baissent tandis que le
          reste du site tient, la réponse ne sera probablement pas une refonte
          générale.
        </p>

        <p>
          Les lignes visibles ne forment pas toujours un total exhaustif. Search
          Console masque les recherches anonymisées et limite aussi le nombre de
          lignes restituées. Sans filtre de recherche, les requêtes anonymisées
          restent généralement comprises dans le total du graphique ; un filtre
          peut modifier ce total. Utilisez donc les lignes pour localiser la
          baisse, mais ne présentez pas leur somme comme l’ensemble exact de la
          demande.
        </p>

        <InfoBox
          variant="blue"
          title="Deux découpages optionnels à lire avec prudence"
        >
          Le filtre marque/hors marque peut manquer lorsque le volume est
          faible. Cette fonctionnalité, lancée en mars 2025, conserve jusqu’à
          seize mois d’historique et peut classer certaines recherches
          imparfaitement. Le rapport sur l’IA générative n’est disponible que
          pour une partie des propriétés et peut aussi manquer si les
          impressions sont insuffisantes. Ses impressions issues des Aperçus IA
          et du Mode IA sont déjà incluses dans le total Web : ne les
          additionnez pas une seconde fois. Les données récentes peuvent être
          préliminaires et Search Labs n’est pas inclus. Ces limites sont
          détaillées dans la{" "}
          <a
            href="https://support.google.com/webmasters/answer/17011259?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation des dimensions
          </a>{" "}
          et dans l’{" "}
          <a
            href="https://support.google.com/webmasters/answer/16984139?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide du rapport IA générative
          </a>
          .
        </InfoBox>

        <p>
          Si une page importante ne semble plus indexée ou n’apparaît plus du
          tout, quittez temporairement cette enquête globale et suivez le guide
          pour{" "}
          <Link href="/guides/pourquoi-site-pas-visible-google">
            comprendre pourquoi une page n’apparaît pas sur Google
          </Link>
          . Vous chercherez alors un point de rupture précis plutôt qu’une
          variation de moyenne.
        </p>

        <h2 id="chronologie">
          4. Placez les changements sur une seule ligne du temps
        </h2>

        <p>
          Écrivez la date de début apparente de la baisse, puis ajoutez sur la
          même ligne chaque fait daté : nouvelle version, changement de titre,
          modification d’adresse, redirection, ajout de <code>noindex</code>,
          panne, changement d’hébergement, navigation revue ou migration. Une
          coïncidence aide à choisir le prochain contrôle ; elle ne prouve pas
          encore la cause.
        </p>

        <p>
          Ouvrez le rapport d’indexation et inspectez quelques pages touchées,
          mais aussi des pages stables. Une page non indexée n’est pas forcément
          en erreur : lisez la raison exacte. En revanche, une directive
          <code> noindex</code> observée empêche l’indexation. Les cas et leurs
          libellés sont expliqués dans le{" "}
          <a
            href="https://support.google.com/webmasters/answer/7440203?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport d’indexation des pages
          </a>
          . Après une migration, contrôlez également les anciennes adresses, les
          nouvelles et les redirections avec notre guide pour{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">
            refondre un site sans perdre son référencement
          </Link>
          .
        </p>

        <InfoBox
          variant="amber"
          title="Deux rapports demandent une réaction rapide"
        >
          Une{" "}
          <a
            href="https://support.google.com/webmasters/answer/9044175?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            action manuelle
          </a>{" "}
          est explicitement signalée dans son rapport et peut toucher une partie
          ou la totalité du site. Un{" "}
          <a
            href="https://support.google.com/webmasters/answer/9044101?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            problème de sécurité
          </a>{" "}
          peut concerner un piratage, un logiciel malveillant ou une tromperie.
          Si l’un de ces rapports affiche une alerte, conservez les informations
          et faites traiter ce problème avant une réécriture éditoriale.
        </InfoBox>

        <h2 id="causes">
          5. Distinguez le site, la demande et les résultats Google
        </h2>

        <p>
          Si les mêmes sujets baissent aussi d’une année sur l’autre dans votre
          secteur, la demande peut être plus faible. Google Trends aide à
          observer l’évolution relative de l’intérêt, mais ses données viennent
          d’un échantillon agrégé, anonymisé et catégorisé : elles ne donnent ni
          un volume exact ni la cause propre à votre site. Google explique ces
          limites dans son{" "}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/trends-start?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide de prise en main de Google Trends
          </a>
          .
        </p>

        <p>
          Ajoutez aussi les incidents et mises à jour notables du{" "}
          <a
            href="https://status.search.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Status Dashboard
          </a>{" "}
          à votre ligne du temps. Le tableau de bord décrit des événements
          généraux ; il ne dit pas que votre site en est victime, et son silence
          n’écarte pas un problème propre à votre site. Après une mise à jour
          principale, Google recommande d’éviter les corrections précipitées,
          d’examiner les pages touchées et rappelle qu’une amélioration peut ne
          produire aucun effet notable dans sa{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/core-updates?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les mises à jour principales
          </a>
          .
        </p>

        <p>
          Enfin, faites une recherche datée sur trois à cinq requêtes réellement
          touchées. Les résultats répondent-ils aujourd’hui à une autre question
          ? Montrent-ils des prix, des comparaisons, des services locaux ou des
          formats que votre page ne couvre pas ? Cherchez un manque utile pour
          le lecteur, pas une liste de mots à ajouter. Si une amélioration est
          justifiée, limitez-la aux pages et questions concernées.
        </p>

        <h2 id="exemple">6. Refaites le calcul avant de raconter la cause</h2>

        <p>
          <strong>Exemple illustratif entièrement fictif.</strong> Ces valeurs
          sont inventées pour expliquer une courbe. Elles ne représentent ni un
          client, ni une moyenne, ni un seuil d’alerte. Les deux périodes durent
          28 jours et utilisent les mêmes filtres fictifs : recherche Web,
          France, mobile et même groupe de pages.
        </p>

        <GuideTable
          caption="Deux périodes fictives avec les mêmes filtres"
          headers={["Mesure", "Avant → après", "Calcul et lecture"]}
          rows={[
            [
              "Impressions",
              "24 000 → 18 000",
              "(18 000 − 24 000) ÷ 24 000 = −25 %",
            ],
            [
              "Clics",
              "480 → 288",
              "(288 − 480) ÷ 480 = −40 %, soit 192 clics de moins",
            ],
            [
              "Taux de clics",
              "2,0 % → 1,6 %",
              "−0,4 point, soit −20 % en relatif",
            ],
            [
              "Position moyenne",
              "5,8 → 8,4",
              "+2,6 : le nombre augmente, donc la place moyenne est moins bonne",
            ],
          ]}
        />

        <p>
          Le contrôle donne <strong>24 000 × 2,0 % = 480 clics</strong> et
          <strong> 18 000 × 1,6 % = 288 clics</strong>. Si vous appliquez
          d’abord le nouveau taux de clics aux 24 000 impressions, la différence
          se décompose en <strong>96 + 96 = 192 clics</strong>. Si vous
          commencez par les impressions au taux initial, elle devient
          <strong> 120 + 72 = 192 clics</strong>.
        </p>

        <InfoBox variant="amber" title="Le seul résultat qui ne change pas">
          La perte totale de 192 clics est la seule valeur identique dans les
          deux ordres. Vous ne pouvez donc pas conclure que la moitié de la
          baisse vient du taux de clics. Le calcul vérifie la cohérence des
          chiffres ; il ne transforme pas une mesure en cause.
        </InfoBox>

        <h2 id="fiche">
          7. Copiez une fiche qu’une autre personne pourra relire
        </h2>

        <p>
          Commencez par six lignes compréhensibles par le dirigeant. Elles
          suffisent à dire ce qui s’est passé, ce que l’entreprise ressent et
          qui doit reprendre le sujet. Remplacez les deux-points par vos
          réponses et gardez « inconnu » lorsque vous ne savez pas encore.
        </p>

        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
            Fiche d’incident SEO — version courte
          </p>
          <div className="space-y-3">
            {shortIncidentSheet.map((line) => (
              <p
                key={line}
                className="mb-0 rounded-lg border border-zinc-200 bg-white p-3 text-sm font-medium leading-relaxed text-zinc-800 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <details className="not-prose my-6 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5">
          <summary className="cursor-pointer text-sm font-semibold text-zinc-950 dark:text-white">
            Ajouter le complément technique facultatif
          </summary>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              <strong>1. Vue comparée.</strong> Propriété exacte, périodes A et
              B, type de recherche, pays, appareil, apparence, filtres de pages
              et de recherches, données préliminaires, anomalie applicable :
              oui, non ou inconnu.
            </p>
            <p>
              <strong>2. Quatre chiffres.</strong> Impressions, clics, taux de
              clics et position moyenne avant, après et différence, toujours
              avec les mêmes filtres.
            </p>
            <p>
              <strong>3. Endroits touchés.</strong> Pages et recherches qui
              baissent le plus, pays, appareils, types de recherche et pages
              stables qui servent de comparaison.
            </p>
            <p>
              <strong>4. Ligne du temps.</strong> Date, changement ou événement,
              source de la date et pages pouvant être concernées. Incluez mise
              en ligne, titre, contenu, adresse, redirection, noindex, panne,
              navigation, migration et événement Google vérifié.
            </p>
            <p>
              <strong>5. Rapports urgents.</strong> Site accessible, indexation,
              inspection de trois pages touchées, adresse canonique attendue et
              retenue, action manuelle et sécurité. « Accès manquant » ou «
              inconnu » sont des réponses acceptées.
            </p>
            <p>
              <strong>6. Hypothèse et décision.</strong> Élément qui va dans son
              sens, élément qui la contredit, information manquante, action
              proposée, moyen de revenir en arrière, personne responsable et
              date du contrôle.
            </p>
          </div>
        </details>

        <p>
          La fiche est exploitable si une personne absente de l’analyse peut
          reproduire la comparaison, nommer les pages touchées, distinguer le
          constat de l’explication envisagée et savoir ce qui sera contrôlé. «
          Google a changé » sans dates, pages et filtres ne suffit pas.
        </p>

        <h2 id="decider">8. Choisissez une action proportionnée au constat</h2>

        <GuideTable
          caption="Quatre sorties possibles après la vérification"
          headers={["Situation", "Décision raisonnable", "À éviter"]}
          rows={[
            [
              "Obstacle technique, sécurité ou action manuelle confirmé",
              "Corriger ou escalader immédiatement le point observé.",
              "Réécrire les contenus avant d’avoir retiré l’obstacle.",
            ],
            [
              "Quelques pages ne répondent plus aussi bien aux recherches touchées",
              "Améliorer seulement ces pages et conserver l’état initial.",
              "Changer titres, textes et navigation sur tout le site.",
            ],
            [
              "Légère fluctuation sans perte de clics utiles",
              "Observer avec une date de relecture.",
              "Acheter une remontée de place abstraite.",
            ],
            [
              "Plusieurs familles de pages et plusieurs causes restent mêlées",
              "Demander un audit ciblé avec les exports et la fiche.",
              "Commander un rapport global sans question précise.",
            ],
          ]}
        />

        <h3>Dans les 30 premières minutes</h3>
        <p>
          Ne supprimez rien en masse. Vérifiez la propriété et les filtres,
          enregistrez les quatre chiffres, consultez les anomalies, ouvrez le
          site puis les rapports Actions manuelles et Sécurité. Notez tout
          changement récent sans lui attribuer encore la cause.
        </p>

        <h3>Dans les 24 heures</h3>
        <p>
          Exportez la vue, classez les pages et recherches les plus touchées,
          comparez les appareils et pays utiles, inspectez quelques pages en
          baisse et quelques pages stables, puis complétez la ligne du temps.
        </p>

        <h3>Dans les 7 jours</h3>
        <p>
          Écartez de la première action les explications qui ne reposent sur
          rien d’observable. Corrigez l’obstacle confirmé, ou améliorez une page
          de manière limitée. Notez comment revenir en arrière et la prochaine
          date de lecture. Si les causes restent mêlées, bornez un audit aux
          pages et questions déjà identifiées.
        </p>

        <InfoBox
          variant="amber"
          title="Une mise à jour principale suspend ce calendrier de modification"
        >
          Si la seule explication restante est une mise à jour principale en
          cours ou achevée depuis moins d’une semaine, ne modifiez pas une page
          uniquement parce que sept jours se sont écoulés. Google recommande
          d’attendre la fin du déploiement, puis au moins une semaine complète
          avant de comparer les pages touchées. Continuez à conserver les faits
          pendant ce temps ; ce délai ne prouve toujours pas que la mise à jour
          est la cause de votre baisse.
        </InfoBox>

        <p>
          Ces délais organisent le travail ; ils ne prédisent pas quand Google
          réexplorera une page ni quand une courbe changera. Pour savoir ce que
          l’intervenant doit expliquer et remettre, consultez le guide sur le
          contenu d’un{" "}
          <Link href="/guides/audit-seo-que-contient-il">audit SEO utile</Link>.
        </p>

        <GuideInlineCTA
          title="Faire vérifier la baisse avant de toucher au site"
          description="Envoyez les deux périodes, les filtres, les pages les plus touchées et les changements connus. Nous vous aidons à séparer ce qui est mesuré de ce qui reste à vérifier, puis à borner la première action. Cette lecture peut aussi conclure qu’il faut observer ou corriger un point limité, sans promettre le retour d’une position. Ne transmettez ni mot de passe ni données personnelles inutiles."
          tags={[
            "Pages touchées identifiées",
            "Action limitée et contrôlable",
            "Aucune position garantie",
          ]}
          ctaLabel="Faire vérifier la baisse avant de toucher au site"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Les sources ont été consultées le 22 juillet 2026. Elles expliquent
          les rapports et recommandations de Google ; elles ne diagnostiquent
          pas votre site et ne garantissent ni un délai, ni une position, ni un
          volume de clics. Les événements du tableau de bord et les anomalies
          doivent être revérifiés pour les dates réellement étudiées.
        </p>

        <ul>
          <li>
            <a
              href="https://support.google.com/webmasters/answer/7576553?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Console — Rapport Performances
            </a>
            , pour les quatre chiffres, les dimensions et les données récentes.
          </li>
          <li>
            <a
              href="https://support.google.com/webmasters/answer/17011165?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Console — Filtrer et comparer les données
            </a>
            , pour les périodes, groupes, filtres et limites des totaux.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Déboguer les baisses de trafic
            </a>
            , pour l’ordre des contrôles et la prudence face aux petites
            variations.
          </li>
          <li>
            <a
              href="https://support.google.com/webmasters/answer/7440203?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Console — Rapport d’indexation des pages
            </a>
            , pour lire les raisons d’exclusion et les cas de noindex.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/appearance/core-updates?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Mises à jour principales
            </a>
            , pour éviter les corrections précipitées et toute garantie d’effet.
          </li>
        </ul>

        <p>
          L’exemple numérique est entièrement fictif. La fiche et l’ordre 30
          minutes, 24 heures et 7 jours sont une méthode éditoriale Hagnéré Code
          : ils organisent la vérification, pas le retour des performances. Un
          audit externe devient pertinent lorsque plusieurs ensembles de pages
          ou plusieurs explications restent impossibles à séparer ; il ne donne
          pas le contrôle sur les décisions futures de Google.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
