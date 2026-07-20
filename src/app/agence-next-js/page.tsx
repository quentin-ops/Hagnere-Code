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
import { OG_BASE, SITE_URL, SERVICES_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Agence Next.js : développement sur mesure · Hagnéré Code",
  description:
    "Agence Next.js et React à Bassens : sites, e-commerce et applications métier. Performance, périmètre, livrables, accès et droits sont cadrés au devis.",
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/agence-next-js" },
  openGraph: {
    ...OG_BASE,
    type: "website",
    title: "Agence Next.js — Hagnéré Code",
    description:
      "Développement Next.js et React sur mesure : sites, e-commerce, SaaS et applications métier. Objectifs de performance, prix, livrables et droits au devis.",
    url: "/agence-next-js",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agence de développement Next.js et React",
  url: `${SITE_URL}/agence-next-js`,
  serviceType:
    "Développement Next.js et React sur mesure : sites, e-commerce, SaaS et applications métier",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "France" },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "6900",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "6900",
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
    },
    availability: "https://schema.org/InStock",
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Agence Next.js", item: `${SITE_URL}/agence-next-js` },
  ],
});

const faqItems = [
  {
    question: "Pourquoi choisir Next.js plutôt que WordPress pour mon site ?",
    answer:
      "Pour trois raisons possibles, selon le projet : des pages pré-générées rapides, une surface technique différente de celle d'un WordPress enrichi de nombreuses extensions, et une plus grande liberté de conception. Mais Next.js n'est pas automatiquement plus sûr ni plus performant : l'architecture, les dépendances, l'hébergement et la maintenance restent déterminants. Si votre WordPress est récent, rapide et bien maintenu par une équipe qui le maîtrise, changer peut ne rien vous apporter. Notre comparatif Next.js ou WordPress détaille aussi les cas où WordPress reste le meilleur choix.",
  },
  {
    question: "Combien coûte un projet Next.js chez vous ?",
    answer:
      "Un site vitrine sur mesure démarre à 6 900 €, avec deux paliers supérieurs à 14 900 € et 22 000 € et plus selon l'ambition. Une boutique en ligne va de 15 000 à 120 000 €. Une première version d'application métier ou de logiciel en ligne démarre à 15 000 €. Ces prix sont publics et fermes : nous travaillons au forfait fixe contractuel, le montant est arrêté avant de commencer et ne bouge pas. Tout ajout en cours de route passe par un avenant chiffré, jamais par une facture surprise à la livraison.",
  },
  {
    question: "Next.js, c'est plus cher qu'un site WordPress ?",
    answer:
      "À la construction, oui, généralement. Sur la durée, l'écart se resserre nettement : pas de licences d'extensions premium, pas de maintenance de sécurité hebdomadaire, un hébergement souvent sous 20 € par mois. Sur trois ans, un WordPress professionnel coûte couramment 5 400 à 13 600 € en récurrent, poste qui tombe presque à zéro sur un site statique. Notre guide du prix d'un site internet détaille ce calcul, et notre guide de la migration WordPress vers Next.js modélise le coût total sur trois ans dans les deux sens.",
  },
  {
    question: "Est-ce que Next.js est bon pour le référencement ?",
    answer:
      "Oui, et c'est l'une de ses principales raisons d'être. Contrairement aux applications React classiques qui construisent la page dans le navigateur, Next.js sert à Google des pages HTML complètes, immédiatement lisibles. S'y ajoute la vitesse : les Core Web Vitals sont utilisés par les systèmes de classement de Google, et un site pré-généré part avec un avantage structurel. Attention toutefois à ne pas tout attendre de la technique — la pertinence du contenu prime toujours. Un site Next.js sans contenu utile ne se positionnera pas mieux qu'un WordPress sans contenu utile.",
  },
  {
    question: "Pourrai-je modifier mon site moi-même après la livraison ?",
    answer:
      "Oui, si c'est prévu au périmètre — et nous vous poserons la question au cadrage plutôt que d'en décider à votre place. Trois options : un CMS moderne (Sanity, Payload) qui vous donne une interface d'édition confortable ; WordPress conservé en coulisses comme back-office si vos équipes y tiennent ; ou du contenu dans le code, moins cher mais qui suppose de passer par nous pour publier. Le bon choix dépend de qui publie, à quelle fréquence, et avec quelle autonomie souhaitée. Ce n'est pas une question technique, c'est une question d'organisation.",
  },
  {
    question: "Serai-je dépendant de vous après la livraison ?",
    answer:
      "La réversibilité est écrite : les livrables spécifiques sont transférés après paiement complet selon les CGV. Le devis inventorie le dépôt, les accès, le domaine, la documentation, les composants préexistants et les licences tierces. Payer une prestation ne transfère pas automatiquement tous les droits ; il faut lire la clause applicable au projet.",
  },
  {
    question: "Travaillez-vous partout en France ?",
    answer:
      "Oui. Nous sommes basés à Bassens, aux portes de Chambéry, en Savoie. Cadrage, points d'étape et démonstrations peuvent être conduits à distance partout en France ; les déplacements en Savoie et Haute-Savoie sont organisés selon le projet.",
  },
  {
    question: "Combien de temps prend un projet Next.js ?",
    answer:
      "Il n'existe pas de délai Next.js standard : le nombre de gabarits, les contenus, les intégrations, la migration, la recette et les disponibilités de validation changent le calendrier. Après le cadrage, le devis distingue charge de réalisation, dépendances côté client, jalons de validation et marge de risque. Le délai annoncé n'est engageant que s'il est écrit au contrat avec ses hypothèses.",
  },
];


export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <GuideLayout
        breadcrumbs={[{ label: "Agence Next.js" }]}
        heroTitle="Agence Next.js : développement sur mesure et performance mesurée"
        heroDescription="Nous développons en Next.js et React des sites, des boutiques en ligne et des applications métier. Le devis fixe prix, performance, livrables, accès et droits. Basés à Bassens, aux portes de Chambéry, nous travaillons partout en France."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel="Mis à jour le 18 juillet 2026"
        keyPoints={[
          { number: "01", title: "Budget de performance au devis", description: "", color: "violet" },
          { number: "02", title: "Forfait fixe dès 6 900 €", description: "", color: "blue" },
          { number: "03", title: "Dépôt, domaine et droits cadrés", description: "", color: "emerald" },
          { number: "04", title: "Recette et correction au devis", description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/agence-react", label: "Agence React" },
          { href: "/services/sites-vitrines", label: "Sites vitrines" },
          { href: "/services/ecommerce", label: "E-commerce sur mesure" },
          { href: "/services/saas-applications-metier", label: "SaaS et applications métier" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/migrer-wordpress-vers-nextjs", label: "Migrer de WordPress vers Next.js" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Développement Next.js : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Next.js est aujourd&apos;hui le socle le plus solide pour construire
          un site ou une application web qui doit être <strong>rapide, bien
          référencée et évolutive</strong>. Nous l&apos;utilisons sur
          l&apos;ensemble de nos développements. Cette page explique ce que nous
          construisons avec, ce que nous pouvons contractualiser, ce que ça
          coûte — et les cas où nous vous dirons que ce n&apos;est pas la
          bonne solution. Si votre besoin est une application derrière un
          identifiant plutôt qu&apos;un site public, notre page{" "}
          <Link href="/agence-react">agence React</Link> traite précisément
          ce cas.
        </p>

        <GuideToc
          items={[
            { id: "ce-que-nous-construisons", label: "1. Ce que nous construisons en Next.js" },
            { id: "pourquoi", label: "2. Pourquoi Next.js, en termes concrets" },
            { id: "preuves", label: "3. Études de cas et limites de preuve" },
            { id: "garanties", label: "4. Ce que le devis doit préciser" },
            { id: "prix", label: "5. Nos prix, publics et fermes" },
            { id: "quand-non", label: "6. Quand Next.js n'est pas la bonne réponse" },
            { id: "methode", label: "7. Comment se déroule un projet" },
            { id: "stack", label: "8. Notre stack technique" },
          ]}
        />

        <h2 id="ce-que-nous-construisons">1. Ce que nous construisons en Next.js</h2>
        <p>
          Next.js n&apos;est pas réservé aux sites vitrines. C&apos;est le même
          socle qui porte, chez nous, quatre types de projets très différents.
        </p>
        <GuideTable
          headers={["Type de projet", "Ce que ça couvre", "Budget d'entrée", "Délai"]}
          rows={[
            ["Site vitrine et landing pages", "Site d'entreprise orienté conversion, blog, pages de référencement", "6 900 €", "Planning confirmé au devis"],
            ["Site à contenu et référencement", "Blog structuré, guides, multilingue, CMS pour votre équipe", "14 900 €", "Planning confirmé au devis"],
            ["Boutique en ligne sur mesure", "Catalogue, tunnel de commande, paiement, connexion à votre gestion", "15 000 €", "Planning confirmé au devis"],
            ["Application métier et logiciel en ligne", "Espace client, outil interne, automatisation de processus", "15 000 €", "Planning confirmé au devis"],
          ]}
        />
        <p>
          Nous prenons également en charge les{" "}
          <Link href="/guides/migrer-wordpress-vers-nextjs">migrations depuis
          WordPress</Link>, avec le plan de redirection qui protège votre
          référencement existant, ainsi que le{" "}
          <Link href="/services/referencement-google">référencement
          naturel</Link> et les{" "}
          <Link href="/services/publicite-en-ligne">campagnes Google Ads</Link>{" "}
          — parce qu&apos;un site que personne ne trouve ne sert à rien.
        </p>

        <h2 id="pourquoi">2. Pourquoi Next.js, en termes concrets</h2>
        <p>
          Sans jargon, voici ce que ce choix technique change pour votre
          entreprise.
        </p>
        <ul>
          <li>
            <strong>La vitesse, et ce qu&apos;elle rapporte.</strong> Les pages
            sont préparées à l&apos;avance plutôt que fabriquées à chaque
            visite. L&apos;étude de référence menée par Deloitte pour Google
            sur 37 marques mesure qu&apos;un dixième de seconde gagné au
            chargement fait progresser les formulaires soumis de 21,6 % en
            génération de contacts. Sur un site d&apos;entreprise qui vit de
            demandes de devis, c&apos;est directement du chiffre
            d&apos;affaires.
          </li>
          <li>
            <strong>Le référencement bien servi.</strong> Contrairement aux
            applications React classiques, Next.js envoie à Google des pages
            HTML complètes. Le contenu est lisible immédiatement, sans
            dépendre de l&apos;exécution d&apos;un script.
          </li>
          <li>
            <strong>La sécurité par soustraction.</strong> Un site pré-généré
            n&apos;interroge aucune base de données et n&apos;exécute aucun
            code sur le serveur au moment de la visite. Pour référence,
            l&apos;écosystème WordPress a vu 11 334 nouvelles vulnérabilités
            recensées en 2025, dont 91 % dans les extensions.
          </li>
          <li>
            <strong>La liberté de conception.</strong> Sur un thème, vous
            composez avec ce que le thème a prévu. En React, l&apos;interface
            est dessinée pour votre marque — animations, interactions, mise en
            page — sans demander la permission à un constructeur de pages.
          </li>
          <li>
            <strong>Le coût récurrent.</strong> Ni licences d&apos;extensions,
            ni maintenance de sécurité hebdomadaire, et un hébergement souvent
            sous 20 € par mois.
          </li>
        </ul>

        <h2 id="preuves">3. Études de cas et éléments publics vérifiables</h2>
        <p>
          Deux études de cas renvoient vers des pages publiques. Elles permettent
          de vérifier leur disponibilité, leurs contenus et leurs fonctions visibles ;
          la stack indiquée reste une information déclarée par Hagnéré Code.
        </p>
        <GuideTable
          headers={["Projet", "Nature", "Éléments publics vérifiables"]}
          rows={[
            ["Hagnéré Patrimoine", "Site éditorial et outils internes pour un cabinet de gestion de patrimoine", "Pages éditoriales, simulateurs et prise de rendez-vous consultables sur le site public"],
            ["Hagnéré Investissement", "Site de présentation pour un cabinet d'investissement immobilier", "Parcours, contenus et formulaire consultables sur le site public"],
          ]}
        />
        <InfoBox variant="amber" title="Une transparence qui nous dessert, mais qui est due">
          <strong>Ces deux produits appartiennent au même groupe que
          nous&nbsp;: ce ne sont pas des clients externes.</strong> Nous préférons l&apos;écrire noir sur blanc plutôt que
          de laisser croire à des références décrochées en concurrence. Ce que
          cela ne change pas : les pages sont accessibles et leurs contenus et
          fonctions visibles peuvent être examinés. Cela ne suffit pas à documenter
          leur architecture interne ou leurs résultats.
          Aucune métrique d&apos;acquisition n&apos;est publiée ici sans dossier de preuve
          daté. Ce que cela change : vous êtes en droit de
          leur accorder moins de poids qu&apos;à une référence externe, et
          nous le comprenons. Vous pouvez en revanche tester nos réalisations
          vous-même sur PageSpeed Insights — c&apos;est gratuit, ça prend
          trente secondes, et c&apos;est le genre de vérification que notre{" "}
          <Link href="/guides/choisir-son-agence-web">guide pour choisir son
          agence web</Link> recommande d&apos;appliquer à tout prestataire,
          nous compris.
        </InfoBox>
        <p>
          Le détail de ces projets — problème, solution, décisions techniques —
          est sur notre page{" "}
          <Link href="/realisations">réalisations</Link>. Nous développons
          également deux études de cas consacrées à des offres de comptabilité
          fiscale. Leurs pages publiques sont consultables ; la technologie Laravel
          mentionnée dans ces études reste une information déclarée.
        </p>

        <GuideInlineCTA
          title="Un projet Next.js en tête ?"
          description="Décrivez-le en 3 minutes. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti. Cette première réponse est gratuite et sans engagement — y compris si elle consiste à recommander une solution plus simple."
        />

        <h2 id="garanties">4. Ce que le devis doit préciser</h2>
        <p>
          Les engagements sont adaptés au périmètre et ne naissent que du document signé.
        </p>
        <GuideTable
          headers={["Engagement", "Ce que ça signifie", "Comment vous le vérifiez"]}
          rows={[
            ["Budget de performance", "Pages, appareil, réseau, scripts tiers, outil et seuils de recette", "Le protocole et les résultats sont conservés"],
            ["Forfait fixe contractuel", "Périmètre écrit, prix arrêté avant de commencer, aucun dépassement surprise", "Le devis signé fait foi ; tout ajout passe par un avenant chiffré"],
            ["Livrables et droits", "Transfert des livrables spécifiques après paiement selon les CGV, exclusions et licences listées", "Le devis et l'inventaire de passation font foi"],
            ["Recette et correction", "Durée, sévérités, couverture, procédure et délais cibles", "Les tickets sont rapprochés des critères signés"],
          ]}
        />
        <p>
          Un score Lighthouse isolé varie avec la page, l&apos;appareil, le réseau
          et les scripts tiers. Une cible utile doit donc être associée à un
          protocole et ne vaut ni classement Google ni taux de conversion garanti.
        </p>

        <h2 id="prix">5. Nos prix, publics et fermes</h2>
        <p>
          Nous publions nos tarifs, ce qui reste rare dans ce métier. La raison
          est pratique : cela évite à tout le monde un premier rendez-vous
          inutile quand le budget n&apos;est pas dans la même zone.
        </p>
        <GuideTable
          headers={["Offre", "Périmètre", "Prix"]}
          rows={[
            ["Site vitrine — Essentiel", "3 à 5 pages orientées conversion, design sur mesure, référencement technique, rédaction incluse", "6 900 €"],
            ["Site vitrine — Performance", "10 à 20 pages, blog structuré pour le référencement, interface d'édition sans toucher au code", "14 900 €"],
            ["Site vitrine — Premium", "Multilingue, e-commerce léger, intégrations avancées", "22 000 € et plus"],
            ["E-commerce sur mesure", "Catalogue, tunnel de commande, connexion au logiciel de gestion", "15 000 à 120 000 €"],
            ["Application métier / logiciel en ligne", "Première version réellement utilisable ; planning défini après cadrage", "Dès 15 000 €"],
            ["Discovery Sprint", "2 jours de cadrage : périmètre écrit, maquette, devis ferme", "1 500 €, déduits à 100 % si le projet se lance"],
          ]}
        />
        <p>
          La grille complète, poste par poste, est sur notre{" "}
          <Link href="/tarifs">page tarifs</Link>. Si vous voulez comprendre ce
          qui fait varier un devis avant même de nous consulter, notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">guide du prix
          d&apos;un site internet</Link> et notre{" "}
          <Link href="/guides/tjm-developpeur-web">guide du tarif journalier
          d&apos;un développeur</Link> décortiquent le sujet, sources à
          l&apos;appui.
        </p>

        <h2 id="quand-non">6. Quand Next.js n&apos;est pas la bonne réponse</h2>
        <p>
          Nous préférons perdre une mission que la vendre mal. Voici les cas où
          nous vous orienterons ailleurs.
        </p>
        <ul>
          <li>
            <strong>Votre budget total est inférieur à 3 000 €.</strong> Le
            sur-mesure n&apos;a pas de sens à ce niveau : une solution plus
            simple vous servira mieux, et nous le dirons au premier
            rendez-vous.
          </li>
          <li>
            <strong>Vous avez besoin d&apos;un site de trois pages sans enjeu
            d&apos;acquisition.</strong> Si le site doit exister sans faire
            venir de clients, le budget ne se justifie pas.
          </li>
          <li>
            <strong>Votre WordPress actuel est récent et performant.</strong>{" "}
            Si vos mesures sont bonnes, optimisez plutôt que de reconstruire.
            Notre{" "}
            <Link href="/guides/migrer-wordpress-vers-nextjs">guide de la
            migration</Link> liste cinq situations où nous refusons la mission,
            celle-ci comprise.
          </li>
          <li>
            <strong>Votre équipe éditoriale publie tous les jours avec un
            constructeur visuel.</strong> Le confort perdu peut coûter plus que
            la vitesse gagnée. C&apos;est un arbitrage d&apos;organisation,
            pas de technique.
          </li>
          <li>
            <strong>Votre boutique WooCommerce est imbriquée avec des
            extensions métier sans équivalent.</strong> La migration devient
            alors un projet de refonte du système d&apos;information, à
            chiffrer comme tel.
          </li>
        </ul>

        <h2 id="methode">7. Comment se déroule un projet</h2>
        <p>
          Nos projets démarrent par un <strong>Discovery Sprint de deux
          jours</strong>, facturé 1 500 € et intégralement déduit si le projet
          se lance. Il produit trois choses : un périmètre écrit, une maquette,
          et un devis ferme. C&apos;est ce qui permet ensuite de tenir un
          forfait fixe sans mauvaise surprise pour personne.
        </p>
        <p>
          Vient ensuite le cycle de production : design et maquettes,
          développement, intégration des contenus, recette — la phase de tests
          et de validation avant mise en ligne —, puis la bascule. Vous voyez
          le projet avancer à chaque étape plutôt que de découvrir le résultat
          à la fin. Le déroulé complet est détaillé sur notre{" "}
          <Link href="/methode">page méthode</Link>.
        </p>
        <p>
          Après la mise en ligne, vous choisissez : un contrat de maintenance,
          des interventions ponctuelles, ou rien du tout si votre équipe
          reprend la main. Un site Next.js correctement construit ne demande
          pas de vigilance hebdomadaire — c&apos;est justement l&apos;un de
          ses intérêts.
        </p>

        <h2 id="stack">8. Notre stack technique</h2>
        <p>
          Pour les lecteurs techniques, voici une stack de référence. Les versions,
          services et responsabilités réellement retenus sont confirmés dans le devis
          et la documentation du projet.
        </p>
        <GuideTable
          headers={["Couche", "Technologies", "Pourquoi"]}
          rows={[
            ["Framework", "Next.js 15, React 19", "Rendu serveur, génération statique, écosystème le plus large du web"],
            ["Langage", "TypeScript", "Les erreurs sont détectées à l'écriture plutôt qu'en production"],
            ["Interface", "Tailwind CSS v4, Framer Motion, GSAP", "Design sur mesure et animations sans surcoût de performance"],
            ["Données", "PostgreSQL, Drizzle ORM", "Base relationnelle éprouvée, requêtes typées de bout en bout"],
            ["Contenu", "CMS headless (Sanity, Payload) ou contenu versionné", "Choisi selon qui publie et à quelle fréquence"],
            ["Hébergement", "Vercel, ou hébergeur français (OVHcloud, Scaleway, Clever Cloud)", "Selon vos exigences de souveraineté des données"],
          ]}
        />
        <p>
          Vous pouvez tester cette page sur PageSpeed Insights et examiner le HTML
          livré au navigateur. Ces vérifications objectivent le rendu public ; elles
          ne prouvent pas à elles seules toute la stack interne ni un niveau de
          performance garanti pour un autre projet.
        </p>

        <GuideInlineCTA
          title="Parlons de votre projet"
          description="Décrivez votre besoin en 3 minutes : objectif de réponse personnelle le prochain jour ouvré, gratuite et sans engagement. Nous répondons nous-mêmes, il n'y a pas de service commercial intermédiaire."
        />
      </GuideLayout>
    </GuidesShell>
  );
}
