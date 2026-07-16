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
  wordCount: 4200,
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
      "Quatre, chiffrables. La sécurité de l'écosystème : 11 334 vulnérabilités recensées en 2025 (+42 %), dont 91 % dans les plugins — d'où une maintenance obligatoire (500 à 2 000 €/an). La performance : dernier des grands CMS aux Core Web Vitals (~46 % de sites au vert contre 75 % pour Shopify). Le coût récurrent : licences premium (120 à 450 $/an) + maintenance à vie. Et la dépendance aux page builders, dont la mise en page n'est pas portable si vous voulez partir.",
  },
  {
    question: "Quelle est la meilleure alternative à WordPress ?",
    answer:
      "Cela dépend du besoin. Pour un site vitrine ou corporate orienté acquisition : un site sur mesure Next.js (statique, rapide, sans plugins à patcher). Pour vendre en ligne : Shopify (simple) ou du sur-mesure (volumétrie). Pour garder une édition de contenu confortable sans la dette WordPress : Next.js + un CMS headless (Sanity et Payload ont des plans gratuits suffisants pour un site vitrine). Webflow est une option intermédiaire, mais vous restez locataire d'un SaaS.",
  },
  {
    question: "Quand ne pas utiliser WordPress ?",
    answer:
      "Le consensus est unanime sur un cas : dès que le site devient applicatif — espace client, tableau de bord, devis en ligne, intégration ERP/CRM, temps réel — WordPress est un CMS, pas un framework d'application. Il est aussi déconseillé quand le site est votre canal d'acquisition principal et que chaque dixième de seconde compte, ou quand personne en interne ne veut assumer les mises à jour hebdomadaires de sécurité.",
  },
  {
    question: "WordPress est-il gratuit ?",
    answer:
      "Le logiciel, oui. Le site professionnel, non : création 1 500 à 15 000 € en France, hébergement managé 25 à 40 €/mois, licences premium courantes (constructeur de pages, cache, champs personnalisés : 120 à 450 $/an), et surtout maintenance de sécurité 500 à 2 000 €/an — rendue de facto obligatoire par le rythme des failles de plugins. « Gratuit » décrit la licence, pas le coût de possession.",
  },
  {
    question: "Peut-on combiner WordPress et Next.js ?",
    answer:
      "Oui — c'est le « WordPress headless » : vos équipes continuent de publier dans l'interface WordPress qu'elles connaissent, et un front Next.js sert les pages, rapide et sécurisé. C'est l'architecture choisie par TechCrunch, et celle de la migration documentée de Backlinko (site 3 fois plus rapide). Comptez 8 000 à 25 000 € selon le périmètre : pertinent pour les sites éditoriaux à fort trafic ou multicanaux, surdimensionné pour un simple site vitrine.",
  },
  {
    question: "Next.js remplace-t-il WordPress ?",
    answer:
      "Non, car ils ne jouent pas au même poste : WordPress est un CMS (il gère du contenu), Next.js est un framework (il construit des sites et applications sur mesure). La vraie question est organisationnelle : qui publie du contenu, à quelle fréquence, et quel est l'enjeu business du site ? Publication quotidienne par une équipe non technique → CMS. Site d'acquisition à fort enjeu ou application → sur-mesure, avec un CMS headless si besoin d'édition.",
  },
  {
    question: "Combien coûte un site Next.js par rapport à un site WordPress ?",
    answer:
      "À l'entrée, WordPress gagne : 800 à 5 000 € avec un thème contre 4 000 à 8 000 € et plus pour du Next.js sur mesure en agence (6 900 € chez Hagnéré Code, design et rédaction inclus). Sur 3 ans, l'écart fond : le WordPress professionnel cumule maintenance (500-2 000 €/an) et licences (120-450 $/an) là où un site statique Next.js coûte ~0-20 €/mois d'hébergement et n'a structurellement rien à patcher. Faites le calcul en coût total, pas en devis initial.",
  },
  {
    question: "Pourquoi mon site WordPress est-il lent ?",
    answer:
      "Structurellement : chaque page est reconstruite en PHP + base de données à chaque visite (seuls ~32 % des sites WordPress ont un bon temps de réponse serveur), et les thèmes/constructeurs de pages chargent des mégaoctets de scripts. Résultat mesuré : ~46 % des sites WordPress passent les Core Web Vitals, dernière place des grands CMS. Cache, CDN et optimisation d'images compensent en partie — c'est un travail (et un coût) récurrent qu'un site statique n'a pas.",
  },
  {
    question: "WordPress est-il sûr ?",
    answer:
      "Le cœur de WordPress, oui : 6 vulnérabilités seulement en 2025, toutes mineures. Le danger est l'écosystème : 91 % des 11 334 failles de 2025 viennent des plugins, la moitié des failles critiques sont exploitées dans les 24 h, et les défenses des hébergeurs ne bloquent qu'une minorité des attaques ciblées. Un WordPress à 5 plugins maintenu chaque semaine est raisonnablement sûr ; un WordPress à 40 plugins sans contrat de maintenance est une cible.",
  },
  {
    question: "Quel budget pour quitter WordPress sans perdre son référencement ?",
    answer:
      "Une migration vers un site sur mesure se chiffre comme une refonte : 60 à 80 % du prix d'une création équivalente, plus la migration des contenus et surtout le plan de redirections 301 page à page — c'est lui qui préserve vos positions Google. Pour un site vitrine : 6 900 à 22 000 € selon l'ampleur chez Hagnéré Code, redirections et suivi SEO post-migration inclus. Exigez ce plan dans tout devis : votre trafic acquis vaut plus que le site.",
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
        heroDescription="Le comparatif écrit pour les dirigeants, pas pour les développeurs : part de marché et premier déclin de WordPress, sécurité et performance sourcées (Patchstack, Core Web Vitals), coût total sur 3 ans décomposé, la crise de gouvernance 2024-2026 — et un verdict tranché par profil, y compris les cas où WordPress reste le bon choix."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "WordPress : 41 % du web, 1er déclin", description: "", color: "violet" },
          { number: "02", title: "11 334 failles plugins en 2025", description: "", color: "blue" },
          { number: "03", title: "TCO 3 ans : quasi égalité", description: "", color: "emerald" },
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
          <strong>Next.js / sur-mesure si</strong> le site est votre canal
          d&apos;acquisition (SEO, conversion), s&apos;il porte votre image à
          fort enjeu, ou dès qu&apos;il devient applicatif — espace client,
          devis, intégrations. Entre les deux, la 3e voie headless combine
          l&apos;édition WordPress et un front Next.js.
        </p>
        <GuideTable
          headers={["Votre profil", "Notre verdict", "Budget repère"]}
          rows={[
            ["Blog / média : contenu quotidien, équipe non technique", "WordPress, bien maintenu", "1 500 – 8 000 € + maintenance"],
            ["TPE locale : présence simple, budget serré", "WordPress ou builder, sans se sur-équiper", "800 – 4 000 €"],
            ["PME : le site doit générer des clients (SEO, conversion)", "Next.js sur mesure", "4 000 – 22 000 €"],
            ["Corporate à fort enjeu d'image et de performance", "Next.js sur mesure", "10 000 – 40 000 €"],
            ["Éditorial fort trafic / multicanal", "WordPress headless + Next.js", "8 000 – 25 000 €"],
            ["Application web, espace client, ERP/CRM", "Sur-mesure, unanime", "15 000 – 120 000 €"],
          ]}
        />

        <h2 id="de-quoi-parle-t-on">2. CMS, framework, sur-mesure : de quoi parle-t-on (sans jargon)</h2>
        <p>
          Première clarification, presque toujours escamotée :{" "}
          <strong>Next.js et WordPress ne jouent pas au même poste</strong>.
          WordPress est un CMS — un logiciel de gestion de contenu, livré
          avec son interface d&apos;administration et 61 000 extensions
          installables en un clic. Next.js est un framework — une fondation
          avec laquelle un développeur construit un site ou une application
          sur mesure. Comparer les deux, c&apos;est comparer une maison sur
          catalogue et un architecte : la maison sur catalogue est debout en
          trois semaines et ressemble à ses voisines ; l&apos;architecte
          coûte plus cher, dessine pour votre terrain, et le résultat vous
          appartient jusqu&apos;aux fondations. Aucun des deux n&apos;est
          « meilleur » dans l&apos;absolu — tout dépend de ce que vous
          construisez, et pour combien de temps.
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
          trois habituellement. Précision de méthode : selon la fenêtre de
          mesure retenue, certains observateurs lisent plutôt une
          stagnation qu&apos;un déclin — mais plus personne ne mesure de
          croissance, ce qui, pour un écosystème habitué à en gagner chaque
          année depuis quinze ans, est en soi l&apos;information.
        </p>
        <p>
          En face, l&apos;écosystème React/Next.js est devenu le standard des
          équipes produit : React est la bibliothèque front la plus utilisée
          au monde (~144 millions de téléchargements hebdomadaires sur npm),
          et Next.js son framework dominant — utilisé par 59 % des
          développeurs interrogés par l&apos;enquête State of JS 2025. Aucun
          des deux ne va disparaître. La question n&apos;est pas « qui va
          gagner » : c&apos;est « lequel sert votre objectif, à quel coût
          total ».
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
          l&apos;autre bout du spectre, nous livrons les mêmes fondations
          techniques à des PME de Savoie — c&apos;est l&apos;avantage
          d&apos;un standard ouvert : le socle de TF1 est accessible à une
          entreprise de 10 personnes.
        </p>

        <InfoBox variant="blue" title="Les limites honnêtes de Next.js">
          Pour que la comparaison tienne, disons aussi ce qui fâche. Le
          ticket d&apos;entrée est 2 à 5 fois plus élevé qu&apos;un
          WordPress à thème. Sans CMS branché, chaque modification de
          contenu passe par un développeur. Il n&apos;existe rien
          d&apos;équivalent aux 61 000 extensions WordPress : formulaire,
          multilingue ou réservation se développent ou s&apos;intègrent.
          Les développeurs eux-mêmes critiquent la complexité croissante du
          framework (State of JS 2025 : sentiment partagé, 21 % positif,
          17 % négatif). Quant à la dépendance à Vercel, son éditeur :
          réelle historiquement, elle s&apos;est fortement réduite —
          l&apos;auto-hébergement est officiellement supporté et le projet
          OpenNext (intégré au groupe de travail officiel en 2026) permet de
          déployer ailleurs. Pour un site vitrine exporté en statique, elle
          ne joue tout simplement pas.
        </InfoBox>

        <h2 id="performance">5. Performance mesurée : les Core Web Vitals réels</h2>
        <p>
          Les comparatifs concurrents citent des chiffres « typiques » jamais
          mesurés. Voici les données réelles, issues du terrain (HTTP
          Archive / CrUX, le panel de mesure de Google) :{" "}
          <strong>43 à 46 % des sites WordPress passent les Core Web
          Vitals sur mobile — la dernière place des grands CMS</strong>,
          derrière Duda (84 %), Shopify (75 %), Wix (71 %) et Squarespace
          (68 %), et sous la moyenne mondiale du web (48 %). La cause est
          structurelle : chaque page WordPress est reconstruite en PHP +
          MySQL à chaque visite (seuls ~32 % des sites WordPress ont un bon
          temps de réponse serveur), et les constructeurs de pages chargent
          des mégaoctets de scripts.
        </p>
        <p>
          Honnêteté d&apos;abord : la réactivité de WordPress est bonne
          (~86 % passent l&apos;INP) — son point faible est le chargement.
          Et il n&apos;existe pas d&apos;agrégat officiel récent pour
          Next.js (un agrégateur croisant CrUX et la détection de frameworks
          l&apos;estime autour de 68 % de sites au vert) : un framework
          moderne mal utilisé produit aussi des sites lents. L&apos;argument
          exact est celui-ci : <strong>un site statique sur mesure contrôle
          100 % de sa performance</strong> — HTML pré-généré servi depuis un
          CDN, zéro base de données à interroger — quand un WordPress doit
          compenser sa mécanique par des couches de cache. C&apos;est
          pourquoi nous garantissons contractuellement des Core Web Vitals
          au vert : sur ce socle, c&apos;est une exigence tenable, pas une
          promesse.
        </p>

        <h2 id="seo">6. Le match SEO : ce que Google dit vraiment</h2>
        <p>
          « WordPress est meilleur pour le SEO » est l&apos;idée reçue la
          plus répandue du marché — et Google lui-même l&apos;a démentie :
          John Mueller (Google Search) a précisé qu&apos;aucun CMS n&apos;est
          intrinsèquement favorisé, que Google ne traite aucune plateforme
          différemment, et que seul compte le résultat rendu — HTML, vitesse,
          contenu. Ce que WordPress a réellement pour lui : des plugins SEO
          matures qui balisent le terrain pour les non-techniciens. Ce que le
          sur-mesure a pour lui : le résultat, justement — HTML complet servi
          immédiatement à Googlebot, données structurées taillées sur mesure,
          Core Web Vitals au vert (un signal d&apos;expérience de page
          utilisé par Google), et aucune limite de plugin. Les cinq guides de
          ce site — dont celui que vous lisez — sont notre démonstration en
          production.
        </p>
        <p>
          Nouveau facteur 2026 : une part croissante des recherches obtient
          sa réponse dans les moteurs et assistants IA, qui lisent le HTML
          rendu et s&apos;appuient fortement sur les données structurées et
          la clarté du balisage. Là encore, aucun outil n&apos;est favorisé
          en soi — mais un site dont chaque page sort avec un HTML propre,
          des données structurées taillées à la main et un contenu
          immédiatement lisible part avec l&apos;avantage, quand un
          WordPress à constructeur de pages sert un balisage encombré
          qu&apos;il faudra nettoyer plugin par plugin.
        </p>

        <h2 id="securite">7. Sécurité : les chiffres que personne ne source</h2>
        <p>
          Les pages concurrentes recopient des chiffres invérifiables
          (« 30 000 sites piratés par jour ») sans jamais citer de source.
          Voici les données du rapport officiel Patchstack 2026, LA référence
          du secteur : <strong>11 334 nouvelles vulnérabilités recensées
          dans l&apos;écosystème WordPress en 2025 (+42 % sur un an), dont
          91 % dans les plugins</strong> et 9 % dans les thèmes. Le cœur de
          WordPress ? 6 failles seulement, toutes mineures. Le problème
          n&apos;est pas WordPress : c&apos;est la jungle d&apos;extensions
          qu&apos;on lui greffe.
        </p>
        <ul>
          <li>
            La moitié des failles à fort impact sont{" "}
            <strong>exploitées dans les 24 heures</strong> suivant leur
            divulgation (délai médian pondéré : 5 heures) — les attaques sont
            automatisées et massives.
          </li>
          <li>
            Les défenses standard des hébergeurs ne bloquent que{" "}
            <strong>12 à 26 % des attaques</strong> testées par Patchstack.
          </li>
          <li>
            Contre-intuitif : les plugins <em>payants</em> affichent 3 fois
            plus de vulnérabilités activement exploitées que les gratuits —
            payer une licence ne protège pas.
          </li>
        </ul>
        <p>
          Conséquence budgétaire directe : un WordPress professionnel sans
          contrat de maintenance hebdomadaire est une cible, pas un site. Ce
          contrat coûte 500 à 2 000 €/an — c&apos;est le poste qui change
          tout le calcul économique (section 9). Un site statique Next.js,
          lui, n&apos;expose <strong>ni CMS, ni plugins, ni base de
          données</strong> : la surface d&apos;attaque se réduit à presque
          rien, et la maintenance de sécurité avec.
        </p>

        <h2 id="gouvernance">8. La crise WordPress 2024-2026, expliquée aux dirigeants</h2>
        <p>
          Un facteur de risque que les comparatifs techniques ignorent :
          la gouvernance. Depuis fin 2024, Automattic (la société de Matt
          Mullenweg, cofondateur de WordPress) est en guerre juridique avec
          WP Engine, l&apos;un des plus gros hébergeurs WordPress. Épisodes
          documentés : blocage de l&apos;accès de WP Engine aux ressources
          de WordPress.org, prise de contrôle d&apos;un plugin tiers
          (ACF), puis <strong>injonction d&apos;un juge fédéral en décembre
          2025</strong> ordonnant de rétablir l&apos;accès — le procès est
          attendu fin 2026 ou début 2027. Dans l&apos;intervalle, Automattic
          a réduit ses contributions au projet open source de ~3 500 à 45
          heures/semaine (-99 %) début 2025, avant une reprise partielle ;
          la Linux Foundation a lancé le projet FAIR pour décentraliser la
          distribution des plugins.
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

        <h2 id="couts">9. Le vrai coût sur 3 ans, décomposé</h2>
        <p>
          Aucun concurrent ne publie de coût total décomposé — les
          fourchettes qui circulent se contredisent. Voici notre calcul,
          hypothèses affichées : <strong>site vitrine PME de 10-15 pages,
          orienté acquisition, réalisé en agence</strong>, tarifs France
          2026.
        </p>
        <GuideTable
          headers={["Poste sur 3 ans", "WordPress pro (agence)", "Next.js sur mesure"]}
          rows={[
            ["Création", "5 000 €", "6 900 €"],
            ["Hébergement", "1 080 € (managé ~30 €/mois)", "0 – 700 € (statique / CDN)"],
            ["Licences (builder, cache, champs…)", "600 € (~200 €/an)", "0 €"],
            ["Maintenance sécurité", "3 600 € (~100 €/mois, obligatoire)", "≈ 0 € (rien à patcher)"],
            ["Évolutions ponctuelles", "sur devis", "sur devis"],
            ["Total 36 mois", "≈ 10 300 €", "≈ 7 600 €"],
          ]}
        />
        <p>
          Lecture honnête. Un : à l&apos;entrée, WordPress est moins cher —
          et si votre budget plafonne à 3 000 €, un WordPress à thème bien
          fait bat un sur-mesure au rabais. Deux :{" "}
          <strong>sur 3 ans, la hiérarchie s&apos;inverse</strong> — la
          maintenance obligatoire et les licences récurrentes rattrapent puis
          dépassent l&apos;écart de création. Trois : le marché des
          prestataires joue pour WordPress (environ 10 fois plus
          d&apos;agences WordPress que Next.js en France, des devis faciles à
          obtenir) mais les taux journaliers se rejoignent — 300-400 €/j pour
          un profil WordPress, 420-550 €/j pour un React/Next.js confirmé —
          et un site sans dette de maintenance consomme moins de jours après
          la livraison. Le détail des grilles est dans notre guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d&apos;un site
          vitrine</Link>.
        </p>

        <h3>Le coût de sortie : qui possède quoi</h3>
        <p>
          Un poste que personne ne compare : le jour où vous voudrez
          partir. WordPress exporte nativement son contenu (articles, pages,
          catégories) dans un format standard — bon point. Mais la mise en
          page, elle, appartient au constructeur de pages : le HTML
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
          Aucun site sur mesure ne réplique cela gratuitement. Les réponses
          côté Next.js, par ordre de coût : <strong>contenu géré par
          l&apos;agence</strong> (adapté quand le site évolue quelques fois
          par an — c&apos;est inclus dans nos forfaits de maintenance) ;{" "}
          <strong>CMS headless</strong> branché sur le site (Sanity et
          Payload offrent des plans gratuits largement suffisants pour un
          site vitrine ; Strapi est open source) — votre équipe édite textes
          et images dans une interface moderne, le site reste statique et
          rapide ; ou <strong>WordPress conservé en back-office</strong>
          (section 12). Le bon choix dépend d&apos;une seule variable : votre
          fréquence réelle de publication. Soyez honnête avec vous-même —
          la moitié des blogs d&apos;entreprise n&apos;ont pas publié depuis
          un an, mais paient la maintenance du CMS qui les héberge.
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
            un écosystème de prestataires immense (10 fois plus
            d&apos;agences WordPress que Next.js en France : les devis
            arrivent vite et la concurrence tire les prix).
          </li>
          <li>
            <strong>L&apos;équipe déjà formée</strong> — si vos équipes
            maîtrisent WordPress et que le site actuel remplit son rôle,
            migrer pour migrer est une dépense, pas un investissement.
          </li>
        </ul>
        <p>
          La condition non négociable dans tous les cas : un contrat de
          maintenance sérieux et peu de plugins. Le WordPress dangereux
          n&apos;est pas WordPress — c&apos;est le site à 40 extensions que
          plus personne ne met à jour.
        </p>

        <h2 id="headless">12. La 3e voie : WordPress headless + Next.js</h2>
        <p>
          Pour les organisations éditoriales qui veulent la performance sans
          abandonner leur back-office : le <strong>WordPress
          headless</strong>. WordPress reste la salle de rédaction — vos
          équipes ne changent aucune habitude — et un front Next.js sert les
          pages : statique, rapide, à la surface d&apos;attaque minimale.
          C&apos;est l&apos;architecture de TechCrunch, et celle de la
          migration documentée de Backlinko, dont le site a chargé{" "}
          <strong>3 fois plus vite</strong> après le passage à un front
          Next.js. Le prix de ce meilleur-des-deux-mondes : 8 000 à 25 000 €
          selon le périmètre (deux systèmes à faire vivre, et les fonctions
          des plugins à reconstruire côté front). Pertinent pour un média,
          un site à fort trafic ou une marque multicanale ; surdimensionné
          pour un site vitrine de PME, où un CMS headless léger fait le même
          travail pour moins cher.
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
            ["TPE locale, budget < 4 000 €", "WordPress à thème, 5 plugins max, maintenu", "Meilleur rapport résultat/prix à ce budget"],
            ["PME dont le site doit vendre", "Next.js sur mesure", "CWV au vert, SEO technique, zéro dette de plugins"],
            ["Corporate / marque à fort enjeu", "Next.js sur mesure", "Image, performance, sécurité, code possédé"],
            ["Éditorial fort trafic multicanal", "WordPress headless + Next.js", "Back-office connu + front performant"],
            ["Application, espace client, ERP", "Sur-mesure — unanime", "WordPress est un CMS, pas un framework applicatif"],
          ]}
        />
        <InfoBox variant="amber" title="Le coût de se tromper">
          Se tromper de socle ne se paie pas le jour du choix, mais 18 mois
          plus tard. Dans un sens : le WordPress à thème choisi « pour
          aller vite » devient le canal d&apos;acquisition principal, et il
          faut refondre en urgence — migration, redirections 301, re-SEO,
          au prix fort. Dans l&apos;autre : le sur-mesure commandé « pour
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
          <a href="https://almanac.httparchive.org/en/2025/performance" target="_blank" rel="noopener noreferrer">HTTP Archive, Web Almanac 2025</a> ;{" "}
          <a href="https://www.searchenginejournal.com/googles-john-mueller-wordpress-not-inherently-better-for-seo/474737/" target="_blank" rel="noopener noreferrer">John Mueller (Google) sur WordPress et le SEO</a> ;{" "}
          <a href="https://2025.stateofjs.com/" target="_blank" rel="noopener noreferrer">State of JavaScript 2025</a> ;{" "}
          <a href="https://bejamas.com/hub/case-studies/backlinko-case-study" target="_blank" rel="noopener noreferrer">étude de cas Backlinko (WordPress headless + Next.js)</a> ;{" "}
          <a href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-fair-package-manager-project-for-open-source-content-management-system-stability" target="_blank" rel="noopener noreferrer">Linux Foundation, projet FAIR</a> ;
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
