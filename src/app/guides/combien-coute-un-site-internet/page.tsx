import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  ComparisonGrid,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("combien-coute-un-site-internet");

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
    // Pas d'images ici : l'og:image dédiée est générée par
    // opengraph-image.tsx (convention de fichier Next.js).
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
  wordCount: 5300,
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
      name: "Combien coûte un site internet ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le prix moyen d'un site internet professionnel en 2026 ?",
    answer:
      "Le baromètre La Fabrique du Net (1 312 budgets réels, 175 agences) situe la médiane d'un projet de création à 5 200 €. En pratique : 800 à 3 000 € chez un freelance, 3 000 à 10 000 € en agence pour un site vitrine professionnel, 15 000 € de médiane pour un e-commerce. Chez Hagnéré Code, un site vitrine sur mesure démarre à 6 900 € et une plateforme e-commerce à 15 000 €, au forfait fixe contractuel.",
  },
  {
    question: "Combien coûte un site internet par mois ?",
    answer:
      "Deux modèles coexistent. Les abonnements (Wix 17 à 179 €/mois, Shopify 27 à 289 €/mois, location de site 150 à 300 €/mois) lissent la dépense mais durent toute la vie du site — et en location, le site ne vous appartient jamais. En achat, les coûts mensuels réels après livraison se limitent à l'hébergement (0 à 20 €/mois pour un site Next.js bien construit) et à la maintenance éventuelle. Sur 4 ans, une location à 250 €/mois coûte 12 000 € : plus cher qu'un site professionnel acheté, sans l'actif au bilan.",
  },
  {
    question: "Combien coûte un site vitrine ?",
    answer:
      "Le consensus du marché français 2026 : 800 à 3 000 € chez un freelance, 3 000 à 8 000 € en agence avec SEO intégré, jusqu'à 15 000 € et plus en agence premium. Chez Hagnéré Code : 6 900 € pour un site 3-5 pages orienté conversion, 14 900 € pour un site 10-20 pages avec blog SEO, 22 000 € et plus pour du multilingue ou de l'e-commerce léger — performance Lighthouse 95+ garantie par contrat.",
  },
  {
    question: "Combien coûte un site e-commerce ?",
    answer:
      "Entre 2 000 et 8 000 € sur Shopify avec un thème, 3 000 à 12 000 € sur WooCommerce, et 15 000 € et plus pour du sur-mesure ou du headless — la médiane agence est à 15 000 € (La Fabrique du Net). Chez Hagnéré Code, une boutique sur mesure va de 15 000 € (lancement) à 120 000 € (plateforme multi-pays B2B+B2C), avec 0 % de commission sur vos ventes, quand Shopify prélève 1,1 à 2 % par transaction plus 100 à 500 €/mois d'applications.",
  },
  {
    question: "Combien coûte une application web ou un SaaS ?",
    answer:
      "Le marché situe un MVP SaaS sérieux entre 15 000 et 30 000 €, un SaaS PME complet entre 40 000 et 80 000 €, et les plateformes complexes au-delà de 80 000 €. Chez Hagnéré Code, un MVP production-ready démarre à 15 000 € et un SaaS complet à 30 000 € — sous la fourchette du marché, grâce à un pipeline de développement accéléré par l'IA avec revue humaine systématique.",
  },
  {
    question: "Combien coûte une refonte de site internet ?",
    answer:
      "De 1 500 à 10 000 € pour un site vitrine (2 000 à 4 500 € pour 5-10 pages, 4 500 à 8 000 € en premium) et de 5 000 à plus de 30 000 € pour un e-commerce. Le poste le plus souvent oublié des devis de refonte : la migration SEO (redirections 301 page à page, conservation des positions), qui peut représenter 10 à 20 % du budget mais évite de perdre le trafic acquis.",
  },
  {
    question: "Combien coûte la maintenance d'un site internet ?",
    answer:
      "La règle sectorielle : 10 à 20 % du coût de création par an. En France : 30 à 120 € HT/mois pour un site vitrine WordPress (mises à jour hebdomadaires du cœur, des plugins et du thème), 200 à 500 €/mois pour un e-commerce actif. Un site statique Next.js n'a ni plugins ni CMS à patcher : la maintenance technique obligatoire est quasi nulle, seules les évolutions se facturent.",
  },
  {
    question: "Pourquoi les devis varient-ils autant d'un prestataire à l'autre ?",
    answer:
      "Parce qu'ils ne couvrent pas le même travail. Un devis bas exclut souvent la rédaction des contenus, le SEO technique, le tracking, la garantie et la propriété du code. Comparez toujours à périmètre égal : qui rédige, qui héberge, qui maintient, qui possède le code, et quel niveau de performance est garanti à la livraison. Deux devis avec des périmètres différents ne sont pas comparables.",
  },
  {
    question: "Un site internet pas cher est-il fiable ?",
    answer:
      "Rarement pour durer. Les études le mesurent : la durée de vie moyenne d'un site est de 2 ans et 7 mois, mais les sites bien construits tiennent 6 ans et 4 mois (Orbit Media). Un site à 1 500 € qui doit être refait au bout de 2 ans coûte en réalité plus cher qu'un site à 7 000 € amorti sur 6 ans — sans compter les clients perdus entre-temps par un site lent ou mal référencé.",
  },
  {
    question: "Existe-t-il des aides pour financer la création d'un site internet ?",
    answer:
      "Oui, mais elles sont désormais régionales et changent vite : le portail France Num recense environ 200 financements. Le Prêt Boost de Bpifrance (5 000 à 75 000 €, sans garantie, réponse en 48 h) finance la transformation numérique au niveau national. En Auvergne-Rhône-Alpes, Atouts Numériques subventionne jusqu'à 16 000 € d'accompagnement. Règle d'or : déposez la demande avant de signer le devis.",
  },
  {
    question: "Suis-je propriétaire de mon site une fois payé ?",
    answer:
      "Pas automatiquement, et c'est le piège juridique n° 1. En droit français (article L111-1 du Code de la propriété intellectuelle), le développeur reste titulaire des droits sur le code, même intégralement payé, sauf clause écrite de cession conforme à l'article L131-3. La jurisprudence l'a confirmé : sans cession, le prestataire peut refuser de remettre les codes sources. Exigez la cession des droits et une clause de réversibilité (remise du dépôt Git, des accès DNS et hébergement) dans le contrat.",
  },
  {
    question: "Comment obtenir un chiffrage précis pour mon projet ?",
    answer:
      "Décrivez votre projet via notre parcours guidé (3 minutes) : notre équipe vous répond personnellement sous 24 h ouvrées avec une première réponse argumentée, gratuite et sans engagement. Pour un chiffrage ferme, le Discovery Sprint (1 500 €, 2 jours) livre les spécifications, un prototype cliquable et un devis au forfait fixe — déduit à 100 % si le projet se lance.",
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
          { label: "Combien coûte un site internet ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les fourchettes réelles du marché français, poste par poste : par type de site, par prestataire, coûts cachés, coût total sur 3 ans, aides publiques, propriété du code — et la méthode pour comparer des devis qui, souvent, ne décrivent pas le même travail."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Vitrine : 800 € – 22 000 €", description: "", color: "violet" },
          { number: "02", title: "E-commerce : 2 000 € – 120 000 €", description: "", color: "blue" },
          { number: "03", title: "SaaS / app : dès 15 000 €", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/guides/combien-coute-une-application-mobile", label: "Prix d'une application mobile" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
          { href: "/services/sites-vitrines", label: "Création de site vitrine" },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/outils/calculateur-cout-excel", label: "Calculateur coût Excel" },
          { href: "/realisations", label: "Nos réalisations" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Prix d'un site internet : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          «&nbsp;Combien coûte un site internet&nbsp;?&nbsp;» est la première
          question de tout projet web — et la seule réponse honnête tient en
          une phrase&nbsp;: <strong>de 800 € chez un freelance à plus de
          120 000 € pour une plateforme sur mesure, selon ce que le site doit
          faire pour votre entreprise</strong>. Ce guide compile les fourchettes
          réellement pratiquées en France en 2026 — baromètres, études et
          barèmes publics à l&apos;appui — pour que vous puissiez budgéter
          juste, éviter les pièges et comparer des devis à périmètre égal.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les prix 2026 en un tableau" },
            { id: "prix-par-type", label: "2. Les prix par type de site" },
            { id: "prix-par-prestataire", label: "3. Les prix par prestataire : builder, freelance, agence" },
            { id: "par-mois-ou-en-une-fois", label: "4. Par mois ou en une fois ? Abonnement, location, achat" },
            { id: "postes-de-cout", label: "5. Ce qui fait varier le prix : les postes d'un devis" },
            { id: "devis-decortique", label: "6. Un devis à 14 900 € décortiqué ligne par ligne" },
            { id: "couts-caches", label: "7. Les coûts récurrents et cachés après la mise en ligne" },
            { id: "cout-total-3-ans", label: "8. Le vrai comparatif : coût total sur 3 ans" },
            { id: "devis-trop-bas", label: "9. Devis trop bas et arnaques : les signaux d'alerte" },
            { id: "technologie", label: "10. WordPress, Next.js, builders : la techno change-t-elle le prix ?" },
            { id: "performance", label: "11. La performance, un coût caché (ou un levier) chiffré" },
            { id: "refonte", label: "12. Refonte : combien ça coûte, quand la faire" },
            { id: "delais", label: "13. Combien de temps pour créer un site ?" },
            { id: "aides", label: "14. Aides et subventions 2026" },
            { id: "propriete-fiscalite", label: "15. Propriété du code, TVA et amortissement" },
            { id: "budgeter", label: "16. Méthode : budgéter juste en 4 étapes" },
            { id: "erreurs", label: "17. Les 7 erreurs à éviter" },
            { id: "notre-approche", label: "18. Comment on chiffre chez Hagnéré Code" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les prix 2026 en un tableau</h2>
        <p>
          En 2026, un site internet professionnel coûte en France{" "}
          <strong>entre 800 € et 3 000 € chez un freelance, entre 3 000 € et
          22 000 € en agence pour un site vitrine, et de 15 000 € à plus de
          120 000 € pour un e-commerce ou une application sur mesure</strong>.
          La médiane d&apos;un projet de création, mesurée sur 1 312 budgets
          réels par le baromètre La Fabrique du Net, est de{" "}
          <strong>5 200 €</strong>.
        </p>
        <GuideTable
          headers={["Type de projet", "Freelance", "Agence", "Médiane marché"]}
          rows={[
            ["Site one-page / landing", "300 – 1 500 €", "1 500 – 6 900 €", "≈ 1 500 €"],
            ["Site vitrine (3-10 pages)", "800 – 3 000 €", "3 000 – 10 000 €", "≈ 4 000 €"],
            ["Site vitrine premium / multilingue", "2 500 – 5 000 €", "8 000 – 22 000 €", "≈ 8 000 €"],
            ["E-commerce (plateforme type Shopify)", "2 000 – 8 000 €", "5 000 – 15 000 €", "≈ 7 000 €"],
            ["E-commerce sur mesure / headless", "—", "15 000 – 120 000 €", "≈ 15 000 €"],
            ["MVP SaaS / application web", "8 000 – 22 000 €", "15 000 – 50 000 €", "≈ 30 000 €"],
            ["SaaS complet / plateforme métier", "—", "40 000 – 120 000 €+", "≈ 60 000 €"],
          ]}
        />
        <p>
          Sources croisées : baromètre La Fabrique du Net 2026 (1 312 budgets,
          175 agences), analyse Coutsite (150+ devis anonymisés), Codeur.com,
          Hostinger et France Num — détail en fin d&apos;article. Le reste de ce
          guide explique <em>pourquoi</em> ces écarts existent et comment
          choisir le bon niveau d&apos;investissement pour votre cas.
        </p>

        <h2 id="prix-par-type">2. Les prix par type de site</h2>
        <p>
          Le premier facteur de prix, c&apos;est la nature du projet. Un site
          qui présente votre activité, un site qui encaisse des paiements et
          une application qui fait tourner un métier n&apos;ont ni la même
          complexité, ni le même niveau d&apos;exigence en sécurité, en
          intégrations et en tests.
        </p>

        <h3>Le site vitrine : 800 € à 22 000 €</h3>
        <p>
          C&apos;est le projet le plus courant — et celui où les écarts de prix
          sont les plus trompeurs. Un vitrine à 1 000 € (template, contenus à
          votre charge, SEO absent) et un vitrine à 15 000 € (design sur
          mesure, contenus rédigés, SEO structuré, tracking) portent le même
          nom mais ne rendent pas le même service. Notre offre de{" "}
          <Link href="/services/sites-vitrines">création de site vitrine</Link>{" "}
          démarre à 6 900 € pour 3-5 pages orientées conversion, 14 900 € avec
          blog SEO (10-20 pages), 22 000 € et plus en multilingue — avec une
          particularité rare sur le marché : la performance{" "}
          <strong>Lighthouse 95+ est garantie par contrat</strong>. Pour le
          détail gamme par gamme (one-page, artisan, premium) et la grille de
          ce qui est inclus à chaque prix, voyez notre{" "}
          <Link href="/guides/prix-site-vitrine">guide dédié au prix
          d&apos;un site vitrine</Link>.
        </p>

        <h3>L&apos;e-commerce : 2 000 € à 120 000 €</h3>
        <p>
          Sur plateforme (Shopify, WooCommerce), comptez 2 000 à 12 000 € de
          mise en place — puis un coût récurrent souvent sous-estimé :
          abonnement (27 à 289 €/mois chez Shopify), applications payantes
          (une boutique moyenne en utilise 6 à 12, soit 100 à 500 €/mois) et
          frais de transaction (1,1 à 2 %). Une{" "}
          <Link href="/services/ecommerce">boutique sur mesure</Link> coûte
          plus cher à construire — 15 000 € à 120 000 € chez nous selon le
          périmètre — mais avec 0 % de commission sur les ventes : le point de
          bascule économique se situe généralement autour de 500 000 € de
          chiffre d&apos;affaires annuel en ligne. Toutes les grilles
          détaillées — plateformes, coût sur 3 ans, commissions,
          logistique — sont dans notre guide du{" "}
          <Link href="/guides/prix-site-e-commerce">prix d&apos;un site
          e-commerce</Link>.
        </p>

        <h3>Le SaaS et l&apos;application web : 15 000 € à 120 000 €+</h3>
        <p>
          Le marché français situe un MVP SaaS « sérieux » entre 15 000 et
          30 000 € en développement senior, et un SaaS PME complet entre
          40 000 et 80 000 €. Notre offre de{" "}
          <Link href="/services/saas-applications-metier">développement
          SaaS</Link> démarre à 15 000 € pour un MVP production-ready livré en
          3 à 6 semaines — sous la fourchette du marché, parce que notre
          pipeline s&apos;appuie sur l&apos;IA pour accélérer le développement,
          avec revue humaine systématique de chaque ligne. Et si votre projet
          vise les stores iOS et Android, consultez notre guide dédié :{" "}
          <Link href="/guides/combien-coute-une-application-mobile">combien
          coûte une application mobile</Link>.
        </p>

        <h3>L&apos;outil interne : 8 000 € à 80 000 €</h3>
        <p>
          CRM métier, back-office, automatisation d&apos;un processus : un{" "}
          <Link href="/services/outils-internes-sur-mesure">outil interne
          sur mesure</Link> se chiffre entre 8 000 € (un processus ciblé) et
          80 000 € (plateforme multi-départements avec SSO). Si vos équipes
          vivent encore dans des fichiers Excel, notre{" "}
          <Link href="/outils/calculateur-cout-excel">calculateur de coût
          Excel</Link> chiffre en 2 minutes ce que la situation actuelle vous
          coûte réellement — c&apos;est souvent l&apos;argument qui débloque le
          budget.
        </p>

        <InfoBox variant="blue" title="Pourquoi de telles différences ?">
          Un site à 6 900 € et un site à 22 000 € ne répondent pas au même
          besoin : le premier établit une présence crédible, le second est une
          machine d&apos;acquisition (SEO structuré, pages de conversion,
          tracking, multilingue). Le bon budget est celui qui correspond au
          rôle du site dans votre business — pas le plus bas.
        </InfoBox>

        <h2 id="prix-par-prestataire">3. Les prix par prestataire : builder, freelance, agence</h2>
        <p>
          Deuxième facteur de prix : qui construit. Les tarifs journaliers
          (TJM) mesurés par les baromètres Malt et Silkhom en 2025-2026
          expliquent l&apos;essentiel des écarts&nbsp;: un développeur
          freelance junior facture 350 à 450 €/jour, un confirmé 500 à
          600 €/jour, un senior expert React/Next.js 700 €/jour et plus. Les
          agences françaises facturent 400 à 1 200 €/jour selon leur taille et
          leur positionnement.
        </p>
        <GuideTable
          headers={["Prestataire", "Site vitrine", "Points forts", "Points faibles"]}
          rows={[
            ["Builder DIY (Wix, Squarespace)", "0 – 500 € + 17-80 €/mois à vie", "Rapide, aucun code", "Abonnement perpétuel, SEO limité, vous ne possédez rien"],
            ["Freelance junior", "800 – 2 500 €", "Prix d'entrée", "Périmètre réduit, continuité non garantie"],
            ["Freelance senior", "2 000 – 5 000 €", "Bon rapport qualité/prix", "Une seule personne : délais, bus factor"],
            ["Agence établie", "4 000 – 12 000 €", "Équipe, méthode, garanties, SEO", "Ticket d'entrée plus élevé"],
            ["Agence premium / spécialisée", "8 000 – 25 000 €+", "Sur-mesure complet, performance contractuelle", "Réservé aux projets à enjeu"],
          ]}
        />
        <p>
          À noter pour situer les extrêmes : les agences Next.js haut de gamme
          françaises affichent des sites vitrines à partir de 25 000 € et des
          applications métier à partir de 80 000 €. Les fourchettes Hagnéré
          Code (vitrine 6 900 – 22 000 €, SaaS dès 15 000 €) se placent
          volontairement entre l&apos;agence généraliste et ce haut de marché :
          même stack, méthode plus resserrée.
        </p>

        <h2 id="par-mois-ou-en-une-fois">4. Par mois ou en une fois ? Abonnement, location, achat</h2>
        <p>
          « Combien coûte un site internet <em>par mois</em> ? » est
          l&apos;une des questions les plus tapées sur Google — et elle mérite
          une réponse structurée, car trois modèles très différents se cachent
          derrière :
        </p>
        <ul>
          <li>
            <strong>L&apos;abonnement builder</strong> (Wix 16,80 à
            178,80 €/mois, Squarespace 12 à 69 €/mois, Shopify 27 à
            289 €/mois) : vous payez tant que le site existe, et le site
            n&apos;est pas exportable — changer d&apos;outil signifie tout
            refaire.
          </li>
          <li>
            <strong>La location de site</strong> (150 à 300 €/mois, engagement
            36-48 mois) : le total atteint 7 200 à 14 400 €, jusqu&apos;à
            3 fois le prix d&apos;achat d&apos;un site équivalent — et à la fin
            du contrat, <strong>le site ne vous appartient pas</strong>.
            Signal d&apos;alerte documenté : le contrat revendu à un organisme
            de financement.
          </li>
          <li>
            <strong>L&apos;achat</strong> : investissement initial plus élevé,
            puis des coûts mensuels réels très faibles (hébergement 0 à
            20 €/mois pour un site statique bien construit, maintenance
            optionnelle). Le site est un actif — amortissable comptablement,
            revendable avec l&apos;entreprise.
          </li>
        </ul>
        <InfoBox variant="amber" title="Le coût caché n° 1 : la dépendance">
          Vérifiez toujours <strong>qui possède le code et les contenus</strong>.
          Certaines offres « site à 99 €/mois » vous louent votre propre
          site : si vous partez, vous repartez de zéro. Chez Hagnéré Code, le
          code vous appartient — dépôt Git transféré, documentation incluse.
        </InfoBox>

        <h2 id="postes-de-cout">5. Ce qui fait varier le prix : les postes d&apos;un devis</h2>
        <p>
          Un devis sérieux se décompose en postes identifiables. Voici les six
          principaux, avec leur poids typique dans un projet vitrine standard —
          des ratios cohérents avec ce que publient les rares agences
          transparentes (stratégie 5-15 %, design 20-35 %, développement
          30-45 %) :
        </p>
        <ul>
          <li>
            <strong>Cadrage et architecture (10-15 %)</strong> — comprendre
            votre marché, définir l&apos;arborescence, les parcours et les
            objectifs de conversion. C&apos;est ce qui distingue un site qui
            travaille d&apos;une plaquette en ligne.
          </li>
          <li>
            <strong>Design (20-25 %)</strong> — maquettes sur mesure,
            responsive, déclinées sur vos pages types. Un design à base de
            template coûte moins cher, mais vous ressemblez à vos concurrents.
          </li>
          <li>
            <strong>Développement (30-40 %)</strong> — l&apos;intégration
            fidèle des maquettes, les animations, les formulaires, les
            intégrations (CRM, prise de rendez-vous, paiement).
          </li>
          <li>
            <strong>Contenus (10-20 %)</strong> — rédaction optimisée SEO
            (facturée 300 à 800 € la page sur le marché), photos,
            illustrations. Poste le plus souvent exclu des devis bas, alors que
            c&apos;est lui qui fait venir le trafic.
          </li>
          <li>
            <strong>SEO technique et performance (10-15 %)</strong> — balisage,
            données structurées, vitesse, Core Web Vitals. En 2026, un site
            lent ne ranke pas. Si le SEO n&apos;est pas inclus, le marché le
            facture 500 à 2 000 € en plus.
          </li>
          <li>
            <strong>Recette, mise en production et garantie (5-10 %)</strong> —
            tests multi-appareils, tracking, redirections, monitoring. Chez
            nous, 30 jours de garantie post-lancement sont inclus.
          </li>
        </ul>

        <GuideInlineCTA />

        <h2 id="devis-decortique">6. Un devis à 14 900 € décortiqué ligne par ligne</h2>
        <p>
          Aucune page qui domine Google sur cette requête ne montre un vrai
          devis. Voici donc, ligne par ligne, la structure réelle de notre
          forfait vitrine « Performance » à 14 900 € — celui d&apos;un site
          10-20 pages avec blog SEO :
        </p>
        <GuideTable
          headers={["Poste", "Contenu", "Part du forfait"]}
          rows={[
            ["Discovery & cadrage", "Ateliers, personas, arborescence, wireframes", "≈ 1 800 € (12 %)"],
            ["Design UI", "Maquettes sur mesure desktop + mobile, design system", "≈ 3 300 € (22 %)"],
            ["Développement Next.js", "Intégration, animations, formulaires, CMS headless", "≈ 5 200 € (35 %)"],
            ["Contenus & SEO éditorial", "Rédaction des pages clés, balisage, données structurées", "≈ 2 200 € (15 %)"],
            ["Performance & SEO technique", "Core Web Vitals, sitemap, redirections, tracking", "≈ 1 500 € (10 %)"],
            ["Recette, mise en ligne, garantie 30 j", "Tests, formation CMS 2 h, hébergement 1re année", "≈ 900 € (6 %)"],
          ]}
        />
        <p>
          Ce tableau vous donne une grille de lecture universelle : prenez
          n&apos;importe quel devis et demandez la répartition. Si un poste
          entier manque (le plus souvent : contenus ou SEO), le prix
          « attractif » s&apos;explique — et le travail sera à payer une
          seconde fois, ailleurs.
        </p>

        <h2 id="couts-caches">7. Les coûts récurrents et cachés après la mise en ligne</h2>
        <p>
          Le prix de construction n&apos;est que la moitié de l&apos;équation.
          Voici les coûts récurrents réels, aux tarifs 2026 constatés :
        </p>
        <GuideTable
          headers={["Poste récurrent", "Fourchette réelle", "Remarque"]}
          rows={[
            ["Nom de domaine", "6 – 15 €/an (.fr), 10 – 15 €/an (.com)", "À votre nom, toujours — jamais au nom du prestataire."],
            ["Hébergement mutualisé / VPS", "1 – 10 €/mois / 5 – 35 €/mois", "Pour les sites WordPress classiques."],
            ["Hébergement site Next.js", "0 – 20 €/mois", "Vercel/Netlify : quasi gratuit pour un vitrine performant."],
            ["Certificat SSL", "0 € (Let's Encrypt)", "Méfiance envers qui le facture 50-100 €/an : il est gratuit."],
            ["Emails professionnels", "≈ 72 – 82 €/an/utilisateur", "Google Workspace (tarifs +17 à 33 % depuis janv. 2025)."],
            ["Maintenance WordPress", "30 – 120 €/mois (vitrine), 200 – 500 €/mois (e-com)", "Mises à jour hebdo du cœur, des plugins, du thème."],
            ["Licences plugins premium", "500 – 1 000 €/an (site WordPress pro)", "Constructeur de pages, SEO, sécurité, formulaires…"],
            ["Bannière cookies (CMP)", "0 – 150 €/an et plus", "Conformité RGPD : 486,8 M€ d'amendes CNIL en 2025."],
            ["Banques d'images", "30 – 200 €/mois si non incluses", "Adobe Stock dès 29,99 €/mois."],
          ]}
        />
        <p>
          Deux règles à retenir. La première : le marché budgète la
          maintenance à <strong>10-20 % du coût de création par an</strong>.
          La seconde : cette règle s&apos;applique surtout aux sites à CMS
          dynamique — un site statique bien construit n&apos;a structurellement
          ni licences ni patchs de sécurité hebdomadaires, ce qui économise
          500 à 1 500 €/an par rapport à un WordPress professionnel équivalent.
        </p>

        <h2 id="cout-total-3-ans">8. Le vrai comparatif : coût total sur 3 ans</h2>
        <p>
          C&apos;est LE calcul que presque personne ne fait — et qu&apos;aucune
          des pages dominantes sur cette requête ne propose. Le prix
          d&apos;achat d&apos;un site low-cost ne représente que 20 à 40 % de
          son coût total de possession :
        </p>
        <FormulaBox>
{`SITE LOW-COST À 1 500 € (WordPress template) — coût réel sur 3 ans
  Création                                   1 500 €
  Hébergement mutualisé (3 ans)          180 – 360 €
  Domaine + emails pro (3 ans)               ≈ 260 €
  Licences plugins (3 ans)               300 – 900 €
  Maintenance (3 ans)                1 080 – 2 160 €
  CMP cookies RGPD (3 ans)                   ≈ 450 €
  Refonte probable à 2,5-3 ans       2 000 – 4 500 €
  ─────────────────────────────────────────────────
  TOTAL 3 ANS                        5 800 – 10 100 €

SITE SUR MESURE À 10 000 € (Next.js) — coût réel sur 3 ans
  Création                                  10 000 €
  Hébergement Vercel/Netlify (3 ans)     0 – 720 €
  Domaine + emails pro (3 ans)               ≈ 260 €
  Licences plugins                               0 €
  Maintenance technique obligatoire          ≈ 0 €
  Évolutions choisies (optionnel)    500 – 1 500 €/an
  Refonte                       aucune avant 5-6 ans
  ─────────────────────────────────────────────────
  TOTAL 3 ANS                       10 300 – 15 500 €`}
        </FormulaBox>
        <p>
          L&apos;écart réel sur 3 ans n&apos;est donc pas de 1 à 7 comme le
          suggèrent les prix affichés, mais de 1 à 1,5 — et il s&apos;inverse
          sur 6 ans, l&apos;horizon de vie d&apos;un site bien construit
          (6 ans et 4 mois mesurés par Orbit Media, contre 2 ans et 7 mois en
          moyenne). Surtout, l&apos;un des deux sites aura généré du trafic et
          des clients pendant tout ce temps ; l&apos;autre aura coûté des
          clients par sa lenteur et son absence de SEO.
        </p>

        <h2 id="devis-trop-bas">9. Devis trop bas et arnaques : les signaux d&apos;alerte</h2>
        <p>
          Un devis nettement sous le marché exclut presque toujours l&apos;un
          de ces éléments : la rédaction des contenus, le SEO technique, le
          responsive soigné, le tracking, ou la propriété du code. Le site
          «&nbsp;pas cher&nbsp;» coûte alors deux fois : une première fois à la
          commande, une seconde quand il faut le refaire.
        </p>
        <ComparisonGrid
          items={[
            {
              title: "Devis à 1 500 € (template)",
              description:
                "Thème acheté, contenus à votre charge, SEO absent, performance moyenne, dépendance au prestataire. Convient pour valider une idée, rarement pour durer.",
              variant: "blue",
            },
            {
              title: "Devis à 6 900 € (professionnel)",
              description:
                "Design sur mesure, SEO technique, contenus travaillés, performance mesurée, code livré et documenté, 30 j de garantie. Un actif qui vous appartient.",
              variant: "green",
            },
          ]}
        />
        <p>Les signaux d&apos;alerte documentés, à vérifier sur chaque devis :</p>
        <ul>
          <li>
            <strong>Prix anormalement bas sans périmètre détaillé</strong> — la
            différence se paiera en options et en avenants.
          </li>
          <li>
            <strong>Plafonnement caché d&apos;heures</strong> — cas réel
            documenté : 20 heures budgétées pour un e-commerce, livré
            incomplet.
          </li>
          <li>
            <strong>Site « offert » contre abonnement d&apos;hébergement
            gonflé</strong> — exemple relevé : 500 €/mois sans clause de
            sortie, soit environ 10 fois le prix du marché.
          </li>
          <li>
            <strong>Engagement 36-48 mois présenté comme standard</strong>,
            contrat revendu à un organisme de financement : c&apos;est de la
            location déguisée.
          </li>
          <li>
            <strong>Pas de mention de la propriété du code</strong> ni de
            clause de réversibilité (voir la section 15 : sans clause écrite,
            le code ne vous appartient pas).
          </li>
          <li>
            <strong>Version mobile « en option »</strong> — en 2026, ce
            n&apos;est pas une option, c&apos;est un signal de fuite.
          </li>
        </ul>
        <p>
          Les bonnes questions à poser avant de signer : qu&apos;est-ce qui
          n&apos;est <em>pas</em> inclus dans ce prix ? Comment sont facturées
          les modifications futures ? Quelle maintenance après le lancement ?
          Qui possède le code, le domaine et l&apos;hébergement ? Et toujours :
          comparez les devis à périmètre égal.
        </p>

        <h2 id="technologie">10. WordPress, Next.js, builders : la techno change-t-elle le prix ?</h2>
        <p>
          Oui — mais pas comme on le croit. La vraie question n&apos;est pas
          «&nbsp;quel outil est le moins cher à installer&nbsp;» mais
          «&nbsp;quel socle coûte le moins cher sur 3 ans pour le résultat
          visé&nbsp;». Le seul baromètre qui publie des prix par technologie
          (La Fabrique du Net) mesure : site no-code ≈ 5 000 €, site
          WordPress ≈ 8 000 €, application PHP/Symfony ≈ 25 000 €,
          application JavaScript (React, Node) 35 000 à 40 000 €.
        </p>
        <GuideTable
          headers={["Socle", "Création", "Coûts récurrents typiques", "Pour qui"]}
          rows={[
            ["Builder (Wix, Squarespace)", "0 – 500 €", "17 – 179 €/mois à vie", "Tester une activité, budget minimal"],
            ["WordPress + thème", "800 – 5 000 €", "Maintenance 30-120 €/mois + licences 500-1 000 €/an", "Site simple, écosystème connu"],
            ["WordPress sur mesure", "5 000 – 15 000 €", "Idem : le CMS reste à patcher chaque semaine", "Éditorial lourd, équipe habituée"],
            ["Next.js / React sur mesure", "6 900 – 25 000 €+", "Hébergement 0-20 €/mois, zéro licence, zéro patch CMS", "Performance, SEO, actif durable"],
          ]}
        />
        <p>
          Nous construisons en <strong>Next.js / React / TypeScript</strong> —
          le socle des équipes produit modernes. Concrètement, pour vous :
          pages générées statiquement et Core Web Vitals au vert (ce qui porte
          le SEO et la conversion), surface d&apos;attaque minimale (pas de
          jungle de plugins), hébergement quasi gratuit, et un code standard
          que des milliers de développeurs peuvent reprendre — l&apos;inverse
          d&apos;un thème propriétaire. Pour trancher entre les deux socles,
          chiffres sourcés à l&apos;appui, lisez notre comparatif{" "}
          <Link href="/guides/nextjs-ou-wordpress">Next.js ou
          WordPress</Link>.
        </p>
        <p>
          Un mot sur l&apos;IA, grande absente des guides concurrents : oui,
          elle change les coûts en 2026. Les acteurs qui l&apos;ont
          industrialisée annoncent des budgets réduits de 20 à 30 % et des
          délais divisés par deux par rapport à 2022. C&apos;est exactement
          notre modèle — l&apos;IA accélère le développement, un senior humain
          relit tout — et c&apos;est ce qui nous permet d&apos;afficher un MVP
          SaaS à 15 000 € là où le marché démarre à 30 000 €. Méfiez-vous en
          revanche du « site généré par IA à 200 € » : sans architecture, sans
          SEO et sans garantie, c&apos;est un template avec une couche de
          peinture.
        </p>
        <p>
          Et si vous avez déjà un site WordPress ou une application qui
          fonctionne ? Nous savons aussi{" "}
          <Link href="/services/maintenance-evolution">reprendre et faire
          évoluer l&apos;existant</Link> — la refonte n&apos;est pas toujours
          la bonne réponse.
        </p>

        <h2 id="performance">11. La performance, un coût caché (ou un levier) chiffré</h2>
        <p>
          La vitesse de votre site n&apos;est pas un détail technique :
          c&apos;est un poste économique mesuré par deux études de référence.
        </p>
        <ul>
          <li>
            L&apos;étude <strong>Google/Deloitte « Milliseconds Make
            Millions »</strong> (37 marques, 30 millions de sessions) :
            améliorer la vitesse mobile de seulement <strong>0,1 seconde</strong>{" "}
            augmente les conversions retail de <strong>+8,4 %</strong> et le
            panier moyen de +9,2 %.
          </li>
          <li>
            L&apos;étude <strong>Google/SOASTA</strong> (900 000 pages
            mobiles) : passer de 1 à 3 secondes de chargement augmente la
            probabilité de rebond de <strong>+32 %</strong> ; de 1 à
            5 secondes : +90 %.
          </li>
        </ul>
        <p>
          Autrement dit : un site lent à 1 500 € détruit chaque mois une
          partie du budget marketing qui amène les visiteurs. C&apos;est
          pourquoi nos contrats incluent des seuils de performance chiffrés
          (Lighthouse ≥ 95 mobile, LCP &lt; 1,5 s) — et pourquoi votre devis
          devrait exiger la même chose, quel que soit le prestataire. Pour
          aller plus loin sur l&apos;acquisition, notre offre de{" "}
          <Link href="/services/referencement-google">référencement
          Google</Link> s&apos;appuie exactement sur ce levier.
        </p>

        <h2 id="refonte">12. Refonte : combien ça coûte, quand la faire</h2>
        <p>
          Une refonte de site vitrine coûte 1 500 à 10 000 € (2 000 – 4 500 €
          pour 5-10 pages, 4 500 – 8 000 € en premium) ; une refonte
          e-commerce va de 5 000 à plus de 30 000 €. Deux points de vigilance
          spécifiques :
        </p>
        <ul>
          <li>
            <strong>La migration SEO</strong> — redirections 301 page à page,
            conservation des positions acquises. C&apos;est le poste le plus
            souvent absent des devis de refonte, et le plus coûteux quand il
            manque : un trafic construit en 3 ans peut disparaître en une mise
            en ligne.
          </li>
          <li>
            <strong>La refonte prématurée est un coût caché du low-cost</strong> —
            49 % des PME interrogées par Databox avaient entièrement refondu
            leur site dans les 2 dernières années. Un site bien construit
            s&apos;amortit sur 5-6 ans ; un site d&apos;entrée de gamme
            « consomme » une refonte tous les 2-3 ans.
          </li>
        </ul>

        <h2 id="delais">13. Combien de temps pour créer un site ?</h2>
        <p>
          Le prix et le délai vont ensemble — et les fourchettes du marché
          sont remarquablement convergentes :
        </p>
        <GuideTable
          headers={["Projet", "Délai marché", "Délai Hagnéré Code"]}
          rows={[
            ["Site vitrine", "3 semaines – 2 mois", "2 – 7 semaines selon le forfait"],
            ["E-commerce", "2 – 6 mois", "8 – 12 semaines (lancement)"],
            ["MVP SaaS", "4 semaines – 3 mois", "3 – 6 semaines"],
            ["SaaS complet / plateforme", "3 – 12 mois", "5 – 10 semaines et plus, au périmètre"],
          ]}
        />
        <p>
          La cause n° 1 de retard, toutes sources confondues, n&apos;est pas
          technique : c&apos;est <strong>le contenu non fourni par le
          client</strong> (comptez +2 à 4 semaines si textes et images ne sont
          pas prêts au lancement). C&apos;est aussi pour cela que nos forfaits
          incluent la rédaction — et que nos dates de livraison sont
          contractuelles, avec pénalités si nous les dépassons (voir{" "}
          <Link href="/methode">notre méthode Sprint Fixe™</Link>).
        </p>

        <h2 id="aides">14. Aides et subventions 2026</h2>
        <p>
          Point d&apos;actualité que beaucoup de guides recopient faux :{" "}
          <strong>le « Chèque France Num » national de 500 € n&apos;existe
          plus depuis 2021</strong>, et le chèque numérique d&apos;Île-de-France
          a fermé en octobre 2025. En 2026, le paysage réel des aides :
        </p>
        <ul>
          <li>
            <strong>Le Prêt Boost Transformation Numérique</strong> (Bpifrance
            Flash, partenaire France Num) : 5 000 à 75 000 €, sans garantie
            personnelle, pour les TPE/PME de plus de 3 ans — réponse en 48 h,
            remboursement 3-5 ans avec différé. Il finance explicitement la
            création de site et la visibilité en ligne. Annoncé disponible
            jusqu&apos;à fin 2026.
          </li>
          <li>
            <strong>Les subventions régionales</strong>, très hétérogènes et à
            durée de vie courte : Atouts Numériques en Auvergne-Rhône-Alpes
            (jusqu&apos;à 16 000 €, orienté conseil et accompagnement — la
            région de notre studio), Pass Occitanie (50 %, plafond 10 000 €),
            INAC Hauts-de-France (jusqu&apos;à 12 000 €), Kap Numérik à La
            Réunion (80 %, plafond 3 200 €, création de site explicitement
            éligible)…
          </li>
          <li>
            <strong>Aucun crédit d&apos;impôt</strong> ne finance un simple
            site ; le Crédit d&apos;Impôt Innovation (20 % depuis 2025,
            prorogé jusqu&apos;à fin 2027) peut en revanche concerner un SaaS
            réellement innovant.
          </li>
        </ul>
        <InfoBox variant="emerald" title="Les deux règles d'or des aides">
          1) Déposez la demande <strong>avant</strong> de signer le devis — la
          plupart des dispositifs refusent les projets déjà engagés.
          2) Vérifiez la disponibilité du dispositif sur{" "}
          <a href="https://www.francenum.gouv.fr/aides-financieres" target="_blank" rel="noopener noreferrer">
            francenum.gouv.fr
          </a>{" "}
          au moment de votre projet : ces aides ouvrent et ferment sans
          préavis (informations vérifiées en juillet 2026).
        </InfoBox>

        <h2 id="propriete-fiscalite">15. Propriété du code, TVA et amortissement</h2>
        <p>
          Trois sujets que presque aucun guide de prix ne traite — et qui
          pèsent pourtant lourd dans le coût réel.
        </p>
        <h3>La propriété du code : le piège juridique n° 1</h3>
        <p>
          En droit français, <strong>payer intégralement son site ne vous en
          rend pas propriétaire</strong>. L&apos;article L111-1 du Code de la
          propriété intellectuelle attribue les droits à l&apos;auteur du code
          — le prestataire — sauf clause écrite de cession conforme à
          l&apos;article L131-3 (chaque droit cédé mentionné distinctement,
          étendue et durée délimitées). La jurisprudence l&apos;a confirmé
          (Trib. com. Besançon, 23 mars 2016) : sans cession, le prestataire
          peut refuser de remettre les codes sources. Exigez donc, dans tout
          contrat : la <strong>clause de cession des droits</strong> et une{" "}
          <strong>clause de réversibilité</strong> (remise du dépôt Git avec
          historique, accès DNS, hébergement et certificats sous 10 jours
          ouvrés). Chez Hagnéré Code, les deux sont dans les CGV — le dépôt
          Git est même chez vous dès le premier jour.
        </p>
        <h3>TVA et comptabilité</h3>
        <p>
          La création facturée par un prestataire français porte une TVA à
          20 %, déductible pour une entreprise assujettie. Comptablement, un
          site « actif » (e-commerce, génération de leads mesurable) peut être{" "}
          <strong>immobilisé au compte 205 et amorti sur 3 à 5 ans</strong> ;
          un site purement « vitrine » passe en charges — option souvent plus
          avantageuse en TPE (déduction immédiate). Les frais de maintenance
          et d&apos;évolution sont toujours des charges. Votre expert-comptable
          tranchera selon votre situation.
        </p>

        <h2 id="budgeter">16. Méthode : budgéter juste en 4 étapes</h2>
        <ol>
          <li>
            <strong>Définissez le rôle du site</strong> — présence crédible,
            génération de leads, vente en ligne ? Le budget découle du rôle,
            pas l&apos;inverse.
          </li>
          <li>
            <strong>Listez les fonctionnalités indispensables</strong> —
            formulaires, prise de rendez-vous, blog, multilingue, paiement.
            Chaque brique a un coût identifiable.
          </li>
          <li>
            <strong>Exigez des devis à périmètre égal</strong> — contenus,
            SEO, tracking, garantie, propriété du code : chaque ligne doit
            être explicite dans chaque devis comparé (la grille de la
            section 6 est faite pour ça). Le meilleur outil pour ça reste un
            bon <Link href="/guides/cahier-des-charges-site-internet">cahier
            des charges</Link> envoyé aux prestataires.
          </li>
          <li>
            <strong>Raisonnez en coût total sur 3 ans</strong> — construction
            + hébergement + maintenance + licences + refonte éventuelle.
            C&apos;est le seul chiffre comparable entre deux approches
            techniques (voir la section 8).
          </li>
        </ol>

        <h2 id="erreurs">17. Les 7 erreurs à éviter</h2>
        <ul>
          <li>
            <strong>Choisir au prix affiché</strong> plutôt qu&apos;au coût
            total sur 3 ans — l&apos;erreur qui coûte le plus cher de cette
            liste.
          </li>
          <li>
            <strong>Signer sans clause de cession des droits</strong> ni
            réversibilité : votre site ne vous appartient pas (section 15).
          </li>
          <li>
            <strong>Oublier les contenus</strong> — premier poste exclu des
            devis bas et première cause de retard de mise en ligne.
          </li>
          <li>
            <strong>Négliger la performance</strong> — 0,1 s = 8,4 % de
            conversions : exigez des seuils chiffrés au contrat.
          </li>
          <li>
            <strong>Louer son site sur 48 mois</strong> sans réaliser que le
            total dépasse 2 à 3 fois le prix d&apos;achat, sans actif à la fin.
          </li>
          <li>
            <strong>Demander les aides après signature</strong> — la plupart
            des dispositifs exigent un dépôt avant engagement.
          </li>
          <li>
            <strong>Comparer des devis aux périmètres différents</strong> —
            sans grille commune, le moins-disant gagne toujours… sur le papier.
          </li>
        </ul>

        <h2 id="notre-approche">18. Comment on chiffre chez Hagnéré Code</h2>
        <p>
          Nous sommes une agence Next.js / React basée à Chambéry, et notre
          façon de chiffrer découle de tout ce qui précède : chaque projet est
          vendu en <strong>forfait fixe contractuel</strong> — le prix annoncé
          est le prix payé, quel que soit le temps que cela nous prend, avec
          des dates de livraison contractuelles et 30 jours de garantie. Les
          fourchettes détaillées par service sont publiques sur notre{" "}
          <Link href="/tarifs">page tarifs</Link>, et nos{" "}
          <Link href="/realisations">réalisations</Link> sont visitables en
          ligne, chiffres à l&apos;appui.
        </p>
        <p>
          Pour les projets au-delà de 8 000 €, tout commence par un{" "}
          <strong>Discovery Sprint à 1 500 €</strong> (2 jours) : périmètre
          écrit, prototype cliquable et devis ferme — déduit à 100 % si le
          projet se lance. C&apos;est notre réponse au problème central de ce
          guide : un chiffrage sérieux ne peut pas sortir d&apos;un formulaire
          en ligne en 30 secondes.
        </p>
        <p>
          Vous voulez un chiffre pour <em>votre</em> projet, pas une fourchette
          générique ?{" "}
          <Link href="/demarrer-un-projet">Décrivez-le en 3 minutes</Link> —
          notre équipe vous répond personnellement sous 24 h ouvrées avec une
          réponse argumentée, gratuite et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — fourchettes et statistiques citées dans ce
          guide (consultées en juillet 2026) : baromètre des tarifs{" "}
          <a href="https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs" target="_blank" rel="noopener noreferrer">La Fabrique du Net</a>{" "}
          (1 312 budgets, 175 agences) ; guides prix{" "}
          <a href="https://www.codeur.com/pages/prix-site-internet" target="_blank" rel="noopener noreferrer">Codeur.com</a>{" "}
          et{" "}
          <a href="https://www.hostinger.com/fr/tutoriels/combien-coute-la-creation-dun-site-internet" target="_blank" rel="noopener noreferrer">Hostinger</a> ;{" "}
          <a href="https://www.francenum.gouv.fr/aides-financieres" target="_blank" rel="noopener noreferrer">France Num</a>{" "}
          (aides financières) ;{" "}
          <a href="https://flash.bpifrance.fr/financement/pret-boost-transformation-numerique" target="_blank" rel="noopener noreferrer">Bpifrance Flash</a>{" "}
          (Prêt Boost) ; baromètres TJM{" "}
          <a href="https://www.malt.fr/t/barometre-tarifs/tech" target="_blank" rel="noopener noreferrer">Malt</a>{" "}
          et Silkhom ; étude{" "}
          <a href="https://web.dev/case-studies/milliseconds-make-millions" target="_blank" rel="noopener noreferrer">Google/Deloitte « Milliseconds Make Millions »</a> ;
          étude de durée de vie des sites{" "}
          <a href="https://www.orbitmedia.com/blog/website-lifespan-and-you/" target="_blank" rel="noopener noreferrer">Orbit Media</a> ;{" "}
          <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006133323/" target="_blank" rel="noopener noreferrer">Code de la propriété intellectuelle</a>{" "}
          (art. L111-1 et L131-3) ; bilan des sanctions 2025 de la{" "}
          <a href="https://www.cnil.fr/fr/bilan-sanctions-2025" target="_blank" rel="noopener noreferrer">CNIL</a>.
        </p>
        <p className="text-sm">
          <em>
            Les prix de tiers sont des fourchettes de marché constatées à la
            date de mise à jour, susceptibles d&apos;évoluer ; seuls nos
            forfaits publiés sur la page tarifs engagent Hagnéré Code. Ce
            guide ne constitue ni un conseil juridique ni un conseil comptable
            personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
