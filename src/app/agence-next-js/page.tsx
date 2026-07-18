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
    "Agence Next.js et React : sites, e-commerce et applications métier sur mesure. Lighthouse 95+ garanti par contrat, forfait fixe dès 6 900 €, code livré chez vous.",
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: "/agence-next-js" },
  openGraph: {
    ...OG_BASE,
    type: "website",
    title: "Agence Next.js — Hagnéré Code",
    description:
      "Développement Next.js et React sur mesure : sites, e-commerce, SaaS et applications métier. Performance garantie par contrat, forfait fixe, code à vous.",
    url: "/agence-next-js",
    images: [SERVICES_OG_IMAGE],
  },
  twitter: { images: [SERVICES_OG_IMAGE.url] },
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
      "Pour trois raisons concrètes, et une seule mauvaise. Les bonnes : la vitesse, parce qu'un site Next.js est pré-généré et n'interroge aucune base de données au moment de la visite ; la sécurité, parce qu'il n'y a ni PHP ni base exposée côté visiteurs, là où 91 % des failles WordPress viennent des extensions ; et la liberté de conception, parce que vous n'êtes plus limité par ce que le thème a prévu. La mauvaise raison, c'est la mode : si votre WordPress est récent, rapide et que votre équipe le maîtrise, changer ne vous apportera rien. Notre comparatif Next.js ou WordPress traite la question honnêtement, y compris les cas où WordPress reste le meilleur choix.",
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
      "Non, et c'est écrit au contrat. Le code vous appartient : cession des droits conforme à l'article L131-3 du Code de la propriété intellectuelle, dépôt sur un compte à votre nom dès le premier jour, nom de domaine enregistré au vôtre. C'est important parce qu'en droit français, payer une prestation ne rend pas automatiquement propriétaire du code. Techniquement, React et Next.js forment l'écosystème le plus répandu du développement web : n'importe quel développeur React reprend un projet propre, ce qui est souvent moins vrai d'un WordPress chargé d'extensions premium et d'un thème modifié à la main.",
  },
  {
    question: "Travaillez-vous partout en France ?",
    answer:
      "Oui. Nous sommes basés à Chambéry, en Savoie, et nous accompagnons des clients partout en France. Le développement web se conduit très bien à distance : cadrage et points d'étape en visioconférence, démonstrations en ligne à chaque livraison intermédiaire. Si vous êtes en Savoie ou en Haute-Savoie, nous nous déplaçons volontiers ; ailleurs, le cadre contractuel et les engagements sont strictement identiques. La proximité change le confort du premier rendez-vous, pas la qualité du résultat.",
  },
  {
    question: "Combien de temps prend un projet Next.js ?",
    answer:
      "Comptez 2 à 4 semaines pour un site vitrine, 6 à 10 semaines pour un site à contenu avec du référencement travaillé, 3 à 6 mois pour une boutique sur mesure ou une première version d'application métier. Une précision qui évite les malentendus : ces délais sont calendaires, pas des jours de travail. L'écart s'explique par vos validations et la fourniture de vos contenus — c'est d'ailleurs le premier facteur de retard sur les projets web. Nous jalonnons donc le planning avec des dates de validation convenues à l'avance.",
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
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>

      <GuideLayout
        breadcrumbs={[{ label: "Agence Next.js" }]}
        heroTitle="Agence Next.js : développement sur mesure, performance garantie"
        heroDescription="Nous développons en Next.js et React des sites, des boutiques en ligne et des applications métier. Forfait fixe contractuel, score Lighthouse mobile de 95 minimum garanti, code livré sur votre compte. Basés à Chambéry, nous travaillons partout en France."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel="Mis à jour le 18 juillet 2026"
        keyPoints={[
          { number: "01", title: "Lighthouse 95+ garanti par contrat", description: "", color: "violet" },
          { number: "02", title: "Forfait fixe dès 6 900 €", description: "", color: "blue" },
          { number: "03", title: "Code et domaine à votre nom", description: "", color: "emerald" },
          { number: "04", title: "Garantie 30 jours après mise en ligne", description: "", color: "amber" },
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
          l&apos;ensemble de nos projets. Cette page explique ce que nous
          construisons avec, ce que nous garantissons par écrit, ce que ça
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
            { id: "preuves", label: "3. Nos réalisations Next.js, chiffres à l'appui" },
            { id: "garanties", label: "4. Ce que nous garantissons par contrat" },
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
            ["Site vitrine et landing pages", "Site d'entreprise orienté conversion, blog, pages de référencement", "6 900 €", "2 à 4 semaines"],
            ["Site à contenu et référencement", "Blog structuré, guides, multilingue, CMS pour votre équipe", "14 900 €", "6 à 10 semaines"],
            ["Boutique en ligne sur mesure", "Catalogue, tunnel de commande, paiement, connexion à votre gestion", "15 000 €", "3 à 6 mois"],
            ["Application métier et logiciel en ligne", "Espace client, outil interne, automatisation de processus", "15 000 €", "3 à 6 mois"],
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

        <h2 id="preuves">3. Nos réalisations Next.js, chiffres à l&apos;appui</h2>
        <p>
          Deux projets en production, construits en Next.js 15, React 19 et
          TypeScript.
        </p>
        <GuideTable
          headers={["Projet", "Nature", "Résultats mesurés"]}
          rows={[
            ["Hagnéré Patrimoine", "Site éditorial premium + CRM interne pour un cabinet de gestion de patrimoine", "+340 % de trafic organique en 6 mois · 4,2 % de conversion en rendez-vous · pipeline commercial ×3"],
            ["Hagnéré Investissement", "Site de génération de leads pour un cabinet d'investissement immobilier", "×2,5 de leads qualifiés · coût par acquisition sous 80 € sur le segment principal"],
          ]}
        />
        <InfoBox variant="amber" title="Une transparence qui nous dessert, mais qui est due">
          <strong>Ces deux clients appartiennent au même groupe que
          nous.</strong> Nous préférons l&apos;écrire noir sur blanc plutôt que
          de laisser croire à des références décrochées en concurrence. Ce que
          cela ne change pas : les sites sont en production, les technologies
          sont vérifiables en ouvrant le code source, et les chiffres sont
          ceux que nous mesurons. Ce que cela change : vous êtes en droit de
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
          également deux logiciels de comptabilité fiscale en production, bâtis
          sur une autre technologie (Laravel) : nous ne les présentons pas ici,
          puisque cette page porte sur Next.js.
        </p>

        <GuideInlineCTA
          title="Un projet Next.js en tête ?"
          description="Décrivez-le en 3 minutes. Réponse personnelle sous 24 h ouvrées, gratuite et sans engagement — y compris si notre réponse est qu'une solution plus simple suffirait."
        />

        <h2 id="garanties">4. Ce que nous garantissons par contrat</h2>
        <p>
          Trois engagements écrits, les mêmes pour tous les projets.
        </p>
        <GuideTable
          headers={["Engagement", "Ce que ça signifie", "Comment vous le vérifiez"]}
          rows={[
            ["Score Lighthouse mobile de 95 minimum", "Performance mesurée à la livraison, corrections gratuites si le seuil n'est pas tenu", "Vous ouvrez PageSpeed Insights et vous regardez. Trente secondes, gratuit"],
            ["Forfait fixe contractuel", "Périmètre écrit, prix arrêté avant de commencer, aucun dépassement surprise", "Le devis signé fait foi ; tout ajout passe par un avenant chiffré"],
            ["Propriété du code et du domaine", "Cession des droits écrite (article L131-3 CPI), dépôt sur votre compte, domaine à votre nom", "Vous accédez au dépôt dès le premier jour du projet"],
            ["Garantie 30 jours", "Toute anomalie constatée dans le mois suivant la mise en ligne est corrigée sans supplément", "Aucune démarche : vous signalez, nous corrigeons"],
          ]}
        />
        <p>
          L&apos;engagement de performance mérite un mot. C&apos;est le plus
          rare du marché, et c&apos;est aussi le plus facile à vérifier :
          n&apos;importe qui peut tester n&apos;importe quel site en trente
          secondes. Un prestataire qui vend de la performance mais refuse
          d&apos;inscrire un chiffre au contrat vous dit quelque chose.
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
            ["Application métier / logiciel en ligne", "Première version réellement utilisable, livrée en 3 à 6 semaines", "Dès 15 000 €"],
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
          Pour les lecteurs techniques, voici ce que nous utilisons réellement
          en production.
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
          Le site que vous lisez est lui-même construit avec cette stack :
          vous pouvez le tester sur PageSpeed Insights, ouvrir son code source,
          et vérifier que nous appliquons ce que nous vendons.
        </p>

        <GuideInlineCTA
          title="Parlons de votre projet"
          description="Décrivez votre besoin en 3 minutes : réponse personnelle sous 24 h ouvrées, gratuite et sans engagement. Nous répondons nous-mêmes, il n'y a pas de service commercial intermédiaire."
        />
      </GuideLayout>
    </GuidesShell>
  );
}
