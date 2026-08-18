import type { Metadata } from "next";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { TechnicalDebtDecisionCalculator } from "@/components/guides/TechnicalDebtDecisionCalculator";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("dette-technique-cout-entreprise");

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
        alt: "Mesurer les retards, reprises et régressions causés par la dette technique",
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
      name: "Coût de la dette technique",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu’est-ce que la dette technique en termes simples ?",
    answer:
      "C’est une décision de conception ou de construction qui a pu aider à livrer plus vite, mais rend certains changements plus coûteux ou risqués ensuite. Un logiciel ancien, un bug ou du code peu élégant ne constituent pas automatiquement une dette à traiter.",
  },
  {
    question: "Comment calculer le coût de la dette technique ?",
    answer:
      "Mesurez d’abord cinq changements ou incidents récents : attente, temps consacré au résultat utile, reprise préalable, régressions et opérations manuelles. Valorisez seulement les temps et occasions que vous pouvez justifier, puis gardez les inconnues visibles.",
  },
  {
    question: "Quel pourcentage du budget consacrer à la dette technique ?",
    answer:
      "Il n’existe pas de pourcentage universel. Priorisez les éléments reliés à une conséquence métier importante et à une action vérifiable. Une zone stable, rarement modifiée et peu risquée peut être tolérée consciemment.",
  },
  {
    question: "Faut-il réécrire une application qui accumule de la dette ?",
    answer:
      "Pas automatiquement. La réécriture complète est l’une des réponses possibles, souvent la plus risquée. Contenir une zone, ajouter des tests, stabiliser un parcours ou moderniser progressivement peut préserver davantage de valeur et réduire le risque de migration.",
  },
  {
    question: "Une nouvelle technologie supprime-t-elle la dette technique ?",
    answer:
      "Non. Une nouvelle base de code peut reproduire les mêmes règles mal comprises, données incohérentes ou dépendances. Le choix technologique ne remplace ni la compréhension du métier, ni les tests, ni la préparation de la migration.",
  },
  {
    question: "Quand faut-il faire auditer la dette technique ?",
    answer:
      "Un audit devient utile lorsque les retards se répètent, qu’une zone critique dépend d’une seule personne, que les incidents augmentent ou qu’une décision importante de modernisation manque de preuves. Il doit relier chaque constat technique à une conséquence observable.",
  },
];

const responseOptions = [
  [
    "Attendre sous surveillance",
    "Retrait proche, peu de changements et risque maîtrisé",
    "Propriétaire, limite, mode dégradé et date de réexamen",
  ],
  [
    "Stabiliser une zone",
    "La friction est localisée et empêche de livrer sûrement",
    "Parcours critique testé, pilote mesuré et retour arrière",
  ],
  [
    "Rénover progressivement",
    "Le logiciel reste utile et ses frontières peuvent être déplacées",
    "Lots réversibles et coût de coexistence explicite",
  ],
  [
    "Remplacer par un standard",
    "Le besoin est largement couvert sans différenciation décisive",
    "Écarts métier, licences, migration et sortie testés",
  ],
  [
    "Réécrire",
    "Support, sécurité, modèle métier ou coût de coexistence créent une impasse",
    "Règles de référence, double fonctionnement, migration et retrait",
  ],
];

const optionEconomicAssumptions = [
  {
    option: "Attendre",
    project: "0 €",
    recurring: "0 € / an",
    cashReduction: "0 %",
    capacityReduction: "0 %",
    incidentProbability: "20 % / an",
    included:
      "surveillance, mode dégradé et date de retrait ; aucun travail structurel",
  },
  {
    option: "Stabiliser",
    project: "28 800 €",
    recurring: "3 000 € / an",
    cashReduction: "45 %",
    capacityReduction: "45 %",
    incidentProbability: "10 % / an",
    included:
      "tests ciblés, correction, recette, transition courte et retour arrière",
  },
  {
    option: "Rénover",
    project: "74 050 €",
    recurring: "5 000 € / an",
    cashReduction: "75 %",
    capacityReduction: "75 %",
    incidentProbability: "5 % / an",
    included:
      "lots réversibles, migration, coexistence, recette, formation et retrait",
  },
  {
    option: "Standard",
    project: "60 200 €",
    recurring: "30 000 € / an",
    cashReduction: "65 %",
    capacityReduction: "65 %",
    incidentProbability: "4 % / an",
    included:
      "paramétrage, intégration, licences, migration, recette, formation et sortie",
  },
  {
    option: "Réécrire",
    project: "154 900 €",
    recurring: "8 000 € / an",
    cashReduction: "85 %",
    capacityReduction: "85 %",
    incidentProbability: "3 % / an",
    included:
      "construction, double fonctionnement, migration, recette, formation et retrait",
  },
];

const horizonComparisons = [
  {
    horizon: "12 mois",
    winner: "Attendre sous surveillance",
    explanation:
      "Le coût de transition n’a pas encore le temps d’être récupéré.",
    totals: [
      ["Attendre", "42 048 €"],
      ["Stabiliser", "54 526 €"],
      ["Rénover", "89 562 €"],
      ["Standard", "103 717 €"],
      ["Réécrire", "169 207 €"],
    ],
  },
  {
    horizon: "36 mois",
    winner: "Stabiliser une zone",
    explanation:
      "La réduction ciblée de la friction rembourse le projet sans imposer une migration totale.",
    totals: [
      ["Attendre", "126 144 €"],
      ["Stabiliser", "105 979 €"],
      ["Rénover", "120 586 €"],
      ["Standard", "190 750 €"],
      ["Réécrire", "197 822 €"],
    ],
  },
  {
    horizon: "60 mois",
    winner: "Rénover progressivement",
    explanation:
      "La durée permet à une réduction plus forte de dépasser le surcoût de coexistence.",
    totals: [
      ["Attendre", "210 240 €"],
      ["Stabiliser", "157 432 €"],
      ["Rénover", "151 610 €"],
      ["Standard", "277 784 €"],
      ["Réécrire", "226 436 €"],
    ],
  },
];

function FiveChangeNotebook() {
  return (
    <section className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
        Votre point de départ
      </p>
      <h3 className="mb-0 mt-2 text-xl font-bold text-zinc-950 dark:text-white">
        Ouvrez les cinq derniers changements
      </h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {[
          ["Attente", "Combien de jours avant que le travail utile commence ?"],
          [
            "Reprise",
            "Qu’a-t-il fallu comprendre, réparer ou contourner avant ?",
          ],
          [
            "Régression",
            "Qu’est-ce qui a cassé ailleurs et a dû être repris ?",
          ],
          ["Opération manuelle", "Quelle tâche compense encore le logiciel ?"],
          [
            "Effet métier",
            "Quelle vente, facture, opération ou décision a été retardée ?",
          ],
          [
            "Élément suspect",
            "Quel code, test, accès, donnée ou dépendance faut-il vérifier ?",
          ],
        ].map(([title, description]) => (
          <div
            key={title}
            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h4 className="m-0 text-sm font-bold text-zinc-950 dark:text-zinc-100">
              {title}
            </h4>
            <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>
        ))}
      </div>
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
          { label: "Coût de la dette technique" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre application fonctionne encore, mais chaque petite évolution devient un chantier. Mesurez ce que cette friction mobilise vraiment, puis comparez attendre, stabiliser, rénover, acheter un standard ou réécrire."
        heroAction={{
          href: "#calculateur",
          label: "Refaire le calcul avec mes données",
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
            title: "Trésorerie séparée du temps",
            description:
              "Une heure salariée déjà payée n’est pas une économie bancaire.",
            color: "violet",
          },
          {
            number: "02",
            title: "Cinq options comparables",
            description:
              "Même périmètre, mêmes volumes et horizons de 12, 36 et 60 mois.",
            color: "amber",
          },
          {
            number: "03",
            title: "Verdict réversible",
            description:
              "Attendre peut gagner ; une option radicale aussi, si les faits le justifient.",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description:
              "Exemple fictif, calculateur local et dossier de décision libre.",
            color: "blue",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Préparer la reprise d’un logiciel existant",
          },
          {
            href: "/guides/cout-maintenance-application-metier",
            label: "Comprendre le coût de la maintenance",
          },
          {
            href: "/guides/faire-evoluer-saas-apres-mvp",
            label: "Organiser les évolutions après un MVP",
          },
          {
            href: "/guides/tma-ou-regie",
            label: "Choisir le mode de collaboration",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer le ROI d’une application métier",
          },
        ]}
        faqTitle="Dette technique : les réponses avant d’investir"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Votre application fonctionne encore, mais une évolution annoncée en
            deux jours en prend quinze, un export casse et deux salariés
            contournent le système chaque semaine. On vous parle de « dette
            technique » et déjà de réécriture. Notre avis : ne financez pas ce
            chantier sur un mot ou sur l’âge du logiciel.
          </strong>
        </p>

        <p>
          La dette technique n’est pas chaque bug : c’est un choix, une
          dépendance ou une façon de construire qui rend une évolution plus
          coûteuse ensuite. Vous allez mesurer cinq à dix événements réels sans
          compter deux fois la même heure, séparer l’argent sorti, la capacité
          interne, le risque et l’opportunité, puis comparer sur le même horizon
          cinq réponses : attendre sous surveillance, stabiliser, rénover par
          étapes, remplacer par un standard ou réécrire. Nous montrerons un cas
          où attendre gagne et un autre où une action plus profonde devient
          rationnelle. Tous les chiffres sont fictifs et remplaçables.
        </p>

        <GuideToc
          items={[
            {
              id: "definition",
              label: "Votre application est-elle vraiment le problème ?",
            },
            { id: "journal", label: "Commencer par des événements réels" },
            {
              id: "cout",
              label: "Séparer trésorerie, capacité, risque et opportunité",
            },
            {
              id: "options",
              label: "Comparer les cinq réponses sur le même terrain",
            },
            {
              id: "bascule",
              label: "Trouver ce qui fait basculer la décision",
            },
            {
              id: "urgence",
              label: "Reconnaître le cas où attendre devient dangereux",
            },
            { id: "devis", label: "Demander des preuves avant de signer" },
            { id: "preuve", label: "Mesurer ce qui change après les travaux" },
            {
              id: "calculateur",
              label: "Refaire le calcul et télécharger le dossier",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="definition">
          Votre application est-elle vraiment le problème ?
        </h2>

        <p>
          Un dirigeant voit un délai, une panne ou une facture. L’équipe
          technique voit parfois un module trop couplé, des tests absents ou une
          dépendance difficile à mettre à jour. Le mot « dette » devient utile
          lorsqu’il relie les deux : <strong>une cause localisable</strong>, des
          événements où elle a renchéri le travail et une conséquence métier
          observable.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.sei.cmu.edu/library/managing-technical-debt-identify-technical-debt-items/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Software Engineering Institute
          </a>{" "}
          décrit des choix de conception ou de construction avantageux à court
          terme qui rendent le même travail plus coûteux ensuite. Il recommande
          de rendre les éléments visibles et de les relier à leurs conséquences.
          Il ne fournit ni ratio de budget universel, ni seuil qui imposerait
          une réécriture.
        </p>

        <GuideTable
          headers={["Situation", "Ce qu’elle signifie", "Décision immédiate"]}
          rows={[
            [
              "Un bug isolé vient d’apparaître",
              "Un défaut n’est pas automatiquement une dette structurelle",
              "Corriger, tester et vérifier la répétition",
            ],
            [
              "Le logiciel est ancien mais stable",
              "L’âge seul ne mesure ni le coût ni le risque",
              "Surveiller le support, la restauration et les changements",
            ],
            [
              "Une solution rapide a été choisie consciemment",
              "La dette peut être assumée si sa limite et sa date sont connues",
              "Inscrire le coût futur et le signal de réexamen",
            ],
            [
              "Un composant n’est plus maintenu",
              "La sécurité et la continuité peuvent changer l’urgence",
              "Prouver l’exposition et comparer retrait, remplacement ou mesure compensatoire",
            ],
          ]}
          caption="Quatre situations que le mot « dette technique » ne doit pas mélanger"
        />

        <InfoBox
          variant="amber"
          title="La position de Hagnéré Code, avec son contre-cas"
        >
          Nous pourrions aussi vendre une réécriture ; ce conflit d’intérêt doit
          rester visible. Notre position est de ne pas la financer parce qu’un
          logiciel est vieux, qu’un outil lui donne une mauvaise note ou que
          l’équipe est fatiguée. Chiffrez d’abord les frictions et éliminez les
          options moins irréversibles pour une raison vérifiable. Cette position
          ne vaut plus si le support est terminé, si les données ne peuvent pas
          être protégées, si le modèle métier est devenu incompatible ou si la
          coexistence coûte davantage qu’une reconstruction maîtrisée.
        </InfoBox>

        <h2 id="journal">
          Commencez par des événements réels, pas par une note
        </h2>

        <p>
          Prenez cinq à dix évolutions, corrections, incidents ou contournements
          terminés. Cinq cas sont un point de départ, pas une norme. Élargissez
          l’échantillon si une urgence domine le total, si les tailles sont
          incomparables, si tous les événements concernent le même module ou si
          l’activité est saisonnière.
        </p>

        <FiveChangeNotebook />

        <p>
          Chaque ligne reçoit un identifiant. Inscrivez la période, le résultat
          utile qui aurait été nécessaire même avec un système sain, le temps
          supplémentaire, les personnes concernées, la source et le niveau de
          confiance : observé, reconstitué ou hypothèse. Un même ticket ne peut
          pas apparaître comme reprise de livraison puis comme incident séparé.
        </p>

        <GuideTable
          headers={["Champ", "Question concrète", "Preuve possible"]}
          rows={[
            [
              "Travail utile",
              "Qu’aurait-il fallu faire même avec une application saine ?",
              "Estimation, devis ou historique comparable",
            ],
            [
              "Temps supplémentaire",
              "Qu’a-t-il fallu comprendre, réparer ou ressaisir en plus ?",
              "Ticket, commit, agenda ou entretien recoupé",
            ],
            [
              "Trésorerie",
              "Quelle facture ou dépense disparaîtrait réellement ?",
              "Facture, paie d’heures supplémentaires, licence",
            ],
            [
              "Conséquence",
              "Quel parcours, client, paiement ou délai a été touché ?",
              "Journal d’exploitation, CRM ou comptabilité",
            ],
            [
              "Cause suspectée",
              "Quelle règle, donnée, dépendance ou procédure doit être vérifiée ?",
              "Code, test, documentation ou configuration",
            ],
          ]}
          caption="Registre minimum pour éviter les impressions et les doublons"
        />

        <h2 id="cout">Combien cette friction coûte-t-elle vraiment ?</h2>

        <p>
          Dans l’exemple entièrement fictif Atelier Nova, l’application organise
          les commandes et les interventions. Les nombres ci-dessous ne viennent
          d’aucun client. Ils servent à montrer une méthode que vous devez
          remplacer par vos tickets, vos coûts chargés et vos factures. Ici, le
          coût horaire chargé correspond au salaire, aux charges employeur et
          aux coûts directs de la personne, rapportés aux heures travaillées :
          ce n’est ni son salaire net, ni un tarif vendu au client.
        </p>

        <FormulaBox>{`Temps supplémentaire observé
Friction de livraison = 18 changements × 9 h × 68 €/h = 11 016 €
Réponse à incident = 6 incidents × 7 h × 68 €/h = 2 856 €
Contournements = 4 personnes × 2 h × 46 semaines × 32 €/h = 11 776 €

Capacité interne valorisée = 11 016 + 2 856 + 11 776 = 25 648 €/an
Sorties de trésorerie attribuables = 4 800 + 3 600 = 8 400 €/an
Coût annuel observé = 25 648 + 8 400 = 34 048 €/an
(capacité + trésorerie, hors risque et opportunité)`}</FormulaBox>

        <p>
          Les 25 648 € ne sont pas une économie bancaire promise. Les salaires
          sont déjà payés ; cette capacité ne crée de valeur que si le temps est
          réellement réaffecté. Les 8 400 € peuvent davantage ressembler à une
          économie de caisse, à condition que les factures et coûts
          d’exploitation disparaissent vraiment. Le total de 34 048 € n’est
          défendable que parce que chaque événement est distinct.
        </p>

        <GuideTable
          headers={["Sous-total", "Montant fictif", "Ce qu’il autorise à dire"]}
          rows={[
            [
              "Capacité interne",
              "25 648 € / an",
              "Temps potentiellement libérable, pas baisse automatique de charges",
            ],
            [
              "Trésorerie",
              "8 400 € / an",
              "Dépenses attribuables qui peuvent éventuellement disparaître",
            ],
            [
              "Risque attendu",
              "8 000 € / an",
              "20 % × 40 000 €, séparé des incidents déjà observés",
            ],
            [
              "Opportunité",
              "3 200 €",
              "Marge attendue non récupérée, hors total principal",
            ],
          ]}
          caption="Quatre montants que le décideur doit toujours voir séparément"
        />

        <p>
          L’opportunité se calcule sur une marge, une causalité et la part qui
          ne sera pas récupérée, jamais sur le chiffre d’affaires brut. Ici :
          huit semaines × quatre ventes potentielles × 500 € de marge × 40 % de
          causalité × 50 % de non-récupération = 3 200 €. Cette estimation reste
          hors du classement ; elle doit pouvoir être supprimée sans casser le
          raisonnement.
        </p>

        <InfoBox
          variant="amber"
          title="Le contrôle qui évite de gonfler artificiellement le coût"
        >
          Refaites le total depuis les tickets, factures et journaux qui le
          composent. Affichez d’abord la trésorerie seule, puis trésorerie +
          capacité, puis le risque attendu. Si le verdict change, ce n’est pas
          un défaut du calcul : c’est l’hypothèse décisive que la direction doit
          discuter. Une inconnue reste « à confirmer » ; elle ne devient jamais
          zéro.
        </InfoBox>

        <h2 id="options">
          Les cinq réponses doivent jouer sur le même terrain
        </h2>

        <p>
          Comparer un petit correctif à une réécriture complète n’a aucun sens
          si le premier ne couvre qu’un export et la seconde toute
          l’application. Dans le scénario suivant, chaque option conserve les
          mêmes parcours commande, planification, intervention et facturation,
          les mêmes volumes et les mêmes exigences de sécurité. Les coûts
          propres incluent projet, migration, coexistence, recette, formation,
          exploitation et retrait.
        </p>

        <GuideTable
          headers={[
            "Réponse",
            "Quand elle peut gagner",
            "Preuve avant décision",
          ]}
          rows={responseOptions}
          caption="Cinq réponses comparées sur un périmètre identique"
        />

        <p>
          « Attendre sous surveillance » ne signifie pas ignorer le problème :
          cela signifie le tolérer temporairement, avec un propriétaire, une
          limite acceptable et une date de réexamen. Sans ces trois éléments,
          l’attente n’est pas une option de gestion ; c’est une décision subie.
        </p>

        <h3>Les hypothèses qui fabriquent réellement le résultat</h3>

        <p>
          Les montants ci-dessous sont fictifs, mais chaque ligne est visible :
          34 048 € de coût annuel observé, un incident distinct de 40 000 €, des
          coûts de transition et des probabilités différentes selon l’option.
          L’exemple utilise le même taux pour réduire la trésorerie et la
          capacité, uniquement pour rendre le calcul lisible. Dans votre cas,
          confirmez les deux taux séparément : une licence peut rester due alors
          que du temps interne est libéré.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {optionEconomicAssumptions.map((assumption) => (
            <article
              key={assumption.option}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                {assumption.option}
              </h3>
              <dl className="mt-4 grid gap-2 text-sm">
                {[
                  ["Projet et transition", assumption.project],
                  ["Coût propre récurrent", assumption.recurring],
                  ["Trésorerie supprimée", assumption.cashReduction],
                  ["Capacité libérée", assumption.capacityReduction],
                  ["Probabilité de l’incident", assumption.incidentProbability],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-b border-zinc-200 py-2 first:pt-0 dark:border-zinc-800"
                  >
                    <dt className="text-zinc-600 dark:text-zinc-400">
                      {label}
                    </dt>
                    <dd className="m-0 text-right font-semibold tabular-nums text-zinc-950 dark:text-zinc-100">
                      {value}
                    </dd>
                  </div>
                ))}
                <div className="pt-2">
                  <dt className="font-semibold text-zinc-700 dark:text-zinc-300">
                    Inclus dans l’exemple
                  </dt>
                  <dd className="m-0 mt-1 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {assumption.included}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Aucun de ces taux n’est une moyenne de marché. Un pilote, des devis
          contradictoires et les données de l’entreprise doivent les remplacer.
          Si la migration, la coexistence, la recette, la formation ou le
          retrait manquent dans une offre, marquez son coût « inconnu » et
          sortez l’option du classement.
        </p>

        <div
          className="not-prose my-8 grid gap-4 lg:grid-cols-3"
          role="group"
          aria-label="Coût total illustratif des cinq options à 12, 36 et 60 mois, avec trésorerie, capacité et risque attendu"
        >
          {horizonComparisons.map((comparison) => (
            <article
              key={comparison.horizon}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="border-b border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-violet-700 dark:text-violet-300">
                  Horizon {comparison.horizon}
                </h3>
                <p className="mb-0 mt-2 text-sm font-bold text-zinc-950 dark:text-white">
                  Charge comparable la plus faible : {comparison.winner}
                </p>
                <p className="mb-0 mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {comparison.explanation}
                </p>
              </div>
              <dl className="m-0 p-4">
                {comparison.totals.map(([label, amount]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-b border-zinc-100 py-2 first:pt-0 last:border-b-0 last:pb-0 dark:border-zinc-800"
                  >
                    <dt className="text-sm text-zinc-600 dark:text-zinc-400">
                      {label}
                    </dt>
                    <dd className="m-0 text-sm font-bold tabular-nums text-zinc-950 dark:text-zinc-100">
                      {amount}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Nous appelons ici « charge totale comparable » la somme, sur un même
          horizon, de la trésorerie, de la capacité interne valorisée et du
          risque attendu. Ce n’est donc pas un coût de banque pur. Les montants
          sont fictifs, HT, et excluent l’opportunité commerciale.
        </p>

        <p>
          <a
            href="/ressources/dossier-decision-dette-technique/comparatif-options.csv"
            download="comparatif-options-dette-technique.csv"
          >
            Télécharger les hypothèses et les quinze résultats de l’exemple
          </a>{" "}
          pour les contrôler dans votre tableur, sans laisser vos coordonnées.
        </p>

        <p>
          À douze mois, attendre gagne : le coût de transition n’a pas le temps
          d’être récupéré. À trente-six mois, la stabilisation ciblée devient la
          moins coûteuse. À soixante mois, la rénovation progressive passe
          devant. Le même logiciel peut donc justifier trois décisions selon sa
          durée de vie restante. Le prix d’entrée ne suffit pas.
        </p>

        <h2 id="bascule">
          Le bon chiffre est celui qui fait basculer le choix
        </h2>

        <p>
          Le tableau précédent additionne capacité et risque. Regardons les deux
          premières options à trente-six mois sous trois angles. C’est le moyen
          le plus simple de voir si une présentation commerciale transforme du
          temps salarié en fausse économie.
        </p>

        <GuideTable
          headers={["Lecture", "Coûts sur 36 mois", "Verdict du scénario"]}
          rows={[
            [
              "Trésorerie seule",
              "Attendre : 25 200 € · Stabiliser : 51 660 €",
              "Attendre",
            ],
            [
              "Trésorerie + capacité",
              "Attendre : 102 144 € · Stabiliser : 93 979 €",
              "Stabiliser",
            ],
            [
              "Avec risque attendu",
              "Attendre : 126 144 € · Stabiliser : 105 979 €",
              "Stabiliser",
            ],
          ]}
          caption="Un verdict qui change avec la lecture doit rester visible"
        />

        <p>
          Sans le risque, une stabilisation à 45 % doit récupérer un coût annuel
          observé d’environ <strong>28 000 €</strong> pour égaler l’attente sur
          trois ans. Avec la réduction de risque du scénario, la bascule tombe à
          environ <strong>19 111 €</strong>. Ce n’est pas un seuil universel :
          c’est la valeur que le pilote devra rendre plausible.
        </p>

        <FormulaBox>{`Convention du test de sensibilité
Capacité = coût annuel testé × 25 648 / 34 048
Trésorerie = coût annuel testé × 8 400 / 34 048

12 000 €  → 9 039 € de capacité + 2 961 € de trésorerie
34 048 €  → 25 648 € + 8 400 €
80 000 €  → 60 263 € + 19 737 €
300 000 € → 225 987 € + 74 013 €`}</FormulaBox>

        <p>
          Seuls ces deux sous-totaux changent proportionnellement. L’impact de
          l’incident reste à 40 000 € ; les probabilités, les coûts de projet,
          les coûts récurrents et les deux taux de réduction restent ceux des
          cartes précédentes. Cette convention rend le test rejouable ; elle ne
          prédit pas que votre structure de coût restera identique.
        </p>

        <GuideTable
          headers={[
            "Coût annuel observé",
            "Option la moins coûteuse",
            "Ce que cela raconte",
          ]}
          rows={[
            [
              "12 000 €",
              "Attendre",
              "La friction est trop faible pour rembourser une transition",
            ],
            [
              "34 048 €",
              "Stabiliser",
              "Une action ciblée récupère son coût sur trois ans",
            ],
            [
              "80 000 €",
              "Rénover",
              "La coexistence devient acceptable face à une friction forte",
            ],
            [
              "300 000 €",
              "Réécrire",
              "Le modèle laisse une option radicale gagner dans un contre-cas extrême",
            ],
          ]}
          caption="Sensibilité à 36 mois avec trésorerie et capacité mises à l’échelle proportionnellement"
        />

        <p>
          La dernière ligne n’est pas une prévision pour Atelier Nova. Elle
          vérifie que le modèle n’est pas truqué pour faire gagner toujours la
          même prestation. Dans un vrai cas de cette taille, les taux de
          réduction, la capacité de migration et le risque devraient être
          réestimés, pas seulement le coût annuel observé.
        </p>

        <h2 id="urgence">Quand attendre devient dangereux</h2>

        <p>
          Une dette coûteuse et une urgence ne sont pas la même chose. Une zone
          peut ralentir les évolutions sans mettre l’entreprise en danger. À
          l’inverse, un composant non maintenu ou une restauration impossible
          peut imposer une action avant que la comparaison économique soit
          parfaitement renseignée.
        </p>

        <ul>
          <li>
            une mise à jour de sécurité critique ne peut pas être appliquée ;
          </li>
          <li>
            le fournisseur ou un composant essentiel n’est plus maintenu ;
          </li>
          <li>la restauration n’a jamais été testée sur un parcours vital ;</li>
          <li>
            une obligation légale ou contractuelle datée ne peut pas être tenue
            ;
          </li>
          <li>
            une seule personne détient les accès ou la règle métier essentielle
            ;
          </li>
          <li>
            les données ne peuvent plus être protégées avec des mesures
            crédibles ;
          </li>
          <li>
            le coût de coexistence documenté dépasse un remplacement comparable.
          </li>
        </ul>

        <p>
          La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-securiser-les-serveurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle l’importance des mises à jour, du support et de la
            maîtrise des serveurs
          </a>
          {". Cela ne permet pas d’écrire « logiciel ancien = non conforme »."}
          L’exposition, les données et les mesures compensatoires doivent être
          examinées dans le cas réel. Agir peut signifier isoler, mettre à jour,
          retirer une fonction ou acheter un standard ; pas forcément tout
          réécrire.
        </p>

        <h2 id="devis">
          Avant de signer, demandez des preuves plutôt qu’un score
        </h2>

        <p>
          Un devis défendable explique pourquoi son option gagne. Il ne se
          contente pas d’une note de maintenabilité ou d’un inventaire de
          défauts. Demandez les éléments suivants pour toutes les offres :
        </p>

        <ol>
          <li>
            les parcours, volumes, données et exigences gardés constants ;
          </li>
          <li>
            le point de départ chiffré des délais, reprises, incidents et
            contournements ;
          </li>
          <li>ce que le pilote doit démontrer et avec quel échantillon ;</li>
          <li>
            les coûts de migration, double fonctionnement, recette et formation
            ;
          </li>
          <li>
            le plan de sauvegarde, de réconciliation et de retour arrière ;
          </li>
          <li>
            les critères d’acceptation métier, techniques et de sécurité ;
          </li>
          <li>
            la maintenance, les licences et la capacité interne après lancement
            ;
          </li>
          <li>
            le retrait de l’ancien système et la réversibilité du nouveau.
          </li>
        </ol>

        <p>
          Le{" "}
          <a
            href="https://www.gao.gov/assets/gao-20-195g.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide d’estimation du GAO
          </a>{" "}
          demande un périmètre, des hypothèses, une sensibilité, une analyse de
          risque et une mise à jour avec les coûts réels. Demandez aussi une
          réconciliation des données : l’équipe compare les totaux, statuts et
          enregistrements de l’ancien et du nouveau système avant le retrait. Le{" "}
          <a
            href="https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Green Book britannique
          </a>{" "}
          formalise également la comparaison d’options et les valeurs de
          bascule. Ce sont des cadres publics étrangers, pas des obligations ni
          des barèmes pour une PME française.
        </p>

        <h2 id="preuve">Après les travaux, que devez-vous observer ?</h2>

        <p>
          Commencez par trois changements comparables pour obtenir un signal
          précoce, puis élargissez. Trois cas ne prouvent pas une causalité.
          Conservez les mêmes définitions, la même façon de compter les heures
          et les causes concurrentes : nouvelle équipe, saison, volume, incident
          externe ou changement de priorité.
        </p>

        <InfoBox
          variant="emerald"
          title="Ce que la direction doit pouvoir constater"
        >
          L’équipe explique plus tôt les inconnues, réduit la reprise préalable,
          détecte une régression avant les utilisateurs, revient en arrière sans
          perdre de données et diminue les opérations manuelles du parcours
          ciblé. Une livraison plus rapide ne suffit pas si les incidents ou la
          charge métier augmentent.
        </InfoBox>

        <p>
          Les indicateurs DORA — un référentiel de performance de la livraison
          logicielle — permettent de suivre la{" "}
          <a
            href="https://dora.dev/guides/dora-metrics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            définition officielle des cinq métriques
          </a>{" "}
          : fréquence de déploiement ; délai entre le changement de code et sa
          mise en production ; temps de rétablissement après un déploiement
          défaillant ; taux de déploiements qui nécessitent une intervention ;
          taux de reprise des déploiements (« deployment rework rate »),
          c’est-à-dire les déploiements non planifiés qui corrigent un incident.
          DORA mesure la livraison, pas un montant de dette. Ajoutez les
          indicateurs métier : factures corrigées, heures de ressaisie,
          commandes bloquées ou temps de validation.
        </p>

        <h2 id="calculateur">Refaites le calcul avec vos données</h2>

        <p>
          Le calculateur ci-dessous reste sur votre appareil. Il affiche les
          sous-totaux séparément, permet de changer l’horizon et de sortir une
          option du classement si un coût important reste inconnu. Passez
          volontairement par les trois lectures : trésorerie, capacité, puis
          risque. Si le gagnant change, notez l’hypothèse dans le relevé de
          décision. Commencez par le test rapide à un seul montant. N’ouvrez les
          37 hypothèses détaillées que si vous voulez produire une comparaison à
          défendre devant un associé, un financeur ou un prestataire.
        </p>

        <TechnicalDebtDecisionCalculator />

        <h3>Le dossier libre à utiliser sans nous contacter</h3>

        <p>
          Vous pouvez télécharger les fichiers séparément, sans compte ni
          transmission de données :
        </p>

        <ul>
          <li>
            <a
              href="/ressources/dossier-decision-dette-technique/mode-emploi.md"
              download="mode-emploi-dette-technique.md"
            >
              mode d’emploi et règles anti-double comptage
            </a>
            {"\u00A0;"}
          </li>
          <li>
            <a
              href="/ressources/dossier-decision-dette-technique/registre-evenements.csv"
              download="registre-evenements-dette-technique.csv"
            >
              registre vierge des événements
            </a>
            {"\u00A0;"}
          </li>
          <li>
            <a
              href="/ressources/dossier-decision-dette-technique/exemple-atelier-nova.csv"
              download="exemple-atelier-nova-dette-technique.csv"
            >
              exemple fictif Atelier Nova
            </a>
            {"\u00A0;"}
          </li>
          <li>
            <a
              href="/ressources/dossier-decision-dette-technique/comparatif-options.csv"
              download="comparatif-options-dette-technique.csv"
            >
              comparatif des cinq options
            </a>
            {"\u00A0;"}
          </li>
          <li>
            <a
              href="/ressources/dossier-decision-dette-technique/decision-record.md"
              download="releve-decision-dette-technique.md"
            >
              relevé de décision et critères de révision
            </a>
            {"."}
          </li>
        </ul>

        <p>
          Ce diagnostic est adapté si l’application reste utile, si un
          historique peut être reconstitué et si les responsables métier et
          technique sont disponibles. Il n’est pas adapté à un incident cyber en
          cours, à un chiffrage sans accès aux données, à une réécriture déjà
          irréversible ou à une simple demande de tarif sans périmètre.
        </p>

        <GuideInlineCTA
          title="Relire le calcul avant d’engager un chantier"
          description="Venez avec votre registre, vos coûts encore inconnus et au moins deux options, idéalement les cinq. Le premier échange sert à vérifier le périmètre et les hypothèses ; il ne produit ni devis automatique, ni promesse d’économie."
          tags={[
            "Trésorerie séparée de la capacité",
            "Cinq options au même périmètre",
            "Décision révisable",
          ]}
          ctaLabel="Relire mon dossier de décision"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources et limites</h2>

        <p>
          Les sources primaires ci-dessous ont été rouvertes le 24 juillet 2026.
          Leur date et leur pays permettent de distinguer un cadre utile d’une
          règle applicable à votre entreprise.
        </p>

        <ul>
          <li>
            <a
              href="https://www.sei.cmu.edu/library/managing-technical-debt-identify-technical-debt-items/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Engineering Institute — Identify Technical Debt Items
            </a>{" "}
            : publication du 22 septembre 2022 ; définition, inventaire et lien
            avec les conséquences métier.
          </li>
          <li>
            <a
              href="https://www.sei.cmu.edu/blog/the-future-of-managing-technical-debt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Engineering Institute — The Future of Managing Technical
              Debt
            </a>{" "}
            : périmètre et gestion des éléments de dette ; cadre de recherche
            américain, sans ratio financier universel.
          </li>
          <li>
            <a
              href="https://dora.dev/guides/dora-metrics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DORA — cinq métriques de livraison
            </a>{" "}
            : mise à jour du 5 janvier 2026 ; mesures de flux et de stabilité à
            comparer sur une même application, pas conversion directe en euros.
          </li>
          <li>
            <a
              href="https://www.gov.uk/guidance/prevent-technical-debt-and-legacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK — Prevent technical debt and legacy
            </a>{" "}
            : publication du 23 février 2024, mise à jour le 23 octobre 2024 ;
            propriété, registre, support, coût et gestion de systèmes publics
            britanniques ; benchmark, pas obligation française.
          </li>
          <li>
            <a
              href="https://www.gao.gov/assets/gao-20-195g.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              US GAO — Cost Estimating and Assessment Guide (PDF officiel)
            </a>{" "}
            : publication du 12 mars 2020 ; périmètre, hypothèses, sensibilité,
            risque et mise à jour, pour l’estimation publique américaine.
          </li>
          <li>
            <a
              href="https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              HM Treasury — Green Book 2026
            </a>{" "}
            : mise à jour du 5 février 2026 ; comparaison d’options, risque,
            sensibilité et valeurs de bascule pour l’argent public britannique.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-securiser-les-serveurs"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — sécuriser les serveurs
            </a>{" "}
            : publication du 14 mars 2024 ; support, sauvegarde et mises à jour,
            sans équivalence automatique entre ancienneté et non-conformité.
          </li>
          <li>
            <a
              href="https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-system-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              Australian Cyber Security Centre — system management
            </a>{" "}
            : publication du 9 juin 2026 ; inventaire, correctifs et retrait des
            logiciels non supportés, dans un cadre australien de sécurité.
          </li>
        </ul>

        <p>
          Ces sources n’établissent aucun ratio universel entre dette technique,
          budget ou chiffre d’affaires. Les exemples ne constituent ni une
          moyenne de marché, ni un tarif Hagnéré Code. Le calcul ne permet pas
          de diagnostiquer une application sans accès, de garantir une économie
          ou de remplacer un avis spécialisé en droit, sécurité ou continuité.
          Une publication utile garde les inconnues visibles et revalide les
          sources au moment de la décision.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
