import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { formatGuideDate, getGuide, guidePath, guideUrl } from "@/lib/guides";

const guide = getGuide("woocommerce-ou-shopify");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
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
  headline: guide.cardTitle,
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
    knowsAbout: [
      "Développement web",
      "E-commerce",
      "WooCommerce",
      "Shopify",
      "Next.js",
      "React",
      "Chiffrage de projets web",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_URL + "/logos/logo-dark.png",
    },
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
      name: "WooCommerce ou Shopify",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "WooCommerce est-il meilleur que Shopify ?",
    answer:
      "Non, car ils ne vous font pas porter les mêmes responsabilités. Shopify convient mieux à une équipe qui veut déléguer l'hébergement et les mises à jour de la plateforme. WooCommerce convient mieux à une entreprise déjà à l'aise avec WordPress, prête à organiser l'hébergement, la maintenance et les sauvegardes.",
  },
  {
    question: "WooCommerce est-il vraiment gratuit ?",
    answer:
      "Le logiciel de base est gratuit, mais une boutique ne l'est pas. Il faut financer l'hébergement, le nom de domaine, la construction, les éventuelles extensions, les sauvegardes, la sécurité et le temps d'entretien. Demandez un coût annuel complet, pas seulement le prix du module.",
  },
  {
    question: "Shopify est-il adapté à un commerce physique ?",
    answer:
      "Oui, surtout si vous souhaitez rapprocher vente en ligne, caisse et stock dans le même environnement. Vérifiez toutefois les fonctions réellement incluses dans votre forfait et le coût de Shopify POS Pro par emplacement si vous avez besoin des fonctions avancées en boutique.",
  },
  {
    question:
      "Quelle solution est la meilleure pour le référencement naturel ?",
    answer:
      "Les deux peuvent obtenir de bonnes positions si les pages sont utiles, rapides et bien structurées. WooCommerce donne davantage de liberté sur WordPress ; Shopify impose davantage son organisation mais simplifie l'exploitation technique. Le meilleur choix dépend surtout de votre contenu existant, du temps disponible et des compétences de l'équipe pour entretenir la boutique.",
  },
  {
    question: "Peut-on migrer de WooCommerce vers Shopify, ou l'inverse ?",
    answer:
      "Oui, mais ce n'est pas un simple changement de bouton. Les produits, clients et commandes peuvent être repris, tandis que le thème, les applications, certains réglages et parfois les comptes clients demandent un traitement séparé. Il faut aussi prévoir les redirections d'adresses pour limiter les pertes de référencement.",
  },
  {
    question: "Quand faut-il envisager un e-commerce sur mesure ?",
    answer:
      "Envisagez-le lorsque la façon de vendre constitue réellement votre avantage : configurateur, tarification par client, parcours B2B, abonnement inhabituel ou échanges profonds avec vos outils internes. Pour une boutique standard ou un marché encore incertain, une plateforme existante reste souvent plus raisonnable.",
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
          { label: "WooCommerce ou Shopify" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous hésitez entre WooCommerce et Shopify pour vendre en ligne ? Comparez d'abord l'autonomie de votre équipe, l'entretien à assurer et la façon dont vous vendez réellement, puis les abonnements et les détails techniques."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Shopify simplifie l'entretien",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "WooCommerce donne plus de contrôle",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Le commerce réel décide",
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
            href: "/guides/shopify-ou-sur-mesure",
            label: "Shopify ou sur-mesure ?",
          },
          {
            href: "/guides/prix-site-e-commerce",
            label: "Prix d'un site e-commerce",
          },
          {
            href: "/guides/cout-maintenance-site-internet",
            label: "Coût de la maintenance",
          },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte de site",
          },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/methode", label: "Notre méthode de travail" },
        ]}
        faqTitle="WooCommerce ou Shopify : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous voulez vendre en ligne et deux noms reviennent partout :
          WooCommerce et Shopify. Pour choisir, ne commencez pas par une liste
          de fonctions. Demandez-vous plutôt{" "}
          <strong>qui va s&apos;occuper de la boutique chaque semaine</strong>,
          ce que votre entreprise vend réellement et quelle liberté elle
          souhaite conserver.
        </p>
        <p>
          Si personne dans l&apos;équipe ne veut gérer l&apos;hébergement, les
          mises à jour et les sauvegardes, Shopify est souvent le choix le plus
          simple. Si votre site WordPress attire déjà des clients et que vous
          disposez d&apos;une maintenance sérieuse, WooCommerce peut prolonger
          cet actif sans repartir de zéro. Si votre façon de vendre sort
          fortement des modèles standards, la bonne réponse peut être une
          solution spécialisée ou sur mesure.
        </p>

        <InfoBox variant="blue" title="La réponse utile avant les comparatifs">
          Shopify vous fait louer un environnement e-commerce entretenu par
          l&apos;éditeur. WooCommerce ajoute une boutique à WordPress et vous
          laisse choisir l&apos;hébergeur, les extensions et le prestataire qui
          l&apos;entretient. Vous payez donc d&apos;un côté un cadre plus
          intégré ; de l&apos;autre, davantage de liberté et la responsabilité
          qui va avec.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "Choisir selon votre équipe et votre activité",
            },
            {
              id: "de-quoi-parle-t-on",
              label: "Comprendre ce que vous achetez vraiment",
            },
            {
              id: "marche-francais",
              label: "Pourquoi les parts de marché ne décident pas pour vous",
            },
            {
              id: "cout-shopify",
              label: "Ce que vous payez avec Shopify",
            },
            {
              id: "cout-woocommerce",
              label: "Ce que vous payez avec WooCommerce",
            },
            {
              id: "paiement",
              label: "Comparer les frais de paiement sur vos propres ventes",
            },
            {
              id: "trois-profils",
              label: "Trois situations d'entreprise très différentes",
            },
            {
              id: "performance",
              label: "La vitesse dépend aussi de la façon de construire",
            },
            {
              id: "securite",
              label: "Qui entretient et sécurise la boutique ?",
            },
            {
              id: "seo",
              label: "Référencement et contenu existant",
            },
            {
              id: "migration",
              label: "Ce qu'implique un changement de plateforme",
            },
            {
              id: "verdict-par-profil",
              label: "La solution la plus cohérente selon votre cas",
            },
            {
              id: "troisieme-option",
              label: "Quand il faut regarder une autre solution",
            },
            {
              id: "methode",
              label: "Les questions à trancher avant de signer",
            },
          ]}
        />

        <h2 id="reponse-rapide">
          Choisissez d&apos;abord selon votre équipe et votre commerce
        </h2>
        <GuideTable
          caption="Une première orientation selon votre situation"
          headers={["Votre situation", "Choix à étudier d'abord", "Pourquoi"]}
          rows={[
            [
              "Vous partez de zéro et voulez peu de technique à gérer",
              "Shopify",
              "L'hébergement et les mises à jour de la plateforme sont inclus.",
            ],
            [
              "Votre WordPress attire déjà des visiteurs et reste bien entretenu",
              "WooCommerce",
              "La boutique rejoint le site et le contenu existants.",
            ],
            [
              "Vous vendez aussi en magasin et voulez rapprocher caisse et stock",
              "Shopify, puis comparaison des fonctions de point de vente",
              "L'environnement prévoit la vente en ligne et physique.",
            ],
            [
              "Votre tarification ou votre parcours d'achat est très particulier",
              "Logiciel spécialisé ou sur mesure",
              "Les contournements peuvent coûter plus cher que la bonne base.",
            ],
          ]}
        />
        <p>
          Cette orientation ne remplace pas une démonstration avec vos produits,
          vos règles de livraison, vos moyens de paiement et vos tâches
          quotidiennes. Elle vous évite simplement de choisir une plateforme
          parce qu&apos;elle est populaire ou parce qu&apos;un prestataire en
          est partenaire.
        </p>

        <h2 id="de-quoi-parle-t-on">
          Shopify et WooCommerce ne vous font pas porter le même travail
        </h2>
        <p>
          Shopify est un service hébergé : vous créez la boutique dans
          l&apos;environnement de l&apos;éditeur, qui exploite la plateforme.
          Vous choisissez un forfait, ajoutez éventuellement des applications et
          travaillez dans les limites prévues.
        </p>
        <p>
          WooCommerce est une extension e-commerce de WordPress. Le logiciel de
          base peut être installé gratuitement, mais votre entreprise ou son
          prestataire choisit et entretient l&apos;hébergement, le thème, les
          extensions, les sauvegardes et les mises à jour. Cette liberté est
          utile seulement si quelqu&apos;un en assume le suivi.
        </p>
        <GuideTable
          caption="La différence de responsabilité"
          headers={["Sujet", "Shopify", "WooCommerce"]}
          rows={[
            [
              "Hébergement de la plateforme",
              "Compris dans le service",
              "À choisir et financer.",
            ],
            [
              "Mises à jour du cœur",
              "Gérées par Shopify",
              "À planifier avec WordPress et les extensions.",
            ],
            [
              "Personnalisation",
              "Dans le cadre et les interfaces de Shopify",
              "Très large, avec davantage de décisions techniques.",
            ],
            [
              "Changement de prestataire",
              "La plateforme reste Shopify",
              "Hébergeur et mainteneur peuvent être remplacés.",
            ],
          ]}
        />

        <p id="marche-francais">
          Une plateforme répandue offre généralement davantage de prestataires,
          de documentation et d&apos;extensions. C&apos;est un avantage réel,
          mais sa part de marché ne garantit ni la qualité de votre intégration,
          ni vos marges, ni la facilité de vos opérations. Revenez toujours à
          vos produits, votre équipe et vos canaux de vente.
        </p>

        <h2 id="cout-shopify">
          Avec Shopify, l&apos;abonnement est le début du calcul
        </h2>
        <p>
          La page française de Shopify affichait le 21 juillet 2026 les forfaits
          Basic, Grow et Advanced à 25 €, 66 € et 289 € par mois avec paiement
          annuel. Le paiement mensuel était affiché à 36 €, 105 € et 384 €. Ces
          tarifs peuvent changer et ne disent pas, à eux seuls, ce que votre
          boutique coûtera.
        </p>
        <GuideTable
          caption="Les postes à ajouter au forfait Shopify"
          headers={["Poste", "À vérifier", "Pourquoi"]}
          rows={[
            [
              "Forfait",
              "Fonctions, comptes salariés et engagement",
              "Le prix dépend du plan et du mode de paiement.",
            ],
            [
              "Thème et construction",
              "Personnalisation, contenus et import du catalogue",
              "Une plateforme prête ne crée pas votre boutique à votre place.",
            ],
            [
              "Applications",
              "Abonnements nécessaires au besoin réel",
              "Plusieurs petits abonnements s'additionnent.",
            ],
            [
              "Paiement et vente physique",
              "Taux, prestataire tiers et éventuel POS Pro",
              "Le chiffre d'affaires et les canaux modifient le coût.",
            ],
          ]}
        />
        <p>
          Shopify affiche également POS Pro à 79 € par mois et par emplacement
          pour des fonctions avancées en boutique physique. Ne l&apos;ajoutez
          pas automatiquement : vérifiez d&apos;abord si les fonctions incluses
          suffisent à vos usages.
        </p>

        <h2 id="cout-woocommerce">
          Avec WooCommerce, « gratuit » signifie logiciel de base gratuit
        </h2>
        <p>
          La boutique doit tout de même être hébergée, construite, sauvegardée
          et entretenue. Certaines extensions sont gratuites ; d&apos;autres
          sont vendues avec un renouvellement, par exemple pour des abonnements,
          réservations, langues ou modes de livraison particuliers. La page
          officielle de WooCommerce Subscriptions illustre ce modèle de licence,
          mais son prix doit être vérifié au moment du choix.
        </p>
        <GuideTable
          caption="Les postes à prévoir pour WooCommerce"
          headers={["Poste", "Question à poser", "Risque si on l'oublie"]}
          rows={[
            [
              "Hébergement",
              "Est-il adapté aux commandes, sauvegardes et périodes de pointe ?",
              "Lenteur ou indisponibilité lors des ventes.",
            ],
            [
              "Extensions",
              "Lesquelles sont indispensables et qui suit leur renouvellement ?",
              "Coûts dispersés et incompatibilités.",
            ],
            [
              "Maintenance",
              "Qui teste les mises à jour et restaure une sauvegarde ?",
              "Boutique fragile ou longtemps indisponible.",
            ],
            [
              "Temps interne",
              "Qui gère catalogue, commandes, contenus et incidents ?",
              "Une économie de licence absorbée par l'exploitation.",
            ],
          ]}
        />
        <p>
          Pour comparer honnêtement, demandez au prestataire un coût de création
          séparé du coût annuel d&apos;hébergement, de licences, de sauvegarde
          et de maintenance. Notre guide sur le{" "}
          <Link href="/guides/cout-maintenance-site-internet">
            coût de maintenance d&apos;un site
          </Link>{" "}
          détaille les questions à poser.
        </p>

        <h2 id="paiement">
          Calculez les frais de paiement avec votre panier et vos cartes
        </h2>
        <p>
          Les taux varient selon le forfait, le type de carte, le pays, la
          devise et le prestataire. Au 21 juillet 2026, Shopify affichait pour
          Basic 2,1 % + 0,30 € sur les cartes standard en ligne avec Shopify
          Payments, ainsi que 2 % de frais de transaction tiers si un autre
          prestataire était utilisé. Stripe affichait 1,5 % + 0,25 € pour une
          carte standard de l&apos;Espace économique européen. PayPlug affichait
          pour son offre Pro 1,1 % + 0,25 € sur une carte particulière de la
          zone euro, avec 30 € HT d&apos;abonnement mensuel et des conditions
          d&apos;éligibilité. PayPlug situe cette offre dans un segment
          indicatif de 100 000 € à 1 million d’euros de chiffre d’affaires
          annuel ; ce n’est donc pas son tarif Starter général.
        </p>
        <FormulaBox>
          Frais annuels estimés = taux × chiffre encaissé par carte + montant
          fixe × nombre de transactions + abonnements + frais de plateforme
        </FormulaBox>
        <p>
          Ces exemples ne permettent pas d&apos;annoncer un vainqueur. Prenez
          vos douze derniers mois ou une hypothèse prudente : chiffre encaissé,
          nombre de commandes, panier moyen, répartition des cartes et ventes
          internationales. Faites ensuite confirmer le calcul par chaque
          prestataire avant de signer.
        </p>

        <h2 id="trois-profils">
          Trois entreprises peuvent obtenir trois réponses différentes
        </h2>
        <p>
          <strong>Exemple fictif, composé de trois profils.</strong> Il ne
          décrit ni un client ni un témoignage réel. Ces situations servent à
          montrer pourquoi la même plateforme ne convient pas automatiquement à
          toutes les entreprises.
        </p>
        <GuideTable
          caption="Comparer les plateformes dans des situations concrètes"
          headers={[
            "Situation",
            "Ce qui pèse le plus",
            "Orientation raisonnable",
          ]}
          rows={[
            [
              "Une créatrice teste vingt produits sans équipe technique",
              "Lancer, encaisser et administrer simplement",
              "Shopify, avec peu d'applications au départ.",
            ],
            [
              "Une PME publie déjà des guides sur WordPress et délègue sa maintenance",
              "Conserver le contenu, le domaine et les habitudes",
              "WooCommerce mérite d'être testé sur l'existant.",
            ],
            [
              "Un commerçant vend en ligne et dans plusieurs points de vente",
              "Stocks, retours, caisse et droits des salariés",
              "Comparer Shopify POS avec le logiciel de caisse déjà utilisé.",
            ],
          ]}
        />
        <p>
          Ces exemples sont illustratifs, pas des recommandations automatiques.
          Une entreprise qui dispose déjà d&apos;un logiciel de caisse ou de
          gestion doit d&apos;abord vérifier ses modules e-commerce : une
          troisième plateforme peut créer des ressaisies inutiles.
        </p>

        <h2 id="performance">
          Vitesse, sécurité et référencement dépendent aussi de votre
          organisation
        </h2>
        <p>
          Shopify fournit un environnement hébergé relativement homogène, ce qui
          réduit certaines erreurs d&apos;exploitation. WooCommerce peut être
          très rapide ou très lent selon l&apos;hébergement, le thème, les
          extensions, les images et la qualité de la maintenance. Des données
          agrégées comme celles du Web Almanac donnent un contexte global ;
          elles ne prédisent pas le résultat de votre future boutique.
        </p>
        <p>
          Testez plutôt un prototype représentatif sur téléphone : page
          d&apos;accueil, catégorie, fiche produit, panier et paiement. Mesurez
          aussi pendant une opération commerciale. Une démonstration vide et une
          boutique avec catalogue, avis, vidéos et suivi marketing ne
          sollicitent pas le système de la même manière.
        </p>

        <h3 id="securite">
          Demandez qui fait quoi lorsqu&apos;un problème arrive
        </h3>
        <p>
          Avec Shopify, l&apos;éditeur exploite la plateforme centrale. Votre
          entreprise reste néanmoins responsable des accès salariés, des
          applications ajoutées, de ses contenus, de ses obligations et de ses
          procédures internes. Activez une authentification forte, limitez les
          droits et retirez les comptes inutiles.
        </p>
        <p>
          Avec WooCommerce, l&apos;hébergement, WordPress, le thème et les
          extensions forment un ensemble à entretenir. Les rapports de
          Patchstack et Wordfence décrivent des vulnérabilités dans
          l&apos;écosystème WordPress, mais leurs chiffres ne permettent pas de
          prédire le risque d&apos;une boutique précise. La question utile est
          opérationnelle : qui surveille, met à jour, sauvegarde, teste et
          restaure, avec quel délai ?
        </p>

        <h3 id="seo">
          Pour le référencement, partez de ce que vous possédez déjà
        </h3>
        <p>
          Un site WordPress qui reçoit déjà des visites représente un actif.
          Ajouter WooCommerce peut conserver le même environnement éditorial et
          les habitudes de publication. Shopify permet aussi de créer des
          contenus et de travailler le référencement, mais organise certaines
          adresses et fonctions dans son propre cadre.
        </p>
        <p>
          Aucun des deux outils ne crée automatiquement des pages utiles. Il
          faut des catégories compréhensibles, des fiches qui répondent aux
          questions d&apos;achat, des données produits propres, des liens
          internes et une boutique rapide. Si vous changez de plateforme, chaque
          ancienne adresse importante doit mener vers sa nouvelle équivalente.
        </p>

        <h2 id="migration">
          Changer de plateforme est un projet, pas un simple export
        </h2>
        <p>
          Shopify documente plusieurs méthodes pour migrer depuis WooCommerce,
          notamment l&apos;import de données et l&apos;usage
          d&apos;applications. Les produits, clients et commandes peuvent être
          repris, mais le thème, les applications, les automatisations et
          certains réglages ne se traduisent pas automatiquement d&apos;un
          environnement à l&apos;autre.
        </p>
        <GuideTable
          caption="Les éléments à préparer avant une migration"
          headers={["Élément", "Travail à prévoir", "Contrôle après import"]}
          rows={[
            [
              "Catalogue",
              "Produits, variantes, images, stocks et catégories",
              "Prix, TVA, disponibilité et pages.",
            ],
            [
              "Clients et commandes",
              "Champs, consentements et historique nécessaire",
              "Comptes, adresses et rapprochement comptable.",
            ],
            [
              "Référencement",
              "Inventaire des anciennes et nouvelles adresses",
              "Redirections, erreurs et trafic après lancement.",
            ],
            [
              "Fonctions",
              "Reconstruction du thème, des applications et des échanges",
              "Parcours d'achat complet sur mobile.",
            ],
          ]}
        />
        <p>
          Gardez des exports réguliers, le nom de domaine au nom de
          l&apos;entreprise et la liste des applications utilisées. Notre guide
          sur le{" "}
          <Link href="/guides/prix-refonte-site-internet">
            prix d&apos;une refonte
          </Link>{" "}
          explique les postes de migration et de préservation du référencement.
        </p>

        <h2 id="verdict-par-profil">
          La solution la plus cohérente selon votre situation
        </h2>
        <GuideTable
          caption="Résumé de décision par profil"
          headers={["Profil", "Choix à approfondir", "Condition importante"]}
          rows={[
            [
              "Lancement standard, peu de ressources techniques",
              "Shopify",
              "Limiter les applications et vérifier les frais réels.",
            ],
            [
              "WordPress actif, contenus importants, maintenance organisée",
              "WooCommerce",
              "Tester l'hébergement et prévoir l'entretien annuel.",
            ],
            [
              "Commerce physique à rapprocher du web",
              "Shopify ou module du logiciel de caisse",
              "Tester stocks, retours et droits en situation réelle.",
            ],
            [
              "Besoin B2B ou règles de vente particulières",
              "Solution spécialisée ou sur mesure",
              "Chiffrer les contournements avant de retenir une plateforme.",
            ],
            [
              "Marché encore incertain",
              "La solution la plus simple et réversible",
              "Valider la demande avant une construction importante.",
            ],
          ]}
        />

        <h2 id="troisieme-option">
          Parfois, ni WooCommerce ni Shopify n&apos;est le bon point de départ
        </h2>
        <p>
          Un logiciel métier peut déjà proposer une boutique reliée au stock et
          à la facturation. Une place de marché peut suffire pour tester une
          demande. Une solution e-commerce spécialisée peut mieux gérer un
          secteur précis. Et si votre avantage tient au parcours lui-même —
          configurateur, prix par client, abonnements inhabituels, commandes
          complexes — un{" "}
          <Link href="/guides/shopify-ou-sur-mesure">
            comparatif entre Shopify et le sur-mesure
          </Link>{" "}
          devient pertinent.
        </p>
        <p>
          Le sur-mesure n&apos;est pas une récompense pour une entreprise
          ambitieuse. Il ajoute un investissement et un entretien. Il se
          justifie lorsque les limites des plateformes gênent déjà un
          fonctionnement prouvé, ou lorsque la fonction spécifique crée une
          valeur commerciale assez claire pour être entretenue dans la durée.
        </p>

        <h2 id="methode">
          Avant de signer, obtenez une réponse claire à ces questions
        </h2>
        <ul>
          <li>
            Qui publie les produits, traite les commandes et répond aux
            incidents chaque semaine ?
          </li>
          <li>
            Qui assure les mises à jour, sauvegardes et tests techniques ?
          </li>
          <li>
            Quelles applications ou extensions sont réellement indispensables ?
          </li>
          <li>
            Comment la boutique échange-t-elle avec le stock, la caisse, la
            facturation et la livraison ?
          </li>
          <li>
            Quel est le coût sur trois ans avec création, abonnements, paiement,
            maintenance et temps interne ?
          </li>
          <li>
            Que récupérez-vous si vous changez de plateforme ou de prestataire ?
          </li>
        </ul>
        <p>
          Demandez une démonstration basée sur cinq opérations réelles : ajouter
          un produit, modifier un prix, préparer une commande, traiter un retour
          et corriger un stock. Vous verrez plus vite la différence entre une
          belle présentation et un outil adapté au quotidien.
        </p>

        <GuideInlineCTA
          title="Vous hésitez encore entre les deux plateformes ?"
          description="Expliquez-nous votre catalogue, vos canaux de vente, votre équipe et les outils déjà utilisés. Nous vous aiderons à comparer l'option la plus simple, y compris si elle ne nécessite pas de développement sur mesure."
          tags={[
            "Comparaison sur votre activité",
            "Coût complet",
            "Alternative possible",
          ]}
          ctaLabel="Faire examiner mon projet e-commerce"
        />

        <hr />
        <p className="text-sm">
          <strong>Sources consultées en juillet 2026.</strong> Contexte de
          performance :{" "}
          <a
            href="https://almanac.httparchive.org/en/2025/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTTP Archive, Web Almanac 2025
          </a>
          . Ces données agrégées ne prédisent pas la performance de votre
          boutique.
        </p>
        <p className="text-sm">
          Sécurité de l&apos;écosystème WordPress :{" "}
          <a
            href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patchstack, rapport 2026
          </a>{" "}
          et{" "}
          <a
            href="https://www.wordfence.com/blog/2025/04/2024-annual-wordpress-security-report-by-wordfence/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wordfence, rapport 2024
          </a>
          . Ces publications viennent d&apos;acteurs du secteur et ne
          constituent pas une probabilité de panne pour votre boutique.
        </p>
        <p className="text-sm">
          Migration de la boutique :{" "}
          <a
            href="https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Help Center, migration depuis WooCommerce
          </a>
          .
        </p>
        <p className="text-sm">
          Tarifs officiels, à vérifier de nouveau avant toute décision :{" "}
          <a
            href="https://www.shopify.com/fr/tarifs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify France
          </a>
          ,{" "}
          <a
            href="https://woocommerce.com/products/woocommerce-subscriptions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WooCommerce Subscriptions
          </a>
          ,{" "}
          <a
            href="https://stripe.com/fr/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe France
          </a>{" "}
          et{" "}
          <a
            href="https://www.payplug.com/fr/tarifs"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPlug France
          </a>
          . Les montants et taux publiés dans le guide sont des relevés datés,
          pas des garanties contractuelles.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
