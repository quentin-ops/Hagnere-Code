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

const guide = getGuide("agence-web-ou-freelance");

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
  wordCount: 4685,
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
      "Freelancing",
      "React",
      "Next.js",
      "Contrats de prestation",
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
      name: "Agence web ou freelance",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Agence web ou freelance : que choisir pour créer son site internet ?",
    answer:
      "La bonne réponse dépend de trois curseurs, pas d'un camp : le budget, la criticité du site et l'horizon. En dessous de 3 000 € : un freelance sur un périmètre court et standard, en acceptant les risques de continuité. Entre 3 000 et 8 000 € : freelance senior ou entrée d'agence, selon que le site est vital ou non pour votre activité. Entre 8 000 et 15 000 € : zone de convergence — les prix se rejoignent, le choix se fait sur la continuité, la pluridisciplinarité et les garanties contractuelles. Au-delà de 15 000 € (e-commerce sur mesure, application) : une équipe structurée devient quasi obligatoire. Et dans TOUS les cas : cession de droits écrite, accès au code, réversibilité — la grille complète est dans ce guide.",
  },
  {
    question: "Pourquoi un freelance est-il moins cher qu'une agence web ?",
    answer:
      "Trois raisons structurelles, toutes vérifiables. Ses charges : pas de locaux, pas de fonction commerciale ni administrative dédiée — le taux journalier ne porte que lui. Son régime fiscal : sous 37 500 € de chiffre d'affaires annuel (seuil 2026), un micro-entrepreneur facture sans TVA — un « rabais » de 20 % réel pour un client non assujetti, mais neutre pour une entreprise qui récupère la TVA, nuance que les comparatifs oublient. Son périmètre : les petits prix freelance (800-2 500 € un site vitrine) correspondent à des projets courts, souvent sur thème WordPress. À périmètre et séniorité égaux, l'écart fond : un freelance confirmé au TJM médian (~530 €/jour) facture 8 000 à 13 000 € un site professionnel de 15 à 25 jours — le prix d'entrée d'une agence sur mesure.",
  },
  {
    question: "Une agence web est-elle vraiment plus chère qu'un freelance ?",
    answer:
      "Le « 30 à 50 % plus cher » qui circule partout ne repose sur aucune étude comparant des devis à périmètre identique — nous l'avons cherchée. Ce qui est vrai : à petit périmètre standard, le freelance gagne presque toujours sur le prix affiché. Ce qui l'est aussi : l'écart se resserre à mesure que le projet grossit, et le prix de création n'est pas le coût total — ajoutez la maintenance, les évolutions, et le coût d'une reprise si le prestataire disparaît (recréation partielle, rétro-ingénierie d'un code non documenté). La vraie comparaison se fait sur 3 ans, garanties comprises — c'est l'objet de la section coût total de ce guide.",
  },
  {
    question: "Quel est le TJM d'un développeur web freelance ?",
    answer:
      "Selon les baromètres 2025-2026 : un développeur fullstack JavaScript facture 330 à 450 €/jour en junior, 400 à 500 € en confirmé et 450 à 600 € en senior à Paris (comptez 10 à 20 % de moins en régions — baromètre SILKHOM, fondé sur plus de 20 000 placements réels). La médiane agrégée tourne autour de 530 €/jour pour un fullstack confirmé (TJMètre, 20 000+ observations). Attention aux écarts entre baromètres : Morgan Philips annonce 700-800 € pour le même profil « confirmé » — parce qu'il mesure des missions grands comptes via cabinet, pas le marché des TPE-PME. Un TJM ne se lit jamais sans sa méthodologie ; ce guide explique la divergence, et comment convertir un TJM en budget de projet.",
  },
  {
    question: "Est-ce risqué de confier son site à un freelance ?",
    answer:
      "Pas intrinsèquement — mais le risque se mesure et se contractualise. Le chiffre officiel que personne ne cite : sur les micro-entrepreneurs immatriculés en 2018 ayant réellement démarré, 39 % seulement étaient encore actifs 5 ans après, et environ 27 % dans l'information-communication (INSEE, 2025). Nuance honnête : cette statistique couvre tout le régime micro, débutants inclus — un freelance senior installé, avec des clients récurrents, n'a pas ce profil de risque. La vraie protection n'est pas de fuir les freelances : c'est le contrat (cession de droits, code documenté et remis, accès à l'hébergement à votre nom) qui rend n'importe quel prestataire remplaçable. Un site bien contractualisé survit à son développeur.",
  },
  {
    question: "Que se passe-t-il si mon freelance disparaît ou arrête son activité ?",
    answer:
      "Tout dépend de ce que vous possédez au moment où il disparaît. Scénario noir — le plus fréquent dans les litiges : domaine enregistré au nom du prestataire, hébergement sur son compte, code jamais remis ni documenté — vous repartez de zéro, ou presque. Scénario maîtrisé : domaine et hébergement à VOTRE nom, code remis sur un dépôt Git vous appartenant, cession de droits signée, documentation à jour — n'importe quel autre développeur reprend le projet en quelques jours. La différence entre les deux ne coûte rien au moment de signer : c'est une liste de clauses, détaillée dans la section propriété de ce guide. Exigez-la d'un freelance COMME d'une agence — les agences aussi ferment.",
  },
  {
    question: "À qui appartient le code source de mon site ?",
    answer:
      "Par défaut : à celui qui l'a écrit — pas à celui qui l'a payé. Le Code de la propriété intellectuelle est sans ambiguïté : l'auteur détient les droits du seul fait de la création (article L111-1), et payer une prestation n'y change rien. Subtilité méconnue : pour les salariés d'une agence, les droits sur le logiciel remontent automatiquement à l'employeur (article L113-9) — l'agence peut donc les céder proprement ; un freelance, lui, reste personnellement titulaire. Dans les deux cas, une seule protection : la clause de cession écrite, énumérant chaque droit cédé avec son étendue et sa durée (article L131-3). Sans elle, vous ne possédez pas le site que vous avez payé — que le prestataire soit freelance ou agence.",
  },
  {
    question: "Est-ce que les agences web sous-traitent à des freelances ?",
    answer:
      "Certaines, oui — parfois à l'autre bout du monde, avec une marge de 2 à 3 fois, ce qui invalide tout le comparatif de prix que vous croyez faire. Aucune statistique fiable n'existe sur l'ampleur du phénomène (les pourcentages qui circulent ne sont pas sourcés), mais la parade juridique, elle, est solide et méconnue : la loi du 31 décembre 1975 sur la sous-traitance (article 3) vous donne le droit d'accepter chaque sous-traitant et d'agréer ses conditions de paiement. En pratique, cinq questions en rendez-vous suffisent : qui écrit le code, où, puis-je le rencontrer, qui répond aux demandes après livraison, et la sous-traitance figure-t-elle au contrat ? Un prestataire sérieux répond sans détour — chez nous : l'équipe qui vend est l'équipe qui code, en Savoie.",
  },
  {
    question: "Comment savoir si mon agence web m'arnaque ?",
    answer:
      "Les signaux d'alarme documentés par les litiges français : un contrat de LOCATION de site sur 36 à 48 mois irrévocable (souvent revendu à un organisme de financement — vous payez même si le site ne vous convient plus), un site « offert » ou « partenariat » qui cache cet engagement, un nom de domaine enregistré au nom de l'agence, aucun accès à votre hébergement ni à votre code, et des frais de sortie dissuasifs. Aucun de ces montages n'est le fait des agences sérieuses — mais ils ont fait assez de dégâts pour remplir les forums. Le test simple avant de signer : « si je pars dans un an, qu'est-ce que j'emporte, et pour combien ? » La réponse doit être écrite au contrat.",
  },
  {
    question: "Un freelance facture-t-il la TVA ?",
    answer:
      "Pas nécessairement — et c'est un vrai facteur de prix, mal compris. Un micro-entrepreneur sous 37 500 € de chiffre d'affaires annuel (seuil de la franchise en base, confirmé pour 2026) facture sans TVA : son devis « 3 000 € » est un net, là où le devis agence « 3 000 € HT » vous coûte 3 600 € TTC. Mais la nuance change tout selon votre statut : si votre entreprise récupère la TVA, l'avantage disparaît complètement — vous comparez alors du hors-taxes à du hors-taxes. Si vous êtes non assujetti (auto-entrepreneur, certaines professions), le freelance en franchise a un avantage réel de 20 %. Vérifiez aussi le plafond global : au-delà de 83 600 € de chiffre d'affaires services (2026), le régime micro cède — signe, au passage, qu'un freelance solo a une capacité de production structurellement bornée.",
  },
  {
    question: "Quelles garanties demander pour la création d'un site internet ?",
    answer:
      "Six clauses à comparer chez un freelance comme une agence : droits cédés et exclusions ; remise du dépôt et des accès ; domaine et hébergement ; recette et période corrective ; objectifs de performance avec protocole ; délai d'intervention si une maintenance est prévue. Chez Hagnéré Code, ces éléments ne valent que s'ils figurent dans le devis signé.",
  },
  {
    question: "Un freelance peut-il gérer un site e-commerce complet ?",
    answer:
      "Un site e-commerce sur plateforme (Shopify, WooCommerce) au périmètre standard : oui, un freelance senior le fait très bien. Un e-commerce sur mesure ou une application avec paiement, stocks, intégrations : la question devient structurelle. Comptez 30 à 80 jours-homme et plusieurs métiers (design, développement, tests, sécurité) — or un solo dispose d'environ 100 à 120 jours facturables par an, tous clients confondus, et le régime micro le plafonne à 83 600 € de chiffre d'affaires. Ce n'est pas une question de talent mais d'arithmétique : au-delà d'un certain périmètre, il faut une équipe — agence, collectif de freelances outillé, ou binôme senior — avec un contrat qui nomme qui fait quoi.",
  },
  {
    question: "L'IA a-t-elle fait baisser le prix des sites internet ?",
    answer:
      "Elle a fait baisser le coût de PRODUCTION — les prix affichés, c'est une autre histoire. L'étude contrôlée de GitHub mesure une tâche de développement standard réalisée 55 % plus vite avec assistance IA ; ce gain bénéficie aux freelances comme aux agences, et il a resserré l'écart entre le site sur thème (modèle prêt à l'emploi) et le sur-mesure. Mais la seule étude de prix publique (Digital Applied, 2026) montre que la plupart des prestataires gardent le gain en marge plutôt que de baisser leurs tarifs. Notre choix est inverse et public : vitrine sur mesure dès 6 900 €, e-commerce dès 15 000 € — des périmètres facturés bien plus cher il y a trois ans. La bonne question à poser à tout prestataire en 2026 : « utilisez-vous l'IA, et où va le gain ? »",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Agence web ou freelance" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Presque tous les comparatifs « agence ou freelance » sont écrits par l'un des deux camps — celui-ci aussi, et c'est écrit dessus. La différence : des TJM (les taux journaliers des indépendants) sourcés, le risque de disparition chiffré par l'INSEE, la propriété du code expliquée articles de loi à l'appui, la sous-traitance déguisée démontée — et une grille de décision par budget, pas un plaidoyer."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "TJM médian confirmé : ~530 €/jour", description: "", color: "violet" },
          { number: "02", title: "39 % de micro-entrepreneurs actifs à 5 ans", description: "", color: "blue" },
          { number: "03", title: "Le code appartient à qui l'écrit (L111-1)", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/cahier-des-charges-site-internet", label: "Cahier des charges de site internet" },
          { href: "/guides/combien-de-temps-pour-creer-un-site", label: "Combien de temps pour créer un site ?" },
          { href: "/guides/creer-un-site-avec-ia", label: "Créer un site avec l'IA" },
          { href: "/guides/cout-maintenance-site-internet", label: "Coût de la maintenance" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Agence ou freelance : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Cherchez « agence web ou freelance » : vous trouverez des
          freelances qui concluent « prenez un freelance » et des
          agences qui concluent « prenez une agence » — 8 pages sur 10
          sans un seul chiffre. <strong>Nous sommes une agence, le
          biais est déclaré</strong> ; voici, chiffres sourcés à
          l&apos;appui, la grille que nous aurions voulu trouver.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. De qui parle-t-on vraiment (et d'où vient le biais)" },
            { id: "prix-reels", label: "3. Les TJM réels — et pourquoi les baromètres se contredisent" },
            { id: "arithmetique", label: "4. L'arithmétique qui resserre l'écart de prix" },
            { id: "capacite", label: "5. Ce qu'un solo peut absorber : les plafonds, noir sur blanc" },
            { id: "continuite", label: "6. « Et s'il disparaît ? » : le risque enfin chiffré" },
            { id: "sous-traitance", label: "7. L'agence-coquille et la sous-traitance déguisée" },
            { id: "propriete", label: "8. À qui appartient le code : le trio Légifrance" },
            { id: "arnaques", label: "9. Reconnaître un prestataire sérieux (les signaux d'alarme)" },
            { id: "troisieme-voie", label: "10. Collectifs, portage, studio senior : les troisièmes voies" },
            { id: "clauses-techniques", label: "11. Les engagements mesurables à exiger" },
            { id: "tco", label: "12. Le coût total sur 3 ans, dans les deux sens" },
            { id: "verdict-par-profil", label: "13. La grille de décision par budget" },
            { id: "methode", label: "14. Méthode : choisir en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          En 2026, <strong>la question « agence ou freelance » se
          tranche sur trois curseurs — budget, criticité, horizon —,
          pas sur un camp</strong>. Les repères chiffrés : un
          développeur web freelance confirmé facture{" "}
          <strong>autour de 530 €/jour</strong> (médiane des baromètres
          2025-2026) ; un site professionnel de 15 à 25 jours lui
          revient donc à <strong>8 000 à 13 000 €</strong> — le prix
          d&apos;entrée d&apos;une agence sur mesure. L&apos;écart de
          prix, réel sur les petits périmètres, <strong>s&apos;évapore
          à séniorité et périmètre égaux</strong>. Restent les vraies
          différences : la continuité (39 % des micro-entrepreneurs
          actifs à 5 ans — INSEE), la capacité (un solo = ~100-120
          jours facturables par an), les garanties contractuelles — et
          une constante absolue : <strong>sans cession de droits
          écrite, le code ne vous appartient pas</strong>, quel que
          soit le prestataire.
        </p>
        <GuideTable
          headers={["Votre budget", "Notre verdict", "Le critère qui tranche"]}
          rows={[
            ["Moins de 3 000 €", "Freelance, périmètre court et standard", "Aucune agence sérieuse à ce prix — contractualisez la propriété malgré tout"],
            ["3 000 – 8 000 €", "Freelance senior OU entrée d'agence", "La criticité : si le site doit générer des clients, privilégiez garanties et continuité"],
            ["8 000 – 15 000 €", "Zone de convergence — les prix se rejoignent", "Continuité, pluridisciplinarité (design + dev + SEO), garanties mesurables"],
            ["Plus de 15 000 € (e-commerce, application)", "Équipe structurée quasi obligatoire", "La capacité : 30-80 jours-homme et plusieurs métiers — hors de portée d'un solo"],
          ]}
        />

        <InfoBox variant="blue" title="Les 12 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>TJM</strong> : le taux journalier d&apos;un indépendant — son « prix de journée », hors taxes.</li>
            <li><strong>Micro-entreprise</strong> : le régime simplifié de la plupart des freelances — plafonné à 83 600 € de chiffre d&apos;affaires services en 2026.</li>
            <li><strong>Franchise de TVA</strong> : sous 37 500 € de chiffre d&apos;affaires, le freelance facture sans TVA — un devis « net » face à un devis « HT ».</li>
            <li><strong>RC pro</strong> : l&apos;assurance responsabilité civile professionnelle — non obligatoire pour un développeur, donc pas toujours souscrite.</li>
            <li><strong>Portage salarial</strong> : le freelance devient salarié d&apos;une société de portage — cadre légal complet, garanties financières.</li>
            <li><strong>Collectif de freelances</strong> : plusieurs indépendants qui s&apos;associent sur un projet — sans personne morale unique responsable, le plus souvent.</li>
            <li><strong>Sous-traitance</strong> : votre prestataire fait faire le travail par un tiers — encadrée par la loi de 1975, que ce guide vous apprend à invoquer.</li>
            <li><strong>Cession de droits</strong> : la clause écrite qui vous transfère la propriété du code — sans elle, payer ne rend pas propriétaire.</li>
            <li><strong>Dépôt Git</strong> : le « coffre-fort » en ligne où vit le code source — il doit être à votre nom, ou accessible à votre nom.</li>
            <li><strong>TMA (maintenance)</strong> : le contrat d&apos;entretien du site après livraison — mises à jour, correctifs, surveillance.</li>
            <li><strong>Réversibilité</strong> : votre capacité à changer de prestataire sans repartir de zéro — elle se négocie au contrat, pas au divorce. Notre guide sur la <Link href="/guides/proprietaire-site-internet-code-source">propriété du site et du code source</Link> en donne la checklist complète.</li>
            <li><strong>Coût total de possession (TCO)</strong> : le coût sur plusieurs années — création, maintenance, évolutions, et reprise éventuelle.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. De qui parle-t-on vraiment (et d&apos;où vient le biais)</h2>
        <p>
          Premier réflexe salutaire : regarder qui a écrit le
          comparatif que vous lisez. Sur cette requête, presque toutes
          les pages sont signées soit par un freelance (conclusion :
          le freelance suffit), soit par une agence (conclusion :
          l&apos;agence est plus sûre). <strong>Ce guide est écrit par
          une agence — une petite structure senior de développement
          sur mesure, <Link href="/agence/savoie">en Savoie</Link> — et
          cette position colore
          forcément notre regard</strong> : jugez-nous sur les sources,
          pas sur la signature. Deuxième réflexe : préciser de QUI on
          parle, car « freelance » recouvre l&apos;étudiant à
          250 €/jour comme l&apos;architecte logiciel à 950 €, et
          « agence » recouvre l&apos;usine à sites WordPress comme le
          studio de dix seniors. Comparer « le freelance » à
          « l&apos;agence » sans préciser, c&apos;est comparer « la
          voiture » à « le véhicule ». Fil rouge de ce guide :{" "}
          <strong>Karim, gérant d&apos;une entreprise
          d&apos;électricité de 12 salariés</strong>, deux devis sur
          la table pour le même site — 4 200 € chez un freelance,
          9 800 € dans une agence — et une seule question : où est
          le piège ?
        </p>

        <h2 id="prix-reels">3. Les TJM réels — et pourquoi les baromètres se contredisent</h2>
        <p>
          Voici les chiffres que les comparatifs assènent sans jamais
          les sourcer — avec leurs sources, et l&apos;explication de
          leurs écarts. <strong>Baromètre SILKHOM 2025</strong> (fondé
          sur plus de 20 000 placements réels) : un développeur
          fullstack JavaScript — « fullstack » désigne le profil
          polyvalent qui construit seul l&apos;interface que vous
          voyez et la mécanique qui tourne derrière ; JavaScript,
          React et Node sont les technologies web les plus
          demandées — facture à Paris{" "}
          <strong>330 à 450 €/jour en junior, 400 à 500 € en confirmé,
          450 à 600 € en senior</strong> — comptez 10 à 20 % de moins
          en régions. <strong>TJMètre</strong> (agrégateur, 20 000+
          observations 2025-2026) : médiane fullstack{" "}
          <strong>530 €</strong>, React 540 €. <strong>Morgan
          Philips</strong> : 700 à 800 € pour un confirmé —
          l&apos;écart n&apos;est pas une erreur : ce baromètre mesure
          des missions grands comptes placées par cabinet, pas le
          marché des TPE-PME. C&apos;est LA précaution de lecture
          qu&apos;aucun comparatif ne donne :{" "}
          <strong>un TJM sans sa méthodologie ne veut rien
          dire</strong>. Pour convertir en budget : TJM × jours
          estimés. Le devis freelance de Karim (4 200 €) correspond à
          ~10 jours d&apos;un confirmé à 420 € — un site court, sur
          base existante ; le devis agence (9 800 €) à ~15-18 jours
          répartis entre design, développement et référencement. Les
          deux sont honnêtes. Ils ne décrivent simplement pas le même
          site.
        </p>
        <p>
          Deux enseignements complémentaires : la séniorité pèse plus
          que tout — un fullstack déclare 256 €/jour à moins
          d&apos;un an d&apos;expérience, 401 € à 3-4 ans, 537 € à
          5-10 ans, avec un pic à 576 € entre 11 et 15 ans (données
          déclaratives Free-Work, relevé 2026) — et la spécialité joue
          à la marge : côté TJMètre, React se paie légèrement
          au-dessus de la médiane fullstack, Node légèrement en
          dessous (540 et 520 € contre 530 €). Traduction pour votre
          consultation : deux devis freelance très éloignés cachent
          souvent deux séniorités très éloignées — demandez toujours
          l&apos;expérience réelle sur la technologie proposée, pas
          l&apos;expérience totale. Notre{" "}
          <Link href="/guides/tjm-developpeur-web">guide du tarif
          journalier écrit côté acheteur</Link> pousse l&apos;exercice
          plus loin : anatomie d&apos;un tarif, nombre de jours par
          livrable et lecture d&apos;un devis poste par poste.
        </p>
        <InfoBox variant="amber" title="Exemple concret : convertir un TJM en budget de projet">
          <p>
            La formule tient en une ligne : <strong>jours estimés ×
            TJM = budget</strong>. Un site vitrine court (5-8 jours) à
            450 €/jour : 2 250 à 3 600 €. Un site professionnel
            complet — design, contenus, référencement, tests
            (15-25 jours) — à 530 €/jour : 7 950 à 13 250 €. Un
            e-commerce sur mesure (30-80 jours) : 15 900 à 42 400 € au
            même taux, avant même les métiers complémentaires.
            C&apos;est pour cela qu&apos;exiger un devis « en jours
            par poste, à TJM affiché » change tout : un forfait opaque
            ne se vérifie pas, une multiplication si.
          </p>
        </InfoBox>

        <h2 id="arithmetique">4. L&apos;arithmétique qui resserre l&apos;écart de prix</h2>
        <p>
          Le « un freelance coûte 30 à 50 % moins cher » circule de
          blog en blog — <strong>aucune étude primaire ne compare des
          devis à périmètre identique</strong> ; nous l&apos;avons
          cherchée, dites-le à qui vous le ressert. Ce que
          l&apos;arithmétique établit, en revanche : les petits prix
          freelance (800 à 2 500 € le site vitrine) correspondent à
          des périmètres courts — 3 à 8 jours, souvent sur thème (un
          modèle graphique prêt à l&apos;emploi que le prestataire
          adapte, par opposition au sur-mesure).
          Spécifiez un site professionnel sur mesure — design propre,
          contenus, référencement, tests : 15 à 25 jours-homme — et un
          freelance confirmé au TJM médian facture{" "}
          <strong>8 000 à 13 000 €</strong> : la fourchette
          d&apos;entrée d&apos;une agence sur mesure (6 900 à
          14 900 € chez nous). <strong>L&apos;écart de prix est réel
          en bas de gamme ; il s&apos;évapore à qualité égale.</strong>{" "}
          L&apos;IA accélère ce resserrement : l&apos;étude contrôlée
          de GitHub mesure une tâche standard réalisée 55 % plus vite
          avec assistance IA — un gain qui bénéficie aux deux camps et
          tire tout le sur-mesure vers le bas (notre{" "}
          <Link href="/guides/creer-un-site-avec-ia">guide « créer un
          site avec l&apos;IA »</Link> chiffre ce bouleversement).
          Reste alors la vraie question, celle des sections
          suivantes : à prix voisin, qu&apos;est-ce qui diffère
          VRAIMENT ? Réponse : la capacité, la continuité, les
          garanties.
        </p>

        <h2 id="capacite">5. Ce qu&apos;un solo peut absorber : les plafonds, noir sur blanc</h2>
        <p>
          Un fait structurel qu&apos;aucun comparatif n&apos;utilise,
          et qui objective le débat sans dénigrer personne : la
          capacité d&apos;un solo est doublement bornée. Par la
          réglementation : le régime micro-entrepreneur est plafonné
          à <strong>83 600 € de chiffre d&apos;affaires services en
          2026</strong> (Service-Public) — soit un maximum
          d&apos;environ 160 jours facturés au TJM médian confirmé.
          Et par le calendrier : une fois déduits prospection,
          administratif et formation, un indépendant facture{" "}
          <strong>environ 100 à 120 jours par an</strong>, tous
          clients confondus. Traduction concrète :
          un freelance solo qui vous consacre 60 jours a engagé la
          moitié de son année sur votre seul projet. Pour un site
          vitrine, aucun problème. Pour un e-commerce sur mesure ou
          une application (30 à 80 jours-homme, plusieurs métiers —
          design, développement, tests, sécurité), ce n&apos;est plus
          une question de talent : <strong>c&apos;est une question
          d&apos;arithmétique</strong>. Ajoutez qu&apos;une équipe de
          un ne se relaie pas — maladie, congés, surcharge — et vous
          avez le vrai critère de bascule vers une structure : non pas
          « l&apos;agence est meilleure », mais « ce périmètre exige
          plusieurs personnes ».
        </p>
        <p>
          Deux évolutions 2026 affinent le calcul du freelance — donc
          ses prix. Les cotisations sociales du micro-entrepreneur en
          prestations de services passent de 24,6 à{" "}
          <strong>25,6 % du chiffre d&apos;affaires</strong> au
          1er janvier 2026 (URSSAF) : l&apos;écart de coût structurel
          avec une société se resserre mécaniquement. Et la franchise
          de TVA reste à <strong>37 500 €</strong> pour les services —
          la réforme du seuil unique à 25 000 €, très contestée, a été
          abandonnée fin 2025. Concrètement : un freelance qui dépasse
          ce seuil facture la TVA comme une agence, et son « avantage
          prix » fond d&apos;autant pour les clients non assujettis.
        </p>

        <h2 id="continuite">6. « Et s&apos;il disparaît ? » : le risque enfin chiffré</h2>
        <p>
          « Mon développeur ne répond plus » est le fil le plus
          fréquent des forums d&apos;entrepreneurs — et le grand
          absent des comparatifs. Le chiffre officiel existe
          pourtant : sur la cohorte de micro-entrepreneurs immatriculés
          en 2018 ayant réellement démarré,{" "}
          <strong>54 % étaient encore actifs 3 ans après, 39 % à
          5 ans</strong> — et environ <strong>27 % seulement dans
          l&apos;information-communication</strong>, le secteur du
          développement web (INSEE Première n°2069, 2025). Trois
          micro-entrepreneurs du numérique sur quatre ont disparu en
          cinq ans. L&apos;honnêteté oblige à nuancer : la statistique
          couvre tout le régime micro, débutants et activités
          d&apos;appoint compris — un senior installé, au carnet de
          commandes plein, n&apos;a pas ce profil. Et la symétrie
          s&apos;impose : des agences ferment aussi. La leçon
          n&apos;est donc pas « fuyez les freelances » ; c&apos;est{" "}
          <strong>« contractualisez comme si votre prestataire pouvait
          disparaître demain »</strong> — parce que, statistiquement,
          il le peut. À noter aussi : l&apos;assurance RC pro
          n&apos;est pas obligatoire pour un développeur (profession
          non réglementée) — beaucoup de freelances n&apos;en ont
          pas, quasiment toutes les agences en ont une. Demandez
          l&apos;attestation, dans les deux cas.
        </p>
        <p>
          La vérification pratique prend dix minutes et vaut pour les
          deux profils : l&apos;ancienneté réelle de la structure sur
          un registre public (societe.com, Pappers — une immatriculation
          récente n&apos;est pas disqualifiante, mais elle se sait),
          des références vérifiables — appelez-en une, les
          prestataires sérieux y invitent —, la cohérence entre le
          discours et les sites réellement livrés (testez leur vitesse
          vous-même sur PageSpeed Insights), et la qualité du devis :
          un document détaillé, daté, avec conditions écrites, en dit
          plus long qu&apos;un portfolio. Le meilleur signal reste la
          réaction aux questions des sections 7 à 9 : le prestataire
          fiable les accueille bien, parce qu&apos;il a les réponses.
        </p>

        <GuideInlineCTA
          title="Deux devis incomparables sur la table ?"
          description="Décrivez votre projet en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, avec un avis franc — y compris quand un bon freelance est la meilleure option pour votre budget. Et si le périmètre mérite d'être cadré avant d'engager qui que ce soit, le Discovery Sprint (1 500 €, 2 jours, déduit à 100 %) produit cahier des charges, maquettes et devis comparables."
          tags={["Réponse sous 24 h ouvrées", "Intervenants nommés au devis", "Droits, dépôt et comptes inventoriés"]}
        />

        <h2 id="sous-traitance">7. L&apos;agence-coquille et la sous-traitance déguisée</h2>
        <p>
          Le risque symétrique, côté agence : payer un tarif
          d&apos;agence pour un travail réalisé par des freelances
          sous-traités — parfois offshore, c&apos;est-à-dire à
          l&apos;étranger à bas coût, avec une marge de 2 à 3 fois. Aucune statistique fiable ne mesure le phénomène
          (les pourcentages qui circulent ne sont pas sourcés — nous
          le disons plutôt que d&apos;en inventer), mais ses
          conséquences remplissent les forums : interlocuteur
          commercial qui ne comprend pas les questions techniques,
          délais qui enflent, code de qualité imprévisible. La parade
          juridique est solide et presque inconnue :{" "}
          <strong>la loi du 31 décembre 1975 sur la sous-traitance
          (article 3) vous donne le droit d&apos;accepter chaque
          sous-traitant et d&apos;agréer ses conditions de
          paiement</strong> — une
          agence qui sous-traite sans vous le dire est en tort. En
          pratique, cinq questions posées en rendez-vous font le
          tri : <strong>qui écrit le code ? où ? puis-je rencontrer
          le développeur ? qui répondra aux demandes après
          livraison ? la sous-traitance figure-t-elle au
          contrat ?</strong> Les réponses évasives sont une réponse.
          La nôtre, pour être complet : l&apos;équipe qui vend est
          l&apos;équipe qui code, en Savoie, et nos contrats le
          disent.
        </p>

        <h2 id="propriete">8. À qui appartient le code : le trio Légifrance</h2>
        <p>
          La question la plus lourde de conséquences — et la seule de
          ce comparatif où freelance et agence sont exactement logés à
          la même enseigne. Trois articles du Code de la propriété
          intellectuelle, que personne ne cite sur cette requête.{" "}
          <strong>Article L111-1</strong> : l&apos;auteur détient les
          droits du seul fait de la création — payer le développement
          ne vous rend PAS propriétaire du code.{" "}
          <strong>Article L113-9</strong> : les droits sur un logiciel
          écrit par un salarié remontent automatiquement à son
          employeur — une agence peut donc céder proprement le code de
          ses salariés ; un freelance, lui, reste personnellement
          titulaire des siens. <strong>Article L131-3</strong> : la
          cession n&apos;est valable que par écrit, chaque droit
          énuméré distinctement, avec son étendue, sa destination, son
          lieu et sa durée. Conclusion opérationnelle, identique dans
          les deux cas : exigez <strong>la clause de cession conforme,
          la remise du code sur un dépôt à votre nom, le domaine et
          l&apos;hébergement à votre nom, et une documentation de
          reprise</strong>. La clause type, prête à recopier, est dans
          notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
          de cahier des charges</Link> — c&apos;est elle qui transforme
          la question « agence ou freelance » en une question qui a
          une réponse : « quel contrat ».
        </p>

        <h2 id="arnaques">9. Reconnaître un prestataire sérieux (les signaux d&apos;alarme)</h2>
        <p>
          Si l&apos;autocomplete Google associe « agence web » à
          « avis », c&apos;est qu&apos;un passif existe. Le montage le
          plus documenté par les litiges français : le{" "}
          <strong>contrat de location de site sur 36 à 48 mois,
          irrévocable</strong>, souvent revendu à un organisme de
          financement — le site est « offert », le « partenariat »
          flatteur, et vous découvrez que vous devez 4 ans de
          mensualités même si le site ne produit rien. Les signaux
          d&apos;alarme, valables pour une agence comme pour un
          freelance : un engagement pluriannuel à la signature, un
          domaine enregistré au nom du prestataire, aucun accès à
          votre hébergement ni au code, des frais de sortie
          dissuasifs, un devis sans détail des jours par poste. Et le
          test universel, à poser avant de signer quoi que ce
          soit : <strong>« si je pars dans un an, qu&apos;est-ce que
          j&apos;emporte, et pour combien ? »</strong> — la réponse
          d&apos;un prestataire sérieux est écrite dans son contrat.
          Un devis anormalement bas se juge à la même aune : ce qui
          n&apos;est pas dans le devis (contenus, référencement,
          tests, garantie) reviendra en avenant. Ce montage de
          location a valu, en janvier 2026, une condamnation pénale
          confirmée en cassation : notre{" "}
          <Link href="/guides/choisir-son-agence-web">guide pour
          choisir son agence web</Link> détaille la décision, les
          recours ouverts aux professionnels démarchés et la méthode
          de vérification complète.
        </p>

        <h2 id="troisieme-voie">10. Collectifs, portage, studio senior : les troisièmes voies</h2>
        <p>
          Le duel « agence ou freelance » ignore trois formes
          intermédiaires qui montent. <strong>Le collectif de
          freelances</strong> : 9 freelances sur 10 collaborent déjà
          entre eux (étude Collective x Shine) — pluridisciplinarité à
          prix contenu, mais vérifiez QUI porte la responsabilité
          contractuelle : sans personne morale unique, vous signez
          avec plusieurs indépendants, pas avec une équipe.{" "}
          <strong>Le portage salarial</strong> : le freelance devient
          salarié d&apos;une société de portage (cadre légal complet,
          garantie financière obligatoire de la société, rémunération
          plancher ~3 000 € bruts/mois en 2026) — pour vous, un
          indépendant porté offre un cadre plus sécurisé qu&apos;une
          micro-entreprise, moyennant 5 à 12 % de frais de gestion
          intégrés à son tarif. <strong>Le studio senior</strong> —
          notre case, autant l&apos;assumer : une petite équipe
          expérimentée, sans strates commerciales, qui combine les
          garanties d&apos;une agence (continuité, contrat, RC pro,
          plusieurs métiers) et la proximité d&apos;un freelance
          (vous parlez à ceux qui codent). L&apos;IA a rendu ce format
          plus accessible qu&apos;avant : moins de jours facturés à
          périmètre égal, donc des forfaits de studio au prix
          d&apos;hier chez un indépendant senior.
        </p>

        <h2 id="clauses-techniques">11. Les engagements mesurables à exiger</h2>
        <p>
          Le critère le plus discriminant n&apos;est ni le statut ni
          le prix : c&apos;est <strong>ce que le prestataire accepte
          de garantir par écrit, chiffres à l&apos;appui</strong> —
          et sur cette requête, aucun comparatif n&apos;en parle. La
          liste, à soumettre à un freelance comme à une agence : une{" "}
          <strong>performance mesurable</strong> — un devis peut fixer un objectif Lighthouse avec son protocole (la note
          de qualité sur 100 de l&apos;outil de test de Google,
          vérifiable par n&apos;importe qui sur PageSpeed Insights) ;
          les <strong>Core Web Vitals au vert</strong> (les mesures de
          vitesse que Google utilise dans son classement — documenté
          par Google lui-même) ; une <strong>garantie
          corrective</strong> après livraison, avec durée, couverture et exclusions&nbsp;; un{" "}
          <strong>délai d&apos;intervention</strong> contractuel pour
          les incidents bloquants si vous prenez une maintenance (le
          détail des forfaits est dans notre{" "}
          <Link href="/guides/cout-maintenance-site-internet">guide
          de la maintenance</Link>) ; et la{" "}
          <strong>réversibilité documentée</strong> — un autre
          développeur doit pouvoir reprendre. Celui qui accepte de
          s&apos;engager sur des chiffres n&apos;a généralement pas
          peur de les atteindre ; celui qui refuse tout engagement
          mesurable vous renseigne aussi.
        </p>
        <p>
          Dernier engagement, le plus simple à obtenir et le plus
          souvent oublié : <strong>l&apos;échéancier de
          paiement</strong>. Un acompte limité (30 % est
          l&apos;usage), des paiements adossés à des jalons
          vérifiables — maquettes validées, recette fonctionnelle,
          mise en ligne — et jamais la totalité avant la mise en
          production. C&apos;est votre seule protection financière
          AVANT livraison : si le prestataire disparaît en cours de
          route (section 6), vous ne perdez que le travail réellement
          effectué. Un prestataire qui exige la quasi-totalité à la
          signature, ou qui propose un financement sur plusieurs
          années (section 9), transfère tout le risque sur vous.
        </p>

        <h2 id="tco">12. Le coût total sur 3 ans, dans les deux sens</h2>
        <p>
          Les calculs de coût total qui circulent sont à charge — les
          agences empilent les coûts cachés du freelance, les
          freelances ceux de l&apos;agence. Faisons les deux
          colonnes. <strong>Coûts cachés côté freelance</strong> : les
          compétences à ajouter (design, contenus, référencement
          rarement réunis chez un solo — chaque manque devient un
          second prestataire à coordonner vous-même), la maintenance
          incertaine (qui répond dans 2 ans ?), et le coût d&apos;une
          reprise si l&apos;activité s&apos;arrête — rétro-ingénierie
          d&apos;un code non documenté (payer un nouveau développeur
          pour déchiffrer et reconstituer le travail du précédent),
          voire refonte.{" "}
          <strong>Coûts cachés côté agence</strong> : la marge de
          coordination (chef de projet, commercial — des journées
          facturées qui ne produisent pas de code), la sous-traitance
          éventuelle (section 7), et la dépendance à un outil maison
          ou à un CMS propriétaire (le logiciel qui gère le contenu
          de votre site, dont seule l&apos;agence détient les clés)
          qui rend la sortie coûteuse.{" "}
          <strong>Ce qui est identique des deux côtés</strong> : la
          maintenance (forfait catalogue pour un site standard, 10 à
          20 % du coût de création par an dès que le projet est sur
          mesure), l&apos;hébergement, et la TVA —
          selon votre statut (FAQ). Le fil rouge, résolu : Karim a
          choisi le devis agence à 9 800 € — non parce que
          l&apos;agence « vaut mieux », mais parce que son site est
          son premier canal d&apos;acquisition, que le devis détaillait
          les jours par poste, et que le contrat incluait cession de
          droits, garantie et maintenance. Son électricien
          concurrent, lui, a bien fait de prendre un freelance à
          3 500 € : site simple, enjeu modéré, contrat propre. Deux
          bonnes décisions — parce que deux situations différentes.
        </p>
        <p>
          Posez le calcul pour votre cas, sur trois ans : prix de
          création + maintenance (forfait catalogue ou 10 à 20 % du
          coût de création par an selon la nature du site, quel que
          soit le prestataire — notre{" "}
          <Link href="/guides/cout-maintenance-site-internet">guide de
          la maintenance</Link> détaille les forfaits réels) +
          évolutions prévisibles + une provision pour le risque de
          reprise si le prestataire disparaît (nulle avec un contrat
          complet, potentiellement égale au prix d&apos;une refonte
          sans lui). Ce dernier terme est le grand oublié des
          comparatifs : il ne dépend ni du statut ni du prix du
          prestataire, mais uniquement de la qualité de votre
          contrat — c&apos;est lui que les sections 8 et 11 vous
          apprennent à annuler.
        </p>

        <h2 id="verdict-par-profil">13. La grille de décision par budget</h2>
        <GuideTable
          headers={["Votre situation", "Notre verdict", "Pourquoi"]}
          rows={[
            ["Site simple, budget < 3 000 €, enjeu modéré", "Freelance confirmé", "Le meilleur rapport qualité-prix du marché — avec cession de droits et accès aux comptes malgré tout"],
            ["Site d'acquisition, 3 000 – 8 000 €", "Freelance senior à contrat blindé OU entrée d'agence", "Le site rapporte des clients : garanties et continuité pèsent plus que l'écart de prix"],
            ["Projet complet (design + dev + SEO), 8 000 – 15 000 €", "Studio senior ou agence — comparez sur les garanties", "Zone de convergence des prix : le contrat départage, pas le statut"],
            ["E-commerce sur plateforme (Shopify, WooCommerce), 8 000 – 15 000 €", "Freelance senior spécialisé OU studio — départagez sur les garanties", "Un périmètre standard sur plateforme reste à la portée d'un solo expérimenté ; le périmètre décide, pas le montant"],
            ["E-commerce sur mesure, application, > 15 000 €", "Équipe structurée (agence, collectif outillé)", "30-80 jours-homme, plusieurs métiers : hors de portée d'un solo — question de capacité, pas de talent"],
            ["Périmètre flou, projet à cadrer", "Cadrage payant avant tout engagement", "Notre Discovery Sprint (1 500 €, 2 jours, déduit à 100 %) produit un cahier des charges qui rend les devis comparables"],
            ["Urgence absolue, budget mini", "Freelance disponible — ou outil en attendant", "Notre guide des délais détaille ce qui est réaliste, et un site provisoire s'assume comme tel"],
          ]}
        />

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>~530 €/jour</strong> : le TJM médian d&apos;un développeur fullstack confirmé (baromètres 2025-2026) — soit 8 000 à 13 000 € pour un site professionnel de 15-25 jours : l&apos;écart avec l&apos;agence s&apos;évapore à qualité égale.</li>
            <li><strong>39 % à 5 ans</strong> : la part des micro-entrepreneurs (ayant démarré) encore actifs cinq ans après (INSEE) — le risque de continuité se contractualise, il ne se devine pas.</li>
            <li><strong>83 600 €</strong> : le plafond de chiffre d&apos;affaires services du régime micro en 2026 — auquel s&apos;ajoute la borne du calendrier : ~100-120 jours réellement facturables par an. La capacité d&apos;un solo est doublement bornée.</li>
            <li><strong>L131-3</strong> : l&apos;article du Code de la propriété intellectuelle sans lequel vous ne possédez pas le code que vous avez payé — freelance OU agence.</li>
            <li><strong>1975</strong> : l&apos;année de la loi qui vous donne le droit d&apos;accepter chaque sous-traitant — l&apos;arme anti agence-coquille que personne n&apos;utilise.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">14. Méthode : choisir en 5 étapes</h2>
        <ol>
          <li>
            <strong>Cadrez avant de consulter.</strong> Un périmètre
            écrit (notre{" "}
            <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
            de cahier des charges</Link> est fait pour ça) rend les
            devis comparables — sans lui, vous comparez des projets
            différents, pas des prestataires.
          </li>
          <li>
            <strong>Qualifiez la criticité.</strong> Le site doit-il
            générer des clients, ou exister ? Toute la grille de la
            section 13 découle de cette réponse.
          </li>
          <li>
            <strong>Exigez des devis en jours par poste</strong>, à TJM
            affiché — c&apos;est le seul format qui permet de voir ce
            qui est inclus, et ce qui reviendra en avenant.
          </li>
          <li>
            <strong>Posez les questions qui fâchent</strong> : qui code
            (section 7), qu&apos;est-ce que j&apos;emporte si je pars
            (section 9), que garantissez-vous par écrit (section 11) —
            au freelance comme à l&apos;agence.
          </li>
          <li>
            <strong>Verrouillez le contrat</strong> : cession L131-3,
            dépôt de code, comptes à votre nom, garantie corrective,
            réversibilité. C&apos;est lui, pas le statut du
            prestataire, qui protège votre investissement.
          </li>
        </ol>
        <InfoBox variant="blue" title="En clair : où trouver vos 3 candidats">
          <p>
            Constituez une short-list de 3 prestataires, pas plus.
            Pour les freelances : les plateformes où
            l&apos;historique de missions est vérifiable (Malt,
            Free-Work) et la cooptation par d&apos;autres dirigeants
            de votre secteur — un freelance recommandé par un client
            de deux ans vaut mieux qu&apos;un profil bien noté. Pour
            les agences et studios : des références locales que vous
            pouvez appeler (section 9). Au-delà de trois devis, vous
            diluez votre temps de comparaison sans améliorer la
            décision.
          </p>
        </InfoBox>
        <p>
          Et si vous voulez notre réponse à nous — biais déclaré,
          engagements écrits (<Link href="/tarifs">notre grille
          publique</Link>) : <strong>vitrine sur mesure dès
          6 900 € et e-commerce sur devis. Performance, droits, dépôt,
          recette, équipe et période de correction sont écrits avant engagement</strong> (méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>).{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées,
          gratuite et sans engagement — y compris quand elle est
          « prenez un freelance ».
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/" target="_blank" rel="noopener noreferrer">SILKHOM, baromètre des TJM 2025 (20 000+ placements)</a> ;{" "}
          <a href="https://tjmetre.fr/barometre" target="_blank" rel="noopener noreferrer">TJMètre, baromètre agrégé des TJM freelances (2025-2026)</a> ;{" "}
          <a href="https://www.blogdumoderateur.com/freelances-taux-journaliers-moyens-it-france-2025/" target="_blank" rel="noopener noreferrer">Morgan Philips Freelance 2025/2026 (via BDM)</a> ;{" "}
          <a href="https://www.insee.fr/fr/statistiques/8634000" target="_blank" rel="noopener noreferrer">INSEE Première n°2069, pérennité des micro-entrepreneurs (2025)</a> ;{" "}
          <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F32353" target="_blank" rel="noopener noreferrer">Service-Public, plafonds micro-entreprise 2026</a> ;{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958" target="_blank" rel="noopener noreferrer">Légifrance, CPI art. L131-3 (cession de droits)</a> ;{" "}
          <a href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006467140" target="_blank" rel="noopener noreferrer">Légifrance, loi du 31 décembre 1975 art. 3 (sous-traitance)</a> ;{" "}
          <a href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/" target="_blank" rel="noopener noreferrer">GitHub, étude contrôlée sur la productivité IA (55 % plus rapide)</a> ;{" "}
          <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">Google Search Central, Core Web Vitals</a> ;
          CPI art. L111-1 et L113-9 (Légifrance) ; URSSAF (cotisations
          micro 25,6 % en 2026, franchise TVA 37 500 €) ; Code du
          travail art. L1254-2 et L1254-26 (portage salarial) ;
          Collective.work x Shine (collectifs de freelances) ;
          Free-Work et Malt (TJM déclaratifs, ordres de grandeur) ;
          Digital Applied (étude de prix IA 2026). Les chiffres «
          qui circulent » sans source primaire (écart 30-50 %, taux de
          sous-traitance offshore) sont signalés comme tels dans le
          corps du guide.
        </p>
        <p className="text-sm">
          <em>
            Ces fourchettes et repères sont fournis à titre
            indicatif : seul un devis établi sur votre périmètre vous
            engage. Le volet juridique (cession de droits,
            sous-traitance, contrats) ne constitue pas un conseil
            juridique personnalisé — pour un contrat, consultez un
            avocat.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
