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

const guide = getGuide("mvp-saas-quoi-inclure");

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
        alt: "Les sept couches d’un MVP SaaS exploitable pour un premier client",
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
      name: "Que faut-il inclure dans un MVP SaaS ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien de fonctionnalités faut-il dans un MVP SaaS ?",
    answer:
      "Il n’existe pas de nombre universel. Un parcours critique complet et les socles nécessaires à son exploitation valent mieux que cinq fonctions disjointes. Comptez les capacités par la preuve qu’elles permettent d’obtenir, puis retirez celles qui n’influencent ni la valeur, ni la sécurité, ni l’apprentissage du premier client.",
  },
  {
    question: "Un MVP SaaS doit-il obligatoirement intégrer Stripe ?",
    answer:
      "Non. Une facturation manuelle peut convenir à un pilote B2B si le contrat, les droits d’accès, le statut de paiement et la sortie sont maîtrisés. Le paiement automatisé devient nécessaire lorsque l’achat autonome, le volume, les changements d’offre ou la gestion des échecs font partie du test produit.",
  },
  {
    question: "Le support et l’administration peuvent-ils rester manuels ?",
    answer:
      "Oui, s’ils sont documentés, traçables, réversibles et compatibles avec la charge. Chaque opération manuelle doit avoir un responsable, une procédure, une limite de volume et un déclencheur d’automatisation. Sa répétition devient alors une donnée d’apprentissage, pas une dette cachée.",
  },
  {
    question: "Faut-il une architecture multi-tenant dès le MVP ?",
    answer:
      "Il faut au minimum choisir et tester le mode d’isolation adapté. Si plusieurs organisations partagent un même système, elles ne doivent pas accéder aux données les unes des autres. Une architecture multi-tenant avancée n’est toutefois pas la seule manière de servir un premier pilote isolé.",
  },
  {
    question: "Peut-on reporter la sécurité et le RGPD à la V1 ?",
    answer:
      "Non pour les mesures nécessaires au risque réel et au traitement effectué. Le niveau doit être proportionné aux données, aux accès et aux conséquences d’un incident ; le mot MVP ne crée aucune exemption générale. Une checklist ne constitue cependant ni une certification de sécurité ni un avis juridique personnalisé.",
  },
  {
    question: "Une application mobile est-elle nécessaire dans un MVP SaaS ?",
    answer:
      "Seulement si le parcours critique dépend réellement du hors-ligne, de la caméra, de la géolocalisation, des notifications ou d’un usage mobile dominant. Sinon, une interface web adaptée aux petits écrans peut permettre de tester la valeur avant de financer deux produits à exploiter.",
  },
];


const mvpLayers = [
  {
    label: "Valeur",
    result:
      "Un travail métier complet produit un résultat que l’utilisateur peut employer.",
    manual: "Préparer l’entrée ou vérifier le résultat avec lui.",
    proof: "Le parcours est exécuté de bout en bout avec un cas représentatif.",
    later: "Les variantes et automatisations qui ne changent pas la preuve.",
  },
  {
    label: "Compte",
    result:
      "La bonne personne entre, récupère son accès et ne voit que son périmètre.",
    manual: "Créer l’organisation et envoyer la première invitation.",
    proof: "Invitation, retrait et contrôle d’un rôle sont testés.",
    later:
      "Libre-service public, connexion unique d’entreprise (SSO) ou matrice de rôles très fine.",
  },
  {
    label: "Données",
    result:
      "Les données utiles entrent, restent séparées, peuvent être corrigées et ressortir.",
    manual: "Réaliser un import initial accompagné et contrôlé.",
    proof: "Jeu représentatif, erreur, export et cycle de vie sont vérifiés.",
    later: "Importateur universel et connecteurs non nécessaires au pilote.",
  },
  {
    label: "Offre",
    result:
      "Le droit d’usage correspond au contrat ou au paiement réellement choisi.",
    manual: "Contrat et facture B2B, puis activation contrôlée.",
    proof: "Entrée, changement, échec et sortie ont un traitement écrit.",
    later:
      "Essai gratuit, coupons ou catalogue complexe si le test est accompagné.",
  },
  {
    label: "Exploitation",
    result:
      "L’équipe sait assister, débloquer et administrer sans improviser dans la base.",
    manual: "Support direct et procédure interne sobre.",
    proof: "Un incident prévu est identifié, traité et tracé.",
    later:
      "Centre d’aide exhaustif et interface interne d’administration très automatisée.",
  },
  {
    label: "Confiance",
    result:
      "Accès, secrets, sauvegarde, surveillance et responsabilités sont proportionnés.",
    manual: "Revue humaine d’une action sensible selon une procédure.",
    proof: "Restauration, contrôle d’accès et canal d’incident sont exercés.",
    later:
      "Référentiels ou niveaux de service non exigés par le risque ou le contrat.",
  },
  {
    label: "Apprentissage",
    result:
      "Le lot montre où la valeur arrive, où elle échoue et ce qu’il coûte à servir.",
    manual: "Consigner retours et temps d’intervention après chaque usage.",
    proof:
      "Événements, erreurs et décision de suite sont définis avant le pilote.",
    later: "Tableau de bord avancé sans décision associée.",
  },
];

function MvpVerticalSlice() {
  return (
    <figure
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="mvp-slice-title"
    >
      <figcaption id="mvp-slice-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
          Artefact de cadrage
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          La tranche verticale minimale du premier client
        </span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-400">
          Chaque couche doit atteindre un résultat vérifiable. « Manuel » décrit
          une procédure assumée ; « plus tard » possède un déclencheur, pas une
          promesse vague.
        </span>
      </figcaption>

      <ol className="relative space-y-3 before:absolute before:bottom-5 before:left-[1.1rem] before:top-5 before:w-px before:bg-gradient-to-b before:from-violet-400 before:via-blue-400 before:to-emerald-400 sm:before:left-[1.35rem]">
        {mvpLayers.map((layer, index) => (
          <li
            key={layer.label}
            className="relative rounded-xl border border-white/10 bg-white/[0.045] p-3 pl-12 sm:p-4 sm:pl-14"
          >
            <span className="absolute left-2.5 top-3.5 z-10 flex size-7 items-center justify-center rounded-lg bg-white text-xs font-black text-zinc-950 sm:left-3.5 sm:top-4 sm:size-8">
              {index + 1}
            </span>
            <h3 className="m-0 text-sm font-bold text-white">{layer.label}</h3>
            <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-300">
              {layer.result}
            </p>
            <dl className="grid gap-2 text-xs sm:grid-cols-3">
              <div className="rounded-lg bg-black/20 p-2.5">
                <dt className="font-semibold text-blue-300">Manuel possible</dt>
                <dd className="mt-1 text-zinc-400">{layer.manual}</dd>
              </div>
              <div className="rounded-lg bg-black/20 p-2.5">
                <dt className="font-semibold text-emerald-300">Preuve</dt>
                <dd className="mt-1 text-zinc-400">{layer.proof}</dd>
              </div>
              <div className="rounded-lg bg-black/20 p-2.5">
                <dt className="font-semibold text-amber-300">Plus tard</dt>
                <dd className="mt-1 text-zinc-400">{layer.later}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </figure>
  );
}

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
          { label: "Que faut-il inclure dans un MVP SaaS ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Un MVP exploitable n’est pas une démonstration avec moins d’écrans. C’est la plus petite tranche qui permet à un premier client réel d’entrer, d’obtenir le résultat promis, d’être assisté et de sortir sans improvisation."
        heroAction={{
          href: "#tranche-verticale",
          label: "Voir la tranche minimale",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Publié le " + formatGuideDate(guide.datePublished)}
        keyPoints={[
          {
            number: "01",
            title: "1 parcours client complet",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "7 socles d’exploitation",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "10 tests avant production",
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
            href: "/guides/valider-idee-saas-avant-developper",
            label: "Valider l’idée avant le MVP",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Budgéter le SaaS et son exploitation",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou développement sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Écrire les scénarios et la recette",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Sécuriser code, droits et accès",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Développement de SaaS sur mesure",
          },
        ]}
        faqTitle="Périmètre d’un MVP SaaS : les questions restantes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Le premier client est prêt. La fonction métier marche en
            démonstration.
          </strong>{" "}
          Mais qui crée son organisation, invite ses collègues, corrige un
          import, constate qu’un traitement n’est pas parti, répond au support
          et organise la sortie de ses données ? Si ces réponses n’existent pas,
          vous avez peut-être une bonne démonstration. Vous n’avez pas encore un
          MVP SaaS exploitable.
        </p>

        <p>
          La réponse courte est donc conditionnelle : incluez{" "}
          <strong>un parcours de valeur complet</strong>, puis le minimum de
          comptes, données, offre, exploitation, confiance et mesure qui permet
          de servir le premier client réel. Une action peut rester manuelle si
          elle est écrite, attribuée, traçable et soutenable. Une fonction peut
          attendre si son déclencheur est explicite. Le mot « minimum » retire
          de la largeur ; il ne retire pas la maîtrise.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-3">
          {[
            [
              "09:00",
              "Entrer",
              "Organisation créée, bonne personne invitée, accès récupérable et rôle limité.",
            ],
            [
              "11:20",
              "Obtenir la valeur",
              "Donnée représentative, action métier complète, résultat utilisable et erreur compréhensible.",
            ],
            [
              "16:40",
              "Être servi",
              "Support capable d’identifier le blocage, de le corriger, de tracer l’action et de décider la suite.",
            ],
          ].map(([time, title, description]) => (
            <div
              key={time}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 font-mono text-xs font-semibold text-violet-600 dark:text-violet-400">
                {time}
              </p>
              <p className="mb-1 text-sm font-bold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="Cette méthode commence après la validation du problème"
        >
          Elle suppose un premier client ou pilote nommable, un problème B2B
          documenté et une décision que l’usage réel doit éclairer. Si vous ne
          disposez encore que de compliments ou d’une liste d’attente, commencez
          par{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            valider l’idée avant de développer
          </Link>
          . Marketplace, grand public, santé, finance ou données très sensibles
          demandent en outre des analyses propres à leur périmètre.
        </InfoBox>

        <GuideToc
          items={[
            { id: "premier-client", label: "1. Le test du premier client" },
            {
              id: "prototype-pilote-mvp",
              label: "2. Prototype, POC, pilote, MVP ou V1 ?",
            },
            {
              id: "tranche-verticale",
              label: "3. Une tranche complète, pas une liste courte",
            },
            {
              id: "sept-socles",
              label: "4. Remplir les sept socles",
            },
            {
              id: "manuel-ou-automatique",
              label: "5. Ce qui peut rester manuel",
            },
            {
              id: "parcours-et-echecs",
              label: "6. Concevoir le parcours et ses échecs",
            },
            {
              id: "operateur",
              label: "7. Le produit dont l’opérateur a besoin",
            },
            {
              id: "offre-facturation-support",
              label: "8. Vendre sans tout automatiser",
            },
            {
              id: "confiance",
              label: "9. Sécurité, données et accessibilité",
            },
            { id: "mesure", label: "10. Mesurer l’apprentissage" },
            { id: "exemple", label: "11. Exemple illustratif rempli" },
            { id: "dix-tests", label: "12. Dix tests avant production" },
            {
              id: "contrat-premier-client",
              label: "13. Le contrat de premier client",
            },
            { id: "decision", label: "14. Choisir le bon format" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="premier-client">
          1. Le MVP se juge pendant une journée réelle
        </h2>

        <p>
          Le{" "}
          <a
            href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            produit minimum viable décrit par Eric Ries
          </a>{" "}
          sert à obtenir un apprentissage utile avec une version cohérente du
          produit. Cette source méthodologique ne fixe ni écrans obligatoires,
          ni architecture, ni niveau de conformité. Pour un SaaS B2B déjà
          destiné à un premier client réel, nous en tirons une conséquence
          pratique : le périmètre doit permettre d’observer la valeur sans
          cacher le coût ni le risque nécessaires pour la délivrer.
        </p>

        <p>
          Écrivez d’abord une phrase testable : « Pour{" "}
          <em>[utilisateur précis]</em>, le produit transforme{" "}
          <em>[entrée réelle]</em> en <em>[résultat utilisable]</em>, ce qui
          permet de décider <em>[automatiser, corriger, élargir ou arrêter]</em>
          . » Si plusieurs produits ou décisions entrent dans la phrase, le lot
          est probablement trop large. Si aucune décision ne dépend du résultat,
          le développement n’est probablement pas encore le meilleur test.
        </p>

        <p>
          Rejouez ensuite une journée : ouverture du compte, première donnée,
          résultat, erreur, demande d’aide, action d’administration, facturation
          ou droit d’accès, sauvegarde, export et mesure. Vous ne cherchez pas à
          anticiper tous les incidents futurs. Vous cherchez ceux qui feraient
          perdre une donnée, exposeraient un autre client, bloqueraient le
          travail ou rendraient l’offre incohérente dès le pilote.
        </p>

        <h2 id="prototype-pilote-mvp">
          2. Prototype, POC, pilote, MVP ou V1 ne prouvent pas la même chose
        </h2>

        <p>
          Une <strong>preuve de faisabilité</strong>, souvent appelée POC,
          vérifie qu’un verrou technique peut être levé. Un{" "}
          <strong>prototype</strong> rend un parcours compréhensible, sans
          devoir traiter de vraies données. Un{" "}
          <strong>pilote accompagné</strong> teste la valeur avec un client réel
          tout en assumant des opérations manuelles. Le{" "}
          <strong>MVP de production</strong> rend ce premier usage suffisamment
          répétable et exploitable. La <strong>V1</strong> élargit ensuite la
          couverture ou l’autonomie.
        </p>

        <GuideTable
          headers={[
            "Format",
            "Incertitude traitée",
            "Données et client réels",
            "Sortie attendue",
          ]}
          rows={[
            [
              "POC",
              "faisabilité d’un verrou technique",
              "non requis ; jeu fictif ou anonymisé de préférence",
              "jeter, approfondir ou arrêter",
            ],
            [
              "Prototype",
              "compréhension du parcours et du résultat",
              "non requis ; aucune exploitation normale",
              "corriger le parcours avant de coder le socle",
            ],
            [
              "Pilote accompagné",
              "valeur et usage dans un contexte réel",
              "oui, avec opérations manuelles déclarées",
              "automatiser ce qui se répète, pivoter ou arrêter",
            ],
            [
              "MVP de production",
              "usage réel répétable et coût d’exploitation",
              "oui, avec socle minimal testé",
              "mesurer puis élargir seulement ce que la preuve justifie",
            ],
            [
              "V1",
              "couverture de plusieurs profils ou engagements",
              "oui, exploitation plus durable",
              "piloter une feuille de route produit",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works"
            target="_blank"
            rel="noopener noreferrer"
          >
            manuel de conception des services GOV.UK
          </a>{" "}
          recommande, dans son contexte public britannique, de tester les
          hypothèses les plus risquées pendant une phase alpha et autorise la
          conclusion « ne pas construire ». Ce n’est pas une norme pour les SaaS
          privés français, mais la discipline est utile : ne financez pas un
          produit exploitable quand une maquette, un service manuel ou une
          intégration existante peut encore répondre à la question.
        </p>

        <h2 id="tranche-verticale">
          3. Construisez une tranche complète, pas une liste courte
        </h2>

        <p>
          Un MVP peut n’exposer qu’une seule fonction métier et pourtant
          nécessiter plusieurs capacités invisibles. Inversement, une
          authentification sophistiquée, un paiement automatisé, une application
          mobile et dix tableaux de bord ne rendent pas un lot viable si aucun
          utilisateur n’obtient le résultat promis. La bonne unité de cadrage
          n’est donc ni l’écran ni la « fonctionnalité ». C’est la tranche
          verticale qui traverse le parcours client et les moyens de
          l’exploiter.
        </p>

        <MvpVerticalSlice />

        <p>
          Chaque ligne doit avoir un propriétaire et une preuve. Si une couche
          est absente, ne la compensez pas par la qualité d’une autre : une
          interface claire n’isole pas les données ; une sauvegarde planifiée ne
          prouve pas la restauration ; un contrat signé ne montre pas que le
          support peut débloquer l’utilisateur. Le bon résultat peut donc être «
          pilote accompagné » plutôt que « MVP en libre-service ».
        </p>

        <h2 id="sept-socles">
          4. Remplissez la fiche de première exploitation
        </h2>

        <p>
          Copiez la grille ci-dessous dans votre document de cadrage. Une ligne
          n’est terminée que lorsque son résultat, sa procédure temporaire, sa
          preuve, son report et son responsable sont explicites. « Ce sera fait
          plus tard » ne répond à aucune de ces questions.
        </p>

        <GuideTable
          headers={[
            "Socle",
            "Résultat nécessaire maintenant",
            "Preuve avant production",
            "Responsable à nommer",
          ]}
          rows={[
            [
              "Valeur",
              "un parcours critique transforme une entrée réelle en résultat utilisable",
              "scénario exécuté de bout en bout avec critère d’acceptation",
              "responsable produit ou métier",
            ],
            [
              "Compte",
              "organisation, identité, invitation, récupération et rôles minimaux",
              "création, retrait et accès interdit testés",
              "administrateur client et opérateur",
            ],
            [
              "Données",
              "entrée, validation, isolation, correction, export et durée adaptés",
              "jeu représentatif, erreur et sortie vérifiés",
              "métier, technique et protection des données selon le cas",
            ],
            [
              "Offre",
              "droits d’usage cohérents avec contrat, plan ou paiement",
              "entrée, changement, échec et fin testés",
              "vendeur, facturation et produit",
            ],
            [
              "Exploitation",
              "support et administration peuvent comprendre et débloquer",
              "incident prévu traité sans modification sauvage",
              "opérateur ou support nommé",
            ],
            [
              "Confiance",
              "mesures proportionnées aux accès, données et conséquences",
              "contrôles d’accès, restauration, alertes et canal d’incident exercés",
              "dirigeant, technique et prestataires concernés",
            ],
            [
              "Apprentissage",
              "usage, échec et charge manuelle rendent la suite décidable",
              "événements et décision de sortie écrits avant le lancement",
              "responsable produit",
            ],
          ]}
        />

        <p>
          Les sept socles ne signifient pas sept chantiers lourds. Pour un seul
          pilote B2B, la création de l’organisation peut être manuelle, le
          support direct et la facture émise par le processus comptable
          existant. En revanche, la séparation des données, la cohérence des
          droits et la capacité de récupérer après un incident doivent rester
          adaptées au risque réel.
        </p>

        <h2 id="manuel-ou-automatique">
          5. Manuel ne signifie ni caché, ni informel
        </h2>

        <p>
          Une opération manuelle est souvent un excellent instrument
          d’apprentissage : elle révèle les variantes avant de les figer dans du
          code. Elle devient dangereuse lorsqu’elle dépend de la mémoire du
          fondateur, exige un accès direct incontrôlé à la production ou ne
          possède aucune limite de volume. Pour chaque tâche, choisissez entre
          <strong> construire</strong>, <strong>opérer manuellement</strong>,{" "}
          <strong>acheter ou intégrer</strong>, et <strong>reporter</strong>.
        </p>

        <GuideTable
          headers={[
            "Capacité",
            "Manuel acceptable si…",
            "Automatiser dès maintenant si…",
            "Jamais improviser",
          ]}
          rows={[
            [
              "Création du compte",
              "quelques pilotes sont onboardés avec eux et chaque étape est tracée",
              "l’inscription autonome fait partie de la preuve commerciale",
              "l’identité, la récupération et la suppression des accès",
            ],
            [
              "Import initial",
              "le format varie encore et l’équipe contrôle chaque résultat",
              "le volume ou la fréquence rend l’accompagnement insoutenable",
              "la validation, les doublons, la confidentialité et le retour arrière",
            ],
            [
              "Facturation B2B",
              "contrat, facture, statut et droits sont réconciliés par une personne nommée",
              "achat autonome, nombreux changements ou impayés font partie du test",
              "le droit d’accès lors d’un échec, d’une résiliation ou d’un remboursement",
            ],
            [
              "Support",
              "le contact direct accélère l’apprentissage et la charge reste observable",
              "les demandes répétées dépassent la capacité ou les engagements pris",
              "la confidentialité, la trace des actions et l’escalade d’un incident",
            ],
            [
              "Rapport client",
              "sa forme et sa décision associée ne sont pas stabilisées",
              "le même rapport est attendu à fréquence élevée sans interprétation humaine",
              "la provenance, les règles de calcul et le contrôle d’accès",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Donnez une limite à chaque opération manuelle"
        >
          Écrivez le responsable, la procédure, la trace, le temps consommé, le
          volume maximal et le déclencheur d’automatisation. Par exemple : «
          import accompagné par l’opérateur ; automatiser lorsque trois formats
          stables ou une charge récurrente incompatible avec le pilote sont
          observés ». Le seuil appartient à votre contexte ; ce n’est pas un
          benchmark de marché.
        </InfoBox>

        <h2 id="parcours-et-echecs">
          6. Concevez le chemin de valeur et les échecs qui le cassent
        </h2>

        <p>
          Commencez par une chaîne courte :{" "}
          <strong>entrée → action métier → résultat → preuve de valeur</strong>.
          Une étape qui n’alimente pas cette chaîne doit justifier sa présence
          par l’exploitation, le risque ou l’apprentissage. Puis provoquez les
          échecs qui empêcheraient le premier client de travailler : vous ne
          testez pas l’exhaustivité, mais la capacité à détecter et reprendre.
        </p>

        <ol>
          <li>
            <strong>Invitation expirée ou courriel non reçu :</strong> le client
            sait quoi faire et le support voit l’état réel.
          </li>
          <li>
            <strong>Rôle insuffisant ou trop large :</strong> l’action échoue
            clairement sans exposer le périmètre d’un autre utilisateur.
          </li>
          <li>
            <strong>Donnée invalide, incomplète ou en double :</strong> elle
            n’entre pas silencieusement dans un calcul métier.
          </li>
          <li>
            <strong>Intégration indisponible :</strong> l’échec est visible,
            reprenable ou orienté vers une procédure manuelle définie.
          </li>
          <li>
            <strong>Traitement interrompu :</strong> le système évite le double
            effet et indique ce qui a réellement été fait.
          </li>
          <li>
            <strong>Paiement, contrat ou droit incohérent :</strong> l’accès ne
            dépend pas d’un voyant que personne ne réconcilie.
          </li>
          <li>
            <strong>Correction, export ou suppression demandée :</strong> la
            responsabilité et la sortie possible sont connues.
          </li>
        </ol>

        <p>
          Un message « une erreur est survenue » ne suffit pas à exploiter. Le
          client doit savoir si son action a été prise en compte ; l’opérateur
          doit retrouver l’organisation, l’étape et la cause utile sans lire des
          secrets ni fouiller directement la base. La correction doit enfin être
          vérifiable et, lorsque le risque l’exige, réversible.
        </p>

        <h2 id="operateur">
          7. L’équipe qui sert le client a aussi besoin d’un produit
        </h2>

        <p>
          Beaucoup de périmètres décrivent uniquement les écrans visibles par le
          client. Le premier utilisateur bloqué révèle alors le produit oublié :
          celui de l’opérateur. Une interface interne d’administration — souvent
          appelée back-office — n’est pas toujours nécessaire, mais l’équipe
          doit pouvoir agir selon une procédure contrôlée.
        </p>

        <ul>
          <li>
            retrouver une organisation, ses utilisateurs, son offre et ses
            droits ;
          </li>
          <li>
            voir l’état d’un import, d’un calcul, d’un envoi ou d’une
            synchronisation ;
          </li>
          <li>
            inviter, suspendre ou modifier un rôle dans les limites prévues ;
          </li>
          <li>
            relancer ou corriger une opération explicitement conçue pour l’être
            ;
          </li>
          <li>
            identifier une erreur sans révéler mot de passe, jeton ou donnée
            inutile ;
          </li>
          <li>
            enregistrer l’intervention, son auteur, sa raison et son résultat ;
          </li>
          <li>
            orienter l’incident vers la bonne personne et savoir quand arrêter
            le service.
          </li>
        </ul>

        <p>
          Pour un pilote, une interface interne sobre peut être remplacée sur
          certains gestes par un mode opératoire et un outil d’administration
          protégé. La limite est simple : si la personne doit modifier
          directement des données de production sans garde-fou, sans trace ou
          sans moyen de revenir en arrière, le raccourci crée un risque au lieu
          d’économiser du temps.
        </p>

        <h2 id="offre-facturation-support">
          8. Vendez et servez sans construire tout le libre-service
        </h2>

        <p>
          Le mode de vente décide d’une partie du produit. Un contrat négocié
          avec un premier client n’exige pas le même tunnel qu’un achat autonome
          par carte. Comparez les trois modes sur le même périmètre : entrée,
          droits, facture ou paiement, changement, échec, résiliation et charge
          interne.
        </p>

        <GuideTable
          headers={[
            "Mode",
            "À inclure dans le premier lot",
            "Peut attendre",
            "Signal de bascule",
          ]}
          rows={[
            [
              "Pilote B2B contractuel",
              "contrat, facture existante, activation contrôlée, support direct et sortie",
              "inscription publique, essai, coupons et paiement autonome",
              "charge manuelle répétée ou besoin de vendre sans intervention",
            ],
            [
              "Abonnement avec onboarding accompagné",
              "paiement, états d’abonnement, droits, échecs, notifications et support",
              "onboarding entièrement automatisé et catalogue complexe",
              "volume d’entrée ou variantes stabilisées",
            ],
            [
              "Libre-service complet",
              "inscription, récupération, paiement, cycle d’abonnement, aide et mesure",
              "fonctions entreprise sans client demandeur",
              "le libre-service est lui-même l’hypothèse commerciale",
            ],
          ]}
        />

        <p>
          Si vous choisissez Stripe Checkout, sa{" "}
          <a
            href="https://docs.stripe.com/payments/checkout/build-subscriptions"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les abonnements
          </a>{" "}
          décrit des événements traités en arrière-plan et signalés au serveur,
          dits asynchrones : le retour du navigateur ne prouve pas à lui seul
          que tout le cycle est correctement traité. Cette règle concerne
          l’intégration Stripe, pas tous les modèles de facturation. De même,
          pour la norme de sécurité des données de carte PCI DSS, le{" "}
          <a
            href="https://www.pcisecuritystandards.org/faqs/1092/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PCI Security Standards Council
          </a>{" "}
          explique que l’externalisation peut retirer certaines exigences du
          périmètre directement applicable au système du marchand. Elle ne
          supprime ni ses responsabilités ni la validation à confirmer avec son
          acquéreur.
        </p>

        <h2 id="confiance">
          9. Le mot « MVP » ne suspend ni la sécurité ni les responsabilités
        </h2>

        <p>
          Lorsque le produit traite des données personnelles, les articles{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            5, 25 et 32 du RGPD
          </a>{" "}
          encadrent notamment finalité, minimisation, protection dès la
          conception et mesures adaptées au risque. Le périmètre exact dépend du
          traitement : le consentement n’est pas la base légale universelle,
          toute première version n’exige pas automatiquement une analyse
          d’impact, et une donnée chiffrée n’est pas pour autant anonyme.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide RGPD du développeur de la CNIL
          </a>{" "}
          recommande notamment de maîtriser comptes et habilitations, de séparer
          code, configuration et secrets, et de privilégier des données de test
          fictives ou anonymisées. Pour votre lot, transformez ces principes en
          décisions concrètes : données réellement nécessaires, personnes
          autorisées, fournisseurs, durée, export, suppression et procédure
          d’incident.
        </p>

        <p>
          Côté continuité, une sauvegarde affichée en vert ne prouve pas qu’elle
          restaurera le service. Le{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide de sauvegarde de l’ANSSI, version 1.1
          </a>{" "}
          relie la stratégie aux objectifs métier et aux tests de restauration.
          Définissez ce qui doit revenir, quelle perte est acceptable dans votre
          contexte, qui lance l’opération et comment le résultat est contrôlé.
        </p>

        <p>
          Pour la vérification technique,{" "}
          <a
            href="https://owasp.org/www-project-application-security-verification-standard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            référentiel OWASP ASVS 5.0 de vérification de sécurité applicative
          </a>{" "}
          peut fournir des exigences testables, sans constituer une
          certification automatique. Le{" "}
          <a
            href="https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide OWASP sur la journalisation
          </a>{" "}
          aide à choisir des événements utiles tout en évitant mots de passe,
          jetons et données bancaires dans les journaux. Enfin, les{" "}
          <a
            href="https://www.w3.org/TR/WCAG22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG 2.2 du W3C
          </a>{" "}
          fournissent des critères techniques d’accessibilité. Elles ne
          déterminent pas seules toutes les obligations françaises d’un SaaS
          B2B, mais structure sémantique, clavier, focus, libellés, erreurs et
          contraste coûtent souvent moins cher lorsqu’ils entrent tôt dans le
          système d’interface.
        </p>

        <InfoBox variant="amber" title="Une checklist ne certifie rien">
          Les contrôles ci-dessus doivent être adaptés aux données, aux
          utilisateurs, aux engagements et aux menaces du produit. Ils ne
          prouvent à eux seuls ni conformité RGPD, ni conformité PCI, ni niveau
          d’accessibilité, ni sécurité absolue. Demandez la version du
          référentiel, le périmètre testé, la méthode et les preuves réellement
          obtenues.
        </InfoBox>

        <h2 id="mesure">10. Mesurez une décision, pas un tableau de bord</h2>

        <p>
          Avec un ou quelques pilotes, le but n’est pas de déclarer un taux de
          rétention statistiquement convaincant ou une adéquation
          produit-marché. Le but est d’observer précisément qui atteint la
          valeur, combien de temps cela prend, où le parcours échoue et combien
          d’intervention humaine le service consomme.
        </p>

        <GuideTable
          headers={[
            "Mesure",
            "Définition à écrire",
            "Décision qu’elle éclaire",
          ]}
          rows={[
            [
              "Activation",
              "comptes éligibles ayant réalisé l’événement de valeur défini dans la fenêtre choisie / comptes éligibles",
              "onboarding, clarté du parcours ou adéquation de la promesse",
            ],
            [
              "Délai avant valeur",
              "temps entre le départ défini et le premier résultat réellement utilisable",
              "étapes à retirer, préparer ou accompagner",
            ],
            [
              "Répétition utile",
              "retour à l’action métier selon la cadence normale du produit",
              "valeur durable ou simple essai ponctuel",
            ],
            [
              "Échecs",
              "abandons, erreurs et blocages du parcours critique, avec contexte suffisant",
              "corriger produit, données, intégration ou accompagnement",
            ],
            [
              "Charge opérateur",
              "temps et nature des interventions manuelles par organisation ou parcours",
              "automatiser, facturer différemment ou limiter le pilote",
            ],
          ]}
        />

        <p>
          L’événement de valeur dépend du produit : un compte créé n’est pas
          forcément activé, et une connexion n’est pas une preuve d’usage. Pour
          un SaaS B2B, une lecture au niveau de l’organisation cliente peut être
          plus utile qu’une moyenne par utilisateur lorsque plusieurs rôles
          contribuent au même résultat. C’est une décision éditoriale à vérifier
          dans votre modèle, pas une règle universelle.
        </p>

        <h2 id="exemple">
          11. Exemple illustratif fictif : de 27 demandes à un seul parcours
        </h2>

        <p>
          <strong>Exemple illustratif fictif :</strong> une entreprise imagine
          un SaaS B2B d’approbation de devis. Sa liste initiale contient 27
          demandes, depuis l’application mobile jusqu’au SSO. Ce nombre sert
          uniquement à rendre le cas lisible ; il ne constitue ni une moyenne de
          marché, ni un cas client Hagnéré Code.
        </p>

        <p>
          L’hypothèse du premier lot est plus précise : « un responsable reçoit
          un devis, le transmet à l’approbateur désigné, obtient une décision
          traçable et réduit les relances hors outil ». Le premier client
          accepte une création de compte et un import accompagnés. Il exige en
          revanche que les décisions soient attribuées, que les rôles soient
          séparés et que l’historique puisse sortir.
        </p>

        <GuideTable
          headers={[
            "Traitement",
            "Capacités du cas fictif",
            "Déclencheur ou preuve",
          ]}
          rows={[
            [
              "Construire",
              "invitation, dépôt du devis, circuit unique, notification, décision, historique, droits minimaux et administration",
              "un devis représentatif va de l’entrée à la décision sans canal parallèle",
            ],
            [
              "Opérer manuellement",
              "création de l’organisation, import initial, onboarding, facture B2B et support direct",
              "chaque geste est tracé ; le temps par client est mesuré",
            ],
            [
              "Intégrer",
              "envoi transactionnel, hébergement et composants d’identité adaptés au risque",
              "propriété des comptes, contrats, états d’erreur et sortie vérifiés",
            ],
            [
              "Reporter",
              "connexion unique d’entreprise (SSO), application mobile, interface ouverte aux logiciels tiers (API publique), marque blanche, trois plans, dix rôles et tableaux avancés",
              "demande contractuelle, usage mobile prouvé, volume ou répétition rendant le report coûteux",
            ],
          ]}
        />

        <p>
          Le lot n’est pas « petit » parce qu’il contient peu d’écrans. Il est
          cohérent parce que chaque élément sert le même résultat et que les
          fonctions reportées ont une raison observable de revenir. Si le
          premier client exige le SSO dans son contrat, le classement change. Si
          personne n’utilise l’historique, le problème se situe peut-être dans
          la promesse ou le parcours, pas dans l’absence d’un tableau de bord.
        </p>

        <h2 id="dix-tests">12. Dix preuves à exécuter avant la production</h2>

        <p>
          Cette recette est adaptable. Elle n’est ni une certification de
          sécurité ni une garantie d’absence d’incident. Elle vise les preuves
          de base qu’un dirigeant peut demander au prestataire et à l’équipe
          produit avant d’accueillir le premier client réel.
        </p>

        <ol>
          <li>
            <strong>Créer une organisation et son administrateur</strong>, puis
            vérifier qui possède les comptes techniques nécessaires.
          </li>
          <li>
            <strong>Inviter puis retirer un second utilisateur</strong>, y
            compris après expiration ou erreur d’adresse.
          </li>
          <li>
            <strong>Tester un refus d’accès</strong> : un rôle ne voit ni
            l’action ni les données qui lui sont interdites.
          </li>
          <li>
            <strong>Importer ou saisir un jeu représentatif</strong>, avec une
            donnée invalide, incomplète et dupliquée.
          </li>
          <li>
            <strong>Exécuter le parcours critique jusqu’au résultat</strong> et
            vérifier sa provenance ainsi que son critère d’acceptation.
          </li>
          <li>
            <strong>Provoquer un échec prévu</strong>, puis constater le message
            client, la trace opérateur et la reprise.
          </li>
          <li>
            <strong>Retrouver et débloquer le client côté support</strong> sans
            exposer un secret ni modifier directement une donnée incontrôlée.
          </li>
          <li>
            <strong>Tester l’offre choisie</strong> : activation, facture ou
            paiement, changement, échec et sortie cohérente.
          </li>
          <li>
            <strong>Contrôler les événements produit et alertes utiles</strong>:
            ils permettent la décision sans collecter plus que nécessaire.
          </li>
          <li>
            <strong>Restaurer ou revenir en arrière</strong> selon le plan, puis
            vérifier l’export ou la sortie prévue pour le client.
          </li>
        </ol>

        <p>
          Conservez pour chaque test : contexte, données utilisées, résultat
          attendu, résultat observé, auteur, date, anomalie et décision. Une
          case cochée sans preuve ne rendra pas un devis comparable et ne
          facilitera pas la reprise par une autre équipe.
        </p>

        <h2 id="contrat-premier-client">
          13. Écrivez le contrat de premier client avant le devis
        </h2>

        <p>
          Il ne s’agit pas du contrat juridique complet. C’est une fiche de
          cadrage partageable qui relie la promesse du produit à son
          exploitation. Elle permet au fondateur, au client pilote et aux
          prestataires de comparer le même objet.
        </p>

        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:p-6">
          <p className="mb-4 font-bold text-zinc-950 dark:text-white">
            Contrat de premier client — modèle copiable
          </p>
          <ol className="m-0 space-y-3 pl-5">
            <li>
              <strong>Client et rôles :</strong> acheteur, administrateur,
              utilisateur principal et opérateur interne nommés.
            </li>
            <li>
              <strong>Hypothèse :</strong> comportement ou résultat attendu,
              puis décision permise si la preuve réussit ou échoue.
            </li>
            <li>
              <strong>Parcours critique :</strong> entrée, action, résultat,
              répétition et critères d’acceptation.
            </li>
            <li>
              <strong>Sept socles :</strong> résultat nécessaire, manuel
              acceptable, preuve, report et responsable pour chaque couche.
            </li>
            <li>
              <strong>Données :</strong> provenance, nécessité, accès,
              fournisseurs, sauvegarde, durée, correction et sortie.
            </li>
            <li>
              <strong>Offre et support :</strong> contrat ou paiement, droits,
              horaires ou canal, escalade et limites du pilote.
            </li>
            <li>
              <strong>Mesure :</strong> événement de valeur, erreurs, temps
              manuel et date de la décision suivante.
            </li>
            <li>
              <strong>Exclusions :</strong> fonctions reportées avec déclencheur
              observable, sans promesse automatique de les construire.
            </li>
          </ol>
        </div>

        <p>
          Demandez ensuite à chaque devis de préciser ce qui est construit,
          intégré, opéré par le client, opéré par le prestataire et exclu.
          Faites apparaître environnements, accès, propriété des comptes,
          reprise de données, recette, surveillance, sauvegarde, maintenance et
          sortie. Un prix plus bas n’est comparable que si ces responsabilités
          portent sur le même périmètre.
        </p>

        <h2 id="decision">
          14. Choisissez le format le moins lourd qui produit la preuve
        </h2>

        <GuideTable
          headers={[
            "Décision",
            "Conditions observables",
            "Prochaine action utile",
          ]}
          rows={[
            [
              "Prototype ou POC",
              "l’incertitude principale porte encore sur le parcours ou un verrou technique, sans besoin de servir des données réelles",
              "tester cette seule incertitude et accepter de jeter le résultat",
            ],
            [
              "Pilote accompagné",
              "un client réel doit éprouver la valeur, mais plusieurs opérations peuvent rester manuelles et limitées",
              "écrire les procédures, la charge maximale et la décision de sortie",
            ],
            [
              "MVP de production",
              "le parcours critique et les sept socles ont chacun une preuve acceptable pour le risque réel",
              "exécuter les dix tests, lancer à périmètre limité et mesurer",
            ],
            [
              "V1 plus large",
              "plusieurs clients, rôles, engagements ou intégrations exigent déjà davantage d’autonomie et d’exploitation",
              "séparer obligations du premier lancement et feuille de route ultérieure",
            ],
            [
              "Reporter ou acheter",
              "aucun client accessible, produit existant suffisant, responsabilité non couverte ou preuve possible sans logiciel",
              "tester avec l’outil ou le service le moins coûteux avant de développer",
            ],
          ]}
        />

        <InfoBox
          variant="emerald"
          title="Quand Hagnéré Code est adapté — et quand il ne l’est pas"
        >
          <p className="mb-2">
            <strong>Cas adapté :</strong> problème B2B déjà documenté, premier
            client accessible, parcours métier différenciant, responsable
            produit disponible et besoin de transformer les preuves en un lot
            exploitable, testable et réversible.
          </p>
          <p className="mb-0">
            <strong>Cas inadapté :</strong> aucun prospect accessible, besoin
            correctement couvert par un outil existant, attente d’une garantie
            commerciale, clone servile, périmètre réglementé sans compétences
            adaptées ou indisponibilité totale du métier pendant la recette et
            le support initial. Dans ces cas, le bon conseil peut être de ne pas
            développer maintenant.
          </p>
        </InfoBox>

        <GuideInlineCTA
          title="Faire relire la tranche du premier client"
          description="Présentez le client visé, son parcours critique, le mode de vente, les données, les intégrations et ce que votre équipe accepte encore de gérer manuellement. Nous distinguons le nécessaire, le manuel acceptable et ce qui peut attendre ; la conclusion peut être un pilote sans développement complet."
          tags={[
            "Périmètre avant devis",
            "Inclus, manuel et plus tard",
            "Possibilité de ne pas construire",
          ]}
          ctaLabel="Faire relire mon périmètre MVP"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources originales et limites</h2>

        <p>
          Sources consultées le 20 juillet 2026. Les méthodes produit aident à
          formuler une expérience ; elles ne garantissent pas la réussite. Les
          textes et guides de sécurité, données, paiement et accessibilité
          doivent être appliqués au produit, au contrat, aux utilisateurs et à
          la juridiction réels. Ce guide n’est ni un avis juridique, ni un audit
          de sécurité, ni une certification.
        </p>

        <ul>
          <li>
            <a
              href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eric Ries — What is an MVP?
            </a>{" "}
            : principe d’apprentissage avec un produit minimum cohérent.
          </li>
          <li>
            <a
              href="https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK Service Manual — How the alpha phase works
            </a>{" "}
            : test des hypothèses risquées dans le contexte des services publics
            britanniques.
          </li>
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Règlement général sur la protection des données
            </a>{" "}
            : articles 5, 25 et 32, dans le périmètre des données personnelles.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Guide RGPD du développeur
            </a>{" "}
            : pratiques de développement à contextualiser.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1
            </a>{" "}
            : objectifs métier et tests de restauration.
          </li>
          <li>
            <a
              href="https://owasp.org/www-project-application-security-verification-standard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP Application Security Verification Standard 5.0
            </a>{" "}
            et{" "}
            <a
              href="https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP Logging Cheat Sheet
            </a>
            : référentiels techniques non certifiants.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/payments/checkout/build-subscriptions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — Build a subscriptions integration with Checkout
            </a>{" "}
            et{" "}
            <a
              href="https://www.pcisecuritystandards.org/faqs/1092/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PCI SSC FAQ 1092
            </a>
            : cycle d’abonnement Stripe et périmètre PCI du paiement
            externalisé.
          </li>
          <li>
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3C — Web Content Accessibility Guidelines 2.2
            </a>
            : critères techniques d’accessibilité, distincts d’une analyse
            juridique française complète.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
