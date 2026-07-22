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

const guide = getGuide("choisir-prestataire-application-metier");

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
        alt: "Choisir un prestataire d’application métier avec des engagements comparables",
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
      name: "Choisir un prestataire d’application métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Faut-il préférer une agence ou un freelance ?",
    answer:
      "Aucun statut n’est supérieur par principe. Comparez les personnes réellement affectées au projet, leur disponibilité, les compétences couvertes, la continuité en cas d’absence et la manière dont l’outil sera maintenu. Une petite agence peut dépendre d’une seule personne ; un freelance peut travailler avec un réseau solide. Demandez des faits, pas une étiquette.",
  },
  {
    question: "Combien de prestataires faut-il rencontrer ?",
    answer:
      "Il n’existe pas de nombre idéal. Recommandation Hagnéré Code : commencez par deux interlocuteurs capables de répondre au même besoin, puis élargissez seulement si leurs réponses ne permettent pas de comprendre les options. Le but n’est pas d’accumuler des devis fondés sur des travaux différents.",
  },
  {
    question: "Dois-je demander un prototype gratuit ?",
    answer:
      "Pas par défaut. Demandez une reformulation, des hypothèses, une première version et des traces de méthode. Si une maquette ou un prototype est nécessaire pour lever un doute important, traitez-le comme une courte mission définie et rémunérée, dont votre entreprise récupère le résultat.",
  },
  {
    question:
      "Comment comparer deux devis dont les prix sont très différents ?",
    answer:
      "Revenez au même cas métier et isolez ce que chaque prix contient : préparation, écrans, reprise de données, connexions, tests, mise en ligne, correction des anomalies, hébergement, licences, maintenance et sortie. L’écart devient interprétable lorsque les hypothèses et exclusions sont visibles.",
  },
  {
    question: "Quelles références faut-il appeler ?",
    answer:
      "Choisissez une référence comparable par type de difficulté, pas seulement par secteur : plusieurs rôles, reprise de données, connexion à un logiciel, usage quotidien ou maintenance. Demandez ce qui a changé pendant le projet, comment les désaccords ont été traités et qui maintient encore l’outil.",
  },
  {
    question: "Que faut-il vérifier sur le code et les données ?",
    answer:
      "Précisez les droits réellement consentis, le dépôt remis, les composants tiers, les comptes d’hébergement, les formats d’export, la documentation et la procédure de reprise. Le paiement d’une facture ne répond pas automatiquement à toutes ces questions.",
  },
  {
    question: "Une assurance professionnelle garantit-elle le projet ?",
    answer:
      "Non. Une attestation peut répondre à une exigence contractuelle précise ; elle ne prouve ni la compréhension du métier, ni la qualité du code, ni le respect futur du budget. Vérifiez sa validité et ce qu’elle couvre si elle est exigée, sans en faire une note de compétence.",
  },
  {
    question: "Que faire si aucun devis n’est vraiment comparable ?",
    answer:
      "Ne choisissez pas au hasard. Envoyez les mêmes questions ou financez une courte mission préparatoire qui produit une première version, des scénarios d’acceptation et une grille de réponse commune. Reporter la décision peut coûter moins cher qu’un forfait fondé sur des malentendus.",
  },
  {
    question:
      "Puis-je commencer par une petite mission avant le développement ?",
    answer:
      "Oui, si elle réduit une incertitude clairement nommée et produit quelque chose que l’entreprise récupère : parcours, maquette, inventaire de données, essai technique, risques et chiffrage révisé. Elle ne doit pas devenir un engagement automatique sur tout le projet.",
  },
];

type DecisionCardProps = {
  title: string;
  prompt: string;
  useful: string;
  warning: string;
  trace: string;
};

function DecisionCard({
  title,
  prompt,
  useful,
  warning,
  trace,
}: DecisionCardProps) {
  return (
    <div className="not-prose my-5 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
      <h3 className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <strong>Question à poser :</strong> {prompt}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest">
            Réponse utile
          </p>
          <p className="mb-0 text-sm leading-relaxed">{useful}</p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest">
            À faire préciser
          </p>
          <p className="mb-0 text-sm leading-relaxed">{warning}</p>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest">
          Trace à obtenir
        </p>
        <p className="mb-0 text-sm leading-relaxed">{trace}</p>
      </div>
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
          { label: "Choisir un prestataire d’application métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Faites travailler chaque candidat sur le même cas, réclamez les mêmes engagements écrits et résumez votre décision en six phrases. Vous comparerez enfin autre chose que des prix impossibles à rapprocher."
        heroAction={{
          href: "#mini-cas",
          label: "Voir l’entretien type",
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
            title: "Un cas identique pour tous",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Six engagements écrits",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Aucun score magique",
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
            href: "/guides/cahier-des-charges-application-metier",
            label: "Préparer le besoin envoyé aux prestataires",
          },
          {
            href: "/guides/agence-web-ou-freelance",
            label: "Comparer agence et freelance sans caricature",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Comprendre le budget d’un logiciel sur mesure",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Préparer la maintenance après la mise en ligne",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Préparer la reprise d’un outil existant",
          },
        ]}
        faqTitle="Choisir un prestataire : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous avez reçu plusieurs propositions pour votre application métier.
          L’une paraît détaillée, l’autre rassurante, une troisième beaucoup
          moins chère. Pourtant, vous ne savez pas si elles décrivent le même
          outil, les mêmes tests ni le même accompagnement après la mise en
          ligne.
        </p>
        <p>
          Une application métier est un logiciel utilisé par votre équipe pour
          gérer un travail précis : commandes, stock, interventions, dossiers ou
          facturation. Pour choisir son développeur, ne demandez pas à chaque
          candidat de réciter sa méthode.
        </p>
        <p>
          Donnez-leur le même cas représentatif de votre activité, avec des
          données fictives. Posez les mêmes questions et notez les traces qu’ils
          s’engagent à produire. Le meilleur interlocuteur n’est pas celui qui
          emploie le plus de mots techniques : c’est celui qui comprend votre
          travail, rend ses hypothèses visibles et explique comment vous
          vérifierez l’outil avant d’accepter définitivement la livraison,
          l’utiliserez au quotidien et récupérerez code, données et comptes si
          vous changez d’équipe. Ce guide vous donne l’entretien et la fiche de
          décision.
        </p>

        <GuideToc
          items={[
            { id: "avant", label: "1. Vérifier que vous pouvez choisir" },
            { id: "mini-cas", label: "2. Donner le même cas à tous" },
            { id: "entretien", label: "3. Conduire l’entretien" },
            { id: "preuves", label: "4. Obtenir six engagements écrits" },
            { id: "prix", label: "5. Comparer les prix" },
            {
              id: "verification",
              label: "6. Vérifier sans se rassurer à tort",
            },
            { id: "apres", label: "7. Regarder l’après-lancement" },
            { id: "decision", label: "8. Écrire la décision" },
          ]}
        />

        <h2 id="avant">
          1. Avant les entretiens, vérifiez que le besoin est clair
        </h2>
        <p>
          Un prestataire ne peut pas décider à votre place ce que l’outil doit
          résoudre. Vous devez au minimum savoir qui l’utilisera, quelle tâche
          doit changer, quel premier résultat sera livré et quelles contraintes
          sont certaines. Si chaque candidat reçoit une histoire différente, les
          écarts de prix ne disent rien sur leur qualité.
        </p>
        <p>
          Le{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’une application métier
          </Link>{" "}
          vous aide à raconter les parcours, exceptions, données et tests. Il
          n’a pas besoin de décider chaque écran. Il doit simplement empêcher
          qu’un prestataire chiffre une saisie manuelle tandis qu’un autre
          imagine une automatisation complète.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-3">
          {[
            [
              "Vous pouvez demander des devis",
              "Le problème, l’utilisateur, le premier parcours et les contraintes certaines tiennent en quelques pages.",
            ],
            [
              "Vous devez faire préciser",
              "Les candidats reformulent le même résultat, mais certaines données, connexions ou responsabilités restent inconnues.",
            ],
            [
              "Décrivez encore le besoin",
              "Les interlocuteurs ne comprennent pas la même priorité, ou personne dans l’entreprise ne peut accepter le résultat.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          La{" "}
          <a
            href="https://www.economie.gouv.fr/dae/le-sourcage-operationnel-ledition-2025-du-guide-publie-par-la-direction-des-achats-de-letat-est-desormais-disponible"
            target="_blank"
            rel="noopener noreferrer"
          >
            Direction des achats de l’État
          </a>{" "}
          explique comment mieux connaître les solutions proposées avant de
          consulter des fournisseurs. Son cadre concerne l’achat public ; le
          principe reste utile dans une entreprise privée : écouter plusieurs
          prestataires peut révéler des réponses différentes, sans promettre le
          projet à l’un d’eux ni lui faire tout concevoir gratuitement.
        </p>

        <h2 id="mini-cas">2. Donnez à tous la même commande à traiter</h2>
        <InfoBox variant="blue" title="Exemple entièrement fictif">
          La PME Atelier Mercure, ses règles, ses volumes et ses personnages
          sont inventés. Ils ne représentent ni un client ni un projet réalisé
          par Hagnéré Code. L’exemple sert uniquement à montrer un entretien
          comparable.
        </InfoBox>
        <p>
          Atelier Mercure vend du matériel professionnel. Une commande arrive
          par téléphone ou courriel. Avant de la valider, l’équipe doit vérifier
          le stock disponible et la limite de crédit accordée au client. Si l’un
          des deux contrôles bloque, la commande ne disparaît pas : elle passe
          dans un état à examiner par une personne autorisée, qui voit la cause
          et laisse une trace de sa décision.
        </p>
        <p>
          Remettez ce récit, des données entièrement fictives mais
          représentatives et les mêmes volumes à tous les candidats. Ne
          transmettez aucune fiche client réelle à ce stade. La CNIL rappelle
          qu’il faut{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            limiter les données à ce qui est nécessaire
          </a>
          . Demandez ensuite aux candidats de raisonner à voix haute. Vous
          n’attendez ni écran fini ni conseil gratuit exhaustif : vous observez
          comment chacun transforme une situation métier en questions, choix,
          erreurs et traces vérifiables.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100 sm:p-6">
          <p className="mb-3 text-lg font-bold">
            La fiche identique remise avant l’entretien
          </p>
          <ul className="m-0 grid gap-2 pl-5 text-sm leading-relaxed sm:grid-cols-2">
            <li>12 utilisateurs sur deux sites ;</li>
            <li>environ 80 commandes par jour ouvré ;</li>
            <li>
              catalogue et stock fournis chaque nuit par le logiciel actuel ;
            </li>
            <li>limite de crédit modifiable uniquement par la direction ;</li>
            <li>aucune commande validée si un contrôle reste inconnu ;</li>
            <li>historique de la décision conservé avec auteur et date ;</li>
            <li>usage sur navigateur d’ordinateur et tablette ;</li>
            <li>première version sans application mobile ni vente en ligne.</li>
          </ul>
        </div>
        <p>
          Ces valeurs fictives changent le chiffrage. Un import annuel ne
          demande pas le même travail qu’un échange chaque nuit. Douze
          utilisateurs n’imposent pas la même organisation que plusieurs
          milliers. Un bon candidat peut contester une hypothèse ; il doit alors
          expliquer son effet et conserver une base commune pour la proposition.
        </p>

        <h2 id="entretien">3. Menez le même entretien avec chaque candidat</h2>
        <p>
          Prévoyez une heure. C’est une recommandation Hagnéré Code, pas une
          norme. Ce temps permet de présenter le contexte, travailler sur le
          cas, parler de l’après-lancement et laisser le candidat poser ses
          questions. Envoyez le dossier avant l’échange : un entretien ne doit
          pas servir à découvrir vingt pages en direct.
        </p>
        <ol>
          <li>
            <strong>10 minutes pour le métier :</strong> l’utilisateur raconte
            la commande et les erreurs fréquentes, sans être corrigé par le
            dirigeant.
          </li>
          <li>
            <strong>20 minutes sur le mini-cas :</strong> le candidat reformule,
            questionne les exceptions et propose un premier résultat vérifiable.
          </li>
          <li>
            <strong>15 minutes sur la livraison :</strong> données, tests, mise
            en ligne, accès, documentation et responsabilités.
          </li>
          <li>
            <strong>10 minutes sur la suite :</strong> incidents, corrections,
            évolution, absence d’une personne et changement éventuel d’équipe.
          </li>
          <li>
            <strong>5 minutes pour les inconnues :</strong> chacun nomme ce qui
            pourrait encore modifier le prix ou le calendrier.
          </li>
        </ol>
        <p>
          Invitez la personne qui réalise réellement le travail au quotidien et
          celle qui prendra la décision. Si le candidat prévoit de confier
          l’analyse ou le développement à d’autres personnes, demandez qui sera
          présent après la signature. Vous choisissez une équipe réelle, pas
          uniquement le commercial qui conduit le rendez-vous.
        </p>

        <h2 id="preuves">
          4. Obtenez six engagements que vous pourrez vérifier
        </h2>
        <DecisionCard
          title="1. Il a compris le problème"
          prompt="Pouvez-vous reformuler la commande, les deux contrôles et la décision humaine sans parler de technologie ?"
          useful="Le candidat nomme l’utilisateur, la cause du blocage, la personne autorisée et la trace attendue. Il distingue ce qu’il sait de ce qu’il suppose."
          warning="« Nous ferons un workflow moderne » ou une démonstration d’outil avant d’avoir reformulé le travail."
          trace="Une reformulation écrite du problème, des utilisateurs, des règles et des questions encore ouvertes."
        />
        <DecisionCard
          title="2. Il sait réduire la première version"
          prompt="Qu’est-ce qui doit fonctionner au premier lancement, et que laisseriez-vous volontairement hors de cette première version ?"
          useful="Le parcours commande → contrôle → décision → trace reste complet. Les fonctions différées sont nommées avec leur conséquence."
          warning="Une liste d’écrans ou une réduction qui supprime le cas difficile et ne teste plus la valeur du produit."
          trace="Une liste datée de ce qui est inclus, exclu ou proposé en option dans la première version."
        />
        <DecisionCard
          title="3. Il sait dire comment vous accepterez le résultat"
          prompt="Quel scénario nous permettra d’accepter ou de refuser la livraison ?"
          useful="Des comptes et données de test connus, une situation de départ, une action, un résultat observable et une personne qui accepte."
          warning="« Vous verrez en production », une démonstration préparée sans vos règles ou des tests décrits comme un supplément facultatif."
          trace="Les scénarios d’acceptation, les traces remises, le responsable de validation et la règle appliquée aux anomalies."
        />
        <DecisionCard
          title="4. Il rend les dépendances visibles"
          prompt="De quoi avez-vous besoin de notre part et quels services extérieurs feront fonctionner l’outil ?"
          useful="Accès, données, décisions, responsables, licences, hébergement et coûts récurrents sont listés avec une date et un propriétaire."
          warning="Un forfait « tout compris » qui ne précise ni les comptes, ni les abonnements, ni les blocages causés par l’entreprise."
          trace="La liste des comptes, services, coûts récurrents, accès et décisions attendues de chaque partie."
        />
        <DecisionCard
          title="5. Il décrit l’après-lancement"
          prompt="Que se passe-t-il le lendemain si une commande reste bloquée ou si l’échange de stock échoue ?"
          useful="Moyen de contact, personne joignable en urgence ou non, niveaux de gravité, diagnostic, correction, suivi et limites du contrat sont distingués."
          warning="« Support inclus » sans horaire, confirmation de réception, travail couvert ni différence entre anomalie et évolution."
          trace="Les conditions des premières semaines et du support : personnes, horaires, gravités, délais visés, inclusions et exclusions."
        />
        <DecisionCard
          title="6. Il prépare une autre équipe à reprendre"
          prompt="Si nous changeons de prestataire, que récupérons-nous et comment la nouvelle équipe remet-elle l’outil en service ?"
          useful="Dépôt, historique, documentation, données, comptes, nouvelles clés d’accès, procédures et licences sont inventoriés et testables."
          warning="Une archive de code présentée comme reprise complète, ou des comptes importants détenus uniquement par une personne extérieure."
          trace="Un inventaire contractuel de reprise avec propriétaire de chaque compte, format des données et procédure de remise en service."
        />

        <h2 id="prix">
          5. Comparez les prix une fois le travail rendu comparable
        </h2>
        <p>
          Un prix bas peut être cohérent si le candidat réduit honnêtement la
          première version, réutilise un logiciel existant ou demande davantage
          de travail à votre équipe. Un prix élevé peut couvrir une reprise de
          données, des tests et un accompagnement réellement nécessaires — ou
          simplement un autre travail. Le montant ne révèle pas à lui seul la
          qualité.
        </p>
        <p>
          Demandez une réponse qui sépare réalisation initiale, services tiers,
          mise en production, premières semaines de correction, maintenance
          récurrente et évolutions optionnelles. Le guide sur le{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            prix d’un logiciel sur mesure
          </Link>{" "}
          aide à lire ces familles sans inventer une fourchette universelle.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <p className="mb-3 font-bold text-zinc-950 dark:text-white">
            Faites expliquer chaque écart
          </p>
          <ul className="m-0 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li>fonction incluse par l’un et exclue par l’autre ;</li>
            <li>
              hypothèse de volume, de données ou de connexion différente ;
            </li>
            <li>travail confié à votre équipe plutôt qu’au prestataire ;</li>
            <li>trace de test, documentation ou reprise absente ;</li>
            <li>technologie ou abonnement tiers avec un coût récurrent ;</li>
            <li>risque identifié, chiffré en option ou laissé ouvert.</li>
          </ul>
        </div>
        <p>
          N’additionnez pas automatiquement des notes sur le prix, les
          références et le relationnel. Une moyenne peut masquer un défaut
          bloquant : aucun responsable métier, données non récupérables ou
          impossibilité de maintenir l’outil. Commencez par les conditions
          indispensables, puis argumentez le compromis entre les réponses qui
          les respectent.
        </p>

        <h2 id="verification">
          6. Vérifiez l’entreprise, les références et les engagements
        </h2>
        <p>
          L’existence légale d’une entreprise et certaines informations de son
          registre peuvent être consultées via le{" "}
          <a
            href="https://entreprendre.service-public.fr/vosdroits/R19859"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registre national des entreprises
          </a>
          . Ce contrôle confirme une identité ; il ne prouve ni la compétence,
          ni la solidité future, ni la qualité de votre projet. Appliquez la
          même prudence aux assurances, certifications, logos de partenaires et
          années d’expérience.
        </p>
        <p>
          Pour une référence, ne demandez pas seulement « êtes-vous satisfait ?
          ». Demandez ce qui a changé entre le devis et la livraison, comment
          les retards ou désaccords ont été rendus visibles, qui utilise encore
          l’outil et qui intervient aujourd’hui lorsqu’il tombe en panne. Une
          réponse imparfaite mais précise apprend davantage qu’un témoignage
          sans contexte.
        </p>
        <p>
          Si le projet contient des données personnelles, clarifiez qui décide
          des finalités et qui traite les données pour son compte. La{" "}
          <a
            href="https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL explique comment identifier les rôles
          </a>{" "}
          et rappelle que le contrat doit correspondre aux rôles réels. Cette
          qualification ne se déduit pas du seul mot « développeur » et mérite
          un avis adapté si la situation est sensible.
        </p>
        <p>
          Pour le code, ne vous contentez pas de « vous serez propriétaire ». L’{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3 du Code de la propriété intellectuelle
          </a>{" "}
          prévoit notamment que les droits cédés soient définis et leur
          périmètre délimité. Faites préciser la licence ou la cession, les
          composants tiers, les créations antérieures et les éléments remis. Un
          conseil juridique reste nécessaire pour sécuriser une clause
          importante ; ce guide ne la remplace pas.
        </p>

        <h2 id="apres">
          7. Choisissez aussi la personne qui restera après la mise en ligne
        </h2>
        <p>
          Une application métier devient une partie du travail quotidien. La
          décision doit donc couvrir plus que sa fabrication. Demandez qui
          reçoit les demandes, qui peut accéder aux données, comment une
          anomalie est distinguée d’une nouvelle fonction et ce qui arrive si la
          personne principale est absente.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Le premier mois",
              "Surveillance, corrections des anomalies acceptées, formation, transfert des accès et critères de fin des premières semaines.",
            ],
            [
              "La maintenance",
              "Moyen de contact, horaires, gravité, confirmation de réception, diagnostic, correction, mises à jour et éléments explicitement exclus.",
            ],
            [
              "Les évolutions",
              "Demande, estimation, décision, test et déploiement séparés de la correction d’un résultat déjà accepté.",
            ],
            [
              "La sortie",
              "Code, données, comptes, documentation et assistance de reprise avec coût, délai et conditions annoncés.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="mb-2 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Le guide{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            reprendre une application métier existante
          </Link>{" "}
          montre pourquoi un dépôt de code ne suffit pas : données, fichiers,
          comptes, secrets, domaines, sauvegardes et procédures font aussi
          fonctionner le service. Les préparer dès le contrat ne signifie pas
          que vous prévoyez un conflit ; cela protège la continuité normale de
          l’entreprise.
        </p>

        <h2 id="decision">8. Écrivez votre décision en six phrases</h2>
        <p>
          Juste après chaque entretien, complétez cette fiche avec les personnes
          présentes. N’attendez pas d’avoir oublié les hésitations ou transformé
          une promesse orale en engagement certain.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <p className="mb-3 font-bold text-zinc-950 dark:text-white">
            L’en-tête factuel, avant toute impression
          </p>
          <ul className="m-0 grid gap-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li>entreprise candidate et personnes réellement affectées ;</li>
            <li>référence, version et date de la proposition ;</li>
            <li>prix initial hors taxes et conditions de paiement ;</li>
            <li>coûts récurrents, options et éléments exclus ;</li>
            <li>calendrier proposé et points de validation ;</li>
            <li>travail, accès et décisions attendus de votre équipe.</li>
          </ul>
        </div>
        <div className="not-prose my-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-950 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-100 sm:p-6">
          <ol className="m-0 space-y-4 pl-5 text-sm leading-relaxed">
            <li>
              <strong>Il a compris que…</strong> décrivez le problème,
              l’utilisateur et le résultat dans vos propres mots.
            </li>
            <li>
              <strong>Il suppose encore que…</strong> notez chaque inconnue qui
              peut modifier le prix, le délai ou le risque.
            </li>
            <li>
              <strong>La première version permettrait de…</strong> écrivez le
              parcours complet, pas la liste des écrans.
            </li>
            <li>
              <strong>Nous accepterions le résultat en…</strong> nommez les
              données, le scénario, la trace et la personne qui signe.
            </li>
            <li>
              <strong>Après la mise en ligne, il prend en charge…</strong>
              séparez premières semaines, maintenance et évolutions.
            </li>
            <li>
              <strong>Si nous changeons d’équipe, nous récupérons…</strong>
              listez code, droits, comptes, données, documentation et aide.
            </li>
          </ol>
        </div>
        <p>
          Ajoutez enfin la raison de la décision : choisir ce candidat, demander
          une précision identique à tous ou ne retenir personne pour le moment.
          Une décision prudente peut être de financer une courte préparation, de
          réduire la première version ou d’utiliser un logiciel existant. Elle
          n’est pas moins professionnelle parce qu’elle évite de signer.
        </p>
        <InfoBox
          variant="amber"
          title="Les signaux d’alerte ne sont pas un verdict automatique"
        >
          Jargon sans reformulation, hypothèses cachées, urgence artificielle,
          accès détenus uniquement par le prestataire ou tests reportés après la
          mise en ligne justifient une clarification. Ils ne prouvent pas à eux
          seuls une mauvaise intention. Demandez une réponse écrite ; jugez
          ensuite le risque concret pour votre entreprise.
        </InfoBox>
        <p>
          Cette méthode est pertinente si vous comparez un besoin réel et des
          propositions identifiées pour un{" "}
          <Link href="/services/outils-internes-sur-mesure">
            outil interne sur mesure
          </Link>
          . Elle n’est pas adaptée à un palmarès de prestataires, une
          négociation juridique, une certification ou un audit de sécurité, ni à
          la demande d’un prix garanti sans besoin défini.
        </p>
        <GuideInlineCTA
          title="Faire relire le besoin et les propositions reçues"
          description="Partagez le cas métier, les hypothèses communes et les réponses qui restent difficiles à comparer. Quentin Hagnéré relit votre demande et distingue les écarts de périmètre, les inconnues et les engagements écrits. La conclusion peut être de préciser le besoin ou de reporter le développement ; vous restez libre de ne lancer aucune prestation."
          tags={[
            "Même cas métier",
            "Documents comparables",
            "Décision argumentée",
          ]}
          ctaLabel="Demander une relecture de mes propositions"
          ctaHref="/demarrer-un-projet"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
