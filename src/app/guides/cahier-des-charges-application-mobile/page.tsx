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
import { formatGuideDate, getGuide, guidePath, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("cahier-des-charges-application-mobile");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
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
  headline: guide.cardTitle,
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
      name: "Cahier des charges d’application mobile",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "À quoi sert un cahier des charges d’application mobile ?",
    answer:
      "Il permet à plusieurs prestataires de comprendre le même projet et de chiffrer le même travail. Il décrit les utilisateurs, les actions essentielles, les données, les contraintes du téléphone, la publication, la maintenance, le budget et les résultats attendus. Il ne doit pas imposer une solution technique que vous ne maîtrisez pas.",
  },
  {
    question: "Faut-il un long document pour une petite application ?",
    answer:
      "Non. Quelques pages précises peuvent suffire si elles répondent aux décisions importantes. Décrivez le problème, trois parcours utilisateurs, les fonctions indispensables, ce qui attendra, les données, les contraintes mobiles, le budget et les tests d’acceptation. Un document court avec des choix clairs vaut mieux qu’une liste très longue sans priorité.",
  },
  {
    question: "Doit-on indiquer le budget disponible ?",
    answer:
      "Oui, au moins sous forme de fourchette. Le prestataire peut alors proposer une première version compatible avec vos moyens et expliquer ce qui devra attendre. Sans budget, vous risquez de recevoir des offres qui décrivent des produits différents. Demandez tout de même le détail des étapes pour comprendre comment le montant est construit.",
  },
  {
    question: "Qu’est-ce qu’un MVP ?",
    answer:
      "Le MVP est la plus petite première version réellement utile. Elle doit permettre à un utilisateur d’accomplir l’action principale et à l’entreprise de vérifier que le service apporte de la valeur. Ce n’est ni une maquette ni une application inachevée : les fonctions retenues doivent être utilisables, testées et maintenables.",
  },
  {
    question:
      "Faut-il choisir React Native, Flutter ou du natif dans le document ?",
    answer:
      "Pas sans raison liée au projet. Décrivez plutôt les téléphones visés, le hors-ligne, les fonctions de l’appareil, les performances attendues, l’équipe existante et le budget. Chaque prestataire doit proposer une technologie et expliquer ses avantages, ses limites et son coût de maintenance. Une contrainte technique existante peut naturellement être mentionnée.",
  },
  {
    question: "Faut-il publier sur iPhone et Android dès le début ?",
    answer:
      "Cela dépend des utilisateurs réels, pas d’une règle générale. Si votre équipe ou vos clients utilisent les deux, demandez les deux et faites chiffrer le surcoût. Si un seul parc est certain, une première plateforme peut réduire le travail à condition de prévoir la suite. Comparez aussi une application web si l’installation et les fonctions du téléphone ne sont pas nécessaires.",
  },
  {
    question: "Qui doit posséder les comptes Apple et Google Play ?",
    answer:
      "Ouvrez de préférence les comptes au nom de votre entreprise et invitez le prestataire avec les droits nécessaires. Votre société conserve ainsi la maîtrise de la publication, des paiements et des accès si elle change de partenaire. Le contrat doit aussi préciser la remise du code, des données, des clés et de la documentation.",
  },
  {
    question: "Combien coûte une application mobile ?",
    answer:
      "Le prix dépend surtout du nombre de parcours, du traitement des données, du hors-ligne, des connexions à d’autres logiciels, du design, des tests et de l’administration. Le cahier des charges doit séparer conception, développement, publication, hébergement, support et maintenance. Le guide dédié au prix d’une application mobile fournit des repères ; seul un devis sur votre besoin peut engager un prestataire.",
  },
  {
    question: "Un document généré par une IA suffit-il ?",
    answer:
      "Il peut fournir une structure et reformuler vos notes, mais il ne peut pas décider à votre place ce qui est indispensable, quel budget vous acceptez, quelles données sont sensibles ou quel résultat prouvera que l’application fonctionne. Faites relire le document par les futurs utilisateurs et assumez les décisions avant de demander des devis.",
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
          { label: "Cahier des charges d’application mobile" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez une idée d’application et vous voulez obtenir des devis comparables ? Voici le document à préparer, les décisions à prendre et un exemple rempli sans jargon inutile."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "10 sections à remplir",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Un exemple rempli de bout en bout",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Budget et maintenance inclus",
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
            href: "/guides/combien-coute-une-application-mobile",
            label: "Combien coûte une application mobile ?",
          },
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Cahier des charges de site internet",
          },
          {
            href: "/guides/react-native-ou-flutter",
            label: "React Native ou Flutter ?",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Combien coûte un SaaS ?",
          },
          {
            href: "/services/application-mobile",
            label: "Développement d’application mobile",
          },
          { href: "/methode", label: "Notre méthode" },
        ]}
        faqTitle="Cahier des charges mobile : les réponses utiles"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous avez une idée d’application, mais vous ne savez pas quoi écrire
          pour demander un devis. Faut-il décrire chaque écran ? Choisir la
          technologie ? Prévoir iPhone et Android ?{" "}
          <strong>
            Le cahier des charges sert simplement à faire comprendre le même
            projet à tous les prestataires.
          </strong>{" "}
          Il explique qui utilisera l’application, quelle action principale elle
          doit permettre, quelles fonctions sont nécessaires, quelles données
          seront utilisées, quel budget vous pouvez investir et comment vous
          vérifierez le résultat.
        </p>

        <p>
          Vous n’avez pas besoin de parler comme un développeur. Décrivez le
          métier et les situations réelles ; le prestataire doit traduire ces
          besoins en solution technique et justifier ses choix. Commencez par la
          plus petite première version réellement utile, puis écrivez aussi ce
          qu’elle ne fera pas. Vous obtiendrez des devis plus comparables, un
          calendrier plus lisible et moins de décisions coûteuses prises pendant
          le développement.
        </p>

        <InfoBox variant="blue" title="La réponse en une minute">
          Votre document est assez précis si une personne extérieure peut
          comprendre l’utilisateur, raconter les trois parcours principaux sans
          devoir deviner, distinguer la première version des idées futures et
          savoir qui fournit les contenus, les comptes, les validations et la
          maintenance.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "Ce que le document doit permettre",
            },
            {
              id: "de-quoi-parle-t-on",
              label: "Vérifier qu’une application mobile est nécessaire",
            },
            { id: "modele", label: "Le modèle en dix sections" },
            { id: "remplir", label: "Choisir une première version utile" },
            {
              id: "specificites-techniques",
              label: "Décrire les situations propres au téléphone",
            },
            {
              id: "rgpd",
              label: "Prévoir les données et les autorisations",
            },
            {
              id: "stores",
              label: "Organiser la publication Apple et Google",
            },
            {
              id: "maintenance",
              label: "Budgéter le fonctionnement après le lancement",
            },
            { id: "exemple", label: "Lire un exemple rempli" },
            {
              id: "budget",
              label: "Annoncer le budget et comparer les devis",
            },
            {
              id: "erreurs",
              label: "Corriger les oublis les plus fréquents",
            },
            {
              id: "process",
              label: "Répartir la rédaction et les décisions",
            },
            {
              id: "declinaisons",
              label: "Comparer application mobile, web et PWA",
            },
            { id: "methode", label: "Passer du document au devis" },
          ]}
        />

        <h2 id="reponse-rapide">Ce que le document doit permettre</h2>

        <p>
          Un bon cahier des charges doit permettre trois choses : comprendre le
          besoin sans réunion supplémentaire, chiffrer le travail sans inventer
          la moitié du produit et vérifier à la fin que l’application fait ce
          qui était attendu. Il sert de base de discussion ; le contrat et le
          devis doivent ensuite préciser les engagements.
        </p>

        <ul>
          <li>
            <strong>Pour qui ?</strong> Décrivez les utilisateurs et leur
            situation, par exemple des techniciens parfois sans réseau.
          </li>
          <li>
            <strong>Pour faire quoi ?</strong> Retenez trois à cinq actions,
            comme voir une mission, saisir un compte rendu et ajouter une photo.
          </li>
          <li>
            <strong>Avec quelles limites ?</strong> Écrivez ce qui attendra, par
            exemple la facturation dans une version future.
          </li>
          <li>
            <strong>Avec quelles contraintes ?</strong> Nommez les données,
            téléphones, logiciels existants et dates à respecter.
          </li>
          <li>
            <strong>Comment accepter le résultat ?</strong> Prévoyez des tests
            observables, comme vérifier qu’un rapport envoyé apparaît une seule
            fois au bureau.
          </li>
        </ul>

        <p>
          Une phrase comme « créer une application moderne et intuitive » ne
          permet pas de chiffrer. Une phrase comme « un technicien ouvre sa
          mission, ajoute trois photos hors ligne puis synchronise le rapport au
          retour du réseau » montre déjà les écrans, les données et le cas
          difficile.
        </p>

        <h3 id="de-quoi-parle-t-on">
          Vérifier qu’une application mobile est nécessaire
        </h3>

        <p>
          Une application mobile est installée sur le téléphone, souvent depuis
          l’App Store d’Apple ou Google Play. Elle devient pertinente lorsqu’il
          faut utiliser la caméra, la localisation, des notifications, le
          fonctionnement sans réseau ou une présence fréquente sur l’écran
          d’accueil. Si le service consiste surtout à remplir un formulaire ou
          consulter quelques pages avec une connexion, une application web peut
          coûter moins cher et éviter la publication dans les stores.
        </p>

        <ul>
          <li>
            <strong>Application mobile :</strong> à examiner pour un usage
            fréquent qui tire une vraie valeur de la caméra, du hors-ligne ou
            des notifications.
          </li>
          <li>
            <strong>Application web :</strong> souvent suffisante pour un accès
            occasionnel depuis plusieurs appareils avec une connexion.
          </li>
          <li>
            <strong>PWA :</strong> utile pour un site installable avec quelques
            fonctions hors ligne, après vérification de ses limites sur iPhone.
          </li>
          <li>
            <strong>Maquette ou test manuel :</strong> préférable si l’intérêt
            de l’idée n’est pas encore prouvé.
          </li>
        </ul>

        <p>
          Cette comparaison n’est pas un recul. Elle protège le budget pour le
          résultat dont les utilisateurs ont réellement besoin.
        </p>

        <h2 id="modele">Le modèle en dix sections</h2>

        <p>
          Copiez les dix titres suivants dans un document modifiable. Répondez
          avec des phrases courtes, des listes et, si possible, des croquis
          simples. Vous pouvez envoyer ensuite une version PDF identique à tous
          les prestataires.
        </p>

        <GuideTable
          caption="Structure du cahier des charges"
          headers={["Section", "Ce que vous écrivez", "Décision obtenue"]}
          rows={[
            [
              "1. Entreprise et problème",
              "Activité, situation actuelle et résultat recherché",
              "Pourquoi le projet existe",
            ],
            [
              "2. Utilisateurs",
              "Profils, appareils et contexte d’usage",
              "Pour qui les choix seront faits",
            ],
            [
              "3. Actions principales",
              "Parcours décrits étape par étape",
              "Ce que l’utilisateur pourra accomplir",
            ],
            [
              "4. Première version",
              "Indispensable, plus tard et exclu",
              "Ce qui sera réellement chiffré",
            ],
            [
              "5. Plateformes",
              "iPhone, Android, appareils et versions à confirmer",
              "Le parc à tester",
            ],
            [
              "6. Contraintes mobiles",
              "Hors-ligne, caméra, localisation et notifications",
              "Les cas qui influencent le coût",
            ],
            [
              "7. Données et sécurité",
              "Données collectées, accès, suppression et hébergement",
              "Les responsabilités à organiser",
            ],
            [
              "8. Publication",
              "Comptes, fiches stores, tests et refus éventuel",
              "Qui mène l’application jusqu’au public",
            ],
            [
              "9. Projet et maintenance",
              "Responsables, dates, corrections et suivi annuel",
              "Qui agit avant et après le lancement",
            ],
            [
              "10. Budget et acceptation",
              "Fourchette, coûts récurrents et scénarios de test",
              "Comment comparer puis valider",
            ],
          ]}
        />

        <p>
          Pour les écrans, un dessin à la main suffit. Montrez l’écran de
          départ, l’action de l’utilisateur, le résultat normal et ce qui
          s’affiche si une information manque. Le dessin sert à révéler les
          décisions, pas à imposer le design final.
        </p>

        <h3 id="remplir">Choisir une première version utile</h3>

        <p>
          Le <strong>MVP</strong> est la plus petite première version réellement
          utile. Pour la préparer, classez chaque idée dans trois listes :
          indispensable au premier lancement, utile plus tard, ou volontairement
          absent. Vous n’avez pas besoin d’employer la méthode anglaise MoSCoW
          pour prendre cette décision.
        </p>

        <ul>
          <li>
            <strong>Indispensable :</strong> sans cette fonction, l’utilisateur
            ne peut pas obtenir le résultat principal, par exemple commander et
            payer un bouquet.
          </li>
          <li>
            <strong>Plus tard :</strong> la fonction apporte de la valeur après
            le premier usage, comme un programme de fidélité.
          </li>
          <li>
            <strong>Pas dans cette version :</strong> le besoin reste incertain
            ou trop coûteux, comme une livraison à domicile encore non testée.
          </li>
        </ul>

        <p>
          Commencer petit ne repose pas sur un pourcentage universel : chaque
          fonction ajoutée doit être conçue, testée, expliquée et maintenue.
        </p>

        <h2 id="specificites-techniques">
          Décrire les situations propres au téléphone
        </h2>

        <p>
          Quatre décisions influencent fortement le devis. Le{" "}
          <strong>hors-ligne</strong> précise ce qui fonctionne sans réseau et
          comment les données sont envoyées ensuite. Les{" "}
          <strong>notifications</strong> sont les messages affichés sur le
          téléphone. Les <strong>autorisations</strong> permettent d’utiliser la
          caméra, la localisation ou le micro. Les{" "}
          <strong>liens directs</strong> ouvrent un écran précis depuis un
          courriel ou un message.
        </p>

        <GuideTable
          caption="Les questions mobiles à écrire"
          headers={["Sujet", "Question métier", "Cas à tester"]}
          rows={[
            [
              "Sans réseau",
              "Quelles actions restent possibles ?",
              "Deux modifications sont synchronisées dans le bon ordre",
            ],
            [
              "Notification",
              "À quel moment apporte-t-elle une valeur claire ?",
              "Le refus n’empêche pas d’utiliser le service",
            ],
            [
              "Caméra ou localisation",
              "Pourquoi cette autorisation est-elle nécessaire ?",
              "L’utilisateur refuse ou retire l’autorisation",
            ],
            [
              "Lien depuis un message",
              "Quel écran doit s’ouvrir ?",
              "Utilisateur connecté ou non connecté",
            ],
          ]}
        />

        <p>
          Sur Android 13 et les versions suivantes, les notifications des
          nouvelles installations sont désactivées tant que l’utilisateur ne les
          autorise pas. La{" "}
          <a
            href="https://developer.android.com/develop/ui/views/notifications/notification-permission"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Android
          </a>{" "}
          recommande de demander cette permission dans un contexte qui en montre
          l’utilité. Écrivez donc « après la première commande » plutôt que «
          dès l’ouverture de l’application » si c’est le moment où la valeur
          devient évidente.
        </p>

        <h2 id="rgpd">Prévoir les données et les autorisations</h2>

        <p>
          Listez les données nécessaires, leur utilité, les personnes qui y
          accèdent, la durée de conservation, le lieu d’hébergement et la façon
          de supprimer un compte. Une autorisation technique du téléphone ne
          suffit pas toujours à établir une base juridique pour traiter des
          données personnelles.
        </p>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/recommandations-applications-mobiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL
          </a>{" "}
          a publié des recommandations dédiées aux applications mobiles. Apple
          demande également de déclarer les usages de données et encadre le
          suivi entre applications via son mécanisme{" "}
          <a
            href="https://developer.apple.com/app-store/user-privacy-and-data-use/"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Tracking Transparency
          </a>
          . Votre document doit signaler les usages prévus ; un conseil
          juridique ou le délégué à la protection des données doit qualifier les
          obligations du projet lorsque les données sont sensibles ou le suivi
          complexe.
        </p>

        <GuideTable
          caption="La fiche minimale pour chaque donnée"
          headers={[
            "Donnée",
            "Pourquoi elle est nécessaire",
            "Qui peut y accéder",
          ]}
          rows={[
            [
              "Adresse électronique",
              "Créer le compte et envoyer une confirmation",
              "Client et support habilité",
            ],
            [
              "Localisation",
              "Trouver le point de retrait choisi",
              "Application au moment de la recherche",
            ],
            [
              "Photo",
              "Joindre une preuve à un dossier",
              "Utilisateur et responsable du dossier",
            ],
            [
              "Mesure d’usage",
              "Comprendre les écrans utilisés",
              "Outil et équipe autorisés, selon le choix retenu",
            ],
          ]}
        />

        <h2 id="stores">Organiser la publication Apple et Google</h2>

        <p>
          Les stores sont les magasins d’applications d’Apple et de Google. Ils
          vérifient l’application avant sa diffusion et leurs règles évoluent.
          Le cahier des charges ne doit pas recopier toutes ces règles : il doit
          dire qui ouvre les comptes, prépare les fiches, fournit les éléments
          de confidentialité, organise les tests et répond à un éventuel refus.
        </p>

        <GuideTable
          caption="Les responsabilités de publication"
          headers={["Sujet", "Décision à écrire", "Conséquence sur le projet"]}
          rows={[
            [
              "Comptes développeur",
              "Ouverts au nom de l’entreprise, prestataire invité",
              "Votre entreprise garde la maîtrise de la publication",
            ],
            [
              "Version de test",
              "Groupe d’utilisateurs et scénarios à exécuter",
              "Les problèmes sont vus avant le public",
            ],
            [
              "Fiches des stores",
              "Qui fournit textes, captures et politique de confidentialité",
              "Le travail éditorial est budgété",
            ],
            [
              "Examen",
              "Qui répond et corrige si une soumission ne passe pas",
              "Le calendrier prévoit une marge",
            ],
            [
              "Ventes numériques",
              "Qui vérifie les règles de paiement et frais applicables",
              "Le modèle économique intègre les coûts actuels",
            ],
          ]}
        />

        <p>
          L’
          <a
            href="https://developer.apple.com/programs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Developer Program
          </a>{" "}
          indique une adhésion annuelle de 99 dollars. Apple annonce aussi que,
          en moyenne, 90 % des soumissions sont examinées en moins de 24 heures
          sur sa{" "}
          <a
            href="https://developer.apple.com/distribute/app-review/"
            target="_blank"
            rel="noopener noreferrer"
          >
            page App Review
          </a>
          . Il s’agit d’une moyenne, pas d’un délai garanti : une application
          incomplète ou un échange avec l’équipe d’examen peut prolonger la
          publication.
        </p>

        <p>
          Pour les comptes personnels Google Play créés après le 13 novembre
          2023, la{" "}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/14151465"
            target="_blank"
            rel="noopener noreferrer"
          >
            règle actuelle
          </a>{" "}
          demande un test fermé avec au moins 12 testeurs inscrits pendant 14
          jours continus avant de demander l’accès à la production. Les{" "}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/11131145"
            target="_blank"
            rel="noopener noreferrer"
          >
            frais de service Google Play
          </a>{" "}
          concernent notamment les applications payantes et certains contenus ou
          services numériques ; ils varient selon les programmes et les modes de
          paiement. Faites vérifier les règles applicables à votre modèle au
          moment du lancement.
        </p>

        <h3 id="maintenance">Budgéter le fonctionnement après le lancement</h3>

        <p>
          Une application dépend des versions d’iOS et d’Android, des outils
          tiers, du serveur et des règles de publication. Prévoyez donc un
          budget annuel à partir d’actions concrètes, pas d’un pourcentage
          présenté comme universel.
        </p>

        <p>Le contrat doit nommer qui :</p>
        <ul>
          <li>surveille les erreurs et le serveur ;</li>
          <li>corrige un défaut selon sa gravité et dans quel délai ;</li>
          <li>adapte l’application aux évolutions d’iOS et d’Android ;</li>
          <li>met à jour les outils tiers et vérifie leurs alertes ;</li>
          <li>aide les utilisateurs, avec quels horaires et quel canal.</li>
        </ul>

        <p>
          Google fait évoluer le niveau technique minimal demandé aux
          applications via ses{" "}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/11926878"
            target="_blank"
            rel="noopener noreferrer"
          >
            exigences de niveau d’API
          </a>
          . Apple peut signaler pour retrait une application non mise à jour
          depuis trois ans qui reste sous un seuil minimal de téléchargements,
          selon sa page{" "}
          <a
            href="https://developer.apple.com/support/app-store-improvements/"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store Improvements
          </a>
          . Ces règles ne signifient pas qu’une mise à jour annuelle identique
          est obligatoire pour tous les projets ; elles justifient une veille et
          une responsabilité clairement attribuée.
        </p>

        <h2 id="exemple">Lire un exemple fictif rempli</h2>

        <p>
          <strong>Exemple fictif, construit pour expliquer la méthode.</strong>{" "}
          « Fleurs d’Aix » n&apos;est ni un client ni un témoignage réel : cette
          enseigne de trois boutiques est inventée. Elle envisage une
          application de commande et de retrait. Les chiffres et décisions
          ci-dessous servent uniquement à montrer le niveau de précision
          attendu.
        </p>

        <GuideTable
          caption="Cahier des charges condensé de Fleurs d’Aix"
          headers={["Section", "Décision fictive", "À confirmer au devis"]}
          rows={[
            [
              "Problème et utilisateurs",
              "Réduire les appels ; clients habituels et entreprises locales",
              "Mesure actuelle des appels et commandes",
            ],
            [
              "Actions principales",
              "Choisir un bouquet, une boutique, payer et recevoir l’avis de retrait",
              "Cas d’indisponibilité d’un produit",
            ],
            [
              "Première version",
              "Catalogue, commande, paiement, suivi et gestion en boutique",
              "Fidélité plus tard ; pas de livraison à domicile",
            ],
            [
              "Plateformes",
              "iPhone et Android car les clients utilisent les deux",
              "Versions et appareils d’essai",
            ],
            [
              "Contraintes mobiles",
              "Catalogue consultable sans réseau ; commande avec connexion",
              "Comportement si le réseau disparaît pendant le paiement",
            ],
            [
              "Données",
              "Courriel, téléphone et commandes ; suppression de compte prévue",
              "Durées de conservation et mesure d’audience",
            ],
            [
              "Publication",
              "Comptes au nom de l’entreprise ; prestataire chargé de la soumission",
              "Textes, captures et traitement d’un refus",
            ],
            [
              "Maintenance",
              "Surveillance, corrections et adaptations chiffrées séparément",
              "Horaires et délai pour un blocage de commande",
            ],
            [
              "Budget",
              "Fourchette fictive de 20 000 à 28 000 € HT pour la première version",
              "Hébergement, support et maintenance annuels",
            ],
            [
              "Acceptation",
              "Une commande complète apparaît une seule fois dans la bonne boutique",
              "Paiement refusé, produit épuisé et notification refusée",
            ],
          ]}
        />

        <p>
          Cet exemple n’est pas un prix de marché. Deux projets affichant les
          mêmes cinq écrans peuvent coûter très différemment si l’un réutilise
          une boutique existante et si l’autre doit créer les stocks, les
          paiements, l’administration et le serveur. Le document rend ces
          différences visibles.
        </p>

        <h2 id="budget">Annoncer le budget et comparer les devis</h2>

        <p>
          Donnez une fourchette que votre entreprise peut réellement financer et
          précisez si elle inclut la conception, la première année
          d’hébergement, la publication et la maintenance. Demandez ensuite à
          chaque prestataire ce qu’il construirait dans cette limite et ce qu’il
          propose de reporter.
        </p>

        <GuideTable
          caption="Les lignes à retrouver dans le budget"
          headers={["Dépense", "Dans le devis initial", "Après le lancement"]}
          rows={[
            [
              "Étude et design",
              "Ateliers, croquis, maquettes",
              "Évolutions futures",
            ],
            [
              "Application",
              "Développement iPhone et Android",
              "Adaptations aux systèmes",
            ],
            [
              "Serveur et administration",
              "Création et connexions",
              "Hébergement et surveillance",
            ],
            [
              "Publication",
              "Comptes, fiches, tests et soumission",
              "Renouvellements et nouvelles versions",
            ],
            ["Support", "Période corrective", "Maintenance et assistance"],
          ]}
        />

        <p>
          Le guide{" "}
          <Link href="/guides/combien-coute-une-application-mobile">
            combien coûte une application mobile
          </Link>{" "}
          fournit des repères de prix par type de projet. Utilisez-les pour
          vérifier un ordre de grandeur, pas pour remplacer l’étude de vos
          parcours et intégrations.
        </p>

        <h3 id="erreurs">Corriger les oublis les plus fréquents</h3>

        <ol>
          <li>
            <strong>Écrire toutes les idées comme indispensables.</strong>{" "}
            Séparez la première version des fonctions futures.
          </li>
          <li>
            <strong>Décrire seulement les écrans heureux.</strong> Ajoutez
            absence de réseau, paiement refusé, permission refusée et donnée
            manquante.
          </li>
          <li>
            <strong>Imposer une technologie sans raison.</strong> Exigez une
            proposition expliquée à partir du besoin.
          </li>
          <li>
            <strong>Oublier l’outil de gestion.</strong> Une application client
            demande souvent un écran interne pour les équipes.
          </li>
          <li>
            <strong>Laisser les comptes chez le prestataire.</strong> Ouvrez-les
            au nom de l’entreprise et organisez les accès.
          </li>
          <li>
            <strong>Limiter le budget au développement.</strong> Ajoutez
            serveur, comptes, support, maintenance et communication de
            lancement.
          </li>
          <li>
            <strong>
              Accepter avec la phrase « l’application fonctionne ».
            </strong>{" "}
            Écrivez des actions et résultats que vous pourrez essayer.
          </li>
        </ol>

        <InfoBox
          variant="amber"
          title="Une clause juridique ne se copie pas dans un guide"
        >
          La transmission des droits sur le code, le design et les contenus
          dépend des auteurs, des composants existants et des licences. Demandez
          un inventaire et faites adapter la cession ou la licence au projet.
          Les comptes, le dépôt de code, les données et les accès doivent aussi
          être remis selon le contrat. Faites valider les clauses importantes
          par un professionnel du droit.
        </InfoBox>

        <h2 id="process">Répartir la rédaction et les décisions</h2>

        <p>
          L’entreprise apporte le métier, les utilisateurs, les priorités et le
          budget. Le prestataire propose la solution, les conséquences de chaque
          choix, le calendrier et les tests. Les futurs utilisateurs relisent
          les parcours. Cette répartition évite que le dirigeant doive choisir
          seul une technologie ou que le développeur décide seul de la priorité
          commerciale.
        </p>

        <ul>
          <li>
            L’entreprise décrit le problème, les utilisateurs et les situations
            réelles ; le prestataire reformule et signale ce qui manque.
          </li>
          <li>
            L’entreprise classe les fonctions et les exclusions ; le prestataire
            en chiffre les conséquences.
          </li>
          <li>
            L’entreprise donne les contraintes existantes ; le prestataire
            propose une solution technique et la justifie.
          </li>
          <li>
            L’entreprise fournit les cas à tester ; le prestataire prépare la
            version, montre les résultats et corrige les défauts convenus.
          </li>
          <li>
            L’entreprise possède les comptes et nomme le responsable du suivi ;
            le prestataire publie et entretient selon l’offre signée.
          </li>
        </ul>

        <p>
          Organisez cinq séances courtes sur une ou deux semaines : problème et
          utilisateurs, actions principales, première version, données et
          contraintes mobiles, puis budget et acceptation. Cette durée est une
          méthode d’organisation, pas une moyenne de marché. Un projet complexe
          demandera davantage d’entretiens et de vérifications.
        </p>

        <h2 id="declinaisons">Comparer application mobile, web et PWA</h2>

        <p>
          Une <strong>PWA</strong> est un site que l’on peut ajouter à l’écran
          d’accueil et qui peut offrir certaines fonctions proches d’une
          application. Un <strong>SaaS</strong> est un logiciel en ligne
          généralement accessible dans le navigateur et souvent facturé par
          abonnement. Le cœur du document reste le même, mais les contraintes
          changent.
        </p>

        <ul>
          <li>
            <strong>Application mobile :</strong> décrivez les téléphones,
            permissions, usages hors ligne, stores et entretien dans le temps.
          </li>
          <li>
            <strong>PWA :</strong> décrivez les navigateurs, l’installation, le
            hors-ligne et les notifications, sans supposer que toutes les
            fonctions seront identiques sur iPhone et Android.
          </li>
          <li>
            <strong>Application web ou SaaS :</strong> décrivez surtout les
            écrans, rôles, données, connexions et la disponibilité du service ;
            l’accès se fait dans le navigateur.
          </li>
        </ul>

        <p>
          Si l’installation, le hors-ligne et les fonctions du téléphone ne sont
          pas décisifs, demandez aux prestataires de chiffrer aussi l’option
          web. Pour un logiciel vendu par abonnement, le guide{" "}
          <Link href="/guides/combien-coute-un-saas">
            combien coûte un SaaS
          </Link>{" "}
          complète les sujets d’hébergement, de rôles et de facturation.
        </p>

        <h2 id="methode">Passer du document au devis</h2>

        <ol>
          <li>
            <strong>Rédigez les sections métier.</strong> Problème,
            utilisateurs, actions principales et première version.
          </li>
          <li>
            <strong>Faites relire par deux futurs utilisateurs.</strong> Ajoutez
            les situations que vous aviez oubliées.
          </li>
          <li>
            <strong>Complétez les contraintes mobiles et les données.</strong>{" "}
            Expliquez les termes au moment où ils influencent un usage.
          </li>
          <li>
            <strong>Fixez la fourchette et les coûts à séparer.</strong>{" "}
            Première version, hébergement, comptes, support et maintenance.
          </li>
          <li>
            <strong>Envoyez le même PDF à plusieurs prestataires.</strong>{" "}
            Autorisez les questions et transmettez les réponses à tous.
          </li>
          <li>
            <strong>Comparez les hypothèses avant les montants.</strong>{" "}
            Vérifiez les exclusions, les personnes, le délai, les tests et
            l’après-lancement.
          </li>
        </ol>

        <InfoBox variant="emerald" title="Votre document est prêt si…">
          Une personne extérieure comprend l’action principale ; les fonctions
          futures sont séparées ; les cas sans réseau et les refus
          d’autorisation sont décrits ; les comptes appartiennent à l’entreprise
          ; le budget distingue création et fonctionnement ; les tests
          permettent de dire oui ou non sans interprétation.
        </InfoBox>

        <GuideInlineCTA
          title="Vous avez déjà un brouillon de cahier des charges ?"
          description="Envoyez le document avec votre budget, les utilisateurs visés et les trois actions principales. Nous vous signalons les décisions encore manquantes, les coûts récurrents et les alternatives possibles avant de chiffrer le développement."
          tags={[
            "Lecture humaine",
            "Alternatives examinées",
            "Coûts expliqués",
          ]}
          ctaLabel="Faire relire mon document"
          ctaHref="/demarrer-un-projet"
        />

        <p>
          Notre service{" "}
          <Link href="/services/application-mobile">
            développement d’application mobile
          </Link>{" "}
          peut reprendre ce document, proposer une solution technique et
          chiffrer séparément la première version, la publication et la
          maintenance. Notre <Link href="/methode">méthode</Link> décrit ce qui
          est décidé avant tout engagement.
        </p>

        <hr />

        <p className="text-sm">
          <strong>Sources officielles vérifiées le 21 juillet 2026 :</strong>{" "}
          <a
            href="https://developer.apple.com/programs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Developer Program
          </a>{" "}
          ;{" "}
          <a
            href="https://developer.apple.com/distribute/app-review/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple App Review
          </a>{" "}
          ;{" "}
          <a
            href="https://developer.apple.com/support/app-store-improvements/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple App Store Improvements
          </a>{" "}
          ;{" "}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/14151465"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play, tests des nouveaux comptes personnels
          </a>{" "}
          ;{" "}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/11131145"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play, frais de service
          </a>{" "}
          ;{" "}
          <a
            href="https://support.google.com/googleplay/android-developer/answer/11926878"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play, niveaux d’API
          </a>{" "}
          ;{" "}
          <a
            href="https://developer.android.com/develop/ui/views/notifications/notification-permission"
            target="_blank"
            rel="noopener noreferrer"
          >
            Android, autorisation des notifications
          </a>{" "}
          ;{" "}
          <a
            href="https://www.cnil.fr/fr/recommandations-applications-mobiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL, recommandations pour les applications mobiles
          </a>{" "}
          ;{" "}
          <a
            href="https://developer.apple.com/app-store/user-privacy-and-data-use/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple, confidentialité et usage des données
          </a>
          . Les règles des stores changent : vérifiez-les de nouveau avant
          chaque soumission.
        </p>

        <p className="text-sm">
          Les exemples, la fourchette fictive et les conseils contractuels de ce
          guide sont indicatifs et ne remplacent ni un devis ni un conseil
          juridique personnalisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
