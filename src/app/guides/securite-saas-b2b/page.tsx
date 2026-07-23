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

const guide = getGuide("securite-saas-b2b");

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
        alt: "Huit fiches de preuve pour répondre à un questionnaire de sécurité SaaS B2B",
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
      name: "Sécurité d’un SaaS B2B",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Le fournisseur cloud sécurise-t-il tout le SaaS ?",
    answer:
      "Non. Il protège un périmètre défini par son contrat et sa documentation. L’éditeur reste notamment responsable de sa configuration, de son code, de ses comptes, de ses droits, de ses données et de ses procédures. Il faut écrire cette répartition au lieu de répondre simplement « hébergé dans le cloud ».",
  },
  {
    question: "Faut-il avoir une certification pour vendre à une entreprise ?",
    answer:
      "Pas toujours. Certains acheteurs ou secteurs peuvent l’exiger ; d’autres acceptent des preuves, des réserves et un plan daté. Une certification ne doit jamais être revendiquée sans l’avoir obtenue sur le périmètre concerné.",
  },
  {
    question: "Une sauvegarde automatique suffit-elle ?",
    answer:
      "Non. Une sauvegarde ne prouve pas qu’une restauration aboutira dans les conditions attendues. Documentez ce qui est sauvegardé, la responsabilité, la protection, le dernier essai de restauration, son résultat et ses limites.",
  },
  {
    question: "Le MFA est-il obligatoire pour tous les comptes ?",
    answer:
      "Ce guide ne pose pas d’obligation universelle. L’authentification multifacteur réduit certains risques, surtout pour les accès sensibles, mais la mesure doit être choisie selon les risques et les exigences applicables. Expliquez séparément les accès des utilisateurs, des administrateurs et du support.",
  },
  {
    question: "Tout incident doit-il être déclaré à la CNIL sous 72 heures ?",
    answer:
      "Non. Le délai concerne la notification de certaines violations de données personnelles présentant un risque. Toute violation doit être documentée, mais un incident technique n’est pas automatiquement une violation à notifier. Faites qualifier le cas par une personne compétente.",
  },
  {
    question: "Peut-on envoyer un rapport de test d’intrusion au prospect ?",
    answer:
      "Seulement après avoir vérifié son périmètre, sa date, ses destinataires et les informations sensibles qu’il contient. Une synthèse ou une consultation encadrée peut être plus appropriée. Ne transmettez ni secrets, ni données personnelles inutiles, ni détails exploitables.",
  },
];

const proofCards = [
  {
    number: "01",
    title: "Identités et droits",
    question: "Qui peut voir, modifier, exporter ou administrer quoi ?",
    evidence:
      "Rôles actuels, procédure d’arrivée et de départ, propriétaire des droits, date et résultat de la dernière revue.",
    stop: "Compte partagé, ancien intervenant encore actif ou administrateur dont personne ne connaît le propriétaire.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    number: "02",
    title: "Données et séparation",
    question: "Quelles données entrent, sortent et passent chez un tiers ?",
    evidence:
      "Cartographie simple des données, flux, environnements, destinataires et règle d’accès entre entreprises clientes.",
    stop: "Données critiques inconnues, environnement de test rempli de vraies données sans maîtrise ou séparation non vérifiée.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    number: "03",
    title: "Sauvegarde et restauration",
    question: "Que peut-on réellement récupérer après une perte ?",
    evidence:
      "Périmètre sauvegardé, protection, responsabilités et compte rendu du dernier essai de restauration.",
    stop: "Tâche automatique visible, mais aucune restauration exécutée ni personne capable de la déclencher.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    number: "04",
    title: "Journaux et alertes",
    question: "Comment une anomalie utile devient-elle une action humaine ?",
    evidence:
      "Événements suivis, durée justifiée, alerte, personne destinataire et exemple d’examen ou d’exercice.",
    stop: "Des journaux s’accumulent sans alerte, sans responsable ou avec des données personnelles inutiles.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    number: "05",
    title: "Développement et dépendances",
    question:
      "Comment une erreur ou une dépendance vulnérable est-elle corrigée ?",
    evidence:
      "Revue, tests, inventaire utile des dépendances, règle de mise à jour et procédure de correction proportionnée.",
    stop: "Mise en production sans contrôle identifiable ou dépendance critique sans propriétaire.",
    color:
      "border-fuchsia-200 bg-fuchsia-50/70 dark:border-fuchsia-900 dark:bg-fuchsia-950/20",
  },
  {
    number: "06",
    title: "Incident",
    question: "Qui qualifie, limite, documente et décide d’informer ?",
    evidence:
      "Procédure courte, rôles, coordonnées à jour, critères d’escalade et compte rendu d’un exercice.",
    stop: "Aucun responsable, aucun moyen de joindre l’équipe ou promesse de notification impossible à tenir.",
    color:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
  {
    number: "07",
    title: "Sous-traitants",
    question: "Quel prestataire traite ou héberge quelle partie du service ?",
    evidence:
      "Liste tenue à jour, rôle, localisation utile, engagement applicable, procédure de changement et dernière revue.",
    stop: "Prestataire critique ou transfert de données inconnu.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    number: "08",
    title: "Continuité et sortie",
    question: "Que se passe-t-il pendant une panne ou à la fin du contrat ?",
    evidence:
      "Fonctionnement dégradé, reprise, export, responsabilités, objectifs réellement validés et dernier exercice pertinent.",
    stop: "Délai promis sans test, export inexistant ou dépendance à une seule personne.",
    color:
      "border-orange-200 bg-orange-50/70 dark:border-orange-900 dark:bg-orange-950/20",
  },
];

const statusRows = [
  [
    "Prouvé",
    "La mesure existe sur le périmètre demandé. Joignez une pièce actuelle, son propriétaire et la date du dernier test.",
    "Répondre précisément, avec les limites utiles.",
  ],
  [
    "Planifié",
    "L’écart est compris. Indiquez la mesure temporaire, le responsable, l’échéance et l’accord écrit de l’acheteur.",
    "Ne promettre que le plan réellement financé et accepté.",
  ],
  [
    "Bloquant ou inconnu",
    "Le risque, l’actif ou la capacité de reprise ne sont pas qualifiés. Un diagnostic, une correction, un audit ou un avis spécialisé est nécessaire.",
    "Suspendre la réponse ou la signature.",
  ],
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
          { label: "Sécurité d’un SaaS B2B" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Un grand compte vous demande SSO, MFA, sauvegardes testées, journaux et procédure d’incident. Répondez avec des preuves, un plan accepté ou une décision de suspendre — jamais avec une promesse improvisée."
        heroAction={{
          href: "#registre",
          label: "Construire mon registre",
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
            title: "8 familles de preuves",
            description: "",
            color: "blue",
          },
          {
            number: "02",
            title: "3 réponses honnêtes",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "Suspendre reste une décision",
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
            href: "/guides/cahier-des-charges-saas",
            label: "Inscrire les exigences dans le cahier des charges",
          },
          {
            href: "/guides/reprendre-saas-developpe-par-freelance",
            label: "Reprendre les accès d’un SaaS existant",
          },
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Définir le périmètre d’un MVP SaaS",
          },
        ]}
        faqTitle="Questions fréquentes avant de répondre à l’acheteur"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Un questionnaire de sécurité ne se gagne pas en cochant « oui » le
          plus vite possible. Pour chaque demande, vous devez pouvoir montrer ce
          qui existe, qui en répond et quand cela a été testé. Si une mesure
          manque, proposez un plan daté que l’acheteur accepte explicitement. Si
          vous ignorez où sont les données critiques, qui administre le service
          ou si une restauration fonctionne, suspendez la signature et vérifiez.
          Perdre une vente est parfois moins grave que signer une promesse que
          le produit ne tient pas.
        </p>

        <InfoBox
          variant="emerald"
          title="La réponse tient en trois colonnes : fait, preuve, limite"
        >
          Écrivez « les administrateurs utilisent deux facteurs ; dernière revue
          des comptes le… ; comptes techniques exclus pour telle raison » plutôt
          que « MFA : conforme ». Une réponse précise peut reconnaître une
          limite. Une case verte sans pièce n’enlève aucun risque.
        </InfoBox>

        <p>
          Ce guide prépare un dossier de discussion technique et commerciale. Il
          ne remplace ni un audit, ni un test d’intrusion, ni une certification,
          ni un avis juridique ou sectoriel. Les entreprises de santé, finance,
          défense et les autres activités réglementées doivent faire qualifier
          leurs obligations propres.
        </p>

        <GuideToc
          items={[
            {
              id: "attente-acheteur",
              label: "Comprendre ce que cherche l’acheteur",
            },
            {
              id: "cartographie",
              label: "Cartographier avant de cocher",
            },
            { id: "preuves", label: "Remplir les huit fiches de preuve" },
            {
              id: "statuts",
              label: "Classer chaque demande en trois statuts",
            },
            {
              id: "exemple",
              label: "Rejouer une restauration fictive",
            },
            {
              id: "partage",
              label: "Partager assez, sans exposer le SaaS",
            },
            { id: "registre", label: "Construire le registre autonome" },
            { id: "decision", label: "Signer, conditionner ou suspendre" },
            { id: "fit", label: "Savoir quand demander de l’aide" },
            { id: "sources", label: "Sources officielles et limites" },
          ]}
        />

        <h2 id="attente-acheteur">
          L’acheteur ne cherche pas un SaaS « invulnérable »
        </h2>
        <p>
          Il cherche à comprendre le risque qu’il prend. Que se passe-t-il si un
          salarié quitte votre équipe ? Si un fichier est supprimé ? Si un
          sous-traitant change ? Si une anomalie apparaît un vendredi soir ? Les
          sigles du questionnaire — SSO, MFA, RPO, RTO ou SIEM — ne sont que des
          raccourcis. La vraie question est toujours : quelle situation
          craignez-vous, quelle mesure la réduit, et quelle preuve récente
          permet de le vérifier ?
        </p>
        <p>
          Ne laissez pas le commercial répondre seul à une question technique,
          ni le développeur accepter seul une obligation contractuelle. Faites
          relire les réponses par les propriétaires concernés : direction,
          technique, protection des données et conseil compétent lorsque le
          texte engage l’entreprise.
        </p>

        <h2 id="cartographie">
          Avant de répondre, dessinez où sont les données et qui y accède
        </h2>
        <p>
          Commencez par une feuille lisible par la direction. Listez les
          fonctions que l’acheteur utilisera, les données qu’elles manipulent,
          les rôles internes et externes, les environnements, les prestataires
          et les chemins de sortie. Vous ne cherchez pas encore la perfection :
          vous cherchez les angles morts.
        </p>
        <GuideTable
          caption="Les six lignes minimales de la cartographie"
          headers={["À écrire", "Question ordinaire", "Signal d’arrêt"]}
          rows={[
            [
              "Service vendu",
              "Qu’est-ce qui doit continuer à fonctionner ?",
              "Personne ne sait distinguer la fonction critique du confort.",
            ],
            [
              "Données",
              "Que stockons-nous, où et pour combien de temps ?",
              "Une catégorie importante ou son destinataire est inconnu.",
            ],
            [
              "Rôles",
              "Qui peut lire, changer, exporter ou administrer ?",
              "Compte partagé ou accès d’un ancien intervenant.",
            ],
            [
              "Environnements",
              "Production, test et sauvegarde sont-ils distingués ?",
              "Vraies données copiées sans règle dans un environnement de test.",
            ],
            [
              "Tiers",
              "Qui héberge, traite, envoie ou surveille ?",
              "Prestataire critique absent de la liste.",
            ],
            [
              "Sortie",
              "Comment récupérer les données et reprendre l’activité ?",
              "Export ou restauration jamais essayé.",
            ],
          ]}
        />

        <h2 id="preuves">Remplissez huit fiches avec les faits à vérifier</h2>
        <p>
          Une fiche ne doit pas seulement décrire un outil. Elle relie la
          question de l’acheteur, la mesure, la pièce, son propriétaire, son
          dernier test et l’écart restant. Les huit familles suivantes évitent
          de réduire la sécurité à l’hébergement et aux mots de passe.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {proofCards.map((card) => (
            <article
              key={card.number}
              className={`rounded-2xl border p-5 ${card.color}`}
            >
              <p className="m-0 text-xs font-bold tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                FICHE {card.number}
              </p>
              <h3 className="mb-2 mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                {card.title}
              </h3>
              <p className="m-0 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {card.question}
              </p>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Preuve possible :</strong> {card.evidence}
              </p>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Suspendez si :</strong> {card.stop}
              </p>
            </article>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="Un standard aide à vérifier ; il ne certifie pas votre produit"
        >
          OWASP ASVS peut servir à choisir des exigences et des tests. Dire que
          quelques points ont été contrôlés ne permet pas d’écrire « conforme
          OWASP ». De même, lire une recommandation de l’ANSSI ou de la CNIL ne
          constitue ni un label, ni un audit de votre SaaS.
        </InfoBox>

        <h2 id="statuts">
          Pour chaque exigence, choisissez l’un des trois statuts honnêtes
        </h2>
        <GuideTable
          caption="Une décision, une preuve et une conduite à tenir par statut"
          headers={["Statut", "Ce qu’il faut établir", "Décision"]}
          rows={statusRows}
        />
        <p>
          « Planifié » ne signifie pas « probablement disponible avant la mise
          en service ». Écrivez la correction, la mesure temporaire, la personne
          responsable et la date. Faites accepter la réserve dans le support
          contractuel approprié. Si l’exigence change la conception, le coût ou
          le risque, revenez au{" "}
          <Link href="/guides/cahier-des-charges-saas">
            cahier des charges du SaaS
          </Link>{" "}
          avant de promettre.
        </p>

        <h2 id="exemple">
          Exemple illustratif fictif : « le cloud sauvegarde » ne suffit pas
        </h2>
        <p>
          Cet exemple est entièrement fictif et ne décrit aucun client. Nordexia
          édite un SaaS de gestion documentaire. Un prospect de 450 salariés
          demande la date du dernier test de restauration. L’équipe retrouve une
          tâche automatique et plusieurs fichiers de sauvegarde, mais aucun
          compte rendu de restauration. Personne ne sait non plus quel rôle est
          autorisé à lancer la reprise.
        </p>
        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5 dark:border-rose-900 dark:bg-rose-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Mauvaise réponse
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              « Oui, les sauvegardes sont gérées automatiquement par notre
              cloud. Nous garantissons la restauration. »
            </p>
          </article>
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Réponse honnête
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              « La tâche couvre actuellement les fichiers A et B. Nous n’avons
              pas de preuve récente d’une restauration complète. Le point est
              classé bloquant ; telle personne exécute et documente l’essai
              avant la réponse définitive. Aucun délai de reprise n’est engagé à
              ce stade. »
            </p>
          </article>
        </div>
        <p>
          Après l’essai, Nordexia ajoute la date, le périmètre, la durée
          observée, le résultat, les éléments non restaurés et la personne qui a
          validé. Le chiffre obtenu décrit ce test, dans ces conditions ; il ne
          devient pas automatiquement un engagement universel de reprise.
        </p>

        <h2 id="partage">
          Partagez assez pour rassurer, pas assez pour exposer
        </h2>
        <p>
          Préparez un dossier transmissible séparé de vos documents internes.
          Une politique synthétique, un tableau d’exigences, la date d’un test
          et le traitement des écarts peuvent suffire à la première lecture. Un
          secret, une clé, une liste nominative d’administrateurs, une
          architecture exploitable ou des données d’un autre client n’ont rien à
          faire dans la pièce envoyée.
        </p>
        <ul>
          <li>marquez le périmètre et la date de chaque document ;</li>
          <li>
            retirez les données personnelles qui ne sont pas nécessaires ;
          </li>
          <li>limitez les destinataires et la durée d’accès lorsque utile ;</li>
          <li>
            gardez en interne le détail opérationnel nécessaire à la correction
            ;
          </li>
          <li>
            ne transformez jamais une capture d’outil en preuve d’un processus
            réellement exécuté.
          </li>
        </ul>

        <h2 id="registre">Construisez votre premier registre</h2>
        <p>
          Copiez les colonnes ci-dessous dans un tableur ou votre outil de
          travail. Commencez par les demandes reçues, sans chercher à remplir
          cent contrôles. Une ligne non connue est plus utile qu’un « oui » de
          convenance : elle rend visible la décision à prendre.
        </p>
        <GuideTable
          caption="Registre autonome à remplir avant la réponse"
          headers={[
            "Exigence",
            "Faits et preuves à inscrire",
            "Responsabilité et suite",
          ]}
          rows={[
            [
              "Exemple : restauration",
              "Fichiers A et B sauvegardés ; base C à confirmer. Rapport de test ou « absent », avec date réelle ou « jamais ».",
              "Rôle nommé, écart restant, mesure temporaire, action et échéance.",
            ],
            [
              "Accès administrateur",
              "Comptes individuels, facteurs et exceptions décrits. Revue des comptes, avec date et résultat.",
              "Rôle nommé, comptes à fermer ou exception à traiter, avec échéance.",
            ],
            [
              "Incident",
              "Canal, rôles et critères d’escalade. Procédure et exercice, avec date et limites.",
              "Rôle nommé, prochain exercice ou avis spécialisé requis.",
            ],
          ]}
        />

        <h2 id="decision">
          La décision finale : signer, signer sous conditions ou suspendre
        </h2>
        <p>
          Signez avec les preuves existantes lorsque les exigences sont
          comprises et soutenues par des pièces actuelles. Signez sous
          conditions lorsque l’écart, la mesure temporaire, le financement, le
          responsable et l’échéance sont acceptés par les parties. Suspendez
          lorsqu’une donnée critique, un accès, un sous-traitant ou une capacité
          de restauration reste inconnu, ou lorsque la demande exige une
          certification et un audit que vous n’avez pas.
        </p>
        <p>
          Ne pas investir immédiatement dans un nouvel outil de sécurité peut
          aussi être raisonnable. Si le problème vient d’un propriétaire absent,
          d’une procédure jamais jouée ou d’un inventaire incomplet, commencez
          par réparer cette organisation. Achetez ou développez seulement quand
          la mesure répond à un risque nommé et qu’une personne pourra
          l’exploiter.
        </p>

        <h2 id="fit">
          Quand une relecture technique vous fera réellement avancer
        </h2>
        <p>
          Une relecture est utile si vous avez un questionnaire précis, la liste
          des données et des accès, et des documents partageables. Elle ne peut
          ni vous attribuer une certification, ni remplacer l’audit juridique ou
          sectoriel demandé par votre client. Si vous ignorez encore où sont les
          données ou qui administre le SaaS, commencez par cet inventaire.
        </p>

        <GuideInlineCTA
          title="Répondre au questionnaire sans promettre l’impossible"
          description="Présentez le questionnaire, le type de données traité et les réponses encore sans pièce vérifiable. Nous vous aiderons à distinguer ce que vous pouvez affirmer aujourd’hui, ce qui doit être corrigé et ce qui exige un auditeur ou un conseil spécialisé. Ce travail n’est ni une certification, ni un test d’intrusion."
          tags={[
            "Preuves avant promesses",
            "Écarts rendus visibles",
            "Suspension possible",
          ]}
          ctaLabel="Faire relire mes réponses"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>
        <p>
          Sources consultées le 23 juillet 2026. Elles proposent des principes
          généraux ou un standard volontaire ; elles ne prouvent ni la sécurité,
          ni la conformité, ni l’adéquation de votre SaaS à un secteur. Les
          textes, guides et interfaces peuvent évoluer : vérifiez leur version
          avant une décision contractuelle.
        </p>
        <ul>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide de la sécurité des données personnelles
            </a>{" "}
            pour les familles de mesures ; il ne constitue pas une
            certification.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/securite-authentifier-les-utilisateurs"
              target="_blank"
              rel="noopener noreferrer"
            >
              authentifier les utilisateurs
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noopener noreferrer"
            >
              gérer les habilitations
            </a>
            , à adapter au risque et aux rôles.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noopener noreferrer"
            >
              recommandations sur les sauvegardes et leur test
            </a>
            ; la fréquence et les objectifs de reprise dépendent du contexte.
          </li>
          <li>
            ANSSI —{" "}
            <a
              href="https://cyber.gouv.fr/sites/default/files/2022/01/anssi-guide-recommandations_securite_architecture_systeme_journalisation.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              recommandations pour l’architecture d’un système de journalisation
            </a>
            , à proportionner aux besoins et aux données traitées.
          </li>
          <li>
            OWASP —{" "}
            <a
              href="https://owasp.org/www-project-application-security-verification-standard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Security Verification Standard
            </a>
            , base volontaire d’exigences et de tests, pas attestation
            automatique.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles"
              target="_blank"
              rel="noopener noreferrer"
            >
              documenter et, lorsque les critères sont remplis, notifier une
              violation de données
            </a>
            . Le délai de 72 heures n’est pas un délai universel pour tout
            incident.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
