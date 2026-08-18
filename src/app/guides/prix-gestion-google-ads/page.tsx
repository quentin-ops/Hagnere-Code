import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GoogleAdsManagementCostPlanner } from "@/components/guides/GoogleAdsManagementCostPlanner";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("prix-gestion-google-ads");

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
        url: `${guideUrl(guide)}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Combien coûte Google Ads : budget publicitaire, gestion et frais de lancement",
      },
    ],
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [`${guideUrl(guide)}/opengraph-image`],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  about: [
    { "@type": "Thing", name: "Google Ads" },
    { "@type": "Thing", name: "Budget publicitaire" },
    { "@type": "Thing", name: "Coût d’acquisition client" },
    { "@type": "Thing", name: "Gestion de campagnes publicitaires" },
  ],
  isPartOf: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/guides`,
    name: "Guides web Hagnéré Code",
  },
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
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Prix de gestion Google Ads",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte la gestion de Google Ads par mois ?",
    answer:
      "Il n’existe pas de moyenne française publique assez homogène. Dans cinq offres commerciales revérifiées le 27 juillet 2026, les prix d’entrée affichés vont d’environ 90 € à 450 € HT par mois, mais les campagnes, la cadence et les services inclus diffèrent. Ce relevé daté n’est donc pas une fourchette de marché.",
  },
  {
    question: "Les honoraires d’agence incluent-ils le budget versé à Google ?",
    answer:
      "Pas nécessairement. Demandez une ligne pour le budget média, une pour les surcharges Google et une pour les honoraires. L’entreprise doit conserver l’accès à son compte publicitaire et à sa facturation.",
  },
  {
    question: "Forfait fixe ou pourcentage du budget média : que choisir ?",
    answer:
      "Le forfait donne un prix prévisible ; le pourcentage augmente avec votre dépense. Calculez les deux formules avec votre vrai budget, puis comparez surtout le travail inclus et la fréquence de suivi.",
  },
  {
    question: "Quel budget Google Ads minimum faut-il prévoir ?",
    answer:
      "Il n’existe pas de minimum universel. Le bon budget dépend du prix des clics, du nombre de prospects nécessaire, de votre marge et des honoraires. Si le test est trop petit pour apprendre quoi que ce soit, mieux vaut le reporter ou commencer par un audit.",
  },
  {
    question: "Qui doit être propriétaire du compte Google Ads ?",
    answer:
      "Votre entreprise doit conserver un accès administrateur. Le prestataire peut être associé au compte puis retiré sans vous faire perdre l’historique des campagnes.",
  },
  {
    question:
      "Le suivi des demandes et la page de destination sont-ils inclus ?",
    answer:
      "Cela dépend du devis. Demandez noir sur blanc si le suivi des demandes, le retour des ventes et la création ou l’amélioration des pages sont compris. Le mot « optimisation » seul ne suffit pas.",
  },
  {
    question:
      "Une agence peut-elle garantir une rentabilité ou un nombre de prospects ?",
    answer:
      "Une promesse contractuelle ne supprime pas l’incertitude : le prestataire ne contrôle ni la demande, ni vos prix, ni votre équipe commerciale. Un contrat peut toutefois fixer des livrables, des conditions de mesure, un bonus ou une compensation. Exigez alors une définition vérifiable du prospect, de l’attribution, de la période et des exclusions.",
  },
  {
    question:
      "Google facture-t-il des frais en plus du budget publicitaire en France ?",
    answer:
      "Oui. Au 27 juillet 2026, Google indique une surcharge réglementaire de 2 % pour les annonces diffusées en France. Elle s’applique au coût des annonces réellement servies dans cette juridiction, au-delà du budget du compte, et peut elle-même être soumise aux taxes applicables. Vérifiez la dépense facturée, la ligne de juridiction et les pays réellement servis.",
  },
  {
    question:
      "Budget quotidien moyen ou budget total de campagne : quelle différence ?",
    answer:
      "Le budget quotidien moyen est flexible et, pour la plupart des campagnes, encadré par des limites quotidiennes et mensuelles. Un budget total peut être choisi à la création de certaines nouvelles campagnes sur une durée définie ; Google indique alors que le montant facturé ne dépassera pas ce total. Le type de budget ne peut pas ensuite être changé sur cette campagne.",
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
          { label: "Prix de gestion Google Ads" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Pour budgéter Google Ads sans fausse moyenne, séparez média, surcharge, honoraires, lancement, mesure, pages, créations, outils et temps interne. Comparez ensuite les devis à contenu égal et calculez le seuil de CPL que votre marge peut financer."
        heroAction={{
          href: "#comparateur",
          label: "Comparer trois honoraires",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "9 lignes à séparer",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "3 modèles recalculables",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "CPL maximal contrôlé",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/budget-google-ads-pme",
            label: "Dimensionner un budget média de test",
          },
          {
            href: "/guides/calculer-cout-par-lead-google-ads",
            label: "Calculer et diagnostiquer le coût par prospect",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Auditer le compte avant d’augmenter le budget",
          },
          {
            href: "/guides/choisir-agence-google-ads",
            label: "Choisir une agence Google Ads",
          },
          {
            href: "/guides/landing-page-google-ads",
            label: "Budgéter et contrôler la page de destination",
          },
          {
            href: "/services/publicite-en-ligne",
            label: "Voir notre périmètre de publicité en ligne",
          },
        ]}
        faqTitle="Prix et gestion Google Ads : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Il n’existe pas de prix moyen public assez homogène pour répondre
            honnêtement par un seul chiffre. Votre coût renseigné est la somme
            du média, de sa surcharge éventuelle, des honoraires, du lancement,
            de la mesure, des pages, des créations, des outils et du temps
            interne.
          </strong>
        </p>
        <p>
          Cinq prix d’entrée commerciaux français, revérifiés le 27 juillet
          2026, vont d’environ 90 € à 450 € HT par mois. Ils ne mesurent
          pourtant pas le même travail : l’un annonce deux optimisations
          mensuelles, d’autres plusieurs campagnes, appels, créations ou outils.
          Ce relevé ne devient donc ni une moyenne, ni une fourchette de marché.
        </p>
        <p>
          Pour une entreprise locale fictive, une dépense média retenue de 900
          €, 450 € de gestion, 18 € de surcharge France et deux heures internes
          par mois produisent 11 642 € de coûts renseignés sur six mois une fois
          le lancement ajouté. Ce scénario suppose le budget intégralement
          dépensé et la diffusion intégralement française. Une licence, un
          préavis ou une donnée inconnue reste explicitement hors total : elle
          ne vaut jamais zéro par défaut.
        </p>

        <InfoBox
          variant="blue"
          title="Les quatre blocs à demander dans chaque devis"
        >
          <ol className="mb-0 list-decimal space-y-1.5 pl-5">
            <li>
              <strong>La diffusion Google</strong> : budget ou plafond
              configuré, dépense réellement facturée, pays servis, surcharges,
              crédits et taxes applicables.
            </li>
            <li>
              <strong>Les honoraires</strong> pour créer, suivre et améliorer
              les campagnes, avec formule et assiette.
            </li>
            <li>
              <strong>Les prérequis et productions</strong> : lancement, mesure,
              page, créations, outils et licences.
            </li>
            <li>
              <strong>Le coût organisationnel et contractuel</strong> : temps
              interne, engagement, préavis, révision et passation.
            </li>
          </ol>
        </InfoBox>

        <GuideToc
          items={[
            { id: "sept-postes", label: "1. Ce que vous payez exactement" },
            {
              id: "portes",
              label: "2. Lancer, tester ou attendre",
            },
            {
              id: "tarifs-publics",
              label: "3. Tarifs publics et benchmark mondial",
            },
            {
              id: "comparateur",
              label: "4. Comparateur fixe, pourcentage et hybride",
            },
            {
              id: "socles",
              label: "5. Trois niveaux du même cas",
            },
            {
              id: "rentabilite",
              label: "6. CPL maximal et seuil d’arrêt",
            },
            { id: "prestataire", label: "7. Interne, freelance ou agence" },
            {
              id: "checklist",
              label: "8. La grille pour comparer les devis",
            },
            { id: "sources", label: "Sources consultées" },
          ]}
        />

        <h2 id="sept-postes">1. Comprenez ce que vous payez exactement</h2>

        <p>
          Le premier montant achète la diffusion. Avec un{" "}
          <strong>budget quotidien moyen</strong>, Google indique pour la
          plupart des campagnes une limite quotidienne égale à deux fois ce
          budget et une limite mensuelle égale au budget multiplié par 30,4.
          Ainsi, 50 € par jour correspondent à une limite mensuelle de 1 520 €,
          même si la dépense varie d’un jour à l’autre. Vérifiez les exceptions
          dans la page officielle sur les{" "}
          <a
            href="https://support.google.com/google-ads/answer/10486536?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            budgets Google Ads
          </a>
          .
        </p>

        <p>
          Pour certaines nouvelles campagnes assorties de dates, Google propose
          aussi un{" "}
          <a
            href="https://support.google.com/google-ads/answer/10486938?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            budget total de campagne
          </a>
          . Il constitue un plafond sur la durée définie, sans limite
          quotidienne, et le type de budget ne peut plus être changé après la
          création. Demandez donc quel mode est utilisé au lieu de convertir
          mécaniquement chaque devis en budget quotidien.
        </p>

        <InfoBox
          variant="blue"
          title="Ne confondez pas plafond configuré, dépense et facture"
        >
          Le budget configuré borne ou pilote la diffusion ; il ne garantit pas
          que chaque euro sera dépensé. Une prévision doit donc écrire son
          hypothèse de consommation, tandis qu’un CPL observé utilise la dépense
          réellement facturée. Si plusieurs pays sont servis, répartissez cette
          dépense par juridiction avant de calculer les surcharges.
        </InfoBox>

        <p>
          Faites apparaître neuf lignes, même lorsque certaines valent zéro :
        </p>

        <ul>
          <li>
            le <strong>budget ou plafond configuré</strong>, puis la{" "}
            <strong>dépense média réellement facturée</strong> par Google ;
          </li>
          <li>
            les <strong>surcharges et taxes</strong> liées aux pays réellement
            servis ;
          </li>
          <li>
            la <strong>gestion</strong>, avec sa formule et la fréquence du
            travail ;
          </li>
          <li>
            la <strong>mise en route</strong> : recherche, structure, annonces
            et tests ;
          </li>
          <li>
            la <strong>mesure</strong> des demandes, prospects et ventes ;
          </li>
          <li>la page vers laquelle les annonces envoient les visiteurs ;</li>
          <li>les textes, images ou vidéos à produire et renouveler ;</li>
          <li>les outils, connexions, alertes et licences ;</li>
          <li>
            le temps de votre équipe, l’engagement, le préavis et la passation.
          </li>
        </ul>

        <InfoBox
          variant="amber"
          title="France : ajoutez 2 % à la facture média avant les taxes applicables"
        >
          Au 27 juillet 2026, Google applique un coût opérationnel réglementaire
          de 2 % aux annonces diffusées en France. Si 900 € sont réellement
          facturés pour des annonces toutes servies en France, la surcharge est
          de 18 €. Elle est ajoutée au-delà du budget du compte et peut
          elle-même être soumise à la TVA ou à d’autres taxes selon votre
          situation. La{" "}
          <a
            href="https://support.google.com/google-ads/answer/9750227?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            documentation Google sur les surcharges par juridiction
          </a>{" "}
          doit être recontrôlée si vous diffusez dans plusieurs pays.
        </InfoBox>

        <p>
          Un « forfait tout compris » ne permet pas de comparer deux offres si
          l’une inclut la page et le suivi des ventes tandis que l’autre couvre
          seulement le compte Google Ads.
        </p>

        <p>
          Pour choisir un plafond et une hypothèse de dépense avant un premier
          test, utilisez le guide{" "}
          <Link href="/guides/budget-google-ads-pme">
            quel budget Google Ads prévoir pour une PME
          </Link>
          . Il compare la prévision de clics, le plafond conditionnel tiré de la
          marge et la perte maximale acceptable, sans redétailler les tarifs de
          gestion présentés ci-dessous.
        </p>

        <h2 id="portes">
          2. Décidez d’abord s’il faut lancer, tester ou attendre
        </h2>

        <p>
          Le bon prix n’est pas le prix le plus bas : c’est celui d’un test qui
          peut répondre à une question économique sans mettre votre trésorerie
          en danger. Avant de lire une grille d’agence, vérifiez trois portes :
          une offre réellement vendable, une mesure recettée et une personne
          capable de traiter les prospects.
        </p>

        <GuideTable
          headers={[
            "Décision",
            "Conditions minimales",
            "Contrôle avant décision",
          ]}
          rows={[
            [
              "Lancer avec un pilotage",
              "Marge contributive connue, conversion testée, page utilisable et responsable commercial disponible",
              "Seuil de CPL, plafond de perte, périmètre et revue à 30 jours écrits",
            ],
            [
              "Faire un test borné",
              "Les hypothèses existent mais la demande, le taux de signature ou le CPC restent incertains",
              "Budget total ou plafond mensuel, cohorte définie et critère d’arrêt avant lancement",
            ],
            [
              "Auditer avant de dépenser plus",
              "Un compte existe, mais conversions, campagnes, accès ou historique ne sont pas fiables",
              "Écart entre conversions Google, prospects qualifiés et ventes expliqué",
            ],
            [
              "Attendre et corriger le parcours",
              "Marge inconnue, mesure cassée, offre confuse ou personne indisponible pour rappeler",
              "Offre, page, suivi et capacité commerciale validés sans trafic supplémentaire",
            ],
          ]}
        />

        <h2 id="tarifs-publics">
          3. Ce que montrent cinq tarifs français et cinq grilles étrangères
        </h2>

        <p>
          Le relevé suivant a été revérifié le 27 juillet 2026 sur les propres
          pages des prestataires. Il ne constitue ni un panel représentatif, ni
          un classement, ni une moyenne. Une mention « à partir de » est un
          point d’entrée commercial : seul un devis daté fixe le prix,
          l’engagement et les livrables.
        </p>

        <GuideTable
          headers={[
            "Prestataire",
            "Prix public observé",
            "Ce que le prix laisse encore à vérifier",
          ]}
          rows={[
            [
              "MS Web",
              "Création 149 € HT ; gestion à partir de 90 € HT/mois",
              "Deux optimisations et un reporting mensuel annoncés ; nombre de campagnes, page et maintenance de la mesure à borner",
            ],
            [
              "Viaduc",
              "90 € HT/mois affichés, mais une note indique 99 € HT/mois ; mise en service dès 299 € HT ; engagement 4 mois",
              "Budget Google séparé, contenu exact du suivi et conditions de sortie",
            ],
            [
              "DP Medias",
              "Audit 500 € HT ; création de compte 250 € HT ; suivi dès 450 € HT/mois",
              "Quatre appels de 45 minutes annoncés ; volume de campagnes, créations, page et mesure à borner",
            ],
            [
              "Ad-Works",
              "Paramétrage dès 750 € HT ; gestion dès 450 € HT/mois",
              "Résiliation annoncée à tout moment ; complexité, créations, mesure, outils et passation à borner",
            ],
            [
              "Vizetoo",
              "89 € HT + 15 %, 149 € HT + 12 % ou 249 € HT + 10 % du média par mois ; mise en route distincte",
              "Grille dynamique liée au palier ; setup, plafond média, inclusions et coût au budget réel à reprendre dans le devis",
            ],
          ]}
        />

        <p>
          Lorsque vous avez choisi le format adapté, ne comparez pas seulement
          les logos et les promesses. Le guide pour{" "}
          <Link href="/guides/choisir-agence-google-ads">
            choisir une agence Google Ads
          </Link>{" "}
          vous aide à vérifier l’accès au compte, la personne qui travaillera,
          le résultat commercial suivi et ce que vous récupérerez en partant.
        </p>

        <p>
          Les pages sources de{" "}
          <a
            href="https://www.ms-web.fr/creation-et-gestion-de-campagne-google-ads/"
            target="_blank"
            rel="noreferrer"
          >
            MS Web
          </a>
          ,{" "}
          <a
            href="https://www.viaduc.fr/google-ads/"
            target="_blank"
            rel="noreferrer"
          >
            Viaduc
          </a>
          ,{" "}
          <a
            href="https://www.dpmedias.com/google-ads"
            target="_blank"
            rel="noreferrer"
          >
            DP Medias
          </a>
          ,{" "}
          <a
            href="https://www.ad-works.fr/tarifs"
            target="_blank"
            rel="noreferrer"
          >
            Ad-Works
          </a>{" "}
          et{" "}
          <a href="https://vizetoo.com/tarifs" target="_blank" rel="noreferrer">
            Vizetoo
          </a>{" "}
          sont volatiles. Elles montrent surtout que mise en route, gestion et
          variable média doivent être comparées séparément.
        </p>

        <InfoBox
          variant="amber"
          title="Ce que l’échantillon ne permet pas d’écrire"
        >
          Il ne permet pas d’annoncer une fourchette de marché à partir de ces
          seuls prix. Les plans ne couvrent ni le même volume, ni les mêmes
          compétences, ni les mêmes comptes. Il permet seulement d’exiger des
          lignes séparées et de refaire la formule avec votre budget.
        </InfoBox>

        <h3>Ce que les grilles étrangères expliquent mieux</h3>

        <p>
          Cinq pages commerciales étrangères ont été relues le 27 juillet 2026.
          Leurs montants ne doivent pas être convertis en « prix français ».
          Leur intérêt est ailleurs : elles rendent visibles des variables que
          beaucoup de pages françaises laissent au devis.
        </p>

        <GuideTable
          headers={[
            "Pays et page observée",
            "Mécanique rendue visible",
            "Question à reprendre dans votre devis",
          ]}
          rows={[
            [
              "États-Unis — Emprise Digital",
              "Setup séparé, forfait puis pourcentage au-delà d’un seuil, facturation média directe",
              "À quel budget la formule change-t-elle et que finance le setup ?",
            ],
            [
              "Royaume-Uni — DPOM",
              "Paliers liés au média, cadence, support, tracking et préavis détaillés",
              "Quel niveau de service change réellement d’un palier à l’autre ?",
            ],
            [
              "Canada — PPC Solutions",
              "Facturation horaire à la minute, compte client et absence de contrat long",
              "Quelles heures, priorités et preuves seront jointes à la facture ?",
            ],
            [
              "Allemagne — DREIKON",
              "Blocs d’heures mensuels et setup initial présentés séparément",
              "Que se passe-t-il si les heures sont consommées ou non utilisées ?",
            ],
            [
              "Australie — Hoorah",
              "Forfaits liés à des plafonds média, sans setup ni verrouillage annoncé",
              "Quelles limites de campagnes, tracking et créations compensent ce choix ?",
            ],
          ]}
        />

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Pages observées :{" "}
          <a
            href="https://emprisedigital.co/blog/google-ads-management-cost/"
            target="_blank"
            rel="noreferrer"
          >
            Emprise Digital
          </a>
          ,{" "}
          <a
            href="https://www.dpom.co.uk/ppc-pricing-packages/"
            target="_blank"
            rel="noreferrer"
          >
            DPOM
          </a>
          ,{" "}
          <a
            href="https://ppcsolutions.ca/ppc-management-fees/"
            target="_blank"
            rel="noreferrer"
          >
            PPC Solutions
          </a>
          ,{" "}
          <a
            href="https://www.dreikon.de/leistungen/sea-agentur/google-ads/"
            target="_blank"
            rel="noreferrer"
          >
            DREIKON
          </a>{" "}
          et{" "}
          <a
            href="https://www.hoorahonline.com.au/google-ads-price-guide"
            target="_blank"
            rel="noreferrer"
          >
            Hoorah
          </a>
          . Ce corpus volontairement contradictoire compare des prix propres,
          pas un marché mondial.
        </p>

        <h2 id="comparateur">
          4. Comparez fixe, pourcentage et hybride sur les mêmes éléments
        </h2>

        <p>
          Le prestataire peut facturer un prix fixe, un pourcentage de votre
          dépense publicitaire, du temps de travail ou une part conditionnelle.
          Aucun modèle n’est automatiquement meilleur. Le bon choix est celui
          dont la formule, l’assiette — le montant auquel le pourcentage
          s’applique — et les livrables restent compréhensibles lorsque votre
          dépense, votre plafond ou la complexité changent.
        </p>

        <GuideTable
          headers={["Mode de facturation", "Ce que cela change", "À vérifier"]}
          rows={[
            [
              "Forfait fixe",
              "Vous payez le même montant chaque mois tant que le besoin reste stable.",
              "Ce qui se passe si les pays, produits ou campagnes augmentent.",
            ],
            [
              "% d’une assiette contractuelle",
              "Les honoraires augmentent avec la base définie : dépense réelle, budget configuré ou autre montant.",
              "L’assiette exacte, le pourcentage, le minimum éventuel et un plafond.",
            ],
            [
              "Hybride",
              "Vous payez une base fixe puis un pourcentage de l’assiette prévue au contrat.",
              "Le total obtenu à chaque niveau d’assiette, avec minimum, plafond et paliers.",
            ],
            [
              "Temps passé ou tarif journalier",
              "Vous payez les heures ou journées réellement consacrées au compte.",
              "La priorité des travaux, le nombre maximal de jours et le compte rendu.",
            ],
            [
              "Part variable ou bonus de performance",
              "Une partie du prix dépend d’un prospect, d’un revenu, d’un ROAS ou d’un autre résultat défini.",
              "Attribution, cohorte, marge, baseline, exclusions, plafond et effet d’une panne de mesure.",
            ],
          ]}
        />

        <InfoBox variant="blue" title="Le socle égal avant toute comparaison">
          Utilisez le même compte, le même pays, les mêmes campagnes et la même
          période. Écrivez aussi les conversions, le reporting, la cadence, les
          créations, les réunions, le support, l’engagement et la passation.
          Sans cette empreinte de périmètre, deux honoraires ne décrivent pas le
          même achat.
        </InfoBox>

        <FormulaBox>{`Exemple fictif utilisé dans le comparateur
Forfait fixe = 900 € / mois
Pourcentage = 15 % × assiette contractuelle
Hybride = 500 € + (10 % × assiette contractuelle)

Croisements théoriques des seuls honoraires,
sans minimum, plafond ni palier :
fixe = hybride à 4 000 € d’assiette
fixe = pourcentage à 6 000 €
pourcentage = hybride à 10 000 €`}</FormulaBox>

        <p>
          L’exemple initial du calculateur retient 5 000 € de dépense, 5 000 €
          d’assiette pour les honoraires et 100 % de diffusion dans la
          juridiction surtaxée. Séparez ces trois données si votre budget n’est
          pas entièrement consommé, si le contrat applique son pourcentage à une
          autre base ou si vous diffusez dans plusieurs pays.
        </p>

        <GoogleAdsManagementCostPlanner />

        <h2 id="socles">5. Trois niveaux du même cas sur 3, 6 et 12 mois</h2>

        <p>
          Les trois niveaux ci-dessous décrivent la{" "}
          <strong>même entreprise locale fictive</strong>, avec la même offre,
          la même marge et le même tunnel commercial. Ils ne sont ni des devis,
          ni des recommandations de budget. Ils montrent comment le coût change
          quand le média, le nombre de campagnes, la mesure, les créations et la
          cadence augmentent.
        </p>

        <p>
          Les dépenses externes sont exprimées hors taxes. Le temps interne, qui
          n’est pas une facture, est valorisé à 44,2 € par heure,{" "}
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            coût 2025 publié par l’Insee
          </a>{" "}
          pour les services marchands dans les entreprises de 10 salariés ou
          plus. Ce champ statistique n’est ni celui de toutes les TPE, ni la
          valeur d’une heure de dirigeant : remplacez-le par votre coût chargé
          ou d’opportunité.
        </p>

        <InfoBox
          variant="blue"
          title="Hypothèse média commune aux trois niveaux"
        >
          Pour rendre les additions reproductibles, chaque niveau suppose que le
          budget mensuel indiqué est intégralement dépensé et que 100 % des
          annonces sont servies en France. Ce sont des hypothèses de prévision,
          pas une promesse de consommation. Remplacez-les par la dépense réelle
          et la part française observée dès que la facture est disponible.
        </InfoBox>

        <GuideTable
          headers={["Niveau fictif", "Ce qui change", "Coût renseigné"]}
          rows={[
            [
              "Essentiel",
              "1 campagne Search, 1 offre, formulaire testé, deux optimisations et un reporting mensuel",
              "3 mois : 6 355 € · 6 mois : 9 806 € · 12 mois : 16 708 €",
            ],
            [
              "Central",
              "2 campagnes Search, appels suivis, deux revues mensuelles, réunion et outil à 60 €/mois",
              "3 mois : 9 174 € · 6 mois : 14 606 € · 12 mois : 25 469 €",
            ],
            [
              "Exigeant",
              "4 campagnes, retour CRM, revue hebdomadaire, deux pages, créations récurrentes et tableau de bord",
              "3 mois : 16 210 € · 6 mois : 26 113 € · 12 mois : 45 919 €",
            ],
          ]}
        />

        <GuideTable
          headers={[
            "Niveau",
            "Hypothèses chiffrées",
            "Ce qui reste hors total",
          ]}
          rows={[
            [
              "Essentiel",
              "600 € de dépense média retenue + 12 € de surcharge + 450 € de gestion + 2 h internes/mois ; 2 550 € externes et 8 h internes au départ",
              "Outils payants supposés à zéro ; TVA, traitement commercial, préavis et hausse future à confirmer",
            ],
            [
              "Central",
              "900 € de dépense média retenue + 18 € de surcharge + 700 € de gestion + 60 € d’outils + 3 h internes/mois ; 3 300 € externes et 10 h internes au départ",
              "Créations graphiques supposées inutiles ; TVA, traitement commercial et passation à confirmer",
            ],
            [
              "Exigeant",
              "1 500 € de dépense média retenue + 30 € de surcharge + 1 100 € de gestion + 450 € d’outils/créations + 5 h internes/mois ; 5 600 € externes et 16 h au départ",
              "Équipe de vente, licences CRM existantes, TVA, stock et coûts de sortie à confirmer",
            ],
          ]}
        />

        <FormulaBox>{`Niveau central — calcul contrôlé
Coûts ponctuels =
  setup 1 000 € + mesure/appels 800 € + page 1 500 €
+ 10 h internes × 44,2 € = 3 742 €

Coût renseigné mensuel =
  dépense média retenue 900 €
+ surcharge France 2 % × 900 € (part France 100 %) = 18 €
+ gestion 700 € + outils 60 € + 3 h internes × 44,2 €
= 1 810,60 €

3 mois = 3 742 + (3 × 1 810,60) = 9 173,80 €
6 mois = 3 742 + (6 × 1 810,60) = 14 605,60 €
12 mois = 3 742 + (12 × 1 810,60) = 25 469,20 €`}</FormulaBox>

        <InfoBox variant="amber" title="Une inconnue ne vaut jamais zéro">
          Chaque ligne doit être marquée <strong>incluse</strong>,{" "}
          <strong>supposée à zéro</strong>, <strong>exclue</strong> ou{" "}
          <strong>à confirmer</strong>. Seules les lignes chiffrées forment le «
          coût renseigné ». Ce vocabulaire évite qu’un total précis en apparence
          fasse oublier une licence, une page ou un préavis.
        </InfoBox>

        <h2 id="rentabilite">6. Calculez le CPL maximal et le seuil d’arrêt</h2>

        <p>
          Le coût par clic (CPC) divise la dépense média réelle par les clics
          facturés ; un clic n’est pas nécessairement une visite ou une session
          mesurée sur le site. Le coût par prospect (CPL) doit préciser son
          numérateur : média seul, dépense avec surcharge ou ensemble des coûts
          renseignés. Le CPA de plateforme mesure le coût d’une action ou
          conversion configurée ; le CAC mesure celui d’un vrai nouveau client.
          Une <strong>cohorte</strong> est ici le groupe de prospects acquis
          pendant la même période et suivi jusqu’à la vente ou au rejet.
        </p>

        <FormulaBox>{`CPC média observé =
  dépense média réellement facturée ÷ clics facturés

CPL média observé =
  dépense média réellement facturée ÷ prospects qualifiés

CPL dépense + surcharge =
  (dépense média + surcharges de juridiction) ÷ prospects qualifiés

CPL renseigné =
  coûts d’acquisition chiffrés sur la période ÷ prospects qualifiés

CPA de plateforme =
  coût retenu par la plateforme ÷ actions ou conversions configurées

CAC de cohorte =
  acquisition + vente attribuables ÷ nouveaux clients de cette cohorte

ROAS plateforme =
  valeur de conversion attribuée ÷ dépense publicitaire

ROI contributif =
  (marge contributive − coût renseigné) ÷ coût renseigné`}</FormulaBox>

        <h3>
          Exemple : dupliquer le calcul avec votre marge, pas un CPL sectoriel
        </h3>

        <p>
          L’exemple suivant est entièrement fictif. Un « prospect qualifié »
          doit avoir une définition stable avant le test : besoin conforme,
          coordonnées valides, zone servie et décision possible dans la période.
          La <strong>marge contributive</strong> désigne ici le revenu de la
          vente diminué des coûts variables choisis, avant le coût d’acquisition
          ; écrivez votre propre définition comptable avant de reprendre le
          calcul. Le calcul raisonne en espérance ; il ne garantit ni quinze
          prospects, ni trois ventes.
        </p>

        <FormulaBox>{`Marge contributive par vente avant acquisition = 2 400 €
Taux prospect qualifié → vente = 20 %
Valeur de marge attendue par prospect = 2 400 × 20 % = 480 €

Coûts hors dépense média et surcharge = 1 200 € / mois
Objectif = 15 prospects qualifiés
Coût hors média par prospect = 1 200 ÷ 15 = 80 €

Enveloppe dépense + surcharge maximale / prospect = 480 − 80 = 400 €
Hypothèse : dépense intégrale et diffusion France à 100 %, surcharge 2 %
Dépense média prévisionnelle maximale = 400 ÷ 1,02 = 392,16 € / prospect
Dépense média mensuelle retenue = 15 × 392,16 = 5 882,35 €
Surcharge = 117,65 € ; dépense + surcharge = 6 000 €

Contrôle inverse :
3 ventes × 2 400 € = 7 200 € de marge
5 882,35 + 117,65 + 1 200 = 7 200 € de coûts`}</FormulaBox>

        <GuideTable
          headers={[
            "Taux et marge attendue / prospect",
            "Dépense + surcharge maximale / prospect",
            "Dépense média avant surcharge de 2 %",
          ]}
          rows={[
            ["10 % → 240 €", "160 €", "156,86 €"],
            ["20 % → 480 €", "400 €", "392,16 €"],
            ["30 % → 720 €", "640 €", "627,45 €"],
          ]}
        />

        <p>
          Si vous voulez conserver 20 % de la marge attendue comme réserve dans
          le cas central, retirez encore 96 € par prospect : l’enveloppe dépense
          et surcharge cible tombe à 304 €, soit 298,04 € de média avant
          surcharge sous les mêmes hypothèses. Rejouez aussi un délai de
          signature plus long, les impayés, annulations, retours et ventes non
          attribuables. Le guide{" "}
          <Link href="/guides/calculer-cout-par-lead-google-ads">
            calculer le coût par lead Google Ads
          </Link>{" "}
          approfondit la réconciliation des volumes ; le{" "}
          <Link href="/guides/budget-google-ads-pme">
            calculateur de budget Google Ads pour PME
          </Link>{" "}
          confronte ce plafond à une prévision de clics et à votre perte
          maximale acceptable.
        </p>

        <InfoBox
          variant="amber"
          title="Seuil d’arrêt à écrire avant la campagne"
        >
          Arrêtez l’augmentation du budget si la mesure est cassée, si la
          définition du prospect change, si le CPL facturé dépasse durablement
          votre seuil après la période d’observation prévue ou si l’équipe ne
          traite pas les demandes. Dans un CPL observé, honoraires et primes
          attribuables entrent au numérateur. Pour dériver une dépense maximale
          lorsque des honoraires variables s’appliquent à cette même dépense,
          utilisez explicitement :{" "}
          <strong>
            dépense maximale = marge disponible ÷ (1 + taux de surcharge + taux
            d’honoraires)
          </strong>
          . Si l’assiette, le minimum, le plafond ou le palier diffère, cette
          formule ne suffit plus.
        </InfoBox>

        <p>
          Les trois niveaux restent des{" "}
          <strong>exemples illustratifs fictifs</strong>. Ils ne décrivent aucun
          client ni aucun prix moyen. Avant toute hausse, utilisez la méthode de
          l’
          <Link href="/guides/audit-google-ads-que-verifier">
            audit Google Ads
          </Link>{" "}
          pour rapprocher conversions de plateforme, prospects qualifiés et
          ventes.
        </p>

        <h3 id="mesure">
          Évitez de payer des clics que votre site ne transforme pas
        </h3>

        <p>
          Acheter du trafic ne suffit pas. Il faut savoir quelles demandes
          deviennent de vrais clients, envoyer les visiteurs vers une page
          claire et renouveler les annonces lorsqu’elles ne fonctionnent plus.
          Ces dépenses peuvent donc être nécessaires au résultat ; le devis doit
          simplement dire lesquelles sont incluses.
        </p>

        <p>
          Google explique que le classement d’une annonce dépend notamment de
          l’enchère, du contexte, de la pertinence de l’annonce et de
          l’expérience sur la page de destination. Une meilleure qualité peut
          souvent réduire le coût par clic. Le{" "}
          <a
            href="https://support.google.com/google-ads/answer/156066?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            niveau de qualité
          </a>{" "}
          affiché de 1 à 10 reste toutefois un outil de diagnostic : Google
          précise que cette note n’est pas la valeur utilisée telle quelle aux
          enchères. Un devis sérieux vise donc une conséquence — requête mieux
          servie, page plus claire, prospect plus qualifié — et pas la hausse
          cosmétique d’un score.
        </p>

        <p>Demandez cinq réponses concrètes dans le devis :</p>

        <ul>
          <li>quelle action mesurée guide réellement les enchères ;</li>
          <li>
            si les prospects qualifiés et les ventes reviennent du logiciel
            commercial vers Google Ads ;
          </li>
          <li>
            qui corrige le message, la vitesse et le formulaire de la page ;
          </li>
          <li>
            combien de créations sont produites, qui les valide et qui possède
            les fichiers ;
          </li>
          <li>
            qui reçoit l’alerte et intervient si la mesure casse ou si la
            dépense dérape.
          </li>
        </ul>

        <p>
          Google distingue les actions de conversion{" "}
          <strong>principales</strong>, utilisées pour les enchères et affichées
          dans la colonne « Conversions », des actions{" "}
          <strong>secondaires</strong>, normalement observées dans « Toutes les
          conversions ». Cette règle connaît une exception importante : une
          action secondaire ajoutée à un objectif personnalisé peut tout de même
          servir aux enchères. Il faut donc contrôler à la fois le statut de
          l’action et les objectifs réellement appliqués aux campagnes, selon la{" "}
          <a
            href="https://support.google.com/google-ads/answer/11461796?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            documentation actuelle sur les actions principales et secondaires
          </a>
          .
        </p>

        <p>
          Pour la génération de prospects, le retour des prospects qualifiés et
          des ventes vers Google peut désormais passer par le Gestionnaire de
          données et les conversions avancées pour les prospects. Ce dispositif
          demande une source CRM compatible, des identifiants correctement
          collectés, un choix de données personnelles adapté et une recette :
          son activation ne prouve pas que l’attribution est exacte. Le devis
          doit préciser si la{" "}
          <a
            href="https://support.google.com/google-ads/answer/15707550?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            configuration dans le Gestionnaire de données
          </a>{" "}
          est incluse, simplement conseillée ou impossible avec les outils
          actuels, puis qui surveille les imports rejetés et les doublons.
        </p>

        <h2 id="prestataire">
          7. Gérer en interne, avec un freelance ou une agence
        </h2>

        <GuideTable
          headers={["Option", "Bon choix si…", "À ne pas oublier dans le coût"]}
          rows={[
            [
              "Interne",
              "Compte simple, personne formée, temps réellement réservé",
              "Heures de travail, outils, formation, contrôle et remplacement en cas d’absence.",
            ],
            [
              "Freelance",
              "Besoin bien délimité et interlocuteur expert direct",
              "Forfait ou pourcentage, suivi des ventes, créations et solution de remplacement.",
            ],
            [
              "Agence",
              "Plusieurs compétences, canaux, marchés ou besoin de continuité",
              "Lancement, gestion, licences, productions hors forfait et personnes réellement mobilisées.",
            ],
            [
              "Audit puis autonomie",
              "Petit budget, équipe capable d’appliquer une feuille de route",
              "Mission ponctuelle, temps interne d’exécution et mises à jour futures.",
            ],
          ]}
        />

        <p>
          La base Insee de 44,2 € par heure peut servir à ne pas valoriser le
          temps interne à zéro, mais elle n’est ni le salaire d’un spécialiste
          Ads ni le coût d’une microentreprise. Un dirigeant doit utiliser son
          coût d’opportunité réel : cinq heures retirées à la vente peuvent
          coûter davantage que cinq heures administratives.
        </p>

        <InfoBox
          variant="amber"
          title="Quatre cas où ne pas externaliser tout de suite"
        >
          <ul className="mb-0 list-disc space-y-1.5 pl-4">
            <li>la marge par vente et le taux de signature sont inconnus ;</li>
            <li>
              la demande est trop faible pour produire un test interprétable ;
            </li>
            <li>
              personne ne peut rappeler et qualifier les prospects rapidement ;
            </li>
            <li>
              la page, l’offre ou la mesure échoue déjà sans trafic payant.
            </li>
          </ul>
          Dans ces situations, un diagnostic ciblé, un test interne ou un
          travail sur le parcours peut être préférable à un forfait mensuel. Le
          guide{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            pourquoi mon site ne convertit pas
          </Link>{" "}
          aide à vérifier le troisième et le quatrième point.
        </InfoBox>

        <h3 id="propriete">
          Gardez la propriété de votre compte et de vos données
        </h3>

        <p>
          Google permet d’ajouter, modifier et supprimer des accès à un compte.
          L’association d’un compte client existant à un compte administrateur
          ne lui donne pas automatiquement la propriété. En revanche, un compte
          administrateur qui crée le compte client en devient automatiquement
          propriétaire ; un propriétaire peut aussi transférer ce statut, et
          certains droits se transmettent dans une hiérarchie de comptes
          administrateur. Le compte client conserve ses données, mais cette
          notion ne remplace donc pas un contrôle réel des accès.
        </p>

        <p>
          La configuration la plus réversible reste simple : l’entreprise
          conserve ses propres administrateurs, vérifie quel compte
          administrateur est propriétaire, reçoit une facturation média lisible
          et fait associer le prestataire sans partager d’identifiant. Au départ
          du prestataire, elle contrôle la dissociation, les utilisateurs et les
          actifs voisins plutôt que de supposer que le mot « propriétaire »
          suffit.
        </p>

        <ul>
          <li>
            Conservez au moins deux administrateurs contrôlés par l’entreprise
            et activez les protections de sécurité adaptées.
          </li>
          <li>
            Inventoriez Google Ads, profil de paiement, Analytics, Tag Manager,
            Merchant Center, CRM, domaine, pages et tableaux de bord.
          </li>
          <li>
            Faites écrire les droits sur textes, images, vidéos, modèles de
            pages de destination, scripts et connecteurs.
          </li>
          <li>
            Exigez une passation : campagnes actives, budgets, conversions,
            exclusions, tests, anomalies, licences et prochaine action.
          </li>
          <li>
            Utilisez l’historique des modifications pour distinguer les actions
            manuelles, règles et outils ayant modifié budgets, enchères ou
            conversions.
          </li>
        </ul>

        <p>
          Les procédures officielles sont détaillées dans{" "}
          <a
            href="https://support.google.com/google-ads/answer/6372672?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            la gestion des accès
          </a>
          ,{" "}
          <a
            href="https://support.google.com/google-ads/answer/7456532?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            la propriété des comptes client
          </a>{" "}
          et{" "}
          <a
            href="https://support.google.com/google-ads/answer/2454137?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            l’historique des modifications
          </a>
          .
        </p>

        <h3 id="offre-hagnere">Où se situe l’offre Hagnéré Code</h3>

        <p>
          Hagnéré Code vend cette prestation et n’est donc pas une source neutre
          sur son propre prix. Au 27 juillet 2026, la page{" "}
          <Link href="/services/publicite-en-ligne">publicité en ligne</Link>{" "}
          affiche un audit à 1 500 € HT, puis trois scénarios de pilotage à 1
          800 €, 3 500 € et 4 500 € HT par mois. Le budget média reste séparé.
          Ces scénarios associent Google Ads à d’autres canaux, au tracking et à
          des créations ; ce ne sont pas les prix d’une campagne Search locale
          isolée.
        </p>

        <p>
          La page <Link href="/tarifs">Tarifs</Link> affiche actuellement un
          minimum de trois mois pour la publicité en ligne, tandis que la page
          de service indique que durée et préavis sont précisés au devis. Cette
          différence doit être résolue par le document contractuel avant
          signature : le devis doit écrire la durée initiale, le renouvellement,
          le préavis, le suivi des conversions, les créations, les outils, les
          intervenants et les responsabilités réellement inclus.
        </p>

        <GuideTable
          headers={[
            "Offre et prix affiché",
            "À envisager si…",
            "Probablement inadapté si…",
          ]}
          rows={[
            [
              "Audit Ads — 1 500 € HT ponctuels",
              "Compte existant, besoin d’un diagnostic et d’une feuille de route",
              "Vous cherchez uniquement une certification ou un rapport automatique",
            ],
            [
              "Starter — 1 800 € HT/mois",
              "1 à 2 canaux, suivi des conversions et pilotage régulier à organiser",
              "Le budget média est faible et une campagne de recherche simple suffit",
            ],
            [
              "Scale / Premium — 3 500 à 4 500 € HT/mois",
              "Plusieurs canaux, données commerciales, créations et organisation plus complexes",
              "Vous n’avez ni mesure, ni marge, ni équipe pour traiter le volume",
            ],
          ]}
        />

        <p>
          Ces prix ne servent pas à fixer la valeur « normale » d’une gestion
          Google Ads. Ils positionnent une offre comportant plusieurs briques.
          Pour une petite campagne locale autonome, un freelance, un audit
          ponctuel ou une gestion interne peut être plus proportionné. Pour un
          compte multi-canaux relié au CRM, comparer seulement le prix mensuel
          masque le travail de mesure et de production.
        </p>

        <h2 id="checklist">8. La grille pour comparer deux devis</h2>

        <p>
          Téléchargez la{" "}
          <a
            href="/ressources/grille-comparaison-devis-google-ads.csv"
            download
          >
            grille CSV de comparaison des devis Google Ads
          </a>
          , ou copiez cette liste dans un tableur. Placez une colonne par offre,
          puis une colonne « réponse précise ». Une mention orale, « inclus » ou
          « selon besoin » ne suffit pas : demandez un montant, une limite, un
          responsable ou un document à recevoir.
        </p>

        <ol>
          <li>
            <strong>Compte et facturation.</strong> Qui crée le compte, qui
            possède l’accès administrateur et qui reçoit la facture Google ?
          </li>
          <li>
            <strong>Budget et dépense média.</strong> Quel plafond est
            configuré, quelle dépense est prévue puis facturée, quelles
            campagnes et quelle validation avant augmentation ?
          </li>
          <li>
            <strong>Formule d’honoraires.</strong> Forfait, pourcentage, part
            fixe, minimum, plafond et assiette exacte.
          </li>
          <li>
            <strong>Mise en route.</strong> Audit, stratégie, recherche,
            structure, annonces, import, tests et lancement inclus ou séparés.
          </li>
          <li>
            <strong>Ce qui est inclus.</strong> Pays, langues, campagnes,
            produits, marques et nombre de pages.
          </li>
          <li>
            <strong>Conversions.</strong> Action principale, actions
            secondaires, valeurs, suppression des doublons et test de bon
            fonctionnement.
          </li>
          <li>
            <strong>Qualité des prospects.</strong> Retour des prospects
            qualifiés et clients depuis le CRM, fréquence et rejets.
          </li>
          <li>
            <strong>Pages.</strong> Audit, rédaction, design, développement,
            hébergement, variantes et maintenance.
          </li>
          <li>
            <strong>Créations.</strong> Formats, volume mensuel, validations,
            sources et cession des droits.
          </li>
          <li>
            <strong>Outils.</strong> Connecteurs, suivi d’appels, serveur de
            balises, tableaux de bord et licences.
          </li>
          <li>
            <strong>Pilotage.</strong> Personne nommée, fréquence de revue,
            termes de recherche, budgets, tests et compte rendu.
          </li>
          <li>
            <strong>Alertes.</strong> Seuil de dépense ou de mesure, horaires,
            destinataire et délai cible d’intervention.
          </li>
          <li>
            <strong>Indicateurs.</strong> Coût par clic (CPC), coût par prospect
            qualifié (CPL), coût par action configurée (CPA), coût d’acquisition
            client réel (CAC), marge et délai de transformation.
          </li>
          <li>
            <strong>Temps interne.</strong> Qui valide, fournit les contenus,
            traite les prospects et combien d’heures sont réservées ?
          </li>
          <li>
            <strong>Contrat.</strong> Durée, préavis, révision du prix,
            sous-traitants, confidentialité et responsabilité.
          </li>
          <li>
            <strong>Sortie.</strong> Accès, historiques, fichiers, droits,
            documentation, suppression et durée de passation.
          </li>
        </ol>

        <InfoBox
          variant="emerald"
          title="Votre prochaine action en vingt minutes"
        >
          Prenez votre devis actuel et inscrivez les neuf lignes du début de ce
          guide. Séparez le budget configuré, la dépense prévue et l’assiette
          des honoraires, puis calculez ces derniers à 3, 6 et 12 mois. Ajoutez
          le temps interne et refaites le seuil de CPL avec votre marge et votre
          taux de signature. Si une donnée manque, marquez-la « à confirmer »
          avant de comparer le coût renseigné — ou avant de lancer.
        </InfoBox>

        <GuideInlineCTA
          title="Faire cadrer le budget et le périmètre Google Ads"
          description="Indiquez votre offre, votre marge, le budget configuré, la dépense média prévue et les outils déjà en place. Nous séparons honoraires, tracking, pages, créations et inconnues, puis nous vous disons si un audit, un test borné ou une gestion mensuelle paraît proportionné."
          tags={[
            "Média séparé des honoraires",
            "Inconnues signalées",
            "Audit ou pilotage distingué",
          ]}
          ctaLabel="Décrire mon besoin Google Ads"
          ctaHref="/demarrer-un-projet"
          ctaService="ads"
          ctaSource="guide-prix-gestion-google-ads"
        />

        <h2 id="sources">Sources consultées</h2>

        <p>Sources techniques et économiques vérifiées le 27 juillet 2026 :</p>

        <ul>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/10486536?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — présentation des budgets et limites de dépense
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/1722122?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — classement des annonces
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/156066?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — qualité des annonces et niveau de qualité
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/10486938?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — budgets totaux de campagne
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/9750227?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — surcharges propres aux juridictions
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/11461796?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — conversions principales et secondaires
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/15707550?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — conversions avancées pour prospects avec le
              Gestionnaire de données
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/6372672?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — gestion des accès au compte
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/7456532?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — propriété des comptes client
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/2454137?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — historique des modifications
            </a>
          </li>
          <li>
            <a
              href="https://www.insee.fr/fr/statistiques/2381340"
              target="_blank"
              rel="noreferrer"
            >
              Insee — coût horaire du travail selon l’activité, données 2025
            </a>
          </li>
        </ul>

        <p className="text-sm text-zinc-500">
          Les tarifs de prestataires sont des prix propres observés à une date,
          pas des données de marché. Les calculs sont des exemples illustratifs
          fictifs, testés localement, hors taxes applicables et sans garantie de
          performance. Les faits de plateforme ont été recontrôlés dans les
          aides officielles ; une page tarifaire inaccessible ou modifiée doit
          être retirée du relevé, pas estimée. Un devis, le paramétrage réel du
          compte et vos données de marge restent nécessaires pour engager une
          dépense.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
