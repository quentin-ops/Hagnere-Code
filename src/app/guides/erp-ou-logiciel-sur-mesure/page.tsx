import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("erp-ou-logiciel-sur-mesure");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.heroTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ERP, logiciel standard, hybride ou sur mesure : la grille de décision",
      },
    ],
    publishedTime: guide.datePublished + "T09:00:00+02:00",
    modifiedTime: guide.dateModified + "T09:00:00+02:00",
    authors: [SITE_URL + "/equipe"],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.heroTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    knowsAbout: [
      "Applications métier",
      "ERP",
      "Logiciels de gestion",
      "Développement sur mesure",
      "Intégration de systèmes",
      "Migration de données",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_URL + "/logos/logo-dark.png",
    },
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
      name: "ERP ou logiciel sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Quelle différence entre un ERP et un logiciel métier sur mesure ?",
    answer:
      "Un ERP, ou progiciel de gestion intégré, propose un socle déjà construit pour couvrir plusieurs fonctions de l’entreprise : ventes, achats, stocks, finance ou production selon les offres. Un logiciel métier sur mesure part de vos règles et de vos parcours. Entre les deux existent un ERP configurable et l’approche hybride, qui conserve le socle standard mais lui ajoute un module ou une interface spécifique.",
  },
  {
    question: "Un ERP en SaaS est-il forcément un logiciel standard ?",
    answer:
      "Non. SaaS décrit la façon d’utiliser et de payer un logiciel, généralement en ligne par abonnement ; standard ou sur mesure décrit son degré d’adaptation. Un ERP standard peut être distribué en SaaS, et une application sur mesure peut aussi être hébergée et exploitée comme un service en ligne. Comparez séparément le périmètre fonctionnel, le mode d’hébergement et le modèle économique.",
  },
  {
    question: "Faut-il choisir l’ERP s’il couvre presque tout le besoin ?",
    answer:
      "Pas sur la base d’un pourcentage global. Un petit manque peut être éliminatoire s’il touche une règle critique, une obligation ou votre avantage métier. À l’inverse, de nombreux écarts secondaires peuvent être acceptables. Faites exécuter trois scénarios réels, dont une exception et une correction, puis classez chaque écart : bloquant, contournable temporairement ou simplement confortable.",
  },
  {
    question:
      "Comment comparer le coût d’un ERP et celui d’un développement sur mesure ?",
    answer:
      "Utilisez le même nombre d’utilisateurs, le même périmètre et le même horizon, par exemple quatre ans. Additionnez licences ou développement, cadrage, paramétrage, intégrations, reprise des données, temps interne, formation, hébergement, support, maintenance, évolutions, coexistence avec l’ancien système et coût de sortie. Un abonnement mensuel et un devis initial ne sont pas directement comparables.",
  },
  {
    question:
      "Peut-on garder un ERP et développer seulement un module sur mesure ?",
    answer:
      "Oui, c’est l’approche hybride. Elle est souvent pertinente lorsque la comptabilité, les achats ou les stocks sont standards, mais qu’un processus de planification, de production, de tarification ou de relation client vous différencie. Elle exige toutefois une API ou un mécanisme d’échange documenté, un propriétaire clair des données et un plan de reprise en cas d’échec de la synchronisation.",
  },
  {
    question:
      "Que faut-il exiger pour pouvoir quitter un ERP ou changer de prestataire ?",
    answer:
      "Demandez avant signature un export test comprenant données, identifiants, pièces jointes et relations, dans des formats documentés et exploitables. Le contrat doit préciser le délai, le coût, l’assistance, la restitution ou destruction des données, ainsi que les accès, la documentation et le dépôt du code lorsqu’un développement spécifique existe. Un bouton CSV isolé ne prouve pas une réversibilité complète.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }}
      />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "ERP ou logiciel sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Un ERP standard, une solution configurable, un socle hybride ou un développement complet ne répondent pas au même risque. Fixez les critères avant les démonstrations, exigez les mêmes preuves et comparez le coût total — sortie comprise."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Publié le " + formatGuideDate(guide.datePublished)}
        keyPoints={[
          {
            number: "01",
            title: "4 architectures possibles",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "10 critères avant le verdict",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Coût total sur 4 ans",
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
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou sur-mesure",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d’un logiciel sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d’une application métier",
          },
          {
            href: "/guides/combien-coute-un-crm",
            label: "Combien coûte réellement un CRM",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Outils internes sur mesure",
          },
          {
            href: "/services/saas-applications-metier",
            label: "SaaS et applications métier",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Propriété du code et des accès",
          },
        ]}
        faqTitle="ERP ou logiciel sur mesure : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Commencez par la solution la moins complexe qui couvre durablement
            vos processus critiques.
          </strong>{" "}
          Si un logiciel du marché exécute vos vrais scénarios, s’intègre à
          l’existant, est adopté par l’équipe et vous laisse sortir avec vos
          données, achetez-le. Si le socle standard convient mais qu’un flux qui
          vous différencie résiste, ajoutez un module ciblé. Le développement
          entièrement sur mesure ne gagne que lorsque cette spécificité justifie
          son coût, sa maintenance et la responsabilité de piloter un produit
          logiciel.
        </p>

        <InfoBox variant="blue" title="La réponse n’est pas binaire">
          <ol className="mb-0 mt-2 space-y-1.5 pl-5">
            <li>
              <strong>Standard</strong> : vous adoptez le fonctionnement prévu
              par l’éditeur.
            </li>
            <li>
              <strong>Configurable</strong> : vous adaptez champs, rôles et
              circuits sans modifier le cœur.
            </li>
            <li>
              <strong>Hybride</strong> : le progiciel reste le socle, un module
              spécifique porte votre différence.
            </li>
            <li>
              <strong>Sur mesure</strong> : l’application entière est conçue
              autour de vos règles.
            </li>
          </ol>
        </InfoBox>

        <p>
          Nous développons des applications métier : notre biais commercial doit
          donc être visible. La méthode ci-dessous peut conclure qu’un ERP ou un
          logiciel vertical — un produit standard conçu pour un secteur précis —
          est supérieur à ce que nous pourrions construire. Le bon verdict n’est
          pas celui qui vend le plus de code ; c’est celui qui réduit le mieux
          le coût et le risque du processus sur la durée.
        </p>

        <GuideToc
          items={[
            { id: "faux-duel", label: "Le faux duel entre ERP et sur-mesure" },
            {
              id: "quatre-architectures",
              label: "Les quatre architectures réellement comparables",
            },
            {
              id: "dix-criteres",
              label: "Les dix critères à écrire avant les démonstrations",
            },
            {
              id: "preuve",
              label:
                "Le protocole qui oblige chaque solution à faire ses preuves",
            },
            {
              id: "cout-total",
              label: "Comparer le coût total sur quatre ans",
            },
            { id: "adoption", label: "Tester l’adoption et l’organisation" },
            {
              id: "donnees-securite",
              label: "Données, intégrations, sécurité et réversibilité",
            },
            {
              id: "verdicts",
              label: "Les verdicts, selon des conditions observables",
            },
            { id: "note-decision", label: "La note de décision à produire" },
            {
              id: "premier-lot",
              label: "Commencer sans rendre le choix irréversible",
            },
            {
              id: "sources",
              label: "Sources officielles, référentiels et guides",
            },
          ]}
        />

        <h2 id="faux-duel">Le faux duel entre ERP et sur-mesure</h2>

        <p>
          Un <strong>ERP</strong>, ou progiciel de gestion intégré, réunit sur
          un même socle plusieurs fonctions de l’entreprise : achats, ventes,
          finance, stocks, production ou ressources humaines selon l’offre. Un{" "}
          <strong>logiciel métier</strong> vise un processus ou un secteur plus
          précis. Le <strong>sur-mesure</strong> décrit, lui, la façon dont le
          logiciel est conçu : à partir de règles propres à votre organisation.
        </p>

        <p>
          « SaaS » n’est pas une cinquième réponse. Le logiciel en tant que
          service désigne un usage en ligne, généralement par abonnement. À
          l’inverse, « on-premise » ou « sur site » signifie que le logiciel est
          exploité sur une infrastructure contrôlée par l’entreprise. Un ERP
          standard peut être un SaaS ou être installé sur site ; une application
          sur mesure peut aussi être hébergée en ligne. Pour choisir, séparez
          donc trois axes : ce que le logiciel sait faire, jusqu’où il se
          configure et comment il est hébergé et facturé.
        </p>

        <p>
          Le dossier pratique de{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment"
            target="_blank"
            rel="noreferrer"
          >
            France Num sur le choix d’un ERP
          </a>{" "}
          met en avant la couverture fonctionnelle, l’interopérabilité,
          l’ergonomie, la formation et le suivi. Cette liste dit déjà pourquoi
          une comparaison limitée au nombre de fonctions ou au prix d’appel ne
          suffit pas.
        </p>

        <InfoBox
          variant="amber"
          title="L’option oubliée : reporter ou réparer l’existant"
        >
          Si personne ne peut nommer le processus prioritaire, mesurer son coût
          actuel ou fournir des données assez propres pour un test, le projet
          n’est pas prêt. Une courte phase de cartographie, un meilleur partage
          d’Excel ou la suppression d’une double saisie peuvent précéder toute
          acquisition. Reporter une mauvaise décision est parfois l’option la
          moins risquée.
        </InfoBox>

        <h2 id="quatre-architectures">
          Les quatre architectures réellement comparables
        </h2>

        <GuideTable
          headers={[
            "Option",
            "Ce que vous adaptez",
            "Elle gagne quand…",
            "Risque principal",
          ]}
          rows={[
            [
              "Logiciel standard ou vertical",
              "Votre organisation adopte en grande partie les processus de l’éditeur",
              "les scénarios critiques sont courants dans votre secteur et démontrés sans contournement",
              "multiplier les outils ou les manipulations pour compenser un manque critique",
            ],
            [
              "ERP configurable",
              "Champs, rôles, règles, vues et circuits prévus par le produit",
              "le socle convient et les écarts restent dans les mécanismes documentés",
              "transformer du paramétrage en développement fragile impossible à mettre à jour",
            ],
            [
              "Architecture hybride",
              "Un module, une interface ou une automatisation spécifique autour du socle",
              "les fonctions communes sont standards mais un flux différenciant mérite sa propre expérience",
              "synchronisations mal définies et responsabilités dispersées",
            ],
            [
              "Logiciel entièrement sur mesure",
              "Processus, interface, règles, intégrations et feuille de route",
              "le cœur du besoin est spécifique, stable et suffisamment précieux pour être piloté comme un produit",
              "construire trop large et sous-estimer exploitation, sécurité et évolution",
            ],
          ]}
        />

        <p>
          Le standard ne signifie pas rigide et le sur-mesure ne signifie pas
          libre. Un ERP peut offrir une configuration profonde, mais uniquement
          dans les limites prévues par son éditeur. Une application spécifique
          peut, de son côté, vous enfermer chez un prestataire si le contrat, le
          dépôt du code, la documentation et l’infrastructure restent hors de
          votre contrôle.
        </p>

        <p>
          L’hybride mérite une place à part. Il évite de réécrire la
          comptabilité, les achats ou les stocks si ces fonctions sont déjà bien
          servies, tout en donnant une interface propre au processus qui crée
          votre avantage : planification, tarification, production,
          interventions terrain ou portail client. Il ne fonctionne que si les
          échanges entre le socle et le module sont documentés et surveillés.
          Une <strong>API</strong>, ou interface de programmation, est un moyen
          documenté par lequel deux logiciels échangent des données et
          déclenchent des actions. Son existence ne prouve pas, à elle seule,
          que les données, les droits et les volumes dont vous avez besoin sont
          réellement disponibles.
        </p>

        <h2 id="dix-criteres">
          Les dix critères à écrire avant les démonstrations
        </h2>

        <p>
          Une démonstration bien préparée fait briller le produit. Votre
          décision doit pourtant reposer sur votre travail, pas sur celui du
          commercial. Avant le premier rendez-vous, écrivez les critères, leur
          ordre d’importance et les conditions éliminatoires.
        </p>

        <GuideTable
          headers={["Critère", "Question de décision", "Preuve minimale"]}
          rows={[
            [
              "Processus critiques",
              "Quelles opérations ne peuvent ni attendre ni être corrigées à la main ?",
              "trois scénarios exécutés de bout en bout, exception comprise",
            ],
            [
              "Différence métier",
              "L’écart protège-t-il une marge, un délai, une qualité ou une expérience réellement distinctive ?",
              "raison métier écrite et indicateur associé",
            ],
            [
              "Intégrations",
              "Quelles données doivent circuler, dans quel sens et à quelle fréquence ?",
              "documentation d’API ou fichier d’échange testé avec traitement des erreurs",
            ],
            [
              "Données",
              "Que reprend-on, qui arbitre les doublons et quelles durées s’appliquent ?",
              "inventaire, propriétaire, règles de nettoyage et rapprochement source-cible",
            ],
            [
              "Adoption",
              "Les utilisateurs réalisent-ils leur travail dans leur contexte réel ?",
              "test par des profils représentatifs, sans conduite permanente du démonstrateur",
            ],
            [
              "Délai et charge interne",
              "Quand la solution peut-elle produire un résultat et quelles personnes internes seront mobilisées ?",
              "planning comparable, jours internes par rôle, dépendances et marge d’aléa explicites",
            ],
            [
              "Exploitation",
              "Qui administre, sauvegarde, corrige et répond lors d’un incident ?",
              "responsabilités, niveaux de service et preuve de restauration",
            ],
            [
              "Réglementation",
              "Quelles obligations s’appliquent au processus et qui reste responsable de chacune ?",
              "inventaire validé par le responsable compétent, calendrier des évolutions et partage contractuel des rôles",
            ],
            [
              "Coût total",
              "Quel est le coût comparable sur la même durée et le même périmètre ?",
              "tableau sur quatre ans avec hypothèses et coûts internes",
            ],
            [
              "Sortie",
              "Que récupère-t-on si l’éditeur, le prestataire ou la stratégie change ?",
              "export complet testé, formats documentés, délai, coût et assistance",
            ],
          ]}
        />

        <p>
          Ne calculez pas une moyenne qui masquerait un échec critique. Une
          solution peut obtenir neuf bonnes notes sur dix et rester impossible à
          retenir si elle ne sait pas facturer correctement, fonctionner hors
          connexion ou cloisonner les données entre filiales. À l’inverse, une
          interface moins spectaculaire peut gagner parce qu’elle réussit les
          opérations qui font réellement tourner l’entreprise.
        </p>

        <p>
          La{" "}
          <a
            href="https://design.numerique.gouv.fr/bien-concevoir/"
            target="_blank"
            rel="noreferrer"
          >
            méthode de conception de la DINUM
          </a>{" "}
          recommande de partir des besoins, de tester avant de développer et
          d’améliorer par itérations. Le{" "}
          <a
            href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/1.2/"
            target="_blank"
            rel="noreferrer"
          >
            référentiel public d’écoconception
          </a>{" "}
          demande également de vérifier si une solution existante répond déjà au
          besoin. Ces principes viennent du numérique public et responsable ;
          ils sont utilisés ici comme méthode de cadrage, pas comme obligation
          générale imposée à toute PME.
        </p>

        <h2 id="preuve">
          Le protocole qui oblige chaque solution à faire ses preuves
        </h2>

        <p>
          La liste de fonctionnalités est trop abstraite. Remplacez-la par trois
          histoires courtes, avec un début, une fin et un résultat vérifiable.
        </p>

        <ol>
          <li>
            <strong>Un cas fréquent.</strong> Par exemple, transformer une
            demande validée en ordre de travail, puis en élément facturable.
          </li>
          <li>
            <strong>Une exception coûteuse.</strong> Un produit indisponible,
            une intervention reportée, un tarif contractuel particulier ou une
            validation refusée.
          </li>
          <li>
            <strong>Une correction traçable.</strong> Modifier une donnée après
            validation, comprendre qui l’a fait et recalculer les conséquences.
          </li>
        </ol>

        <p>
          Préparez un petit jeu de données fictives représentatif. Pendant la
          démonstration, un futur utilisateur — pas seulement le vendeur — doit
          effectuer les actions. Notez le résultat, les clics inhabituels, les
          exports, les erreurs et chaque intervention technique nécessaire.
          Soumettez exactement les mêmes scénarios au logiciel standard, à
          l’intégrateur et au prestataire sur mesure : même jeu de données,
          mêmes rôles, même résultat attendu, même temps de test et même grille
          de constat. Le temps de préparation peut différer, mais il doit être
          déclaré, daté et chiffré. Une offre Hagnéré Code ne doit pas
          bénéficier d’un niveau de preuve inférieur à celui exigé d’un éditeur.
        </p>

        <GuideTable
          headers={[
            "Stratégie",
            "Preuve équitable attendue",
            "Ce qui ne suffit pas",
          ]}
          rows={[
            [
              "Logiciel standard ou vertical",
              "un futur utilisateur exécute les trois scénarios dans une version disponible, avec le jeu de test commun",
              "une vidéo générique ou la seule affirmation que la fonction est native",
            ],
            [
              "ERP configurable",
              "l’intégrateur réalise puis documente le paramétrage exact, avant de rejouer les trois scénarios",
              "une maquette préparée sans liste des réglages, extensions et coûts",
            ],
            [
              "Architecture hybride",
              "le parcours traverse le socle et le module ; une erreur d’échange est provoquée puis reprise sans perte",
              "deux démonstrations séparées qui n’éprouvent jamais la synchronisation",
            ],
            [
              "Logiciel sur mesure",
              "un parcours complet exécutable de bout en bout rejoue les trois scénarios avec les mêmes données et des critères d’acceptation écrits",
              "des écrans statiques, une estimation ou une promesse de faisabilité",
            ],
          ]}
        />

        <GuideTable
          headers={["Réponse entendue", "Ce qu’elle prouve", "Ce qu’il manque"]}
          rows={[
            [
              "« C’est natif »",
              "La fonction existe dans une documentation ou une démonstration",
              "le scénario réalisé avec votre rôle, vos données et votre résultat attendu",
            ],
            [
              "« C’est configurable »",
              "Le produit possède un mécanisme d’adaptation",
              "le paramétrage exact, son coût, son responsable et son maintien lors des mises à jour",
            ],
            [
              "« On peut développer un connecteur »",
              "Une extension semble techniquement possible",
              "API vérifiée, droits, quotas, reprise sur erreur, budget et délai",
            ],
            [
              "« Vos données sont exportables »",
              "Un export existe peut-être",
              "un fichier réel avec identifiants, relations, pièces jointes et documentation",
            ],
            [
              "« Ce sera dans la prochaine version »",
              "Une intention de feuille de route",
              "un engagement contractuel ou la décision de traiter la fonction comme absente",
            ],
          ]}
        />

        <InfoBox variant="emerald" title="La règle de la démonstration">
          Une promesse non démontrée est une hypothèse. Elle peut rester dans le
          dossier, mais avec un responsable, un coût, une date de validation et
          une solution de repli. Ne transformez jamais « possible » en « inclus
          » dans la note de décision.
        </InfoBox>

        <h2 id="cout-total">Comparer le coût total sur quatre ans</h2>

        <p>
          Une licence mensuelle et un devis de développement ne sont pas deux
          prix comparables. Fixez un horizon commun — quatre ans dans cette
          grille de travail —, le même nombre d’utilisateurs, le même périmètre
          fonctionnel et le même niveau de service. Quatre ans ne constituent
          pas une norme : remplacez cette durée si votre contrat, votre
          stratégie ou la durée de vie attendue du système en impose une autre.
        </p>

        <FormulaBox>
          {
            "TCO sur 4 ans =\ncoûts uniques de mise en place\n+ coûts récurrents de l’année 1\n+ coûts récurrents de l’année 2\n+ coûts récurrents de l’année 3\n+ coûts récurrents de l’année 4\n+ coûts de sortie"
          }
        </FormulaBox>

        <p>
          Le <strong>TCO</strong>, ou coût total de possession, ne doit compter
          chaque dépense qu’une fois. Placez dans les coûts uniques le cadrage,
          la configuration ou le développement initial, les intégrations, la
          reprise des données, la formation initiale et la coexistence de
          démarrage. Chaque année contient uniquement les licences ou
          l’hébergement, le support, la maintenance, la sécurité, les options,
          l’administration interne et les évolutions de cette année. La{" "}
          <strong>recette</strong> — la vérification formelle que le résultat
          respecte les critères convenus — est comptée dans l’année où elle a
          lieu. L’export final et l’assistance au transfert restent dans la
          sortie.
        </p>

        <GuideTable
          headers={[
            "Stratégie",
            "Coûts uniques",
            "Coûts annuels",
            "Coûts de sortie",
          ]}
          rows={[
            [
              "Logiciel standard ou vertical",
              "paramétrage initial, import, connexion, formation et coexistence",
              "licences par profil, options, administration, support et formation des nouveaux arrivants",
              "export, assistance et remplacement des automatisations",
            ],
            [
              "ERP configurable",
              "cadrage, paramétrage documenté, reprise, intégrations, recette et formation",
              "licences, support éditeur et intégrateur, administration et maintien du paramétrage",
              "export, déparamétrage éventuel, documentation et accompagnement",
            ],
            [
              "Architecture hybride",
              "socle, module spécifique, reprise, connexion, tests d’erreur et formation",
              "licences du socle, hébergement et maintenance du module, surveillance des échanges et double expertise",
              "sortie du socle ou du module, resynchronisation et transfert technique",
            ],
            [
              "Logiciel entièrement sur mesure",
              "cadrage, conception, développement, reprise, intégrations, recette, formation et coexistence",
              "hébergement, maintenance, sécurité, support, administration, documentation et évolutions",
              "transfert du code, de l’infrastructure, des données, des secrets et de la documentation",
            ],
          ]}
        />

        <p>
          Le coût interne n’est pas gratuit. Demandez à la paie ou à votre
          expert-comptable un coût horaire chargé pertinent, puis mesurez les
          heures de cadrage, nettoyage, recette, formation et double
          exploitation. Faites le même travail pour le statu quo : ressaisies,
          consolidation, corrections, temps d’attente et abonnements déjà payés.
          Le planning doit donc afficher à la fois le délai fournisseur et les
          jours internes par rôle ; une semaine de prestation qui mobilise cinq
          responsables n’est pas une semaine gratuite pour l’entreprise.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.francenum.gouv.fr/files/2026-03/guide-numerique-des-entreprises_edition-2026_mars-2026.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Guide numérique des entreprises 2026 de France Num
          </a>{" "}
          recommande, pour comparer des services, de raisonner en coût total de
          possession : coûts de départ, dépenses pendant la durée, coûts
          internes associés et frais de fin. Le guide officiel l’applique aux
          services de connectivité ; la formule logicielle ci-dessus est notre
          transposition, dont chaque hypothèse doit rester visible.
        </p>

        <h3>Exemple fictif : quatre calculs sur la même base</h3>

        <InfoBox variant="blue" title="Hypothèses, pas prix de marché">
          Cet exemple arithmétique ne correspond ni à un devis ni à un cas
          client. Une PME de maintenance fictive compare les quatre stratégies
          pour le même périmètre, le même service et 20 utilisateurs nommés,
          maintenus constants pendant quatre ans. Les dépenses récurrentes de
          l’année 1 sont indexées de 3 % à chaque anniversaire puis arrondies à
          l’euro : année n = arrondi [année 1 × 1,03^(n − 1)]. Les totaux sont
          des <strong>coûts économiques</strong> : dépenses facturées prises
          hors TVA récupérable et temps interne valorisé. Nous ne calculons pas
          de TTC global, car ces postes ne suivent pas la même assiette. Faites
          valider l’impact de trésorerie et la TVA récupérable selon votre
          situation.
        </InfoBox>

        <GuideTable
          headers={[
            "Stratégie",
            "Détail des coûts uniques (€)",
            "Détail récurrent année 1 (€)",
            "Sortie (€)",
          ]}
          rows={[
            [
              "Standard ou vertical",
              "8 000 € paramétrage + 4 000 € intégration + 4 000 € reprise + 2 000 € formation = 18 000 €",
              "20 × 35 € × 12 = 8 400 € de licences + 2 400 € administration interne + 1 200 € support/options = 12 000 €",
              "6 000 €",
            ],
            [
              "ERP configurable",
              "5 000 € cadrage + 15 000 € paramétrage + 8 000 € intégration + 6 000 € reprise + 4 000 € formation = 38 000 €",
              "20 × 45 € × 12 = 10 800 € de licences + 4 800 € administration + 2 400 € support = 18 000 €",
              "8 000 €",
            ],
            [
              "Hybride",
              "6 000 € cadrage + 10 000 € socle + 32 000 € module + 12 000 € intégration + 6 000 € reprise + 4 000 € formation = 70 000 €",
              "20 × 35 € × 12 = 8 400 € de licences + 8 400 € hébergement/maintenance + 4 800 € administration + 1 400 € surveillance = 23 000 €",
              "12 000 €",
            ],
            [
              "Entièrement sur mesure",
              "12 000 € cadrage + 70 000 € conception/développement + 14 000 € intégrations + 8 000 € reprise + 6 000 € formation + 2 000 € coexistence = 112 000 €",
              "16 000 € hébergement/maintenance/sécurité + 8 000 € administration et support = 24 000 €",
              "16 000 €",
            ],
          ]}
        />

        <GuideTable
          headers={[
            "Stratégie",
            "Unique",
            "Année 1",
            "Année 2",
            "Année 3",
            "Année 4",
            "Sortie",
            "TCO 4 ans (€)",
          ]}
          rows={[
            [
              "Standard ou vertical",
              "18 000 €",
              "12 000 €",
              "12 360 €",
              "12 731 €",
              "13 113 €",
              "6 000 €",
              "74 204 €",
            ],
            [
              "ERP configurable",
              "38 000 €",
              "18 000 €",
              "18 540 €",
              "19 096 €",
              "19 669 €",
              "8 000 €",
              "121 305 €",
            ],
            [
              "Hybride",
              "70 000 €",
              "23 000 €",
              "23 690 €",
              "24 401 €",
              "25 133 €",
              "12 000 €",
              "178 224 €",
            ],
            [
              "Entièrement sur mesure",
              "112 000 €",
              "24 000 €",
              "24 720 €",
              "25 462 €",
              "26 225 €",
              "16 000 €",
              "228 407 €",
            ],
          ]}
        />

        <p>
          Le premier total se reproduit ainsi : 18 000 + 12 000 + 12 360 + 12
          731 + 13 113 + 6 000 = 74 204 €. Répétez ce contrôle ligne par ligne.
          Une option moins chère ne reste admissible que si elle a passé les
          mêmes scénarios et les mêmes exigences éliminatoires ; le tableau
          financier ne compense jamais une preuve fonctionnelle manquante.
        </p>

        <h3>Le retour sur investissement vient après le coût</h3>

        <p>
          Ne déduisez pas un gain parce qu’une fonction est automatisée. Mesurez
          avant et après : temps de cycle, heures de ressaisie, corrections,
          dossiers en attente ou marge perdue. Ne valorisez que la part
          réellement attribuable à l’outil. Le dossier France Num sur{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
            target="_blank"
            rel="noreferrer"
          >
            l’automatisation des processus
          </a>{" "}
          propose comme base le temps gagné multiplié par le coût horaire,
          diminué des coûts de l’outil et de sa mise en place. Cette formule
          reste une base de travail : elle ne transforme pas une prévision en
          résultat garanti.
        </p>

        <FormulaBox>
          {
            "Gains bruts = temps réellement économisé × coût horaire chargé + pertes mesurables évitées\nGains nets = gains bruts − TCO\nROI (%) = gains nets ÷ TCO × 100\nDélai de retour = premier mois où les gains cumulés dépassent les coûts cumulés"
          }
        </FormulaBox>

        <p>
          Dans le même exemple fictif, supposons que seule l’architecture
          hybride passe les scénarios critiques et que des mesures avant/après
          prudentes valident 60 000 € HT de gains bruts par an : 45 000 € de
          temps utile réalloué et 15 000 € d’erreurs ou de pertes évitées. Sur
          quatre ans, les gains bruts atteignent 240 000 €, les gains nets 61
          776 € et le ROI 34,7 % : (240 000 − 178 224) ÷ 178 224 × 100. Avec 70
          000 € de coûts initiaux, puis gains et dépenses d’exploitation
          répartis régulièrement, le cumul passe au-dessus de zéro vers le 23e
          mois. Ce délai serait plus long si l’adoption ou les gains étaient
          retardés ; il doit donc être recalculé avec les flux mensuels réels,
          et non déduit du seul gain brut. Du temps réalloué représente une
          capacité économique, pas automatiquement une économie de trésorerie :
          si cette capacité n’évite aucune dépense et ne produit aucun revenu
          mesurable, conservez-la en heures plutôt que de la convertir
          artificiellement en euros.
        </p>

        <p>
          Pour vérifier les postes d’un développement spécifique, le guide du{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">
            prix d’un logiciel sur mesure
          </Link>{" "}
          détaille la lecture d’un devis. Ici, le montant n’intervient qu’après
          la démonstration fonctionnelle : chiffrer très précisément une
          mauvaise option ne la rend pas meilleure.
        </p>

        <h2 id="adoption">Tester l’adoption et l’organisation</h2>

        <p>
          Un ERP peut réussir la démonstration et échouer dans le quotidien
          parce que le test a été conduit par les décideurs à la place des
          utilisateurs. Faites participer les personnes qui saisissent,
          corrigent, valident et recherchent les informations — y compris celles
          qui travaillent sur mobile, sur le terrain ou avec une connexion
          dégradée.
        </p>

        <p>Un test d’adoption utile vérifie que chaque profil peut :</p>

        <ul>
          <li>
            comprendre ce qu’il doit faire ensuite sans mémoriser une procédure
            parallèle ;
          </li>
          <li>
            traiter le cas normal et l’exception qui revient réellement dans son
            métier ;
          </li>
          <li>
            retrouver le statut, le responsable et l’historique d’un dossier ;
          </li>
          <li>
            corriger une erreur sans créer une seconde vérité dans un tableur
            annexe ;
          </li>
          <li>
            réaliser la tâche dans son environnement réel, avec son équipement
            et ses droits.
          </li>
        </ul>

        <p>
          N’évaluez pas seulement « l’ergonomie » par une impression générale.
          Relevez l’aide demandée, les erreurs, le temps nécessaire et les
          étapes contournées. Un écran inhabituel peut s’apprendre ; une logique
          contraire au travail réel recréera probablement des fichiers et
          messages parallèles.
        </p>

        <p>
          Nommez aussi un responsable métier capable d’arbitrer les règles et
          les priorités. L’éditeur connaît son produit, l’intégrateur connaît
          son paramétrage et le développeur connaît le code ; aucun d’eux ne
          peut décider seul quel comportement métier est correct. La gouvernance
          doit survivre à la mise en production.
        </p>

        <h2 id="donnees-securite">
          Données, intégrations, sécurité et réversibilité
        </h2>

        <p>
          Une intégration ne se résume pas au logo d’un logiciel dans une
          brochure. Il faut vérifier les objets disponibles, les opérations
          autorisées, la fréquence, les quotas, l’authentification et le
          comportement lors d’une erreur. Décidez aussi quel système fait foi :
          si l’adresse d’un client diffère entre l’ERP et le CRM, lequel
          l’emporte et qui traite le conflit ?
        </p>

        <p>
          Les recommandations de la CNIL ci-dessous concernent les traitements
          de données personnelles ; elles ne définissent pas, à elles seules,
          toutes les obligations comptables, fiscales ou sectorielles de votre
          ERP. Dans ce périmètre, la CNIL recommande de{" "}
          <a
            href="https://www.cnil.fr/fr/faire-un-choix-eclaire-de-son-architecture"
            target="_blank"
            rel="noreferrer"
          >
            représenter les flux et le cycle de vie des données en amont
          </a>
          . Lorsque le fournisseur agit comme sous-traitant pour ces données, sa{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noreferrer"
          >
            fiche sur la sous-traitance
          </a>{" "}
          demande d’encadrer au contrat les responsabilités, l’authentification,
          les incidents, la restitution et la destruction, puis de vérifier les
          garanties. Qualifiez les rôles avec votre DPO ou votre conseil lorsque
          le cas est ambigu : une mention commerciale « conforme RGPD » ne
          remplace pas cette analyse.
        </p>

        <GuideTable
          headers={[
            "Sujet",
            "Preuve à obtenir avant signature",
            "Signal d’alerte",
          ]}
          rows={[
            [
              "Flux et API",
              "schéma source-cible, documentation, appel test et reprise sur erreur",
              "« connecteur disponible » sans version ni démonstration",
            ],
            [
              "Rôles et accès",
              "matrice des habilitations testée avec des comptes représentatifs",
              "comptes partagés ou administrateur généralisé",
            ],
            [
              "Traçabilité",
              "événements enregistrés, accès aux journaux, durée et procédure d’analyse",
              "historique d’écran présenté comme journal de sécurité",
            ],
            [
              "Sauvegarde",
              "fréquence, périmètre, rétention et compte rendu d’une restauration",
              "« sauvegarde quotidienne » sans test de retour",
            ],
            [
              "Hébergement",
              "fournisseurs, régions, sous-traitants, support distant et transferts éventuels",
              "réponse limitée à l’adresse du siège de l’éditeur",
            ],
            [
              "Obligations réglementaires",
              "textes applicables identifiés, responsable interne, fonctions attendues, calendrier de mise à jour et procédure de contrôle",
              "« conformité incluse » sans périmètre, version ni partage des responsabilités",
            ],
            [
              "Réversibilité",
              "export réel des données, relations et pièces jointes, formats documentés, délai et coût",
              "CSV partiel ou prestation de sortie non chiffrée",
            ],
            [
              "Spécifique",
              "dépôt, accès, droits cédés, dépendances, documentation et procédure de déploiement",
              "code uniquement sur le compte du prestataire",
            ],
          ]}
        />

        <p>
          Dans un service cloud, la{" "}
          <a
            href="https://www.cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud"
            target="_blank"
            rel="noreferrer"
          >
            CNIL rappelle en mai 2026
          </a>{" "}
          que le client reste généralement responsable du traitement de données
          personnelles qu’il met en œuvre et doit configurer les mesures
          disponibles : chiffrement, profils d’accès, journalisation et
          sauvegardes selon le cas. Le partage précis dépend toutefois du
          service et du rôle réel de chaque acteur. Choisir un grand éditeur ne
          transfère donc pas automatiquement toutes les décisions de sécurité ou
          de conformité.
        </p>

        <p>
          Pour rendre « exportable » concret, le référentiel{" "}
          <a
            href="https://cyber.gouv.fr/documents/388/secnumcloud-referentiel-exigences-v3.2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            SecNumCloud de l’ANSSI
          </a>{" "}
          décrit une réversibilité permettant de récupérer l’ensemble des
          données via des fichiers documentés et exploitables hors du service,
          ou par des interfaces techniques documentées. C’est un référentiel de
          qualification à haut niveau d’exigence, pas une obligation générale
          pour tout ERP ; il fournit néanmoins un bon test de précision pour
          votre contrat.
        </p>

        <p>
          Enfin, demandez une restauration réelle. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noreferrer"
          >
            fiche de sécurité de la CNIL sur les sauvegardes
          </a>{" "}
          recommande de vérifier régulièrement leur intégrité et la capacité à
          les restaurer. Une sauvegarde jamais restaurée reste une promesse, pas
          une preuve de continuité.
        </p>

        <h2 id="verdicts">Les verdicts, selon des conditions observables</h2>

        <GuideTable
          headers={[
            "Situation constatée",
            "Option la plus rationnelle",
            "Condition à ne pas oublier",
          ]}
          rows={[
            [
              "Plusieurs logiciels du marché exécutent les scénarios critiques et l’un fournit intégrations, adoption et export satisfaisants",
              "Logiciel standard ou vertical",
              "accepter d’adapter les pratiques secondaires plutôt que personnaliser sans fin",
            ],
            [
              "Le socle couvre le métier ; les écarts entrent dans les champs, rôles et circuits officiellement supportés",
              "ERP configurable",
              "documenter le paramétrage et le rejouer en environnement de test lors des mises à jour",
            ],
            [
              "Les fonctions communes sont bien couvertes, mais un flux différenciant échoue et une API fiable existe",
              "Architecture hybride",
              "nommer le système de référence et surveiller les synchronisations",
            ],
            [
              "Le processus critique est spécifique, stable, mesuré ; aucun standard ne le démontre ; l’entreprise peut piloter une feuille de route",
              "Logiciel sur mesure resserré",
              "financer aussi exploitation, sécurité, documentation et transmission",
            ],
            [
              "Le besoin change à chaque entretien, les données sont inconnues ou aucun décideur métier n’est disponible",
              "Reporter et cadrer",
              "ne pas acheter une architecture pour compenser une décision non prise",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Vous ne pouvez pas encore trancher si…">
          Vous n’avez pas identifié les trois scénarios critiques, le nombre et
          les profils d’utilisateurs, les systèmes à connecter, le volume et la
          qualité des données, l’horizon budgétaire, la charge interne
          disponible, les obligations applicables, le responsable métier ou les
          exigences de sortie. Ce ne sont pas des détails à découvrir après le
          choix : ce sont les données d’entrée du choix.
        </InfoBox>

        <p>
          Un manque fonctionnel n’a pas de poids universel. La bonne question
          n’est pas « quel pourcentage le logiciel couvre-t-il ? », mais « que
          se passe-t-il si ce scénario précis reste manuel ? ». Faites chiffrer
          le contournement, son risque et sa durée. Vous pourrez alors accepter
          un écart secondaire sans sous-estimer une lacune structurante.
        </p>

        <h2 id="note-decision">La note de décision à produire</h2>

        <p>
          La réunion finale ne devrait pas repartir d’une présentation de
          cinquante diapositives. Condensez le raisonnement sur une page que la
          direction, les métiers, l’informatique et le futur prestataire peuvent
          contester ligne par ligne.
        </p>

        <FormulaBox>
          {
            "NOTE DE DÉCISION — [processus concerné]\n\nProblème mesuré :\nRésultat attendu et indicateur :\nUtilisateurs et contextes :\n3 scénarios critiques testés :\nDonnées reprises et système de référence :\nIntégrations prouvées :\nOptions comparées et options écartées :\nDélai fournisseur et charge interne par rôle :\nObligations réglementaires et responsables :\nCoût total sur 4 ans + hypothèses :\nRisque le plus coûteux :\nRéversibilité réellement testée :\nDécision, responsable et date :\nPremier lot réversible :\nCondition d’arrêt ou de réexamen :"
          }
        </FormulaBox>

        <p>
          Joignez à cette note les captures ou comptes rendus des scénarios, les
          exports obtenus, le détail du coût total et la liste des hypothèses
          non validées. Une décision défendable n’est pas une certitude parfaite
          : c’est une conclusion dont les preuves, limites et responsabilités
          sont visibles.
        </p>

        <p>
          Lorsque cette note fait émerger un périmètre spécifique,
          transformez-le en exigences et critères de recette avec le guide du{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’une application métier
          </Link>
          . Si le besoin porte surtout sur les prospects, les ventes et le suivi
          commercial, comparez d’abord le coût complet d’un outil existant avec
          le guide{" "}
          <Link href="/guides/combien-coute-un-crm">
            combien coûte réellement un CRM
          </Link>
          .
        </p>

        <p>
          Si votre point de départ reste un classeur, commencez par le{" "}
          <Link href="/guides/transformer-excel-en-application">
            diagnostic Excel vers application
          </Link>
          . Il peut conclure qu’une meilleure structure ou un logiciel existant
          suffit. Si l’écart se situe plutôt entre une plateforme visuelle et du
          code spécifique, le comparatif{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou développement sur mesure
          </Link>{" "}
          traite cette décision plus étroite.
        </p>

        <h2 id="premier-lot">Commencer sans rendre le choix irréversible</h2>

        <p>
          Une fois l’architecture choisie, limitez le premier engagement à une
          preuve opérationnelle. Le but n’est pas de construire une maquette
          jetable, mais de vérifier le risque qui pourrait encore invalider la
          décision.
        </p>

        <GuideTable
          headers={["Option", "Premier engagement utile", "Critère de sortie"]}
          rows={[
            [
              "Standard",
              "essai ou pilote avec données fictives et utilisateurs représentatifs",
              "les trois scénarios passent et l’export est exploitable",
            ],
            [
              "Configurable",
              "paramétrage d’un seul processus avec documentation",
              "un administrateur interne sait reproduire et expliquer les règles",
            ],
            [
              "Hybride",
              "un parcours complet : lecture, action, synchronisation et reprise sur erreur",
              "le socle et le module restent cohérents après une panne simulée",
            ],
            [
              "Sur mesure",
              "un parcours utilisable de bout en bout",
              "un utilisateur obtient le résultat métier et les critères de recette passent",
            ],
          ]}
        />

        <p>
          Le dossier France Num sur les{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/gestion-de-projet-0"
            target="_blank"
            rel="noreferrer"
          >
            méthodes de gestion des projets numériques
          </a>{" "}
          souligne qu’un cadrage structuré peut être combiné à une exécution
          itérative lorsque le besoin comporte de l’incertitude. Dans votre
          note, figez donc la décision, le budget et les contraintes ; dans le
          premier lot, testez ce qui reste incertain avant d’étendre le
          périmètre.
        </p>

        <InfoBox variant="amber" title="Quand Hagnéré Code est un mauvais fit">
          Ne sollicitez pas un développement spécifique si un logiciel existant
          réussit vos scénarios, si vous cherchez seulement une interface plus
          moderne, si aucun responsable métier ne peut arbitrer ou si le budget
          exclut reprise, maintenance et sécurité. Dans ces cas, utilisez la
          note pour choisir un éditeur, simplifier le processus ou reporter le
          projet. Un échange externe n’est utile que lorsqu’une preuve reste
          réellement indécidable.
        </InfoBox>

        <GuideInlineCTA
          title="Un second regard peut suffire avant de choisir"
          description="Si deux options restent réellement indécidables après les tests, partagez la note de décision et les preuves disponibles. Nous pouvons repérer l’hypothèse manquante ou confirmer qu’un ERP standard est la voie la plus simple."
          tags={[
            "Diagnostic avant devis",
            "Standard toujours possible",
            "Preuves et limites visibles",
          ]}
          ctaLabel="Demander un second regard"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">
          Sources officielles, référentiels et guides consultés le 20 juillet
          2026
        </h2>

        <p>
          Ces sources soutiennent la méthode, les critères de choix et les
          exigences de données et de sécurité. Aucun prix moyen, taux de
          réussite ou promesse de retour sur investissement n’a été déduit de
          pages commerciales concurrentes.
        </p>

        <ul>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-et-comment"
              target="_blank"
              rel="noreferrer"
            >
              France Num — pourquoi et comment mettre en place un ERP pour les
              TPE
            </a>
            , mis à jour le 13 avril 2026, pour la couverture fonctionnelle,
            l’interopérabilité, l’ergonomie, la formation et le suivi.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/gestion-traitement-et-analyse-des-donnees/piloter-sa-tpe"
              target="_blank"
              rel="noreferrer"
            >
              France Num — piloter sa TPE/PME avec les données
            </a>
            , mis à jour le 26 mars 2026, pour les critères de budget,
            d’accessibilité des données et d’interopérabilité.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/files/2026-03/guide-numerique-des-entreprises_edition-2026_mars-2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              France Num — Guide numérique des entreprises 2026
            </a>
            , pour la structure de coût total transposée aux logiciels : entrée,
            dépenses pendant la durée, coûts internes et sortie.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution"
              target="_blank"
              rel="noreferrer"
            >
              France Num — automatisation des processus
            </a>
            , pour valoriser un temps réellement économisé à partir d’un coût
            horaire ; les formules de ROI et l’exemple restent notre méthode et
            notre illustration.
          </li>
          <li>
            <a
              href="https://design.numerique.gouv.fr/bien-concevoir/"
              target="_blank"
              rel="noreferrer"
            >
              DesignGouv / DINUM — concevoir un service numérique de qualité
            </a>
            , pour le besoin utilisateur, les tests et l’itération.
          </li>
          <li>
            <a
              href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/1.2/"
              target="_blank"
              rel="noreferrer"
            >
              Mission interministérielle Numérique écoresponsable — critère
              RGESN 1.2
            </a>
            , version 2 du 24 septembre 2024, pour les besoins métier et la
            vérification des solutions existantes.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/faire-un-choix-eclaire-de-son-architecture"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — faire un choix éclairé de son architecture
            </a>
            , pour les flux, l’hébergement, les habilitations et la portabilité.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — sécurité : gérer la sous-traitance
            </a>
            , pour le contrat, l’authentification, les incidents et la
            restitution.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — responsabilités des acteurs du cloud
            </a>
            , publiée le 28 mai 2026, pour la répartition des rôles et la
            configuration des mesures de sécurité.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — sécurité : sauvegarder
            </a>
            , pour les sauvegardes protégées et les tests de restauration.
          </li>
          <li>
            <a
              href="https://cyber.gouv.fr/documents/388/secnumcloud-referentiel-exigences-v3.2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI — référentiel SecNumCloud 3.2
            </a>
            , pour une définition opérationnelle de la réversibilité dans son
            périmètre de qualification.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
