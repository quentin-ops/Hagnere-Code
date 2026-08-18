import type { Metadata } from "next";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { SlaMaintenanceDecisionDossier } from "@/components/guides/SlaMaintenanceDecisionDossier";
import {
  compareCoverageOptions,
  computeAvailability,
  computeIncidentCost,
  computeRpoImpact,
  createFictitiousSlaDecisionDossier,
} from "@/lib/sla-maintenance-decision";
import sources from "@/lib/sla-maintenance-workbook-sources.json";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("sla-maintenance-applicative");

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
        alt: "SLA de maintenance applicative : sept horloges, disponibilité, RTO, RPO et preuves",
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
      name: "SLA de maintenance applicative",
      item: guideUrl(guide),
    },
  ],
});

const sourceById = new Map(sources.map((source) => [source.id, source]));

function sourceUrl(id: string) {
  const source = sourceById.get(id);
  if (!source) throw new Error(`Source SLA introuvable : ${id}`);
  return source.url;
}

function SourceLink({ id, children }: { id: string; children: React.ReactNode }) {
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

const fictitious = createFictitiousSlaDecisionDossier();
const availability = computeAvailability(fictitious.availability);
const incident = computeIncidentCost(fictitious.incidentCost);
const rpo = computeRpoImpact(fictitious.rpo);
const coverages = compareCoverageOptions(fictitious.coverages);

if (
  availability.kind !== "known" ||
  incident.kind !== "known" ||
  rpo.kind !== "known" ||
  coverages.some((coverage) => coverage.kind !== "known")
) {
  throw new Error("Les fixtures pédagogiques SLA doivent rester calculables.");
}

const faqItems = [
  {
    question: "Que signifie SLA dans un contrat de maintenance applicative ?",
    answer:
      "Un SLA est un accord de niveau de service. Pour être exploitable, il décrit le service et les parcours couverts, la plage et le fuseau, la source de mesure, les objectifs, les exclusions, les responsabilités, la procédure d’escalade et les conséquences prévues. Le sigle ou un délai isolé ne constitue pas un engagement mesurable.",
  },
  {
    question:
      "Une prise en charge sous quatre heures signifie-t-elle une réparation sous quatre heures ?",
    answer:
      "Non. L’accusé, le début d’intervention, le contournement, le rétablissement métier, la vérification des données et la correction définitive sont des résultats distincts. Chacun doit avoir sa définition, son horodatage, sa preuve et, si nécessaire, son propre objectif. Le rapport final conserve cette chronologie, l’impact, les décisions, les communications, les contrôles de données, les facteurs établis et les actions attribuées avec échéance.",
  },
  {
    question: "Combien d’arrêt autorise une disponibilité de 99,9 % ?",
    answer:
      "Sur une fenêtre de trente jours couverte vingt-quatre heures sur vingt-quatre, 99,9 % correspond à 43 minutes et 12 secondes d’arrêt total. Sur une autre fenêtre ou une plage d’heures ouvrées, le résultat change. Ce calcul ne dit pas quel parcours a échoué, quelles exclusions s’appliquent ni combien de temps un incident individuel peut durer.",
  },
  {
    question: "Quelle différence entre RTO et RPO ?",
    answer:
      "Le RTO porte sur le temps de reprise acceptable avant que l’impact devienne excessif. Le RPO porte sur le point de données auquel il faut pouvoir revenir. Un RPO d’une heure et demie peut représenter soixante opérations à reconstituer si quarante opérations sont enregistrées par heure. Les deux objectifs doivent venir de l’impact métier puis être vérifiés par un exercice.",
  },
  {
    question: "Un crédit de service indemnise-t-il toute la panne ?",
    answer:
      "Non. Un crédit peut être une conséquence contractuelle applicable, mais il ne mesure pas automatiquement le coût économique de l’arrêt. Temps interne réellement détourné, marge contributive non reportable, reprise externe, ressaisie et autres préjudices doivent être distingués. Les droits, plafonds, preuves et recours se relisent dans le contrat avec un professionnel compétent.",
  },
  {
    question: "Une sauvegarde quotidienne suffit-elle à garantir le RPO ?",
    answer:
      "Non. Il faut connaître le point de récupération exploitable, protéger les copies, restaurer fichiers, données et configuration, vérifier la cohérence métier, mesurer le temps réel et organiser la ressaisie éventuelle. L’existence d’un fichier ou d’un statut vert ne prouve pas une restauration utile.",
  },
  {
    question:
      "Comment dimensionner le 24/7 et traiter les fournisseurs cloud ou services tiers ?",
    answer:
      "La plage doit suivre les parcours réellement critiques et les moyens disponibles. Inventoriez chaque dépendance, son propriétaire de compte, sa propre plage de support, son canal d’urgence, ses exclusions et le mode dégradé disponible. Un mainteneur peut diagnostiquer et escalader sans contrôler le délai d’un tiers. Une mention 24/7 sans supervision, astreinte, accès, fournisseurs alignés et exercice n’est pas démontrée.",
  },
  {
    question: "DORA impose-t-il ces SLA à toutes les entreprises ?",
    answer:
      "Non. DORA est un règlement sectoriel visant des entités financières dans son champ et comporte des règles et exemptions à qualifier. Ses articles sur continuité, réponse, sauvegarde et restauration constituent un benchmark utile pour ce secteur, pas une obligation générale pour toute PME ni une justification automatique du 24/7.",
  },
  {
    question: "Comment comparer deux offres de maintenance ?",
    answer:
      "Remettez-les au même périmètre, à la même plage, aux mêmes preuves et à un horizon commun. Additionnez transition, forfait, temps interne, exercices et exposition résiduelle documentée. Une ligne inconnue doit rester ND : la remplacer par zéro favorise artificiellement l’offre la moins décrite. Le total éclaire l’arbitrage mais ne décide pas à la place des responsables.",
  },
  {
    question: "Le tableur téléchargeable choisit-il le meilleur SLA ?",
    answer:
      "Non. Le classeur et l’atelier calculent des conséquences et rendent visibles les inconnues. Ils bloquent la note finale sur les valeurs fictives ou les preuves non vérifiées. La direction, les métiers, la technique, les achats et le conseil juridique compétent doivent arbitrer le niveau de service, le budget, les exclusions, les responsabilités et les recours.",
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
          { label: "SLA de maintenance applicative" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous transformez les mots « réponse », « disponibilité » et « restauration » en parcours, minutes, opérations, coûts et preuves. Ce guide fournit la méthode, les calculs contrôlés, un atelier local et un classeur de décision."
        heroAction={{ href: "#reponse-courte", label: "Vérifier le SLA" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "07",
            title: "horloges distinctes",
            description: "",
            color: "amber",
          },
          {
            number: "08",
            title: "domaines de preuve",
            description: "",
            color: "emerald",
          },
          {
            number: "15",
            title: "sources officielles",
            description: "",
            color: "blue",
          },
          {
            number: String(guide.readTimeMin),
            title: "min de lecture",
            description: "",
            color: "violet",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/contrat-tma-application",
            label: "Relire le contrat TMA complet",
          },
          {
            href: "/guides/cout-maintenance-application-metier",
            label: "Chiffrer la maintenance applicative",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Auditer l’application avant reprise",
          },
          {
            href: "/guides/tma-ou-regie",
            label: "Comparer TMA et régie",
          },
        ]}
        faqTitle="SLA applicatif : réponses précises avant de signer"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <span id="reponse-courte" />
        <p className="lead">
          <strong>
            Un SLA utile ne vous achète pas « une réponse en quatre heures ».
            Il protège votre travail pendant une plage précise, sépare sept
            horloges, traduit disponibilité, RTO et RPO en conséquences
            observables, puis exige les preuves que l’organisation peut tenir
            la promesse.
          </strong>
        </p>

        <p>
          La méthode tient en une phrase : <strong>parcours → impact → objectif
          → mesure → capacité → preuve → décision</strong>. Si l’une de ces
          étapes manque, le pourcentage ou le délai donne une impression de
          précision sans dire ce que les utilisateurs récupèrent réellement.
          Le contrat peut ensuite formaliser la répartition des responsabilités
          et les recours ; il ne doit pas inventer une capacité technique qui
          n’existe pas.
        </p>

        <InfoBox variant="amber" title="Les cinq erreurs qui imposent un STOP">
          <ul className="m-0 space-y-2 pl-5">
            <li>confondre accusé de réception et rétablissement métier ;</li>
            <li>promettre 24/7 sans personnes, accès ni fournisseurs alignés ;</li>
            <li>écrire un RPO sans restauration chronométrée et contrôlée ;</li>
            <li>remplacer un coût ou un risque inconnu par zéro ;</li>
            <li>
              traiter un crédit de service comme une indemnisation complète.
            </li>
          </ul>
        </InfoBox>

        <GuideToc
          items={[
            { id: "definition", label: "1. Ce qu’un SLA doit contenir" },
            { id: "service-sli", label: "2. Service, parcours et SLI" },
            { id: "sept-horloges", label: "3. Les sept horloges" },
            { id: "plage", label: "4. Plage, fuseau et pauses" },
            { id: "disponibilite", label: "5. Disponibilité en minutes" },
            { id: "severite", label: "6. Sévérité et escalade" },
            { id: "rto-rpo", label: "7. RTO, RPO et restauration" },
            { id: "cout-incident", label: "8. Chiffrer une panne" },
            { id: "dependances", label: "9. Dépendances de bout en bout" },
            { id: "correctifs-eol", label: "10. Correctifs et fin de support" },
            { id: "communication", label: "11. Communication et post-mortem" },
            { id: "contrat", label: "12. Contrat, crédits et recours" },
            { id: "comparer", label: "13. Comparer les couvertures" },
            { id: "exercices", label: "14. Exercices et huit preuves" },
            { id: "atelier-sla", label: "15. Atelier et classeur" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="definition">1. Ce qu’un SLA doit contenir — et ce qu’il ne prouve pas</h2>

        <p>
          Un <em>service level agreement</em> décrit les caractéristiques
          mesurables d’un service et les engagements convenus. Dans une
          maintenance applicative, il devrait au minimum nommer le service et
          ses parcours critiques, les utilisateurs concernés, les plages
          couvertes, la méthode de mesure, les objectifs, les exclusions, les
          niveaux de sévérité, l’escalade, les responsabilités, le reporting et
          les conséquences d’un écart. Cette liste reste insuffisante si les
          équipes ne possèdent pas les accès, les compétences et les
          dépendances nécessaires pour agir.
        </p>

        <p>
          Un SLA n’est ni une architecture, ni un plan de continuité, ni une
          procédure de réponse à incident. Il traduit une partie de ces
          capacités en engagements. Le{" "}
          <SourceLink id="GOOGLE-SRE-SLO">Google SRE Workbook</SourceLink>{" "}
          recommande de partir des parcours utilisateurs et d’indicateurs
          réellement mesurables. La norme{" "}
          <SourceLink id="ISO-20000-1">ISO/IEC 20000-1:2018</SourceLink>{" "}
          fournit un cadre de management des services ; elle ne livre aucun
          délai P1 ni prix prêt à copier.
        </p>

        <GuideTable
          headers={["Objet", "Question à trancher", "Preuve minimale"]}
          rows={[
            [
              "Service",
              "Quel travail doit rester possible ?",
              "Parcours testable et résultat attendu",
            ],
            [
              "Temps",
              "Quelle horloge mesure quel résultat ?",
              "Instants horodatés avec fuseau",
            ],
            [
              "Données",
              "À quel point faut-il pouvoir revenir ?",
              "Restauration et cohérence contrôlées",
            ],
            [
              "Organisation",
              "Qui détecte, décide, agit et informe ?",
              "Rôles, suppléants et escalade exercée",
            ],
            [
              "Économie",
              "Quel impact justifie quel moyen ?",
              "Hypothèses datées, sans inconnue remplacée par zéro",
            ],
            [
              "Contrat",
              "Que se passe-t-il si l’engagement manque ?",
              "Clause contextualisée et relue",
            ],
          ]}
          caption="Les six objets à relier avant de négocier un taux"
        />

        <ChapterGate
          proof="Une fiche versionnée relie service, parcours, plage, mesure, objectifs, responsables et conséquences."
          stop="Le document commence par un taux ou un délai sans définir le travail protégé."
          consequence="Revenir au besoin métier ; aucun niveau chiffré n’est encore comparable."
        />

        <h2 id="service-sli">2. Définissez le service avec un parcours mesuré par l’utilisateur</h2>

        <p>
          « L’application est disponible » est trop large. Un serveur peut
          répondre, l’API renvoyer HTTP 200 et l’écran s’afficher alors que la
          facturation, le paiement ou l’envoi d’un document échoue. Commencez
          par trois à cinq parcours dont l’interruption produit une conséquence
          identifiable : créer une commande, éditer une facture, consulter un
          dossier d’intervention, préparer un ordre de production ou remettre
          un document au client.
        </p>

        <p>
          Pour chaque parcours, écrivez un SLI — un indicateur de niveau de
          service — compréhensible par le métier. Exemple : « proportion de
          factures de test validées, envoyées et retrouvées dans l’historique en
          moins de deux minutes ». Indiquez le numérateur, le dénominateur, la
          source, la fréquence, le propriétaire, la rétention des données et la
          gestion des pannes partielles. Un simple statut d’infrastructure peut
          rester un signal de diagnostic ; il ne suffit pas pour arrêter
          l’horloge métier.
        </p>

        <p>
          Le chapitre du{" "}
          <SourceLink id="GOOGLE-SRE-SLO">SRE Workbook consacré aux SLO</SourceLink>{" "}
          insiste sur les parcours utilisateur et la faisabilité de la mesure.
          Son cadre international est utile pour raisonner, mais il ne constitue
          ni une clause française ni une valeur universelle. Le{" "}
          <SourceLink id="GOOGLE-MAPS-SLA">SLA public de Google Maps</SourceLink>{" "}
          illustre aussi l’anatomie d’une mesure : service couvert, requêtes
          valides, erreurs, période, exclusions, demande et crédit. Ses taux et
          sa logique par requêtes restent propres à ce service.
        </p>

        <InfoBox variant="blue" title="Une preuve métier complète la télémétrie">
          Les métriques techniques détectent souvent la panne plus vite. La
          recette métier confirme que le travail utile a repris. Conservez les
          deux et indiquez laquelle démarre ou arrête chaque engagement.
        </InfoBox>

        <ChapterGate
          proof="Une requête ou une recette reproductible mesure le parcours, avec source, propriétaire et résultat observable."
          stop="La seule preuve est une page d’état, un ping, un HTTP 200 ou une déclaration du prestataire."
          consequence="Le service rendu reste non mesuré ; aucun pourcentage ne peut être opposé proprement."
        />

        <h2 id="sept-horloges">3. Séparez les sept horloges d’un incident</h2>

        <p>
          Le mot « résolution » masque plusieurs résultats. Un ticket reçu ne
          signifie pas qu’une personne compétente agit. Un contournement ne
          signifie pas que le service nominal et les données sont restaurés.
          Une correction déployée ne signifie pas que la cause est comprise ni
          que les actions de prévention sont closes. Sept instants permettent
          de rendre la chronologie lisible.
        </p>

        <GuideTable
          headers={["Horloge", "Résultat observable", "Exemple de preuve"]}
          rows={[
            [
              "1. Observation",
              "Le blocage est constaté selon la règle convenue",
              "Alerte ou échec de parcours horodaté",
            ],
            [
              "2. Accusé",
              "L’incident est reçu et qualifié humainement",
              "Ticket, sévérité et destinataire",
            ],
            [
              "3. Intervention",
              "Une personne autorisée commence une action",
              "Première action technique traçable",
            ],
            [
              "4. Contournement",
              "Une partie du travail reprend autrement",
              "Recette du mode dégradé et limites",
            ],
            [
              "5. Rétablissement",
              "Le parcours métier fonctionne de nouveau",
              "Test de bout en bout réussi",
            ],
            [
              "6. Données vérifiées",
              "Écritures, doublons, pertes et effets différés sont contrôlés",
              "Rapprochement et échantillons signés",
            ],
            [
              "7. Clôture",
              "Communication, analyse et actions sont attribuées",
              "Rapport et suivi des actions",
            ],
          ]}
          caption="Sept horloges à ne plus appeler indistinctement résolution"
        />

        <p>
          Dans l’exemple fictif de l’atelier, le blocage est observé à 09:10,
          accusé après 8 minutes, pris en charge après 55 minutes, contourné
          après 150 minutes, rétabli après 310 minutes et vérifié côté données
          après 410 minutes. Une promesse « réponse sous une heure » aurait donc
          pu être tenue alors que les utilisateurs sont restés bloqués plus de
          cinq heures. C’est précisément l’ambiguïté à supprimer.
        </p>

        <p>
          Conservez des instants ISO avec décalage explicite, par exemple
          <code>2026-07-28T09:10:00+02:00</code>. Un horaire local sans fuseau
          devient ambigu lors d’un changement d’heure, d’une équipe
          internationale ou d’un rapprochement entre plusieurs systèmes.
          Définissez aussi la source d’autorité si le ticket, la supervision et
          le journal de déploiement ne portent pas le même instant.
        </p>

        <ChapterGate
          proof="La chronologie réconcilie alerte, ticket, actions, recette métier, données et clôture avec un fuseau explicite."
          stop="Un message automatique compte comme intervention ou une clôture de ticket compte comme rétablissement."
          consequence="Renommer les objectifs et rétablir les instants ; le délai actuel est trompeur."
        />

        <h2 id="plage">4. Écrivez la plage, le fuseau, les canaux et les pauses</h2>

        <p>
          « Quatre heures ouvrées » n’a aucun sens sans calendrier. Indiquez les
          jours, les heures, le fuseau, les jours fériés, les exceptions, la
          veille automatique éventuelle et l’astreinte humaine. Décrivez le
          canal accepté : portail, téléphone, supervision ou combinaison. Un
          e-mail envoyé à une adresse non surveillée ne doit pas démarrer une
          promesse que personne ne peut exécuter.
        </p>

        <p>
          Les règles de pause doivent être symétriques et auditables. Si le
          mainteneur attend un accès, un fichier ou une décision métier,
          indiquez qui demande quoi, quel minimum justifie la pause, comment le
          client est alerté et quand le chronomètre reprend. Une pause ne peut
          pas devenir une zone sans responsable. Testez les cas aux frontières :
          ticket reçu avant la fermeture, nuit, week-end, jour férié, équipe
          dans un autre fuseau et incident qui traverse plusieurs plages.
        </p>

        <GuideTable
          headers={["Cas", "Question", "Règle à simuler"]}
          rows={[
            [
              "Vendredi 17:50",
              "La plage ferme-t-elle à 18:00 ?",
              "Dix minutes comptées puis reprise lundi, ou astreinte explicite",
            ],
            [
              "Alerte hors plage",
              "La détection tourne-t-elle sans intervenant ?",
              "File d’attente, notification et départ de l’engagement",
            ],
            [
              "Accès manquant",
              "Qui devait maintenir l’accès d’urgence ?",
              "Pause documentée ou échec d’organisation",
            ],
            [
              "Incident mondial",
              "Quel fuseau gouverne la mesure ?",
              "Instant UTC conservé, affichage local explicite",
            ],
          ]}
          caption="Quatre cas limites à rejouer avant signature"
        />

        <ChapterGate
          proof="Un calendrier versionné et quatre simulations établissent le temps réellement couvert et les pauses."
          stop="Le document promet 24/7 alors qu’aucune astreinte humaine, aucun accès d’urgence ou aucun suppléant n’est prouvé."
          consequence="Revenir à une plage démontrable ou financer l’organisation manquante."
        />

        <h2 id="disponibilite">5. Convertissez la disponibilité en minutes avant de discuter le taux</h2>

        <p>
          Un pourcentage devient intelligible lorsqu’il est traduit dans la
          fenêtre réellement couverte. Sur trente jours en continu, le
          dénominateur vaut 43 200 minutes. Le temps total d’indisponibilité
          admis est ce dénominateur multiplié par <code>1 − cible</code>. Le
          résultat reste un budget agrégé : il ne limite pas nécessairement la
          durée d’un incident individuel et ne dit rien sur les pannes pendant
          une période commerciale critique.
        </p>

        <FormulaBox>
          {"Arrêt admis = minutes couvertes × (1 − disponibilité cible)\n\n30 jours × 24 h × 60 × (1 − 99,9 %) = 43,2 minutes"}
        </FormulaBox>

        <GuideTable
          headers={[
            "Cible",
            "Arrêt sur 30 jours 24/7",
            "Ce que le chiffre ne prouve pas",
          ]}
          rows={[
            ["99 %", "7 h 12 min", "La durée maximale d’un incident"],
            ["99,5 %", "3 h 36 min", "Le rétablissement des données"],
            ["99,9 %", "43 min 12 s", "La réussite du parcours métier"],
            ["99,95 %", "21 min 36 s", "La couverture des fournisseurs"],
            ["99,99 %", "4 min 19 s environ", "La capacité opérationnelle"],
          ]}
          caption="Conversion exacte des cibles sur une fenêtre fictive de trente jours"
        />

        <p>
          Indiquez ce qui entre dans le numérateur et le dénominateur :
          maintenances planifiées, échecs partiels, erreurs imputables à un
          fournisseur, problèmes côté client, données de test et absence de
          trafic. Toute exclusion doit être détectable, attribuable et
          conservée. L’<em>error budget</em> peut ensuite guider les décisions
          d’exploitation : lorsqu’il est consommé, on privilégie la fiabilité
          plutôt qu’une nouvelle évolution. Ce mécanisme de gouvernance issu du
          SRE ne doit pas être confondu avec un droit contractuel automatique.
        </p>

        <ChapterGate
          proof="Le rapport conserve période, minutes couvertes, échecs, exclusions et calcul reproductible à partir de données horodatées."
          stop="Le taux est affiché sans dénominateur, source ou traitement des pannes partielles."
          consequence="Le pourcentage reste invérifiable ; le comparer ou appliquer un crédit serait prématuré."
        />

        <h2 id="severite">6. Construisez les sévérités à partir de l’impact, pas de l’émotion</h2>

        <p>
          Une matrice de sévérité doit permettre à deux personnes de classer le
          même incident de la même façon. Croisez l’étendue — un utilisateur,
          un site, tous les clients — avec l’impact : parcours impossible,
          données menacées, sécurité, absence de contournement, échéance
          réglementaire ou activité simplement ralentie. Ne laissez pas le
          demandeur sélectionner librement « critique » pour obtenir une
          réponse plus rapide sans critères.
        </p>

        <GuideTable
          headers={["Niveau illustratif", "Critères possibles", "Résultat à organiser"]}
          rows={[
            [
              "P1 — critique",
              "Parcours vital bloqué, large étendue, pas de contournement ou risque cyber",
              "Escalade immédiate, rôles de crise, communication cadencée",
            ],
            [
              "P2 — majeur",
              "Fonction importante dégradée, contournement coûteux ou périmètre limité",
              "Intervention priorisée, suivi et rétablissement défini",
            ],
            [
              "P3 — standard",
              "Impact contenu avec solution praticable",
              "Traitement dans la capacité planifiée",
            ],
            [
              "Demande",
              "Évolution, assistance ou correction sans incident actif",
              "Flux séparé du SLA d’incident",
            ],
          ]}
          caption="Exemple de logique à adapter — aucun délai universel"
        />

        <p>
          Les noms P1, Sev-1 ou critique ne sont pas normalisés ici. Le
          prestataire et le client doivent partager les mêmes définitions, la
          personne autorisée à reclasser, le traitement des désaccords et la
          preuve de l’impact. Un signal de compromission doit basculer vers la
          réponse à incident compétente au lieu de poursuivre mécaniquement le
          flux de maintenance ordinaire.
        </p>

        <ChapterGate
          proof="Trois incidents historiques ou simulés sont classés de façon convergente par métier, exploitation et prestataire."
          stop="La sévérité est choisie par intuition, influence le prix mais ne possède aucun critère vérifiable."
          consequence="Réécrire la matrice et séparer incident, problème, demande et urgence cyber."
        />

        <h2 id="rto-rpo">7. Traduisez RTO et RPO en capacité de restauration</h2>

        <p>
          Le{" "}
          <SourceLink id="NIST-RTO">NIST définit le RTO</SourceLink> comme la
          durée totale pendant laquelle les composants d’un système
          d’information peuvent rester en phase de récupération avant
          d’affecter négativement la mission ou les processus métier de
          l’organisation, dans le contexte de sa publication source. Le{" "}
          <SourceLink id="NIST-RPO">RPO</SourceLink> fixe le point dans le temps
          auquel les données doivent pouvoir être récupérées. Ces définitions
          distinguent le temps et la donnée ; elles ne fournissent aucun seuil
          adapté à votre entreprise.
        </p>

        <p>
          Traduisez le RPO en opérations. Dans notre exemple fictif, quarante
          opérations par heure et un RPO d’une heure et demie exposent soixante
          opérations. À quatre minutes de ressaisie par opération, cela
          représente quatre heures de travail ; à 35 € par heure chargée, 140 €.
          Le coût peut paraître modeste, mais la ressaisie peut être impossible
          si aucune autre preuve n’existe. Il faut donc documenter la source de
          reconstruction, les doublons, l’ordre des événements et les décisions
          métier nécessaires.
        </p>

        <FormulaBox>
          {"Opérations à risque = opérations/heure × RPO\nRessaisie = opérations × minutes/opération\n\n40 × 1,5 = 60 opérations ; 60 × 4 min = 4 h ; 4 h × 35 € = 140 €"}
        </FormulaBox>

        <p>
          La version 1.1 du guide{" "}
          <SourceLink id="ANSSI-BACKUP-2025">
            ANSSI sur la sauvegarde des systèmes d’information
          </SourceLink>{" "}
          relie besoins métier, PDMA/RPO, DMIA/RTO, stratégie, protection et
          restauration. Le module{" "}
          <SourceLink id="BSI-BACKUP">CON.3 de l’édition anglaise 2022 du BSI</SourceLink>{" "}
          et l’<SourceLink id="ASD-ESSENTIAL-EIGHT">Essential Eight australien</SourceLink>{" "}
          constituent d’autres repères internationaux sur sauvegardes,
          protection et restauration. Ils restent des cadres de sécurité avec
          leur périmètre propre, pas des preuves qu’une copie donnée fonctionne.
        </p>

        <p>
          Un exercice crédible restaure dans un environnement isolé les
          fichiers, les données, la configuration et les secrets fournis par un
          canal autorisé ; mesure chaque étape ; contrôle volumes, relations et
          échantillons métier ; vérifie les effets asynchrones ; puis compare
          le RTO et le RPO observés aux objectifs. Il consigne aussi ce qui n’a
          pas été testé. La production ne doit pas être mise en danger pour
          fabriquer une preuve.
        </p>

        <ChapterGate
          proof="Un procès-verbal daté établit point restauré, périmètre, durée, cohérence, opérations à ressaisir et responsables."
          stop="La seule preuve est l’existence d’une sauvegarde, un statut vert ou une restauration non vérifiée par le métier."
          consequence="RTO et RPO restent des souhaits ; planifier un test isolé avant tout engagement ferme."
        />

        <h2 id="cout-incident">8. Chiffrez l’incident sans compter deux fois la même perte</h2>

        <p>
          Le coût d’une panne sert à proportionner les moyens, pas à inventer un
          dommage certain. Séparez le temps interne réellement détourné, la
          marge contributive définitivement perdue, les coûts externes de
          reprise, la ressaisie, les concessions applicables et les autres
          postes documentés. Une vente décalée n’est pas automatiquement une
          perte. Le salaire déjà payé n’est pas automatiquement un surcoût :
          estimez la part de capacité réellement retirée à une autre activité.
        </p>

        <p>
          Dans le cas fictif calculé par le moteur, 4,2 heures d’arrêt, douze
          personnes, 35 € par heure chargée et 100 % de temps détourné donnent
          1 764 € de capacité interne. Un rattrapage distinct de 420 €, une
          marge non reportable de 480 € et 900 € de reprise externe portent le
          coût brut à 3 564 €. Un crédit de service de 200 € est affiché
          séparément : il ne couvre que 5,61 % du coût brut et l’exposition
          nette illustrative devient 3 364 €. Cela ne tranche ni le droit à
          réparation, ni la causalité, ni un plafond contractuel.
        </p>

        <FormulaBox>
          {"Coût brut = capacité interne détournée + rattrapage distinct + marge contributive non reportable + reprise externe distincte\n\n1 764 € + 420 € + 480 € + 900 € = 3 564 € ; crédit séparé = 200 €, soit 5,61 %"}
        </FormulaBox>

        <GuideTable
          headers={["Poste", "À inclure", "À ne pas faire"]}
          rows={[
            [
              "Capacité interne",
              "Personnes × heures × coût × part détournée",
              "Compter 100 % sans observation",
            ],
            [
              "Marge",
              "Contribution définitivement non récupérée",
              "Utiliser le chiffre d’affaires brut",
            ],
            [
              "Reprise externe",
              "Coût distinct non compris au forfait",
              "Compter deux fois une capacité corrective",
            ],
            [
              "Crédit",
              "Montant applicable et réclamable",
              "Le présenter comme remboursement intégral",
            ],
            [
              "Inconnue",
              "ND avec responsable et date de recherche",
              "Remplacer par zéro",
            ],
          ]}
          caption="Règles prudentes de chiffrage d’un incident"
        />

        <ChapterGate
          proof="Chaque montant possède une définition, une source, une période et une règle empêchant le double comptage."
          stop="Le modèle additionne chiffre d’affaires, marge, salaires complets et crédit comme s’ils mesuraient la même chose."
          consequence="Reclasser les postes ; le total actuel n’est pas une base de décision défendable."
        />

        <h2 id="dependances">9. Alignez l’engagement sur la chaîne de dépendances</h2>

        <p>
          Une application dépend souvent d’un hébergeur, d’une base gérée, d’un
          DNS, d’un annuaire, d’un paiement, d’une messagerie, d’un réseau et
          d’équipes internes. Le mainteneur peut surveiller, diagnostiquer,
          ouvrir un ticket, activer un contournement et informer ; il ne
          contrôle pas nécessairement le délai de rétablissement de chaque
          fournisseur. Un engagement de bout en bout doit refléter cette
          capacité réelle.
        </p>

        <p>
          Pour chaque dépendance, notez : service consommé, parcours affectés,
          propriétaire du compte, administrateur de secours, contrat et plage,
          canal d’urgence, statut ou télémétrie, données détenues, sortie,
          alternative et exclusion. Vérifiez les points communs : deux serveurs
          qui partagent une base, une région, un compte administrateur ou un
          fournisseur d’identité ne constituent pas une indépendance complète.
          Exercez la perte d’un tiers sans provoquer un dommage en production.
        </p>

        <p>
          L’<SourceLink id="ISO-27031-2025">ISO/IEC 27031:2025</SourceLink>{" "}
          fournit un cadre public de préparation des technologies de
          l’information à la continuité, aligné sur les besoins métier et les
          dépendances. Sa page officielle ne publie pas l’intégralité du texte
          normatif et ne prouve aucune certification. Utilisez-la comme repère
          d’organisation, pas comme argument marketing automatique.
        </p>

        <ChapterGate
          proof="La matrice dépendances relie compte, contrat, couverture, accès d’urgence, escalade, donnée, exclusion et mode dégradé."
          stop="Le mainteneur promet un délai inférieur à celui d’une dépendance qu’il ne contrôle pas, sans contournement."
          consequence="Distinguer engagement propre, objectif de coordination et risque explicitement résiduel."
        />

        <h2 id="correctifs-eol">10. Intégrez correctifs, vulnérabilités et fin de support</h2>

        <p>
          La maintenance préventive ne se résume pas à « appliquer les mises à
          jour ». Définissez les composants suivis, la source d’information, la
          criticité, le délai de qualification, le test représentatif, le retour
          arrière, la fenêtre de changement, les exceptions, le responsable
          d’acceptation et la preuve après déploiement. Séparez une vulnérabilité
          activement exploitée d’une mise à jour fonctionnelle ordinaire.
        </p>

        <p>
          La fin de support doit posséder une date, un préavis et une décision :
          mise à niveau, remplacement, isolement temporaire avec risque accepté
          ou arrêt. Le{" "}
          <SourceLink id="UK-SOFTWARE-CODE-2026">
            Software Security Code of Practice britannique
          </SourceLink>{" "}
          mis à jour en janvier 2026 traite notamment maintenance sécurisée,
          mises à jour, support, fin de support et communication. Il est
          volontaire et centré sur la sécurité des logiciels B2B ; il ne
          devient ni du droit français ni une couverture complète de la
          maintenance fonctionnelle.
        </p>

        <p>
          Les{" "}
          <SourceLink id="NCSC-APC">
            principes d’assurance et claims du NCSC
          </SourceLink>{" "}
          aident à relier une promesse à une preuve vérifiable. Une politique
          publiée est un élément ; un test, un journal et une observation de
          terrain en sont d’autres. Évitez de transformer une auto-évaluation
          ou une déclaration en garantie opérationnelle.
        </p>

        <ChapterGate
          proof="Inventaire, politique de correctifs, tests, repli, exceptions et dates de fin de support sont versionnés et attribués."
          stop="Un composant hors support critique n’a ni plan, ni acceptation du risque, ni mesure compensatoire."
          consequence="Traiter la dette de support avant de promettre le niveau de service dépendant de ce composant."
        />

        <h2 id="communication">11. Préparez la communication et le post-mortem avant la crise</h2>

        <p>
          L’incident devient plus coûteux lorsque les personnes ne savent pas
          qui décide, qui informe ni à quelle cadence. Écrivez les destinataires
          par niveau de sévérité, le canal principal et le canal de secours, la
          première notification, la cadence, les informations minimales, les
          critères de fin et la personne autorisée à communiquer au client ou à
          l’extérieur. Testez la réception, pas seulement l’envoi.
        </p>

        <GuideTable
          headers={["Moment", "Information utile", "À éviter"]}
          rows={[
            [
              "Ouverture",
              "Impact connu, périmètre, heure, prochaine mise à jour",
              "Cause affirmée sans preuve",
            ],
            [
              "En cours",
              "Actions, contournement, risques, décisions attendues",
              "Silence jusqu’au rétablissement",
            ],
            [
              "Rétablissement",
              "Parcours testé, limites, surveillance, données",
              "« Résolu » sans contrôle métier",
            ],
            [
              "Après incident",
              "Chronologie, facteurs, actions, responsables, échéances",
              "Recherche de coupable ou liste sans suivi",
            ],
          ]}
          caption="Contenu minimal d’une communication d’incident"
        />

        <p>
          Le post-mortem distingue cause suffisamment établie, facteurs
          contributifs, défauts de détection, décisions, effets différés et
          actions. Chaque action possède un propriétaire, une échéance et une
          preuve de clôture. Les incidents récurrents ne doivent pas être
          « résolus » par le même contournement sans décision sur le problème
          sous-jacent. Le SLA peut prévoir une revue périodique des tendances et
          de l’error budget.
        </p>

        <ChapterGate
          proof="Un exercice de notification prouve destinataires, cadence, canal de secours et suivi des actions post-incident."
          stop="Le seul plan est une liste d’adresses ou un modèle de message jamais reçu."
          consequence="Exercer la chaîne humaine ; la communication reste un risque opérationnel."
        />

        <h2 id="contrat">12. Séparez service, exclusions, crédits et autres recours</h2>

        <p>
          En droit français, l’{" "}
          <SourceLink id="LEGIFRANCE-1103">article 1103 du Code civil</SourceLink>{" "}
          rappelle que les contrats légalement formés tiennent lieu de loi à
          ceux qui les ont faits. Cette règle renforce l’importance de définir
          précisément service, mesure, objectifs, exclusions et obligations ;
          elle ne valide aucune clause particulière. L’{" "}
          <SourceLink id="LEGIFRANCE-1217">article 1217</SourceLink> présente
          plusieurs conséquences possibles de l’inexécution. Leur application,
          compatibilité, preuve, causalité, plafonds et clauses limitatives
          dépendent du contrat et du cas.
        </p>

        <p>
          Un crédit de service peut être simple à calculer, mais il ne doit pas
          être présenté comme la mesure du dommage. Écrivez sa base, son taux,
          son plafond, sa période, la procédure, le délai de demande et sa place
          par rapport aux autres droits. Faites relire droit applicable,
          responsabilités, propriété intellectuelle, données, confidentialité,
          sécurité, assurances et sortie par les compétences appropriées. Ce
          guide et son outil ne fournissent aucun avis juridique.
        </p>

        <p>
          Pour les entités financières entrant dans son champ, les articles 11
          et 12 de{" "}
          <SourceLink id="DORA-ART11-12">DORA</SourceLink> traitent notamment
          réponse, reprise, continuité, sauvegarde et restauration. Le règlement
          est sectoriel et ses exemptions doivent être qualifiées. Il ne
          s’applique pas indistinctement à toute PME et ne justifie pas à lui
          seul une astreinte permanente.
        </p>

        <ChapterGate
          proof="Le texte contractuel relie chaque objectif à une mesure, une preuve, une responsabilité, une exclusion et une conséquence relue."
          stop="Le crédit est présenté comme recours exclusif ou indemnisation complète sans analyse du contrat."
          consequence="Demander une revue juridique contextualisée ; ne pas déduire un droit depuis le calculateur."
        />

        <h2 id="comparer">13. Comparez les couvertures sur douze mois sur une base identique</h2>

        <p>
          Une offre à 1 200 € par mois et une offre à 3 200 € ne sont pas
          comparables si l’une exclut restauration, astreinte, exercice,
          correctifs ou sortie. Fixez un périmètre commun et additionnez la
          transition, le forfait, le temps interne de coordination, les
          exercices et l’exposition résiduelle. Les évolutions produit et les
          projets exceptionnels restent sur des lignes séparées pour éviter de
          gonfler ou minorer artificiellement la maintenance.
        </p>

        <GuideTable
          headers={["Scénario fictif", "Poste annuel comparable", "Montant"]}
          rows={coverages.flatMap((coverage) => {
            const amounts =
              coverage.kind === "known"
                ? [
                    [
                      "Contrat, transition et exercices",
                      `${coverage.contractedAnnualCost.toLocaleString("fr-FR")} €`,
                    ],
                    [
                      "Temps interne",
                      `${coverage.internalAnnualCost.toLocaleString("fr-FR")} €`,
                    ],
                    [
                      "Exposition résiduelle",
                      `${coverage.residualAnnualExposure.toLocaleString("fr-FR")} €`,
                    ],
                    [
                      "Total annuel",
                      `${coverage.annualTotal.toLocaleString("fr-FR")} €`,
                    ],
                  ]
                : [
                    ["Contrat, transition et exercices", "ND"],
                    ["Temps interne", "ND"],
                    ["Exposition résiduelle", "ND"],
                    ["Total annuel", "ND"],
                  ];
            return amounts.map(([label, amount]) => [
              coverage.name,
              label,
              amount,
            ]);
          })}
          caption="Trois scénarios purement fictifs calculés par le même moteur"
        />

        <p>
          Ces montants sont des fixtures de contrôle, jamais des prix de marché.
          L’exposition résiduelle est particulièrement incertaine : elle exige
          une source, une date, une fréquence et un coût par incident. Si elle
          n’est pas défendable, le total doit rester ND. Afficher 0 € reviendrait
          à avantager l’offre la moins documentée. Testez ensuite les scénarios
          avec une panne plus longue, un fournisseur indisponible, une
          restauration lente et une fin de support anticipée.
        </p>

        <InfoBox variant="emerald" title="Le total annuel n’est pas un classement automatique">
          Le scénario le moins cher peut exposer un parcours vital ; le plus
          cher peut surdimensionner un service contournable. La comparaison
          rend les hypothèses visibles. Direction, métier, technique, achats et
          conseil juridique arbitrent la valeur et le risque.
        </InfoBox>

        <ChapterGate
          proof="Deux offres au moins partagent périmètre, plage, unités, horizon, sources et hypothèses résiduelles datées."
          stop="Une ligne inconnue est remplacée par zéro ou un forfait inclut implicitement des services absents chez l’autre."
          consequence="Rebaser les offres avant toute recommandation ou négociation."
        />

        <h2 id="exercices">14. Faites vivre le SLA par des exercices et huit contrôles concrets</h2>

        <p>
          Un document non exercé décrit une intention. Organisez un calendrier
          proportionné : test de canal et d’escalade, incident sur un parcours,
          perte simulée d’une dépendance, restauration isolée, contrôle de
          données, mode dégradé et sortie. Définissez avant chaque exercice les
          objectifs, les limites de sécurité, les observateurs, les critères de
          réussite et le retour arrière. Conservez les résultats réels, y
          compris les échecs et ce qui n’a pas été testé.
        </p>

        <p>
          Huit domaines structurent le dossier : service et parcours ; plage et
          chronomètre ; mesure et provenance ; sept horloges ; restauration ;
          dépendances ; communication ; correctifs, fin de support, sortie et
          recours. Chaque domaine reçoit un statut <strong>ND, déclaré, vérifié
          ou échoué</strong>, une référence, une date et un responsable. Une
          déclaration ne devient pas une preuve parce qu’elle est écrite dans
          une proposition commerciale.
        </p>

        <p>
          L’<SourceLink id="ISO-22301">ISO 22301:2019 avec amendement 1:2024</SourceLink>{" "}
          constitue un repère international de management de la continuité. Au
          gel de ce guide, l’édition publiée est en révision ; n’attribuez pas à
          un projet de nouvelle édition un statut déjà applicable. Les normes
          ISO sont volontaires dans ce contexte et leurs pages publiques ne
          remplacent pas le texte complet ni une évaluation de conformité.
        </p>

        <GuideTable
          headers={["Statut", "Signification", "Effet sur la décision"]}
          rows={[
            [
              "ND",
              "Information manquante ou non interprétable",
              "Résultat bloqué, jamais zéro",
            ],
            [
              "Déclaré",
              "Une partie affirme que le contrôle existe",
              "Comparable au mieux, pas final",
            ],
            [
              "Vérifié",
              "Artefact daté et résultat observé",
              "Gate technique franchissable",
            ],
            [
              "Échoué",
              "Le contrôle n’a pas produit le résultat attendu",
              "STOP et action corrective",
            ],
          ]}
          caption="Quatre statuts qui empêchent la fausse certitude"
        />

        <ChapterGate
          proof="Le registre conserve huit statuts, références, dates, responsables et résultats d’exercices."
          stop="Une preuve critique échoue, ou l’exercice menace la production sans autorisation ni repli."
          consequence="Corriger ou réduire la promesse ; une décision finale serait trompeuse."
        />

        <SlaMaintenanceDecisionDossier />

        <h2 id="classeur">Télécharger le classeur de travail et préparer la revue</h2>

        <p>
          Le classeur reprend la même logique dans dix-sept feuilles :
          hypothèses, services, plages, disponibilité, incidents, chronologie,
          coût, RPO, dépendances, couvertures, comparaison annuelle, exercices,
          communication, décision, contrôles et sources. Les valeurs livrées
          forment un <strong>exemple entièrement fictif</strong> et doivent
          rester identifiées comme telles jusqu’à leur remplacement. Les
          formules ne choisissent jamais automatiquement un fournisseur ou un
          niveau contractuel.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-violet-200 bg-violet-50/60 p-5 text-left dark:border-violet-900 dark:bg-violet-950/20 sm:p-6">
          <p className="m-0 text-xs font-extrabold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
            Ressource contrôlée
          </p>
          <h3 className="mb-0 mt-2 text-xl font-bold text-zinc-950 dark:text-white">
            Kit SLA et maintenance applicative
          </h3>
          <p className="mb-0 mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Utilisez-le en atelier avec le métier, l’exploitation, les achats et
            le conseil juridique compétent. Ne saisissez aucun secret, mot de
            passe, jeton ou donnée personnelle inutile.
          </p>
          <a
            href="/ressources/kit-sla-maintenance-applicative.xlsx"
            download
            className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
          >
            Télécharger le classeur XLSX
          </a>
        </div>

        <GuideInlineCTA
          title="Transformer votre contrat de maintenance en dossier vérifiable"
          description="Nous pouvons partir d’un parcours critique, rejouer un incident, contrôler la restauration, rebaser les offres et préparer les questions à soumettre à votre conseil juridique."
          tags={[
            "Sept horloges",
            "RTO et RPO testés",
            "Offres comparées au même périmètre",
          ]}
          ctaLabel="Préparer la revue du SLA"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles, portée et limites</h2>

        <p>
          Le benchmark associe des sources françaises, américaines,
          britanniques, allemandes, européennes, ISO et australiennes. Elles
          n’ont pas la même force ni le même objet : définitions, bonnes
          pratiques, norme volontaire, code volontaire, contrat public ou
          règle sectorielle. Le guide reprend les axes compatibles et conserve
          les limites ; il ne transforme jamais un référentiel étranger en
          obligation française.
        </p>

        <ul>
          {sources.map((source) => (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.publisher} — {source.title}
              </a>
              . <strong>Usage :</strong> {source.scope} <strong>Limite :</strong>{" "}
              {source.limits}
            </li>
          ))}
        </ul>

        <p>
          Sources consultées le 28 juillet 2026. Les pages, normes, contrats et
          textes peuvent évoluer : vérifiez la version en vigueur au moment de
          votre décision. Ce contenu apporte une méthode générale de
          qualification ; il ne constitue ni un conseil juridique, ni une
          certification, ni une recommandation de taux, de délai, de prix ou de
          fournisseur. Tout cas impliquant incident actif, compromission,
          données sensibles, réglementation sectorielle ou litige requiert les
          compétences et autorisations adaptées.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
