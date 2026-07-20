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

const guide = getGuide("nextjs-ou-wordpress");

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
      "Next.js",
      "React",
      "WordPress",
      "SEO technique",
      "Architecture web",
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
      name: "Next.js ou WordPress",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Next.js est-il meilleur que WordPress pour le référencement naturel ?",
    answer:
      "Google ne recommande pas un CMS ou un framework pour obtenir un classement. Le rendu accessible aux moteurs, le contenu, l'architecture, les liens, l'expérience et de nombreux autres signaux comptent. Next.js comme WordPress peuvent produire un site explorabile et performant ; la qualité dépend de l'implémentation, des extensions, de l'hébergement et de la maintenance.",
  },
  {
    question: "WordPress vaut-il encore la peine d'être utilisé en 2026 ?",
    answer:
      "Oui. WordPress reste pertinent lorsque son interface éditoriale, son écosystème ou les compétences disponibles répondent au besoin. Next.js peut être préférable pour une application ou une architecture sur mesure. La part de marché ou les préférences de l'agence ne suffisent pas à décider : comparez fonctions, édition, sécurité, performance, portabilité, compétences et coût total.",
  },
  {
    question: "Quels sont les inconvénients de WordPress ?",
    answer:
      "Les points à contrôler sont le nombre et la qualité des extensions, leur suivi de sécurité, les mises à jour, la performance du thème, les licences et la portabilité des contenus et mises en page. Leur coût dépend de la configuration et du niveau de service ; un WordPress simple et bien maintenu n'a pas le même profil qu'un assemblage de nombreuses extensions.",
  },
  {
    question: "Quelle est la meilleure alternative à WordPress ?",
    answer:
      "Il n'existe pas de meilleure alternative universelle. Next.js, un autre générateur de site, un CMS headless, Webflow, Shopify ou une solution sur mesure répondent à des besoins différents. Comparez l'édition, les intégrations, le paiement, l'export réel du contenu et du code, l'hébergement, les dépendances, les coûts et le plan de sortie avant de choisir.",
  },
  {
    question: "Quand ne pas utiliser WordPress ?",
    answer:
      "Évaluez une autre architecture lorsque le projet comporte des règles métier complexes, du temps réel, des contraintes fortes d'intégration ou une équipe qui ne souhaite pas exploiter WordPress. WordPress peut être étendu, mais l'écart entre un CMS enrichi et une application dédiée doit être comparé en risque, compétences et coût total, sans règle automatique.",
  },
  {
    question: "WordPress est-il gratuit ?",
    answer:
      "Le logiciel est distribué sous licence libre, mais l'exploitation peut inclure conception, hébergement, domaine, extensions payantes, sauvegardes, sécurité, support et évolutions. Chiffrez ces postes sur une durée commune ; aucun forfait annuel universel ne se déduit du choix de WordPress seul.",
  },
  {
    question: "Peut-on combiner WordPress et Next.js ?",
    answer:
      "Oui — c'est le « WordPress headless » : vos équipes continuent de publier dans l'interface WordPress qu'elles connaissent, et un site Next.js sert les pages aux visiteurs, rapide et sécurisé. C'est l'architecture choisie par TechCrunch, et celle de la migration documentée de Backlinko (site 3 fois plus rapide). Comptez 8 000 à 25 000 € selon le périmètre : pertinent pour les sites éditoriaux à fort trafic ou multicanaux, surdimensionné pour un simple site vitrine.",
  },
  {
    question: "Next.js remplace-t-il WordPress ?",
    answer:
      "Non, car ils ne jouent pas au même poste : WordPress est un CMS (il gère du contenu), Next.js est un framework (il construit des sites et applications sur mesure). La vraie question est organisationnelle : qui publie du contenu, à quelle fréquence, et quel est l'enjeu business du site ? Publication quotidienne par une équipe non technique → CMS. Site d'acquisition à fort enjeu ou application → sur-mesure, avec un CMS headless si besoin d'édition.",
  },
  {
    question: "Combien coûte un site Next.js par rapport à un site WordPress ?",
    answer:
      "Un WordPress à thème peut coûter moins cher à créer qu'un Next.js sur mesure, mais aucune technologie ne fixe à elle seule le coût total. Comparez sur une même durée la conception, l'hébergement, les licences, les mises à jour, la sécurité, le support et les évolutions. Un site Next.js statique réduit certaines surfaces liées au CMS et aux extensions, tout en conservant des dépendances et une plateforme à surveiller et mettre à jour.",
  },
  {
    question: "Pourquoi mon site WordPress est-il lent ?",
    answer:
      "Les causes possibles incluent l'hébergement, le thème, les extensions, les images, les scripts tiers, les requêtes de base de données et le cache. WordPress peut servir des pages mises en cache et un site Next.js peut lui aussi être lent ou dynamique. Mesurez d'abord les pages et les données de terrain, puis corrigez la cause observée.",
  },
  {
    question: "WordPress est-il sûr ?",
    answer:
      "Il peut être exploité de façon sûre avec une configuration, des extensions, des accès, des sauvegardes et des mises à jour maîtrisés. Le risque dépend de la surface exposée et de la réactivité, pas d'un nombre magique d'extensions. Next.js conserve aussi des dépendances, secrets, comptes d'hébergement et mises à jour à gérer.",
  },
  {
    question: "Quel budget pour quitter WordPress sans perdre son référencement ?",
    answer:
      "Une migration vers un site sur mesure se chiffre comme une refonte : 60 à 80 % du prix d'une création équivalente, plus la migration des contenus et surtout le plan de redirections 301 page à page (chaque ancienne adresse renvoie automatiquement visiteurs et moteurs vers la nouvelle). Ce plan réduit les risques techniques de migration, sans garantir le maintien des positions. Pour un site vitrine : 6 900 à 22 000 € selon l'ampleur chez Hagnéré Code, redirections et suivi SEO post-migration inclus. Exigez ce plan dans tout devis : votre trafic acquis mérite une migration contrôlée.",
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
          { label: "Next.js ou WordPress" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Le comparatif écrit pour les dirigeants, pas pour les développeurs. Chiffres sourcés (sécurité, performance, parts de marché), coût réel sur 3 ans décomposé, crise de gouvernance 2024-2026 — et un verdict tranché par profil, y compris les cas où WordPress reste le bon choix."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "WordPress : 41 % du web, 1er déclin", description: "", color: "violet" },
          { number: "02", title: "11 334 failles WordPress en 2025 (91 % via les extensions)", description: "", color: "blue" },
          { number: "03", title: "Coût sur 3 ans : l'ordre s'inverse", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/guides/prix-site-e-commerce", label: "Prix d'un site e-commerce" },
          { href: "/services/sites-vitrines", label: "Création de site sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/realisations", label: "Nos réalisations Next.js" },
        ]}
        faqTitle="Next.js ou WordPress : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Nous construisons en Next.js — autant l&apos;annoncer d&apos;entrée.
          Mais ce comparatif joue franc jeu :{" "}
          <strong>chiffres sourcés, coût total sur 3 ans décomposé, et les
          cas — réels mais devenus étroits — où WordPress reste le
          meilleur choix</strong>. Parce
          qu&apos;un dirigeant ne choisit pas une technologie : il choisit un
          coût, un risque et un résultat.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. L'essentiel en 60 secondes : le verdict par profil" },
            { id: "de-quoi-parle-t-on", label: "2. CMS, framework, sur-mesure : de quoi parle-t-on (sans jargon)" },
            { id: "etat-des-lieux", label: "3. 2026, l'année charnière : domination et premier déclin" },
            { id: "qui-utilise", label: "4. Qui utilise Next.js (vérifié dans le code source)" },
            { id: "performance", label: "5. Performance mesurée : les Core Web Vitals réels" },
            { id: "seo", label: "6. Le match SEO : ce que Google dit vraiment" },
            { id: "securite", label: "7. Sécurité : vérifier les chiffres avancés" },
            { id: "gouvernance", label: "8. La crise WordPress 2024-2026, expliquée aux dirigeants" },
            { id: "couts", label: "9. Le vrai coût sur 3 ans, décomposé" },
            { id: "contenu", label: "10. « Et pour publier mon contenu ? » — l'autonomie honnête" },
            { id: "wordpress-bon-choix", label: "11. Les cas où WordPress reste le bon choix" },
            { id: "headless", label: "12. La 3e voie : WordPress headless + Next.js" },
            { id: "grille-decision", label: "13. La grille de décision finale, profil par profil" },
          ]}
        />

        <h2 id="reponse-rapide">1. L&apos;essentiel en 60 secondes : le verdict par profil</h2>
        <p>
          Il n&apos;existe pas de choix par défaut valable pour tous les sites.
          WordPress apporte un CMS intégré et un vaste écosystème ; Next.js
          fournit un framework pour composer une architecture sur mesure,
          statique ou dynamique. Une troisième voie « headless » peut associer
          une interface éditoriale à un front séparé. Décidez à partir des
          fonctions, de l&apos;édition, des compétences, des risques, de la
          portabilité et du coût total, puis vérifiez le résultat produit.
        </p>
        <GuideTable
          headers={["Votre profil", "Notre verdict", "Budget repère"]}
          rows={[
            ["Blog / média : contenu quotidien, équipe non technique", "WordPress, bien maintenu", "1 500 – 8 000 € + maintenance"],
            ["TPE locale : présence simple, micro-budget assumé", "WordPress ou outil clé en main (type Wix, Squarespace) comme solution d'attente — à réévaluer dès que le site doit générer des clients", "800 – 4 000 €"],
            ["PME : le site doit soutenir l'acquisition", "Comparer CMS bien exploité et architecture sur mesure", "Périmètre à chiffrer"],
            ["Corporate à fort enjeu d'image et de performance", "Comparer édition, intégrations, performance et exploitation", "Périmètre à chiffrer"],
            ["Boutique en ligne", "Shopify (simple) ou sur-mesure (marque, volumétrie) — voir section 11", "3 000 – 80 000 €"],
            ["Éditorial fort trafic / multicanal", "WordPress headless + Next.js", "8 000 – 25 000 €"],
            ["Application web, espace client, logiciels de gestion (ERP/CRM : facturation, stock, clients)", "Architecture applicative à cadrer ; WordPress peut rester CMS", "Périmètre à chiffrer"],
          ]}
        />

        <h2 id="de-quoi-parle-t-on">2. CMS, framework, sur-mesure : de quoi parle-t-on (sans jargon)</h2>
        <p>
          Première clarification, presque toujours escamotée :{" "}
          <strong>Next.js et WordPress ne jouent pas au même poste</strong>.
          WordPress est un CMS — un logiciel de gestion de contenu, livré
          avec son interface d&apos;administration et 61 000 extensions
          installables en un clic — des modules qui ajoutent chacun une
          fonction (formulaire, boutique, réservation) ; les professionnels
          disent « plugins », nous dirons « extensions ». Next.js est un
          framework — une fondation avec laquelle un développeur construit
          un site ou une application sur mesure. Comparer les deux,
          c&apos;est comparer un produit doté de son atelier éditorial à une
          boîte à outils de développement. Le résultat, sa propriété et sa
          portabilité dépendent dans les deux cas du contrat, du code, des
          contenus, des extensions et des services tiers. Le reste du guide
          propose une matrice de décision, pas un verdict automatique.
        </p>
        <p>
          La vraie question du dirigeant n&apos;est donc pas technique, elle
          est organisationnelle : <strong>qui publie du contenu, à quelle
          fréquence, et quel est l&apos;enjeu business du site ?</strong> Si
          la réponse est « notre équipe marketing publie trois articles
          par semaine », un outil d&apos;édition se justifie — ce qui,
          en 2026, ne veut plus dire une façade WordPress :
          l&apos;édition peut vivre en coulisses et le site public en
          Next.js (sections 10 et 12). Si c&apos;est « le site doit nous
          amener des clients et incarner notre sérieux », la qualité
          d&apos;exécution prime sur la facilité d&apos;édition — et le
          sur-mesure entre en jeu. Les sections 5 à 9 mettent des
          chiffres sur cet arbitrage.
        </p>

        <InfoBox variant="blue" title="Le lexique du dirigeant : 12 mots pour lire ce guide sans effort">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>CMS</strong> : logiciel pour modifier les pages d&apos;un site sans savoir programmer (WordPress en est un).</li>
            <li><strong>Framework</strong> : boîte à outils avec laquelle un développeur construit un site sur mesure (Next.js en est un).</li>
            <li><strong>Extension</strong> (ou « plugin ») : module ajouté à WordPress pour une fonction précise — formulaire, boutique, SEO.</li>
            <li><strong>Thème</strong> : maquette prête à l&apos;emploi qui donne son apparence à un site WordPress.</li>
            <li><strong>Site statique</strong> : pages pouvant être fabriquées à l&apos;avance ; la surface serveur peut être réduite, sans supprimer les risques liés au code, à la chaîne de build, au domaine, à l&apos;hébergement ou aux comptes.</li>
            <li><strong>CDN</strong> : réseau de serveurs qui gardent chacun une copie de votre site près de vos visiteurs — des entrepôts régionaux plutôt qu&apos;un entrepôt unique.</li>
            <li><strong>SEO</strong> (référencement naturel) : le fait d&apos;apparaître dans les résultats Google.</li>
            <li><strong>Core Web Vitals</strong> : les trois notes de confort (vitesse, réactivité, stabilité) que Google attribue à chaque site.</li>
            <li><strong>Headless</strong> : montage où WordPress sert à écrire les contenus, et un site moderne à les afficher.</li>
            <li><strong>Open source</strong> : logiciel au code public, utilisable gratuitement, sans licence à payer.</li>
            <li><strong>SaaS</strong> : service loué par abonnement — si vous cessez de payer, vous perdez l&apos;usage.</li>
            <li><strong>Redirection 301</strong> : le suivi de courrier du web — l&apos;ancienne adresse d&apos;une page renvoie vers la nouvelle, réputation Google comprise.</li>
          </ul>
        </InfoBox>

        <h2 id="etat-des-lieux">3. 2026, l&apos;année charnière : domination et premier déclin</h2>
        <p>
          Soyons précis, car les deux camps exagèrent. WordPress domine
          toujours massivement : <strong>41,2 % de tous les sites web et
          59,1 % du marché des CMS</strong> (W3Techs, juillet 2026). « WordPress
          est mort » est une absurdité statistique. Mais 2025-2026 marque un
          tournant documenté : après un pic à 43,6 % début 2025, sa part de
          marché a baissé six mois consécutifs — <strong>le premier déclin
          durable depuis le début des mesures en 2011</strong> — et le rythme
          de la baisse a doublé au premier semestre 2026. Dans le même temps,
          une seule version majeure de WordPress est sortie en 2025, contre
          trois habituellement.
        </p>
        <p>
          Soyons honnêtes sur la mesure : selon la période observée, certains
          observateurs y voient une stagnation plutôt qu&apos;une baisse.
          Mais les mesures citées ici n&apos;établissent pas de croissance. Pour un outil qui en
          gagnait chaque année depuis quinze ans, c&apos;est déjà une
          information.
        </p>
        <p>
          En face, l&apos;écosystème React/Next.js est devenu le standard des
          équipes produit. React — la brique de base sur laquelle repose
          Next.js — est l&apos;outil le plus utilisé au monde par les
          développeurs web (environ 144 millions de téléchargements par
          semaine), et Next.js son framework dominant, utilisé par 59 % des
          développeurs interrogés par l&apos;enquête State of JS 2025. Ce que
          ces chiffres changent pour vous : cette technologie ne disparaîtra
          pas, et vous trouverez toujours — aujourd&apos;hui comme dans dix
          ans — des prestataires capables de reprendre votre site. WordPress
          non plus ne va pas disparaître. La question n&apos;est donc pas
          « qui va gagner » : c&apos;est « lequel sert votre objectif, à quel
          coût total ».
        </p>

        <h2 id="qui-utilise">4. Qui utilise Next.js (vérifié dans le code source)</h2>
        <p>
          L&apos;argument qui parle le plus à un dirigeant français :{" "}
          <strong>TF1, LVMH et Renault Group servent leur site public en
          Next.js</strong> — vérifié par nos soins dans le code source de
          leurs pages en juillet 2026, tout comme Welcome to the Jungle,
          nike.com ou notion.com. Ce ne sont pas des paris technologiques :
          ce sont des groupes pour qui la performance, l&apos;image et la
          sécurité du site sont des enjeux de direction générale. À
          l&apos;autre bout du spectre, les mêmes fondations techniques sont
          accessibles à des PME de Savoie — c&apos;est l&apos;avantage d&apos;un standard
          ouvert : le socle de TF1 est accessible à une entreprise de 10
          personnes.
        </p>

        <InfoBox variant="blue" title="Les limites honnêtes de Next.js">
          <p className="mb-2">
            Pour que la comparaison tienne, disons aussi ce qui fâche.
          </p>
          <ul className="list-disc pl-4 space-y-1.5">
            <li>Le ticket d&apos;entrée de notre périmètre sur mesure reste supérieur à de nombreuses offres WordPress sur thème. L&apos;écart exact dépend des contenus, du design, des intégrations, des droits, de la maintenance et des coûts tiers ; il faut le calculer sur le même périmètre et la même durée. Les études sur l&apos;IA ne permettent pas d&apos;en déduire une remise ou un délai universel.</li>
            <li>Sans outil d&apos;édition branché, chaque modification de contenu passe par un développeur — la section 10 détaille les solutions.</li>
            <li>Rien d&apos;équivalent aux 61 000 extensions WordPress : formulaire, multilingue ou réservation se développent, ou s&apos;intègrent via des services spécialisés.</li>
            <li>Les développeurs eux-mêmes trouvent l&apos;outil de plus en plus complexe : dans la grande enquête annuelle du secteur (State of JS 2025), environ un développeur sur cinq s&apos;en dit enthousiaste et un sur six critique. Traduction pour vous : un outil puissant, qui demande un prestataire réellement compétent.</li>
            <li>Next.js est porté par Vercel, qui vend aussi de l&apos;hébergement. D&apos;autres déploiements sont possibles, mais leur compatibilité dépend des fonctions utilisées, de l&apos;adaptateur, du cache et de l&apos;exploitation. Le plan de sortie doit être testé, pas supposé.</li>
          </ul>
        </InfoBox>

        <h2 id="performance">5. Performance mesurée : les Core Web Vitals réels</h2>
        <p>
          Votre site est-il rapide ? Vous n&apos;avez pas à le croire sur
          parole : Google le mesure en continu, sur les visites réelles, et
          publie le résultat. Ces mesures s&apos;appellent les Core Web
          Vitals, et voici ce qu&apos;en disent les données de terrain (HTTP
          Archive / CrUX — les relevés effectués par Google sur les vrais
          navigateurs des visiteurs, pas des tests en laboratoire) :{" "}
          <strong>43 à 46 % des sites WordPress obtiennent la note « bonne
          expérience » sur mobile — la dernière place des grands CMS.</strong>{" "}
          Si votre site est concerné, notre guide{" "}
          <Link href="/guides/pourquoi-mon-site-est-lent">pourquoi mon site
          est lent</Link> pose le diagnostic dans le bon ordre — en
          commençant par le poids du JavaScript exécuté.
        </p>

        <InfoBox variant="emerald" title="En clair : les Core Web Vitals">
          Les Core Web Vitals (« signaux web essentiels ») sont les trois
          notes par lesquelles Google évalue le confort d&apos;un site : la
          vitesse d&apos;affichage du contenu principal (idéalement moins de
          2,5 secondes), la réactivité (le site répond-il immédiatement au
          clic ?) et la stabilité visuelle (la page ne « saute » pas pendant
          le chargement — ce bouton qui se dérobe au moment où vous alliez
          cliquer). Voyez-les comme le contrôle technique de votre site :
          Google le fait passer en continu, et n&apos;importe qui peut
          consulter le vôtre gratuitement avec l&apos;outil PageSpeed
          Insights. Être « au vert », dans la suite de ce guide, signifie :
          réussir les trois épreuves — un signal que Google utilise, parmi
          d&apos;autres, pour classer les pages.
        </InfoBox>

        <GuideTable
          headers={["Plateforme", "Sites « au vert » sur mobile"]}
          rows={[
            ["Duda", "84 %"],
            ["Shopify", "75 %"],
            ["Wix", "71 %"],
            ["Squarespace", "68 %"],
            ["Moyenne mondiale du web", "48 %"],
            ["WordPress", "43 – 46 % (dernière place des grands CMS)"],
          ]}
        />

        <p>
          Cette dernière place n&apos;est pas un accident, c&apos;est une
          mécanique. À chaque visiteur, WordPress fabrique la page à la
          demande en interrogeant sa base de données — un plat cuisiné à la
          commande : fourneaux, garde-manger, dressage (seuls ~32 % des
          sites WordPress ont un bon temps de réponse serveur). Les
          constructeurs de pages ajoutent par-dessus des mégaoctets de
          scripts. Un site statique, lui, est un buffet préparé à
          l&apos;avance : la page existe déjà, finie — il n&apos;y a
          qu&apos;à la servir.
        </p>
        <p>
          Honnêteté d&apos;abord : la réactivité de WordPress est bonne —
          sur ~86 % des sites, la page répond vite quand on clique (le
          critère « INP » de Google) ; son vrai point faible est la vitesse
          d&apos;affichage initiale. Et il n&apos;existe pas d&apos;agrégat
          officiel récent pour Next.js — le Core Web Vitals Technology
          Report d&apos;HTTP Archive (cwvtech.report) l&apos;estime autour
          de 68 % de sites au vert : un framework moderne mal utilisé
          produit aussi des sites lents. L&apos;argument exact est
          celui-ci : <strong>un site statique sur mesure réduit certains
          traitements au moment de la visite</strong>. Ses pages peuvent être
          fabriquées à l&apos;avance, puis copiées sur des serveurs répartis dans le
          monde entier (un « CDN »), au plus près de vos visiteurs. Des
          fonctions dynamiques, scripts tiers et appels réseau peuvent
          néanmoins rester nécessaires. WordPress peut aussi utiliser du cache
          et un CDN. Une cible utile reste à définir page par page,
          avec un protocole de mesure écrit ; aucun framework ne garantit à
          lui seul des Core Web Vitals de terrain au vert.
        </p>

        <InfoBox variant="amber" title="Ce que ça change pour vous : la vitesse, traduite en euros">
          Sur mobile, une page qui met plus de 3 secondes à s&apos;afficher
          perd une grande partie de ses visiteurs avant même qu&apos;ils
          aient vu votre offre. L&apos;étude « Milliseconds Make Millions »
          (Deloitte pour Google, 37 marques, 30 millions de sessions) a
          mesuré l&apos;effet d&apos;un gain de 0,1 seconde de chargement :
          +8,4 % de ventes dans le commerce, +10,1 % de conversions dans le
          voyage. Pour une entreprise qui vit des demandes de devis reçues
          par son site, un site lent, ce sont des appels en moins chaque
          semaine. C&apos;est là que se joue l&apos;écart entre la
          dernière place du classement (WordPress, 43-46 % au vert) et
          sa tête. Ces résultats agrégés et cette étude ne permettent pas de
          prédire la performance ou le chiffre d&apos;affaires d&apos;un autre site.
        </InfoBox>

        <h2 id="seo">6. Le match SEO : ce que Google dit vraiment</h2>
        <p>
          « WordPress est meilleur pour le SEO » est l&apos;idée reçue la
          plus répandue du marché — et Google lui-même l&apos;a démentie :
          John Mueller (Google Search) a précisé qu&apos;aucun CMS n&apos;est
          intrinsèquement favorisé, que Google ne traite aucune plateforme
          différemment, et que seul compte le résultat rendu — code, vitesse,
          contenu. Ce que WordPress a réellement pour lui : des extensions
          SEO matures qui balisent le terrain pour les non-techniciens. Ce
          que le sur-mesure a pour lui : le résultat, justement. Des pages
          dont le contenu principal est présent dans le HTML initial. Google
          sait aussi rendre du JavaScript : ce choix facilite certains contrôles
          techniques, sans garantir exploration, compréhension ou classement.
          Des données structurées
          taillées sur mesure — les étiquettes invisibles qui décrivent
          chaque page à Google et aux assistants IA (votre activité, vos
          prix lorsque l&apos;offre visible les justifie, cet auteur). Leur
          présence peut rendre une page éligible à certaines présentations,
          sans assurer résultat enrichi, classement ou citation. Les objectifs
          Core Web Vitals restent à mesurer. Et aucune limite d&apos;extension.
          Ce que le sur-mesure permet et qu&apos;aucun thème ne
          réplique, au passage : un design dessiné pour votre marque
          et des animations de niveau produit (bibliothèques comme
          Framer Motion ou GSAP, inaccessibles proprement sur un thème
          WordPress alourdi de scripts) — la différence entre un site
          qui informe et un site qui convainc. Ce site —
          hagnere-code.ai — constitue un exemple public dont vous pouvez
          examiner le rendu, la vitesse et les interactions. Cela ne vaut pas
          garantie de performance pour un autre projet et ne prouve pas à lui
          seul chaque composant de la stack interne.
        </p>
        <p>
          Certains moteurs et assistants peuvent exploiter le contenu public et
          certains balisages, selon leurs propres systèmes. Aucun CMS, fichier
          `llms.txt` ou schéma ne garantit d&apos;être cité. Le bénéfice vérifiable
          reste plus simple : un contenu clair, accessible et correctement
          structuré est plus facile à contrôler et à maintenir.
        </p>

        <h2 id="securite">7. Sécurité : vérifier les chiffres avancés</h2>
        <p>
          Les pages concurrentes recopient des chiffres invérifiables
          (« 30 000 sites piratés par jour ») sans jamais citer de source.
          Voici les données du rapport officiel Patchstack 2026, LA référence
          du secteur : <strong>11 334 nouvelles vulnérabilités recensées
          dans l&apos;écosystème WordPress en 2025 (+42 % sur un an), dont
          91 % dans les extensions</strong> et 9 % dans les thèmes. Le cœur
          de WordPress ? 6 failles seulement, toutes mineures. Le problème
          n&apos;est pas WordPress : c&apos;est la jungle d&apos;extensions
          qu&apos;on lui greffe.
        </p>
        <ul>
          <li>
            La moitié des failles importantes sont{" "}
            <strong>exploitées par des pirates dans les 24 heures</strong>{" "}
            suivant leur publication — le plus souvent en moins de 5 heures,
            bien avant que la plupart des sites aient installé le correctif.
            Votre site n&apos;est pas sélectionné manuellement : des robots testent
            en continu les sites exposés.
          </li>
          <li>
            Les défenses standard des hébergeurs ne bloquent que{" "}
            <strong>12 à 26 % des attaques</strong> testées par Patchstack.
          </li>
          <li>
            Contre-intuitif : les extensions <em>payantes</em> affichent 3
            fois plus de vulnérabilités activement exploitées que les
            gratuites — payer une licence ne protège pas.
          </li>
        </ul>

        <InfoBox variant="amber" title="À quoi ressemble un piratage pour une TPE ?">
          Exemple de risque, sans fréquence ni coût présumés : un compte, une
          extension ou un serveur compromis peut modifier le site ou déclencher
          un avertissement de sécurité. La réponse dépend des sauvegardes, des
          journaux, de l&apos;hébergeur et de l&apos;incident ; le plan doit préciser
          qui intervient, dans quel délai et avec quelle procédure de reprise.
        </InfoBox>

        <p>
          Un WordPress et un site Next.js nécessitent tous deux une exploitation
          adaptée à leur architecture. Un export statique peut réduire la surface
          publique en l&apos;absence de CMS exposé ou de base de données accessible,
          mais il conserve des dépendances, une chaîne de déploiement, un domaine,
          des comptes et parfois des API. Le budget doit couvrir les risques et le
          niveau de service réellement retenus, sans attribuer zéro par défaut.
        </p>
        <p>
          La sécurité mesure le risque technique. Reste un risque
          qu&apos;aucun scanner ne détecte : qui gouverne WordPress
          lui-même — et c&apos;est là que 2024-2026 a réservé des surprises.
        </p>

        <h2 id="gouvernance">8. La crise WordPress 2024-2026, expliquée aux dirigeants</h2>
        <p>
          Un facteur de risque que les comparatifs techniques ignorent :
          la gouvernance. Depuis fin 2024, Automattic (la société de Matt
          Mullenweg, cofondateur de WordPress) est en guerre juridique avec
          WP Engine, l&apos;un des plus gros hébergeurs WordPress. Épisodes
          documentés : blocage de l&apos;accès de WP Engine aux ressources
          de WordPress.org, prise de contrôle d&apos;une extension tierce
          (ACF), puis <strong>injonction d&apos;un juge fédéral en décembre
          2025</strong> ordonnant de rétablir l&apos;accès — le procès est
          attendu fin 2026 ou début 2027. Dans l&apos;intervalle, Automattic
          a réduit ses contributions au projet open source de ~3 500 à 45
          heures/semaine (-99 %) début 2025, avant une reprise partielle ;
          la Linux Foundation a lancé le projet FAIR pour décentraliser la
          distribution des extensions.
        </p>
        <p>
          Ce qu&apos;un dirigeant doit en retenir : le socle de 41 % du web
          dépend des décisions d&apos;une personne, et un tribunal a dû
          intervenir dans son écosystème. Rien de tout cela ne casse les
          sites WordPress existants — mais un ralentissement du cœur (une
          seule version majeure en 2025) et une communauté fracturée sont
          des risques réels sur un horizon de 5 ans. À l&apos;inverse, un
          site sur mesure repose sur des standards ouverts (React est
          soutenu par une fondation et des milliers d&apos;entreprises) et
          sur du code <em>qui vous appartient</em>.
        </p>

        <h3>Et qui est derrière Next.js ? La symétrie s&apos;impose</h3>
        <p>
          Next.js est un logiciel open source — code public, gratuit — créé
          et maintenu par Vercel, une entreprise américaine dont le métier
          est l&apos;hébergement, et bâti sur React. La licence open source ne
          garantit ni la propriété de tous les livrables ni une migration
          instantanée. Le contrat doit préciser le dépôt, les droits, les
          variables, les données et les services tiers ; un test de déploiement
          alternatif permet d&apos;évaluer la portabilité réelle. Certaines
          fonctions peuvent dépendre d&apos;adaptateurs ou de services Vercel.
        </p>

        <InfoBox variant="emerald" title="À retenir avant de parler argent">
          <ol className="list-decimal pl-4 space-y-1.5">
            <li>WordPress domine encore (41 % du web) mais recule pour la première fois depuis 2011.</li>
            <li>La performance dépend de l&apos;implémentation ; WordPress peut être mis en cache et Next.js peut être dynamique.</li>
            <li>Google ne recommande aucun outil particulier pour le classement.</li>
            <li>La surface de risque dépend des extensions, dépendances, accès, services et pratiques d&apos;exploitation.</li>
            <li>La gouvernance et la dépendance fournisseur doivent être évaluées des deux côtés.</li>
          </ol>
          <p className="mt-2">
            Chacun de ces points a un prix — c&apos;est l&apos;objet de la
            section suivante.
          </p>
        </InfoBox>

        <h2 id="couts">9. Le vrai coût sur 3 ans, décomposé</h2>
        <p>
          Comparez le <strong>coût total de possession</strong> sur une durée
          commune. Les montants ne peuvent pas être déduits du framework ou du
          CMS seul : demandez-les pour votre périmètre et marquez les inconnues.
        </p>
        <GuideTable
          headers={["Poste sur 3 ans", "Option WordPress", "Option Next.js"]}
          rows={[
            ["Création, contenus et migration", "Montant du devis", "Montant du devis"],
            ["Hébergement, domaine et services", "Formule et usage", "Formule et usage"],
            ["Licences et renouvellements", "Inventaire complet", "Inventaire complet"],
            ["Mises à jour, sécurité et sauvegardes", "Niveau de service", "Niveau de service"],
            ["Support et évolutions", "Inclus / exclu / tarif", "Inclus / exclu / tarif"],
            ["Sortie et réversibilité", "Livrables et coût", "Livrables et coût"],
            ["Total 36 mois", "À calculer", "À calculer"],
          ]}
        />

        <InfoBox variant="blue" title="La même PME, deux devis, 36 mois plus tard">
          Répliquez la grille avec les deux propositions. Une valeur zéro doit
          être justifiée par le contrat ; une dépendance facturée à l&apos;usage
          doit être testée avec plusieurs scénarios. La solution la moins chère
          ne peut être connue avant ce calcul.
        </InfoBox>

        <h3>Trois contrôles à faire</h3>
        <ol>
          <li>
            <strong>Même périmètre.</strong> Contenus, intégrations, mesure,
            tests, droits et migration doivent être inclus des deux côtés.
          </li>
          <li>
            <strong>Mêmes hypothèses d&apos;usage.</strong> Trafic, stockage,
            éditeurs, support et rythme d&apos;évolution modifient les coûts.
          </li>
          <li>
            <strong>Même exigence de sortie.</strong> Vérifiez la remise du
            contenu, du code lorsqu&apos;il est compris, des données, des accès,
            de la documentation et la capacité d&apos;un tiers à reprendre.
          </li>
        </ol>
        <p>
          Soyons aussi exigeants avec notre propre solution : un site
          Next.js n&apos;est pas « sans maintenance ». Le framework publie
          des mises à jour et les briques logicielles doivent être surveillées.
          Un site statique peut avoir moins de services exposés qu&apos;un CMS
          dynamique, sans exclure les correctifs urgents. Le calendrier dépend
          des avis de sécurité, des dépendances et de l&apos;architecture. Le détail des grilles
          est dans notre guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d&apos;un site
          vitrine</Link>.
        </p>

        <h3>Le coût de sortie : qui possède quoi</h3>
        <p>
          Un poste doit aussi être comparé : le coût du départ. WordPress exporte
          nativement son contenu (articles, pages,
          catégories) dans un format standard — bon point. Mais la mise en
          page appartient au constructeur de pages : le code
          d&apos;Elementor ou de Divi n&apos;est pas portable, et changer de
          thème ou de prestataire impose souvent de tout remonter. Côté
          sur-mesure, tout dépend d&apos;une ligne de contrat : la{" "}
          <strong>cession du code source</strong>. Chez Hagnéré Code, les
          livrables spécifiques sont transférés après paiement selon les CGV&nbsp;;
          dépôt, accès, documentation et licences sont détaillés au devis. La vraie fracture de réversibilité
          n&apos;est d&apos;ailleurs pas WordPress contre Next.js : elle
          oppose les socles dont vous possédez le code (WordPress
          auto-hébergé, sur-mesure livré) aux plateformes fermées (Wix,
          Squarespace, Webflow) où vous êtes locataire à vie — notre{" "}
          <Link href="/guides/wix-ou-wordpress">comparatif Wix ou
          WordPress</Link> chiffre précisément ce verrouillage. Exigez
          cette clause dans tout devis, quel que soit le socle.
        </p>

        <GuideInlineCTA
          title="Vous hésitez pour votre propre site ?"
          description="Décrivez votre projet en 3 minutes : nous vous disons honnêtement si WordPress suffit — ou ce que du sur-mesure changerait, chiffres à l'appui. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti."
          tags={["Objectif : prochain jour ouvré", "Conseil honnête", "Sans engagement"]}
        />

        <h2 id="contenu">10. « Et pour publier mon contenu ? » — l&apos;autonomie honnête</h2>
        <p>
          C&apos;est LA force de WordPress, reconnaissons-la pleinement : une
          équipe marketing y publie en autonomie totale, dans une interface
          largement diffusée, avec 61 000 extensions à portée de clic.
          Aucun site sur mesure ne réplique cela gratuitement. Côté
          sur-mesure, trois réponses existent, par ordre de coût :
        </p>
        <ul>
          <li>
            <strong>L&apos;agence gère le contenu pour vous.</strong> Vous
            envoyez vos textes, l&apos;agence les met en ligne sous 24-48 h.
            Adapté quand le site évolue quelques fois par an — c&apos;est
            inclus dans nos{" "}
            <Link href="/services/maintenance-evolution">forfaits de
            maintenance et d&apos;évolution</Link>.
          </li>
          <li>
            <strong>Un outil d&apos;édition branché sur le site</strong> (un
            « CMS headless » — voir l&apos;encadré ci-dessous). Votre équipe
            modifie textes et images dans une interface moderne, le site
            reste statique, rapide et sécurisé. Sanity ou Payload sont
            gratuits pour un site vitrine ; Strapi est open source — code
            public, gratuit, sans société qui puisse vous couper
            l&apos;accès.
          </li>
          <li>
            <strong>WordPress conservé en coulisses</strong> pour
            l&apos;édition, le site servi par Next.js (section 12).
          </li>
        </ul>

        <InfoBox variant="blue" title="En clair : le CMS headless">
          « Headless » (littéralement « sans tête ») signifie que
          l&apos;outil d&apos;édition et le site public sont séparés, comme
          la cuisine et la salle d&apos;un restaurant. D&apos;un côté, une
          interface privée où votre équipe rédige ses contenus : la
          cuisine. De l&apos;autre, votre site Next.js, qui les sert aux
          visiteurs en pages statiques ultra-rapides : la salle. Pour vos
          équipes, l&apos;usage ressemble beaucoup à WordPress : on se
          connecte, on écrit, on clique sur « Publier ». La différence est
          invisible mais décisive : l&apos;outil d&apos;édition n&apos;est
          pas exposé sur votre site public — pas d&apos;extensions à
          corriger, pas de porte d&apos;entrée pour les attaques, pas de
          ralentissement pour les visiteurs.
        </InfoBox>

        <h3>Au quotidien : qui fait quoi pour modifier le site ?</h3>
        <p>
          La vraie peur derrière cette question : « vais-je devoir appeler
          quelqu&apos;un à chaque virgule ? ». Voici la réponse, cas par
          cas.
        </p>
        <GuideTable
          headers={["Besoin", "WordPress", "Next.js sur mesure"]}
          rows={[
            ["Changer un texte ou une photo", "Vous-même, 10 minutes", "Vous-même en 10 minutes avec un CMS headless ; sinon l'agence, sous 24-48 h"],
            ["Ajouter une page", "Vous-même, si le thème s'y prête", "L'agence, ou vous-même selon le montage choisi au départ"],
            ["Ajouter une fonction (rendez-vous, paiement, newsletter)", "Une extension à installer, puis à maintenir", "Un service spécialisé branché au site (Calendly, Brevo…), sans alourdir les pages"],
            ["Refaire le design", "Changement de thème, souvent plus lourd qu'annoncé", "Prestation d'agence"],
          ]}
        />
        <p>
          La vraie question n&apos;est donc pas « puis-je tout faire
          moi-même ? » mais <strong>« qu&apos;ai-je réellement besoin de
          faire moi-même, et à quelle fréquence ? »</strong>. Faites le
          test : ouvrez les blogs des dix dernières PME que vous avez
          croisées — combien ont publié ces douze derniers mois ? Beaucoup
          paient pourtant chaque année la maintenance du CMS choisi
          précisément « pour publier ». Si votre fréquence réelle est de
          quelques mises à jour par an, vous n&apos;avez pas besoin
          d&apos;un CMS : vous avez besoin d&apos;un site rapide et
          d&apos;un prestataire réactif.
        </p>

        <h2 id="wordpress-bon-choix">11. Les cas où WordPress reste le bon choix</h2>
        <p>
          Une agence Next.js qui prétendrait que WordPress ne sert plus à
          rien ne mériterait pas votre confiance. Mais soyons clairs
          sur le périmètre : pour une entreprise dont le site doit
          convertir et durer, notre réponse est le sur-mesure. Voici
          les situations — bien délimitées — où WordPress reste le meilleur
          choix :
        </p>
        <ul>
          <li>
            <strong>Le site éditorial intensif</strong> — blog, média,
            actualités : publication quotidienne ou hebdomadaire par une
            équipe non technique. C&apos;est son terrain natal, il y est
            excellent.
          </li>
          <li>
            <strong>Le budget sous 4 000 €</strong> — un WordPress à thème
            bien exécuté et maintenu vaut mieux qu&apos;un sur-mesure
            bâclé au même prix.
          </li>
          <li>
            <strong>L&apos;urgence à micro-budget</strong> — en ligne en 3-4 semaines avec
            un écosystème de prestataires immense : on obtient
            plusieurs devis en quelques jours, à des prix tirés par la
            concurrence. Le calendrier d&apos;un développement sur mesure dépend
            du contenu, du design, des intégrations et des critères de recette ;
            l&apos;usage d&apos;assistants IA ne permet pas d&apos;annoncer un raccourcissement
            universel. Notre{" "}
            <Link href="/guides/combien-de-temps-pour-creer-un-site">guide
            des délais de création</Link> chiffre les deux scénarios.
          </li>
          <li>
            <strong>L&apos;équipe déjà formée</strong> — si vos équipes
            maîtrisent WordPress et que le site actuel remplit son rôle,
            migrer pour migrer est une dépense, pas un investissement.
          </li>
        </ul>
        <p>
          La condition non négociable dans tous les cas : un contrat de
          maintenance sérieux et peu d&apos;extensions. Le WordPress
          dangereux n&apos;est pas WordPress — c&apos;est le site à 40
          extensions sans maintenance active. Et si votre site
          actuel ne remplit plus son rôle, le budget complet d&apos;un
          changement de socle — plan de redirections 301 et migration SEO
          compris — est chiffré dans notre{" "}
          <Link href="/guides/prix-refonte-site-internet">guide du prix
          d&apos;une refonte de site internet</Link>, et la méthode
          anti-perte de trafic, sourcée sur la documentation Google,
          dans notre{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">guide
          « refondre sans perdre son SEO »</Link>. Si votre décision
          est déjà prise, notre{" "}
          <Link href="/guides/migrer-wordpress-vers-nextjs">guide de la
          migration WordPress vers Next.js</Link> déroule les trois
          architectures possibles, ce qui casse au passage et ce qui
          le remplace.
        </p>

        <p>
          Vous avez déjà un WordPress ? Trois vérifications express :
          combien d&apos;extensions actives (au-delà de 20, signal
          d&apos;alerte) ? De quand date la dernière mise à jour (plus de
          3 mois : site probablement vulnérable) ? Et s&apos;affiche-t-il en
          moins de 3 secondes sur votre propre téléphone, en 4G ? Si les
          réponses fâchent, faites-le{" "}
          <Link href="/services/audit-technique">auditer
          techniquement</Link> — et comparez le coût
          d&apos;une remise à niveau à celui d&apos;une refonte (section 9).
        </p>

        <h3>Et pour vendre en ligne ? WooCommerce, Shopify ou sur-mesure</h3>
        <p>
          Ce guide compare des sites vitrines et éditoriaux, mais beaucoup
          de dirigeants se posent la question pour une boutique. Réponse
          courte : ni WordPress ni Next.js n&apos;est le premier choix
          évident. Côté WordPress, la boutique s&apos;appelle WooCommerce —
          pertinente si vous avez déjà un WordPress éditorial fort et un
          petit catalogue, mais chaque fonction (paiement, livraison, TVA,
          relance de panier) est une extension de plus à payer, à corriger
          et à faire cohabiter, sur un socle qui cumule déjà les fragilités
          des sections 5 et 7. Pour vendre simplement, une plateforme
          spécialisée comme Shopify reste défendable — avec un petit
          catalogue et sans exigence de marque ; dès que la marque,
          l&apos;expérience d&apos;achat ou la volumétrie comptent, le
          sur-mesure (ou le headless) reprend la main : configurateur
          de produits, tarifs négociés par client, connexion à votre
          gestion de stock — notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">comparatif
          Shopify ou e-commerce sur mesure</Link> le chiffre sur
          3 ans. Les chiffres
          détaillés — abonnements, commissions, budgets — sont dans notre
          guide du{" "}
          <Link href="/guides/prix-site-e-commerce">prix d&apos;un site
          e-commerce</Link>.
        </p>

        <h2 id="headless">12. La 3e voie : WordPress headless + Next.js</h2>
        <p>
          Pour les organisations éditoriales qui veulent la performance sans
          abandonner leur outil d&apos;édition : le <strong>WordPress
          headless</strong>. WordPress reste la salle de rédaction — vos
          équipes ne changent aucune habitude — et un site Next.js sert les
          pages aux visiteurs : statique, rapide, à la surface
          d&apos;attaque minimale. C&apos;est l&apos;architecture choisie
          par TechCrunch, l&apos;un des plus grands médias technologiques
          américains (des millions de lecteurs par mois), et par Backlinko,
          un site américain de référence en marketing : après sa migration —
          documentée publiquement —, ses pages se sont affichées{" "}
          <strong>3 fois plus vite</strong>. Le prix de ce
          meilleur-des-deux-mondes : 8 000 à 25 000 € selon le périmètre
          (deux systèmes à faire vivre, et les fonctions des extensions à
          reconstruire côté site public). Pertinent pour un média, un site à
          fort trafic ou une marque multicanale ; surdimensionné pour un
          site vitrine de PME, où un CMS headless léger fait le même travail
          pour moins cher.
        </p>

        <h2 id="grille-decision">13. La grille de décision finale, profil par profil</h2>
        <p>
          Notre méthode en trois questions, dans l&apos;ordre :{" "}
          <strong>1. Qui publie, à quelle fréquence ?</strong> (quotidien →
          CMS ; quelques fois par an → sur-mesure suffit)&nbsp;
          <strong>2. Quel enjeu business ?</strong> (le site génère vos
          clients → la performance est un investissement, pas un luxe)&nbsp;
          <strong>3. Quel horizon ?</strong> (à 5 ans, comparez les coûts
          totaux, pas les devis). Puis vérifiez votre profil :
        </p>
        <GuideTable
          headers={["Profil", "Recommandation", "Pourquoi"]}
          rows={[
            ["Blog / média actif", "WordPress bien maintenu — passer en headless si le média devient un canal d'acquisition", "Autonomie éditoriale imbattable ; la performance se greffe ensuite sans changer d'outil d'édition"],
            ["TPE locale, budget contraint", "Comparer CMS, outil hébergé et site statique", "Le périmètre et l'autonomie priment sur une limite d'extensions arbitraire"],
            ["PME dont le site soutient l'acquisition", "Comparer deux prototypes ou références comparables", "Mesurer performance, édition, SEO technique, coûts et exploitation"],
            ["Corporate / marque à fort enjeu", "Architecture à cadrer", "Image, performance, sécurité, gouvernance et droits au contrat"],
            ["Boutique en ligne", "Shopify (simple) ou sur-mesure (marque, volumétrie)", "Voir le verdict e-commerce, section 11"],
            ["Éditorial fort trafic multicanal", "WordPress headless + Next.js", "Back-office connu + site public performant"],
            ["Application, espace client, logiciels de gestion (ERP/CRM)", "Architecture applicative à cadrer", "WordPress peut rester CMS ; les règles métier demandent une analyse dédiée"],
          ]}
        />
        <InfoBox variant="amber" title="Le coût de se tromper">
          Se tromper de socle ne se paie pas le jour du choix, mais 18 mois
          plus tard. Dans un sens : le WordPress à thème choisi « pour
          aller vite » devient le canal d&apos;acquisition principal, et il
          faut tout refaire en urgence — déménager les contenus, poser des
          redirections 301 (ces panneaux « nous avons déménagé » placés sur
          chaque ancienne page pour que Google et vos visiteurs retrouvent
          les nouvelles adresses sans perdre votre place dans les
          résultats) et reconstruire le référencement, au prix fort. Dans
          l&apos;autre : le sur-mesure commandé « pour
          faire moderne » alors que le vrai besoin était de publier trois
          articles par semaine, et chaque mise à jour de contenu passe par
          un devis. Les deux erreurs coûtent plus cher que
          l&apos;écart initial entre les deux options — d&apos;où les trois
          questions ci-dessus, à poser avant de comparer les prix.
        </InfoBox>

        <p>
          Dernier conseil, le plus important : quel que soit le socle,{" "}
          <strong>faites chiffrer le même périmètre partout</strong> — notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle de
          cahier des charges</Link> est libre de copie — et comparez en coût
          sur 3 ans. Si vous voulez notre avis sur votre cas précis,{" "}
          <Link href="/demarrer-un-projet">décrivez votre projet en
          3 minutes</Link> : objectif de réponse personnelle le prochain jour ouvré, gratuite,
          et nous vous dirons si WordPress suffit. Pour chiffrer les deux
          scénarios, nos guides du{" "}
          <Link href="/guides/combien-coute-un-site-internet">prix
          d&apos;un site internet</Link> et du{" "}
          <Link href="/guides/prix-site-e-commerce">prix d&apos;un site
          e-commerce</Link> donnent toutes les grilles — et notre méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link> garantit forfait et
          dates par contrat. Si votre choix se porte sur le sur-mesure,
          notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link> détaille ce que
          nous construisons, ce que nous garantissons par écrit et les cas
          où nous vous orientons ailleurs.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://w3techs.com/technologies/details/cm-wordpress" target="_blank" rel="noopener noreferrer">W3Techs, statistiques d&apos;usage WordPress</a> ;{" "}
          <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" target="_blank" rel="noopener noreferrer">Patchstack, State of WordPress Security in 2026</a> ;{" "}
          <a href="https://www.searchenginejournal.com/2025-core-web-vitals-cms-rankings/552679/" target="_blank" rel="noopener noreferrer">classement Core Web Vitals des CMS (HTTP Archive / CrUX)</a> ;{" "}
          <a href="https://almanac.httparchive.org/en/2025/performance" target="_blank" rel="noopener noreferrer">HTTP Archive, Web Almanac 2025</a> ;
          Core Web Vitals Technology Report (HTTP Archive, cwvtech.report) ;{" "}
          <a href="https://www.searchenginejournal.com/googles-john-mueller-wordpress-not-inherently-better-for-seo/474737/" target="_blank" rel="noopener noreferrer">John Mueller (Google) sur WordPress et le SEO</a> ;{" "}
          <a href="https://2025.stateofjs.com/" target="_blank" rel="noopener noreferrer">State of JavaScript 2025</a> ;{" "}
          <a href="https://bejamas.com/hub/case-studies/backlinko-case-study" target="_blank" rel="noopener noreferrer">étude de cas Backlinko (WordPress headless + Next.js)</a> ;{" "}
          <a href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability" target="_blank" rel="noopener noreferrer">Linux Foundation, projet FAIR</a> ;
          Deloitte / Google, « Milliseconds Make Millions » (2020) ;
          couverture du litige Automattic / WP Engine (TechCrunch, WP
          Tavern, 2024-2026) ; présence de Next.js chez TF1, LVMH, Renault
          Group : vérification directe du code source (juillet 2026) ;
          baromètres TJM France (SILKHOM, Malt, Free-Work). Les parts de
          marché et tarifs évoluent : vérifiez les sources avant de décider.
        </p>
        <p className="text-sm">
          <em>
            Hagnéré Code construit des sites Next.js — ce guide assume ce
            point de vue et le compense par des sources vérifiables et des
            cas où WordPress reste recommandé. Les fourchettes sont des prix
            de marché constatés, à confirmer par devis sur votre périmètre.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
