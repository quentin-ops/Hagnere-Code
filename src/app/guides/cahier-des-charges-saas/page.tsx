import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { SaasSpecificationKit } from "@/components/guides/SaasSpecificationKit";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("cahier-des-charges-saas");

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
        alt: "Cahier de décision SaaS, exemple et comparaison de trois offres",
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
      name: "Cahier des charges SaaS",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quand faut-il rédiger un cahier des charges SaaS ?",
    answer:
      "Quand le problème, l’acheteur et le premier résultat utile ont déjà été observés, et que vous devez faire chiffrer le même produit par plusieurs prestataires. Si la demande ou le parcours reste incertain, un test manuel, un prototype ou une étude ciblée produit souvent une meilleure preuve qu’un long document.",
  },
  {
    question: "Combien de pages doit faire le document ?",
    answer:
      "Il n’existe pas de longueur universelle. Une première version simple peut tenir dans un dossier court si les décisions, exclusions, erreurs, données, tests, responsabilités et coûts sont explicites. Un projet réglementé, une migration complexe ou plusieurs intégrations peuvent exiger des annexes spécialisées.",
  },
  {
    question: "Le dirigeant doit-il choisir l’architecture technique ?",
    answer:
      "Non. Il doit décrire le résultat métier, les utilisateurs, les volumes connus, les contraintes et les preuves attendues. Le prestataire propose ensuite une architecture, explique ses compromis et montre comment elle sera testée.",
  },
  {
    question: "Un cahier des charges permet-il d’obtenir un prix ferme ?",
    answer:
      "Il peut sécuriser un forfait lorsque le périmètre est stable, testable et suffisamment compris. Si une inconnue peut déplacer fortement le prix, le délai, la sécurité ou la migration, mieux vaut l’isoler dans une étude ou une phase plafonnée que la cacher derrière un faux prix ferme.",
  },
  {
    question: "Que faut-il comparer entre trois devis SaaS ?",
    answer:
      "Comparez le même parcours, les mêmes volumes, la migration, l’exploitation, la maintenance, les services tiers, le temps de votre équipe et la sortie sur le même horizon. Un poste inconnu doit rester visible : il ne vaut jamais zéro par défaut.",
  },
  {
    question: "Combien de temps l’entreprise doit-elle réserver ?",
    answer:
      "Cela dépend du produit. L’exemple DossierClair mobilise fictivement 21 heures de décision, d’observation métier, de conformité et de test avant consultation, puis environ 9 h 20 pour jouer 30 tests et en rejouer 8 après correction. Ces nombres expliquent la méthode ; ils ne constituent pas une norme.",
  },
  {
    question: "Le cahier des charges remplace-t-il le contrat ?",
    answer:
      "Non. Il décrit le produit, les hypothèses et les preuves. Les droits, engagements de service, responsabilités RGPD, garanties, pénalités, fiscalité et conditions de sortie doivent être repris et vérifiés dans les documents contractuels adaptés.",
  },
  {
    question: "Comment garder le document à jour après signature ?",
    answer:
      "Conservez une version de référence et un registre simple : changement demandé, motif, hypothèse touchée, effets sur la valeur, le coût, le délai, la sécurité et l’exploitation, options examinées, décideur et date d’effet. Une modification orale importante ne doit pas devenir la nouvelle référence.",
  },
];

const buildChoices = [
  {
    title: "Acheter un logiciel existant",
    when: "Le besoin critique est standard et le paramétrage ne crée pas un contournement majeur.",
    proof:
      "Essai sur un vrai dossier, coût à 24 mois, export et conditions de sortie.",
  },
  {
    title: "Assembler des outils",
    when: "Le volume reste modeste et quelques formulaires, automatisations ou bases couvrent le parcours.",
    proof:
      "Test de bout en bout, responsable des erreurs et coût de maintenance de l’assemblage.",
  },
  {
    title: "Tester le service manuellement",
    when: "Le risque principal porte encore sur la demande, le prix ou l’acceptation du parcours.",
    proof:
      "Clients réels, temps observé, refus, répétitions et décision de poursuivre ou d’arrêter.",
  },
  {
    title: "Construire sur mesure",
    when: "Le processus crée un avantage réel et les solutions existantes échouent sur une étape décisive.",
    proof:
      "Problème mesuré, alternatives écartées, premier périmètre et budget d’apprentissage autorisé.",
  },
  {
    title: "Attendre ou arrêter",
    when: "L’offre, le processus, les données ou l’acheteur restent trop flous pour évaluer le logiciel.",
    proof: "Question précise à résoudre avant toute nouvelle dépense.",
  },
];

const dossierClairBaseline = [
  ["24 dossiers", "observés pendant quatre semaines"],
  ["52 minutes", "de travail actif médian par dossier"],
  ["5 sur 24", "renvoyés pour information manquante, soit 20,8 %"],
  ["2 heures", "par semaine pour consolider statuts et relances"],
];

const dossierClairTargets = [
  "au moins 20 dossiers par mois traversent le parcours complet ;",
  "le temps actif médian descend à 35 minutes ou moins ;",
  "au plus 2 dossiers sur 24 reviennent pour information manquante ;",
  "la consolidation hebdomadaire reste sous 45 minutes ;",
  "aucun test ne révèle d’accès entre deux entreprises ;",
  "l’équipe sait exporter les données et restaurer le scénario convenu.",
];

const preparationRows = [
  ["Fondatrice — décision et arbitrages", "8 h", "75 €/h", "600 €"],
  ["Léa — observation du travail réel", "6 h", "45 €/h", "270 €"],
  ["Référent conformité", "3 h", "60 €/h", "180 €"],
  ["Utilisateurs pilotes", "4 h", "50 €/h", "200 €"],
];

const clientLife = [
  {
    step: "1",
    title: "Acheter",
    text: "Qui signe, qui paie, quand l’espace est ouvert et que voit le client si le paiement reste en attente ?",
  },
  {
    step: "2",
    title: "Inviter",
    text: "Qui crée les utilisateurs, quels droits reçoivent-ils et comment un accès est-il retiré ?",
  },
  {
    step: "3",
    title: "Réaliser le travail vendu",
    text: "Quelle action justifie l’abonnement, quelles règles la bloquent et quel résultat peut être contrôlé ?",
  },
  {
    step: "4",
    title: "Traverser une erreur",
    text: "Que se passe-t-il si un lien expire, qu’un événement arrive deux fois ou qu’un service tiers tombe ?",
  },
  {
    step: "5",
    title: "Exploiter",
    text: "Qui répond, surveille, restaure, corrige et informe lorsque le service ne fonctionne plus normalement ?",
  },
  {
    step: "6",
    title: "Sortir",
    text: "Que récupèrent l’entreprise cliente et le fondateur, dans quel format, sous quel délai et à quel coût ?",
  },
];

const uncertaintyScenarios = [
  {
    title: "Risque réduit de 15 points",
    detail: "30 % avant, 15 % après",
    avoided: "1 815 € de perte attendue évitée",
    result:
      "L’étude coûte encore 885 € de plus : elle ne gagne pas par ce calcul.",
  },
  {
    title: "Risque réduit de 30 points",
    detail: "40 % avant, 10 % après",
    avoided: "3 630 € de perte attendue évitée",
    result: "Le solde devient favorable de 930 € dans ce scénario.",
  },
  {
    title: "Risque réduit de 50 points",
    detail: "70 % avant, 20 % après",
    avoided: "6 050 € de perte attendue évitée",
    result: "Le solde devient favorable de 3 350 € dans ce scénario.",
  },
];

const offerSummaries = [
  {
    name: "Offre A — prix d’entrée bas",
    initial: "57 000 €",
    recurring: "58 200 €",
    exit: "8 000 €",
    total: "123 200 €",
    strength:
      "Peut gagner si la trésorerie initiale domine et si les services récurrents sont réellement renégociables.",
  },
  {
    name: "Offre B — périmètre intégré",
    initial: "62 000 €",
    recurring: "44 700 €",
    exit: "5 000 €",
    total: "111 700 €",
    strength:
      "La somme arithmétique saisie est la plus basse dans cet exemple, sans classement tant que des coûts importants restent inconnus.",
  },
  {
    name: "Offre C — étude puis étapes",
    initial: "64 000 €",
    recurring: "50 899,92 €",
    exit: "6 000 €",
    total: "120 899,92 €",
    strength:
      "Peut gagner lorsque l’inconnue technique ou métier justifie une première décision réversible.",
  },
];

type SpecificationBlockProps = {
  decision: string;
  exclusion: string;
  proof: string;
  owner: string;
};

function SpecificationBlock({
  decision,
  exclusion,
  proof,
  owner,
}: SpecificationBlockProps) {
  const items = [
    {
      label: "Décision",
      text: decision,
      color: "border-blue-200 dark:border-blue-900",
    },
    {
      label: "Exclusion",
      text: exclusion,
      color: "border-zinc-200 dark:border-zinc-800",
    },
    {
      label: "Preuve attendue",
      text: proof,
      color: "border-emerald-200 dark:border-emerald-900",
    },
    {
      label: "Responsable",
      text: owner,
      color: "border-amber-200 dark:border-amber-900",
    },
  ];

  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-xl border bg-white p-4 dark:bg-zinc-950 ${item.color}`}
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            {item.label}
          </p>
          <p className="mb-0 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
            {item.text}
          </p>
        </div>
      ))}
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
          { label: "Cahier des charges SaaS" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vérifiez d’abord que le sur-mesure est la bonne décision, puis préparez un dossier compréhensible, des tests concrets et une comparaison de trois offres sur le même horizon."
        heroAction={{ href: "#kit", label: "Utiliser le modèle" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "1 cas SaaS rempli",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "3 offres comparées",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Modèle local à exporter",
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
            label: "Valider la demande avant de rédiger le dossier",
          },
          {
            href: "/guides/prioriser-fonctionnalites-mvp-saas",
            label: "Choisir le petit périmètre qui mérite d’être construit",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Comprendre ensuite les facteurs de coût d’un SaaS",
          },
          {
            href: "/guides/facturation-abonnements-saas",
            label: "Approfondir le cycle facturation, paiement et accès",
          },
          {
            href: "/guides/securite-saas-b2b",
            label: "Préparer les preuves de sécurité demandées en B2B",
          },
          {
            href: "/guides/rgpd-saas-b2b",
            label: "Cadrer les décisions RGPD du SaaS",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Comparer les modes de maintenance après lancement",
          },
        ]}
        faqTitle="Cahier des charges SaaS : les questions avant consultation"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous avez une idée de logiciel en ligne et vous devez maintenant
          expliquer ce qu’il faut construire, obtenir des devis comparables et
          éviter les oublis qui apparaissent une fois le développement engagé.
          Le bon document ne commence pas par cinquante fonctionnalités. Il
          commence par une décision : faut-il acheter un outil existant,
          assembler quelques services, tester le travail manuellement ou
          financer un SaaS sur mesure ?
        </p>
        <p>
          Si le sur-mesure se justifie, ce guide vous aide à raconter la vie
          complète d’une entreprise cliente, de l’achat à la récupération de ses
          données. Vous verrez un exemple fictif rempli, le temps à réserver,
          les erreurs à tester et trois propositions comparées sur 24 mois. Si
          l’acheteur, le problème ou le premier résultat reste incertain, notre
          avis est simple : ne consultez pas encore des développeurs. Testez
          d’abord l’hypothèse qui peut faire tomber le projet.
        </p>

        <GuideToc
          items={[
            { id: "bon-moment", label: "1. Construire ou choisir autre chose" },
            { id: "dossierclair", label: "2. Le cas DossierClair" },
            { id: "preparation", label: "3. Le temps à réserver" },
            { id: "achat", label: "4. La vie complète du client" },
            { id: "comptes", label: "5. Comptes, droits et données" },
            { id: "action", label: "6. Le résultat vendu et mesuré" },
            { id: "echecs", label: "7. Inconnues et erreurs coûteuses" },
            { id: "exploitation", label: "8. Exploitation et spécialistes" },
            { id: "donnees", label: "9. Migration et mise en service" },
            { id: "sortie", label: "10. Les deux sorties à prévoir" },
            { id: "reponse", label: "11. Comparer trois offres" },
            { id: "changements", label: "12. Versions et changements" },
            {
              id: "mesure",
              label: "13. Tests d’acceptation et décision à 90 jours",
            },
            { id: "kit", label: "14. Modèle et comparateur local" },
          ]}
        />

        <h2 id="bon-moment">
          1. Avant le cahier des charges, vérifiez que construire est la bonne
          décision
        </h2>
        <p>
          Un document peut être très précis et formaliser une mauvaise idée. La
          première question n’est donc pas « quelles pages faut-il prévoir ? »,
          mais « pourquoi une nouvelle application est-elle préférable aux
          solutions déjà disponibles ? ». Comparez les cinq voies ci-dessous
          avant d’engager un devis.
        </p>
        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {buildChoices.map((choice, index) => (
            <article
              key={choice.title}
              className={`rounded-2xl border p-5 ${
                index === buildChoices.length - 1
                  ? "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20 md:col-span-2"
                  : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
              }`}
            >
              <p className="mb-2 text-base font-bold text-zinc-950 dark:text-white">
                {choice.title}
              </p>
              <p className="mb-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Quand cette voie tient :</strong> {choice.when}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <strong>Preuve avant décision :</strong> {choice.proof}
              </p>
            </article>
          ))}
        </div>
        <InfoBox
          variant="blue"
          title="Notre position — et notre conflit d’intérêt"
        >
          Hagnéré Code vend du développement sur mesure : nous avons donc un
          intérêt économique évident à ce qu’un projet soit construit. La règle
          professionnelle qui protège le client est l’inverse : si un outil
          existant couvre le besoin décisif, si un service manuel peut encore
          tester la demande ou si le problème vient d’abord du processus, nous
          déconseillons de financer le développement à ce stade. Le sur-mesure
          gagne lorsque le logiciel porte réellement l’avantage recherché et que
          les alternatives ont été essayées sur le travail réel.
        </InfoBox>
        <p>
          Ce guide suppose donc que le problème et le premier résultat ont déjà
          été observés. Sinon, commencez par{" "}
          <Link href="/guides/valider-idee-saas-avant-developper">
            valider l’idée SaaS
          </Link>
          . Si la demande existe mais que la première version reste trop large,
          utilisez la{" "}
          <Link href="/guides/prioriser-fonctionnalites-mvp-saas">
            méthode de priorisation du MVP
          </Link>
          .
        </p>

        <h2 id="dossierclair">
          2. DossierClair : du problème mesuré à la décision de construire
        </h2>
        <InfoBox variant="amber" title="Exemple entièrement fictif">
          DossierClair, Atelier Nord, Studio Rivage, Claire et Léa sont
          inventés. Les volumes, temps, coûts, notes et objectifs illustrent une
          méthode. Ils ne décrivent ni un client Hagnéré Code, ni un prix de
          marché, ni un résultat promis.
        </InfoBox>
        <p>
          Une fondatrice envisage DossierClair, un logiciel en ligne pour de
          petites sociétés de conseil. Chez Atelier Nord, l’une des entreprises
          pilotes, Claire administre l’espace et Léa réalise le travail métier :
          Claire crée et affecte le dossier, Léa le complète, puis Claire le
          renvoie ou le valide. Studio Rivage est une seconde entreprise fictive
          utilisée pour vérifier que les données restent séparées.
        </p>
        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <p className="mb-4 text-lg font-bold text-zinc-950 dark:text-white">
            Ce qui a été observé avant de construire
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {dossierClairBaseline.map(([value, label]) => (
              <div
                key={value}
                className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="mb-1 text-xl font-black text-violet-700 dark:text-violet-300">
                  {value}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p className="mb-0 mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
            Le temps d’attente du client n’est pas mesuré : il reste une
            inconnue, au lieu d’être remplacé par zéro.
          </p>
        </div>
        <p>
          Le pilote vise trois entreprises. Si les résultats sont concluants, la
          fondatrice envisage 30 entreprises au terme de la première année, avec
          cinq utilisateurs par entreprise, environ 2 000 dossiers actifs et 20
          000 archivés. La première version reste une application web sans
          application mobile native, sans pièces jointes libres, sans connexion
          unique d’entreprise et sans rôles personnalisables.
        </p>
        <p>
          À 90 jours, la fondatrice ne demande pas seulement si « le logiciel
          fonctionne ». Elle vérifie des changements observables :
        </p>
        <ul>
          {dossierClairTargets.map((target) => (
            <li key={target}>{target}</li>
          ))}
        </ul>
        <InfoBox variant="amber" title="Une cible n’est pas une prophétie">
          Si moins de dix dossiers réels traversent le parcours, si plus de la
          moitié nécessite encore une reprise hors outil ou si le gain vient
          seulement d’un renfort humain temporaire, la fondatrice ne finance pas
          automatiquement la suite. Elle peut corriger l’hypothèse, réduire le
          produit, revenir au service manuel ou arrêter.
        </InfoBox>

        <h2 id="preparation">
          3. Réservez le temps des bonnes personnes avant de demander des devis
        </h2>
        <p>
          Le cahier des charges ne peut pas être délégué entièrement au
          développeur. Le dirigeant décide le résultat et les limites ; les
          personnes qui font le travail révèlent les exceptions ; le prestataire
          explique la solution et ses compromis. Dans l’exemple, la préparation
          mobilise 21 heures.
        </p>
        <div className="not-prose my-7 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <div className="hidden grid-cols-[2fr_0.7fr_0.8fr_0.8fr] gap-3 bg-zinc-950 px-5 py-3 text-xs font-bold uppercase tracking-wide text-zinc-300 sm:grid">
            <span>Contribution fictive</span>
            <span>Temps</span>
            <span>Coût horaire estimé</span>
            <span>Coût interne estimé</span>
          </div>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {preparationRows.map(([role, time, rate, amount]) => (
              <div
                key={role}
                className="grid gap-2 bg-white px-5 py-4 text-sm dark:bg-zinc-950 sm:grid-cols-[2fr_0.7fr_0.8fr_0.8fr] sm:gap-3"
              >
                <span className="font-semibold text-zinc-950 dark:text-white">
                  {role}
                </span>
                <span className="text-zinc-600 dark:text-zinc-300">
                  <span className="sm:hidden">Temps : </span>
                  {time}
                </span>
                <span className="text-zinc-600 dark:text-zinc-300">
                  <span className="sm:hidden">Coût horaire estimé : </span>
                  {rate}
                </span>
                <span className="font-semibold text-zinc-950 dark:text-white">
                  <span className="sm:hidden">Coût interne estimé : </span>
                  {amount}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 bg-emerald-50 px-5 py-4 text-sm font-bold text-emerald-950 dark:bg-emerald-950/20 dark:text-emerald-200">
              <span>Total fictif</span>
              <span>21 h · 1 250 € de temps interne valorisé</span>
            </div>
          </div>
        </div>
        <p>
          Le calcul est transparent :{" "}
          <code>8 × 75 + 6 × 45 + 3 × 60 + 4 × 50 = 1 250</code>. Ce coût
          interne n’est pas forcément une facture ni une sortie de trésorerie.
          Il rappelle simplement qu’un projet mobilise l’entreprise. Si aucun
          décideur ne peut répondre rapidement et si aucun utilisateur ne peut
          tester, le devis le plus détaillé ne compensera pas cette absence.
        </p>

        <h2 id="achat">
          4. Racontez la vie complète du client, pas une liste d’écrans
        </h2>
        <p>
          « Inscription, tableau de bord, paiement » ne décrit pas un SaaS. Un
          prestataire doit comprendre ce qui arrive avant, pendant et après
          l’action qui justifie l’abonnement. Utilisez une même entreprise
          cliente et suivez-la jusqu’à son départ.
        </p>
        <div className="not-prose my-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientLife.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="mb-3 inline-flex size-9 items-center justify-center rounded-full bg-violet-100 text-sm font-black text-violet-800 dark:bg-violet-950 dark:text-violet-200">
                {item.step}
              </span>
              <p className="mb-2 font-bold text-zinc-950 dark:text-white">
                {item.title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </article>
          ))}
        </div>
        <p>
          Pour DossierClair, la vente est accompagnée et une seule offre est
          proposée au pilote. La confirmation technique d’un paiement ne crée
          qu’un espace, même si elle arrive deux fois. Un paiement en attente ou
          refusé ne doit ni ouvrir silencieusement les droits ni supprimer les
          dossiers. Les règles détaillées de facture, prorata, relance et
          rapprochement appartiennent au guide{" "}
          <Link href="/guides/facturation-abonnements-saas">
            facturation des abonnements SaaS
          </Link>
          .
        </p>
        <SpecificationBlock
          decision="Un espace Atelier Nord est ouvert seulement après l’événement de référence convenu ; la facturation manuelle reste possible pendant le pilote."
          exclusion="Pas d’essai gratuit, de plusieurs offres, de changement automatique de formule ni de facturation internationale dans cette version."
          proof="Rejouer deux fois la même confirmation : un espace, un abonnement et aucun dossier dupliqué."
          owner="La fondatrice décide la règle commerciale ; le prestataire la met en œuvre ; la personne chargée de l’exploitation surveille les erreurs."
        />

        <h2 id="comptes">
          5. Écrivez qui voit quoi — et ce qui doit rester impossible
        </h2>
        <p>
          Le mot « client » est ambigu : il peut désigner l’entreprise qui paie,
          son administrateur, un utilisateur ou la personne invitée à compléter
          un dossier. Nommez chaque acteur, ses actions autorisées et la manière
          dont ses droits disparaissent.
        </p>
        <p>
          Dans l’exemple, Claire administre Atelier Nord ; elle crée et affecte
          les dossiers, puis Léa complète ceux qui lui sont affectés ; un
          lecteur consulte sans modifier. Une personne du support n’accède
          temporairement à un espace qu’avec une raison, une autorisation et une
          trace. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de valider, revoir et retirer les habilitations
          </a>{" "}
          lorsque la fonction change ou que la personne part.
        </p>
        <InfoBox
          variant="amber"
          title="Le test négatif qui ne peut pas attendre"
        >
          Connectée à Atelier Nord, Léa remplace dans l’adresse l’identifiant du
          dossier par celui de Studio Rivage. L’application refuse l’accès sans
          révéler le contenu ni même confirmer l’existence de la ressource. Le
          résultat du test est conservé. Une fuite entre entreprises bloque la
          mise en ligne.
        </InfoBox>
        <p>
          Faites ensuite le même travail pour les données : origine, personne
          responsable, validation, sensibilité, durée utile, export, suppression
          et migration. Une sauvegarde technique n’est pas une durée de
          conservation métier. Un journal de sécurité n’est pas une archive
          commerciale. Le prestataire ne doit pas inventer ces règles à la place
          de l’entreprise.
        </p>
        <SpecificationBlock
          decision="Trois rôles initiaux : administrateur d’entreprise, gestionnaire et lecteur ; les droits support sont temporaires et tracés."
          exclusion="Pas de rôle personnalisable, de connexion unique d’entreprise ni d’appartenance à plusieurs entreprises au pilote."
          proof="Tester lecture, modification, export, révocation et tentative d’accès croisé avec deux entreprises fictives."
          owner="Le métier décide les droits ; le prestataire montre leur application ; le commanditaire accepte les scénarios."
        />

        <h2 id="action">
          6. Décrivez le résultat vendu et la manière de vérifier son utilité
        </h2>
        <p>
          DossierClair ne vend pas « un tableau de bord ». Il vend un parcours :
          créer un dossier, inviter la bonne personne, signaler les informations
          manquantes, vérifier, clôturer et exporter. Chaque règle doit être
          reliée à un risque et à un résultat observable.
        </p>
        <div className="not-prose my-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20 sm:p-6">
          <p className="mb-3 text-lg font-bold text-blue-950 dark:text-blue-100">
            La phrase qui tient le produit
          </p>
          <p className="mb-0 text-base leading-relaxed text-blue-900 dark:text-blue-200">
            « Pour une société de conseil qui démarre une mission, DossierClair
            doit permettre à un gestionnaire de collecter, vérifier puis
            exporter un dossier complet, sans mélanger les données de deux
            entreprises et en réduisant les reprises manuelles observées. »
          </p>
        </div>
        <p>
          Cette phrase ne suffit pas à prouver le succès. La mesure de référence
          doit être prise avant le développement, sur le travail actuel, puis
          revue après lancement. Ici, le temps actif médian, le taux de retour
          et le temps de consolidation sont suivis à 30 et 90 jours. Le chiffre
          d’affaires futur, lui, n’est ni observé ni promis.
        </p>
        <InfoBox
          variant="amber"
          title="Une livraison technique peut être un échec métier"
        >
          Si l’application est en ligne mais que les utilisateurs contournent le
          parcours, que le support explose ou que le temps ne diminue pas, le
          produit n’a pas encore prouvé son utilité. Le cahier des charges doit
          donc prévoir la décision après livraison : poursuivre, corriger,
          réduire ou arrêter.
        </InfoBox>

        <h2 id="echecs">7. Une inconnue importante ne vaut jamais zéro</h2>
        <p>
          Les oublis les plus coûteux ne sont pas toujours des fonctions. Ce
          sont des questions laissées implicites : qualité de la migration,
          ordre des événements de paiement, volume réel d’exports, accès du
          support ou délai de restauration. Chaque inconnue doit rester visible,
          recevoir un responsable et conduire soit à une hypothèse de chiffrage,
          soit à un test, soit à une étude ciblée.
        </p>
        <p>
          Prenons une inconnue fictive : la connexion unique d’entreprise
          pourrait devenir obligatoire. Une étude de trois jours à 900 € coûte 2
          700 €. Une découverte tardive pourrait mobiliser neuf jours à 900 € et
          4 000 € de reprise de migration, soit 12 100 €. Si l’étude supprimait
          tout le risque, son seuil théorique serait{" "}
          <code>2 700 ÷ 12 100 = 22,3 %</code>. Mais une étude ne supprime
          presque jamais tout le risque.
        </p>
        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
          <p className="mb-2 font-bold text-zinc-950 dark:text-white">
            La formule plus honnête
          </p>
          <p className="mb-5 overflow-x-auto rounded-xl bg-zinc-950 px-4 py-3 font-mono text-sm text-emerald-300">
            (probabilité avant − probabilité après) × perte évitable &gt; coût
            de l’étude
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {uncertaintyScenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="mb-1 font-bold text-zinc-950 dark:text-white">
                  {scenario.title}
                </p>
                <p className="mb-2 text-xs text-zinc-500">{scenario.detail}</p>
                <p className="mb-2 text-sm font-semibold text-violet-700 dark:text-violet-300">
                  {scenario.avoided}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {scenario.result}
                </p>
              </article>
            ))}
          </div>
        </div>
        <p>
          Ces probabilités ne sont pas scientifiques : elles servent à rendre le
          raisonnement discutable. Une date réglementaire ou un risque de
          sécurité peut justifier une étude même si le seul calcul financier
          hésite. À l’inverse, une question facile à corriger plus tard ne
          mérite pas forcément une phase séparée.
        </p>

        <h2 id="exploitation">
          8. Le SaaS continue après la mise en ligne : écrivez qui le fait vivre
        </h2>
        <p>
          Un service vendu par abonnement doit être surveillé, sauvegardé,
          restauré, corrigé et expliqué aux clients. « Hébergement inclus » ne
          dit pas qui reçoit une alerte, qui répond le samedi, ce qui est
          restauré ni combien de données peuvent être perdues.
        </p>
        <p>
          DossierClair choisit pour son exemple un support par courriel pendant
          les heures ouvrées, une sauvegarde quotidienne et un test de
          restauration trimestriel. Il vise une perte maximale de 24 heures de
          données et une remise en service en moins de huit heures ouvrées. Ces
          délais sont des choix fictifs à relier à l’impact métier, jamais des
          standards universels.
        </p>
        <SpecificationBlock
          decision="Base, fichiers utiles, configuration et procédure sont inclus dans la restauration testée ; chaque alerte importante a un propriétaire."
          exclusion="Pas d’astreinte permanente, de promesse de disponibilité universelle ni de certification de sécurité globale."
          proof="Restaurer une copie dans un environnement isolé, puis vérifier connexion, droits, dossier et export dans les seuils écrits."
          owner="Le prestataire explique la méthode ; la personne chargée de l’exploitation exécute l’exercice ; le commanditaire accepte l’impact résiduel."
        />
        <p>
          L’{" "}
          <a
            href="https://owasp.org/www-project-application-security-verification-standard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OWASP ASVS 5.0.0
          </a>{" "}
          fournit des exigences de sécurité vérifiables. Le citer ne rend pas le
          SaaS « certifié OWASP ». Sélectionnez les contrôles adaptés, leur
          version, la méthode de test et la preuve attendue. Même prudence pour
          les{" "}
          <a
            href="https://www.w3.org/TR/WCAG22/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG 2.2
          </a>{" "}
          : des critères testés ne prouvent pas à eux seuls toutes les
          obligations juridiques d’accessibilité.
        </p>
        <InfoBox
          variant="amber"
          title="Quand le guide généraliste ne suffit plus"
        >
          Données de santé ou biométriques, surveillance, vente dans plusieurs
          pays, TVA complexe, cession de droits, secteur réglementé, migration
          volumineuse, engagement de disponibilité assorti de pénalités ou
          exigence formelle de sécurité : faites intervenir le spécialiste
          adapté — juriste, délégué à la protection des données,
          expert-comptable, sécurité, accessibilité ou migration. Le développeur
          ne doit pas s’auto-attribuer toutes ces validations.
        </InfoBox>

        <h2 id="donnees">
          9. Traitez la migration et la mise en service comme un projet
        </h2>
        <p>
          « Importer l’existant » peut cacher plus de travail que la première
          version. Inventoriez les sources, mesurez les volumes, repérez les
          doublons, définissez les transformations et préparez un jeu d’essai.
          Le devis doit dire qui nettoie, qui rapproche les résultats et ce qui
          arrive aux lignes rejetées.
        </p>
        <ol>
          <li>inventorier les fichiers, bases et propriétaires ;</li>
          <li>
            mesurer qualité, doublons, données obsolètes et champs libres ;
          </li>
          <li>écrire la correspondance avec le nouveau modèle ;</li>
          <li>
            tester un échantillon, puis rapprocher les nombres et totaux ;
          </li>
          <li>répéter la migration avant la vraie bascule ;</li>
          <li>
            prévoir un gel, une synchronisation ou un double fonctionnement ;
          </li>
          <li>écrire les critères de bascule et de retour arrière ;</li>
          <li>
            faire valider les données par le métier, pas seulement par le code.
          </li>
        </ol>
        <p>
          Une importation partiellement valide doit identifier les lignes
          refusées sans dupliquer les lignes déjà acceptées lors d’une nouvelle
          tentative. Cette phrase est plus utile que « migration sécurisée » :
          elle décrit une erreur réelle et la preuve attendue.
        </p>
        <InfoBox
          variant="blue"
          title="Le même lot de migration pour les trois devis"
        >
          Dans l’exemple, les trois offres couvrent 240 dossiers historiques
          provenant de trois fichiers CSV documentés, sans pièce jointe. Les
          champs repris sont le contact, le service, l’objectif, la date, les
          contraintes, le statut et l’identifiant externe. Le lot comprend une
          cartographie, un import à blanc, un comptage avant/après, un
          échantillon de 30 dossiers, la liste des lignes refusées et un retour
          arrière. Les pièces jointes, les champs libres non cartographiés et
          les nouvelles sources sont exclus.
        </InfoBox>
        <InfoBox variant="amber" title="Ce que nous déconseillons">
          Ne signez pas un forfait de migration ferme si aucun échantillon n’a
          été ouvert, si la qualité n’est pas mesurée ou si la responsabilité du
          nettoyage reste implicite. À l’inverse, une source simple, documentée
          et testée peut parfaitement entrer dans un forfait clairement limité.
        </InfoBox>

        <h2 id="sortie">
          10. Prévoyez deux sorties : celle du client et celle du fondateur
        </h2>
        <p>
          La première sortie concerne Atelier Nord : utilisateurs, rôles,
          dossiers, statuts, dates, commentaires, relations, réglages et
          documents convenus doivent pouvoir être récupérés dans des formats
          expliqués. Le test utile n’est pas la présence d’un bouton Export,
          mais la capacité à comprendre et reconstruire un dossier à partir des
          fichiers et de leur dictionnaire.
        </p>
        <p>
          La seconde sortie concerne la fondatrice de DossierClair face à son
          prestataire : dépôt et historique du code, droits réellement
          consentis, licences, documentation d’installation, accès au cloud, au
          domaine, au paiement et à la supervision, schémas de données,
          procédures et coopération de transition.
        </p>
        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <p className="mb-2 font-bold text-emerald-950 dark:text-emerald-100">
              Sortie de l’entreprise abonnée
            </p>
            <p className="mb-0 text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
              Données, formats, dictionnaire, pièces, délai, personne autorisée,
              période d’accès, aide éventuelle, suppression et coût.
            </p>
          </article>
          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <p className="mb-2 font-bold text-violet-950 dark:text-violet-100">
              Sortie du fondateur
            </p>
            <p className="mb-0 text-sm leading-relaxed text-violet-900 dark:text-violet-200">
              Code, droits, comptes, données, documentation, secrets remis par
              un canal adapté, dépendances, installation et transition.
            </p>
          </article>
        </div>
        <p>
          L’{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L. 131-3 du Code de la propriété intellectuelle
          </a>{" "}
          exige notamment que les droits cédés soient mentionnés distinctement
          et que leur domaine d’exploitation soit délimité. « J’ai payé, donc
          tout m’appartient » n’est pas une clause. Faites vérifier la situation
          réelle.
        </p>
        <p>
          Le{" "}
          <a
            href="https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Act européen
          </a>
          , applicable depuis le 12 septembre 2025, traite notamment le
          changement de fournisseur de certains services de traitement de
          données. Son champ, ses exceptions et le contrat doivent être examinés
          au cas par cas ; il ne rend pas automatiquement toute transition
          gratuite ou simple.
        </p>

        <h2 id="reponse">
          11. Comparez trois offres sur le même résultat et le même horizon
        </h2>
        <p>
          Le prix de construction seul donne une image trompeuse. Les trois
          propositions fictives ci-dessous couvrent le même parcours
          DossierClair sur 24 mois. Elles additionnent découverte, construction,
          migration, maintenance et assistance, infrastructure, licences et
          sortie. Elles n’intègrent pas encore tous les postes possibles : le
          terme honnête est donc <strong>coûts renseignés sur 24 mois</strong>,
          pas « coût total garanti ».
        </p>
        <div className="not-prose my-7 grid gap-4 lg:grid-cols-3">
          {offerSummaries.map((offer) => (
            <article
              key={offer.name}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="mb-4 font-bold text-zinc-950 dark:text-white">
                {offer.name}
              </p>
              <dl className="mb-4 space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-500">Départ renseigné</dt>
                  <dd className="font-semibold text-zinc-950 dark:text-white">
                    {offer.initial}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-500">Récurrent sur 24 mois</dt>
                  <dd className="font-semibold text-zinc-950 dark:text-white">
                    {offer.recurring}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-500">Sortie renseignée</dt>
                  <dd className="font-semibold text-zinc-950 dark:text-white">
                    {offer.exit}
                  </dd>
                </div>
                <div className="flex justify-between gap-3 border-t border-zinc-200 pt-3 dark:border-zinc-800">
                  <dt className="font-bold text-zinc-950 dark:text-white">
                    Total renseigné
                  </dt>
                  <dd className="text-lg font-black text-violet-700 dark:text-violet-300">
                    {offer.total}
                  </dd>
                </div>
              </dl>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {offer.strength}
              </p>
            </article>
          ))}
        </div>
        <p>
          L’offre B demande 5 000 € de plus que l’offre A pour le couple
          construction et migration, mais la somme arithmétique des montants
          saisis sur 24 mois est inférieure de 11 500 €. Comme les coûts
          importants restent inconnus dans l’exemple, cela ne constitue pas un
          classement et ne prouve pas la qualité de B. Cela montre seulement que
          le prix initial ne suffit pas.
        </p>
        <p>
          Notez ensuite le résultat métier, la couverture du cycle client,
          l’exploitation, les coûts, les preuves et la sortie. Choisissez les
          poids avant de voir les prix et justifiez chaque note par une
          démonstration, un livrable, une clause ou une référence vérifiable. Si
          le vainqueur change dès qu’un poids bouge de cinq points, discutez
          cette sensibilité au lieu de cacher le choix derrière une décimale.
        </p>
        <InfoBox variant="blue" title="Aucune offre ne gagne dans tous les cas">
          A peut préserver la trésorerie de départ ; la somme saisie de B est la
          plus basse dans cet exemple, sans classement tant que les inconnues ne
          sont pas fermées ; C achète d’abord de l’information. Une quatrième
          voie — un pilote manuel fictif de{" "}
          <code>8 × 6 × 55 + 600 = 3 240 €</code> de temps et d’outils sur six
          mois — ne livre pas le même résultat, mais peut gagner si la demande
          reste le principal risque.
        </InfoBox>

        <h2 id="changements">
          12. Versionnez les décisions au lieu de laisser le projet dériver
        </h2>
        <p>
          Un cahier des charges n’a pas besoin de prétendre que rien ne
          changera. Il doit rendre le changement visible. Conservez une version
          de référence et notez chaque demande qui touche la valeur, le coût, le
          délai, la sécurité, les données ou l’exploitation.
        </p>
        <div className="not-prose my-7 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          {[
            [
              "Version et date",
              "Quel document sert de référence aujourd’hui ?",
            ],
            [
              "Changement demandé",
              "Quelle décision ou règle devient différente ?",
            ],
            ["Motif et hypothèse", "Quel fait nouveau justifie la demande ?"],
            [
              "Effets",
              "Valeur, coût, délai, sécurité, données, exploitation et sortie.",
            ],
            [
              "Options examinées",
              "Accepter, tester, reporter, remplacer ou refuser.",
            ],
            [
              "Décideur et date d’effet",
              "Qui engage l’entreprise et à partir de quand ?",
            ],
          ].map(([label, question]) => (
            <div
              key={label}
              className="grid gap-1 border-b border-zinc-200 bg-white px-5 py-4 last:border-b-0 dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-[0.8fr_2fr] sm:gap-5"
            >
              <p className="mb-0 text-sm font-bold text-zinc-950 dark:text-white">
                {label}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {question}
              </p>
            </div>
          ))}
        </div>
        <p>
          Notre position est tranchée : un forfait ferme peut convenir à un
          périmètre stable et testable. Lorsque les inconnues majeures
          subsistent, il ne supprime pas le risque ; il le déplace souvent vers
          les exclusions, les avenants ou une marge de sécurité opaque. Une
          courte phase payée et limitée peut alors être plus honnête. Le
          contre-cas est réel : ne transformez pas un produit simple et compris
          en programme administratif de plusieurs mois.
        </p>

        <h2 id="mesure">
          13. Organisez les tests, puis décidez à 30 et 90 jours
        </h2>
        <p>
          Les tests d’acceptation ne sont pas le moment où le dirigeant « clique
          un peu » avant de signer. Préparez les données, les comptes, les
          scénarios normaux et les mauvais cas. Pour chaque test, écrivez la
          situation de départ, l’action, le résultat, la preuve et la personne
          qui accepte.
        </p>
        <p>
          Dans l’exemple fictif, 30 premiers tests de 12 minutes représentent
          six heures. Huit retests de dix minutes ajoutent 1 h 20, puis la
          préparation et la décision ajoutent deux heures. Total :{" "}
          <strong>9 h 20</strong>. À 55 €/h de coût interne estimé, cela
          représente environ <strong>513 €</strong>. Ce nombre ne fixe aucun
          standard ; il montre pourquoi ces tests doivent avoir un créneau et un
          responsable.
        </p>
        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <p className="mb-3 font-bold text-blue-950 dark:text-blue-100">
              Revue à 30 jours
            </p>
            <ul className="m-0 space-y-2 pl-5 text-sm leading-relaxed text-blue-900 dark:text-blue-200">
              <li>les utilisateurs terminent-ils le parcours ?</li>
              <li>quelles étapes restent faites hors outil ?</li>
              <li>quelles erreurs et demandes reviennent ?</li>
              <li>les mesures collectées sont-elles fiables ?</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <p className="mb-3 font-bold text-emerald-950 dark:text-emerald-100">
              Décision à 90 jours
            </p>
            <ul className="m-0 space-y-2 pl-5 text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
              <li>le problème de départ s’est-il amélioré ?</li>
              <li>le coût d’exploitation correspond-il à l’hypothèse ?</li>
              <li>quels clients n’adoptent pas le service, et pourquoi ?</li>
              <li>faut-il poursuivre, corriger, réduire ou arrêter ?</li>
            </ul>
          </article>
        </div>
        <InfoBox
          variant="amber"
          title="Cinq défauts qui bloquent la mise en ligne"
        >
          Accès aux données d’une autre entreprise, paiement ou parcours vendu
          bloqué, restauration impossible, migration non rapprochée ou export
          inutilisable. Une gêne mineure peut être acceptée si elle est
          consignée, datée et attribuée. Une correction n’est close qu’après
          avoir rejoué le scénario concerné.
        </InfoBox>

        <h2 id="kit">
          14. Construisez votre dossier et comparez vos propres offres
        </h2>
        <p>
          L’outil ci-dessous fonctionne dans votre navigateur. Vos saisies ne
          sont ni transmises à Hagnéré Code ni enregistrées par cet outil ;
          elles restent en mémoire dans l’onglet. Si vous copiez ou téléchargez
          un fichier, votre appareil ou un service de synchronisation peut le
          conserver. Vous pouvez générer un document texte modifiable, copier
          son contenu dans votre outil habituel, télécharger l’exemple
          DossierClair et remplacer les trois propositions fictives par vos
          devis. Les coûts inconnus et les zéros non justifiés restent bloquants
          : aucun total n’est présenté comme la « meilleure offre ».
        </p>
        <p>
          Le format <code>.md</code> désigne simplement un document texte. Vous
          pouvez l’ouvrir dans un éditeur de texte ou copier son contenu dans
          Word, Google Docs ou Notion.
        </p>
        <SaasSpecificationKit />
        <p>
          Le fichier produit reste un point de départ. Faites relire les sujets
          qui engagent juridiquement, fiscalement ou techniquement l’entreprise.
          Le dirigeant doit conserver la décision ; le prestataire doit
          justifier la solution, ses limites et ses coûts.
        </p>
        <GuideInlineCTA
          title="Faire relire un dossier ou trois offres avant de signer"
          description="Envoyez le document que vous avez, même imparfait, avec les devis et les inconnues déjà identifiées. Hagnéré Code peut vérifier si les prestataires répondent au même produit et isoler ce qui mérite une étude. Si un outil existant, un pilote manuel ou un report est plus rationnel, la conclusion doit pouvoir le dire."
          tags={[
            "Décisions manquantes",
            "Coûts sur même horizon",
            "Tests et responsabilités",
          ]}
          ctaLabel="Demander une relecture"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />
      </GuideLayout>
    </GuidesShell>
  );
}
