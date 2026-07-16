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
  wordCount: 4300,
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
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
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
    question: "Quel est le prix moyen d'un site e-commerce en France en 2026 ?",
    answer:
      "Les fourchettes qui font consensus sur le marché français : 1 500 à 5 000 € pour une boutique simple montée par un freelance sur Shopify ou WooCommerce, 5 000 à 18 000 € pour une boutique de PME en agence, 15 000 à 50 000 € pour un e-commerce complexe (gros catalogue, intégrations), et 45 000 € et bien au-delà pour du sur-mesure. Le budget médian constaté sur des projets réels est d'environ 15 000 € (baromètre La Fabrique du Net, 402 budgets).",
  },
  {
    question: "Combien coûte un site Shopify par mois ?",
    answer:
      "Les plans officiels 2026 en France : Basic 25 €/mois en facturation annuelle (36 €/mois en mensuel), Grow 66 €/mois (105 € en mensuel), Advanced 289 €/mois (384 € en mensuel), et Shopify Plus à partir de 2 100 €/mois. Ajoutez le vrai coût récurrent : les applications (30 à 150 €/mois pour une boutique standard, 300 à 600 €/mois pour un stack complet) et les frais de paiement (1,1 à 1,5 % + 0,25 € par transaction avec Shopify Payments).",
  },
  {
    question: "Est-ce que Shopify est payant ?",
    answer:
      "Oui. L'offre d'appel (essai gratuit de 3 jours puis 1 €/mois pendant 3 mois) est un prix de lancement, pas un prix de croisière : comptez ensuite 25 à 289 €/mois d'abonnement selon le plan, plus les applications et les frais de transaction. Et si vous utilisez un prestataire de paiement externe au lieu de Shopify Payments, Shopify prélève des frais supplémentaires de 0,2 à 2 % sur chaque vente selon le plan.",
  },
  {
    question: "Combien coûte un site WooCommerce ?",
    answer:
      "L'extension WooCommerce est gratuite, le site ne l'est pas : comptez 3 000 à 8 000 € chez un freelance et 8 000 à 20 000 € en agence pour une boutique professionnelle. Côté récurrent : hébergement renforcé (25 à 50 €/mois), extensions payantes (environ 400 €/an — WooCommerce Subscriptions coûte à lui seul 248 €/an), et maintenance de sécurité indispensable (600 à 1 800 €/an), WordPress étant le CMS le plus attaqué.",
  },
  {
    question: "Quelle plateforme e-commerce choisir en 2026 ?",
    answer:
      "Raisonnez business model, pas outil. Catalogue simple et time-to-market : Shopify (rapide, mais loyer + commissions à vie). Contenu et vente mêlés, budget serré : WooCommerce. Catalogue complexe et habitudes françaises : PrestaShop (19 % du marché national). Intégrations ERP/logistique, B2B, exigences de performance : sur-mesure headless (Next.js). Le bon choix dépend de votre catalogue, de votre CA cible à 3 ans et de votre système existant — pas de la mode.",
  },
  {
    question: "Combien coûte la maintenance d'un site e-commerce ?",
    answer:
      "La règle sectorielle : 10 à 20 % du coût de création par an. En pratique : 50 à 500 €/mois sur une solution open source (mises à jour, sécurité, sauvegardes, monitoring), 500 à 3 000 €/mois en TMA agence pour un site à fort trafic, plus 500 à 5 000 €/an d'évolutions fonctionnelles. Un e-commerce ne se « termine » jamais : c'est un commerce, il vit, ou il meurt.",
  },
  {
    question: "Quelles commissions bancaires paie-t-on sur un site e-commerce ?",
    answer:
      "À chaque vente. Les taux France 2026 : Stripe 1,5 % + 0,25 € (cartes européennes), Shopify Payments 1,1 à 1,5 % + 0,25 € selon le plan, Mollie environ 1,2 % + 0,25 € (CB françaises), PayPlug 1,4 % + 0,25 €, PayPal 2,9 % + 0,35 €. Pièges à connaître : cartes hors Europe jusqu'à 3,25 %, +2 % de conversion de devise, 20 € par litige chez Stripe. Sur 100 000 € de CA, ce poste représente 1 600 à 3 500 €/an.",
  },
  {
    question: "Combien de temps faut-il pour créer un site e-commerce ?",
    answer:
      "Boutique sur plateforme avec thème : 3 à 8 semaines. Boutique PME en agence (design propre, migration de données, intégrations simples) : 2 à 4 mois. E-commerce sur mesure ou headless avec connexion ERP/caisse : 3 à 6 mois. Le chemin critique n'est presque jamais la technique : ce sont vos contenus (photos, fiches produit) et la préparation du catalogue.",
  },
  {
    question: "Est-ce rentable d'ouvrir une boutique en ligne ?",
    answer:
      "Le marché est réel — les Français ont dépensé 196,4 milliards d'euros en ligne en 2025 (+7 %, FEVAD) — mais la rentabilité se calcule avant de construire : avec un taux de conversion médian de 1,5 à 3 % et un panier moyen de 62 €, il faut environ 80 000 visites pour faire 100 000 € de chiffre d'affaires. Comptez ensuite la logistique (15 à 25 % du CA), les commissions de paiement (~2 %) et le marketing (souvent 10 à 20 % du CA) : la boutique est rentable quand ce calcul l'est, pas quand le site est joli.",
  },
  {
    question: "Combien coûte un site e-commerce clé en main ?",
    answer:
      "Les offres « clé en main » à moins de 2 000 € livrent en général un thème standard rempli avec vos textes, sans stratégie, sans SEO et souvent en location (vous ne possédez rien). Un vrai clé en main professionnel — design, catalogue structuré, paiement, livraison, conformité, SEO de base — commence plutôt à 5 000 € chez un freelance sérieux et 8 000 € en agence. En dessous, demandez précisément ce qui est inclus, ligne par ligne.",
  },
  {
    question: "Quel budget pour se lancer en dropshipping ?",
    answer:
      "Le site lui-même est le petit poste : 500 à 3 000 € sur Shopify avec un thème. Le vrai budget est publicitaire : sans stock ni marque, tout le trafic s'achète, et la plupart des lanceurs dépensent 1 000 à 5 000 €/mois en publicité pour des marges laminées par les fournisseurs et les retours. C'est un modèle de test, rarement un modèle durable — méfiez-vous des formations qui vendent l'inverse.",
  },
  {
    question: "Combien coûte un site e-commerce sur mesure ?",
    answer:
      "De 15 000 à plus de 80 000 € selon le périmètre — catalogue, intégrations (ERP, caisse, logistique), B2B, multilingue. Chez Hagnéré Code, une plateforme e-commerce sur mesure (Next.js, front headless) va de 15 000 à 120 000 € au forfait fixe contractuel. Le sur-mesure se justifie quand la plateforme standard devient le problème : commissions cumulées, limites du catalogue, synchronisations impossibles — pas avant.",
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
          { label: "Prix d'un site e-commerce" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les grilles 2026 par plateforme (Shopify, WooCommerce, PrestaShop, sur-mesure), le coût total sur 3 ans, les commissions de paiement et la logistique enfin chiffrées, un devis d'agence décortiqué ligne à ligne — et les obligations légales 2026 qu'aucun devis ne mentionne."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Boutique simple : 1 500 – 5 000 €", description: "", color: "violet" },
          { number: "02", title: "PME : 5 000 – 25 000 €", description: "", color: "blue" },
          { number: "03", title: "Sur-mesure : 15 000 – 120 000 €", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/guides/cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Prix d'un site e-commerce : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Combien coûte <em>vraiment</em> un site e-commerce ? Pas seulement
          le devis de création : <strong>le coût sur 3 ans, commissions de
          paiement, logistique et obligations légales comprises</strong>.
          Nous chiffrons des boutiques en ligne toute l&apos;année — voici
          les grilles complètes, les pièges, et un devis réel décortiqué
          ligne à ligne.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les fourchettes 2026" },
            { id: "profils", label: "2. Le prix selon votre projet : 3 scénarios chiffrés" },
            { id: "plateformes", label: "3. Prix par plateforme : Shopify, WooCommerce, PrestaShop, sur-mesure" },
            { id: "tco", label: "4. Le vrai coût sur 3 ans (celui que les devis ne montrent pas)" },
            { id: "commissions", label: "5. Commissions de paiement : le poste invisible, enfin chiffré" },
            { id: "couts-caches", label: "6. Logistique, contenus, flux : les coûts que personne ne chiffre" },
            { id: "devis", label: "7. Un devis e-commerce réel, décortiqué ligne à ligne" },
            { id: "obligations-2026", label: "8. Ce que 2026 change dans le budget (échéances légales)" },
            { id: "rentabilite", label: "9. Combien rapporte un site e-commerce ? Le calcul honnête" },
            { id: "refonte", label: "10. Prix d'une refonte e-commerce" },
            { id: "prestataires", label: "11. Plateforme seul, freelance ou agence : qui choisir" },
            { id: "erreurs", label: "12. Les 6 erreurs qui font exploser la facture" },
            { id: "methode", label: "13. Méthode : payer le juste prix en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les fourchettes 2026</h2>
        <p>
          En 2026, un site e-commerce coûte{" "}
          <strong>1 500 à 5 000 € pour une boutique simple montée par un
          freelance sur Shopify ou WooCommerce, 5 000 à 18 000 € pour une
          boutique de PME réalisée en agence, 15 000 à 50 000 € pour un
          e-commerce complexe, et 45 000 € à plus de 100 000 € pour du
          sur-mesure ou une marketplace</strong>. Le budget médian constaté
          sur des projets réels : environ 15 000 € (baromètre La Fabrique du
          Net, 402 budgets analysés). À cela s&apos;ajoute un coût récurrent
          que la plupart des devis taisent : abonnements, commissions de
          paiement, maintenance et logistique.
        </p>
        <GuideTable
          headers={["Type de boutique", "Création", "Récurrent / an", "Pour qui"]}
          rows={[
            ["Boutique simple (< 50 produits, thème)", "1 500 – 5 000 €", "1 000 – 3 000 €", "Lancement, test de marché"],
            ["Boutique PME (50 – 500 produits, agence)", "5 000 – 18 000 €", "3 000 – 8 000 €", "Commerce établi qui passe en ligne"],
            ["E-commerce complexe (catalogue, intégrations)", "15 000 – 50 000 €", "6 000 – 15 000 €", "Gros catalogue, ERP, multicanal"],
            ["Sur-mesure / headless / marketplace", "45 000 – 120 000 €+", "10 000 – 30 000 €", "Volumétrie, B2B, différenciation produit"],
          ]}
        />
        <p>
          Ces fourchettes recoupent les grilles publiées par les acteurs de
          référence du marché français — et elles s&apos;expliquent : le prix
          d&apos;un e-commerce dépend moins du « site » que de votre
          catalogue, de vos flux (paiement, livraison, stock) et de ce à quoi
          il doit se connecter. C&apos;est tout l&apos;objet de ce guide.
        </p>

        <h2 id="profils">2. Le prix selon votre projet : 3 scénarios chiffrés</h2>
        <p>
          Les comparatifs raisonnent par plateforme ; c&apos;est l&apos;angle
          du vendeur de plateforme. Le bon angle, c&apos;est le vôtre :
          votre catalogue, votre chiffre d&apos;affaires cible, votre
          existant. Trois profils couvrent l&apos;essentiel des projets que
          nous recevons.
        </p>

        <h3>Scénario A — Vous lancez (moins de 50 produits)</h3>
        <p>
          Objectif : vendre vite, valider le marché, sans sur-investir.{" "}
          <strong>Budget réaliste : 2 500 à 6 000 € de création</strong>{" "}
          (Shopify ou WooCommerce avec un bon thème, montés par un freelance
          sérieux ou une petite agence), plus 1 000 à 3 000 €/an de récurrent
          (abonnement ou hébergement, quelques applications, maintenance
          légère). Le piège du profil A : oublier que les photos produit et
          les fiches ne s&apos;écrivent pas toutes seules — comptez le
          contenu dans le budget (section 6).
        </p>

        <h3>Scénario B — PME : un commerce établi passe (vraiment) en ligne</h3>
        <p>
          50 à 500 produits, une caisse ou un logiciel de gestion déjà en
          place, un chiffre d&apos;affaires en ligne visé à 6 chiffres.{" "}
          <strong>Budget réaliste : 8 000 à 25 000 € de création</strong> en
          agence — design propre, catalogue structuré, migration des données,
          première intégration (caisse, comptabilité, transporteur) — plus
          3 000 à 8 000 €/an de récurrent. C&apos;est le profil où les devis
          s&apos;écartent le plus (du simple au triple) : la différence se
          joue presque toujours sur les intégrations et la qualité du
          catalogue, pas sur le design.
        </p>

        <h3>Scénario C — Scale : volumétrie, B2B, intégrations lourdes</h3>
        <p>
          Plus de 1 000 références, un ERP, plusieurs canaux (site,
          marketplaces, magasins), des règles de prix B2B.{" "}
          <strong>Budget réaliste : 40 000 à 120 000 € et plus</strong>, en
          agence spécialisée ou en sur-mesure headless. À ce niveau, la
          plateforme standard devient souvent le problème (commissions
          cumulées, limites du modèle de données) et le sur-mesure devient
          rentable — pas avant. Une PME industrielle qui connecte son ERP se
          situe typiquement entre 12 000 et 22 000 € ; les projets
          multi-sites dépassent 80 000 €.
        </p>

        <h2 id="plateformes">3. Prix par plateforme : Shopify, WooCommerce, PrestaShop, sur-mesure</h2>
        <p>
          Les prix qui suivent viennent des pages tarifs officielles
          (relevées en juillet 2026) et des fourchettes constatées sur le
          marché français.
        </p>

        <h3>Shopify : le loyer + les commissions</h3>
        <p>
          Plans officiels France 2026 : <strong>Basic 25 €/mois</strong> en
          facturation annuelle (36 €/mois en mensuel),{" "}
          <strong>Grow 66 €/mois</strong> (105 €),{" "}
          <strong>Advanced 289 €/mois</strong> (384 €), et Shopify Plus à
          partir de 2 100 €/mois. Ajoutez un thème (gratuit à 400 $ en achat
          unique) et surtout les applications : 30 à 150 €/mois pour une
          boutique standard, 300 à 600 €/mois pour un stack de croissance —
          le fameux « app creep », le poste qui grossit sans bruit. Côté
          prestation : 2 500 à 12 000 € chez un freelance, 8 000 à 80 000 €
          en agence Shopify selon la complexité. Attention au double péage :
          si vous n&apos;utilisez pas Shopify Payments, Shopify prélève des
          frais supplémentaires de 0,2 à 2 % par vente selon le plan —{" "}
          <em>en plus</em> des frais de votre prestataire de paiement.
        </p>

        <h3>WooCommerce : gratuit, sauf tout le reste</h3>
        <p>
          L&apos;extension est gratuite ; la boutique professionnelle coûte{" "}
          <strong>3 000 à 8 000 € chez un freelance, 8 000 à 20 000 € en
          agence</strong>. Le récurrent est le vrai sujet : hébergement
          renforcé (25 à 50 €/mois), extensions payantes — environ 400 €/an,
          sachant que WooCommerce Subscriptions coûte à lui seul 248 €/an —
          et maintenance de sécurité indispensable (600 à 1 800 €/an),
          WordPress restant la cible n° 1 des attaques automatisées (notre
          comparatif <Link href="/guides/nextjs-ou-wordpress">Next.js ou
          WordPress</Link> chiffre ce risque). Fort pour mêler contenu et
          vente ; exigeant à maintenir.
        </p>

        <h3>PrestaShop : le champion français vieillissant</h3>
        <p>
          Toujours <strong>19,2 % du marché français</strong> (23 277
          boutiques actives en avril 2026) et premier CMS des vendeurs
          français sur les marketplaces. Fourchettes 2026 : boutique starter
          1 300 à 3 100 €, standard 4 100 à 12 300 €, avancée 13 100 à
          45 500 € ; modules 100 à 500 €/an ; maintenance 50 à 400 €/mois
          selon le niveau. Solide pour les catalogues complexes à la
          française ; vérifiez la feuille de route de l&apos;éditeur et la
          disponibilité des développeurs avant de vous engager pour 5 ans.
        </p>

        <h3>Wix et Squarespace : l&apos;entrée de gamme sous conditions</h3>
        <p>
          Wix a renommé et augmenté tous ses plans en 2026 : la vente en
          ligne démarre au plan Essentiel à 30 €/mois TTC (l&apos;équivalent
          coûtait 17 € un an plus tôt, +76 %), Business à 40,80 €, Business
          Elite à 178,80 €. Squarespace : 12 à 69 €/mois selon le plan, avec
          2 % de frais de transaction sur le plan d&apos;entrée (0 % ensuite).
          Corrects pour vendre quelques références ; limités dès que le
          catalogue, le SEO ou les intégrations deviennent sérieux — et vous
          ne possédez pas votre boutique.
        </p>

        <h3>Le sur-mesure headless : notre terrain de jeu</h3>
        <p>
          Un front Next.js rapide branché sur un moteur e-commerce headless
          (Medusa et Saleor sont open source et gratuits en auto-hébergement ;
          leurs clouds officiels démarrent à 29 $ et 159 $/mois) ou sur
          Shopify en mode headless. Fourchettes agence France :{" "}
          <strong>15 000 à 80 000 € et plus</strong>. Chez{" "}
          <Link href="/services/ecommerce">Hagnéré Code</Link>, une
          plateforme e-commerce sur mesure va de 15 000 à 120 000 € au
          forfait fixe contractuel. Ce qu&apos;on achète à ce prix : zéro
          licence à vie, des performances au niveau des exigences Google, un
          modèle de données à votre image, et des intégrations (ERP, caisse,
          logistique) conçues plutôt que bricolées.
        </p>

        <InfoBox variant="blue" title="La question qui tranche 80 % des cas">
          Quel est votre chiffre d&apos;affaires en ligne cible à 3 ans ?
          Sous 100 000 €/an, une plateforme standard bien montée gagne
          presque toujours. Au-delà de 500 000 €/an — ou dès qu&apos;un ERP,
          du B2B ou une vraie volumétrie entrent en jeu — le cumul
          abonnements + applications + commissions + limites du modèle
          rattrape le coût du sur-mesure. Entre les deux : faites le calcul
          de la section suivante.
        </InfoBox>

        <h2 id="tco">4. Le vrai coût sur 3 ans (celui que les devis ne montrent pas)</h2>
        <p>
          Aucune page de prix ne le publie, alors le voici : le coût total
          de possession sur 36 mois, pour une même boutique PME.{" "}
          <strong>Hypothèses communes</strong> : 150 000 € de chiffre
          d&apos;affaires annuel, panier moyen 62 € (la moyenne France 2025,
          FEVAD), soit environ 2 400 commandes/an ; création en agence ;
          tarifs officiels de juillet 2026.
        </p>
        <GuideTable
          headers={["Poste sur 3 ans", "Shopify (Grow)", "WooCommerce", "PrestaShop", "Sur-mesure Next.js"]}
          rows={[
            ["Création (agence)", "10 000 €", "12 000 €", "11 000 €", "30 000 €"],
            ["Abonnement / hébergement", "2 376 €", "900 €", "1 080 €", "1 800 €"],
            ["Apps / extensions / modules", "3 600 € + thème 300 €", "1 200 €", "900 €", "0 €"],
            ["Maintenance / TMA", "incluse plateforme*", "3 600 €", "5 400 €", "7 200 €"],
            ["Commissions de paiement", "7 665 €", "8 565 €", "8 115 €", "8 565 €"],
            ["Total 36 mois", "≈ 23 900 €", "≈ 26 300 €", "≈ 26 500 €", "≈ 47 600 €"],
          ]}
        />
        <p>
          Lecture honnête de ce tableau. Un : <strong>le récurrent triple
          quasiment le budget perçu</strong> — la boutique « à 10 000 € »
          coûte 24 000 € sur 3 ans. Deux : à 150 000 € de CA, les quatre
          options se tiennent, et le sur-mesure ne se justifie que si les
          intégrations ou la volumétrie l&apos;exigent — nous le disons alors
          même que c&apos;est notre métier. Trois : la hiérarchie
          s&apos;inverse avec la croissance, car les postes plateforme
          (abonnement supérieur, applications, commissions majorées) montent
          avec le CA, quand le coût d&apos;un socle sur mesure reste
          plat. (*Shopify inclut l&apos;infrastructure, pas les évolutions de
          votre boutique.)
        </p>

        <h2 id="commissions">5. Commissions de paiement : le poste invisible, enfin chiffré</h2>
        <p>
          Chaque vente est taxée par votre prestataire de paiement — un
          pourcentage abstrait que personne ne convertit en euros. Voici les
          taux France 2026 (pages tarifs officielles) ramenés à{" "}
          <strong>100 000 € de CA annuel</strong> (≈ 1 600 commandes à 62 €) :
        </p>
        <GuideTable
          headers={["Prestataire", "Taux (cartes UE)", "Coût / an à 100 k€ de CA"]}
          rows={[
            ["Mollie", "≈ 1,2 % + 0,25 €", "≈ 1 600 €"],
            ["PayPlug (français)", "1,4 % + 0,25 €", "≈ 1 800 €"],
            ["Stripe", "1,5 % + 0,25 €", "≈ 1 900 €"],
            ["Shopify Payments (Basic)", "1,5 % + 0,25 €", "≈ 1 900 €"],
            ["PayPal", "2,9 % + 0,35 €", "≈ 3 470 €"],
          ]}
        />
        <p>
          Les pièges qui gonflent la note : les cartes hors Europe montent à
          3,25 % + 0,25 € (Stripe), la conversion de devise ajoute 2 %,
          chaque litige coûte 20 € (remboursé seulement si vous gagnez la
          contestation), et le prélèvement SEPA coûte 0,35 €. Bonne
          nouvelle : le 3D Secure imposé par la réglementation européenne
          (DSP2) est inclus dans les tarifs standard — et les paiements de
          moins de 30 € en sont souvent exemptés. Sur Shopify, rappel du
          double péage : un prestataire externe déclenche 0,2 à 2 % de frais
          Shopify additionnels.
        </p>

        <h2 id="couts-caches">6. Logistique, contenus, flux : les coûts que personne ne chiffre</h2>
        <p>
          Nous avons audité les pages concurrentes sur cette requête :{" "}
          <strong>aucune ne chiffre la logistique ni les contenus
          produit</strong> — les deux postes qui déterminent pourtant si
          votre boutique gagne de l&apos;argent.
        </p>

        <h3>La logistique : 15 à 25 % de votre chiffre d&apos;affaires</h3>
        <p>
          Expédier coûte cher, et ça se prévoit au moment du devis (votre
          site doit calculer les bons frais de port). Les ordres de grandeur
          France 2026 : un colis d&apos;1 kg à domicile coûte 9,34 € HT en
          Colissimo grille entreprise (6,84 € pour 250 g, +1,05 € avec
          signature), environ 3,89 € en point relais Mondial Relay pro. En
          logistique externalisée (3PL), comptez 3,50 à 7 € par commande
          traitée hors transport ; en interne, le picking coûte 0,30 à
          0,70 € par article et le stockage 0,50 à 2 €/m²/mois. Ajoutez le
          logiciel d&apos;expédition (Sendcloud : gratuit jusqu&apos;à
          20 colis/mois, puis 28 à 175 €/mois) et la gestion des retours.
          Au total, la logistique absorbe <strong>15 à 25 % du CA</strong>{" "}
          d&apos;un e-commerçant français.
        </p>

        <h3>Les contenus produit : 5 000 à 10 000 € pour 100 références</h3>
        <p>
          Une photo packshot professionnelle coûte 19 à 29 € en studio
          spécialisé (dégressif dès 10 images), une fiche produit rédigée et
          optimisée SEO 45 à 80 €. Pour un catalogue de 100 références avec
          2 photos et une fiche par produit :{" "}
          <strong>5 000 à 10 000 € rarement budgétés</strong> — et c&apos;est
          le premier poste de dérive constaté en agence, loin devant la
          technique. Les fiches génériques copiées du fournisseur, elles, se
          paient en référencement nul et en taux de conversion divisé.
        </p>

        <h3>Les flux et le marketing récurrent</h3>
        <p>
          Le flux Google Merchant Center est gratuit (fiches gratuites), mais
          si vous faites de la publicité Shopping, passer par un CSS
          partenaire plutôt que par Google économise environ 20 % de coût
          par clic — une optimisation méconnue et immédiate.
          L&apos;emailing e-commerce scale vite : Klaviyo passe de 45 $/mois
          (1 000 contacts) à 175 $/mois (5 000 contacts), désabonnés
          comptés si la liste n&apos;est pas nettoyée ; Brevo, facturé à
          l&apos;e-mail envoyé, démarre autour de 9 $/mois. Ajoutez la
          bannière cookies conforme (Axeptio dès 29 €/mois au-delà du seuil
          gratuit) et la maintenance (10 à 20 % du coût de création par an) :
          le « récurrent invisible » d&apos;une boutique sérieuse dépasse
          vite 300 €/mois.
        </p>

        <GuideInlineCTA
          title="Un chiffrage e-commerce qui inclut tout ça ?"
          description="Décrivez votre projet en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées avec une fourchette argumentée — commissions, logistique et conformité comprises."
          tags={["Réponse sous 24 h ouvrées", "Forfait fixe contractuel", "Sans engagement"]}
        />

        <h2 id="devis">7. Un devis e-commerce réel, décortiqué ligne à ligne</h2>
        <p>
          Personne ne publie ses devis ; nous, oui. Voici, anonymisé, un
          devis Hagnéré Code accepté pour un profil B typique : PME de
          négoce, environ 300 références, migration depuis une ancienne
          boutique, synchronisation avec le logiciel de gestion, front
          Next.js sur moteur headless. Taux journalier : 650 € HT.
        </p>
        <FormulaBox>
          <strong>Devis « boutique PME » — 44 jours, 28 600 € HT</strong>
          <br />
          Cadrage & Discovery Sprint (2 j) — 1 300 €
          <br />
          Design system & maquettes boutique (7 j) — 4 550 €
          <br />
          Front Next.js : catalogue, fiches, panier, compte (12 j) — 7 800 €
          <br />
          Administration catalogue & commandes (8 j) — 5 200 €
          <br />
          Paiement Stripe + 3D Secure + litiges (3 j) — 1 950 €
          <br />
          Livraison : transporteurs, frais de port, e-mails transactionnels
          (4 j) — 2 600 €
          <br />
          Migration données & redirections 301 (3 j) — 1 950 €
          <br />
          SEO technique & données structurées produits (2 j) — 1 300 €
          <br />
          Recette, accessibilité, mise en production (3 j) — 1 950 €
        </FormulaBox>
        <p>
          Ce que ce devis vous apprend. D&apos;abord,{" "}
          <strong>le « site » visible (design + front) ne pèse que 40 % du
          budget</strong> : le reste, c&apos;est le catalogue, les flux et la
          fiabilité — exactement ce que les devis low-cost escamotent.
          Ensuite, chaque ligne est en jours-homme : un devis sans détail des
          postes n&apos;est pas comparable (envoyez le même{" "}
          <Link href="/guides/cahier-des-charges-site-internet">cahier des
          charges</Link> à tous les prestataires). Enfin, ce devis ne
          contient ni les photos, ni les fiches produit, ni la logistique —
          relisez la section 6 : ils sont dans <em>votre</em> budget, chez
          nous comme ailleurs, autant le savoir avant de signer.
        </p>

        <h2 id="obligations-2026">8. Ce que 2026 change dans le budget (échéances légales)</h2>
        <p>
          Trois échéances légales tombent en 2025-2027, et aucune page de
          prix concurrente ne les mentionne. Elles concernent directement
          votre budget :
        </p>
        <GuideTable
          headers={["Obligation", "Échéance", "Sanction maximale", "Impact budget type"]}
          rows={[
            ["Accessibilité (EAA / RGAA)", "en vigueur depuis le 28 juin 2025", "jusqu'à 50 000 € par service (après mise en demeure)", "audit + corrections : 3 000 – 10 000 €"],
            ["Bouton de rétractation en ligne", "19 juin 2026", "15 000 € (pers. physique) / 75 000 € (société)", "1 – 2 jours de développement"],
            ["Facturation électronique (réception)", "1er septembre 2026 — toutes entreprises", "amendes fiscales", "plateforme agréée : 0 – 99 €/mois"],
            ["Facturation électronique (émission PME)", "1er septembre 2027", "amendes fiscales", "projet de mise en place : 1 000 – 1 500 €"],
            ["RGPD / cookies (CNIL)", "permanent", "20 M€ ou 4 % du CA mondial", "CMP : ~29 €/mois + mise en conformité"],
          ]}
        />
        <p>
          Dans le détail. <strong>Accessibilité</strong> : depuis le 28 juin
          2025, l&apos;European Accessibility Act s&apos;applique aux sites
          e-commerce B2C (référentiel RGAA) — les micro-entreprises de moins
          de 10 salariés et 2 M€ de CA sont exemptées pour leurs services.{" "}
          <strong>Bouton de rétractation</strong> : à partir du 19 juin 2026,
          tout site marchand doit proposer une fonction « renoncer au
          contrat » accessible en ligne pendant les 14 jours de rétractation
          (ordonnance n° 2026-2 du 5 janvier 2026) — vérifiez que votre
          prestataire l&apos;a prévue. <strong>Facturation
          électronique</strong> : dès le 1er septembre 2026, toute entreprise
          française doit pouvoir recevoir des factures électroniques via une
          plateforme agréée, et les ventes B2C entrent dans le e-reporting
          fiscal. Et le RGPD n&apos;est pas théorique pour le e-commerce : en
          2025, la CNIL a infligé <strong>150 millions d&apos;euros
          d&apos;amende à Shein</strong> pour des cookies déposés sans
          consentement. Un devis sérieux intègre ces sujets dès la
          conception ; un devis qui n&apos;en parle pas les facturera en
          avenant — ou vous laissera l&apos;ardoise.
        </p>

        <h2 id="rentabilite">9. Combien rapporte un site e-commerce ? Le calcul honnête</h2>
        <p>
          C&apos;est la question associée la plus tapée dans Google, et la
          moins bien traitée. Le marché est réel : les Français ont dépensé{" "}
          <strong>196,4 milliards d&apos;euros en ligne en 2025</strong>{" "}
          (+7 % sur un an, FEVAD), la France compte 158 200 sites marchands
          actifs et 42,2 millions de cyberacheteurs, et 69 % des acheteurs
          commandent depuis leur mobile. Mais la moyenne cache la
          distribution : le panier moyen est descendu à 62 €, et le taux de
          conversion médian se situe entre 1,5 et 3 % selon le secteur (avec
          ~70 % d&apos;abandon de panier).
        </p>
        <p>
          Faites le calcul avant de construire.{" "}
          <strong>Pour 100 000 € de CA annuel</strong> à 2 % de conversion et
          62 € de panier, il vous faut environ 1 600 commandes, donc{" "}
          <strong>80 000 visites dans l&apos;année</strong> — qui viendront
          du SEO (des mois de travail), de la publicité (un budget récurrent,
          souvent 10 à 20 % du CA) ou de votre notoriété. Retirez ensuite la
          logistique (15 à 25 % du CA), les commissions de paiement (~2 %) et
          le coût de la marchandise : voilà votre vraie marge. Ce calcul en
          amont — pas le choix de la plateforme — est ce qui sépare les
          boutiques rentables des 158 200 sites qui se partagent les
          miettes. Un site plus rapide et mieux structuré améliore chaque
          maillon : c&apos;est là que le budget création redevient un
          investissement.
        </p>

        <h2 id="refonte">10. Prix d&apos;une refonte e-commerce</h2>
        <p>
          Requête sœur jamais traitée par les pages de prix. Une refonte
          coûte généralement <strong>60 à 80 % du prix d&apos;une
          création</strong> équivalente… plus trois postes spécifiques : la
          migration des données (produits, clients, historiques de
          commandes — comptez 2 000 à 8 000 € selon le volume et la
          propreté), le plan de redirections 301 page à page (votre
          référencement acquis est un actif : le perdre coûte plus cher que
          la refonte), et la conduite du changement si vos équipes
          administrent la boutique au quotidien. Une migration PrestaShop ou
          WooCommerce vers un socle moderne se chiffre couramment entre
          10 000 et 20 000 € et plus. Avant toute refonte : exigez un audit
          de l&apos;existant et un inventaire des URLs — c&apos;est la
          première section d&apos;un bon{" "}
          <Link href="/guides/cahier-des-charges-site-internet">cahier des
          charges de refonte</Link>.
        </p>

        <h2 id="prestataires">11. Plateforme seul, freelance ou agence : qui choisir</h2>
        <GuideTable
          headers={["Option", "Budget création", "Forces", "Limites"]}
          rows={[
            ["Vous-même sur Shopify/Wix", "0 – 1 500 € + abonnements", "Rapide, réversible, idéal pour tester", "Votre temps, plafond SEO/design, vous ne possédez rien"],
            ["Freelance", "2 500 – 12 000 €", "Prix, souplesse, contact direct", "Périmètre limité à une personne : dispo, recette, garanties"],
            ["Agence généraliste", "8 000 – 25 000 €", "Équipe, process, garanties", "Qualité inégale : exigez des références e-commerce"],
            ["Agence spécialisée / sur-mesure", "15 000 – 120 000 €", "Intégrations, performance, scalabilité", "Budget d'entrée plus élevé — à réserver aux vrais besoins"],
          ]}
        />
        <p>
          Les taux du marché pour situer les devis : un développeur
          e-commerce freelance se facture autour de 40 à 46 €/h selon la
          plateforme (relevés Codeur.com), une agence Shopify 500 à
          900 €/jour, et les agences parisiennes facturent 30 à 50 % de plus
          que les agences régionales à prestation comparable — faire
          travailler une équipe senior depuis Chambéry n&apos;est pas un
          hasard dans notre modèle. Le critère qui compte plus que le
          statut : <strong>qui a déjà livré une boutique avec VOS
          contraintes</strong> (votre volumétrie, votre ERP, votre secteur) —
          demandez à voir ces boutiques en production.
        </p>

        <h2 id="erreurs">12. Les 6 erreurs qui font exploser la facture</h2>
        <ol>
          <li>
            <strong>Choisir la plateforme avant le business model.</strong>{" "}
            La plateforme découle du catalogue, du CA cible et de
            l&apos;existant — pas l&apos;inverse. C&apos;est l&apos;erreur
            n° 1, et elle se paie en refonte à 18 mois.
          </li>
          <li>
            <strong>Ignorer le récurrent dans le prévisionnel.</strong>{" "}
            Abonnements, applications, commissions, maintenance : sur 3 ans,
            le récurrent égale souvent le budget de création (section 4).
          </li>
          <li>
            <strong>Arriver avec un catalogue non préparé.</strong> Photos,
            fiches, attributs, codes-barres : 5 000 à 10 000 € pour
            100 références, et des semaines de retard si personne n&apos;en
            est responsable.
          </li>
          <li>
            <strong>Zapper la logistique au moment du devis.</strong> Les
            frais de port mal calculés se paient sur chaque commande — dans
            votre marge ou dans votre taux d&apos;abandon.
          </li>
          <li>
            <strong>Acheter « pas cher » deux fois.</strong> La boutique à
            1 500 € sans SEO, sans conformité et sans structure se refond
            dans les 2 ans — au prix fort, migration comprise.
          </li>
          <li>
            <strong>Comparer des devis à périmètres différents.</strong> Sans
            cahier des charges commun, l&apos;écart de prix mesure
            l&apos;écart de compréhension, pas la compétitivité. Notre{" "}
            <Link href="/guides/cahier-des-charges-site-internet">modèle de
            cahier des charges</Link> est libre de copie.
          </li>
        </ol>

        <InfoBox variant="amber" title="Le cas classique">
          Une boutique à 3 500 € livrée en 6 semaines, « clé en main ». Six
          mois plus tard : 40 visites/jour, des fiches produit copiées du
          fournisseur que Google ignore, des frais de port forfaitaires qui
          perdent de l&apos;argent sur un colis sur trois, et une mise en
          conformité cookies à refaire. Coût réel à 18 mois, refonte
          comprise : plus de 15 000 € — pour un projet qui en valait 12 000
          bien cadré dès le départ.
        </InfoBox>

        <h2 id="methode">13. Méthode : payer le juste prix en 5 étapes</h2>
        <ol>
          <li>
            <strong>Posez le business model d&apos;abord</strong> — CA cible
            à 3 ans, panier moyen, marge, canaux d&apos;acquisition. Le
            calcul de la section 9 tient sur une page.
          </li>
          <li>
            <strong>Inventoriez l&apos;existant</strong> — caisse, gestion,
            comptabilité, stock : chaque outil à connecter est une ligne de
            devis. Découvert en cours de projet, c&apos;est un avenant.
          </li>
          <li>
            <strong>Rédigez un cahier des charges commun</strong> — 10
            sections suffisent, notre{" "}
            <Link href="/guides/cahier-des-charges-site-internet">modèle
            commenté</Link> est libre de copie — et envoyez-le à
            l&apos;identique à 3 prestataires.
          </li>
          <li>
            <strong>Comparez en coût sur 3 ans</strong> — création +
            abonnements + applications + commissions + maintenance (tableau
            de la section 4), jamais en prix de création seul.
          </li>
          <li>
            <strong>Budgétez ce qui n&apos;est pas dans le devis</strong> —
            contenus produit, logistique, marketing, conformité 2026. Une
            réserve de 15 à 20 % transforme les découvertes en arbitrages,
            pas en crises.
          </li>
        </ol>
        <p>
          C&apos;est exactement ce que cadre notre <strong>Discovery Sprint
          (1 500 €, 2 jours, déduit à 100 % si le projet se lance)</strong> :
          périmètre écrit, prototype cliquable et devis au forfait fixe —
          dates contractuelles, méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>. Vous voulez une
          fourchette avant d&apos;aller plus loin ?{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées, gratuite
          et sans engagement. Et si vous hésitez encore entre vitrine et
          boutique, notre guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d&apos;un site
          vitrine</Link> et le panorama{" "}
          <Link href="/guides/combien-coute-un-site-internet">« combien
          coûte un site internet »</Link> complètent celui-ci.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://www.shopify.com/fr/tarifs" target="_blank" rel="noopener noreferrer">tarifs officiels Shopify France</a> ;{" "}
          <a href="https://stripe.com/fr/pricing" target="_blank" rel="noopener noreferrer">tarifs Stripe France</a> ;{" "}
          <a href="https://woocommerce.com/document/woocommerce-payments/fees-and-debits/fees/" target="_blank" rel="noopener noreferrer">frais WooPayments (documentation officielle)</a> ;{" "}
          <a href="https://www.colissimo.entreprise.laposte.fr/" target="_blank" rel="noopener noreferrer">grille Colissimo entreprise 2026</a> ;{" "}
          <a href="https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/" target="_blank" rel="noopener noreferrer">FEVAD, bilan du e-commerce en France 2025</a> ;{" "}
          <a href="https://entreprendre.service-public.gouv.fr/actualites/A15683" target="_blank" rel="noopener noreferrer">Service-Public, calendrier de la facturation électronique</a> ;{" "}
          <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-e-commerce/accessibilite-des-sites-de-e-commerce" target="_blank" rel="noopener noreferrer">France Num, accessibilité des sites e-commerce</a> ;{" "}
          <a href="https://www.cnil.fr/en/cookies-placed-without-consent-shein-fined-150-million-euros-cnil" target="_blank" rel="noopener noreferrer">CNIL, sanction Shein (2025)</a> ;
          baromètre La Fabrique du Net (402 budgets e-commerce) ; ordonnance
          n° 2026-2 du 5 janvier 2026 (fonction de rétractation en ligne).
          Prix des plans et commissions relevés sur les pages officielles en
          juillet 2026 — ils évoluent : vérifiez avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des prix de marché constatés,
            donnés à titre indicatif : seul un devis établi sur votre
            périmètre vous engage. Ce guide ne constitue pas un conseil
            juridique ou fiscal personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
