import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideTable,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { ProcessPriorityTool } from "./process-priority-tool";

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
        alt: "Choisir le premier processus métier à automatiser",
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
    name: "Guides Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: SITE_URL + "/equipe",
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

const toc = [
  {
    id: "premiere-reponse",
    number: "01",
    label: "La réponse courte",
    shortLabel: "Commencer",
  },
  {
    id: "carte-processus",
    number: "02",
    label: "Cartographier le travail",
    shortLabel: "Cartographier",
  },
  {
    id: "portes",
    number: "03",
    label: "Écarter les mauvais candidats",
    shortLabel: "Écarter",
  },
  {
    id: "options",
    number: "04",
    label: "Comparer sept réponses",
    shortLabel: "Comparer",
  },
  {
    id: "calcul",
    number: "05",
    label: "Calculer le temps réaffecté",
    shortLabel: "Calculer",
  },
  {
    id: "exemple",
    number: "06",
    label: "Lire un exemple complet",
    shortLabel: "Exemple",
  },
  {
    id: "pilote",
    number: "07",
    label: "Préparer un pilote",
    shortLabel: "Tester",
  },
  {
    id: "responsabilites",
    number: "08",
    label: "Nommer les responsables",
    shortLabel: "Responsabilités",
  },
  {
    id: "securite",
    number: "09",
    label: "Sécurité, données et reprise",
    shortLabel: "Sécuriser",
  },
  {
    id: "decision",
    number: "10",
    label: "Prendre la décision",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "choix",
    num: "01",
    label: "Choisir le processus",
    items: [
      {
        question: "Quel processus faut-il automatiser en premier ?",
        answer:
          "Choisissez un processus fréquent, dont le volume et le résultat sont mesurés, dont les règles sont assez stables et dont les données sont fiables. Une personne doit aussi pouvoir le reprendre à la main. Le temps consommé compte, mais il ne compense jamais un résultat invérifiable ou une erreur impossible à annuler.",
      },
      {
        question: "Une tâche très pénible est-elle forcément prioritaire ?",
        answer:
          "Non. Elle mérite d’être observée, mais une tâche rare, très variable ou dépendante d’un jugement humain peut être un mauvais premier essai. Mesurez son volume et ses exceptions, puis comparez-la à des tâches moins visibles mais plus régulières.",
      },
      {
        question: "Quand faut-il décider de ne pas automatiser ?",
        answer:
          "Reportez le projet si personne ne sait définir le résultat correct, si les données sont peu fiables, si les règles changent souvent ou si l’erreur serait difficile à détecter et à corriger. Simplifier la procédure ou mieux utiliser l’outil actuel peut suffire.",
      },
    ],
  },
  {
    key: "solution",
    num: "02",
    label: "Choisir la solution",
    items: [
      {
        question: "Faut-il commencer par un outil no-code ?",
        answer:
          "Pas automatiquement. Un outil no-code permet d’enchaîner des actions sans créer une application complète. Mais une fonction déjà comprise dans votre logiciel ou un connecteur natif demande souvent moins d’éléments à surveiller. Vérifiez dans tous les cas les limites, le propriétaire, les alertes et le coût au volume réel.",
      },
      {
        question:
          "Quelle différence entre un connecteur et un robot d’interface ?",
        answer:
          "Un connecteur ou une API échange des données par une interface prévue par les logiciels. Un robot d’interface pilote les éléments d’un écran au moyen de sélecteurs. Il peut servir lorsqu’aucune interface exploitable n’existe, mais une modification de l’écran, une fenêtre inattendue ou une session expirée doit être testée.",
      },
      {
        question: "Quand l’intelligence artificielle apporte-t-elle quelque chose ?",
        answer:
          "Elle peut aider lorsque l’entrée varie, par exemple pour classer un message ou extraire des champs d’un document. Mesurez sa qualité sur des cas représentatifs et gardez une validation humaine lorsque l’erreur touche une personne, un prix, un contrat ou une action difficile à annuler.",
      },
    ],
  },
  {
    key: "economie-risque",
    num: "03",
    label: "Coût, sécurité et suivi",
    items: [
      {
        question:
          "Comment valoriser le temps gagné sans gonfler le retour sur investissement (ROI) ?",
        answer:
          "Séparez les heures techniquement retirables, celles réellement retirées après adoption et celles affectées à un travail utile identifié. Leur valorisation au coût horaire mesure une capacité, pas une économie de trésorerie. Une dépense n’est évitée que si une heure supplémentaire, une prestation, un recrutement ou un autre paiement disparaît réellement, sans compter deux fois la même valeur.",
      },
      {
        question: "Quels coûts faut-il comparer au gain ?",
        answer:
          "Additionnez la préparation, la réalisation, le temps de vos équipes, les abonnements, le suivi, la maintenance et la sortie sur une même période. Ajoutez les postes propres à votre cas, comme la migration, la formation, l’hébergement, les audits, la sécurité ou la reprise de données. Un poste encore inconnu reste à confirmer : zéro ne prouve pas son absence.",
      },
      {
        question: "Qui doit surveiller l’automatisation après le lancement ?",
        answer:
          "Nommez un responsable métier pour les règles et un responsable opérationnel pour les alertes et les reprises. Le prestataire maintient seulement ce que le contrat lui attribue. Les utilisateurs doivent savoir reconnaître un dossier bloqué et poursuivre le travail manuellement.",
      },
    ],
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

      <GuidePremiumLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Automatiser un processus métier" },
        ]}
        badges={[
          { label: "Guide décisionnel 2026", variant: "dark" },
          { label: "Dirigeants TPE · PME", variant: "neutral" },
          { label: "Calcul transparent", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Quel processus métier"
        heroTitleEm="automatiser"
        heroTitleSuffix="en premier ?"
        heroDescription="Commencez par un travail fréquent, mesuré et facile à reprendre si l’outil échoue. Vous saurez écarter les mauvais candidats, comparer sept réponses et calculer si un essai limité vaut le coût."
        stats={[
          { label: "Portes bloquantes", value: "5" },
          { label: "Réponses comparées", value: "7" },
          { label: "Méthode de calcul", value: "Visible" },
          { label: "Données envoyées", value: "Aucune" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: "QH",
          name: "Quentin Hagnéré",
          role: "Fondateur de Hagnéré Code",
          profileUrl: "/equipe",
        }}
        sidebarHeroCta={{
          eyebrow: "Premier échange",
          titleStart: "Faire vérifier",
          titleEm: "votre premier choix",
          description:
            "Décrivez le travail actuel, son volume et trois exceptions. L’échange sert à distinguer une amélioration simple, une connexion entre outils et un besoin sur mesure.",
          benefits: [
            "Le processus actuel est décrit avant l’outil",
            "Les fonctions déjà disponibles restent une option",
            "Les inconnues et responsabilités sont listées",
          ],
          primaryCtaLabel: "Décrire mon premier processus",
          primaryCtaHref: "/demarrer-un-projet",
          phoneLabel: "03 74 47 20 18",
          phoneHref: "tel:+33374472018",
        }}
        toc={toc}
        tocLabel="Sommaire du guide"
        sidebarContextCta={{
          eyebrow: "Automatisation métier",
          title: "Faire étudier mon premier processus",
          description:
            "Apportez le déclencheur, le volume mensuel, les outils utilisés et trois cas qui sortent de l’ordinaire.",
          benefits: [
            "Comparer l’existant, les outils sans code et le sur-mesure",
            "Vérifier les hypothèses de gain",
            "Prévoir les erreurs et la reprise manuelle",
          ],
          ctaLabel: "Décrire mon premier processus",
          ctaHref: "/demarrer-un-projet",
          secondaryLabel: "03 74 47 20 18",
          secondaryHref: "tel:+33374472018",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Vos questions avant",
          titleEm: "d’automatiser",
          titleEnd: "un processus.",
          subtitle:
            "Des réponses courtes sur le choix, les outils, le coût et la surveillance après la mise en service.",
          ctaTitle: "Vous hésitez encore sur le premier choix ?",
          ctaDescription:
            "Décrivez le processus, son volume et ses exceptions pour clarifier la prochaine étape.",
          ctaLabel: "Décrire mon premier processus",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "France Num",
            href: "https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution",
            description:
              "Dossier officiel mis à jour le 9 juillet 2026 : inventaire des tâches, mesure fréquence × durée, complexité, impact d’une erreur, tests et maintenance. Ses affirmations commerciales sur les outils ne sont pas reprises comme règles générales.",
          },
          {
            source: "CNIL · sécurité",
            href: "https://www.cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf",
            description:
              "Guide 2024 : protection des données dès la conception, tests, droits d’accès, journalisation, sauvegardes, continuité et responsabilités.",
          },
          {
            source: "CNIL · sous-traitance",
            href: "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
            description:
              "Fiche du 14 mars 2024 : contrat, répartition des responsabilités, incidents, restitution et destruction des données.",
          },
          {
            source: "CNIL · décision automatisée",
            href: "https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee",
            description:
              "Champ de l’article 22 du RGPD lorsque la décision est entièrement automatisée et produit un effet juridique ou un effet similaire significatif sur une personne.",
          },
          {
            source: "Anact",
            href: "https://www.anact.fr/sites/default/files/2023-12/FSE%2520Nume%25CC%2581rique.pdf",
            description:
              "Repères pour un projet numérique en PME : observer le travail réel, associer les salariés concernés, simuler les usages et ajuster avant généralisation.",
          },
          {
            source: "Microsoft Learn",
            href: "https://learn.microsoft.com/en-us/power-automate/limits-and-config",
            description:
              "Exemple de documentation éditeur montrant que les flux ont des limites d’exécution, de durée de conservation, de volume et de propriété qui dépendent du produit et de la licence.",
          },
          {
            source: "Microsoft Learn · automatisation d’interface",
            href: "https://learn.microsoft.com/en-us/power-automate/desktop-flows/ui-elements",
            description:
              "Documentation éditeur sur les éléments et sélecteurs utilisés pour piloter une interface : ils doivent être testés et peuvent dépendre de la structure de l’application ou de la page.",
          },
          {
            source: "NIST AI RMF",
            href: "https://www.nist.gov/itl/ai-risk-management-framework",
            description:
              "Cadre volontaire de gestion des risques de l’IA : repères pour tester, surveiller dans la durée et prévoir une intervention humaine proportionnée aux conséquences.",
          },
          {
            source: "CNIL · AIPD",
            href: "https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd",
            description:
              "Une analyse d’impact est requise lorsqu’un traitement de données personnelles est susceptible d’engendrer un risque élevé pour les droits et libertés ; son besoin s’évalue avant la mise en œuvre.",
          },
        ]}
        disclaimer={{
          eyebrow: "Périmètre",
          title: "Une méthode de décision, pas un devis ni un avis juridique",
          description:
            "Les calculs et exemples de cette page sont fictifs et servent à rendre la méthode reproductible. Remplacez chaque entrée par vos données. Un traitement de données personnelles, une décision automatisée à effet important ou un système sensible peut exiger l’intervention de votre délégué à la protection des données (DPO), de votre responsable sécurité ou d’un conseil juridique.",
        }}
      >
        <GuidePremiumSection
          id="premiere-reponse"
          number="01"
          label="Décision"
          title="Commencez par un travail fréquent, mesurable et facile à reprendre"
        >
          <p className="lead">
            Vous voyez peut-être une commande copiée d’un courriel vers un
            tableur, puis ressaisie dans la facturation. La tâche est agaçante,
            mais ce n’est pas forcément le meilleur premier choix. Commencez par
            un travail fréquent, dont le résultat se mesure, dont les règles
            changent peu et dont les données sont fiables. Une personne doit
            aussi pouvoir reprendre la main si l’outil échoue. Si l’une de ces
            conditions manque, simplifiez d’abord la procédure ou fiabilisez les
            données.
          </p>

          <p>
            Un <strong>processus métier</strong> est la suite d’étapes qui part
            d’un événement — une commande reçue, un dossier complet, une date
            atteinte — et aboutit à un résultat utile. L’automatiser consiste à
            confier certaines de ces étapes à un logiciel. Cela ne suppose ni
            intelligence artificielle, ni nouvelle application.
          </p>

          <p>
            Dans l’ordre : dessinez le travail réel, passez cinq portes qui ne
            se compensent pas, puis comparez sept réponses. Vous distinguerez
            ensuite les heures réaffectées de leur valeur de capacité, puis
            d’une dépense réellement évitée. Vous préparerez enfin un pilote,
            c’est-à-dire un essai limité qui peut être arrêté sans bloquer
            l’activité.
          </p>

          <GuidePremiumMemo title="La règle à garder">
            <p>
              Un bon premier candidat libère un temps mesurable et garde
              l’erreur sous contrôle. Un gain financier élevé ne rattrape jamais
              une donnée peu fiable, une décision impossible à vérifier ou
              l’absence de reprise manuelle.
            </p>
          </GuidePremiumMemo>

          <p>
            Pour vérifier ces conditions, commencez par suivre quelques dossiers
            de bout en bout.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="carte-processus"
          number="02"
          label="Observation"
          title="Dessinez le travail réel sur une page"
        >
          <p>
            Ne partez pas du logiciel que vous aimeriez acheter. Suivez plusieurs
            dossiers jusqu’au bout et notez ce que les personnes font vraiment.
            Une procédure écrite omet souvent le coup de téléphone, le fichier
            temporaire ou la vérification qui sauve un cas incomplet.
          </p>

          <p>
            Le dossier{" "}
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
              target="_blank"
              rel="noreferrer"
            >
              France Num consacré à l’automatisation
            </a>{" "}
            propose de quantifier la fréquence, la durée, la complexité et
            l’impact d’une erreur. La carte ci-dessous ajoute les exceptions,
            les responsabilités et la reprise. Ces éléments montrent si le
            premier essai restera contrôlable.
          </p>

          <FormulaBox>
            {[
              "CARTE D’UN PROCESSUS — UNE PAGE",
              "",
              "Déclencheur : quel événement lance le travail ?",
              "Résultat attendu : qu’est-ce qui prouve qu’il est terminé ?",
              "Volume : combien de cas sur une période représentative ?",
              "Temps actif : combien de minutes réellement travaillées par cas ?",
              "Étapes : qui fait quoi, dans quel outil et dans quel ordre ?",
              "Données : quelle source fait foi pour chaque information ?",
              "Exceptions : quels cas quittent le chemin normal ?",
              "Erreur : comment est-elle détectée et quelle est sa conséquence ?",
              "Reprise : comment poursuivre à la main et éviter un doublon ?",
              "Responsable : qui modifie la règle et qui reçoit l’alerte ?",
              "Mesure après : quel indicateur sera comparé avant et après ?",
            ].join("\n")}
          </FormulaBox>

          <h3>Suivez des cas, pas seulement une moyenne</h3>
          <p>
            <strong>Exemple fictif :</strong> huit demandes complètes prennent
            trois minutes chacune et deux demandes ambiguës prennent trente
            minutes chacune. Le travail total représente 84 minutes. Même si
            les huit cas simples sont entièrement automatisés, seules 24 minutes
            deviennent techniquement retirables, soit 28,6 % du temps. « 80 %
            des dossiers » ne veut donc pas dire « 80 % du temps ». Mesurez
            séparément le chemin normal, les exceptions et le contrôle restant.
          </p>

          <InfoBox variant="emerald" title="Supprimez avant d’automatiser">
            <p>
              Retirez une validation sans utilité, choisissez une seule source
              pour chaque donnée et indiquez clairement quels champs sont
              indispensables. Mesurez à nouveau. Si le problème disparaît, ne
              créez pas un système à maintenir pour reproduire l’ancienne
              procédure.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="portes"
          number="03"
          label="Sélection"
          title="Écartez un candidat dès qu’une condition essentielle manque"
        >
          <p>
            Un tableau de notation additionne souvent gain, fréquence et
            complexité. Il aide à comparer, mais un gain financier élevé peut y
            compenser une erreur impossible à reprendre. Commencez plutôt par
            cinq questions auxquelles la réponse doit être « oui ». Le calcul
            économique vient seulement après.
          </p>

          <GuideTable
            caption="Les cinq portes non compensatoires"
            headers={["Porte", "Ce qui permet de l’ouvrir", "Si elle reste fermée"]}
            rows={[
              [
                "Résultat mesurable",
                "Deux personnes reconnaissent le même résultat correct",
                "Définir le résultat et l’indicateur avant tout outil",
              ],
              [
                "Règles assez stables",
                "Le chemin normal et les exceptions fréquentes sont décrits",
                "Observer, simplifier ou garder la décision humaine",
              ],
              [
                "Données fiables et autorisées",
                "Une source fait foi ; les droits d’accès sont compris",
                "Nettoyer les données et vérifier les accès",
              ],
              [
                "Échec récupérable",
                "Une alerte arrive ; le dossier peut reprendre sans doublon",
                "Concevoir la reprise avant le pilote",
              ],
              [
                "Responsable nommé",
                "Une personne tient la règle, une autre traite les alertes",
                "Nommer les rôles et la validation humaine nécessaire",
              ],
            ]}
          />

          <p>
            Passer les cinq portes ne prouve pas que le projet est rentable.
            Cela indique seulement qu’un chiffrage et un essai restent
            raisonnables. Le candidat peut encore perdre face à une fonction
            déjà payée ou à une simple amélioration de procédure.
          </p>

          <GuidePremiumCase
            initial="E"
            eyebrow="Contre-exemple fictif"
            title="Automatiser une remise exceptionnelle n’est pas un bon départ"
          >
            <p>
              Le calcul du temps semble favorable, mais la règle dépend de la
              marge, de la relation commerciale et d’engagements déjà pris.
              Gardez la décision humaine. Le logiciel peut préparer les données
              et signaler les limites, sans accorder la remise.
            </p>
          </GuidePremiumCase>

          <p>
            Si les cinq conditions sont réunies, le choix reste ouvert : la
            réponse la plus simple n’est pas toujours un développement.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="options"
          number="04"
          label="Comparaison"
          title="Comparez sept réponses avant de demander un développement"
        >
          <p>
            Comparez toutes les options sur le même résultat, le même volume, la
            même durée et les mêmes cas d’erreur. Les noms de technologie ne
            constituent pas un besoin : ils désignent seulement des moyens
            différents de traiter un processus déjà compris.
          </p>

          <GuideTable
            caption="Sept réponses au même processus métier"
            headers={["Réponse", "Quand elle est raisonnable", "Question décisive"]}
            rows={[
              [
                "Simplifier ou supprimer",
                "Une étape, une validation ou une double saisie n’apporte rien",
                "Quel contrôle utile disparaîtrait réellement ?",
              ],
              [
                "Activer une fonction existante",
                "Le logiciel actuel couvre le résultat sans contournement lourd",
                "La fonction, les droits et l’export sont-ils déjà inclus ?",
              ],
              [
                "Utiliser un connecteur ou une API (interface d’échange)",
                "Les logiciels proposent une interface documentée pour échanger les données",
                "Comment sont gérés l’authentification, un rejet, un doublon, une reprise et les limites de volume ?",
              ],
              [
                "Construire un flux sans code (no-code)",
                "Plusieurs actions et connecteurs doivent être enchaînés sans application complète",
                "Qui possède, documente et surveille le flux si la licence ou un connecteur change ?",
              ],
              [
                "Utiliser un robot d’interface",
                "Aucune API exploitable n’existe et l’écran ainsi que les règles restent assez stables",
                "Quels éléments d’écran, sessions et fenêtres faut-il retester après une mise à jour ?",
              ],
              [
                "Logiciel sur mesure",
                "Les règles, rôles ou écrans propres à l’entreprise créent une valeur durable",
                "Le code, les données, les accès et la maintenance seront-ils récupérables ?",
              ],
              [
                "Intelligence artificielle avec contrôle humain",
                "Un texte, une image ou un document varie trop pour une règle fixe",
                "Sur quels cas mesure-t-on les erreurs et quand une personne décide-t-elle ?",
              ],
            ]}
          />

          <h3>Un connecteur n’efface ni les limites ni la surveillance</h3>
          <p>
            Les documentations d’éditeur montrent que les flux ont des limites
            de volume, de durée d’exécution et de conservation des historiques.
            Certains dépendent aussi du compte d’un utilisateur désigné comme
            propriétaire. Par exemple,{" "}
            <a
              href="https://learn.microsoft.com/en-us/power-automate/limits-and-config"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft documente ces limites pour Power Automate
            </a>
            . Elles évoluent selon le produit et la licence : vérifiez la
            documentation applicable au moment du choix, puis ajoutez les
            alertes et la maintenance au coût.
          </p>

          <h3>Un robot d’interface dépend de l’écran qu’il pilote</h3>
          <p>
            Un robot d’interface peut cliquer, lire ou renseigner des éléments
            d’un écran lorsqu’aucune API utilisable n’est disponible. Dans la{" "}
            <a
              href="https://learn.microsoft.com/en-us/power-automate/desktop-flows/ui-elements"
              target="_blank"
              rel="noreferrer"
            >
              documentation Microsoft sur l’automatisation d’interface
            </a>
            , ces éléments sont repérés par des repères techniques appelés
            sélecteurs. Testez leur résistance aux mises à jour, aux fenêtres
            inattendues, aux sessions expirées et aux changements de droits.
            Prévoyez aussi le traitement manuel quand le robot ne retrouve plus
            l’élément attendu.
          </p>

          <h3>L’IA traite une incertitude ; elle ne la fait pas disparaître</h3>
          <p>
            Pour classer un message ou extraire des champs d’un document,
            constituez un jeu de cas représentatif, écrivez la réponse correcte
            et mesurez les erreurs avant le pilote. Le{" "}
            <a
              href="https://www.nist.gov/itl/ai-risk-management-framework"
              target="_blank"
              rel="noreferrer"
            >
              cadre volontaire américain sur les risques de l’intelligence
              artificielle
            </a>{" "}
            insiste sur les tests et la surveillance dans la durée. Si le
            résultat sert à fixer un prix, à écarter une personne ou à
            déclencher une action difficile à annuler, ajoutez une validation
            humaine proportionnée.
          </p>

          <p>
            Quand une option paraît adaptée, il reste à vérifier si les heures
            réellement réaffectées couvrent tous ses coûts.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="calcul"
          number="05"
          label="Économie"
          title="Calculez d’abord les heures retirées, puis les heures réaffectées"
        >
          <p>
            Le temps retiré d’une tâche n’est pas automatiquement de l’argent
            gagné. Une partie des cas peut rester manuelle. Les équipes peuvent
            contourner l’outil. Les minutes libérées peuvent être trop
            fragmentées pour éviter une dépense ou accomplir un autre travail.
            Séparez donc quatre quantités.
          </p>

          <ol>
            <li>
              <strong>Heures actuelles :</strong> volume × minutes par cas sur
              la période.
            </li>
            <li>
              <strong>Heures techniquement retirables :</strong> heures
              actuelles × part du temps que la solution peut enlever.
            </li>
            <li>
              <strong>Heures réellement retirées :</strong> heures retirables ×
              adoption moyenne sur toute la période.
            </li>
            <li>
              <strong>Heures réaffectées :</strong> heures réellement retirées ×
              part confiée à un travail utile identifié.
            </li>
          </ol>

          <FormulaBox>
            {[
              "Heures retirables = heures actuelles × part techniquement retirable",
              "Heures retirées = heures retirables × adoption moyenne",
              "Heures réaffectées = heures retirées × part affectée à un travail utile",
              "",
              "Valeur de capacité = heures réaffectées × coût horaire chargé",
              "",
              "Coût renseigné = conception, intégration et tests",
              "                  + temps interne",
              "                  + autres coûts ponctuels déjà chiffrés",
              "                  + coût mensuel × durée",
              "",
              "Retour sur investissement (ROI) du scénario de capacité",
              "  = (valeur de capacité − coût renseigné) ÷ coût renseigné",
            ].join("\n")}
          </FormulaBox>

          <p>
            La <strong>valeur de capacité</strong> n’est pas une économie de
            trésorerie. Elle traduit des heures réaffectées au coût horaire
            chargé retenu. Une dépense évitée exige la disparition réelle d’un
            paiement — heures supplémentaires, prestation, recrutement ou
            autre charge — et ne doit pas être ajoutée une seconde fois pour les
            mêmes heures.
          </p>

          <InfoBox
            variant="amber"
            title="Contre-cas fictif : une cible d’adoption peut rendre le calcul positif à tort"
          >
            <p>
              À 220 dossiers par mois, en conservant toutes les autres
              hypothèses de l’exemple, une adoption moyenne de 80 % sur
              vingt-quatre mois produit un écart de +736,26 €. Si l’adoption
              atteint 40 % pendant six mois, puis 80 % pendant les dix-huit mois
              suivants, sa moyenne tombe à 70 %. L’écart devient alors
              −527,78 €. Saisissez une moyenne réaliste sur la période, pas la
              cible attendue à la fin.
            </p>
          </InfoBox>

          <InfoBox
            variant="blue"
            title="Un calcul négatif n’interdit pas un contrôle utile"
          >
            <p>
              Un rappel rare peut rester justifié s’il réduit un risque de
              non-respect d’une échéance ou facilite une vérification. Dans ce
              cas, traitez-le comme une dépense de maîtrise du risque avec un
              budget et un responsable ; ne transformez pas un dommage
              hypothétique en gain certain pour forcer le ROI.
            </p>
          </InfoBox>

          <p>
            N’ajoutez la valeur des erreurs évitées, des ventes supplémentaires
            ou d’un délai réduit que si vous avez mesuré la situation de départ
            et pouvez expliquer ce qui a produit l’amélioration. Sinon,
            conservez-les comme bénéfices possibles non chiffrés.
          </p>

          <p>
            Le calculateur applique ces étapes. Il bloque la décision dès qu’une
            des cinq portes reste fermée.
          </p>

          <ProcessPriorityTool />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exemple"
          number="06"
          label="Démonstration"
          title="Les heures retirées ne suffisent pas à justifier l’investissement"
        >
          <GuidePremiumCase
            initial="120"
            eyebrow="Exemple fictif — hypothèses arrondies"
            title="Le suivi de 120 dossiers par mois sur vingt-quatre mois"
          >
            <p>
              Chaque dossier demande neuf minutes. L’automatisation retirerait
              techniquement 70 % de ce temps, avec une adoption moyenne de 80 %
              sur toute la période. Dans ce scénario, 60 % des heures
              effectivement retirées seraient affectées à un travail utile
              identifié. Le coût horaire chargé retenu pour l’exercice est de
              38 €.
            </p>
          </GuidePremiumCase>

          <p>
            Le travail actuel représente{" "}
            <strong>432 heures sur vingt-quatre mois</strong> :
            120 × 9 ÷ 60 × 24. La solution pourrait en retirer 302,4 heures.
            Après l’adoption moyenne, 241,92 heures sont réellement retirées de
            la tâche. Au total, 145,152 heures sont réaffectées, soit une valeur
            de capacité théorique de <strong>5 515,78 €</strong>.
          </p>

          <p>
            Supposons 4 800 € de conception et de tests, 32 heures de travail
            interne et 140 € par mois d’abonnement, de suivi et de maintenance.
            Aucun autre coût ponctuel n’est renseigné dans cet exemple fictif ;
            cela ne signifie pas qu’un projet réel n’en aurait pas. Le coût
            renseigné atteint{" "}
            <strong>9 376 € sur vingt-quatre mois</strong> :
            4 800 + 32 × 38 + 140 × 24.
          </p>

          <GuideTable
            caption="Résultat du scénario fictif sur vingt-quatre mois"
            headers={["Élément", "Calcul", "Résultat"]}
            rows={[
              [
                "Heures actuelles",
                "120 × 9 ÷ 60 × 24",
                "432 h",
              ],
              [
                "Heures techniquement retirables",
                "432 × 70 %",
                "302,4 h",
              ],
              [
                "Heures réellement retirées",
                "302,4 × 80 %",
                "241,92 h",
              ],
              [
                "Heures réaffectées",
                "241,92 × 60 %",
                "145,152 h",
              ],
              [
                "Valeur de capacité",
                "145,152 × 38 €",
                "5 515,78 €",
              ],
              [
                "Coût renseigné",
                "4 800 € + 32 × 38 € + 140 € × 24",
                "9 376 €",
              ],
              [
                "Écart",
                "5 515,78 € − 9 376 €",
                "− 3 860,22 €",
              ],
            ]}
          />

          <p>
            Le ROI du scénario de capacité est d’environ{" "}
            <strong>− 41,2 %</strong>. Ce ratio ne représente pas une économie
            de trésorerie. Avec ces hypothèses, il faut tester une fonction déjà
            payée, réduire le coût, élargir prudemment le processus ou ne pas
            investir.
          </p>

          <p>
            Si le volume change, vérifiez aussi l’abonnement, l’infrastructure
            et la surveillance. Avec 600 dossiers par mois, l’écart devient
            positif à coût mensuel inchangé, mais redevient négatif à partir
            d’environ 899 € par mois dans ce modèle fictif.
          </p>

          <p>
            Si votre propre scénario reste positif, ne généralisez pas encore :
            vérifiez-le sur un volume limité en gardant le traitement manuel
            disponible.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="pilote"
          number="07"
          label="Essai limité"
          title="Préparez un pilote qui peut échouer sans arrêter l’activité"
        >
          <p>
            Un pilote est un essai limité, pas un déploiement sur tous les
            dossiers pendant une semaine. Limitez le volume, gardez le
            traitement manuel disponible et écrivez les résultats attendus
            avant de lancer le premier cas.
          </p>

          <GuideTable
            caption="Jeu minimal de tests avant une mise en service"
            headers={["Situation provoquée", "Résultat attendu", "Preuve à garder"]}
            rows={[
              [
                "Cas normal",
                "Une seule sortie correcte est produite",
                "Identifiant d’entrée et résultat",
              ],
              [
                "Champ obligatoire absent",
                "Le dossier attend une correction compréhensible",
                "Message et dossier inchangé",
              ],
              [
                "Même dossier reçu deux fois",
                "La seconde réception ne crée pas de doublon",
                "Trace des deux événements",
              ],
              [
                "Accès expiré ou refusé",
                "L’action s’arrête et la bonne personne est alertée",
                "Alerte reçue et cause",
              ],
              [
                "Outil tiers indisponible",
                "Le dossier attend ou rejoint la file manuelle",
                "Heure, tentatives et état final",
              ],
              [
                "Échec après une action partielle",
                "La reprise n’envoie ni facture ni message deux fois",
                "État avant, reprise et état après",
              ],
              [
                "Valeur inhabituelle",
                "Une personne valide avant l’action sensible",
                "Décision et auteur de la validation",
              ],
              [
                "Retour au manuel",
                "L’équipe poursuit sans perdre ni mélanger les dossiers",
                "Temps de reprise et rapprochement",
              ],
            ]}
          />

          <h3>Écrivez aussi la condition d’arrêt</h3>
          <p>
            Arrêtez ou corrigez le pilote si une erreur à forte conséquence
            échappe au contrôle, si les alertes ne sont pas traitées, si les
            utilisateurs créent un second processus parallèle ou si le temps
            résiduel dépasse l’hypothèse économique. Une condition d’arrêt
            protège mieux qu’une date de déploiement maintenue coûte que coûte.
          </p>

          <InfoBox
            variant="amber"
            title="Commencez les tests avec des données fictives"
          >
            <p>
              Pour les tests techniques, préférez des données fictives ou
              anonymisées. La{" "}
              <a
                href="https://www.cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Commission nationale de l’informatique et des libertés (CNIL)
                le recommande dans son guide de sécurité 2024
              </a>
              . Les essais avec des situations réelles doivent ensuite être
              contrôlés, limités et compatibles avec l’usage prévu des données
              et les droits d’accès applicables.
            </p>
          </InfoBox>

          <p>
            Ces tests n’ont de valeur que si une personne traite chaque alerte
            et peut arrêter l’essai.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="responsabilites"
          number="08"
          label="Organisation"
          title="Nommez qui décide, qui surveille et qui reprend la main"
        >
          <p>
            Qui décide si la règle change ou si le propriétaire du flux part ?
            Qui traite une alerte ? Écrivez les rôles avec des noms, pas
            seulement « métier », « informatique » et « prestataire ».
          </p>

          <GuideTable
            caption="Responsabilités minimales du pilote à l’exploitation"
            headers={["Rôle", "Décision ou action", "Preuve attendue"]}
            rows={[
              [
                "Commanditaire",
                "Fixe le résultat, le budget et la condition d’arrêt",
                "Fiche de décision approuvée",
              ],
              [
                "Responsable métier",
                "Tient les règles, tranche les exceptions et accepte le résultat",
                "Règles datées et cas de test",
              ],
              [
                "Utilisateurs concernés",
                "Testent le travail réel et signalent les contournements",
                "Retours classés et décisions",
              ],
              [
                "Responsable d’exploitation",
                "Reçoit les alertes, suit les échecs et déclenche la reprise",
                "Journal et procédure de reprise",
              ],
              [
                "Prestataire ou équipe technique",
                "Construit, documente et maintient les fonctions convenues",
                "Accès, documentation et résultats des tests",
              ],
              [
                "Délégué à la protection des données (DPO) ou responsable sécurité, si nécessaire",
                "Examine les données, accès et risques qui relèvent de son rôle",
                "Décision et actions à suivre",
              ],
            ]}
          />

          <p>
            Faites participer les personnes qui réalisent le travail. Le guide
            de l’{" "}
            <a
              href="https://www.anact.fr/sites/default/files/2023-12/FSE%2520Nume%25CC%2581rique.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Agence nationale pour l’amélioration des conditions de travail
              (Anact) sur les projets numériques en PME
            </a>{" "}
            propose d’observer l’activité, de simuler les usages futurs et
            d’ajuster avec les salariés concernés. Une démonstration réussie par
            le prestataire ne montre pas encore que l’équipe saura traiter les
            exceptions un lundi chargé.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="securite"
          number="09"
          label="Contrôle"
          title="Protégez les données et prévoyez comment changer d’outil"
        >
          <p>
            Le niveau de contrôle dépend des données et de la conséquence d’une
            erreur. La copie d’un document public n’appelle pas les mêmes
            mesures qu’un changement de coordonnées bancaires, une donnée de
            santé ou une décision qui affecte une personne. Commencez par les
            questions suivantes.
          </p>

          <ul>
            <li>
              <strong>Données :</strong> quelles informations entrent, sortent,
              restent stockées et pendant combien de temps ?
            </li>
            <li>
              <strong>Accès :</strong> chaque personne et chaque compte
              technique disposent-ils seulement des droits nécessaires ?
            </li>
            <li>
              <strong>Trace :</strong> peut-on relier une action à un dossier, un
              moment et une version de la règle sans enregistrer des secrets ?
            </li>
            <li>
              <strong>Continuité :</strong> que fait l’équipe lorsque le service
              ou la connexion ne répond plus ?
            </li>
            <li>
              <strong>Sauvegarde :</strong> les données et la configuration
              utiles sont-elles restaurables et cette restauration a-t-elle été
              essayée ?
            </li>
            <li>
              <strong>Sortie :</strong> pouvez-vous récupérer données,
              configuration, documentation, comptes et, s’il existe, code
              source dans des formats utilisables ?
            </li>
            <li>
              <strong>Sous-traitants :</strong> quels prestataires et
              sous-traitants ultérieurs accèdent aux données, depuis quels pays,
              avec quelles garanties et quelle procédure en fin de contrat ?
            </li>
          </ul>

          <p>
            Le{" "}
            <a
              href="https://www.cnil.fr/sites/cnil/files/2024-03/cnil_guide_securite_personnelle_2024.pdf"
              target="_blank"
              rel="noreferrer"
            >
              guide de sécurité des données personnelles de la CNIL
            </a>{" "}
            couvre notamment les droits d’accès, la journalisation, les
            sauvegardes testées, la continuité et les API. Si un prestataire
            traite des données personnelles pour votre compte, la{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noreferrer"
            >
              fiche CNIL sur la sous-traitance
            </a>{" "}
            demande un contrat qui répartit les responsabilités, encadre les
            incidents et prévoit la restitution ou la destruction des données.
          </p>

          <h3>Une décision automatisée peut demander une analyse distincte</h3>
          <p>
            L’article 22 ne vise ni toute automatisation ni toute utilisation
            d’IA. Son champ suppose une décision individuelle fondée sur des
            données personnelles, prise exclusivement par un traitement
            automatisé dans les faits, et produisant un effet juridique ou un
            effet similaire significatif. La{" "}
            <a
              href="https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee"
              target="_blank"
              rel="noreferrer"
            >
              CNIL précise ce champ
            </a>
            . Un simple classement sans conséquence comparable ne suffit pas ;
            il peut en revanche devenir significatif si, en pratique, il ferme
            l’accès à un service, à un emploi, à un contrat ou applique un tarif
            plus élevé sans réexamen réel.
          </p>

          <p>
            Le consentement explicite, la nécessité de conclure ou d’exécuter un
            contrat, ou une disposition légale peuvent constituer des exceptions
            prévues par le règlement général sur la protection des données
            (RGPD). Elles ne dispensent pas des garanties applicables. La
            personne doit notamment pouvoir être informée, exprimer son point de
            vue, contester la décision et obtenir une intervention humaine.
            Cette intervention doit permettre un réexamen réel, pas seulement
            valider mécaniquement la sortie de l’outil.
          </p>

          <p>
            Même lorsque l’article 22 ne s’applique pas, une{" "}
            <a
              href="https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd"
              target="_blank"
              rel="noreferrer"
            >
              analyse d’impact relative à la protection des données (AIPD)
            </a>{" "}
            est requise si le traitement est susceptible d’engendrer un risque
            élevé pour les droits et libertés. Vérifiez ce besoin avant le
            pilote avec le responsable du traitement et le DPO. L’usage d’une
            IA, à lui seul, ne permet ni de conclure qu’une AIPD est toujours
            requise, ni de l’écarter.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="10"
          label="Prochaine action"
          title="Faites tenir la décision sur une seule page"
        >
          <p>
            À ce stade, ne demandez pas encore « combien coûte une
            automatisation ? ». Préparez une fiche que la direction, les
            utilisateurs et un prestataire peuvent contester avec les mêmes
            informations.
          </p>

          <FormulaBox>
            {[
              "FICHE DE DÉCISION",
              "",
              "Processus choisi et résultat attendu :",
              "Volume, temps actif et période de mesure :",
              "Exceptions observées :",
              "Cinq portes : ouvertes / action nécessaire :",
              "Réponse la plus simple retenue et options écartées :",
              "Heures retirables, adoption moyenne et heures réaffectées :",
              "Valeur de capacité et dépense réellement évitée, sans double compte :",
              "Coûts ponctuels, mensuels et coût de sortie à confirmer :",
              "Données, droits d’accès et validation humaine :",
              "Cas de test, alerte, reprise manuelle et condition d’arrêt :",
              "Responsable métier et responsable des alertes :",
              "Date et mesure de la décision après pilote :",
            ].join("\n")}
          </FormulaBox>

          <p>
            La décision peut être « activer la fonction existante », « lancer un
            pilote limité », « simplifier puis mesurer à nouveau » ou « garder
            cette décision humaine ». Ces quatre sorties sont valables. Le
            développement sur mesure n’est pertinent que si les règles, les
            rôles, les écrans ou les intégrations propres à l’entreprise
            justifient ce coût supplémentaire.
          </p>

          <p>
            Si votre fiche montre qu’un même besoin relie plusieurs équipes ou
            logiciels, consultez la page consacrée aux{" "}
            <Link href="/services/outils-internes-sur-mesure">
              outils internes sur mesure
            </Link>
            . Elle explique le type de projet étudié. Pour reprendre cette
            méthode sur un autre sujet, revenez au{" "}
            <Link href="/guides">répertoire des guides Hagnéré Code</Link>.
          </p>

          <GuidePremiumMemo
            eyebrow="Décision finale"
            title="Ne choisissez l’outil qu’après avoir écrit l’échec"
          >
            <p>
              Si vous savez qui voit l’erreur, où attend le dossier, comment
              reprendre sans doublon et quand arrêter le pilote, vous pouvez
              comparer des solutions. Si ces réponses manquent, le prochain
              travail utile consiste à les obtenir.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
