import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("contrat-tma-application");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: guideRobots(guide),
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chronologie d’un incident pour tester un contrat TMA",
      },
    ],
    publishedTime: guide.datePublished + "T09:00:00+02:00",
    modifiedTime: guide.dateModified + "T09:00:00+02:00",
    authors: [SITE_URL + "/equipe"],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [guideUrl(guide) + "/opengraph-image"],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": SITE_URL + "/guides",
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: SITE_URL + "/equipe",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: SITE_URL + "/logos/logo-dark.png" },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: SITE_URL + "/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contrat TMA d’application",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Une entreprise est-elle obligée de signer un contrat TMA ?",
    answer:
      "Non, il n’existe pas d’obligation générale de signer une TMA. L’entreprise doit toutefois organiser la maintenance selon son activité, ses données et ses risques. Elle peut choisir une équipe interne, le support de l’éditeur, des interventions ponctuelles ou une TMA, à condition que les responsabilités soient claires.",
  },
  {
    question:
      "Tous les bugs doivent-ils être inclus dans la maintenance corrective ?",
    answer:
      "Non. Le contrat doit préciser le comportement attendu, la version concernée et les exclusions. Un défaut ancien, une API externe modifiée, une donnée erronée ou une nouvelle règle métier peuvent relever d’un autre traitement. La phase de reprise sert à clarifier ce point.",
  },
  {
    question: "Quelle différence entre prise en charge et résolution ?",
    answer:
      "La prise en charge signifie qu’une personne commence réellement à traiter l’incident. La résolution peut vouloir dire remise en service, solution temporaire ou correction définitive : le contrat doit choisir. Un message automatique ne vaut ni diagnostic ni rétablissement.",
  },
  {
    question: "Que veut dire SLA dans un contrat TMA ?",
    answer:
      "SLA désigne un engagement de niveau de service. Le sigle ne garantit rien à lui seul : le contrat doit préciser le délai, les horaires couverts, son point de départ, les pauses possibles, la façon de le mesurer et ce qui se passe en cas d’écart.",
  },
  {
    question: "Peut-on signer une TMA sans documentation technique ?",
    answer:
      "Oui, parfois, mais prévoyez d’abord une phase de reprise. La nouvelle équipe doit vérifier qu’elle peut observer l’application, la reconstruire, restaurer les données, livrer une petite correction et revenir en arrière. Le coût de la documentation manquante ne doit pas être caché.",
  },
  {
    question: "Le prestataire doit-il notifier la CNIL sous 72 heures ?",
    answer:
      "Pas dans ces termes. S’il agit comme sous-traitant, le prestataire informe le responsable du traitement dans les meilleurs délais. Le responsable évalue ensuite le risque et décide des notifications applicables, dont celle à la CNIL qui peut relever du délai de 72 heures. Le contrat doit organiser une alerte suffisamment rapide et documentée.",
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
          { label: "Contrat TMA d’application" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre application tombe en panne : qui appeler, sous quel délai et jusqu’à quel résultat ? Ce guide vous aide à choisir ou négocier une TMA qui protège vraiment l’activité, sans confondre réponse rapide et remise en service."
        heroAction={{
          href: "#verdict",
          label: "Voir les 5 décisions possibles",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Incident expliqué sans jargon",
            description: "",
            color: "amber",
          },
          {
            number: "02",
            title: "Périmètre et prix clarifiés",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "Reprise ou TMA décidée",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "blue",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Auditer la reprise avant la maintenance",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Définir les évolutions et leur recette",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Vérifier les droits, le code et les accès",
          },
          {
            href: "/guides/cout-maintenance-application-metier",
            label: "Construire le budget annuel de l’application",
          },
          {
            href: "/services/maintenance-evolution",
            label: "Maintenance et évolution d’applications",
          },
        ]}
        faqTitle="Contrat TMA : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Lundi matin, votre application bloque les documents nécessaires aux
            expéditions. Les commandes continuent d’entrer, l’équipe attend et
            votre contrat promet seulement une « prise en charge rapide des
            incidents critiques ». Qui appeler ? Quand le prestataire agit-il ?
            Et surtout : quand pourrez-vous de nouveau expédier ?
          </strong>
        </p>

        <p>
          Une <strong>TMA, ou tierce maintenance applicative</strong>, est un
          contrat par lequel une équipe extérieure entretient et fait évoluer
          votre application. Un bon contrat dit quelles demandes sont incluses,
          qui fixe la priorité, quels délais commencent à quel moment, comment
          les changements sont acceptés et comment récupérer l’application si la
          relation s’arrête. À la fin de ce guide, vous pourrez décider de
          signer, renégocier, choisir un support plus simple ou organiser
          d’abord une reprise technique. La situation ci-dessus est fictive ;
          elle sert uniquement à tester si les clauses sont réellement
          utilisables.
        </p>

        <InfoBox
          variant="amber"
          title="Un guide opérationnel, pas un modèle juridique"
        >
          Les clauses de responsabilité, assurance, propriété intellectuelle,
          confidentialité, pénalités, résiliation, droit applicable et litiges
          dépendent de votre contexte et doivent être relues par un
          professionnel du droit lorsque l’enjeu le justifie. Ce guide aide à
          rendre le service observable ; il ne tranche ni un contrat ni un
          différend particulier.
        </InfoBox>

        <GuideTable
          caption="Les quatre réponses à obtenir avant de signer"
          headers={[
            "Question du dirigeant",
            "Réponse attendue dans le contrat",
          ]}
          rows={[
            [
              "Qu’est-ce qui est couvert ?",
              "Les corrections, la prévention, les petites évolutions, le support et l’exploitation sont déclarés inclus, plafonnés, facturés à part ou exclus.",
            ],
            [
              "Quand l’activité reprend-elle ?",
              "Le contrat distingue la réponse du prestataire, la solution temporaire, le retour du service et la correction définitive.",
            ],
            [
              "Comment la facture est-elle calculée ?",
              "Forfait, unité minimale, dépassement, urgence, report des heures et travaux annexes permettent de simuler un mois calme et un mois chargé.",
            ],
            [
              "Comment changer d’équipe ?",
              "Accès, code, données, documentation, assistance et coût de sortie sont inventoriés et testables avant la fin du contrat.",
            ],
          ]}
        />

        <InfoBox variant="blue" title="Avant la TMA, vérifiez deux prérequis">
          La nouvelle équipe doit pouvoir observer l’application, restaurer les
          données et livrer une petite correction sans mettre la production en
          danger. L’entreprise doit aussi maîtriser les comptes du dépôt, du
          cloud, du domaine et des sauvegardes. Sinon, prévoyez d’abord une
          phase de reprise : un délai contractuel ne compense pas une
          application que personne ne sait reconstruire.
        </InfoBox>

        <GuideToc
          items={[
            { id: "crash-test", label: "1. Rejouer le premier incident" },
            { id: "perimetre", label: "2. Délimiter ce qui est couvert" },
            { id: "capacite", label: "3. Comprendre la facture" },
            { id: "livraison", label: "4. Accepter une correction" },
            { id: "securite", label: "5. Répartir les responsabilités" },
            { id: "reversibilite", label: "6. Suivre et préparer la sortie" },
            {
              id: "verdict",
              label: "7. Signer, corriger, reprendre ou refuser",
            },
            { id: "sources", label: "Sources officielles et limites" },
          ]}
        />

        <p>
          Le guide{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            reprendre un logiciel métier existant
          </Link>{" "}
          détaille cette phase lorsque les accès ou la restauration restent
          incertains.
        </p>

        <h2 id="crash-test">1. Rejouez le premier incident avant de signer</h2>

        <p>
          Demandez au prestataire et au responsable métier de raconter, minute
          par minute, ce qui se passerait si une fonction critique devenait
          indisponible. Ne cherchez pas une réponse impressionnante. Cherchez
          les passages de relais, les décisions et les résultats observables.
        </p>

        <GuideTable
          caption="Le parcours unique à rejouer avec le prestataire"
          headers={[
            "Moment",
            "Question simple",
            "Ce qui prouve que l’étape est terminée",
          ]}
          rows={[
            [
              "Alerte",
              "Qui appelle, par quel canal et pendant quels horaires ?",
              "Un ticket identifiable, horodaté et attribué.",
            ],
            [
              "Réponse",
              "Qui mesure l’impact et commence réellement le diagnostic ?",
              "Un responsable, une priorité confirmée et un premier constat.",
            ],
            [
              "Retour au service",
              "Faut-il contourner, restaurer ou corriger ? Qui autorise l’action ?",
              "Le métier vérifie que l’activité reprend et connaît les limites d’une solution temporaire.",
            ],
            [
              "Clôture",
              "La cause est-elle corrigée et le résultat accepté ?",
              "Version, tests, validation du client et actions encore ouvertes.",
            ],
          ]}
        />

        <p>
          Un contrat qui échoue à cette conversation n’est pas forcément à
          refuser. Il peut devenir signable après l’ajout d’un canal, d’un
          responsable, d’une matrice de gravité ou d’une procédure de retour
          arrière. L’important est de découvrir la zone muette avant la panne.
        </p>

        <h3>Écrivez les délais en français</h3>

        <p>
          Une réponse automatique n’est pas une prise en charge, et une prise en
          charge n’est pas un retour au service. Pour chaque engagement,
          indiquez le point de départ, les horaires couverts, ce qui peut mettre
          le délai en pause et le résultat attendu. Les sigles SLA, GTI ou GTR
          peuvent rester dans le contrat, mais seulement après cette traduction.
        </p>

        <p>
          La priorité dépend de l’opération bloquée, du nombre de personnes
          touchées, de l’existence d’une solution temporaire, du risque pour les
          données et d’une éventuelle échéance irréversible. Le responsable
          métier confirme l’impact ; le prestataire apporte le diagnostic
          technique.
        </p>

        <h2 id="perimetre">
          2. Décidez ce qui est couvert et ce qui sera facturé à part
        </h2>

        <p>
          La TMA n’est pas synonyme de « tout ce qui arrive après la mise en
          production ». Le{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
            target="_blank"
            rel="noopener noreferrer"
          >
            CCAG applicable aux marchés publics de techniques de l’information
          </a>{" "}
          distingue notamment maintenance préventive, corrective, évolutive et
          adaptative. Il ne s’applique à un marché public que si les documents
          de ce marché s’y réfèrent expressément, et ces documents peuvent y
          déroger. Il ne constitue donc pas un modèle de contrat privé. Sa
          nomenclature aide néanmoins à empêcher qu’un mot unique masque
          plusieurs travaux.
        </p>

        <GuideTable
          caption="Travaux à délimiter dans un contrat TMA"
          headers={[
            "Type de travail",
            "Ce que cela couvre",
            "Ce que le contrat doit préciser",
          ]}
          rows={[
            [
              "Correction",
              "le logiciel ne respecte plus un comportement accepté, par exemple une règle de calcul documentée",
              "version concernée, façon de reproduire l’anomalie, exclusions et contrôle après correction",
            ],
            [
              "Prévention",
              "réduire un risque avant la panne, par exemple mettre à jour une dépendance encore compatible",
              "inventaire, fréquence ou déclencheur, test et retour arrière",
            ],
            [
              "Adaptation",
              "absorber un changement externe : API, navigateur, système ou base de données",
              "veille, délai de prévenance, estimation et responsabilité du tiers",
            ],
            [
              "Évolution",
              "changer ce que l’application doit faire : nouveau rôle, écran, flux ou règle métier",
              "besoin, estimation, priorité, budget, test et acceptation",
            ],
            [
              "Assistance aux utilisateurs",
              "aider ou expliquer sans modifier le produit : question d’usage, compte bloqué ou demande mal orientée",
              "personnes autorisées, canaux, volume, transfert au bon responsable et documentation",
            ],
            [
              "Exploitation technique",
              "surveiller l’environnement, les certificats, la capacité, les sauvegardes et les restaurations",
              "frontière avec l’hébergeur, le prestataire qui gère le serveur et l’équipe cliente",
            ],
          ]}
        />

        <p>
          Pour chaque famille, choisissez un statut : incluse, plafonnée,
          commandée séparément ou exclue. Ajoutez les dépendances : hébergeur,
          éditeur, service de paiement, fournisseur d’identité, équipe interne.
          Un bug causé par une API tierce peut rester un incident à coordonner
          sans que le prestataire TMA puisse corriger le service tiers.
        </p>

        <InfoBox
          variant="blue"
          title="La référence évite le débat « bug ou évolution »"
        >
          Décrivez le comportement accepté, la version et les données de test.
          Si le résultat s’écarte de cette base, l’anomalie est vérifiable. Si
          le besoin a changé ou n’a jamais été défini, il faut le cadrer et le
          recevoir comme une évolution. Le contrat doit aussi traiter les
          défauts préexistants découverts pendant la reprise.
        </InfoBox>

        <h2 id="capacite">
          3. Vérifiez comment le forfait sera consommé pendant un mois réel
        </h2>

        <p>
          Une promesse d’heures, de jours ou de demandes ne dit pas comment la
          file sera traitée. Simulez un mois avec cinq objets différents : un
          incident prioritaire, deux anomalies ordinaires, une mise à jour
          préventive et une petite évolution. Demandez dans quel ordre ils
          passent, quelle unité est consommée et qui autorise un dépassement.
        </p>

        <p>
          Si vous hésitez encore entre forfait, temps mobilisé et capacité
          récurrente, commencez par{" "}
          <Link href="/guides/tma-ou-regie">
            choisir le mode de maintenance adapté à vos demandes réelles
          </Link>
          . Revenez ensuite à cette checklist pour négocier les engagements du
          contrat.
        </p>

        <GuideTable
          caption="Points économiques et opérationnels d’un forfait TMA"
          headers={["Question", "Ce qui doit être écrit", "Risque si absent"]}
          rows={[
            [
              "Unité",
              "temps réel, demi-journée, point, ticket ou périmètre couvert",
              "consommation impossible à contrôler",
            ],
            [
              "Travail et arrondi",
              "unité minimale ; traitement des réunions, diagnostics, tests, déploiements et bilans",
              "coût complet masqué",
            ],
            [
              "Priorité",
              "qui peut réordonner la file et combien de travaux avancent en même temps",
              "tout commence et rien ne finit",
            ],
            [
              "Urgence",
              "canal, couverture, capacité réservée, majoration éventuelle et autorisation",
              "promesse 24/7 sans équipe organisée",
            ],
            [
              "Report et dépassement",
              "sort des heures non utilisées ; alerte, estimation et accord avant de dépasser",
              "crédit perdu ou dépense engagée sans décision",
            ],
          ]}
        />

        <h3>Faites calculer le prix dans trois mois types</h3>

        <p>
          Il n’existe pas de tarif universel pour une TMA : le prix dépend du
          temps réservé, des horaires, de l’urgence, des outils et des travaux
          inclus. En revanche, un devis doit permettre de calculer la facture
          avant de signer. Demandez au prestataire de chiffrer les trois
          situations suivantes avec ses propres montants.
        </p>

        <GuideTable
          caption="Trois simulations de prix à exiger"
          headers={[
            "Mois à simuler",
            "Travail à inclure",
            "Prix qui doit être visible",
          ]}
          rows={[
            [
              "Mois calme",
              "réunion, surveillance, prévention et capacité minimale",
              "forfait incompressible, licences et sort des heures non utilisées",
            ],
            [
              "Mois chargé",
              "incident prioritaire, deux corrections et une petite évolution",
              "forfait, dépassement, arrondi et travaux reportés au mois suivant",
            ],
            [
              "Incident hors horaires",
              "alerte, diagnostic, remise en service et information de l’entreprise",
              "astreinte, majoration, durée minimale facturée et plafond autorisé",
            ],
          ]}
        />

        <p>
          Comparez ensuite le <strong>prix annuel connu</strong> : douze
          forfaits, mise en route, licences et exercices prévus. Gardez
          séparément les dépenses variables : dépassement, urgence, grande
          évolution et sortie. Une ligne inconnue reste « à confirmer » ; elle
          ne vaut jamais zéro.
        </p>

        <p>
          Pour passer de cette liste à un budget défendable, utilisez le{" "}
          <Link href="/guides/cout-maintenance-application-metier">
            registre annuel des coûts de maintenance
          </Link>
          . Il sépare les factures certaines, les dépenses à déclencher et les
          montants encore inconnus.
        </p>

        <h3>
          Comparez cinq façons d’organiser la maintenance, pas seulement deux
          prix
        </h3>

        <GuideTable
          caption="Alternatives à comparer avant une TMA"
          headers={["Organisation", "Quand elle convient", "Point à sécuriser"]}
          rows={[
            [
              "Équipe interne",
              "le besoin est continu et la compétence peut être entretenue",
              "recrutement, continuité, spécialités manquantes, astreinte, documentation et relais",
            ],
            [
              "Support éditeur",
              "le logiciel standard et son éditeur portent le cœur du problème",
              "personnalisation et intégrations parfois hors périmètre ; rôles de l’éditeur, du client et de l’intégrateur",
            ],
            [
              "Intervention ponctuelle",
              "application simple, besoin rare et faible criticité",
              "disponibilité non réservée, dossier toujours à jour et devis par intervention",
            ],
            [
              "Capacité TMA réservée",
              "flux récurrent d’incidents, prévention et petites évolutions",
              "ordre de la file, unité consommée, niveaux de service, bilan et sortie",
            ],
            [
              "Lots projets",
              "évolutions importantes avec début, fin et recette propres",
              "continuité entre les lots et transfert vers l’exploitation",
            ],
          ]}
        />

        <p>
          Une TMA n’est pas automatiquement la meilleure réponse. Un outil
          stable utilisé par cinq personnes peut relever d’un support éditeur et
          d’une intervention ponctuelle. Une application critique avec un flux
          permanent peut justifier une capacité réservée. Une refonte importante
          doit devenir un lot projet au lieu de bloquer toute la file de
          maintenance.
        </p>

        <h2 id="livraison">
          4. Décidez clairement quand une correction est vraiment terminée
        </h2>

        <p>
          « Développé » n’est pas « livré », « livré » n’est pas « déployé » et
          « déployé » n’est pas « accepté ». Pour une correction comme pour une
          évolution, le contrat doit relier l’entrée, l’estimation,
          l’autorisation, le test, la mise en production, le retour arrière et
          la recette.
        </p>

        <GuideTable
          caption="Étapes d’un changement applicatif"
          headers={["Étape", "Qui agit", "Ce qui permet de passer à la suite"]}
          rows={[
            [
              "Demande",
              "le métier, avec un appui technique",
              "un cas reproductible ou un résultat attendu, avec priorité et périmètre compris",
            ],
            [
              "Estimation et autorisation",
              "le prestataire",
              "hypothèses, inconnues, dépendances et charge ; le client autorise ou remet en attente",
            ],
            [
              "Préparation et mise en production",
              "le prestataire",
              "version, tests, journal, sauvegarde ou retour arrière et contrôles techniques réussis",
            ],
            [
              "Recette et observation",
              "un responsable client autorisé",
              "scénarios exécutés, résultat accepté ou refusé, puis clôture ou réouverture selon l’usage réel",
            ],
          ]}
        />

        <p>
          Une correction urgente peut suivre une voie allégée, mais cette voie
          doit rester écrite : personne autorisée, risque accepté, sauvegarde ou
          retour arrière, tests minimaux, journal et revue après incident. Une
          urgence ne doit pas créer un accès permanent ou supprimer toute trace.
        </p>

        <h2 id="securite">
          5. Nommez qui gère les accès, les données et les sauvegardes
        </h2>

        <p>
          Commencez par les opérations réelles : qui accède à la production, aux
          données et aux sauvegardes ; avec quel compte ; pendant combien de
          temps ; depuis quel outil ; avec quelle trace. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande notamment une main courante des interventions et des
            accès de télémaintenance limités dans le temps puis refermés
          </a>
          . Ces recommandations doivent être adaptées à l’architecture et au
          risque.
        </p>

        <GuideTable
          caption="Sécurité et données à répartir dans une TMA"
          headers={[
            "Sujet",
            "Question et responsable à nommer",
            "Ce que vous devez pouvoir contrôler",
          ]}
          rows={[
            [
              "Accès et composants",
              "qui ouvre et ferme les comptes ; qui suit versions, vulnérabilités et fins de support ?",
              "comptes nominatifs, droits, journaux, inventaire et feuille de route",
            ],
            [
              "Sauvegardes",
              "qui exécute, protège, conserve et restaure ? L’exploitant doit être désigné",
              "test de restauration et résultat",
            ],
            [
              "Incident et sous-traitants",
              "qui alerte et décide ; quels hébergeurs ou outils peuvent accéder aux données ?",
              "canal d’alerte, liste des intervenants, rôles, accès et procédure de changement",
            ],
            [
              "Données en sortie",
              "qui restitue ou supprime, et selon quel calendrier ? Le responsable du traitement et le prestataire se répartissent les actions",
              "export, contrôle, copies restantes et attestation adaptée",
            ],
          ]}
        />

        <p>
          Une maintenance qui donne même ponctuellement accès à des données
          personnelles peut relever d’une sous-traitance au sens du RGPD selon
          les opérations réelles. L’{" "}
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD
          </a>{" "}
          demande alors un acte précisant notamment objet, durée, nature,
          finalité, catégories de données et personnes, instructions,
          sous-traitants ultérieurs, assistance, audit et fin de prestation. Une
          annexe générique « conforme RGPD » ne remplit pas seule ces fonctions.
        </p>

        <p>
          Les sauvegardes méritent leur propre contrôle. L’{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide ANSSI sur la sauvegarde des systèmes d’information
          </a>{" "}
          relie objectifs, dépendances, protection et tests. Le journal d’une
          copie réussie ne prouve pas que les données et services peuvent être
          restaurés dans l’ordre nécessaire. Demandez un compte rendu de test,
          ses limites et les actions correctives.
        </p>

        <InfoBox
          variant="amber"
          title="Le délai de 72 heures n’est pas un SLA du prestataire"
        >
          Pour une violation de données personnelles, le sous-traitant informe
          le responsable du traitement dans les meilleurs délais. Le responsable
          analyse le risque et décide des notifications applicables, dont celle
          à la CNIL lorsque les conditions sont réunies. Fixez une alerte
          interne assez rapide et assez documentée pour permettre cette décision
          ; ne recopiez pas « le prestataire notifie la CNIL sous 72 heures ».
        </InfoBox>

        <h2 id="reversibilite">
          6. Suivez le service et préparez la sortie dès le début
        </h2>

        <p>
          Le bilan mensuel doit rester court : incidents majeurs et causes,
          versions livrées, capacité consommée, travaux en attente, accès
          sensibles, test de restauration et décisions à prendre. Chaque chiffre
          possède une source et conduit à une action ; sinon, retirez-le. Une
          cause récurrente doit devenir un travail préventif plutôt qu’un ticket
          payé plusieurs fois.
        </p>

        <p>
          La réversibilité n’est pas une phrase de fin de contrat. C’est la
          capacité à transmettre une application exploitable à une équipe qui ne
          dépend pas de la mémoire du prestataire sortant. Dans son contexte de
          commande publique, l’{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 38.4 du CCAG-TIC
          </a>{" "}
          cite notamment sources, exécutables, documentation, paramètres,
          scripts, fichiers exploitables et interfaces documentées parmi les
          éléments à remettre. Son article 42 complète ce dispositif par les
          conditions d’accès aux matériels et logiciels et la sécurité pendant
          le transfert. Adaptez ces exigences à votre situation ; ne vous
          contentez pas de « réversibilité incluse ».
        </p>

        <GuideTable
          caption="Exercice de transmission de l’application"
          headers={[
            "Élément",
            "Test à réaliser",
            "Résultat attendu et point contractuel",
          ]}
          rows={[
            [
              "Code, versions et construction",
              "exporter l’historique puis recréer un environnement depuis la documentation",
              "une autre personne retrouve la production et démarre l’application ; préciser accès, format, scripts et dépendances",
            ],
            [
              "Données",
              "produire un export documenté et le contrôler",
              "volumes, schéma et échantillons concordent ; préciser format, délai, sécurité et coût",
            ],
            [
              "Exploitation et connaissance",
              "transmettre supervision, sauvegardes, procédures, incidents et travaux en attente",
              "l’équipe repreneuse sait exploiter et prioriser ; préciser fournisseurs, documents, ateliers et assistance",
            ],
            [
              "Accès, droits et licences",
              "transférer ou renouveler les secrets et rassembler les contrats utiles",
              "les nouveaux accès fonctionnent, les anciens sont révocables et la possibilité de faire maintenir est analysée",
            ],
            [
              "Fin des données",
              "restituer ou supprimer selon les rôles et obligations",
              "le contrôle est adapté ; préciser copies, sauvegardes et exceptions",
            ],
          ]}
        />

        <p>
          Organisez un exercice partiel tôt dans le contrat : export du dépôt,
          reconstruction d’un environnement isolé, export d’un jeu de données et
          revue des accès. Ce test améliore aussi la continuité avec le
          prestataire actuel. Précisez préavis, assistance, capacité réservée,
          tarification éventuelle, livrables, critères de réception et maintien
          du service pendant le transfert.
        </p>

        <p>
          La remise du code ne suffit pas à établir les droits. Le paiement, la
          possession matérielle, les licences de composants, les droits
          d’utilisation et le droit de faire modifier sont distincts. Le guide{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            propriété du code source et des accès
          </Link>{" "}
          donne une première cartographie ; faites analyser les clauses et la
          chaîne des contributeurs lorsque nécessaire.
        </p>

        <h2 id="verdict">
          7. Décidez de signer, corriger, reprendre ou refuser
        </h2>

        <GuideTable
          caption="Décision après examen du contrat TMA"
          headers={["Décision", "Quand la prendre", "Suite raisonnable"]}
          rows={[
            [
              "Signer la TMA",
              "application maintenable, travaux inclus, responsabilités, suivi et transmission cohérents",
              "faire relire les clauses sensibles puis planifier le démarrage, sans promettre l’absence de panne",
            ],
            [
              "Signer après corrections",
              "quelques zones peuvent être réglées avant le démarrage",
              "dater l’annexe, le test ou le transfert d’accès et ne pas lancer le fonctionnement normal avant leur validation",
            ],
            [
              "Choisir un support ponctuel",
              "faible criticité, demandes rares et dossier exploitable",
              "organiser le contact, les accès et le devis à la demande, sans prétendre réserver une disponibilité",
            ],
            [
              "Organiser d’abord une reprise",
              "documentation, actifs, restauration ou livraison ne sont pas maîtrisés",
              "auditer et sécuriser avant de promettre un délai sur un système que l’équipe ne contrôle pas",
            ],
            [
              "Refuser l’offre",
              "responsabilités opaques, accès permanents injustifiés ou transmission impossible",
              "sécuriser les actifs et chercher un autre mode ou prestataire ; une pénalité ne corrige pas ces défauts",
            ],
          ]}
        />

        <p>
          Vous pouvez déjà tester le contrat avec trois exercices : simuler le
          premier incident, faire passer cinq tickets fictifs dans le premier
          mois, puis demander à une personne extérieure au projet de
          reconstruire une petite partie de l’environnement avec les éléments
          transmis. Pour chaque question, notez la clause, la réponse, le
          responsable et le résultat attendu. Un « à confirmer » suspend la
          promesse concernée, sans condamner automatiquement tout le contrat.
        </p>

        <InfoBox
          variant="emerald"
          title="Quand Hagnéré Code est adapté — et quand nous ne devons pas commencer par une TMA"
        >
          <p className="mb-2">
            <strong>Cas adapté :</strong> l’application existe, ses usages et
            propriétaires peuvent être identifiés, le besoin est récurrent et
            une phase de vérification peut ouvrir les accès sans mettre la
            production en danger.
          </p>
          <p className="mb-0">
            <strong>Autre première étape :</strong> un incident actif exige une
            réponse à incident, une suspicion de compromission une équipe
            compétente, une absence totale d’actifs un{" "}
            <Link href="/guides/reprendre-logiciel-metier-existant">
              audit de reprise
            </Link>
            , le départ du développeur d’un SaaS actif un{" "}
            <Link href="/guides/reprendre-saas-developpe-par-freelance">
              registre de passation des comptes
            </Link>{" "}
            et un litige une analyse juridique. Une TMA commerciale ne doit pas
            masquer ces besoins.
          </p>
        </InfoBox>

        <p>
          Notre service de{" "}
          <Link href="/services/maintenance-evolution">
            maintenance et évolution d’applications
          </Link>{" "}
          peut commencer par un périmètre de reprise, une capacité récurrente ou
          un lot distinct selon le diagnostic. Le cadrage doit aussi pouvoir
          conclure qu’un support éditeur, une équipe interne ou une intervention
          ponctuelle suffit.
        </p>

        <GuideInlineCTA
          title="Savoir si votre application est prête pour une TMA"
          description="Décrivez l’application, les pannes qui bloqueraient l’activité, les accès disponibles et le contrat envisagé. Vous saurez s’il faut négocier la TMA, sécuriser d’abord la reprise ou choisir un support plus simple."
          tags={[
            "Périmètre et exclusions",
            "Délais réellement compris",
            "Reprise ou TMA décidée",
          ]}
          ctaLabel="Évaluer mon besoin de TMA"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <p>
          Recherche effectuée le 20 juillet 2026. Le CCAG-TIC ne s’applique à un
          marché public que si les documents particuliers s’y réfèrent ; ceux-ci
          peuvent en outre prévoir des dérogations. Ses références sont donc
          utilisées ici comme nomenclature et source d’exigences possibles, pas
          comme modèle obligatoire d’un contrat privé. Les obligations
          applicables dépendent de l’activité, des données, des rôles, des
          contrats et des risques. Ce guide n’est ni un avis juridique, ni un
          audit certifiant, ni une réponse à incident.
        </p>

        <ul>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
              target="_blank"
              rel="noopener noreferrer"
            >
              Légifrance — CCAG-TIC, article 38
            </a>
            , notamment l’article 38.4 sur les éléments remis en réversibilité,
            avec les articles 39, 40 et 42 pour niveaux de service, maintien en
            condition de sécurité et conditions du transfert ; arrêté du 30 mars
            2021, seulement lorsque les documents du marché s’y réfèrent et sous
            réserve de leurs dérogations.
          </li>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040777"
              target="_blank"
              rel="noopener noreferrer"
            >
              Légifrance — Code civil, article 1103
            </a>{" "}
            et{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040772"
              target="_blank"
              rel="noopener noreferrer"
            >
              article 1104
            </a>
            , sur la force obligatoire et la bonne foi ; leur application à un
            différend requiert l’analyse des faits et des clauses.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Encadrer la maintenance et la fin de vie
            </a>
            , publiée le 14 mars 2024 : accès, durée et traçabilité.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Gérer la sous-traitance
            </a>
            , pour garanties, audits, transmissions, habilitations et
            authentification selon le risque.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — RGPD, articles 28, 32 et 33
            </a>
            , dans le périmètre des données personnelles et des rôles réels.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1
            </a>
            , publiée le 27 novembre 2025 ; recommandations à adapter au
            système.
          </li>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              Légifrance — Code de la propriété intellectuelle, article L131-3
            </a>
            , avec les articles L113-9 et L122-6 pour distinguer certains droits
            et régimes sans conclure sur un contrat particulier.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
