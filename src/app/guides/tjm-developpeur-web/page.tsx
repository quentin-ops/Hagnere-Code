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

const guide = getGuide("tjm-developpeur-web");

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
  wordCount: 5210,
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
      "Budget de projet informatique",
      "Contrats de prestation",
      "React",
      "Next.js",
      "Achat de prestation IT",
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
      name: "TJM développeur web",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le TJM d'un développeur web en 2026 ?",
    answer:
      "Les fourchettes qui font consensus en France : 300 à 450 € par jour pour un profil junior, 400 à 600 € pour un confirmé, 450 à 650 € pour un senior, et 500 à 750 € pour un profil lead ou architecte. La médiane la plus robuste publiquement disponible est de 530 € — la médiane étant la valeur qui coupe le marché en deux moitiés. Elle est issue d'un agrégateur totalisant 20 638 observations sur douze mois, dont plus de 4 600 sur les développeurs. Mais ces chiffres n'ont de sens que rapportés à un contexte. Sur les tarifs affichés d'une grande plateforme, un développeur fullstack expérimenté annonce environ 558 € par jour. Sur un site d'emploi tech, les tarifs déclarés par les freelances pour le même profil tournent autour de 413 €. L'écart entre le prix affiché et le prix signé est donc d'environ 100 à 150 €.",
  },
  {
    question: "Pourquoi un développeur coûte-t-il 500 € par jour alors qu'un salarié gagne bien moins ?",
    answer:
      "Parce qu'un tarif journalier est un prix de vente, pas un salaire. Une décomposition publiée par un acteur du secteur détaille un tarif client de 700 € par jour : environ 410 € de coût employeur du consultant, 145 € de frais de structure, 42 € de provision pour les périodes sans mission, et 103 € de marge brute. Le consultant, lui, touche autour de 3 200 à 3 500 € net par mois. Retenez la règle du cinquième, valable pour un consultant salarié : son revenu net mensuel vaut grossièrement cinq fois son tarif journalier. Un indépendant, lui, conserve davantage — de l'ordre de sept à neuf fois — parce qu'il n'a ni frais de structure ni marge d'entreprise à financer. S'y ajoute, pour un indépendant, le fait qu'il ne facture que 130 à 196 jours par an selon son expérience — le reste part en prospection, administration, formation et congés.",
  },
  {
    question: "Un TJM couvre combien d'heures de travail ?",
    answer:
      "L'usage est une journée de travail d'environ 7 à 8 heures, mais ce n'est pas un pointage : vous achetez une journée d'engagement professionnel, pas un décompte horaire. Cette imprécision devient un problème dans deux situations. D'abord les urgences : une intervention de deux heures un dimanche se facture-t-elle en demi-journée, en journée, avec une majoration ? Ensuite les demi-journées : sont-elles possibles, et à quel tarif ? Faites préciser les deux au devis, avec le tarif des interventions hors horaires ouvrés. Un prestataire sérieux répond sans hésiter ; un flou entretenu sur ce point se paie au premier incident.",
  },
  {
    question: "Combien de jours faut-il pour créer un site ou une application ?",
    answer:
      "Les ordres de grandeur recoupés sur le marché français : un site vitrine sur thème existant demande 3 à 8 jours, un site vitrine entièrement sur mesure 15 à 30 jours, une boutique sur plateforme 10 à 30 jours, un e-commerce sur mesure 60 à 90 jours, une première version d'application métier 40 à 90 jours, une application mobile 40 à 80 jours, une connexion entre deux logiciels de 3 à 10 jours, un projet reliant plusieurs systèmes (CRM, gestion, site) de 20 à 60 jours, et un audit technique 3 à 10 jours. Attention à ne pas confondre jours de travail et délai calendaire : une vingtaine de jours de développement s'étale sur huit semaines, parce que vos validations et la fourniture de vos contenus rythment le projet autant que le code.",
  },
  {
    question: "Comment transformer un TJM en budget de projet ?",
    answer:
      "Budget = tarif journalier × nombre de jours + une marge d'aléas de 15 à 25 %. La partie que vous devez contester n'est pas le tarif, c'est le nombre de jours : c'est là que se cachent les écarts du simple au triple entre deux devis. La bonne pratique consiste à demander la ventilation en jours par poste (cadrage, design, développement, recette, mise en ligne), puis à diviser le total du devis par le nombre de jours affiché : vous obtenez le tarif journalier implicite du prestataire, que vous pouvez comparer aux baromètres publics. Un tarif implicite très bas assorti d'un nombre de jours doublé aboutit souvent au même total — pour un travail moins expérimenté, donc deux fois plus de risque d'exécution, et un surcoût qui arrive plus tard sous forme de reprises.",
  },
  {
    question: "Forfait ou régie : que choisir pour mon projet ?",
    answer:
      "Le forfait fixe un prix, un périmètre et un délai : le prestataire porte une obligation de résultat et donc le risque. Il convient quand le besoin est spécifiable à l'avance — un site vitrine, une refonte, une application dont les écrans sont maquettés. Sa limite est l'effet tunnel — vous ne voyez le résultat qu'à la fin — et le fait que tout changement passe par un avenant payant. La régie facture le temps passé avec une obligation de moyens : elle convient à un produit qui évolue, à condition que vous ayez quelqu'un capable de piloter côté client. Deux modèles hybrides protègent bien l'acheteur : la régie plafonnée (temps passé avec un maximum garanti) et le forfait à périmètre ajustable.",
  },
  {
    question: "Pourquoi les devis varient-ils du simple au triple pour le même besoin ?",
    answer:
      "Trois causes, dans l'ordre de fréquence. Le périmètre : un devis à 3 500 € qui exclut la rédaction, le référencement, la recette et la maintenance n'est pas comparable à un devis à 9 000 € qui les inclut — c'est le cas le plus courant. La nature du livrable : un thème acheté et paramétré ne demande pas le même travail qu'une interface dessinée pour votre marque. La séniorité enfin : à livrable égal, un profil confirmé estime mieux, se trompe moins de direction et laisse moins de dette à payer ensuite — l'écart de jours compense souvent l'écart de tarif, sans qu'il existe de ratio universel. Comparez toujours le coût total sur douze mois à périmètre écrit identique, jamais le prix affiché ni le tarif journalier seul.",
  },
  {
    question: "Un développeur offshore à 150 € par jour est-il une bonne affaire ?",
    answer:
      "Rarement, pour un projet unique de PME. Les tarifs affichés sont réels : 150 à 400 € par jour en Inde, 180 à 350 € dans l'océan Indien, 250 à 500 € en Europe de l'Est. Mais le coût complet d'une équipe offshore pilotée s'établit plutôt entre 280 et 450 € par jour. Il faut y intégrer la coordination, que les prestataires eux-mêmes chiffrent à 10 à 20 % du budget, et les deux à six semaines de montée en compétence. Soit le bas de la fourchette d'un confirmé en région française, sans le décalage horaire ni la barrière contractuelle. L'économie nette réelle avoisine 30 à 50 %, pas les 70 % promis, et elle ne se matérialise vraiment qu'à partir d'une certaine échelle et d'une capacité de pilotage interne.",
  },
  {
    question: "Peut-on négocier le TJM d'un développeur freelance ?",
    answer:
      "Oui, mais à la marge, et jamais sans contrepartie. L'usage de place est une remise de 5 à 10 % en échange d'un engagement de durée — typiquement trois à six mois — ou d'une réduction de périmètre. La négociation saine porte sur ce que vous achetez, pas sur le prix du jour : retirer une fonctionnalité, décaler un lot, allonger l'engagement. Un prestataire qui accepte immédiatement moins 20 % sans rien retirer vous indique soit qu'il avait gonflé son devis, soit qu'il est en difficulté commerciale — dans les deux cas, c'est un signal à prendre au sérieux plutôt qu'une victoire.",
  },
  {
    question: "Comment savoir si un TJM est justifié sans être technicien ?",
    answer:
      "Quatre vérifications, toutes accessibles sans compétence technique. Croisez le tarif annoncé avec les baromètres publics gratuits pour le métier et la région concernés. Divisez le total du devis par le nombre de jours pour obtenir le tarif implicite, puis comparez. Testez les réalisations du prestataire sur PageSpeed Insights, l'outil gratuit de Google, en mode mobile : trois sites sous 50 sur mobile en disent plus long qu'un argumentaire commercial. Enfin, exigez la propriété du code par écrit dès le premier jour. Notre guide pour choisir son agence web détaille les dix-huit vérifications que vous pouvez mener vous-même en une heure.",
  },
  {
    question: "Quelle différence de prix entre un junior et un senior, et lequel choisir ?",
    answer:
      "L'écart de tarif est de l'ordre de 40 à 50 % entre un junior et un senior, et va jusqu'au double entre les deux extrêmes de la profession. Mais raisonner en tarif journalier est précisément l'erreur : ce qui compte est le coût total du livrable. Un senior estime mieux, choisit des solutions plus simples, produit moins de code à reprendre plus tard, et rattrape le surcoût sur les jours économisés. Le cas où le junior est pertinent existe pourtant : des tâches bien cadrées et répétitives, dans une équipe où quelqu'un de plus expérimenté relit. Le pire montage reste le junior seul, sans relecture, sur un projet structurant.",
  },
  {
    question: "Le TJM change-t-il selon la technologie utilisée ?",
    answer:
      "Oui, et l'écart est significatif. Sur les médianes déclarées en 2026 : WordPress se situe autour de 370 €, PHP entre 450 et 490 €, Node.js et Vue autour de 520 €, React, TypeScript et fullstack autour de 530 à 540 €, Go à 610 €, iOS à 620 €. Les profils spécialisés en intelligence artificielle atteignent 685 €, soit environ 30 % au-dessus d'un développeur généraliste. Ce n'est pas un jugement de valeur sur les technologies : c'est de la rareté relative. Une remarque utile pour un acheteur : un tarif WordPress plus bas ne signifie pas un projet moins cher, puisque le nombre de jours et le coût récurrent entrent dans le calcul final.",
  },
  {
    question: "À quel salaire correspond un TJM de 500 € par jour ?",
    answer:
      "Beaucoup moins qu'on ne l'imagine. Un indépendant facturant 500 € par jour sur 170 jours réellement travaillés dégage 85 000 € de chiffre d'affaires, dont il reste environ 3 600 à 4 500 € net mensuels avant impôt sur le revenu, une fois les cotisations sociales et les frais professionnels déduits. Le calcul que l'on voit circuler — tarif journalier multiplié par 218 jours — suppose un taux de remplissage de 100 % que personne n'atteint, et surestime le revenu de 30 à 50 %. Côté salarié, un développeur à 60 000 € bruts annuels coûte à son employeur environ 85 000 € charges comprises, soit près de 390 € par jour effectivement travaillé : l'écart avec un tarif de prestation est bien plus faible qu'il n'y paraît.",
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
          { label: "TJM développeur web" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Le guide de l'entreprise qui paie : les grilles 2026 sourcées et leurs contradictions expliquées, l'anatomie d'un tarif, le nombre de jours par livrable, la lecture d'un devis poste par poste, et le choix entre forfait et régie."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "530 € : la médiane développeur France 2026", description: "", color: "violet" },
          { number: "02", title: "Le tarif affiché dépasse de 100-150 € le tarif signé", description: "", color: "blue" },
          { number: "03", title: "Budget = tarif journalier × jours + 15-25 % d'aléas", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/agence-web-ou-freelance", label: "Agence web ou freelance ?" },
          { href: "/guides/choisir-son-agence-web", label: "Choisir son agence web" },
          { href: "/guides/prix-logiciel-sur-mesure", label: "Prix d'un logiciel sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/demarrer-un-projet", label: "Décrire votre projet" },
        ]}
        faqTitle="TJM et budget de projet : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Un prestataire vous annonce « 550 € par jour » et vous ne
          savez pas si c&apos;est cher. Normal :{" "}
          <strong>l&apos;essentiel de ce qui s&apos;écrit sur le tarif
          journalier s&apos;adresse aux freelances qui fixent leur
          prix</strong>, presque jamais à
          l&apos;entreprise qui paie. Ce guide fait l&apos;inverse : il
          vous donne les grilles réelles, explique pourquoi elles se
          contredisent, et surtout traduit un tarif journalier en
          budget de projet — la seule chose qui vous intéresse
          vraiment.
        </p>

        <InfoBox variant="amber" title="Les 12 mots de ce guide, traduits en français courant">
          <strong>TJM (tarif journalier moyen)</strong> : le prix
          d&apos;une journée de travail d&apos;un prestataire, hors
          taxes. <strong>Jour-homme</strong> : une journée de travail
          d&apos;une personne — l&apos;unité qui sert à estimer un
          projet. <strong>Régie</strong> : facturation au temps
          réellement passé. <strong>Forfait</strong> : prix et
          périmètre figés d&apos;avance.{" "}
          <strong>Obligation de moyens</strong> : le prestataire
          s&apos;engage à travailler sérieusement, pas sur un résultat
          précis. <strong>Obligation de résultat</strong> : il
          s&apos;engage sur le livrable lui-même.{" "}
          <strong>Recette</strong> : la phase de tests et de validation
          avant mise en ligne. <strong>Fullstack</strong> : un
          développeur capable de traiter à la fois la partie visible
          du site (le « front ») et la machinerie invisible qui la
          fait fonctionner (le « back »).{" "}
          <strong>Offshore</strong> : le développement confié à une
          équipe située à l&apos;étranger, généralement pour son
          coût. <strong>ESN</strong> : entreprise de
          services du numérique, qui place des consultants chez ses
          clients. <strong>Dette technique</strong> : les raccourcis
          pris dans le code, qu&apos;il faudra payer plus tard en temps
          de développement. <strong>Avenant</strong> : la modification
          écrite et chiffrée d&apos;un contrat en cours.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "grilles-2026", label: "2. Les grilles 2026, baromètre par baromètre" },
            { id: "contradictions", label: "3. Pourquoi les baromètres se contredisent" },
            { id: "anatomie", label: "4. Anatomie d'un tarif journalier : où part l'argent" },
            { id: "ecarts", label: "5. Séniorité, technologie, région : les 3 écarts réels" },
            { id: "marketplaces", label: "6. Pourquoi vous voyez des développeurs à 135 €/jour" },
            { id: "offshore", label: "7. L'offshore à 150 €/jour, calculé honnêtement" },
            { id: "jours-par-livrable", label: "8. Combien de jours coûte votre projet" },
            { id: "conversion", label: "9. La conversion : du tarif journalier au budget" },
            { id: "lire-un-devis", label: "10. Lire un devis en jours-homme" },
            { id: "forfait-ou-regie", label: "11. Forfait ou régie : ce que chaque modèle protège" },
            { id: "deraper", label: "12. Ce qui fait déraper les jours, à livrable égal" },
            { id: "ia", label: "13. Ce que l'IA a changé — et ce qu'elle n'a pas changé" },
            { id: "cadre-legal", label: "14. Devis, acompte, délais de paiement : le cadre légal" },
            { id: "negocier", label: "15. Négocier sans casser la relation" },
            { id: "methode", label: "16. Méthode : établir votre budget en 6 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          En France en 2026, un développeur web se facture{" "}
          <strong>300 à 450 € par jour en junior, 400 à 600 € en
          confirmé, 450 à 650 € en senior et 500 à 750 € en profil
          lead</strong> — le lead étant le développeur qui pilote
          techniquement une équipe. La médiane la plus solide publiquement
          disponible — la médiane étant la valeur qui coupe le marché
          en deux moitiés, moins trompeuse qu&apos;une moyenne —
          s&apos;établit à <strong>530 €</strong> sur plus
          de 4 600 réponses de développeurs français, extraites
          d&apos;un agrégateur totalisant 20 638 observations sur
          douze mois. Mais ce chiffre
          ne vous sert à rien seul :{" "}
          <strong>budget = tarif journalier × nombre de jours + 15 à
          25 % d&apos;aléas</strong>, et c&apos;est le nombre de jours
          qu&apos;il faut discuter, pas le tarif.
        </p>
        <GuideTable
          headers={["Profil", "Fourchette France 2026", "Ce qu'il apporte"]}
          rows={[
            ["Junior (0-2 ans)", "300 – 450 €/jour", "Exécution de tâches cadrées, sous relecture d'un profil plus expérimenté"],
            ["Confirmé (2-5 ans)", "400 – 600 €/jour", "Autonomie sur une fonctionnalité complète, estimation fiable"],
            ["Senior (5 ans et +)", "450 – 650 €/jour", "Choix d'architecture, anticipation des impasses, vitesse de livraison"],
            ["Lead / architecte (8 ans et +)", "500 – 750 €/jour", "Pilotage technique, arbitrages structurants, encadrement d'équipe"],
            ["Chef de projet technique", "550 – 850 €/jour", "Interface entre votre métier et l'équipe, tenue du planning et du périmètre"],
          ]}
        />
        <p>
          Ces fourchettes sont des tarifs parisiens et de grandes
          villes ; comptez de 5 à 20 % de moins en régions selon la
          séniorité, un écart que le travail à distance a fortement
          réduit. Elles proviennent du croisement de quatre baromètres
          publics dont la section 2 détaille les méthodes — et la
          section 3 explique pourquoi ils ne disent pas la même chose.
        </p>

        <h2 id="grilles-2026">2. Les grilles 2026, baromètre par baromètre</h2>
        <p>
          Quatre sources publiques dominent le sujet en France. Aucune
          n&apos;est fausse, aucune n&apos;est complète : chacune
          mesure une population différente. Les connaître vous permet
          de savoir laquelle citer face à un prestataire.
        </p>
        <GuideTable
          headers={["Source", "Ce qu'elle mesure", "Développeur fullstack", "Fiabilité"]}
          rows={[
            ["Baromètre d'un cabinet de recrutement IT (2025)", "Plus de 20 000 placements réels, 2019-2025, par séniorité et zone", "Paris : 350-450 € junior → 450-600 € senior → 500-700 € lead", "Haute — données de placements effectifs, mais moyennes et non médianes"],
            ["Grille d'une grande plateforme de freelances (2026)", "Tarifs affichés sur les profils actifs", "558 € en moyenne ; 312 € (0-2 ans) → 604 € (15 ans et +)", "Haute sur la donnée, mais ce sont des prix demandés, pas signés"],
            ["Site d'emploi tech, données déclaratives (2026)", "Tarifs déclarés par les freelances eux-mêmes", "413 € en direct, 433 € via un intermédiaire", "Moyenne — échantillon réduit, mais le plus proche du prix réellement pratiqué"],
            ["Agrégateur de tarifs (2026)", "20 638 observations tous métiers sur 12 mois, dont plus de 4 600 sur les développeurs, avec médiane et fourchettes", "Médiane développeur 530 € (la moitié centrale du marché entre 480 et 600 €) ; React — l'un des outils de développement web les plus répandus, voir section 5 — 540 €", "Moyenne — méthode composite, mais la seule à publier des médianes"],
          ]}
        />
        <InfoBox variant="blue" title="L'écart que personne n'exploite : affiché contre signé">
          Sur le même profil de développeur fullstack expérimenté, les
          tarifs <strong>affichés</strong> sur une grande plateforme
          tournent autour de <strong>558 €</strong> par jour, quand les
          tarifs <strong>déclarés</strong> par les freelances sur un
          site d&apos;emploi tech tournent autour de{" "}
          <strong>413 €</strong>. Soit <strong>100 à 150 € d&apos;écart
          entre le prix demandé et le prix pratiqué</strong>. Ce que
          cela vous dit, en tant qu&apos;acheteur : les grilles
          publiques que l&apos;on vous opposera sont plutôt des bornes
          hautes. Ce que cela ne vous dit pas : que tout le monde
          négocie de 25 % — les missions courtes, urgentes ou très
          spécialisées se paient au prix affiché, et parfois davantage.
        </InfoBox>

        <h2 id="contradictions">3. Pourquoi les baromètres se contredisent</h2>
        <p>
          Pour un développeur fullstack, tous niveaux
          d&apos;expérience confondus, vous trouverez
          environ 413 € dans les tarifs déclarés par les freelances
          eux-mêmes, et 450 à 600 € dans le baromètre d&apos;un
          cabinet spécialisé — qui, lui, mesure des seniors placés
          chez de grands comptes parisiens. Ce
          n&apos;est pas une erreur : ces deux chiffres décrivent des
          mondes différents. Quatre
          biais expliquent l&apos;essentiel des écarts.
        </p>
        <ul>
          <li>
            <strong>La population mesurée.</strong> Un cabinet qui
            place des consultants dans des grands comptes parisiens
            mesure des missions à fort budget. Une plateforme grand
            public mesure des indépendants de toute la France, y
            compris sur des projets modestes. Certaines études de
            cabinets spécialisés annoncent ainsi 700 à 800 € pour un
            profil « confirmé » : ce n&apos;est pas faux, c&apos;est
            un autre marché.
          </li>
          <li>
            <strong>Moyenne ou médiane.</strong> La plupart des
            baromètres publient des moyennes, tirées vers le haut par
            quelques tarifs très élevés. La médiane — la valeur qui
            sépare le marché en deux moitiés — est presque toujours
            plus basse, et plus utile pour un acheteur.
          </li>
          <li>
            <strong>Prix demandé ou prix signé.</strong> Un profil
            affiché n&apos;est pas une mission facturée. C&apos;est
            l&apos;écart de 100 à 150 € vu plus haut.
          </li>
          <li>
            <strong>Le millésime.</strong> Certaines grilles
            détaillées les plus citées datent de 2025 et sont
            republiées telles quelles. Demandez toujours l&apos;année
            de collecte, pas l&apos;année de publication.
          </li>
        </ul>
        <p>
          Conséquence pratique : <strong>n&apos;utilisez jamais un
          seul baromètre pour juger un devis</strong>. Croisez-en deux,
          en vérifiant qu&apos;ils parlent bien de votre métier
          (développeur front, fullstack, mobile), de votre séniorité
          cible et de votre région.
        </p>
        <p>
          Méfiez-vous enfin des chiffres ronds qui circulent sans lien
          vérifiable. Le « tarif journalier moyen de 520 € » est repris
          de blog en blog, attribué à une plateforme dont aucune page
          n&apos;est consultable. Le « 450 €, en hausse de 5 à 8 % »
          est démenti par les données de rémunération, qui montrent des
          salaires stables sur les métiers du développement classique.
        </p>

        <h2 id="anatomie">4. Anatomie d&apos;un tarif journalier : où part l&apos;argent</h2>
        <p>
          C&apos;est le calcul qui désamorce le mieux le sentiment de
          se faire avoir. Une décomposition publiée par un acteur du
          secteur détaille un tarif client de 700 € par jour.
        </p>
        <FormulaBox>
          {`TARIF CLIENT : 700 € / JOUR — où va l'argent
  Coût employeur du consultant             ≈ 410 €   (59 %)
  Frais de structure (locaux, RH, outils)  ≈ 145 €   (21 %)
  Provision pour périodes sans mission      ≈ 42 €    (6 %)
  Marge brute de l'entreprise              ≈ 103 €   (15 %)
  ──────────────────────────────────────────────────
  TOTAL                                      700 €  (101 %, arrondis)
  Ce que touche le consultant : 3 200 – 3 500 € net/mois

LA RÈGLE DU CINQUIÈME (consultant SALARIÉ d'une ESN)
  Revenu net mensuel ≈ tarif journalier facturé × 5
  700 € / jour → ≈ 3 500 € net/mois
  550 € / jour → ≈ 2 750 € net/mois

  Chez un INDÉPENDANT, le ratio est plutôt de × 7 à × 9 :
  il n'a ni frais de structure ni marge d'entreprise à financer.
  550 € / jour → ≈ 4 000 € net/mois sur 170 jours facturés`}
        </FormulaBox>
        <p>
          Pour un indépendant, la mécanique est différente, et le
          résultat aussi : sans structure à financer ni marge
          d&apos;entreprise, il conserve une part nettement plus
          élevée de ce que vous payez. Le point que presque personne
          n&apos;explique aux acheteurs :{" "}
          <strong>un freelance ne facture pas 218 jours par
          an</strong>. Les jours réellement facturés s&apos;établissent
          entre 130 et 150 pour un débutant, 165 à 185 pour un
          expérimenté, jusqu&apos;à 196 pour un expert très demandé —
          le reste part en prospection, administration, formation et
          congés. Un tarif de 500 € par jour sur 170 jours facturés
          représente 85 000 € de chiffre d&apos;affaires, dont il reste
          environ 3 600 à 4 500 € net par mois avant impôt sur le
          revenu, une fois les cotisations sociales et les frais
          professionnels déduits.
        </p>
        <p>
          Le point de comparaison qui remet tout en place : un
          développeur salarié à 60 000 € bruts annuels coûte à son
          employeur environ 85 000 € charges comprises, soit près de{" "}
          <strong>390 € par jour effectivement travaillé</strong> une
          fois congés et jours fériés déduits — sans compter le
          matériel, les locaux et le risque de recrutement. L&apos;écart avec une
          prestation à 550 € couvre la flexibilité, l&apos;absence de
          période d&apos;essai et la mutualisation des compétences.
        </p>

        <h2 id="ecarts">5. Séniorité, technologie, région : les 3 écarts réels</h2>
        <p>
          Trois facteurs expliquent l&apos;essentiel des différences de
          tarif. Les connaître vous permet de savoir si un devis est
          dans le marché — ou pourquoi il ne l&apos;est pas.
        </p>
        <p>
          <strong>La séniorité</strong> fait varier le tarif d&apos;un
          facteur deux entre les extrêmes : 312 € pour un débutant
          contre 604 € pour un profil de quinze ans et plus, sur les
          tarifs affichés d&apos;une grande plateforme. Une autre
          source mesure une population différente — les tarifs
          déclarés par les freelances eux-mêmes, et non les tarifs
          affichés — et y révèle un détail qui surprend : le tarif{" "}
          <strong>redescend après quinze ans</strong> d&apos;expérience
          (576 € entre 11 et 15 ans, 523 € au-delà). Les deux chiffres
          ne se contredisent pas, ils ne décrivent pas les mêmes
          freelances : c&apos;est le mécanisme expliqué en section 3.
          L&apos;explication
          la plus probable de cette baisse est un glissement vers des
          rôles de conseil ou de direction technique, facturés
          autrement.
        </p>
        <p>
          <strong>La technologie</strong> vient ensuite. Les noms
          ci-dessous sont des langages et des outils de
          développement : vous n&apos;avez pas à les connaître, mais
          savoir lequel figure sur votre devis vous dit si le tarif
          annoncé est dans le marché. L&apos;écart n&apos;est pas un
          jugement de valeur sur ces outils, c&apos;est de la rareté
          relative.
        </p>
        <GuideTable
          headers={["Technologie", "Médiane 2026", "Lecture pour un acheteur"]}
          rows={[
            ["WordPress", "≈ 370 €/jour", "Le tarif le plus bas — mais comptez le nombre de jours et le coût récurrent avant de conclure"],
            ["PHP / Symfony / Laravel", "450 – 490 €/jour", "Socle historique, vivier large"],
            ["Node.js, Vue", "≈ 520 €/jour", "Écosystème JavaScript, demande soutenue"],
            ["React, TypeScript, fullstack JS", "530 – 540 €/jour", "Le standard du web moderne — le nôtre"],
            ["Go, Rust", "610 – 680 €/jour", "Profils rares, usages spécialisés"],
            ["iOS / mobile natif", "≈ 620 €/jour", "Rareté et exigences des magasins d'applications"],
            ["Spécialiste intelligence artificielle", "≈ 685 €/jour", "Environ 30 % au-dessus d'un développeur généraliste"],
          ]}
        />
        <p>
          <strong>La région</strong>, enfin, est le facteur le plus
          exagéré. L&apos;écart réellement constaté entre Paris et les
          régions se situe entre <strong>5 et 20 % selon la
          séniorité</strong> — quasi nul sur les juniors, autour de
          15 % sur les profils seniors — et non les 30 % parfois
          avancés. Le travail à distance a comprimé cet écart au point
          qu&apos;une médiane « à distance » ne se situe qu&apos;à
          environ 6 % sous la médiane parisienne. Notre équipe étant
          basée à Chambéry, nous sommes bien placés pour le
          confirmer : le tarif suit la compétence, pas le code postal.
        </p>

        <h2 id="marketplaces">6. Pourquoi vous voyez des développeurs à 135 €/jour</h2>
        <p>
          Vous avez peut-être consulté une place de marché affichant un
          tarif moyen de <strong>135 € par jour</strong>, soit 19 € de
          l&apos;heure, avec des débutants à 70 € et des seniors à
          210 €. Ce chiffre est authentique — c&apos;est le relevé de
          juillet 2026 d&apos;une plateforme française bien connue — et
          il n&apos;est pas comparable aux précédents.
        </p>
        <p>
          Cette population est composée pour l&apos;essentiel de
          profils étudiants, débutants ou situés dans des pays à faible
          coût, sur des micro-projets dont le budget moyen avoisine
          1 441 €. Le service vendu n&apos;est pas le même : pas de
          cadrage, pas d&apos;engagement de disponibilité, pas de
          garantie, pas de propriété du code encadrée, pas de
          continuité si la personne disparaît. Pour un correctif isolé
          ou une intégration très cadrée, cela peut suffire. Pour le
          site dont dépend votre acquisition de clients, l&apos;écart
          de prix ne se paie pas en euros mais en temps de reprise :
          nous facturons régulièrement plus cher la réparation
          d&apos;un projet à bas coût que ce que sa construction
          initiale aurait coûté chez un professionnel.
        </p>

        <GuideInlineCTA
          title="Vous voulez savoir combien de jours coûte VOTRE projet ?"
          description="Décrivez-le en 3 minutes. Nous vous répondons personnellement sous 24 h ouvrées avec une estimation en jours, la ventilation par poste et le budget réaliste correspondant — gratuitement et sans engagement."
        />

        <h2 id="offshore">7. L&apos;offshore à 150 €/jour, calculé honnêtement</h2>
        <p>
          Les tarifs affichés sont réels : 150 à 400 € par jour en
          Inde, 180 à 350 € dans l&apos;océan Indien, 250 à 450 € au
          Maghreb, 250 à 500 € en Europe de l&apos;Est. La question
          n&apos;est pas leur véracité, mais ce qu&apos;ils
          n&apos;incluent pas.
        </p>
        <p>
          Les prestataires spécialisés dans l&apos;externalisation —
          donc peu suspects d&apos;en dire du mal — chiffrent
          eux-mêmes la coordination à <strong>10 à 20 % du budget
          total</strong> et la montée en compétence à deux à six
          semaines avant productivité. Ils estiment le coût complet
          d&apos;une équipe offshore pilotée entre{" "}
          <strong>280 et 450 € par jour</strong>, et l&apos;économie
          nette réelle à <strong>30 à 50 %</strong> — pas les 70 %
          annoncés commercialement. Autrement dit : le coût complet
          d&apos;une équipe offshore rejoint le bas de la fourchette
          d&apos;un développeur confirmé en région française.
        </p>
        <p>
          Trois facteurs non chiffrables mais systématiquement cités
          complètent le tableau : les cycles de correction
          supplémentaires liés à la distance culturelle et
          linguistique, les fuseaux horaires quand l&apos;écart dépasse
          trois heures, et la localisation des données au regard du
          RGPD si votre projet traite des données personnelles. Notre
          position, sans détour : l&apos;offshore devient rationnel à
          partir d&apos;une équipe interne capable de piloter et
          d&apos;un volume qui justifie l&apos;investissement de
          départ. Sur un projet unique de PME, il coûte rarement moins
          cher au final.
        </p>

        <h2 id="jours-par-livrable">8. Combien de jours coûte votre projet</h2>
        <p>
          Voici le tableau que personne ne publie et qui est pourtant
          le cœur du sujet. Ce sont des fourchettes de place recoupées
          entre grilles d&apos;agences, devis publiés et baromètres —
          des ordres de grandeur pour mettre un devis à l&apos;épreuve, pas un
          barème.
        </p>
        <GuideTable
          headers={["Livrable", "Jours-homme", "Délai calendaire", "Budget à 550 €/jour"]}
          rows={[
            ["Site vitrine sur thème existant", "3 – 8 jours", "3 – 5 semaines", "1 650 – 4 400 €"],
            ["Site vitrine entièrement sur mesure", "15 – 30 jours", "6 – 10 semaines", "8 250 – 16 500 €"],
            ["Boutique sur plateforme (thème adapté)", "10 – 30 jours", "6 – 12 semaines", "5 500 – 16 500 €"],
            ["E-commerce sur mesure", "60 – 90 jours", "4 – 6 mois", "33 000 – 49 500 €"],
            ["Première version d'application métier", "40 – 90 jours", "3 – 5 mois", "22 000 – 49 500 €"],
            ["Application mobile, première version", "40 – 80 jours", "3 – 5 mois", "22 000 – 44 000 €"],
            ["Connexion entre deux logiciels", "3 – 10 jours", "2 – 6 semaines", "1 650 – 5 500 €"],
            ["Projet multi-systèmes (CRM + gestion + site)", "20 – 60 jours", "2 – 4 mois", "11 000 – 33 000 €"],
            ["Audit technique ou de référencement", "3 – 10 jours", "1 – 3 semaines", "1 650 – 5 500 €"],
          ]}
        />
        <p>
          Une précision de méthode, biais déclaré. Les deux premières
          lignes de ce tableau — thème existant et boutique sur
          plateforme — restent les moins chères en jours. Elles ne
          sont plus pour autant notre recommandation par défaut en
          2026, dès lors que votre acquisition de clients dépend du
          site : la performance, la liberté de conception et le coût
          récurrent y sont subis, pas choisis. Elles gardent leur place dans trois
          cas précis : un site de moins de cinq pages sans enjeu
          commercial, un besoin temporaire à durée connue, ou une
          équipe interne qui publie elle-même du contenu tous les jours
          sans accompagnement. Hors de ces cas, la chute du coût de
          construction du sur-mesure a déplacé la frontière — c&apos;est
          ce qu&apos;explique la section 13.
        </p>
        <InfoBox variant="amber" title="Ne confondez jamais jours-homme et délai calendaire">
          Un site vitrine sur mesure représente une vingtaine de jours
          de travail… étalés sur huit semaines. L&apos;écart
          n&apos;est pas de la marge cachée : il vient de{" "}
          <strong>vos</strong> délais — validation des maquettes,
          fourniture des textes et des photos, retours des différents
          décideurs. Le motif de retard le plus fréquemment cité par
          les agences est le même partout : des contenus livrés tard,
          ou jamais. Deux semaines pour valider une
          maquette, ce sont deux semaines de retard sec — et une
          jurisprudence de cour d&apos;appel de 2017 a même prononcé la
          résiliation d&apos;un contrat aux torts exclusifs
          d&apos;une cliente qui avait demandé vingt-quatre versions de
          maquette et refusé la recette.
        </InfoBox>

        <h2 id="conversion">9. La conversion : du tarif journalier au budget</h2>
        <p>
          La formule tient en une ligne, mais chacun de ses termes
          mérite une vérification.
        </p>
        <FormulaBox>
          {`BUDGET = TARIF JOURNALIER × NOMBRE DE JOURS + ALÉAS (15-25 %)

Exemple — site vitrine sur mesure, 10 pages, agence
  Cadrage et arborescence               2 j
  Design et maquettes                   5 j
  Développement front + back            9 j
  Intégration des contenus              3 j
  Recette et corrections                3 j
  Mise en ligne, formation, garantie    2 j
  ──────────────────────────────────────────
  TOTAL                                24 j × 550 € = 13 200 €
  + aléas 15 %                                     ≈ 1 980 €
  BUDGET RÉALISTE                          ≈ 15 000 € HT

LE CONTRÔLE À FAIRE SUR TOUT DEVIS
  Total du devis ÷ nombre de jours affiché = tarif implicite
  13 200 € ÷ 24 j = 550 €/jour → cohérent avec le marché
  13 200 € ÷ 48 j = 275 €/jour → tarif bas, mais jours doublés :
  même prix final, deux fois plus de risque d'exécution`}
        </FormulaBox>
        <p>
          Ce dernier calcul est l&apos;outil le plus utile de ce
          guide. <strong>Divisez toujours le total d&apos;un devis par
          le nombre de jours annoncé</strong> : vous obtenez le tarif
          journalier implicite du prestataire. Un tarif implicite très
          bas assorti d&apos;un nombre de jours élevé n&apos;est pas
          une bonne affaire — c&apos;est le même prix pour un travail
          moins expérimenté, donc plus long et plus risqué. À
          l&apos;inverse, un tarif implicite très élevé sur peu de
          jours suppose une estimation optimiste : demandez ce
          qu&apos;il se passe en cas de dépassement.
        </p>

        <h2 id="lire-un-devis">10. Lire un devis en jours-homme</h2>
        <p>
          Un devis lisible ventile les jours par poste. Les poids
          relatifs suivants correspondent aux ventilations les plus
          couramment observées dans les devis d&apos;agences et vous
          donnent une grille de lecture immédiate.
        </p>
        <GuideTable
          headers={["Poste", "Part du budget", "Ce que ça couvre", "Signal d'alerte"]}
          rows={[
            ["Cadrage et spécifications", "5 – 15 %", "Périmètre écrit, arborescence, priorités, risques", "Absent : le devis est fait à la louche, les suppléments sont garantis"],
            ["Design et expérience utilisateur", "15 – 35 %", "Maquettes ordinateur et mobile, système graphique", "0 j : vous achetez un thème, pas du sur-mesure"],
            ["Développement", "25 – 40 %", "Intégration, fonctionnalités, connexions", "Poste unique non détaillé sur un projet à cinq chiffres"],
            ["Contenus et référencement", "10 – 20 %", "Rédaction, balises, données structurées (le balisage qui permet à Google de comprendre votre contenu), plan du site", "Le coût caché numéro un des devis bas"],
            ["Recette et tests", "10 – 20 %", "Tests sur tous les écrans, corrections, validation", "Ligne absente : vous serez le testeur, gratuitement"],
            ["Mise en ligne et formation", "5 – 10 %", "Bascule, redirections, prise en main", "Souvent oublié, toujours nécessaire"],
          ]}
        />
        <p>
          Ces fourchettes ne s&apos;additionnent pas à 100 % : ce sont
          des bornes indicatives poste par poste. Ce qui compte
          n&apos;est pas le total des pourcentages, mais qu&apos;aucun
          poste ne soit à zéro et qu&apos;aucun n&apos;écrase les
          autres.
        </p>
        <p>
          Les cinq signaux qui doivent vous faire réclamer un devis
          révisé : aucune ligne de recette, contenus et référencement
          absents, maintenance et hébergement non chiffrés, acompte
          supérieur à 50 %, et périmètre non écrit. Un devis qui
          annonce « création de site : 3 500 € » sans autre détail
          n&apos;est pas un devis, c&apos;est une intention. Notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">guide du
          prix d&apos;un site internet</Link> décortique un devis réel
          ligne à ligne, et notre{" "}
          <Link href="/guides/choisir-son-agence-web">guide pour
          choisir son agence web</Link> donne les questions à poser
          avant de signer.
        </p>

        <h2 id="forfait-ou-regie">11. Forfait ou régie : ce que chaque modèle protège</h2>
        <p>
          Le choix du modèle contractuel déplace le risque. Ce
          n&apos;est pas une question de préférence, c&apos;est une
          question de qui supporte l&apos;imprévu.
        </p>
        <GuideTable
          headers={["Modèle", "Engagement du prestataire", "Qui porte le risque", "Quand le choisir"]}
          rows={[
            ["Forfait fixe", "Obligation de résultat sur un périmètre écrit", "Le prestataire", "Le besoin est spécifiable : site, refonte, application maquettée"],
            ["Régie (au temps passé)", "Obligation de moyens", "Le client", "Produit évolutif, avec un pilote côté client capable d'arbitrer"],
            ["Régie plafonnée", "Moyens, avec un maximum garanti", "Partagé", "Vous voulez la souplesse sans le budget ouvert"],
            ["Forfait à périmètre ajustable", "Résultat, périmètre négociable à budget constant", "Partagé", "Le budget est ferme, les priorités peuvent évoluer"],
            ["Abonnement / maintenance", "Volume de jours mensuel", "Partagé", "Après la mise en ligne, pour lisser les évolutions"],
          ]}
        />
        <p>
          Les deux modèles hybrides méritent d&apos;être demandés
          explicitement : ils existent, mais peu de prestataires les
          proposent spontanément.
        </p>
        <p>
          Quatre clauses complètent le dispositif, quel que soit le
          modèle. Le <strong>nombre de cycles de retours
          inclus</strong> : « retours illimités » est un argument
          commercial ou une future dispute. Le{" "}
          <strong>prix d&apos;un avenant</strong>, défini à
          l&apos;avance. Les <strong>délais
          d&apos;intervention</strong> après la mise en ligne : délai
          maximal pour commencer à traiter un incident, et délai
          maximal pour rétablir le service. Enfin le{" "}
          <strong>contenu d&apos;une journée</strong> : l&apos;usage
          est de 7 à 8 heures, mais ce n&apos;est pas un pointage.
          Faites préciser au devis si les
          demi-journées sont possibles et à quel tarif, et ce que
          coûte une intervention hors horaires ouvrés. Un prestataire
          sérieux répond sans hésiter ; un flou entretenu sur ce point
          se paie au premier incident.
        </p>
        <p>
          Notre position, biais déclaré : nous travaillons au{" "}
          <Link href="/methode">forfait fixe contractuel</Link>, avec
          un périmètre écrit et un prix qui ne bouge pas. Sa limite
          assumée est qu&apos;il exige un cadrage sérieux en amont —
          c&apos;est l&apos;objet de notre Discovery Sprint : deux
          jours de cadrage à 1 500 €, intégralement déduits du projet
          s&apos;il se fait — et que tout ajout en cours de route
          passe par un avenant. Ce modèle protège l&apos;acheteur qui a un budget
          ferme ; il convient mal à un produit qui se cherche encore.
        </p>

        <h2 id="deraper">12. Ce qui fait déraper les jours, à livrable égal</h2>
        <p>
          Deux prestataires estiment le même site à 15 et 30 jours. Le
          second n&apos;est pas forcément moins efficace : il a
          peut-être regardé ce qui existe. Trois facteurs expliquent la
          quasi-totalité des écarts.
        </p>
        <ul>
          <li>
            <strong>La dette du code existant.</strong> Une étude
            devenue classique, publiée par Stripe en 2018, mesure que
            les développeurs consacrent en moyenne un tiers de leur
            temps à la dette technique et à la maintenance de code
            ancien. Sur une reprise de projet, ce tiers ne se voit pas
            dans le devis : il se voit dans le nombre de jours.
          </li>
          <li>
            <strong>Vos allers-retours de décision.</strong> Trois
            interlocuteurs qui valident chacun en une semaine, ce sont
            trois semaines par cycle. Le droit l&apos;a
            d&apos;ailleurs consacré :
            l&apos;obligation de collaboration du client est réelle, et
            son manquement peut faire résilier le contrat à ses torts.
          </li>
          <li>
            <strong>Le périmètre qui s&apos;étend.</strong> Une étude
            du Project Management Institute publiée en 2018 mesurait
            que 52 % des projets subissaient un élargissement de
            périmètre en cours de route, contre 43 % quatre ans plus
            tôt. La parade n&apos;est pas de
            l&apos;interdire — les besoins évoluent légitimement — mais
            de le rendre visible : chaque ajout est chiffré en jours et
            arbitré, plutôt qu&apos;absorbé silencieusement.
          </li>
        </ul>

        <h2 id="ia">13. Ce que l&apos;IA a changé — et ce qu&apos;elle n&apos;a pas changé</h2>
        <p>
          Le discours ambiant dit que l&apos;IA divise les coûts de
          développement par deux. Les études sérieuses disent autre
          chose, et nous préférons les citer même quand elles nous
          arrangent moins.
        </p>
        <p>
          Un essai contrôlé publié en juillet 2025 par l&apos;institut
          METR a mesuré seize développeurs open source expérimentés sur
          246 tâches réelles : avec les outils d&apos;IA de
          l&apos;époque, ils ont été <strong>19 % plus lents</strong>,
          alors qu&apos;ils s&apos;estimaient 20 % plus rapides.
          L&apos;institut qualifie lui-même ce résultat
          d&apos;historique, les outils ayant changé depuis — mais il
          rappelle une chose : le gain de productivité de l&apos;IA
          n&apos;est ni automatique ni uniforme. Il est réel sur le
          code répétitif, la génération de tests, la reprise
          d&apos;existant et la documentation ; il est faible, voire
          négatif, sur les décisions d&apos;architecture et les
          systèmes complexes que le développeur connaît déjà par cœur.
        </p>
        <p>
          Côté marché, deux mouvements sont documentés. Une étude
          Brookings mesure un recul de la demande sur les plateformes
          de freelances après l&apos;arrivée des IA génératives,
          d&apos;environ 20 % sur le développement web et applicatif —
          davantage encore sur la rédaction. À
          l&apos;inverse, les profils qui maîtrisent ces outils sont
          mieux payés : un spécialiste IA se situe
          environ 30 % au-dessus d&apos;un développeur généraliste en
          France.
        </p>
        <p>
          Notre lecture, en tant qu&apos;agence qui développe avec ces
          outils au quotidien : <strong>l&apos;IA n&apos;a pas fait
          baisser le tarif journalier, elle a fait baisser le nombre de
          jours nécessaires</strong> sur certains postes — construction
          d&apos;interfaces, tests, contenus techniques. C&apos;est
          pour cette raison qu&apos;un site sur mesure de qualité
          professionnelle est aujourd&apos;hui accessible à des budgets
          qui, il y a trois ans, n&apos;ouvraient qu&apos;un thème
          paramétré. Le corollaire honnête est que la revue humaine de
          chaque ligne reste indispensable : c&apos;est elle qui
          distingue un site sur mesure d&apos;un code généré que
          personne ne saura reprendre.
        </p>

        <h2 id="cadre-legal">14. Devis, acompte, délais de paiement : le cadre légal</h2>
        <p>
          Quelques repères juridiques utiles, qui protègent les deux
          parties.
        </p>
        <ul>
          <li>
            <strong>Un devis signé vaut contrat</strong> et engage les
            deux parties. Il doit porter l&apos;identité et le numéro
            SIRET de chacune, une date et une durée de validité, la
            description détaillée des prestations, les prix hors
            taxes, le taux de TVA (20 % sur les prestations
            intellectuelles), les totaux, et les conditions de
            paiement.
          </li>
          <li>
            <strong>Le délai de paiement par défaut entre entreprises
            est de 30 jours</strong> après réalisation de la
            prestation. Il peut être porté contractuellement à
            60 jours à compter de la date de facture, ou 45 jours fin
            de mois. Ces plafonds sont d&apos;ordre public : aucun
            contrat ne peut y déroger, même signé par les deux
            parties.
          </li>
          <li>
            <strong>Les pénalités de retard sont dues de plein
            droit</strong>, sans mise en demeure, dès le lendemain de
            l&apos;échéance, ainsi qu&apos;une indemnité forfaitaire de
            recouvrement de 40 € par facture. Le taux par défaut usuel
            est le taux directeur de la Banque centrale européenne
            majoré de dix points.
          </li>
          <li>
            <strong>La propriété du code ne se déduit pas du
            paiement.</strong> En droit français, la cession des droits
            d&apos;auteur doit être écrite et préciser les droits
            cédés, l&apos;étendue, la durée et le territoire : sans
            cette clause, vous avez payé une prestation, pas un actif.
            Exigez-la au devis, avec la remise des accès et du code
            source à la livraison.
          </li>
          <li>
            <strong>L&apos;acompte usuel est de 30 %</strong> à la
            signature — parfois 50 % pour un nouveau client — avec des
            jalons intermédiaires sur les projets longs. Distinction
            juridique utile : sans précision écrite, une somme versée
            est réputée être des arrhes, que chaque partie peut
            abandonner pour se dédire ; un acompte, lui, engage
            définitivement les deux.
          </li>
          <li>
            <strong>En cas de litige</strong>, le Médiateur des
            entreprises propose un dispositif public et gratuit de
            médiation entre entreprises, avant tout contentieux.
          </li>
        </ul>

        <h2 id="negocier">15. Négocier sans casser la relation</h2>
        <p>
          La négociation d&apos;un tarif journalier obéit à une règle
          simple : <strong>ne demandez jamais une baisse sans offrir
          une contrepartie</strong>. L&apos;usage de place plafonne la
          remise à 5 à 10 %, généralement contre un engagement de
          trois à six mois ou une réduction de périmètre.
        </p>
        <p>
          Les trois leviers qui fonctionnent réellement, par ordre
          d&apos;efficacité. <strong>Le périmètre</strong> : retirer
          une fonctionnalité secondaire, reporter un lot à la phase
          suivante, réduire le nombre de gabarits de pages,
          c&apos;est-à-dire de modèles de mise en page réutilisés
          d&apos;une page à l&apos;autre — c&apos;est
          le levier le plus puissant, parce qu&apos;il agit sur les
          jours, pas sur le tarif. <strong>La durée</strong> : un
          engagement dans le temps justifie une remise, car il réduit
          le risque commercial du prestataire.{" "}
          <strong>Votre propre organisation</strong> : s&apos;engager
          sur des délais de validation courts et fournir vos contenus
          en avance fait gagner des jours réels, et un prestataire
          sérieux le valorisera.
        </p>
        <p>
          Le signal inverse mérite votre attention : un prestataire qui
          accepte immédiatement 20 % de baisse sans rien retirer au
          périmètre vous apprend quelque chose sur son devis initial ou
          sur son carnet de commandes. Dans les deux cas, posez-vous la
          question avant de vous réjouir.
        </p>

        <h2 id="methode">16. Méthode : établir votre budget en 6 étapes</h2>
        <ol>
          <li>
            <strong>Écrivez ce que vous voulez, pas comment le
            faire.</strong> Les objectifs, les fonctionnalités
            indispensables et celles qui peuvent attendre. Notre{" "}
            <Link href="/guides/cahier-des-charges-site-internet">modèle
            de cahier des charges</Link> vous donne la trame — un
            périmètre écrit est ce qui rend deux devis comparables.
          </li>
          <li>
            <strong>Estimez les jours avant de demander des
            prix.</strong> Appuyez-vous sur le tableau de la section 8
            pour arriver au rendez-vous avec un ordre de grandeur en
            tête. Vous ne serez plus dans la position de celui qui
            découvre le chiffre.
          </li>
          <li>
            <strong>Demandez trois devis avec la ventilation en
            jours par poste.</strong> Puis appliquez le contrôle de la
            section 9 : total divisé par le nombre de jours, comparé
            aux baromètres.
          </li>
          <li>
            <strong>Choisissez le modèle contractuel avant de
            négocier le prix.</strong> Forfait, régie plafonnée ou
            hybride : le modèle décide de qui porte le risque, et donc
            de la vraie valeur du devis.
          </li>
          <li>
            <strong>Provisionnez 15 à 25 % d&apos;aléas — et
            gardez-les.</strong> Les projets qui se passent bien ne
            sont pas ceux qui n&apos;ont aucun imprévu, ce sont ceux
            où l&apos;imprévu avait un budget.
          </li>
          <li>
            <strong>Chiffrez le récurrent avant de signer.</strong>{" "}
            Hébergement, maintenance corrective, mises à jour de
            sécurité et petites évolutions représentent usuellement 15
            à 20 % du coût de construction par an — un ordre de
            grandeur que détaille notre{" "}
            <Link href="/guides/cout-maintenance-site-internet">guide
            du coût de la maintenance</Link>. Un projet à
            15 000 € se budgète donc autour de 2 250 à 3 000 € par an
            ensuite. Demandez ce chiffre au devis, pas six mois après.
          </li>
        </ol>
        <p>
          Chez Hagnéré Code, nous ne facturons pas au tarif
          journalier. Nos projets sont au{" "}
          <Link href="/methode">forfait fixe contractuel</Link>, avec
          un périmètre écrit. Nous garantissons par contrat une note
          de performance d&apos;au moins 95 sur 100 sur mobile —
          mesurée par Lighthouse, l&apos;outil gratuit de Google qui
          alimente PageSpeed Insights — et 30 jours de garantie après
          la mise en ligne.
          Notre grille publique est consultable — 6 900 €, 14 900 € et
          22 000 € et plus pour un{" "}
          <Link href="/services/sites-vitrines">site vitrine</Link>,
          15 000 à 120 000 € pour un e-commerce sur mesure, et
          15 000 € minimum pour une première version de logiciel en
          ligne (SaaS) — périmètre volontairement plus resserré que la
          ligne « application métier » du tableau de la section 8, qui
          suppose une reprise de processus existants.
        </p>
        <p>
          Appliquez-lui le contrôle de la section 9, puisque c&apos;est
          ce que ce guide vous apprend à faire. Notre offre vitrine à
          14 900 € couvre environ 27 jours, soit près de 550 € par
          jour ; celle à 22 000 € et plus, des périmètres de 35 à
          45 jours. Notre fourchette e-commerce est volontairement
          large parce qu&apos;elle va du catalogue simple à la
          plateforme multi-pays : au-delà de 60 000 €, il ne
          s&apos;agit plus d&apos;une boutique mais d&apos;un système,
          et le tableau de la section 8 ne s&apos;y applique plus.
        </p>

        <GuideInlineCTA
          title="Un projet, un budget à cadrer ?"
          description="Décrivez votre besoin en 3 minutes : réponse personnelle sous 24 h ouvrées avec une estimation en jours, la ventilation par poste et un budget réaliste. Gratuit, sans engagement, et sans simulateur automatique — c'est nous qui lisons et qui répondons."
        />

        <InfoBox variant="emerald" title="À retenir : les 6 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>530 €</strong> : la médiane du tarif journalier des développeurs français en 2026, sur plus de 4 600 réponses de développeurs au sein d&apos;un agrégateur de 20 638 observations.</li>
            <li><strong>100 à 150 €</strong> : l&apos;écart entre le tarif affiché sur les plateformes et le tarif réellement pratiqué.</li>
            <li><strong>× 5</strong> : le revenu net mensuel d&apos;un consultant salarié vaut grossièrement cinq fois son tarif journalier — 550 €/jour finance environ 2 750 € net par mois. Chez un indépendant, comptez plutôt × 7 à × 9.</li>
            <li><strong>130 à 196</strong> : le nombre de jours réellement facturés par un indépendant dans l&apos;année, jamais 218.</li>
            <li><strong>5 à 20 %</strong> : l&apos;écart réel entre Paris et les régions selon la séniorité — pas les 30 % annoncés.</li>
            <li><strong>15 à 25 %</strong> : la marge d&apos;aléas à provisionner sur tout budget de projet.</li>
          </ul>
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Consultées en juillet 2026 :{" "}
          <a href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/" target="_blank" rel="noopener noreferrer">Silkhom, baromètre des TJM informatique (données 2019-2025)</a> ;{" "}
          <a href="https://www.malt.fr/t/barometre-tarifs/tech/" target="_blank" rel="noopener noreferrer">Malt, baromètre des tarifs tech 2026</a> ;{" "}
          <a href="https://www.free-work.com/fr/tech-it/earnings" target="_blank" rel="noopener noreferrer">Free-Work, baromètre des rémunérations</a> ;{" "}
          <a href="https://tjmetre.fr/barometre" target="_blank" rel="noopener noreferrer">TJMètre, baromètre 2026 (médianes et quartiles)</a> ;{" "}
          <a href="https://www.codeur.com/developpeur/web/tarif" target="_blank" rel="noopener noreferrer">Codeur.com, tarifs relevés en juillet 2026</a> ;{" "}
          <a href="https://arxiv.org/abs/2507.09089" target="_blank" rel="noopener noreferrer">METR, essai contrôlé sur l&apos;impact des outils d&apos;IA (2025)</a> ;{" "}
          <a href="https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market/" target="_blank" rel="noopener noreferrer">Brookings, effets de l&apos;IA générative sur le marché du freelance</a> ;{" "}
          <a href="https://stripe.com/reports/developer-coefficient" target="_blank" rel="noopener noreferrer">Stripe, The Developer Coefficient (2018)</a> ;{" "}
          <a href="https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse-of-the-profession-2018.pdf" target="_blank" rel="noopener noreferrer">Project Management Institute, Pulse of the Profession (2018)</a> ;{" "}
          <a href="https://entreprendre.service-public.fr/vosdroits/F23211" target="_blank" rel="noopener noreferrer">Service-public.fr, délais de paiement entre entreprises</a> ; étude Morgan Philips Freelance et étude Hays relayées par le Blog du Modérateur (2025) ; décomposition de la marge d&apos;une ESN publiée par ForTeam IT (2026) ; jurisprudence cour d&apos;appel de Grenoble, 6 juillet 2017 (obligation de collaboration du client).
        </p>
        <p className="text-sm">
          Les fourchettes de tarifs et de jours sont des ordres de
          grandeur de marché destinés à mettre un devis à
          l&apos;épreuve, pas un
          barème opposable. Les baromètres cités mesurent des
          populations différentes : leurs écarts sont expliqués en
          section 3. Cet article ne constitue pas un conseil juridique
          personnalisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
