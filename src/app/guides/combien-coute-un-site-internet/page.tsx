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
  wordCount: 5400,
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
      "Le baromètre La Fabrique du Net (1 312 budgets réels, 175 agences) situe la médiane d'un projet de création à 5 200 € — la moitié des entreprises ont payé moins, l'autre moitié davantage. En pratique : 800 à 3 000 € chez un freelance, 3 000 à 10 000 € en agence pour un site vitrine professionnel, 15 000 € de médiane pour un e-commerce. Chez Hagnéré Code, un site vitrine sur mesure démarre à 6 900 € et une plateforme e-commerce à 15 000 €, au forfait fixe contractuel.",
  },
  {
    question: "Combien coûte un site internet par mois ?",
    answer:
      "Deux modèles coexistent. Les abonnements (Wix 17 à 179 €/mois, Shopify 27 à 289 €/mois, location de site 150 à 300 €/mois) lissent la dépense mais durent toute la vie du site — et en location, le site ne vous appartient jamais. En achat, les coûts mensuels réels après livraison se limitent à l'hébergement (0 à 20 €/mois pour un site Next.js bien construit) et à la maintenance éventuelle. Sur 4 ans, une location à 250 €/mois coûte 12 000 € : plus cher qu'un site professionnel acheté, sans l'actif au bilan.",
  },
  {
    question: "Combien coûte un site vitrine ?",
    answer:
      "Le consensus du marché français 2026 : 800 à 3 000 € chez un freelance, 3 000 à 8 000 € en agence avec SEO intégré, jusqu'à 15 000 € et plus en agence premium. Chez Hagnéré Code : 6 900 € pour un site 3-5 pages orienté conversion, 14 900 € pour un site 10-20 pages avec blog SEO, 22 000 € et plus pour du multilingue ou de l'e-commerce léger — avec une performance garantie par contrat : au moins 95/100 sur Lighthouse, l'outil de Google qui note la qualité technique d'un site.",
  },
  {
    question: "Combien coûte un site e-commerce ?",
    answer:
      "Entre 2 000 et 8 000 € sur Shopify avec un thème, 3 000 à 12 000 € sur WooCommerce, et 15 000 € et plus pour du sur-mesure ou du « headless » (la boutique visible est développée sur mesure, la gestion des produits restant sur une plateforme) — la médiane agence est à 15 000 € (La Fabrique du Net). Chez Hagnéré Code, une boutique sur mesure va de 15 000 € (lancement) à 120 000 € (plateforme multi-pays B2B+B2C), avec 0 % de commission sur vos ventes, quand Shopify prélève 1,1 à 2 % par transaction plus 100 à 500 €/mois d'applications.",
  },
  {
    question: "Combien coûte une application web ou un SaaS ?",
    answer:
      "Le marché situe un MVP SaaS sérieux — la première version d'une application, réduite aux fonctions essentielles — entre 15 000 et 30 000 €, un SaaS PME complet entre 40 000 et 80 000 €, et les plateformes complexes au-delà de 80 000 €. Chez Hagnéré Code, un MVP prêt à accueillir de vrais utilisateurs démarre à 15 000 € et un SaaS complet à 30 000 € — sous la fourchette du marché, grâce à un développement accéléré par l'IA avec revue humaine systématique.",
  },
  {
    question: "Combien coûte une refonte de site internet ?",
    answer:
      "De 1 500 à 10 000 € pour un site vitrine (2 000 à 4 500 € pour 5-10 pages, 4 500 à 8 000 € en premium) et de 5 000 à plus de 30 000 € pour un e-commerce. Le poste le plus souvent oublié des devis de refonte : la migration SEO (redirections 301 page à page, conservation des positions), qui peut représenter 10 à 20 % du budget mais évite de perdre le trafic acquis.",
  },
  {
    question: "Combien coûte la maintenance d'un site internet ?",
    answer:
      "La règle sectorielle : 10 à 20 % du coût de création par an. En France : 30 à 120 € HT/mois pour un site vitrine WordPress (mises à jour hebdomadaires du cœur, des plugins — les modules ajoutés à WordPress — et du thème), 200 à 500 €/mois pour un e-commerce actif. Un site statique Next.js n'a ni plugins ni CMS à mettre à jour : la maintenance technique obligatoire est quasi nulle, seules les évolutions se facturent.",
  },
  {
    question: "Pourquoi les devis varient-ils autant d'un prestataire à l'autre ?",
    answer:
      "Parce qu'ils ne couvrent pas le même travail. Un devis bas exclut souvent la rédaction des contenus, le SEO technique, la mesure des visiteurs (tracking), la garantie et la propriété du code. Comparez toujours à périmètre égal : qui rédige, qui héberge, qui maintient, qui possède le code, et quel niveau de performance est garanti à la livraison. Deux devis avec des périmètres différents ne sont pas comparables.",
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
      "Pas automatiquement, et c'est le piège juridique n° 1. En droit français (article L111-1 du Code de la propriété intellectuelle), le développeur reste titulaire des droits sur le code, même intégralement payé, sauf clause écrite de cession conforme à l'article L131-3. La jurisprudence l'a confirmé : sans cession, le prestataire peut refuser de remettre les codes sources. Exigez la cession des droits et une clause de réversibilité (remise du code complet — le dépôt Git — et des accès au nom de domaine et à l'hébergement) dans le contrat.",
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
          réellement pratiquées en France en 2026, sources à l&apos;appui, pour
          budgéter juste et comparer des devis à périmètre égal. Chaque terme
          technique y est expliqué à sa première apparition.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les prix 2026 en un tableau" },
            { id: "prix-par-type", label: "2. Les prix par type de site" },
            { id: "prix-par-prestataire", label: "3. Les prix selon qui construit : outil en ligne, freelance ou agence" },
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

        <InfoBox variant="blue" title="Les mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Site vitrine</strong> : un site qui présente votre activité, sans vente en ligne.</li>
            <li><strong>E-commerce</strong> : un site qui encaisse des paiements.</li>
            <li><strong>SEO</strong> (référencement naturel) : ce qui fait remonter votre site dans Google sans payer de publicité.</li>
            <li><strong>CMS</strong> : l&apos;outil pour modifier vous-même textes et photos, sans toucher au code (WordPress est le plus connu).</li>
            <li><strong>Template</strong> : une maquette toute prête, réutilisée par des centaines de sites.</li>
            <li><strong>Builder</strong> : un service sur abonnement (Wix, Squarespace) où l&apos;on assemble soi-même son site à partir de modèles.</li>
            <li><strong>Hébergement</strong> : la location de l&apos;ordinateur qui garde votre site accessible 24 h/24.</li>
            <li><strong>Nom de domaine</strong> : votre adresse sur internet (www.votre-entreprise.fr).</li>
            <li><strong>Responsive</strong> : un site qui s&apos;adapte automatiquement à l&apos;écran du téléphone.</li>
            <li><strong>Maintenance</strong> : l&apos;entretien technique régulier après la mise en ligne.</li>
            <li><strong>Headless</strong> : une boutique dont la partie visible est développée sur mesure, seule la gestion des produits restant sur une plateforme (détail en section 2).</li>
          </ul>
          <p className="mt-2">
            Si un prestataire emploie un mot absent de cette liste sans
            l&apos;expliquer, faites-le-lui définir : bon test de pédagogie —
            et de transparence.
          </p>
        </InfoBox>

        <h2 id="reponse-rapide">1. La réponse rapide : les prix 2026 en un tableau</h2>
        <p>
          En 2026, un site internet professionnel coûte en France{" "}
          <strong>entre 800 € et 3 000 € chez un freelance, entre 3 000 € et
          22 000 € en agence pour un site vitrine, et de 15 000 € à plus de
          120 000 € pour un e-commerce ou une application sur mesure</strong>.
          La médiane d&apos;un projet de création, mesurée sur 1 312 budgets
          réels par le baromètre La Fabrique du Net, est de{" "}
          <strong>5 200 €</strong> — tous types de projets confondus, ce qui
          tire ce chiffre vers le haut.
        </p>
        <p>
          Une médiane n&apos;est ni un minimum ni une moyenne : la moitié des
          entreprises ont payé moins, l&apos;autre moitié davantage. Très
          concrètement : face à un site « professionnel complet » à 900 €, loin
          de ce que paie réellement le marché, la bonne question n&apos;est pas
          « quelle affaire ! » mais « qu&apos;est-ce qui a été retiré du
          devis ? ».
        </p>
        <GuideTable
          headers={["Type de projet", "Freelance", "Agence", "Médiane marché"]}
          rows={[
            ["Site une seule page (dit « one-page » ou « landing »)", "300 – 1 500 €", "1 500 – 6 900 €", "≈ 1 500 €"],
            ["Site vitrine (3-10 pages)", "800 – 3 000 €", "3 000 – 10 000 €", "≈ 4 000 €"],
            ["Site vitrine premium / multilingue", "2 500 – 5 000 €", "8 000 – 22 000 €", "≈ 8 000 €"],
            ["E-commerce (plateforme type Shopify)", "2 000 – 8 000 €", "5 000 – 15 000 €", "≈ 7 000 €"],
            ["E-commerce sur mesure ou « headless »", "—", "15 000 – 120 000 €", "≈ 15 000 €"],
            ["Première version d'application (dite « MVP SaaS »)", "8 000 – 22 000 €", "15 000 – 50 000 €", "≈ 30 000 €"],
            ["SaaS complet / plateforme métier", "—", "40 000 – 120 000 €+", "≈ 60 000 €"],
          ]}
        />
        <p>
          Sources croisées : La Fabrique du Net, Coutsite (150+ devis
          anonymisés), Codeur.com, Hostinger, France Num — détail en fin
          d&apos;article. La suite explique <em>pourquoi</em> ces écarts
          existent et comment choisir le bon niveau d&apos;investissement.
        </p>

        <h3>Peut-on créer un site internet gratuitement ?</h3>
        <p>
          Oui, techniquement : Wix, Squarespace ou WordPress.com ont des
          formules à 0 €. Mais « gratuit » signifie adresse en sous-domaine
          (votrenom.wixsite.com), publicités de la plateforme sur vos pages,
          fonctions bridées et site impossible à exporter. Le premier coût réel
          est votre crédibilité — cette adresse-là envoie le même signal
          qu&apos;un devis expédié depuis une adresse @gmail ; le second, vos
          jours d&apos;apprentissage, que vous ne facturez pas. Pour être
          trouvé localement, une fiche Google Business Profile gratuite et
          bien remplie est souvent plus efficace : c&apos;est elle qui
          apparaît sur Google Maps. Le site à 0 € sert à tester une idée — pas
          à porter une activité.
        </p>

        <h2 id="prix-par-type">2. Les prix par type de site</h2>
        <p>
          Le premier facteur de prix, c&apos;est la nature du projet : un site
          qui présente votre activité, un site qui encaisse des paiements et
          une application qui fait tourner un métier n&apos;ont ni la même
          complexité, ni les mêmes exigences de sécurité et de tests.
        </p>

        <h3>Le site vitrine : 800 € à 22 000 €</h3>
        <p>
          C&apos;est le projet le plus courant — et celui où les écarts sont
          les plus trompeurs. Un site vitrine à 1 000 € — construit sur un
          template, cette maquette toute prête utilisée par des centaines
          d&apos;autres sites, textes à écrire vous-même, aucun
          référencement — et un site vitrine à 15 000 € portent le même nom,
          mais ne rendent pas le même service. Le second comprend un design
          dessiné pour vous, des textes rédigés, un vrai travail de SEO et le
          tracking : la mesure de ce que font vos visiteurs — d&apos;où ils
          viennent, ce qu&apos;ils lisent, s&apos;ils vous contactent.
        </p>
        <p>
          Notre offre de{" "}
          <Link href="/services/sites-vitrines">création de site vitrine</Link>{" "}
          démarre à 6 900 € (3-5 pages orientées conversion), 14 900 € avec
          blog SEO (10-20 pages), 22 000 € et plus en multilingue — avec une
          particularité rare : un score <strong>Lighthouse d&apos;au moins 95,
          garanti par contrat</strong>. Lighthouse est l&apos;outil gratuit de
          Google qui note la qualité technique d&apos;un site sur 100 — le
          contrôle technique du web, que n&apos;importe qui peut faire passer à
          n&apos;importe quel site. À 95 et plus, vous êtes dans le haut du
          panier ; la majorité des sites français en sont loin. Détail gamme
          par gamme dans notre{" "}
          <Link href="/guides/prix-site-vitrine">guide du prix d&apos;un
          site vitrine</Link>.
        </p>

        <h3>L&apos;e-commerce : 2 000 € à 120 000 €</h3>
        <p>
          Sur une plateforme comme Shopify ou WooCommerce, la mise en place
          coûte 2 000 à 12 000 €. Mais la facture continue chaque mois.
          L&apos;abonnement : 27 à 289 € chez Shopify. Les applications
          complémentaires — une boutique moyenne en utilise 6 à 12 : encore
          100 à 500 € par mois. Et une commission de 1,1 à 2 % sur chacune de
          vos ventes. L&apos;alternative : la boutique sur mesure, ou
          « headless » (la partie visible est développée sur mesure, seule la
          gestion des produits reste sur une plateforme).
        </p>
        <p>
          Une <Link href="/services/ecommerce">boutique sur mesure</Link> coûte
          plus cher à construire — 15 000 € à 120 000 € chez nous — mais avec
          0 % de commission. Le point de bascule : environ{" "}
          <strong>500 000 € de ventes en ligne par an</strong>. Le calcul est
          simple : à ce niveau, 1,5 % de commission représente 7 500 € par an,
          plus 1 200 à 6 000 € d&apos;abonnement et d&apos;applications — soit
          9 000 à 13 000 € versés chaque année à la plateforme, de quoi amortir
          une boutique sur mesure en deux à trois ans. En dessous, la
          plateforme reste la solution la plus économique. Grilles complètes
          dans notre guide du{" "}
          <Link href="/guides/prix-site-e-commerce">prix d&apos;un site
          e-commerce</Link>.
        </p>

        <h3>Le SaaS et l&apos;application web : 15 000 € à 120 000 €+</h3>
        <p>
          Un SaaS est un logiciel accessible en ligne par abonnement — pensez à
          Doctolib ou à votre facturation en ligne. Si votre projet est de
          vendre un service de ce type, voici les budgets. Le marché situe un
          MVP « sérieux » entre 15 000 et 30 000 € en développement senior — le
          MVP (« produit minimum viable ») est la première version d&apos;une
          application, réduite aux fonctions essentielles mais utilisable par
          de vrais clients, pour tester votre idée sans engager le budget
          complet. Un SaaS PME complet : 40 000 à 80 000 €.
        </p>
        <p>
          Notre offre de{" "}
          <Link href="/services/saas-applications-metier">développement
          SaaS</Link> démarre à 15 000 € pour un MVP prêt à accueillir de vrais
          utilisateurs, livré en 3 à 6 semaines — sous le marché, parce que
          l&apos;IA accélère notre développement, avec revue humaine de chaque
          ligne. Les fourchettes par étape — maquette de démonstration (POC),
          première version (MVP), version complète (V1) — sont dans{" "}
          <Link href="/guides/combien-coute-un-saas">« combien coûte un
          SaaS »</Link> ; pour iOS et Android, voyez{" "}
          <Link href="/guides/combien-coute-une-application-mobile">combien
          coûte une application mobile</Link>.
        </p>

        <h3>L&apos;outil interne : 8 000 € à 80 000 €</h3>
        <p>
          Un CRM (le fichier clients intelligent : contacts, devis, relances),
          un back-office (l&apos;écran interne où vos équipes gèrent commandes,
          plannings ou stocks), l&apos;automatisation d&apos;une tâche
          répétitive : un{" "}
          <Link href="/services/outils-internes-sur-mesure">outil interne
          sur mesure</Link> va de 8 000 € (un processus ciblé) à 80 000 €
          (plateforme multi-services avec « SSO » : chaque salarié se connecte
          avec ses identifiants d&apos;entreprise existants). Toutes les
          grilles par type d&apos;outil, la méthode pour vérifier un devis
          et le match chiffré contre les abonnements sont dans notre guide
          du <Link href="/guides/prix-logiciel-sur-mesure">prix d&apos;un
          logiciel sur mesure</Link>. Et si vos équipes vivent encore dans
          Excel, notre{" "}
          <Link href="/outils/calculateur-cout-excel">calculateur de coût
          Excel</Link> chiffre en 2 minutes ce que la situation actuelle vous
          coûte — souvent l&apos;argument qui débloque le budget.
        </p>

        <InfoBox variant="blue" title="Pourquoi de telles différences ?">
          Un site à 6 900 € et un site à 22 000 € ne répondent pas au même
          besoin : le premier établit une présence crédible, le second est une
          machine d&apos;acquisition (SEO structuré, pages de conversion,
          mesure des visiteurs, multilingue). Le bon budget est celui qui
          correspond au rôle du site dans votre activité — pas le plus bas.
        </InfoBox>

        <InfoBox variant="emerald" title="Exemple concret : trois entreprises, trois budgets justes">
          <p className="mb-2">
            <strong>Karim, plombier-chauffagiste</strong>, veut être trouvable
            et crédible : 3 à 5 pages, avis clients, formulaire de contact.
            Budget juste : 2 000 à 3 500 € chez un bon freelance, ou 6 900 € en
            agence s&apos;il vise les recherches locales type « chauffagiste
            Chambéry ».
          </p>
          <p className="mb-2">
            <strong>Claire, cabinet de conseil B2B</strong> : ses prospects la
            cherchent sur Google, elle veut des demandes entrantes. Budget
            juste : 10 000 à 15 000 € avec blog, contenus rédigés et mesure
            des conversions — son site est un commercial, pas une carte de
            visite.
          </p>
          <p>
            <strong>Mehdi, accessoires de sport en ligne</strong> : 350 000 €
            de ventes sur Shopify, des commissions qui grimpent. Budget juste :
            rester sur Shopify, et planifier une boutique sur mesure (15 000 à
            25 000 €) à l&apos;approche des 500 000 € de ventes annuelles.
            Trois rôles du site, trois budgets : toute la logique de ce guide.
          </p>
        </InfoBox>

        <h2 id="prix-par-prestataire">3. Les prix selon qui construit : outil en ligne, freelance ou agence</h2>
        <p>
          Deuxième facteur : qui construit — outil de création en ligne (le
          « builder » du lexique : vous assemblez vous-même), freelance ou
          agence. Les tarifs journaliers — le « TJM », le prix d&apos;une
          journée de travail — mesurés par Malt et Silkhom expliquent
          l&apos;essentiel des écarts&nbsp;: freelance junior 350 à 450 €/jour,
          confirmé 500 à 600 €/jour, senior expert React/Next.js 700 €/jour et
          plus ; agences 400 à 1 200 €/jour selon taille et positionnement.
        </p>
        <GuideTable
          headers={["Prestataire", "Site vitrine", "Points forts", "Points faibles"]}
          rows={[
            ["Outil en ligne à faire soi-même (Wix, Squarespace)", "0 – 500 € + 17 – 179 €/mois à vie", "Rapide, aucun code", "Abonnement perpétuel, SEO limité, vous ne possédez rien"],
            ["Freelance junior", "800 – 2 500 €", "Prix d'entrée", "Périmètre réduit, continuité non garantie"],
            ["Freelance senior", "2 000 – 5 000 €", "Bon rapport qualité/prix", "Une seule personne : si elle est malade, débordée ou cesse son activité, votre site n'a plus personne pour s'en occuper"],
            ["Agence établie", "4 000 – 12 000 €", "Équipe, méthode, garanties, SEO", "Ticket d'entrée plus élevé"],
            ["Agence premium / spécialisée", "8 000 – 25 000 €+", "Sur-mesure complet, performance contractuelle", "Réservé aux projets à enjeu"],
          ]}
        />
        <p>
          Le haut de marché dépasse 25 000 € pour un site vitrine chez les
          agences Next.js les plus premium. Nos fourchettes (vitrine
          6 900 – 22 000 €, SaaS dès 15 000 €) se placent entre l&apos;agence
          généraliste et ce haut de marché : mêmes technologies, méthode plus
          resserrée.
        </p>

        <h3>De la journée facturée au prix du projet : la mécanique d&apos;un devis</h3>
        <p>
          Derrière tout devis, une multiplication simple : jours de travail
          estimés × tarif journalier. Un site vitrine sérieux représente 10 à
          20 jours : chez un freelance confirmé à 550 €/jour, cela donne 5 500
          à 11 000 €. La division sert de détecteur d&apos;anomalie : 8 000 € à
          600 €/jour, c&apos;est 13 jours — cadrage, maquettes, développement,
          contenus, tests : cohérent. Le même périmètre à 1 500 €, c&apos;est
          2 jours et demi : quelque chose a forcément été retiré — souvent le
          design sur mesure, les contenus ou le SEO.
        </p>
        <p>
          Cette lecture éclaire les deux modes de facturation. Au{" "}
          <strong>forfait</strong>, prix ferme pour un périmètre écrit :
          c&apos;est le prestataire qui porte le risque de dépassement — le
          mode le plus protecteur. En <strong>régie</strong>, vous payez au
          temps passé : souple, mais le compteur tourne pour vous. Pour un
          premier site, exigez le forfait ; et méfiez-vous du « forfait » à
          plafond d&apos;heures caché : une régie déguisée (section 9). Dernier
          point qui brouille tout : certains vendent un prix en une fois,
          d&apos;autres un prix par mois — les deux ne sont pas comparables
          directement, et c&apos;est là que se cachent les pièges les plus
          coûteux.
        </p>

        <h2 id="par-mois-ou-en-une-fois">4. Par mois ou en une fois ? Abonnement, location, achat</h2>
        <p>
          « Combien coûte un site internet <em>par mois</em> ? » est
          l&apos;une des questions les plus tapées sur Google — et trois
          modèles très différents se cachent derrière :
        </p>
        <ul>
          <li>
            <strong>L&apos;abonnement à un outil en ligne</strong> (Wix 16,80 à
            178,80 €/mois, Squarespace 12 à 69 €/mois, Shopify 27 à
            289 €/mois) : vous payez tant que le site existe et vous ne pouvez
            pas l&apos;emporter ailleurs — ces outils n&apos;exportent ni le
            design ni les fonctionnalités, au mieux vos textes et images.
            Changer d&apos;outil, c&apos;est tout reconstruire : le modèle
            économique de ces plateformes.
          </li>
          <li>
            <strong>La location de site</strong> (150 à 300 €/mois, engagement
            36-48 mois) : le total atteint 7 200 à 14 400 €, jusqu&apos;à
            3 fois le prix d&apos;achat d&apos;un site équivalent — et à la fin,{" "}
            <strong>le site ne vous appartient pas</strong>. Signal
            d&apos;alerte documenté : des vendeurs revendent aussitôt votre
            contrat à un organisme de financement. Même si le prestataire
            disparaît, vous payez les mensualités jusqu&apos;au terme — comme
            un crédit auto, mais sans voiture à la fin.
          </li>
          <li>
            <strong>L&apos;achat</strong> : investissement initial plus élevé,
            puis des coûts mensuels très faibles — hébergement 0 à 20 €/mois
            pour un site statique bien construit (pages fabriquées à
            l&apos;avance, une fois pour toutes, puis servies telles quelles :
            pas de logiciel à faire tourner ni de base de données exposée),
            maintenance optionnelle. Le site est un actif — amortissable,
            revendable avec l&apos;entreprise.
          </li>
        </ul>
        <InfoBox variant="blue" title="En clair : louer ou acheter son site, l'analogie immobilière">
          Le locataire à 250 €/mois aura versé 12 000 € au bout de quatre
          ans — sans rien posséder : s&apos;il part, il rend les clés et
          repart de zéro, avec son nom de domaine pour seul bagage dans le
          meilleur des cas. L&apos;acheteur détient un actif : inscrit au
          bilan, amortissable, transmissible, qu&apos;il fait évoluer avec le
          prestataire de son choix. Une seule question avant de signer : « À
          la fin du contrat, le site m&apos;appartient-il ? » Si la réponse
          hésite, c&apos;est non.
        </InfoBox>
        <InfoBox variant="amber" title="Le coût caché n° 1 : la dépendance">
          Vérifiez toujours <strong>qui possède le code et les contenus</strong>.
          Certaines offres « site à 99 €/mois » vous louent votre propre
          site : si vous partez, vous repartez de zéro. Chez Hagnéré Code, le
          code vous appartient — le dépôt Git, le coffre-fort informatique qui
          contient tout le code et l&apos;historique des modifications, vous
          est transféré avec sa documentation.
        </InfoBox>

        <h2 id="postes-de-cout">5. Ce qui fait varier le prix : les postes d&apos;un devis</h2>
        <p>
          Un devis sérieux se décompose en postes identifiables — six, dans la
          plupart des projets. Les rares agences qui publient leurs ratios
          convergent : stratégie 5 à 15 % du budget, design 20 à 35 %,
          développement 30 à 45 %. Voici ces postes, avec leur poids typique
          dans un projet vitrine standard :
        </p>
        <ul>
          <li>
            <strong>Cadrage et architecture (10-15 %)</strong> — comprendre
            votre marché, définir l&apos;arborescence (le plan du site), les
            parcours et les objectifs de conversion. Ce qui distingue un site
            qui travaille d&apos;une plaquette en ligne.
          </li>
          <li>
            <strong>Design (20-25 %)</strong> — maquettes sur mesure,
            responsive (adaptées au téléphone comme à l&apos;ordinateur),
            déclinées sur vos pages types. Un design à base de template coûte
            moins cher, mais vous ressemblez à vos concurrents.
          </li>
          <li>
            <strong>Développement (30-40 %)</strong> — intégration fidèle des
            maquettes, animations, formulaires, connexions à vos outils (CRM,
            prise de rendez-vous, paiement).
          </li>
          <li>
            <strong>Contenus (10-20 %)</strong> — rédaction optimisée SEO
            (300 à 800 € la page sur le marché), photos, illustrations. Poste
            le plus souvent exclu des devis bas, alors que c&apos;est lui qui
            fait venir le trafic.
          </li>
          <li>
            <strong>SEO technique et performance (10-15 %)</strong> — ce qui
            rend le site lisible par Google et rapide, dont les « Core Web
            Vitals », les trois mesures de vitesse et de stabilité que Google
            utilise pour classer les sites. En 2026, la vitesse fait partie
            des critères de classement : un site lent apparaît plus bas dans
            les résultats. Non inclus, ce travail se facture 500 à 2 000 € en
            plus.
          </li>
          <li>
            <strong>Vérification finale et mise en ligne (5-10 %)</strong> —
            ce que le métier appelle la « recette » : tests sur ordinateur,
            tablette et téléphone, mesure d&apos;audience, redirections, puis
            publication. Chez nous, 30 jours de garantie inclus.
          </li>
        </ul>

        <h3>Le prix par fonctionnalité : la grille qui manque à tous les devis</h3>
        <p>
          Chaque fonctionnalité ajoutée est du développement supplémentaire —
          le facteur de variation le plus concret. Ordres de grandeur du
          marché français :
        </p>
        <GuideTable
          headers={["Fonctionnalité", "Ordre de grandeur", "À savoir"]}
          rows={[
            ["Formulaire avancé (multi-étapes, logique conditionnelle)", "Quelques heures à quelques jours de travail", "Le formulaire de contact simple est toujours inclus ; c'est la logique qui se paie."],
            ["Prise de rendez-vous en ligne", "150 – 300 € via un module standard", "Nettement plus cher en développement sur mesure."],
            ["Site multilingue", "+30 à 50 % du budget initial", "Ce n'est pas une traduction : presque un second site à structurer et maintenir."],
            ["Paiement en ligne", "Frais de transaction de 1,4 à 2,9 %", "Prélevés sur chaque vente, selon la solution choisie."],
            ["Espace membre sécurisé, connexion à votre CRM", "2 à 5 jours de développement, soit 1 000 – 4 000 €", "Aux tarifs journaliers du marché (500 à 800 €/jour)."],
          ]}
        />
        <p>
          La bonne pratique : listez vos fonctionnalités indispensables et
          demandez à chaque prestataire de les chiffrer séparément — le moyen
          le plus simple de comparer à périmètre égal.
        </p>

        <GuideInlineCTA />

        <h2 id="devis-decortique">6. Un devis à 14 900 € décortiqué ligne par ligne</h2>
        <p>
          Les guides de prix que vous trouverez ailleurs ne montrent jamais un
          vrai devis. Voici donc, ligne par ligne, la structure réelle de notre
          forfait vitrine « Performance » à 14 900 € — un site 10-20 pages
          avec blog SEO :
        </p>
        <GuideTable
          headers={["Poste", "Contenu", "Part du forfait"]}
          rows={[
            ["Cadrage (« Discovery »)", "Ateliers, profils types de vos clients (personas), plan du site, schémas des pages (wireframes)", "≈ 1 800 € (12 %)"],
            ["Design", "Maquettes sur mesure ordinateur + mobile, charte graphique complète", "≈ 3 300 € (22 %)"],
            ["Développement Next.js", "Intégration, animations, formulaires, outil d'édition des contenus (CMS headless : l'interface où vous modifiez vous-même textes et photos, séparée du site lui-même)", "≈ 5 200 € (35 %)"],
            ["Contenus & SEO éditorial", "Rédaction des pages clés, balisage et données structurées (les informations que lit Google)", "≈ 2 200 € (15 %)"],
            ["Performance & SEO technique", "Core Web Vitals, plan du site pour Google, redirections, mesure d'audience", "≈ 1 500 € (10 %)"],
            ["Vérification finale, mise en ligne, garantie 30 j", "Tests sur tous les écrans, formation de 2 h à l'outil d'édition, hébergement 1re année", "≈ 900 € (6 %)"],
          ]}
        />
        <p>
          Ce tableau est une grille de lecture universelle : prenez
          n&apos;importe quel devis et demandez la répartition. Si un poste
          entier manque (le plus souvent : contenus ou SEO), le prix
          « attractif » s&apos;explique — et le travail sera à payer une
          seconde fois, ailleurs.
        </p>

        <h2 id="couts-caches">7. Les coûts récurrents et cachés après la mise en ligne</h2>
        <p>
          Le prix de construction n&apos;est que la moitié de l&apos;équation.
          Les coûts récurrents réels, aux tarifs 2026 constatés :
        </p>
        <GuideTable
          headers={["Poste récurrent", "Fourchette réelle", "Remarque"]}
          rows={[
            ["Nom de domaine", "6 – 15 €/an (.fr), 10 – 15 €/an (.com)", "À votre nom, toujours — jamais au nom du prestataire."],
            ["Hébergement mutualisé (serveur partagé) ou VPS (serveur réservé au vôtre)", "1 – 10 €/mois / 5 – 35 €/mois", "Pour les sites WordPress classiques."],
            ["Hébergement site Next.js", "0 – 20 €/mois", "Vercel/Netlify (hébergeurs spécialisés dans les sites Next.js) : quasi gratuit pour un site vitrine performant."],
            ["Certificat SSL (le cadenas de sécurité affiché par le navigateur)", "0 € (Let's Encrypt)", "Gratuit via le service Let's Encrypt : méfiance envers qui le facture 50-100 €/an."],
            ["Emails professionnels", "≈ 72 – 82 €/an/utilisateur", "Google Workspace (tarifs +17 à 33 % depuis janv. 2025)."],
            ["Maintenance WordPress", "30 – 120 €/mois (vitrine), 200 – 500 €/mois (e-com)", "Mises à jour hebdomadaires du cœur, des plugins (les modules ajoutés à WordPress) et du thème."],
            ["Licences de plugins premium", "500 – 1 000 €/an (site WordPress pro)", "Les modules payants : constructeur de pages, SEO, sécurité, formulaires…"],
            ["Bannière cookies (outil de gestion du consentement, dit « CMP »)", "0 – 150 €/an et plus", "486,8 M€ d'amendes CNIL en 2025 — et la procédure simplifiée vise aussi les petites structures."],
            ["Banques d'images", "30 – 200 €/mois si non incluses", "Adobe Stock dès 29,99 €/mois."],
          ]}
        />
        <p>
          Deux règles. La première : le marché budgète la maintenance à{" "}
          <strong>10-20 % du coût de création par an</strong>. La seconde :
          cette règle vaut surtout pour les sites à CMS dynamique, où un
          logiciel tourne en permanence sur le serveur et doit être mis à jour
          chaque semaine. Un site statique est fabriqué une fois pour toutes,
          puis « servi » tel quel : rien à mettre à jour, presque rien à
          pirater, presque rien à payer — 500 à 1 500 € économisés chaque
          année face à un WordPress professionnel équivalent. Au total, le
          budget <em>annuel</em> : environ 80 à 350 € pour un site statique
          bien construit, 1 000 à 3 000 € pour un WordPress professionnel,
          2 500 à 6 000 € et plus pour un e-commerce actif. Le sujet mérite
          son guide entier — forfaits réels du marché nommés, contrat
          décodé (SLA, pièges) et coût chiffré de ne rien entretenir :
          voir notre{" "}
          <Link href="/guides/cout-maintenance-site-internet">guide du
          coût de la maintenance d&apos;un site internet</Link>.
        </p>

        <h3>L&apos;accessibilité numérique : la nouvelle obligation à budgéter</h3>
        <p>
          Depuis le 28 juin 2025, la réglementation européenne sur
          l&apos;accessibilité (directive UE 2019/882, transposée par la loi du
          9 mars 2023) s&apos;impose aux services en ligne — dont
          l&apos;e-commerce : navigation au clavier, textes alternatifs sur les
          images, contrastes suffisants, formulaires compatibles avec un
          lecteur d&apos;écran. Concernées : les entreprises de 10 salariés et
          plus, ou dépassant 2 M€ de chiffre d&apos;affaires ; sanctions
          jusqu&apos;à 7 500 € d&apos;amende, doublée en récidive. Intégrée dès
          la conception, l&apos;accessibilité coûte peu ; une mise en
          conformité après coup se paie en audit puis en reprise du code. Si
          vous êtes concerné, exigez que le devis mentionne le niveau visé
          (référentiels RGAA ou WCAG) — ce qui n&apos;est pas écrit ne sera pas
          livré.
        </p>

        <h2 id="cout-total-3-ans">8. Le vrai comparatif : coût total sur 3 ans</h2>
        <p>
          C&apos;est LE calcul que presque personne ne fait — et
          qu&apos;aucun autre guide ne vous montre. Pensez à une imprimante à
          40 € : le prix d&apos;achat est dérisoire, mais les cartouches
          coûtent 300 € par an — c&apos;est là que le fabricant gagne sa vie.
          Un site web fonctionne pareil : le prix affiché d&apos;un site
          low-cost ne représente que 20 à 40 % de ce qu&apos;il coûtera
          vraiment. Ses « cartouches » : maintenance, licences, hébergement,
          refonte anticipée. Poste par poste :
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
          moyenne). Surtout, l&apos;un des deux sites aura généré des clients
          pendant tout ce temps ; l&apos;autre en aura coûté, par sa lenteur
          et son absence de SEO.
        </p>
        <InfoBox variant="emerald" title="À retenir : le coût total sur 3 ans">
          Sur 3 ans, un site à 1 500 € revient à 5 800 – 10 100 € ; un site
          sur mesure à 10 000 € revient à 10 300 – 15 500 €. L&apos;écart réel
          est de 1 à 1,5, pas de 1 à 7 — et il s&apos;inverse dès la quatrième
          année. Un seul chiffre permet de comparer honnêtement deux devis :
          le coût total sur 3 ans. Jamais le prix d&apos;achat.
        </InfoBox>

        <h2 id="devis-trop-bas">9. Devis trop bas et arnaques : les signaux d&apos;alerte</h2>
        <p>
          Un devis nettement sous le marché exclut presque toujours la
          rédaction des contenus, le SEO technique, le responsive soigné, la
          mesure des visiteurs ou la propriété du code. Le site
          «&nbsp;pas cher&nbsp;» coûte alors deux fois : à la commande, puis
          quand il faut le refaire.
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
            <strong>Plafonnement caché d&apos;heures</strong> — cas réel :
            20 heures budgétées pour un e-commerce, livré incomplet.
          </li>
          <li>
            <strong>Site « offert » contre abonnement d&apos;hébergement
            gonflé</strong> — exemple relevé : 500 €/mois sans clause de
            sortie, environ 10 fois le prix du marché.
          </li>
          <li>
            <strong>Engagement 36-48 mois présenté comme standard</strong>,
            contrat revendu à un organisme de financement : de la location
            déguisée (section 4 — vous paierez jusqu&apos;au bout, même si le
            prestataire disparaît).
          </li>
          <li>
            <strong>Pas de mention de la propriété du code</strong> ni de
            clause de réversibilité (section 15 : sans clause écrite, le code
            ne vous appartient pas).
          </li>
          <li>
            <strong>Version mobile « en option »</strong> — en 2026, ce
            n&apos;est pas une option en moins : c&apos;est un signal de fuite.
          </li>
        </ul>
        <p>
          Les bonnes questions avant de signer : qu&apos;est-ce qui n&apos;est{" "}
          <em>pas</em> inclus ? Comment sont facturées les modifications
          futures ? Quelle maintenance après le lancement ? Qui possède le
          code, le domaine et l&apos;hébergement ?
        </p>

        <h3>Acompte et échéancier : comment se paie un site</h3>
        <p>
          L&apos;usage : un acompte de 30 à 50 % à la signature, puis le solde
          à la livraison. Trois règles : ne payez jamais 100 % d&apos;avance
          (le solde est votre seul levier si le site n&apos;est pas
          conforme) ; adossez chaque paiement à un livrable vérifiable, pas à
          une date ; refusez le financement par organisme tiers « pour étaler
          la dépense » — le mécanisme des locations déguisées vu plus haut. Un
          paiement en deux ou trois fois négocié directement avec
          l&apos;agence est en revanche courant et sain.
        </p>

        <h2 id="technologie">10. WordPress, Next.js, builders : la techno change-t-elle le prix ?</h2>
        <p>
          Oui — mais pas comme on le croit. La vraie question n&apos;est pas
          «&nbsp;quel outil est le moins cher à installer&nbsp;» mais
          «&nbsp;quel socle coûte le moins cher sur 3 ans pour le résultat
          visé&nbsp;». Le seul baromètre publiant des prix par technologie (La
          Fabrique du Net) confirme la hiérarchie : environ 5 000 € pour un
          site no-code (assemblé avec des outils visuels, sans programmation),
          8 000 € pour un WordPress, 25 000 à 40 000 € pour une véritable
          application sur mesure — quelle que soit la famille technique
          (PHP/Symfony, JavaScript/React : des noms que vous verrez dans les
          devis). Retenez l&apos;ordre de grandeur : un site se compte en
          milliers d&apos;euros, une application en dizaines de milliers.
        </p>
        <InfoBox variant="blue" title="Wix, WordPress, sur mesure : la comparaison du bâtiment">
          Wix ou Squarespace, c&apos;est la location d&apos;un local déjà
          aménagé : vous emménagez en quelques jours, mais vous payez un loyer
          à vie, vous ne pouvez pas pousser les murs, et si vous partez, vous
          partez sans rien. WordPress, c&apos;est la maison sur catalogue :
          moins chère et très répandue, mais assemblée à partir de dizaines de
          composants standard — les fameux plugins — à entretenir chaque
          semaine. Le sur-mesure (Next.js), c&apos;est la maison
          d&apos;architecte : plus chère au départ, dessinée pour votre usage,
          presque rien à entretenir, un actif qui prend de la valeur. Aucune
          n&apos;est « la bonne » dans l&apos;absolu : tout dépend du rôle que
          le bâtiment — votre site — doit jouer dans votre activité.
        </InfoBox>
        <GuideTable
          headers={["Socle", "Création", "Coûts récurrents typiques", "Pour qui"]}
          rows={[
            ["Builder (Wix, Squarespace)", "0 – 500 €", "17 – 179 €/mois à vie", "Tester une activité, budget minimal"],
            ["WordPress + thème", "800 – 5 000 €", "Maintenance 30-120 €/mois + licences 500-1 000 €/an", "Site simple, écosystème connu"],
            ["WordPress sur mesure", "5 000 – 15 000 €", "Idem : le CMS reste à mettre à jour chaque semaine", "Éditorial lourd, équipe habituée"],
            ["Next.js / React sur mesure", "6 900 – 25 000 €+", "Hébergement 0-20 €/mois, zéro licence, zéro mise à jour de CMS", "Performance, SEO, actif durable"],
          ]}
        />
        <p>
          Nous construisons avec <strong>Next.js</strong> (associé à React et
          TypeScript), une technologie utilisée par les grandes équipes web.
          En clair, pour vous : votre site s&apos;affiche très vite, donc
          Google le classe mieux et vos visiteurs restent. Aucun module à
          mettre à jour chaque semaine : moins de failles, hébergement quasi
          gratuit. Et le code suit un standard répandu : des milliers de
          développeurs peuvent le reprendre — vous n&apos;êtes prisonnier de
          personne. Pour trancher, lisez notre comparatif{" "}
          <Link href="/guides/nextjs-ou-wordpress">Next.js ou
          WordPress</Link>.
        </p>
        <p>
          Un mot sur l&apos;IA, grande absente des guides concurrents : elle
          change les coûts en 2026, avec une nuance. La seule étude de prix
          publique (Digital Applied, 2026) mesure des délais réduits de 22 à
          34 % grâce à l&apos;IA, mais le plus souvent <em>sans baisse des
          prix affichés</em> — les agences gardent le gain en marge. Nous le
          répercutons dans nos forfaits : un MVP SaaS à 15 000 € là où le
          marché démarre à 30 000 €. Méfiez-vous en revanche du « site généré
          par IA à 200 € » : sans architecture, sans SEO, sans garantie,
          c&apos;est un template avec une couche de peinture.
        </p>
        <p>
          Et si vous avez déjà un site qui fonctionne ? Nous savons aussi{" "}
          <Link href="/services/maintenance-evolution">reprendre et faire
          évoluer l&apos;existant</Link> — la refonte n&apos;est pas toujours
          la bonne réponse.
        </p>

        <h2 id="performance">11. La performance, un coût caché (ou un levier) chiffré</h2>
        <p>
          La vitesse de votre site n&apos;est pas un détail technique :
          c&apos;est un poste économique, mesuré par deux études de référence.
        </p>
        <ul>
          <li>
            <strong>Google/Deloitte « Milliseconds Make Millions »</strong>{" "}
            (37 marques, 30 millions de sessions) : améliorer la vitesse
            mobile de seulement <strong>0,1 seconde</strong> augmente les
            conversions retail de <strong>+8,4 %</strong> et le panier moyen
            de +9,2 %.
          </li>
          <li>
            <strong>Google/SOASTA</strong> (900 000 pages mobiles) : passer de
            1 à 3 secondes de chargement augmente la probabilité de rebond de{" "}
            <strong>+32 %</strong> ; de 1 à 5 secondes : +90 %.
          </li>
        </ul>
        <p>
          Le « rebond », c&apos;est un visiteur qui repart aussitôt, sans rien
          lire. À votre échelle : avec 20 demandes de devis par mois et une
          signature sur quatre, 8 % de demandes en plus font environ
          5 contrats supplémentaires par an. Pour un artisan dont le chantier
          moyen vaut 15 000 €, la vitesse est un poste de chiffre
          d&apos;affaires.
        </p>
        <p>
          C&apos;est pourquoi nos contrats incluent des seuils chiffrés : note
          Lighthouse d&apos;au moins 95 sur mobile, et affichage du contenu
          principal en moins de 1,5 seconde — l&apos;indicateur que Google
          appelle LCP ; sous ce seuil, votre visiteur ne voit jamais
          d&apos;écran blanc. Exigez la même chose de tout prestataire :
          demandez par écrit le score Lighthouse visé à la livraison. Un refus
          de s&apos;engager sur un chiffre vous apprend quelque chose
          d&apos;important — avant d&apos;avoir payé. Pour aller plus loin,
          notre offre de{" "}
          <Link href="/services/referencement-google">référencement
          Google</Link> s&apos;appuie exactement sur ce levier.
        </p>

        <h2 id="refonte">12. Refonte : combien ça coûte, quand la faire</h2>
        <p>
          Une refonte de site vitrine coûte 1 500 à 10 000 € (2 000 – 4 500 €
          pour 5-10 pages, 4 500 – 8 000 € en premium) ; une refonte
          e-commerce va de 5 000 à plus de 30 000 €. Deux points de vigilance :
        </p>
        <ul>
          <li>
            <strong>La migration SEO</strong> — les redirections 301 page à
            page (le « suivi de courrier » du web : chaque ancienne adresse
            renvoie vers la nouvelle, réputation Google comprise) et la
            conservation des positions. Poste le plus souvent absent des devis
            de refonte, et le plus coûteux quand il manque : un trafic
            construit en 3 ans peut disparaître en une mise en ligne.
          </li>
          <li>
            <strong>La refonte prématurée, coût caché du low-cost</strong> —
            49 % des PME interrogées par Databox avaient entièrement refondu
            leur site dans les 2 dernières années. Un site bien construit
            s&apos;amortit sur 5-6 ans ; un site d&apos;entrée de gamme
            « consomme » une refonte tous les 2-3 ans.
          </li>
        </ul>
        <p>
          Quand refondre ? Trois signaux qui ne trompent pas : votre site met
          plus de 3 secondes à s&apos;afficher sur téléphone ; il
          n&apos;apparaît pas sur Google pour vos mots-clés métier ; vous
          n&apos;osez plus donner son adresse en rendez-vous client. Deux
          signaux sur trois : la refonte sera rentable. Un seul ou aucun : une
          évolution ciblée suffit probablement — et coûte 5 à 10 fois moins
          cher. Le sujet mérite son guide entier : grilles par type de
          refonte, migration SEO chiffrée poste par poste et devis réel
          décortiqué sont dans notre{" "}
          <Link href="/guides/prix-refonte-site-internet">guide du prix
          d&apos;une refonte de site internet</Link>.
        </p>

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
          La cause n° 1 de retard n&apos;est pas technique : c&apos;est{" "}
          <strong>le contenu non fourni par le client</strong> (+2 à 4 semaines
          si textes et images ne sont pas prêts). D&apos;où nos forfaits avec
          rédaction incluse — et des dates de livraison contractuelles, avec
          pénalités si nous les dépassons (voir{" "}
          <Link href="/methode">notre méthode Sprint Fixe™</Link>).
        </p>

        <h2 id="aides">14. Aides et subventions 2026</h2>
        <p>
          Point d&apos;actualité que beaucoup de guides recopient faux :{" "}
          <strong>le « Chèque France Num » national de 500 € n&apos;existe
          plus depuis 2021</strong>, et le chèque numérique d&apos;Île-de-France
          a fermé en octobre 2025. En 2026, le paysage réel :
        </p>
        <ul>
          <li>
            <strong>Le Prêt Boost Transformation Numérique</strong> (Bpifrance
            Flash, partenaire France Num) : 5 000 à 75 000 €, sans garantie
            personnelle, pour les TPE/PME de plus de 3 ans — réponse en 48 h,
            remboursement 3-5 ans avec différé. Il finance explicitement la
            création de site. Annoncé disponible jusqu&apos;à fin 2026.
          </li>
          <li>
            <strong>Les subventions régionales</strong>, hétérogènes et à
            durée de vie courte : PASS Commerce &amp; Artisanat en Bretagne
            (30 %, plafond 7 500 €), Impulsion Transition en Normandie
            (50 %, jusqu&apos;à 5 000 €), INAC Hauts-de-France (jusqu&apos;à
            12 000 €, vitrine simple exclue), Kap Numérik à La Réunion
            (80 %, plafond 3 200 €) — et en Auvergne-Rhône-Alpes, un
            accompagnement pris en charge à 100 % (Atouts Numériques).
            Panorama complet dans notre guide des{" "}
            <Link href="/guides/aides-creation-site-internet">aides à la
            création de site internet</Link>.
          </li>
          <li>
            <strong>Aucun crédit d&apos;impôt</strong> ne finance un simple
            site ; le Crédit d&apos;Impôt Innovation (20 % depuis 2025,
            prorogé jusqu&apos;à fin 2027) peut concerner un SaaS réellement
            innovant.
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
          pèsent lourd dans le coût réel.
        </p>
        <h3>La propriété du code : le piège juridique n° 1</h3>
        <p>
          Payer son site sans clause de cession, c&apos;est comme payer une
          maison sans jamais passer chez le notaire : vous avez réglé la
          facture, vous « habitez » le site, mais le titre de propriété ne
          vous a jamais été transféré. La loi française est contre-intuitive :{" "}
          <strong>celui qui écrit le code en reste propriétaire, même une fois
          votre facture intégralement payée</strong> (article L111-1 du Code
          de la propriété intellectuelle). Des tribunaux l&apos;ont confirmé
          (Trib. com. Besançon, 23 mars 2016) : sans cession écrite, le
          prestataire peut légalement refuser de vous remettre les codes
          sources de votre propre site.
        </p>
        <p>
          Deux clauses vous protègent. La <strong>clause de cession des
          droits</strong> : chaque droit cédé mentionné distinctement, avec
          son étendue et sa durée — l&apos;exigence de l&apos;article L131-3.
          La <strong>clause de réversibilité</strong> : en cas de séparation,
          remise sous 10 jours ouvrés du dépôt Git (tout le code et son
          historique), des accès DNS (le « carnet d&apos;adresses » qui relie
          votre nom de domaine à votre site), de l&apos;hébergement et des
          certificats de sécurité. Cette liste est, mot pour mot, ce
          qu&apos;il faut exiger dans le contrat. Chez Hagnéré Code, les deux
          figurent dans les CGV — le dépôt Git est même chez vous dès le
          premier jour.
        </p>
        <h3>TVA et comptabilité</h3>
        <p>
          La création porte une TVA à 20 %, déductible pour une entreprise
          assujettie. Comptablement, un site « actif » (e-commerce, génération
          mesurable de contacts commerciaux) peut être <strong>immobilisé au
          compte 205 — inscrit à l&apos;actif du bilan — et amorti sur 3 à
          5 ans</strong> ; un site purement « vitrine » passe en charges,
          option souvent plus avantageuse en TPE (déduction immédiate). La
          maintenance et les évolutions sont toujours des charges. Votre
          expert-comptable tranchera.
        </p>

        <h2 id="budgeter">16. Méthode : budgéter juste en 4 étapes</h2>
        <p>
          Vous connaissez les fourchettes, les postes d&apos;un devis et les
          pièges. Reste à en faire un budget. Quatre étapes, dans cet ordre —
          chacune alimente la suivante.
        </p>
        <ol>
          <li>
            <strong>Définissez le rôle du site</strong> — présence crédible,
            demandes de contact, vente en ligne ? Le budget découle du rôle,
            pas l&apos;inverse.
          </li>
          <li>
            <strong>Listez les fonctionnalités indispensables</strong> —
            formulaires, prise de rendez-vous, blog, multilingue, paiement
            (grille de la section 5).
          </li>
          <li>
            <strong>Exigez des devis à périmètre égal</strong> — contenus,
            SEO, mesure des visiteurs, garantie, propriété du code : chaque
            ligne explicite (grille de la section 6). Le meilleur outil reste
            un bon{" "}
            <Link href="/guides/cahier-des-charges-site-internet">cahier
            des charges</Link> envoyé aux prestataires.
          </li>
          <li>
            <strong>Raisonnez en coût total sur 3 ans</strong> — construction
            + hébergement + maintenance + licences + refonte éventuelle. Le
            seul chiffre comparable entre deux approches (section 8).
          </li>
        </ol>
        <p>
          Un dirigeant qui suit ces quatre étapes arrive avec un périmètre
          écrit et un chiffre de référence : c&apos;est lui qui compare, plus
          l&apos;inverse.
        </p>
        <InfoBox variant="blue" title="La méthode appliquée : une menuiserie de 8 salariés">
          Une menuiserie de 8 salariés, 1,2 M€ de chiffre d&apos;affaires, un
          site de 2015. <strong>Étape 1 — le rôle</strong> : obtenir des
          demandes de devis d&apos;aménagements sur mesure.{" "}
          <strong>Étape 2</strong> : 6 pages, formulaire avec envoi de photos,
          galerie de réalisations, avis clients.{" "}
          <strong>Étape 3 — trois devis</strong> sur le même cahier des
          charges : 2 400 € (freelance, textes non inclus), 7 500 € (agence,
          rédaction et SEO inclus), 12 000 € (premium, superflu ici).{" "}
          <strong>Étape 4 — le coût sur 3 ans</strong> : l&apos;option à
          2 400 € grimpe en réalité à environ 5 700 € (rédaction ailleurs :
          1 500 € ; maintenance : 1 800 €), contre 7 500 € tout compris avec
          garantie. Écart réel : 1 800 € — pour des chantiers à 20 000 €
          pièce, une seule demande de devis supplémentaire par an rembourse la
          différence.
        </InfoBox>

        <h3>Et combien ça rapporte ? Le calcul du point mort</h3>
        <p>
          Un guide de prix qui ne parle que de coûts oublie la moitié de
          l&apos;équation. Selon le Baromètre France Num 2025,
          l&apos;acquisition de nouveaux clients est le premier bénéfice cité
          de la transformation numérique (48 % des dirigeants de TPE-PME).
          Faites le calcul : ce que vaut un client (panier moyen × marge ×
          nombre d&apos;achats), puis combien de clients le site doit générer
          pour se rembourser. Un site à 7 000 € utilisé 5 ans revient à
          environ 117 €/mois : si un client moyen rapporte 500 € de marge, un
          client tous les quatre mois suffit — le reste est du gain net. Un
          site à 2 000 € qui ne génère rien coûte infiniment plus cher
          qu&apos;un site à 10 000 € qui produit deux clients par mois.
        </p>

        <h2 id="erreurs">17. Les 7 erreurs à éviter</h2>
        <p>
          Après des centaines de devis analysés pour écrire ce guide, les
          mêmes erreurs reviennent. Les sept qui coûtent le plus cher — toutes
          évitables :
        </p>
        <ul>
          <li>
            <strong>Choisir au prix affiché</strong> plutôt qu&apos;au coût
            total sur 3 ans — l&apos;erreur la plus chère de cette liste.
          </li>
          <li>
            <strong>Signer sans clause de cession des droits</strong> ni
            réversibilité : votre site ne vous appartient pas (section 15).
          </li>
          <li>
            <strong>Oublier les contenus</strong> — premier poste exclu des
            devis bas et première cause de retard.
          </li>
          <li>
            <strong>Négliger la performance</strong> — 0,1 s = 8,4 % de
            conversions : exigez des seuils chiffrés au contrat.
          </li>
          <li>
            <strong>Louer son site sur 48 mois</strong> : le total dépasse 2 à
            3 fois le prix d&apos;achat, sans actif à la fin.
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
        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>5 200 €</strong> : la médiane réelle d&apos;un projet de création de site en France (1 312 budgets analysés).</li>
            <li><strong>10 à 20 % du prix de création</strong> : la maintenance annuelle d&apos;un site à CMS — quasi nulle pour un site statique bien construit.</li>
            <li><strong>20 à 40 %</strong> : la part du coût réel sur 3 ans que représente le prix d&apos;achat d&apos;un site low-cost.</li>
            <li><strong>0,1 seconde gagnée = +8,4 % de conversions</strong> (Google/Deloitte) : la performance est un poste économique.</li>
            <li><strong>0 €</strong> : ce que vaut juridiquement votre site sans clause écrite de cession des droits.</li>
          </ul>
        </InfoBox>

        <h2 id="notre-approche">18. Comment on chiffre chez Hagnéré Code</h2>
        <p>
          Nous sommes une agence Next.js / React basée à Chambéry. Chaque
          projet est vendu en <strong>forfait fixe contractuel</strong> — le
          prix annoncé est le prix payé, quel que soit le temps que cela nous
          prend, avec dates de livraison contractuelles et 30 jours de
          garantie. Les fourchettes par service sont publiques sur notre{" "}
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
          (aides financières et Baromètre France Num 2025) ;{" "}
          <a href="https://flash.bpifrance.fr/financement/pret-boost-transformation-numerique" target="_blank" rel="noopener noreferrer">Bpifrance Flash</a>{" "}
          (Prêt Boost) ; baromètres TJM{" "}
          <a href="https://www.malt.fr/t/barometre-tarifs/tech" target="_blank" rel="noopener noreferrer">Malt</a>{" "}
          et Silkhom ; étude{" "}
          <a href="https://web.dev/case-studies/milliseconds-make-millions" target="_blank" rel="noopener noreferrer">Google/Deloitte « Milliseconds Make Millions »</a> ;
          étude de durée de vie des sites{" "}
          <a href="https://www.orbitmedia.com/blog/website-lifespan-and-you/" target="_blank" rel="noopener noreferrer">Orbit Media</a> ;
          étude de refonte « Website Redesign » de Databox ; étude de prix
          Digital Applied « Website Development Cost 2026 » ;{" "}
          <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006133323/" target="_blank" rel="noopener noreferrer">Code de la propriété intellectuelle</a>{" "}
          (art. L111-1 et L131-3) ; directive européenne sur
          l&apos;accessibilité (UE) 2019/882 ; bilan des sanctions 2025 de la{" "}
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
