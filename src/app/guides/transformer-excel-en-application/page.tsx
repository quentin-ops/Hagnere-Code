import type { Metadata } from "next";
import Link from "next/link";
import { ExcelDecisionDiagnostic } from "@/components/guides/ExcelDecisionDiagnostic";
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

const guide = getGuide("transformer-excel-en-application");

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
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Transformer un fichier Excel en application métier",
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
  headline: guide.cardTitle,
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
      "Outils internes",
      "Migration de données",
      "Excel",
      "Power Apps",
      "Développement sur mesure",
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
      name: "Transformer Excel en application métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Peut-on transformer automatiquement un fichier Excel en application ?",
    answer:
      "On peut générer une première interface à partir d'un tableau, mais pas une application fiable en un clic. Les formules, droits d'accès, validations, doublons et cas particuliers doivent être compris puis reconstruits. L'import accélère le départ ; il ne remplace pas l'analyse du travail réel.",
  },
  {
    question: "Quand vaut-il mieux garder Excel ?",
    answer:
      "Gardez Excel si peu de personnes le modifient, si les règles restent simples et si une erreur se corrige sans conséquence importante. Commencez aussi par tester la coédition et une meilleure organisation du fichier. Une application devient pertinente lorsque les copies, droits, validations ou échanges avec d'autres outils rendent le fonctionnement fragile.",
  },
  {
    question: "Power Apps est-il inclus dans Microsoft 365 ?",
    answer:
      "Certaines possibilités Power Apps liées à Microsoft 365 et aux connecteurs standard peuvent être incluses, mais les données locales et les connecteurs premium ou personnalisés ne le sont pas de la même façon. Vérifiez les sources de données utilisées et le nombre d'utilisateurs avant de retenir un prix.",
  },
  {
    question: "Faut-il choisir du no-code ou du sur-mesure ?",
    answer:
      "Choisissez une plateforme no-code lorsque le besoin est assez standard et que ses limites sont acceptables. Le sur-mesure devient plus cohérent lorsque vos règles différencient réellement l'entreprise, que plusieurs logiciels doivent communiquer ou que vous devez maîtriser finement les droits et les évolutions.",
  },
  {
    question:
      "Que deviennent les anciens fichiers Excel après la mise en ligne ?",
    answer:
      "Conservez-les en lecture seule tant que les données reprises et les obligations d'archive n'ont pas été vérifiées. Une migration réussie ne consiste pas à supprimer l'ancien fichier le jour du lancement. Elle prévoit qui contrôle les résultats, combien de temps l'ancien système reste consultable et comment revenir en arrière en cas de problème.",
  },
  {
    question: "Combien coûte la transformation d'Excel en application ?",
    answer:
      "Le prix dépend moins du nombre de lignes que des règles, des utilisateurs, des droits, des intégrations et de la qualité des données. Comparez sur la même durée les licences, la construction, la reprise des données, la formation, l'entretien et le temps interne. Sans ces postes, deux devis ne sont pas comparables.",
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
          { label: "Transformer Excel en application" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre entreprise dépend d'un fichier Excel devenu difficile à partager, contrôler ou faire évoluer ? Découvrez s'il faut simplement le fiabiliser, choisir un logiciel existant ou le remplacer par une vraie application métier."
        heroAction={{
          href: "#diagnostic",
          label: "Faire le diagnostic",
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
            title: "Garder Excel reste possible",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "4 solutions comparées",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Migration sans arrêt brutal",
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
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou sur-mesure",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d'un logiciel sur mesure",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "ERP ou logiciel sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d'une application métier",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes sur mesure",
          },
          {
            href: "/guides/automatiser-processus-metier",
            label: "Quel processus automatiser en premier ?",
          },
        ]}
        faqTitle="Passer d'Excel à une application : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vos équipes utilisent un fichier Excel pour suivre des commandes, des
          interventions, des stocks ou des dossiers clients. Au fil du temps,
          les copies se multiplient, certaines formules ne sont comprises que
          par une personne et deux collègues ne savent plus quelle version est
          la bonne.{" "}
          <strong>Faut-il en faire une application ? Pas forcément.</strong>
        </p>
        <p>
          Une application métier est un outil conçu autour du travail réel de
          l&apos;entreprise : chacun voit les informations utiles, les règles
          sont appliquées de la même façon et les actions importantes laissent
          une trace. Avant d&apos;en commander une, vérifiez si une correction
          d&apos;Excel ou un logiciel déjà disponible peut résoudre le problème
          plus simplement.
        </p>

        <InfoBox variant="blue" title="La décision la plus raisonnable">
          Commencez par l&apos;option la moins coûteuse qui couvre correctement
          le besoin : fiabiliser Excel, acheter un logiciel métier existant,
          tester une plateforme permettant de construire sans beaucoup de code,
          puis envisager le sur-mesure si vos règles justifient vraiment un
          outil propre à l&apos;entreprise.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "avant-de-remplacer",
              label: "Ce qu'il faut essayer avant de remplacer Excel",
            },
            {
              id: "diagnostic",
              label: "Votre fichier doit-il devenir une application ?",
            },
            {
              id: "quatre-solutions",
              label: "Comparer les quatre solutions possibles",
            },
            {
              id: "donnees-regles-ecrans",
              label: "Transformer le travail, pas seulement les colonnes",
            },
            {
              id: "cout-quatre-ans",
              label: "Comparer les coûts sur la même durée",
            },
            {
              id: "migration",
              label: "Migrer sans bloquer l'équipe",
            },
            {
              id: "donnees-rgpd",
              label: "Protéger les données et conserver les archives",
            },
            {
              id: "contrat",
              label: "Ce que le contrat doit vous permettre de récupérer",
            },
            {
              id: "exemple",
              label: "Exemple d'une décision raisonnable",
            },
            {
              id: "plan-30-jours",
              label: "Ce que vous pouvez décider en trente jours",
            },
            { id: "sources", label: "Sources et points à revalider" },
          ]}
        />

        <h2 id="avant-de-remplacer">
          Avant de remplacer Excel, essayez de supprimer le problème le plus
          simple
        </h2>
        <p>
          Un fichier posé sur un serveur partagé ou envoyé par email crée
          rapidement des copies concurrentes. Si la difficulté principale est
          là, testez d&apos;abord la coédition. Microsoft indique qu&apos;elle
          nécessite un abonnement Microsoft 365 adapté, un format compatible et
          un stockage sur OneDrive, OneDrive Entreprise ou SharePoint Online. Un
          partage réseau classique ou un SharePoint installé dans
          l&apos;entreprise ne fonctionne pas de la même manière.
        </p>
        <GuideTable
          caption="Les corrections à tester avant un projet logiciel"
          headers={["Problème vécu", "Essai simple", "Limite à surveiller"]}
          rows={[
            [
              "Plusieurs copies du même fichier",
              "Un seul fichier partagé avec coédition",
              "Tous les utilisateurs doivent employer un environnement compatible.",
            ],
            [
              "Colonnes et formules incompréhensibles",
              "Nettoyer les noms, séparer les tables et documenter les calculs",
              "Si une seule personne comprend encore les règles, le risque reste élevé.",
            ],
            [
              "Ressaisie entre deux outils",
              "Importer ou automatiser l'échange le plus fréquent",
              "Une suite de contournements peut devenir plus fragile qu'une application.",
            ],
          ]}
        />
        <p>
          Le nombre de lignes n&apos;est généralement pas le meilleur
          indicateur. Microsoft publie les limites du format Excel, mais une PME
          peut être bloquée bien avant de les atteindre. Comptez plutôt les
          personnes qui doivent modifier le fichier, les copies qui circulent,
          les corrections manuelles et les décisions qui dépendent d&apos;une
          formule mal comprise.
        </p>

        <h2 id="diagnostic">
          Votre fichier doit-il réellement devenir une application ?
        </h2>
        <p>
          Répondez à partir de ce qui se passe aujourd&apos;hui, pas de ce que
          vous espérez construire. Le diagnostic ci-dessous fonctionne dans
          votre navigateur, ne demande aucune coordonnée et peut vous conseiller
          de conserver Excel.
        </p>
        <ExcelDecisionDiagnostic />
        <p>
          Le résultat sert à ouvrir la discussion. Il ne connaît ni la qualité
          de vos données, ni les logiciels déjà présents, ni le risque financier
          d&apos;une erreur. Avant un achat, faites confirmer les points qui
          changent réellement la décision.
        </p>

        <h2 id="quatre-solutions">
          Quatre réponses possibles, de la plus simple à la plus spécifique
        </h2>
        <GuideTable
          caption="Choisir une solution selon le besoin réel"
          headers={[
            "Solution",
            "Quand elle convient",
            "Ce qu'il faut accepter",
          ]}
          rows={[
            [
              "Excel fiabilisé",
              "Peu d'utilisateurs, règles simples, risque limité",
              "Un outil encore dépendant de sa structure et de ses auteurs.",
            ],
            [
              "Logiciel métier existant",
              "Le marché propose déjà l'essentiel des fonctions",
              "Adapter une partie de vos habitudes au produit.",
            ],
            [
              "Power Apps ou plateforme no-code",
              "Besoin assez standard, équipe prête à administrer la plateforme",
              "Licences, limites de l'éditeur et coût de sortie.",
            ],
            [
              "Application sur mesure",
              "Règles propres, intégrations importantes, droits fins ou usage central",
              "Investissement initial et entretien dans le temps.",
            ],
          ]}
        />
        <p>
          Un logiciel existant couvrant correctement votre besoin est souvent
          préférable à un développement. Demandez une démonstration avec vos
          vrais cas et vos vrais profils d&apos;utilisateurs. Si le produit ne
          couvre les écarts qu&apos;avec une longue liste de contournements,
          comparez alors le{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code et le développement sur mesure
          </Link>{" "}
          sur les mêmes exigences.
        </p>

        <h2 id="donnees-regles-ecrans">
          Importer les lignes ne suffit pas : il faut comprendre le travail
        </h2>
        <p>
          Un générateur peut transformer des colonnes en champs et afficher une
          première liste. Il ne sait pas pourquoi une remise doit être validée,
          qui peut voir une marge, ce qui rend un dossier complet ou quelle
          exception un commercial applique à un client historique.
        </p>
        <GuideTable
          caption="Ce qu'il faut traduire avant de construire"
          headers={["Dans Excel", "Dans l'application", "Question à poser"]}
          rows={[
            [
              "Colonnes et onglets",
              "Données reliées entre elles",
              "Qu'est-ce qu'un client, un dossier, une commande ou une intervention ?",
            ],
            [
              "Formules et macros",
              "Règles visibles et testables",
              "Qui peut expliquer chaque calcul et chaque exception ?",
            ],
            [
              "Couleurs et commentaires",
              "États, alertes et historique",
              "Quelle action la couleur déclenche-t-elle réellement ?",
            ],
            [
              "Fichier partagé",
              "Écrans et droits par rôle",
              "Qui peut lire, modifier, valider ou supprimer ?",
            ],
          ]}
        />
        <p>
          Faites raconter une journée normale à chaque rôle concerné. Les
          détails utiles apparaissent dans des phrases comme « je copie cette
          ligne pour prévenir l&apos;atelier » ou « je demande toujours à Marie
          avant de confirmer ». Ce sont ces gestes qu&apos;il faut simplifier,
          pas reproduire aveuglément à l&apos;écran.
        </p>

        <h2 id="cout-quatre-ans">Comparez le coût complet sur la même durée</h2>
        <p>
          Comparer un abonnement mensuel avec un devis de construction crée une
          fausse différence. Choisissez une durée commune, par exemple quatre
          ans, puis ajoutez les mêmes postes des deux côtés.
        </p>
        <FormulaBox>
          Coût sur 4 ans = construction ou mise en place + licences + reprise
          des données + formation + entretien + évolutions + temps interne +
          sortie
        </FormulaBox>
        <GuideTable
          caption="Les postes à demander dans chaque proposition"
          headers={["Poste", "Question simple", "Oubli fréquent"]}
          rows={[
            [
              "Utilisateurs",
              "Combien de personnes doivent avoir une licence aujourd'hui et demain ?",
              "Les comptes occasionnels ou externes.",
            ],
            [
              "Mise en place",
              "Qui nettoie les données et reconstruit les règles ?",
              "Le temps des salariés mobilisés.",
            ],
            [
              "Fonctionnement",
              "Qui corrige, sauvegarde, assiste et fait évoluer ?",
              "L'administration de la plateforme.",
            ],
            [
              "Sortie",
              "Que récupérons-nous si nous changeons d'outil ?",
              "Les automatisations et pièces jointes non exportables.",
            ],
          ]}
        />
        <p>
          <strong>Exemple illustratif fictif.</strong> Au relevé du 21 juillet
          2026, Microsoft affiche Power Apps Premium à 17,30 € HT par
          utilisateur et par mois avec paiement annuel. Pour dix utilisateurs
          pendant quarante-huit mois, les licences seules représentent 8 304 €
          HT si le tarif reste inchangé. Ce montant n&apos;inclut ni la
          préparation, ni la reprise des données, ni la formation, ni
          l&apos;administration. Il illustre la méthode ; il ne constitue pas un
          devis.
        </p>

        <h2 id="migration">
          Faites cohabiter l&apos;ancien fichier et le nouvel outil le temps de
          vérifier
        </h2>
        <p>
          La migration commence par une copie de travail. On nettoie les
          doublons, on choisit les champs réellement utiles et on relie chaque
          ancienne colonne à sa destination. Les lignes ambiguës sont signalées
          à une personne capable de décider ; elles ne doivent pas être «
          corrigées » automatiquement sans règle.
        </p>
        <ol>
          <li>
            Choisissez un échantillon comprenant des cas simples et des
            exceptions.
          </li>
          <li>
            Importez-le, puis comparez les totaux et quelques dossiers ligne par
            ligne.
          </li>
          <li>
            Faites travailler un petit groupe dans le nouvel outil sur une
            période limitée.
          </li>
          <li>
            Corrigez les règles et formez les utilisateurs avant la bascule
            générale.
          </li>
          <li>
            Conservez l&apos;ancien fichier en lecture seule et prévoyez la
            marche à suivre si un problème important apparaît.
          </li>
        </ol>
        <p>
          Ce temps de vérification n&apos;est pas du retard. Il protège
          l&apos;activité et révèle les habitudes que personne n&apos;avait
          pensé à décrire.
        </p>

        <h2 id="donnees-rgpd">
          L&apos;outil ne devient pas « conforme » à votre place
        </h2>
        <p>
          Si le fichier contient des données de clients, de salariés ou de
          partenaires, votre entreprise reste responsable de leur utilisation.
          La CNIL rappelle que la relation avec un éditeur ou un hébergeur doit
          être encadrée lorsqu&apos;il traite ces données pour votre compte.
          Vérifiez le contrat, les mesures de sécurité, les lieux de stockage,
          les personnes autorisées et les conditions de restitution.
        </p>
        <p>
          Le plan acheté compte autant que le nom de l&apos;éditeur. Airtable
          indique par exemple que le choix d&apos;une résidence des données en
          Europe est lié à son offre Enterprise Scale et que certaines données
          peuvent rester traitées ailleurs. Ne vous contentez donc pas de la
          phrase « hébergé en Europe » : demandez quelles données, avec quel
          abonnement et quels sous-traitants.
        </p>
        <InfoBox
          variant="amber"
          title="Migration et archive sont deux sujets différents"
        >
          Les textes cités en source prévoient notamment des durées de
          conservation pour certains documents comptables et fiscaux. Une
          application avec un historique ne remplace pas automatiquement une
          archive conforme. Faites valider les durées et les formats applicables
          à vos documents avant de supprimer quoi que ce soit.
        </InfoBox>

        <h2 id="contrat">
          Le contrat doit préciser ce que vous possédez et ce que vous récupérez
        </h2>
        <p>
          Pour une plateforme, demandez le format d&apos;export des données,
          pièces jointes, utilisateurs et historiques. Pour un développement,
          ajoutez l&apos;accès au code, à l&apos;hébergement, aux comptes
          techniques et aux instructions nécessaires pour qu&apos;un autre
          prestataire puisse reprendre le service.
        </p>
        <p>
          Le paiement d&apos;une facture ne suffit pas toujours à définir les
          droits d&apos;utilisation du code. L&apos;article L131-3 du Code de la
          propriété intellectuelle encadre la cession des droits. Faites
          préciser par écrit les droits transmis, leur étendue et leur durée,
          puis faites relire les clauses importantes si l&apos;outil devient
          essentiel à l&apos;entreprise.
        </p>
        <GuideTable
          caption="Les questions à faire apparaître dans le contrat"
          headers={["Sujet", "Ce que vous devez savoir", "Pourquoi"]}
          rows={[
            [
              "Données",
              "Formats, délai et coût de restitution",
              "Pouvoir changer de solution.",
            ],
            [
              "Code et comptes",
              "Accès remis et droits d'utilisation écrits",
              "Ne pas dépendre d'une seule personne.",
            ],
            [
              "Entretien",
              "Délais, horaires, sauvegardes et corrections incluses",
              "Savoir ce qui se passe après la mise en ligne.",
            ],
            [
              "Fin de relation",
              "Aide prévue pour le transfert",
              "Éviter une sortie improvisée.",
            ],
          ]}
        />

        <h2 id="exemple">
          Exemple : choisir une amélioration avant de développer
        </h2>
        <p>
          <strong>Exemple illustratif fictif.</strong> Une entreprise de
          services utilise trois copies d&apos;un fichier de planning. Huit
          personnes le consultent, mais deux seulement le modifient. Le premier
          essai raisonnable consiste à réunir les données dans un fichier
          structuré, stocké dans un environnement compatible avec la coédition,
          puis à définir qui a le droit de changer quoi.
        </p>
        <p>
          Si cet essai règle les conflits de version, l&apos;entreprise peut
          conserver Excel et reporter l&apos;investissement. S&apos;il révèle au
          contraire des validations par rôle, des interventions mobiles et des
          échanges indispensables avec la facturation, l&apos;application
          devient plus facile à justifier. La décision vient des usages
          observés, pas de la taille du fichier.
        </p>

        <h2 id="plan-30-jours">
          En trente jours, vous pouvez décider sans lancer le développement
        </h2>
        <GuideTable
          caption="Un mois pour obtenir une décision argumentée"
          headers={["Période", "Travail à faire", "Résultat attendu"]}
          rows={[
            [
              "Première semaine",
              "Lister utilisateurs, copies, erreurs et ressaisies",
              "Une description factuelle du problème.",
            ],
            [
              "Deuxième semaine",
              "Tester la correction simple et regarder les logiciels existants",
              "Une option écartée ou confirmée.",
            ],
            [
              "Troisième semaine",
              "Décrire les règles, droits, données et échanges nécessaires",
              "Un besoin compréhensible par plusieurs prestataires.",
            ],
            [
              "Quatrième semaine",
              "Comparer coûts, entretien, données et sortie sur la même durée",
              "Une décision : conserver, acheter, tester ou développer.",
            ],
          ]}
        />
        <p>
          Si le processus change encore chaque semaine, stabilisez-le avant de
          le figer dans un logiciel. Si un produit existant répond à
          l&apos;essentiel, testez-le avec vos données. Si les règles propres à
          l&apos;entreprise restent décisives, préparez alors un{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            document de besoin pour l&apos;application métier
          </Link>
          .
        </p>

        <GuideInlineCTA
          title="Votre fichier Excel est devenu indispensable à l'entreprise ?"
          description="Expliquez-nous qui l'utilise, ce qui se bloque et ce que vous avez déjà essayé. Nous comparerons avec vous l'amélioration d'Excel, un logiciel existant, une plateforme et le sur-mesure."
          tags={[
            "Solution simple possible",
            "Coûts comparés",
            "Migration progressive",
          ]}
          ctaLabel="Faire examiner mon besoin"
        />

        <h2 id="sources">Sources et points à revalider avant de signer</h2>
        <p>
          Les règles de licence, tarifs et conditions d&apos;hébergement
          évoluent. Les pages suivantes ont été utilisées pour distinguer les
          faits techniques des hypothèses ; vérifiez-les de nouveau au moment de
          votre choix.
        </p>
        <ul>
          <li>
            Microsoft Support :{" "}
            <a
              href="https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104"
              target="_blank"
              rel="noopener noreferrer"
            >
              conditions de coédition des classeurs Excel
            </a>{" "}
            et{" "}
            <a
              href="https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3"
              target="_blank"
              rel="noopener noreferrer"
            >
              spécifications et limites d&apos;Excel
            </a>
            .
          </li>
          <li>
            Microsoft Learn :{" "}
            <a
              href="https://learn.microsoft.com/fr-fr/power-apps/maker/canvas-apps/get-started-create-from-blank"
              target="_blank"
              rel="noopener noreferrer"
            >
              création d&apos;une application canevas
            </a>{" "}
            et{" "}
            <a
              href="https://learn.microsoft.com/en-us/power-platform/admin/pricing-billing-skus"
              target="_blank"
              rel="noopener noreferrer"
            >
              vue d&apos;ensemble des licences Power Platform
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft France, tarifs Power Apps
            </a>
            , relevés le 21 juillet 2026 et susceptibles d&apos;évoluer.
          </li>
          <li>
            <a
              href="https://support.airtable.com/docs/data-residency-at-airtable"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airtable, résidence des données selon l&apos;offre
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/definition/sous-traitant"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL, rôle et obligations du sous-traitant
            </a>
            .
          </li>
          <li>
            Légifrance :{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006219327/"
              target="_blank"
              rel="noopener noreferrer"
            >
              conservation des documents comptables
            </a>
            ,{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041471233/"
              target="_blank"
              rel="noopener noreferrer"
            >
              conservation de certains documents fiscaux
            </a>{" "}
            et{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              cession des droits d&apos;auteur
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
