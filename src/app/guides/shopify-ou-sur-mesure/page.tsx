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

const guide = getGuide("shopify-ou-sur-mesure");

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
      "E-commerce sur mesure",
      "Shopify",
      "Next.js",
      "React",
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
      name: "Shopify ou e-commerce sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Shopify ou site sur mesure : que choisir pour démarrer ?",
    answer:
      "Pour lancer une boutique standard, tester une offre ou vendre sans équipe technique, Shopify est généralement le choix le plus simple. Comparez d'autres solutions seulement si vos tarifs, votre catalogue, votre parcours de commande ou vos connexions métier sortent durablement du standard.",
  },
  {
    question: "Combien coûte réellement Shopify chaque mois ?",
    answer:
      "Le forfait officiel va de 25 à 289 € par mois en facturation annuelle, hors Shopify Plus. Ajoutez le paiement en ligne, les applications, le thème et l'éventuel accompagnement d'un prestataire. Le bon total est celui de vos factures sur douze mois, pas le seul abonnement affiché.",
  },
  {
    question:
      "Les commissions Shopify rendent-elles le sur-mesure moins cher ?",
    answer:
      "Pas automatiquement. Un site sur mesure paie lui aussi un prestataire de paiement. Pour comparer honnêtement, séparez les frais présents dans les deux solutions des frais propres à Shopify, puis ajoutez création, maintenance, hébergement et évolutions sur la même durée.",
  },
  {
    question: "Quand Shopify devient-il trop limité ?",
    answer:
      "Quand une contrainte revient chaque semaine : tarifs différents par client, règles de commande particulières, synchronisation complexe avec votre gestion, configurateur métier ou empilement d'applications pour contourner la plateforme. Un besoin ponctuel ne justifie pas à lui seul une reconstruction.",
  },
  {
    question: "Combien coûte un e-commerce sur mesure ?",
    answer:
      "Ce guide retient des repères éditoriaux de 15 000 à 40 000 € pour une boutique avec quelques connexions et de 40 000 à 120 000 € pour une plateforme plus complète. Ce ne sont pas des médianes de marché : les fonctions, les données, les connexions et la maintenance doivent être chiffrées séparément.",
  },
  {
    question: "Shopify Plus est-il la même chose qu'un site sur mesure ?",
    answer:
      "Non. Shopify Plus étend les fonctions de Shopify, notamment pour la vente entre entreprises, aussi appelée B2B, et le passage en caisse. L'entreprise reste sur la plateforme. L'offre démarre à 2 100 € par mois selon le tarif officiel cité, auxquels s'ajoutent la mise en place, les applications et l'accompagnement.",
  },
  {
    question: "Peut-on quitter Shopify facilement ?",
    answer:
      "Les produits, clients et commandes peuvent être exportés, mais pas les mots de passe clients. Le thème et les réglages d'applications ne se déplacent pas tels quels vers une autre solution. Une sortie demande donc une vraie migration, avec reprise des contenus, tests et redirections d'adresses.",
  },
  {
    question:
      "Une migration depuis Shopify fait-elle perdre le référencement ?",
    answer:
      "Elle crée un risque si les adresses des pages changent. Il faut inventorier les pages visibles dans Google, relier chaque ancienne adresse à la bonne nouvelle page par une redirection permanente, puis suivre l'indexation après la mise en ligne. Aucun prestataire sérieux ne peut garantir un trafic identique.",
  },
  {
    question: "Qu'est-ce qu'un e-commerce headless ?",
    answer:
      "C'est une boutique dont la vitrine est développée séparément, tandis que Shopify ou une autre plateforme continue de gérer les produits et les commandes. Cette architecture donne plus de liberté, mais ajoute du développement et de la maintenance. Elle répond à un besoin précis, pas à une simple envie de vitesse.",
  },
  {
    question: "Peut-on commencer avec Shopify puis évoluer plus tard ?",
    answer:
      "Oui, et c'est souvent une trajectoire raisonnable. Gardez le nom de domaine, les contenus et les comptes au nom de l'entreprise, exportez régulièrement les données et documentez les applications utilisées. Vous pourrez alors comparer une évolution, Shopify Plus ou une migration sans agir dans l'urgence.",
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
          { label: "Shopify ou e-commerce sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous hésitez entre Shopify et un site e-commerce sur mesure ? Comparez les deux à partir de votre activité, de vos coûts sur trois ans, de l’entretien nécessaire et de votre capacité à changer de solution."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Shopify convient souvent pour démarrer",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Comparez le coût complet sur 3 ans",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Le sur-mesure répond à une contrainte précise",
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
            href: "/guides/prix-site-e-commerce",
            label: "Prix d'un site e-commerce",
          },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte de site",
          },
          {
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          {
            href: "/ressources/kit-cahier-des-charges-site-internet",
            label: "Modèle de cahier des charges",
          },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Shopify ou sur-mesure : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous hésitez entre <strong>ouvrir votre boutique sur Shopify</strong>{" "}
          et{" "}
          <strong>
            faire développer un site e-commerce adapté à votre entreprise
          </strong>{" "}
          ? La réponse ne dépend pas de la solution que préfère votre
          prestataire. Elle dépend de ce que vous vendez, de la façon dont vos
          clients commandent et du coût que vous êtes prêt à porter dans la
          durée.
        </p>
        <p>
          Pour une boutique classique, un lancement ou un test de marché,
          Shopify est souvent le choix le plus raisonnable. Le sur-mesure mérite
          d&apos;être comparé lorsque des règles propres à votre métier
          reviennent sans cesse : tarifs par client, configurateur, stock
          complexe, commandes entre entreprises ou échanges profonds avec votre
          logiciel de gestion. Ce guide vous aide à reconnaître ces situations
          et à comparer les deux options sans favoriser automatiquement
          l&apos;une d&apos;elles.
        </p>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Quelle solution correspond à votre situation ?",
            },
            {
              id: "ce-que-vous-achetez",
              label: "2. Ce que vous achetez vraiment avec Shopify",
            },
            {
              id: "cout-shopify",
              label: "3. Calculer le coût réel de Shopify",
            },
            {
              id: "quand-shopify-convient",
              label: "4. Quand Shopify reste le bon choix",
            },
            {
              id: "quand-comparer",
              label: "5. Quand comparer une autre solution",
            },
            {
              id: "sur-mesure",
              label: "6. Ce qu'implique réellement le sur-mesure",
            },
            {
              id: "comparer-trois-ans",
              label: "7. Comparer les coûts sur trois ans",
            },
            {
              id: "quitter-shopify",
              label: "8. Préparer une éventuelle sortie",
            },
            {
              id: "headless",
              label: "9. Séparer la vitrine du moteur de vente",
            },
            {
              id: "decider",
              label: "10. Les questions à trancher avant un devis",
            },
          ]}
        />

        <h2 id="reponse-rapide">
          1. Quelle solution correspond à votre situation ?
        </h2>
        <p>
          Commencez par chercher votre cas dans ce tableau. Il donne une
          première orientation, pas un verdict définitif : un devis sérieux doit
          ensuite confirmer ce que chaque option comprend, les coûts récurrents
          et les contraintes de votre équipe.
        </p>
        <GuideTable
          headers={[
            "Votre situation",
            "Point de départ conseillé",
            "Raison principale",
          ]}
          rows={[
            [
              "Vous lancez une marque avec un catalogue et un parcours de commande classiques",
              "Shopify",
              "Vous pouvez vendre rapidement sans financer toute l'infrastructure",
            ],
            [
              "Votre boutique fonctionne déjà et les applications couvrent correctement vos besoins",
              "Rester sur Shopify",
              "Changer créerait un projet coûteux sans problème métier clair à résoudre",
            ],
            [
              "Chaque client professionnel a ses prix, règles de commande ou validations",
              "Comparer Shopify Plus, une plateforme spécialisée et le sur-mesure",
              "La vente aux entreprises peut dépasser les fonctions du forfait standard, sans imposer une seule réponse",
            ],
            [
              "Le produit exige un configurateur ou un parcours d'achat très particulier",
              "Étude comparative",
              "La contrainte métier, les volumes et les intégrations doivent décider",
            ],
            [
              "Vous avez surtout un problème de design, de contenu ou de conversion",
              "Améliorer l'existant d'abord",
              "Une reconstruction technique ne corrigera pas automatiquement l'offre ou les pages",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Le chiffre d'affaires ne décide pas à votre place"
        >
          Une boutique qui réalise beaucoup de ventes peut rester très bien
          servie par Shopify si son fonctionnement est standard. À
          l&apos;inverse, une entreprise plus petite peut avoir un besoin
          complexe dès le départ. Le bon déclencheur est une contrainte métier
          durable, pas un seuil de chiffre d&apos;affaires présenté comme
          universel.
        </InfoBox>

        <h2 id="ce-que-vous-achetez">
          2. Ce que vous achetez vraiment avec Shopify
        </h2>
        <p>
          Shopify est une plateforme hébergée : elle fournit le catalogue, le
          panier, le paiement, l&apos;administration, la sécurité de
          l&apos;infrastructure et les mises à jour principales. Votre
          entreprise n&apos;a donc pas à construire ni à exploiter toutes ces
          fonctions. C&apos;est ce qui rend la solution rapide à lancer et
          rassurante pour une petite équipe.
        </p>
        <p>
          En contrepartie, vous travaillez dans un cadre défini par Shopify.
          Certaines fonctions passent par des applications payantes, certaines
          personnalisations sont limitées selon le forfait et les tarifs de la
          plateforme peuvent évoluer. Ce compromis n&apos;est ni bon ni mauvais
          en soi : vous échangez une partie de votre liberté contre un service
          déjà exploité et maintenu.
        </p>
        <InfoBox
          variant="blue"
          title="Trois mots utiles, au moment où ils servent"
        >
          <strong>B2B</strong> désigne la vente entre entreprises, par exemple
          avec un tarif différent pour chaque client.{" "}
          <strong>Shopify Plus</strong> est l&apos;offre haut de gamme de
          Shopify, avec davantage de fonctions et un abonnement plus élevé. Une{" "}
          <strong>intégration</strong> est une connexion entre la boutique et un
          autre outil, comme votre logiciel de stock, de comptabilité ou de
          relation client.
        </InfoBox>

        <h2 id="cout-shopify">3. Calculer le coût réel de Shopify</h2>
        <p>
          Les tarifs officiels relevés en juillet 2026 commencent à 25 € par
          mois pour Basic, 66 € pour Grow et 289 € pour Advanced, en facturation
          annuelle. Shopify Plus démarre à 2 100 € par mois. Ces abonnements ne
          constituent qu&apos;une partie de la facture.
        </p>
        <GuideTable
          headers={["Poste", "Ce qu'il faut relever", "Question à poser"]}
          rows={[
            [
              "Abonnement",
              "Forfait actuel et éventuel engagement",
              "Quelles fonctions justifient le forfait supérieur ?",
            ],
            [
              "Paiement",
              "Pourcentage et montant fixe par commande",
              "Quel coût existerait aussi avec une autre solution ?",
            ],
            [
              "Applications",
              "Abonnements réellement payés sur douze mois",
              "Laquelle contourne une limite devenue structurelle ?",
            ],
            [
              "Prestataires",
              "Design, réglages, développement et support",
              "Qu'est-ce qui est inclus après la mise en ligne ?",
            ],
            [
              "Exploitation",
              "Temps interne, incidents et opérations manuelles",
              "Combien d'heures l'équipe consacre-t-elle chaque mois ?",
            ],
          ]}
        />
        <p>
          Les frais de paiement doivent être comparés avec prudence. Un site sur
          mesure utilise lui aussi un prestataire de paiement, qui facture les
          transactions. Pour éviter une fausse économie, comparez d&apos;un côté
          les coûts présents dans les deux options, et de l&apos;autre les frais
          propres à la plateforme.
        </p>
        <p>
          À titre de repère, Shopify affiche des taux de paiement allant de 1,5
          % à 1,1 %, auxquels s&apos;ajoutent 0,25 € par commande selon le
          forfait cité. Si vous utilisez un autre prestataire de paiement,
          Shopify annonce en plus des frais compris entre 2 % et 0,6 % selon le
          plan. Vérifiez toujours la page tarifaire au moment de signer : les
          taux dépendent du contrat et peuvent évoluer.
        </p>

        <h2 id="quand-shopify-convient">4. Quand Shopify reste le bon choix</h2>
        <p>
          Shopify reste particulièrement pertinent lorsque vos produits, vos
          promotions, vos livraisons et votre passage en caisse suivent des
          règles courantes. Vous profitez alors d&apos;une solution déjà
          éprouvée sans financer une équipe technique pour la maintenir.
        </p>
        <ul>
          <li>
            Vous voulez mettre une première offre en vente et apprendre à partir
            de vraies commandes.
          </li>
          <li>
            Votre catalogue peut être administré avec les fonctions natives et
            quelques applications réellement utiles.
          </li>
          <li>
            Votre équipe préfère consacrer son temps aux produits, au service
            client et à l&apos;acquisition plutôt qu&apos;à l&apos;exploitation
            technique.
          </li>
          <li>
            Les pics de trafic sont un enjeu important et vous souhaitez
            déléguer l&apos;infrastructure à la plateforme.
          </li>
        </ul>
        <p>
          Dans ces cas, une boutique sur mesure peut coûter davantage sans
          apporter de bénéfice perceptible au client. La bonne décision peut
          donc être de conserver Shopify, d&apos;alléger les applications et
          d&apos;investir plutôt dans les pages produits, les photos, le suivi
          des commandes ou la fidélisation.
        </p>

        <h2 id="quand-comparer">5. Quand comparer une autre solution</h2>
        <p>
          Il devient utile d&apos;ouvrir la comparaison lorsqu&apos;un même
          obstacle revient et vous oblige à multiplier les manipulations, les
          applications ou les exceptions. Les signaux les plus parlants sont
          ceux que vos équipes vivent déjà :
        </p>
        <ul>
          <li>
            les commerciaux ressaisissent les commandes ou corrigent les prix à
            la main ;
          </li>
          <li>
            le stock affiché diffère régulièrement de votre logiciel de gestion
            ;
          </li>
          <li>
            chaque client professionnel dispose de conditions, d&apos;un
            catalogue ou d&apos;un circuit de validation propre ;
          </li>
          <li>
            le produit se configure selon des règles que la boutique ne sait pas
            représenter ;
          </li>
          <li>
            plusieurs applications payantes servent surtout à contourner la même
            limite.
          </li>
        </ul>
        <p>
          Aucun de ces signes ne conduit automatiquement au sur-mesure. Shopify
          Plus, une application mieux choisie, une plateforme spécialisée ou une
          amélioration de vos processus peuvent être plus simples. Demandez au
          prestataire de chiffrer au moins deux scénarios et d&apos;expliquer ce
          que chacun évite, coûte et oblige à maintenir.
        </p>

        <h2 id="sur-mesure">6. Ce qu&apos;implique réellement le sur-mesure</h2>
        <p>
          Un site sur mesure est développé autour de vos règles de vente et de
          vos outils. Vous gagnez en liberté, mais vous devenez responsable
          d&apos;un produit logiciel : il faut l&apos;héberger, le sécuriser, le
          tester, le faire évoluer et prévoir une équipe capable de le
          reprendre.
        </p>
        <p>
          Les fourchettes publiques recoupées pour ce guide donnent des repères
          de <strong>15 000 à 40 000 €</strong> pour une boutique avec des
          intégrations simples et de <strong>40 000 à 120 000 €</strong> pour
          une plateforme plus complète. Elles ne constituent ni une moyenne ni
          une promesse. Un configurateur, un stock en temps réel, la reprise de
          données ou un espace professionnel peuvent modifier fortement le
          nombre de jours.
        </p>
        <GuideTable
          headers={[
            "À prévoir",
            "Dans le projet initial",
            "Après la mise en ligne",
          ]}
          rows={[
            [
              "Produit et design",
              "Parcours, écrans, règles et contenus",
              "Améliorations selon les retours clients",
            ],
            [
              "Technique",
              "Développement, données, connexions et tests",
              "Hébergement, sécurité et mises à jour",
            ],
            [
              "Exploitation",
              "Import et vérification des données",
              "Support, surveillance et correction des incidents",
            ],
          ]}
        />
        <p>
          Le délai se mesure donc en semaines ou en mois, pas en nombre de
          pages. Le devis doit préciser ce qui sera livré, les données reprises,
          les services tiers, les tests, la maintenance et les conditions de
          reprise par une autre équipe. Si ces lignes manquent, le prix annoncé
          n&apos;est pas encore comparable à un abonnement Shopify exploité.
        </p>

        <h2 id="comparer-trois-ans">7. Comparer les coûts sur trois ans</h2>
        <p>
          Une comparaison utile porte sur une même période et un même service.
          Trois ans donnent assez de recul pour voir les abonnements et la
          maintenance, sans prétendre prédire toute la vie de la boutique.
        </p>
        <GuideTable
          headers={["Shopify", "Sur mesure", "À ne pas oublier"]}
          rows={[
            [
              "Création, forfaits, applications et travaux d'agence",
              "Conception, développement, hébergement et maintenance",
              "Les frais de paiement existent des deux côtés",
            ],
            [
              "Temps passé à contourner les limites",
              "Temps passé à piloter et faire évoluer le produit",
              "Valorisez le temps interne avec la même méthode",
            ],
            [
              "Évolution vers Plus ou coût de migration possible",
              "Reprises techniques et renouvellement de prestataire",
              "Traitez ces montants comme des scénarios, pas des certitudes",
            ],
          ]}
        />
        <p>
          Partez de vos douze dernières factures plutôt que d&apos;une moyenne
          trouvée en ligne. Ajoutez ensuite les besoins déjà connus pour les
          trois prochaines années. Pour le sur-mesure, demandez un devis de
          construction et un budget annuel d&apos;exploitation. Pour Shopify,
          simulez le forfait adapté, les applications conservées et les travaux
          du prestataire.
        </p>
        <InfoBox variant="emerald" title="La comparaison qui évite les erreurs">
          Ne cherchez pas seulement l&apos;option la moins chère. Cherchez celle
          qui répond au besoin avec un niveau de risque acceptable. Une économie
          théorique n&apos;a aucune valeur si elle suppose une migration mal
          préparée, une équipe introuvable ou une fonction indispensable encore
          non chiffrée.
        </InfoBox>

        <h2 id="quitter-shopify">8. Préparer une éventuelle sortie</h2>
        <p>
          Shopify permet d&apos;exporter les produits, les clients et les
          commandes. En revanche, les mots de passe clients ne sont pas
          exportables. Le thème écrit pour Shopify, les réglages des
          applications et une partie des contenus structurés devront être
          reconstruits ou adaptés sur la nouvelle solution.
        </p>
        <p>
          Le référencement demande lui aussi un travail précis. Si les adresses
          des produits et des catégories changent, chaque ancienne page utile
          doit renvoyer vers son équivalent avec une redirection permanente. Il
          faut ensuite contrôler les pages, les commandes, les paiements et
          l&apos;indexation avant et après la bascule. Notre{" "}
          <Link href="/guides/prix-refonte-site-internet">
            guide sur la refonte d&apos;un site
          </Link>{" "}
          détaille cette migration.
        </p>
        <p>
          Vous réduisez dès aujourd&apos;hui le risque de sortie en gardant le
          nom de domaine, les comptes, les contenus et les accès au nom de
          l&apos;entreprise. Exportez aussi les données à intervalles réguliers
          et documentez le rôle de chaque application. Ces précautions sont
          utiles même si vous ne quittez jamais Shopify.
        </p>

        <h2 id="headless">9. Séparer la vitrine du moteur de vente</h2>
        <p>
          Un e-commerce <strong>headless</strong> sépare la vitrine visible par
          le client du moteur qui gère les produits, le panier et les commandes.
          Shopify peut rester ce moteur tandis qu&apos;une équipe développe une
          vitrine spécifique, par exemple avec React ou Next.js.
        </p>
        <p>
          Cette solution peut servir un univers éditorial riche, plusieurs sites
          partageant les mêmes données ou un parcours très intégré. Elle ajoute
          toutefois deux éléments à faire fonctionner ensemble et demande une
          maintenance spécialisée. Elle n&apos;est donc pas une version « plus
          moderne » à choisir par principe.
        </p>
        <p>
          Shopify publiait en 2023 un taux de passage des seuils de performance
          de 59,5 % pour les boutiques classiques contre 35 % pour les vitrines
          Hydrogen observées. Ces données anciennes, fournies par l&apos;éditeur
          et dépendantes de la qualité des projets, ne prouvent pas qu&apos;une
          architecture est toujours plus rapide que l&apos;autre. Elles
          rappellent simplement qu&apos;une technologie plus libre ne remplace
          pas une bonne exécution.
        </p>

        <h2 id="decider">10. Les questions à trancher avant un devis</h2>
        <ol>
          <li>
            <strong>Qu&apos;est-ce qui bloque aujourd&apos;hui ?</strong>{" "}
            Décrivez une tâche, une vente perdue ou une manipulation, pas une
            préférence technique.
          </li>
          <li>
            <strong>Ce problème est-il fréquent et coûteux ?</strong> Mesurez
            les heures, les erreurs ou les ventes concernées pendant un mois.
          </li>
          <li>
            <strong>Une amélioration de Shopify suffit-elle ?</strong> Faites
            chiffrer cette option avant une reconstruction.
          </li>
          <li>
            <strong>Quelles autres solutions sont crédibles ?</strong> Comparez
            Shopify, Plus, une plateforme spécialisée et le sur-mesure lorsque
            le besoin le justifie.
          </li>
          <li>
            <strong>Qui exploitera la solution ?</strong> Demandez les coûts sur
            trois ans, la maintenance, les responsabilités et le plan de
            reprise.
          </li>
        </ol>

        <GuideInlineCTA
          title="Vous voulez comparer sans repartir de zéro ?"
          description="Rassemblez votre facture Shopify, la liste des applications et trois situations qui font perdre du temps à l'équipe. Nous pouvons vous dire si une amélioration suffit ou s'il est utile de chiffrer une autre architecture."
        />
        <p>
          Pour préparer une consultation comparable, utilisez aussi notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges
          </Link>{" "}
          et notre{" "}
          <Link href="/guides/prix-site-e-commerce">
            guide des prix d&apos;un site e-commerce
          </Link>
          . Vous pourrez alors demander à chaque prestataire la même chose : une
          recommandation argumentée, la liste de ce qui sera livré, un coût
          initial, un coût annuel et les conditions de sortie.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide (consultées
          en juillet 2026) :{" "}
          <a
            href="https://www.shopify.com/fr/tarifs"
            target="_blank"
            rel="noopener noreferrer"
          >
            page tarifs officielle Shopify France
          </a>{" "}
          (plans, frais de carte, offre d&apos;entrée — relevés le 17 juillet
          2026) ;{" "}
          <a
            href="https://help.shopify.com/en/manual/b2b/getting-started/plan-features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Help Center, fonctions B2B par forfait
          </a>{" "}
          ;{" "}
          <a
            href="https://help.shopify.com/en/manual/customers/import-export-customers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Help Center, import/export des données
          </a>{" "}
          ;{" "}
          <a
            href="https://changelog.shopify.com/posts/we-ve-increased-the-product-variant-limit-to-2048"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Changelog, limite de variantes portée à 2 048 (oct. 2025)
          </a>{" "}
          ;{" "}
          <a
            href="https://performance.shopify.com/blogs/blog/liquid-vs-headless-a-look-at-real-user-web-performance"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Performance Blog, Liquid vs headless (données CrUX 2023)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.shopify.com/plus/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shopify Plus, tarifs officiels
          </a>{" "}
          ;{" "}
          <a
            href="https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fevad, bilan du e-commerce français 2025
          </a>{" "}
          ;{" "}
          <a
            href="https://www.ecommerce-nation.fr/barometre-cms-ecommerce-shopify-creations-prestashop-chiffre-affaires/"
            target="_blank"
            rel="noopener noreferrer"
          >
            baromètre CMS Friends of Presta (E-commerce Nation, 2026)
          </a>{" "}
          ; étude ShopRank 2026 (créations de boutiques Europe/France) ;
          couverture presse des hausses de tarifs Shopify 2023 (InfoBref, La
          Presse) et Shopify Plus 2024 (Liquify) ; Elogic, Replatforming Cost
          Index 2026 (dépassements budget/délais) ; Trustpilot (notes et motifs
          récurrents, à lire avec les réserves d&apos;usage) ; sources publiques
          consultées pour les ordres de grandeur éditoriaux : Huggii, Gradiweb,
          Artich.io, jbdevweb, La Fabrique du Net, Yield Studio, Novaria (2026).
          Cette sélection non exhaustive n&apos;est pas un corpus représentatif.
          Les prix évoluent : vérifiez à la source avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Hors tarifs officiels Shopify datés, les fourchettes sont des ordres
            de grandeur éditoriaux issus de pages publiques sélectionnées sans
            méthode d&apos;échantillonnage. Elles ne prouvent ni un prix médian
            ni un coût de marché. Le coût total présenté est une simulation
            fondée sur les hypothèses affichées : seuls vos factures et devis
            permettent de décider. Shopify, Shopify Plus et Hydrogen sont des
            marques de Shopify Inc. ; ce guide est indépendant et n&apos;est
            affilié à aucune plateforme.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
