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

const guide = getGuide("prix-site-vitrine");

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
      "Sites vitrines",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Prix d'un site vitrine",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte un site vitrine en 2026 ?",
    answer:
      "Pour préparer une consultation, les scénarios Hagnéré de ce guide vont de 0 à 1 000 € pour un site construit soi-même, de 800 à 3 000 € chez un freelance, de 2 000 à 6 000 € en agence standard et de 6 000 à 30 000 € pour une conception plus complète. Ce ne sont ni des moyennes de marché ni un devis.",
  },
  {
    question: "Pourquoi une agence coûte-t-elle plus cher qu’un freelance ?",
    answer:
      "L’écart vient surtout du périmètre et du nombre de métiers mobilisés : stratégie, rédaction, design, développement, référencement, tests et suivi. Comparez les livrables et les personnes prévues, pas seulement le statut.",
  },
  {
    question: "Combien coûte un site WordPress ?",
    answer:
      "Dans les scénarios de préparation de ce guide, un site avec un thème se situe entre 800 et 3 000 € chez un freelance ; une conception WordPress plus poussée entre 5 000 et 15 000 € ou davantage. Ajoutez hébergement, licences et maintenance, puis demandez un devis sur votre périmètre.",
  },
  {
    question: "Peut-on créer un site gratuitement avec Wix, Canva ou l’IA ?",
    answer:
      "Oui pour tester ou publier une présence simple. Vérifiez toutefois le domaine, les abonnements, les possibilités d’export, les formulaires et les réglages nécessaires à votre activité.",
  },
  {
    question: "Quels coûts faut-il prévoir après la création ?",
    answer:
      "Le domaine, l’hébergement ou l’abonnement, les licences, la maintenance, les modifications de contenus et parfois un outil de gestion des cookies. Demandez un total sur trois ans.",
  },
  {
    question: "Combien de pages faut-il ?",
    answer:
      "Autant que nécessaire pour expliquer clairement les offres et répondre aux questions importantes. Cinq pages peuvent suffire à une activité simple ; plusieurs services ou zones peuvent demander des pages distinctes.",
  },
  {
    question: "Un site d’une seule page peut-il être référencé ?",
    answer:
      "Oui sur une intention limitée. Plusieurs pages deviennent utiles lorsque vous devez traiter des services ou recherches différents. Le nombre de pages ne garantit cependant aucun classement.",
  },
  {
    question: "Une refonte coûte-t-elle moins cher qu’une création ?",
    answer:
      "Pas forcément. Elle reprend les postes de création et ajoute l’analyse de l’existant, la migration des contenus et les redirections des anciennes pages lorsque les adresses changent.",
  },
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Prix d'un site vitrine" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Quel budget prévoir pour présenter votre entreprise et recevoir des demandes ? Comparez les fourchettes 2026, les contenus inclus, les coûts sur trois ans et le niveau réellement utile."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Fait soi-même : 0 – 1 000 €",
            description: "Une présence simple avec votre temps",
            color: "violet",
          },
          {
            number: "02",
            title: "Freelance : 800 – 3 000 €",
            description: "Un périmètre clair et un interlocuteur direct",
            color: "blue",
          },
          {
            number: "03",
            title: "Agence : 2 000 – 30 000 €",
            description: "Selon contenus, métiers et niveau de conception",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "Fourchettes et coûts comparés sur 3 ans",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/services/sites-vitrines",
            label: "Création de site vitrine",
          },
          {
            href: "/services/referencement-google",
            label: "Référencement Google",
          },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
          { href: "/realisations", label: "Nos réalisations" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Prix d'un site vitrine : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous avez besoin d’un site pour rassurer avant un rendez-vous,
          présenter vos services ou recevoir des demandes.{" "}
          <strong>
            Pour préparer vos devis, nos scénarios situent un site courant entre
            800 et 3 000 € chez un freelance, entre 2 000 et 6 000 € en agence
            et entre 6 000 et 30 000 € pour une conception plus complète.
          </strong>
          Un site construit seul peut coûter moins de 1 000 €, mais demande
          votre temps et un abonnement. Le bon budget dépend d’abord du rôle du
          site, des contenus à produire et de ce qui est réellement inclus dans
          le devis.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Pour exister en ligne avec quelques informations fiables, une solution
          simple peut suffire. Pour obtenir des demandes, il faut surtout une
          offre claire, des pages utiles, des éléments rassurants et un suivi
          des contacts. Une conception sur mesure peut aider certains projets,
          mais elle ne garantit ni trafic ni clients.
        </InfoBox>

        <p>
          Ces montants sont des <strong>repères éditoriaux Hagnéré Code</strong>
          destinés à préparer une enveloppe. Ils ne constituent ni une étude
          représentative du marché, ni nos tarifs, ni une promesse de prix. Le
          tableau vous aide surtout à demander ce qui est compris et ce qui
          restera à la charge de votre équipe.
        </p>

        <GuideToc
          items={[
            { id: "fourchettes", label: "1. Les fourchettes de prix en 2026" },
            { id: "role", label: "2. Choisir le budget selon le rôle du site" },
            { id: "inclus", label: "3. Ce qui doit être inclus dans le devis" },
            {
              id: "prestataire",
              label: "4. Fait soi-même, freelance ou agence",
            },
            { id: "outil", label: "5. Wix, WordPress ou développement dédié" },
            { id: "recurrent", label: "6. Les coûts après la mise en ligne" },
            { id: "contenus", label: "7. Pages, textes et photos" },
            { id: "delai", label: "8. Le délai réaliste" },
            { id: "comparaison", label: "9. Comparer deux devis" },
            { id: "tpe", label: "10. Repères pour artisans et TPE" },
            { id: "decision", label: "11. Construire votre budget" },
          ]}
        />

        <h2 id="fourchettes">
          1. Quel est le prix d’un site vitrine en 2026 ?
        </h2>

        <GuideTable
          headers={["Formule", "Fourchette indicative", "Situation adaptée"]}
          rows={[
            [
              "Site construit soi-même",
              "0 – 1 000 € + abonnement",
              "Tester une activité ou publier une présence simple",
            ],
            [
              "Site d’une seule page",
              "500 – 2 000 €",
              "Événement, campagne ou offre unique",
            ],
            [
              "Freelance",
              "800 – 3 000 €",
              "Petit site au périmètre bien défini",
            ],
            [
              "Agence standard",
              "2 000 – 6 000 €",
              "TPE ou PME avec plusieurs besoins à coordonner",
            ],
            [
              "Conception personnalisée",
              "6 000 – 15 000 €",
              "Contenus, identité ou parcours spécifiques",
            ],
            [
              "Site étendu ou multilingue",
              "15 000 – 30 000 €",
              "Marque, nombreux contenus ou plusieurs pays",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e"
            target="_blank"
            rel="noopener noreferrer"
          >
            dossier France Num
          </a>{" "}
          relaie les estimations de deux professionnels : 500 à 2 000 € pour une
          page unique et 900 à 5 000 € pour un site basique. Il s’agit de
          repères proposés par ces contributeurs, pas d’un tarif officiel. Les
          autres montants du tableau sont nos scénarios de préparation ; seul un
          devis écrit sur votre périmètre engage le prestataire.
        </p>

        <InfoBox
          variant="amber"
          title="Comparez en HT ou en TTC selon votre situation"
        >
          Si votre entreprise récupère la TVA, le montant hors taxes permet de
          comparer son coût. Si elle ne la récupère pas, comparez le total
          toutes taxes comprises. Un même prix affiché peut sinon créer un écart
          de 20 %.
        </InfoBox>

        <h2 id="role">
          2. Quel rôle le site doit-il jouer pour l’entreprise ?
        </h2>

        <p>
          Le budget n’est pas le même pour une carte de visite en ligne et pour
          un site qui doit recevoir chaque mois des demandes qualifiées.
          Terminez cette phrase avant de consulter un prestataire : « Dans douze
          mois, ce site devra surtout nous aider à… ».
        </p>

        <GuideTable
          headers={[
            "Objectif",
            "Contenu généralement nécessaire",
            "Point de vigilance",
          ]}
          rows={[
            [
              "Rassurer les personnes qui connaissent déjà l’entreprise",
              "Activité, équipe, coordonnées, avis ou réalisations",
              "Informations à jour et lecture mobile",
            ],
            [
              "Recevoir des appels ou demandes de devis",
              "Offres claires, zones desservies, formulaires et éléments rassurants",
              "Suivi des demandes et délai de réponse",
            ],
            [
              "Être trouvé sur plusieurs services",
              "Une page utile par besoin important et contenus réguliers",
              "Aucune position Google n’est garantie",
            ],
            [
              "Présenter une marque ou plusieurs pays",
              "Identité complète, contenus riches et langues",
              "Production, traduction et validation des contenus",
            ],
          ]}
        />

        <p>
          Avoir un site reste utile dans de nombreux secteurs. Le{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baromètre France Num 2025
          </a>{" "}
          indique que 65 % des TPE-PME interrogées possèdent un site présentant
          leur activité. Cette fréquence ne prédit ni le trafic ni les demandes
          que recevra votre entreprise.
        </p>

        <h2 id="inclus">3. Que doit contenir le prix annoncé ?</h2>

        <p>
          Deux devis au même montant peuvent couvrir des projets très
          différents. Demandez qui prend en charge chaque poste et quel document
          ou écran vous recevrez.
        </p>

        <GuideTable
          headers={["Poste", "Ce que vous devez obtenir", "Souvent oublié"]}
          rows={[
            [
              "Cadrage",
              "Objectifs, publics, pages et fonctions validés",
              "Entretiens avec l’équipe",
            ],
            [
              "Rédaction",
              "Textes prêts à être publiés",
              "Allers-retours et collecte des éléments",
            ],
            [
              "Design",
              "Maquettes avec vos vrais contenus",
              "Versions téléphone",
            ],
            [
              "Création technique",
              "Pages, formulaire et administration",
              "Abonnements ou licences",
            ],
            [
              "Référencement de base",
              "Titres, métadonnées, liens et indexation vérifiés",
              "Aucune garantie de position",
            ],
            [
              "Mise en ligne",
              "Domaine, mesure, tests et formation",
              "Période de correction après lancement",
            ],
          ]}
        />

        <p>
          La « recette » désigne simplement la vérification finale du site avant
          son acceptation. Elle doit tester les tâches réelles : envoyer un
          formulaire, ouvrir le site sur téléphone, modifier un contenu et
          vérifier chaque lien important.
        </p>

        <h2 id="prestataire">
          4. Construire soi-même, choisir un freelance ou une agence ?
        </h2>

        <p>
          Un outil en ligne comme Wix ou Squarespace permet de construire
          soi-même le site contre un abonnement. C’est une bonne solution
          lorsque le besoin est simple et que vous avez du temps pour écrire,
          choisir les images et faire les réglages.
        </p>

        <p>
          Un freelance peut offrir un très bon rapport coût-proximité sur un
          périmètre clair. Vérifiez les compétences réellement incluses : une
          seule personne ne peut pas toujours assurer rédaction, photographie,
          design, développement et stratégie de référencement au même niveau.
        </p>

        <p>
          Une agence devient utile lorsque plusieurs métiers doivent être
          coordonnés ou que la continuité du projet compte. Elle n’est pas
          automatiquement plus créative ni plus fiable. Demandez qui travaillera
          réellement, quels livrables sont prévus et ce qui est sous-traité.
        </p>

        <h2 id="outil">
          5. Wix, WordPress ou développement dédié : l’outil ne décide pas du
          résultat
        </h2>

        <p>
          Wix regroupe l’éditeur, l’hébergement et les mises à jour dans un
          abonnement. WordPress est un logiciel de gestion de contenus installé
          chez un hébergeur ; il offre plus de liberté, mais quelqu’un doit
          suivre les mises à jour et les extensions. Un développement dédié peut
          réduire certaines limites ou répondre à un besoin spécifique, avec un
          budget et une maintenance propres.
        </p>

        <GuideTable
          headers={["Choix", "Principal avantage", "Contrepartie"]}
          rows={[
            [
              "Wix ou autre outil tout-en-un",
              "Simplicité et autonomie immédiate",
              "Abonnement et sortie plus limitée",
            ],
            [
              "WordPress",
              "Écosystème et liberté éditoriale",
              "Maintenance, hébergement et extensions",
            ],
            [
              "Développement dédié",
              "Conception adaptée au besoin précis",
              "Investissement initial et équipe à conserver",
            ],
          ]}
        />

        <p>
          Aucun de ces choix ne garantit la rapidité, le référencement ou la
          conversion. Ces qualités doivent être vérifiées sur le site livré.
          Pour approfondir, consultez{" "}
          <Link href="/guides/wix-ou-wordpress">Wix ou WordPress</Link> et{" "}
          <Link href="/guides/template-ou-site-sur-mesure">
            template ou site sur mesure
          </Link>
          .
        </p>

        <h2 id="recurrent">6. Quels coûts restent après la mise en ligne ?</h2>

        <p>
          Le dossier France Num cité plus haut donne des ordres de grandeur pour
          le domaine et l’hébergement. Ils ne constituent pas un barème :
          relevez les prix d’ouverture et de renouvellement des fournisseurs
          réellement envisagés.
        </p>

        <GuideTable
          headers={["Coût récurrent", "Ordre de grandeur", "Question à poser"]}
          rows={[
            [
              "Domaine",
              "5 – 50 € HT/an selon France Num",
              "À quel nom est enregistré le compte ?",
            ],
            [
              "Hébergement ou abonnement",
              "5 – 50 € HT/mois pour de nombreux petits sites",
              "Quel trafic et quels services sont inclus ?",
            ],
            [
              "Licences",
              "Selon les outils réellement retenus",
              "Quelles extensions sont indispensables ?",
            ],
            [
              "Maintenance",
              "À chiffrer selon les tâches et le délai attendu",
              "Mises à jour, sauvegardes et corrections sont-elles incluses ?",
            ],
            [
              "Contenus",
              "Selon le rythme de publication",
              "Qui écrit et met à jour les informations ?",
            ],
          ]}
        />

        <p>
          Un site dit « statique » prépare les pages à l’avance et réduit
          certains besoins de maintenance applicative. Il conserve néanmoins un
          hébergement, des dépendances, des formulaires et des contenus à
          suivre. À l’inverse, WordPress ne doit pas être considéré comme
          fragile par nature : la qualité dépend de sa construction et de son
          entretien.
        </p>

        <InfoBox variant="emerald" title="Demandez le total sur trois ans">
          Additionnez création, abonnement, licences, maintenance, contenus et
          temps interne. Cette comparaison évite de choisir un prix d’appel qui
          devient plus coûteux après plusieurs renouvellements.
        </InfoBox>

        <h2 id="contenus">
          7. Combien de pages, de textes et de photos faut-il prévoir ?
        </h2>

        <p>
          Une activité simple peut tenir dans cinq pages : accueil, services,
          équipe ou histoire, réalisations et contact. Plusieurs services,
          clientèles ou zones géographiques peuvent nécessiter des pages
          séparées si chacune apporte une réponse utile.
        </p>

        <p>
          Pour chiffrer les contenus, faites traiter une page représentative et
          une série de photos avant d’extrapoler. Comptez le temps d’entretien,
          de recherche, d’écriture, de prise de vue, de retouche et de
          validation. Ces postes sont parfois plus importants pour la confiance
          du lecteur qu’un effet graphique supplémentaire.
        </p>

        <p>
          Un site d’une seule page peut répondre à une offre ou une campagne
          précise. Il devient limité lorsque plusieurs intentions doivent être
          traitées. Plusieurs pages ne garantissent toutefois aucun
          référencement : elles doivent être utiles, distinctes et reliées.
        </p>

        <h2 id="delai">
          8. Combien de temps faut-il pour créer un site vitrine ?
        </h2>

        <p>
          Les délais ci-dessous sont des scénarios de planification Hagnéré
          Code. Ils supposent que les personnes, contenus et accès annoncés sont
          disponibles ; le planning du devis doit les remplacer.
        </p>

        <GuideTable
          headers={["Projet", "Délai indicatif", "Cause fréquente de retard"]}
          rows={[
            [
              "Site simple avec contenus prêts",
              "2 – 5 semaines",
              "Validations et accès au domaine",
            ],
            [
              "Site de PME avec rédaction et design",
              "6 – 10 semaines",
              "Textes, photos et retours de plusieurs décideurs",
            ],
            [
              "Site étendu ou multilingue",
              "10 – 16 semaines+",
              "Traductions, contenus et intégrations",
            ],
          ]}
        />

        <p>
          Un délai n’est crédible que si le devis précise ce que votre
          entreprise doit fournir et sous combien de jours elle doit valider.
          Une promesse très courte peut simplement supposer que tous les
          contenus sont déjà prêts.
        </p>

        <h2 id="comparaison">
          9. Comment comparer deux devis sans connaître la technique ?
        </h2>

        <ol>
          <li>
            Vérifiez que les deux devis couvrent les mêmes pages et fonctions.
          </li>
          <li>Faites préciser qui écrit les textes et fournit les images.</li>
          <li>
            Demandez quelles pages seront réellement dessinées avant leur
            création.
          </li>
          <li>
            Identifiez les abonnements, licences et coûts après la première
            année.
          </li>
          <li>
            Testez l’administration avec la personne qui mettra le site à jour.
          </li>
          <li>
            Faites écrire la période de correction, la maintenance et les
            conditions de sortie.
          </li>
        </ol>

        <p>
          Écartez les promesses générales : « optimisé pour le référencement »,
          « ultra rapide » ou « sur mesure » ne décrivent pas un résultat
          accepté. Le devis doit indiquer les contrôles réalisés, sans promettre
          de position Google ni de nombre de clients.
        </p>

        <GuideInlineCTA
          title="Vous voulez comparer deux budgets de site vitrine ?"
          description="Envoyez le rôle attendu du site, les pages prévues et les devis déjà reçus. Nous vous aidons à repérer les postes inclus, les coûts futurs et le niveau de conception réellement utile."
          tags={[
            "Périmètres comparés à égalité",
            "Coûts sur trois ans",
            "Possibilité de recommander une solution simple",
          ]}
        />

        <h2 id="tpe">
          10. Quel investissement pour un artisan ou une TPE locale ?
        </h2>

        <p>
          Un artisan surtout recommandé par ses clients peut commencer par un
          site simple : services, zone d’intervention, réalisations, avis
          vérifiables, coordonnées et formulaire qui fonctionne. La qualité des
          photos et la rapidité de réponse aux demandes comptent souvent
          davantage qu’un grand nombre de pages.
        </p>

        <p>
          Une TPE qui veut développer plusieurs services par la recherche peut
          prévoir des pages distinctes et un travail éditorial régulier. Le
          budget doit alors inclure la rédaction, la mesure et le suivi
          commercial, pas seulement la fabrication initiale.
        </p>

        <p>
          Une marque qui vend déjà par un réseau ou répond à des appels d’offres
          peut investir davantage dans l’identité, les preuves, le multilingue
          ou la documentation. Ce budget se justifie par les usages attendus,
          pas par la taille de l’entreprise seule.
        </p>

        <h2 id="decision">11. Construisez votre budget en quatre étapes</h2>

        <ol>
          <li>
            <strong>Nommer le résultat attendu.</strong> Rassurer, recevoir des
            demandes, soutenir la prospection ou publier régulièrement.
          </li>
          <li>
            <strong>Lister les contenus.</strong> Pages, textes, photos,
            langues, réalisations et documents à reprendre.
          </li>
          <li>
            <strong>Comparer les périmètres.</strong> Création, mise en ligne,
            administration, maintenance et coûts tiers.
          </li>
          <li>
            <strong>Calculer trois ans.</strong> Ajouter les coûts récurrents et
            le temps de votre équipe au prix initial.
          </li>
        </ol>

        <InfoBox variant="blue" title="Notre position commerciale">
          Hagnéré Code propose des sites vitrines dont les prix sont publiés sur
          la <Link href="/tarifs">page tarifs</Link>. Cette offre n’est pas la
          référence universelle : un outil tout-en-un ou un freelance peut être
          plus adapté à un besoin simple. Le devis doit expliquer ce que notre
          intervention apporte au projet précis.
        </InfoBox>

        <p>
          Pour préparer la consultation, utilisez le{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges
          </Link>{" "}
          ou décrivez le projet depuis{" "}
          <Link href="/demarrer-un-projet">démarrer un projet</Link>. Si vous
          devez encaisser des paiements et gérer un catalogue, consultez plutôt
          le guide du{" "}
          <Link href="/guides/prix-site-e-commerce">
            prix d’un site e-commerce
          </Link>
          .
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références consultées en juillet 2026 :{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num
          </a>{" "}
          (estimations de deux Activateurs France Num et coûts additionnels) ;{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baromètre France Num 2025
          </a>
          .
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes principales sont des scénarios éditoriaux Hagnéré
            Code destinés à préparer une consultation, pas des moyennes de
            marché. Les estimations France Num sont attribuées à leurs
            contributeurs. Seuls nos forfaits publiés sur la page tarifs et un
            devis accepté engagent Hagnéré Code.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
