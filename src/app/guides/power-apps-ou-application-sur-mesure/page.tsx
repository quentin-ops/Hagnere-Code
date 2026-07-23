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

const guide = getGuide("power-apps-ou-application-sur-mesure");

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
        alt: "Power Apps ou application sur mesure : cinq tests avant de choisir",
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
      name: "Power Apps ou application sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Power Apps est-il inclus dans Microsoft 365 ?",
    answer:
      "Certaines capacités et certains connecteurs standards peuvent être couverts par des droits Microsoft 365, mais cela ne couvre pas automatiquement chaque application. Un connecteur Premium, un connecteur personnalisé, une passerelle locale ou un flux lié peut changer les droits nécessaires : vérifiez l’inventaire complet et le guide de licences Microsoft en vigueur.",
  },
  {
    question: "Combien coûte Power Apps Premium ?",
    answer:
      "La page française de Microsoft affichait 17,30 € HT par utilisateur et par mois, avec paiement annuel, le 23 juillet 2026. Ce tarif peut changer et ne comprend pas à lui seul la conception, la reprise des données, l’administration, la formation, les capacités supplémentaires, le support ni la sortie.",
  },
  {
    question: "Power Apps peut-il gérer beaucoup de données ?",
    answer:
      "Oui, selon la source et les requêtes. Le point à tester est la délégation : lorsqu’une formule ne peut pas être exécutée par la source, Microsoft indique que l’application traite localement 500 enregistrements par défaut, jusqu’à 2 000, avec un risque de résultat incomplet au-delà.",
  },
  {
    question: "Peut-on récupérer le code d’une application Power Apps ?",
    answer:
      "Microsoft permet d’exporter des solutions et de placer leurs composants sous contrôle de source. Cet export facilite sauvegarde, versionnement et import dans Power Platform ; il ne transforme pas automatiquement l’application en code React, Next.js ou mobile réutilisable ailleurs.",
  },
  {
    question: "Une approche hybride Power Apps et sur mesure est-elle viable ?",
    answer:
      "Oui, si la frontière est claire. Power Apps peut servir un parcours interne tandis qu’une API ou une application dédiée porte une règle, un volume ou un public que la plateforme sert moins bien. Il faut alors chiffrer et tester les deux côtés, leurs connexions et leur exploitation.",
  },
  {
    question: "Quand vaut-il mieux ne rien réécrire ?",
    answer:
      "Lorsque les cinq tests passent, que les licences sont comprises, que l’application a un propriétaire et qu’un export restaurable existe, continuer avec Power Apps peut être le choix le plus raisonnable. Organiser l’existant est un vrai résultat, pas une décision provisoire par défaut.",
  },
];

const decisionTests = [
  {
    number: "01",
    question: "Qui utilise réellement l’application ?",
    why: "Une application interne pour douze salariés, un outil ouvert à des partenaires et un service vendu à des clients ne posent pas les mêmes questions de licence, d’identité et d’expérience.",
    action:
      "Listez chaque rôle, le nombre de personnes, leur entreprise, leur appareil et le moment où elles utilisent l’outil.",
    proof:
      "Un utilisateur de chaque rôle accomplit la fonction importante avec ses vrais droits, sur son appareil habituel.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    number: "02",
    question: "Les réponses portent-elles sur toutes les données ?",
    why: "Une formule Power Apps peut sembler correcte sur un petit jeu de données et ne chercher que dans les premières lignes lorsque la requête ne peut pas être transmise à la source.",
    action:
      "Rejouez les recherches, tris et calculs décisifs avec le volume attendu, y compris un enregistrement placé volontairement au-delà des premières lignes.",
    proof:
      "L’enregistrement témoin est trouvé et le résultat est identique au calcul effectué directement dans la source.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    number: "03",
    question: "Quelles connexions changent les droits ou la sécurité ?",
    why: "L’écran n’est qu’une partie de la solution. Un flux Power Automate, un connecteur personnalisé, une passerelle locale ou une règle de protection des données peut changer le coût ou bloquer l’usage.",
    action:
      "Inventoriez les sources, connecteurs, flux, comptes de connexion, passerelles et politiques appliquées dans chaque environnement.",
    proof:
      "L’administrateur Microsoft confirme la désignation, les licences et les combinaisons de connecteurs autorisées.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    number: "04",
    question: "Qui maintient l’application quand son créateur est absent ?",
    why: "Le peu de code n’enlève ni les changements de règles, ni les connexions expirées, ni les erreurs, ni la nécessité de tester avant de publier.",
    action:
      "Nommez le responsable métier, l’administrateur Power Platform et la personne capable de corriger ou restaurer l’application.",
    proof:
      "Une autre personne traite un incident fictif dans un environnement de test en suivant une procédure écrite.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    number: "05",
    question: "Que récupérez-vous si vous changez de solution ?",
    why: "Un export Power Platform protège la continuité dans cet écosystème. Il ne remplace pas un export lisible des données, la liste des règles et la documentation des connexions.",
    action:
      "Exportez la solution, les données nécessaires, les variables d’environnement et la liste des dépendances ; consignez aussi les droits de chaque compte.",
    proof:
      "La solution est importée dans un environnement distinct et les données de sortie sont lisibles sans l’application d’origine.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
];

const paths = [
  {
    title: "Organiser l’existant sans investir dans une nouvelle application",
    choose:
      "Les cinq tests passent, mais les propriétaires, sauvegardes ou règles de publication sont flous.",
    doNext:
      "Nommer les responsables, isoler test et production, documenter les connexions et tester l’export.",
    stopIf:
      "Une fonction décisive continue de donner une réponse incomplète ou dépend d’un contournement quotidien.",
    color: "border-zinc-200 dark:border-zinc-800",
  },
  {
    title: "Continuer avec Power Apps",
    choose:
      "Les utilisateurs sont internes, l’environnement Microsoft est administré et les données ou connecteurs passent les tests.",
    doNext:
      "Calculer les licences sur les rôles réels, faire tester les mauvais cas et prévoir l’exploitation.",
    stopIf:
      "Le coût, les règles de sécurité ou la limite d’une requête importante ne peuvent pas être démontrés.",
    color: "border-violet-200 dark:border-violet-900",
  },
  {
    title: "Garder Power Apps et développer une partie ciblée",
    choose:
      "L’outil convient aux écrans internes, mais une règle, une connexion, un volume ou un canal exige une base dédiée.",
    doNext:
      "Définir qui possède chaque donnée, l’interface entre les deux parties et la reprise après erreur.",
    stopIf:
      "La frontière crée deux sources concurrentes ou double chaque coût d’administration.",
    color: "border-blue-200 dark:border-blue-900",
  },
  {
    title: "Construire une application dédiée",
    choose:
      "Une contrainte métier importante échoue durablement, le public dépasse le cadre interne ou la maîtrise du produit justifie le code dédié.",
    doNext:
      "Commencer par la fonction qui échoue, conserver un export et organiser une transition réversible.",
    stopIf:
      "La réécriture ne fait que reproduire les écrans sans corriger la donnée, la responsabilité ou le processus.",
    color: "border-emerald-200 dark:border-emerald-900",
  },
];

const tocItems = [
  { id: "reponse", label: "La réponse courte" },
  { id: "cinq-tests", label: "Les cinq tests qui changent le choix" },
  { id: "cout", label: "Ce que le prix de licence ne dit pas" },
  { id: "chemins", label: "Quatre chemins, dont ne rien réécrire" },
  { id: "audit", label: "Votre audit autonome en une réunion" },
  { id: "sources", label: "Sources officielles et limites" },
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
          { label: "Power Apps ou application sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre application Power Apps fonctionne aujourd’hui. Faites cinq tests concrets avant de payer davantage de licences, d’ajouter du code ou de tout reconstruire."
        heroAction={{ href: "#cinq-tests", label: "Commencer les cinq tests" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "5 tests observables",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Licences datées",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 chemins possibles",
            description: "",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "Choisir entre no-code et sur mesure",
          },
          {
            href: "/guides/remplacer-microsoft-access-application-web",
            label: "Préparer la sortie de Microsoft Access",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Comprendre le prix d’un logiciel sur mesure",
          },
        ]}
        faqTitle="Questions fréquentes sur Power Apps et le sur-mesure"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <div id="reponse" className="scroll-mt-24">
          <p className="lead">
            <strong>
              Power Apps peut rester le bon choix si vos utilisateurs, vos
              données, vos connexions et son administration restent dans un
              cadre maîtrisé.
            </strong>{" "}
            Une application dédiée devient plus raisonnable lorsqu’une fonction
            importante échoue à volume réel, que le public dépasse le cadre
            interne ou que l’entreprise doit maîtriser un produit que Power Apps
            ne peut pas porter sans contournements. Entre les deux, une solution
            hybride est possible. Ne décidez donc ni sur le nombre d’écrans ni
            sur l’étiquette « low-code ». Faites cinq tests : qui utilise
            l’outil, quelles données il interroge vraiment, quelles connexions
            il mobilise, qui le maintient et ce que vous récupérez en partant. À
            la fin, vous saurez vérifier ces cinq points, calculer le coût de
            licence que l’on peut réellement confirmer et choisir entre
            conserver l’outil, le corriger, le compléter ou le remplacer.
          </p>
        </div>

        <InfoBox
          variant="blue"
          title="Power Apps, expliqué sans vocabulaire de plateforme"
        >
          <p className="mb-0">
            Power Apps permet d’assembler des écrans, des règles et des
            connexions à des données avec moins de code qu’une application
            développée de zéro. Cela réduit certains travaux. Cela ne supprime
            ni les licences, ni les tests, ni les droits d’accès, ni
            l’administration, ni la maintenance.
          </p>
        </InfoBox>

        <GuideToc items={tocItems} />

        <h2 id="cinq-tests">
          Les cinq tests qui disent si Power Apps peut encore accompagner
          l’entreprise
        </h2>

        <p>
          Prenez une seule fonction qui compte vraiment : valider une commande,
          retrouver un dossier, enregistrer une intervention ou autoriser un
          paiement. Chaque test ci-dessous doit produire une preuve, pas une
          opinion sur l’outil.
        </p>

        <div className="not-prose my-8 space-y-4">
          {decisionTests.map((test) => (
            <section
              key={test.number}
              className={`rounded-2xl border p-5 sm:p-6 ${test.color}`}
            >
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {test.number}
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100 sm:text-lg">
                    {test.question}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {test.why}
                  </p>
                </div>
              </div>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white/70 p-4 dark:bg-zinc-950/45">
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    À faire
                  </dt>
                  <dd className="mb-0 mt-2 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {test.action}
                  </dd>
                </div>
                <div className="rounded-xl bg-white/70 p-4 dark:bg-zinc-950/45">
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Preuve attendue
                  </dt>
                  <dd className="mb-0 mt-2 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {test.proof}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <p>
          Pour un partenaire ou un sous-traitant, « partager l’application » ne
          suffit pas.{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/share-app-guests"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft demande un accès invité Microsoft Entra B2B
          </a>
          , des droits Power Apps adaptés à l’application et l’accès à chacune
          des sources de données utilisées. Si vous voulez servir un grand
          nombre de clients externes, comparez aussi cette organisation avec
          Power Pages ou une application dédiée au lieu de supposer que les
          comptes invités se multiplieront sans contrainte.
        </p>

        <p>
          Le deuxième test mérite une attention particulière.{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft explique la délégation des requêtes
          </a>{" "}
          ainsi : lorsqu’une formule ne peut pas être exécutée directement par
          la source, Power Apps traite localement 500 enregistrements par
          défaut, avec un réglage possible jusqu’à 2 000. Au-delà, un résultat
          peut être incomplet. Ce n’est pas une limite générale de taille de
          Dataverse ; c’est un risque précis à rechercher dans vos formules et
          vos sources.
        </p>

        <p>
          Le troisième test ne se limite pas à l’écran.{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/license-designation"
            target="_blank"
            rel="noopener noreferrer"
          >
            La documentation Microsoft sur la désignation des licences
          </a>{" "}
          indique qu’un connecteur Premium, personnalisé ou local rend
          l’application Premium. Elle précise aussi qu’un connecteur Premium
          utilisé dans un flux lié peut créer un besoin de licence sans être
          détecté dans la désignation affichée par l’application. Faites donc
          relire l’inventaire complet par l’administrateur Microsoft de
          l’entreprise.
        </p>

        <InfoBox
          variant="amber"
          title="Le hors connexion doit être testé sur le vrai appareil"
        >
          <p>
            Une application canvas ouverte dans un navigateur ne fonctionne pas
            hors ligne. Microsoft réserve ce fonctionnement à Power Apps Mobile.
            Avec Dataverse, la plateforme propose un mode « offline-first ».
            Avec d’autres sources, le stockage local repose notamment sur{" "}
            <code>LoadData</code> et <code>SaveData</code>, avec davantage de
            limites et sans résolution automatique des conflits.
          </p>
          <p className="mb-0">
            Passez donc le téléphone en mode avion, créez et modifiez deux
            données susceptibles d’entrer en conflit, puis reconnectez-le.
            Vérifiez ce qui se synchronise, ce qui reste en attente et ce que
            voit l’utilisateur. Les connecteurs qui appellent un service en
            ligne ne deviennent pas disponibles par magie hors connexion.
          </p>
        </InfoBox>

        <h2 id="cout">
          Commencez par compter les personnes avant de comparer les coûts
        </h2>

        <p>
          Le{" "}
          <a
            href="https://learn.microsoft.com/en-us/power-platform/developer/plan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Power Apps Developer Plan
          </a>{" "}
          fournit gratuitement un environnement pour construire et tester. Il
          n’autorise pas l’exploitation en production : Microsoft indique qu’un
          plan payant adapté est nécessaire pour déployer ou utiliser la
          solution en production. Avant de quitter l’environnement de
          développement, exportez la solution et vérifiez son import dans
          l’environnement qui l’hébergera réellement.
        </p>

        <p>
          La{" "}
          <a
            href="https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            page française de tarification Power Apps
          </a>{" "}
          affichait, le 23 juillet 2026, Power Apps Premium à{" "}
          <strong>17,30 € HT par utilisateur et par mois</strong>, avec paiement
          annuel. Elle affichait aussi des droits Dataverse associés. Le prix et
          les conditions peuvent changer : vérifiez-les au moment de la décision
          et dans votre contrat.
        </p>

        <InfoBox
          variant="amber"
          title="Exemple illustratif fictif — uniquement les licences"
        >
          <p className="mb-0">
            Une PME fictive envisage quarante utilisateurs Premium pendant trois
            ans. Elle calcule le prix public affiché, sans le présenter comme un
            coût total.
          </p>
        </InfoBox>

        <FormulaBox>
          {`40 utilisateurs × 17,30 € HT × 36 mois = 24 912 € HT

Inclus dans ce calcul : licences Premium au prix public daté.
À confirmer : conception, migration, formation, administration, connecteurs,
automatisations, capacité supplémentaire, support et sortie.
Application dédiée : budget à confirmer sur le même besoin et la même durée.`}
        </FormulaBox>

        <p>
          Un coût total comparable additionne les mêmes postes sur la même
          durée. Pour Power Apps : licences, réalisation, données, gestion des
          environnements, administration, assistance et sortie. Pour
          l’application dédiée : conception, développement, hébergement,
          maintenance, sécurité, évolutions et sortie. Une inconnue reste « à
          confirmer » ; elle ne vaut jamais zéro.
        </p>

        <h2 id="chemins">
          Quatre chemins restent ouverts, dont ne rien réécrire
        </h2>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {paths.map((path) => (
            <section
              key={path.title}
              className={`rounded-2xl border bg-white p-5 dark:bg-zinc-950 ${path.color}`}
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                {path.title}
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Choisissez ce chemin si
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-400">
                    {path.choose}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Prochaine action
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-400">
                    {path.doNext}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Arrêtez l’essai si
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-400">
                    {path.stopIf}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <p>
          L’approche hybride ne doit pas devenir un compromis vague. Écrivez
          quelle partie reste dans Power Apps, quelle partie est développée, qui
          possède chaque donnée et ce qui se passe si leur connexion échoue. Si
          deux systèmes peuvent modifier la même information sans règle
          d’autorité, vous avez déplacé le problème.
        </p>

        <h2 id="audit">
          Testez les cinq points en une réunion, puis choisissez avec les
          résultats
        </h2>

        <p>
          Réunissez un utilisateur, le responsable métier, le créateur de
          l’application et l’administrateur Microsoft. Choisissez la fonction
          qui coûterait le plus cher si elle donnait une mauvaise réponse.
          Remplissez cette fiche :
        </p>

        <div className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-6">
          <ol className="m-0 space-y-4 p-0">
            {[
              "Utilisateur : quel rôle accomplit la fonction, avec quel compte et quel appareil ?",
              "Données : quel enregistrement témoin prouve que la recherche couvre le volume attendu ?",
              "Connexions : quels connecteurs, flux, passerelles et politiques participent au résultat ?",
              "Exploitation : qui diagnostique, corrige, publie et restaure en l’absence du créateur ?",
              "Sortie : quel export de solution et de données a réellement été importé ou relu ailleurs ?",
            ].map((item, index) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-zinc-800 shadow-sm dark:bg-zinc-950 dark:text-zinc-200"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <p>
          Si les cinq réponses sont bonnes et que le coût reste acceptable, vous
          avez une raison positive de conserver Power Apps. Si un test échoue,
          corrigez-le ou comparez les chemins sur ce défaut précis. N’achetez
          pas une réécriture générale pour résoudre une seule requête
          incomplète.
        </p>

        <GuideInlineCTA
          title="Power Apps est-il encore le bon choix pour votre entreprise ?"
          description="Montrez-nous la fonction qui compte, les utilisateurs concernés, les connecteurs et le résultat obtenu avec votre vrai volume de données. Nous comparerons le maintien de l’existant, une correction ciblée, une solution hybride et une application dédiée — sans pousser à la réécriture."
          tags={[
            "Choix encore ouvert",
            "Option simple conservée",
            "Coût de licence isolé",
          ]}
          ctaLabel="Comparer mes options"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites de ce guide</h2>

        <ul>
          <li>
            <a
              href="https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft — tarification Power Apps
            </a>{" "}
            : prix public français, paiement et droits affichés, consultés le 23
            juillet 2026.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/license-designation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — désignation des licences d’une application
            </a>{" "}
            : connecteurs standards, Premium et limite concernant les flux liés.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — délégation et limites de requêtes
            </a>{" "}
            : traitement local et risque de résultats incomplets.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/offline-apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — applications canvas hors connexion
            </a>{" "}
            : Power Apps Mobile, mode Dataverse et limites du stockage local.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/power-platform/developer/plan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — Power Apps Developer Plan
            </a>{" "}
            : environnement gratuit de développement et de test, distinct de la
            production.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/share-app-guests"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — partage avec des utilisateurs invités
            </a>{" "}
            : identité, droits et accès aux sources pour les partenaires
            externes.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/power-platform/admin/prevent-data-loss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — politiques de données
            </a>{" "}
            : classement et combinaisons de connecteurs.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-in/power-apps/maker/data-platform/export-solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — export des solutions
            </a>{" "}
            : export, contrôle de source et limites des solutions gérées.
          </li>
        </ul>

        <p>
          Les licences Microsoft dépendent du contrat, des utilisateurs, des
          environnements, des connecteurs et des flux exacts. Ce guide fournit
          une méthode générale ; il ne remplace ni la vérification contractuelle
          par Microsoft ou votre revendeur, ni un audit de sécurité, de données
          ou de conformité adapté à votre entreprise.
        </p>

        <p>
          Pour élargir la comparaison avant tout choix de plateforme, consultez
          aussi le guide{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou développement sur mesure
          </Link>
          .
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
