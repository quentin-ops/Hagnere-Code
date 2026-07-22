import type { Metadata } from "next";
import Link from "next/link";
import { GoogleAdsBudgetCalculator } from "@/components/guides/GoogleAdsBudgetCalculator";
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

const guide = getGuide("budget-google-ads-pme");

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
        alt: "Calculer un budget Google Ads adapté à une PME",
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
      name: "Budget Google Ads pour une PME",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Google Ads impose-t-il un budget minimum ?",
    answer:
      "Non. Google indique qu’aucune dépense minimale n’est imposée. Cela ne signifie pas qu’un petit montant permettra d’évaluer utilement votre offre et votre zone : il faut comparer la prévision de clics à votre marge et à votre risque.",
  },
  {
    question: "500 €, 1 000 € ou 2 000 € suffisent-ils pour une PME ?",
    answer:
      "Impossible à dire avec le seul montant. La réponse dépend des recherches ciblées, de la zone, du coût prévu des clics, de votre marge par vente et de la part des demandes sérieuses qui deviennent clientes.",
  },
  {
    question: "Le budget Google Ads inclut-il les frais d’agence ?",
    answer:
      "Non dans ce guide. Le budget média désigne l’argent facturé par Google. Pour mesurer le risque complet, ajoutez les honoraires, la page, la mesure, les outils et le temps passé à traiter les demandes.",
  },
  {
    question: "Faut-il utiliser un budget quotidien ou un budget total ?",
    answer:
      "Cela dépend de la campagne. Le budget quotidien est une moyenne avec des limites de dépense ; un budget total peut borner certaines nouvelles campagnes datées, mais Google peut répartir la dépense sans plafond journalier.",
  },
  {
    question: "Combien de temps faut-il laisser tourner le test ?",
    answer:
      "Il n’existe pas de durée universelle. Attendez les demandes et les ventes compatibles avec votre cycle commercial et le délai avant conversion, sans prolonger un test dont la page, la mesure ou le traitement des contacts sont défaillants.",
  },
  {
    question: "Que faire si je n’ai aucun ancien taux de conversion ?",
    answer:
      "Testez plusieurs hypothèses clairement nommées et réduisez la question. Vous pouvez d’abord vérifier si les recherches choisies produisent des demandes sérieuses, sans prétendre avoir démontré la rentabilité complète.",
  },
  {
    question: "Dois-je augmenter si Google affiche « limitée par le budget » ?",
    answer:
      "Non, pas automatiquement. Cette indication signifie que le budget peut limiter les impressions ; elle ne prouve pas que des clics supplémentaires deviendront des ventes rentables.",
  },
  {
    question: "Doubler le budget donne-t-il deux fois plus de clients ?",
    answer:
      "Non. Le volume de recherches, les enchères, l’offre, la page et le traitement commercial empêchent toute proportion garantie. Toute hausse doit être reliée aux demandes sérieuses, aux ventes et à la marge.",
  },
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
          { label: "Budget Google Ads pour une PME" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous hésitez entre 500, 1 000 ou 2 000 € ? Comparez la dépense estimée par le Planificateur, le plafond si vos objectifs se réalisent et la perte que votre trésorerie accepte."
        heroAction={{ href: "#calculateur", label: "Calculer mon budget test" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Aucun minimum universel",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "3 montants à comparer",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Calcul local sans email",
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
            href: "/guides/prix-gestion-google-ads",
            label: "Prix et honoraires de gestion Google Ads",
          },
          {
            href: "/guides/seo-ou-google-ads",
            label: "SEO ou Google Ads : que lancer en premier ?",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Auditer une campagne Google Ads active",
          },
          {
            href: "/guides/pourquoi-google-ads-ne-convertit-pas",
            label: "Pourquoi les clics ne deviennent pas des clients",
          },
          {
            href: "/services/publicite-en-ligne",
            label: "Accompagnement Google Ads",
          },
        ]}
        faqTitle="Budget Google Ads : les questions des dirigeants"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Vous hésitez entre 500, 1 000 ou 2 000 € pour tester Google Ads ?
          Google n’impose aucune dépense minimale, et aucun de ces montants
          n’est juste par défaut. Le budget utile dépend de votre marge, du
          nombre de demandes sérieuses que vous transformez en clients et du
          coût des clics prévus pour votre offre et votre zone.
        </p>
        <p>
          Il doit aussi rester sous la perte que votre entreprise peut supporter
          si le test ne produit aucune vente. Vous allez séparer l’argent payé à
          Google des honoraires, de la page et du temps passé à répondre, puis
          comparer le coût prévu, ce que vos ventes financent et ce que votre
          trésorerie accepte de perdre.
        </p>
        <p>
          Dans ce guide, une <strong>demande sérieuse</strong> est un contact
          qui correspond à l’offre et peut réellement acheter. Un formulaire
          hors sujet, un appel sans besoin ou un contact impossible à joindre
          n’est pas compté comme une vente en devenir.
        </p>

        <GuideToc
          items={[
            { id: "minimum", label: "1. Aucun montant juste par défaut" },
            { id: "cout-complet", label: "2. Le coût complet du test" },
            { id: "marge", label: "3. La marge d’une vente" },
            { id: "prevision", label: "4. Une prévision locale" },
            { id: "calculateur", label: "5. Les trois montants" },
            { id: "exemple", label: "6. Un exemple complet" },
            { id: "reglage", label: "7. Le budget saisi dans Google" },
            { id: "decision", label: "8. Lancer, réduire ou reporter" },
          ]}
        />

        <h2 id="minimum">1. Aucun montant n’est juste par défaut</h2>
        <p>
          Google précise qu’{" "}
          <a
            href="https://support.google.com/google-ads/answer/6319?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aucune dépense minimale n’est imposée
          </a>
          . Cette liberté technique ne répond pas à la question économique. Un
          budget de 500 € peut être utile dans une zone et trop faible dans une
          autre. À l’inverse, 2 000 € peuvent acheter des clics et rester une
          mauvaise décision si la page ou le suivi commercial ne fonctionne pas.
        </p>
        <InfoBox variant="blue" title="Le périmètre de ce calcul">
          Nous dimensionnons un premier test sur le réseau de recherche Google :
          une offre, une zone et une page. Shopping, YouTube et Performance Max
          demandent d’autres hypothèses. Une prévision n’est jamais une garantie
          de clics, de demandes ou de ventes.
        </InfoBox>

        <h2 id="cout-complet">
          2. Séparez l’argent payé à Google du coût complet
        </h2>
        <p>
          Le montant saisi dans Google Ads n’est qu’une partie du risque.
          Ajoutez tout ce qui coûtera de l’argent ou du temps si aucune vente
          n’arrive :
        </p>
        <ul>
          <li>l’argent facturé par Google ;</li>
          <li>la préparation ou l’amélioration de la page ;</li>
          <li>la mesure des appels, formulaires et ventes ;</li>
          <li>les honoraires de création et de gestion éventuels ;</li>
          <li>
            le temps passé à rappeler, qualifier et relancer les demandes ;
          </li>
          <li>les outils utilisés uniquement pour ce test.</li>
        </ul>
        <FormulaBox>
          Coût complet du test = argent payé à Google + coûts hors Google
        </FormulaBox>
        <p>
          Le guide sur le{" "}
          <Link href="/guides/prix-gestion-google-ads">
            prix de la gestion Google Ads
          </Link>{" "}
          détaille les honoraires et les lignes du devis. Ici, ils sont
          regroupés pour protéger la décision de trésorerie.
        </p>

        <h2 id="marge">3. Calculez ce qu’une vente peut financer</h2>
        <p>
          Ne partez pas du chiffre d’affaires. Partez de la marge laissée après
          les charges variables directement liées à la vente. Bpifrance Création
          définit la{" "}
          <a
            href="https://bpifrance-creation.fr/taux-marge-couts-variables"
            target="_blank"
            rel="noopener noreferrer"
          >
            marge sur coûts variables
          </a>{" "}
          comme la différence entre chiffre d’affaires et charges variables.
          Faites confirmer votre calcul par vos données comptables s’il est
          incertain.
        </p>
        <p>
          Cette marge n’est pas un bénéfice entièrement disponible : elle doit
          encore contribuer aux charges fixes, puis au résultat de l’entreprise.
          Dans le calculateur, la « somme à conserver » représente la part que
          vous refusez d’absorber dans le test : contribution aux charges fixes,
          fiscalité éventuelle, rémunération visée et marge de sécurité.
          Utilisez partout la même base, hors taxes si votre entreprise récupère
          la TVA, ou toutes taxes comprises sinon.
        </p>
        <p>
          Ajoutez votre part de demandes sérieuses qui deviennent des ventes. Un
          formulaire n’est pas une vente. Google distingue les{" "}
          <a
            href="https://support.google.com/google-ads/answer/11459091?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            prospects qualifiés et les prospects convertis
          </a>{" "}
          à partir des informations renvoyées par l’entreprise.
        </p>
        <FormulaBox>
          {`Marge disponible si vos deux objectifs se réalisent
= demandes sérieuses visées × part qui signe × marge par vente

Plafond média conditionnel
= marge si l'objectif est atteint - coûts hors Google - somme à conserver`}
        </FormulaBox>

        <h2 id="prevision">
          4. Estimez les clics de votre offre et de votre zone
        </h2>
        <p>
          Utilisez le Planificateur avec les recherches des prospects, la zone
          servie et la période visée. Google explique que ses{" "}
          <a
            href="https://support.google.com/google-ads/answer/3022575?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            prévisions de mots clés
          </a>{" "}
          tiennent notamment compte des mots, du budget, des enchères, de la
          saisonnalité et de la zone. Exportez la date, les clics et le coût
          estimés ; n’utilisez pas un coût moyen lu dans un article. Les clics,
          la dépense, les demandes visées et les coûts hors Google doivent tous
          couvrir la même offre, la même zone et la même période.
        </p>
        <p>
          Si la prévision achète trop peu de clics pour examiner les demandes
          visées, réduisez la question : une offre, une zone plus resserrée ou
          un premier résultat. Ne baissez pas seulement la dépense tout en
          conservant le volume de clics initial dans vos calculs.
        </p>

        <h2 id="calculateur">5. Comparez les trois montants</h2>
        <p>
          Le premier vient de Google. Le deuxième vient de votre marge. Le
          troisième vient de la trésorerie : la perte totale acceptée si aucune
          vente n’arrive. Le coût prévu doit rester sous les deux plafonds
          internes.
        </p>
        <GoogleAdsBudgetCalculator />
        <p>
          Le calculateur fonctionne dans votre navigateur et n’envoie aucune
          donnée. Il ne produit pas une prévision statistique : il vérifie la
          cohérence des hypothèses saisies. Testez un scénario prudent et un
          scénario central plutôt que seulement celui qui autorise la dépense.
          Le plafond tiré de la marge n’existe que si le nombre de demandes et
          le taux de signature se réalisent ; le taux clic vers demande affiché
          reste à démontrer.
        </p>
        <p>
          Même si le scénario paraît compatible, Google n’attend pas vos ventes
          pour facturer les clics. L’entreprise doit pouvoir avancer le coût
          complet du test et supporter le cas sans vente jusqu’à la fin du cycle
          commercial.
        </p>

        <h2 id="exemple">6. Exemple fictif : vérifier jusqu’au pire cas</h2>
        <p>
          <strong>
            Exemple fictif, qui ne décrit ni un client ni un résultat obtenu par
            Hagnéré Code.
          </strong>{" "}
          Une PME estime qu’une vente laisse 1 500 € de marge et qu’une demande
          sérieuse sur quatre signe. Elle vise huit demandes. Sa page, la
          mesure, la gestion et le temps commercial représentent 900 €. Elle
          veut conserver 300 € et accepte une perte maximale de 3 000 €. Sa
          prévision fictive indique 300 clics pour 1 800 €.
        </p>
        <FormulaBox>
          {`Ventes si l'objectif de demandes est atteint = 8 × 25 % = 2
Marge si les deux objectifs se réalisent = 2 × 1 500 € = 3 000 €
Plafond média conditionnel = 3 000 - 900 - 300 = 1 800 €
Budget compatible avec le risque = 3 000 - 900 = 2 100 €
Coût prévu par clic = 1 800 / 300 = 6 €
Part minimale clic → demande = 8 / 300 = 2,67 %
Coût complet = 1 800 + 900 = 2 700 €`}
        </FormulaBox>
        <p>
          Si l’objectif de huit demandes et le taux de signature de 25 % se
          réalisent, le contrôle inverse retrouve 300 € après les coûts. Sans
          vente, la perte atteint 2 700 €, sous la limite de 3 000 €. Le
          scénario est donc financièrement compatible avec ces hypothèses, pas
          validé par avance. Une dépense plus chère ou une transformation plus
          faible impose de réduire la portée ou de revoir l’économie du projet.
        </p>

        <h2 id="reglage">7. Sachez ce que Google peut facturer</h2>
        <p>
          Le budget quotidien est une moyenne. Pour la plupart des campagnes,
          Google indique une limite journalière égale à deux fois ce budget et
          une limite mensuelle égale à 30,4 fois ce budget. La{" "}
          <a
            href="https://support.google.com/google-ads/answer/10486536?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            présentation officielle des budgets
          </a>{" "}
          précise que les dépenses peuvent varier d’un jour à l’autre.
        </p>
        <p>
          Google propose aussi un{" "}
          <a
            href="https://support.google.com/google-ads/answer/10486938?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            budget total pour certaines nouvelles campagnes
          </a>{" "}
          datées. Son type ne peut plus être changé et il n’existe pas de
          plafond journalier, même si la facturation ne dépasse pas le total.
          Vérifiez les conditions actuelles dans l’interface.
        </p>
        <p>
          Si votre test possède des dates fixes et que l’option est disponible,
          le budget total borne plus simplement sa dépense média. Sinon,
          convertissez prudemment votre plafond en budget quotidien moyen sur la
          même période ; ne saisissez jamais le total du test comme budget de
          chaque jour.
        </p>
        <InfoBox
          variant="amber"
          title="« Limitée par le budget » ne veut pas dire rentable"
        >
          Le{" "}
          <a
            href="https://support.google.com/google-ads/answer/25426?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            budget recommandé par Google
          </a>{" "}
          vise notamment à éviter de perdre des impressions. Il ne connaît pas à
          lui seul votre marge, vos demandes sérieuses ni vos ventes.
          N’augmentez pas automatiquement.
        </InfoBox>
        <p>
          Enfin, ne jugez pas les derniers jours comme s’ils étaient définitifs
          : Google précise que les{" "}
          <a
            href="https://support.google.com/google-ads/answer/6239119?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            conversions récentes peuvent apparaître avec un délai
          </a>
          . Attendez le délai propre à votre cycle de vente, sans prolonger une
          campagne dont la page, la mesure ou le traitement des contacts sont
          défaillants.
        </p>

        <h2 id="decision">8. Lancez, réduisez, préparez ou reportez</h2>
        <ul>
          <li>
            <strong>Lancez le test limité</strong> si les prévisions sont
            documentées, les deux plafonds respectés et les ventes suivies.
          </li>
          <li>
            <strong>Réduisez la portée</strong> si le coût prévu dépasse ce que
            la marge finance : une offre ou une zone, pas seulement un budget
            amputé.
          </li>
          <li>
            <strong>Préparez avant de dépenser</strong> si l’offre, la page, la
            mesure, la marge ou la personne qui rappelle manque.
          </li>
          <li>
            <strong>Reportez</strong> si la trésorerie exige une vente certaine,
            si aucune perte n’est acceptable ou si vous ne distinguez pas
            formulaire, demande sérieuse et client.
          </li>
        </ul>
        <p>
          Si la campagne dépense déjà sans ventes identifiables, utilisez{" "}
          <Link href="/guides/pourquoi-google-ads-ne-convertit-pas">
            pourquoi Google Ads ne convertit pas
          </Link>
          . Si le choix entre contenu et publicité reste ouvert, commencez par{" "}
          <Link href="/guides/seo-ou-google-ads">SEO ou Google Ads</Link>.
        </p>
        <GuideInlineCTA
          title="Faire vérifier si mon test est chiffrable"
          description="Décrivez l’offre, la zone, la marge par vente, le cycle commercial, la page et la perte maximale acceptable. Hagnéré Code distingue les hypothèses utilisables de celles qui restent à vérifier. La conclusion peut être de préparer davantage le test ou de le reporter ; vous restez libre de ne lancer aucune prestation."
          tags={[
            "Hypothèses visibles",
            "Aucune vente garantie",
            "Option de reporter",
          ]}
          ctaLabel="Décrire mon projet Google Ads"
          ctaHref="/demarrer-un-projet"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
