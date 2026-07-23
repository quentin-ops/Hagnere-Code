import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("application-suivi-production-pme");

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
        alt: "Scénario fictif d’un ordre de fabrication suivi de son démarrage à son bilan",
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
      name: "Suivi de production pour PME",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu’est-ce qu’une application de suivi de production ?",
    answer:
      "C’est un outil qui enregistre ce qui vient de se passer sur un ordre de fabrication : début d’étape, quantité, blocage, reprise, contrôle ou fin. Son premier rôle est de donner à l’atelier et aux bureaux la même information d’avancement.",
  },
  {
    question: "Quelle différence entre ERP, GPAO et MES ?",
    answer:
      "L’ERP gère largement l’entreprise, la GPAO organise la gestion de production et le MES suit ou exécute les opérations de l’atelier. Leurs périmètres se recouvrent selon les produits : partez de vos décisions et testez les fonctions réelles plutôt que d’acheter un sigle.",
  },
  {
    question: "Faut-il connecter directement les machines ?",
    answer:
      "Non, pas pour commencer à suivre un ordre. Une déclaration par l’opérateur peut suffire ; lire une machine ou lui envoyer une consigne ouvre un projet industriel distinct qui demande une analyse de risques et des compétences adaptées.",
  },
  {
    question: "Comment éviter que les opérateurs passent leur temps à saisir ?",
    answer:
      "Limitez la première version aux événements qui déclenchent une décision et essayez-les au poste réel. Un scan, une quantité ou un motif n’est utile que si le geste reste possible avec les gants, les interruptions, le terminal et le réseau de l’atelier.",
  },
  {
    question: "Une GPAO standard suffit-elle pour une PME ?",
    answer:
      "Oui, elle peut suffire si elle traite vos unités, lots, reprises, droits et connexions sans contournement permanent. Faites-lui rejouer un ordre réel autorisé et ses incidents avant d’envisager un développement spécifique.",
  },
  {
    question: "Quels indicateurs regarder en premier ?",
    answer:
      "Commencez par la part d’événements reçus, leur retard de saisie et les ordres dont l’état reste inconnu. Les temps, rebuts et reprises deviennent utiles seulement lorsque le groupe d’ordres comparables — appelé cohorte —, l’unité et les règles de correction sont stables.",
  },
];

const scopeChoices = [
  {
    title: "Suivre",
    example:
      "Savoir que l’étape a commencé, que 60 pièces acceptées sont parties à l’étape suivante et qu’un blocage matière a été levé.",
    decision:
      "Répondre à un client, relancer un poste ou traiter une exception avec une information datée.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Planifier",
    example:
      "Décider quel ordre doit passer sur quel poste, avec quelles matières, personnes et dates.",
    decision:
      "Arbitrer la charge et les priorités futures. Le suivi peut l’alimenter, mais ne le remplace pas.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Conduire une machine",
    example:
      "Démarrer, arrêter, régler ou modifier une consigne qui agit sur le procédé physique.",
    decision:
      "Piloter un équipement en sécurité. Ce travail sort du périmètre de ce guide.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
];

const timeline = [
  {
    eventTime: "8 h 10",
    state: "Étape démarrée",
    quantity:
      "Lot fixe de 100 pièces à inspecter ; aucune quantité encore qualifiée",
    role: "Opérateur du poste fictif « Découpe »",
    entryTime: "Déclaré à 8 h 10 — retard : 0 minute",
    detail:
      "L’ordre OF-FICTIF-2407 provient du logiciel de gestion. L’application enregistre le début ; elle ne démarre pas la machine.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    eventTime: "10 h 05",
    state: "Premier point de quantité",
    quantity: "40 acceptées + 3 rebutées + 7 en cours ; 50 non encore engagées",
    role: "Opérateur du poste « Découpe »",
    entryTime: "Saisi à 10 h 15 — retard : 10 minutes",
    detail:
      "L’heure de l’événement et l’heure de saisie restent distinctes. L’équipe voit que l’information décrit 10 h 05, pas 10 h 15.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    eventTime: "11 h 00",
    state: "Bloqué — matière manquante",
    quantity: "Situation des quantités inchangée",
    role: "Opérateur du poste « Découpe »",
    entryTime: "Saisi à 11 h 03 — retard : 3 minutes",
    detail:
      "Le motif « matière manquante » explique l’arrêt. Il ne doit pas être confondu avec une panne machine ni déduit d’un silence.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    eventTime: "11 h 40",
    state: "Production reprise",
    quantity: "Situation des quantités inchangée au moment de la reprise",
    role: "Opérateur du poste « Découpe »",
    entryTime: "Saisi à 11 h 41 — retard : 1 minute",
    detail:
      "La reprise clôt le blocage matière. Elle ne prouve pas à elle seule qu’une nouvelle pièce a été acceptée.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    eventTime: "12 h 00",
    state: "Ordre fractionné, toujours ouvert",
    quantity:
      "60 acceptées transférées + 3 déjà rebutées + 37 encore à qualifier = 100",
    role: "Opérateur puis responsable du flux",
    entryTime: "Saisi à 12 h 04 — retard : 4 minutes",
    detail:
      "Le réseau tombe au moment de ce test fictif puis revient. L’envoi repris doit conserver une seule déclaration et ne jamais clôturer les 40 pièces non transférées : 3 rebuts et 37 encore à qualifier.",
    color:
      "border-fuchsia-200 bg-fuchsia-50/70 dark:border-fuchsia-900 dark:bg-fuchsia-950/20",
  },
  {
    eventTime: "15 h 20",
    state: "Bilan saisi, ordre encore ouvert",
    quantity:
      "92 acceptées + 5 rebutées + 3 placées une première fois en reprise = 100 inspectées",
    role: "Opérateur puis responsable de production",
    entryTime: "Saisi à 15 h 22 — retard : 2 minutes",
    detail:
      "La reprise des 3 pièces n’est pas terminée. Leur futur achèvement devra changer leur état sans les compter comme trois nouvelles pièces produites.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
];

const eventQuestions = [
  {
    title: "Qu’est-ce qui vient de se passer ?",
    text: "Début, quantité, blocage, reprise, transfert, contrôle ou fin. L’événement doit décrire un fait, pas un voyant ambigu « en cours ».",
  },
  {
    title: "Quand s’est-il produit et quand a-t-il été saisi ?",
    text: "Conservez les deux heures. Sinon, une saisie à 10 h 15 risque de faire croire que la production observée à 10 h 05 est plus fraîche qu’elle ne l’est.",
  },
  {
    title: "Quelle quantité et quelle unité ?",
    text: "Écrivez 40 pièces, pas seulement 40. Une saisie en kilogrammes à la place de pièces doit être refusée ou corrigée avec un historique visible.",
  },
  {
    title: "Quel rôle est responsable ?",
    text: "Nommez le poste ou le rôle quand l’identité individuelle n’est pas nécessaire. L’équipe doit savoir qui déclare et qui traite l’exception.",
  },
  {
    title: "Quelle décision dépend de cette donnée ?",
    text: "Si personne ne sait ce qui change après la saisie, retirez le champ ou reformulez sa finalité avant de développer.",
  },
  {
    title: "Comment corriger sans effacer ?",
    text: "Conservez la valeur précédente, la correction, son moment et son motif. Séparez cet historique métier des journaux techniques de sécurité.",
  },
];

const workplaceTests = [
  {
    title: "Au poste",
    scene:
      "L’opérateur porte des gants, alterne contrôle et manutention et partage éventuellement un terminal.",
    verify:
      "Nombre de gestes, lisibilité, risque de double scan, déconnexion et possibilité de corriger sans quitter le travail.",
  },
  {
    title: "Avec un réseau dégradé",
    scene:
      "Le fractionnement de midi est déclaré pendant une coupure, puis la connexion revient.",
    verify:
      "État « en attente », confirmation de réception, absence de doublon et procédure si l’appareil est perdu avant la reprise.",
  },
  {
    title: "Pendant une interruption",
    scene:
      "Une matière manque ; l’opérateur doit signaler le blocage puis reprendre la production.",
    verify:
      "Motif rapide à choisir, responsabilité visible et distinction entre arrêt, reprise et quantité produite.",
  },
];

const options = [
  {
    title: "1. Attendre en corrigeant le travail",
    when: "Les événements, unités ou responsabilités ne sont pas encore décidés. Fixez une date ou un changement précis qui déclenchera le réexamen.",
    coverage:
      "Rejouez OF-FICTIF-2407 sur le support actuel et vérifiez si les six événements, le lot fractionné et l’ordre encore ouvert sont compris.",
    effort:
      "Mesurez les gestes, appels, recopies et corrections réellement nécessaires au poste et dans les bureaux.",
    quality:
      "Notez l’heure du fait et l’heure de saisie ; rendez visibles les événements attendus mais absents au lieu de les deviner.",
    cost: "Comptez le temps de maintien du support, les recherches et les reprises sur la même durée que les quatre autres options.",
    rights:
      "Limitez déjà les accès et les identités collectées. Conservez un historique compréhensible des corrections utiles.",
    continuity:
      "Prévoyez qui tient le support, où il est sauvegardé et comment l’équipe travaille en cas d’absence.",
    owner:
      "Le responsable de production porte la clarification. Arrêtez d’attendre lorsque les règles sont stables et que le fonctionnement actuel ne tient plus le volume ou les exceptions.",
    color: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
  },
  {
    title: "2. Configurer l’outil déjà possédé",
    when: "Le tableur, le logiciel de gestion ou son module sait recevoir les événements, mais les champs, vues ou droits n’ont pas été organisés.",
    coverage:
      "Faites passer le même ordre, les 100 pièces, les six événements et les six mauvais cas sans ajouter un second registre concurrent.",
    effort:
      "Testez la saisie avec les conditions réelles du poste, puis l’administration, les sauvegardes et l’export — pas uniquement l’écran.",
    quality:
      "Vérifiez les unités, les corrections, les doublons, le retard de saisie et l’impossibilité de fermer l’ordre tant que la reprise reste ouverte.",
    cost: "Additionnez paramétrage, nettoyage des données, licences, formation, administration et éventuelles connexions sur la durée commune.",
    rights:
      "Attribuez les droits par fonction et testez ce qu’un opérateur, la qualité, le responsable et l’administrateur peuvent réellement faire.",
    continuity:
      "Vérifiez sauvegarde, restauration annoncée, retour aux anciens réglages et procédure quand la connexion ou le module ne répond pas.",
    owner:
      "Nommez l’administrateur des règles. Sortez de l’essai si une fonction indispensable impose une recopie ou un contournement permanent.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "3. Adopter un produit standard de production",
    when: "Une gestion de production assistée par ordinateur (GPAO) ou un système de suivi des opérations de production (MES) couvre vos cas courants.",
    coverage:
      "Démontrez unités, lots, fractionnement, rebut, reprise et échange avec le logiciel de gestion sur OF-FICTIF-2407, documentation actuelle à l’appui.",
    effort:
      "Faites saisir par les personnes du poste avec les appareils, interruptions et volumes prévus, pas dans une démonstration préparée par l’éditeur.",
    quality:
      "Contrôlez les événements tardifs ou absents, les corrections, le double scan et la reprise terminée sans nouvelle production.",
    cost: "Comparez licences, paramétrage, migration, formation, connexion, support, sauvegarde et sortie sur la même période.",
    rights:
      "Vérifiez la finesse des habilitations, les traces disponibles, leur usage, leur protection et les durées configurables.",
    continuity:
      "Demandez comment restaurer, revenir à l’ancien fonctionnement, exporter et travailler durant une panne. Testez ce qui peut l’être.",
    owner:
      "Nommez un responsable interne et l’interlocuteur de l’éditeur. Renoncez si une règle essentielle exige un bricolage permanent.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    title: "4. Assembler un outil avec des blocs visuels",
    when: "Les règles restent lisibles, les volumes sont maîtrisés et une personne peut administrer dans la durée cet outil dit « no-code ».",
    coverage:
      "Rejouez exactement le même ordre, ses états et ses incidents. Dans ce guide, l’assemblage saisit des faits ; il ne commande jamais une machine.",
    effort:
      "Mesurez les gestes sur le terminal réel et le travail d’entretien des écrans, règles, comptes et connexions.",
    quality:
      "Testez contraintes d’unité, nouvelle tentative après coupure, double scan, historique des corrections et calculs sur un groupe d’ordres comparables.",
    cost: "Comptez abonnements par utilisateur ou opération, assemblage, connexions, formation, administration, support et export sur la durée commune.",
    rights:
      "Vérifiez que les rôles ne donnent pas accès à trop de données et que les journaux ne deviennent pas un suivi individuel caché.",
    continuity:
      "Contrôlez sauvegarde, export utilisable, dépendances entre services, reprise après échec et personne capable de réparer l’assemblage.",
    owner:
      "L’administrateur interne porte les règles. Arrêtez si les droits, le volume, le hors-ligne ou les connexions dépassent ce que l’équipe maîtrise.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "5. Développer un ajout ciblé sur mesure",
    when: "Les étapes et exceptions stables propres au métier résistent aux quatre réponses précédentes, sans exiger de reconstruire une GPAO entière.",
    coverage:
      "Limitez le premier lot à OF-FICTIF-2407, un flux, un poste et les incidents fixés. Reliez l’ordre au système qui le crée et retournez seulement le résultat convenu.",
    effort:
      "Concevez avec les opérateurs puis observez la saisie au poste. Chaque événement supplémentaire doit justifier la décision qu’il permet.",
    quality:
      "Exigez des règles d’unité, une protection qui empêche de compter deux fois le même scan, des corrections historisées, des événements absents visibles et une reprise non recomptée.",
    cost: "Comptez conception, développement, hébergement, sécurité, documentation, formation, support et maintenance sur la même durée.",
    rights:
      "Définissez rôles, données personnelles nécessaires, traces de sécurité, information des salariés, accès et durées avant le déploiement.",
    continuity:
      "Testez une sauvegarde restaurée, un déploiement annulé, le mode dégradé, la surveillance des erreurs et la reprise par un tiers.",
    owner:
      "Clarifiez droits sur le code et les données, dépôt, accès, documentation et export. Renoncez si un produit courant couvre le besoin à moindre risque.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
];

const incidentTests = [
  {
    title: "Réseau coupé au fractionnement",
    action:
      "Saisissez le départ des 60 pièces à midi hors connexion, puis rétablissez le réseau.",
    pass: "L’événement reste en attente, est reçu une seule fois et ne ferme pas l’ordre entier.",
  },
  {
    title: "Même événement scanné deux fois",
    action:
      "Répétez le scan ou la validation avec le même identifiant d’événement.",
    pass: "L’outil reconnaît la nouvelle tentative ou demande une décision ; il ne double ni quantité ni mouvement.",
  },
  {
    title: "Kilogrammes saisis à la place de pièces",
    action: "Entrez volontairement l’unité « kg », puis corrigez en « pièce ».",
    pass: "La règle refuse l’unité impossible ou conserve clairement l’ancienne valeur, la correction et son motif.",
  },
  {
    title: "Reprise terminée",
    action: "Achevez les trois pièces placées une première fois en reprise.",
    pass: "Leur état change ; le total des pièces inspectées reste 100 et aucune « nouvelle production » de trois pièces n’apparaît.",
  },
  {
    title: "Événement obligatoire absent",
    action:
      "Retirez la reprise de 11 h 40 avant l’heure de coupure du contrôle.",
    pass: "L’ordre apparaît avec un état inconnu ou incomplet ; le silence ne devient pas automatiquement « en production ».",
  },
  {
    title: "Droit insuffisant ou excessif",
    action:
      "Essayez de corriger avec un rôle de simple consultation, puis d’administrer avec un rôle opérateur.",
    pass: "Chaque action interdite reste bloquée et la tentative utile au diagnostic est protégée dans le journal approprié.",
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
          { label: "Suivi de production PME" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="L’atelier, le commerce et l’administration donnent trois états différents de la même commande ? Reconstituez une journée, puis choisissez l’outil le plus simple qui rend l’avancement assez fiable."
        heroAction={{
          href: "#journee",
          label: "Voir la journée fictive",
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
            title: "1 ordre fictif",
            description: "",
            color: "violet",
          },
          {
            number: "06",
            title: "6 événements",
            description: "",
            color: "blue",
          },
          {
            number: "05",
            title: "5 réponses comparées",
            description: "",
            color: "emerald",
          },
          {
            number: "",
            title: guide.readTimeMin + " minutes de lecture",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "Comparer logiciel de gestion et sur-mesure",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "Comparer no-code et développement sur mesure",
          },
          {
            href: "/guides/connecter-erp-crm-logiciel-metier",
            label: "Relier l’application au logiciel de gestion",
          },
          {
            href: "/guides/automatiser-processus-metier",
            label: "Décider si le processus doit être automatisé",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Préparer le cahier des charges du premier lot",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer ensuite le retour sur investissement",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Découvrir nos applications métier sur mesure",
          },
        ]}
        faqTitle="Suivi de production : les questions avant de choisir un outil"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Un client vous appelle : votre atelier dit que sa commande avance,
            le commerce la croit presque terminée et l’administration attend
            encore une quantité fiable.
          </strong>{" "}
          Une application de suivi de production enregistre ce qui vient de se
          passer sur un ordre — démarrage, quantité, blocage, reprise, contrôle
          ou fin — afin que la prochaine décision repose sur la même
          information. Elle ne planifie pas nécessairement les prochains ordres
          et ne conduit pas une machine. Commencez donc par les quelques
          événements que l’atelier peut déclarer sans ralentir le travail. Si
          les règles ne sont pas encore décidées, attendez avant d’acheter tout
          en corrigeant la circulation de l’information. Sinon, testez dans cet
          ordre l’outil déjà possédé, un produit standard, un assemblage avec
          des blocs visuels — souvent appelé « no-code » — puis un ajout ciblé
          sur mesure.
        </p>

        <p>
          Vous allez suivre ici une journée fictive sur un seul ordre de
          fabrication. Le même scénario permettra de comparer les cinq réponses
          et de tester les erreurs qui faussent habituellement l’avancement :
          saisie tardive, réseau coupé, double scan, mauvaise unité, lot
          fractionné et reprise comptée deux fois.
        </p>

        <GuideToc
          items={[
            {
              id: "perimetre",
              label: "1. Séparer suivi, planification et machine",
            },
            {
              id: "journee",
              label: "2. Reconstituer une journée de production",
            },
            {
              id: "evenements",
              label: "3. Décrire chaque événement sans ambiguïté",
            },
            {
              id: "poste",
              label: "4. Tester la saisie au poste réel",
            },
            {
              id: "cinq-reponses",
              label: "5. Comparer cinq réponses équitablement",
            },
            {
              id: "frontieres",
              label: "6. Décider où l’ordre naît et revient",
            },
            {
              id: "machines",
              label: "7. Ne pas confondre suivi et conduite des machines",
            },
            {
              id: "incidents",
              label: "8. Faire passer les mauvais cas",
            },
            {
              id: "salaries",
              label: "9. Mesurer un ordre sans surveiller les salariés",
            },
            {
              id: "mesures",
              label: "10. Mesurer fraîcheur, inconnues et qualité",
            },
            {
              id: "pilote",
              label: "11. Piloter un flux et un poste",
            },
            {
              id: "aide",
              label: "12. Savoir si le sur-mesure est pertinent",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="perimetre">
          1. Avant de choisir un logiciel, dites quelle décision vous manque
        </h2>

        <p>
          « Nous voulons digitaliser l’atelier » ne dit pas ce que l’entreprise
          doit mieux décider. Demandez plutôt : quand le responsable consulte
          l’ordre, veut-il connaître le dernier fait déclaré, décider du
          prochain ordre à lancer ou envoyer une consigne à un équipement ? Ces
          trois besoins n’ont ni le même risque ni le même projet.
        </p>

        <div className="not-prose my-7 grid gap-4 lg:grid-cols-3">
          {scopeChoices.map((choice) => (
            <article
              key={choice.title}
              className={`rounded-2xl border p-5 ${choice.color}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {choice.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {choice.example}
              </p>
              <p className="mb-0 mt-4 border-t border-zinc-200 pt-4 text-sm font-medium leading-relaxed text-zinc-900 dark:border-zinc-800 dark:text-zinc-100">
                {choice.decision}
              </p>
            </article>
          ))}
        </div>

        <p>
          Une gestion de production assistée par ordinateur, ou{" "}
          <strong>GPAO</strong>, couvre généralement un périmètre plus large :
          ordres, matières, planification, avancement et parfois coûts. Un{" "}
          <strong>MES</strong> — système de suivi ou d’exécution des opérations
          de production — se rapproche davantage de l’atelier. Les fonctions
          réelles varient toutefois selon les produits. Le{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/production-et-fabrication/gpao-la-solution-numerique-pour-mieux-gerer-la"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide France Num consacré à la GPAO
          </a>{" "}
          donne une vue d’ensemble utile de ces familles. Il est rédigé par
          SetInUp, prestataire du domaine et solution citée dans l’article :
          utilisez-le comme une explication intéressée, pas comme une preuve
          indépendante de gains.
        </p>

        <InfoBox
          variant="emerald"
          title="La bonne première phrase tient en une décision"
        >
          « Quand un client appelle, je veux savoir quel dernier événement a été
          confirmé, à quelle heure et qui doit traiter le blocage. » Si cette
          phrase suffit, ne transformez pas immédiatement le besoin en refonte
          complète de la production.
        </InfoBox>

        <h2 id="journee">
          2. Reconstituez une journée avant de dessiner le premier écran
        </h2>

        <p>
          <strong>Le scénario qui suit est entièrement fictif.</strong> Ni
          l’entreprise, ni l’ordre, ni les résultats ne décrivent un client ou
          un projet réalisé par Hagnéré Code. Les nombres servent uniquement à
          vérifier que chaque option donne une réponse cohérente à partir des
          mêmes faits.
        </p>

        <p>
          Le logiciel de gestion crée l’ordre <strong>OF-FICTIF-2407</strong>{" "}
          pour un lot fixe de <strong>100 pièces à inspecter</strong>, à l’unité
          « pièce », sur le poste fictif « Découpe ». Le scénario ne cherche pas
          à obtenir 100 pièces bonnes : il doit attribuer un état cohérent à
          chacune des 100 pièces, y compris rebut ou reprise. Le journal minimal
          ne raconte pas toute l’usine ; il conserve les événements qui
          expliquent l’état de cet ordre et ce que l’équipe peut décider
          ensuite.
        </p>

        <div className="not-prose my-8 space-y-4">
          {timeline.map((event) => (
            <article
              key={`${event.eventTime}-${event.state}`}
              className={`rounded-2xl border p-5 sm:p-6 ${event.color}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
                    Événement à {event.eventTime}
                  </p>
                  <h3 className="mb-0 mt-1 text-lg font-semibold text-zinc-950 dark:text-white">
                    {event.state}
                  </h3>
                </div>
                <span className="w-fit rounded-full border border-zinc-300 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300">
                  OF-FICTIF-2407
                </span>
              </div>
              <dl className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Quantité et unité
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {event.quantity}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Rôle ou poste
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {event.role}
                  </dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Heure de saisie
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {event.entryTime}
                  </dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Ce que l’équipe doit comprendre
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {event.detail}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <InfoBox variant="amber" title="À 15 h 22, l’ordre n’est pas terminé">
          Les 92 pièces acceptées, 5 rebutées et 3 placées une première fois en
          reprise reconstruisent bien 100 pièces inspectées. Mais les 3 reprises
          ne sont pas achevées. Afficher « 100 % terminé » confondrait quantité
          inspectée et ordre clôturé.
        </InfoBox>

        <h2 id="evenements">
          3. Pour chaque événement, écrivez quoi, quand, dans quelle unité et
          pourquoi
        </h2>

        <p>
          La qualité ne vient pas du nombre de champs. Elle vient d’une règle
          compréhensible : l’opérateur sait ce qu’il déclare, le responsable
          sait ce que la donnée signifie et une correction ne réécrit pas
          silencieusement le passé. La{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle que les données personnelles collectées doivent être
            adéquates, pertinentes et nécessaires
          </a>
          . N’ajoutez donc pas le nom d’une personne ou une précision horaire «
          au cas où » : documentez la finalité.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {eventQuestions.map((question) => (
            <article
              key={question.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {question.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {question.text}
              </p>
            </article>
          ))}
        </div>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm sm:p-6 dark:border-zinc-800">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
            Journal minimal à recopier sur un ordre autorisé
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`ORDRE ET ÉTAPE :

DÉCISION QUE CETTE INFORMATION PERMET :

ÉVÉNEMENT OBSERVÉ :

HEURE DE L'ÉVÉNEMENT :
HEURE DE SAISIE :

QUANTITÉ ET UNITÉ :

RÔLE OU POSTE QUI DÉCLARE :
RÔLE QUI TRAITE LA SUITE :

SI L'ÉVÉNEMENT MANQUE :
SI L'UNITÉ EST FAUSSE :
SI LE MÊME ÉVÉNEMENT REVIENT DEUX FOIS :

CORRECTION AUTORISÉE ET HISTORIQUE CONSERVÉ :
SYSTÈME QUI REÇOIT LE RÉSULTAT :`}
          </pre>
        </div>

        <p>
          Remplissez cette fiche pendant une journée ordinaire avec un ordre de
          votre entreprise que les participants sont autorisés à consulter.
          Conservez la fiche dans l’environnement prévu pour ces informations :
          ne recopiez pas de données sensibles dans un document public ou un
          outil personnel.
        </p>

        <h2 id="poste">
          4. Une saisie acceptable en réunion peut être impossible dans
          l’atelier
        </h2>

        <p>
          Un bouton qui fonctionne sur l’ordinateur du bureau ne prouve rien sur
          le poste « Découpe ». Regardez le geste : l’opérateur doit-il retirer
          ses gants, traverser l’atelier, reprendre une session, chercher
          l’ordre, taper une quantité et choisir un motif pendant que le travail
          l’interrompt ? Une donnée plus détaillée ne vaut rien si personne ne
          peut la déclarer au bon moment.
        </p>

        <p>
          Le référentiel public{" "}
          <a
            href="https://design.numerique.gouv.fr/bien-concevoir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DesignGouv recommande de partir des besoins et de tester avec les
            personnes concernées
          </a>
          . L’
          <a
            href="https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anact propose aussi de simuler le travail futur
          </a>{" "}
          pour anticiper ce que le numérique change réellement. Ces ressources
          publiques donnent une méthode ; elles ne constituent pas une
          certification de votre projet.
        </p>

        <div className="not-prose my-7 grid gap-4 lg:grid-cols-3">
          {workplaceTests.map((test) => (
            <article
              key={test.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {test.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {test.scene}
              </p>
              <p className="mb-0 mt-4 border-t border-zinc-200 pt-4 text-sm font-medium leading-relaxed text-zinc-900 dark:border-zinc-800 dark:text-zinc-100">
                À vérifier : {test.verify}
              </p>
            </article>
          ))}
        </div>

        <p>
          Le meilleur premier écran peut donc être très court : scanner l’ordre,
          choisir un événement, saisir une quantité dans l’unité déjà affichée
          et confirmer. Les détails rares peuvent apparaître seulement lorsqu’un
          blocage ou une correction les exige. Le test doit aussi mesurer le
          temps et les erreurs ; il ne doit pas se limiter à demander si «
          l’interface plaît ».
        </p>

        <h2 id="cinq-reponses">
          5. Faites rejouer le même ordre à cinq réponses, pas à cinq discours
          commerciaux
        </h2>

        <p>
          Chaque option reçoit OF-FICTIF-2407, les mêmes rôles, les six mêmes
          événements, les six mêmes mauvais cas, le même réseau dégradé et une
          même durée de calcul des coûts. Une solution ne gagne pas parce que sa
          démonstration évite le lot fractionné ou parce que son devis oublie
          l’administration future.
        </p>

        <div className="not-prose my-8 space-y-5">
          {options.map((option) => (
            <article
              key={option.title}
              className={`rounded-2xl border p-5 sm:p-6 ${option.color}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {option.title}
              </h3>
              <dl className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Quand l’essayer
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.when}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Couverture à démontrer
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.coverage}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Effort au poste
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.effort}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Qualité et fraîcheur
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.quality}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Coût complet
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.cost}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Droits, données et historique
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.rights}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Continuité et retour arrière
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.continuity}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Responsable, sortie et arrêt
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.owner}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Si vous hésitez encore entre les familles, le guide{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou développement sur mesure
          </Link>{" "}
          approfondit le choix général. Si l’enjeu porte sur toute la gestion,
          poursuivez avec{" "}
          <Link href="/guides/erp-ou-logiciel-sur-mesure">
            ERP ou logiciel sur mesure
          </Link>
          . Ici, la décision reste volontairement limitée au suivi d’un ordre de
          fabrication.
        </p>

        <h2 id="frontieres">
          6. L’ordre doit naître une fois et le résultat revenir au bon endroit
        </h2>

        <p>
          Dans notre scénario, le logiciel de gestion crée OF-FICTIF-2407. Une
          application de suivi n’a pas à recréer la commande ni à devenir une
          deuxième liste de clients. Elle reçoit l’identifiant de l’ordre,
          l’étape, la quantité et l’unité autorisée ; elle retourne les
          événements ou le résultat convenu au système qui doit les conserver.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300">
              Logiciel de gestion
            </p>
            <p className="mb-0 mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Crée l’ordre, son identifiant et la quantité demandée
            </p>
          </div>
          <span
            className="text-center text-xl text-zinc-400"
            aria-hidden="true"
          >
            →
          </span>
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-wide text-violet-700 dark:text-violet-300">
              Suivi d’atelier
            </p>
            <p className="mb-0 mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Enregistre les événements, corrections et inconnues
            </p>
          </div>
          <span
            className="text-center text-xl text-zinc-400"
            aria-hidden="true"
          >
            →
          </span>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
              Résultat convenu
            </p>
            <p className="mb-0 mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Revient une fois, ou son rejet devient visible
            </p>
          </div>
        </div>

        <p>
          Décidez aussi qui corrige chaque donnée. Si l’unité de l’ordre est
          fausse, la correction appartient-elle au logiciel de gestion ou au
          suivi ? Si l’échange échoue, qui voit le rejet, qui peut le reprendre
          et comment une nouvelle tentative évite-t-elle un doublon ? Le guide{" "}
          <Link href="/guides/connecter-erp-crm-logiciel-metier">
            connecter les logiciels métier
          </Link>{" "}
          détaille ce contrat de données et les reprises d’erreur.
        </p>

        <p>
          Le cadre international ISA-95 décrit notamment les interfaces entre
          activités d’entreprise et opérations de fabrication. La{" "}
          <a
            href="https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard"
            target="_blank"
            rel="noopener noreferrer"
          >
            présentation officielle d’ISA-95
          </a>{" "}
          aide à raisonner sur ces frontières. Elle ne vous oblige pas à
          déployer toute la norme ni à reproduire son architecture pour un
          premier pilote.
        </p>

        <h2 id="machines">
          7. Une application de suivi ne doit pas devenir une commande de
          machine par accident
        </h2>

        <p>
          Afficher « blocage matière » ou recevoir une quantité déclarée relève
          du suivi de gestion. Démarrer une machine, modifier une consigne,
          programmer un automate, neutraliser une sécurité ou garantir la sûreté
          d’un procédé relève d’un autre chantier. Dans le vocabulaire
          technique, on distingue souvent l’informatique de gestion, dite{" "}
          <strong>IT</strong>, et la technologie qui conduit ou surveille le
          procédé physique, dite <strong>OT</strong>.
        </p>

        <InfoBox
          variant="amber"
          title="Lire ou commander une machine change le niveau de risque"
        >
          Si le projet lit directement un équipement ou lui envoie une
          instruction, cartographiez les équipements et les flux, analysez les
          risques, associez production, automatisme, sûreté et cybersécurité,
          vérifiez les conditions du constructeur, protégez l’interconnexion,
          testez un retour au fonctionnement sûr et prévoyez le mode dégradé.
          Les{" "}
          <a
            href="https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels"
            target="_blank"
            rel="noopener noreferrer"
          >
            guides de l’ANSSI sur la cybersécurité des systèmes industriels
          </a>{" "}
          et leurs{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/Guide_Systemes_industriels__Mesures_detaillees_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            mesures détaillées
          </a>{" "}
          expliquent pourquoi leurs contraintes ne se traitent pas comme celles
          d’un simple outil de bureau. Ce guide ne valide ni l’architecture ni
          la sûreté de votre site.
        </InfoBox>

        <p>
          Cette frontière évite deux erreurs opposées : surdimensionner un
          simple besoin d’avancement avec un programme industriel, ou connecter
          une application web à une machine comme s’il s’agissait d’un tableur.
          Le premier pilote peut rester volontairement manuel et produire déjà
          une information utile.
        </p>

        <h2 id="incidents">
          8. La démonstration normale ne suffit pas : faites passer les mauvais
          cas
        </h2>

        <p>
          Une solution paraît toujours simple avec une connexion parfaite, une
          unité correcte et un seul clic. Rejouez les incidents ci-dessous avec
          chacune des cinq options. Ce sont des conditions de test inventées
          pour OF-FICTIF-2407, pas des problèmes observés dans une entreprise.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {incidentTests.map((test) => (
            <article
              key={test.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {test.title}
              </h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Action de test
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {test.action}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Critère de réussite
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {test.pass}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Ajoutez ensuite vos exceptions sectorielles : changement de lot,
          contrôle bloquant, rebut soumis à validation, ordre annulé ou
          correction après clôture. Une obligation de traçabilité propre à votre
          activité doit être étudiée séparément ; ce guide ne peut ni la définir
          ni certifier sa conformité.
        </p>

        <h2 id="salaries">
          9. Mesurer l’état d’un ordre ne justifie pas de classer les salariés
        </h2>

        <p>
          L’heure de saisie, le poste et parfois un compte utilisateur peuvent
          rendre l’activité d’une personne identifiable. Cela ne donne pas le
          droit d’utiliser silencieusement le journal pour contrôler sa présence
          ou établir un classement individuel. Préférez l’agrégation par ordre,
          poste ou équipe lorsque l’identité n’est pas nécessaire à la décision.
        </p>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle qu’un contrôle de l’activité des personnes employées
          </a>{" "}
          doit répondre à une finalité précise, être nécessaire et proportionné,
          être porté à leur connaissance et respecter les règles de consultation
          des représentants du personnel applicables ; elle indique qu’une
          surveillance permanente est en général excessive. Ces repères sont
          généraux : faites examiner votre dispositif concret par les
          interlocuteurs compétents.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Décidez les droits par fonction
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              L’opérateur déclare ; la qualité décide d’un contrôle ; le
              responsable voit les blocages ; l’administrateur règle les rôles.
              Testez séparément consulter, créer, corriger, valider, exporter et
              administrer.
            </p>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-700 underline underline-offset-4 dark:text-blue-300"
            >
              Lire les recommandations CNIL sur les habilitations
            </a>
          </article>
          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Séparez l’historique métier des traces de sécurité
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              L’historique métier explique qu’une unité a été corrigée. Le
              journal de sécurité aide à détecter ou comprendre une opération.
              Définissez pour chacun finalité, accès, protection et durée.
            </p>
            <a
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300"
            >
              Lire les recommandations CNIL sur la traçabilité
            </a>
          </article>
        </div>

        <p>
          La CNIL donne pour les journaux de sécurité un repère général de six
          mois à un an, avec des exceptions à justifier. Ce repère ne fixe pas
          automatiquement la durée de l’historique de production : chaque
          finalité, obligation applicable et catégorie de donnée demande sa
          propre décision.
        </p>

        <h2 id="mesures">
          10. Mesurez d’abord ce qui est reçu, tardif ou encore inconnu
        </h2>

        <p>
          Avant un tableau de bord, fixez la cohorte, c’est-à-dire le groupe
          d’ordres comparables, puis la période, l’unité, les événements
          obligatoires, le seuil de retard, la règle de correction et les
          exclusions. Si le dénominateur vaut zéro, affichez « non calculable »,
          jamais 0 %. Les événements attendus mais absents ne doivent pas
          disparaître du calcul des seules déclarations reçues.
        </p>

        <h3>Retard et fraîcheur de l’information</h3>

        <FormulaBox>
          {`Retard d’une déclaration
= heure de saisie − heure de l’événement

Taux de déclarations tardives (%)
= événements reçus après le seuil
÷ événements effectivement reçus et éligibles
× 100

Taux de déclarations reçues (%)
= événements obligatoires reçus
÷ événements obligatoires arrivés à échéance
× 100

Fraîcheur au moment de la consultation
= heure de consultation − heure du dernier événement confirmé`}
        </FormulaBox>

        <p>
          Dans le scénario fictif, les six retards sont 0, 10, 3, 1, 4 et 2
          minutes. Si l’équipe fixe avant l’observation un seuil illustratif de
          5 minutes, un seul événement est tardif :
        </p>

        <FormulaBox>
          {`1 événement tardif ÷ 6 événements reçus × 100 = 16,7 %

Effectif : 6
Valeurs : 0, 1, 2, 3, 4 et 10 minutes
Médiane : (2 + 3) ÷ 2 = 2,5 minutes`}
        </FormulaBox>

        <p>
          Ce 16,7 % ne dit pas si tous les événements obligatoires ont été
          reçus. Il ne constitue ni un objectif ni une moyenne de PME : il
          décrit seulement six valeurs inventées. Sur vos données, publiez
          l’effectif, la médiane et une répartition lorsque quelques retards
          extrêmes déforment la moyenne.
        </p>

        <h3>Reprise, rebut et ordre à état inconnu</h3>

        <FormulaBox>
          {`Part placée une première fois en reprise (%)
= unités distinctes placées une première fois en reprise
÷ unités inspectées de la même cohorte
× 100

Taux de rebut (%)
= unités dont la décision finale est « rebut »
÷ unités inspectées de la même cohorte
× 100

Part d’ordres à état inconnu (%)
= ordres ouverts sans événement obligatoire reçu avant l’heure de coupure
÷ ordres ouverts de la même cohorte
× 100`}
        </FormulaBox>

        <p>
          À 15 h 20 dans l’exemple, 3 pièces sur 100 ont été placées une
          première fois en reprise, soit <strong>3 %</strong>. Cinq pièces sur
          100 ont une décision finale de rebut, soit <strong>5 %</strong>. Une
          pièce en reprise n’est pas encore un rebut. Si les pièces ne peuvent
          pas être reconnues individuellement ou si les unités changent, publiez
          un nombre d’événements de reprise plutôt qu’un taux trompeur.
        </p>

        <InfoBox variant="blue" title="Toujours refaire le contrôle inverse">
          Quantité acceptée + rebut final + quantité encore en reprise +
          en-cours + écart documenté doit reconstruire la quantité engagée selon
          vos règles. À la fin du scénario : 92 + 5 + 3 = 100 pièces inspectées.
          Les 50 pièces non engagées à 10 h 05 et le lot de 60 pièces transféré
          à midi montrent pourquoi le calcul doit être refait à chaque instant,
          pas recopié d’une capture.
        </InfoBox>

        <p>
          La durée calendaire d’une étape — heure de fin moins heure de début —
          n’est pas automatiquement du temps travaillé. Il faut une règle
          séparée pour les pauses, les blocages et les chevauchements. Aucun
          gain financier ne peut être déduit sans coût réellement évité ou
          capacité effectivement réaffectée ; réalisez ce calcul seulement après
          avoir rendu l’information fiable.
        </p>

        <h2 id="pilote">
          11. Commencez par un flux, un poste et une décision utile
        </h2>

        <p>
          Un pilote ne consiste pas à déployer un écran vide à toute l’usine. Il
          vérifie qu’un petit périmètre produit une information assez fiable
          pour une décision précise. Le conseil de « commencer petit » apparaît
          aussi dans l’article France Num cité plus haut ; gardez à l’esprit son
          auteur intéressé et validez la méthode avec votre atelier.
        </p>

        <ol>
          <li>
            <strong>Choisissez un type d’ordre et un poste.</strong> Évitez le
            flux exceptionnel qui n’arrive que deux fois par an, mais incluez
            déjà ses incidents ordinaires.
          </li>
          <li>
            <strong>Nommez la décision.</strong> Par exemple : répondre au
            client, traiter un blocage matière ou savoir si un transfert est
            réellement parti.
          </li>
          <li>
            <strong>Reconstituez une journée avant l’outil.</strong> Notez les
            événements, heures, unités, rôles, corrections et inconnues.
          </li>
          <li>
            <strong>Testez les cinq réponses.</strong> Une configuration de
            l’existant ou un produit standard doit pouvoir gagner honnêtement.
          </li>
          <li>
            <strong>Faites essayer au poste.</strong> Observez gestes, gants,
            interruptions, terminal partagé, réseau et corrections.
          </li>
          <li>
            <strong>Rejouez les incidents.</strong> Coupure, double scan,
            mauvaise unité et reprise non recomptée deviennent des critères
            d’acceptation.
          </li>
          <li>
            <strong>Décidez avant d’élargir.</strong> Continuez, corrigez,
            changez d’option ou arrêtez selon des faits écrits ; ne généralisez
            pas seulement parce que l’écran fonctionne.
          </li>
        </ol>

        <p>
          L’action utile aujourd’hui ne demande donc aucun achat : prenez un
          ordre autorisé, reconstruisez sa journée et entourez les moments où
          deux personnes ne donnent pas le même état. Ces désaccords deviennent
          les premières règles à décider. Si les étapes changent chaque semaine,
          stabilisez-les avant d’automatiser ; le guide{" "}
          <Link href="/guides/automatiser-processus-metier">
            automatiser un processus métier
          </Link>{" "}
          vous aide à faire cet arbitrage.
        </p>

        <h2 id="aide">
          12. Le sur-mesure est utile pour un ajout ciblé, pas pour éviter de
          choisir vos règles
        </h2>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Un échange peut être utile si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>les étapes et exceptions propres au métier sont stables ;</li>
              <li>la saisie doit réellement s’adapter au poste ;</li>
              <li>un ajout ciblé doit se relier à l’ERP ou à la GPAO ;</li>
              <li>les données permettent de tester le résultat ;</li>
              <li>les options existantes ont été essayées sans biais.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Nous vous dirons plutôt d’attendre ou de chercher ailleurs si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>une GPAO standard couvre le besoin complet ;</li>
              <li>les données de base ne se réconcilient pas ;</li>
              <li>le processus change encore à chaque commande ;</li>
              <li>
                le but réel est une surveillance individuelle sans cadre ;
              </li>
              <li>
                le besoin porte sur la conduite ou la sûreté des machines.
              </li>
            </ul>
          </article>
        </div>

        <GuideInlineCTA
          title="Présentez-nous un flux de production, pas une liste d’écrans"
          description="Le formulaire guidé prend environ trois minutes. Décrivez l’ordre, le poste, les événements et la décision qui manque. Une personne de l’équipe relit chaque demande et répond personnellement ; aucun délai n’est garanti. Le clic ne produit automatiquement ni diagnostic, ni périmètre, ni rendez-vous, ni devis."
          tags={[
            "Une solution standard peut suffire",
            "Premier lot volontairement ciblé",
            "Relecture humaine",
          ]}
          ctaLabel="Présenter mon flux de production"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <p>
          Le bon choix est le système le plus simple qui donne une information
          assez fraîche et assez fiable pour la décision visée. Il peut s’agir
          du support actuel mieux tenu, d’un module déjà payé, d’un logiciel
          standard, d’un assemblage no-code ou d’un ajout sur mesure. Le
          scénario et les incidents doivent départager ces réponses avant le
          devis, pas après le déploiement.
        </p>

        <h2 id="sources">Sources consultées et limites du guide</h2>

        <p>
          Sources consultées le 23 juillet 2026. Elles éclairent les familles
          d’outils, la conception avec les utilisateurs, les données
          personnelles et la frontière industrielle. Elles ne constituent ni un
          audit de votre atelier, ni un conseil juridique, ni une validation de
          sûreté, de cybersécurité ou de conformité sectorielle.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/production-et-fabrication/gpao-la-solution-numerique-pour-mieux-gerer-la"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — « GPAO : la solution numérique pour mieux gérer la
              production »
            </a>{" "}
            — contenu d’expert rédigé par SetInUp, prestataire et solution citée
            dans l’article ; utile pour les définitions et étapes, pas comme
            preuve indépendante des bénéfices annoncés.
          </li>
          <li>
            <a
              href="https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard"
              target="_blank"
              rel="noopener noreferrer"
            >
              International Society of Automation — présentation d’ISA-95
            </a>{" "}
            — cadre officiel pour raisonner sur les activités et échanges, sans
            imposer une implémentation complète.
          </li>
          <li>
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DesignGouv — Bien concevoir un service numérique
            </a>{" "}
            — méthode publique de conception et de test avec les personnes
            concernées.
          </li>
          <li>
            <a
              href="https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anact — Boîte à outils QVCT et numérique
            </a>{" "}
            — repères publics pour simuler le travail futur et anticiper ses
            changements.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              minimiser les données
            </a>
            ,{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noopener noreferrer"
            >
              gérer les habilitations
            </a>
            ,{" "}
            <a
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noopener noreferrer"
            >
              tracer les opérations
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
              target="_blank"
              rel="noopener noreferrer"
            >
              contrôler l’activité des personnes employées
            </a>
            .
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — La cybersécurité des systèmes industriels
            </a>{" "}
            et{" "}
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/Guide_Systemes_industriels__Mesures_detaillees_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              mesures détaillées pour les systèmes industriels
            </a>{" "}
            — méthodes et recommandations à adapter au site, sans conclusion
            automatique sur l’architecture appropriée.
          </li>
        </ul>

        <p>
          Les valeurs OF-FICTIF-2407, 100 pièces, 16,7 %, 3 % et 5 % sont
          entièrement illustratives. Elles ne représentent ni une performance
          observée, ni un benchmark, ni un gain attendu. Ce guide exclut le
          choix complet d’un ERP, l’ordonnancement avancé, le calcul générique
          du taux de rendement synthétique, la commande des machines, les
          obligations sectorielles de traçabilité et toute certification.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
