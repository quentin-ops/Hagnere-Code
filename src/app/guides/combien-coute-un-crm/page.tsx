import type { Metadata } from "next";
import Link from "next/link";
import {
  ComparisonGrid,
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

const guide = getGuide("combien-coute-un-crm");

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
        url: `${guideUrl(guide)}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Combien coûte un CRM en 2026 : trois socles chiffrés sur 36 mois",
      },
    ],
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [`${guideUrl(guide)}/opengraph-image`],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  about: [
    { "@type": "Thing", name: "Logiciel CRM" },
    { "@type": "Thing", name: "Coût total de possession" },
    { "@type": "Thing", name: "Gestion de la relation client" },
  ],
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
      "Applications métier",
      "CRM",
      "Outils internes",
      "Intégrations logicielles",
      "Migration de données",
      "Développement sur mesure",
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
      name: "Combien coûte un CRM ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte un CRM pour une petite entreprise ?",
    answer:
      "Il n’existe pas de moyenne publique assez robuste pour donner un prix universel. Pour cinq postes Pipedrive Lite à 14 euros par mois hors taxes en facturation annuelle, notre scénario pédagogique produit un socle chiffré de 5 614 euros sur 36 mois : 2 520 euros de licences, huit jours internes valorisés avec la base Insee et deux jours internes réservés à la sortie. Administration récurrente, options et taxes restent à ajouter si elles s’appliquent. Ce n’est ni un devis ni une recommandation d’éditeur.",
  },
  {
    question: "Un CRM gratuit suffit-il pour démarrer ?",
    answer:
      "Oui, si une petite équipe gère un pipeline simple, accepte les limites de la formule et peut exporter ses données proprement. Avant de payer, testez un cycle commercial complet avec des données fictives ou réellement anonymisées : création d’un prospect, relance, devis, passage en client, rapport et export. Un essai avec des données personnelles réelles exige ensuite le cadre RGPD adapté. Passez à une offre payante lorsque la limite bloquante est identifiée.",
  },
  {
    question: "Le prix par utilisateur représente-t-il le coût total du CRM ?",
    answer:
      "Non. Le coût total sur 36 mois additionne les licences et options, le cadrage, le paramétrage, la reprise des données, les intégrations, la formation, le temps des équipes, l’administration, l’indexation contractuelle et la sortie. Le tarif par utilisateur ne représente qu’une ligne de ce calcul.",
  },
  {
    question: "Que faut-il demander avant de signer un contrat CRM ?",
    answer:
      "Demandez un bon de commande daté avec le nombre minimal de sièges, les règles d’ajout et de retrait, la durée d’engagement, la formule d’indexation, les options, les services obligatoires et les taxes. Ajoutez un scénario de sortie : données exportables, format, historique inclus, délai, assistance, frais, période de récupération et suppression finale. Faites valider les clauses sensibles par votre conseil juridique.",
  },
  {
    question: "Quand faut-il envisager un CRM sur mesure ?",
    answer:
      "Envisagez-le lorsque des règles métier différenciantes, des droits complexes ou des intégrations critiques restent mal couverts après un essai sérieux des solutions standard, et que le coût récurrent de ces écarts est mesuré. Comparez alors deux TCO sur le même horizon et le même périmètre. Le nombre d’utilisateurs, à lui seul, ne prouve jamais que le sur-mesure sera moins cher.",
  },
  {
    question: "Peut-on récupérer toutes ses données en quittant un CRM SaaS ?",
    answer:
      "Ne le supposez pas : testez l’export avant de signer. Un CRM SaaS est un logiciel fourni en ligne par abonnement. Le Data Act impose, pour les services entrant dans son champ, des clauses sur le changement de fournisseur et les catégories de données portables. Il prévoit aussi la suppression des frais de changement à compter du 12 janvier 2027. Cela n’efface pas automatiquement les abonnements ordinaires, les prestations supplémentaires ni une pénalité proportionnée de résiliation anticipée.",
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
          { label: "Combien coûte un CRM ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Trois socles CRM recalculables sur 36 mois, les tarifs publics de Salesforce, HubSpot et Pipedrive, puis la méthode pour compléter un coût total avec le temps de vos équipes, les options et le coût de sortie."
        heroAction={{
          href: "#trois-scenarios",
          label: "Voir les trois socles",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Publié le ${formatGuideDate(guide.datePublished)}`}
        keyPoints={[
          {
            number: "01",
            title: "3 socles sur 36 mois",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Tarifs vérifiés",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Grille de comparaison",
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
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d’un logiciel sur mesure",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou sur-mesure",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Combien coûte un SaaS ?",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes sur mesure",
          },
          {
            href: "/outils/calculateur-cout-excel",
            label: "Calculateur du coût d’Excel",
          },
        ]}
        faqTitle="Prix d’un CRM : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Un CRM — outil de gestion de la relation client — ne coûte pas son
            prix par utilisateur.
          </strong>{" "}
          Il coûte les licences pendant votre durée d’engagement, mais aussi le
          nettoyage des contacts, le paramétrage du pipeline commercial — les
          étapes suivies de la prospection à la vente —, les connexions aux
          autres outils, le temps des équipes, l’accompagnement à l’usage et la
          prochaine migration. Pour décider, comparez un coût total sur 36 mois,
          pas deux tarifs mensuels isolés.
        </p>

        <InfoBox variant="blue" title="La réponse courte">
          <p className="mb-2">
            Les trois scénarios pédagogiques détaillés ci-dessous produisent un
            socle chiffré de <strong>5 614 €</strong> pour 5 postes et un
            pipeline simple,{" "}
            <strong>
              56 226 € + frais de mise en route (onboarding) à confirmer
            </strong>{" "}
            pour 12 utilisateurs avec davantage d’automatisation, et{" "}
            <strong>155 923 €</strong> pour 20 utilisateurs avec une gouvernance
            plus complexe.
          </p>
          <p className="mb-0">
            Ce ne sont ni des TCO complets, ni des moyennes du marché, ni des
            devis, ni un classement des trois éditeurs. Chaque socle résulte
            d’hypothèses visibles ; ajoutez les lignes inconnues au lieu de les
            traiter comme nulles.
          </p>
        </InfoBox>

        <p>
          Hagnéré Code conçoit des outils internes sur mesure : nous avons donc
          un intérêt commercial évident dans ce sujet. La règle de ce guide est
          simple : un CRM standard reste le choix par défaut lorsqu’il couvre le
          processus sans contournement coûteux. Le sur-mesure n’entre dans la
          comparaison qu’après un calcul à fonctions égales.
        </p>

        <GuideToc
          items={[
            {
              id: "trois-scenarios",
              label: "1. Trois socles de budget sur 36 mois",
            },
            { id: "formule-tco", label: "2. La formule du coût total" },
            {
              id: "tarifs-publics",
              label: "3. Salesforce, HubSpot et Pipedrive",
            },
            {
              id: "temps-interne",
              label: "4. Le temps interne que le devis oublie",
            },
            {
              id: "mise-en-oeuvre",
              label: "5. Données, intégrations et adoption",
            },
            {
              id: "contrat-sortie",
              label: "6. Contrat, sièges et coût de sortie",
            },
            {
              id: "standard-ou-specifique",
              label: "7. CRM standard ou outil spécifique",
            },
            { id: "comparer-devis", label: "8. Comparer deux propositions" },
            {
              id: "plan-action",
              label: "9. Préparer la décision en dix jours",
            },
            { id: "sources", label: "Sources primaires consultées" },
          ]}
        />

        <h2 id="trois-scenarios">1. Trois socles de budget CRM sur 36 mois</h2>

        <p>
          Les scénarios utilisent les prix publics affichés le 20 juillet 2026,
          sans remise ni hausse future. Pipedrive affiche ici ses prix en euros
          hors TVA avec la facturation annuelle sélectionnée. Les autres taxes,
          le change, l’administration récurrente et toute option non nommée ne
          sont pas chiffrés. Pour valoriser le temps de travail, ils utilisent
          la base de l’
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            Insee de 44,2 € par heure dans les services marchands en 2025
          </a>
          , soit 309,4 € pour une journée conventionnelle de sept heures. Cette
          base doit être remplacée par votre coût chargé réel dès que vous le
          connaissez.
        </p>

        <GuideTable
          headers={[
            "Scénario de calcul",
            "Licences sur 36 mois",
            "Mise en œuvre",
            "Réserve de sortie",
            "Socle chiffré sur 36 mois",
          ]}
          rows={[
            [
              "5 postes — pipeline simple",
              "Pipedrive Lite : 5 × 14 € HT × 36 = 2 520 € HT",
              "8 jours internes = 2 475,20 € ; sans aide externe",
              "2 jours internes = 618,80 €",
              {
                text: "5 614 €",
                className: "font-bold text-emerald-700 dark:text-emerald-400",
              },
            ],
            [
              "12 utilisateurs — automatisations et reporting",
              "HubSpot Pro : 12 × 100 € × 36 = 43 200 €",
              "20 jours internes = 6 188 € ; 8 jours externes à 700 € HT = 5 600 €",
              "4 jours internes = 1 237,60 €",
              {
                text: "56 226 € + mise en route à confirmer",
                className: "font-bold text-blue-700 dark:text-blue-400",
              },
            ],
            [
              "20 utilisateurs — gouvernance plus complexe",
              "Salesforce Enterprise : 20 × 175 € × 36 = 126 000 €",
              "35 jours internes = 10 829 € ; 20 jours externes à 800 € HT = 16 000 €",
              "10 jours internes = 3 094 €",
              {
                text: "155 923 €",
                className: "font-bold text-violet-700 dark:text-violet-400",
              },
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Ce que ces montants démontrent — et ce qu’ils ne démontrent pas"
        >
          <p className="mb-2">
            Les tarifs externes de 700 € HT et 800 € HT par jour sont de simples
            variables de calcul. Ils ne décrivent ni le tarif de Hagnéré Code,
            ni une moyenne de marché. Le premier scénario suppose volontairement
            une configuration autonome.
          </p>
          <p className="mb-0">
            Les éditions n’offrent pas les mêmes fonctions. On ne peut donc pas
            conclure que le premier outil est « moins cher » que le troisième.
            Administration mensuelle, options, stockage supplémentaire,
            indexation, taxes applicables et mise en route HubSpot restent à
            ajouter lorsqu’ils existent : une ligne inconnue n’est jamais égale
            à zéro.
          </p>
        </InfoBox>

        <h3>Le premier scénario, ligne par ligne</h3>

        <FormulaBox>{`Licences : 5 postes × 14 € HT × 36 mois = 2 520 € HT
Temps de déploiement : 8 jours × 7 h × 44,2 € = 2 475,20 €
Réserve de sortie : 2 jours × 7 h × 44,2 € = 618,80 €

Socle chiffré sur 36 mois = 2 520 + 2 475,20 + 618,80 = 5 614 €`}</FormulaBox>

        <p>
          La réserve de sortie n’est pas nécessairement une facture payée le
          premier jour. C’est une provision de planification pour exporter,
          contrôler et documenter les données si l’outil doit être remplacé. Si
          votre CRM contient des objets personnalisés, des pièces jointes ou un
          historique d’emails difficile à exporter, deux jours seront peut-être
          insuffisants : mesurez-le avec un export d’essai.
        </p>

        <h2 id="formule-tco">2. La formule du coût total</h2>

        <p>
          Le TCO — <em>total cost of ownership</em>, ou coût total de possession
          — ramène toutes les dépenses au même horizon. Pour un CRM SaaS — un
          logiciel accessible en ligne et fourni par abonnement —, partez de
          cette formule, puis supprimez uniquement les lignes dont l’absence est
          démontrée. Une API est une interface de programmation qui permet à
          deux logiciels d’échanger automatiquement des données.
        </p>

        <FormulaBox>{`TCO CRM sur 36 mois =
  licences de base
+ options, crédits et stockage
+ cadrage et sélection
+ paramétrage et automatisations
+ nettoyage et reprise des données
+ connecteurs et API
+ formation, recette et accompagnement
+ temps interne de pilotage et d’administration
+ hausse contractuelle documentée
+ coût de sortie et de remigration`}</FormulaBox>

        <p>
          Deux propositions sont comparables seulement si elles couvrent le même
          nombre d’utilisateurs mois par mois, les mêmes fonctions, les mêmes
          données, les mêmes interfaces et la même durée. Une offre à 25 € par
          siège sans reprise de données ne bat pas une offre à 50 € qui inclut
          une migration testée. Elle répond à un périmètre différent.
        </p>

        <GuideTable
          headers={["Poste", "Unité à demander", "Preuve utile"]}
          rows={[
            [
              "Licences",
              "Sièges × mois, avec trajectoire d’effectif",
              "Bon de commande daté et édition exacte",
            ],
            [
              "Options",
              "Module, quota, stockage ou crédit consommé",
              "Catalogue contractuel et règle de dépassement",
            ],
            [
              "Mise en œuvre",
              "Jours, livrables et critères d’acceptation",
              "Périmètre signé, recette et responsabilités",
            ],
            [
              "Temps interne",
              "Heures par rôle et par phase",
              "Planning affecté et coût chargé",
            ],
            [
              "Exploitation",
              "Administration, support et corrections par mois",
              "Engagement de niveau de service (SLA), procédure et historique d’incidents",
            ],
            [
              "Sortie",
              "Données, format, délai, assistance et suppression",
              "Export d’essai et clause de réversibilité",
            ],
          ]}
        />

        <h2 id="tarifs-publics">
          3. Salesforce, HubSpot et Pipedrive : ce que disent les pages
          publiques
        </h2>

        <p>
          Les tarifs suivants ont été contrôlés sur les pages françaises des
          éditeurs le 20 juillet 2026. Ils servent à bâtir une hypothèse, pas à
          signer : l’engagement, la devise, les taxes, les minima, les services
          obligatoires et les limites fonctionnelles restent à lire dans le bon
          de commande. Consultez les pages officielles de{" "}
          <a
            href="https://www.salesforce.com/fr/sales/pricing/"
            target="_blank"
            rel="noreferrer"
          >
            Salesforce
          </a>
          ,{" "}
          <a
            href="https://www.hubspot.fr/products/sales"
            target="_blank"
            rel="noreferrer"
          >
            HubSpot
          </a>{" "}
          et{" "}
          <a
            href="https://www.pipedrive.com/fr/pricing?currency=EUR"
            target="_blank"
            rel="noreferrer"
          >
            Pipedrive
          </a>{" "}
          au moment de votre décision.
        </p>

        <GuideTable
          headers={[
            "Éditeur",
            "Éditions publiques observées",
            "Mode de facturation affiché",
            "Point à faire confirmer",
          ]}
          rows={[
            [
              "Pipedrive",
              "Lite 14 € ; Growth 39 € ; Premium 59 € ; Ultimate 79 € par poste/mois",
              "Prix en euros hors TVA, facturation annuelle activée ; jusqu’à 42 % d’économie annoncé",
              "Prix mensuel, options, taxes et droits de réduction des postes",
            ],
            [
              "HubSpot Sales Hub",
              "Gratuit 0 € ; Starter à partir de 10 € ; Pro 100 € ; Entreprise 150 € par utilisateur/mois",
              "Prix « à partir de » ; Starter à 10 € affiché comme offre temporaire pour les nouveaux clients",
              "Engagement, offre Starter, mise en route, sièges et limites dans un devis daté",
            ],
            [
              "Salesforce Sales",
              "Gratuit 0 € ; Starter 25 € ; Pro 100 € ; Enterprise 175 € ; Unlimited 350 € ; Agentforce 1 Sales 550 € par utilisateur/mois",
              "Starter mensuel ou annuel ; éditions supérieures annuelles",
              "Options, services, stockage, API, taxes et prix contractuel",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="HubSpot : deux pages officielles, deux photos tarifaires"
        >
          <p className="mb-0">
            La page produit actuelle affiche Starter à 10 € comme offre
            temporaire destinée aux nouveaux clients et Pro à 100 €. Un{" "}
            <a
              href="https://blog.hubspot.fr/sales/sales-hub-tarif"
              target="_blank"
              rel="noreferrer"
            >
              article officiel mis à jour le 2 octobre 2025
            </a>{" "}
            indique encore 9 € et 90 € en annuel, ainsi que des frais de mise en
            route. Cette contradiction ne permet pas de conclure qu’ils valent
            zéro : le scénario les conserve donc « à confirmer ». Demandez une
            proposition datée qui liste abonnement, mise en route, taxes et
            limites.
          </p>
        </InfoBox>

        <p>
          La bonne question n’est pas « quel éditeur est le moins cher ? », mais
          « quelle édition couvre notre scénario de recette sans option surprise
          ? ». Écrivez cinq opérations indispensables — par exemple qualifier un
          lead, c’est-à-dire un prospect commercial, attribuer une opportunité,
          générer un devis, synchroniser une facture et produire une prévision —
          puis faites-les exécuter pendant l’essai.
        </p>

        <h2 id="temps-interne">4. Le temps interne que le devis oublie</h2>

        <p>
          Un éditeur facture des sièges ; votre entreprise mobilise des
          personnes. Selon l’
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            Insee
          </a>
          , le coût horaire de la main-d’œuvre dans les services marchands était
          de 44,2 € en 2025, sur un champ d’entreprises de 10 salariés ou plus.
          À sept heures par jour, la base de calcul vaut 309,4 €. Elle ne
          représente pas automatiquement le coût d’un dirigeant, d’un cadre ou
          d’une microentreprise : utilisez votre propre donnée chargée si elle
          est disponible.
        </p>

        <FormulaBox>{`Coût interne d’une tâche =
nombre de personnes × nombre d’heures × coût horaire chargé

Exemple de méthode :
2 personnes × 14 heures × 44,2 € = 1 237,60 €`}</FormulaBox>

        <p>
          N’inscrivez pas « projet CRM » sur une seule ligne. Décomposez les
          responsabilités : le décideur qui porte le projet tranche, le référent
          commercial décrit les étapes et exceptions, le responsable des données
          arbitre les doublons, les utilisateurs testent et un administrateur
          suit ensuite les accès et les règles.
        </p>

        <GuideTable
          headers={[
            "Travail interne",
            "Qui participe ?",
            "Votre hypothèse à remplir",
          ]}
          rows={[
            [
              "Objectifs, périmètre et choix",
              "Direction, ventes, opérations",
              "___ personnes × ___ heures",
            ],
            [
              "Nettoyage des contacts et sociétés",
              "Référent données, commerciaux",
              "___ personnes × ___ heures",
            ],
            [
              "Pipeline, champs, droits et automatisations",
              "Métier, administrateur, intégrateur",
              "___ personnes × ___ heures",
            ],
            [
              "Recette des scénarios réels",
              "Utilisateurs pilotes",
              "___ personnes × ___ heures",
            ],
            [
              "Formation et reprise des anomalies",
              "Équipe, référent interne",
              "___ personnes × ___ heures",
            ],
            [
              "Administration récurrente",
              "Propriétaire du CRM",
              "___ heures par mois × 36",
            ],
            [
              "Export et contrôle de sortie",
              "Données, métier, prestataire éventuel",
              "___ personnes × ___ heures",
            ],
          ]}
        />

        <p>
          Ce tableau évite une illusion fréquente : une installation « gratuite
          » peut coûter davantage qu’un accompagnement court si trois cadres y
          consacrent plusieurs semaines. L’inverse est aussi vrai : une petite
          équipe autonome ne doit pas acheter une prestation lourde pour
          reproduire un pipeline standard.
        </p>

        <h2 id="mise-en-oeuvre">
          5. Données, intégrations et adoption : les coûts à rendre visibles
        </h2>

        <h3>La reprise de données n’est pas un simple import CSV</h3>

        <p>
          Un fichier CSV est un fichier texte qui représente un tableau de
          données séparées par des délimiteurs. Comptez les sources, pas
          seulement les lignes : tableur de prospection, carnet d’adresses,
          ancien CRM, outil de facturation, messagerie et pièces jointes. Pour
          chacune, décidez ce qui est migré, archivé ou supprimé, puis
          définissez les règles de rapprochement des contacts, sociétés et
          opportunités.
        </p>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CNIL indique dans son référentiel sur les activités commerciales
          </a>{" "}
          une durée de trois ans pour les données de prospect à compter de leur
          collecte ou du dernier contact émanant du prospect. Une simple
          ouverture d’email n’y est pas considérée comme un contact. Ce repère
          ne remplace pas votre registre de traitement : les finalités, bases
          légales, obligations sectorielles et durées doivent être documentées
          pour vos propres données.
        </p>

        <h3>
          Un connecteur présent au catalogue ne prouve pas que le flux convient
        </h3>

        <p>
          Pour chaque liaison avec la comptabilité, la facturation, le support
          ou le marketing, exigez une fiche de flux : objets transmis, sens,
          fréquence, déclencheur, gestion des doublons, journal des erreurs,
          responsable de la correction et procédure de reprise. Si son prix
          n’est pas public, notez « à chiffrer » au lieu d’inventer une
          fourchette.
        </p>

        <GuideTable
          headers={["Question de recette", "Pourquoi elle change le budget"]}
          rows={[
            [
              "Les mises à jour vont-elles dans un seul sens ou dans les deux ?",
              "Un flux bidirectionnel exige des règles de conflit et davantage de tests",
            ],
            [
              "Que se passe-t-il si l’API est indisponible ?",
              "Il faut une file d’attente, une alerte et une procédure de reprise",
            ],
            [
              "Qui crée la société lorsque deux contacts partagent un domaine ?",
              "La déduplication doit avoir une règle métier explicite",
            ],
            [
              "Les suppressions sont-elles propagées ?",
              "Une suppression automatique peut détruire une preuve ou rompre un historique",
            ],
            [
              "Quel identifiant relie CRM, devis et facture ?",
              "Sans clé stable, le reporting devient une réconciliation manuelle",
            ],
          ]}
        />

        <h3>L’adoption se pilote sans taux d’échec spectaculaire</h3>

        <p>
          Nous n’utilisons pas l’affirmation selon laquelle une proportion fixe
          des projets CRM échouerait : sa définition, son échantillon et son
          actualité sont trop variables pour décider du budget d’une PME
          française. Mesurez plutôt votre projet à 30, 60 et 90 jours avec
          quelques faits : utilisateurs actifs, opportunités avec prochaine
          action, doublons, erreurs de synchronisation, rapports réellement
          consultés et temps de consolidation économisé.
        </p>

        <InfoBox variant="emerald" title="Le test qui évite d’acheter trop tôt">
          <p className="mb-0">
            Faites utiliser l’édition pressentie par deux ou trois personnes sur
            un cycle complet, puis exportez les données créées. Si le pipeline,
            le rapport ou l’export critique ne fonctionne pas pendant le pilote,
            ne comptez pas sur une promesse orale pour le rendre simple après la
            signature.
          </p>
        </InfoBox>

        <h2 id="contrat-sortie">
          6. Contrat, nombre de sièges et coût de sortie
        </h2>

        <p>
          Le contrat fait varier le TCO sans ajouter une seule fonction. Faites
          écrire la durée initiale, le renouvellement, le préavis, le nombre
          minimal de sièges, le moment où un siège peut être retiré, la formule
          d’indexation, la devise, les taxes et le prix de chaque service
          annexe. Une remise de première année n’a de valeur que si les années
          suivantes sont aussi calculables.
        </p>

        <GuideTable
          headers={[
            "Clause",
            "Question exacte à poser",
            "Impact à reporter dans le TCO",
          ]}
          rows={[
            [
              "Engagement",
              "Quelle est la première date réelle de résiliation sans pénalité ?",
              "Mois payés même si l’usage s’arrête",
            ],
            [
              "Sièges",
              "Peut-on réduire le nombre en cours de période ou seulement à l’échéance ?",
              "Trajectoire haute ou basse des effectifs",
            ],
            [
              "Indexation",
              "Quelle formule, quelle date de base et existe-t-il un plafond ?",
              "Prix de chaque année, pas seulement année 1",
            ],
            [
              "Options",
              "Quels modules, crédits ou quotas sont obligatoires pour notre recette ?",
              "Consommation fixe et variable",
            ],
            [
              "Réversibilité",
              "Quels objets, historiques, fichiers et relations sont exportés, dans quel format ?",
              "Travail d’extraction, contrôle et remigration",
            ],
            [
              "Fin de contrat",
              "Pendant combien de jours les données restent-elles récupérables et quand sont-elles supprimées ?",
              "Chevauchement entre deux outils et risque opérationnel",
            ],
          ]}
        />

        <h3>Ce que le Data Act change — et ce qu’il ne change pas</h3>

        <p>
          Le{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr"
            target="_blank"
            rel="noreferrer"
          >
            règlement européen 2023/2854, dit Data Act
          </a>{" "}
          est applicable depuis le 12 septembre 2025. Pour les services de
          traitement de données entrant dans son champ, l’article 25 impose
          notamment un contrat écrit décrivant le changement de fournisseur, un
          préavis maximal de deux mois, une transition maximale obligatoire de
          30 jours dans le cas normal et les catégories de données portables. Il
          prévoit aussi au moins 30 jours de récupération après la transition.
        </p>

        <p>
          Jusqu’au 12 janvier 2027, l’article 29 autorise des frais de
          changement réduits, plafonnés aux coûts directement liés. À compter de
          cette date, aucun frais de changement ne peut être imposé pour le
          processus de changement. Le texte distingue toutefois ces frais des
          frais de service ordinaires, des services supplémentaires demandés par
          le client et des pénalités proportionnées de résiliation anticipée. «
          Sortie sans frais » ne signifie donc pas « rupture immédiate et
          gratuite de tout engagement ».
        </p>

        <InfoBox variant="amber" title="Point juridique">
          <p className="mb-0">
            Vérifiez que le service et le contrat concernés entrent bien dans le
            champ du règlement. Pour un engagement important ou une clause
            contestée, faites relire le contrat par un professionnel du droit.
            Ce guide donne une méthode de contrôle, pas un avis juridique.
          </p>
        </InfoBox>

        <h2 id="standard-ou-specifique">
          7. CRM standard ou outil spécifique : comparer sans biais
        </h2>

        <p>
          Un grand nombre de sièges ne rend pas mécaniquement le sur-mesure
          moins cher. L’équation n’est valable que si les deux options
          accomplissent les mêmes tâches avec une qualité, une sécurité et une
          continuité comparables. Commencez par chiffrer les écarts
          fonctionnels, pas par chercher un seuil universel.
        </p>

        <FormulaBox>{`TCO SaaS =
sièges × prix mensuel × 36
+ options + déploiement + temps interne + exploitation + sortie

TCO spécifique =
cadrage + développement + reprise
+ hébergement sur 36 mois + maintenance et évolutions
+ temps interne + continuité prestataire + sortie`}</FormulaBox>

        <ComparisonGrid
          items={[
            {
              title: "Le CRM standard gagne",
              description:
                "Le cycle commercial est classique, les intégrations existent, les droits restent simples, l’export a été testé et le TCO demeure inférieur. Dans ce cas, personnaliser légèrement vaut mieux que reconstruire un produit éprouvé.",
              variant: "blue",
            },
            {
              title: "Un outil spécifique mérite un cadrage",
              description:
                "Une règle métier différenciante, des droits complexes ou des intégrations critiques imposent des contournements récurrents et mesurés. Le budget inclut alors maintenance, documentation, hébergement et plan de continuité — pas seulement le développement initial.",
              variant: "green",
            },
          ]}
        />

        <GuideTable
          headers={[
            "Profil",
            "Décision raisonnable avant tout devis sur mesure",
          ]}
          rows={[
            [
              "1 à 5 utilisateurs, pipeline simple",
              "Tester une formule gratuite ou d’entrée de gamme et valider l’export",
            ],
            [
              "6 à 20 utilisateurs, processus commercial standard",
              "Comparer deux CRM SaaS sur un pilote et un TCO de 36 mois",
            ],
            [
              "Plus de 20 utilisateurs ou plusieurs équipes",
              "Formaliser rôles, trajectoire de sièges, intégrations, sécurité et clauses avant négociation",
            ],
            [
              "Processus atypique ou règles différenciantes",
              "Chiffrer chaque écart au standard, puis comparer abonnement adapté et outil spécifique à fonctions égales",
            ],
          ]}
        />

        <p>
          Si vous quittez un fichier devenu fragile, commencez par le diagnostic
          du guide{" "}
          <Link href="/guides/transformer-excel-en-application">
            transformer Excel en application
          </Link>
          . Si le besoin spécifique est déjà établi, le guide{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            prix d’un logiciel sur mesure
          </Link>{" "}
          détaille les postes du second membre de l’équation.
        </p>

        <GuideInlineCTA
          title="Faites relire le TCO avant de signer"
          description="Envoyez vos hypothèses, le nombre de sièges et les écarts fonctionnels. Nous vous aidons à distinguer ce qu’un CRM standard couvre déjà de ce qui justifie réellement un outil spécifique."
          tags={[
            "Hypothèses visibles",
            "Cas adaptés ou non explicités",
            "Objectif : prochain jour ouvré",
          ]}
          ctaLabel="Présenter mon besoin CRM"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="comparer-devis">
          8. La grille pour comparer deux propositions CRM
        </h2>

        <p>
          Copiez les lignes suivantes dans votre tableur. Créez une colonne par
          fournisseur et trois colonnes temporelles : mois 1 à 12, mois 13 à 24,
          puis mois 25 à 36. Une cellule vide signifie « non chiffré », jamais
          zéro. Ajoutez enfin une colonne « preuve » qui pointe vers le devis,
          le catalogue ou la clause contractuelle.
        </p>

        <GuideTable
          headers={[
            "Ligne à normaliser",
            "Offre A",
            "Offre B",
            "Preuve attendue",
          ]}
          rows={[
            [
              "Utilisateurs par période",
              "___ / ___ / ___",
              "___ / ___ / ___",
              "Plan d’effectif commun",
            ],
            [
              "Édition et licence de base",
              "___ €",
              "___ €",
              "Bon de commande daté",
            ],
            [
              "Options, quotas, stockage, crédits",
              "___ €",
              "___ €",
              "Catalogue et limites",
            ],
            [
              "Paramétrage et automatisations",
              "___ €",
              "___ €",
              "Livrables et recette",
            ],
            [
              "Nettoyage et reprise des données",
              "___ €",
              "___ €",
              "Objets, volumes et taux de rejet",
            ],
            [
              "Intégrations",
              "___ €",
              "___ €",
              "Fiches de flux et responsabilités",
            ],
            [
              "Formation et accompagnement",
              "___ €",
              "___ €",
              "Public, durée et supports",
            ],
            ["Temps interne", "___ €", "___ €", "Heures par rôle"],
            [
              "Indexation ou renouvellement",
              "___ €",
              "___ €",
              "Formule et plafond écrits",
            ],
            [
              "Export, chevauchement et sortie",
              "___ €",
              "___ €",
              "Test d’export et clause",
            ],
            ["TCO sur 36 mois", "___ €", "___ €", "Somme contrôlée"],
          ]}
        />

        <p>
          N’attribuez une note fonctionnelle qu’après une démonstration sur vos
          scénarios. Une case cochée dans un catalogue ne dit pas si le rapport
          filtre le bon niveau, si les droits isolent les bonnes équipes ou si
          le connecteur transmet les corrections. Notez chaque scénario « réussi
          », « réussi avec contournement », « non démontré » ou « impossible ».
        </p>

        <h2 id="plan-action">9. Préparer la décision en dix jours ouvrés</h2>

        <p>
          Ce calendrier prépare une décision ; il ne garantit pas une signature
          au dixième jour. Il suppose que vous obteniez à temps les accès
          d’essai, exports, devis et documents contractuels. Si une pièce
          manque, le délai reprend lorsqu’elle est disponible : ne transformez
          pas l’urgence en hypothèse gratuite.
        </p>

        <ol>
          <li>
            <strong>Jours 1 et 2 — choisir le résultat.</strong> Écrivez trois
            objectifs mesurables et cinq scénarios commerciaux indispensables.
          </li>
          <li>
            <strong>Jour 3 — inventorier les données.</strong> Comptez sources,
            objets, volumes, pièces jointes, doublons et durées de conservation.
          </li>
          <li>
            <strong>Jour 4 — décrire les flux.</strong> Pour chaque outil
            connecté, fixez le sens, la fréquence, l’identifiant et la reprise
            sur erreur.
          </li>
          <li>
            <strong>Jour 5 — construire le TCO vide.</strong> Posez toutes les
            lignes de la grille avant de recevoir les offres.
          </li>
          <li>
            <strong>Jours 6 et 7 — exécuter les scénarios.</strong> Faites
            tester les deux options présélectionnées par de futurs utilisateurs.
          </li>
          <li>
            <strong>Jour 8 — tester la sortie.</strong> Exportez contacts,
            sociétés, opportunités, activités, notes et fichiers ; contrôlez les
            relations entre eux.
          </li>
          <li>
            <strong>Jour 9 — lire le contrat.</strong> Réconciliez engagement,
            sièges, indexation, services, réversibilité et suppression.
          </li>
          <li>
            <strong>Jour 10 — décider ou renoncer.</strong> Comparez le TCO et
            les scénarios réussis. Si une donnée critique manque, demandez-la ;
            ne la remplacez pas par zéro.
          </li>
        </ol>

        <InfoBox
          variant="emerald"
          title="La bonne décision peut être de ne rien développer"
        >
          <p className="mb-0">
            Si une offre standard réussit les scénarios, permet un export
            complet et conserve un TCO acceptable, utilisez-la. Si le projet ne
            possède ni propriétaire interne ni temps de nettoyage et de recette,
            reportez-le : changer d’outil sans libérer ces ressources déplace le
            problème au lieu de le résoudre.
          </p>
        </InfoBox>

        <h2 id="sources">Sources primaires consultées</h2>

        <p>
          Tarifs et textes ont été vérifiés le 20 juillet 2026. Les pages
          tarifaires sont volatiles : contrôlez-les de nouveau au moment de
          votre décision et conservez le devis ou le bon de commande qui vous
          engage.
        </p>

        <ul>
          <li>
            <a
              href="https://www.salesforce.com/fr/sales/pricing/"
              target="_blank"
              rel="noreferrer"
            >
              Salesforce France — tarifs Sales
            </a>
          </li>
          <li>
            <a
              href="https://www.hubspot.fr/products/sales"
              target="_blank"
              rel="noreferrer"
            >
              HubSpot France — page produit Sales Hub et tarifs affichés
            </a>
          </li>
          <li>
            <a
              href="https://blog.hubspot.fr/sales/sales-hub-tarif"
              target="_blank"
              rel="noreferrer"
            >
              HubSpot France — guide tarifaire mis à jour le 2 octobre 2025,
              conservé pour documenter la divergence
            </a>
          </li>
          <li>
            <a
              href="https://www.pipedrive.com/fr/pricing?currency=EUR"
              target="_blank"
              rel="noreferrer"
            >
              Pipedrive France — tarifs en euros
            </a>
          </li>
          <li>
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noreferrer"
            >
              Insee — coût horaire du travail selon l’activité, données 2025
            </a>
          </li>
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr"
              target="_blank"
              rel="noreferrer"
            >
              EUR-Lex — règlement (UE) 2023/2854, notamment articles 25, 29 et
              50
            </a>
          </li>
          <li>
            <a
              href="https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — référentiel relatif à la gestion des activités commerciales
            </a>
          </li>
        </ul>

        <p className="text-sm text-zinc-500">
          Ce contenu fournit une méthode de budgétisation générale. Il ne
          remplace ni un devis contractuel, ni l’avis de votre expert-comptable,
          de votre délégué à la protection des données ou de votre conseil
          juridique.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
