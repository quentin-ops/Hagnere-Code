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

const guide = getGuide("cahier-des-charges-application-mobile");

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
  wordCount: 5005,
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
      "Cadrage de projets",
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
      name: "Cahier des charges d'application mobile",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Faut-il un cahier des charges même pour un petit projet d'application ?",
    answer:
      "Oui — c'est justement le petit projet qui en a le plus besoin, car chaque euro compte. La bonne nouvelle : la taille du document suit celle du projet. Pour un MVP simple, 3 à 5 pages bien structurées suffisent (contexte, cibles, fonctionnalités priorisées, contraintes, budget) ; un projet complexe monte à 15-20 pages. La règle des professionnels : deux pages bien rédigées valent mieux que cinquante pages mal structurées. Sans document du tout, vous recevrez des devis incomparables — l'écart documenté va de 3 000 à 80 000 € pour la même fonctionnalité décrite oralement.",
  },
  {
    question: "Doit-on indiquer un budget dans le cahier des charges ?",
    answer:
      "Oui, et voici pourquoi cette peur est contre-productive. La crainte classique : « si j'annonce 30 000 €, le devis fera 30 000 € ». La réalité : sans fourchette, chaque prestataire imagine un projet différent — l'un chiffre un MVP à 12 000 €, l'autre une plateforme à 60 000 €, et vous ne pouvez rien comparer. Une fourchette honnête oriente les propositions : avec 10 000 €, un prestataire sérieux propose un MVP ciblé ; avec 40 000 €, une application complète. Le budget n'est pas une information que vous perdez : c'est un filtre qui élimine d'office les offres hors sujet.",
  },
  {
    question: "Combien de pages doit faire un cahier des charges d'application mobile ?",
    answer:
      "Une dizaine de pages structurées pour un projet standard — 3 à 5 pour un MVP simple, 15 à 20 pour une application complexe avec intégrations. Le piège n'est pas la brièveté mais le déséquilibre : le document utile consacre environ 60 % de son volume aux fonctionnalités et parcours (le quoi), 25 % aux contraintes techniques (le comment), et le reste au contexte et au cadre (budget, planning, prestations attendues). L'erreur classique inverse : 50 pages listant 80 fonctionnalités « toutes indispensables » sans hiérarchie — un document que personne ne peut chiffrer sérieusement.",
  },
  {
    question: "Qui doit rédiger le cahier des charges ?",
    answer:
      "Vous — pour le fond ; personne ne connaît votre métier, vos clients et vos priorités à votre place. Trois formats selon vos moyens : seul avec un bon modèle (2 à 4 semaines de travail par touches, celui de ce guide est fait pour ça) ; accompagné d'un consultant indépendant (AMOA — assistance à maîtrise d'ouvrage, 450 à 890 €/jour, utile sur les gros projets) ; ou en atelier de cadrage avec l'agence pressentie, qui rédige le document fonctionnel que vous validez — souvent inclus dans la prestation, c'est notre méthode avec le Discovery Sprint. L'important : que les arbitrages (le périmètre, les exclusions, le budget) restent les vôtres.",
  },
  {
    question: "Combien de temps faut-il pour rédiger un cahier des charges ?",
    answer:
      "Comptez 2 à 4 semaines de calendrier pour un porteur de projet qui avance par touches — 10 à 15 jours de travail réel pour un projet simple, 25 à 35 jours pour une application complexe avec intégrations. Un bon modèle fait gagner 1 à 2 semaines (c'est l'objet de ce guide). Ce temps n'est pas du retard : chaque arbitrage tranché à l'écrit évite des allers-retours de devis, des malentendus de développement et des dépassements — les dérives de 30 à 50 % du budget viennent presque toujours d'un périmètre resté flou au départ.",
  },
  {
    question: "Comment protéger mon idée d'application avant d'en parler ?",
    answer:
      "D'abord, une réalité juridique : une idée en soi n'est ni protégeable ni brevetable — ce qui se protège, c'est sa réalisation (le code, l'interface, la marque). Trois outils concrets : le NDA (accord de confidentialité), que les agences françaises sérieuses signent couramment — il n'empêche pas de penser, il engage juridiquement à ne pas divulguer ni s'approprier votre concept ; l'enveloppe e-Soleau de l'INPI (quelques dizaines d'euros), qui date officiellement vos maquettes et documents ; et le dépôt de marque si le nom compte. Le vrai secret des projets qui réussissent n'est d'ailleurs pas la confidentialité : c'est la vitesse d'exécution.",
  },
  {
    question: "Faut-il lancer sur iOS et Android dès le départ ?",
    answer:
      "Avec les technologies multiplateformes (React Native, Flutter), la question a largement perdu son enjeu : une seule application couvre les deux systèmes, et la deuxième plateforme devient un surcoût marginal — c'est notre approche standard. Si vous êtes contraint de choisir (développement natif, budget très serré) : Android détient environ 63 % du parc français — logique pour une application gratuite grand public ; iOS concentre des utilisateurs qui dépensent davantage — logique pour une application payante ou premium. Écrivez le choix et sa justification dans la section plateformes du cahier des charges : c'est une décision de marché, pas de technique.",
  },
  {
    question: "Faut-il choisir la technologie (React Native, Flutter, natif) avant ou après le cahier des charges ?",
    answer:
      "Après — et c'est même un test de sérieux. Le cahier des charges décrit vos besoins (fonctionnalités, contraintes, volumes, budget) ; la technologie est une réponse à ces besoins, que chaque prestataire doit proposer et justifier. Un document qui impose « développement Flutter obligatoire » sans raison limite artificiellement les candidats et trahit souvent un conseil intéressé antérieur. Exception légitime : si vous avez un existant technique (un SaaS en React, une équipe Kotlin), écrivez-le — c'est une contrainte réelle qui oriente objectivement le choix. Notre comparatif React Native ou Flutter donne la grille de décision complète.",
  },
  {
    question: "À qui appartiennent le code et les comptes développeur ?",
    answer:
      "Par défaut… au prestataire, pour le code : en droit français, payer le développement ne transfère pas la propriété — il faut une clause de cession écrite et précise (droits énumérés, étendue, durée — article L131-3 du Code de la propriété intellectuelle), à exiger dès le cahier des charges. Pour les comptes développeur Apple (99 $/an) et Google Play (25 $ une fois) : ils doivent être ouverts au nom de votre entreprise, jamais à celui de l'agence — c'est votre identité sur les stores, avec l'historique et les avis attachés. Ces deux clauses transforment une dépendance en partenariat : écrivez-les noir sur blanc.",
  },
  {
    question: "Combien coûte une application mobile ?",
    answer:
      "Les fourchettes françaises 2026 qui font consensus : 5 000 à 15 000 € pour un MVP simple, 15 000 à 45 000 € pour une application métier complète, 40 000 à 150 000 € et plus pour un projet complexe (marketplace, temps réel, intégrations lourdes) — la médiane constatée tourne autour de 30 000 €. Ajoutez les frais récurrents : comptes développeur (99 $/an Apple, 25 $ une fois Google), et surtout la maintenance (15 à 20 % du coût initial par an), imposée par les cycles annuels d'Apple et Google. Notre guide du prix d'une application mobile décortique tout, devis réel compris.",
  },
  {
    question: "Qu'est-ce qu'un MVP et pourquoi commencer par là ?",
    answer:
      "Le MVP (produit minimum viable) est la première version de votre application, volontairement réduite aux fonctionnalités qui prouvent la valeur — assez pour être utilisée par de vrais utilisateurs, assez peu pour sortir vite et à budget contenu. Les chiffres plaident massivement pour cette approche : 80 % des fonctionnalités d'un logiciel moyen sont rarement ou jamais utilisées (étude Pendo), 46 % des applications sont désinstallées dans les 30 jours, et l'absence de besoin marché est la première cause d'échec des startups. Construire petit, mesurer, puis élargir sur des preuves : c'est la méthode MoSCoW de la section 4 — et chez nous, un MVP est sur les stores dès 12 semaines.",
  },
  {
    question: "Word ou PDF : sous quel format rédiger et envoyer le cahier des charges ?",
    answer:
      "Rédigez dans un format modifiable (Word, Google Docs) : le document vivra — les ateliers de cadrage l'affineront, les prestataires poseront des questions qui le préciseront. Envoyez en PDF pour les consultations : figé, propre, identique pour tous — condition d'une comparaison loyale des devis. Envoyez le même document à tous les prestataires consultés (trois est un bon nombre), avec la même fourchette de budget : c'est la seule façon d'obtenir des offres réellement comparables, en jours par poste plutôt qu'en forfaits opaques.",
  },
  {
    question: "Un cahier des charges généré par ChatGPT suffit-il ?",
    answer:
      "Il aide, et il ne suffit pas — voici la nuance honnête. L'IA excelle à structurer, reformuler et vous faire penser à des rubriques oubliées : utilisez-la comme assistant de rédaction. Ce qu'elle ne peut pas faire à votre place, et qui fait justement la valeur du document : les arbitrages (quelles fonctionnalités attendront la V2 — la décision qui fait le budget), le périmètre exclu (ce que l'application ne fera PAS, la clause anti-dérive), votre fourchette budgétaire réelle, et les critères d'acceptation mesurables (« l'app se charge en moins de 2 secondes sur un téléphone milieu de gamme »). Un document généré sans ces décisions ressemble à un cahier des charges ; il n'en a pas la fonction.",
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
          { label: "Cahier des charges d'application mobile" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Le modèle en 10 sections commenté de l'intérieur par une agence mobile, l'exemple rempli de bout en bout, les règles Apple et Google chiffrées et traduites en clauses à écrire, la maintenance que les modèles concurrents oublient — et les 7 erreurs qui ajoutent 30 à 50 % à la facture finale."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Même app : devis de 3 000 à 80 000 €", description: "", color: "violet" },
          { number: "02", title: "10 sections + exemple rempli", description: "", color: "blue" },
          { number: "03", title: "Stores : les règles chiffrées", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-une-application-mobile", label: "Combien coûte une application mobile ?" },
          { href: "/guides/cahier-des-charges-site-internet", label: "Cahier des charges de site internet" },
          { href: "/guides/react-native-ou-flutter", label: "React Native ou Flutter ?" },
          { href: "/guides/combien-coute-un-saas", label: "Combien coûte un SaaS ?" },
          { href: "/services/application-mobile", label: "Application mobile" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Cahier des charges d'app mobile : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Une agence française documente le cas sans le moindre
          embarras : <strong>pour la même fonctionnalité, un devis à
          3 000 € et un autre à 80 000 €</strong>. La différence
          n&apos;est pas la malhonnêteté — c&apos;est
          l&apos;interprétation d&apos;un besoin resté flou. Ce guide
          donne le modèle en 10 sections, l&apos;exemple rempli, et les
          règles des stores que 90 % des cahiers des charges ignorent.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. À quoi sert (vraiment) un cahier des charges d'app" },
            { id: "de-quoi-parle-t-on", label: "2. Ce qui change par rapport à un site web" },
            { id: "modele", label: "3. Le modèle en 10 sections" },
            { id: "remplir", label: "4. Sections 1 à 5 : cadrer le besoin (MoSCoW et MVP)" },
            { id: "specificites-techniques", label: "5. Les exigences proprement mobiles" },
            { id: "rgpd", label: "6. Données, consentement, accessibilité : le volet conformité" },
            { id: "stores", label: "7. La section stores : les règles Apple et Google, chiffrées" },
            { id: "maintenance", label: "8. La maintenance : la section que tous les modèles oublient" },
            { id: "exemple", label: "9. L'exemple rempli de bout en bout" },
            { id: "budget", label: "10. La section budget : pourquoi (et comment) annoncer sa fourchette" },
            { id: "erreurs", label: "11. Les 7 erreurs qui coûtent cher" },
            { id: "process", label: "12. Qui rédige, en combien de temps, pour combien" },
            { id: "declinaisons", label: "13. App web, PWA, SaaS : ce qui change au cahier des charges" },
            { id: "methode", label: "14. Méthode : du document au devis en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. À quoi sert (vraiment) un cahier des charges d&apos;app</h2>
        <p>
          Un cahier des charges d&apos;application mobile est le
          document qui décrit ce que votre application doit faire, pour
          qui, avec quelles contraintes et quel budget. Sa fonction
          économique tient en un chiffre : sans lui, les devis pour un
          même projet varient <strong>du simple au triple, et jusqu&apos;à
          l&apos;extrême documenté de 3 000 à 80 000 €</strong> pour la
          même fonctionnalité — chaque prestataire chiffrant le projet
          qu&apos;il imagine. Avec lui, les offres deviennent
          comparables ligne à ligne, les dérives de périmètre (30 à
          50 % de dépassement sur les projets flous) se préviennent au
          lieu de se subir, et le document devient la base
          contractuelle du projet. <strong>Dix pages bien structurées
          suffisent</strong> — ce guide vous les donne, section par
          section, avec un exemple rempli.
        </p>

        <InfoBox variant="blue" title="Les 12 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Cahier des charges (CDC)</strong> : le document qui décrit besoins, contraintes et budget — le langage commun entre vous et les prestataires.</li>
            <li><strong>MVP</strong> : la première version de l&apos;app, réduite à l&apos;essentiel pour sortir vite et apprendre.</li>
            <li><strong>MoSCoW</strong> : la méthode de priorisation — indispensable / important / souhaitable / exclu (pour l&apos;instant).</li>
            <li><strong>Stores</strong> : l&apos;App Store (Apple) et Google Play — les deux magasins, avec leurs règles et leurs commissions.</li>
            <li><strong>Review</strong> : l&apos;examen de votre app par Apple ou Google avant publication — avec de vrais motifs de rejet.</li>
            <li><strong>Wireframe (maquette fil de fer)</strong> : le plan schématique des écrans, avant le design — il va dans le CDC.</li>
            <li><strong>Notification push</strong> : le message envoyé sur l&apos;écran du téléphone — soumis à la permission de l&apos;utilisateur.</li>
            <li><strong>Mode hors-ligne</strong> : ce que l&apos;app sait faire sans réseau (chantier, parking souterrain, avion) — et comment elle se synchronise ensuite.</li>
            <li><strong>API / back-end</strong> : le moteur côté serveur qui stocke les données et alimente l&apos;app — souvent la moitié du budget.</li>
            <li><strong>Deep link</strong> : le lien qui ouvre directement un écran précis de l&apos;app (depuis un email, une pub).</li>
            <li><strong>CMP</strong> : la plateforme de gestion du consentement — le « bandeau cookies » version application.</li>
            <li><strong>Critère d&apos;acceptation</strong> : la condition mesurable qui dit « c&apos;est conforme » — la clause qui évite les litiges au moment de la recette. (En informatique, la « recette » n&apos;a rien à voir avec votre chiffre d&apos;affaires : c&apos;est la phase finale où vous testez l&apos;application livrée, écran par écran, avant de l&apos;accepter.)</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Ce qui change par rapport à un site web</h2>
        <p>
          Si vous avez déjà utilisé notre{" "}
          <Link href="/guides/cahier-des-charges-site-internet">modèle
          de cahier des charges de site internet</Link>, la structure
          vous sera familière — mais une application mobile ajoute
          cinq réalités qu&apos;aucun projet web ne connaît :{" "}
          <strong>deux gardiens privés</strong> (Apple et Google
          examinent, acceptent ou rejettent votre application — et
          prélèvent une commission sur les ventes numériques),{" "}
          <strong>un cycle de mise à jour imposé</strong> (chaque
          année, les stores exigent une recompilation — une app
          « finie » n&apos;existe pas), <strong>le hors-ligne</strong>{" "}
          (un site sans réseau est mort ; une app doit décider quoi
          faire), <strong>les permissions</strong> (notifications,
          localisation, caméra : autant de demandes que
          l&apos;utilisateur peut refuser) et{" "}
          <strong>l&apos;installation</strong> — qui se mérite : 46 %
          des applications installées sont désinstallées dans les
          30 jours. Ces cinq réalités traversent tout le modèle qui
          suit ; les ignorer, c&apos;est l&apos;erreur commune des
          modèles génériques recyclés du web.
        </p>
        <p>
          Fil rouge de ce guide : <strong>« Fleurs d&apos;Aix »,
          chaîne fictive de trois boutiques de fleuristes autour
          d&apos;Aix-les-Bains</strong>, qui veut son application de
          click-and-collect : commander son bouquet, choisir sa
          boutique, être notifié quand c&apos;est prêt. Un cas volontairement
          modeste et réaliste — c&apos;est lui que nous remplirons de
          bout en bout en section 9.
        </p>

        <h2 id="modele">3. Le modèle en 10 sections</h2>
        <p>
          Voici la structure complète — à copier telle quelle dans
          votre traitement de texte. Aucune adresse email à laisser,
          aucun formulaire : le modèle est ci-dessous, en clair,
          c&apos;est notre façon de faire. Les sections 1 à 5 cadrent
          le besoin (section 4 de ce guide), les sections 6 à 8
          couvrent les exigences proprement mobiles (sections 5 à 7),
          les sections 9 et 10 posent le cadre commercial —
          maintenance en section 8, budget en section 10 :
        </p>
        <GuideTable
          headers={["Section", "Contenu", "L'erreur qu'elle prévient"]}
          rows={[
            ["1. Contexte et objectifs", "Votre entreprise, le problème, 2-3 objectifs mesurables", "L'app « parce qu'il en faut une », sans critère de succès"],
            ["2. Cibles et usages", "Qui l'utilise, dans quelles situations (terrain, mobilité…)", "Concevoir pour soi plutôt que pour l'utilisateur"],
            ["3. Parcours clés", "Les 3-5 scénarios d'usage, écran par écran (wireframes bienvenus)", "Les écrans « évidents » que personne n'a décrits"],
            ["4. Fonctionnalités priorisées (MoSCoW)", "Indispensable / important / souhaitable / EXCLU de la V1", "Le périmètre qui gonfle — la cause n°1 des dépassements"],
            ["5. Plateformes et versions", "iOS/Android, versions minimales supportées, justifiées", "Le « compatible avec tout » impossible à chiffrer"],
            ["6. Exigences mobiles", "Hors-ligne, notifications, permissions, liens directs", "Les découvertes en cours de route facturées en avenants"],
            ["7. Données et conformité", "RGPD, consentement (CNIL), sécurité, accessibilité", "La mise en conformité d'urgence après un refus ou un contrôle"],
            ["8. Publication et stores", "Comptes (à VOTRE nom), review, commissions anticipées", "Le rejet de dernière minute et les comptes chez l'agence"],
            ["9. Prestations, planning, maintenance", "Qui fait quoi, jalons, garantie, maintenance 15-20 %/an", "L'app abandonnée qui disparaît des stores"],
            ["10. Budget et critères d'acceptation", "Fourchette assumée, conditions mesurables de recette", "Les devis incomparables et les litiges de fin de projet"],
          ]}
        />
        <p>
          Pour passer de la structure au document, recopiez sous
          chaque titre les questions de sa section — vos réponses SONT
          le cahier des charges :
        </p>
        <ol>
          <li><strong>Contexte</strong> : que fait votre entreprise, quel problème l&apos;app résout-elle, quels sont vos 2-3 objectifs chiffrés à 12 mois ?</li>
          <li><strong>Cibles</strong> : qui utilise l&apos;app (âge, contexte, aisance numérique), dans quelles situations concrètes ?</li>
          <li><strong>Parcours</strong> : quels sont les 3 à 5 scénarios d&apos;usage, écran par écran, du lancement à l&apos;objectif atteint ?</li>
          <li><strong>MoSCoW</strong> : pour chaque fonctionnalité — indispensable au premier jour, importante, souhaitable, ou exclue de la V1 ?</li>
          <li><strong>Plateformes</strong> : iOS, Android ou les deux ? À partir de quelles versions, et pourquoi ?</li>
          <li><strong>Exigences mobiles</strong> : que fait l&apos;app sans réseau ? Quand demande-t-elle chaque permission, pour quelle finalité ? Quels écrans s&apos;ouvrent par lien direct ?</li>
          <li><strong>Données</strong> : quelles données personnelles, hébergées où ? Mesure d&apos;audience (CMP) ? Suppression de compte prévue ?</li>
          <li><strong>Stores</strong> : comptes développeur au nom de qui ? Qui gère soumission et rejets ? La commission est-elle intégrée au modèle économique ?</li>
          <li><strong>Prestations</strong> : qui fait quoi (design, dev, recette, publication), à quelles dates, avec quelle garantie et quelle maintenance annuelle chiffrée ?</li>
          <li><strong>Budget</strong> : quelle fourchette assumez-vous, et quels critères mesurables déclencheront la recette ?</li>
        </ol>

        <h2 id="remplir">4. Sections 1 à 5 : cadrer le besoin (MoSCoW et MVP)</h2>
        <p>
          Le cœur du document est la <strong>section 4, la
          priorisation</strong> — et la méthode qui a fait ses preuves
          s&apos;appelle MoSCoW (créée en 1994 chez Oracle, adoptée
          partout depuis) : classez chaque fonctionnalité en{" "}
          <strong>Must have</strong> (sans elle, l&apos;app n&apos;a
          pas de sens — c&apos;est votre MVP),{" "}
          <strong>Should have</strong> (important, peut attendre
          quelques semaines), <strong>Could have</strong> (souhaitable
          si le budget suit) et <strong>Won&apos;t have</strong> —
          la catégorie la plus précieuse du document :{" "}
          <strong>ce que l&apos;application ne fera PAS dans cette
          version, écrit noir sur blanc</strong>. C&apos;est la clause
          anti-dérive : chaque « tant qu&apos;on y est » des mois
          suivants se confronte à cette liste plutôt qu&apos;au budget.
          Les chiffres justifient la sévérité : 80 % des
          fonctionnalités d&apos;un logiciel moyen sont rarement ou
          jamais utilisées (étude Pendo sur 615 logiciels), et
          l&apos;absence de besoin marché est la première cause
          d&apos;échec des projets. Pour la section 5 (plateformes),
          appuyez-vous sur le parc réel plutôt que sur
          l&apos;intuition : supporter les deux dernières versions
          majeures d&apos;iOS couvre l&apos;essentiel des iPhone
          (iOS 18 équipait 68 % du parc total un an après sa sortie,
          plus de 80 % ensuite) ; côté Android, plus fragmenté, fixez
          une version minimale et justifiez-la — votre prestataire
          saura traduire.
        </p>
        <p>
          Pour la section 3 (parcours), pas besoin d&apos;outils de
          designer : des croquis à main levée photographiés, ou un
          simple enchaînement d&apos;écrans décrit à l&apos;écrit
          (« écran 1 : liste des bouquets ; en touchant un bouquet →
          écran 2 : personnalisation »), suffisent largement.
          L&apos;objectif n&apos;est pas la beauté du document :
          c&apos;est de rendre visibles les écrans « évidents » que
          personne n&apos;a décrits — première source de malentendus
          entre ce que vous imaginez et ce que le prestataire chiffre.
        </p>

        <h2 id="specificites-techniques">5. Les exigences proprement mobiles</h2>
        <p>
          La section 6 du modèle est celle qui sépare un cahier des
          charges d&apos;application d&apos;un cahier des charges de
          site recyclé. Quatre sujets à trancher par écrit.{" "}
          <strong>Le hors-ligne</strong> : quels écrans doivent
          fonctionner sans réseau, et comment les données se
          synchronisent au retour — pour une app de terrain (chantier,
          livraison), c&apos;est souvent LE poste de complexité qui
          explique un devis. <strong>Les notifications push</strong> :
          depuis Android 13, elles exigent une permission explicite
          (désactivées par défaut !) ; les taux d&apos;acceptation
          médians sont d&apos;environ 81 % sur Android mais 51 % sur
          iPhone — votre stratégie d&apos;engagement doit vivre avec,
          et le CDC doit dire <em>quand</em> et <em>pourquoi</em>{" "}
          l&apos;app demandera la permission.{" "}
          <strong>Les permissions d&apos;appareil</strong>{" "}
          (localisation, caméra, contacts…) : chacune se justifie par
          une finalité écrite — règle d&apos;or : ne demander que ce
          que le parcours exige, au moment où il l&apos;exige.{" "}
          <strong>Les liens directs</strong> (deep links) : quels
          écrans doivent être accessibles depuis un email, une
          publicité ou un partage — à lister, car ils s&apos;anticipent
          dans l&apos;architecture.
        </p>

        <h2 id="rgpd">6. Données, consentement, accessibilité : le volet conformité</h2>
        <p>
          Trois obligations récentes que presque aucun modèle
          concurrent n&apos;intègre — et qui relèvent bien du cahier
          des charges, car elles se conçoivent, ne se rattrapent pas.{" "}
          <strong>La recommandation CNIL sur les applications mobiles</strong>{" "}
          (septembre 2024, contrôles annoncés dès 2025) : une
          permission technique (localisation, caméra) ne vaut pas
          consentement au sens du RGPD — la plupart des applications
          qui mesurent leur audience ou personnalisent des contenus
          ont besoin d&apos;une plateforme de gestion du consentement
          (CMP), le « bandeau cookies » version app.{" "}
          <strong>Les exigences des stores</strong> : Apple impose une
          politique de confidentialité et ses « étiquettes de
          confidentialité » sur la fiche App Store, plus la permission
          App Tracking Transparency avant tout suivi publicitaire
          inter-applications ; Google Play exige la section « Data
          safety » — toute divergence entre déclaration et
          comportement réel expose à des sanctions.{" "}
          <strong>L&apos;accessibilité</strong> : depuis le 28 juin
          2025, la réglementation européenne s&apos;applique aux
          applications des services couverts (e-commerce, banque,
          transport…) — critères WCAG 2.1 niveau AA. Reste la
          sécurité, quatrième sujet de la ligne 7 du modèle, expédié
          en une ligne de CDC : données chiffrées en transit et au
          repos, authentification proportionnée à la sensibilité des
          données, et paiement confié à un prestataire certifié
          (Stripe, Adyen…) — votre application ne stocke jamais un
          numéro de carte bancaire. Une ligne de cahier des charges
          par sujet suffit ; leur absence peut coûter un refus de
          publication ou un contrôle.
        </p>

        <h2 id="stores">7. La section stores : les règles Apple et Google, chiffrées</h2>
        <p>
          Le sujet que 90 % des cahiers des charges ignorent — et le
          tableau que vous ne trouverez nulle part ailleurs : chaque
          règle des stores, traduite en clause à écrire dans votre
          document.
        </p>
        <GuideTable
          headers={["La règle du store", "Le chiffre", "La clause à écrire dans le CDC"]}
          rows={[
            ["Comptes développeur", "Apple : 99 $/an · Google : 25 $ une fois", "« Comptes ouverts au nom de [votre entreprise], l'agence intervenant comme membre invité »"],
            ["Examen avant publication", "90 % des soumissions Apple examinées en moins de 24 h ; 1,93 million de rejets en 2024", "« Le prestataire gère les soumissions et corrige les motifs de rejet jusqu'à publication »"],
            ["Complétude exigée (guideline 2.1)", "Plus de 40 % des blocages en review : app incomplète, crashs, contenus factices", "« La V1 livrée est complète et testée — pas de version démo soumise »"],
            ["Valeur d'app exigée (guideline 4.2)", "Les sites web encapsulés sont refusés", "« L'app offre une expérience native : navigation, notifications, hors-ligne »"],
            ["Test fermé Google Play (comptes personnels créés depuis le 13 nov. 2023)", "12 testeurs pendant 14 jours avant production", "« Compte d'organisation utilisé » (non soumis à cette règle — un vrai argument pro-structure)"],
            ["Commissions sur ventes numériques", "15 % jusqu'à 1 M$/an, 30 % au-delà (Apple : sur inscription au Small Business Program ; Google : nouvelle grille annoncée en 2026)", "« Le modèle économique intègre la commission dans les prix » (biens physiques : non concernés)"],
            ["Suppression de compte obligatoire", "Exigée par Apple (guideline 5.1.1) et Google Play dès que l'app permet d'en créer un", "« L'app permet la suppression du compte et des données depuis l'app elle-même » — une fonctionnalité à chiffrer"],
            ["Connexion tierce (Google, Facebook…)", "Apple exige alors une option de connexion respectueuse de la vie privée (guideline 4.8)", "« Si une connexion sociale est proposée, Sign in with Apple est intégré » — motif de rejet classique"],
          ]}
        />
        <p>
          Précision utile pour Fleurs d&apos;Aix : la commission des
          stores frappe les <em>biens et services numériques</em> —
          pas les bouquets, biens physiques payés pour être retirés en
          boutique. Une nuance qui change le modèle économique et que
          le cahier des charges doit expliciter : c&apos;est
          typiquement le genre de ligne qui évite une mauvaise
          surprise à trois semaines du lancement.
        </p>
        <p>
          Dernière pièce du dispositif stores, à relier à la section 9
          du modèle : <strong>les tests avant publication</strong>.
          Les deux plateformes fournissent des circuits officiels —
          TestFlight chez Apple (jusqu&apos;à 10 000 testeurs
          externes), les pistes de test internes et fermées chez
          Google Play — qui mettent la version candidate entre les
          mains de vrais utilisateurs, sur leurs vrais téléphones,
          avant le grand public. La clause à écrire : « la recette se
          déroule sur les circuits de test officiels des stores, avec
          un accès pour les testeurs désignés par le client » — et non
          sur des fichiers d&apos;installation échangés par email,
          pratique fragile et non conforme aux conditions des stores.
          C&apos;est aussi le meilleur moment pour dérouler vos
          critères d&apos;acceptation de la section 10, écran par
          écran.
        </p>

        <GuideInlineCTA
          title="Un cahier des charges à faire relire — ou à construire en atelier ?"
          description="Envoyez-nous votre projet ou votre brouillon en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, avec un avis franc sur le périmètre, une fourchette argumentée — et notre Discovery Sprint transforme le tout en CDC complet, maquettes et devis au forfait fixe en 2 jours."
          tags={["Réponse sous 24 h ouvrées", "MVP sur les stores dès 12 semaines", "Comptes stores à votre nom, code cédé"]}
        />

        <h2 id="maintenance">8. La maintenance : la section que tous les modèles oublient</h2>
        <p>
          Aucun des modèles concurrents que nous avons analysés ne
          contient de section maintenance — c&apos;est pourtant la
          plus lourde de conséquences. Les faits :{" "}
          <strong>Apple et Google imposent un cycle annuel</strong>{" "}
          (recompilation avec les derniers outils côté Apple, ciblage
          de la dernière version d&apos;Android côté Google Play — les
          applications qui ne suivent pas deviennent invisibles pour
          les nouveaux utilisateurs). <strong>Une application non
          maintenue disparaît</strong> : le programme officiel
          d&apos;Apple retire les apps sans mise à jour depuis 3 ans
          et quasiment plus téléchargées — environ 2,8 millions
          d&apos;applications ont déjà été retirées par ce processus —
          et fin 2023, 1,89 million d&apos;applications
          « abandonnées » encombraient encore les stores en sursis. Le
          budget qui découle : <strong>15 à 20 % du coût de
          développement par an</strong>, à écrire dans la section 9 du
          modèle avec son contenu (mises à jour OS, correctifs,
          surveillance) et sa gouvernance (qui décide, qui paie, sous
          quel délai). Un prestataire qui ne provisionne pas ce poste
          dans son offre ne vous vend pas une application : il vous
          vend un compte à rebours — c&apos;est la raison pour laquelle
          notre offre{" "}
          <Link href="/services/application-mobile">application
          mobile</Link> chiffre la maintenance annuelle dès le devis
          initial. La clause à recopier dans la
          section 9 de votre document : « Le devis inclut une offre de
          maintenance annuelle chiffrée séparément, couvrant les mises
          à jour imposées par les cycles Apple et Google, les
          correctifs et la surveillance, avec un délai
          d&apos;intervention contractuel pour les incidents
          bloquants ».
        </p>

        <h2 id="exemple">9. L&apos;exemple rempli de bout en bout</h2>
        <p>
          Le voici — le livrable qu&apos;aucun concurrent
          n&apos;offre : le cahier des charges de Fleurs d&apos;Aix,
          condensé section par section. Multipliez les détails par
          trois pour votre vrai document ; la logique, elle, est
          complète :
        </p>
        <GuideTable
          headers={["Section", "Fleurs d'Aix — condensé"]}
          rows={[
            ["1. Contexte, objectifs", "3 boutiques, 40 % d'appels pour commander. Objectifs : 30 % des commandes via l'app en 12 mois, -50 % d'appels, panier moyen +10 %"],
            ["2. Cibles", "Clients fidèles 30-65 ans (persona « Sophie, 42 ans, commande pour les anniversaires ») ; entreprises locales (bouquets hebdo)"],
            ["3. Parcours clés", "Commander un bouquet (catalogue → personnalisation → boutique → paiement) ; suivre « prêt à retirer » (notification) ; commande récurrente pro"],
            ["4. MoSCoW", "MUST : catalogue, commande, paiement, notifications, back-office simple (l'écran de gestion des commandes côté boutique). SHOULD : comptes fidélité. COULD : abonnement hebdo pro. WON'T (V1) : livraison à domicile, chat, parrainage"],
            ["5. Plateformes", "iOS (2 dernières versions majeures) + Android (version minimale justifiée par le parc clients) — multiplateforme accepté, technologie proposée par le prestataire"],
            ["6. Exigences mobiles", "Hors-ligne : consultation du catalogue uniquement. Push : permission demandée à la 1re commande, pas à l'ouverture. Deep links : promotions saisonnières"],
            ["7. Données", "Compte client minimal (email, tél), CMP pour la mesure d'audience, données hébergées UE, politique de confidentialité fournie par nous"],
            ["8. Stores", "Comptes Apple/Google au nom de Fleurs d'Aix SARL. Biens physiques : pas de commission stores sur les ventes. Fiche store rédigée par le prestataire"],
            ["9. Prestations, maintenance", "Design + dev + recette + publication. Garantie corrective exigée au devis (30 à 90 jours constatés selon les prestataires). Maintenance : forfait annuel chiffré au devis (cible : ~15 %/an), mises à jour OS comprises"],
            ["10. Budget, acceptation", "Fourchette annoncée : 20 000 – 28 000 €. Acceptation : parcours de commande complet en boutique réelle, chargement < 2 s sur mobile milieu de gamme, 0 bug bloquant"],
          ]}
        />
        <p>
          Trois détails de ce condensé valent la peine d&apos;être
          soulignés, car ils font la différence entre un document
          décoratif et un outil : le <strong>« WON&apos;T » écrit</strong>{" "}
          (la livraison à domicile attendra les preuves — moitié du
          budget économisée), la <strong>demande de permission push
          placée au bon moment</strong> (à la première commande, quand
          la valeur est évidente — pas à l&apos;ouverture, où 49 % des
          iPhone refusent), et des <strong>critères
          d&apos;acceptation mesurables</strong> — la clause qui
          transforme la recette de « discussion » en « constat ».
        </p>
        <p>
          Épilogue du fil rouge — et démonstration finale de
          l&apos;utilité du document : Fleurs d&apos;Aix envoie ce PDF
          de neuf pages à trois prestataires, avec la même fourchette.
          Les trois devis reviennent entre 19 500 et 26 800 €,
          comparables ligne à ligne, jours par poste, maintenance
          chiffrée — et se départagent sur les critères
          d&apos;acceptation, pas sur le prix seul. Sans le document,
          rappelez-vous le point de départ de ce guide : pour un même
          besoin décrit oralement, l&apos;écart constaté va de 3 000 à
          80 000 €. Le cahier des charges n&apos;a pas seulement cadré
          le projet — il a rendu la concurrence possible.
        </p>

        <h2 id="budget">10. La section budget : pourquoi (et comment) annoncer sa fourchette</h2>
        <p>
          C&apos;est le débat qui fâche — tranchons-le avec la
          logique du marché. Ne pas annoncer de budget ne le protège
          pas : cela garantit des devis incomparables, chaque
          prestataire imaginant un projet différent (relire
          l&apos;écart 3 000 – 80 000 €). Annoncer une fourchette
          honnête <em>filtre</em> : à 10 000 €, un prestataire sérieux
          propose un MVP resserré ; à 40 000 €, une application
          complète — et celui qui promet la totale à 8 000 € se
          disqualifie de lui-même. Pour calibrer votre fourchette,
          les repères français 2026 : <strong>5 000 à 15 000 € pour
          un MVP simple, 15 000 à 45 000 € pour une application
          métier complète, 40 000 à 150 000 € et plus pour un projet
          complexe</strong> — médiane constatée autour de 30 000 €,
          maintenance (15-20 %/an) et budget de lancement marketing en
          sus. Le détail poste par poste, devis réel décortiqué
          compris, est dans notre{" "}
          <Link href="/guides/combien-coute-une-application-mobile">guide
          du prix d&apos;une application mobile</Link> — les deux
          documents sont faits pour être utilisés ensemble. Dernier
          réflexe de calibrage : raisonnez en <strong>coût total sur
          trois ans</strong> — comptez 1,5 à 1,8 fois le budget de
          développement une fois ajoutés la maintenance,
          l&apos;hébergement du back-end et les comptes développeur —
          et écrivez ce chiffre dans le document : c&apos;est lui, pas
          le devis initial, que votre trésorerie rencontrera.
        </p>

        <h2 id="erreurs">11. Les 7 erreurs qui coûtent cher</h2>
        <ul>
          <li>
            <strong>Le périmètre-cathédrale.</strong> 80 fonctionnalités
            « toutes indispensables » : impossible à chiffrer, voué à
            l&apos;abandon — 80 % des fonctionnalités d&apos;un
            logiciel ne servent presque jamais. Le MoSCoW est votre
            garde-fou.
          </li>
          <li>
            <strong>Imposer la solution technique.</strong>{" "}
            « Développement Flutter obligatoire » sans raison : vous
            limitez les candidats et importez le biais d&apos;un
            conseil antérieur. Décrivez les besoins ; exigez que la
            techno soit proposée et justifiée.
          </li>
          <li>
            <strong>Oublier le marketing.</strong> Une app ne se
            découvre pas toute seule : l&apos;acquisition coûte 2 à
            4 $ par installation en Europe, et un lancement sérieux se
            budgète à part — le poste absent de 100 % des modèles
            concurrents, et de la plupart des business plans.
          </li>
          <li>
            <strong>Cacher le budget.</strong> Voir section 10 — la
            peur de « se faire facturer au max » produit exactement
            l&apos;inverse : des offres incomparables.
          </li>
          <li>
            <strong>Zapper la maintenance.</strong> 15-20 %/an imposés
            par les cycles Apple/Google — sans cette ligne, votre app
            a une date de péremption (section 8).
          </li>
          <li>
            <strong>Négliger la propriété.</strong> Code sans clause de
            cession écrite = code du prestataire (article L131-3 du
            Code de la propriété intellectuelle) ; comptes stores au
            nom de l&apos;agence = identité captive. Deux lignes de
            CDC les évitent — les voici, à recopier : « Le prestataire
            cède au client, au fur et à mesure des paiements,
            l&apos;ensemble des droits patrimoniaux (reproduction,
            représentation, adaptation) sur les développements
            réalisés, pour toute la durée légale des droits et pour
            tous pays » et « Les comptes développeur Apple et Google
            Play sont ouverts au nom de [votre entreprise], seule
            titulaire, l&apos;agence intervenant comme membre
            invité ».
          </li>
          <li>
            <strong>Confondre document et décision.</strong> Un CDC
            généré par IA en 20 minutes ressemble à un cahier des
            charges — mais les arbitrages (le WON&apos;T, la
            fourchette, les critères d&apos;acceptation) n&apos;y sont
            pas, et ce sont eux qui font la valeur du document (la FAQ
            y répond en détail).
          </li>
        </ul>

        <h2 id="process">12. Qui rédige, en combien de temps, pour combien</h2>
        <p>
          Trois chemins, du plus autonome au plus accompagné.{" "}
          <strong>Seul, avec ce modèle</strong> : 2 à 4 semaines de
          calendrier par touches — 10 à 15 jours de travail réel pour
          un projet simple ; c&apos;est vous qui connaissez le métier,
          et un bon modèle fait gagner 1 à 2 semaines.{" "}
          <strong>Accompagné d&apos;un consultant</strong> (AMOA —
          assistance à maîtrise d&apos;ouvrage) : 450 à 890 €/jour,
          pertinent sur les projets à intégrations multiples ou à
          parties prenantes nombreuses. <strong>En atelier avec
          l&apos;agence</strong> : la plupart des prestataires
          français n&apos;exigent pas un CDC finalisé — la phase de
          cadrage (ateliers, maquettes fil de fer, chiffrage) est
          souvent incluse et produit le document fonctionnel que vous
          validez. C&apos;est notre format : le{" "}
          <strong>Discovery Sprint</strong> compresse ce cadrage en
          2 jours. Sur la confidentialité, enfin : les agences
          sérieuses signent un NDA — un accord de
          confidentialité — sans discuter (faites signer
          l&apos;entreprise, pas les individus), l&apos;enveloppe
          e-Soleau de l&apos;INPI date vos documents pour quelques
          dizaines d&apos;euros — et rappelez-vous que la vraie
          protection d&apos;une idée est la vitesse d&apos;exécution,
          pas le secret.
        </p>

        <h2 id="declinaisons">13. App web, PWA, SaaS : ce qui change au cahier des charges</h2>
        <p>
          Votre projet est peut-être une application <em>web</em> —
          utilisable dans le navigateur — ou un SaaS (un logiciel en
          ligne, facturé par abonnement) plutôt qu&apos;une app des
          stores. Le modèle reste valable à 80 % ;
          voici les sections à permuter. <strong>Exit la section
          stores</strong> (pas de comptes développeur, pas de review,
          pas de commission — l&apos;économie et la liberté sont
          réelles) ; à la place, une section{" "}
          <strong>navigateurs et écrans</strong> : quels navigateurs
          supportés, quel comportement du mobile au grand écran.{" "}
          <strong>La PWA</strong> — le site installable qui ressemble
          à une app — mérite sa ligne : pas de stores non plus, mais
          des limites à écrire (notifications restreintes sur iPhone,
          supportées seulement depuis iOS 16.4 et pour les web apps
          installées). <strong>Le SaaS</strong> ajoute ses sections
          propres : hébergement et localisation des données (France/UE
          — l&apos;argument RGPD), rôles et permissions
          multi-utilisateurs, intégrations tierces (paiement, CRM,
          facturation) et critères de disponibilité — le cadre exact de
          nos projets{" "}
          <Link href="/services/saas-applications-metier">SaaS et
          applications métier</Link>. Les budgets
          correspondants sont dans nos guides{" "}
          <Link href="/guides/combien-coute-un-saas">« combien coûte
          un SaaS »</Link> et{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">« prix
          d&apos;un logiciel sur mesure »</Link> — la méthode de ce
          guide s&apos;applique à l&apos;identique.
        </p>

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>3 000 → 80 000 €</strong> : l&apos;écart de devis documenté pour une même fonctionnalité mal décrite — la raison d&apos;être du cahier des charges.</li>
            <li><strong>10 sections, ~10 pages</strong> : le format qui suffit — 60 % du volume sur les fonctionnalités et parcours.</li>
            <li><strong>99 $/an + 25 $</strong> : les comptes développeur Apple et Google — à ouvrir au nom de VOTRE entreprise, jamais de l&apos;agence.</li>
            <li><strong>15 – 20 %/an</strong> : la maintenance imposée par les cycles des stores — la section que tous les modèles concurrents oublient.</li>
            <li><strong>80 %</strong> : la part des fonctionnalités rarement ou jamais utilisées d&apos;un logiciel moyen — l&apos;argument définitif du MVP et du « WON&apos;T » écrit.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">14. Méthode : du document au devis en 5 étapes</h2>
        <ol>
          <li>
            <strong>Remplissez les sections 1 à 4 seul</strong> —
            contexte, cibles, parcours, MoSCoW. C&apos;est votre
            métier, personne ne le fera mieux, et c&apos;est 60 % de
            la valeur du document.
          </li>
          <li>
            <strong>Passez les sections 5 à 8 de votre document avec
            ce guide ouvert</strong> — plateformes, exigences mobiles,
            conformité, stores : les clauses entre guillemets du
            tableau des stores (partie 7 de ce guide) se recopient
            telles quelles, exigences mobiles et conformité
            (parties 5 et 6) se traduisent en une ligne chacune.
          </li>
          <li>
            <strong>Assumez la section budget</strong> — fourchette
            calibrée sur les repères de la section 10, maintenance
            comprise. C&apos;est un filtre, pas une faiblesse.
          </li>
          <li>
            <strong>Envoyez le même PDF à trois prestataires</strong> —
            avec les mêmes questions : jours par poste, technologie
            proposée et justifiée, propriété du code et des comptes,
            maintenance chiffrée.
          </li>
          <li>
            <strong>Comparez sur les critères d&apos;acceptation</strong>,
            pas sur le prix seul — l&apos;offre la moins chère sans
            engagement mesurable est la plus chère des trois.
          </li>
        </ol>
        <p>
          Et si vous préférez construire le document à deux : notre{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 %
          si le projet se lance)</strong> produit le cahier des charges
          fonctionnel complet, les maquettes des écrans clés et un
          devis au forfait fixe — puis un{" "}
          <strong>MVP sur les stores dès 12 semaines</strong>, code
          cédé et comptes développeur à votre nom (méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>).{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées,
          gratuite et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://developer.apple.com/programs/" target="_blank" rel="noopener noreferrer">Apple Developer Program (99 $/an)</a> ;{" "}
          <a href="https://developer.apple.com/distribute/app-review/" target="_blank" rel="noopener noreferrer">Apple, App Review (90 % en moins de 24 h ; guidelines 2.1, 4.2, 4.8 et 5.1.1)</a> ;{" "}
          <a href="https://www.apple.com/legal/more-resources/docs/2024-App-Store-Transparency-Report.pdf" target="_blank" rel="noopener noreferrer">Apple, App Store Transparency Report 2024 (1,93 M de rejets)</a> ;{" "}
          <a href="https://developer.apple.com/support/app-store-improvements/" target="_blank" rel="noopener noreferrer">Apple, App Store Improvements (retrait des apps non maintenues)</a> ;{" "}
          <a href="https://support.google.com/googleplay/android-developer/answer/14151465" target="_blank" rel="noopener noreferrer">Google Play, exigences de test des nouveaux comptes personnels (12 testeurs / 14 jours)</a> ;{" "}
          <a href="https://support.google.com/googleplay/android-developer/answer/11131145" target="_blank" rel="noopener noreferrer">Google Play, frais de service (15 % / 30 %)</a> ;{" "}
          <a href="https://support.google.com/googleplay/android-developer/answer/11926878" target="_blank" rel="noopener noreferrer">Google Play, exigences de niveau d&apos;API</a> ;{" "}
          <a href="https://developer.android.com/develop/ui/views/notifications/notification-permission" target="_blank" rel="noopener noreferrer">Android, permission de notification (Android 13+)</a> ;{" "}
          <a href="https://www.cnil.fr/fr/recommandations-applications-mobiles" target="_blank" rel="noopener noreferrer">CNIL, recommandation applications mobiles (sept. 2024)</a> ;{" "}
          <a href="https://developer.apple.com/app-store/user-privacy-and-data-use/" target="_blank" rel="noopener noreferrer">Apple, App Tracking Transparency</a> ;{" "}
          <a href="https://www.pendo.io/resources/the-2019-feature-adoption-report/" target="_blank" rel="noopener noreferrer">Pendo, Feature Adoption Report (80 % de fonctionnalités peu utilisées)</a> ;{" "}
          <a href="https://www.appsflyer.com/resources/reports/app-uninstall-benchmarks-report/" target="_blank" rel="noopener noreferrer">AppsFlyer, App Uninstall Report (46 % sous 30 jours)</a> ;
          Pixalate (1,89 M d&apos;apps abandonnées) ; CB Insights
          (causes d&apos;échec) ; Airship (opt-in notifications
          81 %/51 % — médianes) ; benchmarks d&apos;adoption iOS
          (chiffres officiels Apple relayés par TechCrunch) ;
          Légifrance (art. L111-1 et L131-3 CPI) ; méthode MoSCoW (Dai
          Clegg, 1994) ; écarts de devis et fourchettes 2026 :
          FirstApp, WebTech, La Fabrique du Net, MaxApp, TikupMedia,
          Aquilapp (recoupements) ; European Accessibility Act
          (directive 2019/882, EN 301 549). Les règles des stores
          évoluent : vérifiez les pages officielles avant de publier.
        </p>
        <p className="text-sm">
          <em>
            Ce modèle et ces fourchettes sont fournis à titre
            indicatif : seul un devis établi sur votre périmètre vous
            engage. Le volet juridique (cession de droits, NDA,
            clauses) ne constitue pas un conseil juridique
            personnalisé — pour un contrat, consultez un avocat. App
            Store et TestFlight sont des marques d&apos;Apple ; Google
            Play est une marque de Google.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
