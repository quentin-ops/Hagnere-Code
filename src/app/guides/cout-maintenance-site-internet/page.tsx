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

const guide = getGuide("cout-maintenance-site-internet");

// --- METADATA SEO (title/description/dates depuis src/lib/guides.ts) ---
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
    // og:image générée par opengraph-image.tsx (convention Next.js).
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

// --- JSON-LD SCHEMAS (constantes statiques uniquement) ---
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
      "Développement web",
      "Maintenance de sites internet",
      "Sécurité web",
      "Next.js",
      "React",
      "Chiffrage de projets web",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo-dark.png`,
    },
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
      name: "Coût de la maintenance d'un site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le prix moyen d'une maintenance de site internet ?",
    answer:
      "Il n’existe pas de moyenne officielle directement comparable. Dans l’échantillon de six offres publiques détaillé dans ce guide, les prix affichés vont de 29 à 499 € par mois, avec des services et des conditions très différents. Comparez les sauvegardes, le support, les corrections incluses et le délai d’intervention.",
  },
  {
    question: "La maintenance d'un site internet inclut-elle l'hébergement ?",
    answer:
      "Pas toujours. Le contrat doit distinguer l’hébergement du serveur, l’entretien du site, les sauvegardes et le support. Demandez le prix et le responsable de chaque ligne.",
  },
  {
    question: "La maintenance est-elle obligatoire pour un site WordPress ?",
    answer:
      "Aucune loi générale n’impose un contrat WordPress. En revanche, quelqu’un doit prendre en charge les mises à jour, les accès, les sauvegardes et les incidents. Cela peut être votre équipe ou un prestataire.",
  },
  {
    question: "Peut-on faire la maintenance de son site soi-même ?",
    answer:
      "Oui, si une personne possède les accès, les compétences et du temps réservé. Elle doit notamment contrôler les mises à jour, vérifier les sauvegardes et savoir qui appeler en cas d’incident.",
  },
  {
    question: "Quelle différence entre maintenance corrective et évolutive ?",
    answer:
      "La maintenance corrective répare un problème ; la préventive réduit le risque de panne ; l’évolutive ajoute ou améliore une fonction. Vérifiez ce que le forfait comprend et ce qui fera l’objet d’un devis séparé.",
  },
  {
    question:
      "Les sauvegardes sont-elles incluses dans un contrat de maintenance ?",
    answer:
      "Pas nécessairement. Vérifiez la fréquence, la durée de conservation, le lieu de stockage et surtout les tests de restauration. Une copie jamais restaurée ne suffit pas.",
  },
  {
    question: "Quelle différence entre maintenance et refonte ?",
    answer:
      "La maintenance entretient et corrige l’existant. Une refonte revoit plus largement le design, les contenus ou la base technique. Un diagnostic doit comparer le coût des corrections à celui d’une reconstruction.",
  },
  {
    question: "Peut-on arrêter un contrat de maintenance à tout moment ?",
    answer:
      "Cela dépend de la durée et du préavis prévus. Le contrat doit aussi organiser la remise des accès, des sauvegardes, des fichiers et des heures non consommées.",
  },
  {
    question: "Faut-il un contrat de maintenance pour un site Shopify ou Wix ?",
    answer:
      "La plateforme entretient ses serveurs et son logiciel principal. Vous restez responsable du thème, des applications ajoutées, des connexions à vos autres outils et du contenu. Une boutique complexe peut donc encore avoir besoin d’un accompagnement régulier.",
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
          { label: "Coût de la maintenance d'un site" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Combien prévoir chaque mois pour entretenir votre site ? Voici six offres publiques datées, leurs limites de comparaison et les clauses à vérifier avant de signer."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "6 offres publiques datées",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "29 – 499 € HT/mois relevés",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Contrat compris avant de signer",
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
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte de site",
          },
          {
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          {
            href: "/guides/shopify-ou-sur-mesure",
            label: "Shopify ou sur-mesure ?",
          },
          {
            href: "/services/maintenance-evolution",
            label: "Maintenance & évolution",
          },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Coût de la maintenance : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          <strong>
            Vous voulez savoir combien coûte la maintenance de votre site et ce
            que vous devez obtenir en échange ?
          </strong>
        </p>
        <p>
          Il n’existe pas de tarif moyen officiel directement comparable. Dans
          un échantillon de six offres françaises publiées par leurs
          prestataires et consultées le 21 juillet 2026, les prix affichés vont
          de <strong>29 à 499 € HT par mois</strong>. Cet écart ne mesure pas le
          « marché » : il mélange des périmètres, des niveaux de support et des
          conditions différents.
        </p>
        <p>
          Le prix dépend surtout des corrections incluses, de la surveillance,
          des sauvegardes réellement testées et du délai promis en cas de panne.
          Ce guide vous aide à comparer deux devis sur les mêmes services.
        </p>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Six offres publiques et leurs limites",
            },
            {
              id: "de-quoi-parle-t-on",
              label: "2. Ce que couvre la maintenance",
            },
            { id: "menace", label: "3. Les risques d’un site sans entretien" },
            { id: "postes", label: "4. Ce qu’un forfait doit préciser" },
            {
              id: "wordpress-vs-statique",
              label: "5. WordPress ou site sur mesure : quelle différence ?",
            },
            {
              id: "contrat",
              label: "6. Les délais et clauses à écrire dans le contrat",
            },
            {
              id: "diy",
              label: "7. Faire soi-même ou utiliser une plateforme",
            },
            { id: "methode", label: "8. Choisir son contrat en cinq étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. Six offres publiques et leurs limites</h2>
        <p>
          Le tableau ci-dessous reproduit les prix mensuels annoncés par six
          prestataires. L’échantillon est volontairement daté, non représentatif
          et principalement consacré à WordPress. Il ne permet ni de calculer
          une moyenne nationale ni d’attribuer un prix à votre site sans en
          connaître le périmètre.
        </p>
        <GuideTable
          headers={["Prestataire", "Forfaits affichés", "Point de comparaison"]}
          rows={[
            [
              "Grain de Site",
              "29 / 39 / 49 €/mois",
              "Trois périmètres WordPress ; licences premium fournies pendant le contrat.",
            ],
            [
              "TYTAE",
              "29 / 39 / 69 €/mois",
              "One Page, site vitrine ou e-commerce ; intervention ponctuelle affichée à 85 €/h.",
            ],
            [
              "Studio HTTP",
              "À partir de 39 / 99 €/mois",
              "Une heure mensuelle de petites modifications au palier supérieur.",
            ],
            [
              "Harsene",
              "49 / 69 €/mois",
              "WordPress ou WooCommerce ; hébergement proposé séparément.",
            ],
            [
              "Palmsquare",
              "89 / 169 €/mois",
              "Deux paliers mensuels affichés ; équivalents réduits en paiement annuel.",
            ],
            [
              "Pulsar Agency",
              "159 / 209 / 499 €/mois",
              "Facturation annuelle ; délais de rétablissement annoncés selon le palier.",
            ],
          ]}
        />
        <p>
          Consultez les six pages d’origine avant toute comparaison :{" "}
          <a
            href="https://graindesite.com/maintenance-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grain de Site
          </a>
          ,{" "}
          <a
            href="https://www.tytae.fr/maintenance-site-wordpress-tarif/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TYTAE
          </a>
          ,{" "}
          <a
            href="https://studio-http.fr/maintenance-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Studio HTTP
          </a>
          ,{" "}
          <a
            href="https://harsene.com/maintenance-et-support-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harsene
          </a>
          ,{" "}
          <a
            href="https://palmsquare.fr/agence-maintenance-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palmsquare
          </a>{" "}
          et{" "}
          <a
            href="https://www.pulsar-agency.com/maintenance-site-web/contrat-maintenance-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pulsar Agency
          </a>
          . Les mentions « à partir de », la facturation annuelle et les
          différences d’inclusion empêchent une comparaison sur le prix seul.
        </p>

        <InfoBox
          variant="blue"
          title="Trois types de travail à ne pas confondre"
        >
          La maintenance <strong>préventive</strong> entretient le site pour
          réduire le risque de panne. La maintenance <strong>corrective</strong>
          répare un problème constaté. La maintenance <strong>évolutive</strong>
          ajoute ou améliore une fonction. Un petit forfait couvre souvent la
          prévention, parfois quelques corrections, mais rarement les
          évolutions.
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">
          2. Distinguez maintenance, hébergement et gestion du serveur
        </h2>
        <p>
          L’<strong>hébergement</strong> est le serveur sur lequel fonctionne le
          site. La <strong>maintenance</strong> couvre les mises à jour, les
          sauvegardes, la surveillance et les réparations. L’
          <strong>infogérance</strong>
          désigne la gestion du serveur par un prestataire. Ces services peuvent
          être regroupés ou séparés : le devis doit indiquer le prix, le
          fournisseur et le responsable de chaque ligne.
        </p>
        <p>
          Pour rendre les calculs concrets, nous utiliserons un exemple fictif :
          une fromagerie à Chambéry possède un site WordPress de 18 pages et un
          module de commande qui encaisse environ 2 000 € par mois, davantage en
          décembre. Le site n’est plus entretenu depuis sa mise en ligne en
          2023. Ce n’est ni un client ni un témoignage réel.
        </p>

        <h2 id="menace">3. Les risques d’un site sans entretien</h2>
        <p>
          Le risque principal n’est pas seulement le piratage. Une mise à jour
          peut casser un formulaire, une extension peut être abandonnée, une
          sauvegarde peut être inutilisable et un certificat peut expirer. Le
          niveau d’entretien doit donc dépendre du rôle du site : une brochure
          rarement modifiée ne demande pas la même surveillance qu’une boutique
          qui reçoit des commandes chaque jour.
        </p>
        <InfoBox
          variant="amber"
          title="Une mise à jour automatique ne suffit pas"
        >
          Demandez qui vérifie le site après la mise à jour, comment revenir à
          la version précédente et quand la dernière restauration a été
          réellement testée. Ces trois réponses sont plus utiles que le nombre
          d’outils de sécurité cités dans le devis.
        </InfoBox>

        <h3 id="cout-sinistre">Chiffrez ce que vous voulez éviter</h3>
        <p>
          Une moyenne nationale ou le montant d’une amende célèbre ne vous dit
          pas combien investir. Partez de votre propre activité : commandes ou
          demandes perdues pendant l’arrêt, temps passé à prévenir les clients,
          coût du diagnostic et travail nécessaire pour reconstruire des
          contenus ou des données.
        </p>
        <GuideTable
          headers={["Question", "Votre donnée", "Décision à prendre"]}
          rows={[
            [
              "Que rapporte le site pendant une journée normale ?",
              "___ € de commandes ou ___ demandes qualifiées",
              "Fixer le délai d’intervention attendu",
            ],
            [
              "Combien de temps faudrait-il pour vérifier et réparer ?",
              "___ heures internes + ___ € de prestation",
              "Comparer un dépannage ponctuel et un forfait",
            ],
            [
              "Que serait-il difficile de reconstruire ?",
              "Données, commandes, contenus et réglages à lister",
              "Prioriser les sauvegardes et tester une restauration",
            ],
          ]}
        />
        <p>
          Pour notre fromagerie fictive, une panne en décembre pèserait plus
          lourd qu’un arrêt en période calme. Ce constat suffit pour demander un
          délai plus court à ce moment-là ; il ne permet pas de prédire une
          perte exacte ni de promettre qu’une maintenance empêchera tout
          incident.
        </p>
        <p>
          L&apos;accessibilité, la protection des données et les cookies peuvent
          créer des obligations différentes selon l&apos;activité, le service,
          la taille de l&apos;entreprise et les textes applicables. Une page de
          guide ne suffit pas à qualifier votre situation : faites vérifier le
          périmètre juridique, puis inscrivez les contrôles techniques et
          éditoriaux nécessaires dans la maintenance ; voir notre offre{" "}
          <Link href="/services/securite-rgpd">
            sécurité et conformité RGPD
          </Link>
          .
        </p>

        <h2 id="postes">4. Vérifiez ce que le forfait comprend</h2>
        <p>
          Pour comparer deux devis, demandez la fréquence de chaque tâche, le
          temps humain inclus et ce qui sera facturé en supplément.
        </p>
        <GuideTable
          headers={["Poste", "Rythme à écrire", "Preuve attendue"]}
          rows={[
            [
              "Mises à jour du logiciel de gestion du site (CMS), du thème et des extensions",
              "Calendrier défini dans le contrat",
              "Journal des versions et contrôle après mise à jour",
            ],
            [
              "Sauvegardes externalisées + tests de restauration",
              "Selon la fréquence de changement des données",
              "Copie externalisée et restauration testée",
            ],
            [
              "Surveillance disponibilité (uptime) + sécurité",
              "Surveillance automatisée selon les horaires convenus",
              "Alerte reçue, responsable nommé et action consignée",
            ],
            [
              "Correctifs (bugs, formulaires, incompatibilités)",
              "À la demande ou temps réservé",
              "Mode de décompte, plafond et accord avant dépassement",
            ],
            [
              "Licences d'extensions premium (WordPress)",
              "À chaque renouvellement",
              "Inventaire, titulaire, prix réel et sort des licences à la résiliation",
            ],
            [
              "Petites évolutions (banque d'heures)",
              "Banque d’heures ou devis séparé",
              "Taux convenu, arrondi et règle de report des heures",
            ],
            [
              "Compte rendu",
              "Mensuel",
              "La liste des contrôles, mises à jour et corrections effectués",
            ],
          ]}
        />
        <p>
          Un compte rendu simple vous permet de savoir ce qui a été mis à jour,
          sauvegardé, testé et corrigé. Demandez également les problèmes
          détectés et les décisions attendues de votre part.
        </p>

        <h2 id="wordpress-vs-statique">
          5. WordPress ou site sur mesure : quelle différence ?
        </h2>
        <p>
          WordPress repose sur son logiciel principal, un thème et des
          extensions à mettre à jour et à tester. Un site généré à l’avance avec
          React ou Next.js peut éviter la base de données et les extensions
          exposées au public lorsqu’il reste purement statique. Il conserve
          toutefois des dépendances logicielles, un hébergement et un processus
          de déploiement à surveiller. La technologie change donc la nature de
          l’entretien ; elle ne le fait pas disparaître.
        </p>
        <GuideTable
          headers={["Poste", "WordPress", "Site statique moderne (Next.js)"]}
          rows={[
            [
              "Forfait de maintenance",
              "Mises à jour du cœur, du thème et des extensions à tester.",
              "Dépendances et déploiements à contrôler selon le projet.",
            ],
            [
              "Licences et services",
              "Extensions et thème à inventorier.",
              "Services connectés et outils d’édition à inventorier.",
            ],
            [
              "Hébergement",
              "Compte, serveur et base de données à documenter.",
              "Compte, plateforme et configuration à documenter.",
            ],
            [
              "Risque à surveiller",
              "Extensions, thème, comptes et serveur",
              "Dépendances, déploiement, formulaires et services connectés",
            ],
          ]}
        />
        <p>
          Un WordPress bien tenu peut parfaitement convenir. Il demande
          simplement un entretien régulier différent de celui d’un site
          statique. Le coût initial ne suffit donc pas à départager les
          solutions. L&apos;usage d&apos;assistants IA dans le développement ne
          prouve ni une baisse générale de prix ni un délai universel.
        </p>
        <p>
          Sur cinq ans, comparez les mêmes postes : construction, hébergement,
          licences, maintenance, évolutions, temps interne et sortie. Pour un
          site professionnel, une base statique React/Next.js peut limiter
          certains besoins de mise à jour applicative. Notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link> détaille cette
          approche, et le comparatif par profil reste dans notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">
            comparatif Next.js ou WordPress
          </Link>{" "}
          — côté budget, c&apos;est un paramètre à poser dès le devis de
          création.
        </p>

        <h2 id="contrat">
          6. Écrivez les délais et responsabilités dans le contrat
        </h2>
        <p>
          Pour une application métier ou un logiciel sur mesure, utilisez le
          guide dédié au{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de tierce maintenance applicative
          </Link>
          . Il distingue l’alerte, l’intervention, la solution temporaire, le
          retour du service et la correction définitive. Il précise aussi qui
          agit et comment changer de prestataire.
        </p>
        <p>
          Un contrat de maintenance doit au minimum rendre lisibles le travail
          inclus — correctif, préventif, évolutif et exploitation —, les mises à
          jour, les sauvegardes et leurs tests, le support, les exclusions, le
          prix et sa révision, la résiliation, la responsabilité, les données et
          la manière de changer de prestataire.
        </p>
        <p>
          Si le prestataire traite des données personnelles pour votre compte,
          faites préciser son rôle et ses sous-traitants selon ce qu’il réalise
          vraiment. Un simple accès technique ne dispense pas de cette analyse.
        </p>
        <p>
          Certains devis parlent de SLA, de GTI ou de GTR pour les engagements
          et les délais. Ne comparez pas les sigles : faites écrire les étapes
          attendues, de la réception de l’alerte à la correction définitive.
          Pour chacune, précisez les horaires couverts, le point de départ, les
          exclusions et ce qui se passe si le délai est dépassé. Il n’existe pas
          de délai type adapté à toutes les entreprises.
        </p>
        <p>
          Même vigilance sur la disponibilité promise par l&apos;hébergement :
          le pourcentage ne se lit qu&apos;avec sa période, sa méthode de
          mesure, ses exclusions et ses conséquences. À titre de conversion
          arithmétique, 99,9 % sur une année complète représente environ{" "}
          <strong>8 h 46</strong> de temps hors disponibilité, contre environ{" "}
          <strong>53 minutes</strong>
          pour 99,99 %. Ce calcul ne dit pas que ces niveaux sont des standards,
          ni que chaque interruption sera indemnisée. Pour un site critique,
          confrontez l&apos;engagement de l&apos;hébergeur à celui du mainteneur
          et aux besoins réels de l&apos;entreprise.
        </p>
        <InfoBox
          variant="amber"
          title="Quatre points à rendre concrets dans le contrat"
        >
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              <strong>Les heures non utilisées.</strong> Écrivez si elles sont
              perdues ou reportées, comment elles sont arrondies et ce qui se
              passe en cas d’urgence ou de dépassement.
            </li>
            <li>
              <strong>La sortie imprécise.</strong> Durée, renouvellement,
              préavis, assistance et coûts doivent pouvoir être relus avant la
              signature.
            </li>
            <li>
              <strong>Le travail inclus.</strong> Distinguez correctif,
              préventif, évolutif, support et exploitation, avec un exemple et
              une exclusion pour chaque famille.
            </li>
            <li>
              <strong>Le changement de prestataire.</strong> Listez accès,
              fichiers, sauvegardes, licences, données, documentation, formats
              et contrôle de la remise.
            </li>
          </ul>
        </InfoBox>
        <p>
          Si vous préparez déjà la sortie, ne retirez pas l’ancien prestataire
          dès la fin du préavis. Suivez l’ordre proposé dans le guide pour{" "}
          <Link href="/guides/reprendre-maintenance-site-autre-agence">
            changer d’agence de maintenance en gardant le site, les e-mails et
            les demandes clients sous contrôle
          </Link>
          .
        </p>

        <h2 id="diy">
          7. Calculez le coût seul ou avec une plateforme hébergée
        </h2>
        <p>
          Oui, un dirigeant peut entretenir lui-même un site vitrine simple s’il
          possède les compétences et réserve réellement du temps. Une estimation
          éditoriale Hagnéré de <strong>2 à 4 heures par mois</strong> peut
          servir au premier calcul, mais mesurez ensuite votre charge réelle :
          elle varie avec la technologie, les tests et les incidents. Des outils
          comme ManageWP et MainWP publient leurs propres tarifs, à vérifier au
          moment du calcul. Ajoutez-les au coût d&apos;opportunité :
        </p>
        <FormulaBox>
          <strong>
            Coût réel du « je m&apos;en occupe » = heures passées × valeur de
            votre heure
          </strong>
          <br />
          Hypothèse purement illustrative : temps réellement mesuré × valeur
          interne choisie = coût d&apos;opportunité. Remplacez ces deux
          variables par les vôtres et ajoutez le coût des outils et de
          l&apos;escalade.
          <br />
          <br />
          Et le vrai risque n&apos;est pas là : il est dans la régularité. Une
          tâche sans responsable, calendrier ni résultat noté risque d&apos;être
          oubliée ; définissez ces éléments explicitement.
        </FormulaBox>
        <p>
          Faire soi-même peut convenir à un site simple. Dès que le site génère
          des contacts ou des ventes — comme dans l’exemple fictif présenté plus
          haut —, la question n&apos;est plus « puis-je le faire ? » mais «
          est-ce le meilleur usage de mes heures, avec ce niveau de risque ? ».
          La réponse dépend des compétences, de l&apos;enjeu du site et
          d&apos;une solution d&apos;escalade disponible.
        </p>

        <h3 id="duree">Combien de temps dure la maintenance ?</h3>
        <p>
          Il faut distinguer la durée d’une intervention, le temps consacré
          chaque mois et la durée du contrat.
        </p>
        <ul>
          <li>
            <strong>La durée d&apos;une opération.</strong> Les ordres de
            grandeur cités dans les offres vont de quelques dizaines de minutes
            pour une petite correction à plusieurs heures pour un lot de mises à
            jour. Une restauration ou une nouvelle fonction doit être chiffrée
            après diagnostic.
          </li>
          <li>
            <strong>Le temps récurrent.</strong> Mesurez la charge réelle sur
            plusieurs cycles. Une boutique peut demander davantage de tests et
            de surveillance avant les périodes importantes.
          </li>
          <li>
            <strong>La durée du contrat.</strong> Les offres peuvent être avec
            ou sans engagement. Lisez le renouvellement et le préavis. Le besoin
            d’entretien, lui, existe tant que le site reste en service ; une
            refonte ne fait que repartir avec une nouvelle base. Notre{" "}
            <Link href="/guides/prix-refonte-site-internet">
              guide du prix d&apos;une refonte
            </Link>{" "}
            aide à comparer les deux décisions, et notre{" "}
            <Link href="/guides/refonte-sans-perdre-son-seo">
              guide « refondre sans perdre son SEO »
            </Link>{" "}
            sécurise le moment venu.
          </li>
        </ul>

        <h3 id="saas">Ce qui reste à entretenir sur Shopify ou Wix</h3>
        <p>
          Shopify, Wix ou Squarespace entretiennent leurs serveurs et leur
          logiciel principal. Cet avantage est compris dans l’abonnement. Votre
          entreprise reste toutefois responsable du thème, des applications
          ajoutées, des connexions à l’emailing, à la comptabilité ou à la
          logistique, ainsi que du contenu et des réglages de conformité. Une
          boutique active peut donc nécessiter du temps interne ou un
          prestataire, même si la plateforme elle-même est maintenue. Notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">
            comparatif Shopify ou sur-mesure
          </Link>{" "}
          intègre ce poste dans le coût total, et notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">
            comparatif WooCommerce ou Shopify
          </Link>{" "}
          met face à face les deux modèles d&apos;entretien.
        </p>
        <p>
          Le bon calcul additionne l’abonnement, les applications et le temps
          consacré à votre boutique.
        </p>

        <h2 id="methode">8. Choisissez votre contrat en cinq étapes</h2>
        <ol>
          <li>
            <strong>Évaluez l&apos;enjeu, pas seulement le site.</strong>{" "}
            Mesurez les commandes, contacts et opérations dépendant du site. Ces
            données aident à définir les délais attendus, contrairement au seul
            nombre de pages.
          </li>
          <li>
            <strong>Choisissez le niveau d’accompagnement.</strong>{" "}
            Automatisation seule pour un site peu critique, contrôle humain
            lorsqu’il génère des demandes, et délais contractuels lorsque chaque
            panne a un coût élevé.
          </li>
          <li>
            <strong>Comparez les devis poste par poste</strong> avec le tableau
            de la section 5 — mises à jour testées, sauvegardes externalisées
            avec tests, licences incluses ou non, heures de correctifs et leur
            report.
          </li>
          <li>
            <strong>Exigez quatre réponses écrites</strong> : travail inclus,
            délais d’intervention et de rétablissement, remise des fichiers et
            des accès, puis compte rendu mensuel.
          </li>
          <li>
            <strong>Traitez la cause, pas seulement le symptôme.</strong> Si
            votre facture de maintenance explose ou si les incidents se
            répètent, le problème est peut-être la base technique — auquel cas
            le budget peut être mieux investi dans une refonte que dans des
            réparations répétées sur une base devenue trop coûteuse.
          </li>
        </ol>
        <p>
          Si votre site est déjà indisponible, commencez par notre fiche réflexe
          «{" "}
          <Link href="/guides/site-internet-en-panne-que-faire">
            site internet en panne : que faire maintenant ?
          </Link>{" "}
          » : elle vous aide à noter les faits, choisir le bon interlocuteur et
          vérifier le retour avant de discuter d’un contrat futur.
        </p>
        <p>
          C&apos;est la logique de notre offre de{" "}
          <Link href="/services/maintenance-evolution">
            maintenance et évolution
          </Link>{" "}
          : un forfait mensuel au contenu écrit, des délais contractuels et une
          remise organisée des accès et des fichiers. Pour situer ce budget dans
          le coût complet d&apos;un site, notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            panorama des prix d&apos;un site internet
          </Link>{" "}
          complète ce guide.
        </p>

        <GuideInlineCTA
          title="Savoir quel niveau de maintenance votre site nécessite"
          description="Indiquez la technologie du site, son rôle dans vos ventes et le contrat actuel. Nous vous aidons à identifier les mises à jour, sauvegardes, contrôles et délais réellement nécessaires, puis à chiffrer un forfait adapté."
          tags={[
            "Tâches clairement incluses",
            "Délai d’intervention écrit",
            "Accès et sauvegardes récupérables",
          ]}
        />

        <hr />
        <p className="text-sm">
          <strong>Sources et méthode.</strong> Les six pages tarifaires liées
          dans la section 1 ont été consultées le 21 juillet 2026. Les montants
          sont ceux publiés par les prestataires eux-mêmes ; nous n’avons ni
          testé ni classé leurs services. L’échantillon n’est pas représentatif,
          les périmètres ne sont pas homogènes et les prix peuvent évoluer. Les
          outils cités pour l’option interne ont aussi des pages tarifaires
          publiques :{" "}
          <a
            href="https://managewp.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            ManageWP
          </a>{" "}
          /{" "}
          <a
            href="https://mainwp.com/pricing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MainWP
          </a>{" "}
          . Vérifiez toujours la page et le devis daté avant de signer.
        </p>
        <p className="text-sm">
          <em>
            L’exemple de la fromagerie est fictif et sert uniquement à poser les
            questions de coût et de délai. Les prestataires nommés le sont au
            titre de leurs tarifs publics, sans recommandation ni partenariat.
            Ce guide ne constitue pas un conseil juridique personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
