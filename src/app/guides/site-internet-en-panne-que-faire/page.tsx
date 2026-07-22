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

const guide = getGuide("site-internet-en-panne-que-faire");

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
        alt: "Fiche réflexe pour un site internet en panne",
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
      name: "Site internet en panne : que faire ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Comment savoir si mon site est en panne pour tout le monde ?",
    answer:
      "Si vous ne voyez ni contenu inhabituel, ni redirection inconnue, ni alerte de sécurité, ouvrez la même adresse depuis une autre connexion et contentez-vous d’observer. Ne saisissez aucun identifiant, moyen de paiement ou donnée client. Si l’un de ces signaux apparaît, arrêtez les essais et appelez une compétence cyber.",
  },
  {
    question: "Mon site est très lent : dois-je suivre cette procédure ?",
    answer:
      "Si les pages finissent par charger et que les fonctions restent disponibles, notez les symptômes puis utilisez le diagnostic consacré à la lenteur. Si un formulaire, un paiement, une prise de rendez-vous ou une connexion ne répond plus, traitez cette fonction comme une panne partielle.",
  },
  {
    question: "Dois-je redémarrer le site ou désactiver une extension ?",
    answer:
      "Pas au hasard. Notez d’abord l’heure, l’adresse, le message et le dernier changement connu. Plusieurs modifications simultanées peuvent masquer la cause, supprimer un indice utile ou rendre le retour plus difficile, surtout si un contenu ou un accès semble avoir changé sans autorisation.",
  },
  {
    question: "Puis-je restaurer immédiatement la dernière sauvegarde ?",
    answer:
      "Non sans savoir ce qu’elle remplacerait et sans preuve qu’elle peut être restaurée. La copie peut contenir le même défaut, écraser des commandes récentes ou, en cas d’attaque, réintroduire un élément compromis. Faites contrôler la source et la restauration avant la production.",
  },
  {
    question: "Faut-il afficher une page de maintenance ?",
    answer:
      "Oui seulement si le prestataire peut la mettre en place sans masquer des faits utiles ni affaiblir la sécurité. Le message doit dire ce qui est indisponible, donner un autre moyen de contact réellement surveillé et annoncer l’heure de la prochaine information, pas une heure de retour inventée.",
  },
  {
    question: "Une panne va-t-elle faire disparaître mon site de Google ?",
    answer:
      "Une indisponibilité temporaire n’est pas une raison pour supprimer vos pages ou les passer en noindex. Google recommande, lorsque c’est possible et sûr, de maintenir un service limité. Il ne garantit cependant aucune position et la sécurité reste prioritaire si une attaque est possible.",
  },
  {
    question: "Quand faut-il prévenir la CNIL ?",
    answer:
      "Une panne du site n’est pas automatiquement une violation de données. Si des dossiers clients deviennent indisponibles ou si des données personnelles ont pu être perdues, altérées, divulguées ou consultées sans autorisation, transmettez immédiatement les faits à la personne compétente afin qu’elle évalue le risque et les obligations applicables.",
  },
  {
    question: "Qui gère le nom de domaine et le DNS ?",
    answer:
      "Le registrar est l’entreprise auprès de laquelle le nom de domaine est enregistré. L’hébergement et le service qui relie ce nom au site peuvent être gérés par le même fournisseur ou par d’autres. Identifiez-les dans vos factures et contrats, puis laissez leurs équipes coordonner les changements.",
  },
  {
    question: "Quand peut-on considérer le site comme rétabli ?",
    answer:
      "Lorsque les parcours importants ont été testés de bout en bout et acceptés par une personne qui connaît le métier. Voir la page d’accueil ne suffit pas si le formulaire, le paiement, la prise de rendez-vous, l’espace client ou l’e-mail de confirmation reste en panne.",
  },
  {
    question: "Que faire si le prestataire habituel ne répond pas ?",
    answer:
      "Rassemblez le ticket express, retrouvez l’hébergeur et le registrar dans les factures ou contrats, puis contactez un mainteneur capable de reprendre le diagnostic. Une suspicion d’attaque ou un système critique exige une compétence spécialisée plutôt qu’une série d’essais non coordonnés.",
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
          { label: "Site internet en panne" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre site ne répond plus, le formulaire affiche une erreur ou les clients ne peuvent plus commander ? Voici quoi noter sans aggraver la situation, qui appeler et quels tests demander avant d’annoncer le retour."
        heroAction={{
          href: "#quinze-minutes",
          label: "Faire le ticket express",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "15",
            title: "15 minutes pour noter",
            description: "",
            color: "violet",
          },
          {
            number: "01",
            title: "1 personne qui coordonne",
            description: "",
            color: "blue",
          },
          {
            number: "06",
            title: "6 faits dans le ticket",
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
            label: "Maintenance et évolution de sites",
          },
          {
            href: "/guides/pourquoi-mon-site-est-lent",
            label: "Diagnostiquer un site qui charge lentement",
          },
          {
            href: "/guides/site-wordpress-pirate-que-faire",
            label: "Réagir à un site WordPress piraté",
          },
          {
            href: "/guides/reprendre-maintenance-site-autre-agence",
            label: "Reprendre la maintenance d’un site",
          },
          {
            href: "/guides/cout-maintenance-site-internet",
            label: "Comprendre le coût de la maintenance",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Répartir les responsabilités après l’incident",
          },
        ]}
        faqTitle="Site en panne : les questions qui arrivent tout de suite"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Votre site ne répond plus, votre formulaire affiche une erreur ou vos
          clients vous disent qu’ils ne peuvent plus commander. La première
          erreur serait de modifier au hasard les extensions ou le nom de
          domaine, ou de lancer immédiatement une restauration. Vous pourriez
          effacer un indice utile ou des données encore récupérables.{" "}
          <strong>
            Commencez par noter l’heure, l’adresse exacte et le message affiché.
            Si vous ne voyez ni contenu inhabituel, ni redirection inconnue, ni
            alerte de sécurité, ouvrez la même adresse depuis une autre
            connexion et contentez-vous d’observer : ne saisissez aucun
            identifiant, moyen de paiement ou donnée client.
          </strong>{" "}
          Votre objectif n’est pas de trouver seul la cause : c’est de produire
          une description fiable. Dans l’heure, elle aidera l’hébergeur, le
          mainteneur ou le spécialiste adapté à intervenir. Ce guide vous montre
          aussi quoi dire à vos clients et quels tests exiger avant de
          considérer le site comme revenu.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Si un contenu, une redirection ou un accès a changé sans autorisation,
          arrêtez les essais et faites intervenir une compétence cyber. Sinon,
          ne changez rien au hasard : faites un ticket de six lignes, nommez une
          personne qui coordonne et donnez aux clients un moyen de contact qui
          fonctionne encore. N’annoncez le retour qu’après un vrai test de
          formulaire, de commande, de rendez-vous ou de connexion.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "distinguer",
              label: "1. Panne, lenteur ou attaque possible",
            },
            {
              id: "quinze-minutes",
              label: "2. Les quinze premières minutes",
            },
            { id: "journal", label: "3. Le journal à transmettre" },
            {
              id: "premiere-heure",
              label: "4. Appeler la bonne personne",
            },
            { id: "informer", label: "5. Informer les clients" },
            {
              id: "cyber-donnees",
              label: "6. Sécurité et données personnelles",
            },
            { id: "restaurer", label: "7. Restaurer sans écraser" },
            { id: "tester", label: "8. Tester le travail réel" },
            {
              id: "exemple",
              label: "9. Exemple fictif : 08:42 à 10:32",
            },
            { id: "lendemain", label: "10. Le lendemain de la panne" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="distinguer">
          1. Distinguez une panne, une lenteur et une attaque possible
        </h2>

        <p>
          « Le site ne fonctionne plus » peut décrire trois situations qui ne
          demandent pas la même réponse. Regardez ce que voit le client, pas ce
          que vous imaginez être la cause.
        </p>

        <GuideTable
          caption="Trois situations à ne pas traiter de la même manière"
          headers={[
            "Ce que vous observez",
            "Ce que cela signifie",
            "Première décision",
          ]}
          rows={[
            [
              "La page ou une fonction ne répond plus",
              "Panne complète ou partielle à documenter ; le message ne prouve pas la cause",
              "Faire le ticket express et contacter l’intervenant responsable",
            ],
            [
              "La page finit par apparaître, mais trop lentement",
              "Le service reste disponible, avec une performance gênante",
              "Conserver les mesures et suivre le diagnostic de lenteur",
            ],
            [
              "Contenu inconnu, redirection étrange ou accès changé",
              "Une attaque est possible, sans être encore démontrée",
              "Arrêter les essais ordinaires et appeler une compétence cyber",
            ],
          ]}
        />

        <p>
          Une erreur 500, 502 ou 503 est utile à recopier, mais elle ne suffit
          pas à désigner un responsable. L’accueil peut fonctionner alors que le
          formulaire, le paiement ou l’espace client est indisponible. Pour
          l’entreprise, cette panne partielle compte autant si elle bloque la
          demande ou la vente.
        </p>

        <p>
          Si tout finit par charger, commencez plutôt par le guide consacré à{" "}
          <Link href="/guides/pourquoi-mon-site-est-lent">
            un site internet trop lent
          </Link>
          . Si le contenu ou les accès ont changé sans autorisation, utilisez la
          branche cyber décrite plus bas et, pour WordPress, la fiche dédiée au{" "}
          <Link href="/guides/site-wordpress-pirate-que-faire">
            site WordPress piraté
          </Link>
          .
        </p>

        <h2 id="quinze-minutes">
          2. Dans les quinze premières minutes, faites un ticket de six lignes
        </h2>

        <p>
          En situation d’urgence, dix-huit questions découragent. Commencez par
          six faits que vous pouvez obtenir sans ouvrir l’administration du site
          ni modifier sa configuration :
        </p>

        <InfoBox variant="emerald" title="Le ticket express à copier">
          <strong>1. Heure :</strong> quand le problème a-t-il été découvert ?
          <br />
          <strong>2. Adresse :</strong> quelle URL exacte ne répond plus ?
          <br />
          <strong>3. Message :</strong> que voyez-vous, mot pour mot ?
          <br />
          <strong>4. Fonctions touchées :</strong> accueil, contact, paiement,
          rendez-vous ou connexion ?
          <br />
          <strong>5. Second essai passif :</strong> seulement en l’absence de
          contenu inhabituel, de redirection inconnue ou d’alerte, la même page
          affiche-t-elle le même résultat depuis une autre connexion, sans
          saisir aucune donnée ?
          <br />
          <strong>6. Dernier changement connu :</strong> mise à jour, mise en
          ligne, domaine ou intervention d’un fournisseur ?
        </InfoBox>

        <p>
          Prenez une capture du message en masquant toute donnée personnelle
          inutile. Notez la dernière heure à laquelle quelqu’un a utilisé le
          parcours avec succès. Ne testez pas cinquante pages : observez si
          l’accueil et la page de la fonction indispensable s’affichent, sans
          envoyer de formulaire, saisir d’identifiant, créer de rendez-vous,
          passer de commande ni tenter de paiement. Les tests complets
          attendront une version contrôlée après l’intervention.
        </p>

        <p>
          Regardez ensuite la page publique d’état de l’hébergeur ou du service
          concerné si vous le connaissez. Une panne générale déjà déclarée peut
          rendre inutile une intervention de développement séparée. Elle ne vous
          dispense pas d’informer les clients ni de vérifier votre propre
          parcours après le retour du fournisseur.
        </p>

        <h2 id="journal">
          3. Complétez le journal pendant que l’incident avance
        </h2>

        <p>
          Le ticket express lance la réponse. Le journal évite ensuite que trois
          personnes changent trois réglages sans savoir ce que les autres ont
          fait. Une seule personne côté entreprise le tient à jour et coordonne
          les échanges.
        </p>

        <GuideTable
          caption="Le journal utile à l’entreprise et au prestataire"
          headers={["À noter", "Exemple de contenu", "Pourquoi c’est utile"]}
          rows={[
            [
              "Constat",
              "Heure, URL, message, capture, réseau et dernière réussite connue",
              "Distinguer un fait d’une hypothèse",
            ],
            [
              "Impact métier",
              "Contact, rendez-vous, panier, paiement, connexion ou e-mails touchés",
              "Traiter d’abord ce qui bloque réellement les clients",
            ],
            [
              "Ce qui fonctionne",
              "Téléphone, e-mail, boutique, autre page ou espace client",
              "Organiser un service temporaire honnête",
            ],
            [
              "Intervenants",
              "Personne contactée, heure, référence du ticket et réponse reçue",
              "Éviter les actions contradictoires",
            ],
            [
              "Décisions",
              "Action autorisée, responsable, résultat et version remise en service",
              "Pouvoir expliquer ce qui a réellement été fait",
            ],
            [
              "Clôture",
              "Parcours testés, personne ayant accepté et heure d’information",
              "Ne pas confondre page visible et activité rétablie",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Ne transmettez pas vos secrets dans le formulaire"
        >
          Le ticket ne doit contenir ni mot de passe, ni clé d’accès, ni copie
          de base de données, ni archive complète du site. Indiquez que les
          accès existent et convenez d’un moyen adapté avec l’intervenant
          retenu. Ne recopiez pas non plus les données d’un client si elles ne
          sont pas nécessaires au diagnostic.
        </InfoBox>

        <h2 id="premiere-heure">
          4. Dans la première heure, appelez la personne qui peut réellement
          agir
        </h2>

        <p>
          Le bon interlocuteur dépend du symptôme et des contrats. Il ne s’agit
          pas de faire intervenir tout le monde en même temps, mais de confier
          la coordination à une personne et de lui donner le journal.
        </p>

        <ul>
          <li>
            <strong>L’hébergeur</strong> lorsque sa page d’état signale un
            incident ou lorsque le serveur ne répond plus.
          </li>
          <li>
            <strong>Le mainteneur ou le développeur</strong> après une mise en
            ligne, une mise à jour, une erreur de l’application ou une fonction
            métier bloquée.
          </li>
          <li>
            <strong>Le registrar</strong>, c’est-à-dire l’entreprise auprès de
            laquelle le nom de domaine est enregistré, lorsque le domaine a
            expiré ou que sa gestion pose problème.
          </li>
          <li>
            <strong>Un spécialiste de réponse à incident</strong> si une
            intrusion, une redirection inconnue ou un changement non autorisé
            est possible.
          </li>
        </ul>

        <p>
          L’{" "}
          <a
            href="https://www.afnic.fr/lexique/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Afnic explique le rôle du DNS
          </a>
          , le service qui relie le nom saisi par le client aux ressources du
          site. Elle documente directement les extensions qu’elle opère, pas
          tous les domaines. La conséquence pratique est simple : le domaine,
          l’hébergement et le code peuvent relever de fournisseurs différents.
          Ne modifiez pas les réglages de l’un pour compenser au hasard une
          panne de l’autre.
        </p>

        <p>
          La CNIL recommande que même une organisation simple de continuité
          désigne les intervenants et précise qui alerter dans sa{" "}
          <a
            href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche sur la continuité et la reprise d’activité
          </a>
          . Le téléphone ou l’e-mail peuvent maintenir un service limité, à
          condition d’être réellement surveillés et de ne pas réduire la
          sécurité des données.
        </p>

        <h2 id="informer">
          5. Informez les clients sans inventer la cause ni l’heure de retour
        </h2>

        <p>
          Le silence laisse les clients répéter leurs essais et imaginer le
          pire. Une promesse trop précise crée un second problème si elle n’est
          pas tenue. Dites ce qui est visible, ce qui reste possible et quand
          vous donnerez la prochaine information.
        </p>

        <InfoBox variant="blue" title="Message pendant la panne">
          « Notre site et le formulaire de demande sont momentanément
          indisponibles. Vous pouvez nous joindre au [téléphone] ou à [adresse].
          Nous publierons une nouvelle information à [heure]. »
        </InfoBox>

        <p>
          L’heure annoncée est celle du prochain point, pas celle d’un retour
          garanti. Ne dites pas « attaque », « aucune donnée touchée » ou « tout
          sera réparé dans une heure » tant que des personnes compétentes ne
          peuvent pas le démontrer.
        </p>

        <InfoBox variant="emerald" title="Message après les tests">
          « Le site et le formulaire sont de nouveau disponibles depuis [heure].
          Nous avons vérifié l’envoi et la réception d’une demande de test. Si
          votre demande envoyée pendant [période réellement connue] n’a pas reçu
          de confirmation, contactez-nous par [moyen surveillé]. »
        </InfoBox>

        <p>
          Dans sa documentation sur la{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            suspension temporaire d’une activité en ligne
          </a>
          , Google recommande de conserver, lorsque c’est possible et sûr, une
          version limitée du service plutôt que de supprimer le site. Une
          réponse temporaire 503 accompagnée d’une indication de nouvel essai
          est une action technique à confier au prestataire pour une fermeture
          très courte ; elle ne garantit pas le maintien des positions.
          N’ajoutez pas noindex et ne supprimez pas les pages par réflexe.
        </p>

        <h2 id="cyber-donnees">
          6. Si une attaque ou des données touchées sont possibles, changez de
          procédure
        </h2>

        <p>
          Une page blanche ou une erreur 502 ne prouve pas une attaque. En
          revanche, un contenu remplacé, une redirection vers un domaine
          inconnu, un compte administrateur inattendu ou une alerte de sécurité
          cohérente justifie d’arrêter les changements ordinaires.
        </p>

        <p>
          Le{" "}
          <a
            href="https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CERT-FR recommande de synthétiser ce qui est connu et inconnu
          </a>{" "}
          et de mobiliser les équipes ou prestataires adaptés. La fiche de{" "}
          <a
            href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/defiguration-de-site-internet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cybermalveillance.gouv.fr sur la défiguration d’un site
          </a>{" "}
          rappelle qu’un contenu modifié sans autorisation peut révéler des
          droits obtenus par un attaquant. Pour un dirigeant, la décision sûre
          est de conserver ses observations et de confier l’analyse à une
          personne qualifiée — pas de nettoyer ou restaurer soi-même.
        </p>

        <InfoBox
          variant="amber"
          title="Panne du site et violation de données ne sont pas synonymes"
        >
          Une panne du site n’est pas, à elle seule, une violation de données
          personnelles. En revanche, si l’incident rend des données personnelles
          indisponibles — par exemple des dossiers clients — ou si elles ont pu
          être perdues, altérées, divulguées ou consultées sans autorisation,
          transmettez immédiatement les faits à la personne compétente dans
          votre entreprise. Elle devra qualifier la situation, évaluer le risque
          et déterminer les obligations applicables.
        </InfoBox>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-les-incidents-et-les-violations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL distingue l’incident de la violation et demande d’analyser les
            faits disponibles
          </a>
          . Le délai de 72 heures concerne la notification d’une violation
          présentant un risque, pas toutes les pannes. Ce guide ne remplace pas
          l’évaluation juridique et de sécurité propre à votre situation.
        </p>

        <h2 id="restaurer">
          7. Ne restaurez une sauvegarde qu’après avoir compris ce qu’elle
          remplacera
        </h2>

        <p>
          « Une sauvegarde existe » ne veut pas dire « le site peut repartir ».
          Avant toute restauration, l’intervenant doit pouvoir répondre à quatre
          questions : de quand date la copie, quelles commandes ou demandes
          récentes seraient écrasées, a-t-elle déjà été restaurée dans un espace
          séparé, et sa source est-elle digne de confiance si une attaque est
          possible ?
        </p>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de tester les copies et la capacité de restauration
          </a>
          . L’{" "}
          <a
            href="https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANSSI relie également la restauration au plan de reprise
          </a>{" "}
          et recommande des essais réguliers adaptés aux scénarios plausibles.
          Ces recommandations ne désignent pas automatiquement la dernière copie
          comme la bonne : le prestataire doit choisir, tester et documenter.
        </p>

        <p>
          Une panne apparue après une nouvelle version peut parfois être
          corrigée en revenant au code précédent sans toucher aux données. À
          l’inverse, une base endommagée peut exiger une restauration et un
          rapprochement des opérations récentes. La décision dépend du
          diagnostic réel ; demandez quelles données seront conservées,
          remplacées ou ressaisies.
        </p>

        <h2 id="tester">
          8. Avant d’annoncer le retour, testez le travail que font vos clients
        </h2>

        <p>
          La page d’accueil peut s’ouvrir tandis que l’activité reste bloquée.
          Choisissez les parcours réellement présents sur votre site, puis
          nommez une personne métier qui accepte la remise en service.
        </p>

        <GuideTable
          caption="Les tests à choisir selon le rôle réel du site"
          headers={["Type de site", "Test de bout en bout", "Preuve attendue"]}
          rows={[
            [
              "Site vitrine",
              "Envoyer un formulaire avec une adresse de test",
              "Le message arrive au bon destinataire et une confirmation cohérente s’affiche",
            ],
            [
              "Prise de rendez-vous",
              "Créer un créneau de test puis l’annuler proprement",
              "Le créneau, la notification et l’agenda reflètent la même action",
            ],
            [
              "Boutique en ligne",
              "Parcourir panier, paiement autorisé et confirmation",
              "La commande n’est créée qu’une fois et les messages nécessaires arrivent",
            ],
            [
              "Espace client",
              "Se connecter avec un compte de test et ouvrir les informations prévues",
              "Le compte voit ce qu’il doit voir, sans accès supplémentaire",
            ],
          ]}
        />

        <p>
          Notez l’heure, le test, la personne qui l’a réalisé et le résultat.
          Vérifiez sur téléphone et ordinateur si ces usages comptent pour vos
          clients. Si un parcours échoue encore, le site est seulement
          partiellement revenu : dites-le et gardez l’autre moyen de contact.
        </p>

        <h2 id="exemple">9. Exemple illustratif fictif : de 08:42 à 10:32</h2>

        <InfoBox
          variant="blue"
          title="110 minutes ne sont ni une moyenne ni un délai promis"
        >
          Ce scénario est entièrement fictif. Il montre l’ordre des décisions,
          pas la durée habituelle d’une panne. Le nombre de demandes perdues
          reste inconnu et aucun résultat commercial n’est inventé.
        </InfoBox>

        <p>
          À 08:42, une collaboratrice d’un cabinet fictif de diagnostics
          immobiliers voit « 502 Bad Gateway » sur l’accueil et le formulaire. À
          08:47, le même message apparaît depuis une connexion mobile. Elle note
          les deux adresses, garde une capture et n’observe ni contenu inconnu
          ni redirection étrange — sans en déduire que toute attaque est
          impossible.
        </p>

        <p>
          À 08:55, le cabinet confirme que le téléphone et l’e-mail fonctionnent
          encore. À 09:03, le mainteneur reçoit le ticket, la dernière réussite
          connue à 18:10 la veille et une mise en ligne signalée à 08:34.
          Personne ne modifie les extensions, le domaine ou les données en
          parallèle. À 09:15, les clients reçoivent un message avec le téléphone
          et un nouveau point prévu à 10:00.
        </p>

        <p>
          Dans cet exemple fictif, le mainteneur relie la panne à une version de
          l’application qui ne démarre plus. Il contrôle l’ancienne version dans
          un espace séparé ; aucune donnée n’est restaurée puisque rien ne le
          justifie. À 10:20, le site répond en production, mais le cabinet
          attend. À 10:32, l’accueil, une page de service et la réception d’un
          formulaire de test sont validés par la responsable métier. Le message
          client est alors mis à jour.
        </p>

        <p>
          De 08:42 à 10:32, il s’écoule 1 h 50, soit 110 minutes. Le contrôle
          inverse, 08:42 + 110 minutes, redonne 10:32. Ce résultat appartient
          uniquement au scénario. Une panne réelle peut durer moins ou beaucoup
          plus longtemps.
        </p>

        <GuideInlineCTA
          title="Faire diagnostiquer la panne sans multiplier les changements"
          description="Indiquez l’adresse du site, l’heure de découverte, le message exact, les fonctions touchées, le second essai passif s’il a pu être réalisé, le dernier changement connu et les prestataires déjà contactés. Ce formulaire n’est pas une astreinte ni un service de réponse à incident. Quentin Hagnéré examine directement la demande et cherche à répondre le jour ouvré qui suit, sans garantir ce délai ni celui de la réparation. Cette première orientation est gratuite et sans engagement ; elle peut vous renvoyer vers l’hébergeur, le registrar ou un spécialiste cyber. Ne transmettez aucun mot de passe, secret ni fichier contenant des données personnelles inutiles."
          tags={[
            "Ticket de six lignes",
            "Aucune cause inventée",
            "Orientation cyber si nécessaire",
          ]}
          ctaLabel="Décrire la panne de mon site"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="lendemain">
          10. Le lendemain, évitez que le prochain signal vienne encore d’un
          client
        </h2>

        <p>
          Une fois le service contrôlé, réunissez l’entreprise et le prestataire
          autour du journal. Le but n’est pas de trouver un coupable, mais de
          rendre la prochaine réponse plus courte et plus sûre.
        </p>

        <ol>
          <li>
            <strong>Écrivez la cause retenue et ce qui reste incertain.</strong>
          </li>
          <li>
            <strong>Conservez les heures et décisions importantes.</strong>
          </li>
          <li>
            <strong>Vérifiez qui reçoit une alerte et qui coordonne.</strong>
          </li>
          <li>
            <strong>Planifiez un vrai test de restauration</strong> si cette
            preuve manquait.
          </li>
          <li>
            <strong>
              Listez les accès, l’hébergeur, le registrar et les contacts
            </strong>{" "}
            dans un endroit disponible même si le site tombe.
          </li>
          <li>
            <strong>Décidez si une maintenance récurrente est utile</strong>,
            sans transformer automatiquement chaque panne en abonnement.
          </li>
        </ol>

        <p>
          Si personne ne sait qui possède les accès ou si le prestataire ne
          documente pas ses interventions, consultez le guide pour{" "}
          <Link href="/guides/reprendre-maintenance-site-autre-agence">
            reprendre la maintenance d’un site confié à une autre agence
          </Link>
          . Si vous voulez ensuite comparer prévention, correction et délais,
          utilisez le guide du{" "}
          <Link href="/guides/cout-maintenance-site-internet">
            coût de maintenance d’un site internet
          </Link>
          . Un contrat n’empêchera jamais toutes les pannes ; il doit surtout
          écrire qui surveille, qui répond, ce qui est testé et comment vous
          récupérez vos accès et vos fichiers.
        </p>

        <h2 id="sources">Sources et limites de ce guide</h2>

        <ul>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Prévoir la continuité et la reprise d’activité
            </a>
            , publiée le 14 mars 2024, pour les rôles, alertes, tests et le
            fonctionnement temporaire.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Sauvegarder
            </a>
            , publiée le 14 mars 2024, pour les copies testées et la capacité de
            restauration.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-incidents-et-les-violations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Gérer les incidents et les violations
            </a>
            , pour distinguer l’incident de la violation de données.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Notifier une violation de données personnelles
            </a>
            , pour inclure la perte de disponibilité de données personnelles
            sans assimiler toute panne à une violation.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/guides/sauvegarde-des-systemes-dinformation"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1
            </a>
            , pour la stratégie de restauration et les copies contrôlées.
          </li>
          <li>
            <a
              href="https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CERT-FR — Bons réflexes en cas d’intrusion
            </a>
            , pour la branche cyber confiée aux intervenants compétents.
          </li>
          <li>
            <a
              href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/defiguration-de-site-internet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cybermalveillance.gouv.fr — Défiguration de site Internet
            </a>
            , mise à jour le 10 juillet 2026, pour reconnaître un contenu
            modifié sans transformer une panne ordinaire en attaque.
          </li>
          <li>
            <a
              href="https://www.afnic.fr/lexique/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Afnic — Lexique du nom de domaine et du DNS
            </a>
            , dans le périmètre des extensions qu’elle opère.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Suspendre temporairement une activité
            </a>
            , mise à jour indiquée le 31 décembre 2025, sans garantie de
            positions.
          </li>
        </ul>

        <p>
          Sources consultées le 22 juillet 2026. Ce guide n’identifie pas la
          cause de votre panne, ne garantit aucun délai, ne remplace ni une
          réponse à incident cyber ni une analyse juridique, et ne permet pas
          d’affirmer que les données sont intactes. Les repères quinze minutes,
          une heure et une journée organisent les décisions ; ils ne décrivent
          pas le temps nécessaire à une réparation.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
