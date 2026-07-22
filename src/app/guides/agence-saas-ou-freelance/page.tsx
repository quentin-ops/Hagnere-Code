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

const guide = getGuide("agence-saas-ou-freelance");

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
        alt: "Les responsabilités d’un SaaS réparties entre le client, un freelance et une agence",
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
      name: "Agence SaaS ou freelance",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu’est-ce qu’un SaaS ?",
    answer:
      "Un SaaS est un logiciel accessible à distance et fourni comme un service. Dans ce guide, nous parlons plus précisément d’un produit destiné à être vendu à plusieurs clients. Il faut donc prévoir les comptes, les données, l’aide, les mises à jour et la continuité du service, pas seulement les écrans.",
  },
  {
    question: "Vaut-il mieux une agence ou un freelance pour créer un SaaS ?",
    answer:
      "Aucun statut n’est meilleur dans tous les cas. Un freelance expérimenté peut convenir si la première étape est limitée, si une personne dans votre entreprise décide quelles fonctions construire et si un remplaçant peut récupérer le travail. Une agence devient utile lorsqu’il faut coordonner dès maintenant la conception des écrans, le développement, les paiements, les tests ou l’assistance aux clients.",
  },
  {
    question: "Un seul freelance peut-il développer tout le SaaS ?",
    answer:
      "Parfois, surtout pour une première version ciblée. Vérifiez cependant qui traite la compréhension du besoin, l’expérience utilisateur, les tests, la mise en ligne, la sécurité adaptée au risque et les incidents. Une même personne peut cumuler plusieurs rôles, mais aucun rôle important ne doit rester implicite.",
  },
  {
    question:
      "Une agence garantit-elle qu’une autre personne pourra reprendre ?",
    answer:
      "Non. Une agence peut disposer de plusieurs personnes sans qu’elles connaissent votre produit. Demandez le nom de l’intervenant principal, le relais prévu, les traces conservées et la façon dont une nouvelle personne reprendrait une version ou un incident concret.",
  },
  {
    question: "Comment comparer les prix d’une agence et d’un freelance ?",
    answer:
      "Faites chiffrer la même prochaine étape et les mêmes responsabilités. Pour chaque travail, notez s’il est inclus dans le devis, payé à un autre fournisseur, réalisé par votre équipe ou encore à confirmer. Vous éviterez de compter deux fois un poste et verrez ce que l’offre reporte réellement sur votre entreprise.",
  },
  {
    question: "Qui doit posséder le code et les comptes du SaaS ?",
    answer:
      "Le contrat doit décrire précisément les droits sur le code créé, les composants existants et les licences. Lorsque les services le permettent, gardez au nom ou sous l’administration de votre entreprise les comptes structurants : domaine, dépôt de code, hébergement, paiement et messagerie. Faites relire les clauses sensibles par un professionnel compétent.",
  },
  {
    question: "Faut-il une personne responsable du produit côté client ?",
    answer:
      "Oui. Quelqu’un dans votre entreprise doit pouvoir expliquer le problème, arbitrer une priorité, accepter un compromis et valider le résultat. Le prestataire peut conseiller, mais il ne doit pas inventer seul le marché, les règles commerciales et les décisions qui engagent votre entreprise.",
  },
  {
    question: "Quand faut-il reporter le développement du SaaS ?",
    answer:
      "Reportez si le problème n’a pas été vérifié auprès d’utilisateurs plausibles, si personne ne peut prendre les décisions côté client, si le mode de vente reste inconnu ou si les données nécessaires ne peuvent pas être utilisées proprement. Quelques entretiens ou un essai limité peuvent alors être plus utiles qu’une équipe de développement complète.",
  },
];

type PhaseCardProps = {
  title: string;
  situation: string;
  minimum: string;
};

function PhaseCard({ title, situation, minimum }: PhaseCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {situation}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-violet-800 dark:text-violet-300">
        <strong>À couvrir maintenant :</strong> {minimum}
      </p>
    </div>
  );
}

type ResponsibilityCardProps = {
  title: string;
  decision: string;
  owner: string;
  proof: string;
};

function ResponsibilityCard({
  title,
  decision,
  owner,
  proof,
}: ResponsibilityCardProps) {
  return (
    <section className="not-prose my-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <h3 className="mb-4 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-4 dark:bg-zinc-950">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-zinc-500">
            Décision à prendre
          </p>
          <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {decision}
          </p>
        </div>
        <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            Responsable et relais
          </p>
          <p className="mb-0 text-sm leading-relaxed text-blue-950 dark:text-blue-100">
            {owner}
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
            Ce que votre entreprise doit garder
          </p>
          <p className="mb-0 text-sm leading-relaxed text-emerald-950 dark:text-emerald-100">
            {proof}
          </p>
        </div>
      </div>
    </section>
  );
}

function ScenarioCard({
  title,
  request,
  listen,
}: {
  title: string;
  request: string;
  listen: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="mb-3 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <strong>Demandez :</strong> {request}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-amber-800 dark:text-amber-300">
        <strong>Écoutez :</strong> {listen}
      </p>
    </div>
  );
}

function VerdictCard({
  title,
  choose,
  avoid,
}: {
  title: string;
  choose: string;
  avoid: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {choose}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-red-800 dark:text-red-300">
        <strong>Ne choisissez pas cette voie si :</strong> {avoid}
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
          { label: "Agence SaaS ou freelance" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous hésitez entre une agence et un freelance pour créer ou faire évoluer votre SaaS ? Comparez ce que chacun prendra réellement en charge avant de comparer les prix."
        heroAction={{
          href: "#phases",
          label: "Identifier l’équipe nécessaire",
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
            title: "La prochaine étape d’abord",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Les personnes réellement nommées",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Le coût et le relais prévu",
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
            href: "/guides/valider-idee-saas-avant-developper",
            label: "Valider le problème avant de développer",
          },
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Définir la première version du SaaS",
          },
          {
            href: "/guides/agence-web-ou-freelance",
            label: "Comparer agence et freelance en général",
          },
          {
            href: "/guides/choisir-prestataire-application-metier",
            label: "Préparer l’entretien avec un prestataire",
          },
          {
            href: "/guides/reprendre-saas-developpe-par-freelance",
            label: "Préparer une reprise future",
          },
        ]}
        faqTitle="Agence SaaS ou freelance : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous cherchez quelqu’un pour construire votre SaaS, le mettre en ligne
          et continuer à le faire fonctionner quand les premiers clients
          arriveront. Un freelance vous propose une relation directe. Une agence
          présente une équipe et une méthode. Comment savoir qui saura publier
          les nouvelles versions, aider les clients et réagir si le service se
          bloque ? C’est cette question, propre à un SaaS exploité dans la
          durée, que ce guide vous aide à trancher.
        </p>
        <p>
          Un SaaS est un logiciel accessible à distance et fourni comme un
          service. Ici, nous parlons plus précisément d’un produit destiné à
          être vendu à plusieurs clients, souvent par abonnement. Il ne s’arrête
          pas à sa mise en ligne : des clients se connectent, confient des
          données, demandent de l’aide et attendent que le service continue
          après chaque mise à jour.
        </p>
        <p>
          <strong>Il n’existe pas de vainqueur général.</strong> Un freelance
          expérimenté peut convenir si la première étape est limitée, si une
          personne dans votre entreprise décide quelles fonctions construire et
          si un remplaçant peut récupérer le travail. Une agence devient utile
          lorsqu’il faut coordonner dès maintenant, par exemple, la conception
          des écrans, le développement, les paiements, les tests et l’assistance
          aux clients. Vous pouvez aussi confier le travail principal à un
          freelance et appeler un spécialiste seulement lorsqu’il devient utile.
          Et si le problème ou le responsable côté client n’est pas prêt,
          reporter reste une décision sérieuse.
        </p>
        <p>
          Si vous cherchez surtout à comparer les tarifs journaliers et les
          différences générales entre ces deux types de prestataires, consultez
          le comparatif{" "}
          <Link href="/guides/agence-web-ou-freelance">
            agence web ou freelance
          </Link>
          . Cette page reste centrée sur les responsabilités particulières d’un
          SaaS : plusieurs clients, des données en production, des versions à
          publier, de l’assistance et des incidents à traiter.
        </p>

        <GuideToc
          items={[
            { id: "phases", label: "1. Partir de la prochaine étape" },
            { id: "responsabilites", label: "2. Nommer les responsabilités" },
            { id: "personnes", label: "3. Regarder les personnes" },
            {
              id: "exercices",
              label: "4. Tester un changement et un incident",
            },
            { id: "cout", label: "5. Comparer le coût de la même étape" },
            {
              id: "actifs",
              label: "6. Garder le code, les comptes et les données",
            },
            { id: "verdict", label: "7. Choisir l’organisation adaptée" },
            { id: "brief", label: "8. Envoyer le même brief" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="phases">1. Commencez par la prochaine étape de votre SaaS</h2>
        <p>
          Ne commandez pas « une équipe pour tout le SaaS ». Nommez ce qui doit
          être vrai à la prochaine décision. Une idée encore incertaine, une
          première version vendable et un service déjà utilisé n’exigent pas la
          même équipe ni la même organisation.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <PhaseCard
            title="Vérifier le problème"
            situation="Vous avez une idée et quelques contacts, mais personne n’a encore essayé une réponse crédible."
            minimum="des entretiens, un prototype ou un essai accompagné ; une grande équipe de développement est prématurée."
          />
          <PhaseCard
            title="Construire une première version vendable"
            situation="Un client précis doit se connecter, accomplir la tâche principale et recevoir de l’aide."
            minimum="une personne qui choisit les fonctions, la conception, le développement, les tests, la mise en ligne et une procédure d’assistance."
          />
          <PhaseCard
            title="Lancer auprès de plusieurs clients"
            situation="Les comptes, paiements, données et demandes d’aide ne peuvent plus dépendre d’une démonstration manuelle."
            minimum="responsable du lancement, contrôle du fonctionnement, assistance, corrections et décisions commerciales coordonnées."
          />
          <PhaseCard
            title="Faire évoluer un service utilisé"
            situation="Chaque changement peut affecter des clients, leurs données ou votre chiffre d’affaires."
            minimum="choix des priorités, vérification qu’une modification ne casse pas l’existant, publication maîtrisée, traitement des incidents et explications utiles."
          />
        </div>
        <p>
          Si vous êtes encore au premier cas, commencez par{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            vérifier votre idée de SaaS avant de développer
          </Link>
          . Si un premier client est prêt, le guide sur{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            ce qu’une première version SaaS doit réellement inclure
          </Link>{" "}
          vous aidera à nommer l’étape à chiffrer.
        </p>

        <h2 id="responsabilites">
          2. Écrivez qui décide, qui réalise et qui peut reprendre
        </h2>
        <p>
          Une même personne peut couvrir plusieurs responsabilités. Ce qui
          compte est de ne pas les laisser sans nom. Pour chaque ligne, indiquez
          la personne principale, son relais en cas d’indisponibilité, le
          résultat attendu et l’élément que votre entreprise conserve.
        </p>
        <ResponsibilityCard
          title="Le produit et les priorités"
          decision="Quel client servir maintenant, quel problème résoudre et quelle demande attendre."
          owner="Une personne côté client tranche ; le prestataire conseille et signale les conséquences."
          proof="Une courte décision écrite avec le besoin, le choix, les exclusions et la date de réexamen."
        />
        <ResponsibilityCard
          title="L’usage et les écrans"
          decision="Comment le client comprend, accomplit et corrige la tâche principale."
          owner="La personne qui conçoit l’usage travaille avec celle qui connaît le métier ; un relais relit les cas importants."
          proof="Parcours, maquette ou version testée avec les retours reçus et les choix retenus."
        />
        <ResponsibilityCard
          title="Le code et les données"
          decision="Comment le service fonctionne, sépare les clients, échange des données et peut être repris."
          owner="Le développeur nommé réalise ; une autre personne doit savoir retrouver l’espace du code, lancer le projet et comprendre les choix techniques importants."
          proof="Code à jour, procédure d’installation, changements apportés à la structure des données et décisions techniques utiles."
        />
        <ResponsibilityCard
          title="Les tests et l’acceptation"
          decision="Quel résultat autorise la mise en ligne et quelles erreurs doivent bloquer."
          owner="Le prestataire prépare et exécute les tests ; le client valide le résultat métier avec des cas autorisés."
          proof="Résultat attendu, résultat observé, anomalie, responsable et décision de corriger ou d’accepter."
        />
        <ResponsibilityCard
          title="La mise en ligne et les comptes"
          decision="Qui publie, qui peut revenir en arrière et qui contrôle les services nécessaires."
          owner="Une personne met en ligne, un relais connaît la procédure et l’entreprise garde l’administration des comptes indispensables lorsque le service le permet."
          proof="Procédure de publication, liste des comptes administrateurs, version mise en ligne et solution de retour."
        />
        <ResponsibilityCard
          title="L’aide, les incidents et l’entretien"
          decision="Qui répond au client, comprend et classe le défaut, corrige et décide d’une évolution."
          owner="Le contact d’assistance et le développeur de relais sont nommés ; le client sait aussi ce qui reste à sa charge."
          proof="Demande, priorité, cause trouvée, action menée, message envoyé au client et vérification que le problème est résolu."
        />
        <InfoBox variant="blue" title="La question qui révèle les trous">
          Demandez : « Si cette personne est indisponible demain, qui prend la
          prochaine décision et avec quelles informations ? » Une réponse
          crédible nomme une personne et une trace. « L’équipe s’organisera » ne
          décrit pas encore l’organisation prévue en cas d’absence.
        </InfoBox>

        <h2 id="personnes">3. Regardez les personnes, pas le logo</h2>
        <p>
          Une agence ne garantit pas qu’un remplaçant connaît votre produit. Un
          freelance ne travaille pas nécessairement sans designer, spécialiste
          sécurité ou développeur de relais. Demandez qui interviendra vraiment
          après l’appel commercial, combien de temps cette personne peut
          consacrer à cette étape et quelles parties seront confiées à d’autres.
        </p>
        <p>
          La Direction des achats de l’État recommande le{" "}
          <a
            href="https://www.economie.gouv.fr/files/files/directions_services/dae/doc/Guide_sourcing.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            dialogue avec le marché fournisseur avant une consultation
          </a>{" "}
          afin de mieux connaître les solutions et préciser le besoin. Ce guide
          vise l’achat public ; une PME privée peut néanmoins reprendre l’idée
          simple : parler à plusieurs formes d’équipe avant de figer son devis,
          sans leur demander de produire gratuitement tout le projet.
        </p>
        <ol>
          <li>rencontrez la personne qui dirigera réellement le travail ;</li>
          <li>demandez quelle partie elle fera elle-même ;</li>
          <li>
            faites nommer les autres intervenants et leur moment d’arrivée ;
          </li>
          <li>demandez ce qui se passe pendant une absence non prévue ;</li>
          <li>vérifiez quelle documentation le relais pourra utiliser.</li>
        </ol>
        <p>
          Une référence dans votre secteur peut rassurer, mais elle ne remplace
          pas l’exercice sur votre propre SaaS. Demandez surtout ce qui était
          comparable : type de clients, données, connexions avec d’autres
          logiciels, niveau de disponibilité et responsabilités après le
          lancement.
        </p>
        <p>
          Pour préparer un entretien plus complet sur la méthode, les références
          et la proposition, utilisez le guide pour{" "}
          <Link href="/guides/choisir-prestataire-application-metier">
            choisir le prestataire d’une application métier
          </Link>
          . Ici, gardez l’entretien concentré sur les personnes qui exploiteront
          réellement votre SaaS une fois des clients connectés.
        </p>

        <h2 id="exercices">
          4. Faites expliquer un changement et un incident avant de signer
        </h2>
        <p>
          Les présentations commerciales décrivent les jours ordinaires. Deux
          scénarios simples montrent comment l’équipe prend une décision quand
          plusieurs responsabilités se rencontrent. Utilisez des informations
          fictives ou autorisées, jamais les données réelles d’un client dans un
          outil de démonstration non prévu pour cela.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <ScenarioCard
            title="Un client demande une fonction urgente"
            request="Expliquez qui vérifie le besoin, estime l’effet sur les autres clients, décide, conçoit, développe, teste et annonce la sortie."
            listen="les hypothèses, la personne qui tranche, le compromis proposé et la trace conservée — pas une promesse de tout ajouter."
          />
          <ScenarioCard
            title="Une version empêche un client de travailler"
            request="Expliquez qui reçoit l’alerte, limite l’impact, diagnostique, revient en arrière, informe le client et valide la correction."
            listen="des noms, des accès déjà disponibles, une solution de repli et la distinction entre rétablir le service et chercher la cause."
          />
        </div>
        <p>
          Demandez la même explication au freelance et à l’agence. Vous ne
          cherchez pas une réponse parfaite à un incident imaginaire ; vous
          vérifiez que les décisions et les passages de main ne disparaissent
          pas derrière des mots comme « méthodologie » ou « accompagnement ».
        </p>

        <h2 id="cout">5. Comparez le coût de la même prochaine étape</h2>
        <p>
          Un tarif journalier et un forfait ne sont comparables que si les
          travaux couverts sont identiques. Commencez par le travail défini plus
          haut, puis demandez à chaque candidat d’indiquer ce qu’il réalise, ce
          que votre entreprise doit fournir et ce qui déclencherait un nouveau
          devis.
        </p>
        <InfoBox variant="amber" title="Un poste, une seule case">
          Créez quatre colonnes : « inclus dans le devis », « payé ailleurs », «
          réalisé en interne » et « à confirmer ». Pour chaque travail, cochez
          une seule colonne. Vous éviterez ainsi d’ajouter une seconde fois une
          mise en ligne ou une assistance déjà comprise dans les honoraires.
        </InfoBox>
        <p>Classez notamment ces postes dans les deux offres :</p>
        <ul>
          <li>compréhension du besoin et arbitrages produit ;</li>
          <li>conception des parcours et des écrans ;</li>
          <li>
            développement, reprise éventuelle des données et connexions avec
            d’autres logiciels ;
          </li>
          <li>tests, corrections incluses et validation ;</li>
          <li>hébergement, services externes et mise en ligne ;</li>
          <li>
            formation, assistance, entretien et disponibilité après lancement ;
          </li>
          <li>documentation, remise des accès et changement d’équipe.</li>
        </ul>
        <p>
          Additionnez les montants des deux premières colonnes. Gardez le temps
          de votre équipe séparé tant que vous ne disposez pas d’un coût horaire
          justifié : indiquez au minimum les personnes mobilisées et le nombre
          d’heures prévu. Un freelance très autonome peut demander peu de
          coordination ; une offre moins structurée peut au contraire déplacer
          le suivi sur le dirigeant. Une agence peut coordonner plusieurs
          métiers ; elle peut aussi facturer une structure dont votre étape n’a
          pas besoin. Cette fiche rend le déplacement du travail visible sans
          inventer un prix moyen du marché.
        </p>

        <h2 id="actifs">
          6. Gardez le code, les comptes et les données reprenables
        </h2>
        <p>
          Payer le développement ne décrit pas, à lui seul, tous les droits que
          vous recevez. L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3 du Code de la propriété intellectuelle
          </a>{" "}
          demande d’identifier les droits cédés et de délimiter leur
          exploitation. L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L113-9
          </a>{" "}
          traite, sauf dispositions ou stipulations contraires, des logiciels
          créés par des employés dans l’exercice de leurs fonctions. Il ne faut
          pas l’étendre automatiquement à un freelance ou à tous les
          sous-traitants. Faites examiner les contrats entre l’agence, ses
          salariés ou sous-traitants et votre entreprise, ainsi que les
          licences, par un professionnel compétent lorsque l’enjeu le justifie.
        </p>
        <p>
          Les droits juridiques ne remplacent pas l’accès technique. Conservez
          une carte des comptes : domaine, espace où le code et son historique
          sont conservés, hébergement, base de données, messagerie, paiements,
          statistiques et services externes. À titre d’exemple,{" "}
          <a
            href="https://docs.github.com/fr/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub distingue plusieurs rôles d’accès à un dépôt
          </a>
          . Garder un administrateur contrôlé par votre entreprise lorsque le
          service le permet n’oblige donc pas à donner les mêmes droits à tout
          le monde.
        </p>
        <p>
          Si le prestataire traite des données personnelles pour votre compte,
          l’
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD présenté par la CNIL
          </a>{" "}
          prévoit un contrat décrivant notamment l’objet, la durée, la nature,
          la finalité, les catégories de données et les obligations des parties.
          Il faut écrire qui décide de l’usage des données et qui les traite :
          une mention générique « RGPD inclus » ne suffit pas à définir les
          accès, les autres prestataires ou la restitution des données.
        </p>

        <h2 id="verdict">
          7. Choisissez l’organisation qui fera vivre votre SaaS
        </h2>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <VerdictCard
            title="Choisir un freelance expérimenté"
            choose="La prochaine étape est limitée, l’essentiel du travail relève d’un même métier, une personne côté client prend les décisions et les explications laissées permettent un relais."
            avoid="vous attendez qu’une seule personne invente le produit, coordonne plusieurs métiers invisibles et garantisse seule un service critique dans la durée."
          />
          <VerdictCard
            title="Choisir une agence"
            choose="La conception des écrans, le développement, les paiements ou l’assistance doivent avancer ensemble ; les personnes sont nommées et leur coordination est incluse."
            avoid="le devis vend surtout un nom d’entreprise sans présenter les intervenants, les passages de main, l’assistance et le relais réel."
          />
          <VerdictCard
            title="Réunir un freelance et des spécialistes"
            choose="Votre entreprise garde la décision produit et réunit un développeur principal avec les spécialistes nécessaires seulement au bon moment."
            avoid="personne ne porte l’ensemble, les contrats se contredisent ou chaque intervenant suppose que les tests, la mise en ligne et l’assistance appartiennent à un autre."
          />
          <VerdictCard
            title="Reporter et valider d’abord"
            choose="Le problème, le client, la vente ou les responsabilités côté entreprise restent trop incertains pour chiffrer honnêtement une version."
            avoid="vous utilisez le report pour différer indéfiniment une décision déjà documentée et testable sur un travail limité."
          />
        </div>

        <GuideInlineCTA
          title="Présenter votre SaaS et les responsabilités à couvrir"
          description="Le bouton ouvre notre formulaire projet. Il vous demande votre besoin, votre situation actuelle, les personnes concernées, le calendrier et le budget envisagé. Ces informations permettent d’examiner l’équipe nécessaire et de dire honnêtement si une agence, un freelance ou une validation préalable paraît plus adapté."
          tags={[
            "Étape suivante définie",
            "Qui fait quoi",
            "Agence non imposée",
          ]}
          ctaLabel="Décrire mon projet SaaS"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="brief">8. Envoyez le même brief à chaque candidat</h2>
        <p>
          Un brief comparable tient sur quelques pages. Il ne décide pas la
          solution à la place de l’équipe, mais l’empêche de remplir les blancs
          avec ses propres habitudes. Préparez :
        </p>
        <ol>
          <li>le client visé et le problème déjà vérifié ;</li>
          <li>la prochaine décision et le résultat attendu de cette étape ;</li>
          <li>un parcours ordinaire et deux situations difficiles ;</li>
          <li>les décisions que votre entreprise garde ;</li>
          <li>
            les responsabilités à couvrir et les personnes déjà présentes ;
          </li>
          <li>les données, outils, comptes et contraintes connus ;</li>
          <li>le calendrier, le budget disponible et les inconnues ;</li>
          <li>ce que vous voulez récupérer à la fin de cette étape.</li>
        </ol>
        <p>
          Transformez ensuite cette matière en{" "}
          <Link href="/guides/cahier-des-charges-saas">
            cahier des charges SaaS
          </Link>{" "}
          et faites expliquer les mêmes deux scénarios par chaque candidat. Si
          vous préparez surtout le risque de dépendre d’une seule personne,
          consultez aussi le guide pour{" "}
          <Link href="/guides/reprendre-saas-developpe-par-freelance">
            rendre un SaaS développé par un freelance réellement reprenable
          </Link>
          .
        </p>
        <p>
          Hagnéré Code vend la conception et le développement de SaaS : nous ne
          sommes donc pas neutres sur notre propre offre. Vous pouvez consulter
          notre page sur les{" "}
          <Link href="/services/saas-applications-metier">
            SaaS et applications métier
          </Link>{" "}
          pour comprendre notre manière de travailler, puis appliquer exactement
          les mêmes questions à notre proposition et à celles des autres
          candidats.
        </p>

        <h2 id="sources">Sources et limites</h2>
        <p>
          Sources consultées le 22 juillet 2026. Le guide de la Direction des
          achats de l’État est utilisé comme méthode de connaissance du marché,
          pas comme obligation applicable à une PME privée. Les textes de
          propriété intellectuelle et de protection des données doivent être
          appliqués au contrat, aux personnes et aux traitements réels. Ce guide
          ne remplace ni une consultation juridique, ni un audit de sécurité, ni
          la validation commerciale de votre SaaS.
        </p>
        <ul>
          <li>
            Direction des achats de l’État : guide du sourçage opérationnel 2025
            ;
          </li>
          <li>
            Légifrance : articles L131-3 et L113-9 du Code de la propriété
            intellectuelle ;
          </li>
          <li>
            CNIL : article 28 du RGPD et rôles du responsable et du
            sous-traitant ;
          </li>
          <li>
            GitHub Docs : rôles et droits d’accès d’un dépôt d’organisation.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
