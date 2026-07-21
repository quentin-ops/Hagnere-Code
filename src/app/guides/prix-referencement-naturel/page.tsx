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
  headline: guide.cardTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Prix du référencement naturel",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel budget SEO prévoir pour une PME, audit compris ?",
    answer:
      "Les grilles publiques relevées en juillet 2026 situent souvent un accompagnement régional entre 800 et 1 500 € HT par mois, et un marché national concurrentiel entre 2 500 et 5 000 €. Un audit complet de PME est plutôt affiché entre 800 et 3 000 € HT. Ces repères viennent de prestataires : vérifiez les actions réellement prévues, l’état du site et la concurrence avant de fixer votre budget.",
  },
  {
    question: "Combien de temps avant d'avoir des résultats en SEO ?",
    answer:
      "Il n’existe pas de délai garanti. Google indique que certaines modifications sont prises en compte rapidement et que d’autres demandent plusieurs mois, sans promettre d’amélioration. Suivez séparément l’indexation, les impressions, les visites et les demandes commerciales.",
  },
  {
    question: "Une agence peut-elle garantir une position sur Google ?",
    answer:
      "Google précise que personne ne peut garantir une première position. Une promesse écrite peut néanmoins avoir des conséquences contractuelles selon ses mots exacts et le contexte ; les décisions françaises ne créent pas de règle automatique pour tous les contrats SEO. Exigez plutôt des livrables contrôlables et faites relire toute promesse sensible par un professionnel du droit.",
  },
  {
    question: "Combien coûte un lien entrant et est-ce risqué ?",
    answer:
      'Les grilles de vendeurs consultées vont d’environ 30 à 120 € sur certains petits sites à 600–2 500 € sur des médias plus établis, parfois davantage. Le prix ne prouve ni l’audience ni la qualité. Google classe l’achat de liens destiné à manipuler le classement parmi les pratiques contraires à ses règles ; un lien publicitaire payé doit notamment signaler sa nature avec rel="sponsored".',
  },
  {
    question: "Que changent les résumés IA de Google ?",
    answer:
      "Les résumés générés par l’intelligence artificielle peuvent modifier le nombre de clics vers les résultats classiques. Une étude américaine de Pew l’a observé sur son échantillon en mars 2025, tandis que Google en a contesté la portée générale. Vérifiez donc l’évolution sur vos propres requêtes.",
  },
  {
    question: "SEO ou Google Ads : par quoi commencer ?",
    answer:
      "Google Ads permet de tester rapidement une demande connue ; le SEO construit des pages qui peuvent attirer des visiteurs dans la durée. Le choix dépend de votre urgence, de votre budget, de la maturité de l’offre et de la fréquence des questions posées par vos prospects.",
  },
  {
    question: "Si je change d'agence, est-ce que je garde mes articles ?",
    answer:
      "Pas automatiquement. L’article L131-3 du code de la propriété intellectuelle encadre précisément la cession des droits. Faites écrire dans le contrat la cession des contenus, la propriété du nom de domaine et la restitution de tous les accès en fin de mission.",
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
          { label: "Prix du référencement naturel" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous cherchez combien investir pour être mieux trouvé sur Google ? Voici les prix observés pour un audit, un accompagnement local ou national, ce que ces budgets doivent financer et les questions à poser avant de signer."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "800 à 1 500 €/mois en local",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "2 500 à 5 000 €/mois en national",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Audit PME : 800 à 3 000 €",
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
          { href: "/services/referencement-google", label: "Notre offre SEO" },
          {
            href: "/guides/refonte-sans-perdre-son-seo",
            label: "Refonte sans perdre son SEO",
          },
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Prix d'un site internet",
          },
          {
            href: "/guides/choisir-son-agence-web",
            label: "Choisir son agence web",
          },
          {
            href: "/guides/prix-gestion-google-ads",
            label: "Prix de gestion Google Ads",
          },
          {
            href: "/guides/seo-ou-google-ads",
            label: "Arbitrer entre SEO, Google Ads, hybride ou report",
          },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Prix du SEO : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          <strong>
            Vous dirigez une entreprise et vous voulez savoir combien investir
            pour apparaître lorsque vos futurs clients cherchent vos services
            sur Google ?
          </strong>{" "}
          Le référencement naturel, aussi appelé SEO, regroupe les améliorations
          techniques, les pages et les contenus qui aident un site à être trouvé
          sans payer chaque clic.
        </p>
        <p>
          Les grilles publiques relevées en juillet 2026 situent un
          accompagnement régional autour de 800 à 1 500 € HT par mois et un
          marché national concurrentiel autour de 2 500 à 5 000 €. Un audit
          complet de PME est plutôt affiché entre 800 et 3 000 €. Ce sont des
          ordres de grandeur, pas des moyennes officielles ni une promesse de
          résultat. Pour choisir, regardez ce qui sera fait chaque mois, qui le
          fera et comment les demandes commerciales seront mesurées.
        </p>

        <GuideTable
          headers={[
            "Prestation",
            "Fourchette observée (HT)",
            "Origine du repère",
          ]}
          rows={[
            [
              "Audit rapide (site < 50 pages)",
              "300 – 800 €",
              "Grilles publiques d'agences",
            ],
            [
              "Audit complet PME",
              "800 – 3 000 €",
              "Plusieurs grilles publiques",
            ],
            [
              "Audit e-commerce approfondi",
              "3 000 – 8 000 €",
              "Grilles publiques",
            ],
            [
              "Accompagnement mensuel, ambition locale",
              "800 – 1 500 €/mois",
              "Plusieurs grilles publiques",
            ],
            [
              "Accompagnement mensuel, national concurrentiel",
              "2 500 – 5 000 €/mois",
              "Plusieurs grilles publiques",
            ],
            [
              "Rédaction d'un article optimisé",
              "80 – 800 €",
              "Grilles publiques, forte dispersion",
            ],
            [
              "Création de liens entrants",
              "30 € – plusieurs milliers",
              "Aucune source ne publie sa méthode",
            ],
            [
              "Tarif journalier freelance",
              "250 – 800 €/jour",
              "Tarifs déclarés par les prestataires",
            ],
            [
              "Tarif journalier agence",
              "1 000 – 1 500 €/jour",
              "Tarifs déclarés par les prestataires",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Ces prix sont des repères, pas un tarif officiel"
        >
          Aucune statistique publique française ne mesure le prix des
          prestations SEO. Les fourchettes ci-dessus viennent de grilles
          affichées par des prestataires et ne couvrent pas toujours le même
          travail. Les termes techniques utiles sont expliqués dans la section
          où ils apparaissent.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "prix-reels",
              label: "Prix observés et écarts entre les devis",
            },
            {
              id: "modeles",
              label: "Facturation et temps réellement acheté",
            },
            {
              id: "contenu-prestation",
              label: "Travail mensuel et coût des outils",
            },
            {
              id: "liens",
              label: "Prix et risques des liens entrants",
            },
            {
              id: "delais",
              label: "Délais, résumés IA et mesure des résultats",
            },
            {
              id: "arnaques",
              label: "Promesses, contrat et actifs à protéger",
            },
            {
              id: "gratuit",
              label: "Ce que vous pouvez faire vous-même",
            },
            { id: "roi", label: "Rentabilité avec vos propres chiffres" },
            {
              id: "pas-le-bon-investissement",
              label: "Quand choisir un autre investissement",
            },
          ]}
        />

        <InfoBox
          variant="blue"
          title="Exemple fictif : trois devis pour la même entreprise"
        >
          Ce cas est construit pour expliquer la comparaison. Il ne décrit ni un
          client ni un témoignage réel. Neuf salariés, une activité régionale,
          un site vitrine de trente-quatre pages. Dans ce scénario, Nathalie
          aurait reçu trois propositions de référencement en trois semaines :{" "}
          <strong>290 € par mois</strong> (démarchage téléphonique),{" "}
          <strong>1 400 € par mois</strong> (agence lyonnaise) et{" "}
          <strong>3 200 € par mois</strong> (agence parisienne). Les trois
          promettent « la première page de Google ». Cet exemple servira à
          montrer pourquoi le prix seul ne permet pas de choisir : il faut aussi
          comparer les travaux prévus, le temps consacré et les droits
          conservés.
        </InfoBox>

        <h2 id="prix-reels">
          Quels prix observe-t-on et pourquoi les devis sont-ils si différents ?
        </h2>
        <p>
          Retenez d’abord trois ordres de grandeur : 800 à 3 000 € HT pour un
          audit complet de PME, 800 à 1 500 € HT par mois pour travailler une
          visibilité régionale et 2 500 à 5 000 € HT par mois pour un marché
          national concurrentiel. Un site marchand très vaste, plusieurs pays ou
          un problème technique important peuvent demander davantage.
        </p>
        <p>
          Ces fourchettes viennent de grilles publiques relevées le 18 juillet
          2026. Elles affichent, par exemple, des forfaits à 221 €, 321 € ou 580
          € HT par mois chez un prestataire ; chez un autre, une consultation
          d’une heure à 190 €, une stratégie à 3 900 €, un audit technique à
          partir de 500 € et un article entre 300 et 500 €. Elles donnent des
          repères, mais pas une moyenne officielle : ni l’Insee ni un syndicat
          professionnel ne publie de statistique sur le prix des prestations
          SEO.
        </p>
        <h3 id="prix-peu-fiables">
          Pourquoi certains prix publiés sont-ils peu fiables ?
        </h3>
        <p>
          Une même étiquette, « accompagnement SEO », peut désigner deux heures
          de conseil ou une équipe qui corrige le site, rédige des pages et suit
          les demandes commerciales. Les chiffres souvent repris en ligne ont
          aussi des sources très inégales. Voici comment les lire.
        </p>
        <GuideTable
          headers={["Le chiffre affiché", "Ce qu'il y a derrière"]}
          rows={[
            [
              "« Budget mensuel médian : 980 € HT »",
              "12 mandats d'une seule agence. Douze observations ne produisent pas une médiane de marché",
            ],
            [
              "« Prix médian d'un projet SEO : 5 000 € »",
              "Des budgets déclarés par les agences inscrites à un annuaire commercial, rémunéré à l'apport d'affaires. Ce sont des demandes de devis, pas des contrats signés",
            ],
            [
              "« Dès 221 €/mois »",
              "Le prix catalogue d'un seul prestataire, repris comme s'il s'agissait d'un plancher sectoriel observé",
            ],
            [
              "« +40 % de trafic après 6 mois »",
              "Aucun client nommé, aucune période, aucun modèle d'attribution",
            ],
            [
              "« Premium Île-de-France : +15 à +25 % »",
              "Donnée intéressante, mais invérifiable : aucune base publiée",
            ],
          ]}
        />
        <p>
          La plupart de ces prix sont publiés par des agences ou des freelances
          qui vendent le service, comme Hagnéré Code. L’information peut être
          utile, mais elle doit être accompagnée de sa date, de son origine et
          du contenu exact de l’offre.
        </p>
        <InfoBox variant="amber" title="Vérifiez toujours la date des tarifs">
          Plusieurs articles consultés en 2026 citaient encore les anciennes
          offres « Pro, Guru et Business » d’un outil SEO, alors que sa page
          tarifaire affiche désormais d’autres formules. Avant d’utiliser un
          chiffre, ouvrez sa source et vérifiez qu’elle correspond encore à
          l’offre actuelle.
        </InfoBox>

        <h2 id="modeles">
          Comment serez-vous facturé et combien de temps achetez-vous ?
        </h2>
        <p>Quatre modes de facturation reviennent dans les devis :</p>
        <ul>
          <li>
            <strong>Le forfait mensuel</strong> finance un travail régulier. Il
            n&apos;est lisible que si les tâches et les livrables de chaque mois
            sont écrits.
          </li>
          <li>
            <strong>L&apos;audit ponctuel</strong> livre un diagnostic et un
            plan d&apos;action. Vérifiez qui réalisera ensuite les corrections.
          </li>
          <li>
            <strong>Le forfait projet</strong> couvre une mission délimitée,
            comme une migration ou un ensemble de pages, sans garantir une
            position dans Google.
          </li>
          <li>
            <strong>Le temps passé</strong> achète des journées de consultant.
            Demandez alors le suivi des tâches et du temps réellement consommé.
          </li>
        </ul>
        <p>
          Deux modèles supplémentaires méritent une alerte. La{" "}
          <strong>facturation au mot</strong> peut inciter au volume si aucun
          critère de qualité ou de résultat n&apos;est prévu. La{" "}
          <strong>facturation à la position garantie</strong> concentre un
          risque contractuel et commercial puisque le prestataire ne contrôle
          pas les résultats de Google ; sa portée juridique dépend du contrat.
        </p>

        <h3 id="tjm">Transformez le forfait en temps de travail</h3>
        <p>
          Le tarif journalier moyen, ou TJM, est le prix d’une journée de
          travail. Diviser le forfait mensuel par ce tarif donne un ordre de
          grandeur du temps prévu. C’est un bon contrôle, mais pas une note de
          qualité : des outils, des modèles déjà prêts ou plusieurs niveaux
          d’expertise peuvent changer ce que le prestataire produit dans ce
          temps.
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

Refaites le calcul avec le TJM de votre prestataire :
  temps acheté (jours) = budget mensuel ÷ TJM`}
        </FormulaBox>
        <p>
          Relisez ensuite ce que promet une offre à 221 € par mois : audit
          complet, optimisation de la vitesse, correction des balises, stratégie
          de mots-clés, <strong>deux articles rédigés par mois</strong>,
          recherche de liens entrants, communiqués de presse et un interlocuteur
          dédié. Tout cela correspondrait ici à environ deux heures de travail.
        </p>
        <p>
          Demandez alors quelle part est automatisée ou réutilisée, qui
          intervient, quels coûts tiers sont inclus et quelles tâches sont
          réellement prévues. Cette division soulève une question ; elle ne
          prouve pas à elle seule que l&apos;offre est impossible ou trompeuse.
        </p>
        <InfoBox
          variant="blue"
          title="La division appliquée au scénario Nathalie"
        >
          Devis à 290 € par mois : environ deux heures et demie de travail
          mensuel, pour un audit, du contenu et du suivi. Devis à 1 400 € :
          environ une journée et demie. Devis à 3 200 € : environ trois journées
          et demie.
          <br />
          <br />
          Cette conversion ne choisit pas le devis à sa place. Elle lui permet
          de demander à chaque prestataire ce qu’il fera réellement pendant ce
          temps et quels résultats intermédiaires elle pourra vérifier.
        </InfoBox>
        <p>
          Un mot sur les tarifs journaliers eux-mêmes. Ceux que nous citons sont{" "}
          <strong>déclarés publiquement par les prestataires</strong> : 250 à
          300 € pour un freelance débutant, environ 500 € pour un profil
          standard, 700 à 800 € pour un expert, et à partir de 1 000 à 1 200 € —
          jusqu&apos;à 1 500 € — pour une agence. Méfiez-vous des tarifs
          journaliers présentés comme des « baromètres » sans échantillon publié
          : plusieurs se contentent de reprendre une moyenne de plateforme en y
          appliquant un coefficient jamais justifié.
        </p>

        <h2 id="contenu-prestation">
          Que devez-vous recevoir chaque mois, outils compris ?
        </h2>
        <p>
          Une prestation complète peut couvrir quatre familles de travail. Elles
          ne doivent pas toutes représenter la même part du budget, mais le
          devis doit dire lesquelles sont utiles à votre site et ce qui sera
          livré.
        </p>
        <p>
          Pour contrôler un livrable ponctuel avant de financer les corrections,
          utilisez aussi notre grille détaillée :{" "}
          <Link href="/guides/audit-seo-que-contient-il">
            ce que doit contenir un audit SEO réellement exploitable
          </Link>
          . Elle distingue le contrôle automatisé, le diagnostic, le plan
          d&apos;action et les résultats à vérifier après correction.
        </p>
        <ul>
          <li>
            <strong>Le technique</strong> : vitesse, structure des adresses,
            indexation, données structurées, correction des erreurs
            d&apos;exploration. Ces corrections sont prioritaires si elles
            empêchent Google ou les visiteurs d’accéder aux pages. Notre guide{" "}
            <Link href="/guides/pourquoi-mon-site-est-lent">
              pourquoi mon site est lent
            </Link>{" "}
            couvre la partie performance.
          </li>
          <li>
            <strong>Le contenu</strong> : recherche des requêtes, rédaction,
            mise à jour des pages existantes. C&apos;est le poste le plus lourd
            en temps, et de loin.
          </li>
          <li>
            <strong>La popularité</strong> : les liens entrants — la section qui
            leur est consacrée explique pourquoi leur achat demande de la
            prudence.
          </li>
          <li>
            <strong>Le pilotage</strong> : mesure, reporting mensuel,
            arbitrages. Sans lui, vous payez sans savoir ce qui produit
            l&apos;effet.
          </li>
        </ul>
        <InfoBox
          variant="amber"
          title="La répartition qu'on vous donnera, et ce qu'elle vaut"
        >
          Un ordre de grandeur souvent avancé : environ 20 % de technique, 50 %
          de contenu, 20 % de liens, 10 % de pilotage. Nous le donnons parce
          qu&apos;il aide à lire un devis — mais{" "}
          <strong>
            aucune source primaire n&apos;existe pour cette répartition
          </strong>
          . C&apos;est une convention de métier, pas une statistique.
          Utilisez-la pour poser des questions, pas pour arbitrer.
        </InfoBox>

        <h3 id="outils">Quels outils devez-vous payer vous-même ?</h3>
        <GuideTable
          headers={[
            "Outil",
            "Prix relevé le 18/07/2026",
            "Faut-il le payer vous-même ?",
          ]}
          rows={[
            [
              "Google Search Console",
              "Gratuit",
              "Oui — indispensable, et c'est votre propriété",
            ],
            [
              "Fiche Google Business Profile",
              "Gratuit",
              "Oui — décisif en référencement local",
            ],
            [
              "PageSpeed Insights",
              "Gratuit",
              "Oui — pour vérifier les promesses de performance",
            ],
            [
              "Google Keyword Planner",
              "Gratuit",
              "Oui — la seule source primaire sur vos volumes de recherche",
            ],
            [
              "Screaming Frog (exploration de site)",
              "245 €/an ; gratuit jusqu'à 500 URL",
              "Version gratuite suffisante sous 500 pages",
            ],
            [
              "Suite SEO complète (type Semrush)",
              "139 à 549 $/mois selon la formule",
              "Non — c'est l'outil de travail du prestataire",
            ],
          ]}
        />
        <p>
          Deux remarques utiles. D&apos;abord, la page tarifaire officielle de
          la principale suite du marché{" "}
          <strong>n&apos;affiche aucun prix en euros</strong> : les montants
          sont en dollars, ce qui ajoute le change et parfois la TVA à votre
          facture réelle. Ensuite, si votre prestataire vous refacture ses
          outils en ligne séparée, demandez-lui simplement si ces outils servent
          aussi à ses autres clients. La réponse est généralement oui.
        </p>

        <h2 id="liens">
          Combien coûtent les liens entrants et quels risques prenez-vous ?
        </h2>
        <p>
          Un lien entrant, aussi appelé backlink, est un lien placé sur un autre
          site vers le vôtre. Le netlinking désigne le travail entrepris pour en
          obtenir. Il peut s’agir de relations presse, de partenariats ou de
          publications payées : le prix et le risque ne sont pas les mêmes.
        </p>
        <GuideTable
          headers={[
            "Type de site qui publie le lien",
            "Prix couramment affiché",
          ]}
          rows={[
            ["Petit blog thématique", "30 – 120 €"],
            ["Site éditorial intermédiaire", "150 – 450 €"],
            ["Média d'autorité", "600 – 2 500 €"],
            ["Presse nationale, secteurs finance / santé", "1 500 – 5 000 €"],
          ]}
        />
        <p>
          Prenez ce tableau comme un aperçu commercial. Les sources consultées
          vendent des liens et ne publient ni échantillon complet ni méthode de
          calcul. Demandez donc le site qui publiera, son audience réelle, le
          contenu compris dans le prix et la manière dont le lien sera signalé.
        </p>
        <InfoBox
          variant="blue"
          title="Ce que disent les règles de Google sur les liens payés"
        >
          Les règles anti-spam de Google visent l’achat de liens destiné à
          manipuler le classement. Un lien publicitaire doit notamment être
          identifié avec l’attribut <strong>rel=&quot;sponsored&quot;</strong>,
          ou <strong>rel=&quot;nofollow&quot;</strong> lorsque cela convient.
          Google traite ces attributs comme des indications : personne ne peut
          donc garantir le gain de position d’un lien acheté. Une publication
          peut néanmoins être rentable pour son audience, ses visites ou sa
          notoriété ; évaluez-la alors comme une action publicitaire, avec des
          résultats mesurables.
        </InfoBox>
        <p>
          Deux pièges tarifaires concrets, faciles à vérifier. Premièrement,
          certaines offres{" "}
          <strong>incluent la rédaction de l&apos;article</strong> qui portera
          le lien, d&apos;autres la facturent à part : deux offres au même prix
          facial peuvent coûter du simple au double. Deuxièmement, les
          intermédiaires s&apos;empilent — le même lien sur le même site peut
          être acheté en direct sur une plateforme, ou revendu deux à trois fois
          plus cher après être passé par deux courtiers. Demandez toujours le
          nom du site qui publiera.
        </p>
        <p>
          Enfin, demandez l’origine exacte des liens. Les réseaux de sites créés
          principalement pour manipuler le classement font partie des pratiques
          visées par les règles anti-spam de Google.
        </p>

        <h2 id="delais">
          Quand mesurer les résultats et que changent les résumés IA ?
        </h2>
        <p>
          La formule « 3 à 6 mois » circule souvent, mais elle ne constitue pas
          une garantie applicable à tous les sites. Une correction technique,
          une nouvelle page et une demande commerciale ne suivent pas le même
          calendrier. Les données ci-dessous apportent du contexte sans prédire
          le délai de votre entreprise.
        </p>
        <InfoBox variant="amber" title="Aucun délai universel n’est sérieux">
          Google indique que certaines modifications peuvent produire un effet
          rapidement et que d’autres demandent plusieurs mois, sans garantir un
          résultat. Demandez donc un calendrier de travail, pas une date de
          position : correction publiée, page accessible, premières impressions,
          clics puis demandes commerciales. Si une étape ne progresse pas, elle
          déclenche un diagnostic avant de continuer à payer de la production.
        </InfoBox>

        <h3 id="ai-overviews">
          Les résumés générés par l’intelligence artificielle changent-ils le
          calcul ?
        </h3>
        <p>
          Google affiche parfois un résumé généré par intelligence artificielle,
          parfois appelé AI Overview, au-dessus des résultats classiques. Les
          études américaines citées en sources observent moins de clics lorsque
          ce résumé apparaît, mais leurs taux ne doivent pas être appliqués tels
          quels à votre marché français. La conséquence budgétaire est simple :
          ne payez pas pour une position théorique. Suivez séparément les pages
          d’information, les pages commerciales, les clics et surtout les
          demandes reçues. Une meilleure position ne garantit pas davantage de
          visites ni de clients.
        </p>

        <h3 id="statistiques">Quelles statistiques devez-vous vérifier ?</h3>
        <p>
          Écartez les promesses fondées sur un taux de rentabilité moyen, une
          première place garantie ou un délai identique pour tous. Leur source
          est souvent ancienne, propriétaire ou sans méthode publiée. Votre
          rentabilité dépend de votre marge, du nombre de recherches utiles, du
          taux de demande et de votre capacité à transformer ces demandes en
          clients. Le calcul proposé plus loin part donc de votre cas au lieu de
          reprendre un chiffre commercial.
        </p>

        <h2 id="arnaques">
          Quelles promesses, clauses et dépendances doivent vous alerter ?
        </h2>
        <p>
          Google publie une page destinée aux entreprises qui cherchent un
          prestataire. Ses principaux signaux d&apos;alerte sont faciles à
          comprendre :
        </p>
        <ul>
          <li>
            <strong>Une première position garantie.</strong> Google rappelle
            qu’aucun prestataire ne peut garantir ce résultat et recommande de
            se méfier d’une prétendue relation privilégiée avec le moteur.
          </li>
          <li>
            <strong>
              Un démarchage accompagné de promesses spectaculaires.
            </strong>
            Google cite les courriels non sollicités parmi les signaux d’alerte.
          </li>
          <li>
            <strong>Le flou sur les prestations</strong> : se méfier d&apos;une
            entreprise secrète ou qui n&apos;explique pas clairement ce
            qu&apos;elle compte faire.
          </li>
          <li>
            <strong>Les promesses de soumission massive</strong> à des milliers
            de moteurs de recherche.
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
        <InfoBox
          variant="blue"
          title="La garantie de position qui est tenue… et qui ne sert à rien"
        >
          Une promesse de « première position » peut porter sur une expression
          très précise que personne ne recherche. Être premier ne crée alors
          aucune demande commerciale.
          <br />
          <br />
          La parade tient en une question, à poser avant de signer :{" "}
          <em>
            « quel est le volume de recherche mensuel de chacun des mots-clés
            garantis ? »
          </em>{" "}
          Vous pouvez le vérifier vous-même, gratuitement, dans le Keyword
          Planner de Google.
        </InfoBox>

        <h3 id="droit">Ce que le droit français change dans votre contrat</h3>
        <p>
          Le contrat doit décrire les engagements avec précision. Les décisions
          et textes cités en sources montrent trois points utiles : un
          prestataire ne maîtrise pas le classement de Google ; une promesse de
          position très précise peut créer un engagement contractuel plus fort ;
          une présentation trompeuse peut aussi concerner une offre adressée aux
          professionnels. Leur application dépend toutefois du contrat et des
          faits.
        </p>
        <InfoBox
          variant="emerald"
          title="Évitez les promesses de position dans le contrat"
        >
          Une formulation précise peut créer un engagement plus fort qu’une
          simple obligation de travailler sérieusement. Préférez des engagements
          que les deux parties peuvent contrôler : corrections, pages, suivi,
          alertes et comptes rendus. La portée juridique dépend toujours du
          contrat, des faits et du droit applicable ; faites relire une clause
          sensible par un professionnel du droit.
        </InfoBox>

        <h3 id="proprietes">Gardez vos contenus, votre domaine et vos accès</h3>
        <p>
          Votre référencement repose sur des actifs que vous devez pouvoir
          conserver si vous changez de prestataire : articles, nom de domaine,
          données de mesure et accès au site.
        </p>
        <p>
          L&apos;
          <strong>
            article L131-3 du code de la propriété intellectuelle
          </strong>{" "}
          exige que chacun des droits cédés fasse l&apos;objet d&apos;une
          mention distincte dans l&apos;acte de cession, et que le domaine
          d&apos;exploitation soit délimité quant à son étendue, sa destination,
          son lieu et sa durée. Faites donc préciser par écrit les droits cédés
          sur les contenus, leur étendue et leur durée. Le simple paiement d’un
          article ne remplace pas une clause adaptée.
        </p>
        <p>Les cinq clauses à exiger par écrit, avant signature :</p>
        <ol>
          <li>
            <strong>Cession des droits</strong> sur tous les contenus produits,
            rédigée conformément à l&apos;article L131-3.
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
            certaines offres « sans engagement » imposent deux mois de préavis.
          </li>
          <li>
            <strong>Le détail écrit des livrables mensuels</strong>, sans quoi
            le forfait n&apos;est opposable à rien.
          </li>
        </ol>
        <InfoBox
          variant="amber"
          title="Une règle spécifique à la publicité, à ne pas confondre"
        >
          Si votre prestataire achète de la publicité pour votre compte (Google
          Ads, réseaux sociaux), la <strong>loi Sapin</strong> impose un{" "}
          <strong>contrat de mandat écrit</strong>, exige que les rabais obtenus
          figurent sur votre facture, et interdit à l&apos;intermédiaire de
          recevoir une rémunération du vendeur d&apos;espace.
          <br />
          <br />
          Attention :{" "}
          <strong>
            ce régime s&apos;applique à l&apos;achat d&apos;espace publicitaire,
            pas au référencement naturel
          </strong>
          . La distinction compte dès que votre prestataire fait les deux — ce
          qui est notre cas, et celui de la plupart des agences complètes.
        </InfoBox>

        <h2 id="gratuit">Que pouvez-vous faire vous-même avant de payer ?</h2>
        <p>
          Avant de payer qui que ce soit — nous compris — voici sept actions qui
          ne coûtent rien d&apos;autre que du temps. Comptez une quinzaine à une
          vingtaine d&apos;heures de mise en place.
        </p>
        <GuideTable
          headers={["Action", "Outil", "Temps"]}
          rows={[
            [
              "Créer et vérifier votre fiche Google Business Profile",
              "Gratuit",
              "2 h, puis 15 min/mois",
            ],
            [
              "Connecter la Search Console et lire vos requêtes réelles",
              "Gratuit",
              "1 h de mise en place",
            ],
            [
              "Mesurer la vitesse de votre site sur mobile",
              "PageSpeed Insights",
              "30 min",
            ],
            [
              "Vérifier les volumes de recherche de vos mots-clés",
              "Keyword Planner",
              "2 à 3 h",
            ],
            [
              "Réécrire les titres et descriptions de vos 10 pages principales",
              "Votre back-office",
              "3 à 4 h",
            ],
            [
              "Explorer votre site pour trouver liens morts et pages orphelines",
              "Screaming Frog gratuit (500 URL)",
              "2 h",
            ],
            [
              "Écrire une page par service et par ville où vous intervenez",
              "Votre back-office",
              "1 à 2 h par page",
            ],
          ]}
        />
        <p>
          Une fois ces actions réalisées, un professionnel devient surtout utile
          dans trois cas. Votre outil détecte un problème technique sans pouvoir
          le corriger. Vous ne pouvez pas publier régulièrement avec vos
          ressources actuelles. Ou vos concurrents couvrent les questions du
          marché plus vite et plus précisément que vous.
        </p>

        <h2 id="roi">Le SEO peut-il être rentable pour votre entreprise ?</h2>
        <p>
          Partez du nombre de recherches, du taux de clic, du taux de demande et
          de la marge par client. Le taux de clic, souvent abrégé CTR, mesure la
          part des personnes qui cliquent après avoir vu votre résultat. Dès que
          vous disposez de données réelles, remplacez les hypothèses par celles
          de votre Search Console, de votre outil d’audience et de votre
          logiciel commercial, ou CRM.
        </p>
        <FormulaBox>
          {`ÉTAPE 1 — le trafic espéré
  Visiteurs/mois = Volume mensuel de la requête
                 × taux de clic prudent pour le résultat affiché

ÉTAPE 2 — l'argent
  Clients/mois = Visiteurs × Taux de conversion du site
                          × Taux de transformation commercial
  Gain/mois    = Clients × Marge moyenne par client
  Résultat     = Gain/mois − Budget SEO mensuel

À VÉRIFIER AVANT DE CALCULER
  · Le volume vient du Keyword Planner, pas d'une estimation d'agence
  · Réduisez le taux de clic si Google répond déjà dans sa page de résultats
  · Aucun délai n'est certain : calculez un cas pessimiste, probable et favorable
  · Remplacez les hypothèses par Search Console, votre outil d'audience et vos ventes`}
        </FormulaBox>
        <p>
          Un exemple avec les hypothèses du scénario Nathalie. Sa requête
          principale ferait environ 480 recherches par mois en France. En visant
          la troisième position, elle utiliserait un taux de clic hypothétique
          de 6 %, soit une trentaine de visiteurs mensuels. Son site transforme
          2,5 % des visiteurs en demandes de contact, et elle signerait un
          dossier sur trois : environ{" "}
          <strong>un quart de client par mois</strong>, soit à peu près trois
          par an.
        </p>
        <p>
          Avec une marge de 4 200 € par mission, le calcul donne environ 12 100
          € par an, contre 16 800 € de prestation. Il illustre une méthode ; il
          ne prédit ni position, ni trafic, ni chiffre d&apos;affaires.
        </p>
        <p>
          Avec ces hypothèses, l’opération est déficitaire sur douze mois. Rien
          ne permet d’affirmer qu’elle deviendra automatiquement rentable la
          deuxième année : les positions, les clics, le budget et la concurrence
          peuvent changer. Refaites donc le calcul avec un scénario bas, central
          et haut, puis fixez une date à laquelle vous déciderez de poursuivre,
          d’ajuster ou d’arrêter.
        </p>

        <h2 id="pas-le-bon-investissement">
          Quand le SEO n&apos;est-il pas le bon investissement ?
        </h2>
        <p>
          Le référencement naturel n’est pas toujours le premier investissement
          à faire. Les situations ci-dessous sont des signaux de décision, pas
          des seuils universels : vérifiez-les avec la demande, la marge et la
          trésorerie de votre entreprise.
        </p>
        <GuideTable
          headers={["Signal", "Ce qu’il faut vérifier", "Alternative possible"]}
          rows={[
            [
              "Volume de recherche insuffisant",
              "Les recherches pertinentes ne suffiraient pas à couvrir le coût, même avec un bon taux de vente.",
              "Google Ads géolocalisé, prospection directe, place de marché sectorielle",
            ],
            [
              "Besoin de résultat immédiat",
              "Vous devez générer des demandes avant que de nouvelles pages aient le temps d’être découvertes et évaluées.",
              "Google Ads ou prospection directe pour tester la demande plus vite.",
            ],
            [
              "Budget trop faible",
              "Le budget ne finance pas les corrections ou pages prioritaires identifiées.",
              "Un audit unique, puis exécution en interne",
            ],
            [
              "Trésorerie insuffisante",
              "L’investissement mensuel mettrait en danger les dépenses essentielles de l’entreprise.",
              "Reporter la mission et traiter d’abord les actions gratuites ou ponctuelles.",
            ],
            [
              "Visites sans intention d’achat",
              "Les sujets attirent des lecteurs, mais peu de prospects correspondant à votre offre.",
              "Prioriser les pages de services, de prix, de comparaison ou de proximité.",
            ],
            [
              "Pas de site, ou site à refondre",
              "Le site est difficile à utiliser, techniquement bloqué ou ne présente pas clairement l’offre.",
              "Corriger ou refondre les pages essentielles avant de produire en volume.",
            ],
            [
              "B2B ultra-niche à cycle long",
              "Le marché compte peu d’entreprises identifiables et la vente repose sur une relation directe.",
              "Prospection directe, LinkedIn, salons",
            ],
            [
              "Local à très faible concurrence",
              "Une fiche d’établissement bien renseignée et quelques pages répondent déjà à la demande locale.",
              "Commencer par la fiche Google Business Profile et mesurer avant un forfait mensuel.",
            ],
          ]}
        />
        <InfoBox variant="emerald" title="Dans l’exemple de Nathalie">
          La demande régionale et les requêtes commerciales rendent le SEO
          envisageable, mais le calcul reste incertain. Elle écarterait le devis
          à 290 € par mois non parce qu’il est bon marché, mais parce que les
          tâches promises ne sont pas compatibles avec le temps théorique prévu.
          <br />
          <br />
          Elle ne signerait pourtant pas non plus douze mois à 1 400 € : avec
          les hypothèses retenues, les 16 800 € de budget dépassent les 12 100 €
          de marge espérée. Elle demanderait d’abord une mission plus courte
          pour corriger les pages prioritaires et mesurer la demande. Un
          accompagnement mensuel ne deviendrait raisonnable qu’après un nouveau
          calcul positif, avec des livrables écrits, la cession des droits sur
          les articles et la restitution des accès.
        </InfoBox>

        <p>
          Chez Hagnéré Code, nous faisons du référencement naturel au sein
          d&apos;une offre complète — sites, applications métier, campagnes
          Google Ads, acquisition. Nos{" "}
          <Link href="/tarifs">tarifs sont publics</Link>, nous ne garantissons
          aucune position, et nous vous dirons quand Ads est le meilleur
          investissement pour vous. Notre page{" "}
          <Link href="/services/referencement-google">
            référencement naturel
          </Link>{" "}
          décrit la méthode, et notre guide{" "}
          <Link href="/guides/choisir-son-agence-web">
            choisir son agence web
          </Link>{" "}
          donne la grille de lecture d&apos;un devis complet.
        </p>

        <InfoBox
          variant="emerald"
          title="Avant de signer, vous devez pouvoir répondre à cinq questions"
        >
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              Comparez d’abord le travail inclus, puis le prix et le temps
              prévu.
            </li>
            <li>
              Refusez une position ou un délai garanti par le prestataire.
            </li>
            <li>
              Gardez le domaine, les contenus, les données et les accès à votre
              nom.
            </li>
            <li>
              Calculez la rentabilité avec votre marge et vos demandes, pas avec
              une moyenne publiée par une agence.
            </li>
            <li>
              Commencez plus petit ou choisissez un autre canal si le scénario
              prudent ne couvre pas le budget.
            </li>
          </ul>
        </InfoBox>

        <GuideInlineCTA
          title="Savoir quel budget SEO correspond à votre entreprise"
          description="Indiquez votre zone de marché, votre site, vos objectifs et les devis déjà reçus. Nous vous aidons à chiffrer le travail utile, repérer les éléments manquants et décider si le référencement naturel est le bon investissement maintenant."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Documentation officielle Google :{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            « Ai-je besoin d&apos;un référenceur ? »
          </a>{" "}
          et{" "}
          <a
            href="https://developers.google.com/search/docs/essentials/spam-policies?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Règles anti-spam de la recherche Google
          </a>
          . Données de classement :{" "}
          <a
            href="https://ahrefs.com/blog/how-long-does-it-take-to-rank/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahrefs, « How Long Does It Take to Rank in Google? », 15/05/2025
          </a>{" "}
          et{" "}
          <a
            href="https://ahrefs.com/blog/search-traffic-study/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahrefs, étude sur le trafic de recherche
          </a>
          .
        </p>
        <p className="text-sm">
          Résumés IA :{" "}
          <a
            href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pew Research Center, 22/07/2025
          </a>{" "}
          et{" "}
          <a
            href="https://ahrefs.com/blog/ai-overviews-reduce-clicks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahrefs, avril 2025
          </a>
          . Marché français :{" "}
          <a
            href="https://www.sri-france.org/observatoire-epub/36eme-observatoire-de-le-pub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            36ᵉ Observatoire de l&apos;e-pub, SRI / UDECAM / Oliver Wyman,
            09/07/2026
          </a>
          .
        </p>
        <p className="text-sm">
          Fraude :{" "}
          <a
            href="https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/sites-internet-daide-aux-demarches-administratives"
            target="_blank"
            rel="noopener noreferrer"
          >
            DGCCRF, enquête sur les faux sites d&apos;aide aux démarches
            administratives
          </a>
          . Droit :{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044563114"
            target="_blank"
            rel="noopener noreferrer"
          >
            art. L121-2 du code de la consommation
          </a>{" "}
          et{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            art. L131-3 du code de la propriété intellectuelle
          </a>
          .
        </p>
        <p className="text-sm">
          Les tarifs cités ont été relevés le 18 juillet 2026 sur les pages
          publiques des prestataires concernés et peuvent avoir changé depuis.
          Les données Ahrefs, Pew et SparkToro portent sur le marché américain,
          ce que nous signalons plutôt que de les présenter comme françaises.
          Les fourchettes de marché sont des observations, pas des statistiques
          : aucun organisme public ne mesure le marché français des prestations
          de référencement naturel. Les références de jurisprudence sont données
          à titre d&apos;information générale et ne constituent pas un conseil
          juridique ; consultez un avocat pour votre situation.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
