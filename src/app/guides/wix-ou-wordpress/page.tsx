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
  wordCount: 4300,
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
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
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
      "Il existe une version gratuite — avec des publicités Wix sur votre site et une adresse en sous-domaine wix.com : inutilisable pour une entreprise. Le premier forfait professionnel (Light) coûte 16,80 € TTC/mois en facturation annuelle, et il ne permet pas de vendre en ligne : l'e-commerce démarre au forfait Essentiel, à 30 € TTC/mois. Attention au piège des prix : Wix affiche ses tarifs hors taxes (14 €, 25 €…) — comptez 20 % de plus sur votre relevé bancaire. Ajoutez le domaine (offert un an, puis ~15 €/an) et l'email professionnel, jamais inclus (~72 €/an par personne).",
  },
  {
    question: "WordPress est-il vraiment gratuit ?",
    answer:
      "Le logiciel, oui — le site, non. Précision importante : on parle ici du logiciel libre de wordpress.org, pas de WordPress.com (un service par abonnement au modèle proche de Wix, malgré son nom). Un WordPress professionnel paie l'hébergement (84 € HT/an chez un hébergeur français sérieux, domaine et emails illimités inclus), souvent un thème ou des extensions premium (200 à 500 €/an pour un site de PME), et surtout la maintenance : mises à jour, sauvegardes, sécurité — 39 à 290 €/mois en délégation, ou 2 à 4 heures de votre temps chaque mois. C'est le vrai match économique : l'abonnement tout compris de Wix contre la liberté de WordPress… qui s'entretient. Les deux chiffrages complets sont dans ce guide.",
  },
  {
    question: "Quel est le meilleur pour le SEO : Wix ou WordPress ?",
    answer:
      "La réponse honnête a changé. Le chiffre-massue qui circule encore (« 1,4 % des sites Wix reçoivent du trafic Google contre 46,1 % des WordPress ») vient d'une étude de 2019 que son auteur, Ahrefs, a lui-même retirée en reconnaissant sa méthodologie défaillante. Depuis, Google a déclaré par la voix de John Mueller que « Wix convient très bien pour le SEO », et les mesures techniques le confirment. WordPress garde des avantages structurels réels pour une stratégie ambitieuse : adresses libres, contrôle technique complet, écosystème éditorial inégalé. Verdict : Wix suffit pour être trouvé ; WordPress reste devant pour conquérir — parmi les plateformes. Une liberté SEO totale (architecture, vitesse, stratégie de guides complète) demande un site sur mesure : c'est le sujet de la section 13 et de notre comparatif Next.js ou WordPress.",
  },
  {
    question: "Wix ou WordPress pour un e-commerce ?",
    answer:
      "Pour tester une activité ou vendre un petit catalogue simple, Wix fait le travail (forfait Essentiel à 30 € TTC/mois minimum). Au-delà, les limites arrivent vite : les praticiens situent le seuil vers 500 à 1 000 produits ou environ 10 000 € de chiffre d'affaires mensuel — personnalisation, automatisations et performance commencent à coincer. WordPress avec WooCommerce équipe 47,4 % des boutiques en ligne françaises, loin devant tout le monde ; c'est l'écosystème de référence, avec la responsabilité d'entretien qui va avec. Pour ce duel spécifique, notre comparatif WooCommerce ou Shopify complète la réflexion.",
  },
  {
    question: "Est-ce que Wix prend une commission sur les ventes ?",
    answer:
      "Wix ne prélève pas de commission de plateforme sur vos ventes — c'est un vrai point pour lui face à d'autres solutions louées. En revanche, comme partout, chaque paiement par carte rémunère le prestataire de paiement : avec Wix Payments, comptez un pourcentage plus des centimes fixes par transaction (le barème exact varie selon les pays — vérifiez la page officielle Wix Payments pour la France avant de signer, les chiffres américains circulent souvent par erreur dans les comparatifs). Un site WordPress paie l'équivalent à Stripe ou PayPlug, à taux librement négociables.",
  },
  {
    question: "Le domaine est-il inclus dans l'abonnement Wix ?",
    answer:
      "La première année seulement, avec un forfait annuel. Ensuite, le renouvellement chez Wix coûte environ 15 €/an (12 à 25 € selon l'extension) — quand un .fr chez un registrar français comme OVHcloud revient à 7,79 € HT/an. Ce n'est pas une fortune, mais c'est le schéma général à connaître : le tout-en-un facture chaque brique un peu plus cher que le marché. Conseil valable quel que soit votre choix : enregistrez toujours le domaine à votre nom, jamais à celui de la plateforme ou du prestataire — c'est votre actif le plus portable.",
  },
  {
    question: "Wix est-il fait pour les débutants ?",
    answer:
      "Oui — pour un site qui doit simplement exister avec un micro-budget, c'est son vrai point fort, confirmé par les avis d'utilisateurs (4,2/5 sur la plateforme d'avis professionnels G2, où les qualités les plus citées sont la facilité d'usage et l'éditeur par glisser-déposer). Un non-technicien construit et modifie son site seul, sans dépendre de personne, avec hébergement, sécurité et mises à jour gérés. C'est exactement le cahier des charges d'un site « qui doit exister » : présenter l'activité, rassurer, être joignable. La question de ce guide est ce qui se passe quand l'ambition grandit — et là, la réponse change.",
  },
  {
    question: "Peut-on migrer de Wix vers WordPress facilement ?",
    answer:
      "Non — et c'est LE point que ce guide documente à la source. Un site Wix ne peut pas être hébergé ailleurs (architecture propriétaire, page support officielle), et le blog n'est pas exportable (fonctionnalité « demandée par les utilisateurs », toujours indisponible). Ce qui se récupère : les produits de la boutique (fichier CSV, 5 000 lignes maximum), les contacts, les commandes — ni les pages, ni le design, ni le blog. L'importateur officiel de WordPress récupère au mieux les 20 derniers articles via le flux RSS et prévient : votre design ne sera pas recréé. En pratique, quitter Wix, c'est reconstruire le site.",
  },
  {
    question: "Quelle plateforme est la plus sécurisée ?",
    answer:
      "Bien géré, les deux modèles tiennent la route — mais la responsabilité change de mains. Chez Wix, l'éditeur sécurise tout : vous ne pouvez rien casser, et vous ne pouvez rien contrôler non plus. Chez WordPress, la sécurité dépend de l'entretien : 11 334 vulnérabilités ont été recensées dans l'écosystème en 2025 (+42 %), dont 91 % dans les extensions — le cœur du logiciel est sain (6 failles mineures). Un WordPress maintenu sérieusement est sûr ; un WordPress abandonné est une cible. La sécurité de Wix est incluse ; celle de WordPress se budgète — notre guide de la maintenance chiffre ce poste.",
  },
  {
    question: "Combien coûte un site Wix fait par un prestataire ?",
    answer:
      "Environ 2 500 € en moyenne en France — oui, des freelances et agences créent des sites sur Wix, pas seulement sur WordPress. Et pour situer l'ensemble : le blog officiel de Wix France chiffre lui-même un site vitrine entre 1 000 et 5 000 € chez un freelance et 2 000 à 15 000 € en agence, toutes technologies confondues. Côté WordPress : 800 à 3 000 € en freelance, 2 000 à 6 000 € en agence pour un site vitrine sérieux. Le prestataire pèse plus lourd que la plateforme dans la facture — d'où l'importance de comparer à périmètre écrit égal.",
  },
  {
    question: "Wix est-il moins cher qu'un site sur mesure ?",
    answer:
      "À l'entrée, oui : quelques centaines d'euros par an contre plusieurs milliers en création. Mais l'écart a fondu : en 2026, l'IA (Claude Code) a fortement réduit le coût et le délai du sur-mesure. Wix loue un site standard que vous assemblez ; le sur-mesure construit un actif que vous possédez, conçu pour convertir et être trouvé — c'est un autre métier et un autre objectif. Et dès qu'un projet Wix « ambitieux » exige un prestataire (2 500 € et plus) plus des années d'abonnements et d'applications — plus la rançon de sortie (section 9) —, la facture rejoint celle d'un actif que vous possédez. Notre guide du prix d'un site vitrine met tous ces budgets côte à côte.",
  },
  {
    question: "Peut-on résilier un abonnement Wix facilement ?",
    answer:
      "La résiliation se fait depuis le compte, mais lisez les conditions de renouvellement : les abonnements se reconduisent automatiquement, les notifications de renouvellement peuvent passer inaperçues, et des clients français racontent sur les plateformes d'avis des hausses successives découvertes sur le relevé bancaire (des cas documentés passent du simple au double en deux ans). La loi Chatel protège les consommateurs contre la reconduction tacite, mais elle ne couvre généralement pas les abonnements souscrits à titre professionnel — d'où l'importance des réflexes qui suivent. Réflexe simple : notez la date d'échéance, désactivez le renouvellement automatique si vous hésitez, et surveillez le premier prélèvement de chaque période.",
  },
  {
    question: "Et le RGPD : où sont hébergées vos données ?",
    answer:
      "Chez Wix, le site et les données qu'il collecte (contacts, commandes, formulaires) vivent sur l'infrastructure mondiale de Wix.com Ltd — des serveurs répartis notamment aux États-Unis et en Europe, encadrés par ses clauses contractuelles : vous n'avez pas la main sur la localisation. Avec WordPress, vous choisissez : un hébergeur français (o2switch, OVHcloud…) garde les données de vos clients en France, un argument qui compte pour les professions réglementées et les appels d'offres. Dans les deux cas, vos obligations d'affichage restent identiques : mentions légales, politique de confidentialité, bandeau cookies conforme — la plateforme ne les remplit pas à votre place.",
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
          { label: "Wix ou WordPress" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les vrais prix TTC des deux côtés (et le piège du hors-taxes), la vitesse mesurée sur données réelles, le mythe SEO démonté à la source, ce que vous récupérez — et ne récupérez pas — si vous quittez Wix un jour, et un verdict par profil rendu sans un seul lien d'affiliation."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Wix réel : 16,80 – 178,80 €/mois TTC", description: "", color: "violet" },
          { number: "02", title: "WordPress : libre, mais à entretenir", description: "", color: "blue" },
          { number: "03", title: "Sortie de Wix : pages et design perdus", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/guides/cout-maintenance-site-internet", label: "Coût de la maintenance" },
          { href: "/guides/woocommerce-ou-shopify", label: "WooCommerce ou Shopify ?" },
          { href: "/services/sites-vitrines", label: "Sites vitrines sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Wix ou WordPress : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Cherchez « Wix ou WordPress » : la première page de Google est
          tenue par Wix lui-même, deux hébergeurs, et des blogs rémunérés
          à la commission. <strong>Personne n&apos;y est neutre — nous
          non plus : nous vendons du sur-mesure, et zéro
          affiliation.</strong>{" "}
          Ce guide l&apos;est : zéro lien d&apos;affiliation, les prix
          réels TTC des deux côtés, la vitesse mesurée, le verrouillage
          documenté à la source — et l&apos;honnêteté de dire quand Wix
          gagne.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Le verdict en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. Location meublée ou maison à entretenir" },
            { id: "prix-wix", label: "3. Le vrai prix de Wix (TTC — et les 3 coûts cachés)" },
            { id: "prix-wordpress", label: "4. Le vrai prix d'un WordPress équivalent" },
            { id: "tco", label: "5. Le match sur 3 ans, poste par poste" },
            { id: "hausses", label: "6. Le risque locatif : l'historique des hausses Wix" },
            { id: "seo", label: "7. SEO : le mythe, démonté à la source" },
            { id: "performance", label: "8. La vitesse mesurée : le résultat qui surprend" },
            { id: "verrouillage", label: "9. La clause de sortie : ce que vous emportez en partant" },
            { id: "securite-wordpress", label: "10. L'envers de WordPress : l'entretien obligatoire" },
            { id: "marche", label: "11. Parts de marché : deux trajectoires opposées" },
            { id: "verdict-par-profil", label: "12. La grille de décision finale, profil par profil" },
            { id: "troisieme-option", label: "13. Quand aucun des deux : la troisième option" },
            { id: "methode", label: "14. Méthode : choisir en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. Le verdict en 30 secondes</h2>
        <p>
          En 2026, <strong>Wix reste le bon choix dans un cas
          précis : un site qui doit simplement exister, avec un
          micro-budget et personne pour s&apos;en occuper</strong> —
          un non-technicien le construit et le modifie seul, tout est
          géré, pour <strong>16,80 à 40,80 € TTC/mois</strong> selon
          le forfait (l&apos;e-commerce démarre à 30 €).{" "}
          <strong>WordPress garde du sens quand le besoin reste
          standard et l&apos;entretien accepté</strong> : hébergement
          dès 84 € HT/an (≈ 101 € TTC), maintenance à budgéter (39 à
          290 €/mois en délégation). Mais pour une entreprise dont le site doit
          convertir et durer, <strong>le choix par défaut a
          changé</strong> : l&apos;IA (Claude Code) a fait fortement
          baisser le coût et le délai du sur-mesure, et le critère que
          personne ne met en avant — <strong>la réversibilité</strong> —
          joue entièrement pour lui : un site Wix ne s&apos;exporte
          pas, un site que vous possédez vous suit partout
          (sections 9 et 13).
        </p>
        <GuideTable
          headers={["Votre situation", "Notre verdict", "Pourquoi"]}
          rows={[
            ["Indépendant, site « carte de visite », autonomie totale", "Wix", "Simple, tout géré, modifiable seul — sa vraie force"],
            ["TPE avec blog et ambition Google réelle", "WordPress à petit budget — sur-mesure dès que le site doit convertir", "Adresses libres et écosystème éditorial ; liberté SEO totale en sur-mesure — section 13"],
            ["Boutique en ligne sérieuse", "WordPress (WooCommerce, son module boutique)", "47,4 % du e-commerce français ; Wix coince vers 500-1 000 produits"],
            ["Site stratégique : acquisition, conversion, image", "Ni l'un ni l'autre : sur-mesure", "Le site devient un actif — section 13"],
            ["Vous pensez peut-être partir un jour", "Pas Wix", "Rien ne s'exporte : pages, design et blog restent chez Wix (section 9)"],
          ]}
        />

        <InfoBox variant="blue" title="Les 10 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Wix</strong> : un créateur de site tout-en-un loué par abonnement — l&apos;hébergement, l&apos;outil et la maintenance sont fournis.</li>
            <li><strong>WordPress</strong> : un logiciel libre et gratuit qui gère le contenu d&apos;un site (CMS) — à installer chez un hébergeur et à entretenir.</li>
            <li><strong>CMS</strong> : le logiciel qui permet de créer et modifier les pages d&apos;un site sans coder.</li>
            <li><strong>Hébergement</strong> : la location du serveur qui fait tourner le site — incluse chez Wix, à souscrire pour WordPress.</li>
            <li><strong>Extension (plugin) / app</strong> : un module qui ajoute une fonction — licences annuelles chez WordPress, abonnements mensuels chez Wix.</li>
            <li><strong>Thème / template</strong> : l&apos;habillage graphique du site — chez Wix, on ne peut pas en changer sans refaire le site.</li>
            <li><strong>SEO</strong> : le référencement naturel — tout ce qui fait que Google vous affiche gratuitement.</li>
            <li><strong>Core Web Vitals</strong> : les mesures de vitesse et de stabilité que Google utilise comme « contrôle technique » des sites.</li>
            <li><strong>Réversibilité</strong> : votre capacité à partir en emportant votre site — le critère caché de ce comparatif.</li>
            <li><strong>HT / TTC</strong> : hors taxes / toutes taxes comprises — Wix affiche du HT, votre banque débite du TTC (+20 %).</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Location meublée ou maison à entretenir</h2>
        <p>
          Le duel n&apos;oppose pas deux logiciels mais deux modèles.{" "}
          <strong>Wix est une location meublée</strong> : on emménage en
          un après-midi, tout fonctionne, le propriétaire entretient — et
          on paie un loyer qui peut augmenter, on ne pousse pas les murs,
          et le jour du départ, on ne part qu&apos;avec ses valises : les
          meubles restent. <strong>WordPress est une maison à
          entretenir</strong> : le plan est à vous, tout se transforme,
          on déménage la maison entière chez un autre hébergeur si on
          veut — et la chaudière, la toiture et les serrures sont votre
          affaire, chaque année.
        </p>
        <p>
          Fil rouge de ce guide : <strong>Claire, naturopathe à
          Annecy</strong>. Site Wix Light depuis 2023 — douze pages
          qu&apos;elle modifie elle-même, un vrai confort. Son projet
          change la donne : vivre de sa visibilité, avec un blog santé
          sérieux qui doit la faire trouver sur Google au-delà
          d&apos;Annecy. Rester sur Wix, migrer vers WordPress, ou
          investir dans un site conçu pour l&apos;acquisition ? Nous
          allons chiffrer ses trois chemins — et le troisième
          commencera par une mauvaise nouvelle sur ce qu&apos;elle
          pourra emporter.
        </p>

        <h2 id="prix-wix">3. Le vrai prix de Wix (TTC — et les 3 coûts cachés)</h2>
        <p>
          Premier piège, responsable de la cacophonie des comparatifs :{" "}
          <strong>Wix affiche ses prix hors taxes</strong>. Les « 14 € »
          et « 25 € » des publicités deviennent, sur votre relevé
          bancaire, les montants TTC ci-dessous (facturation annuelle,
          grille France relevée en juillet 2026 — la page tarifs est
          géolocalisée et changeante, vérifiez avant de signer) :
        </p>
        <GuideTable
          headers={["Forfait", "Prix TTC/mois (annuel)", "Ce qu'il permet", "La limite"]}
          rows={[
            ["Gratuit", "0 €", "Tester l'outil", "Publicités Wix + adresse en wix.com : inutilisable en pro"],
            ["Light", "16,80 €", "Site vitrine, domaine offert 1 an", "Pas de vente en ligne, 2 Go de stockage"],
            ["Essentiel (Core)", "30 €", "E-commerce : paiements activés", "Le vrai ticket d'entrée pour vendre"],
            ["Business", "40,80 €", "Boutique plus complète", "Les fonctions avancées passent par des apps payantes"],
            ["Business Elite", "178,80 €", "Gros volumes, fonctions étendues", "À ce prix, d'autres options existent (section 13)"],
          ]}
        />
        <p>
          Trois coûts cachés complètent la facture réelle.{" "}
          <strong>Le domaine</strong> : offert la première année, puis
          renouvelé chez Wix autour de 15 €/an — environ 60 % plus
          cher qu&apos;un .fr
          pris en direct chez un bureau d&apos;enregistrement de
          domaines français (un « registrar ») : 7,79 € HT/an chez
          OVHcloud.{" "}
          <strong>L&apos;email professionnel</strong> : jamais inclus,
          quel que soit le forfait — comptez ~6 €/mois par personne via
          Google Workspace, soit 72 €/an, quand les hébergeurs français
          l&apos;incluent en illimité. <strong>Les applications</strong> :
          le moindre besoin non couvert (fidélité, calculs de livraison,
          avis…) se loue 5 à 30 €/mois par app sur le Wix App Market —
          l&apos;addition mensuelle grimpe vite au-delà de
          l&apos;abonnement lui-même. La facturation mensuelle sans
          engagement, enfin, coûte 15 à 35 % plus cher que
          l&apos;annuelle.
        </p>
        <p>
          Deux limites structurelles complètent le tableau, rarement
          annoncées avant la signature : un site Wix est{" "}
          <strong>plafonné à 100 pages</strong> (hors articles de
          blog), et <strong>on ne peut pas changer de template</strong> —
          l&apos;habillage graphique — sans refaire le site : le
          « relooking » périodique que tout site connaît devient une
          reconstruction. Mentionnons enfin Wix Studio, l&apos;offre
          destinée aux professionnels et agences : un éditeur plus
          puissant, pensé pour ceux qui créent des sites pour les
          autres — il améliore l&apos;outil, pas le modèle. Le contrat
          reste le même : abonnement à vie, plateforme fermée, site
          non exportable. Si votre prestataire vous propose un site
          « sur Wix Studio », les sections 6 et 9 de ce guide
          s&apos;appliquent à l&apos;identique.
        </p>

        <h2 id="prix-wordpress">4. Le vrai prix d&apos;un WordPress équivalent</h2>
        <p>
          Une mise en garde avant tout : le WordPress de ce guide est
          le logiciel libre — celui qu&apos;on télécharge sur
          wordpress.org et qu&apos;on installe chez l&apos;hébergeur de
          son choix. Ne le confondez pas avec WordPress.com, un service
          commercial par abonnement qui, malgré son nom, fonctionne…
          comme Wix : forfaits mensuels, plateforme hébergée, liberté
          restreinte sur les petits plans. Si un devis ou un tutoriel
          parle de « WordPress.com », il ne parle pas du produit décrit
          ici. Cela posé, l&apos;équation WordPress a trois étages.{" "}
          <strong>L&apos;infrastructure</strong>, étonnamment modeste :
          un hébergeur français sérieux comme o2switch facture{" "}
          <strong>84 € HT/an</strong> (offre Grow) avec domaine offert,
          emails illimités et stockage illimité — de quoi couvrir
          l&apos;immense majorité des sites vitrines.{" "}
          <strong>Les licences</strong> : un site professionnel finit
          souvent avec un thème ou des extensions premium — 200 à
          500 €/an pour un site de PME équipé.{" "}
          <strong>L&apos;entretien</strong>, le poste que les
          comparatifs pro-WordPress escamotent : mises à jour testées,
          sauvegardes, sécurité — 2 à 4 heures par mois si vous le
          faites, <strong>39 à 290 €/mois</strong> si vous le déléguez
          (notre <Link href="/guides/cout-maintenance-site-internet">guide
          du coût de la maintenance</Link> détaille forfaits réels et
          contrats). Et si vous déléguez aussi la création : 800 à
          3 000 € chez un freelance, 2 000 à 6 000 € en agence pour un
          site vitrine sérieux — contre environ 2 500 € en moyenne pour
          un site confié à un prestataire… sur Wix, car oui, cela
          existe, et le blog officiel de Wix France chiffre lui-même un
          site freelance entre 1 000 et 5 000 €.
        </p>

        <h2 id="tco">5. Le match sur 3 ans, poste par poste</h2>
        <p>
          Personne dans les comparatifs ne pose les deux additions
          complètes côte à côte. Les voici, TTC, hypothèses affichées :
        </p>
        <GuideTable
          headers={["Profil", "Wix (3 ans)", "WordPress (3 ans)"]}
          rows={[
            ["Vitrine en autonomie complète", "≈ 850 € (Light + domaine an 2-3 + email pro)", "≈ 300 – 750 € (hébergement + licences éventuelles) + votre temps d'entretien"],
            ["Site pro, entretien délégué", "≈ 1 330 € (Essentiel + domaine an 2-3 + email pro) + apps éventuelles", "≈ 2 000 – 3 700 € (hébergement + licences + maintenance 39-60 €/mois)"],
            ["Boutique en ligne", "≈ 1 330 – 6 680 € (Essentiel à Elite + domaine an 2-3 + email pro) + apps", "≈ 3 000 – 8 000 € (hébergement renforcé + extensions + maintenance e-commerce)"],
            ["Création par prestataire (une fois)", "≈ 2 500 € en moyenne", "800 – 3 000 € (freelance) à 6 000 € (agence)"],
          ]}
        />
        <p>
          Lisons ce tableau contre notre propre camp, pour être
          crédible partout ailleurs : <strong>dès que
          l&apos;entretien est délégué, WordPress coûte plus cher que
          Wix</strong> — la liberté s&apos;entretient, et
          l&apos;abonnement Wix inclut ce que WordPress facture à part.
          Wix n&apos;est donc pas « le piège à pigeons » que décrivent
          les blogs affiliés WordPress ; c&apos;est un tout-en-un
          honnêtement facturé — tant que le besoin reste celui
          d&apos;un site qui doit seulement exister : micro-budget,
          side-project, test de marché. Dès que le site doit
          convertir, le calcul change d&apos;échelle (sections 9
          et 13).
          L&apos;écart réel se joue sur trois curseurs : votre
          autonomie (Wix la maximise), votre ambition Google
          (section 7), et votre liberté de partir (section 9) —
          c&apos;est elle qui fait basculer le calcul à long terme.
          N&apos;oubliez pas non plus de compter votre temps dans la
          colonne « autonomie » : les heures passées à construire et
          entretenir soi-même son site sont des heures de gérant — à
          25 ou 40 € de l&apos;heure de valeur, le « gratuit » du
          fait-maison rejoint vite le prix d&apos;un professionnel,
          quel que soit l&apos;outil choisi.
        </p>

        <h2 id="hausses">6. Le risque locatif : l&apos;historique des hausses Wix</h2>
        <p>
          Louer, c&apos;est accepter que le loyer bouge. Les faits :
          Wix a révisé sa grille <strong>trois fois en trois ans</strong> —
          hausse des forfaits en septembre 2021, refonte complète des
          plans en juillet 2023, nouveaux prix en juin 2024. Côté
          clients, les plateformes d&apos;avis françaises documentent
          des trajectoires individuelles marquantes — un abonnement
          passé de 79 € à 201 € en deux ans, un prélèvement de 91 € à
          168 €, des notifications de renouvellement retrouvées dans
          les indésirables — et la note Trustpilot de Wix (3,6/5 sur
          ~28 500 avis) reflète surtout ces litiges de facturation, car
          au même moment, les avis professionnels saluent réellement la
          simplicité du produit (4,2/5 sur G2). Les deux vérités
          coexistent : <strong>l&apos;outil est bon, le contrat
          mérite d&apos;être surveillé</strong>. Un WordPress, lui,
          subit les hausses de ses briques — hébergement, licences —
          négociables et remplaçables une à une. Réflexe minimal chez
          Wix : noter la date d&apos;échéance et vérifier le premier
          prélèvement de chaque période. Et rangez ce fait au bon
          endroit dans votre décision : ce n&apos;est pas un motif de
          fuir Wix, c&apos;est un motif de ne jamais y être captif —
          ce qui ramène, encore, à la question de la sortie
          (section 9) : on négocie sereinement avec un bailleur
          quand on peut déménager.
        </p>

        <h2 id="seo">7. SEO : le mythe, démonté à la source</h2>
        <p>
          Le chiffre le plus cité du débat — « 1,4 % des sites Wix
          reçoivent du trafic Google, contre 46,1 % des WordPress » —
          mérite un sort définitif : il provient d&apos;une étude
          Ahrefs de 2019 que <strong>son propre auteur a retirée</strong>,
          en reconnaissant publiquement une méthodologie défaillante
          (trop de variables non contrôlées — les sites Wix de
          l&apos;époque étaient massivement des sites amateurs, ce qui
          faussait tout). Depuis, John Mueller — la voix de Google
          auprès des webmasters — a été explicite : « Wix convient très
          bien pour le SEO. Il y a quelques années c&apos;était
          mauvais, mais ils ont fait des progrès fantastiques. » Et les
          mesures techniques confirment : l&apos;observatoire HTTP
          Archive attribue à Wix un score technique SEO médian parfait.
        </p>
        <p>
          Faut-il en conclure que le match est nul ? Non — mais il se
          joue ailleurs que dans les slogans. WordPress conserve des
          avantages structurels pour une stratégie ambitieuse : des
          adresses de pages entièrement libres, un contrôle technique
          total (données structurées, redirections, fichiers serveur),
          un multilingue robuste et l&apos;écosystème éditorial le plus
          riche du web. Wix garde des limites d&apos;architecture :
          structure d&apos;adresses imposée, réglages avancés
          inaccessibles, noms de fichiers d&apos;images générés
          automatiquement. Les spécialistes qui suivent la plateforme
          au quotidien (Ahrefs en tête, dans son guide actualisé)
          résument bien l&apos;état 2026 : « des options solides pour
          une configuration SEO de base », mais une plateforme qui
          « manque de la flexibilité des réglages avancés » — le
          multilingue au contrôle limité et le plan de site
          auto-généré non éditable en sont les exemples types. Pour
          Claire, la traduction est simple :{" "}
          <strong>être trouvée sur « naturopathe Annecy », Wix le
          fait ; construire un blog santé qui rayonne au national
          demande une liberté SEO totale</strong> — WordPress la donne
          en partie, un site sur mesure la donne entièrement :
          architecture, vitesse,{" "}
          <Link href="/services/referencement-google">stratégie de
          contenus pensée pour le référencement</Link> sans aucune
          brique qui bride (section 13). C&apos;est d&apos;ailleurs
          ainsi qu&apos;est construit le site que vous lisez.
        </p>

        <h2 id="performance">8. La vitesse mesurée : le résultat qui surprend</h2>
        <p>
          Voici la donnée que les comparatifs français ne citent
          jamais, et elle bouscule les préjugés. Les mesures réelles
          d&apos;utilisateurs Chrome (données CrUX, compilées par le
          Web Almanac 2025) donnent, sur mobile :{" "}
          <strong>74 % des sites Wix passent les Core Web Vitals de
          Google… contre 45 % des sites WordPress</strong>. Le
          « lent » de la réputation n&apos;est pas celui qu&apos;on
          croit. L&apos;explication est structurelle, pas magique :
          Wix contrôle l&apos;hébergement, les thèmes et le code de
          tous ses sites — la moyenne est bonne parce que personne ne
          peut mal faire. WordPress hérite de millions
          d&apos;installations libres — thèmes lourds, hébergements
          d&apos;entrée de gamme, extensions empilées — qui plombent
          la moyenne… alors qu&apos;un WordPress bien construit et
          bien hébergé dépasse largement le plafond de Wix. La règle
          honnête, la même que pour WooCommerce face à Shopify :{" "}
          <strong>la plateforme fermée est rapide par défaut, la
          plateforme libre est rapide si on sait la tenir</strong> —
          et ce savoir-faire est précisément ce que vous achetez chez
          un professionnel.
        </p>

        <GuideInlineCTA
          title="Votre site doit exister — ou conquérir ?"
          description="Décrivez votre projet en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, avec un avis franc — rester sur Wix, passer à WordPress ou investir dans un site fait pour l'acquisition — sans un euro d'affiliation dans la réponse."
          tags={["Réponse sous 24 h ouvrées", "Zéro affiliation, zéro plateforme à vendre", "Avis franc, même si c'est « restez sur Wix »"]}
        />

        <h2 id="verrouillage">9. La clause de sortie : ce que vous emportez en partant</h2>
        <p>
          C&apos;est la section que vous ne trouverez chiffrée nulle
          part ailleurs, et tout y est sourcé sur les pages support
          officielles de Wix. Un site Wix{" "}
          <strong>ne peut pas être hébergé ailleurs</strong> —
          l&apos;architecture est propriétaire, le site vit et meurt
          sur les serveurs de Wix. Le blog{" "}
          <strong>n&apos;est pas exportable</strong> — la page support
          officielle classe l&apos;export d&apos;articles en
          « fonctionnalité demandée », toujours indisponible. Voici le
          bilan complet d&apos;un départ :
        </p>
        <GuideTable
          headers={["Ce que vous possédez", "En partant de Wix", "Conséquence"]}
          rows={[
            ["Produits de la boutique", "Export CSV — un fichier de tableur lisible dans Excel (5 000 lignes max)", "Récupérables"],
            ["Contacts / clients", "Export CSV (50 000 max)", "Récupérables"],
            ["Commandes", "Export possible", "Récupérables"],
            ["Pages du site et leur design", "AUCUN export", "À reconstruire intégralement"],
            ["Articles de blog", "Aucun export officiel (au mieux, les 20 derniers via le flux RSS — le fil de diffusion automatique de tout blog)", "Des années de contenu à re-copier à la main"],
            ["Nom de domaine", "Transférable (s'il est à votre nom)", "Votre seul actif pleinement portable"],
          ]}
        />
        <p>
          L&apos;importateur officiel de WordPress résume la situation
          en une phrase de sa documentation : votre design « ne sera
          pas recréé ». En pratique, <strong>quitter Wix coûte le prix
          d&apos;un site neuf</strong> — création (800 à 6 000 € selon
          le prestataire) plus la reprise manuelle des contenus, plus
          les redirections pour préserver l&apos;acquis Google. Pour
          Claire, c&apos;est la mauvaise nouvelle annoncée : ses trois
          ans de pages et d&apos;articles ne la suivront pas —
          repartir tôt coûte moins cher que repartir tard, car chaque
          mois d&apos;écriture sur Wix augmente la rançon du départ.
          La leçon vaut avant de choisir :{" "}
          <strong>demandez toujours « qu&apos;est-ce que
          j&apos;emporte si je pars ? » — c&apos;est la question qui
          départage les plateformes mieux que toutes les listes de
          fonctionnalités</strong>. Et si vous êtes déjà sur Wix,
          trois gestes de prévoyance dès aujourd&apos;hui, sans rien
          quitter : vérifiez que le nom de domaine est bien à votre
          nom (et transférable), exportez régulièrement contacts et
          produits en CSV, et conservez vos textes et images sources
          dans un dossier à vous — le jour d&apos;un éventuel départ,
          ces trois réflexes vaudront des semaines de re-saisie.
        </p>

        <InfoBox variant="blue" title="Les trois chemins de Claire, chiffrés">
          <strong>Rester sur Wix</strong> : passer au forfait Essentiel
          (30 € TTC/mois) pour dépasser les 2 Go de stockage de Light
          et outiller le blog — ≈ 1 330 € sur 3 ans (forfait + domaine
          an 2-3 + email pro),
          autonomie intacte, mais plafond structurel sur le
          référencement national et une dette de sortie qui grossit à
          chaque article publié. <strong>Migrer vers WordPress</strong> :
          création par un freelance (≈ 1 500 à 2 500 €), reprise
          manuelle de ses 12 pages et de ses articles (le blog ne
          s&apos;exporte pas), hébergement 84 € HT/an, maintenance
          39-60 €/mois — ≈ 3 500 à 5 000 € sur 3 ans, pour un outil
          qui suivra son ambition. <strong>Investir dans un site
          d&apos;acquisition sur mesure</strong> : 6 900 € et plus —
          le choix cohérent dès lors que la visibilité doit devenir le
          premier canal de l&apos;activité… ce qui est précisément le
          projet de Claire. Sa décision rationnelle
          aujourd&apos;hui : le chemin 3 si son projet est confirmé,
          le chemin 2 si le budget l&apos;impose — et dans les deux
          cas partir vite, car chaque mois d&apos;écriture sur Wix
          alourdit la reprise manuelle.
        </InfoBox>

        <h2 id="securite-wordpress">10. L&apos;envers de WordPress : l&apos;entretien obligatoire</h2>
        <p>
          Symétrie oblige — car ce guide n&apos;est le camp de
          personne. La liberté de WordPress a un coût structurel :{" "}
          <strong>11 334 vulnérabilités recensées dans son écosystème
          en 2025</strong> (+42 % en un an), dont{" "}
          <strong>91 % dans les extensions</strong> — le cœur du
          logiciel est remarquablement sain (6 failles mineures), mais
          chaque extension ajoutée est une porte à surveiller, et les
          failles les plus ciblées sont exploitées par des robots en
          quelques heures. Les rapports d&apos;incidents le confirment
          année après année : les WordPress piratés sont massivement
          des WordPress <em>non entretenus</em>. Conclusion pratique,
          sans drame : un WordPress professionnel se choisit{" "}
          <strong>avec son contrat d&apos;entretien</strong>, comme une
          voiture avec ses révisions — c&apos;est le prix de la
          propriété, il est réel, et il est chiffré dans notre{" "}
          <Link href="/guides/cout-maintenance-site-internet">guide de
          la maintenance</Link>. Chez Wix, ce poste n&apos;existe pas :
          il est fondu dans le loyer. Toute la différence des deux
          modèles tient dans cette phrase. Une précision qui rassure
          souvent : ne confondez pas entretien et usage.
          L&apos;entretien technique (mises à jour, sauvegardes,
          sécurité) se délègue ; mais écrire un article, changer une
          photo ou un tarif dans un WordPress bien construit est du
          même ordre de difficulté que dans Wix. C&apos;est
          l&apos;arrière-boutique qui demande un professionnel, pas le
          comptoir — Claire continuera de publier seule, quel que soit
          son choix.
        </p>

        <h2 id="marche">11. Parts de marché : deux trajectoires opposées</h2>
        <p>
          Pour situer le rapport de forces (relevé W3Techs, juillet
          2026) : <strong>WordPress équipe 41,2 % de tous les sites
          web</strong> — 59,1 % du marché des CMS, une domination
          écrasante mais en lente érosion depuis son pic de 2022
          (~43 %). <strong>Wix pèse 4,3 % du web</strong> — vingt fois
          plus qu&apos;il y a douze ans, la trajectoire inverse. Les
          deux courbes racontent la même histoire que ce guide : le
          web se partage entre un standard historique immense qui
          vieillit lentement, et des plateformes fermées qui montent en
          absorbant le marché des sites simples. Aucun des deux choix
          n&apos;est marginal ou risqué par sa taille ; votre décision
          peut se prendre sur vos critères, pas sur la peur de choisir
          un canard boiteux. Une précision française pour finir : sur
          le e-commerce, le rapport de forces est sans ambiguïté —
          WooCommerce (WordPress) équipe 47,4 % des boutiques en ligne
          françaises quand Wix y reste marginal ; pour une vraie
          boutique, le débat de ce guide se déplace vers notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">comparatif
          WooCommerce ou Shopify</Link>.
        </p>

        <h2 id="verdict-par-profil">12. La grille de décision finale, profil par profil</h2>
        <p>
          Toutes les analyses de ce guide, condensées en une grille —
          cherchez votre ligne, le verdict est motivé par les sections
          citées plus haut :
        </p>
        <GuideTable
          headers={["Votre profil", "Verdict", "Pourquoi"]}
          rows={[
            ["Indépendant, association, site « carte de visite »", "Wix", "Autonomie réelle, tout géré, budget minimal — sa zone d'excellence"],
            ["TPE locale, budget de quelques milliers d'euros maximum", "Wix ou WordPress simple", "À ce budget, les deux font le travail ; au-delà, un site vitrine sur mesure devient accessible (section 13)"],
            ["Stratégie de contenu, ambition Google au-delà du local", "WordPress ou sur-mesure", "WordPress si le budget est contraint ; liberté SEO totale (architecture, vitesse, stratégie de guides) en sur-mesure — section 13"],
            ["Boutique en ligne en croissance", "WordPress (WooCommerce)", "Wix coince vers 500-1 000 produits ou ~10 000 €/mois de chiffre d'affaires"],
            ["Site stratégique : acquisition, conversion, vitesse garantie", "Sur-mesure", "Le site est un actif commercial — section 13"],
            ["Claire, notre fil rouge (blog santé ambitieux)", "Sur-mesure si le projet est confirmé — WordPress si le budget l'impose", "Et partir tôt dans les deux cas : chaque mois sur Wix alourdit la reconstruction"],
          ]}
        />

        <InfoBox variant="emerald" title="À retenir : les 6 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>16,80 – 178,80 € TTC/mois</strong> : la vraie grille Wix (affichée hors taxes : +20 % sur votre relevé), e-commerce dès 30 €.</li>
            <li><strong>84 € HT/an</strong> : l&apos;hébergement WordPress sérieux, emails et domaine inclus — mais l&apos;entretien se budgète à part (39-290 €/mois délégué).</li>
            <li><strong>74 % vs 45 %</strong> : les sites qui passent les seuils de vitesse Google (mesure réelle) — Wix devant le WordPress moyen, contre toute réputation.</li>
            <li><strong>0 export</strong> : pages, design et blog d&apos;un site Wix ne s&apos;emportent pas — quitter Wix coûte le prix d&apos;un site neuf.</li>
            <li><strong>3 hausses en 3 ans</strong> : l&apos;historique tarifaire de Wix — le loyer d&apos;une location se surveille.</li>
            <li><strong>6 900 – 22 000 €</strong> : un site d&apos;acquisition sur mesure (grille publique) — le choix par défaut en 2026 pour un site qui doit rapporter des clients, désormais à portée de budgets de PME.</li>
          </ul>
        </InfoBox>

        <h2 id="troisieme-option">13. Quand aucun des deux : la troisième option</h2>
        <p>
          Un mot d&apos;abord sur les cousins de Wix que vous avez
          forcément croisés — Squarespace, Webflow, Jimdo, Hostinger,
          et leurs variantes « générateur de site par IA », que notre{" "}
          <Link href="/guides/creer-un-site-avec-ia">guide « créer un
          site avec l&apos;IA »</Link> passe au crible : même famille,
          mêmes forces (tout géré, mise en route rapide) et même clause
          de sortie limitée ; les critères de ce guide s&apos;y
          appliquent tels quels. Cela posé : Wix et WordPress
          partagent un présupposé — le site est un assemblage de
          briques standards. Pour un side-project, un micro-budget ou
          un test de marché, c&apos;est exactement ce qu&apos;il faut.
          Pour un site professionnel qui doit{" "}
          <strong>convertir et durer</strong>, ce présupposé ne tient
          plus en 2026 : l&apos;IA (Claude Code) a fait chuter le coût
          et le délai de la conception sur mesure, et l&apos;assemblage
          montre ses limites — vitesse plafonnée par les briques,
          référencement technique bridé, parcours génériques, et une
          qualité visuelle qu&apos;aucun template n&apos;atteint
          (animations et interactions de niveau produit, type Framer
          Motion ou GSAP, hors de portée de Wix et des builders grand
          public — Webflow, l&apos;exception partielle, reste soumis à
          la même clause de sortie).
          C&apos;est le territoire du sur-mesure : un site conçu pour
          votre stratégie, généralement{" "}
          <strong>6 900 à 22 000 €</strong> chez nous
          (<Link href="/tarifs">grille publique</Link>), rapide par
          conception — le site que vous lisez
          est lui-même développé à 100 % en React/Next.js —, notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">comparatif Next.js
          ou WordPress</Link> traite ce match technologique en détail,
          et notre <Link href="/guides/prix-site-vitrine">guide du prix
          d&apos;un site vitrine</Link> met tous les budgets côte à
          côte, de 500 à 22 000 €. Le bon réflexe pour savoir si vous
          êtes concerné : si votre réponse à « que doit rapporter ce
          site ? » se chiffre en clients par mois, la question du socle
          mérite mieux qu&apos;un abonnement.
        </p>

        <h2 id="methode">14. Méthode : choisir en 5 étapes</h2>
        <ol>
          <li>
            <strong>Tranchez le rôle du site</strong> — exister
            (rassurer ceux qui vous cherchent) ou acquérir (faire venir
            des clients). C&apos;est 80 % de la décision, avant toute
            considération d&apos;outil.
          </li>
          <li>
            <strong>Posez la question de la sortie.</strong>{" "}
            « Qu&apos;est-ce que j&apos;emporte si je pars ? » Chez
            Wix : vos produits et contacts, pas votre site (section 9).
            Si l&apos;ambition peut grandir, ce critère pèse plus que
            le prix.
          </li>
          <li>
            <strong>Comparez les coûts complets sur 3 ans</strong> —
            TTC, domaine, email, apps d&apos;un côté ; hébergement,
            licences, maintenance de l&apos;autre (le tableau de la
            section 5). Pas les prix d&apos;appel.
          </li>
          <li>
            <strong>Jaugez honnêtement votre autonomie.</strong> Qui
            modifiera le site chaque mois ? Si la réponse est
            « personne chez nous », l&apos;avantage Wix fond — vous
            paierez un prestataire dans les deux cas.
          </li>
          <li>
            <strong>Si le site doit rapporter des clients, sortez du
            duel</strong> — c&apos;est le cas de tout site dont
            l&apos;acquisition est le premier canal (pour vendre en
            ligne, le match se joue plutôt entre WooCommerce, Shopify
            et le sur-mesure — section 11). Un site
            d&apos;acquisition se conçoit, ne s&apos;assemble pas ;
            en 2026, l&apos;IA a mis le sur-mesure à la portée de
            budgets qui n&apos;y avaient pas accès (section 13). Le
            duel Wix/WordPress ne garde son sens qu&apos;en dessous de
            quelques milliers d&apos;euros.
          </li>
        </ol>
        <p>
          Notre position, en transparence totale : nous ne vendons ni
          Wix, ni WordPress, ni hébergement, et ce guide ne contient{" "}
          <strong>aucun lien d&apos;affiliation</strong> — c&apos;est
          suffisamment rare sur cette requête pour être dit. Notre
          conviction, tout aussi transparente : en 2026, un site
          professionnel qui doit convertir et durer se construit sur
          mesure — le site que vous lisez est lui-même 100 %
          React/Next.js — et nous recommandons Wix ou WordPress quand
          le projet le justifie vraiment — petit budget, projet
          secondaire, test de marché : un client bien orienté revient. Un{" "}
          <strong><Link href="/methode">Discovery Sprint</Link> (1 500 €,
          2 jours, déduit à 100 % si le projet se lance)</strong> tranche
          votre cas sur vos
          chiffres.{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées,
          gratuite et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) : pages support officielles Wix
          (<a href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere" target="_blank" rel="noopener noreferrer">hébergement externe impossible</a>,{" "}
          <a href="https://support.wix.com/en/article/wix-blog-request-exporting-blog-posts-to-other-platforms" target="_blank" rel="noopener noreferrer">export du blog indisponible</a>,
          exports boutique/contacts, renouvellement des domaines,
          tarification géolocalisée) ;{" "}
          <a href="https://wordpress.com/support/import/import-from-wix/" target="_blank" rel="noopener noreferrer">WordPress.com, importateur depuis Wix</a> ;{" "}
          <a href="https://ahrefs.com/blog/wix-seo/" target="_blank" rel="noopener noreferrer">Ahrefs, « Is Wix Good for SEO? » (avec la note de retrait de l&apos;étude 2019)</a> ;{" "}
          <a href="https://www.searchenginejournal.com/google-john-mueller-wordpress-versus-wix/430679/" target="_blank" rel="noopener noreferrer">déclaration de John Mueller (Google) sur Wix</a> ;{" "}
          <a href="https://almanac.httparchive.org/en/2025/cms" target="_blank" rel="noopener noreferrer">HTTP Archive, Web Almanac 2025 (chapitre CMS — Core Web Vitals et scores SEO par plateforme)</a> ;{" "}
          <a href="https://w3techs.com/technologies/overview/content_management" target="_blank" rel="noopener noreferrer">W3Techs, parts de marché des CMS</a> ;{" "}
          <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" target="_blank" rel="noopener noreferrer">Patchstack, State of WordPress Security 2026</a> ;
          grille tarifaire Wix France 2026 et historique des hausses :
          recoupement Tooltester (11/05/2026), La Fabrique du Net,
          CodeYourWeb, Tool Advisor ; hébergement et coûts WordPress :
          o2switch (page comparatif officielle), WPMarmite, ClickDev ;
          prix de création : blog officiel Wix France, La Fabrique du
          Net, Fenxi ; avis utilisateurs : Trustpilot (3,6/5,
          témoignages FR de facturation) et G2 (4,2/5) — témoignages
          individuels, cités comme tels ; e-commerce France : baromètre
          Friends of Presta 2026. Les prix évoluent : vérifiez à la
          source avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Les prix de ce guide sont des tarifs publics constatés,
            donnés à titre indicatif. Wix est une marque de Wix.com
            Ltd ; WordPress est une marque de la WordPress Foundation.
            Ce guide est indépendant : aucun lien d&apos;affiliation,
            aucune commission d&apos;aucun éditeur, hébergeur ou
            plateforme cités.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
