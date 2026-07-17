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

const guide = getGuide("react-native-ou-flutter");

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
  wordCount: 4515,
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
      "Applications mobiles",
      "React Native",
      "React",
      "Next.js",
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
      name: "React Native ou Flutter",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quelle est la différence principale entre Flutter et React Native ?",
    answer:
      "Les deux fabriquent une seule application qui tourne sur iPhone et Android — au lieu d'en développer deux. La différence est sous le capot : React Native (créé par Meta) s'écrit en JavaScript/React, le langage de la majorité des développeurs web — une équipe qui a déjà un site React parle déjà la langue. Flutter (créé par Google) s'écrit en Dart, un langage propre à Google, avec un moteur graphique qui dessine lui-même toute l'interface — d'où son aisance sur les designs très personnalisés. Pour un dirigeant, la vraie différence n'est ni la vitesse ni le prix du jour-homme : c'est l'équipe que vous pourrez recruter et garder.",
  },
  {
    question: "Flutter est-il meilleur que React Native ?",
    answer:
      "Ni meilleur ni moins bon : différent, et le « vainqueur » dépend de votre situation. Les enquêtes développeurs les placent au coude-à-coude (environ 14,5 % d'utilisation pour React Native contre 13,6 % pour Flutter chez les professionnels — Stack Overflow 2025). Les mesures réelles des stores nuancent : Flutter équipe davantage de nouvelles petites applications, React Native domine le haut du panier (1 350 apps du top 10 000 contre 1 184, et 47 % des téléchargements de ce segment contre 38 % — données Appfigures). Notre grille de décision par profil est en fin de guide — c'est elle qui répond vraiment.",
  },
  {
    question: "Quel est le moins cher : React Native ou Flutter ?",
    answer:
      "Aucun des deux — et c'est le fait le plus utile de ce guide. Le baromètre TJM de référence (SILKHOM 2025) publie des grilles strictement identiques pour les développeurs React Native, Flutter et natifs : 330 à 720 €/jour à Paris selon la séniorité (comptez environ 15 % de moins en régions). L'économie du multiplateforme ne vient pas du prix du développeur mais du nombre de jours : une seule application au lieu de deux, soit 30 à 40 % d'économie par rapport à deux développements natifs séparés (consensus du secteur, pas d'étude académique). Méfiez-vous des « TJM à 150 € » des plateformes de micro-projets : ce ne sont pas des développements professionnels comparables.",
  },
  {
    question: "Un développeur web peut-il se former rapidement à React Native ?",
    answer:
      "Oui — c'est l'atout stratégique n°1 de React Native pour une entreprise française. Le framework s'écrit en JavaScript/React, utilisé par environ deux développeurs sur trois dans le monde ; un développeur React web expérimenté devient productif sur React Native en quelques semaines. Flutter s'écrit en Dart, un langage qu'on n'apprend pratiquement que pour Flutter : le recrutement passe par des profils spécialisés, environ deux fois moins nombreux sur les plateformes françaises de freelances. Traduction : avec React Native, votre équipe (ou votre agence) web et mobile peut être la même — c'est le cas de figure qui change le budget.",
  },
  {
    question: "Peut-on vraiment partager le code entre iOS et Android ?",
    answer:
      "Oui, massivement — c'est tout l'intérêt du multiplateforme. Les retours publics documentés : Shopify a achevé fin 2024 cinq ans de migration vers React Native avec 86 % de code commun entre iPhone et Android (et 1,8 million de lignes de code en double supprimées) ; les équipes Flutter revendiquent des taux de 80 à 95 % selon les projets. Le code restant couvre les spécificités de chaque plateforme (notifications, permissions, intégrations propres à iOS ou Android). En pratique : vous payez une application et quelques finitions, pas deux applications.",
  },
  {
    question: "Quel framework permet de livrer un MVP plus vite ?",
    answer:
      "Les deux livrent un MVP (première version volontairement réduite à l'essentiel) dans des délais comparables — les comparatifs qui tranchent ce point se contredisent d'ailleurs entre eux. Le vrai facteur de vitesse n'est pas le framework mais votre point de départ : une équipe qui maîtrise déjà React (parce que votre site ou votre SaaS est en React) livre plus vite en React Native ; une équipe Flutter expérimentée livre aussi vite en Flutter. Chez Hagnéré Code, un MVP mobile est sur les stores dès 12 semaines — notre guide du prix d'une application mobile détaille budgets et délais complets.",
  },
  {
    question: "Quel framework est le plus pérenne à long terme ?",
    answer:
      "La question se traduit en « qui paie les ingénieurs du framework, et pour combien de temps ? ». React Native est porté par Meta — qui l'utilise dans Facebook et Instagram — et co-investi par Microsoft (Office, Outlook), Shopify et Amazon : plusieurs sponsors, dont l'éditeur est le premier client. Flutter dépend d'un seul sponsor, Google, qui a licencié dans les équipes Flutter/Dart en mai 2024 — provoquant la création, par un ancien de l'équipe, d'une copie indépendante du projet (un « fork », nommé Flock) — tout en réaffirmant officiellement son soutien… et en poussant en parallèle une seconde technologie multiplateforme (Kotlin Multiplatform). Aucun des deux ne va disparaître demain ; la gouvernance multi-entreprises de React Native est structurellement plus rassurante.",
  },
  {
    question: "Flutter va-t-il être abandonné par Google ?",
    answer:
      "Rien ne l'indique à court terme — et l'inquiétude n'est pas non plus une invention. Les faits : Google a licencié une partie des équipes Flutter, Dart et Python en mai 2024 ; un ancien ingénieur de l'équipe a créé une copie indépendante du projet (un « fork », nommé Flock) en invoquant une équipe réduite ; Google a répondu publiquement fin 2024 en revendiquant plus d'un million de développeurs actifs mensuels et des déploiements majeurs (Toyota, BMW, Google Pay). Mais Google investit aussi dans Kotlin Multiplatform, une approche concurrente — deux paris chez Google, contre un seul chez Meta. Un dirigeant n'a pas à trancher ce débat : il doit juste exiger un code propre et documenté, réutilisable quoi qu'il arrive.",
  },
  {
    question: "Lequel choisir pour une application avec animations complexes ou design très personnalisé ?",
    answer:
      "C'est le cas honnête où Flutter part favori — et nous le disons en étant une agence React. Son moteur graphique dessine lui-même chaque pixel de l'interface, ce qui excelle pour les designs très éloignés des standards et les animations riches ; les mesures en conditions extrêmes lui donnent l'avantage en consommation processeur et mémoire (avec une réserve : ces tests datent d'avant la refonte majeure de React Native fin 2024). Pour les applications métier classiques — formulaires, listes, tableaux de bord, prise de photos —, la différence est imperceptible pour l'utilisateur : la qualité de l'équipe pèse plus que le framework.",
  },
  {
    question: "Est-il possible de migrer une application native vers React Native ou Flutter ?",
    answer:
      "Oui, et les deux sens existent. Les grandes migrations documentées vont plutôt vers le multiplateforme : Shopify (cinq ans, achevée fin 2024), Discord (application Android réécrite en React Native), Google Pay (vers Flutter, avec 35 % de code en moins). Le contre-exemple célèbre est Airbnb, qui a abandonné React Native en 2018 pour revenir au natif — un cas d'école instructif, mais antérieur à la refonte technique majeure du framework. Une migration est un vrai projet (plusieurs mois) : elle se justifie quand la maintenance de deux applications natives devient le goulot, rarement avant.",
  },
  {
    question: "Quelle est la différence entre PWA, application native et application hybride ?",
    answer:
      "L'application native est développée spécifiquement pour iOS (Swift) ou Android (Kotlin) : performance maximale, deux développements. Le multiplateforme (React Native, Flutter — souvent appelé « hybride ») produit une vraie application des stores à partir d'un seul code. La PWA (Progressive Web App) est un site web installable qui ressemble à une application : pas de passage par les stores, pas de commission — mais des capacités réduites (notifications limitées sur iPhone) et une dépendance aux décisions d'Apple, qui a montré en 2024 qu'il pouvait restreindre ce canal du jour au lendemain avant de reculer sous la pression. Pour une app métier distribuée à vos équipes ou clients, le multiplateforme est aujourd'hui le meilleur rapport coût/capacités.",
  },
  {
    question: "Combien coûte la maintenance d'une application mobile ?",
    answer:
      "Comptez 10 à 20 % du coût de développement par an — et ce n'est pas une option : Apple et Google l'imposent. Chaque année, Apple exige que les applications soient recompilées avec ses derniers outils (Xcode 16 et le SDK iOS 18 depuis avril 2025), et Google Play impose de cibler la dernière version d'Android (sous peine de devenir invisible sur les téléphones récents). Une application « finie » qu'on ne touche plus n'existe pas. Le coût du retard est documenté : rattraper plusieurs années de mises à jour repoussées peut coûter 10 à 38 fois plus cher que les faire au fil de l'eau.",
  },
  {
    question: "Comment éviter de dépendre de son agence mobile ?",
    answer:
      "Quatre clauses à exiger avant de signer, quel que soit le framework : la propriété du code (cession écrite, dépôt sur un compte GitHub à votre nom) ; les comptes développeur Apple et Google ouverts au nom de votre entreprise, jamais à celui de l'agence — c'est votre identité sur les stores ; une documentation et un code standard, qu'une autre équipe peut reprendre (demandez : « si vous disparaissez, qui peut maintenir ça ? ») ; et un framework au vivier large — c'est ici que le choix technique rejoint la prudence : environ deux fois plus de développeurs React Native que Flutter sur le marché français des freelances, et un réservoir React web immense derrière. La réversibilité se négocie au contrat, pas au moment du divorce.",
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
          { label: "React Native ou Flutter" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Le débat est technique, votre décision ne l'est pas. Ce comparatif traduit tout en critères de dirigeant : coûts réels (le prix de journée — le « TJM » — est identique : l'économie est ailleurs), vivier de recrutement français chiffré, pérennité des deux camps sourcée, maintenance imposée par Apple et Google, et un verdict par profil — biais déclaré."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "TJM identiques : 330 – 720 €/j", description: "", color: "violet" },
          { number: "02", title: "Vivier FR : ~2× plus large côté React Native", description: "", color: "blue" },
          { number: "03", title: "Économie vs 2 apps natives : 30-40 %", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-une-application-mobile", label: "Combien coûte une application mobile ?" },
          { href: "/guides/combien-coute-un-saas", label: "Combien coûte un SaaS ?" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/cahier-des-charges-application-mobile", label: "Cahier des charges d'app mobile" },
          { href: "/services/application-mobile", label: "Application mobile" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="React Native ou Flutter : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Votre prestataire jure par Flutter, un autre ne parle que de
          React Native, et les comparatifs alignent des benchmarks
          d&apos;images par seconde qui ne vous disent rien.{" "}
          <strong>Ce guide traduit le débat en langage de
          dirigeant</strong> — coûts, recrutement, pérennité, dépendance
          — avec chaque chiffre sourcé, et notre biais d&apos;agence
          React déclaré dès la première ligne plutôt que caché derrière
          une fausse neutralité.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Le verdict en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. Deux ateliers pour la même voiture" },
            { id: "enjeu-business", label: "3. Ce que le choix change vraiment (et ne change pas)" },
            { id: "couts", label: "4. Les coûts : le TJM est identique, l'économie est ailleurs" },
            { id: "recrutement", label: "5. Recruter en France : le vivier, chiffré" },
            { id: "performance", label: "6. Performance : le vrai du faux" },
            { id: "adoption", label: "7. Sondages contre stores : qui utilise quoi, mesuré" },
            { id: "gouvernance", label: "8. Qui gouverne quoi : Meta, Google — et le risque fournisseur" },
            { id: "production", label: "9. Les preuves en production, des deux côtés" },
            { id: "maintenance", label: "10. La maintenance qu'on ne vous dit jamais" },
            { id: "reversibilite", label: "11. Dépendance et réversibilité : le cas Airbnb" },
            { id: "alternatives", label: "12. Ni l'un ni l'autre : natif, Kotlin Multiplatform, PWA" },
            { id: "verdict-par-profil", label: "13. La grille de décision — et les 7 questions à votre agence" },
            { id: "methode", label: "14. Méthode : choisir en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. Le verdict en 30 secondes</h2>
        <p>
          En 2026, <strong>React Native et Flutter sont deux choix
          sérieux, au coude-à-coude, et aucun ne va disparaître</strong>.
          Le prix du jour-homme est identique (330 à 720 €/jour à
          Paris selon la séniorité, environ 15 % de moins en régions —
          les baromètres publient les mêmes grilles pour les deux) ; l&apos;économie du multiplateforme
          vient d&apos;ailleurs : une seule application au lieu de deux,
          soit <strong>30 à 40 % de moins que deux développements
          natifs</strong>. Les vrais critères de départage :{" "}
          <strong>votre équipe existante</strong> (un site ou SaaS en
          React → React Native s&apos;impose),{" "}
          <strong>le vivier de recrutement</strong> (environ deux fois
          plus de profils React Native en France), et{" "}
          <strong>la gouvernance</strong> (plusieurs sponsors derrière
          React Native, un seul — Google — derrière Flutter). Flutter
          garde un vrai terrain de prédilection : les interfaces très
          personnalisées et les animations riches.
        </p>
        <GuideTable
          headers={["Votre situation", "Notre verdict", "Pourquoi"]}
          rows={[
            ["Vous avez déjà un site ou SaaS en React", "React Native (+ Expo)", "Même langage, équipe unique web + mobile, code partagé"],
            ["Interface très personnalisée, animations riches", "Flutter", "Son moteur graphique excelle sur le sur-mesure visuel"],
            ["Vous partez de zéro, sans équipe technique", "Les deux se défendent", "Arbitrez sur le vivier de votre région et votre prestataire"],
            ["L'app EST le produit, performance extrême exigée", "Natif (Swift/Kotlin) à étudier", "La leçon du cas Airbnb — section 11"],
            ["Équipe Android/Kotlin existante", "Kotlin Multiplatform à regarder", "L'outsider qui monte — section 12"],
          ]}
        />

        <InfoBox variant="blue" title="Les 12 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Framework</strong> : la boîte à outils de base sur laquelle les développeurs construisent votre application.</li>
            <li><strong>React Native</strong> : le framework mobile de Meta (Facebook) — on écrit en JavaScript/React, la langue du web.</li>
            <li><strong>Flutter</strong> : le framework mobile de Google — on écrit en Dart, un langage propre à cet écosystème.</li>
            <li><strong>Multiplateforme (cross-platform)</strong> : une seule application qui tourne sur iPhone ET Android — au lieu de deux développements.</li>
            <li><strong>Natif</strong> : une application développée spécifiquement pour iOS (Swift) ou Android (Kotlin) — deux équipes, deux codes.</li>
            <li><strong>TJM</strong> : le taux journalier d&apos;un développeur — son « taux horaire d&apos;artisan », à la journée.</li>
            <li><strong>MVP</strong> : la première version d&apos;une app, volontairement réduite à l&apos;essentiel pour sortir vite.</li>
            <li><strong>SaaS</strong> : un logiciel utilisé en ligne, par abonnement — l&apos;outil de facturation ou le CRM que vos équipes ouvrent dans leur navigateur.</li>
            <li><strong>Expo</strong> : la boîte à outils standard qui industrialise React Native (compilation, mises à jour, publication).</li>
            <li><strong>Stores</strong> : l&apos;App Store (Apple) et Google Play — les deux magasins par lesquels votre app doit passer.</li>
            <li><strong>PWA</strong> : un site web installable qui ressemble à une app — sans passer par les stores, avec des capacités réduites.</li>
            <li><strong>Réversibilité</strong> : votre capacité à changer de prestataire ou de technologie sans repartir de zéro.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Deux ateliers pour la même voiture</h2>
        <p>
          L&apos;image la plus juste : vous voulez une voiture qui
          roule sur deux routes différentes (iPhone et Android). Le
          natif construit deux voitures, une par route — le meilleur
          résultat, le double du budget. React Native et Flutter sont{" "}
          <strong>deux ateliers qui construisent une seule voiture
          adaptée aux deux routes</strong> : même promesse, mais
          l&apos;atelier React Native travaille avec l&apos;outillage
          du web (JavaScript/React — vos artisans web savent déjà s&apos;en
          servir), quand l&apos;atelier Flutter utilise un outillage
          propre à Google (Dart), très performant mais que peu
          d&apos;artisans français maîtrisent. Le choix ne se joue pas
          sur la voiture — les deux roulent très bien — mais sur{" "}
          <strong>l&apos;atelier que vous pourrez faire tourner pendant
          cinq ans</strong>.
        </p>
        <p>
          Cette image règle aussi le cas des devis « exotiques » :
          si un prestataire vous propose une technologie que vous
          n&apos;avez jamais croisée dans ce guide, demandez-lui
          combien d&apos;ateliers en France savent la faire tourner —
          la réponse est souvent la vraie information du rendez-vous.
        </p>
        <p>
          Fil rouge de ce guide : <strong>Batilog, éditeur
          chambérien d&apos;un outil de suivi de chantier</strong> —
          15 salariés, un SaaS web en React utilisé par 200 entreprises
          du BTP, et un besoin devenu urgent : l&apos;application mobile
          de terrain pour les chefs de chantier (pointages, photos,
          réserves, hors-ligne). Deux devis sont sur la table — un en
          React Native, un en Flutter, écarts inexpliqués — et le
          dirigeant veut comprendre avant de signer. Cas d&apos;école :
          nous allons dérouler chaque critère sur son dossier.
        </p>

        <h2 id="enjeu-business">3. Ce que le choix change vraiment (et ne change pas)</h2>
        <p>
          Un indice révélateur avant tout : les comparatifs se
          contredisent frontalement entre eux — l&apos;un affirme que
          Flutter livre un MVP plus vite, l&apos;autre l&apos;inverse ;
          l&apos;un donne l&apos;accès aux fonctions natives à React
          Native, l&apos;autre à Flutter. Quand des experts de bonne
          foi se contredisent sur un critère, c&apos;est
          généralement que <strong>ce critère ne discrimine pas</strong> —
          les deux outils font le travail, et la réponse dépend de
          l&apos;équipe qui les tient. Débarrassons donc la table de ce
          que le choix <strong>ne change pas</strong> : le prix du jour-homme
          (identique — section 4), la qualité perçue par vos
          utilisateurs sur une app métier standard (imperceptible —
          section 6), la nécessité de maintenir l&apos;app chaque année
          (imposée par Apple et Google — section 10), et le passage par
          les stores avec leurs règles et commissions. Ce que le choix{" "}
          <strong>change vraiment</strong> : qui peut travailler sur
          votre application (le vivier — section 5), la mutualisation
          avec votre existant web (l&apos;argument qui a un prix — le
          cas Shopify l&apos;illustre : 86 % de code commun), votre
          exposition au risque fournisseur (section 8), et votre
          liberté de changer de prestataire (section 11). Autrement
          dit : <strong>un choix d&apos;équipe et de gouvernance,
          déguisé en choix technique</strong> — exactement pourquoi il
          mérite un guide pour dirigeants.
        </p>

        <h2 id="couts">4. Les coûts : le TJM est identique, l&apos;économie est ailleurs</h2>
        <p>
          Le fait le plus utile de ce comparatif, et aucun guide
          concurrent ne l&apos;exploite : le baromètre TJM de référence
          (SILKHOM 2025) publie des grilles{" "}
          <strong>strictement identiques</strong> pour les développeurs
          React Native, Flutter et natifs iOS/Android :
        </p>
        <GuideTable
          headers={["Profil", "TJM Paris", "TJM régions"]}
          rows={[
            ["Junior (0-2 ans)", "330 – 430 €", "300 – 380 €"],
            ["Confirmé (2-5 ans)", "400 – 500 €", "≈ 15 % de moins qu'à Paris"],
            ["Senior (5 ans et +)", "500 – 650 €", "≈ 15 % de moins"],
            ["Lead (8 ans et +)", "600 – 720 €", "450 – 550 €"],
          ]}
        />
        <p>
          Conséquence directe : <strong>quiconque vous vend Flutter ou
          React Native « parce que c&apos;est moins cher » que
          l&apos;autre se trompe ou vous trompe</strong> — le jour-homme
          coûte pareil (méfiance aussi envers les « TJM à 150 € » des
          plateformes de micro-projets, qui ne comparent pas des
          développements professionnels). L&apos;économie du
          multiplateforme est ailleurs et elle est réelle :{" "}
          <strong>une seule application au lieu de deux</strong>, une
          équipe au lieu de deux, des tests mutualisés — le consensus
          du secteur chiffre l&apos;écart à 30-40 % par rapport à deux
          développements natifs (chiffre d&apos;agences convergentes,
          pas d&apos;étude académique — nous le signalons). Pour
          Batilog, la traduction est immédiate : ses deux devis à TJM
          comparables se départagent sur le <em>nombre de jours</em> et
          sur un facteur que le devis Flutter ne peut pas offrir — la
          réutilisation de la logique métier déjà écrite en React pour
          son SaaS. Les budgets complets par type d&apos;app sont dans
          notre <Link href="/guides/combien-coute-une-application-mobile">guide
          du prix d&apos;une application mobile</Link>.
        </p>

        <h2 id="recrutement">5. Recruter en France : le vivier, chiffré</h2>
        <p>
          Le critère décisif pour une PME n&apos;est pas dans les
          benchmarks : c&apos;est <strong>qui maintiendra votre app
          dans trois ans</strong>. Les ordres de grandeur français
          (relevés mi-2026, à considérer comme des instantanés) : la
          plateforme Malt référence{" "}
          <strong>environ deux fois plus de freelances React Native
          que Flutter</strong> (~2 000 contre ~1 000 profils), et
          l&apos;écart réel est plus large encore, car derrière React
          Native se tient l&apos;immense réservoir des développeurs
          web : JavaScript est pratiqué par environ deux développeurs
          sur trois dans le monde, React par près d&apos;un sur deux
          (Stack Overflow 2025) — un développeur React web devient
          productif sur React Native en quelques semaines. Dart, le
          langage de Flutter, ne s&apos;apprend pratiquement que pour
          Flutter. Nuance d&apos;honnêteté : chez les développeurs en
          formation, Flutter est plus populaire (11,1 % contre 6,7 %) —
          le vivier junior Flutter grandit. Mais pour un dirigeant qui
          raisonne en risque de dépendance — « si mon prestataire
          disparaît, qui reprend ? » —, le réservoir React est
          aujourd&apos;hui l&apos;assurance la plus solide du marché
          français. Pour ceux qui recrutent en interne plutôt
          qu&apos;en prestation, les salaires suivent la même logique
          que les TJM : comparables entre les deux technologies —
          comptez en France environ 38-48 k€ pour un junior, 55-72 k€
          pour un confirmé, 80-95 k€ pour un senior mobile, à quelques
          milliers d&apos;euros près selon la rareté locale du profil.
          Là encore, ce n&apos;est pas le framework qui fait le prix :
          c&apos;est la séniorité et la ville.
        </p>

        <h2 id="performance">6. Performance : le vrai du faux</h2>
        <p>
          Les benchmarks qui font gagner Flutter existent : en
          conditions extrêmes (animations lourdes), les mesures
          documentées lui donnent l&apos;avantage en consommation
          processeur et mémoire. Deux réserves les remettent à leur
          place : ces tests simulent des cas non représentatifs
          d&apos;une application métier, et la plupart datent
          d&apos;avant la refonte majeure de React Native (la « New
          Architecture », activée par défaut depuis octobre 2024, qui a
          supprimé son principal goulot historique). Le consensus
          honnête des praticiens : <strong>pour l&apos;immense
          majorité des applications d&apos;entreprise — formulaires,
          listes, tableaux de bord, photos —, la différence est
          imperceptible pour l&apos;utilisateur</strong> ; la qualité
          de l&apos;architecture pèse plus que le framework. Le cas où
          Flutter mérite vraiment sa réputation : les interfaces très
          personnalisées et les animations complexes, où son moteur
          graphique qui dessine chaque pixel fait la différence — si
          votre application est de celles-là, dites-le à votre
          prestataire, c&apos;est un vrai critère. Dernière nuance
          utile si votre public utilise des téléphones d&apos;entrée
          de gamme (usage terrain, international) : le moteur graphique
          de Flutter, qui dessine tout lui-même, garde une régularité
          appréciée sur les appareils modestes — un point à mettre dans
          la balance pour les applications déployées sur des flottes de
          téléphones professionnels basiques.
        </p>
        <p>
          Un dernier réflexe, souvent absent des comparatifs et
          pourtant décisif : <strong>listez vos intégrations
          critiques</strong> (paiement, cartographie, Bluetooth, objets
          connectés, analytics…) et vérifiez que chacune publie un SDK
          officiel — la brique logicielle fournie par l&apos;éditeur —
          pour la technologie proposée. L&apos;écosystème JavaScript de
          React Native est le plus fourni du marché, mais certains
          fournisseurs ne livrent qu&apos;un SDK natif ou Flutter : une
          intégration absente se recode à vos frais, en jours
          facturés — précisément le genre de ligne qui explique un
          écart inexpliqué entre deux devis. Posez la question à chaque
          prestataire, intégration par intégration.
        </p>

        <h2 id="adoption">7. Sondages contre stores : qui utilise quoi, mesuré</h2>
        <p>
          Les comparatifs recyclent un chiffre de 2023 (« Flutter 46 %,
          React Native 35 % ») issu de sondages développeurs. Les
          données récentes racontent une histoire plus fine. Côté
          sondages : quasi-égalité (14,5 % contre 13,6 % chez les
          professionnels, Stack Overflow 2025). Côté{" "}
          <strong>mesures réelles des stores</strong> (Appfigures, qui
          analyse les technologies embarquées dans les applications) :
          Flutter équipe davantage de <em>nouvelles</em> applications
          (~11 % contre ~7 % en 2024) — la longue traîne des petites
          apps —, mais dans le <strong>top 10 000 des applications les
          plus téléchargées, React Native domine</strong> : 1 350 apps
          contre 1 184, et 47 % des téléchargements du segment
          multiplateforme contre 38 %. Traduction pour un dirigeant :{" "}
          <strong>Flutter gagne le volume, React Native gagne les
          applications d&apos;entreprise à fort trafic</strong> — les
          deux sont massivement adoptés, aucun choix n&apos;est
          marginal. Deux repères complètent le tableau : le
          multiplateforme dans son ensemble progresse vite — environ
          15 % des nouvelles applications publiées en 2024 embarquaient
          React Native ou Flutter, contre 7 % en 2020 (chiffres
          arrondis, issus de mesures Appfigures distinctes de celles
          des parts par framework citées plus haut) — et méfiez-vous des
          chiffres d&apos;éditeurs : Google revendique « près de 30 %
          des nouvelles apps iOS » sous Flutter quand la mesure
          indépendante d&apos;Appfigures compte ~11 % des nouvelles
          apps toutes plateformes — deux périmètres différents, un
          seul est neutre. À noter enfin, la percée mesurée
          d&apos;un troisième acteur, Kotlin Multiplatform
          (section 12).
        </p>

        <GuideInlineCTA
          title="Deux devis contradictoires sur la table ?"
          description="Décrivez votre projet d'application en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, avec un avis franc et argumenté — y compris quand Flutter ou le natif est le meilleur choix pour votre cas. Notre biais React est déclaré : jugez-nous sur les arguments."
          tags={["Réponse sous 24 h ouvrées", "MVP sur les stores dès 12 semaines", "Biais déclaré, arguments sourcés"]}
        />

        <InfoBox variant="blue" title="Le cas Batilog, résolu">
          Ses deux devis affichaient des TJM comparables (≈ 500 €) —
          normal, section 4. Le départage s&apos;est fait sur trois
          lignes. Le nombre de jours : le devis React Native
          réutilisait la logique métier déjà écrite pour le SaaS
          (calculs de pointages, règles de chantier) — 12 jours de
          moins. L&apos;équipe : les deux développeurs React de
          Batilog peuvent relire, tester et un jour maintenir le code
          mobile — impossible en Dart sans recruter. La
          réversibilité : une dizaine de prestataires React Native
          accessibles en région Auvergne-Rhône-Alpes, contre trois en
          Flutter identifiés. Verdict : React Native + Expo, MVP visé
          en 12 semaines — non parce que Flutter est inférieur, mais
          parce que le contexte de Batilog rendait le choix
          asymétrique. C&apos;est toute la thèse de ce guide : le bon
          framework est une propriété de votre situation, pas du
          framework.
        </InfoBox>

        <h2 id="gouvernance">8. Qui gouverne quoi : Meta, Google — et le risque fournisseur</h2>
        <p>
          La question qu&apos;aucun comparatif français ne pose, et
          c&apos;est pourtant celle d&apos;un dirigeant :{" "}
          <strong>qui paie les ingénieurs du framework, et
          pourquoi ?</strong> Côté React Native : Meta l&apos;utilise
          dans ses propres applications à milliards
          d&apos;utilisateurs (Facebook, Instagram) — l&apos;éditeur
          est son premier client —, a achevé fin 2024 la refonte
          technique majeure du framework, et n&apos;est pas seul :
          Microsoft (Office, Outlook, Teams), Shopify et Amazon
          co-investissent massivement.{" "}
          <strong>Une gouvernance multi-entreprises</strong>. Côté
          Flutter : un sponsor unique, Google — qui a licencié dans
          les équipes Flutter et Dart en mai 2024 (au point qu&apos;un
          ancien de l&apos;équipe a lancé « Flock », une copie
          indépendante du projet — un « fork » — destinée à survivre
          si Google se désengageait), a répondu publiquement fin 2024 en
          réaffirmant son engagement (plus d&apos;un million de
          développeurs actifs mensuels, déploiements chez Toyota, BMW,
          Google Pay)… et pousse en parallèle une seconde technologie
          multiplateforme concurrente, Kotlin Multiplatform.{" "}
          <strong>Deux paris chez Google, un seul chez Meta.</strong>{" "}
          Aucun des deux frameworks ne disparaîtra demain — mais à
          horizon cinq ans, la structure de sponsoring de React Native
          est objectivement plus solide, et un dirigeant qui engage
          50 000 € doit le savoir.
        </p>

        <h2 id="production">9. Les preuves en production, des deux côtés</h2>
        <p>
          Les deux camps ont leurs références vérifiables — les voici,
          pour que le choix ne soit pas un pari sur l&apos;inconnu.
          Côté React Native, le cas le plus documenté du secteur :{" "}
          <strong>Shopify a achevé fin 2024 cinq ans de migration</strong>{" "}
          et publié son bilan — 86 % de code commun iPhone/Android,
          1,8 million de lignes de code en double supprimées, plus de
          99,9 % de sessions sans plantage. Ajoutez Microsoft (Office,
          Outlook, Xbox — 38 applications mesurées), Amazon, Discord.
          Côté Flutter : <strong>Google Pay</strong> (migration
          documentée, 35 % de code en moins),{" "}
          <strong>BMW</strong> (l&apos;app My BMW, ~300 ingénieurs,
          47 pays), Toyota, eBay, Alibaba. La conclusion qui compte :
          les deux frameworks font tourner des applications critiques
          à très grande échelle — <strong>l&apos;échec d&apos;un
          projet mobile vient du cadrage et de l&apos;équipe, pas du
          framework</strong>, et quiconque vous promet le contraire
          vend quelque chose.
        </p>

        <h2 id="maintenance">10. La maintenance qu&apos;on ne vous dit jamais</h2>
        <p>
          Le coût caché n&apos;est pas technique, il est
          réglementaire : <strong>Apple et Google imposent un cycle de
          mise à jour annuel</strong>, quel que soit le framework.
          Depuis le 24 avril 2025, toute soumission à l&apos;App Store
          doit être refabriquée avec les derniers outils d&apos;Apple
          (« Xcode 16 » et le « SDK iOS 18 » — les noms importent
          peu : retenez que l&apos;exigence est renouvelée chaque
          année). Google Play
          impose de cibler la dernière version d&apos;Android (API 35
          depuis le 31 août 2025 pour les nouvelles applications, le
          31 août 2026 pour toutes) — sous peine de devenir{" "}
          <strong>invisible</strong> pour les utilisateurs des
          téléphones récents. Une application « finie » qu&apos;on ne
          touche plus n&apos;existe donc pas : provisionnez{" "}
          <strong>10 à 20 % du coût de développement par an</strong>.
          Et ne repoussez pas : le coût du rattrapage est documenté à
          10 à 38 fois le coût du fil de l&apos;eau (un cas publié :
          380 000 $ pour remettre à niveau une application laissée
          quatre ans sans mise à jour). La bonne nouvelle : les deux
          frameworks ont industrialisé ces migrations — c&apos;est un
          budget, plus un drame : Flutter publie une version stable
          environ chaque trimestre avec une page officielle des
          changements et des guides de migration en partie
          automatisés ; côté React Native, l&apos;outillage
          d&apos;Expo (utilisé par 71 % des équipes, enquête 2024)
          industrialise compilation et publication — et permet de
          pousser certains correctifs directement chez
          l&apos;utilisateur, sans repasser par la validation des
          stores (dans les limites fixées par Apple) : pour un produit
          grand public qui corrige et itère chaque semaine, ce sont des
          jours de délai de validation économisés ; côté Flutter, cette
          mise à jour à distance passe par un outil tiers plus récent
          (Shorebird) — la cadence de migration restant, dans les deux
          cas, largement dictée par le calendrier d&apos;Apple et de
          Google.
        </p>

        <h2 id="reversibilite">11. Dépendance et réversibilité : le cas Airbnb</h2>
        <p>
          L&apos;histoire que tout dirigeant devrait connaître avant
          de signer : en 2018, <strong>Airbnb a abandonné React
          Native</strong> après deux ans, 220 écrans et 120 000 lignes
          de code, pour revenir au natif — le cas d&apos;abandon le
          plus documenté du multiplateforme. Les leçons utiles,
          au-delà du titre choc : Airbnb avait des besoins extrêmes
          (l&apos;app EST le produit), une organisation de centaines
          de développeurs, et le framework de 2018 n&apos;est pas
          celui de 2026 (sa refonte majeure date de fin 2024). Côté
          Flutter, aucun abandon comparable n&apos;est documenté —
          l&apos;inquiétude porte sur la gouvernance, pas sur des
          retraits. La vraie protection ne dépend d&apos;ailleurs pas
          du framework : elle est contractuelle.{" "}
          <strong>Code cédé et déposé à votre nom, comptes
          développeur Apple et Google ouverts au nom de votre
          entreprise, documentation à jour, et un framework au vivier
          assez large pour qu&apos;une autre équipe reprenne</strong> —
          quatre clauses qui transforment un mariage en partenariat.
          Un mot d&apos;insistance sur les comptes développeur, le
          piège le plus fréquent que nous rencontrons en reprise de
          projet : le compte Apple (99 $/an) et le compte Google Play
          (25 $ une fois) sont votre identité officielle sur les
          stores — les avis, l&apos;historique et le nom public de
          l&apos;application y sont attachés. Ouverts au nom de
          l&apos;agence « pour aller plus vite », ils deviennent un
          instrument de rétention le jour du désaccord. Exigez-les à
          votre nom dès le premier jour : c&apos;est dix minutes de
          formalités, contre des semaines de récupération ensuite.
          Notre <Link href="/guides/prix-logiciel-sur-mesure">guide du
          prix d&apos;un logiciel sur mesure</Link> détaille le volet
          juridique de la propriété du code, il s&apos;applique
          intégralement au mobile.
        </p>

        <h2 id="alternatives">12. Ni l&apos;un ni l&apos;autre : natif, Kotlin Multiplatform, PWA</h2>
        <p>
          Trois alternatives honnêtes complètent le paysage.{" "}
          <strong>Le natif pur</strong> (Swift pour iOS, Kotlin pour
          Android) reste le bon choix quand l&apos;application est le
          cœur absolu du produit et exige le dernier cri de chaque
          plateforme — c&apos;est la leçon Airbnb ; comptez le double
          du budget. <strong>Kotlin Multiplatform</strong> (KMP) est
          l&apos;outsider mesurable : son adoption a plus que doublé
          en un an (7 % → 18 %, enquête JetBrains 2025), Google le
          soutient officiellement depuis 2024, et — signal
          révélateur — les 218 applications KMP du top 10 000
          concentrent 27 % des revenus du segment multiplateforme :
          des apps peu nombreuses mais très rentables. Sa logique
          diffère : KMP partage la logique métier (30 à 60 % du code)
          en gardant des interfaces natives — un budget intermédiaire
          entre le multiplateforme complet et le natif pur, puisque
          les interfaces restent développées deux fois. Pertinent
          surtout pour les équipes Android/Kotlin existantes.{" "}
          <strong>La PWA</strong>, enfin — le site web installable —
          évite les stores et leurs commissions, mais avec des
          capacités réduites sur iPhone et une dépendance aux
          décisions d&apos;Apple, qui a démontré en 2024 qu&apos;il
          pouvait restreindre ce canal du jour au lendemain (avant de
          reculer sous la pression européenne). Pour une app métier
          distribuée à des équipes ou des clients, le multiplateforme
          reste aujourd&apos;hui le meilleur rapport coût/capacités.
        </p>

        <h2 id="verdict-par-profil">13. La grille de décision — et les 7 questions à votre agence</h2>
        <p>
          Tout ce guide condensé en une grille — cherchez votre ligne,
          chaque verdict renvoie aux sections qui le justifient :
        </p>
        <GuideTable
          headers={["Votre profil", "Verdict", "Pourquoi"]}
          rows={[
            ["Site ou SaaS React existant (le cas Batilog)", "React Native + Expo", "Équipe unique web + mobile, logique métier réutilisée, vivier maximal"],
            ["Startup produit, UI signature et animations riches", "Flutter", "Son terrain d'excellence assumé"],
            ["PME sans existant technique, app métier standard", "React Native légèrement favori", "À qualité égale, le vivier français tranche"],
            ["Équipe Android/Kotlin en place", "Kotlin Multiplatform à étudier", "Réutilise les compétences, adoption ×2,5 en un an"],
            ["App = produit, exigence extrême", "Natif", "Le double du budget, pour la dernière frontière de qualité"],
            ["Usage interne simple, budget minimal", "PWA d'abord", "Testez sans les stores — en connaissant ses limites iPhone"],
          ]}
        />
        <InfoBox variant="amber" title="Les 7 questions à poser à votre agence (détecteur de biais)">
          <ul className="list-disc pl-4 space-y-1.5">
            <li>« Pourquoi cette techno pour MON projet — et dans quel cas m&apos;auriez-vous conseillé l&apos;autre ? » (une agence sérieuse a une réponse)</li>
            <li>« Quelle est votre technologie de prédilection — votre « stack » maison, celle avec laquelle vous travaillez le plus —, et quel pourcentage de vos projets utilise celle que vous me proposez ? » (le biais maison, assumé ou caché)</li>
            <li>« Le TJM serait-il différent dans l&apos;autre techno ? » (la bonne réponse est non — section 4)</li>
            <li>« Qui possédera le code, et sur quel compte sera-t-il déposé ? » (GitHub — le coffre-fort en ligne où vit le code source — doit être au nom de votre entreprise, comme les comptes stores)</li>
            <li>« Les comptes développeur Apple et Google seront-ils au nom de mon entreprise ? » (non négociable)</li>
            <li>« Si vous disparaissez, combien d&apos;équipes en France peuvent reprendre ce code ? » (la question vivier)</li>
            <li>« Quel budget annuel de maintenance dois-je provisionner, mises à jour Apple/Google comprises ? » (10-20 % — s&apos;il dit zéro, fuyez)</li>
          </ul>
        </InfoBox>

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>330 – 720 €/jour à Paris</strong> (≈ 15 % de moins en régions) : le TJM des développeurs mobiles — identique pour React Native, Flutter et natif : l&apos;économie vient du nombre de jours, pas du prix du jour.</li>
            <li><strong>30 – 40 %</strong> : l&apos;économie d&apos;une app multiplateforme face à deux développements natifs (consensus sectoriel).</li>
            <li><strong>~2×</strong> : le rapport du vivier français React Native / Flutter — et le réservoir React web derrière (près d&apos;un développeur sur deux).</li>
            <li><strong>86 %</strong> : le code partagé iPhone/Android mesuré par Shopify après cinq ans de React Native.</li>
            <li><strong>10 – 20 %/an</strong> : la maintenance imposée par les cycles annuels Apple et Google — quel que soit le framework.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">14. Méthode : choisir en 5 étapes</h2>
        <ol>
          <li>
            <strong>Partez de votre existant, pas des benchmarks.</strong>{" "}
            Un site ou SaaS React dans l&apos;entreprise ? Le choix est
            quasi fait (React Native). Une équipe Kotlin ? Regardez
            KMP. Rien ? Passez à l&apos;étape 2.
          </li>
          <li>
            <strong>Qualifiez votre interface.</strong> App métier
            standard (formulaires, listes, photos) : les deux se
            valent. Interface signature, animations riches : Flutter
            marque des points réels.
          </li>
          <li>
            <strong>Chiffrez le vivier local.</strong> Qui, dans votre
            région ou chez vos prestataires accessibles, maîtrise
            chaque techno ? La réversibilité vaut plus que 5 % de
            performance théorique.
          </li>
          <li>
            <strong>Posez les 7 questions</strong> de la section 13 à
            chaque prestataire — surtout les trois dernières
            (propriété, comptes stores, maintenance).
          </li>
          <li>
            <strong>Comparez les devis en jours par poste</strong>, à
            TJM affiché, maintenance annuelle comprise — jamais sur le
            total seul. Notre{" "}
            <Link href="/guides/combien-coute-une-application-mobile">guide
            du prix d&apos;une application mobile</Link> donne toutes
            les fourchettes de référence, et notre{" "}
            <Link href="/guides/cahier-des-charges-application-mobile">modèle
            de cahier des charges d&apos;application mobile</Link> vous
            garantit des devis réellement comparables.
          </li>
        </ol>
        <p>
          Notre position, déclarée d&apos;entrée : Hagnéré Code est une
          agence majoritairement React/Next.js — nous développons les
          applications mobiles en React Native précisément pour la
          cohérence web + mobile décrite dans ce guide, avec un{" "}
          <strong>MVP sur les stores dès 12 semaines</strong>, le code
          cédé et les comptes stores à votre nom. Quand Flutter ou le
          natif est le meilleur choix pour votre cas, nous vous le
          disons — c&apos;est arrivé, et ces clients-là nous
          recommandent aussi. Un{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 %
          si le projet se lance)</strong> tranche votre cas sur vos
          contraintes réelles.{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées,
          gratuite et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/" target="_blank" rel="noopener noreferrer">baromètre TJM SILKHOM 2025</a>{" "}
          (grilles identiques cross-platform/natif) ; Malt (TJM et
          comptages de profils — instantanés) ;{" "}
          <a href="https://survey.stackoverflow.co/2025/technology" target="_blank" rel="noopener noreferrer">Stack Overflow Developer Survey 2024/2025</a> ;{" "}
          <a href="https://appfigures.com/resources/insights/20251219" target="_blank" rel="noopener noreferrer">Appfigures, SDK Intelligence (mesures des stores, top 10 000)</a> ;{" "}
          <a href="https://devecosystem-2025.jetbrains.com/" target="_blank" rel="noopener noreferrer">JetBrains, State of Developer Ecosystem 2025 (Kotlin Multiplatform)</a> ;{" "}
          <a href="https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture" target="_blank" rel="noopener noreferrer">React Native 0.76, New Architecture par défaut (blog officiel Meta)</a> ;{" "}
          <a href="https://shopify.engineering/five-years-of-react-native-at-shopify" target="_blank" rel="noopener noreferrer">Shopify Engineering, « Five years of React Native » (janv. 2025)</a> ;{" "}
          <a href="https://techcrunch.com/2024/05/01/google-lays-off-staff-from-flutter-dart-python-weeks-before-its-developer-conference/" target="_blank" rel="noopener noreferrer">TechCrunch, licenciements équipes Flutter/Dart (mai 2024)</a> ;{" "}
          <a href="https://developers.googleblog.com/en/celebrating-flutters-production-era/" target="_blank" rel="noopener noreferrer">Google Developers Blog, réponse officielle (déc. 2024)</a> ;
          DevClass (fork Flock) ; Android Developers Blog (support
          Kotlin Multiplatform, I/O 2024) ; Expo (EAS Update) et
          Shorebird (mises à jour à distance, dans les limites des
          règles Apple) ;{" "}
          <a href="https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a" target="_blank" rel="noopener noreferrer">Airbnb Engineering, « Sunsetting React Native » (2018)</a> ;{" "}
          <a href="https://developer.apple.com/news/upcoming-requirements/" target="_blank" rel="noopener noreferrer">Apple Developer, exigences SDK/Xcode</a> ;{" "}
          <a href="https://support.google.com/googleplay/android-developer/answer/11926878" target="_blank" rel="noopener noreferrer">Google Play, exigences de niveau d&apos;API</a> ;
          études de cas Flutter (Google Pay, BMW — showcases
          officiels) ; benchmark inVerita (cité avec ses limites) ;
          TechCrunch (épisode PWA/Apple UE, fév.-mars 2024). Les
          chiffres de viviers et d&apos;offres d&apos;emploi sont des
          instantanés volatils, cités en ordre de grandeur. Les
          estimations d&apos;économie (30-40 %) émanent d&apos;agences
          convergentes, pas d&apos;études académiques — c&apos;est
          signalé dans le texte.
        </p>
        <p className="text-sm">
          <em>
            React Native est une marque de Meta ; Flutter et Dart sont
            des marques de Google ; Kotlin est une marque de JetBrains.
            Ce guide est indépendant et son biais éditorial (agence
            React) est déclaré dans le corps de l&apos;article. Les
            fourchettes sont des constats de marché : seul un devis
            établi sur votre périmètre vous engage.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
