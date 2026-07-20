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

const guide = getGuide("contrat-tma-application");

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
        alt: "Chronologie d’un incident pour tester un contrat TMA",
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
      name: "Contrat TMA d’application",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Une entreprise est-elle obligée de signer un contrat TMA ?",
    answer:
      "Il n’existe pas d’obligation générale imposant à toute entreprise un contrat TMA. L’organisation doit toutefois assurer les obligations et niveaux de maîtrise applicables à son activité, ses données et ses risques. Elle peut utiliser une équipe interne, le support d’un éditeur, des interventions ponctuelles, des lots projets ou une TMA. Le choix doit attribuer les responsabilités au lieu de laisser la maintenance sans propriétaire.",
  },
  {
    question: "Tous les bugs doivent-ils être inclus dans la maintenance corrective ?",
    answer:
      "Seulement si le contrat le prévoit et si le comportement attendu, la version de référence et les exclusions permettent de qualifier l’anomalie. Un défaut préexistant non recensé, une API tierce modifiée, une mauvaise donnée ou une nouvelle règle métier ne relèvent pas automatiquement du même traitement. La phase de reprise doit établir une base connue.",
  },
  {
    question: "Quelle différence entre prise en charge et résolution ?",
    answer:
      "La prise en charge signifie qu’une personne commence le traitement selon la définition du contrat. La résolution peut désigner le rétablissement du service, un contournement ou la correction définitive : le mot doit être précisé. Un accusé de réception automatique ne prouve ni diagnostic, ni intervention, ni retour au service.",
  },
  {
    question: "Que veut dire SLA dans un contrat TMA ?",
    answer:
      "SLA signifie accord ou engagement de niveau de service. Le sigle ne crée aucun délai à lui seul. Le contrat doit préciser indicateur, période de couverture, point de départ, temps ouvré ou calendaire, causes de pause, dépendances, source de mesure, objectif et conséquence d’un écart.",
  },
  {
    question: "Peut-on signer une TMA sans documentation technique ?",
    answer:
      "Parfois, mais une maintenance normale ne devrait pas être promise avant une phase de reprise proportionnée. La nouvelle équipe doit au minimum pouvoir observer, reconstruire, restaurer, livrer une petite correction et revenir en arrière. L’absence de documentation augmente la charge et doit apparaître comme une inconnue, pas comme zéro.",
  },
  {
    question: "Le prestataire doit-il notifier la CNIL sous 72 heures ?",
    answer:
      "Cette phrase est trompeuse. Lorsqu’il agit comme sous-traitant, le prestataire informe le responsable du traitement d’une violation dans les meilleurs délais. Le responsable analyse ensuite le risque et décide des notifications applicables, dont une notification à la CNIL pouvant relever du délai de 72 heures. Le contrat doit laisser assez de temps et d’informations au client pour décider.",
  },
];

function ContractProofChain() {
  const stages = [
    ["ENTRÉE", "Réception", "ticket identifiable"],
    ["PILOTE", "Prise en charge", "responsable nommé"],
    ["CONSTAT", "Diagnostic", "impact et cause étayés"],
    ["RÉDUCTION", "Contournement", "limites documentées"],
    ["SERVICE", "Rétablissement", "usage vérifié"],
    ["CAUSE", "Correction", "version et tests"],
    ["ACCORD", "Clôture", "preuve acceptée"],
  ];

  return (
    <figure
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="contract-proof-chain-title"
    >
      <figcaption id="contract-proof-chain-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
          Crash-test du contrat
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Sept passages à rendre observables
        </span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-400">
          Ce crash-test ne propose aucun délai type. Il vérifie ce que chaque
          mot du contrat doit produire avant de passer au suivant.
        </span>
      </figcaption>

      <div className="grid gap-2 sm:grid-cols-7">
        {stages.map(([trigger, label, proof], index) => (
          <div
            key={label}
            className="relative rounded-xl border border-white/10 bg-white/[0.045] p-3"
          >
            <p className="m-0 font-mono text-xs font-bold text-amber-300">
              {trigger}
            </p>
            <p className="mb-0 mt-2 text-xs font-bold text-white">{label}</p>
            <p className="mb-0 mt-1 text-[11px] leading-relaxed text-zinc-400">
              {proof}
            </p>
            {index < stages.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-zinc-600 sm:block"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.045] p-4">
        <p className="m-0 text-sm font-bold text-white">
          Le contrat doit dire, pour chaque transition
        </p>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-300">
          Qui décide ? Quelle horloge s’applique ? Qu’est-ce qui peut la mettre
          en pause ? Quelle preuve autorise l’état suivant ? Qui accepte le
          résultat ?
        </p>
      </div>
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
          { label: "Contrat TMA d’application" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Un bon contrat de tierce maintenance applicative ne promet pas seulement une réponse rapide. Il définit ce qui entre, qui décide, quelle preuve clôt un ticket, comment la capacité est consommée et comment une autre équipe pourra reprendre."
        heroAction={{
          href: "#horloges",
          label: "Voir les sept preuves",
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
            title: "7 états d’un incident",
            description: "",
            color: "amber",
          },
          {
            number: "02",
            title: "6 familles de travail",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "5 verdicts possibles",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "blue",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Auditer la reprise avant la maintenance",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Définir les évolutions et leur recette",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Vérifier les droits, le code et les accès",
          },
          {
            href: "/guides/cout-maintenance-site-internet",
            label: "Budgéter la maintenance d’un site internet",
          },
          {
            href: "/services/maintenance-evolution",
            label: "Maintenance et évolution d’applications",
          },
        ]}
        faqTitle="Contrat TMA : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            « Prise en charge rapide des incidents critiques. » Cette clause
            paraît rassurante. Elle ne dit pourtant ni qui décide qu’un incident
            est critique, ni ce que signifie prendre en charge, ni comment le
            client constate que l’application est de nouveau utilisable.
          </strong>
        </p>

        <p>
          Pour la tester, imaginons un incident illustratif fictif : les
          commandes entrent encore, mais les documents nécessaires à
          l’expédition ne sont plus générés. Ce n’est ni un cas client ni un
          résultat type. Cette situation révèle seulement la faiblesse d’une
          clause qui ne peut pas être exécutée. Un contrat de tierce maintenance applicative,
          ou TMA, doit organiser la maintenance d’une application confiée à un
          tiers : périmètre, demandes, responsabilités, niveaux de service,
          sécurité, capacité, preuves et sortie.
        </p>

        <InfoBox variant="amber" title="Un guide opérationnel, pas un modèle juridique">
          Les clauses de responsabilité, assurance, propriété intellectuelle,
          confidentialité, pénalités, résiliation, droit applicable et litiges
          dépendent de votre contexte et doivent être relues par un professionnel
          du droit lorsque l’enjeu le justifie. Ce guide aide à rendre le service
          observable ; il ne tranche ni un contrat ni un différend particulier.
        </InfoBox>

        <ContractProofChain />

        <GuideToc
          items={[
            { id: "prerequis", label: "1. Deux prérequis avant le contrat" },
            { id: "crash-test", label: "2. Rejouer le premier incident" },
            { id: "perimetre", label: "3. Délimiter ce qui entre dans la TMA" },
            { id: "horloges", label: "4. Séparer les sept états" },
            { id: "criticite", label: "5. Gravité et responsabilités" },
            { id: "capacite", label: "6. Files, forfait et capacité" },
            { id: "livraison", label: "7. Changement, recette et clôture" },
            { id: "securite", label: "8. Accès, données et sauvegardes" },
            { id: "preuves", label: "9. Reporting qui conduit à une décision" },
            { id: "reversibilite", label: "10. Tester la sortie avant l’entrée" },
            { id: "verdict", label: "11. TMA, autre mode ou refus" },
            { id: "sources", label: "Sources officielles et limites" },
          ]}
        />

        <h2 id="prerequis">1. Deux prérequis avant de parler de niveau de service</h2>

        <p>
          Une TMA suppose que l’application est maintenable et que l’entreprise
          possède une maîtrise suffisante de ses actifs. Si la nouvelle équipe
          ne peut pas reconstruire, restaurer, observer et livrer, aucun délai de
          prise en charge ne transforme cette inconnue en service normal.
        </p>

        <GuideTable
          caption="Prérequis à vérifier avant une TMA"
          headers={["Porte", "Question", "Preuve minimale", "Si elle échoue"]}
          rows={[
            [
              "Maintenabilité",
              "une équipe peut-elle observer, reproduire, tester, déployer et revenir en arrière ?",
              "petite livraison réversible sur un environnement maîtrisé",
              "phase d’audit et de sécurisation avant tout SLA",
            ],
            [
              "Maîtrise des actifs",
              "qui détient dépôts, cloud, domaine, données, secrets, licences et facturation ?",
              "inventaire avec propriétaires et administrateurs nominatifs",
              "transfert ou clarification contractuelle avant le régime normal",
            ],
          ]}
        />

        <p>
          Le guide{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            reprendre un logiciel métier existant
          </Link>{" "}
          décrit ces preuves de reprise. Le présent guide commence une fois
          qu’une intervention raisonnablement sûre est possible. Il ne faut pas
          faire payer une file de tickets ordinaire pendant qu’une équipe
          découvre encore si la sauvegarde se restaure ou si le dépôt correspond
          à la production.
        </p>

        <h2 id="crash-test">2. Rejouez le premier incident avant de signer</h2>

        <p>
          Demandez au prestataire et au responsable métier de raconter, minute
          par minute, ce qui se passerait si une fonction critique devenait
          indisponible. Ne cherchez pas une réponse impressionnante. Cherchez les
          passages de relais, les décisions et les preuves.
        </p>

        <GuideTable
          caption="Questions du crash-test d’un contrat TMA"
          headers={["Moment", "Question à poser", "Réponse insuffisante", "Preuve attendue"]}
          rows={[
            [
              "Détection",
              "qui peut déclarer, par quel canal et pendant quels horaires ?",
              "appelez-nous si c’est urgent",
              "contacts autorisés, canal testé, calendrier et accusé horodaté",
            ],
            [
              "Qualification",
              "qui mesure l’impact métier et fixe la priorité ?",
              "le demandeur coche critique",
              "critères d’impact et responsable capable d’arbitrer",
            ],
            [
              "Intervention",
              "qui accède, avec quels droits et quelle trace ?",
              "nos techniciens ont tous les accès",
              "comptes nominatifs, autorisation, journal et procédure d’urgence",
            ],
            [
              "Décision",
              "qui autorise contournement, restauration ou retour arrière ?",
              "nous ferons au mieux",
              "délégation écrite, risques connus et personne joignable",
            ],
            [
              "Communication",
              "qui informe utilisateurs, direction et partenaires ?",
              "le support vous tient au courant",
              "fréquence, canal, contenu et responsable",
            ],
            [
              "Fin",
              "qui affirme que le service est revenu et que la cause est traitée ?",
              "le ticket passe à résolu",
              "test technique, validation métier et distinction provisoire/définitif",
            ],
          ]}
        />

        <p>
          Un contrat qui échoue à cette conversation n’est pas forcément à
          refuser. Il peut devenir signable après l’ajout d’un canal, d’un
          responsable, d’une matrice de gravité ou d’une procédure de retour
          arrière. L’important est de découvrir la zone muette avant la panne.
        </p>

        <h2 id="perimetre">3. Classez chaque demande dans une famille explicite</h2>

        <p>
          La TMA n’est pas synonyme de « tout ce qui arrive après la mise en
          production ». Le{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
            target="_blank"
            rel="noopener noreferrer"
          >
            CCAG applicable aux marchés publics de techniques de l’information
          </a>{" "}
          distingue notamment maintenance préventive, corrective, évolutive et
          adaptative. Il ne s’applique à un marché public que si les documents
          de ce marché s’y réfèrent expressément, et ces documents peuvent y
          déroger. Il ne constitue donc pas un modèle de contrat privé. Sa
          nomenclature aide néanmoins à empêcher qu’un mot unique masque
          plusieurs travaux.
        </p>

        <GuideTable
          caption="Familles de demandes à délimiter dans un contrat TMA"
          headers={["Famille", "Question réelle", "Exemple", "À écrire"]}
          rows={[
            [
              "Correctif",
              "le comportement livré s’écarte-t-il d’une référence acceptée ?",
              "un calcul ne respecte plus la règle documentée",
              "version de référence, preuve de l’anomalie, exclusions et recette",
            ],
            [
              "Préventif",
              "quel risque réduit-on avant un incident ?",
              "mettre à jour une dépendance encore compatible",
              "inventaire, fréquence ou déclencheur, test et retour arrière",
            ],
            [
              "Adaptatif",
              "le logiciel doit-il absorber un changement externe ?",
              "nouvelle version d’API, navigateur, système ou base",
              "veille, délai de prévenance, estimation et responsabilité du tiers",
            ],
            [
              "Évolutif",
              "change-t-on ce que l’application doit faire ?",
              "nouveau rôle, écran, flux ou règle métier",
              "besoin, estimation, priorité, budget, test et acceptation",
            ],
            [
              "Support",
              "faut-il aider, expliquer ou qualifier sans modifier le produit ?",
              "question d’usage, compte bloqué, demande mal orientée",
              "public autorisé, canaux, volume, escalade et base de connaissance",
            ],
            [
              "Exploitation",
              "qui surveille et opère l’environnement ?",
              "supervision, certificat, capacité, sauvegarde ou restauration",
              "frontière avec hébergeur, infogérance et équipe cliente",
            ],
          ]}
        />

        <p>
          Pour chaque famille, choisissez un statut : incluse, plafonnée,
          commandée séparément ou exclue. Ajoutez les dépendances : hébergeur,
          éditeur, service de paiement, fournisseur d’identité, équipe interne.
          Un bug causé par une API tierce peut rester un incident à coordonner
          sans que le prestataire TMA puisse corriger le service tiers.
        </p>

        <InfoBox variant="blue" title="La référence évite le débat « bug ou évolution »">
          Décrivez le comportement accepté, la version et les données de test.
          Si le résultat s’écarte de cette base, l’anomalie est vérifiable. Si le
          besoin a changé ou n’a jamais été défini, il faut le cadrer et le
          recevoir comme une évolution. Le contrat doit aussi traiter les
          défauts préexistants découverts pendant la reprise.
        </InfoBox>

        <h2 id="horloges">4. Séparez réception, prise en charge et retour au service</h2>

        <p>
          Les sigles ne protègent pas l’entreprise. SLA désigne un engagement de
          niveau de service ; GTI et GTR sont employés avec des sens variables.
          Écrivez les événements en français, leur horodatage et leur preuve.
          Une « prise en charge sous une heure » peut se limiter à affecter un
          nom dans un outil. Elle ne signifie ni diagnostic, ni rétablissement,
          ni correction sous une heure.
        </p>

        <GuideTable
          caption="États et preuves d’un incident de maintenance applicative"
          headers={["État", "Définition contractuelle", "Preuve", "Décision suivante"]}
          rows={[
            ["Réception", "la demande est enregistrée dans le canal autorisé", "identifiant et horodatage", "accepter ou demander les informations manquantes"],
            ["Prise en charge", "une personne qualifie et commence réellement le traitement", "responsable nommé et premier constat", "confirmer priorité et plan d’action"],
            ["Diagnostic", "cause probable ou confirmée, impact et risques sont écrits", "note reliée aux journaux et tests", "contourner, corriger, restaurer ou escalader"],
            ["Contournement", "une mesure temporaire réduit l’impact sans traiter nécessairement la cause", "procédure, limites et durée prévue", "valider le mode dégradé et poursuivre"],
            ["Rétablissement", "le service retrouve le niveau convenu, parfois en mode dégradé", "mesure technique et validation métier", "surveiller et traiter la cause"],
            ["Correction", "la cause connue est traitée par code, configuration ou données", "version, tests, déploiement et retour arrière", "recette puis observation"],
            ["Clôture", "le résultat et les preuves sont acceptés", "validation dans le ticket et actions restantes", "capitaliser ou rouvrir"],
          ]}
        />

        <p>
          Le contrat doit préciser la période de couverture, les jours fériés,
          le fuseau, le temps ouvré ou calendaire, le point de départ, les motifs
          de pause, la fréquence des nouvelles et la source de mesure. Une
          attente d’information client peut suspendre une horloge si la demande
          est nécessaire, horodatée et proportionnée ; une dépendance tierce ne
          doit pas effacer l’obligation d’informer et de coordonner.
        </p>

        <p>
          Le CCAG-TIC relie lui aussi les niveaux de service à des indicateurs,
          moyens de mesure et périodes d’intervention. Ses valeurs ou mécanismes
          ne doivent pas être transposés automatiquement à un contrat privé :
          ils montrent surtout qu’un délai sans méthode de calcul est
          invérifiable.
        </p>

        <h2 id="criticite">5. La gravité vient de l’impact, pas du nombre de points d’exclamation</h2>

        <p>
          Le déclarant connaît la gêne ; il ne possède pas toujours la vue sur
          les autres utilisateurs, les données, la sécurité ou les solutions de
          contournement. La priorité doit donc être confirmée par une personne
          autorisée à arbitrer l’impact métier, avec l’aide technique du
          mainteneur.
        </p>

        <GuideTable
          caption="Critères pour qualifier la gravité d’un incident"
          headers={["Critère", "Question", "Preuve", "Effet possible"]}
          rows={[
            ["Processus", "quelle opération est empêchée ou dégradée ?", "parcours et population touchée", "priorité métier"],
            ["Contournement", "une solution sûre et supportable existe-t-elle ?", "procédure testée et capacité disponible", "réduit l’impact sans clôturer la cause"],
            ["Données", "confidentialité, intégrité ou disponibilité sont-elles menacées ?", "journaux, échantillons et analyse", "escalade sécurité et données"],
            ["Étendue", "combien de rôles, clients, sites ou flux sont concernés ?", "mesure reproductible", "niveau et communication"],
            ["Temps", "une échéance irréversible approche-t-elle ?", "commande, clôture, expédition ou obligation identifiée", "ordre de traitement"],
            ["Dépendance", "un tiers ou une décision client bloque-t-il l’action ?", "ticket fournisseur ou demande horodatée", "coordination et information"],
          ]}
        />

        <h3>Un mini-RACI pour l’exploitation</h3>

        <p>
          RACI signifie : qui <strong>réalise</strong>, qui{" "}
          <strong>répond de la décision ou valide</strong>, qui est{" "}
          <strong>consulté</strong> et qui est <strong>informé</strong>. La
          matrice suivante est illustrative et doit être adaptée aux personnes,
          délégations et risques réels.
        </p>

        <GuideTable
          caption="Exemple illustratif de RACI pour une TMA"
          headers={["Action", "Décide ou valide", "Réalise", "Consulté / informé"]}
          rows={[
            ["Définir l’impact métier", "responsable applicatif client", "responsable métier", "prestataire et utilisateurs clés"],
            ["Qualifier et diagnostiquer", "responsable de service TMA", "équipe TMA", "responsable applicatif et hébergeur"],
            ["Autoriser un contournement risqué", "responsable client délégué", "équipe TMA", "métier, sécurité, données selon le cas"],
            ["Décider une mise en production", "responsable applicatif client sauf délégation écrite", "équipe TMA", "métier, exploitation et sécurité"],
            ["Accepter la clôture", "responsable applicatif ou déclarant autorisé", "prestataire fournit les preuves", "sponsor informé selon la gravité"],
            ["Prioriser une évolution", "sponsor ou responsable produit client", "équipe choisie après estimation", "utilisateurs et TMA consultés"],
          ]}
        />

        <h2 id="capacite">6. Simulez le premier mois avant d’acheter un forfait</h2>

        <p>
          Une promesse d’heures, de jours ou de demandes ne dit pas comment la
          file sera traitée. Simulez un mois avec cinq objets différents : un
          incident prioritaire, deux anomalies ordinaires, une mise à jour
          préventive et une petite évolution. Demandez dans quel ordre ils
          passent, quelle unité est consommée et qui autorise un dépassement.
        </p>

        <GuideTable
          caption="Points économiques et opérationnels d’un forfait TMA"
          headers={["Question", "Ce qui doit être écrit", "Risque si absent"]}
          rows={[
            ["Unité", "temps réel, demi-journée, point, ticket ou périmètre couvert", "consommation impossible à contrôler"],
            ["Arrondi", "unité minimale et traitement des interventions courtes", "banque épuisée par des fragments"],
            ["Inclus", "réunions, qualification, tests, déploiement, reporting, veille et astreinte", "coût complet masqué"],
            ["Report", "durée, plafond et sort de la capacité non consommée", "crédit perdu ou dette de service"],
            ["Priorité", "qui peut réordonner et selon quels critères", "le plus insistant passe avant le plus risqué"],
            ["Urgence", "canal, couverture, capacité réservée, majoration éventuelle et autorisation", "promesse 24/7 sans équipe organisée"],
            ["Dépassement", "alerte, estimation, validation et unité facturée", "dépense engagée sans décision"],
            ["Backlog", "nombre de travaux en cours et règle de limitation", "tout commence, rien ne finit"],
          ]}
        />

        <h3>Comparez cinq modes, pas seulement deux prix</h3>

        <GuideTable
          caption="Alternatives à comparer avant une TMA"
          headers={["Mode", "Adapté lorsque", "Faiblesse à traiter", "Preuve de contrôle"]}
          rows={[
            ["Équipe interne", "le besoin est continu et la compétence peut être entretenue", "recrutement, continuité et spécialités manquantes", "responsabilités, astreinte, documentation et relais"],
            ["Support éditeur", "le logiciel standard et son éditeur portent le cœur du problème", "personnalisation et intégrations parfois hors périmètre", "matrice éditeur/client/intégrateur"],
            ["Intervention ponctuelle", "application simple, rare besoin et faible criticité", "disponibilité non réservée et reprise répétée", "dossier à jour et devis par intervention"],
            ["Capacité TMA réservée", "flux récurrent d’incidents, prévention et petites évolutions", "file et consommation à gouverner", "unité, backlog, niveaux, reporting et sortie"],
            ["Lots projets", "évolutions importantes avec début, fin et recette propres", "continuité entre lots", "périmètre, critères et transfert vers l’exploitation"],
          ]}
        />

        <p>
          Une TMA n’est pas automatiquement la meilleure réponse. Un outil
          stable utilisé par cinq personnes peut relever d’un support éditeur et
          d’une intervention ponctuelle. Une application critique avec un flux
          permanent peut justifier une capacité réservée. Une refonte importante
          doit devenir un lot projet au lieu de bloquer toute la file de
          maintenance.
        </p>

        <h2 id="livraison">7. Un ticket n’est terminé qu’après preuve et acceptation</h2>

        <p>
          « Développé » n’est pas « livré », « livré » n’est pas « déployé » et
          « déployé » n’est pas « accepté ». Pour une correction comme pour une
          évolution, le contrat doit relier l’entrée, l’estimation, l’autorisation,
          le test, la mise en production, le retour arrière et la recette.
        </p>

        <GuideTable
          caption="Chaîne de réception d’un changement applicatif"
          headers={["Étape", "Responsable", "Preuve", "Critère d’acceptation"]}
          rows={[
            ["Besoin ou anomalie", "métier avec appui technique", "cas reproductible ou résultat attendu", "périmètre et urgence compris"],
            ["Estimation", "prestataire", "hypothèses, inconnues, dépendances et charge", "client autorise ou remet en file"],
            ["Préparation", "prestataire", "code, configuration, données et tests", "revue adaptée au risque"],
            ["Déploiement", "rôle défini au contrat", "version, journal, sauvegarde ou retour arrière", "contrôles techniques passés"],
            ["Recette", "responsable client autorisé", "scénarios et résultat observé", "accepté, accepté avec réserve ou refusé"],
            ["Observation", "exploitation et métier", "mesures et incidents après livraison", "clôture ou réouverture"],
          ]}
        />

        <p>
          Une correction urgente peut suivre une voie allégée, mais cette voie
          doit rester écrite : personne autorisée, risque accepté, sauvegarde ou
          retour arrière, tests minimaux, journal et revue après incident. Une
          urgence ne doit pas créer un accès permanent ou supprimer toute trace.
        </p>

        <h2 id="securite">8. « Sécurité incluse » n’attribue aucune responsabilité</h2>

        <p>
          Commencez par les opérations réelles : qui accède à la production, aux
          données et aux sauvegardes ; avec quel compte ; pendant combien de
          temps ; depuis quel outil ; avec quelle trace. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande notamment une main courante des interventions et des
            accès de télémaintenance limités dans le temps puis refermés
          </a>
          . Ces recommandations doivent être adaptées à l’architecture et au
          risque.
        </p>

        <GuideTable
          caption="Registre de sécurité et de données d’une TMA"
          headers={["Sujet", "Question contractuelle", "Preuve attendue", "Responsable à nommer"]}
          rows={[
            ["Accès", "qui autorise, ouvre, utilise, revoit et ferme ?", "comptes nominatifs, droits, dates et journaux", "client et prestataire selon l’actif"],
            ["Composants", "qui inventorie versions, vulnérabilités et fins de support ?", "inventaire et feuille de route", "responsable technique"],
            ["Sauvegardes", "qui exécute, protège, conserve et restaure ?", "test de restauration et résultat", "exploitant désigné"],
            ["Incident de sécurité", "qui alerte, qualifie, conserve les preuves et décide ?", "canal, délai interne, contenu et escalade", "sécurité, données et direction"],
            ["Sous-traitants", "qui peut intervenir ou héberger et comment un changement est-il annoncé ?", "liste, rôle, accès, lieu et autorisation", "parties selon le RGPD et le contrat"],
            ["Données en sortie", "restitution, suppression, copies et sauvegardes suivent quel calendrier ?", "export, contrôle et attestation adaptée", "responsable du traitement et prestataire"],
          ]}
        />

        <p>
          Une maintenance qui donne même ponctuellement accès à des données
          personnelles peut relever d’une sous-traitance au sens du RGPD selon
          les opérations réelles. L’{" "}
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD
          </a>{" "}
          demande alors un acte précisant notamment objet, durée, nature,
          finalité, catégories de données et personnes, instructions,
          sous-traitants ultérieurs, assistance, audit et fin de prestation. Une
          annexe générique « conforme RGPD » ne remplit pas seule ces fonctions.
        </p>

        <p>
          Les sauvegardes méritent leur propre preuve. L’{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide ANSSI sur la sauvegarde des systèmes d’information
          </a>{" "}
          relie objectifs, dépendances, protection et tests. Le journal d’une
          copie réussie ne prouve pas que les données et services peuvent être
          restaurés dans l’ordre nécessaire. Demandez un compte rendu de test,
          ses limites et les actions correctives.
        </p>

        <InfoBox variant="amber" title="Le délai de 72 heures n’est pas un SLA du prestataire">
          Pour une violation de données personnelles, le sous-traitant informe
          le responsable du traitement dans les meilleurs délais. Le responsable
          analyse le risque et décide des notifications applicables, dont celle
          à la CNIL lorsque les conditions sont réunies. Fixez une alerte interne
          assez rapide et assez documentée pour permettre cette décision ; ne
          recopiez pas « le prestataire notifie la CNIL sous 72 heures ».
        </InfoBox>

        <h2 id="preuves">9. Le reporting doit déclencher une décision</h2>

        <p>
          Un tableau de bord rempli de pourcentages n’aide pas si personne ne
          sait quoi changer. Chaque indicateur doit avoir un périmètre, une
          formule, une source et une conséquence. Présentez également les données
          absentes : incidents non déclarés dans le bon canal, temps interne non
          mesuré ou ventes affectées sans rapprochement.
        </p>

        <GuideTable
          caption="Dossier de preuves mensuel d’une TMA"
          headers={["Preuve", "Question résolue", "Décision possible"]}
          rows={[
            ["Export des tickets et horodatages", "où le travail attend-il et pourquoi ?", "changer la file, la capacité ou le processus"],
            ["Incidents majeurs et causes", "qu’est-ce qui se répète ?", "financer une action préventive ou une correction de fond"],
            ["Versions, tests et déploiements", "qu’est-ce qui a réellement changé ?", "accepter, surveiller ou revenir en arrière"],
            ["Consommation et backlog", "où part la capacité réservée ?", "reprioriser, séparer un lot ou ajuster le modèle"],
            ["Accès et interventions production", "qui a agi sur quoi ?", "retirer un droit, corriger une procédure ou auditer"],
            ["Composants et fins de support", "quel risque approche ?", "planifier adaptation, migration ou acceptation du risque"],
            ["Tests de restauration", "la continuité annoncée fonctionne-t-elle ?", "corriger sauvegarde, ordre ou documentation"],
            ["Décisions du comité", "qui a accepté priorité, risque et dépense ?", "conserver une trace et vérifier l’exécution"],
          ]}
        />

        <p>
          La revue mensuelle doit finir par une liste courte : décisions prises,
          responsables, dates, risques acceptés et preuves attendues au prochain
          comité. Une analyse post-incident distingue rétablissement et
          correction définitive, puis transforme une cause récurrente en travail
          préventif. Sans ce passage, le forfait peut payer plusieurs fois le
          même symptôme.
        </p>

        <h2 id="reversibilite">10. Testez la réversibilité pendant que la relation fonctionne</h2>

        <p>
          La réversibilité n’est pas une phrase de fin de contrat. C’est la
          capacité à transmettre une application exploitable à une équipe qui ne
          dépend pas de la mémoire du prestataire sortant. Dans son contexte de
          commande publique, l’{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 38.4 du CCAG-TIC
          </a>{" "}
          cite notamment sources, exécutables, documentation, paramètres,
          scripts, fichiers exploitables et interfaces documentées parmi les
          éléments à remettre. Son article 42 complète ce dispositif par les
          conditions d’accès aux matériels et logiciels et la sécurité pendant
          le transfert. Adaptez ces exigences à votre situation ; ne vous
          contentez pas de « réversibilité incluse ».
        </p>

        <GuideTable
          caption="Exercice de réversibilité d’une application"
          headers={["Actif ou action", "Test avant la sortie", "Acceptation", "À préciser au contrat"]}
          rows={[
            ["Dépôt et versions", "exporter l’historique et identifier la version en production", "une autre personne retrouve la version", "propriété, accès et format"],
            ["Construction", "recréer un environnement depuis la documentation", "application démarrée sans mémoire orale indispensable", "prérequis, scripts et dépendances"],
            ["Données", "produire un export documenté et le contrôler", "volumes, schéma et échantillons rapprochés", "format, délai, sécurité et coût"],
            ["Exploitation", "transmettre supervision, sauvegardes, certificats, domaines et procédures", "responsables et échéances identifiés", "comptes, fournisseurs et assistance"],
            ["Connaissance", "expliquer incidents, dette, décisions et backlog", "équipe repreneuse peut prioriser", "ateliers, documents et disponibilité"],
            ["Secrets et accès", "transférer ou faire tourner par un canal sûr", "nouveaux accès testés, anciens révocables", "méthode et calendrier"],
            ["Droits et licences", "rassembler contrats, licences et contributeurs", "capacité de faire maintenir analysée", "faire valider juridiquement si nécessaire"],
            ["Fin des données", "restituer ou supprimer selon les rôles et obligations", "contrôle et attestation adaptés", "copies, sauvegardes et exceptions"],
          ]}
        />

        <p>
          Organisez un exercice partiel tôt dans le contrat : export du dépôt,
          reconstruction d’un environnement isolé, export d’un jeu de données et
          revue des accès. Ce test améliore aussi la continuité avec le
          prestataire actuel. Précisez préavis, assistance, capacité réservée,
          tarification éventuelle, livrables, critères de réception et maintien
          du service pendant le transfert.
        </p>

        <p>
          La remise du code ne suffit pas à établir les droits. Le paiement, la
          possession matérielle, les licences de composants, les droits
          d’utilisation et le droit de faire modifier sont distincts. Le guide{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            propriété du code source et des accès
          </Link>{" "}
          donne une première cartographie ; faites analyser les clauses et la
          chaîne des contributeurs lorsque nécessaire.
        </p>

        <h2 id="verdict">11. Cinq verdicts possibles après le crash-test</h2>

        <GuideTable
          caption="Verdict après audit opérationnel du contrat TMA"
          headers={["Verdict", "Conditions", "Prochaine action", "Ce qu’il ne faut pas promettre"]}
          rows={[
            ["TMA signable", "application maintenable, périmètre, flux, responsabilités, preuves et sortie cohérents", "valider juridiquement les clauses sensibles puis planifier la prise d’effet", "absence de panne ou délai non écrit"],
            ["Signable sous conditions", "zones corrigeables avant démarrage", "annexe, test, transfert d’accès ou baseline datés", "régime normal avant levée des conditions"],
            ["Support ou ponctuel suffisant", "faible criticité et rare charge, dossier exploitable", "organiser contact, accès et intervention à la demande", "disponibilité réservée sans contrat correspondant"],
            ["Reprise préalable", "documentation, actifs, restauration ou livraison non maîtrisés", "audit et sécurisation bornés avant la TMA", "SLA sur un système que l’équipe ne contrôle pas"],
            ["Offre à refuser", "responsabilités opaques, accès permanents injustifiés, preuve ou sortie impossible", "chercher un autre mode ou prestataire et sécuriser les actifs", "compenser par une pénalité ou un discours commercial"],
          ]}
        />

        <p>
          L’action autonome tient en trois exercices : rejouer le premier
          incident, faire passer cinq tickets fictifs dans le premier mois, puis
          demander à une personne extérieure au projet de reconstruire une
          petite partie de l’environnement avec les livrables de sortie. Notez
          chaque bloc : clause, question, preuve, responsable et critère
          d’acceptation. Un « à confirmer » bloque la promesse correspondante,
          sans condamner tout le contrat.
        </p>

        <InfoBox variant="emerald" title="Quand Hagnéré Code est adapté — et quand nous ne devons pas commencer par une TMA">
          <p className="mb-2">
            <strong>Cas adapté :</strong> l’application existe, ses usages et
            propriétaires peuvent être identifiés, le besoin est récurrent et
            une phase de vérification peut ouvrir les accès sans mettre la
            production en danger.
          </p>
          <p className="mb-0">
            <strong>Autre première étape :</strong> un incident actif exige une
            réponse à incident, une suspicion de compromission une équipe
            compétente, une absence totale d’actifs un{" "}
            <Link href="/guides/reprendre-logiciel-metier-existant">
              audit de reprise
            </Link>{" "}
            et un litige une analyse juridique. Une TMA commerciale ne doit pas
            masquer ces besoins.
          </p>
        </InfoBox>

        <p>
          Notre service de{" "}
          <Link href="/services/maintenance-evolution">
            maintenance et évolution d’applications
          </Link>{" "}
          peut commencer par un périmètre de reprise, une capacité récurrente ou
          un lot distinct selon le diagnostic. Le cadrage doit aussi pouvoir
          conclure qu’un support éditeur, une équipe interne ou une intervention
          ponctuelle suffit.
        </p>

        <GuideInlineCTA
          title="Faire auditer le périmètre opérationnel d’une TMA"
          description="Décrivez l’application, son usage critique, les accès détenus, les incidents connus et le contrat envisagé. Nous cadrons la phase de reprise, les responsabilités, les preuves et la sortie — ou nous indiquons si un mode plus simple suffit."
          tags={[
            "Périmètre et exclusions",
            "Preuves avant SLA",
            "TMA, reprise ou autre mode",
          ]}
          ctaLabel="Cadrer mon contrat TMA"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <p>
          Recherche effectuée le 20 juillet 2026. Le CCAG-TIC ne s’applique à un
          marché public que si les documents particuliers s’y réfèrent ; ceux-ci
          peuvent en outre prévoir des dérogations. Ses références sont donc
          utilisées ici comme nomenclature et source d’exigences possibles, pas
          comme modèle obligatoire d’un contrat privé. Les
          obligations applicables dépendent de l’activité, des données, des
          rôles, des contrats et des risques. Ce guide n’est ni un avis juridique,
          ni un audit certifiant, ni une réponse à incident.
        </p>

        <ul>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
              target="_blank"
              rel="noopener noreferrer"
            >
              Légifrance — CCAG-TIC, article 38
            </a>
            , notamment l’article 38.4 sur les éléments remis en réversibilité,
            avec les articles 39, 40 et 42 pour niveaux de service, maintien en
            condition de sécurité et conditions du transfert ; arrêté du 30 mars
            2021, seulement lorsque les documents du marché s’y réfèrent et sous
            réserve de leurs dérogations.
          </li>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040777"
              target="_blank"
              rel="noopener noreferrer"
            >
              Légifrance — Code civil, article 1103
            </a>{" "}
            et{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032040772"
              target="_blank"
              rel="noopener noreferrer"
            >
              article 1104
            </a>
            , sur la force obligatoire et la bonne foi ; leur application à un
            différend requiert l’analyse des faits et des clauses.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Encadrer la maintenance et la fin de vie
            </a>
            , publiée le 14 mars 2024 : accès, durée et traçabilité.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Gérer la sous-traitance
            </a>
            , pour garanties, audits, transmissions, habilitations et
            authentification selon le risque.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — RGPD, articles 28, 32 et 33
            </a>
            , dans le périmètre des données personnelles et des rôles réels.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1
            </a>
            , publiée le 27 novembre 2025 ; recommandations à adapter au système.
          </li>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              Légifrance — Code de la propriété intellectuelle, article L131-3
            </a>
            , avec les articles L113-9 et L122-6 pour distinguer certains droits
            et régimes sans conclure sur un contrat particulier.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
