import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { BusinessSoftwareNeedDossier } from "@/components/guides/BusinessSoftwareNeedDossier";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import sources from "@/lib/business-software-need-sources.json";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("signes-besoin-logiciel-metier");

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
        alt: "Reconnaître si une entreprise a besoin d’un logiciel métier",
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
      name: "Besoin d’un logiciel métier",
      item: guideUrl(guide),
    },
  ],
});

const sourceById = new Map(sources.map((source) => [source.id, source]));

function sourceUrl(id: string) {
  const source = sourceById.get(id);
  if (!source) throw new Error(`Source logiciel métier introuvable : ${id}`);
  return source.url;
}

function SourceLink({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <a href={sourceUrl(id)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function ChapterGate({
  proof,
  stop,
  consequence,
}: {
  proof: string;
  stop: string;
  consequence: string;
}) {
  return (
    <div
      className="not-prose my-7 grid gap-3 sm:grid-cols-3"
      data-guide-chapter-gate="true"
    >
      <section className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-left dark:border-emerald-900 dark:bg-emerald-950/20">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
          Preuve attendue
        </p>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {proof}
        </p>
      </section>
      <section className="rounded-xl border border-red-200 bg-red-50/60 p-4 text-left dark:border-red-900 dark:bg-red-950/20">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-red-700 dark:text-red-300">
          STOP
        </p>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {stop}
        </p>
      </section>
      <section className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-left dark:border-blue-900 dark:bg-blue-950/20">
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-blue-700 dark:text-blue-300">
          Conséquence
        </p>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {consequence}
        </p>
      </section>
    </div>
  );
}

const faqItems = [
  {
    question: "Qu’est-ce qu’un logiciel métier ?",
    answer:
      "Un logiciel métier est un outil conçu autour d’un travail précis de l’entreprise : planifier des interventions, suivre une fabrication, traiter des dossiers ou préparer des devis, par exemple. Il peut être standard, configuré pour votre activité ou développé spécialement. Le terme ne signifie donc pas automatiquement « sur mesure ».",
  },
  {
    question:
      "Combien de signes faut-il réunir avant d’étudier un logiciel métier ?",
    answer:
      "Il n’existe pas de nombre universel. Un seul risque de perte de données ou d’arrêt d’activité peut demander une correction immédiate. À l’inverse, plusieurs petites irritations peuvent ne justifier aucun développement. Regardez la fréquence, les personnes touchées, la conséquence et la stabilité du travail concerné.",
  },
  {
    question: "Un fichier Excel suffit-il encore ?",
    answer:
      "Oui, tant que le fichier reste compréhensible, contrôlé, sauvegardé et adapté au nombre d’utilisateurs. Il devient préoccupant lorsque plusieurs copies circulent, que les droits sont difficiles à gérer, qu’une erreur de formule passe inaperçue ou que l’activité s’arrête si son auteur est absent. Notre guide consacré à Excel détaille cette décision.",
  },
  {
    question: "Faut-il choisir un logiciel standard ou du sur-mesure ?",
    answer:
      "Commencez par comparer les logiciels standards plausibles sur quelques cas réels. Quand un essai est raisonnable, faites-le avec les futurs utilisateurs. S’il exige déjà une migration lourde, demandez plutôt une démonstration préparée à partir de vos cas, des preuves écrites sur les limites et les conditions de sortie. Le sur-mesure mérite une étude lorsque le besoin est stable, important et reste mal couvert après cet examen proportionné.",
  },
  {
    question: "Quels signes exigent une action rapide ?",
    answer:
      "Agissez rapidement si une perte de fichier, une absence, un compte partagé ou une panne peut interrompre une activité importante, exposer des données ou empêcher une restauration. La première action sera souvent une sauvegarde isolée et testée, une correction des accès ou une procédure de secours, pas la construction immédiate d’un nouveau logiciel.",
  },
  {
    question: "Que préparer avant de demander un devis ?",
    answer:
      "Préparez trois situations datées, le résultat attendu, les outils et personnes concernés, les corrections déjà essayées, la fréquence, les conséquences et la solution manuelle de secours. Un prestataire sérieux pourra alors dire s’il faut corriger, automatiser, acheter, étudier du sur-mesure ou attendre.",
  },
  {
    question: "Quelle différence entre ERP, logiciel métier et sur-mesure ?",
    answer:
      "Un ERP relie plusieurs fonctions communes de gestion autour de données partagées. Un logiciel métier vertical couvre une activité ou un secteur précis. Le sur-mesure construit une réponse propre à votre organisation. Ces catégories peuvent se combiner : un ERP peut rester le système de référence tandis qu’une petite application traite une exception différenciante. Comparez toujours les mêmes cas, données et horizons avant de choisir.",
  },
  {
    question:
      "Le no-code ou le low-code évitent-ils le besoin de maintenance ?",
    answer:
      "Non. Ils peuvent accélérer un prototype ou une application interne bornée, mais il faut encore gouverner les droits, les environnements, les connecteurs, les tests, les données, les licences, le départ du créateur, la supervision et la sortie. La bonne question n’est pas « avec ou sans code », mais « qui possède, vérifie, maintient et reprend le service ? ».",
  },
  {
    question:
      "Comment comparer les coûts d’un logiciel standard et du sur-mesure ?",
    answer:
      "Utilisez le même périmètre et calculez au moins les coûts de mise en place, abonnement ou construction, configuration, intégrations, migration et nettoyage des données, formation, double fonctionnement, support, maintenance, temps interne et sortie. Regardez 12, 36 et 60 mois sans remplacer les inconnues par zéro et sans transformer automatiquement le temps libéré en économie de trésorerie.",
  },
  {
    question: "Quand faut-il arrêter un pilote logiciel ?",
    answer:
      "Arrêtez ou corrigez lorsque survient un incident éliminatoire défini à l’avance, que les cas critiques échouent, que les utilisateurs contournent toujours l’outil, que les données ne se réconcilient pas, que le mode manuel ne tient pas ou que le coût complet sort de l’enveloppe acceptée. Les critères sont locaux, datés et décidés avant le pilote ; il n’existe pas de seuil universel.",
  },
];

const decisionPaths = [
  {
    label: "Sécuriser maintenant",
    title: "Un incident peut arrêter l’activité ou exposer des données",
    text: "Corrigez les accès, les sauvegardes et la solution de secours avant de financer de nouvelles fonctions.",
    color:
      "border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/20",
    labelColor: "text-rose-700 dark:text-rose-300",
  },
  {
    label: "Simplifier ou standardiser",
    title: "Une étape ou une règle peut disparaître avant tout nouvel outil",
    text: "Supprimez la double validation, nommez une source de vérité ou rendez la règle commune, puis rejouez les cas.",
    color:
      "border-cyan-200 bg-cyan-50/60 dark:border-cyan-900 dark:bg-cyan-950/20",
    labelColor: "text-cyan-700 dark:text-cyan-300",
  },
  {
    label: "Corriger l’existant",
    title: "Le bon outil est là, mais mal configuré ou mal utilisé",
    text: "Essayez la configuration, la formation ou une règle de travail plus claire, puis mesurez de nouveau.",
    color:
      "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20",
    labelColor: "text-amber-700 dark:text-amber-300",
  },
  {
    label: "Automatiser",
    title: "Les outils conviennent, mais la même donnée circule à la main",
    text: "Testez une liaison limitée, avec une alerte et une reprise manuelle en cas d’échec.",
    color:
      "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20",
    labelColor: "text-blue-700 dark:text-blue-300",
  },
  {
    label: "Prototyper en low-code",
    title:
      "Le périmètre interne est borné et l’entreprise peut gouverner la plateforme",
    text: "Testez rapidement, sans oublier licences, droits, environnements, connecteurs, supervision, maintenance et départ du créateur.",
    color:
      "border-fuchsia-200 bg-fuchsia-50/60 dark:border-fuchsia-900 dark:bg-fuchsia-950/20",
    labelColor: "text-fuchsia-700 dark:text-fuchsia-300",
  },
  {
    label: "Acheter un logiciel",
    title: "Une solution standard couvre vos situations réelles",
    text: "Comparez abonnement, configuration, reprise des données, formation, sortie et entretien.",
    color:
      "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20",
    labelColor: "text-emerald-700 dark:text-emerald-300",
  },
  {
    label: "Étudier le sur-mesure",
    title:
      "Le besoin est stable, important et mal couvert par les solutions examinées",
    text: "Étudiez une fonction précise et son coût complet sans décider d’avance de construire toute une application.",
    color:
      "border-violet-200 bg-violet-50/60 dark:border-violet-900 dark:bg-violet-950/20",
    labelColor: "text-violet-700 dark:text-violet-300",
  },
  {
    label: "Observer encore",
    title: "Le problème est rare, temporaire ou change chaque semaine",
    text: "Fixez une période d’observation et une date de décision. Ne figez pas trop tôt une mauvaise façon de travailler.",
    color:
      "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50",
    labelColor: "text-zinc-700 dark:text-zinc-300",
  },
];

function DecisionPaths() {
  return (
    <div className="not-prose my-6 grid gap-3 md:grid-cols-2">
      {decisionPaths.map((path) => (
        <section
          key={path.label}
          className={"rounded-2xl border p-5 " + path.color}
        >
          <p
            className={
              "m-0 text-xs font-extrabold uppercase tracking-[0.13em] " +
              path.labelColor
            }
          >
            {path.label}
          </p>
          <h3 className="mb-0 mt-2 text-base font-bold leading-snug text-zinc-950 dark:text-white">
            {path.title}
          </h3>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {path.text}
          </p>
        </section>
      ))}
    </div>
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
          { label: "Besoin d’un logiciel métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Un fichier perdu peut-il bloquer une commande ? Vos équipes recopient-elles les mêmes informations ? Partez de situations vécues pour décider s’il faut sécuriser, corriger, automatiser, acheter un outil ou seulement continuer à observer."
        heroAction={{
          href: "#diagnostic-logiciel-metier",
          label: "Ouvrir le diagnostic",
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
            title: "8 réponses possibles",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "3 situations à documenter",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Urgences à sécuriser",
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
            href: "/guides/application-suivi-production-pme",
            label: "Choisir un outil de suivi de production pour une PME",
          },
          {
            href: "/guides/back-office-sur-mesure-pme",
            label: "Décider s’il faut créer un back-office",
          },
          {
            href: "/guides/automatiser-processus-metier",
            label: "Choisir un processus à automatiser",
          },
          {
            href: "/guides/transformer-excel-en-application",
            label: "Savoir quand remplacer Excel",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "Comparer ERP et logiciel sur mesure",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer le ROI d’une application métier",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Préparer un cahier des charges métier",
          },
        ]}
        faqTitle="Logiciel métier : les questions avant de décider"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Votre entreprise a grandi, mais une commande, une intervention ou une
          facture dépend encore d’un fichier, d’une boîte mail ou de la mémoire
          d’une personne. Les équipes recopient, les clients attendent et vous
          ne savez pas toujours quelle version est la bonne. Est-ce le moment de
          faire développer un logiciel métier ? <strong>Peut-être.</strong> Ces
          signes signalent d’abord que votre façon de travailler doit être
          examinée, pas que le sur-mesure est la bonne réponse. Si une absence,
          une suppression ou un mauvais droit d’accès peuvent arrêter
          l’activité, sécurisez ce risque maintenant. Sinon, partez de trois
          problèmes réellement arrivés et comparez huit réponses, de la
          correction simple à l’étude d’une fonction sur mesure.
        </p>

        <p>
          Un <strong>logiciel métier</strong> est un outil consacré à un travail
          précis de votre entreprise : planifier les interventions, suivre les
          commandes, préparer les devis ou traiter les dossiers, par exemple. Il
          peut être standard, configuré ou développé spécialement. Dans ce
          guide, vous n’allez donc pas compter des « signes » pour obtenir un
          verdict automatique. Vous allez déterminer la prochaine action utile.
        </p>

        <h2 id="reponse">
          La réponse courte : huit options avant de choisir un développement
        </h2>

        <DecisionPaths />

        <GuideToc
          items={[
            {
              id: "probleme-solution",
              label: "1. Un problème d’outil n’impose pas le sur-mesure",
            },
            {
              id: "securiser",
              label: "2. Sécuriser ce qui peut arrêter l’entreprise",
            },
            {
              id: "observer",
              label: "3. Construire une baseline défendable",
            },
            {
              id: "contournements",
              label: "4. Diagnostiquer contournements et causes",
            },
            {
              id: "vrai-probleme",
              label: "5. Écarter les faux signaux",
            },
            {
              id: "six-reponses",
              label: "6. Comparer huit réponses possibles",
            },
            {
              id: "trois-situations",
              label: "7. Documenter trois situations réelles",
            },
            {
              id: "diagnostic-logiciel-metier",
              label: "8. Utiliser le diagnostic interactif",
            },
            {
              id: "regles-donnees",
              label: "9. Cartographier règles, données et intégrations",
            },
            {
              id: "standard-erp-low-code",
              label: "10. Tester standard, ERP et low-code",
            },
            {
              id: "sur-mesure",
              label: "11. Savoir quand étudier le sur-mesure",
            },
            {
              id: "tco",
              label: "12. Comparer le TCO à 12, 36 et 60 mois",
            },
            {
              id: "pilote",
              label: "13. Monter un pilote STOP / GO",
            },
            {
              id: "securite-accessibilite",
              label: "14. Sécurité, continuité et accessibilité",
            },
            {
              id: "migration-sortie",
              label: "15. Préparer migration et sortie",
            },
            {
              id: "prochaine-decision",
              label: "16. Écrire la prochaine décision",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="probleme-solution">
          1. Un problème d’outil ne signifie pas encore qu’il faut du sur-mesure
        </h2>

        <p>
          Une information recopiée trois fois est un problème. Un fichier que
          personne n’ose toucher est un problème. Un client qui attend parce que
          son dossier se trouve dans la boîte mail d’un salarié absent est aussi
          un problème. Aucun de ces constats ne choisit encore la solution.
        </p>

        <p>
          Vous pourriez supprimer une étape, mieux configurer un logiciel déjà
          payé, relier deux outils, adopter une solution standard ou développer
          une seule fonction. Vous pourriez aussi décider que la gêne coûte
          moins cher que le changement. Cette dernière réponse n’est pas un
          échec : elle devient raisonnable dès lors qu’elle repose sur des faits
          et sur une nouvelle date d’examen.
        </p>

        <InfoBox
          variant="blue"
          title="Le bon diagnostic commence par un événement, pas par un outil"
        >
          Remplacez « il nous faut un logiciel central de gestion, un ERP » par
          une situation observable : « mardi, deux personnes ont passé trois
          heures à retrouver la dernière version d’une commande et le client a
          reçu son devis un jour plus tard ». Vous pourrez discuter de cette
          situation avec l’équipe et tester plusieurs réponses. Le nom d’un
          logiciel, lui, enferme déjà la discussion.
        </InfoBox>

        <ChapterGate
          proof="Un événement daté, son résultat attendu, la personne concernée et une référence consultable permettent de rejouer ce qui s’est passé."
          stop="Le dossier commence par « il nous faut un ERP », « il nous faut de l’IA » ou par une liste de fonctions sans événement utilisateur."
          consequence="Vous gardez plusieurs réponses ouvertes et évitez de fabriquer une justification a posteriori pour la solution déjà préférée."
        />

        <h2 id="securiser">
          2. Sécurisez d’abord ce qui peut arrêter l’entreprise
        </h2>

        <p>
          Certains signes ne doivent pas attendre un futur projet. Si la
          disparition d’un tableur, l’absence d’une personne ou la panne d’un
          ordinateur bloque les commandes, la paie ou les interventions,
          préparez immédiatement une sauvegarde restaurable, isolée du système
          principal, et une façon temporaire de travailler. Puis testez
          réellement la restauration : voir un fichier de sauvegarde ne prouve
          pas que vous savez le remettre en service.
        </p>

        <p>
          Pour les données personnelles, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande des sauvegardes régulières et testées
          </a>
          , dont au moins une hors ligne et au moins une conservée sur un site
          géographiquement distinct, ainsi qu’une{" "}
          <a
            href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
            target="_blank"
            rel="noopener noreferrer"
          >
            organisation permettant de poursuivre ou de reprendre l’activité
          </a>
          . Ces recommandations ne disent pas qu’il faut construire une
          application. Elles disent que le risque existe déjà et doit être
          traité.
        </p>

        <p>Agissez sans attendre si vous constatez l’un de ces cas :</p>

        <ul>
          <li>
            un seul fichier ou ordinateur contient une information irremplaçable
            ;
          </li>
          <li>
            les comptes sont partagés ou d’anciens salariés conservent des accès
            ;
          </li>
          <li>personne ne sait restaurer la dernière version utile ;</li>
          <li>
            une validation ayant un effet financier, contractuel ou
            réglementaire ne laisse aucune trace compréhensible ;
          </li>
          <li>
            le travail ne peut pas continuer, même temporairement, pendant une
            panne.
          </li>
        </ul>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
            target="_blank"
            rel="noopener noreferrer"
          >
            gestion des droits selon le besoin réel de chaque personne
          </a>{" "}
          fait partie des recommandations de la CNIL pour les données
          personnelles. Commencez donc par reprendre les accès et nommer un
          responsable. Si vous soupçonnez une intrusion ou une fuite en cours,
          faites intervenir un spécialiste de la réponse à incident ; ce guide
          n’est pas une procédure d’urgence cyber.
        </p>

        <ChapterGate
          proof="Une restauration utile est chronométrée, les comptes privilégiés sont nominatifs et retirables, et un mode dégradé a été exercé sur l’activité critique."
          stop="Incident ou fuite potentiellement active, sauvegarde jamais restaurée, compte administrateur partagé, départ non révoqué ou absence totale de solution temporaire."
          consequence="Le risque existant est traité avant de migrer, connecter ou développer ; aucun volume ni gain espéré ne peut compenser ce STOP."
        />

        <h2 id="observer">
          3. Observez ce qui fait réellement perdre du temps ou des clients
        </h2>

        <p>
          Ne demandez pas à l’équipe combien d’heures elle « pense » perdre par
          an. Choisissez une semaine représentative et notez les événements
          lorsqu’ils arrivent. Pour une clôture mensuelle, observez le cycle
          complet. Comptez séparément le temps passé à travailler et le temps
          pendant lequel le dossier attend une information ou une validation.
        </p>

        <p>Pour chaque problème, relevez :</p>

        <ul>
          <li>la fréquence et les personnes concernées ;</li>
          <li>le temps actif, l’attente et les interruptions ;</li>
          <li>les ressaisies, recherches de version et corrections ;</li>
          <li>le retard, l’erreur, la perte ou l’insatisfaction produite ;</li>
          <li>la solution de secours réellement utilisée ;</li>
          <li>la règle métier qui aurait permis d’éviter le problème.</li>
        </ul>

        <p>
          Le dossier{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num consacré à l’automatisation
          </a>{" "}
          propose notamment d’observer la fréquence, la durée, le nombre de
          personnes et l’effet d’une erreur, puis de décrire les étapes, les
          informations et les exceptions. Nous reprenons cette logique comme
          méthode d’observation, sans reprendre ses exemples chiffrés comme
          promesse de gain.
        </p>

        <InfoBox variant="amber" title="Il n’existe pas de seuil magique">
          Dix heures perdues sur une procédure qui change chaque semaine ne
          justifient pas forcément de la figer dans un logiciel. Trente minutes
          sur une validation financière critique peuvent, au contraire, mériter
          une correction immédiate. Fréquence, conséquence et stabilité comptent
          ensemble ; aucune moyenne ne doit masquer un risque important.
        </InfoBox>

        <h3>Mesurez une période normale, une période tendue et le cas rare</h3>

        <p>
          Une seule semaine calme sous-estime une clôture, une campagne, un
          changement de tarif ou la saison haute. À l’inverse, une semaine de
          crise ne doit pas devenir artificiellement la moyenne annuelle.
          Constituez trois vues : le fonctionnement habituel, une période de
          tension connue et le dernier événement rare mais grave. Pour chacune,
          indiquez le volume total : cinq erreurs sur dix dossiers ne racontent
          pas la même chose que cinq erreurs sur dix mille.
        </p>

        <GuideTable
          caption="Baseline minimale avant de choisir l’outil"
          headers={["Mesure", "Comment la relever", "Ce qu’elle ne prouve pas"]}
          rows={[
            [
              "Volume et fréquence",
              "Dossiers totaux, événements concernés et période exacte",
              "Qu’un volume élevé doit être automatisé",
            ],
            [
              "Temps actif",
              "Minutes réellement travaillées par rôle, sans l’attente",
              "Une économie de salaire ou de trésorerie",
            ],
            [
              "Temps d’attente",
              "Temps entre deux étapes, avec cause et responsable attendu",
              "Du travail humain libérable",
            ],
            [
              "Corrections et reprises",
              "Ressaisie, recherche, réconciliation et contrôle distincts",
              "Que la même personne a été inactive pendant tout le délai",
            ],
            [
              "Conséquence",
              "Retard, erreur, client, marge, conformité ou arrêt observé",
              "Une valeur monétaire si aucun calcul n’est défendable",
            ],
            [
              "Dispersion et exception",
              "Médiane, cas haut, maximum expliqué et règle d’exception",
              "Un engagement de service futur",
            ],
          ]}
        />

        <p>
          Le temps actif et le temps d’attente doivent rester séparés. Si une
          commande attend quatre heures une validation, cela ne signifie pas que
          quatre heures de salaire disparaissent. En revanche, ces quatre heures
          peuvent retarder une expédition, une facture ou une réponse client.
          N’ajoutez une valeur financière que si vous pouvez expliquer la chaîne
          : événement, effet, caractère reportable ou non, marge réellement
          perdue et preuve comptable.
        </p>

        <h3>Exemple chiffré : une commande bloquée</h3>

        <p>
          <strong>Exemple entièrement fictif.</strong> Une PME observe dix-huit
          commandes bloquées par mois. Chaque cas mobilise douze minutes pour
          retrouver la règle de remise et huit minutes pour corriger la saisie.
          Le dossier attend ensuite quatre-vingt-dix minutes avant validation.
          Le travail actif et correctif annualisé vaut donc 18 × 12 × (12 + 8) ÷
          60 = <strong>72 heures</strong>. L’attente annualisée vaut 18 × 12 ×
          90 ÷ 60 = <strong>324 heures</strong>. Ces deux résultats ne
          s’additionnent pas sous l’étiquette « 396 heures économisées ».
        </p>

        <FormulaBox>
          {[
            "Travail observé annuel = fréquence mensuelle × 12 ×",
            "(minutes actives + minutes de correction) ÷ 60",
            "",
            "Attente annuelle = fréquence mensuelle × 12 × minutes d’attente ÷ 60",
            "",
            "Capacité potentielle ≠ économie de trésorerie",
            "Retard de chiffre d’affaires ≠ marge définitivement perdue",
          ].join("\n")}
        </FormulaBox>

        <p>
          La première expérience coûte peu : clarifier la règle, l’intégrer à
          l’outil actuel et rejouer trois commandes, dont une remise
          exceptionnelle. Si ces cas réussissent, un projet neuf n’est pas
          justifié par cet événement. S’ils échouent, la preuve décrit enfin
          l’écart à comparer dans un logiciel standard, une intégration ou une
          fonction spécifique.
        </p>

        <p>
          France Num propose d’observer fréquence, durée, personnes, étapes,
          données et exceptions avant d’automatiser. L’OCDE rappelle cependant
          que la transformation numérique des PME dépend aussi des compétences,
          des moyens et de la capacité organisationnelle :{" "}
          <SourceLink id="FRANCENUM-AUTOMATISATION">
            la méthode d’observation française
          </SourceLink>{" "}
          ne doit donc pas devenir une promesse de gain, et{" "}
          <SourceLink id="OECD-SME-DIGITAL">
            l’analyse internationale de l’OCDE
          </SourceLink>{" "}
          ne fournit aucun seuil individuel.
        </p>

        <ChapterGate
          proof="La baseline indique période, volume total, fréquence, temps actif, correction, attente, dispersion, conséquence, source et personne responsable."
          stop="Une estimation annuelle issue de mémoire, un temps d’attente compté comme salaire économisé ou un chiffre d’affaires retardé présenté comme perte définitive."
          consequence="Les options seront comparées sur des faits reproductibles sans gonfler artificiellement le bénéfice du projet."
        />

        <h2 id="contournements">
          4. Regardez pourquoi l’équipe contourne les outils officiels
        </h2>

        <p>
          Lorsqu’un logiciel commercial (CRM), un logiciel central de gestion
          (ERP) ou un outil de planning ne répond pas au travail quotidien, les
          équipes fabriquent une seconde organisation : tableur personnel, notes
          papier, groupe de messages, dossier sur le bureau ou colonne «
          commentaires » détournée. Ne traitez pas ces contournements comme une
          simple résistance au changement. Ils peuvent révéler qu’une
          information manque, qu’une exception est mal traitée ou qu’une étape
          impose une attente disproportionnée.
        </p>

        <p>
          Demandez à la personne de vous montrer le dernier cas, écran par
          écran, sans lui demander d’abord la solution. Où reçoit-elle
          l’information ? Que copie-t-elle ? À qui demande-t-elle confirmation ?
          Comment sait-elle que le travail est terminé ? Que fait-elle si un
          client rappelle deux jours plus tard ? Les réponses distinguent quatre
          problèmes très différents :
        </p>

        <ul>
          <li>la fonction existe mais personne ne la connaît ;</li>
          <li>la fonction existe mais sa configuration ne correspond pas ;</li>
          <li>deux outils utiles ne communiquent pas ;</li>
          <li>le besoin essentiel n’est couvert par aucun outil actuel.</li>
        </ul>

        <p>
          <strong>Exemple illustratif fictif.</strong> Une équipe tient un
          tableur à côté de son logiciel de gestion parce qu’elle doit promettre
          une date au client avant que le planning officiel soit validé. Ajouter
          un nouveau planning ne résout rien tant que l’entreprise n’a pas
          décidé qui peut réserver provisoirement un créneau, combien de temps
          et avec quelle information. Ici, la première correction concerne la
          règle de travail ; le logiciel viendra éventuellement ensuite.
        </p>

        <GuideTable
          caption="Un même symptôme peut avoir des causes très différentes"
          headers={[
            "Symptôme visible",
            "Vérification utile",
            "Première réponse plausible",
          ]}
          rows={[
            [
              "Tableur parallèle",
              "La fonction officielle existe-t-elle et réussit-elle le dernier cas ?",
              "Formation, configuration ou règle plus claire",
            ],
            [
              "Même donnée recopiée",
              "Quelle source fait foi, quelle clé relie les objets et comment rejouer un échec ?",
              "Intégration bornée avec journal et reprise manuelle",
            ],
            [
              "Validation dans une boîte mail",
              "Qui décide, selon quelle règle, avec quelle délégation en cas d’absence ?",
              "Clarification de responsabilité avant l’outil",
            ],
            [
              "Erreur après croissance du volume",
              "La règle est-elle stable et l’outil dépasse-t-il réellement sa limite ?",
              "Correction, changement de standard ou capacité technique",
            ],
            [
              "Information introuvable",
              "La donnée possède-t-elle un propriétaire, un identifiant et une durée de conservation ?",
              "Gouvernance et nettoyage des données",
            ],
            [
              "Contournement permanent",
              "Quel cas critique échoue après paramétrage et formation ?",
              "Fit-gap standard puis option complémentaire",
            ],
          ]}
        />

        <p>
          Ne concluez pas que des causes différentes interdisent tout projet
          commun. Une même faiblesse transverse — identité, propriété des
          données, référentiel client, journalisation ou responsabilité — peut
          produire plusieurs symptômes. Prouvez ce lien. À défaut, grouper les
          incidents sous une « transformation globale » masque les responsables
          et rend impossible la vérification du résultat.
        </p>

        <ChapterGate
          proof="Le dernier cas est rejoué écran par écran ; la cause retenue explique les données, la règle, l’exception, le responsable et l’échec observable."
          stop="Le contournement est attribué à la résistance des salariés sans observation, ou plusieurs causes sont regroupées uniquement pour agrandir le projet."
          consequence="Vous corrigez le mécanisme qui produit l’erreur au lieu de déplacer le même problème dans une interface plus neuve."
        />

        <h2 id="vrai-probleme">
          5. Vérifiez si le logiciel est vraiment la cause du blocage
        </h2>

        <p>
          Avant de développer, essayez les corrections les moins coûteuses sur
          les trois situations observées. Le{" "}
          <a
            href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
            target="_blank"
            rel="noopener noreferrer"
          >
            référentiel public d’écoconception des services numériques
          </a>{" "}
          demande d’examiner le besoin et les solutions existantes avant de
          créer un nouveau service. Ce n’est pas une règle financière pour votre
          entreprise, mais c’est une bonne discipline : un outil neuf crée aussi
          de l’hébergement, de la formation, de l’entretien et une future
          sortie.
        </p>

        <p>Écartez au minimum ces faux signaux :</p>

        <ul>
          <li>un pic temporaire qui ne reviendra pas ;</li>
          <li>
            une procédure dont les règles changent encore chaque semaine ;
          </li>
          <li>une responsabilité que personne n’accepte de trancher ;</li>
          <li>
            un logiciel existant jamais configuré ni essayé sur les vrais cas ;
          </li>
          <li>un manque de formation ou de donnée obligatoire ;</li>
          <li>
            une envie de « mettre de l’IA » sans résultat précis à produire.
          </li>
        </ul>

        <p>
          Évaluez les solutions standards plausibles avec les personnes qui
          feront réellement le travail. Si un essai est proportionné, rejouez
          une commande compliquée, une annulation, un doublon, une absence et
          une exportation des données. Si cet essai imposerait déjà une reprise
          lourde, préparez ces mêmes cas pour une démonstration, exigez des
          réponses écrites sur les limites et vérifiez les conditions de sortie.
          Le prix de l’abonnement compte, mais aussi la configuration, la
          formation, les limites, la reprise des données et la possibilité de
          partir.
        </p>

        <p>
          Cette démarche reprend une bonne pratique de{" "}
          <a
            href="https://design.numerique.gouv.fr/bien-concevoir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DesignGouv : partir du besoin et tester avec de vrais utilisateurs
          </a>
          . Elle est formulée pour les services publics numériques ; nous
          l’utilisons ici comme discipline de conception, pas comme obligation
          imposée à votre entreprise.
        </p>

        <p>
          Le{" "}
          <SourceLink id="GOVUK-USER-NEEDS">
            manuel britannique de recherche des besoins
          </SourceLink>{" "}
          exprime la même séparation : un besoin décrit ce qu’une personne doit
          accomplir et le problème rencontré, non la technologie désirée. Les{" "}
          <SourceLink id="CANADA-DIGITAL-STANDARDS">
            normes numériques canadiennes
          </SourceLink>{" "}
          insistent sur la conception avec les utilisateurs et l’itération. Ces
          cadres publics étrangers apportent un contrôle contradictoire ; ils ne
          deviennent ni une obligation française ni une preuve que votre
          solution doit ressembler à un service public.
        </p>

        <ChapterGate
          proof="Configuration, formation, responsabilité et règle ont été testées sur le même cas, avec résultat avant-après et limite précise."
          stop="Le problème est temporaire, la règle change encore, personne ne décide ou le logiciel existant n’a jamais été configuré sur les cas réels."
          consequence="Une absence de logiciel n’est retenue qu’après avoir écarté les causes organisationnelles moins coûteuses à corriger."
        />

        <h2 id="six-reponses">
          6. Choisissez la première réponse à examiner dans votre situation
        </h2>

        <p>
          Revenez aux huit réponses présentées au début. Elles ne forment pas
          une échelle où le sur-mesure serait le niveau le plus avancé. Elles
          répondent à des causes différentes. Une sauvegarde testée peut être la
          meilleure décision d’une entreprise complexe ; attendre peut être la
          meilleure décision d’une jeune activité dont les règles changent.
        </p>

        <p>
          Commencez par le risque : une activité qui peut s’arrêter ou des
          données qui peuvent être exposées passent avant le confort. Sans
          urgence, cherchez ensuite la plus petite vérification utile. Une
          configuration peut-elle résoudre le dernier cas ? Une liaison entre
          deux outils supprimerait-elle la ressaisie ? Un logiciel existant
          sait-il traiter vos exceptions ?
        </p>

        <p>
          Si la réponse reste incertaine, observez encore. Si plusieurs actions
          sont nécessaires, prenez d’abord celle qui réduit le risque le plus
          grave ou apporte une preuve au moindre coût. Vous évitez ainsi de
          construire une fonction avant d’avoir compris pourquoi elle manque.
        </p>

        <GuideTable
          caption="Première lecture des huit réponses — aucune n’est un niveau supérieur"
          headers={[
            "Réponse",
            "Bonne raison de l’examiner",
            "Contre-indication",
          ]}
          rows={[
            [
              "Sécuriser",
              "Risque d’arrêt, d’accès indu ou de restauration impossible",
              "Ne pas attendre le budget ou la migration future",
            ],
            [
              "Simplifier / standardiser",
              "Étape, règle ou responsabilité inutilement variable",
              "Ne pas supprimer une exception légitime ou réglementaire",
            ],
            [
              "Corriger l’existant",
              "La fonction réussit après configuration, droit ou formation",
              "Ne pas confondre correction provisoire et dette sans propriétaire",
            ],
            [
              "Intégrer / automatiser",
              "Deux outils utiles fonctionnent mais une donnée circule à la main",
              "Pas de source fiable, de clé, de journal ou de reprise manuelle",
            ],
            [
              "Acheter / configurer",
              "Un standard réussit les cas ordinaires, difficiles et critiques",
              "Échec important masqué par une démonstration générique",
            ],
            [
              "Prototyper en low-code",
              "Périmètre interne borné, équipe capable de gouverner la plateforme",
              "Créateur isolé, droits flous, licences ou sortie non maîtrisées",
            ],
            [
              "Étudier le sur-mesure",
              "Écart stable, important, différenciant et non couvert après essais",
              "Règles changeantes, propriétaire absent ou maintenance non financée",
            ],
            [
              "Observer",
              "Problème rare, temporaire, peu conséquent ou encore mal compris",
              "Ne pas observer passivement un risque critique déjà établi",
            ],
          ]}
        />

        <p>
          « Logiciel standard » recouvre plusieurs familles. Un outil spécialisé
          peut traiter un seul travail. Un logiciel vertical connaît les usages
          d’un secteur. Un ERP partage plusieurs référentiels et fonctions de
          gestion. Une plateforme low-code fournit des briques pour construire
          plus vite. Le sur-mesure programme une réponse propre. Le choix n’est
          pas nécessairement exclusif : l’ERP peut rester source comptable, un
          logiciel vertical gérer la production et une petite interface relier
          l’exception qui vous différencie.
        </p>

        <p>
          Pour éviter un faux duel « standard contre sur-mesure », rejouez les
          mêmes événements, avec les mêmes utilisateurs, données, exceptions et
          exigences de continuité. Ajoutez à chaque option ce qu’elle oblige à
          changer dans le processus. Une solution qui réussit uniquement parce
          que l’entreprise abandonne un contrôle indispensable ne couvre pas le
          même périmètre.
        </p>

        <ChapterGate
          proof="Chaque réponse est reliée à une cause, un cas rejoué, une limite précise et la prochaine vérification la moins coûteuse."
          stop="Les options utilisent des périmètres différents ou le sur-mesure est présenté comme l’étape finale d’une échelle de maturité."
          consequence="Standard, intégration, low-code et spécifique restent comparables sans avantage artificiel donné à la solution vendue."
        />

        <h2 id="trois-situations">
          7. Notez trois situations réelles avant de demander un devis
        </h2>

        <p>
          Commencez par trois situations pour ouvrir une discussion sérieuse,
          pas pour décider définitivement. Choisissez un cas ordinaire, un cas
          compliqué et un cas qui a produit une conséquence importante. Copiez
          la fiche ci-dessous pour chacun.
        </p>

        <FormulaBox>
          {[
            "FICHE D’UNE SITUATION RÉELLE",
            "",
            "Date et travail à accomplir :",
            "Résultat attendu :",
            "Ce qui s’est réellement passé :",
            "Outils, fichiers et personnes concernés :",
            "Temps de travail et temps d’attente :",
            "Erreur, retard, perte, mécontentement ou risque produit :",
            "Contournement employé :",
            "Correction déjà essayée dans l’outil actuel :",
            "Solution standard comparée, démontrée ou essayée, et résultat :",
            "La règle métier est-elle stable ?",
            "Solution manuelle disponible en cas de panne :",
          ].join("\n")}
        </FormulaBox>

        <p>
          Relisez ensuite les trois fiches. Si le même manque revient avec une
          règle stable, vous tenez peut-être un besoin à traiter. Si chaque
          incident possède une cause différente, ne les regroupez pas sous un
          grand « projet de transformation ». Corrigez chaque cause ou
          poursuivez l’observation.
        </p>

        <p>
          Cette fiche prépare aussi la suite : vous pourrez calculer le{" "}
          <Link href="/guides/calculer-roi-application-metier">
            retour sur investissement d’une application métier
          </Link>{" "}
          avec des données réelles, puis rédiger un{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges compréhensible
          </Link>{" "}
          seulement si le projet mérite d’être étudié.
        </p>

        <p>
          Si vos trois situations concernent des techniciens, des rendez-vous,
          des comptes rendus et une ressaisie avant facturation, suivez plutôt{" "}
          <Link href="/guides/application-gestion-interventions-terrain">
            une intervention complète du bureau jusqu’au terrain
          </Link>
          . Vous pourrez tester un logiciel existant sur les mêmes cas avant de
          conclure qu’une application adaptée est nécessaire.
        </p>

        <ChapterGate
          proof="Les trois fiches possèdent des identifiants uniques, une date, une référence expurgée, un volume, des durées séparées, une conséquence, une règle et un propriétaire."
          stop="Le même événement est copié trois fois, les durées sont estimées sans période ou une case inconnue est remplie par zéro pour obtenir un résultat."
          consequence="Le dossier reste un prédiagnostic transparent : trois cas n’ont jamais valeur de seuil universel et un seul événement critique peut suffire à sécuriser."
        />

        <BusinessSoftwareNeedDossier />

        <p>
          Le CSV de travail permet de reprendre les événements et les TCO. Le
          JSON versionné permet en plus de réimporter un dossier sans perdre ses
          états inconnus, ses preuves ni ses confirmations. Pour un atelier
          collectif, téléchargez également le{" "}
          <a href="/ressources/kit-diagnostic-besoin-logiciel-metier.xlsx">
            classeur de diagnostic du besoin logiciel
          </a>
          . Il sépare situations, baseline, règles, options, coûts, risques,
          pilote, décision et sources. Le fichier livré contient uniquement un
          exemple fictif : la branche finale reste verrouillée tant que les
          données réelles et les preuves n’ont pas été confirmées.
        </p>

        <h2 id="regles-donnees">
          9. Cartographiez les règles, les données et les intégrations
        </h2>

        <p>
          Une application ne répare pas une règle implicite. Prenez la situation
          la plus importante et écrivez la règle comme un test : condition,
          résultat attendu, exception, personne qui tranche et durée pendant
          laquelle une dérogation reste valable. Versionnez-la. Si deux
          responsables donnent des réponses différentes, le développement ne
          doit pas choisir silencieusement à leur place.
        </p>

        <GuideTable
          caption="Fiche d’une règle métier testable"
          headers={["Élément", "Question à résoudre", "Preuve minimale"]}
          rows={[
            [
              "Condition",
              "Quelles données déclenchent la règle et à quel instant ?",
              "Cas positif avec valeurs expurgées",
            ],
            [
              "Résultat",
              "Quel état, document, droit ou message doit être produit ?",
              "Sortie observable et acceptée",
            ],
            [
              "Exception",
              "Quel cas ne suit pas la règle principale et pourquoi ?",
              "Cas négatif ou limite rejoué",
            ],
            [
              "Arbitrage",
              "Qui décide lorsque deux règles se contredisent ?",
              "Nom de rôle, date et trace de décision",
            ],
            [
              "Version",
              "Depuis quand la règle s’applique-t-elle et jusqu’à quand ?",
              "Historique et date de prochaine revue",
            ],
            [
              "Contrôle",
              "Comment détecter une mauvaise application de la règle ?",
              "Test, journal ou rapprochement",
            ],
          ]}
        />

        <p>
          <strong>Exemple fictif.</strong> « Une remise supérieure à 12 % exige
          une validation commerciale » paraît claire. Que se passe-t-il pour un
          contrat-cadre, une remise déjà prévue au tarif, un client en devise
          étrangère, une annulation ou l’absence du directeur ? Quel montant
          sert de base ? La règle doit nommer la donnée source, l’unité,
          l’arrondi, l’instant du contrôle, le remplaçant et la trace attendue.
          Sans cela, chaque technologie donnera l’illusion de fonctionner sur le
          cas heureux.
        </p>

        <h3>La carte des données tient sur une ligne par flux</h3>

        <p>
          Pour chaque information importante, désignez la source de vérité, le
          propriétaire métier, la clé qui permet de la retrouver, les systèmes
          qui la lisent ou la modifient, la fréquence, la règle de correction et
          la durée de conservation. Un nom de colonne n’est pas un dictionnaire
          de données : « client », « statut » ou « montant » doivent avoir une
          définition, un format, une unité et une responsabilité.
        </p>

        <GuideTable
          caption="Carte minimale d’un flux de données"
          headers={["À écrire", "Exemple fictif", "Question de contrôle"]}
          rows={[
            [
              "Source de vérité et propriétaire",
              "CRM — responsable commercial",
              "Qui peut corriger et qui approuve ?",
            ],
            [
              "Identifiant de rapprochement",
              "ID client interne, jamais le seul nom",
              "Résiste-t-il aux doublons et aux changements ?",
            ],
            [
              "Destination et fréquence",
              "Planning — à chaque commande validée",
              "Temps réel nécessaire ou lot suffisant ?",
            ],
            [
              "Échec et rejeu",
              "File d’erreurs, alerte, reprise idempotente",
              "Une relance crée-t-elle un doublon ?",
            ],
            [
              "Journal et réconciliation",
              "ID source, ID cible, date, statut",
              "Peut-on prouver ce qui manque ?",
            ],
            [
              "Export et sortie",
              "Format documenté et réimporté",
              "Les pièces, liens et historiques suivent-ils ?",
            ],
          ]}
        />

        <p>
          Le{" "}
          <SourceLink id="GOVUK-OPEN-STANDARDS">
            guide britannique sur les standards ouverts
          </SourceLink>{" "}
          explique pourquoi des formats et interfaces documentés facilitent
          l’échange, la réutilisation et le changement. La{" "}
          <SourceLink id="CANADA-SERVICE-DIGITAL">
            directive canadienne sur les services numériques
          </SourceLink>{" "}
          demande aussi de prévoir import, export, interopérabilité et tests de
          bout en bout. Ce sont des disciplines utiles, pas des garanties : un
          export annoncé doit être obtenu, lu, rapproché puis réimporté dans un
          exercice contrôlé.
        </p>

        <h3>Une intégration a besoin d’un mode d’échec</h3>

        <p>
          « Connecter le CRM au planning » ne décrit pas le service. Écrivez le
          déclencheur, l’information transmise, la clé de déduplication, le
          délai acceptable, le comportement en cas de donnée invalide, l’alerte,
          le propriétaire, le rejeu et le retour manuel. Une automatisation sans
          journal transforme une ressaisie visible en erreur silencieuse. Une
          automatisation irréversible sans validation humaine peut augmenter le
          risque au lieu de le réduire.
        </p>

        <InfoBox
          variant="amber"
          title="Ne mettez aucun secret dans le dossier partagé"
        >
          Référencez le coffre, le rôle ou le système qui possède un accès ; ne
          copiez jamais mot de passe, clé d’API, jeton, donnée client inutile ou
          export non expurgé dans le diagnostic, le CSV ou le classeur.
        </InfoBox>

        <ChapterGate
          proof="Règles versionnées, cas positifs et négatifs, sources de vérité, propriétaires, identifiants, flux, échecs, rejeu, journal et export sont écrits."
          stop="Deux responsables ne s’accordent pas sur la règle, aucune donnée ne fait foi ou une intégration critique n’a ni alerte ni reprise manuelle."
          consequence="Les options sont testées sur un contrat fonctionnel commun et les erreurs ne disparaissent pas dans une connexion opaque."
        />

        <h2 id="standard-erp-low-code">
          10. Testez standard, ERP et low-code sur les mêmes cas
        </h2>

        <p>
          Une démonstration commerciale montre ce que l’éditeur a préparé. Votre
          test doit montrer ce que l’entreprise rencontrera. Fournissez un cas
          ordinaire, un cas difficile, un cas critique, une annulation, un
          doublon, une absence, une erreur d’interface et une exportation.
          Demandez au futur utilisateur d’exécuter le travail ; observer le
          commercial cliquer n’établit ni l’ergonomie ni l’adoption.
        </p>

        <p>
          Le{" "}
          <SourceLink id="GOVUK-COTS">
            cadre britannique pour les produits standards
          </SourceLink>{" "}
          recommande de comprendre le problème, d’essayer les options et
          d’évaluer le service complet, dont accessibilité et cycle de vie. Le{" "}
          <SourceLink id="DTA-DIGITAL-STANDARD">
            standard numérique australien
          </SourceLink>{" "}
          relie intention claire, besoins des utilisateurs, inclusion,
          confiance, réutilisation, mesure et amélioration continue. Aucun de
          ces cadres publics étrangers ne dicte votre achat ; leur intérêt est
          de rendre les preuves contradictoires.
        </p>

        <GuideTable
          caption="Fit-gap d’un logiciel standard ou d’un ERP"
          headers={[
            "Résultat du cas rejoué",
            "Classement de l’écart",
            "Suite raisonnable",
          ]}
          rows={[
            [
              "Le cas réussit sans changement",
              "Couvert en standard",
              "Vérifier droits, données, exploitation et TCO",
            ],
            [
              "Le cas réussit après paramétrage documenté",
              "Configuration",
              "Mesurer effort, compétence et tenue aux mises à jour",
            ],
            [
              "Le cas exige un échange avec un autre outil",
              "Intégration",
              "Spécifier source, clé, journal, erreur et sortie",
            ],
            [
              "Une extension publique et maintenue suffit",
              "Extension",
              "Vérifier éditeur, version, sécurité et coût de cycle de vie",
            ],
            [
              "Il faut modifier le cœur de l’ERP",
              "Personnalisation forte",
              "Chiffrer upgrades, dépendance et alternative périphérique",
            ],
            [
              "Le cas critique reste impossible",
              "Écart fonctionnel prouvé",
              "Comparer autre standard, complément ou fonction spécifique",
            ],
          ]}
        />

        <p>
          Ne notez jamais « le standard ne convient pas » après une présentation
          générique. Écrivez : « le 16 juillet, la version testée n’a pas pu
          appliquer l’exception X sans modifier Y ; réponse écrite du
          fournisseur et export joints ». À l’inverse, ne transformez pas une
          mauvaise configuration ou des données sales en écart produit. Rejouez
          après correction pour savoir ce qui reste réellement.
        </p>

        <p>
          Les ressources{" "}
          <SourceLink id="FRANCENUM-ERP">France Num sur l’ERP</SourceLink> et{" "}
          <SourceLink id="DIGITALGOV-ACQUISITIONS">
            Digital.gov sur les acquisitions numériques
          </SourceLink>{" "}
          insistent respectivement sur processus, données, équipes et
          couverture, puis sur la recherche utilisateur et la distinction entre
          configuration et modification. La doctrine européenne{" "}
          <SourceLink id="EU-REUSE-BUY-BUILD">
            « réutiliser, acheter, construire »
          </SourceLink>{" "}
          apporte une préférence de méthode, jamais une réponse automatique :
          une exigence non couverte doit être challengée puis prouvée.
        </p>

        <h3>
          Le low-code et le no-code déplacent le travail ; ils ne le suppriment
          pas
        </h3>

        <p>
          Un prototype interne, une saisie simple ou une validation bornée peut
          être réalisée rapidement sur une plateforme. La vitesse initiale
          n’enlève pas les environnements de développement et de production, les
          droits, les tests, les connecteurs, les limites de volume, les
          licences, la supervision, les sauvegardes, le support, le départ du
          créateur et l’export. Si un salarié devient seul propriétaire d’une
          application critique, l’entreprise a recréé la dépendance qu’elle
          voulait supprimer.
        </p>

        <p>
          Le guide{" "}
          <SourceLink id="FRANCENUM-NOCODE">
            France Num consacré au no-code
          </SourceLink>{" "}
          décrit ses usages possibles ; la documentation{" "}
          <SourceLink id="MICROSOFT-POWER-COE">
            Microsoft sur la gouvernance de Power Platform
          </SourceLink>{" "}
          rend visibles rôles, gouvernance, environnements, sécurité, tests,
          supervision et soutien à l’adoption. Cette dernière est une source
          éditeur, donc bornée à son écosystème : elle sert à identifier les
          questions, pas à choisir la plateforme.
        </p>

        <GuideTable
          caption="Questions avant un pilote low-code ou no-code"
          headers={["Domaine", "Preuve à demander", "STOP local possible"]}
          rows={[
            [
              "Propriété",
              "Compte entreprise, administrateurs nommés, inventaire",
              "Application rattachée au compte personnel du créateur",
            ],
            [
              "Cycle de vie",
              "Environnements, version, recette et retour arrière",
              "Modification directe en production sans trace",
            ],
            [
              "Données",
              "Localisation, droits, rétention, export et suppression",
              "Données sensibles sans contrôle adapté",
            ],
            [
              "Connecteurs",
              "Propriétaire, limites, erreurs, alerte et rejeu",
              "Échec silencieux ou dépendance non remplaçable",
            ],
            [
              "Coûts",
              "Licences par rôle, capacité, support et croissance",
              "Horizon 36/60 mois ou scénario haut inconnu",
            ],
            [
              "Succession",
              "Documentation, transfert et exercice par une seconde personne",
              "Aucune reprise possible au départ du maker",
            ],
          ]}
        />

        <p>
          Un prototype peut être la prochaine expérience sans devenir le choix
          final. Limitez sa population, ses données et ses actions, gardez un
          mode manuel, définissez son coût maximal et sa date d’expiration. Si
          le pilote prouve l’usage mais pas la soutenabilité de la plateforme,
          la conclusion peut être de reconstruire la fonction dans un autre
          cadre ; elle ne transforme pas le prototype en dette obligatoire.
        </p>

        <ChapterGate
          proof="Les mêmes cas ordinaires, difficiles et critiques sont rejoués ; chaque écart est classé standard, configuration, intégration, extension ou impossibilité prouvée."
          stop="La décision repose sur une démo générique, une promesse éditeur, un prototype personnel ou une modification du cœur sans coût de mise à jour."
          consequence="Acheter, intégrer ou prototyper devient une expérience vérifiable, non une préférence de marque ou de technologie."
        />

        <h2 id="sur-mesure">
          11. Vérifiez six points avant d’étudier le sur-mesure
        </h2>

        <p>
          Étudier le sur-mesure ne signifie pas signer son développement. Cela
          signifie vérifier si une fonction propre à votre entreprise peut créer
          plus de valeur qu’elle n’en coûte à construire et à entretenir. Les
          six points suivants ne forment ni un score ni des conditions
          réglementaires : ils montrent surtout ce qui reste à prouver avant
          d’engager un budget.
        </p>

        <ol>
          <li>le problème revient et produit une conséquence mesurable ;</li>
          <li>la règle principale est assez stable pour être expliquée ;</li>
          <li>
            les personnes concernées ont décrit et testé leurs vrais cas ;
          </li>
          <li>la correction de l’existant n’a pas suffi ;</li>
          <li>
            les solutions standards plausibles ont été raisonnablement examinées
            et leur manque est précis ;
          </li>
          <li>
            une personne de l’entreprise peut décider, suivre le résultat et
            prévoir l’entretien.
          </li>
        </ol>

        <p>
          À ce stade, ne demandez pas « combien coûte une application qui fait
          tout ? ». Demandez d’abord le coût d’une réponse limitée au problème
          prouvé. Comparez-la avec un{" "}
          <Link href="/guides/erp-ou-logiciel-sur-mesure">
            ERP, un logiciel standard configuré ou un développement sur mesure
          </Link>
          . Intégrez la reprise des données, les connexions, la formation, la
          maintenance et la sortie ; le prix de construction seul ne suffit pas.
        </p>

        <InfoBox
          variant="emerald"
          title="Le bon résultat peut être de ne rien développer"
        >
          Un diagnostic professionnel peut recommander une meilleure
          configuration, un connecteur, une solution standard ou une procédure
          de secours. Cette conclusion vous fait économiser un projet inutile et
          ne doit pas être considérée comme une occasion commerciale perdue.
        </InfoBox>

        <p>
          Le{" "}
          <SourceLink id="GOVUK-CHOOSE-TECH">
            guide britannique de choix technologique
          </SourceLink>{" "}
          recommande de savoir ce qui doit être construit, acheté ou réutilisé,
          de prototyper les intégrations et de préserver la capacité à changer.
          Le{" "}
          <SourceLink id="RGESN-2024">
            référentiel français d’écoconception
          </SourceLink>{" "}
          demande aussi d’examiner le besoin et les solutions existantes avant
          de créer un nouveau service. Ni l’un ni l’autre n’interdit le
          sur-mesure : ils obligent surtout à expliquer l’écart et le coût de
          cycle de vie.
        </p>

        <ChapterGate
          proof="L’écart spécifique est stable, rejoué, important, non couvert après correction et essais, avec propriétaire, entretien, sortie et option plus petite documentés."
          stop="Le sur-mesure sert à figer une règle changeante, à contourner un désaccord interne ou à éviter de tester une configuration standard plausible."
          consequence="L’étude porte sur une fonction prouvée et bornée, pas sur une application totale dont le besoin serait supposé."
        />

        <h2 id="tco">12. Comparez le coût complet à 12, 36 et 60 mois</h2>

        <p>
          Le prix visible n’est qu’une ligne. Pour une solution standard, la
          licence peut être faible tandis que configuration, reprise et temps
          interne dominent. Pour le sur-mesure, la construction initiale peut
          être lisible mais la maintenance, l’hébergement, le support et les
          évolutions continuent. Pour le low-code, les licences, connecteurs et
          capacités changent avec les rôles et les volumes. Comparez un service
          équivalent, pas quatre devis qui ne couvrent pas la même chose.
        </p>

        <GuideTable
          caption="Postes à conserver dans chaque option"
          headers={[
            "Bloc de coût",
            "Exemples à inclure",
            "Inconnue interdite à zéro",
          ]}
          rows={[
            [
              "Mise en place",
              "Licence initiale, cadrage, configuration, construction, sécurité",
              "Périmètre ou charge non estimés",
            ],
            [
              "Données et intégrations",
              "Nettoyage, migration, interfaces, tests, réconciliation",
              "Volume, qualité, format ou propriétaire inconnus",
            ],
            [
              "Adoption et transition",
              "Formation, documentation, support, double fonctionnement",
              "Temps interne ou population non définis",
            ],
            [
              "Fonctionnement",
              "Abonnement, hébergement, exploitation, administration, support",
              "Croissance des utilisateurs ou capacité inconnue",
            ],
            [
              "Maintenance",
              "Correctifs, mises à jour, tests, sécurité, dépendances, évolutions",
              "Propriétaire ou niveau de service absent",
            ],
            [
              "Sortie",
              "Export, assistance, reprise, décommissionnement, archivage",
              "Format, délai ou coût de réversibilité inconnu",
            ],
          ]}
        />

        <p>
          Les horizons répondent à des questions différentes. À douze mois, vous
          voyez l’effort de lancement. À trente-six mois, le fonctionnement et
          les évolutions deviennent visibles. À soixante mois, la dépendance, la
          sortie et les mises à niveau pèsent davantage. Il ne faut pas supposer
          qu’une entreprise utilisera forcément l’outil cinq ans ; cet horizon
          révèle simplement les coûts qui disparaissent d’une comparaison
          courte.
        </p>

        <p>
          Le{" "}
          <SourceLink id="GOVUK-BENEFITS">
            manuel britannique de mesure des bénéfices
          </SourceLink>{" "}
          recommande baseline, coûts, bénéfices, sensibilité et décisions de
          poursuivre, modifier ou arrêter. Le{" "}
          <SourceLink id="GOVUK-DDAT-PLAYBOOK">
            Digital, Data and Technology Playbook
          </SourceLink>{" "}
          étend la lecture au cycle de vie et à la sortie. Ces cadres d’achat
          public structurent l’analyse ; ils ne constituent aucun barème PME.
        </p>

        <h3>Exemple de mécanique, pas barème de marché</h3>

        <p>
          <strong>Exemple entièrement fictif.</strong> Quatre options sont
          évaluées sur les mêmes trois situations. Les montants servent
          uniquement à vérifier la formule. « Corriger » comprend 4 800 € de
          mise en place, 320 € par mois et 1 000 € de sortie : 9 640 € à douze
          mois, 17 320 € à trente-six mois et 25 000 € à soixante mois. «
          Intégrer » donne respectivement 27 120 €, 45 360 € et 63 600 €.
          L’option standard garde une sortie inconnue et un cas critique non
          rejoué : ses trois TCO restent donc <strong>ND</strong>. Le sur-mesure
          produit 115 200 €, 165 600 € et 216 000 € dans ce seul scénario.
        </p>

        <GuideTable
          caption="TCO de l’exemple fictif — aucune recommandation"
          headers={["Option", "12 / 36 / 60 mois", "Limite déterminante"]}
          rows={[
            [
              "Corriger l’existant",
              "9 640 € / 17 320 € / 25 000 €",
              "Ne couvre pas nécessairement les trois causes",
            ],
            [
              "Connecter les outils",
              "27 120 € / 45 360 € / 63 600 €",
              "Dépend de la qualité des données et du rejeu",
            ],
            [
              "Standard configuré",
              "ND / ND / ND",
              "Sortie inconnue et cas critique non rejoué",
            ],
            [
              "Fonction sur mesure",
              "115 200 € / 165 600 € / 216 000 €",
              "Valeur seulement si l’écart spécifique reste prouvé",
            ],
          ]}
        />

        <p>
          Un TCO plus bas n’est pas automatiquement le meilleur choix. Il peut
          laisser un risque critique, échouer sur un cas indispensable ou
          demander une organisation que l’entreprise ne peut pas tenir. Un TCO
          plus élevé n’est pas automatiquement justifié par une promesse de
          gain. Conservez à côté les risques non monétisés, les dépendances, le
          niveau de preuve et la capacité d’adoption.
        </p>

        <h3>Séparez capacité, décaissement et marge</h3>

        <p>
          Cent heures de ressaisie observées représentent d’abord une capacité
          potentiellement réaffectable. Elles deviennent une économie de
          trésorerie seulement si un décaissement disparaît réellement, ce qui
          exige une décision distincte et peut ne pas être souhaitable. Un
          encaissement plus rapide améliore éventuellement le besoin en fonds de
          roulement sans créer le montant de la facture. Une vente
          définitivement perdue se valorise par la marge contributive
          défendable, non par le chiffre d’affaires brut. Ne comptez jamais le
          même bénéfice dans deux catégories.
        </p>

        <p>
          Faites enfin varier les hypothèses locales : volume bas, central et
          haut ; coût de migration ; nombre d’utilisateurs ; croissance ;
          maintenance ; durée de double fonctionnement ; sortie. Une option qui
          reste acceptable uniquement dans le scénario le plus optimiste mérite
          une expérience plus petite, pas une certitude plus grande.
        </p>

        <ChapterGate
          proof="Chaque option couvre le même périmètre et expose mise en place, données, transition, fonctionnement, maintenance, temps interne et sortie aux horizons 12/36/60."
          stop="Un coût inconnu devient zéro, le temps libéré devient automatiquement trésorerie ou un cas critique non couvert disparaît du périmètre."
          consequence="Le TCO éclaire l’arbitrage sans produire un faux gagnant économique ni masquer les risques non monétisés."
        />

        <h2 id="pilote">
          13. Organisez un pilote avec décisions STOP, corriger ou continuer
        </h2>

        <p>
          Un pilote n’est pas une version bon marché mise en production sans
          critères. C’est une expérience bornée conçue pour apprendre.
          Définissez la population, les données, la durée, les cas rejoués, la
          baseline, les mesures, le responsable, le retour arrière et la date de
          décision avant le premier usage. Gardez un mode manuel viable pour que
          l’équipe puisse arrêter sans prendre le service en otage.
        </p>

        <GuideTable
          caption="Protocole de pilote en quatre décisions"
          headers={["Moment", "Question", "Sortie écrite"]}
          rows={[
            [
              "Avant",
              "Quel problème, quelle baseline et quels cas critiques ?",
              "Périmètre, critères locaux, responsables et rollback",
            ],
            [
              "Pendant",
              "Les données se rapprochent-elles et les utilisateurs réussissent-ils ?",
              "Journal d’événements, erreurs, contournements et incidents",
            ],
            [
              "30 jours après le pilote",
              "Le service est-il utilisé et exploitable sans dépendance cachée ?",
              "Continuer, corriger, réduire ou arrêter",
            ],
            [
              "90 jours après le pilote",
              "Le résultat tient-il en charge et le coût complet se confirme-t-il ?",
              "Décision humaine, limites, TCO révisé et prochaine revue",
            ],
          ]}
        />

        <p>
          Les seuils viennent de votre activité. Une erreur réglementaire peut
          être éliminatoire dès le premier cas. Une réduction de temps peut
          demander plusieurs cycles représentatifs. Une adoption plus faible que
          prévu peut révéler une mauvaise interface, une formation insuffisante
          ou un problème inutilement automatisé. Écrivez la branche associée à
          chaque signal : STOP immédiat, correction puis nouveau test,
          prolongation justifiée ou passage à l’étape suivante.
        </p>

        <h3>Plan pratique sur trente jours</h3>

        <ol>
          <li>
            <strong>Jours 1 à 5 :</strong> geler les trois situations, la
            baseline, les règles, les accès, les données et le mode manuel.
          </li>
          <li>
            <strong>Jours 6 à 10 :</strong> préparer environnement, import
            expurgé, comptes nominatifs, cas de test, journaux et retour
            arrière.
          </li>
          <li>
            <strong>Jours 11 à 20 :</strong> faire travailler de vrais
            utilisateurs sur cas courant, difficile et critique ; observer sans
            leur souffler le parcours.
          </li>
          <li>
            <strong>Jours 21 à 25 :</strong> réconcilier les données, examiner
            erreurs, contournements, accessibilité, support et temps interne.
          </li>
          <li>
            <strong>Jours 26 à 30 :</strong> rejouer les échecs corrigés, mettre
            à jour le TCO et tenir une décision avec sponsor, métier, sécurité,
            exploitation et utilisateurs.
          </li>
        </ol>

        <p>
          Le pilote peut conclure « arrêter ». Cela signifie que l’expérience a
          évité une migration plus coûteuse, non qu’elle a échoué. Conservez le
          dossier, les preuves, la cause de l’arrêt et les conditions qui
          justifieraient une nouvelle étude. Une décision sans date d’expiration
          devient vite une vérité historique appliquée à un processus qui a
          changé.
        </p>

        <ChapterGate
          proof="Population, durée, baseline, cas, mesures, STOP, rollback, responsable et suivis +30/+90 après le pilote sont décidés avant le lancement."
          stop="Le prototype traite des données critiques sans retour manuel, les critères changent après les résultats ou personne n’a autorité pour arrêter."
          consequence="Le pilote produit une preuve et une décision réversible au lieu de devenir par inertie le futur système de production."
        />

        <h2 id="securite-accessibilite">
          14. Traitez sécurité, continuité, accessibilité et exploitation
        </h2>

        <p>
          Le besoin fonctionnel n’est qu’une partie du service. Listez les
          personnes et rôles, l’authentification, les privilèges, les départs,
          les journaux, les données personnelles, la conservation, les
          sous-traitants, les sauvegardes, les restaurations, la supervision,
          les incidents, le support et les mises à jour. Un outil qui réussit
          une démonstration mais ne peut pas être exploité sereinement n’est pas
          une option complète.
        </p>

        <GuideTable
          caption="Portes non fonctionnelles avant décision"
          headers={["Domaine", "Preuve attendue", "Question qui reste humaine"]}
          rows={[
            [
              "Accès",
              "Comptes nominatifs, moindre privilège, revue et retrait exercé",
              "Qui autorise chaque rôle ?",
            ],
            [
              "Données personnelles",
              "Finalité, minimisation, rétention, sous-traitants et droits",
              "Quel fondement et quelle durée sont appropriés ?",
            ],
            [
              "Continuité",
              "Sauvegarde restaurée, mode dégradé, responsabilités et exercice",
              "Quel impact métier est acceptable ?",
            ],
            [
              "RTO / RPO",
              "Temps de reprise et point de données dérivés de l’impact",
              "Quelles opérations faut-il reconstituer ?",
            ],
            [
              "Accessibilité",
              "Clavier, focus, libellés, lecteur d’écran, contraste et zoom",
              "Quels utilisateurs et aménagements doivent être servis ?",
            ],
            [
              "Exploitation",
              "Supervision, alerte, support, correctifs, dépendances et fin de support",
              "Quel niveau de service financer ?",
            ],
          ]}
        />

        <p>
          Les recommandations de la{" "}
          <SourceLink id="CNIL-HABILITATIONS">
            CNIL sur les habilitations
          </SourceLink>
          , les{" "}
          <SourceLink id="CNIL-SAUVEGARDES">sauvegardes testées</SourceLink> et
          la <SourceLink id="CNIL-CONTINUITE">continuité et reprise</SourceLink>{" "}
          s’appliquent dans leur périmètre de protection des données
          personnelles. Ajoutez la{" "}
          <SourceLink id="CNIL-SOUS-TRAITANCE">
            gestion de la sous-traitance
          </SourceLink>{" "}
          lorsque des données sont confiées à un prestataire. Ces fiches ne
          prouvent pas qu’une nouvelle application est nécessaire. Le{" "}
          <SourceLink id="NIST-CSF-2">
            Cybersecurity Framework 2.0 du NIST
          </SourceLink>{" "}
          apporte un regard international volontaire sur gouverner, identifier,
          protéger, détecter, répondre et rétablir ; il n’est ni une obligation
          française ni un audit de votre système.
        </p>

        <h3>RTO et RPO partent de l’activité, pas du catalogue</h3>

        <p>
          Le{" "}
          <SourceLink id="NIST-SP800-34">
            guide de planification de continuité du NIST
          </SourceLink>{" "}
          relie les priorités de reprise à l’analyse d’impact. Le RTO décrit le
          temps de reprise acceptable avant que l’impact devienne excessif. Le
          RPO décrit le point de données auquel il faut pouvoir revenir. Une
          sauvegarde quotidienne ne garantit pas un RPO de vingt-quatre heures
          si elle est illisible, incomplète ou non restaurable avec la
          configuration. Traduisez le RPO en opérations à reconstituer, désignez
          qui les ressaisit et chronométrez un exercice. N’achetez pas un « 24/7
          » avant d’avoir défini le parcours, la plage, la mesure, l’escalade et
          la personne capable d’agir.
        </p>

        <h3>L’accessibilité fait partie du cas réel</h3>

        <p>
          Testez le clavier, le focus visible, les libellés, les messages
          d’erreur, le zoom, les contrastes et, lorsque le contexte l’exige, un
          lecteur d’écran. Ajoutez les personnes qui travaillent avec un petit
          écran, des gants, une connexion instable ou dans un environnement
          bruyant. L’accessibilité et le fonctionnement dégradé ne sont pas des
          finitions : ils déterminent si le résultat peut être atteint par les
          utilisateurs réels.
        </p>

        <ChapterGate
          proof="Accès, données, sous-traitance, restauration, mode dégradé, RTO/RPO, accessibilité, support, correctifs et fin de support sont exercés ou attribués."
          stop="Incident actif, restauration non prouvée, privilège partagé, action irréversible sans contrôle ou utilisateur essentiel incapable d’accomplir le parcours."
          consequence="La solution est évaluée comme un service exploitable, non comme un écran fonctionnel isolé de ses responsabilités."
        />

        <h2 id="migration-sortie">
          15. Préparez la migration et la sortie avant de choisir
        </h2>

        <p>
          Une migration ne consiste pas à copier toutes les colonnes. Décidez ce
          qui doit être nettoyé, conservé, archivé ou supprimé ; attribuez
          chaque transformation ; rapprochez volumes et montants ; testez les
          pièces, liens, historiques et droits ; prévoyez le gel, le delta, le
          retour arrière et la communication. Faites une répétition avec un
          échantillon représentatif puis avec les cas limites.
        </p>

        <GuideTable
          caption="Contrôles de migration et de réversibilité"
          headers={["Étape", "Contrôle", "Preuve de sortie"]}
          rows={[
            [
              "Inventaire",
              "Sources, volumes, propriétaires, qualité et conservation",
              "Registre signé et exclusions motivées",
            ],
            [
              "Transformation",
              "Mapping, unités, encodage, doublons et règles d’arrondi",
              "Cas avant-après et journal des rejets",
            ],
            [
              "Répétition",
              "Import, durée, rapprochement et recette utilisateur",
              "Procès-verbal et corrections rejouées",
            ],
            [
              "Bascule",
              "Gel, delta, fenêtre, responsables, communication et rollback",
              "Chronologie et critères de retour",
            ],
            [
              "Double fonctionnement",
              "Durée, source qui fait foi et réconciliation",
              "Date de fin et coût inclus au TCO",
            ],
            [
              "Sortie",
              "Export complet, documentation, suppression et assistance",
              "Fichier réimporté dans une cible de contrôle",
            ],
          ]}
        />

        <p>
          « Export CSV disponible » n’établit pas la réversibilité. Il peut
          manquer les pièces, les relations, les historiques, les droits ou les
          identifiants nécessaires. Demandez un export pendant l’essai,
          documentez-le et tentez de le réutiliser. Vérifiez le délai,
          l’assistance, le coût, la fréquence, les limites et le sort des
          sauvegardes après résiliation. Un standard ou un SaaS sans sortie
          praticable peut coûter davantage qu’une option plus chère mais
          maîtrisée.
        </p>

        <p>
          La capacité de changer recommandée par{" "}
          <SourceLink id="GOVUK-CHOOSE-TECH">
            Government Digital Service
          </SourceLink>{" "}
          et l’importance donnée à import, export et interopérabilité par le{" "}
          <SourceLink id="CANADA-SERVICE-DIGITAL">
            gouvernement canadien
          </SourceLink>{" "}
          servent ici de garde-fous internationaux. Elles ne garantissent aucune
          portabilité : seule la répétition avec vos formats, volumes, relations
          et responsabilités apporte une preuve locale.
        </p>

        <ChapterGate
          proof="Mapping, nettoyage, répétition, rapprochement, bascule, rollback, double fonctionnement et export réimporté possèdent responsables, dates et coûts."
          stop="La migration complète est le premier essai, l’ancien système est coupé avant rapprochement ou l’export annoncé n’a jamais été obtenu."
          consequence="La décision inclut le coût de changement et l’entreprise conserve une voie de retour ou de sortie réellement testée."
        />

        <h2 id="prochaine-decision">
          16. Votre prochaine décision doit tenir en une phrase
        </h2>

        <p>
          Terminez votre analyse sans jargon. Une phrase complète ressemble à
          ceci :
        </p>

        <FormulaBox>
          {[
            "Avant le [date], nous allons [sécuriser / corriger / tester / comparer / observer]",
            "sur [situation précise], parce que [conséquence observée].",
            "Nous jugerons le résultat avec [mesure] et, si cela ne fonctionne pas,",
            "nous examinerons ensuite [réponse suivante].",
          ].join("\n")}
        </FormulaBox>

        <p>
          Si vous ne pouvez pas compléter la situation, la conséquence ou la
          mesure, continuez à observer. Si vous le pouvez, vous êtes prêt à
          demander un avis sans laisser le prestataire choisir le problème à
          votre place.
        </p>

        <p>
          Hagnéré Code conçoit des{" "}
          <Link href="/services/outils-internes-sur-mesure">
            outils internes et applications métier
          </Link>
          , mais une première analyse peut parfaitement conclure qu’une
          correction ou un logiciel standard suffit.
        </p>

        <GuideInlineCTA
          title="Faire examiner trois situations réelles"
          description="Décrivez trois blocages vécus, les outils concernés et ce que vous avez déjà essayé. Le premier livrable attendu est une note qui sépare les STOP, les preuves manquantes, les options à tester et la prochaine décision — sans présumer d’un développement."
          tags={[
            "Aucun développement présumé",
            "Première action expliquée",
            "Vous restez libre de poursuivre ou non",
          ]}
          ctaLabel="Présenter mes trois situations"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources et limites</h2>

        <p>
          Sources consultées le 28 juillet 2026. Le corpus confronte des
          autorités françaises, européennes, britanniques, canadiennes,
          australiennes, américaines et internationales. Les cadres publics
          étrangers servent à contrôler la méthode ; ils ne deviennent jamais
          des obligations françaises. Les analyses agrégées ne prouvent aucun
          gain individuel, les exemples chiffrés du guide sont fictifs et aucun
          référentiel ne choisit le logiciel à votre place. Ce contenu n’est ni
          un audit de sécurité ou d’accessibilité, ni un avis juridique,
          comptable ou fiscal, ni un devis.
        </p>

        <ul>
          {sources.map((source) => (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.publisher} — {source.title}
              </a>
              . {source.scope} <strong>Limite :</strong> {source.limits}
            </li>
          ))}
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
