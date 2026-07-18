import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("prix-referencement-naturel");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.cardTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  wordCount: 5600,
  isPartOf: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/guides`,
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: `${SITE_URL}/equipe`,
    knowsAbout: [
      "Référencement naturel",
      "SEO technique",
      "Budget SEO",
      "Google Ads",
      "Acquisition digitale",
      "Contrats de prestation web",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/logo-dark.png` },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "Prix du référencement naturel", item: guideUrl(guide) },
  ],
});

const faqItems = [
  {
    question: "Combien coûte le référencement naturel par mois ?",
    answer:
      "Les grilles publiques d'agences françaises relevées en juillet 2026 s'étalent d'environ 220 à 8 000 euros HT par mois. Mais cette fourchette ne vous apprend rien, parce qu'elle mélange des prestations sans commune mesure. La seule réponse utile passe par une division : un budget mensuel divisé par le prix d'une journée de consultant donne le temps de travail que vous achetez réellement. Sur la base d'un tarif journalier de 900 euros, 221 euros par mois achètent moins de deux heures, et 1 500 euros achètent moins de deux jours. C'est ce nombre-là qu'il faut regarder, pas le prix affiché.",
  },
  {
    question: "Quel budget SEO pour une PME ?",
    answer:
      "Pour une entreprise régionale avec un site de vingt à cent pages, les fourchettes convergent, toutes sources confondues, vers 800 à 1 500 euros HT par mois. En marché national concurrentiel, on passe à 2 500 à 5 000 euros. Attention : ces valeurs sont des observations de marché, pas des données. Il n'existe en France aucune statistique officielle du marché des prestations de référencement — ni l'INSEE ni aucun syndicat professionnel ne le mesure. Tous les chiffres qui circulent, y compris les nôtres, sont publiés par des gens qui vendent la prestation. Le savoir change la façon de les lire.",
  },
  {
    question: "Combien coûte un audit SEO ?",
    answer:
      "Les grilles publiques donnent environ 300 à 800 euros pour un audit express sur un petit site, 800 à 3 000 euros pour un audit complet de PME, et 3 000 à 8 000 euros sur un e-commerce à gros catalogue. Ce qui distingue un audit à 500 euros d'un audit à 3 000 euros n'est pas le nombre de pages du rapport : c'est la présence des quatre volets — technique, sémantique, popularité, et surtout un plan d'action priorisé avec une estimation de charge pour chaque item. Un audit qui liste des problèmes sans les classer par gain sur effort vous laisse exactement là où vous étiez.",
  },
  {
    question: "Le SEO pas cher, ça existe ?",
    answer:
      "Oui, et c'est précisément le problème. Faites la division vous-même : un forfait à 221 euros par mois, divisé par un tarif journalier d'agence de 900 euros et rapporté à une journée de huit heures, représente moins de deux heures de travail mensuel. Or les offres à ce prix annoncent un audit complet, des corrections techniques, deux articles rédigés, du netlinking et un interlocuteur dédié. Ces deux choses ne peuvent pas être vraies en même temps. Ce n'est pas une question de bonne ou mauvaise agence, c'est une question d'arithmétique.",
  },
  {
    question: "Combien de temps avant d'avoir des résultats en SEO ?",
    answer:
      "Le « 3 à 6 mois » que tout le monde répète n'a aucune source. En remontant aux données, on trouve autre chose. Ahrefs, sur un échantillon de plus d'un million d'URL et publié en mai 2025, mesure que 1,74 % seulement des nouvelles pages atteignent le top 10 en un an, que 72,9 % des pages présentes dans le top 10 ont plus de trois ans, et que la page classée première a en moyenne cinq ans. Google, de son côté, écrit dans sa documentation que certaines modifications produisent un effet en quelques heures et d'autres en plusieurs mois. La bonne fourchette de travail est donc 6 à 18 mois selon la concurrence — pas 3 à 6.",
  },
  {
    question: "Une agence peut-elle garantir la première place sur Google ?",
    answer:
      "Non, et Google l'écrit noir sur blanc dans sa documentation destinée aux entreprises : personne ne peut garantir la première position dans les résultats de recherche. Google va plus loin en listant les signaux d'alerte, dont un très concret : se méfier des prestataires qui vous démarchent par e-mail sans que vous les ayez sollicités. Il faut aussi savoir qu'une garantie de position tenue porte presque toujours sur des mots-clés sans concurrence ni valeur commerciale — techniquement honorée, commercialement vide. Et en droit français, cette promesse se retourne contre l'agence : voyez la question suivante.",
  },
  {
    question: "Une promesse de position engage-t-elle juridiquement l'agence ?",
    answer:
      "Oui, et c'est le point que personne n'explique. Par défaut, un contrat de référencement fait peser sur le prestataire une obligation dite « de moyens » : il doit travailler sérieusement, pas obtenir un rang — c'est ce qu'a jugé la cour d'appel de Lyon le 29 juin 2006. Mais dès que le contrat fixe un positionnement précis et objectivement vérifiable, l'obligation devient une obligation de résultat : la cour d'appel de Montpellier l'a jugé le 1er juillet 2008, et le tribunal de commerce de Paris a condamné un prestataire sur ce fondement le 28 octobre 2014. Autrement dit, une agence qui garantit une position par écrit peut être condamnée sur simple constat de non-atteinte, même si l'échec vient d'une mise à jour d'algorithme.",
  },
  {
    question: "Acheter des backlinks est-il risqué ?",
    answer:
      "Il y a un paradoxe que le marché préfère taire. Les règles anti-spam de Google classent explicitement l'échange d'argent contre des liens dans le « link spam ». Google prévoit toutefois une exception : ce n'est pas une infraction si le lien porte l'étiquette technique rel=\"nofollow\" ou rel=\"sponsored\", et Google précise même que l'achat de liens à des fins publicitaires est une pratique commerciale normale quand elle est déclarée. Sauf qu'un lien ainsi étiqueté ne transmet aucune autorité — donc ne produit aucun des effets vendus. La conséquence est logique et rarement énoncée : un netlinking payant conforme aux règles de Google est, par construction, un netlinking sans effet de classement.",
  },
  {
    question: "Combien coûte un backlink en 2026 ?",
    answer:
      "Les grilles publiées vont d'environ 30 à 120 euros pour un petit blog thématique jusqu'à 600 à 2 500 euros pour un média d'autorité, et plusieurs milliers pour la presse nationale. Prenez ces chiffres avec des pincettes : aucune des sources qui les publient ne fournit d'échantillon, de méthodologie ni de date de relevé, et ce sont toutes des entreprises qui vendent des liens. Deux sources donnent d'ailleurs des bornes différentes pour la même tranche. Quant aux classements « meilleures plateformes de netlinking », la quasi-totalité sont des pages d'affiliation : le classement suit les commissions, pas la qualité.",
  },
  {
    question: "Ce que les AI Overviews changent-ils au calcul ?",
    answer:
      "Beaucoup, et c'est le trou noir de tous les comparatifs de prix. Le Pew Research Center, institut sans intérêt commercial dans le sujet, a suivi 900 adultes américains et près de 69 000 recherches en mars 2025 : quand un résumé rédigé par l'IA apparaît, 8 % des visites donnent lieu à un clic sur un résultat classique, contre 15 % sans résumé — près de deux fois moins. Google a publiquement contesté cette étude, ce qu'il faut mentionner. Conséquence budgétaire directe : gagner des positions ne garantit plus de gagner des clics, donc toute projection de rentabilité bâtie sur des taux de clic d'avant 2024 est fausse.",
  },
  {
    question: "SEO ou Google Ads : par quoi commencer ?",
    answer:
      "Le critère n'est pas le coût du clic, c'est votre horizon de trésorerie. Google Ads achète un clic immédiat au prix du marché et s'arrête le jour où vous coupez le budget. Le référencement naturel construit un actif qui met plusieurs mois à produire et continue ensuite. Si vous avez besoin de demandes entrantes sous quatre-vingt-dix jours, ou si vous ne pouvez pas engager douze mois de budget, commencez par Ads — c'est la réponse honnête même quand elle nous fait perdre une mission. Si votre horizon est de douze mois et plus, le référencement devient l'investissement le plus rentable des deux. Le plus souvent, la bonne réponse est les deux, dans cet ordre.",
  },
  {
    question: "Freelance ou agence : quelle différence de prix ?",
    answer:
      "Sur les tarifs journaliers publiés par les prestataires eux-mêmes, un freelance se situe autour de 250 à 800 euros selon son niveau, une agence à partir de 1 000 euros et jusqu'à 1 500 euros. Ce que la différence achète : la continuité en cas d'absence, la pluridisciplinarité — un développeur, un rédacteur et un stratège plutôt qu'une seule personne — et une capacité de production supérieure. Ce qu'elle n'achète pas : une meilleure compréhension de votre marché. Sur un projet local simple, un bon freelance fait aussi bien pour moitié prix. Sur un e-commerce à catalogue ou un site multilingue, l'écart se justifie.",
  },
  {
    question: "Si je change d'agence, est-ce que je garde mes articles ?",
    answer:
      "Pas automatiquement, et c'est une mauvaise surprise fréquente. L'article L131-3 du code de la propriété intellectuelle exige que chaque droit cédé fasse l'objet d'une mention distincte dans l'acte, avec l'étendue, la destination, le lieu et la durée de la cession. Sans clause de cession conforme, les textes rédigés par votre agence restent la propriété de leur auteur. Exigez donc trois choses par écrit avant de signer : la cession des droits sur les contenus produits, la propriété du nom de domaine à votre nom, et la restitution des accès à la Search Console, à l'outil de mesure d'audience et au site lui-même en fin de contrat.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json">{articleJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Prix du référencement naturel" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les fourchettes réelles relevées sur les grilles publiques, la conversion de chaque forfait en heures de consultant que personne ne fait, huit statistiques recopiées partout et démontées à la source, la jurisprudence française sur les promesses de position — et les huit situations où nous refusons la mission."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "221 €/mois = moins de 2 h de travail", description: "", color: "violet" },
          { number: "02", title: "Le « 3 à 6 mois » n'a aucune source", description: "", color: "blue" },
          { number: "03", title: "8 statistiques démontées à la source", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/services/referencement-google", label: "Notre offre SEO" },
          { href: "/guides/refonte-sans-perdre-son-seo", label: "Refonte sans perdre son SEO" },
          { href: "/guides/combien-coute-un-site-internet", label: "Prix d'un site internet" },
          { href: "/guides/choisir-son-agence-web", label: "Choisir son agence web" },
          { href: "/guides/pourquoi-mon-site-est-lent", label: "Pourquoi mon site est lent" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Prix du SEO : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Un budget de référencement n&apos;est pas un prix,{" "}
          <strong>c&apos;est un nombre d&apos;heures de consultant</strong>.
          Tant qu&apos;on raisonne en euros par mois, on compare des choses
          incomparables. Divisez ce montant par le prix d&apos;une journée
          de travail et tout devient lisible en trente secondes — y compris
          les offres qui ne peuvent pas tenir leurs promesses.
        </p>

        <GuideTable
          headers={["Prestation", "Fourchette observée (HT)", "Fiabilité du chiffre"]}
          rows={[
            ["Audit express (site < 50 pages)", "300 – 800 €", "Grilles publiques d'agences"],
            ["Audit complet PME", "800 – 3 000 €", "Grilles publiques, convergentes"],
            ["Audit e-commerce approfondi", "3 000 – 8 000 €", "Grilles publiques"],
            ["Accompagnement mensuel, ambition locale", "800 – 1 500 €/mois", "Convergence multi-sources"],
            ["Accompagnement mensuel, national concurrentiel", "2 500 – 5 000 €/mois", "Convergence multi-sources"],
            ["Rédaction d'un article optimisé", "80 – 800 €", "Grilles publiques, forte dispersion"],
            ["Un lien entrant (netlinking)", "30 € – plusieurs milliers", "Aucune source ne publie sa méthode"],
            ["Tarif journalier freelance", "250 – 800 €/jour", "Tarifs déclarés par les prestataires"],
            ["Tarif journalier agence", "1 000 – 1 500 €/jour", "Tarifs déclarés par les prestataires"],
          ]}
        />

        <InfoBox variant="amber" title="Les 12 mots de ce guide, traduits en français courant">
          <strong>TJM</strong> : le prix d&apos;une journée de travail du
          consultant. <strong>Forfait mensuel</strong> : un abonnement, une
          somme fixe chaque mois contre un volume de travail défini.{" "}
          <strong>Régie</strong> : on achète des jours de consultant, pas un
          résultat. <strong>Netlinking</strong> : obtenir des liens depuis
          d&apos;autres sites vers le vôtre.{" "}
          <strong>Backlink</strong> : un de ces liens entrants.{" "}
          <strong>DR</strong> : une note d&apos;autorité de site donnée par un
          outil du marché, qui sert de grille de prix aux vendeurs de liens.{" "}
          <strong>rel=&quot;sponsored&quot;</strong> : une étiquette dans le
          code qui déclare à Google qu&apos;un lien est payé.{" "}
          <strong>PBN</strong> : un réseau de sites créés uniquement pour se
          faire des liens entre eux.{" "}
          <strong>AI Overview</strong> : le résumé rédigé par l&apos;IA en
          haut des résultats Google.{" "}
          <strong>Zero-click</strong> : une recherche qui se termine sans
          aucun clic. <strong>CTR</strong> : la part des gens qui cliquent
          sur votre lien parmi ceux qui le voient.{" "}
          <strong>Obligation de moyens</strong> : le prestataire s&apos;engage
          à travailler sérieusement, pas à obtenir un rang.
        </InfoBox>

        <GuideToc
          items={[
            { id: "prix-reels", label: "1. Ce que coûte vraiment le SEO en France en 2026" },
            { id: "prix-peu-fiables", label: "2. Pourquoi les prix affichés sur le web sont peu fiables" },
            { id: "modeles", label: "3. Les quatre modèles de facturation et ce qu'ils révèlent" },
            { id: "tjm", label: "4. Le TJM, seule unité de compte qui ne ment pas" },
            { id: "contenu-prestation", label: "5. Ce que contient réellement une prestation sérieuse" },
            { id: "outils", label: "6. Le coût des outils, et ce que vous pouvez payer vous-même" },
            { id: "liens", label: "7. Combien coûte un lien — et pourquoi la question est piégée" },
            { id: "delais", label: "8. Combien de temps avant des résultats : les données" },
            { id: "ai-overviews", label: "9. Ce que les AI Overviews changent au calcul" },
            { id: "statistiques", label: "10. Huit statistiques que personne ne vérifie" },
            { id: "arnaques", label: "11. Les arnaques documentées du référencement" },
            { id: "droit", label: "12. Ce que dit le droit français" },
            { id: "proprietes", label: "13. Propriété, réversibilité, accès : les clauses à exiger" },
            { id: "gratuit", label: "14. Ce que vous pouvez faire vous-même, gratuitement" },
            { id: "roi", label: "15. Calculer le retour sur investissement" },
            { id: "pas-le-bon-investissement", label: "16. Quand le SEO n'est PAS le bon investissement" },
          ]}
        />

        <InfoBox variant="blue" title="Le fil rouge : Nathalie, cabinet de conseil RH à Annecy">
          Neuf salariés, une activité régionale, un site vitrine de
          trente-quatre pages. Nathalie a reçu trois propositions de
          référencement en trois semaines :{" "}
          <strong>290 € par mois</strong> (démarchage téléphonique),{" "}
          <strong>1 400 € par mois</strong> (agence lyonnaise) et{" "}
          <strong>3 200 € par mois</strong> (agence parisienne). Les trois
          promettent « la première page de Google ». Nous suivrons son
          arbitrage section par section — et la seule division qui lui a
          permis de trancher.
        </InfoBox>

        <h2 id="prix-reels">1. Ce que coûte vraiment le SEO en France en 2026</h2>
        <p>
          Le tableau d&apos;ouverture donne les fourchettes. Avant de les
          utiliser, une précision d&apos;honnêteté que vous ne trouverez sur
          aucune autre page :{" "}
          <strong>il n&apos;existe en France aucune statistique officielle du
          marché des prestations de référencement naturel</strong>. Ni
          l&apos;INSEE, ni aucun syndicat professionnel ne le mesure. Tous
          les chiffres qui circulent — y compris ceux de ce guide — sont des
          observations de marché publiées par des gens qui vendent la
          prestation.
        </p>
        <p>
          Ce qui existe, en revanche, ce sont des <strong>grilles
          publiques</strong> : des agences qui affichent leurs prix sur leur
          site. Ce sont les seuls chiffres « durs », parce que le vendeur
          s&apos;y engage publiquement. Relevés le 18 juillet 2026, ils
          donnent par exemple un pack local à 221 € HT par mois, un pack
          régional à 321 €, un pack national à 580 € chez un acteur de bas
          de marché ; et chez un autre, une visio d&apos;une heure à 190 €,
          une stratégie clé en main à 3 900 €, un audit technique à partir
          de 500 € et un article rédigé entre 300 et 500 €.
        </p>
        <InfoBox variant="emerald" title="Le seul repère institutionnel français disponible">
          Le 36ᵉ Observatoire de l&apos;e-pub, publié le 9 juillet 2026 par
          le SRI, l&apos;UDECAM et Oliver Wyman, mesure un marché
          publicitaire digital français de <strong>6,689 milliards
          d&apos;euros au premier semestre 2026</strong>, en hausse de 12 %.
          Le segment recherche y pèse 2,74 milliards, retail media inclus.
          <br />
          <br />
          Deux précautions que la plupart des articles ne prennent pas.
          D&apos;abord, hors retail media, la recherche pèse{" "}
          <strong>2,14 milliards</strong> et se fait dépasser pour la
          première fois par les réseaux sociaux (2,22 milliards) — ne pas
          confondre les deux chiffres. Ensuite et surtout :{" "}
          <strong>ces montants mesurent l&apos;achat de publicité, pas le
          marché des prestations de référencement naturel</strong>. Ils
          donnent le contexte, pas votre budget.
        </InfoBox>

        <h2 id="prix-peu-fiables">2. Pourquoi les prix affichés sur le web sont peu fiables</h2>
        <p>
          Nous avons remonté la source des chiffres les plus cités sur les
          pages qui se classent aujourd&apos;hui sur cette question. Voici ce
          qu&apos;on trouve.
        </p>
        <GuideTable
          headers={["Le chiffre affiché", "Ce qu'il y a derrière"]}
          rows={[
            ["« Budget mensuel médian : 980 € HT »", "12 mandats d'une seule agence. Douze observations ne produisent pas une médiane de marché"],
            ["« Prix médian d'un projet SEO : 5 000 € »", "Des budgets déclarés par les agences inscrites à un annuaire commercial, rémunéré à l'apport d'affaires. Ce sont des demandes de devis, pas des contrats signés"],
            ["« Dès 221 €/mois »", "Le prix catalogue d'un seul prestataire, repris comme s'il s'agissait d'un plancher sectoriel observé"],
            ["« +40 % de trafic après 6 mois »", "Aucun client nommé, aucune période, aucun modèle d'attribution"],
            ["« Premium Île-de-France : +15 à +25 % »", "Donnée intéressante, mais invérifiable : aucune base publiée"],
          ]}
        />
        <p>
          Le point le plus structurant est ailleurs :{" "}
          <strong>la totalité des pages qui se classent sur « prix du
          référencement naturel » sont éditées par des agences ou des
          freelances qui vendent du référencement</strong>. Aucun média,
          aucun organisme neutre, aucune étude sectorielle indépendante
          n&apos;est positionné. Nous sommes dans le même cas, et le dire est
          la moindre des choses.
        </p>
        <InfoBox variant="amber" title="Un test de fraîcheur en dix secondes">
          Environ neuf articles français sur dix publiés en 2026 citent
          encore les plans <strong>« Pro, Guru et Business »</strong> d&apos;un
          outil SEO majeur. Ces offres <strong>n&apos;existent plus</strong> :
          la page tarifaire officielle affiche aujourd&apos;hui d&apos;autres
          formules. C&apos;est un marqueur imparable : si un article donne ces
          noms, il n&apos;a pas été revérifié. Appliquez le test à
          n&apos;importe quel document qu&apos;on vous remet.
        </InfoBox>

        <h2 id="modeles">3. Les quatre modèles de facturation et ce qu&apos;ils révèlent</h2>
        <GuideTable
          headers={["Modèle", "Comment ça marche", "Ce que ça incite à produire"]}
          rows={[
            ["Forfait mensuel", "Une somme fixe contre un volume de travail défini", "De la régularité — mais aussi, si le contrat est flou, le minimum syndical"],
            ["Audit ponctuel", "Un livrable unique, payé une fois", "Un diagnostic. Rien ne garantit l'exécution derrière"],
            ["Forfait projet", "Un périmètre fermé (migration, cocon sémantique)", "Le respect du périmètre, pas la performance"],
            ["Régie / TJM", "Vous achetez des jours de consultant", "De la transparence : c'est le seul modèle où vous savez ce que vous payez"],
          ]}
        />
        <p>
          Deux modèles supplémentaires méritent une alerte. La{" "}
          <strong>facturation au mot</strong> pousse mécaniquement à produire
          du volume, pas de la pertinence. La{" "}
          <strong>facturation à la position garantie</strong> pose un problème
          de fond, développé en section 12 : elle transforme le contrat en
          obligation de résultat et se retourne juridiquement contre celui
          qui la propose.
        </p>

        <h2 id="tjm">4. Le TJM, seule unité de compte qui ne ment pas</h2>
        <p>
          Voici la section pour laquelle ce guide existe. Aucune page
          concurrente ne fait cette division, et elle règle la question en
          une ligne de calcul.
        </p>
        <FormulaBox>
          {`CONVERSION D'UN FORFAIT EN TEMPS DE TRAVAIL
Base : tarif journalier agence 900 € HT, journée de 8 heures.

  221 €/mois   →  0,25 jour  →  environ 2 heures par mois
  349 €/mois   →  0,39 jour  →  environ 3 heures par mois
  580 €/mois   →  0,64 jour  →  environ 5 heures par mois
  900 €/mois   →  1,0  jour  →  1 journée par mois
1 500 €/mois   →  1,7  jour  →  moins de 2 journées par mois
2 500 €/mois   →  2,8  jours →  environ 3 journées par mois
5 000 €/mois   →  5,6  jours →  environ 1 semaine par mois

Refaites le calcul avec le TJM de VOTRE prestataire :
  temps acheté (jours) = budget mensuel ÷ TJM`}
        </FormulaBox>
        <p>
          Maintenant relisez ce que promet une offre à 221 € par mois :
          audit complet, optimisation de la vitesse, correction des balises,
          stratégie de mots-clés, <strong>deux articles rédigés par
          mois</strong>, netlinking, communiqués de presse et un
          interlocuteur dédié. Tout cela en deux heures.{" "}
          <strong>Ces deux affirmations ne peuvent pas être vraies en même
          temps.</strong> Ce n&apos;est pas un jugement sur l&apos;agence,
          c&apos;est une division.
        </p>
        <InfoBox variant="blue" title="Nathalie fait la division">
          Devis à 290 € par mois : environ deux heures et demie de travail
          mensuel, pour un audit, du contenu et du suivi. Devis à 1 400 € :
          environ une journée et demie. Devis à 3 200 € : environ trois
          journées et demie.
          <br />
          <br />
          En trente secondes, elle ne compare plus trois prix mais{" "}
          <strong>trois volumes de travail</strong>. Et la question devient
          la bonne : de combien de journées son cabinet a-t-il besoin ?
        </InfoBox>
        <p>
          Un mot sur les tarifs journaliers eux-mêmes. Ceux que nous citons
          sont <strong>déclarés publiquement par les prestataires</strong> :
          250 à 300 € pour un freelance débutant, environ 500 € pour un
          profil standard, 700 à 800 € pour un expert, et à partir de 1 000
          à 1 200 € — jusqu&apos;à 1 500 € — pour une agence. Méfiez-vous des
          tarifs journaliers présentés comme des « baromètres » sans
          échantillon publié : plusieurs se contentent de reprendre une
          moyenne de plateforme en y appliquant un coefficient jamais
          justifié.
        </p>

        <GuideInlineCTA
          title="Vous avez trois devis SEO et vous ne savez pas les comparer ?"
          description="Envoyez-nous votre situation en 3 minutes. Réponse personnelle sous 24 h ouvrées, gratuite — y compris quand la réponse est « aucun des trois, commencez par Google Ads »."
        />

        <h2 id="contenu-prestation">5. Ce que contient réellement une prestation sérieuse</h2>
        <p>
          Quatre volets. Un devis qui n&apos;en détaille aucun ne vous permet
          pas de savoir ce que vous achetez.
        </p>
        <ul>
          <li>
            <strong>Le technique</strong> : vitesse, structure des adresses,
            indexation, données structurées, correction des erreurs
            d&apos;exploration. C&apos;est le socle : sans lui, le reste
            n&apos;est pas lu correctement. Notre guide{" "}
            <Link href="/guides/pourquoi-mon-site-est-lent">pourquoi mon
            site est lent</Link> couvre la partie performance.
          </li>
          <li>
            <strong>Le contenu</strong> : recherche des requêtes, rédaction,
            mise à jour des pages existantes. C&apos;est le poste le plus
            lourd en temps, et de loin.
          </li>
          <li>
            <strong>La popularité</strong> : les liens entrants — voir la
            section 7, où le sujet est plus retors qu&apos;il n&apos;y paraît.
          </li>
          <li>
            <strong>Le pilotage</strong> : mesure, reporting mensuel,
            arbitrages. Sans lui, vous payez sans savoir ce qui produit
            l&apos;effet.
          </li>
        </ul>
        <InfoBox variant="amber" title="La répartition qu'on vous donnera, et ce qu'elle vaut">
          Un ordre de grandeur souvent avancé : environ 20 % de technique,
          50 % de contenu, 20 % de liens, 10 % de pilotage. Nous le donnons
          parce qu&apos;il aide à lire un devis — mais{" "}
          <strong>aucune source primaire n&apos;existe pour cette
          répartition</strong>. C&apos;est une convention de métier, pas une
          statistique. Utilisez-la pour poser des questions, pas pour
          arbitrer.
        </InfoBox>

        <h2 id="outils">6. Le coût des outils, et ce que vous pouvez payer vous-même</h2>
        <GuideTable
          headers={["Outil", "Prix relevé le 18/07/2026", "Faut-il le payer vous-même ?"]}
          rows={[
            ["Google Search Console", "Gratuit", "Oui — indispensable, et c'est votre propriété"],
            ["Fiche Google Business Profile", "Gratuit", "Oui — décisif en référencement local"],
            ["PageSpeed Insights", "Gratuit", "Oui — pour vérifier les promesses de performance"],
            ["Google Keyword Planner", "Gratuit", "Oui — la seule source primaire sur vos volumes de recherche"],
            ["Screaming Frog (exploration de site)", "245 €/an ; gratuit jusqu'à 500 URL", "Version gratuite suffisante sous 500 pages"],
            ["Suite SEO complète (type Semrush)", "139 à 549 $/mois selon la formule", "Non — c'est l'outil de travail du prestataire"],
          ]}
        />
        <p>
          Deux remarques utiles. D&apos;abord, la page tarifaire officielle
          de la principale suite du marché{" "}
          <strong>n&apos;affiche aucun prix en euros</strong> : les montants
          sont en dollars, ce qui ajoute le change et parfois la TVA à votre
          facture réelle. Ensuite, si votre prestataire vous refacture ses
          outils en ligne séparée, demandez-lui simplement si ces outils
          servent aussi à ses autres clients. La réponse est généralement
          oui.
        </p>

        <h2 id="liens">7. Combien coûte un lien — et pourquoi la question est piégée</h2>
        <GuideTable
          headers={["Type de site qui publie le lien", "Prix couramment affiché"]}
          rows={[
            ["Petit blog thématique", "30 – 120 €"],
            ["Site éditorial intermédiaire", "150 – 450 €"],
            ["Média d'autorité", "600 – 2 500 €"],
            ["Presse nationale, secteurs finance / santé", "1 500 – 5 000 €"],
          ]}
        />
        <p>
          Prenez ce tableau avec précaution.{" "}
          <strong>Aucune des sources qui publient ces grilles ne fournit
          d&apos;échantillon, de méthodologie ni de date de relevé</strong>, et
          toutes vendent des liens. Deux d&apos;entre elles donnent
          d&apos;ailleurs des bornes incompatibles pour la même tranche.
          Quant aux classements « meilleures plateformes de netlinking », la
          quasi-totalité sont des pages d&apos;affiliation : le classement
          suit les commissions.
        </p>
        <InfoBox variant="blue" title="Le paradoxe que le marché ne veut pas énoncer">
          Les règles anti-spam de Google classent explicitement{" "}
          <strong>l&apos;échange d&apos;argent contre des liens</strong> dans
          le « link spam ». Google prévoit une exception nette : ce
          n&apos;est pas une infraction si le lien porte l&apos;étiquette{" "}
          <strong>rel=&quot;nofollow&quot;</strong> ou{" "}
          <strong>rel=&quot;sponsored&quot;</strong>, et Google précise même
          que l&apos;achat de liens à des fins publicitaires est une pratique
          commerciale normale quand elle est déclarée.
          <br />
          <br />
          Sauf qu&apos;un lien ainsi étiqueté{" "}
          <strong>ne transmet aucune autorité</strong>. Il ne produit donc
          aucun des effets de classement qui justifient son prix. La
          conclusion s&apos;impose d&apos;elle-même :{" "}
          <strong>un netlinking payant conforme aux règles de Google est,
          par construction, un netlinking sans effet sur votre
          classement</strong>. Le marché du lien payant repose donc
          massivement sur des liens non déclarés — c&apos;est-à-dire non
          conformes.
        </InfoBox>
        <p>
          Deux pièges tarifaires concrets, faciles à vérifier. Premièrement,
          certaines offres <strong>incluent la rédaction de
          l&apos;article</strong> qui portera le lien, d&apos;autres la
          facturent à part : deux offres au même prix facial peuvent coûter
          du simple au double. Deuxièmement, les intermédiaires
          s&apos;empilent — le même lien sur le même site peut être acheté en
          direct sur une plateforme, ou revendu deux à trois fois plus cher
          après être passé par deux courtiers. Demandez toujours le nom du
          site qui publiera.
        </p>
        <p>
          Enfin, si un prestataire vous propose des liens venant de
          « réseaux privés » ou de « réseaux de sites partenaires »,
          sachez que Google classe explicitement cette pratique en link
          spam. Certaines agences l&apos;écrivent noir sur blanc dans leur
          argumentaire commercial, ce qui est au moins franc.
        </p>

        <h2 id="delais">8. Combien de temps avant des résultats : les données</h2>
        <p>
          Tout le monde répète « 3 à 6 mois ». En remontant, on ne trouve{" "}
          <strong>aucune source</strong> à ce chiffre — aucune des pages qui
          se classent sur cette question ne le sourcent. Voici, à la place,
          ce que mesurent les données publiées.
        </p>
        <GuideTable
          headers={["Ce qui est mesuré", "Le résultat", "Source"]}
          rows={[
            ["Nouvelles pages atteignant le top 10 en un an", "1,74 %", "Ahrefs, 15/05/2025, ~1 M d'URL"],
            ["Même mesure, échantillon alternatif", "6,11 %", "Ahrefs, 15/05/2025, 2 M d'URL créées"],
            ["Pages du top 10 ayant plus de 3 ans", "72,9 %", "Ahrefs, 15/05/2025, 1,3 M de mots-clés"],
            ["Pages du top 10 ayant moins d'un an", "13,7 %", "Ahrefs, 15/05/2025"],
            ["Âge moyen de la page classée n°1", "5 ans", "Ahrefs, 15/05/2025"],
            ["Mots-clés à 10 000+ recherches/mois : entrées au top 10 en un an", "0,3 %", "Ahrefs, 15/05/2025"],
            ["Pages de l'index Ahrefs sans aucun trafic organique", "96,55 %", "Ahrefs, décembre 2023, ~14 Md de pages"],
          ]}
        />
        <InfoBox variant="amber" title="Trois précautions sur ces chiffres">
          Ce sont des <strong>données américaines</strong>, produites par un
          éditeur d&apos;outils SEO avec une méthodologie propriétaire.
          Ahrefs reconnaît lui-même que son index est biaisé vers la
          « qualité » du web. Nous les citons parce que ce sont les seules
          du secteur à publier échantillon et calcul — pas parce
          qu&apos;elles seraient parole d&apos;évangile.
          <br />
          <br />
          Ce que Google écrit, en revanche, est incontestable :{" "}
          <em>« toutes les modifications que vous apportez à votre site
          n&apos;auront pas forcément d&apos;impact notable sur les résultats
          de recherche »</em>, et certaines produisent un effet en quelques
          heures quand d&apos;autres prennent plusieurs mois. Le « 4 à 12
          mois » souvent attribué à Google vient d&apos;une vidéo aujourd&apos;hui
          archivée, pas de la documentation en vigueur — la nuance mérite
          d&apos;être faite.
        </InfoBox>
        <p>
          La fourchette de travail honnête est donc{" "}
          <strong>6 à 18 mois selon la concurrence</strong>. Nuance utile :
          parmi les pages qui finissent par atteindre le top 10, environ 40 %
          y parviennent dès le premier mois. Autrement dit, une page qui
          n&apos;a rien produit au bout de six mois a statistiquement peu de
          chances de décoller sans être retravaillée.
        </p>

        <h2 id="ai-overviews">9. Ce que les AI Overviews changent au calcul</h2>
        <p>
          C&apos;est l&apos;angle mort de tous les comparatifs de prix, et il
          change la rentabilité de votre investissement.
        </p>
        <GuideTable
          headers={["Mesure", "Résultat", "Source et méthode"]}
          rows={[
            ["Clic sur un résultat classique, avec résumé IA", "8 % des visites", "Pew Research Center, 22/07/2025 — 900 adultes, 68 879 recherches"],
            ["Clic sur un résultat classique, sans résumé IA", "15 % des visites", "Pew Research Center, 22/07/2025"],
            ["Clic sur un lien à l'intérieur du résumé IA", "1 % des visites", "Pew Research Center, 22/07/2025"],
            ["Fin de session après la page de résultats", "26 % avec résumé IA contre 16 % sans", "Pew Research Center, 22/07/2025"],
            ["Baisse du taux de clic en position 1 quand un résumé IA apparaît", "−34,5 % (mars 2024 vs mars 2025)", "Ahrefs, avril 2025 — calcul publié"],
            ["Part des requêtes déclenchant un résumé IA qui sont informationnelles", "99,2 %", "Ahrefs, avril 2025"],
          ]}
        />
        <p>
          Deux honnêtetés à poser.{" "}
          <strong>Google a publiquement contesté l&apos;étude Pew</strong> —
          il faut le dire. Et ces données sont américaines. Cela dit, le Pew
          Research Center est <strong>la seule source de tout ce dossier qui
          n&apos;a aucun intérêt financier dans sa conclusion</strong> : ce
          n&apos;est ni une agence SEO, ni un éditeur d&apos;outils, ni un
          vendeur de liens. Sa méthodologie est publiée intégralement.
        </p>
        <InfoBox variant="emerald" title="La conséquence budgétaire, en une phrase">
          <strong>Gagner des positions ne garantit plus de gagner des
          clics.</strong> Toute projection de rentabilité bâtie sur des taux
          de clic d&apos;avant 2024 — y compris celles des simulateurs de
          « ROI SEO » en ligne — est donc fausse par construction.
          <br />
          <br />
          Bonne nouvelle en revanche, et c&apos;est le chiffre le plus utile
          de la section : <strong>99,2 % des requêtes qui déclenchent un
          résumé IA sont informationnelles</strong>. Les requêtes
          transactionnelles — « devis », « prix », « près de chez moi », un
          nom de produit — sont bien moins touchées. Traduction pratique : le
          référencement de contenus explicatifs se déprécie, le référencement
          des pages qui vendent tient bon. Arbitrez votre budget en
          conséquence.
        </InfoBox>

        <h2 id="statistiques">10. Huit statistiques que personne ne vérifie</h2>
        <GuideTable
          headers={["La statistique", "Ce qu'on trouve en remontant à la source"]}
          rows={[
            ["« Le SEO représente 53 % du trafic des sites »", "Données de mai 2019, publiées par un éditeur de plateforme SEO, sur un échantillon constitué de ses propres clients — donc d'entreprises investissant déjà massivement en SEO. Sept ans avant les articles qui la citent, et avant les résumés IA"],
            ["« 75 % des gens ne dépassent pas la première page »", "Chiffre de 2010, popularisé par une présentation marketing. Le site source n'est plus consultable. Antérieur au mobile, aux extraits enrichis et au défilement continu"],
            ["« Le SEO génère 748 % de retour sur investissement »", "Données propriétaires d'une agence SEO, moyennées sur ses propres campagnes. Non auditables, non reproductibles, et sans les campagnes ratées"],
            ["« 22 € gagnés pour 1 € investi »", "Même famille : une agence SEO, aucune méthodologie publiée"],
            ["« Un SEO à 800–2 500 €/mois rapporte 5 fois plus que Google Ads »", "Aucune étude, aucun échantillon. Argument commercial présenté comme une statistique"],
            ["« 68 % des dirigeants de TPE-PME placent le SEO en premier canal »", "Aucune source primaire retrouvée, et absent du Baromètre France Num, seule enquête française de cette ampleur"],
            ["« Prix médian d'un projet SEO : 5 000 € »", "Budgets déclarés par les agences d'un annuaire commercial rémunéré à l'apport d'affaires. Écart d'un facteur cinq avec toutes les autres estimations"],
            ["« Résultats en 3 à 6 mois »", "Rien. Aucune source. Contredit par les données Ahrefs et par la documentation de Google"],
          ]}
        />
        <InfoBox variant="amber" title="Pourquoi un « ROI moyen du SEO » n'a aucun sens">
          Un retour sur investissement dépend entièrement de votre marge, de
          votre panier moyen et de votre taux de transformation. Un même
          gain de trafic peut rapporter 400 € à un artisan et 400 000 € à un
          éditeur de logiciel. <strong>Une moyenne calculée sur ces deux cas
          ne décrit ni l&apos;un ni l&apos;autre.</strong> C&apos;est
          pourquoi la section 15 vous donne la formule et non un chiffre.
        </InfoBox>

        <h2 id="arnaques">11. Les arnaques documentées du référencement</h2>
        <p>
          Google publie une page destinée aux entreprises qui cherchent un
          prestataire. Elle est courte, gratuite, et vaut mieux que la
          plupart des guides du secteur. Ses signaux d&apos;alerte, dans son
          propre vocabulaire :
        </p>
        <ul>
          <li>
            <em>« Personne ne peut garantir la première position dans les
            résultats de recherche Google. »</em> Google ajoute : se méfier
            des prestataires qui prétendent avoir une « relation
            spéciale » avec lui.
          </li>
          <li>
            <strong>Le démarchage à froid par e-mail</strong> est
            explicitement listé comme signal d&apos;alerte — Google le
            compare à une promesse de « perdre 20 kilos en 15 jours ».
          </li>
          <li>
            <strong>Le flou sur les prestations</strong> : se méfier
            d&apos;une entreprise secrète ou qui n&apos;explique pas
            clairement ce qu&apos;elle compte faire.
          </li>
          <li>
            <strong>Les promesses de soumission massive</strong> à des
            milliers de moteurs de recherche.
          </li>
        </ul>
        <p>
          Côté français, la DGCCRF documente une fraude massive de proximité :
          les faux sites d&apos;aide aux démarches administratives auraient
          abusé <strong>environ un million de personnes par an</strong> pour{" "}
          <strong>150 millions d&apos;euros facturés indûment</strong>,
          l&apos;un des ressorts identifiés étant précisément{" "}
          <strong>le référencement en tête des moteurs de recherche</strong>.
          Près de 80 réquisitions numériques ont été engagées depuis janvier
          2025, aboutissant au blocage de sites pour pratiques commerciales
          trompeuses.
        </p>
        <InfoBox variant="blue" title="La garantie de position qui est tenue… et qui ne sert à rien">
          Le point le plus fin relevé dans toute notre revue de la
          concurrence, et que personne ne développe : les offres à{" "}
          <strong>« première position garantie »</strong> portent en pratique
          sur des mots-clés <strong>sans concurrence et sans valeur
          commerciale</strong>. La garantie est techniquement honorée — vous
          êtes bien premier — sur une requête que personne ne tape.
          <br />
          <br />
          La parade tient en une question, à poser avant de signer :{" "}
          <em>« quel est le volume de recherche mensuel de chacun des
          mots-clés garantis ? »</em> Vous pouvez le vérifier vous-même,
          gratuitement, dans le Keyword Planner de Google.
        </InfoBox>

        <h2 id="droit">12. Ce que dit le droit français</h2>
        <p>
          Aucune page concurrente ne traite ce sujet. C&apos;est pourtant ce
          qui protège concrètement un dirigeant.
        </p>
        <GuideTable
          headers={["Décision ou texte", "Ce qu'il établit"]}
          rows={[
            ["CA Lyon, 29 juin 2006, n° 05/04499", "À défaut de stipulation contraire, le référenceur est tenu d'une obligation de moyens. Le client ne peut invoquer une faute au seul motif que le site n'apparaît pas en première page, et la charge de la preuve lui incombe"],
            ["CA Montpellier, 1er juillet 2008", "Dès que le prestataire s'engage sur un positionnement précis et objectivement déterminable, l'obligation devient une obligation de résultat"],
            ["T. com. Paris, 28 octobre 2014", "Prestataire condamné : engagement de positionner la moitié des mots-clés sur les deux premières pages, non atteint, sans alerte ni traitement des difficultés techniques connues"],
            ["Cass. com., 19 février 2013, n° 11-22827", "La connaissance des conditions générales ne se déduit pas d'une clause-type sur un bon de commande — directement applicable aux bons signés en démarchage"],
            ["Art. L121-2 du code de la consommation", "Définit la pratique commerciale trompeuse : allégations fausses ou de nature à induire en erreur sur les caractéristiques essentielles du service et son aptitude à l'usage"],
            ["Art. L121-5 du code de la consommation", "Étend expressément ce régime aux pratiques visant les professionnels. Une promesse de « 1ʳᵉ position garantie » faite à une entreprise entre donc dans le champ, même en B2B"],
          ]}
        />
        <InfoBox variant="emerald" title="Le retournement que peu d'agences ont compris">
          Une agence qui écrit « première page garantie » dans son contrat
          croit rassurer. En réalité, elle{" "}
          <strong>transforme son obligation de moyens en obligation de
          résultat</strong> et peut être condamnée sur simple constat de
          non-atteinte — <strong>même si l&apos;échec provient d&apos;une
          mise à jour d&apos;algorithme sur laquelle elle n&apos;a aucune
          prise</strong>.
          <br />
          <br />
          Une promesse de position est donc soit un mensonge commercial, soit
          une prise de risque juridique que son auteur n&apos;a pas mesurée.
          Dans les deux cas, ce n&apos;est pas le prestataire qu&apos;il vous
          faut. Précision d&apos;honnêteté : nous n&apos;avons trouvé aucune
          sanction administrative visant spécifiquement une agence SEO pour
          ce motif. Le risque documenté est civil, et il est réel.
        </InfoBox>

        <h2 id="proprietes">13. Propriété, réversibilité, accès : les clauses à exiger</h2>
        <p>
          Absente de toutes les pages concurrentes, c&apos;est la section qui
          vous coûtera le plus cher si vous l&apos;ignorez.
        </p>
        <p>
          L&apos;<strong>article L131-3 du code de la propriété
          intellectuelle</strong> exige que chacun des droits cédés fasse
          l&apos;objet d&apos;une mention distincte dans l&apos;acte de
          cession, et que le domaine d&apos;exploitation soit délimité quant
          à son étendue, sa destination, son lieu et sa durée. Conséquence
          directe : <strong>sans clause de cession conforme, les articles
          rédigés par votre agence restent la propriété de leur
          auteur</strong>. Vous les avez payés, ils ne sont pas à vous.
        </p>
        <p>Les cinq clauses à exiger par écrit, avant signature :</p>
        <ol>
          <li>
            <strong>Cession des droits</strong> sur tous les contenus
            produits, rédigée conformément à l&apos;article L131-3.
          </li>
          <li>
            <strong>Le nom de domaine à votre nom</strong>, jamais à celui de
            l&apos;agence.
          </li>
          <li>
            <strong>Restitution des accès</strong> en fin de contrat : Search
            Console, outil de mesure d&apos;audience, back-office du site,
            hébergement.
          </li>
          <li>
            <strong>Un préavis raisonnable</strong>, et lu attentivement :
            certaines offres « sans engagement » imposent deux mois de
            préavis.
          </li>
          <li>
            <strong>Le détail écrit des livrables mensuels</strong>, sans
            quoi le forfait n&apos;est opposable à rien.
          </li>
        </ol>
        <InfoBox variant="amber" title="Une règle spécifique à la publicité, à ne pas confondre">
          Si votre prestataire achète de la publicité pour votre compte
          (Google Ads, réseaux sociaux), la <strong>loi Sapin</strong> impose
          un <strong>contrat de mandat écrit</strong>, exige que les rabais
          obtenus figurent sur votre facture, et interdit à
          l&apos;intermédiaire de recevoir une rémunération du vendeur
          d&apos;espace.
          <br />
          <br />
          Attention : <strong>ce régime s&apos;applique à l&apos;achat
          d&apos;espace publicitaire, pas au référencement naturel</strong>.
          La distinction compte dès que votre prestataire fait les deux — ce
          qui est notre cas, et celui de la plupart des agences complètes.
        </InfoBox>

        <h2 id="gratuit">14. Ce que vous pouvez faire vous-même, gratuitement</h2>
        <p>
          Avant de payer qui que ce soit — nous compris — voici sept actions
          qui ne coûtent rien d&apos;autre que du temps. Comptez une
          quinzaine à une vingtaine d&apos;heures de mise en place.
        </p>
        <GuideTable
          headers={["Action", "Outil", "Temps"]}
          rows={[
            ["Créer et vérifier votre fiche Google Business Profile", "Gratuit", "2 h, puis 15 min/mois"],
            ["Connecter la Search Console et lire vos requêtes réelles", "Gratuit", "1 h de mise en place"],
            ["Mesurer la vitesse de votre site sur mobile", "PageSpeed Insights", "30 min"],
            ["Vérifier les volumes de recherche de vos mots-clés", "Keyword Planner", "2 à 3 h"],
            ["Réécrire les titres et descriptions de vos 10 pages principales", "Votre back-office", "3 à 4 h"],
            ["Explorer votre site pour trouver liens morts et pages orphelines", "Screaming Frog gratuit (500 URL)", "2 h"],
            ["Écrire une page par service et par ville où vous intervenez", "Votre back-office", "1 à 2 h par page"],
          ]}
        />
        <p>
          Le point de bascule vers un professionnel arrive quand ces actions
          sont faites et que vous butez sur l&apos;une de ces trois choses :
          un problème technique que votre outil ne sait pas corriger, une
          production éditoriale que vous ne tenez pas dans la durée, ou un
          marché où vos concurrents publient plus vite que vous.
        </p>

        <h2 id="roi">15. Calculer le retour sur investissement</h2>
        <FormulaBox>
          {`ÉTAPE 1 — le trafic espéré
  Visiteurs/mois = Volume mensuel de la requête
                 × CTR de la position visée
                 × (correction AI Overview si la requête en déclenche un)

ÉTAPE 2 — l'argent
  Clients/mois = Visiteurs × Taux de conversion du site
                          × Taux de transformation commercial
  Gain/mois    = Clients × Marge moyenne par client
  Résultat     = Gain/mois − Budget SEO mensuel

À VÉRIFIER AVANT DE CALCULER
  · Le volume vient du Keyword Planner, pas d'une estimation d'agence
  · Si la requête déclenche un résumé IA, le CTR doit être corrigé
  · Le résultat n'apparaît pas avant 6 à 18 mois : raisonnez sur 24 mois`}
        </FormulaBox>
        <p>
          Un exemple avec les chiffres de Nathalie. Sa requête principale
          fait environ 480 recherches par mois en France. En visant la
          troisième position, elle table sur un taux de clic prudent de 6 %,
          soit une trentaine de visiteurs mensuels. Son site transforme 2,5 %
          des visiteurs en demandes de contact, et elle signe un dossier sur
          trois : environ <strong>0,24 client par mois</strong>, soit à peu
          près trois par an. Sa marge par mission étant de 4 200 €, cela fait{" "}
          <strong>environ 12 100 € par an</strong> pour un budget de 1 400 €
          par mois, soit 16 800 € annuels.
        </p>
        <p>
          Sur douze mois, l&apos;opération est <strong>déficitaire</strong>.
          Elle ne devient intéressante qu&apos;à partir de la deuxième année,
          où le budget peut être réduit alors que les positions acquises
          continuent de produire. C&apos;est exactement le genre de calcul
          qu&apos;aucun devis ne présente — et c&apos;est pourtant le seul qui
          permette de décider.
        </p>

        <h2 id="pas-le-bon-investissement">16. Quand le SEO n&apos;est PAS le bon investissement</h2>
        <p>
          Voici la section qu&apos;aucun vendeur de référencement
          n&apos;écrit. Dans les huit situations suivantes, nous refusons la
          mission — et nous le disons avant le devis, pas après.
        </p>
        <GuideTable
          headers={["Situation", "Seuil", "Ce qu'il faut faire à la place"]}
          rows={[
            ["Volume de recherche insuffisant", "Moins de 300 recherches/mois cumulées en France", "Google Ads géolocalisé, prospection directe, place de marché sectorielle"],
            ["Besoin de résultat immédiat", "Horizon inférieur à 6 mois", "Google Ads : du trafic dès le lendemain"],
            ["Budget trop faible", "Moins de 500 €/mois HT", "Un audit unique, puis exécution en interne"],
            ["Trésorerie insuffisante", "Impossible d'engager 12 mois", "Ne pas démarrer. Un arrêt au 5ᵉ mois détruit l'investissement"],
            ["Requêtes majoritairement informationnelles", "Plus de 60 % du portefeuille", "Réorienter vers le transactionnel — 99,2 % des résumés IA visent l'informationnel"],
            ["Pas de site, ou site à refondre", "—", "La refonte d'abord : aucun référencement ne tient sur une base condamnée"],
            ["B2B ultra-niche à cycle long", "Moins de 50 comptes cibles identifiables", "Prospection directe, LinkedIn, salons"],
            ["Local à très faible concurrence", "Zone de moins de 20 000 habitants, moins de 5 concurrents référencés", "Une fiche Google Business Profile gratuite couvre l'essentiel"],
          ]}
        />
        <InfoBox variant="emerald" title="Ce que Nathalie a décidé">
          Volume suffisant, horizon compatible, trésorerie solide : trois
          feux verts. Requêtes majoritairement transactionnelles — « cabinet
          RH Annecy », « accompagnement recrutement Haute-Savoie » — donc
          peu exposées aux résumés IA. Elle a écarté le devis à 290 € par
          mois, non pas parce qu&apos;il était bon marché, mais parce
          qu&apos;il promettait dix fois ce que deux heures et demie
          permettent.
          <br />
          <br />
          Elle a retenu le devis à 1 400 €, en exigeant trois ajouts : le
          détail écrit des livrables mensuels, la cession des droits sur les
          articles, et la restitution des accès en fin de contrat. Les trois
          ont été acceptés. <strong>C&apos;est la négociation qui compte,
          pas le prix.</strong>
        </InfoBox>

        <p>
          Chez Hagnéré Code, nous faisons du référencement naturel au sein
          d&apos;une offre complète — sites, applications métier, campagnes
          Google Ads, acquisition. Nos{" "}
          <Link href="/tarifs">tarifs sont publics</Link>, nous ne garantissons
          aucune position, et nous vous dirons quand Ads est le meilleur
          investissement pour vous. Notre page{" "}
          <Link href="/services/referencement-google">référencement naturel</Link>{" "}
          décrit la méthode, et notre guide{" "}
          <Link href="/guides/choisir-son-agence-web">choisir son agence
          web</Link> donne la grille de lecture d&apos;un devis complet.
        </p>

        <GuideInlineCTA
          title="Faites relire vos devis SEO avant de signer"
          description="Décrivez votre situation en 3 minutes : réponse personnelle sous 24 h ouvrées, gratuite et sans engagement. Nous vous dirons franchement si le référencement est le bon investissement — ou pas."
        />

        <InfoBox variant="emerald" title="À retenir : les 7 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>221 € ÷ 900 €/jour</strong> : la division qui règle la question. Moins de deux heures de travail par mois.</li>
            <li><strong>800 à 1 500 €/mois HT</strong> : la convergence multi-sources pour une PME en ambition régionale.</li>
            <li><strong>1,74 %</strong> des nouvelles pages atteignent le top 10 en un an ; <strong>72,9 %</strong> du top 10 a plus de trois ans.</li>
            <li><strong>8 % contre 15 %</strong> : le taux de clic avec et sans résumé IA, mesuré par le Pew Research Center.</li>
            <li><strong>99,2 %</strong> des requêtes déclenchant un résumé IA sont informationnelles — le transactionnel tient bon.</li>
            <li><strong>Zéro</strong> : le nombre de statistiques officielles françaises sur le marché des prestations SEO.</li>
            <li><strong>8 situations</strong> où le référencement naturel n&apos;est pas le bon investissement.</li>
          </ul>
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Documentation officielle Google :{" "}
          <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr" target="_blank" rel="noopener noreferrer">« Ai-je besoin d&apos;un référenceur ? »</a> et{" "}
          <a href="https://developers.google.com/search/docs/essentials/spam-policies?hl=fr" target="_blank" rel="noopener noreferrer">Règles anti-spam de la recherche Google</a>.
          Données de classement :{" "}
          <a href="https://ahrefs.com/blog/how-long-does-it-take-to-rank/" target="_blank" rel="noopener noreferrer">Ahrefs, « How Long Does It Take to Rank in Google? », 15/05/2025</a> et{" "}
          <a href="https://ahrefs.com/blog/search-traffic-study/" target="_blank" rel="noopener noreferrer">Ahrefs, étude sur le trafic de recherche</a>.
          Résumés IA :{" "}
          <a href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/" target="_blank" rel="noopener noreferrer">Pew Research Center, 22/07/2025</a> et{" "}
          <a href="https://ahrefs.com/blog/ai-overviews-reduce-clicks/" target="_blank" rel="noopener noreferrer">Ahrefs, avril 2025</a>.
          Marché français :{" "}
          <a href="https://www.sri-france.org/observatoire-epub/36eme-observatoire-de-le-pub/" target="_blank" rel="noopener noreferrer">36ᵉ Observatoire de l&apos;e-pub, SRI / UDECAM / Oliver Wyman, 09/07/2026</a>.
          Fraude :{" "}
          <a href="https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/sites-internet-daide-aux-demarches-administratives" target="_blank" rel="noopener noreferrer">DGCCRF, enquête sur les faux sites d&apos;aide aux démarches administratives</a>.
          Droit :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563114" target="_blank" rel="noopener noreferrer">art. L121-2 du code de la consommation</a> et{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958" target="_blank" rel="noopener noreferrer">art. L131-3 du code de la propriété intellectuelle</a>.
        </p>
        <p className="text-sm">
          Les tarifs cités ont été relevés le 18 juillet 2026 sur les pages
          publiques des prestataires concernés et peuvent avoir changé
          depuis. Les données Ahrefs, Pew et SparkToro portent sur le marché
          américain, ce que nous signalons plutôt que de les présenter comme
          françaises. Les fourchettes de marché sont des observations, pas
          des statistiques : aucun organisme public ne mesure le marché
          français des prestations de référencement naturel. Les références
          de jurisprudence sont données à titre d&apos;information générale et
          ne constituent pas un conseil juridique ; consultez un avocat pour
          votre situation.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
