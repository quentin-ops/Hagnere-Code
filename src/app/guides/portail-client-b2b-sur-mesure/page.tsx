import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FormulaBox,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("portail-client-b2b-sur-mesure");

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
        alt: "Scénario fictif d’une attestation dans un portail client B2B, de l’invitation à la clôture",
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
      name: "Portail client B2B",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Un espace client B2B est-il toujours un portail à développer ?",
    answer:
      "Non. Un module déjà inclus dans votre logiciel, un produit standard ou un lien limité à une action peuvent suffire. Le sur-mesure ne devient une option sérieuse que si des règles, rôles ou connexions propres à l’entreprise résistent aux solutions plus simples.",
  },
  {
    question: "Peut-on laisser une entreprise cliente partager un compte ?",
    answer:
      "Un compte partagé empêche d’attribuer clairement une action et complique la révocation d’un départ. Préférez des comptes nominatifs, rattachés côté serveur à l’entreprise et au rôle autorisés.",
  },
  {
    question: "Un identifiant de dossier impossible à deviner suffit-il ?",
    answer:
      "Non. Un identifiant difficile à deviner réduit certains essais, mais ne remplace pas le contrôle d’autorisation. À chaque requête, le serveur doit vérifier la personne, son entreprise, son rôle, l’objet demandé et l’action tentée.",
  },
  {
    question: "Le portail doit-il afficher des informations en temps réel ?",
    answer:
      "Seulement si ce terme est défini et si la source le permet. Affichez l’heure de mise à jour, le dernier état confirmé et une solution de repli lorsque le logiciel source est indisponible, au lieu d’inventer un statut frais.",
  },
  {
    question: "Un portail sur mesure est-il plus sûr par nature ?",
    answer:
      "Non. La sécurité dépend de la conception, des contrôles côté serveur, des tests, des mises à jour et de l’exploitation. Une solution standard bien configurée peut être plus appropriée qu’un développement spécifique mal maintenu.",
  },
];

const scenarioSteps = [
  {
    number: "01",
    title: "Avant l’invitation",
    client:
      "L’entreprise cliente fictive sait qu’une attestation est attendue pour le dossier PB2B-2407, pourquoi elle est demandée et combien de temps elle sera conservée.",
    server:
      "Le dossier PB2B-2407, la finalité, la source, la durée, l’entreprise autorisée et le rôle « déposant » sont définis avant d’ouvrir le service.",
  },
  {
    number: "02",
    title: "Invitation nominative",
    client:
      "Le contact fictif C-17 reçoit une invitation qui lui est propre ; il ne choisit pas librement son entreprise dans une liste.",
    server:
      "Le serveur rattache C-17 à l’entreprise cliente fictive et au rôle prévu. Le navigateur ne décide ni du rattachement ni des droits.",
  },
  {
    number: "03",
    title: "Ouverture du dossier",
    client:
      "Après authentification, C-17 voit uniquement PB2B-2407. Un identifiant modifié dans l’adresse ne révèle ni nom ni contenu d’un autre client.",
    server:
      "Le serveur vérifie la personne, l’entreprise, le rôle, PB2B-2407 et l’action « lire », puis refuse par défaut ce qui n’est pas explicitement autorisé.",
  },
  {
    number: "04",
    title: "Premier dépôt refusé, puis corrigé",
    client:
      "C-17 tente d’abord de déposer « attestation.exe ». Le portail refuse ce format et explique quoi corriger. C-17 sélectionne ensuite « attestation-v1.pdf ».",
    server:
      "Le droit de déposer est revérifié. Extension, type réel, signature binaire du format et taille sont contrôlés ; le PDF est renommé, stocké en privé et maintenu en quarantaine jusqu’au verdict des analyses prévues.",
  },
  {
    number: "05",
    title: "Accusé de réception",
    client:
      "Après le verdict technique, le portail affiche la référence DEP-FICTIF-1, l’heure, le statut « reçu » et la prochaine étape. Il ne présente pas « reçu » comme « validé ».",
    server:
      "DEP-FICTIF-1 est relié une seule fois à PB2B-2407, même si C-17 relance l’envoi après une coupure.",
  },
  {
    number: "06",
    title: "Version 1 refusée",
    client:
      "Le statut passe à « refusé » : la date de fin manque. C-17 voit ce motif utile et l’action « déposer une version corrigée ».",
    server:
      "Une personne interne autorisée enregistre la décision dans l’outil de référence. Le portail restitue ce refus et son heure ; il n’invente pas une décision parallèle.",
  },
  {
    number: "07",
    title: "Version 2 acceptée",
    client:
      "C-17 dépose « attestation-v2.pdf » avec la date corrigée. Après acceptation par le rôle habilité, il télécharge l’accusé autorisé sans adresse publique durable.",
    server:
      "Le serveur conserve les deux versions et revérifie personne, entreprise, rôle, dossier et action au dépôt, à la décision et au téléchargement.",
  },
  {
    number: "08",
    title: "Source indisponible",
    client:
      "Le lendemain, l’outil interne est indisponible. C-17 voit « accepté, dernier état confirmé à 16 h 12 » et le canal de repli prévu.",
    server:
      "Le portail signale l’indisponibilité, conserve l’état daté et encadre les nouvelles tentatives ; il ne fabrique ni validation plus récente ni doublon.",
  },
  {
    number: "09",
    title: "Changement de contact",
    client:
      "C-17 quitte l’entreprise. Son accès est retiré ; le contact fictif C-18 reçoit sa propre invitation et ne reprend pas le même compte.",
    server:
      "Les habilitations sont révoquées et réattribuées nominativement ; l’historique de PB2B-2407 distingue C-17 de C-18.",
  },
  {
    number: "10",
    title: "Clôture",
    client:
      "À la date prévue, PB2B-2407 est clairement clos. La procédure annoncée reste disponible pour exercer un droit ou signaler un incident.",
    server:
      "Dossier, deux versions, journaux et sauvegardes suivent leurs durées documentées ; la clôture n’efface pas arbitrairement ce qui doit rester ni ne garde tout sans limite.",
  },
];

const costRows = [
  [
    "Préparer le travail",
    "Classer les demandes, décider les règles, nettoyer les données, désigner les responsables",
    "Heures internes × coût complet documenté, avec les heures aussi affichées séparément",
  ],
  [
    "Acquérir et configurer",
    "Licences, paramétrage, conception, développement, migration et intégrations",
    "Euros hors taxes + temps interne converti avec le même coût complet documenté",
  ],
  [
    "Prouver les accès",
    "Identité, authentification, droits, tests, sécurité et travail de conformité",
    "Temps initial et récurrent converti avec le coût retenu + coûts externes",
  ],
  [
    "Exploiter les fichiers",
    "Hébergement, stockage, bande passante, analyse, sauvegardes et restauration",
    "Volumes × tarifs + temps d’exploitation converti avec le coût retenu",
  ],
  [
    "Faire fonctionner le service",
    "Supervision, incidents, support client, administration des comptes et formation",
    "Temps observé converti avec le coût retenu + abonnements sur la même période",
  ],
  [
    "Maintenir et faire évoluer",
    "Correctifs, dépendances, documentation, changements métier et nouvelles obligations",
    "Temps converti avec le coût retenu + abonnements et prestations sur la durée commune",
  ],
  [
    "Pouvoir sortir",
    "Export, réversibilité, transfert, archivage et fermeture du service",
    "Temps converti avec le coût retenu + dépenses d’un essai de sortie",
  ],
];

const clientStatuses = [
  {
    state: "Reçu",
    meaning: "Le dépôt est rattaché au dossier et horodaté.",
    nextAction:
      "Suivre l’analyse ou utiliser le canal de repli si l’attente bloque le dossier.",
    boundary: "La pièce n’est pas encore acceptée.",
    color:
      "border-cyan-200 bg-cyan-50/60 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    state: "En analyse",
    meaning: "Une vérification interne est en cours.",
    nextAction:
      "Attendre la décision ou signaler l’urgence par le canal annoncé.",
    boundary: "Une décision favorable n’est pas acquise.",
    color:
      "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    state: "Accepté",
    meaning:
      "Le rôle habilité a confirmé la conformité pour ce dossier précis.",
    nextAction:
      "Poursuivre le dossier ; aucune autre action n’est demandée sur l’attestation.",
    boundary: "Le client n’obtient pas d’autres droits.",
    color:
      "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    state: "Refusé",
    meaning: "Une décision et une action suivante ont été enregistrées.",
    nextAction:
      "Lire le motif utile et déposer une pièce corrigée si cette action est autorisée.",
    boundary: "Le dossier entier n’est pas nécessairement rejeté.",
    color:
      "border-rose-200 bg-rose-50/60 dark:border-rose-900 dark:bg-rose-950/20",
  },
  {
    state: "Source indisponible",
    meaning:
      "Le dernier état confirmé et sa date restent identifiables à l’écran.",
    nextAction: "Réessayer plus tard ou utiliser le canal de repli annoncé.",
    boundary: "Le portail ne suppose pas un nouvel état.",
    color: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
  },
];

const decisionOptions = [
  {
    number: "1",
    title: "Ne pas créer de portail",
    solves:
      "Évite d’ajouter un compte lorsque la réponse humaine reste la plus adaptée.",
    manual: "Réception, recherche, décision et réponse au client.",
    accessAndData:
      "Aucun compte client ; l’équipe récupère la réponse dans la source interne et la transmet.",
    when: "Les demandes sont rares, sensibles, très variables ou mieux traitées avec une personne.",
    revisit:
      "Si le volume, la répétition ou l’attente changent sur une période comparable.",
    color: "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900",
  },
  {
    number: "2",
    title: "Corriger d’abord les données et le travail",
    solves:
      "Fiabilise les états, les responsabilités et la source avant toute exposition.",
    manual: "La réponse au client reste assistée pendant la remise en ordre.",
    accessAndData:
      "Un responsable interne fiabilise la source ; aucun droit externe n’est encore ouvert.",
    when: "La source de vérité, les états ou les responsabilités ne sont pas décidés.",
    revisit: "Quand un parcours réel peut être expliqué sans contradiction.",
    color:
      "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    number: "3",
    title: "Ouvrir un lien sécurisé limité",
    solves:
      "Permet une action ponctuelle sans compte ni navigation permanents.",
    manual:
      "Les autres demandes, exceptions et décisions restent traitées par l’équipe.",
    accessAndData:
      "L’émetteur autorisé révoque le lien ; l’objet reste récupéré depuis la source nommée.",
    when: "Une action isolée suffit : remettre une pièce, signer ou consulter un résultat ponctuel.",
    revisit: "Si plusieurs actions liées deviennent récurrentes.",
    color:
      "border-cyan-200 bg-cyan-50/60 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    number: "4",
    title: "Activer le module déjà inclus",
    solves: "Couvre le parcours prévu avec un outil déjà payé et intégré.",
    manual:
      "Les exceptions non couvertes et le support restent organisés en interne.",
    accessAndData:
      "Un administrateur nommé gère les accès ; l’export utile du logiciel est essayé.",
    when: "L’ERP, le CRM ou un autre outil payé couvre le parcours et les droits utiles.",
    revisit:
      "Si une règle essentielle impose encore un contournement permanent.",
    color:
      "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    number: "5",
    title: "Configurer un produit standard ou un no-code maîtrisé",
    solves: "Couvre un parcours courant sans construire toute l’application.",
    manual:
      "Les exceptions, le support et l’administration restent à la charge de personnes nommées.",
    accessAndData:
      "Un administrateur nommé tient les droits ; données et configuration sont exportées en essai.",
    when: "Le besoin est courant, les règles restent lisibles et une personne peut administrer la solution.",
    revisit:
      "Si les exceptions, volumes ou droits dépassent ce que l’équipe maîtrise.",
    color:
      "border-violet-200 bg-violet-50/60 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    number: "6",
    title: "Développer un portail sur mesure",
    solves:
      "Couvre des règles, rôles et intégrations stables propres à l’entreprise.",
    manual:
      "Les cas hors premier périmètre, le support et les décisions métier restent humains.",
    accessAndData:
      "Les responsables des accès et de la source sont désignés ; export et reprise par un tiers sont documentés.",
    when: "Des règles, rôles, objets ou intégrations propres à l’entreprise résistent aux options précédentes.",
    revisit:
      "Si un produit standard couvre désormais le besoin avec moins de charge.",
    color:
      "border-emerald-200 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
];

export default function PortailClientB2BGuidePage() {
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
          { label: "Portail client B2B" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Partez d’une demande réelle, suivez un dossier de l’invitation à la clôture et choisissez entre six réponses — y compris ne pas créer de portail."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Une action client",
            description: "Commencer par un résultat, pas un menu",
            color: "emerald",
          },
          {
            number: "02",
            title: "Droits côté serveur",
            description: "Cinq dimensions à contrôler",
            color: "blue",
          },
          {
            number: "03",
            title: "Six réponses",
            description: "Le sur-mesure n’est qu’une issue",
            color: "violet",
          },
          {
            number: "04",
            title: "Mesures bornées",
            description: "Période et dénominateurs annoncés",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/back-office-sur-mesure-pme",
            label: "Organiser le traitement interne des dossiers",
          },
          {
            href: "/guides/connecter-erp-crm-logiciel-metier",
            label: "Relier le portail aux logiciels existants",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "Comparer no-code et développement sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cadrer un premier lot testable",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "Comparer logiciel de gestion et sur-mesure",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Découvrir les outils métier sur mesure",
          },
        ]}
        faqTitle="Portail client B2B : les questions avant d’ouvrir un accès"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>Un client appelle : « Où en est ma demande ? »</strong> Votre
          équipe cherche dans le logiciel de gestion, l’outil commercial et les
          emails, puis renvoie un document déjà transmis. Un portail client B2B
          — un espace réservé aux entreprises clientes — n’est utile qu’avec une
          réponse fiable, une action terminable et des droits revérifiés par le
          serveur. Six conclusions honnêtes sont possibles : garder la réponse
          assistée, corriger d’abord les données et le travail interne, ouvrir
          un lien sécurisé pour une action isolée, activer un module déjà
          inclus, configurer un produit standard ou un outil assemblé avec des
          blocs visuels, ou développer sur mesure lorsque des règles, rôles et
          connexions propres à l’entreprise le justifient. Le bon départ n’est
          donc pas un menu : c’est une demande client précise et sa source de
          vérité.
        </p>

        <p>
          Ce guide s’adresse au dirigeant qui veut décider avant de financer. Il
          ne compare pas en détail les plateformes no-code, ne traite pas d’un
          catalogue e-commerce avec commande et paiement, et ne remplace ni une
          analyse juridique ni un audit de sécurité.
        </p>

        <GuideToc
          items={[
            {
              id: "une-action",
              label: "1. Ouvrir une action complète, pas un menu",
            },
            {
              id: "source-interne",
              label: "2. Vérifier la source et le travail interne",
            },
            {
              id: "scenario",
              label: "3. Suivre une attestation de l’invitation à la clôture",
            },
            {
              id: "autorisations",
              label: "4. Contrôler chaque action côté serveur",
            },
            {
              id: "fichiers",
              label: "5. Encadrer dépôts et téléchargements",
            },
            {
              id: "fraicheur",
              label: "6. Afficher une vérité datée et une solution de repli",
            },
            {
              id: "rgpd",
              label: "7. Traiter les données dès la conception",
            },
            {
              id: "six-reponses",
              label: "8. Comparer six réponses honnêtes",
            },
            {
              id: "cout-total",
              label: "9. Comparer le coût total",
            },
            {
              id: "mesures",
              label: "10. Observer et mesurer sans extrapoler",
            },
            {
              id: "tests",
              label: "11. Tester les frontières entre entreprises",
            },
            {
              id: "prochaine-action",
              label: "12. Décider la prochaine action",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="une-action">
          1. Ouvrez une action complète, pas un menu de fonctions
        </h2>

        <p>
          « Donner accès aux documents » reste trop vague. Le client doit
          pouvoir accomplir un résultat observable : par exemple déposer
          l’attestation demandée, savoir qu’elle a été reçue, suivre sa décision
          et comprendre ce qu’il doit faire ensuite. Le début et la fin sont
          nommés ; les cas qui exigent encore une personne le sont aussi.
        </p>

        <p>
          Une page d’accueil riche n’est pas nécessaire si l’action échoue au
          milieu. Avant tout écran, écrivez la fiche ci-dessous avec les équipes
          qui répondent aujourd’hui au client. Elle est volontairement copiable
          : le dirigeant peut la remplir sans acheter d’outil ni solliciter un
          prestataire.
        </p>

        <div className="not-prose my-7 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-sm dark:border-zinc-800">
          <div className="border-b border-white/10 px-5 py-4">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-emerald-400">
              Fiche autonome — une action client
            </p>
          </div>
          <pre className="m-0 overflow-x-auto whitespace-pre-wrap px-5 py-5 font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`Période réelle observée :
Canaux inclus :
Règle de dédoublonnage :
Catégories de demandes :
Exclusions annoncées :
Données manquantes :
Demande client précise :
Résultat attendu par le client :
Début et fin de l’action :
Personne autorisée :
Entreprise autorisée :
Rôle :
Objet concerné :
Actions permises :
Source de vérité :
Date ou heure à afficher :
Accusé de réception :
Canal de repli :
Données sensibles ou à minimiser :
Fichiers acceptés et refusés :
Finalité et base légale à confirmer :
Durées de conservation :
Prestataires et transferts à vérifier :
Coûts connus :
Inconnues à confirmer :`}
          </pre>
        </div>

        <InfoBox variant="blue" title="Une action autonome a aussi une limite">
          L’autonomie ne signifie pas « aucun humain ». Elle signifie que le
          client peut terminer le cas annoncé sans appeler pour compenser une
          information absente. Un refus, une exception ou un incident peut
          légitimement basculer vers une personne si ce passage est explicite.
        </InfoBox>

        <h2 id="source-interne">
          2. Vérifiez la source et le travail interne avant d’ouvrir une fenêtre
          au client
        </h2>

        <p>
          Un portail ne répare pas une règle indécise. Si le service commercial
          appelle un dossier « accepté » alors que l’administration le considère
          seulement « reçu », l’espace client rendra le désaccord visible sans
          le résoudre. Nommez le logiciel ou le registre qui fait foi, la
          personne qui peut changer l’état et la conduite à tenir si cette
          source est indisponible.
        </p>

        <GuideTable
          caption="Questions à résoudre dans l’entreprise avant d’ouvrir une action au client"
          headers={["Question interne", "Réponse attendue", "Signal d’arrêt"]}
          rows={[
            [
              "Quelle donnée fait foi ?",
              "Une source nommée pour le dossier, son état et la pièce reçue",
              "Deux outils peuvent modifier la même vérité sans règle d’arbitrage",
            ],
            [
              "Qui décide ?",
              "Un rôle responsable de chaque transition : reçu, en analyse, accepté ou refusé",
              "Le portail devrait déduire lui-même une décision métier",
            ],
            [
              "Que voit le client ?",
              "La donnée utile, sa date et l’action suivante",
              "L’équipe ne sait pas expliquer la différence entre les états",
            ],
            [
              "Que se passe-t-il en panne ?",
              "Dernier état confirmé, heure et canal de repli",
              "Le projet prévoit d’afficher un état supposé ou vide sans explication",
            ],
          ]}
        />

        <p>
          La démarche de{" "}
          <a
            href="https://design.numerique.gouv.fr/bien-concevoir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            conception de services de DesignGouv
          </a>{" "}
          invite à partir des besoins et des situations réelles. Le guide{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/pourquoi-utiliser-des-outils"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num sur la numérisation des processus
          </a>{" "}
          rappelle également que l’outil s’inscrit dans l’organisation. Ces
          ressources orientent la méthode ; elles ne prouvent pas qu’un portail
          produira un gain dans votre entreprise.
        </p>

        <h2 id="scenario">
          3. Suivez une attestation de l’invitation à la clôture
        </h2>

        <p>
          <strong>Exemple illustratif entièrement fictif :</strong> la PME, son
          entreprise cliente, la personne invitée, le dossier et tous les états
          ci-dessous sont inventés avant tout chiffre ou résultat. Le scénario
          ne porte aucun nom de client. Il ne décrit aucun client de Hagnéré
          Code et ne constitue ni une promesse de délai, ni une preuve de
          réduction des appels.
        </p>

        <p>
          Une PME attend d’une entreprise cliente une attestation nécessaire
          pour faire avancer un dossier. Aujourd’hui, la pièce arrive par email,
          puis le client rappelle pour savoir si elle est exploitable. Le
          parcours proposé couvre une seule action : remettre cette attestation
          et suivre sa décision jusqu’à la clôture.
        </p>

        <div className="not-prose my-8 space-y-4">
          {scenarioSteps.map((step) => (
            <article
              key={step.number}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex flex-col gap-3 border-b border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:items-center">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                  {step.number}
                </span>
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {step.title}
                </h3>
              </div>
              <div className="grid gap-0 sm:grid-cols-2">
                <div className="border-b border-zinc-200 p-5 dark:border-zinc-800 sm:border-r sm:border-b-0">
                  <p className="m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400">
                    Ce que comprend le client
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {step.client}
                  </p>
                </div>
                <div className="p-5">
                  <p className="m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700 dark:text-blue-400">
                    Ce que doit faire le système
                  </p>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {step.server}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p>
          Ce parcours est complet parce qu’il inclut aussi l’accès refusé, la
          panne, le changement de contact et la fin de conservation. Une
          démonstration qui montre seulement un dépôt réussi ne suffit pas à
          décider.
        </p>

        <h2 id="autorisations">
          4. Contrôlez chaque objet et chaque action côté serveur
        </h2>

        <p>
          Cacher un bouton ne retire pas un droit. Le navigateur appartient à
          l’utilisateur : une personne peut modifier une adresse, rejouer une
          requête ou transmettre un lien. Le serveur doit donc prendre la
          décision d’autorisation à chaque lecture, dépôt, modification,
          validation, export, suppression ou opération d’administration.
        </p>

        <FormulaBox>
          {
            "Autorisation d’une requête = personne authentifiée\n+ entreprise rattachée côté serveur\n+ rôle actif\n+ objet explicitement accessible\n+ action explicitement permise\n\nSi une dimension manque ou ne correspond pas : refuser par défaut."
          }
        </FormulaBox>

        <p>
          Cette règle suit les recommandations de l’{" "}
          <a
            href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            OWASP Authorization Cheat Sheet
          </a>{" "}
          : moindre privilège, refus par défaut et contrôle à chaque requête. Le
          guide OWASP sur les{" "}
          <a
            href="https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            références directes non sécurisées
          </a>{" "}
          précise qu’un identifiant complexe ne remplace pas l’autorisation. La
          recherche elle-même doit être limitée aux objets autorisés, pas
          seulement l’écran affiché après la recherche.
        </p>

        <GuideTable
          caption="Exemples de contrôles d’autorisation à répéter côté serveur"
          headers={["Action demandée", "Objet", "Contrôle avant réponse"]}
          rows={[
            [
              "Lire",
              "Dossier ou statut",
              "Personne + entreprise + rôle + dossier (objet) + lecture (action)",
            ],
            [
              "Déposer",
              "Nouvelle attestation",
              "Personne + entreprise + rôle + dossier (objet) + dépôt (action)",
            ],
            [
              "Modifier",
              "Métadonnée autorisée",
              "Personne + entreprise + rôle + métadonnée (objet) + modification (action)",
            ],
            [
              "Valider",
              "Décision métier",
              "Personne + entreprise + rôle habilité + dossier (objet) + validation (action)",
            ],
            [
              "Télécharger ou exporter",
              "Fichier ou ensemble de données",
              "Personne + entreprise + rôle + fichier ou données (objet) + téléchargement ou export (action), même après transfert du lien",
            ],
            [
              "Supprimer",
              "Objet clos",
              "Personne + entreprise + rôle + objet + suppression (action), puis règle de conservation et traçabilité",
            ],
            [
              "Administrer",
              "Compte, rôle ou rattachement",
              "Personne + entreprise concernée + rôle d’administration + compte ou rattachement (objet) + action demandée",
            ],
          ]}
        />

        <p>
          Des comptes nominatifs permettent aussi de retirer le bon accès lors
          d’un départ. Nommez la personne qui revoit les habilitations,
          faites-le au moins une fois par an et à chaque départ ou changement de
          fonction. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de gérer les habilitations
          </a>{" "}
          selon les besoins et de les revoir régulièrement, tandis que sa fiche
          sur{" "}
          <a
            href="https://www.cnil.fr/fr/securite-authentifier-les-utilisateurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            l’authentification
          </a>{" "}
          décrit notamment l’authentification multifacteur. Son choix dépend du
          risque du service ; ce guide ne la présente pas comme une obligation
          universelle.
        </p>

        <h2 id="fichiers">
          5. Encadrez les dépôts et les téléchargements comme des actions
          sensibles
        </h2>

        <p>
          Le fichier est à la fois une donnée métier et une entrée non fiable.
          Accepter « PDF » dans le nom ou le type déclaré par le navigateur ne
          suffit pas. La{" "}
          <a
            href="https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche OWASP consacrée aux téléversements
          </a>{" "}
          recommande plusieurs contrôles complémentaires, à adapter au contexte.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Avant le transfert",
              text: "Revérifier le droit de déposer, limiter les extensions utiles, annoncer la taille maximale et protéger la requête.",
            },
            {
              title: "Sur le contenu",
              text: "Comparer extension, type réel et signature binaire du format — les premiers éléments techniques qui identifient le type — sans faire confiance au seul Content-Type envoyé par le navigateur.",
            },
            {
              title: "Au stockage",
              text: "Générer le nom, stocker en privé et garder le fichier en quarantaine jusqu’au verdict de l’antivirus, du bac à sable ou de la neutralisation prévue selon le risque. Si l’analyse est indisponible, il reste inaccessible au métier et au téléchargement.",
            },
            {
              title: "En cas de refus",
              text: "Ne pas publier ni rattacher le fichier au dossier ; donner un motif utile au client sans divulguer un détail exploitable du système.",
            },
            {
              title: "Au téléchargement",
              text: "Revérifier la personne, l’entreprise, le rôle, le dossier et l’action au moment de servir le fichier.",
            },
            {
              title: "Dans la durée",
              text: "Conserver la trace utile, appliquer la durée décidée, tester restauration et suppression selon les règles documentées.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="Un lien privé ne doit pas devenir public par transfert"
        >
          Évitez l’adresse durable qui suffit à télécharger le fichier sans
          nouveau contrôle. Un lien temporaire peut participer au mécanisme,
          mais le serveur doit encore décider si la personne et l’action sont
          autorisées au moment de l’accès.
        </InfoBox>

        <InfoBox
          variant="blue"
          title="Un fichier accepté par un scanner n’est pas garanti sans danger"
        >
          La quarantaine et plusieurs contrôles réduisent le risque ; ils ne
          prouvent pas l’absence de toute menace. Définissez aussi qui traite
          une analyse indisponible, un résultat douteux ou un incident après
          téléchargement.
        </InfoBox>

        <h2 id="fraicheur">
          6. Affichez une vérité datée et une solution de repli
        </h2>

        <p>
          « Temps réel » n’a aucun sens sans délai défini. Le portail peut lire
          directement le logiciel de gestion intégré — l’ERP —, recevoir une
          mise à jour de l’outil de relation client — le CRM — ou synchroniser
          périodiquement une copie. Chacun de ces choix crée une fraîcheur et
          des modes de panne différents.
        </p>

        <div
          className="not-prose my-7 grid gap-4 sm:grid-cols-2"
          aria-label="États lisibles du dossier fictif et messages associés"
        >
          {clientStatuses.map((status) => (
            <article
              key={status.state}
              className={`rounded-2xl border p-5 ${status.color}`}
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {status.state}
              </h3>
              <dl className="mb-0 mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Ce que cela signifie
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-700 dark:text-zinc-300">
                    {status.meaning}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Prochaine action visible
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-700 dark:text-zinc-300">
                    {status.nextAction}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Limite à ne pas franchir
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-700 dark:text-zinc-300">
                    {status.boundary}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Définissez pour chaque information sa source, sa dernière mise à jour,
          le délai acceptable et le canal de repli. Si l’ERP ou le CRM ne répond
          pas, l’écran peut dire « dernier état confirmé à… » et proposer un
          contact pour l’urgence. Il ne doit ni effacer une information encore
          vraie, ni annoncer une validation qu’il n’a pas reçue.
        </p>

        <h2 id="rgpd">7. Traitez les données personnelles dès la conception</h2>

        <p>
          Un portail entre entreprises traite souvent des noms, coordonnées,
          traces de connexion et fichiers qui concernent des personnes. Le{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement général sur la protection des données
          </a>{" "}
          demande notamment une finalité, une base juridique, des données
          adéquates et limitées, une durée maîtrisée et des mesures de sécurité
          adaptées. Le fait que le client soit une entreprise ne fait donc pas
          disparaître les personnes.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
          <p className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
            Questions à documenter avant l’ouverture
          </p>
          <ul className="mb-0 mt-4 space-y-3 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li>
              qui est le responsable du traitement, quel contact RGPD ou délégué
              à la protection des données peut être joint et auprès de quelle
              autorité une réclamation peut être adressée ;
            </li>
            <li>
              quelle finalité précise justifie chaque donnée et quelle base
              juridique est retenue ;
            </li>
            <li>
              quelle information claire est remise aux personnes, quels
              destinataires reçoivent les données et comment leurs droits
              s’exercent ;
            </li>
            <li>
              quelles données sont réellement nécessaires, exactes et
              corrigibles ;
            </li>
            <li>
              quelles durées s’appliquent aux dossiers, fichiers, comptes,
              journaux et sauvegardes ;
            </li>
            <li>
              quels prestataires interviennent, avec quelles instructions,
              garanties et éventuels transferts ;
            </li>
            <li>
              qui tient le registre, gère les incidents et revoit les accès ;
            </li>
            <li>
              si le traitement est susceptible d’engendrer un risque élevé, qui
              décide et conduit l’analyse d’impact nécessaire.
            </li>
          </ul>
        </div>

        <p>
          La CNIL fournit des repères sur la{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            minimisation
          </a>
          , l’{" "}
          <a
            href="https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence"
            target="_blank"
            rel="noopener noreferrer"
          >
            information des personnes
          </a>
          , les{" "}
          <a
            href="https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees"
            target="_blank"
            rel="noopener noreferrer"
          >
            durées de conservation
          </a>
          , la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            sous-traitance
          </a>{" "}
          et l’{" "}
          <a
            href="https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd"
            target="_blank"
            rel="noopener noreferrer"
          >
            analyse d’impact
          </a>
          . Cette liste aide à préparer le travail ; elle ne conclut pas à la
          conformité du portail et ne remplace pas un conseil juridique adapté.
        </p>

        <h2 id="six-reponses">
          8. Comparez six réponses honnêtes au même besoin
        </h2>

        <p>
          N’imposez pas le portail comme conclusion de l’étude. Faites passer
          chacune des six réponses dans le même parcours, avec les mêmes
          volumes, exigences de droits, fichiers, connexions et support. Une
          option moins ambitieuse peut être la meilleure décision.
        </p>

        <p>
          Ici, « no-code » désigne un outil assemblé et configuré avec des blocs
          visuels plutôt que développé de façon classique. Il demande tout de
          même une administration, des tests et de la maintenance.
        </p>

        <div
          className="not-prose my-8 grid gap-4 lg:grid-cols-2"
          aria-label="Six conclusions possibles pour la première action client"
        >
          {decisionOptions.map((option) => (
            <article
              key={option.number}
              className={`rounded-2xl border p-5 sm:p-6 ${option.color}`}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                  {option.number}
                </span>
                <h3 className="m-0 pt-1 text-base font-semibold text-zinc-950 dark:text-white">
                  {option.title}
                </h3>
              </div>
              <dl className="mb-0 mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Ce que cette réponse résout
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-700 dark:text-zinc-300">
                    {option.solves}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Ce qui reste manuel
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-700 dark:text-zinc-300">
                    {option.manual}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Accès et récupération des données
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-700 dark:text-zinc-300">
                    {option.accessAndData}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Quand cette réponse est cohérente
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-700 dark:text-zinc-300">
                    {option.when}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Quand la revoir
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-700 dark:text-zinc-300">
                    {option.revisit}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <InfoBox
          variant="emerald"
          title="Le sur-mesure n’est ni la récompense ni le choix le plus sûr par nature"
        >
          Il sert lorsque la spécificité utile justifie son coût et son
          entretien. Un module standard correctement configuré peut être plus
          robuste ; un portail spécifique peut aussi être préférable si les
          règles indispensables ne rentrent pas ailleurs. La démonstration doit
          porter sur le parcours, pas sur l’étiquette de la solution.
        </InfoBox>

        <h2 id="cout-total">9. Comparez le coût total sur la même durée</h2>

        <p>
          Le devis initial n’est qu’une ligne. Choisissez une durée commune, le
          même volume de comptes, de dossiers et de fichiers, les mêmes actions
          et le même niveau de risque et de support. Toute donnée inconnue reste
          « à confirmer » : elle ne vaut jamais zéro par défaut. Pour obtenir un
          total en euros, transformez les heures et les jours internes avec un
          coût complet documenté et identique pour les six réponses. Si ce coût
          n’est pas disponible, présentez deux résultats séparés — dépenses en
          euros et charge en heures ou en jours — sans les additionner.
        </p>

        <GuideTable
          caption="Postes à intégrer dans le coût total d’un portail ou de son alternative"
          headers={["Poste", "Éléments à inclure", "Méthode commune"]}
          rows={costRows}
        />

        <FormulaBox>
          {
            "Coût total en euros sur la durée choisie\n= dépenses externes hors taxes\n+ (heures internes × coût complet horaire documenté)\n+ (jours internes × coût complet journalier documenté)\n\nCharge interne à afficher aussi séparément\n= heures internes + (jours internes × durée journalière retenue)\n\nNe jamais additionner directement des euros, des heures et des jours.\n\n« À confirmer » = valeur inconnue.\n0 € = absence de coût vérifiée.\n« Non applicable » = poste exclu avec une raison écrite."
          }
        </FormulaBox>

        <p>
          Gardez les bénéfices dans une colonne séparée. Une heure rendue
          disponible n’est pas automatiquement une économie : indiquez si elle
          est réellement réaffectée à une tâche utile, si une dépense est évitée
          ou si le bénéfice reste qualitatif. Aucun retour sur investissement
          universel ne peut être déduit avant observation.
        </p>

        <h2 id="mesures">
          10. Observez une période réelle et mesurez sans extrapoler
        </h2>

        <p>
          Avant d’extraire quoi que ce soit, choisissez une période qui couvre
          le cycle utile et, si elles comptent, une clôture, une saison ou un
          renouvellement. Annoncez les canaux inclus — emails, téléphone,
          formulaires, tickets et logiciels —, la règle de dédoublonnage, les
          catégories, les exclusions et les données manquantes. Classez toutes
          les demandes accessibles. Si l’observation n’est pas exhaustive,
          publiez la méthode d’échantillonnage, sa couverture et ses biais ; ne
          l’extrapolez pas silencieusement.
        </p>

        <FormulaBox>
          {
            "Part éligible à l’autonomie (%)\n= demandes que le client pourrait terminer seul ÷ demandes observées dédoublonnées × 100\n\nDélai de réponse actuel\n= date et heure de la réponse utile − date et heure de réception\nÀ présenter avec médiane, quartiles et volume quand les données le permettent.\n\nM = actions éligibles commencées dont la fenêtre d’observation est terminée\n\nSuccès autonome (%)\n= actions terminées sans intervention de l’équipe ÷ M × 100\n\nAchèvement assisté (%)\n= actions terminées avec intervention de l’équipe ÷ M × 100\n\nAbandon (%)\n= actions non terminées à la fin de la fenêtre annoncée ÷ M × 100\n\nFraîcheur\n= heure d’affichage − heure de mise à jour de la source"
          }
        </FormulaBox>

        <p>
          Une demande encore sans réponse à la date d’arrêt n’a pas de délai
          achevé. Ne la faites pas disparaître de la mesure : publiez à côté le
          nombre de demandes toujours en attente, leur ancienneté à cette date
          et la part qu’elles représentent. La médiane des délais achevés doit
          donc être accompagnée de ce volume en attente et de la règle de
          clôture utilisée.
        </p>

        <p>Vérifiez aussi l’identité de classement :</p>

        <FormulaBox>
          {
            "Demandes éligibles + demandes non éligibles + demandes inclassables\n= demandes observées dédoublonnées\n\nSuccès autonomes + achèvements assistés + abandons\n= M"
          }
        </FormulaBox>

        <p>
          Si un dénominateur vaut zéro, le taux est « non calculable », pas 0 %.
          Les actions dont la fenêtre est encore ouverte sont comptées à part et
          n’entrent pas dans M. Conservez le volume à côté de chaque pourcentage
          et ne fixez ni taille d’échantillon ni durée universelle. Les
          incidents confirmés de droit sont comptés à part des échecs de
          connexion. Les refus attendus lors de tests négatifs prouvent un
          scénario de test réussi ; ce ne sont pas des incidents.
        </p>

        <InfoBox variant="amber" title="Mesurer n’autorise pas à promettre">
          Une baisse observée des demandes assistées peut venir de la saison,
          d’un changement de clientèle ou d’un autre processus. Comparez des
          périodes cohérentes, documentez les changements et présentez les
          limites avant d’attribuer un effet au portail.
        </InfoBox>

        <h2 id="tests">
          11. Testez les frontières entre entreprises, pas seulement le chemin
          réussi
        </h2>

        <p>
          Préparez au minimum deux entreprises, deux rôles et un objet
          appartenant à chacune. Pour chaque lecture, dépôt, modification,
          validation, export, suppression et action d’administration, essayez au
          minimum quatre combinaisons : tout est autorisé ; bonne entreprise
          mais mauvais rôle ; bon objet mais mauvaise action ; objet d’une autre
          entreprise. Un test manuel visible complète les contrôles automatisés
          : il vérifie aussi que le refus ne révèle ni nom, ni statut, ni
          existence de l’objet voisin.
        </p>

        <GuideTable
          caption="Épreuves minimales du parcours fictif avant son ouverture"
          headers={["Épreuve", "Résultat attendu", "Ce qu’elle ne prouve pas"]}
          rows={[
            [
              "Parcours autorisé",
              "Invitation, lecture, dépôt, décision et clôture fonctionnent pour le bon rôle",
              "Les cas interdits sont correctement bloqués",
            ],
            [
              "Identifiant modifié",
              "Le dossier de l’autre entreprise est refusé sans fuite de contenu",
              "Toutes les variantes d’attaque sont absentes",
            ],
            [
              "Bonne entreprise, mauvais rôle",
              "L’action interdite est refusée même si la personne appartient au bon client",
              "Tous les rôles ont été correctement conçus",
            ],
            [
              "Bon objet, mauvaise action",
              "Une personne autorisée à lire ne peut ni valider, ni exporter, ni supprimer sans droit distinct",
              "Toutes les opérations possibles ont été inventoriées",
            ],
            [
              "Lien transféré",
              "Le téléchargement exige encore une autorisation actuelle",
              "Le stockage entier est exempt de faiblesse",
            ],
            [
              "Rôle révoqué",
              "La personne perd immédiatement les actions retirées",
              "Le processus RH de départ est toujours exécuté",
            ],
            [
              "Fichier invalide",
              "Le dépôt est refusé, non publié et expliqué utilement",
              "Toute menace inconnue sera détectée",
            ],
            [
              "Analyse de fichier indisponible",
              "Le fichier reste en quarantaine, inaccessible au métier et au téléchargement",
              "Le service d’analyse ne tombera jamais en panne",
            ],
            [
              "Source indisponible",
              "Le dernier état confirmé, sa date et le canal de repli sont visibles",
              "La source ne tombera jamais en panne",
            ],
            [
              "Nouvelle tentative",
              "La reprise ne crée ni double fichier ni double événement métier",
              "Toutes les coupures réseau sont couvertes",
            ],
            [
              "Clôture et durées",
              "Accès, dossier, fichier, journaux et sauvegardes suivent la règle documentée",
              "La conformité juridique globale du traitement",
            ],
          ]}
        />

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-tracer-les-operations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL encadre la traçabilité des opérations
          </a>{" "}
          et publie un{" "}
          <a
            href="https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide de sécurité des données personnelles
          </a>
          . Une trace utile aide à enquêter et à attribuer les actions ; elle ne
          justifie pas une conservation illimitée. Les tests ci-dessus
          démontrent un comportement attendu à un instant donné, jamais
          l’absence de toute faille.
        </p>

        <h2 id="prochaine-action">
          12. Décidez la prochaine action, même si elle n’est pas technique
        </h2>

        <p>
          Vous êtes prêt à comparer les solutions si une demande réelle est
          observée, si sa source et ses états sont compris, si les personnes
          autorisées peuvent être nommées et si quelqu’un sera disponible pour
          essayer les cas refusés autant que le cas réussi. Commencez par une
          seule action et gardez la réponse assistée comme solution de repli.
        </p>

        <p>
          Commencez autrement si la règle métier change encore, si personne ne
          peut décider d’un statut, si la qualité des données est inconnue, si
          un incident demande d’abord une réponse spécialisée ou si un module
          déjà payé n’a pas encore été essayé. Dans ces cas, clarifier le
          travail est déjà une décision utile.
        </p>

        <div className="not-prose relative my-10 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
          <div className="pointer-events-none absolute -top-20 right-0 size-64 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 size-56 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="relative">
            <p className="m-0 text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-400">
              Si vous voulez confronter les six réponses
            </p>
            <h3 className="mb-0 mt-3 text-lg font-bold tracking-tight text-white sm:text-xl">
              Présentez la demande client, pas une liste d’écrans
            </h3>
            <p className="mb-0 mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Le lien ouvre le formulaire de projet. Décrivez l’action, les
              outils qui font foi et les cas qui doivent rester assistés. Une
              personne de l’équipe relira votre demande et vous répondra ; le
              formulaire ne produit ni diagnostic automatique, ni délai, ni
              recommandation garantie.
            </p>
            <Link
              href="/demarrer-un-projet"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Choisir la première action à ouvrir aux clients
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Ce guide fournit une méthode générale de décision. Il ne garantit ni
          adoption, ni baisse des appels, ni gain de temps, ni sécurité
          intrinsèque, ni conformité réglementaire. Les règles, risques,
          contrats, volumes, coûts et obligations doivent être vérifiés dans
          votre contexte. Les sources ci-dessous ont principalement cadré les
          autorisations, fichiers, données personnelles et choix de conception.
        </p>

        <ul>
          <li>
            <a
              href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP — Authorization Cheat Sheet
            </a>{" "}
            : refus par défaut, moindre privilège et contrôle à chaque requête.
          </li>
          <li>
            <a
              href="https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP — Insecure Direct Object Reference Prevention
            </a>{" "}
            : portée des recherches et contrôle des objets demandés.
          </li>
          <li>
            <a
              href="https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP — File Upload Cheat Sheet
            </a>{" "}
            : défense en profondeur pour dépôts et stockage.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Guide de la sécurité des données personnelles
            </a>{" "}
            : repères de sécurité à adapter au risque.
          </li>
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Règlement (UE) 2016/679
            </a>{" "}
            : principes, droits, responsabilités et sécurité des traitements.
          </li>
          <li>
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DesignGouv — Bien concevoir un service numérique
            </a>{" "}
            : besoins, parcours, accessibilité et amélioration.
          </li>
          <li>
            <a
              href="https://www.odoo.com/documentation/19.0/fr/applications/websites/ecommerce/customer_accounts.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Odoo — Comptes clients et accès au portail
            </a>{" "}
            : exemple documenté de fonctions déjà présentes dans un produit
            standard, sans recommandation universelle de cet éditeur.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
