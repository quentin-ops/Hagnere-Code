import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  FormulaBox,
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
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
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
    question: "Combien coûte réellement un site Shopify par mois ?",
    answer:
      "Aux 25 à 289 €/mois du forfait (tarifs officiels vérifiés en juillet 2026, facturation annuelle) s'ajoutent les commissions sur chaque vente (1,1 à 1,5 % + 0,25 € par commande avec Shopify Payments), les applications et, souvent, un thème premium. Les budgets d'applications et de thème retenus dans ce guide sont des hypothèses éditoriales, pas des moyennes de marché. Avec les trois profils simulés en section 6, le total ressort à environ 90 à 120 €/mois pour un créateur, 570 à 820 €/mois pour une PME à 21 000 € de ventes mensuelles et 3 600 à 4 100 €/mois pour une marque à 2,4 M€ de chiffre d'affaires annuel. Remplacez ces hypothèses par votre facture réelle.",
  },
  {
    question: "Quels sont les coûts cachés d'un site Shopify ?",
    answer:
      "Cinq postes que les pages tarifs ne mettent pas en avant : les applications qui s'empilent (avis clients, email, traduction, connecteur comptable…) ; la pénalité si vous n'utilisez pas Shopify Payments (0,6 à 2 % de frais supplémentaires sur chaque vente selon le forfait) ; les frais de conversion de devise ; l'email professionnel, non inclus ; et la création par un prestataire. Pour sa simulation, le guide retient 100 à 300 €/mois d'applications et des ordres de grandeur de création de 1 500 à 5 000 € en freelance ou 8 000 à 30 000 € en agence. Ces montants viennent d'un recoupement non exhaustif de tarifs publics cités en sources, sans corpus représentatif : demandez des devis sur votre périmètre.",
  },
  {
    question: "Shopify est-il rentable sur le long terme ?",
    answer:
      "Tant que le besoin reste standard, Shopify conserve des avantages forts : faible investissement initial, vitesse de lancement et exploitation déléguée. La section 10 ne prouve pas une rentabilité de marché ; elle simule un cas B2B avec des hypothèses affichées et aboutit, dans ce seul scénario, à environ 75 000 € en sur-mesure contre 170 000 € sur 3 ans au niveau Plus. Remplacez chaque hypothèse par vos factures et devis. Le déclencheur n'est pas un chiffre d'affaires magique : c'est le moment où votre besoin sort durablement du standard.",
  },
  {
    question: "Quelle formule Shopify choisir pour débuter ?",
    answer:
      "Basic, en facturation annuelle (25 €/mois au tarif vérifié en juillet 2026), avec Shopify Payments activé pour éviter la pénalité sur les ventes, un thème gratuit ou à moins de 300 $, et le strict minimum d'applications. L'offre d'entrée (essai gratuit de 3 jours puis 1 €/mois pendant 3 mois) permet de tester sans risque. Ne montez en gamme que lorsque les chiffres le justifient : Grow coûte 41 € de plus par mois que Basic mais fait passer la commission de 1,5 à 1,3 % — rentable à partir d'environ 20 500 € de ventes mensuelles ; même logique pour Advanced (223 € de plus que Grow, commission à 1,1 %), rentable au-delà d'environ 110 000 € de ventes par mois.",
  },
  {
    question: "Combien coûte un site e-commerce sur mesure ?",
    answer:
      "Pour construire ses exemples, ce guide retient comme ordres de grandeur éditoriaux 15 000 à 40 000 € pour une boutique avec intégrations simples et 40 000 à 120 000 € pour une plateforme complète (stock temps réel, configurateur, espace B2B, connexions à votre gestion). Ils proviennent d'un recoupement non exhaustif de fourchettes publiques citées en sources : ce n'est ni un corpus représentatif ni une médiane de marché. Chez Hagnéré Code, la grille commerciale annoncée va de 15 000 à 120 000 € au forfait fixe contractuel. Maintenance et hébergement doivent être chiffrés séparément sur le périmètre réel.",
  },
  {
    question: "Quand faut-il quitter Shopify pour du sur-mesure ?",
    answer:
      "Quand au moins un de ces signaux devient structurel : votre B2B dépasse les 3 catalogues tarifaires du plan standard ; votre tunnel de commande a besoin d'une logique que le checkout Shopify n'autorise pas hors Plus ; vos applications cumulées coûtent plusieurs centaines d'euros par mois pour contourner des limites ; votre gestion (ERP, stock, tarifs clients) exige des intégrations profondes ; ou un passage à Shopify Plus devient la seule issue proposée. Un symptôme ponctuel se contourne ; dès qu'un signal devient structurel — a fortiori quand plusieurs convergent vers Plus —, c'est le moment de comparer sérieusement : chiffres en section 10.",
  },
  {
    question: "Peut-on migrer facilement de Shopify vers une autre plateforme ?",
    answer:
      "Partiellement — et c'est le point que trop de marchands découvrent tard. Produits, clients et commandes s'exportent nativement en CSV. Les mots de passe clients ne s'exportent pas : les comptes doivent être réactivés sur la destination. Un thème Liquid peut être téléchargé comme code, mais il n'est pas portable tel quel vers une autre plateforme ; les réglages d'applications et une partie du contenu structuré demandent aussi une reprise. Comptez un projet de migration, pas un simple déménagement de fichiers — le détail chiffré est dans la section 11.",
  },
  {
    question: "Quel impact sur le SEO lors d'une migration depuis Shopify ?",
    answer:
      "Une sortie de Shopify peut modifier la structure des adresses (/products/, /collections/) : chaque ancienne page doit alors être reliée à son équivalent par une redirection permanente. Inventaire, correspondance page par page et surveillance réduisent le risque, sans garantir le trafic ni un délai de stabilisation. Notre guide de refonte détaille cette méthode et sépare clairement une migration d'URLs d'un changement de domaine.",
  },
  {
    question: "Les grandes marques utilisent-elles Shopify ?",
    answer:
      "Oui — y compris de très grandes (Gymshark, Kylie Cosmetics, et en France de nombreuses marques qui vendent en direct au consommateur, dites « DTC »), généralement sur Shopify Plus. C'est un vrai argument de solidité : l'infrastructure encaisse les pics sans que vous y pensiez. Mais notez le modèle économique : Plus démarre à 2 100 €/mois avec engagement, plus une part variable sur les ventes au-delà d'un seuil, plus les applications et l'agence. Les grandes marques paient ce confort très cher — la question de ce guide est précisément de savoir à partir de quand ce prix se compare à celui d'une plateforme à vous.",
  },
  {
    question: "Qu'est-ce que Shopify Plus et combien ça coûte ?",
    answer:
      "La version haut de gamme de Shopify : checkout réellement personnalisable, B2B complet (catalogues tarifaires illimités, paiements partiels), multi-boutiques, limites techniques relevées. Tarif officiel : à partir de 2 100 €/mois — environ 2 500 $/mois en engagement 1 an ou 2 300 $/mois en engagement 3 ans, plus une part variable au-delà d'un seuil de volume. La mise en place et la maintenance dépendent du périmètre : la fourchette de 25 000 à 100 000 € parfois utilisée dans ce guide est un ordre de grandeur éditorial tiré de tarifs publics non représentatifs, pas une donnée de marché. Demandez un devis Plus complet.",
  },
  {
    question: "Qu'est-ce qu'un site e-commerce headless ?",
    answer:
      "Une architecture où la vitrine (ce que voit le client) est développée sur mesure — souvent en React ou Next.js — pendant que le moteur (produits, commandes, paiement) reste celui d'une plateforme comme Shopify. Sur le papier, le meilleur des deux mondes. En pratique, les données publiées par Shopify lui-même en 2023 montraient que 59,5 % des boutiques classiques passaient les seuils de vitesse de Google, contre 35 % des boutiques headless Hydrogen — pour un coût 3 à 5 fois supérieur ; ces moyennes bougent vite et mesurent l'exécution du marché, pas le plafond de la technologie (section 12). Le headless se justifie par des besoins précis (contenu riche, multi-boutiques, intégrations), pas par la vitesse.",
  },
  {
    question: "Peut-on commencer sur Shopify et passer au sur-mesure ensuite ?",
    answer:
      "Oui — c'est la bonne trajectoire pour un lancement ou un test de marché : Shopify est imbattable pour démarrer. Mais n'attendez pas mécaniquement des centaines de milliers d'euros de chiffre d'affaires : le bon déclencheur n'est pas le chiffre d'affaires, c'est le premier seuil structurel de la section 8 — et le sur-mesure coûte aujourd'hui moins cher qu'on ne le croit (section 9). Anticipez la sortie dès le départ : exportez vos données régulièrement, gardez la propriété de votre nom de domaine et de vos contenus, et documentez vos processus — la migration sera un projet, pas une crise.",
  },
  {
    question: "Pourquoi Shopify a-t-il de si mauvais avis sur Trustpilot ?",
    answer:
      "Shopify affiche 1,3/5 sur Trustpilot — une note à lire avec recul : les plateformes d'avis surreprésentent les clients mécontents, et c'est vrai de la plupart des grands logiciels par abonnement. Les motifs récurrents des marchands restent instructifs : des frais jugés opaques ou prélevés sans explication claire, un support difficile à joindre, et des difficultés au moment de partir (transfert de domaine, résiliation). Aucun de ces points n'est rédhibitoire pour lancer une boutique ; tous plaident pour la même hygiène : lire sa facture chaque mois et garder ses données exportées.",
  },
];


export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Shopify ou e-commerce sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Le coût complet de Shopify — abonnement, commissions et applications dans le même total —, les cas où il reste pertinent, les 7 limites et leur seuil de déclenchement, une simulation sur 3 ans et le coût de sortie souvent oublié."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Shopify réel : 90 – 4 100 €/mois", description: "", color: "violet" },
          { number: "02", title: "Grille Hagnéré : 15 000 – 120 000 €", description: "", color: "blue" },
          { number: "03", title: "Coût de sortie enfin chiffré", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/prix-site-e-commerce", label: "Prix d'un site e-commerce" },
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte de site" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/ressources/kit-cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Shopify ou sur-mesure : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Une agence qui vend du sur-mesure et qui vous dit que{" "}
          <strong>Shopify reste imbattable pour lancer et tester un
          marché</strong>, c&apos;est rare. C&apos;est pourtant ce que
          montre notre simulation de lancement. Pour une boutique qui
          doit convertir et durer, ce guide teste le moment où la
          conclusion pourrait s&apos;inverser. Le point de bascule de la
          section 10 est une <strong>simulation éditoriale fondée sur des
          hypothèses explicites</strong>, pas une preuve de marché. Elle
          réunit abonnement, commissions, applications, agence et coût
          de sortie dans un même modèle à remplacer par vos chiffres.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Le verdict en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. Franchise ou murs à soi : de quoi parle-t-on" },
            { id: "marche-2026", label: "3. Ce que montrent les données publiques en 2026" },
            { id: "quand-shopify-gagne", label: "4. Les cas où Shopify est imbattable" },
            { id: "cout-reel-shopify", label: "5. Le vrai coût de Shopify, tout compris" },
            { id: "trois-profils", label: "6. Trois boutiques, trois factures reconstituées" },
            { id: "hausses", label: "7. Le risque fournisseur : ce que l'historique des prix apprend" },
            { id: "limites", label: "8. Les 7 limites réelles — et leur seuil de déclenchement" },
            { id: "sur-mesure", label: "9. Le sur-mesure : repères éditoriaux et chiffrage illustratif" },
            { id: "tco", label: "10. La simulation sur 3 ans : tester le point de bascule" },
            { id: "cout-sortie", label: "11. Le coût de sortie de Shopify, enfin chiffré" },
            { id: "headless", label: "12. La 3e voie : le headless, démonté honnêtement" },
            { id: "verdict-par-profil", label: "13. La grille de décision finale, profil par profil" },
            { id: "methode", label: "14. Méthode : trancher en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. Le verdict en 30 secondes</h2>
        <p>
          En 2026, <strong>Shopify est le bon choix pour lancer et
          tester une boutique au besoin standard</strong> : comptez{" "}
          <strong>90 à 120 €/mois tout compris pour un créateur qui
          démarre</strong>. Mais grandir sur une plateforme louée a un
          loyer : <strong>570 à 820 €/mois pour une PME</strong>{" "}
          (21 000 € de ventes mensuelles) et{" "}
          <strong>3 600 à 4 100 €/mois pour une marque à 2,4 M€ de
          chiffre d&apos;affaires</strong> — dans les profils simulés de la
          section 6, commissions et applications comprises. Chez
          Hagnéré Code, la grille sur-mesure annoncée va de 15 000 à
          120 000 €. <strong>Un contre-chiffrage devient pertinent dès
          que votre besoin sort du standard</strong> : B2B au-delà de 3 catalogues tarifaires
          (les grilles de prix différentes selon le client), tunnel de
          commande spécifique, intégrations profondes — au plus tard
          quand le devis Shopify Plus (2 100 €/mois minimum) arrive sur
          la table. Et son ticket d&apos;entrée a nettement baissé : le
          chiffrage illustratif de la section 9 en montre la méthode.
          Sur 3 ans, notre simulation éditoriale aboutit à ≈ 75 000 €
          en sur-mesure contre ≈ 170 000 € en Shopify Plus ; ce résultat
          dépend entièrement des hypothèses de la section 10.
        </p>
        <GuideTable
          headers={["Votre situation", "Notre verdict", "Repère à rechiffrer"]}
          rows={[
            ["Lancement, test de marché, projet parallèle", "Shopify, sans hésiter", "0 – 5 000 € de création + 90 – 120 €/mois"],
            ["PME B2C établie, besoin standard", "Shopify (Grow/Advanced) tant qu'aucun seuil de la section 8 n'est franchi — en restant réversible", "8 000 – 30 000 € de création + 570 – 4 100 €/mois selon volume"],
            ["B2B réel : tarifs par client, commandes récurrentes", "Sur-mesure (ou Shopify Plus, comparez)", "Simulation : ≈ 75 000 € en sur-mesure vs ≈ 170 000 € en Plus sur 3 ans (section 10)"],
            ["Logique métier unique : configurateur, devis, abonnements complexes", "Sur-mesure", "15 000 – 120 000 € au forfait"],
            ["Marque en croissance qui vise Plus", "Comparer les deux, chiffres en main", "Le point de bascule est en section 10"],
          ]}
        />
        <p>
          Ne lisez pas ce tableau comme une échelle où le sur-mesure serait
          « supérieur ». <strong>Shopify achète de la vitesse, de la
          simplicité opérationnelle et préserve la trésorerie</strong>. Le
          sur-mesure achète du contrôle et la capacité à intégrer une logique
          métier qui vous distingue. La contrainte dominante tranche : si le
          marché reste incertain, gardez l&apos;option la moins engageante ; si
          un processus déjà validé est bloqué chaque semaine par la plateforme,
          chiffrez la propriété en face.
        </p>
        <p>
          Une belle vitrine ne garantit jamais, à elle seule, davantage de
          ventes. Un devis sur mesure crédible doit rattacher chaque fonction
          à un problème observé : travail manuel évité, commande aujourd&apos;hui
          impossible, intégration fragile ou dépendance devenue coûteuse.
          Sans bénéfice concret à mesurer, rester sur Shopify est souvent la
          décision la plus professionnelle.
        </p>

        <InfoBox variant="blue" title="Les 12 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Shopify</strong> : la plateforme e-commerce louée par abonnement — vous « emménagez » dans une boutique prête à l&apos;emploi.</li>
            <li><strong>SaaS</strong> : un logiciel loué par abonnement mensuel — Shopify en est un.</li>
            <li><strong>Sur-mesure</strong> : une boutique développée pour vous, dont vous êtes propriétaire (code et données).</li>
            <li><strong>Commission (frais de transaction)</strong> : le pourcentage prélevé sur chaque vente — le vrai loyer de Shopify.</li>
            <li><strong>PSP</strong> : le prestataire qui encaisse les paiements par carte (Shopify Payments, Stripe…). Tout site marchand en paie un.</li>
            <li><strong>App (application)</strong> : un module loué au mois qui ajoute une fonction à Shopify (avis clients, email, traduction…).</li>
            <li><strong>Thème / Liquid</strong> : l&apos;habillage de la boutique, écrit dans le langage propre à Shopify — il ne se transporte pas ailleurs.</li>
            <li><strong>Checkout</strong> : le tunnel de commande (panier → paiement) — la « caisse » de la boutique.</li>
            <li><strong>B2B</strong> : la vente aux professionnels (tarifs par client, commandes récurrentes), par opposition au B2C (particuliers).</li>
            <li><strong>ERP</strong> : le logiciel de gestion de l&apos;entreprise (stock, facturation, comptabilité) que la boutique doit souvent brancher.</li>
            <li><strong>Headless</strong> : une vitrine développée sur mesure, branchée sur le moteur d&apos;une plateforme (section 12).</li>
            <li><strong>Coût de possession (TCO)</strong> : le coût total sur plusieurs années — création, abonnements, commissions, maintenance.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Franchise ou murs à soi : de quoi parle-t-on</h2>
        <p>
          L&apos;image la plus juste : <strong>Shopify est une
          franchise</strong>. Droit d&apos;entrée faible, boutique aux
          normes en quelques jours, enseigne solide qui encaisse les pics
          de fréquentation — et en échange, un loyer, un pourcentage sur
          chaque vente, des rayonnages à louer en plus (les apps) et un
          agencement qu&apos;on ne modifie que dans les limites du
          contrat. <strong>Le sur-mesure, c&apos;est construire son
          propre magasin</strong> : plus long et plus cher à
          l&apos;entrée, mais les murs sont à vous et la caisse fait
          exactement ce que votre métier exige. Aucun éditeur ne peut alors
          augmenter un abonnement lié à la plateforme ; l&apos;hébergement,
          le paiement et la maintenance restent néanmoins des coûts variables.
        </p>
        <p>
          Exemple illustratif suivi dans ce guide : <strong>Granita, marque
          fictive de sirops artisanaux à Annecy</strong>. Ce n&apos;est pas un
          client et les calculs qui suivent ne reproduisent pas une facture.
          Lancée en 2021 sur Shopify Basic — le bon choix, nous le verrons —,
          elle réalise aujourd&apos;hui
          2,4 M€ de chiffre d&apos;affaires annuel en ligne
          (2 500 commandes/mois, panier moyen 80 €), et son activité
          B2B — cafés, hôtels, restaurants — décolle : tarifs négociés
          par client, commandes récurrentes, facturation à 30 jours.
          Exactement le genre de trajectoire où la question
          « Shopify ou sur-mesure ? » cesse d&apos;être théorique. Nous
          allons la chiffrer de bout en bout.
        </p>

        <h2 id="marche-2026">3. Ce que dit le marché français en 2026</h2>
        <p>
          Trois chiffres situent le débat. Le e-commerce français a pesé{" "}
          <strong>196,4 milliards d&apos;euros en 2025</strong> (+7 %,
          chiffres Fevad), portés par plus de 158 000 sites marchands
          actifs. Sur les nouvelles boutiques créées en France en 2025,{" "}
          Les études de plateformes citées en sources donnent des parts
          différentes selon qu&apos;elles comptent les créations, le parc
          installé ou le chiffre d&apos;affaires. Leurs méthodologies et
          intérêts commerciaux ne permettent pas d&apos;en tirer un verdict
          universel ; elles montrent seulement que Shopify, WooCommerce et
          PrestaShop restent des options largement utilisées en France.
          Le duel des deux standards a d&apos;ailleurs son guide
          dédié : notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">comparatif
          WooCommerce ou Shopify</Link>, coûts et vitesse mesurés des
          deux côtés.
        </p>
        <p>
          Traduction pour votre décision : <strong>Shopify a gagné la
          bataille du démarrage, mais ces données ne tranchent pas la suite</strong>.
          Elles comparent des parcs d&apos;âge et de composition différents :
          on ne peut pas en déduire qu&apos;une plateforme crée, à elle seule,
          davantage de valeur. Elles montrent surtout que le bon choix pour
          lancer n&apos;est pas automatiquement le bon choix pour grandir. La
          question de 2026 pour le reste de ce guide est donc : <strong>quand votre modèle
          validé justifie-t-il de continuer à louer, ou de construire vos
          murs ?</strong>
        </p>

        <h2 id="quand-shopify-gagne">4. Les cas où Shopify est imbattable</h2>
        <p>
          Commençons contre notre intérêt : nous vendons du sur-mesure,
          et pourtant — dans les cas suivants, Shopify gagne, point :
        </p>
        <ul>
          <li>
            <strong>Le lancement.</strong> Une boutique en ligne
            fonctionnelle en une après-midi, sans compétence technique,
            pour 1 €/mois pendant 3 mois (offre d&apos;entrée officielle) :
            aucun développement ne rivalise avec ça pour tester une
            idée.
          </li>
          <li>
            <strong>Le test de marché.</strong> Vous ne savez pas encore
            si le produit se vend : chaque euro doit aller au produit et
            à la publicité, pas au site.
          </li>
          <li>
            <strong>Le budget sous 5 000 €.</strong> Un Shopify bien
            configuré sur un bon thème vaut mieux qu&apos;un sur-mesure
            bâclé au même prix — le même raisonnement que nous tenons
            pour WordPress sur les sites vitrines.
          </li>
          <li>
            <strong>La boutique physique reliée au site.</strong> Si
            vous encaissez aussi en magasin, le point de vente Shopify
            (POS) unifie caisse, stock et fichier clients avec la
            boutique en ligne — une intégration entière que le
            sur-mesure devrait financer.
          </li>
          <li>
            <strong>Le catalogue standard vendu en direct.</strong> Des
            produits, des variantes simples, du paiement carte : le besoin
            est couvert nativement. Après le test, Shopify peut rester le bon
            choix tant qu&apos;aucun de ces seuils ne gêne réellement
            l&apos;activité. Si la boutique devient votre canal principal,
            réévaluez ces seuils et le coût total (sections 8 et 10) ; ce
            changement de statut n&apos;impose pas, à lui seul, une migration.
          </li>
          <li>
            <strong>Pas d&apos;équipe technique, et pas envie d&apos;en
            avoir.</strong> Shopify gère l&apos;hébergement, la sécurité,
            les mises à jour, les pics du Black Friday. Ce confort a un
            prix ; au démarrage, il le vaut.
          </li>
        </ul>
        <p>
          C&apos;est le premier verdict de ce guide, et il est massif :{" "}
          <strong>pour un lancement au besoin standard, prenez Shopify</strong>.
          Près d&apos;une nouvelle boutique française sur deux fait ce
          choix, et c&apos;est rationnel. Dans notre exemple, Granita, en 2021, a eu raison :
          15 jours entre l&apos;idée et la première vente, 3 000 € tout
          compris la première année. La suite du guide s&apos;adresse au
          dirigeant qu&apos;elle est devenue depuis.
        </p>

        <h2 id="cout-reel-shopify">5. Le vrai coût de Shopify, tout compris</h2>
        <p>
          Voici les tarifs officiels France — <strong>vérifiés sur la
          page tarifs de Shopify le 17 juillet 2026</strong>, précision
          nécessaire car une bonne partie des articles français affichent
          encore les anciennes grilles (29 €, 79 €… périmées) :
        </p>
        <GuideTable
          headers={["Forfait", "Prix (facturation annuelle)", "Prix (mensuelle)", "Frais de carte (Shopify Payments)"]}
          rows={[
            ["Basic", "25 €/mois", "36 €/mois", "1,5 % + 0,25 € par transaction"],
            ["Grow", "66 €/mois", "105 €/mois", "1,3 % + 0,25 €"],
            ["Advanced", "289 €/mois", "384 €/mois", "1,1 % + 0,25 €"],
            ["Plus", "dès 2 100 €/mois (engagement)", "—", "≈ 1 % + 0,25 € (taux négociés)"],
          ]}
        />
        <p>
          L&apos;abonnement n&apos;est pourtant que la petite ligne de la
          facture. Les vrais postes :{" "}
          <strong>les commissions</strong> — sur 100 € de panier en
          Basic : 1,75 € par commande, prélevés à vie, et une{" "}
          <strong>pénalité de 0,6 à 2 % supplémentaire si vous
          n&apos;utilisez pas Shopify Payments</strong> (le système de
          paiement maison) ; <strong>les applications</strong> — leur
          nombre et leur prix dépendent de la boutique ; <strong>le
          thème</strong> ; l&apos;email professionnel, non
          inclus ; et <strong>la création</strong> si vous déléguez. Pour
          ses calculs, ce guide retient 100 à 300 €/mois
          d&apos;applications, 100 à 500 $ de thème, puis 1 500 à 5 000 €
          de création en freelance ou 8 000 à 30 000 € en agence. Ce
          sont des hypothèses éditoriales issues d&apos;un recoupement non
          exhaustif de tarifs publics, pas des moyennes de marché. Deux pièges
          français méritent une ligne : les frais de conversion de devise
          (2 % si vous encaissez hors euro) et l&apos;outre-mer, où
          Shopify Payments n&apos;est pas disponible — la pénalité
          passerelle externe s&apos;applique donc d&apos;office.
        </p>
        <InfoBox variant="amber" title="Méfiez-vous des chiffres périmés — y compris les nôtres">
          Le top des résultats Google sur ces sujets contient des erreurs
          factuelles vérifiables : d&apos;anciennes grilles tarifaires
          (29/79/299 €), des frais américains appliqués à la France, une
          « limite de 100 variantes par produit » corrigée depuis (elle
          est passée à 2 048 en octobre 2025, source : journal des
          modifications officiel de Shopify), et la page comparative
          officielle de Shopify elle-même… datée d&apos;avril 2021. Tous
          les chiffres Shopify de ce guide ont été relevés à la source le
          17 juillet 2026 — et comme tout tarif, ils bougeront : vérifiez
          la page officielle avant de signer quoi que ce soit.
        </InfoBox>

        <h2 id="trois-profils">6. Trois boutiques, trois factures reconstituées</h2>
        <p>
          Aucune des pages françaises que nous avons analysées ne
          cumule abonnement, commissions et
          applications dans un même total. Faisons-le, avec des
          hypothèses affichées (facturation annuelle, Shopify Payments
          activé). <strong>Ces profils sont des simulations éditoriales,
          pas des factures observées ni des statistiques de marché</strong> :
          remplacez commandes, panier et applications par vos données.
        </p>
        <GuideTable
          headers={["Profil", "Abonnement", "Commissions/mois", "Apps/mois", "Total mensuel"]}
          rows={[
            ["Créateur : 60 commandes/mois, panier 50 € (3 000 €/mois)", "Basic — 25 €", "≈ 60 €", "0 – 30 € (+ thème amorti ≈ 8 €/mois)", "≈ 90 – 120 €"],
            ["PME : 300 commandes/mois, panier 70 € (21 000 €/mois)", "Grow — 66 €", "≈ 348 €", "150 – 400 €", "≈ 570 – 820 €"],
            ["Marque : 2 500 commandes/mois, panier 80 € (200 000 €/mois)", "Advanced — 289 €", "≈ 2 825 €", "500 – 1 000 €", "≈ 3 600 – 4 100 €"],
          ]}
        />
        <p>
          La lecture qui compte : <strong>Shopify n&apos;est pas un
          forfait, c&apos;est un coût variable</strong>. Dès le profil
          PME, les commissions pèsent plus de cinq fois
          l&apos;abonnement (348 € contre 66 €) ; au profil marque,
          elles représentent 70 à 80 % de la facture.
          Pour Granita, la facture Shopify reconstituée atteint{" "}
          <strong>43 000 à 49 000 € par an</strong> — un chiffre que son
          tableau de bord fictif n&apos;afficherait nulle part en un seul endroit.
          Précision d&apos;honnêteté, car c&apos;est le point que
          presque tous les comparatifs traitent mal : une partie de ces
          commissions (les frais de carte) se paierait aussi ailleurs —
          tout site marchand rémunère un prestataire de paiement, à des
          taux voisins. Ce que Shopify ajoute en propre, c&apos;est
          l&apos;abonnement, les applications, la pénalité hors Shopify
          Payments — et le sujet de la section suivante.
        </p>

        <h2 id="hausses">7. Le risque fournisseur : ce que l&apos;historique des prix apprend</h2>
        <p>
          Louer sa boutique, c&apos;est accepter que le bailleur fixe le
          loyer. L&apos;historique récent mérite d&apos;être connu :
          en <strong>janvier 2023</strong>, première hausse générale en
          plus de douze ans — <strong>+33 % en moyenne sur les forfaits
          standards</strong>, avec trois mois de préavis. En{" "}
          <strong>février 2024</strong>, Shopify Plus passe de 2 000 à
          2 500 $/mois (<strong>+25 %</strong>) et sa part variable sur
          les ventes de 0,25 à 0,40 % (<strong>+60 %</strong>) — le
          tarif de 2 000 $ n&apos;ayant alors été préservé qu&apos;en
          signant, avant l&apos;échéance, un engagement de trois ans
          (aujourd&apos;hui, l&apos;engagement 3 ans au catalogue se
          facture environ 2 300 $/mois). Pas de nouvelle hausse générale
          depuis — ce n&apos;est pas une fatalité annuelle, et il serait
          malhonnête de le présenter ainsi. Mais le précédent existe, et
          il enseigne une chose : <strong>sur une plateforme louée,
          votre structure de coûts ne vous appartient pas</strong>. Un
          dirigeant qui fait 70 % de sa marge en ligne doit avoir ce
          risque en tête — pas pour fuir Shopify, mais pour garder ses
          données exportées et sa décision réversible.
        </p>

        <h2 id="limites">8. Les 7 limites réelles — et leur seuil de déclenchement</h2>
        <p>
          Le vrai visage des limites de Shopify n&apos;est pas « ça ne
          marche pas » : c&apos;est <strong>« ça marche, à condition de
          monter en gamme »</strong>. Chaque limite a son seuil de
          déclenchement — le moment où elle commence à vous coûter de
          l&apos;argent :
        </p>
        <GuideTable
          headers={["Limite", "Concrètement", "Le seuil qui déclenche"]}
          rows={[
            ["Checkout verrouillé", "La « caisse » n'est personnalisable en profondeur que sur Plus", "Tunnel de commande spécifique (devis, acomptes, logique métier)"],
            ["B2B plafonné", "3 catalogues tarifaires maximum hors Plus", "Plus de 3 grilles de prix clients — l'exemple Granita"],
            ["Multi-boutique", "Réservé à Plus, avec apps à racheter par boutique", "Deuxième marque ou deuxième pays sérieux"],
            ["URLs imposées", "/products/, /collections/ — structure non modifiable", "Stratégie de référencement Google (SEO) appuyée sur le contenu"],
            ["Apps qui s'empilent", "Chaque manque natif = une app louée au mois", "Quand le total apps dépasse 300 €/mois, faites les comptes"],
            ["API limitée", "Débit d'échange de données plafonné par forfait", "Synchronisations lourdes (ERP, stock temps réel multi-canal)"],
            ["Contenu éditorial pauvre", "L'outil de gestion des pages et articles (le « CMS » maison) montre vite ses limites", "Site de contenu ambitieux adossé à la boutique"],
          ]}
        />
        <p>
          Un détail donne la mesure de l&apos;entonnoir : les
          limites se lèvent presque toutes… dans Shopify Plus, à
          2 100 €/mois minimum avec engagement. C&apos;est une mécanique
          commerciale parfaitement légitime — la franchise vend des
          niveaux de franchise — mais elle éclaire la vraie question
          budgétaire : <strong>le match n&apos;est pas « Shopify contre
          sur-mesure », il est « Shopify Plus contre sur-mesure »</strong>.
          Dès que plusieurs seuils de ce tableau vous concernent, vous
          comparez en réalité deux budgets à six chiffres sur 3 ans —
          un match que les pages que nous avons analysées ne chiffrent
          jamais. Nous le faisons en section 10.
        </p>

        <h2 id="sur-mesure">9. Le sur-mesure : repères éditoriaux et chiffrage illustratif</h2>
        <p>
          Pour construire les exemples de ce guide, nous retenons{" "}
          <strong>15 000 à 40 000 € pour une boutique avec intégrations
          simples</strong> et <strong>40 000 à 120 000 € pour une
          plateforme complète</strong> — stock temps réel,
          configurateur, espace B2B, connexions à la gestion. Ces ordres
          de grandeur viennent d&apos;un recoupement non exhaustif de
          fourchettes publiques d&apos;agences citées en sources. Il ne
          s&apos;agit pas d&apos;un corpus représentatif : aucune médiane de
          marché ne peut en être déduite. Chez Hagnéré Code, notre{" "}
          <Link href="/services/ecommerce">grille commerciale
          e-commerce sur mesure</Link> démarre à 15 000 €. Le
          développement assisté par IA fait partie de notre méthode,
          mais nous ne publions pas de panel avant/après permettant de
          lui attribuer une baisse de prix. Le chiffrage illustratif
          ci-dessous est donc la pièce vérifiable : il détaille les jours
          poste par poste.
        </p>
        <p>
          Ce que vous achetez à ce
          prix : la propriété du code et des données, zéro abonnement de
          plateforme, aucune application louée uniquement pour contourner une
          limite, une caisse qui applique exactement vos règles — et
          un budget de maintenance à chiffrer séparément. La simulation
          de la section 10 retient 15 % par an : c&apos;est une hypothèse
          éditoriale, pas une moyenne de marché.
        </p>
        <p>
          Soyons
          aussi exigeants avec le sur-mesure qu&apos;avec Shopify : la
          sécurité, les mises à jour et la conformité (paiement confié à
          un PSP certifié type Stripe, RGPD) passent sous votre
          responsabilité. La maintenance couvre le volet technique ; elle ne
          remplace ni vos procédures internes ni un conseil juridique adapté.
          Vous dépendez aussi de l&apos;équipe qui a écrit le code. Exigez
          contractuellement la propriété du code, une
          documentation à jour et la réversibilité (un autre développeur
          doit pouvoir reprendre le projet) : les mêmes garanties que
          celles que ce guide vous conseille de réclamer à Shopify. Les
          fourchettes détaillées par plateforme sont dans notre{" "}
          <Link href="/guides/prix-site-e-commerce">guide du prix
          d&apos;un site e-commerce</Link> ; ici, tenons notre marque de
          fabrique — le devis illustratif. Celui de Granita reconstitue une
          boutique en ligne + un espace B2B pour les
          cafés-hôtels-restaurants, connectés à sa gestion. Taux journalier :
          650 € HT.
        </p>
        <FormulaBox>
          <strong>Devis illustratif « e-commerce + portail B2B » — 75 jours,
          48 750 € HT</strong>
          <br />
          Cadrage : ateliers sur les processus réels de vente (3 j) —
          1 950 €
          <br />
          Design des écrans clés, boutique et espace pro (8 j) — 5 200 €
          <br />
          Catalogue, fiches produits, recherche, avis (10 j) — 6 500 €
          <br />
          Tunnel de commande grand public, paiement carte (12 j) —
          7 800 €
          <br />
          Portail B2B : tarifs par client, commandes récurrentes,
          paiement à 30 jours (15 j) — 9 750 €
          <br />
          Connexion gestion commerciale et comptabilité (8 j) — 5 200 €
          <br />
          Paiements : carte + prélèvement SEPA pour les pros (6 j) —
          3 900 €
          <br />
          Migration depuis Shopify : produits, clients, commandes,
          redirections (6 j) — 3 900 €
          <br />
          Recette complète, tests avec les équipes (5 j) — 3 250 €
          <br />
          Formation + transfert de propriété du code (2 j) — 1 300 €
        </FormulaBox>
        <p>
          Deux lectures. D&apos;abord, <strong>le portail B2B — la
          raison d&apos;être du projet — pèse un cinquième du
          devis</strong> : c&apos;est précisément la partie que Shopify
          ne sait faire qu&apos;en Plus, et qu&apos;aucune app à 50 €/mois
          ne remplace proprement. Ensuite, la ligne migration (3 900 €)
          est volontairement visible : quitter une plateforme est un
          poste en soi — la section 11 le détaille. Côté calendrier :
          ces 75 jours de travail s&apos;étalent sur 4 à 6 mois de
          projet, <strong>pendant lesquels la boutique Shopify continue
          de vendre normalement</strong> — le sur-mesure se construit à
          côté de la boutique, jamais à sa place, et la bascule
          elle-même (mise en ligne, redirections, recréation des comptes
          clients) se joue sur quelques jours une fois les tests
          validés.
        </p>

        <GuideInlineCTA
          title="Votre boutique approche des limites de Shopify ?"
          description="Décrivez votre activité en 3 minutes : nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti, avec un avis franc — rester sur Shopify, viser Plus ou passer au sur-mesure — et une fourchette argumentée en jours par poste."
          tags={["Objectif : prochain jour ouvré", "Avis franc, même si c'est « restez sur Shopify »", "E-commerce 15 000 – 120 000 €"]}
          ctaLabel="Faire trancher mon cas"
        />

        <h2 id="tco">10. La simulation sur 3 ans : tester le point de bascule</h2>
        <p>
          <strong>Le TCO ci-dessous est une simulation éditoriale fondée
          sur des hypothèses, pas une observation ni une preuve de
          marché.</strong> L&apos;abonnement Shopify Plus vient du tarif
          officiel relevé en juillet 2026. Mise en place, applications,
          maintenance et hébergement sont des entrées choisies pour ce
          cas fictif ; elles ne sont ni des médianes ni des promesses de
          prix. Remplacez-les par vos factures et deux devis établis sur
          le même périmètre avant toute décision.
        </p>
        <p>
          La règle d&apos;équité reste la suivante : <strong>les frais de
          carte se paient des deux côtés</strong> — un site sur mesure
          rémunère aussi son prestataire de paiement. Nous les
          neutralisons donc et comparons abonnement, applications,
          création et maintenance. Pour un besoin standard, notre
          premier scénario retient 9 500 à 15 500 €/an de coûts propres
          à Shopify, plus 15 000 à 30 000 € de création, face à une
          hypothèse sur-mesure à partir de 40 000 €. Ces montants sont
          des paramètres éditoriaux, pas des fourchettes représentatives.
          Le tableau suivant teste ensuite le cas fictif Granita lorsque
          le besoin impose Shopify Plus :
        </p>
        <GuideTable
          headers={["Poste", "Shopify Plus — hypothèses", "Sur-mesure — hypothèses"]}
          rows={[
            ["Mise en place", "50 000 € (hypothèse éditoriale ; repère public non représentatif : 25 000 – 100 000 €)", "48 750 € (chiffrage illustratif de la section 9)"],
            ["Abonnement plateforme", "75 600 € (2 100 €/mois × 36)", "0 €"],
            ["Applications propres à la plateforme", "25 200 € (hypothèse : ≈ 700 €/mois ; outils communs exclus)", "0 € dans ce scénario (fonctions intégrées au développement)"],
            ["Maintenance (« TMA » : le contrat d'entretien confié à un prestataire)", "18 000 € (hypothèse : 500 €/mois)", "26 400 € (hypothèse : ≈ 15 %/an + hébergement)"],
            ["Résultat de la simulation sur 3 ans (hors frais de carte et outils communs)", "≈ 170 000 €", "≈ 75 000 €"],
          ]}
        />
        <p>
          Sous ces seules hypothèses, l&apos;arithmétique produit un{" "}
          <strong>écart d&apos;environ 95 000 € sur 3 ans</strong>. Ce
          résultat ne démontre pas un avantage général du sur-mesure :
          une mise en place, un volume d&apos;applications ou une
          maintenance différents réduisent, annulent ou inversent
          l&apos;écart. Le modèle sert à tester deux déclencheurs, pas à
          annoncer un point de bascule universel. Premier déclencheur :
          quand un devis Shopify Plus arrive, chiffrez le même périmètre
          en sur-mesure. Second déclencheur : quand la boutique devient
          centrale pour l&apos;entreprise, ajoutez au calcul les coûts
          réellement mesurés de ses limites, sans présumer un gain de
          référencement ou de conversion. C&apos;est la logique que nous
          appliquons aussi dans notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">comparatif
          WooCommerce ou Shopify</Link>.
        </p>
        <p>
          Le coût total ne suffit toutefois pas à décider. Shopify étale la
          dépense et permet de renoncer vite ; le sur-mesure concentre un
          investissement au départ. Si la demande reste incertaine ou si la
          trésorerie est la contrainte principale, cette souplesse peut valoir
          davantage qu&apos;une économie projetée. À l&apos;inverse, ajoutez au
          calcul les contournements réellement observés : ressaisies,
          opérations manuelles, ventes bloquées et temps passé à maintenir des
          connexions fragiles. N&apos;ajoutez pas un gain de référencement ou
          de conversion hypothétique : mesurez-le avant de le promettre.
        </p>

        <h2 id="cout-sortie">11. Le coût de sortie de Shopify, enfin chiffré</h2>
        <p>
          Aucune des pages françaises que nous avons analysées ne
          chiffre ce que coûte le départ de Shopify — au mieux,
          « plusieurs semaines de travail ». Voici le tableau de
          réversibilité, établi depuis la documentation officielle (les
          estimations de temps sont les nôtres) :
        </p>
        <GuideTable
          headers={["Ce que vous possédez", "Sortie de Shopify", "Conséquence"]}
          rows={[
            ["Produits, clients, commandes", "Export natif en fichiers CSV (tableur lisible dans Excel)", "Récupérables — comptez ≈ 1 h d'export par 100 000 commandes"],
            ["Mots de passe clients", "JAMAIS exportables", "Tous les comptes sont à recréer (email de réinitialisation, perte d'une partie des clients connectés)"],
            ["Thème et personnalisations", "Code téléchargeable, mais non portable tel quel hors Shopify (Liquid)", "La vitrine doit être adaptée ou redéveloppée sur la destination"],
            ["Applications et leurs réglages", "Portabilité variable selon chaque éditeur", "Chaque fonction doit être auditée, reconfigurée ou remplacée"],
            ["Pages, blog, contenus structurés", "Pas d'export natif complet", "Passage par des outils tiers + reprise manuelle"],
            ["Adresses des pages (URLs)", "Structure imposée par Shopify", "Plan de redirections 301 (le renvoi automatique de chaque ancienne adresse vers la nouvelle), page par page"],
          ]}
        />
        <p>
          En euros, dans l&apos;exemple de boutique établie Granita : export,
          nettoyage et réimport des données (2 à 5 jours, 1 300 à
          3 250 €), plan de redirections et migration SEO (1 000 à
          5 000 € — le poste est identique à celui d&apos;une refonte,
          notre <Link href="/guides/prix-refonte-site-internet">guide du
          prix d&apos;une refonte</Link> le détaille), recréation des
          comptes clients et communication associée, et surtout la
          reconstruction ou adaptation de la vitrine — le poste principal, qui
          rejoint les budgets de la section 9. Un rapport commercial cité en
          sources observe des dépassements sur son propre échantillon, sans
          méthode assez détaillée ici pour en faire un taux de marché. La
          conclusion utile reste de prévoir une réserve et de tester la reprise.
          Anticipez la sortie dès
          l&apos;entrée (exports réguliers, domaine et contenus à votre
          nom) — et méfiez-vous du raisonnement inverse : rester sur une
          plateforme uniquement parce qu&apos;en sortir coûte cher porte
          un nom en gestion, le coût irrécupérable, et c&apos;est un
          mauvais guide de décision.
        </p>

        <h2 id="headless">12. La 3e voie : le headless, démonté honnêtement</h2>
        <p>
          Le headless — une vitrine développée sur mesure (souvent en
          React ou Next.js, nos outils), branchée sur le moteur
          Shopify — est séduisant sur le papier : la liberté du
          sur-mesure devant, la logistique de la franchise derrière.
          Vous vous attendez peut-être à ce qu&apos;une agence Next.js
          vous le vende. Voici pourtant les chiffres, publiés par
          Shopify lui-même (données de vitesse réelles sur 16 millions
          de pages, 2023) : <strong>59,5 % des boutiques Shopify
          classiques passent les seuils de vitesse de Google, contre
          35 % des boutiques headless construites avec Hydrogen,
          l&apos;outil headless de Shopify lui-même</strong> — et ~28 % pour
          les vitrines Next.js. En clair : mal exécuté, le headless est
          plus lent que le thème qu&apos;il remplace, pour un coût 3 à
          5 fois supérieur (les projets sérieux se chiffrent en dizaines
          de milliers d&apos;euros, plus l&apos;outillage mensuel).
          Trois précisions sur ces moyennes, cependant : elles datent de
          2023 — le Web Almanac 2025 mesure depuis 76 % de boutiques
          Shopify classiques dans les clous, preuve que ces chiffres
          bougent vite —, elles sont publiées par Shopify — juge et
          partie — et elles mesurent l&apos;exécution médiane du
          marché, pas le
          plafond de la technologie. Bien exécutée, une vitrine Next.js
          tient les Core Web Vitals au vert — ce site, développé à
          100 % en Next.js, en est la démonstration en production — et
          offre ce qu&apos;aucun thème Liquid ne permet : animations sur
          mesure (Framer Motion, GSAP), direction artistique libre,
          architecture de contenu illimitée pour le référencement.
        </p>
        <p>
          Notre position d&apos;agence React : <strong>le headless est
          un excellent outil pour de vrais besoins</strong> — contenu
          riche à grande échelle, multi-boutiques avec socle commun,
          expériences interactives que Liquid ne sait pas rendre — et un
          mauvais réflexe de mode pour tout le reste. La vitesse
          s&apos;obtient d&apos;abord par l&apos;exécution, pas par
          l&apos;architecture ; et si votre besoin de fond est une
          logique métier propriétaire, le sur-mesure complet est plus
          simple et plus cohérent que l&apos;hybride. Si un prestataire
          vous propose du headless, posez-lui une question : « quel
          besoin précis, impossible en thème classique, justifie le
          surcoût ? » La qualité de la réponse vaut audit.
        </p>

        <h2 id="verdict-par-profil">13. La grille de décision finale, profil par profil</h2>
        <GuideTable
          headers={["Votre profil", "Verdict", "Pourquoi"]}
          rows={[
            ["Créateur, lancement, test de marché", "Shopify Basic, point", "Notre simulation retient 90-120 €/mois tout compris pour tester — remplacez les hypothèses par votre panier d'applications"],
            ["PME B2C, besoin standard", "Shopify Grow/Advanced, en restant réversible", "Compétitif tant qu'aucun seuil de la section 8 n'est franchi. Si la boutique est le cœur de l'entreprise — image, conversion, durée —, chiffrez un sur-mesure en face sans attendre (devis type en section 9) : c'est précisément le profil pour lequel notre comparatif WooCommerce ou Shopify recommande directement le sur-mesure"],
            ["B2B structurel (tarifs clients, récurrence, 30 jours)", "Sur-mesure — comparez avec Plus, chiffres en main", "Simulation éditoriale : ≈ 75 000 € vs ≈ 170 000 € sur 3 ans sous les hypothèses de la section 10"],
            ["Logique métier unique (configurateur, devis, abonnements complexes)", "Sur-mesure", "La caisse doit appliquer VOS règles — c'est le produit, pas un site"],
            ["Marque de contenu + boutique (média, communauté)", "Headless — si le besoin est démontré", "Le seul profil où l'hybride se justifie vraiment (section 12)"],
            ["Boutique qui approche du devis Plus", "Étude comparative avant signature", "L'engagement Plus (1-3 ans) mérite un contre-chiffrage sur-mesure"],
          ]}
        />

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>90 – 4 100 €/mois</strong> : le résultat des trois profils Shopify simulés selon le volume et les hypothèses d&apos;applications — un coût variable, pas une moyenne de marché.</li>
            <li><strong>0 part de marché décisive</strong> : les études comptent des populations différentes ; votre besoin et votre TCO tranchent.</li>
            <li><strong>2 100 €/mois</strong> : le ticket d&apos;entrée officiel Shopify Plus — le signal pour demander un contre-chiffrage, pas la preuve que le sur-mesure sera moins cher.</li>
            <li><strong>≈ 75 000 € vs ≈ 170 000 €</strong> : le résultat de notre simulation éditoriale sur 3 ans, sous les hypothèses affichées et avec les frais de carte neutralisés.</li>
            <li><strong>Portabilité partielle</strong> : données exportables, mots de passe non exportés, thème Liquid téléchargeable mais non portable tel quel.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">14. Méthode : trancher en 5 étapes</h2>
        <ol>
          <li>
            <strong>Fixez votre point de départ.</strong> Vous avez déjà une
            boutique : reconstituez la facture Shopify réelle — abonnement +
            commissions + apps + prestataires, sur 12 mois (section 6). Vous
            lancez un projet : notez d&apos;abord ce qui reste incertain
            (demande, catalogue, processus), car cette incertitude favorise la
            solution la plus réversible. Dans le premier cas, le chiffre de
            référence n&apos;apparaît nulle part en un seul endroit dans votre
            tableau de bord.
          </li>
          <li>
            <strong>Listez vos seuils déclenchés</strong> dans le tableau
            de la section 8. Zéro : restez. Un seuil ponctuel :
            contournez-le, en notant ce que le contournement vous coûte
            chaque mois. Un seuil structurel, ou plusieurs qui
            convergent vers Plus : passez à l&apos;étape 3.
          </li>
          <li>
            <strong>Faites établir les deux devis</strong> — Shopify Plus
            (mise en place + abonnement + apps + contrat de maintenance)
            et sur-mesure, sur
            le même périmètre écrit. Notre{" "}
            <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
            de cahier des charges</Link> s&apos;adapte au e-commerce.
          </li>
          <li>
            <strong>Comparez sur 3 ans, frais de carte exclus</strong>{" "}
            (ils se paient des deux côtés), coût de sortie et
            réversibilité inclus (section 11). Exigez les hypothèses
            écrites dans chaque devis.
          </li>
          <li>
            <strong>Si vous restez sur Shopify, restez réversible</strong> :
            exports mensuels, domaine et contenus à votre nom, processus
            documentés. La meilleure position de négociation face à une
            hausse de tarifs, c&apos;est de pouvoir partir.
          </li>
        </ol>
        <p>
          C&apos;est le déroulé exact de notre méthode : un{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si
          le projet se lance)</strong> qui reconstitue votre coût réel,
          tranche honnêtement — y compris quand la réponse est « restez
          sur Shopify » — et produit périmètre, maquettes et devis au
          forfait fixe ; puis un développement livré par étapes à dates
          contractuelles (méthode <Link href="/methode">Sprint
          Fixe™</Link>), avec droits, dépôt, accès et exclusions détaillés au devis.{" "}
          <Link href="/demarrer-un-projet">Décrivez votre boutique en
          3 minutes</Link> : objectif de réponse personnelle le prochain jour ouvré,
          gratuite et sans engagement. Et pour situer ces budgets dans
          l&apos;ensemble du marché, notre{" "}
          <Link href="/guides/prix-site-e-commerce">guide des prix
          d&apos;un site e-commerce</Link> complète ce comparatif.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://www.shopify.com/fr/tarifs" target="_blank" rel="noopener noreferrer">page tarifs officielle Shopify France</a>{" "}
          (plans, frais de carte, offre d&apos;entrée — relevés le
          17 juillet 2026) ;{" "}
          <a href="https://help.shopify.com/en/manual/b2b/getting-started/plan-features" target="_blank" rel="noopener noreferrer">Shopify Help Center, fonctions B2B par forfait</a> ;{" "}
          <a href="https://help.shopify.com/en/manual/customers/import-export-customers" target="_blank" rel="noopener noreferrer">Shopify Help Center, import/export des données</a> ;{" "}
          <a href="https://changelog.shopify.com/posts/we-ve-increased-the-product-variant-limit-to-2048" target="_blank" rel="noopener noreferrer">Shopify Changelog, limite de variantes portée à 2 048 (oct. 2025)</a> ;{" "}
          <a href="https://performance.shopify.com/blogs/blog/liquid-vs-headless-a-look-at-real-user-web-performance" target="_blank" rel="noopener noreferrer">Shopify Performance Blog, Liquid vs headless (données CrUX 2023)</a> ;{" "}
          <a href="https://www.shopify.com/plus/pricing" target="_blank" rel="noopener noreferrer">Shopify Plus, tarifs officiels</a> ;{" "}
          <a href="https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/" target="_blank" rel="noopener noreferrer">Fevad, bilan du e-commerce français 2025</a> ;{" "}
          <a href="https://www.ecommerce-nation.fr/barometre-cms-ecommerce-shopify-creations-prestashop-chiffre-affaires/" target="_blank" rel="noopener noreferrer">baromètre CMS Friends of Presta (E-commerce Nation, 2026)</a> ;
          étude ShopRank 2026 (créations de boutiques Europe/France) ;
          couverture presse des hausses de tarifs Shopify 2023 (InfoBref,
          La Presse) et Shopify Plus 2024 (Liquify) ; Elogic,
          Replatforming Cost Index 2026 (dépassements budget/délais) ;
          Trustpilot (notes et motifs récurrents, à lire avec les
          réserves d&apos;usage) ; sources publiques consultées pour les
          ordres de grandeur éditoriaux : Huggii, Gradiweb, Artich.io,
          jbdevweb, La Fabrique du Net, Yield Studio, Novaria (2026).
          Cette sélection non exhaustive n&apos;est pas un corpus
          représentatif. Les prix évoluent :
          vérifiez à la source avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Hors tarifs officiels Shopify datés, les fourchettes sont des
            ordres de grandeur éditoriaux issus de pages publiques
            sélectionnées sans méthode d&apos;échantillonnage. Elles ne
            prouvent ni un prix médian ni un coût de marché. Le TCO est
            une simulation fondée sur les hypothèses affichées : seuls
            vos factures et devis permettent de décider. Shopify,
            Shopify Plus et Hydrogen sont des marques de Shopify Inc. ;
            ce guide est indépendant et n&apos;est affilié à aucune
            plateforme.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
