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

const guide = getGuide("combien-coute-une-application-mobile");

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
  wordCount: 4400,
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
      "Développement mobile",
      "React Native",
      "Next.js",
      "React",
      "Chiffrage de projets web et mobiles",
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
      name: "Combien coûte une application mobile ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le prix moyen d'une application mobile en France en 2026 ?",
    answer:
      "Le budget médian mesuré sur des projets réels est d'environ 30 000 € (baromètre La Fabrique du Net), avec une fourchette courante de 15 000 à 50 000 €. Un MVP se situe entre 5 000 et 15 000 €, une application métier entre 15 000 et 45 000 €, une marketplace ou une app complexe entre 40 000 et 100 000 € et plus. Environ un tiers des projets dépassent 50 000 €.",
  },
  {
    question: "Quel budget prévoir pour créer une application mobile ?",
    answer:
      "Raisonnez en coût total, pas en coût de développement : au budget de construction, ajoutez les comptes stores (99 $/an Apple, 25 $ Google), l'infrastructure backend (0 à 200 €/mois en early-stage), la maintenance (15 à 20 % du coût initial par an, rendue obligatoire par les exigences des stores) et, si l'app vend en ligne, les commissions Apple/Google de 15 à 30 %. Pour un MVP à 20 000 €, prévoyez environ 28 000 à 33 000 € sur 3 ans.",
  },
  {
    question: "Est-ce payant de publier une application sur l'App Store et le Play Store ?",
    answer:
      "Oui, mais peu : le compte Apple Developer coûte 99 $ par an et le compte Google Play 25 $ une seule fois. Le vrai coût est ailleurs : Apple et Google prélèvent une commission de 15 à 30 % sur les ventes réalisées dans l'app (achats in-app, abonnements). Sous 1 million de dollars de revenus annuels, le Small Business Program d'Apple ramène la commission à 15 %.",
  },
  {
    question: "Quelles commissions Apple et Google prélèvent-ils sur les revenus ?",
    answer:
      "Apple : 30 % en standard, 15 % via le Small Business Program (moins de 1 M$ de produits nets annuels). Google : historiquement 15 % jusqu'à 1 M$ puis 30 %, avec une nouvelle grille annoncée en mars 2026 (10 % sur les abonnements, 15-20 % sur les achats in-app, plus 5 % de frais de facturation Google Play). En Europe, le DMA a ouvert les liens d'achat externes depuis juin 2025 — un vrai levier pour les apps à abonnement.",
  },
  {
    question: "Combien coûte la maintenance d'une application mobile ?",
    answer:
      "Le standard sectoriel est de 15 à 20 % du coût de développement initial par an — et ce n'est pas optionnel : depuis avril 2025, Apple exige une compilation avec le SDK iOS 18 minimum, et Google impose l'API Android 34/35 sous peine d'invisibilité sur le Play Store. Le Play Store a d'ailleurs perdu 47 % de ses apps entre 2024 et 2025, principalement des applications non maintenues.",
  },
  {
    question: "Combien coûtent l'hébergement et le serveur d'une application ?",
    answer:
      "Un backend démarre quasi gratuitement (Supabase et Firebase ont des plans gratuits, les notifications push via FCM sont gratuites) puis coûte typiquement 25 à 200 €/mois en production pour une jeune app. Attention au pay-as-you-go : à 50 000 utilisateurs actifs mensuels, Firebase peut coûter 400 à 800 $/mois là où un forfait type Supabase Pro reste à ~25 $/mois. Le login par SMS coûte environ 0,13 $ par connexion.",
  },
  {
    question: "Combien de temps faut-il pour développer une application mobile ?",
    answer:
      "Avec une équipe expérimentée en React Native : 6 à 12 semaines pour un MVP (chez Hagnéré Code : sur les stores dès 12 semaines, délais contractuels), 14 à 20 semaines pour une application complète, 5 à 9 mois pour une marketplace. Ajoutez 1 à 2 semaines pour la validation des stores, et 2 à 10 jours par intégration tierce (paiement, signature, IA).",
  },
  {
    question: "React Native ou Flutter : lequel choisir en 2026 ?",
    answer:
      "Les deux frameworks cross-platform sont matures et réduisent le coût de 30 à 40 % par rapport à deux développements natifs séparés. React Native a pour lui l'écosystème JavaScript/React (le plus grand vivier de développeurs, un code proche de votre site web) et des références majeures : Shopify a migré 100 % de ses apps dessus en 2025, Discord partage 98 % de son code entre iOS et Android. Flutter est légèrement devant en parts de marché mais impose Dart, un langage plus rare.",
  },
  {
    question: "Une PWA est-elle moins chère qu'une application native ?",
    answer:
      "Oui : une PWA (application web installable) coûte 40 à 60 % de moins et sort 50 à 70 % plus vite, sans review des stores. Elle suffit pour une majorité de cas d'usage business : portail client, réservation, contenu, outils internes. L'app installée depuis les stores reste nécessaire pour les notifications push fiables sur iOS, l'accès matériel poussé (Bluetooth, NFC), la performance graphique et la présence sur l'App Store comme canal d'acquisition.",
  },
  {
    question: "Peut-on créer une application gratuitement avec l'IA ou le no-code ?",
    answer:
      "On peut prototyper, pas industrialiser. Les outils no-code (0 à 100 €/mois) et les générateurs IA produisent des apps de démonstration utiles pour valider une idée, mais montrent leurs limites dès qu'il faut des intégrations métier, de la performance, la conformité RGPD/CNIL et une publication pérenne sur les stores. L'IA a en revanche un vrai impact via les équipes qui l'industrialisent : c'est ce qui nous permet de livrer un MVP en 8-12 semaines au forfait fixe.",
  },
  {
    question: "Est-ce rentable de créer une application mobile ?",
    answer:
      "Pas par défaut : environ 46 % des installations sont désinstallées sous 30 jours et la rétention moyenne à J30 est de ~3 %. Une app rentable est une app qui résout un vrai problème récurrent (outil métier, service client, fidélisation) plutôt qu'une app « vitrine ». C'est précisément le travail du cadrage : valider le cas d'usage et le modèle économique avant d'écrire une ligne de code.",
  },
  {
    question: "Comment obtenir un chiffrage précis pour mon application ?",
    answer:
      "Décrivez votre projet via notre parcours guidé (3 minutes) : notre équipe vous répond personnellement sous 24 h ouvrées, gratuitement et sans engagement. Pour un chiffrage ferme, le Discovery Sprint (1 500 €, 2 jours) livre le périmètre écrit, un prototype cliquable et un devis au forfait fixe — déduit à 100 % si le projet se lance.",
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
          { label: "Combien coûte une application mobile ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les prix réels du marché français par type d'app et de prestataire, les commissions des stores que personne ne mentionne, la maintenance obligatoire, le coût total sur 3 ans — et la méthode pour comparer des devis à périmètre égal."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "MVP : 5 000 – 15 000 €", description: "", color: "violet" },
          { number: "02", title: "App métier : 15 000 – 45 000 €", description: "", color: "blue" },
          { number: "03", title: "Médiane marché : ≈ 30 000 €", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/services/application-mobile", label: "Création d'application mobile" },
          { href: "/services/saas-applications-metier", label: "Développement SaaS" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
          { href: "/realisations", label: "Nos réalisations" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Prix d'une application mobile : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          «&nbsp;Combien coûte une application mobile&nbsp;?&nbsp;» — la
          réponse honnête tient en une phrase&nbsp;: <strong>de 5 000 € pour
          un MVP minimaliste à plus de 150 000 € pour une plateforme
          complexe, avec une médiane française autour de 30 000 €</strong>.
          Mais le prix de développement n&apos;est que la moitié de
          l&apos;histoire : commissions des stores, maintenance imposée par
          Apple et Google, backend, acquisition… Ce guide chiffre tout, sources
          à l&apos;appui, pour que vous puissiez budgéter votre application
          comme un investissement — pas comme un pari.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les prix 2026 en un tableau" },
            { id: "prix-par-type", label: "2. Les prix par type d'application" },
            { id: "prix-par-prestataire", label: "3. Freelance, agence, offshore : qui facture quoi" },
            { id: "technologie", label: "4. Natif, React Native ou PWA : la techno qui change la facture" },
            { id: "postes-de-cout", label: "5. Ce qui fait varier le prix : les postes d'un devis" },
            { id: "devis-decortique", label: "6. Un devis de MVP décortiqué ligne par ligne" },
            { id: "frais-stores", label: "7. Les frais des stores que personne ne vous annonce" },
            { id: "couts-recurrents", label: "8. Backend, push, monitoring : les coûts récurrents" },
            { id: "maintenance", label: "9. La maintenance : obligatoire, pas optionnelle" },
            { id: "cout-total-3-ans", label: "10. Le vrai comparatif : coût total sur 3 ans" },
            { id: "review-stores", label: "11. La validation des stores : délais et pièges" },
            { id: "delais", label: "12. Combien de temps pour développer une app ?" },
            { id: "rentabilite", label: "13. Rentabilité : ce que disent vraiment les chiffres" },
            { id: "aides", label: "14. Aides et financements 2026" },
            { id: "propriete-juridique", label: "15. Propriété du code, comptes stores et conformité" },
            { id: "budgeter", label: "16. Méthode : budgéter juste en 4 étapes" },
            { id: "erreurs", label: "17. Les 7 erreurs à éviter" },
            { id: "notre-approche", label: "18. Comment on chiffre chez Hagnéré Code" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les prix 2026 en un tableau</h2>
        <p>
          En 2026, une application mobile professionnelle coûte en France{" "}
          <strong>entre 5 000 et 15 000 € pour un MVP, 15 000 à 45 000 €
          pour une application métier, et 40 000 à 150 000 € et plus pour une
          plateforme complexe</strong>. Le budget médian, mesuré sur des
          projets réellement engagés, est d&apos;environ{" "}
          <strong>30 000 €</strong> (baromètre La Fabrique du Net, données
          2026) — et environ un tiers des projets dépassent 50 000 €.
        </p>
        <GuideTable
          headers={["Type d'application", "Fourchette 2026", "Délai typique"]}
          rows={[
            ["MVP / app simple (1-2 fonctionnalités)", "5 000 – 15 000 €", "6 – 12 semaines"],
            ["App métier / B2B (auth, rôles, API)", "15 000 – 45 000 €", "3 – 6 mois"],
            ["App e-commerce", "20 000 – 50 000 €", "3 – 6 mois"],
            ["Marketplace / back-office complet", "40 000 – 90 000 €", "6 – 12 mois"],
            ["App complexe (IA, temps réel, réseau social)", "50 000 – 150 000 €+", "8 – 14 mois"],
            ["Grand compte avec intégration SI", "90 000 – 250 000 €+", "> 12 mois"],
          ]}
        />
        <p>
          Sources croisées : baromètre La Fabrique du Net (budgets réels,
          médiane 30 000 €), Aquilapp, KBCOM, Digital Unicorn, Codeur.com —
          détail en fin d&apos;article. La suite du guide explique{" "}
          <em>pourquoi</em> ces écarts existent, et surtout ce que ces
          fourchettes ne montrent pas : stores, maintenance et coûts
          récurrents.
        </p>

        <h2 id="prix-par-type">2. Les prix par type d&apos;application</h2>
        <p>
          Le premier facteur de prix est le périmètre fonctionnel. Trois
          repères pour situer votre projet :
        </p>
        <ul>
          <li>
            <strong>Le MVP (5 000 – 15 000 €)</strong> — une fonctionnalité
            cœur, une authentification, un onboarding. Son rôle n&apos;est pas
            d&apos;être complet mais de valider l&apos;usage réel avant
            d&apos;investir. C&apos;est le format que nous recommandons pour
            démarrer : notre offre de{" "}
            <Link href="/services/application-mobile">création
            d&apos;application mobile</Link> met un MVP sur les stores dès
            12 semaines, à forfait fixe.
          </li>
          <li>
            <strong>L&apos;application métier (15 000 – 45 000 €)</strong> —
            rôles et permissions, API, back-office, intégrations (CRM, ERP,
            paiement). C&apos;est le cœur du marché B2B : l&apos;app qui fait
            travailler vos équipes terrain ou vos clients. Si elle
            s&apos;adosse à une plateforme web, voyez aussi notre guide du{" "}
            <Link href="/services/saas-applications-metier">développement
            SaaS</Link> — une app compagnon iOS + Android s&apos;ajoute
            typiquement pour 10 000 à 20 000 € à un SaaS existant.
          </li>
          <li>
            <strong>La marketplace et les apps complexes (40 000 € et
            plus)</strong> — paiements scindés, KYC, temps réel, IA. Ici, le
            cadrage préalable n&apos;est plus une option : chaque brique mal
            anticipée se paie en dizaines de milliers d&apos;euros.
          </li>
        </ul>
        <InfoBox variant="blue" title="Méfiez-vous des fourchettes « à partir de 500 € »">
          Certaines pages annoncent des apps « dès 500 € » : il s&apos;agit
          de templates ou de générateurs no-code, pas d&apos;un produit que
          vous possédez et qui passe la review des stores dans la durée. Le
          consensus des budgets réellement engagés en France démarre à
          5 000 € pour un MVP minimal — en dessous, quelque chose manque.
        </InfoBox>

        <h2 id="prix-par-prestataire">3. Freelance, agence, offshore : qui facture quoi</h2>
        <p>
          Deuxième facteur : la main-d&apos;œuvre. Les baromètres TJM 2025-2026
          (Silkhom, Malt, TJMètre — médiane française tous développeurs :
          535 €/jour) donnent la structure de coût réelle :
        </p>
        <GuideTable
          headers={["Prestataire", "Tarif", "À savoir"]}
          rows={[
            ["Freelance junior (0-2 ans)", "330 – 430 €/jour", "OK pour un prototype, risqué pour un produit"],
            ["Freelance confirmé / senior", "400 – 650 €/jour", "React Native ~490 €/j à Paris ; une seule personne = bus factor"],
            ["Agence française", "400 – 1 200 €/jour (80-140 €/h)", "Équipe, méthode, garanties, continuité"],
            ["Offshore (Inde, Maghreb…)", "100 – 250 €/jour", "Voir l'encadré : le TCO réel efface souvent l'écart"],
          ]}
        />
        <InfoBox variant="amber" title="Offshore : l'économie qui coûte cher">
          Les taux offshore sont 3 à 5 fois inférieurs, mais les études
          convergent : +20 à 30 % de temps de gestion interne, 30 à 40 % du
          code à reprendre dans les mauvais cas, et près de la moitié des
          entreprises rapportent des problèmes de qualité (Capgemini). Un
          projet facturé 20 000 € offshore atteint couramment 35 000 € une
          fois corrigé — et l&apos;analyse TCO sur 2 ans montre que
          l&apos;écart avec une équipe française se réduit fortement, voire
          s&apos;inverse. Sans parler du RGPD.
        </InfoBox>

        <h2 id="technologie">4. Natif, React Native ou PWA : la techno qui change la facture</h2>
        <p>
          Troisième facteur, le plus structurant : faut-il développer deux
          applications natives (Swift pour iOS, Kotlin pour Android), une
          seule base de code cross-platform, ou une PWA ?
        </p>
        <GuideTable
          headers={["Approche", "Coût relatif", "Pour qui"]}
          rows={[
            ["Double natif (Swift + Kotlin)", "+40 à 60 % vs cross-platform", "Jeux 3D, AR/VR, exigences matérielles extrêmes"],
            ["React Native (une codebase)", "Référence : -30 à 40 % vs natif", "90 % des apps business : le meilleur ratio coût/qualité"],
            ["Flutter (une codebase)", "Équivalent React Native", "Équipes déjà formées à Dart"],
            ["PWA (app web installable)", "-40 à 60 % vs natif", "Portails clients, réservation, outils internes — sans les stores"],
          ]}
        />
        <p>
          Nous développons en <strong>React Native + Expo</strong>, et ce
          choix est économique avant d&apos;être technique : une seule équipe,
          jusqu&apos;à 90 % de code partagé entre iOS et Android, et une étude
          Deloitte Digital mesure 40 % d&apos;économie à la construction et
          jusqu&apos;à 60 % sur la maintenance long terme par rapport au
          double natif. Ce n&apos;est pas un pari exotique : Shopify a achevé
          en 2025 la migration de <em>toutes</em> ses apps vers React Native,
          Discord partage 98 % de son code entre plateformes, et Meta comme
          Microsoft l&apos;utilisent en production massive.
        </p>
        <p>
          Et parfois, la bonne réponse est… de ne pas faire d&apos;app : une
          PWA bien construite couvre une grande partie des cas d&apos;usage
          business (contenu, réservation, portail client) pour 40 à 60 % de
          moins, sans review des stores. C&apos;est une question que nous
          posons systématiquement au cadrage — si un site web performant
          suffit, notre guide{" "}
          <Link href="/guides/combien-coute-un-site-internet">combien coûte
          un site internet</Link> vous donnera les bonnes fourchettes.
        </p>

        <h2 id="postes-de-cout">5. Ce qui fait varier le prix : les postes d&apos;un devis</h2>
        <p>
          Un devis d&apos;application sérieux se décompose en postes
          identifiables — les ratios du marché sont remarquablement stables
          d&apos;une agence à l&apos;autre :
        </p>
        <ul>
          <li>
            <strong>Cadrage et design UX/UI (15-25 %)</strong> — personas,
            parcours, maquettes des écrans clés. C&apos;est ici que se joue la
            rétention future.
          </li>
          <li>
            <strong>Développement front mobile (≈ 40 %)</strong> — les écrans,
            la navigation, les animations, le mode hors-ligne éventuel.
          </li>
          <li>
            <strong>Architecture back-end et API (≈ 25 %)</strong> —
            l&apos;authentification, la base de données, les API, la
            synchronisation. Souvent sous-estimé dans les devis bas.
          </li>
          <li>
            <strong>Gestion de projet et QA (15-20 %)</strong> — tests
            multi-appareils, recette, préparation des stores.
          </li>
        </ul>
        <p>
          S&apos;y ajoutent les multiplicateurs : chaque intégration tierce
          (paiement, signature électronique, API métier) représente 2 à
          10 jours de développement ; les fonctionnalités IA ajoutent 30 à
          50 % au budget selon le cas d&apos;usage ; la géolocalisation fine,
          le temps réel ou le Bluetooth se chiffrent chacun en milliers
          d&apos;euros.
        </p>

        <GuideInlineCTA
          title="Votre projet d'app, cadré en 3 minutes"
          description="Décrivez votre application en quelques étapes guidées — notre équipe vous répond personnellement sous 24 h ouvrées avec une réponse argumentée."
        />

        <h2 id="devis-decortique">6. Un devis de MVP décortiqué ligne par ligne</h2>
        <p>
          Le seul devis d&apos;app décortiqué disponible sur le web français
          date de 2023. Voici donc la structure type, aux ratios du marché
          2026, d&apos;un <strong>MVP React Native à 25 000 €</strong> —
          authentification, fonctionnalité cœur, paiement, back-office
          simple :
        </p>
        <GuideTable
          headers={["Poste", "Contenu", "Part du budget"]}
          rows={[
            ["Cadrage & spécifications", "Ateliers, user stories, périmètre écrit, prototype", "≈ 2 500 € (10 %)"],
            ["Design UX/UI", "Maquettes des écrans clés iOS + Android, design system", "≈ 3 750 € (15 %)"],
            ["Développement front (React Native)", "Écrans, navigation, offline, push", "≈ 10 000 € (40 %)"],
            ["Back-end & API", "Auth, base de données, API, paiement Stripe", "≈ 6 250 € (25 %)"],
            ["QA, recette, soumission stores", "Tests multi-appareils, TestFlight, review Apple/Google", "≈ 2 500 € (10 %)"],
          ]}
        />
        <p>
          Utilisez cette grille pour lire n&apos;importe quel devis : si le
          back-end ou la QA n&apos;apparaissent pas, ils ne sont pas offerts —
          ils sont exclus, et vous les paierez en avenants. Demandez aussi ce
          qui est inclus <em>après</em> la mise en ligne : soumission stores
          accompagnée, corrections de la review, garantie.
        </p>

        <h2 id="frais-stores">7. Les frais des stores que personne ne vous annonce</h2>
        <p>
          Aucune des dix pages françaises qui dominent Google sur cette
          requête ne mentionne les commissions des stores. Les voici :
        </p>
        <GuideTable
          headers={["Frais", "Montant", "Détail"]}
          rows={[
            ["Compte Apple Developer", "99 $/an", "Obligatoire, au nom de votre entreprise (D-U-N-S)"],
            ["Compte Google Play", "25 $ (une fois)", "Compte organisation recommandé (voir section 11)"],
            ["Commission App Store", "30 % — ou 15 %", "15 % via le Small Business Program (< 1 M$ de revenus/an)"],
            ["Commission Google Play", "15 – 30 %", "Nouvelle grille mars 2026 : 10 % abonnements + 5 % facturation"],
            ["Europe (DMA)", "liens externes autorisés", "Depuis juin 2025 : paiement hors app possible dans l'UE"],
          ]}
        />
        <p>
          Concrètement : si votre app vend un abonnement à 10 €/mois, Apple ou
          Google en prélèvent 1,50 € à 3 €. Sur un business model à
          abonnement, cette ligne pèse plus lourd que tout le budget de
          développement — et depuis les décisions européennes de 2025 (amende
          de 500 M€ infligée à Apple, ouverture des liens d&apos;achat
          externes), il existe des stratégies légales pour la réduire.
          C&apos;est un sujet de cadrage, pas un détail technique.
        </p>

        <h2 id="couts-recurrents">8. Backend, push, monitoring : les coûts récurrents</h2>
        <GuideTable
          headers={["Poste récurrent", "Fourchette réelle", "Remarque"]}
          rows={[
            ["Backend (Supabase, Firebase)", "0 – 200 €/mois en early-stage", "Supabase Pro : 25 $/mois forfaitaire"],
            ["Piège du pay-as-you-go", "400 – 800 $/mois à 50 000 MAU sur Firebase", "vs 100-200 $/mois en forfaitaire équivalent"],
            ["Notifications push", "0 € (FCM illimité)", "OneSignal Growth : ~139 $/mois à 10 000 MAU"],
            ["Login par SMS (OTP)", "≈ 0,13 $/connexion", "Twilio Verify + SMS France — préférez email/passkeys"],
            ["Monitoring crash", "0 € (Crashlytics) – 26 $/mois/siège (Sentry)", "Indispensable : motif n°1 de rejet Apple = crashs"],
            ["OTA updates (React Native/EAS)", "0 – 199 €/mois", "Corriger un bug sans repasser par la review des stores"],
          ]}
        />
        <p>
          L&apos;ordre de grandeur à retenir : une jeune app bien architecturée
          coûte <strong>moins de 100 €/mois d&apos;infrastructure</strong> la
          première année. Le danger n&apos;est pas le montant initial, mais
          les choix d&apos;architecture facturés à l&apos;usage qui explosent
          avec la croissance — un point à exiger noir sur blanc dans le devis.
        </p>

        <h2 id="maintenance">9. La maintenance : obligatoire, pas optionnelle</h2>
        <p>
          Le standard sectoriel est constant : <strong>15 à 20 % du coût de
          développement initial par an</strong>. Mais contrairement à un site
          web, cette maintenance n&apos;est pas un choix :
        </p>
        <ul>
          <li>
            Depuis avril 2025, Apple exige que toute soumission soit compilée
            avec <strong>Xcode 16 / SDK iOS 18</strong> minimum : une app
            jamais recompilée ne peut plus être mise à jour.
          </li>
          <li>
            Depuis août 2025, Google impose de cibler <strong>Android
            API 34/35</strong> : une app non conforme devient invisible sur le
            Play Store pour les appareils récents.
          </li>
          <li>
            Résultat mesuré : le Play Store est passé de 3,4 à 1,8 million
            d&apos;apps entre début 2024 et avril 2025 (<strong>-47 %</strong>),
            purge des applications abandonnées.
          </li>
        </ul>
        <p>
          Budgétez donc la maintenance dès le devis initial — et vérifiez ce
          qu&apos;elle couvre : mises à jour OS, correctifs, monitoring,
          évolutions. C&apos;est exactement le rôle d&apos;un contrat de{" "}
          <Link href="/services/maintenance-evolution">maintenance
          applicative</Link> avec une équipe nommée.
        </p>

        <h2 id="cout-total-3-ans">10. Le vrai comparatif : coût total sur 3 ans</h2>
        <p>
          Aucune page du web francophone ne cumule ces chiffres. Voici le coût
          total de possession réel, pour les deux profils les plus courants :
        </p>
        <FormulaBox>
{`MVP RÉACT NATIVE À 15 000 € — coût réel sur 3 ans
  Développement initial                     15 000 €
  Comptes stores (3 ans)                       ≈ 350 €
  Infrastructure backend (3 ans)         900 – 3 600 €
  Maintenance 15-20 %/an (3 ans)       6 750 – 9 000 €
  ──────────────────────────────────────────────────
  TOTAL 3 ANS                         23 000 – 28 000 €
  (hors commissions stores sur vos ventes : 15-30 %)

APP MÉTIER À 40 000 € — coût réel sur 3 ans
  Développement initial                     40 000 €
  Comptes stores (3 ans)                       ≈ 350 €
  Infrastructure backend (3 ans)       3 600 – 7 200 €
  Maintenance 15-20 %/an (3 ans)     18 000 – 24 000 €
  ──────────────────────────────────────────────────
  TOTAL 3 ANS                         62 000 – 71 500 €`}
        </FormulaBox>
        <p>
          La règle simple : <strong>multipliez le devis de développement par
          1,5 à 1,8 pour obtenir votre budget réel à 3 ans</strong>. Un choix
          technique comme React Native + Expo agit précisément sur la plus
          grosse ligne : une seule codebase à maintenir au lieu de deux, et
          des correctifs déployés en OTA sans repasser par la review.
        </p>

        <h2 id="review-stores">11. La validation des stores : délais et pièges</h2>
        <p>
          Publier n&apos;est pas un clic. Les chiffres officiels d&apos;Apple :
          90 % des soumissions sont examinées en moins de 24 heures, mais{" "}
          <strong>environ 25 % sont rejetées</strong> (1,93 million de rejets
          sur 7,77 millions de soumissions en 2024), le motif n°1 étant la
          « performance » — crashs, bugs, app incomplète. Deux pièges de
          calendrier peu documentés :
        </p>
        <ul>
          <li>
            <strong>TestFlight</strong> : la première build destinée à des
            testeurs externes doit elle-même être approuvée par Apple.
          </li>
          <li>
            <strong>Google Play</strong> : un compte développeur personnel
            créé après novembre 2023 doit faire tourner un test fermé avec
            12 testeurs pendant 14 jours consécutifs avant toute publication —
            les comptes <em>organisation</em> en sont exemptés. Raison de plus
            pour créer le compte au nom de votre entreprise dès le départ.
          </li>
        </ul>
        <p>
          Vérifiez que votre devis inclut la soumission accompagnée : chez
          nous, 1 à 3 itérations de review Apple sont comprises dans le
          forfait, sans surcoût.
        </p>

        <h2 id="delais">12. Combien de temps pour développer une app ?</h2>
        <GuideTable
          headers={["Projet", "Délai marché", "Délai Hagnéré Code"]}
          rows={[
            ["MVP", "6 – 12 semaines (React Native)", "Sur les stores dès 12 semaines"],
            ["App complète", "4 – 8 mois", "14 – 20 semaines"],
            ["Marketplace / IoT / IA", "8 – 14 mois", "5 – 9 mois"],
          ]}
        />
        <p>
          Le process type en agence : cadrage (2-4 semaines), design
          (3-6 semaines), développement en sprints (12-24 semaines selon le
          périmètre), QA (3-5 semaines), validation stores (1-2 semaines).
          Chaque intégration tierce mal anticipée ajoute 2 à 10 jours. Nos
          dates sont contractuelles, avec pénalité de retard — c&apos;est le
          principe de{" "}
          <Link href="/methode">notre méthode Sprint Fixe™</Link>.
        </p>

        <h2 id="rentabilite">13. Rentabilité : ce que disent vraiment les chiffres</h2>
        <p>
          Parlons franchement, parce que presque personne ne le fait sur cette
          requête : <strong>une application n&apos;est pas rentable par
          défaut</strong>. Les données 2024-2025 : environ 46 % des
          installations Android sont désinstallées dans les 30 jours ; la
          rétention moyenne à J30 est d&apos;environ 3 % ; et le coût
          d&apos;acquisition d&apos;une installation en Europe de l&apos;Ouest
          se situe entre 2 et 4 $.
        </p>
        <p>
          Ce que ces chiffres signifient pour votre budget : une app
          « vitrine » sans cas d&apos;usage récurrent brûlera son budget
          marketing sans retour. Les apps qui marchent résolvent un problème
          fréquent — outil métier pour vos équipes, service pour vos clients
          existants, fidélisation avec un vrai avantage. La question à
          trancher <em>avant</em> le devis n&apos;est pas « combien ça
          coûte » mais « qui l&apos;ouvrira chaque semaine, et pourquoi ». Un
          bon cadrage coûte 1 500 € ; une app inutile en coûte 30 000.
        </p>
        <h3>Combien rapporte une application, et comment ?</h3>
        <p>
          Quatre modèles de monétisation dominent, avec des économies très
          différentes une fois les commissions des stores déduites :
        </p>
        <ul>
          <li>
            <strong>L&apos;abonnement</strong> — le modèle le plus sain pour
            une app de service. Attention à la mécanique des commissions :
            sur un abonnement à 10 €/mois vendu in-app, il vous reste 7 à
            8,50 € selon votre situation (Small Business Program, nouvelle
            grille Google 2026). D&apos;où l&apos;intérêt, en Europe, des
            liens d&apos;achat externes ouverts par le DMA.
          </li>
          <li>
            <strong>Les achats in-app</strong> — pertinents pour du
            consommable ou des options ; mêmes commissions.
          </li>
          <li>
            <strong>La publicité</strong> — elle ne rémunère que les très
            gros volumes : avec des eCPM de quelques euros, une app à
            10 000 utilisateurs actifs mensuels génère des dizaines
            d&apos;euros, pas des milliers. Pour une PME, c&apos;est rarement
            un modèle.
          </li>
          <li>
            <strong>L&apos;app comme levier business</strong> — le modèle le
            plus fréquent et le plus rentable en B2B : l&apos;application ne
            « rapporte » pas directement, elle fait gagner des heures à vos
            équipes, fidélise vos clients ou différencie votre offre. Son ROI
            se mesure en productivité et en rétention, pas en revenus
            in-app — et elle échappe entièrement aux commissions des stores.
          </li>
        </ul>

        <h2 id="aides">14. Aides et financements 2026</h2>
        <ul>
          <li>
            <strong>Le Crédit d&apos;Impôt Innovation (CII)</strong> — prorogé
            jusqu&apos;à fin 2027, taux de 20 % sur une assiette plafonnée à
            400 000 €/an (soit jusqu&apos;à 80 000 € de crédit), réservé aux
            PME. Une application est éligible si elle constitue un produit
            nouveau aux performances supérieures au marché — c&apos;est
            souvent le cas d&apos;une app métier innovante, rarement d&apos;une
            simple app de contenu.
          </li>
          <li>
            <strong>France Num</strong> recense environ 200 financements
            publics pour la digitalisation des TPE/PME, dont le Prêt Boost
            Bpifrance (5 000 à 75 000 €, sans garantie).
          </li>
          <li>
            <strong>Les dispositifs régionaux</strong> — en
            Auvergne-Rhône-Alpes (notre région), Atouts Numériques prend en
            charge 70 % d&apos;un parcours de diagnostic et
            d&apos;accompagnement pour les TPE/PME de moins de 50 salariés.
          </li>
        </ul>
        <InfoBox variant="emerald" title="La règle d'or">
          Déposez les demandes <strong>avant</strong> de signer le devis, et
          vérifiez la disponibilité des dispositifs sur{" "}
          <a href="https://www.francenum.gouv.fr/aides-financieres" target="_blank" rel="noopener noreferrer">
            francenum.gouv.fr
          </a>{" "}
          — ces aides ouvrent et ferment sans préavis (vérifié en juillet
          2026).
        </InfoBox>

        <h2 id="propriete-juridique">15. Propriété du code, comptes stores et conformité</h2>
        <h3>Le compte développeur : à votre nom, jamais à celui de l&apos;agence</h3>
        <p>
          Apple exige que le compte App Store appartienne au propriétaire
          final de l&apos;application — votre entreprise, avec son numéro
          D-U-N-S. Un compte au nom de l&apos;agence crée une dépendance
          totale : elle contrôle la fiche store, les statistiques, et peut
          bloquer vos mises à jour en cas de litige. Même logique côté Google
          Play (avec en bonus l&apos;exemption des 14 jours de test fermé pour
          les comptes organisation).
        </p>
        <h3>Le code : sans clause écrite, il ne vous appartient pas</h3>
        <p>
          Comme pour un site web, l&apos;article L131-3 du Code de la
          propriété intellectuelle est formel : sans clause de cession écrite
          et précise, le prestataire reste propriétaire du code — même
          intégralement payé. Exigez la cession des droits et la remise du
          dépôt Git. Chez Hagnéré Code, le dépôt est sur le compte GitHub du
          client dès le premier jour, et la cession est dans les CGV.
        </p>
        <h3>RGPD, ATT et accessibilité</h3>
        <p>
          La CNIL a publié ses recommandations dédiées aux applications
          mobiles (2024, mises à jour en avril 2025) : consentement requis
          pour tout traitement non nécessaire, et attention — la popup ATT
          d&apos;Apple ne vaut pas consentement RGPD, une CMP reste
          nécessaire dans la plupart des cas. Côté accessibilité,
          l&apos;European Accessibility Act s&apos;applique aux apps grand
          public depuis juin 2025, et les premières condamnations françaises
          sont tombées (Carrefour, sous astreinte journalière). Enfin, côté
          comptabilité : une app sur mesure s&apos;immobilise au compte 205 et
          s&apos;amortit sur 3 à 5 ans.
        </p>

        <h2 id="budgeter">16. Méthode : budgéter juste en 4 étapes</h2>
        <ol>
          <li>
            <strong>Validez le cas d&apos;usage avant le budget</strong> — qui
            ouvrira l&apos;app chaque semaine, et pourquoi ? Si la réponse
            est floue, une PWA ou un site suffit peut-être (section 4).
          </li>
          <li>
            <strong>Découpez en MVP</strong> — la fonctionnalité cœur
            d&apos;abord, le reste en itérations. C&apos;est le meilleur
            levier de réduction du risque ET du budget.
          </li>
          <li>
            <strong>Exigez des devis à périmètre égal</strong> — back-end,
            QA, soumission stores, garantie, propriété du code et des comptes :
            chaque ligne explicite (la grille de la section 6 est faite pour
            ça, et notre <Link href="/guides/cahier-des-charges-site-internet">modèle
            de cahier des charges</Link> structure le tout).
          </li>
          <li>
            <strong>Raisonnez en coût total sur 3 ans</strong> — développement
            × 1,5 à 1,8 (maintenance, infra, stores), plus les commissions si
            l&apos;app vend en ligne.
          </li>
        </ol>

        <h2 id="erreurs">17. Les 7 erreurs à éviter</h2>
        <ul>
          <li>
            <strong>Laisser l&apos;agence créer le compte développeur à son
            nom</strong> — dépendance totale, fiche store et mises à jour
            hors de votre contrôle.
          </li>
          <li>
            <strong>Signer sans clause de cession du code</strong> ni remise
            du dépôt Git (section 15).
          </li>
          <li>
            <strong>Ignorer les commissions des stores</strong> dans le
            business model — 15 à 30 % des revenus in-app.
          </li>
          <li>
            <strong>Zapper le budget maintenance</strong> — 15-20 %/an,
            rendus obligatoires par Apple et Google.
          </li>
          <li>
            <strong>Vouloir toutes les fonctionnalités en V1</strong> — chaque
            écran superflu du MVP retarde la validation du cas d&apos;usage.
          </li>
          <li>
            <strong>Choisir l&apos;offshore au taux journalier</strong> sans
            calculer le coût complet (gestion, reprises, RGPD).
          </li>
          <li>
            <strong>Faire une app quand une PWA suffit</strong> — 40 à 60 %
            d&apos;économie quand les stores n&apos;apportent rien à votre cas.
          </li>
        </ul>

        <h2 id="notre-approche">18. Comment on chiffre chez Hagnéré Code</h2>
        <p>
          Nous développons les applications en <strong>React Native +
          Expo</strong> — une codebase pour iOS et Android, publiée sous vos
          comptes stores, avec un code qui vous appartient dès le premier
          jour. Chaque projet est vendu en <strong>forfait fixe
          contractuel</strong> établi après cadrage : le prix annoncé est le
          prix payé, les dates sont contractuelles avec pénalité de retard, la
          soumission aux stores est incluse (1 à 3 itérations de review
          Apple), et 30 jours de garantie couvrent le post-lancement. Les
          correctifs urgents partent en OTA via EAS, sans attendre la review.
        </p>
        <p>
          Tout commence par un <strong>Discovery Sprint à 1 500 €</strong>{" "}
          (2 jours) : périmètre écrit, prototype cliquable, devis ferme —
          déduit à 100 % si le projet se lance. Nos{" "}
          <Link href="/realisations">réalisations</Link> et nos{" "}
          <Link href="/tarifs">tarifs</Link> sont publics.
        </p>
        <p>
          Vous voulez un chiffre pour <em>votre</em> application, pas une
          fourchette générique ?{" "}
          <Link href="/demarrer-un-projet">Décrivez-la en 3 minutes</Link> —
          notre équipe vous répond personnellement sous 24 h ouvrées,
          gratuitement et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — chiffres cités dans ce guide (consultés
          en juillet 2026) : baromètre{" "}
          <a href="https://www.lafabriquedunet.fr/agences/pages/agences-application-mobile/tarifs" target="_blank" rel="noopener noreferrer">La Fabrique du Net</a>{" "}
          (budgets réels, médiane 30 000 €) ; guides prix{" "}
          <a href="https://www.aquilapp.fr/ressources/projet-mobile/combien-coute-application-mobile" target="_blank" rel="noopener noreferrer">Aquilapp</a>{" "}
          et{" "}
          <a href="https://www.codeur.com/pages/combien-coute-application-mobile" target="_blank" rel="noopener noreferrer">Codeur.com</a> ;
          baromètres TJM{" "}
          <a href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/" target="_blank" rel="noopener noreferrer">Silkhom</a>{" "}
          et Malt ;{" "}
          <a href="https://developer.apple.com/support/compare-memberships/" target="_blank" rel="noopener noreferrer">Apple Developer</a>{" "}
          (frais, Small Business Program) et{" "}
          <a href="https://developer.apple.com/transparency/" target="_blank" rel="noopener noreferrer">App Store Transparency Report 2024</a> ;{" "}
          <a href="https://support.google.com/googleplay/android-developer/answer/112622" target="_blank" rel="noopener noreferrer">Google Play Console</a>{" "}
          (frais de service, exigences API) ; recommandations{" "}
          <a href="https://www.cnil.fr/fr/applications-mobiles-la-cnil-publie-ses-recommandations" target="_blank" rel="noopener noreferrer">CNIL applications mobiles</a> ;{" "}
          <a href="https://www.francenum.gouv.fr/aides-financieres" target="_blank" rel="noopener noreferrer">France Num</a>{" "}
          (aides) ; données de rétention{" "}
          <a href="https://www.appsflyer.com/resources/reports/app-uninstall-benchmarks/" target="_blank" rel="noopener noreferrer">AppsFlyer</a> ;{" "}
          <a href="https://reactnative.dev/showcase" target="_blank" rel="noopener noreferrer">React Native Showcase</a>{" "}
          (Shopify, Discord, Meta).
        </p>
        <p className="text-sm">
          <em>
            Les prix de tiers sont des fourchettes de marché constatées à la
            date de mise à jour, susceptibles d&apos;évoluer ; seuls nos
            forfaits établis sur devis engagent Hagnéré Code. Ce guide ne
            constitue ni un conseil juridique ni un conseil comptable
            personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
