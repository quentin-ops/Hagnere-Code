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
      "Il n’existe pas de moyenne française publique assez homogène. Dans les cinq offres publiques relevées le 20 juillet 2026, la gestion débute selon les cas à environ 90 € ou à 450 € HT par mois, mais les services inclus diffèrent. Ajoutez toujours le budget versé à Google et les éventuels frais de lancement.",
  },
  {
    question: "Les honoraires d’agence incluent-ils le budget versé à Google ?",
    answer:
      "Pas nécessairement. Demandez une ligne pour le budget versé à Google et une autre pour les honoraires. L’entreprise doit aussi conserver l’accès à son compte publicitaire.",
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
      "Non, car l’agence ne contrôle ni la demande, ni vos prix, ni votre équipe commerciale. Elle peut en revanche s’engager sur le travail fourni, les contrôles, le rythme de suivi et les alertes.",
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
        heroDescription="Vous voulez savoir combien prévoir pour Google Ads ? Séparez le budget payé à Google, les honoraires de gestion et les frais nécessaires au lancement. Ce guide vous donne des prix publics, trois exemples complets et une méthode simple pour comparer les devis."
        heroAction={{ href: "#socles", label: "Voir trois exemples de budget" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "7 postes à séparer",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "3 exemples sur 3, 6 et 12 mois",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Coût par prospect recalculable",
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
            href: "/services/publicite-en-ligne",
            label: "Gestion de publicité en ligne",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Auditer le compte avant d’augmenter le budget",
          },
          {
            href: "/guides/prix-referencement-naturel",
            label: "Prix du référencement naturel",
          },
          {
            href: "/guides/seo-ou-google-ads",
            label: "Choisir où investir entre SEO et Google Ads",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Pourquoi mon site ne convertit pas",
          },
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Prix d’un site internet",
          },
          {
            href: "/services/sites-vitrines",
            label: "Pages et sites professionnels",
          },
          { href: "/tarifs", label: "Tarifs Hagnéré Code" },
        ]}
        faqTitle="Prix et gestion Google Ads : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Vous cherchez combien coûte réellement Google Ads pour votre
            entreprise ? Commencez par additionner le budget payé à Google et
            les honoraires de la personne qui gère les campagnes.
          </strong>
        </p>
        <p>
          Dans les cinq offres publiques françaises relevées le 20 juillet 2026,
          la gestion débute selon les prestataires à environ 90 € ou à 450 € HT
          par mois, avec des contenus très différents. À cela s’ajoutent le
          budget publicitaire, les frais de lancement et parfois la mesure des
          demandes, la page d’arrivée ou les créations.
        </p>
        <p>
          Dans notre exemple d’une entreprise locale, 900 € de publicité et 450
          € de gestion par mois conduisent à un coût complet de 11 534 € HT sur
          six mois une fois le lancement et le temps interne ajoutés. Ce n’est
          pas une moyenne : l’exemple montre ce qu’un prix mensuel isolé peut
          cacher.
        </p>

        <InfoBox
          variant="blue"
          title="Les trois montants à demander dans chaque devis"
        >
          <ol className="mb-0 list-decimal space-y-1.5 pl-5">
            <li>
              <strong>Le budget publicitaire</strong> directement dépensé sur
              Google.
            </li>
            <li>
              <strong>Les honoraires</strong> pour créer, suivre et améliorer
              les campagnes.
            </li>
            <li>
              <strong>Les frais complémentaires</strong> : lancement, suivi des
              demandes, page, visuels ou outils lorsqu’ils sont nécessaires.
            </li>
          </ol>
        </InfoBox>

        <GuideToc
          items={[
            { id: "sept-postes", label: "1. Ce que vous payez exactement" },
            {
              id: "tarifs-publics",
              label: "2. Tarifs publics et modes de facturation",
            },
            {
              id: "socles",
              label: "3. Trois budgets complets sur 3, 6 et 12 mois",
            },
            {
              id: "rentabilite",
              label: "4. Savoir si la campagne peut être rentable",
            },
            { id: "prestataire", label: "5. Interne, freelance ou agence" },
            {
              id: "checklist",
              label: "6. La checklist pour comparer deux devis",
            },
            { id: "sources", label: "Sources consultées" },
          ]}
        />

        <h2 id="sept-postes">1. Comprenez ce que vous payez exactement</h2>

        <p>
          Le premier montant est celui dépensé pour afficher vos annonces.
          Google vous demande un budget quotidien moyen par campagne. Pour la
          plupart des campagnes, sa documentation indique une limite de dépense
          quotidienne égale à deux fois ce budget et une limite mensuelle égale
          au budget quotidien moyen multiplié par 30,4. Ainsi, 50 € par jour
          correspondent à une limite mensuelle de 1 520 €, même si la dépense
          varie d’un jour à l’autre. Vérifiez les exceptions et les changements
          de budget dans la page officielle sur les{" "}
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
          Faites apparaître sept lignes, même lorsque certaines valent zéro :
        </p>

        <ul>
          <li>
            le <strong>budget média</strong> facturé par Google ;
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
          <li>
            les outils, connexions, alertes, licences et le temps de votre
            équipe.
          </li>
        </ul>

        <p>
          Un « forfait tout compris » ne permet pas de comparer deux offres si
          l’une inclut la page et le suivi des ventes tandis que l’autre couvre
          seulement le compte Google Ads.
        </p>

        <h2 id="tarifs-publics">
          2. Ce que montrent cinq tarifs publics français — et rien de plus
        </h2>

        <p>
          Le relevé suivant a été effectué le 20 juillet 2026 sur les propres
          pages des prestataires. Il ne constitue ni un panel représentatif, ni
          un classement, ni une moyenne. Une mention « à partir de » est un
          point d’entrée commercial : seul un devis daté fixe le prix et les
          livrables.
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
              "Nombre de campagnes, charge, page et maintenance de la mesure",
            ],
            [
              "Viaduc",
              "90 € HT/mois affichés, mais une note indique 99 € HT/mois ; mise en service dès 299 € HT ; engagement 4 mois",
              "Budget Google séparé, contenu exact du suivi et conditions de sortie",
            ],
            [
              "DP Medias",
              "Audit 500 € HT ; création de compte 250 € HT ; suivi dès 450 € HT/mois",
              "Travail prévu au-delà du prix de départ et livrables de page",
            ],
            [
              "Ad-Works",
              "Paramétrage dès 750 € HT ; gestion dès 450 € HT/mois",
              "Complexité prise en charge, créations, mesure et outils",
            ],
            [
              "Vizetoo",
              "89 € HT + 15 %, 149 € HT + 12 % ou 249 € HT + 10 % du média par mois ; mise en route distincte",
              "Offre liée au palier choisi, inclusions et coût au budget réel",
            ],
          ]}
        />

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

        <h3 id="modeles">Comprenez comment les honoraires sont calculés</h3>

        <p>
          Le prestataire peut facturer un prix fixe, un pourcentage de votre
          dépense publicitaire ou du temps de travail. Aucun modèle n’est
          automatiquement meilleur. Le bon choix est celui dont le prix reste
          compréhensible lorsque votre budget augmente ou que le nombre de
          campagnes change.
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
              "% du budget média",
              "Les honoraires augmentent automatiquement lorsque vous dépensez plus.",
              "Le pourcentage exact, le minimum éventuel et un plafond.",
            ],
            [
              "Hybride",
              "Vous payez une base fixe puis un pourcentage du budget Google.",
              "Le total obtenu à chacun de vos niveaux de budget.",
            ],
            [
              "Temps passé ou tarif journalier",
              "Vous payez les heures ou journées réellement consacrées au compte.",
              "La priorité des travaux, le nombre maximal de jours et le compte rendu.",
            ],
          ]}
        />

        <p>
          Voici trois devis fictifs couvrant exactement le même travail, avec
          des montants hors taxes : 900 € fixes, 15 % du média, et 500 € + 10 %
          du média. Cette hypothèse n’est pas une grille Hagnéré Code ni un
          relevé de marché ; elle sert à voir la mécanique.
        </p>

        <GuideTable
          headers={[
            "Budget média mensuel",
            "Forfait 900 €",
            "Deux formules variables",
          ]}
          rows={[
            ["1 000 €", "900 €", "15 % : 150 € · Hybride : 600 €"],
            ["5 000 €", "900 €", "15 % : 750 € · Hybride : 1 000 €"],
            ["10 000 €", "900 €", "15 % : 1 500 € · Hybride : 1 500 €"],
            ["30 000 €", "900 €", "15 % : 4 500 € · Hybride : 3 500 €"],
          ]}
        />

        <p>
          Ici, l’hybride rejoint le forfait à 4 000 € de média. Le modèle à 15 %
          rejoint le forfait à 6 000 €, puis l’hybride à 10 000 €. Ces
          croisements ne suffisent pas à choisir : vérifiez aussi le travail
          réellement inclus.
        </p>

        <h2 id="socles">3. Trois budgets complets sur 3, 6 et 12 mois</h2>

        <p>
          Les trois cas ci-dessous sont des{" "}
          <strong>exemples illustratifs fictifs</strong>. Ils ne décrivent aucun
          client, aucun devis reçu et aucun prix moyen. Les dépenses externes
          sont exprimées hors taxes ; le temps interne, qui n’est pas une
          facture, est valorisé à 44,2 € par heure,{" "}
          <a
            href="https://www.insee.fr/fr/statistiques/2381340"
            target="_blank"
            rel="noreferrer"
          >
            coût 2025 publié par l’Insee
          </a>{" "}
          pour les services marchands dans les entreprises de 10 salariés ou
          plus. Remplacez-le par votre coût chargé réel.
        </p>

        <GuideTable
          headers={[
            "Exemple fictif",
            "Période",
            "Budget complet arrondi à l’euro",
          ]}
          rows={[
            ["A — Recherche Google locale, forfait fixe", "3 mois", "7 219 €"],
            ["A — Recherche Google locale, forfait fixe", "6 mois", "11 534 €"],
            [
              "A — Recherche Google locale, forfait fixe",
              "12 mois",
              "20 164 €",
            ],
            ["B — SaaS B2B, 15 % du média", "3 mois", "19 109 €"],
            ["B — SaaS B2B, 15 % du média", "6 mois", "31 322 €"],
            ["B — SaaS B2B, 15 % du média", "12 mois", "55 748 €"],
            ["C — E-commerce, hybride", "3 mois", "27 099 €"],
            ["C — E-commerce, hybride", "6 mois", "47 880 €"],
            ["C — E-commerce, hybride", "12 mois", "89 440 €"],
          ]}
        />

        <h3>Exemple A : entreprise locale, annonces sur la recherche Google</h3>
        <FormulaBox>{`Coûts initiaux =
  mise en route 750 € + suivi des demandes 600 € + page 1 200 €
+ 8 h internes × 44,2 € = 2 903,60 €

Récurrent mensuel =
  média 900 € + gestion 450 €
+ 2 h internes × 44,2 € = 1 438,40 €

Total chiffré à 6 mois = 2 903,60 + (6 × 1 438,40) = 11 534 €`}</FormulaBox>
        <p>
          Textes d’annonces et absence d’outil payant sont supposés. Page,
          appels suivis, licences, taxes et hausse de budget restent à
          confirmer.
        </p>

        <h3>Exemple B : acquisition de prospects pour un SaaS B2B</h3>
        <FormulaBox>{`Coûts initiaux =
  mise en route 900 € + liaison au logiciel commercial (CRM) 2 400 € + page 2 000 €
+ créations initiales 800 € + 18 h internes × 44,2 €
= 6 895,60 €

Récurrent mensuel =
  média 3 000 € + gestion 15 % = 450 €
+ créations 300 € + outils 100 € + 5 h internes × 44,2 €
= 4 071 €`}</FormulaBox>
        <p>
          La mesure relie ici le compte aux prospects qualifiés ou signés. Le
          logiciel de gestion de la relation client (CRM), l’équipe commerciale
          et le contenu de démonstration sont exclus.
        </p>

        <h3>Exemple C : catalogue e-commerce et modèle hybride</h3>
        <FormulaBox>{`Coûts initiaux =
  mise en route 1 200 € + suivi des ventes et du catalogue 1 800 € + page 1 500 €
+ créations initiales 1 200 € + 14 h internes × 44,2 €
= 6 318,80 €

Récurrent mensuel =
  média 5 000 € + (500 € + 10 % du média) = 1 000 €
+ créations 600 € + outils 150 € + 4 h internes × 44,2 €
= 6 926,80 €`}</FormulaBox>
        <p>
          Marge, retours, promotions, stock et frais de paiement changent la
          rentabilité. Le ROAS — chiffre d’affaires attribué divisé par la
          dépense publicitaire — ne remplace pas un calcul de marge.
        </p>

        <h2 id="rentabilite">4. Vérifiez si la campagne peut être rentable</h2>

        <p>
          Le coût par clic (CPC) répond à « combien avons-nous payé la visite ?
          ». Le coût par prospect (CPL) répond à « combien avons-nous payé la
          demande qualifiée ? ». Le coût par acquisition (CPA) doit ensuite
          préciser s’il mesure un formulaire, un prospect ou un client. Pour une
          entreprise de services, le seul seuil durable part de la marge par
          vente et du taux de transformation commercial.
        </p>

        <FormulaBox>{`CPL média = budget média ÷ prospects qualifiés

CPL complet =
  (média + gestion + coûts récurrents + frais de lancement amortis) ÷ prospects qualifiés

CPA client = coût complet ÷ nouveaux clients attribuables

CPL média maximal à l'équilibre =
  (marge par vente × taux prospect qualifié → vente)
  − (coûts non média mensuels ÷ prospects qualifiés visés)`}</FormulaBox>

        <p>
          <strong>Exemple illustratif fictif :</strong> une vente apporte 2 400
          € de marge, 20 % des prospects qualifiés signent, et la campagne doit
          en produire 15. La valeur de marge attendue par prospect est 2 400 ×
          20 % = 480 €. Si gestion, outils et frais de lancement répartis
          coûtent 1 200 € par mois, ils absorbent 80 € par prospect. Le CPL
          média maximal à l’équilibre est donc 400 €, soit 6 000 € de média pour
          15 prospects.
        </p>

        <InfoBox variant="emerald" title="Contrôle inverse du calcul">
          Quinze prospects × 20 % donnent trois ventes. Trois ventes × 2 400 €
          produisent 7 200 € de marge. Les coûts valent 6 000 € de média + 1 200
          € hors média = 7 200 €. Le résultat est exactement nul : 400 € est un
          seuil d’équilibre, pas un objectif recommandé. Pour dégager un
          bénéfice et absorber l’incertitude, la cible opérationnelle doit être
          inférieure.
        </InfoBox>

        <p>
          Si vous ne connaissez ni la marge, ni le taux de qualification, ni le
          taux de signature, commencez par les mesurer. Augmenter le budget dans
          l’espoir que l’algorithme découvrira votre économie unitaire ne
          remplace pas ce travail. Avant toute hausse, utilisez la méthode de l’
          <Link href="/guides/audit-google-ads-que-verifier">
            audit Google Ads
          </Link>{" "}
          pour rapprocher conversions de plateforme, prospects qualifiés et
          ventes.
        </p>

        <p>
          Si la question porte d’abord sur l’ordre d’investissement, utilisez le{" "}
          <Link href="/guides/seo-ou-google-ads">guide SEO ou Google Ads</Link>{" "}
          avant de chiffrer la campagne. Il peut vous conduire vers la
          publicité, le référencement naturel, les deux avec des objectifs
          distincts, ou vous conseiller d’attendre tant que l’offre, la page ou
          le suivi des demandes n’est pas prêt.
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
          Pour la génération de prospects, Google Ads permet de distinguer une
          action principale utilisée pour les enchères d’une action secondaire
          observée. Sa documentation prévoit aussi l’import de{" "}
          <a
            href="https://support.google.com/google-ads/answer/11459091?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            prospects qualifiés et convertis
          </a>{" "}
          depuis un CRM ou un système interne. Le devis doit dire si cette
          boucle est incluse, simplement conseillée ou impossible avec les
          outils actuels.
        </p>

        <h2 id="prestataire">
          5. Gérer en interne, avec un freelance ou une agence
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
          Sa documentation sur les comptes administrateur précise que le compte
          client reste propriétaire de ses données, même lorsqu’un compte
          administrateur reçoit des droits étendus. La configuration la plus
          réversible est donc simple : l’entreprise conserve un accès
          administrateur, la facturation média est lisible, et le prestataire se
          connecte par association plutôt qu’avec un identifiant partagé.
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
          sur son propre prix. Au 20 juillet 2026, la page{" "}
          <Link href="/services/publicite-en-ligne">publicité en ligne</Link>{" "}
          affiche un audit à 1 500 € HT, puis trois scénarios de pilotage à 1
          800 €, 3 500 € et 4 500 € HT par mois. Le budget média reste séparé.
          Le devis précise suivi des conversions, créations, outils,
          intervenants, engagement et responsabilités réellement inclus.
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

        <h2 id="checklist">6. La checklist pour comparer deux devis</h2>

        <p>
          Copiez cette liste dans un tableur. Placez une colonne par offre, puis
          une colonne « réponse précise ». Une mention orale, « inclus » ou «
          selon besoin » ne suffit pas : demandez un montant, une limite, un
          responsable ou un document à recevoir.
        </p>

        <ol>
          <li>
            <strong>Compte et facturation.</strong> Qui crée le compte, qui
            possède l’accès administrateur et qui reçoit la facture Google ?
          </li>
          <li>
            <strong>Budget média.</strong> Quel montant, quelles campagnes et
            quelle validation avant augmentation ?
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
            qualifié (CPL), coût par client acquis (CPA), marge et délai de
            transformation.
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
          Prenez votre devis actuel et inscrivez les sept postes du début de ce
          guide. Calculez les honoraires à 3, 6 et 12 mois avec le même budget
          média. Ajoutez le temps interne, puis refaites le seuil de CPL avec
          votre marge et votre taux de signature. Si une donnée manque,
          demandez-la avant de comparer le total — ou avant de lancer.
        </InfoBox>

        <GuideInlineCTA
          title="Obtenir un budget Google Ads complet et compréhensible"
          description="Indiquez votre offre, votre marge, le budget que vous pensez verser à Google et les outils que vous utilisez déjà. Nous chiffrons séparément la gestion, le suivi des ventes, les pages et les créations, puis nous vous disons si une gestion mensuelle est réellement adaptée."
          tags={[
            "Budget Google séparé des honoraires",
            "Coût total lisible",
            "Réponse adaptée à votre situation",
          ]}
          ctaLabel="Demander mon budget Google Ads"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources consultées</h2>

        <p>Sources techniques et économiques vérifiées le 20 juillet 2026 :</p>

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
              href="https://support.google.com/google-ads/answer/10993988?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — conversions principales et secondaires
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/11459091?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — prospects qualifiés et convertis
            </a>
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/10029210?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Google Ads — import des conversions hors connexion
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
          fictifs hors taxes applicables et sans garantie de performance. Un
          devis, le paramétrage réel du compte et vos données de marge restent
          nécessaires pour engager une dépense.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
