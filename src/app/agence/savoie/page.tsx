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
import {
  formatLocalPageDate,
  getLocalPage,
  localPagePath,
  localPageUrl,
} from "@/lib/local-pages";
import { PUBLISHED_GUIDES } from "@/lib/guides";

const page = getLocalPage("agence", "savoie");

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
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de sites internet et développement sur mesure en Savoie",
  url: localPageUrl(page),
  serviceType:
    "Création de site internet, e-commerce, applications métier, référencement naturel et campagnes Google Ads",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "AdministrativeArea", name: "Savoie" },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Notre agence", item: `${SITE_URL}/agence` },
    { "@type": "ListItem", position: 3, name: "Savoie", item: localPageUrl(page) },
  ],
});

const faqItems = [
  {
    question: "Intervenez-vous partout en Savoie, y compris en montagne ?",
    answer:
      "Oui. Le bassin chambérien et le tour du lac du Bourget sont à notre porte. Une intervention sur site est possible à Albertville, dans la Combe de Savoie, l'Avant-pays, la Tarentaise ou la Maurienne lorsque le devis le prévoit ; le reste du projet peut être conduit à distance. Pour les acteurs du tourisme, le calendrier de cadrage et de validation doit tenir compte de la saisonnalité et est confirmé avant engagement.",
  },
  {
    question: "Le tourisme représente une grosse part de l'activité savoyarde. Vous y connaissez-vous ?",
    answer:
      "Le poids du tourisme est mesurable : 37,1 % des logements du département sont des résidences secondaires selon le recensement 2023 de l'INSEE, une proportion qui dit à quel point l'économie locale est saisonnière. Sur le plan technique, cela crée des besoins particuliers : des pics de trafic très concentrés, des sites multilingues, des connexions à des logiciels de réservation, et une exigence de vitesse d'affichage forte puisqu'une grande partie des visiteurs consulte depuis un mobile en itinérance. Ce sont des sujets de développement classiques, mais qui se traitent mal avec un site monté sur un assemblage d'extensions.",
  },
  {
    question: "Travaillez-vous avec des industriels ?",
    answer:
      "Oui. L'industrie savoyarde est concentrée sur plusieurs pôles — Ugine avec la métallurgie, Saint-Jean-de-Maurienne avec l'aluminium, la Combe de Savoie avec le parc Alpespace. Les outils internes, portails clients ou distributeurs et connexions entre logiciels de gestion et web correspondent au périmètre de notre offre d'applications métier ; leur faisabilité dépend toutefois de l'audit des systèmes et contraintes du projet.",
  },
  {
    question: "Quel budget prévoir pour un site d'entreprise en Savoie ?",
    answer:
      "Nos forfaits démarrent à 6 900 € pour un site vitrine sur mesure, 14 900 € pour un site avec blog et référencement travaillé, 22 000 € et plus pour du multilingue ou des fonctionnalités avancées. Une boutique en ligne sur mesure va de 15 000 à 120 000 €. Les abonnements et offres d'entrée de gamme peuvent répondre à d'autres besoins : avant de comparer, vérifiez dans chaque contrat la propriété des livrables, l'accès au code et aux comptes, les possibilités d'export, les coûts récurrents et les conditions de sortie. Nos guides sur les prix détaillent ce que recouvre chaque niveau de budget.",
  },
  {
    question: "Pourquoi choisir une agence savoyarde plutôt qu'une agence parisienne ou lyonnaise ?",
    answer:
      "Franchement, pas pour la qualité technique : le développement web se fait très bien à distance, et il existe d'excellentes agences partout. Ce que la proximité apporte concrètement, c'est la facilité du premier rendez-vous, la connaissance du tissu local, et le fait de pouvoir venir sur place quand un projet coince. Ce qu'elle n'apporte pas, c'est une garantie de compétence — c'est pourquoi nous publions nos tarifs, nos engagements de performance et notre méthode : jugez sur pièces, pas sur le code postal.",
  },
  {
    question: "Faites-vous du référencement pour des entreprises savoyardes déjà en ligne ?",
    answer:
      "Oui. Un audit préalable permet de distinguer un problème de référencement d'un problème de vitesse, de structure, de mesure ou d'adéquation avec les recherches des clients. Il peut conclure à des corrections ciblées, à une refonte ou à l'absence d'intérêt d'une mission SEO ; aucun gain ni position n'est garanti. Une campagne Google Ads peut aussi être étudiée lorsque le besoin de visibilité est immédiat.",
  },
];


export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <GuideLayout
        breadcrumbs={[
          { label: "Notre agence", href: "/agence" },
          { label: "Savoie" },
        ]}
        heroTitle={page.heroTitle}
        heroDescription="La Savoie n'est pas un marché homogène : le bassin chambérien, le lac du Bourget, la Tarentaise, la Maurienne et la Combe de Savoie n'ont ni les mêmes entreprises, ni les mêmes besoins numériques. Cette page décrit ces six territoires et ce qu'ils achètent réellement."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatLocalPageDate(page.dateModified)}`}
        keyPoints={[
          { number: "01", title: "448 226 habitants, 205 398 emplois", description: "", color: "violet" },
          { number: "02", title: "60 971 établissements actifs", description: "", color: "blue" },
          { number: "03", title: "6 territoires, 6 économies", description: "", color: "emerald" },
          { number: "04", title: "Agence basée à Bassens", description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/agence", label: "Notre agence" },
          { href: "/services/sites-vitrines", label: "Création de sites vitrines" },
          { href: "/services/saas-applications-metier", label: "SaaS et applications métier" },
          { href: "/services/referencement-google", label: "Référencement naturel" },
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Développement web en Savoie : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          On parle de « la Savoie » comme d&apos;un marché unique. C&apos;est
          une erreur de lecture : <strong>un décolleteur de la Combe, un
          hôtelier de Tarentaise et un cabinet de conseil chambérien
          n&apos;achètent pas du tout la même chose</strong>. Cette page
          décrit les six territoires du département, ce qu&apos;ils pèsent,
          et le type de projet numérique qui a réellement du sens pour
          chacun.
        </p>

        <GuideToc
          items={[
            { id: "chiffres", label: "1. La Savoie en chiffres" },
            { id: "six-territoires", label: "2. Six territoires, six économies" },
            { id: "qui-emploie", label: "3. Qui emploie vraiment en Savoie" },
            { id: "poles", label: "4. Les pôles structurants" },
            { id: "besoins", label: "5. Ce dont ces entreprises ont besoin" },
            { id: "saisonnalite", label: "6. La saisonnalité, ce que personne ne chiffre" },
            { id: "notre-place", label: "7. Où nous nous situons" },
            { id: "guides", label: "8. Nos guides pour préparer votre projet" },
          ]}
        />

        <h2 id="chiffres">1. La Savoie en chiffres</h2>
        <p>
          Quelques repères, tous issus du recensement de l&apos;INSEE, pour
          situer le département avant d&apos;entrer dans le détail.
        </p>
        <GuideTable
          headers={["Indicateur", "Valeur", "Année"]}
          rows={[
            ["Population municipale", "448 226 habitants", "2023"],
            ["Densité", "74,4 habitants/km²", "2023"],
            ["Emplois au lieu de travail", "205 398", "2023"],
            ["Taux de chômage (au sens du recensement)", "7,5 %", "2023"],
            ["Revenu médian disponible", "27 910 €", "2023"],
            ["Part de résidences secondaires dans le parc de logements", "37,1 %", "2023"],
            ["Établissements actifs (tous, y compris sans salarié)", "60 971", "fin 2023"],
            ["Établissements employeurs", "21 690", "fin 2024"],
          ]}
        />
        <p>
          Deux chiffres méritent qu&apos;on s&apos;y arrête. D&apos;abord{" "}
          <strong>37,1 % de résidences secondaires</strong> : c&apos;est
          l&apos;indicateur qui dit le mieux à quel point l&apos;économie
          savoyarde est saisonnière et tournée vers l&apos;accueil. Ensuite
          l&apos;écart entre les 60 971 établissements actifs et les 21 690
          établissements employeurs : autrement dit,{" "}
          <strong>près de deux tiers des établissements savoyards
          n&apos;ont aucun salarié</strong>. C&apos;est un tissu
          d&apos;indépendants, d&apos;artisans et de très petites structures,
          bien plus que de grosses PME — et cela change complètement le type
          de projet numérique qui a du sens.
        </p>

        <h2 id="six-territoires">2. Six territoires, six économies</h2>
        <p>
          Le département se lit en six bassins, dont les besoins numériques
          n&apos;ont presque rien en commun.
        </p>
        <GuideTable
          headers={["Territoire", "Économie dominante", "Ce qu'on y construit"]}
          rows={[
            ["Bassin chambérien", "Tertiaire, administration, santé, université, recherche", "Sites d'entreprises de services, portails clients, outils internes"],
            ["Aix-les-Bains et lac du Bourget", "Thermalisme, tourisme d'affaires, industrie", "Sites de réservation, multilingue, connexions à des logiciels métier"],
            ["Albertville et Arlysère", "Porte de Tarentaise, industrie, logistique des stations", "Sites BTP et industrie, outils de suivi, espaces professionnels"],
            ["Tarentaise et stations", "Tourisme de montagne, remontées mécaniques, immobilier", "Sites saisonniers à forte charge, réservation, multilingue"],
            ["Maurienne", "Industrie lourde, énergie, transit alpin", "Applications métier, portails fournisseurs, documentation technique"],
            ["Combe de Savoie et Avant-pays", "Viticulture, agroalimentaire, industrie diffuse", "Vente en ligne, sites de domaines et de producteurs, catalogues"],
          ]}
        />
        <InfoBox variant="blue" title="Pourquoi cette distinction n'est pas cosmétique">
          Un site d&apos;hôtel en Tarentaise doit encaisser un pic de trafic
          en décembre et en février, s&apos;afficher vite sur un mobile en
          réseau dégradé, et exister en trois ou quatre langues. Un site
          d&apos;industriel mauriennais n&apos;a besoin de rien de tout
          cela : il lui faut un espace où ses clients professionnels
          retrouvent des fiches techniques et passent commande.{" "}
          <strong>Le même budget donne deux projets qui n&apos;ont pas un
          composant en commun.</strong> C&apos;est la raison pour laquelle
          nous commençons toujours par un cadrage plutôt que par un devis
          type.
        </InfoBox>

        <h2 id="qui-emploie">3. Qui emploie vraiment en Savoie</h2>
        <p>
          Le classement des dix premiers employeurs du département, sur les
          effectifs 2024, est instructif : <strong>huit sur dix relèvent du
          secteur public ou de la santé</strong>.
        </p>
        <GuideTable
          headers={["Rang", "Employeur", "Effectif", "Secteur"]}
          rows={[
            ["1", "Direction des services de l'Éducation nationale de la Savoie", "7 537", "Éducation"],
            ["2", "Centre Hospitalier Métropole Savoie", "5 053", "Santé"],
            ["3", "Crédit Agricole des Savoie", "2 517", "Banque"],
            ["4", "Département de la Savoie", "2 462", "Collectivité"],
            ["5", "Commune de Chambéry", "1 817", "Collectivité"],
            ["6", "Université Savoie Mont Blanc", "1 519", "Enseignement supérieur"],
            ["7", "Ugitech (Ugine)", "1 212", "Métallurgie"],
            ["8", "Centre Hospitalier Intercommunal Albertville-Moûtiers", "1 019", "Santé"],
            ["9", "Centre Hospitalier Spécialisé de la Savoie", "958", "Santé"],
            ["10", "Groupe Jean Lain", "863", "Distribution automobile"],
          ]}
        />
        <p>
          Ce classement dit deux choses. D&apos;une part, la Savoie
          n&apos;est pas un département de sièges sociaux : les grands
          employeurs privés y sont rares, et l&apos;essentiel du tissu
          économique est constitué de petites structures. D&apos;autre part,
          l&apos;industrie qui existe est concentrée et spécialisée —{" "}
          <strong>Ugitech à Ugine</strong> pour les aciers inoxydables,{" "}
          <strong>TRIMET à Saint-Jean-de-Maurienne</strong> pour
          l&apos;aluminium primaire, avec environ 600 salariés et une
          production de l&apos;ordre de 145 000 tonnes par an. Ces
          entreprises-là ont des besoins logiciels sérieux, très loin du site
          vitrine.
        </p>

        <h2 id="poles">4. Les pôles structurants</h2>
        <p>
          Trois lieux organisent une bonne partie de l&apos;activité
          économique et de l&apos;innovation du département.
        </p>
        <p>
          <strong>Savoie Technolac</strong>, à cheval sur Le Bourget-du-Lac
          et La Motte-Servolex, est un technopôle créé en 1987 sur
          l&apos;ancienne base aérienne 725, cédée par l&apos;État en 1985.
          On y trouve l&apos;Université Savoie Mont Blanc, Polytech
          Annecy-Chambéry, les Arts et Métiers, le Centre d&apos;ingénierie
          hydraulique d&apos;EDF et un incubateur. C&apos;est le point de
          concentration des entreprises technologiques du département.
        </p>
        <p>
          <strong>L&apos;Institut national de l&apos;énergie solaire</strong>,
          implanté sur ce même technopôle au 50 avenue du Lac Léman, a été
          créé en 2005 à l&apos;initiative du Conseil départemental de la
          Savoie et de la Région, en réunissant des équipes du CEA et de
          l&apos;université. Il rassemble environ 500 collaborateurs sur
          22 000 m² et couvre le photovoltaïque, le solaire thermique, le
          stockage électrique et le bâtiment à haute efficacité énergétique.
        </p>
        <p>
          <strong>Alpespace</strong>, en Combe de Savoie, accueille des
          entreprises industrielles et technologiques, dont des acteurs de
          l&apos;aménagement de la montagne. Le département revendique
          d&apos;ailleurs quatre filières d&apos;excellence selon la CCI
          Savoie : l&apos;agroalimentaire, les industries électro-intensives,
          l&apos;aménagement de la montagne et les énergies renouvelables.
        </p>

        <GuideInlineCTA
          title="Un projet en Savoie ?"
          description="Décrivez-le en 3 minutes. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti. Cette première réponse est gratuite et sans engagement. Rendez-vous à Bassens, aux portes de Chambéry, ou en visioconférence."
        />

        <h2 id="besoins">5. Ce dont ces entreprises ont besoin</h2>
        <p>
          De notre point de vue de développeurs, le tissu savoyard fait
          apparaître trois besoins récurrents, très différents les uns des
          autres.
        </p>
        <ul>
          <li>
            <strong>La saisonnalité.</strong> Une part importante de
            l&apos;économie travaille sur quatre à cinq mois. Cela impose des
            sites qui tiennent la charge sur des pics courts, des systèmes de
            réservation fiables, et souvent du multilingue — la clientèle
            n&apos;est pas seulement française. Un site qui rame en pleine
            semaine de vacances scolaires coûte cher, très vite.
          </li>
          <li>
            <strong>L&apos;outillage métier.</strong> Les industriels et les
            entreprises de services ont des processus à automatiser :
            suivi de production, gestion de commandes, portails pour les
            clients ou les distributeurs. Ce ne sont pas des sites, ce sont
            des logiciels. Notre page{" "}
            <Link href="/services/saas-applications-metier">SaaS et
            applications métier</Link> décrit ce type de projet.
          </li>
          <li>
            <strong>La visibilité locale.</strong> Pour les artisans,
            commerces et professions libérales — c&apos;est-à-dire la
            majorité des établissements savoyards, qui n&apos;ont aucun
            salarié —, l&apos;enjeu n&apos;est pas un grand site : c&apos;est
            d&apos;apparaître quand quelqu&apos;un cherche à trente
            kilomètres. Cela se joue autant sur la fiche Google que sur le
            site, et cela demande beaucoup moins de budget qu&apos;on ne le
            croit.
          </li>
        </ul>

        <h2 id="saisonnalite">6. La saisonnalité, ce que personne ne chiffre</h2>
        <p>
          C&apos;est la particularité savoyarde qui a le plus de conséquences
          techniques, et celle dont on parle le moins. Quand 37 % du parc de
          logements est constitué de résidences secondaires, une part
          importante de l&apos;économie travaille sur des fenêtres très
          courtes. Voici ce que cela implique concrètement pour un site.
        </p>
        <GuideTable
          headers={["Contrainte", "Ce qui se passe", "Comment on le traite"]}
          rows={[
            ["Pic de trafic concentré", "Le trafic d'une semaine de vacances scolaires peut dépasser celui de deux mois creux", "Site pré-généré qui ne dépend pas d'une base de données à l'affichage : la charge n'a plus d'effet"],
            ["Réseau mobile dégradé", "Vos visiteurs consultent depuis une station, une remontée, une route de montagne", "Pages légères, images optimisées, affichage utile avant chargement complet"],
            ["Clientèle internationale", "Britanniques, Néerlandais, Belges, et de plus en plus d'autres marchés", "Multilingue pensé dès la conception, pas ajouté après coup par une extension"],
            ["Réservation et disponibilités", "Connexion à un logiciel de réservation, calendrier, acomptes", "Intégration au logiciel existant plutôt que remplacement"],
            ["Contenu qui vit deux fois par an", "Tarifs, dates d'ouverture, forfaits changent à chaque saison", "Interface d'édition simple pour que vous le fassiez vous-même, sans nous rappeler"],
          ]}
        />
        <InfoBox variant="amber" title="Le coût réel d'un site lent en pleine saison">
          Un site qui met dix secondes à s&apos;afficher perd une partie de
          ses visiteurs avant même qu&apos;ils aient vu l&apos;offre.
          Sur une activité étalée sur toute l&apos;année, c&apos;est une perte
          diffuse. <strong>Sur une activité concentrée sur quatre mois,
          c&apos;est la saison</strong> — et vous ne pouvez pas rattraper en
          mai ce que vous avez perdu en février. C&apos;est la raison pour
          laquelle nous contractualisons un score de performance minimal
          plutôt que de promettre un site « rapide ».
        </InfoBox>

        <h2 id="notre-place">7. Où nous nous situons</h2>
        <p>
          Nous sommes installés à Bassens, aux portes de Chambéry, au 82 impasse de Bellevue, et nous
          développons en React et Next.js. Concrètement, cela nous place sur
          les projets où la performance et le sur-mesure comptent :
          sites d&apos;entreprises qui doivent convertir, boutiques en ligne,
          applications métier, outils internes. Nous couvrons également le
          référencement naturel et les campagnes Google Ads, parce
          qu&apos;un site que personne ne trouve ne sert à rien.
        </p>
        <p>
          Nous ne sommes pas le bon choix pour tout. Si votre besoin est une
          plaquette de trois pages avec un budget de quelques centaines
          d&apos;euros, une offre locale à bas coût vous servira mieux — nous
          vous le dirons au premier rendez-vous plutôt que de vous vendre un
          forfait surdimensionné. Le détail de notre positionnement, et la
          façon de nous auditer nous-mêmes, sont sur notre page{" "}
          <Link href="/agence">agence</Link>.
        </p>

        <h2 id="guides">8. Nos guides pour préparer votre projet</h2>
        <p>
          Avant même de nous contacter, vous pouvez vous faire une idée
          précise de ce que coûte un projet et de la façon de comparer des
          devis. Nous publions {PUBLISHED_GUIDES.length} guides longs, sourcés et
          gratuits, sans formulaire à remplir.
        </p>
        <ul>
          <li>
            <Link href="/guides/combien-coute-un-site-internet">Combien coûte
            un site internet</Link> — les fourchettes par type de projet et ce
            qui fait varier un devis.
          </li>
          <li>
            <Link href="/guides/prix-site-vitrine">Prix d&apos;un site
            vitrine</Link> — le calcul sur trois ans, abonnements et
            maintenance compris.
          </li>
          <li>
            <Link href="/guides/choisir-son-agence-web">Comment choisir son
            agence web</Link> — dix-huit vérifications gratuites, applicables à
            n&apos;importe quel prestataire savoyard, nous compris.
          </li>
          <li>
            <Link href="/guides/tjm-developpeur-web">Le tarif journalier
            d&apos;un développeur</Link> — pour lire un devis en jours et
            repérer les estimations gonflées.
          </li>
          <li>
            <Link href="/guides/refonte-sans-perdre-son-seo">Refondre son site
            sans perdre son référencement</Link> — si vous avez déjà un site
            qui fonctionne.
          </li>
        </ul>

        <GuideInlineCTA
          title="Parlons de votre projet savoyard"
          description="Décrivez votre besoin en 3 minutes : objectif de réponse personnelle le prochain jour ouvré, gratuite et sans engagement — y compris quand notre réponse est qu'une solution plus simple suffirait."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Données départementales :{" "}
          <a href="https://www.insee.fr/fr/statistiques/2011101?geo=DEP-73" target="_blank" rel="noopener noreferrer">INSEE, dossier complet du département de la Savoie</a>{" "}
          (population, emploi, chômage, revenus, logements et établissements,
          recensement 2023 et données d&apos;établissements fin 2023 et fin
          2024). Classement des employeurs : palmarès départemental publié en
          décembre 2025 sur les effectifs 2024. Filières d&apos;excellence :{" "}
          <a href="https://www.savoie.cci.fr/economie-et-territoires/les-chiffres-cles-de-la-savoie" target="_blank" rel="noopener noreferrer">CCI Savoie, Les chiffres clés de la Savoie</a>.
          Institut national de l&apos;énergie solaire :{" "}
          <a href="https://www.ines-solaire.org/decouvrir-ines/" target="_blank" rel="noopener noreferrer">INES</a>.
          Savoie Technolac : historique et établissements présents sur le
          technopôle. Les effectifs d&apos;entreprises cités sont ceux publiés
          par les organismes eux-mêmes ; nous n&apos;avons repris que les
          valeurs que nous avons pu recouper, et écarté celles dont
          l&apos;année de référence n&apos;était pas établie.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
