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
  wordCount: 4800,
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
      "Raisonnez en coût total, pas en coût de développement : au budget de construction, ajoutez les comptes stores (99 $/an Apple, 25 $ Google), l'infrastructure backend (0 à 200 €/mois en phase de démarrage), la maintenance (15 à 20 % du coût initial par an, rendue obligatoire par les exigences des stores) et, si l'app vend en ligne, les commissions Apple/Google de 15 à 30 %. Pour un MVP à 20 000 €, prévoyez environ 30 000 à 36 000 € sur 3 ans.",
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
      "Un backend démarre quasi gratuitement (Supabase et Firebase ont des plans gratuits, les notifications push via FCM sont gratuites) puis coûte typiquement 25 à 200 €/mois en production pour une jeune app. Attention à la facturation à l'usage (pay-as-you-go) : à 50 000 utilisateurs actifs mensuels, Firebase peut coûter 400 à 800 $/mois là où un forfait type Supabase Pro reste à ~25 $/mois. Le login par SMS coûte environ 0,13 $ par connexion.",
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
      "On peut prototyper, pas industrialiser. Les outils no-code (0 à 100 €/mois) et les générateurs IA produisent des apps de démonstration utiles pour valider une idée, mais montrent leurs limites dès qu'il faut des intégrations métier, de la performance, la conformité RGPD/CNIL et une publication pérenne sur les stores. L'IA a en revanche un vrai impact via les équipes qui l'industrialisent : c'est ce qui nous permet de mettre un MVP sur les stores dès 12 semaines, au forfait fixe.",
  },
  {
    question: "Est-ce rentable de créer une application mobile ?",
    answer:
      "Pas par défaut : environ 46 % des installations sont désinstallées sous 30 jours et la rétention moyenne à J30 est de ~3 %. Une app rentable est une app qui résout un vrai problème récurrent (outil métier, service client, fidélisation) plutôt qu'une app « vitrine ». C'est précisément le travail du cadrage : valider le cas d'usage et le modèle économique avant d'écrire une ligne de code.",
  },
  {
    question: "Comment obtenir un chiffrage précis pour mon application ?",
    answer:
      "Décrivez votre projet via notre parcours guidé (3 minutes) : notre équipe vise une réponse personnelle le prochain jour ouvré, sans délai garanti, gratuitement et sans engagement. Pour un chiffrage ferme, le Discovery Sprint (1 500 €, 2 jours) livre le périmètre écrit, un prototype cliquable et un devis au forfait fixe — déduit à 100 % si le projet se lance.",
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
          un MVP — la première version d&apos;une application, volontairement
          réduite aux fonctions essentielles pour tester l&apos;idée avant
          d&apos;investir davantage — à plus de 150 000 € pour une plateforme
          complexe, avec une médiane française autour de 30 000 €</strong>.
          Mais le prix de développement n&apos;est que la moitié de
          l&apos;histoire&nbsp;: commissions prélevées par Apple et Google
          sur ce que votre app vend, maintenance qu&apos;ils rendent
          obligatoire, serveurs qui font tourner le service en coulisses,
          budget publicitaire pour la faire télécharger… Ce guide chiffre
          tout, sources à l&apos;appui, et traduit chaque terme technique —
          pour budgéter votre application comme un investissement, pas comme
          un pari.
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

        <InfoBox variant="blue" title="Les 10 mots pour lire ce guide (et tous les devis)">
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              <strong>Stores</strong> : les deux boutiques officielles
              d&apos;applications — l&apos;App Store d&apos;Apple (iPhone) et
              le Play Store de Google (autres téléphones). Toute app doit y
              être acceptée.
            </li>
            <li>
              <strong>MVP</strong> («&nbsp;Minimum Viable Product&nbsp;») :
              la première version d&apos;une app, limitée aux fonctions
              essentielles pour tester l&apos;idée sans se ruiner.
            </li>
            <li>
              <strong>App native</strong> : une application installée depuis les stores (par opposition à la PWA). Attention : « développement natif » désigne aussi, en section 4, une app écrite séparément pour iPhone et pour Android.
            </li>
            <li>
              <strong>PWA</strong> : un site web qui se comporte comme une
              app, sans passer par les stores.
            </li>
            <li>
              <strong>Backend</strong> : la partie invisible — les serveurs
              qui stockent vos données et font tourner le service.
            </li>
            <li>
              <strong>Back-office</strong> : l&apos;écran
              d&apos;administration réservé à vos équipes (prix, commandes…).
            </li>
            <li>
              <strong>API</strong> : le «&nbsp;branchement&nbsp;»
              informatique qui relie l&apos;app à vos autres logiciels.
            </li>
            <li>
              <strong>Notification push</strong> : le message qui
              s&apos;affiche sur le téléphone, même app fermée.
            </li>
            <li>
              <strong>Review</strong> : le contrôle d&apos;Apple et Google
              sur toute app, à l&apos;entrée et à chaque mise à jour.
            </li>
            <li>
              <strong>TJM</strong> : le taux journalier moyen, prix
              d&apos;une journée de travail d&apos;un prestataire — par
              opposition au forfait, prix global fixé à l&apos;avance.
            </li>
          </ul>
        </InfoBox>

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
            ["MVP — première version minimale (1-2 fonctionnalités)", "5 000 – 15 000 €", "6 – 12 semaines"],
            ["App métier / B2B — entre entreprises (comptes utilisateurs, droits d'accès, connexion à vos logiciels)", "15 000 – 45 000 €", "3 – 6 mois"],
            ["App e-commerce", "20 000 – 50 000 €", "3 – 6 mois"],
            ["Marketplace / back-office complet", "40 000 – 90 000 €", "6 – 12 mois"],
            ["App complexe (IA, temps réel, réseau social)", "50 000 – 150 000 €+", "8 – 14 mois"],
            ["Grand compte avec intégration SI", "90 000 – 250 000 €+", "> 12 mois"],
          ]}
        />
        <p>
          Précision essentielle&nbsp;: <strong>tous les montants de ce
          guide s&apos;entendent hors taxes (HT)</strong>. Si votre
          entreprise récupère la TVA, ce sont ces chiffres qui
          comptent&nbsp;; sinon, ajoutez 20 %. Sources croisées : La
          Fabrique du Net, Aquilapp, KBCOM, Digital Unicorn, Codeur.com —
          détail en fin d&apos;article.
        </p>

        <h2 id="prix-par-type">2. Les prix par type d&apos;application</h2>
        <p>
          Le premier facteur de prix est le périmètre fonctionnel — tout ce
          que l&apos;application doit savoir faire. Trois repères :
        </p>
        <ul>
          <li>
            <strong>Le MVP (5 000 – 15 000 €)</strong> — une fonctionnalité
            cœur, une création de compte. Son rôle : valider l&apos;usage
            réel avant d&apos;investir.
            C&apos;est le format que nous recommandons : notre offre de{" "}
            <Link href="/services/application-mobile">création
            d&apos;application mobile</Link> met un MVP sur les stores dès
            12 semaines, à forfait fixe.
          </li>
          <li>
            <strong>L&apos;application métier (15 000 – 45 000 €)</strong> —
            rôles et permissions (qui a le droit de voir et de faire quoi),
            back-office, connexions via des API à vos outils : fichier
            clients (CRM), logiciel de gestion (ERP), paiement. Adossée à
            une plateforme web ? Voyez notre guide{" "}
            <Link href="/guides/combien-coute-un-saas">« combien coûte un
            SaaS »</Link> : une app compagnon iOS + Android s&apos;y ajoute
            pour 10 000 à 20 000 € — le backend existe déjà, on ne
            développe que les écrans mobiles. Et si le cœur du besoin est
            l&apos;outil de gestion lui-même plutôt que l&apos;app, notre
            guide du{" "}
            <Link href="/guides/prix-logiciel-sur-mesure">prix d&apos;un
            logiciel sur mesure</Link> chiffre ce versant.
          </li>
          <li>
            <strong>La marketplace et les apps complexes (40 000 € et
            plus)</strong> — paiements répartis automatiquement entre
            plusieurs vendeurs, vérification d&apos;identité imposée par la
            réglementation bancaire (le «&nbsp;KYC&nbsp;»), messagerie
            instantanée, IA. Ces briques touchent à l&apos;argent ou à la
            loi : mal anticipées, elles se paient en dizaines de milliers
            d&apos;euros.
          </li>
        </ul>
        <InfoBox variant="blue" title="En clair : le MVP, expliqué simplement">
          Pensez au restaurateur qui démarre avec un food-truck : il vérifie
          que les clients aiment sa cuisine avant d&apos;investir dans les
          murs. Le MVP joue ce rôle : il confronte votre idée à de vrais
          utilisateurs. Si l&apos;usage est là, la suite s&apos;appuie sur
          des faits ; sinon, vous l&apos;apprenez pour 10 000 € — pas pour
          60 000.
        </InfoBox>
        <p>
          Pour vous situer : le retrait de commandes d&apos;une boulangerie
          est un MVP ; l&apos;app de rapports d&apos;intervention signés par
          le client, pour une entreprise de plomberie de 8 salariés, est une
          app métier ; la plateforme artisans-particuliers avec paiement
          intégré est une marketplace. Gardez la deuxième en tête — la SARL
          Martin : budget complet en section 10, rentabilité en section 13.
        </p>
        <InfoBox variant="amber" title="Méfiez-vous des fourchettes « à partir de 500 € »">
          Certaines pages annoncent des apps « dès 500 € » : il s&apos;agit
          de templates ou de générateurs no-code, pas d&apos;un produit que
          vous possédez et qui passe la review des stores dans la durée. Le
          consensus des budgets réellement engagés en France démarre à
          5 000 € pour un MVP minimal — en dessous, quelque chose manque.
        </InfoBox>

        <h2 id="prix-par-prestataire">3. Freelance, agence, offshore : qui facture quoi</h2>
        <p>
          Deuxième facteur : la main-d&apos;œuvre. Les baromètres de TJM
          2025-2026 — le prix d&apos;une journée de travail d&apos;un
          développeur — donnent la structure réelle (Silkhom, Malt,
          TJMètre ; médiane française : 535 €/jour) :
        </p>
        <GuideTable
          headers={["Prestataire", "Tarif", "À savoir"]}
          rows={[
            ["Freelance junior (0-2 ans)", "330 – 430 €/jour", "OK pour un prototype, risqué pour un produit"],
            ["Freelance confirmé / senior", "400 – 650 €/jour", "React Native ~490 €/j à Paris ; une seule personne sur votre projet : en cas de maladie ou d'abandon, tout s'arrête"],
            ["Agence française", "400 – 1 200 €/jour (80-140 €/h)", "Équipe, méthode, garanties, continuité"],
            ["Offshore (Inde, Maghreb…)", "100 – 250 €/jour", "Voir l'encadré : le coût complet efface souvent l'écart"],
          ]}
        />
        <p>
          Pour convertir en budget : un MVP représente 20 à 40 jours de
          travail, une app métier 60 à 120 jours. À 500 €/jour, un MVP
          revient donc à 10 000 – 20 000 € et une app métier à 30 000 –
          60 000 € — cohérent avec la section 1 : les MVP à 5 000 –
          10 000 € correspondent à des périmètres plus courts ou à des
          tarifs plus bas, et le haut de la fourchette MVP touche déjà
          l&apos;entrée de gamme des apps métier. Deux
          façons de payer : au temps passé (la facture suit les jours
          consommés) ou au forfait (prix fixé à l&apos;avance — plus
          protecteur, si le périmètre est écrit noir sur blanc).
        </p>
        <p>
          Pourquoi un tel écart entre freelance et agence ? Vous
          n&apos;achetez pas la même chose : chez un freelance, des journées
          de développement ; en agence, aussi un chef de projet, un
          designer, une relecture croisée, des tests organisés, une
          continuité de service. Prototype jetable : le freelance suffit
          souvent. Produit dont dépend votre activité : la vraie question
          est qui répondra au téléphone dans deux ans.
        </p>
        <InfoBox variant="amber" title="Offshore : l'économie qui coûte cher">
          Les taux offshore sont 3 à 5 fois inférieurs, mais les retours
          d&apos;expérience convergent : +20 à 30 % de temps de gestion
          interne, 30 à 40 % du code à reprendre dans les mauvais cas, des
          problèmes de qualité pour près d&apos;une entreprise sur deux. Un
          projet facturé 20 000 € offshore atteint couramment 35 000 € une
          fois corrigé — et le coût complet sur 2 ans (développement +
          gestion + reprises, le «&nbsp;TCO&nbsp;» des acheteurs) réduit
          fortement l&apos;écart avec une équipe française, voire
          l&apos;inverse. Sans parler du RGPD.
        </InfoBox>

        <h2 id="technologie">4. Natif, React Native ou PWA : la techno qui change la facture</h2>
        <p>
          Troisième facteur, le plus structurant : la façon dont
          l&apos;application est construite. Historiquement, il fallait deux
          applications distinctes — une pour iPhone (le développement dit
          «&nbsp;natif&nbsp;», en Swift), une pour Android (en Kotlin) —
          donc deux équipes et deux budgets. Le
          «&nbsp;cross-platform&nbsp;» (React Native, Flutter) permet
          d&apos;écrire l&apos;application une seule fois pour les deux :
          comme construire deux maisons à partir d&apos;un seul plan
          d&apos;architecte. Troisième option, la PWA : un site web qui se
          comporte comme une application (icône sur l&apos;écran
          d&apos;accueil, mode hors-ligne), sans passer par les stores. Sur
          la facture :
        </p>
        <GuideTable
          headers={["Approche", "Coût relatif", "Pour qui"]}
          rows={[
            ["Double natif (Swift + Kotlin)", "+40 à 60 % vs cross-platform", "Jeux 3D, AR/VR, exigences matérielles extrêmes"],
            ["React Native (une base de code)", "Référence : -30 à 40 % vs natif", "90 % des apps business : le meilleur ratio coût/qualité"],
            ["Flutter (une base de code)", "Équivalent React Native", "Équipes déjà formées à Dart"],
            ["PWA (site web qui se comporte comme une app)", "-40 à 60 % vs natif", "Portails clients, réservation, outils internes — sans les stores"],
          ]}
        />
        <p>
          Nous développons en <strong>React Native + Expo</strong>, un choix
          économique avant d&apos;être technique : une seule équipe écrit un
          seul programme, dont jusqu&apos;à 90 % sert à la fois aux iPhone
          et aux Android — le duel React Native ou Flutter a
          d&apos;ailleurs son comparatif dédié pour dirigeants : notre{" "}
          <Link href="/guides/react-native-ou-flutter">guide React
          Native ou Flutter</Link>. Les analyses sectorielles convergent : environ
          40 % d&apos;économie à la construction, jusqu&apos;à 60 % sur la
          maintenance, par rapport à deux développements séparés. Pas un
          pari exotique : Shopify a migré <em>toutes</em> ses apps vers
          React Native en 2025, Discord partage 98 % de son code. Cela
          règle le dilemme
          «&nbsp;iOS ou Android d&apos;abord&nbsp;?&nbsp;» : la deuxième
          plateforme devient un surcoût marginal — nos forfaits livrent les
          deux stores d&apos;emblée.
        </p>
        <p>
          Et parfois, la bonne réponse est… de ne pas faire d&apos;app : une
          PWA ou une{" "}
          <Link href="/agence-react">application web React</Link> bien
          construite couvre une grande partie des cas d&apos;usage
          business pour 40 à 60 % de moins, sans review des stores. Si un
          site web suffit, notre guide{" "}
          <Link href="/guides/combien-coute-un-site-internet">combien coûte
          un site internet</Link> donne les bonnes fourchettes.
        </p>
        <h3>App, PWA ou rien ? Le test en quatre questions</h3>
        <ol>
          <li>
            <strong>Le service sera-t-il utilisé au moins une fois par
            semaine ?</strong> Si non, un bon site web suffit probablement.
          </li>
          <li>
            <strong>Besoin de push, de hors-ligne (chantiers, tournées) ou
            du matériel du téléphone</strong> (caméra, GPS, paiement en un
            geste) ? Si non, une PWA suffit pour 40 à 60 % de moins.
          </li>
          <li>
            <strong>Vos utilisateurs doivent-ils vous découvrir sur
            l&apos;App Store, ou les connaissez-vous déjà</strong> (salariés,
            clients) ? Dans le second cas, les stores n&apos;apportent rien.
          </li>
          <li>
            <strong>Vendez-vous quelque chose dans l&apos;app ?</strong> Si
            oui, intégrez d&apos;emblée les 15 à 30 % de commission
            (section 7).
          </li>
        </ol>
        <p>
          Deux «&nbsp;non&nbsp;» aux questions 1 et 2 : commencez par une
          PWA — vous passerez au natif plus tard, avec un budget validé par
          l&apos;usage réel.
        </p>
        <InfoBox variant="emerald" title="À retenir : le choix techno en une phrase">
          Pour 90 % des projets d&apos;entreprise, le choix par défaut en
          2026 est une base de code unique (React Native ou Flutter) ; le
          double natif ne se justifie que pour des besoins extrêmes. Et un
          prestataire honnête doit savoir vous répondre «&nbsp;vous
          n&apos;avez pas besoin d&apos;une app&nbsp;» : c&apos;est le
          premier test de son sérieux.
        </InfoBox>

        <h2 id="postes-de-cout">5. Ce qui fait varier le prix : les postes d&apos;un devis</h2>
        <p>
          Un devis d&apos;application sérieux se décompose en postes
          identifiables — les ratios du marché sont remarquablement stables :
        </p>
        <ul>
          <li>
            <strong>Cadrage et conception des écrans (15-25 %)</strong> —
            profils d&apos;utilisateurs types, parcours, maquettes :
            l&apos;ergonomie et l&apos;apparence de l&apos;app (le
            «&nbsp;design UX/UI&nbsp;»). C&apos;est ici que se joue la
            rétention : des écrans incompris en dix secondes, et
            l&apos;utilisateur désinstalle — chaque euro économisé ici se
            repaie ensuite en publicité.
          </li>
          <li>
            <strong>Développement front mobile (≈ 40 %)</strong> — les
            écrans, la navigation, les animations, le mode hors-ligne
            éventuel.
          </li>
          <li>
            <strong>Architecture backend et API (≈ 25 %)</strong> — les
            comptes utilisateurs, la base de données, la synchronisation, la
            sécurité. Souvent sous-estimé dans les devis bas.
          </li>
          <li>
            <strong>Gestion de projet et contrôle qualité (15-20 %)</strong> —
            les tests sur différents téléphones avant la mise en ligne (la
            «&nbsp;QA&nbsp;»), la recette, la préparation des stores.
          </li>
        </ul>
        <InfoBox variant="blue" title="En clair : les trois étages de votre application">
          Imaginez un restaurant. Le «&nbsp;front&nbsp;» (≈ 40 % du budget),
          c&apos;est la salle : les écrans que vos utilisateurs touchent. Le
          backend (≈ 25 %), la cuisine : invisible, mais tout s&apos;y
          prépare, sur un serveur distant. L&apos;API, le serveur en salle
          qui fait la navette. Un devis anormalement bas ? C&apos;est
          presque toujours la cuisine qui a été oubliée : la salle est
          superbe, mais rien ne peut être servi.
        </InfoBox>
        <p>
          S&apos;y ajoutent les multiplicateurs : chaque intégration tierce
          (paiement, signature électronique, API métier) représente 2 à
          10 jours ; géolocalisation fine, temps réel ou Bluetooth se
          chiffrent en milliers d&apos;euros ; les fonctionnalités IA
          ajoutent 30 à 50 % au budget (grille KBCOM 2026), car elles
          cumulent l&apos;intégration, l&apos;ajustement des réponses
          (tests, garde-fous) et un coût d&apos;usage facturé à la requête
          (section 8).
        </p>
        <h3>Le prix par fonctionnalité : votre détecteur de devis fantaisistes</h3>
        <p>
          Les grilles des cabinets spécialisés (Topflight Apps, KBCOM)
          convergent : notifications push 2 000 – 5 000 $, paiement intégré
          5 000 – 12 000 $, géolocalisation et cartes 6 000 – 15 000 $
          (9 000 – 27 000 € en temps réel), messagerie instantanée
          8 000 – 20 000 $. Ces montants ne sont que des jours multipliés
          par un tarif : une notification push, quelques jours ; un paiement
          complet, une à deux semaines ; un chat temps réel fiable, trois à
          quatre semaines. Demandez le nombre de jours prévu par
          fonctionnalité : les écarts inexpliqués sautent aux yeux. Une
          marketplace complète à 8 000 € ? Divisez par le TJM médian : les
          jours n&apos;y sont pas.
        </p>

        <GuideInlineCTA
          title="Votre projet d'app, cadré en 3 minutes"
          description="Décrivez votre application en quelques étapes guidées — notre équipe vise une réponse personnelle le prochain jour ouvré, sans délai garanti avec une réponse argumentée."
        />

        <h2 id="devis-decortique">6. Un devis de MVP décortiqué ligne par ligne</h2>
        <p>
          Voici la structure type, aux ratios
          2026, d&apos;un <strong>devis de MVP React Native à
          25 000 €</strong> — comptes utilisateurs, fonctionnalité cœur,
          paiement, back-office simple. Pour éviter toute confusion :
          25 000 € dépasse la fourchette MVP de la section 1 car
          l&apos;exemple inclut paiement et back-office, la frontière avec
          l&apos;app métier. Sans ces deux briques, mêmes proportions sur un
          total de 10 000 à 15 000 €.
        </p>
        <FormulaBox>
{`PRIX D'UNE APP = JOURS DE TRAVAIL × TARIF JOURNALIER

Exemple sur ce MVP à 25 000 € :
  Cadrage & spécifications          ≈  5 jours
  Design UX/UI                      ≈  7 jours
  Développement mobile              ≈ 19 jours
  Back-end & API                    ≈ 12 jours
  QA & soumission stores            ≈  5 jours
  ──────────────────────────────────────────────
  ≈ 47 jours × 535 € (TJM médian)   ≈ 25 000 €`}
        </FormulaBox>
        <GuideTable
          headers={["Poste", "Contenu", "Part du budget"]}
          rows={[
            ["Cadrage & spécifications", "Ateliers, périmètre écrit, prototype cliquable", "≈ 2 500 € (10 %)"],
            ["Design UX/UI", "Maquettes des écrans clés iOS + Android, design system", "≈ 3 750 € (15 %)"],
            ["Développement front (React Native)", "Écrans, navigation, mode hors-ligne, notifications push", "≈ 10 000 € (40 %)"],
            ["Back-end & API", "Comptes utilisateurs, base de données, API, paiement Stripe", "≈ 6 250 € (25 %)"],
            ["QA, recette, soumission stores", "Tests multi-appareils, TestFlight, review Apple/Google", "≈ 2 500 € (10 %)"],
          ]}
        />
        <p>
          Cette formule est votre meilleur outil de négociation : un devis
          n&apos;est qu&apos;un nombre de jours multiplié par un tarif —
          demandez toujours les deux. Le même périmètre de 47 jours coûte
          9 000 € offshore (200 €/jour), 25 000 € au TJM médian, 47 000 € en
          grande agence parisienne (1 000 €/jour) — le même produit sur le
          papier, pas les mêmes garanties.
        </p>
        <p>
          Gardez cette grille : si le
          backend ou la QA n&apos;apparaissent pas, ils ne sont pas
          offerts — ils sont exclus, et vous les paierez en avenants
          (suppléments facturés en cours de projet). Demandez aussi ce qui
          est inclus <em>après</em> la mise en ligne : soumission
          accompagnée, corrections de la review, garantie.
        </p>

        <h2 id="frais-stores">7. Les frais des stores que personne ne vous annonce</h2>
        <p>
          Votre application sera distribuée par deux boutiques en
          quasi-monopole : l&apos;App Store et le Play Store. Comme un
          centre commercial, elles font payer l&apos;emplacement — un droit
          d&apos;entrée modeste — et surtout une commission sur tout ce qui
          se vend à l&apos;intérieur. Ces frais figurent rarement dans les
          devis ; les voici :
        </p>
        <GuideTable
          headers={["Frais", "Montant", "Détail"]}
          rows={[
            ["Compte Apple Developer", "99 $/an (≈ 90 €)", "Obligatoire, au nom de votre entreprise, identifiée par son numéro D-U-N-S — un identifiant international gratuit, délivré en quelques jours"],
            ["Compte Google Play", "25 $ (≈ 23 €, une seule fois)", "Compte organisation recommandé (voir section 11)"],
            ["Commission App Store", "30 % — ou 15 %", "15 % via le Small Business Program (< 1 M$ de revenus/an)"],
            ["Commission Google Play", "15 – 30 %", "Nouvelle grille mars 2026 : 10 % abonnements + 5 % facturation"],
            ["Europe (DMA)", "liens externes autorisés", "Depuis juin 2025 : paiement hors app possible dans l'UE"],
          ]}
        />
        <p>
          (Apple et Google facturent en dollars ; l&apos;équivalent en euros
          varie avec le change.) Sur un abonnement à 10 €/mois vendu dans
          l&apos;app, ils prélèvent 1,50 € à 3 € : une app qui vit
          d&apos;abonnements peut payer plus de commissions, sur la durée,
          que son développement. Bonne nouvelle : depuis 2025, le DMA
          (Digital Markets Act, le règlement européen qui encadre les
          grandes plateformes) oblige Apple — après 500 M€ d&apos;amende — à
          autoriser le paiement hors application. Réduire cette commission
          est parfaitement légal — un sujet de cadrage.
        </p>

        <h2 id="couts-recurrents">8. Backend, push, monitoring : les coûts récurrents</h2>
        <p>
          Une application ne vit pas seule sur le téléphone : dès
          qu&apos;elle a des comptes, des données ou des notifications, elle
          dialogue en permanence avec un serveur distant — le backend —
          hébergé, donc facturé, chaque mois. Voilà pourquoi une app coûte
          de l&apos;argent même quand on n&apos;y touche plus. Les postes
          réels :
        </p>
        <GuideTable
          headers={["Poste récurrent", "Fourchette réelle", "Remarque"]}
          rows={[
            ["Backend — hébergement du serveur (Supabase, Firebase…)", "0 – 200 €/mois en phase de démarrage", "Supabase Pro : 25 $/mois forfaitaire"],
            ["Piège de la facturation à l'usage (« pay-as-you-go »)", "400 – 800 $/mois à 50 000 utilisateurs actifs mensuels (« MAU ») sur Firebase", "vs 100-200 $/mois en forfaitaire équivalent"],
            ["Notifications push", "0 € — le service de Google (FCM) est gratuit et illimité", "OneSignal Growth : ~139 $/mois dès 10 000 MAU"],
            ["Connexion par code SMS (« OTP »)", "≈ 0,13 $/connexion", "Twilio Verify + SMS France — préférez e-mail ou passkeys"],
            ["Surveillance des plantages (monitoring)", "0 € (Crashlytics) – 26 $/mois/siège (Sentry)", "Indispensable : motif n°1 de rejet Apple = crashs"],
            ["Mises à jour à distance (« OTA », React Native/EAS)", "0 – 199 €/mois", "Corriger un bug sans repasser par la review des stores"],
          ]}
        />
        <p>
          Ligne SMS : 0,13 $ paraît anodin, mais 1 000 clients connectés
          4 fois par mois font déjà environ 500 €/mois. D&apos;où la
          connexion par e-mail, gratuite, à privilégier.
        </p>
        <InfoBox variant="amber" title="En clair : forfait ou compteur ?">
          Le forfait (type Supabase Pro, 25 $/mois) fonctionne comme un
          abonnement mobile : prix fixe. La facturation à l&apos;usage — le
          «&nbsp;pay-as-you-go&nbsp;» de Firebase — ressemble au
          hors-forfait : quasi gratuite au début, elle grimpe avec chaque
          utilisateur. Le jour où l&apos;app décolle, le compteur
          s&apos;emballe : le succès devient une mauvaise nouvelle
          budgétaire. Exigez le modèle de facturation retenu, écrit, avec
          son coût projeté à 10 000 puis 50 000 utilisateurs.
        </InfoBox>
        <p>
          Dernier poste émergent : l&apos;IA. Un assistant ou de
          l&apos;analyse de documents consomme une API d&apos;intelligence
          artificielle facturée à la requête — dix fois plus
          d&apos;utilisateurs, dix fois plus de requêtes. Exigez une
          estimation écrite par utilisateur et par mois, et des plafonds de
          consommation : le même piège que le pay-as-you-go, en plus rapide.
        </p>
        <p>
          L&apos;ordre de grandeur à retenir : une jeune app bien
          architecturée coûte <strong>moins de 100 €/mois
          d&apos;infrastructure</strong> la première année.
        </p>

        <h2 id="maintenance">9. La maintenance : obligatoire, pas optionnelle</h2>
        <p>
          Le standard sectoriel est constant : <strong>15 à 20 % du coût de
          développement initial par an</strong>. Mais contrairement à un
          site web, cette maintenance n&apos;est pas un choix :
        </p>
        <ul>
          <li>
            Depuis avril 2025, Apple exige que toute mise à jour utilise la
            dernière version de ses outils techniques (pour les initiés :
            Xcode 16 / SDK iOS 18 minimum) : une app jamais remise à niveau
            ne peut plus être corrigée.
          </li>
          <li>
            Depuis août 2025, Google impose de viser les versions récentes
            d&apos;Android (API 34/35) : une app non conforme devient
            invisible sur le Play Store pour les téléphones récents.
          </li>
          <li>
            Résultat mesuré : le Play Store est passé de 3,4 à 1,8 million
            d&apos;apps entre début 2024 et avril 2025
            (<strong>-47 %</strong>) — une purge des applications
            abandonnées.
          </li>
        </ul>
        <InfoBox variant="blue" title="En clair : le contrôle technique de votre app">
          Pensez au contrôle technique automobile : ce n&apos;est pas vous
          qui décidez, c&apos;est la réglementation. Apple et Google jouent
          ce rôle : chaque année, ils relèvent leurs exigences ; une app qui
          ne suit pas perd le droit d&apos;être mise à jour, devient
          invisible, puis disparaît des stores. Les 15 à 20 % de maintenance
          annuelle ne sont pas un confort : c&apos;est le ticket pour rester
          sur la route.
        </InfoBox>
        <p>
          Budgétez-la dès le devis initial — et vérifiez ce qu&apos;elle
          couvre : mises à jour des systèmes, correctifs, surveillance,
          évolutions. C&apos;est le rôle d&apos;un contrat de{" "}
          <Link href="/services/maintenance-evolution">maintenance
          applicative</Link> avec une équipe nommée.
        </p>

        <h2 id="cout-total-3-ans">10. Le vrai comparatif : coût total sur 3 ans</h2>
        <p>
          Le devis de développement n&apos;est que le ticket d&apos;entrée.
          Additionnons tout ce qui précède — comptes stores, serveur,
          maintenance — sur trois ans, pour les deux profils les plus
          courants :
        </p>
        <FormulaBox>
{`MVP REACT NATIVE À 15 000 € — coût réel sur 3 ans
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
          React Native + Expo agit sur la plus grosse ligne : une seule
          base de code à maintenir, et des correctifs envoyés directement
          dans les téléphones («&nbsp;OTA&nbsp;», section 8). Pour notre
          SARL Martin : une app de rapports d&apos;intervention à
          18 000 – 25 000 € de développement représente 30 000 à 38 000 €
          sur 3 ans — maintenance, hébergement et comptes stores compris.
        </p>
        <InfoBox variant="emerald" title="À retenir : votre budget réel en une formule">
          Devis de développement × 1,5 à 1,8 = budget réel sur trois ans,
          maintenance, serveur et comptes stores inclus. Un MVP devisé
          15 000 € coûte en réalité 23 000 à 28 000 € ; une app métier à
          40 000 €, entre 62 000 et 71 500 €. Si l&apos;app vend en ligne,
          ajoutez 15 à 30 % de commission sur chaque vente. Un devis qui
          annonce ce total d&apos;emblée vous respecte — excellent filtre
          entre prestataires.
        </InfoBox>

        <h2 id="review-stores">11. La validation des stores : délais et pièges</h2>
        <p>
          Publier n&apos;est pas un clic. Les chiffres officiels
          d&apos;Apple : 90 % des soumissions sont examinées en moins de
          24 heures, mais <strong>environ 25 % sont rejetées</strong>{" "}
          (1,93 million de rejets sur 7,77 millions de soumissions en 2024),
          le motif n°1 étant la «&nbsp;performance&nbsp;» — crashs, bugs,
          app incomplète. Deux pièges de calendrier peu documentés :
        </p>
        <ul>
          <li>
            <strong>TestFlight</strong> — l&apos;outil d&apos;Apple pour
            faire essayer l&apos;app à un petit groupe avant sa sortie
            officielle : la première version envoyée aux testeurs doit
            elle-même être validée par Apple. Comptez quelques jours de plus
            dans votre calendrier de lancement.
          </li>
          <li>
            <strong>Google Play</strong> : un compte développeur personnel
            créé après novembre 2023 doit faire tourner un test fermé avec
            12 testeurs pendant 14 jours consécutifs avant toute
            publication — les comptes <em>organisation</em> en sont
            exemptés. Raison de plus pour créer le compte au nom de votre
            entreprise dès le départ.
          </li>
        </ul>
        <p>
          Vérifiez que votre devis inclut la soumission accompagnée : chez
          nous, 1 à 3 itérations de review Apple sont comprises dans le
          forfait, sans surcoût.
        </p>

        <h2 id="delais">12. Combien de temps pour développer une app ?</h2>
        <p>
          Dernière variable avant la rentabilité : le temps, qui dépend des
          mêmes facteurs que le prix. Les repères du marché, comparés à nos
          engagements contractuels :
        </p>
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
          (3-6 semaines), développement en sprints — des cycles courts de
          livraison — (12-24 semaines), QA (3-5 semaines), validation
          stores (1-2 semaines). Chaque intégration tierce mal anticipée
          ajoute 2 à 10 jours. Nos dates sont contractuelles, avec pénalité
          de retard — c&apos;est le principe de{" "}
          <Link href="/methode">notre méthode Sprint Fixe™</Link>.
        </p>

        <h2 id="rentabilite">13. Rentabilité : ce que disent vraiment les chiffres</h2>
        <p>
          Parlons franchement : <strong>une application n&apos;est pas
          rentable par défaut</strong>. Environ 46 % des installations
          Android sont désinstallées sous 30 jours, et la rétention moyenne
          à J30 est d&apos;environ 3 % — sur 100 personnes qui installent
          une app, près de la moitié l&apos;ont supprimée au bout d&apos;un
          mois, 3 seulement l&apos;utilisent encore régulièrement. Quant au
          coût d&apos;acquisition — la publicité nécessaire pour obtenir un
          téléchargement —, comptez 2 à 4 $ en Europe de l&apos;Ouest.
        </p>
        <p>
          Faites le calcul avant de signer : 10 000 utilisateurs à ce prix,
          c&apos;est 20 000 à 40 000 $ de publicité — souvent plus que le
          MVP lui-même —, et les éditeurs consacrent couramment 20 à 40 %
          du budget de développement au marketing de lancement. Le cas B2B
          est radicalement différent : la distribution passe par vos
          équipes et vos clients existants — eux n&apos;ont rien à
          «&nbsp;acquérir&nbsp;», le coût est proche de zéro.
        </p>
        <p>
          Une app «&nbsp;vitrine&nbsp;» sans usage récurrent brûlera donc
          son budget marketing sans retour. Les apps qui marchent résolvent
          un problème fréquent — outil métier, service aux clients
          existants, fidélisation avec un vrai avantage. La question à
          trancher <em>avant</em> le devis n&apos;est pas «&nbsp;combien ça
          coûte&nbsp;» mais «&nbsp;qui l&apos;ouvrira chaque semaine, et
          pourquoi&nbsp;». Un bon cadrage coûte 1 500 € ; une app inutile en
          coûte 30 000.
        </p>
        <InfoBox variant="blue" title="Exemple concret : deux apps, deux destins">
          Une enseigne de restauration lance une app
          «&nbsp;vitrine&nbsp;» — carte, horaires, actualités — pour
          25 000 €. Un an plus tard : 4 000 téléchargements, moins de
          100 utilisateurs actifs, app dépubliée — tout était déjà sur
          Google et le site web. À l&apos;inverse, notre SARL Martin équipe
          ses 6 techniciens d&apos;une app de rapports d&apos;intervention
          (photos, liste de contrôle, signature sur l&apos;écran) pour
          environ 20 000 €. Gain : 30 minutes par technicien et par jour,
          environ 660 heures par an — à 45 €/heure, près de 30 000 € de
          productivité annuelle. Remboursée dès la première année, sans rien
          vendre, donc sans commission. Même budget, deux destins :
          l&apos;une espérait créer une habitude, l&apos;autre supprimait
          une corvée existante.
        </InfoBox>
        <h3>Combien rapporte une application, et comment ?</h3>
        <p>
          Côté revenus, les ordres de grandeur du marché : une application
          génère en moyenne 0,10 à 2 € par utilisateur actif et par mois —
          les meilleures atteignent 5 €. À 5 000 utilisateurs actifs,
          comptez quelques centaines à quelques milliers d&apos;euros par
          mois, rarement plus. Quatre modèles dominent :
        </p>
        <ul>
          <li>
            <strong>L&apos;abonnement</strong> — le modèle le plus sain pour
            une app de service. Attention aux commissions : sur un
            abonnement à 10 €/mois vendu in-app, il vous reste 7 à 8,50 €
            (Small Business Program, nouvelle grille Google 2026).
            D&apos;où l&apos;intérêt des liens d&apos;achat externes ouverts
            par le DMA (section 7).
          </li>
          <li>
            <strong>Les achats in-app</strong> — les achats intégrés à
            l&apos;application, pertinents pour du consommable ou des
            options ; mêmes commissions.
          </li>
          <li>
            <strong>La publicité</strong> — quelques euros pour
            1 000 affichages (l&apos;indicateur dit «&nbsp;eCPM&nbsp;») :
            une app à 10 000 utilisateurs actifs mensuels génère des
            dizaines d&apos;euros, pas des milliers. Pour une PME, rarement
            un modèle.
          </li>
          <li>
            <strong>L&apos;app comme levier business</strong> — le modèle le
            plus rentable en B2B : l&apos;app ne «&nbsp;rapporte&nbsp;» pas
            directement, elle fait gagner des heures ou fidélise. Son retour
            sur investissement se mesure en productivité — le calcul de la
            SARL Martin ci-dessus — et elle échappe aux commissions des
            stores.
          </li>
        </ul>

        <h2 id="aides">14. Aides et financements 2026</h2>
        <p>
          Bonne nouvelle après treize sections de dépenses : vous ne
          financerez peut-être pas tout seul. Trois dispositifs en 2026 :
        </p>
        <ul>
          <li>
            <strong>Le Crédit d&apos;Impôt Innovation (CII)</strong> — prorogé
            jusqu&apos;à fin 2027, taux de 20 % sur une assiette plafonnée à
            400 000 €/an (soit jusqu&apos;à 80 000 € de crédit), réservé aux
            PME. Une application est éligible si elle constitue un produit
            nouveau aux performances supérieures au marché — souvent le cas
            d&apos;une app métier innovante, rarement d&apos;une simple app
            de contenu.
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
          D-U-N-S (l&apos;identifiant gratuit présenté à la section 7). Un
          compte au nom de l&apos;agence crée une dépendance totale : elle
          contrôle la fiche store, les statistiques, et peut bloquer vos
          mises à jour en cas de litige. Même logique côté Google Play (qui
          exempte aussi les comptes organisation des 14 jours de test
          fermé).
        </p>
        <h3>Le code : sans clause écrite, il ne vous appartient pas</h3>
        <p>
          Comme pour un site web, l&apos;article L131-3 du Code de la
          propriété intellectuelle est formel : sans clause de cession
          écrite et précise, le prestataire reste propriétaire du code —
          même intégralement payé. Exigez la cession des droits et la remise
          du dépôt Git (l&apos;archive complète du code source). Chez
          Hagnéré Code, les livrables spécifiques sont transférés après
          paiement complet selon les CGV&nbsp;; le devis précise le dépôt,
          les accès, les exclusions et les licences tierces.
        </p>
        <h3>RGPD, ATT et accessibilité</h3>
        <p>
          Côté données personnelles, la CNIL — qui contrôle les applications
          mobiles depuis 2025 — a publié des recommandations dédiées (2024,
          mises à jour en avril 2025) : tout traitement non indispensable
          exige le consentement de l&apos;utilisateur. Piège fréquent : la
          fenêtre de «&nbsp;suivi&nbsp;» d&apos;Apple (dite ATT), qui
          demande l&apos;autorisation de suivre l&apos;utilisateur à des
          fins publicitaires, ne vaut pas consentement au sens du RGPD — il
          faut, dans la plupart des cas, une bannière dédiée, gérée par un
          petit outil spécialisé appelé CMP.
        </p>
        <p>
          Côté accessibilité, la réglementation européenne (European
          Accessibility Act) s&apos;applique aux applications grand public
          depuis juin 2025, et les premières condamnations françaises sont
          tombées — Carrefour, sous astreinte journalière.
        </p>
        <p>
          Enfin, une bonne nouvelle comptable : une application sur mesure
          est un investissement qui s&apos;immobilise (compte 205) et
          s&apos;amortit sur 3 à 5 ans — parlez-en à votre expert-comptable.
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
            <strong>Exigez des devis à périmètre égal</strong> — backend,
            QA, soumission stores, garantie, propriété du code et des comptes :
            chaque ligne explicite (la grille de la section 6 est faite pour
            ça, et notre <Link href="/guides/cahier-des-charges-application-mobile">modèle
            de cahier des charges d&apos;application mobile</Link> structure
            le tout, exemple rempli compris).
          </li>
          <li>
            <strong>Raisonnez en coût total sur 3 ans</strong> — développement
            × 1,5 à 1,8 (maintenance, infrastructure, stores), plus les
            commissions si l&apos;app vend en ligne.
          </li>
        </ol>
        <p>
          Enfin, votre part du travail : prévoyez un extrait Kbis et
          un numéro D-U-N-S pour les comptes développeur à votre nom, une
          carte bancaire pour les 99 $/an d&apos;Apple et les 25 $ de
          Google, vos logos et textes, un interlocuteur qui valide les
          maquettes sous 48 h, et 5 à 10 testeurs volontaires pour la phase
          d&apos;essai. Un client réactif fait gagner des semaines.
        </p>

        <h2 id="erreurs">17. Les 7 erreurs à éviter</h2>
        <p>
          Tout ce guide tient en creux dans sept erreurs — celles que nous
          voyons chaque mois dans les projets qui arrivent après un premier
          échec :
        </p>
        <ul>
          <li>
            <strong>Laisser l&apos;agence créer le compte développeur à son
            nom</strong> — dépendance totale, fiche store et mises à jour
            hors de votre contrôle (section 15).
          </li>
          <li>
            <strong>Signer sans clause de cession du code</strong> ni remise
            du dépôt Git (section 15).
          </li>
          <li>
            <strong>Ignorer les commissions des stores</strong> dans le
            modèle économique — 15 à 30 % des revenus in-app (section 7).
          </li>
          <li>
            <strong>Zapper le budget maintenance</strong> — 15-20 %/an,
            rendus obligatoires par Apple et Google (section 9).
          </li>
          <li>
            <strong>Vouloir toutes les fonctionnalités en V1</strong> — chaque
            écran superflu du MVP retarde la validation du cas d&apos;usage
            (section 2).
          </li>
          <li>
            <strong>Choisir l&apos;offshore au taux journalier</strong> sans
            calculer le coût complet — gestion, reprises, RGPD (section 3).
          </li>
          <li>
            <strong>Faire une app quand une PWA suffit</strong> — 40 à 60 %
            d&apos;économie quand les stores n&apos;apportent rien à votre
            cas (section 4).
          </li>
        </ul>

        <h2 id="notre-approche">18. Comment on chiffre chez Hagnéré Code</h2>
        <p>
          Nous développons les applications en <strong>React Native +
          Expo</strong> — une seule base de code pour iOS et Android,
          publiée sous les comptes prévus au devis. Le contrat inventorie le
          dépôt, les accès, les droits transférés après paiement, les licences,
          les étapes de soumission, les itérations incluses, la recette et la
          période de correction. Les mises à jour OTA ne sont possibles que
          pour les changements compatibles avec les règles des stores et la configuration retenue.
        </p>
        <p>
          Tout commence par un <strong>Discovery Sprint à 1 500 €</strong>{" "}
          : durée, périmètre, prototype éventuel, livrables, prix et toute remise
          sont ceux du devis signé. Nos{" "}
          <Link href="/realisations">réalisations</Link> et nos{" "}
          <Link href="/tarifs">tarifs</Link> sont publics.
        </p>
        <p>
          Vous voulez un chiffre pour <em>votre</em> application, pas une
          fourchette générique ?{" "}
          <Link href="/demarrer-un-projet">Décrivez-la en 3 minutes</Link> —
          notre équipe vise une réponse personnelle le prochain jour ouvré, sans délai garanti,
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
