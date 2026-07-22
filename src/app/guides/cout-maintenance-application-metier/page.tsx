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

const guide = getGuide("cout-maintenance-application-metier");

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
        alt: "Construire le budget annuel d’une application métier à partir de preuves réelles",
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
      name: "Coût de maintenance d’une application métier",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Quel budget annuel prévoir pour maintenir une application métier ?",
    answer:
      "Le prix de création ne permet pas de déduire un budget annuel fiable. Additionnez les factures techniques, le support prévu au contrat, les exercices programmés, les évolutions décidées et le temps interne. Gardez séparément chaque montant encore inconnu avec la personne et la date qui permettront de le chiffrer.",
  },
  {
    question: "L’hébergement est-il inclus dans le contrat de maintenance ?",
    answer:
      "Pas automatiquement. Le contrat doit préciser qui facture l’hébergement, la base, le stockage, les courriels, la surveillance et les sauvegardes. Vérifiez aussi ce qui varie avec l’usage. Chaque dépense doit apparaître une seule fois, dans le bon poste.",
  },
  {
    question: "Les évolutions sont-elles comprises dans la maintenance ?",
    answer:
      "Seulement si le contrat le dit clairement. Une correction remet une fonction attendue en état ; une évolution change ce que l’application doit faire. Demandez comment le besoin est estimé, autorisé, testé et facturé. Une enveloppe souple peut convenir, mais elle ne transforme pas toutes les demandes en travaux inclus.",
  },
  {
    question:
      "Une application stable a-t-elle encore besoin d’un budget de maintenance ?",
    answer:
      "Elle conserve au minimum ses services techniques et ses responsabilités d’exploitation. Elle peut aussi dépendre de fournisseurs, de versions logicielles ou d’obligations qui évoluent. Cela ne rend pas un forfait permanent obligatoire : si le besoin est rare et bien circonscrit, des interventions ponctuelles peuvent être plus adaptées.",
  },
  {
    question: "Comment budgéter une application sans historique fiable ?",
    answer:
      "Commencez par les factures et comptes actifs, faites vérifier la capacité de sauvegarde et de restauration, puis demandez un devis pour les travaux déjà décidés. Tout le reste demeure montant inconnu avec un déclencheur et une date de recontrôle. Un pourcentage provisoire ne doit jamais être présenté comme un budget final.",
  },
  {
    question: "Faut-il obligatoirement signer une TMA ?",
    answer:
      "Non. Une entreprise peut organiser le support en interne, acheter un lot ponctuel, utiliser le support d’un éditeur ou signer une tierce maintenance applicative. Le bon choix dépend de la fréquence des besoins, des conséquences d’une panne, des horaires attendus et de la capacité interne à décider et tester.",
  },
  {
    question:
      "Que signifient maintenance corrective, préventive et évolutive ?",
    answer:
      "La corrective traite une anomalie, la préventive cherche à éviter un problème et l’évolutive change ou améliore les fonctions. Ces mots doivent être traduits en prestations observables dans votre contrat. Leur seule présence ne dit ni le volume inclus, ni le délai, ni le prix.",
  },
  {
    question: "Comment comparer deux devis de maintenance ?",
    answer:
      "Envoyez aux deux prestataires les mêmes factures, le même historique d’incidents, la même liste d’évolutions et les mêmes scénarios. Faites chiffrer un mois calme, un mois chargé et une intervention hors périmètre. Comparez ensuite inclusions, exclusions, responsabilités, plafonds et prix annuel connu.",
  },
];

type BudgetLineCardProps = {
  title: string;
  purpose: string;
  proof: string;
  calculation: string;
  amount: string;
  included: string;
  excluded: string;
};

function BudgetLineCard({
  title,
  purpose,
  proof,
  calculation,
  amount,
  included,
  excluded,
}: BudgetLineCardProps) {
  return (
    <div className="not-prose my-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900 sm:flex sm:items-start sm:justify-between sm:gap-5 sm:px-6">
        <div>
          <p className="mb-1 text-lg font-bold text-zinc-950 dark:text-white">
            {title}
          </p>
          <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {purpose}
          </p>
        </div>
        <p className="mb-0 mt-3 shrink-0 rounded-full bg-zinc-950 px-3 py-1.5 text-sm font-bold text-white dark:bg-white dark:text-zinc-950 sm:mt-0">
          {amount}
        </p>
      </div>
      <dl className="grid sm:grid-cols-2">
        {[
          ["Preuve utilisée", proof],
          ["Calcul annuel", calculation],
          ["Compris dans cette ligne", included],
          ["Exclu pour éviter le doublon", excluded],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={[
              "border-zinc-200 p-4 dark:border-zinc-800 sm:p-5",
              index < 2 ? "border-b sm:border-b" : "",
              index % 2 === 0 ? "sm:border-r" : "",
            ].join(" ")}
          >
            <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              {label}
            </dt>
            <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {value}
            </dd>
          </div>
        ))}
      </dl>
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
          { label: "Coût de maintenance d’une application métier" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Construisez l’enveloppe des douze prochains mois à partir de vos factures, incidents et changements décidés, sans traiter comme gratuits les montants qui restent à chiffrer."
        heroAction={{
          href: "#exemple",
          label: "Voir l’exemple chiffré",
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
            title: "5 preuves à réunir",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Aucun ratio automatique",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 décisions possibles",
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
            href: "/guides/contrat-tma-application",
            label: "Préparer ou comparer un contrat de maintenance",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Comprendre le prix de création d’un logiciel",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer la valeur et le coût complet du projet",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Auditer une application avant sa reprise",
          },
        ]}
        faqTitle="Budget de maintenance : les questions à trancher"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Votre application fonctionne déjà et vous préparez le budget de
          l’année prochaine. Faut-il réserver une petite enveloppe ou prévoir un
          investissement beaucoup plus important ? La réponse honnête ne
          consiste pas à appliquer un pourcentage au prix de création. Deux
          applications facturées au même prix peuvent avoir des utilisateurs,
          des fournisseurs, des risques et des projets très différents.
        </p>
        <p>
          Ce guide vous aide à partir de ce que votre entreprise peut déjà
          prouver : les factures, le contrat, les incidents, les changements
          décidés et le temps passé en interne. Vous obtiendrez un budget sur
          douze mois, une liste claire des montants encore inconnus et assez
          d’éléments pour demander des devis comparables. Vous pourrez aussi
          conclure qu’un contrat récurrent n’est pas nécessaire.
        </p>

        <GuideToc
          items={[
            { id: "reponse", label: "1. Partir des dépenses réelles" },
            { id: "preuves", label: "2. Réunir cinq preuves" },
            { id: "postes", label: "3. Séparer les postes" },
            { id: "exemple", label: "4. Lire un exemple chiffré" },
            { id: "inconnues", label: "5. Garder les inconnues visibles" },
            { id: "registre", label: "6. Préparer des devis comparables" },
            { id: "choix", label: "7. Choisir la bonne organisation" },
            { id: "limites", label: "8. Comprendre les limites" },
          ]}
        />

        <h2 id="reponse">
          1. La réponse courte : partez des dépenses que vous pouvez justifier
        </h2>
        <p>
          Une application métier est un logiciel construit ou configuré pour
          faire fonctionner une activité précise : planning, interventions,
          stock, dossiers clients, facturation ou validations internes. Une fois
          mise en ligne, elle continue d’utiliser des services techniques et du
          travail humain. Mais ce travail n’a ni la même fréquence, ni le même
          périmètre dans toutes les entreprises.
        </p>
        <p>
          Votre budget doit donc répondre à une question très concrète :{" "}
          <strong>
            qu’allons-nous payer pendant les douze prochains mois pour garder
            l’outil utilisable, traiter les incidents et réaliser les
            changements que nous avons décidé de réaliser ?
          </strong>{" "}
          Cette question évite deux erreurs opposées : croire qu’une application
          stable ne coûtera plus rien, ou réserver automatiquement une part du
          prix initial sans savoir ce qu’elle achète.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Dépenses techniques",
              "hébergement, base, stockage, courriels, surveillance et autres services facturés",
            ],
            [
              "Travail sur l’application",
              "support, corrections, prévention, adaptations et publications",
            ],
            [
              "Changements décidés",
              "évolutions validées pour l’année, séparées des simples idées",
            ],
            [
              "Temps de l’entreprise",
              "coordination, tests, décisions, aide aux utilisateurs et suivi des prestataires",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <InfoBox
          variant="amber"
          title="Le prix initial peut dépanner, mais il ne doit pas décider"
        >
          Si l’application vient d’être livrée et qu’aucun historique n’existe,
          une réserve provisoire peut aider votre trésorerie. N’en faites pas
          une vérité de marché. Écrivez qu’elle est provisoire, puis
          remplacez-la dès que possible par des factures, des prestations et des
          risques nommés.
        </InfoBox>

        <h2 id="preuves">2. Réunissez cinq preuves avant de chiffrer</h2>
        <p>
          Vous n’avez pas besoin d’un audit de plusieurs semaines pour
          commencer. Réunissez les documents que l’entreprise possède déjà. Un
          dossier incomplet reste utile : il montre précisément ce qui devra
          être demandé au prestataire.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            {
              n: "01",
              title: "Les factures et relevés des douze derniers mois",
              text: "Listez l’hébergeur, la base, le stockage, les courriels, le domaine, la surveillance et chaque service appelé par l’application. Notez le titulaire, la fréquence, la devise et ce qui varie avec l’usage.",
            },
            {
              n: "02",
              title: "Le contrat actuellement signé",
              text: "Repérez les heures, horaires, travaux inclus, exclusions, dépassements, licences et conditions de sortie. Une ligne “maintenance” sur une facture ne suffit pas à comprendre la couverture.",
            },
            {
              n: "03",
              title: "Les tickets et incidents survenus cette année",
              text: "Ne comptez pas seulement les pannes. Relevez aussi les demandes d’aide, erreurs récurrentes, interventions manuelles et changements imposés par un fournisseur.",
            },
            {
              n: "04",
              title: "Les évolutions déjà décidées",
              text: "Séparez les décisions prises des idées intéressantes. Une évolution entre au budget lorsqu’un responsable, un résultat attendu et une échéance existent.",
            },
            {
              n: "05",
              title: "Le temps interne consacré à l’application",
              text: "Coordination, tests, réunions, réponse aux utilisateurs et vérification des factures sont du travail. Utilisez le coût chargé retenu par votre entreprise et séparez-le de la TVA facturée par les prestataires.",
            },
          ].map((item) => (
            <div
              key={item.n}
              className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-[3rem_1fr] sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                {item.n}
              </div>
              <div>
                <p className="mb-1 font-bold text-zinc-950 dark:text-white">
                  {item.title}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Si une facture ou un compte est encore au nom d’un ancien prestataire,
          traitez d’abord la propriété et la reprise des accès. Le guide sur la{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            reprise d’un logiciel métier existant
          </Link>{" "}
          vous aide à vérifier code, données, déploiement et restauration avant
          de négocier son budget futur.
        </p>

        <h2 id="postes">
          3. Séparez les postes pour ne rien oublier ni compter deux fois
        </h2>
        <p>
          Le mot « maintenance » cache souvent plusieurs achats. Séparez-les
          avant de faire le total. Vous verrez immédiatement si l’hébergement
          est déjà facturé ailleurs, si une évolution est glissée dans le
          support ou si un exercice de restauration n’a tout simplement jamais
          été prévu.
        </p>
        <GuideTable
          caption="Les postes à distinguer dans le registre annuel"
          headers={["Poste", "Preuve principale", "Question de contrôle"]}
          rows={[
            [
              "Abonnements techniques",
              "factures et relevés d’usage",
              "quels services actifs, fixes ou variables, font fonctionner l’application ?",
            ],
            [
              "Support et corrections",
              "contrat, tickets et horaires",
              "qui répond, à quoi, quand et jusqu’à quelle limite ?",
            ],
            [
              "Prévention et adaptation",
              "liste de tâches, dépendances et versions",
              "quels travaux sont planifiés avant qu’un incident survienne ?",
            ],
            [
              "Sauvegarde et restauration",
              "procédure, compte rendu et test",
              "la copie existe-t-elle seulement, ou une restauration a-t-elle été réussie ?",
            ],
            [
              "Évolutions",
              "décisions, devis et critères d’acceptation",
              "qu’allons-nous changer cette année ?",
            ],
            [
              "Temps interne",
              "mesure ou estimation documentée",
              "qui décide, teste, explique et suit le service ?",
            ],
          ]}
        />
        <p>
          Le{" "}
          <a
            href="https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000043310752"
            target="_blank"
            rel="noopener noreferrer"
          >
            CCAG-TIC distingue notamment le préventif, le correctif, l’évolutif
            et l’adaptatif
          </a>
          . Ce vocabulaire provient de la commande publique et peut aider à
          clarifier un devis ; il ne fixe pas vos prix et ne s’applique pas
          automatiquement à tous les contrats privés. Demandez toujours la tâche
          concrète, le résultat et l’exclusion derrière chaque mot.
        </p>
        <p>
          Pour les dépendances logicielles, l’{" "}
          <a
            href="https://devguide.owasp.org/en/05-implementation/02-dependencies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OWASP recommande d’inventorier les composants de production
          </a>{" "}
          avec leur version, leur source, leur licence et leur statut de
          support. C’est une bonne pratique de sécurité logicielle, pas une
          règle de tarification. Elle sert surtout à voir ce qui devra être
          surveillé ou remplacé.
        </p>

        <h2 id="exemple">
          4. Exemple illustratif fictif : comment PlanifPro construit son budget
        </h2>
        <InfoBox variant="blue" title="Exemple illustratif fictif">
          PlanifPro Services est une PME imaginaire. Son application gère le
          planning, les interventions et la facturation en semaine, sans
          astreinte. Tous les montants, contrats, usages et noms ci-dessous sont
          inventés pour expliquer le calcul. Ils ne décrivent ni un client, ni
          un tarif Hagnéré Code, ni une moyenne de marché.
        </InfoBox>
        <p>
          Avant d’additionner les factures, choisissez une même base de
          comparaison. Une entreprise qui récupère toute la TVA peut suivre ses
          dépenses externes hors taxes ; celle qui ne la récupère pas doit aussi
          regarder ce qu’elle décaisse toutes taxes comprises. Si la
          récupération n’est que partielle ou incertaine, gardez HT, TVA et TTC
          sur trois colonnes et faites valider le traitement par votre
          comptable.
        </p>
        <p>
          PlanifPro récupère ici toute la TVA : ses dépenses externes sont donc
          comparées hors taxes. Pour le temps interne, l’entreprise fictive
          retient un coût chargé de 45 € par heure, sans TVA. Les deux natures
          de coût restent séparées jusqu’au total.
        </p>

        <BudgetLineCard
          title="Abonnements techniques"
          purpose="Services nécessaires au fonctionnement quotidien de l’application."
          proof="Douze factures de cloud, base, stockage, courriels et outil automatisé de surveillance."
          calculation="300 € HT par mois × 12 mois."
          amount="3 600 € HT"
          included="Uniquement les abonnements techniques listés et facturés."
          excluded="Surveillance humaine, assistance, correction et évolution."
        />
        <BudgetLineCard
          title="Support ouvré, correction et prévention"
          purpose="Travail humain couvert pendant les heures ouvrées par le contrat fictif."
          proof="Contrat annuel et périmètre écrit : support, corrections prévues et travaux préventifs planifiés."
          calculation="Forfait annuel fictif."
          amount="18 000 € HT"
          included="Support ouvré, corrections couvertes et prévention nommée au contrat."
          excluded="Hébergement, astreinte, évolutions et exercice annuel de restauration/export."
        />
        <BudgetLineCard
          title="Exercice annuel de restauration et d’export"
          purpose="Vérifier qu’une sauvegarde peut être restaurée et que les données peuvent être remises."
          proof="Un devis unique fictif avec procédure, périmètre de l’exercice et compte rendu."
          calculation="Prix du devis unique."
          amount="1 500 € HT"
          included="Un seul exercice défini de restauration et d’export."
          excluded="Nouvel hébergement, migration complète et intervention après incident réel."
        />
        <BudgetLineCard
          title="Évolution décidée"
          purpose="Une amélioration validée pour l’année, distincte du maintien en état."
          proof="Décision métier, devis fictif et critères d’acceptation."
          calculation="Prix du devis validé."
          amount="4 800 € HT"
          included="La seule évolution décrite et acceptée."
          excluded="Les idées non décidées et toute demande supplémentaire."
        />
        <BudgetLineCard
          title="Coordination interne"
          purpose="Temps de l’entreprise pour décider, tester et suivre le service."
          proof="Estimation interne fictive de trois heures par mois."
          calculation="3 h × 45 € × 12 mois."
          amount="1 620 €"
          included="Réunions, tests, validation et suivi prévus."
          excluded="TVA, travail du prestataire et temps exceptionnel encore inconnu."
        />

        <FormulaBox>
          <strong>Dépenses externes de maintien</strong>
          <br />3 600 + 18 000 + 1 500 = <strong>23 100 € HT</strong>
          <br />
          <br />
          <strong>Avec l’évolution décidée</strong>
          <br />
          23 100 + 4 800 = <strong>27 900 € HT de dépenses externes</strong>
          <br />
          <br />
          <strong>Coût complet</strong>
          <br />
          27 900 € HT externes + 1 620 € internes = <strong>29 520 €</strong>
        </FormulaBox>
        <p>
          Si PlanifPro reporte l’évolution, son coût complet devient 23 100 € HT
          de dépenses externes plus 1 620 € de temps interne, soit 24 720 €. Ce
          scénario ne dit pas que le report est toujours une bonne idée. Il
          montre simplement quelle décision explique la différence, au lieu de
          cacher tous les travaux dans un même pourcentage.
        </p>

        <h2 id="inconnues">
          5. Gardez à part les montants qui ne sont pas encore chiffrés
        </h2>
        <p>
          Le registre de PlanifPro n’est pas parfaitement prévisible. Une hausse
          d’usage, un incident hors contrat ou une exigence sectorielle peuvent
          modifier la dépense. Inventer un prix rendrait le total plus propre,
          mais moins utile. Chaque inconnue reçoit donc un responsable, un
          déclencheur et une date.
        </p>
        <GuideTable
          caption="Registre fictif des montants encore inconnus"
          headers={[
            "Inconnue",
            "Ce qui déclenche le chiffrage",
            "Prochaine décision",
          ]}
          rows={[
            [
              "Incident hors couverture",
              "ticket classé hors contrat avec estimation écrite",
              "responsable d’exploitation ; décision avant toute intervention non urgente",
            ],
            [
              "Hausse importante de l’usage",
              "seuil d’utilisateurs ou de stockage défini avec le fournisseur",
              "direction ; revue à chaque facture variable",
            ],
            [
              "Migration technique majeure",
              "fin de support confirmée ou obstacle mesuré",
              "responsable technique ; devis avant engagement",
            ],
            [
              "Audit ou exigence sectorielle",
              "obligation applicable confirmée pour l’activité et les données",
              "direction ; spécialiste compétent si le champ l’exige",
            ],
          ]}
        />
        <InfoBox
          variant="amber"
          title="Ne gonflez pas artificiellement le total"
        >
          Une réserve de trésorerie peut être décidée par l’entreprise selon sa
          tolérance au risque. Gardez-la sur une ligne séparée. Ne la présentez
          pas comme le prix de la maintenance et ne transformez pas une
          hypothèse prudente en devis du prestataire.
        </InfoBox>
        <p>
          Pour les sauvegardes, l’{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANSSI recommande des contrôles, des tests réguliers et une procédure
            de restauration
          </a>
          , avec un ordre de reprise et les configurations des applications.
          C’est un repère de sécurité, pas une obligation générale ni une
          garantie. Dans votre budget, traduisez-le en exercice précis : qui le
          réalise, sur quoi, avec quel compte rendu et quel traitement de la
          copie restaurée ?
        </p>

        <h2 id="registre">
          6. Transformez le registre en demande de devis comparable
        </h2>
        <p>
          Une demande vague — « combien pour maintenir notre application ? » —
          oblige chaque prestataire à imaginer un périmètre différent. Envoyez
          plutôt les mêmes preuves et la même fiche. Le prix peut varier, mais
          vous saurez enfin pourquoi.
        </p>
        <div className="not-prose my-6 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100 sm:p-6">
          <p className="mb-4 text-lg font-bold">
            Fiche annuelle à recopier pour chaque poste
          </p>
          <ol className="m-0 grid gap-x-8 gap-y-2 pl-5 text-sm leading-relaxed sm:grid-cols-2">
            <li>poste et résultat attendu ;</li>
            <li>responsable côté entreprise ;</li>
            <li>facture, contrat, devis, ticket ou mesure utilisé ;</li>
            <li>coût fixe ou variable ;</li>
            <li>inclus ou exclu du contrat actuel ;</li>
            <li>formule annuelle et base retenue : HT, TVA et TTC ;</li>
            <li>dépense externe prévue ;</li>
            <li>temps et coût internes séparés ;</li>
            <li>montant inconnu, déclencheur et date de décision.</li>
            <li>dépense réalisée à la date du suivi ;</li>
            <li>écart avec le budget et décision associée.</li>
          </ol>
        </div>
        <p>
          Demandez ensuite trois simulations avec les tarifs propres au devis :
          un mois calme, un mois chargé et un incident hors périmètre. Faites
          préciser le minimum facturé, les dépassements, le report éventuel de
          capacité, les licences et la sortie. Le guide sur le{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de tierce maintenance applicative (TMA)
          </Link>{" "}
          fournit les clauses, tests et scénarios à examiner sans les confondre
          avec votre budget annuel.
        </p>
        <p>
          Le total doit conserver trois lignes séparées : les dépenses externes
          connues, le coût interne et les montants à chiffrer. À chaque revue,
          ajoutez la dépense déjà réalisée, l’écart avec le budget et la
          décision prise. Vous pourrez ensuite rapprocher ce coût de la valeur
          obtenue avec le guide consacré au{" "}
          <Link href="/guides/calculer-roi-application-metier">
            retour sur investissement d’une application métier
          </Link>
          . Une économie de temps n’est une économie de trésorerie que si
          l’entreprise sait ce qu’elle fera du temps libéré.
        </p>

        <h2 id="choix">
          7. Choisissez un contrat récurrent, un lot ponctuel, un report ou un
          arrêt
        </h2>
        <p>
          Le registre ne sert pas à justifier automatiquement une TMA. Il rend
          quatre décisions comparables. La bonne dépend du besoin réel, pas du
          modèle que préfère le prestataire.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Contrat récurrent",
              "Le support, la prévention et la disponibilité d’une équipe reviennent régulièrement. Le périmètre, les horaires et les plafonds peuvent être écrits.",
            ],
            [
              "Lot ponctuel",
              "Le travail est identifié, limité et testable : remise à niveau, exercice de restauration, correction d’un ensemble connu ou documentation.",
            ],
            [
              "Évolution reportée",
              "Le fonctionnement indispensable est financé, mais l’amélioration peut attendre sans créer un risque ou un coût métier disproportionné.",
            ],
            [
              "Arrêt ou remplacement",
              "L’usage ou la valeur ne justifie plus le coût. Les données, utilisateurs, contrats et obligations sont traités avant la fermeture.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6"
            >
              <p className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Si le prestataire peut accéder à des données personnelles, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande d’enregistrer les interventions et de limiter les
            accès de télémaintenance dans le temps
          </a>
          . Lorsqu’il traite ces données pour le compte de l’entreprise, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            sous-traitance doit aussi encadrer responsabilités, incidents,
            habilitations et restitution
          </a>
          . Ces exigences dépendent des données et des rôles réels ; elles ne
          permettent pas d’ajouter un forfait générique intitulé « conformité ».
        </p>
        <h2 id="limites">
          8. Ce budget éclaire la décision ; il ne prédit pas tous les incidents
        </h2>
        <p>
          Le registre annuel est un outil de décision, pas une assurance contre
          toutes les pannes. Il rend visibles les achats prévus, les limites du
          contrat et le travail interne. Il ne peut pas garantir qu’aucun
          incident nouveau n’arrivera, qu’une sauvegarde réussira toujours ou
          qu’une mise à jour empêchera toute attaque.
        </p>
        <p>
          Conservez la date et la preuve de chaque montant, puis comparez le
          réalisé au budget au fil de l’année. Si l’usage, un fournisseur ou la
          feuille de route change, modifiez la ligne concernée — pas un
          pourcentage global. Vous saurez ainsi si le coût vient du maintien en
          état, d’une décision d’évolution, d’un risque nouveau ou d’un service
          devenu inutile.
        </p>
        <InfoBox variant="blue" title="Votre résultat à la fin de l’exercice">
          À la fin, le budget tient sur une page : ce qui sera payé, la preuve
          utilisée, ce qui est inclus, le temps interne, les inconnues et la
          prochaine décision. Si personne ne peut expliquer une ligne, elle
          n’est pas encore prête à être engagée.
        </InfoBox>

        <GuideInlineCTA
          title="Faire vérifier le budget annuel de votre application"
          description="Préparez le contrat actuel, les factures d’infrastructure, les incidents des douze derniers mois et les évolutions prévues. Quentin Hagnéré distingue les dépenses nécessaires au fonctionnement, les travaux à chiffrer et les montants encore inconnus. Cette première orientation ne vous oblige à commander aucun forfait ni aucune prestation."
          tags={["Lecture directe", "Coûts expliqués", "Aucun forfait imposé"]}
          ctaLabel="Présenter mon application"
          ctaHref="/demarrer-un-projet"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
