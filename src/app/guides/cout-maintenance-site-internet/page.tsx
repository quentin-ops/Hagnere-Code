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

const guide = getGuide("cout-maintenance-site-internet");

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
      "Développement web",
      "Maintenance de sites internet",
      "Sécurité web",
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
      name: "Coût de la maintenance d'un site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le prix moyen d'une maintenance de site internet ?",
    answer:
      "Les fourchettes qui font consensus sur le marché français en 2026 : 30 à 100 €/mois pour un site vitrine (les forfaits basiques démarrent à 29 €, les complets montent vers 100 €), 80 à 250 €/mois pour un site de PME plus riche, 150 à 500 €/mois pour un e-commerce, et 500 €/mois et plus pour un site sur mesure sous contrat de tierce maintenance applicative (TMA) avec engagements de délais. Les interventions ponctuelles hors contrat se facturent 70 à 150 € de l'heure — et souvent le double en urgence.",
  },
  {
    question: "Combien coûte réellement la maintenance annuelle d'un site web ?",
    answer:
      "Pour un site vitrine de TPE : 360 à 1 200 €/an de forfait, plus les licences d'extensions premium si le site est sous WordPress (500 à 1 000 €/an pour un site professionnel équipé), l'hébergement (60 à 960 €/an selon la formule) et le nom de domaine — votre adresse en .fr ou .com (10 à 50 €/an). Pour un e-commerce : 1 800 à 6 000 €/an de maintenance, davantage avec des évolutions régulières. Le total annuel réaliste d'un site professionnel se situe donc entre 900 € et plusieurs milliers d'euros — à comparer au coût d'un seul sinistre, chiffré dans ce guide.",
  },
  {
    question: "La maintenance d'un site internet inclut-elle l'hébergement ?",
    answer:
      "Non, dans la plupart des cas : ce sont deux lignes budgétaires distinctes. L'hébergement (5 à 80 €/mois selon la formule) paie le serveur qui fait tourner le site ; la maintenance paie l'entretien du site lui-même — mises à jour, sauvegardes, sécurité, correctifs. Certains prestataires regroupent les deux dans un forfait unique, d'autres les facturent séparément : exigez le détail écrit. Retenez la règle simple : l'infogérance (gestion complète du serveur) inclut la maintenance, mais la maintenance n'inclut presque jamais l'hébergement.",
  },
  {
    question: "La maintenance est-elle obligatoire pour un site WordPress ?",
    answer:
      "Légalement non, techniquement oui. WordPress vit sur un écosystème d'extensions : 11 334 vulnérabilités y ont été recensées en 2025 (+42 % en un an), dont 91 % dans les extensions — et pour les failles les plus ciblées, le délai médian entre la publication d'une faille et son exploitation par des robots n'est que de 5 heures. Un site WordPress sans mises à jour régulières n'est pas un site « qui prend un petit risque » : c'est un site dont le piratage est une question de temps. Les statistiques le confirment : environ la moitié des sites piratés n'étaient pas à jour.",
  },
  {
    question: "Peut-on faire la maintenance de son site soi-même ?",
    answer:
      "Oui pour un site vitrine simple, à condition d'y consacrer réellement 2 à 4 heures par mois : mises à jour testées, sauvegardes vérifiées, surveillance. Des outils comme ManageWP (gratuit, options à 1-2 $ par site et par mois) ou MainWP (gratuit, version Pro à 199 $/an) industrialisent une partie du travail. Le calcul honnête : valorisez votre temps. À 2-4 h/mois, un dirigeant « paie » souvent plus cher en temps que le forfait basique à 30-50 €/mois — et dès que le site génère des contacts ou des ventes, l'enjeu dépasse le bricolage.",
  },
  {
    question: "Que se passe-t-il si mon site est piraté ?",
    answer:
      "Le nettoyage d'un site WordPress piraté coûte en France 250 à 600 € pour une infection limitée, 600 à 1 500 € si la base de données est touchée, si Google a blacklisté le site ou s'il y a une boutique en ligne. S'y ajoute le vrai coût : l'écran rouge « site trompeur » de Google fait fuir la quasi-totalité des visiteurs, et son retrait prend 3 à 5 jours ouvrés après nettoyage — incompressibles. Sans contrat, l'intervention d'urgence se paie 100 €/h minimum, souvent le double du tarif normal.",
  },
  {
    question: "Quelle est la différence entre maintenance et TMA ?",
    answer:
      "La maintenance « au forfait » (30 à 300 €/mois) couvre un périmètre standard : mises à jour, sauvegardes, sécurité, petit support. La TMA — tierce maintenance applicative — est le contrat d'entretien d'un site ou d'une application sur mesure : un engagement contractuel avec des délais garantis d'intervention et de rétablissement, une banque d'heures pour les corrections et évolutions, et un interlocuteur qui connaît votre code. Elle se facture 500 à 3 000 €/mois et plus selon la criticité — c'est le régime des sites dont dépend le chiffre d'affaires.",
  },
  {
    question: "Quelle différence entre maintenance corrective et évolutive ?",
    answer:
      "La corrective répare ce qui casse : bug, formulaire en panne, incompatibilité après une mise à jour. La préventive entretient pour éviter la panne : mises à jour, sauvegardes, surveillance, sécurité. L'évolutive améliore : nouvelle section, nouvelle fonctionnalité, optimisation. Cette distinction est le cœur de votre contrat : un forfait basique couvre la préventive, inclut plus ou moins de correctif, et facture l'évolutif à part (banque d'heures ou devis). Un périmètre flou entre les trois est la première source de litiges — exigez les trois mots noir sur blanc.",
  },
  {
    question: "Les sauvegardes sont-elles incluses dans un contrat de maintenance ?",
    answer:
      "Dans tout contrat sérieux, oui — mais vérifiez trois choses que les forfaits bas de gamme escamotent : la fréquence (quotidienne pour un site actif, pas mensuelle), l'externalisation (une sauvegarde stockée sur le même serveur que le site brûle avec lui — l'incendie du datacenter OVH de 2021 l'a tragiquement prouvé, jusqu'à une condamnation du prestataire dont la sauvegarde vendue était dans le même bâtiment), et les tests de restauration (une sauvegarde jamais testée est un espoir, pas une garantie).",
  },
  {
    question: "Combien de temps dure la maintenance d'un site internet ?",
    answer:
      "La question a trois réponses. La durée d'une opération : une mise à jour de CMS prend 1 à 3 heures, un lot de mises à jour d'extensions 2 à 4 heures par mois, une restauration après piratage 4 à 8 heures. Le temps récurrent : comptez 2 à 4 heures par mois minimum pour entretenir correctement un site vitrine simple. La durée d'engagement : les contrats types courent sur 12 mois, souvent en tacite reconduction — vérifiez les conditions de sortie avant de signer.",
  },
  {
    question: "Quelle différence entre maintenance et refonte ?",
    answer:
      "La maintenance entretient le site existant ; la refonte le reconstruit. Le lien entre les deux est budgétaire : un site bien maintenu vit 5 à 6 ans avant refonte, un site abandonné devient techniquement irrécupérable en 3 à 4 ans — versions PHP obsolètes, extensions mortes, sécurité compromise — et impose une refonte prématurée. Négliger 50 €/mois de maintenance peut donc avancer de deux ans une dépense de 5 000 à 15 000 € : le calcul est vite fait, et notre guide du prix d'une refonte le détaille.",
  },
  {
    question: "Peut-on arrêter un contrat de maintenance à tout moment ?",
    answer:
      "Cela dépend des clauses : le marché pratique majoritairement l'engagement de 12 mois, parfois en tacite reconduction, et certains prestataires proposent du sans-engagement. Trois points à vérifier avant de signer : les conditions de résiliation (préavis, pénalités), la réversibilité — la restitution de vos accès, fichiers et sauvegardes en fin de contrat, idéalement avec une remise des fichiers tous les 3 à 6 mois —, et le sort des heures non consommées de votre banque d'heures, rarement remboursées.",
  },
  {
    question: "Faut-il un contrat de maintenance pour un site Shopify ou Wix ?",
    answer:
      "La plateforme est maintenue par l'éditeur — serveurs, sécurité du socle, mises à jour du back-office : c'est inclus dans l'abonnement, et c'est un vrai avantage du modèle. Mais votre boutique, elle, reste à votre charge : le thème et ses personnalisations, les applications tierces (souvent 5 à 15 sur une boutique active, chacune avec ses mises à jour et réglages), les intégrations (emailing, comptabilité, logistique) et le contenu. Sur une boutique sérieuse, ce travail existe bel et bien — les forfaits de maintenance Shopify professionnels se facturent plusieurs centaines d'euros par mois.",
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
          { label: "Coût de la maintenance d'un site" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les prix 2026 par type de site, un tableau des forfaits réels du marché — nommés —, le contrat décodé clause par clause (SLA, GTI, GTR, pièges), le calcul honnête du « je le fais moi-même », et le chiffre que les vendeurs de forfaits n'osent pas donner : ce que coûte vraiment un site qu'on n'entretient pas."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Vitrine : 30 – 100 €/mois", description: "", color: "violet" },
          { number: "02", title: "E-commerce : 150 – 500 €/mois", description: "", color: "blue" },
          { number: "03", title: "Faille exploitée en 5 h", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte de site" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/shopify-ou-sur-mesure", label: "Shopify ou sur-mesure ?" },
          { href: "/services/maintenance-evolution", label: "Maintenance & évolution" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Coût de la maintenance : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          La maintenance est la ligne du devis que tout le monde a envie
          de rayer — jusqu&apos;au jour où le site affiche l&apos;écran
          rouge « site trompeur » de Google. Ce guide donne{" "}
          <strong>les vrais prix 2026, les forfaits réels du marché
          nommés, le contrat décodé clause par clause</strong> — et le
          chiffre que personne ne met en avant : ce que coûte un site
          qu&apos;on n&apos;entretient pas.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les fourchettes 2026" },
            { id: "de-quoi-parle-t-on", label: "2. Maintenance, hébergement, infogérance : de quoi parle-t-on" },
            { id: "menace", label: "3. Ce qui menace vraiment un site sans entretien" },
            { id: "cout-sinistre", label: "4. Le coût d'un sinistre, chiffré poste par poste" },
            { id: "prix-par-type", label: "5. Les prix 2026 par type de site" },
            { id: "forfaits-reels", label: "6. Les forfaits réels du marché, nommés" },
            { id: "postes", label: "7. Ce que contient (vraiment) un forfait" },
            { id: "regle-pourcentage", label: "8. La règle des « 10-20 % par an » : pour qui elle vaut" },
            { id: "wordpress-vs-statique", label: "9. WordPress ou site moderne : le match maintenance" },
            { id: "contrat", label: "10. Le contrat décodé : SLA, GTI, GTR — et les pièges" },
            { id: "diy", label: "11. Le faire soi-même : le calcul honnête" },
            { id: "duree", label: "12. « Combien de temps dure la maintenance » : la triple réponse" },
            { id: "saas", label: "13. Et sur Shopify ou Wix ? L'entretien « inclus »… du socle seulement" },
            { id: "methode", label: "14. Méthode : choisir son contrat en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les fourchettes 2026</h2>
        <p>
          En 2026, la maintenance d&apos;un site internet coûte en
          France <strong>30 à 100 €/mois pour un site vitrine</strong>{" "}
          (les forfaits basiques démarrent à 29 €),{" "}
          <strong>80 à 250 €/mois pour un site de PME</strong>,{" "}
          <strong>150 à 500 €/mois pour un e-commerce</strong> et{" "}
          <strong>500 à 3 000 €/mois pour un site sur mesure sous
          contrat TMA</strong> avec délais garantis. Les interventions
          ponctuelles se facturent <strong>70 à 150 €/h</strong> —
          souvent le double en urgence. S&apos;ajoutent, sous WordPress,
          les licences d&apos;extensions premium :{" "}
          <strong>500 à 1 000 €/an</strong> pour un site professionnel
          équipé. Toutes les fourchettes de ce guide s&apos;entendent
          hors taxes — comme les devis que vous recevrez.
        </p>
        <GuideTable
          headers={["Type de site", "Forfait mensuel 2026", "Ce qui fait varier", "Le piège à surveiller"]}
          rows={[
            ["Site vitrine (5-20 pages)", "30 – 100 €", "Suivi humain ou non, correctifs inclus ou non", "Le forfait « robot » : mises à jour auto, personne derrière"],
            ["Site de PME (multilingue, formulaires métier)", "80 – 250 €", "Heures de correctifs incluses, support réel", "Les exclusions cachées (contenu, évolutions)"],
            ["E-commerce", "150 – 500 €", "Criticité : chaque heure de panne coûte du CA", "Pas d'engagement de délai de rétablissement"],
            ["Site / application sur mesure (TMA)", "500 – 3 000 €+", "SLA, banque d'heures, astreinte", "Heures non reportables, réversibilité absente"],
            ["Intervention ponctuelle hors contrat", "70 – 150 €/h", "Urgence : 100 €/h minimum, souvent le double", "La récupération après piratage : 250 – 1 500 €, majorée en urgence"],
          ]}
        />

        <InfoBox variant="blue" title="Les 12 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Maintenance</strong> : l&apos;entretien régulier du site — mises à jour, sauvegardes, sécurité, réparations.</li>
            <li><strong>Corrective / préventive / évolutive</strong> : réparer ce qui casse / entretenir pour éviter la panne / améliorer le site.</li>
            <li><strong>CMS</strong> : le logiciel qui gère le contenu du site (WordPress est le plus répandu).</li>
            <li><strong>Extension (plugin)</strong> : un module ajouté au CMS pour une fonction — c&apos;est là que vivent 91 % des failles.</li>
            <li><strong>Sauvegarde externalisée</strong> : une copie du site stockée ailleurs que sur son propre serveur — la seule qui compte le jour du sinistre.</li>
            <li><strong>Hébergement</strong> : la location du serveur qui fait tourner le site (5 à 80 €/mois) — distinct de la maintenance.</li>
            <li><strong>Infogérance</strong> : la gestion complète du serveur par un prestataire, maintenance incluse — l&apos;inverse n&apos;est pas vrai.</li>
            <li><strong>SLA</strong> : le niveau de service garanti par contrat — noir sur blanc, avec des délais chiffrés.</li>
            <li><strong>GTI / GTR</strong> : le délai garanti avant le début d&apos;intervention / avant le retour en ligne (ex. : GTI 1 h, GTR 4 h).</li>
            <li><strong>Banque d&apos;heures</strong> : un crédit d&apos;heures prépayées pour les corrections et petites évolutions.</li>
            <li><strong>TMA</strong> : la tierce maintenance applicative — le contrat d&apos;entretien complet d&apos;un site ou logiciel sur mesure.</li>
            <li><strong>Réversibilité</strong> : la garantie de récupérer accès, fichiers et sauvegardes si vous changez de prestataire.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Maintenance, hébergement, infogérance : de quoi parle-t-on</h2>
        <p>
          Trois lignes de facture que tout le monde confond.{" "}
          <strong>L&apos;hébergement</strong>, c&apos;est le local : le
          serveur qui fait tourner le site, 5 à 80 €/mois selon la
          gamme. <strong>La maintenance</strong>, c&apos;est
          l&apos;entretien du fonds de commerce qui occupe le local :
          mises à jour, sauvegardes, sécurité, réparations.{" "}
          <strong>L&apos;infogérance</strong>, c&apos;est le régisseur
          qui gère tout l&apos;immeuble — serveur, supervision,
          maintenance comprise. La règle à retenir :{" "}
          <strong>l&apos;infogérance inclut la maintenance ; la
          maintenance n&apos;inclut presque jamais
          l&apos;hébergement</strong>. D&apos;où l&apos;unique question
          qui assainit tous les devis : « qu&apos;est-ce qui est inclus,
          ligne par ligne ? »
        </p>
        <p>
          L&apos;analogie la plus juste est celle de la chaudière :
          personne ne conteste son contrat d&apos;entretien annuel —
          on sait qu&apos;une chaudière négligée finit par lâcher un
          soir de janvier. Un site professionnel est la chaudière de
          votre acquisition de clients ; il obéit à la même loi.
          Fil rouge de ce guide : <strong>la fromagerie Perrin, à
          Chambéry</strong> — un WordPress de 2023, 18 pages, un module
          de commande de plateaux apéritif qui encaisse environ
          2 000 €/mois (le triple en décembre), et aucune maintenance
          depuis la mise en ligne. Son cas va nous servir à chiffrer
          chaque décision.
        </p>

        <h2 id="menace">3. Ce qui menace vraiment un site sans entretien</h2>
        <p>
          Le premier réflexe d&apos;un dirigeant est de penser :
          « qui viendrait pirater le site d&apos;une fromagerie ? »
          C&apos;est la bonne question, et la réponse change tout :{" "}
          <strong>personne ne le choisit — des robots l&apos;essaient,
          comme tous les autres</strong>. Les chiffres 2025-2026 de
          l&apos;écosystème WordPress (43 % du web, et la
          grande majorité des sites de PME françaises) donnent la mesure
          d&apos;une menace industrielle :
        </p>
        <ul>
          <li>
            <strong>11 334 vulnérabilités recensées en 2025</strong>{" "}
            (+42 % en un an), dont <strong>91 % dans les
            extensions</strong> — le cœur de WordPress, lui, est sain
            (6 failles mineures). C&apos;est votre lot
            d&apos;extensions qui est la surface d&apos;attaque
            (rapport Patchstack 2026).
          </li>
          <li>
            <strong>5 heures</strong> : le délai médian entre la
            publication d&apos;une faille très ciblée et son
            exploitation active par des robots. Un site
            « vérifié de temps en temps » n&apos;a mécaniquement aucune
            chance.
          </li>
          <li>
            <strong>46 % des failles ne reçoivent jamais de
            correctif</strong> de leur développeur : mettre à jour ne
            suffit pas, il faut un humain qui repère et remplace les
            extensions abandonnées — 1,6 million de sites utilisent des
            extensions « zombies », mortes mais toujours installées.
          </li>
          <li>
            Le lien avec l&apos;entretien est documenté année après
            année : <strong>environ la moitié des sites WordPress
            piratés n&apos;étaient pas à jour</strong> au moment de
            l&apos;infection (rapports Sucuri).
          </li>
        </ul>
        <InfoBox variant="amber" title="« J'ai activé les mises à jour automatiques, je suis tranquille »">
          C&apos;est mieux que rien, et c&apos;est insuffisant — pour
          trois raisons sourcées. Une mise à jour peut casser le site
          (incompatibilité entre extensions) : sans humain qui teste et
          sait restaurer, l&apos;automatisme devient le sinistre. Une
          faille sur deux n&apos;est jamais corrigée par son
          développeur : aucune mise à jour ne protégera une extension
          abandonnée, il faut la remplacer. Et la sauvegarde
          automatique de l&apos;hébergeur vit souvent sur la même
          infrastructure que le site : l&apos;incendie du datacenter
          OVH en 2021 a détruit des sites ET leurs sauvegardes — le
          tribunal a condamné l&apos;hébergeur à verser plus de
          100 000 € à un client dont la sauvegarde souscrite était
          stockée… dans le même bâtiment. Une sauvegarde n&apos;existe
          que si elle est ailleurs, et testée.
        </InfoBox>

        <h2 id="cout-sinistre">4. Le coût d&apos;un sinistre, chiffré poste par poste</h2>
        <p>
          Mettons des euros sur « le jour où ça arrive ». Quatre
          sinistres types, tous documentés :
        </p>
        <GuideTable
          headers={["Sinistre", "Coût direct", "Le coût qu'on oublie"]}
          rows={[
            ["Piratage (site vitrine)", "250 – 600 € de nettoyage", "Vos visiteurs voient l'écran rouge « site trompeur »"],
            ["Piratage (boutique / base touchée)", "600 – 1 500 € de nettoyage", "Retrait de la liste noire Google : 3 à 5 jours ouvrés, incompressibles"],
            ["Bandeau cookies non conforme (jamais vérifié)", "Jusqu'à 20 000 € pour une TPE/PME (procédure simplifiée CNIL)", "Plus de 60 % des sanctions CNIL 2025 ont visé des TPE/PME"],
            ["Perte de données sans sauvegarde externe", "Reconstruction partielle ou totale du site", "Des années de contenus et de référencement, définitivement perdus"],
          ]}
        />
        <p>
          Deux références pour l&apos;échelle. La CNIL —
          l&apos;autorité française qui contrôle l&apos;usage des
          données personnelles — a infligé en novembre 2025{" "}
          <strong>750 000 € d&apos;amende à Condé Nast
          (Vanity Fair)</strong> parce que le bouton « Tout refuser »
          de son bandeau cookies… ne refusait rien : un bandeau installé
          puis jamais vérifié est très exactement un défaut de
          maintenance. Et l&apos;étude Asterès chiffre le coût direct
          moyen d&apos;une cyberattaque réussie en France à{" "}
          <strong>25 600 €</strong> — sur 347 000 attaques réussies
          recensées en 2022, 330 000 ont touché des PME. Pour la
          fromagerie Perrin, le scénario noir est plus modeste mais
          parlant : un piratage début décembre — nettoyage 800 €,
          écran rouge pendant les 5 jours où elle prend ses commandes
          de fêtes (~1 000 € de plateaux envolés), et la confiance à
          reconstruire. <strong>Environ 2 000 €, soit près de trois ans
          du forfait de maintenance qui l&apos;aurait très
          probablement évité.</strong> C&apos;est le calcul de fond de
          ce guide : la maintenance est une assurance dont le sinistre
          est quasi certain à moyen terme.
        </p>
        <p>
          Un mot enfin sur l&apos;échéance que beaucoup de PME
          découvrent tard : depuis le 28 juin 2025,
          l&apos;accessibilité numérique est obligatoire pour les
          services en ligne destinés aux particuliers (« B2C », dont
          l&apos;e-commerce) de toutes les entreprises — seules les
          micro-entreprises cumulant moins de 10 salariés ET moins de
          2 M€ de chiffre d&apos;affaires en sont exemptées ; dépasser
          un seul de ces deux seuils suffit à être concerné — avec des
          sanctions pouvant atteindre 50 000 € par service. Maintenir
          un site en 2026, c&apos;est aussi maintenir sa conformité.
        </p>

        <h2 id="prix-par-type">5. Les prix 2026 par type de site</h2>
        <p>
          Le marché français est remarquablement standardisé — les
          fourchettes ci-dessous croisent huit guides tarifaires et
          pages de prix concurrents, pour neutraliser le biais de
          chacun :
        </p>
        <GuideTable
          headers={["Niveau", "Prix/mois", "Contenu type"]}
          rows={[
            ["Basique (« mises à jour + sauvegardes »)", "29 – 50 €", "Mises à jour testées, sauvegardes quotidiennes externalisées, scan sécurité"],
            ["Intermédiaire (+ sécurité + support)", "70 – 170 €", "Pare-feu, surveillance 24/7, support humain, petites corrections incluses"],
            ["Complet (+ correctifs + engagements)", "170 – 300 €", "Heures de correctifs, environnement de test, délais d'intervention garantis"],
            ["TMA sur mesure", "500 – 3 000 €+", "SLA contractuels, banque d'heures, astreinte possible, interlocuteur dédié"],
          ]}
        />
        <p>
          La vraie ligne de partage du marché n&apos;est pas
          « freelance ou agence » : c&apos;est{" "}
          <strong>« maintenance-robot » contre « maintenance avec un
          humain derrière »</strong>. Sous 50 €/mois, vous achetez
          essentiellement des automatismes (mises à jour lancées,
          sauvegardes programmées) — utiles, mais personne ne teste,
          n&apos;audite les extensions abandonnées ni ne répond au
          téléphone le jour du problème. Le passage à 70-170 €/mois
          paie précisément cela : un humain qui vérifie, corrige et
          répond. Pour la fromagerie Perrin — 18 pages et un module de
          commande qui encaisse —, le bon niveau est l&apos;entrée du
          régime « avec un humain derrière », dimensionné pour un site
          qui vend : <strong>autour de 60 à 80 €/mois</strong> (le
          tableau de la section 6 en montre dès 69 €), soit 720 à
          960 €/an — la fourchette e-commerce complète (150 – 500 €)
          vise, elle, les vraies boutiques à catalogue, stocks et
          tunnel de commande.
        </p>

        <h2 id="forfaits-reels">6. Les forfaits réels du marché, nommés</h2>
        <p>
          Aucun guide concurrent ne le fait, alors le voici : un
          échantillon de forfaits réellement affichés sur les pages
          tarifs de prestataires français, relevés en juillet 2026 —
          non pas pour les recommander (nous n&apos;avons testé aucun
          d&apos;eux), mais pour ancrer les fourchettes dans le réel :
        </p>
        <GuideTable
          headers={["Prestataire", "Forfaits affichés", "À noter"]}
          rows={[
            ["Grain de Site", "29 / 39 / 49 €/mois", "Licences d'extensions premium incluses pendant le contrat"],
            ["TYTAE", "29 / 39 / 69 €/mois", "Hébergement inclus ; interventions 85 €/h, pack 10 h à 800 €"],
            ["Studio HTTP", "39 / 99 €/mois", "1 h de webmastering (petites modifications de contenu) incluse au palier supérieur"],
            ["Harsene", "49 / 69 €/mois", "Sans engagement ; +10 €/mois par langue supplémentaire"],
            ["Palmsquare", "89 / 169 / 289 €/mois", "Trois paliers d'agence classiques"],
            ["Pulsar Agency", "159 / 209 / 499 €/mois", "Seul à afficher des GTR chiffrés : 24 h / 8 h / 4 h selon pack"],
          ]}
        />
        <p>
          Trois leçons de ce tableau. D&apos;abord, les prix
          d&apos;appel à 29-49 € existent vraiment — en régime
          « robot + un peu d&apos;humain », et c&apos;est honnête pour
          un site vitrine simple. Ensuite, l&apos;écart entre 49 € et
          499 € ne paie pas cinq fois plus de mises à jour : il paie
          des <strong>engagements</strong> — des délais de
          rétablissement garantis, une astreinte, des heures incluses.
          Enfin, un seul de ces prestataires affiche ses délais
          garantis : c&apos;est précisément la question à poser à tous
          les autres, et l&apos;objet de la section 10.
        </p>

        <h2 id="postes">7. Ce que contient (vraiment) un forfait</h2>
        <p>
          Pour comparer deux devis, il faut la liste des postes — la
          voici, avec les ordres de grandeur unitaires du marché :
        </p>
        <GuideTable
          headers={["Poste", "Rythme", "Valeur unitaire marché"]}
          rows={[
            ["Mises à jour CMS / thème / extensions, testées", "1-4 fois/mois", "1 – 4 h/mois de travail réel"],
            ["Sauvegardes externalisées + tests de restauration", "Quotidien", "Le poste non négociable — vérifier « externalisée »"],
            ["Surveillance disponibilité (uptime) + sécurité", "24/7 automatisé", "1 – 2 €/site/mois en outil, la valeur est dans la réaction"],
            ["Correctifs (bugs, formulaires, incompatibilités)", "À la demande", "70 – 150 €/h hors forfait"],
            ["Licences d'extensions premium (WordPress)", "Annuel", "500 – 1 000 €/an — parfois incluses, souvent en sus"],
            ["Petites évolutions (banque d'heures)", "Mensuel/annuel", "70 – 150 €/h prépayées, vérifier le report"],
            ["Rapport mensuel", "Mensuel", "La preuve que le travail a eu lieu"],
          ]}
        />
        <p>
          Le rapport mensuel mérite une phrase : c&apos;est la
          différence entre payer un service et payer une promesse. Un
          prestataire qui liste chaque mois ce qu&apos;il a mis à jour,
          sauvegardé et corrigé rend son forfait auditable — exigez-le,
          il est standard chez tous les sérieux.
        </p>

        <h2 id="regle-pourcentage">8. La règle des « 10-20 % par an » : pour qui elle vaut</h2>
        <p>
          Vous croiserez partout la règle « budgétez 10 à 20 % du coût
          de création par an en maintenance ». Précision honnête, car
          nous l&apos;utilisons nous-mêmes dans nos guides :{" "}
          <strong>cette règle vient du logiciel sur mesure</strong>, où
          elle est un standard industriel justifié — un outil métier à
          30 000 € appelle bien 3 000 à 6 000 €/an d&apos;entretien et
          d&apos;évolutions, notre{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">guide du prix
          d&apos;un logiciel sur mesure</Link> le détaille. Pour un
          site vitrine, le marché fonctionne autrement : en{" "}
          <strong>forfaits catalogue</strong> (section 6), largement
          décorrélés du prix de création — un site à 2 000 € et un site
          à 8 000 € paieront souvent le même forfait à 49 €/mois. Les
          deux logiques convergent aux extrêmes : plus le site est
          spécifique (e-commerce riche, sur mesure), plus la
          maintenance redevient proportionnelle au projet — c&apos;est
          le régime TMA. Retenez donc : <strong>forfait catalogue pour
          un site standard, pourcentage du projet pour du sur
          mesure</strong> — et méfiez-vous d&apos;un devis qui applique
          15 % à un site vitrine à 10 000 € sans le justifier.
        </p>

        <h2 id="wordpress-vs-statique">9. WordPress ou site moderne : le match maintenance</h2>
        <p>
          La facture de maintenance dépend d&apos;abord d&apos;un choix
          que vous avez fait bien avant : le socle technique. Un site
          WordPress vit sur un moteur et des extensions à tenir à jour
          en permanence — c&apos;est toute la section 3. Un site
          statique moderne (généré à l&apos;avance, comme nos sites
          Next.js) n&apos;a <strong>ni base de données exposée, ni
          extensions à maintenir, ni surface d&apos;attaque
          équivalente</strong> : l&apos;entretien se réduit pour
          l&apos;essentiel à des mises à jour périodiques des briques
          logicielles qui composent le site (ses « dépendances »), sans
          licences annuelles.
        </p>
        <GuideTable
          headers={["Poste annuel", "WordPress professionnel", "Site statique moderne (Next.js)"]}
          rows={[
            ["Forfait de maintenance", "360 – 1 200 € (30-100 €/mois)", "Réduit — souvent inclus dans une TMA légère"],
            ["Licences d'extensions premium", "500 – 1 000 €", "0 €"],
            ["Hébergement adapté", "60 – 960 € (du mutualisé — serveur partagé entre plusieurs sites — à l'infogéré)", "0 – 240 €"],
            ["Risque sécurité structurel", "91 % des failles viennent des extensions", "Surface d'attaque minimale par conception"],
          ]}
        />
        <p>
          Honnêteté de lecture : ce tableau ne dit pas « WordPress est
          un mauvais choix » — il dit qu&apos;un WordPress se paie en
          entretien récurrent, quand un site statique se paie
          davantage à la construction. Sur 5 ans, l&apos;écart
          d&apos;entretien (souvent plus de 1 000 €/an tout compris)
          finance une partie de la différence de prix initial. Le
          verdict complet par profil est dans notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">comparatif Next.js
          ou WordPress</Link> ; côté budget, c&apos;est un paramètre à
          poser dès le devis de création — pas au premier piratage.
        </p>

        <GuideInlineCTA
          title="Votre site est-il entretenu — ou juste en ligne ?"
          description="Décrivez votre site en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, avec un diagnostic franc de son état (mises à jour, sauvegardes, sécurité, conformité) et une proposition de maintenance au forfait fixe, engagements écrits."
          tags={["Réponse sous 24 h ouvrées", "SLA contractuel", "Réversibilité garantie"]}
        />

        <h2 id="contrat">10. Le contrat décodé : SLA, GTI, GTR — et les pièges</h2>
        <p>
          Un contrat de maintenance sérieux tient en huit blocs :
          le périmètre (corrective / préventive / évolutive,
          distinguées noir sur blanc), les mises à jour, les
          sauvegardes (fréquence, externalisation, tests), le support
          et ses délais, les exclusions explicites, le prix et la
          résiliation — y compris la clause de révision annuelle
          (nombre de contrats s&apos;indexent automatiquement, souvent
          sur l&apos;indice Syntec : exigez un plafond
          d&apos;augmentation chiffré) et le plafond de responsabilité
          du prestataire, souvent limité à quelques mois de forfait,
          à confronter à ce que vous coûte réellement une semaine de
          panne —, la réversibilité, et le volet données
          personnelles (le prestataire accède à vos données : il est
          sous-traitant au sens du RGPD). Le vocabulaire des délais,
          traduit une fois pour toutes : le <strong>SLA</strong> est
          l&apos;engagement de service global ; la <strong>GTI</strong>{" "}
          (garantie de temps d&apos;intervention) est le délai maximal
          avant qu&apos;on <em>commence</em> à s&apos;occuper de votre
          panne ; la <strong>GTR</strong> (garantie de temps de
          rétablissement) est le délai maximal avant que le site{" "}
          <em>refonctionne</em>. « GTI 1 h / GTR 4 h » se lit : on
          intervient dans l&apos;heure, vous êtes en ligne dans les
          4 heures. Les standards du marché : incident critique traité
          sous 4 h ouvrées, incident important sous 24 h, anomalie
          mineure sous 48-72 h — et un juriste spécialisé recommande
          d&apos;y adosser des pénalités (par exemple 5 % de remise
          mensuelle par heure de dépassement).
        </p>
        <p>
          Même vigilance sur la disponibilité promise par
          l&apos;hébergement : les pourcentages se ressemblent, les
          réalités non. Un engagement de disponibilité de 99,9 % — le
          standard de l&apos;hébergement mutualisé — autorise environ{" "}
          <strong>8 h 45 d&apos;indisponibilité par an</strong> ; un
          99,99 % (infrastructure redondée) en autorise{" "}
          <strong>52 minutes</strong>. L&apos;écart affiché est de
          0,09 point ; l&apos;écart réel est un facteur dix. Pour un
          site qui encaisse, cette ligne du contrat
          d&apos;hébergement se lit avec la même attention que la GTR
          du contrat de maintenance.
        </p>
        <InfoBox variant="amber" title="Les 4 pièges contractuels documentés">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Les heures qui s&apos;évaporent.</strong> Les heures mensuelles non consommées ne sont généralement pas reportées — sauf banque d&apos;heures annuelle : demandez-la.</li>
            <li><strong>L&apos;engagement 12 mois sans période d&apos;essai.</strong> Courant ; négociez 1 à 3 mois d&apos;essai ou du sans-engagement (ça existe, section 6).</li>
            <li><strong>Le périmètre flou.</strong> « Maintenance du site » sans distinguer correctif / préventif / évolutif : c&apos;est la première source de litiges — chaque mot doit être défini.</li>
            <li><strong>La réversibilité absente.</strong> Sans clause de restitution (accès, fichiers, sauvegardes — idéalement remis tous les 3-6 mois), changer de prestataire peut coûter très cher : un cabinet d&apos;avocats documente une migration passée de 15 000 € budgétés à 40 000 € faute de réversibilité.</li>
          </ul>
        </InfoBox>

        <h2 id="diy">11. Le faire soi-même : le calcul honnête</h2>
        <p>
          Oui, un dirigeant peut entretenir lui-même un site vitrine
          simple — à condition de mesurer ce que « entretenir » veut
          dire : <strong>2 à 4 heures par mois minimum</strong>, chaque
          mois, pour les mises à jour testées, les sauvegardes
          vérifiées et un œil sur la sécurité. Les outils sérieux
          existent et leurs prix sont publics : ManageWP (gratuit,
          options à 1-2 $ par site et par mois), MainWP (gratuit,
          version Pro à 199 $/an). Le calcul à faire est celui du coût
          d&apos;opportunité :
        </p>
        <FormulaBox>
          <strong>Coût réel du « je m&apos;en occupe » = heures passées
          × valeur de votre heure</strong>
          <br />
          Chez Perrin : 3 h/mois × 40 € (l&apos;heure d&apos;un gérant,
          prudemment) = <strong>120 €/mois</strong> — le double du
          forfait à 60 €/mois qui ferait le travail avec un
          professionnel derrière.
          <br />
          <br />
          Et le vrai risque n&apos;est pas là : il est dans la
          régularité. La maintenance faite « quand on a le temps »
          finit toujours par ne plus être faite — or une faille très
          ciblée s&apos;exploite en 5 heures, pas en 5 semaines.
        </FormulaBox>
        <p>
          Notre position : le DIY est défendable pour un site sans
          enjeu commercial. Dès que le site génère des contacts ou des
          ventes — le cas Perrin —, la question n&apos;est plus
          « puis-je le faire ? » mais « est-ce le meilleur usage de mes
          heures, avec ce niveau de risque ? ». La réponse se calcule,
          et elle penche rarement du côté du bricolage.
        </p>

        <h2 id="duree">12. « Combien de temps dure la maintenance » : la triple réponse</h2>
        <p>
          Cette question — que Google suggère réellement — cache trois
          questions, et aucune page ne répond aux trois. Voici les
          réponses :
        </p>
        <ul>
          <li>
            <strong>La durée d&apos;une opération.</strong> Mise à jour
            du CMS : 1 à 3 h. Lot mensuel de mises à jour
            d&apos;extensions : 2 à 4 h. Réparation de liens brisés :
            30 min à 2 h. Restauration après piratage : 4 à 8 h.
            Nouvelle fonctionnalité : plusieurs jours (c&apos;est de
            l&apos;évolutif, hors forfait de base).
          </li>
          <li>
            <strong>Le temps récurrent.</strong> 2 à 4 h/mois pour un
            site vitrine bien tenu ; davantage pour un e-commerce
            (tests avant les périodes critiques, surveillance
            renforcée).
          </li>
          <li>
            <strong>La durée du contrat.</strong> 12 mois est le
            standard, souvent en tacite reconduction ; le
            sans-engagement existe (section 6). Et la maintenance
            elle-même dure… toute la vie du site : elle ne
            s&apos;arrête que le jour de la refonte — qu&apos;elle
            aura contribué à repousser de plusieurs années (notre{" "}
            <Link href="/guides/prix-refonte-site-internet">guide du
            prix d&apos;une refonte</Link> chiffre ce lien, et notre{" "}
            <Link href="/guides/refonte-sans-perdre-son-seo">guide
            « refondre sans perdre son SEO »</Link> sécurise le
            moment venu).
          </li>
        </ul>

        <h2 id="saas">13. Et sur Shopify ou Wix ? L&apos;entretien « inclus »… du socle seulement</h2>
        <p>
          Les plateformes louées (Shopify, Wix, Squarespace) ont un
          vrai argument : <strong>l&apos;éditeur maintient le
          socle</strong> — serveurs, sécurité de la plateforme, mises à
          jour du back-office, disponibilité. C&apos;est inclus dans
          l&apos;abonnement, et c&apos;est un travail que vous ne
          paierez jamais en plus. Mais l&apos;étage au-dessus reste à
          votre charge : le thème et ses personnalisations, les
          applications tierces — souvent 5 à 15 sur une boutique
          active, chacune avec ses réglages, ses mises à jour et ses
          conflits potentiels —, les intégrations (emailing,
          comptabilité, logistique) et la conformité de votre propre
          contenu (bandeau cookies compris : l&apos;amende Condé Nast
          de la section 4 concernait un site parfaitement hébergé). Sur
          une boutique sérieuse, ce travail se compte en heures
          mensuelles réelles, et les forfaits de maintenance Shopify
          professionnels se facturent plusieurs centaines
          d&apos;euros par mois. La nuance à retenir :{" "}
          <strong>plateforme louée = socle maintenu, boutique à
          entretenir quand même</strong> — notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">comparatif
          Shopify ou sur-mesure</Link> intègre ce poste dans le coût
          total, et notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">comparatif
          WooCommerce ou Shopify</Link> met face à face les deux
          modèles d&apos;entretien.
        </p>

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>30 – 100 €/mois</strong> : le forfait d&apos;un site vitrine (e-commerce : 150 – 500 €, TMA sur mesure : 500 €+).</li>
            <li><strong>5 heures</strong> : le délai médian entre publication d&apos;une faille ciblée et son exploitation par des robots — l&apos;argument qui disqualifie la maintenance « de temps en temps ».</li>
            <li><strong>250 – 1 500 € + 3 à 5 jours d&apos;écran rouge</strong> : le coût d&apos;un piratage, avant même les ventes perdues.</li>
            <li><strong>500 – 1 000 €/an</strong> : les licences d&apos;extensions premium d&apos;un WordPress professionnel — le poste que les devis oublient.</li>
            <li><strong>GTI / GTR</strong> : les deux sigles à exiger chiffrés au contrat — le délai avant intervention, et avant retour en ligne.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">14. Méthode : choisir son contrat en 5 étapes</h2>
        <ol>
          <li>
            <strong>Évaluez l&apos;enjeu, pas le site.</strong> Que
            coûte une semaine de panne ou d&apos;écran rouge — en
            commandes, en contacts, en image ? C&apos;est ce chiffre
            (section 4) qui dimensionne le contrat, pas le nombre de
            pages.
          </li>
          <li>
            <strong>Choisissez le niveau</strong> : robot (moins de
            50 €, site sans enjeu), humain (70-170 €, le standard PME),
            engagements garantis (170 €+, dès que le site encaisse ou
            génère les contacts qui vous font vivre).
          </li>
          <li>
            <strong>Comparez les devis poste par poste</strong> avec le
            tableau de la section 7 — mises à jour testées, sauvegardes
            externalisées avec tests, licences incluses ou non, heures
            de correctifs et leur report.
          </li>
          <li>
            <strong>Exigez les quatre clauses</strong> : périmètre
            défini (correctif / préventif / évolutif), délais chiffrés
            (GTI/GTR), réversibilité avec remise périodique des
            fichiers, et rapport mensuel.
          </li>
          <li>
            <strong>Traitez la cause, pas seulement le symptôme.</strong>{" "}
            Si votre facture de maintenance explose ou si les
            incidents se répètent, le problème est peut-être le socle —
            auquel cas le budget est mieux investi dans une refonte sur
            une base saine que dans l&apos;acharnement thérapeutique.
          </li>
        </ol>
        <p>
          C&apos;est la logique de notre offre de{" "}
          <Link href="/services/maintenance-evolution">maintenance et
          évolution</Link> : un forfait mensuel au périmètre écrit,
          des <strong>SLA contractuels</strong>, une astreinte pour les
          sites critiques, la réversibilité garantie — et un avis franc
          quand le socle ne mérite plus d&apos;être maintenu.{" "}
          <Link href="/demarrer-un-projet">Décrivez votre site en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées,
          gratuite et sans engagement. Pour situer ce budget dans le
          coût complet d&apos;un site, notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">panorama
          des prix d&apos;un site internet</Link> complète ce guide.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" target="_blank" rel="noopener noreferrer">Patchstack, State of WordPress Security 2026</a>{" "}
          (11 334 vulnérabilités 2025, 91 % extensions, délai médian
          d&apos;exploitation 5 h, 46 % non corrigées) et rapport 2025 ;{" "}
          <a href="https://www.wordfence.com/blog/2025/04/2024-annual-wordpress-security-report-by-wordfence/" target="_blank" rel="noopener noreferrer">Wordfence, rapport annuel 2024</a> ;{" "}
          <a href="https://sucuri.net/reports/2023-hacked-website-report/" target="_blank" rel="noopener noreferrer">Sucuri, Hacked Website Report</a>{" "}
          (sites piratés non à jour ; liste noire Google) ;{" "}
          <a href="https://asteres.fr/site/wp-content/uploads/2023/06/ASTERES-CRIP-Cout-des-cyberattaques-reussies-16062023.pdf" target="_blank" rel="noopener noreferrer">Asterès/CRIP, coût des cyberattaques réussies en France</a> ;{" "}
          <a href="https://www.cnil.fr/fr/bilan-sanctions-2025" target="_blank" rel="noopener noreferrer">CNIL, bilan des sanctions 2025</a>{" "}
          (dont Condé Nast, 750 000 €) ;{" "}
          <a href="https://www.lemondeinformatique.fr/actualites/lire-incendie-sgb2-strasbourg-ovh-condamne-a-verser-plus-de-100-000-eteuro-89434.html" target="_blank" rel="noopener noreferrer">Le Monde Informatique, condamnation OVHcloud (incendie de Strasbourg)</a> ;{" "}
          <a href="https://w3techs.com/technologies/details/cm-wordpress" target="_blank" rel="noopener noreferrer">W3Techs, parts de marché WordPress</a> ;
          European Accessibility Act / RGAA (transposition française,
          seuils et sanctions) ; pages tarifs publiques des
          prestataires cités (Grain de Site, TYTAE, Studio HTTP,
          Harsene, Palmsquare, Pulsar Agency) et{" "}
          <a href="https://managewp.com/pricing" target="_blank" rel="noopener noreferrer">ManageWP</a> /{" "}
          <a href="https://mainwp.com/pricing/" target="_blank" rel="noopener noreferrer">MainWP</a> ;
          fourchettes de marché : recoupement de guides français
          concurrents 2025-2026 (WeComm, Digidatale, KBCOM, CCISM,
          AmphiBee, Toonet Création, Ad-Sum, Huggii…) ; mécanismes
          contractuels : BDC (Canada) et analyses juridiques
          spécialisées (Mirabile Avocat). Les prix évoluent : vérifiez
          avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des prix de marché
            constatés, donnés à titre indicatif : seul un devis établi
            sur votre site vous engage. Les prestataires nommés le sont
            au titre de leurs tarifs publics, sans recommandation ni
            partenariat. Ce guide ne constitue pas un conseil juridique
            personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
