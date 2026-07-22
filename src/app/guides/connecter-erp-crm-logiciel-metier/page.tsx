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

const guide = getGuide("connecter-erp-crm-logiciel-metier");

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
        alt: "Relier CRM, ERP et logiciel métier avec des erreurs visibles",
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
      name: "Connecter ERP, CRM et logiciel métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "L’ERP ou le CRM doit-il être le logiciel principal ?",
    answer:
      "Aucun des deux ne doit être principal pour toutes les informations par défaut. Le CRM peut faire foi pour une affaire commerciale, l’ERP pour une commande ou une facture et l’outil métier pour une intervention. Décidez au niveau de l’objet ou du champ et écrivez où chaque correction doit être faite.",
  },
  {
    question: "Faut-il synchroniser les données en temps réel ?",
    answer:
      "Seulement si votre activité ne peut pas accepter de délai. Une mise à jour planifiée peut être plus simple à surveiller. Écrivez d’abord combien de minutes ou d’heures peuvent s’écouler avant de bloquer la vente, la production, la facturation ou le service client.",
  },
  {
    question: "Une synchronisation dans les deux sens est-elle dangereuse ?",
    answer:
      "Elle devient risquée lorsque les deux logiciels peuvent corriger le même champ sans règle de conflit. Elle peut être envisagée si les champs modifiables, les identifiants, l’ordre des mises à jour et la personne qui tranche sont écrits puis testés.",
  },
  {
    question:
      "Quelle différence entre une API, une notification et une file d’attente ?",
    answer:
      "L’API permet de lire, d’envoyer ou de confirmer une information ; la notification signale qu’un événement a eu lieu ; la file garde une transmission en attente de traitement. Une connexion peut combiner ces rôles ou employer un autre moyen. Aucun des trois n’est obligatoire par principe.",
  },
  {
    question: "Comment vérifier qu’une transmission n’a pas été perdue ?",
    answer:
      "Comparez le nombre attendu avec les opérations acceptées, refusées et encore en attente. Chaque écart doit pouvoir être retrouvé grâce au numéro de l’opération et au numéro de trace. L’absence de message d’erreur ne confirme pas à elle seule le résultat métier.",
  },
  {
    question: "Peut-on connecter un ancien logiciel sans API ?",
    answer:
      "Parfois, un export et un import documentés suffisent ; parfois, une étape manuelle contrôlée reste préférable. Vérifiez les formats, la fréquence, les droits, les refus et la maintenance avant d’automatiser des clics sur une interface qui peut changer.",
  },
  {
    question: "Peut-on tester la connexion avec de vraies données clients ?",
    answer:
      "Commencez avec des données fictives ou réellement anonymisées dans un environnement séparé de la production. Si votre situation exige d’aller plus loin, faites analyser les protections et responsabilités applicables au lieu de recopier les dossiers clients dans un test ordinaire.",
  },
];

const pilotQuestions = [
  {
    title: "Résultat attendu",
    text: "Que doit voir l’équipe dans le logiciel d’arrivée : une commande créée, une intervention ouverte ou un statut mis à jour ?",
  },
  {
    title: "Déclenchement",
    text: "Quel fait lance l’envoi : affaire gagnée, commande validée, intervention terminée ou import à heure fixe ?",
  },
  {
    title: "Délai acceptable",
    text: "Combien de minutes ou d’heures l’activité peut-elle attendre avant qu’une personne soit bloquée ?",
  },
  {
    title: "Volume observé",
    text: "Combien d’objets passent un jour normal et lors d’une pointe, avec combien de corrections ou d’annulations ?",
  },
];

const ownershipExamples = [
  {
    title: "Affaire commerciale",
    owner: "Le CRM la crée et la corrige jusqu’à la vente.",
    readers: "L’ERP lit seulement ce qui devient nécessaire après validation.",
  },
  {
    title: "Adresse de facturation",
    owner:
      "L’ERP la corrige si c’est l’adresse utilisée pour émettre la facture.",
    readers:
      "Le CRM peut l’afficher, mais une correction commerciale ne remplace pas silencieusement la version validée pour facturer.",
  },
  {
    title: "Intervention",
    owner: "Le logiciel métier gère sa date, son technicien et son état.",
    readers:
      "L’ERP reçoit uniquement le résultat utile à la suite de la commande ou de la facturation.",
  },
  {
    title: "Numéro de facture",
    owner: "Le logiciel de facturation compétent le crée et le conserve.",
    readers:
      "Les autres outils l’utilisent pour retrouver la facture sans fabriquer leur propre numéro.",
  },
];

const transportRoles = [
  {
    title: "La notification signale",
    text: "Elle prévient qu’une affaire a été gagnée ou qu’un statut a changé. Certains éditeurs parlent de webhook. Elle ne confirme pas à elle seule que le travail suivant est terminé.",
  },
  {
    title: "La file garde en attente",
    text: "Elle conserve une transmission jusqu’à son traitement. Elle doit aussi montrer ce qui attend trop longtemps et ce qui ne peut plus être traité automatiquement.",
  },
  {
    title: "L’API transmet ou confirme",
    text: "Cette interface documentée permet à un logiciel de lire, d’envoyer ou de confirmer une information. Ses fonctions réelles dépendent de chaque éditeur.",
  },
];

const identifiers = [
  {
    title: "Numéro métier",
    value: "CMD-1042",
    text: "Il identifie la commande, le client ou l’intervention que les équipes connaissent.",
  },
  {
    title: "Numéro de l’opération",
    value: "OP-CMD-1042-CREATION-V1",
    text: "Il permet de reconnaître qu’un nouvel essai correspond au même envoi et ne doit pas créer un second effet.",
  },
  {
    title: "Numéro de trace",
    value: "TR-20260722-00017",
    text: "Il relie les étapes et les journaux pour retrouver où la transmission s’est arrêtée.",
  },
];

const failureCases = [
  {
    title: "La même transmission arrive deux fois",
    situation: "Le logiciel d’envoi relance une opération déjà traitée.",
    expected:
      "Le même numéro d’opération retrouve le résultat existant au lieu de créer une seconde commande.",
  },
  {
    title: "La réponse se perd",
    situation:
      "La destination a traité la demande, mais l’accusé n’arrive jamais.",
    expected:
      "Le nouvel essai retrouve l’objet déjà créé et rend les deux tentatives visibles.",
  },
  {
    title: "Les informations arrivent dans le mauvais ordre",
    situation: "Une mise à jour arrive avant la création de l’objet.",
    expected:
      "Elle attend, elle est refusée avec un motif ou suit une règle écrite ; elle ne corrige pas silencieusement autre chose.",
  },
  {
    title: "Deux personnes modifient le même champ",
    situation:
      "L’adresse change dans le CRM et dans l’ERP avant l’échange suivant.",
    expected:
      "La règle de conflit choisit la version autorisée ou crée une décision humaine attribuée.",
  },
  {
    title: "Le logiciel d’arrivée ne répond plus",
    situation: "La destination est indisponible pendant plusieurs essais.",
    expected:
      "Les essais s’arrêtent après la limite écrite ; l’envoi reste en attente ou rejoint une liste surveillée.",
  },
  {
    title: "Une partie du lot est refusée",
    situation:
      "Quelques commandes manquent d’un champ ou ne respectent pas le format attendu.",
    expected:
      "Les réussites restent acquises ; chaque refus porte un motif, une personne responsable et une action de reprise.",
  },
];

const contractSections = [
  {
    number: "1",
    title: "Résultat pour l’entreprise",
    fields: [
      "Objet et trajet précis",
      "Action qui déclenche l’échange",
      "Résultat visible attendu dans le logiciel d’arrivée",
      "Délai maximal acceptable pour le travail",
    ],
  },
  {
    number: "2",
    title: "Création et corrections",
    fields: [
      "Logiciel où l’objet est créé",
      "Logiciel où chaque champ est corrigé",
      "Rôles autorisés à créer ou corriger",
      "Outils et personnes qui ne font que lire",
    ],
  },
  {
    number: "3",
    title: "Sens de circulation",
    fields: [
      "Source et destination",
      "Sens unique ou champs autorisés dans les deux sens",
      "Règle si deux valeurs se contredisent",
      "Personne qui tranche le conflit",
    ],
  },
  {
    number: "4",
    title: "Informations transmises",
    fields: [
      "Champs nécessaires dans la destination",
      "Champs volontairement exclus",
      "Volume normal et volume de pointe observés",
      "Documentation et limites actuelles de l’interface",
    ],
  },
  {
    number: "5",
    title: "Trois numéros",
    fields: [
      "Identifiant de l’objet métier",
      "Identifiant stable de l’opération",
      "Identifiant de trace du parcours",
      "Endroit où chacun peut être retrouvé",
    ],
  },
  {
    number: "6",
    title: "Réponse et cas anormaux",
    fields: [
      "Confirmation attendue de la destination",
      "Même envoi reçu plusieurs fois",
      "Mise à jour reçue avant la création",
      "Panne, limite des essais et fonctionnement manuel temporaire",
    ],
  },
  {
    number: "7",
    title: "Refus et reprise",
    fields: [
      "Vue des acceptés, refusés et en attente",
      "Personne alertée et personne qui corrige",
      "Personne autorisée à relancer",
      "Résultat qui permet de fermer le refus",
    ],
  },
  {
    number: "8",
    title: "Accès et tests",
    fields: [
      "Données personnelles réellement nécessaires",
      "Droits de lecture et de modification",
      "Jeu de données fictif ou réellement anonymisé",
      "Propriétaire du document et date de prochaine revue",
    ],
  },
];

const acceptanceTests = [
  {
    title: "Envoi normal",
    action: "Envoyer une nouvelle opération valide.",
    result:
      "Un seul objet correct apparaît et la destination confirme le résultat attendu.",
  },
  {
    title: "Même envoi deux fois",
    action: "Renvoyer le même numéro d’opération.",
    result: "Le compte d’objets distincts ne change pas.",
  },
  {
    title: "Réponse perdue",
    action:
      "Traiter l’envoi, puis supprimer seulement sa réponse dans le test.",
    result: "Le nouvel essai retrouve le résultat sans le recréer.",
  },
  {
    title: "Arrivée dans le mauvais ordre",
    action: "Envoyer une mise à jour avant la création.",
    result: "Le résultat suit la règle écrite et reste visible.",
  },
  {
    title: "Destination indisponible",
    action: "Interrompre le logiciel d’arrivée dans l’environnement de test.",
    result:
      "Les essais sont limités puis l’état final apparaît dans la vue prévue.",
  },
  {
    title: "Refus partiel",
    action: "Rendre trois opérations invalides dans le lot fictif.",
    result: "Les réussites, les refus et les attentes sont comptés séparément.",
  },
  {
    title: "Correction puis nouvel essai",
    action: "Corriger seulement les refus et les renvoyer.",
    result:
      "Le total final revient au nombre attendu sans répéter les réussites.",
  },
  {
    title: "Conflit de correction",
    action: "Modifier le même champ des deux côtés.",
    result:
      "La règle écrite s’applique ou une personne reçoit la décision à prendre.",
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
          { label: "Connecter ERP, CRM et logiciel métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre commercial corrige une adresse dans le CRM, la comptabilité dans l’ERP : laquelle part sur la facture ? Écrivez qui peut modifier quoi et comment reprendre une erreur."
        heroAction={{
          href: "#contrat-circulation",
          label: "Voir le contrat à copier",
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
            title: "1 objet pilote",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "3 numéros différents",
            description: "",
            color: "blue",
          },
          {
            number: "06",
            title: "6 cas à prévoir",
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
            href: "/guides/automatiser-saisie-donnees-entreprise",
            label: "Choisir la saisie à supprimer avant de connecter",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "Choisir entre ERP, module et logiciel sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Intégrer les échanges au cahier des charges",
          },
          {
            href: "/guides/migrer-logiciel-metier-sans-interruption",
            label: "Préparer une migration si un outil doit être remplacé",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes et applications métier",
          },
        ]}
        faqTitle="Connecter vos logiciels : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Votre commercial corrige l’adresse d’un client dans le CRM, le
            logiciel qui suit prospects et ventes. La comptabilité la corrige
            aussi dans l’ERP, le logiciel qui gère commandes et factures. Quelle
            adresse partira sur la prochaine facture ?
          </strong>{" "}
          Brancher les outils ne règle pas ce désaccord. Pour chaque client,
          commande ou intervention, choisissez où chaque information est créée
          et corrigée. Faites-la circuler dans un seul sens par défaut.
          N’autorisez les modifications dans les deux sens que si vous avez
          écrit quelle version l’emporte et qui traite le conflit. Enfin, chaque
          envoi refusé, retardé ou répété doit rester visible et pouvoir être
          repris sans créer un second dossier. Ce guide vous aide à commencer
          par un objet, à écrire ces règles et à tester la connexion avant de
          l’utiliser avec vos équipes.
        </p>

        <p>
          Le but n’est pas de dessiner toute votre informatique. Prenez un objet
          que les équipes connaissent et suivez-le du premier logiciel au
          résultat final. Vous pourrez alors décider de connecter, de limiter
          l’échange, d’utiliser un import contrôlé ou de garder une étape
          manuelle.
        </p>

        <InfoBox
          variant="blue"
          title="La réponse à écrire avant de choisir un connecteur"
        >
          Pour cet objet et ces champs, ce logiciel crée et corrige. L’autre lit
          ou reçoit dans ce sens précis. Chaque envoi porte trois numéros. Un
          refus apparaît dans cette liste, cette personne le corrige et le
          relance. Cette règle est une recommandation Hagnéré Code : elle doit
          être adaptée aux fonctions et engagements réels de vos éditeurs.
        </InfoBox>

        <GuideToc
          items={[
            { id: "objet-pilote", label: "1. Choisir un seul objet pilote" },
            {
              id: "qui-corrige",
              label: "2. Décider qui crée, corrige et lit",
            },
            {
              id: "sens-circulation",
              label: "3. Commencer par un seul sens",
            },
            {
              id: "roles-techniques",
              label: "4. Comprendre notification, file et API",
            },
            { id: "trois-numeros", label: "5. Séparer trois numéros" },
            {
              id: "cas-anormaux",
              label: "6. Prévoir doublon, ordre, conflit et panne",
            },
            {
              id: "erreurs-visibles",
              label: "7. Garder chaque erreur visible",
            },
            {
              id: "contrat-circulation",
              label: "8. Copier le contrat de circulation",
            },
            {
              id: "test-fictif",
              label: "9. Tester la reprise sur 90 opérations fictives",
            },
            {
              id: "ne-pas-connecter",
              label: "10. Savoir quand ne pas connecter",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="objet-pilote">
          1. Commencez par un seul client, une seule commande ou une seule
          intervention
        </h2>

        <p>
          « Connecter le CRM et l’ERP » reste trop vague pour être testé. Une
          affaire gagnée peut créer un client, une commande et, plus tard, une
          intervention. Chacun de ces objets possède ses propres informations,
          ses personnes responsables et son délai utile. Commencez par celui
          dont l’absence bloque réellement le travail.
        </p>

        <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
          {pilotQuestions.map((question) => (
            <div
              key={question.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mt-0 text-base font-semibold text-zinc-950 dark:text-white">
                {question.title}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {question.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Pour l’exemple du guide, l’objet retenu sera un ordre d’intervention.
          Le déclenchement sera la validation d’une commande dans l’ERP. Le
          résultat attendu sera une seule intervention ouverte dans l’outil
          métier, rattachée au bon client et au bon site.
        </p>

        <p>
          La documentation de{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-platform/architecture/key-concepts/integration-patterns/requirements"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft sur les exigences d’une intégration
          </a>{" "}
          demande notamment d’examiner le volume, la fréquence, le sens, le
          déclenchement et les fonctions disponibles dans chaque système. Cette
          documentation appartient à l’écosystème Power Platform ; les questions
          restent utiles ailleurs, mais les fonctions doivent être vérifiées
          auprès de chaque éditeur.
        </p>

        <p>
          Si vous n’avez pas encore choisi la donnée qui mérite cet effort,
          commencez par{" "}
          <Link href="/guides/automatiser-saisie-donnees-entreprise">
            suivre une ressaisie de bout en bout
          </Link>{" "}
          avant de financer une connexion.
        </p>

        <h2 id="qui-corrige">
          2. Décidez qui crée, qui corrige et qui lit chaque information
        </h2>

        <p>
          Un ERP peut réunir commandes, achats, stocks, facturation ou
          comptabilité selon le produit. Un CRM suit plutôt prospects, clients,
          opportunités et échanges commerciaux. Le{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide France Num sur le choix d’un ERP
          </a>{" "}
          rappelle que les fonctions et la possibilité de communiquer avec les
          outils conservés doivent être vérifiées. Il ne désigne pas pour autant
          l’ERP comme propriétaire de toutes les informations.
        </p>

        <p>
          <strong>Recommandation Hagnéré Code :</strong> désignez l’endroit où
          chaque objet, voire chaque champ, est créé ou corrigé. Les autres
          logiciels le lisent ou reçoivent uniquement ce dont ils ont besoin. Le
          mot « référence » décrit ici une décision de l’entreprise, pas une
          norme imposant le même choix à toutes les organisations.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {ownershipExamples.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="mt-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Qui crée ou corrige :</strong> {item.owner}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Qui lit :</strong> {item.readers}
              </p>
            </div>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="L’adresse de la facture doit avoir une seule règle"
        >
          Si l’ERP est l’endroit où l’adresse de facturation est validée, une
          correction dans le CRM ne doit pas l’écraser silencieusement. Elle
          peut déclencher une demande de vérification. À l’inverse, un contact
          commercial peut rester corrigé dans le CRM sans devenir une donnée de
          facturation.
        </InfoBox>

        <h2 id="sens-circulation">
          3. Gardez un seul sens tant que vous ne savez pas résoudre un conflit
        </h2>

        <p>
          Une synchronisation dans les deux sens semble plus complète. Elle
          autorise aussi deux logiciels à produire des versions concurrentes.
          Commencer dans un seul sens est une recommandation Hagnéré Code,
          fondée sur cette difficulté : ce n’est ni une obligation technique ni
          une règle juridique.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
            <h3 className="mt-0 text-base font-semibold text-emerald-900 dark:text-emerald-300">
              Un seul sens pour commencer
            </h3>
            <p className="mb-0 text-sm leading-relaxed text-emerald-800 dark:text-emerald-400">
              L’ERP crée l’ordre dans l’outil métier. L’outil métier ne modifie
              pas la commande. Les responsabilités et la correction restent
              faciles à expliquer aux équipes.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-800 dark:bg-blue-950/30">
            <h3 className="mt-0 text-base font-semibold text-blue-900 dark:text-blue-300">
              Deux sens seulement avec six réponses
            </h3>
            <ol className="mb-0 space-y-1.5 pl-5 text-sm leading-relaxed text-blue-800 dark:text-blue-400">
              <li>Quels champs chaque logiciel peut-il modifier ?</li>
              <li>Comment reconnaît-on le même objet des deux côtés ?</li>
              <li>Quelle valeur gagne si deux personnes corrigent ?</li>
              <li>Que faire si la seconde modification arrive en premier ?</li>
              <li>Comment empêcher une boucle de mises à jour ?</li>
              <li>Qui tranche les conflits restants ?</li>
            </ol>
          </div>
        </div>

        <p>
          La règle « la dernière modification gagne » ne suffit pas si les deux
          logiciels n’ont pas la même heure, si une correction ancienne arrive
          en retard ou si le dernier changement est une erreur. Lorsque la
          réponse métier reste inconnue, affichez le champ en lecture seule dans
          le second outil ou demandez une décision humaine.
        </p>

        <p>
          Le même raisonnement vaut pour le délai. N’achetez pas du « temps réel
          » par réflexe. Écrivez le délai maximal que la vente, la production ou
          la facturation peut accepter, puis choisissez le fonctionnement le
          plus simple qui le respecte.
        </p>

        <h2 id="roles-techniques">
          4. Comprenez ce que l’API, la notification et la file font vraiment
        </h2>

        <p>
          Ces trois mots décrivent des rôles différents. Ils ne forment pas une
          liste d’achats obligatoire et peuvent être combinés, remplacés ou
          absents selon les fonctions réelles des logiciels.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
          {transportRoles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mt-0 text-base font-semibold text-zinc-950 dark:text-white">
                {role.title}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {role.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Une notification « commande validée » peut ainsi lancer une lecture
          par API. Si la destination est indisponible, une zone d’attente peut
          garder l’opération. Ce montage n’est qu’un exemple. Demandez surtout
          qui confirme que l’intervention existe réellement, combien de temps un
          envoi peut attendre et où apparaissent les échecs définitifs.
        </p>

        <h2 id="trois-numeros">
          5. Donnez trois numéros différents au même envoi
        </h2>

        <p>
          Un numéro de commande ne suffit pas à expliquer plusieurs tentatives
          de transmission. La séparation suivante est une recommandation Hagnéré
          Code, issue des besoins distincts documentés pour reconnaître une
          opération et suivre son parcours. Les noms techniques peuvent changer
          d’un produit à l’autre.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
          {identifiers.map((identifier, index) => (
            <div
              key={identifier.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="text-xs font-black text-violet-600 dark:text-violet-400">
                NUMÉRO {index + 1}
              </span>
              <h3 className="mb-2 mt-2 text-base font-semibold text-zinc-950 dark:text-white">
                {identifier.title}
              </h3>
              <p className="mb-2 font-mono text-xs text-zinc-900 dark:text-zinc-100">
                {identifier.value} — exemple fictif
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {identifier.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Le numéro métier aide les équipes. Le numéro d’opération indique «
          c’est bien le même envoi ». Le numéro de trace aide à retrouver son
          chemin. Demandez à voir les trois lors des tests, sans exiger que tous
          les éditeurs utilisent exactement ces libellés.
        </p>

        <h2 id="cas-anormaux">
          6. Prévoyez les six façons dont une transmission peut mal se terminer
        </h2>

        <p>
          Le comportement dépend du contrat de chaque éditeur. Dans son service
          Azure Service Bus,{" "}
          <a
            href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-message-loss-and-duplicates"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft documente des messages qui peuvent être livrés plusieurs
            fois
          </a>{" "}
          et explique l’usage d’un identifiant pour reconnaître une répétition.
          De son côté,{" "}
          <a
            href="https://docs.stripe.com/webhooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe documente pour ses propres webhooks
          </a>{" "}
          de nouvelles tentatives, des doublons possibles et l’absence de
          garantie d’ordre. Ces exemples ne décrivent pas toutes les API : ils
          montrent pourquoi il faut lire et tester le fonctionnement du produit
          réellement choisi.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {failureCases.map((failure, index) => (
            <div
              key={failure.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Cas {index + 1}
              </p>
              <h3 className="mt-0 text-base font-semibold text-zinc-950 dark:text-white">
                {failure.title}
              </h3>
              <p className="mb-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Situation :</strong> {failure.situation}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Résultat à obtenir :</strong> {failure.expected}
              </p>
            </div>
          ))}
        </div>

        <h2 id="erreurs-visibles">
          7. Gardez chaque erreur visible jusqu’à sa correction
        </h2>

        <p>
          Une tentative automatique peut être utile pour une panne courte. Elle
          doit avoir une limite. Lorsqu’une erreur persiste, l’opération doit
          rester visible avec son motif, son état et la personne qui peut agir.
          « Réessayer pour toujours » cache la panne et retarde le moment où
          l’entreprise s’en aperçoit.
        </p>

        <FormulaBox>
          {[
            "COMPTE À RAPPROCHER",
            "",
            "Opérations attendues",
            "= opérations acceptées",
            "+ opérations refusées",
            "+ opérations encore en attente",
            "",
            "Chaque différence doit être retrouvée et expliquée.",
          ].join("\n")}
        </FormulaBox>

        <p>
          La vue des erreurs doit répondre à cinq questions : qu’a-t-on tenté,
          quand, pour quel numéro d’opération, pourquoi cela a-t-il échoué et
          qui s’en occupe ? Après correction, la personne relance uniquement les
          opérations concernées et vérifie leur état final.
        </p>

        <p>
          Lorsque la connexion traite des données personnelles, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-tracer-les-operations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de tracer les opérations utiles et de surveiller les
            journaux
          </a>
          . Elle précise aussi que les traces ne doivent pas recopier
          inutilement les données. Gardez donc les identifiants et informations
          nécessaires pour comprendre l’incident, limitez les accès et fixez une
          durée adaptée. Cette règle générale ne vaut pas validation RGPD de
          votre projet.
        </p>

        <h2 id="contrat-circulation">
          8. Copiez le contrat de circulation d’une donnée
        </h2>

        <p>
          Copiez ces huit cartes dans un document partagé et remplissez-les pour
          un seul objet et un seul trajet. Utilisez des rôles et des
          identifiants fictifs, sans coller de noms, d’adresses ou de pièces de
          vrais clients. Une case inconnue n’est pas un échec : elle devient une
          question à poser à l’éditeur ou au prestataire avant le devis.
        </p>

        <ol className="not-prose my-7 grid list-none gap-4 p-0 md:grid-cols-2">
          {contractSections.map((section) => (
            <li
              key={section.number}
              className="select-text rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm font-black text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  {section.number}
                </span>
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {section.title}
                </h3>
              </div>
              <ul className="mb-0 space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {section.fields.map((field) => (
                  <li key={field}>{field} : ____________________</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <InfoBox variant="emerald" title="Ce document reste chez vous">
          La version affichée ne transmet aucune donnée à Hagnéré Code. Vous
          pouvez la copier dans votre outil habituel, la remplir en interne et
          décider de ne pas investir si les responsabilités ou les fonctions des
          logiciels restent trop incertaines.
        </InfoBox>

        <p>
          Une fois l’objet pilote décrit, vous pouvez{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            intégrer ce trajet dans un cahier des charges plus complet
          </Link>
          . Ne transformez pas pour autant cette fiche en description de toute
          l’entreprise : répétez-la seulement pour les objets qui méritent
          réellement une connexion.
        </p>

        <h2 id="test-fictif">
          9. Testez la reprise sur 90 opérations fictives
        </h2>

        <h3>Exemple illustratif fictif : 30 affaires et 90 opérations</h3>

        <p>
          Cet exemple ne décrit ni un client ni un résultat Hagnéré Code. Une
          entreprise fictive de maintenance traite 30 affaires gagnées. Le
          scénario prévoit trois opérations par affaire : créer ou rattacher la
          commande dans l’ERP, ouvrir l’intervention dans l’outil métier, puis
          renvoyer le statut de fin utile à l’ERP.
        </p>

        <FormulaBox>
          {[
            "30 affaires × 3 opérations par affaire = 90 opérations attendues",
            "",
            "Premier passage :",
            "85 acceptées + 3 refusées + 2 en attente = 90 attendues",
            "",
            "Après correction et reprise :",
            "90 opérations distinctes acceptées + 0 refusée + 0 en attente",
            "= 90 attendues",
          ].join("\n")}
        </FormulaBox>

        <GuideTable
          caption="Rapprochement des 90 opérations de l’exemple fictif"
          headers={["Moment du test", "Compte observé", "Décision"]}
          rows={[
            [
              "Premier passage",
              "85 acceptées + 3 refusées + 2 en attente = 90",
              "Ne pas ouvrir la connexion aux équipes tant que les cinq opérations ne sont pas expliquées.",
            ],
            [
              "Après correction",
              "90 distinctes acceptées + 0 refusée + 0 en attente = 90",
              "Vérifier que seules les trois refusées et les deux en attente ont changé d’état.",
            ],
            [
              "Après perte de cinq réponses",
              "90 distinctes avant, cinq essais répétés, 90 distinctes après",
              "Refuser le test si le compte passe à 95 ou si les cinq essais ne peuvent pas être retrouvés.",
            ],
          ]}
        />

        <p>
          Le test simule ensuite la perte de cinq accusés de réception. Les cinq
          mêmes opérations sont renvoyées avec le même numéro d’opération. Le
          résultat attendu reste <strong>90 opérations distinctes</strong>, pas
          95. Une opération « acceptée » signifie ici que la destination a
          confirmé le résultat prévu pour le métier, pas seulement la réception
          d’un message technique.
        </p>

        <h3>Testez hors de la production</h3>

        <p>
          Utilisez un environnement séparé et des données fictives ou réellement
          anonymisées. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de séparer les environnements et d’employer autant
            que possible des données fictives ou anonymisées pour les tests
          </a>
          . Une donnée seulement remplacée par un numéro peut encore permettre
          d’identifier une personne et reste alors à protéger.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {acceptanceTests.map((test, index) => (
            <div
              key={test.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Essai {index + 1}
              </p>
              <h3 className="mt-0 text-base font-semibold text-zinc-950 dark:text-white">
                {test.title}
              </h3>
              <p className="mb-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Action :</strong> {test.action}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Résultat attendu :</strong> {test.result}
              </p>
            </div>
          ))}
        </div>

        <h2 id="ne-pas-connecter">
          10. Ne connectez pas tant que personne ne peut reprendre une erreur
        </h2>

        <p>
          Une connexion n’est pas automatiquement meilleure qu’un import ou une
          étape manuelle. Le coût et le délai dépendent des logiciels, des
          volumes, des règles, des tests et de la maintenance ; ce guide ne
          fournit donc ni fourchette universelle ni calendrier promis.
        </p>

        <GuideTable
          caption="Choisir une solution proportionnée à la situation"
          headers={["Situation observée", "Choix raisonnable", "Pourquoi"]}
          rows={[
            [
              "Le volume est faible et un import contrôlé montre clairement ses refus.",
              "Garder l’import.",
              "La connexion permanente ajouterait plus de surveillance que de travail évité.",
            ],
            [
              "Une personne doit seulement consulter l’information de temps en temps.",
              "Donner un accès adapté ou une vue en lecture seule.",
              "Copier l’information créerait une nouvelle version à maintenir.",
            ],
            [
              "Personne ne sait où corriger la donnée ou qui traite les erreurs.",
              "Reporter et décider des responsabilités.",
              "Le logiciel propagerait le désaccord sans pouvoir le résoudre.",
            ],
            [
              "L’éditeur ne propose ni interface stable ni export documenté.",
              "Conserver une étape manuelle ou réexaminer l’outil.",
              "Automatiser des clics sur une interface changeante peut créer une dépendance fragile.",
            ],
            [
              "Un objet fréquent, stable et utile possède un responsable et des refus surveillés.",
              "Tester une connexion limitée.",
              "Le besoin est assez précis pour être observé, corrigé et accepté avant généralisation.",
            ],
          ]}
        />

        <p>
          Hagnéré Code est pertinent si plusieurs logiciels doivent échanger un
          objet utile et fréquent, si les personnes responsables peuvent être
          nommées et si vous avez besoin d’auditer ou de construire la reprise.
          Une comparaison d’ERP, un import ponctuel ou une demande de garantie
          sans personne pour surveiller les erreurs ne correspondent pas à cette
          intervention.
        </p>

        <p>
          Si vous remplacez l’un des logiciels au lieu de le conserver, préparez
          plutôt{" "}
          <Link href="/guides/migrer-logiciel-metier-sans-interruption">
            la bascule et le retour à l’ancien outil en cas d’échec
          </Link>
          . Une migration temporaire et une connexion permanente ne se testent
          pas de la même manière.
        </p>

        <GuideInlineCTA
          title="Obtenir la carte du flux à fiabiliser"
          description="Apportez un objet réel, les logiciels concernés et un exemple d’erreur sans donnée personnelle. Nous représentons où l’information est corrigée, ce que la destination confirme et comment reprendre un refus avant de parler de développement."
          tags={[
            "Un objet précis",
            "Une erreur à reprendre",
            "Une étape manuelle possible",
          ]}
          ctaLabel="Obtenir la carte du flux à fiabiliser"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites</h2>

        <p>
          Les documents ci-dessous ont été consultés le 22 juillet 2026. Les
          pages Microsoft et Stripe décrivent leurs propres produits ou
          écosystèmes ; elles illustrent des comportements à vérifier, sans les
          généraliser à toutes les connexions. Les choix « référence par objet
          », « un seul sens par défaut » et « trois numéros » sont des
          recommandations Hagnéré Code, pas des normes.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — Pourquoi et comment choisir un ERP ?
            </a>
            , pour la définition, les fonctions à examiner et la capacité à
            communiquer avec les outils conservés.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/api-les-recommandations-de-la-cnil-sur-le-partage-de-donnees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — recommandations sur le partage de données par API
            </a>
            , pour les rôles, les droits, la limitation des accès et la
            traçabilité lorsque des données personnelles sont concernées.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — tracer les opérations
            </a>
            , pour le contenu, l’accès et la surveillance des journaux.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — encadrer les développements informatiques
            </a>
            , pour la séparation des environnements et les données de test.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/power-platform/architecture/key-concepts/integration-patterns/requirements"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — déterminer les exigences d’une intégration
            </a>
            , pour le volume, la fréquence, le sens, le déclenchement et les
            fonctions disponibles.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-message-loss-and-duplicates"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — pertes et doublons dans Azure Service Bus
            </a>
            , limité à ce service, pour l’exemple des transmissions répétées.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/webhooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe Docs — webhooks
            </a>
            , limité à Stripe, pour les nouvelles tentatives, les doublons et
            l’ordre de livraison documentés par le fournisseur.
          </li>
          <li>
            <a
              href="https://spec.openapis.org/oas/latest.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAPI Specification
            </a>
            , pour demander une description actuelle des opérations, demandes,
            réponses et erreurs d’une interface HTTP.
          </li>
        </ul>

        <p>
          Ce guide ne vérifie ni vos logiciels, ni leurs contrats, ni vos droits
          sur les données. Il ne certifie pas une connexion, sa sécurité ou sa
          conformité. La décision finale doit partir de la documentation, des
          accès, des données et des essais propres à votre entreprise.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
