import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("digitaliser-bons-intervention");

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
        alt: "Scénario fictif d’un bon d’intervention du terrain au contrôle administratif",
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
      name: "Bons d’intervention",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Un PDF rempli et envoyé peut-il suffire ?",
    answer:
      "Oui, il peut suffire si le bon reste court, arrive à temps, distingue le prévu du réalisé, traite les réserves et permet de retrouver la version transmise. La bonne réponse n’est pas forcément de développer une application.",
  },
  {
    question: "Une signature dessinée au doigt a-t-elle toujours une valeur ?",
    answer:
      "Non, pas automatiquement. Le droit n’écarte pas une signature au seul motif qu’elle est électronique, mais sa portée dépend notamment de l’identification, du procédé, du document concerné et des faits. Faites examiner votre dispositif si l’enjeu juridique est important.",
  },
  {
    question: "Comment remplir un bon sans réseau ?",
    answer:
      "Seulement avec un fonctionnement hors ligne réellement testé : stockage local protégé, état « en attente », reprise visible, absence de doublon, gestion des conflits et procédure si le téléphone est perdu. Une case dans une brochure ne suffit pas.",
  },
  {
    question: "Faut-il demander une photo ou la position du technicien ?",
    answer:
      "Pas par défaut. Demandez uniquement ce qui est nécessaire à la finalité annoncée. Justifiez les permissions du téléphone, informez les personnes et prévoyez une autre voie lorsque la donnée n’est pas indispensable.",
  },
  {
    question: "Quel outil choisir pour des bons d’intervention numériques ?",
    answer:
      "Comparez d’abord quatre réponses sur les mêmes cas : papier ou PDF corrigé, formulaire no-code, logiciel terrain standard et développement spécifique. Testez réserves, refus, corrections, hors-ligne, droits, export et coût total.",
  },
  {
    question: "Peut-on déclencher automatiquement la facture ?",
    answer:
      "Oui dans certains parcours, mais seulement à partir d’un état administratif explicite et contrôlé. Une réserve, un champ manquant, un refus ou une correction peut exiger une décision humaine avant la facturation.",
  },
];

const documentJourney = [
  {
    state: "Préparé",
    owner: "Bureau",
    action:
      "Crée BI-042 avec le site, le contrôle prévu, deux filtres, le technicien et le destinataire.",
    question: "La personne sur le terrain sait-elle ce qui est attendu ?",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    state: "Réalisé",
    owner: "Technicien",
    action:
      "Déclare deux filtres remplacés sous la référence fictive F-27 et un bruit encore audible après la remise en route.",
    question: "Le bon distingue-t-il clairement le prévu du réalisé ?",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    state: "Avec réserve",
    owner: "Contact client déclaré",
    action:
      "À 16 h 40, rattache « bruit encore audible » à la version 1. Un refus ou une absence aurait produit un état différent, sans fabriquer d’accord.",
    question: "Le résultat réel de la validation est-il conservé ?",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    state: "En attente d’envoi",
    owner: "Technicien",
    action:
      "Son téléphone conserve le brouillon de façon protégée pendant la coupure réseau et indique qu’il n’est pas encore reçu.",
    question: "Le technicien voit-il ce qui reste à transmettre ?",
    color:
      "border-orange-200 bg-orange-50/70 dark:border-orange-900 dark:bg-orange-950/20",
  },
  {
    state: "Reçu une fois",
    owner: "Technicien",
    action:
      "Le service d’envoi reprend au retour du réseau ; le technicien voit la confirmation, et une seconde action ne doit pas créer un second bon.",
    question: "La réception ou l’échec est-il confirmé sans ambiguïté ?",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    state: "Contrôlé",
    owner: "Administration",
    action:
      "Vérifie la version 1, le prévu, le réalisé, les pièces, la réserve, l’auteur déclaré et le destinataire.",
    question: "L’administration peut-elle prendre une décision sans appeler ?",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    state: "Corrigé — version 2",
    owner: "Technicien puis administration",
    action:
      "Corrige la référence fictive F-27 en F-72 sans effacer l’auteur, la date, le champ changé ni la version 1.",
    question: "La correction peut-elle être expliquée plus tard ?",
    color:
      "border-fuchsia-200 bg-fuchsia-50/70 dark:border-fuchsia-900 dark:bg-fuchsia-950/20",
  },
  {
    state: "À compléter",
    owner: "Administration",
    action:
      "Ne déclenche pas la facture et attribue au responsable maintenance l’examen de la réserve sur le bruit.",
    question: "L’état facturable, incomplet ou contesté est-il explicite ?",
    color:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
  {
    state: "Version 2 envoyée — à compléter",
    owner: "Administration",
    action:
      "Adresse la version 2 au bon destinataire, conserve la réserve ouverte et indique que le responsable maintenance doit décider de la suite.",
    question:
      "Le client et le bureau voient-ils la même version, le même état et la même prochaine action ?",
    color: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
  },
];

const solutionOptions = [
  {
    title: "Garder le papier ou le PDF, mais corriger le parcours",
    when: "Les champs et exceptions sont peu nombreux et le document arrive à temps dès que chacun sait quoi remplir et à qui l’envoyer.",
    verify:
      "Faites passer BI-042, sa réserve, son hors-ligne et sa correction. Vérifiez qui lit ou modifie, quelle version arrive et comment le document est récupéré.",
    costAndExit:
      "Comptez impression, classement protégé, relances, reprises, export et destruction. Gardez cette option si elle produit un bon exploitable au moindre coût total.",
  },
  {
    title: "Utiliser un formulaire assemblé sans développement classique",
    when: "Les règles restent lisibles et une personne peut entretenir l’outil dit « no-code » et ses connexions.",
    verify:
      "Faites passer BI-042 avec les mêmes droits, versions, réserves, coupures, destinataires, sauvegarde et récupération des données.",
    costAndExit:
      "Comptez abonnements, assemblage, formation et entretien sur une durée commune. Sortez si les limites imposent des contournements permanents.",
  },
  {
    title: "Choisir un logiciel terrain standard",
    when: "Vos interventions ressemblent à des cas courants et l’entreprise peut adapter certaines habitudes à un produit existant.",
    verify:
      "Faites passer BI-042 et les huit échecs avec la documentation actuelle : droits, versions, hors-ligne, réserves, export, intégrations et assistance.",
    costAndExit:
      "Additionnez licences, réglages, migration, formation, connexion, support et sortie. Réalisez un export utilisable avant de signer.",
  },
  {
    title: "Développer un parcours spécifique",
    when: "Des règles stables et indispensables à votre métier restent mal couvertes après l’essai honnête des trois autres réponses.",
    verify:
      "Exigez BI-042 et les mêmes critères, plus sauvegarde restaurée, sécurité mobile, historique, retour à la version précédente et reprise par un tiers.",
    costAndExit:
      "Comptez conception, développement, hébergement, support, sécurité, documentation et maintenance. Clarifiez les droits sur le code et les données.",
  },
];

const failureTests = [
  {
    title: "Réserve",
    test: "La personne accepte le bon, mais ajoute une observation qui bloque la décision administrative.",
    pass: "La réserve est visible, transmise et reliée à une prochaine action.",
  },
  {
    title: "Refus ou absence",
    test: "La personne refuse de valider, ou personne n’est présent à la fin.",
    pass: "Le bon conserve ce fait sans inventer une signature ni un accord.",
  },
  {
    title: "Coupure réseau",
    test: "Le technicien termine sans connexion, ferme l’application puis revient en ligne.",
    pass: "Le brouillon protégé reste visible et l’envoi reprend avec un état compréhensible.",
  },
  {
    title: "Action répétée",
    test: "Le bouton d’envoi est utilisé deux fois après une connexion instable.",
    pass: "Aucun doublon n’est créé ; un seul bon est reçu, ou le conflit est signalé avant toute duplication.",
  },
  {
    title: "Envoi interrompu",
    test: "Le réseau disparaît pendant l’envoi du bon et de sa pièce jointe.",
    pass: "Le technicien voit ce qui a été reçu ou non ; la reprise ne crée ni document incomplet silencieux ni doublon.",
  },
  {
    title: "Conflit de correction",
    test: "Le bureau corrige une information pendant que le technicien modifie encore sa copie hors ligne.",
    pass: "La règle choisie conserve les deux versions, demande une décision ou refuse l’écrasement ; elle ne choisit pas silencieusement.",
  },
  {
    title: "Téléphone perdu",
    test: "Le terminal contenant un brouillon hors ligne n’est plus disponible.",
    pass: "L’accès local est protégé et la procédure de blocage ou d’effacement a été essayée.",
  },
  {
    title: "Mauvais destinataire",
    test: "Le bon est prêt, mais l’adresse ou l’entreprise destinataire est erronée.",
    pass: "L’envoi est contrôlé, l’erreur peut être corrigée et la version transmise reste identifiable.",
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
          { label: "Bons d’intervention" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vos techniciens terminent l’intervention, mais le bon revient tard, incomplet ou dans la mauvaise version ? Suivez le document jusqu’à la décision de facturer avant de choisir l’outil."
        heroAction={{
          href: "#vie-du-bon",
          label: "Suivre le bon fictif",
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
            title: "1 document à suivre",
            description: "",
            color: "violet",
          },
          {
            number: "04",
            title: "4 réponses possibles",
            description: "",
            color: "blue",
          },
          {
            number: "08",
            title: "8 échecs à tester",
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
            href: "/guides/application-gestion-interventions-terrain",
            label: "Organiser toute l’intervention terrain",
          },
          {
            href: "/guides/automatiser-saisie-donnees-entreprise",
            label: "Éviter la ressaisie vers l’administration",
          },
          {
            href: "/guides/connecter-erp-crm-logiciel-metier",
            label: "Relier le bon aux outils de gestion",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Préparer un cahier des charges",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Découvrir les outils internes sur mesure",
          },
        ]}
        faqTitle="Bons d’intervention numériques : les questions avant de choisir"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Vos techniciens ont fini le travail, mais l’administration ne peut
            toujours pas décider si le dossier est facturable.
          </strong>{" "}
          Une photo du papier manque de détails, le PDF n’est pas la dernière
          version ou le client a formulé une réserve que personne ne retrouve.
          Digitaliser le bon ne consiste donc pas à remplacer un stylo par un
          écran. Le document doit distinguer ce qui était prévu, ce qui a été
          réalisé, l’accord, la réserve, le refus ou l’absence du client, les
          corrections et la version reçue. Vous pourrez alors comparer quatre
          réponses : mieux utiliser le papier ou le PDF, assembler un
          formulaire, choisir un logiciel standard ou développer un parcours
          spécifique. La plus simple peut être la meilleure.
        </p>

        <p>
          Ce guide reste volontairement centré sur le bon. Pour le planning, les
          tournées, l’affectation des techniciens et le pilotage complet, lisez
          le guide sur{" "}
          <Link href="/guides/application-gestion-interventions-terrain">
            l’application de gestion des interventions terrain
          </Link>
          . Ici, nous suivons un seul document jusqu’à son destinataire et à son
          état administratif.
        </p>

        <GuideToc
          items={[
            {
              id: "decision",
              label: "1. Décider à quoi le bon doit servir",
            },
            {
              id: "vie-du-bon",
              label: "2. Suivre BI-042 de bout en bout",
            },
            {
              id: "informations",
              label: "3. Demander chaque information au bon moment",
            },
            {
              id: "validation",
              label: "4. Traiter signature, réserve, refus et absence",
            },
            {
              id: "hors-ligne",
              label: "5. Tester le hors-ligne au lieu de le croire",
            },
            {
              id: "solutions",
              label: "6. Comparer quatre réponses",
            },
            {
              id: "administration",
              label: "7. Préparer une décision administrative",
            },
            {
              id: "echecs",
              label: "8. Faire échouer le parcours huit fois",
            },
            {
              id: "mesure",
              label: "9. Mesurer sans généraliser dix bons",
            },
            {
              id: "aide",
              label: "10. Reconnaître le bon contexte",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="decision">
          1. Avant les champs, décidez à quoi le bon doit servir
        </h2>

        <p>
          Un bon d’intervention est le document qui relie ce que l’entreprise
          avait prévu, ce que le technicien déclare avoir réalisé et la manière
          dont le client a réagi. Après sa réception, quelqu’un doit pouvoir
          informer le client, traiter une réserve, préparer une nouvelle visite
          ou décider si le dossier peut avancer vers la facturation.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
          {[
            {
              label: "Avant",
              title: "Qu’était-il prévu ?",
              text: "Site, équipement, action demandée, créneau, pièces prévues et destinataire.",
            },
            {
              label: "Sur place",
              title: "Qu’a-t-on réellement fait ?",
              text: "Travaux, quantités, pièces, écart, observation et prochaine action.",
            },
            {
              label: "Après",
              title: "Quelle décision peut-on prendre ?",
              text: "Facturable, à compléter, contesté, nouvelle visite ou autre état défini par l’entreprise.",
            },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
                {item.label}
              </p>
              <h3 className="mb-0 mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="Un bouton « signé » ne répond pas à ces trois questions"
        >
          La validation est une étape du parcours, pas le contenu entier du bon.
          Si le prévu, le réalisé, les réserves ou la version manquent, une
          signature ne transforme pas le document en dossier exploitable.
        </InfoBox>

        <h2 id="vie-du-bon">
          2. Suivez le bon fictif BI-042 jusqu’à sa destination
        </h2>

        <p>
          <strong>Exemple illustratif entièrement fictif :</strong>{" "}
          l’intervention, la référence BI-042, les quantités et les difficultés
          ci-dessous ne décrivent aucun client ni résultat obtenu par Hagnéré
          Code. Elles servent à rendre chaque étape vérifiable.
        </p>

        <div className="not-prose my-8 space-y-4">
          {documentJourney.map((step, index) => (
            <article
              key={step.state}
              className={`rounded-2xl border p-5 sm:p-6 ${step.color}`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                  {step.state}
                </h3>
                <span className="rounded-full border border-zinc-300/80 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                  {step.owner}
                </span>
              </div>
              <p className="mb-0 mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {step.action}
              </p>
              <p className="mb-0 mt-4 border-t border-current/10 pt-4 text-sm font-medium text-zinc-950 dark:text-white">
                À vérifier : {step.question}
              </p>
            </article>
          ))}
        </div>

        <p>
          Le même bon produit plusieurs versions et plusieurs décisions. C’est
          la différence essentielle avec une photo envoyée dans une conversation
          : l’entreprise peut expliquer ce qui a été reçu, corrigé, transmis et
          encore attendu.
        </p>

        <h2 id="informations">
          3. Demandez chaque information une seule fois, au moment utile
        </h2>

        <p>
          Un formulaire long pousse à remplir vite, à copier du texte ou à
          ignorer des champs. Partez des décisions précédentes. Une photo n’est
          pas obligatoire « au cas où » ; une position précise non plus. Chaque
          donnée doit avoir une raison, une personne qui la renseigne et une
          conséquence si elle manque.
        </p>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle qu’il faut limiter les données personnelles à ce qui
            est nécessaire
          </a>
          . Si une photo suffit, évitez ou retirez les visages, plaques,
          intérieurs privés et données de localisation qui n’aident pas à
          traiter le bon. Avec des personnes réelles, ne copiez pas la carte
          ci-dessous dans un document non prévu pour leurs données : définissez
          aussi les accès et la durée selon votre finalité et vos obligations.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm sm:p-6 dark:border-zinc-800">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            Carte de vie du bon à copier
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`RÉFÉRENCE DU BON ET VERSION :

ÉVÉNEMENT QUI DÉCLENCHE LE BON :

CE QUI ÉTAIT PRÉVU :

CE QUI A ÉTÉ RÉALISÉ :

ÉCARTS, PIÈCES ET QUANTITÉS :

OBSERVATIONS NÉCESSAIRES :

VALIDATION : ACCEPTÉ / RÉSERVE / REFUS / ABSENCE

PERSONNE ET ACTION DÉCLARÉES :

RESPONSABLE ACTUEL :

ÉTAT D’ENVOI : BROUILLON / EN ATTENTE / REÇU / ÉCHEC

DESTINATAIRE :

DÉCISION : FACTURABLE / À COMPLÉTER / CONTESTÉ

PROCHAINE ACTION ET RESPONSABLE :

CORRECTION : AUTEUR / DATE / CHAMP / ANCIENNE VALEUR / NOUVELLE VALEUR

SI ERREUR OU ÉCHEC : QUI REPREND / COMMENT`}
          </pre>
        </div>

        <p>
          L’historique du bon et les journaux techniques ne jouent pas le même
          rôle. Le premier rend compréhensibles le prévu, le réalisé, la
          réserve, la correction et leurs versions. Les journaux applicatifs,
          administratifs ou de sécurité enregistrent les opérations nécessaires
          pour expliquer une action ou détecter un incident : identifiant stable
          du compte ou de la session, date, heure, nature et référence. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-tracer-les-operations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de documenter l’accès, la protection, la
            surveillance et la durée de ces traces
          </a>
          . Ne recopiez pas tout le contenu du bon dans un journal et ne
          conservez pas tous les journaux sans justification.
        </p>

        <h2 id="validation">
          4. Enregistrez ce qui s’est passé : accord, réserve, refus ou absence
        </h2>

        <p>
          Les{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042461"
            target="_blank"
            rel="noopener noreferrer"
          >
            articles 1366
          </a>{" "}
          et{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042456/2026-04-04"
            target="_blank"
            rel="noopener noreferrer"
          >
            1367 du Code civil
          </a>{" "}
          relient notamment l’écrit électronique à l’identification de son
          auteur, à l’intégrité et, pour la signature, à un procédé fiable lié à
          l’acte. Cela ne signifie pas qu’un dessin au doigt rend tout bon
          incontestable. Une image de paraphe ne prouve pas à elle seule
          l’identité du signataire et ne garantit pas à elle seule la portée
          juridique du bon.
        </p>

        <p>
          Le{" "}
          <a
            href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02014R0910-20241018"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement européen eIDAS consolidé, article 25
          </a>
          , prévoit qu’une signature ne peut pas être écartée au seul motif
          qu’elle est électronique et réserve une équivalence expresse avec la
          signature manuscrite à la signature électronique qualifiée. L’effet
          d’un dispositif concret dépend du contexte, du contrat, du procédé et
          des faits : ce guide n’est pas un avis juridique.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Réserve",
              text: "Conservez son texte, la version concernée et l’action attendue. Ne remplacez pas la réserve par une simple case « signé ».",
            },
            {
              title: "Refus",
              text: "Enregistrez le refus déclaré, son moment et la suite prévue. Ne fabriquez ni accord ni signature.",
            },
            {
              title: "Absence",
              text: "Distinguez l’absence d’un refus. Précisez comment le document sera envoyé ou validé plus tard.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <h2 id="hors-ligne">
          5. Traitez le hors-ligne comme un test, jamais comme une promesse
        </h2>

        <p>
          « Fonctionne hors ligne » peut cacher plusieurs comportements. Le
          formulaire est-il seulement visible ? Le brouillon reste-t-il après la
          fermeture ? Les photos sont-elles conservées ? Que se passe-t-il si
          deux personnes corrigent le même bon ? Un envoi répété crée-t-il un
          doublon ? Le technicien voit-il que le bureau n’a encore rien reçu ?
        </p>

        <ol>
          <li>
            Ouvrez une première fois BI-042 en ligne, puis coupez réellement le
            réseau et rouvrez-le.
          </li>
          <li>
            Remplissez le bon, ajoutez une pièce fictive et la réserve, puis
            fermez l’application.
          </li>
          <li>Rouvrez-la et vérifiez le brouillon ainsi que son état.</li>
          <li>
            Commencez l’envoi, interrompez de nouveau la connexion, puis
            vérifiez ce que le téléphone et le bureau annoncent.
          </li>
          <li>
            Pendant que le téléphone reste hors ligne, modifiez le même champ
            côté bureau et vérifiez la règle de conflit au retour du réseau.
          </li>
          <li>Rétablissez la connexion puis répétez l’action d’envoi.</li>
          <li>
            Vérifiez l’accusé du serveur, l’unique bon reçu, sa pièce et la
            bonne version avant d’effacer la copie locale.
          </li>
          <li>
            Simulez ensuite la perte du téléphone et la procédure de blocage ou
            d’effacement.
          </li>
        </ol>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-securiser-linformatique-mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de protéger les équipements mobiles, de limiter le
            stockage local et de prévoir la perte du terminal
          </a>
          . Pour la caméra, les notifications ou la position, ses{" "}
          <a
            href="https://www.cnil.fr/fr/permissions-applications-mobiles-recommandations-de-la-cnil-pour-respecter-la-vie-privee"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations sur les permissions mobiles
          </a>{" "}
          rappellent qu’une permission technique doit rester nécessaire. Elle
          autorise un accès sur le téléphone ; elle ne fournit pas la base
          juridique du traitement et ne vaut consentement au sens du règlement
          sur les données personnelles que dans des cas limités.
        </p>

        <h2 id="solutions">
          6. Comparez quatre réponses sur le même bon, pas quatre brochures
        </h2>

        <p>
          Faites passer le scénario BI-042 et les huit cas d’échec à chaque
          option. Comparez la couverture, les droits, les versions, les
          connexions, la sécurité, la récupération des données, l’effort interne
          et le coût total sur la même durée. Une solution sans développement
          doit rester une conclusion possible.
        </p>

        <div className="not-prose my-6 flex flex-wrap gap-2">
          {[
            "Bon BI-042 complet",
            "Droits d’accès",
            "Versions et corrections",
            "Réserve, refus et absence",
            "Hors-ligne",
            "Destinataire",
            "Sécurité",
            "Récupération et export",
            "Temps interne et coût total",
            "Condition de sortie",
          ].map((criterion) => (
            <span
              key={criterion}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {criterion}
            </span>
          ))}
        </div>

        <div className="not-prose my-8 space-y-4">
          {solutionOptions.map((option, index) => (
            <article
              key={option.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                  {option.title}
                </h3>
              </div>
              <dl className="mt-5 grid gap-4 md:grid-cols-3">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Quand l’essayer
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.when}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Ce qu’il faut démontrer
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.verify}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Coût et sortie
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {option.costAndExit}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Pour un produit standard ou no-code précis, ouvrez sa documentation
          actuelle et réalisez le test. Ne déduisez pas le fonctionnement
          hors-ligne, l’export ou la restauration d’une page commerciale. Si les
          règles changent encore chaque semaine, corrigez d’abord le travail
          avant de financer un outil.
        </p>

        <h2 id="administration">
          7. Envoyez un bon contrôlé, pas un ordre de facturer à l’aveugle
        </h2>

        <p>
          Le bureau a besoin d’une version reçue, d’un état compréhensible et
          d’un motif lorsqu’elle ne peut pas avancer. La règle peut être simple
          : un bon complet sans réserve devient « facturable » ; un champ
          indispensable absent devient « à compléter » ; un désaccord devient «
          contesté ». Mais ces états doivent refléter vos règles, pas une
          convention universelle.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-3">
          {[
            {
              state: "Facturable",
              condition:
                "La version contrôlée remplit les conditions décidées et aucune exception bloquante ne reste ouverte.",
              action:
                "Transmettre les éléments utiles au système de facturation.",
            },
            {
              state: "À compléter",
              condition:
                "Une information, une pièce ou une réponse à une réserve manque.",
              action: "Attribuer la prochaine action et conserver le motif.",
            },
            {
              state: "Contesté",
              condition:
                "Un désaccord déclaré exige un traitement commercial, technique ou juridique adapté.",
              action:
                "Suspendre l’automatisme et orienter vers la bonne personne.",
            },
          ].map((item) => (
            <article
              key={item.state}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.state}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.condition}
              </p>
              <p className="mb-0 mt-4 border-t border-zinc-200 pt-4 text-sm font-medium text-zinc-900 dark:border-zinc-800 dark:text-zinc-100">
                {item.action}
              </p>
            </article>
          ))}
        </div>

        <p>
          Si le bon doit alimenter plusieurs logiciels, le guide pour{" "}
          <Link href="/guides/connecter-erp-crm-logiciel-metier">
            relier les outils de gestion
          </Link>{" "}
          explique comment décider quelle source fait foi et comment traiter les
          échecs sans dupliquer silencieusement les données.
        </p>

        <h2 id="echecs">
          8. Faites échouer le parcours huit fois avant de le généraliser
        </h2>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {failureTests.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.test}
              </p>
              <p className="mb-0 mt-4 border-t border-zinc-200 pt-4 text-sm font-medium leading-relaxed text-zinc-900 dark:border-zinc-800 dark:text-zinc-100">
                Réussite : {item.pass}
              </p>
            </article>
          ))}
        </div>

        <p>
          Ajoutez les cas propres à votre activité. Une obligation sectorielle,
          une intervention dangereuse ou un enjeu de sécurité ne se déduit pas
          de ce guide général : faites intervenir les compétences adaptées avant
          de valider le parcours.
        </p>

        <h2 id="mesure">
          9. Dix bons peuvent révéler un problème, pas prouver une moyenne
          générale
        </h2>

        <p>
          Prenez tous les bons d’une courte période ou documentez la manière
          dont vous en choisissez dix. Définissez « complet », la fin de
          l’intervention et la réception exploitable avant de compter. Avec dix
          bons, un seul bon représente dix points de pourcentage. Cette lecture
          de dix bons ne décrit pas votre entreprise entière : elle sert à
          repérer quoi vérifier sur un ensemble plus large.
        </p>

        <FormulaBox>
          {
            "Sur N bons reçus : taux de bons complets (%) = bons ne nécessitant aucune reprise ÷ N × 100\n\nSur H_résolus bons hors ligne arrivés à un résultat : taux d’action manuelle (%) = bons résolus après une action manuelle ÷ H_résolus × 100"
          }
        </FormulaBox>

        <p>
          Si N = 0 ou H_résolus = 0, affichez « non calculable », pas 0 %. Deux
          contrôles empêchent de perdre des bons dans le calcul : « synchronisé
          automatiquement » + « résolu après une action manuelle » = H_résolus ;
          puis H_résolus + « encore en attente à la date du relevé » = H_total,
          le nombre total de bons saisis hors ligne. Mesurez aussi le délai
          entre la fin déclarée et la réception exploitable, puis le délai
          jusqu’à l’état facturable, à compléter ou contesté.
        </p>

        <p>
          Contrôlez également que « bons complets + bons incomplets = N ». Les
          bons annulés ou créés uniquement pour un test restent hors de ce
          dénominateur et sont comptés séparément : sinon, une campagne d’essai
          peut améliorer ou dégrader artificiellement le taux.
        </p>

        <InfoBox
          variant="blue"
          title="Un bon reçu plus vite n’est pas forcément un bon plus utile"
        >
          Vérifiez ensemble le délai, la complétude, les corrections, les
          réserves et les appels nécessaires. Une saisie rapide qui provoque
          davantage de reprises déplace simplement le travail vers le bureau.
        </InfoBox>

        <InfoBox
          variant="amber"
          title="Mesurer les bons ne signifie pas noter les techniciens"
        >
          Un auteur, une heure ou une position peuvent devenir des données de
          contrôle de l’activité lorsqu’elles sont exploitées personne par
          personne. Avant de décider de mettre en œuvre ce contrôle, définissez
          un objectif légitime, vérifiez qu’un moyen moins intrusif ne suffit
          pas et consultez le comité social et économique lorsque{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035610275/2021-05-12"
            target="_blank"
            rel="noopener noreferrer"
          >
            l’article L2312-38 du Code du travail
          </a>{" "}
          s’applique. Avant toute collecte,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900861/2026-05-01"
            target="_blank"
            rel="noopener noreferrer"
          >
            l’article L1222-4 du Code du travail
          </a>{" "}
          impose d’en informer le salarié. Cette information doit notamment
          expliquer le responsable, la finalité, la base juridique, les données
          obligatoires, les destinataires, la durée, les droits et la voie de
          réclamation ; la{" "}
          <a
            href="https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL en détaille le contenu
          </a>
          . Selon les données recueillies, elle concerne aussi le contact client
          et les personnes identifiables sur une photo. Limitez ensuite les
          données, les accès et la durée. La{" "}
          <a
            href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL détaille ces conditions de justification et de proportionnalité
          </a>
          . Ne détournez pas en secret un journal prévu pour la sécurité ou les
          versions afin de reconstituer les heures ou de classer les salariés.
        </InfoBox>

        <h2 id="aide">
          10. Quand un développement spécifique mérite-t-il d’être examiné ?
        </h2>

        <h3>Le contexte où nous pouvons être utiles</h3>

        <p>
          Les informations, validations ou exceptions sont propres à votre
          activité ; le hors-ligne est un besoin réel ; plusieurs versions et
          destinataires doivent rester cohérents ; les solutions existantes ont
          été testées sur vos cas d’échec ; une personne peut participer aux
          essais et accepter le résultat. Nous pouvons alors examiner un premier
          parcours limité et sa connexion aux outils administratifs.
        </p>

        <h3>Le contexte où il faut commencer autrement</h3>

        <p>
          Un PDF mieux conçu couvre déjà le besoin, un logiciel payé sait le
          faire, les règles changent encore, personne ne pourra tester ou vous
          cherchez une garantie juridique automatique. Dans ces cas, corrigez le
          document, configurez l’existant ou demandez l’avis approprié avant de
          développer.
        </p>

        <GuideInlineCTA
          title="Présenter le trajet actuel d’un bon d’intervention"
          description="Le clic ouvre le formulaire guidé d’environ trois minutes. Décrivez un bon, ses personnes, ses exceptions et sa destination. L’équipe relit ensuite la demande et répond personnellement ; aucun avis juridique, aucun délai de réalisation et aucun développement ne sont garantis."
          tags={[
            "Le papier reste possible",
            "Le logiciel standard reste possible",
            "Le sur-mesure n’est pas présupposé",
          ]}
          ctaLabel="Présenter le trajet du bon"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Cette page propose une méthode générale de décision. Elle ne remplace
          ni l’analyse d’un contrat ou d’un litige, ni les obligations propres à
          votre secteur, ni un audit de sécurité ou de protection des données.
          Aucun gain, délai, valeur juridique ou fonctionnement hors ligne
          universel n’est promis.
        </p>

        <ul>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042461"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code civil — article 1366
            </a>{" "}
            : conditions générales de la force probante d’un écrit électronique.
          </li>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042456/2026-04-04"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code civil — article 1367
            </a>{" "}
            : fonction de la signature et principe du procédé électronique.
          </li>
          <li>
            <a
              href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02014R0910-20241018"
              target="_blank"
              rel="noopener noreferrer"
            >
              Règlement eIDAS consolidé au 18 octobre 2024 — article 25
            </a>{" "}
            : effets juridiques des signatures électroniques et signature
            qualifiée.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/permissions-applications-mobiles-recommandations-de-la-cnil-pour-respecter-la-vie-privee"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Permissions des applications mobiles
            </a>{" "}
            : nécessité des permissions et distinction avec le consentement.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-securiser-linformatique-mobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Sécuriser l’informatique mobile
            </a>{" "}
            : stockage local, verrouillage et procédure en cas de perte.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Contrôle de l’activité des personnes employées
            </a>{" "}
            : justification, proportionnalité, représentants du personnel et
            information préalable.
          </li>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035610275/2021-05-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code du travail — article L2312-38
            </a>{" "}
            et{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900861/2026-05-01"
              target="_blank"
              rel="noopener noreferrer"
            >
              article L1222-4
            </a>{" "}
            : consultation du comité social et économique dans les entreprises
            concernées et information préalable du salarié.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Tracer les opérations
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              minimiser les données
            </a>{" "}
            : historique proportionné et données nécessaires.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
