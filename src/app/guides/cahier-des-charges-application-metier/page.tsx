import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { ResourceDownloadCard } from "@/components/resources/ResourceDownloadCard";
import { formatGuideDate, getGuide, guideUrl } from "@/lib/guides";
import { APP_CDC_KIT } from "@/lib/resources";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("cahier-des-charges-application-metier");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
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
        alt: "Cahier des charges d'une application métier : scénarios, recette et modèle",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    knowsAbout: [
      "Applications métier",
      "Outils internes",
      "Cadrage fonctionnel",
      "Critères d'acceptation",
      "Recette logicielle",
      "Développement sur mesure",
    ],
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
      name: "Cahier des charges d'une application métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Combien de pages doit faire un cahier des charges d'application métier ?",
    answer:
      "Il n'existe pas de longueur universelle. Le document est assez précis lorsque chaque candidat peut rejouer les mêmes scénarios, repérer les exceptions, chiffrer le même premier lot et expliquer comment il sera accepté. Cinq scénarios bien décrits avec leurs données, règles, droits et critères de recette valent davantage qu'un long catalogue d'écrans sans priorité.",
  },
  {
    question:
      "Qui doit rédiger le cahier des charges : l'entreprise ou le prestataire ?",
    answer:
      "L'entreprise reste propriétaire des décisions métier : objectifs, priorités, exceptions acceptables, données, personnes habilitées et résultat attendu. Un prestataire peut animer les ateliers, reformuler et révéler les angles morts. Faites toutefois valider chaque scénario par la personne qui réalise réellement le travail et désignez une seule personne capable d'arbitrer.",
  },
  {
    question:
      "Faut-il choisir la technologie avant d'envoyer le cahier des charges ?",
    answer:
      "Généralement non. Décrivez d'abord les usages, volumes, connexions, exigences de continuité et contraintes déjà certaines. Demandez ensuite à chaque candidat de proposer une architecture et de justifier ses compromis, y compris face à un logiciel existant. Une technologie ne devient une contrainte légitime que si elle découle de votre existant, de compétences internes ou d'une politique établie.",
  },
  {
    question:
      "Un cahier des charges est-il compatible avec une méthode agile ?",
    answer:
      "Oui, s'il fixe le résultat et les limites sans prétendre figer chaque écran. Les scénarios prioritaires, règles incontournables, données, responsabilités et critères d'acceptation forment le socle. Les détails d'interface peuvent évoluer si la décision est tracée, que son effet sur le budget et le calendrier est visible, et que les critères de sortie restent compris.",
  },
  {
    question: "Comment obtenir des devis de logiciel réellement comparables ?",
    answer:
      "Envoyez à tous les candidats le même dossier, les mêmes exemples anonymisés, les mêmes volumes et une feuille de réponse commune. Demandez de distinguer hypothèses, exclusions, licences tierces, reprise de données, recette, déploiement, maintenance et réversibilité. Une différence de prix n'a de sens qu'après rapprochement de ces lignes.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }}
      />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Cahier des charges d'une application métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Un dossier utile permet à chaque candidat de rejouer les mêmes scénarios métier, de chiffrer la même première version utile (V1) et de dire exactement comment le résultat sera vérifié. Voici le modèle, la méthode de recette et un exemple fictif complet."
        heroAction={{
          href: "#telecharger-kit",
          label: "Télécharger le modèle",
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
            title: "7 livrables concrets",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Scénarios + recette",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          { href: APP_CDC_KIT.path, label: "Kit Word et PDF gratuit" },
          {
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d'un logiciel sur mesure",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou sur-mesure",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "ERP ou logiciel sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Cahier des charges d'un site",
          },
          {
            href: "/guides/cahier-des-charges-application-mobile",
            label: "Cahier des charges d'une application mobile",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes sur mesure",
          },
          { href: "/methode", label: "Notre méthode de projet" },
        ]}
        faqTitle="Cahier des charges métier : les questions décisives"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Le bon livrable n&apos;est ni un roman ni une liste de boutons.
          </strong>{" "}
          C&apos;est un dossier dans lequel un développeur, un éditeur de
          logiciel et votre responsable métier comprennent la même chose. Chacun
          doit pouvoir suivre un dossier réel de son déclenchement à sa clôture,
          nommer les exceptions et montrer la preuve qui autorisera la mise en
          production.
        </p>

        <InfoBox
          variant="blue"
          title="À la fin, votre dossier tient en 7 livrables"
        >
          <ol className="mb-0 mt-2 space-y-1.5 pl-5">
            <li>
              <strong>une synthèse de décision</strong> : problème, résultat,
              périmètre et décideur ;
            </li>
            <li>
              <strong>5 à 8 scénarios métier prioritaires</strong>, avec leurs
              exceptions ;
            </li>
            <li>
              <strong>un dictionnaire des données</strong> et des exemples
              anonymisés ;
            </li>
            <li>
              <strong>une matrice des rôles et des droits</strong> ;
            </li>
            <li>
              <strong>la carte des intégrations</strong>, y compris leurs pannes
              possibles ;
            </li>
            <li>
              <strong>
                un plan de recette, de migration et de retour arrière
              </strong>{" "}
              ;
            </li>
            <li>
              <strong>une matrice des responsabilités</strong> pour construire,
              exploiter et sortir du contrat.
            </li>
          </ol>
        </InfoBox>

        <p>
          Cette approche ne suppose pas que le sur-mesure soit la bonne réponse.
          Elle peut conclure qu&apos;un logiciel existant, une automatisation
          limitée ou une correction du processus suffit. Si votre point de
          départ est un classeur partagé, commencez par décider s&apos;il faut
          réellement{" "}
          <Link href="/guides/transformer-excel-en-application">
            transformer Excel en application
          </Link>
          .
        </p>

        <ResourceDownloadCard
          resource={APP_CDC_KIT}
          placement="guide_cahier_des_charges_application_metier"
        />

        <InfoBox variant="amber" title="Les personnes et les éléments à réunir">
          <p className="mb-2">
            Préparez deux ou trois dossiers récents anonymisés, les volumes
            connus, les règles ou contrats utiles et un schéma des outils
            actuels. Faites participer la personne responsable du processus, le
            propriétaire des données, des utilisateurs représentatifs et le
            décideur capable d&apos;arbitrer.
          </p>
          <p className="mb-0">
            Réservez aussi du temps pour relire les scénarios, répondre aux
            questions et valider la recette. L&apos;effort dépend du nombre de
            parcours, d&apos;exceptions, de sources de données et
            d&apos;intégrations ; aucune durée universelle ne serait sérieuse.
          </p>
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "dossier-final",
              label: "1. Le dossier final en 7 livrables",
            },
            { id: "scenarios", label: "2. Décrire 5 à 8 scénarios métier" },
            {
              id: "regles-donnees-droits",
              label: "3. Règles, données, droits et intégrations",
            },
            { id: "v1", label: "4. Couper une V1 sans déplacer le problème" },
            { id: "recette", label: "5. Écrire la recette avant le devis" },
            { id: "responsabilites", label: "6. Répartir les responsabilités" },
            {
              id: "exigences-transverses",
              label: "7. Sécurité, RGPD, continuité et sobriété",
            },
            { id: "exemple", label: "8. Exemple illustratif fictif" },
            { id: "comparer", label: "9. Comparer les offres et agir" },
            { id: "sources", label: "Sources officielles consultées" },
          ]}
        />

        <h2 id="dossier-final">
          1. Commencez par le dossier que vous voulez recevoir
        </h2>

        <p>
          Avant la première réunion, créez les sept blocs ci-dessous. Ils
          peuvent vivre dans un document principal et quelques tableaux annexes.
          Leur rôle n&apos;est pas de tout prévoir : ils rendent visibles les
          décisions qui changent le prix, le risque ou l&apos;acceptation du
          logiciel.
        </p>

        <GuideTable
          headers={["Livrable", "Question à trancher", "Preuve minimale"]}
          rows={[
            [
              "Synthèse",
              "Pourquoi agir, pour qui et quel résultat observer ?",
              "Un objectif, un indicateur actuel, une cible et un décideur",
            ],
            [
              "Scénarios",
              "Que se passe-t-il du déclencheur au résultat ?",
              "5 à 8 parcours avec variantes et exceptions",
            ],
            [
              "Données",
              "Quelles informations entrent, changent, sortent et disparaissent ?",
              "Dictionnaire, volumes et fichiers anonymisés",
            ],
            [
              "Droits",
              "Qui peut voir, créer, modifier, valider ou supprimer ?",
              "Matrice rôles × actions × périmètres",
            ],
            [
              "Intégrations",
              "Quels systèmes échangent quoi et que faire en cas d'échec ?",
              "Carte des flux, responsable et mode dégradé",
            ],
            [
              "Recette et bascule",
              "Comment prouver que le lot fonctionne sans perdre l'existant ?",
              "Jeux d'essai, migration et retour arrière",
            ],
            [
              "Responsabilités",
              "Qui fournit, décide, réalise, vérifie, exploite et restitue ?",
              "Un responsable et une preuve par activité",
            ],
          ]}
        />

        <p>
          Voici une ossature à copier dans votre outil de rédaction. Elle reste
          volontairement courte : les annexes portent les données répétitives.
        </p>

        <FormulaBox>
          {[
            "1. Décision",
            "- Problème observé :",
            "- Résultat métier attendu :",
            "- Indicateur actuel / cible / méthode de mesure :",
            "- Sponsor et décideur final :",
            "- Budget, date ou contrainte réellement fixe :",
            "",
            "2. Périmètre",
            "- Équipe et processus concernés :",
            "- Scénarios de V1 :",
            "- Reporté après V1 :",
            "- Explicitement hors périmètre :",
            "",
            "3. Scénarios métier",
            "- Déclencheur, acteurs, étapes, règles, exceptions, résultat, preuve :",
            "",
            "4. Données, droits et intégrations",
            "- Dictionnaire, volumes, qualité, conservation, rôles, flux et pannes :",
            "",
            "5. Recette et bascule",
            "- Jeux d'essai, critères d'acceptation, migration et retour arrière :",
            "",
            "6. Responsabilités et exploitation",
            "- Fournitures, décisions, développement, validation, support et sortie :",
            "",
            "7. Réponse attendue du candidat",
            "- Solution, alternatives, hypothèses, exclusions, coût et preuves livrées :",
          ].join("\n")}
        </FormulaBox>

        <InfoBox
          variant="amber"
          title="Trois éléments ne doivent jamais être implicites"
        >
          <p className="mb-0">
            Écrivez noir sur blanc ce qui est <strong>hors périmètre</strong>,
            qui a le pouvoir d&apos;<strong>arbitrer</strong> et quelle preuve
            déclenche l&apos;<strong>acceptation</strong>. Sans eux, une même
            phrase peut encore produire plusieurs projets et plusieurs devis
            incomparables.
          </p>
        </InfoBox>

        <h2 id="scenarios">
          2. Écrivez 5 à 8 scénarios métier, pas une liste d&apos;écrans
        </h2>

        <p>
          Un écran est déjà une solution. Un scénario décrit le travail à
          accomplir, même si l&apos;interface change. Demandez à la personne qui
          exécute le processus de rejouer un dossier récent, puis un dossier qui
          s&apos;est mal passé. Les exceptions donnent souvent plus
          d&apos;information que le parcours idéal.
        </p>

        <h3>Le gabarit d&apos;un scénario exploitable</h3>

        <p>
          <strong>
            Exemple fil rouge entièrement fictif — Alp&apos;Interventions.
          </strong>{" "}
          Les personnes, montants et règles ci-dessous servent uniquement à
          montrer la méthode ; ils ne décrivent aucun client ni résultat réel.
        </p>

        <FormulaBox>
          {[
            "Scénario S-04 — Valider une pièce exceptionnelle",
            "",
            "But : autoriser une pièce coûteuse sans bloquer la clôture courante.",
            "Déclencheur : un technicien ajoute une pièce à l'intervention.",
            "Acteurs : technicien, responsable d'agence, comptabilité.",
            "Préconditions : intervention active, pièce et technicien identifiés.",
            "Parcours : ajout → contrôle du seuil → validation → clôture → export.",
            "Règles : au-delà de 500 € HT, validation distincte ; aucune auto-validation.",
            "Exceptions : responsable absent ; justificatif manquant ; relance d'export.",
            "Données : montant HT, référence, justificatif, acteur et historique.",
            "Résultat : pièce validée, refusée ou renvoyée avec un motif traçable.",
            "Preuve : jeu d'essai + statut final + journal des décisions.",
          ].join("\n")}
        </FormulaBox>

        <GuideTable
          headers={["Question", "Réponse trop vague", "Réponse exploitable"]}
          rows={[
            [
              "Qui agit ?",
              "L'administrateur",
              "Le responsable d'agence valide uniquement les interventions de son agence",
            ],
            [
              "Quand ?",
              "À la création",
              "À l'ajout de la pièce, puis après toute modification de son montant ou de sa référence",
            ],
            [
              "Selon quelle règle ?",
              "Selon le montant",
              "Au-delà de 500 € HT, une validation par une autre personne est obligatoire",
            ],
            [
              "Et si cela échoue ?",
              "Afficher une erreur",
              "Conserver le brouillon, expliquer l'action possible et notifier après trois échecs",
            ],
            [
              "Comment vérifier ?",
              "Le workflow fonctionne",
              "Le cas A est validé une fois ; le cas B est refusé et les deux décisions sont journalisées",
            ],
          ]}
        />

        <p>
          À chaque étape, demandez : « et si cela ne se passe pas comme prévu ?
          ». Une connexion tombe, le validateur est absent, un identifiant
          existe déjà, une donnée arrive vide ou une action est relancée deux
          fois. Décrire le comportement attendu dans ces situations apporte
          davantage de profondeur qu&apos;un inventaire de boutons.
        </p>

        <p>
          Cinq à huit scénarios constituent une bonne contrainte de travail pour
          une première version, pas une norme. Si vous en comptez trente, vous
          avez probablement mélangé le cœur, les variantes secondaires et la
          suite. Conservez ceux dont l&apos;absence empêcherait l&apos;équipe de
          travailler ou rendrait le résultat non fiable.
        </p>

        <InfoBox variant="emerald" title="Observez le travail réel">
          <p className="mb-0">
            La{" "}
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DINUM recommande
            </a>{" "}
            de partir des besoins, de parler aux utilisateurs réels et de tester
            avant de développer. Pour un outil interne, cela signifie regarder
            un dossier être traité et confronter un prototype à des cas
            anonymisés — pas seulement interroger un manager sur le processus
            théorique.
          </p>
        </InfoBox>

        <h2 id="regles-donnees-droits">
          3. Faites apparaître règles, données, droits et intégrations
        </h2>

        <p>
          Le scénario raconte le mouvement. Quatre annexes décrivent ce qui le
          rend fiable : règles de gestion, données, droits et systèmes
          connectés. C&apos;est ici que se cachent une grande partie des écarts
          de devis.
        </p>

        <h3>Une règle : condition, décision, exception</h3>

        <GuideTable
          headers={[
            "ID",
            "Condition",
            "Comportement attendu",
            "Exception / arbitre",
          ]}
          rows={[
            [
              "R-01",
              "Montant supérieur au seuil du centre",
              "Ajouter la validation de la direction",
              "Seuil modifiable par un administrateur habilité",
            ],
            [
              "R-02",
              "Demandeur également validateur prévu",
              "Interdire l'auto-validation et chercher un suppléant",
              "La direction désigne le suppléant",
            ],
            [
              "R-03",
              "Même fournisseur, montant et date déjà présents",
              "Signaler un doublon potentiel sans supprimer",
              "La comptabilité confirme ou écarte",
            ],
          ]}
        />

        <p>
          Numérotez les règles afin de les relier aux scénarios, tests et
          anomalies. Indiquez aussi qui peut modifier un seuil : un paramètre
          administrable n&apos;a pas le même coût ni le même risque qu&apos;une
          valeur changée dans le code.
        </p>

        <h3>Le dictionnaire de données : sens, source et cycle de vie</h3>

        <GuideTable
          headers={[
            "Champ",
            "Finalité et source",
            "Qualité / volume",
            "Accès et sort",
          ]}
          rows={[
            [
              "Centre de coût",
              "Affecter et contrôler ; référentiel comptable",
              "Code obligatoire, synchronisé chaque nuit",
              "Visible au périmètre concerné ; archivé avec la demande",
            ],
            [
              "Pièce jointe",
              "Justifier ; déposée par l'utilisateur",
              "PDF ou image, taille maximale à décider",
              "Accès restreint ; durée selon la finalité",
            ],
            [
              "Statut",
              "Piloter le flux ; calculé par l'application",
              "Une valeur dans une liste versionnée",
              "Visible aux acteurs ; changements journalisés",
            ],
          ]}
        />

        <p>
          Joignez de petits échantillons <strong>anonymisés</strong> : un
          fichier propre, un cas incomplet, un doublon et un historique.
          Précisez volumes, croissance et qualité constatée. « Importer
          l&apos;Excel » ne dit pas qui nettoie les dates incohérentes ou
          tranche entre deux valeurs.
        </p>

        <h3>La matrice des droits : action, périmètre, contrôle</h3>

        <GuideTable
          headers={["Rôle", "Voir", "Créer / modifier", "Valider / supprimer"]}
          rows={[
            [
              "Demandeur",
              "Ses demandes",
              "Créer et modifier un brouillon",
              "Soumettre ; jamais valider sa demande",
            ],
            [
              "Responsable",
              "Dossiers de son périmètre",
              "Commenter et renvoyer",
              "Valider dans sa délégation",
            ],
            [
              "Comptabilité",
              "Dossiers validés",
              "Compléter la référence comptable",
              "Marquer exporté ; toute correction est tracée",
            ],
            [
              "Administrateur fonctionnel",
              "Paramètres et journaux nécessaires",
              "Gérer référentiels et délégations",
              "Pas de validation métier par défaut",
            ],
          ]}
        />

        <p>
          Le moindre privilège consiste à n&apos;accorder que les accès
          nécessaires. Évitez un rôle « administrateur » qui cumule paramétrage,
          lecture de toutes les données et validation métier sans justification.
          Cadrez aussi l&apos;ouverture, la modification et la suppression des
          comptes.
        </p>

        <h3>Les intégrations : décrivez aussi la panne</h3>

        <p>
          Pour chaque logiciel connecté, notez le propriétaire, le sens du flux,
          la fréquence, le format, l&apos;authentification, le volume et la
          règle en cas d&apos;échec. Une synchronisation n&apos;est pas terminée
          si une relance crée des doublons ou si personne ne sait rapprocher un
          rejet.
        </p>

        <FormulaBox>
          {[
            "Intégration I-02 — Application → comptabilité",
            "- Déclencheur : dossier validé et complet",
            "- Données : référence, fournisseur, montant, centre, justificatif",
            "- Résultat : identifiant comptable enregistré une seule fois",
            "- Échec : dossier en attente, motif visible, aucune création aveugle",
            "- Relance : manuelle ou automatique selon une règle documentée",
            "- Rapprochement : rapport des succès, rejets et doublons potentiels",
            "- Responsables métier et technique : à nommer",
          ].join("\n")}
        </FormulaBox>

        <h3>Mini-lexique pour relire les offres</h3>

        <GuideTable
          headers={["Terme", "Traduction opérationnelle"]}
          rows={[
            [
              "API",
              "Moyen documenté par lequel deux logiciels échangent des données ou déclenchent une action",
            ],
            [
              "Source de vérité",
              "Système désigné comme référence quand une information existe à plusieurs endroits",
            ],
            [
              "Journalisation",
              "Trace datée d'une action, de son auteur et des valeurs modifiées",
            ],
            [
              "Recette",
              "Vérification formelle à partir de scénarios et de résultats attendus",
            ],
            [
              "Réversibilité",
              "Capacité à récupérer données, accès et connaissances pour changer de solution",
            ],
            [
              "Mode dégradé",
              "Façon temporaire de continuer ou reprendre quand un composant est indisponible",
            ],
          ]}
        />

        <h2 id="v1">4. Coupez la V1 sans déplacer le problème</h2>

        <p>
          Une V1 n&apos;est pas toutes les demandes marquées « importantes ».
          C&apos;est le plus petit ensemble de scénarios qui produit un résultat
          exploitable, avec ses contrôles, sa sécurité et sa reprise. Retirer
          les droits ou la migration pour sauver une date peut simplement
          déplacer le travail et le risque vers vos équipes.
        </p>

        <GuideTable
          headers={["Option", "Quand elle est crédible", "Question de preuve"]}
          rows={[
            [
              "Conserver ou reporter",
              "Le coût et le risque actuels restent acceptables, ou les règles ne sont pas stabilisées",
              "Quelle preuve montre qu'investir maintenant est préférable au statu quo ?",
            ],
            [
              "Corriger le processus",
              "Le défaut vient d'une règle, d'un rôle ou d'une organisation floue",
              "Quelle étape disparaît sans nouveau logiciel ?",
            ],
            [
              "Acheter un logiciel",
              "Le besoin est courant et le métier peut adopter son fonctionnement",
              "Les scénarios prioritaires sont-ils rejoués avec vos cas ?",
            ],
            [
              "Automatiser une jonction",
              "Deux outils conviennent mais imposent une ressaisie stable",
              "Que se passe-t-il si l'un refuse ou renvoie deux fois l'opération ?",
            ],
            [
              "Configurer du no-code",
              "Le flux bouge encore et les limites de plateforme sont acceptées",
              "Volumes, licences, accès, export et sortie ont-ils été testés ?",
            ],
            [
              "Développer sur mesure",
              "Les règles ou intégrations sont réellement spécifiques",
              "Quel scénario justifie le spécifique et quelle alternative est écartée ?",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Référentiel général d&apos;écoconception des services numériques
            (RGESN)
          </a>{" "}
          invite à questionner la nécessité de chaque fonctionnalité et à
          documenter les choix face aux alternatives. Appliquez le test :
          <strong> utile pour la V1, utile plus tard, ou non justifié</strong>.
          Écrivez ensuite ce qui reste hors périmètre : portail client, pilotage
          avancé, reprise de tout l&apos;historique ou connexion à un futur
          outil, selon votre situation.
        </p>

        <FormulaBox>
          {[
            "V1 acceptable = scénarios indispensables",
            "              + règles qui protègent le résultat",
            "              + données et droits nécessaires",
            "              + recette et bascule réalistes",
            "",
            "V1 dangereuse  = écrans séduisants",
            "               - exceptions",
            "               - reprise des données",
            "               - exploitation après mise en ligne",
          ].join("\n")}
        </FormulaBox>

        <p>
          Pour choisir ensuite le mode de réalisation, consultez le{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            comparatif no-code ou développement sur mesure
          </Link>
          . La technologie reste une réponse au dossier, pas son point de
          départ.
        </p>

        <h2 id="recette">5. Écrivez la recette avant de demander un devis</h2>

        <p>
          Un critère de recette décrit un résultat qu&apos;une personne
          identifiée peut observer avec un jeu de données donné. « Rapide », «
          intuitif », « sécurisé » ou « synchronisé » expriment une intention ;
          ces mots ne permettent pas encore d&apos;accepter ou de refuser un
          livrable.
        </p>

        <GuideTable
          headers={["Formulation faible", "Critère vérifiable"]}
          rows={[
            [
              "La recherche est rapide",
              "Sur le jeu convenu, les résultats apparaissent dans le seuil décidé et l'environnement défini",
            ],
            [
              "Les droits sont sécurisés",
              "Un demandeur du périmètre A ne peut ni ouvrir par URL ni exporter un dossier du périmètre B",
            ],
            [
              "L'import fonctionne",
              "Le fichier d'essai produit le nombre attendu de créations, mises à jour et rejets, sans doublon",
            ],
            [
              "Il y a des sauvegardes",
              "Une restauration est exécutée sur une copie, contrôlée et attestée par une preuve datée",
            ],
            [
              "L'outil est simple",
              "Des utilisateurs représentatifs terminent le scénario ; les blocages observés sont consignés et arbitrés",
            ],
          ]}
        />

        <h3>Un test contient six informations</h3>

        <ol>
          <li>
            <strong>un identifiant</strong> relié au scénario ou à la règle ;
          </li>
          <li>
            <strong>un responsable de validation</strong> côté métier ;
          </li>
          <li>
            <strong>un état initial</strong> et un jeu de données maîtrisé ;
          </li>
          <li>
            <strong>une action</strong> exécutée dans un environnement nommé ;
          </li>
          <li>
            <strong>un résultat attendu</strong>, y compris dans les systèmes
            connectés ;
          </li>
          <li>
            <strong>une preuve conservée</strong> : capture, export, journal,
            mesure ou procès-verbal.
          </li>
        </ol>

        <FormulaBox>
          {[
            "Étant donné : une demande de 650 €, un seuil de 500 €",
            "              et le responsable habituel absent,",
            "Lorsque :      le demandeur soumet puis le suppléant valide,",
            "Alors :        le demandeur ne peut pas s'auto-valider,",
            "              le suppléant voit le motif et le justificatif,",
            "              la décision est horodatée,",
            "              un seul export est créé vers la comptabilité,",
            "              et toute relance retrouve cet export sans le dupliquer.",
          ].join("\n")}
        </FormulaBox>

        <p>
          Préparez les jeux d&apos;essai avant la fin du développement. Couvrez
          le cas nominal, une donnée manquante, un droit insuffisant, un
          doublon, une panne d&apos;intégration et une reprise après
          interruption. Classez aussi les anomalies : <strong>bloquante</strong>{" "}
          si le processus critique ne peut aboutir ou si des données sont
          exposées ; <strong>majeure</strong>
          si un contournement dégrade fortement le travail ;{" "}
          <strong>mineure</strong>
          si le résultat reste utilisable. Le contrat précise lesquelles
          empêchent l&apos;acceptation du lot.
        </p>

        <InfoBox
          variant="amber"
          title="Une démonstration n'est pas une recette"
        >
          <p className="mb-0">
            Le prestataire maîtrise sa démonstration ; vos utilisateurs
            maîtrisent leurs cas. La recette commence lorsqu&apos;une personne
            habilitée exécute le scénario convenu avec les données convenues et
            compare le résultat à un critère écrit.
          </p>
        </InfoBox>

        <h2 id="responsabilites">
          6. Répartissez les responsabilités de la préparation à
          l&apos;exploitation
        </h2>

        <p>
          « Le client fournit les éléments nécessaires » est trop vague. Une
          responsabilité exploitable nomme un livrable, un propriétaire, une
          date et la conséquence d&apos;un retard. Une version légère du RACI
          suffit souvent : qui réalise, qui décide, qui est consulté et qui est
          informé.
        </p>

        <GuideTable
          headers={["Activité", "Entreprise", "Prestataire", "Preuve"]}
          rows={[
            [
              "Scénarios",
              "Décrit, fait observer, choisit V1 et exclusions",
              "Questionne et signale les contradictions",
              "Validation par le décideur",
            ],
            [
              "Données",
              "Fournit les sources et tranche les valeurs",
              "Profile, transforme, rejette et rapporte",
              "Bilan avant/après et rejets",
            ],
            [
              "Architecture",
              "Expose contraintes et systèmes existants",
              "Propose, compare et justifie",
              "Note de décision et dépendances",
            ],
            [
              "Recette",
              "Prépare les cas, exécute et accepte",
              "Prépare l'environnement, corrige et prouve",
              "Procès-verbal et anomalies restantes",
            ],
            [
              "Bascule",
              "Décide la fenêtre et mobilise les équipes",
              "Exécute, surveille et sait revenir",
              "Checklist horodatée",
            ],
            [
              "Exploitation",
              "Nomme support et propriétaires métier",
              "Documente et traite selon le contrat",
              "Procédures, accès et suivi",
            ],
            [
              "Fin de contrat",
              "Révoque les accès et choisit la destination",
              "Restitue puis détruit selon l'accord",
              "Export testé et inventaire des accès",
            ],
          ]}
        />

        <p>
          Ajoutez les dépendances externes : disponibilité de l&apos;éditeur
          comptable, accès à une API, validation de la personne chargée des
          données, achat de matériel ou mobilisation d&apos;une équipe. Un
          planning qui ignore ces acteurs ressemble à une promesse, pas encore à
          un plan.
        </p>

        <h3>Migration et retour arrière</h3>

        <p>
          La reprise de données est un projet dans le projet. Séparez
          extraction, nettoyage, transformation, import, rapprochement et
          acceptation. Décidez aussi s&apos;il faut tout reprendre, migrer
          uniquement les dossiers actifs avec une archive consultable, ou
          repartir avec une base nettoyée. Les règles de conservation et
          l&apos;usage réel de l&apos;historique guident ce choix.
        </p>

        <p>
          Le retour arrière précise la dernière décision possible avant bascule,
          l&apos;état de l&apos;ancien outil, le sort des opérations créées
          pendant la transition et la personne autorisée à revenir. « Nous avons
          une sauvegarde » n&apos;est pas un plan tant qu&apos;une restauration
          et un rapprochement n&apos;ont pas été essayés.
        </p>

        <h2 id="exigences-transverses">
          7. Cadrez sécurité, RGPD, continuité et sobriété à la juste mesure
        </h2>

        <p>
          Une petite application de suivi sans donnée sensible et un outil qui
          pilote des interventions critiques n&apos;appellent pas le même
          dispositif. Partez des impacts : que se passe-t-il si les données sont
          vues par la mauvaise personne, modifiées, perdues ou indisponibles ?
          Retenez des mesures proportionnées et nommez le risque qui reste.
        </p>

        <h3>Données personnelles</h3>

        <p>
          Lorsque l&apos;application traite des données personnelles, les
          recommandations de la CNIL sur la{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            minimisation
          </a>{" "}
          et les{" "}
          <a
            href="https://cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees"
            target="_blank"
            rel="noopener noreferrer"
          >
            durées de conservation
          </a>{" "}
          donnent des questions de cadrage utiles. Elles ne fixent pas une durée
          identique pour toutes les données ni tous les secteurs.
        </p>

        <ul>
          <li>
            Indiquez pour chaque donnée sa finalité, sa source et ses
            destinataires.
          </li>
          <li>
            Ne collectez pas un champ « au cas où » : reliez-le à un usage réel.
          </li>
          <li>
            Définissez une durée ou une règle de conservation par catégorie et
            le sort final.
          </li>
          <li>
            Évitez les données sensibles ou critiques dans les journaux
            techniques.
          </li>
          <li>
            Cadrez avec le sous-traitant les incidents, ses propres
            prestataires, la restitution et la destruction.
          </li>
        </ul>

        <p>
          Cette liste aide à poser les questions ; elle ne garantit pas à elle
          seule la conformité. Finalités, bases juridiques, durées et
          obligations sectorielles doivent être validées dans votre contexte.
        </p>

        <h3>Sécurité et continuité</h3>

        <ul>
          <li>
            Authentification multifacteur lorsque le risque et les outils le
            permettent.
          </li>
          <li>
            Droits minimaux, comptes nominatifs et procédure d&apos;arrivée, de
            changement et de départ.
          </li>
          <li>
            Journal des actions sensibles avec accès restreint et durée définie.
          </li>
          <li>
            Sauvegardes séparées, protégées et restauration testée avec une
            preuve.
          </li>
          <li>
            Procédure d&apos;incident : contact, qualification, information,
            décision et retour d&apos;expérience.
          </li>
          <li>
            Objectifs de reprise choisis selon l&apos;impact métier, non copiés
            d&apos;un modèle générique.
          </li>
        </ul>

        <p>
          L&apos;
          <a
            href="https://cyber.gouv.fr/securisation/homologation-de-securite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANSSI propose une démarche
          </a>{" "}
          allant de l&apos;identification des risques à leur acceptation
          explicite. Pour préparer le cahier des charges d&apos;une PME non
          soumise à une homologation formelle, commencez par un registre interne
          : risque, impact, mesure, propriétaire, preuve et risque résiduel
          accepté. Ce registre ne remplace ni une analyse de risques ni une
          homologation lorsqu&apos;elles sont requises.
        </p>

        <h3>Accessibilité et écoconception</h3>

        <p>
          Indiquez les situations d&apos;usage : clavier, faible connexion,
          petit écran, poste ancien, contraste, zoom, messages d&apos;erreur et
          éventuelles technologies d&apos;assistance. Déterminez séparément les
          obligations juridiques applicables. Même hors obligation, ces critères
          réduisent les blocages des utilisateurs.
        </p>

        <p>
          Pour l&apos;écoconception, questionnez la nécessité des
          fonctionnalités, le volume de données, la durée de vie des
          équipements, la compatibilité et l&apos;évolution. Le{" "}
          <a
            href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RGESN 2024
          </a>{" "}
          fournit une grille utile ; ce n&apos;est ni une certification
          automatique ni une obligation universelle pour toute application
          privée.
        </p>

        <h2 id="exemple">
          8. Exemple illustratif fictif : une PME de maintenance
        </h2>

        <InfoBox variant="blue" title="Exemple entièrement fictif">
          <p className="mb-0">
            L&apos;entreprise, ses 18 personnes, le seuil de 500 € et les
            situations ci-dessous sont inventés uniquement pour montrer la
            méthode. Ils ne décrivent aucun client, aucun résultat obtenu et
            aucun prix de marché.
          </p>
        </InfoBox>

        <p>
          Une PME fictive de maintenance reçoit les demandes par téléphone et
          e-mail. Une coordinatrice les reporte dans un tableur, les techniciens
          complètent des comptes rendus séparés et la comptabilité ressaisit les
          pièces. Le premier lot ne remplace pas toute la gestion : il fiabilise
          une intervention active, de son affectation à son export comptable.
        </p>

        <GuideTable
          headers={["Élément", "Contenu fictif cadré"]}
          rows={[
            [
              "Résultat",
              "Une intervention active a un responsable, un statut compréhensible et un compte rendu sans ressaisie aveugle",
            ],
            [
              "Utilisateurs",
              "Coordinatrice, 12 techniciens, responsable d'exploitation, comptabilité et administrateur fonctionnel",
            ],
            [
              "Scénarios V1",
              "Créer et qualifier ; affecter ; exécuter ; valider une pièce exceptionnelle ; clôturer ; exporter",
            ],
            [
              "Hors V1",
              "Portail client, facturation complète, stock prédictif, planification automatique et anciens dossiers clos",
            ],
            [
              "Données reprises",
              "Clients actifs, équipements en service, techniciens et interventions ouvertes ; historique archivé",
            ],
            [
              "Intégrations",
              "Référentiel client en lecture ; export des interventions clôturées vers la comptabilité",
            ],
          ]}
        />

        <h3>Un scénario relié à sa preuve</h3>

        <p>
          Le technicien clôture une intervention avec le temps passé, les pièces
          et des photos. Une pièce fictive supérieure à 500 € exige une
          validation. Sans connexion, le brouillon est conservé puis repris sans
          créer deux comptes rendus. Après validation, l&apos;intervention
          n&apos;est exportée qu&apos;une fois vers la comptabilité.
        </p>

        <GuideTable
          headers={["Risque", "Critère de recette fictif", "Preuve"]}
          rows={[
            [
              "Perte en mobilité",
              "Après déconnexion puis reconnexion, champs et photos du brouillon sont présents",
              "Capture avant/après et identifiant",
            ],
            [
              "Dépense non autorisée",
              "La pièce à 650 € bloque la clôture jusqu'à validation habilitée",
              "Statuts et journal des deux acteurs",
            ],
            [
              "Auto-validation",
              "Le technicien ne peut pas valider sa propre exception, même par URL",
              "Test du compte et refus enregistré",
            ],
            [
              "Double export",
              "Deux relances conservent un seul identifiant comptable",
              "Rapport de flux et recherche comptable",
            ],
            [
              "Historique incomplet",
              "Chaque statut affiche date, acteur, ancienne et nouvelle valeur",
              "Export du journal du dossier d'essai",
            ],
          ]}
        />

        <p>
          Un candidat peut proposer une application mobile, une interface web ou
          une autre architecture. Le dossier n&apos;impose pas la solution ; il
          impose la continuité, les contrôles, le résultat et sa preuve. Les
          réponses techniques deviennent ainsi discutables et comparables.
        </p>

        <h2 id="comparer">9. Comparez les offres sur les mêmes hypothèses</h2>

        <p>
          Envoyez le même dossier et les mêmes annexes à chaque candidat. Donnez
          un canal commun aux questions, puis partagez les réponses qui
          modifient le périmètre. Demandez enfin une feuille de réponse imposée
          : une proposition libre facilite le récit commercial, rarement le
          rapprochement ligne à ligne.
        </p>

        <GuideTable
          headers={["Ligne", "Réponse exigée", "Écart à repérer"]}
          rows={[
            [
              "Couverture",
              "Scénarios couverts, partiels, reportés ou exclus",
              "Une fonction citée sans exception ni critère",
            ],
            [
              "Hypothèses",
              "Volumes, qualité des données, disponibilité et accès tiers",
              "Une hypothèse optimiste cachée dans le forfait",
            ],
            [
              "Solution",
              "Alternative étudiée, architecture et compromis",
              "Une technologie imposée sans contrainte associée",
            ],
            [
              "Prestations",
              "Cadrage, réalisation, données, tests, formation et déploiement",
              "Recette ou reprise entièrement laissée au client",
            ],
            [
              "Coûts récurrents",
              "Licences, hébergement, support, maintenance et évolution",
              "Un prix initial qui déplace les charges après lancement",
            ],
            [
              "Réversibilité",
              "Formats d'export, code, documentation, accès et assistance",
              "Une propriété promise sans accès exploitable",
            ],
            [
              "Acceptation",
              "Environnements, preuves, corrections et anomalies bloquantes",
              "Paiement final après une simple démonstration",
            ],
          ]}
        />

        <p>
          Le prix n&apos;arrive qu&apos;après cette normalisation. Consultez les{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            postes de prix d&apos;un logiciel sur mesure
          </Link>{" "}
          et vérifiez les droits, le dépôt, les comptes et la documentation avec
          le guide sur la{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            propriété du code source
          </Link>
          .
        </p>

        <h3>Les signaux d&apos;une offre encore non comparable</h3>

        <ul>
          <li>
            Le besoin est reformulé uniquement en écrans et en nombre de jours.
          </li>
          <li>
            Exceptions, qualité des données ou pannes sont « à voir plus tard ».
          </li>
          <li>
            La proposition ne sépare pas inclus, supposé, optionnel et exclu.
          </li>
          <li>
            Personne ne prépare les jeux d&apos;essai ni n&apos;accepte le
            résultat.
          </li>
          <li>
            La maintenance est un pourcentage sans service ni responsabilité.
          </li>
          <li>
            La réversibilité promet un export sans format, pièces jointes ni
            test.
          </li>
          <li>
            Une norme ou un hébergeur sert de preuve globale de conformité.
          </li>
        </ul>

        <h3>Votre premier scénario dans les prochaines 48 heures</h3>

        <ol>
          <li>
            Choisissez un dossier récent et faites-le rejouer par son
            utilisateur.
          </li>
          <li>
            Écrivez le résultat en une phrase avec un indicateur mesurable.
          </li>
          <li>
            Décrivez le parcours nominal puis trois exceptions déjà rencontrées.
          </li>
          <li>
            Listez les données, logiciels et rôles touchés par ce scénario.
          </li>
          <li>
            Rédigez un test normal et un cas qui doit être refusé ou repris.
          </li>
          <li>
            Faites relire par un utilisateur, le décideur et le propriétaire des
            données.
          </li>
        </ol>

        <p>
          Si ces étapes sont impossibles, ne lancez pas encore la consultation.
          Le blocage révèle une règle non tranchée, une donnée sans propriétaire
          ou des attentes contradictoires. Les résoudre avant le devis est déjà
          un résultat de cadrage.
        </p>

        <GuideInlineCTA
          title="Votre dossier est-il réellement consultable ?"
          description="Nous pouvons relire scénarios, exclusions, données, critères de recette et hypothèses avant consultation. Cette revue convient aux processus spécifiques ou critiques ; elle n'est pas destinée à mettre en page un document ou à donner un prix instantané sans périmètre."
          tags={[
            "Revue argumentée",
            "Périmètre et risques",
            "Sans promesse automatique",
          ]}
          ctaLabel="Faire relire mon dossier"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">
          Sources officielles, référentiels et guides consultés
        </h2>

        <p>
          Sources consultées le 20 juillet 2026. Leur périmètre est indiqué pour
          ne pas transformer une méthode publique ou un référentiel en
          obligation générale pour toutes les entreprises.
        </p>

        <ul>
          <li>
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DINUM / DesignGouv — Concevoir un service public numérique de
              qualité
            </a>{" "}
            : partir des besoins, observer les utilisateurs, tester tôt et
            piloter par l&apos;impact. La source vise les services publics ;
            nous en transposons la méthode.
          </li>
          <li>
            <a
              href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Référentiel général d&apos;écoconception — RGESN 2024
            </a>{" "}
            : utilité, limitation des fonctionnalités et données, documentation
            des choix et cycle de vie.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Minimiser les données collectées
            </a>{" "}
            et{" "}
            <a
              href="https://cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees"
              target="_blank"
              rel="noopener noreferrer"
            >
              Les durées de conservation
            </a>{" "}
            : catégories, finalités, minimisation, durées et purge.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Sécurité : gérer la sous-traitance
            </a>{" "}
            : garanties, contrat, incidents et sort des données en fin de
            prestation.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Sécurité : sauvegarder
            </a>{" "}
            : séparation, protection, contrôle d&apos;intégrité et restauration
            testée.
          </li>
          <li>
            <a
              href="https://cyber.gouv.fr/securisation/homologation-de-securite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI / DINUM — Homologation de sécurité
            </a>{" "}
            : impacts, risques, mesures et acceptation. La démarche est utilisée
            comme méthode proportionnée, sans affirmer une obligation
            universelle.
          </li>
          <li>
            <a
              href="https://cyber.gouv.fr/securisation/10-regles-or-securite-numerique/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — 10 règles d&apos;or en matière de sécurité numérique
            </a>{" "}
            : authentification multifacteur, sauvegardes et moindre privilège.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — Pourquoi et comment mettre en place un ERP pour les
              TPE
            </a>{" "}
            : besoins indispensables, solutions existantes et implication des
            équipes.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — Bâtir le cahier des charges du site internet
            </a>{" "}
            : besoins, contraintes, objectifs, budget et organisation. Cette
            source porte sur les sites ; seule sa méthode générale est
            transférée.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
