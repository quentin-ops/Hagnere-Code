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
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Combien coûte un CRM en 2026 : trois entreprises comparées sur 36 mois",
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
  about: [
    { "@type": "Thing", name: "Logiciel CRM" },
    { "@type": "Thing", name: "Coût total de possession" },
    { "@type": "Thing", name: "Gestion de la relation client" },
  ],
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
      "CRM",
      "Outils internes",
      "Intégrations logicielles",
      "Migration de données",
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
      name: "Combien coûte un CRM ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte un CRM pour une petite entreprise ?",
    answer:
      "Pour cinq utilisateurs et un suivi commercial simple, notre exemple produit un budget de départ de 5 614 € sur 36 mois. Il comprend 2 520 € de licences Pipedrive Lite au prix public observé, huit jours de travail interne et deux jours réservés à un futur export. Les options, l’administration régulière et les taxes éventuelles restent à ajouter. Ce calcul illustre une méthode ; ce n’est ni un devis ni une recommandation d’éditeur.",
  },
  {
    question: "Un CRM gratuit suffit-il pour démarrer ?",
    answer:
      "Oui, si votre équipe est petite, votre suivi commercial simple et l’export des données satisfaisant. Testez d’abord un cycle complet : créer un prospect, programmer une relance, faire avancer l’affaire, produire un rapport puis exporter les informations. Passez à une offre payante lorsque vous avez identifié une limite qui gêne réellement les ventes.",
  },
  {
    question: "Le prix par utilisateur est-il le vrai prix du CRM ?",
    answer:
      "Non. Il faut aussi compter le nettoyage des contacts, le réglage des étapes de vente, la reprise des données, les connexions aux autres logiciels, la formation, le temps des salariés, l’administration, les options et le futur changement d’outil. Le prix par utilisateur n’est qu’une ligne du budget.",
  },
  {
    question: "Que faut-il demander avant de signer un contrat CRM ?",
    answer:
      "Demandez le nombre minimal d’utilisateurs, la durée d’engagement, le prix après la première année, les règles pour ajouter ou retirer un accès, les options nécessaires et les taxes. Demandez aussi ce que vous pourrez exporter, dans quel format, pendant combien de temps et avec quels frais. Les clauses importantes doivent être relues par votre conseil juridique.",
  },
  {
    question: "Quand faut-il envisager un CRM sur mesure ?",
    answer:
      "Envisagez-le seulement si vos règles commerciales, vos droits d’accès ou vos connexions restent mal couverts après de vrais essais des CRM existants, et si ces écarts coûtent assez cher pour justifier un développement. Le nombre d’utilisateurs ne suffit jamais, à lui seul, à prouver que le sur-mesure sera plus rentable.",
  },
  {
    question: "Peut-on récupérer ses données en quittant un CRM en ligne ?",
    answer:
      "On peut généralement exporter une partie des données, mais il faut tester ce qui est réellement récupéré. Vérifiez les contacts, sociétés, affaires, activités, notes, fichiers et liens entre ces éléments. Le Data Act encadre le changement de fournisseur pour les services qui entrent dans son champ, mais il ne supprime pas automatiquement les abonnements ordinaires ou les pénalités de résiliation anticipée.",
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
        heroDescription="Vous comparez plusieurs CRM ? Le prix affiché par utilisateur n’est qu’une partie du budget. Voici trois exemples chiffrés, les dépenses souvent oubliées et une méthode simple pour comparer les solutions sur 36 mois."
        heroAction={{
          href: "#trois-scenarios",
          label: "Voir les exemples de budget",
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
            title: "3 exemples sur 36 mois",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Les coûts souvent oubliés",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Une comparaison prête à remplir",
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
        faqTitle="Prix d’un CRM : les réponses avant de signer"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous voyez peut-être une offre à 14 €, 25 € ou 100 € par utilisateur
          et vous essayez d’en déduire le budget de votre entreprise. Mais un{" "}
          <strong>CRM</strong> — le logiciel qui centralise vos prospects, vos
          clients et le suivi des ventes — coûte aussi le temps nécessaire pour
          nettoyer les contacts, régler les étapes commerciales, reprendre les
          anciens fichiers, connecter la messagerie ou la facturation et former
          l’équipe.{" "}
          <strong>
            Pour choisir, calculez le coût complet sur 36 mois, pas seulement
            l’abonnement.
          </strong>
        </p>

        <InfoBox
          variant="blue"
          title="Trois ordres de grandeur, avec des hypothèses visibles"
        >
          Nos exemples aboutissent à <strong>5 614 €</strong> sur 36 mois pour
          cinq postes et un suivi simple,{" "}
          <strong>56 226 € plus des frais de mise en route à confirmer</strong>{" "}
          pour douze utilisateurs avec automatisations, et{" "}
          <strong>155 923 €</strong> pour vingt utilisateurs dans une
          organisation plus complexe. Ces montants ne sont ni des moyennes, ni
          des devis, ni un classement des éditeurs. Ils montrent comment refaire
          le calcul avec vos propres besoins.
        </InfoBox>

        <p>
          Hagnéré Code conçoit des outils internes sur mesure. Nous avons donc
          un intérêt commercial dans ce sujet. Notre règle reste simple : si un
          CRM standard accomplit correctement le travail, permet de récupérer
          les données et coûte moins cher sur la durée, il doit être choisi
          avant un développement spécifique.
        </p>

        <GuideToc
          items={[
            {
              id: "trois-scenarios",
              label: "Trois exemples de budget sur 36 mois",
            },
            { id: "formule-tco", label: "Calculer le coût complet" },
            {
              id: "tarifs-publics",
              label: "Lire les prix publics des éditeurs",
            },
            { id: "temps-interne", label: "Compter le temps de votre équipe" },
            {
              id: "mise-en-oeuvre",
              label: "Données, connexions et prise en main",
            },
            { id: "contrat-sortie", label: "Contrat et changement d’outil" },
            {
              id: "standard-ou-specifique",
              label: "CRM standard ou outil spécifique ?",
            },
            { id: "comparer-devis", label: "Comparer deux propositions" },
            { id: "plan-action", label: "Préparer la décision" },
            { id: "sources", label: "Sources consultées" },
          ]}
        />

        <h2 id="trois-scenarios">Trois exemples de budget CRM sur 36 mois</h2>

        <p>
          Ces <strong>exemples illustratifs fictifs</strong> utilisent des prix
          publics observés le 20 juillet 2026. Ils supposent des offres et des
          niveaux de service différents : ils ne servent donc pas à dire qu’un
          éditeur est moins cher qu’un autre. Leur seule fonction est de montrer
          comment additionner les licences, le travail de mise en place et le
          futur départ.
        </p>

        <p>
          Le temps interne est provisoirement valorisé avec le{" "}
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            coût horaire de 44,2 € publié par l’Insee
          </a>{" "}
          pour les services marchands en 2025, dans les entreprises d’au moins
          dix salariés. Une journée de sept heures vaut alors 309,40 €.
          Remplacez ce repère par le coût réel de votre équipe dès que vous le
          connaissez.
        </p>

        <GuideTable
          headers={["Situation fictive", "Calcul inclus", "Budget sur 36 mois"]}
          rows={[
            [
              "5 postes, suivi commercial simple",
              "Pipedrive Lite : 2 520 € HT de licences + 8 jours internes + 2 jours internes pour exporter et contrôler les données.",
              "5 614 €",
            ],
            [
              "12 utilisateurs, automatisations et rapports",
              "HubSpot Pro : 43 200 € de licences + 20 jours internes + 8 jours d’aide externe à 700 € HT + 4 jours pour la sortie.",
              "56 226 € + mise en route à confirmer",
            ],
            [
              "20 utilisateurs, droits et organisation plus complexes",
              "Salesforce Enterprise : 126 000 € de licences + 35 jours internes + 20 jours externes à 800 € HT + 10 jours pour la sortie.",
              "155 923 €",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Ce qui n’est pas encore dans ces montants"
        >
          L’administration régulière, les options, le stockage, les crédits
          consommés, les taxes applicables, les remises, les hausses de prix et
          les frais de mise en route HubSpot restent à ajouter lorsqu’ils
          existent. Les valeurs de 700 € et 800 € par jour sont de simples
          hypothèses de calcul : ce ne sont ni nos tarifs, ni des moyennes de
          marché. Une dépense inconnue doit rester « à confirmer », jamais zéro.
        </InfoBox>

        <h3>Le premier exemple, sans raccourci</h3>

        <FormulaBox>
          {
            "Licences : 5 × 14 € HT × 36 mois = 2 520 € HT\nTemps de mise en place : 8 jours × 7 h × 44,2 € = 2 475,20 €\nTemps réservé au départ : 2 jours × 7 h × 44,2 € = 618,80 €\n\nBudget connu sur 36 mois = 5 614 €"
          }
        </FormulaBox>

        <p>
          Les deux jours réservés au départ servent à anticiper un export et à
          vérifier que les données sont lisibles dans un autre outil. Si le CRM
          contient des champs personnalisés, des fichiers ou un long historique
          d’emails, le travail sera peut-être plus important. Un export d’essai
          permet de le savoir avant la signature.
        </p>

        <h2 id="formule-tco">
          Calculez le coût complet, pas seulement les licences
        </h2>

        <p>
          Le terme anglais <strong>TCO</strong> signifie simplement « coût total
          de possession ». Il additionne toutes les dépenses nécessaires pour
          choisir, mettre en place, utiliser puis quitter le CRM pendant la même
          période.
        </p>

        <FormulaBox>
          {
            "Coût complet sur 36 mois =\nlicences et options\n+ sélection et réglages\n+ nettoyage et reprise des données\n+ connexions aux autres logiciels\n+ formation et temps de l’équipe\n+ administration, assistance et corrections\n+ hausses prévues au contrat\n+ export et changement d’outil"
          }
        </FormulaBox>

        <GuideTable
          headers={["Dépense", "Question à poser", "Document utile"]}
          rows={[
            [
              "Licences et options",
              "Combien d’utilisateurs, de mois, de stockage et de crédits ?",
              "Devis ou bon de commande daté.",
            ],
            [
              "Mise en place",
              "Qui règle les étapes, automatismes et droits, et combien de jours ?",
              "Liste des travaux et résultat attendu.",
            ],
            [
              "Données",
              "Que faut-il nettoyer, reprendre, rapprocher ou archiver ?",
              "Inventaire avec volumes et responsabilités.",
            ],
            [
              "Connexions",
              "Quelles informations circulent, dans quel sens et que se passe-t-il en cas d’erreur ?",
              "Essai et description de l’échange.",
            ],
            [
              "Temps interne",
              "Combien d’heures pour décider, tester, former et administrer ?",
              "Calendrier par rôle et coût chargé.",
            ],
            [
              "Départ",
              "Que récupère-t-on, sous quel format, dans quel délai et à quel prix ?",
              "Export d’essai et clause du contrat.",
            ],
          ]}
        />

        <p>
          Deux offres ne sont comparables que si elles couvrent les mêmes
          utilisateurs, les mêmes tâches, les mêmes données et la même durée.
          Une licence à 25 € sans reprise des contacts n’est pas moins chère
          qu’une licence à 50 € qui inclut cette opération : les prestations
          sont différentes.
        </p>

        <h2 id="tarifs-publics">
          Ce que les prix publics permettent — et ne permettent pas — de
          calculer
        </h2>

        <p>
          Les pages françaises des éditeurs ont été contrôlées le 20 juillet
          2026. Elles donnent un point de départ, mais votre contrat peut
          ajouter un engagement annuel, un minimum d’utilisateurs, des services,
          des taxes ou une offre temporaire. Conservez le devis daté qui vous
          engage.
        </p>

        <GuideTable
          headers={[
            "Éditeur",
            "Prix publics observés",
            "À confirmer avant de calculer",
          ]}
          rows={[
            [
              "Salesforce Sales",
              "0 €, puis 25 €, 100 €, 175 €, 350 € et 550 € par utilisateur et par mois selon l’édition.",
              "Facturation mensuelle ou annuelle, options, services et prix négocié.",
            ],
            [
              "HubSpot Sales Hub",
              "0 €, puis à partir de 10 €, 100 € et 150 € par utilisateur et par mois.",
              "Promotion Starter, nombre d’utilisateurs, mise en route et divergence avec un ancien article officiel.",
            ],
            [
              "Pipedrive, paiement annuel",
              "14 €, 39 €, 59 € ou 79 € HT par poste et par mois.",
              "Facturation sélectionnée, TVA, options et conditions de renouvellement.",
            ],
          ]}
        />

        <p>
          Sources directes :{" "}
          <a
            href="https://www.salesforce.com/fr/sales/pricing/"
            target="_blank"
            rel="noreferrer"
          >
            tarifs Salesforce Sales
          </a>
          ,{" "}
          <a
            href="https://www.hubspot.fr/products/sales"
            target="_blank"
            rel="noreferrer"
          >
            page HubSpot Sales Hub
          </a>{" "}
          et{" "}
          <a
            href="https://www.pipedrive.com/fr/pricing?currency=EUR"
            target="_blank"
            rel="noreferrer"
          >
            tarifs Pipedrive en euros
          </a>
          .
        </p>

        <p>
          Pour HubSpot, un{" "}
          <a
            href="https://blog.hubspot.fr/sales/sales-hub-tarif"
            target="_blank"
            rel="noreferrer"
          >
            article officiel plus ancien
          </a>{" "}
          mentionne encore d’autres montants et des frais de mise en route. La
          page produit actuelle ne permet pas de conclure que ces frais sont
          nuls. C’est pourquoi notre exemple les laisse « à confirmer ».
        </p>

        <h2 id="temps-interne">
          Comptez le temps de votre équipe comme une vraie dépense
        </h2>

        <p>
          Une mise en place mobilise souvent le dirigeant, le responsable
          commercial, une personne administrative et plusieurs utilisateurs.
          Même si aucun prestataire ne facture ces heures, elles ont un coût et
          peuvent retarder d’autres travaux.
        </p>

        <GuideTable
          headers={[
            "Travail interne",
            "Qui peut être concerné",
            "Comment l’estimer",
          ]}
          rows={[
            [
              "Décider des étapes commerciales",
              "Direction et équipe de vente.",
              "Ateliers, corrections et validation finale.",
            ],
            [
              "Nettoyer les contacts",
              "Commerce, administration ou marketing.",
              "Volume × temps moyen, avec un échantillon réel.",
            ],
            [
              "Tester les automatismes et les droits",
              "Utilisateurs et responsable du projet.",
              "Nombre de scénarios × temps de préparation et d’essai.",
            ],
            [
              "Former puis aider au démarrage",
              "Toute l’équipe concernée.",
              "Heures de formation + assistance des premières semaines.",
            ],
            [
              "Administrer le CRM",
              "Référent interne.",
              "Heures mensuelles × 36 mois.",
            ],
          ]}
        />

        <p>
          Le repère Insee de 44,2 € par heure ne représente pas toutes les
          entreprises ni le coût d’un dirigeant. Utilisez-le uniquement si vous
          n’avez rien de mieux, puis remplacez-le par votre coût chargé réel.
        </p>

        <h2 id="mise-en-oeuvre">
          Le budget dépend surtout des données, des connexions et de la prise en
          main
        </h2>

        <h3>Reprendre les données ne consiste pas à importer un fichier CSV</h3>

        <p>
          Vos contacts peuvent se trouver dans Excel, les téléphones, la
          messagerie, l’outil de facturation et un ancien CRM. Avant de les
          importer, il faut décider quels doublons fusionner, quelles
          informations garder et qui tranche en cas de contradiction.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf"
            target="_blank"
            rel="noreferrer"
          >
            référentiel de la CNIL sur les activités commerciales
          </a>{" "}
          retient, pour certaines données de prospects, trois ans à compter de
          la collecte ou du dernier contact venant du prospect. Une simple
          ouverture d’email n’y vaut pas contact. Ce repère ne s’applique pas
          automatiquement à toutes vos données : votre situation et vos
          obligations doivent être documentées.
        </p>

        <h3>
          Un connecteur au catalogue ne garantit pas que l’échange convient
        </h3>

        <GuideTable
          headers={[
            "Question concrète",
            "Pourquoi elle change le budget",
            "Test à demander",
          ]}
          rows={[
            [
              "Les modifications vont-elles dans un sens ou dans les deux ?",
              "Un aller-retour demande des règles en cas de conflit.",
              "Modifier la même fiche dans les deux outils.",
            ],
            [
              "Que se passe-t-il si un logiciel est indisponible ?",
              "Il faut stocker l’action, alerter et reprendre sans doublon.",
              "Simuler une erreur puis relancer l’échange.",
            ],
            [
              "Comment les doublons sont-ils reconnus ?",
              "Une mauvaise règle peut fusionner deux clients différents.",
              "Tester des noms, emails et sociétés proches.",
            ],
            [
              "Quel identifiant relie prospect, devis et facture ?",
              "Sans référence stable, les rapports deviennent manuels.",
              "Suivre une vente de bout en bout.",
            ],
          ]}
        />

        <h3>
          Mesurez la prise en main au lieu de croire un taux d’échec général
        </h3>

        <p>
          Faites essayer l’édition envisagée par deux ou trois personnes sur un
          cycle complet, puis exportez ce qu’elles ont créé. À 30, 60 et 90
          jours, regardez les utilisateurs actifs, les affaires avec une
          prochaine action, les doublons, les erreurs de synchronisation et les
          rapports réellement consultés. Ces faits valent mieux qu’un
          pourcentage spectaculaire repris sans contexte.
        </p>

        <h2 id="contrat-sortie">
          Le contrat peut coûter cher sans ajouter une seule fonction
        </h2>

        <GuideTable
          headers={[
            "Point du contrat",
            "Question exacte",
            "Effet sur votre budget",
          ]}
          rows={[
            [
              "Engagement",
              "À quelle date peut-on vraiment partir sans pénalité ?",
              "Mois à payer même si l’usage s’arrête.",
            ],
            [
              "Nombre d’accès",
              "Peut-on retirer un utilisateur en cours d’année ?",
              "Licences inutilisées après un départ.",
            ],
            [
              "Hausse de prix",
              "Quelle formule, quelle date et quel plafond ?",
              "Coût des années 2 et 3.",
            ],
            [
              "Options",
              "Quelles fonctions sont nécessaires pour réussir nos essais ?",
              "Modules ou crédits obligatoires.",
            ],
            [
              "Export",
              "Quelles données, notes et pièces jointes sont récupérables ?",
              "Temps d’extraction, de contrôle et de réimport.",
            ],
            [
              "Fin du service",
              "Combien de jours reste-t-il pour récupérer les données ?",
              "Chevauchement entre deux outils et risque de perte.",
            ],
          ]}
        />

        <h3>Ce que le Data Act change</h3>

        <p>
          Le{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr"
            target="_blank"
            rel="noreferrer"
          >
            règlement européen 2023/2854, appelé Data Act
          </a>
          , est applicable depuis le 12 septembre 2025. Pour les services qui
          entrent dans son champ, le contrat doit notamment décrire le
          changement de fournisseur et les catégories de données qui peuvent
          être transférées. Le préavis pour lancer le changement ne doit pas
          dépasser deux mois, et le texte prévoit au moins 30 jours pour
          récupérer les données après la transition.
        </p>

        <p>
          Jusqu’au 12 janvier 2027, certains frais de changement réduits peuvent
          encore être demandés dans la limite des coûts directement liés. Après
          cette date, le règlement prévoit leur suppression. Cela ne rend pas
          automatiquement gratuits les services supplémentaires, les abonnements
          ordinaires ou une résiliation anticipée. Faites relire un contrat
          important par un professionnel du droit.
        </p>

        <h2 id="standard-ou-specifique">
          CRM standard ou outil spécifique : comment trancher ?
        </h2>

        <p>
          Commencez toujours par essayer les CRM existants. Ils ont déjà résolu
          le suivi des prospects, les relances et les rapports pour de
          nombreuses entreprises. Le sur-mesure devient défendable lorsque vos
          écarts sont importants, récurrents et mesurés — pas simplement parce
          que l’interface standard vous plaît moins.
        </p>

        <GuideTable
          headers={[
            "Votre situation",
            "Choix à tester d’abord",
            "Quand élargir la réflexion",
          ]}
          rows={[
            [
              "1 à 5 utilisateurs, suivi simple",
              "Offre gratuite ou d’entrée de gamme avec export testé.",
              "Une limite précise empêche un cycle de vente complet.",
            ],
            [
              "6 à 20 utilisateurs, méthode commerciale courante",
              "Deux CRM standards testés sur 36 mois.",
              "Les automatismes, droits ou connexions créent encore un travail manuel important.",
            ],
            [
              "Plusieurs équipes ou droits complexes",
              "CRM standard avec configuration et accompagnement.",
              "Les règles importantes restent impossibles à appliquer proprement.",
            ],
            [
              "Processus commercial réellement différent",
              "Comparer un CRM adapté et un outil spécifique sur les mêmes tâches.",
              "Le coût des contournements dépasse le coût complet du développement.",
            ],
          ]}
        />

        <FormulaBox>
          {
            "CRM en abonnement =\nlicences sur 36 mois + options + mise en place + temps interne + administration + départ\n\nOutil spécifique =\npréparation + développement + reprise + hébergement + maintenance + temps interne + départ"
          }
        </FormulaBox>

        <p>
          Si vous quittez un fichier devenu fragile, commencez par notre guide{" "}
          <Link href="/guides/transformer-excel-en-application">
            transformer Excel en application
          </Link>
          . Si un besoin spécifique est déjà démontré, le guide du{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            prix d’un logiciel sur mesure
          </Link>{" "}
          détaille le second calcul.
        </p>

        <GuideInlineCTA
          title="Vous voulez vérifier le budget avant de signer ?"
          description="Envoyez-nous le nombre d’utilisateurs, les tâches importantes et les propositions reçues. Nous vous aiderons à repérer les dépenses oubliées et à distinguer ce qu’un CRM standard couvre déjà de ce qui pourrait justifier un outil spécifique."
          tags={[
            "Coût sur 36 mois",
            "Dépenses inconnues visibles",
            "CRM standard toujours possible",
          ]}
          ctaLabel="Présenter mon projet CRM"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="comparer-devis">
          Une grille simple pour comparer deux propositions
        </h2>

        <p>
          Copiez ces lignes dans votre tableur. Une cellule vide signifie « non
          chiffré », jamais zéro. À côté de chaque montant, notez la page du
          devis ou la clause qui le justifie.
        </p>

        <GuideTable
          headers={["À comparer sur 36 mois", "Offre A", "Offre B"]}
          rows={[
            ["Utilisateurs et mois facturés", "___", "___"],
            ["Licences, options, stockage et crédits", "___ €", "___ €"],
            ["Réglages et automatismes", "___ €", "___ €"],
            ["Nettoyage et reprise des données", "___ €", "___ €"],
            ["Connexions aux autres outils", "___ €", "___ €"],
            ["Formation et aide au démarrage", "___ €", "___ €"],
            ["Temps de vos salariés", "___ €", "___ €"],
            ["Administration et assistance", "___ €", "___ €"],
            ["Hausses prévues au contrat", "___ €", "___ €"],
            ["Export et changement d’outil", "___ €", "___ €"],
            ["Coût total", "___ €", "___ €"],
          ]}
        />

        <p>
          Ajoutez ensuite les résultats de vos essais : réussi, réussi avec une
          manipulation acceptable, non démontré ou impossible. Le total le plus
          bas ne gagne que si les tâches importantes sont réellement couvertes.
        </p>

        <h2 id="plan-action">Préparez la décision sans précipiter l’achat</h2>

        <ol>
          <li>
            Écrivez trois résultats commerciaux attendus et cinq tâches
            indispensables.
          </li>
          <li>
            Comptez les utilisateurs actuels et leur évolution probable sur
            trois ans.
          </li>
          <li>
            Inventoriez les contacts, entreprises, affaires, notes et fichiers à
            reprendre.
          </li>
          <li>
            Listez les logiciels à connecter et ce que chacun doit envoyer.
          </li>
          <li>Faites essayer deux options par les futurs utilisateurs.</li>
          <li>Exportez les données créées pendant l’essai.</li>
          <li>Remplissez le coût complet et lisez les clauses d’engagement.</li>
          <li>
            Choisissez, demandez une information manquante ou reportez si
            personne ne peut porter le projet.
          </li>
        </ol>

        <InfoBox
          variant="emerald"
          title="Ne rien développer peut être la meilleure conclusion"
        >
          Si une offre standard réalise les tâches, permet un export correct et
          reste supportable sur 36 mois, utilisez-la. Si personne n’a le temps
          de nettoyer les données, de tester et d’aider l’équipe, reportez le
          changement : un nouveau logiciel déplacerait le problème au lieu de le
          résoudre.
        </InfoBox>

        <h2 id="sources">Sources consultées</h2>

        <p>
          Les tarifs ont été vérifiés le 20 juillet 2026 et peuvent changer. Les
          textes juridiques sont présentés de façon générale ; ce guide ne
          remplace ni un devis contractuel, ni l’avis d’un expert-comptable,
          d’un délégué à la protection des données ou d’un juriste.
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
              HubSpot France — Sales Hub
            </a>
          </li>
          <li>
            <a
              href="https://blog.hubspot.fr/sales/sales-hub-tarif"
              target="_blank"
              rel="noreferrer"
            >
              HubSpot France — ancien guide tarifaire conservé pour expliquer la
              divergence
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
              Insee — coût horaire du travail, données 2025
            </a>
          </li>
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr"
              target="_blank"
              rel="noreferrer"
            >
              EUR-Lex — règlement européen 2023/2854
            </a>
          </li>
          <li>
            <a
              href="https://www.cnil.fr/sites/cnil/files/atoms/files/referentiel_traitements-donnees-caractere-personnel_gestion-activites-commerciales.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — référentiel sur la gestion des activités commerciales
            </a>
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
