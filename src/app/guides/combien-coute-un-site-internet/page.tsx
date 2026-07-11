import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  ComparisonGrid,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";

// --- METADATA SEO ---
export const metadata: Metadata = {
  title: "Combien coûte un site internet professionnel en 2026 ? | Hagnéré Code",
  description:
    "Prix réel d'un site internet en 2026 : fourchettes par type de site (vitrine, e-commerce, SaaS), postes de coût, coûts cachés, pièges des devis trop bas et méthode pour budgéter juste. Par Hagnéré Code, agence Next.js / React.",
  keywords: [
    "combien coûte un site internet",
    "prix site internet 2026",
    "prix site vitrine",
    "coût création site web",
    "tarif site internet professionnel",
    "devis site internet",
    "prix site e-commerce",
    "coût site sur mesure",
    "agence web Next.js",
    "agence React",
    "budget site internet PME",
    "coûts cachés site web",
  ],
  authors: [{ name: "Hagnéré Code" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/guides/combien-coute-un-site-internet" },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: "Combien coûte un site internet professionnel en 2026 ?",
    description:
      "Fourchettes réelles par type de site, postes de coût, coûts cachés et méthode pour budgéter juste — par une agence qui code en Next.js / React.",
    url: "/guides/combien-coute-un-site-internet",
    images: [DEFAULT_OG_IMAGE],
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

// --- JSON-LD SCHEMAS (static hardcoded strings only, no user input) ---
const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Combien coûte un site internet professionnel en 2026 ?",
  description:
    "Fourchettes réelles par type de site, postes de coût, coûts cachés, pièges des devis trop bas et méthode pour budgéter juste.",
  url: "https://hagnere-code.fr/guides/combien-coute-un-site-internet",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10",
  inLanguage: "fr-FR",
  articleSection: "Créer son site web",
  isPartOf: {
    "@type": "WebPage",
    "@id": "https://hagnere-code.fr/guides",
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Organization",
    name: "Hagnéré Code",
    url: "https://hagnere-code.fr",
  },
  publisher: {
    "@type": "Organization",
    name: "Hagnéré Code",
    url: "https://hagnere-code.fr",
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://hagnere-code.fr/guides" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Combien coûte un site internet ?",
      item: "https://hagnere-code.fr/guides/combien-coute-un-site-internet",
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le prix moyen d'un site internet professionnel en 2026 ?",
    answer:
      "Pour un site vitrine professionnel réalisé par une agence, comptez entre 6 900 € et 22 000 € selon le nombre de pages, le niveau de sur-mesure et les fonctionnalités (blog, multi-langue, réservation). Un site e-commerce démarre autour de 15 000 €, et une application web (SaaS) autour de 15 000 € pour un MVP. Les offres à quelques centaines d'euros reposent sur des templates : elles peuvent dépanner, mais ne tiennent ni le SEO, ni la conversion, ni l'évolution.",
  },
  {
    question: "Pourquoi les devis varient-ils autant d'un prestataire à l'autre ?",
    answer:
      "Parce qu'ils ne couvrent pas le même travail. Un devis bas exclut souvent la rédaction des contenus, le SEO technique, le tracking, la maintenance et la propriété du code. Comparez toujours à périmètre égal : qui rédige, qui héberge, qui maintient, qui possède le code, et quel niveau de performance est garanti à la livraison.",
  },
  {
    question: "Quels sont les coûts récurrents après la mise en ligne ?",
    answer:
      "Prévoyez le nom de domaine (10-40 €/an), l'hébergement (0 à 200 €/mois selon le trafic), et la maintenance si vous la déléguez. Un site statique bien construit en Next.js peut fonctionner avec un hébergement quasi gratuit ; un e-commerce ou un SaaS a des coûts d'infrastructure plus élevés.",
  },
  {
    question: "Un site en Next.js / React coûte-t-il plus cher qu'un site WordPress ?",
    answer:
      "À la construction, un site sur mesure en Next.js est généralement plus cher qu'un WordPress à base de thème. Mais le coût total sur 3 ans s'inverse souvent : pas de plugins payants qui s'accumulent, pas de failles d'extensions à colmater, des performances qui portent le SEO, et un code que vous possédez et que n'importe quel développeur React peut reprendre.",
  },
  {
    question: "Comment obtenir un chiffrage précis pour mon projet ?",
    answer:
      "Décrivez votre projet via notre parcours guidé (3 minutes) : notre équipe vous répond personnellement sous 24 h ouvrées avec une première réponse argumentée, puis un devis ferme après un échange de cadrage. C'est gratuit et sans engagement.",
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
        heroTitle="Combien coûte un site internet professionnel en 2026 ?"
        heroDescription="Fourchettes réelles par type de site, postes de coût qui font varier la facture, coûts cachés et méthode pour comparer des devis à périmètre égal — sans langue de bois."
        keyPoints={[
          { number: "01", title: "Vitrine : 6 900 – 22 000 €", description: "", color: "violet" },
          { number: "02", title: "E-commerce : dès 15 000 €", description: "", color: "blue" },
          { number: "03", title: "SaaS / app : dès 15 000 €", description: "", color: "emerald" },
          { number: "04", title: "Lecture : 12 min", description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/tarifs", label: "Nos tarifs détaillés" },
          { href: "/outils/calculateur-cout-excel", label: "Calculateur coût Excel" },
          { href: "/realisations", label: "Nos réalisations" },
          { href: "/methode", label: "Notre méthode" },
        ]}
        faqTitle="Prix d'un site internet : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          «&nbsp;Combien coûte un site internet&nbsp;?&nbsp;» est la première
          question de tout projet web — et la réponse honnête est&nbsp;:{" "}
          <strong>ça dépend de ce que le site doit faire pour votre
          entreprise</strong>. Ce guide vous donne les fourchettes réelles
          pratiquées en 2026, poste par poste, pour que vous puissiez budgéter
          juste et comparer des devis qui, souvent, ne décrivent pas le même
          travail.
        </p>

        <GuideToc
          items={[
            { id: "fourchettes", label: "1. Les fourchettes de prix par type de site" },
            { id: "postes-de-cout", label: "2. Ce qui fait varier le prix : les postes de coût" },
            { id: "couts-caches", label: "3. Les coûts cachés et récurrents" },
            { id: "devis-trop-bas", label: "4. Le piège des devis trop bas" },
            { id: "technologie", label: "5. La technologie change-t-elle le prix ?" },
            { id: "budgeter", label: "6. Méthode : budgéter juste en 4 étapes" },
          ]}
        />

        <h2 id="fourchettes">1. Les fourchettes de prix par type de site</h2>
        <p>
          Voici les fourchettes que nous pratiquons et constatons sur le marché
          français en 2026, pour un travail professionnel livré par une agence
          (design, développement, SEO technique et mise en production compris).
        </p>

        <GuideTable
          headers={["Type de site", "Entrée de gamme", "Standard", "Sur-mesure avancé"]}
          rows={[
            ["Site vitrine (3-5 pages)", "6 900 €", "—", "—"],
            ["Site vitrine + blog (10-20 pages)", "—", "14 900 €", "—"],
            ["Site vitrine multi-langue / e-com léger", "—", "—", "22 000 €"],
            ["E-commerce", "15 000 €", "30 000 €", "70 000 €"],
            ["SaaS / application métier", "15 000 € (MVP)", "30 000 €", "120 000 €"],
            ["Outil interne / back-office", "8 000 €", "25 000 €", "80 000 €"],
          ]}
        />

        <InfoBox variant="blue" title="Pourquoi de telles différences ?">
          Un site à 6 900 € et un site à 22 000 € ne répondent pas au même
          besoin : le premier établit une présence crédible, le second est une
          machine d&apos;acquisition (SEO structuré, pages de conversion,
          tracking, multi-langue). Le bon budget est celui qui correspond au
          rôle du site dans votre business — pas le plus bas.
        </InfoBox>

        <h2 id="postes-de-cout">2. Ce qui fait varier le prix : les postes de coût</h2>
        <p>
          Un devis sérieux se décompose en postes identifiables. Voici les six
          principaux, avec leur poids typique dans un projet vitrine standard :
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
            <strong>Contenus (10-20 %)</strong> — rédaction optimisée SEO,
            photos, illustrations. Poste le plus souvent exclu des devis bas,
            alors que c&apos;est lui qui fait venir le trafic.
          </li>
          <li>
            <strong>SEO technique et performance (10-15 %)</strong> — balisage,
            données structurées, vitesse de chargement, Core Web Vitals. En
            2026, un site lent ne ranke pas.
          </li>
          <li>
            <strong>Recette, mise en production et garantie (5-10 %)</strong> —
            tests multi-appareils, tracking, redirections, monitoring. Chez
            nous, 30 jours de garantie post-lancement sont inclus.
          </li>
        </ul>

        <GuideInlineCTA />

        <h2 id="couts-caches">3. Les coûts cachés et récurrents</h2>
        <p>
          Le prix de construction n&apos;est que la moitié de l&apos;équation.
          Sur 3 ans, les coûts récurrents peuvent dépasser le coût initial si le
          site est mal conçu :
        </p>

        <GuideTable
          headers={["Poste récurrent", "Fourchette", "Remarque"]}
          rows={[
            ["Nom de domaine", "10 – 40 €/an", "À votre nom, toujours."],
            ["Hébergement", "0 – 200 €/mois", "Quasi gratuit pour un site statique bien construit, plus élevé pour e-commerce/SaaS."],
            ["Maintenance corrective", "0 – 300 €/mois", "Mises à jour, sécurité, correctifs. Indispensable sur WordPress, allégée sur un site statique."],
            ["Évolutions", "sur devis", "Nouvelles pages, nouvelles fonctionnalités."],
            ["Licences / plugins", "0 – 100 €/mois", "Fréquent sur WordPress/Shopify ; nul sur du sur-mesure bien pensé."],
          ]}
        />

        <InfoBox variant="amber" title="Le coût caché n° 1 : la dépendance">
          Vérifiez toujours <strong>qui possède le code et les contenus</strong>.
          Certaines offres « site à 99 €/mois » vous louent votre propre site :
          si vous partez, vous repartez de zéro. Chez Hagnéré Code, le code
          vous appartient — repo Git transféré, documentation incluse.
        </InfoBox>

        <h2 id="devis-trop-bas">4. Le piège des devis trop bas</h2>
        <p>
          Un devis nettement sous le marché exclut presque toujours l&apos;un de
          ces éléments : la rédaction des contenus, le SEO technique, le
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

        <h2 id="technologie">5. La technologie change-t-elle le prix ?</h2>
        <p>
          Oui — mais pas comme on le croit. La vraie question n&apos;est pas
          «&nbsp;quel CMS est le moins cher à installer&nbsp;» mais «&nbsp;quel
          socle coûte le moins cher sur 3 ans pour le résultat visé&nbsp;».
        </p>
        <p>
          Nous construisons en <strong>Next.js / React / TypeScript</strong>,
          le socle utilisé par les équipes produit modernes. Concrètement, pour
          vous :
        </p>
        <ul>
          <li>
            <strong>Performance native</strong> — pages générées statiquement,
            scores Core Web Vitals au vert, ce qui porte le SEO et la
            conversion.
          </li>
          <li>
            <strong>Sécurité par construction</strong> — pas de jungle de
            plugins tiers à maintenir, surface d&apos;attaque minimale.
          </li>
          <li>
            <strong>Coûts d&apos;hébergement réduits</strong> — un site vitrine
            Next.js tourne pour quelques euros par mois, souvent moins.
          </li>
          <li>
            <strong>Aucune dépendance</strong> — du code TypeScript standard
            que des milliers de développeurs peuvent reprendre, contrairement à
            un thème propriétaire.
          </li>
        </ul>
        <p>
          Et si vous avez déjà un site WordPress ou une application Laravel qui
          fonctionne&nbsp;? Nous savons aussi{" "}
          <Link href="/services/maintenance-evolution">reprendre et faire
          évoluer l&apos;existant</Link> — la refonte n&apos;est pas toujours la
          bonne réponse.
        </p>

        <h2 id="budgeter">6. Méthode : budgéter juste en 4 étapes</h2>
        <ol>
          <li>
            <strong>Définissez le rôle du site</strong> — présence crédible,
            génération de leads, vente en ligne ? Le budget découle du rôle,
            pas l&apos;inverse.
          </li>
          <li>
            <strong>Listez les fonctionnalités indispensables</strong> —
            formulaires, prise de rendez-vous, blog, multi-langue, paiement.
            Chaque brique a un coût identifiable.
          </li>
          <li>
            <strong>Exigez des devis à périmètre égal</strong> — contenus,
            SEO, tracking, garantie, propriété du code : chaque ligne doit être
            explicite dans chaque devis comparé.
          </li>
          <li>
            <strong>Raisonnez en coût sur 3 ans</strong> — construction +
            hébergement + maintenance + licences. C&apos;est le seul chiffre
            comparable entre deux approches techniques.
          </li>
        </ol>

        <InfoBox variant="emerald" title="Notre engagement : le forfait fixe">
          Chez Hagnéré Code, chaque projet est chiffré en{" "}
          <strong>forfait fixe contractuel</strong> après cadrage : le prix
          annoncé est le prix payé, quel que soit le temps que cela nous prend.
          Les fourchettes détaillées par service sont publiques sur notre{" "}
          <Link href="/tarifs">page tarifs</Link>.
        </InfoBox>

        <p>
          Vous voulez un chiffre pour <em>votre</em> projet, pas une fourchette
          générique ? Décrivez-le en 3 minutes — notre équipe vous répond
          personnellement sous 24 h ouvrées avec une réponse argumentée, puis
          un devis ferme après échange.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
