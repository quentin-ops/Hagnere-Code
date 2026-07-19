import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";
import { SITE_CDC_KIT } from "@/lib/resources";

const guide = getGuide("cahier-des-charges-site-internet");

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
      "Cadrage de projets web",
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
      name: "Cahier des charges site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu'est-ce qu'un cahier des charges de site internet ?",
    answer:
      "C'est un document de cadrage qui décrit le besoin, le périmètre, les exclusions, les responsabilités, les preuves attendues, le budget et le calendrier. Il sert de langage commun avec les prestataires. Sa portée contractuelle dépend ensuite de son intégration au contrat et de l'ordre de priorité des documents.",
  },
  {
    question: "Pourquoi faire un cahier des charges pour son site web ?",
    answer:
      "Il oblige les candidats à répondre sur les mêmes hypothèses, rend les exclusions visibles et prépare la recette avant le développement. Il ne supprime ni les imprévus ni les désaccords, mais il permet de comparer plus justement les offres et de repérer ce qui reste à arbitrer avant de signer.",
  },
  {
    question: "Comment rédiger un cahier des charges pour un site internet ?",
    answer:
      "Commencez par une synthèse d'une page, puis détaillez publics, pages, contenus, fonctionnalités, outils existants, données, sécurité, exploitation, budget et recette. Pour chaque exigence, précisez le besoin, les cas limites, la preuve attendue et qui décide. Le modèle Word gratuit associé à ce guide organise ces décisions en 18 rubriques guidées.",
  },
  {
    question: "Que mettre dans un cahier des charges de site web ?",
    answer:
      "Au minimum : le problème métier, les utilisateurs, le périmètre indispensable, le hors-périmètre, les pages et contenus, les outils à connecter, les responsabilités, les coûts récurrents, le calendrier, les critères de recette et les conditions de remise des comptes et des données. Les inconnues doivent être marquées « à confirmer », pas inventées.",
  },
  {
    question: "Combien de pages doit faire un cahier des charges ?",
    answer:
      "Il n'existe pas de longueur universelle. Un site vitrine simple peut être cadré avec une synthèse et quelques tableaux ; une refonte, un e-commerce ou des intégrations exigent davantage de détail. Le bon test est pratique : deux candidats doivent comprendre le même périmètre, les mêmes exclusions et les mêmes preuves de livraison.",
  },
  {
    question:
      "Qui doit rédiger le cahier des charges : le client ou l'agence ?",
    answer:
      "Le client porte le besoin métier, les priorités, les contraintes et le budget. Le prestataire doit reformuler, signaler les inconnues, proposer une solution et expliciter ses hypothèses, exclusions et coûts. Le périmètre final se construit donc à deux, sans demander au dirigeant de choisir seul une architecture technique.",
  },
  {
    question: "Faut-il indiquer son budget dans le cahier des charges ?",
    answer:
      "Une fourchette aide généralement les candidats à proposer une solution réaliste. Séparez l'investissement initial, la réserve interne, les options et les coûts récurrents. Demandez en retour un découpage identique et un coût estimatif sur plusieurs années afin de ne pas comparer seulement le prix de lancement.",
  },
  {
    question:
      "Existe-t-il un modèle de cahier des charges gratuit (Word, PDF) ?",
    answer:
      "Oui. Le kit associé à ce guide se télécharge directement, sans formulaire ni email : modèle Word éditable, exemple fictif entièrement rempli en PDF, grille de recette Excel de 56 tests et mode d'emploi PDF. Chaque fichier est aussi disponible séparément. La licence autorise l'utilisation et la modification pour vos propres projets et le partage avec les prestataires consultés.",
  },
  {
    question:
      "Quelle différence entre un brief, une expression de besoin et un cahier des charges ?",
    answer:
      "Ces termes sont utilisés de façon variable. En pratique, l'expression de besoin expose surtout le problème et les objectifs ; le brief ajoute le contexte et les contraintes ; le cahier des charges formalise un périmètre et une réponse attendue plus détaillés. Le nom importe moins que la clarté des décisions et la façon dont le document est repris dans le contrat.",
  },
  {
    question: "Comment faire le cahier des charges d'une refonte de site ?",
    answer:
      "Ajoutez l'inventaire des URL, les contenus et performances utiles, la décision conserver-fusionner-supprimer, le plan ancienne URL vers nouvelle URL, les redirections serveur, la préproduction non indexable et les contrôles après bascule. Une refonte mal préparée peut faire perdre des signaux SEO et casser des liens, sans qu'aucun classement ne puisse être garanti.",
  },
  {
    question: "Un cahier des charges a-t-il une valeur juridique ?",
    answer:
      "Sa portée dépend de l'ensemble contractuel : version retenue, signature, devis, annexes, clauses et ordre de priorité des documents. Faites identifier clairement la version applicable, les écarts acceptés et la procédure de modification. Pour un enjeu important ou une clause sensible, demandez un conseil juridique adapté.",
  },
  {
    question:
      "Un cahier des charges est-il nécessaire pour un petit site vitrine ?",
    answer:
      "Un document long n'est pas nécessaire, mais un cadrage court reste utile. Complétez la synthèse, les pages, les contenus, le formulaire, le hors-périmètre, le budget, les responsabilités et la recette ; supprimez les modules qui ne vous concernent pas. Le modèle téléchargeable est conçu pour ce parcours progressif.",
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
          { label: "Cahier des charges site internet" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Une méthode complète pour transformer un besoin métier en périmètre comparable : 10 questions de départ, 18 rubriques expliquées, budget, responsabilités, recette et erreurs à éviter."
        heroAction={{
          href: "#reponse-rapide",
          label: "Voir les 10 questions clés",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "10 questions de départ",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "18 rubriques expliquées",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "7 erreurs à éviter",
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
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          {
            href: "/guides/combien-coute-une-application-mobile",
            label: "Prix d'une application mobile",
          },
          {
            href: "/services/sites-vitrines",
            label: "Création de site vitrine",
          },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Cahier des charges : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Un cahier des charges utile ne cherche pas à prévoir chaque détail :
          il permet à deux prestataires de comprendre le même besoin, les mêmes
          exclusions et les mêmes preuves de livraison. Ce guide explique la
          méthode, les rubriques et les arbitrages. Le kit pratique associé
          rassemble ensuite le modèle Word, l&apos;exemple rempli, la grille Excel
          et le mode d&apos;emploi dans une page de téléchargement dédiée.
        </p>

        <InfoBox variant="blue" title="Vous cherchez directement le modèle ?">
          Examinez les quatre fichiers, leur contenu, leur compatibilité et leurs
          limites sur la{" "}
          <Link href={SITE_CDC_KIT.path}>
            page du kit cahier des charges gratuit
          </Link>
          . Le téléchargement y reste direct, sans formulaire ni email.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. La réponse rapide : les 10 questions à traiter",
            },
            {
              id: "a-quoi-sert",
              label: "2. À quoi sert vraiment un cahier des charges",
            },
            {
              id: "brief-ou-cdc",
              label:
                "3. Brief, expression de besoin ou CDC : lequel vous faut-il ?",
            },
            {
              id: "le-modele",
              label: "4. Le modèle complet, section par section",
            },
            {
              id: "exemple-rempli",
              label: "5. L'exemple rempli : une PME B2B fictive",
            },
            {
              id: "erreurs",
              label: "6. Les 7 défauts qui affaiblissent le cadrage",
            },
            { id: "budget", label: "7. Faut-il indiquer son budget ?" },
            { id: "qui-redige", label: "8. Qui rédige, combien ça coûte" },
            {
              id: "declinaisons",
              label: "9. E-commerce, refonte, SaaS : ce qui change",
            },
            {
              id: "valeur-juridique",
              label: "10. La valeur juridique de votre CDC",
            },
            {
              id: "cas-particuliers",
              label: "11. Mairies, associations, marchés publics",
            },
            {
              id: "methode",
              label: "12. Méthode : rédiger votre CDC en 5 étapes",
            },
            {
              id: "du-cdc-au-devis",
              label: "13. Du cahier des charges au devis ferme",
            },
          ]}
        />

        <h2 id="reponse-rapide">
          1. La réponse rapide : les 10 questions à traiter
        </h2>
        <p>
          Pour cadrer un site sans noyer le lecteur, commencez par{" "}
          <strong>
            10 grandes questions : présentation de l&apos;entreprise, objectifs
            chiffrés, cibles, périmètre fonctionnel priorisé, arborescence et
            contenus, design, exigences techniques, SEO, intégrations avec
            l&apos;existant, budget et gouvernance
          </strong>
          . Deux mots à traduire d&apos;emblée : l&apos;arborescence est la
          liste organisée des pages du site, comme le sommaire d&apos;un livre ;
          le SEO est le référencement naturel — apparaître, ou non, dans Google
          quand un client tape une recherche (une « requête »). Il n&apos;existe
          pas de longueur idéale : la bonne version est celle qui permet à deux
          candidats de comprendre le même périmètre, les mêmes exclusions et les
          mêmes preuves de livraison.
        </p>
        <GuideTable
          headers={[
            "Question",
            "Ce qu'elle permet de décider",
            "Point à rendre explicite",
          ]}
          rows={[
            [
              "1. Entreprise & contexte",
              "Qui êtes-vous, pourquoi ce projet ?",
              "Le déclencheur, l'existant utile et les contraintes",
            ],
            [
              "2. Objectifs",
              "Comment piloterez-vous le résultat ?",
              "Point de départ, cible, horizon et source",
            ],
            [
              "3. Publics",
              "Qui doit réussir quel parcours ?",
              "Besoins, obstacles, preuves et actions",
            ],
            [
              "4. Périmètre fonctionnel",
              "Que doit faire la V1, par priorité ?",
              "Indispensables, options, plus tard et exclusions",
            ],
            [
              "5. Arborescence & contenus",
              "Quelles pages, qui produit quoi ?",
              "Objectif, responsable, traitement et date",
            ],
            [
              "6. Design",
              "Quelle expérience et quels états concevoir ?",
              "Références commentées, appareils et accessibilité",
            ],
            [
              "7. Technique",
              "Quelles contraintes et preuves demander ?",
              "Performance, sécurité, données et exploitation",
            ],
            [
              "8. SEO",
              "Quelles intentions et quelle migration prévoir ?",
              "Inventaire, décisions URL, redirections et suivi",
            ],
            [
              "9. Intégrations & existant",
              "Quels outils doivent échanger ?",
              "Documentation, données, erreurs, coûts et secours",
            ],
            [
              "10. Budget & gouvernance",
              "Combien, quand et qui décide ?",
              "Découpage des coûts, jalons, rôles et changements",
            ],
          ]}
        />
        <InfoBox
          variant="blue"
          title="Lexique express : les mots que vous croiserez dans les devis"
        >
          <strong>CRM</strong> : le logiciel où vivent vos contacts et devis
          (Sellsy, HubSpot…). <strong>ERP</strong> : le logiciel de gestion —
          facturation, stocks (Sage, EBP, Odoo…). <strong>RGPD</strong> : le
          règlement européen sur les données personnelles. <strong>API</strong>{" "}
          : la « prise » qui permet à deux logiciels d&apos;échanger des
          données. <strong>Hébergement</strong> : le service qui met le site et
          ses données à disposition sur des serveurs connectés à Internet.{" "}
          <strong>Nom de domaine</strong> : l&apos;adresse du site
          (votresociete.fr). <strong>Back-office</strong> : la partie cachée où
          l&apos;on gère les contenus. <strong>Avenant</strong> : une
          modification du contrat acceptée en cours de projet, qui peut changer
          le prix, le délai ou le périmètre. <strong>Redirection 301</strong> :
          le renvoi automatique d&apos;une ancienne adresse de page vers la
          nouvelle. <strong>V1 / V2</strong> : la première version mise en ligne
          / la version enrichie qui suit. <strong>AMOA</strong> (assistance à
          maîtrise d&apos;ouvrage) : la fonction, interne ou externe, qui aide
          le porteur du projet à formaliser son besoin et à piloter les
          prestataires. <strong>ROI</strong> : le retour sur investissement.{" "}
          <strong>Prototype cliquable</strong> : une maquette interactive du
          futur site.
        </InfoBox>

        <h2 id="a-quoi-sert">2. À quoi sert vraiment un cahier des charges</h2>
        <p>
          Avant d&apos;entrer dans le document lui-même, un mot sur son premier
          usage : consulter des prestataires. Envoyer le même socle de besoins à
          chaque candidat réduit les écarts d&apos;interprétation et rend les
          offres plus comparables — sans garantir qu&apos;elles proposeront
          toutes la même solution. Le choix entre ces profils (prix, risques,
          garanties) fait l&apos;objet de notre{" "}
          <Link href="/guides/agence-web-ou-freelance">
            comparatif agence web ou freelance
          </Link>
          , pensé pour être utilisé avec ce modèle.
        </p>
        <p>
          Faire construire un site sans cahier des charges, c&apos;est faire
          construire une maison sans plan. Décrivez oralement « une belle maison
          lumineuse » à trois constructeurs : vous recevrez trois devis
          incomparables — plain-pied, étage, véranda. Chaque détail non prévu
          devra être arbitré plus tard, avec un effet possible sur le prix et le
          planning. Le CDC joue le rôle du plan — trois fonctions très
          concrètes.
        </p>
        <p>
          <strong>1. Rendre les devis comparables.</strong> Sans cadrage écrit,
          deux candidats peuvent chiffrer des périmètres très différents sous le
          même mot « site ». Le CDC leur donne une base commune et leur demande
          d&apos;expliciter les écarts, hypothèses et options.
        </p>
        <p>
          <strong>2. Limiter les avenants</strong> — ces suppléments au contrat
          décidés en cours de projet. Un périmètre, des exclusions et une
          procédure de changement bien écrits permettent de mesurer
          l&apos;impact avant de décider, au lieu de découvrir la discussion
          après le développement.
        </p>
        <p>
          <strong>3. Préparer un référentiel contractuel et de recette.</strong>{" "}
          Le document peut contribuer à définir ce qui est attendu si la version
          retenue, son articulation avec le devis et la procédure de
          modification sont clairement prévues dans l&apos;ensemble contractuel.
          Sa simple existence ne remplace ni un contrat cohérent, ni des
          critères de réception observables, ni un conseil juridique lorsque
          l&apos;enjeu le justifie.
        </p>

        <h2 id="brief-ou-cdc">
          3. Brief, expression de besoin ou CDC : lequel vous faut-il ?
        </h2>
        <GuideTable
          headers={[
            "Document",
            "Question centrale",
            "Niveau de détail",
            "Usage courant",
          ]}
          rows={[
            [
              "Expression de besoin",
              "Quel problème résoudre, pour qui et pourquoi maintenant ?",
              "Court, centré sur le contexte et les objectifs",
              "Premier cadrage, recherche de pistes ou de budget",
            ],
            [
              "Brief",
              "Quel résultat et quelles contraintes guideront la réponse ?",
              "Contexte, publics, livrables, ton, calendrier",
              "Consultation créative ou fonctionnelle encore ouverte",
            ],
            [
              "Cahier des charges",
              "Quel périmètre comparer, livrer et vérifier ?",
              "Exigences, exclusions, responsabilités et preuves",
              "Consultation structurée ; annexe contractuelle si les parties le décident",
            ],
          ]}
        />
        <p>
          Notre conseil honnête d&apos;agence : pour un site vitrine standard,{" "}
          <strong>une expression de besoin structurée peut suffire</strong> —
          traitez les 10 grandes questions de ce guide en version courte, puis
          gardez seulement les rubriques Word utiles. Un CDC de 40 pages
          sur-spécifié peut même desservir le projet : il fige des solutions
          techniques avant d&apos;avoir entendu les experts. Décrivez le
          problème à traverser, pas les matériaux du pont.
        </p>
        <p>
          Une distinction aide à ne pas choisir une solution trop tôt : vous
          décrivez d&apos;abord le besoin <strong>fonctionnel</strong> — le «
          quoi », les utilisateurs, les règles et les résultats attendus. Le
          candidat explique ensuite le <strong>comment</strong> : approche,
          architecture, outils, hypothèses et compromis. Le dialogue peut faire
          évoluer les deux, à condition que la version finalement chiffrée soit
          identifiable.
        </p>
        <p>
          Une démarche agile ne supprime pas le cadrage ; elle déplace le bon
          niveau de détail. Objectifs, contraintes, budget, rôles et critères de
          décision restent explicites, tandis que les fonctionnalités peuvent
          être approfondies par lots. Écrivez ce qui doit rester stable et
          prévoyez comment prioriser, valider et chiffrer ce qui évoluera.
        </p>

        <h2 id="le-modele">4. Le modèle complet, section par section</h2>
        <p>
          Le guide regroupe le sujet en dix grandes questions pour rester
          lisible. Le document Word téléchargeable les transforme en dix-huit
          rubriques opérationnelles : synthèse, périmètre, données, sécurité,
          recette, exploitation, droits et format de réponse. Gardez les modules
          utiles à votre projet et supprimez les autres ; une réponse honnête «
          à confirmer » vaut mieux qu&apos;une précision inventée.
        </p>
        <GuideTable
          headers={[
            "Décision dans le guide",
            "Rubriques du Word",
            "Contrôles Excel associés",
          ]}
          rows={[
            [
              "Contexte, objectifs et publics (questions 1 à 3)",
              "2 à 5 — synthèse, entreprise, objectifs, parcours",
              "Mesure, autonomie et parcours critiques",
            ],
            [
              "Pages, fonctionnalités et design (questions 4 à 6)",
              "6, 7 et 9 — périmètre, cas limites, expérience",
              "Contenus, navigation, formulaires, responsive et accessibilité",
            ],
            [
              "Technique, données et intégrations (questions 7 et 9)",
              "8, 11, 12 et 13 — outils, données, sécurité, réponse technique",
              "Intégrations, RGPD, sécurité et performance",
            ],
            [
              "SEO et refonte (question 8)",
              "10 — référencement, mesure et migration",
              "Inventaire, redirections, indexation et suivi",
            ],
            [
              "Budget, livraison et sortie (question 10)",
              "1 et 14 à 18 — contrôle, calendrier, recette, droits, offre, annexes",
              "Acceptation, exploitation, comptes, preuves et décisions",
            ],
          ]}
        />
        <InfoBox variant="blue" title="Le fil rouge entre le Word et l'Excel">
          Dans l&apos;exemple, l&apos;exigence F-01 demande qu&apos;un
          formulaire valide confirme l&apos;envoi et transmette une seule
          demande. Le test FRM-01 de la grille exécute ce scénario, indique
          l&apos;environnement, conserve la preuve et permet de tracer
          correction, nouveau test et décision. Une exigence importante sans
          test associé reste trop ouverte à l&apos;interprétation.
        </InfoBox>

        <h3>Question 1 — L&apos;entreprise et le contexte</h3>
        <p>
          En une page : votre activité, votre marché, ce qui vous différencie,
          et surtout <strong>pourquoi ce projet maintenant</strong> (site
          vieillissant, lancement d&apos;offre, concurrence qui décolle sur
          Google…). Le déclencheur en dit plus que dix pages de présentation.
        </p>

        <h3>Question 2 — Les objectifs, chiffrés</h3>
        <p>
          La section la plus importante et la plus bâclée. Bannissez «
          moderniser notre image » ; écrivez des objectifs mesurables, comme le
          recommande France Num (le programme gouvernemental
          d&apos;accompagnement numérique des TPE-PME) : « passer de 12 à 30
          demandes de devis par mois », « générer 50 ventes en ligne mensuelles
          », « réduire de 20 % les appels à faible valeur ». Deux ou trois
          maximum — ce sont eux qui arbitreront tous les choix. Précisez
          l&apos;outil qui mesurera chaque objectif, installé avant la mise en
          ligne — sinon vous perdez vos données de référence.
        </p>

        <InfoBox variant="blue" title="Le test d'un objectif exploitable">
          Un candidat doit pouvoir répondre à quatre questions sans deviner :
          quelle valeur de départ mesurez-vous, quelle cible visez-vous, à
          quelle date et avec quel outil ? Si la valeur de départ manque,
          prévoyez d&apos;abord une période de mesure. Un objectif métier guide
          le projet ; ce n&apos;est pas une garantie de résultat imposable au
          prestataire sans préciser ses leviers et dépendances.
        </InfoBox>

        <h3>Question 3 — Les publics</h3>
        <p>
          Qui doit être convaincu ? Deux ou trois profils suffisent (« dirigeant
          de PME qui compare trois prestataires », « particulier qui cherche un
          artisan en urgence »), avec pour chacun : ce qu&apos;il cherche, ce
          qui le rassure, sur quel appareil il vous lira. « Tout le monde »
          n&apos;est pas une cible.
        </p>

        <h3>Question 4 — Le périmètre fonctionnel, priorisé</h3>
        <p>
          Classez chaque fonctionnalité :{" "}
          <strong>indispensable au lancement</strong>, importante, version
          ultérieure ou exclue. Ce tri oblige à distinguer le produit nécessaire
          de la liste d&apos;envies et donne une règle d&apos;arbitrage si le
          budget ou le délai se tend. Décrivez des comportements, pas des
          solutions : « le visiteur peut réserver un créneau de 30 minutes en
          ligne », pas « intégrer Calendly ». Le format « user story » aide — «
          en tant que [profil], je veux [action] afin de [bénéfice] ». Pour
          trancher entre les colonnes, le test de la valise cabine : vous partez
          trois jours avec un seul bagage — la brosse à dents est indispensable,
          le deuxième pull souhaitable. Le site serait-il inutilisable sans
          cette fonctionnalité, ou simplement moins complet ? Selon
          l&apos;objectif, le formulaire de contact peut être indispensable et
          le chat en direct reporté. Une priorité doit toujours être justifiée
          par un utilisateur et un résultat, pas par l&apos;attrait de la
          fonctionnalité.
        </p>

        <h3>Question 5 — L&apos;arborescence et les contenus</h3>
        <p>
          La liste des pages envisagées, et pour chacune :{" "}
          <strong>qui fournit le contenu, sous quel délai</strong>. Écrivez « la
          rédaction est incluse » ou « nous fournissons les textes avant le
          [date] ». Sans propriétaire ni date, un contenu devient une dépendance
          invisible du planning. L&apos;arborescence se comprend mieux dessinée
          qu&apos;expliquée — voici une version simplifiée cohérente avec la PME
          B2B fictive du chapitre 5 :
        </p>
        <FormulaBox>
          {`Accueil
├─ Offres
│  └─ 6 pages services
├─ Secteurs
│  └─ 3 pages par contexte métier
├─ Références
├─ Ressources
└─ Contact
(+ mentions légales, politique de confidentialité)`}
        </FormulaBox>
        <p>
          Chaque groupe répond à une intention : comprendre une offre, vérifier
          l&apos;expérience, approfondir un sujet ou contacter
          l&apos;entreprise. L&apos;arborescence n&apos;est donc pas seulement
          un rangement ; elle relie les besoins des visiteurs aux objectifs du
          projet.
        </p>

        <h3>Question 6 — Le design et les références</h3>
        <p>
          Trois liens de sites que vous aimez (et pourquoi), un ou deux que vous
          détestez (et pourquoi), votre charte si elle existe. Ces quatre ou
          cinq liens disent plus que « moderne, épuré, professionnel », des
          qualificatifs trop ouverts à l&apos;interprétation. Ajoutez une courte
          analyse de concurrents ou d&apos;alternatives : ce qui vous paraît
          clair, ce qui crée de la confiance, ce qui manque et sur quelles
          recherches ils sont visibles. Le but n&apos;est pas de copier, mais
          d&apos;expliquer le niveau attendu et la différence à rendre
          perceptible.
        </p>

        <h3>Question 7 — Les exigences techniques</h3>
        <p>
          Remplacez les promesses globales (« rapide », « conforme », « sécurisé
          ») par un périmètre, un protocole, une preuve et un responsable :
        </p>
        <ul>
          <li>
            <strong>Performance</strong> — distinguez le test en laboratoire
            avant lancement du suivi terrain après lancement. Les{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/core-web-vitals"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Repères Core Web Vitals publiés par Google (nouvel onglet)"
            >
              repères Core Web Vitals publiés par Google
            </a>{" "}
            sont LCP ≤ 2,5 s, INP ≤ 200 ms et CLS ≤ 0,1 au 75e percentile — le
            seuil atteint sur au moins 75 % des visites mesurées. À la recette,
            définissez pages, appareil, réseau, cache et nombre de passes ; les
            données terrain ne sont disponibles que lorsque le trafic réel
            devient suffisant.
          </li>
          <li>
            <strong>Données personnelles et traceurs</strong> — listez les
            données, finalités, destinataires, durées, sous-traitants et
            transferts éventuels. Précisez qui valide les mentions et la
            configuration. Selon les règles rappelées par la{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Règles de la CNIL sur les cookies et traceurs (nouvel onglet)"
            >
              CNIL
            </a>
            , les traceurs qui ne bénéficient pas d&apos;une exemption doivent
            attendre le consentement ; la présence ou non d&apos;un bandeau ne
            se décide donc pas par une formule universelle.
          </li>
          <li>
            <strong>Accessibilité</strong> — le{" "}
            <a
              href="https://accessibilite.numerique.gouv.fr/obligations/champ-application/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Champ d'application du RGAA (nouvel onglet)"
            >
              champ d&apos;application du RGAA
            </a>{" "}
            dépend de l&apos;organisme et du service concerné. Faites-le
            vérifier, puis écrivez la cible de qualité et les preuves attendues
            : clavier, focus, zoom, contrastes, titres, labels, messages
            d&apos;erreur et lecteur d&apos;écran sur les parcours clés. Une
            revendication de conformité nécessite un audit adapté, pas seulement
            un scanner automatique.
          </li>
          <li>
            <strong>Appareils et réorganisation du contenu</strong> — nommez les
            parcours à tester et un échantillon de largeurs, navigateurs, zooms
            et appareils. « Responsive : oui » ne dit rien sur un formulaire, un
            tableau, un menu ou un message d&apos;erreur réellement utilisables
            à 320 px.
          </li>
          <li>
            <strong>Sécurité et exploitation</strong> — comptes nominatifs,
            rôles, authentification multifacteur (MFA) lorsque disponible,
            secrets transmis séparément, sauvegardes, test de restauration,
            mises à jour et procédure d&apos;incident. Demandez ce qui est
            inclus, qui intervient et dans quel délai ; n&apos;exigez jamais «
            100 % sécurisé ».
          </li>
        </ul>

        <h3>Question 8 — Le SEO, dès la conception</h3>
        <p>
          Même sans ambition Google immédiate, exigez les fondations du
          référencement : des adresses de pages lisibles
          (votresite.fr/expertise-paie plutôt qu&apos;une suite de chiffres),
          des titres hiérarchisés, des images légères, la possibilité de
          rediriger une ancienne page sans casser les liens. Rien de tout cela
          ne se voit à l&apos;œil nu — raison de plus pour l&apos;écrire. Si
          l&apos;acquisition Google est un objectif, listez les thèmes et
          intentions de recherche visés. Une page doit répondre à un besoin
          distinct ; créer mécaniquement une page par mot-clé produit souvent
          des doublons peu utiles. Le SEO dépend en partie de la structure, des
          contenus, du maillage et de la migration : les décisions qui les
          affectent gagnent donc à être prises avant le développement.
          C&apos;est la part de notre{" "}
          <Link href="/services/referencement-google">
            travail de référencement
          </Link>{" "}
          qui se joue avant la première ligne de code.
        </p>

        <h3>Question 9 — Les intégrations et l&apos;existant</h3>
        <p>
          Listez vos outils : le CRM où vivent vos contacts et devis, l&apos;ERP
          qui gère facturation et stocks, l&apos;agenda de rendez-vous,
          l&apos;outil d&apos;emailing. Le site doit-il communiquer avec eux ?
          Pour chaque connexion, indiquez les données, le sens de circulation,
          la documentation disponible, le volume, les cas d&apos;erreur et une
          solution de secours. Clientèle étrangère ? Cadrez aussi le multilingue
          : langues, pages, traduction, validation et maintenance. Ces choix
          peuvent modifier l&apos;architecture et doivent être étudiés avant un
          prix ferme.
        </p>

        <InfoBox variant="amber" title="Le scénario à rendre visible">
          Le formulaire doit créer une fiche dans un CRM interne, mais son API —
          la « prise » entre les logiciels — n&apos;est pas encore documentée.
          N&apos;inventez pas la faisabilité : demandez une étude préalable,
          précisez qui fournit les accès de test et prévoyez un email structuré
          avec saisie manuelle en secours. Écrivez aussi les non-demandes («
          aucune intégration en V1 ») afin que les candidats n&apos;incluent pas
          des hypothèses différentes.
        </InfoBox>

        <h3>Question 10 — Budget, délais et gouvernance</h3>
        <p>
          Votre fourchette budgétaire (voir plus bas le chapitre 7 : « Faut-il
          indiquer son budget ? »), votre échéance et son motif (salon, saison),
          et la gouvernance : un interlocuteur unique côté client, un délai
          maximal de validation par livrable, un nombre de cycles de corrections
          inclus. Séparez le budget de construction, une réserve interne adaptée
          aux inconnues, les options, les coûts récurrents et le coût de sortie.
          La réserve ne doit pas être consommée automatiquement : chaque usage
          reste une décision.
        </p>

        <h3>Combien de temps prévoir : les 5 phases et le rétroplanning</h3>
        <p>
          Un projet de site comporte généralement cinq phases : cadrage,
          maquettes (avec les allers-retours), développement, recette (vos tests
          et corrections), mise en ligne. Demandez à chaque candidat de dater
          ses hypothèses : disponibilité des contenus, délai de vos validations,
          dépendances tierces et charge de recette. Construisez ensuite le
          rétroplanning depuis votre échéance réelle — salon, saison ou période
          fiscale — avec des jalons, des responsables et une marge explicite.
          Une date isolée ne montre pas ce qui peut la déplacer. Les délais par
          type de site, les rétro-plannings Noël/salon et la part du calendrier
          qui dépend de vous sont chiffrés dans notre{" "}
          <Link href="/guides/combien-de-temps-pour-creer-un-site">
            guide des délais de création d&apos;un site
          </Link>
          .
        </p>

        <h3>
          Et après la mise en ligne ? Domaine, hébergement, maintenance,
          propriété
        </h3>
        <p>
          Quatre décisions doivent être écrites avant la livraison. Le{" "}
          <strong>nom de domaine</strong> : titulaire, compte de gestion et
          procédure de transfert. L&apos;<strong>hébergement</strong> : qui
          souscrit, qui paie, où se trouvent les données et comment les
          exporter. La <strong>maintenance</strong> : périmètre, délais,
          exclusions, mises à jour, garantie corrective et évolutions — notre{" "}
          <Link href="/services/maintenance-evolution">
            offre de maintenance et d&apos;évolution
          </Link>{" "}
          montre le niveau de détail attendu. Enfin, les{" "}
          <strong>droits et la réversibilité</strong> : distinguez code
          spécifique, composants tiers, textes, images, polices, comptes et
          données. La cession ou la licence adaptée se formalise au contrat ;
          exigez aussi un export testé et une documentation de reprise.
        </p>

        <h3>Utiliser le modèle Word sans le surcharger</h3>
        <p>
          Le <Link href={SITE_CDC_KIT.path}>modèle DOCX du kit</Link> est déjà
          mis en forme et réellement éditable. Commencez par le mini-diagnostic,
          complétez la synthèse, puis conservez seulement les modules utiles.
          Chaque rubrique sépare vos décisions, la réponse attendue du
          prestataire et le critère qui permet de considérer la section
          terminée. N&apos;insérez aucun mot de passe, clé API, fichier client
          brut ou autre secret dans le document partagé.
        </p>

        <h2 id="exemple-rempli">
          5. L&apos;exemple rempli : une PME B2B fictive
        </h2>
        <p>
          Un modèle vide ne montre ni le bon niveau de précision ni la façon
          d&apos;assumer une inconnue. Le PDF du kit présente donc une
          entreprise de services B2B de 12 salariés, entièrement inventée :
          activité, personnes, chiffres, URL, budget, calendrier et résultats.
          Il ne s&apos;agit ni d&apos;une référence client ni d&apos;une preuve
          de performance.
        </p>
        <FormulaBox>
          {`SYNTHÈSE DU CAS FICTIF (extraits)
Problème — L'équipe dépend du prestataire pour chaque
modification et les demandes sont peu qualifiées.

Résultat métier — Passer de 7 à 14 demandes qualifiées
par mois à M+9. Cible de pilotage, pas résultat garanti.

Indispensable — Pages d'offres, références, ressources,
formulaire qualifiant, migration et remise des accès.

Hors périmètre — Espace client, paiement, chatbot,
multilingue, application mobile et refonte de l'identité.

Inconnue — Faisabilité de la transmission au CRM à
confirmer avant chiffrage ; saisie manuelle prévue en secours.

Budget — 12 000 à 16 000 € HT pour la construction ;
coûts récurrents et coût de sortie détaillés séparément.

Recette — Préproduction protégée, données fictives,
preuves référencées, retest et décision explicite.`}
        </FormulaBox>
        <p>
          La valeur pédagogique vient autant des limites que des demandes : le
          cas sépare résultat métier et critère de livraison, assume une
          intégration encore inconnue, prévoit une solution de secours et rend
          les exclusions visibles. Le{" "}
          <Link href={`${SITE_CDC_KIT.path}#contenu-du-kit`}>
            PDF complet de l&apos;exemple fictif
          </Link>{" "}
          est présenté sur la page du kit et contient les dix-huit rubriques.
        </p>

        <h2 id="erreurs">6. Les 7 défauts qui affaiblissent le cadrage</h2>
        <p>
          Ces défauts rendent le chiffrage, la comparaison ou la recette plus
          incertains. Le kit prévoit un emplacement précis pour chacun.
        </p>
        <ol>
          <li>
            <strong>Décrire la solution au lieu du problème</strong> — «
            intégrer tel plugin » (un module tout fait qu&apos;on ajoute à un
            site), « un bouton de 42 pixels en #3B82F6 » (taille et code couleur
            imposés au millimètre). Décrivez d&apos;abord le besoin et les
            contraintes. Si une solution est imposée par l&apos;existant, la
            sécurité ou une décision déjà prise, expliquez pourquoi et demandez
            au candidat d&apos;en signaler les limites.
          </li>
          <li>
            <strong>Les adjectifs à la place des comportements</strong> — « site
            rapide, moderne, intuitif ». Décrivez plutôt une tâche, un résultat
            observable et son contexte de test : appareil, réseau, page, état
            d&apos;erreur et preuve attendue.
          </li>
          <li>
            <strong>Aucun objectif mesurable</strong> — sans O1/O2/O3 chiffrés,
            il manque un critère commun pour arbitrer et évaluer le retour sur
            investissement (le ROI : ce que le site rapporte comparé à ce
            qu&apos;il a coûté). C&apos;est ce qui distingue un projet
            d&apos;une dépense.
          </li>
          <li>
            <strong>L&apos;existant passé sous silence</strong> — CRM, ERP,
            agendas ou facturation découverts après le devis peuvent changer le
            périmètre, le délai et l&apos;architecture. Si la documentation ou
            l&apos;API reste inconnue, demandez une étude séparée et une
            solution manuelle de secours.
          </li>
          <li>
            <strong>Des contenus sans responsable</strong> — un texte ou une
            photo sans propriétaire ni date devient vite une dépendance
            bloquante. Pour chaque contenu : source, action, responsable,
            validation, droits et échéance.
          </li>
          <li>
            <strong>Aucun repère budgétaire</strong> — voir le chapitre suivant
            : les candidats peuvent alors proposer des niveaux de solution
            différents, ce qui rend la comparaison beaucoup moins utile.
          </li>
          <li>
            <strong>Une longue liste sans priorité</strong> — classez chaque
            besoin : indispensable au lancement, important, version ultérieure
            ou exclu. Demandez au prestataire de répondre ligne par ligne :
            inclus, partiel, optionnel, alternative proposée ou exclu.
          </li>
        </ol>

        <h2 id="budget">7. Faut-il indiquer son budget ?</h2>
        <p>
          Dans une consultation privée,{" "}
          <strong>une fourchette est souvent utile</strong> : elle permet aux
          candidats de proposer un niveau de solution compatible avec votre
          capacité d&apos;investissement. Sans repère, l&apos;un peut viser une
          version minimale et l&apos;autre inclure davantage de conseil, de
          contenu ou d&apos;exploitation ; les prix ne portent alors plus sur le
          même projet.
        </p>
        <p>
          Ne communiquez pas un chiffre nu. Distinguez{" "}
          <strong>
            construction, réserve interne, options, coûts récurrents et sortie
          </strong>
          , puis demandez aux candidats de répondre avec le même découpage. Vous
          verrez ainsi si l&apos;hébergement, les licences, la maintenance, la
          formation, les contenus et la restitution des données sont inclus.
        </p>
        <p>
          Reste la crainte du « devis gonflé pour consommer l&apos;enveloppe ».
          Réduisez ce risque en donnant une fourchette, en demandant une version
          recommandée et des options séparées, puis en comparant les hypothèses
          et le coût total — nos{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            guides de prix
          </Link>{" "}
          donnent des repères pour la calibrer. Pour une commande publique, ne
          transposez pas automatiquement cette méthode : les documents, règles
          de procédure et modalités d&apos;analyse doivent être validés par la
          personne compétente pour le marché concerné.
        </p>

        <h2 id="qui-redige">8. Qui rédige, combien ça coûte</h2>
        <p>
          Le bon partage : <strong>vous</strong> exprimez le besoin métier
          (personne ne peut le faire à votre place) ;{" "}
          <strong>le prestataire</strong> challenge, complète et traduit en
          spécifications. Trois options :
        </p>
        <GuideTable
          headers={["Option", "Coût", "Pour qui"]}
          rows={[
            [
              "Vous-même avec ce kit",
              "Gratuit ; temps variable selon les inconnues",
              "Vitrine simple ou première version à challenger",
            ],
            [
              "Consultant AMOA indépendant",
              "Sur devis selon le périmètre et la complexité",
              "Projet complexe ou besoin d'un tiers qui structure la consultation",
            ],
            [
              "Discovery Sprint Hagnéré Code",
              "1 500 € pour 2 jours ; déduit si la phase suivante démarre avec nous sous 90 jours",
              "Spécifications, prototype cliquable et devis au forfait",
            ],
          ]}
        />
        <p>
          Le temps dépend moins du nombre de pages que du nombre
          d&apos;inconnues : contenus, règles métier, migration, outils tiers,
          sécurité et validations. Préparez le socle avant la consultation, puis
          accordez aux candidats une période de questions identique et diffusez
          les réponses utiles à tous. Vous comparez ainsi des offres fondées sur
          la même information.
        </p>

        <p>
          Et l&apos;IA ? Excellent accélérateur de brouillon, très mauvais
          auteur final : elle ne peut pas inventer vos objectifs, vos clients,
          vos outils ni votre budget. Remplissez d&apos;abord vous-même les
          questions 2, 3, 9 et 10 de ce guide, puis demandez-lui quelles
          questions un prestataire poserait en lisant votre texte. L&apos;IA
          remplace la page blanche, pas la réflexion.
        </p>

        <h2 id="declinaisons">9. E-commerce, refonte, SaaS : ce qui change</h2>
        <h3>Pour un site e-commerce</h3>
        <p>
          Ajoutez : votre catalogue (combien de produits ? en combien de tailles
          ou couleurs ? avec quels filtres ?), le parcours d&apos;achat du
          panier au paiement, les moyens de paiement, la gestion des stocks et
          livraisons, vos indicateurs de réussite (panier moyen, pourcentage de
          visiteurs qui achètent) et les logiciels de logistique et comptabilité
          à connecter. Les repères de prix sont dans notre guide du{" "}
          <Link href="/guides/prix-site-e-commerce">
            prix d&apos;un site e-commerce
          </Link>{" "}
          et l&apos;offre{" "}
          <Link href="/services/ecommerce">e-commerce sur mesure</Link>.
        </p>
        <h3>Pour une refonte</h3>
        <p>
          Des rubriques souvent absentes des modèles génériques : l&apos;audit
          de l&apos;existant (quelles pages attirent du trafic ?),
          l&apos;inventaire des adresses de vos pages, et le{" "}
          <strong>plan de redirections 301</strong> — le mécanisme qui, comme la
          réexpédition du courrier après un déménagement, renvoie
          automatiquement Google et vos visiteurs des anciennes adresses vers
          les nouvelles. Sans inventaire ni redirections correctes, des pages
          peuvent devenir inaccessibles, perdre leurs liens et envoyer de
          mauvais signaux aux moteurs. Exigez un plan testé avant la bascule et
          un suivi post-migration ; aucun classement ne peut pour autant être
          garanti.
        </p>
        <h3>Pour un SaaS ou une application</h3>
        <p>
          Pour un SaaS — un logiciel vendu en ligne par abonnement, comme votre
          outil de paie —, le CDC devient un document produit : parcours de
          chaque type d&apos;utilisateur, droits d&apos;accès, données à
          stocker, connexions avec d&apos;autres logiciels, sécurité. C&apos;est
          un autre exercice — notre{" "}
          <Link href="/guides/cahier-des-charges-application-mobile">
            modèle de cahier des charges d&apos;application mobile
          </Link>{" "}
          lui est entièrement dédié (stores, hors-ligne, notifications), nos
          guides{" "}
          <Link href="/guides/combien-coute-un-saas">
            combien coûte un SaaS
          </Link>{" "}
          et{" "}
          <Link href="/guides/combien-coute-une-application-mobile">
            prix d&apos;une application mobile
          </Link>{" "}
          en donnent les repères, et c&apos;est précisément ce que le Discovery
          Sprint produit en 2 jours.
        </p>

        <h2 id="valeur-juridique">10. La valeur juridique de votre CDC</h2>
        <p>
          La portée d&apos;un cahier des charges dépend de l&apos;ensemble des
          échanges et documents contractuels. Pour réduire l&apos;ambiguïté,
          identifiez la version retenue, annexez-la au contrat lorsque pertinent
          et précisez <strong>l&apos;ordre de priorité des documents</strong> :
          cahier des charges, réponse du prestataire, devis, conditions et
          comptes rendus. Listez les écarts acceptés et la procédure de
          modification. Pour les créations, détaillez aussi les droits cédés ou
          concédés, leur étendue et les composants tiers ; la remise de fichiers
          ne suffit pas à transférer automatiquement tous les droits. Pour un
          enjeu important, faites relire le dossier par un professionnel du
          droit.
        </p>

        <h2 id="cas-particuliers">
          11. Mairies, associations, marchés publics
        </h2>
        <p>
          Pour une personne publique, le besoin technique peut être porté par un{" "}
          <strong>CCTP</strong> et les clauses administratives par un
          <strong>CCAP</strong>, selon les documents retenus pour la
          consultation. Le modèle de ce guide peut aider à préparer les
          questions métier, mais il ne remplace pas un dossier de marché ni la
          validation de la procédure. Faites notamment vérifier : les
          obligations d&apos;accessibilité applicables et les preuves à publier,
          la définition des critères d&apos;analyse, les règles relatives à
          l&apos;estimation et aux offres, les délais, la sécurité,
          l&apos;hébergement, les données et la maintenance. Une association
          n&apos;est pas automatiquement soumise aux mêmes règles qu&apos;une
          mairie : son statut, sa mission et le service concerné doivent être
          examinés. Les seuils et textes pouvant évoluer, utilisez les sources
          officielles au moment de lancer la consultation.
        </p>

        <h2 id="methode">12. Méthode : rédiger votre CDC en 5 étapes</h2>
        <ol>
          <li>
            <strong>Écrivez d&apos;abord les objectifs et les cibles</strong>{" "}
            (sections 2-3) — tout le reste en découle.
          </li>
          <li>
            <strong>Listez les fonctionnalités, puis coupez</strong> — tout ce
            qui n&apos;est pas indispensable passe en « souhaitable ».
          </li>
          <li>
            <strong>Faites l&apos;inventaire de l&apos;existant</strong> —
            outils, contenus, contraintes, nom de domaine.
          </li>
          <li>
            <strong>Chiffrez vos exigences</strong> — performance, délais,
            budget en fourchette.
          </li>
          <li>
            <strong>Faites-le challenger</strong> — par un pair, puis par les
            prestataires : un bon prestataire pose des questions qui dérangent.
            Celui qui chiffre sans rien demander devine votre périmètre — et ce
            qui est deviné aujourd&apos;hui peut devenir demain un écart, un
            délai ou un avenant.
          </li>
        </ol>

        <p>
          Avant d&apos;envoyer, passez la checklist : chaque « non » révèle une
          décision ou une information à traiter. Deux exigences souvent laissées
          implicites sont détaillées au chapitre 4, « Et après la mise en ligne
          ? » : les droits sur le code, les contenus et les composants, puis la
          réversibilité — récupérer les données, comptes et éléments prévus au
          contrat pour changer de prestataire. Notre guide{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            sur la propriété du site et du code source
          </Link>{" "}
          donne le texte de clause à insérer et la liste des accès à exiger à la
          livraison :
        </p>
        <GuideTable
          headers={["Vérification", "OK ?"]}
          rows={[
            ["Mes 2-3 objectifs sont chiffrés et datés", "☐"],
            [
              "Chaque fonctionnalité est classée indispensable / souhaitable",
              "☐",
            ],
            [
              "Chaque contenu (textes, photos) a un responsable et une date",
              "☐",
            ],
            [
              "Mes outils existants (CRM, agenda, facturation) sont listés — intégration demandée ou explicitement exclue",
              "☐",
            ],
            [
              "Mes exigences de performance précisent pages, conditions de test et preuve attendue",
              "☐",
            ],
            [
              "Données, traceurs, responsabilités et sous-traitants sont cadrés ; le périmètre d'accessibilité est vérifié",
              "☐",
            ],
            ["Ma fourchette de budget et mon échéance sont écrites", "☐"],
            [
              "Droits, licences tierces, comptes, données et modalités de réversibilité sont formalisés",
              "☐",
            ],
            [
              "Un interlocuteur unique et des délais de validation sont définis",
              "☐",
            ],
            ["Le même document part chez tous les prestataires consultés", "☐"],
          ]}
        />

        <InfoBox variant="emerald" title="Votre prochaine action">
          Tout est décidé ? Envoyez le Word et la grille aux candidats avec une
          date et un canal de questions communs. Des inconnues bloquent encore
          le budget, la migration ou une intégration ? Isolez-les dans une
          courte phase d&apos;étude avant de demander un prix ferme. Vous pouvez{" "}
          <Link
            href={SITE_CDC_KIT.path}
            className="font-semibold underline underline-offset-4"
          >
            examiner et télécharger le kit complet
          </Link>{" "}
          sans formulaire.
        </InfoBox>

        <h2 id="du-cdc-au-devis">13. Du cahier des charges au devis ferme</h2>
        <p>
          Votre CDC est prêt ? Constituez une liste courte de candidats
          réellement adaptés au projet. Donnez à tous le même document, la même
          échéance et le même accès aux réponses qui modifient le périmètre.
          Comparez d&apos;abord couverture, hypothèses, exclusions, équipe,
          planning, recette, maintenance et réversibilité, puis le prix
          correspondant. Une offre rapide, peu questionnée ou très éloignée des
          autres n&apos;est pas automatiquement mauvaise, mais elle mérite une
          vérification ligne par ligne : rédaction, SEO, migration, licences,
          formation et exploitation peuvent avoir été traités différemment.
          Notre{" "}
          <Link href="/guides/choisir-son-agence-web">
            guide pour choisir son agence web
          </Link>{" "}
          donne la suite : les dix-huit vérifications gratuites à mener avant le
          premier rendez-vous, et les treize questions avec le barème des
          réponses acceptables.
        </p>
        <p>
          Voici comment nous lisons un CDC reçu : objectifs d&apos;abord
          (mesurables ?), périmètre ensuite (priorisé ?), existant enfin
          (qu&apos;est-ce qui va nous surprendre ?). Puis nous posons les
          questions qui manquent — il en reste souvent. C&apos;est le rôle du{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours)</strong> : transformer
          votre expression de besoin en spécifications écrites, prototype
          cliquable (maquette interactive) et{" "}
          <strong>devis au forfait fixe</strong>. Les 1 500 € sont déduits si la
          phase suivante démarre avec nous sous 90 jours ; sinon vous conservez
          les livrables. Le périmètre validé est ensuite repris dans les
          documents contractuels — c&apos;est notre{" "}
          <Link href="/methode">méthode Sprint Fixe™</Link>.
        </p>
        <p>
          Vous avez déjà votre cahier des charges — ou juste une idée claire ?{" "}
          <Link href="/demarrer-un-projet">
            Décrivez votre projet en 3 minutes
          </Link>{" "}
          : nous vous répondons personnellement sous 24 h ouvrées, gratuitement
          et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources officielles</strong> — consultées en juillet 2026 ;
          les liens suivants s&apos;ouvrent dans un nouvel onglet :{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num « Bâtir le cahier des charges du site internet de son
            entreprise »
          </a>{" "}
          et sa{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/modeles-de-cahiers-des-charges-pour-un-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            sélection de modèles
          </a>{" "}
          ; repères{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/core-web-vitals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Core Web Vitals (Google Search Central)
          </a>{" "}
          ; mesure au{" "}
          <a
            href="https://web.dev/articles/vitals?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            75e percentile (web.dev)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/301-redirects"
            target="_blank"
            rel="noopener noreferrer"
          >
            redirections et migrations (Google Search Central)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            déplacement d&apos;un site avec changement d&apos;URL (Google Search
            Central)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite"
            target="_blank"
            rel="noopener noreferrer"
          >
            cookies et traceurs (CNIL)
          </a>{" "}
          et{" "}
          <a
            href="https://www.cnil.fr/fr/qualification-juridique-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            qualification de la sous-traitance (CNIL)
          </a>{" "}
          ;{" "}
          <a
            href="https://accessibilite.numerique.gouv.fr/obligations/champ-application/"
            target="_blank"
            rel="noopener noreferrer"
          >
            champ d&apos;application du RGAA
          </a>{" "}
          et{" "}
          <a
            href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/la-nouvelle-directive-europeenne-accessibilite-pour-des-produits-et-des-services-accessibles-aux-personnes-en-situation"
            target="_blank"
            rel="noopener noreferrer"
          >
            directive européenne sur l&apos;accessibilité (DGCCRF)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3 du Code de la propriété intellectuelle (Légifrance)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.afnic.fr/wp-media/uploads/2020/12/Guidepratique_Titulaire_VF.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide du titulaire de nom de domaine (Afnic)
          </a>{" "}
          ;{" "}
          <a
            href="https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations d&apos;authentification (ANSSI)
          </a>{" "}
          et{" "}
          <a
            href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/sauvegardes"
            target="_blank"
            rel="noopener noreferrer"
          >
            bonnes pratiques de sauvegarde (Cybermalveillance.gouv.fr)
          </a>
          .
        </p>
        <p className="text-sm">
          <em>
            Licence : vous pouvez utiliser et modifier le kit pour vos propres
            projets, puis le partager en interne et avec les prestataires
            consultés. Sa revente ou sa republication complète ou
            substantiellement identique comme ressource autonome est interdite
            sans accord écrit de Hagnéré Code. Ce guide ne constitue pas un
            conseil juridique personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
