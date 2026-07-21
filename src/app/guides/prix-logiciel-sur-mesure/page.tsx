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
      "Pour préparer un budget, retenez environ 5 000 à 15 000 € pour un outil interne simple, 15 000 à 60 000 € pour un logiciel métier et davantage pour une plateforme complexe. Ces fourchettes synthétisent quatre grilles commerciales françaises relevées le 20 juillet 2026 ; elles ne remplacent pas des devis établis sur le même besoin.",
  },
  {
    question: "Comment est calculé le prix d'un logiciel ?",
    answer:
      "Le prestataire estime le travail par poste, puis applique ses taux et ajoute les services, licences et risques inclus dans son forfait. Demandez le détail de la compréhension du besoin, des écrans, des connexions, des tests, de la reprise de données, de la formation et de la mise en service.",
  },
  {
    question: "Logiciel sur mesure ou SaaS : comment choisir ?",
    answer:
      "Choisissez un logiciel par abonnement si votre besoin est standard et bien couvert. Étudiez le sur-mesure si une règle propre à votre entreprise ou des contournements coûteux le justifient. Comparez fonctions, coût complet, temps interne et possibilité de changer de solution sur la même durée.",
  },
  {
    question: "Combien coûte la maintenance d'un logiciel sur mesure ?",
    answer:
      "Pour une première simulation, ce guide retient 10 à 25 % du coût initial par an, plus l'hébergement. Ce n'est pas une règle de marché : exigez le contenu du service, les délais d'intervention, les évolutions incluses et les exclusions.",
  },
  {
    question:
      "Combien coûte le remplacement d'un vieux logiciel (Access, VB6, WinDev) ?",
    answer:
      "Faites chiffrer trois options : stabiliser l'existant, remplacer progressivement les fonctions les plus risquées ou refaire l'outil avec reprise des données. Le bon budget dépend surtout de l'accès au code, de la qualité des données et de la durée de coexistence des deux systèmes.",
  },
  {
    question:
      "Combien de temps faut-il pour développer un logiciel sur mesure ?",
    answer:
      "Pour préparer le calendrier, nos scénarios retiennent 3 à 8 semaines pour un outil interne simple, 2 à 6 mois pour un logiciel métier et davantage pour une plateforme. Ce ne sont pas des délais de marché : le planning du devis doit intégrer les fonctions, les données et la disponibilité de vos équipes pour expliquer le travail, tester et décider.",
  },
  {
    question:
      "À qui appartient le code d'un logiciel développé par un prestataire ?",
    answer:
      "Payer la facture ne transfère pas automatiquement tous les droits. Le contrat doit préciser la cession ou la licence, la remise du code et des accès, ainsi que les composants tiers qui gardent leur propre licence. Faites valider cette clause selon votre projet.",
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
        heroDescription="Vous envisagez un logiciel pour supprimer des ressaisies, fiabiliser un processus ou remplacer un vieux fichier ? Voici les budgets à prévoir, les alternatives à comparer et les questions à poser avant de signer un devis."
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
          Vous cherchez à savoir combien coûterait un logiciel adapté à votre
          entreprise, et surtout si cet investissement en vaut la peine. La
          réponse courte : un outil simple peut démarrer autour de 5 000 à 15
          000 €, mais un abonnement existant, une automatisation ou
          l&apos;amélioration de votre fichier actuel peuvent être de meilleurs
          choix. Ce guide vous aide à comparer ces options, comprendre un devis
          sans jargon et calculer le coût complet avant de décider.
        </p>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Quel budget prévoir ?",
            },
            {
              id: "de-quoi-parle-t-on",
              label: "2. Les solutions à comparer",
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
              label: "5. Pourquoi deux devis peuvent tant varier",
            },
            {
              id: "devis",
              label: "6. Lire un devis ligne par ligne",
            },
            {
              id: "tco",
              label: "7. Comparer le coût total et les alternatives",
            },
            {
              id: "juridique",
              label: "8. Propriété du code et reprise",
            },
            {
              id: "sources",
              label: "Sources et limites",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Quel budget prévoir ?</h2>
        <p>
          Pour construire un premier budget, notre relevé de quatre grilles
          commerciales françaises situe en 2026 un logiciel sur mesure à{" "}
          <strong>5 000 à 15 000 € pour un outil interne simple</strong> (un
          processus digitalisé, quelques écrans),{" "}
          <strong>15 000 à 60 000 € pour un logiciel métier complet</strong>{" "}
          (rôles, planning, connexions à vos outils), et{" "}
          <strong>60 000 à 250 000 € pour une plateforme</strong> (outil reliant
          plusieurs activités, portail multi-services). Ces montants servent à
          préparer une discussion, pas à prédire votre devis : les sources sont
          des prestataires, pas une étude statistique. S&apos;y ajoutent, dans
          nos simulations, une hypothèse de maintenance de 10 à 25 % du coût
          initial par an et un hébergement de 40 à 100 €/mois, à remplacer par
          les contrats réels. La{" "}
          <Link href="/tarifs">page Tarifs Hagnéré Code</Link> affiche
          séparément les offres publiques à jour ; seul un devis nominatif
          engage les parties. Les délais du tableau sont, eux aussi, des
          scénarios de planification Hagnéré : ils supposent que les décisions,
          les contenus et les accès aux logiciels existants arrivent sans
          blocage. Faites-les remplacer par un calendrier construit à partir de
          votre projet.
        </p>
        <GuideTable
          headers={[
            "Votre besoin",
            "Budget et délai à confirmer",
            "Fonctions supposées",
          ]}
          rows={[
            [
              "Suivre un processus interne simple",
              "5 000 – 15 000 € ; scénario de 3 à 8 semaines",
              "Quelques écrans, formulaires et règles métier",
            ],
            [
              "Relier plusieurs étapes du métier",
              "15 000 – 60 000 € ; scénario de 2 à 6 mois",
              "Rôles, planning, documents et connexions aux outils",
            ],
            [
              "Ouvrir un espace à vos clients",
              "18 000 – 70 000 € ; scénario de 2 à 4 mois",
              "Comptes, dossiers, documents, notifications ou paiement",
            ],
            [
              "Relier plusieurs services de l'entreprise",
              "60 000 – 250 000 € ; scénario de 6 à 18 mois",
              "Processus multiples, droits fins, connexions et reprise de données",
            ],
            [
              "Éviter une ressaisie entre deux outils",
              "500 – 5 000 € par automatisation ; scénario de 1 à 4 semaines",
              "Exemple : un devis signé crée la facture et prévient le client",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Ne choisissez pas la technologie avant le problème"
        >
          Commencez par une phrase très concrète : « cinq personnes
          ressaisissent les mêmes commandes dans trois outils et nous perdons
          environ dix heures par semaine ». Cette phrase permet de tester quatre
          réponses : conserver et sécuriser l&apos;existant, automatiser une
          étape, acheter un logiciel déjà prêt ou construire du sur-mesure. Les
          termes techniques sont expliqués au moment où ils deviennent utiles.
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">
          2. Les solutions à comparer avant de développer
        </h2>
        <p>
          Vous ne comparez pas seulement quatre technologies, mais quatre façons
          de résoudre le même problème. Aucun modèle ne donne automatiquement la
          maîtrise du logiciel ou des données : vérifiez le contrat, les formats
          d&apos;export, les droits et les composants utilisés.
        </p>
        <GuideTable
          headers={[
            "Option",
            "Quand elle est raisonnable",
            "Ce qu'il faut vérifier",
          ]}
          rows={[
            [
              "Excel ou tableur",
              "Le besoin reste rare, compris et géré par peu de personnes",
              "Temps interne, sauvegardes, erreurs, accès et continuité",
            ],
            [
              "SaaS",
              "Le besoin est standard et un logiciel par abonnement le couvre",
              "Options, mise en place, connexion, export et coût de sortie",
            ],
            [
              "No-code",
              "Vous voulez tester ou équiper rapidement un processus simple",
              "Licences, limites, maintenance et récupération du travail",
            ],
            [
              "Sur-mesure",
              "Une règle propre au métier crée un avantage ou un gain mesurable",
              "Conception, données, maintenance, droits sur le code et continuité",
            ],
          ]}
        />
        <h2 id="cout-actuel">
          3. Ce que l&apos;absence d&apos;outil vous coûte déjà
        </h2>
        <p>
          Avant de demander « combien coûte un logiciel ? », posez la question
          inverse : <strong>combien coûte le fonctionnement actuel ?</strong>{" "}
          Pendant quatre semaines, notez le temps passé à ressaisir, rechercher
          une information, corriger une erreur ou attendre une validation.
          Ajoutez seulement les dépenses réellement évitables. Une heure
          théoriquement « gagnée » n&apos;est pas automatiquement une heure de
          salaire économisée.
        </p>
        <FormulaBox>
          <strong>
            Gain annuel possible = heures qui disparaissent réellement chaque
            semaine × 47 semaines × coût horaire chargé
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
          poste étudié diffère de ce champ. Les 47 semaines sont une hypothèse
          de calcul Hagnéré : utilisez le nombre de semaines pendant lesquelles
          la tâche est réellement effectuée dans votre entreprise.
          <br />
          <br />
          Exemple pédagogique : 12 h × 47 × 44,70 € ={" "}
          <strong>environ 25 200 € de capacité annuelle</strong>. Ce montant ne
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
        <InfoBox
          variant="amber"
          title="Mesurez votre entreprise, pas un cas spectaculaire"
        >
          Une erreur célèbre dans un grand groupe ne permet pas de calculer
          votre retour sur investissement. Listez plutôt vos incidents des douze
          derniers mois : facture reprise, stock faux, dossier retardé ou client
          rappelé. Leur fréquence et leur coût donnent une base défendable.
        </InfoBox>

        <h2 id="prix-par-type">4. Les prix 2026 par type de logiciel</h2>
        <p>
          Voici la grille détaillée par usage. Elle synthétise quatre grilles
          publiques de prestataires consultées le 20 juillet 2026 et notre
          décomposition pédagogique en jours. Les définitions diffèrent entre
          sources et chaque éditeur vend ses services : ces montants sont des
          hypothèses de planification, pas une observation indépendante du
          marché ni un engagement tarifaire. Les fourchettes de maintenance dans
          la troisième colonne sont des hypothèses Hagnéré à remplacer par un
          contrat détaillé. Les prix de création recoupent les grilles
          commerciales de{" "}
          <a
            href="https://lmsdesign.fr/blog/cout-application-metier-sur-mesure"
            target="_blank"
            rel="noopener noreferrer"
          >
            LMS Design
          </a>
          ,{" "}
          <a
            href="https://www.ftel.fr/budget-d-une-application-sur-mesure-comprendre-les-couts-et-faire-les-bons-choix"
            target="_blank"
            rel="noopener noreferrer"
          >
            FTEL
          </a>
          ,{" "}
          <a
            href="https://www.aquilapp.fr/ressources/developpement-sur-mesure/cout-application-web-sur-mesure"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aquilapp
          </a>{" "}
          et{" "}
          <a
            href="https://peaklab.fr/blog/prix-logiciel-sur-mesure-en-2026-combien-prevoir"
            target="_blank"
            rel="noopener noreferrer"
          >
            PeakLab
          </a>
          .
        </p>
        <GuideTable
          headers={[
            "Ce que vous voulez",
            "Budget de création indicatif",
            "À chiffrer avec soin",
          ]}
          rows={[
            [
              "Suivi clients / devis (CRM léger)",
              "8 000 – 25 000 €",
              "Connexion à la facturation et entretien annuel estimé à 1 500–4 000 €",
            ],
            [
              "Gestion de stock / commandes",
              "8 000 – 30 000 €",
              "Codes-barres, dépôts, inventaires et entretien estimé à 1 500–5 000 €/an",
            ],
            [
              "Planning / interventions terrain",
              "15 000 – 45 000 €",
              "Application mobile et entretien estimé à 2 500–8 000 €/an",
            ],
            [
              "Portail client (suivi de dossiers)",
              "18 000 – 70 000 €",
              "Utilisateurs, documents, paiement et entretien estimé à 3 000–10 000 €/an",
            ],
            [
              "Logiciel reliant plusieurs services",
              "50 000 – 120 000 €",
              "Processus, connexions et entretien estimé à 8 000–25 000 €/an",
            ],
            [
              "Automatisations entre outils",
              "500 – 5 000 € par flux",
              "Règles métier, surveillance et entretien estimé à 300–1 500 €/an",
            ],
          ]}
        />
        <p>
          Le prix dépend surtout du nombre de rôles, des connexions aux outils
          existants et du niveau de fiabilité attendu. Un planning isolé peut
          rester simple ; le relier à la paie, à une application mobile et à la
          facturation change le projet. Si vous traitez des données de santé,
          financières ou particulièrement sensibles, faites identifier les
          obligations applicables avant le devis : elles peuvent modifier
          l&apos;hébergement, les accès, les tests et la maintenance.
        </p>

        <h2 id="ecart-devis">5. Pourquoi deux devis peuvent tant varier</h2>
        <p>
          C&apos;est la vraie question derrière votre recherche : les pages que
          vous avez ouvertes annoncent des prix qui vont du simple au décuple.
          Cet écart a quatre explications fréquentes. Elles permettent de poser
          les bonnes questions, pas de juger un devis sans comprendre le projet
          :
        </p>
        <ul>
          <li>
            <strong>La liste de fonctions supposée.</strong> « Un CRM » peut
            vouloir dire 3 écrans ou 30. Sans cahier des charges commun, chaque
            agence chiffre un produit différent. Comparez les hypothèses avant
            de comparer les montants.
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
            personnes formées peut accepter une interface plus simple ; un
            portail ouvert à vos clients demande davantage de conception et de
            tests. Le niveau attendu peut donc changer fortement le budget.
          </li>
          <li>
            <strong>L&apos;usage — ou l&apos;affichage — de l&apos;IA.</strong>{" "}
            L&apos;IA peut réduire l&apos;effort sur certaines tâches, mais son
            effet sur un devis complet ne se déduit pas sans comparer le même
            ensemble de fonctions et les mêmes garanties. Demandez quelle ligne
            du devis diminue et qui contrôle le résultat.
          </li>
        </ul>
        <p>
          Le statut du prestataire change aussi ce que vous achetez, même à
          besoin égal :
        </p>
        <GuideTable
          headers={["Modèle", "Bon choix lorsque", "Compromis à contrôler"]}
          rows={[
            [
              "Freelance senior",
              "Un projet bien défini peut être porté par une personne",
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
        <InfoBox variant="emerald" title="Comparez les mêmes travaux">
          Un devis ne se juge jamais dans l&apos;absolu, mais sur la même liste
          de fonctions. Envoyez le même{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges
          </Link>{" "}
          à trois prestataires, exigez le détail en jours par poste.
          L&apos;écart devient alors explicable : fonctions prévues, composition
          d&apos;équipe, risques assumés, finition ou marge. Aucun ratio de
          réduction n&apos;est garanti.
        </InfoBox>

        <h3 id="methode-tjm">Contrôlez le nombre de jours</h3>
        <p>
          Vous n&apos;avez pas besoin d&apos;être développeur pour contrôler la
          logique d&apos;un devis. Demandez combien de jours sont prévus pour
          chaque résultat, puis multipliez-les par le prix d&apos;une journée de
          travail — souvent appelé taux journalier ou TJM. Un forfait peut aussi
          intégrer licences, risque, garantie ou sous-traitance : demandez-les
          séparément au lieu de les confondre avec l&apos;effort humain. Le{" "}
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
          détaille cette méthode : nombre de jours par résultat attendu, poids
          relatif de chaque poste et calcul du tarif implicite d&apos;un devis.
        </p>

        <h2 id="devis">6. Lire un devis ligne par ligne</h2>
        <p>
          Voici un <strong>exemple entièrement fictif</strong> pour un outil de
          gestion de tournées : planning, bons de livraison sur mobile et
          facturation connectée. Il montre comment vérifier le calcul ; il ne
          s&apos;agit ni d&apos;un devis client ni d&apos;un prix de marché. Le
          taux de 650 € HT par jour est l&apos;hypothèse pédagogique annoncée
          ci-dessus.
        </p>
        <FormulaBox>
          <strong>Devis « gestion de tournées » — 50 jours, 32 500 € HT</strong>
          <br />
          Compréhension du besoin et des règles (2 j) — 1 300 €
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
          liste des briques tierces doit être annexée. La section consacrée à la
          propriété précise les points à vérifier.
        </p>

        <InfoBox
          variant="blue"
          title="Rendre deux devis réellement comparables"
        >
          <p>
            Exigez pour chacun la même liste : compréhension du besoin,
            maquettes, développement, tests, reprise de données, formation, mise
            en production, garantie et maintenance. Faites écrire séparément les
            exclusions et les coûts qui dépendront d&apos;un service tiers.
            Enfin, chaque lot doit avoir un résultat observable, la personne qui
            le valide et ce qui vous est remis en cas d&apos;arrêt du projet.
          </p>
          <p className="mt-2">
            Sans ces éléments, le détail en jours donne une impression de
            précision, mais vous comparez encore des produits différents.
          </p>
        </InfoBox>

        <h2 id="tco">7. Comparer le coût total et les alternatives</h2>
        <p>
          Le devis de création n&apos;est pas le coût total. Les pourcentages et
          montants ci-dessous sont des hypothèses Hagnéré pour préparer une
          discussion, pas des moyennes du marché. Remplacez-les par le contrat
          de maintenance, les tarifs d&apos;hébergement et les besoins réels.
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
              "Listez les logiciels, données et échanges avant le devis",
            ],
          ]}
        />
        <p className="text-sm">
          * Hypothèse de charge publiée par LMS Design, l&apos;une des quatre
          grilles commerciales reliées plus haut. Convertissez-la avec le taux
          du devis et faites préciser les tests, la supervision et les
          abonnements éventuels.
        </p>
        <FormulaBox>
          <strong>Coût sur trois ans</strong>
          <br />
          = création ou mise en place
          <br />
          + 36 mois de licences et d&apos;hébergement
          <br />
          + maintenance, support et évolutions prévues
          <br />+ formation, reprise de données et temps interne
        </FormulaBox>
        <GuideTable
          headers={["Option", "Coûts à saisir", "Quand elle reste rationnelle"]}
          rows={[
            [
              "Conserver Excel ou l'outil actuel",
              "Temps interne, erreurs, sauvegardes et risque de dépendre d'une personne",
              "Usage rare, compris et sans conséquence critique",
            ],
            [
              "Logiciel par abonnement",
              "Abonnement × utilisateurs × 36 mois, mise en place, options et sortie",
              "Besoin standard déjà bien couvert",
            ],
            [
              "No-code ou automatisation",
              "Licences, assemblage, maintenance, volumes et reconstruction éventuelle",
              "Besoin simple à tester rapidement",
            ],
            [
              "Logiciel sur mesure",
              "Création, hébergement, maintenance, évolutions, formation et temps interne",
              "Règle métier spécifique ou gain mesurable",
            ],
          ]}
        />
        <InfoBox variant="amber" title="Quand remplacer un ancien logiciel">
          Faites chiffrer trois réponses : stabiliser l&apos;existant, remplacer
          progressivement les fonctions les plus risquées ou reconstruire avec
          reprise des données. L&apos;âge d&apos;Excel, Access ou WinDev ne
          suffit pas à décider ; regardez la dépendance à une personne, les
          sauvegardes, les erreurs et l&apos;impossibilité d&apos;évoluer.
        </InfoBox>
        <InfoBox variant="blue" title="Quand ne pas développer">
          Restez sur un produit du marché si le besoin est standard. Automatisez
          seulement la ressaisie si c&apos;est le vrai problème. Gardez le
          fichier actuel s&apos;il est maîtrisé et peu risqué. Reportez enfin le
          projet si personne dans l&apos;entreprise ne peut décider, tester et
          accompagner les utilisateurs.
        </InfoBox>

        <h2 id="juridique">
          8. Propriété du code : ce que le contrat doit prévoir
        </h2>
        <p>
          Payer le développement ne vous transfère pas automatiquement tous les
          droits sur le code. Le contrat doit préciser ce qui est cédé ou
          licencié, pour quels usages et à quel moment. L&apos;article L.131-3
          du Code de la propriété intellectuelle encadre notamment la cession.
          Les bibliothèques libres ou commerciales gardent leur propre licence
          et doivent être listées séparément. Faites adapter ces clauses à votre
          projet par un professionnel compétent. Notre guide{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            qui est propriétaire de votre site et de son code source
          </Link>{" "}
          fournit une checklist plus détaillée.
        </p>
        <p>Avant de signer, vérifiez quatre résultats très concrets :</p>
        <ul>
          <li>
            vos droits sur les développements créés spécialement pour vous sont
            écrits ;
          </li>
          <li>
            le code, les comptes administrateurs et la documentation peuvent
            être remis à votre entreprise ;
          </li>
          <li>
            les données sont exportables dans un format exploitable par un autre
            prestataire ;
          </li>
          <li>
            les composants appartenant à des tiers, leurs licences et leurs
            abonnements sont inventoriés.
          </li>
        </ul>
        <p>
          Ces points déterminent si un autre prestataire pourra reprendre le
          logiciel sans repartir de zéro. Demandez le délai, le format et le
          coût de cette remise avant de payer l&apos;acompte.
        </p>

        <GuideInlineCTA
          title="Vérifiez d'abord si un développement est nécessaire"
          description="Décrivez le processus, les personnes concernées et le temps perdu. Nous comparerons une amélioration de l'existant, un logiciel du marché, une automatisation et un projet sur mesure avant de proposer un budget."
          tags={[
            "Solutions simples comparées",
            "Budget expliqué poste par poste",
            "Décision avant devis",
          ]}
          ctaLabel="Décrire mon besoin"
        />

        <hr />
        <h2 id="sources">Sources et limites</h2>
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
          FAQ. Les scénarios resserrés sont des estimations Hagnéré construites
          à partir de ces grilles pour vous aider à lancer une comparaison ; ils
          ne constituent ni une moyenne ni une médiane du marché. Les prix et le
          contenu des offres évoluent : relevez-les à nouveau et demandez
          plusieurs devis portant sur les mêmes fonctions avant de décider.
        </p>

        <h3>Droit</h3>
        <ul className="text-sm">
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              Article L.131-3 du Code de la propriété intellectuelle
            </a>{" "}
            : la cession doit préciser les droits transmis et leur étendue.
          </li>
          <li>
            <a
              href="https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/cas-particulier-logiciels"
              target="_blank"
              rel="noopener noreferrer"
            >
              synthèse INPI sur les logiciels
            </a>
            : présentation générale de la protection d&apos;un logiciel et de
            ses différents éléments.
          </li>
        </ul>

        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont une synthèse Hagnéré des grilles
            commerciales citées, donnée à titre indicatif : seul un devis établi
            à partir de la liste exacte des fonctions, des contraintes et des
            services attendus vous engage. Ce guide ne constitue pas un conseil
            juridique personnalisé — pour une cession de droits ou un contrat,
            consultez un avocat.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
