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

const guide = getGuide("calculer-cout-par-lead-google-ads");

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
        alt: "Même cohorte Google Ads calculée à 35, 250 et 1 000 euros selon le dénominateur",
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
      name: "Coût par lead Google Ads",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quelle différence entre coût par conversion et coût par lead ?",
    answer:
      "Le coût par conversion de Google Ads dépend des actions configurées dans le compte : formulaire, appel, achat ou événement importé. Le coût par lead brut divise les dépenses par des demandes uniques attribuables selon votre règle. Les deux nombres ne coïncident que si l’action et le dénominateur décrivent exactement les mêmes demandes.",
  },
  {
    question: "Faut-il inclure les frais d’agence dans le CPL ?",
    answer:
      "Oui dans le coût complet lorsqu’ils concernent la cohorte, tout en gardant la dépense média séparée. Distinguez aussi les coûts fixes ou initiaux des coûts qui augmentent avec le budget : cette séparation évite de croire que chaque euro supplémentaire portera la même charge.",
  },
  {
    question: "Comment compter un doublon de formulaire ?",
    answer:
      "Définissez une règle avant le calcul : même personne et même besoin dans une fenêtre cohérente, par exemple. Rapprochez les répétitions sous un identifiant interne, sans supprimer l’historique. La règle doit être la même pour la cohorte comparée.",
  },
  {
    question: "Le CPA cible de Google est-il mon CPL maximal rentable ?",
    answer:
      "Non. Le CPA cible est un objectif d’enchères moyen fondé sur l’action configurée. Votre seuil économique dépend de la marge contributive prudente, du taux de qualification, du taux de vente et des coûts exclus de la dépense média.",
  },
  {
    question: "Que calculer s’il n’y a aucun client ?",
    answer:
      "Le CAC et le taux de vente ne sont pas calculables. Affichez « données insuffisantes à ce stade », jamais 0 €. Vérifiez si le cycle de vente est terminé ; sinon attendez. S’il est terminé, traitez l’absence de vente comme un signal pour réduire, suspendre ou réparer avant de dépenser plus.",
  },
  {
    question: "Peut-on utiliser la valeur vie client pour relever le seuil ?",
    answer:
      "Seulement avec des données suffisamment fiables sur la durée, la rétention, la marge et les coûts de service. Une projection commerciale optimiste n’est pas une valeur observée. Pour commencer, une marge contributive prudente par vente réellement définie est souvent plus lisible.",
  },
];

const cohortRows = [
  [
    "Dépense média",
    "1 400 €",
    "Facture ou interface rapprochée de la même période et des mêmes campagnes.",
  ],
  [
    "Coûts fixes affectés",
    "600 €",
    "Gestion, page et mesure attribuées une seule fois à cette cohorte fictive.",
  ],
  [
    "Demandes uniques",
    "40",
    "Formulaires ou appels dédupliqués selon une règle écrite.",
  ],
  [
    "Leads qualifiés",
    "8",
    "Demandes qui respectent les critères écrits de l’entreprise.",
  ],
  [
    "Nouveaux clients",
    "2",
    "Ventes signées selon la définition annoncée, dans la cohorte fermée.",
  ],
  [
    "Marge contributive prudente",
    "2 000 € par client",
    "Montant fictif avant acquisition, défini sans valeur vie non prouvée.",
  ],
];

const decisionRows = [
  [
    "Cycle commercial encore ouvert",
    "Attendre et mettre les statuts à jour.",
    "Ne pas classer les dossiers en pertes pour fermer artificiellement le mois.",
  ],
  [
    "Données non dédupliquées ou coûts mélangés",
    "Réparer la cohorte avant tout verdict.",
    "Aucun CPL fiable tant que numérateur et dénominateur ne couvrent pas le même groupe.",
  ],
  [
    "Coût sous le seuil prudent et qualité stable",
    "Augmenter par étape si l’équipe peut traiter les demandes.",
    "La cohorte suivante peut coûter plus cher ou être moins qualifiée.",
  ],
  [
    "Coût proche du seuil avec peu de dossiers",
    "Maintenir le test ou réduire l’incertitude.",
    "Ne pas appeler un faible écart « rentable » sans charges et délai complets.",
  ],
  [
    "CAC supérieur à la marge sur une cohorte mature",
    "Réduire, suspendre ou refondre avant de dépenser plus.",
    "Vérifier les ventes tardives et les coûts, sans chercher un benchmark rassurant.",
  ],
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
          { label: "Coût par lead Google Ads" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre compte Google affiche 35 € par conversion. Mais si 40 demandes donnent 8 leads qualifiés et 2 clients, le coût complet atteint 250 € par lead qualifié et 1 000 € par client. Calculez toujours avec le bon dénominateur."
        heroAction={{
          href: "#exemple",
          label: "Rejouer les calculs",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "35 €",
            title: "CPL média brut",
            description: "",
            color: "blue",
          },
          {
            number: "250 €",
            title: "Coût par qualifié",
            description: "",
            color: "violet",
          },
          {
            number: "1 000 €",
            title: "CAC observé",
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
            href: "/guides/budget-google-ads-pme",
            label: "Fixer un budget test Google Ads",
          },
          {
            href: "/guides/suivi-conversions-google-ads",
            label: "Relier clics, demandes, devis et ventes",
          },
          {
            href: "/guides/leads-google-ads-non-qualifies",
            label: "Diagnostiquer les leads non qualifiés",
          },
          {
            href: "/guides/pourquoi-google-ads-ne-convertit-pas",
            label: "Chercher pourquoi aucune vente n’arrive",
          },
        ]}
        faqTitle="Questions fréquentes sur le coût par lead Google Ads"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <p className="lead">
          Google peut annoncer 35 € par conversion alors qu’un prospect utile
          vous coûte 250 € et un nouveau client 1 000 €. Les trois nombres
          peuvent décrire la même cohorte : 1 400 € de média donnent 40 demandes
          uniques, tandis que 2 000 € de coût complet donnent 8 leads qualifiés
          et 2 clients. Ne modifiez pas le budget tant que vous n’avez pas fermé
          une cohorte, dédupliqué les demandes, appliqué vos critères de
          qualification et rapproché tous les coûts. Si le dénominateur vaut
          zéro, le résultat n’est jamais 0 € : il est « données insuffisantes à
          ce stade ».
        </p>

        <InfoBox
          variant="emerald"
          title="Le dénominateur raconte ce que le budget a réellement acheté"
        >
          Une conversion publicitaire, une demande unique, un lead qualifié et
          un client ne sont pas synonymes. Écrivez leur définition avant
          d’ouvrir la calculatrice, puis conservez la même période, les mêmes
          campagnes et les mêmes dossiers jusqu’au résultat commercial.
        </InfoBox>

        <p>
          Ce guide n’utilise aucun benchmark sectoriel. Il ne prouve pas
          l’attribution causale d’une vente à une annonce et ne fournit pas
          d’avis juridique sur le consentement. Il vous aide à réconcilier votre
          dépense avec vos propres demandes, critères, ventes et marges avant de
          choisir d’augmenter, maintenir, réduire ou suspendre.
        </p>

        <GuideToc
          items={[
            { id: "populations", label: "Séparer quatre populations" },
            { id: "cohorte", label: "Fermer une cohorte comparable" },
            { id: "couts", label: "Rassembler les bons coûts" },
            { id: "formules", label: "Appliquer les six formules" },
            {
              id: "zeros",
              label: "Traiter chaque dénominateur nul",
            },
            { id: "seuil", label: "Calculer un CPL maximal prudent" },
            { id: "exemple", label: "Rejouer l’exemple fictif" },
            { id: "decision", label: "Décider du budget" },
            { id: "action", label: "Préparer la prochaine cohorte" },
            { id: "fit", label: "Savoir quand demander de l’aide" },
            { id: "sources", label: "Sources officielles et limites" },
          ]}
        />

        <h2 id="populations">Séparez quatre populations avant de diviser</h2>
        <p>
          Dans Google Ads, une conversion est l’action que vous avez choisi de
          compter. Une action principale alimente généralement la colonne «
          Conversions » et peut être utilisée par les enchères. La rendre
          principale ne transforme pas un formulaire en bon prospect ni un appel
          en client.
        </p>
        <GuideTable
          caption="Quatre dénominateurs qui ne répondent pas à la même question"
          headers={["Population", "Définition à écrire", "Erreur fréquente"]}
          rows={[
            [
              "Conversions publicitaires",
              "Actions incluses dans la colonne et leur règle de comptage.",
              "Appeler chaque événement « lead » ou « vente ».",
            ],
            [
              "Demandes uniques",
              "Personnes et besoins dédupliqués selon une règle stable.",
              "Compter deux envois ou deux appels du même besoin.",
            ],
            [
              "Leads qualifiés",
              "Demandes qui respectent les critères écrits de l’entreprise.",
              "Qualifier après coup pour améliorer le taux.",
            ],
            [
              "Nouveaux clients",
              "Ventes conclues selon la règle annoncée et la date de clôture.",
              "Compter un devis ou une intention comme une signature.",
            ],
          ]}
        />
        <p>
          Si vos événements et vos dossiers ne correspondent pas, commencez par{" "}
          <Link href="/guides/suivi-conversions-google-ads">
            rapprocher les conversions Google Ads des demandes et des ventes
          </Link>
          . Un calcul très précis sur des demandes dupliquées reste faux.
        </p>

        <h2 id="cohorte">
          Fermez une cohorte au lieu de comparer un mois de clics à un mois de
          ventes
        </h2>
        <p>
          Choisissez une période d’entrée : par exemple, toutes les demandes
          attribuables reçues du 1er au 30 avril. Suivez uniquement ces dossiers
          jusqu’à une date d’observation annoncée. N’ajoutez pas les ventes de
          demandes reçues en mars et ne retirez pas les demandes d’avril encore
          ouvertes pour améliorer le taux.
        </p>
        <ul>
          <li>fixez les campagnes et coûts inclus ;</li>
          <li>attribuez un identifiant interne à chaque demande ;</li>
          <li>rapprochez les doubles envois sans perdre l’historique ;</li>
          <li>
            marquez qualifié, non qualifié, vendu, perdu ou encore ouvert ;
          </li>
          <li>attendez le délai commercial utile avant le verdict final.</li>
        </ul>
        <p>
          Si le cycle est encore ouvert, la bonne conclusion n’est pas « CAC
          infini » ni « campagne rentable ». Écrivez « cohorte non mature »,
          conservez les statuts et fixez la prochaine date de lecture.
        </p>

        <h2 id="couts">
          Gardez le média séparé, puis calculez le coût complet
        </h2>
        <p>
          Le CPL affiché par la plateforme utilise généralement le coût
          publicitaire et les conversions incluses. Pour votre décision
          économique, rassemblez aussi les coûts réellement affectables à la
          cohorte. Montrez-les séparément : un coût initial de mesure ne se
          comporte pas comme chaque euro média ajouté.
        </p>
        <GuideTable
          caption="Numérateur à documenter"
          headers={["Coût", "À inclure si…", "À conserver séparément car…"]}
          rows={[
            [
              "Média Google Ads",
              "Il concerne les campagnes et dates de la cohorte.",
              "Il varie directement avec le budget engagé.",
            ],
            [
              "Gestion ou agence",
              "La prestation couvre la cohorte, avec TVA traitée selon votre lecture comptable.",
              "Le forfait peut ne pas augmenter euro pour euro avec le média.",
            ],
            [
              "Création ou adaptation de page",
              "Une quote-part raisonnable est affectée et expliquée.",
              "C’est souvent un coût initial ou réutilisable.",
            ],
            [
              "Mesure, appels et CRM",
              "Le coût sert le rapprochement des dossiers inclus.",
              "Il peut bénéficier à plusieurs campagnes ou périodes.",
            ],
            [
              "Temps commercial",
              "Il est réellement suivi et utile à la décision.",
              "Ne l’inventez pas pour obtenir un coût complet artificiel.",
            ],
          ]}
        />

        <h2 id="formules">Appliquez les six formules sur les mêmes lignes</h2>
        <FormulaBox>{`CPL média brut =
dépenses média / demandes uniques attribuables

Coût complet par demande =
coût complet de la campagne / demandes uniques attribuables

Coût par lead qualifié =
coût complet de la campagne / leads qualifiés

CAC observé =
coût complet de la campagne / nouveaux clients attribuables

Taux de qualification =
leads qualifiés / demandes uniques

Taux de vente des qualifiés =
nouveaux clients / leads qualifiés`}</FormulaBox>
        <p>
          Vérifiez ensuite votre calcul : si les mêmes données ne donnent pas le
          même CAC par les deux chemins, une ligne est incohérente. Cette
          vérification ne corrige ni une attribution fausse ni un dossier
          manquant ; tous les nombres doivent venir de la même cohorte et les
          deux taux doivent être écrits en valeurs décimales.
        </p>
        <FormulaBox>{`Contrôle du CAC =
coût complet par demande
/ (taux de qualification × taux de vente)

Avec l’exemple fictif :
50 € / (0,20 × 0,25)
= 50 € / 0,05
= 1 000 €`}</FormulaBox>

        <h2 id="zeros">Un dénominateur nul ne produit jamais un coût de 0 €</h2>
        <p>
          Une division par zéro n’a pas de résultat exploitable. L’interface ou
          le tableur doit afficher un état, pas un montant rassurant.
        </p>
        <GuideTable
          caption="Traitement obligatoire des cas zéro"
          headers={["Dénominateur", "Affichage exact", "Décision possible"]}
          rows={[
            [
              "0 demande unique",
              "CPL brut : données insuffisantes à ce stade.",
              "Vérifier diffusion, suivi et période ; ne pas annoncer 0 €.",
            ],
            [
              "0 lead qualifié",
              "Coût par lead qualifié et taux de vente : données insuffisantes.",
              "Lire les demandes ; corriger ou suspendre avant d’augmenter.",
            ],
            [
              "0 nouveau client",
              "CAC observé : données insuffisantes à ce stade.",
              "Attendre si le cycle est ouvert ; sinon diagnostiquer l’absence de vente.",
            ],
            [
              "0 marge prudente",
              "CPL maximal avant frais fixes : 0 € selon cette hypothèse.",
              "Ne pas financer l’acquisition tant que l’économie n’est pas redéfinie.",
            ],
          ]}
        />
        <InfoBox
          variant="amber"
          title="« Données insuffisantes » ne veut pas dire « continuer sans limite »"
        >
          Si aucun client n’a signé mais que le cycle est terminé, l’absence de
          vente est une information de gestion. Vous ne pouvez pas calculer un
          CAC fini, mais vous pouvez décider de réduire, suspendre ou réparer la
          campagne au lieu d’acheter davantage de données.
        </InfoBox>

        <h2 id="seuil">
          Calculez un CPL maximal prudent hors de l’interface Google
        </h2>
        <p>
          Commencez par une marge contributive prudente par nouveau client :
          chiffre d’affaires attendu moins coûts variables nécessaires à la
          vente et au service, selon la définition validée par votre entreprise.
          N’utilisez pas une valeur vie client sans données assez fiables sur la
          durée, la rétention et les coûts de service.
        </p>
        <FormulaBox>{`Coût d’acquisition maximal par demande =
marge contributive prudente par client
× taux de qualification
× taux de vente

CPL média maximal après frais fixes =
(marge contributive prudente × ventes attendues
− coûts fixes d’acquisition)
/ demandes attendues`}</FormulaBox>
        <p>
          Le premier seuil indique le coût total d’acquisition qu’une demande
          pourrait absorber dans ce calcul prudent. Le second réserve d’abord
          les frais fixes d’acquisition et indique ce qu’il reste pour le média.
          Aucun des deux n’est le « CPA cible » de Google : le CPA cible reste
          un objectif moyen d’enchères fondé sur l’action que vous avez
          configurée.
        </p>

        <h2 id="exemple">
          Exemple illustratif fictif : 35 €, 250 € et 1 000 € le même mois
        </h2>
        <p>
          Tous les montants et volumes ci-dessous sont fictifs. Ils ne décrivent
          ni un compte Hagnéré Code, ni un client, ni un benchmark de marché.
          L’entreprise de services fictive ferme une cohorte de quarante
          demandes : chaque dossier a atteint un statut final selon la date
          d’observation annoncée.
        </p>
        <GuideTable
          caption="Données sources du scénario fictif"
          headers={["Ligne", "Valeur", "Définition"]}
          rows={cohortRows}
        />
        <FormulaBox>{`Coût complet de la cohorte
1 400 € de média + 600 € de coûts fixes = 2 000 €

CPL média brut
1 400 € / 40 demandes = 35 €

Coût complet par demande
2 000 € / 40 demandes = 50 €

Coût complet par lead qualifié
2 000 € / 8 qualifiés = 250 €

CAC observé
2 000 € / 2 clients = 1 000 €`}</FormulaBox>
        <FormulaBox>{`Taux de qualification
8 qualifiés / 40 demandes = 0,20 = 20 %

Taux de vente des qualifiés
2 clients / 8 qualifiés = 0,25 = 25 %

Coût d’acquisition maximal par demande
2 000 € de marge × 0,20 × 0,25 = 100 €

CPL média maximal après frais fixes
(2 000 € × 2 clients − 600 € de coûts fixes) / 40 demandes
= (4 000 € − 600 €) / 40
= 3 400 € / 40
= 85 €`}</FormulaBox>
        <p>
          Comparez des éléments de même nature : le coût complet par demande de
          50 € reste sous le plafond total fictif de 100 €, tandis que le CPL
          média observé de 35 € reste sous le plafond média fictif de 85 €. Le
          CAC observé de 1 000 € est inférieur à la marge contributive prudente
          de 2 000 € par client, mais cela ne prouve ni bénéfice net, ni
          attribution parfaite, ni capacité à doubler le budget. Les charges
          fixes générales, la fiscalité, les ventes tardives et tout coût non
          cité restent hors du scénario.
        </p>
        <p>
          Le volume supplémentaire peut changer les requêtes, la concurrence, le
          coût du clic, la qualité des demandes et la capacité commerciale. La
          décision raisonnable dans ce cas fictif pourrait être un palier
          limité, avec la même mesure sur la cohorte suivante — pas un
          doublement automatique.
        </p>

        <h2 id="decision">Augmentez, maintenez, réduisez ou suspendez</h2>
        <GuideTable
          caption="Décisions possibles après le calcul"
          headers={["Situation", "Décision", "Garde-fou"]}
          rows={decisionRows}
        />
        <p>
          Si les clics semblent pertinents mais que presque aucune demande n’est
          qualifiée, utilisez le guide sur les{" "}
          <Link href="/guides/leads-google-ads-non-qualifies">
            leads Google Ads non qualifiés
          </Link>
          . Si la cohorte ne contient aucune vente et que vous ne savez pas
          quelle étape casse, commencez par le diagnostic{" "}
          <Link href="/guides/pourquoi-google-ads-ne-convertit-pas">
            Pourquoi Google Ads ne génère pas de clients
          </Link>
          . Un nouveau tableau de bord n’est pas la réponse automatique.
        </p>

        <h2 id="action">Préparez une cohorte que vous pourrez recalculer</h2>
        <p>
          Exportez une copie source non modifiée, puis travaillez dans une copie
          datée. Une ligne représente une demande unique. Les données
          personnelles ne doivent pas être envoyées dans un modèle public ni
          partagées sans besoin et sans règles appropriées.
        </p>
        <GuideTable
          caption="Colonnes minimales de votre registre"
          headers={["Étape", "Champ à conserver", "Ce qu’il doit dire"]}
          rows={[
            [
              "Identifier",
              "Identifiant et date d’entrée",
              "Un identifiant interne stable et la date réelle de la demande",
            ],
            ["Attribuer", "Source", "Campagne selon la règle annoncée"],
            [
              "Qualifier",
              "Statut et motif",
              "Oui, non ou en attente, avec le motif contrôlé et sa date",
            ],
            [
              "Vendre",
              "Statut et dernière mise à jour",
              "Oui, non ou en attente, avec la date de la dernière vérification",
            ],
          ]}
        />
        <ol>
          <li>écrivez la règle de doublon et rapprochez les répétitions ;</li>
          <li>définissez qualifié et vendu avant le calcul ;</li>
          <li>listez les coûts média, fixes et variables séparément ;</li>
          <li>
            annoncez la date d’observation et les dossiers encore ouverts ;
          </li>
          <li>
            appliquez les formules et les conditions de dénominateur nul ;
          </li>
          <li>conservez les exclusions et l’incertitude avec le résultat.</li>
        </ol>

        <h2 id="fit">Quand faire vérifier le calcul</h2>
        <p>
          Une vérification est utile si les demandes ont un identifiant, les
          critères de qualification sont écrits, le cycle de vente est arrivé à
          maturité et la marge par client est connue. Si les périodes, doublons
          ou ventes restent mélangés, commencez par remettre les données à plat
          : aucun calcul ne compensera un dénominateur faux.
        </p>

        <GuideInlineCTA
          title="Vérifier votre coût par demande, prospect qualifié et client"
          description="Donnez-nous seulement les volumes agrégés, la période, vos critères de qualification et les coûts inclus — jamais les données personnelles ni les accès. Nous vérifierons les dénominateurs et le passage du clic à la vente, puis nous vous dirons s’il faut attendre, corriger, réduire ou tester un palier de budget."
          tags={[
            "Même cohorte",
            "Zéros traités explicitement",
            "Seuil calculé sur votre marge",
          ]}
          ctaLabel="Faire vérifier mon calcul"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>
        <p>
          Sources consultées le 23 juillet 2026. Les produits, colonnes,
          méthodes d’import et règles Google peuvent évoluer. Cette
          documentation explique la plateforme ; elle ne remplace ni votre
          comptabilité, ni votre outil commercial, ni une analyse juridique du
          consentement et des données importées.
        </p>
        <ul>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/6396841"
              target="_blank"
              rel="noopener noreferrer"
            >
              définition du CPA moyen
            </a>
            , soit le coût total des conversions divisé par leur nombre. La
            conversion dépend du paramétrage et n’est pas automatiquement un
            lead qualifié ou un client.
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/6270625"
              target="_blank"
              rel="noopener noreferrer"
            >
              colonnes de suivi des conversions
            </a>
            . Les actions incluses et les conversions modélisées demandent une
            lecture du paramétrage ; la colonne ne remplace pas le CRM.
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/11461796"
              target="_blank"
              rel="noopener noreferrer"
            >
              actions de conversion principales et secondaires
            </a>
            . Rendre une action principale reste un choix de configuration.
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/14274408"
              target="_blank"
              rel="noopener noreferrer"
            >
              configuration des conversions avancées pour les prospects
            </a>
            . L’import de statuts qualifiés ou convertis dépend du rapprochement
            et des règles applicables.
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/15713840"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnement des conversions avancées pour les prospects
            </a>
            . Une donnée hachée n’est pas nécessairement anonyme.
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/13695607"
              target="_blank"
              rel="noopener noreferrer"
            >
              exigences liées à la politique de consentement des utilisateurs
              dans l’EEE
            </a>
            . La page ne constitue pas un avis juridique sur votre dispositif.
          </li>
          <li>
            Google Ads —{" "}
            <a
              href="https://support.google.com/google-ads/answer/6268632"
              target="_blank"
              rel="noopener noreferrer"
            >
              enchères au CPA cible
            </a>
            . Il s’agit d’un objectif moyen ; il ne définit pas le seuil
            économique propre à l’entreprise.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
