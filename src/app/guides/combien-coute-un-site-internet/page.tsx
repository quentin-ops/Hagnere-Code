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

const guide = getGuide("combien-coute-un-site-internet");

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
    // Pas d'images ici : l'og:image dédiée est générée par
    // opengraph-image.tsx (convention de fichier Next.js).
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
      name: "Combien coûte un site internet ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte un site internet professionnel en 2026 ?",
    answer:
      "Pour préparer une consultation, les scénarios Hagnéré de ce guide vont d'environ 800 à 10 000 € pour un site vitrine courant, de 2 000 à 15 000 € pour une boutique sur plateforme et de 15 000 à plus de 120 000 € pour une boutique ou une application sur mesure. Ce ne sont ni des moyennes de marché ni un devis.",
  },
  {
    question: "Combien coûte un site vitrine ?",
    answer:
      "Dans les scénarios de préparation de ce guide, un site vitrine simple se situe entre 800 et 3 000 € chez un indépendant et entre 3 000 et 10 000 € en agence, davantage pour un travail éditorial, multilingue ou très personnalisé. Vérifiez surtout les textes, les maquettes, les tests et la maintenance inclus.",
  },
  {
    question: "Peut-on créer un site pour moins de 1 000 € ?",
    answer:
      "Oui, avec un outil en ligne, un modèle prêt à l'emploi, peu de pages et une forte participation de votre équipe. Cette solution peut suffire pour tester une activité. Comptez aussi votre temps, l'abonnement, le nom de domaine, les limites de sortie et les améliorations futures.",
  },
  {
    question: "Combien coûte un site e-commerce ?",
    answer:
      "Nos scénarios de préparation situent une boutique configurée sur une plateforme entre 2 000 et 15 000 €. Une solution avec des règles métier, des connexions ou une vitrine développée spécifiquement est située entre 15 000 et 120 000 € et plus. Ajoutez abonnement, paiement, applications et maintenance, puis remplacez ces repères par un devis.",
  },
  {
    question: "Combien coûte une application web ou un SaaS ?",
    answer:
      "Les scénarios éditoriaux de ce guide situent une première version exploitable entre 15 000 et 50 000 €, puis une plateforme plus complète entre 40 000 et 120 000 € et plus. Ce ne sont pas des prix de marché : utilisateurs, droits, abonnements, données, sécurité, assistance et exploitation doivent être chiffrés sur votre produit.",
  },
  {
    question: "Combien coûte un site internet par mois ?",
    answer:
      "Le coût mensuel dépend du modèle : abonnement à un outil, hébergement, nom de domaine, emails, licences, maintenance, assistance et contenus. Une création payée en une fois conserve des coûts annuels. Un abonnement doit être comparé sur toute sa durée avec ses conditions de sortie.",
  },
  {
    question: "Pourquoi deux devis sont-ils si différents ?",
    answer:
      "Ils ne couvrent généralement pas le même travail. L'un peut inclure stratégie, textes, maquettes, développement, reprise des données, tests et maintenance ; l'autre seulement l'installation d'un modèle. Demandez exactement la même liste de livraisons et d'exclusions.",
  },
  {
    question: "Combien coûte la maintenance d'un site ?",
    answer:
      "Il n'existe pas de pourcentage universel. Les offres publiques vont de quelques dizaines d'euros par mois pour un site courant à plusieurs centaines pour une boutique active. Faites préciser mises à jour, sauvegardes, surveillance, corrections, délai d'intervention et petites évolutions.",
  },
  {
    question: "Suis-je propriétaire du site une fois la facture payée ?",
    answer:
      "Pas automatiquement. Le contrat doit préciser les droits transmis sur le code, le design et les contenus. Faites aussi ouvrir ou transférer le domaine, l'hébergement et les comptes au nom de l'entreprise, avec une procédure pour récupérer le code, les données et les accès.",
  },
  {
    question: "Comment obtenir un prix précis ?",
    answer:
      "Décrivez l'objectif, les visiteurs, les pages, les fonctions, les contenus disponibles, les outils à connecter, les données à reprendre, le budget et la date. Demandez au prestataire de séparer la création, les options, les coûts annuels et ce qui reste à votre charge.",
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
          { label: "Combien coûte un site internet ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Quel budget prévoir pour votre site ? Comparez un site simple, une vitrine, une boutique et une application, puis ajoutez les contenus, l’entretien, les abonnements et le coût sur trois ans."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Vitrine courante : 800 à 10 000 €",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Boutique sur plateforme : 2 000 à 15 000 €",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Application sur mesure : dès 15 000 €",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          {
            href: "/guides/combien-coute-une-application-mobile",
            label: "Prix d'une application mobile",
          },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
          {
            href: "/services/sites-vitrines",
            label: "Création de site vitrine",
          },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          {
            href: "/outils/calculateur-cout-excel",
            label: "Calculateur coût Excel",
          },
          { href: "/realisations", label: "Nos réalisations" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Prix d'un site internet : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous cherchez le budget à prévoir avant de demander des devis. Pour
          préparer votre consultation, nos scénarios situent un site vitrine
          courant entre <strong>800 et 10 000 €</strong>, une boutique sur une
          plateforme existante entre <strong>2 000 et 15 000 €</strong>, et une
          boutique ou une application développée selon des besoins particuliers
          entre <strong>15 000 et plus de 120 000 €</strong>.
        </p>
        <p>
          Ces montants ne décrivent pas le même travail. Un site de cinq pages
          réalisé à partir d&apos;un modèle peut utiliser vos textes déjà prêts.
          Il n&apos;est pas comparable à un projet où l&apos;agence conçoit les
          messages, les maquettes, les fonctions, la mesure des demandes et la
          maintenance. Ce guide vous aide à choisir le niveau réellement utile
          et à transformer une fourchette en budget complet.
        </p>

        <p>
          Ces fourchettes sont des{" "}
          <strong>repères éditoriaux Hagnéré Code</strong>
          construits à partir des périmètres décrits dans le guide. Elles ne
          constituent ni une étude représentative du marché, ni nos tarifs, ni
          une promesse. Le baromètre cité plus bas apporte un point de contexte
          séparé ; votre budget final dépendra du devis et des coûts récurrents.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Les prix par type de projet" },
            {
              id: "solution-simple",
              label: "2. La solution la plus simple peut suffire",
            },
            {
              id: "variation",
              label: "3. Ce qui fait réellement varier le prix",
            },
            {
              id: "prestataire",
              label: "4. Outil en ligne, freelance ou agence",
            },
            { id: "devis", label: "5. Ce qu'un devis doit inclure" },
            {
              id: "couts-annuels",
              label: "6. Les coûts après la mise en ligne",
            },
            { id: "trois-ans", label: "7. Comparer le coût sur trois ans" },
            {
              id: "projets-complexes",
              label: "8. Boutique, refonte, outil métier et SaaS",
            },
            {
              id: "delai-droits-aides",
              label: "9. Délais, droits et aides éventuelles",
            },
            {
              id: "budget",
              label: "10. Préparer un budget et demander des devis",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Les prix par type de projet</h2>
        <p>
          Le{" "}
          <a
            href="https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs"
            target="_blank"
            rel="noopener noreferrer"
          >
            baromètre La Fabrique du Net
          </a>{" "}
          publie une médiane de 5 200 € sur son échantillon de 1 312 budgets et
          175 agences. Cela signifie que la moitié des projets observés se situe
          en dessous et l&apos;autre au-dessus. Ce chiffre ne constitue ni un
          tarif conseillé ni une moyenne de tout le marché.
        </p>
        <GuideTable
          headers={[
            "Type de projet",
            "Fourchette de préparation",
            "Ce que le prix doit préciser",
          ]}
          rows={[
            [
              "Page unique ou petit site à partir d'un modèle",
              "300 à 3 000 €",
              "Contenus fournis, personnalisation, domaine et abonnement",
            ],
            [
              "Site vitrine de 3 à 10 pages",
              "800 à 10 000 €",
              "Textes, maquettes, formulaire, mesure, tests et formation",
            ],
            [
              "Site vitrine multilingue ou très personnalisé",
              "2 500 à 22 000 € et plus",
              "Nombre de langues, production des contenus et modèles de pages",
            ],
            [
              "Boutique sur Shopify, WooCommerce ou autre plateforme",
              "2 000 à 15 000 €",
              "Catalogue, paiement, livraison, applications et exploitation",
            ],
            [
              "E-commerce ou application sur mesure",
              "15 000 à 120 000 € et plus",
              "Règles métier, données, connexions, sécurité et maintenance",
            ],
            [
              "Première version d'un logiciel en ligne (SaaS)",
              "15 000 à 50 000 €",
              "Utilisateurs, abonnements, fonctions essentielles et assistance",
            ],
          ]}
        />
        <p>
          Les fourchettes du tableau sont nos scénarios de préparation ; elles
          ne sont pas déduites de cette médiane et ne proviennent pas d’un
          échantillon représentatif. Utilisez-les pour préparer une enveloppe et
          questionner un écart, jamais pour exiger un prix sans avoir décrit le
          projet.
        </p>

        <h2 id="solution-simple">2. La solution la plus simple peut suffire</h2>
        <p>
          Le bon budget dépend du rôle du site. Un professionnel recommandé par
          ses clients peut avoir besoin de quelques pages claires, d&apos;avis,
          d&apos;un numéro visible et d&apos;un formulaire. Une fiche Google
          Business Profile bien tenue peut compléter cette présence locale
          gratuitement. Il n&apos;a pas nécessairement besoin d&apos;une
          plateforme à cinq chiffres.
        </p>
        <GuideTable
          headers={[
            "Besoin",
            "Première option à évaluer",
            "Quand investir davantage",
          ]}
          rows={[
            [
              "Tester une nouvelle activité",
              "Page simple ou outil en ligne",
              "Quand l'offre et les premiers contacts sont confirmés",
            ],
            [
              "Être trouvé et contacté localement",
              "Fiche établissement et petit site clair",
              "Quand plusieurs services ou zones demandent des pages dédiées",
            ],
            [
              "Obtenir régulièrement des demandes depuis Google",
              "Site structuré avec contenus et mesure",
              "Quand la recherche représente un vrai canal commercial",
            ],
            [
              "Vendre ou automatiser un travail",
              "Plateforme existante ou première fonction ciblée",
              "Quand les règles et les volumes justifient un développement propre",
            ],
          ]}
        />
        <p>
          Les outils en ligne comme Wix ou Squarespace réduisent le coût de
          départ si vous fournissez le temps, les textes et les images. Ils
          facturent un abonnement et la sortie peut demander une reconstruction.
          Ce compromis peut être raisonnable pour un test ou un site très
          simple. Il doit seulement être choisi en connaissance de cause.
        </p>

        <h2 id="variation">3. Ce qui fait réellement varier le prix</h2>
        <p>
          Le nombre de pages compte, mais il n&apos;est pas le seul facteur. Une
          page copiée à partir d&apos;un modèle demande peu de travail ; une
          page écrite, maquettée et testée pour répondre à une question
          commerciale en demande davantage.
        </p>
        <GuideTable
          headers={["Poste", "Version simple", "Version plus exigeante"]}
          rows={[
            [
              "Contenus",
              "Textes et photos fournis par l'entreprise",
              "Recherche, rédaction, photos ou illustrations produites",
            ],
            [
              "Design",
              "Modèle existant adapté aux couleurs",
              "Maquettes propres à la marque et aux parcours",
            ],
            [
              "Fonctions",
              "Formulaire et pages courantes",
              "Comptes, paiement, calculs, rendez-vous ou règles particulières",
            ],
            [
              "Données",
              "Quelques contenus saisis manuellement",
              "Import, nettoyage, droits et synchronisation",
            ],
            [
              "Qualité",
              "Tests essentiels sur appareils courants",
              "Accessibilité, performance, sécurité et cas d'erreur documentés",
            ],
          ]}
        />
        <p>
          Demandez qui rédige, qui choisit les photos, qui saisit les contenus,
          qui reprend les données et qui teste. Un poste retiré du devis ne
          disparaît pas : il devient du temps de votre équipe ou une seconde
          facture.
        </p>

        <h2 id="prestataire">4. Outil en ligne, freelance ou agence</h2>
        <GuideTable
          headers={["Solution", "Convient lorsque", "À prévoir"]}
          rows={[
            [
              "Outil en ligne à faire soi-même",
              "Le site est simple et vous avez du temps",
              "Abonnement, apprentissage, contenus et limites de transfert",
            ],
            [
              "Freelance",
              "Le projet est clair et une compétence principale suffit",
              "Pilotage interne, disponibilité et solution de remplacement",
            ],
            [
              "Agence",
              "Design, contenus, développement et suivi doivent être coordonnés",
              "Coût de structure plus élevé et équipe réellement affectée",
            ],
          ]}
        />
        <p>
          Le tarif journalier explique une partie des écarts, mais le nombre de
          jours et la qualité de l&apos;estimation comptent davantage. Un
          prestataire expérimenté peut coûter plus cher par jour et réduire le
          travail ou les reprises. Notre{" "}
          <Link href="/guides/tjm-developpeur-web">
            guide du tarif journalier d&apos;un développeur
          </Link>{" "}
          explique comment lire cette information.
        </p>
        <p>
          Si vous pouvez piloter le projet et fournir les contenus, un bon
          freelance peut être une réponse efficace. Si personne ne peut
          coordonner les métiers et les validations, une agence peut prendre ce
          rôle. Dans les deux cas, vérifiez les réalisations, les
          responsabilités et la possibilité de faire reprendre le site.
        </p>

        <h2 id="devis">5. Ce qu&apos;un devis doit inclure</h2>
        <GuideTable
          headers={["Étape", "Ce qui peut être livré", "Question à poser"]}
          rows={[
            [
              "Préparation",
              "Objectifs, organisation des pages et priorités",
              "Quelles décisions seront prises avant les maquettes ?",
            ],
            [
              "Contenus et design",
              "Textes, photos, maquettes ordinateur et téléphone",
              "Qui produit, relit et valide ?",
            ],
            [
              "Réalisation",
              "Pages, administration, formulaires et connexions",
              "Qu'est-ce qui est personnalisé ou réutilisé ?",
            ],
            [
              "Vérification",
              "Tests, corrections, formation et mise en ligne",
              "Sur quels appareils et quels parcours ?",
            ],
            [
              "Après-lancement",
              "Garantie, hébergement, maintenance et assistance",
              "Quel est le coût d'une année normale ?",
            ],
          ]}
        />
        <p>
          Le devis doit aussi nommer les exclusions, le calendrier, les
          paiements et la méthode appliquée lorsqu&apos;une demande change. Une
          ligne « création site internet » suivie d&apos;un montant ne permet
          pas de savoir ce que vous achetez.
        </p>
        <p>
          Pour comparer, envoyez exactement la même demande à chaque
          prestataire. Demandez ensuite une version indispensable et des
          options. Vous pourrez réduire le budget en retirant une fonction
          identifiée, plutôt qu&apos;en dégradant silencieusement tout le
          projet.
        </p>

        <h2 id="couts-annuels">6. Les coûts après la mise en ligne</h2>
        <p>
          Même payé en une fois, un site conserve des coûts. Le{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e"
            target="_blank"
            rel="noopener noreferrer"
          >
            dossier France Num
          </a>{" "}
          donne des ordres de grandeur pour le domaine et l’hébergement. Ils ne
          constituent pas un barème : relevez les prix d’ouverture et de
          renouvellement des fournisseurs réellement envisagés.
        </p>
        <GuideTable
          headers={["Dépense", "Repère", "À vérifier"]}
          rows={[
            [
              "Nom de domaine",
              "5 à 50 € HT par an selon France Num",
              "Titulaire, renouvellement et accès",
            ],
            [
              "Hébergement",
              "5 à 50 € HT par mois pour de nombreux petits sites",
              "Trafic, sauvegardes, support et hausse possible",
            ],
            [
              "Emails professionnels",
              "Tarif par utilisateur selon le fournisseur",
              "Nombre de comptes et évolution du tarif",
            ],
            [
              "Maintenance",
              "À chiffrer selon les tâches et le délai attendu",
              "Mises à jour, sauvegardes, corrections et délai d'intervention",
            ],
            [
              "Licences et services",
              "Selon les outils réellement retenus",
              "Outils, formulaires, images, cookies et renouvellements",
            ],
          ]}
        />
        <p>
          Un site construit sans système d&apos;administration complexe peut
          réduire certaines mises à jour, mais il ne supprime pas le suivi de
          l&apos;hébergement, des logiciels et services dont il dépend, des
          formulaires ou de la sécurité. Demandez une liste contractuelle plutôt
          qu&apos;un pourcentage automatique du prix de création.
        </p>

        <h2 id="trois-ans">7. Comparer le coût sur trois ans</h2>
        <p>
          Trois ans permettent de mettre sur la même ligne un achat initial et
          un abonnement. Additionnez uniquement des montants contractuels ou des
          hypothèses clairement signalées.
        </p>
        <GuideTable
          headers={["Au départ", "Chaque année", "Selon les événements"]}
          rows={[
            [
              "Conception, contenus, réalisation et migration",
              "Domaine, hébergement, licences, maintenance et assistance",
              "Évolutions, incident important ou changement de prestataire",
            ],
            [
              "Temps de votre équipe pour fournir et valider",
              "Temps de publication et de suivi",
              "Nouvelle langue, nouvelle offre ou croissance du catalogue",
            ],
          ]}
        />
        <p>
          Une ligne inconnue ne vaut pas zéro. Demandez le tarif actuel, la
          règle d&apos;augmentation, la durée d&apos;engagement et ce que vous
          récupérez en partant. N&apos;ajoutez pas un chiffre d&apos;affaires
          espéré au calcul : le site peut soutenir les ventes, mais aucune
          technologie ne garantit des clients.
        </p>
        <InfoBox variant="emerald" title="La bonne comparaison">
          Comparez le coût de la même fonction sur la même durée. Un outil en
          ligne peut être moins cher et parfaitement adapté à un site simple.
          Une construction spécifique peut devenir pertinente si elle évite un
          travail manuel, une limite commerciale ou des abonnements réellement
          coûteux. La décision dépend de vos chiffres.
        </InfoBox>

        <h2 id="projets-complexes">
          8. Boutique, refonte, outil métier et SaaS
        </h2>
        <p>
          Les projets complexes ne se chiffrent pas seulement au nombre
          d&apos;écrans. Le catalogue, les utilisateurs, les données et les
          règles de travail font varier les tests et l&apos;entretien.
        </p>
        <GuideTable
          headers={["Projet", "Question qui change le prix", "Guide détaillé"]}
          rows={[
            [
              "E-commerce",
              "Quels produits, paiements, livraisons, retours et tarifs clients ?",
              "Prix d'un site e-commerce",
            ],
            [
              "Refonte",
              "Quelles pages, données et positions Google faut-il protéger ?",
              "Prix d'une refonte de site",
            ],
            [
              "Outil interne",
              "Quels utilisateurs, droits, étapes et logiciels faut-il relier ?",
              "Prix d'un logiciel sur mesure",
            ],
            [
              "Logiciel vendu en ligne par abonnement (SaaS)",
              "Comment gérer comptes, abonnements, sécurité et assistance ?",
              "Combien coûte un SaaS",
            ],
          ]}
        />
        <p>
          Consultez les guides dédiés au{" "}
          <Link href="/guides/prix-site-e-commerce">
            prix d&apos;un e-commerce
          </Link>
          , à la{" "}
          <Link href="/guides/prix-refonte-site-internet">
            refonte d&apos;un site
          </Link>
          , au{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            logiciel sur mesure
          </Link>{" "}
          et au <Link href="/guides/combien-coute-un-saas">SaaS</Link>. Vous
          éviterez de comparer une boutique standard à une plateforme métier.
        </p>

        <h2 id="delai-droits-aides">9. Délais, droits et aides éventuelles</h2>
        <p>
          Le calendrier dépend des contenus, des validations, des données et des
          connexions. Les repères courants vont de quelques semaines pour un
          petit site à plusieurs mois pour une boutique ou une application.
          Demandez un planning qui montre les dates du prestataire et les
          réponses attendues de votre équipe.
        </p>
        <p>
          Le contrat doit préciser les droits transmis sur le code, le design et
          les contenus. Le nom de domaine, l&apos;hébergement, les outils de
          mesure et les comptes importants doivent être ouverts ou transférés au
          nom de l&apos;entreprise. Prévoyez aussi la remise du code, des
          données et des accès si vous changez de prestataire.
        </p>
        <p>
          Des prêts, accompagnements ou aides territoriales peuvent exister.
          Leur disponibilité, les dépenses acceptées et la date à laquelle vous
          pouvez signer changent. Vérifiez la fiche officielle sur France Num et
          obtenez une confirmation avant d&apos;engager une dépense. Pour la TVA
          et le traitement comptable, demandez à votre expert-comptable : le nom
          commercial d&apos;un poste ne suffit pas à déterminer son traitement.
        </p>

        <h2 id="budget">10. Préparer un budget et demander des devis</h2>
        <ol>
          <li>
            Écrivez le rôle du site et l&apos;action principale attendue des
            visiteurs.
          </li>
          <li>
            Listez les pages, fonctions, contenus disponibles et outils à
            connecter.
          </li>
          <li>
            Décidez ce que votre équipe peut fournir et le temps qu&apos;elle
            peut consacrer au projet.
          </li>
          <li>Préparez une fourchette de départ et un budget annuel.</li>
          <li>
            Envoyez exactement la même demande et faites compléter les
            exclusions.
          </li>
          <li>
            Comparez la solution simple, le coût sur trois ans et les conditions
            de reprise.
          </li>
        </ol>

        <GuideInlineCTA
          title="Vous voulez un ordre de grandeur adapté à votre entreprise ?"
          description="Préparez l'objectif du site, les pages indispensables, les fonctions, les contenus déjà disponibles, le budget et la date souhaitée. Nous vous indiquerons les questions manquantes et si une solution plus simple peut suffire avant d'établir un devis."
        />
        <p>
          Le{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            kit gratuit de cahier des charges
          </Link>{" "}
          vous aide à envoyer une demande comparable. Consultez ensuite notre{" "}
          <Link href="/guides/choisir-son-agence-web">
            guide pour choisir une agence
          </Link>{" "}
          ou nos <Link href="/tarifs">tarifs publiés</Link>. Les prix Hagnéré
          Code n&apos;engagent que les offres décrites sur cette page et le
          devis établi pour votre projet.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références consultées en juillet 2026 :{" "}
          <a
            href="https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs"
            target="_blank"
            rel="noopener noreferrer"
          >
            La Fabrique du Net
          </a>{" "}
          (médiane de son échantillon de 1 312 budgets et 175 agences) ;{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num, coût d’un site et dépenses additionnelles
          </a>{" "}
          ;{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num
          </a>{" "}
          (aides financières) ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069414/LEGISCTA000006133323/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code de la propriété intellectuelle
          </a>{" "}
          (art. L111-1 et L131-3) .
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes principales sont des scénarios éditoriaux Hagnéré
            Code destinés à préparer une consultation, pas des moyennes de
            marché. La médiane de La Fabrique du Net est présentée séparément
            avec la taille de son échantillon. Seuls nos forfaits publiés et un
            devis accepté engagent Hagnéré Code. Ce guide ne constitue ni un
            conseil juridique ni un conseil comptable personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
