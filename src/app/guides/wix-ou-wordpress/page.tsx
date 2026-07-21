import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("wix-ou-wordpress");

// --- METADATA SEO (title/description/dates depuis src/lib/guides.ts) ---
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
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
    // og:image générée par opengraph-image.tsx (convention Next.js).
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

// --- JSON-LD SCHEMAS (constantes statiques uniquement) ---
const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.cardTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
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
    knowsAbout: [
      "Développement web",
      "WordPress",
      "Créateurs de sites (Wix)",
      "Next.js",
      "React",
      "SEO",
      "Chiffrage de projets web",
    ],
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
      name: "Wix ou WordPress",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Wix est-il vraiment gratuit ?",
    answer:
      "Une version gratuite existe, mais elle affiche la marque Wix et utilise une adresse en wix.com. Pour un site professionnel avec son propre domaine, il faut un forfait payant ; la vente en ligne demande un forfait e-commerce.",
  },
  {
    question: "WordPress est-il vraiment gratuit ?",
    answer:
      "Le logiciel de wordpress.org est gratuit. Il faut toutefois payer l’hébergement, le domaine, certaines extensions et surtout prévoir les mises à jour, sauvegardes et contrôles de sécurité.",
  },
  {
    question: "Quel outil est le meilleur pour le référencement ?",
    answer:
      "Les deux peuvent être visibles sur Google. WordPress offre davantage de liberté pour une stratégie de contenu et des réglages avancés ; Wix convient à de nombreux besoins locaux ou simples. La qualité des pages et du travail éditorial reste déterminante.",
  },
  {
    question: "Wix ou WordPress pour vendre en ligne ?",
    answer:
      "Wix convient à une petite boutique simple. WooCommerce, l’extension e-commerce de WordPress, offre plus de liberté mais demande davantage d’entretien. Pour une boutique importante, comparez aussi Shopify et les besoins d’intégration.",
  },
  {
    question: "Peut-on quitter Wix facilement ?",
    answer:
      "Les produits, contacts et commandes peuvent être exportés, mais pas le site complet, son design ni le blog via un export officiel. Un départ implique généralement de reconstruire les pages sur une autre solution.",
  },
  {
    question: "Quelle solution est la plus sûre ?",
    answer:
      "Wix gère l’infrastructure et les mises à jour. Avec WordPress, la sécurité dépend de l’hébergement, des extensions et de la maintenance. Un WordPress suivi sérieusement peut être sûr ; un site abandonné devient plus exposé.",
  },
  {
    question: "Wix est-il adapté aux débutants ?",
    answer:
      "Oui. Son intérêt principal est de permettre à une personne non technique de créer et modifier seule un site simple, avec l’hébergement et la maintenance technique inclus.",
  },
  {
    question: "Qui doit posséder le nom de domaine ?",
    answer:
      "Votre entreprise, quel que soit l’outil choisi. Le compte du domaine doit être à votre nom et accessible par au moins deux personnes de confiance.",
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
          { label: "Wix ou WordPress" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Wix privilégie la simplicité ; WordPress offre davantage de liberté mais demande un entretien organisé. Comparez les coûts, l’autonomie, le référencement et ce que vous pourrez récupérer si vous changez d’outil."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Wix : simple et tout-en-un",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "WordPress : libre, mais à entretenir",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "La sortie doit être anticipée",
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
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          {
            href: "/guides/cout-maintenance-site-internet",
            label: "Coût de la maintenance",
          },
          {
            href: "/guides/woocommerce-ou-shopify",
            label: "WooCommerce ou Shopify ?",
          },
          {
            href: "/services/sites-vitrines",
            label: "Sites vitrines sur mesure",
          },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Wix ou WordPress : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous devez créer le site de votre entreprise et vous voulez pouvoir
          changer un texte ou une photo sans appeler un développeur. Wix paraît
          plus simple ; WordPress semble offrir davantage de possibilités.{" "}
          <strong>Lequel choisir sans regretter dans deux ans ?</strong> Wix
          convient très bien à un site simple que vous souhaitez gérer seul.
          WordPress demande plus d’entretien, mais laisse davantage de liberté
          pour publier, faire évoluer le site et changer de prestataire.
        </p>

        <InfoBox variant="blue" title="Le choix rapide">
          Choisissez Wix si votre priorité est de mettre en ligne un site simple
          et de ne pas gérer la technique. Choisissez WordPress.org si vous
          acceptez un hébergement et une maintenance séparés en échange de plus
          de liberté. Si votre site actuel remplit déjà son rôle, ne migrez pas
          seulement pour changer d’outil.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Le verdict selon votre situation",
            },
            { id: "difference", label: "2. La différence au quotidien" },
            { id: "prix", label: "3. Comparer les coûts complets" },
            { id: "autonomie", label: "4. Modifier et entretenir le site" },
            { id: "seo", label: "5. Référencement et vitesse" },
            { id: "sortie", label: "6. Ce que vous récupérez en partant" },
            { id: "securite", label: "7. Sécurité et données" },
            { id: "profils", label: "8. Quel choix pour votre entreprise ?" },
            {
              id: "avant-signature",
              label: "9. Les contrôles avant de signer",
            },
            {
              id: "autres-options",
              label: "10. Quand regarder une autre solution",
            },
          ]}
        />

        <h2 id="reponse-rapide">
          1. Wix ou WordPress : le verdict selon votre situation
        </h2>

        <GuideTable
          headers={[
            "Votre besoin principal",
            "Choix à comparer d’abord",
            "Pourquoi",
          ]}
          rows={[
            [
              "Présenter l’activité avec quelques pages et tout modifier seul",
              "Wix",
              "L’hébergement, la sécurité et les mises à jour techniques sont inclus",
            ],
            [
              "Publier régulièrement des articles et faire évoluer les contenus",
              "WordPress.org",
              "L’outil éditorial et les extensions offrent davantage de liberté",
            ],
            [
              "Conserver un site WordPress qui fonctionne déjà",
              "Rester sur WordPress",
              "Une migration sans problème précis ajoute du coût et du risque",
            ],
            [
              "Tester une activité avec un budget très limité",
              "Wix ou WordPress simple",
              "Le contenu et le temps disponible doivent départager les deux",
            ],
            [
              "Vendre un petit catalogue simple",
              "Wix e-commerce ou WooCommerce",
              "Comparez surtout paiement, gestion des produits et entretien",
            ],
          ]}
        />

        <p>
          Ce tableau donne un point de départ, pas une règle absolue. Le
          prestataire, la qualité des contenus et la façon dont le site sera
          entretenu comptent souvent davantage que le nom de la plateforme.
        </p>

        <h2 id="difference">2. Quelle différence verrez-vous au quotidien ?</h2>

        <p>
          <strong>Wix est un service tout-en-un.</strong> Vous créez le site
          dans son éditeur, l’hébergement est inclus et Wix gère les mises à
          jour de la plateforme. Cette simplicité réduit les décisions
          techniques. En échange, le site reste lié à Wix et certaines fonctions
          avancées passent par des applications ou les limites prévues par
          l’éditeur.
        </p>

        <p>
          <strong>
            WordPress.org est un logiciel que vous installez chez l’hébergeur de
            votre choix.
          </strong>{" "}
          Vous pouvez changer d’hébergeur, choisir vos extensions et intervenir
          plus librement sur la structure. En échange, quelqu’un doit suivre les
          mises à jour, les sauvegardes et la sécurité. Attention à ne pas le
          confondre avec WordPress.com, service hébergé par abonnement dont le
          fonctionnement se rapproche davantage de Wix.
        </p>

        <p>
          Dans les deux cas, un site bien préparé peut être facile à utiliser.
          Demandez une démonstration avec vos propres tâches : modifier un
          service, publier une actualité, remplacer une photo et retrouver une
          demande reçue par formulaire.
        </p>

        <h2 id="prix">
          3. Comparez les coûts complets, pas le mot « gratuit »
        </h2>

        <p>
          Les prix Wix varient selon le pays, la durée d’engagement et le
          forfait. La{" "}
          <a
            href="https://www.wix.com/plans"
            target="_blank"
            rel="noopener noreferrer"
          >
            page tarifaire officielle de Wix
          </a>{" "}
          précise d’ailleurs que la devise et le montant dépendent de la
          localisation. Relevez le prix affiché sur votre page de commande, le
          renouvellement du domaine, l’email professionnel et les applications
          payantes avant de comparer.
        </p>

        <p>
          WordPress.org ne facture pas le logiciel. Il faut ajouter
          l’hébergement, le domaine, les éventuelles licences et la maintenance.
          Demandez le prix de la première année et celui du renouvellement, puis
          faites chiffrer les sauvegardes, les mises à jour et l’assistance.
          Selon que votre équipe réalise ces tâches ou les délègue, la facture
          annuelle ne couvrira pas le même service.
        </p>

        <GuideTable
          headers={["Poste", "Wix", "WordPress.org"]}
          rows={[
            [
              "Hébergement",
              "Inclus dans le forfait",
              "À choisir et payer séparément",
            ],
            [
              "Mises à jour techniques",
              "Gérées par Wix",
              "À réaliser ou déléguer",
            ],
            [
              "Domaine",
              "Souvent offert un an, puis renouvelé",
              "Chez l’hébergeur ou un bureau d’enregistrement",
            ],
            [
              "Email professionnel",
              "Généralement en supplément",
              "Selon l’offre d’hébergement",
            ],
            [
              "Fonctions supplémentaires",
              "Applications parfois payantes",
              "Extensions gratuites ou payantes",
            ],
            [
              "Création par un prestataire",
              "Possible et facturée séparément",
              "Possible et facturée séparément",
            ],
          ]}
        />

        <p>
          Ajoutez aussi votre temps. Construire soi-même un site économique peut
          être une bonne décision, mais les heures consacrées au design, aux
          textes et aux réglages ne sont pas gratuites pour un dirigeant. Pour
          comparer un projet confié à un professionnel, consultez notre guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d’un site vitrine</Link>.
        </p>

        <h2 id="autonomie">4. Qui modifiera et entretiendra le site ?</h2>

        <p>
          Wix donne généralement plus d’autonomie immédiate à une personne qui
          ne veut pas s’occuper de technique. L’éditeur visuel, l’hébergement et
          les mises à jour sont réunis au même endroit. C’est un avantage réel
          pour une petite entreprise qui publie peu et souhaite tout gérer
          elle-même.
        </p>

        <p>
          WordPress sépare l’usage courant et l’entretien technique. Écrire une
          page ou changer une photo peut rester simple ; mettre à jour le
          logiciel, tester les extensions, sauvegarder et surveiller la sécurité
          demande une responsabilité claire. Ces tâches peuvent être confiées à
          un prestataire, avec un coût à prévoir dans le contrat.
        </p>

        <InfoBox variant="emerald" title="Faites le test avant de choisir">
          Demandez à la personne qui utilisera le site de modifier une vraie
          page dans une version de démonstration. Si cette opération reste
          difficile, la promesse d’autonomie ne sera probablement pas tenue,
          quel que soit l’outil.
        </InfoBox>

        <p>
          Notre guide sur le{" "}
          <Link href="/guides/cout-maintenance-site-internet">
            coût de la maintenance d’un site
          </Link>{" "}
          explique les tâches à inclure et les limites d’un forfait.
        </p>

        <h2 id="seo">
          5. Wix ou WordPress pour le référencement et la vitesse ?
        </h2>

        <p>
          Wix peut être correctement référencé. L’ancienne statistique affirmant
          que presque aucun site Wix ne recevait de trafic Google provenait
          d’une étude Ahrefs de 2019 ensuite retirée par son auteur pour des
          problèmes de méthode. Google a également indiqué que Wix convenait au
          référencement après les progrès réalisés par la plateforme.
        </p>

        <p>
          WordPress conserve davantage de liberté pour organiser un grand volume
          de contenus, modifier les adresses, gérer le multilingue ou intervenir
          sur des réglages techniques avancés. Cet avantage devient utile
          lorsque la publication régulière et la visibilité nationale occupent
          une place importante. Il ne remplace pas une stratégie éditoriale ni
          de bons contenus.
        </p>

        <p>
          La vitesse ne se déduit pas non plus du logo. Dans les{" "}
          <a
            href="https://almanac.httparchive.org/en/2025/cms"
            target="_blank"
            rel="noopener noreferrer"
          >
            données mobiles du Web Almanac 2025
          </a>
          ,{" "}
          <strong>
            74 % des sites Wix de l’échantillon atteignaient les seuils jugés
            bons pour les trois Core Web Vitals, contre 45 % des sites WordPress
          </strong>
          . Ces données décrivent des sites réels observés sur mobile, pas tous
          les sites ni votre futur projet. Wix contrôle son infrastructure ; la
          qualité d’un WordPress varie fortement selon le thème, les extensions
          et l’hébergement. Un WordPress bien construit peut être très rapide,
          mais ce résultat doit être vérifié sur le site livré.
        </p>

        <h2 id="sortie">6. Que récupérez-vous si vous changez de solution ?</h2>

        <p>
          C’est la différence la plus importante à comprendre avant de signer.
          La documentation officielle de Wix indique que le site ne peut pas
          être hébergé ailleurs. Elle documente des exports distincts pour les{" "}
          <a
            href="https://support.wix.com/en/article/wix-stores-exporting-your-product-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            produits
          </a>
          , les{" "}
          <a
            href="https://support.wix.com/en/article/wix-contacts-exporting-your-contacts"
            target="_blank"
            rel="noopener noreferrer"
          >
            contacts
          </a>{" "}
          et les{" "}
          <a
            href="https://support.wix.com/en/article/exporting-orders-3126323"
            target="_blank"
            rel="noopener noreferrer"
          >
            commandes
          </a>
          . Les pages, leur design et le blog ne sont pas exportés comme un site
          réutilisable sur une autre plateforme.
        </p>

        <GuideTable
          headers={["Élément", "Départ de Wix", "Précaution utile"]}
          rows={[
            [
              "Produits",
              "Export en fichier possible",
              "Conserver des exports réguliers",
            ],
            [
              "Contacts et commandes",
              "Export possible",
              "Vérifier les champs et les limites",
            ],
            [
              "Pages et design",
              "Reconstruction nécessaire",
              "Garder textes et images sources",
            ],
            [
              "Articles de blog",
              "Pas d’export officiel complet",
              "Conserver une copie des contenus",
            ],
            [
              "Nom de domaine",
              "Transférable s’il est à votre nom",
              "Contrôler le compte dès le départ",
            ],
          ]}
        />

        <p>
          Un site WordPress peut généralement être déplacé chez un autre
          hébergeur avec ses fichiers et sa base de données, sous réserve des
          licences utilisées et des accès disponibles. Cela ne signifie pas
          qu’une migration est gratuite ni sans risque, mais elle offre
          davantage d’options.
        </p>

        <p>
          Si vous utilisez déjà Wix et n’avez aucun projet de départ, trois
          précautions restent utiles : vérifiez le nom du propriétaire du
          domaine, exportez régulièrement les données disponibles et gardez vos
          textes et images dans un espace contrôlé par l’entreprise.
        </p>

        <h2 id="securite">7. Sécurité et données : qui s’occupe de quoi ?</h2>

        <p>
          Chez Wix, la plateforme gère les serveurs, le logiciel principal et
          les mises à jour. Votre entreprise reste responsable de ses comptes,
          des droits accordés aux collaborateurs, des contenus publiés et de ses
          obligations concernant les données personnelles.
        </p>

        <p>
          Chez WordPress, la responsabilité technique est partagée entre
          l’hébergeur, les éditeurs d’extensions, le mainteneur et votre
          entreprise. Le{" "}
          <a
            href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport 2026 de Patchstack
          </a>
          , éditeur spécialisé qui vend des services de sécurité, attribue la
          majorité des vulnérabilités recensées dans son corpus aux extensions.
          Ce constat dépend de ses données ; la précaution pratique reste de
          limiter les composants, de les choisir suivis et de les mettre à jour
          après contrôle.
        </p>

        <p>
          Pour les données collectées par formulaires ou boutique, vérifiez
          l’hébergement, les sous-traitants, les accès, la politique de
          confidentialité et les traceurs. Une plateforme ne remplit pas
          automatiquement vos obligations à votre place.
        </p>

        <h2 id="profils">8. Quel choix pour votre entreprise ?</h2>

        <GuideTable
          headers={[
            "Profil",
            "Choix probable",
            "Point à vérifier avant de signer",
          ]}
          rows={[
            [
              "Indépendant ou association, site de présentation simple",
              "Wix",
              "Le forfait, le domaine et l’export des contenus",
            ],
            [
              "TPE qui publie un article occasionnel",
              "Wix ou WordPress",
              "Qui fera les mises à jour et combien de temps sera consacré au site",
            ],
            [
              "Entreprise dont le contenu attire régulièrement des prospects",
              "WordPress souvent pertinent",
              "La maintenance, la structure éditoriale et les accès",
            ],
            [
              "Petite boutique avec catalogue standard",
              "Wix e-commerce ou WooCommerce",
              "Paiement, stock, livraison, applications et entretien",
            ],
            [
              "Site WordPress existant et satisfaisant",
              "Conserver et améliorer",
              "Le problème précis qu’une migration prétend résoudre",
            ],
          ]}
        />

        <p>
          Pour un projet e-commerce, le choix mérite un comparatif séparé :
          consultez{" "}
          <Link href="/guides/woocommerce-ou-shopify">
            WooCommerce ou Shopify
          </Link>
          . Pour un site éditorial déjà important, une migration doit intégrer
          les contenus, les adresses existantes et le suivi après mise en ligne.
        </p>

        <h2 id="avant-signature">9. Les neuf contrôles avant de signer</h2>

        <ol>
          <li>Décrire le rôle du site en une phrase.</li>
          <li>
            Lister les pages et fonctions réellement nécessaires au lancement.
          </li>
          <li>Faire tester l’éditeur par la personne qui publiera.</li>
          <li>
            Calculer abonnement, licences, maintenance et temps interne sur
            trois ans.
          </li>
          <li>Vérifier que le domaine appartient à l’entreprise.</li>
          <li>Demander ce qui peut être exporté et dans quel format.</li>
          <li>
            Nommer la personne responsable des sauvegardes et mises à jour.
          </li>
          <li>Tester le site sur téléphone avec les vrais contenus.</li>
          <li>Faire écrire les coûts et conditions d’une éventuelle sortie.</li>
        </ol>

        <GuideInlineCTA
          title="Vous hésitez encore entre Wix et WordPress ?"
          description="Décrivez le rôle du site, votre budget et la personne qui le mettra à jour. Nous vous indiquerons les points à comparer et pouvons aussi vous dire quand rester sur l’outil actuel est la décision la plus raisonnable."
          tags={[
            "Coût complet sur la durée",
            "Autonomie et maintenance clarifiées",
            "Aucune plateforme imposée",
          ]}
        />

        <h2 id="autres-options">
          10. Quand faut-il regarder une autre solution ?
        </h2>

        <p>
          Wix et WordPress couvrent une grande partie des sites vitrines. Une
          autre solution mérite d’être étudiée lorsque votre activité exige une
          connexion profonde à des outils internes, une administration très
          particulière, des parcours difficiles à reproduire ou des contraintes
          techniques spécifiques. Cela peut conduire à une autre plateforme, à
          une approche hybride ou à un développement dédié.
        </p>

        <p>
          Cette troisième option n’est pas automatiquement meilleure pour un
          site important. Elle doit résoudre un besoin que Wix ou WordPress
          traiteraient mal et son coût doit être comparé aux solutions standard.
          Le guide{" "}
          <Link href="/guides/template-ou-site-sur-mesure">
            template ou site sur mesure
          </Link>{" "}
          aide à distinguer personnalisation utile et développement excessif.
        </p>

        <InfoBox
          variant="emerald"
          title="La bonne décision tient en une phrase"
        >
          Wix privilégie la simplicité immédiate ; WordPress privilégie la
          liberté et demande un entretien organisé. Choisissez selon la personne
          qui fera vivre le site et selon ce que vous devrez pouvoir emporter
          demain.
        </InfoBox>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide (consultées
          en juillet 2026) :{" "}
          <a
            href="https://www.wix.com/plans"
            target="_blank"
            rel="noopener noreferrer"
          >
            tarifs officiels Wix
          </a>{" "}
          et pages support officielles Wix (
          <a
            href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere"
            target="_blank"
            rel="noopener noreferrer"
          >
            hébergement externe impossible
          </a>
          ,{" "}
          <a
            href="https://support.wix.com/en/article/wix-blog-request-exporting-blog-posts-to-other-platforms"
            target="_blank"
            rel="noopener noreferrer"
          >
            export du blog indisponible
          </a>
          ,{" "}
          <a
            href="https://support.wix.com/en/article/wix-stores-exporting-your-product-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            export des produits
          </a>
          ,{" "}
          <a
            href="https://support.wix.com/en/article/wix-contacts-exporting-your-contacts"
            target="_blank"
            rel="noopener noreferrer"
          >
            export des contacts
          </a>
          ,{" "}
          <a
            href="https://support.wix.com/en/article/exporting-orders-3126323"
            target="_blank"
            rel="noopener noreferrer"
          >
            export des commandes
          </a>{" "}
          et{" "}
          <a
            href="https://support.wix.com/en/article/transferring-your-wix-domain-away-from-wix-2477749"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert du domaine
          </a>
          ) ;{" "}
          <a
            href="https://wordpress.com/support/import/import-from-wix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress.com, importateur depuis Wix
          </a>{" "}
          ;{" "}
          <a
            href="https://ahrefs.com/blog/wix-seo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahrefs, « Is Wix Good for SEO? » (avec la note de retrait de
            l&apos;étude 2019)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.searchenginejournal.com/google-john-mueller-wordpress-versus-wix/430679/"
            target="_blank"
            rel="noopener noreferrer"
          >
            déclaration de John Mueller (Google) sur Wix
          </a>{" "}
          ;{" "}
          <a
            href="https://almanac.httparchive.org/en/2025/cms"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTTP Archive, Web Almanac 2025 (chapitre CMS — Core Web Vitals et
            scores SEO par plateforme)
          </a>{" "}
          ;{" "}
          <a
            href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patchstack, State of WordPress Security 2026
          </a>
          . Les prix évoluent et dépendent de la localisation : vérifiez la page
          de commande avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Les informations tarifaires dépendent du pays, du forfait et de la
            date de commande. Wix est une marque de Wix.com Ltd ; WordPress est
            une marque de la WordPress Foundation. Ce guide est indépendant :
            aucun lien d&apos;affiliation, aucune commission d&apos;aucun
            éditeur, hébergeur ou plateforme cités.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
