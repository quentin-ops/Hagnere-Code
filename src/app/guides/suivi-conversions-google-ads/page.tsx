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
    "Devis envoyé",
    "Une proposition réelle est remise avec numéro, date, montant et devise.",
    "Le devis sera accepté ou payé.",
  ],
  [
    "Vente",
    "Votre définition est constatée : signature, paiement ou réalisation, valeur et statut.",
    "La marge et la causalité publicitaire sont prouvées.",
  ],
  [
    "Marge",
    "Une formule nommée précise les coûts, la période et le caractère réel ou estimé.",
    "Google Ads est la seule cause du résultat.",
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
            title: "7 étapes à rapprocher",
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
        faqTitle="Suivi Google Ads : quatre questions pratiques"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Exemple entièrement fictif : Google Ads affiche 72 événements. Votre
          outil commercial a reçu 68 demandes. Après rapprochement des doubles
          envois, il en reste 60, dont 18 correspondent à l’offre. Neuf devis
          ont été envoyés et quatre ventes conclues. Aucun de ces nombres n’est
          forcément faux : ils décrivent simplement des étapes différentes.
        </p>
        <p>
          Dans Google Ads, une conversion est l’action que l’entreprise a choisi
          de compter : un formulaire, un appel, un achat ou une étape importée
          depuis son outil commercial. Ce n’est donc pas automatiquement un
          client. Ce guide vous aide à suivre les mêmes dossiers de l’événement
          envoyé jusqu’à la vente et à la marge. À la fin, vous pourrez décider
          quelle action garder en observation, laquelle pourrait guider les
          enchères, ou pourquoi il vaut mieux ne rien changer pour l’instant.
        </p>

        <GuideToc
          items={[
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
            {
              id: "comprendre-ecarts",
              label: "Expliquer les écarts entre outils",
            },
            { id: "exemple-cohorte", label: "Rejouer un exemple fictif" },
            { id: "decider", label: "Décider sans dérégler les enchères" },
          ]}
        />

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
            refus. Étendez l’examen aux données importées lorsque la loi ou les
            règles Google exigent une autorisation. Ce test technique ne vaut
            pas validation juridique.
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

        <h2 id="comprendre-ecarts">
          6. Quand deux outils divergent, comparez définitions, dates et nature
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

        <h3>Évitez deux outils qui font tous les deux foi</h3>
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

        <h3>Séparez ce qui est observé de ce qui est modélisé</h3>
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

        <h3>Le hachage ne rend pas les données anonymes</h3>
        <p>
          Les conversions avancées peuvent utiliser des données fournies par le
          client, comme l’e-mail ou le téléphone, puis hachées selon les règles
          du produit. Cela exige des règles d’utilisation internes, le respect
          des conditions Google et l’examen de l’autorisation applicable. La{" "}
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
          7. Exemple fictif : 72 événements bruts, 60 demandes uniques et 4
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

        <h2 id="decider">
          8. Décidez de conserver, corriger, approfondir ou ne rien changer
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

        <GuideInlineCTA
          title="Faire tester la chaîne qui pilote vos enchères"
          description="Décrivez les actions suivies, les outils utilisés et l’endroit où les nombres cessent de correspondre. Votre demande permettra de déterminer si le besoin relève d’une balise, d’un rapprochement avec l’outil commercial, d’une définition métier ou d’aucun changement pour l’instant. Aucun mot de passe ni fichier contenant des données clients n’est demandé dans le formulaire."
          tags={[
            "Diagnostic avant recommandation",
            "Aucun accès demandé",
            "Ne rien changer reste possible",
          ]}
          ctaLabel="Présenter mon écart de mesure"
          ctaHref="/demarrer-un-projet"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
