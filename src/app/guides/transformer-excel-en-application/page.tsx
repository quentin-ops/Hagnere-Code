import type { Metadata } from "next";
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
import { EXCEL_SOURCE_VERIFIED_ON_FR } from "@/lib/excel-decision-diagnostic";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("transformer-excel-en-application");

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
        alt: "Décider entre Excel, logiciel, low-code et application métier",
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
      "Un outil peut générer une première interface à partir d’un tableau. Il ne prouve ni les droits, ni les conflits d’écriture, ni la restauration, ni l’export complet. Rejouez les mêmes opérations sur chaque candidat avant de considérer la transformation comme fiable.",
  },
  {
    question: "Quand vaut-il mieux garder Excel ?",
    answer:
      "Gardez Excel quand le processus est stable, peu critique, documenté, réversible et administrable par deux personnes. Industrialiser Excel est une voie distincte : table structurée, contrôles, coédition maîtrisée, documentation, sauvegarde et mode dégradé.",
  },
  {
    question: "Power Apps est-il limité à 2 000 lignes ?",
    answer:
      "Non. Microsoft documente une fenêtre locale de 500 enregistrements, réglable jusqu’à 2 000, lorsqu’une formule ne peut pas être déléguée à la source. Ce n’est pas une capacité maximale de Power Apps. Au-delà comme en dessous, testez la requête complète et les filtres réellement utilisés.",
  },
  {
    question: "Faut-il choisir no-code, low-code ou sur-mesure ?",
    answer:
      "N’achetez pas une catégorie. Nommez Power Apps, AppSheet, Airtable ou le produit réellement testé, puis vérifiez ses licences, sa source de données, ses droits, ses limites, sa restauration et sa sortie. Le sur-mesure ne devient défendable qu’après avoir chiffré les écarts stables des solutions standard.",
  },
  {
    question: "Comment comparer les coûts sans fausser le résultat ?",
    answer:
      "Utilisez les mêmes utilisateurs, opérations, durée et coût horaire. Additionnez mise en place, migration, temps interne, licences, administration, support, formation, intégrations, double fonctionnement, incidents et sortie. Toute inconnue X ou I reste visible et interdit un gagnant si elle peut inverser la décision.",
  },
  {
    question: "Que faut-il tester avant la bascule ?",
    answer:
      "Au minimum : création, rejet des données invalides, recherche et agrégats au-delà de 2 000 lignes, modification auditée, droits, concurrence, import avec rejets, restauration, export-réimport complet et départ du créateur. Le propriétaire et son suppléant doivent pouvoir exécuter la restauration et la sortie.",
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
        heroDescription="Votre fichier Excel devient critique, partagé par plusieurs personnes ou impossible à reprendre ? Comparez cinq solutions avec vos usages, vos preuves et vos coûts avant d’acheter ou de développer."
        heroAction={{
          href: "#diagnostic",
          label: "Comparer les cinq dossiers",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        showSidebarCta={false}
        keyPoints={[
          {
            number: "01",
            title: "5 voies réellement comparées",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "10 opérations à vérifier",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "15 estimations sur 48 mois",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Aucun gagnant inventé",
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
            label: "Prix d’un logiciel sur mesure",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "ERP ou logiciel sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d’une application métier",
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
        faqTitle="Excel vers application : les questions décisives"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Si votre fichier Excel devient lent, fragile ou difficile à partager,
          ne le remplacez pas automatiquement. Vous pouvez le garder, le
          fiabiliser, acheter un logiciel, configurer une plateforme précise ou
          financer un développement sur mesure. Pour choisir, observez votre
          travail pendant deux semaines, rejouez les mêmes dix opérations sur
          chaque solution et comparez tous les coûts sur quarante-huit mois. La
          solution la moins complexe qui réussit vos tests et dont les coûts
          sont assez connus mérite le premier pilote.
        </p>
        <p>
          Une voie qui échoue sur un bloquant universel — création puis
          réouverture d’une fiche avec sa pièce jointe, rejet des entrées
          invalides, agrégats complets, import contrôlé, restauration,
          export-réimport ou départ du créateur — est éliminée. L’audit, les
          droits et la concurrence deviennent eux aussi bloquants quand la fiche
          d’exigences les rend applicables. Une dépense, une capacité ou un
          incident non chiffré reste noté <strong>X</strong> ou{" "}
          <strong>I</strong> : il ne vaut jamais zéro par défaut et peut imposer
          de reporter la décision.
        </p>

        <InfoBox variant="blue" title="La recommandation en une phrase">
          Testez d’abord la voie la moins complexe encore éligible. Un volume de
          lignes, une démonstration commerciale ou un abonnement déjà payé ne
          suffit jamais à prouver qu’elle convient.
        </InfoBox>

        <InfoBox variant="amber" title="Votre parcours express en cinq minutes">
          Répondez sans ouvrir un catalogue : une seule personne sait-elle
          corriger le fichier ? Des écritures simultanées s’écrasent-elles ?
          Faut-il limiter ou tracer certains accès ? Une panne bloque-t-elle
          l’activité ? Si les quatre réponses sont « non », commencez par
          fiabiliser Excel. Dès qu’une réponse est « oui » ou inconnue, ce
          triage ne choisit aucune solution : passez au dossier complet.
          Prévoyez ensuite deux semaines d’observation en arrière-plan, une
          séance de préparation de 45 à 90 minutes, puis une séance de test
          distincte par candidat. L’outil affiche la progression de la
          préparation et des cinq dossiers ; les parties techniques peuvent
          être lues seulement au moment du test concerné.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "avant-de-remplacer",
              label: "Mesurer avant de remplacer Excel",
            },
            {
              id: "quatre-solutions",
              label: "Comparer cinq voies à périmètre égal",
            },
            {
              id: "diagnostic",
              label: "Rejouer les dix opérations",
            },
            {
              id: "donnees-regles-ecrans",
              label: "Traduire Excel, puis tester les plateformes",
            },
            {
              id: "migration",
              label: "Migrer, basculer et pouvoir revenir",
            },
            {
              id: "donnees-rgpd",
              label: "Droits, audit et données",
            },
            {
              id: "contrat",
              label: "Écrire les preuves dans le contrat",
            },
            {
              id: "cout-quatre-ans",
              label: "Calculer 15 coûts sur 48 mois",
            },
            {
              id: "exemple",
              label: "Lire les scénarios et contre-cas",
            },
            {
              id: "plan-30-jours",
              label: "Décider : lancer, reporter ou arrêter",
            },
            { id: "sources", label: "Sources datées et limites" },
          ]}
        />

        <h2 id="avant-de-remplacer">
          Pendant deux semaines, mesurez le problème au lieu de présumer la
          solution
        </h2>
        <p>
          Observez un cycle représentatif avant tout devis. Chaque utilisateur
          note les minutes de ressaisie, les attentes liées à un fichier
          verrouillé, les corrections, les recherches de version et les
          incidents. N’appelez pas automatiquement « économie » le temps
          théorique libéré : tant qu’une dépense n’est pas évitée ou qu’une
          capacité utile n’est pas réellement réaffectée, il reste un bénéfice à
          confirmer.
        </p>
        <p>
          Le <strong>mode dégradé</strong> est la procédure temporaire qui
          permet de continuer l’activité quand l’outil est indisponible. Le{" "}
          <strong>RPO</strong> mesure la perte maximale de données acceptable ;
          le <strong>RTO</strong>, le délai maximal de reprise. Écrivez ces
          trois éléments en langage métier avant de comparer les solutions.
        </p>
        <GuideTable
          caption="La fiche de départ commune aux cinq voies"
          headers={[
            "À relever",
            "Preuve minimale",
            "Décision empêchée si absent",
          ]}
          rows={[
            [
              "Processus et exceptions",
              "Cas normal, refus, reprise et mode dégradé écrits",
              "Tout achat ou développement",
            ],
            [
              "Données",
              "Identifiants, doublons, règles et jeu d’essai reproductible",
              "Migration et comparaison des résultats",
            ],
            [
              "Bénéfice",
              "Deux semaines de temps, erreurs, attentes et incidents",
              "Promesse de ROI",
            ],
            [
              "Exploitation",
              "Propriétaire, suppléant, RTO, RPO et budget récurrent",
              "Mise en production",
            ],
          ]}
        />
        <p>
          Si le seul problème est la circulation de copies, commencez par un
          fichier structuré, documenté et coédité. Pour un modèle important,
          séparez auteur, relecteur et responsable de décision, conservez les
          hypothèses et versionnez les changements. C’est l’approche de contrôle
          proportionné proposée par l’{" "}
          <a
            href="https://www.gov.uk/guidance/the-aqua-book"
            target="_blank"
            rel="noopener noreferrer"
          >
            AQuA Book britannique
          </a>
          , applicable aussi aux tableurs — une méthode, pas une certification
          française.
        </p>

        <h2 id="quatre-solutions">
          Comparez cinq voies distinctes, avec le même travail à accomplir
        </h2>
        <GuideTable
          caption="Les cinq voies et leur porte d’entrée"
          headers={["Voie", "Elle peut gagner si…", "Elle perd si…"]}
          rows={[
            [
              "1. Conserver Excel",
              "Le processus reste simple, documenté, réversible et exploitable par deux personnes.",
              "Les conflits, droits, traces ou incidents ne sont pas maîtrisés.",
            ],
            [
              "2. Industrialiser Excel",
              "Tables, contrôles, coédition, documentation et secours suffisent sans application.",
              "La structure masque encore des règles ou dépend d’un auteur unique.",
            ],
            [
              "3. Logiciel standard",
              "Au moins 80 % des exigences applicables sont couvertes sans développement spécifique et aucun bloquant n’échoue.",
              "Les contournements recréent Excel à côté du produit.",
            ],
            [
              "4. Plateforme nommée",
              "Power Apps, AppSheet, Airtable ou un autre candidat précis passe la recette avec licences, administration et sortie maîtrisées.",
              "Le fonctionnement dépend du compte personnel du créateur ou d’une limite non testée.",
            ],
            [
              "5. Sur mesure",
              "Un écart métier stable et différenciant reste non couvert, avec propriétaire et exploitation financés.",
              "Le processus change encore ou un standard couvre correctement le besoin.",
            ],
          ]}
        />
        <p>
          La comparaison doit porter sur les mêmes utilisateurs, rôles,
          appareils, données, intégrations, niveaux de service, pièces jointes
          et exigences de sortie. Un abonnement à 20 € comparé à un devis
          comprenant migration, support et réversibilité n’est pas un comparatif
          égal-scope.
        </p>
        <InfoBox
          variant="amber"
          title="Le logiciel standard vient avant le code"
        >
          Testez plusieurs produits avec vos cas réels. Une couverture annoncée
          à 80 % n’est recevable que si les exigences indispensables sont dans
          les 80 %, sans Excel parallèle ni saisie manuelle cachée. Ce seuil est
          une règle éditoriale interne de présélection Hagnéré Code, pas une
          norme universelle. Le diagnostic ci-dessous l’applique volontairement
          sans réglage. Si votre gouvernance retient un autre seuil, consignez
          cette décision dans une grille séparée ; ne neutralisez jamais un
          bloquant.
        </InfoBox>

        <h2 id="diagnostic">Testez dix opérations avant de choisir</h2>
        <p>
          Préparez un <strong>jeu d’essai</strong> de 3 050 lignes, identifiées
          de X-0001 à X-3050, dont le montant de la ligne est son numéro. Le
          total initial est 4 652 775 €. L’opération 1 ajoute X-3051 pour
          atteindre 3 051 lignes et 4 655 826 €. L’opération 4 remplace ensuite
          le montant de X-0042, de 42 € à 142 € : le total devient 4 655 926 €.
          L’opération 7 importe enfin 95 lignes valides et explique cinq rejets
          : 3 146 lignes et 4 656 021 €. Après suppression de X-2501, le total
          devient 4 653 520 € ; sa restauration doit ramener le résultat
          précédent.
        </p>
        <InfoBox
          variant="blue"
          title="Téléchargez le jeu au lieu de le recréer"
        >
          Le{" "}
          <a href="/ressources/jeu-essai-migration-excel.zip" download>
            kit reproductible complet
          </a>{" "}
          contient le CSV de 3 050 lignes, le lot métier de 100 imports, un
          oracle de contrôle séparé avec les cinq motifs de rejet, onze pièces
          factices, le mode d’emploi et les empreintes SHA-256. Importez
          seulement le lot métier : l’oracle sert à comparer le résultat et ne
          doit jamais devenir une table de l’application. Vous pouvez aussi
          ouvrir directement le{" "}
          <a
            href="/ressources/jeu-essai-migration-excel/jeu-depart-3050-lignes.csv"
            download
          >
            jeu de départ CSV
          </a>{" "}
          et le{" "}
          <a
            href="/ressources/jeu-essai-migration-excel/lot-import-100-lignes.csv"
            download
          >
            lot d’import
          </a>
          , puis l’{" "}
          <a
            href="/ressources/jeu-essai-migration-excel/oracle-import.csv"
            download
          >
            oracle séparé
          </a>
          . Les données sont fictives ; ne les remplacez pas par des données
          personnelles pour un essai fournisseur.
        </InfoBox>
        <GuideTable
          caption="Les dix opérations, rejouées sur chaque candidat"
          headers={["N°", "Opération", "Porte"]}
          rows={[
            ["1", "Créer et rouvrir une fiche avec pièce jointe", "Bloquante"],
            [
              "2",
              "Rejeter une fiche dont un champ ou une date est invalide",
              "Bloquante",
            ],
            [
              "3",
              "Retrouver X-2501 et calculer tous les agrégats au-delà de 2 000 lignes",
              "Bloquante",
            ],
            [
              "4",
              "Modifier X-0042 et reconstituer auteur, date et valeurs",
              "Bloquante si applicable",
            ],
            [
              "5",
              "Appliquer les droits prévus par le scénario",
              "Bloquante si applicable",
            ],
            [
              "6",
              "Modifier la même fiche à deux sans écrasement silencieux",
              "Bloquante si applicable",
            ],
            ["7", "Importer 95 lignes et expliquer les 5 rejets", "Bloquante"],
            [
              "8",
              "Supprimer X-2501 puis restaurer le résultat précédent",
              "Bloquante",
            ],
            [
              "9",
              "Exporter puis réimporter 3 146 IDs, 4 656 021 € et 11 pièces jointes",
              "Bloquante",
            ],
            [
              "10",
              "Simuler le départ du créateur et reprendre l’exploitation",
              "Bloquante",
            ],
          ]}
        />
        <p>
          Une opération conditionnelle n’est retirée du dénominateur qu’avec une
          justification issue de la fiche d’exigences. Une opération universelle
          ne devient jamais « non applicable ». Toute opération applicable doit
          réussir : une moyenne ne compense ni une création impossible, ni une
          restauration manquante, ni une sortie inutilisable. Le seuil de 80 %
          concerne seulement la couverture des exigences par un logiciel
          standard. Conservez captures, exports, journaux et chronométrages : «
          la démo semblait fonctionner » n’est pas une preuve.
        </p>
        <ExcelDecisionDiagnostic />

        <h2 id="donnees-regles-ecrans">
          Transformez chaque onglet, formule et geste en élément testable
        </h2>
        <p>
          Une migration sérieuse ne commence pas par « importer le fichier ».
          Elle commence par un inventaire : onglets visibles et masqués,
          tableaux, noms définis, formules, validations, mises en forme
          conditionnelles, macros VBA, scripts, requêtes Power Query, liens
          externes, tableaux croisés, commentaires, protections, pièces jointes
          et gestes manuels. Pour chacun, écrivez sa destination et la preuve
          qui démontrera que le comportement n’a pas changé.
        </p>
        <GuideTable
          caption="Du tableur à l’application : le registre de traduction minimal"
          headers={["Dans Excel", "Dans la cible", "Preuve à conserver"]}
          rows={[
            [
              "Onglets, tableaux et identifiants",
              "Entités, relations, clé unique et règles de suppression",
              "Comptage par table, doublons, orphelins et rapprochement ligne par ligne",
            ],
            [
              "Formules et cellules calculées",
              "Règles métier nommées, versionnées et séparées de l’écran",
              "Cas normaux, limites, erreurs et arrondis rejoués automatiquement",
            ],
            [
              "Validations et formats conditionnels",
              "Contraintes de saisie et messages compréhensibles",
              "Une valeur invalide est refusée sans écriture partielle",
            ],
            [
              "Macros, VBA et Office Scripts",
              "Commandes, tâches planifiées ou workflows avec journal",
              "Déclencheur, résultat, reprise sur erreur et double exécution testés",
            ],
            [
              "Power Query et liens externes",
              "Connecteurs, comptes techniques, fréquence et file d’erreurs",
              "Source indisponible, secret expiré, retard et rejeu contrôlés",
            ],
            [
              "Noms définis et tableaux croisés",
              "Indicateurs documentés et vues de restitution",
              "Même population, mêmes filtres et mêmes totaux qu’Excel",
            ],
            [
              "Dates, devises, décimales et langues",
              "Types explicites, fuseau, locale et règle d’arrondi",
              "Fin de mois, changement d’heure, valeurs négatives et séparateurs testés",
            ],
            [
              "Protection de feuille et cellules masquées",
              "Droits côté données par rôle et par action",
              "Export, API et lien direct refusent aussi l’accès interdit",
            ],
            [
              "Commentaires et pièces jointes",
              "Historique, stockage de fichiers et politique de conservation",
              "Auteur, date, export, restauration et ouverture après réimport",
            ],
          ]}
        />
        <h3>Exemple continu : du classeur d’interventions à trois écrans</h3>
        <p>
          Avant migration, imaginons trois onglets : « Interventions », «
          Clients » et « Techniciens ». La colonne « À facturer » dépend d’une
          formule imbriquée ; une macro copie les lignes closes dans une feuille
          d’archive ; le responsable colore manuellement les urgences. Après
          migration, <strong>une intervention</strong> référence un client et un
          technicien par identifiant, la règle « facturable » est écrite une
          seule fois, l’archivage devient un changement de statut journalisé et
          l’urgence est une donnée obligatoire — plus une couleur.
        </p>
        <GuideTable
          caption="Le même cas, de la donnée jusqu’à l’acceptation"
          headers={["Couche", "Résultat attendu", "Test d’acceptation"]}
          rows={[
            [
              "Données",
              "Client C-018, technicien T-07 et intervention I-2501 restent reliés",
              "Aucun doublon ni relation orpheline après import",
            ],
            [
              "Règles",
              "Une intervention close, signée et non garantie devient facturable",
              "Les huit combinaisons vrai/faux produisent le résultat attendu",
            ],
            [
              "Écrans",
              "Le technicien saisit, le responsable valide, la comptabilité exporte",
              "Chaque rôle accomplit son scénario sans champ interdit ni détour par Excel",
            ],
            [
              "Exploitation",
              "Le suppléant corrige un rejet, restaure et relance un connecteur",
              "Temps, journal et résultat final sont conformes à la procédure",
            ],
          ]}
        />
        <p>
          Conservez ce cas continu pendant toute la sélection : maquette,
          pilote, migration à blanc, recette et production. Si le fournisseur
          change l’identifiant, la règle ou la population en cours de route,
          vous ne comparez plus le même problème.
        </p>

        <h3>
          Connecter Excel, l’importer ou le reconstruire : trois actes
          différents
        </h3>
        <p>
          Microsoft distingue la création depuis des données importées dans
          Dataverse, la connexion à un fichier Excel externe et la création
          depuis une page vide. Lors d’un chargement vers Dataverse, les
          premières lignes servent à proposer la structure, puis le reste est
          traité en arrière-plan ; un changement de type peut rendre des valeurs
          incompatibles. La{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/get-started-create-from-blank"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Power Apps sur les trois chemins
          </a>{" "}
          rappelle donc qu’une interface générée ne constitue pas une preuve de
          migration exhaustive.
        </p>
        <p>
          Le parcours « Import from Excel » vers une AppSheet Database est
          encore indiqué <em>Preview</em> par Google : il sert aux tests, n’est
          pas recommandé pour la production et n’importe qu’une seule feuille.
          Ce n’est pas le même parcours qu’une application connectée à un
          classeur Excel : AppSheet configure d’abord la première feuille, puis
          permet d’ajouter les autres comme tables. L’import refuse ou signale
          notamment les données non tabulaires, les colonnes dupliquées et
          certains types mélangés. Lisez les{" "}
          <a
            href="https://support.google.com/appsheet/answer/12635312?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            conditions officielles d’import Excel vers AppSheet
          </a>{" "}
          et la{" "}
          <a
            href="https://support.google.com/appsheet/answer/10099416?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            préparation d’une source Excel connectée
          </a>
          , puis comparez le nombre de lignes, les types, les rejets et les
          résultats calculés. « L’écran s’est créé » ne signifie pas « le
          classeur a été traduit ».
        </p>

        <h3>Power Apps, AppSheet et Airtable ne sont pas une seule option</h3>
        <p>
          Écrivez toujours le produit, le plan, la source de données et les
          connecteurs testés. Au {EXCEL_SOURCE_VERIFIED_ON_FR}, Microsoft
          affiche{" "}
          <a
            href="https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Power Apps Premium à 17,30 € HT par utilisateur et par mois
          </a>{" "}
          avec paiement annuel. C’est un prix de licence, susceptible de varier,
          pas le coût d’une application : capacité, connecteurs, migration,
          administration et support restent à chiffrer.
        </p>
        <p>
          Microsoft documente aussi une subtilité souvent mal présentée : une
          requête non délégable traite 500 enregistrements par défaut, réglables
          jusqu’à 2 000, et peut retourner un résultat incomplet au-delà. Cela
          ne signifie pas que{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Power Apps est limité à 2 000 lignes
          </a>
          . À 1, 2 000 ou 2 001 lignes, inspectez l’avertissement de délégation
          et vérifiez le résultat complet de chaque filtre.
        </p>
        <GuideTable
          caption="Trois candidats nommés : faits à confirmer dans votre configuration"
          headers={["Candidat", "Fait officiel daté", "Test indispensable"]}
          rows={[
            [
              "Power Apps + Excel Online Business",
              "Connecteur : fichier de 25 Mo maximum ; verrouillage possible jusqu’à 6 minutes ; modifications concurrentes non prises en charge.",
              "Écriture à deux, pagination, reprise après erreur, source cible et connecteurs.",
            ],
            [
              "AppSheet",
              "Starter 5 USD, Core 10 USD, Enterprise Plus 20 USD/utilisateur/mois ; AppSheet Database : 2 500 lignes en Starter/Core, 200 000 en Enterprise Plus.",
              "Source réelle, licences des externes, filtres côté source, audit et transfert complet.",
            ],
            [
              "Airtable Team",
              "24 USD/collaborateur/mois ou 20 USD en annuel ; 50 000 enregistrements/base, 20 Go de pièces jointes, un an d’historique.",
              "Permissions facturées, base restaurée, export des pièces jointes et résidence requise.",
            ],
          ]}
        />
        <p>
          Ces limites viennent des documentations officielles du{" "}
          <a
            href="https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/"
            target="_blank"
            rel="noopener noreferrer"
          >
            connecteur Excel Online Business
          </a>
          , des{" "}
          <a
            href="https://about.appsheet.com/pricing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs AppSheet
          </a>{" "}
          et des{" "}
          <a
            href="https://support.airtable.com/docs/en/airtable-plans"
            target="_blank"
            rel="noopener noreferrer"
          >
            plans Airtable
          </a>
          . Elles ne se transposent ni à toute la plateforme ni à un autre plan.
        </p>
        <h3>Élargissez le panorama mondial avant de conclure « no-code »</h3>
        <p>
          Les trois produits précédents ne couvrent pas toutes les
          architectures. Selon la sensibilité, l’hébergement, le niveau de
          construction interne et le profil des utilisateurs, incluez au moins
          une alternative d’application interne, une base-tableur relationnelle
          et une option auto-hébergeable. La matrice suivante sert à ouvrir la
          présélection, pas à déclarer un vainqueur.
        </p>
        <GuideTable
          caption="Trois familles internationales à ajouter à la présélection"
          headers={["Candidat", "Angle distinctif", "Test qui tranche"]}
          rows={[
            [
              "Retool",
              "Applications internes connectées à des sources existantes ; rôles de constructeur, utilisateurs internes et externes distingués.",
              "Droits sur chaque ressource, tarification de la population réelle, journal, déploiement et sortie des applications.",
            ],
            [
              "Grist",
              "Interface proche du tableur sur données relationnelles ; édition Community open source auto-hébergeable.",
              "Formules, relations, droits fins, sauvegarde de l’instance, mises à jour et reprise par une seconde personne.",
            ],
            [
              "Baserow",
              "Base collaborative disponible en cloud ou auto-hébergée, avec quotas et fonctions de gouvernance selon l’offre.",
              "Import des types et relations, pièces jointes, limites de lignes, audit, sauvegarde et coût d’exploitation auto-hébergé.",
            ],
          ]}
        />
        <p>
          Consultez les pages officielles de{" "}
          <a
            href="https://retool.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarification Retool
          </a>
          , d’{" "}
          <a
            href="https://retool.com/govern-enterprise-apps/self-hosted"
            target="_blank"
            rel="noopener noreferrer"
          >
            auto-hébergement Retool
          </a>
          , de{" "}
          <a
            href="https://www.getgrist.com/pricing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grist
          </a>{" "}
          et de{" "}
          <a
            href="https://baserow.io/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baserow
          </a>
          . Ne comparez ni une édition cloud à un serveur gratuit, ni un
          constructeur à un simple lecteur : ajoutez hébergement, mises à jour,
          sauvegardes, astreinte, identité et compétences internes au même
          TCO48.
        </p>
        <h3>AppSheet : cinq vérifications qui peuvent changer le verdict</h3>
        <p>
          Le prix doit couvrir la population réellement autorisée, pas seulement
          les salariés qui ouvrent souvent l’application. Les règles de licence
          AppSheet ont des conséquences pour les utilisateurs connectés, y
          compris certains externes ou invités ; Core peut par ailleurs être
          inclus dans certaines offres Google Workspace. Saisissez donc
          séparément actifs et externes, puis rattachez le prix au plan et à la
          population vérifiés au {EXCEL_SOURCE_VERIFIED_ON_FR}.
        </p>
        <p>
          La{" "}
          <a
            href="https://support.google.com/appsheet/answer/10104794?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation officielle de l’historique d’audit AppSheet
          </a>{" "}
          indique une conservation généralement limitée à sept jours, portée
          jusqu’à 53 jours en Enterprise Plus. L’attribution à un utilisateur
          suppose aussi qu’il soit connecté. Si votre enquête d’incident exige
          six mois d’historique nominatif, une simple case « audit présent » ne
          suffit donc pas : le plan, l’authentification et l’export de l’audit
          deviennent des preuves bloquantes.
        </p>
        <p>
          Le{" "}
          <a
            href="https://support.google.com/appsheet/answer/10104991?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert d’une application AppSheet
          </a>{" "}
          ne transfère pas magiquement toute son exploitation. Testez le départ
          du créateur avec l’application, ses feuilles ou bases sources, les
          fichiers et dossiers associés, les automatisations et les droits. Si
          l’un de ces éléments reste détenu par un compte personnel fermé, la
          reprise peut échouer malgré un transfert d’application réussi.
        </p>
        <p>
          Enfin, l’{" "}
          <a
            href="https://support.google.com/appsheet/answer/12726292?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            historique d’AppSheet Database
          </a>{" "}
          permet de consulter et restaurer des changements sur trente jours dans
          les conditions documentées. Ce délai ne remplace ni un audit de plus
          longue durée, ni une sauvegarde isolée, ni un test de restauration
          complet. Les filtres et l’accès à la source sont traités plus bas, car
          une feuille peut être lue avant que le filtre AppSheet ne réduise les
          lignes visibles.
        </p>
        <InfoBox variant="blue" title="Ce que le volume ne dit pas">
          150 000 lignes bien indexées dans une base peuvent être plus simples
          que 1 500 lignes pleines de formules, de fichiers liés et
          d’exceptions. Testez requêtes, synchronisation, pièces jointes et
          appareils cibles ; ne choisissez jamais sur un seuil isolé.
        </InfoBox>

        <h2 id="migration">
          Migrez par répétitions, puis basculez avec un retour possible
        </h2>
        <p>
          Une migration n’est pas un import unique le vendredi soir. C’est une
          suite de répétitions qui rendent visibles les données sales, les
          conversions, les écarts de calcul et le temps d’indisponibilité. Le
          fichier source reste la référence jusqu’à ce qu’une recette signée
          autorise la bascule ; la cible ne devient pas correcte parce qu’elle
          contient « à peu près » le bon nombre de lignes.
        </p>
        <GuideTable
          caption="Le protocole de migration et de bascule"
          headers={["Étape", "Travail et preuve", "Porte de sortie"]}
          rows={[
            [
              "1. Inventorier",
              "Fichiers, onglets, champs, formules, macros, liens, pièces, volumes, propriétaires et données interdites",
              "Aucun élément inconnu qui puisse modifier le schéma ou le périmètre",
            ],
            [
              "2. Nettoyer",
              "Clés uniques, doublons, valeurs manquantes, types, dates, devises, référentiels et règles de correction",
              "Chaque correction est traçable ; l’original reste conservé en lecture seule",
            ],
            [
              "3. Mapper",
              "Pour chaque champ et règle : source, transformation, destination, valeur par défaut et propriétaire",
              "Aucune formule, macro ou colonne masquée sans décision explicite",
            ],
            [
              "4. Répéter à blanc",
              "Importer une copie, journaliser acceptés/rejets, mesurer la durée et corriger le procédé",
              "Deux répétitions successives produisent les mêmes comptes et résultats",
            ],
            [
              "5. Rapprocher",
              "Comparer IDs, totaux, sous-totaux, relations, historiques et empreintes de pièces jointes",
              "Aucune perte silencieuse ; chaque écart est accepté ou corrigé nominativement",
            ],
            [
              "6. Geler et reprendre le delta",
              "Annoncer l’heure de gel, passer Excel en lecture seule et migrer les changements depuis la dernière répétition",
              "Le responsable métier signe le dernier delta et le journal des rejets",
            ],
            [
              "7. Fonctionner en parallèle",
              "Sur une durée bornée, rejouer les mêmes cas sans entretenir deux vérités concurrentes",
              "Résultats identiques et temps utilisateurs acceptables sur le cycle représentatif",
            ],
            [
              "8. Basculer ou revenir",
              "Fenêtre, responsables, sauvegarde, communication, support, seuils d’arrêt et procédure de retour écrits",
              "Au seuil dépassé, retour contrôlé ; sinon validation finale et archivage probant",
            ],
          ]}
        />
        <p>
          Le rapprochement doit être <strong>exhaustif</strong> sur les
          identifiants et les pièces, puis ciblé sur des agrégats indépendants :
          nombre de lignes par statut et période, somme des montants, relations
          orphelines, dates extrêmes et résultats des règles. Échantillonner
          vingt lignes peut compléter ces contrôles, jamais les remplacer.
          Conservez le fichier source figé, le script ou journal d’import, les
          rejets, la correction autorisée et le rapport final.
        </p>
        <InfoBox variant="amber" title="Écrivez le retour avant la bascule">
          Définissez l’événement qui déclenche le retour : écart de total, perte
          de pièce, indisponibilité supérieure au RTO, blocage d’un rôle ou
          volume de rejets au-delà du seuil accepté. Précisez qui décide,
          comment les écritures faites dans la cible sont récupérées et pendant
          combien de temps le retour reste possible.
        </InfoBox>

        <h3>Nommez un propriétaire et un suppléant avant la production</h3>
        <p>
          Le propriétaire décide du périmètre, du budget, des accès, des
          changements et de la fin de vie. Le suppléant doit pouvoir administrer
          les comptes, relancer une intégration, restaurer et exporter sans le
          créateur. Microsoft décrit précisément le risque d’{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-platform/guidance/adoption/manage-default-environment"
            target="_blank"
            rel="noopener noreferrer"
          >
            applications et flux devenus orphelins
          </a>{" "}
          au départ de leur auteur.
        </p>
        <GuideTable
          caption="Le dossier d’exploitation minimal"
          headers={["Preuve", "Question de recette", "Responsable"]}
          rows={[
            [
              "Inventaire",
              "Sources, connecteurs, comptes, secrets, automatisations et dépendances sont-ils listés ?",
              "Propriétaire",
            ],
            [
              "Restauration",
              "Quel RPO, quel RTO et quel résultat observé lors du dernier test ?",
              "Suppléant",
            ],
            [
              "Mode dégradé",
              "Comment l’équipe travaille-t-elle pendant l’indisponibilité ?",
              "Responsable métier",
            ],
            [
              "Sortie",
              "Qui exporte données, pièces, historiques, comptes et documentation ?",
              "Propriétaire + fournisseur",
            ],
          ]}
        />
        <p>
          Une sauvegarde annoncée n’est pas une restauration démontrée. La CNIL
          recommande de{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            tester régulièrement l’intégrité des sauvegardes et la capacité de
            restauration
          </a>
          . L’ANSSI demande également des procédures dimensionnées, des rôles et
          des tests réguliers. Faites exécuter l’opération 8 par le suppléant,
          chronomètre en main.
        </p>
        <p>
          Pour Power Platform, la sauvegarde dépend notamment du type
          d’environnement et de la présence d’une base ; elle n’est pas
          téléchargeable hors ligne, et les applications ou flux ne sont
          couverts que dans les conditions documentées. Vérifiez la{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-platform/admin/backup-restore-environments"
            target="_blank"
            rel="noopener noreferrer"
          >
            procédure de sauvegarde et restauration Microsoft
          </a>{" "}
          dans votre propre environnement, y compris les identifiants et
          références de connexion après restauration.
        </p>

        <h3>
          Faites essayer l’outil aux personnes qui feront réellement le travail
        </h3>
        <p>
          Les dix opérations vérifient la fidélité et l’exploitabilité ; elles
          ne prouvent pas que l’outil est compréhensible. Recrutez des
          utilisateurs représentatifs, sans leur faire regarder une
          démonstration avant l’essai. Donnez une consigne métier, observez le
          chemin, le temps, les erreurs, les demandes d’aide et la capacité à
          revenir d’une erreur. Comparez ces mesures à Excel sur le même cas, le
          même appareil et le même niveau de formation.
        </p>
        <GuideTable
          caption="Une recette utilisateurs qui ne se limite pas à « j’aime bien »"
          headers={[
            "Profil et contexte",
            "Scénario à accomplir",
            "Signal d’acceptation",
          ]}
          rows={[
            [
              "Opérateur fréquent sur ordinateur",
              "Créer, corriger, retrouver et clôturer une intervention complète",
              "Tâche terminée sans contournement ; temps et erreurs au moins aussi bons que la référence",
            ],
            [
              "Technicien mobile en réseau dégradé",
              "Saisir, joindre une photo, perdre puis retrouver la connexion",
              "Aucune perte silencieuse ; état de synchronisation et reprise compris",
            ],
            [
              "Approbateur occasionnel",
              "Comprendre l’attente, refuser avec motif puis retrouver l’historique",
              "Décision correcte sans formation mémorisée ni droit excessif",
            ],
            [
              "Suppléant d’administration",
              "Créer un compte, relancer un flux, restaurer et exporter",
              "Procédure exécutée sans le créateur, avec journal et durée observée",
            ],
            [
              "Utilisateur clavier, zoom 200 % ou lecteur d’écran",
              "Parcourir les champs, comprendre les erreurs et terminer la tâche",
              "Ordre de focus, libellés, contraste, messages et validation restent utilisables",
            ],
          ]}
        />
        <p>
          Fixez avant le test la réussite attendue, le temps de référence et le
          nombre d’erreurs tolérées ; ne déplacez pas la cible après avoir vu
          les résultats. Notez séparément le défaut d’interface, la règle métier
          incomprise, la donnée sale et le besoin de formation. Une tâche
          réussie seulement avec l’auteur à côté n’est pas acceptée.
        </p>

        <h2 id="donnees-rgpd">
          Un écran masqué n’est pas un droit, un historique n’est pas un audit
        </h2>
        <p>
          Vérifiez les droits au niveau des données : un utilisateur interdit ne
          doit pas pouvoir récupérer l’information par export, API,
          synchronisation ou lien direct. Pour AppSheet, Google précise qu’un
          filtre de sécurité ne constitue pas à lui seul une sécurité complète
          et que les opérations sensibles doivent être protégées à la source.
          Avec un tableur, la feuille peut être lue côté serveur avant
          application du filtre ; une base de données peut filtrer plus
          efficacement à la source. Voir les{" "}
          <a
            href="https://support.google.com/appsheet/answer/10104488?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            limites officielles des filtres de sécurité AppSheet
          </a>
          .
        </p>
        <p>
          Dans Dataverse, l’audit doit être activé aux niveaux requis et
          consomme du stockage. Il peut conserver auteur, date et changements,
          mais les lectures et exportations demandent une configuration
          distincte. Après suppression de l’historique concerné, il n’est plus
          consultable : définissez donc rétention, habilitations et procédure
          d’export avant la production. La{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation d’audit Dataverse
          </a>{" "}
          doit être relue pour votre environnement.
        </p>
        <p>
          Une mention « données en Europe » ne suffit pas. Airtable réserve la
          résidence européenne à Enterprise Scale et documente que certaines
          métadonnées, données d’authentification et informations de support
          restent aux États-Unis. Vérifiez le plan, les catégories de données,
          les sous-traitants et le contrat à partir de la{" "}
          <a
            href="https://support.airtable.com/docs/data-residency-at-airtable"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche de résidence Airtable
          </a>
          .
        </p>

        <h2 id="contrat">
          Le contrat doit rendre l’audit, la restauration et la sortie
          exécutables
        </h2>
        <GuideTable
          caption="Ce qui doit être prouvé avant signature"
          headers={["Sujet", "Livrable ou test", "Refus raisonnable"]}
          rows={[
            [
              "Données et pièces jointes",
              "Export complet, format documenté, comptages et fichier réimportable",
              "CSV qui ne contient que des liens expirables non téléchargés",
            ],
            [
              "Configuration et code",
              "Inventaire, documentation, dépôt ou export, comptes détenus par l’organisation",
              "Dépendance au compte personnel du créateur",
            ],
            [
              "Audit",
              "Périmètre, rétention, accès, export et coût du stockage",
              "Promesse générale sans opération 4 rejouée",
            ],
            [
              "Restauration",
              "RPO/RTO, environnement cible, identifiants, connexions et dernier test",
              "Confondre historique, snapshot et sauvegarde restaurable",
            ],
            [
              "Sortie",
              "Délai, assistance, coûts, formats et suppression finale",
              "Aucun essai d’export avant engagement",
            ],
          ]}
        />
        <p>
          Le règlement européen 2023/2854, dit Data Act, encadre la sortie de
          certains services de traitement de données. Son{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 29 supprime, à compter du 12 janvier 2027, les frais de
            changement de fournisseur au sens du règlement
          </a>
          . Cela ne supprime pas automatiquement les frais ordinaires, une
          pénalité de résiliation proportionnée ou une assistance supplémentaire
          demandée. Faites qualifier le service et les exceptions avant d’en
          tirer une conclusion juridique.
        </p>
        <p>
          Pour Airtable, un export CSV contient les URL des pièces jointes, pas
          les fichiers eux-mêmes ; les URL de téléchargement expirent. Un
          snapshot restauré crée une nouvelle base et ne conserve pas l’ancien
          historique de révision. Testez donc l’{" "}
          <a
            href="https://support.airtable.com/docs/airtable-attachment-url-behavior"
            target="_blank"
            rel="noopener noreferrer"
          >
            expiration des URL de pièces jointes
          </a>{" "}
          et la{" "}
          <a
            href="https://support.airtable.com/docs/taking-and-restoring-base-snapshots"
            target="_blank"
            rel="noopener noreferrer"
          >
            restauration d’un snapshot
          </a>{" "}
          plutôt que de vous fier au mot « export ».
        </p>

        <h2 id="cout-quatre-ans">
          Le coût total de possession sur 48 mois (TCO48) compare quinze cas
        </h2>
        <FormulaBox>
          TCO48 = mise en place + migration + temps projet interne + licences +
          hébergement + administration + maintenance + formation + intégrations
          + double fonctionnement + temps résiduel + incidents I + inconnues X +
          test de restauration et sortie
        </FormulaBox>
        <p>
          Le TCO48 additionne ce que chaque voie coûte réellement sur le même
          horizon. X et I restent visibles jusqu’à ce qu’une mesure, un devis ou
          une borne datée les remplace ; le calculateur local demande cette base
          pour chacune des cinq voies.
        </p>
        <h3>« Inconnu » ne signifie ni gratuit, ni infiniment cher</h3>
        <p>
          Traitez chaque poste selon trois états. Un montant{" "}
          <strong>connu</strong> vient d’une facture, d’un tarif daté ou d’un
          temps réellement mesuré. Un montant <strong>borné</strong> possède un
          minimum, un maximum et une source acceptés par le décideur. Un montant{" "}
          <strong>inconnu</strong> reste X ou I : il rend le total partiel et
          non classable. Écrire 0 € pour remplir une cellule donne une précision
          visuelle, pas une information.
        </p>
        <GuideTable
          caption="Quand deux TCO peuvent-ils être comparés ?"
          headers={["État", "Exemple", "Conséquence"]}
          rows={[
            [
              "Connu",
              "12 utilisateurs × 17,30 € × 48 mois",
              "Le poste entre dans le total, avec sa date et sa limite.",
            ],
            [
              "Borné",
              "Migration entre 4 000 et 7 000 € selon deux devis comparables",
              "Comparer les intervalles, pas seulement leurs milieux.",
            ],
            [
              "Inconnu X",
              "Connecteur, capacité, conduite du changement ou coût de sortie non chiffré",
              "Aucun gagnant si ce poste peut inverser l’ordre.",
            ],
            [
              "Inconnu I",
              "Perte, arrêt ou correction d’erreur jamais observés",
              "Mesurer l’incident ou accepter explicitement une borne.",
            ],
          ]}
        />
        <p>
          Une borne n’autorise un classement que si le maximum de la voie
          annoncée gagnante reste inférieur au minimum de toutes les autres
          voies encore éligibles. Si son intervalle chevauche au moins une
          alternative, concluez « à confirmer » et non « presque gagnant ». Les
          quatre intervalles plus élevés peuvent se chevaucher entre eux sans
          masquer le moins coûteux. Appliquez la règle aux cinq voies : résoudre
          seulement les inconnues du candidat préféré biaiserait la comparaison.
          Documentez aussi qui accepte chaque borne, à quelle date et jusqu’à
          quel événement elle reste valable.
        </p>
        <p>
          Les tableaux ci-dessous sont un <strong>jeu de démonstration</strong>,
          pas des devis ni des moyennes de marché. Les montants de mise en
          place, logiciel standard, administration, maintenance et sur-mesure
          sont des hypothèses éditoriales. Seul le prix public Power Apps
          Premium de 17,30 € HT/utilisateur/mois est repris comme fait daté ; il
          doit être revalidé avant toute décision.
        </p>

        <h3>
          Scénario simple : 5 utilisateurs, 1 500 lignes, aucune intégration
        </h3>
        <GuideTable
          caption="TCO connu sur 48 mois — scénario simple"
          headers={["Voie", "Hypothèses saillantes", "TCO48 connu"]}
          rows={[
            [
              "Conserver Excel",
              "2 h d’admin/mois ; 1 h résiduelle/semaine",
              "13 960 € + X + I",
            ],
            [
              "Industrialiser Excel",
              "2 h d’admin/mois ; 0,25 h résiduelle/semaine",
              "11 780 € + X + I",
            ],
            [
              "Logiciel standard",
              "150 €/mois fictifs ; 1 h d’admin/mois",
              "17 088 € + X + I",
            ],
            [
              "Power Apps / low-code",
              "5 × 17,30 €/mois ; 2 h d’admin/mois",
              "27 700 € + X + I",
            ],
            [
              "Sur mesure",
              "150 €/mois d’hébergement fictif ; 4 000 €/an de maintenance",
              "61 656 € + X + I",
            ],
          ]}
        />
        <p>
          Ici, Excel industrialisé est la première hypothèse à tester, pas un
          gagnant automatique. Garder Excel peut encore gagner si sa
          fiabilisation réduit réellement le temps et si les dix opérations
          applicables passent.
        </p>

        <h3>
          Scénario central : 12 utilisateurs, 38 000 lignes, 1 intégration
        </h3>
        <GuideTable
          caption="TCO connu sur 48 mois — scénario central"
          headers={["Voie", "Hypothèses saillantes", "TCO48 connu"]}
          rows={[
            [
              "Conserver Excel",
              "10 h d’admin/mois ; 4 h résiduelles/semaine",
              "58 160 € + X + I",
            ],
            [
              "Industrialiser Excel",
              "4 h d’admin/mois ; 800 €/an ; 1,5 h résiduelle/semaine",
              "34 800 € + X + I",
            ],
            [
              "Logiciel standard",
              "300 €/mois fictifs ; 3 h d’admin/mois",
              "46 520 € + X + I",
            ],
            [
              "Power Apps / low-code",
              "12 × 17,30 €/mois ; 6 h d’admin/mois",
              "62 404,80 € + X + I",
            ],
            [
              "Sur mesure",
              "250 €/mois d’hébergement fictif ; 6 000 €/an de maintenance",
              "97 640 € + X + I",
            ],
          ]}
        />
        <FormulaBox>
          Licence Power Apps illustrative = 12 × 17,30 × 48 = 9 964,80 € HT.
          Temps initial mesuré = 4 × 48 × 4 × 45 = 34 560 € de capacité, pas
          automatiquement une économie encaissée.
        </FormulaBox>

        <h3>
          Scène centrale fictive : une gérante doit d’abord reporter le verdict
        </h3>
        <p>
          <strong>Exemple composite fictif.</strong> Nathalie dirige une PME de
          maintenance de 14 salariés. Douze personnes utilisent un historique de
          38 000 lignes, dont cinq techniciens en déplacement. Le fichier se
          trouve sur un NAS et la mesure initiale relève quatre heures de
          consolidation par semaine. Son responsable d’exploitation devient
          propriétaire du futur outil ; une assistante est nommée suppléante.
        </p>
        <p>
          L’équipe rejoue le jeu d’essai. Excel industrialisé reste intéressant
          sur son coût connu, mais échoue tant que les droits par rôle et la
          concurrence ne sont pas démontrés. Un logiciel standard couvrant au
          moins 80 % du périmètre et passant les bloqueurs devient le premier
          candidat de pilote. Power Apps ne gagne pas parce que sa licence est
          calculable : capacité, connecteurs et administration doivent encore
          recevoir des bornes datées. Si son intervalle chevauche celui du
          standard, Nathalie reporte le choix ; elle ne transforme pas ce doute
          en 0 €. La scène ne prouve aucun produit : elle montre pourquoi les
          portes fonctionnelles précèdent le classement économique.
        </p>

        <h3>
          Scénario exigeant : 25 utilisateurs, 150 000 lignes, 3 intégrations
        </h3>
        <GuideTable
          caption="TCO connu sur 48 mois — scénario exigeant"
          headers={["Voie", "Hypothèses saillantes", "TCO48 connu"]}
          rows={[
            [
              "Conserver Excel",
              "20 h d’admin/mois ; 8 h résiduelles/semaine",
              "115 320 € + X + I",
            ],
            [
              "Industrialiser Excel",
              "10 h d’admin/mois ; 1 500 €/an ; 4 h résiduelles/semaine",
              "83 160 € + X + I",
            ],
            [
              "Logiciel standard",
              "900 €/mois fictifs ; 2 000 €/an",
              "124 440 € + X + I",
            ],
            [
              "Power Apps / low-code",
              "25 × 17,30 €/mois ; 12 h d’admin/mois",
              "150 640 € + X + I",
            ],
            [
              "Sur mesure",
              "500 €/mois d’hébergement fictif ; 12 000 €/an de maintenance",
              "212 280 € + X + I",
            ],
          ]}
        />
        <p>
          Même dans ce cas, le sur-mesure ne gagne pas par la complexité seule.
          Le standard reste moins cher dans les montants connus. Le sur-mesure
          ne devient comparable que si les écarts du standard et du low-code
          sont stables, chiffrés et supérieurs à leur surcoût — inconnues X/I
          comprises.
        </p>

        <h3>
          Sensibilité : les bascules viennent des hypothèses, pas du tableau
        </h3>
        <GuideTable
          caption="Sensibilités du scénario central"
          headers={["Variable", "Hypothèse", "Valeur calculée"]}
          rows={[
            ["Temps initial", "Bas — 1 h/semaine", "8 640 €"],
            ["Temps initial", "Central — 4 h/semaine", "34 560 €"],
            ["Temps initial", "Haut — 8 h/semaine", "69 120 €"],
            ["Coût horaire pour 4 h/semaine", "Bas — 30 €/h", "23 040 €"],
            ["Coût horaire pour 4 h/semaine", "Central — 45 €/h", "34 560 €"],
            ["Coût horaire pour 4 h/semaine", "Haut — 60 €/h", "46 080 €"],
            ["Utilisateurs Power Apps", "Bas — 5", "4 152 €"],
            ["Utilisateurs Power Apps", "Central — 12", "9 964,80 €"],
            ["Utilisateurs Power Apps", "Haut — 25", "20 760 €"],
            ["Administration low-code", "Bas — 2 h/mois", "4 320 €"],
            ["Administration low-code", "Central — 6 h/mois", "12 960 €"],
            ["Administration low-code", "Haut — 12 h/mois", "25 920 €"],
            ["Horizon Excel industrialisé", "24 mois", "22 400 €"],
            ["Horizon Excel industrialisé", "48 mois", "34 800 €"],
            ["Horizon logiciel standard", "24 mois", "31 760 €"],
            ["Horizon logiciel standard", "48 mois", "46 520 €"],
            ["Horizon low-code", "24 mois", "43 702,40 €"],
            ["Horizon low-code", "48 mois", "62 404,80 €"],
            ["Horizon sur-mesure", "24 mois", "75 320 €"],
            ["Horizon sur-mesure", "48 mois", "97 640 €"],
          ]}
        />
        <h3>Seuils qui rendent les cinq voies réellement falsifiables</h3>
        <GuideTable
          caption="Seuils de bascule des jeux illustratifs, avant X/I"
          headers={["Comparaison", "Seuil reproductible", "Lecture"]}
          rows={[
            [
              "Garder Excel vs l’industrialiser — simple",
              "Temps résiduel Excel < 0,748 h/semaine, soit environ 45 min",
              "Avec les autres hypothèses inchangées, garder Excel passe sous 11 780 € ; sinon l’industrialisation devient moins chère.",
            ],
            [
              "Low-code vs standard — central",
              "3 971,20 €/an + ΔX/I",
              "Les contournements annuels du standard doivent dépasser ce surcoût corrigé des inconnues relatives.",
            ],
            [
              "Sur-mesure vs standard — central",
              "12 780 €/an + ΔX/I",
              "L’écart métier stable doit coûter davantage chaque année pour rejoindre le sur-mesure.",
            ],
            [
              "Sur-mesure vs standard — exigeant",
              "21 960 €/an + ΔX/I",
              "En dessous, le standard reste économiquement devant s’il passe les portes.",
            ],
            [
              "Sur-mesure vs low-code — exigeant",
              "15 410 €/an + ΔX/I",
              "La valeur des écarts et risques du low-code doit dépasser ce montant corrigé.",
            ],
          ]}
        />
        <p>
          Ici, ΔX/I représente la différence annuelle entre les inconnues des
          deux voies. Un seuil ne s’applique qu’aux candidats ayant déjà passé
          les opérations bloquantes. Il ne convertit pas un gain de capacité en
          trésorerie et ne justifie jamais de sauver un candidat
          fonctionnellement éliminé.
        </p>
        <p>
          Dans le cas central, l’écart connu entre standard et Excel
          industrialisé est de 11 720 €, soit 2 930 €/an. Si les lacunes
          annuelles d’Excel dépassent ce montant corrigé de la différence des
          X/I, le standard peut rattraper son surcoût. Tant que X/I n’est pas
          borné, cette phrase reste une condition, pas une recommandation.
        </p>

        <h2 id="exemple">
          Chaque voie doit pouvoir gagner — et parfois aucune ne gagne
        </h2>
        <GuideTable
          caption="Contre-cas qui évitent de favoriser l’application vendue par l’agence"
          headers={["Résultat raisonnable", "Situation observée", "Décision"]}
          rows={[
            [
              "Conserver Excel",
              "Processus simple, très peu d’utilisateurs, risques faibles, fichier documenté et restaurable.",
              "Ne pas investir dans un nouvel outil.",
            ],
            [
              "Industrialiser Excel",
              "Le problème vient des copies, contrôles et responsabilités, pas d’une fonction absente.",
              "Structurer, documenter, coéditer, tester puis mesurer.",
            ],
            [
              "Logiciel standard",
              "Les droits ou l’audit éliminent Excel ; le produit couvre ≥ 80 % et tous les bloquants.",
              "Pilote standard avant low-code ou sur-mesure.",
            ],
            [
              "Plateforme nommée",
              "Le standard échoue sur une exigence indispensable ; la plateforme passe les dix opérations sans compte personnel.",
              "Pilote borné avec budget d’administration et sortie.",
            ],
            [
              "Sur mesure",
              "Standard et plateformes échouent sur des règles différenciantes, stables et chiffrées.",
              "Cadrage limité, premier périmètre réversible.",
            ],
            [
              "Reporter",
              "Processus instable, données sales, propriétaire absent, bénéfice non mesuré ou X/I décisif.",
              "Ne sélectionner aucun gagnant.",
            ],
            [
              "Arrêter",
              "Le pilote échoue à un bloquant ou aucun candidat ne reste exploitable.",
              "Conserver le mode dégradé et revoir le besoin.",
            ],
          ]}
        />
        <p>
          Un simple rapport peut aussi être la bonne réponse. Si le besoin est
          uniquement de consolider et lire des données sans saisie métier,
          droits complexes ni workflow, testez un export automatisé ou un outil
          de reporting avant de construire une application.
        </p>

        <h2 id="plan-30-jours">
          Décidez en trente jours : lancer, reporter ou arrêter
        </h2>
        <GuideTable
          caption="Un mois de décision réversible"
          headers={["Période", "Travail", "Porte de sortie"]}
          rows={[
            [
              "Dix jours ouvrés (deux semaines)",
              "Mesurer le travail réel, nommer propriétaire et suppléant, nettoyer le jeu d’essai.",
              "Reporter si processus, données ou bénéfice restent indéfinis.",
            ],
            [
              "Jours 11 à 15",
              "Présélectionner Excel, standards et plateformes nommées sur la même fiche.",
              "Pour le logiciel standard seulement, exiger au moins 80 % des exigences applicables. Pour toute voie, exiger la réussite de toutes les opérations applicables et de sa condition propre.",
            ],
            [
              "Jours 16 à 23",
              "Rejouer les dix opérations, restauration et export compris.",
              "Arrêter la voie à la première porte bloquante en échec.",
            ],
            [
              "Jours 24 à 30",
              "Remplacer X/I par mesures, devis ou bornes et recalculer TCO48.",
              "Lancer seulement un pilote borné ; sinon reporter.",
            ],
          ]}
        />
        <InfoBox variant="amber" title="Règle d’arrêt du pilote">
          Fixez avant le démarrage la durée, le budget, les utilisateurs, les
          métriques, les opérations bloquantes et la procédure de retour à Excel
          ou au mode dégradé. Sans critère d’arrêt écrit, un prototype devient
          facilement une production non gouvernée.
        </InfoBox>

        <h3>Après la bascule, contrôlez à 30, 60 et 90 jours</h3>
        <p>
          La mise en production ne ferme pas la comparaison : elle remplace les
          hypothèses par des observations. Gardez la mesure de départ, le TCO48
          estimé et les critères du pilote. À chaque revue, décidez de
          poursuivre, corriger, réduire le périmètre ou revenir — avec un
          responsable et une date, pas une liste de souhaits.
        </p>
        <GuideTable
          caption="Le suivi qui vérifie la valeur réelle"
          headers={["Échéance", "Mesures à relire", "Décision attendue"]}
          rows={[
            [
              "J+30",
              "Adoption par rôle, tâches terminées, erreurs, rejets, tickets, incidents, disponibilité et temps d’exécution",
              "Corriger les bloqueurs, retirer les doubles saisies et confirmer que le mode dégradé fonctionne",
            ],
            [
              "J+60",
              "Temps réellement évité ou réaffecté, qualité des données, contournements Excel, formation et charge d’administration",
              "Recalculer le bénéfice ; réduire ou renforcer le dispositif si les usages divergent",
            ],
            [
              "J+90",
              "Coûts réels, licences actives, support, intégrations, incidents, performance, restauration et export",
              "Mettre à jour le TCO48 et décider : généraliser, stabiliser, renégocier ou sortir",
            ],
          ]}
        />
        <p>
          Un nombre de connexions ne prouve pas une amélioration. Cherchez le
          cycle complet : tâche comprise, terminée sans erreur, donnée
          exploitable en aval et incident récupérable. Si les heures annoncées «
          gagnées » deviennent du support ou des corrections, réattribuez-les au
          coût réel au lieu de conserver le ROI initial.
        </p>

        <h3>Conflit d’intérêt explicite</h3>
        <p>
          Hagnéré Code conçoit et maintient des applications sur mesure. Nous
          avons donc un intérêt commercial potentiel à ce que cette voie soit
          retenue. Le protocole de cette page est construit pour pouvoir
          conclure l’inverse : garder Excel, l’industrialiser, acheter un
          logiciel, configurer une plateforme, produire un simple rapport,
          reporter ou arrêter. Demandez au moins un candidat standard
          indépendant et conservez la matrice de preuves avant de solliciter un
          devis sur mesure.
        </p>

        <GuideInlineCTA
          title="Vous avez déjà les preuves des dix opérations ?"
          description="Transmettez la matrice, les cinq TCO avec X/I visibles et le dernier test de restauration. Nous pouvons contre-auditer le raisonnement sans présumer qu’une application sur mesure est la réponse."
          tags={[
            "Comparaison égal-scope",
            "Restauration testée",
            "Sortie documentée",
          ]}
          ctaLabel="Faire contre-auditer la décision"
          ctaService="outils-internes"
          ctaSource="guide-excel-application"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et points à revalider</h2>
        <p>
          Sources rouvertes le {EXCEL_SOURCE_VERIFIED_ON_FR}. Les tarifs, plans,
          limites et
          documentations produit évoluent : relevez à nouveau la date, la
          devise, la fiscalité, le pays, le plan et la configuration au moment
          de décider.
        </p>
        <ul>
          <li>
            Microsoft :{" "}
            <a
              href="https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              tarifs Power Apps
            </a>
            ,{" "}
            <a
              href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              délégation
            </a>
            ,{" "}
            <a
              href="https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/"
              target="_blank"
              rel="noopener noreferrer"
            >
              connecteur Excel Online Business
            </a>
            ,{" "}
            <a
              href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/get-started-create-from-blank"
              target="_blank"
              rel="noopener noreferrer"
            >
              création à partir d’Excel
            </a>
            ,{" "}
            <a
              href="https://learn.microsoft.com/en-us/power-platform/admin/backup-restore-environments"
              target="_blank"
              rel="noopener noreferrer"
            >
              sauvegarde/restauration
            </a>{" "}
            et{" "}
            <a
              href="https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing"
              target="_blank"
              rel="noopener noreferrer"
            >
              audit Dataverse
            </a>
            .
          </li>
          <li>
            Google AppSheet :{" "}
            <a
              href="https://about.appsheet.com/pricing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              plans et prix
            </a>
            ,{" "}
            <a
              href="https://support.google.com/appsheet/answer/12635312?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              import d’un classeur Excel
            </a>
            ,{" "}
            <a
              href="https://support.google.com/appsheet/answer/10099416?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              préparation et ajout des feuilles d’une source Excel
            </a>
            ,{" "}
            <a
              href="https://support.google.com/appsheet/answer/10099797?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              formules et valeurs calculées
            </a>
            ,{" "}
            <a
              href="https://support.google.com/appsheet/answer/10104706?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              passage des filtres à la source
            </a>
            ,{" "}
            <a
              href="https://support.google.com/appsheet/answer/10104794?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              historique d’audit
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/appsheet/answer/10104991?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              transfert d’une application
            </a>
            .
          </li>
          <li>
            Airtable :{" "}
            <a
              href="https://support.airtable.com/docs/airtable-plans"
              target="_blank"
              rel="noopener noreferrer"
            >
              plans et quotas
            </a>
            ,{" "}
            <a
              href="https://support.airtable.com/docs/taking-and-restoring-base-snapshots"
              target="_blank"
              rel="noopener noreferrer"
            >
              snapshots
            </a>
            ,{" "}
            <a
              href="https://support.airtable.com/docs/airtable-attachment-url-behavior"
              target="_blank"
              rel="noopener noreferrer"
            >
              URL de pièces jointes
            </a>{" "}
            et{" "}
            <a
              href="https://support.airtable.com/docs/data-residency-at-airtable"
              target="_blank"
              rel="noopener noreferrer"
            >
              résidence des données
            </a>
            . Deux pages officielles donnent actuellement des durées différentes
            pour l’historique Business : ne publiez ni ne contractualisez cette
            durée sans confirmation écrite.
          </li>
          <li>
            Autres architectures internationales :{" "}
            <a
              href="https://retool.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Retool
            </a>
            ,{" "}
            <a
              href="https://www.getgrist.com/pricing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grist
            </a>{" "}
            et{" "}
            <a
              href="https://baserow.io/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baserow
            </a>
            . Revalidez offre, quotas, rôles, hébergement et conditions
            d’assistance au jour de la présélection.
          </li>
          <li>
            Méthode et résilience :{" "}
            <a
              href="https://www.gov.uk/guidance/the-aqua-book"
              target="_blank"
              rel="noopener noreferrer"
            >
              AQuA Book 2025
            </a>
            ,{" "}
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — sauvegarder
            </a>
            ,{" "}
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — procédures de sauvegarde/restauration
            </a>{" "}
            et{" "}
            <a
              href="https://www.gao.gov/products/gao-20-195g"
              target="_blank"
              rel="noopener noreferrer"
            >
              GAO Cost Estimating Guide
            </a>
            .
          </li>
          <li>
            Cadre de sortie :{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj"
              target="_blank"
              rel="noopener noreferrer"
            >
              règlement (UE) 2023/2854
            </a>
            , notamment articles 25, 29 et 50 ; son applicabilité concrète doit
            être qualifiée pour le service et le contrat concernés.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
