import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { ProcessAutomationDecisionWorksheet } from "@/components/guides/ProcessAutomationDecisionWorksheet";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("automatiser-processus-metier");

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
        alt: "Choisir le premier processus à automatiser dans son entreprise",
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
      name: "Automatiser un processus métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel processus faut-il automatiser en premier ?",
    answer:
      "Commencez par un flux fréquent, stable, mesurable et réversible, avec une source de données, un résultat vérifiable, une file d’exceptions, un responsable et un mode manuel. Une ressaisie entre deux logiciels ou l’orientation de demandes complètes peuvent être de bons premiers essais. Une décision commerciale exceptionnelle, un paiement irréversible ou un planning rempli de cas implicites sont de moins bons candidats.",
  },
  {
    question: "Faut-il forcément développer un logiciel sur mesure ?",
    answer:
      "Non. Vérifiez d’abord si vous pouvez supprimer une étape, mieux utiliser un logiciel déjà payé ou activer une fonction existante. Un connecteur entre deux outils peut ensuite suffire. Le développement sur mesure devient pertinent lorsque plusieurs rôles, règles propres à l’entreprise ou intégrations importantes ne sont pas correctement couverts par une solution standard.",
  },
  {
    question:
      "L’intelligence artificielle est-elle nécessaire pour automatiser ?",
    answer:
      "Non. Une règle classique est souvent plus fiable lorsque les données et la décision sont claires. L’intelligence artificielle peut aider à classer un message, extraire une information d’un document ou préparer un brouillon. Sa réponse n’étant pas certaine à chaque fois, prévoyez un contrôle humain lorsque l’erreur peut avoir une conséquence commerciale, financière ou juridique.",
  },
  {
    question: "Comment calculer si une automatisation sera rentable ?",
    answer:
      "Mesurez volume, temps actif, corrections et attente sur un cycle représentatif. Séparez trésorerie réellement libérée, capacité utile, embauche évitée, marge attribuable et risque réduit, sans compter deux fois le même effet. Comparez ensuite toutes les options sur le même horizon avec coûts externes, temps interne, données, formation, double fonctionnement, abonnement, surveillance, maintenance, incidents, évolution et sortie.",
  },
  {
    question:
      "Une heure de travail supprimée économise-t-elle son coût horaire ?",
    answer:
      "Pas automatiquement. Si la personne reste salariée et qu’aucune dépense ne disparaît, l’entreprise libère une capacité mais pas de trésorerie. Cette capacité crée une valeur économique seulement si elle absorbe une charge identifiée, évite réellement un recrutement ou contribue à une marge attribuable. Utiliser le coût horaire comme proxy exige donc une hypothèse explicite et un contrôle après lancement.",
  },
  {
    question: "Combien de temps faut-il pour automatiser un processus ?",
    answer:
      "Il n’existe pas de délai sérieux sans connaître règles, données, systèmes et exceptions. L’observation doit couvrir un cycle représentatif : plusieurs jours pour un flux quotidien, une clôture complète pour un flux mensuel, parfois une période normale et un pic pour une activité saisonnière. Le calendrier du pilote doit ensuite distinguer préparation, connexion, tests d’échec, correction, mise en service, montée d’adoption et revue à 30 puis 90 jours.",
  },
  {
    question: "Qui doit s’occuper de l’automatisation après son lancement ?",
    answer:
      "Une personne de l’entreprise doit rester responsable de la règle métier et une autre, parfois la même dans une petite structure, doit recevoir les alertes et traiter les échecs. Le prestataire peut surveiller et maintenir la partie technique selon le contrat. Les utilisateurs doivent savoir reconnaître un cas bloqué et revenir temporairement au traitement manuel.",
  },
  {
    question: "Comment éviter qu’une erreur soit répétée automatiquement ?",
    answer:
      "Testez champs manquants, doublons, droits insuffisants, panne partielle, reprise, changement de règle et retour manuel. Chaque cas doit avoir un identifiant, laisser une trace compréhensible et rejoindre une file attribuée s’il échoue. Ajoutez une validation humaine effective avant toute action difficile à annuler et vérifiez qu’elle peut réellement modifier le résultat.",
  },
  {
    question: "Quand faut-il arrêter une automatisation après le pilote ?",
    answer:
      "Arrêtez ou réduisez le périmètre si une action critique échappe au contrôle, si les échecs restent invisibles, si la file manuelle dépasse la tolérance, si le coût réel franchit le plafond ou si la capacité utile reste sous le seuil décidé. Écrivez ces conditions avant le pilote, puis tranchez à la fin du pilote, à 30 jours et à 90 jours.",
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
          { label: "Automatiser un processus métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Commencez par un flux fréquent, stable, observable et réversible. Mesurez un cycle représentatif, fermez les motifs d’arrêt, puis comparez simplification, fonction existante, connecteur, assistance et sur-mesure sur le même horizon."
        heroAction={{
          href: "#diagnostic",
          label: "Tester un processus",
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
            title: "4 STOP non compensables",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Diagnostic local copiable",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Cash et capacité séparés",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/signes-besoin-logiciel-metier",
            label: "Vérifier si l’entreprise a besoin d’un logiciel métier",
          },
          {
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou développement sur mesure",
          },
          {
            href: "/guides/zapier-make-ou-developpement-sur-mesure",
            label: "Choisir entre Make, Zapier et code dédié",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d’une application métier",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d’un logiciel sur mesure",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Développement d’outils internes",
          },
        ]}
        faqTitle="Automatiser un processus : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Dans votre entreprise, la première tâche à automatiser n’est pas
          forcément celle qui agace le plus. Choisissez un flux fréquent, dont
          le début et le résultat sont écrits, dont les données ont une source
          fiable et dont une erreur se voit assez tôt pour revenir au traitement
          manuel. Si le résultat correct reste discuté, si les exceptions ne
          sont pas orientées ou si personne ne surveillera les échecs,{" "}
          <strong>n’automatisez pas encore l’exécution complète</strong>.
        </p>

        <p>
          Ce guide vous fait partir du travail réel, pas d’un outil. Vous allez
          comparer plusieurs candidats, éliminer les risques non compensables,
          essayer de supprimer l’étape avant de l’automatiser, puis mettre les
          solutions restantes sur le même horizon. Le calcul séparera l’argent
          réellement économisé, la capacité libérée, une embauche éventuellement
          évitée, la marge attribuable et le risque réduit. Ces catégories ne
          doivent pas être additionnées lorsqu’elles décrivent le même effet.
        </p>

        <p>
          Si vous avez déjà choisi le cas et que le même client, la même
          commande ou la même intervention est retapé dans plusieurs outils,
          passez directement au guide pour{" "}
          <Link href="/guides/automatiser-saisie-donnees-entreprise">
            supprimer les doubles saisies sans cacher les dossiers refusés
          </Link>
          . Vous y suivrez une seule information et déciderez où la corriger,
          quoi transmettre et qui reprend la main si le transfert bloque.
        </p>

        <InfoBox variant="blue" title="La réponse en 90 secondes">
          Un bon premier candidat est <strong>fréquent</strong>,{" "}
          <strong>stable</strong>, <strong>mesurable</strong> et{" "}
          <strong>réversible</strong>. Il possède une source de données, un
          responsable, une file d’exceptions et un mode manuel. Commencez par un
          pilote borné ; ne retirez l’ancien fonctionnement qu’après avoir
          provoqué les erreurs, mesuré l’adoption et comparé le prévu au réel.
          <p className="mb-2 mt-4 font-semibold">
            Si vous ne lisez que cinq étapes :
          </p>
          <ol className="mb-0">
            <li><a href="#observation">observer un cycle réel</a> ;</li>
            <li><a href="#diagnostic">fermer les quatre STOP</a> ;</li>
            <li><a href="#simplifier">supprimer ou simplifier d’abord</a> ;</li>
            <li><a href="#options">comparer les options au même horizon</a> ;</li>
            <li><a href="#suivi">piloter puis décider sur le réalisé</a>.</li>
          </ol>
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "definition",
              label: "1. Définir le résultat avant l’outil",
            },
            {
              id: "observation",
              label: "2. Observer un cycle représentatif",
            },
            { id: "diagnostic", label: "3. Tester un candidat" },
            { id: "simplifier", label: "4. Supprimer avant d’automatiser" },
            { id: "options", label: "5. Comparer six réponses" },
            { id: "techniques", label: "6. Choisir la technique après" },
            {
              id: "roi",
              label: "7. Séparer argent, capacité et risque",
            },
            { id: "responsabilites", label: "8. Financer l’exploitation" },
            { id: "pilote-recette", label: "9. Tester les échecs" },
            { id: "suivi", label: "10. Contrôler à 30 et 90 jours" },
            { id: "avis", label: "11. Notre avis et nos mauvais cas" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="definition">1. Définir le résultat avant de parler d’outil</h2>

        <p>
          Ne partez pas du nom d’un outil. Partez du résultat que vous voulez
          obtenir. Par exemple : « lorsqu’un devis est signé, créer le client
          dans la facturation, transmettre les bonnes coordonnées et prévenir la
          comptabilité si une information manque ». Cette phrase montre le
          début, la fin, les données et la personne qui intervient lorsque le
          cas n’est pas normal.
        </p>

        <p>
          Un <strong>processus métier</strong> est simplement cette suite
          d’étapes, depuis un événement de départ jusqu’à un résultat utile pour
          l’entreprise. Une tâche n’en est qu’une partie. Automatiser l’envoi
          d’un courriel sans préciser qui doit le recevoir, avec quelles données
          et dans quels cas il ne faut pas l’envoyer peut faire gagner quelques
          secondes tout en créant de nouveaux problèmes.
        </p>

        <ul>
          <li>
            « Mettre de l’IA dans les devis » devient : préparer un brouillon à
            partir d’une demande complète, puis faire valider le prix par le
            responsable.
          </li>
          <li>
            « Connecter le commercial à la comptabilité » devient : créer une
            seule fois le client signé et signaler clairement toute donnée
            refusée.
          </li>
          <li>
            « Automatiser les relances » devient : relancer les dossiers
            incomplets, arrêter dès réception et confier les litiges à une
            personne.
          </li>
        </ul>

        <h2 id="observation">
          2. Observer un cycle représentatif, pas forcément une semaine
        </h2>

        <p>
          Une semaine ordinaire suffit parfois pour une tâche quotidienne. Elle
          ne suffit pas pour une clôture mensuelle, une campagne saisonnière, un
          inventaire ou un dossier qui traverse plusieurs validations. Choisissez
          la période qui contient les cas normaux, le pic, les corrections et au
          moins un échec. Notez séparément le temps actif, l’attente et le
          retravail : automatiser l’attente ne libère aucune heure de travail.
        </p>

        <p>
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noreferrer"
          >
            France Num
          </a>{" "}
          recommande de mesurer fréquence, durée et personnes, puis de
          cartographier étapes, informations, exceptions et responsabilités
          avant d’automatiser. Le dossier public a été mis à jour le 9 juillet
          2026. Nous retenons sa méthode ; nous ne reprenons ni promesse
          générique de gain, ni prix comme référence de marché.
        </p>

        <FormulaBox>
          {[
            "FICHE D’OBSERVATION D’UN PROCESSUS",
            "",
            "Période observée et raison de ce choix :",
            "Ce qui déclenche le travail :",
            "Résultat attendu :",
            "Nombre de cas par semaine ou par mois :",
            "Temps actif / attente / correction :",
            "Logiciels et documents utilisés :",
            "Source de chaque donnée :",
            "Étapes normales :",
            "Trois exceptions les plus fréquentes :",
            "Cas rare mais critique :",
            "Conséquence d’une erreur :",
            "Personne qui décide en cas de doute :",
            "Solution manuelle si l’outil ne fonctionne plus :",
            "Mesure de départ, cible et tolérance :",
          ].join("\n")}
        </FormulaBox>

        <GuideTable
          caption="Choisir une période qui ne masque pas le travail réel"
          headers={["Type de flux", "Période minimale utile", "Piège évité"]}
          rows={[
            [
              "Tâche quotidienne stable",
              "Plusieurs jours avec au moins un incident",
              "Décider sur la journée exceptionnellement calme",
            ],
            [
              "Clôture ou facturation",
              "Un cycle complet, puis la reprise des écarts",
              "Compter la saisie sans compter la réconciliation",
            ],
            [
              "Activité saisonnière",
              "Une période normale et un pic comparable",
              "Dimensionner sur un volume qui ne reviendra pas",
            ],
            [
              "Dossier long ou multi-équipe",
              "Du déclencheur jusqu’au résultat accepté",
              "Déplacer le travail vers l’équipe suivante",
            ],
          ]}
        />

        <h2 id="diagnostic">3. Tester un candidat sans score magique</h2>

        <p>
          Volume et temps ne suffisent pas. Une tâche très coûteuse reste un
          mauvais premier pilote si personne ne sait reconnaître le bon
          résultat ou reprendre la main. Le diagnostic ci-dessous distingue les
          prérequis documentables des quatre motifs d’arrêt. Un motif critique
          ne peut jamais être compensé par une note élevée ailleurs.
        </p>

        <p>
          Ce tri ne classe pas les processus avec un score de marché. Il faut un
          volume et un travail réellement observés, aucun élément inconnu, au
          moins cinq prérequis documentés et aucun STOP. Les deux autres
          prérequis peuvent rester partiels uniquement si le pilote sert
          précisément à les prouver.
        </p>

        <GuideTable
          caption="Les sept prérequis d’un premier pilote maîtrisable"
          headers={["Question", "Preuve attendue", "Si elle manque"]}
          rows={[
            [
              "Le flux a-t-il un début et une fin ?",
              "Déclencheur, résultat et hors-périmètre écrits",
              "Cartographier avant de choisir l’outil",
            ],
            [
              "La charge est-elle mesurée ?",
              "Volume, temps actif, corrections et attente sur un vrai cycle",
              "Observer au lieu d’extrapoler",
            ],
            [
              "Les règles sont-elles stables ?",
              "Version des règles et personne qui les fait évoluer",
              "Garder l’exécution humaine",
            ],
            [
              "Les données ont-elles une source ?",
              "Source désignée, champs obligatoires et doublons repérables",
              "Nettoyer les données d’abord",
            ],
            [
              "Les exceptions sont-elles orientées ?",
              "File, responsable, délai et action autorisée",
              "Le pilote fabriquerait du travail invisible",
            ],
            [
              "Le résultat est-il vérifiable et réversible ?",
              "Contrôle indépendant, identifiant et retour arrière",
              "Limiter l’outil à une préparation",
            ],
            [
              "Qui surveille après le lancement ?",
              "Propriétaire métier, alertes et mode manuel",
              "Ne pas mettre le flux en production",
            ],
          ]}
        />

        <ProcessAutomationDecisionWorksheet />

        <h3>Comparer au moins trois tâches, une par une</h3>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une entreprise compare
          cinq irritants. L’envoi d’un accusé de réception pour les demandes
          complètes est un bon premier essai : le volume est connu, les règles
          sont simples et les demandes ambiguës peuvent rester dans une liste
          traitée par une personne. Accorder automatiquement une remise
          exceptionnelle serait au contraire prématuré, car la décision dépend
          encore du contexte commercial.
        </p>

        <GuideTable
          caption="Lecture simple de cinq tâches fictives"
          headers={["Tâche observée", "Décision raisonnable", "Pourquoi"]}
          rows={[
            [
              "Orienter les demandes complètes",
              "Tester en premier",
              "Fréquent, vérifiable et facile à reprendre à la main",
            ],
            [
              "Recopier un client signé vers la facturation",
              "Tester après contrôle des doublons",
              "Gain clair, mais une erreur touche la comptabilité",
            ],
            [
              "Préparer le rapport mensuel",
              "Vérifier les fonctions existantes",
              "Une source unique peut suffire sans nouveau développement",
            ],
            [
              "Accorder une remise exceptionnelle",
              "Garder la décision humaine",
              "La règle change selon la relation commerciale",
            ],
            [
              "Replanifier toutes les urgences terrain",
              "Clarifier d’abord les priorités",
              "Trop d’exceptions pour un premier essai",
            ],
          ]}
        />

        <h2 id="simplifier">4. Supprimer l’étape avant de l’automatiser</h2>

        <p>
          Reprenez la carte du flux avec les personnes qui réalisent le travail.
          Supprimez les doubles validations sans rôle clair, choisissez une
          seule source par donnée, rendez l’information manquante visible et
          rapprochez les étapes qui se répondent. Mesurez à nouveau. Cette
          deuxième mesure devient le vrai scénario de référence : comparer un
          outil à un processus volontairement mal organisé gonflerait
          artificiellement son intérêt.
        </p>

        <InfoBox
          variant="emerald"
          title="La meilleure automatisation peut être une suppression"
        >
          Si une règle de saisie, une vue déjà disponible ou la suppression
          d’une validation résout le problème, arrêtez l’étude ici. Vous avez
          obtenu le résultat sans abonnement, intégration, surveillance ni coût
          de sortie supplémentaires.
        </InfoBox>

        <h2 id="options">5. Comparer six réponses sur le même résultat</h2>

        <p>
          Une fois la tâche comprise, comparez les solutions sur le même besoin.
          Fixez le même résultat, les mêmes données, le même volume, la même
          durée et les mêmes cas d’échec. La meilleure n’est pas la plus
          impressionnante : c’est celle qui produit durablement le résultat
          attendu avec le meilleur compromis entre valeur, coût et risque.
        </p>

        <GuideTable
          caption="Six réponses à chiffrer sur le même périmètre"
          headers={[
            "Réponse",
            "Quand elle peut gagner",
            "Coûts et limites à rendre comparables",
          ]}
          rows={[
            [
              "Ne rien changer pour l’instant",
              "Le gain est faible ou les règles bougent encore",
              "Charge actuelle, erreurs, date de réexamen et coût de l’attente",
            ],
            [
              "Supprimer ou simplifier une étape",
              "La difficulté vient d’une habitude ou d’une mauvaise saisie",
              "Temps de changement, formation et contrôle réellement conservé",
            ],
            [
              "Utiliser une fonction déjà disponible",
              "Votre logiciel couvre le cas sans contournement important",
              "Forfait, paramétrage, temps interne, limites, support et export",
            ],
            [
              "Relier deux outils",
              "Les règles sont claires et les logiciels peuvent échanger",
              "Mise en place, usages, rejets, surveillance, maintenance et sortie",
            ],
            [
              "Préparer automatiquement, puis faire valider",
              "Le logiciel peut assister sans prendre la décision finale",
              "Coût du modèle, revue humaine résiduelle, erreurs et traçabilité",
            ],
            [
              "Créer un outil sur mesure",
              "Plusieurs rôles et règles propres ne sont pas couverts ailleurs",
              "Cadrage, réalisation, migration, adoption, exploitation et reprise",
            ],
          ]}
        />

        <h3>Trois volumes fictifs, trois options gagnantes</h3>

        <p>
          L’exemple suivant conserve le même flux — orienter des demandes
          complètes —, le même horizon de 36 mois et le même coût horaire
          illustratif de 44,20 €. Les coûts ne sont ni des tarifs Hagnéré Code,
          ni un benchmark : ils servent uniquement à montrer qu’une conclusion
          change avec le volume, la couverture et la montée en charge.
        </p>

        <FormulaBox>
          {[
            "HYPOTHÈSES FICTIVES COMMUNES — 36 MOIS",
            "",
            "Fonction native : en service au mois 1 ; 36 mois à 40 €/mois",
            "                  + 1 000 € externe + 16 h internes + 300 € de sortie",
            "                  25 % couverts ; montée linéaire en 2 mois",
            "",
            "Connecteur :      en service au mois 2 ; 35 mois à 150 €/mois",
            "                  + 5 000 € externe + 40 h internes + 1 200 € de sortie",
            "                  55 % couverts ; montée linéaire en 3 mois",
            "",
            "Sur-mesure :      en service au mois 4 ; 33 mois à 350 €/mois",
            "                  + 14 000 € externe + 80 h internes + 2 500 € de sortie",
            "                  80 % couverts ; montée linéaire en 6 mois",
            "",
            "Valeur = heures × 44,20 € × couverture × mois équivalents ÷ 12",
            "Mois équivalents à pleine couverture : 35,5 / 34 / 30,5",
          ].join("\n")}
        </FormulaBox>

        <GuideTable
          caption="Valeur de capacité provisoire moins coûts économiques, selon le volume"
          headers={["Charge actuelle", "Option", "Valeur nette et lecture"]}
          rows={[
            [
              "132 h/an",
              "Fonction native",
              "+ 868 € · meilleure valeur nette modélisée",
            ],
            [
              "132 h/an",
              "Connecteur",
              "− 4 126 € · coût supérieur à la capacité modélisée",
            ],
            [
              "132 h/an",
              "Sur-mesure",
              "− 19 723 € · le développement détruit la valeur modélisée",
            ],
            [
              "600 h/an",
              "Fonction native",
              "+ 16 167 €",
            ],
            [
              "600 h/an",
              "Connecteur",
              "+ 28 109 € · meilleure valeur nette modélisée",
            ],
            [
              "600 h/an",
              "Sur-mesure",
              "+ 22 338 €",
            ],
            [
              "1 800 h/an",
              "Fonction native",
              "+ 55 394 €",
            ],
            [
              "1 800 h/an",
              "Connecteur",
              "+ 110 763 €",
            ],
            [
              "1 800 h/an",
              "Sur-mesure",
              "+ 130 186 € · meilleure valeur nette si les 80 % sont prouvés",
            ],
          ]}
        />

        <p>
          Ce tableau valorise une <strong>capacité potentiellement utile</strong>
          au coût horaire ; il ne prédit pas une économie bancaire. Un ROI
          supérieur ne suffit pas non plus si l’option ne sait pas traiter le
          volume, les rôles ou les exceptions. Refaites le calcul avec vos
          charges, vos coûts et la part réellement réutilisable, puis vérifiez
          le résultat à 30 et 90 jours.
        </p>

        <GuideTable
          caption="Le même cas de 600 h/an change de gagnant selon l’horizon"
          headers={["Horizon depuis le début", "Option", "Valeur nette et lecture"]}
          rows={[
            [
              "12 mois",
              "Fonction native",
              "+ 3 867 € · meilleure valeur nette modélisée",
            ],
            [
              "12 mois",
              "Connecteur",
              "+ 2 537 €",
            ],
            [
              "12 mois",
              "Sur-mesure",
              "− 11 694 €",
            ],
            [
              "36 mois",
              "Fonction native",
              "+ 16 167 €",
            ],
            [
              "36 mois",
              "Connecteur",
              "+ 28 109 € · meilleure valeur nette modélisée",
            ],
            [
              "36 mois",
              "Sur-mesure",
              "+ 22 338 €",
            ],
            [
              "60 mois",
              "Fonction native",
              "+ 28 467 €",
            ],
            [
              "60 mois",
              "Connecteur",
              "+ 53 681 €",
            ],
            [
              "60 mois",
              "Sur-mesure",
              "+ 56 370 € · gagne de peu, conclusion sensible",
            ],
          ]}
        />

        <p>
          Dans cette seconde lecture, la sortie est conservée même à 12 mois :
          l’horizon signifie que l’entreprise réévalue ou quitte l’option à
          cette date. Les mois de préparation ne produisent aucune capacité et
          l’abonnement ne commence qu’à la mise en service. Une autre convention
          de contrat, de sortie ou de rampe donnera d’autres résultats ; écrivez
          donc la chronologie avant de comparer.
        </p>

        <p>
          Si le problème vient d’un tableur devenu central, poursuivez avec le
          guide{" "}
          <Link href="/guides/transformer-excel-en-application">
            transformer Excel en application métier
          </Link>
          . Si vous hésitez entre une plateforme visuelle et un développement,
          consultez{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou sur mesure
          </Link>
          .
        </p>

        <h2 id="techniques">
          6. Choisir la technique seulement après le processus
        </h2>

        <p>
          Une <strong>API</strong> est un accès prévu par un logiciel pour
          échanger des données avec un autre. Un <strong>connecteur</strong> est
          une liaison déjà préparée entre deux outils. Une automatisation RPA
          peut émuler des actions d’utilisateur et appliquer des règles sur des
          applications existantes ; le « robot de clics » n’en est qu’une forme,
          particulièrement sensible aux changements d’écran. L’intelligence
          artificielle peut classer, extraire ou proposer une réponse lorsque
          l’entrée varie, mais son résultat doit être évalué comme une
          estimation, pas comme une règle certaine.
        </p>

        <GuideTable
          caption="La question de contrôle propre à chaque technique"
          headers={["Technique", "Question avant choix", "Preuve après pilote"]}
          rows={[
            [
              "Règle dans l’outil existant",
              "La fonction couvre-t-elle aussi les exceptions et l’export ?",
              "Cas normaux et anormaux rejoués dans la version réellement utilisée",
            ],
            [
              "API ou connecteur",
              "Que deviennent rejet, doublon, limite d’usage et panne partielle ?",
              "Identifiants communs, file d’échec, alerte et reprise sans double action",
            ],
            [
              "RPA / interface",
              "Qui détecte qu’un écran, un champ ou un droit a changé ?",
              "Version testée, capture de l’échec et retour au mode manuel",
            ],
            [
              "IA",
              "Quel jeu réel mesure qualité, erreurs graves et cas à faire relire ?",
              "Seuil, échantillon versionné, contrôle humain effectif et suivi de dérive",
            ],
            [
              "Développement sur mesure",
              "La règle propre justifie-t-elle code, exploitation et dépendance ?",
              "Code, données, accès, documentation, tests et procédure de reprise remis",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Un contrôle humain doit pouvoir changer le résultat"
        >
          La{" "}
          <a
            href="https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee"
            target="_blank"
            rel="noreferrer"
          >
            CNIL
          </a>{" "}
          explique que l’article 22 du RGPD encadre certaines décisions fondées
          exclusivement sur un traitement automatisé lorsqu’elles produisent un
          effet juridique ou affectent significativement une personne. Les
          exceptions et garanties dépendent du cas. Une validation décorative,
          jamais contestée faute de temps ou d’information, n’est pas un vrai
          contrôle. Si le flux utilise de l’IA, vérifiez aussi le{" "}
          <a
            href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act"
            target="_blank"
            rel="noreferrer"
          >
            calendrier officiel du règlement européen sur l’IA
          </a>{" "}
          selon le système et l’usage. Toute automatisation n’est ni une
          décision visée par l’article 22, ni un système d’IA réglementé de la
          même manière. Faites qualifier les cas sensibles ; ce guide n’est pas
          un avis juridique.
        </InfoBox>

        <h2 id="roi">7. Séparer argent, capacité, revenu et risque</h2>

        <p>
          Le temps supprimé ne devient pas automatiquement de l’argent. Une
          personne déjà salariée reste payée ; elle dispose d’une capacité qui
          ne crée de valeur que si l’entreprise sait ce qu’elle en fera.
          À l’inverse, des heures supplémentaires, une prestation ou une licence
          réellement supprimées peuvent libérer de la trésorerie. Écrivez chaque
          effet dans un registre distinct et interdisez le double comptage.
        </p>

        <FormulaBox>
          {[
            "CHARGE ACTUELLE",
            "heures = volume × temps actif + corrections",
            "",
            "CAPACITÉ UTILE",
            "heures = heures techniquement supprimées",
            "       − revue humaine − exceptions − surveillance",
            "capacité utile = heures nettes × adoption × réaffectation prouvée",
            "",
            "TRÉSORERIE",
            "cash = dépenses réellement supprimées − nouveaux décaissements",
            "",
            "COÛT ÉCONOMIQUE",
            "coût = externe initial + temps interne + données + formation",
            "      + double fonctionnement + abonnement + surveillance",
            "      + maintenance + incidents + évolution + sortie",
          ].join("\n")}
        </FormulaBox>

        <GuideTable
          caption="Cinq registres économiques à conserver séparés"
          headers={["Registre", "Preuve acceptable", "Double comptage à éviter"]}
          rows={[
            [
              "Trésorerie libérée",
              "Facture, heures supplémentaires, intérim, licence ou poste budgété réellement supprimé",
              "Valoriser aussi les mêmes heures comme capacité",
            ],
            [
              "Capacité utile",
              "Heures nettes effectivement réaffectées à une charge identifiée",
              "Appeler cette capacité économie bancaire",
            ],
            [
              "Embauche évitée",
              "Charge future, date et décision d’embauche réellement différée",
              "Ajouter coût du poste et valeur des mêmes heures",
            ],
            [
              "Marge additionnelle",
              "Unités supplémentaires × marge unitaire × part attribuable",
              "Ajouter revenu brut et capacité qui produit ce revenu",
            ],
            [
              "Risque réduit",
              "Probabilité et impact avant, résiduels après contrôles",
              "Ajouter le retravail déjà compté dans la charge",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/government/publications/digital-and-data-benefits-framework/digital-and-data-benefits-framework"
            target="_blank"
            rel="noreferrer"
          >
            cadre britannique des bénéfices numériques
          </a>{" "}
          publié le 7 avril 2026 part lui aussi d’une base de service, sépare
          plusieurs familles de bénéfices et demande des méthodes adaptées à
          chacune. Le{" "}
          <a
            href="https://www.digital.gov.au/policy/benefits-management-policy/guidance"
            target="_blank"
            rel="noreferrer"
          >
            guide australien de gestion des bénéfices
          </a>{" "}
          exige une mesure de départ, une cible, un propriétaire, des
          dépendances et les effets négatifs. Ces cadres sont conçus pour le
          secteur public ; nous en adaptons la discipline, pas leurs seuils.
        </p>

        <h3>Un calcul exact peut rester économiquement trompeur</h3>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une PME de services de 18
          salariés traite 30 demandes par semaine. Chaque demande prend 12
          minutes, auxquelles s’ajoute 1 h 30 de rapprochement hebdomadaire,
          pendant 46 semaines. Le travail représente donc 345 heures par an.
        </p>

        <FormulaBox>
          {[
            "Charge annuelle observée",
            "= ((30 cas × 12 min ÷ 60) + 1,5 h de rapprochement) × 46",
            "= (6 h + 1,5 h) × 46",
            "= 345 h/an",
            "",
            "Attention : volume × durée seule donnerait 276 h et oublierait",
            "les 69 h de rapprochement. Les corrections font partie de la base.",
          ].join("\n")}
        </FormulaBox>

        <p>
          Pour rendre le calcul reproductible, l’exemple utilise 44,20 € par
          heure. L’
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            Insee
          </a>{" "}
          estime à ce niveau le coût horaire moyen du travail dans les services
          marchands en 2025 pour les entreprises françaises de dix salariés ou
          plus, apprentis inclus. Cette moyenne statistique n’est ni le coût
          marginal évitable, ni la valeur universelle d’une heure : remplacez-la
          par votre donnée chargée et choisissez le registre économique adapté.
        </p>

        <GuideTable
          caption="Socle fictif connu sur 36 mois et postes encore inconnus"
          headers={["Dépense", "Montant", "Calcul"]}
          rows={[
            ["Observation et premier essai", "1 600 € HT", "dépense initiale"],
            ["Mise en place", "5 000 € HT", "dépense initiale"],
            [
              "Temps de l’équipe",
              "1 414,40 € sans TVA",
              "32 h × 44,20 €",
            ],
            ["Abonnement", "2 700 € HT", "75 € × 36 mois"],
            ["Suivi et maintenance", "5 400 € HT", "150 € × 36 mois"],
            ["Socle connu", "16 114,40 €", "pas un coût complet"],
            [
              "Données, sécurité et intégrations variables",
              "À confirmer",
              "dépend des systèmes et des écarts",
            ],
            [
              "Formation et double fonctionnement",
              "À confirmer",
              "dépend du pilote et de l’adoption",
            ],
            [
              "Incident, évolution et sortie",
              "À confirmer",
              "scénario, responsabilité et preuve à écrire",
            ],
          ]}
        />

        <p>
          Les montants externes sont présentés hors taxes. Cette convention
          suppose que la TVA est récupérable ; si elle ne l’est pas, ajoutez la
          part non récupérable au coût économique et à la chronologie de
          trésorerie. Le temps interne est présenté sans TVA et doit être
          remplacé par votre coût réellement pertinent.
        </p>

        <p>
          Si un seul taux de 70 % est appliqué aux 345 heures, le proxy de
          capacité vaut 10 674,30 € par an. Le calcul arithmétique conduit à un
          ROI provisoire de 98,72 % sur les seuls coûts connus. Mais ce taux
          confond au moins la couverture du flux, la réduction technique, la
          montée d’adoption et la réaffectation productive. Si 70 % du temps est
          techniquement supprimé puis seulement 70 % de ce reliquat réellement
          réaffecté, le taux total n’est plus 70 %, mais 49 %.
        </p>

        <GuideTable
          caption="Sensibilité du proxy de capacité, sans les coûts encore inconnus"
          headers={[
            "Part totale utile",
            "Proxy annuel",
            "Lecture sur 36 mois",
          ]}
          rows={[
            ["0 %", "0 €", "ROI −100 % ; aucun retour"],
            [
              "20 %",
              "3 049,80 €",
              "ROI −43,22 % ; retour théorique après environ 274,9 mois, hors horizon de 36 mois",
            ],
            [
              "40 %",
              "6 099,60 €",
              "ROI provisoire 13,56 % ; retour théorique après environ 28,3 mois",
            ],
            [
              "49 % = 70 % × 70 %",
              "7 472,01 €",
              "ROI provisoire 39,11 % ; retour théorique après environ 20,2 mois",
            ],
            [
              "70 %",
              "10 674,30 €",
              "ROI provisoire 98,72 % ; retour théorique après environ 12,1 mois",
            ],
          ]}
        />

        <p>
          Le seuil de rentabilité du proxy sur 36 mois est d’environ 35,23 % des
          345 heures. Ce seuil ne rend pas les postes inconnus réels et ne
          transforme pas la capacité en cash. Les retours du tableau partent du
          premier euro engagé, retranchent 225 € de coûts récurrents par mois et
          supposent pourtant un effet stabilisé immédiat : ce sont donc des
          dates favorables, pas des promesses. Stress-testez aussi le coût
          initial, un retard de trois puis six mois, la baisse de volume,
          l’adoption, la durée de vie et la sortie.
        </p>

        <p>
          Pour construire vos propres scénarios dans un calculateur local,
          documenter les formules et permettre au statu quo de gagner, consultez{" "}
          <Link href="/guides/calculer-roi-application-metier">
            le guide du ROI d’une application métier
          </Link>
          . Il convient lorsque l’automatisation devient un projet logiciel
          comparable à une option plus simple. Pour un investissement long ou
          risqué, l’actualisation et une analyse d’incertitude plus formelle
          peuvent devenir nécessaires.
        </p>

        <h2 id="responsabilites">
          8. Financer le travail après la mise en service
        </h2>

        <p>
          Le projet se termine ; le processus continue. Une personne du métier
          doit donc posséder la règle et le bénéfice attendu, tandis qu’une
          personne identifiée surveille les alertes et le mode manuel. Le
          prestataire ne peut ni décider seul ce qui est un résultat correct, ni
          promettre une maintenance non financée.
        </p>

        <p>
          L’
          <a
            href="https://www.anact.fr/table-de-simulation-numerique"
            target="_blank"
            rel="noreferrer"
          >
            Anact
          </a>{" "}
          propose d’associer direction, encadrement et salariés à la simulation
          des futurs usages. C’est particulièrement utile ici : la personne qui
          traite les dossiers incomplets connaît souvent une exception que la
          procédure officielle ne mentionne pas.
        </p>

        <ul>
          <li>
            <strong>La direction</strong> fixe le but, le budget, la condition
            d&apos;arrêt et un indicateur compréhensible.
          </li>
          <li>
            <strong>Le responsable métier</strong> tient les règles à jour et
            tranche les exceptions connues.
          </li>
          <li>
            <strong>Les utilisateurs</strong> essaient des situations réelles et
            signalent les erreurs. Une démonstration du prestataire ne suffit
            pas.
          </li>
          <li>
            <strong>Le prestataire</strong> construit, teste, documente et
            corrige ce que prévoit l&apos;accord ; il remet les accès, les
            alertes et les résultats des essais.
          </li>
          <li>
            <strong>Une personne de suivi</strong> reçoit les alertes, classe
            les erreurs et sait comment reprendre le travail à la main.
          </li>
        </ul>

        <GuideTable
          caption="Le budget d’exploitation à rendre visible"
          headers={["Poste", "Responsable", "Preuve périodique"]}
          rows={[
            [
              "Règles et exceptions",
              "Propriétaire métier",
              "Version, changements et cas désormais hors périmètre",
            ],
            [
              "Alertes et file d’échec",
              "Exploitant interne ou prestataire nommé",
              "Délai, ancienneté, résolution et dossiers encore bloqués",
            ],
            [
              "Accès, secrets et données",
              "Responsable technique et métier",
              "Droits minimaux, rotation, conservation et suppression",
            ],
            [
              "Maintenance et dépendances",
              "Prestataire ou équipe technique",
              "Versions, incidents, coûts et alternative de sortie",
            ],
            [
              "Bénéfices réalisés",
              "Responsable dans l’activité courante",
              "Prévu/réalisé, dépendances et décision datée",
            ],
          ]}
        />

        <h2 id="pilote-recette">
          9. Provoquer les échecs avant de généraliser
        </h2>

        <p>
          Le premier essai porte sur un volume limité, avec de vrais cas
          pseudonymisés ou protégés selon leur nature, une file d’exceptions et
          un retour simple au traitement manuel. Une démonstration du cas normal
          ne prouve rien sur le doublon, la panne partielle ou la reprise. Chaque
          test doit conserver l’entrée, le résultat attendu, le résultat obtenu,
          la version, l’heure, l’identifiant du dossier et la personne qui
          accepte ou refuse.
        </p>

        <GuideTable
          caption="Les essais indispensables"
          headers={["Situation testée", "Résultat attendu", "À conserver"]}
          rows={[
            [
              "Cas normal",
              "Le bon résultat est produit une seule fois",
              "Entrée et résultat",
            ],
            [
              "Information manquante",
              "Le dossier attend une correction compréhensible",
              "Message affiché",
            ],
            [
              "Même dossier reçu deux fois",
              "Aucun doublon n’est créé",
              "Trace des deux réceptions",
            ],
            [
              "Accès refusé",
              "L’action s’arrête et une personne est prévenue",
              "Alerte reçue",
            ],
            [
              "Logiciel indisponible",
              "Le dossier attend ou rejoint la liste manuelle",
              "Heure et tentatives",
            ],
            [
              "Reprise après panne",
              "Aucune perte ni double action",
              "Résultat avant et après",
            ],
            [
              "Action partiellement exécutée",
              "L’état incomplet est visible et aucune suite dangereuse ne part",
              "Étape atteinte et décision de reprise",
            ],
            [
              "Règle ou modèle mis à jour",
              "Les anciens cas critiques sont rejoués avant production",
              "Version et non-régression",
            ],
            [
              "Retour au mode manuel",
              "L’équipe traite le flux sans dépendre de l’automatisation",
              "Temps de bascule et dossiers réconciliés",
            ],
          ]}
        />

        <p>
          Séparez développement, test et production ; accordez seulement les
          droits nécessaires ; ne placez pas un secret dans une feuille ou un
          message partagé ; définissez la durée des journaux et les personnes
          autorisées à les lire. Pour une IA, versionnez l’échantillon
          d’évaluation, les seuils et les cas nécessitant une revue humaine. Le{" "}
          <a
            href="https://airc.nist.gov/airmf-resources/airmf/"
            target="_blank"
            rel="noreferrer"
          >
            NIST AI Risk Management Framework
          </a>{" "}
          organise volontairement cette gestion autour de gouverner,
          cartographier, mesurer et gérer ; il ne constitue ni certification, ni
          conformité automatique au droit européen.
        </p>

        <h2 id="suivi">10. Comparer le prévu au réel à 30 et 90 jours</h2>

        <p>
          Avant le pilote, écrivez la valeur de départ, la cible, la source de
          mesure, le propriétaire et la tolérance. Après le lancement, mesurez
          aussi ce que l’automatisation déplace : revue humaine, file d’échec,
          surveillance et travail créé dans l’équipe suivante. Une moyenne
          globale peut masquer un segment qui se dégrade.
        </p>

        <GuideTable
          caption="Le registre prévu/réalisé qui transforme une promesse en décision"
          headers={["Moment", "À mesurer", "Décision autorisée"]}
          rows={[
            [
              "Avant pilote",
              "Volume, temps actif, corrections, erreurs, attente, coût et qualité",
              "Tester, clarifier ou reporter",
            ],
            [
              "Fin du pilote",
              "Cas passés, exceptions, erreurs graves, retour manuel et coût réel",
              "Bloquer, corriger ou ouvrir un volume limité",
            ],
            [
              "À 30 jours",
              "Adoption, temps humain résiduel, file d’échec, incidents et coût en service",
              "Poursuivre sous condition, corriger ou arrêter",
            ],
            [
              "À 90 jours",
              "Capacité réellement réaffectée, cash réellement évité, qualité et dépendances",
              "Généraliser, maintenir le périmètre, réduire ou décommissionner",
            ],
          ]}
        />

        <p>
          Fixez la tolérance avant de voir le résultat : par exemple, aucune
          action irréversible non validée, zéro doublon financier, 100 % des
          échecs visibles, file manuelle sous un délai choisi, coût mensuel sous
          le plafond et part de temps utile au-dessus du seuil de rentabilité.
          Un seuil universel serait trompeur ; les vôtres doivent découler de
          l’impact et de la capacité de reprise.
        </p>

        <h3>Conditions qui imposent d’arrêter ou de reporter</h3>

        <p>Il est raisonnable de ne pas poursuivre lorsque :</p>
        <ul>
          <li>les règles changent encore chaque semaine ;</li>
          <li>la tâche est rare et une liste de contrôle suffit ;</li>
          <li>personne ne peut dire ce qu’est un résultat correct ;</li>
          <li>les données sont en double ou sans source fiable ;</li>
          <li>une erreur est difficile à voir ou impossible à annuler ;</li>
          <li>
            le temps gagné dans une équipe crée davantage de travail ailleurs ;
          </li>
          <li>un logiciel standard couvre déjà correctement le besoin.</li>
        </ul>

        <p>
          Arrêter n’est pas un échec si la décision évite un déploiement
          fragile. Conservez le dossier, fermez la cause — règles, données,
          propriété ou économie — puis réexaminez le même flux sur une nouvelle
          base.
        </p>

        <h2 id="avis">11. Notre avis professionnel et nos mauvais cas</h2>

        <p>
          Notre recommandation fréquente est simple : commencez par un transfert
          d’information fréquent, stable, observable et réversible. Une fonction
          déjà payée gagne lorsque le flux est standard et les exceptions rares.
          Un connecteur gagne lorsque deux outils stables doivent échanger avec
          une file de rejets. Le sur-mesure devient défendable lorsque plusieurs
          rôles, des règles propres et un volume durable produisent davantage de
          valeur nette malgré l’exploitation.
        </p>

        <ul>
          <li>
            <strong>Nous déconseillons un développement</strong> si une étape
            supprimée, une fonction existante ou un test manuel répond encore
            correctement au besoin.
          </li>
          <li>
            <strong>Nous déconseillons l’exécution automatique</strong> si le
            résultat est difficile à annuler et qu’un vrai contrôle humain
            n’est pas organisé.
          </li>
          <li>
            <strong>Nous déconseillons un pilote</strong> sans propriétaire,
            mesure de départ, file d’exception, preuve de reprise et budget
            d’exploitation.
          </li>
          <li>
            <strong>Nous déconseillons de monétiser toutes les heures</strong>{" "}
            si aucune dépense, embauche ou charge utile identifiable ne change.
          </li>
          <li>
            <strong>Nous recommandons d’arrêter</strong> quand le réalisé sort
            des tolérances décidées, même si la démonstration technique est
            séduisante.
          </li>
        </ul>

        <p>
          Hagnéré Code vend des outils internes sur mesure et peut donc avoir un
          intérêt commercial à recommander un développement. C’est précisément
          pourquoi la fonction existante, le connecteur et le statu quo doivent
          pouvoir gagner dans ce guide et dans le diagnostic. Demandez à tout
          prestataire de rendre visible la solution la moins rémunératrice pour
          lui.
        </p>

        <p>
          Si le besoin implique finalement plusieurs équipes et écrans,
          transformez ce travail en{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’application métier
          </Link>
          . Vous pouvez ensuite consulter notre service de{" "}
          <Link href="/services/outils-internes-sur-mesure">
            développement d’outils internes
          </Link>{" "}
          pour comprendre ce qui est chiffré avant tout engagement.
        </p>

        <GuideInlineCTA
          title="Faites relire un dossier déjà mesuré"
          description="Avant d’ouvrir le brief, copiez le dossier de tri affiché par le diagnostic : aucune donnée n’est transmise automatiquement. Ajoutez le début et la fin du flux, la période observée, trois exceptions, le mode manuel et vos tolérances. Nous comparons simplification, existant, connecteur, assistance et sur-mesure — avec la possibilité explicite de ne rien développer."
          tags={[
            "Carte relue",
            "Inconnues visibles",
            "Prochain test défini",
          ]}
          ctaLabel="Faire relire mon dossier"
          ctaHref="/demarrer-un-projet?service=outils-internes&source=guide-automatiser-processus"
        />

        <h2 id="sources">Sources et limites</h2>

        <p>
          Sources rouvertes ou consultées le 28 juillet 2026. Les montants,
          volumes et calculs sont des exemples fictifs reproductibles, jamais
          des tarifs, des cas clients ou une promesse de gain. Les cadres
          publics étrangers servent à renforcer la méthode de décision ; leurs
          règles, seuils et périmètres administratifs ne sont pas transposés
          automatiquement à une PME française.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
              target="_blank"
              rel="noreferrer"
            >
              France Num — L’automatisation : une solution indispensable pour
              gagner du temps et mieux gérer sa TPE PME
            </a>
            , pour l’observation, la simplification, le test, la documentation
            et la formation. Les promesses générales de prix ou de gain ne sont
            pas reprises.
          </li>
          <li>
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noreferrer"
            >
              Insee — coût horaire du travail selon l’activité
            </a>
            , pour la moyenne de 44,20 € utilisée uniquement dans l’exemple.
          </li>
          <li>
            <a
              href="https://www.anact.fr/table-de-simulation-numerique"
              target="_blank"
              rel="noreferrer"
            >
              Anact — table de simulation numérique
            </a>
            , pour la participation des salariés à l’étude des futurs usages.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — profilage et décision entièrement automatisée
            </a>
            , pour le champ d’application de l’article 22 du RGPD, ses
            conditions et ses garanties ; cette page ne qualifie pas votre cas.
          </li>
          <li>
            <a
              href="https://www.gsa.gov/system/files/Federal%20EOA%20Playbook%20-%20v1%20-%206.3.2026_0.pdf"
              target="_blank"
              rel="noreferrer"
            >
              U.S. GSA — Federal Elimination, Optimization and Automation
              Playbook
            </a>
            , publié le 3 juin 2026, pour l’ordre éliminer, optimiser puis
            automatiser, la qualité des données, les volumes suffisamment
            stables et le jugement humain. Son contexte fédéral américain ne
            fournit aucun rendement pour une PME française.
          </li>
          <li>
            <a
              href="https://www.gov.uk/government/publications/digital-and-data-benefits-framework/digital-and-data-benefits-framework"
              target="_blank"
              rel="noreferrer"
            >
              UK Government — Digital and Data Benefits Framework
            </a>
            , publié le 7 avril 2026, pour la base de service, la séparation des
            bénéfices, les coûts de fonctionnement et les méthodes de
            quantification. Les ratios publics britanniques ne sont pas repris.
          </li>
          <li>
            <a
              href="https://www.digital.gov.au/policy/benefits-management-policy/guidance"
              target="_blank"
              rel="noreferrer"
            >
              Australian Government — Benefits Management Guidance
            </a>
            , pour les mesures de départ, cibles, propriétaires, dépendances,
            tolérances et effets négatifs.
          </li>
          <li>
            <a
              href="https://www.gao.gov/products/gao-20-195g"
              target="_blank"
              rel="noreferrer"
            >
              U.S. GAO — Cost Estimating and Assessment Guide
            </a>
            , pour documenter périmètre, hypothèses, alternatives, sensibilité,
            risques et mise à jour par les coûts réels. La profondeur attendue
            doit rester proportionnée à un petit pilote.
          </li>
          <li>
            <a
              href="https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html"
              target="_blank"
              rel="noreferrer"
            >
              Gouvernement du Canada — Évaluation de l’incidence algorithmique
            </a>
            , pour structurer impact, réversibilité, données, journaux, recours
            et contrôle avant production lorsqu’un système algorithmique est
            concerné. Il ne s’agit pas du droit français.
          </li>
          <li>
            <a
              href="https://airc.nist.gov/airmf-resources/airmf/"
              target="_blank"
              rel="noreferrer"
            >
              NIST — AI Risk Management Framework
            </a>
            , cadre volontaire américain pour gouverner, cartographier, mesurer
            et gérer les risques d’une IA ; il ne vaut ni certification, ni
            conformité au règlement européen.
          </li>
          <li>
            <a
              href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act"
              target="_blank"
              rel="noreferrer"
            >
              Commission européenne — calendrier de mise en œuvre du règlement
              européen sur l’intelligence artificielle
            </a>
            , pour les principales dates d’application. La qualification et les
            obligations dépendent du système, de son usage et des acteurs
            concernés ; cette source ne qualifie pas votre projet.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
