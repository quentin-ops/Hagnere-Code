import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
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
        alt: "Automatiser un processus métier : matrice gain, risque et stabilité",
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
    question: "Quel processus métier faut-il automatiser en premier ?",
    answer:
      "Commencez par un processus dont le gain est mesuré, le chemin normal stable et le risque d’erreur faible ou contenu par une validation humaine. Les ressaisies entre deux outils, les notifications et la préparation de dossiers sont souvent de meilleurs premiers candidats qu’une décision complexe ou qu’un planning rempli d’exceptions. La tâche la plus irritante n’est pas forcément celle qui produit le meilleur premier projet.",
  },
  {
    question:
      "Faut-il utiliser de l’intelligence artificielle pour automatiser ?",
    answer:
      "Non. Une règle déterministe reste préférable quand l’entrée est structurée et la décision explicable. L’IA devient utile pour classer ou extraire une information ambiguë, mais sa sortie doit alors être évaluée sur des exemples réels, assortie d’un seuil de confiance et d’une voie de validation humaine lorsque l’erreur a des conséquences.",
  },
  {
    question: "Peut-on automatiser sans remplacer les logiciels actuels ?",
    answer:
      "Oui, si leurs fonctions natives, leurs connecteurs ou leurs API permettent d’échanger les bonnes données avec des identifiants fiables. Commencez par vérifier ce qui existe déjà dans vos outils. Si l’un d’eux n’offre aucun accès stable, une automatisation par clics peut dépanner, mais elle doit être surveillée car une modification d’écran peut la casser.",
  },
  {
    question:
      "Comment calculer le retour sur investissement d’une automatisation ?",
    answer:
      "Mesurez d’abord fréquence, durée et personnes concernées. Valorisez uniquement la part du temps qui sera réellement réaffectée ou la dépense effectivement évitée. Comparez ces bénéfices au coût total de possession sur le même horizon. Le retour sur investissement est égal aux bénéfices cumulés attribuables moins le coût total, divisés par ce coût total, puis multipliés par 100.",
  },
  {
    question: "Combien de temps faut-il pour automatiser un processus ?",
    answer:
      "La durée dépend moins du nombre d’écrans que de la clarté des règles, de l’accès aux données, des intégrations et des exceptions. Exigez un calendrier par preuves : cartographie validée, accès testés, pilote, tests d’acceptation des cas normaux et des pannes, puis déploiement. Une date donnée avant l’inventaire des systèmes et des exceptions est une hypothèse, pas un engagement fiable.",
  },
  {
    question: "Qui doit être responsable d’une automatisation interne ?",
    answer:
      "Un propriétaire métier décide des règles et des indicateurs ; un responsable d’exploitation reçoit les alertes et organise la reprise ; les utilisateurs testent les situations réelles ; le prestataire construit, documente et corrige selon le contrat. Une automatisation sans propriétaire après sa mise en service devient rapidement un risque.",
  },
  {
    question: "Comment éviter qu’une automatisation propage une erreur ?",
    answer:
      "Testez les données manquantes, doublons, droits insuffisants, indisponibilités d’un logiciel, relances et reprises après panne. Conservez un identifiant unique, un journal lisible, une alerte et une file de traitement manuel. Pour les actions coûteuses ou irréversibles, placez une validation humaine avant l’action finale.",
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
        heroDescription="La bonne première automatisation n’est pas la tâche la plus agaçante. C’est un processus dont le gain est mesuré, les règles assez stables et l’erreur maîtrisable. Voici comment le choisir, comparer six réponses et prouver sa valeur avant de le généraliser."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Publié le " + formatGuideDate(guide.datePublished)}
        keyPoints={[
          {
            number: "01",
            title: "Matrice gain-risque-stabilité",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "6 réponses comparées",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Rentabilité fictive recalculable",
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
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou développement sur mesure",
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
        faqTitle="Automatisation métier : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Automatisez d’abord un processus à gain mesurable, chemin stable et
            erreur contenue.
          </strong>{" "}
          Si le gain est faible, simplifiez sans logiciel. Si les règles
          changent encore, stabilisez-les. Si une erreur peut payer le mauvais
          fournisseur, refuser un client ou bloquer la production, gardez un
          contrôle humain jusqu’à ce que les preuves permettent d’aller plus
          loin.
        </p>

        <InfoBox variant="blue" title="La règle de sélection en quatre filtres">
          <ol className="mb-0 mt-2 space-y-1.5 pl-5">
            <li>
              <strong>Mesurez</strong> la fréquence, le temps, les attentes et
              les corrections sur des cas réels.
            </li>
            <li>
              <strong>Stabilisez</strong> le chemin normal et nommez les
              exceptions avant de choisir un outil.
            </li>
            <li>
              <strong>Contenez</strong> l’erreur avec une validation, une
              alerte, un journal et une reprise manuelle.
            </li>
            <li>
              <strong>Choisissez la moindre complexité durable</strong> :
              supprimer une étape, utiliser une fonction existante, connecter
              deux outils ou développer seulement si le besoin le justifie.
            </li>
          </ol>
        </InfoBox>

        <p>
          Hagnéré Code développe des outils internes : notre intérêt commercial
          est visible. La méthode ci-dessous empêche justement ce biais de
          devenir votre conclusion. Elle peut recommander de ne rien développer,
          d’exploiter une fonction déjà payée ou de conserver une décision
          humaine.
        </p>

        <GuideToc
          items={[
            {
              id: "definition",
              label: "1. Partir du processus, pas de l’outil",
            },
            {
              id: "observation",
              label: "2. Observer sept jours et produire la carte",
            },
            { id: "matrice", label: "3. La matrice gain-risque-stabilité" },
            {
              id: "options",
              label: "4. Six réponses possibles, dont ne rien faire",
            },
            {
              id: "techniques",
              label: "5. Connecteurs, robot, IA ou code : traduire",
            },
            {
              id: "roi",
              label: "6. Coût total et retour sur investissement",
            },
            { id: "responsabilites", label: "7. Responsabilités et adoption" },
            {
              id: "pilote-recette",
              label: "8. Piloter et tester les cas d’échec",
            },
            {
              id: "cas-inadaptes",
              label: "9. Les projets à reporter ou refuser",
            },
            {
              id: "plan-sept-jours",
              label: "10. Votre décision en sept jours",
            },
            { id: "sources", label: "Sources et périmètres" },
          ]}
        />

        <h2 id="definition">1. Partir du processus, pas de l’outil</h2>

        <p>
          Un <strong>processus métier</strong> commence par un événement et se
          termine par un résultat utile : une demande reçue devient un devis
          envoyé, une intervention terminée devient une facture contrôlée, une
          pièce reçue devient un dossier complet. Une tâche n’est qu’une étape
          de ce parcours. Automatiser « l’envoi du courriel » sans comprendre
          qui valide, d’où vient l’adresse et ce qui se passe si la pièce manque
          peut accélérer le mauvais travail.
        </p>

        <p>
          L’automatisation consiste à faire exécuter certaines étapes par un
          logiciel selon un déclencheur, des règles et des contrôles. Elle ne
          suppose ni intelligence artificielle, ni application neuve. Une règle
          native dans l’outil de gestion de la relation client (CRM), un échange
          entre deux logiciels ou une génération de document peuvent suffire. La
          gestion du processus reste plus large : elle inclut les
          responsabilités, les exceptions, la mesure et l’amélioration, y
          compris quand aucune étape n’est automatisée.
        </p>

        <GuideTable
          headers={[
            "Ne formulez pas le besoin ainsi",
            "Décrivez plutôt le résultat",
          ]}
          rows={[
            [
              "« Mettre de l’IA dans les devis »",
              "À partir d’une demande complète, préparer un brouillon avec les clauses validées et faire approuver le prix par le responsable",
            ],
            [
              "« Connecter le CRM à la compta »",
              "Après signature, créer une fois le client avec le bon identifiant, transmettre les données validées et signaler tout rejet",
            ],
            [
              "« Automatiser les relances »",
              "Relancer seulement les dossiers incomplets, arrêter dès réception et laisser un opérateur traiter les litiges",
            ],
          ]}
        />

        <p>
          Cette reformulation révèle déjà les données, les validations et les
          exceptions. Elle empêche aussi un prestataire de vendre une
          démonstration séduisante qui ignore la moitié du travail réel.
        </p>

        <h2 id="observation">2. Observer sept jours et produire la carte</h2>

        <p>
          Ne demandez pas seulement « combien de temps cela prend ? ». Les
          tâches pénibles sont souvent surestimées, tandis que les recherches,
          attentes et corrections dispersées disparaissent des souvenirs.
          Pendant une semaine représentative, notez chaque occurrence : heure de
          départ, résultat, durée active, attente, correction et personne
          sollicitée. Pour un cycle mensuel, observez aussi la clôture
          correspondante.
        </p>

        <p>
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noreferrer"
          >
            France Num
          </a>{" "}
          recommande de cartographier les étapes, informations, exceptions et
          acteurs avant d’automatiser. Le portail propose aussi de calculer
          fréquence × durée × nombre de personnes, puis d’examiner la complexité
          et l’impact d’une erreur. La fiche suivante ajoute ce qui manque pour
          consulter un fournisseur ou écrire un pilote exploitable.
        </p>

        <FormulaBox>
          {[
            "FICHE D’UN PROCESSUS — UNE PAGE",
            "",
            "Nom et résultat attendu :",
            "Déclencheur et fin observable :",
            "Volume : __ cas/jour, semaine ou mois",
            "Durée active + temps d’attente :",
            "Acteurs et responsable de la décision :",
            "Systèmes utilisés et système de référence qui fait foi :",
            "Données entrantes, identifiant unique et sortie :",
            "Chemin normal, étape par étape :",
            "Exceptions observées et fréquence :",
            "Erreurs/retards : nombre, correction et conséquence :",
            "Action irréversible ou sensible :",
            "Mode manuel si le système ne répond plus :",
            "Indicateur avant/après :",
            "Propriétaire après mise en service :",
          ].join("\n")}
        </FormulaBox>

        <InfoBox
          variant="emerald"
          title="L’option zéro doit être testée avant le devis"
        >
          Supprimez les doubles validations sans fonction, imposez un
          identifiant unique, rendez un champ obligatoire ou placez le document
          au bon endroit. France Num indique que la cartographie révèle parfois
          une inefficacité que l’on peut résoudre sans automatisation. Mesurez à
          nouveau : un problème supprimé n’a pas besoin de logiciel.
        </InfoBox>

        <p>
          Retenez trois candidats, pas vingt. Ils doivent être assez précis pour
          tenir sur la fiche : « traiter une demande de devis entrante » est
          testable ; « automatiser l’administratif » ne l’est pas. Photographiez
          le travail réel avec les personnes qui l’exécutent, pas seulement la
          procédure officielle.
        </p>

        <h2 id="matrice">3. La matrice gain-risque-stabilité</h2>

        <p>
          Un score total est dangereux : un gain élevé peut masquer une décision
          risquée, et un processus très stable peut rester sans valeur. Notez
          les trois axes séparément. Un candidat passe seulement si chaque axe
          trouve une réponse acceptable.
        </p>

        <GuideTable
          headers={[
            "Axe",
            "1 — faible ou défavorable",
            "2 — intermédiaire",
            "3 — favorable au pilote",
          ]}
          rows={[
            [
              "Gain prouvé",
              "rare, court, aucun retard ni coût observable",
              "temps ou qualité mesurés, mais réaffectation incertaine",
              "volume et bénéfice attribuable mesurés ; résultat métier clair",
            ],
            [
              "Stabilité",
              "chemin négocié à chaque cas, règles changeantes",
              "chemin normal connu, exceptions encore incomplètes",
              "règles, données et principales exceptions observées et nommées",
            ],
            [
              "Risque contenu",
              "erreur difficile à détecter, coûteuse ou irréversible",
              "erreur détectable avec validation ou retour arrière",
              "erreur peu coûteuse, visible et facilement rejouable",
            ],
          ]}
        />

        <p>
          Ajoutez deux portes binaires : les données sont-elles accessibles et
          un propriétaire accepte-t-il de maintenir les règles ? Un « non »
          arrête le projet, même avec trois bonnes notes. N’additionnez jamais
          les colonnes pour produire un classement automatique.
        </p>

        <h3>Exemple illustratif fictif : cinq candidats dans une même PME</h3>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une PME de services
          examine cinq irritants. Les notes viennent d’une semaine d’observation
          inventée pour expliquer la méthode ; elles ne représentent ni un
          client ni une moyenne de marché.
        </p>

        <GuideTable
          headers={[
            "Processus fictif",
            "Gain",
            "Stabilité",
            "Risque contenu",
            "Décision",
          ]}
          rows={[
            [
              "Accuser réception et distribuer les demandes complètes",
              "3",
              "3",
              "3",
              "Bon premier pilote ; garder les demandes ambiguës en file humaine",
            ],
            [
              "Recopier un client signé du CRM vers la facturation",
              "3",
              "3",
              "2",
              "Connecter si identifiant, doublon et rejet sont testés",
            ],
            [
              "Assembler le reporting mensuel",
              "2",
              "3",
              "3",
              "Vérifier d’abord une source unique et les fonctions existantes",
            ],
            [
              "Accorder une remise commerciale exceptionnelle",
              "2",
              "1",
              "1",
              "Ne pas automatiser la décision ; préparer l’information seulement",
            ],
            [
              "Replanifier les urgences terrain",
              "3",
              "1",
              "1",
              "Mauvais premier projet ; formaliser les arbitrages avec l’équipe",
            ],
          ]}
        />

        <p>
          La première ligne gagne sans être la plus spectaculaire. Elle permet
          d’éprouver les accès, les alertes et la gouvernance sur une action
          réversible. Le deuxième flux peut apporter plus de valeur, mais une
          création en double dans la facturation exige déjà des contrôles plus
          sérieux.
        </p>

        <h2 id="options">4. Six réponses possibles, dont ne rien faire</h2>

        <p>
          Comparez les options sur le même processus, le même volume et un
          horizon identique. Un abonnement seul ne se compare pas à un projet
          comprenant nettoyage, intégration, formation et maintenance. Le bon
          choix est la réponse la moins complexe qui tient durablement la règle,
          le risque et l’évolution attendue.
        </p>

        <GuideTable
          headers={[
            "Réponse",
            "Elle gagne quand",
            "Ce qu’il faut vérifier",
            "Cas inadapté",
          ]}
          rows={[
            [
              "Reporter ou ne rien faire",
              "gain faible, règles instables ou aucun propriétaire",
              "coût réel de l’inaction et date de réexamen",
              "risque critique déjà actif sans mesure compensatoire",
            ],
            [
              "Supprimer ou standardiser",
              "l’étape existe par habitude ou les données arrivent mal",
              "effet sur les contrôles utiles et les autres équipes",
              "règle complexe réellement nécessaire",
            ],
            [
              "Fonction native ou logiciel existant",
              "processus courant couvert sans contournement majeur",
              "plan souscrit, droits, export, administration et coût total",
              "écart portant sur une règle métier critique",
            ],
            [
              "Connecteur ou automatisation visuelle",
              "quelques systèmes disposent d’interfaces de programmation (API) et les règles sont explicites",
              "quotas, erreurs, comptes techniques, journaux et maintenance",
              "fort volume critique ou enchaînement devenu illisible",
            ],
            [
              "Automatisation partielle avec validation humaine",
              "la machine peut préparer, classer ou alerter sans décider seule",
              "file de revue, délai, droit de corriger et traçabilité",
              "la validation humaine n’est qu’un clic aveugle",
            ],
            [
              "Application ou service sur mesure",
              "règles propres, plusieurs rôles, intégrations et avantage durable",
              "coût total, propriété, réversibilité, exploitation et critères d’acceptation",
              "un outil standard couvre correctement le besoin",
            ],
          ]}
        />

        <p>
          Si le besoin part d’un tableur devenu central, utilisez ensuite le
          diagnostic{" "}
          <Link href="/guides/transformer-excel-en-application">
            Excel vers application métier
          </Link>
          . Si la question devient celle de la plateforme, le comparatif{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou développement sur mesure
          </Link>{" "}
          traite les coûts, plafonds et conditions de sortie.
        </p>

        <h2 id="techniques">
          5. Connecteurs, robot, IA ou code : traduire le devis
        </h2>

        <p>
          Une <strong>API</strong> est une porte documentée par laquelle deux
          logiciels échangent des données. Un <strong>connecteur</strong>{" "}
          prépare cet échange dans une plateforme. Une <strong>RPA</strong>, ou
          automatisation robotisée, imite les clics et saisies d’une personne
          quand aucune porte stable n’existe. Une IA traite une entrée moins
          structurée avec un résultat probabiliste. Ces techniques peuvent se
          combiner ; aucune ne remplace la règle métier.
        </p>

        <GuideTable
          headers={["Technique", "Usage raisonnable", "Preuve à demander"]}
          rows={[
            [
              "Règle déterministe",
              "déclencheur et conditions explicites",
              "table des règles, versions et cas limites",
            ],
            [
              "API ou connecteur",
              "synchroniser des systèmes accessibles",
              "test d’authentification, quotas, rejet et reprise",
            ],
            [
              "Robot de clics",
              "transition quand un logiciel fermé ne propose pas d’API",
              "surveillance après changement d’écran et procédure manuelle",
            ],
            [
              "IA",
              "extraire, classer ou préparer un contenu variable",
              "jeu d’évaluation réel, erreurs connues, seuil et revue humaine",
            ],
            [
              "Code sur mesure",
              "orchestrer règles, données, rôles et exploitation spécifiques",
              "dépôt, tests, documentation, surveillance technique, alertes et réversibilité",
            ],
          ]}
        />

        <p>
          Demandez ce qui se passe si le même événement arrive deux fois. Une
          automatisation robuste doit reconnaître l’identifiant et éviter une
          seconde facture ou un second courriel. Demandez aussi où va un cas en
          erreur, qui reçoit l’alerte, comment il est rejoué et comment vérifier
          que la cible contient bien le résultat. « Le scénario est vert » ne
          prouve pas que le métier a reçu la bonne donnée.
        </p>

        <InfoBox
          variant="amber"
          title="Une décision sur une personne exige un cadrage particulier"
        >
          La{" "}
          <a
            href="https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee"
            target="_blank"
            rel="noreferrer"
          >
            CNIL
          </a>{" "}
          rappelle que l’article 22 du RGPD encadre les décisions fondées
          exclusivement sur un traitement automatisé lorsqu’elles produisent un
          effet juridique ou affectent significativement une personne. Le droit
          à l’information, à la contestation et, dans les situations concernées,
          à une intervention humaine ne se résume pas à ajouter un bouton «
          valider ». Faites qualifier le cas avant d’automatiser un refus, un
          tarif, un recrutement ou une décision comparable. Ce guide n’est pas
          un conseil juridique personnalisé.
        </InfoBox>

        <h2 id="roi">
          6. Chiffrer le coût total et le retour sur investissement
        </h2>

        <p>
          Le <strong>coût total de possession (TCO)</strong> additionne les
          dépenses initiales, récurrentes et de sortie sur un même horizon. Le{" "}
          <strong>retour sur investissement (ROI)</strong> compare ensuite les
          bénéfices attribuables à ce coût complet. Si une ligne reste inconnue,
          le calcul n’est encore qu’un socle provisoire.
        </p>

        <p>
          Le temps « gagné » n’est pas automatiquement une économie. Pour créer
          un bénéfice monétaire, il doit permettre d’absorber davantage de
          dossiers, d’éviter une dépense ou de produire un résultat mesurable.
          Sinon, le confort est réel mais le gain comptable peut rester nul.
          Affichez donc la part réellement réaffectée et testez une hypothèse
          prudente.
        </p>

        <FormulaBox>
          {[
            "Temps annuel actuel = (volume × durée active + temps de consolidation) × périodes",
            "",
            "TCO = cartographie + mise en œuvre + temps interne",
            "    + abonnements + surveillance + maintenance + sortie",
            "",
            "Gain net = bénéfices attribuables cumulés - TCO",
            "",
            "ROI = (bénéfices attribuables cumulés - TCO) / TCO × 100",
            "",
            "Délai de retour = coût initial / (bénéfice mensuel - coût récurrent mensuel)",
          ].join("\n")}
        </FormulaBox>

        <h3>Exemple illustratif fictif sur 36 mois</h3>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une PME de services de 18
          salariés trie 30 demandes par semaine. Chaque demande mobilise 12
          minutes, plus 1 h 30 de rapprochement hebdomadaire, pendant 46
          semaines. Le processus représente donc{" "}
          <code>((30 × 12) / 60 + 1,5) × 46 = 345 heures</code> par an.
        </p>

        <p>
          Pour valoriser l’heure, l’exemple utilise 44,2 €. L’
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            Insee
          </a>{" "}
          estime en 2025 le coût horaire de la main-d’œuvre à 44,2 € dans les
          services marchands, pour les entreprises françaises de 10 salariés ou
          plus. Cette moyenne, publiée le 2 juillet 2026, n’est pas le coût de
          cette entreprise fictive : remplacez-la par votre coût chargé réel.
        </p>

        <GuideTable
          headers={["Poste fictif", "36 mois", "Hypothèse"]}
          rows={[
            ["Cartographie et pilote", "1 600 € HT", "investissement initial"],
            ["Mise en œuvre", "5 000 € HT", "investissement initial"],
            ["Temps interne", "1 414,40 €", "32 h × 44,2 €"],
            ["Abonnement", "2 700 € HT", "75 € × 36 mois"],
            ["Surveillance et maintenance", "5 400 € HT", "150 € × 36 mois"],
            [
              "Socle chiffré sur 36 mois",
              "16 114,40 €",
              "dépenses externes HT ; sortie, fiscalité et inflation à confirmer",
            ],
          ]}
        />

        <p>
          Ce total de 16 114,40 € n’est donc <strong>pas encore un TCO</strong>{" "}
          : il manque notamment le coût de sortie et les éventuelles taxes non
          récupérables. Les dépenses externes sont exprimées hors taxes et la
          récupération de TVA n’est pas modélisée. Ajoutez ces lignes selon la
          situation de l’entreprise avant toute décision.
        </p>

        <p>
          Dans le scénario central, 70 % des 345 heures sont réellement
          réaffectées : <code>345 × 70 % × 44,2 € = 10 674,30 €</code> par an.
          Les bénéfices sur trois ans valent 32 022,90 €. Sur les seuls coûts
          chiffrés, le gain net provisoire est 15 908,50 € et le ROI provisoire
          98,72 %. Le délai de retour est d’environ 12,1 mois après la mise en
          service, en régime stable. Pour obtenir le délai calendaire, ajoutez
          la durée encore inconnue de cartographie, de pilote, de déploiement et
          de montée en charge.
        </p>

        <GuideTable
          headers={[
            "Scénario fictif",
            "Part réaffectée",
            "Bénéfice annuel",
            "ROI provisoire à 36 mois",
            "Retour après mise en service",
          ]}
          rows={[
            ["Prudent", "40 %", "6 099,60 €", "13,55 %", "28,3 mois"],
            ["Central", "70 %", "10 674,30 €", "98,72 %", "12,1 mois"],
          ]}
        />

        <p>
          Aucun gain de vente, d’erreur évitée ou de satisfaction n’est ajouté :
          il faudrait d’abord le mesurer. Si le projet n’est rentable qu’en
          valorisant 100 % du temps et des ventes hypothétiques, lancez un
          pilote ou simplifiez avant d’investir. Le guide pour{" "}
          <Link href="/guides/calculer-roi-application-metier">
            calculer le ROI d’une application métier
          </Link>{" "}
          détaille le TCO, les scénarios prudent, central et haut ainsi que le
          contrôle après mise en service. Pour budgéter une application plus
          large, consultez ensuite la méthode du{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            prix d’un logiciel sur mesure
          </Link>
          .
        </p>

        <h2 id="responsabilites">7. Responsabilités et adoption</h2>

        <p>
          L’automatisation modifie qui voit l’information, qui décide et qui
          corrige. L’
          <a
            href="https://www.anact.fr/table-de-simulation-numerique"
            target="_blank"
            rel="noreferrer"
          >
            Anact
          </a>{" "}
          recommande d’associer direction, encadrement et salariés à la
          simulation des futurs flux afin d’identifier avantages et
          inconvénients des scénarios. Une démonstration au dirigeant ne
          remplace donc pas l’essai par la personne qui gère le dossier
          incomplet un lundi matin.
        </p>

        <GuideTable
          headers={[
            "Rôle",
            "Responsabilité non transférable",
            "Preuve attendue",
          ]}
          rows={[
            [
              "Sponsor",
              "objectif, budget, arbitrage et condition d’arrêt",
              "note de décision et indicateur cible",
            ],
            [
              "Propriétaire métier",
              "règles, exceptions et priorité des corrections",
              "carte signée et historique des règles",
            ],
            [
              "Utilisateurs référents",
              "situations réelles, test et retour d’usage",
              "scénarios exécutés et anomalies qualifiées",
            ],
            [
              "Responsable des données et systèmes",
              "accès, système de référence, sécurité et conservation",
              "comptes nominatifs, matrice des droits, sauvegarde",
            ],
            [
              "Prestataire",
              "conception, intégration, tests, documentation et corrections contractuelles",
              "dépôt, journaux, dossier de recette et procédure d’exploitation",
            ],
            [
              "Exploitant après lancement",
              "surveiller, traiter les échecs et organiser les évolutions",
              "alertes testées, file d’erreurs, journal d’intervention",
            ],
          ]}
        />

        <p>
          Formez d’abord aux exceptions : comment reconnaître un cas bloqué,
          corriger une donnée et basculer en manuel. Pendant le pilote, comparez
          l’ancien et le nouveau résultat sans imposer une double saisie
          indéfinie. Mesurez l’usage réel, les corrections et le délai de
          traitement ; un compte créé ne prouve pas l’adoption.
        </p>

        <h2 id="pilote-recette">8. Piloter et tester les cas d’échec</h2>

        <p>
          Ces <strong>tests d’acceptation avant mise en service</strong>, aussi
          appelés recette, doivent couvrir le résultat utile et les incidents.
          Le premier lot doit produire une valeur exploitable seul : un
          déclencheur, une sortie, un groupe d’utilisateurs et une période
          métier complète. Il ne doit pas attendre la refonte de tout le système
          d’information pour être jugé. En revanche, son périmètre inclut les
          pannes et la reprise ; ce ne sont pas des options de fin de projet.
        </p>

        <GuideTable
          headers={[
            "Scénario de recette",
            "Résultat attendu",
            "Preuve à conserver",
          ]}
          rows={[
            [
              "Cas normal",
              "sortie exacte, une seule fois",
              "entrée, identifiant et résultat",
            ],
            [
              "Champ obligatoire absent",
              "rejet compréhensible sans donnée corrompue",
              "message et file de correction",
            ],
            [
              "Événement reçu deux fois",
              "aucun doublon",
              "journal des deux réceptions et action unique",
            ],
            [
              "Droit insuffisant",
              "action refusée et signalée",
              "compte testé et alerte",
            ],
            [
              "Logiciel cible indisponible",
              "attente ou échec contrôlé",
              "horodatage, nombre de tentatives et notification",
            ],
            [
              "Reprise après panne",
              "traitement rejoué sans perte ni double action",
              "journal avant et après",
            ],
            [
              "Exception métier",
              "orientation vers la bonne personne",
              "délai et décision humaine",
            ],
            [
              "Retour arrière",
              "mode manuel utilisable et données récupérables",
              "exercice réellement exécuté",
            ],
          ]}
        />

        <p>
          Écrivez les critères avant le développement. Tous les scénarios
          convenus doivent passer ; une anomalie bloquante ne devient pas
          acceptable parce que le taux global paraît bon. Après lancement,
          suivez au minimum volume traité, taux envoyé en revue, échecs,
          doublons, durée de traitement et temps réellement réaffecté.
        </p>

        <InfoBox
          variant="emerald"
          title="Le livrable qui rend le pilote transmissible"
        >
          Exigez une page contenant le but, le propriétaire, le déclencheur, les
          systèmes, les données, les règles, les secrets ou comptes à
          renouveler, les alertes, la procédure de reprise, le mode manuel et la
          date du dernier test. Un schéma visuel sans exploitation ne suffit
          pas.
        </InfoBox>

        <h2 id="cas-inadaptes">9. Les projets à reporter ou refuser</h2>

        <ul>
          <li>
            <strong>Le processus change chaque semaine.</strong> Automatisez au
            besoin la collecte, pas une décision encore négociée au cas par cas.
          </li>
          <li>
            <strong>La tâche est rare et sans conséquence.</strong> Une
            checklist peut coûter moins cher à exploiter pendant des années.
          </li>
          <li>
            <strong>Personne ne possède la règle.</strong> Le prestataire ne
            doit pas choisir seul ce qu’est un dossier valide ou un paiement
            juste.
          </li>
          <li>
            <strong>Les données n’ont ni identifiant ni source fiable.</strong>
            Nettoyez et attribuez d’abord la responsabilité de chaque donnée.
          </li>
          <li>
            <strong>Le seul accès est un écran instable.</strong> Un robot peut
            servir de transition, pas devenir un système critique sans
            surveillance et solution de repli.
          </li>
          <li>
            <strong>L’erreur est invisible ou irréversible.</strong> Gardez une
            validation humaine et réduisez le périmètre jusqu’à pouvoir tester
            la récupération.
          </li>
          <li>
            <strong>Le projet déplace la charge.</strong> Dix minutes gagnées à
            l’accueil ne valent rien si la comptabilité passe une heure à
            corriger la donnée produite.
          </li>
        </ul>

        <p>
          Un bon cas d’usage pour un outil dédié apparaît lorsque le processus
          est stable, récurrent et stratégique, que plusieurs rôles doivent
          agir, que les intégrations existantes échouent à couvrir une règle
          propre et qu’un responsable accepte l’exploitation. Si un logiciel
          standard couvre le résultat avec une sortie acceptable, il reste
          généralement préférable.
        </p>

        <GuideInlineCTA
          title="Faites relire le premier processus avant de choisir l’outil"
          description="Transmettez le déclencheur, le volume, les systèmes, trois exceptions et votre indicateur. Nous vous aidons à cadrer le premier flux et signalons aussi si une simplification ou une fonction existante paraît plus rationnelle qu’un développement."
          tags={["Retour humain", "Sans engagement", "Cas inadapté signalé"]}
          ctaLabel="Faire relire mon processus"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="plan-sept-jours">10. Votre décision en sept jours</h2>

        <GuideTable
          headers={["Jour", "Action", "Livrable"]}
          rows={[
            [
              "1",
              "lister dix irritants et en retenir trois précis",
              "trois noms avec début et fin",
            ],
            [
              "2 à 4",
              "observer occurrences, durée, attente, correction et exception",
              "journal factuel, pas une estimation de mémoire",
            ],
            [
              "5",
              "remplir les trois fiches et la matrice séparée",
              "gain, stabilité, risque et portes d’accès/propriété",
            ],
            [
              "6",
              "tester supprimer, fonction native, logiciel et connexion",
              "option la moins complexe et raison d’écarter les autres",
            ],
            [
              "7",
              "écrire le pilote, les cas d’échec et la condition d’arrêt",
              "note de décision partageable",
            ],
          ]}
        />

        <p>
          La note finale tient en une phrase : « nous testons ce flux parce que
          son gain est mesuré, ses règles sont stables et l’erreur revient dans
          cette file ; nous arrêtons si tel indicateur n’évolue pas ». Si vous
          ne pouvez pas écrire cette phrase, vous n’avez pas encore besoin d’un
          devis : vous avez besoin d’observer le travail.
        </p>

        <p>
          Si le pilote révèle plusieurs flux et rôles, transformez les fiches en
          critères de réception avec le guide du{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’une application métier
          </Link>
          . La page sur les{" "}
          <Link href="/services/outils-internes-sur-mesure">
            outils internes sur mesure
          </Link>{" "}
          présente ensuite le service correspondant, ses bases budgétaires et
          les points confirmés au devis.
        </p>

        <h2 id="sources">Sources et périmètres</h2>

        <p>
          Recherche effectuée le 20 juillet 2026. Les calculs du guide sont un
          exemple fictif reproductible ; les recommandations de méthode ne sont
          ni une promesse de gain ni un conseil juridique individualisé.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
              target="_blank"
              rel="noreferrer"
            >
              France Num — L’automatisation : une solution pour les TPE-PME
            </a>
            , mise à jour le 9 juillet 2026, pour la cartographie, la
            priorisation, le test, la maintenance, la documentation et la
            formation. Les fourchettes de prix et promesses générales de retour
            de cette page ne sont pas reprises.
          </li>
          <li>
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noreferrer"
            >
              Insee — Coût horaire du travail selon l’activité
            </a>
            , paru le 2 juillet 2026, pour l’estimation 2025 de 44,2 € dans les
            services marchands, entreprises de 10 salariés ou plus. Cette
            moyenne est remplaçable par le coût réel du lecteur.
          </li>
          <li>
            <a
              href="https://www.anact.fr/table-de-simulation-numerique"
              target="_blank"
              rel="noreferrer"
            >
              Anact — Table de simulation numérique
            </a>
            , pour la participation des salariés et la comparaison des futurs
            flux de travail dans les projets numériques.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — Profilage et décision entièrement automatisée
            </a>
            , pour le périmètre de l’article 22 du RGPD et les droits associés
            aux décisions exclusivement automatisées à effet juridique ou
            significatif.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
