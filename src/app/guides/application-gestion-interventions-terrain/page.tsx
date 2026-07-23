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

const guide = getGuide("application-gestion-interventions-terrain");

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
        alt: "Une intervention reliée du premier appel aux éléments de facturation",
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
      name: "Application de gestion des interventions terrain",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu’est-ce qu’une application de gestion des interventions ?",
    answer:
      "C’est l’outil partagé par le bureau et les équipes mobiles pour préparer, planifier, réaliser et terminer une intervention. Il relie au minimum la demande, les informations remises au technicien, le travail effectué et la suite administrative.",
  },
  {
    question: "Faut-il forcément développer une application sur mesure ?",
    answer:
      "Non. Essayez d’abord un logiciel standard sur vos cas ordinaires et difficiles. Le sur-mesure devient raisonnable lorsque des règles stables et importantes restent impossibles à gérer proprement, malgré la configuration ou une connexion avec vos outils actuels.",
  },
  {
    question: "L’application doit-elle fonctionner sans connexion ?",
    answer:
      "Seulement si vos techniciens travaillent réellement dans des lieux où le réseau manque ou devient instable. Testez ces lieux avant de l’exiger, puis précisez ce qui doit rester disponible et comment les changements seront rapprochés au retour de la connexion.",
  },
  {
    question: "Doit-on suivre la position des techniciens en permanence ?",
    answer:
      "Non. Une position continue n’est pas une fonction à ajouter par défaut. Définissez d’abord le besoin exact et cherchez une réponse moins intrusive, comme un statut saisi à l’arrivée, tout en vérifiant les règles applicables avec les personnes compétentes.",
  },
  {
    question: "Faut-il intégrer la facturation dans la première version ?",
    answer:
      "Pas nécessairement. Commencez souvent par transmettre des éléments complets et contrôlés au logiciel de facturation existant : client, travail réalisé, pièces, temps et conditions. Automatisez davantage seulement si cette transmission reste une source importante d’erreurs ou de ressaisie.",
  },
  {
    question: "Qui doit tester l’application avant son déploiement ?",
    answer:
      "Au minimum une personne qui planifie, une personne qui intervient et une personne qui exploite le compte rendu. Elles doivent rejouer des situations réelles, y compris une urgence, une absence de réseau et une intervention inachevée.",
  },
  {
    question: "Que faut-il préparer avant de demander un devis ?",
    answer:
      "Préparez une intervention ordinaire, cinq cas difficiles, les rôles, les outils actuels, les données de référence et ce que vous voulez pouvoir vérifier. Les prestataires pourront alors chiffrer le même problème au lieu d’imaginer chacun une application différente.",
  },
];

type JourneyStepProps = {
  number: string;
  title: string;
  office: string;
  field: string;
  done: string;
};

function JourneyStep({ number, title, office, field, done }: JourneyStepProps) {
  return (
    <section className="not-prose my-5 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
          {number}
        </span>
        <h3 className="mb-0 text-lg font-bold text-zinc-950 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-zinc-500">
            Au bureau
          </p>
          <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {office}
          </p>
        </div>
        <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            Sur le terrain
          </p>
          <p className="mb-0 text-sm leading-relaxed text-blue-950 dark:text-blue-100">
            {field}
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
            Étape terminée si…
          </p>
          <p className="mb-0 text-sm leading-relaxed text-emerald-950 dark:text-emerald-100">
            {done}
          </p>
        </div>
      </div>
    </section>
  );
}

function StressTestCard({
  title,
  action,
  decision,
}: {
  title: string;
  action: string;
  decision: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-2 text-base font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <strong>À faire :</strong> {action}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <strong>Vous devez pouvoir décider :</strong> {decision}
      </p>
    </div>
  );
}

function ChoiceCard({
  title,
  when,
  watch,
}: {
  title: string;
  when: string;
  watch: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {when}
      </p>
      <p className="mb-0 text-sm leading-relaxed text-amber-800 dark:text-amber-300">
        <strong>À vérifier :</strong> {watch}
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
          { label: "Application de gestion des interventions terrain" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Suivez une intervention du premier appel au retour vers la facturation. Vous verrez ce qu’un logiciel existant peut couvrir, ce qu’il faut tester sur le terrain et quand une application adaptée devient raisonnable."
        heroAction={{
          href: "#parcours",
          label: "Suivre une intervention complète",
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
            title: "Du bureau au terrain",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Cinq situations à tester",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Standard ou sur-mesure",
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
            href: "/guides/digitaliser-bons-intervention",
            label: "Comprendre quoi mettre dans un bon d’intervention",
          },
          {
            href: "/guides/automatiser-processus-metier",
            label: "Choisir le premier processus à automatiser",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Rédiger le besoin de l’application",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer si le projet peut se rembourser",
          },
          {
            href: "/guides/choisir-prestataire-application-metier",
            label: "Comparer les réponses des prestataires",
          },
        ]}
        faqTitle="Gérer les interventions terrain : les questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Le planning change dans la journée. Un technicien appelle pour obtenir
          une adresse ou l’historique du client. Le bon d’intervention revient
          sur papier, en photo ou dans un message, puis le bureau ressaisit les
          informations avant de pouvoir facturer. Vous cherchez un outil qui
          relie enfin ces étapes sans compliquer le travail sur le terrain.
        </p>
        <p>
          Une application de gestion des interventions est simplement l’outil
          partagé par le bureau et les équipes mobiles pour préparer, planifier,
          réaliser et terminer une intervention. Elle peut être un logiciel du
          marché, plusieurs outils reliés entre eux ou une application créée
          pour votre entreprise.
        </p>
        <p>
          <strong>Ne commencez pas par demander cinquante fonctions.</strong>{" "}
          Suivez d’abord une intervention complète, puis faites échouer le
          parcours avec une urgence, une absence de réseau, un travail inachevé,
          une seconde visite et un téléphone perdu. Si un logiciel existant
          traite correctement ces situations, configurez-le. Si une connexion
          suffit, ne reconstruisez pas le reste. Le sur-mesure devient pertinent
          lorsque des règles stables et importantes restent mal couvertes. Ce
          guide vous aide à prendre cette décision.
        </p>

        <GuideToc
          items={[
            { id: "parcours", label: "1. Suivre une intervention complète" },
            {
              id: "roles",
              label: "2. Donner à chacun les bonnes informations",
            },
            { id: "tests", label: "3. Tester cinq situations difficiles" },
            { id: "choix", label: "4. Choisir le bon niveau de solution" },
            { id: "pilote", label: "5. Faire essayer avant de généraliser" },
            { id: "donnees", label: "6. Limiter localisation et permissions" },
            { id: "facturation", label: "7. Préparer la suite administrative" },
            { id: "dossier", label: "8. Préparer une demande comparable" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="parcours">
          1. Suivez une intervention complète, du premier appel aux éléments de
          facturation
        </h2>
        <p>
          Prenez un type d’intervention fréquent. Ne choisissez ni le cas idéal
          ni l’incident exceptionnel. Racontez ce qui se passe aujourd’hui, avec
          les outils réellement utilisés. À chaque passage de main, notez qui
          agit, l’information reçue, ce qu’il modifie et la personne qui a
          besoin du résultat.
        </p>

        <JourneyStep
          number="1"
          title="La demande devient une intervention compréhensible"
          office="Le bureau identifie le client, le lieu, le problème, l’urgence réelle, les contraintes d’accès et l’interlocuteur sur place."
          field="Le technicien ne reçoit pas un simple titre : il voit les informations nécessaires pour préparer son déplacement."
          done="une autre personne peut comprendre ce qui est demandé sans rappeler le client."
        />
        <JourneyStep
          number="2"
          title="Le planning devient une décision partagée"
          office="Le coordinateur choisit une personne, un créneau et, si besoin, un véhicule, une compétence ou du matériel."
          field="Le technicien voit la version à jour et comprend ce qui a changé depuis la première affectation."
          done="un déplacement, une annulation ou une urgence ne laisse pas deux horaires contradictoires."
        />
        <JourneyStep
          number="3"
          title="Le technicien retrouve le dossier utile sur place"
          office="Le bureau rend disponibles les coordonnées, consignes, documents et interventions précédentes réellement nécessaires."
          field="La personne consulte ces éléments sur téléphone ou tablette, y compris dans les conditions de réseau rencontrées."
          done="le travail peut commencer sans appel de rattrapage ni accès à des dossiers inutiles."
        />
        <JourneyStep
          number="4"
          title="Le travail effectué devient un compte rendu exploitable"
          office="L’entreprise a défini les champs indispensables : action réalisée, temps, pièces, photos utiles, réserve et suite à donner."
          field="Le technicien remplit ces éléments au moment où ils sont encore frais, avec une alternative lorsque photo ou signature ne conviennent pas."
          done="le bureau sait ce qui est terminé, ce qui reste et ce qui doit être transmis au client."
        />
        <JourneyStep
          number="5"
          title="La clôture déclenche la bonne suite"
          office="Une personne contrôle les informations sensibles, envoie le document prévu et transmet les éléments utiles à la facturation ou au suivi."
          field="Le technicien voit si son dossier est accepté, à compléter ou transformé en nouvelle intervention."
          done="aucune ressaisie cachée n’est nécessaire pour comprendre, facturer ou replanifier."
        />

        <InfoBox variant="blue" title="La fiche à copier pour votre entreprise">
          Pour chaque étape, écrivez : l’événement qui la déclenche, la personne
          qui agit, les informations nécessaires, ce qu’elle peut modifier, le
          résultat attendu, la personne suivante et la solution prévue si
          l’outil ne répond plus. Cinq lignes bien remplies valent mieux qu’une
          liste de fonctions copiée sur un logiciel.
        </InfoBox>

        <h2 id="roles">
          2. Donnez à chacun les informations dont il a réellement besoin
        </h2>
        <p>
          Le coordinateur, le technicien, le responsable et la personne qui
          prépare la facture n’ont pas le même travail. Leur montrer le même
          écran avec tous les droits paraît simple au départ, mais rend les
          erreurs et les responsabilités difficiles à comprendre.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "La personne qui planifie",
              "Crée et déplace l’intervention, affecte les ressources et voit les conflits utiles. Elle ne corrige pas nécessairement les informations de facturation.",
            ],
            [
              "La personne qui intervient",
              "Consulte son planning et le dossier utile, renseigne le travail et signale ce qui empêche de terminer. Elle ne voit pas tous les clients par défaut.",
            ],
            [
              "La personne qui contrôle",
              "Vérifie les informations qui engagent l’entreprise, demande un complément et décide de la suite. Elle voit aussi les changements importants.",
            ],
            [
              "La personne qui facture",
              "Reçoit des éléments validés dans un format exploitable. Elle sait d’où ils viennent et qui peut corriger une erreur.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-base font-bold text-zinc-950 dark:text-white">
                {title}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Ajoutez le client seulement s’il doit réellement confirmer un
          rendez-vous, recevoir un document ou signaler une réserve. Un espace
          client complet n’est pas nécessaire à toutes les entreprises. Un
          e-mail clair ou un lien temporaire peut parfois suffire.
        </p>

        <h2 id="tests">
          3. Faites échouer le parcours avec cinq situations réelles
        </h2>
        <p>
          Une démonstration préparée montre souvent le chemin le plus facile.
          Vos essais doivent reproduire les situations qui obligent aujourd’hui
          le bureau et le terrain à s’appeler, se corriger ou ressaisir.
          Utilisez des données fictives et ne placez aucune information de
          client réel dans un environnement de démonstration non autorisé.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <StressTestCard
            title="Une urgence déplace le planning"
            action="Affectez une nouvelle intervention, déplacez-en une autre et vérifiez ce que voient les deux techniciens."
            decision="si l’outil montre une seule version à jour et conserve l’information nécessaire pour expliquer le changement."
          />
          <StressTestCard
            title="Le réseau disparaît sur place"
            action="Coupez réellement la connexion, consultez le dossier, remplissez le compte rendu, puis reconnectez l’appareil."
            decision="quelles informations restent disponibles et comment un conflit de modifications est signalé, sans écrasement silencieux."
          />
          <StressTestCard
            title="Le travail ne peut pas être terminé"
            action="Signalez une pièce manquante, une réserve ou un accès impossible sans fermer faussement l’intervention."
            decision="qui est prévenu, quelle suite est créée et ce qui peut ou non être transmis à la facturation."
          />
          <StressTestCard
            title="Une seconde visite devient nécessaire"
            action="Créez le retour depuis le premier compte rendu et vérifiez que l’historique utile suit sans recopier tout le dossier."
            decision="si le nouveau rendez-vous reste relié au problème initial et si le client reçoit une information cohérente."
          />
          <StressTestCard
            title="Le téléphone est perdu ou volé"
            action="Verrouillez un appareil de test, retirez son compte et vérifiez ce qui reste lisible hors connexion ainsi que la procédure d’effacement prévue."
            decision="si les données conservées sur l’appareil sont limitées, protégées et réellement inaccessibles après la révocation prévue."
          />
        </div>
        <p>
          Si votre activité comporte d’autres cas décisifs — sous-traitant,
          contrôle réglementé, pièce suivie par lot, plusieurs sites ou
          validation du client — remplacez l’un de ces essais. Le but n’est pas
          d’accumuler les exceptions, mais de tester celles qui changent
          réellement votre décision.
        </p>

        <h2 id="choix">
          4. Comparez quatre réponses avant de commander du sur-mesure
        </h2>
        <p>
          Développer n’est pas la seule manière de relier le planning et les
          comptes rendus. Demandez une démonstration à partir de vos propres cas
          et vérifiez ce qui fonctionne réellement, au lieu de déduire la
          réponse d’une liste de fonctions commerciale.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <ChoiceCard
            title="Mieux organiser les outils actuels"
            when="Choisissez cette voie si le problème vient surtout d’une information non définie, d’un responsable absent ou d’une règle que personne n’applique de la même façon."
            watch="la correction doit tenir dans le travail quotidien, pas seulement dans une nouvelle procédure oubliée après deux semaines."
          />
          <ChoiceCard
            title="Configurer un logiciel existant"
            when="Cette option convient lorsque vos étapes et formulaires restent proches d’un métier déjà bien couvert et que les cas difficiles passent la démonstration."
            watch="ajoutez paramétrage, reprise des données, formation, téléphones, abonnement, assistance et possibilité de récupérer vos informations."
          />
          <ChoiceCard
            title="Relier deux outils"
            when="Gardez le logiciel terrain et le logiciel de facturation ou de suivi commercial si chacun fait bien son travail, puis transmettez seulement les données utiles."
            watch="désignez l’outil qui fait foi pour le client, l’adresse, le statut et le montant, ainsi que le traitement d’une erreur de transmission."
          />
          <ChoiceCard
            title="Développer une application adaptée"
            when="Étudiez cette voie si des règles stables, fréquentes et importantes restent impossibles à traiter correctement après un essai sérieux des options plausibles."
            watch="limitez la première version au parcours prouvé et prévoyez données, tests, formation, entretien et sortie dès le devis."
          />
        </div>
        <p>
          Un projet sur mesure n’est pas le niveau supérieur d’une échelle. Il
          ajoute un coût de construction et d’entretien. Utilisez le guide pour{" "}
          <Link href="/guides/calculer-roi-application-metier">
            calculer le retour sur investissement d’une application métier
          </Link>{" "}
          avec vos propres volumes et votre propre temps, sans convertir une
          impression de désordre en gain garanti.
        </p>

        <h2 id="pilote">
          5. Faites essayer une première version avant d’équiper toute l’équipe
        </h2>
        <p>
          Choisissez un type d’intervention représentatif, quelques utilisateurs
          concernés et une période où ces situations se produisent vraiment. Ne
          demandez pas aux techniciens si l’écran leur « plaît ». Observez où
          ils s’arrêtent, ce qu’ils notent encore ailleurs, les appels qu’ils
          passent et les informations qu’ils inventent pour continuer.
        </p>
        <p>
          DesignGouv recommande de partir d’un besoin concret et de tester avec
          les futurs utilisateurs dans son guide pour{" "}
          <a
            href="https://design.numerique.gouv.fr/bien-concevoir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            bien concevoir un service numérique
          </a>
          . Cette ressource vise les services publics ; nous utilisons ici la
          discipline d’observation, pas une obligation imposée telle quelle à
          votre entreprise.
        </p>
        <ol>
          <li>notez le travail actuel avant de changer l’outil ;</li>
          <li>formez les utilisateurs sur le parcours retenu ;</li>
          <li>rejouez les cinq situations difficiles ;</li>
          <li>vérifiez les comptes rendus jusqu’à la suite administrative ;</li>
          <li>
            décidez de corriger, poursuivre, généraliser ou arrêter en nommant
            les raisons.
          </li>
        </ol>
        <InfoBox
          variant="emerald"
          title="Arrêter le pilote peut être une bonne décision"
        >
          Si les techniciens doivent conserver un second système, si les
          informations se contredisent ou si le logiciel standard traite déjà
          mieux les cas importants, n’étendez pas la première version. Vous
          venez d’éviter de généraliser un nouvel obstacle.
        </InfoBox>

        <h2 id="donnees">
          6. Ne demandez ni position, ni photo, ni micro sans raison précise
        </h2>
        <p>
          Une application mobile peut demander l’accès à la localisation, aux
          photos, au microphone ou aux fichiers du téléphone. La{" "}
          <a
            href="https://www.cnil.fr/fr/permissions-applications-mobiles-recommandations-de-la-cnil-pour-respecter-la-vie-privee"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de choisir la permission la moins intrusive
          </a>{" "}
          qui répond au besoin. Elle rappelle aussi que la fenêtre technique du
          téléphone ne constitue pas toujours, à elle seule, un consentement
          valable pour le traitement réalisé.
        </p>
        <p>
          Avant d’ajouter une position, un horaire ou un statut qui pourrait
          servir à contrôler l’activité, écrivez la question précise à laquelle
          cette donnée doit répondre. Dans sa fiche du 9 juillet 2026, la{" "}
          <a
            href="https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle les conditions d’un dispositif de contrôle de
            l’activité
          </a>
          : il doit être justifié et proportionné, les personnes concernées
          doivent être informées avant sa mise en place et les représentants du
          personnel doivent être consultés dans les cas prévus, notamment le CSE
          dans une entreprise privée d’au moins 50 salariés. Même un statut «
          arrivé » mérite donc cet examen s’il peut servir à suivre une
          personne.
        </p>
        <p>
          Une solution plus simple peut suffire : le technicien confirme son
          arrivée, l’entreprise enregistre le changement d’état et le client
          reçoit une plage horaire. Cette conclusion est une recommandation de
          conception, pas une règle juridique universelle.
        </p>
        <p>
          Limitez aussi les personnes qui voient les données. Les comptes
          d’administration méritent une protection renforcée ; les{" "}
          <a
            href="https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations de MesServicesCyber sur l’authentification
          </a>{" "}
          couvrent notamment les applications web et les accès privilégiés.
          Elles ne remplacent pas l’analyse de sécurité de votre projet.
        </p>
        <p>
          Le mode hors connexion conserve parfois des informations sur le
          téléphone. Testez donc aussi la perte de l’appareil : verrouillage,
          retrait du compte, données encore visibles et effacement prévu. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-securiser-linformatique-mobile"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de limiter le stockage mobile, de verrouiller et de
            chiffrer les appareils, puis de prévoir les conséquences d’un vol
          </a>
          . Si un téléphone personnel est autorisé, la procédure doit aussi
          respecter son espace privé ; une promesse d’effacement à distance ne
          suffit pas, il faut vérifier le comportement réel de la solution.
        </p>

        <h2 id="facturation">
          7. Transmettez des informations contrôlées avant d’automatiser la
          facture
        </h2>
        <p>
          Le compte rendu ne doit pas créer une nouvelle file de messages à
          interpréter. Définissez ce que la personne chargée de la facture doit
          recevoir : client et adresse de facturation, intervention concernée,
          travail réalisé, pièces ou quantités, temps si le contrat l’exige,
          conditions particulières et personne ayant validé.
        </p>
        <p>
          Commencez par un transfert compréhensible vers votre outil de
          facturation. Une exportation contrôlée ou une proposition de facture
          peut être plus sûre qu’une facture envoyée automatiquement dès le
          premier compte rendu. Ajoutez l’automatisation seulement lorsque les
          règles sont stables, les corrections rares et la personne responsable
          clairement identifiée.
        </p>
        <p>
          Si le bureau recopie encore les mêmes données entre plusieurs outils,
          le guide pour{" "}
          <Link href="/guides/automatiser-processus-metier">
            choisir un processus à automatiser
          </Link>{" "}
          aide à mesurer cette perte avant de décider d’une connexion.
        </p>

        <GuideInlineCTA
          title="Faire relire le parcours entre votre bureau et le terrain"
          description="Décrivez une intervention ordinaire, les outils utilisés et le cas qui crée le plus de ressaisie ou d’appels. Vous saurez si un logiciel existant, une connexion ou une application limitée mérite d’être étudié — y compris si aucun développement n’est nécessaire."
          tags={[
            "Parcours métier compris",
            "Solution standard possible",
            "Sur-mesure seulement si utile",
          ]}
          ctaLabel="Décrire mes interventions"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="dossier">8. Remettez le même dossier à chaque prestataire</h2>
        <p>
          Votre demande n’a pas besoin de décider chaque écran. Elle doit
          permettre à plusieurs interlocuteurs de comprendre et de traiter le
          même problème. Réunissez :
        </p>
        <ol>
          <li>une intervention ordinaire, racontée du début à la fin ;</li>
          <li>les cinq situations difficiles et le résultat attendu ;</li>
          <li>les rôles, droits et validations ;</li>
          <li>
            les outils actuels et l’information qui fait foi dans chacun ;
          </li>
          <li>les lieux et appareils réellement utilisés ;</li>
          <li>les données à reprendre et celles à ne pas collecter ;</li>
          <li>la solution de secours si le service devient indisponible ;</li>
          <li>les inconnues que le prestataire doit encore examiner.</li>
        </ol>
        <p>
          Transformez ensuite cette matière en{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’application métier
          </Link>
          , puis faites travailler les candidats sur les mêmes situations avec
          notre méthode pour{" "}
          <Link href="/guides/choisir-prestataire-application-metier">
            choisir un prestataire d’application métier
          </Link>
          . Vous comparerez un parcours, des tests et des responsabilités, pas
          cinq listes de fonctions différentes.
        </p>
        <p>
          Si vos règles sont stables et qu’aucun logiciel plausible ne traite
          correctement les cas importants, découvrez comment Hagnéré Code
          conçoit des{" "}
          <Link href="/services/outils-internes-sur-mesure">
            outils internes adaptés au travail réel de l’entreprise
          </Link>
          . Cette page présente notre offre ; elle ne constitue pas une preuve
          que le sur-mesure est le bon choix dans votre cas.
        </p>

        <h2 id="sources">Sources et limites</h2>
        <p>
          Sources consultées le 22 juillet 2026. Les recommandations CNIL
          doivent être appliquées au traitement réel, aux personnes concernées
          et au droit en vigueur. DesignGouv fournit une méthode de conception
          destinée aux services publics. MesServicesCyber apporte des repères de
          sécurité généraux. Ce guide ne certifie ni conformité, ni sécurité, ni
          résultat économique.
        </p>
        <ul>
          <li>
            CNIL, 14 janvier 2025 : permissions et protection de la vie privée
            dans les applications mobiles ;
          </li>
          <li>
            CNIL, 9 juillet 2026 : contrôle de l’activité des personnes
            employées ;
          </li>
          <li>CNIL, 14 mars 2024 : sécurisation de l’informatique mobile ;</li>
          <li>DesignGouv : partir du besoin et tester avec les usagers ;</li>
          <li>
            MesServicesCyber : authentification multifacteur et mots de passe.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
