import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("reprendre-maintenance-site-autre-agence");

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
        alt: "Les étapes de reprise avant de retirer les accès de l’ancienne agence",
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
      name: "Changer d’agence de maintenance",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Peut-on changer d’agence de maintenance sans déplacer le site ?",
    answer:
      "Oui. La personne qui entretient le site, l’hébergeur, le nom de domaine, les réglages qui dirigent le trafic et la messagerie sont des éléments distincts. Si l’hébergement fonctionne et reste sous votre contrôle, la nouvelle agence peut parfois reprendre la maintenance sans le déplacer.",
  },
  {
    question: "Quand faut-il retirer les accès de l’ancienne agence ?",
    answer:
      "Après avoir vérifié qu’un compte contrôlé par votre entreprise reste administrateur, qu’une copie a été restaurée, que la nouvelle équipe sait publier et que les fonctions importantes répondent encore. Retirez ensuite les comptes nominatifs et les accès techniques devenus inutiles.",
  },
  {
    question: "Une sauvegarde suffit-elle pour reprendre un site ?",
    answer:
      "Non. Il faut connaître son contenu, sa date, le service qui la conserve et la façon de la restaurer. Pour un site WordPress typique, les fichiers et la base de données sont nécessaires. L’essai sur une adresse privée ou de test montre ce qui manque réellement.",
  },
  {
    question: "Faut-il transférer le nom de domaine à la nouvelle agence ?",
    answer:
      "Pas automatiquement. Le domaine devrait rester contrôlé par son titulaire ou par l’entreprise avec un moyen de récupération durable. Une agence peut recevoir les droits nécessaires sans devenir propriétaire ni être le seul administrateur.",
  },
  {
    question: "Que faire si l’ancienne agence ne répond plus ?",
    answer:
      "Inventoriez d’abord les comptes que votre entreprise contrôle déjà et rassemblez contrats, factures et échanges. Contactez ensuite chaque fournisseur par sa procédure officielle avec les justificatifs légitimes. Ne contournez aucun accès et faites examiner les droits contestés par un professionnel compétent.",
  },
  {
    question:
      "La nouvelle agence peut-elle recevoir une copie avec des données clients ?",
    answer:
      "Seulement si cet accès est nécessaire et encadré. Préférez des données fictives, minimisées ou anonymisées pour les premiers essais. Si la nouvelle agence traite des données personnelles pour votre compte, les rôles, instructions, mesures de sécurité et conditions de fin doivent être décrits avant l’accès.",
  },
  {
    question: "Combien de temps prend un changement d’agence ?",
    answer:
      "Il n’existe pas de délai universel. Le temps dépend des accès disponibles, de la coopération de l’agence sortante, de la technologie, des fournisseurs et de ce qui doit réellement être déplacé. Demandez un ordre d’opérations avec un responsable et un contrôle pour chaque service.",
  },
  {
    question: "Un site ancien doit-il être refait pour être repris ?",
    answer:
      "Non. Une reprise peut suffire si le site peut être restauré, publié, entretenu et protégé à un niveau adapté. Une reconstruction devient raisonnable lorsque les éléments manquants, les risques ou le coût des corrections sont établis, pas simplement parce que le code est ancien.",
  },
];

function CheckCard({
  number,
  title,
  action,
  result,
}: {
  number: string;
  title: string;
  action: string;
  result: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-800 dark:bg-violet-950 dark:text-violet-200">
          {number}
        </span>
        <h3 className="mb-0 text-lg font-bold text-zinc-950 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {action}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
        <strong>Vous pouvez continuer lorsque :</strong> {result}
      </p>
    </div>
  );
}

function ServiceCard({
  title,
  control,
  test,
}: {
  title: string;
  control: string;
  test: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-3 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <strong>À retrouver :</strong> {control}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-blue-800 dark:text-blue-300">
        <strong>À essayer :</strong> {test}
      </p>
    </div>
  );
}

function SituationCard({
  title,
  doNow,
  doNot,
}: {
  title: string;
  doNow: string;
  doNot: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="mb-3 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {doNow}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-red-800 dark:text-red-300">
        <strong>À éviter :</strong> {doNot}
      </p>
    </div>
  );
}

function ChoiceCard({
  title,
  when,
  next,
}: {
  title: string;
  when: string;
  next: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {when}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-violet-800 dark:text-violet-300">
        <strong>Prochaine action :</strong> {next}
      </p>
    </div>
  );
}

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
          { label: "Changer d’agence de maintenance" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous voulez changer l’équipe qui entretient votre site tout en gardant le domaine, les e-mails et les demandes clients sous contrôle ? Testez la reprise avant de retirer un accès."
        heroAction={{
          href: "#trois-controles",
          label: "Voir les contrôles avant le changement",
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
            title: "Ne coupez aucun accès trop tôt",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Restaurez une copie",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Testez formulaires et e-mails",
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
            href: "/guides/cout-maintenance-site-internet",
            label: "Comparer le coût de la maintenance",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Vérifier qui possède le site et les accès",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Reprendre une application métier",
          },
          {
            href: "/services/maintenance-evolution",
            label: "Découvrir notre service de maintenance",
          },
        ]}
        faqTitle="Changer d’agence de maintenance : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Votre agence répond trop lentement, arrête son activité ou ne vous
          convient plus. Vous voulez confier le site à une autre équipe, mais il
          reçoit encore des demandes et vos e-mails utilisent peut-être le même
          nom de domaine. Le réflexe dangereux serait de couper l’ancien accès
          ou de tout déplacer le même jour. Commencez par vérifier qu’un compte
          de votre entreprise reste administrateur, qu’une copie du site
          fonctionne et que la nouvelle équipe sait publier sans casser les
          formulaires.
        </p>
        <p>
          <strong>
            Changer de mainteneur ne signifie pas forcément migrer.
          </strong>{" "}
          La maintenance, l’hébergement, le nom de domaine et la messagerie sont
          des services différents. Vous pouvez souvent remplacer l’équipe qui
          entretient le site tout en laissant le reste en place. Chaque
          déplacement supplémentaire ajoute une opération à contrôler.
        </p>
        <p>
          Ce guide vous aide à distinguer une passation simple, une vérification
          technique plus poussée, une courte stabilisation avec l’équipe
          actuelle ou une reconstruction justifiée. Il ne donne aucune méthode
          pour contourner un compte et ne suppose pas que la nouvelle agence
          possède des droits que votre entreprise n’a pas.
        </p>

        <GuideToc
          items={[
            {
              id: "trois-controles",
              label: "1. Ne retirez rien avant trois contrôles",
            },
            {
              id: "ce-qui-change",
              label: "2. Décidez ce qui doit vraiment changer",
            },
            {
              id: "liste-services",
              label: "3. Retrouvez ce qui fait vivre le site",
            },
            {
              id: "copie",
              label: "4. Faites fonctionner une copie protégée",
            },
            {
              id: "ancienne-agence",
              label: "5. Adaptez-vous à l’agence sortante",
            },
            {
              id: "ordre",
              label: "6. Changez un service à la fois",
            },
            {
              id: "fermeture",
              label: "7. Fermez aussi les accès techniques",
            },
            {
              id: "choix",
              label: "8. Choisissez la suite raisonnable",
            },
            { id: "dossier", label: "9. Préparez le premier échange" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="trois-controles">
          1. Ne retirez rien avant ces trois contrôles
        </h2>
        <p>
          Une séparation tendue peut donner envie de changer immédiatement les
          mots de passe. Sauf incident de sécurité actif traité avec les
          personnes compétentes, prenez d’abord le temps de savoir qui contrôle
          quoi. Le bon moment pour retirer un accès est celui où vous n’en
          dépendez plus.
        </p>
        <div className="not-prose my-6 grid gap-3 md:grid-cols-3">
          <CheckCard
            number="1"
            title="Un accès contrôlé par votre entreprise"
            action="Ouvrez chaque compte important et vérifiez son administrateur, son adresse de récupération et la personne qui reçoit les alertes de facturation."
            result="une personne de l’entreprise peut se connecter ou récupérer le compte sans passer par l’agence sortante."
          />
          <CheckCard
            number="2"
            title="Une copie réellement remise en service"
            action="Demandez une sauvegarde datée, puis faites-la restaurer sur une adresse privée ou de test par la personne qui reprendra le site."
            result="la copie affiche le contenu attendu et la procédure utilisée est expliquée."
          />
          <CheckCard
            number="3"
            title="Une nouvelle équipe capable de publier"
            action="Faites réaliser une modification sans conséquence, contrôlez son affichage et envoyez une demande de test depuis le formulaire."
            result="la version est publiée, la demande arrive au bon endroit et un retour au réglage précédent est possible."
          />
        </div>
        <InfoBox
          variant="amber"
          title="Ce guide ne traite pas une attaque en cours"
        >
          Si vous soupçonnez un compte compromis, une fuite de données ou une
          modification malveillante, ne suivez pas une simple passation de
          maintenance. Isolez le problème avec votre hébergeur et une équipe
          compétente en réponse à incident, conservez les éléments utiles et
          évaluez les obligations applicables.
        </InfoBox>

        <h2 id="ce-qui-change">2. Décidez ce qui doit vraiment changer</h2>
        <p>
          Le nom de l’agence apparaît parfois sur toutes les factures, ce qui
          donne l’impression qu’elle possède un seul gros bloc. En réalité,
          plusieurs services peuvent avoir été réunis commercialement tout en
          restant techniquement séparés.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <SituationCard
            title="Changer seulement l’équipe de maintenance"
            doNow="Gardez l’hébergement et le domaine en place. Ajoutez les accès nominatifs de la nouvelle équipe, faites ses essais, puis retirez ceux qui ne servent plus."
            doNot="déplacer le site uniquement pour donner l’impression que le changement est complet."
          />
          <SituationCard
            title="Changer aussi d’hébergement"
            doNow="Préparez une copie chez le nouvel hébergeur, comparez-la au site public et écrivez comment remettre l’ancienne destination si le changement échoue."
            doNot="modifier l’adresse vers laquelle le domaine envoie les visiteurs avant que la copie ait été contrôlée."
          />
          <SituationCard
            title="Transférer la gestion du domaine"
            doNow="Vérifiez le titulaire, les contacts, le renouvellement et la procédure propre à l’extension avant de demander le transfert."
            doNot="transférer le domaine à une nouvelle agence lorsqu’un compte contrôlé par votre entreprise peut rester titulaire et administrateur."
          />
          <SituationCard
            title="Modifier les e-mails ou leurs réglages"
            doNow="Faites cartographier les réglages du domaine qui dirigent le site et les e-mails, puis testez séparément l’envoi et la réception."
            doNot="supposer qu’un changement destiné au site ne peut pas affecter la messagerie."
          />
        </div>
        <p>
          Les <strong>DNS</strong> sont les réglages qui indiquent vers quels
          services le nom de domaine envoie les visiteurs et les e-mails. Les
          déplacer n’est pas nécessaire pour chaque changement de mainteneur. L’
          <a
            href="https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Afnic décrit le rôle du titulaire et les démarches de gestion
          </a>{" "}
          pour les domaines de son ressort ; la procédure exacte dépend de
          l’extension et du fournisseur utilisé.
        </p>

        <h2 id="liste-services">3. Retrouvez ce qui fait vivre votre site</h2>
        <p>
          Ne créez pas un fichier rempli de mots de passe. Faites plutôt une
          fiche par service avec son fournisseur, le compte contrôlé par
          l’entreprise, les autres administrateurs, le renouvellement, la copie
          disponible, le contrôle à réaliser et la date prévue de retrait. Les
          mots de passe, clés et codes de récupération restent dans un outil
          prévu pour les protéger.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <ServiceCard
            title="Nom de domaine"
            control="le titulaire, le bureau qui le gère, les contacts, le renouvellement et le moyen de récupération."
            test="vous connecter depuis le compte de l’entreprise et vérifier qui reçoit les alertes, sans lancer de transfert."
          />
          <ServiceCard
            title="Réglages du site et des e-mails"
            control="la zone DNS actuelle, les services auxquels chaque réglage renvoie et la personne autorisée à la modifier."
            test="documenter la destination du site et de la messagerie, puis préparer le réglage précédent à remettre en cas d’échec."
          />
          <ServiceCard
            title="Hébergement"
            control="le contrat, la facturation, les administrateurs, les versions utilisées, les journaux utiles et la prochaine échéance."
            test="ouvrir l’administration, retrouver le site et savoir comment publier ou restaurer sans modifier le site public."
          />
          <ServiceCard
            title="Code, contenus et base de données"
            control="les fichiers, leur historique lorsqu’il existe, les contenus, les images, la base et la procédure de mise en ligne."
            test="reconstruire ou restaurer une copie avec la personne qui assurera la suite."
          />
          <ServiceCard
            title="Formulaires et e-mails envoyés par le site"
            control="les destinataires, le service d’envoi, les modèles, les filtres, les quotas et le compte de facturation."
            test="envoyer une demande fictive, vérifier sa réception et confirmer qu’aucune vraie donnée client n’est utilisée."
          />
          <ServiceCard
            title="Mesure d’audience et consentement"
            control="les comptes d’analyse, les balises, l’outil de consentement, les administrateurs et le lien avec les autres services."
            test="vérifier que la nouvelle équipe peut voir les réglages nécessaires sans obtenir des droits inutiles."
          />
          <ServiceCard
            title="Sauvegardes"
            control="ce qui est copié, la fréquence, la durée de conservation, le lieu, le chiffrement applicable et la personne alertée en cas d’échec."
            test="restaurer une copie choisie et noter ce qui a dû être ajouté manuellement."
          />
          <ServiceCard
            title="Licences et renouvellements"
            control="les thèmes, extensions, polices, images, services payants, compte acheteur, conditions d’usage et échéances."
            test="vérifier qu’une mise à jour ou un renouvellement reste possible après le départ de l’agence."
          />
        </div>
        <p>
          Pour distinguer vos contenus, le code créé, les composants sous
          licence et les comptes, consultez le guide qui explique{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            ce qui vous appartient réellement dans un site internet
          </Link>
          . La présence d’un fichier ne suffit pas à établir tous les droits, et
          l’existence d’un droit ne garantit pas à elle seule que le site soit
          techniquement reprenable.
        </p>

        <h2 id="copie">4. Isolez la copie avant de la faire fonctionner</h2>
        <p>
          Une sauvegarde est utile lorsqu’une personne sait la remettre en
          service. Le guide de{" "}
          <a
            href="https://messervices.cyber.gouv.fr/guides/fondamentaux-sauvegarde-systemes-dinformation"
            target="_blank"
            rel="noopener noreferrer"
          >
            MesServicesCyber consacré aux sauvegardes
          </a>{" "}
          rappelle leur rôle face aux incidents opérationnels et de sécurité. Il
          ne fixe pas une méthode unique pour votre site : l’essai doit suivre
          votre technologie et vos besoins.
        </p>
        <p>
          Pour un site WordPress typique, la{" "}
          <a
            href="https://developer.wordpress.org/advanced-administration/security/backup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation officielle distingue les fichiers et la base de
            données
          </a>
          . Copier seulement le dossier du site ou seulement la base peut donc
          laisser une partie importante de côté. Pour une autre technologie,
          demandez la liste équivalente au fournisseur ou à la personne qui l’a
          mise en place.
        </p>
        <p>
          Avant le premier essai, placez cette copie derrière une
          authentification et empêchez son apparition dans les moteurs de
          recherche. Une consigne de non-indexation ne remplace pas
          l’authentification : elle ne bloque pas à elle seule l’accès à
          l’adresse. Supprimez ou anonymisez les données réelles, remplacez les
          identifiants utilisés par le site public et désactivez les envois
          d’e-mails ou de SMS, les paiements et les appels automatiques vers
          d’autres outils. Utilisez les modes de test proposés par les
          fournisseurs lorsqu’ils existent.
        </p>
        <p>
          Si une donnée personnelle réelle est indispensable à un essai,
          définissez d’abord qui peut y accéder, pourquoi, pendant combien de
          temps et comment la copie sera protégée puis supprimée. L’encadrement
          de la nouvelle agence et les mesures de sécurité doivent précéder la
          remise de cette copie, pas la régulariser après.
        </p>
        <p>Sur la copie, contrôlez au minimum :</p>
        <ol>
          <li>la page d’accueil, les pages importantes et les images ;</li>
          <li>la connexion d’administration avec un compte de test ;</li>
          <li>un formulaire envoyé avec des informations fictives ;</li>
          <li>
            les e-mails automatiques vers une boîte de test ou un service qui
            intercepte les messages sans les envoyer aux vrais destinataires ;
          </li>
          <li>
            les fonctions commerciales importantes : rendez-vous, paiement ou
            espace client lorsqu’elles existent, uniquement dans un mode de test
            isolé ;
          </li>
          <li>
            la capacité à publier une petite modification puis à l’annuler ;
          </li>
          <li>les erreurs encore visibles et les éléments manquants.</li>
        </ol>
        <InfoBox
          variant="blue"
          title="Commencez sans recopier les données clients"
        >
          Utilisez des données fictives ou rendues anonymes dès que cela permet
          l’essai. Si la nouvelle agence doit traiter des données personnelles
          pour votre compte, encadrez cet accès avant de lui remettre la copie.
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle les obligations liées au choix et à l’encadrement d’un
            sous-traitant
          </a>
          , notamment les instructions, la sécurité et la fin de la prestation.
        </InfoBox>

        <h2 id="ancienne-agence">
          5. Adaptez la passation à la réponse de l’ancienne agence
        </h2>
        <p>
          Le même message ne convient pas à une agence disponible, à une société
          qui ne répond plus et à un prestataire qui conteste la remise d’un
          élément. Séparez toujours la capacité technique à continuer du droit
          d’utiliser ce qui vous est remis.
        </p>
        <div className="not-prose my-6 grid gap-3 md:grid-cols-3">
          <SituationCard
            title="L’agence coopère"
            doNow="Demandez une présentation des comptes, de la mise en ligne, des sauvegardes, des incidents ouverts, des renouvellements et des travaux en cours. Faites exécuter une action par la nouvelle équipe pendant que l’ancienne peut encore répondre."
            doNot="transformer la réunion en inventaire commercial vague sans démonstration ni personne responsable de la suite."
          />
          <SituationCard
            title="L’agence ne répond plus"
            doNow="Séparez les comptes déjà contrôlés par l’entreprise des éléments manquants. Rassemblez contrats, factures et échanges, puis utilisez les procédures officielles de chaque fournisseur avec vos justificatifs."
            doNot="deviner un mot de passe, contourner un compte ou présenter une facture comme un droit automatique sur tous les éléments."
          />
          <SituationCard
            title="Un élément est contesté"
            doNow="Laissez l’élément contesté de côté, documentez ce qui peut continuer légalement et faites lire le contrat par un professionnel compétent lorsque l’enjeu le justifie."
            doNot="demander à la nouvelle équipe d’utiliser ou de modifier un code, une image ou une licence dont les droits restent incertains."
          />
        </div>
        <p>
          L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3 du Code de la propriété intellectuelle
          </a>{" "}
          demande que les droits cédés soient identifiés et que leur utilisation
          soit délimitée. Son application à votre code, votre design, vos
          contenus et vos contrats doit être vérifiée dans la situation réelle.
          Ce guide ne tranche aucun litige et ne remplace pas un conseil
          juridique.
        </p>

        <h2 id="ordre">6. Changez un service à la fois</h2>
        <p>
          Il n’existe pas d’ordre universel, car les dépendances diffèrent. Le
          principe est plus simple : ne réunissez pas deux changements qui
          pourraient être séparés. Gardez le service actuel tant qu’il
          fonctionne, préparez son remplacement, contrôlez le résultat puis
          seulement passez au suivant.
        </p>
        <ol>
          <li>
            ajoutez les comptes nominatifs de la nouvelle équipe avec seulement
            les droits utiles ;
          </li>
          <li>
            restaurez et contrôlez une copie sans changer l’adresse du site
            public ;
          </li>
          <li>
            faites publier une modification limitée et recevoir une demande de
            test ;
          </li>
          <li>
            déplacez l’hébergement seulement si son changement est nécessaire ;
          </li>
          <li>
            préparez les réglages précédents avant toute modification du domaine
            ;
          </li>
          <li>
            contrôlez séparément le site, les formulaires, l’envoi et la
            réception des e-mails ;
          </li>
          <li>
            attendez la fin des contrôles avant de fermer les anciens accès.
          </li>
        </ol>
        <p>
          Pour chaque opération, écrivez une personne qui agit, une personne qui
          confirme le résultat métier et la façon de remettre l’ancien réglage.
          « Le site répond » ne suffit pas si les demandes commerciales partent
          vers une ancienne boîte ou si personne ne reçoit les alertes de
          renouvellement.
        </p>

        <h2 id="fermeture">
          7. Fermez les comptes humains et les accès techniques
        </h2>
        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de tracer les interventions de maintenance, de
            limiter les accès distants à une durée adaptée et de les refermer
          </a>{" "}
          après l’intervention. Appliquez cette logique aux accès nominatifs de
          l’agence, en l’adaptant à votre site et aux données réellement
          accessibles.
        </p>
        <p>
          Ne vous arrêtez pas à la liste des utilisateurs visibles. Une
          connexion peut aussi reposer sur une clé de publication, un code
          technique d’accès — souvent appelé jeton —, une application installée
          ou une adresse appelée automatiquement. La{" "}
          <a
            href="https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation GitHub sur le transfert d’un espace de code
          </a>{" "}
          invite par exemple à examiner les clés utilisées pour publier, les
          codes techniques enregistrés, les adresses appelées automatiquement —
          appelées webhooks — et les autres connexions. Chaque fournisseur a ses
          propres mécanismes : ne transposez pas les boutons GitHub à un autre
          service.
        </p>
        <p>Avant le retrait définitif, confirmez que :</p>
        <ul>
          <li>le site public affiche la version attendue ;</li>
          <li>une copie choisie peut être restaurée ;</li>
          <li>la nouvelle équipe peut publier puis revenir en arrière ;</li>
          <li>les formulaires arrivent chez les bonnes personnes ;</li>
          <li>les e-mails liés au domaine fonctionnent dans les deux sens ;</li>
          <li>les renouvellements et alertes arrivent à l’entreprise ;</li>
          <li>
            les comptes de mesure et de consentement restent accessibles ;
          </li>
          <li>
            chaque nouvelle clé ou connexion technique a été installée et testée
            avant le retrait de l’ancienne ;
          </li>
          <li>
            les données confiées à l’ancienne agence sont rendues ou supprimées
            selon le contrat et les règles applicables.
          </li>
        </ul>
        <p>
          Pour chaque clé, jeton ou connexion automatique, commencez par noter
          le service qui l’utilise — sans copier le secret dans votre fiche.
          Créez le nouvel accès, installez-le avec la nouvelle équipe et
          refaites le contrôle concerné : publication, formulaire, e-mail,
          paiement de test ou échange avec un autre outil. Révoquez seulement
          ensuite l’ancien accès, puis rejouez une dernière fois le même
          contrôle.
        </p>
        <p>
          Lorsque ces essais réussissent avec les nouveaux accès, retirez les
          comptes de l’ancienne équipe et supprimez les connexions devenues
          inutiles. Conservez la date, la personne et le résultat observé, mais
          jamais le mot de passe, la clé ou le jeton dans la fiche de passation.
        </p>

        <h2 id="choix">8. Choisissez la suite raisonnable</h2>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <ChoiceCard
            title="Organiser une passation simple"
            when="Les comptes sont contrôlés, la copie fonctionne, la technologie est comprise et l’agence sortante peut expliquer les points particuliers."
            next="fixer les éléments remis, faire publier la nouvelle équipe puis retirer les anciens accès."
          />
          <ChoiceCard
            title="Commencer par une vérification technique"
            when="Le site fonctionne, mais personne ne sait encore le restaurer, le publier ou expliquer ses dépendances et ses risques."
            next="limiter la première mission à l’inventaire, à la copie et aux essais avant de signer une maintenance longue."
          />
          <ChoiceCard
            title="Stabiliser avant de changer"
            when="L’équipe actuelle coopère, une correction urgente est en cours ou plusieurs renouvellements doivent être sécurisés avant le départ."
            next="terminer les actions indispensables, documenter leur résultat et planifier la passation sans tout déplacer."
          />
          <ChoiceCard
            title="Reconstruire seulement si les constats le justifient"
            when="Les éléments manquants, les risques non corrigeables ou le coût réel de la remise en état rendent la reprise déraisonnable."
            next="comparer reprise et reconstruction en conservant domaine, contenus, redirections et services encore utiles."
          />
        </div>
        <p>
          Si ce que vous appelez « site » pilote aussi des opérations internes,
          des droits complexes ou des données critiques, le guide pour{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            reprendre une application métier existante
          </Link>{" "}
          sera plus adapté. Une maintenance de site et la reprise d’un logiciel
          qui porte l’activité ne demandent pas le même niveau d’analyse.
        </p>

        <GuideInlineCTA
          title="Faire vérifier si votre site peut être repris"
          description="Le bouton ouvre notre formulaire projet. Indiquez le site concerné, la raison du changement, les comptes que votre entreprise contrôle déjà et ce qui manque. Nous pourrons examiner si une passation suffit, si une vérification technique limitée est nécessaire ou s’il vaut mieux stabiliser d’abord — sans demander d’accès avant d’avoir compris le besoin."
          tags={[
            "Aucun accès demandé d’emblée",
            "Passation possible",
            "Reconstruction non automatique",
          ]}
          ctaLabel="Décrire la reprise de mon site"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="dossier">
          9. Préparez le premier échange sans envoyer de secret
        </h2>
        <p>
          Vous pouvez rendre le premier échange utile sans transmettre un seul
          mot de passe. Réunissez :
        </p>
        <ol>
          <li>l’adresse du site et son rôle dans votre activité ;</li>
          <li>
            la raison du changement et la situation de l’agence actuelle ;
          </li>
          <li>
            la liste des fournisseurs connus : domaine, hébergement, e-mails,
            formulaires, mesure et consentement ;
          </li>
          <li>les comptes que votre entreprise contrôle déjà ;</li>
          <li>la date et le contenu connu de la dernière sauvegarde ;</li>
          <li>les fonctions qui doivent absolument continuer ;</li>
          <li>les contrats, licences ou droits encore à clarifier ;</li>
          <li>les renouvellements et changements déjà prévus.</li>
        </ol>
        <p>
          Hagnéré Code vend des prestations de maintenance et de reprise : nous
          avons donc un intérêt commercial dans ce sujet. Vous pouvez lire notre{" "}
          <Link href="/services/maintenance-evolution">
            offre de maintenance et d’évolution
          </Link>{" "}
          puis appliquer les mêmes contrôles à notre proposition et à celle de
          toute autre équipe.
        </p>

        <h2 id="sources">Sources et limites</h2>
        <p>
          Sources consultées le 22 juillet 2026. Les procédures de domaine,
          d’hébergement, de transfert, de sauvegarde et de fermeture des accès
          évoluent selon les fournisseurs. Vérifiez leur documentation actuelle
          au moment de l’opération. Ce guide ne remplace ni un conseil
          juridique, ni une réponse à incident, ni une vérification de sécurité
          adaptée à votre site.
        </p>
        <ul>
          <li>
            CNIL, 14 mars 2024 : encadrer la maintenance et la fin de vie des
            matériels et logiciels ;
          </li>
          <li>CNIL : gérer la sous-traitance et article 28 du RGPD ;</li>
          <li>
            MesServicesCyber / ANSSI, publié le 25 octobre 2023 : sauvegarde des
            systèmes d’information ;
          </li>
          <li>
            WordPress Developer Resources : sauvegarder fichiers et base de
            données ;
          </li>
          <li>Afnic : gérer un nom de domaine ;</li>
          <li>
            GitHub Docs : transférer un espace de code et revoir ses accès ;
          </li>
          <li>
            Légifrance : article L131-3 du Code de la propriété intellectuelle.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
