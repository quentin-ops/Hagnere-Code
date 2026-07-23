import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("tma-ou-regie");

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
        alt: "Choisir comment acheter la maintenance d’une application entre capacité, temps, lot et formule hybride",
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
      name: "TMA ou régie",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Une TMA est-elle forcément facturée au forfait ?",
    answer:
      "Non. La TMA décrit la maintenance confiée à un tiers ; elle n’impose pas à elle seule un prix fixe. Le contrat peut prévoir une capacité récurrente, du temps consommé, des lots bornés ou une combinaison. Il faut lire les règles de priorité, de consommation et d’acceptation, pas seulement le titre de l’offre.",
  },
  {
    question: "La régie signifie-t-elle qu’il n’y a aucun engagement ?",
    answer:
      "Non. Une prestation payée au temps doit tout de même préciser les personnes autorisées à demander du travail, le suivi du temps, les points d’arrêt, les accès, la sécurité, les résultats à remettre et les conditions de sortie. « Régie » ne dispense pas d’un contrat compréhensible.",
  },
  {
    question: "Quel modèle coûte le moins cher ?",
    answer:
      "Aucun modèle n’est toujours le moins cher. Une capacité mal dimensionnée peut laisser du temps inutilisé ; du temps mal piloté peut dériver ; un lot fixé trop tôt peut accumuler les changements. Comparez les offres sur les mêmes demandes et comptez aussi le temps de décision et de validation de votre équipe.",
  },
  {
    question: "Trois mois de demandes suffisent-ils pour décider ?",
    answer:
      "Trois mois constituent un point de départ pratique, pas une règle universelle. Ajoutez une période plus longue si votre activité est saisonnière, si une migration récente a créé des incidents inhabituels ou si les demandes importantes sont rares. Le but est de représenter le fonctionnement normal de l’application.",
  },
  {
    question: "Peut-on utiliser plusieurs modèles pour la même application ?",
    answer:
      "Oui. Une capacité récurrente peut couvrir les corrections et l’entretien, du temps piloté peut servir à explorer une demande incertaine, et un lot séparé peut livrer une évolution clairement définie. La facture et les responsabilités doivent distinguer ces familles.",
  },
  {
    question: "Comment contrôler une prestation payée au temps ?",
    answer:
      "Demandez une demande identifiée, une estimation ou un point d’arrêt, le temps réellement mobilisé, ce qui a été fait, ce qui reste incertain et la décision suivante. Le nombre d’heures seul ne dit pas si l’entreprise a obtenu une correction, une explication ou seulement de nouvelles questions.",
  },
  {
    question:
      "Faut-il signer si personne dans l’entreprise ne peut prioriser les demandes ?",
    answer:
      "Mieux vaut d’abord nommer une personne responsable ou limiter la mission à un diagnostic borné. Sans interlocuteur capable d’expliquer le besoin, de choisir l’ordre et d’accepter le résultat, une prestation au temps comme un forfait risque de produire des attentes contradictoires.",
  },
];

const modes = [
  {
    title: "Capacité récurrente",
    summary:
      "Vous réservez régulièrement une disponibilité ou un volume pour les demandes qui reviennent.",
    good: "Les corrections, l’entretien et les petites évolutions arrivent tous les mois et l’application doit rester suivie.",
    watch:
      "Précisez les priorités, ce qui consomme la capacité, le sort du temps non utilisé et le traitement des dépassements. La capacité de travail ne fixe pas à elle seule les plages ni le délai de prise en charge d’un incident.",
    decision:
      "Choisissez-la pour un flux régulier ; écrivez séparément la couverture de support nécessaire lorsque l’interruption métier est critique.",
    border:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Temps réellement mobilisé",
    summary:
      "Vous payez le temps consacré aux demandes que votre entreprise autorise et réordonne.",
    good: "Les priorités changent souvent, la cause d’un problème doit être explorée ou le résultat ne peut pas encore être décrit précisément.",
    watch:
      "Nommez la personne qui décide, exigez des points d’arrêt et reliez chaque temps passé à une demande et à un résultat observable.",
    decision:
      "Choisissez-le pour apprendre et décider progressivement, pas pour ouvrir un compteur sans fin.",
    border:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Lot borné",
    summary:
      "Vous convenez d’un résultat délimité, de conditions d’acceptation et d’un prix pour ce travail.",
    good: "La fonction attendue, les cas à tester et les dépendances importantes sont suffisamment connus.",
    watch:
      "Écrivez les hypothèses, les exclusions et la manière de traiter une demande qui change pendant le travail.",
    decision:
      "Choisissez-le quand votre entreprise sait décrire ce qu’elle acceptera comme terminé.",
    border:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Formule hybride",
    summary:
      "Vous séparez la continuité de l’application, les explorations et les évolutions bien définies.",
    good: "Le même logiciel reçoit à la fois des incidents récurrents, des questions incertaines et de vrais mini-projets.",
    watch:
      "Les factures et les demandes doivent montrer clairement quelle règle s’applique à chaque famille.",
    decision:
      "Choisissez-la lorsque forcer toutes les demandes dans un seul mode rendrait le service illisible.",
    border:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
];

const requestFields = [
  {
    field: "Demande",
    question:
      "Que veut la personne, ou quel dysfonctionnement rencontre-t-elle ?",
    entry: "Une phrase par correction ou évolution réellement reçue.",
  },
  {
    field: "Fréquence",
    question:
      "Cette demande est-elle isolée, mensuelle, hebdomadaire ou continue ?",
    entry:
      "Conservez les répétitions, mais ne décidez pas sur ce nombre seul : une demande rare peut arrêter l’activité et dix demandes mineures rester faciles à planifier.",
  },
  {
    field: "Impact et continuité",
    question:
      "Que se passe-t-il pour l’entreprise, combien de temps l’interruption peut-elle durer et pendant quelles plages faut-il être couvert ?",
    entry:
      "Décrivez le blocage, la durée acceptable et les horaires utiles ; ne recopiez pas seulement « urgent ».",
  },
  {
    field: "Résultat vérifiable",
    question: "Que faudra-t-il observer pour accepter le travail ?",
    entry: "Un comportement, un document produit ou un scénario réussi.",
  },
  {
    field: "Taille connue",
    question:
      "Le travail est-il borné, encore à explorer ou dépendant d’un tiers ?",
    entry: "Écrivez « à explorer » lorsque vous ne savez pas encore.",
  },
  {
    field: "Dépendances",
    question:
      "Un éditeur, un hébergeur, une API ou une validation bloque-t-il le travail ?",
    entry: "Nommez le tiers et la décision qu’il doit fournir.",
  },
  {
    field: "Responsable interne",
    question: "Qui choisit la priorité et qui accepte le résultat ?",
    entry: "Une personne nommée par rôle, disponible aux moments nécessaires.",
  },
  {
    field: "Mode candidat",
    question: "Capacité récurrente, temps piloté, lot borné ou report ?",
    entry:
      "Une première hypothèse à discuter, jamais une étiquette automatique.",
  },
];

const sampleRequests = [
  [
    "Anomalies d’export PDF qui reviennent",
    "Capacité récurrente",
    "Le besoin de correction et de prévention revient, même si l’ordre change. À la fin, le document s’ouvre, contient les données convenues et peut être utilisé par l’équipe.",
  ],
  [
    "Recherche parfois lente, cause inconnue",
    "Diagnostic borné — prix fixe ou temps plafonné selon l’offre",
    "Il faut acheter une conclusion limitée avant de promettre une correction. Une note remet les mesures, les faits confirmés, les causes écartées, les inconnues restantes et la décision d’arrêter ou de préparer la suite.",
  ],
  [
    "Validation d’un responsable avant l’envoi",
    "Lot borné",
    "Le parcours, les rôles et les cas d’acceptation sont descriptibles : les profils autorisés valident ou refusent, et l’envoi reste bloqué tant que la décision manque.",
  ],
  [
    "Refaire un tableau de bord sans utilisateur ni décision identifiés",
    "Report",
    "L’entreprise ne sait pas qui utilisera l’écran ni quelle action il doit faciliter. Elle interroge d’abord les utilisateurs et choisit la décision à soutenir avant d’acheter du développement.",
  ],
];

const sharedControls = [
  {
    title: "Une entrée claire",
    body: "Chaque intervention part d’une demande identifiable, d’un demandeur et d’un résultat attendu ou d’une question à explorer.",
  },
  {
    title: "Une personne qui décide",
    body: "L’entreprise nomme qui fixe l’ordre, autorise le travail et accepte ou refuse ce qui est remis.",
  },
  {
    title: "Un suivi compréhensible",
    body: "Le prestataire relie le temps, la correction ou le lot à la demande concernée et explique la décision suivante.",
  },
  {
    title: "Des accès maîtrisés",
    body: "Les comptes sont nominatifs, ouverts pour le besoin réel, retirés lorsqu’ils ne sont plus nécessaires et les interventions importantes sont tracées.",
  },
  {
    title: "Une fin observable",
    body: "Une correction ou une évolution produit un résultat vérifiable. Un diagnostic remet les faits établis, les inconnues restantes et la décision d’arrêter, de continuer ou de préparer une livraison.",
  },
  {
    title: "Une sortie possible",
    body: "L’entreprise sait récupérer ses informations, ses accès et les éléments utiles pour continuer avec une autre organisation.",
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
          { label: "TMA ou régie" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre application accumule des bugs et de petites évolutions. Faut-il réserver un forfait de maintenance ou payer les jours réellement passés ? La réponse dépend du travail acheté, de son impact, de sa fréquence et de la personne qui peut décider."
        heroAction={{
          href: "#reclassement",
          label: "Classer mes demandes",
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
            title: "TMA expliquée sans jargon",
            description: "",
            color: "blue",
          },
          {
            number: "02",
            title: "Quatre modes comparés",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "Vos demandes classées",
            description: "",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/contrat-tma-application",
            label: "Vérifier un contrat TMA d’application",
          },
          {
            href: "/guides/cout-maintenance-application-metier",
            label: "Construire le budget annuel de maintenance",
          },
          {
            href: "/guides/reprendre-maintenance-site-autre-agence",
            label: "Préparer la reprise depuis un autre prestataire",
          },
        ]}
        faqTitle="Questions fréquentes sur la TMA et la régie"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Votre application accumule bugs, urgences et petites évolutions. Un
          prestataire vous propose une TMA, un forfait ou des jours en régie,
          mais ces mots ne disent pas encore ce que vous achetez. La tierce
          maintenance applicative, ou <strong>TMA</strong>, consiste à confier à
          un tiers la correction, l’entretien et parfois l’évolution de
          l’application. La <strong>régie</strong> désigne souvent une façon de
          payer le temps réellement mobilisé. Vous ne comparez donc pas deux
          solutions exactement équivalentes. Nommez d’abord ce que vous achetez
          : une continuité, un diagnostic ou une livraison. Choisissez ensuite
          sa facturation : prix fixe, capacité réservée ou temps mobilisé. La
          fréquence ne suffit pas ; l’impact d’une interruption, les inconnues
          et la façon d’accepter le résultat comptent aussi. Ce guide vous aide
          à décider à partir des trois derniers mois, puis à comparer des
          propositions sur une base commune.
        </p>

        <InfoBox variant="emerald" title="La réponse courte">
          <p className="m-0">
            Une TMA peut être payée au forfait, au temps, par lot ou avec un
            mélange de ces règles. Commencez par classer vos demandes réelles
            selon leur impact, leur répétition, leurs inconnues et leur résultat
            attendu. Séparez ensuite le service acheté de la facturation. Si
            personne ne peut prioriser ni accepter le travail, réglez d’abord ce
            problème d’organisation.
          </p>
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "definitions",
              label: "1. TMA et régie ne désignent pas la même chose",
            },
            {
              id: "historique",
              label: "2. Commencez par trois mois de demandes réelles",
            },
            {
              id: "modes",
              label: "3. Quatre façons d’acheter le travail de maintenance",
            },
            {
              id: "choisir",
              label:
                "4. Choisissez selon ce qui revient, change ou peut être borné",
            },
            {
              id: "hybride",
              label: "5. Une formule hybride sépare continuité et évolutions",
            },
            {
              id: "controles",
              label:
                "6. Gardez les mêmes règles de contrôle dans chaque modèle",
            },
            {
              id: "reclassement",
              label: "7. Reclassez maintenant vos demandes de maintenance",
            },
            {
              id: "comparer",
              label: "8. Comparez les propositions sur le même historique",
            },
            {
              id: "signer",
              label: "9. Décidez s’il faut signer maintenant ou attendre",
            },
            {
              id: "accompagnement",
              label: "10. Quand Hagnéré Code peut réellement vous aider",
            },
            {
              id: "sources",
              label: "Sources et limites",
            },
          ]}
        />

        <h2 id="definitions">1. TMA et régie ne désignent pas la même chose</h2>

        <p>
          La TMA répond d’abord à la question{" "}
          <strong>« quels travaux confions-nous à un prestataire ? »</strong>.
          Le{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
            target="_blank"
            rel="noopener noreferrer"
          >
            CCAG-TIC publié sur Légifrance
          </a>{" "}
          décrit la tierce maintenance applicative comme les prestations qui
          maintiennent un système d’information en état de remplir sa fonction.
          Il cite la prévention, la correction et, selon le contrat,
          l’adaptation ou l’évolution du logiciel. Cette définition appartient
          au cadre des marchés publics qui utilisent ce cahier : elle aide à
          comprendre le vocabulaire, mais elle ne s’applique pas automatiquement
          à votre contrat privé.
        </p>

        <p>
          Une{" "}
          <a
            href="https://www.cigref.fr/cigref_publications/RapportsContainer/Parus2004/2004_-_Charte_CIGREF_Syntec_informatique_-_infogerance_et_TMA_web.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            charte professionnelle Cigref–Syntec publiée en 2004
          </a>{" "}
          emploie également TMA pour la prise en charge par un prestataire de
          tout ou partie de la maintenance et de l’évolution d’un système
          applicatif. Cette source historique confirme le sens général du terme
          ; elle ne prouve ni les prix ni les pratiques commerciales actuelles.
        </p>

        <p>
          La régie répond à une autre question :{" "}
          <strong>
            « comment le travail sera-t-il commandé et facturé ? »
          </strong>
          . Dans de nombreuses propositions, le mot signifie que l’entreprise
          achète du temps réellement mobilisé. Mais ce mot ne définit pas à lui
          seul les responsabilités, les livraisons, le suivi des heures ou le
          droit d’arrêter. Le contrat réel doit les préciser.
        </p>

        <GuideTable
          caption="Les trois questions à séparer avant de comparer deux offres"
          headers={[
            "Question",
            "Ce que vous devez obtenir",
            "Exemple de réponse",
          ]}
          rows={[
            [
              "Quel service est confié ?",
              "Les corrections, l’entretien, l’assistance et les évolutions réellement couverts.",
              "L’équipe traite les anomalies de production et les petites évolutions autorisées.",
            ],
            [
              "Comment le travail est-il acheté ?",
              "Capacité récurrente, temps consommé, lot borné ou combinaison, avec les règles de consommation.",
              "Les demandes courantes utilisent la capacité ; une évolution importante reçoit un devis séparé.",
            ],
            [
              "Qui décide que le travail commence et se termine ?",
              "Les personnes autorisées, les points d’arrêt et la manière d’accepter le résultat.",
              "Le responsable métier fixe l’ordre et valide les scénarios convenus.",
            ],
          ]}
        />

        <p>
          Séparez surtout <strong>ce que vous achetez</strong> de{" "}
          <strong>la manière dont vous le payez</strong>. La continuité peut
          être facturée par une somme récurrente, une capacité réservée ou du
          temps consommé. Un diagnostic borné peut recevoir un prix fixe ou un
          temps plafonné. Une livraison définie peut être payée comme un lot ou
          selon le temps mobilisé. Le prix ne transforme donc pas, à lui seul,
          un diagnostic en livraison ni une capacité de développement en
          engagement de support.
        </p>

        <InfoBox variant="amber" title="Le titre commercial ne suffit pas">
          <p className="m-0">
            « TMA au forfait », « régie souple » ou « pack de jours » peuvent
            cacher des fonctionnements très différents. Demandez ce qui est
            inclus, qui commande le travail, comment il est suivi et ce qui
            permet de le fermer. Le contrat et les faits priment toujours sur
            l’étiquette.
          </p>
        </InfoBox>

        <h2 id="historique">2. Commencez par trois mois de demandes réelles</h2>

        <p>
          Un prestataire peut présenter son modèle préféré, mais votre
          application possède déjà un historique. Rassemblez les demandes reçues
          pendant les trois derniers mois : e-mails, tickets, messages d’équipe,
          comptes rendus d’incident, devis et petites évolutions demandées
          oralement puis confirmées. Gardez une ligne par demande, même lorsque
          plusieurs lignes se ressemblent. La répétition est précisément ce que
          vous cherchez à voir.
        </p>

        <p>
          Trois mois ne forment pas une durée magique. Étendez la période si
          votre activité est saisonnière, si une mise en ligne récente a produit
          un nombre inhabituel de corrections ou si les demandes importantes
          apparaissent rarement. Vous cherchez une période qui représente le
          fonctionnement habituel, pas celle qui rend une option
          artificiellement attractive.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Ce qui est revenu",
              body: "Même anomalie, entretien régulier, assistance récurrente ou petites évolutions comparables.",
              result:
                "Ce groupe peut justifier une disponibilité organisée dans la durée.",
            },
            {
              title: "Ce qui a changé en cours de route",
              body: "Priorité déplacée, cause inconnue, dépendance externe ou besoin précisé après une première analyse.",
              result:
                "Ce groupe demande de décider progressivement et de contrôler le temps.",
            },
            {
              title: "Ce qui possédait une fin claire",
              body: "Fonction attendue, utilisateurs connus, règles stables et scénarios permettant de vérifier le résultat.",
              result:
                "Ce groupe peut devenir un lot séparé, avec une acceptation explicite.",
            },
            {
              title: "Ce qui n’aurait pas dû démarrer",
              body: "Idée sans utilisateur, urgence sans conséquence, demande sans responsable ou travail bloqué par un accès absent.",
              result:
                "Ce groupe doit être précisé, préparé ou reporté avant de consommer du budget.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
              <p className="mb-0 mt-3 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-200">
                {item.result}
              </p>
            </article>
          ))}
        </div>

        <p>
          Ce relevé empêche deux erreurs. La première consiste à acheter un
          forfait global parce que « la maintenance revient chaque mois », alors
          que l’essentiel du travail est une évolution unique. La seconde
          consiste à payer tout au temps alors que les mêmes corrections
          reviennent et pourraient être suivies avec une continuité plus
          lisible.
        </p>

        <h2 id="modes">3. Quatre façons d’acheter le travail de maintenance</h2>

        <p>
          Les quatre catégories ci-dessous sont une grille pratique Hagnéré
          Code, pas des définitions juridiques universelles. Une proposition
          peut employer d’autres mots. Recherchez le fonctionnement concret qui
          se cache derrière eux.
        </p>

        <div className="not-prose my-7 grid gap-4 lg:grid-cols-2">
          {modes.map((mode) => (
            <article
              key={mode.title}
              className={`rounded-2xl border p-5 sm:p-6 ${mode.border}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {mode.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {mode.summary}
              </p>
              <dl className="mb-0 mt-5 space-y-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Quand cela convient
                  </dt>
                  <dd className="mb-0 mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {mode.good}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Ce qu’il faut surveiller
                  </dt>
                  <dd className="mb-0 mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {mode.watch}
                  </dd>
                </div>
              </dl>
              <p className="mb-0 mt-5 border-t border-zinc-900/10 pt-4 text-sm font-semibold leading-relaxed text-zinc-950 dark:border-white/10 dark:text-white">
                {mode.decision}
              </p>
            </article>
          ))}
        </div>

        <p>
          Aucun mode ne garantit seul le prix final, le délai ou le résultat.
          Une capacité récurrente peut être mal dimensionnée. Une prestation au
          temps peut manquer de décisions. Un lot peut reposer sur des
          hypothèses fragiles. Une formule hybride peut devenir illisible si
          personne ne sait quelle règle s’applique. La bonne proposition montre
          donc aussi qui décide et comment le travail est vérifié.
        </p>

        <h2 id="choisir">
          4. Choisissez selon ce qui revient, change ou peut être borné
        </h2>

        <h3>Réservez une capacité pour le travail qui revient réellement</h3>

        <p>
          Une capacité récurrente devient pertinente lorsque l’application
          demande une attention régulière : anomalies, mises à jour nécessaires,
          assistance aux utilisateurs ou petites évolutions fréquentes.
          L’entreprise achète alors une continuité organisée, pas la certitude
          qu’un nombre fixe de demandes sera fermé chaque mois.
        </p>

        <p>
          Vérifiez toutefois que cette continuité correspond à un besoin
          observable. Si deux demandes isolées sont apparues en un an et que
          l’éditeur du logiciel couvre déjà les corrections, une intervention
          ponctuelle peut rester plus simple. À l’inverse, si les demandes
          reviennent mais que personne ne les classe, réserver du temps ne
          résoudra pas le problème de décision.
        </p>

        <p>
          La fréquence ne suffit pas. Un incident rare qui bloque les ventes
          peut justifier une plage de couverture et un délai de prise en charge
          convenus. Dix petites demandes sans effet immédiat peuvent, au
          contraire, attendre un point planifié. Distinguez donc la{" "}
          <strong>capacité de production</strong> — le volume de travail que le
          prestataire peut réaliser — de l’
          <strong>engagement de support</strong> — les plages couvertes, la
          manière d’alerter et le délai convenu pour commencer à traiter un
          incident. L’un n’implique pas automatiquement l’autre.
        </p>

        <h3>Payez du temps piloté lorsque vous devez encore comprendre</h3>

        <p>
          Le temps réellement mobilisé convient à une recherche de cause, à une
          intégration dépendante d’un tiers ou à des priorités qui peuvent
          changer. Vous ne demandez pas au prestataire de promettre trop tôt une
          fin qu’il ne peut pas connaître. En échange, votre entreprise doit
          décider plus souvent.
        </p>

        <p>
          Un temps piloté possède des limites. Avant de commencer, écrivez le
          problème, la personne autorisée à engager du travail et le premier
          point d’arrêt. À ce point, le prestataire remet ce qu’il a confirmé,
          écarté ou appris, le temps mobilisé et les options suivantes. Vous
          décidez alors de continuer, de transformer la suite en lot ou de
          reporter.
        </p>

        <h3>Demandez un lot lorsque la fin peut être vérifiée</h3>

        <p>
          Un lot borné convient à une évolution dont l’entreprise connaît les
          utilisateurs, les règles essentielles et les scénarios d’acceptation.
          Le sujet n’a pas besoin d’être décrit par cent pages : il doit être
          assez clair pour que les deux parties reconnaissent ce qui est inclus,
          ce qui ne l’est pas et ce qui montrera que la fonction marche.
        </p>

        <p>
          Ne forcez pas un lot sur une inconnue majeure. Si la cause du problème
          n’est pas observée, si l’API d’un tiers n’est pas documentée ou si les
          équipes ne s’accordent pas sur le résultat, achetez d’abord une
          exploration avec un point d’arrêt. Le lot viendra lorsque ses
          hypothèses seront défendables.
        </p>

        <InfoBox
          variant="blue"
          title="Le mode suit chaque famille de demandes, pas toute l’application"
        >
          <p className="m-0">
            Une même application peut recevoir un suivi récurrent, une
            exploration ponctuelle et une évolution bornée. Exiger un modèle
            unique pour tout simplifie parfois la facture, mais peut rendre les
            responsabilités et les résultats beaucoup moins clairs.
          </p>
        </InfoBox>

        <h2 id="hybride">
          5. Une formule hybride sépare la continuité des évolutions
        </h2>

        <p>
          <strong>Exemple illustratif fictif :</strong> une PME utilise une
          application pour préparer des documents commerciaux et les faire
          valider. Son historique des trois derniers mois mélange des anomalies
          récurrentes, une lenteur encore inexpliquée, une évolution bien
          définie et une idée de tableau de bord sans utilisateur identifié.
          Mettre ces quatre demandes dans le même forfait masquerait leur
          nature.
        </p>

        <GuideTable
          caption="Exemple illustratif fictif — reclassement de quatre demandes"
          headers={["Demande", "Mode candidat", "Pourquoi et résultat attendu"]}
          rows={sampleRequests}
        />

        <p>
          Dans cet exemple fictif, la solution n’est ni « tout au forfait » ni «
          tout en régie ». Une capacité récurrente suit les anomalies d’export.
          La lenteur reçoit d’abord un diagnostic borné : il se termine par les
          mesures, les faits établis, les causes écartées, les inconnues et une
          décision d’arrêt ou de suite. Ce diagnostic pourrait être facturé à un
          prix fixe ou au temps plafonné sans changer ce résultat attendu. La
          validation avant envoi devient une livraison séparée. Le tableau de
          bord reste en attente tant que personne ne sait quelle décision il
          doit faciliter.
        </p>

        <p>
          Cette séparation rend la facture plus lisible : chaque dépense répond
          à un besoin différent. Elle rend aussi les désaccords plus faciles à
          traiter. Une correction récurrente ne change pas silencieusement le
          prix d’une évolution, et une exploration ne se transforme pas en
          promesse de livraison avant que sa cause soit comprise.
        </p>

        <h2 id="controles">
          6. Gardez les mêmes règles de contrôle dans chaque modèle
        </h2>

        <p>
          Le mode de paiement ne remplace ni l’organisation ni la sécurité. Que
          vous achetiez une capacité, du temps ou un lot, chaque intervention
          doit avoir une entrée, une personne qui décide, une trace et une fin
          observable.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sharedControls.map((control) => (
            <article
              key={control.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {control.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {control.body}
              </p>
            </article>
          ))}
        </div>

        <p>
          Pour les accès de maintenance à distance, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande d’enregistrer les interventions, d’ouvrir les accès
            nécessaires pour une durée définie à l’avance et de les refermer à
            l’issue
          </a>
          . Payer au temps ne justifie donc pas un compte permanent partagé.
          Payer un forfait ne dispense pas non plus de savoir qui est intervenu.
        </p>

        <p>
          Si le prestataire traite des données personnelles pour votre compte,
          les règles de sous-traitance doivent être adaptées aux opérations
          réelles. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche de la CNIL sur la sous-traitance
          </a>{" "}
          demande notamment de répartir les responsabilités, d’encadrer
          l’authentification, la restitution ou la destruction des données, les
          incidents et la vérification des mesures de sécurité. Ces sujets
          dépendent du contexte et méritent une revue contractuelle appropriée.
        </p>

        <p>
          Ce guide reste volontairement centré sur le choix du fonctionnement.
          Une fois ce choix fait, utilisez le guide dédié pour{" "}
          <Link href="/guides/contrat-tma-application">
            vérifier le contenu d’un contrat TMA
          </Link>
          , notamment les demandes couvertes, les délais convenus, la sécurité,
          l’acceptation et la sortie.
        </p>

        <h2 id="reclassement">
          7. Reclassez maintenant vos demandes de maintenance
        </h2>

        <p>
          Ouvrez un tableur ou l’outil déjà utilisé par votre équipe. Copiez les
          demandes des trois derniers mois sans essayer de les rendre plus
          propres qu’elles ne le sont. Une formulation ambiguë fait partie du
          diagnostic : elle montre où l’entreprise et le prestataire risquent de
          ne pas se comprendre.
        </p>

        <GuideTable
          caption="Les huit champs à copier dans votre tableau"
          headers={["Champ", "Question à poser", "Ce qu’il faut noter"]}
          rows={requestFields.map((item) => [
            item.field,
            item.question,
            item.entry,
          ])}
        />

        <ol className="space-y-4">
          <li>
            <strong>Rassemblez les demandes.</strong> Incluez les corrections,
            questions, accès, petites évolutions et interventions urgentes
            réellement demandées.
          </li>
          <li>
            <strong>Décrivez la conséquence.</strong> Remplacez « urgent » par
            ce qui se bloque, se retarde ou devient faux pour l’entreprise.
          </li>
          <li>
            <strong>Écrivez le résultat attendu.</strong> Si personne ne sait
            comment reconnaître la fin, marquez la demande « à explorer ».
          </li>
          <li>
            <strong>Nommez qui décidera.</strong> Une personne choisit la
            priorité ; une personne autorisée accepte le résultat. Elles peuvent
            être la même.
          </li>
          <li>
            <strong>Attribuez un mode candidat.</strong> Récurrent, temps
            piloté, lot ou report. Vous pourrez le corriger après discussion.
          </li>
          <li>
            <strong>Regroupez les lignes semblables.</strong> Le volume et la
            répétition apparaissent alors sans inventer de moyenne.
          </li>
        </ol>

        <InfoBox
          variant="amber"
          title="Deux contrôles inverses évitent un mauvais achat"
        >
          <ul className="m-0 space-y-2 pl-5">
            <li>
              Si aucune personne côté entreprise ne peut prioriser et accepter,
              du temps acheté au fil de l’eau restera difficile à contrôler.
            </li>
            <li>
              Si le résultat et ses dépendances ne peuvent pas encore être
              bornés, un prix fermé reposera sur des hypothèses fragiles.
            </li>
          </ul>
        </InfoBox>

        <p>
          Le résultat de cet exercice n’est pas nécessairement un contrat. Vous
          pouvez conclure qu’un accès manque, qu’un éditeur doit répondre, qu’un
          besoin doit être expliqué aux utilisateurs ou qu’une évolution peut
          attendre. Éviter une dépense mal préparée est déjà une décision utile.
        </p>

        <h2 id="comparer">
          8. Comparez les propositions sur le même historique
        </h2>

        <p>
          Préparez le même tableau pour les prestataires consultés, mais ne leur
          envoyez pas l’historique brut. Retirez systématiquement les noms,
          identifiants, secrets, données personnelles et informations de
          sécurité qui ne sont pas nécessaires à la comparaison. Transmettez
          ensuite le document par un canal contrôlé, aux seuls destinataires
          prévus. Cette précaution prolonge les{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations de la CNIL sur la sous-traitance
          </a>
          . Les prestataires peuvent proposer des organisations différentes,
          mais ils répondent alors au même ensemble de demandes assaini. Une
          comparaison limitée au prix mensuel oppose souvent des choses qui ne
          couvrent ni les mêmes demandes ni le même travail côté client.
        </p>

        <GuideTable
          caption="Ce que chaque proposition doit rendre comparable"
          headers={["Sujet", "Question à poser", "Réponse exploitable"]}
          rows={[
            [
              "Demandes couvertes",
              "Quelles familles entrent dans la proposition et lesquelles exigent un accord séparé ?",
              "Une liste reliée à votre historique, avec exclusions et demandes à préciser.",
            ],
            [
              "Mode d’achat",
              "Quelle règle s’applique à chaque famille ?",
              "Capacité, temps, lot ou report clairement associés aux demandes.",
            ],
            [
              "Continuité de service",
              "Quelles plages sont couvertes, comment alerter et quel délai de prise en charge est réellement convenu ?",
              "Un engagement de support distinct de la capacité disponible pour produire des corrections ou évolutions.",
            ],
            [
              "Décision",
              "Qui peut engager du travail, déplacer une priorité et arrêter une exploration ?",
              "Des rôles nommés et des points de décision observables.",
            ],
            [
              "Suivi",
              "Que recevrez-vous pour comprendre le temps et le résultat ?",
              "Demande concernée, action réalisée, inconnues restantes et prochaine décision.",
            ],
            [
              "Acceptation",
              "Comment une correction, une analyse ou une évolution sera-t-elle fermée ?",
              "Un comportement vérifié, une conclusion remise ou un refus motivé.",
            ],
            [
              "Accès et données",
              "Qui ouvre, utilise et ferme les accès, et comment les interventions sont-elles tracées ?",
              "Comptes nominatifs, durée utile, journal et responsabilités adaptées aux données.",
            ],
          ]}
        />

        <p>
          Ajoutez ensuite le prix selon la règle réellement proposée : somme
          récurrente, temps consommé, prix du lot, mise en route et dépenses
          séparées. Ne calculez pas ici un faux budget annuel en transformant
          les inconnues en zéro. Le guide{" "}
          <Link href="/guides/cout-maintenance-application-metier">
            consacré au coût de maintenance d’une application métier
          </Link>{" "}
          permet de construire ce budget après avoir choisi le fonctionnement.
        </p>

        <h2 id="signer">9. Décidez s’il faut signer maintenant ou attendre</h2>

        <p>
          Vous pouvez signer un dispositif de maintenance lorsque les demandes
          principales sont visibles, les accès disponibles et les personnes
          capables de décider et d’accepter identifiées. Il restera toujours des
          inconnues ; elles doivent apparaître comme telles et recevoir une
          manière de les explorer ou de les arrêter.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-emerald-950 dark:text-emerald-200">
              Signez un fonctionnement récurrent
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-emerald-900/80 dark:text-emerald-300">
              Les demandes reviennent, l’application doit rester suivie et votre
              entreprise sait fixer les priorités. Si une interruption rare est
              critique, les plages et le délai de prise en charge sont écrits
              séparément de la capacité de travail.
            </p>
          </article>
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <h3 className="m-0 text-base font-semibold text-blue-950 dark:text-blue-200">
              Commencez par une exploration limitée
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-blue-900/80 dark:text-blue-300">
              Les accès existent, mais la cause, la taille ou les dépendances
              restent inconnues. Achetez un diagnostic borné qui remet les faits
              établis, les inconnues et une décision d’arrêt avant de choisir la
              suite.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-amber-950 dark:text-amber-200">
              Reportez la signature
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-amber-900/80 dark:text-amber-300">
              Personne ne peut décider, les accès sont absents ou le résultat
              n’a aucun utilisateur identifié. Corrigez d’abord ce manque.
            </p>
          </article>
        </div>

        <p>
          Si vous changez de prestataire et ne savez pas encore si le code, les
          données, l’hébergement et la documentation sont récupérables, ne
          mélangez pas cette reprise avec le fonctionnement courant. Commencez
          par{" "}
          <Link href="/guides/reprendre-maintenance-site-autre-agence">
            organiser la reprise de maintenance et tester les accès
          </Link>
          . Vous choisirez ensuite le mode d’achat sur un terrain réellement
          maîtrisable.
        </p>

        <h2 id="accompagnement">
          10. Quand Hagnéré Code peut réellement vous aider
        </h2>

        <p>
          Un échange devient utile lorsque votre application existe, que des
          demandes peuvent être retrouvées et que votre entreprise accepte de
          nommer une personne pour les expliquer, les prioriser et vérifier le
          résultat. Le premier travail consiste alors à séparer le récurrent,
          l’incertain et le borné avant de parler de jours ou de forfait.
        </p>

        <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Hagnéré Code peut être pertinent si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>
                l’application existe et ses demandes peuvent être listées ;
              </li>
              <li>les accès peuvent être transmis et contrôlés ;</li>
              <li>un interlocuteur métier peut choisir les priorités ;</li>
              <li>
                vous voulez distinguer continuité, exploration et évolutions
                bornées ;
              </li>
              <li>vous acceptez de vérifier les résultats avant de fermer.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Hagnéré Code ne sera pas le bon interlocuteur si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>
                vous attendez une responsabilité illimitée pour un prix minimal
                ;
              </li>
              <li>personne ne peut donner accès à l’application ;</li>
              <li>personne ne peut expliquer ni accepter le travail ;</li>
              <li>
                vous demandez un prix fermé malgré des inconnues majeures ;
              </li>
              <li>
                vous refusez toute trace des demandes et des interventions.
              </li>
            </ul>
          </article>
        </div>

        <GuideInlineCTA
          title="Transformez vos demandes en une maintenance claire et contrôlable"
          description="Préparez l’historique des trois derniers mois, les accès disponibles et la personne qui décidera. L’échange sert d’abord à séparer ce que vous achetez — continuité, diagnostic ou livraison — puis sa facturation — prix fixe, capacité ou temps — avec les responsabilités, la couverture et les résultats à vérifier."
          tags={[
            "Vos demandes servent de départ",
            "Les inconnues restent visibles",
            "Vous pouvez aussi reporter",
          ]}
          ctaLabel="Préparer ma maintenance"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <p>
          Le bon choix ne porte donc pas sur un mot. Il porte sur la manière
          dont votre entreprise transforme une demande en décision, en travail
          puis en résultat vérifié. Réservez une continuité pour ce qui revient,
          achetez un diagnostic borné lorsque la cause reste inconnue, convenez
          d’un lot lorsque sa fin est claire et reportez ce que personne n’est
          prêt à décider. Le diagnostic peut être facturé à prix fixe ou au
          temps plafonné : son résultat attendu reste le même.
        </p>

        <h2 id="sources">Sources et limites</h2>

        <p>
          Sources consultées le 23 juillet 2026. Les définitions et
          recommandations officielles peuvent évoluer ; le contrat réel, les
          données traitées et l’organisation de votre entreprise restent
          déterminants.
        </p>

        <ul>
          <li>
            Légifrance —{" "}
            <a
              href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
              target="_blank"
              rel="noopener noreferrer"
            >
              article 38 du CCAG-TIC sur la maintenance et la tierce maintenance
              applicative
            </a>
            . Ce texte concerne les marchés publics qui s’y réfèrent ; il sert
            ici à éclairer les familles de maintenance, pas à imposer un contrat
            privé.
          </li>
          <li>
            Cigref–Syntec informatique —{" "}
            <a
              href="https://www.cigref.fr/cigref_publications/RapportsContainer/Parus2004/2004_-_Charte_CIGREF_Syntec_informatique_-_infogerance_et_TMA_web.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              charte « Infogérance et TMA »
            </a>{" "}
            de 2004. Elle apporte un repère historique de vocabulaire, pas une
            preuve des tarifs ou usages commerciaux actuels.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
              target="_blank"
              rel="noopener noreferrer"
            >
              encadrer les accès et les traces de maintenance
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noopener noreferrer"
            >
              gérer la sous-traitance
            </a>
            .
          </li>
        </ul>

        <p>
          Les catégories « capacité récurrente », « temps piloté », « lot borné
          » et « hybride » sont une grille opérationnelle Hagnéré Code. Elles ne
          constituent ni des qualifications juridiques universelles ni une
          recommandation automatique. Ce guide ne fournit aucun tarif, minimum
          mensuel, délai d’intervention, engagement de disponibilité ou avis
          juridique personnalisé. Faites adapter les responsabilités, la
          sécurité, les données, les pénalités et la sortie à votre contrat
          réel.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
