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

const guide = getGuide("prise-rendez-vous-en-ligne-site-vitrine");

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
        alt: "Choisir une prise de rendez-vous en ligne selon les ressources et les exceptions",
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
      name: "Prise de rendez-vous en ligne",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel outil de prise de rendez-vous mettre sur un site vitrine ?",
    answer:
      "Choisissez l’outil le plus simple qui respecte vos vraies règles. Un lien vers un agenda suffit souvent pour une personne, une durée et peu d’exceptions. Plusieurs salles, intervenants, paiements ou droits peuvent justifier une plateforme métier ou une intégration ciblée.",
  },
  {
    question: "Faut-il confirmer immédiatement chaque rendez-vous ?",
    answer:
      "Non. Si le professionnel doit vérifier le besoin, un dossier ou une ressource, le site peut recueillir une demande de créneau puis annoncer clairement le délai et le mode de confirmation. Une fausse confirmation automatique crée davantage de problèmes qu’un formulaire honnête.",
  },
  {
    question: "Comment éviter les doubles réservations ?",
    answer:
      "Définissez une source unique de disponibilité et toutes les ressources qui doivent être libres ensemble : personne, salle, véhicule ou équipement. Ajoutez les temps de préparation et vérifiez les conflits au moment de la confirmation.",
  },
  {
    question: "Un acompte réduit-il les rendez-vous non honorés ?",
    answer:
      "Il peut modifier l’engagement du client, mais aucun taux universel n’est garanti. Avant d’encaisser, validez les conditions de paiement, annulation et remboursement, le traitement d’un échec et la facture ou preuve à fournir.",
  },
  {
    question: "Quelles informations demander dans le formulaire ?",
    answer:
      "Demandez seulement ce qui est nécessaire pour organiser et réaliser le rendez-vous. Expliquez pourquoi les données sont collectées, qui les reçoit et combien de temps elles sont conservées. Une information sensible exige une vigilance supplémentaire.",
  },
  {
    question: "Quand faut-il développer une réservation sur mesure ?",
    answer:
      "Le sur-mesure devient plausible lorsque plusieurs ressources, règles, droits, étapes ou logiciels doivent être coordonnés et qu’une plateforme standard ne couvre pas le besoin. Commencez par un pilote et conservez une solution manuelle de retour.",
  },
];

const options = [
  {
    title: "Formulaire de demande",
    fit: "Le besoin doit être qualifié avant de proposer ou confirmer une heure.",
    watch: "Délai de réponse, personne responsable et statut de la demande.",
    color: "border-zinc-300 dark:border-zinc-700",
  },
  {
    title: "Lien d’agenda",
    fit: "Une personne, des durées simples et peu d’exceptions.",
    watch: "Agenda de référence, préparation, fuseau et confirmation.",
    color: "border-blue-300 dark:border-blue-800",
  },
  {
    title: "Plateforme métier",
    fit: "Le secteur possède des règles déjà bien couvertes par un outil standard.",
    watch: "Export, données, abonnement, droits et intégrations.",
    color: "border-emerald-300 dark:border-emerald-800",
  },
  {
    title: "Réservation avec paiement",
    fit: "Le rendez-vous a une valeur claire et les conditions sont validées.",
    watch: "Échec, remboursement, facture, contestation et annulation.",
    color: "border-amber-300 dark:border-amber-800",
  },
  {
    title: "Intégration ciblée",
    fit: "Plusieurs ressources ou logiciels doivent décider ensemble.",
    watch: "Pilote, maintenance, mode manuel et retour arrière.",
    color: "border-violet-300 dark:border-violet-800",
  },
  {
    title: "Pas de réservation directe",
    fit: "Les disponibilités changent trop ou chaque demande exige une vraie qualification.",
    watch: "Améliorer le formulaire et la réponse avant d’automatiser.",
    color: "border-rose-300 dark:border-rose-800",
  },
];

function OptionCards() {
  return (
    <section
      className="not-prose my-8 grid gap-3 sm:grid-cols-2"
      aria-label="Six niveaux de prise de rendez-vous"
    >
      {options.map((option) => (
        <div
          key={option.title}
          className={`rounded-2xl border bg-white p-5 dark:bg-zinc-950 ${option.color}`}
        >
          <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
            {option.title}
          </h3>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {option.fit}
          </p>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <strong className="text-zinc-900 dark:text-zinc-100">
              À vérifier :
            </strong>{" "}
            {option.watch}
          </p>
        </div>
      ))}
    </section>
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
          { label: "Prise de rendez-vous en ligne" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous ne pouvez confirmer un créneau que si la personne, la salle, la durée et le temps de préparation sont libres ensemble. Écrivez ces règles avant de choisir un agenda, une plateforme ou du sur-mesure."
        heroAction={{ href: "#options", label: "Comparer les 6 solutions" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Demande ou confirmation",
            description: "",
            color: "blue",
          },
          {
            number: "02",
            title: "Ressources et exceptions",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "Données strictement utiles",
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
            href: "/guides/site-one-page-ou-multipage",
            label: "Choisir la structure du site vitrine",
          },
          {
            href: "/guides/landing-page-ou-site-vitrine",
            label: "Choisir entre landing page et site vitrine",
          },
          {
            href: "/guides/preparer-contenus-site-vitrine",
            label: "Préparer les contenus et modalités du service",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Comprendre les abandons avant la demande",
          },
        ]}
        faqTitle="Prise de rendez-vous en ligne : les questions pratiques"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Vous voulez laisser vos clients réserver depuis votre site sans
            appels ni échanges d’e-mails. Commencez par une question simple : le
            créneau choisi peut-il être confirmé immédiatement ? Si une personne
            doit encore vérifier le besoin, une salle, un véhicule ou un
            dossier, un formulaire de demande sera plus honnête qu’un agenda qui
            affiche de faux créneaux libres.
          </strong>
        </p>

        <p>
          Un lien d’agenda suffit souvent pour une activité simple. Une
          plateforme métier ou une intégration ciblée devient utile lorsque
          plusieurs ressources, paiements, droits et exceptions doivent être
          coordonnés. Ce guide vous aide à écrire vos règles, choisir le niveau
          le moins complexe et tester aussi les annulations, retards et
          absences.
        </p>

        <GuideToc
          items={[
            {
              id: "promesses",
              label: "1. Les quatre promesses d’un rendez-vous",
            },
            { id: "rejouer", label: "2. Rejouer cinq rendez-vous récents" },
            {
              id: "ressources",
              label: "3. Définir ce qui doit être libre ensemble",
            },
            {
              id: "donnees",
              label: "4. Demander seulement les données nécessaires",
            },
            { id: "paiement", label: "5. Traiter tout le cycle du paiement" },
            { id: "options", label: "6. Comparer six solutions" },
            { id: "echec", label: "7. Tester le rendez-vous qui se passe mal" },
            { id: "mesure", label: "8. Mesurer jusqu’au rendez-vous réalisé" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="promesses">
          1. Un rendez-vous en ligne contient quatre promesses
        </h2>

        <p>
          Le bouton « Réserver » promet davantage qu’un formulaire envoyé. Il
          laisse entendre qu’un service peut être choisi, qu’un horaire est
          disponible, que la demande est confirmée et que la suite est connue.
          Si l’une de ces quatre promesses manque, changez le parcours ou son
          libellé.
        </p>

        <GuideTable
          headers={[
            "Promesse",
            "Question à résoudre",
            "Preuve visible pour le client",
          ]}
          rows={[
            [
              "Demande",
              "Quel service et quelle durée choisit-il ?",
              "Résumé clair avant validation",
            ],
            [
              "Disponibilité",
              "Quelles personnes et ressources doivent être libres ?",
              "Créneau réellement calculé",
            ],
            [
              "Confirmation",
              "Le rendez-vous est-il accepté immédiatement ?",
              "Message et e-mail au statut exact",
            ],
            [
              "Suite",
              "Que faut-il préparer, payer, modifier ou annuler ?",
              "Instructions et lien utilisable",
            ],
          ]}
          caption="Les quatre promesses d’une réservation en ligne"
        />

        <p>
          Si le professionnel doit rappeler avant d’accepter, écrivez « demander
          un rendez-vous » et annoncez le mode de réponse. Le parcours reste
          professionnel parce qu’il dit la vérité. Une confirmation automatique
          suivie d’un appel pour déplacer le créneau déçoit davantage.
        </p>

        <h2 id="rejouer">
          2. Rejouez cinq rendez-vous, dont une annulation et une absence
        </h2>

        <p>
          Prenez cinq rendez-vous récents. Ne choisissez pas uniquement les cas
          qui se sont bien déroulés. Ajoutez un déplacement, une annulation, une
          absence ou une fermeture exceptionnelle. Reconstituez chaque décision
          depuis la première demande jusqu’à la fin du rendez-vous.
        </p>

        <InfoBox
          variant="blue"
          title="La fiche à copier pour chaque rendez-vous"
        >
          <ul className="m-0 space-y-2 pl-5">
            <li>service, durée et temps de préparation ;</li>
            <li>personne, salle, véhicule ou équipement nécessaire ;</li>
            <li>informations demandées et raison de chaque champ ;</li>
            <li>confirmation immédiate ou validation humaine ;</li>
            <li>paiement, acompte ou facturation après le rendez-vous ;</li>
            <li>rappel, modification, annulation et absence ;</li>
            <li>personne responsable lorsqu’une étape échoue.</li>
          </ul>
        </InfoBox>

        <p>
          Cet exercice révèle les règles que l’équipe applique déjà sans les
          avoir écrites. Il montre aussi si elles sont stables. Si deux
          collaborateurs répondent différemment à la même annulation, aucun
          outil ne peut automatiser une décision encore indécise.
        </p>

        <h2 id="ressources">
          3. Une personne libre ne suffit pas si la salle est déjà prise
        </h2>

        <p>
          Dans cet <strong>exemple illustratif fictif</strong>, Studio Liseron
          propose deux durées de séance, avec deux intervenantes et une seule
          salle équipée. Une séance exige quinze minutes de préparation. Un
          agenda séparé par intervenante affiche 14 h comme libre pour les deux,
          alors qu’une seule séance peut réellement avoir lieu.
        </p>

        <p>
          Écrivez toutes les ressources qui doivent être disponibles ensemble :
          personne, salle, véhicule, machine, stock limité ou accès vidéo. Puis
          ajoutez le temps avant et après. Le créneau affiché doit venir d’une
          source de disponibilité unique ou d’un calcul capable de vérifier
          chaque ressource au même instant.
        </p>

        <GuideTable
          headers={["Élément", "Décision à écrire", "Erreur évitée"]}
          rows={[
            [
              "Personne",
              "Qui peut réaliser chaque service ?",
              "Mauvais intervenant proposé",
            ],
            [
              "Ressource partagée",
              "Quelle salle ou machine est indispensable ?",
              "Double réservation",
            ],
            [
              "Durée",
              "Durée client plus préparation et remise en état",
              "Agenda en retard toute la journée",
            ],
            [
              "Indisponibilité",
              "Quel agenda ou système fait référence ?",
              "Deux sources contradictoires",
            ],
            [
              "Exception",
              "Urgence, fermeture, déplacement ou surbooking autorisé",
              "Correction manuelle oubliée",
            ],
          ]}
          caption="Ce qui doit être libre avant de confirmer un créneau"
        />

        <p>
          Si les disponibilités changent en permanence, ne commencez pas par une
          intégration complexe. Choisissez l’agenda qui fait foi et nommez la
          personne qui le tient à jour. Le meilleur outil ne corrigera pas un
          agenda abandonné.
        </p>

        <h2 id="donnees">
          4. Demandez seulement ce qui est nécessaire au rendez-vous
        </h2>

        <p>
          Un formulaire de réservation n’est pas une enquête commerciale. La
          CNIL rappelle le principe de minimisation : les données doivent être
          adéquates, pertinentes et limitées à ce qui est nécessaire à la
          finalité annoncée. Chaque champ obligatoire doit donc avoir une
          utilité immédiate pour organiser, préparer ou réaliser le rendez-vous.
        </p>

        <p>
          Le nom, un moyen de confirmation, le service et le créneau peuvent
          suffire dans de nombreux cas. L’adresse complète, la date de
          naissance, un budget détaillé ou le motif sensible d’une consultation
          exigent une justification propre. Les informations de santé ou
          d’autres données sensibles demandent une vigilance renforcée et
          parfois un outil sectoriel adapté.
        </p>

        <p>
          Définissez aussi ce qui reste après le rendez-vous, dans quel outil et
          combien de temps. La CNIL indique qu’une durée de conservation dépend
          de l’objectif poursuivi ; aucune durée unique ne convient à tous les
          agendas. Distinguez ce qui relève de l’organisation, de la relation
          client, de la facturation ou d’une obligation spécifique.
        </p>

        <InfoBox variant="amber" title="Un champ « au cas où » a un coût">
          Il ralentit le formulaire, augmente la quantité de données à protéger
          et peut décourager une personne avant qu’elle comprenne pourquoi
          l’information est demandée. Supprimez-le ou rendez-le facultatif tant
          que son besoin n’est pas démontré.
        </InfoBox>

        <h2 id="paiement">
          5. Ajouter un acompte signifie traiter tout le cycle du paiement
        </h2>

        <p>
          L’encaissement peut être utile lorsqu’un créneau mobilise une
          ressource rare ou lorsque le service est vendu directement. Mais le
          bouton de paiement ajoute des décisions qui n’existaient pas avec un
          simple agenda.
        </p>

        <ol>
          <li>
            le rendez-vous est-il bloqué avant ou après la confirmation du
            paiement ?
          </li>
          <li>que se passe-t-il si le paiement échoue ou reste en attente ?</li>
          <li>
            quelles conditions de modification, d’annulation et de remboursement
            s’appliquent ?
          </li>
          <li>qui reçoit et traite une contestation ?</li>
          <li>quelle facture ou preuve est remise et par quel système ?</li>
          <li>comment rapprocher le paiement du rendez-vous réalisé ?</li>
        </ol>

        <p>
          Faites valider les conditions par les conseils adaptés à votre
          activité. Ce guide ne fixe ni politique d’annulation ni droit à
          l’acompte. Aucun taux universel de réduction des absences ne peut être
          promis : mesurez votre propre situation avant et après, sans confondre
          corrélation et effet certain.
        </p>

        <h2 id="options">
          6. Choisissez la solution la moins complexe qui tient vos promesses
        </h2>

        <OptionCards />

        <p>
          La solution standard gagne lorsqu’elle couvre le service, les
          ressources et les exceptions sans contournement dangereux. Vérifiez
          les exports, la propriété des comptes, les données récupérables et le
          travail à refaire si vous changez d’outil.
        </p>

        <p>
          Une intégration ciblée peut se justifier lorsque plusieurs logiciels
          ou règles propres à l’entreprise doivent coopérer. Il ne faut pas
          forcément créer un agenda complet : une liaison limitée peut relier le
          site, la disponibilité existante et le logiciel métier. Commencez par
          les services les plus simples et gardez un retour manuel.
        </p>

        <p>
          Pour décider où placer ce parcours dans le site, le comparatif{" "}
          <Link href="/guides/site-one-page-ou-multipage">
            site one page ou multipage
          </Link>{" "}
          explique comment donner assez de contexte avant le bouton.
        </p>

        <h2 id="echec">
          7. Testez le rendez-vous qui se passe mal, pas seulement la
          démonstration
        </h2>

        <p>
          Une démonstration idéale montre un créneau libre et un e-mail reçu.
          Votre test doit aussi couvrir :
        </p>

        <ul>
          <li>
            deux personnes choisissent le dernier créneau presque ensemble ;
          </li>
          <li>le paiement réussit mais la confirmation de l’agenda échoue ;</li>
          <li>la salle devient indisponible après la réservation ;</li>
          <li>le client déplace puis annule ;</li>
          <li>un collaborateur est absent le matin même ;</li>
          <li>le fuseau horaire du client diffère ;</li>
          <li>le rappel ne part pas ;</li>
          <li>le client se présente mais le dossier n’est pas accessible.</li>
        </ul>

        <p>
          Pour chaque cas, écrivez le statut visible par le client, la personne
          alertée, l’action manuelle possible et la preuve que les calendriers,
          paiements et données sont revenus dans un état cohérent. Une
          automatisation professionnelle rend l’échec visible ; elle ne le
          transforme pas en silence.
        </p>

        <h2 id="mesure">
          8. La conversion utile est le rendez-vous réalisé, pas le clic
        </h2>

        <p>
          Mesurez séparément les visites de la page, les ouvertures de l’agenda,
          les demandes commencées, les rendez-vous confirmés, les annulations et
          les rendez-vous réellement réalisés. Si le service est vendu ensuite,
          ajoutez la vente sans attribuer automatiquement tout le chiffre
          d’affaires au bouton.
        </p>

        <GuideTable
          headers={["Étape", "Question", "Action si elle se dégrade"]}
          rows={[
            [
              "Page → agenda",
              "Le service et la prochaine action sont-ils clairs ?",
              "Réécrire la promesse ou le contexte",
            ],
            [
              "Agenda → confirmation",
              "Les créneaux et champs conviennent-ils ?",
              "Réduire les frictions ou corriger la disponibilité",
            ],
            [
              "Confirmation → présence",
              "Rappels, préparation et modification sont-ils compris ?",
              "Clarifier les messages et exceptions",
            ],
            [
              "Présence → résultat",
              "Le rendez-vous correspond-il au besoin visé ?",
              "Revoir la qualification ou le service proposé",
            ],
          ]}
          caption="Mesurer le parcours jusqu’au rendez-vous réellement utile"
        />

        <p>
          Une intégration mérite d’être étudiée quand vos règles sont connues et
          que le site doit coordonner plusieurs agendas, un paiement ou un
          logiciel métier. Si les disponibilités ne sont jamais tenues à jour,
          commencez par organiser l’agenda, pas par développer.
        </p>

        <GuideInlineCTA
          title="Choisir la bonne prise de rendez-vous pour votre activité"
          description="Expliquez vos services, les personnes et les ressources à coordonner, puis un cas d’annulation ou de double réservation. Nous comparerons un simple formulaire, un agenda standard, une plateforme métier et une intégration ciblée."
          tags={[
            "Solution simple possible",
            "Exceptions incluses",
            "Outil choisi après les règles",
          ]}
          ctaLabel="Choisir mon parcours de réservation"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources et limites</h2>

        <ul>
          <li>
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Minimiser les données collectées
            </a>{" "}
            : adéquation, pertinence et limitation des informations demandées.
          </li>
          <li>
            <a
              href="https://cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Les durées de conservation des données
            </a>{" "}
            : durée définie selon l’objectif poursuivi.
          </li>
          <li>
            <a
              href="https://www.w3.org/TR/WCAG22/#input-assistance"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3C — WCAG 2.2, assistance à la saisie
            </a>{" "}
            : erreurs identifiées, instructions et correction.
          </li>
        </ul>

        <p>
          Ce guide compare des niveaux de solution, pas les fonctions ou tarifs
          actuels d’un éditeur. Il ne fournit pas de conseil juridique ni de
          règle sectorielle. Paiement, annulation, remboursement, données
          sensibles et durées doivent être validés selon votre activité.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
