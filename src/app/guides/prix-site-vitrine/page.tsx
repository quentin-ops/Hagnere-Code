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

const guide = getGuide("prix-site-vitrine");

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
      "Sites vitrines",
      "Next.js",
      "React",
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
      name: "Prix d'un site vitrine",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le prix moyen d'un site vitrine en France en 2026 ?",
    answer:
      "Le consensus du marché : 0 à 1 000 € en autonomie sur un builder, un outil de création en ligne comme Wix ou Squarespace (l'outil est parfois gratuit à l'entrée, mais l'abonnement mensuel court à vie), 800 à 3 000 € chez un freelance, 2 000 à 6 000 € en agence standard, et 6 000 à 30 000 € en agence pour du sur-mesure. La grille officielle relayée par France Num situe un one-page entre 500 et 2 000 € et un site basique entre 900 et 5 000 €. Chez Hagnéré Code, un site vitrine sur mesure orienté conversion démarre à 6 900 €.",
  },
  {
    question: "Combien coûte la création d'un site vitrine chez un freelance vs en agence ?",
    answer:
      "Un freelance facture généralement 800 à 3 000 € (jusqu'à 5 000 € pour un profil expérimenté), une agence 2 000 à 6 000 € en standard et 6 000 à 30 000 € en sur-mesure. L'écart s'explique par le périmètre : cadrage, rédaction, SEO technique, vérification finale sur tous les écrans (la « recette ») et garanties sont rarement tous inclus chez un indépendant seul. Comparez toujours à périmètre égal, poste par poste.",
  },
  {
    question: "Quel est le prix d'un site vitrine WordPress ?",
    answer:
      "Avec un thème acheté : 800 à 3 000 € chez un freelance. En développement sur mesure WordPress : 5 000 à 15 000 € en agence (certaines facturent le thème sur-mesure dès 13 500 €). Ajoutez les coûts récurrents spécifiques à WordPress : licences de plugins (500 à 1 000 €/an sur un site professionnel) et maintenance de sécurité (30 à 120 €/mois), un poste quasi nul sur un site statique Next.js.",
  },
  {
    question: "Peut-on créer un site vitrine gratuitement avec Wix, Canva ou l'IA ?",
    answer:
      "Un outil gratuit ou peu coûteux peut suffire pour tester une idée ou publier une présence provisoire. Avant de l'utiliser pour une activité professionnelle, vérifiez le domaine, l'export, les droits, les abonnements, les intégrations, l'accessibilité, la performance et les réglages SEO réellement disponibles. La plateforme ne rend pas automatiquement le référencement mauvais, et un développement sur mesure ne garantit ni trafic ni amortissement : comparez le besoin et le coût total.",
  },
  {
    question: "Quels sont les coûts cachés d'un site vitrine ?",
    answer:
      "Les plus fréquents : la rédaction des contenus (150 à 800 € par page si elle n'est pas incluse), les photos professionnelles (600 à 2 000 €), les licences de plugins WordPress (500 à 1 000 €/an), la bannière cookies conforme RGPD, la maintenance, et la refonte prématurée d'un site low-cost, qu'il faut généralement refaire au bout de 2 à 3 ans. Vérifiez ce que couvre exactement chaque devis.",
  },
  {
    question: "Combien coûte la maintenance annuelle d'un site vitrine ?",
    answer:
      "Les fourchettes relevées dans les offres publiques vont de quelques dizaines à plusieurs centaines d'euros par mois selon le socle et le niveau de service ; ce n'est pas une médiane de marché. Demandez le détail : mises à jour, sauvegardes, supervision, corrections, contenus, délais et exclusions. Un site statique réduit certaines mises à jour applicatives, mais ses dépendances, son hébergement, sa sécurité, ses contenus et ses intégrations doivent toujours être suivis.",
  },
  {
    question: "Combien de pages pour un site vitrine ?",
    answer:
      "L'essentiel tient en 5 pages : accueil, offre/services, à-propos, réalisations ou preuves, contact. Un site orienté acquisition ajoute une page par service (pour le référencement Google) et un blog, soit 10 à 20 pages. Au-delà, on parle plutôt de site éditorial. Le bon nombre de pages découle des recherches que tapent vos clients : une page ne peut viser sérieusement qu'une intention de recherche.",
  },
  {
    question: "Site vitrine ou one-page : lequel choisir ?",
    answer:
      "Un one-page (500 à 2 000 €) suffit pour valider une activité, présenter un événement ou appuyer une campagne publicitaire. Dès que vous visez le référencement naturel, le multi-pages s'impose : Google positionne des pages, pas des sections. Si votre one-page doit un jour « faire du SEO », vous le referez — autant l'anticiper dans l'architecture dès le départ.",
  },
  {
    question: "Quelle est la différence entre un site vitrine et un site e-commerce ?",
    answer:
      "Le vitrine présente votre activité et convertit en prises de contact ; l'e-commerce encaisse des paiements en ligne (catalogue, panier, logistique), ce qui multiplie la complexité et le prix — 2 000 à 12 000 € sur plateforme, 15 000 € et plus en sur-mesure. La majorité des TPE n'ont pas besoin de vendre en ligne : seules 27 % des TPE-PME françaises ont une solution de vente en ligne.",
  },
  {
    question: "Pourquoi faire un site vitrine quand on a déjà Google Business et Instagram ?",
    answer:
      "Parce que vous n'êtes pas chez vous : un compte peut être suspendu, l'algorithme change, et la concurrence s'affiche à côté de votre fiche. Les chiffres plaident pour le cumul : 76 % des personnes qui font une recherche locale sur mobile visitent un commerce dans les 24 heures, 84 % des consommateurs jugent une entreprise avec site plus crédible, et votre site est le seul endroit où la conversion (formulaire, devis, rendez-vous) vous appartient à 100 %.",
  },
  {
    question: "Un site vitrine pas cher est-il rentable ?",
    answer:
      "Le prix seul ne permet pas de répondre. Définissez le rôle du site, mesurez les visites réellement qualifiées et les demandes attribuables, puis ajoutez au prix initial les abonnements, la maintenance, le temps interne et une éventuelle reconstruction. Un benchmark de conversion ne prédit pas votre activité, et aucun niveau de design ou de référencement ne garantit des clients. Raisonnez sur vos données et vos hypothèses explicites.",
  },
  {
    question: "Comment obtenir un devis précis pour mon site vitrine ?",
    answer:
      "Décrivez votre projet via notre parcours guidé. Nos scénarios tarifaires servent à se situer ; le devis précise pages, contenus, intégrations, droits, coûts tiers, objectifs de performance et période de correction.",
  },
  {
    question: "Refaire un site existant coûte-t-il moins cher qu'en créer un ?",
    answer:
      "Rarement : une refonte se chiffre comme une création de même gamme (mêmes postes : design, contenus, développement), plus deux postes spécifiques — l'audit de l'existant (quelles pages attirent déjà des visiteurs ?) et le plan de redirections 301, ces renvois automatiques des anciennes adresses de pages vers les nouvelles, indispensables pour ne pas perdre le référencement Google accumulé. Comptez le prix d'une création équivalente, à 10 % près ; méfiez-vous surtout d'un devis de refonte qui ne mentionne pas les redirections.",
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
          { label: "Prix d'un site vitrine" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les tarifs réellement pratiqués en France, gamme par gamme et prestataire par prestataire : ce qui est inclus à chaque niveau de prix, les coûts récurrents, le coût total sur 3 ans — et notre propre grille tarifaire, publiée et justifiée poste par poste."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "One-page : 500 – 2 000 €", description: "Une seule page : valider une activité ou appuyer une campagne", color: "violet" },
          { number: "02", title: "Freelance : 800 – 3 000 €", description: "Une présence crédible, rédaction rarement incluse", color: "blue" },
          { number: "03", title: "Agence sur-mesure : 6 000 – 30 000 €", description: "Le niveau requis pour générer des clients via Google", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "Tous les tarifs 2026, sourcés et comparés sur 3 ans", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/services/sites-vitrines", label: "Création de site vitrine" },
          { href: "/services/referencement-google", label: "Référencement Google" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
          { href: "/realisations", label: "Nos réalisations" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Prix d'un site vitrine : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Le prix d&apos;un site vitrine va de <strong>quelques centaines
          d&apos;euros en autonomie à 30 000 € en agence sur-mesure</strong> —
          et ces montants décrivent des produits qui n&apos;ont de commun que
          le nom. Ce guide détaille les tarifs réellement pratiqués en France
          en 2026, ce que chaque niveau de prix inclut (et exclut), et la
          seule question qui compte : quel niveau d&apos;investissement
          correspond au rôle que ce site doit jouer pour votre entreprise ?
          Il se lit sans aucune culture technique : chaque terme de métier y
          est traduit en français courant.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les prix 2026 en un tableau" },
            { id: "a-quoi-sert", label: "2. À quoi sert (vraiment) un site vitrine : les chiffres" },
            { id: "prix-par-gamme", label: "3. Les prix par gamme : du one-page au premium" },
            { id: "prix-par-prestataire", label: "4. Builder, freelance ou agence : qui facture quoi" },
            { id: "prix-par-socle", label: "5. Wix, WordPress, Next.js : le socle change la facture" },
            { id: "inclus-ou-pas", label: "6. Ce qui est inclus (ou pas) à chaque niveau de prix" },
            { id: "postes-devis", label: "7. Les postes d'un devis vitrine, décomposés" },
            { id: "notre-grille", label: "8. Notre grille publique, justifiée poste par poste" },
            { id: "couts-recurrents", label: "9. Les coûts récurrents et cachés" },
            { id: "cout-total-3-ans", label: "10. Abonnement ou achat : le coût total sur 3 ans" },
            { id: "performance", label: "11. Prix et performance : le critère que les devis oublient" },
            { id: "combien-de-pages", label: "12. Combien de pages pour un site vitrine ?" },
            { id: "vitrine-ou-ecommerce", label: "13. Vitrine ou e-commerce : ne payez pas trop grand" },
            { id: "delais", label: "14. Délais : de 2 à 14 semaines selon la gamme" },
            { id: "artisans-tpe", label: "15. Artisans et TPE locales : le bon niveau d'investissement" },
            { id: "budgeter", label: "16. Méthode : choisir son budget en 4 étapes" },
            { id: "erreurs", label: "17. Les 6 erreurs à éviter" },
            { id: "notre-approche", label: "18. Comment on construit un site vitrine chez Hagnéré Code" },
          ]}
        />

        <InfoBox variant="blue" title="Avant de commencer : les 8 mots à connaître">
          Pas besoin d&apos;être développeur pour lire ce guide — huit mots
          suffisent. <strong>SEO</strong> (référencement naturel) : tout ce
          qui fait apparaître votre site dans les résultats de Google sans
          payer de publicité. <strong>Builder</strong> : outil en ligne (Wix,
          Squarespace…) pour construire soi-même son site, contre un
          abonnement mensuel. <strong>CMS</strong> : le logiciel, comme
          WordPress, qui permet de modifier soi-même les textes et photos de
          son site. <strong>Plugin</strong> : module ajouté à WordPress pour
          obtenir une fonction (formulaire, sécurité…), souvent payant chaque
          année. <strong>Template</strong> (ou thème) : maquette de site
          toute faite que le prestataire remplit avec vos contenus.{" "}
          <strong>Site statique</strong> : site dont les pages sont
          fabriquées à l&apos;avance, sans logiciel qui tourne derrière.{" "}
          <strong>Lighthouse</strong> : l&apos;outil gratuit avec lequel
          Google note la qualité technique d&apos;un site sur 100.{" "}
          <strong>Taux de conversion</strong> : la part des visiteurs qui
          finissent par vous contacter.
        </InfoBox>

        <h2 id="reponse-rapide">1. La réponse rapide : les prix 2026 en un tableau</h2>
        <p>
          En 2026, un site vitrine coûte en France <strong>0 à 1 000 € en
          autonomie sur un « builder », 800 à 3 000 € chez un freelance,
          2 000 à 6 000 € en agence standard et 6 000 à 30 000 € en agence
          pour du sur-mesure</strong>. Le builder, c&apos;est un outil en
          ligne — Wix ou Squarespace, par exemple — qui permet de construire
          soi-même son site sans savoir programmer, contre un abonnement
          mensuel. La grille relayée par France Num (source gouvernementale)
          situe un one-page (un site tenant sur une seule page que l&apos;on
          fait défiler) entre 500 et 2 000 € et un site basique entre 900 et
          5 000 €.
        </p>
        <GuideTable
          headers={["Formule", "Fourchette 2026", "Pour qui"]}
          rows={[
            ["Fait soi-même (Wix, Squarespace, IA)", "0 – 1 000 € + 17-80 €/mois à vie", "Tester une activité"],
            ["Site d'une seule page (« one-page »)", "500 – 2 000 €", "Événement, campagne, validation"],
            ["Vitrine freelance (3-8 pages)", "800 – 3 000 €", "Présence crédible, budget serré"],
            ["Vitrine agence standard", "2 000 – 6 000 €", "TPE/PME établie, périmètre cadré"],
            ["Vitrine agence sur-mesure", "6 000 – 15 000 €", "Obtenir des demandes de devis via Google (les « leads »)"],
            ["Vitrine premium / multilingue", "15 000 – 30 000 €", "Marque forte, machine d'acquisition"],
          ]}
        />
        <p>
          Sources croisées : France Num, iPaoo, Codeur.com, Fenxi, AmphiBee —
          détail en fin d&apos;article. Ces fourchettes sont la partie
          émergée : la suite du guide explique ce que chaque palier{" "}
          <em>contient</em>, car c&apos;est là que les devis divergent.
        </p>
        <InfoBox variant="amber" title="HT ou TTC ? Le détail qui fausse les comparaisons de 20 %">
          Toutes ces fourchettes — comme celles de la quasi-totalité des
          guides — s&apos;entendent hors taxes. Si votre entreprise récupère
          la TVA, comparez les devis en HT : c&apos;est votre coût réel. Si
          vous ne la récupérez pas (micro-entrepreneur en franchise de TVA,
          certaines professions de santé, associations), la TVA à 20 % est un
          coût sec : comparez en TTC — un devis de freelance portant « TVA
          non applicable, art. 293 B du CGI » est alors réellement moins cher
          qu&apos;un devis d&apos;agence au même montant hors taxes.
        </InfoBox>

        <h2 id="a-quoi-sert">2. À quoi sert (vraiment) un site vitrine : les chiffres</h2>
        <p>
          Avant de parler budget, posons le retour attendu — parce que les
          données sont plus parlantes que les promesses d&apos;agence :
        </p>
        <ul>
          <li>
            <strong>Plus d&apos;un tiers des TPE-PME françaises n&apos;ont
            toujours pas de site</strong> (64,6 % en sont équipées — baromètre
            France Num 2025, 11 021 entreprises interrogées). Dans le
            bâtiment, à peine plus d&apos;une sur deux. Avoir un bon site
            reste un avantage concurrentiel réel dans beaucoup de secteurs.
          </li>
          <li>
            <strong>La recherche locale convertit vite</strong> : 76 % des
            personnes qui font une recherche locale sur mobile visitent un
            commerce dans les 24 heures, et 28 % de ces recherches
            aboutissent à un achat (Think with Google).
          </li>
          <li>
            <strong>La crédibilité passe par le site</strong> : 84 % des
            consommateurs jugent plus crédible une entreprise qui a un site
            (Verisign), et l&apos;étude de Stanford sur la crédibilité web
            montre que le design visuel est le premier critère de jugement
            (cité par 46 % des 2 684 participants).
          </li>
          <li>
            <strong>Le taux de conversion — la part des visiteurs qui
            finissent par vous contacter — est d&apos;environ 2,9 % pour un
            site de services</strong> (médiane Ruler Analytics) : sur 100
            personnes qui visitent votre site, à peine 3 vous laissent leurs
            coordonnées. Les meilleurs sites dépassent 5 %, soit près de deux
            fois plus de demandes de devis pour le même nombre de visiteurs.
            C&apos;est tout l&apos;écart entre un site qui « existe » et un
            site conçu pour convertir.
          </li>
        </ul>
        <p>
          Deux signaux complètent le tableau. D&apos;abord, les avis : 92 %
          des consommateurs lisent les avis en ligne d&apos;une entreprise
          locale avant une première visite (BrightLocal) — un site qui met
          ces avis en scène transforme cette lecture en prise de contact.
          Ensuite, le mobile : Google mesurait déjà, entre 2015 et 2017, un
          envol des recherches « près de moi maintenant » (+150 % en deux
          ans), et la recherche locale sur mobile n&apos;a fait que
          progresser depuis. On estime souvent qu&apos;une recherche Google
          sur deux a une intention locale — un ordre de grandeur, pas une
          statistique officielle. Mais la direction est sans ambiguïté : vos
          futurs clients vous cherchent sur leur téléphone, près de chez eux.
        </p>
        <InfoBox variant="blue" title="La question qui détermine le budget">
          Votre site doit-il <strong>exister</strong> (rassurer quelqu&apos;un
          qui vous cherche déjà) ou <strong>acquérir</strong> (faire venir des
          prospects qui ne vous connaissent pas, via Google) ? Le premier rôle
          peut se jouer entre 1 000 et 3 000 € — un palier qui ne se
          défend plus guère que pour un micro-budget, un side-project,
          un test d&apos;activité ou l&apos;artisan sans enjeu
          d&apos;acquisition (section 15). Pour une entreprise qui veut
          convertir et durer, comparez le calcul sur 3 ans (section 10) du
          sur-mesure, d&apos;un CMS et d&apos;une plateforme sur le même
          périmètre. Le second exige un SEO structuré —
          du référencement naturel travaillé page par page —, des contenus
          soignés et de la performance. C&apos;est lui qui justifie les
          budgets à cinq chiffres, et son retour sur investissement se
          mesure : comptez les demandes de devis qui arrivent par le site et
          comparez-les à ce qu&apos;il vous a coûté.
        </InfoBox>

        <h2 id="prix-par-gamme">3. Les prix par gamme : du one-page au premium</h2>
        <p>
          Le tableau de la section 1 classait les prix par prestataire ;
          cette section les classe par taille et ambition du site. Les
          fourchettes se chevauchent, et c&apos;est normal : un même site de
          5 pages peut coûter 1 500 € chez un freelance partant d&apos;un
          modèle tout fait, ou près de 7 000 € en agence avec design et
          textes sur mesure. La gamme dit ce que vous achetez, le prestataire
          à quel niveau de finition.
        </p>
        <h3>Le one-page : 500 – 2 000 €</h3>
        <p>
          Une seule page qui déroule votre proposition : parfait pour un
          lancement, un événement ou une campagne publicitaire. Sa limite est
          structurelle : Google positionne des <em>pages</em> sur des{" "}
          <em>requêtes</em> — un one-page ne peut sérieusement en viser
          qu&apos;une. Si le référencement fait partie du plan, passez
          directement au multi-pages.
        </p>
        <h3>Le site vitrine essentiel : 3 à 5 pages, de 800 à 7 000 € environ</h3>
        <p>
          Accueil, offre, à-propos, preuves, contact. C&apos;est le format
          qui couvre 80 % des besoins d&apos;une TPE. L&apos;écart de prix
          dans cette gamme s&apos;explique presque entièrement par ce qui est
          inclus : rédaction, design sur mesure ou template, SEO technique,
          performance (voir la grille de la section 6). La borne haute
          correspond au sur-mesure tout inclus en agence — c&apos;est là que
          se situe notre propre forfait Essentiel à 6 900 €, détaillé en
          section 8.
        </p>
        <h3>Le site vitrine professionnel : 10 à 20 pages, 4 000 – 15 000 €</h3>
        <p>
          Une page par service (chacune vise sa requête Google), un blog pour
          le référencement, des pages de preuve. C&apos;est le format
          « machine d&apos;acquisition » : il ne se contente pas de rassurer,
          il fait venir. C&apos;est le cœur de notre offre de{" "}
          <Link href="/services/sites-vitrines">création de site
          vitrine</Link> à 14 900 €.
        </p>
        <h3>Le premium : multilingue, e-commerce léger, 15 000 – 30 000 €</h3>
        <p>
          Plusieurs langues, réservation ou paiement ponctuel, connexion à
          votre CRM (le logiciel où vous gérez vos contacts clients et
          prospects), charte graphique complète et réutilisable. À ce niveau,
          le site est un actif stratégique : jugez le devis sur le coût total
          sur plusieurs années et sur les garanties, pas sur le prix affiché
          en bas de page.
        </p>

        <h2 id="prix-par-prestataire">4. Builder, freelance ou agence : qui facture quoi</h2>
        <p>
          Le même site de 5 pages peut être facturé 500 € ou 15 000 € selon
          la porte à laquelle vous frappez. Voici qui facture quoi, avec les
          forces et les limites de chaque option :
        </p>
        <GuideTable
          headers={["Prestataire", "Prix vitrine", "Forces", "Limites"]}
          rows={[
            ["Builder / IA (Wix, Canva…)", "0 – 1 000 € + abonnement à vie", "Rapide, sans code", "Référencement bridé, design générique, site non exportable"],
            ["Freelance junior", "500 – 2 000 €", "Prix d'entrée", "Périmètre réduit, continuité incertaine"],
            ["Freelance expérimenté", "2 000 – 5 000 €", "Bon rapport qualité/prix", "Une seule personne, rarement tous les métiers"],
            ["Agence standard", "2 000 – 6 000 €", "Équipe, méthode", "Souvent à base de thème"],
            ["Agence sur-mesure", "6 000 – 30 000 €", "Design propre, SEO, garanties", "Réservé aux sites à enjeu business"],
          ]}
        />
        <p>
          Un mot sur l&apos;offshore : faire réaliser son site par une
          société installée à l&apos;étranger (« site vitrine Maroc, Tunisie,
          Madagascar » revient massivement dans les recherches), à des tarifs
          affichés de 300 à 800 €. Le compte y est rarement. Le brief se fait
          à distance, les contenus restent à votre charge, le référencement
          local français est approximatif, et aucune garantie n&apos;est
          exploitable en droit français. Pour une page jetable, pourquoi pas.
          Pour le site qui porte votre crédibilité, l&apos;économie initiale
          se paie en reprises — le détail chiffré est dans notre{" "}
          <Link href="/guides/combien-coute-une-application-mobile">guide des
          prix d&apos;une application mobile</Link>, et la mécanique est la
          même pour le web.
        </p>
        <p>
          Repère utile pour situer les extrêmes : le guide le mieux classé
          sur Google sur cette recherche chiffre la case « agence +
          sur-mesure » entre 6 000 et 10 000 € pour un site minimaliste et
          10 000 à 30 000 € pour un site professionnel ; certaines agences
          WordPress facturent un design entièrement sur-mesure à partir de
          13 500 €. Un devis sur-mesure à 7 000 € n&apos;est donc pas
          « cher » — il est dans le bas de sa catégorie.
        </p>
        <p>
          Dernier repère, celui des acheteurs professionnels : un forfait,
          c&apos;est un nombre de jours de travail multiplié par un taux
          journalier — 280 à 400 € la journée pour un webmaster freelance,
          davantage en agence où plusieurs métiers interviennent. Un vitrine
          à 1 500 € représente donc environ quatre jours : installer un thème
          et intégrer vos textes, oui ; un design personnalisé, cinq pages
          rédigées et un vrai travail de référencement, non. Demandez
          « combien de jours, répartis comment ? » : c&apos;est le test le
          plus rapide d&apos;un prix construit.
        </p>

        <h2 id="prix-par-socle">5. Wix, WordPress, Next.js : le socle change la facture</h2>
        <p>
          Derrière chaque devis, il y a un choix technique : le « socle »,
          c&apos;est-à-dire la technologie de base sur laquelle votre site est
          construit — un peu comme les fondations d&apos;un bâtiment. On ne
          le voit pas, mais ce choix, rarement expliqué au client, détermine
          le prix de départ et tout ce que le site coûtera à entretenir
          pendant des années :
        </p>
        <GuideTable
          headers={["Socle", "Mise en place", "Coûts récurrents typiques", "À retenir"]}
          rows={[
            ["Wix / Squarespace", "0 – 1 000 €", "17 – 80 €/mois à vie", "Vous louez, vous ne possédez pas"],
            ["WordPress + thème", "800 – 3 000 €", "Licences 500-1 000 €/an + maintenance 30-120 €/mois", "Encore majoritaire en parc installé, mais plus le standard du neuf professionnel — et des mises à jour de sécurité chaque semaine"],
            ["WordPress sur mesure", "5 000 – 15 000 €", "Idem WordPress", "Design propre, même entretien obligatoire"],
            ["Webflow", "2 000 – 15 000 €", "Abonnement 15-39 $/mois", "Outil de design sans code, limites e-commerce/multilingue"],
            ["Next.js / React sur mesure", "6 900 – 22 000 €+", "Hébergement 0-20 €/mois, zéro licence", "Performance native, aucun logiciel à maintenir, code à vous"],
          ]}
        />
        <p>
          Deux lignes méritent une traduction. WordPress est un CMS : le
          logiciel qui permet de modifier soi-même les textes et photos de
          son site — mais qu&apos;il faut mettre à jour presque chaque
          semaine pour boucher les failles de sécurité (« patcher », en
          jargon). Le duel des deux premières lignes a d&apos;ailleurs son
          guide entier : notre{" "}
          <Link href="/guides/wix-ou-wordpress">comparatif Wix ou
          WordPress</Link>, prix TTC réels et clause de sortie compris. Next.js et React, eux, sont des technologies modernes
          (utilisées par Netflix ou Airbnb) qui produisent un site
          « statique ». Cette différence de nature explique l&apos;essentiel
          des coûts d&apos;entretien :
        </p>
        <InfoBox variant="amber" title="En clair : pourquoi un WordPress se paie chaque mois, et pas un site statique">
          Un site WordPress fonctionne comme une machine qui fabrique chaque
          page au moment où un visiteur la demande : un logiciel tourne en
          permanence sur un serveur, avec des dizaines de pièces — les
          plugins — fournies par des éditeurs différents. Chaque pièce reçoit
          des mises à jour de sécurité, souvent chaque semaine, et une pièce
          non mise à jour est une porte ouverte aux piratages. D&apos;où la
          maintenance facturée 30 à 120 €/mois : pas une option de confort,
          l&apos;entretien obligatoire de la machine, comme la révision
          d&apos;une voiture. Un site statique (Next.js), lui, ressemble à un
          document déjà imprimé : les pages peuvent être pré-générées puis
          distribuées aux visiteurs. La surface d&apos;exécution publique peut
          être plus réduite, mais dépendances, chaîne de build, formulaires,
          comptes et hébergement restent à maintenir et à sécuriser. C&apos;est cette différence — machine
          contre document — qui explique l&apos;écart de coût sur 3 ans
          calculé à la section 10.
        </InfoBox>
        <p>
          Et le site « généré par IA » ? C&apos;est la nouveauté 2026 des
          suggestions de recherche de Google (« créer un site vitrine avec
          l&apos;IA, avec Canva… »). Notre position d&apos;équipe qui utilise
          l&apos;IA tous les jours : ces outils produisent en quelques
          minutes un site de démonstration honnête — et générique. Ils ne
          font ni votre positionnement, ni vos contenus, ni votre
          référencement local, et l&apos;export dépend du contrat du tiers.
          Les assistants peuvent accélérer certaines tâches pour certaines
          équipes, mais les études disponibles ne prouvent pas une baisse de
          prix universelle. Notre forfait d&apos;entrée à 6 900 € inclut le
          périmètre visible sur notre grille ; ce montant relève de notre
          politique commerciale et doit être comparé à livrables égaux.
          Le panorama complet des outils — générateurs, vibe coding,
          assistants de code, avec leurs prix vérifiés — est dans notre{" "}
          <Link href="/guides/creer-un-site-avec-ia">guide « créer un
          site avec l&apos;IA »</Link>.
        </p>
        <p>
          L&apos;image de la location et de la propriété aide, mais elle ne
          suffit pas. Certaines plateformes hébergées imposent leur
          infrastructure ; certains CMS exportent les contenus sans produire
          une copie immédiatement exécutable ; un développement spécifique
          peut lui aussi dépendre de licences et de services tiers. Vérifiez
          séparément domaine, comptes, contenus, médias, données, code,
          configuration, licences, documentation et restauration. La remise
          d&apos;un dépôt ne prouve pas à elle seule la portabilité du site ni
          le transfert de tous les droits.
        </p>
        <p>
          Le point que les comparatifs oublient : le socle détermine surtout
          les <strong>coûts d&apos;après</strong>. Licences, services tiers,
          mises à jour, chaîne de déploiement, sauvegardes, sécurité et
          évolutions existent sous des formes différentes selon le socle ;
          aucune architecture sérieuse n&apos;est sans exploitation. Notre
          comparatif complet{" "}
          <Link href="/guides/nextjs-ou-wordpress">Next.js ou
          WordPress</Link> aide à choisir l&apos;architecture. Le site que
          vous lisez est développé en Next.js/React ; cela décrit notre
          réalisation, pas une supériorité automatique. Un template peut être
          la décision professionnelle pour un besoin standard, tandis qu&apos;un
          parcours, un système éditorial ou des intégrations propres peuvent
          justifier une conception spécifique.
        </p>

        <h2 id="inclus-ou-pas">6. Ce qui est inclus (ou pas) à chaque niveau de prix</h2>
        <p>
          Deux devis « site vitrine 5 pages » peuvent aller du simple au
          quadruple pour une raison invisible en première page : ce
          qu&apos;ils incluent réellement. Voici, ligne par ligne, ce que
          recouvre chaque niveau de prix — une grille utile pour expliquer
          l&apos;essentiel des écarts entre devis. Pour décider ce qui doit
          rester standard ou devenir spécifique, utilisez aussi notre guide{" "}
          <Link href="/guides/template-ou-site-sur-mesure">
            template, personnalisation ou site sur mesure
          </Link>
          :
        </p>
        <GuideTable
          headers={["Prestation", "Vitrine à 1 500 €", "Vitrine à 4 000 €", "Sur-mesure 6 900 €+"]}
          rows={[
            ["Design", "Modèle prêt à l'emploi (« template »)", "Modèle du commerce adapté à vos couleurs", "Créé entièrement pour vous, charte graphique réutilisable"],
            ["Rédaction des contenus", "À votre charge", "Partielle (150-800 €/page sinon)", "Incluse, optimisée pour Google"],
            ["SEO technique", "Basique ou absent", "Réglages de base pour Google", "Optimisation complète, données structurées incluses"],
            ["Performance mesurée", "Selon formule", "Selon prestation", "Protocole et objectif au devis"],
            ["Photos / visuels", "Banque d'images", "Mixte", "Direction artistique"],
            ["Affichage sur téléphone (« responsive »)", "Automatique (thème)", "Vérifié", "Conçu d'abord pour le mobile (majorité des visites)"],
            ["Droits sur le code", "À vérifier", "Variable", "Cession, dépôt, accès et exclusions au devis"],
            ["Correction post-lancement", "À vérifier", "À vérifier", "Durée, sévérités et exclusions au devis"],
          ]}
        />
        <p>
          Trois précisions. Un template (ou thème) fournit une structure
          graphique et parfois fonctionnelle préexistante. Il peut rester
          reconnaissable, mais les contenus, les preuves, les médias et une
          personnalisation maîtrisée peuvent aussi produire un site distinct.
          Les données structurées sont un balisage invisible qui aide les
          moteurs à comprendre certains éléments ; elles ne garantissent pas
          l&apos;affichage d&apos;un résultat enrichi. Pour le code, distinguez les livrables spécifiques
          cédés, les composants préexistants, l&apos;open source et les services tiers.
          Le dépôt Git et les accès techniques sont indispensables à la réversibilité,
          mais ne remplacent pas une clause de cession précise.
        </p>
        <p>
          Utilisez cette grille comme check-list de lecture de devis : chaque
          ligne absente d&apos;un devis « attractif » est une ligne que vous
          paierez plus tard, ailleurs, ou en clients perdus.
        </p>

        <GuideInlineCTA
          title="Votre site vitrine, cadré en 3 minutes"
          description="Décrivez votre projet en quelques étapes guidées — notre équipe vise une réponse personnelle le prochain jour ouvré, sans délai garanti, avec une recommandation de gamme argumentée."
        />

        <h2 id="postes-devis">7. Les postes d&apos;un devis vitrine, décomposés</h2>
        <p>
          Les ratios types d&apos;un projet vitrine professionnel, constatés
          sur le marché et dans nos propres forfaits. Ces pourcentages se
          lisent sur le montant total du devis — l&apos;exemple chiffré qui
          suit la liste les traduit en euros :
        </p>
        <ul>
          <li>
            <strong>Cadrage et arborescence (10-15 %)</strong> — comprendre
            votre marché, vos clients et les recherches Google qu&apos;ils
            tapent, puis en déduire le plan du site (l&apos;« arborescence »).
            C&apos;est ce qui distingue un site qui travaille d&apos;une
            simple plaquette.
          </li>
          <li>
            <strong>Design (20-25 %)</strong> — l&apos;apparence et
            l&apos;ergonomie ; le marché facture 500 à 3 000 € par modèle de
            page en agence.
          </li>
          <li>
            <strong>Développement et intégrations (30-40 %)</strong> — la
            fabrication technique : formulaires, prise de rendez-vous,
            connexion à vos outils (agenda, fichier clients), mesure des
            visites.
          </li>
          <li>
            <strong>Contenus (10-20 %)</strong> — les textes se facturent 150
            à 400 € la page en freelance, 500 à 800 € en agence ; premier
            poste exclu des devis bas.
          </li>
          <li>
            <strong>SEO technique et performance (10-15 %)</strong> — tout ce
            qui aide Google à comprendre et à classer votre site : balises,
            données structurées et vitesse de chargement.
          </li>
          <li>
            <strong>Vérifications finales, mise en ligne, garantie
            (5-10 %)</strong> — ce que le métier appelle la « recette » :
            tester le site page par page sur ordinateur, tablette et
            téléphone avant l&apos;ouverture au public, brancher les
            redirections, puis surveiller que tout fonctionne les premières
            semaines.
          </li>
        </ul>
        <p>
          Exemple concret sur un site vitrine à 10 000 € : environ 1 200 €
          pour le cadrage, 2 200 € pour le design, 3 500 € pour le
          développement, 1 500 € pour les textes, 1 100 € pour le
          référencement et 500 € pour les tests et la mise en ligne. Si un
          devis à 3 000 € prétend couvrir tout cela, une ou plusieurs lignes
          ont forcément sauté — à vous de découvrir lesquelles.
        </p>

        <h2 id="notre-grille">8. Notre grille publique, justifiée poste par poste</h2>
        <p>
          Voici notre grille vitrine, publiée et justifiée — celle que vous
          retrouverez sur notre <Link href="/tarifs">page tarifs</Link>, au
          forfait fixe contractuel. Le devis confirme rédaction, hébergement,
          licences, planning et exclusions. Jugez sur pièces :
        </p>
        <GuideTable
          headers={["Forfait", "Périmètre", "Délai", "Prix"]}
          rows={[
            ["Essentiel", "3-5 pages orientées conversion, design sur mesure, SEO technique ; contenus précisés au devis", "Planning au devis", "6 900 €"],
            ["Performance", "10-20 pages + blog SEO, mesure de fréquentation et CMS selon besoin", "Planning au devis", "14 900 €"],
            ["Premium", "Multilingue, e-commerce léger, intégrations avancées", "Planning au devis", "22 000 €+"],
          ]}
        />
        <p>
          Pourquoi ces prix sont au-dessus d&apos;un freelance et en dessous
          des agences premium : le périmètre est détaillé dans la grille de la section 6,
          colonne de droite. Le devis précise les livrables, le dépôt, les droits,
          les licences, le protocole de performance et la période de correction.
          Lighthouse, c&apos;est un outil gratuit avec
          lequel Google note la qualité technique d&apos;un site sur 100
          (vitesse, affichage mobile, bases du référencement) : un contrôle
          technique du web que n&apos;importe qui peut vérifier en quelques
          clics. Un score observé sur une page ne prédit pas toutes les autres
          et ne garantit pas le classement. Nos <Link href="/realisations">réalisations</Link> — dont
          deux sites liés au même groupe, explicitement présentés comme tels —
          servent de preuve.
        </p>

        <h2 id="couts-recurrents">9. Les coûts récurrents et cachés</h2>
        <p>
          Le devis de création n&apos;est que la première ligne de la
          facture. Voici les coûts qui s&apos;ajoutent, chaque année ou en
          une fois — et que les devis mentionnent rarement :
        </p>
        <GuideTable
          headers={["Poste", "Fourchette réelle", "Remarque"]}
          rows={[
            ["Nom de domaine", "6 – 15 €/an", "Toujours à votre nom"],
            ["Hébergement (site statique)", "0 – 20 €/mois", "Quasi gratuit en Next.js bien construit"],
            ["Hébergement (WordPress)", "5 – 40 €/mois", "Serveur partagé (5 €) à serveur réservé, plus rapide (40 €)"],
            ["Maintenance", "30 – 200 €/mois selon le socle", "Mises à jour de sécurité, sauvegardes, dépannage"],
            ["Licences plugins (WordPress)", "300 – 1 000 €/an selon le nombre de plugins", "Constructeur, SEO, sécurité, formulaires"],
            ["Rédaction (si exclue)", "150 – 800 €/page", "Le coût caché n° 1 des devis bas"],
            ["Photos professionnelles", "600 – 2 000 €", "Souvent oubliées au budget"],
            ["Bannière cookies", "0 – 150 €/an", "À prévoir lorsque le site dépose des traceurs soumis au consentement (certaines mesures d'audience, vidéos ou services intégrés). Un site sans ces traceurs peut ne pas en avoir besoin."],
          ]}
        />
        <p>
          Trois lignes méritent le surlignage. La maintenance : 30 à
          200 €/mois, c&apos;est 360 à 2 400 € par an — sur 3 ans, ce seul
          poste peut coûter plus cher que la création du site ; obligatoire
          sur WordPress, quasi nul en statique (notre{" "}
          <Link href="/guides/cout-maintenance-site-internet">guide du
          coût de la maintenance</Link> détaille forfaits réels et
          contrat). Les licences : sur WordPress,
          les plugins professionnels se paient chaque année — un droit
          d&apos;utilisation, pas un achat. La bannière cookies : l&apos;outil
          qui demande leur accord aux visiteurs, obligatoire au titre du
          RGPD, le règlement européen sur les données personnelles. Et le
          coût caché ultime : la refonte prématurée — un site low-cost se
          refait au bout de 2 à 3 ans, à un prix souvent proche du neuf ;
          notre <Link href="/guides/prix-refonte-site-internet">guide du
          prix d&apos;une refonte</Link> chiffre ce poste, migration SEO
          comprise.
        </p>

        <h2 id="cout-total-3-ans">10. Abonnement ou achat : le coût total sur 3 ans</h2>
        <p>
          Comparer les prix d&apos;achat ne suffit pas : un site « pas cher »
          à l&apos;achat peut devenir le plus cher à l&apos;usage. Le seul
          calcul honnête additionne tout ce que vous paierez sur 3 ans —
          création, abonnements, licences, maintenance, rédaction.
          Voici une grille commune à remplir pour chaque scénario :
        </p>
        <FormulaBox>
{`OPTION À COMPARER __________________________
  Création et reprise des contenus             ______ €
  Temps interne valorisé                       ______ €
  Abonnement ou hébergement (36 mois)          ______ €
  Domaine, emails et services tiers            ______ €
  Licences et renouvellements                  ______ €
  Maintenance, sécurité et sauvegardes         ______ €
  Support et évolutions prévues                ______ €
  Migration ou coût de sortie                  ______ €
  ──────────────────────────────────────────────────
  TOTAL DOCUMENTÉ SUR 3 ANS                    ______ €

  Export des contenus et du code ?             OUI / NON / PARTIEL
  Engagement et renouvellement ?               __________________
  Hypothèses encore inconnues ?                __________________`}
        </FormulaBox>
        <p>
          Valorisez aussi le temps réellement consacré aux contenus, à la
          configuration et aux corrections. Le faire soi-même peut être
          rationnel selon le besoin et les compétences disponibles ; un
          prestataire peut l&apos;être dans d&apos;autres cas. Le résultat ne se
          déduit ni de l&apos;outil ni du prix : il se mesure. Notre guide{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">pourquoi
          mon site ne convertit pas</Link> explique pourquoi le chiffre
          affiché par vos statistiques est faux, et dans les deux sens.
        </p>
        <p>
          Une solution sur mesure peut être moins ou plus chère sur trois ans.
          La réponse dépend du périmètre, des licences, de la maintenance, des
          évolutions et de la réversibilité réellement contractées.
        </p>
        <InfoBox variant="emerald" title="À retenir : comparez toujours sur 3 ans">
          Demandez à chaque prestataire le coût total documenté sur une même
          période, les exclusions et les conditions de sortie. Lorsque le prix
          futur dépend de l&apos;usage, exigez la formule de calcul et testez au
          moins un scénario bas, central et haut.
        </InfoBox>

        <h2 id="performance">11. Prix et performance : le critère que les devis oublient</h2>
        <p>
          Peu de devis parlent de la vitesse du site. C&apos;est pourtant un
          critère mesurable — et chiffrable en euros. Le mécanisme est
          simple : une page lente peut gêner l&apos;utilisateur, mais l&apos;effet
          commercial dépend du contexte. Des études publiées ont observé des
          associations entre vitesse et conversion sur leurs échantillons ;
          elles ne prédisent pas le gain de votre site vitrine.
        </p>
        <p>
          Mesurez les Core Web Vitals de terrain, les erreurs et les conversions
          avant puis après une correction. Sans mesure propre, ne transformez
          pas une amélioration technique en nombre de demandes de devis.
        </p>
        <p>
          Demandez à chaque prestataire des critères de recette mesurables :
          pages, appareil, réseau, outil, scripts tiers et tolérance. Un score
          Lighthouse de laboratoire ne garantit ni les Core Web Vitals de
          terrain, ni un classement, ni une conversion. La performance reste
          toutefois utile aux visiteurs et fait partie de l&apos;expérience de page
          considérée par Google avec de nombreux autres signaux ; voir notre{" "}
          <Link href="/services/referencement-google">référencement
          Google</Link>, car la vitesse est un critère de classement.
        </p>

        <h2 id="combien-de-pages">12. Combien de pages pour un site vitrine ?</h2>
        <p>
          La bonne réponse part des besoins des visiteurs et des sujets à
          traiter. Google évalue des pages tout en utilisant aussi certains
          signaux à l&apos;échelle du site. Chaque page doit avoir un rôle clair,
          sans multiplier artificiellement des variantes quasi identiques.
          « Plombier chauffagiste Chambéry » et « dépannage fuite d&apos;eau »
          peuvent justifier des pages distinctes si chacune apporte un contenu
          propre et substantiel. Un petit site peut couvrir l&apos;essentiel avec
          accueil, offre, à-propos, preuves et contact ; ajoutez des pages quand
          le besoin éditorial et commercial le justifie, pas pour atteindre un quota.
        </p>

        <h2 id="vitrine-ou-ecommerce">13. Vitrine ou e-commerce : ne payez pas trop grand</h2>
        <p>
          Si vous n&apos;encaissez pas de paiement en ligne, vous n&apos;avez
          pas besoin d&apos;un site marchand — et c&apos;est le cas de la
          majorité des TPE : seules 27 % des TPE-PME françaises disposent
          d&apos;une solution de vente en ligne (France Num). Un module de
          prise de rendez-vous ou de demande de devis sur un vitrine coûte
          quelques centaines d&apos;euros ; un e-commerce complet démarre à
          2 000 € sur plateforme et 15 000 € en sur-mesure. Pour les
          fourchettes détaillées — plateformes, coût sur 3 ans,
          commissions — voyez notre guide du{" "}
          <Link href="/guides/prix-site-e-commerce">prix d&apos;un site
          e-commerce</Link> ou notre offre{" "}
          <Link href="/services/ecommerce">e-commerce sur mesure</Link>.
        </p>

        <h2 id="delais">14. Délais : comparez les hypothèses, pas une promesse</h2>
        <p>
          Le budget n&apos;est pas la seule variable. Les plages ci-dessous sont
          des scénarios éditoriaux pour comparer les devis, pas des délais
          observés sur un échantillon représentatif ni un engagement Hagnéré
          Code. Seul le devis daté fixe le calendrier :
        </p>
        <GuideTable
          headers={["Gamme", "Scénario à vérifier", "Engagement Hagnéré Code"]}
          rows={[
            ["One-page / vitrine simple", "Quelques semaines selon contenus et validation", "Dates écrites au devis"],
            ["Vitrine professionnelle + blog", "Plusieurs semaines selon le nombre de pages", "Dates écrites au devis"],
            ["Premium / multilingue", "À chiffrer selon langues, droits et intégrations", "Dates écrites au devis"],
          ]}
        />
        <p>
          Les contenus non fournis peuvent retarder le projet, comme les accès,
          intégrations et validations. Notre{" "}
          <Link href="/guides/combien-de-temps-pour-creer-un-site">guide
          des délais de création</Link> aide à bâtir un rétroplanning.
          Nos devis précisent les jalons, dépendances, causes de report et
          conséquences éventuelles ; la rédaction n&apos;est incluse que si le
          périmètre signé le prévoit (voir notre{" "}
          <Link href="/methode">méthode Sprint Fixe™</Link>).
        </p>

        <h2 id="artisans-tpe">15. Artisans et TPE locales : le bon niveau d&apos;investissement</h2>
        <p>
          Les offres publiques destinées aux artisans couvrent des prix et des
          périmètres très différents. Soyons honnêtes : <strong>pour
          un artisan dont le carnet est plein grâce au bouche-à-oreille
          et qui ne demande rien à son site, un site simple à
          1 000 – 2 000 € reste défendable</strong>. C&apos;est
          l&apos;un des rares cas résiduels de ce guide. Dès que le site
          doit rassurer un donneur d&apos;ordres ou décrocher un seul
          chantier via Google, la suite de cette section
          s&apos;applique.
        </p>
        <p>
          Le passage au niveau supérieur (5 000 – 10 000 €) se justifie le
          jour où le site doit soutenir l&apos;acquisition : prise de
          rendez-vous en ligne, une page par prestation pour être trouvé sur
          Google près de chez vous (le « SEO local »), avis clients intégrés,
          photos de chantiers. Construisez alors un scénario avec votre marge,
          vos demandes mesurées et votre taux de transformation réel. Une page
          locale ou un investissement supérieur ne garantit ni position Google,
          ni chantier, ni amortissement.
        </p>
        <p>
          Avant de signer une offre tout-en-un « spécial artisans », lisez
          trois lignes du contrat. La durée d&apos;engagement : certaines
          formules engagent sur 12 à 24 mois avec reconduction tacite — sans
          résiliation à l&apos;échéance, c&apos;est reparti pour un tour. La
          propriété : dans la quasi-totalité de ces offres, le site
          n&apos;est pas exportable ; si vous partez, vous repartez de zéro,
          historique Google compris. Le coût cumulé : 70 €/mois pendant trois
          ans, c&apos;est 2 520 € — le prix d&apos;un site freelance qui vous
          aurait appartenu. Posez la question par écrit : « que se passe-t-il
          exactement si je résilie ? »
        </p>
        <p>
          Dernier levier, souvent ignoré : selon votre région, une subvention
          peut couvrir 30 à 50 % du montant HT. Le panorama vérifié est dans
          notre guide des{" "}
          <Link href="/guides/aides-creation-site-internet">aides à la
          création de site internet</Link>.
        </p>

        <h2 id="budgeter">16. Méthode : choisir son budget en 4 étapes</h2>
        <ol>
          <li>
            <strong>Tranchez le rôle du site</strong> — tester ou
            exister a minima (les cas résiduels vus en section 2,
            entre 1 000 et 3 000 €) ou servir une entreprise qui veut
            convertir et durer (sur-mesure dès 6 000 €) ? C&apos;est
            80 % de la décision budgétaire.
          </li>
          <li>
            <strong>Déduisez le nombre de pages de vos requêtes
            cibles</strong> — c&apos;est-à-dire des recherches Google que
            tapent vos clients : une page par intention de recherche
            (section 12).
          </li>
          <li>
            <strong>Comparez les devis avec la grille « inclus / exclu »</strong> —
            rédaction, référencement, performance, propriété du code,
            garantie (section 6) — et envoyez le même{" "}
            <Link href="/guides/cahier-des-charges-site-internet">cahier des
            charges</Link> à tous les prestataires.
          </li>
          <li>
            <strong>Raisonnez en coût total sur 3 ans</strong> — création +
            abonnements + licences + maintenance + rédaction (section 10).
          </li>
        </ol>
        <InfoBox variant="emerald" title="La méthode appliquée : Martin, plombier chauffagiste à Chambéry">
          Étape 1 — le rôle. Martin veut décrocher des chantiers de
          rénovation énergétique via Google : son site doit acquérir, pas
          seulement exister. Étape 2 — les pages. Ses clients tapent des
          recherches différentes : « installation pompe à chaleur Chambéry »,
          « dépannage chaudière », « salle de bain clé en main ». Une page
          par prestation, plus l&apos;accueil, les avis et le contact :
          environ 9 pages. Étape 3 — les devis. Il envoie le même cahier des
          charges à trois prestataires. Le devis à 2 500 € n&apos;inclut ni
          textes ni photos ; celui à 7 000 € inclut tout. À périmètre égal,
          l&apos;écart réel fond à 1 500 € environ. Étape 4 — le coût sur
          3 ans. Licences et maintenance comprises, le WordPress « pas cher »
          atteint 6 500 € ; le sur-mesure tout inclus, 7 400 €. Pour 900 €
          d&apos;écart, Martin choisit le site le plus rapide et le mieux
          référencé : une seule pompe à chaleur vendue rembourse la
          différence.
        </InfoBox>
        <p>
          Dernier réflexe, au moment de signer : l&apos;usage du marché est
          un acompte de 30 % à la signature, un jalon éventuel à la
          validation des maquettes, et le solde à la mise en ligne — jamais
          avant la recette, formulaires testés par vous. Une exigence de
          paiement intégral d&apos;avance est un signal d&apos;alarme.
        </p>

        <h2 id="erreurs">17. Les 6 erreurs à éviter</h2>
        <ul>
          <li>
            <strong>Comparer des prix sans comparer les périmètres</strong> —
            un devis à 1 500 € sans rédaction ni SEO n&apos;est pas moins
            cher, il est incomplet.
          </li>
          <li>
            <strong>Payer un abonnement à vie pour un site que vous ne
            possédez pas</strong> — la location coûte plus cher que
            l&apos;achat dès la troisième année.
          </li>
          <li>
            <strong>Sous-estimer les contenus</strong> — rédaction et photos
            font la crédibilité (et le référencement), pas le thème.
          </li>
          <li>
            <strong>Ignorer la performance</strong> — exigez un engagement
            Lighthouse chiffré au contrat.
          </li>
          <li>
            <strong>Faire un one-page « pour commencer » en visant le
            SEO</strong> — vous le referez dans l&apos;année.
          </li>
          <li>
            <strong>Signer sans clause de propriété du code</strong> — sans
            cession écrite, le site ne vous appartient pas (le détail
            juridique est dans notre{" "}
            <Link href="/guides/combien-coute-un-site-internet">guide
            général des prix</Link>).
          </li>
        </ul>
        <p>
          Si vous ne deviez retenir qu&apos;une chose de cette liste : ces
          six erreurs ont la même racine — comparer des prix au lieu de
          comparer des périmètres.
        </p>
        <InfoBox variant="blue" title="À retenir : les 4 réflexes avant de signer">
          1. Décidez du rôle du site : exister a minima (1 000 à
          3 000 €, cas résiduels de la section 2) ou convertir et
          acquérir via Google (sur-mesure dès
          6 000 €). 2. Exigez la liste écrite de ce qui est inclus —
          rédaction, photos, référencement, propriété du code, garantie — et
          comparez ligne à ligne, jamais sur le prix total. 3. Demandez un
          engagement de performance chiffré (score Lighthouse mobile) inscrit
          au contrat : le détecteur de sérieux le plus fiable du marché.
          4. Calculez le coût sur 3 ans, abonnements, licences et maintenance
          compris : c&apos;est presque toujours là que le devis « pas cher »
          se retourne. Un prestataire à l&apos;aise avec ces quatre questions
          est un prestataire que vous pouvez écouter.
        </InfoBox>
        <p>
          Pour aller plus loin sur le choix du prestataire lui-même —
          tester ses réalisations, vérifier son entreprise, lire son
          contrat — notre{" "}
          <Link href="/guides/choisir-son-agence-web">guide pour choisir
          son agence web</Link> donne la méthode de vérification
          complète, gratuite et applicable en une heure.
        </p>
        <p>
          La dernière section montre, en toute transparence, comment nous
          avons construit notre propre offre pour échapper à ces six
          pièges — à vous de juger si la promesse est tenue.
        </p>

        <h2 id="notre-approche">18. Comment on construit un site vitrine chez Hagnéré Code</h2>
        <p>
          Nous construisons les sites vitrines en <strong>Next.js /
          React</strong> — génération statique, Core Web Vitals au vert
          (les indicateurs de vitesse et de confort de navigation que
          Google mesure sur chaque site), zéro plugin à maintenir.
          Comme expliqué en section 5, ce site en est lui-même la
          démonstration. Le principe est simple : tout ce qui
          conditionne le résultat doit être inventorié&nbsp;: design, contenus,
          données structurées, mesure d&apos;audience, hébergement, scripts tiers,
          recette et période de correction. Seuls le prix, les dates, les
          livrables et les objectifs repris dans le devis sont contractuels.
        </p>
        <p>
          Vous hésitez encore sur la gamme ?{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> — notre équipe vise une réponse personnelle le
          prochain jour ouvré, sans délai garanti, avec une recommandation
          argumentée, gratuite et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — chiffres cités dans ce guide (consultés
          en juillet 2026) :{" "}
          <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e" target="_blank" rel="noopener noreferrer">France Num</a>{" "}
          (grille de prix officielle et baromètre 2025) ; guides prix{" "}
          <a href="https://www.ipaoo.fr/creer-un-site-vitrine/prix/" target="_blank" rel="noopener noreferrer">iPaoo</a>,{" "}
          <a href="https://www.codeur.com/pages/prix-site-internet" target="_blank" rel="noopener noreferrer">Codeur.com</a>,{" "}
          <a href="https://amphibee.fr/blog/combien-coute-la-creation-dun-site-vitrine" target="_blank" rel="noopener noreferrer">AmphiBee</a>{" "}
          et Fenxi ; étude{" "}
          <a href="https://web.dev/case-studies/milliseconds-make-millions" target="_blank" rel="noopener noreferrer">Google/Deloitte « Milliseconds Make Millions »</a> ;{" "}
          <a href="https://www.thinkwithgoogle.com/" target="_blank" rel="noopener noreferrer">Think with Google</a>{" "}
          (recherche locale) ; Stanford Web Credibility Project (B.J. Fogg) ;
          enquête Verisign ; benchmarks de conversion{" "}
          <a href="https://www.ruleranalytics.com/blog/insight/conversion-rate-by-industry/" target="_blank" rel="noopener noreferrer">Ruler Analytics</a>.
        </p>
        <p className="text-sm">
          <em>
            Les prix de tiers sont des fourchettes de marché constatées à la
            date de mise à jour, susceptibles d&apos;évoluer ; seuls nos
            forfaits publiés sur la page tarifs engagent Hagnéré Code.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
