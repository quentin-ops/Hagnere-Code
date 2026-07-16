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
  wordCount: 4100,
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
      "Le consensus du marché : 200 à 1 000 € en autonomie sur un builder, 800 à 3 000 € chez un freelance, 2 000 à 6 000 € en agence standard, et 6 000 à 30 000 € en agence pour du sur-mesure. La grille officielle relayée par France Num situe un one-page entre 500 et 2 000 € et un site basique entre 900 et 5 000 €. Chez Hagnéré Code, un vitrine sur mesure orienté conversion démarre à 6 900 €.",
  },
  {
    question: "Combien coûte la création d'un site vitrine chez un freelance vs en agence ?",
    answer:
      "Un freelance facture généralement 800 à 3 000 € (jusqu'à 5 000 € pour un profil expérimenté), une agence 2 000 à 6 000 € en standard et 6 000 à 30 000 € en sur-mesure. L'écart s'explique par le périmètre : cadrage, rédaction, SEO technique, recette multi-appareils et garanties sont rarement tous inclus chez un indépendant seul. Comparez toujours à périmètre égal, poste par poste.",
  },
  {
    question: "Quel est le prix d'un site vitrine WordPress ?",
    answer:
      "Avec un thème acheté : 800 à 3 000 € chez un freelance. En développement sur mesure WordPress : 5 000 à 15 000 € en agence (certaines facturent le thème sur-mesure dès 13 500 €). Ajoutez les coûts récurrents spécifiques à WordPress : licences de plugins (500 à 1 000 €/an sur un site professionnel) et maintenance de sécurité (30 à 120 €/mois), un poste quasi nul sur un site statique Next.js.",
  },
  {
    question: "Peut-on créer un site vitrine gratuitement avec Wix, Canva ou l'IA ?",
    answer:
      "Oui pour exister, rarement pour performer. Les builders et générateurs IA produisent un site correct en quelques heures, contre un abonnement à vie (17 à 80 €/mois) et de vraies limites : SEO bridé, performance moyenne, design générique, et surtout un site non exportable — vous ne possédez rien. Pour tester une activité, c'est pertinent ; pour générer des clients, un site professionnel s'amortit vite.",
  },
  {
    question: "Quels sont les coûts cachés d'un site vitrine ?",
    answer:
      "Les plus fréquents : la rédaction des contenus (150 à 800 € par page si elle n'est pas incluse), les photos professionnelles (600 à 2 000 €), les licences de plugins WordPress (500 à 1 000 €/an), la bannière cookies conforme RGPD, la maintenance, et la refonte prématurée d'un site low-cost (durée de vie moyenne : 2 ans et 7 mois). Vérifiez ce que couvre exactement chaque devis.",
  },
  {
    question: "Combien coûte la maintenance annuelle d'un site vitrine ?",
    answer:
      "Le marché facture 30 à 200 €/mois selon le socle et le niveau de service, soit 360 à 2 400 €/an. La règle sectorielle est de 10 à 20 % du coût de création par an. Nuance importante : cette maintenance est surtout nécessaire sur les CMS dynamiques (WordPress : mises à jour hebdomadaires du cœur et des plugins). Un site statique Next.js n'a structurellement rien à patcher — seules les évolutions se facturent.",
  },
  {
    question: "Combien de pages pour un site vitrine ?",
    answer:
      "L'essentiel tient en 5 pages : accueil, offre/services, à-propos, réalisations ou preuves, contact. Un site orienté acquisition ajoute une page par service (pour le SEO) et un blog, soit 10 à 20 pages. Au-delà, on parle plutôt de site éditorial. Le bon nombre de pages découle de vos requêtes cibles : une page ne peut viser sérieusement qu'une intention de recherche.",
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
      "Parce que vous n'êtes pas chez vous : un compte peut être suspendu, l'algorithme change, et la concurrence s'affiche à côté de votre fiche. Les chiffres plaident pour le cumul : 76 % des recherches locales sur mobile aboutissent à une visite sous 24 h, 84 % des consommateurs jugent une entreprise avec site plus crédible, et votre site est le seul endroit où la conversion (formulaire, devis, rendez-vous) vous appartient à 100 %.",
  },
  {
    question: "Un site vitrine pas cher est-il rentable ?",
    answer:
      "Tout dépend du rôle qu'on lui donne. Pour « exister », un site à 1 000 € fait le travail. Pour générer des clients, les études montrent que le design fait le jugement de crédibilité et qu'un taux de conversion médian se situe vers 2,9 % (services) : un site lent, générique et sans SEO convertit en dessous, et son vrai coût est l'ensemble des clients qu'il ne génère pas. Raisonnez en coût par client acquis, pas en prix d'achat.",
  },
  {
    question: "Comment obtenir un devis précis pour mon site vitrine ?",
    answer:
      "Décrivez votre projet via notre parcours guidé (3 minutes) : notre équipe vous répond personnellement sous 24 h ouvrées, gratuitement et sans engagement, avec une recommandation de gamme argumentée. Nos tarifs vitrines sont publics : 6 900 €, 14 900 € et 22 000 € et plus selon le périmètre — au forfait fixe contractuel, performance Lighthouse 95+ garantie.",
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
          { number: "01", title: "One-page : 500 – 2 000 €", description: "", color: "violet" },
          { number: "02", title: "Freelance : 800 – 3 000 €", description: "", color: "blue" },
          { number: "03", title: "Agence sur-mesure : 6 000 – 30 000 €", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
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
      >
        <p className="lead">
          Le prix d&apos;un site vitrine va de <strong>quelques centaines
          d&apos;euros en autonomie à plus de 20 000 € en agence
          sur-mesure</strong> — et ces montants décrivent des produits qui
          n&apos;ont de commun que le nom. Ce guide détaille les tarifs
          réellement pratiqués en France en 2026, ce que chaque niveau de prix
          inclut (et exclut), et la seule question qui compte : quel niveau
          d&apos;investissement correspond au rôle que ce site doit jouer pour
          votre entreprise ?
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
            { id: "performance", label: "11. Prix et performance : le lien que personne ne fait" },
            { id: "combien-de-pages", label: "12. Combien de pages pour un site vitrine ?" },
            { id: "vitrine-ou-ecommerce", label: "13. Vitrine ou e-commerce : ne payez pas trop grand" },
            { id: "delais", label: "14. Délais : de 2 à 14 semaines selon la gamme" },
            { id: "artisans-tpe", label: "15. Artisans et TPE locales : le bon niveau d'investissement" },
            { id: "budgeter", label: "16. Méthode : choisir son budget en 4 étapes" },
            { id: "erreurs", label: "17. Les 6 erreurs à éviter" },
            { id: "notre-approche", label: "18. Comment on construit un vitrine chez Hagnéré Code" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les prix 2026 en un tableau</h2>
        <p>
          En 2026, un site vitrine coûte en France{" "}
          <strong>200 à 1 000 € en autonomie sur un builder, 800 à 3 000 €
          chez un freelance, 2 000 à 6 000 € en agence standard et 6 000 à
          30 000 € en agence pour du sur-mesure</strong>. La grille relayée
          par France Num (source gouvernementale) situe un one-page entre 500
          et 2 000 € et un site basique entre 900 et 5 000 €.
        </p>
        <GuideTable
          headers={["Formule", "Fourchette 2026", "Pour qui"]}
          rows={[
            ["DIY (Wix, Squarespace, IA)", "0 – 1 000 € + 17-80 €/mois à vie", "Tester une activité"],
            ["One-page / landing", "500 – 2 000 €", "Événement, campagne, validation"],
            ["Vitrine freelance (3-8 pages)", "800 – 3 000 €", "Présence crédible, budget serré"],
            ["Vitrine agence standard", "2 000 – 6 000 €", "TPE/PME établie, périmètre cadré"],
            ["Vitrine agence sur-mesure", "6 000 – 15 000 €", "Génération de leads, SEO structuré"],
            ["Vitrine premium / multilingue", "15 000 – 30 000 €", "Marque forte, machine d'acquisition"],
          ]}
        />
        <p>
          Sources croisées : France Num, iPaoo, Codeur.com, Fenxi, AmphiBee —
          détail en fin d&apos;article. Ces fourchettes sont la partie
          émergée : la suite du guide explique ce que chaque palier{" "}
          <em>contient</em>, car c&apos;est là que les devis divergent.
        </p>

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
            <strong>Le taux de conversion médian d&apos;un site de services
            est d&apos;environ 2,9 %</strong> (Ruler Analytics), et les
            meilleurs dépassent 5 % : c&apos;est l&apos;écart entre un site
            qui « existe » et un site conçu pour convertir.
          </li>
        </ul>
        <p>
          Deux signaux complètent le tableau. D&apos;abord, les avis : 92 %
          des consommateurs lisent les avis en ligne d&apos;une entreprise
          locale avant une première visite (BrightLocal) — un site qui les
          met en scène transforme cette lecture en prise de contact. Ensuite,
          la tendance : les recherches mobiles « near me » ont explosé
          (+150 % en deux ans pour « près de moi maintenant » selon Google),
          et l&apos;ordre de grandeur souvent cité veut qu&apos;environ une
          recherche Google sur deux ait une intention locale — chiffre à
          prendre comme tendance, aucune publication officielle ne le
          confirme, mais la direction est sans ambiguïté : vos futurs clients
          vous cherchent sur leur téléphone, près de chez eux.
        </p>
        <InfoBox variant="blue" title="La question qui détermine le budget">
          Votre site doit-il <strong>exister</strong> (rassurer quelqu&apos;un
          qui vous cherche déjà) ou <strong>acquérir</strong> (faire venir des
          prospects qui ne vous connaissent pas, via Google) ? Le premier rôle
          se joue entre 1 000 et 3 000 €. Le second exige du SEO structuré,
          des contenus travaillés et de la performance — c&apos;est lui qui
          justifie les budgets à cinq chiffres, et son ROI se mesure.
        </InfoBox>

        <h2 id="prix-par-gamme">3. Les prix par gamme : du one-page au premium</h2>
        <h3>Le one-page : 500 – 2 000 €</h3>
        <p>
          Une seule page qui déroule votre proposition : parfait pour un
          lancement, un événement ou une campagne publicitaire. Sa limite est
          structurelle : Google positionne des <em>pages</em> sur des{" "}
          <em>requêtes</em> — un one-page ne peut sérieusement en viser
          qu&apos;une. Si le SEO fait partie du plan, passez directement au
          multi-pages.
        </p>
        <h3>Le vitrine essentiel : 3 à 5 pages, 800 – 6 900 €</h3>
        <p>
          Accueil, offre, à-propos, preuves, contact. C&apos;est le format
          qui couvre 80 % des besoins d&apos;une TPE. L&apos;écart de prix
          dans cette gamme s&apos;explique presque entièrement par ce qui est
          inclus : rédaction, design sur mesure ou template, SEO technique,
          performance (voir la grille de la section 6).
        </p>
        <h3>Le vitrine professionnel : 10 à 20 pages, 4 000 – 15 000 €</h3>
        <p>
          Une page par service (chacune vise sa requête Google), un blog pour
          le SEO, des pages de preuve. C&apos;est le format « machine
          d&apos;acquisition » : il ne se contente pas de rassurer, il fait
          venir. C&apos;est le cœur de notre offre de{" "}
          <Link href="/services/sites-vitrines">création de site
          vitrine</Link> à 14 900 €.
        </p>
        <h3>Le premium : multilingue, e-commerce léger, 15 000 – 30 000 €</h3>
        <p>
          Plusieurs langues, réservation ou paiement ponctuel, intégrations
          CRM, design system complet. À ce niveau, le site est un actif
          stratégique — et le devis doit être jugé sur le coût total et les
          garanties, pas sur le prix facial.
        </p>

        <h2 id="prix-par-prestataire">4. Builder, freelance ou agence : qui facture quoi</h2>
        <GuideTable
          headers={["Prestataire", "Prix vitrine", "Forces", "Limites"]}
          rows={[
            ["Builder / IA (Wix, Canva…)", "0 – 1 000 € + abonnement à vie", "Rapide, sans code", "SEO bridé, design générique, site non exportable"],
            ["Freelance junior", "500 – 2 000 €", "Prix d'entrée", "Périmètre réduit, continuité incertaine"],
            ["Freelance expérimenté", "2 000 – 5 000 €", "Bon rapport qualité/prix", "Une seule personne, rarement tous les métiers"],
            ["Agence standard", "2 000 – 6 000 €", "Équipe, méthode", "Souvent à base de thème"],
            ["Agence sur-mesure", "6 000 – 30 000 €", "Design propre, SEO, garanties", "Réservé aux sites à enjeu business"],
          ]}
        />
        <p>
          Un mot sur l&apos;offshore, très présent dans les recherches
          (« site vitrine Maroc, Tunisie, Madagascar ») : les tarifs affichés
          descendent à 300 – 800 € pour un vitrine. Le compte y est rarement :
          brief à distance, contenus à votre charge, SEO local français
          approximatif, et aucune garantie exploitable en droit français. Pour
          un one-page jetable, pourquoi pas ; pour le site qui porte votre
          crédibilité, l&apos;économie initiale se paie en reprises — le
          détail chiffré du coût réel de l&apos;offshore est dans notre{" "}
          <Link href="/guides/combien-coute-une-application-mobile">guide des
          prix d&apos;une application mobile</Link>, et la mécanique est la
          même pour le web.
        </p>
        <p>
          Repère utile pour situer les extrêmes du marché : le leader de la
          SERP chiffre la case « agence + sur-mesure » entre 6 000 et
          10 000 € pour un site minimaliste et 10 000 à 30 000 € pour un site
          professionnel ; certaines agences WordPress facturent le thème
          sur-mesure à partir de 13 500 €. Un devis sur-mesure à 7 000 €
          n&apos;est donc pas « cher » — il est dans la bande basse de sa
          catégorie.
        </p>

        <h2 id="prix-par-socle">5. Wix, WordPress, Next.js : le socle change la facture</h2>
        <GuideTable
          headers={["Socle", "Mise en place", "Coûts récurrents typiques", "À retenir"]}
          rows={[
            ["Wix / Squarespace", "0 – 1 000 €", "17 – 80 €/mois à vie", "Vous louez, vous ne possédez pas"],
            ["WordPress + thème", "800 – 3 000 €", "Licences 500-1 000 €/an + maintenance 30-120 €/mois", "Le standard, mais un CMS à patcher chaque semaine"],
            ["WordPress sur mesure", "5 000 – 15 000 €", "Idem WordPress", "Design propre, même dette de maintenance"],
            ["Webflow", "2 000 – 15 000 €", "Abonnement 15-39 $/mois", "No-code design, limites e-commerce/multilingue"],
            ["Next.js / React sur mesure", "6 900 – 22 000 €+", "Hébergement 0-20 €/mois, zéro licence", "Performance native, zéro CMS à patcher, code à vous"],
          ]}
        />
        <p>
          Et le site « généré par IA » ? C&apos;est la nouveauté 2026 de
          l&apos;autocomplete Google (« créer un site vitrine avec l&apos;IA,
          avec Canva… »). Notre position d&apos;équipe qui utilise
          l&apos;IA tous les jours : ces outils produisent en quelques minutes
          un site de démonstration honnête — et générique. Ils ne font ni
          votre positionnement, ni vos contenus, ni votre SEO local, et le
          résultat vit sur l&apos;abonnement d&apos;un tiers. L&apos;IA
          change réellement les prix quand elle est industrialisée{" "}
          <em>dans</em> le processus d&apos;une équipe senior : c&apos;est ce
          qui nous permet d&apos;inclure design sur mesure et rédaction dans
          un forfait à 6 900 €.
        </p>
        <p>
          Le point que les comparatifs oublient : le socle détermine surtout
          les <strong>coûts d&apos;après</strong>. Un WordPress professionnel
          cumule licences de plugins et maintenance de sécurité
          hebdomadaire ; un site statique Next.js n&apos;a structurellement
          rien à patcher (notre comparatif complet{" "}
          <Link href="/guides/nextjs-ou-wordpress">Next.js ou
          WordPress</Link> chiffre cet écart, sources à l&apos;appui). Sur
          3 ans, cet écart pèse plus que la différence de
          prix initial (section 10).
        </p>

        <h2 id="inclus-ou-pas">6. Ce qui est inclus (ou pas) à chaque niveau de prix</h2>
        <p>
          Voici la grille que nous n&apos;avons trouvée nulle part ailleurs —
          et qui explique pourtant l&apos;essentiel des écarts entre devis :
        </p>
        <GuideTable
          headers={["Prestation", "Vitrine à 1 500 €", "Vitrine à 4 000 €", "Sur-mesure 6 900 €+"]}
          rows={[
            ["Design", "Template", "Thème personnalisé", "Sur mesure, design system"],
            ["Rédaction des contenus", "À votre charge", "Partielle (150-800 €/page sinon)", "Incluse, optimisée SEO"],
            ["SEO technique", "Basique ou absent", "Balises + sitemap", "Structuré + données structurées"],
            ["Performance garantie", "Non", "Non", "Contractuelle (Lighthouse 95+)"],
            ["Photos / visuels", "Banque d'images", "Mixte", "Direction artistique"],
            ["Responsive soigné", "Automatique (thème)", "Vérifié", "Conçu mobile-first"],
            ["Propriété du code", "Souvent floue", "Variable", "Totale, dépôt Git remis"],
            ["Garantie post-lancement", "Rare", "15-30 jours", "30 jours incluse"],
          ]}
        />
        <p>
          Utilisez cette grille comme check-list de lecture de devis : chaque
          ligne absente d&apos;un devis « attractif » est une ligne que vous
          paierez plus tard, ailleurs, ou en clients perdus.
        </p>

        <GuideInlineCTA
          title="Votre site vitrine, cadré en 3 minutes"
          description="Décrivez votre projet en quelques étapes guidées — notre équipe vous répond personnellement sous 24 h ouvrées avec une recommandation de gamme argumentée."
        />

        <h2 id="postes-devis">7. Les postes d&apos;un devis vitrine, décomposés</h2>
        <p>
          Les ratios types d&apos;un projet vitrine professionnel, constatés
          sur le marché et dans nos propres forfaits :
        </p>
        <ul>
          <li>
            <strong>Cadrage et arborescence (10-15 %)</strong> — comprendre
            votre marché et vos requêtes cibles ; c&apos;est ce qui distingue
            un site qui travaille d&apos;une plaquette.
          </li>
          <li>
            <strong>Design (20-25 %)</strong> — le marché facture le
            webdesign 500 à 3 000 € par gabarit de page en agence.
          </li>
          <li>
            <strong>Développement et intégrations (30-40 %)</strong> —
            formulaires, prise de rendez-vous, CRM, tracking.
          </li>
          <li>
            <strong>Contenus (10-20 %)</strong> — la rédaction se facture 150
            à 400 € la page en freelance, 500 à 800 € en agence. Premier
            poste exclu des devis bas.
          </li>
          <li>
            <strong>SEO technique et performance (10-15 %)</strong> —
            balisage, données structurées, Core Web Vitals.
          </li>
          <li>
            <strong>Recette, mise en ligne, garantie (5-10 %)</strong> —
            tests multi-appareils, redirections, monitoring.
          </li>
        </ul>

        <h2 id="notre-grille">8. Notre grille publique, justifiée poste par poste</h2>
        <p>
          Fait rare sur cette requête : aucun des guides concurrents ne
          publie ses propres tarifs détaillés. Voici donc notre grille
          vitrine, celle que vous retrouverez sur notre{" "}
          <Link href="/tarifs">page tarifs</Link> — au forfait fixe
          contractuel, rédaction et hébergement première année inclus :
        </p>
        <GuideTable
          headers={["Forfait", "Périmètre", "Délai", "Prix"]}
          rows={[
            ["Essentiel", "3-5 pages orientées conversion, design sur mesure, SEO technique, rédaction incluse", "2-4 semaines", "6 900 €"],
            ["Performance", "10-20 pages + blog SEO, données structurées, tracking, CMS headless", "5-7 semaines", "14 900 €"],
            ["Premium", "Multilingue, e-commerce léger, intégrations avancées", "8-14 semaines", "22 000 €+"],
          ]}
        />
        <p>
          Pourquoi ces prix sont au-dessus d&apos;un freelance et en dessous
          des agences premium : tout est inclus (grille de la section 6,
          colonne de droite), la performance est <strong>garantie par
          contrat</strong> (Lighthouse ≥ 95 mobile, corrections gratuites
          sinon), et le code vous appartient dès le premier jour. Nos{" "}
          <Link href="/realisations">réalisations</Link> — dont deux sites
          d&apos;acquisition documentés chiffres à l&apos;appui — servent de
          preuve.
        </p>

        <h2 id="couts-recurrents">9. Les coûts récurrents et cachés</h2>
        <GuideTable
          headers={["Poste", "Fourchette réelle", "Remarque"]}
          rows={[
            ["Nom de domaine", "6 – 15 €/an", "Toujours à votre nom"],
            ["Hébergement (site statique)", "0 – 20 €/mois", "Quasi gratuit en Next.js bien construit"],
            ["Hébergement (WordPress)", "5 – 40 €/mois", "Mutualisé à VPS"],
            ["Maintenance", "30 – 200 €/mois selon socle", "Obligatoire sur CMS, optionnelle en statique"],
            ["Licences plugins (WordPress)", "500 – 1 000 €/an", "Constructeur, SEO, sécurité, formulaires"],
            ["Rédaction (si exclue)", "150 – 800 €/page", "Le coût caché n° 1 des devis bas"],
            ["Photos professionnelles", "600 – 2 000 €", "Souvent oubliées au budget"],
            ["Bannière cookies (CMP)", "0 – 150 €/an", "Conformité RGPD"],
          ]}
        />

        <h2 id="cout-total-3-ans">10. Abonnement ou achat : le coût total sur 3 ans</h2>
        <p>
          Aucun guide de cette SERP ne fait ce calcul — c&apos;est pourtant le
          seul qui permette de comparer un builder « pas cher », un WordPress
          d&apos;entrée de gamme et un site sur-mesure :
        </p>
        <FormulaBox>
{`BUILDER À 40 €/MOIS (Wix Business, « site gratuit ») — 3 ans
  Abonnement 36 × 40 €                       1 440 €
  Votre temps de construction (~40 h)        non chiffré
  Rédaction, photos, logo                    à votre charge
  Site exportable à la fin ?                 NON
  ──────────────────────────────────────────────────
  TOTAL 3 ANS                          1 440 € + votre temps
  → et tout est à refaire si vous partez

WORDPRESS FREELANCE À 2 000 € — 3 ans
  Création                                   2 000 €
  Hébergement + domaine (3 ans)          400 – 800 €
  Licences plugins (3 ans)             900 – 1 800 €
  Maintenance (3 ans)                1 080 – 4 300 €
  Rédaction souvent en sus             750 – 2 400 €
  ──────────────────────────────────────────────────
  TOTAL 3 ANS                        5 100 – 11 300 €

SUR-MESURE NEXT.JS À 6 900 € (tout inclus) — 3 ans
  Création (rédaction et SEO inclus)         6 900 €
  Hébergement 1re année incluse, puis    0 – 480 €
  Licences                                       0 €
  Maintenance obligatoire                    ≈ 0 €
  ──────────────────────────────────────────────────
  TOTAL 3 ANS                         6 900 – 7 400 €`}
        </FormulaBox>
        <p>
          Conclusion contre-intuitive : <strong>sur 3 ans, le site
          sur-mesure « cher » coûte souvent moins qu&apos;un WordPress
          d&apos;entrée de gamme complété au fil de l&apos;eau</strong> — et
          il travaille mieux pendant tout ce temps. C&apos;est l&apos;effet
          mécanique du « tout inclus » et de l&apos;absence de licences et de
          maintenance forcée.
        </p>

        <h2 id="performance">11. Prix et performance : le lien que personne ne fait</h2>
        <p>
          Aucun guide concurrent ne compare les devis sur la performance.
          C&apos;est pourtant un critère mesurable — et chiffrable en euros :
          l&apos;étude Google/Deloitte « Milliseconds Make Millions » mesure
          qu&apos;un gain de 0,1 seconde de vitesse mobile augmente les
          conversions de +8,4 % ; et passer de 1 à 3 secondes de chargement
          augmente le rebond de 32 % (Google). Un vitrine lent paie donc une
          taxe invisible sur chaque visiteur — souvent supérieure, sur un an,
          à l&apos;écart de prix entre deux devis.
        </p>
        <p>
          Le réflexe à adopter : demandez à chaque prestataire{" "}
          <strong>quel score Lighthouse mobile il s&apos;engage à
          livrer</strong>, et si cet engagement figure au contrat. C&apos;est
          un excellent révélateur de sérieux — et la base d&apos;un bon{" "}
          <Link href="/services/referencement-google">référencement
          Google</Link>, car la vitesse est un critère de classement.
        </p>

        <h2 id="combien-de-pages">12. Combien de pages pour un site vitrine ?</h2>
        <p>
          La bonne réponse ne vient pas du design mais du SEO : <strong>une
          page = une intention de recherche</strong>. L&apos;essentiel tient
          en 5 pages (accueil, offre, à-propos, preuves, contact). Ajoutez une
          page par service si vous visez des requêtes distinctes — «
          plombier chauffagiste Chambéry » et « dépannage fuite d&apos;eau »
          méritent chacune leur page — et un blog si vous jouez
          l&apos;acquisition longue durée. C&apos;est exactement la logique
          qui sépare notre forfait Essentiel (3-5 pages) du forfait
          Performance (10-20 pages + blog).
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

        <h2 id="delais">14. Délais : de 2 à 14 semaines selon la gamme</h2>
        <GuideTable
          headers={["Gamme", "Délai marché", "Délai Hagnéré Code"]}
          rows={[
            ["One-page / vitrine simple", "2 – 4 semaines", "2 – 4 semaines"],
            ["Vitrine professionnel + blog", "4 – 8 semaines", "5 – 7 semaines"],
            ["Premium / multilingue", "8 – 14 semaines", "8 – 14 semaines"],
          ]}
        />
        <p>
          La cause n° 1 de retard, toutes gammes confondues, reste le contenu
          non fourni au démarrage (+2 à 4 semaines) — c&apos;est pourquoi nos
          forfaits incluent la rédaction, et pourquoi nos dates sont
          contractuelles avec pénalité de retard ({" "}
          <Link href="/methode">méthode Sprint Fixe™</Link>).
        </p>

        <h2 id="artisans-tpe">15. Artisans et TPE locales : le bon niveau d&apos;investissement</h2>
        <p>
          Le segment artisan est saturé d&apos;offres à 590 – 3 990 € et
          d&apos;abonnements à 19-70 €/mois. Soyons honnêtes : <strong>pour un
          artisan dont le carnet est plein par le bouche-à-oreille, un site
          simple à 1 000 – 2 000 € qui rassure et affiche les coordonnées
          suffit</strong>. Le passage au niveau supérieur (5 000 – 10 000 €)
          se justifie quand le site doit <em>générer</em> du travail :
          prise de rendez-vous en ligne, pages par prestation pour le SEO
          local, avis intégrés, photos de chantiers. Le calcul est vite
          fait : dans un métier où le panier moyen se chiffre en milliers
          d&apos;euros, il suffit de quelques chantiers gagnés par an via
          Google pour amortir la différence — et le bâtiment est justement le
          secteur le moins équipé de France (53 % de sites seulement).
          Selon votre région, une subvention peut couvrir 30 à 50 % du
          montant HT : le panorama vérifié est dans notre guide des{" "}
          <Link href="/guides/aides-creation-site-internet">aides à la
          création de site internet</Link>.
        </p>

        <h2 id="budgeter">16. Méthode : choisir son budget en 4 étapes</h2>
        <ol>
          <li>
            <strong>Tranchez le rôle du site</strong> — exister (rassurer) ou
            acquérir (faire venir) ? C&apos;est la section 2, et c&apos;est
            80 % de la décision budgétaire.
          </li>
          <li>
            <strong>Déduisez le nombre de pages de vos requêtes cibles</strong> —
            une page par intention de recherche (section 12).
          </li>
          <li>
            <strong>Comparez les devis avec la grille « inclus / exclu »</strong> —
            rédaction, SEO, performance, propriété du code, garantie
            (section 6) — et envoyez le même{" "}
            <Link href="/guides/cahier-des-charges-site-internet">cahier des
            charges</Link> à tous les prestataires.
          </li>
          <li>
            <strong>Raisonnez en coût total sur 3 ans</strong> — création +
            abonnements + licences + maintenance + rédaction (section 10).
          </li>
        </ol>

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
            font la crédibilité (et le SEO), pas le thème.
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

        <h2 id="notre-approche">18. Comment on construit un vitrine chez Hagnéré Code</h2>
        <p>
          Nous construisons les sites vitrines en <strong>Next.js /
          React</strong> — génération statique, Core Web Vitals au vert,
          zéro plugin à maintenir — avec un principe simple : tout ce qui
          conditionne le résultat est inclus (design sur mesure, rédaction
          SEO, données structurées, tracking, 30 jours de garantie,
          hébergement première année) et tout est contractuel : le prix
          (forfait fixe), les dates (pénalités de retard) et la performance
          (Lighthouse ≥ 95 mobile, corrections gratuites sinon).
        </p>
        <p>
          Vous hésitez encore sur la gamme ?{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> — notre équipe vous répond personnellement sous
          24 h ouvrées avec une recommandation argumentée, gratuite et sans
          engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — chiffres cités dans ce guide (consultés
          en juillet 2026) :{" "}
          <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e" target="_blank" rel="noopener noreferrer">France Num</a>{" "}
          (grille de prix officielle et baromètre 2025) ; guides prix{" "}
          <a href="https://www.ipaoo.fr/creer-un-site-vitrine/prix/" target="_blank" rel="noopener noreferrer">iPaoo</a>,{" "}
          <a href="https://www.codeur.com/pages/prix-site-internet" target="_blank" rel="noopener noreferrer">Codeur.com</a>{" "}
          et Fenxi ; étude{" "}
          <a href="https://web.dev/case-studies/milliseconds-make-millions" target="_blank" rel="noopener noreferrer">Google/Deloitte « Milliseconds Make Millions »</a> ;{" "}
          <a href="https://www.thinkwithgoogle.com/" target="_blank" rel="noopener noreferrer">Think with Google</a>{" "}
          (recherche locale) ; Stanford Web Credibility Project (B.J. Fogg) ;
          enquête Verisign ; benchmarks de conversion{" "}
          <a href="https://www.rulernalytics.com/blog/insight/conversion-rate-by-industry/" target="_blank" rel="noopener noreferrer">Ruler Analytics</a>.
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
