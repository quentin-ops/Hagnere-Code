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

const guide = getGuide("mvp-saas-quoi-inclure");

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
        alt: "MVP SaaS : les sept indispensables pour servir un premier client",
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
      name: "Que faut-il inclure dans un MVP SaaS ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien de fonctionnalités faut-il dans un MVP SaaS ?",
    answer:
      "Il n’existe pas de nombre idéal. Votre première version doit surtout permettre à un client de se connecter, d’accomplir la tâche principale, de retrouver ses données et d’obtenir de l’aide s’il est bloqué. Tout ce qui ne sert pas ce premier usage peut attendre.",
  },
  {
    question: "Un MVP SaaS doit-il obligatoirement intégrer Stripe ?",
    answer:
      "Non. Pour quelques clients professionnels, un contrat et une facture manuelle peuvent suffire. Automatisez le paiement lorsque les clients doivent acheter seuls ou que les changements d’abonnement deviennent trop nombreux à gérer à la main.",
  },
  {
    question: "Le support et l’administration peuvent-ils rester manuels ?",
    answer:
      "Oui, surtout avec les premiers clients. Écrivez qui intervient, comment et jusqu’à quelle limite. Automatisez lorsque le temps cumulé devient trop lourd, que le volume rend la procédure fragile ou que l’intervention expose les données à un risque inutile — pas à cause d’une fréquence hebdomadaire isolée.",
  },
  {
    question:
      "Faut-il une base de données séparée pour chaque entreprise cliente ?",
    answer:
      "Pas nécessairement. Une même base peut servir plusieurs entreprises si les accès et les données sont réellement séparés. Votre prestataire doit expliquer cette séparation avec des mots simples et tester qu’un client ne peut jamais voir les informations d’un autre avant le lancement.",
  },
  {
    question: "Peut-on reporter la sécurité et le RGPD à la V1 ?",
    answer:
      "Non. Une première version peut être limitée, mais elle doit déjà protéger les comptes et les données qu’elle utilise. Les contrôles dépendent de la sensibilité des informations et ne remplacent pas un audit ou un avis juridique lorsque l’enjeu l’exige.",
  },
  {
    question: "Une application mobile est-elle nécessaire dans un MVP SaaS ?",
    answer:
      "Seulement si l’usage dépend du téléphone : travail hors connexion, photo, géolocalisation ou notifications. Dans les autres cas, un site web bien adapté au mobile permet de tester le service sans financer deux applications.",
  },
];

const firstVersionEssentials = [
  {
    label: "Service rendu",
    result:
      "Un travail métier complet produit un résultat que l’utilisateur peut employer.",
    manual: "Préparer l’entrée ou vérifier le résultat avec lui.",
    proof: "Un client va du point de départ au résultat avec un cas réaliste.",
    later: "Les variantes et automatisations qui ne changent pas le résultat.",
  },
  {
    label: "Accès",
    result:
      "La bonne personne entre, récupère son accès et ne voit que ses données.",
    manual: "Créer l’organisation et envoyer la première invitation.",
    proof: "Invitation, retrait et contrôle d’un rôle sont testés.",
    later:
      "Libre-service public, connexion unique d’entreprise (SSO) ou matrice de rôles très fine.",
  },
  {
    label: "Données",
    result:
      "Les données utiles entrent, restent séparées, peuvent être corrigées et ressortir.",
    manual: "Réaliser un import initial accompagné et contrôlé.",
    proof: "Jeu représentatif, erreur, export et cycle de vie sont vérifiés.",
    later: "Importateur universel et connecteurs non nécessaires au pilote.",
  },
  {
    label: "Vente",
    result:
      "Le droit d’usage correspond au contrat ou au paiement réellement choisi.",
    manual: "Contrat et facture B2B, puis activation contrôlée.",
    proof: "Entrée, changement, échec et sortie ont un traitement écrit.",
    later:
      "Essai gratuit, coupons ou catalogue complexe si le test est accompagné.",
  },
  {
    label: "Aide et administration",
    result:
      "L’équipe sait assister, débloquer et administrer sans improviser dans la base.",
    manual: "Support direct et procédure interne sobre.",
    proof: "Un incident prévu est identifié, traité et tracé.",
    later:
      "Centre d’aide exhaustif et interface interne d’administration très automatisée.",
  },
  {
    label: "Sécurité et continuité",
    result:
      "Accès, secrets, sauvegarde, surveillance et responsabilités sont proportionnés.",
    manual: "Revue humaine d’une action sensible selon une procédure.",
    proof: "Restauration, contrôle d’accès et canal d’incident sont exercés.",
    later:
      "Référentiels ou niveaux de service non exigés par le risque ou le contrat.",
  },
  {
    label: "Mesure utile",
    result:
      "Le lot montre où la valeur arrive, où elle échoue et ce qu’il coûte à servir.",
    manual: "Consigner retours et temps d’intervention après chaque usage.",
    proof:
      "Événements, erreurs et décision de suite sont définis avant le pilote.",
    later: "Tableau de bord avancé sans décision associée.",
  },
];

function FirstVersionChecklist() {
  return (
    <figure
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="mvp-slice-title"
    >
      <figcaption id="mvp-slice-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
          Checklist de la première version
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Ce que le premier client doit pouvoir faire
        </span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-400">
          Une première version peut rester simple. Elle doit néanmoins permettre
          un usage complet, protéger les données et donner à votre équipe les
          moyens d’aider le client.
        </span>
      </figcaption>

      <ol className="relative space-y-3 before:absolute before:bottom-5 before:left-[1.1rem] before:top-5 before:w-px before:bg-gradient-to-b before:from-violet-400 before:via-blue-400 before:to-emerald-400 sm:before:left-[1.35rem]">
        {firstVersionEssentials.map((layer, index) => (
          <li
            key={layer.label}
            className="relative rounded-xl border border-white/10 bg-white/[0.045] p-3 pl-12 sm:p-4 sm:pl-14"
          >
            <span className="absolute left-2.5 top-3.5 z-10 flex size-7 items-center justify-center rounded-lg bg-white text-xs font-black text-zinc-950 sm:left-3.5 sm:top-4 sm:size-8">
              {index + 1}
            </span>
            <h3 className="m-0 text-sm font-bold text-white">{layer.label}</h3>
            <p className="mb-3 mt-1 text-xs leading-relaxed text-zinc-300">
              {layer.result}
            </p>
            <dl className="grid gap-2 text-xs sm:grid-cols-3">
              <div className="rounded-lg bg-black/20 p-2.5">
                <dt className="font-semibold text-blue-300">Manuel possible</dt>
                <dd className="mt-1 text-zinc-400">{layer.manual}</dd>
              </div>
              <div className="rounded-lg bg-black/20 p-2.5">
                <dt className="font-semibold text-emerald-300">À tester</dt>
                <dd className="mt-1 text-zinc-400">{layer.proof}</dd>
              </div>
              <div className="rounded-lg bg-black/20 p-2.5">
                <dt className="font-semibold text-amber-300">Plus tard</dt>
                <dd className="mt-1 text-zinc-400">{layer.later}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </figure>
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
          { label: "Que faut-il inclure dans un MVP SaaS ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez un premier client intéressé et vous vous demandez quoi construire en premier ? Voici ce qui doit fonctionner le jour du lancement, ce qui peut encore être fait à la main et ce qui peut attendre."
        heroAction={{
          href: "#tranche-verticale",
          label: "Voir la checklist",
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
            title: "1 tâche client complète",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "7 indispensables au lancement",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "6 vérifications avant production",
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
            label: "Valider l’idée avant le MVP",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Budgéter le SaaS et son exploitation",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou développement sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Décrire les besoins et les tests",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Sécuriser code, droits et accès",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Développement de SaaS sur mesure",
          },
        ]}
        faqTitle="Première version d’un SaaS : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Vous avez trouvé un premier client et votre idée fonctionne en
            démonstration. Que faut-il maintenant construire pour pouvoir lui
            vendre une vraie première version ?
          </strong>{" "}
          Le client doit pouvoir entrer, accomplir la tâche principale,
          retrouver son travail et demander de l’aide. De votre côté, vous devez
          pouvoir l’administrer, protéger ses données et savoir quoi faire si
          quelque chose échoue. Le reste peut attendre.
        </p>

        <p>
          Un SaaS est ici un logiciel que vos clients utilisent en ligne,
          généralement par abonnement. Son MVP — une première version
          volontairement limitée — n’est donc pas une longue liste de fonctions
          à moitié terminées. C’est un service court mais complet. Vous pouvez
          encore créer les comptes, importer un fichier ou envoyer les factures
          à la main si le volume est faible et si une personne en est clairement
          responsable. En revanche, les accès, la séparation des données, les
          sauvegardes et la possibilité d’aider un client bloqué ne peuvent pas
          être improvisés après le lancement.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-3">
          {[
            [
              "09:00",
              "Entrer",
              "Organisation créée, bonne personne invitée, accès récupérable et rôle limité.",
            ],
            [
              "11:20",
              "Obtenir la valeur",
              "Donnée représentative, action métier complète, résultat utilisable et erreur compréhensible.",
            ],
            [
              "16:40",
              "Être servi",
              "Support capable d’identifier le blocage, de le corriger, de tracer l’action et de décider la suite.",
            ],
          ].map(([time, title, description]) => (
            <div
              key={time}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 font-mono text-xs font-semibold text-violet-600 dark:text-violet-400">
                {time}
              </p>
              <p className="mb-1 text-sm font-bold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>

        <InfoBox
          variant="amber"
          title="À utiliser quand un vrai client est prêt à essayer"
        >
          Ce guide suppose que vous connaissez le problème à résoudre et qu’au
          moins un client accepte d’essayer la solution. Si vous ne disposez
          encore que de compliments ou d’une liste d’attente, commencez par{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            valider l’idée avant de développer
          </Link>
          . Marketplace, grand public, santé, finance ou données très sensibles
          demandent en outre des analyses particulières.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "premier-client",
              label: "1. Choisir ce qu’il faut réellement tester",
            },
            {
              id: "tranche-verticale",
              label: "2. La checklist du premier client",
            },
            {
              id: "manuel-ou-automatique",
              label: "3. Faire à la main sans improviser",
            },
            {
              id: "offre-facturation-support",
              label: "4. Vendre et protéger le service",
            },
            { id: "mesure", label: "5. Mesurer avec un exemple concret" },
            { id: "dix-tests", label: "6. Autoriser ou reporter le lancement" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="premier-client">
          1. Choisissez ce que vous devez réellement tester
        </h2>

        <p>
          Imaginez sa première journée. Qui lui ouvre le compte ? Quelles
          données apporte-t-il ? Quelle tâche vient-il accomplir ? Que reçoit-il
          à la fin ? Et s’il se trompe ou reste bloqué, qui peut l’aider ? Ces
          questions définissent mieux la première version qu’un objectif
          arbitraire de cinq ou dix fonctionnalités.
        </p>

        <p>
          Le{" "}
          <a
            href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            produit minimum viable décrit par Eric Ries
          </a>{" "}
          sert à apprendre avec une version cohérente du produit. Il ne fixe pas
          de liste universelle. Pour un logiciel destiné aux entreprises,
          retenez une règle simple : le client doit obtenir le résultat promis
          et votre équipe doit pouvoir assurer le service sans bricolage
          dangereux.
        </p>

        <p>
          Écrivez la promesse en une phrase : « Un responsable dépose un devis,
          l’envoie à la bonne personne et obtient une décision qu’il peut
          retrouver plus tard. » Si vous avez besoin de plusieurs « et » pour la
          terminer, votre première version est probablement trop large.
        </p>

        <p>
          Rejouez ensuite le parcours complet : ouverture du compte, première
          donnée, résultat, erreur, demande d’aide, facturation et export. Vous
          n’avez pas à prévoir tous les cas futurs. Vous devez traiter ceux qui
          bloqueraient le travail, feraient perdre une donnée ou exposeraient
          les informations d’un autre client.
        </p>

        <h3 id="prototype-pilote-mvp">
          Prototype, essai client ou version vendable ?
        </h3>

        <p>
          Un prototype sert à montrer et comprendre une idée. Un test technique,
          parfois appelé POC, vérifie qu’une difficulté précise peut être
          surmontée. Un pilote fait travailler un vrai client avec votre aide.
          Un MVP exploitable peut être utilisé plusieurs fois sans que votre
          équipe improvise à chaque étape. Ne payez pas une version vendable si
          une maquette ou un pilote manuel suffit encore à répondre à votre
          question.
        </p>

        <GuideTable
          headers={["Format", "Quand l’utiliser", "Décision suivante"]}
          rows={[
            [
              "Test technique (POC)",
              "Vous devez vérifier une difficulté précise, avec des données fictives ou anonymisées.",
              "Poursuivre, changer d’approche ou arrêter.",
            ],
            [
              "Prototype",
              "Vous voulez montrer les écrans et vérifier que le parcours est compris.",
              "Corriger l’idée avant de développer.",
            ],
            [
              "Essai avec un client",
              "Un vrai client utilise la solution avec votre accompagnement.",
              "Automatiser ce qui se répète, corriger ou arrêter.",
            ],
            [
              "Première version vendable",
              "Le service doit fonctionner plusieurs fois avec de vraies données.",
              "Mesurer l’usage avant d’ajouter des fonctions.",
            ],
            [
              "Version élargie",
              "Plusieurs clients, rôles ou engagements sont déjà connus.",
              "Organiser les prochaines améliorations.",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works"
            target="_blank"
            rel="noopener noreferrer"
          >
            manuel de conception des services GOV.UK
          </a>{" "}
          recommande de tester d’abord ce qui pourrait faire échouer le projet
          et accepte la conclusion « ne pas construire ». Ce manuel concerne les
          services publics britanniques, pas tous les SaaS français, mais la
          règle reste utile : choisissez le test le moins coûteux qui permet
          réellement de décider.
        </p>

        <h2 id="tranche-verticale">
          2. Utilisez cette checklist pour servir le premier client
        </h2>

        <p>
          Une seule fonction métier peut suffire, à condition qu’un client
          puisse réellement l’utiliser. Des comptes sophistiqués, un paiement
          automatisé, une application mobile et dix tableaux de bord ne servent
          à rien si le résultat principal reste incomplet. Construisez donc un
          parcours court de bout en bout, plutôt que plusieurs fonctions à
          moitié terminées.
        </p>

        <FirstVersionChecklist />

        <p>
          Aucun de ces éléments ne compense les autres : une belle interface ne
          protège pas les données ; une sauvegarde jamais restaurée ne rassure
          pas ; un contrat signé ne montre pas que l’équipe saura débloquer le
          client. Si tout ne peut pas être prêt, lancez un essai accompagné
          plutôt qu’un service ouvert à tous.
        </p>

        <h2 id="manuel-ou-automatique">
          3. Faites à la main ce qui aide à apprendre, sans improviser
        </h2>

        <p>
          Faire une tâche à la main avec les premiers clients permet souvent de
          comprendre ce qu’il faudra automatiser. Cela devient dangereux si une
          seule personne sait le faire, si elle doit modifier directement les
          données du client ou si personne ne connaît la limite acceptable.
        </p>

        <GuideTable
          headers={[
            "Tâche",
            "Elle peut rester manuelle si…",
            "Automatisez lorsque…",
          ]}
          rows={[
            [
              "Création du compte",
              "Vous accompagnez quelques clients et notez chaque étape.",
              "Les clients doivent s’inscrire seuls ou les demandes se multiplient.",
            ],
            [
              "Import initial",
              "Les formats varient encore et vous contrôlez le résultat avec le client.",
              "Le volume ou la fréquence rend l’accompagnement trop lourd.",
            ],
            [
              "Facturation B2B",
              "Une personne relie facture, paiement et droit d’accès.",
              "L’achat autonome, les changements d’offre ou les impayés deviennent fréquents.",
            ],
            [
              "Support",
              "Le contact direct vous aide à comprendre les blocages.",
              "Les mêmes demandes reviennent ou le délai promis n’est plus tenable.",
            ],
            [
              "Rapport client",
              "Le format change encore selon le besoin du client.",
              "Le même rapport est demandé souvent et sans analyse particulière.",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Donnez une limite à chaque opération manuelle"
        >
          Notez qui s’en charge, comment, combien de temps cela prend et à
          partir de quel volume vous automatiserez. Exemple : « Nous importons
          les trois premiers fichiers avec le client. Lorsque le format est
          stabilisé ou que l’opération prend plus d’une demi-journée par
          semaine, nous créons l’import automatique. »
        </InfoBox>

        <h3 id="parcours-et-echecs">Testez aussi ce qui peut mal se passer</h3>

        <p>
          Rejouez d’abord le cas normal : le client entre ses informations,
          accomplit sa tâche et obtient un résultat qu’il peut utiliser. Testez
          ensuite les incidents les plus gênants. Le but n’est pas d’imaginer
          toutes les erreurs possibles, mais de vérifier que le client comprend
          ce qui se passe et que votre équipe peut reprendre la situation.
        </p>

        <ol>
          <li>
            <strong>Invitation expirée ou courriel non reçu :</strong> le client
            sait quoi faire et le support voit l’état réel.
          </li>
          <li>
            <strong>Rôle insuffisant ou trop large :</strong> l’action échoue
            clairement sans montrer les données d’un autre utilisateur.
          </li>
          <li>
            <strong>Donnée invalide, incomplète ou en double :</strong> elle
            n’entre pas silencieusement dans un calcul métier.
          </li>
          <li>
            <strong>Intégration indisponible :</strong> l’échec est visible,
            reprenable ou orienté vers une procédure manuelle définie.
          </li>
          <li>
            <strong>Traitement interrompu :</strong> le système évite le double
            effet et indique ce qui a réellement été fait.
          </li>
          <li>
            <strong>Paiement, contrat ou droit incohérent :</strong> l’accès ne
            dépend pas d’un voyant que personne ne réconcilie.
          </li>
          <li>
            <strong>Correction, export ou suppression demandée :</strong> la
            responsabilité et la sortie possible sont connues.
          </li>
        </ol>

        <p>
          Un message « une erreur est survenue » ne suffit pas. Le client doit
          savoir si son action a été prise en compte. Votre équipe doit pouvoir
          retrouver le compte concerné, l’étape bloquée et la cause utile sans
          voir de mot de passe ni modifier directement la base de données. Une
          fois la correction faite, elle doit pouvoir vérifier que tout
          fonctionne.
        </p>

        <h3 id="operateur">
          Donnez à votre équipe les moyens d’aider le client
        </h3>

        <p>
          On pense souvent aux écrans du client et on oublie ceux de l’équipe
          qui devra l’aider. Une interface interne d’administration, souvent
          appelée back-office, n’est pas toujours indispensable au premier
          lancement. En revanche, votre équipe doit pouvoir effectuer sans
          danger les actions suivantes :
        </p>

        <ul>
          <li>
            retrouver une organisation, ses utilisateurs, son offre et ses
            droits ;
          </li>
          <li>
            voir l’état d’un import, d’un calcul, d’un envoi ou d’une
            synchronisation ;
          </li>
          <li>
            inviter, suspendre ou modifier un rôle dans les limites prévues ;
          </li>
          <li>
            relancer ou corriger une opération explicitement conçue pour l’être
            ;
          </li>
          <li>
            identifier une erreur sans révéler mot de passe, jeton ou donnée
            inutile ;
          </li>
          <li>
            enregistrer l’intervention, son auteur, sa raison et son résultat ;
          </li>
          <li>
            orienter l’incident vers la bonne personne et savoir quand arrêter
            le service.
          </li>
        </ul>

        <p>
          Pendant un essai avec quelques clients, une procédure écrite et un
          outil d’administration protégé peuvent suffire. En revanche, demander
          à une personne de modifier directement les données réelles, sans
          contrôle, sans historique et sans retour en arrière, n’est pas une
          économie : c’est un risque pour le client et pour votre entreprise.
        </p>

        <h2 id="offre-facturation-support">
          4. Choisissez comment le client achète et comment ses données sont
          protégées
        </h2>

        <p>
          Un premier client qui signe un contrat et reçoit une facture n’a pas
          besoin du même parcours qu’un inconnu qui s’abonne seul par carte. Ne
          développez pas un système d’achat complet par réflexe : choisissez le
          mode qui correspond à votre manière réelle de vendre aujourd’hui.
        </p>

        <GuideTable
          headers={[
            "Mode de vente",
            "À prévoir maintenant",
            "Ajoutez la suite lorsque…",
          ]}
          rows={[
            [
              "Premier client sous contrat",
              "Contrat, facture habituelle, activation du compte, aide directe et possibilité de récupérer ses données.",
              "Les tâches manuelles se répètent ou vous devez vendre sans intervenir.",
            ],
            [
              "Abonnement avec mise en route accompagnée",
              "Paiement, droits d’accès, gestion d’un échec de paiement, notifications et aide au démarrage.",
              "Le nombre de nouveaux clients justifie d’automatiser l’accueil.",
            ],
            [
              "Libre-service complet",
              "Inscription, récupération du compte, paiement, abonnement, aide et suivi de l’usage.",
              "Un client réel réclame des fonctions plus complexes pour son entreprise.",
            ],
          ]}
        />

        <p>
          Si vous facturez encore quelques clients professionnels à la main,
          vous n’avez pas besoin d’intégrer un paiement en ligne pour lancer le
          service. Si vous choisissez Stripe Checkout, sa{" "}
          <a
            href="https://docs.stripe.com/payments/checkout/build-subscriptions"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation sur les abonnements
          </a>{" "}
          confirme que le retour du navigateur ne prouve pas, à lui seul, que le
          paiement est terminé. Testez au minimum le paiement accepté, refusé ou
          annulé, le remboursement et les droits accordés au client.
        </p>
        <p>
          Confier la saisie de la carte à un prestataire réduit ce que votre
          application doit manipuler, mais ne supprime pas toutes vos
          responsabilités ; le{" "}
          <a
            href="https://www.pcisecuritystandards.org/faqs/1092/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PCI Security Standards Council
          </a>{" "}
          précise les points à confirmer avec l’établissement qui gère vos
          paiements.
        </p>

        <h3 id="confiance">
          Le mot « MVP » ne suspend pas les responsabilités
        </h3>

        <p>
          Lorsque le produit traite des données personnelles, le Règlement
          général sur la protection des données (RGPD) et notamment ses articles{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            5, 25 et 32
          </a>{" "}
          encadrent notamment le but de la collecte, la limitation des données,
          la protection dès la conception et les mesures adaptées au risque. Les
          obligations exactes dépendent de l’usage des données : le consentement
          n’est pas la base légale universelle, toute première version n’exige
          pas automatiquement une analyse d’impact, et une donnée chiffrée n’est
          pas pour autant anonyme.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide de la CNIL destiné aux développeurs
          </a>{" "}
          recommande notamment de maîtriser comptes et habilitations, de séparer
          code, configuration et secrets, et de privilégier des données de test
          fictives ou anonymisées. Pour votre première version, transformez ces
          principes en décisions concrètes : données réellement nécessaires,
          personnes autorisées, fournisseurs, durée, export, suppression et
          procédure d’incident.
        </p>

        <p>
          Côté continuité, une sauvegarde affichée en vert ne prouve pas qu’elle
          restaurera le service. Le{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide de sauvegarde de l’ANSSI, version 1.1
          </a>{" "}
          relie la stratégie aux objectifs métier et aux tests de restauration.
          Définissez ce qui doit revenir, quelle perte est acceptable dans votre
          contexte, qui lance l’opération et comment le résultat est contrôlé.
        </p>

        <p>
          Avant le premier client, demandez des preuves sur six situations
          simples :
        </p>
        <ul>
          <li>
            un salarié de l’entreprise A ne voit aucune donnée de l’entreprise B
            ;
          </li>
          <li>
            aucun mot de passe ni numéro de carte n’apparaît dans les journaux
            techniques ;
          </li>
          <li>une personne peut utiliser les écrans au clavier ;</li>
          <li>les champs et les erreurs sont compréhensibles ;</li>
          <li>le service reste utilisable sur téléphone ;</li>
          <li>une sauvegarde peut réellement être restaurée.</li>
        </ul>
        <p>
          Les référentiels OWASP et WCAG cités dans les sources aident l’équipe
          technique à préparer ces tests, mais leurs sigles ne remplacent pas
          les résultats.
        </p>

        <InfoBox
          variant="amber"
          title="Une liste de contrôles ne garantit pas la conformité"
        >
          Les contrôles ci-dessus doivent être adaptés aux données, aux
          utilisateurs et aux engagements du produit. Ils ne prouvent à eux
          seuls ni conformité juridique, ni accessibilité complète, ni sécurité
          absolue. Demandez ce qui a été testé, comment et avec quel résultat.
        </InfoBox>

        <h2 id="mesure">5. Mesurez seulement ce qui aide à décider</h2>

        <p>
          Avec un ou quelques clients, les grands pourcentages ne veulent pas
          encore dire grand-chose. Cherchez des réponses simples : le client
          obtient-il le résultat promis ? En combien de temps ? Où reste-t-il
          bloqué ? Combien d’heures votre équipe passe-t-elle à l’aider ?
        </p>

        <GuideTable
          headers={[
            "Mesure",
            "Définition à écrire",
            "Décision qu’elle éclaire",
          ]}
          rows={[
            [
              "Premier résultat obtenu",
              "Nombre de clients ayant terminé la tâche principale dans le délai choisi.",
              "Simplifier l’accueil, le parcours ou la promesse.",
            ],
            [
              "Délai avant valeur",
              "Temps entre l’ouverture du compte et le premier résultat utilisable.",
              "Retirer, préparer ou accompagner certaines étapes.",
            ],
            [
              "Répétition utile",
              "Le client revient-il faire cette tâche au rythme prévu ?",
              "Distinguer un usage durable d’un simple essai.",
            ],
            [
              "Blocages",
              "Étape abandonnée, message d’erreur et contexte nécessaire pour comprendre.",
              "Corriger le produit, les données ou l’accompagnement.",
            ],
            [
              "Temps d’aide par client",
              "Durée et nature des interventions manuelles pour chaque entreprise.",
              "Automatiser, adapter le prix ou limiter l’essai.",
            ],
          ]}
        />

        <p>
          Un compte créé ou une connexion ne prouvent pas que le service est
          utile. Mesurez l’action qui correspond au résultat vendu : un devis
          approuvé, un rapport produit ou une commande traitée, par exemple.
          Pour un logiciel vendu aux entreprises, regardez aussi le résultat
          obtenu par l’entreprise entière lorsque plusieurs personnes
          interviennent.
        </p>

        <h3 id="exemple">Exemple fictif : de 27 demandes à un seul parcours</h3>

        <p>
          <strong>Exemple illustratif fictif :</strong> une entreprise imagine
          un SaaS vendu aux entreprises (B2B) pour approuver des devis. Sa liste
          initiale contient 27 demandes, depuis l’application mobile jusqu’au
          SSO. Ce nombre sert uniquement à rendre le cas lisible ; il ne
          constitue ni une moyenne de marché, ni un cas client Hagnéré Code.
        </p>

        <p>
          L’hypothèse du premier lot est plus précise : « un responsable reçoit
          un devis, le transmet à l’approbateur désigné, obtient une décision
          traçable et réduit les relances hors outil ». Le premier client
          accepte une création de compte et un import accompagnés. Il exige en
          revanche que les décisions soient attribuées, que les rôles soient
          séparés et que l’historique puisse sortir.
        </p>

        <GuideTable
          headers={[
            "Décision",
            "Ce que contient l’exemple",
            "Comment vérifier ou décider la suite",
          ]}
          rows={[
            [
              "Construire",
              "invitation, dépôt du devis, circuit unique, notification, décision, historique, droits minimaux et administration",
              "Un devis représentatif va du dépôt à la décision sans revenir aux courriels.",
            ],
            [
              "Faire à la main au début",
              "Création de l’entreprise, import initial, accueil, facture et aide directe.",
              "Chaque action est notée et le temps passé par client est mesuré.",
            ],
            [
              "Intégrer",
              "Envoi des courriels, hébergement et gestion des comptes adaptés au risque.",
              "Les propriétaires des comptes, les contrats, les erreurs et la sortie sont vérifiés.",
            ],
            [
              "Garder pour plus tard",
              "connexion unique d’entreprise (SSO), application mobile, interface ouverte aux logiciels tiers (API publique), marque blanche, trois plans, dix rôles et tableaux avancés",
              "Un contrat, un usage mobile réel ou un volume important justifie de les ajouter.",
            ],
          ]}
        />

        <p>
          Cette première version est cohérente parce que chaque élément sert le
          même résultat et que chaque fonction repoussée répond à un besoin qui
          n’existe pas encore. Si le premier client exige la connexion unique
          d’entreprise, ou SSO, dans son contrat, le classement change. Si
          personne n’utilise l’historique, le problème se situe peut-être dans
          la promesse ou le parcours, pas dans l’absence d’un tableau de bord.
        </p>

        <h2 id="dix-tests">6. Autorisez ou reportez le premier lancement</h2>

        <p>
          Cette liste doit être adaptée à votre produit. Elle ne garantit ni la
          sécurité ni l’absence d’incident. Elle donne six vérifications
          concrètes avant d’utiliser de vraies données client.
        </p>

        <ol>
          <li>
            <strong>Comptes et droits :</strong> créer l’entreprise, inviter
            puis retirer une personne et vérifier qu’un rôle refusé ne voit
            aucune donnée interdite.
          </li>
          <li>
            <strong>Données :</strong> importer un jeu représentatif avec une
            valeur invalide et vérifier la correction puis l’export.
          </li>
          <li>
            <strong>Résultat vendu :</strong> accomplir la tâche principale avec
            le client et comparer le résultat au critère écrit.
          </li>
          <li>
            <strong>Échec et aide :</strong> provoquer un incident prévu, puis
            le diagnostiquer et reprendre sans exposer de secret ni modifier les
            données au hasard.
          </li>
          <li>
            <strong>Vente :</strong> vérifier que contrat ou paiement, droits
            d’accès, facture et sortie restent cohérents.
          </li>
          <li>
            <strong>Continuité et décision :</strong> restaurer selon le plan,
            contrôler les mesures utiles et décider ce qui sera corrigé,
            automatisé ou arrêté.
          </li>
        </ol>

        <p>
          Conservez pour chaque test : contexte, données utilisées, résultat
          attendu, résultat observé, auteur, date, anomalie et décision. Une
          simple case cochée sans résultat conservé ne rendra pas un devis
          comparable et ne facilitera pas la reprise par une autre équipe.
        </p>

        <h3 id="contrat-premier-client">Résumez ce que le client achète</h3>

        <p>
          Avant de demander un prix, rédigez une fiche d’une page. Ce n’est pas
          le contrat juridique : elle sert à vérifier que vous, le client et le
          prestataire parlez bien de la même première version.
        </p>

        <div className="not-prose my-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 sm:p-6">
          <p className="mb-4 font-bold text-zinc-950 dark:text-white">
            Première version pour le client — modèle à copier
          </p>
          <ol className="m-0 space-y-3 pl-5">
            <li>
              <strong>Client, rôles et résultat :</strong> qui achète, qui
              utilise, ce qu’il doit réussir et qui l’aide.
            </li>
            <li>
              <strong>Parcours retenu :</strong> point de départ, tâche,
              résultat, ce qui fonctionne maintenant et ce qui reste manuel.
            </li>
            <li>
              <strong>Données et continuité :</strong> provenance, accès,
              fournisseurs, sauvegarde, correction, export et sortie.
            </li>
            <li>
              <strong>Vente et aide :</strong> contrat ou paiement, droits,
              canal de contact, personne à prévenir et limites de l’essai.
            </li>
            <li>
              <strong>Mesure et suite :</strong> résultat, erreurs, temps
              manuel, fonctions exclues et date de la prochaine décision.
            </li>
          </ol>
        </div>

        <p>
          Demandez ensuite à chaque devis de préciser ce que le prestataire
          construit, ce que votre entreprise prend en charge et ce qui est
          exclu. Faites apparaître les accès, la propriété des comptes, la
          reprise des données, les tests, la surveillance, les sauvegardes, la
          maintenance et la récupération de vos données. Deux prix ne sont
          comparables que si ces responsabilités sont identiques.
        </p>

        <h3 id="decision">Choisissez la version la plus simple</h3>

        <GuideTable
          headers={[
            "Décision",
            "Comment reconnaître le bon cas",
            "Prochaine action utile",
          ]}
          rows={[
            [
              "Prototype ou POC",
              "Vous devez encore vérifier si le parcours est compris ou si une difficulté technique peut être résolue, sans données réelles.",
              "Tester cette seule question et accepter de ne pas conserver le prototype.",
            ],
            [
              "Pilote accompagné",
              "Un client réel doit essayer le service, mais votre équipe peut encore effectuer quelques tâches à la main.",
              "Écrire les procédures, la limite de temps acceptable et la décision attendue.",
            ],
            [
              "Première version utilisable",
              "La tâche principale et les sept points de la première version fonctionnent à un niveau adapté au risque réel.",
              "Effectuer les six vérifications, commencer avec peu de clients et observer l’usage.",
            ],
            [
              "Reporter ou acheter",
              "Vous n’avez pas de client prêt à essayer, un outil existant suffit ou la question peut être testée sans logiciel.",
              "Tester avec l’outil ou le service le moins coûteux avant de développer.",
            ],
          ]}
        />

        <InfoBox
          variant="emerald"
          title="Quand Hagnéré Code est adapté — et quand il ne l’est pas"
        >
          <p className="mb-2">
            <strong>Cas adapté :</strong> problème B2B déjà documenté, premier
            client accessible, tâche métier différenciante, responsable produit
            disponible et besoin de construire une première version réellement
            utilisable.
          </p>
          <p className="mb-0">
            <strong>Cas inadapté :</strong> aucun prospect accessible, besoin
            correctement couvert par un outil existant, attente d’une garantie
            commerciale, copie d’un produit existant, secteur réglementé sans
            compétences adaptées ou indisponibilité totale du métier pendant la
            recette et le support initial. Dans ces cas, le bon conseil peut
            être de ne pas développer maintenant.
          </p>
        </InfoBox>

        <GuideInlineCTA
          title="Savoir quoi construire pour votre premier client"
          description="Décrivez le client visé, ce qu’il doit réussir et ce que votre équipe peut encore gérer à la main. Nous vous aidons à séparer ce qui doit fonctionner au lancement de ce qui peut attendre — y compris si un simple essai accompagné suffit."
          tags={[
            "Première version claire",
            "Budget concentré sur l’essentiel",
            "Possibilité de commencer par un essai",
          ]}
          ctaLabel="Définir ma première version"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources originales et limites</h2>

        <p>
          Sources consultées le 20 juillet 2026. Les méthodes produit aident à
          formuler une expérience ; elles ne garantissent pas la réussite. Les
          textes et guides de sécurité, données, paiement et accessibilité
          doivent être appliqués au produit, au contrat, aux utilisateurs et à
          la juridiction réels. Ce guide n’est ni un avis juridique, ni un audit
          de sécurité, ni une certification.
        </p>

        <ul>
          <li>
            <a
              href="https://leanstartup.co/resources/articles/what-is-an-mvp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eric Ries — What is an MVP?
            </a>{" "}
            : principe d’apprentissage avec un produit minimum cohérent.
          </li>
          <li>
            <a
              href="https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK Service Manual — How the alpha phase works
            </a>{" "}
            : test des hypothèses risquées dans le contexte des services publics
            britanniques.
          </li>
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Règlement général sur la protection des données
            </a>{" "}
            : articles 5, 25 et 32, dans le périmètre des données personnelles.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Guide RGPD du développeur
            </a>{" "}
            : pratiques de développement à contextualiser.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1
            </a>{" "}
            : objectifs métier et tests de restauration.
          </li>
          <li>
            <a
              href="https://owasp.org/www-project-application-security-verification-standard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP Application Security Verification Standard 5.0
            </a>{" "}
            et{" "}
            <a
              href="https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP Logging Cheat Sheet
            </a>
            : référentiels techniques non certifiants.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/payments/checkout/build-subscriptions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — Build a subscriptions integration with Checkout
            </a>{" "}
            et{" "}
            <a
              href="https://www.pcisecuritystandards.org/faqs/1092/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PCI SSC FAQ 1092
            </a>
            : cycle d’abonnement Stripe et périmètre PCI du paiement
            externalisé.
          </li>
          <li>
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3C — Web Content Accessibility Guidelines 2.2
            </a>
            : critères techniques d’accessibilité, distincts d’une analyse
            juridique française complète.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
