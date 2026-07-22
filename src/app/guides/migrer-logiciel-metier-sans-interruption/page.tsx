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

const guide = getGuide("migrer-logiciel-metier-sans-interruption");

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
        alt: "Chronologie d’une migration de logiciel métier maîtrisée",
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
      name: "Migrer un logiciel métier sans interrompre l’activité",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Peut-on vraiment changer de logiciel sans aucune coupure ?",
    answer:
      "Il est parfois possible de rendre la coupure presque invisible, mais personne ne devrait le promettre sans connaître vos données, vos connexions et vos opérations. L’objectif sérieux est de choisir une fenêtre acceptable, de prévoir un fonctionnement temporaire et de savoir revenir à l’ancien outil si un contrôle important échoue.",
  },
  {
    question: "Faut-il faire fonctionner les deux logiciels en parallèle ?",
    answer:
      "Seulement si chaque information conserve une source clairement désignée et si la période a une fin. Un fonctionnement parallèle peut rassurer et permettre des comparaisons ; il peut aussi créer deux versions différentes des clients, stocks ou commandes si chacun saisit où il veut.",
  },
  {
    question: "Quelles données faut-il reprendre ?",
    answer:
      "Reprenez ce qui est nécessaire au travail, au service des clients et aux obligations applicables à votre entreprise. Certaines données doivent être actives dans le nouveau logiciel, d’autres peuvent rester dans une archive consultable, et d’autres ne doivent pas être conservées sans raison.",
  },
  {
    question: "Combien de répétitions faut-il prévoir ?",
    answer:
      "Il n’existe pas de nombre universel. Répétez jusqu’à obtenir une séquence reproductible, des temps compatibles avec votre fenêtre et aucun écart bloquant sur les opérations ou les données choisies. Une nouvelle répétition est nécessaire après une modification importante du logiciel ou de la méthode de copie.",
  },
  {
    question: "Qui décide de continuer ou de revenir à l’ancien outil ?",
    answer:
      "Une personne nommée avant le jour prévu, avec l’avis des responsables des données, du logiciel et du travail quotidien. Les critères sont écrits à l’avance. Cette organisation évite qu’une équipe poursuive la mise en service tandis qu’une autre recommence déjà à saisir dans l’ancien système.",
  },
  {
    question: "Quand peut-on fermer l’ancien logiciel ?",
    answer:
      "Après avoir rapproché les dernières saisies, traité les erreurs importantes, vérifié les opérations de clôture et décidé ce qui doit rester consultable. Fermer trop tôt enlève une solution de secours ; maintenir deux outils sans date de fin entretient les doubles saisies et les écarts.",
  },
  {
    question: "Que faire si la sauvegarde n’a jamais été restaurée ?",
    answer:
      "Repoussez toute opération irréversible. Faites restaurer une copie dans un espace séparé et vérifiez que les données et les éléments nécessaires au redémarrage sont présents. Un message indiquant que la sauvegarde a réussi ne démontre pas que le logiciel peut réellement repartir.",
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
          { label: "Migrer un logiciel métier sans interruption" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre entreprise doit changer de logiciel, mais les commandes, interventions ou factures ne peuvent pas attendre ? Préparez la copie des données, répétez tout le passage vers le nouvel outil et décidez à l’avance quand continuer ou revenir temporairement à l’ancien."
        heroAction={{ href: "#lundi-matin", label: "Préparer le changement" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "3 façons de migrer",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Essai complet et reproductible",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Continuer ou revenir",
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
            href: "/services/outils-internes-sur-mesure",
            label: "Applications métier et outils internes",
          },
          {
            href: "/services/maintenance-evolution",
            label: "Maintenance et évolution d’applications",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Reprendre un logiciel métier existant",
          },
          {
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application métier",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Préparer le contrat après la migration",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Décrire les opérations à conserver",
          },
        ]}
        faqTitle="Migration d’un logiciel métier : les questions pratiques"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous devez remplacer un logiciel qui organise vos commandes, vos
          interventions, vos stocks ou vos factures, mais votre entreprise ne
          peut pas s’arrêter pendant le changement. La bonne méthode n’est pas
          de promettre une migration sans aucun incident. Elle consiste à{" "}
          <strong>
            répéter tout le passage de l’ancien logiciel au nouveau — ce que les
            équipes techniques appellent la bascule —, vérifier les données et
            le travail réel, puis décider avant le jour prévu ce qui autorise la
            mise en service ou impose un retour temporaire à l’ancien outil
          </strong>
          . Ce guide vous explique quoi préparer à l’avance, quoi contrôler le
          jour du changement et quand il vaut mieux reporter.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Gardez l’ancien logiciel comme référence tant que le nouveau n’a pas
          réussi un essai complet et reproductible : copie des données,
          dernières modifications, connexions, droits des utilisateurs et
          opérations principales. Fixez une heure de décision et des critères
          écrits. Si un point indispensable échoue, revenez à l’ancien outil,
          rapprochez les saisies réalisées entre-temps et choisissez une
          nouvelle date.
        </InfoBox>

        <GuideToc
          items={[
            { id: "lundi-matin", label: "1. Protéger le lundi matin" },
            { id: "trois-methodes", label: "2. Choisir comment migrer" },
            {
              id: "j-moins-30",
              label: "3. À préparer plusieurs semaines avant",
            },
            { id: "j-moins-7", label: "4. Répéter toute la bascule" },
            { id: "jour-j", label: "5. Exécuter le changement" },
            { id: "revenir", label: "6. Savoir revenir à l’ancien outil" },
            { id: "exemple", label: "7. Exemple fictif recalculable" },
            { id: "apres", label: "8. Surveiller la première semaine" },
            {
              id: "fermer",
              label: "9. Fermer ou archiver l’ancien logiciel",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <p>
          Les repères « plusieurs semaines avant », « avant le jour prévu » et «
          première semaine » servent à ordonner les décisions. Ils ne forment
          pas un calendrier universel : une migration simple peut demander moins
          de temps, tandis qu’un logiciel très lié à l’activité peut exiger
          plusieurs répétitions et une préparation bien plus longue.
        </p>

        <InfoBox variant="amber" title="Une cyberattaque change la procédure">
          Si vous soupçonnez une intrusion, une fuite ou une altération
          volontaire des données, ne traitez pas la situation comme une
          migration ordinaire. Préservez les éléments utiles, limitez les accès
          et faites intervenir les personnes compétentes en réponse à incident.
          Ce guide concerne une transition préparée, pas une attaque en cours.
        </InfoBox>

        <h2 id="lundi-matin">
          1. Commencez par ce que l’entreprise doit encore faire lundi matin
        </h2>

        <p>
          Une migration ne se juge pas au nombre d’écrans terminés. Elle se juge
          sur le travail que votre entreprise pourra réellement accomplir après
          le changement. Écrivez d’abord trois opérations qui ne peuvent pas
          attendre : planifier une intervention, préparer une commande,
          encaisser un paiement, expédier un colis ou produire une facture, par
          exemple.
        </p>

        <p>Pour chacune, répondez à quatre questions ordinaires :</p>

        <ul>
          <li>
            <strong>Qui réalise l’opération ?</strong> Nommez la fonction, pas
            seulement « les utilisateurs ».
          </li>
          <li>
            <strong>Quelles informations lui faut-il ?</strong> Un client, un
            stock, un contrat, un planning ou un historique précis.
          </li>
          <li>
            <strong>Combien de temps peut-elle attendre ?</strong> Deux heures,
            une journée ou pas du tout selon l’activité.
          </li>
          <li>
            <strong>Comment travailler temporairement ?</strong> Un document
            daté, un formulaire limité ou une liste contrôlée peut suffire
            pendant une courte période.
          </li>
        </ul>

        <p>
          L’ANSSI recommande de définir la perte de données maximale et la durée
          d’interruption admissible à partir des besoins métier, dans son{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide sur la sauvegarde des systèmes d’information, version 1.1 du
            27 novembre 2025
          </a>
          . Ces deux valeurs ne viennent donc pas d’un prestataire ou d’un
          logiciel : elles viennent de ce que votre entreprise accepte
          réellement de ressaisir et de la durée pendant laquelle elle peut
          continuer autrement.
        </p>

        <p>
          Cette première étape peut conclure qu’il est trop tôt pour migrer. Si
          le nouveau logiciel ne traite pas encore l’opération principale, si
          aucun responsable ne peut valider les données ou si le travail de
          secours n’existe pas, déplacer la date est plus professionnel que
          protéger un calendrier devenu irréaliste.
        </p>

        <h2 id="trois-methodes">
          2. Choisissez entre une seule bascule, plusieurs lots ou une période
          parallèle
        </h2>

        <p>
          Toutes les entreprises ne doivent pas changer de la même façon. Le
          choix dépend surtout des liens entre les opérations, de la fréquence
          des nouvelles saisies et de la possibilité de rapprocher les deux
          systèmes.
        </p>

        <GuideTable
          caption="Trois façons de passer de l’ancien logiciel au nouveau"
          headers={["Approche", "Elle convient lorsque", "Point à surveiller"]}
          rows={[
            [
              "Une seule bascule",
              "Les opérations sont très liées, la fenêtre est suffisante et la répétition complète a réussi",
              "Le retour doit être rapide et les dernières saisies doivent rester récupérables",
            ],
            [
              "Migration par lots",
              "Un service, un type de dossier ou une fonction peut changer sans couper les autres",
              "Les liens entre l’ancien et le nouveau doivent rester compréhensibles pendant la transition",
            ],
            [
              "Période parallèle",
              "Une comparaison temporaire apporte une sécurité utile et le volume de double contrôle reste supportable",
              "Chaque information doit avoir un logiciel de référence et la période doit avoir une date de fin",
            ],
          ]}
        />

        <p>
          La période parallèle n’est pas automatiquement plus sûre. Si un
          commercial modifie l’adresse dans le nouveau logiciel tandis que la
          comptabilité corrige la même fiche dans l’ancien, l’entreprise crée
          deux versions plausibles et personne ne sait laquelle conserver.
          Décidez donc, donnée par donnée, où une modification doit être faite
          et comment elle rejoint l’autre système.
        </p>

        <p>
          Une migration par lots peut aussi être inutilement compliquée. Si le
          planning, le stock et la facturation partagent chaque opération, les
          séparer multiplie les connexions temporaires. À l’inverse, déplacer
          d’abord un module indépendant peut permettre d’apprendre sans exposer
          toute l’activité.
        </p>

        <h2 id="j-moins-30">
          3. Plusieurs semaines avant : décidez ce qui bouge et qui répond
        </h2>

        <p>
          « Tout reprendre » n’est pas une consigne exploitable. Pour chaque
          ensemble d’informations, choisissez s’il doit vivre dans le nouveau
          logiciel, rester consultable dans une archive ou ne plus être
          conservé. Un historique utile au service d’un client ne se traite pas
          comme une ancienne liste de tests ou des comptes inutilisés.
        </p>

        <GuideTable
          caption="Les décisions à prendre avant la répétition"
          headers={["Question", "Décision à écrire", "Contrôle attendu"]}
          rows={[
            [
              "Quelles données passent ?",
              "Liste des données actives, archivées ou abandonnées avec une raison",
              "Dix dossiers connus sont comparés avant et après la copie",
            ],
            [
              "Qui peut modifier quoi ?",
              "Droits prévus pour chaque rôle et comptes d’administration nominatifs",
              "Un utilisateur ordinaire ne voit ni ne modifie plus que nécessaire",
            ],
            [
              "Quand les saisies s’arrêtent-elles ?",
              "Heure de fin dans l’ancien outil et manière de traiter les urgences",
              "Toute saisie temporaire possède une date, un auteur et une destination",
            ],
            [
              "Qui donne la décision finale ?",
              "Une personne nommée, joignable et autorisée à reporter",
              "L’équipe connaît l’heure et les critères de la décision",
            ],
            [
              "Comment revient-on ?",
              "Ancien système disponible, sauvegarde restaurée et méthode de rapprochement",
              "Le retour est essayé dans un espace séparé avant le jour prévu",
            ],
          ]}
        />

        <p>
          Utilisez des données fictives ou correctement protégées pour les
          essais, limitez les accès aux personnes qui en ont besoin et prévoyez
          la restitution ou la suppression adaptée des copies. Le{" "}
          <a
            href="https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide pratique de la CNIL, version 2024 mise à jour en 2026
          </a>{" "}
          rappelle que les mesures de sécurité doivent être choisies selon le
          contexte et le risque, pendant les développements, les échanges, la
          sous-traitance et la fin de vie du logiciel. Cette référence ne
          dispense pas d’une analyse juridique ou sectorielle adaptée.
        </p>

        <p>
          Nommez au minimum quatre responsabilités : la personne qui décide,
          celle qui connaît les données, celle qui maîtrise la mise en service
          et celle qui représente les utilisateurs. Dans une petite entreprise,
          une même personne peut en couvrir plusieurs ; les décisions doivent
          tout de même rester écrites.
        </p>

        <p>
          L’ANSSI recommande aussi d’impliquer tôt les équipes métier et de
          tenir l’inventaire du système à jour jusqu’à l’arrêt complet de
          l’ancienne solution, dans sa fiche officielle{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            « Sécuriser une migration numérique », version 1.0 de janvier 2026
          </a>
          . Cela ne signifie pas qu’un inventaire technique suffit : les écarts
          de fonctions et de travail réel doivent aussi être nommés par les
          personnes qui utilisent le logiciel.
        </p>

        <h2 id="j-moins-7">
          4. Avant le jour prévu : répétez tout le passage, pas seulement
          l’import des données
        </h2>

        <p>
          Importer des lignes dans une base de test n’est qu’une partie du
          travail. La répétition doit commencer dans l’ancien système et se
          terminer lorsque des utilisateurs ont accompli leurs opérations dans
          le nouveau. Elle suit le même ordre, les mêmes responsables et les
          mêmes contrôles que le jour prévu.
        </p>

        <p>
          Ne vous arrêtez pas à un premier essai réussi par hasard. Corrigez les
          écarts, puis rejouez la séquence jusqu’à ce que le même ordre puisse
          être suivi et contrôlé par les personnes prévues. Il n’existe pas de
          nombre d’essais valable pour toutes les entreprises : le résultat
          attendu est une procédure reproductible, pas un quota de répétitions.
        </p>

        <ol>
          <li>
            <strong>Créez une sauvegarde exploitable.</strong> Ne vous contentez
            pas d’un message de réussite : restaurez une copie à part.
          </li>
          <li>
            <strong>Copiez un jeu représentatif.</strong> Incluez les dossiers
            simples, ceux encore ouverts et les cas difficiles connus.
          </li>
          <li>
            <strong>Appliquez les dernières modifications.</strong> Rejouez la
            méthode qui récupérera ce qui a changé depuis la première copie.
          </li>
          <li>
            <strong>Comparez des dossiers connus.</strong> Totaux, statuts,
            liens, pièces jointes et historique doivent raconter la même chose.
          </li>
          <li>
            <strong>Faites travailler les utilisateurs.</strong> Chacun crée,
            modifie puis termine une opération réelle mais autorisée pour le
            test.
          </li>
          <li>
            <strong>Chronométrez l’ensemble.</strong> Comptez la copie, les
            contrôles, la décision et la marge nécessaire pour corriger ou
            revenir.
          </li>
        </ol>

        <p>
          La CNIL recommande de tester régulièrement l’intégrité des sauvegardes
          et la capacité à les restaurer dans sa fiche{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            « Sécurité : sauvegarder » du 14 mars 2024
          </a>
          . L’ANSSI demande également une procédure de restauration rédigée et
          réellement mise en œuvre, avec un ordre tenant compte des dépendances.
          Une copie non restaurée ne peut donc pas servir seule de filet de
          sécurité à la migration.
        </p>

        <InfoBox variant="emerald" title="Ce qu’une répétition doit produire">
          Une durée observée, une liste d’écarts, des dossiers comparés, des
          opérations réussies par rôle et une décision écrite : prêt, prêt sous
          condition ou reporté. « L’import a fonctionné » ne répond pas à la
          question de savoir si l’entreprise peut travailler.
        </InfoBox>

        <h2 id="jour-j">
          5. Le jour prévu : suivez une feuille horaire et gardez une seule
          décision
        </h2>

        <p>
          Le jour de la bascule ne doit pas devenir une nouvelle réunion de
          conception. Chaque étape tient sur une ligne : heure prévue,
          responsable, action, résultat à constater et décision si ce résultat
          manque.
        </p>

        <ol>
          <li>
            <strong>Confirmez le départ.</strong> Les responsables sont
            présents, l’ancien logiciel fonctionne et aucun incident nouveau ne
            change le risque.
          </li>
          <li>
            <strong>Arrêtez les saisies comme prévu.</strong> Informez les
            équipes et ouvrez le document temporaire pour les urgences.
          </li>
          <li>
            <strong>Conservez le dernier état.</strong> Datez la sauvegarde,
            l’export et la liste des opérations encore ouvertes.
          </li>
          <li>
            <strong>Copiez les dernières modifications.</strong> Appliquez la
            procédure répétée, sans improviser un nouveau nettoyage.
          </li>
          <li>
            <strong>Contrôlez dans l’ordre.</strong> D’abord les données
            indispensables, ensuite les connexions et enfin les opérations des
            utilisateurs.
          </li>
          <li>
            <strong>Prenez la décision à l’heure fixée.</strong> Continuer,
            prolonger dans la limite prévue ou revenir. Une seule personne
            annonce la décision à tous.
          </li>
        </ol>

        <p>
          Conservez les heures réelles, les écarts et les décisions. Ces notes
          permettent de rapprocher les saisies temporaires, d’expliquer un
          report et d’améliorer la prochaine répétition. Elles évitent aussi le
          faux souvenir collectif d’une bascule « presque réussie » dont
          personne ne peut plus nommer le problème.
        </p>

        <p>
          Pendant cette phase critique, évitez d’ajouter une modification
          importante qui n’a pas été répétée. La fiche ANSSI consacrée aux
          migrations recommande de réaliser ces changements en amont ou en aval
          de l’opération et de ne lancer la migration qu’après avoir défini et
          testé les procédures opérationnelles et de sécurité.
        </p>

        <h2 id="revenir">
          6. Écrivez avant le jour J ce qui vous fera revenir à l’ancien
          logiciel
        </h2>

        <p>
          Revenir temporairement n’est pas tout annuler. C’est protéger
          l’activité lorsque le résultat observé ne correspond pas aux
          conditions acceptées. Cette décision devient difficile si elle dépend
          d’une impression générale. Utilisez des faits simples et adaptés à
          votre entreprise.
        </p>

        <ul>
          <li>une opération indispensable ne peut pas être terminée ;</li>
          <li>
            des dossiers ouverts manquent ou appartiennent au mauvais client ;
          </li>
          <li>les totaux de contrôle ne correspondent pas ;</li>
          <li>
            les droits donnent accès à des informations non prévues ou empêchent
            une personne de travailler ;
          </li>
          <li>
            la durée restante ne permet plus de contrôler puis de revenir dans
            la fenêtre acceptée ;
          </li>
          <li>
            des saisies existent dans les deux outils sans moyen fiable de les
            rapprocher.
          </li>
        </ul>

        <p>
          Pour rendre le retour praticable, l’ancien logiciel doit rester
          disponible, la dernière sauvegarde doit avoir été restaurée et les
          nouvelles informations notées depuis l’arrêt doivent être
          identifiables. Ne supprimez ni l’ancien état ni les éléments
          nécessaires au retour avant l’heure décidée, et ne lancez pas de
          transformation irréversible tant que cette possibilité doit rester
          ouverte.
        </p>

        <p>
          La fiche CNIL sur la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
            target="_blank"
            rel="noopener noreferrer"
          >
            continuité et la reprise d’activité
          </a>{" "}
          recommande notamment de définir les responsables, les moyens d’alerte,
          un fonctionnement dégradé et des tests. Ici, cela se traduit par une
          règle très concrète : la personne qui peut reporter doit être connue,
          joignable et autorisée à privilégier l’activité sur la date annoncée.
        </p>

        <h2 id="exemple">
          7. Exemple illustratif fictif : une bascule de six heures
        </h2>

        <p>
          L’exemple suivant est entièrement fictif et ne décrit ni un client ni
          un témoignage réel. Il ne constitue ni une durée recommandée, ni un
          seuil de qualité. Il montre comment une PME de maintenance pourrait
          remplacer les valeurs par les siennes et prendre une décision sans
          score opaque.
        </p>

        <p>
          L’entreprise veut protéger trois opérations : planifier une
          intervention, clôturer le compte rendu d’un technicien et transmettre
          les éléments à la facturation. Elle dispose d’une fenêtre de six
          heures choisie selon son activité.
        </p>

        <GuideTable
          caption="Exemple illustratif fictif à remplacer par vos propres contrôles"
          headers={["Élément contrôlé", "Valeur fictive", "Condition décidée"]}
          rows={[
            [
              "Clients",
              "12 480 fiches",
              "Dix dossiers connus conservent identité, contrat et historique attendus",
            ],
            [
              "Interventions terminées",
              "8 640 dossiers",
              "L’historique reste consultable selon les droits prévus",
            ],
            [
              "Interventions ouvertes",
              "420 dossiers",
              "Les 420 sont présentes et rattachées au bon client",
            ],
            [
              "Factures comparées",
              "30 factures",
              "Client, montant et statut correspondent dans les 30 cas",
            ],
            [
              "Utilisateurs de contrôle",
              "10 personnes",
              "Chacune termine son opération principale avec les droits prévus",
            ],
          ]}
        />

        <p>
          Lors de la répétition fictive, la copie dure 3 h 20 et les contrôles 1
          h 10. La marge dans la fenêtre vaut donc :{" "}
          <strong>6 h − 3 h 20 − 1 h 10 = 1 h 30</strong>. Cette marge doit
          encore couvrir la décision et, si nécessaire, le retour. Une durée
          moyenne trouvée en ligne ne pourrait pas remplacer ce chronométrage.
        </p>

        <p>
          Le jour prévu, certaines des 420 interventions ouvertes sont
          rattachées au mauvais client dans le nouveau logiciel. La condition
          prévue pour les interventions ouvertes n’est donc pas remplie.
          L’entreprise reprend dans l’ancien outil, rapproche les informations
          notées pendant l’arrêt et reporte la mise en service. Dans cet
          exemple, le retour est une décision réussie : il évite de commencer la
          journée avec des interventions attribuées aux mauvais clients.
        </p>

        <GuideInlineCTA
          title="Faire relire votre plan de migration avant la répétition"
          description="Indiquez le logiciel actuel, le nouvel outil, les trois opérations qui ne peuvent pas s’arrêter, la fenêtre envisagée et les inconnues restantes. Une personne qui développe examine directement votre demande et cherche à répondre le jour ouvré qui suit, sans garantir ce délai. Cette première orientation est gratuite et sans engagement ; elle peut recommander de reporter ou de réduire la migration."
          tags={[
            "Retour à l’ancien outil prévu",
            "Report possible",
            "Pas de promesse zéro coupure",
          ]}
          ctaLabel="Décrire ma migration"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="apres">
          8. Du lendemain à la première semaine : rapprochez avant d’améliorer
        </h2>

        <p>
          Les premiers jours ne servent pas à ajouter les fonctions repoussées
          pendant le projet. Ils servent à confirmer que les opérations et les
          données restent cohérentes lorsque l’activité réelle reprend.
        </p>

        <ul>
          <li>
            rapprochez chaque saisie du document temporaire avec le dossier créé
            dans le nouveau logiciel ;
          </li>
          <li>
            suivez séparément les erreurs de données, les problèmes de droits,
            les incompréhensions et les fonctions réellement absentes ;
          </li>
          <li>
            contrôlez chaque jour quelques opérations terminées, pas seulement
            le nombre de connexions ;
          </li>
          <li>
            donnez aux utilisateurs un endroit unique où signaler un problème,
            avec le dossier concerné et ce qu’ils essayaient de faire ;
          </li>
          <li>
            corrigez d’abord ce qui empêche de servir un client, produire un
            document ou conserver une information juste ;
          </li>
          <li>
            gardez une heure quotidienne où la direction confirme que le nouveau
            système reste la référence.
          </li>
        </ul>

        <p>
          Une question ou une préférence ne devient pas automatiquement un
          incident. « L’ancien bouton était à gauche » ne se traite pas comme «
          cette commande ne peut pas être expédiée ». Expliquer cette différence
          aide l’équipe à rester écoutée tout en protégeant les opérations les
          plus importantes.
        </p>

        <p>
          Prévoyez aussi la suite : qui reçoit les alertes, qui corrige, sous
          quel délai visé et comment une modification est testée. Le guide sur
          le{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de maintenance d’une application
          </Link>{" "}
          aide à écrire ces responsabilités une fois la migration stabilisée.
        </p>

        <h2 id="fermer">
          9. Fermez, archivez ou gardez l’ancien logiciel en lecture seule
        </h2>

        <p>
          Garder l’ancien outil actif sans date de fin entretient les habitudes
          et les données divergentes. Le fermer trop tôt supprime une solution
          de secours et peut rendre un historique utile inaccessible. Prenez une
          décision explicite pour chaque usage restant.
        </p>

        <ul>
          <li>
            <strong>Fermer l’accès d’écriture</strong> lorsque toutes les
            nouvelles opérations doivent naître dans le nouveau logiciel et que
            les saisies temporaires sont rapprochées.
          </li>
          <li>
            <strong>Conserver une consultation limitée</strong> si un historique
            encore utile n’a pas vocation à être entièrement réimporté.
          </li>
          <li>
            <strong>Produire une archive exploitable</strong> avec les formats,
            droits, personnes responsables et conditions de lecture adaptés à
            votre entreprise.
          </li>
          <li>
            <strong>Résilier les services inutiles</strong> seulement après
            avoir récupéré les données, les documents et les accès nécessaires.
          </li>
          <li>
            <strong>Supprimer les copies de test</strong> selon les règles
            décidées, au lieu de laisser des données oubliées chez chaque
            intervenant.
          </li>
        </ul>

        <p>
          La durée de conservation ne se déduit pas d’une règle unique de ce
          guide. Elle dépend de la finalité, des données, des obligations
          applicables et des besoins de l’entreprise. Faites valider les cas
          sensibles par les personnes compétentes. Le but de la migration n’est
          pas de copier éternellement tout ce qui existait, mais de conserver ce
          qui reste nécessaire et maîtrisé.
        </p>

        <p>
          L’ANSSI recommande de maintenir les inventaires jusqu’au retrait
          complet de l’ancienne solution, puis de fermer les anciens comptes,
          données et infrastructures selon leur sensibilité. Cette fermeture
          doit donc suivre les contrôles post-migration ; elle ne sert pas à
          rendre le retour impossible trop tôt.
        </p>

        <InfoBox
          variant="blue"
          title="Votre décision finale tient en quatre phrases"
        >
          Le nouveau logiciel traite nos opérations indispensables. Les données
          et droits choisis ont été contrôlés. Les saisies de transition sont
          rapprochées et l’équipe sait où travailler. L’ancien logiciel peut
          maintenant être fermé, gardé temporairement en lecture seule ou
          archivé selon une décision documentée.
        </InfoBox>

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Les sources suivantes soutiennent les affirmations de sécurité et de
          continuité. La chronologie, les contrôles métier et l’exemple sont une
          méthode éditoriale Hagnéré Code à adapter ; ils ne sont ni une norme,
          ni une garantie contractuelle.
        </p>

        <ul>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sécuriser une migration numérique, version 1.0 de janvier
              2026
            </a>
            , pour l’implication des métiers, l’inventaire, les procédures
            testées, la phase critique et l’arrêt raisonné de l’ancien système.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1 du 27
              novembre 2025
            </a>
            , notamment objectifs métier, tests et ordre de restauration.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Sécurité : sauvegarder, 14 mars 2024
            </a>
            , pour l’intégrité des sauvegardes et les tests de restauration.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Prévoir la continuité et la reprise d’activité
            </a>
            , version consultée le 22 juillet 2026.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Guide pratique RGPD, version 2024 mise à jour en 2026
            </a>
            , pour les mesures de sécurité adaptées au risque.
          </li>
        </ul>

        <p>
          Les repères J-30, J-7, J0 et J+7 structurent la lecture. Votre projet
          peut demander davantage de temps, d’autres contrôles ou une transition
          différente. Aucun chiffre de cet article ne décrit un client réel. Une
          migration soumise à des règles sectorielles, un conflit d’accès ou un
          incident de sécurité nécessite une analyse spécifique.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
