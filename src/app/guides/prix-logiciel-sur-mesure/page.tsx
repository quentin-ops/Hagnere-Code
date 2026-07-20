import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("prix-logiciel-sur-mesure");

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
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
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
      "Logiciels métier sur mesure",
      "Next.js",
      "React",
      "Automatisation d'entreprise",
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
      name: "Prix d'un logiciel sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le prix d'un logiciel sur mesure ?",
    answer:
      "Quatre grilles commerciales françaises relevées le 20 juillet 2026 publient 5 000 à 40 000 € pour leurs catégories simples et 15 000 à 120 000 € pour leurs catégories intermédiaires ou métier. Leurs catégories complexes commencent, selon la définition retenue, entre 30 000 et 150 000 €, et montent jusqu'à 400 000 € ou plus. Ce ne sont ni un échantillon statistique ni des budgets clients vérifiés. Pour construire un premier scénario comparable, le guide retient 5 000–15 000 €, 15 000–60 000 € et 60 000–250 000 €, à remplacer par des devis au même périmètre.",
  },
  {
    question: "Combien coûte le développement d'un logiciel de gestion ?",
    answer:
      "Dans les hypothèses de planification de ce guide, un suivi de stock ou de commandes simple se situe entre 8 000 et 30 000 €, une gestion plus complète entre 20 000 et 60 000 €, et un ERP simplifié entre 50 000 et 120 000 €. Ce ne sont pas des moyennes de marché : faites chiffrer les rôles, les règles métier, les données et chaque connexion à l'existant en jours par profil.",
  },
  {
    question: "Comment est calculé le prix d'un logiciel ?",
    answer:
      "Divisez chaque poste par le nombre de jours annoncé pour obtenir son taux journalier implicite, puis comparez ce taux et la charge avec les profils réellement mobilisés. L’exemple de ce guide utilise 650 € HT par jour comme hypothèse pédagogique, ni comme moyenne nationale ni comme tarif universel. À ce taux, un « logiciel complet à 3 000 € » représente moins de cinq jours : demandez alors quels cadrage, tests, données, sécurité et transfert sont réellement inclus.",
  },
  {
    question: "Logiciel sur mesure ou SaaS : comment choisir ?",
    answer:
      "Il n’existe pas de seuil universel d’utilisateurs ou d’années. On s’abonne généralement pour un besoin standard bien couvert ; on chiffre le sur-mesure lorsqu’une règle métier différenciante ou un contournement coûteux le justifie. Comparez les deux options sur la même durée, les mêmes fonctions, le temps interne, la maintenance et la sortie. Pour un CRM, notre guide dédié fournit une grille sur 36 mois à compléter avec vos devis.",
  },
  {
    question: "Combien coûte la maintenance d'un logiciel sur mesure ?",
    answer:
      "Comme hypothèse de planification, ce guide retient 10 à 25 % du coût initial par an pour correctifs, sécurité et évolutions. Ce n'est pas une règle statistique : le montant dépend du niveau de service, des dépendances et du rythme d'évolution. Pour un outil à 30 000 €, la simulation donne 3 000 à 7 500 €/an, auxquels s'ajoute un hébergement chiffré selon l'usage. Exigez les prestations, délais d'intervention et exclusions plutôt qu'un simple pourcentage.",
  },
  {
    question: "Peut-on créer un logiciel de gestion avec Excel ou Access ?",
    answer:
      "Oui — c'est même souvent la bonne première étape. Mais connaissez les limites : les travaux académiques reliés dans les sources concluent que les erreurs de tableur sont courantes, difficiles à détecter et non triviales, sans permettre d'appliquer un pourcentage universel à votre fichier. Les signaux qu'il est temps de changer : le fichier ne marche que pour son auteur, les versions se contredisent, les macros cassent et la ressaisie consomme des heures chaque semaine.",
  },
  {
    question:
      "Combien coûte le remplacement d'un vieux logiciel (Access, VB6, WinDev) ?",
    answer:
      "Trois niveaux d'intervention : une reprise-stabilisation, une modernisation progressive module par module, ou une refonte avec reprise des données. Les durées et budgets de ce guide sont des ordres de grandeur à cadrer. Une bascule générale concentre données, formation et continuité métier le même jour ; une migration progressive réduit souvent cette concentration de risques, sans être obligatoire dans tous les contextes.",
  },
  {
    question:
      "Combien de temps faut-il pour développer un logiciel sur mesure ?",
    answer:
      "Avec une équipe expérimentée : 3 à 8 semaines pour un outil interne simple, 2 à 6 mois pour un logiciel métier complet, 6 mois et plus pour une plateforme. Le vrai facteur de délai n'est pas le code : c'est la disponibilité de vos équipes pour montrer leurs processus réels, tester les versions intermédiaires et trancher les décisions. Des décisions rapides et un interlocuteur disponible réduisent les temps d'attente, sans permettre de promettre un délai universel.",
  },
  {
    question: "L'IA permet-elle de créer un logiciel moins cher ?",
    answer:
      "Oui pour certaines tâches de code standard, pas automatiquement pour un projet complet — et méfiez-vous des promesses de division par dix. Les essais reliés dans les sources de ce guide mesurent aussi bien une accélération sur une tâche cadrée qu'un ralentissement sur du code complexe. Ce que l'IA ne réduit pas automatiquement : comprendre votre métier, concevoir les bons écrans, connecter vos outils et fiabiliser. Chez Hagnéré Code, elle reste un outil de production avec revue humaine ; nous ne présentons pas ce gain interne comme la preuve causale d'une remise commerciale systématique.",
  },
  {
    question:
      "À qui appartient le code d'un logiciel développé par un prestataire ?",
    answer:
      "Pour un logiciel commandé à un prestataire externe, payer les factures ne transfère pas automatiquement tous les droits. En droit français, il faut identifier les auteurs, l'éventuel employeur titulaire et les licences tierces. Le contrat organise ensuite une cession ou une licence adaptée à l'usage attendu ; l'article L.131-3 encadre notamment la cession. Faites inventorier cette chaîne de droits et valider la clause juridiquement avant de signer.",
  },
  {
    question:
      "Quel est le retour sur investissement d'un logiciel sur mesure ?",
    answer:
      "Commencez par valoriser seulement les heures réellement réaffectées ou les coûts évités, puis appliquez la formule : (bénéfices cumulés attribuables − coût total) / coût total × 100. Exemple illustratif : 5 heures réellement réaffectées par semaine pour 3 salariés, sur 47 semaines à 44,70 €/h, représentent environ 31 500 € de capacité annuelle. Ce coût horaire 2025 publié par l’Insee couvre les entreprises marchandes d’au moins 10 salariés : remplacez-le par votre coût réel. Le délai de retour et les bénéfices non monétaires se présentent séparément.",
  },
  {
    question:
      "Combien coûte une connexion entre deux logiciels (intégration) ?",
    answer:
      "Faites chiffrer séparément l'authentification, les données à lire et écrire, les règles d'erreur, les tests et la supervision. Une grille commerciale citée dans ce guide estime 2 à 15 jours par intégration ; avec l'hypothèse pédagogique de 650 € HT par jour, cela représente 1 300 à 9 750 € avant abonnement, aléa et maintenance. Remplacez cette simulation par la documentation de l'API et le taux du devis : le nom « paiement », « CRM » ou « ERP » ne suffit pas à fixer un prix.",
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
          { label: "Prix d'un logiciel sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="La grille 2026 par type d'outil et la méthode jours × taux journalier pour vérifier un devis. Distinguez le TCO illustratif sur 3 ans du comparatif de scénarios sur 5 ans, puis calculez correctement le retour sur investissement. Un exemple de devis et la propriété du code sont expliqués ligne à ligne."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Outil simple : 5 000 – 15 000 €",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Logiciel métier : 15 000 – 60 000 €",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "ROI : gains comparés au coût total",
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
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Combien coûte un SaaS ?",
          },
          {
            href: "/guides/combien-coute-un-crm",
            label: "Combien coûte réellement un CRM ?",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "ERP ou logiciel sur mesure",
          },
          {
            href: "/ressources/kit-cahier-des-charges-application-metier",
            label: "Kit de cahier des charges métier",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes sur mesure",
          },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Prix d'un logiciel sur mesure : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Pour le même besoin, une agence vous répond 5 000 € et une autre 150
          000 €. L&apos;écart peut être justifié par le périmètre — ou masquer
          des postes absents. Ce guide donne{" "}
          <strong>
            les fourchettes indicatives 2026, la méthode pour vérifier un devis
            en une multiplication, et le calcul qui compte vraiment : ce que
            l&apos;absence d&apos;outil vous coûte déjà
          </strong>
          .
        </p>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. La réponse rapide : les fourchettes 2026",
            },
            {
              id: "de-quoi-parle-t-on",
              label: "2. Sur mesure, SaaS, no-code, Excel : de quoi parle-t-on",
            },
            {
              id: "cout-actuel",
              label: "3. Ce que l'absence d'outil vous coûte déjà",
            },
            {
              id: "prix-par-type",
              label: "4. Les prix 2026 par type de logiciel",
            },
            {
              id: "ecart-devis",
              label: "5. Pourquoi les devis vont de 5 000 à 150 000 €",
            },
            {
              id: "methode-tjm",
              label: "6. La méthode jours × TJM pour vérifier un devis",
            },
            {
              id: "devis",
              label: "7. Un exemple de devis, décortiqué ligne à ligne",
            },
            {
              id: "tco",
              label:
                "8. Le vrai coût sur 3 ans (maintenance, hébergement, coûts cachés)",
            },
            {
              id: "match",
              label: "9. Sur mesure, SaaS ou Excel : le match chiffré",
            },
            {
              id: "ia",
              label: "10. Ce que l'IA change vraiment aux prix (2026)",
            },
            {
              id: "legacy",
              label: "11. Remplacer un vieux logiciel (Access, Excel, WinDev…)",
            },
            {
              id: "juridique",
              label: "12. Propriété du code et reprise",
            },
            {
              id: "methode",
              label: "13. Méthode : payer le juste prix en 5 étapes",
            },
            {
              id: "sources",
              label: "Sources, périmètres et limites",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les fourchettes 2026</h2>
        <p>
          À titre de scénarios de planification, notre relevé daté de quatre
          grilles commerciales françaises situe en 2026 un logiciel sur mesure à{" "}
          <strong>5 000 à 15 000 € pour un outil interne simple</strong> (un
          processus digitalisé, quelques écrans),{" "}
          <strong>15 000 à 60 000 € pour un logiciel métier complet</strong>{" "}
          (rôles, planning, connexions à vos outils), et{" "}
          <strong>60 000 à 250 000 € pour une plateforme</strong> (ERP sur
          mesure, portail multi-services). Les quatre sources commerciales sont
          nommées en fin de guide ; elles ne forment ni échantillon statistique
          ni médiane de budgets signés. S&apos;y ajoutent, dans nos simulations,
          une hypothèse de maintenance de 10 à 25 % du coût initial par an et un
          hébergement de 40 à 100 €/mois, à remplacer par les contrats réels. La{" "}
          <Link href="/tarifs">page Tarifs Hagnéré Code</Link> affiche
          séparément les offres publiques à jour ; seul un devis nominatif
          engage les parties.
        </p>
        <GuideTable
          headers={[
            "Type de logiciel",
            "Budget 2026",
            "Délai typique",
            "Exemples",
          ]}
          rows={[
            [
              "Outil interne simple",
              "5 000 – 15 000 €",
              "3 – 8 semaines",
              "Suivi de commandes, registre, formulaires métier",
            ],
            [
              "Logiciel métier complet",
              "15 000 – 60 000 €",
              "2 – 6 mois",
              "Gestion clients + devis + planning + facturation",
            ],
            [
              "Portail client / extranet",
              "18 000 – 70 000 €",
              "2 – 4 mois",
              "Espace où vos clients suivent leurs dossiers",
            ],
            [
              "Plateforme / ERP sur mesure",
              "60 000 – 250 000 €",
              "6 – 18 mois",
              "Tous les processus de l'entreprise reliés",
            ],
            [
              "Automatisation entre outils existants",
              "500 – 5 000 € par flux",
              "1 – 4 semaines",
              "Devis signé → facture créée → client prévenu",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Les 10 mots de ce guide, traduits en français courant"
        >
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              <strong>Logiciel sur mesure</strong> : un programme construit pour
              vos processus à vous ; le contrat décide des droits qui vous sont
              cédés.
            </li>
            <li>
              <strong>SaaS</strong> : un logiciel loué par abonnement, souvent
              facturé par utilisateur.
            </li>
            <li>
              <strong>No-code</strong> : des outils pour assembler une
              application sans programmer ; son fonctionnement reste dépendant
              de la plateforme.
            </li>
            <li>
              <strong>TJM</strong> : le taux journalier d&apos;un développeur —
              le prix facturé pour une journée de travail.
            </li>
            <li>
              <strong>Intégration</strong> : la connexion entre deux logiciels
              pour qu&apos;ils échangent leurs données sans ressaisie.
            </li>
            <li>
              <strong>API</strong> : la « prise » standardisée sur laquelle se
              branche une intégration.
            </li>
            <li>
              <strong>MVP</strong> : une première version volontairement réduite
              à l&apos;essentiel, pour démarrer vite.
            </li>
            <li>
              <strong>Maintenance</strong>, éventuellement confiée à un tiers
              sous contrat de tierce maintenance applicative (TMA) :
              l&apos;entretien du logiciel après sa mise en service —
              correctifs, sécurité, petites évolutions.
            </li>
            <li>
              <strong>Reprise de données</strong> : le transfert de vos données
              actuelles (Excel, ancien logiciel) vers le nouveau.
            </li>
            <li>
              <strong>
                Cession de droits sur les développements spécifiques
              </strong>{" "}
              : la clause écrite qui organise les droits transmis ; les briques
              tierces gardent leurs licences (section 12).
            </li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">
          2. Sur mesure, SaaS, no-code, Excel : de quoi parle-t-on
        </h2>
        <p>
          Ces quatre options déplacent le coût, la capacité d&apos;adaptation et
          la dépendance. Aucun modèle ne donne automatiquement la maîtrise du
          logiciel ou des données : vérifiez le contrat, les formats
          d&apos;export, les droits et les composants tiers.
        </p>
        <GuideTable
          headers={[
            "Option",
            "Coût dominant",
            "Adaptation",
            "Dépendance et sortie",
          ]}
          rows={[
            [
              "Excel ou tableur",
              "Temps interne, contrôle, erreurs et continuité",
              "Très souple pour l’auteur, plus fragile à plusieurs",
              "Documenter règles, macros, historique et formats de reprise",
            ],
            [
              "SaaS",
              "Abonnement, déploiement, options, administration et sortie",
              "Configuration et extensions variables selon l’offre",
              "Contrat, éditeur, API et export complet à tester",
            ],
            [
              "No-code",
              "Licences de plateforme, assemblage et maintenance",
              "Rapide sur les cas couverts, limites propres à la plateforme",
              "Portabilité de l’application, des données et des composants à vérifier",
            ],
            [
              "Sur-mesure",
              "Conception initiale, exploitation, maintenance et évolution",
              "Périmètre conçu pour les règles retenues, sans flexibilité illimitée",
              "Code, infrastructure, équipe et licences tierces ; sortie à contractualiser",
            ],
          ]}
        />
        <p>
          Prenons un cas illustratif que nous suivrons tout au long du guide :{" "}
          <strong>
            les Transports Bréban, entreprise fictive de 14 salariés en Savoie
          </strong>
          . Ce personnage pédagogique ne décrit pas un client identifiable. Leur
          planning de tournées vit dans un classeur Excel que seule
          l&apos;assistante de direction sait manipuler, les bons de livraison
          se ressaisissent dans la facturation, et deux versions du fichier
          circulent en permanence. Aucun logiciel de transport du marché ne
          colle à leur activité mixte (messagerie + bennes). C&apos;est le cas
          d&apos;école du sur-mesure — et nous allons le chiffrer de bout en
          bout.
        </p>

        <h2 id="cout-actuel">
          3. Ce que l&apos;absence d&apos;outil vous coûte déjà
        </h2>
        <p>
          Avant de demander « combien coûte un logiciel ? », posez la question
          inverse : <strong>combien coûte le fait de ne pas en avoir ?</strong>{" "}
          Deux études souvent citées éclairent des populations différentes. En
          2012, le{" "}
          <a
            href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy"
            target="_blank"
            rel="noopener noreferrer"
          >
            McKinsey Global Institute
          </a>
          estimait que les « interaction workers », des profils qualifiés qui
          collaborent beaucoup, consacraient près de 20 % de leur semaine à
          rechercher de l&apos;information interne ou des collègues. Une enquête
          éditeur publiée par{" "}
          <a
            href="https://www.smartsheet.com/content-center/product-news/automation/workers-waste-quarter-work-week-manual-repetitive-tasks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Smartsheet
          </a>
          rapportait que plus de 40 % des salariés interrogés déclaraient
          consacrer au moins un quart de leur semaine à des tâches manuelles
          répétitives. Ni l&apos;une ni l&apos;autre ne mesure votre PME :
          chronométrez votre processus avant de valoriser un gain. Enfin, la
          synthèse académique de{" "}
          <a
            href="https://arxiv.org/abs/0802.3457"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ray Panko (Université d&apos;Hawaï)
          </a>{" "}
          conclut, après quinze ans d’études, que les erreurs de tableur sont
          courantes et non triviales. Cette synthèse ne transforme pas ce
          constat en probabilité universelle pour votre propre fichier.
        </p>
        <p>
          Traduisons d&apos;abord les heures en capacité économique, puis
          distinguons ce montant du retour sur investissement :
        </p>
        <FormulaBox>
          <strong>
            Gains annuels attribuables = heures réellement réaffectées ou
            évitées par semaine × 47 semaines × coût horaire chargé
          </strong>
          <br />
          Repère public 2025 : 44,70 € par heure dans l&apos;ensemble marchand,
          pour les entreprises d&apos;au moins 10 salariés (
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noopener noreferrer"
          >
            Insee, publié le 2 juillet 2026
          </a>
          ). Remplacez ce repère par votre coût réel si votre entreprise ou le
          poste étudié diffère de ce champ.
          <br />
          <br />
          Chez Bréban : l&apos;assistante passe 6 h/semaine sur le planning et 4
          h sur la ressaisie des bons ; deux exploitants perdent chacun 3 h de
          coordination.
          <br />
          (6 + 4 + 3 + 3) h × 47 semaines × 44,70 € ={" "}
          <strong>≈ 33 600 € de capacité annuelle</strong>. Ce montant ne
          devient une économie que si l&apos;entreprise réaffecte effectivement
          ces heures ou évite une dépense. Le ROI se calcule ensuite ainsi :
          <br />
          <strong>
            ROI = (bénéfices cumulés attribuables − coût total) / coût total ×
            100
          </strong>
          . Le délai de retour indique séparément le mois où les bénéfices
          cumulés couvrent le coût.
        </FormulaBox>
        <p>
          Les erreurs, justement, coûtent généralement plus cher
          lorsqu&apos;elles sont détectées après propagation : correction de
          plusieurs fichiers, nouvelle facture, reprise du stock ou mauvaise
          décision. Nous ne retenons pas ici le multiplicateur « 1-10-100 »,
          faute de source et de périmètre suffisamment traçables. Un logiciel
          qui valide la donnée à la saisie et la propage ensuite réduit surtout
          le nombre de reprises possibles.
        </p>
        <InfoBox
          variant="amber"
          title="Quand Excel dérape : trois incidents documentés"
        >
          En 2003, le producteur canadien d&apos;électricité{" "}
          <a
            href="https://www.theregister.com/2003/06/19/excel_snafu_costs_firm_24m/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TransAlta
          </a>{" "}
          a perdu 24 millions de dollars à cause d&apos;un décalage de lignes
          dans un copier-coller Excel. Ce montant est souvent présenté comme 10
          % de son résultat annuel, mais la source contemporaine accessible
          confirme le montant et l&apos;erreur, pas ce ratio. En 2012,
          l&apos;affaire « London Whale » de{" "}
          <a
            href="https://elischolar.library.yale.edu/ypfs-documents/454/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JPMorgan
          </a>{" "}
          (plus de 6 milliards de dollars de pertes) impliquait une erreur de
          formule — une somme à la place d&apos;une moyenne — dans un modèle de
          risque sous Excel. Elle n&apos;explique pas, à elle seule, toute la
          perte. Et en 2020,{" "}
          <a
            href="https://www.gov.uk/government/news/phe-statement-on-delayed-reporting-of-covid-19-cases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Public Health England
          </a>{" "}
          a retardé l’intégration de 15 841 cas positifs parce que des fichiers
          avaient dépassé la taille maximale acceptée par le processus de
          consolidation. Votre entreprise ne joue pas à cette échelle — mais
          votre classeur de devis reste soumis à des limites techniques.
        </InfoBox>

        <h2 id="prix-par-type">4. Les prix 2026 par type de logiciel</h2>
        <p>
          Voici la grille détaillée par usage. Elle synthétise quatre grilles
          publiques de prestataires consultées le 20 juillet 2026 et notre
          décomposition pédagogique en jours. Les définitions diffèrent entre
          sources et chaque éditeur vend ses services : ces montants sont des
          hypothèses de planification, pas une observation indépendante du
          marché ni un engagement tarifaire.
        </p>
        <GuideTable
          headers={[
            "Ce que vous voulez",
            "Budget création",
            "Récurrent / an",
            "Le poste qui fait varier",
          ]}
          rows={[
            [
              "Suivi clients / devis (CRM léger)",
              "8 000 – 25 000 €",
              "1 500 – 4 000 €",
              "Connexion à la facturation existante",
            ],
            [
              "Gestion de stock / commandes",
              "8 000 – 30 000 €",
              "1 500 – 5 000 €",
              "Codes-barres, multi-dépôts, inventaires",
            ],
            [
              "Planning / interventions terrain",
              "15 000 – 45 000 €",
              "2 500 – 8 000 €",
              "Application mobile pour les équipes",
            ],
            [
              "Portail client (suivi de dossiers)",
              "18 000 – 70 000 €",
              "3 000 – 10 000 €",
              "Volume d'utilisateurs, documents, paiement",
            ],
            [
              "ERP simplifié (tout relié)",
              "50 000 – 120 000 €",
              "8 000 – 25 000 €",
              "Nombre de processus et d'intégrations",
            ],
            [
              "Automatisations entre outils",
              "500 – 5 000 € par flux",
              "300 – 1 500 €",
              "Complexité des règles métier",
            ],
          ]}
        />
        <p>
          Une lecture honnête de cette grille : le prix suit moins le nombre
          d&apos;écrans que <strong>trois multiplicateurs</strong> — le nombre
          de rôles différents (qui voit quoi, qui valide quoi), les connexions à
          l&apos;existant (une grille commerciale citée dans les sources estime
          2 à 15 jours par intégration, à vérifier sur la documentation de
          chaque API), et l&apos;exigence de fiabilité. Une panne sur un outil
          de consultation gêne ; une erreur sur un outil qui facture crée
          immédiatement un risque financier et client. C&apos;est pour cela
          qu&apos;un « simple outil de planning » peut légitimement coûter 15
          000 € : le planning est simple, le brancher sur la paie et l&apos;app
          mobile des équipes ne l&apos;est pas (le choix de la technologie
          mobile a son comparatif dédié : notre{" "}
          <Link href="/guides/react-native-ou-flutter">
            guide React Native ou Flutter
          </Link>
          ). Par secteur, les cas d&apos;usage courants comprennent le
          BTP (suivi multi-chantiers, matériel, pointages), le transport
          (tournées, bons de livraison), la santé et l&apos;industrie (ordres de
          fabrication, traçabilité). Pour la santé, le régime HDS ne
          s&apos;applique pas à toute donnée liée à un patient : il vise
          notamment l&apos;hébergement par un tiers de données de santé à
          caractère personnel recueillies dans les activités prévues par{" "}
          <a
            href="https://esante.gouv.fr/labels-certifications/hebergement-des-donnees-de-sante"
            target="_blank"
            rel="noopener noreferrer"
          >
            l&apos;article L.1111-8, présenté par l&apos;Agence du Numérique en
            Santé
          </a>
          . Qualifiez le périmètre et les rôles avant de budgéter un hébergement
          certifié ou, le cas échéant, une démarche de certification. Ce sont
          exactement les périmètres que couvre notre offre d&apos;
          <Link href="/services/outils-internes-sur-mesure">
            outils internes sur mesure
          </Link>
          , au forfait fixe contractuel.
        </p>

        <h2 id="ecart-devis">
          5. Pourquoi les devis vont de 5 000 à 150 000 €
        </h2>
        <p>
          C&apos;est la vraie question derrière votre recherche : les pages que
          vous avez ouvertes annoncent des prix qui vont du simple au décuple.
          Cet écart a quatre explications rationnelles — les connaître vous
          permet de classer n&apos;importe quel devis en cinq minutes :
        </p>
        <ul>
          <li>
            <strong>Le périmètre supposé.</strong> « Un CRM » peut vouloir dire
            3 écrans ou 30. Sans cahier des charges commun, chaque agence
            chiffre un périmètre différent. Comparez les hypothèses avant de
            comparer les montants.
          </li>
          <li>
            <strong>La composition de l’équipe.</strong> Un taux varie avec le
            rôle, l’expérience, la localisation, la durée d’engagement et le
            modèle du prestataire. Demandez qui réalise chaque poste et à quel
            taux ; un tarif élevé ou faible ne prouve à lui seul ni vitesse ni
            fiabilité.
          </li>
          <li>
            <strong>Le niveau de finition.</strong> Un outil utilisé par 3
            personnes formées tolère une interface rugueuse ; un portail ouvert
            à vos clients exige le soin d&apos;un produit public. Même fonction,
            budget du simple au double.
          </li>
          <li>
            <strong>L&apos;usage — ou l&apos;affichage — de l&apos;IA.</strong>{" "}
            L&apos;IA peut réduire l&apos;effort sur certaines tâches, mais son
            effet sur un devis complet ne se déduit pas sans comparer le même
            périmètre et les mêmes garanties. La section 10 sépare les résultats
            publiés de l&apos;argument commercial.
          </li>
        </ul>
        <p>
          Le statut du prestataire change aussi ce que vous achetez, même à
          périmètre égal :
        </p>
        <GuideTable
          headers={["Modèle", "Bon choix lorsque", "Compromis à contrôler"]}
          rows={[
            [
              "Freelance senior",
              "Un périmètre net peut être porté par une personne",
              "Continuité, renfort en cas d'absence et couverture du design",
            ],
            [
              "Studio ou agence senior",
              "Le projet exige produit, design, développement et livraison coordonnés",
              "Équipe réellement affectée et sous-traitance éventuelle",
            ],
            [
              "Entreprise de services du numérique (ESN)",
              "Le projet doit s'insérer dans une grande organisation ou mobiliser une équipe étendue",
              "Frais de structure, rotation des intervenants et vitesse de décision",
            ],
            [
              "Équipe interne",
              "Le logiciel appelle une évolution continue et devient stratégique",
              "Recrutement, management technique et charge durable",
            ],
          ]}
        />
        <InfoBox variant="emerald" title="À retenir">
          Un devis ne se juge jamais dans l&apos;absolu, mais à périmètre égal.
          Envoyez le même{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges
          </Link>{" "}
          à trois prestataires, exigez le détail en jours par poste.
          L&apos;écart devient alors explicable : périmètre, composition
          d&apos;équipe, risques assumés, finition ou marge. Aucun ratio de
          réduction n&apos;est garanti.
        </InfoBox>

        <h2 id="methode-tjm">
          6. La méthode jours × TJM pour vérifier un devis
        </h2>
        <p>
          La part de travail d&apos;un devis peut être contrôlée par une
          multiplication :{" "}
          <strong>nombre de jours de travail × taux journalier (TJM)</strong>.
          Un forfait peut aussi intégrer licences, risque, garantie ou
          sous-traitance : demandez-les séparément au lieu de les confondre avec
          l&apos;effort humain. Le{" "}
          <a
            href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            baromètre SILKHOM
          </a>{" "}
          cité dans les sources fournit des repères ventilés par profil et
          localisation ; il ne justifie pas une médiane universelle pour tout
          projet. Pour rendre les exemples suivants reproductibles, nous
          retenons{" "}
          <strong>650 € HT par jour comme hypothèse pédagogique</strong>.
          Remplacez-la par les taux et la composition d’équipe du devis.
        </p>
        <p>
          Appliquez la multiplication dans les deux sens. Dans un sens : un
          outil simple = 10 à 30 jours × 650 € ≈ 6 500 à 19 500 € ; un logiciel
          métier = 40 à 120 jours × 650 € ≈ 26 000 à 78 000 €. Ces résultats
          servent de contrôle de cohérence, pas de tarif automatique. Dans
          l&apos;autre sens : un « logiciel de gestion complet à 4 900 € »,
          c&apos;est 8 jours de travail d&apos;un profil confirmé. Huit jours
          pour comprendre votre métier, concevoir, développer, connecter, tester
          et livrer ? La multiplication signale une question à poser — dans les
          deux directions, car un devis à 90 000 € sans détail de la charge et
          des autres postes reste impossible à contrôler. Notre{" "}
          <Link href="/guides/tjm-developpeur-web">
            guide du tarif journalier
          </Link>{" "}
          détaille cette méthode : nombre de jours par livrable, poids relatif
          de chaque poste et calcul du tarif implicite d&apos;un devis.
        </p>

        <h2 id="devis">7. Un exemple de devis, décortiqué ligne à ligne</h2>
        <p>
          Voici un <strong>exemple illustratif</strong>, construit pour le cas
          fictif de notre fil rouge : la gestion de tournées des Transports
          Bréban — planning, bons de livraison numériques sur mobile et
          facturation connectée. Il sert à vérifier le calcul, pas à laisser
          croire qu&apos;un document client est publié. Taux journalier retenu :
          650 € HT.
        </p>
        <FormulaBox>
          <strong>Devis « gestion de tournées » — 50 jours, 32 500 € HT</strong>
          <br />
          Cadrage : ateliers sur vos processus réels (2 j) — 1 300 €
          <br />
          Maquettes des écrans clés, validées par les utilisateurs (5 j) — 3 250
          €
          <br />
          Planning interactif : tournées, affectations, absences (10 j) — 6 500
          €
          <br />
          Application mobile chauffeurs : bons, photos, signatures (12 j) — 7
          800 €
          <br />
          Connexion facturation existante + exports comptables (7 j) — 4 550 €
          <br />
          Reprise des données Excel (3 ans d&apos;historique) (4 j) — 2 600 €
          <br />
          Rôles, droits d&apos;accès, RGPD (3 j) — 1 950 €
          <br />
          Tests avec les équipes, corrections, formation (5 j) — 3 250 €
          <br />
          Mise en production + transfert de propriété du code (2 j) — 1 300 €
        </FormulaBox>
        <p>
          Cet exemple valorise le cadrage au taux journalier : sa ligne ressort
          donc à 1 300 €. Le Discovery Sprint forfaitaire présenté en section 13
          est l&apos;offre actuelle à 1 500 €, déduite si le projet se lance.
          Les deux montants correspondent à des cadres commerciaux différents,
          pas à deux prix simultanés pour le même cadrage.
        </p>
        <p>
          Trois enseignements. D&apos;abord,{" "}
          <strong>
            le planning visible ne pèse qu&apos;un cinquième du budget
          </strong>{" "}
          : dans cet exemple, le gros du devis est le mobile, les connexions et
          la fiabilité. Tout devis doit préciser si ces postes sont inclus,
          exclus ou encore à confirmer. Ensuite, chaque ligne est en jours :
          vous pouvez contester, prioriser, retirer (« la reprise des 3 ans
          d&apos;historique, gardons juste l&apos;année en cours : -1 300 € »).
          Enfin, la dernière ligne regroupe la mise en production, la remise du
          code et des accès sur 2 jours. La clause de cession n&apos;est pas une
          option facturée à part : elle doit déjà figurer dans le contrat et la
          liste des briques tierces doit être annexée (section 12).
        </p>

        <InfoBox
          variant="blue"
          title="Rendre deux devis réellement comparables"
        >
          <p>
            Exigez pour chacun la même liste : cadrage, maquettes,
            développement, tests, reprise de données, formation, mise en
            production, garantie et maintenance. Faites écrire séparément les
            exclusions et les coûts qui dépendront d&apos;un service tiers.
            Enfin, chaque lot doit avoir un résultat observable, la personne qui
            le valide et ce qui vous est remis en cas d&apos;arrêt du projet.
          </p>
          <p className="mt-2">
            Sans ces éléments, le détail en jours donne une impression de
            précision, mais vous comparez encore des produits différents.
          </p>
        </InfoBox>

        <GuideInlineCTA
          title="Un chiffrage honnête pour votre outil métier ?"
          description="Décrivez votre processus en 3 minutes : nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti, avec une fourchette argumentée en jours × postes — et notre avis franc si un abonnement du marché suffit."
          tags={[
            "Objectif : prochain jour ouvré",
            "Outils internes 8 000 – 80 000 €",
            "Forfait fixe contractuel",
          ]}
          ctaLabel="Cadrer mon outil"
        />

        <h2 id="tco">
          8. Le vrai coût sur 3 ans (maintenance, hébergement, coûts cachés)
        </h2>
        <p>
          Le devis de création n&apos;est pas le coût total. Voici les postes à
          faire écrire d&apos;emblée, qu&apos;ils soient inclus, exclus ou à
          confirmer :
        </p>
        <GuideTable
          headers={["Poste", "Ordre de grandeur", "En clair"]}
          rows={[
            [
              "Maintenance corrective",
              "5 – 10 % du coût initial / an",
              "Bugs, mises à jour de sécurité — à prévoir",
            ],
            [
              "Maintenance évolutive",
              "5 – 15 % du coût initial / an",
              "Les améliorations demandées à l'usage",
            ],
            [
              "Hébergement + sauvegardes",
              "40 – 100 €/mois",
              "Infrastructure moderne, sauvegardes automatiques",
            ],
            [
              "Reprise de données",
              "souvent sous-estimée",
              "Nettoyer et migrer l'existant — chiffrez-la au devis",
            ],
            [
              "Formation & accompagnement",
              "1 – 3 jours",
              "Un outil non adopté est un outil perdu",
            ],
            [
              "Intégrations découvertes en route",
              "2 – 15 jours chacune*",
              "Listez les API et les flux avant le devis",
            ],
          ]}
        />
        <p className="text-sm">
          * Hypothèse de charge publiée par LMS Design, l&apos;une des quatre
          grilles commerciales détaillées dans les sources. Convertissez-la avec
          le taux du devis et faites préciser les tests, la supervision et les
          abonnements éventuels.
        </p>
        <p>
          Pour notre fil rouge Bréban : 32 500 € de création + environ 4 900
          €/an de maintenance (15 %) + 900 €/an d&apos;hébergement ≈{" "}
          <strong>50 000 € sur 3 ans</strong>. La capacité brute calculée en
          section 3 atteint ~33 600 €/an. Si 100 % de ces heures étaient
          réellement réaffectées dès le premier jour, leur cumul couvrirait ce
          coût vers le 18e mois ; à 50 %, il faudrait près de 36 mois. Ce sont
          deux hypothèses à vérifier après livraison, pas une promesse
          d&apos;économie. La ligne « maintenance » doit aussi être tenue par
          quelqu&apos;un, ce qui est l&apos;objet d&apos;un contrat de{" "}
          <Link href="/services/maintenance-evolution">
            maintenance et d&apos;évolution
          </Link>{" "}
          au périmètre écrit. Et c&apos;est un calcul que nous vous recommandons
          d&apos;exiger de tout prestataire : pas de devis sans regard sur ce
          que l&apos;absence d&apos;outil coûte déjà.
        </p>
        <p>
          Un mot sur le risque, honnêtement : les statistiques d&apos;échec des
          projets informatiques sont réelles (les grands projets dépassent leur
          budget de 45 % en moyenne selon{" "}
          <a
            href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value"
            target="_blank"
            rel="noopener noreferrer"
          >
            McKinsey-Oxford
          </a>
          ). Mais lisez-les bien : elles portent sur de <em>grands</em> projets.
          Un outil de PME cadré serré et livré par étapes réduit cette
          exposition ; il ne supprime pas le risque. Les échecs plus discrets
          viennent d&apos;un processus mal compris, de données impossibles à
          reprendre, d&apos;utilisateurs indisponibles pour tester ou d&apos;une
          adoption laissée pour la fin. Un critère de succès mesurable à chaque
          palier permet de les voir tôt, au lieu de les découvrir après un
          projet-cathédrale de 18 mois.
        </p>

        <p>
          Un mot de trésorerie, enfin : pour limiter le risque sur un projet
          substantiel, privilégiez un paiement{" "}
          <strong>par jalons livrables et vérifiables</strong>. Le devis précise
          l&apos;acompte, les conditions d&apos;acceptation et ce qui se passe
          en cas de désaccord ou d&apos;arrêt. Et avant de signer, jetez un œil
          aux dispositifs publics de financement de la numérisation : notre{" "}
          <Link href="/guides/aides-creation-site-internet">
            guide des aides
          </Link>{" "}
          recense ceux qui s&apos;appliquent aussi aux logiciels métier —
          plusieurs régions financent précisément les « outils numériques à
          forte valeur ajoutée ».
        </p>

        <h2 id="match">9. Sur mesure, SaaS ou Excel : le match chiffré</h2>
        <p>
          Pour un besoin standard bien couvert — paie, comptabilité ou
          messagerie, par exemple — commencez généralement par tester un produit
          éprouvé. Un développement spécifique peut se justifier lorsqu&apos;une
          règle métier différenciante ou un contournement mesuré coûte plus que
          l&apos;écart de TCO et de risque. Entre les deux, une troisième voie
          mérite d&apos;être chiffrée avant de trancher : notre{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            comparatif no-code ou sur-mesure
          </Link>{" "}
          donne les tarifs affichés des plateformes et le point où leur courbe
          de coût croise celle d&apos;un développement.
        </p>
        <p>
          Voici une simulation pédagogique sur cinq ans pour un outil central à
          10 utilisateurs. Elle illustre une méthode de calcul ; ses prix fixes
          et son périmètre fictif ne décrivent ni une moyenne du marché, ni un
          point de bascule universel.
        </p>
        <GuideTable
          headers={[
            "Option simulée",
            "Socle sur 5 ans",
            "À ajouter ou vérifier",
          ]}
          rows={[
            [
              "Rester sur Excel",
              "0 € de licence supplémentaire dans l’hypothèse",
              "Temps perdu, erreurs, sauvegarde, accès et continuité à mesurer",
            ],
            [
              "SaaS à 100 €/utilisateur/mois",
              "10 × 100 € × 60 mois = 60 000 €",
              "Options, administration, indexation, taxes et sortie",
            ],
            [
              "No-code à 20 €/utilisateur/mois",
              "10 × 20 € × 60 mois = 12 000 €",
              "Assemblage, maintenance, limites, données et sortie",
            ],
            [
              "Sur mesure à 30 000 €",
              "30 000 € (année 1 incluse) + 4 × 4 500 € de maintenance pour les années 2 à 5 + 5 × 2 000 € d’hébergement = 58 000 €",
              "Évolutions, sécurité, continuité prestataire, temps interne et reprise des données",
            ],
          ]}
        />
        <p>
          Le résultat change dès qu&apos;un prix, une fonction, un nombre de
          comptes ou un coût de maintenance change. Dix utilisateurs ne prouvent
          donc rien à eux seuls. Pour un besoin de gestion commerciale, utilisez
          les tarifs éditeurs datés et la grille du guide{" "}
          <Link href="/guides/combien-coute-un-crm">
            « combien coûte un CRM »
          </Link>{" "}
          avant de comparer une offre standard à un outil spécifique. Si un
          produit du marché couvre votre besoin sans contournement coûteux,
          prenez-le. Si vous hésitez plutôt avec un produit à vendre par
          abonnement, notre guide{" "}
          <Link href="/guides/combien-coute-un-saas">
            « combien coûte un SaaS »
          </Link>{" "}
          traite ce cas.
        </p>
        <InfoBox
          variant="amber"
          title="Les cas où nous déconseillons le sur-mesure"
        >
          <p>
            Restez sur le produit du marché si votre besoin est standard.
            Automatisez seulement le passage entre vos outils si la difficulté
            vient d&apos;une ressaisie. Gardez Excel si le processus est rare,
            maîtrisé et sans donnée critique. Enfin, reportez le projet si
            personne dans l&apos;entreprise ne peut décider, tester et porter
            l&apos;adoption : le meilleur code ne remplace pas ce responsable
            interne.
          </p>
        </InfoBox>

        <h2 id="ia">10. Ce que l&apos;IA change vraiment aux prix (2026)</h2>
        <p>
          Vous croiserez deux discours : « l&apos;IA divise les coûts par dix »
          et « l&apos;IA ne change rien ». Les études publiées racontent une
          histoire plus utile. Sur des tâches de code standard et bien cadrées,
          l&apos;
          <a
            href="https://arxiv.org/abs/2302.06590"
            target="_blank"
            rel="noopener noreferrer"
          >
            essai contrôlé de GitHub
          </a>{" "}
          a mesuré des développeurs <strong>55 % plus rapides</strong> avec
          l&apos;assistance IA. Sur du code complexe et mature, l&apos;
          <a
            href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
            target="_blank"
            rel="noopener noreferrer"
          >
            essai randomisé METR (2025)
          </a>{" "}
          a mesuré l&apos;inverse : <strong>19 % plus lents</strong> — tout en
          se croyant plus rapides. Et le{" "}
          <a
            href="https://dora.dev/research/2025/dora-report/"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport DORA de Google
          </a>{" "}
          conclut que l&apos;IA agit comme un <em>amplificateur</em> des forces
          et faiblesses existantes des organisations. Aucune des études citées
          ne documente une division par dix du coût d&apos;un logiciel métier
          complet.
        </p>
        <p>
          Traduction pour votre budget : l&apos;IA peut réduire l&apos;effort
          consacré aux écrans et au code standard — une part d&apos;un outil
          métier — mais ne réduit ni la compréhension de votre métier, ni la
          conception des bons écrans, ni les connexions à vos logiciels, ni la
          fiabilité. Les études citées ne permettent ni de convertir directement
          la vitesse d&apos;une tâche en remise sur un projet complet, ni
          d&apos;établir une baisse générale de 20 à 30 %. Le montant d&apos;un
          devis doit donc être justifié par le périmètre et les jours de chaque
          poste, pas par un gain interne annoncé. Chez Hagnéré Code, l&apos;IA
          est un outil de production encadré dans une équipe senior, avec revue
          humaine ; ce choix n&apos;est pas présenté comme la preuve causale
          d&apos;une remise commerciale systématique. Posez une seule question
          aux prestataires « 100 % IA » :{" "}
          <strong>
            qui relit chaque ligne, et qui maintient le code dans deux ans ?
          </strong>
        </p>

        <h2 id="legacy">
          11. Remplacer un vieux logiciel (Access, Excel, WinDev…)
        </h2>
        <p>
          Un ancien logiciel Access, VB6 ou WinDev, ou un classeur devenu
          central, ne doit pas être remplacé sur son âge seul. Recherchez des
          signaux observables : versions de système non supportées, sauvegarde
          ou restauration non testée, dépendance à une seule personne, accès
          excessifs, documentation absente, données personnelles sans règles de
          conservation, ou évolution devenue impossible à chiffrer.
        </p>
        <p>
          Trois scénarios éditoriaux à faire chiffrer, du plus léger au plus
          lourd :
        </p>
        <ul>
          <li>
            <strong>Stabiliser</strong> : documenter, sauvegarder, tester la
            restauration et corriger le critique. La durée et le budget
            dépendent de l&apos;accès au code, aux données et à
            l&apos;expertise.
          </li>
          <li>
            <strong>Moderniser progressivement</strong> : remplacer un parcours
            vérifiable pendant que l&apos;ancien système continue de tourner.
            Cette option réduit la concentration des risques, mais ajoute une
            période de coexistence et des synchronisations à maintenir.
          </li>
          <li>
            <strong>Refondre avec reprise des données</strong> : reconstruire le
            périmètre retenu, migrer l&apos;historique utile puis organiser
            l&apos;arrêt de l&apos;ancien système. Faites chiffrer séparément
            audit, reprise, coexistence et recette ; c&apos;est le cœur de notre
            métier d&apos;
            <Link href="/agence-react">
              agence React pour applications métier
            </Link>
            .
          </li>
        </ul>
        <InfoBox variant="amber" title="Quand éviter une bascule générale">
          Une bascule unique concentre données, formation, processus et
          technique le même jour. Une alternative est la migration progressive,
          souvent appelée{" "}
          <a
            href="https://martinfowler.com/bliki/StranglerFigApplication.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            « Strangler Fig »
          </a>
          , qui remplace l&apos;ancien système par parcours successifs. Elle
          n&apos;est pas toujours préférable : comparez le coût de coexistence,
          la synchronisation et le risque d&apos;une première tranche courte,
          testable et réversible avec ceux d&apos;une bascule unique.
        </InfoBox>

        <h2 id="juridique">
          12. Propriété du code : la clause qui conditionne la reprise
        </h2>
        <p>
          Pour un logiciel commandé à un prestataire externe,
          <strong>
            {" "}
            payer toutes les factures ne vous transfère pas automatiquement les
            droits patrimoniaux
          </strong>
          . L&apos;auteur détient les droits selon l&apos;article L.111-1 ;
          lorsque le code est créé par un salarié dans ses fonctions, ils sont
          dévolus à son employeur par l&apos;article L.113-9. Le contrat doit
          donc organiser une{" "}
          <strong>cession ou une licence adaptée à l&apos;usage attendu</strong>
          , avec un périmètre précis ; l&apos;article L.131-3 encadre notamment
          la cession. Faites valider ce montage au regard de votre projet. Les
          bibliothèques libres ou commerciales restent régies par leurs propres
          licences et doivent être listées à part. Notre guide{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            qui est propriétaire de votre site et de son code source
          </Link>{" "}
          fournit un exemple de clause à adapter et à faire valider
          juridiquement, l&apos;annexe des briques soumises à des licences
          tierces, et les 14 accès à réclamer.
        </p>
        <p>
          Ce n&apos;est pas de la théorie de juriste. Une chaîne de droits
          incomplète peut compliquer la reprise du logiciel, une levée de fonds
          ou la vente de l&apos;entreprise. La « due diligence » — l&apos;audit
          de l&apos;acheteur — vérifie qui détient quoi. Sans exclusivité ni
          périmètre clair, le prestataire peut aussi conserver des droits de
          réutilisation sur ses composants génériques, sous réserve de ses
          engagements de confidentialité. Les quatre clauses à exiger avant de
          signer :
        </p>
        <ul>
          <li>
            <strong>Cession ou licence de propriété intellectuelle</strong> :
            droits cédés, usages, supports, territoire, durée, prix et moment
            d&apos;effet clairement négociés puis validés juridiquement ;
          </li>
          <li>
            <strong>Réversibilité</strong> : déclencheurs, délai, coût et
            contenu de la remise du code, de la documentation, des accès et des
            données en fin de contrat ;
          </li>
          <li>
            <strong>Maîtrise et portabilité des données</strong> : le contrat
            garantit un export complet à tout moment, dans un format standard,
            sans confondre ce droit d&apos;usage avec une propriété générale sur
            les données personnelles ;
          </li>
          <li>
            Pour les logiciels critiques : l&apos;<strong>entiercement</strong>{" "}
            (le dépôt du code chez un tiers de confiance comme{" "}
            <a
              href="https://www.app.asso.fr/nos-solutions/entiercement-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              l&apos;Agence pour la Protection des Programmes
            </a>
            ). Le contrat d&apos;entiercement précise la fréquence et le
            contrôle des dépôts ainsi que les événements autorisant la remise ;
            sans ces conditions, le dépôt ne garantit ni accès effectif ni code
            exploitable.
          </li>
        </ul>
        <p>
          Chez Hagnéré Code, le contrat de base cède les développements créés
          spécifiquement pour le projet et annexe les briques tierces qui
          gardent leur licence — c&apos;est le sens de la ligne « transfert de
          propriété » de l&apos;exemple en section 7. Un prestataire doit
          pouvoir expliquer cette frontière sans ambiguïté avant la signature.
        </p>

        <InfoBox
          variant="emerald"
          title="À retenir : les 5 chiffres de ce guide"
        >
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              <strong>15 000 – 60 000 €</strong> : la fourchette indicative
              retenue dans ce guide pour un logiciel métier, sans médiane
              statistique revendiquée.
            </li>
            <li>
              <strong>650 €/jour</strong> : l&apos;hypothèse pédagogique du
              devis fictif en section 7 — remplacez-la par les taux réels, ce
              n&apos;est pas une médiane de marché.
            </li>
            <li>
              <strong>10 – 25 %/an</strong> : l&apos;hypothèse de maintenance de
              nos simulations, à remplacer par un contrat chiffré.
            </li>
            <li>
              <strong>Aucun seuil universel d&apos;utilisateurs</strong> :
              comparez abonnement et sur-mesure sur vos prix, votre durée et
              votre besoin.
            </li>
            <li>
              <strong>44,70 €/heure</strong> : le repère Insee 2025 pour
              l&apos;ensemble marchand, entreprises d&apos;au moins 10 salariés
              — une base à remplacer par votre coût réel, pas un ROI à elle
              seule.
            </li>
          </ul>
        </InfoBox>

        <h2 id="methode">13. Méthode : payer le juste prix en 5 étapes</h2>
        <ol>
          <li>
            <strong>Chiffrez d&apos;abord le statu quo</strong> — heures
            réellement réaffectables ou coûts évitables × 47 × coût horaire
            pertinent (section 3). C&apos;est un bénéfice potentiel à confronter
            au coût total, pas une économie acquise : mesurez les gains après
            livraison et l&apos;adoption avant de conclure.
          </li>
          <li>
            <strong>Vérifiez qu&apos;un produit du marché ne suffit pas</strong>{" "}
            — confrontez les quatre scénarios de la section 9. Demandez un avis
            écrit sur l&apos;option abonnement et sur une simple automatisation
            avant d&apos;accepter du sur-mesure.
          </li>
          <li>
            <strong>Décrivez vos processus, pas des écrans</strong> — qui fait
            quoi, avec quels outils existants à connecter. Notre{" "}
            <Link href="/ressources/kit-cahier-des-charges-application-metier">
              modèle de cahier des charges
            </Link>{" "}
            s&apos;adapte en version logiciel — et envoyez-le à l&apos;identique
            à 3 prestataires. Nommez aussi le responsable interne, la situation
            de départ et le résultat observable qui prouvera le gain.
          </li>
          <li>
            <strong>Comparez en jours par poste et en coût sur 3 ans</strong> —
            jamais en prix de création seul (sections 6 et 8). Exigez le TCO et
            les hypothèses d&apos;impact ; validez côté entreprise les gains
            réellement attribuables, puis mesurez-les après livraison.
          </li>
          <li>
            <strong>
              Exigez une chaîne de droits claire et un démarrage par étapes
            </strong>{" "}
            — cession L.131-3 sur les développements spécifiques, inventaire des
            licences tierces, réversibilité et une première brique en production
            en quelques semaines plutôt qu&apos;un projet-tunnel.
          </li>
        </ol>
        <p>
          C&apos;est le déroulé exact de notre méthode : un{" "}
          <strong>
            Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si le projet se
            lance)
          </strong>{" "}
          qui produit le périmètre écrit, les maquettes des écrans clés et un
          devis au forfait fixe — puis un outil livré par étapes, dates
          contractuelles (méthode <Link href="/methode">Sprint Fixe™</Link>),
          développements spécifiques cédés et briques tierces inventoriées.{" "}
          <Link href="/demarrer-un-projet">
            Décrivez votre processus en 3 minutes
          </Link>{" "}
          : objectif de réponse personnelle le prochain jour ouvré, gratuite et sans engagement.
          Et pour situer ce budget dans l&apos;ensemble de votre présence
          numérique, notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            panorama des prix d&apos;un site internet
          </Link>{" "}
          complète ce guide.
        </p>

        <hr />
        <h2 id="sources">Sources, périmètres et limites</h2>
        <p className="text-sm">
          Références consultées le 20 juillet 2026. Une source commerciale
          décrit les prix ou l’expérience de son éditeur ; elle ne devient pas
          une statistique indépendante parce que plusieurs acteurs publient des
          fourchettes proches.
        </p>

        <h3>Données publiques et méthode de coût</h3>
        <ul className="text-sm">
          <li>
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noopener noreferrer"
            >
              Insee — coût horaire du travail 2025
            </a>{" "}
            : 44,70 € dans l&apos;ensemble marchand, entreprises d&apos;au moins
            10 salariés ; repère à remplacer par le coût réel du poste.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/files/2026-03/guide-numerique-des-entreprises_edition-2026_mars-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — Guide numérique des entreprises 2026
            </a>{" "}
            : structure du coût total de possession, transposée ici au logiciel.
          </li>
          <li>
            <a
              href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SILKHOM — baromètre des taux journaliers
            </a>{" "}
            : repères par profil et localisation, sans médiane universelle
            reprise dans ce guide.
          </li>
        </ul>

        <h3>Fourchettes commerciales relevées</h3>
        <ul className="text-sm">
          <li>
            <a
              href="https://lmsdesign.fr/blog/cout-application-metier-sur-mesure"
              target="_blank"
              rel="noopener noreferrer"
            >
              LMS Design, 22 avril 2026
            </a>{" "}
            : enveloppe générale annoncée de 5 000 à 150 000 €, avec des
            catégories détaillées allant notamment jusqu&apos;à 80 000–250 000 €
            ou plus pour un SaaS B2B complet, et une hypothèse de 2 à 15 jours
            par intégration.
          </li>
          <li>
            <a
              href="https://www.ftel.fr/budget-d-une-application-sur-mesure-comprendre-les-couts-et-faire-les-bons-choix"
              target="_blank"
              rel="noopener noreferrer"
            >
              FTEL, relevé 2025–2026
            </a>{" "}
            : 5 000–10 000 € simple, 15 000–50 000 € intermédiaire, 30 000–150
            000 € ou plus complexe.
          </li>
          <li>
            <a
              href="https://www.aquilapp.fr/ressources/developpement-sur-mesure/cout-application-web-sur-mesure"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aquilapp, relevé 2026
            </a>{" "}
            : 5 000–15 000 € simple, 15 000–50 000 € intermédiaire, 50 000–150
            000 € ou plus complexe.
          </li>
          <li>
            <a
              href="https://peaklab.fr/blog/prix-logiciel-sur-mesure-en-2026-combien-prevoir"
              target="_blank"
              rel="noopener noreferrer"
            >
              PeakLab, 26 mai 2026
            </a>{" "}
            : 10 000–40 000 € simple, 40 000–120 000 € métier, 150 000–400 000 €
            ou plus complexe.
          </li>
        </ul>
        <p className="text-sm">
          L&apos;union de ces publications explique l&apos;enveloppe large de la
          FAQ. Les scénarios resserrés du guide sont une synthèse éditoriale
          destinée à lancer une comparaison ; ils ne prouvent ni moyenne ni
          médiane. Les prix et périmètres évoluent : relevez-les à nouveau et
          demandez plusieurs devis identiques avant de décider.
        </p>

        <h3>Travail, tableurs et assistance par IA</h3>
        <ul className="text-sm">
          <li>
            <a
              href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy"
              target="_blank"
              rel="noopener noreferrer"
            >
              McKinsey Global Institute, 2012
            </a>{" "}
            : temps de recherche d&apos;information des profils qualifiés
            collaboratifs, pas moyenne des salariés français.
          </li>
          <li>
            <a
              href="https://www.smartsheet.com/content-center/product-news/automation/workers-waste-quarter-work-week-manual-repetitive-tasks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smartsheet — enquête déclarative sur les tâches manuelles
            </a>
            , et{" "}
            <a
              href="https://arxiv.org/abs/0802.3457"
              target="_blank"
              rel="noopener noreferrer"
            >
              synthèse académique de R. Panko
            </a>{" "}
            sur les erreurs de tableur.
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/2302.06590"
              target="_blank"
              rel="noopener noreferrer"
            >
              essai contrôlé GitHub Copilot, 2023
            </a>
            ,{" "}
            <a
              href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
              target="_blank"
              rel="noopener noreferrer"
            >
              essai randomisé METR, 2025
            </a>{" "}
            et{" "}
            <a
              href="https://dora.dev/research/2025/dora-report/"
              target="_blank"
              rel="noopener noreferrer"
            >
              rapport DORA 2025
            </a>{" "}
            : tâches et populations différentes, sans conversion automatique en
            remise projet.
          </li>
        </ul>

        <h3>Droit, santé et continuité</h3>
        <ul className="text-sm">
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
              target="_blank"
              rel="noopener noreferrer"
            >
              Article L.113-9 du Code de la propriété intellectuelle
            </a>
            ,{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              article L.131-3
            </a>{" "}
            et{" "}
            <a
              href="https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/cas-particulier-logiciels"
              target="_blank"
              rel="noopener noreferrer"
            >
              synthèse INPI sur les logiciels
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.app.asso.fr/nos-solutions/entiercement-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              APP — entiercement de logiciel
            </a>{" "}
            : mécanisme à encadrer par ses déclencheurs et la qualité des
            dépôts.
          </li>
          <li>
            <a
              href="https://esante.gouv.fr/labels-certifications/hebergement-des-donnees-de-sante"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agence du Numérique en Santé — champ de l&apos;hébergement HDS
            </a>
            .
          </li>
        </ul>

        <h3>Cas documentés et grands projets</h3>
        <ul className="text-sm">
          <li>
            <a
              href="https://www.theregister.com/2003/06/19/excel_snafu_costs_firm_24m/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TransAlta
            </a>
            ,{" "}
            <a
              href="https://elischolar.library.yale.edu/ypfs-documents/454/"
              target="_blank"
              rel="noopener noreferrer"
            >
              rapport JPMorgan
            </a>{" "}
            et{" "}
            <a
              href="https://www.gov.uk/government/news/phe-statement-on-delayed-reporting-of-covid-19-cases"
              target="_blank"
              rel="noopener noreferrer"
            >
              Public Health England
            </a>{" "}
            : incidents cités avec leur portée limitée.
          </li>
          <li>
            <a
              href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value"
              target="_blank"
              rel="noopener noreferrer"
            >
              McKinsey-Oxford — grands projets informatiques
            </a>{" "}
            : résultats non transposés aux petits outils PME.
          </li>
        </ul>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des repères éditoriaux issus du
            recoupement décrit ci-dessus, donnés à titre indicatif : seul un
            devis établi sur votre périmètre vous engage. Ce guide ne constitue
            pas un conseil juridique personnalisé — pour une cession de droits
            ou un contrat, consultez un avocat.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
