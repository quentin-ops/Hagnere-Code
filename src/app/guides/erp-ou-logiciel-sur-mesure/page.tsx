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
import { formatGuideDate, getGuide, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("erp-ou-logiciel-sur-mesure");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.heroTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ERP, logiciel standard, module spécifique ou sur mesure : comment choisir",
      },
    ],
    publishedTime: guide.datePublished + "T09:00:00+02:00",
    modifiedTime: guide.dateModified + "T09:00:00+02:00",
    authors: [SITE_URL + "/equipe"],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.heroTitle,
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
    knowsAbout: [
      "Applications métier",
      "ERP",
      "Logiciels de gestion",
      "Développement sur mesure",
      "Intégration de systèmes",
      "Migration de données",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_URL + "/logos/logo-dark.png",
    },
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
      name: "ERP ou logiciel sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Quelle différence entre un ERP et un logiciel métier sur mesure ?",
    answer:
      "Un ERP est un logiciel déjà construit qui réunit plusieurs fonctions de l’entreprise, comme les ventes, les achats, les stocks ou la facturation. Un logiciel sur mesure est conçu autour de vos propres règles de travail. Entre les deux, vous pouvez configurer un ERP ou conserver l’ERP pour les fonctions courantes et ajouter seulement un module spécifique.",
  },
  {
    question: "Un ERP en SaaS est-il forcément standard ?",
    answer:
      "Non. SaaS signifie que le logiciel est utilisé en ligne, généralement avec un abonnement. Cela ne dit pas jusqu’où il est personnalisé. Un ERP standard peut être vendu en SaaS, et une application sur mesure peut elle aussi être hébergée en ligne. Comparez séparément les fonctions, les possibilités d’adaptation, l’hébergement et le mode de paiement.",
  },
  {
    question: "Faut-il choisir l’ERP s’il couvre presque tout le besoin ?",
    answer:
      "Oui, si les fonctions manquantes sont secondaires et que vos tâches importantes fonctionnent sans bricolage coûteux. Ne décidez pas avec un pourcentage global : un seul manque peut être bloquant s’il concerne la facturation, la production ou une obligation légale. Faites tester des situations réelles, y compris une erreur et une correction.",
  },
  {
    question:
      "Comment comparer le coût d’un ERP et celui d’un logiciel sur mesure ?",
    answer:
      "Calculez les deux options sur la même durée et pour les mêmes utilisateurs. Ajoutez la préparation, les licences ou le développement, la reprise des données, les connexions avec vos autres outils, la formation, le temps de vos salariés, l’hébergement, la maintenance, les évolutions et le départ éventuel. Un abonnement mensuel et un devis initial ne sont pas directement comparables.",
  },
  {
    question:
      "Peut-on garder un ERP et développer seulement une partie sur mesure ?",
    answer:
      "Oui. Cette solution est souvent la plus raisonnable lorsque la comptabilité, les achats ou les stocks sont bien couverts, mais qu’une tâche propre à votre entreprise reste pénible. Le module spécifique doit alors échanger proprement avec l’ERP. Il faut décider quel outil détient la bonne donnée et que faire si l’échange tombe en panne.",
  },
  {
    question:
      "Que faut-il demander pour pouvoir quitter un ERP ou changer de prestataire ?",
    answer:
      "Demandez un export d’essai avant de signer. Il doit contenir les données, leurs identifiants, les pièces jointes et les liens entre les éléments dans des formats utilisables. Le contrat doit indiquer le délai, le coût et l’aide prévue. Pour du sur-mesure, ajoutez le dépôt du code, les accès, les droits d’utilisation et la documentation nécessaire à un autre prestataire.",
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
          { label: "ERP ou logiciel sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vos équipes jonglent entre Excel, emails et logiciels qui communiquent mal ? Ce guide vous aide à choisir entre un ERP du marché, une solution configurée, un module spécifique ou une application entièrement sur mesure."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Une réponse selon votre situation",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Des tests avec votre vrai travail",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Un coût comparé sur 4 ans",
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
            label: "No-code ou sur-mesure",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d’un logiciel sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d’une application métier",
          },
          {
            href: "/guides/combien-coute-un-crm",
            label: "Combien coûte réellement un CRM",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes sur mesure",
          },
          {
            href: "/services/saas-applications-metier",
            label: "SaaS et applications métier",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Propriété du code et des accès",
          },
        ]}
        faqTitle="Choisir entre ERP et logiciel sur mesure : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous avez peut-être des informations clients dans un CRM — l’outil de
          suivi commercial —, des stocks dans un autre logiciel et des fichiers
          Excel pour combler les trous. Les équipes ressaisissent les mêmes
          données, les erreurs se multiplient et personne n’a une vision fiable
          de l’activité. Un éditeur vous propose alors son ERP, c’est-à-dire un
          logiciel déjà construit qui regroupe plusieurs fonctions de
          l’entreprise ; un développeur vous parle d’une application conçue sur
          mesure.{" "}
          <strong>
            Le bon choix est la solution la plus simple qui réalise correctement
            vos tâches importantes, s’intègre à l’existant et reste supportable
            pendant plusieurs années.
          </strong>
        </p>

        <InfoBox variant="blue" title="La réponse en quatre cas">
          Choisissez un logiciel standard si vos méthodes de travail sont
          courantes et que vous acceptez de vous adapter à l’outil. Choisissez
          un ERP configurable si quelques réglages suffisent. Gardez l’ERP et
          ajoutez un module sur mesure si une seule partie de votre activité
          vous différencie vraiment. Envisagez une application entièrement sur
          mesure seulement si le cœur du besoin est spécifique, stable et assez
          précieux pour financer aussi sa maintenance.
        </InfoBox>

        <p>
          Hagnéré Code développe des applications métier : nous avons donc un
          intérêt commercial évident. Ce guide doit pourtant pouvoir conclure
          qu’un logiciel existant est le meilleur choix. Construire un outil
          déjà disponible sur le marché ferait perdre du temps et de l’argent à
          l’entreprise comme au prestataire.
        </p>

        <GuideToc
          items={[
            {
              id: "faux-duel",
              label: "Le choix ne se limite pas à deux options",
            },
            {
              id: "quatre-architectures",
              label: "Standard, configuré, mixte ou sur mesure",
            },
            {
              id: "dix-criteres",
              label: "Les questions à poser avant les démonstrations",
            },
            { id: "preuve", label: "Faire tester votre vrai travail" },
            { id: "cout-total", label: "Comparer les coûts sur quatre ans" },
            {
              id: "adoption",
              label: "Vérifier que l’équipe utilisera l’outil",
            },
            {
              id: "donnees-securite",
              label: "Données, sécurité et possibilité de partir",
            },
            {
              id: "verdicts",
              label: "Quelle option choisir selon votre situation ?",
            },
            { id: "note-decision", label: "Résumer la décision sur une page" },
            {
              id: "premier-lot",
              label: "Commencer petit avant de généraliser",
            },
            { id: "sources", label: "Sources officielles consultées" },
          ]}
        />

        <h2 id="faux-duel">
          Vous n’avez pas seulement le choix entre un ERP rigide et du
          sur-mesure
        </h2>

        <p>
          Un <strong>ERP</strong>, ou progiciel de gestion intégré, réunit dans
          un même logiciel plusieurs fonctions de l’entreprise : ventes, achats,
          stocks, finance ou production selon l’offre. Un{" "}
          <strong>logiciel métier</strong> se concentre sur une activité plus
          précise. Le <strong>sur-mesure</strong> signifie que le logiciel est
          conçu à partir de vos propres règles.
        </p>

        <p>
          Le mot <strong>SaaS</strong> décrit autre chose : un logiciel utilisé
          en ligne, généralement payé par abonnement. Un ERP standard peut être
          un SaaS. Une application sur mesure peut aussi être accessible en
          ligne. Ne laissez donc pas une présentation commerciale mélanger les
          fonctions, le degré de personnalisation et la façon de payer.
        </p>

        <p>
          Le guide de{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment"
            target="_blank"
            rel="noreferrer"
          >
            France Num sur la mise en place d’un ERP
          </a>{" "}
          invite les TPE et PME à regarder les fonctions couvertes, la capacité
          à échanger avec d’autres outils, la facilité d’utilisation, la
          formation et le suivi. Ces questions sont plus utiles que le nombre de
          boutons dans une démonstration.
        </p>

        <InfoBox
          variant="amber"
          title="Parfois, la bonne décision est d’attendre"
        >
          Si personne ne sait encore quelle tâche doit être améliorée, si les
          données sont trop désordonnées pour un essai ou si les règles changent
          chaque semaine, n’achetez pas tout de suite un nouvel outil. Commencez
          par simplifier la façon de travailler et supprimer une double saisie.
          Un logiciel ne peut pas décider à la place de l’entreprise.
        </InfoBox>

        <h2 id="quatre-architectures">
          Les quatre façons réalistes d’équiper l’entreprise
        </h2>

        <GuideTable
          headers={["Option", "Quand elle est adaptée", "Risque à surveiller"]}
          rows={[
            [
              "Logiciel standard ou conçu pour votre secteur",
              "Vos tâches sont courantes et passent correctement dans l’outil sans manipulations répétées.",
              "Accumuler des fichiers et des outils annexes pour compenser une fonction importante manquante.",
            ],
            [
              "ERP configuré",
              "Les fonctions conviennent et les champs, droits ou étapes peuvent être réglés sans modifier le logiciel.",
              "Pousser les réglages si loin que chaque mise à jour devient dangereuse.",
            ],
            [
              "ERP avec un module sur mesure",
              "Les fonctions courantes sont couvertes, mais une tâche propre à l’entreprise mérite une interface dédiée.",
              "Créer des échanges de données fragiles entre l’ERP et le module.",
            ],
            [
              "Application entièrement sur mesure",
              "La façon de travailler est spécifique, stable et crée assez de valeur pour justifier un produit logiciel.",
              "Sous-estimer l’entretien, la sécurité, la documentation et les futures évolutions.",
            ],
          ]}
        />

        <p>
          « Standard » ne veut pas dire « mauvais » et « sur mesure » ne veut
          pas dire « libre ». Un logiciel existant peut être très flexible. Une
          application spécifique peut au contraire vous rendre dépendant d’un
          prestataire si vous ne recevez ni le code, ni les accès, ni la
          documentation.
        </p>

        <p>
          Dans une solution mixte, l’échange entre les deux outils se fait
          souvent par une <strong>API</strong>, c’est-à-dire un accès prévu pour
          que deux logiciels s’envoient des informations automatiquement. La
          simple mention « API disponible » ne suffit pas. Il faut vérifier que
          les bonnes données peuvent circuler, dans le bon sens, avec les droits
          et les volumes dont vous avez besoin.
        </p>

        <p>
          Avant de valider cette solution, utilisez notre guide pour{" "}
          <Link href="/guides/connecter-erp-crm-logiciel-metier">
            préparer la connexion entre l’ERP, le CRM et le logiciel métier
          </Link>
          . Il vous aide à écrire où chaque information doit être corrigée, dans
          quel sens elle circule et qui reprend un envoi refusé.
        </p>

        <h2 id="dix-criteres">
          Écrivez vos questions avant de voir les démonstrations
        </h2>

        <p>
          Une démonstration commerciale montre ce que l’éditeur sait bien
          présenter. Elle ne montre pas forcément ce qui arrive lorsqu’un devis
          est corrigé, qu’un technicien n’a plus de réseau ou qu’un client
          possède deux sites. Préparez vos cas avant le rendez-vous.
        </p>

        <GuideTable
          headers={[
            "Question à poser",
            "Ce qu’il faut obtenir",
            "Pourquoi cela compte",
          ]}
          rows={[
            [
              "Nos trois tâches les plus importantes fonctionnent-elles de bout en bout ?",
              "Une démonstration avec vos cas, dont une erreur et une correction.",
              "Une case cochée dans une brochure ne prouve pas que le travail réel est simple.",
            ],
            [
              "Quelles données entrent, sortent et restent dans l’outil ?",
              "Un essai avec un petit jeu de données et un export complet.",
              "La migration et le départ peuvent coûter plus cher que prévu.",
            ],
            [
              "Quels autres logiciels doivent communiquer avec lui ?",
              "Un échange testé et une explication de ce qui se passe en cas de panne.",
              "Une synchronisation défaillante recrée les doubles saisies.",
            ],
            [
              "Les futurs utilisateurs réussissent-ils sans aide permanente ?",
              "Un essai par les personnes qui feront réellement le travail.",
              "Un outil acheté mais contourné ne produit aucune économie.",
            ],
            [
              "Quel délai et quel temps interne faut-il prévoir ?",
              "Un calendrier avec les jours demandés à chaque métier.",
              "Le projet peut bloquer si les salariés ne sont jamais disponibles.",
            ],
            [
              "Que paierons-nous pendant quatre ans ?",
              "Un détail des dépenses initiales, annuelles et de sortie.",
              "Comparer une licence mensuelle à un devis de développement fausse le choix.",
            ],
            [
              "Qui gère la sécurité, les sauvegardes et les obligations légales ?",
              "Des responsabilités écrites et un test de restauration.",
              "Le nom d’un grand éditeur ne transfère pas toutes vos obligations.",
            ],
            [
              "Pourrons-nous changer d’éditeur ou de prestataire ?",
              "Un export utilisable, les accès, le code concerné et les coûts de départ.",
              "Une dépendance mal comprise apparaît souvent trop tard.",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/1.2/"
            target="_blank"
            rel="noreferrer"
          >
            référentiel public d’écoconception des services numériques
          </a>{" "}
          recommande d’identifier les utilisateurs et de vérifier si une
          solution existante répond déjà au besoin. C’est aussi une règle
          économique saine : le sur-mesure commence après une recherche sérieuse
          des solutions disponibles, pas avant.
        </p>

        <h2 id="preuve">Faites réaliser les mêmes tâches à chaque solution</h2>

        <p>
          Préparez trois situations assez importantes pour éliminer une option
          si elle échoue. Utilisez les mêmes données de test, les mêmes profils
          d’utilisateurs et les mêmes résultats attendus. La méthode publique de{" "}
          <a
            href="https://design.numerique.gouv.fr/bien-concevoir/"
            target="_blank"
            rel="noreferrer"
          >
            DesignGouv
          </a>{" "}
          insiste sur le besoin réel, le test avec les utilisateurs et les
          améliorations successives. Ces principes s’appliquent aussi à une
          entreprise privée.
        </p>

        <p>
          <strong>Exemple illustratif fictif :</strong> une PME de maintenance
          veut mieux organiser ses interventions. Elle demande à chaque candidat
          de montrer les trois situations suivantes : planifier une urgence chez
          un client, remplacer le technicien au dernier moment et corriger une
          pièce consommée après la clôture de l’intervention.
        </p>

        <GuideTable
          headers={[
            "Ce que l’équipe réalise",
            "Ce que vous observez",
            "Décision possible",
          ]}
          rows={[
            [
              "Créer l’intervention depuis une demande client.",
              "Nombre d’étapes, informations ressaisies et règles automatiques.",
              "Accepter si le parcours courant reste simple.",
            ],
            [
              "Gérer un imprévu puis prévenir les personnes concernées.",
              "Droits, notifications, travail sur mobile et comportement hors connexion.",
              "Écarter si l’urgence exige encore des outils parallèles.",
            ],
            [
              "Corriger l’intervention et transmettre les données à la facturation.",
              "Historique, validation, échange avec l’autre logiciel et gestion d’une erreur.",
              "Demander une adaptation si la correction est possible mais trop coûteuse.",
            ],
          ]}
        />

        <p>
          Classez chaque résultat en quatre mots compréhensibles : réussi,
          réussi avec une manipulation acceptable, non démontré ou impossible.
          Ne laissez pas « ce sera disponible plus tard » devenir une fonction
          déjà acquise dans votre comparaison.
        </p>

        <h2 id="cout-total">
          Comparez le coût total sur quatre ans, pas le prix d’entrée
        </h2>

        <p>
          Un ERP paraît souvent moins cher au départ parce qu’il affiche un
          abonnement. Le sur-mesure concentre davantage de dépenses au début.
          Pour comparer honnêtement, additionnez tout sur la même durée :
        </p>

        <FormulaBox>
          {
            "Coût total sur 4 ans =\nmise en place ou développement\n+ licences, hébergement et support des années 1 à 4\n+ reprise des données et connexions aux autres outils\n+ formation et temps de vos salariés\n+ maintenance, sécurité et évolutions\n+ coût du départ ou du remplacement"
          }
        </FormulaBox>

        <p>
          Les montants suivants sont un{" "}
          <strong>exemple illustratif fictif</strong>, pas des prix moyens ni un
          devis Hagnéré Code. Les quatre options couvrent ici le même besoin,
          pour 20 utilisateurs, avec une hausse annuelle de 3 % des dépenses
          récurrentes. Le détail sert à montrer la méthode.
        </p>

        <GuideTable
          headers={["Option fictive", "Composition du coût", "Total sur 4 ans"]}
          rows={[
            [
              "Logiciel standard",
              "18 000 € au départ + 50 204 € sur quatre ans + 6 000 € pour partir.",
              "74 204 €",
            ],
            [
              "ERP configuré",
              "38 000 € au départ + 75 305 € sur quatre ans + 8 000 € pour partir.",
              "121 305 €",
            ],
            [
              "ERP et module spécifique",
              "70 000 € au départ + 96 224 € sur quatre ans + 12 000 € pour partir.",
              "178 224 €",
            ],
            [
              "Application entièrement sur mesure",
              "112 000 € au départ + 100 407 € sur quatre ans + 16 000 € pour partir.",
              "228 407 €",
            ],
          ]}
        />

        <p>
          Ces totaux ne classent pas les options : elles doivent produire la
          même valeur pour être comparées. Le standard à 74 204 € est un mauvais
          achat s’il oblige trois personnes à ressaisir des informations chaque
          semaine. Le sur-mesure à 228 407 € est un mauvais achat si l’ERP
          réalise déjà le travail sans difficulté.
        </p>

        <h3>Calculez ensuite ce que l’outil fait réellement gagner</h3>

        <FormulaBox>
          {
            "Gain brut =\ntemps réellement économisé × coût horaire\n+ erreurs ou dépenses réellement évitées\n\nGain net = gain brut - coût total\nRetour sur investissement = gain net ÷ coût total × 100"
          }
        </FormulaBox>

        <p>
          Dans le même <strong>exemple fictif</strong>, le choix mixte
          produirait 60 000 € de gains bruts par an, soit 240 000 € en quatre
          ans. Après retrait de 178 224 € de coût, le gain net serait de 61 776
          € et le retour sur investissement de 34,7 %. Le cumul deviendrait
          positif vers le 23e mois avec les hypothèses retenues. Ce calcul n’est
          pas une promesse : si les utilisateurs adoptent l’outil six mois plus
          tard, les gains doivent aussi être décalés.
        </p>

        <p>
          France Num propose des repères pour{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noreferrer"
          >
            valoriser le temps économisé par l’automatisation
          </a>
          . Son{" "}
          <a
            href="https://www.francenum.gouv.fr/files/2026-03/guide-numerique-des-entreprises_edition-2026_mars-2026.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Guide numérique des entreprises 2026
          </a>{" "}
          distingue aussi les dépenses de départ, celles de la durée, le temps
          interne et les frais de fin. Nous appliquons ici cette logique au
          logiciel.
        </p>

        <p>
          Pour examiner précisément un devis spécifique, consultez notre guide
          du{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            prix d’un logiciel sur mesure
          </Link>
          .
        </p>

        <h2 id="adoption">
          Vérifiez que les équipes utiliseront vraiment l’outil
        </h2>

        <p>
          Un logiciel ne fait gagner du temps que s’il remplace réellement les
          fichiers, les messages et les doubles saisies. Demandez à deux ou
          trois futurs utilisateurs d’accomplir leur journée type. Regardez où
          ils hésitent, quelles informations manquent et à quel moment ils
          retournent vers Excel.
        </p>

        <GuideTable
          headers={["Avant l’essai", "Pendant l’essai", "Après l’essai"]}
          rows={[
            [
              "Choisir des personnes aux rôles différents et expliquer le résultat attendu.",
              "Les laisser travailler sans guider chaque clic ; noter les erreurs et les contournements.",
              "Corriger le processus ou l’outil, puis refaire le même test.",
            ],
            [
              "Préparer des données réalistes mais protégées.",
              "Tester aussi une exception, une correction et une absence.",
              "Estimer la formation et le soutien nécessaires au démarrage.",
            ],
          ]}
        />

        <p>
          Prévoyez le temps interne dans le budget : nettoyer les données,
          décider des règles, tester et former. Une offre qui mobilise dix
          salariés pendant six semaines n’a pas le même coût qu’une offre
          demandant deux demi-journées, même si les factures se ressemblent.
        </p>

        <h2 id="donnees-securite">
          Avant de signer, testez les données, la sécurité et la possibilité de
          partir
        </h2>

        <p>
          Pour chaque information importante, écrivez quel logiciel en détient
          la version correcte. Si l’adresse d’un client diffère entre l’ERP et
          le CRM, lequel doit l’emporter ? Qui traite le conflit ? Que se
          passe-t-il si la synchronisation s’arrête pendant deux heures ?
        </p>

        <p>
          La CNIL recommande de{" "}
          <a
            href="https://www.cnil.fr/fr/faire-un-choix-eclaire-de-son-architecture"
            target="_blank"
            rel="noreferrer"
          >
            représenter les échanges et le cycle de vie des données
          </a>{" "}
          avant de choisir l’architecture. Lorsqu’un fournisseur traite des
          données personnelles pour votre compte, sa fiche sur la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noreferrer"
          >
            gestion de la sous-traitance
          </a>{" "}
          demande de préciser les responsabilités, les accès, les incidents et
          la restitution des données. Une mention « conforme RGPD » dans une
          brochure ne remplace pas ces réponses.
        </p>

        <GuideTable
          headers={["Sujet", "Ce qu’il faut demander", "Réponse insuffisante"]}
          rows={[
            [
              "Échanges entre logiciels",
              "Données envoyées, sens, fréquence, test et traitement d’une panne.",
              "« Le connecteur existe. »",
            ],
            [
              "Droits d’accès",
              "Essai avec plusieurs profils et liste de ce que chacun peut voir ou modifier.",
              "« Tout est paramétrable. »",
            ],
            [
              "Sauvegardes",
              "Fréquence, contenu et compte rendu d’une restauration déjà testée.",
              "« Sauvegarde quotidienne incluse. »",
            ],
            [
              "Hébergement et sous-traitants",
              "Fournisseurs, lieux, accès d’assistance et transferts éventuels.",
              "L’adresse du siège social de l’éditeur.",
            ],
            [
              "Départ",
              "Export des données, fichiers et liens entre les éléments, avec délai et coût.",
              "Un bouton CSV montré sans essai.",
            ],
            [
              "Développement spécifique",
              "Dépôt du code, droits, comptes, documentation et procédure d’installation.",
              "Le code reste uniquement sur le compte du prestataire.",
            ],
          ]}
        />

        <p>
          Pour les services en ligne, la{" "}
          <a
            href="https://www.cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud"
            target="_blank"
            rel="noreferrer"
          >
            CNIL rappelle que le client conserve généralement des
            responsabilités
          </a>{" "}
          et doit configurer les protections disponibles. Un grand éditeur ne
          prend donc pas automatiquement toutes les décisions à votre place.
        </p>

        <p>
          Le référentiel{" "}
          <a
            href="https://cyber.gouv.fr/documents/388/secnumcloud-referentiel-exigences-v3.2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            SecNumCloud de l’ANSSI
          </a>{" "}
          décrit, dans son propre domaine, une sortie permettant de récupérer
          les données dans des formats documentés et utilisables ailleurs. Ce
          n’est pas une obligation générale pour tous les ERP, mais c’est une
          bonne exigence pratique. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noreferrer"
          >
            fiche CNIL sur les sauvegardes
          </a>{" "}
          rappelle également qu’il faut vérifier la capacité réelle à les
          restaurer.
        </p>

        <h2 id="verdicts">
          Quelle option choisir selon ce que vous observez ?
        </h2>

        <GuideTable
          headers={[
            "Ce que vos essais montrent",
            "Choix le plus raisonnable",
            "Condition avant de signer",
          ]}
          rows={[
            [
              "Un logiciel du marché réalise les tâches importantes, s’intègre bien et permet un export correct.",
              "Logiciel standard ou conçu pour votre secteur.",
              "Accepter d’adapter les habitudes secondaires au produit.",
            ],
            [
              "Le logiciel convient et les écarts se règlent avec ses options officielles.",
              "ERP configuré.",
              "Documenter les réglages et les retester après les mises à jour.",
            ],
            [
              "Les fonctions courantes marchent, mais une seule tâche propre à l’entreprise reste mal couverte.",
              "ERP avec un module spécifique.",
              "Décider quel outil détient la bonne donnée et surveiller les échanges.",
            ],
            [
              "Le cœur du travail est spécifique, stable, mesuré et aucun produit existant ne le réalise correctement.",
              "Application sur mesure limitée à ce besoin.",
              "Financer aussi l’entretien, la sécurité et la transmission à un autre prestataire.",
            ],
            [
              "Le besoin change constamment, les données sont inconnues ou personne ne peut décider.",
              "Reporter le projet et simplifier l’existant.",
              "Nommer un responsable et stabiliser les règles avant d’acheter.",
            ],
          ]}
        />

        <p>
          Ne demandez pas « quel pourcentage du besoin est couvert ? ». Demandez
          « que se passe-t-il si cette tâche précise reste manuelle ? ». Un
          manque de 5 % peut bloquer la production ; un manque de 30 % peut
          concerner des fonctions que vous n’utiliserez jamais.
        </p>

        <h2 id="note-decision">Résumez la décision sur une seule page</h2>

        <p>
          Une note courte oblige chacun à regarder les mêmes faits. Elle peut
          être discutée par la direction, les utilisateurs et les prestataires
          sans rouvrir toutes les présentations commerciales.
        </p>

        <FormulaBox>
          {
            "DÉCISION — [activité concernée]\n\nProblème actuel et coût observé :\nRésultat attendu :\nPersonnes concernées :\n3 situations testées :\nDonnées à reprendre :\nOutils à connecter :\nSolutions essayées et résultat :\nTemps interne nécessaire :\nCoût total sur 4 ans :\nRisque principal :\nExport et changement de prestataire testés :\nChoix retenu et raison :\nPremière étape limitée :\nCondition qui ferait arrêter ou revoir le choix :"
          }
        </FormulaBox>

        <p>
          Si cette note fait apparaître une partie spécifique à développer,
          transformez-la en besoins et tests attendus avec notre guide du{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’une application métier
          </Link>
          . Si le besoin concerne surtout le suivi des prospects et des ventes,
          commencez par{" "}
          <Link href="/guides/combien-coute-un-crm">
            comparer le coût réel d’un CRM
          </Link>
          .
        </p>

        <p>
          Si votre point de départ reste un classeur, le guide{" "}
          <Link href="/guides/transformer-excel-en-application">
            transformer Excel en application
          </Link>{" "}
          peut conclure qu’un meilleur fichier ou un outil existant suffit. Le
          comparatif{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou développement sur mesure
          </Link>{" "}
          répond à une question différente : comment construire la partie qui
          n’existe pas déjà.
        </p>

        <h2 id="premier-lot">
          Commencez par une petite partie qui peut encore faire changer la
          décision
        </h2>

        <p>
          Une fois l’option choisie, ne généralisez pas immédiatement à toute
          l’entreprise. Testez d’abord le point le plus risqué avec de vrais
          utilisateurs et un volume limité de données.
        </p>

        <GuideTable
          headers={[
            "Option",
            "Premier test utile",
            "Pour continuer, il faut que…",
          ]}
          rows={[
            [
              "Logiciel standard",
              "Essai avec quelques utilisateurs et des données représentatives.",
              "Les trois situations réussissent et l’export est utilisable.",
            ],
            [
              "ERP configuré",
              "Réglage d’un seul processus, documenté pas à pas.",
              "Une personne interne comprend et peut expliquer les règles.",
            ],
            [
              "ERP avec module spécifique",
              "Un parcours complet avec échange de données et panne simulée.",
              "Les deux outils retrouvent une situation cohérente après l’incident.",
            ],
            [
              "Application sur mesure",
              "Une tâche complète utilisable, de la saisie au résultat.",
              "L’utilisateur réussit sans maquette trompeuse ni fonction manuelle cachée.",
            ],
          ]}
        />

        <p>
          France Num explique que la{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/gestion-de-projet-0"
            target="_blank"
            rel="noreferrer"
          >
            préparation structurée peut être combinée à des essais successifs
          </a>{" "}
          lorsqu’un projet numérique garde des inconnues. Fixez donc le budget,
          le résultat attendu et les contraintes, puis testez ce qui peut encore
          invalider le choix.
        </p>

        <InfoBox
          variant="amber"
          title="Quand le sur-mesure n’est pas le bon achat"
        >
          Ne faites pas développer un logiciel si un produit existant réalise
          correctement le travail, si vous cherchez seulement une interface plus
          moderne, si personne ne peut représenter les utilisateurs ou si le
          budget exclut la reprise des données et la maintenance. Dans ces cas,
          choisissez un éditeur, simplifiez le travail ou reportez le projet.
        </InfoBox>

        <GuideInlineCTA
          title="Vous hésitez encore entre un ERP et une partie sur mesure ?"
          description="Présentez-nous les trois tâches qui vous posent problème, les logiciels déjà utilisés et les essais réalisés. Nous vous aiderons à repérer ce qu’un outil du marché couvre déjà et ce qui mérite vraiment un développement spécifique."
          tags={[
            "Avis avant développement",
            "Logiciel standard toujours possible",
            "Réponse centrée sur votre travail",
          ]}
          ctaLabel="Présenter mon besoin"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources officielles consultées</h2>

        <p>
          Ces documents ont été consultés le 20 juillet 2026. Ils soutiennent
          les critères et la méthode, pas les montants de l’exemple fictif. Les
          obligations juridiques et sectorielles doivent être vérifiées pour
          votre propre activité.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/gestion-traitement-et-analyse-des-donnees/piloter-sa-tpe"
              target="_blank"
              rel="noreferrer"
            >
              France Num — choisir un outil de pilotage pour sa TPE ou PME
            </a>
            , pour le budget, l’accès aux données et les échanges avec les
            autres logiciels.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/files/2026-03/guide-numerique-des-entreprises_edition-2026_mars-2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              France Num — Guide numérique des entreprises 2026
            </a>
            , dont la structure de coût a été adaptée ici au choix d’un
            logiciel.
          </li>
          <li>
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noreferrer"
            >
              DesignGouv — concevoir un service numérique de qualité
            </a>
            , pour partir des utilisateurs et tester progressivement.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/faire-un-choix-eclaire-de-son-architecture"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — faire un choix éclairé de son architecture
            </a>
            , pour les échanges, l’hébergement, les droits et la portabilité des
            données.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — sécurité et sous-traitance
            </a>
            , pour les responsabilités, les accès, les incidents et la
            restitution.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — qualifications et responsabilités dans le cloud
            </a>
            , pour comprendre ce qui reste à la charge du client.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — sauvegarder et vérifier la restauration
            </a>
            .
          </li>
          <li>
            <a
              href="https://cyber.gouv.fr/documents/388/secnumcloud-referentiel-exigences-v3.2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI — référentiel SecNumCloud 3.2
            </a>
            , utilisé comme exemple exigeant de récupération des données, dans
            son domaine propre.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
