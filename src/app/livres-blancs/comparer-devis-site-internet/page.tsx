import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileDown, Table2 } from "lucide-react";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { TrackedDownloadLink } from "@/components/resources/TrackedDownloadLink";
import { QuoteComparisonWorkbench } from "@/components/white-papers/QuoteComparisonWorkbench";
import { QUOTE_CRITERIA } from "@/lib/quote-comparison";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import {
  QUOTE_COMPARISON_WHITE_PAPER as whitePaper,
  whitePaperUrl,
} from "@/lib/white-papers";

export const metadata: Metadata = {
  title: whitePaper.title,
  description: whitePaper.description,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: whitePaper.path },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: whitePaper.cardTitle,
    description: whitePaper.description,
    url: whitePaper.path,
    publishedTime: `${whitePaper.datePublished}T09:00:00+02:00`,
    modifiedTime: `${whitePaper.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
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

const faqItems = [
  {
    question: "Comment comparer deux ou trois devis de site internet ?",
    answer:
      "Commencez par rendre le périmètre comparable : ajoutez à chaque offre le coût des éléments nécessaires qu'elle exclut. Calculez ensuite le coût total sur 36 mois, puis éliminez les offres qui échouent sur un critère indispensable comme la propriété des comptes, la migration SEO ou la réversibilité. Ne classez au score que les offres encore éligibles.",
  },
  {
    question: "Pourquoi comparer les devis web sur trois ans ?",
    answer:
      "Le prix de lancement ne montre ni l'hébergement, ni les licences, ni la maintenance, ni le temps interne, ni la sortie. Trois ans constituent un horizon assez long pour faire apparaître ces écarts, tout en restant suffisamment proche pour utiliser des hypothèses documentées plutôt qu'une projection spéculative.",
  },
  {
    question: "Que signifie TCO dans un devis web ?",
    answer:
      "TCO signifie coût total de possession. Dans cette grille, il additionne la création, les options nécessaires, les coûts récurrents des années 1 à 3, le temps interne valorisé, la réversibilité et une provision calculée pour les risques identifiés. Il ne mesure pas à lui seul la qualité de l'offre.",
  },
  {
    question: "Faut-il comparer les prix HT ou TTC ?",
    answer:
      "Utilisez une seule base pour toutes les offres. Une entreprise qui récupère intégralement la TVA compare généralement les montants HT ; une structure qui ne la récupère pas doit raisonner en coût réellement supporté. En cas de doute, validez le traitement avec votre comptable.",
  },
  {
    question: "Comment noter une agence web dans la grille ?",
    answer:
      "Pour chaque critère, attribuez 0 si le sujet est absent, 1 s'il est seulement affirmé, 2 s'il est décrit et 3 s'il est décrit avec une preuve ou un livrable vérifiable. Ajoutez le lien, la clause ou le document qui justifie la note. Un critère éliminatoire ne doit jamais être compensé par une bonne moyenne ailleurs.",
  },
  {
    question: "Quel devis choisir si le moins cher a le meilleur TCO ?",
    answer:
      "Vérifiez d'abord qu'il passe tous les critères éliminatoires et atteint votre seuil de couverture. Le TCO sert à départager les offres éligibles, pas à rendre acceptable une offre incomplète. Une offre plus chère peut rester rationnelle si la différence achète des livrables ou un niveau de service que vous valorisez réellement.",
  },
  {
    question: "Comment utiliser la grille dans Excel ou Google Sheets ?",
    answer:
      "Modifiez l'exemple sur cette page, cliquez sur Copier pour Excel / Sheets, ouvrez un classeur vide, sélectionnez la cellule A1 puis collez. Les postes, les trois offres et les formules sont transférés. Copiez ensuite la checklist de 40 critères dans un second onglet.",
  },
  {
    question: "La grille remplace-t-elle un cahier des charges ou un contrat ?",
    answer:
      "Non. Elle aide à comparer et à documenter une décision. Le cahier des charges rend le besoin commun aux candidats ; le devis et le contrat fixent les engagements, l'ordre de priorité des documents, les responsabilités et la procédure de changement. Pour une clause sensible, demandez un conseil adapté.",
  },
];

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: whitePaper.cardTitle,
  description: whitePaper.description,
  url: whitePaperUrl(whitePaper),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": whitePaperUrl(whitePaper),
  },
  image: [`${whitePaperUrl(whitePaper)}/opengraph-image`],
  datePublished: whitePaper.datePublished,
  dateModified: whitePaper.dateModified,
  inLanguage: "fr-FR",
  articleSection: "Livres blancs",
  isAccessibleForFree: true,
  about: [
    "Comparaison de devis web",
    "Coût total de possession",
    "Consultation d'agence web",
    "Budget de site internet",
  ],
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: `${SITE_URL}/equipe`,
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo-dark.png`,
    },
  },
  hasPart: {
    "@type": "DigitalDocument",
    name: "Livre blanc PDF — comparer des devis de site internet sur trois ans",
    encodingFormat: "application/pdf",
    contentUrl: `${SITE_URL}${whitePaper.pdf.href}`,
    isAccessibleForFree: true,
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ressources",
      item: `${SITE_URL}/ressources`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Livres blancs",
      item: `${SITE_URL}/livres-blancs`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Comparer des devis de site internet",
      item: whitePaperUrl(whitePaper),
    },
  ],
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

const categorySummary = [
  ["Périmètre", "24 %", "Ce qui sera réellement conçu, livré et testé"],
  ["Contenus", "6 %", "Qui produit, migre et valide les contenus"],
  ["SEO et données", "14 %", "URL, redirections, mesure et consentement"],
  ["Design", "10 %", "Écrans, états, accessibilité et composants"],
  ["Technique", "13 %", "Hébergement, performance, sécurité et sauvegardes"],
  ["Gouvernance", "9 %", "Jalons, livrables, rôles et changements"],
  ["Exploitation", "10 %", "Maintenance, évolutions, SLA et récurrents"],
  [
    "Propriété et sortie",
    "14 %",
    "Code, comptes, licences, données et réversibilité",
  ],
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />

      <GuideLayout
        breadcrumbs={[
          { label: "Ressources", href: "/ressources" },
          { label: "Livres blancs", href: "/livres-blancs" },
          { label: "Comparer des devis web" },
        ]}
        heroTitle="Comparer trois devis de site internet sur trois ans"
        heroDescription="Une grille qui rend les offres comparables avant de les noter : coût total sur 36 mois, 40 critères pondérés, critères éliminatoires et exemple fictif entièrement rempli."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel="Publié le 19 juillet 2026"
        keyPoints={[
          {
            number: "01",
            title: "3 offres · 36 mois",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "40 critères pondérés",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Excel / Google Sheets",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Exemple rempli",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte de site",
          },
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Modèle de cahier des charges",
          },
          {
            href: "/guides/choisir-son-agence-web",
            label: "Comment choisir son agence web",
          },
          { href: "/tarifs", label: "Tarifs Hagnéré Code" },
        ]}
        faqTitle="Comparer des devis web : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Trois devis peuvent afficher{" "}
          <strong>8 900 €, 17 900 € et 24 800 €</strong>
          sans acheter la même chose. Le premier peut exclure la migration SEO,
          facturer l&apos;hébergement chaque année et vous laisser produire tous
          les contenus ; le troisième peut inclure ces postes, les accès, la
          maintenance et la sortie. Comparer uniquement les totaux de la
          première page revient à choisir trois véhicules en regardant leur
          acompte.
        </p>

        <section
          id="telecharger"
          aria-labelledby="telecharger-title"
          className="not-prose my-8 overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5 shadow-sm sm:p-7 dark:border-violet-900/70 dark:from-violet-950/40 dark:via-zinc-950 dark:to-blue-950/30"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Gratuit · sans email
                </span>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-700">
                  PDF + grille copiable
                </span>
              </div>
              <h2
                id="telecharger-title"
                className="m-0 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl dark:text-white"
              >
                Le livre blanc à garder pendant votre consultation
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Le PDF reprend la méthode, les formules, l&apos;exemple chiffré,
                les questions à poser et les 40 critères. La grille interactive
                reste disponible juste dessous pour recalculer vos propres
                offres.
              </p>
            </div>
            <TrackedDownloadLink
              href={whitePaper.pdf.href}
              downloadName={whitePaper.pdf.downloadName}
              resourceId="comparaison_devis_web_3_ans"
              guideSlug={whitePaper.slug}
              fileId="livre_blanc_pdf"
              format="pdf"
              placement="white_paper_top"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 sm:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <FileDown className="size-4" aria-hidden="true" />
              Télécharger le PDF
              <span className="text-xs font-normal opacity-70">
                {whitePaper.pdf.sizeLabel}
              </span>
            </TrackedDownloadLink>
          </div>
          <ul className="mt-5 grid gap-2 text-xs text-zinc-600 sm:grid-cols-3 dark:text-zinc-400">
            {[
              "Aucune donnée demandée",
              "Exemple explicitement fictif",
              "Utilisable avec n'importe quel prestataire",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 size-3.5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La méthode en une minute" },
            {
              id: "pourquoi-36-mois",
              label: "2. Pourquoi raisonner sur 36 mois",
            },
            {
              id: "normaliser",
              label: "3. Normaliser les offres avant de calculer",
            },
            { id: "formule", label: "4. La formule du coût total" },
            { id: "grille", label: "5. La grille interactive Excel / Sheets" },
            {
              id: "exemple",
              label: "6. Exemple rempli : trois offres fictives",
            },
            { id: "noter", label: "7. Éliminer d'abord, noter ensuite" },
            { id: "criteres", label: "8. Les 40 critères et leur pondération" },
            {
              id: "couts-oublies",
              label: "9. Les coûts presque toujours oubliés",
            },
            {
              id: "questions",
              label: "10. Les 15 questions à renvoyer aux candidats",
            },
            {
              id: "methode-90",
              label: "11. Comparer trois devis en 90 minutes",
            },
            { id: "decision", label: "12. Rédiger une décision défendable" },
          ]}
        />

        <h2 id="reponse-rapide">1. La méthode en une minute</h2>
        <ol>
          <li>
            <strong>Écrivez votre socle commun.</strong> Même objectif, mêmes
            pages, mêmes fonctions, mêmes obligations de migration et de
            recette.
          </li>
          <li>
            <strong>Ajoutez à chaque devis ce qu&apos;il exclut.</strong> Une
            option indispensable n&apos;est pas une option dans votre
            comparaison.
          </li>
          <li>
            <strong>Calculez le coût sur 36 mois.</strong> Création, récurrents,
            temps interne, risques identifiés et sortie.
          </li>
          <li>
            <strong>Éliminez les offres non recevables.</strong> Un dépôt de
            code absent ou aucune stratégie de redirections ne se compense pas
            avec une jolie maquette.
          </li>
          <li>
            <strong>Notez les offres restantes avec des preuves.</strong> Une
            promesse vaut 1 ; une clause, un livrable ou une démonstration vaut
            davantage.
          </li>
          <li>
            <strong>Décidez par écart utile.</strong> Demandez ce que les 3 820
            € supplémentaires achètent réellement, pas quelle offre semble la
            plus rassurante.
          </li>
        </ol>

        <InfoBox
          variant="amber"
          title="La règle qui évite les faux bons classements"
        >
          Ne faites jamais une moyenne entre le prix et les risques. Commencez
          par un filtre d&apos;éligibilité : les offres qui échouent sur un
          point indispensable sortent du classement. Comparez ensuite le coût et
          la qualité des seules offres recevables.
        </InfoBox>

        <h2 id="pourquoi-36-mois">2. Pourquoi raisonner sur 36 mois</h2>
        <p>
          Un horizon d&apos;un an favorise artificiellement les offres par
          abonnement : la mise de départ est faible, mais le socle récurrent
          n&apos;a pas encore eu le temps de peser. Un horizon de cinq ans donne
          une fausse impression de précision : l&apos;activité, le contenu, les
          volumes et les technologies auront probablement changé.{" "}
          <strong>Trois ans est un compromis de décision</strong>, pas une loi
          comptable : assez long pour voir les licences, la maintenance et la
          réversibilité ; assez court pour documenter les hypothèses.
        </p>
        <p>
          Gardez toutes les offres sur la même base fiscale. Si votre structure
          récupère la TVA, comparez généralement les montants HT ; sinon
          utilisez le coût réellement supporté. La grille n&apos;est pas un avis
          comptable : elle impose seulement une base cohérente.
        </p>

        <GuideTable
          headers={["Horizon", "Ce qu'il montre", "Ce qu'il masque"]}
          rows={[
            [
              "Prix de lancement",
              "L'acompte et le budget initial",
              "Récurrents, travail interne, sortie et risques",
            ],
            [
              "12 mois",
              "Le cash de la première année",
              "L'effet cumulé des abonnements et de l'indexation",
            ],
            [
              "36 mois",
              "Le coût d'usage et les écarts structurels",
              "Les transformations lointaines du besoin",
            ],
            [
              "60 mois",
              "Une trajectoire de long terme",
              "Une précision souvent fictive sur les volumes et évolutions",
            ],
          ]}
        />

        <h2 id="normaliser">3. Normaliser les offres avant de calculer</h2>
        <p>
          Une comparaison est invalide si les colonnes ne décrivent pas le même
          produit. Construisez d&apos;abord un{" "}
          <strong>périmètre de référence</strong> à partir du besoin, puis
          marquez chaque poste comme inclus, exclu, optionnel ou indéterminé.
          Une exclusion nécessaire est ajoutée au coût de l&apos;offre ; un
          point indéterminé déclenche une question écrite au candidat.
        </p>
        <GuideTable
          headers={[
            "Poste",
            "Offre A",
            "Offre B",
            "Offre C",
            "Ajustement de comparaison",
          ]}
          rows={[
            [
              "Migration de 120 pages",
              "Exclue",
              "Incluse",
              "Incluse",
              "Ajouter un prix documenté à A",
            ],
            [
              "Plan de redirections",
              "Non précisé",
              "Inclus + recette",
              "Inclus",
              "Question écrite à A et preuve à C",
            ],
            [
              "Rédaction des contenus",
              "Client",
              "Client + 6 pages agence",
              "Agence, 20 pages",
              "Valoriser le temps interne restant",
            ],
            [
              "Hébergement",
              "390 €/mois",
              "90 €/mois",
              "Inclus 12 mois",
              "Projeter chaque contrat sur 36 mois",
            ],
            [
              "Code et comptes",
              "Licence d'usage",
              "Dépôt client",
              "Dépôt client",
              "A peut devenir éliminatoire selon votre besoin",
            ],
          ]}
        />
        <p>
          Si les candidats ont reçu des briefs différents, revenez un cran en
          arrière. Le{" "}
          <Link href="/guides/cahier-des-charges-site-internet">
            modèle de cahier des charges de site internet
          </Link>{" "}
          sert précisément à créer ce socle commun.
        </p>

        <h2 id="formule">4. La formule du coût total</h2>
        <p>
          La formule doit rester assez simple pour être auditée en réunion.
          Chaque terme renvoie à une ligne visible ; aucun multiplicateur caché
          ne doit vivre dans une cellule impossible à expliquer.
        </p>
        <FormulaBox>{`TCO 36 mois =
  création et lancement
+ options nécessaires exclues du prix affiché
+ coûts récurrents année 1 + année 2 + année 3
+ heures internes × coût horaire interne
+ coût de réversibilité / sortie
+ somme(probabilité d'un risque × impact financier)
- remises et crédits certains`}</FormulaBox>
        <p>
          La provision de risques n&apos;est pas « 10 % au cas où ». Écrivez un
          risque concret : par exemple, 30 % de probabilité de devoir reprendre
          40 pages à 60 € donne une provision de 720 €. Si vous ne pouvez pas
          écrire le risque, ne cachez pas une intuition dans le calcul :
          notez-la séparément.
        </p>

        <h2 id="grille">5. La grille interactive Excel / Sheets</h2>
        <p>
          L&apos;outil ci-dessous fonctionne sans compte et ne transmet aucun
          montant. Remplacez l&apos;exemple par vos chiffres, puis copiez la
          grille dans Excel ou Google Sheets. Les formules restent visibles pour
          que votre direction, vos achats ou votre associé puissent les
          contrôler.
        </p>
        <QuoteComparisonWorkbench />

        <h2 id="exemple">6. Exemple rempli : trois offres fictives</h2>
        <p>
          L&apos;exemple concerne une PME B2B qui remplace un site de 120 URL
          par un site de génération de demandes, avec migration SEO, CMS,
          connexion CRM, analytics, formation et maintenance. Les noms et
          montants sont fictifs : ils servent à expliquer la méthode, pas à
          publier une moyenne de marché.
        </p>
        <GuideTable
          headers={[
            "Poste sur 36 mois",
            "Offre A · abonnement",
            "Offre B · forfait",
            "Offre C · premium",
          ]}
          rows={[
            ["Création", "8 900 €", "17 900 €", "24 800 €"],
            ["Options nécessaires", "3 600 €", "900 €", "0 €"],
            ["Récurrents cumulés", "14 940 €", "6 840 €", "5 700 €"],
            ["Temps interne valorisé", "2 640 €", "1 540 €", "1 100 €"],
            ["Sortie / réversibilité", "2 500 €", "800 €", "500 €"],
            ["Risques identifiés", "1 800 €", "900 €", "600 €"],
            [
              "TCO 36 mois",
              {
                text: "34 380 €",
                className: "font-bold text-amber-700 dark:text-amber-300",
              },
              {
                text: "28 880 €",
                className: "font-bold text-emerald-700 dark:text-emerald-300",
              },
              "32 700 €",
            ],
          ]}
        />
        <p>
          L&apos;offre A est la moins chère au lancement, mais devient la plus
          coûteuse :<strong> 5 500 € de plus que B</strong> sur trois ans.
          L&apos;offre C coûte 3 820 € de plus que B. La bonne question
          n&apos;est donc pas « C est-elle trop chère ? », mais « les livrables
          supplémentaires de C valent-ils 3 820 € pour ce projet précis ? ».
        </p>
        <InfoBox
          variant="blue"
          title="Ce que l'exemple ne décide pas à votre place"
        >
          Le calcul classe les coûts, pas les offres. Dans notre exemple, A
          échoue aussi sur des critères de propriété et de migration. B et C
          passent le filtre ; B gagne sur le rapport couverture/coût, tandis que
          C peut rester rationnelle si son niveau de design,
          d&apos;accompagnement ou de service est réellement nécessaire.
        </InfoBox>

        <GuideInlineCTA
          title="Vous avez déjà deux ou trois devis ?"
          description="Envoyez le périmètre et les offres : nous vous dirons où les colonnes ne sont pas comparables, y compris si notre propre proposition n'est pas la meilleure option."
          tags={[
            "Lecture contradictoire",
            "Pas de score magique",
            "Réponse humaine",
          ]}
          ctaLabel="Faire relire mes devis"
          ctaHref="/demarrer-un-projet?source=livre-blanc-comparaison-devis"
        />

        <h2 id="noter">7. Éliminer d&apos;abord, noter ensuite</h2>
        <p>
          Une note moyenne peut masquer une défaillance critique. Une offre peut
          obtenir 92/100 grâce au design et à la méthode, tout en vous laissant
          sans accès au nom de domaine ou sans possibilité d&apos;exporter vos
          données. La grille utilise donc deux étages.
        </p>
        <h3>Étape A — les critères éliminatoires</h3>
        <ul>
          <li>
            le périmètre indispensable n&apos;est pas chiffré ou reste ambigu ;
          </li>
          <li>les comptes critiques ne sont pas créés au nom du client ;</li>
          <li>
            le sort du code, des maquettes, des contenus ou des licences est
            flou ;
          </li>
          <li>
            aucune exportation exploitable des données et contenus n&apos;est
            prévue ;
          </li>
          <li>
            la migration des URL et la recette SEO sont absentes lors d&apos;une
            refonte ;
          </li>
          <li>
            la recette, les sauvegardes ou la restauration ne produisent aucune
            preuve ;
          </li>
          <li>
            la procédure de changement autorise un prix ou un délai indéterminé
            ;
          </li>
          <li>
            un sous-traitant essentiel reste non identifié malgré vos
            contraintes.
          </li>
        </ul>
        <h3>Étape B — le score pondéré</h3>
        <p>
          Pour chaque critère, notez{" "}
          <strong>
            0 = absent, 1 = affirmé, 2 = décrit, 3 = décrit et prouvé
          </strong>
          . Le score ne récompense donc pas la longueur du devis, mais sa
          capacité à rendre une promesse vérifiable. Conservez la preuve dans la
          colonne voisine : page du devis, annexe, démonstration, dépôt, clause
          ou exemple de livrable.
        </p>
        <FormulaBox>{`Score pondéré = somme(note / 3 × poids)

Seuil de travail conseillé :
- offre éliminée si un critère indispensable échoue ;
- offre à clarifier si score < 75 / 100 ;
- comparaison finale uniquement entre les offres recevables.`}</FormulaBox>

        <h2 id="criteres">8. Les 40 critères et leur pondération</h2>
        <p>
          Les poids proposés totalisent 100 %. Ils correspondent à un site
          public de PME orienté acquisition ; adaptez-les avant d&apos;ouvrir
          les devis. Un e-commerce donnera davantage de poids aux paiements et à
          l&apos;exploitation ; une plateforme métier renforcera les données, la
          sécurité et la continuité.
        </p>
        <GuideTable
          headers={[
            "Famille",
            "Poids proposé",
            "Ce que vous cherchez à prouver",
          ]}
          rows={categorySummary}
        />
        <p>
          La checklist copiable contient les {QUOTE_CRITERIA.length} lignes
          détaillées. Le poids le plus élevé revient au périmètre : si l&apos;on
          ne sait pas ce qui est livré, tous les autres calculs deviennent
          fragiles. La propriété et la sortie pèsent 14 %, car leur coût
          apparaît souvent seulement le jour où la relation se termine.
        </p>

        <h2 id="couts-oublies">9. Les coûts presque toujours oubliés</h2>
        <GuideTable
          headers={[
            "Coût",
            "Comment le repérer",
            "Comment le mettre dans la grille",
          ]}
          rows={[
            [
              "Production des contenus",
              "Le devis dit « contenus fournis par le client »",
              "Heures internes ou prestation externe réaliste",
            ],
            [
              "Migration des pages",
              "Le nombre d'URL ou d'articles n'est pas chiffré",
              "Quantité × coût unitaire + recette",
            ],
            [
              "SEO de refonte",
              "Aucun inventaire ni plan de redirections",
              "Forfait de migration nécessaire à périmètre égal",
            ],
            [
              "Licences et extensions",
              "Prix affiché hors renouvellement ou par utilisateur",
              "Prix exact par année et hypothèse de volume",
            ],
            [
              "Maintenance",
              "Le correctif et l'évolution sont mélangés",
              "Séparer couverture, jours inclus et hors-forfait",
            ],
            [
              "Coordination client",
              "Réunions, arbitrages et recette non valorisés",
              "Heures internes × coût chargé",
            ],
            [
              "Croissance du trafic",
              "Hébergement valable seulement jusqu'à un seuil",
              "Scénario documenté, pas un chiffre inventé",
            ],
            [
              "Sortie",
              "Exports, accès et documentation absents",
              "Coût de réversibilité ou critère éliminatoire",
            ],
          ]}
        />
        <p>
          Pour des fourchettes détaillées, utilisez en complément nos guides sur
          le
          <Link href="/guides/combien-coute-un-site-internet">
            {" "}
            coût d&apos;un site internet
          </Link>
          , le{" "}
          <Link href="/guides/prix-site-vitrine">
            prix d&apos;un site vitrine
          </Link>{" "}
          et le{" "}
          <Link href="/guides/prix-refonte-site-internet">
            prix d&apos;une refonte
          </Link>
          . Les fourchettes servent à challenger une ligne, pas à remplacer le
          chiffrage de votre périmètre.
        </p>

        <h2 id="questions">10. Les 15 questions à renvoyer aux candidats</h2>
        <ol>
          <li>
            Quel document fait foi si le devis et l&apos;annexe se contredisent
            ?
          </li>
          <li>
            Quelles lignes de notre périmètre ne sont pas incluses dans votre
            prix ?
          </li>
          <li>Quelles hypothèses de quantité avez-vous utilisées ?</li>
          <li>Quels livrables recevons-nous à chaque jalon ?</li>
          <li>Quels critères déclenchent l&apos;acceptation de la recette ?</li>
          <li>Qui produit, intègre et valide chaque famille de contenu ?</li>
          <li>
            Comment les anciennes URL seront-elles inventoriées, redirigées et
            testées ?
          </li>
          <li>
            Quels comptes seront créés directement au nom de notre entreprise ?
          </li>
          <li>
            Où sera hébergé le dépôt de code et quand y aurons-nous accès ?
          </li>
          <li>
            Quelles briques restent sous licence et lesquelles nous sont cédées
            ?
          </li>
          <li>
            Quels coûts récurrents sont obligatoires, indexés ou liés au volume
            ?
          </li>
          <li>Que couvre précisément la maintenance corrective ?</li>
          <li>
            Comment une demande hors périmètre modifie-t-elle prix et calendrier
            ?
          </li>
          <li>
            Comment récupérons-nous contenus, données, code, comptes et
            documentation ?
          </li>
          <li>
            Quel risque important voyez-vous dans notre projet et comment le
            réduisez-vous ?
          </li>
        </ol>
        <p>
          Envoyez la même liste aux trois candidats et exigez une réponse
          écrite. Le but n&apos;est pas de piéger : un bon prestataire doit
          pouvoir répondre « inconnu à ce stade », puis expliquer quand et
          comment l&apos;inconnu sera levé.
        </p>

        <h2 id="methode-90">11. Comparer trois devis en 90 minutes</h2>
        <GuideTable
          headers={["Temps", "Action", "Sortie attendue"]}
          rows={[
            [
              "0–15 min",
              "Relire le périmètre commun et marquer les critères indispensables",
              "Une liste courte d'éléments non négociables",
            ],
            [
              "15–35 min",
              "Normaliser inclusions, exclusions, options et quantités",
              "Trois colonnes qui décrivent enfin le même résultat",
            ],
            [
              "35–50 min",
              "Saisir les neuf postes du TCO 36 mois",
              "Un coût total vérifiable et ses hypothèses",
            ],
            [
              "50–65 min",
              "Appliquer les critères éliminatoires",
              "Les offres recevables et les questions bloquantes",
            ],
            [
              "65–80 min",
              "Noter les preuves sur les critères les plus lourds",
              "Un score provisoire avec liens vers les pièces",
            ],
            [
              "80–90 min",
              "Écrire les écarts et préparer le même mail aux candidats",
              "Une décision provisoire, pas une impression",
            ],
          ]}
        />
        <InfoBox
          variant="emerald"
          title="N'essayez pas de tout noter le premier soir"
        >
          Si une information manque, écrivez « à confirmer » et envoyez la
          question. La qualité de la réponse fait partie de l&apos;évaluation :
          délai, précision, capacité à reconnaître une inconnue et proposition
          de preuve.
        </InfoBox>

        <h2 id="decision">12. Rédiger une décision défendable</h2>
        <p>
          La synthèse finale tient sur une page. Elle doit permettre à une
          personne absente de comprendre pourquoi une offre a été rejetée et ce
          que le surcoût d&apos;une autre achète. Utilisez cette structure :
        </p>
        <ol>
          <li>
            <strong>besoin et horizon :</strong> résultat attendu, 36 mois, base
            HT ou TTC ;
          </li>
          <li>
            <strong>offres recevables :</strong> critères éliminatoires et
            clarifications obtenues ;
          </li>
          <li>
            <strong>TCO :</strong> total, trois principaux écarts et hypothèses
            ;
          </li>
          <li>
            <strong>couverture :</strong> score pondéré et preuves importantes ;
          </li>
          <li>
            <strong>risques :</strong> propriétaire, plan de réduction et
            provision éventuelle ;
          </li>
          <li>
            <strong>recommandation :</strong> offre choisie et valeur achetée
            par rapport à l&apos;alternative.
          </li>
        </ol>
        <p>
          Archivez la version des devis, les réponses écrites et la grille
          utilisée. Si le périmètre évolue avant signature, mettez à jour la
          comparaison : une décision traçable n&apos;est pas une capture
          d&apos;écran figée, mais une suite d&apos;hypothèses datées.
        </p>

        <div className="not-prose my-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-7 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300">
              <Table2 className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                Votre prochaine étape
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Copiez la grille, renvoyez les mêmes questions aux candidats,
                puis faites relire les écarts avant de négocier. Si vous
                souhaitez une lecture contradictoire, partagez vos devis après
                avoir retiré les données que vous ne voulez pas transmettre.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href="#grille"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Revenir à la grille{" "}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <Link
                  href="/demarrer-un-projet?source=livre-blanc-comparaison-devis"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-white dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-950"
                >
                  Faire relire mes devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </GuideLayout>
    </GuidesShell>
  );
}
