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
        alt: "Prix de gestion Google Ads : média, honoraires et coût total",
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
      "Il n’existe pas de moyenne française publique assez homogène. Les cinq tarifs propres relevés le 20 juillet 2026 utilisent des points de départ et des formules très différents, sans couvrir les mêmes livrables. Comparez donc média, gestion, mise en route, tracking, pages, créations, outils et temps interne sur le même horizon.",
  },
  {
    question: "Les honoraires d’agence incluent-ils le budget versé à Google ?",
    answer:
      "Ne le supposez jamais. Le montage le plus lisible sépare le média facturé sur le compte du client et les honoraires. Le devis doit indiquer montant Google, formule de gestion, minimum, plafond, taxes et services tiers. En cas de refacturation, exigez le détail et les accès.",
  },
  {
    question: "Forfait fixe ou pourcentage du budget média : que choisir ?",
    answer:
      "Aucun modèle n’est supérieur par principe. Le forfait est prévisible ; le pourcentage évolue avec la dépense ; l’hybride combine socle et variable. Appliquez chaque formule à plusieurs budgets, puis comparez le périmètre, les personnes mobilisées et la fréquence de pilotage.",
  },
  {
    question: "Quel budget Google Ads minimum faut-il prévoir ?",
    answer:
      "Il n’existe pas de seuil universel. Il dépend du coût par clic, du volume nécessaire, de la conversion, de la marge et de la gestion. Si les honoraires absorbent l’enveloppe, un test interne, un audit ponctuel ou un report peut être plus rationnel.",
  },
  {
    question: "Qui doit être propriétaire du compte Google Ads ?",
    answer:
      "L’entreprise doit conserver un accès administrateur qu’elle contrôle. Google permet d’associer puis de dissocier le prestataire. Le devis inventorie aussi paiement, balises, audiences, pages, créations, tableaux de bord et droits : l’historique financé par le client doit rester accessible.",
  },
  {
    question: "Le tracking et la page de destination sont-ils inclus ?",
    answer:
      "Cela dépend du devis. Une balise de formulaire n’équivaut pas à un retour des ventes du CRM ; une « optimisation » n’équivaut pas à concevoir et développer une page. Demandez événements, outils, tests, pages, variantes, droits et responsables.",
  },
  {
    question:
      "Une agence peut-elle garantir un ROAS ou un nombre de prospects ?",
    answer:
      "Elle peut engager livrables, contrôles, rythme et alertes, pas contrôler seule concurrence, demande, offre, page et transformation commerciale. Une projection doit rester un scénario assorti d’hypothèses et d’une condition d’arrêt, jamais une garantie de revenu.",
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
        heroDescription="Budget média, honoraires, mise en route, suivi des conversions, page, créations, outils et temps interne : trois scénarios sur 3, 6 et 12 mois pour comparer les devis et tester le coût par prospect."
        heroAction={{ href: "#socles", label: "Voir les trois budgets" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Publié le ${formatGuideDate(guide.datePublished)}`}
        keyPoints={[
          {
            number: "01",
            title: "7 postes à séparer",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Socles sur 3, 6 et 12 mois",
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
            Le prix d’une campagne Google Ads n’est ni le budget versé à Google,
            ni le forfait de l’agence : c’est la somme des deux, plus tout ce
            qui rend les clics mesurables et convertibles.
          </strong>{" "}
          Pour comparer deux devis, posez sept lignes sur le même horizon :
          média, gestion, mise en route, mesure, page, créations et outils.
          Ajoutez le temps interne et une sortie documentée. Une inconnue reste
          « à confirmer » ; jamais zéro.
        </p>

        <InfoBox
          variant="blue"
          title="La réponse courte : additionnez avant de comparer"
        >
          <FormulaBox>{`Coût complet Google Ads sur une période =
  budget média facturé par la plateforme
+ honoraires de gestion
+ audit, stratégie et mise en route
+ suivi des conversions et liaison avec le logiciel de gestion de la relation client (CRM)
+ création ou amélioration des pages de destination
+ annonces, images et vidéos
+ outils, hébergement et licences
+ temps interne de validation et de suivi
+ coût de passation ou de sortie`}</FormulaBox>
          <p className="mb-0">
            Les offres publiques relevées en France ne couvrent pas toutes ces
            lignes. Leur dispersion ne forme donc pas une « moyenne de marché ».
            Elle prouve seulement qu’un prix mensuel sans périmètre est
            impossible à interpréter.
          </p>
        </InfoBox>

        <InfoBox variant="amber" title="Le vocabulaire utile, sans jargon">
          <strong>Budget média</strong> : argent consommé par Google pour
          diffuser les annonces. <strong>Honoraires</strong> : rémunération de
          la personne ou de l’équipe qui pilote. <strong>Mise en route</strong>,
          souvent appelée <em>setup</em> : analyse, structure et lancement du
          compte. <strong>Page de destination</strong>, ou <em>landing page</em>
          : page ouverte après le clic. <strong>Conversion</strong> : action
          utile mesurée, par exemple un achat ou une demande.{" "}
          <strong>Suivi des conversions</strong>, ou <em>tracking</em> :
          dispositif qui relie ces actions aux campagnes. <strong>CPL</strong> :
          coût par prospect. <strong>CPA</strong> : coût par acquisition, dont
          la définition doit préciser s’il s’agit d’un formulaire, d’un prospect
          qualifié ou d’un client. <strong>ROAS</strong> : valeur de conversion
          divisée par la dépense média ; il n’intègre pas automatiquement
          honoraires, marge et coûts de production.
        </InfoBox>

        <GuideToc
          items={[
            { id: "sept-postes", label: "1. Les sept factures d’une campagne" },
            {
              id: "tarifs-publics",
              label: "2. Ce que montrent cinq tarifs publics français",
            },
            {
              id: "modeles",
              label: "3. Forfait, pourcentage, hybride ou temps passé",
            },
            {
              id: "socles",
              label: "4. Trois socles chiffrés sur 3, 6 et 12 mois",
            },
            { id: "rentabilite", label: "5. CPL, CPA et seuil de rentabilité" },
            {
              id: "mesure",
              label: "6. Pourquoi mesure, pages et créations coûtent",
            },
            { id: "prestataire", label: "7. Interne, freelance ou agence" },
            { id: "propriete", label: "8. Compte, données et réversibilité" },
            {
              id: "offre-hagnere",
              label: "9. Où se situe l’offre Hagnéré Code",
            },
            {
              id: "checklist",
              label: "10. La checklist pour comparer deux devis",
            },
            { id: "sources", label: "Sources consultées" },
          ]}
        />

        <h2 id="sept-postes">1. Les sept factures d’une campagne Google Ads</h2>

        <p>
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

        <GuideTable
          headers={["Poste", "Ce qu’il doit décrire", "Erreur de comparaison"]}
          rows={[
            [
              "Budget média",
              "Montant facturé par Google, campagnes concernées, règle d’augmentation",
              "Le confondre avec les honoraires",
            ],
            [
              "Gestion",
              "Formule, fréquence d’optimisation, campagnes, pays et personnes",
              "Comparer deux forfaits sans comparer la charge",
            ],
            [
              "Mise en route",
              "Audit, recherche, structure, annonces, tests d’acceptation (recette) et lancement",
              "Supposer qu’elle est incluse dans le premier mois",
            ],
            [
              "Mesure",
              "Conversions, consentement, tests, CRM et surveillance",
              "Payer pour un formulaire sans savoir s’il devient une vente",
            ],
            [
              "Page de destination",
              "Conception, rédaction, développement, variantes et maintenance",
              "Lire « optimisation » comme une refonte complète",
            ],
            [
              "Créations",
              "Textes, images, vidéos, volumes, validations et droits",
              "Oublier le renouvellement des formats",
            ],
            [
              "Outils et exploitation",
              "Connecteurs, hébergement, tableau de bord, alertes et passation",
              "Traiter les licences et le temps interne comme gratuits",
            ],
          ]}
        />

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
              "Périmètre au-delà du point de départ et livrables de page",
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
          Il ne permet pas d’annoncer que « le marché coûte de 90 à 990 € par
          mois ». Les plans ne couvrent ni le même volume, ni les mêmes
          compétences, ni les mêmes comptes. Il permet seulement d’exiger des
          lignes séparées et de refaire la formule avec votre budget.
        </InfoBox>

        <h2 id="modeles">
          3. Forfait, pourcentage, hybride ou travail au temps passé (régie)
        </h2>

        <GuideTable
          headers={["Modèle", "Calcul", "Bon usage", "Point de vigilance"]}
          rows={[
            [
              "Forfait fixe",
              "Montant mensuel défini",
              "Charge assez stable et périmètre écrit",
              "Prévoir ce qui se passe si pays, produits ou campagnes augmentent",
            ],
            [
              "% du budget média",
              "Média dépensé × taux",
              "Pilotage dont la charge évolue réellement avec le volume",
              "Les honoraires montent automatiquement ; prévoir minimum et plafond",
            ],
            [
              "Hybride",
              "Socle fixe + pourcentage",
              "Garantir une capacité minimale puis accompagner la croissance",
              "Additionner les deux éléments à chaque niveau de budget",
            ],
            [
              "Régie / tarif journalier",
              "Jours consommés × tarif journalier",
              "Audit, reprise ou besoin variable avec liste de travaux priorisée",
              "Définir priorité, plafond de jours et preuve du temps livré",
            ],
          ]}
        />

        <p>
          Comparez trois devis fictifs à périmètre supposé identique, avec des
          montants hors taxes : 900 € fixes, 15 % du média, et 500 € + 10 % du
          média. Cette hypothèse n’est pas une grille Hagnéré Code ni un relevé
          de marché ; elle sert à voir la mécanique.
        </p>

        <GuideTable
          headers={[
            "Budget média mensuel",
            "Forfait 900 €",
            "15 % du média",
            "500 € + 10 %",
          ]}
          rows={[
            ["1 000 €", "900 €", "150 €", "600 €"],
            ["5 000 €", "900 €", "750 €", "1 000 €"],
            ["10 000 €", "900 €", "1 500 €", "1 500 €"],
            ["30 000 €", "900 €", "4 500 €", "3 500 €"],
          ]}
        />

        <p>
          Ici, l’hybride rejoint le forfait à 4 000 € de média. Le modèle à 15 %
          rejoint le forfait à 6 000 €, puis l’hybride à 10 000 €. Ces
          croisements ne départagent pas les devis : le périmètre et la charge
          restent décisifs.
        </p>

        <h2 id="socles">4. Trois socles chiffrés sur 3, 6 et 12 mois</h2>

        <p>
          Les trois cas ci-dessous sont des{" "}
          <strong>exemples illustratifs fictifs</strong>. Ils ne décrivent aucun
          client, aucun devis reçu et aucun prix moyen. Les dépenses externes
          sont exprimées hors taxes ; le temps interne, qui n’est pas une
          facture, est valorisé à 44,2 € par heure, coût 2025 publié par l’Insee
          pour les services marchands dans les entreprises de 10 salariés ou
          plus. Remplacez-le par votre coût chargé réel.
        </p>

        <GuideTable
          headers={[
            "Socle fictif",
            "Coûts initiaux",
            "Coût mensuel",
            "3 mois",
            "6 mois",
            "12 mois",
          ]}
          rows={[
            [
              "A — Recherche Google locale, forfait fixe",
              "2 903,60 €",
              "1 438,40 €",
              "7 218,80 €",
              "11 534 €",
              "20 164,40 €",
            ],
            [
              "B — SaaS B2B, 15 % du média",
              "6 895,60 €",
              "4 071 €",
              "19 108,60 €",
              "31 321,60 €",
              "55 747,60 €",
            ],
            [
              "C — E-commerce, hybride",
              "6 318,80 €",
              "6 926,80 €",
              "27 099,20 €",
              "47 879,60 €",
              "89 440,40 €",
            ],
          ]}
        />

        <h3>Socle A : entreprise locale, annonces sur la recherche Google</h3>
        <FormulaBox>{`Coûts initiaux =
  setup 750 € + tracking 600 € + landing 1 200 €
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

        <h3>Socle B : acquisition de prospects pour un SaaS B2B</h3>
        <FormulaBox>{`Coûts initiaux =
  setup 900 € + tracking/CRM 2 400 € + landing 2 000 €
+ créations initiales 800 € + 18 h internes × 44,2 €
= 6 895,60 €

Récurrent mensuel =
  média 3 000 € + gestion 15 % = 450 €
+ créations 300 € + outils 100 € + 5 h internes × 44,2 €
= 4 071 €`}</FormulaBox>
        <p>
          La mesure relie ici le compte aux prospects qualifiés ou signés. CRM
          payant, équipe commerciale et contenu de démonstration sont exclus.
        </p>

        <h3>Socle C : catalogue e-commerce et modèle hybride</h3>
        <FormulaBox>{`Coûts initiaux =
  setup 1 200 € + tracking/flux 1 800 € + landing 1 500 €
+ créations initiales 1 200 € + 14 h internes × 44,2 €
= 6 318,80 €

Récurrent mensuel =
  média 5 000 € + (500 € + 10 % du média) = 1 000 €
+ créations 600 € + outils 150 € + 4 h internes × 44,2 €
= 6 926,80 €`}</FormulaBox>
        <p>
          Marge, retours, promotions, stock et frais de paiement changent la
          rentabilité. Un ROAS sur le chiffre d’affaires ne remplace pas la
          marge.
        </p>

        <h2 id="rentabilite">
          5. Du coût par prospect au seuil de rentabilité
        </h2>

        <p>
          Le coût par clic (CPC) répond à « combien avons-nous payé la visite ?
          ». Le CPL répond à « combien avons-nous payé le prospect ? ». Le CPA
          doit ensuite préciser l’étape achetée. Pour une entreprise de
          services, le seul seuil durable part de la marge par vente et du taux
          de transformation commercial.
        </p>

        <FormulaBox>{`CPL média = budget média ÷ prospects qualifiés

CPL complet =
  (média + gestion + coûts récurrents + setup amorti) ÷ prospects qualifiés

CPA client = coût complet ÷ nouveaux clients attribuables

CPL média maximal à l'équilibre =
  (marge par vente × taux prospect qualifié → vente)
  − (coûts non média mensuels ÷ prospects qualifiés visés)`}</FormulaBox>

        <p>
          <strong>Exemple illustratif fictif :</strong> une vente apporte 2 400
          € de marge, 20 % des prospects qualifiés signent, et la campagne doit
          en produire 15. La valeur de marge attendue par prospect est 2 400 ×
          20 % = 480 €. Si gestion, outils et setup amorti coûtent 1 200 € par
          mois, ils absorbent 80 € par prospect. Le CPL média maximal à
          l’équilibre est donc 400 €, soit 6 000 € de média pour 15 prospects.
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
          Si la question porte d’abord sur l’ordre d’investissement, utilisez la{" "}
          <Link href="/guides/seo-ou-google-ads">
            matrice SEO ou Google Ads
          </Link>{" "}
          avant de chiffrer la campagne. Elle peut conclure à Ads, au SEO, à une
          combinaison aux rôles séparés ou au report tant que l’offre, la page
          ou la mesure n’est pas prête.
        </p>

        <h2 id="mesure">
          6. Pourquoi tracking, page et créations ne sont pas des suppléments
          décoratifs
        </h2>

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

        <GuideTable
          headers={["Brique", "Preuve de livraison", "Question économique"]}
          rows={[
            [
              "Mesure Web",
              "Événements testés, reçus une seule fois, valeur et consentement documentés",
              "Quelle action guide réellement les enchères ?",
            ],
            [
              "Retour CRM",
              "Prospect qualifié et vente importés, rejets surveillés",
              "Le compte optimise-t-il des formulaires ou des clients ?",
            ],
            [
              "Page de destination",
              "Message, action, mobile, vitesse et formulaire recettés",
              "Une nouvelle page coûte-t-elle moins que des clics perdus ?",
            ],
            [
              "Créations",
              "Nombre, formats, droits, calendrier et validation",
              "Qui paie le renouvellement et qui possède les fichiers ?",
            ],
            [
              "Surveillance",
              "Seuils, alertes, destinataires et délai cible écrits",
              "Qui agit si la mesure casse ou si la dépense dérape ?",
            ],
          ]}
        />

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
          7. Gérer en interne, avec un freelance ou une agence
        </h2>

        <GuideTable
          headers={[
            "Option",
            "Coût à calculer",
            "Bon choix si…",
            "Risque à couvrir",
          ]}
          rows={[
            [
              "Interne",
              "Heures × coût chargé + outils + formation + contrôle",
              "Compte simple, personne formée, temps réellement réservé",
              "Priorité sacrifiée, absence et apprentissage non budgétés",
            ],
            [
              "Freelance",
              "Forfait, jours ou % + éventuels spécialistes externes",
              "Périmètre resserré et besoin d’un interlocuteur expert direct",
              "Continuité, tracking, création et remplacement à préciser",
            ],
            [
              "Agence",
              "Setup + gestion + licences + productions hors forfait",
              "Plusieurs compétences, canaux, marchés ou besoin de continuité",
              "Savoir qui travaille vraiment et à quelle fréquence",
            ],
            [
              "Audit puis autonomie",
              "Mission ponctuelle + temps interne d’exécution",
              "Petit budget, équipe capable d’appliquer une feuille de route",
              "Plan obsolète si personne ne suit les changements",
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

        <h2 id="propriete">8. Compte, données et réversibilité</h2>

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
            landing pages, scripts et connecteurs.
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

        <h2 id="offre-hagnere">9. Où se situe l’offre Hagnéré Code</h2>

        <p>
          Hagnéré Code vend cette prestation et n’est donc pas une source neutre
          sur son propre prix. Au 20 juillet 2026, la page{" "}
          <Link href="/services/publicite-en-ligne">publicité en ligne</Link>{" "}
          affiche un audit à 1 500 € HT, puis trois scénarios de pilotage à 1
          800 €, 3 500 € et 4 500 € HT par mois. Le budget média reste séparé.
          Le devis précise tracking, créations, outils, intervenants, engagement
          et responsabilités réellement inclus.
        </p>

        <GuideTable
          headers={[
            "Scénario public Hagnéré",
            "Prix affiché",
            "À envisager si…",
            "Cas probablement inadapté",
          ]}
          rows={[
            [
              "Audit Ads",
              "1 500 € HT ponctuels",
              "Compte existant, besoin d’un diagnostic et d’une feuille de route",
              "Vous cherchez uniquement une certification ou un rapport automatique",
            ],
            [
              "Starter",
              "1 800 € HT/mois",
              "1 à 2 canaux, tracking et pilotage structurés à cadrer",
              "Le budget média est faible et une campagne de recherche simple suffit",
            ],
            [
              "Scale / Premium",
              "3 500 à 4 500 € HT/mois",
              "Multi-canaux, données CRM, créations et gouvernance plus complexes",
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

        <GuideInlineCTA
          title="Cadrer le budget complet avant d’ouvrir les campagnes"
          description="Décrivez votre offre, votre marge, le budget média envisagé et vos outils actuels. Nous séparons gestion, tracking, pages et créations, puis nous vous disons aussi si un audit ponctuel, un freelance ou une gestion interne paraît plus proportionné."
          tags={[
            "Budget et périmètre séparés",
            "Cas adaptés et inadaptés explicités",
            "Objectif : prochain jour ouvré · délai non garanti",
          ]}
          ctaLabel="Cadrer mon budget Ads"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="checklist">10. La checklist pour comparer deux devis</h2>

        <p>
          Copiez cette liste dans un tableur. Placez une colonne par offre, puis
          une colonne « preuve ». Une réponse orale, « inclus » ou « selon
          besoin » ne suffit pas : demandez un montant, une limite, un
          responsable ou un livrable vérifiable.
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
            <strong>Formule d’honoraires.</strong> Forfait, pourcentage, socle,
            minimum, plafond et assiette exacte.
          </li>
          <li>
            <strong>Mise en route.</strong> Audit, stratégie, recherche,
            structure, annonces, import et recette inclus ou séparés.
          </li>
          <li>
            <strong>Périmètre.</strong> Pays, langues, campagnes, produits,
            marques et nombre de pages.
          </li>
          <li>
            <strong>Conversions.</strong> Action principale, actions
            secondaires, valeurs, déduplication et test de recette.
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
            <strong>Indicateurs.</strong> CPC et conversions, mais aussi CPL
            qualifié, CPA client, marge et délai de transformation.
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
