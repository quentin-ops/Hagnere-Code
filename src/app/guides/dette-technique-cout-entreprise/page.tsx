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
    "Tolérer",
    "La zone change peu et le risque est faible",
    "Date de réexamen et limite connue",
  ],
  [
    "Contenir",
    "Une zone fragile peut être isolée",
    "Mesure avant/après et interface claire",
  ],
  [
    "Stabiliser",
    "Les pannes et régressions empêchent de changer sûrement",
    "Parcours critiques testés avant les nouveautés",
  ],
  [
    "Moderniser par étapes",
    "Le logiciel reste utile et peut coexister avec des parties neuves",
    "Étapes réversibles et données contrôlées",
  ],
  [
    "Reconstruire une partie",
    "Une zone bornée est devenue impossible à faire évoluer",
    "Comportements de référence et migration testée",
  ],
  [
    "Reconstruire l’ensemble",
    "Les autres voies documentées ne sont plus viables",
    "Comparaison complète, continuité et retour arrière",
  ],
];

function FiveChangeNotebook() {
  return (
    <section className="not-prose my-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="m-0 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
        Votre point de départ
      </p>
      <h2 className="mb-0 mt-2 text-xl font-bold text-zinc-950 dark:text-white">
        Ouvrez les cinq derniers changements
      </h2>
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
            <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-zinc-100">
              {title}
            </h3>
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
        heroDescription="Quand une petite évolution prend trois semaines, ne choisissez pas encore entre continuer et tout réécrire. Mesurez les attentes, reprises, régressions et opérations manuelles sur cinq changements récents."
        heroAction={{
          href: "#journal",
          label: "Ouvrir le journal des 5 changements",
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
            title: "Coûts observables",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Réécriture non automatique",
            description: "",
            color: "amber",
          },
          {
            number: "03",
            title: "Six réponses possibles",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
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
        ]}
        faqTitle="Dette technique : les réponses avant d’investir"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Une modification prévue en deux jours prend trois semaines. Il faut
            retrouver une règle oubliée, réparer un export et corriger une
            régression. Votre équipe parle de dette technique et propose de tout
            réécrire. Ne signez pas encore ce verdict : commencez par mesurer
            cinq changements ou incidents récents et reliez chaque surcoût à un
            élément précis du logiciel.
          </strong>
        </p>

        <p>
          La dette technique n’est ni l’âge de l’application ni l’ensemble de
          ses bugs. C’est une décision de conception ou de construction qui rend
          certaines évolutions plus coûteuses ensuite. La réponse peut être de
          tolérer, contenir, stabiliser, moderniser progressivement ou
          reconstruire. Ce guide vous aide à choisir sans inventer un « coût
          caché » invérifiable.
        </p>

        <GuideToc
          items={[
            {
              id: "definition",
              label: "1. Ce que la dette technique est — et n’est pas",
            },
            { id: "journal", label: "2. Mesurer cinq changements récents" },
            {
              id: "relier",
              label: "3. Relier le symptôme à un élément précis",
            },
            {
              id: "cout",
              label: "4. Traduire les observations en coût prudent",
            },
            { id: "reponses", label: "5. Choisir parmi six réponses" },
            { id: "ordre", label: "6. Stabiliser avant de moderniser" },
            { id: "preuve", label: "7. Prouver que la situation s’améliore" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="definition">
          1. La dette technique n’est ni l’âge du logiciel ni chaque bug
        </h2>

        <p>
          Le Software Engineering Institute (SEI) définit la dette technique
          comme une approche de conception ou de construction avantageuse à
          court terme, mais qui augmente la complexité et le coût à long terme.
          Le même organisme précise qu’une dette reconnue et gérée peut parfois
          accélérer une exploration. Le problème apparaît lorsqu’elle reste
          invisible, s’accumule et renchérit le développement ou le maintien.
        </p>

        <p>
          Un logiciel vieux peut être stable, bien compris et peu coûteux à
          faire évoluer. Un logiciel neuf peut déjà contenir une dépendance
          fragile ou une règle métier dupliquée. Un défaut isolé peut être une
          simple erreur à corriger. Le mot « dette » devient utile seulement si
          vous pouvez montrer où elle se trouve, quelle conséquence elle produit
          et ce qu’il se passe si elle est différée.
        </p>

        <InfoBox variant="amber" title="Refusez les deux raccourcis">
          « Le logiciel fonctionne, donc il n’y a aucun problème » ignore les
          retards et risques. « Le code est ancien, donc il faut tout refaire »
          ignore la valeur, les règles déjà apprises et le risque de migration.
          Mesurez avant de choisir.
        </InfoBox>

        <p>
          La dette ne se limite pas au code. Le SEI l’étudie aussi dans
          l’architecture, les tests, la documentation, les scripts de
          construction et les défauts connus. Ajoutez les données, les accès et
          les dépendances lorsque leurs lacunes ralentissent réellement le
          travail.
        </p>

        <h2 id="journal">
          2. Cinq changements récents valent mieux qu’une note abstraite
        </h2>

        <p>
          Prenez les cinq dernières évolutions, corrections ou pannes.
          Choisissez des événements terminés ou suffisamment documentés. Une
          impression générale comme « tout prend plus de temps » ne permet ni de
          vérifier la cause ni de mesurer une amélioration.
        </p>

        <FiveChangeNotebook />

        <GuideTable
          headers={[
            "Champ",
            "Question à renseigner",
            "Source interne possible",
          ]}
          rows={[
            [
              "Résultat attendu",
              "Qu’est-ce que l’entreprise voulait obtenir ?",
              "Demande, ticket ou décision",
            ],
            [
              "Estimation initiale",
              "Quel effort avait été annoncé et avec quelles inconnues ?",
              "Compte rendu ou devis",
            ],
            [
              "Temps utile",
              "Combien de temps produit directement le résultat ?",
              "Suivi de tâche expliqué",
            ],
            [
              "Temps de reprise",
              "Qu’a-t-il fallu comprendre ou remettre en état avant ?",
              "Historique et entretiens",
            ],
            [
              "Conséquence",
              "Quel retard, incident ou travail manuel a suivi ?",
              "Journal d’exploitation",
            ],
            [
              "Élément à vérifier",
              "Quelle partie précise pourrait expliquer la répétition ?",
              "Code, test, donnée, accès ou dépendance",
            ],
          ]}
          caption="Journal factuel des changements et incidents récents"
        />

        <p>
          Dans cet <strong>exemple illustratif fictif</strong>, Arpège Services
          utilise une application de planification et de facturation. Ajouter un
          statut devait prendre deux jours. L’équipe découvre un calcul non
          documenté, reprend trois exports et intervient manuellement après une
          régression. Ce scénario ne prouve pas qu’il faut réécrire. Il justifie
          d’abord d’isoler le calcul et d’ajouter des tests sur les factures.
        </p>

        <h2 id="relier">
          3. Reliez chaque symptôme à un élément que l’équipe peut vérifier
        </h2>

        <p>
          « Architecture fragile » ne permet pas de décider. Écrivez plutôt : «
          La règle de remise est copiée dans trois exports. Toute modification
          exige trois corrections et une comparaison des factures. » Le
          dirigeant comprend la conséquence ; l’équipe sait quoi examiner.
        </p>

        <p>Une fiche de dette utile contient :</p>
        <ul>
          <li>
            l’endroit précis : composant, donnée, déploiement ou dépendance ;
          </li>
          <li>le comportement actuel et le comportement attendu ;</li>
          <li>
            les événements récents où il a coûté du temps ou créé un risque ;
          </li>
          <li>la conséquence si rien ne change ;</li>
          <li>l’action envisagée et ce qu’elle doit améliorer ;</li>
          <li>
            la date ou le seuil qui déclenchera un réexamen si l’action est
            reportée.
          </li>
        </ul>

        <p>
          Le SEI recommande un inventaire d’éléments explicites afin de relier
          les décisions techniques aux objectifs métier et de comparer leur
          priorité aux nouvelles fonctions. Un score global peut aider à
          survoler ; il ne doit jamais remplacer ces fiches.
        </p>

        <h2 id="cout">
          4. Calculez un coût prudent, sans transformer toute heure en perte
        </h2>

        <p>
          Additionnez d’abord les temps réellement observés. Séparez le travail
          utile — celui qui produit la modification — du travail de reprise, des
          régressions et des interventions manuelles. Ne valorisez en euros que
          ce que vous pouvez expliquer.
        </p>

        <FormulaBox>{`Temps supplémentaire observé
= attente imputable à l’élément étudié
+ reprise préalable
+ correction des régressions
+ opérations manuelles directement causées

Coût valorisé prudent
= heures supplémentaires réellement payées
+ prestations externes attribuables
+ coût évité ou travail déplacé dont l’hypothèse est écrite

Opportunité reportée
= à décrire séparément tant que sa valeur n’est pas prouvée`}</FormulaBox>

        <p>
          Un délai de trois semaines n’est pas trois semaines de coût salarial :
          une partie peut être de l’attente, une autre du travail utile et une
          autre d’un arbitrage de priorité. Conservez ces lignes séparées.
          Indiquez aussi les coûts omis et les inconnues au lieu de les
          remplacer par zéro.
        </p>

        <p>
          Ne présentez pas ce résultat comme une dette comptable, un ROI ou une
          prévision certifiée. Il s’agit d’une base de décision opérationnelle.
          Une occasion commerciale non réalisée reste une occasion potentielle
          tant qu’aucun élément sérieux ne permet d’en estimer la probabilité et
          la marge.
        </p>

        <h2 id="reponses">
          5. La meilleure réponse n’est presque jamais « tout réécrire »
        </h2>

        <GuideTable
          headers={[
            "Réponse",
            "Quand elle devient rationnelle",
            "Condition de contrôle",
          ]}
          rows={responseOptions}
          caption="Six réponses proportionnées à la dette observée"
        />

        <p>
          Tolérer est une décision valable si la zone change rarement et si sa
          défaillance aurait peu d’effet. Écrivez une limite et une date de
          réexamen pour éviter que la tolérance devienne un oubli.
        </p>

        <p>
          Contenir ou moderniser progressivement préserve souvent les parties
          qui fonctionnent. Une interface peut isoler une dépendance, des tests
          peuvent sécuriser un calcul, une nouvelle brique peut remplacer un
          morceau après l’autre. Ces solutions ont aussi un coût de coexistence
          qu’il faut compter.
        </p>

        <p>
          La reconstruction complète devient défendable lorsque les autres voies
          sont documentées comme non viables : technologies non maintenues,
          données impossibles à sécuriser, frontières inexistantes ou coût de
          coexistence excessif. Elle doit encore prévoir la migration, les
          comportements de référence et la continuité. Un nouveau code ne
          garantit pas un produit mieux compris.
        </p>

        <h2 id="ordre">
          6. Stabilisez ce qui permet de changer avant d’ajouter de grandes
          fonctions
        </h2>

        <p>
          Si chaque livraison produit des régressions, commencez par les
          parcours critiques, les tests et la possibilité de revenir en arrière.
          Si personne ne sait reconstruire l’application, documentez et
          automatisez ce chemin. Si une seule personne détient les accès,
          sécurisez leur propriété.
        </p>

        <ol>
          <li>
            choisir les parcours dont l’échec arrête réellement l’activité ;
          </li>
          <li>
            écrire leur comportement actuel avec des données de référence ;
          </li>
          <li>rendre les erreurs visibles et conserver les preuves ;</li>
          <li>réduire un élément de dette bien localisé ;</li>
          <li>mesurer les changements suivants avec le même journal ;</li>
          <li>augmenter le lot seulement si la livraison devient plus sûre.</li>
        </ol>

        <p>
          Lorsqu’un prestataire ou une équipe change, l’inventaire technique ne
          suffit pas. Le guide pour{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            reprendre un logiciel métier existant
          </Link>{" "}
          couvre les accès, le code, les données et le premier changement
          contrôlé.
        </p>

        <h2 id="preuve">
          7. Après les travaux, les trois évolutions suivantes doivent devenir
          plus sûres
        </h2>

        <p>
          Après chaque action, mesurez les trois prochains changements
          comparables. Le temps total peut varier parce que la fonction est
          différente ; regardez surtout la reprise préalable, les régressions,
          les opérations manuelles et la capacité à prévoir le travail.
        </p>

        <InfoBox
          variant="emerald"
          title="Les preuves que la situation s’améliore"
        >
          L’équipe identifie plus vite la zone à modifier, peut tester le
          comportement important, déploie sans opération oubliée, revient en
          arrière si nécessaire et explique les inconnues avant de chiffrer. Une
          baisse ponctuelle du délai ne suffit pas si le risque a été déplacé.
        </InfoBox>

        <GuideInlineCTA
          title="Mesurer ce qui ralentit vos évolutions"
          description="Venez avec cinq changements ou incidents récents. Nous distinguerons le travail utile, les reprises et les régressions, puis nous comparerons quatre options : tolérer, stabiliser, moderniser par étapes ou reconstruire."
          tags={[
            "Faits avant réécriture",
            "Option de tolérer",
            "Plan mesurable",
          ]}
          ctaLabel="Analyser mes cinq cas"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources et limites</h2>

        <ul>
          <li>
            <a
              href="https://www.sei.cmu.edu/documents/2578/2022_010_001_887351.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Engineering Institute — Managing Technical Debt: Identify
              Technical Debt Items
            </a>{" "}
            : définition, inventaire et lien avec les conséquences métier.
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
            : périmètre et gestion des éléments de dette.
          </li>
        </ul>

        <p>
          Ces sources n’établissent aucun ratio universel entre dette technique,
          budget ou chiffre d’affaires. Ce guide ne permet pas de chiffrer une
          application sans accès ni de garantir le bénéfice d’une modernisation.
          Les coûts et risques doivent être vérifiés dans le contexte réel de
          l’entreprise.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
