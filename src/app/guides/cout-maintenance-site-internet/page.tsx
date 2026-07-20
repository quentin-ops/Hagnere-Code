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
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
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
      "Il n'existe pas de moyenne représentative applicable à tous les sites. Les offres publiées varient avec le socle, la fréquence des contrôles, les sauvegardes, le support, l'astreinte, les délais contractuels et les évolutions. Comparez des devis qui détaillent ces lignes, les exclusions, l'unité des dépassements et les conditions d'urgence.",
  },
  {
    question: "Combien coûte réellement la maintenance annuelle d'un site web ?",
    answer:
      "Additionnez le forfait ou le temps d'intervention, les licences, l'hébergement, le domaine, les sauvegardes, la surveillance, le support et les évolutions. Le total dépend de votre architecture et du niveau de service ; demandez un scénario annuel bas, central et haut plutôt qu'un pourcentage du prix de création.",
  },
  {
    question: "La maintenance d'un site internet inclut-elle l'hébergement ?",
    answer:
      "Cela dépend du contrat. Hébergement, infogérance applicative, mises à jour, sauvegardes et support peuvent être regroupés ou facturés séparément. Exigez le fournisseur de chaque service, son prix, ses limites, les responsabilités et la procédure de sortie.",
  },
  {
    question: "La maintenance est-elle obligatoire pour un site WordPress ?",
    answer:
      "Aucune loi générale n'impose un contrat de maintenance WordPress, mais l'exploitant doit gérer les mises à jour, accès, sauvegardes et incidents adaptés au risque. L'absence de suivi augmente l'exposition sans rendre un piratage certain. Fréquence, tests et délai de traitement doivent venir de votre architecture et des avis de sécurité.",
  },
  {
    question: "Peut-on faire la maintenance de son site soi-même ?",
    answer:
      "Oui si vous disposez des compétences, accès, procédures et temps nécessaires. Listez les tâches, mesurez le temps réel, testez les sauvegardes et définissez une escalade en cas d'incident. Les outils automatisent une partie du travail sans remplacer la vérification ni fixer un nombre d'heures universel.",
  },
  {
    question: "Que se passe-t-il si mon site est piraté ?",
    answer:
      "Isolez le système, préservez les éléments utiles à l'analyse, identifiez le périmètre, restaurez une version saine, corrigez la cause et examinez les obligations de notification avec les personnes compétentes. Le coût et le délai dépendent de l'incident, des sauvegardes, des données et des fournisseurs ; demandez une procédure et un tarif d'urgence écrits avant qu'il ne survienne.",
  },
  {
    question: "Quelle est la différence entre maintenance et TMA ?",
    answer:
      "La TMA désigne la maintenance d'une application confiée à un tiers. Elle peut inclure corrective, préventive, évolutive, support, astreinte ou objectifs de service, mais rien n'est automatique : seuls le contrat, ses indicateurs, horaires, exclusions et responsabilités créent ces engagements.",
  },
  {
    question: "Quelle différence entre maintenance corrective et évolutive ?",
    answer:
      "La corrective répare ce qui casse : bug, formulaire en panne, incompatibilité après une mise à jour. La préventive entretient pour éviter la panne : mises à jour, sauvegardes, surveillance, sécurité. L'évolutive améliore : nouvelle section, nouvelle fonctionnalité, optimisation. Cette distinction est le cœur de votre contrat : un forfait basique couvre la préventive, inclut plus ou moins de correctif, et facture l'évolutif à part (banque d'heures ou devis). Un périmètre flou entre les trois est la première source de litiges — exigez les trois mots noir sur blanc.",
  },
  {
    question: "Les sauvegardes sont-elles incluses dans un contrat de maintenance ?",
    answer:
      "Pas nécessairement. Vérifiez la fréquence, la rétention, le chiffrement, la séparation du système principal, la responsabilité du fournisseur et surtout les tests de restauration. Les objectifs de perte de données et de reprise doivent être adaptés au site et écrits.",
  },
  {
    question: "Combien de temps dure la maintenance d'un site internet ?",
    answer:
      "Une mise à jour, une restauration et le suivi récurrent n'ont pas de durée standard : volume, tests, dépendances et incident changent l'effort. Le contrat doit préciser la période d'engagement, le renouvellement, le préavis et la sortie ; la charge opérationnelle se mesure puis s'ajuste.",
  },
  {
    question: "Quelle différence entre maintenance et refonte ?",
    answer:
      "La maintenance entretient l'existant ; la refonte modifie plus largement le design, le contenu, l'architecture ou le socle. Aucune durée de vie fixe ne sépare les deux. Un audit doit comparer correction ciblée et reconstruction à partir de l'état réel, des risques et des objectifs.",
  },
  {
    question: "Peut-on arrêter un contrat de maintenance à tout moment ?",
    answer:
      "Cela dépend du contrat. Vérifiez durée, renouvellement, préavis, frais, réversibilité, remise des accès et sauvegardes, assistance de sortie et sort des heures ou crédits non consommés. Ne supposez ni remboursement ni conservation sans clause écrite.",
  },
  {
    question: "Faut-il un contrat de maintenance pour un site Shopify ou Wix ?",
    answer:
      "La plateforme est maintenue par l'éditeur — serveurs, sécurité du socle, mises à jour du back-office : c'est inclus dans l'abonnement, et c'est un vrai avantage du modèle — surtout pour un micro-budget ou un test de marché. Mais votre boutique, elle, reste à votre charge : le thème et ses personnalisations, les applications tierces (souvent 5 à 15 sur une boutique active, chacune avec ses mises à jour et réglages), les intégrations (emailing, comptabilité, logistique) et le contenu. Sur une boutique sérieuse, ce travail existe bel et bien — les forfaits de maintenance Shopify professionnels se facturent plusieurs centaines d'euros par mois. Autrement dit, l'entretien « inclus » ne couvre que le socle : une fois ce poste réintégré, le « zéro maintenance » ne justifie plus à lui seul le choix de la plateforme face à un site codé sur une base saine, dont l'entretien se limite à ses dépendances.",
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
        showWhitePaperPromo
      >
        <p className="lead">
          La maintenance est une ligne du devis facile à sous-estimer — jusqu&apos;au
          jour où le site affiche l&apos;écran
          rouge « site trompeur » de Google. Ce guide donne{" "}
          <strong>les vrais prix 2026, les forfaits réels du marché
          nommés, le contrat décodé clause par clause</strong> — et le coût d&apos;un site
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
            <li><strong>SLA</strong> : un engagement de niveau de service mesurable, défini par le contrat avec sa méthode de calcul.</li>
            <li><strong>GTI / GTR</strong> : des sigles employés pour différents délais d&apos;intervention ou de rétablissement ; leur début, leur fin et leur preuve doivent être écrits en français dans le contrat.</li>
            <li><strong>Banque d&apos;heures</strong> : un crédit d&apos;heures prépayées pour les corrections et petites évolutions.</li>
            <li><strong>TMA</strong> : la tierce maintenance applicative — une organisation confiée à un tiers pour maintenir et faire évoluer une application selon un périmètre écrit.</li>
            <li><strong>Réversibilité</strong> : la capacité organisée à récupérer les actifs, accès, données et connaissances nécessaires pour changer de prestataire.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Maintenance, hébergement, infogérance : de quoi parle-t-on</h2>
        <p>
          Trois lignes de facture doivent être distinguées.{" "}
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
          L&apos;analogie de la chaudière est utile : son contrat d&apos;entretien
          annuel couvre un risque connu — une chaudière négligée peut lâcher un
          soir de janvier. Un site professionnel est la chaudière de
          votre acquisition de clients ; il obéit à la même loi.
          Fil rouge de ce guide : <strong>scénario fictif composite —
          ni client ni témoignage réel — avec la fromagerie Perrin, à
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
          <strong>les attaques automatisées ne choisissent pas une marque : des
          robots testent les sites exposés</strong>. Les chiffres 2025-2026 de
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
            exploitation active observée sur l&apos;échantillon cité. Ce délai ne
            s&apos;applique pas à toutes les failles, mais justifie une veille et une
            procédure de traitement proportionnées au risque.
          </li>
          <li>
            Le rapport cité signale aussi des extensions sans correctif ou
            abandonnées. Avant de conserver ou remplacer une extension, vérifiez
            la vulnérabilité, sa version, son exposition, les mesures compensatoires
            et l&apos;activité du mainteneur.
          </li>
          <li>
            Le lien avec l&apos;entretien est documenté année après
            année : <strong>environ la moitié des sites WordPress
            piratés n&apos;étaient pas à jour</strong> au moment de
            l&apos;infection (rapports Sucuri).
          </li>
        </ul>
        <InfoBox variant="amber" title="« J'ai activé les mises à jour automatiques, je suis tranquille »">
          C&apos;est utile, mais l&apos;automatisation ne couvre pas tout. Testez les
          mises à jour et le retour arrière, surveillez les extensions abandonnées,
          séparez les sauvegardes du système principal et vérifiez régulièrement
          une restauration. Le contrat d&apos;hébergement doit préciser la portée
          exacte de la sauvegarde ; l&apos;existence d&apos;une copie ne garantit pas
          sa restauration.
        </InfoBox>

        <h2 id="cout-sinistre">4. Le coût d&apos;un sinistre, chiffré poste par poste</h2>
        <p>
          Mettons des euros sur « le jour où ça arrive ». Quatre
          sinistres types, tous documentés :
        </p>
        <GuideTable
          headers={["Sinistre", "Coût direct", "Le coût qu'on oublie"]}
          rows={[
            ["Piratage (site vitrine)", "À chiffrer après qualification", "Indisponibilité ou avertissement possibles selon l'incident"],
            ["Piratage (boutique / base touchée)", "Forensique, restauration et notification selon le périmètre", "Délai de réexamen non garanti"],
            ["Bandeau cookies non conforme (jamais vérifié)", "Une procédure simplifiée de la CNIL peut conduire à une amende allant jusqu'à 20 000 €", "Le bilan CNIL 2025 recense 67 sanctions prononcées en procédure simplifiée, sans publier de proportion TPE/PME"],
            ["Perte de données sans sauvegarde restaurable", "Reconstruction selon les copies disponibles", "Contenus et historique potentiellement perdus"],
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
          ce scénario composite, le risque simulé pour la fromagerie
          Perrin est plus modeste mais
          parlant : un piratage début décembre — nettoyage 800 €,
          écran rouge pendant les 5 jours où elle prend ses commandes
          de fêtes (~1 000 € de plateaux envolés), et la confiance à
          reconstruire. <strong>Environ 2 000 €, soit plus de deux ans
          du forfait de maintenance qui aurait peut-être réduit ce risque.</strong>{" "}
          Ce scénario n&apos;est ni un dossier client ni une prédiction : la
          maintenance réduit certains risques sans garantir qu&apos;un incident
          ne surviendra pas.
        </p>
        <p>
          L&apos;accessibilité, la protection des données et les cookies peuvent
          créer des obligations différentes selon l&apos;activité, le service,
          la taille de l&apos;entreprise et les textes applicables. Une page de
          guide ne suffit pas à qualifier votre situation : faites vérifier le
          périmètre juridique, puis inscrivez les contrôles techniques et
          éditoriaux nécessaires dans la maintenance ; voir notre offre{" "}
          <Link href="/services/securite-rgpd">sécurité et conformité
          RGPD</Link>.
        </p>

        <h2 id="prix-par-type">5. Les prix 2026 par type de site</h2>
        <p>
          Les fourchettes ci-dessous sont un relevé de prix publics, pas une
          moyenne représentative. Datez-les, vérifiez-les et comparez surtout
          le contenu contractuel de chaque offre :
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
          sauvegardes programmées) — utiles, mais qui n&apos;incluent généralement
          ni test humain, ni audit des extensions abandonnées, ni réponse au
          téléphone le jour du problème. Le passage à 70-170 €/mois
          paie précisément cela : un humain qui vérifie, corrige et
          répond. Dans l&apos;hypothèse de la fromagerie Perrin — 18 pages et un module de
          commande qui encaisse —, le bon niveau est l&apos;entrée du
          régime « avec un humain derrière », dimensionné pour un site
          qui vend : <strong>autour de 70 à 80 €/mois</strong> (le
          tableau de la section 6 en montre dès 69 €), soit 840 à
          960 €/an. Le jour de sa refonte, une base saine (section 9)
          transformera ce poste récurrent en accompagnement léger — un
          calcul à refaire à chaque échéance de contrat. La fourchette
          e-commerce complète (150 – 500 €) vise, elle, les vraies
          boutiques à catalogue, stocks et tunnel de commande.
        </p>

        <h2 id="forfaits-reels">6. Les forfaits réels du marché, nommés</h2>
        <p>
          Voici un échantillon de forfaits affichés sur les pages
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
          Ce relevé montre surtout qu&apos;un prix ne décrit pas le service. Pour
          chaque offre, vérifiez la date, l&apos;automatisation, le temps humain,
          les horaires, les exclusions, les heures incluses et les éventuels
          objectifs de service. N&apos;attribuez pas un engagement au prestataire
          s&apos;il n&apos;est pas écrit dans son contrat.
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
          statique moderne (généré à l&apos;avance — le site que vous
          lisez est lui-même construit à 100 % en React/Next.js)
          n&apos;a <strong>ni base de données exposée, ni
          extensions à maintenir, ni surface d&apos;attaque
          équivalente</strong> : l&apos;entretien se réduit pour
          l&apos;essentiel à des mises à jour périodiques des briques
          logicielles qui composent le site (ses « dépendances »), sans
          licences annuelles.
        </p>
        <GuideTable
          headers={["Poste annuel", "WordPress professionnel", "Site statique moderne (Next.js)"]}
          rows={[
            ["Forfait de maintenance", "360 – 1 200 € (30-100 €/mois)", "Réduit — quelques dizaines d'euros par mois, souvent absorbées dans un contrat d'accompagnement léger (sans commune mesure avec la TMA d'une application critique, section 1)"],
            ["Licences d'extensions premium", "500 – 1 000 €", "0 €"],
            ["Hébergement adapté", "60 – 960 € (du mutualisé — serveur partagé entre plusieurs sites — à l'infogéré)", "0 – 240 €"],
            ["Risque sécurité structurel", "91 % des failles viennent des extensions", "Surface d'attaque minimale par conception"],
          ]}
        />
        <p>
          Honnêteté de lecture : ce tableau ne dit pas qu&apos;un
          WordPress bien tenu est indéfendable — il dit qu&apos;un
          WordPress se paie en entretien récurrent, à vie.
          Le coût initial ne suffit donc pas à départager les solutions.
          L&apos;usage d&apos;assistants IA dans le développement ne prouve ni une
          baisse générale de prix ni un délai universel. Sur cinq ans, comparez
          les mêmes postes : construction, hébergement, licences, maintenance,
          évolutions, temps interne et sortie. Pour un site professionnel, une
          base statique React/Next.js peut limiter certains besoins de mise à
          jour applicative ; c&apos;est le socle que nous proposons,
          et notre page <Link href="/agence-next-js">agence
          Next.js</Link> détaille ce qu&apos;il change à
          l&apos;entretien ; le verdict détaillé par profil reste dans
          notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">comparatif Next.js
          ou WordPress</Link> — côté budget, c&apos;est un paramètre à
          poser dès le devis de création, pas au premier piratage.
        </p>

        <GuideInlineCTA
          title="Votre site est-il entretenu — ou juste en ligne ?"
          description="Décrivez votre site en 3 minutes : nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti, avec un diagnostic franc de son état (mises à jour, sauvegardes, sécurité, conformité) et une proposition de maintenance au forfait fixe, engagements écrits."
          tags={["Objectif : prochain jour ouvré", "SLA contractuel", "Réversibilité garantie"]}
        />

        <h2 id="contrat">10. Le contrat décodé : SLA, GTI, GTR — et les pièges</h2>
        <p>
          Pour une application métier ou un logiciel sur mesure, utilisez le
          guide dédié au{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de tierce maintenance applicative
          </Link>
          . Il sépare réception, prise en charge, diagnostic, contournement,
          rétablissement et correction, puis teste la capacité, les
          responsabilités et la sortie.
        </p>
        <p>
          Un contrat de maintenance doit au minimum rendre lisibles le
          périmètre — correctif, préventif, évolutif et exploitation —,
          les mises à jour, les sauvegardes et leurs tests, le support,
          les exclusions, le prix et sa révision, la résiliation, la
          responsabilité, les données et la réversibilité. Si le
          prestataire traite des données personnelles pour le compte de
          l&apos;entreprise, qualifiez les rôles et encadrez la
          sous-traitance selon les opérations réelles ; un simple accès
          technique ne dispense pas de cette analyse. Les sigles de délai
          ne possèdent pas un sens assez précis pour remplacer le contrat :
          définissez en français réception, prise en charge, diagnostic,
          contournement, rétablissement, correction et clôture. Pour chaque
          engagement, écrivez les horaires, le point de départ, les pauses,
          la preuve, les exclusions et la conséquence d&apos;un dépassement.
          Il n&apos;existe pas de délai ou de pénalité type à recopier sans
          tenir compte de l&apos;impact métier, de la couverture achetée et
          de la capacité réellement mobilisée.
        </p>
        <p>
          Même vigilance sur la disponibilité promise par
          l&apos;hébergement : le pourcentage ne se lit qu&apos;avec sa
          période, sa méthode de mesure, ses exclusions et ses
          conséquences. À titre de conversion arithmétique, 99,9 % sur une
          année complète représente environ <strong>8 h 46</strong> de
          temps hors disponibilité, contre environ <strong>53 minutes</strong>
          pour 99,99 %. Ce calcul ne dit pas que ces niveaux sont des
          standards, ni que chaque interruption sera indemnisée. Pour un site
          critique, confrontez l&apos;engagement de l&apos;hébergeur à celui
          du mainteneur et aux besoins réels de l&apos;entreprise.
        </p>
        <InfoBox variant="amber" title="Quatre ambiguïtés à supprimer du contrat">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>La capacité muette.</strong> Écrivez le sort des heures non consommées, le report éventuel, les arrondis, les urgences et les dépassements.</li>
            <li><strong>La sortie imprécise.</strong> Durée, renouvellement, préavis, assistance et coûts doivent pouvoir être relus avant la signature.</li>
            <li><strong>Le périmètre flou.</strong> Distinguez correctif, préventif, évolutif, support et exploitation, avec un exemple et une exclusion pour chaque famille.</li>
            <li><strong>La réversibilité abstraite.</strong> Listez accès, fichiers, sauvegardes, licences, données, documentation, formats, test de restauration et critère d&apos;acceptation.</li>
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
          Hypothèse purement illustrative : temps réellement mesuré × valeur
          interne choisie = coût d&apos;opportunité. Remplacez ces deux variables
          par les vôtres et ajoutez le coût des outils et de l&apos;escalade.
          <br />
          <br />
          Et le vrai risque n&apos;est pas là : il est dans la
          régularité. Une tâche sans responsable, cadence ni preuve de contrôle
          risque d&apos;être oubliée ; définissez ces éléments explicitement.
        </FormulaBox>
        <p>
          Notre position : le DIY est défendable pour un site sans
          enjeu commercial. Dès que le site génère des contacts ou des
          ventes — comme dans le scénario Perrin —, la question n&apos;est plus
          « puis-je le faire ? » mais « est-ce le meilleur usage de mes
          heures, avec ce niveau de risque ? ». La réponse dépend des compétences,
          de l&apos;enjeu du site et d&apos;une solution d&apos;escalade disponible.
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
          jour du back-office et disponibilité selon ses conditions. Une partie
          est incluse dans l&apos;abonnement, dont le prix et les limites peuvent
          évoluer. Mais l&apos;étage au-dessus reste à
          votre charge : le thème et ses personnalisations, les
          applications tierces — souvent 5 à 15 sur une boutique
          active, chacune avec ses réglages, ses mises à jour et ses
          conflits potentiels —, les intégrations (emailing,
          comptabilité, logistique) et la conformité de votre propre
          contenu (bandeau cookies compris : l&apos;amende Condé Nast
          de la section 4 concernait un site parfaitement hébergé). Sur
          une boutique active, ce travail peut nécessiter du temps interne ou
          un prestataire ; il doit être chiffré selon les intégrations. La nuance à retenir :{" "}
          <strong>plateforme louée = socle maintenu, boutique à
          entretenir quand même</strong>. Une fois ce poste réintégré,
          le « zéro maintenance » ne justifie plus à lui seul de bâtir
          un site professionnel sur une plateforme ; il reste un vrai
          argument pour un micro-budget, un side-project ou un test de
          marché — notre{" "}
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
            <li><strong>500 – 1 000 €/an</strong> : les licences d&apos;extensions premium d&apos;un WordPress professionnel — le poste que les devis oublient, et qui tombe à 0 € sur un site codé sur une base moderne (section 9).</li>
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
          3 minutes</Link> : objectif de réponse personnelle le prochain jour ouvré,
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
