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

const guide = getGuide("sla-maintenance-applicative");

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
        alt: "Chronologie d’une panne pour écrire un SLA de maintenance applicative",
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
      name: "SLA de maintenance applicative",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Que signifie SLA dans un contrat de maintenance ?",
    answer:
      "SLA signifie accord de niveau de service. Il décrit le service couvert, la façon de mesurer son fonctionnement, la cible attendue, les horaires et les conséquences prévues si l’engagement n’est pas tenu. Le sigle seul ne protège pas l’entreprise.",
  },
  {
    question:
      "Une prise en charge sous quatre heures signifie-t-elle une réparation sous quatre heures ?",
    answer:
      "Non. La prise en charge signifie normalement qu’un intervenant commence à agir, selon la définition du contrat. Le contournement, le rétablissement, la restauration des données et la correction définitive doivent posséder leurs propres définitions.",
  },
  {
    question: "Quel taux de disponibilité faut-il exiger ?",
    answer:
      "Il n’existe pas de pourcentage universel. Partez du travail qui doit rester possible, des horaires, de la durée tolérable d’une interruption et du coût des moyens nécessaires. Un pourcentage sans méthode de calcul, exclusions et parcours utilisateur est insuffisant.",
  },
  {
    question: "Quelle différence entre RTO et RPO ?",
    answer:
      "Le RTO répond à la question du temps : combien de temps la récupération peut-elle durer avant que l’activité soit trop affectée ? Le RPO répond à la question des données : jusqu’à quel point dans le temps faut-il pouvoir les récupérer après une panne ?",
  },
  {
    question: "Le SLA doit-il fonctionner la nuit et le week-end ?",
    answer:
      "Seulement si l’activité en a besoin et si l’organisation correspondante existe. Le contrat doit écrire les heures couvertes, le fuseau horaire, les jours fériés, le canal d’alerte et ce qui se passe en dehors de cette plage.",
  },
  {
    question: "Un crédit de service compense-t-il une panne ?",
    answer:
      "Pas nécessairement. Un crédit peut être une conséquence contractuelle mesurable, mais il ne rembourse pas automatiquement la perte d’exploitation, les opérations manuelles ou la confiance client. Les recours doivent être validés avec un professionnel du droit.",
  },
];

const timeline = [
  ["09:10", "Blocage constaté", "Les factures ne partent plus"],
  [
    "09:18",
    "Accusé reçu",
    "Le ticket existe ; personne n’a encore rétabli le service",
  ],
  ["10:05", "Prise en charge", "Un intervenant commence le diagnostic"],
  ["11:40", "Contournement", "Un export manuel traite les urgences"],
  ["14:20", "Rétablissement", "L’application permet de facturer à nouveau"],
  ["16:00", "Données vérifiées", "La synchronisation est contrôlée"],
];

function IncidentTimeline() {
  return (
    <section
      className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-6 dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="incident-title"
    >
      <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-300">
        Exemple illustratif fictif
      </p>
      <h2
        id="incident-title"
        className="mb-0 mt-2 text-xl font-bold text-zinc-950 dark:text-white"
      >
        Une panne contient plusieurs horloges
      </h2>
      <ol className="mb-0 mt-5 space-y-3 p-0">
        {timeline.map(([time, title, detail]) => (
          <li
            key={time}
            className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="shrink-0 font-mono text-sm font-bold text-amber-700 dark:text-amber-300">
              {time}
            </span>
            <span>
              <strong className="block text-sm text-zinc-950 dark:text-zinc-100">
                {title}
              </strong>
              <span className="mt-1 block text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {detail}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </section>
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
          { label: "SLA de maintenance applicative" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Une réponse rapide ne garantit pas que vos équipes pourront reprendre leur travail. Partez d’une panne concrète pour écrire les horaires, le début des délais, le rétablissement attendu et la récupération des données."
        heroAction={{
          href: "#sept-moments",
          label: "Distinguer les 7 moments",
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
            title: "Réponse ≠ rétablissement",
            description: "",
            color: "amber",
          },
          {
            number: "02",
            title: "RTO et RPO traduits",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Aucun seuil universel",
            description: "",
            color: "violet",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/contrat-tma-application",
            label: "Relire le contrat TMA complet",
          },
          {
            href: "/guides/cout-maintenance-application-metier",
            label: "Comprendre le coût d’une maintenance applicative",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Auditer l’application avant de la reprendre",
          },
          {
            href: "/guides/tma-ou-regie",
            label: "Choisir l’organisation de la maintenance",
          },
        ]}
        faqTitle="SLA applicatif : les questions à poser avant de signer"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Votre contrat promet une « réponse sous quatre heures ». Cela ne
            signifie pas que l’application repartira dans quatre heures. Le
            ticket peut être reçu rapidement alors que les utilisateurs restent
            bloqués toute la journée. Un bon SLA distingue au minimum l’accusé
            de réception, la prise en charge, le fonctionnement provisoire, le
            rétablissement et la récupération des données.
          </strong>
        </p>

        <p>
          Le SLA, ou accord de niveau de service, doit aussi préciser les
          horaires couverts, le point de départ du délai, la preuve qui l’arrête
          et les dépendances que le mainteneur contrôle réellement. Il n’existe
          pas de délai ni de pourcentage adapté à toutes les entreprises. Ce
          guide vous aide à écrire les bonnes questions avant de négocier les
          chiffres et le prix.
        </p>

        <IncidentTimeline />

        <GuideToc
          items={[
            {
              id: "sept-moments",
              label: "1. Les sept moments différents d’une panne",
            },
            {
              id: "service",
              label: "2. Commencer par le travail que l’application permet",
            },
            {
              id: "horaires",
              label: "3. Écrire quand chaque délai commence et s’arrête",
            },
            {
              id: "rto-rpo",
              label: "4. RTO et RPO : temps perdu et données perdues",
            },
            {
              id: "disponibilite",
              label: "5. Pourquoi un pourcentage ne suffit pas",
            },
            {
              id: "dependances",
              label: "6. Vérifier qui peut réellement promettre quoi",
            },
            {
              id: "niveaux",
              label: "7. Choisir un niveau de service proportionné",
            },
            {
              id: "tester",
              label: "8. Tester le SLA sur trois incidents",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="sept-moments">
          1. Une panne contient sept moments que le contrat ne doit pas mélanger
        </h2>

        <p>
          Le mot « résolution » est commode, mais dangereux lorsqu’il n’est pas
          défini. Pour un utilisateur, le problème est résolu lorsqu’il peut
          travailler. Pour le technicien, il peut l’être lorsque la cause est
          identifiée. Pour le contrat, il peut s’agir d’un simple contournement.
        </p>

        <GuideTable
          headers={["Moment", "Ce qui se passe réellement", "Preuve possible"]}
          rows={[
            [
              "Accusé de réception",
              "La demande est enregistrée",
              "Numéro et heure du ticket",
            ],
            [
              "Prise en charge",
              "Une personne qualifiée commence à agir",
              "Intervenant nommé et première action",
            ],
            [
              "Diagnostic",
              "La cause ou la zone probable est identifiée",
              "Constat partagé, sans promettre la correction",
            ],
            [
              "Contournement",
              "Une partie du travail reprend autrement",
              "Parcours provisoire testé et limites écrites",
            ],
            [
              "Rétablissement",
              "Le service utile fonctionne à nouveau",
              "Test métier défini dans le contrat",
            ],
            [
              "Restauration",
              "Les données reviennent à l’état convenu",
              "Contrôle de cohérence et point temporel",
            ],
            [
              "Correction définitive",
              "La cause est traitée et la correction validée",
              "Test, déploiement et suivi sans régression connue",
            ],
          ]}
          caption="Les résultats à distinguer pendant et après une panne"
        />

        <p>
          Un engagement peut porter sur plusieurs de ces étapes, avec des délais
          différents. L’entreprise peut par exemple exiger une prise en charge
          rapide, accepter un fonctionnement manuel provisoire, puis prévoir une
          correction définitive dans un autre délai. Rien de cela n’impose
          quatre heures : les valeurs viennent de l’impact réel et de la
          capacité vérifiée du prestataire.
        </p>

        <InfoBox
          variant="amber"
          title="Le message automatique ne démarre pas une réparation"
        >
          Si le contrat promet une « réponse », demandez si cette réponse peut
          être entièrement automatique. Écrivez plutôt l’action attendue :
          accusé enregistré, intervenant affecté, diagnostic commencé ou
          utilisateur rappelé. Chaque formule produit une protection très
          différente.
        </InfoBox>

        <h2 id="service">
          2. Commencez par le travail que l’application doit permettre
        </h2>

        <p>
          « L’application doit être disponible » est trop vague. Le serveur peut
          répondre alors que la facturation échoue. Google SRE conseille de
          mesurer ce que l’utilisateur peut réellement faire, pas seulement la
          santé de chaque composant technique.
        </p>

        <p>
          Choisissez d’abord trois à cinq parcours qui ont une conséquence
          visible pour l’entreprise :
        </p>

        <ul>
          <li>enregistrer puis confirmer une commande ;</li>
          <li>éditer et envoyer une facture exacte ;</li>
          <li>consulter le dossier nécessaire à une intervention ;</li>
          <li>préparer un ordre de production ;</li>
          <li>permettre au client d’accéder à un document attendu.</li>
        </ul>

        <p>
          Pour chaque parcours, écrivez la preuve qu’une personne non technique
          peut comprendre : « une facture de test est validée, envoyée et
          retrouvée », plutôt que « l’API renvoie 200 ». Les mesures techniques
          restent utiles pour détecter la panne ; la preuve métier arrête le
          chronomètre qui intéresse la direction.
        </p>

        <p>
          Si l’équipe entrante ne sait pas reconstruire, observer et restaurer
          l’application, ne lui demandez pas immédiatement une garantie ferme.
          Prévoyez une reprise. Le guide sur le{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de TMA applicative
          </Link>{" "}
          détaille ce travail préalable et les exclusions.
        </p>

        <h2 id="horaires">
          3. Écrivez quand le chronomètre commence, s’arrête et se met en pause
        </h2>

        <p>
          « Quatre heures ouvrées » ne signifie rien tant que les heures ouvrées
          restent implicites. Un incident déclaré vendredi à 17 h peut être pris
          en charge lundi ou le soir même selon la plage écrite. Indiquez le
          fuseau horaire, les jours fériés, les canaux acceptés et la procédure
          d’escalade.
        </p>

        <GuideTable
          headers={["Question", "À écrire", "Ambiguïté évitée"]}
          rows={[
            [
              "Quand l’engagement s’applique-t-il ?",
              "Jours, heures, fuseau et exceptions",
              "Faux 24/7",
            ],
            [
              "Comment alerter ?",
              "Portail, téléphone ou supervision convenue",
              "E-mail perdu ou canal non surveillé",
            ],
            [
              "Quand le délai démarre-t-il ?",
              "À la réception d’une alerte contenant le minimum prévu",
              "Ticket incomplet ou heure discutée",
            ],
            [
              "Qu’est-ce qui peut le suspendre ?",
              "Attente d’un accès ou d’une décision identifiée",
              "Chronomètre arrêté sans visibilité",
            ],
            [
              "Quand s’arrête-t-il ?",
              "À la preuve du résultat précis",
              "Simple commentaire assimilé à une résolution",
            ],
          ]}
          caption="Les règles du chronomètre contractuel"
        />

        <p>
          La coopération du client doit aussi être réaliste. Si le prestataire a
          besoin d’un accès, d’un exemple de donnée ou d’un interlocuteur
          métier, le contrat nomme qui les fournit et dans quel délai. Cela
          n’autorise pas une pause illimitée : le motif et sa durée doivent être
          traçables.
        </p>

        <h2 id="rto-rpo">4. RTO et RPO répondent à deux pertes différentes</h2>

        <p>
          Le <strong>RTO</strong>, objectif de temps de reprise, traduit la
          durée pendant laquelle la récupération peut se poursuivre avant que
          l’activité soit trop affectée. Le NIST le définit par rapport à
          l’impact sur les missions ou processus de l’organisation. Il ne donne
          aucun seuil prêt à copier.
        </p>

        <p>
          Le <strong>RPO</strong>, objectif de point de reprise, dit jusqu’à
          quel moment les données doivent pouvoir être récupérées après
          l’interruption. Si la restauration ramène la base à 14 h, toutes les
          opérations enregistrées ensuite doivent être reconstituées ou sont
          perdues. Le RPO n’est donc pas seulement « une sauvegarde toutes les
          heures » : la sauvegarde doit exister, être exploitable et permettre
          le point convenu.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <h3 className="m-0 text-base font-bold text-blue-900 dark:text-blue-200">
              RTO : quand faut-il pouvoir reprendre le travail ?
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-blue-800 dark:text-blue-300">
              Partez du moment où une commande, une intervention ou une facture
              manquée produit un effet que l’entreprise n’accepte plus.
            </p>
          </section>
          <section className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <h3 className="m-0 text-base font-bold text-violet-900 dark:text-violet-200">
              RPO : quelles données faut-il retrouver ?
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-violet-800 dark:text-violet-300">
              Demandez combien d’opérations peuvent être ressaisies, depuis
              quelle autre preuve et par qui, puis testez réellement la
              restauration.
            </p>
          </section>
        </div>

        <p>
          Des objectifs courts coûtent généralement davantage parce qu’ils
          peuvent exiger astreinte, redondance, supervision, sauvegardes plus
          fréquentes et exercices. Mais aucune formule universelle ne relie un
          RTO à un prix. Le{" "}
          <Link href="/guides/cout-maintenance-application-metier">
            coût de maintenance d’une application
          </Link>{" "}
          dépend de l’application, de son exploitation et des moyens retenus.
        </p>

        <h2 id="disponibilite">
          5. Un pourcentage de disponibilité ne raconte pas la panne
        </h2>

        <p>
          Un « 99,9 % » paraît précis. Pourtant, il reste inutilisable sans la
          période de calcul, le service couvert, la définition d’un échec, les
          exclusions et les heures comptées. Une moyenne mensuelle peut aussi
          masquer une panne pendant le seul moment où l’entreprise facture.
        </p>

        <p>
          Les SLA publics de fournisseurs cloud montrent la quantité de détails
          nécessaire. Le SLA Google Maps, par exemple, nomme le service couvert,
          une formule de disponibilité mensuelle, les requêtes considérées en
          échec, des exclusions, la procédure de demande et les crédits
          éventuels. Ses valeurs ne doivent pas être copiées dans une TMA ; son
          anatomie montre seulement qu’un pourcentage isolé ne suffit pas.
        </p>

        <p>Pour votre application, demandez :</p>
        <ol>
          <li>quel parcours utilisateur est mesuré ;</li>
          <li>à quelle fréquence la mesure est réalisée ;</li>
          <li>comment une panne partielle est comptée ;</li>
          <li>si les périodes de maintenance sont incluses ;</li>
          <li>quelles dépendances sont exclues ;</li>
          <li>quelle preuve est partagée avec le client ;</li>
          <li>quelle action suit un écart.</li>
        </ol>

        <InfoBox
          variant="blue"
          title="Disponibilité et rapidité de réparation ne sont pas identiques"
        >
          Une application peut connaître peu de pannes mais rester longtemps
          bloquée à chaque incident. Une autre peut subir de courtes
          interruptions souvent rétablies. Suivez séparément le service rendu,
          la prise en charge, le rétablissement et les données.
        </InfoBox>

        <h2 id="dependances">6. Vérifiez qui peut réellement promettre quoi</h2>

        <p>
          L’application dépend souvent d’un hébergeur, d’un service de paiement,
          d’une messagerie, d’un annuaire ou d’un logiciel tiers. Le mainteneur
          peut diagnostiquer, contacter le fournisseur et activer un
          contournement. Il ne peut pas toujours rétablir l’infrastructure d’un
          autre acteur dans un délai qu’il ne contrôle pas.
        </p>

        <p>
          Pour chaque dépendance, écrivez qui possède le compte, qui ouvre le
          ticket, quel contrat s’applique, quelles preuves sont disponibles et
          quel mode dégradé existe. Vérifiez aussi que les engagements du
          fournisseur ne sont pas inférieurs à ceux que vous demandez au
          mainteneur sur un parcours qui en dépend.
        </p>

        <p>
          Google SRE rappelle que des composants apparemment redondants peuvent
          partager des dépendances ou des points de panne. Deux serveurs ne
          prouvent donc pas à eux seuls le niveau de disponibilité. Demandez un
          test de bascule, de sauvegarde et de restauration, pas seulement un
          schéma d’architecture.
        </p>

        <h2 id="niveaux">
          7. Achetez un niveau de service proportionné au travail à protéger
        </h2>

        <p>
          Tous les parcours n’ont pas besoin d’une astreinte permanente. Pour
          une application utilisée du lundi au vendredi, un support en heures
          ouvrées avec procédure manuelle peut être plus rationnel. Pour une
          activité continue, la plage et les moyens devront être renforcés.
        </p>

        <GuideTable
          headers={[
            "Situation",
            "Réponse possible",
            "À vérifier avant de signer",
          ]}
          rows={[
            [
              "Application utile mais contournable",
              "Heures ouvrées, prise en charge claire et procédure manuelle",
              "Temps réellement supportable et responsable du contournement",
            ],
            [
              "Activité sur une plage étendue",
              "Couverture alignée sur les heures d’exploitation et escalade",
              "Intervenants disponibles, accès et fournisseurs couverts",
            ],
            [
              "Interruption rapidement critique",
              "Moyens de continuité, supervision, sauvegarde et exercices renforcés",
              "RTO/RPO issus d’une analyse métier et capacité techniquement prouvée",
            ],
          ]}
          caption="Trois réponses possibles sans imposer de seuil universel"
        />

        <p>
          Le mauvais achat consiste à commander un délai prestigieux pour toute
          l’application sans savoir quel travail il protège. Le bon achat
          concentre les moyens sur les parcours dont l’arrêt produit un vrai
          dommage, puis garde une réponse plus simple pour le reste.
        </p>

        <h2 id="tester">
          8. Testez le texte sur trois incidents avant de négocier les chiffres
        </h2>

        <p>
          Rejouez une panne complète, une corruption ou perte de données et une
          indisponibilité d’un fournisseur tiers. Pour chaque événement,
          demandez à un dirigeant, à un utilisateur et au mainteneur de répondre
          aux mêmes questions. Si leurs réponses divergent, le SLA n’est pas
          encore assez clair.
        </p>

        <InfoBox
          variant="emerald"
          title="La fiche à compléter sur un seul parcours"
        >
          <ul className="m-0 space-y-2 pl-5">
            <li>travail à maintenir et preuve qu’il fonctionne ;</li>
            <li>heures où ce travail est nécessaire ;</li>
            <li>personne et canal qui déclenchent l’alerte ;</li>
            <li>action attendue après réception ;</li>
            <li>fonctionnement provisoire acceptable ;</li>
            <li>durée d’arrêt tolérable et raison métier ;</li>
            <li>point de données à récupérer et méthode de contrôle ;</li>
            <li>dépendances, pauses, escalade et conséquence d’un écart.</li>
          </ul>
        </InfoBox>

        <p>
          Cette fiche ne remplace pas une rédaction juridique. Elle permet
          d’abord de vérifier que l’engagement promis correspond au besoin et
          qu’il peut être mesuré. Faites ensuite relire les clauses, exclusions,
          responsabilités et recours par le conseil approprié.
        </p>

        <GuideInlineCTA
          title="Vérifier ce que votre contrat promet en cas de panne"
          description="Partez d’un incident concret : quel travail s’arrête, à quelles heures, quel contournement existe et quelles données doivent revenir. Nous vérifierons si les délais envisagés sont mesurables et techniquement réalistes avant la rédaction juridique."
          tags={[
            "Panne rejouée",
            "RTO et RPO expliqués",
            "Horaires écrits noir sur blanc",
          ]}
          ctaLabel="Rejouer une panne"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources et limites</h2>

        <ul>
          <li>
            <a
              href="https://sre.google/workbook/implementing-slos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google SRE Workbook — Implementing SLOs
            </a>{" "}
            : distinction entre objectifs de fiabilité, indicateurs centrés
            utilisateur et SLA.
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/glossary/term/Recovery_Time_Objective"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIST — Recovery Time Objective
            </a>{" "}
            et{" "}
            <a
              href="https://csrc.nist.gov/glossary/term/recovery_point_objective"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recovery Point Objective
            </a>
            , avec renvoi à la publication SP 800-34 Rev. 1.
          </li>
          <li>
            <a
              href="https://cloud.google.com/maps-platform/terms/sla"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps Platform SLA
            </a>{" "}
            : exemple officiel d’un engagement qui définit service, mesure,
            exclusions, demande et conséquence.
          </li>
        </ul>

        <p>
          Ce guide donne un cadre général de décision, pas un conseil juridique
          ni un niveau de service recommandé. Le contrat doit être adapté au
          droit applicable, aux responsabilités, à l’architecture et aux moyens
          réellement disponibles. Aucun RTO, RPO, délai ou pourcentage ne
          convient à toutes les entreprises.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
