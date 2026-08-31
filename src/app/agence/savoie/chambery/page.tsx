import type { Metadata } from "next";
import { PRIMARY_ACTION_HREF, PRIMARY_ACTION_LABEL } from "@/lib/cta-labels";
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
import {
  formatLocalPageDate,
  getLocalPage,
  localPagePath,
  localPageUrl,
} from "@/lib/local-pages";
import {
  ORGANIZATION_ID,
  PUBLIC_ORGANIZATION_JSON_LD,
} from "@/lib/organization-structured-data";

const page = getLocalPage("agence", "savoie/chambery");

// Image sociale dédiée : les trois pages locales partageaient /og-image.png
// avec l'accueil et 25 autres URL — un partage LinkedIn de cette page affichait
// exactement la même vignette que la home.
const LOCAL_OG_IMAGE = {
  url: `${SITE_URL}/agence/savoie/chambery/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Hagnéré Code à Chambéry — développement web dans le bassin chambérien",
};

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: localPagePath(page) },
  openGraph: {
    ...OG_BASE,
    type: "website",
    title: page.title,
    description: page.metaDescription,
    url: localPagePath(page),
    images: [LOCAL_OG_IMAGE],
  },
  twitter: { images: [LOCAL_OG_IMAGE.url] },
};

// Même raison que sur /agence et /agence/savoie : sans ce nœud, le `provider`
// du Service reste un @id pendant, non résolu par Google, et la page ville
// n'émet aucun signal d'entreprise. L'@id est unique, l'adresse reste celle de
// Bassens : aucune adresse ni téléphone par ville n'est créé.
const organizationJsonLd = JSON.stringify(PUBLIC_ORGANIZATION_JSON_LD);

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de site internet et développement sur mesure à Chambéry",
  url: localPageUrl(page),
  serviceType:
    "Création de site internet, e-commerce, applications métier, référencement naturel et campagnes Google Ads",
  provider: { "@id": ORGANIZATION_ID },
  areaServed: { "@type": "City", name: "Chambéry" },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Notre agence", item: `${SITE_URL}/agence` },
    { "@type": "ListItem", position: 3, name: "Savoie", item: `${SITE_URL}/agence/savoie` },
    { "@type": "ListItem", position: 4, name: "Chambéry", item: localPageUrl(page) },
  ],
});

const faqItems = [
  {
    question: "Où êtes-vous à Chambéry et peut-on venir vous voir ?",
    answer:
      "Nous sommes au 82 impasse de Bellevue, 73000 Bassens — commune limitrophe de Chambéry, dans la même agglomération —, et oui, vous pouvez venir — sur rendez-vous, pour que quelqu'un soit là. C'est une adresse de travail, pas une domiciliation destinée à afficher un code postal savoyard. Beaucoup de dirigeants préfèrent rencontrer physiquement la personne à qui ils confient un budget à cinq chiffres avant de signer : c'est légitime, et c'est plus simple quand on est à quelques minutes l'un de l'autre. Si vous préférez la visioconférence, cela nous va aussi.",
  },
  {
    question: "Travaillez-vous avec les entreprises des zones de Bissy et des Landiers ?",
    answer:
      "Oui, ce sont nos voisines directes. Bissy-Erier est la plus vaste zone d'activité du bassin chambérien, avec 240 hectares, et elle accueille notamment Alpina Savoie, Cémoi, les Cafés Folliet, Routin et Placoplatre. Le secteur des Landiers, 123 hectares, concentre la grande distribution, des activités logistiques et les services administratifs de Grand Chambéry. Ce sont deux tissus très différents : d'un côté de l'agroalimentaire et de l'industrie avec des enjeux de catalogue produit et de relation aux distributeurs, de l'autre du commerce et des services avec des besoins de visibilité locale.",
  },
  {
    question: "Chambéry est une ville de services et d'administration. Cela change quoi pour un site ?",
    answer:
      "D'après le recensement 2023 de l'INSEE, 46,3 % de l'emploi chambérien relève du commerce, des transports et des services divers, et 38,9 % de l'administration, l'enseignement, la santé et l'action sociale. Pour une entreprise de services, un site doit souvent établir la crédibilité, expliquer une méthode et faciliter la prise de contact ; ce n'est toutefois pas une conclusion valable pour toutes les entreprises locales.",
  },
  {
    question: "Faites-vous des applications métier pour les entreprises chambériennes ?",
    answer:
      "Oui. Une application métier peut remplacer des tableurs, automatiser un processus ou proposer un espace client. Pour le bassin chambérien, les cas pertinents peuvent inclure le suivi de dossiers, la gestion de commandes ou un portail de services. Le périmètre et le budget sont établis après cadrage, puis inscrits au devis.",
  },
  {
    question: "Quel est le niveau technique des sites d'entreprises chambériennes ?",
    answer:
      "Il n'existe pas de score fiable pour l'ensemble des entreprises chambériennes. Un diagnostic utile mesure votre propre site sur plusieurs pages, distingue données de terrain et test de laboratoire, puis documente appareil, réseau et scripts tiers. Lighthouse seul ne prouve ni classement Google ni conversion.",
  },
  {
    question: "Combien coûte un site à Chambéry, et pourquoi affichez-vous vos prix ?",
    answer:
      "Un site vitrine sur mesure démarre chez nous à 6 900 € HT, avec des paliers à 14 900 € HT et 22 000 € HT et plus. Tous nos prix sont indiqués hors taxes, TVA 20 % en sus, pour une clientèle professionnelle. Nous les affichons comme des repères publics et indicatifs : le devis signé après cadrage fixe le prix ferme, au forfait fixe contractuel, et il ne bouge plus ensuite. Aucune des agences savoyardes dont nous avons consulté le site en juillet 2026 ne publie ses tarifs — ce n'est pas une faute de leur part, c'est un choix commercial différent. Le nôtre a un avantage pratique : il filtre les projets hors budget avant le premier rendez-vous, ce qui fait gagner du temps à tout le monde.",
  },
];


export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <GuideLayout
        breadcrumbs={[
          { label: "Notre agence", href: "/agence" },
          { label: "Savoie", href: "/agence/savoie" },
          { label: "Chambéry" },
        ]}
        heroTitle={page.heroTitle}
        heroAction={{ href: PRIMARY_ACTION_HREF, label: PRIMARY_ACTION_LABEL }}
        heroDescription="Nous travaillons à Bassens, commune limitrophe de Chambéry, à quelques minutes du centre. Cette page décrit l'économie chambérienne telle qu'elle est — tertiaire à plus de 80 %, avec une industrie concentrée sur Bissy et les Landiers — et le type de projet numérique qui a réellement du sens pour ces entreprises."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatLocalPageDate(page.dateModified)}`}
        keyPoints={[
          { number: "01", title: "À Bassens, limitrophe de Chambéry", description: "", color: "violet" },
          { number: "02", title: "85 % de l'emploi dans les services", description: "", color: "blue" },
          { number: "03", title: "Grand Chambéry : 38 communes", description: "", color: "emerald" },
          { number: "04", title: "Forfait fixe dès 6 900 € HT", description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/agence", label: "Notre agence" },
          { href: "/agence/savoie", label: "Notre territoire en Savoie" },
          { href: "/services/sites-vitrines", label: "Création de sites vitrines" },
          { href: "/services/saas-applications-metier", label: "SaaS et applications métier" },
          { href: "/agence-next-js", label: "Agence Next.js" },
          { href: "/services/referencement-google", label: "Référencement naturel" },
          { href: "/methode", label: "Notre méthode de cadrage" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Agence web à Chambéry : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Nous ne sommes pas une agence qui « couvre Chambéry » depuis
          Paris ou Lyon : <strong>nous sommes à Bassens, commune limitrophe,
          dans la même agglomération</strong>{" "}
          — à quelques minutes du centre.
          Cette page décrit l&apos;économie de la ville
          telle que les chiffres la montrent — très largement tertiaire —,
          les zones où se concentrent les entreprises, et les besoins
          numériques qu&apos;un cadrage peut y faire apparaître.
        </p>

        <GuideToc
          items={[
            { id: "economie", label: "1. L'économie chambérienne en chiffres" },
            { id: "employeurs", label: "2. Qui emploie à Chambéry" },
            { id: "zones", label: "3. Où sont les entreprises : Bissy, Landiers, Technolac" },
            { id: "besoins", label: "4. Ce dont les entreprises chambériennes ont besoin" },
            { id: "constat", label: "5. Comment mesurer votre site sans généraliser" },
            { id: "bassin", label: "6. Le bassin où nous pouvons intervenir" },
            { id: "ecosysteme", label: "7. L'écosystème numérique local" },
            { id: "concurrence", label: "8. Les autres agences du bassin" },
            { id: "travailler", label: "9. Travailler avec nous" },
          ]}
        />

        <h2 id="economie">1. L&apos;économie chambérienne en chiffres</h2>
        <p>
          Chambéry est une ville de services et d&apos;administration, et le
          recensement de l&apos;INSEE de 2023 le montre nettement.
        </p>
        <GuideTable
          headers={["Secteur", "Part de l'emploi chambérien", "Lecture"]}
          rows={[
            ["Commerce, transports, services divers", "46,3 %", "Le premier employeur de la ville, de loin"],
            ["Administration, enseignement, santé, action sociale", "38,9 %", "Préfecture, université, hôpital : le poids du public"],
            ["Industrie", "9,4 %", "Concentrée en périphérie, sur Bissy et les Landiers"],
            ["Construction", "5,0 %", "Tissu d'artisans et de PME du bâtiment"],
            ["Agriculture", "0,3 %", "Marginal dans la commune"],
          ]}
        />
        <p>
          Autrement dit, <strong>plus de huit emplois chambériens sur dix
          relèvent des services ou du secteur public</strong>. C&apos;est une
          information directement utile quand on construit un site : la
          majorité des entreprises de la ville vendent une prestation, pas un
          produit. Leur enjeu n&apos;est pas d&apos;afficher un catalogue,
          c&apos;est d&apos;établir leur crédibilité et de déclencher une
          prise de contact.
        </p>
        <p>
          À l&apos;échelle de l&apos;agglomération,{" "}
          <strong>Grand Chambéry regroupe 38 communes et plus de 146 000
          habitants</strong>{" "}
          sur 52 950 hectares. Le développement économique
          du territoire est porté par Chambéry-Grand Lac économie, syndicat
          mixte créé en 2017 avec l&apos;agglomération d&apos;Aix-les-Bains,
          qui met en avant cinq filières : énergies intelligentes,
          outdoor-santé-bien-être, numérique, ingénierie de la montagne et
          agroalimentaire.
        </p>

        <h2 id="employeurs">2. Qui emploie à Chambéry</h2>
        <p>
          Les grands employeurs du bassin sont d&apos;abord publics. Le{" "}
          <strong>Centre Hospitalier Métropole Savoie</strong>, né en 2015 de
          la fusion des hôpitaux de Chambéry et d&apos;Aix-les-Bains,
          rassemble environ 5 050 professionnels et 1 854 lits et places :
          c&apos;est le premier employeur du département. L&apos;
          <strong>Université Savoie Mont Blanc</strong>{" "}
          accueille près de
          4 950 étudiants sur son seul campus de Jacob-Bellecombette,
          limitrophe de la ville, où se trouvent la faculté de droit et
          l&apos;IAE. S&apos;y ajoutent la commune elle-même et le
          département, tous deux parmi les dix premiers employeurs savoyards.
        </p>
        <p>
          Côté privé, quelques maisons industrielles de renom sont nées et
          restent implantées ici. <strong>Opinel</strong>{" "}
          a son siège et son
          usine boulevard Henry Bordeaux, produit environ 6,5 millions de
          couteaux par an et a réalisé 34,9 millions d&apos;euros de chiffre
          d&apos;affaires en 2024, dont 45 % à l&apos;export.{" "}
          <strong>Alpina Savoie</strong>, la plus ancienne semoulerie-pastière
          française, fabrique ses pâtes et ses crozets sur le site de Bissy.{" "}
          <strong>La Maison Routin</strong>, fondée à Chambéry en 1883 et
          connue pour sa marque de sirops, produit désormais depuis La
          Motte-Servolex. Et le <strong>groupe Jean Lain</strong>, première
          entreprise savoyarde par le chiffre d&apos;affaires, a son siège sur
          les Landiers Ouest.
        </p>
        <InfoBox variant="blue" title="Ce que ce tissu implique pour un projet web">
          Un bassin dominé par le public et les services, avec quelques
          industriels exportateurs, produit deux types de demandes très
          différentes. D&apos;un côté des sites de prestataires, où tout se
          joue sur la clarté de l&apos;offre et la confiance. De
          l&apos;autre des besoins d&apos;outillage : espaces distributeurs,
          catalogues multilingues, connexions au logiciel de gestion.{" "}
          <strong>Ce sont deux métiers différents</strong>, et c&apos;est
          pourquoi nous commençons toujours par un cadrage plutôt que par un
          devis type.
        </InfoBox>

        <h2 id="zones">3. Où sont les entreprises : Bissy, Landiers, Technolac</h2>
        <p>
          Trois zones concentrent l&apos;essentiel de l&apos;activité
          économique du bassin, et elles n&apos;accueillent pas les mêmes
          entreprises.
        </p>
        <GuideTable
          headers={["Zone", "Surface", "Profil", "Entreprises citées par les sources officielles"]}
          rows={[
            ["Bissy-Erier", "240 hectares", "La plus vaste du bassin chambérien : agroalimentaire, industrie, logistique", "Alpina Savoie, Cémoi, Cafés Folliet, Routin, Placoplatre, La Poste"],
            ["Les Landiers", "123 hectares", "Grande distribution, transport, services administratifs de l'agglomération", "Carrefour, Castorama, Transports de Savoie, Grand Chambéry"],
            ["Savoie Technolac", "Technopôle sur La Motte-Servolex et Le Bourget-du-Lac", "Entreprises innovantes, recherche, énergie, enseignement supérieur", "INES, Centre d'ingénierie hydraulique d'EDF, Energy Pool, USMB, Polytech Annecy-Chambéry"],
          ]}
        />
        <p>
          Savoie Technolac mérite une mention particulière : créé en 1987 sur
          l&apos;ancienne base aérienne 725, c&apos;est le point de
          concentration des entreprises technologiques du département, avec
          une forte spécialisation dans les énergies. On y trouve
          l&apos;Institut national de l&apos;énergie solaire, environ 500
          collaborateurs sur 22 000 m², ainsi qu&apos;un incubateur. Si votre
          entreprise y est implantée, vos besoins ressemblent souvent
          davantage à ceux d&apos;une entreprise technologique — produit,
          application, portail — qu&apos;à ceux d&apos;un commerce de
          centre-ville.
        </p>

        <h2 id="besoins">4. Ce dont les entreprises chambériennes ont besoin</h2>
        <p>
          Trois familles de besoins sont particulièrement pertinentes au regard
          du tissu économique local, sans prétendre à un classement issu de clients.
        </p>
        <ul>
          <li>
            <strong>Un site qui inspire confiance et fait venir des
            clients.</strong>{" "}
            C&apos;est un besoin fréquent pour une ville de
            services : cabinets, conseil, professions libérales, artisans du
            bâtiment. Le sujet n&apos;est pas technique, il est éditorial et
            structurel — quelles pages, pour quelles recherches, avec quelle
            preuve. Notre page{" "}
            <Link href="/services/sites-vitrines">sites vitrines</Link>{" "}
            détaille cette prestation, à partir de 6 900 €.
          </li>
          <li>
            <strong>Un outil qui remplace des tableurs.</strong>{" "}
            Suivi de
            dossiers, gestion de commandes, portail client, planification :
            beaucoup d&apos;entreprises du bassin fonctionnent encore sur des
            fichiers partagés qui atteignent leurs limites. C&apos;est le
            terrain des{" "}
            <Link href="/services/saas-applications-metier">applications
            métier</Link>, à partir de 15 000 € pour une première version
            réellement utilisable.
          </li>
          <li>
            <strong>Être trouvé quand quelqu&apos;un cherche à proximité.</strong>{" "}
            Pour un commerce ou un artisan chambérien, l&apos;essentiel du
            trafic utile vient de recherches faites à quelques kilomètres.
            Cela se joue autant sur la fiche Google que sur le site lui-même,
            et cela demande moins de budget qu&apos;on ne l&apos;imagine.
            Voir notre page{" "}
            <Link href="/services/referencement-google">référencement
            naturel</Link>.
          </li>
        </ul>
        <p>
          Pour être plus concret, voici comment ces besoins se traduisent
          selon le type d&apos;entreprise chambérienne. Ce tableau ne
          remplace pas un cadrage, mais il donne un ordre d&apos;idée avant
          même de nous appeler.
        </p>
        <GuideTable
          headers={["Profil d'entreprise", "Le besoin réel", "Ce qu'on construit", "Ordre de budget (HT)"]}
          rows={[
            ["Cabinet de conseil, avocat, expert-comptable", "Être crédible avant le premier appel, et se différencier de confrères qui disent tous la même chose", "Site vitrine structuré par expertise, pages de contenu qui répondent aux vraies questions des clients", "6 900 – 14 900 €"],
            ["Artisan, entreprise du bâtiment", "Apparaître quand on cherche un professionnel à proximité, et montrer des chantiers", "Site rapide avec galerie de réalisations, fiche Google travaillée, pages par prestation et par zone", "6 900 € et fiche locale"],
            ["Commerce indépendant, restauration", "Être trouvé sur mobile, afficher les informations pratiques sans friction", "Site léger orienté mobile, informations pratiques en tête, réservation si utile", "6 900 €"],
            ["Producteur, domaine viticole, agroalimentaire", "Vendre en direct sans dépendre d'une plateforme qui prend une commission", "Boutique en ligne sur mesure, gestion des stocks, expédition", "15 000 € et plus"],
            ["PME industrielle ou de négoce", "Donner à ses clients professionnels un espace pour commander et retrouver la documentation", "Portail client, catalogue connecté au logiciel de gestion, espace distributeurs", "15 000 – 40 000 €"],
            ["Cabinet ou structure qui gère des dossiers", "Sortir des tableurs partagés qui ont atteint leurs limites", "Application métier sur mesure, suivi de dossiers, automatisation", "15 000 € et plus"],
            ["Startup du technopôle", "Sortir une première version utilisable et la faire tester", "Produit en ligne, première version fonctionnelle, itérations rapides", "15 000 € et plus"],
          ]}
        />
        <p>
          Ces ordres de budget sont indiqués hors taxes, TVA 20 % en sus, pour
          une clientèle professionnelle : ce sont des repères publics et
          indicatifs, et le devis signé après cadrage fixe le prix ferme. Ce
          tableau présente des scénarios de besoin, pas la distribution de nos
          demandes ni une étude représentative du bassin. Le bon périmètre dépend
          de vos usages, de l&apos;existant, du budget et des contraintes ; une
          solution standard peut être préférable au sur-mesure.
        </p>

        <GuideInlineCTA
          title="Un projet à Chambéry ?"
          description="Décrivez-le en 3 minutes. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti. Cette première réponse est gratuite et sans engagement. On peut se voir à Bassens, à quelques minutes du centre de Chambéry, ou en visioconférence."
        />

        <h2 id="constat">5. Comment mesurer votre site sans généraliser</h2>
        <p>
          Une moyenne locale non reproductible ne permet pas de décider d&apos;une
          refonte. Il faut mesurer votre propre site sur les pages importantes,
          avec le même protocole avant et après une modification.
        </p>
        <p>
          Le contrôle doit distinguer les Core Web Vitals de terrain, le test
          Lighthouse de laboratoire, l&apos;indexation, les formulaires et les
          conversions effectivement reçues.
        </p>
        <InfoBox variant="amber" title="Ce qu&apos;un score ne prouve pas">
          Un résultat Lighthouse varie avec la page, l&apos;appareil, le réseau,
          la charge et les scripts tiers. Il ne démontre ni une position dans
          Google, ni un taux de conversion, ni la qualité éditoriale du site.
        </InfoBox>
        <p>
          Vous pouvez lancer PageSpeed Insights gratuitement, puis comparer
          les résultats avec les données de terrain. Si un objectif de performance
          est contractualisé, le devis doit préciser pages, conditions, seuils,
          responsabilités et procédure de correction.
        </p>

        <h2 id="bassin">6. Le bassin où nous pouvons intervenir</h2>
        <p>
          Nous sommes à Bassens, l&apos;une des 38 communes de Grand
          Chambéry. Une intervention peut être prévue dans les autres communes
          du bassin lorsque le projet et le devis le justifient, notamment :{" "}
          <strong>Chambéry, La Motte-Servolex, La Ravoire, Cognin,
          Barberaz, Saint-Alban-Leysse, Barby, Jacob-Bellecombette,
          Challes-les-Eaux</strong>. Aix-les-Bains, Le Bourget-du-Lac et la
          Combe de Savoie sont également accessibles sur rendez-vous ; le reste
          du projet peut être conduit à distance.
        </p>
        <InfoBox variant="blue" title="Une précision sur laquelle beaucoup se trompent">
          <strong>Aix-les-Bains et Le Bourget-du-Lac ne font pas partie de
          Grand Chambéry</strong> : ces deux communes relèvent de la
          communauté d&apos;agglomération Grand Lac. De même, Montmélian et
          Porte-de-Savoie appartiennent à Cœur de Savoie. Ce sont des détails
          administratifs, mais ils comptent : ils distinguent une page écrite
          depuis le territoire d&apos;une page écrite depuis un tableur.
        </InfoBox>
        <p>
          Concrètement, voici les distances depuis notre bureau. Elles
          expliquent mieux qu&apos;un discours pourquoi nous nous déplaçons
          volontiers dans ce périmètre.
        </p>
        <GuideTable
          headers={["Commune", "Intercommunalité", "Distance", "Trajet"]}
          rows={[
            ["Barberaz", "Grand Chambéry", "environ 4 km", "7 à 8 min"],
            ["Cognin", "Grand Chambéry", "environ 4 à 5 km", "7 à 8 min"],
            ["Saint-Alban-Leysse", "Grand Chambéry", "5,7 km", "9 min"],
            ["La Motte-Servolex", "Grand Chambéry", "6,1 km", "7 min"],
            ["La Ravoire", "Grand Chambéry", "7,8 km", "9 min"],
            ["Challes-les-Eaux", "Grand Chambéry", "9,1 km", "10 min"],
            ["Le Bourget-du-Lac (Savoie Technolac)", "Grand Lac", "environ 13 km", "10 à 15 min"],
            ["Montmélian", "Cœur de Savoie", "environ 11 km", "15 min"],
            ["Aix-les-Bains", "Grand Lac", "15,8 km", "20 min"],
          ]}
        />
        <p>
          Ce que cela veut dire en pratique : sur tout ce périmètre, un
          rendez-vous d&apos;une heure ne mobilise pas une demi-journée. Nous
          venons donc pour le cadrage initial, pour la présentation des
          maquettes, et à chaque fois qu&apos;un point bloque et se règle
          mieux autour d&apos;une table. Au-delà — Albertville, Annecy,
          Annemasse — nous nous déplaçons pour les étapes qui le justifient
          et conduisons le reste à distance.
        </p>

        <h2 id="ecosysteme">7. L&apos;écosystème numérique local</h2>
        <p>
          Chambéry a une vie numérique organisée, ce que beaucoup
          d&apos;entrepreneurs du bassin ignorent encore. Trois structures
          comptent si votre projet est un produit plutôt qu&apos;un site.
        </p>
        <ul>
          <li>
            <strong>L&apos;Incubateur Savoie Technolac</strong>, sur le
            technopôle, est le bâtiment totem de La French Tech
            Alpes-Chambéry. Il propose de l&apos;accompagnement, du coaching
            et de l&apos;hébergement en pépinière sur environ 800 m²
            d&apos;espaces de travail, et opère le programme French Tech
            Tremplin. Si vous lancez un produit numérique, c&apos;est le
            premier endroit où frapper — avant de payer un développeur.
          </li>
          <li>
            <strong>La French Tech Alpes-Chambéry</strong>{" "}
            fédère les
            entreprises technologiques du bassin. C&apos;est aussi le réseau
            par lequel circulent les recommandations de prestataires : dans un
            écosystème de cette taille, la réputation se construit en réunion
            autant qu&apos;en ligne.
          </li>
          <li>
            <strong>La pépinière IDÉALPES</strong>, sur le parc Alpespace en
            Combe de Savoie, accompagne des entreprises sur des filières plus
            industrielles : microélectronique, agroalimentaire, aménagement de
            la montagne, métallurgie, environnement.
          </li>
        </ul>
        <p>
          Nous le mentionnons parce que c&apos;est une information utile même
          si vous ne travaillez jamais avec nous : beaucoup de porteurs de
          projet chambériens paient un développement qu&apos;ils auraient pu
          faire cadrer gratuitement en amont, ou financer autrement.
        </p>

        <h2 id="concurrence">8. Les autres agences du bassin</h2>
        <p>
          Chambéry compte des agences installées de longue date, dont
          plusieurs existent depuis la fin des années 1990 ou le début des
          années 2000, avec des références clients nommées et vérifiables.
          Nous n&apos;allons pas prétendre le contraire.
        </p>
        <p>
          Deux différences factuelles expliquent néanmoins notre existence.
          La première : ce sont majoritairement des{" "}
          <strong>agences de communication généralistes</strong>, qui
          couvrent l&apos;identité visuelle, le print, les réseaux sociaux et
          la vidéo, avec le site web parmi le reste. Nous faisons du
          développement : c&apos;est un autre métier, plus étroit et plus
          profond. La seconde : en consultant en juillet 2026 les sites
          des agences du bassin que nous avons pu identifier, nous
          n&apos;avons trouvé{" "}
          <strong>aucune d&apos;entre elles affichant une stack React, Next.js
          ou TypeScript</strong>, ni aucune publiant ses tarifs.
        </p>
        <p>
          Ce n&apos;est pas un jugement : WordPress fait tourner une grande
          partie du web et convient à beaucoup de projets. Notre page{" "}
          <Link href="/services/sites-vitrines">sites vitrines</Link> explique
          le type de besoin que nous traitons et les cas où une solution plus
          simple suffit. Notre <Link href="/methode">méthode</Link>{" "}
          décrit les
          contrôles que vous pouvez appliquer à nos propositions comme à celles
          de n&apos;importe quel prestataire.
        </p>

        <h2 id="travailler">9. Travailler avec nous</h2>
        <p>
          Trois points à préciser dans le devis.{" "}
          <strong>Un forfait fixe contractuel</strong> : périmètre écrit, prix
          arrêté avant de commencer, aucun dépassement surprise.{" "}
          <strong>Une performance mesurable</strong> : protocole et seuils adaptés
          aux pages et aux scripts tiers.{" "}
          <strong>Des droits et une réversibilité explicites</strong> : transfert
          des livrables spécifiques après paiement selon les CGV, dépôt, accès,
          domaine, exclusions et licences inventoriés.
        </p>
        <p>
          Le format de cadrage, son prix, ses livrables et toute remise éventuelle
          sont précisés avant engagement. Notre{" "}
          <Link href="/methode">page méthode</Link> détaille le déroulé, et
          nos <Link href="/tarifs">tarifs</Link> sont publics. Ce cadrage peut
          conclure « votre site actuel suffit, voici les trois choses à
          corriger » lorsque les preuves ne justifient pas une refonte.
        </p>

        <GuideInlineCTA
          title="Parlons de votre projet chambérien"
          description="Décrivez votre besoin en 3 minutes : objectif de réponse personnelle le prochain jour ouvré, gratuite et sans engagement. Rendez-vous à Bassens, aux portes de Chambéry, ou en visioconférence, comme vous préférez."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Répartition de l&apos;emploi :{" "}
          <a href="https://www.insee.fr/fr/statistiques/2011101?geo=COM-73065" target="_blank" rel="noopener noreferrer">INSEE, dossier complet de la commune de Chambéry, recensement 2023</a>.
          Périmètre et population de l&apos;agglomération :{" "}
          <a href="https://www.grandchambery.fr/lagglomeration/services-et-missions/presentation-du-territoire" target="_blank" rel="noopener noreferrer">Grand Chambéry</a>.
          Zones d&apos;activité :{" "}
          <a href="https://synchro.grandchambery.fr/espace-pro/zones-d-activites-de-bissy-erier/" target="_blank" rel="noopener noreferrer">Grand Chambéry, zone de Bissy-Erier</a>{" "}
          et fiches des parcs d&apos;activité de{" "}
          <a href="https://www.chambery-grandlac.fr/parc-activite/bissy-erier/" target="_blank" rel="noopener noreferrer">Chambéry-Grand Lac économie</a>.
          Centre Hospitalier Métropole Savoie :{" "}
          <a href="https://www.ch-metropole-savoie.fr/4998-carte-identite-chms.htm" target="_blank" rel="noopener noreferrer">CHMS</a>.
          Opinel :{" "}
          <a href="https://www.opinel.com/fr-fr/societe/infos-corporate" target="_blank" rel="noopener noreferrer">informations corporate publiées par l&apos;entreprise</a>.
          Institut national de l&apos;énergie solaire :{" "}
          <a href="https://www.ines-solaire.org/decouvrir-ines/" target="_blank" rel="noopener noreferrer">INES</a>.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
