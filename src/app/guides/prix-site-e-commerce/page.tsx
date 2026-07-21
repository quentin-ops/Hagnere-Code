import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("prix-site-e-commerce");

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
      "E-commerce",
      "Next.js",
      "React",
      "SEO technique",
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
      name: "Prix d'un site e-commerce",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte un site e-commerce en 2026 ?",
    answer:
      "Pour préparer une consultation, les scénarios Hagnéré de ce guide retiennent 1 500 à 5 000 € pour une petite boutique sur une plateforme, 5 000 à 18 000 € pour une boutique de PME et 15 000 à 50 000 € lorsque le catalogue ou les connexions deviennent complexes. Ce ne sont ni des moyennes de marché ni un devis.",
  },
  {
    question: "Quel budget mensuel prévoir après la mise en ligne ?",
    answer:
      "Ajoutez l’abonnement ou l’hébergement, les applications, la maintenance, le paiement, l’acquisition et la logistique. Demandez un chiffrage sur douze mois avec votre catalogue, votre volume de commandes et le niveau d’assistance attendu : un montant mensuel générique serait trompeur.",
  },
  {
    question: "Shopify ou WooCommerce : lequel coûte le moins cher ?",
    answer:
      "Shopify regroupe davantage de services dans un abonnement ; WooCommerce laisse plus de liberté mais demande hébergement et maintenance. Comparez les coûts sur trois ans avec les mêmes fonctions, le même trafic et le temps de votre équipe.",
  },
  {
    question: "Combien coûtent les paiements par carte ?",
    answer:
      "Les prestataires facturent généralement un pourcentage plus un montant fixe par transaction. Le tarif dépend du type de carte, du pays, du moyen de paiement et parfois du forfait de la boutique. Ce guide donne des exemples datés ; vérifiez toujours la grille officielle correspondant à votre transaction.",
  },
  {
    question: "Combien de temps faut-il pour créer la boutique ?",
    answer:
      "Pour planifier, ce guide utilise 3 à 8 semaines pour une boutique simple sur plateforme et 2 à 4 mois pour une boutique de PME avec reprise de catalogue et connexions. Ce sont des scénarios de travail, pas des délais garantis ; les contenus produit et les validations peuvent les déplacer.",
  },
  {
    question: "Quand faut-il envisager du sur-mesure ?",
    answer:
      "Lorsque des règles de vente, des intégrations ou une expérience d’achat importantes ne rentrent pas proprement dans les plateformes disponibles. Le sur-mesure doit résoudre un besoin chiffré ; il n’est pas une obligation pour une boutique ambitieuse.",
  },
  {
    question: "Combien coûte une refonte e-commerce ?",
    answer:
      "Dans les scénarios de préparation de ce guide, une refonte limitée commence autour de 5 000 €. Une migration de catalogue avec connexions et protection du référencement est située entre 15 000 et 50 000 €. Ces hypothèses doivent être remplacées par l’inventaire et le devis de votre boutique.",
  },
  {
    question: "Comment savoir si la boutique sera rentable ?",
    answer:
      "Partez de la marge par commande, puis retirez paiement, préparation, livraison, retours, publicité et fonctionnement du site. Le chiffre d’affaires seul ne permet pas de juger la rentabilité.",
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
          { label: "Prix d'un site e-commerce" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Quel budget prévoir pour vendre en ligne ? Comparez quatre types de boutiques et additionnez séparément création, fonctionnement, paiement, acquisition, contenus et logistique."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Création : 1 500 – 50 000 €+",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "5 budgets à additionner",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 commerces comparés",
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
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          {
            href: "/ressources/kit-cahier-des-charges-site-internet",
            label: "Modèle de cahier des charges",
          },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Prix d'un site e-commerce : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous voulez vendre en ligne et vous cherchez un budget réaliste avant
          de demander des devis.{" "}
          <strong>
            Pour préparer vos premiers devis, nos scénarios situent une petite
            boutique sur une plateforme entre 1 500 et 5 000 € ; une boutique de
            PME entre 5 000 et 18 000 € ; un projet complexe entre 15 000 et 50
            000 €.
          </strong>{" "}
          Mais ce prix ne couvre qu’une partie du projet. Il faut aussi financer
          le fonctionnement, les paiements, la recherche de clients, les
          contenus produit et la logistique. Ce guide sépare ces postes pour que
          vous puissiez comparer deux devis sans confondre le prix du site avec
          le budget du commerce.
        </p>

        <InfoBox variant="blue" title="Le calcul à retenir">
          Budget de départ = création du site + préparation du catalogue +
          connexions nécessaires. Budget annuel = plateforme ou hébergement +
          maintenance + applications + paiement + acquisition + logistique. Une
          boutique moins chère à construire peut coûter davantage à exploiter ;
          l’inverse est aussi possible.
        </InfoBox>

        <p>
          Ces montants sont des <strong>repères éditoriaux Hagnéré Code</strong>
          , construits à partir des périmètres décrits ci-dessous. Ils ne
          constituent ni une moyenne représentative du marché, ni nos tarifs, ni
          une promesse de prix. Leur rôle est de vous aider à repérer les postes
          à faire chiffrer sur le même périmètre.
        </p>

        <GuideToc
          items={[
            {
              id: "quatre-boutiques",
              label: "1. Quatre boutiques, quatre budgets",
            },
            { id: "creation", label: "2. Ce que finance le prix de création" },
            {
              id: "fonctionnement",
              label: "3. Le fonctionnement après le lancement",
            },
            { id: "paiement", label: "4. Les frais sur chaque paiement" },
            {
              id: "acquisition",
              label: "5. Le budget pour attirer des clients",
            },
            {
              id: "logistique",
              label: "6. Catalogue, stock, livraison et retours",
            },
            { id: "plateforme", label: "7. Choisir la plateforme adaptée" },
            { id: "devis", label: "8. Lire un devis ligne par ligne" },
            {
              id: "rentabilite",
              label: "9. Vérifier la rentabilité avant de construire",
            },
            {
              id: "obligations",
              label: "10. Prévoir les obligations applicables",
            },
            {
              id: "refonte",
              label: "11. Refonte et changement de prestataire",
            },
            { id: "decision", label: "12. Construire votre budget" },
          ]}
        />

        <h2 id="quatre-boutiques">
          1. Quatre boutiques reconnaissables et leurs budgets
        </h2>

        <p>
          Le nombre de produits ne suffit pas à déterminer le prix. Cinquante
          références avec un configurateur peuvent coûter plus cher que cinq
          cents produits bien structurés dans un fichier. Commencez par le
          fonctionnement réel du commerce.
        </p>

        <h3>Une créatrice lance 35 produits et prépare elle-même les colis</h3>

        <p>
          Elle veut tester la demande, accepter la carte, proposer deux modes de
          livraison et gérer seule les fiches produit. Une plateforme avec un
          thème adapté est généralement suffisante.{" "}
          <strong>Création : environ 1 500 à 5 000 €.</strong> Il faut ajouter
          les photos, les textes, l’abonnement, le paiement et le budget
          nécessaire pour faire connaître la boutique.
        </p>

        <h3>Un commerçant établi met 300 références en ligne</h3>

        <p>
          Il possède déjà un magasin, un stock et une caisse. Le site doit
          éviter les doubles ventes, reprendre le catalogue, organiser le
          retrait en boutique et former l’équipe.{" "}
          <strong>Création : environ 5 000 à 18 000 €</strong>, selon la qualité
          des données et la connexion au stock. Le travail principal n’est plus
          seulement le design : c’est la fiabilité des produits, prix et
          commandes.
        </p>

        <h3>
          Un distributeur vend aux professionnels avec des tarifs par client
        </h3>

        <p>
          Les acheteurs doivent se connecter, retrouver leur grille tarifaire,
          commander en volume et transmettre les données au logiciel de gestion.
          <strong>Création : environ 15 000 à 50 000 €</strong> lorsque
          plusieurs règles et connexions sont nécessaires. Une plateforme
          équipée d’extensions peut convenir ; une solution spécifique mérite
          d’être comparée si les contournements deviennent nombreux.
        </p>

        <h3>
          Une entreprise construit une marketplace ou une expérience d’achat
          propre
        </h3>

        <p>
          Plusieurs vendeurs, commissions internes, configurateur avancé,
          abonnements complexes ou parcours très particulier changent la nature
          du projet.{" "}
          <strong>
            Le budget peut commencer autour de 45 000 € et dépasser 100 000 €.
          </strong>{" "}
          Ces montants ne signifient pas que le sur-mesure est toujours
          préférable : il faut comparer une plateforme spécialisée, une approche
          hybride et un développement dédié sur le même périmètre.
        </p>

        <GuideTable
          headers={[
            "Commerce",
            "Création indicative",
            "Principal facteur de coût",
          ]}
          rows={[
            [
              "Petit catalogue standard",
              "1 500 – 5 000 €",
              "Contenus et configuration",
            ],
            [
              "PME avec stock ou magasin",
              "5 000 – 18 000 €",
              "Catalogue et synchronisation",
            ],
            [
              "Vente B2B ou connexions multiples",
              "15 000 – 50 000 €",
              "Règles métier et intégrations",
            ],
            [
              "Marketplace ou grand projet spécifique",
              "45 000 – 120 000 €+",
              "Fonctions, rôles et exploitation",
            ],
          ]}
        />

        <p>
          Ces fourchettes reprennent les scénarios éditoriaux annoncés en début
          de guide. Elles permettent de préparer une enveloppe et de comprendre
          un devis ; elles ne décrivent pas un prix médian du marché. Remplacez
          chaque repère par un montant écrit lorsque le catalogue, les données,
          les connexions et les responsabilités sont connus.
        </p>

        <h2 id="creation">2. Ce que finance réellement le prix de création</h2>

        <p>
          Un devis de boutique ne devrait pas se résumer à « installation
          Shopify » ou « développement WooCommerce ». Il doit montrer qui
          prépare chaque élément nécessaire à la première commande.
        </p>

        <GuideTable
          headers={["Travail", "Ce qu’il comprend", "Question à poser"]}
          rows={[
            [
              "Cadrage",
              "Objectifs, catalogue, parcours, pays, paiement et livraison",
              "Quelles décisions seront prises avant les écrans ?",
            ],
            [
              "Contenus produit",
              "Structure, textes, photos, variantes et documents",
              "Qui fournit, corrige et importe les données ?",
            ],
            [
              "Design et intégration",
              "Pages, mobile, navigation, panier et compte client",
              "Quelles pages sont maquettées avec de vrais contenus ?",
            ],
            [
              "Fonctions et connexions",
              "Paiement, stock, transport, facturation et outils internes",
              "Qu’est-ce qui est standard, configuré ou développé ?",
            ],
            [
              "Mise en ligne",
              "Tests, domaine, mesure, redirections et formation",
              "Qui vérifie une commande complète avant l’ouverture ?",
            ],
          ]}
        />

        <p>
          Un thème est une présentation déjà préparée que l’on adapte à la
          marque. Il permet de concentrer le budget sur le catalogue et les
          opérations. Une conception graphique complète ajoute des maquettes et
          composants propres au projet. Les deux peuvent être professionnels si
          le devis nomme clairement le travail.
        </p>

        <h2 id="fonctionnement">
          3. Le site continue de coûter après la mise en ligne
        </h2>

        <p>
          Une boutique est un outil d’exploitation. Elle reçoit des mises à
          jour, de nouveaux produits, des demandes clients et parfois des pics
          de trafic. Son coût annuel dépend de la plateforme et de la personne
          responsable.
        </p>

        <p>
          Le tableau suivant prolonge les scénarios éditoriaux du guide. Il sert
          à réserver une enveloppe, pas à annoncer un prix de marché : remplacez
          chaque ligne par le tarif du fournisseur et le contrat de maintenance
          réellement envisagés.
        </p>

        <GuideTable
          headers={[
            "Poste annuel",
            "Ordre de grandeur",
            "Ce qui fait varier le prix",
          ]}
          rows={[
            [
              "Plateforme ou hébergement",
              "300 – 3 500 €+",
              "Trafic, stockage, formule et niveau de service",
            ],
            [
              "Applications ou extensions",
              "0 – 5 000 €+",
              "Abonnement, fidélité, recherche, livraison, multilingue",
            ],
            [
              "Maintenance technique",
              "600 – 6 000 €+",
              "Solution, trafic, surveillance et délai d’intervention",
            ],
            [
              "Évolutions",
              "500 – 5 000 €+",
              "Nouvelles fonctions et amélioration continue",
            ],
          ]}
        />

        <p>
          Shopify inclut l’hébergement et la maintenance de sa plateforme dans
          l’abonnement, mais les applications se paient souvent chaque mois.
          WooCommerce et PrestaShop demandent un hébergement et une maintenance
          organisés. Une solution spécifique exige aussi une responsabilité
          claire pour la surveillance, les sauvegardes et les évolutions.
        </p>

        <p>
          Comparez sur trois ans, avec les mêmes fonctions et le temps interne.
          Notre guide du{" "}
          <Link href="/guides/cout-maintenance-site-internet">
            coût de la maintenance
          </Link>{" "}
          détaille ce que doit couvrir un contrat.
        </p>

        <h2 id="paiement">4. Chaque paiement comporte des frais</h2>

        <p>
          Le prestataire de paiement est l’entreprise qui encaisse la carte puis
          verse l’argent sur votre compte. Il facture généralement un
          pourcentage de la commande et un montant fixe. Les exemples ci-dessous
          ont été relevés en juillet 2026 sur les pages officielles de{" "}
          <a
            href="https://stripe.com/fr/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe
          </a>
          ,{" "}
          <a
            href="https://www.shopify.com/fr/tarifs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify
          </a>
          ,{" "}
          <a
            href="https://www.mollie.com/fr/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mollie
          </a>{" "}
          et{" "}
          <a
            href="https://www.paypal.com/fr/business/paypal-business-fees"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal
          </a>
          .
        </p>

        <GuideTable
          headers={[
            "Solution observée en France",
            "Cartes européennes",
            "Point à vérifier",
          ]}
          rows={[
            [
              "Stripe",
              "1,5 % + 0,25 €",
              "Cartes étrangères, conversion et litiges",
            ],
            [
              "Shopify Payments",
              "Environ 1,1 à 1,5 % + 0,25 €",
              "Taux selon le forfait",
            ],
            ["Mollie", "Environ 1,2 % + 0,25 €", "Moyen de paiement et pays"],
            [
              "PayPlug",
              "Selon l’offre et le moyen de paiement",
              "Demander la grille applicable",
            ],
            [
              "PayPal",
              "Environ 2,9 % + 0,35 €",
              "Barème et type de transaction",
            ],
          ]}
        />

        <p>
          Les grilles changent : vérifiez les pages officielles avant de signer.
          Les cartes hors Europe, les devises et les contestations peuvent
          coûter davantage. Shopify peut également facturer des frais
          supplémentaires si un prestataire externe est utilisé selon le forfait
          choisi.
        </p>

        <p>
          Pour estimer ce poste, multipliez le chiffre d’affaires payé en ligne
          par le taux, puis ajoutez le montant fixe pour chaque commande. Avec
          de petits paniers, les 0,25 € pèsent davantage. Avec un chiffre
          d’affaires élevé, une différence de quelques dixièmes de point mérite
          une négociation.
        </p>

        <h2 id="acquisition">
          5. Le site ne crée pas automatiquement son trafic
        </h2>

        <p>
          Une boutique peut être techniquement réussie et ne recevoir presque
          aucun visiteur. Le budget d’acquisition finance ce qui fait connaître
          l’offre : référencement naturel, publicité, partenariats, réseaux
          sociaux, emailing ou places de marché.
        </p>

        <p>
          Évitez d’appliquer un pourcentage universel. Une marque connue, un
          commerce avec une clientèle locale et un lancement sans audience n’ont
          pas le même besoin. Construisez trois scénarios :
        </p>

        <ul>
          <li>
            trafic déjà existant grâce au magasin, à une communauté ou à un site
            actuel ;
          </li>
          <li>
            progression par contenus et référencement sur plusieurs mois ;
          </li>
          <li>
            achat de visibilité avec un plafond et une mesure des ventes
            réelles.
          </li>
        </ul>

        <p>
          Les dépenses publicitaires ne doivent pas être mélangées au devis de
          création. Demandez néanmoins qui prépare les pages, installe la mesure
          et transmet les informations nécessaires pour relier une campagne à
          une commande.
        </p>

        <h2 id="logistique">
          6. Catalogue, stock, livraison et retours peuvent dépasser le prix du
          site
        </h2>

        <p>
          La logistique regroupe le stockage, la préparation, l’emballage, le
          transport, les retours et le service client. Calculez-la avec vos
          contrats, le poids réel des colis, le temps de préparation et le taux
          de retour observé. Un pourcentage générique du chiffre d’affaires
          masquerait les écarts entre des produits légers, fragiles ou
          volumineux.
        </p>

        <h3>Le catalogue est un projet à part entière</h3>

        <p>
          Cent produits demandent des titres, descriptions, caractéristiques,
          photos, prix, stocks, variantes, poids et informations réglementaires
          cohérents. Testez d’abord dix références représentatives : mesurez le
          temps de nettoyage, de rédaction, de photographie et de validation,
          puis appliquez ce coût aux différentes familles de produits. Des
          données propres réduisent le travail ; un fichier incomplet
          l’augmente.
        </p>

        <h3>Une commande doit être testée jusqu’au remboursement</h3>

        <p>
          Avant l’ouverture, réalisez une commande avec chaque moyen de
          paiement, vérifiez le stock, l’email, l’étiquette de transport, la
          facture, l’annulation et le remboursement. Le client ne voit pas les
          connexions techniques ; il voit seulement si sa commande arrive et si
          son problème est traité.
        </p>

        <h2 id="plateforme">
          7. Shopify, WooCommerce, PrestaShop ou solution spécifique ?
        </h2>

        <GuideTable
          headers={[
            "Situation",
            "Solution à comparer",
            "Contrepartie principale",
          ]}
          rows={[
            [
              "Lancement rapide, catalogue standard, peu de technique en interne",
              "Shopify",
              "Abonnement, applications et cadre de la plateforme",
            ],
            [
              "Site WordPress existant et stratégie de contenus",
              "WooCommerce",
              "Maintenance, hébergement et extensions à organiser",
            ],
            [
              "Commerce déjà équipé de PrestaShop",
              "Faire durer ou refondre PrestaShop",
              "Évaluer l’existant avant toute migration",
            ],
            [
              "Règles de vente ou intégrations vraiment particulières",
              "Plateforme spécialisée, hybride ou sur-mesure",
              "Comparer le coût des contournements au coût d’une conception dédiée",
            ],
          ]}
        />

        <p>
          Le terme « headless » désigne une vitrine séparée du moteur qui gère
          les produits et commandes. Cette architecture peut améliorer la
          liberté de conception ou certaines intégrations ; elle ajoute aussi
          des éléments à maintenir. Elle n’est ni une garantie de vitesse ni le
          choix naturel de toute entreprise établie.
        </p>

        <p>
          Les comparatifs{" "}
          <Link href="/guides/woocommerce-ou-shopify">
            WooCommerce ou Shopify
          </Link>{" "}
          et{" "}
          <Link href="/guides/shopify-ou-sur-mesure">
            Shopify ou e-commerce sur mesure
          </Link>{" "}
          approfondissent ces décisions.
        </p>

        <h2 id="devis">
          8. Un devis utile montre ce qui est inclus et ce qui reste à votre
          charge
        </h2>

        <p>
          Voici un exemple illustratif pour une PME avec environ 250 produits,
          un paiement par carte, deux transporteurs et une reprise de catalogue.
          Ce n’est ni un prix moyen ni un devis commercial.
        </p>

        <GuideTable
          headers={["Poste", "Fourchette illustrative", "À vérifier"]}
          rows={[
            [
              "Cadrage et parcours",
              "800 – 1 800 €",
              "Catalogue, livraison, rôles et objectifs",
            ],
            [
              "Design et intégration",
              "2 000 – 5 000 €",
              "Pages réellement maquettées",
            ],
            [
              "Catalogue et import",
              "1 000 – 4 000 €",
              "Qualité des données et corrections",
            ],
            [
              "Paiement et livraison",
              "1 000 – 3 000 €",
              "Contrats et scénarios testés",
            ],
            [
              "Tests, formation et mise en ligne",
              "800 – 2 000 €",
              "Commandes complètes et responsabilités",
            ],
          ]}
        />

        <p>
          Total illustratif : <strong>5 600 à 15 800 €</strong>, avant
          production importante de photos, connexion complexe à un logiciel de
          gestion ou publicité. Demandez un montant séparé pour chaque option
          afin de pouvoir réduire le périmètre sans fragiliser le lancement.
        </p>

        <GuideInlineCTA
          title="Vous voulez vérifier le budget complet de votre boutique ?"
          description="Décrivez le catalogue, les outils existants, les modes de livraison et le chiffre d’affaires visé. Nous séparons le coût du site, son fonctionnement et les postes commerciaux afin que vous puissiez comparer les options sur le même périmètre."
          tags={[
            "Budget de départ et annuel séparés",
            "Plateformes comparées sans choix imposé",
            "Postes manquants signalés avant devis",
          ]}
        />

        <h2 id="rentabilite">
          9. Calculez la marge par commande avant le chiffre d’affaires
        </h2>

        <p>
          La FEVAD a mesuré 196,4 milliards d’euros dépensés en ligne en France
          en 2025. Ce marché important ne garantit pas la rentabilité d’une
          nouvelle boutique. Votre calcul doit partir d’une commande réelle.
        </p>

        <p>
          Pour un panier de 62 €, retirez successivement le coût du produit, les
          frais de paiement, la préparation, l’emballage, la livraison
          éventuellement offerte, les retours moyens et le coût d’acquisition du
          client. Ce qui reste doit encore contribuer aux salaires, au
          fonctionnement du site et aux autres charges de l’entreprise.
        </p>

        <InfoBox
          variant="blue"
          title="Trois nombres à connaître avant le projet"
        >
          La marge réellement disponible par commande, le coût acceptable pour
          obtenir un nouveau client et le nombre de commandes nécessaires pour
          couvrir les coûts fixes. Sans ces nombres, un objectif de chiffre
          d’affaires ne permet pas de choisir le bon budget technique ou
          publicitaire.
        </InfoBox>

        <h2 id="obligations">
          10. Faites écrire les obligations dans le devis
        </h2>

        <p>
          Le devis doit préciser qui prépare et intègre les mentions légales,
          les conditions de vente, la politique de confidentialité, la gestion
          des traceurs, les informations produit et les parcours liés à la
          rétractation. Leur contenu doit être validé pour votre activité ; une
          agence technique ne remplace pas un conseil juridique.
        </p>

        <p>
          L’accessibilité de certains services de commerce électronique est
          concernée par les règles issues de la directive européenne, avec des
          exceptions et conditions à vérifier. La facturation électronique
          française suit également un calendrier progressif. Les sources France
          Num et Service-Public citées en fin de guide doivent être relues au
          moment du projet.
        </p>

        <p>
          Une fonction de rétractation en ligne et les règles relatives aux
          cookies peuvent aussi modifier les écrans et les tests. Ne les ajoutez
          pas la veille de l’ouverture : nommez le responsable de chaque contenu
          et de chaque validation dans le devis.
        </p>

        <h2 id="refonte">
          11. Une refonte e-commerce ajoute le coût de la migration
        </h2>

        <p>
          Refaire une boutique implique davantage que recréer les pages. Il faut
          reprendre les produits, comptes clients, commandes utiles, avis,
          contenus, règles de livraison et connexions. Les mots de passe, thèmes
          et réglages d’applications ne se transfèrent pas toujours directement.
        </p>

        <p>
          Dans nos scénarios de préparation, une refonte limitée commence autour
          de 5 000 €. Une migration de catalogue avec nouvelles connexions et
          protection du référencement est située entre 15 000 et 50 000 €. Ces
          repères ne remplacent pas un devis : demandez un inventaire des
          données, un plan de correspondance des anciennes pages et une période
          de contrôle après l’ouverture.
        </p>

        <p>
          Le choix du prestataire dépend du risque : autonomie complète pour un
          test limité, freelance pour un périmètre maîtrisé, agence lorsque
          plusieurs métiers doivent être coordonnés. Aucun statut ne garantit à
          lui seul la qualité ; comparez les personnes réellement affectées, les
          livrables, les délais et la maintenance.
        </p>

        <h2 id="decision">12. Construisez votre budget en six étapes</h2>

        <ol>
          <li>
            Décrire l’un des quatre commerces de ce guide avec vos propres mots.
          </li>
          <li>
            Nettoyer un échantillon de produits avant d’estimer l’import
            complet.
          </li>
          <li>
            Lister paiement, livraison, stock, facturation et outils à
            connecter.
          </li>
          <li>
            Chiffrer séparément création, fonctionnement, acquisition et
            logistique.
          </li>
          <li>
            Calculer la marge disponible par commande et trois scénarios de
            vente.
          </li>
          <li>
            Comparer au moins deux solutions sur trois ans avec les mêmes
            hypothèses.
          </li>
        </ol>

        <p>
          Le{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges
          </Link>{" "}
          vous aide à préparer un périmètre comparable. Si votre besoin reste
          une présentation sans vente en ligne, le guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d’un site vitrine</Link>{" "}
          évite de financer une boutique inutile. Pour un ordre de grandeur plus
          large, consultez{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            combien coûte un site internet
          </Link>
          .
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide (consultées
          en juillet 2026) :{" "}
          <a
            href="https://www.shopify.com/fr/tarifs"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs officiels Shopify France
          </a>{" "}
          ;{" "}
          <a
            href="https://stripe.com/fr/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs Stripe France
          </a>{" "}
          ;{" "}
          <a
            href="https://www.mollie.com/fr/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs Mollie France
          </a>{" "}
          ;{" "}
          <a
            href="https://www.payplug.com/fr/tarifs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs PayPlug France
          </a>{" "}
          ;{" "}
          <a
            href="https://www.paypal.com/fr/business/paypal-business-fees"
            target="_blank"
            rel="noopener noreferrer"
          >
            frais marchands PayPal France
          </a>{" "}
          ;{" "}
          <a
            href="https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FEVAD, bilan du e-commerce en France 2025
          </a>{" "}
          ;{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/actualites/A15683"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service-Public, calendrier de la facturation électronique
          </a>{" "}
          ;{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-e-commerce/accessibilite-des-sites-de-e-commerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num, accessibilité des sites e-commerce
          </a>{" "}
          ; ordonnance n° 2026-2 du 5 janvier 2026 sur la fonction de
          rétractation en ligne. Les prix des plans et commissions ont été
          relevés sur les pages officielles en juillet 2026 : ils évoluent,
          vérifiez-les avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de création sont des scénarios éditoriaux Hagnéré
            Code destinés à préparer une consultation, pas des moyennes de
            marché ni nos tarifs. Seul un devis établi sur votre périmètre vous
            engage. Ce guide ne constitue pas un conseil juridique ou fiscal
            personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
