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

const guide = getGuide("shopify-ou-sur-mesure");

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
  wordCount: 5366,
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
      "E-commerce sur mesure",
      "Shopify",
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
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Shopify ou e-commerce sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte réellement un site Shopify par mois ?",
    answer:
      "Bien plus que l'abonnement affiché. Aux 25 à 289 €/mois du forfait (tarifs officiels vérifiés en juillet 2026, facturation annuelle) s'ajoutent les commissions sur chaque vente (1,1 à 1,5 % + 0,25 € par commande avec Shopify Payments), les applications (100 à 300 €/mois pour une boutique équipée, davantage à mesure que le volume grandit — jusqu'à 1 000 €/mois au profil marque) et, souvent, un thème premium (100 à 500 $ une fois). Résultat concret : environ 90 à 120 €/mois pour un créateur qui démarre, 570 à 820 €/mois pour une PME à 21 000 € de ventes mensuelles, 3 600 à 4 100 €/mois pour une marque à 2,4 M€ de chiffre d'affaires annuel.",
  },
  {
    question: "Quels sont les coûts cachés d'un site Shopify ?",
    answer:
      "Cinq postes que les pages tarifs ne mettent pas en avant : les applications qui s'empilent (un marchand en installe 6 en moyenne — avis clients, email, traduction, connecteur comptable… 100 à 300 €/mois) ; la pénalité si vous n'utilisez pas Shopify Payments (0,6 à 2 % de frais supplémentaires sur chaque vente selon le forfait) ; les frais de conversion de devise (2 % pour une boutique française qui encaisse en francs suisses ou en livres) ; l'email professionnel, non inclus ; et la création par un prestataire (1 500 à 5 000 € en freelance, 8 000 à 30 000 € en agence).",
  },
  {
    question: "Shopify est-il rentable sur le long terme ?",
    answer:
      "Rentable au sens strict, oui, tant que le besoin reste standard : tout compris, peu d'alternatives coûtent moins cher tant que Shopify « de série » couvre votre besoin — la section 10 le vérifie jusqu'au profil marque. Mais rentable n'est pas optimal : c'est un coût variable prélevé à vie, sur une structure de prix que vous ne contrôlez pas (hausses 2023-2024, section 7). Dès que la boutique est votre canal principal ou qu'un seuil de la section 8 est franchi, comparez avec un sur-mesure — devenu nettement plus abordable (section 9) : notre cas type aboutit à environ 75 000 € contre 170 000 € sur 3 ans au niveau Plus (section 10). Le déclencheur n'est pas le chiffre d'affaires en soi : c'est le moment où votre besoin sort du standard.",
  },
  {
    question: "Quelle formule Shopify choisir pour débuter ?",
    answer:
      "Basic, en facturation annuelle (25 €/mois au tarif vérifié en juillet 2026), avec Shopify Payments activé pour éviter la pénalité sur les ventes, un thème gratuit ou à moins de 300 $, et le strict minimum d'applications. L'offre d'entrée (essai gratuit de 3 jours puis 1 €/mois pendant 3 mois) permet de tester sans risque. Ne montez en gamme que lorsque les chiffres le justifient : Grow coûte 41 € de plus par mois que Basic mais fait passer la commission de 1,5 à 1,3 % — rentable à partir d'environ 20 500 € de ventes mensuelles ; même logique pour Advanced (223 € de plus que Grow, commission à 1,1 %), rentable au-delà d'environ 110 000 € de ventes par mois.",
  },
  {
    question: "Combien coûte un site e-commerce sur mesure ?",
    answer:
      "En France en 2026 : 15 000 à 40 000 € pour une boutique sur mesure fonctionnelle avec intégrations simples, 40 000 à 120 000 € pour une plateforme complète (stock temps réel, configurateur, espace B2B, connexions à votre gestion). La médiane constatée du marché tourne autour de 45 000 €. Chez Hagnéré Code, un e-commerce sur mesure va de 15 000 à 120 000 € au forfait fixe contractuel. S'y ajoutent la maintenance (10 à 20 % du coût par an) et l'hébergement — mais ni abonnement par palier, ni commissions de plateforme, ni applications à louer.",
  },
  {
    question: "Quand faut-il quitter Shopify pour du sur-mesure ?",
    answer:
      "Quand au moins un de ces signaux devient structurel : votre B2B dépasse les 3 catalogues tarifaires du plan standard ; votre tunnel de commande a besoin d'une logique que le checkout Shopify n'autorise pas hors Plus ; vos applications cumulées coûtent plusieurs centaines d'euros par mois pour contourner des limites ; votre gestion (ERP, stock, tarifs clients) exige des intégrations profondes ; ou un passage à Shopify Plus devient la seule issue proposée. Un symptôme ponctuel se contourne ; dès qu'un signal devient structurel — a fortiori quand plusieurs convergent vers Plus —, c'est le moment de comparer sérieusement : chiffres en section 10.",
  },
  {
    question: "Peut-on migrer facilement de Shopify vers une autre plateforme ?",
    answer:
      "Partiellement — et c'est le point que trop de marchands découvrent tard. S'exportent nativement : produits, clients et commandes, en fichiers CSV. Ne s'exportent jamais : les mots de passe clients (tous les comptes doivent être recréés, avec un email de réinitialisation), le thème (écrit en Liquid, le langage propre à Shopify), les configurations de vos applications, et le contenu éditorial structuré. Le site lui-même doit être intégralement reconstruit sur la destination. Comptez un vrai projet de migration, pas un déménagement de fichiers — le détail chiffré est dans la section 11.",
  },
  {
    question: "Quel impact sur le SEO lors d'une migration depuis Shopify ?",
    answer:
      "Le même que pour toute refonte avec changement d'adresses, avec une particularité : Shopify impose sa structure d'URL (/products/, /collections/), donc chaque page devra être redirigée vers sa nouvelle adresse — le plan de redirections 301 est mécaniquement systématique. Bien exécutée (inventaire complet, redirection page à page, surveillance 30 jours), une migration conserve le référencement : les migrations propres documentées récupèrent leur trafic en 19 à 33 jours. Notre guide du prix d'une refonte détaille ce poste, ses prix et ses pièges — il s'applique intégralement à une sortie de Shopify.",
  },
  {
    question: "Les grandes marques utilisent-elles Shopify ?",
    answer:
      "Oui — y compris de très grandes (Gymshark, Kylie Cosmetics, et en France de nombreuses marques qui vendent en direct au consommateur, dites « DTC »), généralement sur Shopify Plus. C'est un vrai argument de solidité : l'infrastructure encaisse les pics sans que vous y pensiez. Mais notez le modèle économique : Plus démarre à 2 100 €/mois avec engagement, plus une part variable sur les ventes au-delà d'un seuil, plus les applications et l'agence. Les grandes marques paient ce confort très cher — la question de ce guide est précisément de savoir à partir de quand ce prix se compare à celui d'une plateforme à vous.",
  },
  {
    question: "Qu'est-ce que Shopify Plus et combien ça coûte ?",
    answer:
      "La version haut de gamme de Shopify : checkout réellement personnalisable, B2B complet (catalogues tarifaires illimités, paiements partiels), multi-boutiques, limites techniques relevées. Tarif officiel : à partir de 2 100 €/mois — environ 2 500 $/mois en engagement 1 an ou 2 300 $/mois en engagement 3 ans, plus une part variable (environ 0,40 % des ventes en contrat 1 an) au-delà d'un seuil de volume. Ajoutez la mise en place par une agence (25 000 à 100 000 €+) et la maintenance : un Plus sérieux est un budget à six chiffres sur 3 ans.",
  },
  {
    question: "Qu'est-ce qu'un site e-commerce headless ?",
    answer:
      "Une architecture où la vitrine (ce que voit le client) est développée sur mesure — souvent en React ou Next.js — pendant que le moteur (produits, commandes, paiement) reste celui d'une plateforme comme Shopify. Sur le papier, le meilleur des deux mondes. En pratique, les données publiées par Shopify lui-même en 2023 montraient que 59,5 % des boutiques classiques passaient les seuils de vitesse de Google, contre 35 % des boutiques headless Hydrogen — pour un coût 3 à 5 fois supérieur ; ces moyennes bougent vite et mesurent l'exécution du marché, pas le plafond de la technologie (section 12). Le headless se justifie par des besoins précis (contenu riche, multi-boutiques, intégrations), pas par la vitesse.",
  },
  {
    question: "Peut-on commencer sur Shopify et passer au sur-mesure ensuite ?",
    answer:
      "Oui — c'est la bonne trajectoire pour un lancement ou un test de marché : Shopify est imbattable pour démarrer. Mais n'attendez pas mécaniquement des centaines de milliers d'euros de chiffre d'affaires : le bon déclencheur n'est pas le chiffre d'affaires, c'est le premier seuil structurel de la section 8 — et le sur-mesure coûte aujourd'hui moins cher qu'on ne le croit (section 9). Anticipez la sortie dès le départ : exportez vos données régulièrement, gardez la propriété de votre nom de domaine et de vos contenus, et documentez vos processus — la migration sera un projet, pas une crise.",
  },
  {
    question: "Pourquoi Shopify a-t-il de si mauvais avis sur Trustpilot ?",
    answer:
      "Shopify affiche 1,3/5 sur Trustpilot — une note à lire avec recul : les plateformes d'avis surreprésentent les clients mécontents, et c'est vrai de la plupart des grands logiciels par abonnement. Les motifs récurrents des marchands restent instructifs : des frais jugés opaques ou prélevés sans explication claire, un support difficile à joindre, et des difficultés au moment de partir (transfert de domaine, résiliation). Aucun de ces points n'est rédhibitoire pour lancer une boutique ; tous plaident pour la même hygiène : lire sa facture chaque mois et garder ses données exportées.",
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
          { label: "Shopify ou e-commerce sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Le coût réel de Shopify — abonnement, commissions et applications dans le même total —, les cas où il est imbattable, les 7 limites et leur seuil de déclenchement, le match sur 3 ans avec point de bascule, et le coût de sortie qu'aucune des pages françaises que nous avons analysées ne chiffre."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Shopify réel : 90 – 4 100 €/mois", description: "", color: "violet" },
          { number: "02", title: "Sur-mesure : 15 000 – 120 000 €", description: "", color: "blue" },
          { number: "03", title: "Coût de sortie enfin chiffré", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/prix-site-e-commerce", label: "Prix d'un site e-commerce" },
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte de site" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Shopify ou sur-mesure : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Une agence qui vend du sur-mesure et qui vous dit que{" "}
          <strong>Shopify reste imbattable pour lancer et tester un
          marché</strong>, c&apos;est rare. C&apos;est pourtant ce que
          disent les chiffres — au lancement. Pour une boutique qui doit
          convertir et durer, ce guide montre où la conclusion
          s&apos;inverse : le développement assisté par IA a fait
          baisser le coût du sur-mesure, et le point de bascule —
          chiffré section 10 — se rapproche chaque année. Tout est dans
          le même total — abonnement, commissions, applications,
          agence —, y compris ce que coûte une sortie de Shopify.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Le verdict en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. Franchise ou murs à soi : de quoi parle-t-on" },
            { id: "marche-2026", label: "3. Ce que dit le marché français en 2026" },
            { id: "quand-shopify-gagne", label: "4. Les cas où Shopify est imbattable" },
            { id: "cout-reel-shopify", label: "5. Le vrai coût de Shopify, tout compris" },
            { id: "trois-profils", label: "6. Trois boutiques, trois factures réelles" },
            { id: "hausses", label: "7. Le risque fournisseur : ce que l'historique des prix apprend" },
            { id: "limites", label: "8. Les 7 limites réelles — et leur seuil de déclenchement" },
            { id: "sur-mesure", label: "9. Le sur-mesure : prix réels, devis décortiqué" },
            { id: "tco", label: "10. Le match sur 3 ans : où est le point de bascule" },
            { id: "cout-sortie", label: "11. Le coût de sortie de Shopify, enfin chiffré" },
            { id: "headless", label: "12. La 3e voie : le headless, démonté honnêtement" },
            { id: "verdict-par-profil", label: "13. La grille de décision finale, profil par profil" },
            { id: "methode", label: "14. Méthode : trancher en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. Le verdict en 30 secondes</h2>
        <p>
          En 2026, <strong>Shopify est le bon choix pour lancer et
          tester une boutique au besoin standard</strong> : comptez{" "}
          <strong>90 à 120 €/mois tout compris pour un créateur qui
          démarre</strong>. Mais grandir sur une plateforme louée a un
          loyer : <strong>570 à 820 €/mois pour une PME</strong>{" "}
          (21 000 € de ventes mensuelles) et{" "}
          <strong>3 600 à 4 100 €/mois pour une marque à 2,4 M€ de
          chiffre d&apos;affaires</strong> — commissions et applications
          comprises. <strong>Le sur-mesure (15 000 à 120 000 €)
          devient le meilleur calcul dès que votre besoin sort du
          standard</strong> : B2B au-delà de 3 catalogues tarifaires
          (les grilles de prix différentes selon le client), tunnel de
          commande spécifique, intégrations profondes — au plus tard
          quand le devis Shopify Plus (2 100 €/mois minimum) arrive sur
          la table. Et son ticket d&apos;entrée a nettement baissé : le
          devis décortiqué de la section 9 en témoigne. Sur 3 ans,
          notre comparaison aboutit à ≈ 75 000 € en sur-mesure contre
          ≈ 170 000 € en Shopify Plus.
        </p>
        <GuideTable
          headers={["Votre situation", "Notre verdict", "Budget réaliste"]}
          rows={[
            ["Lancement, test de marché, side-project", "Shopify, sans hésiter", "0 – 5 000 € de création + 90 – 120 €/mois"],
            ["PME B2C établie, besoin standard", "Shopify (Grow/Advanced) tant qu'aucun seuil de la section 8 n'est franchi — en restant réversible", "8 000 – 30 000 € de création + 570 – 4 100 €/mois selon volume"],
            ["B2B réel : tarifs par client, commandes récurrentes", "Sur-mesure (ou Shopify Plus, comparez)", "≈ 75 000 € en sur-mesure vs ≈ 170 000 € en Plus sur 3 ans (section 10)"],
            ["Logique métier unique : configurateur, devis, abonnements complexes", "Sur-mesure", "15 000 – 120 000 € au forfait"],
            ["Marque en croissance qui vise Plus", "Comparer les deux, chiffres en main", "Le point de bascule est en section 10"],
          ]}
        />

        <InfoBox variant="blue" title="Les 12 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Shopify</strong> : la plateforme e-commerce louée par abonnement — vous « emménagez » dans une boutique prête à l&apos;emploi.</li>
            <li><strong>SaaS</strong> : un logiciel loué par abonnement mensuel — Shopify en est un.</li>
            <li><strong>Sur-mesure</strong> : une boutique développée pour vous, dont vous êtes propriétaire (code et données).</li>
            <li><strong>Commission (frais de transaction)</strong> : le pourcentage prélevé sur chaque vente — le vrai loyer de Shopify.</li>
            <li><strong>PSP</strong> : le prestataire qui encaisse les paiements par carte (Shopify Payments, Stripe…). Tout site marchand en paie un.</li>
            <li><strong>App (application)</strong> : un module loué au mois qui ajoute une fonction à Shopify (avis clients, email, traduction…).</li>
            <li><strong>Thème / Liquid</strong> : l&apos;habillage de la boutique, écrit dans le langage propre à Shopify — il ne se transporte pas ailleurs.</li>
            <li><strong>Checkout</strong> : le tunnel de commande (panier → paiement) — la « caisse » de la boutique.</li>
            <li><strong>B2B</strong> : la vente aux professionnels (tarifs par client, commandes récurrentes), par opposition au B2C (particuliers).</li>
            <li><strong>ERP</strong> : le logiciel de gestion de l&apos;entreprise (stock, facturation, comptabilité) que la boutique doit souvent brancher.</li>
            <li><strong>Headless</strong> : une vitrine développée sur mesure, branchée sur le moteur d&apos;une plateforme (section 12).</li>
            <li><strong>Coût de possession (TCO)</strong> : le coût total sur plusieurs années — création, abonnements, commissions, maintenance.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Franchise ou murs à soi : de quoi parle-t-on</h2>
        <p>
          L&apos;image la plus juste : <strong>Shopify est une
          franchise</strong>. Droit d&apos;entrée faible, boutique aux
          normes en quelques jours, enseigne solide qui encaisse les pics
          de fréquentation — et en échange, un loyer, un pourcentage sur
          chaque vente, des rayonnages à louer en plus (les apps) et un
          agencement qu&apos;on ne modifie que dans les limites du
          contrat. <strong>Le sur-mesure, c&apos;est construire son
          propre magasin</strong> : plus long et plus cher à
          l&apos;entrée, mais les murs sont à vous, la caisse fait
          exactement ce que votre métier exige, et personne ne peut
          augmenter votre loyer.
        </p>
        <p>
          Fil rouge de ce guide : <strong>Granita, marque de sirops
          artisanaux à Annecy</strong>. Lancée en 2021 sur Shopify Basic —
          le bon choix, nous le verrons —, elle réalise aujourd&apos;hui
          2,4 M€ de chiffre d&apos;affaires annuel en ligne
          (2 500 commandes/mois, panier moyen 80 €), et son activité
          B2B — cafés, hôtels, restaurants — décolle : tarifs négociés
          par client, commandes récurrentes, facturation à 30 jours.
          Exactement le genre de trajectoire où la question
          « Shopify ou sur-mesure ? » cesse d&apos;être théorique. Nous
          allons la chiffrer de bout en bout.
        </p>

        <h2 id="marche-2026">3. Ce que dit le marché français en 2026</h2>
        <p>
          Trois chiffres situent le débat. Le e-commerce français a pesé{" "}
          <strong>196,4 milliards d&apos;euros en 2025</strong> (+7 %,
          chiffres Fevad), portés par plus de 158 000 sites marchands
          actifs. Sur les nouvelles boutiques créées en France en 2025,{" "}
          <strong>Shopify en a capté 48,8 %</strong> — près d&apos;une
          sur deux — contre 5,4 % pour PrestaShop, l&apos;ancien champion
          français (étude ShopRank). Mais le parc installé raconte une
          autre histoire : WooCommerce reste premier en nombre de sites
          (~47 %), et <strong>PrestaShop domine toujours le chiffre
          d&apos;affaires cumulé</strong> (7,96 milliards d&apos;euros,
          contre 5,76 pour Shopify — baromètre Friends of Presta 2026).
          Le duel des deux standards a d&apos;ailleurs son guide
          dédié : notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">comparatif
          WooCommerce ou Shopify</Link>, coûts et vitesse mesurés des
          deux côtés.
        </p>
        <p>
          Traduction pour votre décision : <strong>Shopify a gagné la
          bataille du démarrage, pas celle de la valeur</strong>. Les
          boutiques qui pèsent lourd tournent majoritairement sur des
          plateformes qu&apos;elles contrôlent davantage. La vraie
          question de 2026 n&apos;est donc plus « Shopify ou
          PrestaShop ? » — pour un nouveau projet, ce débat est tranché —
          mais bien : <strong>que faire quand on grandit ?</strong> Rester
          dans la franchise en montant en gamme, ou construire ses murs.
          C&apos;est l&apos;objet du reste de ce guide.
        </p>

        <h2 id="quand-shopify-gagne">4. Les cas où Shopify est imbattable</h2>
        <p>
          Commençons contre notre intérêt : nous vendons du sur-mesure,
          et pourtant — dans les cas suivants, Shopify gagne, point :
        </p>
        <ul>
          <li>
            <strong>Le lancement.</strong> Une boutique en ligne
            fonctionnelle en une après-midi, sans compétence technique,
            pour 1 €/mois pendant 3 mois (offre d&apos;entrée officielle) :
            aucun développement ne rivalise avec ça pour tester une
            idée.
          </li>
          <li>
            <strong>Le test de marché.</strong> Vous ne savez pas encore
            si le produit se vend : chaque euro doit aller au produit et
            à la publicité, pas au site.
          </li>
          <li>
            <strong>Le budget sous 5 000 €.</strong> Un Shopify bien
            configuré sur un bon thème vaut mieux qu&apos;un sur-mesure
            bâclé au même prix — le même raisonnement que nous tenons
            pour WordPress sur les sites vitrines.
          </li>
          <li>
            <strong>La boutique physique reliée au site.</strong> Si
            vous encaissez aussi en magasin, le point de vente Shopify
            (POS) unifie caisse, stock et fichier clients avec la
            boutique en ligne — une intégration entière que le
            sur-mesure devrait financer.
          </li>
          <li>
            <strong>Le catalogue standard vendu en direct — tant que
            vous testez.</strong> Des produits, des variantes simples,
            du paiement carte : le besoin est couvert nativement. Le
            jour où la boutique devient votre canal principal, ce même
            standard — URLs imposées, tunnel de commande verrouillé,
            applications louées — devient la limite (sections 8 et 10).
          </li>
          <li>
            <strong>Pas d&apos;équipe technique, et pas envie d&apos;en
            avoir.</strong> Shopify gère l&apos;hébergement, la sécurité,
            les mises à jour, les pics du Black Friday. Ce confort a un
            prix ; au démarrage, il le vaut.
          </li>
        </ul>
        <p>
          C&apos;est le premier verdict de ce guide, et il est massif :{" "}
          <strong>pour un lancement au besoin standard, prenez Shopify</strong>.
          Près d&apos;une nouvelle boutique française sur deux fait ce
          choix, et c&apos;est rationnel. Granita, en 2021, a eu raison :
          15 jours entre l&apos;idée et la première vente, 3 000 € tout
          compris la première année. La suite du guide s&apos;adresse au
          dirigeant qu&apos;elle est devenue depuis.
        </p>

        <h2 id="cout-reel-shopify">5. Le vrai coût de Shopify, tout compris</h2>
        <p>
          Voici les tarifs officiels France — <strong>vérifiés sur la
          page tarifs de Shopify le 17 juillet 2026</strong>, précision
          nécessaire car une bonne partie des articles français affichent
          encore les anciennes grilles (29 €, 79 €… périmées) :
        </p>
        <GuideTable
          headers={["Forfait", "Prix (facturation annuelle)", "Prix (mensuelle)", "Frais de carte (Shopify Payments)"]}
          rows={[
            ["Basic", "25 €/mois", "36 €/mois", "1,5 % + 0,25 € par transaction"],
            ["Grow", "66 €/mois", "105 €/mois", "1,3 % + 0,25 €"],
            ["Advanced", "289 €/mois", "384 €/mois", "1,1 % + 0,25 €"],
            ["Plus", "dès 2 100 €/mois (engagement)", "—", "≈ 1 % + 0,25 € (taux négociés)"],
          ]}
        />
        <p>
          L&apos;abonnement n&apos;est pourtant que la petite ligne de la
          facture. Les vrais postes :{" "}
          <strong>les commissions</strong> — sur 100 € de panier en
          Basic : 1,75 € par commande, prélevés à vie, et une{" "}
          <strong>pénalité de 0,6 à 2 % supplémentaire si vous
          n&apos;utilisez pas Shopify Payments</strong> (le système de
          paiement maison) ; <strong>les applications</strong> — un
          marchand en installe 6 en moyenne, et une boutique équipée
          (avis clients, email, traduction, connecteur comptable) paie
          100 à 300 €/mois ; <strong>le thème</strong> (100 à 500 $ une
          fois) ; l&apos;email professionnel, non inclus ; et{" "}
          <strong>la création</strong> si vous déléguez : 1 500 à
          5 000 € en freelance, 8 000 à 30 000 € en agence. Deux pièges
          français méritent une ligne : les frais de conversion de devise
          (2 % si vous encaissez hors euro) et l&apos;outre-mer, où
          Shopify Payments n&apos;est pas disponible — la pénalité
          passerelle externe s&apos;applique donc d&apos;office.
        </p>
        <InfoBox variant="amber" title="Méfiez-vous des chiffres périmés — y compris les nôtres">
          Le top des résultats Google sur ces sujets contient des erreurs
          factuelles vérifiables : d&apos;anciennes grilles tarifaires
          (29/79/299 €), des frais américains appliqués à la France, une
          « limite de 100 variantes par produit » corrigée depuis (elle
          est passée à 2 048 en octobre 2025, source : journal des
          modifications officiel de Shopify), et la page comparative
          officielle de Shopify elle-même… datée d&apos;avril 2021. Tous
          les chiffres Shopify de ce guide ont été relevés à la source le
          17 juillet 2026 — et comme tout tarif, ils bougeront : vérifiez
          la page officielle avant de signer quoi que ce soit.
        </InfoBox>

        <h2 id="trois-profils">6. Trois boutiques, trois factures réelles</h2>
        <p>
          Aucune des pages françaises que nous avons analysées ne
          cumule abonnement, commissions et
          applications dans un même total. Faisons-le, avec des
          hypothèses affichées (facturation annuelle, Shopify Payments
          activé) :
        </p>
        <GuideTable
          headers={["Profil", "Abonnement", "Commissions/mois", "Apps/mois", "Total mensuel"]}
          rows={[
            ["Créateur : 60 commandes/mois, panier 50 € (3 000 €/mois)", "Basic — 25 €", "≈ 60 €", "0 – 30 € (+ thème amorti ≈ 8 €/mois)", "≈ 90 – 120 €"],
            ["PME : 300 commandes/mois, panier 70 € (21 000 €/mois)", "Grow — 66 €", "≈ 348 €", "150 – 400 €", "≈ 570 – 820 €"],
            ["Marque : 2 500 commandes/mois, panier 80 € (200 000 €/mois)", "Advanced — 289 €", "≈ 2 825 €", "500 – 1 000 €", "≈ 3 600 – 4 100 €"],
          ]}
        />
        <p>
          La lecture qui compte : <strong>Shopify n&apos;est pas un
          forfait, c&apos;est un coût variable</strong>. Dès le profil
          PME, les commissions pèsent plus de cinq fois
          l&apos;abonnement (348 € contre 66 €) ; au profil marque,
          elles représentent 70 à 80 % de la facture.
          Pour Granita, la facture Shopify réelle atteint{" "}
          <strong>43 000 à 49 000 € par an</strong> — un chiffre que son
          tableau de bord n&apos;affiche nulle part en un seul endroit.
          Précision d&apos;honnêteté, car c&apos;est le point que
          presque tous les comparatifs traitent mal : une partie de ces
          commissions (les frais de carte) se paierait aussi ailleurs —
          tout site marchand rémunère un prestataire de paiement, à des
          taux voisins. Ce que Shopify ajoute en propre, c&apos;est
          l&apos;abonnement, les applications, la pénalité hors Shopify
          Payments — et le sujet de la section suivante.
        </p>

        <h2 id="hausses">7. Le risque fournisseur : ce que l&apos;historique des prix apprend</h2>
        <p>
          Louer sa boutique, c&apos;est accepter que le bailleur fixe le
          loyer. L&apos;historique récent mérite d&apos;être connu :
          en <strong>janvier 2023</strong>, première hausse générale en
          plus de douze ans — <strong>+33 % en moyenne sur les forfaits
          standards</strong>, avec trois mois de préavis. En{" "}
          <strong>février 2024</strong>, Shopify Plus passe de 2 000 à
          2 500 $/mois (<strong>+25 %</strong>) et sa part variable sur
          les ventes de 0,25 à 0,40 % (<strong>+60 %</strong>) — le
          tarif de 2 000 $ n&apos;ayant alors été préservé qu&apos;en
          signant, avant l&apos;échéance, un engagement de trois ans
          (aujourd&apos;hui, l&apos;engagement 3 ans au catalogue se
          facture environ 2 300 $/mois). Pas de nouvelle hausse générale
          depuis — ce n&apos;est pas une fatalité annuelle, et il serait
          malhonnête de le présenter ainsi. Mais le précédent existe, et
          il enseigne une chose : <strong>sur une plateforme louée,
          votre structure de coûts ne vous appartient pas</strong>. Un
          dirigeant qui fait 70 % de sa marge en ligne doit avoir ce
          risque en tête — pas pour fuir Shopify, mais pour garder ses
          données exportées et sa décision réversible.
        </p>

        <h2 id="limites">8. Les 7 limites réelles — et leur seuil de déclenchement</h2>
        <p>
          Le vrai visage des limites de Shopify n&apos;est pas « ça ne
          marche pas » : c&apos;est <strong>« ça marche, à condition de
          monter en gamme »</strong>. Chaque limite a son seuil de
          déclenchement — le moment où elle commence à vous coûter de
          l&apos;argent :
        </p>
        <GuideTable
          headers={["Limite", "Concrètement", "Le seuil qui déclenche"]}
          rows={[
            ["Checkout verrouillé", "La « caisse » n'est personnalisable en profondeur que sur Plus", "Tunnel de commande spécifique (devis, acomptes, logique métier)"],
            ["B2B plafonné", "3 catalogues tarifaires maximum hors Plus", "Plus de 3 grilles de prix clients — le cas Granita"],
            ["Multi-boutique", "Réservé à Plus, avec apps à racheter par boutique", "Deuxième marque ou deuxième pays sérieux"],
            ["URLs imposées", "/products/, /collections/ — structure non modifiable", "Stratégie de référencement Google (SEO) appuyée sur le contenu"],
            ["Apps qui s'empilent", "Chaque manque natif = une app louée au mois", "Quand le total apps dépasse 300 €/mois, faites les comptes"],
            ["API limitée", "Débit d'échange de données plafonné par forfait", "Synchronisations lourdes (ERP, stock temps réel multi-canal)"],
            ["Contenu éditorial pauvre", "L'outil de gestion des pages et articles (le « CMS » maison) montre vite ses limites", "Site de contenu ambitieux adossé à la boutique"],
          ]}
        />
        <p>
          Un détail donne la mesure de l&apos;entonnoir : les
          limites se lèvent presque toutes… dans Shopify Plus, à
          2 100 €/mois minimum avec engagement. C&apos;est une mécanique
          commerciale parfaitement légitime — la franchise vend des
          niveaux de franchise — mais elle éclaire la vraie question
          budgétaire : <strong>le match n&apos;est pas « Shopify contre
          sur-mesure », il est « Shopify Plus contre sur-mesure »</strong>.
          Dès que plusieurs seuils de ce tableau vous concernent, vous
          comparez en réalité deux budgets à six chiffres sur 3 ans —
          un match que les pages que nous avons analysées ne chiffrent
          jamais. Nous le faisons en section 10.
        </p>

        <h2 id="sur-mesure">9. Le sur-mesure : prix réels, devis décortiqué</h2>
        <p>
          Un <Link href="/services/ecommerce">e-commerce sur
          mesure</Link> coûte en France en 2026{" "}
          <strong>15 000 à 40 000 € pour une boutique fonctionnelle</strong>{" "}
          avec intégrations simples, et <strong>40 000 à 120 000 € pour
          une plateforme complète</strong> — stock temps réel,
          configurateur, espace B2B, connexions à la gestion. La médiane
          du marché tourne autour de 45 000 €. Précision 2026, et elle
          est de première main : sur nos propres devis, le
          développement assisté par IA (Claude Code) a réduit le
          nombre de jours facturés à périmètre égal — c&apos;est ce
          qui nous permet d&apos;afficher une grille qui démarre à
          15 000 €, là où les tickets d&apos;entrée publiés par les
          agences convergeaient encore vers 25 000 à 80 000 € il y a
          trois ans. Constat d&apos;agence, pas statistique de marché :
          jugez sur pièce, le devis décortiqué ci-dessous détaille les
          jours poste par poste.
        </p>
        <p>
          Ce que vous achetez à ce
          prix : la propriété du code et des données, zéro abonnement de
          plateforme, zéro application à louer, une caisse qui applique
          exactement vos règles — et l&apos;obligation assumée
          d&apos;un budget de maintenance (10 à 20 % par an).
        </p>
        <p>
          Soyons
          aussi exigeants avec le sur-mesure qu&apos;avec Shopify : la
          sécurité, les mises à jour et la conformité (paiement confié à
          un PSP certifié type Stripe, RGPD) passent sous votre
          responsabilité — c&apos;est précisément ce que couvre ce budget
          de maintenance — et vous dépendez de l&apos;équipe qui a écrit
          le code. Exigez contractuellement la propriété du code, une
          documentation à jour et la réversibilité (un autre développeur
          doit pouvoir reprendre le projet) : les mêmes garanties que
          celles que ce guide vous conseille de réclamer à Shopify. Les
          fourchettes détaillées par plateforme sont dans notre{" "}
          <Link href="/guides/prix-site-e-commerce">guide du prix
          d&apos;un site e-commerce</Link> ; ici, tenons notre marque de
          fabrique — le devis réel. Celui de Granita : boutique en ligne
          + espace B2B pour les cafés-hôtels-restaurants, connectée à sa
          gestion. Taux journalier : 650 € HT.
        </p>
        <FormulaBox>
          <strong>Devis « e-commerce + portail B2B » — 75 jours,
          48 750 € HT</strong>
          <br />
          Cadrage : ateliers sur les processus réels de vente (3 j) —
          1 950 €
          <br />
          Design des écrans clés, boutique et espace pro (8 j) — 5 200 €
          <br />
          Catalogue, fiches produits, recherche, avis (10 j) — 6 500 €
          <br />
          Tunnel de commande grand public, paiement carte (12 j) —
          7 800 €
          <br />
          Portail B2B : tarifs par client, commandes récurrentes,
          paiement à 30 jours (15 j) — 9 750 €
          <br />
          Connexion gestion commerciale et comptabilité (8 j) — 5 200 €
          <br />
          Paiements : carte + prélèvement SEPA pour les pros (6 j) —
          3 900 €
          <br />
          Migration depuis Shopify : produits, clients, commandes,
          redirections (6 j) — 3 900 €
          <br />
          Recette complète, tests avec les équipes (5 j) — 3 250 €
          <br />
          Formation + transfert de propriété du code (2 j) — 1 300 €
        </FormulaBox>
        <p>
          Deux lectures. D&apos;abord, <strong>le portail B2B — la
          raison d&apos;être du projet — pèse un cinquième du
          devis</strong> : c&apos;est précisément la partie que Shopify
          ne sait faire qu&apos;en Plus, et qu&apos;aucune app à 50 €/mois
          ne remplace proprement. Ensuite, la ligne migration (3 900 €)
          est volontairement visible : quitter une plateforme est un
          poste en soi — la section 11 le détaille. Côté calendrier :
          ces 75 jours de travail s&apos;étalent sur 4 à 6 mois de
          projet, <strong>pendant lesquels la boutique Shopify continue
          de vendre normalement</strong> — le sur-mesure se construit à
          côté de la boutique, jamais à sa place, et la bascule
          elle-même (mise en ligne, redirections, recréation des comptes
          clients) se joue sur quelques jours une fois les tests
          validés.
        </p>

        <GuideInlineCTA
          title="Votre boutique approche des limites de Shopify ?"
          description="Décrivez votre activité en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, avec un avis franc — rester sur Shopify, viser Plus ou passer au sur-mesure — et une fourchette argumentée en jours par poste."
          tags={["Réponse sous 24 h ouvrées", "Avis franc, même si c'est « restez sur Shopify »", "E-commerce 15 000 – 120 000 €"]}
        />

        <h2 id="tco">10. Le match sur 3 ans : où est le point de bascule</h2>
        <p>
          Posons d&apos;abord la règle d&apos;équité qui manque à tous
          les comparatifs : <strong>les frais de carte se paient des
          deux côtés</strong> — un site sur mesure rémunère aussi son
          prestataire de paiement, à des taux voisins à volume égal. On
          les sort donc du match. Ce qui se compare vraiment :
          abonnements, applications, création, maintenance. Pour une
          boutique au besoin standard, le calcul est vite plié —
          Shopify gagne : même au profil marque de la section 6, la part
          proprement Shopify (abonnement Advanced + applications, frais
          de carte exclus) pèse environ 9 500 à 15 500 €/an, plus
          15 000 à 30 000 € de création agence — contre un sur-mesure
          qui démarre à 40 000 € pour ce niveau, maintenance en sus.
          Deux réserves, cependant, propres à 2026. Ce calcul ne compte
          que les euros visibles : URLs imposées, tunnel de commande
          verrouillé et pages alourdies d&apos;applications se paient
          aussi, en référencement et en conversion (section 8). Et
          l&apos;écart de création se resserre d&apos;année en année :
          le devis de la section 9, déjà établi sur cette base, en
          donne la mesure. Le match devient franchement intéressant
          quand le besoin exige Plus. Cas Granita, sur 3 ans :
        </p>
        <GuideTable
          headers={["Poste", "Shopify Plus", "Sur-mesure"]}
          rows={[
            ["Mise en place", "50 000 € (agence Plus, fourchette 25 000 – 100 000 €)", "48 750 € (devis section 9)"],
            ["Abonnement plateforme", "75 600 € (2 100 €/mois × 36)", "0 €"],
            ["Applications propres à la plateforme", "25 200 € (≈ 700 €/mois — outils marketing communs exclus, payés des deux côtés)", "0 € (fonctions intégrées au développement)"],
            ["Maintenance (« TMA » : le contrat d'entretien confié à un prestataire)", "18 000 € (500 €/mois, bas de fourchette)", "26 400 € (≈ 15 %/an + hébergement)"],
            ["Total 3 ans (hors frais de carte et outils communs)", "≈ 170 000 €", "≈ 75 000 €"],
          ]}
        />
        <p>
          Lecture honnête de ce tableau, hypothèses discutables
          comprises : nous avons pris le bas des fourchettes Shopify
          (une mise en place Plus dépasse souvent 50 000 €, un contrat
          de maintenance à 500 €/mois est optimiste) et le devis réel de
          la section 9
          côté sur-mesure — un projet plus lourd coûterait davantage.
          Même avec ces réglages prudents,{" "}
          <strong>l&apos;écart est d&apos;environ 95 000 € sur
          3 ans</strong>, et il se creuse ensuite : les 75 600 €
          d&apos;abonnement Plus reviennent chaque période de 3 ans, le
          développement sur mesure, lui, est amorti. D&apos;où le
          principe à retenir — <strong>le point de bascule n&apos;est
          pas un chiffre d&apos;affaires magique : il a deux
          déclencheurs</strong>. Le premier : le jour où votre besoin
          sort du standard et où le devis Plus arrive sur la table,
          chiffrez le sur-mesure en face, ligne à ligne. Le second,
          même à besoin standard : le jour où la boutique devient le
          cœur de votre entreprise — image, conversion, durée. Les
          euros visibles favorisent alors encore Shopify, nous venons
          de le montrer ; mais le référencement, la conversion et la
          réversibilité pèsent assez lourd pour justifier un
          contre-chiffrage sans attendre — c&apos;est la position que
          nous tenons aussi dans notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">comparatif
          WooCommerce ou Shopify</Link>.
        </p>

        <h2 id="cout-sortie">11. Le coût de sortie de Shopify, enfin chiffré</h2>
        <p>
          Aucune des pages françaises que nous avons analysées ne
          chiffre ce que coûte le départ de Shopify — au mieux,
          « plusieurs semaines de travail ». Voici le tableau de
          réversibilité, établi depuis la documentation officielle (les
          estimations de temps sont les nôtres) :
        </p>
        <GuideTable
          headers={["Ce que vous possédez", "Sortie de Shopify", "Conséquence"]}
          rows={[
            ["Produits, clients, commandes", "Export natif en fichiers CSV (tableur lisible dans Excel)", "Récupérables — comptez ≈ 1 h d'export par 100 000 commandes"],
            ["Mots de passe clients", "JAMAIS exportables", "Tous les comptes sont à recréer (email de réinitialisation, perte d'une partie des clients connectés)"],
            ["Thème et personnalisations", "Non transférables (langage Liquid propriétaire)", "La vitrine se redéveloppe intégralement"],
            ["Applications et leurs réglages", "Non transférables", "Chaque fonction se recrée ou se remplace"],
            ["Pages, blog, contenus structurés", "Pas d'export natif complet", "Passage par des outils tiers + reprise manuelle"],
            ["Adresses des pages (URLs)", "Structure imposée par Shopify", "Plan de redirections 301 (le renvoi automatique de chaque ancienne adresse vers la nouvelle), page par page"],
          ]}
        />
        <p>
          En euros, pour une boutique établie type Granita : export,
          nettoyage et réimport des données (2 à 5 jours, 1 300 à
          3 250 €), plan de redirections et migration SEO (1 000 à
          5 000 € — le poste est identique à celui d&apos;une refonte,
          notre <Link href="/guides/prix-refonte-site-internet">guide du
          prix d&apos;une refonte</Link> le détaille), recréation des
          comptes clients et communication associée, et surtout la
          reconstruction complète de la vitrine — le vrai coût, qui
          rejoint les budgets de la section 9. Les études sectorielles
          sur les changements de plateforme invitent à la prudence
          budgétaire : <strong>64 % dépassent leur budget (de 30 % en
          moyenne)</strong>. Deux conclusions : anticipez la sortie dès
          l&apos;entrée (exports réguliers, domaine et contenus à votre
          nom) — et méfiez-vous du raisonnement inverse : rester sur une
          plateforme uniquement parce qu&apos;en sortir coûte cher porte
          un nom en gestion, le coût irrécupérable, et c&apos;est un
          mauvais guide de décision.
        </p>

        <h2 id="headless">12. La 3e voie : le headless, démonté honnêtement</h2>
        <p>
          Le headless — une vitrine développée sur mesure (souvent en
          React ou Next.js, nos outils), branchée sur le moteur
          Shopify — est séduisant sur le papier : la liberté du
          sur-mesure devant, la logistique de la franchise derrière.
          Vous vous attendez peut-être à ce qu&apos;une agence Next.js
          vous le vende. Voici pourtant les chiffres, publiés par
          Shopify lui-même (données de vitesse réelles sur 16 millions
          de pages, 2023) : <strong>59,5 % des boutiques Shopify
          classiques passent les seuils de vitesse de Google, contre
          35 % des boutiques headless construites avec Hydrogen,
          l&apos;outil headless de Shopify lui-même</strong> — et ~28 % pour
          les vitrines Next.js. En clair : mal exécuté, le headless est
          plus lent que le thème qu&apos;il remplace, pour un coût 3 à
          5 fois supérieur (les projets sérieux se chiffrent en dizaines
          de milliers d&apos;euros, plus l&apos;outillage mensuel).
          Trois précisions sur ces moyennes, cependant : elles datent de
          2023 — le Web Almanac 2025 mesure depuis 76 % de boutiques
          Shopify classiques dans les clous, preuve que ces chiffres
          bougent vite —, elles sont publiées par Shopify — juge et
          partie — et elles mesurent l&apos;exécution médiane du
          marché, pas le
          plafond de la technologie. Bien exécutée, une vitrine Next.js
          tient les Core Web Vitals au vert — ce site, développé à
          100 % en Next.js, en est la démonstration en production — et
          offre ce qu&apos;aucun thème Liquid ne permet : animations sur
          mesure (Framer Motion, GSAP), direction artistique libre,
          architecture de contenu illimitée pour le référencement.
        </p>
        <p>
          Notre position d&apos;agence React : <strong>le headless est
          un excellent outil pour de vrais besoins</strong> — contenu
          riche à grande échelle, multi-boutiques avec socle commun,
          expériences interactives que Liquid ne sait pas rendre — et un
          mauvais réflexe de mode pour tout le reste. La vitesse
          s&apos;obtient d&apos;abord par l&apos;exécution, pas par
          l&apos;architecture ; et si votre besoin de fond est une
          logique métier propriétaire, le sur-mesure complet est plus
          simple et plus cohérent que l&apos;hybride. Si un prestataire
          vous propose du headless, posez-lui une question : « quel
          besoin précis, impossible en thème classique, justifie le
          surcoût ? » La qualité de la réponse vaut audit.
        </p>

        <h2 id="verdict-par-profil">13. La grille de décision finale, profil par profil</h2>
        <GuideTable
          headers={["Votre profil", "Verdict", "Pourquoi"]}
          rows={[
            ["Créateur, lancement, test de marché", "Shopify Basic, point", "Rien ne bat 90-120 €/mois tout compris pour valider un marché — rechiffrez dès que le marché est validé"],
            ["PME B2C, besoin standard", "Shopify Grow/Advanced, en restant réversible", "Compétitif tant qu'aucun seuil de la section 8 n'est franchi. Si la boutique est le cœur de l'entreprise — image, conversion, durée —, chiffrez un sur-mesure en face sans attendre (devis type en section 9) : c'est précisément le profil pour lequel notre comparatif WooCommerce ou Shopify recommande directement le sur-mesure"],
            ["B2B structurel (tarifs clients, récurrence, 30 jours)", "Sur-mesure — comparez avec Plus, chiffres en main", "≈ 75 000 € vs ≈ 170 000 € sur 3 ans dans notre cas type (section 10)"],
            ["Logique métier unique (configurateur, devis, abonnements complexes)", "Sur-mesure", "La caisse doit appliquer VOS règles — c'est le produit, pas un site"],
            ["Marque de contenu + boutique (média, communauté)", "Headless — si le besoin est démontré", "Le seul profil où l'hybride se justifie vraiment (section 12)"],
            ["Boutique qui approche du devis Plus", "Étude comparative avant signature", "L'engagement Plus (1-3 ans) mérite un contre-chiffrage sur-mesure"],
          ]}
        />

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>90 – 4 100 €/mois</strong> : le coût réel de Shopify tout compris selon le volume — un coût variable, pas un forfait (70-80 % de commissions au sommet).</li>
            <li><strong>48,8 %</strong> : la part des nouvelles boutiques françaises créées sur Shopify en 2025 — pour lancer, le débat est tranché.</li>
            <li><strong>2 100 €/mois</strong> : le ticket d&apos;entrée Shopify Plus, là où les limites se lèvent — et là où le sur-mesure redevient compétitif.</li>
            <li><strong>≈ 75 000 € vs ≈ 170 000 €</strong> : sur-mesure contre Shopify Plus sur 3 ans, dans notre cas type B2B (hypothèses affichées, frais de carte neutralisés).</li>
            <li><strong>0 €</strong> : ce que valent vos thème, apps et mots de passe clients le jour où vous partez — exportez vos données, toujours.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">14. Méthode : trancher en 5 étapes</h2>
        <ol>
          <li>
            <strong>Reconstituez votre facture Shopify réelle</strong> —
            abonnement + commissions + apps + prestataires, sur 12 mois
            (section 6). C&apos;est le chiffre de référence, et il
            n&apos;apparaît nulle part en un seul endroit dans votre
            tableau de bord.
          </li>
          <li>
            <strong>Listez vos seuils déclenchés</strong> dans le tableau
            de la section 8. Zéro : restez. Un seuil ponctuel :
            contournez-le, en notant ce que le contournement vous coûte
            chaque mois. Un seuil structurel, ou plusieurs qui
            convergent vers Plus : passez à l&apos;étape 3.
          </li>
          <li>
            <strong>Faites établir les deux devis</strong> — Shopify Plus
            (mise en place + abonnement + apps + contrat de maintenance)
            et sur-mesure, sur
            le même périmètre écrit. Notre{" "}
            <Link href="/guides/cahier-des-charges-site-internet">modèle
            de cahier des charges</Link> s&apos;adapte au e-commerce.
          </li>
          <li>
            <strong>Comparez sur 3 ans, frais de carte exclus</strong>{" "}
            (ils se paient des deux côtés), coût de sortie et
            réversibilité inclus (section 11). Exigez les hypothèses
            écrites dans chaque devis.
          </li>
          <li>
            <strong>Si vous restez sur Shopify, restez réversible</strong> :
            exports mensuels, domaine et contenus à votre nom, processus
            documentés. La meilleure position de négociation face à une
            hausse de tarifs, c&apos;est de pouvoir partir.
          </li>
        </ol>
        <p>
          C&apos;est le déroulé exact de notre méthode : un{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si
          le projet se lance)</strong> qui reconstitue votre coût réel,
          tranche honnêtement — y compris quand la réponse est « restez
          sur Shopify » — et produit périmètre, maquettes et devis au
          forfait fixe ; puis un développement livré par étapes à dates
          contractuelles (méthode <Link href="/methode">Sprint
          Fixe™</Link>), code cédé.{" "}
          <Link href="/demarrer-un-projet">Décrivez votre boutique en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées,
          gratuite et sans engagement. Et pour situer ces budgets dans
          l&apos;ensemble du marché, notre{" "}
          <Link href="/guides/prix-site-e-commerce">guide des prix
          d&apos;un site e-commerce</Link> complète ce comparatif.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://www.shopify.com/fr/tarifs" target="_blank" rel="noopener noreferrer">page tarifs officielle Shopify France</a>{" "}
          (plans, frais de carte, offre d&apos;entrée — relevés le
          17 juillet 2026) ;{" "}
          <a href="https://help.shopify.com/en/manual/b2b/getting-started/plan-features" target="_blank" rel="noopener noreferrer">Shopify Help Center, fonctions B2B par forfait</a> ;{" "}
          <a href="https://help.shopify.com/en/manual/customers/import-export-customers" target="_blank" rel="noopener noreferrer">Shopify Help Center, import/export des données</a> ;{" "}
          <a href="https://changelog.shopify.com/posts/we-ve-increased-the-product-variant-limit-to-2048" target="_blank" rel="noopener noreferrer">Shopify Changelog, limite de variantes portée à 2 048 (oct. 2025)</a> ;{" "}
          <a href="https://performance.shopify.com/blogs/blog/liquid-vs-headless-a-look-at-real-user-web-performance" target="_blank" rel="noopener noreferrer">Shopify Performance Blog, Liquid vs headless (données CrUX 2023)</a> ;{" "}
          <a href="https://www.shopify.com/plus/pricing" target="_blank" rel="noopener noreferrer">Shopify Plus, tarifs officiels</a> ;{" "}
          <a href="https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/" target="_blank" rel="noopener noreferrer">Fevad, bilan du e-commerce français 2025</a> ;{" "}
          <a href="https://www.ecommerce-nation.fr/barometre-cms-ecommerce-shopify-creations-prestashop-chiffre-affaires/" target="_blank" rel="noopener noreferrer">baromètre CMS Friends of Presta (E-commerce Nation, 2026)</a> ;
          étude ShopRank 2026 (créations de boutiques Europe/France) ;
          couverture presse des hausses de tarifs Shopify 2023 (InfoBref,
          La Presse) et Shopify Plus 2024 (Liquify) ; Elogic,
          Replatforming Cost Index 2026 (dépassements budget/délais) ;
          Trustpilot (notes et motifs récurrents, à lire avec les
          réserves d&apos;usage) ; fourchettes de marché françaises :
          recoupement Huggii, Gradiweb, Artich.io, jbdevweb, La Fabrique
          du Net, Yield Studio, Novaria (2026). Les prix évoluent :
          vérifiez à la source avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des prix de marché
            constatés, donnés à titre indicatif : seul un devis établi
            sur votre périmètre vous engage. Shopify, Shopify Plus et
            Hydrogen sont des marques de Shopify Inc. ; ce guide est
            indépendant et n&apos;est affilié à aucune plateforme.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
