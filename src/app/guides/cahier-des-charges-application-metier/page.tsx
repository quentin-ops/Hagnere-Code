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
        alt: "Cahier des charges d’une application métier pour obtenir des devis comparables",
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
      "Il n’existe pas de longueur idéale. Le document est assez précis lorsque tous les candidats chiffrent la même première version et comprennent les mêmes cas particuliers. Cinq scénarios concrets valent mieux qu’un long catalogue d’écrans sans priorité.",
  },
  {
    question:
      "Qui doit rédiger le cahier des charges : l'entreprise ou le prestataire ?",
    answer:
      "L’entreprise décide des objectifs, priorités, exceptions, données, droits et résultats attendus. Un prestataire peut organiser les ateliers et reformuler. Chaque scénario doit toutefois être validé par une personne qui réalise le travail, avec un décideur clairement désigné.",
  },
  {
    question:
      "Faut-il choisir la technologie avant d'envoyer le cahier des charges ?",
    answer:
      "Généralement non. Décrivez d’abord les usages, volumes, connexions et contraintes certaines. Demandez ensuite aux candidats de proposer une solution et de la comparer à un logiciel existant. N’imposez une technologie que si votre système, vos compétences internes ou une règle établie l’exigent réellement.",
  },
  {
    question:
      "Un cahier des charges est-il compatible avec une méthode agile ?",
    answer:
      "Oui. Fixez les résultats attendus, les scénarios prioritaires, les règles incontournables, les données, les responsabilités et les critères d’acceptation, sans figer chaque écran. L’interface peut évoluer si l’effet sur le budget, le calendrier et la validation reste visible.",
  },
  {
    question: "Comment obtenir des devis de logiciel réellement comparables ?",
    answer:
      "Envoyez à tous le même document, les mêmes exemples anonymisés, les mêmes volumes et la même grille de réponse. Faites séparer hypothèses, exclusions, licences, reprise de données, tests, mise en production, maintenance et restitution. Vous pourrez alors expliquer les écarts de prix.",
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
          { label: "Cahier des charges d'une application métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous voulez faire développer un outil interne, mais chaque prestataire comprend un projet différent ? Ce guide et son modèle gratuit vous aident à expliquer le besoin, obtenir des devis comparables et éviter les désaccords en fin de projet."
        heroAction={{
          href: "#telecharger-kit",
          label: "Télécharger le modèle",
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
            title: "Besoin compris de tous",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Devis réellement comparables",
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
            Vous expliquez votre projet à trois prestataires. Le premier imagine
            un simple formulaire, le deuxième une plateforme complète et le
            troisième vous envoie un prix impossible à comparer. Le problème
            n&apos;est pas forcément leur compétence : chacun a compris un
            besoin différent.
          </strong>
        </p>
        <p>
          Un <strong>cahier des charges d&apos;application métier</strong> est
          un document qui explique le travail à simplifier, les personnes
          concernées, les cas particuliers, les données utilisées et la façon de
          vérifier que la première version fonctionne. Il ne sert pas à dessiner
          tous les boutons : il sert à obtenir des réponses et des devis portant
          sur le même projet.
        </p>

        <p>
          La réponse simple est de partir de situations réelles : comment un
          dossier arrive, qui le traite, où il bloque, qui valide et ce qui doit
          ressortir à la fin. Avec cinq à huit scénarios prioritaires, des
          exemples anonymisés et des critères d&apos;acceptation clairs, vous
          pouvez décider si le sur-mesure est justifié, comparer les offres et
          limiter les malentendus pendant la réalisation.
        </p>

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
            questions, puis vérifier et accepter la version. L&apos;effort
            dépend du nombre de parcours, d&apos;exceptions, de sources de
            données et d&apos;intégrations ; aucune durée universelle ne serait
            sérieuse.
          </p>
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "dossier-final",
              label: "1. Le modèle d’une page à remplir",
            },
            {
              id: "v1",
              label: "2. Choisir la première version et comparer les offres",
            },
            { id: "scenarios", label: "3. Décrire 5 à 8 scénarios métier" },
            {
              id: "regles-donnees-droits",
              label:
                "4. Expliquer règles, données, droits et logiciels connectés",
            },
            { id: "recette", label: "5. Décider comment accepter la version" },
            { id: "responsabilites", label: "6. Écrire qui fait quoi" },
            {
              id: "exigences-transverses",
              label: "7. Adapter sécurité et continuité aux risques réels",
            },
            { id: "exemple", label: "8. Exemple illustratif fictif" },
            { id: "sources", label: "Sources officielles consultées" },
          ]}
        />

        <h2 id="dossier-final">1. Remplissez d’abord ce modèle d’une page</h2>

        <p>
          Cette page suffit pour une première discussion. Les annexes viennent
          seulement lorsqu’une règle, une donnée ou une connexion exige plus de
          précision. Son rôle n&apos;est pas de tout prévoir : elle rend
          visibles les décisions qui changent le prix ou l&apos;acceptation du
          logiciel.
        </p>

        <p>
          Voici une ossature à copier dans votre outil de rédaction. Elle reste
          volontairement courte : les annexes portent les données répétitives.
          Dans le modèle, <strong>V1</strong> désigne la première version assez
          complète pour être réellement utilisée, pas une démonstration ni une
          accumulation de fonctions secondaires.
        </p>

        <FormulaBox>
          {[
            "1. Décision",
            "- Problème observé :",
            "- Résultat métier attendu :",
            "- Indicateur actuel / cible / méthode de mesure :",
            "- Dirigeant qui porte le projet et décideur final :",
            "- Budget, date ou contrainte réellement fixe :",
            "",
            "2. Ce qui est inclus",
            "- Équipe et travail concernés :",
            "- Situations traitées dans la première version :",
            "- Reporté après la première version :",
            "- Explicitement exclu :",
            "",
            "3. Scénarios métier",
            "- Déclencheur, acteurs, étapes, règles, exceptions, résultat et contrôle :",
            "",
            "4. Données, droits et logiciels connectés",
            "- Sens des données, volumes, qualité, conservation, rôles, échanges et pannes :",
            "",
            "5. Vérification et mise en service",
            "- Données d'essai, résultats attendus, reprise des données et retour à l'ancien outil :",
            "",
            "6. Responsabilités et exploitation",
            "- Fournitures, décisions, développement, validation, support et sortie :",
            "",
            "7. Réponse attendue du candidat",
            "- Solution, autres options étudiées, suppositions, exclusions, coût et éléments remis :",
          ].join("\n")}
        </FormulaBox>

        <InfoBox
          variant="amber"
          title="Trois éléments ne doivent jamais être implicites"
        >
          <p className="mb-0">
            Écrivez noir sur blanc ce qui est <strong>exclu</strong>, qui a le
            pouvoir d&apos;<strong>arbitrer</strong> et quel résultat déclenche
            l&apos;<strong>acceptation</strong>. Sans eux, une même phrase peut
            encore produire plusieurs projets et plusieurs devis incomparables.
          </p>
        </InfoBox>

        <h2 id="v1">
          2. Choisissez la première version avant de demander un prix
        </h2>

        <p>
          Pour chaque besoin, posez d’abord la question la moins coûteuse :
          faut-il conserver le fonctionnement actuel, corriger l’organisation,
          acheter un outil, relier deux logiciels ou développer ? La première
          version ne garde que les situations sans lesquelles l’équipe ne peut
          pas obtenir un résultat fiable.
        </p>

        <GuideTable
          headers={[
            "Réponse possible",
            "Quand elle est crédible",
            "Question à trancher",
          ]}
          rows={[
            [
              "Conserver ou corriger",
              "Le coût actuel reste acceptable ou le blocage vient surtout d’une règle ou d’un rôle flou.",
              "Quelle étape disparaît sans nouveau logiciel ?",
            ],
            [
              "Acheter un outil existant",
              "Le besoin est courant et l’équipe peut adopter son fonctionnement.",
              "Les scénarios prioritaires fonctionnent-ils avec vos cas réels ?",
            ],
            [
              "Relier les outils",
              "Deux logiciels conviennent mais imposent une ressaisie stable.",
              "Que se passe-t-il si un échange échoue ou est relancé ?",
            ],
            [
              "Configurer une plateforme",
              "Le flux évolue encore et les limites de volume, licence et export sont acceptables.",
              "Pouvez-vous récupérer les données et changer de solution ?",
            ],
            [
              "Développer sur mesure",
              "Une règle, une intégration ou un usage est réellement particulier.",
              "Quel scénario justifie ce coût et quelle alternative a été écartée ?",
            ],
          ]}
        />

        <h3>Donnez la même feuille de réponse à chaque candidat</h3>

        <p>
          Demandez pour chaque scénario : couvert, partiel, reporté ou exclu ;
          hypothèses sur les volumes et les données ; travail du prestataire et
          du client ; coût initial et récurrent ; tests ; éléments restitués en
          sortie. Un prix ne devient comparable qu’après cette normalisation.
        </p>

        <InfoBox variant="blue" title="Trois signaux d’une offre encore floue">
          Les exceptions sont renvoyées à plus tard, la proposition ne sépare
          pas inclus et exclu, ou personne ne prépare les cas de test. Faites
          corriger ces points avant de comparer les totaux.
        </InfoBox>

        <p>
          Le{" "}
          <a
            href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Référentiel général d&apos;écoconception des services numériques
          </a>{" "}
          invite aussi à questionner la nécessité des fonctions et à documenter
          les alternatives. Classez chaque demande : utile maintenant, utile
          plus tard ou non justifiée.
        </p>

        <h2 id="scenarios">
          3. Écrivez 5 à 8 scénarios métier, pas une liste d&apos;écrans
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
          Rejouez un dossier récent avec la personne qui l’a traité. Décrivez le
          résultat attendu sans choisir l’écran à sa place, puis ajoutez une
          exception réellement rencontrée.
        </p>

        <FormulaBox>
          {[
            "Scénario S-01 — [verbe + résultat attendu]",
            "",
            "But : quel travail doit aboutir ?",
            "Déclencheur : quel événement fait commencer le parcours ?",
            "Acteurs : qui agit, décide et doit être informé ?",
            "Parcours normal : quelles étapes mènent au résultat ?",
            "Règles et exceptions : qu'est-ce qui change la décision ?",
            "Données : quelles informations entrent, changent et ressortent ?",
            "Résultat et vérification : qu'observe la personne qui accepte ?",
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
              "Selon quelle règle ?",
              "Selon le montant",
              "La condition et la personne qui tranche sont écrites sans valeur implicite",
            ],
            [
              "Et si cela échoue ?",
              "Afficher une erreur",
              "Conserver le travail utile, expliquer la suite et permettre une reprise contrôlée",
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
          4. Expliquez les règles, les données, les droits et les logiciels
          connectés
        </h2>

        <p>
          Le scénario raconte le travail. Quatre annexes courtes rendent ce
          travail fiable. Ne les remplissez que pour les éléments réellement
          utilisés dans la première version.
        </p>

        <GuideTable
          headers={["Annexe", "Ce qu’elle doit répondre", "Exemple de preuve"]}
          rows={[
            [
              "Règles",
              "Quelle condition change le résultat, qui tranche et qui peut modifier le seuil ?",
              "Règle numérotée reliée au scénario et au test.",
            ],
            [
              "Données",
              "À quoi sert chaque information, d’où vient-elle, qui la voit et combien de temps reste-t-elle ?",
              "Petit fichier anonymisé avec cas normal, valeur absente et doublon.",
            ],
            [
              "Droits",
              "Qui peut voir, créer, modifier, valider, exporter ou supprimer dans quel périmètre ?",
              "Essai avec deux rôles et un accès qui doit être refusé.",
            ],
            [
              "Logiciels connectés",
              "Qu’échangent-ils, qui les possède et que se passe-t-il en cas d’échec ou de relance ?",
              "Rapport des succès, rejets et doublons potentiels.",
            ],
          ]}
        />

        <p>
          Une interface entre logiciels est souvent appelée <strong>API</strong>
          . La <strong>journalisation</strong> est la trace datée d’une action.
          Le
          <strong>mode dégradé</strong> décrit comment continuer temporairement
          lorsqu’un composant tombe. Ces termes ne dispensent jamais d’écrire le
          résultat attendu en français.
        </p>

        <h2 id="recette">
          5. Décidez avant le devis comment vous direz « cette version
          fonctionne »
        </h2>

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
            "Étant donné : un demandeur de l’agence A",
            "              et un dossier appartenant à l’agence B,",
            "Lorsque :      le demandeur ouvre directement l’adresse du dossier,",
            "Alors :        l’accès est refusé sans afficher ses données,",
            "              la tentative est horodatée,",
            "              et le responsable prévu peut retrouver ce refus.",
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
          title="Une démonstration ne suffit pas pour accepter la version"
        >
          <p className="mb-0">
            Le prestataire maîtrise sa démonstration ; vos utilisateurs
            maîtrisent leurs cas. La vérification commence lorsqu&apos;une
            personne autorisée exécute la situation prévue avec les bonnes
            données et compare le résultat à un critère écrit.
          </p>
        </InfoBox>

        <h2 id="responsabilites">
          6. Écrivez qui fait quoi, de la préparation à la maintenance
        </h2>

        <p>
          « Le client fournit les éléments nécessaires » est trop vague. Une
          responsabilité exploitable nomme ce qui doit être fourni, la personne
          responsable, une date et la conséquence d&apos;un retard. Écrivez
          simplement qui réalise, qui décide, qui est consulté et qui doit être
          informé.
        </p>

        <GuideTable
          headers={["Activité", "Qui fait quoi", "Comment valider"]}
          rows={[
            [
              "Scénarios",
              "l’entreprise décrit et choisit la V1 ; le prestataire questionne et signale les contradictions",
              "validation par le décideur",
            ],
            [
              "Données",
              "l’entreprise fournit les sources et tranche les valeurs ; le prestataire analyse, transforme et signale les rejets",
              "bilan avant/après et liste des rejets",
            ],
            [
              "Architecture",
              "l’entreprise expose ses contraintes ; le prestataire propose, compare et justifie",
              "note de décision et dépendances",
            ],
            [
              "Vérification et acceptation",
              "l’entreprise prépare les cas, exécute et accepte ; le prestataire prépare l’environnement et corrige",
              "procès-verbal et anomalies restantes",
            ],
            [
              "Mise en service",
              "l’entreprise choisit l’horaire et mobilise les équipes ; le prestataire exécute, surveille et sait revenir à l’ancienne version",
              "liste de contrôle horodatée",
            ],
            [
              "Exploitation",
              "l’entreprise nomme le support et les responsables métier ; le prestataire documente et traite selon le contrat",
              "procédures, accès et suivi",
            ],
            [
              "Fin de contrat",
              "l’entreprise révoque les accès et choisit la destination ; le prestataire restitue puis détruit selon l’accord",
              "export testé et inventaire des accès",
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

        <p>
          Après la mise en production, cette responsabilité devient un flux
          récurrent. Le guide du{" "}
          <Link href="/guides/contrat-tma-application">
            contrat TMA d’une application
          </Link>{" "}
          montre comment relier incident, priorité, délai, temps réservé,
          acceptation des corrections et changement de prestataire sans
          transformer le tableau des rôles en promesse vague de support.
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
          7. Adaptez sécurité, données personnelles et continuité aux risques
          réels
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
            trace datée.
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
          soumise à une homologation formelle, commencez par un tableau interne
          : risque, impact, mesure prévue, responsable, contrôle et risque
          résiduel accepté. Ce tableau ne remplace ni une analyse de risques ni
          une homologation lorsqu&apos;elles sont requises.
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

        <h3>Un scénario relié à ses tests</h3>

        <p>
          Le technicien clôture une intervention avec le temps passé, les pièces
          et des photos. Une pièce fictive supérieure à 500 € exige une
          validation. Sans connexion, le brouillon est conservé puis repris sans
          créer deux comptes rendus. Après validation, l&apos;intervention
          n&apos;est exportée qu&apos;une fois vers la comptabilité.
        </p>

        <GuideTable
          headers={[
            "Risque",
            "Critère de recette fictif",
            "Résultat à conserver",
          ]}
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
          impose la continuité, les contrôles, le résultat et sa vérification.
          Les réponses techniques deviennent ainsi discutables et comparables.
        </p>

        <h3>Votre première page dans les prochaines 48 heures</h3>

        <ol>
          <li>
            Faites rejouer un dossier récent, son cas normal et une exception.
          </li>
          <li>
            Remplissez le modèle, choisissez ce qui entre dans la première
            version et rédigez deux tests.
          </li>
          <li>
            Faites relire par l’utilisateur, le décideur et la personne
            responsable des données avant d’envoyer le même dossier aux
            candidats.
          </li>
        </ol>

        <p>
          Si cette page est impossible à compléter, ne lancez pas encore la
          consultation. Pour lire ensuite les montants, consultez les{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            postes de prix d&apos;un logiciel sur mesure
          </Link>
          .
        </p>
        <p>
          Lorsque le dossier est prêt, utilisez le guide{" "}
          <Link href="/guides/choisir-prestataire-application-metier">
            choisir un prestataire pour une application métier
          </Link>
          . Il propose le même mini-cas à tous les candidats, six preuves à
          obtenir et une fiche de décision sans note artificielle.
        </p>

        <GuideInlineCTA
          title="Obtenir des devis qui parlent enfin du même projet"
          description="Vous avez décrit l’idée mais vous hésitez sur les situations à traiter, les exclusions ou les tests à demander ? Nous relisons le besoin avant consultation pour rendre les réponses comparables et repérer ce qui ferait varier le prix. Cette revue n’est pas un devis instantané sans savoir ce qui est inclus."
          tags={[
            "Besoin mieux compris",
            "Devis comparables",
            "Risques visibles avant signature",
          ]}
          ctaLabel="Faire relire mon cahier des charges"
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
