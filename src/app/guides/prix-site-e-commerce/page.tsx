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
  wordCount: 5000,
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
      "Les fourchettes qui font consensus sur le marché français : 1 500 à 5 000 € pour une boutique simple montée par un freelance sur Shopify ou WooCommerce, 5 000 à 18 000 € pour une boutique de PME en agence, 15 000 à 50 000 € pour un e-commerce complexe (gros catalogue, intégrations), et 45 000 € et bien au-delà pour du sur-mesure à grand périmètre ou une marketplace (le sur-mesure d'entrée de gamme démarre, lui, à 15 000 €). Le budget médian constaté sur des projets réels est d'environ 15 000 € (baromètre La Fabrique du Net, 402 budgets).",
  },
  {
    question: "Combien coûte un site Shopify par mois ?",
    answer:
      "Les plans officiels 2026 en France : Basic 25 €/mois en facturation annuelle (36 €/mois en mensuel), Grow 66 €/mois (105 € en mensuel), Advanced 289 €/mois (384 € en mensuel), et Shopify Plus à partir de 2 100 €/mois. Ajoutez le vrai coût récurrent : les applications (30 à 150 €/mois pour une boutique standard, 300 à 600 €/mois quand elles s'empilent) et les frais de paiement (1,1 à 1,5 % + 0,25 € par transaction avec Shopify Payments).",
  },
  {
    question: "Est-ce que Shopify est payant ?",
    answer:
      "Oui. L'offre d'appel (essai gratuit de 3 jours puis 1 €/mois pendant 3 mois) est un prix de lancement, pas un prix de croisière : comptez ensuite 25 à 289 €/mois d'abonnement selon le plan, plus les applications et les frais de transaction. Et si vous utilisez un prestataire de paiement externe au lieu de Shopify Payments, Shopify prélève des frais supplémentaires de 0,2 à 2 % sur chaque vente selon le plan.",
  },
  {
    question: "Combien coûte un site WooCommerce ?",
    answer:
      "L'extension WooCommerce est gratuite, le site ne l'est pas : comptez 3 000 à 8 000 € chez un freelance et 8 000 à 20 000 € en agence pour une boutique professionnelle. Côté récurrent : hébergement renforcé (25 à 50 €/mois), extensions payantes (environ 400 €/an — WooCommerce Subscriptions coûte à lui seul 248 €/an), et maintenance de sécurité indispensable (600 à 1 800 €/an), WordPress étant le CMS (le logiciel tout prêt qui sert à créer et gérer un site) le plus attaqué.",
  },
  {
    question: "Quelle plateforme e-commerce choisir en 2026 ?",
    answer:
      "Raisonnez à partir de votre commerce, pas de l'outil. Test de marché ou side-project à petit budget : Shopify (rapide à lancer, mais un abonnement et des commissions à vie). Contenus et vente à budget serré, en acceptant la maintenance WordPress : WooCommerce. Existant PrestaShop à faire durer : PrestaShop (19 % du marché national). Pour une entreprise établie qui doit convertir et tenir dans le temps : le sur-mesure headless (Next.js) est devenu le choix par défaut — son ticket d'entrée est tombé au niveau d'une boutique PME en agence. Catalogue, CA cible et existant décident du moment de la bascule — pas de son principe.",
  },
  {
    question: "Combien coûte la maintenance d'un site e-commerce ?",
    answer:
      "La règle sectorielle : 10 à 20 % du coût de création par an. En pratique : 50 à 500 €/mois sur une solution open source (mises à jour, sécurité, sauvegardes, surveillance), 500 à 3 000 €/mois en contrat de maintenance agence (la « TMA », tierce maintenance applicative) pour un site à fort trafic, plus 500 à 5 000 €/an d'évolutions fonctionnelles. Un e-commerce ne se « termine » jamais : c'est un commerce, il vit, ou il meurt.",
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
      "Le marché est réel — les Français ont dépensé 196,4 milliards d'euros en ligne en 2025 (+7 %, FEVAD) — mais la rentabilité se calcule avant de construire : avec un taux de conversion (la part des visiteurs qui achètent vraiment) de 1,5 à 3 % et un panier moyen de 62 €, il faut environ 80 000 visites pour faire 100 000 € de chiffre d'affaires. Comptez ensuite la logistique (15 à 25 % du CA), les commissions de paiement (~2 %) et le marketing (souvent 10 à 20 % du CA) : la boutique est rentable quand ce calcul l'est, pas quand le site est joli.",
  },
  {
    question: "Combien coûte un site e-commerce clé en main ?",
    answer:
      "Les offres « clé en main » à moins de 2 000 € livrent en général un thème standard rempli avec vos textes, sans stratégie, sans référencement et souvent en location (vous ne possédez rien). Un vrai clé en main professionnel — design, catalogue structuré, paiement, livraison, conformité, SEO de base — commence plutôt à 5 000 € chez un freelance sérieux et 8 000 € en agence. En dessous, demandez précisément ce qui est inclus, ligne par ligne.",
  },
  {
    question: "Quel budget pour se lancer en dropshipping ?",
    answer:
      "Le site lui-même est le petit poste : 500 à 3 000 € sur Shopify avec un thème. Le vrai budget est publicitaire : sans stock ni marque, tout le trafic s'achète, et la plupart des lanceurs dépensent 1 000 à 5 000 €/mois en publicité pour des marges laminées par les fournisseurs et les retours. C'est un modèle de test, rarement un modèle durable — méfiez-vous des formations qui vendent l'inverse.",
  },
  {
    question: "Combien coûte un site e-commerce sur mesure ?",
    answer:
      "De 15 000 à plus de 80 000 € selon le périmètre — catalogue, intégrations (ERP, caisse, logistique), B2B, multilingue. Chez Hagnéré Code, une plateforme e-commerce sur mesure (Next.js, front headless) va de 15 000 à 120 000 € au forfait fixe contractuel. Le sur-mesure s'impose sans débat quand la plateforme standard devient le problème : commissions cumulées, limites du catalogue, synchronisations impossibles. Mais il ne commence plus là : son ticket d'entrée est à 15 000 € (section 3), et c'est le choix par défaut d'une entreprise qui veut posséder sa boutique et durer ; la plateforme reste le bon outil pour tester un marché à petit budget.",
  },
];


export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
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
          { href: "/ressources/kit-cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Prix d'un site e-commerce : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
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

        <InfoBox variant="blue" title="Les 8 mots de tous les devis e-commerce, en 30 secondes">
          <ul className="space-y-1.5">
            <li><strong>CMS</strong> : le logiciel tout prêt pour créer et administrer une boutique (WordPress, PrestaShop, Shopify).</li>
            <li><strong>Thème</strong> : une maquette de design toute prête, adaptée à vos couleurs.</li>
            <li><strong>SEO</strong> (ou référencement) : le travail qui fait apparaître votre boutique dans Google sans payer de publicité.</li>
            <li><strong>ERP</strong> (ou logiciel de gestion) : l&apos;outil qui centralise stocks, commandes et factures (Sage, EBP, Odoo…).</li>
            <li><strong>Prestataire de paiement</strong> (le « PSP ») : la société qui encaisse les cartes pour vous, comme le terminal de votre magasin (Stripe, PayPlug…).</li>
            <li><strong>Taux de conversion</strong> : la part des visiteurs qui achètent — 2 %, c&apos;est 2 acheteurs pour 100 visiteurs.</li>
            <li><strong>Maintenance</strong> (ou « TMA ») : le contrat d&apos;entretien et de dépannage du site.</li>
            <li><strong>Headless / sur-mesure</strong> : la vitrine que voient vos clients, séparée du moteur qui gère produits et commandes (section 3).</li>
          </ul>
          <p className="mt-2">
            Huit définitions, et tout le guide se lit sans dictionnaire.
          </p>
        </InfoBox>

        <h2 id="reponse-rapide">1. La réponse rapide : les fourchettes 2026</h2>
        <p>
          En 2026, un site e-commerce coûte{" "}
          <strong>1 500 à 5 000 € pour une boutique simple montée par un
          freelance sur Shopify ou WooCommerce, 5 000 à 18 000 € pour une
          boutique de PME réalisée en agence, 15 000 à 50 000 € pour un
          e-commerce complexe, et 45 000 € à plus de 100 000 € pour du
          sur-mesure à grand périmètre ou une marketplace</strong> — le
          sur-mesure d&apos;entrée de gamme, lui, démarre à 15 000 €
          (section 3). Le budget médian constaté
          sur des projets réels : environ 15 000 € (baromètre La Fabrique du
          Net, 402 budgets analysés) — une médiane qui cache un écart de 1
          à 11 : environ 4 000 € sur WooCommerce, 11 000 € sur PrestaShop,
          25 000 € sur Shopify, 45 000 € en sur-mesure. Votre plateforme
          dit déjà la moitié de votre budget. À cela s&apos;ajoute un coût récurrent que la plupart des
          devis taisent : abonnements, commissions de paiement, maintenance
          et logistique.
        </p>
        <GuideTable
          headers={["Type de boutique", "Création", "Récurrent / an", "Pour qui"]}
          rows={[
            ["Boutique simple (< 50 produits, thème)", "1 500 – 5 000 €", "1 000 – 3 000 €", "Lancement, test de marché"],
            ["Boutique PME (50 – 500 produits, agence)", "5 000 – 18 000 €", "3 000 – 8 000 €", "Commerce établi qui passe en ligne"],
            ["E-commerce complexe (catalogue, intégrations)", "15 000 – 50 000 €", "6 000 – 15 000 €", "Gros catalogue, connexion à votre ERP (logiciel de gestion), vente multicanal (site, Amazon, magasin)"],
            ["Sur-mesure à grand périmètre / marketplace (entrée de gamme sur mesure : dès 15 000 €, section 3)", "45 000 – 120 000 €+", "10 000 – 30 000 €", "Gros volumes, vente aux professionnels (B2B), expérience produit unique"],
          ]}
        />
        <p>
          Deux mots de la dernière ligne : une <strong>marketplace</strong>{" "}
          est une place de marché où plusieurs vendeurs vendent sur le même
          site, comme Amazon ; un site <strong>« headless »</strong> sépare
          la vitrine que voient vos clients du moteur qui gère produits et
          commandes (expliqué en section 3 avec un restaurant). Ces
          fourchettes s&apos;expliquent : le prix dépend moins du « site »
          que de votre catalogue, de vos flux
          (paiement, livraison, stock) et de ce à quoi il doit se
          connecter. C&apos;est tout l&apos;objet de ce guide.
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
          <strong>Budget réaliste : 2 500 à 6 000 € de création</strong> —
          Shopify ou WooCommerce avec un bon thème, montés par un
          freelance sérieux ou une petite agence (le plancher de
          1 500 € de la section 1 existe, mais c&apos;est un thème
          paramétré sans reprise de vos contenus) —, plus
          1 000 à 3 000 €/an de récurrent
          (abonnement ou hébergement, quelques applications, maintenance
          légère). C&apos;est le seul profil où nous recommandons une
          plateforme sans réserve : un test de marché doit coûter peu
          et pouvoir se jeter — et si le test réussit, la section 3
          explique ce qu&apos;on construit ensuite. Pour trancher
          entre les deux plateformes, notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">comparatif
          WooCommerce ou Shopify</Link> chiffre coûts, vitesse et
          migration. Le piège du profil A : oublier que les photos produit et
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
          3 000 à 8 000 €/an de récurrent. Cette fourchette monte plus haut
          que celle de la section 1 : les baromètres comptent aussi des
          boutiques PME sans aucune intégration ; dès qu&apos;une caisse
          entre en jeu, le haut de fourchette est la norme. Exemple
          concret : un caviste de 200 références avec caisse en magasin —
          création, reprise du catalogue, synchronisation des stocks,
          transporteurs — reçoit un devis type de 12 000 à 18 000 €, plus
          environ 400 €/mois de récurrent. C&apos;est le profil où les
          devis s&apos;écartent le plus (du simple au triple) : tout se
          joue sur les intégrations et le catalogue, pas sur le design.
        </p>

        <h3>Scénario C — Scale : gros volumes, B2B, intégrations lourdes</h3>
        <p>
          Plus de 1 000 références, un ERP — le logiciel central qui pilote
          vos stocks, commandes et factures (Sage, Odoo, SAP…) —, plusieurs
          canaux (site, marketplaces, magasins), des règles de prix B2B
          (vente aux professionnels).{" "}
          <strong>Budget réaliste : 40 000 à 120 000 € et plus</strong>, en
          agence spécialisée ou en sur-mesure dit « headless » (section 3).
          À ce niveau, la plateforme standard devient le problème et
          le sur-mesure s&apos;impose sans débat. Mais ne lisez pas ce
          seuil à l&apos;envers : son ticket d&apos;entrée (15 000 €,
          section 3) le met désormais à portée du scénario B —
          c&apos;est l&apos;évidence comptable qui commence ici, pas
          le sur-mesure. Ne confondez pas
          les niveaux : raccorder un logiciel de gestion à une boutique
          standard vaut 12 000 à 22 000 € — le haut du scénario B. Le scénario C commence quand la
          boutique est construite <em>autour</em> de vos systèmes (règles
          B2B, multi-canaux, synchronisations en temps réel) ; les projets
          multi-sites dépassent couramment 80 000 €.
        </p>

        <h2 id="plateformes">3. Prix par plateforme : Shopify, WooCommerce, PrestaShop, sur-mesure</h2>
        <p>
          Les prix qui suivent viennent des pages tarifs officielles
          (relevées en juillet 2026) et des fourchettes constatées sur le
          marché français.
        </p>

        <h3>Shopify : le loyer + les commissions</h3>
        <p>Plans officiels France 2026 :</p>
        <ul>
          <li>
            <strong>Basic : 25 €/mois</strong> en facturation annuelle
            (36 €/mois si vous payez au mois).
          </li>
          <li>
            <strong>Grow : 66 €/mois</strong> (105 €/mois en paiement
            mensuel).
          </li>
          <li>
            <strong>Advanced : 289 €/mois</strong> (384 €/mois en paiement
            mensuel).
          </li>
          <li>
            <strong>Shopify Plus</strong> : à partir de 2 100 €/mois.
          </li>
        </ul>
        <p>
          Ajoutez un thème — de gratuit à 400 $ (environ 370 €) en achat
          unique — et surtout les applications : 30 à 150 €/mois pour une
          boutique standard, 300 à 600 €/mois quand on les empile.
          C&apos;est le fameux « app creep » : le poste qui grossit sans
          bruit, application après application. Côté prestation : 2 500 à
          12 000 € chez un freelance, 8 000 à 80 000 € en agence Shopify.
          Attention au double péage : sans Shopify Payments, Shopify
          prélève 0,2 à 2 % de frais supplémentaires par vente —{" "}
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
          boutiques actives en avril 2026) et premier CMS utilisé par les
          vendeurs français présents sur les marketplaces. Fourchettes
          2026 : boutique starter 1 300 à 3 100 €, standard 4 100 à
          12 300 €, avancée 13 100 à 45 500 € ; modules 100 à 500 €/an ;
          maintenance 50 à 400 €/mois. Pourquoi « vieillissant » ? Des
          années d&apos;incertitude stratégique chez l&apos;éditeur, des
          développeurs expérimentés qui se raréfient (donc se
          renchérissent), une partie des modules qui n&apos;est plus
          maintenue. La plateforme reste solide pour les catalogues
          complexes à la française ; la vraie question est sa trajectoire à
          5 ans — l&apos;horizon réel de votre investissement.
        </p>

        <h3>Wix et Squarespace : l&apos;entrée de gamme sous conditions</h3>
        <p>
          Wix a renommé et augmenté tous ses plans en 2026 : la vente en
          ligne démarre au plan Essentiel à 30 €/mois TTC (l&apos;équivalent
          coûtait 17 € un an plus tôt, +76 %), Business à 40,80 €, Business
          Elite à 178,80 €. Squarespace : 12 à 69 €/mois selon le plan, avec
          2 % de frais de transaction sur le plan d&apos;entrée (0 % ensuite).
          Corrects pour vendre quelques références ; limités dès que le
          catalogue, le référencement Google (SEO) ou les connexions à vos
          autres outils deviennent sérieux — et vous ne possédez pas votre
          boutique.
        </p>

        <h3>Le sur-mesure headless : notre terrain de jeu</h3>
        <p>
          Le « headless » (littéralement « sans tête ») sépare la vitrine
          que voient vos clients du moteur qui gère catalogue, commandes et
          paiements. La partie visible — le « front » — est développée sur
          mesure avec une technologie moderne (Next.js) et branchée sur un
          moteur éprouvé : Medusa et Saleor, deux moteurs open source
          (logiciels libres), gratuits si votre prestataire les installe
          sur votre serveur — leurs versions hébergées démarrent à 29 $ et
          159 $/mois (environ 27 € et 150 €) — ou Shopify, utilisé en
          simple moteur derrière une vitrine sur mesure.
        </p>

        <InfoBox variant="emerald" title="En clair : le headless, expliqué avec un restaurant">
          Imaginez un restaurant. Une boutique classique (Shopify,
          PrestaShop…), c&apos;est une franchise tout-en-un : cuisine et
          salle livrées ensemble, décoration et menu imposés. Rapide à
          ouvrir — mais déplacer un mur devient compliqué. Le headless
          sépare les deux : la cuisine — le moteur qui gère catalogue,
          stocks, commandes et paiements — reste un logiciel éprouvé ; la
          salle — le site que voient vos clients — est construite sur
          mesure et passe commande par un passe-plat numérique (une
          « API »). Résultat : une vitrine plus rapide, un design sans
          limite, des connexions pensées pour vos outils. Contrepartie : un
          budget d&apos;entrée plus élevé, car on construit la salle au
          lieu de la louer — un écart que l&apos;IA a fortement
          réduit : notre entrée de gamme démarre à
          15 000 €. Le site que vous lisez est construit
          exactement ainsi : 100 % Next.js/React. Tout
          l&apos;arbitrage de ce guide : louer vite, ou bâtir pour
          durer.
        </InfoBox>

        <p>
          Fourchettes agence France : <strong>15 000 à 80 000 € et
          plus</strong>. Chez <Link href="/services/ecommerce">Hagnéré
          Code</Link>, une plateforme e-commerce sur mesure va de 15 000 à
          120 000 € au forfait fixe contractuel. Ce qu&apos;on achète à ce
          prix : zéro licence à vie, une liberté visuelle totale —
          animations et interactions produit (bibliothèques type
          Framer Motion ou GSAP) qu&apos;aucun thème de plateforme ne
          permet —, des performances au niveau des
          exigences Google, un modèle de données à votre image, et des
          intégrations (ERP, caisse, logistique) conçues plutôt que
          bricolées.
        </p>

        <InfoBox variant="blue" title="La question qui tranche 80 % des cas">
          Quel est votre chiffre d&apos;affaires en ligne cible à
          3 ans ? Test de marché, side-project ou budget de quelques
          milliers d&apos;euros : une plateforme standard bien montée
          reste le bon outil — rapide à lancer, facile à quitter. Pour
          une entreprise établie qui veut convertir et durer, le
          calcul a changé : le développement assisté par IA
          (Claude Code) a ramené le ticket d&apos;entrée du sur-mesure
          à 15 000 € — dans la fourchette d&apos;une boutique PME en
          agence (8 000 à 25 000 €), ce qui était impensable il y a
          trois ans. Au-delà de 500 000 €/an — ou dès qu&apos;un ERP,
          du B2B ou de vrais volumes entrent en jeu — il n&apos;y a
          même plus débat : le cumul abonnements + applications +
          commissions + limites du modèle rattrape le coût du
          sur-mesure. Entre le test de marché et le seuil des
          500 000 €, faites le calcul de la section
          suivante — en comptant ce qu&apos;aucune colonne de tableau
          ne montre : la propriété du site, un design et un
          référencement sans plafond, et zéro refonte à 18 mois.
        </InfoBox>
        <p>
          Et si votre hésitation se résume au duel le plus fréquent de
          2026 — rester sur Shopify en montant en gamme, ou construire
          votre propre plateforme —, nous lui avons consacré un
          comparatif entier : notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">guide Shopify ou
          e-commerce sur mesure</Link>, avec le match sur 3 ans chiffré
          et le coût de sortie que personne ne publie.
        </p>

        <h2 id="tco">4. Le vrai coût sur 3 ans (celui que les devis ne montrent pas)</h2>
        <p>
          Aucune page de prix ne le publie, alors le voici : le coût total
          de possession sur 36 mois — le « TCO » des directions
          financières : tout ce que la boutique coûtera réellement, pas
          seulement son prix d&apos;achat — pour une même boutique PME.{" "}
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
            ["Maintenance (mises à jour, sécurité — la « TMA » des agences)", "incluse plateforme*", "3 600 €", "5 400 €", "7 200 €"],
            ["Commissions de paiement", "7 665 €", "8 565 €", "8 115 €", "8 565 €"],
            ["Total 36 mois", "≈ 23 900 €", "≈ 26 300 €", "≈ 26 500 €", "≈ 47 600 €"],
          ]}
        />
        <p>
          Comment lire la ligne « commissions » : 150 000 € encaissés par
          an pendant 3 ans, c&apos;est 450 000 € et environ 7 200
          commandes ; à 1,5 % + 0,25 € pièce, cela donne 8 565 € chez
          Stripe (retenu pour les colonnes WooCommerce et sur-mesure),
          8 115 € chez PayPlug à 1,4 % (colonne PrestaShop) et 7 665 €
          chez Shopify Payments. Le raccourci pour votre
          cas : environ <strong>2 % du chiffre d&apos;affaires encaissé en
          ligne</strong>. Et l&apos;astérisque : Shopify entretient la
          plateforme, pas les évolutions de votre boutique.
        </p>
        <p>
          Lecture honnête de ce tableau. Un : <strong>le récurrent
          fait plus que doubler le budget perçu</strong> — la boutique « à 10 000 € »
          coûte 24 000 € sur 3 ans, comme une voiture dont le prix en
          concession n&apos;est que le début. Deux : à 150 000 € de CA,
          les trois plateformes se tiennent en coût total, et le
          sur-mesure coûte 21 000 à 24 000 € de plus sur 36 mois selon
          la plateforme — nous
          le disons alors même que c&apos;est notre métier. Ce surcoût
          achète l&apos;actif : un site qui vous appartient, aucun
          plafond d&apos;applications ni de design — et un coût qui ne
          bouge plus quand vos ventes montent, alors que chaque
          colonne plateforme grimpe avec elles. Trois : plus vous
          vendez, plus le classement change — sur une plateforme, presque
          tout augmente avec vos ventes (palier d&apos;abonnement,
          applications, commissions), quand une boutique sur mesure coûte
          à peu près la même chose que vous vendiez 150 000 € ou
          500 000 € par an ; la bascule purement comptable se situe entre
          300 000 et 500 000 € de ventes en ligne — la bascule
          stratégique (posséder sa boutique, design et SEO sans
          plafond, aucune dépendance à un éditeur) arrive bien avant :
          c&apos;est l&apos;objet de la section 3. Le réflexe : ne comparez jamais
          deux devis sur le prix de création, mais sur le total à 36 mois.
          Un poste mérite maintenant qu&apos;on s&apos;y arrête : les
          commissions de paiement — près de 8 000 € quelle que soit la
          colonne, le deuxième budget après la création, et le seul dont
          aucun devis ne parle.
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
          Concrètement, sur une commande de 62 € (le panier moyen
          français), Stripe prélève 1,18 € ; PayPal, 2,15 €. Un euro
          d&apos;écart multiplié par 1 600 commandes, c&apos;est environ
          1 500 € par an — le prix d&apos;un contrat de maintenance. Dix
          minutes de comparaison rapportent ici des milliers d&apos;euros.
        </p>
        <p>
          Les pièges qui gonflent la note, à vérifier dans le contrat de
          votre prestataire :
        </p>
        <ul>
          <li>
            <strong>Cartes émises hors d&apos;Europe</strong> : jusqu&apos;à
            3,25 % + 0,25 € (Stripe).
          </li>
          <li>
            <strong>Conversion de devise</strong> : +2 %.
          </li>
          <li>
            <strong>Litige</strong> (le « chargeback » : un client conteste
            un paiement auprès de sa banque) : 20 € par dossier chez
            Stripe, remboursés seulement si vous gagnez la contestation.
          </li>
          <li>
            <strong>Prélèvement SEPA</strong> : 0,35 € par opération.
          </li>
        </ul>
        <p>
          Bonne nouvelle : le 3D Secure — cette étape où votre client
          confirme son achat dans son application bancaire ou par code SMS,
          rendue obligatoire en Europe par la directive sur les paiements
          (DSP2) — est inclus dans les tarifs standard, et les paiements de
          moins de 30 € en sont souvent exemptés. Sur Shopify, rappel du
          double péage : un prestataire externe déclenche 0,2 à 2 % de
          frais Shopify additionnels. Dernier péage à comparer : vendre
          sur Amazon coûte 39 € HT/mois plus <strong>8 à 15 % de
          commission par vente</strong> (tarifs officiels sell.amazon.fr,
          juillet 2026), contre 1,1 à 1,5 % de frais de paiement sur votre
          propre site — la marketplace vend un trafic immédiat, mais garde
          la relation client.
        </p>

        <h2 id="couts-caches">6. Logistique, contenus, flux : les coûts que personne ne chiffre</h2>
        <p>
          Deux postes décident si votre boutique gagnera de l&apos;argent,
          et aucun devis — ni aucun guide de prix que nous ayons lu — ne
          les chiffre : la logistique et les contenus produit. Les voici,
          en euros.
        </p>

        <h3>La logistique : 15 à 25 % de votre chiffre d&apos;affaires</h3>
        <p>
          Expédier coûte cher, et cela se prévoit dès le devis : votre site
          doit calculer les bons frais de port. Les ordres de grandeur
          France 2026 :
        </p>
        <ul>
          <li>
            <strong>Envoi à domicile</strong> : 9,34 € HT le colis
            d&apos;1 kg en Colissimo grille entreprise (6,84 € pour 250 g ;
            +1,05 € avec remise contre signature).
          </li>
          <li>
            <strong>Point relais</strong> : environ 3,89 € le colis en
            Mondial Relay pro — d&apos;où son succès.
          </li>
          <li>
            <strong>Préparation de commande</strong> (le « picking » : aller
            chercher l&apos;article en rayon et l&apos;emballer) : 0,30 à
            0,70 € par article en interne, plus 0,50 à 2 €/m²/mois de
            stockage.
          </li>
          <li>
            <strong>Logistique externalisée</strong> (un « 3PL » : un
            prestataire qui stocke et expédie vos commandes à votre place) :
            3,50 à 7 € par commande, hors transport.
          </li>
          <li>
            <strong>Logiciel d&apos;expédition</strong> : Sendcloud, gratuit
            jusqu&apos;à 20 colis/mois, puis 28 à 175 €/mois.
          </li>
        </ul>
        <p>
          Ajoutez la gestion des retours, et le total est sans appel : la
          logistique absorbe <strong>15 à 25 % du chiffre
          d&apos;affaires</strong> d&apos;un e-commerçant français.
        </p>

        <h3>Les contenus produit : 5 000 à 10 000 € pour 100 références</h3>
        <p>
          Une photo de produit sur fond neutre (dite « packshot ») coûte 19
          à 29 € en studio spécialisé (dégressif dès 10 images), une fiche
          produit rédigée et optimisée pour Google 45 à 80 €. Pour un
          catalogue de 100 références avec 2 photos et une fiche par
          produit : <strong>5 000 à 10 000 € rarement budgétés</strong> —
          le premier poste de dérive constaté en agence, loin devant la
          technique. Les fiches génériques copiées du fournisseur, elles,
          se paient en référencement nul et en taux de conversion divisé.
          (Au-delà de quelques milliers de références, on s&apos;équipe
          d&apos;un PIM — Product Information Management : le logiciel qui
          centralise les fiches produit pour le site et les marketplaces.)
          Et budgétez le temps interne : préparer 100 références, c&apos;est
          2 à 4 semaines de travail pour quelqu&apos;un de votre équipe —
          désignez un responsable de la boutique dès le devis.
        </p>

        <h3>Les flux et le marketing récurrent</h3>
        <p>
          Envoyer votre catalogue à Google pour apparaître dans
          l&apos;onglet « Shopping » (via l&apos;outil gratuit Google
          Merchant Center) ne coûte rien. Si vous payez pour apparaître en
          tête de cet onglet, sachez qu&apos;il existe des comparateurs de
          prix agréés par Google — les « CSS » (Comparison Shopping
          Services), rien à voir avec du code — habilités à diffuser les
          mêmes annonces Shopping à la place de Google : grâce à une
          décision européenne sur la concurrence, elles échappent à la
          marge que Google prélève sur les enchères, soit environ{" "}
          <strong>20 % de coût par clic en moins</strong> — un réglage
          que nous posons systématiquement dans nos campagnes de{" "}
          <Link href="/services/publicite-en-ligne">publicité en ligne
          Google Ads et Shopping</Link>. La bascule prend
          quelques jours et ne change rien pour vos clients.
        </p>
        <p>
          Autre poste récurrent : les e-mails commerciaux (relances de
          panier abandonné, promotions, newsletters). Klaviyo, la référence
          e-commerce, passe de 45 $/mois pour 1 000 contacts à 175 $/mois
          pour 5 000 (environ 42 € et 160 €) — désabonnés comptés si la
          liste n&apos;est pas nettoyée ; Brevo, l&apos;alternative
          française facturée à l&apos;e-mail envoyé, démarre vers 9 €/mois. Ajoutez la bannière de consentement
          aux cookies (l&apos;outil dit « CMP » : Axeptio dès 29 €/mois
          au-delà du seuil gratuit) et la maintenance (10 à 20 % du coût de
          création par an) : le « récurrent invisible » d&apos;une boutique
          sérieuse dépasse vite 300 €/mois.
        </p>

        <GuideInlineCTA
          title="Un chiffrage e-commerce qui inclut tout ça ?"
          description="Décrivez votre projet en 3 minutes : nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti avec une fourchette argumentée — commissions, logistique et conformité comprises."
          tags={["Objectif : prochain jour ouvré", "Forfait fixe contractuel", "Sans engagement"]}
        />

        <h2 id="devis">7. Un devis e-commerce réel, décortiqué ligne à ligne</h2>
        <p>
          Personne ne publie ses devis ; nous, oui. Voici, anonymisé, un
          devis Hagnéré Code accepté pour un profil B typique : PME de
          négoce, environ 300 références, migration depuis une ancienne
          boutique, synchronisation avec le logiciel de gestion, front
          Next.js sur moteur headless. Taux journalier (le « TJM » des
          devis) : 650 € HT.
        </p>
        <FormulaBox>
          <strong>Devis « boutique PME » — 44 jours, 28 600 € HT</strong>{" "}
          (au-dessus de la fourchette type du profil B : front
          headless sur mesure et synchronisation avec le logiciel de
          gestion inclus — la norme dès qu&apos;une caisse entre en jeu)
          <br />
          Cadrage & Discovery Sprint — l&apos;atelier de démarrage :
          périmètre, priorités, risques (2 j) — 1 300 €
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
          Migration des données & redirections 301 — un panneau « nous
          avons déménagé » posé sur chaque ancienne page, pour garder vos
          positions Google (3 j) — 1 950 €
          <br />
          SEO technique & données structurées produits (2 j) — 1 300 €
          <br />
          Tests finaux (la « recette » : tout vérifier avant
          l&apos;ouverture), accessibilité, mise en production (3 j) —
          1 950 €
        </FormulaBox>
        <p>
          Ce que ce devis vous apprend. D&apos;abord,{" "}
          <strong>le « site » visible (design + front) ne pèse que 40 % du
          budget</strong> : le reste, c&apos;est le catalogue, les flux et la
          fiabilité — exactement ce que les devis low-cost escamotent.
          Ensuite, chaque ligne est exprimée en jours-homme — une journée
          de travail d&apos;une personne, ici facturée 650 € HT : un devis
          sans ce détail des postes n&apos;est pas comparable (envoyez le
          même <Link href="/guides/cahier-des-charges-site-internet">cahier
          des charges</Link> à tous les prestataires). Enfin, ce devis ne
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
            ["Bouton de rétractation en ligne", "en vigueur depuis le 19 juin 2026", "15 000 € (pers. physique) / 75 000 € (société)", "1 – 2 jours de développement"],
            ["Facturation électronique (réception)", "1er septembre 2026 — toutes entreprises", "amendes fiscales", "plateforme agréée : 0 – 99 €/mois"],
            ["Facturation électronique (émission PME)", "1er septembre 2027", "amendes fiscales", "projet de mise en place : 1 000 – 1 500 €"],
            ["Données personnelles et traceurs (CNIL)", "permanent", "Selon le texte et le manquement : le plafond RGPD de 20 M€ ou 4 % du CA mondial ne s'applique pas automatiquement à toute irrégularité de cookies", "analyse des traceurs réellement utilisés, puis CMP si un consentement est requis : ~29 €/mois + paramétrage"],
          ]}
        />
        <p>Dans le détail :</p>
        <ul>
          <li>
            <strong>Accessibilité</strong> : depuis le 28 juin 2025, la
            réglementation européenne (European Accessibility Act) impose
            aux sites e-commerce vendant aux particuliers d&apos;être
            utilisables par les personnes en situation de handicap
            (référentiel français RGAA). Exemption uniquement si vous
            remplissez les deux conditions à la fois : moins de 10 salariés{" "}
            <em>et</em> moins de 2 M€ de CA annuel — une entreprise de 8
            salariés à 3 M€ de CA est donc concernée. Dans le doute,
            demandez par écrit à votre prestataire.
          </li>
          <li>
            <strong>Bouton de rétractation</strong> : depuis le 19 juin
            2026, tout site marchand doit proposer une fonction « renoncer
            au contrat » accessible en ligne pendant les 14 jours de
            rétractation (ordonnance n° 2026-2 du 5 janvier 2026).
            Vérifiez que votre prestataire l&apos;a prévue.
          </li>
          <li>
            <strong>Facturation électronique</strong> : dès le 1er
            septembre 2026, toute entreprise doit pouvoir recevoir des
            factures électroniques via une plateforme agréée ; vos ventes
            aux particuliers (B2C) devront en outre être transmises
            automatiquement à l&apos;administration fiscale — le
            « e-reporting ». Concrètement : votre site ou votre caisse
            devra savoir envoyer ces données, vérifiez-le dans le devis.
          </li>
          <li>
            <strong>RGPD et cookies</strong> : rien de théorique — en 2025,
            la CNIL a infligé <strong>150 millions d&apos;euros
            d&apos;amende à Shein</strong> pour des cookies déposés sans
            consentement.
          </li>
        </ul>
        <p>
          Un devis sérieux intègre ces sujets dès la conception —
          accessibilité, RGPD et facturation électronique font partie de
          notre périmètre{" "}
          <Link href="/services/securite-rgpd">sécurité et conformité
          RGPD</Link> ; un devis
          qui n&apos;en parle pas les facturera en avenant — ou vous
          laissera l&apos;ardoise.
        </p>

        <h2 id="rentabilite">9. Combien rapporte un site e-commerce ? Le calcul honnête</h2>
        <p>
          Avant de débattre du prix du site, posez la question qui commande
          tout le reste : combien peut-il rapporter ? C&apos;est celle que
          tout porteur de projet se pose — et que presque aucun guide de
          prix ne traite honnêtement. Le marché est réel : les Français ont
          dépensé <strong>196,4 milliards d&apos;euros en ligne en
          2025</strong> (+7 % sur un an, FEVAD), la France compte 158 200
          sites marchands actifs et 42,2 millions de cyberacheteurs, et
          69 % des acheteurs commandent depuis leur mobile. Mais la moyenne
          cache la distribution : le panier moyen est descendu à 62 €, et
          le taux de conversion — la part des visiteurs qui finissent par
          acheter : 2 %, c&apos;est 2 acheteurs pour 100 visiteurs — se
          situe le plus souvent entre 1,5 et 3 % selon le secteur, sachant
          que près de 70 % des paniers remplis sont abandonnés avant
          paiement.
        </p>
        <p>
          Faites le calcul avant de construire.{" "}
          <strong>Pour 100 000 € de CA annuel</strong> à 2 % de conversion et
          62 € de panier, il vous faut environ 1 600 commandes, donc{" "}
          <strong>80 000 visites dans l&apos;année</strong>. Ces visites
          viendront de trois sources : le référencement (des mois de
          travail), votre notoriété, ou la publicité. Repère 2026 pour
          cette dernière : 0,50 à 1,20 € le clic en e-commerce — 80 000
          visites entièrement achetées coûteraient donc plus cher que le
          site lui-même. D&apos;où la règle : prévoyez un budget marketing
          récurrent de 10 à 20 % du CA. Un site sans plan de trafic est un magasin
          sans rue : exigez cette conversation en même temps que le devis.
          Retirez ensuite la logistique (15 à 25 % du CA), les commissions
          de paiement (~2 %) et le coût de la marchandise : voilà votre
          vraie marge. Ce calcul en amont — pas le choix de la
          plateforme — est ce qui sépare les boutiques rentables des
          158 200 sites qui se partagent les miettes — et la base
          technique en est le multiplicateur : un site plus rapide
          et mieux structuré améliore chaque maillon (trafic,
          conversion, panier). C&apos;est là que le
          budget création redevient un investissement.
        </p>

        <InfoBox variant="blue" title="Exemple concret : où part l'argent d'une commande de 62 € ?">
          <p>
            Prenons le panier moyen français. En ordre de grandeur, une
            fois la commande expédiée :
          </p>
          <ul className="mt-2 space-y-1">
            <li>Achat de la marchandise (avec 60 % de marge brute) : − 25 €</li>
            <li>Logistique — emballage, préparation, Colissimo : − 9 à 12 €</li>
            <li>Commission de paiement (Stripe : 1,5 % + 0,25 €) : − 1,18 €</li>
            <li>Publicité pour obtenir ce client (10 à 20 % du CA) : − 6 à 12 €</li>
          </ul>
          <p className="mt-2">
            Il reste 12 à 20 € pour l&apos;abonnement ou la maintenance du
            site, votre temps, vos impôts — et votre bénéfice. Une commande
            isolée ne rembourse jamais une boutique à 10 000 € : c&apos;est
            le volume qui le fait — d&apos;où le calcul de trafic
            ci-dessus.
          </p>
        </InfoBox>

        <h2 id="refonte">10. Prix d&apos;une refonte e-commerce</h2>
        <p>
          Votre boutique existe déjà, mais elle a vieilli ? La refonte
          obéit à ses propres règles — avec un risque que la création
          n&apos;a pas : tout ce que vous avez accumulé (produits, clients,
          référencement) doit survivre au déménagement. Une refonte coûte
          généralement <strong>60 à 80 % du prix d&apos;une
          création</strong> équivalente. Pourquoi si cher, alors que « tout
          existe déjà » ? Parce qu&apos;une refonte est une création{" "}
          <em>plus</em> un déménagement : reconstruire la boutique et
          transporter l&apos;existant — produits, clients, historique de
          commandes (2 000 à 8 000 € de migration selon le volume et la
          propreté des données) — sans rien casser. Le poste le plus
          critique est invisible : les redirections 301, le « suivi de
          courrier » du web — comme à La Poste, chaque ancienne adresse
          doit renvoyer vers la nouvelle, sans quoi visiteurs et Google
          frappent à une porte close et votre référencement s&apos;évapore
          en quelques semaines.
        </p>
        <p>
          Cas réel : un marchand refond sans plan de redirections ; ses
          anciennes pages affichent « page introuvable », Google les
          déclasse, et un site à 1 000 visites par jour tombe à 300. À 2 %
          d&apos;acheteurs et 62 € de panier, c&apos;est environ 26 000 €
          de ventes perdues par mois — bien plus que la refonte
          elle-même.
          Ajoutez la conduite du changement si vos équipes administrent la
          boutique au quotidien. Une migration PrestaShop ou WooCommerce
          vers une base technique moderne se chiffre couramment entre
          10 000 et 20 000 € et plus. Avant toute refonte, exigez un audit
          de l&apos;existant et un inventaire des URLs — la première
          section d&apos;un bon{" "}
          <Link href="/guides/cahier-des-charges-site-internet">cahier des
          charges de refonte</Link>.
        </p>

        <h2 id="prestataires">11. Plateforme seul, freelance ou agence : qui choisir</h2>
        <p>
          Reste un dernier arbitrage, celui qui conditionne tous les prix
          de ce guide : à qui confier le chantier ? Les quatre options se
          distinguent moins par le budget que par ce qu&apos;elles
          garantissent — et ce qu&apos;elles laissent à votre charge.
        </p>
        <GuideTable
          headers={["Option", "Budget création", "Forces", "Limites"]}
          rows={[
            ["Vous-même sur Shopify/Wix", "0 – 1 500 € + abonnements", "Rapide, réversible, idéal pour tester", "Votre temps, plafond en référencement et design, vous ne possédez rien"],
            ["Freelance", "2 500 – 12 000 €", "Prix, souplesse, contact direct", "Tout repose sur une seule personne : disponibilité, sérieux des tests, garanties limitées"],
            ["Agence généraliste", "8 000 – 25 000 €", "Équipe, process, garanties", "Qualité inégale : exigez des références e-commerce"],
            ["Agence spécialisée / sur-mesure", "15 000 – 120 000 €", "Connexions à vos outils, rapidité, capacité à grandir sans tout refaire", "Budget d'entrée plus élevé — à réserver aux vrais besoins"],
          ]}
        />
        <p>
          Les taux du marché pour situer les devis : un développeur
          e-commerce freelance se facture autour de 40 à 46 €/h selon la
          plateforme (relevés Codeur.com), une agence Shopify 500 à
          900 €/jour, et les agences parisiennes facturent 30 à 50 % de plus
          que les agences régionales à prestation comparable — faire
          travailler une équipe senior depuis Bassens, aux portes de Chambéry,
          n&apos;est pas un hasard dans notre modèle. Le critère qui compte plus
          que le statut : <strong>qui a déjà livré une boutique avec VOS
          contraintes</strong> (votre volume de produits et de commandes, votre
          ERP, votre secteur) — demandez à voir ces boutiques en production.
        </p>

        <h2 id="erreurs">12. Les 6 erreurs qui font exploser la facture</h2>
        <p>
          Sur les projets que nous reprenons après un premier échec, les
          mêmes causes reviennent. Les voici, de la plus fréquente à la
          plus coûteuse — chacune renvoie à la section qui permet de
          l&apos;éviter.
        </p>
        <ol>
          <li>
            <strong>Choisir la plateforme avant le modèle économique.</strong>{" "}
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
            1 500 € sans référencement, sans conformité et sans structure se
            refond dans les 2 ans — au prix fort, migration comprise. Cas
            vécu : une boutique « clé en main » à 3 500 €, 40 visites/jour
            à 6 mois, des fiches copiées que Google ignore — coût réel à
            18 mois, refonte comprise : plus de 15 000 €, pour un projet
            qui en valait 12 000 bien cadré.
          </li>
          <li>
            <strong>Comparer des devis à périmètres différents.</strong> Sans
            cahier des charges commun, l&apos;écart de prix mesure
            l&apos;écart de compréhension, pas la compétitivité. Notre{" "}
            <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle de
            cahier des charges</Link> est libre de copie.
          </li>
        </ol>

        <h2 id="methode">13. Méthode : payer le juste prix en 5 étapes</h2>
        <ol>
          <li>
            <strong>Posez le modèle économique d&apos;abord</strong> — CA
            cible à 3 ans, panier moyen, marge, canaux d&apos;acquisition.
            Le calcul de la section 9 tient sur une page.
          </li>
          <li>
            <strong>Inventoriez l&apos;existant</strong> — caisse, gestion,
            comptabilité, stock : chaque outil à connecter est une ligne de
            devis. Découvert en cours de projet, c&apos;est un avenant.
          </li>
          <li>
            <strong>Rédigez un cahier des charges commun</strong> — 10
            sections suffisent, notre{" "}
            <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
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
            pas en crises. Et vérifiez les{" "}
            <Link href="/guides/aides-creation-site-internet">aides de
            votre région</Link> : plusieurs subventions ciblent
            explicitement l&apos;e-commerce (30 à 50 % du HT).
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
          3 minutes</Link> : objectif de réponse personnelle le prochain jour ouvré, gratuite
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
          n° 2026-2 du 5 janvier 2026 (fonction de rétractation en ligne) ;
          tarifs vendeurs Amazon (sell.amazon.fr). Prix des plans et
          commissions relevés sur les pages officielles en juillet 2026 —
          ils évoluent : vérifiez avant de signer.
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
