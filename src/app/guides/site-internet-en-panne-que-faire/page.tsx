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
import { WebsiteIncidentDossier } from "@/components/guides/WebsiteIncidentDossier";
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
        heroDescription="Votre site, votre formulaire ou le paiement ne répond plus ? Suivez une chronologie 0–5–15–60 minutes, orientez le ticket sans diagnostiquer au hasard et n’annoncez le retour qu’après une reprise prouvée."
        heroAction={{
          href: "#urgence-30-secondes",
          label: "Carte d’urgence · 30 s",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "05",
            title: "5 minutes pour protéger",
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
            number: "10",
            title: "10 portes de reprise",
            description: "",
            color: "emerald",
          },
          {
            number: String(guide.readTimeMin),
            title: `${guide.readTimeMin} minutes de lecture`,
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
            href: "/services/securite-rgpd",
            label: "Sécurité et protection des données",
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
        <section
          id="urgence-30-secondes"
          aria-labelledby="urgence-30-secondes-titre"
          className="not-prose scroll-mt-24 rounded-2xl border border-rose-300 bg-rose-50 p-4 text-rose-950 shadow-sm dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-50 sm:p-5"
        >
          <p className="m-0 text-[11px] font-bold uppercase tracking-[0.16em] text-rose-700 dark:text-rose-300">
            Carte d’urgence · lisible en 30 secondes
          </p>
          <h2
            id="urgence-30-secondes-titre"
            className="mb-0 mt-1 text-lg font-bold sm:text-xl"
          >
            Site en panne : cinq décisions avant tout diagnostic
          </h2>
          <ol className="mb-0 mt-3 grid gap-2 pl-5 text-sm leading-relaxed sm:grid-cols-2">
            <li>
              <strong>Interdits :</strong> ne redémarrez, ne restaurez et ne
              changez ni DNS ni extension au hasard.
            </li>
            <li>
              <strong>Signaux cyber :</strong> contenu, redirection, compte,
              DNS, certificat, paiement ou données modifiés sans autorisation ?
              Arrêtez les essais actifs.
            </li>
            <li>
              <strong>Cinq faits :</strong> heure et fuseau, URL, message exact,
              dernière réussite connue, fonction métier touchée.
            </li>
            <li>
              <strong>Coordinateur :</strong> une personne tient le journal et
              autorise les changements avec l’intervenant.
            </li>
            <li className="sm:col-span-2">
              <strong>Escalade :</strong> utilisez l’astreinte et le fournisseur
              responsable ; si un signal cyber existe, passez par un canal sûr
              et{" "}
              <a
                href="https://www.cybermalveillance.gouv.fr/17cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-2"
              >
                17Cyber
              </a>
              . Ne transmettez ni secret, ni log brut, ni donnée client.
            </li>
          </ol>
        </section>

        <p className="lead">
          Votre site ne répond plus, votre formulaire affiche une erreur ou vos
          clients ne peuvent plus commander. Dans les cinq premières minutes, ne
          redémarrez pas, ne changez pas le DNS et ne restaurez rien au hasard :
          vous pourriez effacer une trace, réintroduire une compromission ou
          remplacer des commandes récupérables.{" "}
          <strong>
            Notez l’heure, l’adresse exacte, le message et la dernière réussite
            connue. Si le contenu, le domaine, le certificat, une redirection,
            un compte ou un paiement a changé sans explication, arrêtez les
            essais actifs et passez à la branche cyber.
          </strong>{" "}
          Sinon, observez passivement la même adresse depuis une autre
          connexion, sans identifiant, carte ni donnée client. Remettez ensuite
          au bon intervenant un dossier fiable, ouvrez un canal de secours et
          gardez le service « partiel » tant que les parcours métier, les
          données et les services tiers ne sont pas vérifiés.
        </p>

        <InfoBox variant="blue" title="La réponse simple">
          Protégez d’abord les preuves et nommez une personne qui coordonne.
          Orientez ensuite le ticket vers le réseau local, le domaine/DNS, le
          certificat, le CDN/hébergeur, l’application, les données ou le
          prestataire tiers — sans confondre un symptôme avec sa cause. Si une
          compromission est plausible, utilisez un canal de communication
          indépendant et une compétence de réponse à incident. N’annoncez le
          retour qu’après validation technique, métier et, lorsqu’ils comptent,
          paiement, e-mail, données et surveillance.
        </InfoBox>

        <InfoBox variant="amber" title="Urgence ou suspicion cyber">
          Ce formulaire éditorial n’est ni une astreinte ni un service de
          réponse à incident. Si l’activité est critique, si un compte, le DNS,
          un certificat, un paiement ou des données semblent compromis,
          contactez immédiatement votre astreinte, le fournisseur concerné ou un
          intervenant spécialisé. En France, le service public{" "}
          <a
            href="https://www.cybermalveillance.gouv.fr/17cyber"
            target="_blank"
            rel="noopener noreferrer"
          >
            17Cyber
          </a>{" "}
          propose un diagnostic et une assistance en ligne. Ne transmettez ici
          ni secret, ni log brut, ni donnée client.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "distinguer",
              label: "1. Porte d’urgence : panne ou cyber",
            },
            {
              id: "couches",
              label: "2. Orienter par symptôme et par couche",
            },
            {
              id: "quinze-minutes",
              label: "3. Les quinze premières minutes",
            },
            { id: "dossier", label: "4. Produire le dossier local" },
            { id: "chronologie", label: "5. De 15 minutes à 24 heures" },
            { id: "journal", label: "6. Le journal à transmettre" },
            {
              id: "premiere-heure",
              label: "7. Appeler la bonne personne",
            },
            { id: "informer", label: "8. Informer sans spéculer" },
            {
              id: "cyber-donnees",
              label: "9. Preuves cyber et données personnelles",
            },
            { id: "objectifs", label: "10. RTO, RPO et SLA" },
            { id: "restaurer", label: "11. Restaurer sans écraser" },
            { id: "tester", label: "12. Prouver le retour métier" },
            { id: "seo", label: "13. Protéger le référencement" },
            { id: "cout", label: "14. Estimer le coût sans l’exagérer" },
            { id: "exemple", label: "15. Exemple fictif contrôlé" },
            { id: "lendemain", label: "16. RETEX J+1, J+7 et J+30" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="distinguer">
          1. Passez d’abord la porte d’urgence : panne ordinaire ou cyber
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

        <InfoBox
          variant="amber"
          title="Ces signaux changent immédiatement de procédure"
        >
          Traitez comme une compromission possible tout contenu ou redirection
          inexpliqué, toute modification du registrar, des serveurs DNS, du
          DNSSEC ou du certificat, tout compte, clé ou jeton inconnu, toute
          alerte d’exfiltration ou d’extorsion, toute modification inhabituelle
          de paiement ou de coordonnées, ou des anomalies simultanées sur
          plusieurs systèmes. Arrêtez les tests actifs et l’administration
          ordinaire. Utilisez un téléphone ou un autre canal qui ne dépend pas
          du système suspect ; le spécialiste décidera d’un endiguement
          coordonné. Éteindre, isoler ou « nettoyer » sans cette décision peut
          supprimer des traces volatiles ou aggraver l’incident.
        </InfoBox>

        <p>
          Si tout finit par charger, commencez plutôt par le guide consacré à{" "}
          <Link href="/guides/pourquoi-mon-site-est-lent">
            un site internet trop lent
          </Link>
          . Si le contenu, les accès ou le domaine ont changé sans autorisation,
          utilisez la branche cyber décrite plus bas et le diagnostic officiel{" "}
          <a
            href="https://www.cybermalveillance.gouv.fr/17cyber"
            target="_blank"
            rel="noopener noreferrer"
          >
            17Cyber
          </a>
          .
        </p>

        <h2 id="couches">
          2. Orientez le ticket par symptôme et par couche, sans diagnostiquer
          au hasard
        </h2>

        <p>
          Un message visible n’est qu’un indice. « 502 » ne veut pas dire
          automatiquement « bug du développeur », et une page d’état verte ne
          prouve pas que votre instance fonctionne. Le tableau suivant sert à
          choisir la personne et les preuves à demander ; il ne désigne jamais
          la cause à lui seul.
        </p>

        <GuideTable
          caption="Du symptôme observable au bon interlocuteur"
          headers={[
            "Ce que vous observez",
            "Couche à faire vérifier",
            "Preuves à demander",
          ]}
          rows={[
            [
              "Le problème n’existe que sur un appareil ou un réseau",
              "Connexion locale, cache ou poste de travail",
              "Même URL depuis un autre réseau réellement indépendant ; aucun réglage du site",
            ],
            [
              "Domaine introuvable, SERVFAIL, expiration ou alerte certificat",
              "Registrar, DNS/DNSSEC, certificat TLS et éventuellement CDN",
              "Statut du domaine, serveurs de noms, enregistrements, certificat, heure et fuseau",
            ],
            [
              "502, 503, 504, délai dépassé ou résultat différent selon la région",
              "CDN/WAF, répartiteur, origine, hébergement ou runtime",
              "Code exact, URL, identifiant de requête et journaux côté edge et origine",
            ],
            [
              "Accueil visible mais formulaire, connexion ou API en erreur",
              "Application, identité, runtime ou service tiers",
              "Parcours précis, dernier déploiement, erreurs applicatives et d’authentification",
            ],
            [
              "Données absentes, incohérentes ou bloquées",
              "Base, cache, file de messages, réplication ou stockage",
              "Dernière transaction saine, erreurs, réplication, point restaurable et rapprochement",
            ],
            [
              "Panier correct mais paiement, stock, CRM ou confirmation absent",
              "Prestataire de paiement, webhook, stock, CRM ou e-mail",
              "Identifiant de test, statut fournisseur, déduplication, ordre et réception finale",
            ],
            [
              "Contenu, DNS, certificat, compte, clé ou coordonnées modifiés",
              "Compromission possible",
              "Arrêt des essais actifs, chronologie et traces transmises au répondant cyber",
            ],
          ]}
        />

        <p>
          Le domaine, le DNS, le certificat, le CDN, l’hébergement, le code, la
          base et le paiement peuvent appartenir à des fournisseurs différents.
          Une seule personne côté entreprise garde la chronologie et évite que
          chacun modifie sa couche en parallèle. Le prestataire technique peut
          ensuite confirmer ou écarter l’hypothèse à partir des journaux et de
          l’architecture réelle.
        </p>

        <h2 id="quinze-minutes">
          3. Dans les quinze premières minutes, faites un ticket exploitable
        </h2>

        <p>
          En situation d’urgence, un formulaire interminable décourage.
          Commencez par huit faits que vous pouvez obtenir sans ouvrir
          l’administration du site ni modifier sa configuration :
        </p>

        <InfoBox variant="emerald" title="Le ticket express en huit faits">
          <strong>1. Découverte :</strong> date, heure et fuseau du premier
          constat ?
          <br />
          <strong>2. Dernière réussite :</strong> quand le parcours a-t-il
          fonctionné pour la dernière fois ?
          <br />
          <strong>3. Adresse :</strong> quelle URL exacte ne répond plus ?
          <br />
          <strong>4. Message :</strong> code, texte visible et éventuel
          identifiant de requête, mot pour mot ?
          <br />
          <strong>5. Fonctions touchées :</strong> accueil, contact, paiement,
          rendez-vous ou connexion ?
          <br />
          <strong>6. Étendue :</strong> un appareil, un réseau, plusieurs
          connexions ou plusieurs régions ?
          <br />
          <strong>7. Second essai passif :</strong> seulement en l’absence de
          contenu inhabituel, de redirection inconnue ou d’alerte, la même page
          affiche-t-elle le même résultat depuis une autre connexion, sans
          saisir aucune donnée ?
          <br />
          <strong>8. Dernier changement connu :</strong> mise en ligne,
          extension, domaine, DNS, certificat ou intervention d’un fournisseur ?
        </InfoBox>

        <p>
          Conservez la capture originale dans un espace restreint, puis créez
          une copie expurgée pour le ticket ; ne modifiez jamais l’unique
          original. Ne testez pas cinquante pages : observez l’accueil et la
          fonction indispensable, sans envoyer de formulaire, saisir
          d’identifiant, créer de rendez-vous, passer de commande ni tenter de
          paiement. Les tests complets attendront une version contrôlée après
          l’intervention.
        </p>

        <p>
          Regardez ensuite la page publique d’état de l’hébergeur ou du service
          concerné si vous le connaissez. Une panne générale déjà déclarée peut
          rendre inutile une intervention de développement séparée. Elle ne vous
          dispense pas d’informer les clients ni de vérifier votre propre
          parcours après le retour du fournisseur.
        </p>

        <h2 id="dossier">
          4. Produisez un dossier local avant de multiplier les appels
        </h2>

        <p>
          Le dossier ci-dessous fonctionne dans votre navigateur. Il ne teste
          pas le site, n’envoie aucune donnée et ne sauvegarde rien
          automatiquement. Il transforme vos observations en une route prudente,
          conserve les inconnues en « ND », compare les objectifs de reprise
          seulement s’ils ont été définis et interdit une clôture fondée sur la
          seule page d’accueil. N’y collez ni secret, ni donnée client, ni log
          brut.
        </p>

        <WebsiteIncidentDossier />

        <InfoBox
          variant="blue"
          title="Le verdict dépend de vos choix structurés"
        >
          Le routeur ne lit pas le sens des champs libres et ne diagnostique
          jamais leur contenu. Écrire « DNS détourné » ou « page défigurée »
          dans le symptôme ne suffit pas : sélectionnez aussi « Compromission
          possible » et consignez le signal factuel dans la porte cyber. Une
          qualification oubliée peut orienter le dossier vers une mauvaise
          branche ; la personne compétente reste responsable du triage et de la
          clôture.
        </InfoBox>

        <p>
          Préparez également une version hors ligne avant l’incident :{" "}
          <a href="/ressources/fiche-reflexe-site-en-panne.txt" download>
            télécharger la fiche réflexe en texte brut
          </a>
          . Elle contient les contacts à préremplir, la chronologie, les cinq
          messages et la recette de retour. Stockez-la dans un emplacement
          accessible même si votre site, votre messagerie habituelle ou votre
          gestionnaire de mots de passe n’est plus disponible — sans y écrire
          les secrets eux-mêmes.
        </p>

        <h2 id="chronologie">
          5. Suivez une chronologie 0–5–15–60 minutes, puis 4 et 24 heures
        </h2>

        <GuideTable
          caption="Une horloge de décision, pas une promesse de réparation"
          headers={["Fenêtre", "Actions sûres", "Sortie attendue et escalade"]}
          rows={[
            [
              "0–5 minutes",
              "Geler les changements improvisés, noter découverte et dernière réussite, chercher les signaux cyber, nommer le coordinateur",
              "Branche cyber immédiate ou constat passif autorisé ; aucun diagnostic inventé",
            ],
            [
              "5–15 minutes",
              "Compléter le ticket, vérifier l’étendue sur un réseau indépendant si c’est sûr, consulter les pages d’état, ouvrir le journal",
              "Couche et fournisseur à interroger ; référence de ticket ; impact métier initial",
            ],
            [
              "15–60 minutes",
              "Activer le canal de secours, publier le premier message, préserver les traces, fixer le prochain point et l’objectif métier",
              "Personne responsable, mode dégradé, hypothèse bornée et seuil d’escalade",
            ],
            [
              "1–4 heures",
              "Comparer correction, rollback, bascule ou restauration ; suivre les données et services tiers ; informer à heure fixe",
              "Plan autorisé avec preuve, RTO/RPO explicites ou ND ; direction alertée si impact critique",
            ],
            [
              "4–24 heures",
              "Rétablir dans un environnement contrôlé, rapprocher les opérations, exécuter la recette, qualifier les données personnelles",
              "Service partiel, surveillé ou accepté ; notification seulement selon qualification compétente",
            ],
            [
              "J+1 à J+30",
              "Finaliser le journal, mesurer l’impact, fermer les actions, tester la restauration et exercer le plan corrigé",
              "RETEX avec responsables, dates et preuves ; aucune clôture sur une simple impression",
            ],
          ]}
        />

        <p>
          L’heure réelle de début n’est souvent pas celle de la détection.
          Conservez deux points : la dernière réussite connue et le premier
          échec observé. La panne a commencé quelque part dans cet intervalle.
          Distinguez ensuite l’accusé de prise en charge, le contournement, le
          retour technique, la validation métier, la fin de surveillance et la
          clôture. Ces horodatages rendent le SLA et le retour d’expérience
          vérifiables.
        </p>

        <h2 id="journal">
          6. Complétez le journal pendant que l’incident avance
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
              "Découverte, dernière réussite, premier échec, fuseau, URL, message, capture et réseau",
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
              "Personne contactée, accusé de prise en charge, référence du ticket et réponse reçue",
              "Éviter les actions contradictoires",
            ],
            [
              "Preuves techniques",
              "Source, période, fuseau, lieu de copie, personne et heure de collecte",
              "Référencer les traces sans coller les journaux bruts dans le ticket métier",
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

        <InfoBox
          variant="blue"
          title="En suspicion cyber, demandez la préservation avant la rotation"
        >
          Le prestataire ou le répondant identifie les traces pertinentes du
          registrar et du DNS, du CDN/WAF ou reverse proxy, de l’hébergeur, du
          système, de l’application et de l’authentification, de la base et,
          selon le site, des files, webhooks, paiements et e-mails. Les
          originaux sont copiés vers un emplacement isolé et protégé contre
          l’écrasement ; le journal métier ne contient qu’une référence, la
          source, la période, le fuseau et la personne ayant collecté. Demandez
          aussi de prolonger la rotation lorsque c’est nécessaire. Ne lancez
          vous-même ni collecte intrusive, ni extinction, ni installation
          d’outil sur un système suspect.
        </InfoBox>

        <h2 id="premiere-heure">
          7. Dans la première heure, appelez la personne qui peut réellement
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
            <strong>Le fournisseur tiers</strong> lorsque le site répond mais
            que le paiement, l’e-mail, la réservation, l’identité ou une API
            indispensable échoue ; gardez un seul coordinateur.
          </li>
          <li>
            <strong>Un spécialiste de réponse à incident</strong> si une
            intrusion, une redirection, un changement DNS, un compte ou une clé
            inconnue, une extorsion ou une exfiltration est possible.
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

        <p>
          Si la branche cyber est ouverte, une TPE ou PME française peut
          demander un premier niveau d’aide à{" "}
          <a
            href="https://www.cybermalveillance.gouv.fr/17cyber"
            target="_blank"
            rel="noopener noreferrer"
          >
            17Cyber
          </a>{" "}
          ou à son{" "}
          <a
            href="https://cyber.gouv.fr/nous-connaitre/ecosysteme/csirt/csirt-territoriaux/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSIRT territorial
          </a>
          . Le CERT-FR intervient selon son périmètre, notamment pour des
          systèmes d’importance particulière. Vérifiez tôt la police d’assurance
          cyber : certains contrats imposent un canal ou un prestataire, mais
          l’assureur ne remplace ni l’endiguement ni la qualification juridique.
        </p>

        <h2 id="informer">
          8. Informez les clients sans inventer la cause ni l’heure de retour
        </h2>

        <p>
          Le silence laisse les clients répéter leurs essais et imaginer le
          pire. Une promesse trop précise crée un second problème si elle n’est
          pas tenue. Dites ce qui est visible, ce qui reste possible et quand
          vous donnerez la prochaine information.
        </p>

        <GuideTable
          caption="Cinq états de communication à ne pas confondre"
          headers={[
            "État",
            "Ce que vous pouvez dire",
            "Ce que vous devez ajouter",
          ]}
          rows={[
            [
              "Investigation",
              "Nous examinons une indisponibilité qui touche [périmètre observé].",
              "Canal alternatif et heure du prochain point",
            ],
            [
              "Problème identifié",
              "La couche [confirmée par l’intervenant] est affectée ; la correction est en cours.",
              "Impact encore présent, inconnues et prochain point",
            ],
            [
              "Contournement",
              "Le service principal reste perturbé ; [moyen surveillé] permet de continuer [fonction].",
              "Limites du mode dégradé et sécurité des données",
            ],
            [
              "Surveillance",
              "Le service répond de nouveau ; nous vérifions encore les parcours et les opérations.",
              "Ne pas employer « résolu » avant acceptation",
            ],
            [
              "Résolu",
              "Les parcours [liste exacte] sont acceptés depuis [heure].",
              "Période concernée, action à faire en cas de demande manquante",
            ],
          ]}
        />

        <p>
          Le canal doit rester accessible lorsque le site tombe. Une page de
          statut séparée, un téléphone, une messagerie externe ou un réseau
          social réellement surveillé peuvent convenir selon l’activité. Si le
          domaine ou la messagerie professionnelle est suspect, passez sur un
          moyen hors bande prévu à l’avance. Faites-en une source de vérité hors
          du site : un seul message daté évite les versions contradictoires.
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
          9. Si une attaque ou des données touchées sont possibles, changez de
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
          . Dès qu’une violation est plausible, documentez en interne les faits,
          leurs effets et les mesures prises, même si aucune notification
          externe n’est finalement requise. Un sous-traitant transmet les faits
          au responsable du traitement dans les meilleurs délais. Si la
          violation présente un risque pour les personnes, le responsable la
          notifie à la CNIL dans les meilleurs délais et, si possible, au plus
          tard 72 heures après en avoir pris connaissance. Il ne faut pas
          attendre tous les détails : une notification initiale peut être
          complétée. En cas de risque élevé, les personnes concernées doivent
          aussi être informées dans les meilleurs délais, sauf exception
          applicable. Ce guide ne remplace pas la qualification juridique et de
          sécurité propre à votre situation.
        </p>

        <p>
          La durée de conservation des journaux dépend de leur finalité, du
          risque, des obligations particulières et de la minimisation. La CNIL
          donne comme ordre de grandeur général une conservation glissante de
          six mois à un an pour les traces pertinentes, sans en faire une règle
          universelle. Ne gardez jamais les logs sans limite et veillez à ce
          qu’ils ne contiennent ni mot de passe, ni secret, ni donnée inutile.
        </p>

        <InfoBox
          variant="amber"
          title="Après compromission, un rollback ne prouve pas que le site est sain"
        >
          Avant le retour, l’intervenant recherche les mécanismes de
          persistance, corrige le vecteur d’entrée, révoque ou renouvelle les
          identifiants, clés, jetons ou certificats exposés, puis confirme que
          les systèmes et les données restaurées sont propres. Il rapproche
          ensuite base, commandes, paiements, stock, webhooks et e-mails et
          maintient une surveillance renforcée. Un dépôt revenu à l’ancienne
          version ne ferme aucune de ces questions. Le{" "}
          <a
            href="https://www.ncsc.gov.uk/collection/incident-management/technical-response-capabilities"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCSC britannique formule précisément le principe « données propres
            sur systèmes et réseaux propres »
          </a>
          . Sa page, version 1.0, indique une dernière revue le 19 septembre
          2019 : elle sert ici de repère technique international, pas de règle
          juridique actuelle ni de preuve propre à votre incident.
        </InfoBox>

        <h2 id="objectifs">
          10. Définissez RTO, RPO et SLA sans les transformer en promesses
        </h2>

        <p>
          Trois notions souvent confondues répondent à trois questions
          différentes. Elles doivent être décidées avant l’incident ou rester «
          ND ». Une cible reconstruite après coup ne prouve pas qu’elle a été
          respectée. Les définitions du{" "}
          <a
            href="https://csrc.nist.gov/glossary/term/recovery_point_objective"
            target="_blank"
            rel="noopener noreferrer"
          >
            RPO dans le glossaire NIST
          </a>{" "}
          et de la planification de continuité servent ici de contrôle
          international ; votre contrat et vos exigences métier restent la
          source applicable.
        </p>

        <GuideTable
          caption="Temps d’arrêt, perte de données et engagement contractuel"
          headers={["Repère", "Question en français courant", "Piège à éviter"]}
          rows={[
            [
              "RTO — objectif de reprise",
              "Sous combien de temps le service ou un mode dégradé doit-il revenir ?",
              "Ce n’est ni le temps réellement obtenu ni une garantie sans contrat et exercice",
            ],
            [
              "RPO — objectif de point de reprise",
              "Quelle ancienneté maximale des données peut-on accepter après restauration ?",
              "Une sauvegarde quotidienne ne prouve ni restauration en 24 h ni perte nulle",
            ],
            [
              "GTI — prise en compte",
              "Sous combien de temps le support accuse-t-il et commence-t-il à qualifier ?",
              "Une réponse automatique ne prouve pas qu’une personne travaille sur l’incident",
            ],
            [
              "GTR — rétablissement",
              "Quel objectif contractuel vise le contournement ou le retour ?",
              "Vérifier point de départ, heures couvertes, périmètre, exclusions et conséquence",
            ],
            [
              "SLA — niveau de service",
              "Qui surveille, répond, escalade et prouve le niveau convenu ?",
              "Un pourcentage annuel ne décrit pas la réponse à votre incident précis",
            ],
          ]}
        />

        <p>
          Aucun de ces sigles n’est une valeur universelle. Un RTO, un RPO, une
          GTI, une GTR ou un SLA n’a de sens qu’avec un service, une horloge,
          une fenêtre de couverture, une source et une personne responsable
          clairement identifiés.
        </p>

        <p>
          Pour une boutique, le RPO ne se résume pas à l’âge du backup : les
          commandes et paiements reçus pendant l’incident doivent être
          rapprochés. Pour un formulaire, une demande qui n’est jamais arrivée
          ne réapparaîtra pas grâce à une restauration. Pour une application
          métier, le mode dégradé et les dépendances doivent être inclus dans le
          plan. Écrivez donc le service critique, la perte acceptable, le point
          restaurable, le temps estimé et la décision métier au lieu de déclarer
          simplement « sauvegarde disponible ».
        </p>

        <h2 id="restaurer">
          11. Ne restaurez une sauvegarde qu’après avoir compris ce qu’elle
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

        <GuideTable
          caption="Quatre voies de reprise et leurs preuves minimales"
          headers={["Voie", "Quand l’envisager", "Ce qui bloque le go"]}
          rows={[
            [
              "Correction en avant",
              "La cause est comprise et un correctif limité peut être testé hors production",
              "Pas de build, de test, de plan de repli ou d’explication sur les données",
            ],
            [
              "Rollback du code",
              "Une version précédente compatible est connue et les migrations sont maîtrisées",
              "Schéma de base incompatible, secrets modifiés, vecteur cyber non corrigé",
            ],
            [
              "Bascule ou mode dégradé",
              "Un autre service propre couvre temporairement la fonction critique",
              "Canal non surveillé, données moins protégées ou synchronisation future inconnue",
            ],
            [
              "Restauration de données",
              "Le point restaurable est sain, testé séparément et compatible avec le RPO",
              "Commandes récentes écrasées, intégrité inconnue, source compromise ou retour arrière absent",
            ],
          ]}
        />

        <p>
          Avant l’autorisation, demandez un instantané de l’état actuel lorsque
          cela est sûr, la provenance et l’intégrité de la version candidate, un
          test dans un environnement séparé, la compatibilité du schéma et un
          plan de retour arrière de la reprise elle-même. Après restauration,
          rapprochez base, fichiers, caches, index, files de messages,
          commandes, paiements, stock, webhooks et e-mails. Une opération
          retardée ou récupérée n’est pas une opération perdue ; une opération
          doublée n’est pas une réussite.
        </p>

        <h2 id="tester">
          12. Avant d’annoncer le retour, prouvez le travail réel de vos clients
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
              "Le message arrive réellement au bon destinataire ; l’écran seul ne suffit pas",
            ],
            [
              "Prise de rendez-vous",
              "Créer un créneau de test puis l’annuler proprement",
              "Le créneau, la notification et l’agenda reflètent la même action",
            ],
            [
              "Boutique en ligne",
              "Utiliser le bac à sable ou la procédure de test du PSP, jamais une carte client",
              "Un seul effet métier après déduplication et rapprochement des livraisons webhook manquantes, dupliquées ou désordonnées : commande, débit, stock et confirmation cohérents",
            ],
            [
              "Espace client",
              "Se connecter avec un compte de test et ouvrir les informations prévues",
              "Le compte voit ce qu’il doit voir, sans accès supplémentaire, sur les rôles essentiels",
            ],
            [
              "Tous les sites",
              "Contrôler domaine, certificat, cache/CDN, mobile, navigateur et supervision",
              "Résultat stable sur le périmètre prévu et alerte réellement reçue lors d’un test convenu",
            ],
          ]}
        />

        <p>
          Notez l’heure, le test, la personne qui l’a réalisé et le résultat.
          Vérifiez sur téléphone et ordinateur si ces usages comptent pour vos
          clients. Si un parcours échoue encore, le site est seulement
          partiellement revenu : dites-le et gardez l’autre moyen de contact.
        </p>

        <InfoBox variant="emerald" title="Les dix portes avant « résolu »">
          1. La cause est confirmée ou l’hypothèse reste explicitement bornée.
          <br />
          2. Les traces et l’état antérieur sont préservés.
          <br />
          3. La version candidate est construite et testée hors production.
          <br />
          4. Le rollback ou la restauration a un plan de repli.
          <br />
          5. Les données et opérations récentes sont rapprochées.
          <br />
          6. La branche cyber est levée par la personne compétente si elle a été
          ouverte.
          <br />
          7. Les parcours critiques, rôles et services tiers réussissent.
          <br />
          8. Les régions, caches et canaux utiles sont cohérents.
          <br />
          9. La supervision reste stable pendant la période décidée.
          <br />
          10. Une personne métier accepte la reprise et la communication est
          mise à jour.
        </InfoBox>

        <p>
          Un contrôle inconnu reste inconnu. Un échec critique ne peut pas être
          compensé par neuf cases vertes. Si l’accueil répond mais que le
          formulaire, le paiement, l’e-mail ou l’isolement des comptes échoue,
          le service est partiel. La période de surveillance n’a pas de durée
          universelle : elle dépend du trafic, des tâches asynchrones et du
          risque, puis doit être écrite dans le dossier.
        </p>

        <h2 id="seo">
          13. Protégez le référencement sans cacher l’incident à Google
        </h2>

        <p>
          La sécurité et les données restent prioritaires. Lorsque la fermeture
          est purement temporaire et techniquement maîtrisée, Google recommande
          de limiter les fonctions plutôt que de supprimer le site. Pour une
          coupure urgente d’un à deux jours, une page statique légère peut
          répondre en <code>503 Service Unavailable</code> avec un{" "}
          <code>Retry-After</code> raisonnable. Cette opération appartient au
          prestataire : une page de maintenance servie en 200 peut être indexée
          comme contenu normal, et un 503 prolongé a aussi des effets.
        </p>

        <p>
          Ne renvoyez pas par réflexe 403, 404 ou 410, n’ajoutez pas{" "}
          <code>noindex</code>, ne bloquez pas tout dans <code>robots.txt</code>{" "}
          et ne demandez pas une suppression Search Console. Le fichier robots
          doit rester accessible sans 503. Après le retour, vérifiez sur un
          échantillon les codes HTTP, canonical, robots, sitemap et données
          structurées qui auraient pu être modifiés, puis laissez les signaux se
          rafraîchir. Le maintien d’une position et son délai de récupération ne
          peuvent pas être garantis.
        </p>

        <h2 id="cout">
          14. Estimez le coût direct après la crise, sans transformer toute
          demande retardée en vente perdue
        </h2>

        <p>
          Le coût aide à décider d’un canal de secours, d’une alerte, d’une
          sauvegarde testée ou d’une astreinte. Il ne doit pas servir à inventer
          un manque à gagner spectaculaire. Séparez le minimum observé, le
          scénario modélisé, les surcoûts confirmés et les inconnues.
        </p>

        <pre>
          <code>{`Impact direct estimé =
  opérations définitivement perdues × marge unitaire
+ heures réellement improductives × personnes × coût horaire
+ heures de coordination × coût horaire
+ intervention, communication et rapprochement confirmés

À part : demandes retardées ou récupérables, réputation, risque juridique,
SEO et effets futurs restent inconnus tant qu'ils ne sont pas mesurés.`}</code>
        </pre>

        <p>
          Exemple entièrement fictif : une boutique reste perturbée quatre
          heures. Elle observe vingt commandes potentielles, dont 40 % seront
          probablement récupérées, avec 55 € de marge moyenne. La marge exposée
          modélisée est donc 20 × 55 € × 60 %, soit 660 €. Deux personnes ont
          perdu 50 % de quatre heures à 45 €/h, soit 180 €. Trois heures de
          coordination au même coût ajoutent 135 €, et l’intervention confirmée
          coûte 600 €. Le total direct illustratif est 1 575 €, pas « le coût
          complet de la panne ». Une fois les commandes rapprochées, remplacez
          le scénario par les pertes réellement irrécupérables.
        </p>

        <h2 id="exemple">15. Exemple illustratif fictif : de 08:42 à 10:32</h2>

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
          connue à 18:10 la veille, le premier échec observé à 08:42, le fuseau
          Europe/Paris et une mise en ligne signalée à 08:34. La panne a donc
          commencé dans un intervalle inconnu entre 18:10 et 08:42. Personne ne
          modifie les extensions, le domaine ou les données en parallèle. À
          09:15, les clients reçoivent un message avec le téléphone et un
          nouveau point prévu à 10:00.
        </p>

        <p>
          Dans cet exemple fictif, le mainteneur relie la panne à une version de
          l’application qui ne démarre plus. Il contrôle l’ancienne version dans
          un espace séparé et vérifie la compatibilité du schéma ; aucune donnée
          n’est restaurée puisque rien ne le justifie. À 10:20, le site répond
          en production, mais le cabinet passe au statut « surveillance ». À
          10:32, l’accueil, une page de service et la réception réelle d’un
          formulaire de test sont validés par la responsable métier. Le message
          client est alors mis à jour.
        </p>

        <p>
          De 08:42 à 10:32, il s’écoule 1 h 50, soit 110 minutes. Le contrôle
          inverse, 08:42 + 110 minutes, redonne 10:32. Ce résultat appartient
          uniquement au scénario. Une panne réelle peut durer moins ou beaucoup
          plus longtemps.
        </p>

        <p>
          Dans ce cas fictif, le téléphone comme mode dégradé devait être publié
          en trente minutes et le parcours web visait quatre heures : ces deux
          objectifs préparés à l’avance sont tenus dans le scénario. Aucun RPO
          n’est déclaré « respecté », puisqu’aucune restauration de données n’a
          eu lieu. Le nombre de formulaires tentés pendant l’intervalle reste
          inconnu ; le cabinet demande donc aux clients concernés de reprendre
          contact au lieu de conclure que rien n’a été perdu.
        </p>

        <InfoBox variant="amber" title="Ne comptez pas sur le CTA en urgence">
          Si l’incident est critique ou cyber, utilisez immédiatement votre
          astreinte, vos fournisseurs et les relais spécialisés. Le formulaire
          Hagnéré Code ci-dessous sert à une orientation commerciale en heures
          ouvrées ; il ne garantit ni prise en charge immédiate, ni réparation,
          ni intégrité des données.
        </InfoBox>

        <GuideInlineCTA
          title="Faire diagnostiquer la panne sans multiplier les changements"
          description="Indiquez l’adresse, la découverte, la dernière réussite connue, le message exact, les fonctions et réseaux touchés, le second constat passif s’il a été sûr, le dernier changement et les tickets déjà ouverts. Ce formulaire n’est pas une astreinte ni un service de réponse à incident. Quentin Hagnéré examine directement la demande et cherche à répondre le jour ouvré qui suit, sans garantir ce délai ni celui de la réparation. Cette première orientation est gratuite et sans engagement ; elle peut vous renvoyer vers l’hébergeur, le registrar ou un spécialiste cyber. Ne transmettez aucun mot de passe, secret, log brut ni fichier contenant des données personnelles inutiles."
          tags={[
            "Ticket en huit faits",
            "Aucune cause inventée",
            "Orientation cyber si nécessaire",
          ]}
          ctaLabel="Décrire la panne de mon site"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="lendemain">
          16. À J+1, J+7 et J+30, fermez les actions plutôt que le seul ticket
        </h2>

        <p>
          Une fois le service contrôlé, réunissez l’entreprise et le prestataire
          autour du journal. Le but n’est pas de trouver un coupable, mais de
          rendre la prochaine réponse plus courte et plus sûre.
        </p>

        <GuideTable
          caption="Le retour d’expérience devient un plan daté"
          headers={["Échéance", "Questions à fermer", "Preuve attendue"]}
          rows={[
            [
              "J+1",
              "Chronologie, impact observé, cause retenue et inconnues, clients à rappeler, données ou déclarations à qualifier",
              "Journal gelé, responsables nommés et actions urgentes datées",
            ],
            [
              "J+7",
              "Pourquoi les défenses n’ont pas empêché ou détecté, pourquoi la réponse a ralenti, quelles commandes/demandes ont été rapprochées",
              "Actions correctives avec propriétaire, échéance et critère de réussite",
            ],
            [
              "J+30",
              "Alertes, accès, contacts hors ligne, RTO/RPO/SLA, sauvegarde restaurée, communication et mode dégradé",
              "Exercice ou test exécuté ; action non faite conservée ouverte",
            ],
          ]}
        />

        <p>
          Le rapport final distingue la cause technique, le déclencheur, les
          facteurs qui ont étendu l’impact et les défaillances de détection ou
          d’organisation. Il conserve la chronologie, les systèmes et parcours
          touchés, la durée métier, les décisions, les coûts confirmés et les
          hypothèses. Chaque action comporte un responsable, une date et une
          preuve. « Installer un monitoring » n’est pas fermé tant qu’une alerte
          test n’a pas atteint la personne prévue.
        </p>

        <p>
          Planifiez un vrai test de restauration si cette preuve manquait.
          Listez le registrar, les fournisseurs, l’astreinte, l’assureur, les
          relais cyber et les contacts hors bande dans un endroit disponible
          même si le site tombe. Décidez ensuite si une maintenance récurrente
          est utile, sans transformer automatiquement chaque panne en
          abonnement. Un exercice de table avec un scénario fictif révèle
          souvent les accès ou responsabilités manquants sans interrompre la
          production.
        </p>

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
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Tracer les opérations
            </a>
            , publiée le 14 mars 2024, pour les sources de journaux, leur
            protection, leur durée glissante et la minimisation.
          </li>
          <li>
            <a
              href="https://www.cybermalveillance.gouv.fr/17cyber"
              target="_blank"
              rel="noopener noreferrer"
            >
              17Cyber — Assistance publique aux victimes
            </a>
            , pour l’orientation française des particuliers, entreprises,
            associations et collectivités confrontés à une cybermalveillance.
          </li>
          <li>
            <a
              href="https://www.ncsc.gov.uk/collection/small-business-guidance--response-and-recovery"
              target="_blank"
              rel="noopener noreferrer"
            >
              NCSC britannique — Response &amp; Recovery for Small Business
            </a>
            , pour le cycle préparer, identifier, résoudre, informer et
            apprendre ; ses règles juridiques ne sont pas transposées en France.
          </li>
          <li>
            <a
              href="https://www.ncsc.gov.uk/collection/incident-management/technical-response-capabilities"
              target="_blank"
              rel="noopener noreferrer"
            >
              NCSC britannique — Technical response capabilities
            </a>
            , version 1.0 indiquée comme relue le 19 septembre 2019, pour la
            séparation entre remédiation et reprise et le principe « données
            propres sur systèmes propres ». Cette source ancienne reste un
            repère technique, corroboré par les recommandations ANSSI et CISA,
            pas une norme juridique française.
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/pubs/sp/800/61/r3/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIST SP 800-61 révision 3
            </a>
            , pour relier préparation, détection, réponse, reprise et
            amélioration continue, sans en faire une certification.
          </li>
          <li>
            <a
              href="https://www.cisa.gov/stopransomware/ransomware-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              CISA — StopRansomware Guide
            </a>
            , pour les sauvegardes testées, les communications hors bande, les
            traces volatiles et l’isolation coordonnée ; le périmètre est cyber,
            pas toute panne web.
          </li>
          <li>
            <a
              href="https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-502-504/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare — erreurs 502 et 504
            </a>
            , comme documentation d’opérateur montrant qu’un même symptôme peut
            venir de l’edge ou de l’origine, pas comme diagnostic universel.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/webhooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — Webhooks
            </a>
            , pour l’ordre non garanti, la déduplication et les tests propres au
            prestataire ; les mêmes principes doivent être confirmés dans votre
            intégration réelle.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/pause-online-business?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Suspendre temporairement une activité
            </a>
            , consultée le 27 juillet 2026, pour le service limité, le 503 très
            court, <code>Retry-After</code> et les erreurs à éviter, sans
            garantie de positions.
          </li>
        </ul>

        <p>
          Sources revérifiées le 27 juillet 2026. Ce guide n’identifie pas la
          cause de votre panne, ne garantit aucun délai, ne remplace ni une
          réponse à incident cyber ni une analyse juridique, et ne permet pas
          d’affirmer que les données sont intactes. Les repères 0–5–15–60
          minutes, 4 et 24 heures organisent les décisions ; ils ne décrivent
          pas le temps nécessaire à une réparation. Le calculateur et le dossier
          local ne testent aucun système et ne certifient ni reprise, ni
          conformité, ni sécurité.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
