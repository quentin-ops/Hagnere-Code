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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  wordCount: 4800,
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
      "Google est formel : aucun CMS ni framework n'est favorisé en soi — John Mueller (Google Search) l'a répété, seul compte le résultat final (HTML, vitesse, contenu). L'avantage réel de Next.js est indirect mais mesurable : un HTML complet servi immédiatement à Googlebot et des Core Web Vitals plus faciles à tenir (les sites WordPress sont derniers des grands CMS avec ~46 % au vert, sous la moyenne mondiale du web). Un WordPress bien optimisé peut très bien ranker ; il part juste avec un handicap technique à compenser.",
  },
  {
    question: "WordPress vaut-il encore la peine d'être utilisé en 2026 ?",
    answer:
      "Oui, dans son terrain : un blog ou un site éditorial intensif géré par une équipe non technique, un budget serré, une mise en ligne rapide. WordPress fait toujours tourner environ 41 % du web et 59 % des sites à CMS. Mais 2025-2026 marque le premier déclin durable de sa part de marché depuis 2011, sur fond de crise de gouvernance et d'une seule version majeure publiée en 2025 — le statu quo « WordPress par défaut » mérite désormais un vrai examen.",
  },
  {
    question: "Quels sont les inconvénients de WordPress ?",
    answer:
      "Quatre, chiffrables. La sécurité de l'écosystème : 11 334 vulnérabilités recensées en 2025 (+42 %), dont 91 % dans les extensions (les « plugins ») — d'où une maintenance obligatoire (500 à 2 000 €/an). La performance : dernier des grands CMS aux Core Web Vitals (~46 % de sites au vert contre 75 % pour Shopify). Le coût récurrent : licences premium (120 à 450 $/an) + maintenance à vie. Et la dépendance aux constructeurs de pages, dont la mise en page n'est pas portable si vous voulez partir.",
  },
  {
    question: "Quelle est la meilleure alternative à WordPress ?",
    answer:
      "Cela dépend du besoin. Pour un site vitrine ou corporate orienté acquisition : un site sur mesure Next.js (statique, rapide, sans extensions à patcher). Pour vendre en ligne : Shopify (simple) ou du sur-mesure (volumétrie). Pour garder une édition de contenu confortable sans la dette WordPress : Next.js + un CMS headless (Sanity et Payload ont des plans gratuits suffisants pour un site vitrine). Webflow est une option intermédiaire, mais vous restez locataire d'un service par abonnement (un « SaaS ») : si l'éditeur augmente ses prix ou ferme, vous ne pouvez pas partir avec votre site.",
  },
  {
    question: "Quand ne pas utiliser WordPress ?",
    answer:
      "Le consensus est unanime sur un cas : dès que le site devient applicatif — espace client, tableau de bord, devis en ligne, connexion à vos logiciels de gestion (ERP/CRM : facturation, stock, fichier clients), temps réel — WordPress est un CMS, pas un framework d'application. Il est aussi déconseillé quand le site est votre canal d'acquisition principal et que chaque dixième de seconde compte, ou quand personne en interne ne veut assumer les mises à jour hebdomadaires de sécurité.",
  },
  {
    question: "WordPress est-il gratuit ?",
    answer:
      "Le logiciel, oui. Le site professionnel, non : création 1 500 à 15 000 € en France, hébergement managé 25 à 40 €/mois, licences premium courantes (constructeur de pages, cache, champs personnalisés : 120 à 450 $/an), et surtout maintenance de sécurité 500 à 2 000 €/an — rendue de facto obligatoire par le rythme des failles d'extensions. « Gratuit » décrit la licence, pas le coût de possession.",
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
      "À l'entrée, WordPress gagne : 800 à 5 000 € avec un thème contre 4 000 à 8 000 € et plus pour du Next.js sur mesure en agence (6 900 € chez Hagnéré Code, design et rédaction inclus). Sur 3 ans, l'écart fond : le WordPress professionnel cumule maintenance (500-2 000 €/an) et licences (120-450 $/an) là où un site statique Next.js coûte ~0-20 €/mois d'hébergement et n'a structurellement rien à patcher en urgence. Faites le calcul en coût total, pas en devis initial.",
  },
  {
    question: "Pourquoi mon site WordPress est-il lent ?",
    answer:
      "Structurellement : chaque page est fabriquée à la demande (code PHP + base de données) à chaque visite — seuls ~32 % des sites WordPress ont un bon temps de réponse serveur — et les thèmes/constructeurs de pages chargent des mégaoctets de scripts. Résultat mesuré : ~46 % des sites WordPress passent les Core Web Vitals, dernière place des grands CMS. Cache, CDN et optimisation d'images compensent en partie — c'est un travail (et un coût) récurrent qu'un site statique n'a pas.",
  },
  {
    question: "WordPress est-il sûr ?",
    answer:
      "Le cœur de WordPress, oui : 6 vulnérabilités seulement en 2025, toutes mineures. Le danger est l'écosystème : 91 % des 11 334 failles de 2025 viennent des extensions, la moitié des failles critiques sont exploitées dans les 24 h, et les défenses des hébergeurs ne bloquent qu'une minorité des attaques ciblées. Un WordPress à 5 extensions maintenu chaque semaine est raisonnablement sûr ; un WordPress à 40 extensions sans contrat de maintenance est une cible.",
  },
  {
    question: "Quel budget pour quitter WordPress sans perdre son référencement ?",
    answer:
      "Une migration vers un site sur mesure se chiffre comme une refonte : 60 à 80 % du prix d'une création équivalente, plus la migration des contenus et surtout le plan de redirections 301 page à page (chaque ancienne adresse renvoie automatiquement visiteurs et Google vers la nouvelle) — c'est lui qui préserve vos positions Google. Pour un site vitrine : 6 900 à 22 000 € selon l'ampleur chez Hagnéré Code, redirections et suivi SEO post-migration inclus. Exigez ce plan dans tout devis : votre trafic acquis vaut plus que le site.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json">{articleJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>

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
          { number: "02", title: "11 334 failles d'extensions en 2025", description: "", color: "blue" },
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
          cas — réels — où WordPress reste le meilleur choix</strong>. Parce
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
            { id: "securite", label: "7. Sécurité : les chiffres que personne ne source" },
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
          <strong>WordPress si</strong> votre site est avant tout éditorial
          (blog, actualités publiées chaque semaine par une équipe non
          technique), que le budget est serré (&lt; 4 000 €) et que vous
          acceptez une maintenance de sécurité à vie.{" "}
          <strong>Next.js / sur-mesure si</strong> le site est votre
          principal apporteur de clients — c&apos;est-à-dire s&apos;il doit
          être trouvé sur Google (le référencement naturel, ou « SEO ») et
          transformer les visiteurs en demandes de devis (ce qu&apos;on
          appelle la « conversion ») —, s&apos;il porte votre image à fort
          enjeu, ou dès qu&apos;il devient applicatif : espace client, devis
          en ligne, connexion à vos logiciels de gestion. Entre les deux, il
          existe une 3e voie dite « headless » (littéralement « sans
          tête ») : vos équipes continuent d&apos;écrire leurs contenus dans
          WordPress, mais vos visiteurs voient un site construit en
          Next.js — plus rapide et plus sûr (section 12).
        </p>
        <GuideTable
          headers={["Votre profil", "Notre verdict", "Budget repère"]}
          rows={[
            ["Blog / média : contenu quotidien, équipe non technique", "WordPress, bien maintenu", "1 500 – 8 000 € + maintenance"],
            ["TPE locale : présence simple, budget serré", "WordPress ou outil clé en main (type Wix, Squarespace), sans se sur-équiper", "800 – 4 000 €"],
            ["PME : le site doit générer des clients (référencement, conversion)", "Next.js sur mesure", "4 000 – 22 000 €"],
            ["Corporate à fort enjeu d'image et de performance", "Next.js sur mesure", "10 000 – 40 000 €"],
            ["Boutique en ligne", "Shopify (simple) ou sur-mesure (marque, volumétrie) — voir section 11", "3 000 – 80 000 €"],
            ["Éditorial fort trafic / multicanal", "WordPress headless + Next.js", "8 000 – 25 000 €"],
            ["Application web, espace client, logiciels de gestion (ERP/CRM : facturation, stock, clients)", "Sur-mesure, unanime", "15 000 – 120 000 €"],
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
          c&apos;est comparer une maison sur catalogue et un architecte : la
          première est debout en trois semaines et ressemble à ses
          voisines ; le second coûte plus cher, dessine pour votre terrain,
          et le résultat vous appartient jusqu&apos;aux fondations. Aucun
          des deux n&apos;est « meilleur » dans l&apos;absolu — tout dépend
          de ce que vous construisez, et pour combien de temps.
        </p>
        <p>
          La vraie question du dirigeant n&apos;est donc pas technique, elle
          est organisationnelle : <strong>qui publie du contenu, à quelle
          fréquence, et quel est l&apos;enjeu business du site ?</strong> Si
          la réponse est « notre équipe marketing publie trois articles par
          semaine », le CMS se justifie. Si c&apos;est « le site doit nous
          amener des clients et incarner notre sérieux », la qualité
          d&apos;exécution prime sur la facilité d&apos;édition — et le
          sur-mesure entre en jeu. Le reste de ce guide chiffre ce choix.
        </p>

        <InfoBox variant="blue" title="Le lexique du dirigeant : 12 mots pour lire ce guide sans effort">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>CMS</strong> : logiciel pour modifier les pages d&apos;un site sans savoir programmer (WordPress en est un).</li>
            <li><strong>Framework</strong> : boîte à outils avec laquelle un développeur construit un site sur mesure (Next.js en est un).</li>
            <li><strong>Extension</strong> (ou « plugin ») : module ajouté à WordPress pour une fonction précise — formulaire, boutique, SEO.</li>
            <li><strong>Thème</strong> : maquette prête à l&apos;emploi qui donne son apparence à un site WordPress.</li>
            <li><strong>Site statique</strong> : pages fabriquées à l&apos;avance, une fois pour toutes — très rapide, presque impossible à pirater.</li>
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
          Mais plus personne ne mesure de croissance. Pour un outil qui en
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
          l&apos;autre bout du spectre, nous livrons les mêmes fondations à
          des PME de Savoie — c&apos;est l&apos;avantage d&apos;un standard
          ouvert : le socle de TF1 est accessible à une entreprise de 10
          personnes.
        </p>

        <InfoBox variant="blue" title="Les limites honnêtes de Next.js">
          <p className="mb-2">
            Pour que la comparaison tienne, disons aussi ce qui fâche.
          </p>
          <ul className="list-disc pl-4 space-y-1.5">
            <li>Le ticket d&apos;entrée est 2 à 5 fois plus élevé qu&apos;un WordPress à thème.</li>
            <li>Sans outil d&apos;édition branché, chaque modification de contenu passe par un développeur — la section 10 détaille les solutions.</li>
            <li>Rien d&apos;équivalent aux 61 000 extensions WordPress : formulaire, multilingue ou réservation se développent, ou s&apos;intègrent via des services spécialisés.</li>
            <li>Les développeurs eux-mêmes trouvent l&apos;outil de plus en plus complexe : dans la grande enquête annuelle du secteur (State of JS 2025), environ un développeur sur cinq s&apos;en dit enthousiaste et un sur six critique. Traduction pour vous : un outil puissant, qui demande un prestataire réellement compétent.</li>
            <li>Next.js est édité par une société privée, Vercel, qui vend aussi de l&apos;hébergement. On a longtemps reproché aux sites Next.js d&apos;être difficiles à héberger ailleurs que chez elle ; ce n&apos;est plus vrai — l&apos;hébergeur de votre choix fait l&apos;affaire, et pour un site vitrine statique la question ne se pose même pas (section 8).</li>
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
          expérience » sur mobile — la dernière place des grands CMS.</strong>
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
          celui-ci : <strong>un site statique sur mesure contrôle 100 % de
          sa performance</strong>. Ses pages sont fabriquées une seule fois,
          à l&apos;avance, puis copiées sur des serveurs répartis dans le
          monde entier (un « CDN »), au plus près de vos visiteurs : au
          moment de la visite, il n&apos;y a plus rien à calculer — la page
          part immédiatement. Un WordPress doit compenser sa mécanique par
          des couches d&apos;accélération (le « cache ») : un travail, et un
          coût, récurrents. C&apos;est pourquoi nous garantissons
          contractuellement des Core Web Vitals au vert : sur ce socle,
          c&apos;est une exigence tenable, pas une promesse.
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
          semaine. C&apos;est là que se joue l&apos;écart entre 46 % et
          84 % de sites au vert.
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
          que le robot de Google (le programme qui parcourt le web pour le
          classer) lit d&apos;un coup : il reçoit une page finie — un
          dossier imprimé et relié — au lieu d&apos;un assemblage de scripts
          à exécuter lui-même ; moins Google travaille pour lire une page,
          plus il en lit, et mieux il la comprend. Des données structurées
          taillées sur mesure — les étiquettes invisibles qui décrivent
          chaque page à Google et aux assistants IA (votre activité, vos
          prix, cette FAQ, cet auteur) et alimentent les résultats enrichis.
          Des Core Web Vitals au vert. Et aucune limite d&apos;extension.
          Les guides de ce site — dont celui que vous lisez — sont notre
          démonstration en production.
        </p>
        <p>
          Nouveau facteur 2026 : une part croissante des recherches obtient
          sa réponse dans les moteurs et assistants IA, qui lisent le code
          final des pages et s&apos;appuient fortement sur ces données
          structurées. Là encore, aucun outil n&apos;est favorisé en soi —
          mais un site au code propre et au contenu immédiatement lisible
          part avec l&apos;avantage, quand un WordPress à constructeur de
          pages produit un code alourdi et brouillon, que les moteurs
          déchiffrent moins bien et qu&apos;il faudra nettoyer extension par
          extension.
        </p>

        <h2 id="securite">7. Sécurité : les chiffres que personne ne source</h2>
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
            Et personne ne « choisit » votre site : des robots testent tous
            les sites du monde en continu.
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
          Un matin, votre site affiche des publicités douteuses ou redirige
          vos visiteurs ailleurs. Google le repère, affiche « site
          dangereux » et le retire de ses résultats. Il faut payer un
          prestataire en urgence (souvent 500 à 2 000 €) pour nettoyer, puis
          attendre des semaines que Google refasse confiance au site.
          Pendant ce temps, vos clients qui vous cherchent ne vous trouvent
          plus.
        </InfoBox>

        <p>
          Conséquence budgétaire directe : un WordPress professionnel sans
          contrat de maintenance hebdomadaire est une cible, pas un site. Ce
          contrat coûte 500 à 2 000 €/an — c&apos;est le poste qui change
          tout le calcul économique (section 9). Un site statique Next.js,
          lui, n&apos;expose <strong>ni interface d&apos;administration, ni
          extensions, ni base de données</strong> : rien à forcer — pas de
          porte de connexion, pas de mot de passe à deviner, pas de module
          tiers vulnérable. Chaque extension WordPress est une porte de plus
          percée dans le bâtiment ; un site statique est une vitrine
          scellée : on peut la regarder, pas y entrer. D&apos;où la ligne de
          maintenance quasi nulle du tableau de la section 9 : on ne répare
          pas une porte qui n&apos;existe pas.
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
          est l&apos;hébergement, et bâti sur React, soutenu par Meta et des
          milliers d&apos;entreprises. Trois garde-fous protègent votre
          investissement : le code de votre site vous appartient et
          continuerait de tourner tel quel si Vercel disparaissait demain ;
          l&apos;hébergement est portable (l&apos;hébergeur de votre
          choix) ; et des millions de développeurs React dans le monde
          savent reprendre un projet Next.js. Le risque Vercel existe — un
          acteur commercial oriente le produit, comme Automattic pour
          WordPress — mais il ne crée pas de dépendance de survie :
          c&apos;est la différence entre dépendre d&apos;un fournisseur et
          dépendre d&apos;un standard.
        </p>

        <InfoBox variant="emerald" title="À retenir avant de parler argent">
          <ol className="list-decimal pl-4 space-y-1.5">
            <li>WordPress domine encore (41 % du web) mais recule pour la première fois depuis 2011.</li>
            <li>Sa lenteur est une mécanique, pas une fatalité : chaque page est fabriquée à la demande, un site statique est prêt à servir.</li>
            <li>Google ne préfère aucun outil — il préfère les sites rapides au code propre.</li>
            <li>Le risque de sécurité vient des extensions (91 % des 11 334 failles de 2025) : c&apos;est ce qui rend la maintenance payante obligatoire.</li>
            <li>La gouvernance : crise réelle côté WordPress, dépendance limitée côté Next.js.</li>
          </ol>
          <p className="mt-2">
            Chacun de ces points a un prix — c&apos;est l&apos;objet de la
            section suivante.
          </p>
        </InfoBox>

        <h2 id="couts">9. Le vrai coût sur 3 ans, décomposé</h2>
        <p>
          Passons au seul chiffre qui compte pour un dirigeant : le{" "}
          <strong>coût total de possession</strong> — création, hébergement,
          licences et maintenance additionnés sur la durée (le « TCO » des
          directeurs financiers). Voici notre calcul, hypothèses affichées :{" "}
          <strong>site vitrine PME de 10-15 pages, orienté acquisition,
          réalisé en agence</strong>, tarifs France 2026.
        </p>
        <GuideTable
          headers={["Poste sur 3 ans", "WordPress pro (agence)", "Next.js sur mesure"]}
          rows={[
            ["Création", "5 000 €", "6 900 €"],
            ["Hébergement", "1 080 € (managé ~30 €/mois)", "0 – 700 € (site statique, diffusion mondiale incluse)"],
            ["Licences d'outils payants (mise en page, accélération, formulaires…)", "600 € (~200 €/an)", "0 €"],
            ["Maintenance sécurité", "3 600 € (~100 €/mois, obligatoire)", "0 – 400 € (revue 1 à 2 fois par an, jamais urgente)"],
            ["Évolutions ponctuelles", "sur devis", "sur devis"],
            ["Total 36 mois", "≈ 10 300 €", "≈ 7 600 €"],
          ]}
        />

        <InfoBox variant="blue" title="La même PME, deux devis, 36 mois plus tard">
          Au moment de signer, le sur-mesure coûte 1 900 € de plus — et
          c&apos;est cet écart qui fait hésiter. Mais ensuite : hébergement
          quasi gratuit, zéro licence, rien d&apos;urgent à entretenir, là
          où le WordPress cumule ses mensualités. Au bout de 3 ans, le
          surcoût initial s&apos;est transformé en économie de 2 700 € — et
          l&apos;écart se creuse chaque année suivante. Tout l&apos;objet de
          ce guide est là : comparer des coûts de possession, pas des devis.
        </InfoBox>

        <h3>Trois lectures de ce tableau</h3>
        <ol>
          <li>
            <strong>À l&apos;entrée, WordPress gagne.</strong> Si votre
            budget plafonne à 3 000 €, un WordPress à thème bien fait bat un
            sur-mesure au rabais.
          </li>
          <li>
            <strong>Sur 3 ans, la hiérarchie s&apos;inverse.</strong> La
            maintenance obligatoire et les licences récurrentes rattrapent
            puis dépassent l&apos;écart de création : ≈ 10 300 € contre
            ≈ 7 600 €.
          </li>
          <li>
            <strong>Les prestataires WordPress sont environ dix fois plus
            nombreux en France</strong> selon les annuaires de freelances —
            les devis arrivent vite et la concurrence tire les prix. Mais
            les tarifs à la journée sont proches (300-400 €/j pour un
            spécialiste WordPress, 420-550 €/j pour un Next.js confirmé), et
            un site sans dette de maintenance consomme moins de journées de
            prestation après la livraison.
          </li>
        </ol>
        <p>
          Soyons aussi exigeants avec notre propre solution : un site
          Next.js n&apos;est pas « sans maintenance ». Le framework publie
          une version majeure environ une fois par an, et les briques
          logicielles méritent une revue une à deux fois par an — une
          demi-journée à une journée de développeur pour un site vitrine
          statique. La différence n&apos;est donc pas « maintenance contre
          zéro maintenance », elle est dans la nature de
          l&apos;obligation : rien n&apos;expose de base de données ni
          d&apos;extensions, donc rien n&apos;oblige à corriger en urgence
          sous 24 heures quand une faille est publiée. L&apos;un subit un
          rythme imposé par les attaquants ; l&apos;autre choisit son
          calendrier — maintenance subie contre maintenance planifiée.
          C&apos;est cela qui explique l&apos;écart du tableau, pas une
          prétendue absence totale d&apos;entretien. Le détail des grilles
          est dans notre guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d&apos;un site
          vitrine</Link>.
        </p>

        <h3>Le coût de sortie : qui possède quoi</h3>
        <p>
          Un poste que personne ne compare : le jour où vous voudrez
          partir. WordPress exporte nativement son contenu (articles, pages,
          catégories) dans un format standard — bon point. Mais la mise en
          page appartient au constructeur de pages : le code
          d&apos;Elementor ou de Divi n&apos;est pas portable, et changer de
          thème ou de prestataire impose souvent de tout remonter. Côté
          sur-mesure, tout dépend d&apos;une ligne de contrat : la{" "}
          <strong>cession du code source</strong>. Chez Hagnéré Code, le
          code livré vous appartient intégralement — n&apos;importe quelle
          équipe React peut le reprendre. La vraie fracture de réversibilité
          n&apos;est d&apos;ailleurs pas WordPress contre Next.js : elle
          oppose les socles dont vous possédez le code (WordPress
          auto-hébergé, sur-mesure livré) aux plateformes fermées (Wix,
          Squarespace, Webflow) où vous êtes locataire à vie. Exigez cette
          clause dans tout devis, quel que soit le socle.
        </p>

        <GuideInlineCTA
          title="Vous hésitez pour votre propre site ?"
          description="Décrivez votre projet en 3 minutes : nous vous disons honnêtement si WordPress suffit — ou ce que du sur-mesure changerait, chiffres à l'appui. Réponse personnelle sous 24 h ouvrées."
          tags={["Réponse sous 24 h ouvrées", "Conseil honnête", "Sans engagement"]}
        />

        <h2 id="contenu">10. « Et pour publier mon contenu ? » — l&apos;autonomie honnête</h2>
        <p>
          C&apos;est LA force de WordPress, reconnaissons-la pleinement : une
          équipe marketing y publie en autonomie totale, dans une interface
          que tout le monde connaît, avec 61 000 extensions à portée de clic.
          Aucun site sur mesure ne réplique cela gratuitement. Côté
          sur-mesure, trois réponses existent, par ordre de coût :
        </p>
        <ul>
          <li>
            <strong>L&apos;agence gère le contenu pour vous.</strong> Vous
            envoyez vos textes, l&apos;agence les met en ligne sous 24-48 h.
            Adapté quand le site évolue quelques fois par an — c&apos;est
            inclus dans nos forfaits de maintenance.
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
          rien ne mériterait pas votre confiance. Voici où WordPress gagne,
          clairement :
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
            <strong>L&apos;urgence</strong> — en ligne en 3-4 semaines avec
            un écosystème de prestataires immense : les devis arrivent vite
            et la concurrence tire les prix.
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
          extensions que plus personne ne met à jour. Et si votre site
          actuel ne remplit plus son rôle, le budget complet d&apos;un
          changement de socle — plan de redirections 301 et migration SEO
          compris — est chiffré dans notre{" "}
          <Link href="/guides/prix-refonte-site-internet">guide du prix
          d&apos;une refonte de site internet</Link>.
        </p>

        <p>
          Vous avez déjà un WordPress ? Trois vérifications express :
          combien d&apos;extensions actives (au-delà de 20, signal
          d&apos;alerte) ? De quand date la dernière mise à jour (plus de
          3 mois : site probablement vulnérable) ? Et s&apos;affiche-t-il en
          moins de 3 secondes sur votre propre téléphone, en 4G ? Si les
          réponses fâchent, faites-le auditer — et comparez le coût
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
          spécialisée comme Shopify fait mieux. Le sur-mesure ne se justifie
          qu&apos;au-delà d&apos;un certain volume ou pour des besoins
          particuliers : configurateur de produits, tarifs négociés par
          client, connexion à votre gestion de stock. Les chiffres
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
          pour moins cher. Le même arbitrage existe côté boutiques en
          ligne — garder le moteur d&apos;une plateforme ou construire le
          sien : notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">comparatif Shopify
          ou e-commerce sur mesure</Link> le chiffre sur 3 ans.
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
            ["Blog / média actif", "WordPress (ou headless si fort trafic)", "Autonomie éditoriale imbattable"],
            ["TPE locale, budget < 4 000 €", "WordPress à thème, 5 extensions max, maintenu", "Meilleur rapport résultat/prix à ce budget"],
            ["PME dont le site doit vendre", "Next.js sur mesure", "Vitesse jugée bonne par Google, référencement soigné, aucune extension à entretenir"],
            ["Corporate / marque à fort enjeu", "Next.js sur mesure", "Image, performance, sécurité, code possédé"],
            ["Boutique en ligne", "Shopify (simple) ou sur-mesure (marque, volumétrie)", "Voir le verdict e-commerce, section 11"],
            ["Éditorial fort trafic multicanal", "WordPress headless + Next.js", "Back-office connu + site public performant"],
            ["Application, espace client, logiciels de gestion (ERP/CRM)", "Sur-mesure — unanime", "WordPress est un CMS, pas un framework applicatif"],
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
          <Link href="/guides/cahier-des-charges-site-internet">modèle de
          cahier des charges</Link> est libre de copie — et comparez en coût
          sur 3 ans. Si vous voulez notre avis sur votre cas précis,{" "}
          <Link href="/demarrer-un-projet">décrivez votre projet en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées, gratuite,
          et nous vous dirons si WordPress suffit. Pour chiffrer les deux
          scénarios, nos guides du{" "}
          <Link href="/guides/combien-coute-un-site-internet">prix
          d&apos;un site internet</Link> et du{" "}
          <Link href="/guides/prix-site-e-commerce">prix d&apos;un site
          e-commerce</Link> donnent toutes les grilles — et notre méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link> garantit forfait et
          dates par contrat.
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
