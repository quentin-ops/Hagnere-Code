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

const guide = getGuide("combien-de-temps-pour-creer-un-site");

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
  wordCount: 4500,
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
      "Gestion de projet web",
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
      name: "Combien de temps pour créer un site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien de temps faut-il, en moyenne, pour créer un site web ?",
    answer:
      "Les fourchettes qui font consensus sur le marché français en 2026 : quelques jours pour une page unique réalisée par un professionnel, 4 à 8 semaines pour un site vitrine professionnel, 2 à 4 mois pour un e-commerce (jusqu'à 6 mois et plus pour un gros catalogue), et 3 à 6 mois et plus pour une plateforme sur mesure. En autonomie sur un outil de création, comptez 1 à 4 semaines de calendrier… pour 15 à 40 heures de travail effectif. Ces délais couvrent la création — la visibilité sur Google, elle, se compte en mois (la réponse complète est dans ce guide).",
  },
  {
    question: "Combien de temps pour créer un site vitrine ?",
    answer:
      "Un site vitrine de 3 à 8 pages prend 2 à 6 semaines chez un professionnel ; un site vitrine complet avec blog, 4 à 8 semaines ; un site plus ambitieux (nombreuses pages, multilingue, réservation), 2 à 4 mois. Les agences à méthode « sprint » livrent en 7 à 10 jours ouvrés, mais sous conditions strictes : contenus fournis avant le démarrage, périmètre figé, un décideur unique. Chez Hagnéré Code : 2 à 7 semaines pour un site vitrine classique (jusqu'à 14 semaines en gamme Premium multilingue), avec des dates contractuelles — le détail par gamme est dans notre guide du prix d'un site vitrine.",
  },
  {
    question: "Quel est le délai moyen pour un site e-commerce ?",
    answer:
      "Comptez 2 à 4 mois pour une boutique standard — et 4 à 8 semaines seulement pour un petit catalogue de moins de 50 produits sur une plateforme type Shopify ou WooCommerce. Les projets à gros catalogue, connexions à un logiciel de gestion ou vente aux professionnels passent à 6-12 mois. Ce qui allonge spécifiquement l'e-commerce : les fiches produits (photos, textes — souvent des semaines de travail côté client), les moyens de paiement et livraison à paramétrer et tester, et la recette complète du tunnel de commande. Chez Hagnéré Code : 6 à 8 semaines pour lancer une nouvelle boutique, 8 à 16 semaines pour une refonte complète ou un projet B2B multi-pays.",
  },
  {
    question: "Combien de temps faut-il pour créer un site WordPress ?",
    answer:
      "Par un freelance sérieux : 3 à 8 semaines au total — recherche du prestataire comprise (3 à 7 jours), brief et échanges (1 à 2 semaines), production (1 à 3 semaines), puis 2 à 3 tours de révisions. En agence : comptez au moins 2 mois. En autonomie : le calendrier s'étale sur 1 à 4 semaines, pour 15 à 40 heures de travail réel — dont 2 à 5 jours rien que pour apprivoiser l'outil. Le facteur qui domine tout : vos contenus. S'ils sont prêts au premier jour, le délai fond de 30 à 50 %.",
  },
  {
    question: "Peut-on vraiment créer un site internet en 24 h ?",
    answer:
      "Techniquement oui — les générateurs à intelligence artificielle produisent une structure de site avec textes et images en quelques minutes, et des offres « site en 24 h » existent autour de 1 500 €. Lisez ce que vous achetez : un modèle de page imposé (souvent non modifiable ensuite), des textes génériques à réécrire, votre logo posé sur une trame standard. C'est un point de départ honnête pour exister en ligne rapidement ; ce n'est ni un site pensé pour convertir, ni un site conçu pour être trouvé sur Google. La règle : on peut aller vite sur l'exécution, pas sur la stratégie.",
  },
  {
    question: "Puis-je créer un site web en une semaine ?",
    answer:
      "Oui, dans un cas précis : le sprint d'agence, qui livre un site vitrine de 5 à 10 pages en 7 à 10 jours ouvrés. Ses conditions sont toujours les mêmes — et elles sont instructives : tous les contenus (textes, images, logo) fournis avant le premier jour, un périmètre figé qu'on ne retouche pas en route, deux créneaux de validation d'une heure maximum, et un seul décideur. Autrement dit : une semaine de production suppose des semaines de préparation côté client. Sans ces conditions, le même site prend 4 à 8 semaines — la moyenne du marché.",
  },
  {
    question: "Pourquoi les agences web mettent-elles autant de temps ?",
    answer:
      "Parce que l'essentiel du calendrier n'est pas du développement. Sur 6 à 14 semaines de projet type, la technique pèse 2 à 8 semaines ; le reste, c'est le cadrage (comprendre votre métier et vos clients), les maquettes et leurs allers-retours de validation (2 à 3 tours en standard), vos contenus, la recette. Ajoutez la réalité des plannings : une agence sérieuse mène plusieurs projets et la vôtre s'insère dans un carnet de commandes. D'où l'intérêt de faire écrire au contrat les jalons, les dépendances côté client et le traitement d'un éventuel retard.",
  },
  {
    question: "Puis-je utiliser l'IA pour créer un site web rapidement ?",
    answer:
      "Oui, avec les yeux ouverts. Les générateurs des grandes plateformes créent réellement un site en quelques minutes : structure, textes, images. Leurs limites sont documentées par les éditeurs eux-mêmes : impossible de changer de modèle après génération chez certains, mises en page verrouillées chez d'autres, et un contenu générique par construction — le même que celui de milliers d'autres sites du même métier. L'IA accélère l'exécution standard ; elle ne remplace ni votre stratégie, ni des contenus qui parlent vraiment de votre entreprise — précisément ce qui fait qu'un site convertit.",
  },
  {
    question: "Le délai change-t-il si je tarde à fournir mes contenus ?",
    answer:
      "C'est LE facteur n°1, unanimement constaté : les contenus non prêts ajoutent 2 à 4 semaines à un projet type, et une enquête sectorielle mesure une médiane de 3 semaines d'attente pour que le client livre textes et photos. À l'inverse, des contenus prêts au premier jour réduisent le délai total de 30 à 50 % — un site vitrine passe par exemple de 6 à 3 semaines. Chaque semaine de retard sur une validation de maquette décale d'autant la mise en ligne : dans un projet web, la moitié du calendrier appartient au client.",
  },
  {
    question: "Faut-il rédiger le contenu avant ou pendant la création du site ?",
    answer:
      "Avant, sans hésiter — c'est la méthode dite « content-first ». Concevoir des maquettes avec de faux textes, puis y couler les vrais ensuite, produit des boucles de révisions sans fin : les textes réels ne rentrent jamais dans les cases prévues. À l'inverse, des contenus écrits d'abord permettent un design juste du premier coup. Si la rédaction vous paraît une montagne, déléguez-la : c'est un poste de devis courant (et il est inclus dans nos forfaits) — mais décidez-le au départ, pas au milieu du chantier.",
  },
  {
    question: "Comment accélérer la création de mon site internet ?",
    answer:
      "Quatre leviers prouvés, par ordre d'impact : préparez vos contenus avant le premier jour (−30 à −50 % de délai) ; désignez un décideur unique avec un créneau hebdomadaire réservé pour valider (les allers-retours de validation sont le deuxième poste de retard) ; figez le périmètre par écrit — plus de la moitié des projets subissent une dérive du périmètre en cours de route ; et choisissez un prestataire à méthode structurée (ateliers de cadrage, bibliothèque de composants éprouvés, dates contractuelles). Ce qui ne marche pas : mettre la pression sur la technique, qui n'est presque jamais le goulot.",
  },
  {
    question: "Que se passe-t-il une fois le site mis en ligne ?",
    answer:
      "Le travail continue, sans calendrier garanti. Google indique que l'exploration peut prendre de quelques jours à quelques semaines, mais exploration et indexation sont deux étapes distinctes : soumettre un sitemap signale les URL, sans garantir leur exploration ni leur indexation. La visibilité et les contacts organiques dépendent ensuite du marché, de la qualité et de la pertinence des contenus, de l'autorité du site, des liens et du socle technique. Dans le corpus observationnel cité par Ahrefs, moins de 2 % des pages nouvelles ont atteint le top 10 en moins d'un an sur les requêtes étudiées ; ce constat ne prédit ni le délai ni le résultat d'un site donné. Une campagne publicitaire peut aussi connaître une phase d'apprentissage, sans garantir des contacts.",
  },
  {
    question: "Sur combien d'années un site internet s'amortit-il ?",
    answer:
      "Question de comptable, réponse utile au dirigeant : un site inscrit à l'actif s'amortit en pratique sur 3 à 5 ans en France (3 ans pour un site marchand à technologie évolutive, 5 ans pour un site institutionnel stable) — le plan comptable plafonne à 5 ans quand la durée d'usage n'est pas déterminable. Alternative fiscale : la doctrine (BOFiP) assimile la création de site au régime des logiciels et autorise, sur option, la déduction immédiate en charges. Le bon choix dépend de votre situation — c'est une décision à prendre avec votre expert-comptable, pas avec votre agence.",
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
          { label: "Combien de temps pour créer un site" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les délais réels par type de site et par méthode, le planning phase par phase, la moitié du calendrier qui dépend de vous (chiffrée), les dépendances que personne n'anticipe, les rétro-plannings Noël / salon / saison — et le chrono d'après la mise en ligne, celui que les agences ne racontent jamais."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Vitrine : 4 – 8 semaines", description: "", color: "violet" },
          { number: "02", title: "E-commerce : 2 – 4 mois", description: "", color: "blue" },
          { number: "03", title: "Contenus prêts : −30 à −50 %", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/ressources/kit-cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte de site" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/demarrer-un-projet", label: "Décrire mon projet" },
        ]}
        faqTitle="Délais de création : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          « Trois semaines », promet une agence ; « deux minutes »,
          promet une IA ; « au moins trois mois », soupire votre
          entourage. Tous disent vrai — ils ne parlent pas du même
          chrono. Ce guide donne <strong>les délais réels 2026, la
          moitié du calendrier qui dépend de vous (chiffrée), et le
          compte à rebours complet — jusqu&apos;au moment où le site
          rapporte</strong>, pas seulement celui où il s&apos;allume.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les délais réels 2026" },
            { id: "de-quoi-parle-t-on", label: "2. Les trois chronos d'un site : travail, calendrier, visibilité" },
            { id: "par-methode", label: "3. Les délais par méthode : builder, IA, freelance, agence, sprint" },
            { id: "par-phase", label: "4. Le planning phase par phase" },
            { id: "promesses", label: "5. Le décodeur des promesses « site en 7 jours »" },
            { id: "facteur-client", label: "6. La moitié du calendrier vous appartient" },
            { id: "derapages", label: "7. Pourquoi les projets dérapent : les chiffres" },
            { id: "dependances", label: "8. Les dépendances externes qui ne se négocient pas" },
            { id: "avant-j0", label: "9. La chronologie cachée avant le premier jour" },
            { id: "apres-mise-en-ligne", label: "10. Après la mise en ligne : le chrono que personne ne raconte" },
            { id: "retro-planning", label: "11. Le rétro-planning business : Noël, salon, saison" },
            { id: "compresser", label: "12. Ce qui compresse vraiment les délais" },
            { id: "checklist", label: "13. Êtes-vous prêt à démarrer ? La checklist" },
            { id: "methode", label: "14. Méthode : tenir son délai en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les délais réels 2026</h2>
        <p>
          En 2026, créer un site internet prend en France{" "}
          <strong>quelques jours pour une page unique</strong> réalisée
          par un professionnel, <strong>2 à 6 semaines pour un site
          vitrine simple</strong> (3-8 pages), <strong>4 à 8 semaines
          pour un site vitrine professionnel complet</strong>,{" "}
          <strong>2 à 4 mois pour un e-commerce</strong> (6 mois et
          plus à gros catalogue) et <strong>3 à 6 mois et plus pour
          une plateforme sur mesure</strong>. En autonomie sur un
          outil de création : 1 à 4 semaines de calendrier, pour 15 à
          40 heures de travail réel. Et le facteur qui domine tout :{" "}
          <strong>des contenus prêts au premier jour réduisent le
          délai de 30 à 50 %</strong>.
        </p>
        <GuideTable
          headers={["Type de site", "Vous-même (builder)", "Freelance", "Agence"]}
          rows={[
            ["Page unique / landing", "2 – 5 heures (+ apprentissage)", "3 – 5 jours", "1 – 2 semaines"],
            ["Vitrine simple (3-8 pages)", "1 – 4 semaines", "2 – 6 semaines", "3 – 6 semaines"],
            ["Vitrine pro (blog, multilingue…)", "déconseillé", "4 – 8 semaines", "4 – 8 semaines (2 – 4 mois si ambitieux)"],
            ["E-commerce", "2 – 6 semaines (petit catalogue)", "4 – 10 semaines", "2 – 4 mois (6 – 12 mois à gros catalogue)"],
            ["Sur-mesure / plateforme", "—", "—", "3 – 6 mois et plus"],
          ]}
        />

        <InfoBox variant="blue" title="Les 10 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Builder</strong> : un outil de création de site en autonomie, par blocs à assembler (Wix, Squarespace…).</li>
            <li><strong>Cadrage</strong> : la phase où l&apos;on définit quoi construire, pour qui, avec quelles pages — avant de dessiner quoi que ce soit.</li>
            <li><strong>Maquette</strong> : le dessin fidèle des écrans, à valider avant le développement.</li>
            <li><strong>Recette</strong> : la phase de tests avant mise en ligne — formulaires, mobile, vitesse.</li>
            <li><strong>Périmètre</strong> : la liste écrite de ce qui est inclus dans le projet — sa dérive en cours de route est la plaie des plannings.</li>
            <li><strong>Contenus</strong> : vos textes, photos, logo, vidéos — le carburant du projet, et la cause n°1 des retards.</li>
            <li><strong>Indexation</strong> : l&apos;enregistrement de vos pages par Google — condition pour apparaître dans les résultats.</li>
            <li><strong>SEO</strong> : le référencement naturel — tout ce qui fait que Google vous affiche, gratuitement, au fil des mois.</li>
            <li><strong>DNS</strong> : l&apos;annuaire qui relie votre nom de domaine à votre site — ses changements mettent jusqu&apos;à 48 h à se propager.</li>
            <li><strong>Rétro-planning</strong> : le calendrier construit à l&apos;envers, depuis la date où le site doit être prêt.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Les trois chronos d&apos;un site : travail, calendrier, visibilité</h2>
        <p>
          Les promesses contradictoires du marché viennent d&apos;une
          confusion entre trois chronos.{" "}
          <strong>Le temps de travail</strong> : les heures réellement
          passées — 15 à 40 h pour un site simple en autonomie, des
          centaines en agence sur un gros projet.{" "}
          <strong>Le temps calendaire</strong> : les semaines qui
          s&apos;écoulent entre le premier jour et la mise en ligne —
          toujours plus long, car il inclut les allers-retours, vos
          validations, les plannings de chacun.{" "}
          <strong>Le temps de visibilité</strong> : le travail mené après
          la mise en ligne pour être découvert, compris et choisi, sans
          garantie d&apos;indexation, de position ni de client (section 10).
          Quand une IA promet « un site en 2 minutes »,
          elle parle du premier chrono, sur un périmètre minimal ;
          quand votre entourage dit « trois mois », il parle du
          deuxième ; après la mise en ligne, le troisième se pilote dans
          la durée à partir des données réellement observées.
        </p>
        <p>
          Fil rouge de ce guide : <strong>scénario fictif composite —
          ni client ni témoignage réel — avec Mécanic&apos;Alpes,
          sous-traitant d&apos;usinage à Annecy</strong>, 22 salariés.
          Son échéance est concrète : un salon industriel majeur
          mi-mars, où son site vieillissant fait tache face aux
          donneurs d&apos;ordres. Nouveau site vitrine d&apos;une
          vingtaine de pages, bilingue français-anglais. Question du
          dirigeant : « quand dois-je lancer le projet pour être prêt ? »
          — nous y répondrons précisément, rétro-planning à
          l&apos;appui (section 11).
        </p>

        <h2 id="par-methode">3. Les délais par méthode : builder, IA, freelance, agence, sprint</h2>
        <GuideTable
          headers={["Méthode", "Délai calendaire", "Ce qu'on oublie de dire"]}
          rows={[
            ["Builder en autonomie (Wix, etc.)", "1 – 4 semaines", "15 – 40 h de VOTRE travail, dont 2 – 5 jours d'apprentissage de l'outil"],
            ["Générateur IA", "Quelques minutes", "Contenu générique par construction ; modèle souvent verrouillé après génération"],
            ["Freelance", "3 – 8 semaines", "Ajoutez la recherche du prestataire (3 – 7 jours) et sa disponibilité"],
            ["Agence classique", "6 – 14 semaines", "« Au moins 2 mois » de production, hors phase de cadrage amont"],
            ["Agence à méthode sprint", "7 – 10 jours ouvrés", "Sous conditions strictes : contenus prêts AVANT, périmètre figé, décideur unique"],
          ]}
        />
        <p>
          Lecture honnête de ce tableau : les méthodes rapides ne
          suppriment pas le travail, elles le déplacent. (Et pour
          choisir entre les lignes freelance et agence, notre{" "}
          <Link href="/guides/agence-web-ou-freelance">comparatif
          agence ou freelance</Link> donne la grille par budget et par
          risque.) Le builder
          déplace les heures vers vous ; l&apos;IA les déplace vers
          l&apos;après (réécrire le générique) ; le sprint les déplace
          vers l&apos;avant (tout préparer avant le premier jour).
          C&apos;est le principe de fond de ce guide :{" "}
          <strong>un site rapide est un site préparé</strong> — la
          vitesse s&apos;achète en amont, jamais en cours de route.
        </p>
        <p>
          Comment choisir sa méthode ? Par l&apos;enjeu, pas par le
          calendrier. Si le site doit seulement exister — rassurer
          ceux qui vous cherchent déjà —, un builder bien utilisé ou
          une offre packagée font l&apos;affaire, vite. Si le site
          doit rapporter — être trouvé sur Google, convaincre,
          convertir —, le raccourci se paie plus tard : en refonte
          prématurée, en invisibilité, en image. La question à se
          poser avant « combien de temps ? » est donc « pour faire
          quoi ? » — notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">guide
          des prix</Link> aide à trancher ce rôle en premier.
        </p>

        <h2 id="par-phase">4. Le planning phase par phase</h2>
        <p>
          Un projet professionnel type — notre fil rouge
          Mécanic&apos;Alpes, une vingtaine de pages — se déroule en
          six phases, aux durées remarquablement convergentes
          d&apos;une source à l&apos;autre :
        </p>
        <GuideTable
          headers={["Phase", "Durée type", "Qui tient le chrono"]}
          rows={[
            ["Cadrage : objectifs, pages, arborescence (le plan de vos pages)", "1 – 2 semaines", "Partagé — vos décisions, notre méthode"],
            ["Maquettes + validations", "1 – 3 semaines", "Vous : chaque semaine de validation tardive décale tout"],
            ["Contenus : textes, photos, traductions", "1 – 3 semaines (en parallèle)", "Vous (ou le rédacteur que vous déléguez)"],
            ["Développement", "2 – 8 semaines", "Le prestataire"],
            ["Recette : tests, corrections", "3 – 7 jours", "Partagé — vos retours, nos corrections"],
            ["Mise en ligne", "1 – 2 jours", "Le prestataire (+ DNS : jusqu'à 48 h)"],
          ]}
        />
        <p>
          Deux lectures. D&apos;abord, <strong>le développement — la
          « technique » — ne pèse qu&apos;un tiers à une moitié du
          calendrier</strong> : mettre la pression sur le développeur
          ne comprime donc qu&apos;une fraction du délai. Ensuite, la
          colonne de droite : sur six phases, une seule est entièrement
          chez le prestataire. Le reste se joue chez vous ou entre les
          deux — c&apos;est l&apos;objet de la section 6.
        </p>

        <h2 id="promesses">5. Le décodeur des promesses « site en 7 jours »</h2>
        <p>
          Les offres ultra-rapides sont réelles — à condition de lire
          ce qu&apos;elles vendent, et leurs propres documents le
          disent. Les <strong>sprints d&apos;agence « 7 à 10 jours
          ouvrés »</strong> exigent noir sur blanc : contenus complets
          fournis avant le démarrage, périmètre de 5 à 10 pages figé,
          deux créneaux de validation d&apos;une heure, un seul
          décideur — la semaine de production repose sur des semaines
          de préparation. Les <strong>abonnements low-cost « site en
          7 jours » (voire « en 2 minutes » par IA)</strong> livrent un
          modèle imposé rempli de textes génériques ; leurs conditions
          précisent souvent que les mises à jour se limitent au
          remplacement de textes et d&apos;images, sans toucher à la
          mise en page. Et les <strong>offres « urgence 24 h »</strong>{" "}
          (autour de 1 500 €) assument le compromis : un gabarit
          standard, vite habillé. Aucune de ces offres ne ment
          vraiment — elles répondent à un autre besoin que « un site
          qui me ramène des clients ». Le test en une question :{" "}
          <strong>demandez ce qui se passe si vos contenus ne sont pas
          prêts</strong>. La réponse vous dira si le délai promis est
          le vôtre ou celui du vendeur.
        </p>

        <h2 id="facteur-client">6. La moitié du calendrier vous appartient</h2>
        <p>
          Toutes les sources convergent, et nous le constatons sur
          chaque projet : <strong>la cause n°1 des retards
          n&apos;est pas technique — ce sont les contenus et les
          validations côté client</strong>. Les chiffres existent :
          une enquête sectorielle mesure une <strong>médiane de
          3 semaines</strong> pour qu&apos;un client livre textes et
          photos (chiffre d&apos;un éditeur d&apos;outil de collecte —
          biais possible, mais le consensus des agences est massif) ;
          les contenus non prêts ajoutent <strong>2 à 4 semaines</strong>{" "}
          à un projet type ; à l&apos;inverse, des contenus prêts au
          premier jour réduisent le délai total de{" "}
          <strong>30 à 50 %</strong> — un site vitrine passe de 6 à
          3 semaines. Côté validations : le standard du secteur est de
          2 à 3 tours de révisions de maquettes ; 78 % des projets
          créatifs bien organisés sont approuvés en une semaine ou
          moins… et les équipes mal organisées montent à plus de
          10 tours étalés sur des semaines. Le coût de ce désordre est
          mesuré de l&apos;autre côté aussi : près d&apos;un
          professionnel de la création sur quatre déclare passer plus
          de 10 heures par semaine à courir après informations,
          retours et validations — des heures que, sur un devis au
          forfait, quelqu&apos;un finit toujours par payer.
        </p>
        <FormulaBox>
          <strong>La règle des deux calendriers :</strong>
          <br />
          Délai total = temps de production (le prestataire)
          + temps de décision et de contenus (vous)
          <br />
          <br />
          Dans le scénario Mécanic&apos;Alpes : 5 semaines de production
          annoncées… et un délai simulé de 9 semaines au premier devis — 4 semaines
          de différence entièrement logées côté client : textes
          techniques à écrire, photos d&apos;atelier à faire, deux
          comités de validation espacés. C&apos;est le poste sur lequel
          le dirigeant a le plus de pouvoir — et le seul qui ne coûte
          rien à compresser.
        </FormulaBox>

        <h2 id="derapages">7. Pourquoi les projets dérapent : les chiffres</h2>
        <p>
          Pour fixer les attentes, les grandes études de la gestion de
          projet — qui portent sur l&apos;informatique au sens large,
          pas spécifiquement sur les sites de PME, précision
          d&apos;honnêteté — donnent l&apos;échelle :{" "}
          <strong>seules 36 % des organisations déclarent livrer
          leurs projets à l&apos;heure</strong> (Wellingtone 2026) ;{" "}
          <strong>52 % des projets subissent une dérive du
          périmètre</strong> — le fameux « tant qu&apos;on y est,
          ajoutons une page » (PMI) ; et les grands projets
          informatiques dépassent en moyenne leur budget de 45 %
          (McKinsey-Oxford). Un site vitrine de PME, cadré et mené
          avec méthode, n&apos;a pas ce profil de risque — mais les
          mécanismes de dérapage sont identiques, en miniature : un
          périmètre qui bouge, des décisions qui traînent, des
          contenus qui n&apos;arrivent pas. Une étude publiée dans la
          Harvard Business Review (1 471 projets informatiques) ajoute
          la queue de distribution : un projet sur six devient un
          « cygne noir » — dépassement moyen de 200 % du budget et de
          70 % du délai. Ce ne sera pas votre site vitrine ; mais
          c&apos;est la raison d&apos;être des garde-fous. La bonne
          nouvelle : à cette échelle, chaque mécanisme a un antidote
          simple — périmètre écrit, décideur unique, contenus
          d&apos;abord — et c&apos;est tout l&apos;objet des
          sections 12 et 13.
        </p>

        <h2 id="dependances">8. Les dépendances externes qui ne se négocient pas</h2>
        <p>
          Certains délais ne dépendent ni de vous ni du prestataire —
          les découvrir en cours de route est le grand classique du
          planning qui explose. Les voici, chiffrés :
        </p>
        <GuideTable
          headers={["Dépendance", "Délai réel", "Le piège"]}
          rows={[
            ["Transfert de nom de domaine", "2 – 7 jours", "Verrou de 60 jours après tout enregistrement ou changement de titulaire récent — incontournable"],
            ["Propagation DNS (changement d'adresse)", "Jusqu'à 48 h", "Réductible à quelques minutes si préparée à l'avance (réglage technique du TTL)"],
            ["Photos professionnelles", "1 – 2 semaines après la séance", "Plus le délai pour obtenir la séance elle-même"],
            ["Paiement et livraison (e-commerce)", "1 – 3 semaines", "Vérification d'identité (KYC) du prestataire de paiement, contrat de vente à distance, comptes transporteurs : à lancer dès la signature"],
            ["Traduction professionnelle", "≈ 2 000 – 2 500 mots/jour", "+ 30 à 50 % pour la relecture — un site bilingue de 5 000 mots = ~1 semaine"],
            ["Rétractation légale (contrat signé hors établissement)", "14 jours", "Certains prestataires ne démarrent pas avant son expiration"],
            ["Dépôt de marque (si le nom n'est pas protégé)", "4 – 6 mois (INPI)", "À lancer très en amont — une opposition ajoute 6 à 12 mois"],
          ]}
        />
        <p>
          La ligne la plus traître est la première : le{" "}
          <strong>verrou de 60 jours</strong> imposé par le régulateur
          des noms de domaine après un enregistrement ou un changement
          de titulaire. Si votre domaine est chez un ancien prestataire
          fâché, ou si vous venez de modifier les coordonnées du
          titulaire, aucune bonne volonté ne le débloquera. Premier
          réflexe de tout projet : <strong>vérifiez qui contrôle votre
          nom de domaine, aujourd&apos;hui</strong>.
        </p>

        <h2 id="avant-j0">9. La chronologie cachée avant le premier jour</h2>
        <p>
          Le compteur que personne n&apos;inclut dans « le temps pour
          créer un site » : tout ce qui précède le premier jour de
          production. La décision d&apos;abord — comparer les
          prestataires, obtenir les devis, arbitrer en interne : les
          enquêtes sur les cycles d&apos;achat B2B (les achats entre
          entreprises) situent la majorité
          des décisions <strong>au-delà d&apos;un mois, souvent 1 à
          3 mois</strong>, et les achats complexes impliquent 6 à
          10 personnes côté client — qui ne passent, selon Gartner,
          que 17 % de leur temps d&apos;achat en contact avec les
          fournisseurs : le reste se joue dans vos réunions internes,
          d&apos;où l&apos;intérêt d&apos;un décideur mandaté tôt.
          Le démarrage ensuite : entre la
          signature et le premier jour effectif s&apos;intercalent
          l&apos;embarquement (collecte des accès — hébergement,
          domaine, statistiques —, souvent le goulot), et la file
          d&apos;attente du prestataire — un carnet de commandes de
          quelques semaines est le signe d&apos;une structure saine,
          pas un défaut. Comptez, en réaliste,{" "}
          <strong>2 à 6 semaines entre « on signe » et « on
          commence »</strong>. Pour Mécanic&apos;Alpes, cette
          chronologie cachée a pesé autant que la production :
          6 semaines de décision interne + 3 semaines
          d&apos;embarquement avant la première maquette.
        </p>

        <GuideInlineCTA
          title="Votre échéance est déjà fixée ?"
          description="Décrivez votre projet et sa date butoir en 3 minutes : nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti avec un rétro-planning réaliste. Le devis fixe les jalons, les dépendances et le traitement d'un éventuel retard."
          tags={["Objectif : prochain jour ouvré", "Jalons écrits au devis", "Rédaction selon forfait"]}
        />

        <h2 id="apres-mise-en-ligne">10. Après la mise en ligne : le chrono que personne ne raconte</h2>
        <p>
          Votre site est en ligne. Combien de temps avant qu&apos;il
          rapporte ? Il n&apos;existe pas de délai universel, et aucune
          soumission technique ne permet d&apos;en promettre un.
          <strong> L&apos;exploration et l&apos;indexation sont deux étapes
          distinctes</strong> : Google indique que l&apos;exploration peut
          prendre de quelques jours à quelques semaines, mais une page
          explorée peut ne pas être indexée. Soumettre le plan du site
          (sitemap) signale les URL et leurs évolutions à Google ; ce
          fichier ne garantit ni leur exploration, ni leur indexation.{" "}
          <strong>Le{" "}
          <Link href="/services/referencement-google">référencement
          naturel</Link></strong> : le délai et le résultat dépendent du
          marché, de la qualité et de la pertinence des contenus, de
          l&apos;autorité du site, des liens obtenus et du socle technique.
          Dans le corpus observationnel présenté par Ahrefs dans l&apos;étude
          citée, <strong>moins de 2 % des pages nouvellement publiées ont
          atteint le top 10 en moins d&apos;un an</strong> sur les requêtes
          étudiées. Ce résultat décrit ce corpus ; il ne prédit ni un
          délai, ni une position, ni des contacts pour votre site.{" "}
          <strong>La{" "}
          <Link href="/services/publicite-en-ligne">publicité en
          attendant</Link></strong> : Google Ads
          lui-même décrit une phase d&apos;apprentissage pour certaines
          campagnes. Elle ne garantit ni stabilisation à une date donnée,
          ni rentabilité. Moralité pour le planning :{" "}
          <strong>un site mis en ligne n&apos;est pas une visibilité
          acquise</strong>. Prévoyez après la livraison le travail de
          contenu, d&apos;autorité, de mesure et d&apos;amélioration, sans
          inscrire une date de « premier client Google » au contrat.
        </p>
        <InfoBox variant="blue" title="La frise de planification de Mécanic'Alpes, sans délai SEO garanti">
          Décision interne et choix du prestataire : 6 semaines.
          Embarquement (accès, contenus, planification) : 3 semaines.
          Production : 9 semaines. Mise en ligne : 2 jours, DNS
          compris. Le sitemap serait soumis dès la mise en ligne pour
          signaler les URL. Ensuite, aucune date fiable ne peut être
          inscrite : Google peut explorer puis indexer les pages à des
          moments différents, ou choisir de ne pas les indexer. Les
          positions et demandes entrantes dépendraient de la concurrence,
          des contenus, de l&apos;autorité, des liens et de la qualité
          technique. <strong>La frise ferme donc le calendrier de
          production, pas celui du premier client venu de Google.</strong>
          La visibilité se pilote après la mise en ligne avec des mesures
          réelles ; elle ne se déduit pas du sitemap.
        </InfoBox>

        <h2 id="retro-planning">11. Le rétro-planning business : Noël, salon, saison</h2>
        <p>
          Quatre échéances types, calculées à l&apos;envers — la
          section que nous n&apos;avons trouvée chiffrée nulle part
          ailleurs :
        </p>
        <GuideTable
          headers={["Échéance", "Le site doit être en ligne", "Lancez le projet au plus tard"]}
          rows={[
            ["Salon professionnel (ex. mi-mars)", "10 – 15 jours avant l'événement", "Décembre — soit ~12 semaines avant la mise en ligne : embarquement (3 sem.) + durée réaliste du projet (9 sem.), hors décision interne"],
            ["Noël (e-commerce)", "Fin septembre – début octobre", "Mai-juin — contenus « idées cadeaux » publiés dès octobre, campagnes rodées avant le rush"],
            ["Black Friday", "8 – 10 semaines avant (tests de charge compris — vérifier que la boutique tient l'affluence)", "Juillet-août"],
            ["Saison touristique (été)", "Au printemps, rodé avant le pic", "L'automne précédent — on construit en basse saison"],
          ]}
        />
        <p>
          Dans le scénario Mécanic&apos;Alpes : salon mi-mars, site en
          ligne visé fin février (15 jours de marge), durée réaliste
          de 9 semaines — production plus contenus et validations
          (section 6) —, embarquement 3 semaines —
          <strong> le projet devrait se lancer début décembre</strong>.
          S&apos;il ne démarrait qu&apos;en janvier, tenir fin février
          imposerait les compresseurs de la section suivante — contenus
          d&apos;abord, décideur unique, périmètre figé — sans garantie et
          avec une marge presque nulle. La règle générale :{" "}
          <strong>ajoutez toujours une marge de 2 à 3 semaines à votre
          rétro-planning</strong> ; personne ne s&apos;est jamais
          plaint d&apos;un site prêt en avance.
        </p>
        <p>
          Et si vous êtes déjà en retard ? Vous lisez peut-être ceci
          en été avec Noël en tête : le lancement idéal (mai-juin) est
          passé — la saison, non. Trois options, dans l&apos;ordre de
          préférence. Un, viser le Black Friday avec un périmètre
          réduit : catalogue resserré, contenus prêts avant le premier
          jour, méthode sprint — mieux vaut un petit site rodé
          qu&apos;un grand site bâclé pour Noël. Deux, faire la saison
          sur l&apos;existant (ou une simple page de présentation
          alimentée par des campagnes) et construire le vrai site en
          janvier, en basse saison, pour être rodé au printemps.
          Trois — et c&apos;est un avertissement, pas une option : si
          votre projet est la refonte d&apos;un site qui vend déjà,{" "}
          <strong>ne migrez jamais à l&apos;approche du pic</strong> —
          une bascule mal préparée peut coûter des semaines de trafic
          Google, notre{" "}
          <Link href="/guides/prix-refonte-site-internet">guide de la
          refonte</Link> explique pourquoi et comment.
        </p>
        <p>
          Un dernier principe, contre-intuitif et précieux :{" "}
          <strong>on construit en basse saison</strong>. Le pire moment
          pour lancer un projet de site est celui où l&apos;on en
          ressent le besoin — la haute saison, quand les demandes
          affluent et que personne chez vous n&apos;a une heure pour
          valider une maquette ou écrire un texte. Les organismes
          d&apos;accompagnement des TPE le répètent aux professionnels
          du tourisme : investissez dans le site pendant
          l&apos;intersaison, pour encaisser pendant le pic. La règle
          vaut pour tous les métiers saisonniers — et elle a un bonus
          caché : en basse saison, vous avez aussi le temps de
          préparer les contenus, le levier des −30 à −50 % de la
          section 6.
        </p>

        <h2 id="compresser">12. Ce qui compresse vraiment les délais</h2>
        <p>
          Face aux promesses marketing, voici les leviers dont
          l&apos;effet est mesuré par des études :
        </p>
        <ul>
          <li>
            <strong>Les contenus d&apos;abord</strong> (méthode
            « content-first ») : concevoir sur les vrais textes évite
            les boucles de révisions sans fin — c&apos;est le levier
            des −30 à −50 % (section 6), et la raison pour laquelle
            nos forfaits incluent la rédaction.
          </li>
          <li>
            <strong>Une bibliothèque de composants éprouvés</strong>{" "}
            (design system) : +34 % de vitesse mesurée côté design
            (étude Figma), +47 % côté développement (étude Sparkbox —
            2,2 h au lieu de 4,2 h sur un même écran). C&apos;est
            l&apos;industrialisation sans la standardisation du
            résultat.
          </li>
          <li>
            <strong>Le cadrage compressé en atelier</strong> : la
            méthode du « design sprint » (Google Ventures) règle en
            5 jours ce que des réunions espacées étalent sur des
            semaines — comprendre, décider, prototyper, tester.
          </li>
          <li>
            <strong>La collecte structurée des contenus</strong> : un
            simple outil de collecte avec liste, formats et relances
            divise par deux le délai de remise des contenus clients
            (médiane de 3 semaines → 1,5) et réduit de 67 % les
            projets bloqués, selon l&apos;enquête d&apos;un éditeur du
            secteur.
          </li>
          <li>
            <strong>Un décideur unique, un créneau hebdomadaire</strong> :
            l&apos;antidote aux 10 tours de validation — et la
            condition n°1 que posent toutes les offres rapides
            sérieuses.
          </li>
        </ul>

        <h2 id="checklist">13. Êtes-vous prêt à démarrer ? La checklist</h2>
        <InfoBox variant="emerald" title="La checklist avant de contacter un prestataire">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Vos accès</strong> : qui contrôle le nom de domaine, l&apos;hébergement actuel, les statistiques ? Rassemblez identifiants et contacts — c&apos;est le goulot n°1 de l&apos;embarquement.</li>
            <li><strong>Vos contenus</strong> : textes (même bruts), photos, logo en haute définition — ou la décision assumée de déléguer la rédaction, prise dès le devis.</li>
            <li><strong>Votre arborescence</strong> : la liste des pages, couchée sur papier — même imparfaite, elle cadre le périmètre.</li>
            <li><strong>Votre décideur</strong> : une personne, un créneau hebdomadaire réservé pour valider. Un comité de six personnes = un planning multiplié.</li>
            <li><strong>Votre échéance réelle</strong> : salon, saison, lancement — posée dès le premier échange, avec le rétro-planning de la section 11.</li>
            <li><strong>Votre budget</strong> : une fourchette assumée — notre <Link href="/guides/combien-coute-un-site-internet">guide des prix</Link> vous la donne en 20 minutes de lecture.</li>
          </ul>
        </InfoBox>
        <p>
          Cette liste n&apos;est pas une coquetterie d&apos;agence :
          chaque case cochée avant le premier rendez-vous se paie en
          semaines gagnées — et un prestataire sérieux vous la
          demandera de toute façon. Notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
          de cahier des charges</Link> la transforme en document
          complet, prêt à envoyer à trois prestataires.
        </p>

        <InfoBox variant="amber" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>4 – 8 semaines</strong> : le site vitrine professionnel (e-commerce : 2 – 4 mois ; sur-mesure : 3 – 6 mois et plus).</li>
            <li><strong>−30 à −50 %</strong> : l&apos;effet de contenus prêts au premier jour — le levier le plus puissant, et il est chez vous.</li>
            <li><strong>3 semaines</strong> : la médiane d&apos;attente des contenus client — la moitié du calendrier vous appartient.</li>
            <li><strong>60 jours</strong> : le verrou incontournable sur un nom de domaine récemment transféré ou modifié — vérifiez vos accès aujourd&apos;hui.</li>
            <li><strong>Moins de 2 %</strong> : dans le corpus Ahrefs cité, la part des pages nouvelles ayant atteint le top 10 en moins d&apos;un an sur les requêtes étudiées — une observation, jamais un délai promis pour votre site.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">14. Méthode : tenir son délai en 5 étapes</h2>
        <ol>
          <li>
            <strong>Partez de l&apos;échéance business, pas de
            l&apos;envie.</strong> Salon, saison, lancement : le
            rétro-planning de la section 11, marge de 2-3 semaines
            comprise, donne votre date de lancement de projet.
          </li>
          <li>
            <strong>Préparez avant de consulter.</strong> La checklist
            de la section 13 : accès, contenus, arborescence,
            décideur. C&apos;est la moitié du délai qui se joue là.
          </li>
          <li>
            <strong>Exigez un planning phase par phase</strong> — avec
            la colonne « qui tient le chrono » (section 4) et les
            hypothèses écrites (nombre de tours de validation,
            conditions de démarrage).
          </li>
          <li>
            <strong>Verrouillez le périmètre par écrit.</strong> Les
            bonnes idées en cours de route vont dans une liste
            « version 2 » — plus de la moitié des projets dérapent par
            le périmètre, pas par la technique.
          </li>
          <li>
            <strong>Planifiez aussi l&apos;après-lancement.</strong>
            Exploration, indexation, SEO et campagnes (section 10) se
            suivent avec des données réelles ; aucun calendrier de projet
            ne peut garantir la date du premier client.
          </li>
        </ol>
        <p>
          C&apos;est le déroulé exact de notre méthode : un{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 %
          si le projet se lance)</strong> qui compresse le cadrage en
          atelier et produit périmètre, maquettes clés et planning
          engageant — puis une production à{" "}
          <strong>jalons, dépendances et conditions écrits au devis</strong>{" "}
          (méthode <Link href="/methode">Sprint Fixe™</Link>),
          rédaction prévue selon le forfait pour réduire la
          cause n°1 de dérapage.{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet et
          votre échéance en 3 minutes</Link> : objectif de réponse personnelle
          le prochain jour ouvré, sans délai garanti, gratuitement et sans
          engagement. Et pour le
          budget qui va avec ces délais, notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">panorama
          des prix d&apos;un site internet</Link> complète ce guide.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" target="_blank" rel="noopener noreferrer">Google Search Central, délais d&apos;exploration et d&apos;indexation</a> ;{" "}
          <a href="https://ahrefs.com/blog/how-long-does-it-take-to-rank/" target="_blank" rel="noopener noreferrer">Ahrefs, « How long does it take to rank in Google? » (étude 2025)</a> ;{" "}
          <a href="https://support.google.com/google-ads/answer/13020501" target="_blank" rel="noopener noreferrer">Google Ads, période d&apos;apprentissage des campagnes</a> ;{" "}
          <a href="https://wellingtone.co.uk/publications/state-of-project-management-research/" target="_blank" rel="noopener noreferrer">Wellingtone, State of Project Management 2026</a> ;{" "}
          <a href="https://www.pmi.org/learning/library/scope-creep-rising-11308" target="_blank" rel="noopener noreferrer">PMI, Pulse of the Profession (dérive du périmètre)</a> ;{" "}
          <a href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value" target="_blank" rel="noopener noreferrer">McKinsey-Oxford, grands projets IT</a> ;{" "}
          <a href="https://www.figma.com/blog/measuring-the-value-of-design-systems/" target="_blank" rel="noopener noreferrer">Figma, valeur des design systems (+34 %)</a> ;{" "}
          <a href="https://sparkbox.com/foundry/design_system_roi_impact_of_design_systems_business_value_carbon_design_system" target="_blank" rel="noopener noreferrer">Sparkbox, étude design system (+47 %)</a> ;{" "}
          <a href="https://www.gv.com/sprint/" target="_blank" rel="noopener noreferrer">Google Ventures, la méthode Design Sprint</a> ;{" "}
          <a href="https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en" target="_blank" rel="noopener noreferrer">ICANN, règles de transfert de domaine (verrou 60 jours)</a> ;{" "}
          <a href="https://bofip.impots.gouv.fr/bofip/1818-PGP.html/identifiant=BOI-BIC-CHG-20-30-30-20170301" target="_blank" rel="noopener noreferrer">BOFiP, régime fiscal des coûts de création de site</a> ;
          enquêtes sectorielles : Content Snare (délais de remise des
          contenus — éditeur d&apos;outil, biais signalé), InSource /
          inMotionNow (validations créatives), Databox (cycles de vente
          B2B), Gartner (comités d&apos;achat), GoodFirms (délais de
          conception) ; fourchettes de délais : recoupement de guides
          et pages d&apos;agences françaises 2025-2026 (Madra, Le Site
          Français, Simplébo, NZ Digital, Webfreeyou, EcomForge,
          Citron Noir, Siagneo, TechPath, Epixelic, Wix, Shopify…),
          toutes juges et parties — c&apos;est signalé, et
          c&apos;est pourquoi chaque affirmation structurante
          s&apos;appuie ici sur une source non commerciale. Les délais
          évoluent : vérifiez avant de vous engager.
        </p>
        <p className="text-sm">
          <em>
            Les délais de ce guide sont des constats de marché, donnés
            à titre indicatif : seul un planning établi sur votre
            périmètre vous engage. Le volet comptable et fiscal
            (amortissement, option charges) ne constitue pas un conseil
            personnalisé — consultez votre expert-comptable.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
