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
import { OG_BASE, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { getLocalPage, localPagePath, localPageUrl } from "@/lib/local-pages";

const page = getLocalPage("agence", "savoie/chambery");

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
    images: [DEFAULT_OG_IMAGE],
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

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de site internet et développement sur mesure à Chambéry",
  url: localPageUrl(page),
  serviceType:
    "Création de site internet, e-commerce, applications métier, référencement naturel et campagnes Google Ads",
  provider: { "@id": `${SITE_URL}/#business` },
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
      "Nous sommes au 82 impasse de Bellevue, à Bassens — commune limitrophe de Chambéry, dans la même agglomération —, et oui, vous pouvez venir — sur rendez-vous, pour que quelqu'un soit là. C'est une adresse de travail, pas une domiciliation destinée à afficher un code postal savoyard. Beaucoup de dirigeants préfèrent rencontrer physiquement la personne à qui ils confient un budget à cinq chiffres avant de signer : c'est légitime, et c'est plus simple quand on est à quelques minutes l'un de l'autre. Si vous préférez la visioconférence, cela nous va aussi.",
  },
  {
    question: "Travaillez-vous avec les entreprises des zones de Bissy et des Landiers ?",
    answer:
      "Oui, ce sont nos voisines directes. Bissy-Erier est la plus vaste zone d'activité du bassin chambérien, avec 240 hectares, et elle accueille notamment Alpina Savoie, Cémoi, les Cafés Folliet, Routin et Placoplatre. Le secteur des Landiers, 123 hectares, concentre la grande distribution, des activités logistiques et les services administratifs de Grand Chambéry. Ce sont deux tissus très différents : d'un côté de l'agroalimentaire et de l'industrie avec des enjeux de catalogue produit et de relation aux distributeurs, de l'autre du commerce et des services avec des besoins de visibilité locale.",
  },
  {
    question: "Chambéry est une ville de services et d'administration. Cela change quoi pour un site ?",
    answer:
      "Beaucoup. D'après le recensement 2023 de l'INSEE, 46,3 % de l'emploi chambérien relève du commerce, des transports et des services divers, et 38,9 % de l'administration, l'enseignement, la santé et l'action sociale — soit plus de huit emplois sur dix dans les services. Concrètement, la majorité de nos interlocuteurs chambériens vendent une prestation, pas un produit. Leur site n'a donc pas à gérer un catalogue : il doit établir la crédibilité, expliquer une méthode, et déclencher une prise de contact. C'est un travail de structure et de rédaction bien plus que de fonctionnalités.",
  },
  {
    question: "Faites-vous des applications métier pour les entreprises chambériennes ?",
    answer:
      "C'est une part importante de notre activité, et c'est ce qui nous distingue le plus des agences de communication du bassin. Une application métier, c'est un outil qui remplace des tableurs, automatise un processus ou donne un espace à vos clients. Les besoins typiques que nous rencontrons localement : suivi de dossiers pour les cabinets de conseil et professions libérales, gestion de commandes pour les acteurs de l'agroalimentaire, portails de suivi pour les entreprises de services. Le budget démarre à 15 000 € pour une première version réellement utilisable, et le détail est sur notre page dédiée.",
  },
  {
    question: "Quel est le niveau technique des sites d'entreprises chambériennes ?",
    answer:
      "Nous l'avons mesuré plutôt que de l'affirmer. En juillet 2026, nous avons passé neuf sites d'entreprises et commerces indépendants de Chambéry, Aix-les-Bains et du bassin d'Albertville dans Lighthouse, l'outil de mesure de Google, en configuration mobile. Aucun n'atteignait 90 sur 100 en performance, et la médiane se situait autour de 55 à 60. Précision d'honnêteté : neuf sites, c'est un sondage et non un échantillon représentatif, et ces mesures varient fortement d'un passage à l'autre — nous ne publions donc ni les noms ni les scores individuels. Ce qui reste solide, c'est l'ordre de grandeur.",
  },
  {
    question: "Combien coûte un site à Chambéry, et pourquoi affichez-vous vos prix ?",
    answer:
      "Un site vitrine sur mesure démarre chez nous à 6 900 €, avec des paliers à 14 900 € et 22 000 € et plus. Nous les affichons parce que nous travaillons au forfait fixe contractuel : le prix est arrêté avant de commencer et ne bouge pas. Aucune des agences savoyardes dont nous avons consulté le site en juillet 2026 ne publie ses tarifs — ce n'est pas une faute de leur part, c'est un choix commercial différent. Le nôtre a un avantage pratique : il filtre les projets hors budget avant le premier rendez-vous, ce qui fait gagner du temps à tout le monde.",
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
        breadcrumbs={[
          { label: "Notre agence", href: "/agence" },
          { label: "Savoie", href: "/agence/savoie" },
          { label: "Chambéry" },
        ]}
        heroTitle={page.heroTitle}
        heroDescription="Nous travaillons à Bassens, commune limitrophe de Chambéry, à quelques minutes du centre. Cette page décrit l'économie chambérienne telle qu'elle est — tertiaire à plus de 80 %, avec une industrie concentrée sur Bissy et les Landiers — et le type de projet numérique qui a réellement du sens pour ces entreprises."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel="Mis à jour le 18 juillet 2026"
        keyPoints={[
          { number: "01", title: "À Bassens, limitrophe de Chambéry", description: "", color: "violet" },
          { number: "02", title: "85 % de l'emploi dans les services", description: "", color: "blue" },
          { number: "03", title: "Grand Chambéry : 38 communes", description: "", color: "emerald" },
          { number: "04", title: "Forfait fixe dès 6 900 €", description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/agence/savoie", label: "Notre territoire en Savoie" },
          { href: "/services/sites-vitrines", label: "Création de sites vitrines" },
          { href: "/services/saas-applications-metier", label: "SaaS et applications métier" },
          { href: "/services/referencement-google", label: "Référencement naturel" },
          { href: "/guides/choisir-son-agence-web", label: "Comment choisir son agence web" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Agence web à Chambéry : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Nous ne sommes pas une agence qui « couvre Chambéry » depuis
          Paris ou Lyon : <strong>nous sommes à Bassens, commune limitrophe,
          dans la même agglomération</strong> — à quelques minutes du centre.
          Cette page décrit l&apos;économie de la ville
          telle que les chiffres la montrent — très largement tertiaire —,
          les zones où se concentrent les entreprises, et ce que ces
          entreprises achètent réellement en matière de numérique.
        </p>

        <GuideToc
          items={[
            { id: "economie", label: "1. L'économie chambérienne en chiffres" },
            { id: "employeurs", label: "2. Qui emploie à Chambéry" },
            { id: "zones", label: "3. Où sont les entreprises : Bissy, Landiers, Technolac" },
            { id: "besoins", label: "4. Ce dont les entreprises chambériennes ont besoin" },
            { id: "constat", label: "5. Ce que nous avons mesuré sur les sites du bassin" },
            { id: "bassin", label: "6. Le bassin que nous couvrons au quotidien" },
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
          habitants</strong> sur 52 950 hectares. Le développement économique
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
          <strong>Université Savoie Mont Blanc</strong> accueille près de
          4 950 étudiants sur son seul campus de Jacob-Bellecombette,
          limitrophe de la ville, où se trouvent la faculté de droit et
          l&apos;IAE. S&apos;y ajoutent la commune elle-même et le
          département, tous deux parmi les dix premiers employeurs savoyards.
        </p>
        <p>
          Côté privé, quelques maisons industrielles de renom sont nées et
          restent implantées ici. <strong>Opinel</strong> a son siège et son
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
          De ce que nous observons localement, trois demandes reviennent, par
          ordre de fréquence.
        </p>
        <ul>
          <li>
            <strong>Un site qui inspire confiance et fait venir des
            clients.</strong> C&apos;est le besoin dominant dans une ville de
            services : cabinets, conseil, professions libérales, artisans du
            bâtiment. Le sujet n&apos;est pas technique, il est éditorial et
            structurel — quelles pages, pour quelles recherches, avec quelle
            preuve. Notre page{" "}
            <Link href="/services/sites-vitrines">sites vitrines</Link>{" "}
            détaille cette prestation, à partir de 6 900 €.
          </li>
          <li>
            <strong>Un outil qui remplace des tableurs.</strong> Suivi de
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
          headers={["Profil d'entreprise", "Le besoin réel", "Ce qu'on construit", "Ordre de budget"]}
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
          Une remarque d&apos;honnêteté sur ce tableau : les trois premières
          lignes représentent l&apos;écrasante majorité des demandes que nous
          recevons localement, ce qui est logique dans un bassin où près de
          deux tiers des établissements n&apos;ont aucun salarié. Les lignes
          suivantes concernent moins d&apos;entreprises, mais ce sont les
          projets où le sur-mesure change réellement quelque chose — et où
          une agence de communication généraliste atteint vite ses limites.
        </p>

        <GuideInlineCTA
          title="Un projet à Chambéry ?"
          description="Décrivez-le en 3 minutes. Réponse personnelle sous 24 h ouvrées, gratuite et sans engagement. On peut se voir à Bassens, à quelques minutes du centre de Chambéry, ou en visioconférence."
        />

        <h2 id="constat">5. Ce que nous avons mesuré sur les sites du bassin</h2>
        <p>
          Plutôt que d&apos;affirmer que les entreprises locales ont « besoin
          de se digitaliser », nous avons mesuré. En juillet 2026, nous avons
          passé <strong>neuf sites d&apos;entreprises et de commerces
          indépendants</strong> de Chambéry, Aix-les-Bains et du bassin
          d&apos;Albertville dans Lighthouse, l&apos;outil de mesure de
          Google, en configuration mobile.
        </p>
        <p>
          Résultat : <strong>aucun des neuf n&apos;atteignait 90 sur 100 en
          performance</strong>, et la médiane se situait autour de 55 à 60.
          Sur plusieurs d&apos;entre eux, l&apos;affichage du contenu
          principal dépassait dix secondes en réseau mobile dégradé, avec des
          pages pesant plus de deux méga-octets.
        </p>
        <InfoBox variant="amber" title="Ce que vaut — et ne vaut pas — cette mesure">
          Neuf sites, c&apos;est un sondage, pas un échantillon représentatif
          du bassin. Nous avons retenu des entreprises indépendantes (hôtels,
          artisans, commerces) et écarté les chaînes nationales, dont les
          sites sont pilotés par un siège. Nous avons aussi constaté que{" "}
          <strong>ces mesures varient fortement d&apos;un passage à
          l&apos;autre</strong> : sur trois sites retestés, l&apos;écart
          atteignait dix-huit points. C&apos;est pourquoi nous ne publions ni
          les noms, ni les scores individuels — ce serait instable et déloyal
          envers des entreprises voisines. Ce qui reste solide, c&apos;est
          l&apos;ordre de grandeur.
        </InfoBox>
        <p>
          Vous pouvez faire ce test vous-même, gratuitement et en trente
          secondes, sur PageSpeed Insights : tapez l&apos;adresse de votre
          site et regardez l&apos;onglet mobile. C&apos;est aussi la raison
          pour laquelle nous inscrivons un score d&apos;au moins 95 sur 100
          dans nos contrats : c&apos;est un engagement que vous pouvez
          vérifier sans nous croire sur parole.
        </p>

        <h2 id="bassin">6. Le bassin que nous couvrons au quotidien</h2>
        <p>
          Nous sommes à Bassens, l&apos;une des 38 communes de Grand
          Chambéry, et nous intervenons sans difficulté sur toutes les
          autres :{" "}
          <strong>Chambéry, La Motte-Servolex, La Ravoire, Cognin,
          Barberaz, Saint-Alban-Leysse, Barby, Jacob-Bellecombette,
          Challes-les-Eaux</strong> et les suivantes. Nous nous déplaçons
          également régulièrement sur Aix-les-Bains, Le Bourget-du-Lac et la
          Combe de Savoie.
        </p>
        <InfoBox variant="blue" title="Une précision que beaucoup se trompent">
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
            <strong>La French Tech Alpes-Chambéry</strong> fédère les
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
          profond. La seconde : en consultant leurs sites en juillet 2026,
          nous n&apos;avons trouvé{" "}
          <strong>aucune agence savoyarde affichant une stack React, Next.js
          ou TypeScript</strong>, ni aucune publiant ses tarifs.
        </p>
        <p>
          Ce n&apos;est pas un jugement : WordPress fait tourner une grande
          partie du web et convient à beaucoup de projets. Notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">comparatif Next.js ou
          WordPress</Link> traite la question honnêtement, y compris les cas
          où WordPress reste le meilleur choix. Et si vous voulez vérifier
          nos affirmations comme celles de n&apos;importe quel prestataire,
          notre{" "}
          <Link href="/guides/choisir-son-agence-web">guide pour choisir son
          agence web</Link> donne dix-huit vérifications gratuites,
          applicables à nous aussi.
        </p>

        <h2 id="travailler">9. Travailler avec nous</h2>
        <p>
          Trois engagements, identiques pour tous nos clients.{" "}
          <strong>Un forfait fixe contractuel</strong> : périmètre écrit, prix
          arrêté avant de commencer, aucun dépassement surprise.{" "}
          <strong>Une performance garantie</strong> : score Lighthouse mobile
          d&apos;au moins 95 à la livraison, corrections gratuites sinon.{" "}
          <strong>Le code vous appartient</strong> : cession des droits
          écrite, dépôt sur un compte à votre nom, domaine enregistré au
          vôtre.
        </p>
        <p>
          Les projets démarrent généralement par un Discovery Sprint de deux
          jours à 1 500 €, intégralement déduits si le projet se lance. Notre{" "}
          <Link href="/methode">page méthode</Link> détaille le déroulé, et
          nos <Link href="/tarifs">tarifs</Link> sont publics. Il arrive que
          ce cadrage se conclue par « votre site actuel suffit, voici les
          trois choses à corriger » — c&apos;est déjà arrivé, et c&apos;est
          très bien ainsi.
        </p>

        <GuideInlineCTA
          title="Parlons de votre projet chambérien"
          description="Décrivez votre besoin en 3 minutes : réponse personnelle sous 24 h ouvrées, gratuite et sans engagement. Rendez-vous à Bassens, aux portes de Chambéry, ou en visioconférence, comme vous préférez."
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
          Mesures de performance : relevés Lighthouse en configuration mobile
          réalisés le 18 juillet 2026 sur neuf sites d&apos;entreprises
          indépendantes du bassin ; méthodologie et limites décrites en
          section 5.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
