import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("combien-de-temps-developper-saas");

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
        alt: "Calculer le délai d’un SaaS à partir du résultat attendu et des travaux qui s’enchaînent",
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
      name: "Délai de développement d’un SaaS",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien de temps faut-il pour développer un MVP SaaS ?",
    answer:
      "Aucune durée ne vaut pour tous les MVP. Écrivez d’abord ce qu’un premier utilisateur pourra réellement faire, les données et accès nécessaires, les tests attendus et les personnes qui doivent répondre. La date vient ensuite de la plus longue suite de travaux qui s’attendent.",
  },
  {
    question:
      "Quelle différence de délai entre un prototype et un SaaS en production ?",
    answer:
      "Un prototype sert surtout à montrer et discuter un parcours ; il peut simuler des connexions ou des données. Un service en production doit aussi gérer les accès, les données, les tests, l’ouverture, la surveillance, le support et une solution de repli adaptés à son usage.",
  },
  {
    question:
      "Le no-code ou l’intelligence artificielle permettent-ils de lancer plus vite ?",
    answer:
      "Ils peuvent réduire certains travaux, mais pas automatiquement les décisions, les accès à des logiciels tiers, la préparation des données, les validations ou le support. Mesurez ce qui est réellement raccourci, puis recalculez la suite qui fixe la date.",
  },
  {
    question: "Ajouter des développeurs réduit-il forcément le délai ?",
    answer:
      "Non. Une personne supplémentaire aide seulement si le travail qui fixe la date peut être partagé sans créer davantage de coordination. Elle ne raccourcit pas le délai de réponse d’un éditeur, la décision d’un dirigeant ou un test qui doit attendre le résultat précédent.",
  },
  {
    question: "Quand peut-on annoncer une date à un premier client ?",
    answer:
      "Annoncez une date lorsque la ligne d’arrivée, les exclusions, les accès nécessaires, les responsables et les hypothèses sont écrits. Présentez aussi ce qui ferait recalculer la date. Une cible commerciale n’est pas une garantie de livraison.",
  },
  {
    question: "Qui porte un retard causé par une validation ou un accès ?",
    answer:
      "Le calendrier doit nommer séparément qui demande, qui fournit, qui décide et sous quel délai. Le contrat peut ensuite répartir les conséquences d’un retard ; ce guide aide à rendre l’attente visible, mais ne remplace pas une analyse juridique du contrat.",
  },
  {
    question: "Que faut-il retirer en premier si la date ne peut pas bouger ?",
    answer:
      "Retirez d’abord un public secondaire, une connexion remplaçable par un import contrôlé ou une automatisation qui peut rester manuelle pendant un pilote. Ne cachez pas la suppression d’un test, d’un contrôle de sécurité ou d’un support dont la ligne d’arrivée a réellement besoin.",
  },
];

const finishLines = [
  {
    title: "Prototype",
    ready:
      "Le parcours peut être montré et discuté. Certaines actions ou connexions peuvent être simulées.",
    limit:
      "Il ne prouve pas que le service est connecté, protégé, complet ou exploitable.",
    href: "/guides/mvp-prototype-ou-poc",
    linkLabel:
      "Choisir entre prototype, preuve de faisabilité, pilote et première version",
  },
  {
    title: "Preuve de faisabilité (POC)",
    ready:
      "Un obstacle précis a été essayé : une connexion, un calcul, un format de données ou une performance.",
    limit:
      "Le reste du produit et le parcours du client ne sont pas encore construits.",
    href: "/guides/mvp-prototype-ou-poc",
    linkLabel: "Choisir le bon test technique",
  },
  {
    title: "MVP — première version minimale pour apprendre",
    ready:
      "La version la plus légère permet d’apprendre avec de vrais utilisateurs sur un résultat défini.",
    limit:
      "Le mot seul ne dit ni ce qui est inclus, ni combien de personnes peuvent l’utiliser, ni comment il sera exploité.",
    href: "/guides/mvp-saas-quoi-inclure",
    linkLabel: "Décider ce que la première version doit contenir",
  },
  {
    title: "Pilote limité",
    ready:
      "Un petit groupe utilise le vrai service dans des conditions encadrées, avec une aide renforcée si nécessaire.",
    limit:
      "Le produit n’est pas forcément prêt pour tous les clients ni pour une utilisation sans limite.",
  },
  {
    title: "Service ouvert",
    ready:
      "Les utilisateurs visés accomplissent le parcours promis ; accès, données, tests, surveillance, reprise et support sont organisés.",
    limit:
      "Le produit continuera à recevoir des corrections et des évolutions après son ouverture.",
  },
];

const workItems = [
  {
    code: "A",
    result: "Règles du pilote et parcours principal décidés",
    owner: "Le prestataire formalise ; la direction de l’entreprise tranche.",
    waitsFor: "Rien",
    durations: "4 · 6 · 8 jours",
    hypothesis: "Disponibilité du décideur et règles encore contradictoires",
  },
  {
    code: "B",
    result: "Écrans du parcours validés",
    owner: "Le prestataire présente ; l’entreprise valide ou refuse.",
    waitsFor: "A",
    durations: "5 · 7 · 10 jours",
    hypothesis: "Nombre de cycles nécessaires pour valider les écrans",
  },
  {
    code: "C",
    result: "Accès d’essai et données externes reçus",
    owner:
      "L’entreprise envoie une demande complète ; l’éditeur tiers ouvre l’accès et fournit les données.",
    waitsFor: "A",
    durations: "3 · 6 · 20 jours",
    hypothesis: "Qualité de la demande et délai de réponse de l’éditeur",
  },
  {
    code: "G",
    result: "Droits, données et règles de sécurité décidés",
    owner:
      "Le prestataire propose ; l’entreprise décide et nomme les personnes autorisées.",
    waitsFor: "A",
    durations: "3 · 5 · 8 jours",
    hypothesis: "Droits déjà décidés ou discussions encore ouvertes",
  },
  {
    code: "D",
    result: "Comptes, données et réservation fonctionnent",
    owner: "Le prestataire construit et montre le résultat.",
    waitsFor: "B et G",
    durations: "10 · 15 · 22 jours",
    hypothesis: "Stabilité des règles et quantité de corrections",
  },
  {
    code: "E",
    result: "Stock externe connecté et testé",
    owner:
      "Le prestataire connecte et teste ; l’éditeur tiers traite les anomalies de son service.",
    waitsFor: "C",
    durations: "5 · 8 · 18 jours",
    hypothesis: "Comportement connu ou découvert tardivement de la connexion",
  },
  {
    code: "F",
    result: "Données et scénarios de test prêts",
    owner:
      "L’entreprise prépare les cas ; le prestataire vérifie qu’ils permettent de tester le parcours.",
    waitsFor: "A",
    durations: "4 · 7 · 12 jours",
    hypothesis: "Disponibilité de situations métier représentatives",
  },
  {
    code: "H",
    result: "Parcours accepté et écarts convenus corrigés",
    owner:
      "Le prestataire corrige ; l’entreprise accepte ou refuse le parcours.",
    waitsFor: "D, E et F",
    durations: "7 · 10 · 15 jours",
    hypothesis: "Nombre et importance des écarts trouvés pendant les tests",
  },
  {
    code: "P",
    result: "Ouverture, surveillance, reprise et support préparés",
    owner:
      "Le prestataire prépare ; l’entreprise nomme la personne chargée du support.",
    waitsFor: "D",
    durations: "4 · 6 · 10 jours",
    hypothesis: "Accès, personne de support et solution de reprise disponibles",
  },
  {
    code: "I",
    result: "Pilote ouvert aux deux agences",
    owner:
      "L’entreprise autorise l’ouverture ; le prestataire ouvre et surveille.",
    waitsFor: "H et P",
    durations: "2 · 3 · 5 jours",
    hypothesis: "Créneau de décision et autorisation d’ouverture",
  },
];

const planningFields = [
  {
    number: "01",
    title: "Ligne d’arrivée exacte",
    prompt:
      "À la date annoncée, [public] pourra [action complète] avec [conditions].",
  },
  {
    number: "02",
    title: "Ce que cette date ne promet pas",
    prompt: "[public, fonction, volume ou canal exclu ; étape encore manuelle]",
  },
  {
    number: "03",
    title: "Date cible et raison métier",
    prompt: "[date ou fenêtre] parce que [client, saison, contrat ou test]",
  },
  {
    number: "04",
    title: "Résultats à produire",
    prompt:
      "[un résultat vérifiable par ligne, jamais seulement « développement »]",
  },
  {
    number: "05",
    title: "Ce que chaque résultat attend",
    prompt: "[décision, écran, accès, donnée, autre résultat ou validation]",
  },
  {
    number: "06",
    title: "Responsable, disponibilité et délai de réponse",
    prompt:
      "[entreprise, prestataire ou tiers] — [personne] — [fenêtre disponible]",
  },
  {
    number: "07",
    title: "Preuve de fin",
    prompt: "[démonstration, fichier reçu, test réussi ou validation écrite]",
  },
  {
    number: "08",
    title: "Trois durées discutables",
    prompt: "court [ ] — central [ ] — prudent [ ] — hypothèse [ ]",
  },
  {
    number: "09",
    title: "Plus grande incertitude",
    prompt: "[inconnu] — [premier essai] — [responsable] — [date de décision]",
  },
  {
    number: "10",
    title: "Conditions particulières",
    prompt:
      "données [ ] — droits [ ] — sécurité [ ] — paiement [ ] — tiers [ ]",
  },
  {
    number: "11",
    title: "Acceptation et ouverture",
    prompt:
      "tests [ ] — décideur [ ] — corrections [ ] — surveillance [ ] — reprise [ ] — support [ ]",
  },
  {
    number: "12",
    title: "Règle de mise à jour",
    prompt:
      "recalcul après [événements] ; si la date ne tient plus, décision de [personne]",
  },
];

const revisionEvents = [
  "l’accès au logiciel externe a été reçu et essayé",
  "la règle principale et les écrans ont été validés",
  "le premier parcours complet a été montré",
  "les données nécessaires aux tests sont prêtes",
  "les premiers tests complets sont terminés",
  "une nouvelle fonction, un incident ou une exclusion a été accepté",
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
          { label: "Délai de développement d’un SaaS" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez reçu deux délais très différents pour le même SaaS ? Définissez d’abord ce qui devra fonctionner, puis calculez la date à partir des travaux, des décisions et des accès réellement nécessaires."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Aucune durée universelle",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Trois scénarios à discuter",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Entreprise, prestataire et tiers séparés",
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
            href: "/guides/mvp-prototype-ou-poc",
            label:
              "Choisir entre prototype, preuve de faisabilité, pilote et première version",
          },
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Décider ce que la première version doit contenir",
          },
          {
            href: "/guides/cahier-des-charges-saas",
            label: "Préparer un cahier des charges SaaS",
          },
          {
            href: "/guides/combien-coute-un-saas",
            label: "Prévoir le budget d’un SaaS",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Développement de SaaS et d’applications métier",
          },
        ]}
        faqTitle="Délais de création d’un SaaS : réponses directes"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous avez une idée de SaaS et vous avez besoin d’une date. Un
          prestataire annonce huit semaines, un autre plusieurs mois. Lequel
          croire ? Impossible de les comparer s’ils ne promettent pas la même
          chose : une démonstration cliquable, un essai avec quelques clients et
          un service réellement ouvert ne demandent pas le même travail. Un SaaS
          est un logiciel accessible en ligne et proposé comme un service ; il
          n’a pas de durée universelle. Pour obtenir une date défendable,
          écrivez d’abord ce qui devra fonctionner. Reliez ensuite les travaux
          qui s’attendent, nommez qui fournit chaque décision ou accès et
          calculez un scénario court, central et prudent. Vous saurez alors s’il
          faut tester un point incertain, réduire la première version, organiser
          un pilote, déplacer la date ou reporter le développement.
        </p>

        <InfoBox
          variant="blue"
          title="La question qui rend deux délais comparables"
        >
          Demandez : « À cette date, qui pourra faire quoi, avec quelles données
          et quel niveau d’aide ? » Si les deux réponses diffèrent, les délais
          ne chiffrent pas le même produit. Comparez la promesse avant de
          comparer le nombre de semaines.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "ligne-arrivee",
              label: "Écrire ce qui devra réellement fonctionner",
            },
            {
              id: "travaux",
              label: "Faire apparaître tout le travail avant l’ouverture",
            },
            {
              id: "responsables",
              label: "Nommer qui doit fournir quoi",
            },
            {
              id: "calcul",
              label: "Calculer la date sans additionner le parallèle",
            },
            {
              id: "exemple",
              label: "Refaire un exemple fictif de bout en bout",
            },
            {
              id: "chemin-change",
              label: "Voir pourquoi la tâche décisive peut changer",
            },
            {
              id: "ouverture",
              label: "Prévoir ce qui reste après le dernier écran",
            },
            {
              id: "date-ne-tient-pas",
              label: "Choisir quoi changer si la date ne tient plus",
            },
            {
              id: "fiche",
              label: "Copier la fiche calendrier avant devis",
            },
            {
              id: "recalcul",
              label: "Décider quand refaire le calcul",
            },
            { id: "sources", label: "Vérifier les sources et les limites" },
          ]}
        />

        <h2 id="ligne-arrivee">
          Commencez par écrire ce qui devra réellement fonctionner
        </h2>
        <p>
          Une date n’a de sens que si elle correspond à un résultat observable.
          « SaaS terminé » ou « première version minimale livrée », souvent
          appelée MVP, ne suffisent pas : deux personnes peuvent utiliser ces
          mots pour parler d’une maquette ou d’un service vendu et suivi au
          quotidien.
        </p>
        <p>
          Choisissez la ligne d’arrivée avant le calendrier. Si vous hésitez
          encore entre plusieurs formats, le guide sur le choix d’un{" "}
          <Link href="/guides/mvp-prototype-ou-poc">
            prototype, d’une preuve technique, d’un pilote ou d’un MVP
          </Link>{" "}
          vous aide à décider ce que vous devez apprendre en premier.
        </p>

        <div className="not-prose my-7 space-y-4">
          {finishLines.map((line) => (
            <section
              key={line.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-zinc-100">
                {line.title}
              </h3>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Ce qui existe à la date
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {line.ready}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    Ce que cela ne prouve pas
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {line.limit}
                  </dd>
                </div>
              </dl>
              {line.href && line.linkLabel && (
                <Link
                  href={line.href}
                  className="mt-4 inline-flex text-sm font-semibold text-violet-700 underline decoration-violet-300 underline-offset-4 dark:text-violet-300"
                >
                  {line.linkLabel}
                </Link>
              )}
            </section>
          ))}
        </div>

        <p>
          Pour un MVP, décidez séparément{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            ce que la première version devra contenir
          </Link>
          . Le présent guide commence lorsque vous pouvez terminer cette phrase
          : « À la date annoncée, tel public pourra accomplir telle action, dans
          telles conditions. »
        </p>

        <h2 id="travaux">
          Faites apparaître tout ce qui doit arriver avant l’ouverture
        </h2>
        <p>
          Une ligne nommée « développement » cache les attentes qui provoquent
          les écarts de calendrier. Remplacez-la par des résultats que vous
          pourrez montrer, recevoir, tester ou accepter. Retirez ensuite les
          éléments qui ne concernent pas votre produit.
        </p>
        <ol>
          <li>
            décider le public, le parcours et les règles de l’entreprise ;
          </li>
          <li>faire valider les écrans ou les étapes du parcours ;</li>
          <li>
            obtenir les accès, exemples de données et réponses des tiers ;
          </li>
          <li>
            construire les comptes, droits, données et fonctions retenues ;
          </li>
          <li>
            essayer les connexions, imports ou calculs qui peuvent bloquer ;
          </li>
          <li>
            préparer les paiements et abonnements seulement s’ils font partie de
            la ligne d’arrivée ;
          </li>
          <li>
            intégrer les contrôles de sécurité et de protection des données
            nécessaires à ce produit ;
          </li>
          <li>
            préparer les situations et les données qui serviront aux tests ;
          </li>
          <li>corriger les écarts convenus et faire accepter le parcours ;</li>
          <li>
            préparer l’ouverture, la surveillance et la solution de repli ;
          </li>
          <li>organiser l’aide aux premiers utilisateurs ;</li>
          <li>autoriser l’ouverture et suivre les premiers usages.</li>
        </ol>
        <p>
          « Accès d’essai reçu et connexion démontrée » permet de décider. «
          Intégration en cours » ne dit ni ce qui fonctionne, ni ce qui bloque,
          ni qui peut agir.
        </p>

        <h2 id="responsables">Qui doit fournir quoi, et pour quand ?</h2>
        <p>
          Le calendrier doit montrer le travail du prestataire, mais aussi les
          décisions de votre entreprise et les réponses des éditeurs externes.
          Le guide de planification du{" "}
          <a
            href="https://www.gao.gov/products/gao-16-89g"
            target="_blank"
            rel="noopener noreferrer"
          >
            Government Accountability Office américain
          </a>{" "}
          recommande, pour les grands programmes publics, d’inclure les travaux
          du donneur d’ordre et des prestataires, de relier les activités et de
          documenter les hypothèses. Nous en reprenons ici le principe, pas sa
          méthode statistique ni une durée de SaaS.
        </p>
        <p>
          N’écrivez pas « entreprise + prestataire ». Séparez les actions : le
          prestataire propose, l’entreprise tranche ; l’entreprise demande
          l’accès, l’éditeur le fournit ; le prestataire corrige, l’entreprise
          accepte ou refuse. Ajoutez une personne et une fenêtre de réponse. Une
          responsabilité sans verbe masque encore l’attente.
        </p>

        <div className="not-prose my-7 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Votre entreprise",
              text: "Décide les règles, fournit des situations métier, obtient les autorisations et accepte ou refuse le résultat.",
              color:
                "border-blue-200 bg-blue-50/60 dark:border-blue-900 dark:bg-blue-950/25",
            },
            {
              title: "Le prestataire",
              text: "Formalise, propose, construit, démontre, teste, corrige et prépare l’ouverture prévue au contrat.",
              color:
                "border-violet-200 bg-violet-50/60 dark:border-violet-900 dark:bg-violet-950/25",
            },
            {
              title: "Un éditeur ou tiers",
              text: "Ouvre un accès, fournit une documentation ou répond sur son propre service selon ses conditions réelles.",
              color:
                "border-amber-200 bg-amber-50/60 dark:border-amber-900 dark:bg-amber-950/25",
            },
          ].map((party) => (
            <div
              key={party.title}
              className={"rounded-2xl border p-5 " + party.color}
            >
              <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                {party.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {party.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/service-manual/agile-delivery/planning-agile"
            target="_blank"
            rel="noopener noreferrer"
          >
            manuel des services numériques du gouvernement britannique
          </a>{" "}
          rappelle également que le plan évolue avec ce que l’équipe apprend et
          qu’il doit montrer les relations avec les autres équipes,
          organisations et tiers. Ce cadre public ne fournit aucune durée
          universelle pour un SaaS français ; il justifie de rendre les attentes
          externes visibles et de revoir le calendrier.
        </p>

        <h2 id="calcul">Additionnez seulement les travaux qui s’attendent</h2>
        <p>
          Deux travaux qui commencent au même moment ne s’additionnent pas
          nécessairement. Pour chaque résultat, regardez d’abord ce qu’il
          attend. S’il attend plusieurs travaux, il commence lorsque le dernier
          est terminé. La suite la plus longue jusqu’à l’ouverture fixe la date.
        </p>
        <FormulaBox>
          {"DÉBUT D’UN TRAVAIL\n" +
            "= fin la plus tardive de ce qu’il attend\n\n" +
            "FIN D’UN TRAVAIL\n" +
            "= son début + sa propre durée\n\n" +
            "DATE DU PROJET\n" +
            "= fin la plus tardive de la ligne d’arrivée"}
        </FormulaBox>
        <p>
          Ce calcul suppose aussi que les personnes nommées peuvent réellement
          mener en parallèle les travaux qui ne s’attendent pas. Si la même
          personne ou la même équipe doit en effectuer deux, choisissez leur
          ordre réel, reliez-les dans le plan, puis recalculez. Sinon, la date
          obtenue sera trop courte.
        </p>
        <p>
          Cette suite est parfois appelée « chemin critique ». Nous parlerons de
          <strong> chemin déterminant</strong> : les travaux qui fixent la date
          tant que les hypothèses restent vraies. Une tâche peut sortir de ce
          chemin ou y entrer dès qu’un accès, une décision ou un test prend plus
          de temps.
        </p>
        <InfoBox
          variant="amber"
          title="Trois scénarios ne sont pas trois probabilités"
        >
          Donnez à chaque travail une durée courte, centrale et prudente en
          expliquant ce qui change : nombre de validations, qualité des données,
          délai du tiers ou quantité de corrections. Ces colonnes servent à
          discuter les hypothèses. Elles ne représentent ni une moyenne du
          marché, ni un pourcentage de confiance, ni une garantie.
        </InfoBox>

        <h2 id="exemple">
          Exemple fictif : trois dates calculées avec les mêmes travaux
        </h2>
        <p>
          <strong>
            Cet exemple illustratif entièrement fictif ne décrit ni un client ni
            un témoignage réel. Ses durées ne viennent d’aucun devis, historique
            Hagnéré Code ou délai de marché.
          </strong>{" "}
          Une entreprise imagine un SaaS de réservation de matériel partagé
          entre plusieurs agences. La ligne d’arrivée est un pilote limité :
          deux agences peuvent se connecter, voir un stock provenant d’un outil
          externe, réserver un équipement et signaler son retour. Une aide
          renforcée est prévue. Le paiement, l’application mobile et l’ouverture
          publique sont exclus.
        </p>
        <p>
          Les durées suivantes sont inventées pour montrer le calcul. L’ordre
          dans chaque carte est toujours : scénario court, central, prudent.
          Chaque écart correspond à l’hypothèse visible dans la carte. Pour
          isoler l’effet des attentes, cet exemple suppose que les personnes
          nécessaires sont disponibles en parallèle dès qu’aucun lien n’est
          indiqué. Avec une ressource partagée, il faudrait ajouter son ordre de
          travail et les trois résultats pourraient changer.
        </p>

        <section
          className="not-prose my-7 grid gap-4 md:grid-cols-2"
          aria-labelledby="exemple"
        >
          {workItems.map((item) => (
            <article
              key={item.code}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white dark:bg-zinc-100 dark:text-zinc-950">
                  {item.code}
                </span>
                <h3 className="m-0 text-sm font-semibold leading-relaxed text-zinc-950 dark:text-zinc-100">
                  {item.result}
                </h3>
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Qui agit ?
                  </dt>
                  <dd className="mt-1 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.owner}
                  </dd>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                      Attend
                    </dt>
                    <dd className="mt-1 text-zinc-600 dark:text-zinc-400">
                      {item.waitsFor}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                      Court · central · prudent
                    </dt>
                    <dd className="mt-1 text-zinc-600 dark:text-zinc-400">
                      {item.durations}
                    </dd>
                  </div>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950 dark:text-zinc-100">
                    Ce qui fait varier la durée
                  </dt>
                  <dd className="mt-1 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.hypothesis}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </section>

        <h3>Scénario court : le parcours principal fixe le jour 28</h3>
        <FormulaBox>
          {"A → B → D → H → I = 4 + 5 + 10 + 7 + 2 = 28\n" +
            "A → G → D → H → I = 4 + 3 + 10 + 7 + 2 = 26\n" +
            "A → C → E → H → I = 4 + 3 + 5 + 7 + 2 = 21\n" +
            "A → F → H → I     = 4 + 4 + 7 + 2 = 17\n" +
            "A → B → D → P → I = 4 + 5 + 10 + 4 + 2 = 25\n" +
            "A → G → D → P → I = 4 + 3 + 10 + 4 + 2 = 23"}
        </FormulaBox>
        <p>
          La suite A → B → D → H → I est la plus longue : le scénario court se
          termine donc au <strong>jour ouvré fictif 28</strong>. Les autres
          travaux restent nécessaires ; ils finissent simplement avant que H ou
          I ne les attende.
        </p>

        <h3>Scénario central : la même suite fixe le jour 41</h3>
        <FormulaBox>
          {"A → B → D → H → I = 6 + 7 + 15 + 10 + 3 = 41\n" +
            "A → G → D → H → I = 6 + 5 + 15 + 10 + 3 = 39\n" +
            "A → C → E → H → I = 6 + 6 + 8 + 10 + 3 = 33\n" +
            "A → F → H → I     = 6 + 7 + 10 + 3 = 26\n" +
            "A → B → D → P → I = 6 + 7 + 15 + 6 + 3 = 37\n" +
            "A → G → D → P → I = 6 + 5 + 15 + 6 + 3 = 35"}
        </FormulaBox>
        <p>
          A finit au jour 6. B finit au jour 13, G au jour 11 : D attend les
          deux et finit au jour 28. C puis E finissent au jour 20, F au jour 13.
          H attend D, E et F : il finit au jour 38. P finit au jour 34. I attend
          H et P, puis finit au <strong>jour ouvré fictif 41</strong>.
        </p>

        <h3>Scénario prudent : la connexion externe fixe le jour 66</h3>
        <FormulaBox>
          {"A → B → D → H → I = 8 + 10 + 22 + 15 + 5 = 60\n" +
            "A → G → D → H → I = 8 + 8 + 22 + 15 + 5 = 58\n" +
            "A → C → E → H → I = 8 + 20 + 18 + 15 + 5 = 66\n" +
            "A → F → H → I     = 8 + 12 + 15 + 5 = 40\n" +
            "A → B → D → P → I = 8 + 10 + 22 + 10 + 5 = 55\n" +
            "A → G → D → P → I = 8 + 8 + 22 + 10 + 5 = 53"}
        </FormulaBox>
        <p>
          C finit au jour 28, puis E au jour 46. Le parcours construit par D
          finit au jour 40 et F au jour 20. H attend donc E, finit au jour 61,
          puis I au <strong>jour ouvré fictif 66</strong>. La suite A → C → E →
          H → I est devenue la plus longue.
        </p>

        <h2 id="chemin-change">
          Pourquoi l’accès externe finit par fixer la date
        </h2>
        <p>
          Dans les deux premiers scénarios, le parcours principal et sa
          validation fixent la date. Dans le scénario prudent, la réponse de
          l’éditeur tiers puis la connexion au stock prennent davantage de
          temps. Ajouter des personnes sur les écrans ne raccourcirait donc pas
          le jour 66.
        </p>
        <p>
          La première action utile consiste à demander et essayer l’accès
          externe tôt. Si cet essai échoue, l’entreprise peut décider avant de
          construire le reste : attendre l’éditeur, utiliser un import de
          fichier contrôlé pendant le pilote ou déplacer la date. L’essai ne «
          retarde » pas le projet ; il remplace une hypothèse fragile par une
          information qui permet de choisir.
        </p>
        <InfoBox variant="emerald" title="Ce que démontrent les trois calculs">
          Les nombres 28, 41 et 66 ne décrivent aucun autre SaaS. Ils montrent
          seulement qu’un même ensemble de travaux peut finir à trois dates
          différentes et que la suite qui fixe la date peut changer lorsque les
          hypothèses changent.
        </InfoBox>

        <h2 id="ouverture">
          Le code terminé n’est pas encore un service ouvert
        </h2>
        <p>
          Une date d’ouverture doit conserver le travail qui suit le dernier
          écran : préparer les situations de test, faire accepter ou refuser le
          parcours, corriger les écarts convenus, configurer le service, le
          surveiller, pouvoir arrêter une fonction ou revenir à une version
          précédente et aider les premiers utilisateurs.
        </p>
        <p>
          Pour un produit qui traite des données personnelles, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande d’intégrer la sécurité dès la conception
          </a>
          , de séparer développement, tests et production, et de commencer les
          tests avec des données fictives ou réellement anonymisées. Si ces
          tests ne suffisent pas et que des données réelles sont nécessaires en
          préproduction, cette préproduction doit être protégée comme la
          production après les autres tests. Cette recommandation ne certifie ni
          la conformité globale, ni une durée.
        </p>
        <p>
          Le référentiel américain du{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Institute of Standards and Technology (NIST) SP 800-218
            version 1.1
          </a>{" "}
          traite également la sécurité comme un travail intégré au cycle de
          développement, avec des rôles et exigences documentés. La version 1.1
          est la version finale consultée ; une version 1.2 n’était encore qu’un
          projet public initial en juillet 2026. Ce référentiel américain n’est
          ni une certification ni un avis réglementaire français.
        </p>
        <p>
          Si votre première version utilise Stripe, les{" "}
          <a
            href="https://docs.stripe.com/billing/testing"
            target="_blank"
            rel="noopener noreferrer"
          >
            tests d’abonnement
          </a>{" "}
          et la{" "}
          <a
            href="https://docs.stripe.com/get-started/checklist/go-live"
            target="_blank"
            rel="noopener noreferrer"
          >
            préparation du passage en direct
          </a>{" "}
          font partie du plan propre à cette intégration. Stripe n’est qu’un
          exemple conditionnel : un SaaS n’a pas besoin de ce fournisseur ni
          d’un paiement dans sa première ligne d’arrivée.
        </p>

        <h2 id="date-ne-tient-pas">
          Si la date ne tient plus, choisissez ce que vous changez
        </h2>
        <p>
          Une date commerciale fixe n’oblige pas à appeler « prêt » un produit
          qui ne l’est pas. Rendez le choix visible, avec la personne qui peut
          l’autoriser.
        </p>
        <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Tester avant de construire",
              text: "Essayez la connexion, le format de données, la règle ou le calcul qui pourrait déplacer toute la date.",
            },
            {
              title: "Réduire la première version",
              text: "Retirez un public, un rôle ou un cas secondaire tout en gardant la promesse faite aux premiers utilisateurs.",
            },
            {
              title: "Organiser un pilote",
              text: "Limitez le nombre d’utilisateurs et gardez une étape manuelle annoncée avec une aide renforcée.",
            },
            {
              title: "Simplifier une connexion",
              text: "Remplacez temporairement une synchronisation par un import contrôlé si le résultat du pilote reste honnête.",
            },
            {
              title: "Déplacer la date",
              text: "Conservez la ligne d’arrivée et donnez le temps nécessaire aux accès, décisions et tests qui ne peuvent pas être retirés.",
            },
            {
              title: "Reporter le développement",
              text: "Validez d’abord le problème, testez un outil existant ou attendez qu’un décideur et des utilisateurs soient disponibles.",
            },
          ].map((choice) => (
            <article
              key={choice.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                {choice.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {choice.text}
              </p>
            </article>
          ))}
        </div>
        <p>
          Ne retirez pas en silence les tests, la protection des données, la
          surveillance ou le support alors que la nouvelle ligne d’arrivée en a
          besoin. Le bon raccourci change ce qui sera lancé ; il ne change pas
          secrètement le sens du mot « prêt ».
        </p>

        <h2 id="fiche">Copiez cette fiche avant de comparer deux devis</h2>
        <p>
          Remplissez les douze lignes avec les personnes concernées. Les cases
          vides deviennent des questions à poser ; elles ne sont pas remplacées
          par zéro jour. Vous pouvez copier le bloc dans un document partagé,
          sans créer de compte ni transmettre vos données au site.
        </p>
        <section
          className="not-prose my-7 grid gap-4 md:grid-cols-2"
          aria-labelledby="fiche"
        >
          {planningFields.map((field) => (
            <section
              key={field.number}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-violet-700 dark:text-violet-300">
                  {field.number}
                </span>
                <div>
                  <h3 className="m-0 text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                    {field.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {field.prompt}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </section>
        <FormulaBox>
          {"RÈGLE DE CALCUL À JOINDRE À LA FICHE\n" +
            "Pour chaque scénario :\n" +
            "1. noter ce que chaque travail attend ;\n" +
            "2. retenir la fin la plus tardive de ces attentes ;\n" +
            "3. ajouter la durée du travail ;\n" +
            "4. continuer jusqu’à l’ouverture ;\n" +
            "5. comparer toutes les suites qui mènent à l’ouverture ;\n" +
            "6. écrire ce qui ferait changer la suite la plus longue."}
        </FormulaBox>

        <h2 id="recalcul">Quand faut-il recalculer la date ?</h2>
        <p>
          Un plan utile change lorsque l’information change. Décidez avant le
          projet qui mettra à jour les durées restantes et qui acceptera une
          modification de la date ou du résultat attendu.
        </p>
        <ul>
          {revisionEvents.map((event) => (
            <li key={event}>Recalculez lorsque {event}.</li>
          ))}
        </ul>
        <p>
          Remplacez les hypothèses terminées par ce qui s’est réellement passé,
          puis estimez seulement le travail restant. Une date cible peut rester
          la même ; le plan ne doit pas rester faux pour protéger la première
          présentation.
        </p>

        <GuideInlineCTA
          title="Faire vérifier le calendrier de votre SaaS"
          description="Apportez votre ligne d’arrivée, les travaux qui s’attendent et les accès encore incertains. L’échange sert à vérifier ce qui peut être testé, réduit, piloté ou reporté avant de demander un devis."
          tags={[
            "Calendrier relu",
            "Version plus petite possible",
            "Développement non immédiat possible",
          ]}
          ctaLabel="Présenter mon calendrier"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites de ce guide</h2>
        <ul>
          <li>
            Le{" "}
            <a
              href="https://www.gao.gov/assets/gao-16-89g.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide complet du GAO sur l’évaluation d’un calendrier
            </a>{" "}
            soutient la complétude des activités, les liens, les hypothèses, la
            recherche du chemin critique et la mise à jour. Il concerne de
            grands programmes publics américains, pas la durée d’un SaaS.
          </li>
          <li>
            Le{" "}
            <a
              href="https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works"
              target="_blank"
              rel="noopener noreferrer"
            >
              manuel GOV.UK sur une phase de test avec des utilisateurs
            </a>{" "}
            et celui sur{" "}
            <a
              href="https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works"
              target="_blank"
              rel="noopener noreferrer"
            >
              l’exploitation d’un service en ligne
            </a>{" "}
            montrent que support, sécurité, mise en ligne et exploitation ne se
            résument pas au codage. Ils décrivent des services publics
            britanniques, pas une norme commerciale française.
          </li>
          <li>
            Les trois scénarios, le terme « ligne d’arrivée », la fiche de douze
            champs et la recommandation de tester l’inconnu sont des adaptations
            pédagogiques Hagnéré Code. Elles ne sont attribuées ni au GAO, ni à
            GOV.UK, ni à la CNIL, ni au NIST.
          </li>
          <li>
            L’exemple de réservation de matériel, ses dix travaux et ses 28, 41
            et 66 jours ouvrés sont entièrement fictifs. Ils ne constituent ni
            un devis, ni une moyenne, ni une promesse pour votre projet.
          </li>
          <li>
            Les jours ouvrés de l’exemple ne sont pas convertis en date réelle.
            Votre calendrier doit encore tenir compte des jours travaillés, des
            congés, des temps partiels et des dates imposées.
          </li>
          <li>
            Les informations de sécurité et de protection des données restent
            générales. Elles ne remplacent ni l’analyse propre à votre produit,
            ni un conseil juridique ou une évaluation de sécurité.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
