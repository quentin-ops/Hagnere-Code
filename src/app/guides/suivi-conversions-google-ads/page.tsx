import type { Metadata } from "next";
import Link from "next/link";
import { ConversionReconciliationTool } from "@/components/guides/ConversionReconciliationTool";
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

const guide = getGuide("suivi-conversions-google-ads");

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
        alt: "Relier les conversions Google Ads aux demandes, devis et ventes",
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
      name: "Suivi des conversions Google Ads",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Un tableur suffit-il si l’entreprise n’a pas de CRM ?",
    answer:
      "Oui, pour un petit volume, à condition d’avoir une ligne par demande, un identifiant interne, des définitions communes et un responsable. Le tableur ne doit pas devenir un fichier partagé sans contrôle : une fois rempli, il peut contenir des informations commerciales ou personnelles sensibles.",
  },
  {
    question: "Comment rapprocher les appels téléphoniques des campagnes ?",
    answer:
      "Un outil de suivi d’appel peut associer un appel à une source publicitaire. Créez ensuite un identifiant interne dans le dossier commercial et conservez l’heure ainsi que la source disponible. Pour un petit volume, un rapprochement manuel documenté peut suffire. Un simple total d’appels ne distingue ni les tests, ni les appels répétés, ni les demandes hors cible.",
  },
  {
    question: "Que faire si la vente arrive après la fenêtre d’import Google ?",
    answer:
      "Conservez la vente dans votre suivi interne et ne falsifiez jamais sa date. Si l’import final n’est plus accepté, une étape antérieure réellement observable — prospect qualifié ou devis, par exemple — peut être étudiée pour le pilotage, sans présenter cette étape comme une vente.",
  },
  {
    question:
      "Faut-il migrer un ancien import hors ligne vers Google Ads Data Manager ?",
    answer:
      "Commencez par identifier le connecteur qui fonctionne aujourd’hui ; ne migrez pas à l’aveugle. Depuis le 15 juin 2026, Google oriente les nouveaux flux vers la Data Manager API et restreint l’appel d’import UploadClickConversions de la Google Ads API selon l’historique du jeton développeur. Un lot fictif sans donnée client peut vérifier le format, le transport et les rejets, mais pas le rapprochement ni l’attribution : prévoyez ensuite une observation licite et un retour avant toute bascule.",
  },
  {
    question: "Une conversion acceptée par Google Ads est-elle une vente ?",
    answer:
      "Non. Acceptée signifie que la ligne a franchi un contrôle d’import. Elle peut encore ne pas être rapprochée, attribuée à une campagne, visible dans la bonne colonne ou cohérente avec le CRM. La vente reste définie et prouvée dans votre système métier.",
  },
  {
    question: "Combien de temps faut-il conserver le journal de test ?",
    answer:
      "Il n’existe pas de durée universelle dans ce guide. Fixez une durée liée à la finalité, au cycle commercial, aux obligations applicables et à votre procédure de preuve, puis limitez les accès. Les captures et exports réels ne doivent pas être publiés dans un modèle téléchargeable.",
  },
];

const chainRows = [
  [
    "Événement envoyé",
    "Le site émet l’information après un succès réel ; conservez l’heure, le nom et la requête observée.",
    "La demande existe dans le système métier.",
  ],
  [
    "Demande reçue",
    "Le serveur, le formulaire ou le CRM crée un identifiant interne daté.",
    "La demande est unique ou sérieuse.",
  ],
  [
    "Demande unique",
    "Les répétitions sont rapprochées avec une règle de doublon et un dossier conservé.",
    "Le besoin correspond à votre offre.",
  ],
  [
    "Prospect qualifié",
    "La demande respecte vos critères ; conservez statut, motif, responsable et date.",
    "Un devis ou une vente aura lieu.",
  ],
  [
    "Opportunité ouverte",
    "Un besoin, un montant potentiel, une prochaine action et un responsable existent.",
    "La signature future ni sa valeur définitive.",
  ],
  [
    "Devis envoyé",
    "Une proposition réelle est remise avec numéro, date, montant et devise.",
    "Le devis sera accepté ou payé.",
  ],
  [
    "Contrat signé",
    "La signature ou la commande répond à la définition écrite de l’entreprise.",
    "L’émission, le paiement ou la conservation de la facture.",
  ],
  [
    "Facture émise",
    "Un document comptable daté porte un montant et une devise.",
    "Un encaissement ni son caractère définitif.",
  ],
  [
    "Paiement reçu",
    "L’encaissement est rapproché du dossier et de la facture.",
    "La marge finale ou la causalité publicitaire.",
  ],
  [
    "Correction",
    "Une annulation, un remboursement ou une nouvelle valeur est daté et relié à l’opération initiale.",
    "Que Google Ads a déjà répercuté la correction.",
  ],
  [
    "Marge de contribution avant acquisition",
    "Le chiffre d’affaires moins les coûts variables directs, sans média ni autre coût d’acquisition.",
    "Le solde après acquisition, le bénéfice net ni l’incrémentalité de la publicité.",
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
          { label: "Suivi des conversions Google Ads" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Google Ads annonce des conversions, mais combien sont devenues des demandes uniques, des devis et des ventes ? Suivez vos dossiers jusqu’au résultat métier avant de modifier les enchères."
        heroAction={{
          href: "#reconcilier-volumes",
          label: "Comparer mes volumes",
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
            title: "Une conversion n’est pas forcément un client",
            description: "",
            color: "blue",
          },
          {
            number: "02",
            title: "6 volumes à comparer",
            description: "",
            color: "violet",
          },
          {
            number: "03",
            title: "Outil local sans envoi",
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
            href: "/guides/pourquoi-google-ads-ne-convertit-pas",
            label: "Pourquoi les clics ne deviennent pas des clients",
          },
          {
            href: "/guides/audit-google-ads-que-verifier",
            label: "Auditer une campagne Google Ads active",
          },
          {
            href: "/guides/budget-google-ads-pme",
            label: "Calculer le budget test d’une PME",
          },
          {
            href: "/guides/prix-gestion-google-ads",
            label: "Comprendre le coût de gestion Google Ads",
          },
          {
            href: "/services/publicite-en-ligne",
            label: "Accompagnement Google Ads",
          },
        ]}
        faqTitle="Suivi Google Ads : six questions pratiques"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Google Ads affiche 75 conversions, mais votre équipe commerciale ne
          retrouve que quatre ventes. Faut-il augmenter le budget parce que la
          plateforme mesure beaucoup d’actions, ou le réduire parce que peu de
          contrats sont signés ? Ne comparez pas encore 75 et quatre : le total
          Google peut mêler plusieurs actions et des résultats modélisés. Dans
          notre exemple fictif, le journal interne contient 72 événements
          envoyés, 68 demandes réellement reçues, 60 demandes uniques, 18
          prospects correspondant à l’offre, neuf devis et quatre ventes. Si
          vous optimisez sur le mauvais nombre, vous pouvez acheter davantage de
          formulaires inutiles ; si vous coupez trop tôt, vous pouvez
          interrompre un canal dont le cycle commercial n’est pas terminé.
        </p>
        <p>
          Dans Google Ads, une conversion est l’action que l’entreprise a choisi
          de compter : un formulaire, un appel, un achat ou une étape importée
          depuis son outil commercial. Ce n’est donc pas automatiquement un
          client. Dans ce guide, vous allez retrouver la première rupture entre
          la publicité et la vente, vérifier le changement Data Manager de 2026,
          traiter les appels et les doublons, puis calculer le coût par prospect
          qualifié, le coût par vente et la marge restante. À la fin, vous
          pourrez conserver le suivi actuel, corriger un seul maillon, tester
          une action plus profonde ou décider honnêtement de ne rien changer.
        </p>
        <p>
          Pour garder des unités comparables, l’outil de cette page suit une
          chaîne courte de <strong>six volumes</strong>, de l’événement envoyé à
          la vente. Le registre détaillé ajoute ensuite les preuves
          d’opportunité, de contrat, de facture, de paiement, de correction et
          de marge. Ces preuves complètent la même chaîne ; elles ne deviennent
          pas de nouveaux totaux à additionner au chiffre Google Ads.
        </p>

        <GuideToc
          items={[
            {
              id: "decision-cinq-minutes",
              label: "Prendre la décision en cinq minutes",
            },
            {
              id: "ce-que-google-compte",
              label: "Comprendre ce que Google compte",
            },
            { id: "choisir-resultat", label: "Choisir le résultat métier" },
            { id: "relier-demande", label: "Relier une même demande" },
            {
              id: "reconcilier-volumes",
              label: "Comparer les mêmes demandes",
            },
            { id: "tester-chaine", label: "Tester toute la chaîne" },
            { id: "traiter-appels", label: "Traiter les appels et faux leads" },
            {
              id: "comprendre-ecarts",
              label: "Expliquer les écarts entre outils",
            },
            { id: "exemple-cohorte", label: "Rejouer un exemple fictif" },
            {
              id: "calculer-economie",
              label: "Calculer CAC, marge et seuils",
            },
            { id: "decider", label: "Décider sans dérégler les enchères" },
            { id: "sources", label: "Vérifier les sources et limites" },
          ]}
        />

        <h2 id="decision-cinq-minutes">La décision en cinq minutes</h2>
        <p>
          Vous n’avez pas besoin de reconstruire tout votre système de mesure
          pour savoir par où commencer. Prenez le dernier mois dont le cycle
          commercial est suffisamment avancé et répondez à ces cinq questions
          dans l’ordre.
        </p>
        <ol>
          <li>
            <strong>Quel résultat paie réellement l’acquisition ?</strong>{" "}
            Écrivez votre définition : prospect accepté, rendez-vous honoré,
            contrat signé, acompte encaissé ou paiement reçu. « Conversion » et
            « vente » ne sont pas des définitions suffisantes.
          </li>
          <li>
            <strong>
              Combien de dossiers identiques passent chaque étape ?
            </strong>{" "}
            Comparez une seule cohorte, avec la même période, le même fuseau et
            une date d’observation qui laisse aux derniers dossiers le temps
            d’avancer.
          </li>
          <li>
            <strong>Où apparaît le premier nombre non prouvé ?</strong> Si le
            journal du site contient 72 événements mais que le CRM ne contient
            que 68 dossiers, ne débattez pas encore du coût par vente :
            expliquez d’abord ces quatre dossiers.
          </li>
          <li>
            <strong>Quelle action influence actuellement les enchères ?</strong>{" "}
            Vérifiez l’objectif de chaque campagne, les actions principales,
            secondaires et personnalisées. Ne supposez pas qu’un libellé «
            secondaire » rend l’action inoffensive.
          </li>
          <li>
            <strong>Le signal vaut-il davantage que son coût ?</strong> Calculez
            coût complet, prospects qualifiés, ventes, marge de contribution,
            délai de rappel et capacité de traitement. Une mesure exacte d’un
            mauvais processus commercial reste une mauvaise décision.
          </li>
        </ol>
        <InfoBox variant="emerald" title="Notre avis professionnel">
          Pour une PME qui vend sur devis, le meilleur point de départ est
          rarement le formulaire brut et rarement la vente finale dès le premier
          jour. Utilisez d’abord le prospect qualifié si sa définition est
          stable et son import régulier, gardez la vente et la marge pour
          contrôler l’économie, puis descendez plus bas seulement lorsque le
          volume, le délai et les corrections sont maîtrisés. Si ces preuves
          manquent, ne modifiez pas les enchères.
        </InfoBox>

        <h2 id="ce-que-google-compte">
          1. Google compte-t-il des clients ou seulement des actions ?
        </h2>
        <p>
          Commencez par ouvrir la liste des actions de conversion, pas par
          regarder le total du tableau de bord. Pour chacune, écrivez une phrase
          ordinaire : « le formulaire a affiché un succès », « le dossier a été
          créé dans le logiciel commercial — souvent appelé CRM — », « le
          prospect respecte nos critères » ou « la facture a été payée ». Si
          deux personnes de l’entreprise donnent deux définitions différentes,
          le problème existe avant même la balise.
        </p>
        <p>
          Google explique que la colonne <strong>Conversions</strong> contient
          les actions principales utilisées par les objectifs concernés et peut
          aussi inclure des résultats modélisés. La colonne{" "}
          <strong>Toutes les conversions</strong> ajoute notamment les actions
          secondaires. Cette distinction de produit est documentée dans l’
          <a
            href="https://support.google.com/google-ads/answer/6270625?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide officielle sur les données de conversion
          </a>
          . Elle suffit déjà à montrer pourquoi le nombre visible ne doit pas
          être recopié dans un rapport commercial sous le titre « clients ».
        </p>

        <h3>Le réglage « Une » ou « Toutes » peut multiplier le même signal</h3>
        <p>
          Chaque action possède aussi un réglage de comptage. Avec{" "}
          <strong>Une</strong>, Google Ads ne compte qu’une conversion de cette
          action par clic publicitaire ; avec <strong>Toutes</strong>, il compte
          chaque conversion. Le <em>taux de répétition</em> montre l’écart
          possible entre les deux réglages. Pour une demande de devis, « Une »
          est souvent le point de départ le plus lisible ; pour plusieurs achats
          distincts, « Toutes » peut être cohérent. Ce n’est pas une règle
          automatique : vérifiez la réalité commerciale action par action.
        </p>
        <p>
          Ce réglage ne remplace pas la déduplication. Pour une même action de
          conversion, un identifiant de transaction permet à Google de
          reconnaître une même opération renvoyée deux fois ; il ne déduplique
          pas à lui seul deux actions de conversion distinctes. « Une » ou «
          Toutes » décide combien d’actions distinctes sont comptées après une
          interaction publicitaire. Une double soumission reste donc un défaut à
          corriger, même si « Une » en masque une partie dans le rapport. Google
          précise également qu’un changement de ce réglage ne modifie que les
          rapports futurs dans son{" "}
          <a
            href="https://support.google.com/google-ads/answer/3438531?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide officielle sur les options de comptage
          </a>
          .
        </p>

        <GuideTable
          caption="Six mots proches qui ne décrivent pas le même résultat"
          headers={["Mot", "Ce qu’il prouve", "Ce qu’il ne prouve pas"]}
          rows={[
            [
              "Clic",
              "Une interaction avec l’annonce",
              "Une action réussie sur le site",
            ],
            [
              "Événement",
              "Une information a été envoyée",
              "Le CRM a reçu le dossier",
            ],
            [
              "Formulaire réussi",
              "Le visiteur a obtenu un succès",
              "Une demande unique et sérieuse",
            ],
            [
              "Demande reçue",
              "Le système métier a créé un dossier",
              "Le besoin correspond à l’offre",
            ],
            [
              "Prospect qualifié",
              "Les critères commerciaux sont remplis",
              "Une vente est conclue",
            ],
            [
              "Vente",
              "Votre définition de la vente est constatée",
              "La marge finale ou la causalité parfaite",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="La première question à poser n’est pas technique"
        >
          Demandez à la personne qui traite les demandes : « Quel événement doit
          changer notre décision de budget ? » Sa réponse doit être observable
          dans un système, datée et comprise de la même manière par le
          marketing, le commerce et la direction.
        </InfoBox>

        <h2 id="choisir-resultat">
          2. Choisissez le résultat métier avant de toucher aux enchères
        </h2>
        <p>
          Une action <strong>principale</strong> peut entrer dans la colonne
          Conversions et guider les enchères si la campagne utilise l’objectif
          qui la contient. Une action <strong>secondaire</strong> sert
          normalement à l’observation. Mais le libellé ne suffit pas : Google
          précise qu’une action secondaire placée dans un objectif personnalisé
          utilisé par la campagne peut tout de même participer aux enchères.
          Vérifiez donc l’objectif de chaque campagne, pas seulement le mot «
          secondaire ». La règle et son exception figurent dans l’
          <a
            href="https://support.google.com/google-ads/answer/11461796?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide Google sur les actions principales et secondaires
          </a>
          .
        </p>
        <p>
          Votre meilleur résultat commercial n’est pas toujours immédiatement le
          meilleur signal pour les enchères. Une vente peut être rare,
          apparaître plusieurs semaines après le clic ou être importée de façon
          irrégulière. À l’inverse, un formulaire très fréquent peut contenir
          des doublons et des demandes sans rapport avec l’offre. La bonne
          décision consiste à retenir l’étape la plus profonde qui possède une
          définition stable, un volume réellement observé, un délai connu et un
          import testé — sans inventer un seuil universel.
        </p>

        <GuideTable
          caption="Usage prudent de chaque étape pendant le test complet"
          headers={["Étape", "Usage à examiner", "Condition avant changement"]}
          rows={[
            [
              "Formulaire réussi",
              "Observation technique",
              "Ne part qu’après un vrai succès",
            ],
            [
              "Demande reçue",
              "Observation et rapprochement",
              "Réception côté serveur ou CRM prouvée",
            ],
            [
              "Demande unique",
              "Candidate selon le contexte",
              "Règle de doublon stable",
            ],
            [
              "Prospect qualifié",
              "Candidate possible",
              "Critères, délai et import réguliers",
            ],
            [
              "Vente",
              "Candidate possible",
              "Définition, valeur, correction et fenêtre maîtrisées",
            ],
            [
              "Marge",
              "Décision interne d’abord",
              "Formule financière et règles d’utilisation validées",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Changer “secondaire” ne suffit pas toujours"
        >
          Avant un test, contrôlez aussi les objectifs personnalisés et les
          objectifs propres à chaque campagne. Sinon, une action que vous
          pensiez seulement observer peut déjà influencer les enchères.
        </InfoBox>

        <h3>Balise Google Ads, Google Analytics ou outil commercial ?</h3>
        <p>
          Ces trois chemins ne prouvent pas la même chose. N’en choisissez pas
          deux comme résultat principal pour la même action. Partez du résultat
          qui doit guider la décision, puis gardez une seule source utilisée par
          les enchères et les autres en contrôle si elles restent utiles.
        </p>
        <GuideTable
          caption="Choisir le chemin qui correspond au résultat à observer"
          headers={["Chemin", "Quand il est utile", "Limite à contrôler"]}
          rows={[
            [
              "Balise Google Ads sur le site",
              "Compter directement une action réalisée sur la page",
              "Ne prouve pas que la demande est arrivée ni qu’elle est sérieuse",
            ],
            [
              "Événement Google Analytics importé",
              "Réutiliser une action déjà définie pour l’analyse du site",
              "Peut différer des rapports Ads ; évitez de compter aussi la balise directe",
            ],
            [
              "Retour de l’outil commercial",
              "Observer une demande qualifiée, un devis ou une vente après le site",
              "Exige des identifiants, des délais, des règles de données et un import testé",
            ],
          ]}
        />
        <p>
          Google documente le partage des événements Analytics avec Google Ads
          dans son{" "}
          <a
            href="https://support.google.com/google-ads/answer/10632359?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide sur les conversions créées depuis Google Analytics
          </a>
          . Pour un résultat constaté plus tard dans l’outil commercial, les{" "}
          <a
            href="https://support.google.com/google-ads/answer/2998031?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            imports de conversions hors ligne
          </a>{" "}
          ont leurs propres conditions et délais. Le bon choix dépend donc de
          votre décision métier, pas d’une préférence pour un outil.
        </p>

        <h2 id="relier-demande">
          3. Reliez une même demande de l’événement envoyé jusqu’à la marge
        </h2>
        <p>
          Le rapprochement utile ne compare pas deux totaux posés côte à côte.
          Il suit un même dossier, avec une preuve et l’outil qui fait foi à
          chaque passage. Utilisez un identifiant interne qui ne contient ni
          nom, ni e-mail, ni téléphone. Puis notez qui est responsable de
          l’étape et ce qui manque encore. « Inconnu » est une réponse honnête ;
          ce n’est jamais un zéro.
        </p>

        <GuideTable
          caption="Le registre minimal d’une conversion jusqu’au résultat métier"
          headers={["Étape", "Définition et preuve", "Ne prouve pas"]}
          rows={chainRows}
        />

        <p>
          Vous n’avez pas besoin de mémoriser les noms techniques. Demandez
          seulement à la personne qui gère la mesure de distinguer quatre
          références :
        </p>
        <ul>
          <li>
            <strong>le numéro interne du dossier</strong>, parfois nommé{" "}
            <code>case_id</code>, qui relie vos preuves sans nommer le client ;
          </li>
          <li>
            <strong>l’identifiant publicitaire fourni par Google</strong>, comme
            GCLID, GBRAID ou WBRAID, qui sert à rapprocher une visite de la
            publicité lorsque le cas est pris en charge ;
          </li>
          <li>
            <strong>le numéro de commande ou de transaction</strong>, utilisé
            pour ne pas compter deux fois la même opération ;
          </li>
          <li>
            <strong>le numéro du lot d’import</strong>, qui prouve seulement que
            ce lot a été traité.
          </li>
        </ul>

        <p>
          <strong>Décision de direction :</strong> exigez ces quatre références,
          un propriétaire et une preuve consultable. La spécification des champs
          qui suit peut ensuite être transmise à la personne qui relie le site,
          le CRM et Google Ads.
        </p>

        <h3>
          À transmettre à votre prestataire : écrivez le contrat de données
        </h3>
        <p>
          Un contrat de données n’est pas un contrat juridique : c’est la liste
          des informations que chaque système doit produire, avec leur sens,
          leur format et leur propriétaire. Sans ce document, le site, le CRM et
          Google Ads peuvent tous accepter une ligne différente sans que
          personne ne puisse expliquer laquelle correspond à la vente.
        </p>
        <GuideTable
          caption="Champs minimaux à demander pour rapprocher une conversion"
          headers={["Champ", "Usage", "Règle de prudence"]}
          rows={[
            [
              "case_id interne",
              "Relier formulaire, CRM, devis, facture et correction",
              "Reste interne ; aucune coordonnée du client dans l’identifiant",
            ],
            [
              "event_id",
              "Reconnaître le même événement envoyé par plusieurs chemins techniques",
              "Stable pour un événement, différent pour une nouvelle action réelle",
            ],
            [
              "transaction_id / order_id",
              "Dédupliquer et corriger une opération dans Google Ads",
              "Unique, durable et jamais recyclé entre deux ventes",
            ],
            [
              "GCLID, GBRAID ou WBRAID",
              "Rapprocher l’action d’une interaction publicitaire prise en charge",
              "Conserver le type reçu ; ne pas fabriquer une valeur manquante",
            ],
            [
              "UTM et page d’entrée",
              "Expliquer la source et contrôler les écarts hors plateforme",
              "Contexte interne ; ne remplace pas l’identifiant Google",
            ],
            [
              "Action et étape métier",
              "Distinguer formulaire, prospect qualifié, contrat et paiement",
              "Une définition versionnée par action",
            ],
            [
              "Horodatage et fuseau",
              "Comparer clic, demande, vente, import et correction",
              "Date réelle, jamais déplacée pour contourner une limite d’import",
            ],
            [
              "Valeur, devise et statut",
              "Séparer estimation, signature, encaissement et remboursement",
              "HT/TTC et coûts inclus explicitement nommés",
            ],
            [
              "État du consentement",
              "Conserver la décision technique appliquée lors de la collecte",
              "Ne constitue pas à lui seul une preuve juridique suffisante",
            ],
            [
              "job_id, état et motif de rejet",
              "Suivre un lot depuis l’envoi jusqu’au diagnostic",
              "Accepté, rapproché, attribué et visible restent quatre états distincts",
            ],
          ]}
        />
        <p>
          Tous ces champs ne doivent pas être envoyés à Google. Le numéro de
          dossier, la qualification commerciale, la preuve du contrat, la marge
          détaillée et les motifs internes peuvent rester dans vos systèmes. Le
          développeur doit documenter séparément les champs nécessaires au
          rapprochement publicitaire et l’autorisation de les utiliser.
        </p>

        <h3>
          À transmettre à votre prestataire : dédupliquez les copies techniques
        </h3>
        <p>
          Un formulaire peut être observé dans le navigateur, confirmé par le
          serveur puis retrouvé dans le CRM. Ce sont trois preuves possibles
          d’une seule demande, pas trois demandes. Le navigateur et le serveur
          doivent partager un identifiant d’événement ou de transaction ; le CRM
          conserve le numéro de dossier qui permet de contrôler le résultat. Si
          deux balises n’utilisent ni la même clé ni la même définition,
          gardez-en une seule dans les enchères jusqu’à ce que la déduplication
          soit prouvée.
        </p>
        <p>
          Une URL, une adresse e-mail, un téléphone, une chaîne hachée ou un
          identifiant générique créé au hasard ne doivent pas être utilisés
          arbitrairement comme numéro de transaction. Consultez les{" "}
          <a
            href="https://support.google.com/google-ads/answer/6386790?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            règles de déduplication par ID de transaction
          </a>{" "}
          avant l’implémentation.
        </p>

        <InfoBox
          variant="emerald"
          title="Votre registre n’a pas besoin de contenir les données du client"
        >
          Une ligne peut utiliser un identifiant interne, des états et des liens
          vers des preuves conservées dans un espace protégé. N’intégrez jamais
          de données clients réelles dans un modèle public ou dans un formulaire
          de demande de devis.
        </InfoBox>

        <h2 id="reconcilier-volumes">
          4. Comparez les volumes des mêmes demandes
        </h2>
        <p>
          Choisissez un même groupe de départ et une date d’observation. Par
          exemple : les formulaires réussis du 1er au 30 avril, observés
          ensemble le 29 juin. Ainsi, même le dernier dossier a eu 60 jours pour
          avancer ; les premiers en ont eu davantage. N’ajoutez pas les demandes
          de mai aux ventes d’avril et ne classez pas les dossiers encore en
          attente parmi les refusés. Saisissez ci-dessous vos six volumes : tout
          reste dans votre navigateur et rien n’est transmis au site.
        </p>

        <ConversionReconciliationTool />

        <p>
          Une baisse entre deux étapes n’est pas automatiquement une panne. Elle
          peut correspondre à des doublons expliqués, à des demandes hors cible
          ou à des devis refusés. En revanche, si une étape profonde contient
          plus de dossiers que l’étape précédente, vos définitions, vos dates ou
          vos sources ne sont probablement pas comparables. Corrigez d’abord ce
          groupe de demandes ; ne calculez pas un taux sur des nombres qui ne
          parlent pas des mêmes dossiers.
        </p>

        <h2 id="tester-chaine">
          5. Testez toute la chaîne, pas seulement la balise
        </h2>
        <p>
          Un aperçu de balise qui passe au vert prouve une partie du trajet. Il
          ne prouve ni la création du dossier dans le CRM, ni sa déduplication,
          ni sa qualification, ni l’attribution finale dans Google Ads.
          Organisez le test complet en deux temps : un essai sans donnée
          personnelle, puis l’observation licite d’un cas publicitaire réel. Ne
          cliquez pas vous-même sur vos annonces pour fabriquer ce deuxième cas.
          Le premier essai vérifie le format, le transport, les diagnostics et
          les rejets ; sans identifiant publicitaire réel, il ne prouve ni le
          rapprochement ni l’attribution à une campagne.
        </p>

        <ol>
          <li>
            <strong>Écrivez l’attendu avant le test.</strong> Définissez reçu,
            unique, qualifié, devis, vente et marge. Nommez les responsables et
            l’outil qui fait foi.
          </li>
          <li>
            <strong>Jouez le succès et les échecs.</strong> Testez un formulaire
            valide, un échec serveur, un double clic, une actualisation de la
            confirmation et une demande volontairement invalide dans
            l’environnement prévu.
          </li>
          <li>
            <strong>Suivez le même identifiant interne.</strong> Vérifiez la
            réception, le doublon, le motif de qualification, le devis, la vente
            puis son annulation ou sa correction.
          </li>
          <li>
            <strong>Consignez l’import.</strong> Séparez l’envoi du lot, les
            lignes acceptées ou rejetées, le rapprochement disponible, l’action
            attribuée et sa visibilité dans la bonne colonne.
          </li>
          <li>
            <strong>Rejouez les choix relatifs aux traceurs.</strong> Vérifiez
            ce qui se passe avant tout choix, après une acceptation et après un
            refus, puis après un retrait. Contrôlez séparément{" "}
            <code>ad_storage</code>, <code>analytics_storage</code>,{" "}
            <code>ad_user_data</code> et <code>ad_personalization</code>.
            Étendez l’examen aux données importées lorsque la loi ou les règles
            Google exigent une autorisation. Ce test technique ne vaut pas
            validation juridique.
          </li>
          <li>
            <strong>Attendez le délai documenté.</strong> Une statistique
            importée demande généralement moins de douze heures de traitement ;
            certains rapprochements GBRAID ou WBRAID peuvent demander jusqu’à 72
            heures.
          </li>
          <li>
            <strong>Terminez par une décision réversible.</strong> Gardez la
            nouvelle action en observation tant que sa définition, ses doublons,
            son délai et ses valeurs ne sont pas fiables.
          </li>
        </ol>

        <p>
          <strong>La direction peut s’arrêter ici :</strong> validez le résultat
          attendu, le responsable, les sept preuves du test et la possibilité de
          revenir. Les détails d’import ci-dessous servent surtout à la personne
          qui exploite la mesure ; ils ne doivent pas retarder une décision de
          STOP si une preuve essentielle manque.
        </p>

        <h3>
          À transmettre à votre prestataire : distinguez les quatre horloges
        </h3>
        <ul>
          <li>
            <strong>La fenêtre de conversion</strong> détermine combien de temps
            après un clic, une vue engagée ou une impression Google Ads peut
            rattacher une action. Ces fenêtres sont réglées par action et ne
            doivent pas être supposées identiques.
          </li>
          <li>
            <strong>La limite d’import</strong> fixe jusqu’à quand une donnée
            hors ligne peut encore être transmise : elle ne prolonge pas une
            fenêtre d’attribution mal réglée.
          </li>
          <li>
            <strong>Le délai de traitement</strong> sépare l’envoi d’un lot de
            son acceptation, de son rapprochement et de sa visibilité.
          </li>
          <li>
            <strong>Le cycle commercial</strong> mesure le temps réel entre la
            demande et le résultat choisi par l’entreprise. Il peut dépasser les
            trois horloges Google.
          </li>
        </ul>
        <p>
          Relevez ces quatre durées dans la même fiche. Programmez l’import plus
          souvent que vos décisions de campagne, avec une alerte si aucun lot
          n’aboutit. Avant de confier les enchères à une étape plus profonde,
          observez au moins un cycle commercial complet ; pour un faible volume
          ou un résultat irrégulier, deux cycles peuvent être plus prudents.
          C’est une règle de méthode Hagnéré Code, pas un seuil imposé par
          Google. Les fenêtres configurables sont expliquées dans l’
          <a
            href="https://support.google.com/google-ads/answer/3123169?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide officielle sur les fenêtres de conversion
          </a>
          .
        </p>

        <h3>
          À transmettre à votre prestataire : vérifiez le chemin d’import 2026
        </h3>
        <p>
          Depuis le 15 juin 2026, Google oriente les nouveaux envois de
          conversions hors ligne et de conversions avancées pour prospects vers
          la <strong>Data Manager API</strong>. L’ancien appel{" "}
          <code>UploadClickConversions</code> de la Google Ads API est restreint
          pour les jetons développeur qui ne possèdent pas l’historique requis.
          Certains flux historiques peuvent conserver un accès dit{" "}
          <em>legacy</em> : cela ne justifie ni de supposer qu’ils continueront
          toujours, ni de les remplacer sans plan de retour.
        </p>
        <GuideTable
          caption="Contrôle dirigeant avant une migration vers Data Manager"
          headers={["Question", "Preuve à demander", "Décision prudente"]}
          rows={[
            [
              "Quel chemin envoie aujourd’hui ?",
              "Nom du connecteur, compte propriétaire, fréquence, dernier lot réussi",
              "Ne rien modifier tant que le flux réel n’est pas identifié",
            ],
            [
              "Le jeton possède-t-il un accès historique ?",
              "Diagnostic API ou message d’erreur, sans publier de secret",
              "Préparer Data Manager si l’accès est restreint ou incertain",
            ],
            [
              "Les mêmes événements arrivent-ils par plusieurs chemins ?",
              "event_id, transaction_id et action de conversion comparés",
              "Dédupliquer avant d’activer une deuxième connexion",
            ],
            [
              "Peut-on rejouer un lot sans doublon ?",
              "Lot fictif, identifiants stables, rapport de diagnostic",
              "STOP si le rejeu crée une nouvelle conversion",
            ],
            [
              "Comment revenir ?",
              "Ancien connecteur conservé, fenêtre de retour et propriétaire",
              "Basculer seulement après une période de contrôle",
            ],
          ]}
        />
        <p>
          Cette évolution est décrite dans les{" "}
          <a
            href="https://developers.google.com/google-ads/api/docs/deprecations"
            target="_blank"
            rel="noopener noreferrer"
          >
            dépréciations officielles de la Google Ads API
          </a>{" "}
          et dans la{" "}
          <a
            href="https://support.google.com/google-ads/answer/10029210?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ officielle des imports hors ligne
          </a>
          . La documentation Google précise aussi qu’à partir d’avril 2026 les
          données fournies par l’utilisateur peuvent arriver simultanément par
          les balises, Data Manager et les connexions API. Cette souplesse rend
          la déduplication plus importante, pas facultative.
        </p>

        <p>
          Ces délais sont ceux que Google documente actuellement dans son{" "}
          <a
            href="https://support.google.com/google-ads/answer/13321563?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide sur les écarts d’import hors ligne
          </a>
          . Google explique aussi que le mode Consentement communique les choix
          du visiteur aux balises mais ne fournit pas lui-même la bannière, et
          distingue le comportement avant et après le choix dans son{" "}
          <a
            href="https://support.google.com/google-ads/answer/10000067?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            explication officielle du mode Consentement
          </a>
          . Revalidez le comportement réel de votre dispositif avant chaque mise
          en production.
        </p>

        <GuideTable
          caption="Recette minimale du mode Consentement"
          headers={["Moment", "Contrôle technique", "Résultat à consigner"]}
          rows={[
            [
              "Avant tout choix",
              "État par défaut des quatre signaux",
              "Valeur attendue et balises réellement déclenchées",
            ],
            [
              "Après acceptation",
              "Mise à jour dans Tag Assistant",
              "Heure, signaux accordés et événements observés",
            ],
            [
              "Après refus",
              "Aucun état accordé par défaut ou par erreur",
              "Comportement des balises et limites de la mesure",
            ],
            [
              "Après retrait",
              "Nouvel état appliqué sans rechargement trompeur",
              "Heure, conséquence et éventuelle suppression à traiter",
            ],
          ]}
        />
        <p>
          Google documente ces quatre paramètres dans son{" "}
          <a
            href="https://support.google.com/analytics/answer/14218557?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            protocole de vérification du mode Consentement
          </a>
          . La CNIL rappelle de son côté que la poursuite de la navigation ne
          vaut pas consentement et que la pseudonymisation n’est pas une
          anonymisation. Une capture Tag Assistant verte ne remplace donc ni
          l’information du visiteur, ni la base légale, ni la preuve de son
          choix.
        </p>

        <p>
          Google indique actuellement qu’un import hors ligne standard transmis
          plus de 90 jours après le dernier clic n’est pas accepté ; la limite
          indiquée pour les conversions avancées pour prospects est de 63 jours.
          Ces limites de produit, les délais d’affichage et la procédure
          actuelle sont détaillés dans les{" "}
          <a
            href="https://support.google.com/google-ads/answer/15081888?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations officielles sur les imports hors ligne
          </a>
          . Revalidez-les avant toute implémentation : elles peuvent évoluer.
        </p>

        <InfoBox variant="amber" title="Accepté ne veut pas dire attribué">
          Un lot accepté a franchi un contrôle d’import. Il peut encore ne pas
          être rapproché, ne pas être attribué à Google Ads ou ne pas apparaître
          dans le rapport attendu. Conservez cinq états séparés : envoyé,
          accepté, rapproché, attribué et visible.
        </InfoBox>

        <h2 id="traiter-appels">
          6. Un appel mesuré n’est pas encore une conversation commerciale
        </h2>
        <p>
          Pour un commerce local, un artisan ou une entreprise de services, le
          téléphone peut produire davantage de valeur que le formulaire. Mais «
          appel » mélange souvent un client existant, un fournisseur, un test
          interne, un appel manqué, une demande hors zone et un nouveau prospect
          sérieux. Optimiser les enchères sur tous ces appels revient à demander
          à Google de reproduire ce mélange.
        </p>
        <p>
          Commencez par nommer le mécanisme mesuré. Google en distingue cinq,
          qui ne prouvent pas le même résultat :
        </p>
        <ol>
          <li>
            <strong>
              appel depuis une annonce ou un composant avec numéro de transfert
            </strong>{" "}
            : Google mesure l’appel et applique la durée minimale définie ;
          </li>
          <li>
            <strong>appel depuis le site via un numéro de transfert</strong> :
            après la visite publicitaire, Google mesure aussi l’appel et sa
            durée minimale ;
          </li>
          <li>
            <strong>clic sur un numéro de téléphone du site mobile</strong> : le
            clic est observé, pas l’appel lui-même ;
          </li>
          <li>
            <strong>
              clic sur une annonce ou un composant d’appel sans numéro de
              transfert
            </strong>{" "}
            : la conversion repose sur l’estimation par Google d’un appel
            significatif après le clic, et ne prouve pas qu’un appel a eu lieu ;
          </li>
          <li>
            <strong>conversion d’appel importée</strong> : elle peut représenter
            la qualification ou la vente enregistrée dans votre outil
            commercial.
          </li>
        </ol>
        <p>
          Ne regroupez pas ces cinq preuves sous une action primaire appelée
          simplement « appel ». Vérifiez aussi la disponibilité des numéros de
          transfert dans votre pays et la configuration effective du compte.
        </p>
        <p>
          Google peut fournir, selon le dispositif, l’heure de début, la durée,
          le statut reçu ou manqué, la source, la campagne et d’autres éléments.
          Ces détails sont décrits dans l’
          <a
            href="https://support.google.com/google-ads/answer/9099302?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide officielle sur les détails des appels
          </a>
          . Ils ne disent pas si la conversation concernait votre offre ni si
          elle a conduit à une vente.
        </p>
        <p>
          L’
          <a
            href="https://support.google.com/google-ads/answer/6100664?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide Google sur les conversions téléphoniques
          </a>{" "}
          distingue explicitement les clics, les appels depuis les annonces, les
          appels depuis le site et les imports. Si vous importez ensuite une
          vente issue du même appel, gardez une seule action dans les enchères.
          Dans son{" "}
          <a
            href="https://support.google.com/google-ads/answer/6275629?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide sur l’import des conversions d’appel
          </a>
          , Google avertit qu’inclure l’appel et son import dans la colonne
          Conversions peut compter deux résultats pour un seul appel.
        </p>
        <GuideTable
          caption="Exemple fictif d’une cohorte de 31 appels"
          headers={["Étape", "Volume", "Règle de classement"]}
          rows={[
            [
              "Appels enregistrés par le dispositif",
              "31",
              "Appel établi vers le numéro, décroché ou manqué ; même période et tests internes exclus",
            ],
            [
              "Appels décrochés",
              "24",
              "Une personne ou le standard répond réellement",
            ],
            [
              "Conversations utiles",
              "17",
              "Nouveau besoin correspondant à l’offre et à la zone",
            ],
            [
              "Rendez-vous pris",
              "10",
              "Créneau confirmé et relié au dossier interne",
            ],
            [
              "Rendez-vous honorés",
              "6",
              "Présence ou échange commercial réellement tenu",
            ],
            ["Ventes", "2", "Définition de vente écrite, valeur et preuve"],
          ]}
        />
        <p>
          Cette cohorte suppose un mécanisme qui enregistre réellement les
          appels — numéro de transfert avec rapport d’appels ou système externe
          rapproché. Elle ne peut pas être reconstruite à partir des seuls clics
          sur numéro ni des conversions estimées après clic.
        </p>
        <p>
          Dans cet exemple, les 31 appels ne valent pas deux ventes. Ils
          constituent six étapes différentes. La première correction peut être
          publicitaire, mais elle peut aussi être organisationnelle : rappeler
          les sept appels manqués, réduire un délai de réponse de deux jours ou
          séparer le numéro du support client. Le tracking n’absorbe pas une
          capacité commerciale insuffisante.
        </p>
        <h3>Classez les faux leads sans les faire disparaître</h3>
        <ul>
          <li>
            <strong>spam ou robot :</strong> preuve technique et règle de
            filtrage, sans confondre avec un refus commercial ;
          </li>
          <li>
            <strong>hors zone ou hors offre :</strong> motif stable qui peut
            révéler un ciblage ou un message trop large ;
          </li>
          <li>
            <strong>client déjà connu :</strong> utile au service, mais pas un
            nouveau client acquis ;
          </li>
          <li>
            <strong>doublon inter-canal :</strong> même personne ayant appelé et
            rempli le formulaire, reliée à un seul dossier ;
          </li>
          <li>
            <strong>appel manqué ou absence au rendez-vous :</strong> résultat
            commercial encore ouvert, avec date de relance ;
          </li>
          <li>
            <strong>test d’équipe :</strong> exclu de tous les volumes et
            conservé seulement dans le journal de recette.
          </li>
        </ul>
        <InfoBox variant="blue" title="Mesurez aussi la capacité à répondre">
          Conservez le délai médian de premier rappel, le taux de contact, le
          nombre de dossiers qu’un commercial peut traiter par semaine et le
          stock réellement disponible. Si l’équipe peut absorber 20 nouveaux
          prospects et que la campagne en produit déjà 35, augmenter le budget
          peut dégrader la qualification et la conversion même avec un suivi
          parfait.
        </InfoBox>

        <h2 id="comprendre-ecarts">
          7. Quand deux outils divergent, comparez définitions, dates et nature
          des données
        </h2>
        <p>
          Google Ads rattache généralement ses colonnes principales à la date de
          l’interaction publicitaire. Votre CRM classe plutôt la vente au jour
          où elle est signée ou payée. Pour rapprocher les deux, utilisez les
          colonnes « par date de conversion », le même fuseau et la même
          période. Même alors, des différences peuvent rester à cause des
          fenêtres, des règles d’attribution et des délais de traitement. Google
          le précise dans son{" "}
          <a
            href="https://support.google.com/google-ads/answer/6270625?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            explication des dates de conversion
          </a>
          .
        </p>

        <GuideTable
          caption="Rapprocher quatre systèmes sur la même cohorte"
          headers={["Système", "Date et état à prendre", "Limite à écrire"]}
          rows={[
            [
              "Google Ads",
              "Date de conversion et colonne choisie, action, valeur, attribution",
              "Observé ou modélisé ; date du clic distincte si utilisée",
            ],
            [
              "Google Analytics",
              "Événement, date, source et identité de mesure disponible",
              "Fenêtre, modélisation et délai de stabilisation",
            ],
            [
              "CRM",
              "case_id, statut commercial, responsable, motif et date",
              "Dossiers encore ouverts, doublons et définitions internes",
            ],
            [
              "Facturation / paiement",
              "Facture, encaissement, devise, annulation et remboursement",
              "HT/TTC, date d’encaissement et coûts exclus",
            ],
          ]}
        />
        <p>
          Exportez ces quatre vues le même jour et conservez la période, le
          fuseau, les filtres et le nom des colonnes. Une ligne peut rester{" "}
          <strong>inconnue</strong>, <strong>modélisée</strong>,{" "}
          <strong>estimée</strong>, <strong>rejetée</strong> ou{" "}
          <strong>non attribuée</strong>. Aucun de ces états ne doit être
          transformé en zéro pour faire coïncider les totaux.
        </p>

        <p>
          <strong>La décision utile tient en trois règles :</strong> comparez
          les mêmes dossiers aux mêmes dates, gardez un seul système de
          référence par résultat et laissez « inconnu » lorsqu’une preuve
          manque. Les paragraphes suivants expliquent les écarts avancés à faire
          vérifier par les équipes marketing, technique, finance et conformité.
        </p>

        <h3>
          À faire vérifier : évitez deux outils qui font tous les deux foi
        </h3>
        <p>
          Une balise Google Ads directe et un événement issu de Google Analytics
          peuvent décrire la même réussite. Si les deux deviennent des actions
          utilisées pour les enchères, vous risquez de compter deux fois un seul
          résultat. Désignez la source de référence, laissez l’autre en
          observation si elle a encore une utilité et testez les rapports. Les
          conversions créées depuis des événements Analytics et leur statut sont
          expliqués dans l’
          <a
            href="https://support.google.com/google-ads/answer/10632359?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide Google sur le partage GA4–Google Ads
          </a>
          .
        </p>

        <h3>À faire vérifier : séparez observation et modélisation</h3>
        <p>
          Certains rapports peuvent combiner des événements observés et des
          événements modélisés. Google indique aussi que les données attribuées
          dans Analytics peuvent encore évoluer jusqu’à douze jours. Un total
          agrégé reste utile pour piloter une campagne, mais il ne remplace pas
          votre registre de demandes et de ventes identifiables. La limite est
          documentée dans l’
          <a
            href="https://support.google.com/analytics/answer/10710245?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide Analytics sur les événements modélisés
          </a>
          .
        </p>

        <h3>
          Une conversion attribuée n’est pas forcément incrémentale — à faire
          vérifier
        </h3>
        <p>
          L’attribution répond à la question « selon nos règles, à quelle
          interaction rattacher cette conversion ? ». L’incrémentalité répond à
          une question plus difficile : « cette conversion aurait-elle eu lieu
          sans la publicité ? ». Une recherche de marque, un client existant ou
          un prospect déjà convaincu peut être attribué à Google Ads sans avoir
          été créé par la campagne.
        </p>
        <p>
          Séparez au minimum marque et hors marque, nouveau client et client
          connu, remarketing et prospection, puis documentez le direct, le SEO
          et les autres campagnes qui peuvent toucher les mêmes personnes. Pour
          les comptes éligibles et suffisamment volumineux, Google propose des
          études Conversion Lift avec groupe exposé et groupe de contrôle. La{" "}
          <a
            href="https://support.google.com/google-ads/answer/14102450?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Google distingue explicitement conversions attribuées
            et conversions incrémentales
          </a>
          . Cet outil n’est pas disponible pour tous les comptes et un résultat
          reste assorti d’incertitude.
        </p>
        <p>
          Si votre volume ne permet pas un test de causalité robuste, n’inventez
          pas une preuve. Vous pouvez préparer une zone témoin, une coupure
          documentée ou une comparaison avant/après qui contrôle au moins la
          saison, le budget, la marque et la capacité commerciale. Présentez le
          résultat comme une indication, pas comme une vente « créée » par
          Google Ads.
        </p>

        <h3>À faire vérifier : corrigez annulations et remboursements</h3>
        <p>
          Une vente peut être annulée, remboursée ou réévaluée après l’import.
          Gardez l’opération initiale, sa date et son identifiant, puis
          enregistrez la correction séparément. Google prévoit des ajustements
          de conversion pour retirer une conversion ou modifier sa valeur ;
          l’identifiant de transaction facilite ce rapprochement. Les principes
          et limites actuels figurent dans l’
          <a
            href="https://support.google.com/google-ads/answer/7686447?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide officielle sur les ajustements de conversion
          </a>
          . Votre CRM et votre comptabilité restent la référence du résultat
          réel : ne supprimez pas une annulation du registre pour conserver un
          ROAS flatteur.
        </p>

        <h3>À faire vérifier : le hachage n’anonymise pas les données</h3>
        <p>
          Les conversions avancées peuvent utiliser des données fournies par le
          client, comme l’e-mail ou le téléphone, puis hachées selon les règles
          du produit. Elles complètent les identifiants de clic lorsque ceux-ci
          ne couvrent pas tout le parcours, mais une correspondance peut
          échouer. Aucun taux de rapprochement ne garantit la qualité des
          prospects ni la rentabilité de la campagne.
        </p>
        <p>
          Avant tout envoi, écrivez la finalité, les catégories de données, la
          normalisation et le hachage attendus, les personnes qui accèdent au
          flux, la durée de conservation, la procédure de suppression et la
          preuve du choix appliqué. Ne hachez pas un fichier entier « par
          précaution » et ne conservez pas les coordonnées brutes dans un export
          public. Cela exige des règles d’utilisation internes, le respect des
          conditions Google et l’examen de l’autorisation applicable. La{" "}
          <a
            href="https://www.cnil.fr/fr/identifier-les-donnees-personnelles"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle qu’une donnée pseudonymisée reste une donnée
            personnelle
          </a>
          . Google exige également l’information des clients, leur autorisation
          lorsque la loi l’impose et exclut certaines catégories sensibles dans
          ses{" "}
          <a
            href="https://support.google.com/google-ads/answer/7475709?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            règles concernant les données client
          </a>
          . Ce guide ne constitue pas une validation juridique de votre
          dispositif.
        </p>

        <InfoBox
          variant="blue"
          title="Le mode Consentement n’est pas une bannière"
        >
          Il communique et applique un état aux balises Google selon la
          configuration choisie. Il ne recueille pas à lui seul un consentement,
          ne rend pas le site conforme par magie et ne permet pas de contourner
          un refus.
        </InfoBox>

        <h2 id="exemple-cohorte">
          8. Exemple fictif : 72 événements bruts, 60 demandes uniques et 4
          ventes
        </h2>
        <p>
          Cet exemple est entièrement fictif. Il ne décrit ni un client ni un
          témoignage réel. Il part de 72 enregistrements bruts envoyés entre le
          1er et le 30 avril pour les campagnes auxquelles 3 000 € de média sont
          affectés. Après réception et rapprochement des doublons, 60 dossiers
          uniques sont suivis jusqu’au 29 juin. Aucun dossier de mai n’est
          ajouté ; aucune vente postérieure à cette date n’entre dans le calcul.
          Le dernier dossier dispose ainsi de 60 jours pour avancer ; les
          premiers en ont davantage. L’attribution des 72 événements aux
          campagnes est une hypothèse du scénario, pas un résultat client.
        </p>

        <GuideTable
          caption="Même groupe fictif suivi jusqu’à sa date d’observation"
          headers={["Étape", "Volume", "Écart et passage"]}
          rows={[
            ["Événements envoyés", "72", "Point de départ brut"],
            ["Demandes reçues", "68", "4 non rapprochées · 94,44 %"],
            ["Demandes uniques", "60", "8 doublons rapprochés · 88,24 %"],
            [
              "Prospects qualifiés",
              "18",
              "42 refus motivés, 0 en attente · 30 %",
            ],
            ["Devis envoyés", "9", "9 sans devis · 50 %"],
            ["Ventes", "4", "5 devis non conclus · 44,44 %"],
          ]}
        />

        <p>
          Tous les montants de cet exemple sont fictifs et exprimés hors taxes.
          Les quatre ventes représentent 12 000 € de chiffre d’affaires. Les
          coûts variables directs de réalisation sont fixés à 4 800 € ; ils
          n’incluent ni média, ni gestion, ni mesure, ni page. La marge de
          contribution avant acquisition est donc de 7 200 €. Les 1 000 € de
          coûts annexes regroupent une seule fois 400 € de gestion, 300 € de
          mesure et une quote-part de 300 € pour la page. Le solde final exclut
          notamment les charges fixes, la fiscalité et tout autre coût non cité
          : ce n’est ni un bénéfice net ni une prévision.
        </p>

        <FormulaBox>{`Chiffre d’affaires fictif
4 ventes × 3 000 € = 12 000 €

Marge de contribution avant acquisition
12 000 € − 4 800 € de coûts variables directs = 7 200 €

Coût d’acquisition complet du groupe suivi
3 000 € de média + 1 000 € de coûts annexes = 4 000 €

Solde de contribution après acquisition
7 200 € − 4 000 € = 3 200 €`}</FormulaBox>

        <p>
          Le calcul montre surtout pourquoi le dénominateur compte. Si Google
          cherche à reproduire les 72 événements bruts, il peut favoriser des
          répétitions ou des demandes sans rapport avec l’offre. Cela ne
          signifie pas qu’il faut passer immédiatement aux quatre ventes : elles
          peuvent être trop rares, trop tardives ou mal importées. Le coût par
          demande, par prospect et par vente relève d’une analyse économique
          distincte ; ne transformez pas cet exemple en benchmark.
        </p>

        <h2 id="calculer-economie">
          9. Calculez le coût du signal avant de lui confier le budget
        </h2>
        <p>
          Reprenons le même exemple fictif avec 1 000 clics à 3 €, soit 3 000 €
          de média. Ajoutons 1 000 € de gestion, mesure et quote-part de page :
          le coût complet de la cohorte est de 4 000 €. Avec 18 prospects
          qualifiés et quatre ventes, le coût par prospect qualifié et le coût
          par vente deviennent calculables.
        </p>
        <FormulaBox>{`Coût par prospect qualifié (CPQL)
4 000 € de coût complet ÷ 18 prospects qualifiés = 222,22 €

Coût d’acquisition client (CAC)
4 000 € de coût complet ÷ 4 ventes = 1 000 €

Marge de contribution moyenne avant acquisition
7 200 € ÷ 4 ventes = 1 800 €

Solde de contribution après acquisition
7 200 € − 4 000 € = 3 200 €`}</FormulaBox>
        <p>
          Ces calculs portent sur la cohorte observée, pas sur le mois du
          tableau de bord. Le coût complet doit préciser média, gestion,
          création, page, mesure et temps commercial inclus ou exclus. Le
          chiffre d’affaires publicitaire divisé par le média produirait ici un
          ROAS de 4, mais ce ratio ne déduit ni coûts variables ni frais
          d’acquisition : ce n’est pas un bénéfice.
        </p>

        <h3>Montrez ce qui renverse le verdict</h3>
        <p>
          Une seule hypothèse favorable ne suffit pas. Le tableau suivant fait
          varier un seul facteur à la fois ; les autres restent identiques. Les
          ventes décimales sont des espérances de scénario, jamais des clients
          réels.
        </p>
        <GuideTable
          caption="Sensibilité fictive de la cohorte centrale"
          headers={["Variation isolée", "Résultat calculé", "Conséquence"]}
          rows={[
            [
              "CPC +30 %, volume identique",
              "Média 3 900 € · coût complet 4 900 € · CAC 1 225 €",
              "Solde après acquisition : 2 300 €",
            ],
            [
              "Taux événements / clics −30 %",
              "72 × 70 % = 50,4 événements · 2,8 ventes attendues · CAC 1 428,57 €",
              "Solde attendu : 1 040 €",
            ],
            [
              "Taux de qualification −30 %",
              "12,6 qualifiés · 2,8 ventes attendues · CAC 1 428,57 €",
              "Même solde attendu de 1 040 €, mais cause commerciale différente",
            ],
            [
              "Taux de conclusion −30 %",
              "2,8 ventes attendues · marge avant acquisition 5 040 €",
              "Solde attendu : 1 040 €",
            ],
            [
              "Taux de conclusion +30 %",
              "5,2 ventes attendues · CAC 769,23 €",
              "Solde attendu : 5 360 €",
            ],
          ]}
        />
        <p>
          Le scénario bas reste positif dans ces hypothèses, mais la marge de
          sécurité tombe de 3 200 € à 1 040 €. Avec une marge de contribution
          avant acquisition par vente inférieure à 1 428,57 €, une baisse de 30
          % du taux de conclusion ferait passer le solde sous zéro. C’est ce
          seuil qu’un dirigeant peut utiliser ; « les conversions baissent » ne
          suffit pas à décider.
        </p>

        <h3>Le bon signal change selon le modèle économique</h3>
        <GuideTable
          caption="Quatre contextes, quatre signaux à ne pas confondre"
          headers={["Activité", "Signal candidat", "Contrôle économique"]}
          rows={[
            [
              "B2B avec cycle long",
              "Prospect qualifié ou opportunité acceptée, si l’import est régulier",
              "Contrat, facture, paiement, marge et délai de conclusion",
            ],
            [
              "Service local par téléphone",
              "Conversation utile ou rendez-vous honoré",
              "Appels manqués, vente, zone, capacité et marge",
            ],
            [
              "E-commerce",
              "Commande payée avec transaction_id",
              "Annulations, retours, remboursements, marge produit et réachat",
            ],
            [
              "SaaS",
              "Compte activé avec usage réel, pas simple inscription",
              "Paiement, rétention, churn, marge mensuelle et payback",
            ],
          ]}
        />
        <p>
          Pour un SaaS récurrent, le délai de récupération peut être calculé
          comme le CAC divisé par la marge de contribution mensuelle moyenne du
          client. N’utilisez pas cette formule pour une vente ponctuelle et
          n’employez pas une valeur vie client non observée pour rendre une
          campagne artificiellement rentable.
        </p>

        <h2 id="decider">
          10. Décidez de conserver, corriger, approfondir ou ne rien changer
        </h2>
        <p>
          Votre conclusion doit tenir en quatre lignes : le résultat métier
          recherché, la première transition non prouvée, l’action suivante et la
          date de recontrôle. Elle peut conduire à une intervention technique,
          mais aussi à une décision plus simple. Le suivi actuel peut suffire ;
          une nouvelle action peut rester en observation ; ou la campagne peut
          conserver son objectif tant que la vente n’est pas importée de façon
          régulière.
        </p>

        <GuideTable
          caption="Quatre décisions possibles après le rapprochement"
          headers={["Constat", "Décision", "Ce qu’il faut conserver"]}
          rows={[
            [
              "La chaîne et la définition sont prouvées",
              "Conserver le suivi actuel",
              "Version, date et test de non-régression",
            ],
            [
              "Une transition technique est cassée",
              "Corriger seulement cette transition",
              "Avant/après et cas négatifs",
            ],
            [
              "Une étape plus profonde devient fiable",
              "L’observer avant de l’utiliser",
              "Doublons, délais, valeurs et objectifs",
            ],
            [
              "Les dossiers ou périodes ne sont pas comparables",
              "Ne pas modifier les enchères",
              "Groupe de demandes à reconstruire et date de reprise",
            ],
          ]}
        />

        <h3>Réunissez les cinq propriétaires avant de changer le signal</h3>
        <ul>
          <li>
            <strong>la direction</strong> fixe le résultat qui justifie la
            dépense, la marge minimale et le risque accepté ;
          </li>
          <li>
            <strong>le commerce</strong> définit qualifié, opportunité, vente,
            refus et délai de rappel ;
          </li>
          <li>
            <strong>le marketing</strong> liste campagnes, objectifs, actions
            principales, secondaires et fenêtres ;
          </li>
          <li>
            <strong>le développeur ou l’intégrateur</strong> apporte le contrat
            de données, les identifiants, les journaux et le plan de retour ;
          </li>
          <li>
            <strong>le responsable des données</strong> vérifie finalité,
            information, accès, conservation et suppression, avec un conseil
            compétent lorsque nécessaire.
          </li>
        </ul>
        <p>
          Cette réunion doit produire une seule page de décision, pas une liste
          de captures d’écran. Si la chaîne technique est exacte mais que 70 %
          des demandes restent hors cible, travaillez l’offre, les requêtes et
          la page. Si le commerce vend bien mais qu’aucune vente n’est reliée à
          la publicité, réparez la mesure avant de juger le canal. Ces deux
          situations demandent des actions opposées.
        </p>

        <p>
          Si vous ignorez encore si le problème vient de la mesure, de l’offre,
          de la page ou du traitement commercial, revenez au guide{" "}
          <Link href="/guides/pourquoi-google-ads-ne-convertit-pas">
            Pourquoi Google Ads ne génère pas de clients
          </Link>
          . Si le suivi est fiable mais que le risque financier reste inconnu,
          utilisez plutôt le{" "}
          <Link href="/guides/budget-google-ads-pme">
            calculateur de budget Google Ads pour PME
          </Link>
          . Un nouveau dispositif de mesure n’est pas la réponse automatique à
          tous les problèmes d’acquisition.
        </p>

        <InfoBox variant="amber" title="Notre intérêt commercial est déclaré">
          Hagnéré Code vend de la gestion Google Ads et du développement
          d’outils. Nous pouvons donc avoir intérêt à recommander un audit, une
          connexion CRM ou une nouvelle mesure. La bonne conclusion peut
          pourtant être de garder votre balise, de rappeler plus vite les
          demandes ou de corriger une définition dans le CRM. Une intervention
          n’est justifiée que si elle ferme un écart nommé et laisse une preuve
          que votre équipe peut contrôler.
        </InfoBox>

        <p>
          Fermez l’analyse par un relevé daté : cohorte étudiée, résultat
          métier, première rupture, propriétaire, correctif, critère de succès,
          date de recontrôle et condition de retour. Conservez l’ancienne action
          en observation pendant le test. Ne remplacez jamais un signal qui
          pilote les enchères le vendredi soir sans diagnostic, fenêtre de
          contrôle et personne disponible pour revenir.
        </p>

        <GuideInlineCTA
          title="Faire tester la chaîne qui pilote vos enchères"
          description="Décrivez les actions suivies, les outils utilisés et l’endroit où les nombres cessent de correspondre. Une personne de l’équipe relit votre demande ; nous visons un premier retour argumenté le jour ouvré suivant, sans délai garanti, par e-mail : première rupture à vérifier, preuves non sensibles utiles et proposition éventuelle de diagnostic. Aucun mot de passe ni fichier contenant des données clients n’est demandé."
          tags={[
            "Diagnostic avant recommandation",
            "Aucun accès demandé",
            "Ne rien changer reste possible",
          ]}
          ctaLabel="Présenter mon écart de mesure"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources, définitions et limites</h2>
        <p>
          Les fonctions Google Ads évoluent. Les règles produit ci-dessous ont
          été revalidées le 24 juillet 2026 ; vérifiez-les de nouveau avant une
          implémentation. Elles n’autorisent ni un traitement de données, ni une
          promesse de rentabilité. Les calculs et cohortes de ce guide sont
          fictifs, reproductibles et ne constituent pas des benchmarks.
        </p>
        <ul>
          <li>
            <strong>Conversion :</strong> action configurée dans la plateforme ;
            elle n’est pas automatiquement un client.
          </li>
          <li>
            <strong>Prospect qualifié :</strong> dossier qui satisfait les
            critères commerciaux écrits de l’entreprise.
          </li>
          <li>
            <strong>Attribution :</strong> règle qui rattache une conversion à
            une interaction ; elle ne prouve pas la causalité.
          </li>
          <li>
            <strong>Incrémentalité :</strong> conversions supplémentaires qui
            n’auraient pas eu lieu sans la publicité, avec une incertitude de
            mesure.
          </li>
          <li>
            <strong>CPQL :</strong> coût complet divisé par les prospects
            qualifiés de la même cohorte.
          </li>
          <li>
            <strong>CAC :</strong> coût complet divisé par les nouveaux clients
            selon une définition et une période explicites.
          </li>
          <li>
            <strong>Consent Mode :</strong> mécanisme qui transmet des états de
            consentement aux balises Google ; ce n’est pas une bannière.
          </li>
          <li>
            <strong>Data Manager :</strong> ensemble de connexions Google pour
            utiliser des données first-party ; son acceptation technique ne
            remplace ni le CRM ni la conformité.
          </li>
        </ul>
        <p>Sources primaires principales :</p>
        <ul>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/10029210?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — FAQ sur les imports de conversions hors ligne
            </a>
            , notamment les fenêtres actuelles de 90 et 63 jours ;
          </li>
          <li>
            <a
              href="https://developers.google.com/google-ads/api/docs/deprecations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads API — dépréciations et restriction du 15 juin 2026
            </a>
            ;
          </li>
          <li>
            <a
              href="https://developers.google.com/google-ads/api/docs/conversions/upload-offline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google for Developers — gestion des conversions hors ligne
            </a>
            , identifiants et diagnostics ;
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/3438531?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — options « Une », « Toutes » et taux de répétition
            </a>
            ;
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/3123169?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — fenêtres après clic, vue engagée et impression
            </a>
            ;
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/11461796?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — actions principales, secondaires et objectifs
            </a>
            ;
          </li>
          <li>
            <a
              href="https://support.google.com/analytics/answer/14218557?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics — vérification des quatre signaux de consentement
            </a>
            ;
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/9099302?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — détails disponibles pour les appels
            </a>
            ;
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/6100664?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — différences entre clics, appels suivis et imports
            </a>
            ;
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/6275629?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — import des conversions d’appel et risque de double
              comptage
            </a>
            ;
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/14102450?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — différence entre attribution et Conversion Lift
            </a>
            ;
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — cookies, consentement et pseudonymisation
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
