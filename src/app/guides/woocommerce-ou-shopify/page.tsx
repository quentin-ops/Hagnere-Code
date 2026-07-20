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

const guide = getGuide("woocommerce-ou-shopify");

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
  wordCount: 4879,
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
      "E-commerce",
      "WooCommerce",
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
      name: "WooCommerce ou Shopify",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "WooCommerce est-il meilleur que Shopify ?",
    answer:
      "Ni l'un ni l'autre n'est « meilleur » dans l'absolu — ils incarnent deux logiques. Shopify est une location tout-en-un : hébergement, sécurité et mises à jour gérés, en échange d'un abonnement (25 à 289 €/mois), de commissions et d'un cadre imposé. WooCommerce est une propriété à entretenir : logiciel gratuit et liberté totale, en échange de la responsabilité complète — hébergement, extensions, sauvegardes, sécurité. Le bon choix dépend de votre profil : équipe, contenu éditorial, budget, besoin de contrôle. La grille de décision complète est en section 12 de ce guide. Et si l'expérience d'achat est votre avantage concurrentiel, la bonne réponse peut être aucun des deux : le sur-mesure — voir section 13.",
  },
  {
    question: "WooCommerce est-il entièrement gratuit ?",
    answer:
      "Le logiciel, oui — le projet, non. WooCommerce et ses passerelles de paiement officielles (Stripe, PayPal, PayPlug) sont des extensions gratuites. Mais une boutique réelle paie l'hébergement (84 € à plus de 1 200 €/an selon la gamme), souvent un thème premium (≈ 55 € une fois) et des extensions payantes selon les besoins — l'abonnement (248 €/an), la réservation (221 €/an), le multilingue (99 €), les points relais (79 €/an). Comptez environ 220 à 260 € la première année de fonctionnement pour une boutique simple auto-gérée — hors création et hors frais de paiement.",
  },
  {
    question: "Quels sont les coûts cachés d'une boutique WooCommerce ?",
    answer:
      "Quatre postes que le mot « gratuit » masque : les renouvellements d'extensions (les licences se paient chaque année) ; le piège du prix d'appel des hébergeurs (3,79 €/mois la première période chez certains… puis 16,99 €/mois au renouvellement, presque cinq fois plus) ; la maintenance, le vrai poste n°1 — 100 à 300 €/mois pour une boutique active, car les mises à jour se testent et la base de commandes se sauvegarde en continu ; et votre temps d'administration (2 à 4 h/mois en ordre de grandeur). C'est cette main-d'œuvre, pas les licences, qui rapproche le coût total de celui de Shopify.",
  },
  {
    question: "Est-ce que WooCommerce prélève une commission sur les ventes ?",
    answer:
      "Non — c'est sa différence structurelle avec Shopify. Sur WooCommerce, vous payez uniquement votre prestataire de paiement, au taux que vous négociez : Stripe facture 1,5 % + 0,25 € par transaction (cartes européennes), PayPlug Pro descend à 1,1 % + 0,25 € (avec 30 €/mois d'abonnement), et aucune commission de plateforme ne s'ajoute. Shopify facture les mêmes ordres de taux via Shopify Payments, mais ajoute une pénalité de 0,6 à 2 % si vous utilisez un autre prestataire. À 300 000 € de chiffre d'affaires, le libre choix du prestataire peut représenter plus de 1 000 € d'écart par an.",
  },
  {
    question: "Quelle plateforme est la plus intéressante pour le SEO ?",
    answer:
      "Structurellement, WooCommerce : les adresses de pages sont entièrement libres, le blog est celui de WordPress — la référence de l'édition de contenu — et les outils SEO complets existent en version gratuite. Shopify impose ses préfixes d'URL (/products/, /collections/), non modifiables, et son blog est plus limité. Mais la structure ne fait pas tout : la vitesse compte aussi pour Google, et là, les données réelles donnent l'avantage à Shopify (76 % des boutiques passent les seuils de vitesse contre 35 % côté WooCommerce — un écart d'hébergement plus que de plateforme, voir section 8). Un WooCommerce bien hébergé cumule les deux avantages.",
  },
  {
    question: "WooCommerce ou Shopify pour une petite PME qui démarre ?",
    answer:
      "La question décisive : avez-vous déjà un site WordPress qui vit ? Si oui — un site avec du contenu, une équipe habituée —, WooCommerce s'ajoute naturellement à l'existant et capitalise sur votre référencement. Si vous partez de zéro sans compétence technique et que la priorité est de vendre vite, Shopify est le chemin le plus court : boutique en ligne en quelques jours, aucune maintenance technique, pics de trafic absorbés. C'est le même verdict que notre comparatif Shopify ou sur-mesure : pour lancer vite un catalogue standard, la location tout-en-un est difficile à battre. Et si votre boutique est appelée à devenir le cœur de votre entreprise, chiffrez d'abord la troisième option (section 13) : une migration ultérieure est un projet complet, souvent plus coûteux que l'écart de départ.",
  },
  {
    question: "Quels sont les avantages de WooCommerce pour une PME déjà sous WordPress ?",
    answer:
      "Ils sont décisifs : votre équipe garde son outil (même interface, mêmes habitudes), votre contenu et votre référencement restent sur le même domaine — le blog qui vous amène du trafic devient directement vendeur —, vous choisissez librement hébergeur (français si vous y tenez), prestataire de paiement et prestataire tout court, et vous ne payez ni abonnement de plateforme ni commission sur les ventes. La contrepartie à budgéter honnêtement : la maintenance sérieuse (100 à 300 €/mois pour une boutique active) devient non négociable, car toute la responsabilité technique est chez vous.",
  },
  {
    question: "Peut-on commencer par Shopify et passer à WooCommerce ensuite ?",
    answer:
      "Oui, et l'inverse aussi — les deux migrations se pratiquent couramment. Le flux dominant va aujourd'hui de WooCommerce vers Shopify (environ 9 000 boutiques sur 90 jours au niveau mondial, contre environ 3 900 dans l'autre sens, données Store Leads 2026), souvent pour se délester de la maintenance. Le chemin inverse existe bel et bien, généralement motivé par la reprise de contrôle : coûts, données, contenu. Dans les deux cas, anticipez : exportez régulièrement vos données et gardez votre domaine et vos contenus à votre nom — la migration sera un projet, pas un sauvetage.",
  },
  {
    question: "Est-il facile de migrer d'une plateforme à l'autre ?",
    answer:
      "Les données principales (produits, clients, commandes) se transfèrent bien, par outils spécialisés (quelques dizaines à centaines d'euros) ou par prestataire. Ce qui ne se migre jamais : les mots de passe clients (chiffrements incompatibles — tous les comptes sont à réinitialiser), le thème (technologies incompatibles — le design se refait), les avis produits (réimport via outil tiers) et les réglages des extensions ou applications. Comptez 3 000 à 12 000 € pour une migration accompagnée simple en France, 8 000 à 20 000 € pour une boutique de moins de 500 produits, davantage avec un gros catalogue ou des connexions métier.",
  },
  {
    question: "Quel impact sur le SEO lors d'une migration ?",
    answer:
      "C'est un risque important qui se pilote sans pouvoir garantir les positions. Les adresses de pages changent mécaniquement (WooCommerce utilise /product/, Shopify impose /products/) : chaque ancienne adresse doit être redirigée vers sa nouvelle équivalente — le plan de redirections 301, systématique et page par page. Un inventaire complet, des redirections testées et une surveillance après mise en ligne réduisent les risques contrôlables ; une migration bâclée peut faire perdre du trafic. Le processus complet, ses prix et ses pièges sont dans notre guide du prix d'une refonte — il s'applique intégralement à un changement de plateforme e-commerce.",
  },
  {
    question: "Comment se comparent les coûts réels sur la durée ?",
    answer:
      "Sur trois ans, pour une boutique de PME équipée : côté WooCommerce, comptez environ 2 400 à 5 100 €/an de fonctionnement (hébergement sérieux, licences, maintenance déléguée) plus la création (5 000 à 15 000 €) ; côté Shopify, environ 2 600 à 5 600 €/an à volume équivalent (abonnement Grow et applications — frais de carte exclus des deux côtés, ils se paient à taux voisins) plus la création (1 500 à 5 000 € en freelance, 8 000 à 30 000 € en agence). Les deux convergent plus qu'on ne le croit : ce que Shopify facture en abonnement et applications, WooCommerce le facture en maintenance et licences. La vraie différence est ailleurs : qui contrôle, et qui est responsable.",
  },
  {
    question: "Peut-on faire du dropshipping avec WooCommerce ?",
    answer:
      "Techniquement oui — des extensions dédiées existent, comme les applications équivalentes chez Shopify. Notre avis honnête, déjà donné dans notre guide des prix e-commerce : le dropshipping (vendre sans stock, expédié par le fournisseur) est un modèle de test de marché, rarement un modèle durable — marges laminées, dépendance aux fournisseurs, budget publicitaire qui absorbe tout. Si vous voulez tester, Shopify est l'outil le plus rapide pour ça ; si vous construisez une vraie marque avec du stock et du contenu, la question WooCommerce ou Shopify se pose dans les termes de ce guide.",
  },
  {
    question: "Quand faut-il passer au sur-mesure plutôt que choisir entre les deux ?",
    answer:
      "Dès que la boutique est le cœur de votre entreprise, et pas seulement quand votre façon de vendre sort des cases : logique de vente spécifique (configurateur, tarification dynamique, abonnements complexes, B2B avec grilles par client), très gros volumes, intégrations profondes avec votre système de gestion, ou expérience d'achat qui EST votre avantage concurrentiel. Les seuils publiés par les agences convergeaient historiquement vers 25 000-80 000 € ; ils ont nettement baissé — notre grille démarre à 15 000 €. Le sur-mesure se justifie par le métier et par l'ambition, pas par la mode. Notre comparatif Shopify ou e-commerce sur mesure chiffre précisément cette bascule.",
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
          { label: "WooCommerce ou Shopify" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les coûts réels des deux côtés — extensions en euros, hébergement, commissions, maintenance —, la vitesse mesurée sur données publiques réelles, la sécurité et ses responsabilités, la migration chiffrée dans les deux sens, et un verdict par profil, rendu sans affiliation ni commission d'aucune plateforme."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Woo : 47 % du parc français", description: "", color: "violet" },
          { number: "02", title: "Shopify : 49 % des créations", description: "", color: "blue" },
          { number: "03", title: "Vitesse mesurée : 76 % vs 35 %", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/shopify-ou-sur-mesure", label: "Shopify ou sur-mesure ?" },
          { href: "/guides/prix-site-e-commerce", label: "Prix d'un site e-commerce" },
          { href: "/guides/cout-maintenance-site-internet", label: "Coût de la maintenance" },
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte de site" },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="WooCommerce ou Shopify : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Dix pages de comparatifs, dix conclusions — chacune alignée
          sur ce que son auteur vend : thèmes WooCommerce, hébergement,
          commissions d&apos;affiliation Shopify. Ce guide est écrit par
          une agence qui <strong>ne touche aucune commission
          d&apos;aucune des deux plateformes — zéro affiliation, zéro
          licence revendue</strong> : les coûts des deux côtés en euros
          vérifiés, la vitesse mesurée sur données publiques, et un
          verdict par profil — y compris quand la bonne réponse
          n&apos;est aucun des deux.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Le verdict en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. Deux logiques, pas deux logiciels" },
            { id: "marche-francais", label: "3. Le paradoxe français : trois lectures, trois vainqueurs" },
            { id: "cout-shopify", label: "4. Ce que coûte vraiment Shopify (rappel chiffré)" },
            { id: "cout-woocommerce", label: "5. Ce que « gratuit » veut dire : le vrai coût de WooCommerce" },
            { id: "paiement", label: "6. Frais de paiement : l'avantage caché de WooCommerce" },
            { id: "trois-profils", label: "7. Le coût total comparé, à volume égal" },
            { id: "performance", label: "8. La vitesse, mesurée sur données réelles" },
            { id: "securite", label: "9. Sécurité : qui est responsable de quoi" },
            { id: "seo", label: "10. SEO et contenu : adresses libres contre cadre imposé" },
            { id: "migration", label: "11. Changer d'avis : le coût réel d'une migration" },
            { id: "verdict-par-profil", label: "12. La grille de décision finale, profil par profil" },
            { id: "troisieme-option", label: "13. Quand ni l'un ni l'autre : la troisième option" },
            { id: "methode", label: "14. Méthode : choisir en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. Le verdict en 30 secondes</h2>
        <p>
          En 2026, <strong>Shopify est le chemin le plus court pour
          vendre vite sans équipe technique</strong> : boutique en ligne
          en quelques jours, hébergement et sécurité gérés, pour 25 à
          289 €/mois d&apos;abonnement plus commissions et
          applications. <strong>WooCommerce est le choix du contrôle et
          du contenu</strong> : logiciel gratuit sur votre WordPress,
          liberté totale (adresses, prestataire de paiement, données),
          zéro commission de plateforme — en échange de la
          responsabilité technique complète, soit{" "}
          <strong>100 à 300 €/mois de maintenance sérieuse</strong> pour
          une boutique active. À volume égal, les coûts totaux
          convergent : la vraie différence est ce que vous voulez
          contrôler, et ce dont vous voulez être déchargé. Troisième
          option devenue crédible en 2026 : le développement assisté par
          IA (Claude Code) a fait baisser le coût du sur-mesure — notre
          grille e-commerce démarre à 15 000 €, dans la fourchette
          d&apos;une création Shopify en agence (8 000 à 30 000 €). Dès
          que la boutique est appelée à devenir le cœur de
          l&apos;entreprise, chiffrez cette option avant de trancher
          (section 13).
        </p>
        <GuideTable
          headers={["Votre situation", "Notre verdict", "Pourquoi"]}
          rows={[
            ["Lancement rapide, pas d'équipe technique", "Shopify", "En ligne en quelques jours, zéro maintenance technique"],
            ["Site WordPress existant, stratégie de contenu", "WooCommerce", "Le blog qui vous amène du trafic devient vendeur, même domaine"],
            ["Contrôle total : données, hébergement FR, coûts", "WooCommerce", "Open source, zéro commission, prestataires libres"],
            ["Priorité à la vitesse sans effort", "Shopify", "76 % des boutiques passent les seuils de vitesse Google, contre 35 % (mesuré, section 8)"],
            ["Boutique cœur d'entreprise (image, conversion, durée) ou logique de vente hors standard", "Sur-mesure (React/Next.js) — à chiffrer en face avant de trancher", "Longtemps hors budget, désormais chiffrable — seuils et budgets en section 13"],
          ]}
        />

        <InfoBox variant="blue" title="Les 11 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>WooCommerce</strong> : l&apos;extension gratuite qui transforme un site WordPress en boutique — vous « possédez » la boutique.</li>
            <li><strong>Shopify</strong> : la plateforme e-commerce louée par abonnement — vous « louez » une boutique clé en main.</li>
            <li><strong>CMS</strong> : le logiciel qui gère le contenu d&apos;un site (WordPress est le plus répandu, 43 % du web).</li>
            <li><strong>Extension / app</strong> : un module qui ajoute une fonction — licence annuelle chez WooCommerce, abonnement mensuel chez Shopify.</li>
            <li><strong>Hébergement</strong> : la location du serveur — à votre charge chez WooCommerce, incluse chez Shopify.</li>
            <li><strong>Hébergement infogéré</strong> : un hébergement haut de gamme où le prestataire surveille et optimise pour vous.</li>
            <li><strong>PSP</strong> : le prestataire qui encaisse les paiements par carte (Stripe, PayPlug…) — libre chez WooCommerce, encadré chez Shopify.</li>
            <li><strong>Commission de plateforme</strong> : le pourcentage prélevé par Shopify en plus des frais de carte si vous n&apos;utilisez pas son système maison — inexistant chez WooCommerce.</li>
            <li><strong>Core Web Vitals</strong> : les mesures de vitesse et de stabilité que Google utilise comme « contrôle technique » des sites.</li>
            <li><strong>SEO</strong> : le référencement naturel — tout ce qui fait que Google vous affiche gratuitement dans ses résultats.</li>
            <li><strong>Redirection 301</strong> : le renvoi automatique d&apos;une ancienne adresse de page vers la nouvelle — le geste qui sauve le référencement en cas de migration.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Deux logiques, pas deux logiciels</h2>
        <p>
          Comparer WooCommerce et Shopify fonctionnalité par
          fonctionnalité passe à côté de l&apos;essentiel : ce sont
          deux <strong>modèles économiques</strong>.{" "}
          <strong>Shopify est une location meublée</strong> : on
          emménage vite, tout fonctionne, le propriétaire entretient —
          et on paie un loyer, des commissions, et on ne pousse pas les
          murs. <strong>WooCommerce est une propriété</strong> : le
          logiciel ne coûte rien, tout est modifiable, tout vous
          appartient — et tout est à entretenir, assurer et réparer par
          vous ou votre prestataire. Aucun des deux n&apos;est
          « gratuit » ni « meilleur » : ils déplacent la dépense et la
          responsabilité à des endroits différents.
        </p>
        <p>
          Fil rouge de ce guide : <strong>scénario fictif composite —
          ni client ni témoignage réel — avec Les Toiles du Lac, marque de
          sacs en toile recyclée à Aix-les-Bains</strong>. Deux
          associées auraient un site WordPress qui existe déjà — un blog
          d&apos;atelier suivi, de bonnes positions Google sur
          « sac cabas toile recyclée » — et une gamme de 40 produits
          prête à vendre. Leur hésitation est exactement celle de ce
          guide : brancher la boutique sur le WordPress qui marche
          (WooCommerce), ou ouvrir une boutique clé en main à côté
          (Shopify) ? Nous allons chiffrer les deux chemins.
        </p>

        <h2 id="marche-francais">3. Le paradoxe français : trois lectures, trois vainqueurs</h2>
        <p>
          Qui « gagne » en France ? Tout dépend de ce qu&apos;on
          compte — et c&apos;est le paradoxe qu&apos;aucun des
          comparatifs que nous avons analysés ne montre, faute de
          croiser les sources :
        </p>
        <GuideTable
          headers={["La question posée", "Le vainqueur", "Le chiffre (source)"]}
          rows={[
            ["Qui équipe le plus de boutiques ?", "WooCommerce", "47,4 % du parc français (baromètre Friends of Presta 2026, 125 000 domaines analysés)"],
            ["Qui attire les nouveaux marchands ?", "Shopify", "48,8 % des boutiques françaises créées en 2025 (étude ShopRank)"],
            ["Qui encaisse le plus de chiffre d'affaires ?", "PrestaShop (plateforme française, installée chez soi comme WooCommerce, forte chez les marchands établis)", "7,96 Md€ cumulés, devant Shopify (5,76) et WooCommerce (4,79)"],
          ]}
        />
        <p>
          Lecture pour votre décision : <strong>WooCommerce domine la
          longue traîne</strong> — une multitude de boutiques, souvent
          petites, adossées à des sites WordPress existants.{" "}
          <strong>Shopify rafle les lancements</strong> — près d&apos;une
          création sur deux — grâce à sa simplicité.{" "}
          Et les boutiques qui pèsent le plus lourd tournent
          majoritairement sur des plateformes qu&apos;elles contrôlent
          davantage. Au niveau mondial, même image : WooCommerce est le
          système e-commerce le plus déployé du web (8,2 % de tous les
          sites, contre 5,3 % pour Shopify — W3Techs, juillet 2026),
          mais la hiérarchie s&apos;inverse sur les gros sites (top
          million : Shopify 14,7 %, WooCommerce 8,7 %). Aucun des deux
          n&apos;est un choix marginal : si vous restez sur une
          plateforme, vous choisissez entre deux standards.
        </p>

        <h2 id="cout-shopify">4. Ce que coûte vraiment Shopify (rappel chiffré)</h2>
        <p>
          Les tarifs officiels France, vérifiés à la source en juillet
          2026 — précision utile, car une bonne partie des comparatifs
          français affichent encore des grilles périmées ou des tarifs
          américains en dollars : <strong>Basic 25 €/mois, Grow
          66 €/mois, Advanced 289 €/mois</strong> en facturation
          annuelle (36/105/384 € en mensuel), Shopify Plus dès
          2 100 €/mois. S&apos;y ajoutent{" "}
          <strong>les commissions</strong> — 1,5 à 1,1 % + 0,25 € par
          transaction avec Shopify Payments, plus une{" "}
          <strong>pénalité de 0,6 à 2 %</strong> si vous préférez un
          autre prestataire de paiement —, <strong>les
          applications</strong> (100 à 400 €/mois pour une boutique
          équipée) et la création si vous déléguez (1 500 à 5 000 € en
          freelance, 8 000 à 30 000 € en agence). Le coût réel tout
          compris va d&apos;environ <strong>90 €/mois pour un créateur
          qui démarre à 4 100 €/mois pour une marque établie</strong>.
          N&apos;oubliez pas le risque fournisseur : en louant, vous
          acceptez que le bailleur fixe le loyer — Shopify a augmenté
          ses forfaits standards de 33 % en moyenne en 2023, après
          douze ans de stabilité, quand un WooCommerce ne subit que
          les hausses de ses briques (hébergement, licences),
          négociables une à une.
          Le détail complet — profils chiffrés, historique des hausses,
          coût de sortie — est dans notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">comparatif
          Shopify ou sur-mesure</Link> ; ici, retenons ces ordres de
          grandeur pour le face-à-face.
        </p>

        <h2 id="cout-woocommerce">5. Ce que « gratuit » veut dire : le vrai coût de WooCommerce</h2>
        <p>
          WooCommerce ne coûte rien en licence — et les passerelles de
          paiement officielles (Stripe, PayPal, PayPlug) sont des
          extensions gratuites. Voici ce qu&apos;une boutique française
          paie réellement, prix officiels relevés en euros en juillet
          2026 :
        </p>
        <GuideTable
          headers={["Poste", "Prix réel 2026", "Remarque"]}
          rows={[
            ["Hébergement mutualisé sérieux (votre site partage un serveur avec d'autres — l'entrée de gamme)", "84 – 288 € HT/an", "o2switch : 7 à 24 € HT/mois selon formule"],
            ["Hébergement infogéré (boutique active)", "324 – 1 260 €/an", "WP Engine dès 27 €/mois, Kinsta dès ~30 $/mois"],
            ["Thème premium", "≈ 55 € une fois", "Woodmart 59 $, leader des thèmes e-commerce"],
            ["Vente par abonnement (Subscriptions)", "248 €/an", "Prix officiel woocommerce.com en euros"],
            ["Réservations (Bookings)", "221 €/an", "Idem — les licences se renouvellent chaque année"],
            ["Multilingue (WPML)", "99 € la 1re année", "Le plan CMS, recommandé pour une boutique"],
            ["Points relais Mondial Relay", "79 € TTC/an", "Colissimo officiel : gratuit (contrat La Poste requis)"],
            ["Facturation conforme (Factur-X)", "0 € (version Plus ≈ 89 €/an)", "Un atout pour l'échéance de facturation électronique"],
            ["Sauvegardes + sécurité premium", "≈ 220 €/an", "UpdraftPlus 84 $ + Wordfence Premium ≈ 149 $"],
          ]}
        />
        <p>
          Trois honnêtetés de lecture. D&apos;abord, une boutique
          simple auto-gérée s&apos;en sort vraiment pour{" "}
          <strong>environ 220 à 260 € la première année</strong> de
          fonctionnement (hébergement mutualisé, thème, versions
          gratuites partout) — le « gratuit » n&apos;est pas un mythe
          au démarrage. Ensuite, <strong>méfiez-vous des prix
          d&apos;appel des hébergeurs</strong> : les 3,79 €/mois
          affichés avec engagement de 4 ans deviennent 16,99 €/mois au
          renouvellement — presque cinq fois plus. Enfin, le vrai poste
          n&apos;est aucune de ces lignes : c&apos;est{" "}
          <strong>la maintenance</strong>. Une boutique WooCommerce
          active exige des mises à jour testées, des sauvegardes
          fréquentes de la base de commandes et un gel des mises à jour
          avant les pics de vente : comptez{" "}
          <strong>100 à 300 €/mois</strong> en délégation sérieuse —
          notre <Link href="/guides/cout-maintenance-site-internet">guide
          du coût de la maintenance</Link> détaille ce poste et ses
          contrats.
        </p>

        <h2 id="paiement">6. Frais de paiement : l&apos;avantage caché de WooCommerce</h2>
        <p>
          C&apos;est le point le plus mal traité des comparatifs, et
          l&apos;un des plus chiffrables. Sur WooCommerce,{" "}
          <strong>vous choisissez librement votre prestataire de
          paiement, sans commission de plateforme</strong> — les taux
          France 2026, relevés sur les grilles officielles : Stripe
          1,5 % + 0,25 € (cartes européennes), PayPlug Pro{" "}
          <strong>1,1 % + 0,25 €</strong> (30 €/mois d&apos;abonnement,
          pour 100 k€ à 1 M€ de CA), Mollie dès ≈ 1,2 % + 0,25 €,
          PayPal 2,9 % + 0,35 € — le moyen « rassurant » est aussi le
          plus cher. Chez Shopify, les taux de Shopify Payments sont
          comparables (1,5 à 1,1 % + 0,25 €)… mais le libre choix se
          paie : <strong>0,6 à 2 % de pénalité</strong> sur chaque
          vente si vous passez par un prestataire externe. Traduction
          pour le scénario Les Toiles du Lac à terme (hypothèse : 300 000 € de CA) :
          avec PayPlug Pro à 1,1 % au lieu de 1,5 %, l&apos;écart
          représente environ <strong>1 200 € par an — soit ≈ 840 €
          net une fois déduit l&apos;abonnement PayPlug de
          30 €/mois</strong> : de quoi financer une bonne partie de la
          maintenance. La règle :{" "}
          <strong>plus votre volume grandit, plus la liberté de
          négocier son prestataire de paiement vaut cher</strong>.
        </p>

        <h2 id="trois-profils">7. Le coût total comparé, à volume égal</h2>
        <p>
          Le face-à-face que les comparatifs esquivent — mêmes profils,
          tous les postes, hypothèses affichées (frais de carte exclus :
          ils se paient des deux côtés, à taux voisins) :
        </p>
        <GuideTable
          headers={["Profil", "WooCommerce (fonctionnement/an)", "Shopify (fonctionnement/an)"]}
          rows={[
            ["Démarrage (< 50 produits, auto-géré)", "≈ 220 – 260 € + votre temps (2-4 h/mois)", "≈ 300 – 700 € (Basic annuel + apps légères)"],
            ["PME équipée (abonnements, multilingue, maintenance déléguée)", "≈ 2 400 – 5 100 €", "≈ 2 600 – 5 600 € (Grow + apps 150-400 €/mois)"],
            ["Boutique à fort trafic (infogéré premium + maintenance déléguée sous contrat, dite « TMA »)", "≈ 6 000 – 8 500 €+", "≈ 9 500 – 15 500 € (Advanced 3 468 €/an + apps 500 – 1 000 €/mois)"],
            ["Création par prestataire (une fois)", "5 000 – 15 000 € (freelance) à 30 000 € (agence)", "1 500 – 5 000 € (freelance) à 30 000 € (agence)"],
          ]}
        />
        <p>
          Incarnons avec notre fil rouge, à volume de démarrage :
        </p>
        <InfoBox variant="blue" title="Le calcul simulé des Toiles du Lac, première année">
          <strong>Chemin WooCommerce</strong> — leur WordPress existe
          déjà : ajout de la boutique par un freelance (2 500 à
          4 000 €), hébergement sérieux déjà payé, thème e-commerce
          ≈ 55 €, points relais Mondial Relay 79 €, maintenance
          déléguée 100 €/mois. Première année :{" "}
          <strong>≈ 4 000 à 5 500 €</strong>, puis ≈ 1 300 €/an.{" "}
          <strong>Chemin Shopify</strong> — boutique neuve sur thème :
          création 2 000 à 3 000 €, abonnement Basic 300 €/an,
          quelques applications ≈ 600 €/an. Première année :{" "}
          <strong>≈ 2 900 à 3 900 €</strong>, puis ≈ 900 à 1 200 €/an —
          mais un second site à faire vivre à côté du blog qui leur
          amène leurs clientes, et des frais de paiement non
          négociables : la pénalité de la section 6 verrouille le
          prestataire à vie. L&apos;écart financier est faible ; le
          vrai critère est ailleurs : leur trafic est sur WordPress.
        </InfoBox>
        <p>
          La conclusion mérite d&apos;être dite contre les deux camps :{" "}
          <strong>à volume égal et à sérieux égal, les coûts totaux
          convergent</strong>. Ce que Shopify facture en abonnement et
          applications, WooCommerce le facture en hébergement, licences
          et surtout maintenance humaine — le poste que les comparatifs
          pro-WooCommerce que nous avons lus omettent pour afficher un
          « coût total de possession » (le fameux TCO) imbattable, en
          oubliant simplement les postes qui dérangent. L&apos;écart
          réel se joue sur trois curseurs : votre temps (Shopify en
          demande moins), votre volume de paiements (WooCommerce
          négocie mieux, section 6), et la valeur que vous accordez au
          contrôle (sections 9 et 10).
        </p>

        <GuideInlineCTA
          title="Votre boutique relève-t-elle de WooCommerce, de Shopify — ou d'aucun des deux ?"
          description="Décrivez votre projet en 3 minutes : nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti, avec un avis franc et argumenté — nous ne vendons ni thèmes, ni apps, ni hébergement. Nous recommandons encore une plateforme là où elle reste imbattable (micro-budget, test de marché ou side-project, vente en caisse physique, WordPress vivant dont le contenu est l'actif), et le sur-mesure quand la boutique est le cœur de l'entreprise."
          tags={["Objectif : prochain jour ouvré", "Avis indépendant : aucune plateforme à vendre", "E-commerce 15 000 – 120 000 €"]}
        />

        <h2 id="performance">8. La vitesse, mesurée sur données réelles</h2>
        <p>
          Ici, pas d&apos;opinions : des mesures publiques. Le Web
          Almanac 2025 de HTTP Archive — l&apos;observatoire de
          référence du web, sur données réelles d&apos;utilisateurs
          Chrome — donne, sur mobile :{" "}
          <strong>76 % des boutiques Shopify passent les trois Core
          Web Vitals de Google, contre 35 % des boutiques
          WooCommerce</strong>. L&apos;écart est massif, mais sa
          lecture fine change la conclusion : il se concentre presque
          entièrement sur le temps de chargement initial (86 % de
          « bon » chez Shopify contre 39 % chez WooCommerce), tandis
          que l&apos;interactivité et la stabilité visuelle sont quasi
          égales (90 % contre 88 %, 92 % contre 85 %).
        </p>
        <p>
          Traduction : <strong>ce n&apos;est pas le logiciel
          WooCommerce qui est lent, c&apos;est l&apos;hébergement
          moyen sur lequel il tourne</strong>. Shopify impose à tous
          ses marchands une infrastructure rapide (serveurs, cache —
          la mémoire qui ressert instantanément les pages déjà
          préparées —, réseau de diffusion mondial) ; WooCommerce
          hérite de
          l&apos;hébergement que chacun a choisi — souvent le
          mutualisé d&apos;entrée de gamme. Un WooCommerce sur
          hébergement sérieux, avec cache et extensions maîtrisées,
          rejoint les meilleurs scores. La règle honnête :{" "}
          <strong>Shopify est rapide par défaut ; WooCommerce est
          rapide si l&apos;on sait le faire</strong> — et ce
          savoir-faire, c&apos;est précisément ce que paie la ligne
          hébergement + maintenance de la section 5.
        </p>

        <h2 id="securite">9. Sécurité : qui est responsable de quoi</h2>
        <p>
          Le sujet est traité par slogans partout (« WordPress se fait
          pirater », « Shopify est sûr ») — voici les faits, et
          surtout la question que personne ne pose : <strong>qui
          porte la responsabilité ?</strong> Côté WooCommerce :
          11 334 vulnérabilités recensées dans l&apos;écosystème
          WordPress en 2025 (+42 %), dont 91 % dans les extensions —
          le cœur du logiciel est quasi irréprochable (6 failles
          mineures), mais chaque extension ajoutée est une porte à
          surveiller, et les attaques sont industrielles (54 milliards
          de requêtes malveillantes bloquées par un seul éditeur de
          sécurité en 2024). Côté Shopify : la plateforme est
          certifiée au plus haut niveau bancaire (PCI DSS niveau 1),
          l&apos;infrastructure est gérée — et les incidents existent
          aussi, différents : un vol de données interne par deux
          employés en 2020, des pannes globales (dont un Cyber Monday
          2025) où <strong>aucun marchand ne peut rien faire
          qu&apos;attendre</strong>.
        </p>
        <GuideTable
          headers={["Qui est responsable de…", "WooCommerce", "Shopify"]}
          rows={[
            ["Serveurs, réseau, disponibilité", "Vous (via votre hébergeur)", "Shopify"],
            ["Mises à jour du logiciel de base", "Vous (ou votre mainteneur)", "Shopify"],
            ["Extensions / apps installées", "Vous", "Vous"],
            ["Conformité paiement (PCI DSS)", "Vous (selon votre intégration)", "Shopify (tunnel de paiement certifié niveau 1)"],
            ["Sauvegardes", "Vous", "Shopify (plateforme) — vos données d'apps : vous"],
            ["Accès, comptes, mots de passe équipe", "Vous", "Vous"],
          ]}
        />
        <p>
          Un mot sur la ligne la plus sensible du tableau, la
          conformité paiement : la norme bancaire PCI DSS encadre
          quiconque accepte la carte. Chez Shopify, le tunnel de
          paiement est certifié au niveau le plus élevé — vous
          n&apos;y pensez jamais. Chez WooCommerce, la documentation
          officielle est claire : <strong>la responsabilité de
          conformité incombe au marchand</strong> — en pratique, elle
          se règle en utilisant une passerelle sérieuse (Stripe,
          PayPlug) qui héberge la saisie de carte, mais c&apos;est à
          vous (ou votre prestataire) de le vérifier, personne ne le
          fera à votre place. C&apos;est le vrai résumé du chapitre
          sécurité :{" "}
          <strong>chez Shopify, vous déléguez la responsabilité (et la
          maîtrise) ; chez WooCommerce, vous la portez (et la
          contrôlez)</strong>. Aucun des deux modèles n&apos;est
          « sans risque » — ils répartissent le risque différemment.
          Un WooCommerce sans mainteneur sérieux est objectivement
          dangereux ; un Shopify vous rend spectateur des pannes de la
          plateforme. Choisissez en connaissance de cause.
        </p>

        <h2 id="seo">10. SEO et contenu : adresses libres contre cadre imposé</h2>
        <p>
          Pour le scénario Les Toiles du Lac — dont le blog d&apos;atelier
          amènerait l&apos;essentiel du trafic —, ce chapitre pèse lourd.
          Structurellement, <strong>WooCommerce part avec
          l&apos;avantage</strong> : les adresses de pages sont
          entièrement libres (vous pouvez construire
          /sacs/cabas/cabas-terracotta), le blog est celui de
          WordPress — l&apos;outil d&apos;édition de référence du
          web — et les outils SEO complets existent en version
          gratuite. <strong>Shopify impose son cadre</strong> : les
          préfixes /products/, /collections/, /pages/ et /blogs/ sont
          codés en dur et non modifiables — seul le dernier segment
          vous appartient — et son blog reste limité pour une vraie
          stratégie éditoriale. Ajoutez le facteur vitesse de la
          section 8 (qui compte pour Google, dans les deux sens) et la
          conclusion honnête s&apos;écrit : pour une marque dont le
          contenu est le moteur d&apos;acquisition, WooCommerce sur un
          bon hébergement est difficile à battre ; pour un catalogue
          qui vit surtout de publicité et de réseaux sociaux, le cadre
          imposé de Shopify ne coûte presque rien en pratique.
        </p>

        <h2 id="migration">11. Changer d&apos;avis : le coût réel d&apos;une migration</h2>
        <p>
          Aucune page française que nous avons analysée ne chiffre ce
          sujet, alors faisons-le. D&apos;abord
          le sens du vent, mesuré : sur 90 jours en 2026,{" "}
          <strong>environ 9 000 boutiques dans le monde ont quitté
          WooCommerce pour Shopify, et environ 3 900 ont fait le chemin
          inverse</strong> (données Store Leads). Le flux dominant va
          vers la simplicité — se délester de la maintenance — mais le
          chemin retour existe bel et bien, motivé par la reprise de
          contrôle des coûts et des données. Les budgets France :
        </p>
        <GuideTable
          headers={["Scénario de migration", "Budget réaliste", "Ce qui est inclus"]}
          rows={[
            ["Outil automatisé seul (petite boutique)", "70 – 200 €", "Transfert des données brutes — ni design ni réglages"],
            ["Migration accompagnée simple", "3 000 – 12 000 €", "Données + thème refait + redirections de base"],
            ["Boutique < 500 produits, sans connexion métier", "8 000 – 20 000 €", "Migration complète, plan de redirections 301, suivi 30 jours"],
            ["Projet complexe (gros catalogue, connexion au logiciel de gestion — l'ERP —, vente aux professionnels)", "25 000 – 80 000 €", "Un changement complet de plateforme, comparable à une refonte — à ce budget, chiffrez aussi le sur-mesure (section 13)"],
          ]}
        />
        <p>
          Et la liste de ce qui <strong>ne se migre jamais</strong>,
          quel que soit le sens : les mots de passe clients
          (chiffrements incompatibles — tous les comptes se
          réinitialisent), le thème (technologies incompatibles — le
          design se refait), les avis produits (réimport par outil
          tiers) et les réglages d&apos;extensions ou
          d&apos;applications. Enfin, toutes les adresses changent
          (/product/ devient /products/, ou l&apos;inverse) : le{" "}
          <strong>plan de redirections 301 page par page est
          obligatoire</strong>, sous peine de perdre le référencement
          acquis — le processus complet est dans notre{" "}
          <Link href="/guides/prix-refonte-site-internet">guide du
          prix d&apos;une refonte</Link>, il s&apos;applique
          intégralement ici. Et quelle que soit la plateforme choisie
          aujourd&apos;hui, prenez la même assurance : des exports
          réguliers de vos produits, clients et commandes, un nom de
          domaine et des contenus à votre nom, et une liste tenue à
          jour de vos applications et réglages. Une migration
          préparée est un projet ; une migration improvisée est un
          sauvetage. Moralité : on peut changer d&apos;avis,
          mais ça se budgète — choisir correctement au départ vaut
          quelques milliers d&apos;euros.
        </p>

        <h2 id="verdict-par-profil">12. La grille de décision finale, profil par profil</h2>
        <GuideTable
          headers={["Votre profil", "Verdict", "Pourquoi"]}
          rows={[
            ["Créateur pressé, aucun bagage technique, catalogue standard", "Shopify", "Le chemin le plus court vers la première vente"],
            ["Site WordPress vivant, contenu = moteur d'acquisition", "WooCommerce", "Un seul domaine, le blog devient vendeur, SEO libre"],
            ["PME attachée au contrôle : données, hébergeur FR, coûts négociés", "WooCommerce + maintenance sérieuse", "Liberté totale — à condition de budgéter l'entretien"],
            ["Marque qui vit de publicité et réseaux sociaux, peu de contenu", "Shopify", "Vitesse par défaut, intégrations natives, cadre sans importance ici"],
            ["Vente aussi en boutique physique ou sur les marchés", "Shopify", "Caisse et stock unifiés en natif (POS) ; côté Woo, extensions tierces à assembler"],
            ["Boutique cœur de l'entreprise", "Sur-mesure (React/Next.js), à chiffrer avant de trancher", "Évite un projet de migration complet deux ans plus tard — budgets en section 13"],
            ["Boutique qui grossit vers le B2B ou une logique de vente hors standard", "Sur-mesure direct si le besoin métier est déjà là ; s'il reste à valider, testez sur la plateforme en budgétant la bascule dès le départ", "La bascule se planifie et se chiffre — section 13"],
            ["Les Toiles du Lac (scénario fictif composite)", "WooCommerce", "Leur WordPress et son trafic sont un actif dans l'hypothèse : on construit dessus — au volume de lancement, le sur-mesure (15 000 €+) se rechiffrera quand la boutique aura fait ses preuves"],
          ]}
        />

        <InfoBox variant="emerald" title="À retenir : les 6 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>47,4 % / 48,8 %</strong> : la part de WooCommerce dans le parc français / la part de Shopify dans les créations 2025 — deux standards, pas un vainqueur.</li>
            <li><strong>76 % vs 35 %</strong> : les boutiques qui passent les seuils de vitesse Google (mesure réelle) — un écart d&apos;hébergement plus que de logiciel.</li>
            <li><strong>0 %</strong> : la commission de plateforme sur WooCommerce — la liberté de négocier son prestataire de paiement vaut jusqu&apos;à ≈ 840 € net/an à 300 k€ de CA (calcul section 6).</li>
            <li><strong>100 – 300 €/mois</strong> : la maintenance sérieuse d&apos;une boutique WooCommerce active — le poste que les comparatifs pro-Woo oublient.</li>
            <li><strong>3 000 – 20 000 €</strong> : une migration accompagnée entre les deux plateformes — changer d&apos;avis se budgète.</li>
            <li><strong>15 000 €</strong> : le ticket d&apos;entrée du e-commerce sur mesure en 2026 — notre grille publique, détaillée en section 13.</li>
          </ul>
        </InfoBox>

        <h2 id="troisieme-option">13. Quand ni l&apos;un ni l&apos;autre : la troisième option</h2>
        <p>
          Les comparatifs « Woo vs Shopify » entretiennent une
          illusion : que la réponse est forcément l&apos;un des deux.
          C&apos;était vrai tant que le sur-mesure se chiffrait
          uniquement en dizaines de milliers d&apos;euros. En 2026, le
          développement assisté par IA (Claude Code) a fait fondre son
          ticket d&apos;entrée, et la question mérite désormais
          d&apos;être posée dans deux situations : quand la boutique
          est le cœur de votre entreprise — image, conversion,
          durée —, et, comme hier, <strong>quand votre façon de vendre
          ne rentre plus dans les cases</strong> : configurateur de
          produits,
          tarification dynamique, abonnements complexes, B2B avec
          grilles par client, intégrations profondes avec votre
          système de gestion, ou volumes qui font de chaque limite un
          goulot. Côté budgets : une boutique sur plateforme
          se construit entre 1 500 et 30 000 € selon la plateforme et
          le prestataire (section 7) ; les seuils historiquement
          publiés par les agences pour le sur-mesure convergeaient vers
          25 000-80 000 € — un plancher qui a cédé : notre propre{" "}
          <Link href="/services/ecommerce">grille e-commerce sur
          mesure</Link> démarre à 15 000 €, au prix
          d&apos;une création Shopify en agence. Le sur-mesure se
          justifie par le métier et par l&apos;ambition de convertir et
          durer — pas par la mode. Pour tester une demande à petit
          budget ou un side-project (un projet mené à côté de son
          activité principale), valider sur une plateforme reste la
          trajectoire saine ; pour une entreprise dont la boutique est
          l&apos;actif principal, partir directement sur mesure évite
          un projet de migration complet deux ans plus tard — notre{" "}
          <Link href="/guides/shopify-ou-sur-mesure">comparatif
          Shopify ou e-commerce sur mesure</Link> chiffre cette
          bascule — point d&apos;équilibre et coût de sortie compris —
          et notre <Link href="/guides/prix-site-e-commerce">guide des
          prix e-commerce</Link> situe tous ces budgets.
        </p>

        <h2 id="methode">14. Méthode : choisir en 5 étapes</h2>
        <ol>
          <li>
            <strong>Partez de l&apos;existant, pas de l&apos;outil.</strong>{" "}
            Un WordPress vivant avec du trafic est un actif : le
            prolonger (WooCommerce) bat presque toujours le
            recommencement à côté. Pas de site, pas d&apos;équipe et un
            micro-budget : l&apos;avantage passe à Shopify. Une
            boutique appelée à devenir le cœur de l&apos;entreprise :
            chiffrez aussi la troisième option avant de trancher
            (section 13).
          </li>
          <li>
            <strong>Chiffrez votre temps, pas seulement vos
            licences.</strong> Le tableau de la section 7 à la main :
            qui, chez vous, fera (ou paiera) les 2-4 h/mois de
            maintenance côté WooCommerce ?
          </li>
          <li>
            <strong>Projetez vos frais de paiement à 3 ans.</strong>{" "}
            Volume × écart de taux (section 6) : au-delà de
            100 000 € de CA, la liberté de négocier son prestataire
            devient un argument chiffré.
          </li>
          <li>
            <strong>Décidez qui porte la responsabilité.</strong> La
            matrice de la section 9 : déléguer (et subir les pannes de
            la plateforme) ou contrôler (et payer l&apos;entretien).
            C&apos;est un choix de dirigeant, pas de technicien.
          </li>
          <li>
            <strong>Vérifiez que la réponse n&apos;est pas la
            troisième option.</strong> Si votre logique de vente sort
            du standard, comparer Woo et Shopify revient à choisir la
            mauvaise case la mieux aménagée (section 13).
          </li>
        </ol>
        <p>
          Notre position d&apos;agence, en toute transparence : nous ne
          vendons ni thèmes WooCommerce, ni applications Shopify, ni
          hébergement — nous construisons du sur-mesure, devenu notre
          recommandation par défaut quand la boutique est un actif
          stratégique, et nous continuons de recommander les
          plateformes chaque fois qu&apos;elles restent imbattables :
          micro-budget de lancement, test de marché ou side-project,
          vente physique unifiée (le POS) — et site WordPress vivant
          dont le contenu est l&apos;actif. Dans le scénario Les Toiles du
          Lac, l&apos;analyse conduirait ainsi à recommander WooCommerce. Ce
          site lui-même est développé à 100 % en React/Next.js avec
          Claude Code — la vitesse, la qualité visuelle et la
          stratégie de guides que vous lisez en ce moment en sont la
          démonstration. Un{" "}
          <strong><Link href="/methode">Discovery Sprint</Link> (1 500 €,
          2 jours, déduit à 100 % si le projet se lance)</strong> tranche
          votre cas sur vos
          chiffres réels — trafic, volumes, équipe — et produit une
          recommandation écrite, quelle qu&apos;elle soit.{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : objectif de réponse personnelle le prochain jour ouvré,
          gratuite et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://almanac.httparchive.org/en/2025/ecommerce" target="_blank" rel="noopener noreferrer">HTTP Archive, Web Almanac 2025 (chapitre e-commerce, données CrUX réelles)</a> ;{" "}
          <a href="https://w3techs.com/technologies/comparison/cm-shopify,cm-woocommerce" target="_blank" rel="noopener noreferrer">W3Techs, comparaison WooCommerce / Shopify</a> ;{" "}
          <a href="https://www.ecommerce-nation.fr/barometre-cms-ecommerce-shopify-creations-prestashop-chiffre-affaires/" target="_blank" rel="noopener noreferrer">baromètre CMS Friends of Presta 2026 (E-commerce Nation)</a> ;
          étude ShopRank 2026 (créations 2025) ;{" "}
          <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" target="_blank" rel="noopener noreferrer">Patchstack, State of WordPress Security 2026</a> ;{" "}
          <a href="https://www.wordfence.com/blog/2025/04/2024-annual-wordpress-security-report-by-wordfence/" target="_blank" rel="noopener noreferrer">Wordfence, rapport annuel 2024</a> ;{" "}
          <a href="https://storeleads.app/reports/woocommerce" target="_blank" rel="noopener noreferrer">Store Leads, flux de migrations WooCommerce (Q3 2026)</a> ;{" "}
          <a href="https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce" target="_blank" rel="noopener noreferrer">Shopify Help Center, migration depuis WooCommerce</a> ;
          pages tarifs officielles relevées en euros :{" "}
          <a href="https://www.shopify.com/fr/tarifs" target="_blank" rel="noopener noreferrer">Shopify France</a>,{" "}
          <a href="https://woocommerce.com/products/woocommerce-subscriptions/" target="_blank" rel="noopener noreferrer">WooCommerce.com (extensions)</a>,{" "}
          <a href="https://stripe.com/fr/pricing" target="_blank" rel="noopener noreferrer">Stripe</a>,{" "}
          <a href="https://www.payplug.com/fr/tarifs" target="_blank" rel="noopener noreferrer">PayPlug</a>,
          PayPal, Mollie, o2switch (via WPMarmite), Hostinger, WP
          Engine, Kinsta, WPML, ThemeForest, Cloudflare, ManageWP ;
          documentation officielle WooCommerce (conformité PCI DSS) ;
          incident Shopify 2020 (dépôt SEC, presse spécialisée) et
          historique de pannes (Shopify Status) ; fourchettes de
          création/migration : recoupement d&apos;agences et guides
          français 2026 (WeComm, Palmsquare, ClickDev, Kelcible,
          Gradiweb, agence CINQ…). Les prix évoluent : vérifiez à la
          source avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des prix de marché
            constatés, donnés à titre indicatif. WooCommerce et
            WordPress sont des marques de leurs propriétaires
            respectifs ; Shopify est une marque de Shopify Inc. Ce
            guide est indépendant : nous ne percevons aucune
            commission d&apos;affiliation d&apos;aucune plateforme,
            d&apos;aucun hébergeur ni d&apos;aucun éditeur cité.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
