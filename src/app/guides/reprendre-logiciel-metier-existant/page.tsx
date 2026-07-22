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

const guide = getGuide("reprendre-logiciel-metier-existant");

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
        alt: "Les contrôles indispensables pour reprendre un logiciel métier",
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
      name: "Reprendre un logiciel métier existant",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Peut-on reprendre un logiciel sans documentation ?",
    answer:
      "Oui, si une nouvelle équipe peut reconstruire l’application, restaurer une sauvegarde et comprendre les opérations essentielles. Sans documentation, prévoyez d’abord une phase d’examen et de sécurisation avant de demander de nouvelles fonctionnalités.",
  },
  {
    question: "Quand retirer les accès de l’ancien prestataire ?",
    answer:
      "Après avoir créé et testé les accès de remplacement. En cas de risque de sécurité, la révocation peut être immédiate ; sinon, organisez une bascule tracée pour éviter de couper un service utile par erreur.",
  },
  {
    question: "Un audit du code source suffit-il ?",
    answer:
      "Non. Il faut aussi vérifier l’hébergement, les sauvegardes, les données, les comptes administrateurs et les principales règles métier. Un code lisible ne garantit pas que le logiciel puisse être remis en service.",
  },
  {
    question:
      "À quel nom doivent être le domaine, le cloud et le dépôt de code ?",
    answer:
      "Idéalement au nom d’une organisation contrôlée par votre entreprise, avec au moins deux administrateurs nominatifs. Le prestataire reçoit les droits nécessaires sans être l’unique propriétaire des comptes.",
  },
  {
    question: "Que faire si les droits sur le logiciel sont flous ?",
    answer:
      "Rassemblez contrats, avenants, factures et licences avant toute intervention non urgente. Le paiement d’un projet ne suffit pas toujours à établir les droits de modification ; un professionnel du droit doit trancher les situations litigieuses.",
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
          { label: "Reprendre un logiciel métier existant" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre prestataire ne répond plus, les incidents s’accumulent ou vous voulez changer d’équipe ? Voici ce qu’il faut récupérer, vérifier et tester pour confier le logiciel à un nouveau partenaire sans mettre l’activité en danger."
        heroAction={{
          href: "#premiere-reponse",
          label: "Vérifier si la reprise est possible",
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
            title: "Les accès à récupérer",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Les sauvegardes à tester",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "3 décisions possibles",
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
            href: "/services/maintenance-evolution",
            label: "Maintenance et évolution d’applications",
          },
          {
            href: "/services/audit-technique",
            label: "Audit technique d’un logiciel",
          },
          {
            href: "/guides/reprendre-mvp-vibe-code",
            label: "Reprendre un MVP créé avec Lovable, Bolt ou v0",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Propriété du code source et des accès",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cadrer les évolutions après la reprise",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Structurer le contrat de maintenance après la reprise",
          },
          {
            href: "/guides/cout-maintenance-application-metier",
            label: "Construire le budget annuel après la reprise",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer le ROI d’une migration",
          },
        ]}
        faqTitle="Reprise d’un logiciel existant : les questions restantes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Votre prestataire ne répond plus, les incidents s’accumulent ou vous
          souhaitez simplement changer d’équipe. La première question est très
          concrète :{" "}
          <strong>
            une autre équipe peut-elle reprendre le logiciel sans interrompre
            votre activité ni perdre vos données ?
          </strong>{" "}
          Oui, dans de nombreux cas. Mais avant de promettre des évolutions,
          elle doit récupérer les bons accès, remettre une copie du logiciel en
          fonctionnement et comprendre les opérations indispensables à votre
          entreprise.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Une reprise est raisonnable lorsque votre entreprise contrôle ses
          comptes essentiels, qu’une sauvegarde a réellement été restaurée et
          qu’une nouvelle équipe peut installer puis modifier le logiciel dans
          un environnement sans risque. Si l’un de ces points manque, on
          commence par le sécuriser : cela ne signifie pas automatiquement qu’il
          faut tout réécrire.
        </InfoBox>

        <InfoBox
          variant="amber"
          title="En cas de cyberattaque, changez immédiatement de procédure"
        >
          Une compromission en cours, une fuite soupçonnée ou un accès hostile
          exigent une réponse à incident adaptée, avec préservation des éléments
          utiles à l’enquête et intervenants compétents. Ce guide traite une
          passation normale ou difficile, pas une attaque active.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "premiere-reponse",
              label: "1. Savoir si la reprise est possible",
            },
            {
              id: "a-recuperer",
              label: "2. Ce que votre entreprise doit récupérer",
            },
            { id: "premieres-48-heures", label: "3. Les premières 48 heures" },
            {
              id: "tests",
              label: "4. Les tests qui évitent les mauvaises surprises",
            },
            {
              id: "metier",
              label: "5. Comprendre le travail réel des équipes",
            },
            {
              id: "donnees",
              label: "6. Protéger les données et les sauvegardes",
            },
            { id: "strategie", label: "7. Stabiliser, migrer ou réécrire" },
            {
              id: "contrat",
              label: "8. Sécuriser le contrat et la prochaine sortie",
            },
            {
              id: "choisir-audit",
              label: "9. Comparer deux propositions de reprise",
            },
            { id: "plan", label: "10. Un plan de reprise adaptable" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="premiere-reponse">
          1. Comment savoir si une autre équipe peut reprendre ?
        </h2>

        <p>
          Ne cherchez pas d’abord à savoir si le code est « propre ». Pour un
          dirigeant, la vraie question est de savoir si le service peut
          continuer : les salariés peuvent-ils travailler, les clients être
          servis et les données être récupérées si le serveur tombe demain ?
        </p>

        <p>
          Une nouvelle équipe doit pouvoir répondre simplement à quatre
          questions :
        </p>

        <ul>
          <li>
            <strong>Où se trouve le logiciel ?</strong> Le code, les serveurs,
            le nom de domaine et les services externes sont identifiés.
          </li>
          <li>
            <strong>Peut-on le remettre en route ailleurs ?</strong>{" "}
            L’installation fonctionne sur un environnement séparé de la
            production.
          </li>
          <li>
            <strong>Peut-on récupérer les données ?</strong> Une sauvegarde est
            restaurée et contrôlée, pas seulement repérée dans un dossier.
          </li>
          <li>
            <strong>Peut-on faire un petit changement sans danger ?</strong> Une
            correction limitée est testée, mise en ligne puis annulée si
            nécessaire.
          </li>
        </ul>

        <p>
          Si les quatre réponses sont positives, la maintenance peut
          généralement commencer dans de bonnes conditions. Si une réponse est
          inconnue, la priorité est de lever cette inconnue. Si elle est
          négative, il faut sécuriser le service avant d’ajouter de nouvelles
          fonctions.
        </p>

        <h2 id="a-recuperer">2. Les éléments à récupérer avant la passation</h2>

        <p>
          Vous n’avez pas besoin de connaître la technique pour demander les
          bons éléments. Nommez une personne responsable côté entreprise, puis
          constituez un dossier partagé qui reste sous votre contrôle.
        </p>

        <GuideTable
          headers={[
            "À récupérer",
            "Pourquoi c’est important",
            "Contrôle simple",
          ]}
          rows={[
            [
              "Code source et historique des versions",
              "Permet de comprendre ce qui a changé et de préparer une correction",
              "La nouvelle équipe ouvre le projet et retrouve la version en production",
            ],
            [
              "Comptes du domaine, du cloud et des services externes",
              "Évite qu’une seule personne puisse bloquer le service",
              "Deux administrateurs nominatifs peuvent se connecter",
            ],
            [
              "Sauvegardes des données et des fichiers",
              "Permet de redémarrer après une erreur ou une panne",
              "Une copie est restaurée dans un espace isolé",
            ],
            [
              "Procédure de mise en ligne",
              "Réduit le risque lors de la première correction",
              "Un changement mineur peut être publié puis annulé",
            ],
            [
              "Liste des fournisseurs et abonnements",
              "Évite la coupure d’un email, d’un paiement ou d’une connexion à un autre logiciel oubliée",
              "Chaque service a un propriétaire, un contact et une date de renouvellement",
            ],
            [
              "Contrats, licences et factures",
              "Clarifie les droits et les engagements encore en cours",
              "Les documents sont lisibles avant toute modification non urgente",
            ],
          ]}
        />

        <p>
          Le mot « accès » ne signifie pas un mot de passe envoyé par email. Les
          comptes structurants devraient appartenir à une organisation contrôlée
          par l’entreprise, avec des droits nominatifs et un administrateur de
          secours. Notre guide sur la{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            propriété du code source et des accès
          </Link>{" "}
          détaille cette vérification.
        </p>

        <h2 id="premieres-48-heures">
          3. Que faire pendant les premières 48 heures ?
        </h2>

        <p>
          Les deux premiers jours servent à éviter une aggravation. Ils ne
          servent pas à promettre une date de refonte ni à modifier tout ce qui
          semble ancien.
        </p>

        <ol>
          <li>
            <strong>Identifier le responsable métier.</strong> Cette personne
            sait quelles opérations ne peuvent pas s’arrêter : facturer,
            préparer une commande, planifier une intervention ou répondre à un
            client.
          </li>
          <li>
            <strong>Geler les changements non urgents.</strong> On conserve le
            service en l’état le temps de comprendre comment il fonctionne.
          </li>
          <li>
            <strong>Sécuriser les comptes importants.</strong> On crée des accès
            nominatifs, on vérifie la facturation et on retire seulement les
            droits devenus inutiles.
          </li>
          <li>
            <strong>Observer les incidents actuels.</strong> Les erreurs,
            alertes, tâches manuelles et demandes du support donnent une
            première image des risques réels.
          </li>
          <li>
            <strong>Copier avant d’expérimenter.</strong> Les essais se font sur
            un environnement séparé, jamais directement sur les données de
            production.
          </li>
        </ol>

        <InfoBox
          variant="emerald"
          title="Ce que vous devez obtenir à la fin de cette étape"
        >
          Une liste claire des services indispensables, des personnes qui
          peuvent y accéder, des incidents en cours et des éléments encore
          manquants. Ce bilan tient sur quelques pages et peut être compris par
          la direction.
        </InfoBox>

        <h2 id="tests">4. Les tests qui rendent la reprise crédible</h2>

        <p>
          Un dossier peut être complet sur le papier et inutilisable le jour où
          il faut intervenir. Demandez donc des résultats observables. La
          nouvelle équipe doit expliquer ce qu’elle a fait, ce qui a fonctionné
          et ce qui reste incertain.
        </p>

        <GuideTable
          headers={["Test", "Résultat attendu", "Si le test échoue"]}
          rows={[
            [
              "Installer une copie du logiciel",
              "L’application démarre sans utiliser la production",
              "Documenter les dépendances et corriger l’installation",
            ],
            [
              "Restaurer une sauvegarde récente",
              "Les données attendues sont présentes et cohérentes",
              "Revoir la fréquence, le stockage et la procédure de sauvegarde",
            ],
            [
              "Rejouer trois opérations métier",
              "Un utilisateur retrouve son travail habituel",
              "Interroger les équipes et documenter les règles oubliées",
            ],
            [
              "Publier une correction limitée",
              "Le changement est testé et peut être annulé",
              "Sécuriser la mise en ligne avant toute évolution importante",
            ],
            [
              "Simuler l’absence d’un prestataire",
              "L’entreprise garde ses comptes et ses contacts d’urgence",
              "Transférer les comptes et nommer des remplaçants",
            ],
          ]}
        />

        <p>
          Aucun score global ne doit masquer un échec important. Une sauvegarde
          inutilisable n’est pas compensée par un code bien commenté. De même,
          un hébergement accessible ne suffit pas si personne ne sait comment
          une facture ou une commande est produite.
        </p>

        <h2 id="metier">
          5. Comprendre le travail réel avant de corriger le logiciel
        </h2>

        <p>
          Une application métier contient souvent des règles qui n’existent dans
          aucun document : une remise exceptionnelle, un ordre de validation, un
          export retravaillé chaque vendredi ou une alerte que seule une
          personne sait interpréter. C’est là que se trouve une grande partie du
          risque de reprise.
        </p>

        <p>
          Choisissez trois à cinq opérations fréquentes et demandez à leurs
          utilisateurs de les montrer du début à la fin. Pour chacune, notez :
        </p>

        <ul>
          <li>qui commence l’opération et à quel moment ;</li>
          <li>quelles informations entrent dans le logiciel ;</li>
          <li>ce qui est vérifié ou corrigé manuellement ;</li>
          <li>quel document, paiement ou message doit être produit ;</li>
          <li>ce qui se passe lorsque l’opération échoue.</li>
        </ul>

        <p>
          Ce travail évite deux erreurs coûteuses : réparer une fonction qui
          n’est plus utilisée ou supprimer une particularité qui paraît étrange
          mais protège une étape commerciale. Il fournit aussi une base solide
          pour le futur{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges des évolutions
          </Link>
          .
        </p>

        <p>
          Si l’outil à reprendre est une base Microsoft Access, l’inventaire
          doit aussi distinguer les tables des formulaires, états, requêtes,
          macros et modules VBA. Le guide{" "}
          <Link href="/guides/remplacer-microsoft-access-application-web">
            remplacer Access par une application web
          </Link>{" "}
          explique ce qui peut être transféré et ce qui doit être compris ou
          reconstruit.
        </p>

        <h2 id="donnees">
          6. Données, sauvegardes et mots de passe : les contrôles essentiels
        </h2>

        <p>
          Voir un fichier de sauvegarde ne prouve pas qu’il permettra de
          redémarrer. Une restauration doit être réalisée sur une copie isolée,
          avec une date connue et des contrôles métier simples : nombre de
          clients, dernières commandes, documents joints et relations entre les
          informations.
        </p>

        <ul>
          <li>
            <strong>Fréquence :</strong> la perte maximale acceptable doit être
            reliée au rythme réel de l’activité. Une sauvegarde hebdomadaire
            peut être insuffisante pour une entreprise qui enregistre des
            commandes chaque heure.
          </li>
          <li>
            <strong>Emplacement :</strong> au moins une copie doit rester
            séparée du service principal et protégée contre une suppression
            accidentelle.
          </li>
          <li>
            <strong>Accès :</strong> les mots de passe et clés techniques sont
            conservés dans un gestionnaire adapté, jamais dans le code ou un
            tableur partagé.
          </li>
          <li>
            <strong>Données personnelles :</strong> les accès, sous-traitants,
            transferts et mesures de sécurité doivent être cohérents avec les
            obligations réellement applicables.
          </li>
        </ul>

        <p>
          Les recommandations de l’ANSSI, de la CNIL, du NIST et de l’OWASP
          citées en fin de guide donnent un cadre de contrôle. Elles ne
          remplacent pas l’évaluation de votre activité ni, lorsque nécessaire,
          un audit de sécurité spécialisé.
        </p>

        <h2 id="strategie">7. Faut-il stabiliser, migrer ou réécrire ?</h2>

        <p>
          La découverte de code ancien ne justifie pas automatiquement une
          réécriture. Le bon choix dépend surtout de la continuité du service,
          du coût des incidents, des évolutions attendues et de la capacité à
          intervenir sans risque.
        </p>

        <GuideTable
          headers={[
            "Situation observée",
            "Décision raisonnable",
            "Prochaine étape",
          ]}
          rows={[
            [
              "Le logiciel fonctionne et les accès sont maîtrisés",
              "Reprise et maintenance progressive",
              "Traiter les incidents puis planifier les évolutions utiles",
            ],
            [
              "Le service fonctionne mais les mises en ligne sont risquées",
              "Stabilisation",
              "Sécuriser sauvegardes, tests et procédure de publication",
            ],
            [
              "Une partie précise bloque la croissance",
              "Migration progressive",
              "Remplacer cette partie sans interrompre le reste",
            ],
            [
              "Le logiciel ne peut plus être exploité de façon fiable",
              "Étudier une réécriture ou un remplacement",
              "Comparer coût, durée, migration des données et fonctionnement transitoire",
            ],
          ]}
        />

        <p>
          Si la migration devient l’option retenue, préparez séparément le
          passage en production. Notre guide pour{" "}
          <Link href="/guides/migrer-logiciel-metier-sans-interruption">
            changer de logiciel métier sans arrêter l’activité
          </Link>{" "}
          détaille la répétition complète, les contrôles du jour prévu et les
          conditions qui imposent un retour temporaire à l’ancien outil.
        </p>

        <p>
          Demandez plusieurs options chiffrées plutôt qu’un verdict
          technologique. Pour un investissement important, le{" "}
          <Link href="/guides/calculer-roi-application-metier">
            calcul du retour sur investissement
          </Link>{" "}
          doit intégrer les incidents évités, le temps réellement économisé, la
          migration et le coût de coexistence des deux systèmes.
        </p>

        <h2 id="contrat">
          8. Le contrat doit protéger la continuité et la prochaine sortie
        </h2>

        <p>
          La reprise technique ne règle pas automatiquement les droits
          juridiques. Avant une modification non urgente, rassemblez contrats,
          avenants, licences, factures et historique des contributeurs. En cas
          de doute sérieux, demandez un avis juridique adapté : ce guide ne peut
          pas décider qui possède quels droits.
        </p>

        <p>Le nouveau contrat devrait préciser au minimum :</p>

        <ul>
          <li>
            les services réellement couverts et les horaires d’intervention ;
          </li>
          <li>la façon de déclarer, classer et suivre un incident ;</li>
          <li>les sauvegardes, tests et responsabilités de chaque partie ;</li>
          <li>la propriété et l’administration des comptes structurants ;</li>
          <li>les documents tenus à jour pendant la mission ;</li>
          <li>
            ce qui sera remis à la sortie, dans quel format et dans quel délai ;
          </li>
          <li>les licences ou services tiers qui resteront à payer.</li>
        </ul>

        <p>
          Le guide sur le{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de maintenance applicative
          </Link>{" "}
          aide à tester ces clauses sur un incident concret avant de signer.
          Lorsque l’outil est un SaaS déjà vendu et que son développeur part,
          utilisez aussi le{" "}
          <Link href="/guides/reprendre-saas-developpe-par-freelance">
            registre de passation des comptes, paiements et accès
          </Link>{" "}
          : cette situation exige de protéger les clients actifs pendant le
          transfert.
        </p>

        <h2 id="choisir-audit">
          9. Comment comparer deux propositions de reprise ?
        </h2>

        <p>
          Un audit utile ne vend pas immédiatement une refonte. Il dit ce qui
          sera examiné, ce qui sera réellement essayé et ce que vous recevrez à
          la fin.
        </p>

        <GuideTable
          headers={[
            "Question à poser",
            "Réponse rassurante",
            "Signal d’alerte",
          ]}
          rows={[
            [
              "Quels accès et documents allez-vous examiner ?",
              "Une liste précise avec les responsables",
              "« Tout le système » sans périmètre écrit",
            ],
            [
              "Allez-vous restaurer une sauvegarde ?",
              "Oui, dans un environnement isolé",
              "Simple vérification de la présence des fichiers",
            ],
            [
              "Comment comprendrez-vous le métier ?",
              "Entretiens et observation de plusieurs opérations",
              "Lecture du code uniquement",
            ],
            [
              "Quel livrable recevrai-je ?",
              "Risques, options, priorités, inconnues et plan d’action",
              "Une note globale sans éléments vérifiables",
            ],
            [
              "Que se passe-t-il si la reprise est trop risquée ?",
              "Une phase de sécurisation ou des alternatives chiffrées",
              "Maintenance normale promise avant tout examen",
            ],
          ]}
        />

        <GuideInlineCTA
          title="Besoin de savoir si votre logiciel peut être repris ?"
          description="Nous examinons les accès, la remise en route, les sauvegardes et les opérations essentielles avant de proposer une maintenance ou une évolution. Vous obtenez un diagnostic compréhensible, les risques à traiter et plusieurs options pour la suite."
          tags={[
            "Accès et sauvegardes contrôlés",
            "Risques expliqués sans jargon",
            "Maintenance proposée seulement si elle est raisonnable",
          ]}
        />

        <h2 id="plan">10. Un plan de reprise adaptable à votre situation</h2>

        <p>
          Le calendrier dépend de la taille du logiciel et de l’urgence. L’ordre
          des décisions reste cependant assez stable :
        </p>

        <ol>
          <li>
            <strong>Sécuriser la continuité.</strong> Identifier les services
            indispensables, les incidents en cours, les personnes à joindre et
            les accès à protéger.
          </li>
          <li>
            <strong>Rassembler les actifs.</strong> Centraliser code, comptes,
            sauvegardes, contrats, fournisseurs et documents existants.
          </li>
          <li>
            <strong>Remettre une copie en fonctionnement.</strong> Installer le
            logiciel et restaurer des données sans toucher à la production.
          </li>
          <li>
            <strong>Observer le métier.</strong> Rejouer plusieurs opérations
            avec leurs utilisateurs et documenter les exceptions importantes.
          </li>
          <li>
            <strong>Réaliser une première correction limitée.</strong> Tester la
            mise en ligne et le retour arrière avant un changement plus
            ambitieux.
          </li>
          <li>
            <strong>Présenter les options à la direction.</strong> Distinguer ce
            qui doit être sécurisé maintenant, ce qui peut attendre et ce qui
            mérite un investissement séparé.
          </li>
        </ol>

        <InfoBox variant="emerald" title="La décision attendue">
          À la fin de cette phase, vous devez pouvoir choisir entre trois
          réponses compréhensibles : reprendre et maintenir, stabiliser avant
          d’évoluer, ou préparer un remplacement progressif. Les inconnues
          restantes doivent être nommées ; elles ne doivent jamais être cachées
          derrière une note globale.
        </InfoBox>

        <p>
          Vous pouvez commencer sans prestataire en nommant un responsable
          interne et en rassemblant les comptes, contrats, sauvegardes et
          contacts utiles. Pour faire examiner l’application, consultez notre{" "}
          <Link href="/services/audit-technique">
            service d’audit technique
          </Link>{" "}
          ou décrivez la situation depuis la page{" "}
          <Link href="/demarrer-un-projet">démarrer un projet</Link>.
        </p>

        <h2 id="sources">Sources et limites</h2>

        <p>
          Recherche effectuée le 20 juillet 2026. Cette méthode s’adresse à un
          dirigeant ; elle ne constitue ni audit de cybersécurité certifiant, ni
          réponse à incident, ni avis juridique, ni promesse de reprise. Durées,
          contrôles et priorités doivent être adaptés à l’application, à
          l’activité, aux données et aux obligations réellement applicables.
        </p>

        <ul>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noreferrer"
            >
              Légifrance — Code de la propriété intellectuelle, article L131-3
            </a>
            , avec les articles L113-9 et L122-6 pour distinguer certains droits
            et régimes ; textes consolidés consultés le 20 juillet 2026.
          </li>
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr"
              target="_blank"
              rel="noreferrer"
            >
              EUR-Lex — Règlement général sur la protection des données
            </a>
            , articles 28 et 32, dans le périmètre des données personnelles et
            de la relation de sous-traitance concernée.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — Guide de la sécurité des données personnelles 2024
            </a>
            , fiches sur la sous-traitance et la maintenance, avec les pages
            dédiées aux habilitations et aux sauvegardes.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1
            </a>
            , publiée le 27 novembre 2025, pour les objectifs, la protection,
            les tests et l’ordre des dépendances.
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/pubs/sp/800/218/final"
              target="_blank"
              rel="noreferrer"
            >
              NIST — Secure Software Development Framework 1.1
            </a>
            , publié en février 2022, cadre volontaire sur dépôts, versions,
            composants et dépendances.
          </li>
          <li>
            <a
              href="https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
              target="_blank"
              rel="noreferrer"
            >
              OWASP — Secrets Management Cheat Sheet
            </a>
            , page vivante consultée le 20 juillet 2026, guide technique
            communautaire non normatif.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
