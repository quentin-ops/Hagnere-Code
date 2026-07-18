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

const guide = getGuide("migrer-wordpress-vers-nextjs");

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
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  wordCount: 5120,
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
      "WordPress",
      "SEO technique",
      "Migrations de sites",
      "Architecture headless",
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
      name: "Migrer WordPress vers Next.js",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte une migration de WordPress vers Next.js ?",
    answer:
      "Pour le marché français en 2026 : 4 000 à 9 000 € pour un site vitrine de 10 à 30 pages, 9 000 à 20 000 € pour un site à contenu (blog de 100 à 500 articles, plusieurs types de pages), 20 000 à 50 000 € et au-delà dès qu'une boutique ou des connexions à vos logiciels entrent en jeu. Ces fourchettes sont reconstituées à partir de notre historique de missions et des devis concurrents que nous voyons passer : ce sont des ordres de grandeur, pas un relevé statistique. Deux postes font systématiquement déraper les devis : le contenu enfermé dans un constructeur de pages (Elementor, Divi), qui ne s'exporte pas proprement, et les champs personnalisés non documentés. Exigez que les deux soient audités avant la signature, pas découverts en cours de route.",
  },
  {
    question: "Combien de temps prend la migration ?",
    answer:
      "Les délais qui font consensus dans le secteur : 2 à 4 semaines pour une vitrine de moins de 20 pages, 6 à 10 semaines pour un site à contenu de 100 à 500 articles, 3 à 6 mois pour un gros site à milliers d'articles ou à types de contenus multiples, 2 à 6 mois dès qu'une boutique WooCommerce est concernée — c'est le seul périmètre où le plafond dépasse largement le plancher, parce que le tunnel de commande reste imprévisible tant qu'il n'a pas été audité. Attention à la différence entre le temps de travail et le temps calendaire : sur un site vitrine, une dizaine de jours de développement s'étalent sur trois à quatre semaines, parce que la validation des maquettes et la fourniture des contenus dépendent de vous. Le facteur numéro un d'allongement n'est pas technique, c'est le délai de décision côté client.",
  },
  {
    question: "Vais-je perdre mon référencement Google en migrant ?",
    answer:
      "Non, si les adresses de vos pages sont conservées — et c'est précisément ce que permet Next.js, qui reproduit n'importe quelle structure d'adresses. Google documente le cas : une refonte technique sans changement d'adresses ne demande aucune déclaration et n'entraîne pas de perte attendue. Si des adresses changent, chaque ancienne page doit être redirigée vers son équivalent exact, jamais toutes vers l'accueil (Google requalifie ces redirections en erreurs). Les catastrophes documentées viennent presque toutes de là : un cas publié montre une carte de redirections complète à 87 % qui a coûté 60 % du trafic organique en huit semaines. Notre guide de la refonte sans perte de SEO détaille le protocole complet.",
  },
  {
    question: "Est-ce que je peux garder mes URLs actuelles ?",
    answer:
      "Oui, et c'est la méthode que nous appliquons par défaut. Next.js n'impose aucune structure d'adresses : /mon-article-2019/ peut rester /mon-article-2019/ même si tout change en dessous. C'est le scénario le moins risqué, celui que Google traite comme un simple changement d'infrastructure. Ne changez une adresse que si vous y gagnez réellement — une arborescence illogique, des adresses générées automatiquement, des doublons. Un changement de structure « pour faire propre » vous fait prendre un risque de référencement sans contrepartie. Et ne cumulez jamais migration technique et changement de nom de domaine le même mois : Google demande explicitement de ne changer qu'une chose à la fois.",
  },
  {
    question: "Que devient mon contenu : articles, images, pages ?",
    answer:
      "Il se récupère intégralement, par deux chemins possibles : l'interface de programmation de WordPress (son API, qui expose vos contenus sous forme de données) ou l'export XML classique. Le travail réel n'est pas l'extraction, c'est le nettoyage : les codes courts propriétaires des extensions (les fameux shortcodes entre crochets) doivent être convertis en composants, et le contenu produit par un constructeur de pages arrive sous forme de HTML difficilement exploitable. Un cas français documenté a converti 257 codes courts sur 345 articles. Les images sont ré-hébergées et ré-optimisées automatiquement au passage. Le budget de nettoyage dépend de la variété des mises en page à reconstruire, pas du nombre d'articles (voir la section 5).",
  },
  {
    question: "Mon équipe pourra-t-elle encore modifier le site sans développeur ?",
    answer:
      "Pour le contenu, oui : vos rédacteurs gardent une interface d'édition, soit WordPress conservé en coulisses (voir la question sur le mode « headless »), soit un CMS moderne comme Sanity ou Payload. Pour la structure et les fonctionnalités, non — et c'est le vrai changement à assumer : ce qui était une installation d'extension en trois clics devient des heures de développement. C'est une contrainte, mais c'est aussi ce qui empêche votre site de devenir l'empilement de 37 extensions qui l'a ralenti. À cadrer au contrat : combien d'évolutions par an, à quel tarif, avec quel délai d'intervention.",
  },
  {
    question: "Peut-on garder WordPress juste pour l'administration (headless) ?",
    answer:
      "Oui, c'est la voie la plus douce pour une équipe éditoriale, et celle qu'a choisie Kit (ex-ConvertKit) pour son site de plus de 1 000 pages. WordPress reste l'interface d'administration où vos rédacteurs écrivent ; Next.js construit le site que voient vos visiteurs. Avantages : zéro migration de contenu, zéro reformation. Limites à connaître : vous payez et maintenez deux environnements au lieu d'un, la surface d'attaque des extensions demeure côté administration, les constructeurs de pages type Elementor ne pilotent plus l'affichage, et la prévisualisation avant publication demande un travail spécifique. C'est un choix d'organisation autant que de technique.",
  },
  {
    question: "Que deviennent mes formulaires de contact ?",
    answer:
      "Ils sont reconstruits — le plus souvent en mieux. Un formulaire WordPress passe par une extension qui charge son propre code sur toutes vos pages ; un formulaire React est intégré à la page, se valide instantanément, et envoie directement vers votre boîte mail ou votre CRM via un service d'envoi dédié. L'anti-spam se traite sans dépendre d'un service tiers qui ralentit l'affichage. Le point de vigilance est budgétaire : chaque formulaire, chaque champ conditionnel et chaque destinataire doit figurer dans le périmètre du devis. Un « formulaire de contact » ne coûte pas la même chose qu'un parcours de demande de devis en quatre étapes.",
  },
  {
    question: "J'ai une boutique WooCommerce, est-ce que ça se migre ?",
    answer:
      "C'est le cas le plus délicat, et nous préférons le dire avant de vendre : le catalogue et les fiches produit se migrent très bien, mais le panier, le tunnel de paiement, les comptes clients et l'authentification posent de vraies difficultés en mode découplé — le support des interfaces de programmation y est partiel, et les développeurs qui s'y sont frottés le documentent abondamment. Trois options honnêtes : garder WooCommerce tel quel si la boutique fonctionne ; ne migrer que la partie éditoriale et la vitrine, en laissant la boutique où elle est ; ou traiter l'e-commerce comme un projet à part entière avec un vrai moteur de commerce. La section 6 les détaille, et notre guide du prix d'un site e-commerce les chiffre.",
  },
  {
    question: "Et mes extensions (Yoast, cache, sécurité) ?",
    answer:
      "Elles ne suivent pas — et la bonne nouvelle, c'est que la plupart deviennent inutiles. Les extensions de cache et d'optimisation ne servent plus : un site Next.js est pré-généré, donc déjà rapide. Les extensions de sécurité non plus : il n'y a plus de PHP ni de base de données exposée à attaquer côté visiteurs. Une exception : en architecture A, où WordPress est conservé en coulisses, l'administration reste exposée et doit rester protégée et mise à jour. Les fonctions de référencement de Yoast (balises, plan du site, données structurées) sont reprises dans le code, souvent plus finement. Restent les extensions vraiment métier — réservation, calculateur, espace membre — qui doivent être remplacées par du code ou un service : c'est là que se joue le coût réel, et c'est l'audit à faire avant de signer.",
  },
  {
    question: "Quand est-ce une mauvaise idée de migrer ?",
    answer:
      "Cinq situations, que nous refusons régulièrement. Un WordPress récent et rapide (Core Web Vitals au vert) : réparez plutôt que reconstruire. Un budget sous 4 000 € : la migration serait bâclée là où elle demande de la rigueur. Une équipe éditoriale nombreuse qui publie tous les jours avec prévisualisation instantanée et constructeur visuel : le confort perdu peut coûter plus que la vitesse gagnée. Une boutique WooCommerce imbriquée avec des extensions métier sans équivalent. Enfin, une refonte purement esthétique : changer de design ne nécessite pas de changer de socle. Le référent grand public de WordPress lui-même écrit que la majorité des petites entreprises n'ont pas besoin du mode découplé — nous le confirmons.",
  },
  {
    question: "Serai-je dépendant de l'agence après la migration ?",
    answer:
      "Moins qu'avec WordPress, à une condition contractuelle près. Techniquement, React et Next.js forment l'écosystème le plus répandu du développement web : n'importe quel développeur React reprend un projet propre, là où un WordPress bourré d'extensions premium et d'un thème modifié à la main est souvent plus captif qu'il n'y paraît. Juridiquement, en revanche, rien n'est automatique : en droit français, payer ne rend pas propriétaire du code. Exigez une clause de cession des droits conforme à l'article L131-3 du Code de la propriété intellectuelle, le dépôt du code — le coffre en ligne où le code source est stocké, de type GitHub — sur un compte à votre nom, et le nom de domaine enregistré au vôtre.",
  },
  {
    question: "Peut-on revenir en arrière si ça ne convient pas ?",
    answer:
      "Oui, et le plan de retour arrière doit figurer au contrat. Pendant toute la transition, l'ancien site reste en place sur son hébergement : la bascule se fait par un changement de configuration réversible en quelques heures. Le retour est encore plus simple si WordPress a été conservé en coulisses, puisque vos contenus n'ont jamais quitté leur base. Nous gardons systématiquement l'ancien environnement actif pendant au moins un mois après la bascule, avec les redirections en place. Un prestataire qui ne prévoit ni plan de retour arrière ni conservation de l'ancien site vous fait prendre un risque inutile — c'est une question à poser avant de signer.",
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
          { label: "Migrer WordPress vers Next.js" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les prix en euros, le protocole SEO adossé à la documentation de Google, le tableau de ce qui casse et de son remplacement, le coût total sur 3 ans — et les cinq situations où nous refusons la mission. Le guide complet, sources à l'appui."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Adresses conservées = risque de référencement quasi nul", description: "", color: "violet" },
          { number: "02", title: "91 % des failles WordPress viennent des extensions", description: "", color: "blue" },
          { number: "03", title: "4 000 à 45 000 € hors boutique en ligne", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/refonte-sans-perdre-son-seo", label: "Refonte sans perdre son SEO" },
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte" },
          { href: "/guides/cout-maintenance-site-internet", label: "Coût de la maintenance" },
          { href: "/services/sites-vitrines", label: "Sites vitrines" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Migration WordPress → Next.js : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Votre WordPress rame, chaque mise à jour vous fait retenir votre
          souffle, et on vous parle de « passer en React ». Avant
          d&apos;engager 10 000 €, une question mérite une réponse
          chiffrée : <strong>qu&apos;est-ce que vous y gagnez
          vraiment, et à quel risque ?</strong> Ce guide donne les deux
          — y compris les cas où la bonne décision est de ne pas
          migrer.
        </p>

        <InfoBox variant="amber" title="Les 13 mots de ce guide, traduits en français courant">
          <strong>CMS</strong> : le logiciel qui vous permet de modifier
          votre site sans coder (WordPress en est un).{" "}
          <strong>Next.js</strong> : la technologie moderne de
          construction de sites que nous utilisons, bâtie sur React.{" "}
          <strong>React</strong> : la bibliothèque de développement la
          plus répandue du web, créée par Meta.{" "}
          <strong>Headless (« découplé »)</strong> : garder WordPress
          pour écrire, mais afficher le site avec une autre
          technologie. <strong>API</strong> : le passe-plat numérique
          par lequel deux logiciels s&apos;échangent des données.{" "}
          <strong>Statique</strong> : un site pré-généré une fois pour
          toutes, donc affiché instantanément.{" "}
          <strong>Gabarit (modèle de page)</strong> : la mise en page
          réutilisée par toute une famille de pages — vos 40 fiches
          produit partagent en général un seul gabarit. C&apos;est le
          nombre de gabarits, pas le nombre de pages, qui fixe le
          prix.{" "}
          <strong>Plugin (extension)</strong> : un module ajouté à
          WordPress pour lui donner une fonction.{" "}
          <strong>Redirection 301</strong> : le panneau « déménagé
          définitivement » qui envoie une ancienne adresse vers la
          nouvelle. <strong>Core Web Vitals</strong> : les trois
          mesures officielles de Google sur la vitesse et la stabilité
          d&apos;une page. <strong>Lighthouse</strong> : l&apos;outil
          gratuit de Google qui note la qualité technique d&apos;un
          site sur 100. <strong>TTFB</strong> : le délai avant que le
          serveur commence à répondre.{" "}
          <strong>TCO (coût total de possession)</strong> : ce que le
          site coûte réellement sur plusieurs années, création et
          récurrent compris.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "pourquoi-migrer", label: "2. Les 4 raisons qui tiennent (et celles qui ne tiennent pas)" },
            { id: "securite", label: "3. Sécurité : ce que 11 334 vulnérabilités disent vraiment" },
            { id: "trois-architectures", label: "4. Les 3 architectures cibles, arbitrées" },
            { id: "ce-qui-casse", label: "5. Ce qui casse, et ce qui le remplace" },
            { id: "woocommerce", label: "6. WooCommerce : le cas qu'il faut traiter à part" },
            { id: "seo", label: "7. Le protocole SEO zéro perte, sourcé Google" },
            { id: "etapes", label: "8. Les étapes réelles, de J-30 à J+60" },
            { id: "prix", label: "9. Combien ça coûte vraiment, en euros" },
            { id: "tco", label: "10. Le coût total sur 3 ans : le calcul qui décide" },
            { id: "resultats", label: "11. Les gains mesurés : 4 cas publics chiffrés" },
            { id: "equipe", label: "12. Et votre équipe marketing, dans tout ça ?" },
            { id: "quand-ne-pas-migrer", label: "13. Les 5 cas où nous vous dirons non" },
            { id: "contrat", label: "14. Le volet contractuel : propriété et réversibilité" },
            { id: "verdict-par-profil", label: "15. Le verdict, profil par profil" },
            { id: "methode", label: "16. Méthode : décider en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          Migrer de WordPress vers Next.js consiste à{" "}
          <strong>remplacer le moteur qui fabrique vos pages, sans
          toucher aux adresses auxquelles Google les a
          indexées</strong>. Compter{" "}
          <strong>4 000 à 9 000 € pour une vitrine, 9 000 à 20 000 €
          pour un site à contenu, 20 000 à 50 000 € et au-delà avec une
          boutique</strong>, sur 2 semaines à 6 mois selon la taille. Le
          risque de référencement est <strong>quasi nul si les adresses
          sont conservées</strong> — ce que Next.js permet toujours —
          et devient réel dès qu&apos;on les change sans plan de
          redirection.
        </p>
        <p>
          Les trois gains qui tiennent : la <strong>vitesse</strong>{" "}
          (donc la conversion et le référencement), la{" "}
          <strong>sécurité</strong> (91 % des failles WordPress
          proviennent des extensions, un poste qui disparaît), et le{" "}
          <strong>coût récurrent</strong> (ni licences d&apos;extensions
          ni maintenance de sécurité hebdomadaire). Le gain qui ne
          tient pas : « WordPress est mort ». Il fait toujours tourner{" "}
          <strong>41,2 % des sites du web</strong> (relevé W3Techs du
          18 juillet 2026) — il recule lentement, il ne s&apos;effondre
          pas.
        </p>
        <GuideTable
          headers={["Votre situation", "Verdict", "Budget d'ordre de grandeur"]}
          rows={[
            ["Vitrine lente, peu de contenu, refonte déjà envisagée", "Migrez — c'est le cas le plus rentable", "4 000 – 9 000 €"],
            ["Blog ou site à contenu, 100 à 500 articles, SEO stratégique", "Migrez, adresses conservées", "9 000 – 20 000 €"],
            ["Équipe éditoriale nombreuse, publication quotidienne", "Mode découplé : gardez WordPress pour écrire", "12 000 – 25 000 €"],
            ["Boutique WooCommerce au cœur du chiffre d'affaires", "Projet séparé — ne le traitez pas comme une migration", "20 000 – 50 000 €+"],
            ["WordPress récent, Core Web Vitals au vert", "Ne migrez pas — optimisez l'existant", "0 €"],
          ]}
        />

        <h2 id="pourquoi-migrer">2. Les 4 raisons qui tiennent (et celles qui ne tiennent pas)</h2>
        <p>
          Commençons par écarter les mauvaises raisons, parce
          qu&apos;elles sont les plus répandues dans les argumentaires
          commerciaux. « WordPress est dépassé » : faux, 41,2 % du web
          en juillet 2026, et un recul de deux points en un an — c&apos;est
          un plafonnement, pas une disparition. « Next.js est 40 à 60 %
          plus rapide » : ce chiffre circule de blog en blog sans
          protocole de mesure publié ; nous ne le reprenons pas. « Vous
          serez mieux classé sur Google » : Google écrit que la
          vitesse est « utilisée par nos systèmes de classement » mais
          ne garantit aucun gain de position — la pertinence du contenu
          prime toujours.
        </p>
        <p>Les quatre raisons qui résistent à l&apos;examen :</p>
        <ul>
          <li>
            <strong>La vitesse, et ce qu&apos;elle rapporte.</strong>{" "}
            L&apos;étude de référence a été menée par Deloitte pour
            Google sur 37 marques et environ 30 millions de sessions
            mobiles, en 2020. Elle mesure qu&apos;un dixième de seconde
            gagné au chargement fait progresser les conversions de
            8,4 % dans le commerce, et les formulaires soumis de
            21,6 % en génération de contacts — c&apos;est ce second
            chiffre qui vous concerne si votre site sert à obtenir des
            demandes de devis. Sur le cas Kit documenté en section 11,
            le chargement passe de 3-4 secondes à 1,5 seconde, soit
            environ deux secondes reprises au visiteur. Attention
            toutefois à la règle de trois : ce gain ne se multiplie
            pas par vingt quand on reprend deux secondes.
            L&apos;effet s&apos;atténue à mesure que le site devient
            rapide, et l&apos;étude ne mesure que la plage
            qu&apos;elle a observée. Retenez l&apos;ordre de
            grandeur — la vitesse se paie en demandes de devis — pas
            un pourcentage à reporter dans un plan d&apos;affaires.
          </li>
          <li>
            <strong>La sécurité par soustraction.</strong> Un site
            pré-généré n&apos;interroge aucune base de données et
            n&apos;exécute aucun code sur le serveur au moment de la
            visite : il n&apos;y a tout simplement plus grand-chose à
            attaquer. Le détail des chiffres est en section 3.
          </li>
          <li>
            <strong>Le coût récurrent.</strong> Plus de licences
            d&apos;extensions premium (couramment 500 à 1 000 €/an sur
            un site professionnel), plus de forfait de maintenance de
            sécurité, un hébergement qui tombe souvent sous 20 €/mois.
            Le calcul complet est en section 10.
          </li>
          <li>
            <strong>La liberté de construction.</strong> C&apos;est la
            raison la moins citée et souvent la plus décisive : sur un
            thème WordPress, vous composez avec ce que le thème a
            prévu. En React, l&apos;interface est dessinée pour votre
            marque — animations, interactions, mise en page — sans
            demander la permission à un constructeur de pages. Le site
            que vous lisez est construit exactement ainsi, en 100 %
            Next.js.
          </li>
        </ul>
        <InfoBox variant="blue" title="La question qui tranche">
          Votre site est-il un <strong>coût de fonctionnement</strong>{" "}
          (il faut qu&apos;il existe, il ne rapporte rien directement)
          ou un <strong>actif d&apos;acquisition</strong> (il fait
          venir des clients que vous ne connaissiez pas) ? Dans le
          premier cas, un WordPress correctement entretenu suffit et
          la migration serait une dépense de confort. Dans le second,
          chaque dixième de seconde et chaque point de référencement
          se traduit en euros — et le calcul sur 3 ans de la section 10
          penche presque toujours du côté du sur-mesure, dont
          l&apos;assistance par IA a fait baisser le coût de
          construction.
        </InfoBox>

        <h2 id="securite">3. Sécurité : ce que 11 334 vulnérabilités disent vraiment</h2>
        <p>
          Le rapport annuel de Patchstack sur la sécurité de
          l&apos;écosystème WordPress, publié en 2026 sur les données
          2025, donne les chiffres les plus utiles du débat —
          à condition de les lire correctement.
        </p>
        <GuideTable
          headers={["Chiffre 2025", "Valeur", "Ce que ça signifie pour vous"]}
          rows={[
            ["Nouvelles vulnérabilités recensées", "11 334 (+42 % vs 2024)", "Le rythme s'accélère : 5 948 en 2023, 7 966 en 2024"],
            ["Part venant des extensions", "91 % (8 % pour les thèmes, moins de 1 % pour le cœur)", "Le cœur de WordPress n'est pas le problème — son écosystème l'est"],
            ["Failles dans le cœur de WordPress", "6, toutes de basse priorité", "WordPress lui-même est solidement maintenu"],
            ["Failles sans correctif au moment de la publication", "46 %", "Mettre à jour ne suffit pas : parfois il n'y a rien à installer"],
            ["Délai médian avant exploitation de masse", "5 heures", "Une mise à jour hebdomadaire arrive trop tard"],
            ["Attaques bloquées par les protections d'hébergeur", "26 %", "L'hébergement seul ne protège pas"],
            ["Extensions payantes concernées", "1 983 failles, dont 76 % exploitables", "Payer ses extensions ne met pas à l'abri"],
          ]}
        />
        <p>
          La lecture honnête de ce tableau n&apos;est pas « WordPress
          est dangereux ». C&apos;est : <strong>le risque est
          proportionnel au nombre d&apos;extensions installées, et il
          se gère par un travail hebdomadaire réel</strong>. Un
          WordPress à cinq extensions, surveillé par un prestataire
          sérieux, est un risque maîtrisé — pas un risque nul : 46 %
          des failles n&apos;ont aucun correctif disponible le jour où
          elles sont publiées. Un WordPress à trente-sept
          extensions dont personne ne s&apos;occupe est une question
          de temps. Trente-sept, c&apos;est exactement le point de
          départ du cas français que nous chiffrons en section 11. Et
          le délai médian de cinq heures avant
          exploitation explique pourquoi les mises à jour
          « quand j&apos;y pense » ne suffisent plus. Notre{" "}
          <Link href="/guides/cout-maintenance-site-internet">guide du
          coût de la maintenance</Link> chiffre ce travail : c&apos;est
          exactement ce poste qui disparaît après une migration vers un
          site statique.
        </p>
        <p>
          Nuance que nous devons à l&apos;honnêteté : la « maintenance
          zéro » n&apos;existe pas. Un site Next.js a des dépendances
          logicielles à mettre à jour, quelques heures par an. La
          différence est d&apos;ordre de grandeur, pas de nature :
          l&apos;entretien passe d&apos;une vigilance hebdomadaire
          obligatoire à une révision annuelle tranquille.
        </p>

        <h2 id="trois-architectures">4. Les 3 architectures cibles, arbitrées</h2>
        <p>
          « Migrer vers Next.js » recouvre trois projets très
          différents, dont le coût et les conséquences pour votre
          équipe n&apos;ont rien à voir. Personne ne les arbitre
          clairement pour un dirigeant : voici notre grille.
        </p>
        <GuideTable
          headers={["Architecture", "Principe", "Pour qui", "Coût récurrent type"]}
          rows={[
            ["A. WordPress conservé en coulisses", "Vos rédacteurs gardent l'interface WordPress ; Next.js fabrique le site public", "Équipe éditoriale nombreuse, refus de changer d'outil", "Hébergement WordPress (7 – 25 €/mois) + hébergement Next.js (0 – 20 €/mois)"],
            ["B. CMS moderne dédié", "Le contenu déménage dans un outil pensé pour cela (Sanity, Payload, Strapi)", "Site à contenu structuré, envie d'un outil d'édition moderne", "0 à 15 $/utilisateur/mois selon l'outil et l'équipe"],
            ["C. Contenu dans le code", "Les pages sont des fichiers versionnés, aucun back-office", "Vitrine stable, contenu qui bouge peu, priorité au coût et à la vitesse", "0 – 20 €/mois, licences nulles"],
          ]}
        />
        <p>
          <strong>L&apos;architecture A</strong> est la moins
          brutale : aucune migration de contenu, aucune reformation.
          C&apos;est le chemin qu&apos;a suivi Kit (ex-ConvertKit) pour
          son site de plus de mille pages. Elle a deux coûts cachés :
          vous payez et maintenez deux environnements, et la surface
          d&apos;attaque des extensions reste présente côté
          administration. Les constructeurs visuels type Elementor —
          installés sur 31,4 % des sites WordPress selon W3Techs — ne
          pilotent plus l&apos;affichage : c&apos;est souvent le point
          de rupture avec l&apos;équipe marketing.
        </p>
        <p>
          <strong>L&apos;architecture B</strong> est la plus propre à
          moyen terme : modèle de contenu pensé pour votre métier,
          éditeur moderne, plus une ligne de PHP — le langage de
          programmation sur lequel WordPress est bâti. C&apos;est le choix
          de Personio (avec Contentful). Elle suppose une vraie
          migration de contenu et une reformation de l&apos;équipe.
          Attention aux marches tarifaires : Sanity démarre gratuit et
          passe à 15 $ par utilisateur et par mois, quand Contentful
          saute directement à 300 €/mois au premier palier payant.
          Payload, gratuit et auto-hébergeable, a été racheté par
          Figma en 2026 et son offre hébergée n&apos;accepte plus de
          nouveaux clients — un rappel utile que dépendre d&apos;un
          service tiers est un pari.
        </p>
        <p>
          <strong>L&apos;architecture C</strong> est la moins chère et
          la plus rapide, mais elle a un prix organisationnel clair :
          publier passe par un développeur ou par un dépôt de code —
          le coffre en ligne où le code source est stocké et
          historisé, de type GitHub.
          Elle convient aux vitrines dont le contenu bouge quelques
          fois par an, pas à un site qui publie chaque semaine. Nous ne
          la proposons jamais sans avoir passé le test éditorial de la
          section 12.
        </p>
        <p>
          Une question revient systématiquement :{" "}
          <strong>où le site est-il hébergé après la
          migration ?</strong> Les plateformes spécialisées (Vercel,
          Netlify) sont les plus simples, mais américaines. Un
          hébergement français — OVHcloud, Scaleway, Clever Cloud —
          coûte 10 à 30 €/mois de plus et règle la question de la
          souveraineté des données. Nous hébergeons par défaut en
          France.
        </p>

        <h2 id="ce-qui-casse">5. Ce qui casse, et ce qui le remplace</h2>
        <p>
          Règle générale : toute extension qui injecte quelque chose
          dans vos pages publiques cesse de fonctionner. Chaque ligne ci-dessous est
          un poste de devis — s&apos;il n&apos;y figure pas, il sera
          facturé en cours de route.
        </p>
        <GuideTable
          headers={["Ce que vous aviez", "Ce qui se passe", "Le remplacement"]}
          rows={[
            ["Formulaires (Contact Form 7, Gravity Forms)", "Ne fonctionnent plus côté public", "Formulaire React + service d'envoi d'e-mails (souvent plus rapide et mieux relié à votre CRM, le logiciel où sont stockés vos contacts et vos affaires en cours)"],
            ["Extensions de cache et d'optimisation", "Deviennent inutiles", "Rien : le site est pré-généré, donc déjà rapide"],
            ["Extensions de sécurité et pare-feu", "Deviennent inutiles côté public", "Rien côté visiteurs ; l'administration reste à protéger en architecture A"],
            ["Yoast / Rank Math (SEO)", "Ne s'appliquent plus au site public", "Balises, plan du site et données structurées écrits dans le code, plus finement"],
            ["Recherche interne WordPress", "Disparaît du site public", "Moteur de recherche dédié (Algolia, Meilisearch) ou index local"],
            ["Commentaires natifs", "Ne s'affichent plus sans travail spécifique", "Service de commentaires externe ou développement dédié"],
            ["Multilingue (WPML, Polylang)", "À réimplémenter", "Gestion des langues native de Next.js + balises hreflang à reproduire — le marquage qui indique à Google quelle version linguistique servir à qui"],
            ["E-mails automatiques (wp_mail)", "Disparaissent avec le site public", "Service d'envoi transactionnel (Resend, Postmark, Brevo)"],
            ["Constructeur de pages (Elementor, Divi)", "Ne pilote plus l'affichage", "Composants sur mesure — c'est le poste de conversion le plus lourd"],
            ["Suivi d'audience (Google Analytics, Tag Manager, pixels publicitaires)", "Les extensions qui les injectaient disparaissent", "À réinstaller dans le code — poste à exiger au devis, sous peine de perdre toute mesure le jour de la bascule"],
            ["Bandeau cookies et consentement RGPD (Axeptio, Complianz)", "Ne s'affiche plus", "Composant de consentement réintégré — obligation légale, pas une option"],
            ["WooCommerce", "Cas particulier", "Voir la section 6 : à traiter comme un projet distinct"],
          ]}
        />
        <InfoBox variant="amber" title="Le piège qui fait exploser les devis">
          Le contenu produit par un constructeur de pages n&apos;est
          pas du texte propre : c&apos;est un empilement de balises
          générées. Un article écrit dans l&apos;éditeur standard se
          migre automatiquement ; une page composée dans Elementor se
          reconstruit à la main. Avant de signer, demandez à votre
          prestataire de <strong>compter vos gabarits de pages
          distincts</strong> — pas vos pages. Dix gabarits sur trois
          cents pages, c&apos;est un projet maîtrisé ; trente gabarits
          sur quarante pages, c&apos;est un devis qui va déraper.
        </InfoBox>

        <h2 id="woocommerce">6. WooCommerce : le cas qu&apos;il faut traiter à part</h2>
        <p>
          Nous préférons perdre une mission que la vendre mal.
          <strong> Une boutique WooCommerce ne se migre pas comme un
          site éditorial</strong>, et les guides qui l&apos;expédient
          en une phrase rendent un mauvais service.
        </p>
        <p>
          Ce qui se migre bien : le catalogue, les fiches produit, les
          pages de catégories, tout ce qui s&apos;affiche. Les gains y
          sont réels, plusieurs éditeurs mesurant des temps de
          chargement divisés par deux sur les pages produit. Ce qui
          résiste : le panier, le tunnel de paiement, les comptes
          clients et l&apos;authentification. Le support des interfaces
          de programmation y est partiel, et les développeurs qui
          s&apos;y frottent documentent abondamment leurs difficultés,
          notamment sur la gestion des sessions clients. Il faut
          également continuer à héberger et maintenir le WordPress qui
          porte les commandes, avec les pics de trafic qui tapent
          désormais sur ses interfaces de programmation.
        </p>
        <p>
          Trois chemins honnêtes existent, par ordre de risque
          croissant :
        </p>
        <ul>
          <li>
            <strong>Garder WooCommerce tel quel</strong> si la boutique
            fonctionne correctement.
          </li>
          <li>
            <strong>Ne migrer que la partie éditoriale et la
            vitrine</strong>, en laissant la boutique où elle est.
          </li>
          <li>
            <strong>Traiter l&apos;e-commerce comme un projet à part
            entière</strong>, avec un vrai moteur de commerce sous une
            façade sur mesure.
          </li>
        </ul>
        <p>
          Notre{" "}
          <Link href="/guides/prix-site-e-commerce">guide du prix
          d&apos;un site e-commerce</Link> chiffre les trois, et notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">comparatif
          WooCommerce ou Shopify</Link> aide à trancher le socle avant
          de parler technique.
        </p>

        <GuideInlineCTA
          title="Vous hésitez sur l'architecture à viser ?"
          description="Décrivez votre site actuel en 3 minutes — nombre de pages, extensions critiques, équipe éditoriale. Nous vous répondons personnellement sous 24 h ouvrées avec un avis argumenté, y compris s'il consiste à vous dire de rester sur WordPress."
        />

        <h2 id="seo">7. Le protocole SEO zéro perte, sourcé Google</h2>
        <p>
          C&apos;est la peur numéro un, et c&apos;est celle qui se
          traite le mieux — parce que Google publie la marche à
          suivre. Voici ce que dit sa documentation, au mot près.
        </p>
        <ul>
          <li>
            <strong>Les redirections permanentes ne font perdre aucune
            autorité.</strong> Google écrit que les redirections 301
            « ne causent pas de perte de PageRank » — le PageRank étant
            la note d&apos;autorité que Google attribue à chaque page.
            Le folklore des
            « 90 % d&apos;autorité transmise » est mort depuis 2016 :
            il n&apos;a jamais eu de source officielle.
          </li>
          <li>
            <strong>Conservez les redirections au moins un an.</strong>{" "}
            Google doit voir la redirection plusieurs fois avant
            d&apos;enregistrer le changement. Les garder plus longtemps
            ne pose aucun problème.
          </li>
          <li>
            <strong>Ne redirigez jamais tout vers l&apos;accueil.</strong>{" "}
            Google requalifie ces redirections en erreurs et
            désindexe. Chaque adresse va vers son équivalent exact, ou
            renvoie une vraie page introuvable.
          </li>
          <li>
            <strong>Ne changez qu&apos;une chose à la fois.</strong>{" "}
            Cumuler migration technique, refonte des adresses et
            changement de domaine oblige Google à réévaluer chaque
            page : c&apos;est le scénario qui coûte du trafic.
          </li>
          <li>
            <strong>Comptez quelques semaines de fluctuations.</strong>{" "}
            Sur un site de taille petite ou moyenne, la plupart des
            pages sont retraitées en quelques semaines ; les
            variations de positions pendant cette fenêtre sont
            normales et documentées.
          </li>
        </ul>
        <p>
          Le cas d&apos;échec le plus instructif est public : une carte
          de redirections complétée à 87 % sur un site de 5 000 pages a
          coûté 60 % du trafic organique en huit semaines. Les 13 %
          manquants n&apos;étaient pas des pages secondaires.
          C&apos;est la longue traîne qui saigne en premier : ces
          centaines de pages qui ne font que deux ou trois visites par
          mois chacune, mais qui pèsent lourd une fois additionnées. À
          l&apos;inverse, une migration française documentée sur 345
          articles a posé 102 redirections et transféré 485 balises de
          référencement, sans perte constatée.
        </p>
        <InfoBox variant="emerald" title="Le scénario le moins risqué, et pourquoi c'est le nôtre">
          <strong>Conserver les adresses à l&apos;identique.</strong>{" "}
          Next.js n&apos;impose aucune structure : votre
          /nos-services/plomberie-chambery/ reste exactement le même
          après la migration. Google traite alors l&apos;opération
          comme un simple changement d&apos;infrastructure — rien à
          déclarer, aucune perte attendue, aucun outil à activer dans
          la Search Console — le tableau de bord gratuit où Google
          vous montre comment il voit votre site. C&apos;est notre
          méthode par défaut, et
          nous ne modifions une adresse que lorsque le gain est
          démontrable. Le protocole complet, avec les seuils
          d&apos;alerte à surveiller, est dans notre{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">guide de la
          refonte sans perdre son SEO</Link>.
        </InfoBox>

        <h2 id="etapes">8. Les étapes réelles, de J-30 à J+60</h2>
        <p>
          Une migration se déroule en huit temps : environ 30 jours de
          chantier avant la bascule, puis 60 jours de surveillance et
          de bilan après. Les délais indiqués valent pour une vitrine
          de 10 à 30 pages — la fourchette de 2 à 4 semaines de la
          section 9. Comptez 6 à 10 semaines pour un site à contenu de
          100 à 500 articles, et 3 à 6 mois au-delà de mille pages. Les fourchettes commerciales de la
          section 9 ne comptent, elles, que la phase de chantier.
        </p>
        <ol>
          <li>
            <strong>Inventaire et photographie de l&apos;existant
            (J-30 à J-21).</strong> Exploration complète du site pour
            lister 100 % des adresses, export des données de la Search
            Console sur seize mois, relevé des positions et du trafic
            avant travaux. Sans cette photographie, vous ne pourrez
            jamais prouver ce que la migration a changé.
          </li>
          <li>
            <strong>Carte des adresses, une par une (J-21 à J-14).</strong>{" "}
            Chaque ancienne adresse est associée à sa nouvelle, en
            commençant par les pages qui font du trafic. Google demande
            explicitement cette correspondance.
          </li>
          <li>
            <strong>Récupération et nettoyage des contenus (J-21 à
            J-7).</strong> Extraction par l&apos;interface de
            programmation de WordPress, conversion des codes courts
            (ces raccourcis entre crochets que les extensions insèrent
            dans vos articles), ré-hébergement des images.
          </li>
          <li>
            <strong>Construction et recette (J-14 à J-3).</strong>{" "}
            La recette, c&apos;est la phase de tests et de validation
            avant la mise en ligne.
            Développement des pages, puis tests systématiques : liens,
            formulaires, affichage sur mobile et tablette, mesures
            Lighthouse. Point de contrôle non négociable : vérifier
            qu&apos;aucune instruction « ne pas indexer » du site de
            test ne part en production — c&apos;est l&apos;erreur la
            plus fréquente, et Google la liste lui-même.
          </li>
          <li>
            <strong>Gel éditorial (J-7 à J).</strong> Votre équipe
            continue de publier normalement jusqu&apos;à J-7 ; les
            articles parus après l&apos;extraction initiale sont
            repris juste avant la bascule. Un chantier de six semaines
            n&apos;impose pas six semaines sans publier — mais la
            dernière semaine, oui.
          </li>
          <li>
            <strong>Bascule (jour J).</strong> Abaissement du TTL DNS
            la veille — le TTL est le délai pendant lequel les
            fournisseurs d&apos;accès gardent en mémoire
            l&apos;adresse de votre serveur ; on le raccourcit pour
            que la bascule soit quasi instantanée au lieu de traîner
            deux jours. Puis bascule, et
            propagation de quelques heures à 48 h. L&apos;ancien site
            reste en place, éteint mais prêt à être rallumé. Point de
            contrôle souvent oublié : la bascule ne doit toucher que
            les enregistrements qui pointent vers le site. Vos
            enregistrements de messagerie (MX, SPF, DKIM) restent
            inchangés — les modifier, même par inadvertance, coupe la
            messagerie de toute l&apos;entreprise le jour même.
            Exigez que la configuration du domaine avant et après soit
            produite par écrit et validée avant la bascule.
          </li>
          <li>
            <strong>Surveillance rapprochée (J+1 à J+30).</strong>{" "}
            Soumission du nouveau plan du site, contrôle quotidien des
            pages en erreur, de la couverture d&apos;indexation et des
            positions. C&apos;est là qu&apos;on rattrape une
            redirection oubliée avant qu&apos;elle ne coûte quelque
            chose.
          </li>
          <li>
            <strong>Bilan (J+30 à J+60).</strong> Comparaison avec la
            photographie initiale, correction des dernières pages
            introuvables, mesure des gains de vitesse en conditions
            réelles.
          </li>
        </ol>

        <h2 id="prix">9. Combien ça coûte vraiment, en euros</h2>
        <p>
          C&apos;est le grand vide de la recherche française : les
          guides anglophones chiffrent en livres ou en dollars, et la
          seule page française qui donnait des euros était hors ligne
          au moment de notre relevé du 18 juillet 2026. Les
          fourchettes ci-dessous sont donc reconstituées à partir de
          notre propre historique de missions et des devis concurrents
          que nous voyons passer : des ordres de grandeur, pas un
          relevé statistique.
        </p>
        <GuideTable
          headers={["Périmètre", "Fourchette France 2026", "Délai", "Ce qui fait varier"]}
          rows={[
            ["Vitrine 10 – 30 pages", "4 000 – 9 000 €", "2 – 4 semaines", "Nombre de gabarits, refonte du design ou non"],
            ["Site à contenu, 100 – 500 articles", "9 000 – 20 000 €", "6 – 10 semaines", "Contenu en constructeur de pages, multilingue"],
            ["Mode découplé (WordPress conservé en coulisses)", "12 000 – 25 000 €", "6 – 12 semaines", "Deux environnements à maintenir, prévisualisation à recâbler"],
            ["Site complexe, milliers de pages", "20 000 – 45 000 €", "3 – 6 mois", "Types de contenus multiples, intégrations métier"],
            ["Boutique (projet séparé)", "20 000 – 50 000 €+", "2 – 6 mois", "Tunnel de commande, connexion au logiciel de gestion"],
            ["Migration seule, sans refonte du design", "4 000 – 8 000 €", "2 – 4 semaines", "Le design existant est reproduit à l'identique"],
          ]}
        />
        <p>
          La répartition d&apos;un devis, telle qu&apos;elle se
          présente chez les prestataires sérieux : design et
          maquettes 25 à 35 %, migration des contenus 20 à 30 %,
          développement et intégrations 25 à 35 %, référencement et
          recette 10 à 15 %. Si l&apos;une de ces lignes manque, elle
          n&apos;a pas disparu du projet — elle a disparu du devis, et
          vous la paierez plus tard. Ces fourchettes se compensent
          d&apos;un projet à l&apos;autre : un site au design conservé
          bascule son budget vers la migration des contenus, et
          l&apos;inverse.
        </p>
        <p>
          Chez <Link href="/services/sites-vitrines">Hagnéré Code</Link>,
          une migration entre dans notre grille publique — 6 900 €,
          14 900 € ou 22 000 € et plus selon le périmètre — au forfait
          fixe contractuel, plan de redirection, note Lighthouse
          mobile de 95 minimum et garantie 30 jours après la mise en
          ligne inclus. Le détail de ce que nous construisons sur ce
          socle est sur notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link>. Notre{" "}
          <Link href="/guides/prix-refonte-site-internet">guide du prix
          d&apos;une refonte</Link> détaille comment lire et comparer
          deux devis à périmètre égal.
        </p>

        <h2 id="tco">10. Le coût total sur 3 ans : le calcul qui décide</h2>
        <p>
          Comparer un devis de migration au « zéro euro » de garder son
          WordPress est un faux calcul : garder WordPress a un coût
          récurrent bien réel. Ce qu&apos;il faut comparer, c&apos;est
          le coût total de possession (TCO) : tout ce que le site
          coûte sur trois ans, création et récurrent compris. Voici
          les deux colonnes, sur un site professionnel de taille
          moyenne.
        </p>
        <FormulaBox>
          {`GARDER LE WORDPRESS EXISTANT — 3 ans
  Hébergement infogéré                    900 – 2 500 €
  Licences d'extensions premium         1 500 – 3 000 €
  Maintenance de sécurité (70-170 €/m)  2 520 – 6 120 €
  Corrections et incidents ponctuels      500 – 2 000 €
  ──────────────────────────────────────────────────
  TOTAL 3 ANS                           5 420 – 13 620 €
  → et le site est toujours le même à la fin

MIGRER VERS NEXT.JS — 3 ans (architecture C)
  Migration (site à contenu)            9 000 – 20 000 €
  Hébergement (0-20 €/mois)                 0 – 720 €
  Licences                                        0 €
  Maintenance de sécurité                     ≈ 0 €
  Mises à jour des dépendances (annuel)   600 – 1 800 €
  ──────────────────────────────────────────────────
  TOTAL 3 ANS                           9 600 – 22 520 €
  → et vous possédez un actif plus rapide et évolutif

  En architecture B (CMS moderne dédié), ajoutez
  0 à 1 600 € de licences sur 3 ans avec un outil
  facturé à l'utilisateur (type Sanity, 3 postes)
  — et jusqu'à 10 800 € avec un éditeur à palier
  fixe comme Contentful (voir section 4).`}
        </FormulaBox>
        <p>
          Ce bloc modélise un site à contenu. Le cas de la vitrine,
          chiffré à part, penche dans l&apos;autre sens : garder le
          WordPress existant coûte 5 420 à 13 620 € sur trois ans,
          tandis que migrer en architecture C revient à 4 000 à
          9 000 € de migration, plus 0 à 720 € d&apos;hébergement et
          600 à 1 800 € de mises à jour, soit{" "}
          <strong>4 600 à 11 520 €</strong>. C&apos;est le seul profil
          où la migration devient moins chère que le statu quo dès la
          troisième année — d&apos;où le « cas le plus rentable » de la
          section 1.
        </p>
        <p>
          La lecture honnête, pour un site à contenu :{" "}
          <strong>sur trois ans, la migration
          reste plus chère</strong> — de 4 180 € dans l&apos;hypothèse
          basse à 8 900 € dans l&apos;hypothèse haute. Elle se
          rentabilise sur deux terrains que le tableau ne montre pas.
          D&apos;abord les revenus liés à la vitesse, chiffrés en
          section 2. Ensuite le temps : au bout de trois ans,
          l&apos;écart de coût récurrent continue de courir en votre
          faveur, alors que le WordPress d&apos;origine, lui, arrive à
          l&apos;âge de la refonte. Autrement dit : <strong>la question
          n&apos;est pas « migrer ou ne rien dépenser », c&apos;est
          « migrer maintenant ou refaire dans deux ans »</strong>.
        </p>

        <h2 id="resultats">11. Les gains mesurés : 4 cas publics chiffrés</h2>
        <p>
          Plutôt que des promesses, quatre migrations dont les chiffres
          sont publiés — avec, pour chacune, le degré de confiance
          qu&apos;on peut leur accorder.
        </p>
        <GuideTable
          headers={["Cas", "Architecture", "Résultats publiés", "À savoir"]}
          rows={[
            ["Kit (ex-ConvertKit), 1 000+ pages", "WordPress conservé en coulisses", "Lighthouse mobile 20-40 → 65-75 ; chargement 3-4 s → 1,5 s ; déploiement 27-30 min → 2-4 min", "Blog d'ingénierie indépendant — le plus crédible. Effort réel assumé : 14 mois, 1 développeur et 2 designers. Architecture A : garder WordPress en coulisses plafonne le score, car l'administration et ses extensions restent dans la boucle — nos 95+ contractuels s'entendent en architecture B ou C"],
            ["Personio (éditeur de logiciel RH en forte croissance)", "CMS moderne (Contentful)", "Part des pages au vert sur les Core Web Vitals presque doublée (surtout la stabilité visuelle : plus de contenu qui saute pendant le chargement) ; vitesse mobile +29 %", "Chiffres publiés par Vercel, éditeur de la plateforme d'arrivée : juge et partie, et périmètre de mesure non détaillé"],
            ["Migration française, 345 articles", "Contenu dans le code", "Lighthouse mobile < 50 → 98 ; TTFB > 800 ms → < 50 ms ; 37 extensions → 3 ; base 1 348 Mo → 215 Mo", "Réalisée par un expert WordPress avec assistance IA : borne basse experte, pas une norme"],
            ["Boutique Panda Patches", "CMS moderne + moteur de commerce", "Lighthouse mobile 42 → 90+ ; outils 250 $ → 25 $/mois ; aucune chute déclarée dans la Search Console", "Auto-déclaré par l'entreprise, non audité"],
          ]}
        />
        <p>
          Ce que ces quatre cas ont en commun : les gains de vitesse
          sont spectaculaires et reproductibles, les gains de trafic
          organique ne sont jamais garantis. Aucune des sources
          sérieuses ne promet de meilleures positions — elles montrent
          la préservation du référencement existant, puis une
          progression liée à l&apos;expérience utilisateur. Méfiez-vous
          de tout prestataire qui vous vend « +30 % de trafic en trois
          mois » : ce chiffre circule sans aucune étude derrière.
        </p>

        <h2 id="equipe">12. Et votre équipe marketing, dans tout ça ?</h2>
        <p>
          C&apos;est souvent ce qui décide de la réussite du
          projet. La formule qui résume le changement, et qu&apos;un
          développeur résumait ainsi sur un forum professionnel : ce
          qui était une installation d&apos;extension devient des
          heures de développement.
        </p>
        <p>
          Concrètement, votre équipe garde : la rédaction et la
          publication d&apos;articles, la modification des textes et
          des images, la création de pages à partir des gabarits
          existants, la gestion des menus. Elle perd : le constructeur
          visuel qui permettait d&apos;inventer une mise en page
          inédite un vendredi soir, la prévisualisation instantanée
          (elle existe, mais demande une configuration spécifique), et
          la possibilité d&apos;ajouter une fonctionnalité en
          installant une extension.
        </p>
        <p>
          Les trois questions à trancher avant de choisir votre
          architecture : <strong>qui publie</strong> (une personne ou
          six), <strong>à quelle fréquence</strong> (par semaine ou par
          trimestre), et <strong>avec quelle liberté de mise en
          page</strong> (des gabarits suffisent, ou chaque page est
          unique). Une équipe qui publie deux fois par semaine dans des
          gabarits stables sera plus heureuse après qu&apos;avant. Une
          équipe qui compose chaque page à la main dans Elementor vivra
          la migration comme une régression — et il faut le savoir
          avant, pas après.
        </p>

        <h2 id="quand-ne-pas-migrer">13. Les 5 cas où nous vous dirons non</h2>
        <p>
          Notre position éditoriale est claire : pour un site
          professionnel qui doit convertir, le sur-mesure en React est
          devenu le choix par défaut — le développement outillé a
          comprimé le temps de construction, pas la qualité du
          résultat. Cela ne veut pas
          dire que la migration est toujours la bonne opération. Voici
          les cas où nous refusons la mission.
        </p>
        <ol>
          <li>
            <strong>Votre WordPress est récent et rapide.</strong> Si
            vos Core Web Vitals sont au vert et que votre note
            Lighthouse mobile dépasse 80, commencez par optimiser :
            faire le ménage dans les extensions, changer
            d&apos;hébergement, alléger les images. Vous économiserez
            plusieurs milliers d&apos;euros pour un résultat proche.
          </li>
          <li>
            <strong>Votre budget est inférieur à 4 000 €.</strong>{" "}
            C&apos;est le seuil de marché sous lequel aucune migration
            ne se fait sérieusement : le poste des redirections est le
            premier sacrifié, et une migration bâclée là-dessus coûte
            beaucoup plus cher que l&apos;économie réalisée. Notre
            propre grille démarre à 6 900 € ; sous ce montant, nous
            vous orienterons vers l&apos;entretien de votre WordPress
            existant.
          </li>
          <li>
            <strong>Votre équipe éditoriale est nombreuse et
            exigeante.</strong> Publication quotidienne, prévisualisation
            instantanée, mise en page libre : le confort perdu peut
            coûter plus que la vitesse gagnée. Le référent grand public
            de l&apos;écosystème WordPress écrit lui-même que la
            majorité des petites entreprises n&apos;ont pas besoin du
            mode découplé, et nous partageons ce constat.
          </li>
          <li>
            <strong>Votre boutique WooCommerce est imbriquée avec des
            extensions métier.</strong> Vingt extensions ou plus,
            certaines sans équivalent développable à budget
            raisonnable : la migration devient un projet de refonte
            complète du système d&apos;information, à traiter comme
            tel.
          </li>
          <li>
            <strong>Vous voulez juste un nouveau design.</strong>{" "}
            Changer d&apos;apparence ne nécessite pas de changer de
            socle. Un thème sur mesure sur WordPress existant coûte
            moins cher et donne le même résultat visuel — le sur-mesure
            se justifie par la performance, la liberté fonctionnelle et
            le coût récurrent, pas par l&apos;esthétique seule.
          </li>
        </ol>

        <h2 id="contrat">14. Le volet contractuel : propriété et réversibilité</h2>
        <p>
          C&apos;est le point qui peut vous coûter votre site.{" "}
          <strong>En droit français, payer ne rend pas
          propriétaire.</strong> L&apos;article L131-3 du Code de la
          propriété intellectuelle exige que la cession de droits soit
          écrite, que chaque droit cédé fasse l&apos;objet d&apos;une
          mention distincte, et que son étendue, sa destination, son
          lieu et sa durée soient délimités. Sans cette clause, le
          prestataire reste titulaire des droits sur le code, même
          intégralement réglé.
        </p>
        <p>
          Ce n&apos;est pas une hypothèse d&apos;école : dans une
          affaire jugée en 2011 par le tribunal de grande instance de
          Paris, un client qui avait fait reproduire « son » site par
          un nouveau prestataire, sans cession écrite, a été
          condamné pour contrefaçon. Le contrat de prestation seul ne
          transfère qu&apos;un droit d&apos;usage.
        </p>
        <p>Les cinq clauses à exiger, dans cet ordre :</p>
        <ul>
          <li>
            <strong>Cession des droits</strong> sur le code, le design
            et les contenus, effective au paiement du solde, rédigée
            conformément à L131-3.
          </li>
          <li>
            <strong>Dépôt du code sur un compte à votre nom</strong>{" "}
            dès le premier jour du projet — pas à la livraison.
          </li>
          <li>
            <strong>Nom de domaine enregistré à votre nom</strong> : ce
            qui compte juridiquement est la ligne « titulaire », pas la
            facture.
          </li>
          <li>
            <strong>Clause de réversibilité</strong> : restitution des
            données dans un format exploitable, assistance au
            prestataire suivant, calendrier de sortie. Sans elle,
            changer d&apos;agence devient une négociation sous
            contrainte.
          </li>
          <li>
            <strong>Plan de retour arrière</strong> : maintien de
            l&apos;ancien site en état de marche pendant au moins un
            mois après la bascule, redirections en place, et procédure
            de bascule inverse écrite.
          </li>
        </ul>
        <p>
          Ces exigences valent pour nous comme pour n&apos;importe quel
          prestataire : notre{" "}
          <Link href="/guides/choisir-son-agence-web">guide pour
          choisir son agence web</Link> donne la méthode complète de
          vérification, y compris celle qui permet de nous auditer.
        </p>

        <h2 id="verdict-par-profil">15. Le verdict, profil par profil</h2>
        <GuideTable
          headers={["Votre profil", "Notre verdict", "Pourquoi"]}
          rows={[
            ["TPE, vitrine de 10 pages, WordPress lent de 2019", "Migrez, architecture C", "Le contenu bouge peu : le coût récurrent tombe à presque rien et la vitesse décolle"],
            ["PME avec un blog stratégique, 200 articles", "Migrez, architecture B, adresses conservées", "Le référencement est un actif : il se protège en conservant les adresses et s'améliore par la vitesse"],
            ["Média ou éditeur, publication quotidienne", "Architecture A (WordPress en coulisses)", "L'équipe garde son outil ; seul l'affichage change"],
            ["E-commerce WooCommerce en croissance", "Projet séparé, pas une migration", "Le tunnel de commande est le point dur : il mérite son propre budget et son propre calendrier"],
            ["Site refait il y a 18 mois, notes au vert", "Ne migrez pas", "Optimisez l'existant : vous garderez votre budget pour le moment où il apportera vraiment quelque chose"],
            ["Site à 40 extensions, dont 5 métier sans équivalent", "Audit avant tout engagement", "Le coût réel est dans le remplacement des fonctions, pas dans la migration du contenu"],
          ]}
        />

        <h2 id="methode">16. Méthode : décider en 5 étapes</h2>
        <ol>
          <li>
            <strong>Mesurez avant d&apos;écouter qui que ce soit.</strong>{" "}
            Passez votre site sur PageSpeed Insights (gratuit, sans
            compte) en mode mobile. Sous 50, le sujet est réel : la
            migration se justifie. Au-dessus de 80, commencez par
            optimiser l&apos;existant. Entre les deux — la zone où se
            trouve la majorité des WordPress de 2019 — ce sont le
            nombre d&apos;extensions et l&apos;âge du thème qui
            tranchent : au-delà de vingt extensions ou d&apos;un thème
            acheté il y a plus de cinq ans, l&apos;optimisation
            atteint vite son plafond.
          </li>
          <li>
            <strong>Comptez vos gabarits, pas vos pages.</strong> Le
            devis dépend du nombre de mises en page différentes et des
            fonctions à reconstruire — c&apos;est cet inventaire que
            doit produire l&apos;audit préalable.
          </li>
          <li>
            <strong>Tranchez l&apos;architecture avec votre équipe
            éditoriale, pas contre elle.</strong> Repassez les trois
            questions éditoriales de la section 12 avec elle : la
            réponse choisit entre les architectures A, B et C de la
            section 4.
          </li>
          <li>
            <strong>Exigez le plan de redirection comme livrable
            nommé.</strong> Pas « SEO préservé » dans une phrase
            marketing : une ligne au devis, avec un plan de
            surveillance sur trente jours après la bascule.
          </li>
          <li>
            <strong>Verrouillez le contrat avant de payer
            l&apos;acompte.</strong> Cession des droits, dépôt du code
            à votre nom, domaine à votre nom, réversibilité, plan de
            retour arrière. Un prestataire sérieux acceptera les cinq
            sans discuter.
          </li>
        </ol>
        <p>
          Chez Hagnéré Code, une migration commence toujours par un{" "}
          <Link href="/methode">Discovery Sprint</Link> de deux jours à
          1 500 €, déduits à 100 % si le projet se lance : inventaire
          des adresses, comptage des gabarits, audit des extensions
          critiques, architecture recommandée et devis ferme. Il arrive
          qu&apos;il se conclue par « restez sur WordPress, voici les
          trois choses à corriger » — c&apos;est arrivé, et c&apos;est
          très bien ainsi.
        </p>

        <GuideInlineCTA
          title="Votre WordPress mérite-t-il une migration ?"
          description="Décrivez votre projet en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, gratuitement et sans engagement, avec un avis argumenté sur l'architecture adaptée — et le budget réaliste correspondant."
        />

        <InfoBox variant="emerald" title="À retenir : les 6 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>41,2 %</strong> : la part du web encore sous WordPress en juillet 2026 — il recule, il ne disparaît pas.</li>
            <li><strong>91 %</strong> : la part des vulnérabilités WordPress qui viennent des extensions, pas du cœur du logiciel.</li>
            <li><strong>5 heures</strong> : le délai médian entre la publication d&apos;une faille et son exploitation de masse.</li>
            <li><strong>4 000 à 45 000 €</strong> : la fourchette d&apos;une migration en France, de la vitrine de 10 pages au site à milliers de pages — une boutique WooCommerce se chiffre à part (20 000 à 50 000 €+).</li>
            <li><strong>1 an minimum</strong> : la durée pendant laquelle Google demande de conserver les redirections.</li>
            <li><strong>+21,6 %</strong> : les formulaires soumis gagnés pour un dixième de seconde de chargement en moins, en génération de contacts (+8,4 % de conversions dans le commerce) — étude Deloitte pour Google, 2020.</li>
          </ul>
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Consultées en juillet 2026 :{" "}
          <a href="https://w3techs.com/technologies/details/cm-wordpress" target="_blank" rel="noopener noreferrer">W3Techs, parts de marché des CMS</a> ;{" "}
          <a href="https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/" target="_blank" rel="noopener noreferrer">Patchstack, State of WordPress Security in 2026</a> ;{" "}
          <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">Google Search Central, migrations de site avec changement d&apos;URL</a> ;{" "}
          <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">Google Search Central, Core Web Vitals</a> ;{" "}
          <a href="https://web.dev/case-studies/milliseconds-make-millions" target="_blank" rel="noopener noreferrer">Deloitte pour Google, « Milliseconds Make Millions » (2020)</a> ;{" "}
          <a href="https://engineering.kit.com/2023/03/03/part-1-rebuilding-a-1000-page-wordpress-site-from-scratch-using-next-js-and-react/" target="_blank" rel="noopener noreferrer">Kit Engineering, reconstruction d&apos;un site de 1 000 pages</a> ;{" "}
          <a href="https://vercel.com/blog/from-wordpress-monolith-to-vercel-personio-elevates-site-performance" target="_blank" rel="noopener noreferrer">Vercel, étude de cas Personio</a> ;{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958" target="_blank" rel="noopener noreferrer">Légifrance, article L131-3 du Code de la propriété intellectuelle</a> ;{" "}
          <a href="https://www.wpbeginner.com/beginners-guide/what-is-headless-wordpress-and-should-you-use-it/" target="_blank" rel="noopener noreferrer">WPBeginner, faut-il passer au WordPress découplé</a> ; tarifs relevés le 18/07/2026 sur les pages officielles de Vercel, Netlify, Sanity, Contentful, Strapi, Kinsta, WP Engine, o2switch et OVHcloud ; jurisprudence TGI Paris, 10 novembre 2011 (cession de droits sur un site web).
        </p>
        <p className="text-sm">
          Les fourchettes de prix sont des ordres de grandeur de marché,
          pas un barème : seul un audit du site existant permet un
          chiffrage ferme. Les gains de performance cités sont des cas
          publiés, jamais des promesses de résultat. Cet article ne
          constitue pas un conseil juridique personnalisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
