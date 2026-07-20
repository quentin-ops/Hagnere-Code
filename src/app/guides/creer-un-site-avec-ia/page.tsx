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

const guide = getGuide("creer-un-site-avec-ia");

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
  wordCount: 4870,
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
      "Intelligence artificielle",
      "React",
      "Next.js",
      "SEO technique",
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
      name: "Créer un site avec l'IA",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quelle est la meilleure IA pour créer un site web ?",
    answer:
      "La question cache un piège : « la meilleure IA » dépend de ce que vous appelez « créer un site ». Pour une page en ligne ce soir sans rien apprendre : un générateur no-code (Wix AI, Hostinger, Durable) — rapide, mais générique et loué à vie. Pour un prototype interactif : un outil de vibe coding (Lovable, Bolt, v0), qui produit du vrai code React dont vous êtes propriétaire. Pour un site professionnel qui doit convertir et durer : les assistants de code (Claude Code en tête) — mais entre les mains d'un développeur, pas en autonomie. Ce guide compare les trois familles, prix vérifiés à l'appui : la bonne réponse dépend de votre objectif, pas du classement d'un comparateur affilié.",
  },
  {
    question: "Peut-on créer un site internet avec l'IA gratuitement ?",
    answer:
      "Créer, oui ; exploiter, non. Tous les générateurs ont un palier gratuit (Wix, Durable, Framer, Lovable à 5 crédits/jour), mais il impose un sous-domaine de marque (.wixsite.com, .durable.site), de la publicité ou des fonctions bridées. Un site professionnel exige au minimum un nom de domaine (10-20 €/an) et un forfait payant pour le connecter — Wix devient payant dès environ 11 €/mois, et les prix d'appel des hébergeurs (2,99 €/mois) cachent des engagements de 48 mois payés d'avance qui renouvellent 3 à 4 fois plus cher. Le « gratuit » est un couloir d'essai, pas un modèle de fonctionnement.",
  },
  {
    question: "Est-ce que ChatGPT peut créer un site internet ?",
    answer:
      "ChatGPT génère volontiers le code d'une page (HTML, CSS, JavaScript) et des textes — mais il n'héberge rien, ne publie rien, ne gère ni base de données ni formulaires sécurisés : ce n'est ni un hébergeur ni un CMS (le logiciel qui gère les pages et contenus d'un site, comme WordPress). Entre ses mains seules, vous obtenez des fichiers, pas un site en ligne. C'est toute la différence avec les outils de vibe coding (Lovable, Bolt, v0), qui hébergent le résultat, et avec un développeur outillé d'IA, qui transforme la génération de code en site complet, sécurisé et maintenu. ChatGPT est un excellent assistant de rédaction et de brainstorming pour préparer votre projet — pas un constructeur de site.",
  },
  {
    question: "Combien coûte un site créé avec l'IA ?",
    answer:
      "Trois familles de coûts sont à comparer sur trois ans : abonnement no-code et options, crédits de génération plus finition humaine, ou développement sur mesure avec hébergement et maintenance. Chez Hagnéré Code, les prix affichés sont des ordres de grandeur ; le devis fixe le périmètre, les droits, la performance, les coûts tiers et la période de correction.",
  },
  {
    question: "Google pénalise-t-il les sites créés par une IA ?",
    answer:
      "Non — et c'est écrit noir sur blanc dans la documentation officielle. Depuis février 2023, Google récompense le contenu de qualité « quelle que soit la manière dont il est produit », évalué selon ses critères E-E-A-T (expérience, expertise, autorité, fiabilité). MAIS la politique anti-spam de mars 2024 (« scaled content abuse ») vise explicitement la production en masse de pages générées par IA sans valeur ajoutée — Google revendique 45 % de contenu de basse qualité en moins dans ses résultats depuis. Traduction : un site généré par IA n'est pas pénalisé en soi ; un site au contenu IA générique, jamais retravaillé, coche exactement le profil que Google déclasse.",
  },
  {
    question: "Un site créé par IA est-il bien référencé sur Google ?",
    answer:
      "Il peut l'être — la donnée la plus solide vient d'Ahrefs : sur 600 000 pages analysées, aucune corrélation entre la part de contenu IA et la position Google, et 74,2 % des nouvelles pages contiennent déjà de l'IA (mais seulement 2,5 % de « pur IA » sans édition humaine). Le référencement d'un site généré se joue ailleurs : contenu réellement utile et retravaillé, structure technique propre, vitesse, maillage, autorité. C'est précisément là que les générateurs plafonnent — pages standardisées, architecture imposée — et que le sur-mesure garde l'avantage : liberté totale d'architecture et stratégie de contenu illimitée. Ce site et ses guides en sont la démonstration en production.",
  },
  {
    question: "L'IA peut-elle remplacer un développeur web ?",
    answer:
      "Les données disent : elle le rend plus productif, elle ne le remplace pas. L'étude contrôlée de GitHub mesure 55 % de gain de vitesse sur une tâche standard ; McKinsey chiffre 35 à 45 % sur la génération de code — mais moins de 10 % sur les tâches complexes. Et le contrepoint est documenté : l'essai randomisé METR (2025) a mesuré des développeurs expérimentés 19 % PLUS LENTS avec IA sur leurs propres projets, alors qu'ils se croyaient plus rapides ; 46 % des développeurs se méfient de l'exactitude du code généré (Stack Overflow 2025). L'IA est un levier entre des mains qui savent la piloter, et un générateur d'illusions entre celles qui ne savent pas auditer ce qu'elle produit.",
  },
  {
    question: "C'est quoi le vibe coding ?",
    answer:
      "Le vibe coding, c'est décrire son application en français (ou en anglais) à un outil qui génère le code complet — interface, logique, hébergement — sans qu'on l'écrive soi-même. Lovable, Bolt.new et v0 (de Vercel) dominent la catégorie ; ils produisent du vrai code React/Next.js, souvent exportable (« You own your code », revendique Lovable). Sa force : un prototype fonctionnel en heures. Sa limite, documentée : la sécurité et la maintenance — 45 % du code généré par IA contient une vulnérabilité du top 10 OWASP (Veracode 2025), et l'incident Lovable de 2025 a exposé les données de 170 applications. Un formidable outil de maquette ; un piège dès que de vraies données clients entrent en jeu sans développeur pour auditer.",
  },
  {
    question: "À qui appartient un site créé avec l'IA ?",
    answer:
      "Tout dépend de l'outil et du contrat. Certaines plateformes n'exportent pas leur architecture ; d'autres permettent d'exporter du code vers GitHub, avec des limites à lire dans leurs conditions. En sur-mesure, exigez une clause écrite de cession et un inventaire des composants tiers. Chez Hagnéré Code, les livrables spécifiques sont transférés après paiement complet selon les CGV, avec dépôt, accès et exclusions détaillés au devis.",
  },
  {
    question: "Un site généré par IA est-il conforme au RGPD ?",
    answer:
      "Pas automatiquement — aucun outil ne s'en charge pour vous. Un site professionnel français doit afficher des mentions légales, une politique de confidentialité, recueillir le consentement avant toute mesure d'audience non exemptée (le « bandeau cookies »), et héberger les données personnelles dans des conditions conformes — points que ni un générateur no-code ni un outil de vibe coding ne configure correctement par défaut. Le risque est même documenté côté vibe coding : l'incident Lovable de 2025 a exposé publiquement e-mails et données de 170 applications dont les bases de données n'étaient pas protégées. La conformité est un travail de conception, pas une case cochée par l'outil.",
  },
  {
    question: "Qui s'occupe de la maintenance d'un site créé avec l'IA ?",
    answer:
      "Personne, sauf si vous l'organisez. La plateforme maintient son infrastructure, mais votre contenu, vos intégrations, votre référencement et vos évolutions restent à piloter. Pour un site généré ou sur mesure, le devis doit définir documentation, dépôt, recette, période de correction et maintenance éventuelle. Un site professionnel est un actif qui s'entretient.",
  },
  {
    question: "Créer son site avec l'IA ou passer par une agence web ?",
    answer:
      "Fausse alternative en 2026 : la bonne agence UTILISE l'IA — la question est qui pilote. Faites-le vous-même avec un outil IA si vous testez une idée, si le budget est sous 1 000 €, ou pour un side-project : c'est le cas résiduel légitime, et un générateur y est imbattable. Passez au sur-mesure assisté par IA dès que le site doit générer des clients, porter votre image et durer : le développement assisté par IA a fait baisser son coût (vitrine complète dès 6 900 € chez nous, forfait fixe), et vous obtenez ce qu'aucun outil autonome ne produit — design propre à votre marque, animations, référencement architecturé, code possédé, conformité. Notre Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si le projet se lance) est fait pour trancher ce choix sur vos chiffres.",
  },
  {
    question: "Quelle IA pour créer un site e-commerce ?",
    answer:
      "L'e-commerce est le cas où les outils IA autonomes montrent le plus vite leurs limites : paiement, stocks, RGPD, fiscalité — rien de tout cela ne se « génère ». Trois voies réalistes : Shopify (IA Sidekick incluse dans tous les plans, dès 25 €/mois en facturation annuelle) pour lancer et tester un catalogue standard ; WooCommerce (le module boutique de WordPress) assisté d'outils IA si un WordPress existe déjà ; et le sur-mesure (dès 15 000 € chez nous) dès que l'expérience d'achat est votre avantage concurrentiel — notre comparatif Shopify ou sur-mesure chiffre précisément la bascule. Méfiez-vous des générateurs qui promettent une « boutique IA en 5 minutes » : vous obtenez une vitrine de démonstration, pas un commerce conforme.",
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
          { label: "Créer un site avec l'IA" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les 3 familles d'outils IA passées au crible — générateurs no-code, vibe coding, assistants de développement — avec les prix vérifiés (renouvellements compris), les pièges documentés, la position officielle de Google… et le vrai bouleversement que les comparatifs ratent : l'IA a fait baisser le prix du sur-mesure."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "3 familles d'outils, 3 usages", description: "", color: "violet" },
          { number: "02", title: "Prix vérifiés, renouvellements compris", description: "", color: "blue" },
          { number: "03", title: "Google : la position officielle", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/wix-ou-wordpress", label: "Wix ou WordPress ?" },
          { href: "/guides/combien-de-temps-pour-creer-un-site", label: "Combien de temps pour créer un site ?" },
          { href: "/services/sites-vitrines", label: "Sites vitrines" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Créer un site avec l'IA : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Oui, une IA peut mettre un site en ligne ce soir —
          l&apos;outil Durable le promet même « en 30 secondes ». La vraie question est
          ailleurs : <strong>que vaut ce site, à qui appartient-il, et
          que coûte-t-il vraiment sur 3 ans ?</strong> Ce guide est
          écrit par une agence qui développe avec l&apos;IA tous les
          jours — ce site inclus — et qui va vous montrer ce que les
          comparatifs affiliés ne montrent jamais.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. Les 3 familles d'outils IA (que tout le monde confond)" },
            { id: "generateurs-no-code", label: "3. Famille 1 : les générateurs no-code (Wix AI, Hostinger, Durable…)" },
            { id: "vibe-coding", label: "4. Famille 2 : le vibe coding (Lovable, Bolt, v0)" },
            { id: "assistants-pro", label: "5. Famille 3 : les assistants de code professionnels" },
            { id: "google-seo", label: "6. Ce que Google pense vraiment des sites générés par IA" },
            { id: "pieges", label: "7. Les 5 pièges que les comparatifs ne montrent pas" },
            { id: "cout-reel", label: "8. Le coût réel sur 3 ans, toutes familles confondues" },
            { id: "bouleversement", label: "9. Le vrai bouleversement : l'IA a fait baisser le prix du sur-mesure" },
            { id: "preuve", label: "10. La preuve : le site que vous êtes en train de lire" },
            { id: "quand-outil-suffit", label: "11. Les cas où un outil IA suffit vraiment" },
            { id: "rgpd-propriete", label: "12. Propriété, RGPD, maintenance : les questions de dirigeant" },
            { id: "verdict-par-profil", label: "13. Le verdict par profil" },
            { id: "methode", label: "14. Méthode : choisir sa voie en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          En 2026, <strong>trois familles d&apos;outils IA</strong>{" "}
          permettent de « créer un site » — et elles ne produisent pas
          du tout la même chose. Les <strong>générateurs
          no-code</strong> (Wix AI, Hostinger, Durable, Framer) livrent
          un site générique en minutes, loué <strong>11 à 50 €/mois</strong>{" "}
          à vie, souvent inexportable. Le <strong>vibe coding</strong>{" "}
          (Lovable, Bolt, v0) génère du vrai code React — une
          technologie professionnelle standard du web — dont vous êtes
          propriétaire — excellent prototype, risqué en production sans
          développeur. Les <strong>assistants de code</strong> (Claude
          Code, Copilot, Cursor, 10 à 100 $/mois) ne créent rien tout
          seuls : ils démultiplient un développeur — et c&apos;est eux
          qui ont fait <strong>baisser le prix du sur-mesure
          professionnel</strong> (site vitrine complet dès 6 900 € chez
          nous, droits, dépôt et exclusions détaillés au devis). Google, lui, ne pénalise pas l&apos;IA : il
          pénalise le contenu générique sans valeur — position
          officielle décryptée section 6.
        </p>
        <GuideTable
          headers={["Votre objectif", "La bonne famille d'outils", "Budget réaliste"]}
          rows={[
            ["Tester une idée, projet mené à côté de votre activité (« side-project »), budget < 1 000 €", "Générateur no-code (Wix AI, Durable…)", "0 – 50 €/mois — assumé comme provisoire"],
            ["Prototype d'application à montrer (investisseurs, associés)", "Vibe coding (Lovable, Bolt, v0)", "25 – 100 $/mois + finition par un développeur"],
            ["Site professionnel qui doit convertir et durer", "Sur-mesure assisté par IA (React/Next.js)", "Dès 6 900 € — forfait fixe, droits et dépôt au devis"],
            ["Boutique en ligne", "Shopify (test) ou sur-mesure (canal principal)", "25 €/mois vs dès 15 000 € — comparatif dédié"],
          ]}
        />

        <InfoBox variant="blue" title="Les 14 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>IA générative</strong> : les outils qui produisent texte, images ou code à partir d&apos;une consigne écrite.</li>
            <li><strong>Prompt</strong> : la consigne en français qu&apos;on donne à l&apos;IA (« crée un site pour un cabinet de recrutement »).</li>
            <li><strong>Générateur no-code</strong> : l&apos;outil qui assemble un site sans code à partir de votre prompt — vous louez le résultat.</li>
            <li><strong>Vibe coding</strong> : décrire son application en langage courant à un outil qui écrit le code complet à votre place.</li>
            <li><strong>Assistant de code</strong> : l&apos;IA utilisée par un développeur professionnel pour produire plus vite (Claude Code, Copilot).</li>
            <li><strong>Template</strong> : le modèle de mise en page réutilisé par des milliers de sites — la raison du « déjà-vu ».</li>
            <li><strong>Lock-in (verrouillage)</strong> : l&apos;impossibilité de partir avec son site — un site Wix ne s&apos;exporte pas.</li>
            <li><strong>Crédit IA</strong> : l&apos;unité de facturation des outils IA — chaque demande consomme des crédits, le compteur tourne.</li>
            <li><strong>Sous-domaine</strong> : l&apos;adresse imposée par les offres gratuites (votresite.wixsite.com) — rédhibitoire pour une entreprise.</li>
            <li><strong>Core Web Vitals</strong> : les mesures de vitesse et de stabilité de Google — le « contrôle technique » de votre site.</li>
            <li><strong>E-E-A-T</strong> : la grille de Google pour juger un contenu — expérience, expertise, autorité, fiabilité.</li>
            <li><strong>Sur-mesure</strong> : un site développé pour vous, dont vous possédez le code — par opposition à la location.</li>
            <li><strong>React / Next.js</strong> : les technologies de développement standard du web professionnel moderne — le « vrai code », que n&apos;importe quel développeur peut reprendre, par opposition aux modèles fermés des plateformes.</li>
            <li><strong>Lighthouse</strong> : la note de qualité sur 100 attribuée par l&apos;outil de test gratuit de Google (vitesse, accessibilité, SEO) — mesurable par n&apos;importe qui sur PageSpeed Insights.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Les 3 familles d&apos;outils IA (que tout le monde confond)</h2>
        <p>
          Le vice caché de presque tous les comparatifs « IA pour créer
          un site » : ils mélangent des outils qui n&apos;ont rien à
          voir, comme un guide auto qui comparerait une trottinette en
          libre-service (utilisable tout de suite, jamais à vous), une
          voiture en kit (à vous, mais à faire assembler par
          quelqu&apos;un qui sait) et un permis de conduire (inutile
          seul, décisif entre les mains d&apos;un professionnel).{" "}
          <strong>Famille 1, les{" "}
          <Link href="/guides/no-code-ou-sur-mesure">générateurs
          no-code</Link></strong> : vous
          décrivez votre activité, l&apos;outil assemble un site à
          partir de modèles — vous louez le résultat.{" "}
          <strong>Famille 2, le vibe coding</strong> : vous décrivez
          une application, l&apos;outil écrit du vrai code — vous
          possédez un prototype. <strong>Famille 3, les assistants de
          code</strong> : ils n&apos;assemblent rien pour un débutant —
          ils font produire un développeur professionnel 2 fois plus
          vite sur les tâches standard. Fil rouge de ce guide :{" "}
          <strong>scénario fictif composite — ni client ni témoignage
          réel — avec Nadia, fondatrice d&apos;un cabinet de recrutement à
          Annecy</strong>, 3 000 € de budget initial, qui veut un site
          qui lui amène des clients — nous la suivrons dans les trois
          familles. Spoiler honnête : chacune servira à quelque chose,
          mais pas à ce qu&apos;elle croyait.
        </p>
        <p>
          Et ChatGPT, dans tout ça ? L&apos;outil par lequel vous avez
          probablement commencé n&apos;entre dans aucune des trois
          familles : il génère du texte et du code à la demande, mais
          n&apos;héberge rien, ne publie rien, ne maintient rien —
          vous obtenez des fichiers, pas un site en ligne. Excellent
          pour préparer le projet (positionnement, textes, brief) ;
          incapable, seul, de le livrer. Nous y revenons en détail
          dans la FAQ en bas de page.
        </p>

        <h2 id="generateurs-no-code">3. Famille 1 : les générateurs no-code (Wix AI, Hostinger, Durable…)</h2>
        <p>
          La promesse commerciale existe. Dans le scénario, Nadia
          décrirait son cabinet à Wix AI un mardi soir et pourrait obtenir
          à 23 h un site — textes générés,
          images en place. Les prix aussi sont réels, à condition de
          lire les petites lignes que voici. <strong>Wix</strong> :
          gratuit pour démarrer, mais domaine personnalisé et
          encaissement exigent un forfait payant — dès environ
          11 €/mois hors taxes en facturation annuelle (Wix affiche des
          prix HT : comptez ~20 % de plus sur le relevé bancaire, le
          détail est dans notre{" "}
          <Link href="/guides/wix-ou-wordpress">guide Wix ou
          WordPress</Link>) — et l&apos;offre gratuite impose un
          sous-domaine .wixsite.com. <strong>Hostinger</strong> : le fameux
          « 2,99 €/mois » est un prix promotionnel sur engagement de
          48 mois payés d&apos;avance, qui renouvelle ensuite 3 à
          4 fois plus cher — l&apos;archétype du prix d&apos;appel.{" "}
          <strong>Durable</strong> : gratuit sur sous-domaine, puis 25
          à 49 $/mois. <strong>Framer</strong> : 10 à 30 $/mois, avec
          des crédits IA au compteur même en payant. Pour choisir dans
          cette famille sans y passer une semaine : Wix AI si vous
          voulez l&apos;écosystème le plus complet (rendez-vous,
          paiement, blog), Hostinger si le budget prime et que vous
          acceptez l&apos;engagement long, Durable pour la mise en
          ligne la plus rapide d&apos;une simple vitrine, Framer si
          l&apos;esthétique compte plus que les fonctions. Ce que Nadia
          obtiendrait : un site en ligne, hébergé, correct. Ce
          qu&apos;elle n&apos;obtiendrait pas : un design qui la distingue
          (les mêmes modèles servent des millions de sites), une
          stratégie de contenu qui la fait trouver sur Google, et
          surtout <strong>la propriété</strong> — Wix documente
          lui-même que le site est inexportable. Elle est locataire,
          à vie, d&apos;un actif commercial.
        </p>
        <p>
          Une image pour fixer le modèle économique de cette famille :
          la location meublée. Tout est prêt, on emménage en une
          heure — mais les murs, la décoration et l&apos;adresse
          appartiennent au bailleur, le loyer court tant que le site
          existe, et le jour du départ on ne déménage pas ses
          meubles : on les abandonne. Les acteurs français (SiteW et
          son assistant Waia, les offres IA des hébergeurs)
          fonctionnent sur le même modèle que les géants américains —
          seule la devise change. Rien de scandaleux : c&apos;est un
          vrai service, honnête tant qu&apos;on sait ce qu&apos;on
          signe. Le problème n&apos;est pas la location ; c&apos;est
          de la confondre avec un investissement.
        </p>

        <h2 id="vibe-coding">4. Famille 2 : le vibe coding (Lovable, Bolt, v0)</h2>
        <p>
          Deuxième hypothèse pour Nadia : Lovable. La différence sauterait aux
          yeux — l&apos;outil ne remplit pas un modèle,{" "}
          <strong>il écrit du vrai code React/Next.js</strong>, et sa
          page tarifs l&apos;affiche fièrement : « You own your
          code » — le code vous appartient, exportable vers GitHub, la
          plateforme où les développeurs du monde entier conservent et
          gèrent leur code.
          Les prix : offre gratuite à 5 crédits par jour, Pro autour
          de 25 $/mois pour ~100 crédits — sachant qu&apos;une page
          d&apos;accueil consomme ~1,7 crédit et que le compteur
          tourne à chaque retouche (« mets le bouton en gris » =
          0,5 crédit). Bolt.new et v0 (l&apos;outil de Vercel,
          l&apos;éditeur de Next.js) jouent dans la même cour, 25 à
          100 $/mois. Repère rapide : Lovable pour prototyper une
          application complète avec base de données, v0 si le relais
          sera pris par un développeur Next.js, Bolt pour itérer vite
          sur des variantes d&apos;interface. En quelques heures, Nadia
          pourrait obtenir un prototype interactif convaincant. Puis
          viendrait <strong>le mur</strong>,
          documenté par les chiffres de 2025 : Veracode, entreprise
          spécialisée dans les tests de sécurité logicielle, a mesuré
          que <strong>45 % du code généré par IA contient une
          vulnérabilité du top 10 OWASP</strong> (le référentiel des
          failles web) ; une faille référencée CVE-2025-48757 a exposé
          publiquement les données — e-mails, téléphones — de{" "}
          <strong>170 applications Lovable</strong> dont les bases
          n&apos;étaient pas protégées ; et l&apos;agent IA de Replit
          (un autre outil de génération d&apos;applications) a effacé
          une base de données de production en ignorant les consignes. Le vibe coding est un formidable outil de
          prototype — et, entre des mains qui ne savent pas auditer le
          code, un générateur de bombes à retardement dès que de
          vraies données clients entrent en jeu.
        </p>

        <h2 id="assistants-pro">5. Famille 3 : les assistants de code professionnels</h2>
        <p>
          La troisième famille ne s&apos;adresserait pas à Nadia — et
          c&apos;est pourtant elle qui pourrait changer son projet.{" "}
          <strong>Claude Code</strong> (inclus dès l&apos;abonnement
          Claude Pro à 20 $/mois), <strong>GitHub Copilot</strong>{" "}
          (dès 10 $/mois), <strong>Cursor</strong> (20 $/mois) : des
          outils dont le prix est dérisoire comparé à ce qu&apos;ils
          changent — un développeur professionnel outillé d&apos;IA
          produit le code standard beaucoup plus vite, à qualité
          contrôlée. Les études convergent : l&apos;expérience
          contrôlée de GitHub mesure une tâche standard terminée{" "}
          <strong>55 % plus vite</strong> (1 h 11 contre 2 h 41) ;
          McKinsey chiffre 35 à 45 % de gain sur la génération de
          code et 45 à 50 % sur la documentation ; le rapport DORA
          2025 (Google Cloud) compte <strong>90 % des professionnels
          du logiciel utilisant l&apos;IA</strong>, deux heures par
          jour en médiane. Or un site vitrine ou e-commerce est
          largement constitué de ce code « standard » où les gains
          sont maximaux. La conséquence économique est mécanique :{" "}
          <strong>le sur-mesure professionnel a baissé de prix</strong> —
          nous y consacrons la section 9, c&apos;est le vrai titre de
          ce guide.
        </p>

        <InfoBox variant="amber" title="L'honnêteté d'abord : ce que l'IA ne fait PAS gagner">
          <p>
            Trois données pour ne pas vous survendre l&apos;IA — y
            compris la nôtre. McKinsey mesure{" "}
            <strong>moins de 10 % de gain sur les tâches très
            complexes</strong> : l&apos;architecture, la sécurité, les
            intégrations difficiles restent du travail d&apos;expert.
            L&apos;essai randomisé METR (juillet 2025) a même mesuré
            des développeurs expérimentés{" "}
            <strong>19 % PLUS LENTS avec IA</strong> sur leurs propres
            projets — alors qu&apos;ils se croyaient 20 % plus
            rapides. Et Stack Overflow 2025 : 46 % des développeurs se
            méfient de l&apos;exactitude du code généré, 66 % citent
            les solutions « presque justes » comme frustration n°1.
            L&apos;IA est un levier entre des mains expertes — pas une
            baguette magique. Quiconque vous promet le contraire vous
            vend quelque chose.
          </p>
        </InfoBox>

        <h2 id="google-seo">6. Ce que Google pense vraiment des sites générés par IA</h2>
        <p>
          La peur (« Google pénalise l&apos;IA ») et le fantasme
          (« Google s&apos;en fiche ») sont tous deux faux — et
          personne, dans les résultats de recherche Google en
          français, ne cite les textes officiels. Les voici. <strong>Février 2023, blog Search Central</strong> :
          Google récompense le contenu de qualité « quelle que soit la
          manière dont il est produit », jugé sur l&apos;E-E-A-T —
          expérience, expertise, autorité, fiabilité.{" "}
          <strong>Mars 2024, politique anti-spam</strong> : la règle
          « scaled content abuse » vise explicitement «
          l&apos;utilisation d&apos;outils d&apos;IA générative pour
          générer de nombreuses pages sans valeur ajoutée » — et
          Google revendique <strong>45 % de contenu de basse qualité
          en moins</strong> dans ses résultats depuis. Entre les
          deux : la réalité mesurée par Ahrefs, l&apos;un des
          principaux outils d&apos;analyse du référencement — 74,2 %
          des nouvelles
          pages web contiennent du contenu IA, mais seulement{" "}
          <strong>2,5 % de « pur IA » sans édition humaine</strong>,
          et aucune corrélation entre part d&apos;IA et position sur
          600 000 pages analysées. Traduction pour votre projet : le
          texte brut d&apos;un générateur de site — générique,
          identique à des milliers d&apos;autres — coche exactement le
          profil à risque ; le contenu travaillé, expert et utile
          se classe, IA dans la boucle ou pas. La différence
          n&apos;est pas l&apos;outil : c&apos;est la valeur ajoutée.
        </p>
        <InfoBox variant="blue" title="En clair : 3 questions avant de publier un contenu généré par IA">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Ce texte apprend-il quelque chose qu&apos;aucun concurrent ne dit ?</strong> Si la réponse est non, Google le classera derrière ceux qui l&apos;ont dit avant vous.</li>
            <li><strong>Un expert de votre métier le signerait-il tel quel ?</strong> Chiffres vérifiés, exemples vécus, positions assumées — c&apos;est l&apos;E-E-A-T que Google mesure.</li>
            <li><strong>L&apos;avez-vous retravaillé ?</strong> Les 2,5 % de pages « pur IA » sans édition humaine sont exactement la cible de la politique anti-spam — le mix humain + IA est la norme de ce qui se classe.</li>
          </ul>
        </InfoBox>

        <h2 id="pieges">7. Les 5 pièges que les comparatifs ne montrent pas</h2>
        <ul>
          <li>
            <strong>Le prix d&apos;appel qui renouvelle ×4.</strong>{" "}
            Le « 2,99 €/mois » d&apos;Hostinger engage 48 mois payés
            d&apos;avance, puis renouvelle 3 à 4 fois plus cher. Aucun
            comparatif n&apos;affiche la colonne « prix après promo » —
            la nôtre est en section 8.
          </li>
          <li>
            <strong>Les crédits IA au compteur.</strong> Sur Lovable,
            Framer ou v0, chaque retouche consomme des crédits — le
            budget réel d&apos;un site qu&apos;on itère est
            imprévisible. Détail croustillant chez Hostinger Horizons :
            l&apos;accès à votre propre code n&apos;est débloqué
            qu&apos;à partir du forfait à 39,99 $/mois.
          </li>
          <li>
            <strong>Le verrouillage.</strong> Un site Wix est
            inexportable — documenté par Wix. Quitter la plateforme =
            tout reconstruire. Posez la question avant, pas après.
          </li>
          <li>
            <strong>La sécurité du code généré.</strong> 45 % du code
            IA contient une vulnérabilité OWASP (Veracode 2025) ; 170
            applications Lovable ont exposé leurs données en 2025 ;
            l&apos;agent Replit a effacé une base de production. Sans
            audit humain, vous ne le saurez qu&apos;après.
          </li>
          <li>
            <strong>Le conflit d&apos;intérêt des comparatifs.</strong>{" "}
            Les guides « meilleure IA pour créer un site » sont écrits
            par les plateformes elles-mêmes ou par des sites affiliés
            rémunérés au clic. Le nôtre a un biais aussi — nous vendons
            du sur-mesure — mais il est déclaré, et les cas où un
            outil IA suffit sont assumés en section 11.
          </li>
        </ul>

        <GuideInlineCTA
          title="Envie de savoir ce que l'IA change pour VOTRE projet ?"
          description="Décrivez votre projet en 3 minutes : nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti, avec un avis franc — y compris quand un outil IA à 20 €/mois est la bonne réponse à votre stade. Et si le projet mérite du sur-mesure, le Discovery Sprint (1 500 €, 2 jours, déduit à 100 %) produit maquettes, cahier des charges et devis au forfait fixe."
          tags={["Réponse personnelle", "Objectifs de performance au devis", "Droits et dépôt inventoriés"]}
        />

        <h2 id="cout-reel">8. Le coût réel sur 3 ans, toutes familles confondues</h2>
        <p>
          Le tableau qu&apos;aucun comparatif ne publie : ce que
          coûtent réellement les trois familles sur 3 ans, prix de
          renouvellement compris — et ce que vous possédez à la fin.
        </p>
        <GuideTable
          headers={["Option", "Coût sur 3 ans (ordre de grandeur)", "Ce que vous possédez à la fin"]}
          rows={[
            ["Générateur no-code « gratuit »", "400 – 700 € (forfait mini + domaine) + votre temps", "Rien — site inexportable, sous-domaine ou design générique"],
            ["Générateur no-code, forfait business", "1 100 – 1 700 € (25 – 40 €/mois + domaine + options)", "Rien — vous êtes locataire, le site reste sur la plateforme"],
            ["Vibe coding (Lovable, Bolt, v0)", "900 – 3 600 € (abonnements + crédits) + finition dev", "Le code du prototype — à sécuriser et maintenir vous-même"],
            ["Sur-mesure assisté par IA (notre grille)", "À partir de 6 900 € selon périmètre", "Droits, dépôt, performance, coûts tiers et maintenance au devis"],
          ]}
        />
        <p>
          Lecture honnête de ce tableau : à l&apos;entrée, le
          générateur gagne — c&apos;est indiscutable, et si votre
          besoin est de « tester » ou d&apos;« exister », prenez-le
          (section 11). Mais pour un site dont le travail est de{" "}
          <strong>générer des clients</strong>, comparez ce qui est
          comparable : 1 100 à 1 700 € sur 3 ans pour un site
          générique que vous ne possédez pas et qui plafonne, contre
          6 900 € une fois pour un actif que vous possédez, différencié
          et sans plafond. L&apos;écart n&apos;est plus celui de
          2020 : il s&apos;est resserré précisément parce que
          l&apos;IA a fait baisser le coût du sur-mesure — la
          démonstration arrive. Les budgets complets par type de site
          sont dans notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">guide
          des prix d&apos;un site internet</Link> et notre{" "}
          <Link href="/guides/prix-site-vitrine">guide du prix
          d&apos;un site vitrine</Link>.
        </p>

        <h2 id="bouleversement">9. Le vrai bouleversement : l&apos;IA a fait baisser le prix du sur-mesure</h2>
        <p>
          Voici la section que vous ne trouverez dans aucun comparatif
          — et c&apos;est pourtant la conséquence économique la plus
          importante de l&apos;IA pour votre projet.{" "}
          <strong>Avant 2023</strong>, un site vitrine sur mesure
          professionnel exigeait des semaines de développement
          facturées au jour : le sur-mesure était réservé aux budgets
          confortables, et les plateformes gagnaient par défaut.{" "}
          <strong>Depuis</strong>, les assistants de code ont changé
          la structure de coût du métier : 55 % plus rapide sur les
          tâches standard (étude contrôlée GitHub), 35 à 45 % sur la
          génération de code (McKinsey), 90 % des professionnels
          équipés (DORA 2025). Un site vitrine étant largement composé
          de ce code standard — pages, formulaires, structure —,{" "}
          <strong>le nombre de jours nécessaires a baissé à périmètre
          égal : le coût de production du sur-mesure a chuté</strong>.
          Toutes les agences ne le répercutent pas — la seule étude de
          prix publique (Digital Applied, 2026) mesure des délais
          réduits de 22 à 34 % grâce à l&apos;IA mais des prix
          affichés le plus souvent inchangés, le gain restant en
          marge. Nous faisons le choix inverse : c&apos;est ce qui
          rend possible <Link href="/tarifs">notre grille
          publique</Link> — vitrine complète dès
          6 900 €, e-commerce dès 15 000 €, première version
          d&apos;une application en ligne par abonnement (le « MVP
          SaaS ») dès 15 000 €, au forfait fixe. Et c&apos;est ce qui inverse la conclusion des
          comparatifs « plateforme vs agence » écrits avant 2023 : le
          sur-mesure n&apos;est plus le luxe qu&apos;il faut
          justifier, il est devenu <strong>le choix par défaut
          d&apos;un site professionnel</strong> — la plateforme
          restant la bonne réponse des cas résiduels : test, micro-budget,
          side-project. L&apos;expertise, elle, n&apos;a pas baissé de
          prix : moins de 10 % de gain IA sur les tâches complexes
          (McKinsey) — c&apos;est précisément pour ça que le
          développeur reste dans l&apos;équation, et que les sites
          générés sans lui se ressemblent tous.
        </p>

        <h2 id="preuve">10. La preuve : le site que vous êtes en train de lire</h2>
        <p>
          Plutôt qu&apos;une promesse, une démonstration en
          production : <strong>hagnere-code.ai est développé à 100 %
          en React/Next.js, avec Claude Code</strong> — la même chaîne
          de production que celle décrite sur notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link>. Le design
          est
          propriétaire — aucun template, des animations et des
          micro-interactions qu&apos;aucun générateur ne produit
          (bibliothèques professionnelles type Framer Motion et GSAP,
          qui font gagner du temps de développement sans standardiser
          le rendu). La performance est mesurable par n&apos;importe
          qui : ouvrez PageSpeed Insights, l&apos;outil de test
          gratuit de Google, et testez cette page — Lighthouse est la
          note de qualité sur 100 qu&apos;il attribue, et le{" "}
          <strong>objectif de performance défini dans un devis</strong> doit
          préciser ses conditions de mesure&nbsp;; ce site ne constitue pas une preuve client.
          Et la stratégie de contenu que vous lisez — des guides
          longs, sourcés et reliés entre eux par des liens
          internes — est exactement ce qu&apos;une
          architecture sur mesure permet et qu&apos;un générateur
          plafonne. L&apos;IA a écrit du code de ce site ; elle
          n&apos;a décidé ni de l&apos;architecture, ni du design, ni
          de la stratégie. C&apos;est toute la différence entre{" "}
          <em>générer</em> et <em>construire</em>.
        </p>

        <InfoBox variant="amber" title="L'issue possible du scénario Nadia">
          <p>
            Épilogue hypothétique du fil rouge. Le site Wix de Nadia
            pourrait lui rendre un vrai service : tester sa niche pendant
            trois semaines et observer quelques appels. Son prototype
            Lovable pourrait lui servir à montrer son idée d&apos;espace
            candidats à deux confrères. Elle ferait ensuite le calcul de
            la section 8 : son cabinet vivrait des missions apportées par
            le site — le site serait son commercial, pas sa carte de
            visite. Son budget initial de 3 000 € n&apos;y suffirait pas :
            elle pourrait conserver le Wix quelques mois de plus et
            affecter d&apos;éventuelles premières missions à la différence —
            c&apos;est le rôle possible d&apos;un site provisoire bien
            utilisé, pas un résultat promis. Elle garderait le Wix en ligne
            le temps du chantier (comptez plusieurs semaines pour un sur-mesure —
            notre <Link href="/guides/combien-de-temps-pour-creer-un-site">guide
            des délais de création</Link> les détaille), investirait
            6 900 € dans un site sur mesure dont elle posséderait le code,
            et réutiliserait tout ce que les outils IA lui auraient appris :
            son positionnement, ses textes de départ, la liste de ce
            qui manquerait. Aucun des trois outils ne serait alors un
            gaspillage — chacun aurait sa place, dans le bon ordre.
          </p>
        </InfoBox>

        <h2 id="quand-outil-suffit">11. Les cas où un outil IA suffit vraiment</h2>
        <p>
          Une agence qui prétendrait qu&apos;aucun outil IA
          n&apos;est jamais suffisant ne mériterait pas votre
          confiance. Les cas légitimes, assumés :{" "}
          <strong>tester une idée</strong> — avant d&apos;investir,
          un générateur à 0-20 €/mois valide (ou invalide) un marché
          en une semaine ; c&apos;est de l&apos;argent bien dépensé.{" "}
          <strong>Le budget sous 1 000 €</strong> — aucun sur-mesure
          sérieux n&apos;existe à ce prix ; un générateur bien
          configuré vaut mieux qu&apos;un site bâclé.{" "}
          <strong>Le side-project</strong> (le projet mené à côté de
          son activité principale) et{" "}
          <strong>la présence minimale</strong> — une carte de visite
          en ligne pour exister, sans ambition d&apos;acquisition.{" "}
          <strong>Le prototype à montrer</strong> — le vibe coding est
          imbattable pour faire toucher une idée d&apos;application à
          des associés ou des investisseurs avant de la construire.
          Dans tous ces cas, une consigne : considérez le site comme{" "}
          <strong>provisoire par nature</strong>, gardez votre nom de
          domaine en propre, et réévaluez le jour où le site doit
          rapporter des clients — ce jour-là, relisez la section 9.
        </p>

        <h2 id="rgpd-propriete">12. Propriété, RGPD, maintenance : les questions de dirigeant</h2>
        <p>
          Trois questions que les tutoriels « site en 5 minutes »
          n&apos;abordent jamais — et qui font la différence entre un
          site jouet et un actif d&apos;entreprise.{" "}
          <strong>La propriété</strong> : sur un générateur no-code,
          vous ne possédez rien (site inexportable) ; en vibe coding,
          le code vous appartient (« You own your code », Lovable)
          mais encore faut-il savoir qu&apos;en faire ; en sur-mesure,
          exigez la cession écrite des droits — article L131-3 du Code
          de la propriété intellectuelle, la clause type est dans
          notre <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
          de cahier des charges</Link>. <strong>Le RGPD</strong> :
          mentions légales, politique de confidentialité, consentement
          avant mesure d&apos;audience, hébergement des données —
          aucun outil ne le configure pour vous, et l&apos;incident
          Lovable de 2025 (170 applications aux données exposées)
          montre le coût du « ça marchera bien » — c&apos;est le
          périmètre exact de notre prestation{" "}
          <Link href="/services/securite-rgpd">sécurité et conformité
          RGPD</Link>.{" "}
          <strong>La maintenance</strong> : un site généré
          n&apos;est maintenu par personne — la plateforme entretient
          SES serveurs, pas VOTRE site ; un code vibe-codé
          n&apos;a pas de développeur qui le connaît. Notre règle,
          détaillée dans le{" "}
          <Link href="/guides/cout-maintenance-site-internet">guide de
          la maintenance</Link> : un site professionnel est un actif
          qui s&apos;entretient — la vraie question n&apos;est pas
          « combien coûte la maintenance » mais « qui répond quand ça
          casse ».
        </p>

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>3 familles</strong> : générateurs no-code (location), vibe coding (prototype possédé), assistants pro (le levier du sur-mesure) — les confondre, c&apos;est choisir au hasard.</li>
            <li><strong>×3 à ×4</strong> : le renouvellement réel des prix d&apos;appel des générateurs (2,99 €/mois → environ 9 à 12 €/mois) — la colonne que les comparatifs cachent.</li>
            <li><strong>2,5 %</strong> : la part des nouvelles pages web en « pur IA » sans édition humaine (Ahrefs) — le mix humain + IA est la norme de ce qui se classe sur Google.</li>
            <li><strong>45 %</strong> : la part du code généré par IA contenant une vulnérabilité OWASP (Veracode 2025) — le vibe coding sans audit est un pari.</li>
            <li><strong>À partir de 6 900 €</strong> : le sur-mesure vitrine, avec périmètre, droits, dépôt, protocole de performance et coûts tiers détaillés au devis.</li>
          </ul>
        </InfoBox>

        <h2 id="verdict-par-profil">13. Le verdict par profil</h2>
        <GuideTable
          headers={["Votre profil", "Notre verdict", "Pourquoi"]}
          rows={[
            ["Porteur d'idée, marché à valider", "Générateur no-code, assumé provisoire", "0-40 €/mois pour apprendre vite — l'argent va au test, pas au site"],
            ["Créateur d'app, prototype à montrer", "Vibe coding (Lovable, v0)", "Du vrai code possédé, bluffant en démo — un dev pour passer en production"],
            ["TPE/PME dont le site doit générer des clients", "Sur-mesure assisté par IA (React/Next.js)", "Design différenciant, SEO architecturé, droits et dépôt au devis — dès 6 900 €"],
            ["Entreprise avec un site plateforme qui plafonne", "Migration vers le sur-mesure", "L'IA a fait baisser le coût de la bascule — audit d'abord"],
            ["E-commerce", "Shopify pour tester, sur-mesure pour durer", "Notre comparatif Shopify ou sur-mesure chiffre la bascule"],
            ["Side-project, présence minimale", "Générateur no-code, sans culpabilité", "Le cas résiduel légitime — gardez juste votre domaine en propre"],
          ]}
        />
        <p>
          Une ligne de lecture traverse ce tableau : plus le site est
          proche de votre chiffre d&apos;affaires, plus le sur-mesure
          s&apos;impose — et notre comparatif{" "}
          <Link href="/guides/nextjs-ou-wordpress">Next.js ou
          WordPress</Link> comme notre guide{" "}
          <Link href="/guides/wix-ou-wordpress">Wix ou
          WordPress</Link> arrivent à la même conclusion par
          d&apos;autres chemins.
        </p>

        <h2 id="methode">14. Méthode : choisir sa voie en 5 étapes</h2>
        <ol>
          <li>
            <strong>Qualifiez le rôle du site.</strong> Exister,
            tester, ou générer des clients ? Toute la décision découle
            de cette réponse — pas de l&apos;outil à la mode.
          </li>
          <li>
            <strong>Si vous testez : générateur, sans état
            d&apos;âme.</strong> Budget plafonné, domaine à votre nom,
            et date de réévaluation dans l&apos;agenda (6 mois).
          </li>
          <li>
            <strong>Si le site doit rapporter : chiffrez le
            sur-mesure d&apos;abord.</strong> L&apos;IA a fait baisser
            son ticket d&apos;entrée — comparez le coût 3 ans, pas le
            prix du premier mois (tableau section 8).
          </li>
          <li>
            <strong>Exigez la propriété, quelle que soit la
            voie.</strong> Code cédé par écrit en sur-mesure, export
            vérifié en vibe coding, domaine en propre partout — « si
            je pars, qu&apos;est-ce que j&apos;emporte ? »
          </li>
          <li>
            <strong>Jugez sur pièces, pas sur promesses.</strong>{" "}
            Testez la vitesse réelle (PageSpeed Insights), demandez
            des sites livrés, et méfiez-vous de quiconque promet
            « un site parfait en 5 minutes » — vous savez maintenant
            ce que cachent ces 5 minutes.
          </li>
        </ol>
        <p>
          Et si vous voulez l&apos;avis d&apos;une équipe qui
          développe avec l&apos;IA tous les jours :{" "}
          <strong>décrivez votre projet en 3 minutes</strong> —
          objectif de réponse personnelle le prochain jour ouvré, gratuite et sans
          engagement, y compris quand la bonne réponse est « restez
          sur votre générateur pour l&apos;instant ». Le{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 %
          si le projet se lance)</strong> produit maquettes, cahier
          des charges et devis au forfait fixe — méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>,{" "}
          <Link href="/demarrer-un-projet">démarrer ici</Link>.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://developers.google.com/search/blog/2023/02/google-search-and-ai-content" target="_blank" rel="noopener noreferrer">Google Search Central, position officielle sur le contenu IA (fév. 2023)</a> ;{" "}
          <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">Google, politique anti-spam « scaled content abuse » (mars 2024)</a> ;{" "}
          <a href="https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated/" target="_blank" rel="noopener noreferrer">Ahrefs, part du contenu IA dans les nouvelles pages (2025)</a> ;{" "}
          <a href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/" target="_blank" rel="noopener noreferrer">GitHub, étude contrôlée Copilot (55 % plus rapide)</a> ;{" "}
          <a href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/unleashing-developer-productivity-with-generative-ai" target="_blank" rel="noopener noreferrer">McKinsey, productivité des développeurs avec l&apos;IA générative</a> ;{" "}
          <a href="https://dora.dev/dora-report-2025/" target="_blank" rel="noopener noreferrer">DORA 2025 (Google Cloud), State of AI-assisted Software Development</a> ;{" "}
          <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">METR, essai randomisé développeurs expérimentés (juillet 2025)</a> ;{" "}
          <a href="https://survey.stackoverflow.co/2025/ai" target="_blank" rel="noopener noreferrer">Stack Overflow Developer Survey 2025 (confiance dans le code IA)</a> ;{" "}
          <a href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/" target="_blank" rel="noopener noreferrer">Veracode, GenAI Code Security Report 2025 (45 % de code vulnérable)</a> ;{" "}
          <a href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere" target="_blank" rel="noopener noreferrer">Wix, impossibilité d&apos;exporter un site (documentation officielle)</a> ;{" "}
          <a href="https://lovable.dev/pricing" target="_blank" rel="noopener noreferrer">Lovable, tarifs et propriété du code (« You own your code »)</a> ;
          pages tarifs officielles consultées : Hostinger, Durable,
          Framer, Bolt.new, v0 (Vercel), Claude, GitHub Copilot,
          Cursor, Shopify France ; incident Lovable CVE-2025-48757
          (TNW/Superblocks) ; incident Replit/SaaStr juillet 2025
          (Fortune, The Register) ; HTTP Archive, Core Web Vitals
          Technology Report. Les prix des outils IA sont volatils :
          vérifiez les pages officielles avant de souscrire — les
          ordres de grandeur et les mécanismes (renouvellements,
          crédits), eux, sont structurels.
        </p>
        <p className="text-sm">
          <em>
            Ces fourchettes et comparaisons sont fournies à titre
            indicatif : seul un devis établi sur votre périmètre vous
            engage. Wix, Hostinger, Durable, Framer, Lovable, Bolt,
            v0, ChatGPT, Claude, Copilot, Cursor et Shopify sont des
            marques de leurs propriétaires respectifs ; ce guide est
            indépendant et sans affiliation — aucun lien de ce guide
            n&apos;est rémunéré.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
