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

const page = getLocalPage("agence", "");

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

// --- JSON-LD : ProfessionalService rattaché à l'entité #business déclarée
// sur l'accueil (pas de seconde déclaration d'établissement), + fil d'Ariane
// + FAQ. Voir docs/plan-seo-local-savoie.md §6.
const businessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Hagnéré Code",
  url: localPageUrl(page),
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 rue Ernest Filliard",
    addressLocality: "Chambéry",
    addressRegion: "Savoie",
    postalCode: "73000",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Savoie" },
    { "@type": "AdministrativeArea", name: "Haute-Savoie" },
    { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    { "@type": "Country", name: "France" },
  ],
  telephone: "+33374472018",
  priceRange: "€€€",
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Notre agence", item: localPageUrl(page) },
  ],
});

const faqItems = [
  {
    question: "Où êtes-vous exactement situés ?",
    answer:
      "Au 7 rue Ernest Filliard, à Chambéry, en Savoie. C'est une adresse réelle, pas une domiciliation : c'est là que le travail se fait. Nous recevons sur rendez-vous, et nous nous déplaçons dans le bassin chambérien, sur Aix-les-Bains et le tour du lac du Bourget, en Combe de Savoie, ainsi qu'en Haute-Savoie pour les projets qui le justifient. Pour les entreprises plus éloignées, l'essentiel du travail se conduit très bien à distance : visioconférence pour le cadrage et les points d'étape, démonstrations en ligne à chaque livraison intermédiaire. Nous accompagnons d'ailleurs des clients hors de la région sans que cela pose de difficulté.",
  },
  {
    question: "Travaillez-vous uniquement avec des entreprises savoyardes ?",
    answer:
      "Non. Notre ancrage est savoyard, notre marché est national. Le développement web ne demande pas de proximité physique : nous livrons du code, pas des chantiers. Ce que la proximité change, c'est le premier rendez-vous — beaucoup de dirigeants préfèrent rencontrer physiquement la personne à qui ils confient plusieurs milliers d'euros, et c'est légitime. Si vous êtes en Savoie ou en Haute-Savoie, on se voit. Si vous êtes ailleurs en France, on travaille en visioconférence, avec exactement les mêmes engagements contractuels.",
  },
  {
    question: "Quelle est la différence avec les agences de communication du bassin ?",
    answer:
      "La plupart des agences installées en Savoie sont des agences de communication généralistes, ce qui est un métier différent du nôtre : elles couvrent l'identité visuelle, l'impression, les réseaux sociaux, la vidéo, et le site web en fait partie. Nous faisons du développement : notre cœur, c'est le code. Concrètement, cela se voit sur ce que nous pouvons construire — une application métier, un espace client, une connexion à votre logiciel de gestion — et sur les performances techniques du résultat. Cela ne veut pas dire que nous sommes toujours le bon choix : pour une refonte de plaquette avec un budget de communication global, une agence généraliste locale sera plus adaptée.",
  },
  {
    question: "Combien coûte un site chez vous, et pourquoi affichez-vous vos prix ?",
    answer:
      "Un site vitrine sur mesure démarre à 6 900 €, avec deux paliers supérieurs à 14 900 € et 22 000 € et plus selon l'ambition. Une boutique en ligne sur mesure va de 15 000 à 120 000 €, une première version de logiciel en ligne démarre à 15 000 €. Nous affichons ces montants parce que nous travaillons au forfait fixe contractuel : le prix est arrêté avant de commencer et ne bouge pas. C'est une pratique rare dans le secteur — aucune des agences savoyardes dont nous avons consulté le site en juillet 2026 ne publie ses tarifs. Le détail poste par poste est sur notre page tarifs, et nos guides sur les prix expliquent ce qui fait varier un devis.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "Vous partez avec une garantie de trente jours : toute anomalie constatée pendant ce mois est corrigée sans supplément. Le code vous appartient, déposé sur un compte à votre nom, avec une clause de cession écrite — en droit français, payer ne rend pas automatiquement propriétaire, et beaucoup de contrats l'oublient. Le nom de domaine est enregistré au vôtre. Ensuite, vous choisissez : un contrat de maintenance, une intervention ponctuelle quand vous en avez besoin, ou rien du tout si votre équipe reprend la main. Un site construit sur une base saine ne demande pas de vigilance hebdomadaire, contrairement à un site bâti sur un empilement d'extensions.",
  },
  {
    question: "Faites-vous aussi le référencement et la publicité en ligne ?",
    answer:
      "Oui, et c'est même une partie importante de notre travail. Le référencement naturel est intégré dès la construction — structure des pages, vitesse, balisage, contenus — parce qu'il coûte beaucoup moins cher quand il est prévu dès le début que rattrapé après coup. Nous gérons également des campagnes Google Ads, qui répondent à un besoin différent : le référencement naturel construit un actif lentement, la publicité achète de la visibilité immédiatement. Les deux sont complémentaires, et le bon dosage dépend de votre urgence et de votre budget.",
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
      <script type="application/ld+json">{businessJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>

      <GuideLayout
        breadcrumbs={[{ label: "Notre agence" }]}
        heroTitle={page.heroTitle}
        heroDescription="Nous sommes installés au 7 rue Ernest Filliard, à Chambéry. Cette page dit où nous travaillons, ce que nous constatons sur le tissu économique savoyard, et comment nous intervenons — sur place en Savoie et Haute-Savoie, à distance partout ailleurs en France."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel="Mis à jour le 18 juillet 2026"
        keyPoints={[
          { number: "01", title: "Chambéry, 7 rue Ernest Filliard", description: "", color: "violet" },
          { number: "02", title: "Savoie et Haute-Savoie sur place", description: "", color: "blue" },
          { number: "03", title: "Toute la France à distance", description: "", color: "emerald" },
          { number: "04", title: "Forfait fixe, prix publiés", description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/services/sites-vitrines", label: "Création de sites vitrines" },
          { href: "/services/saas-applications-metier", label: "SaaS et applications métier" },
          { href: "/services/referencement-google", label: "Référencement naturel" },
          { href: "/services/publicite-en-ligne", label: "Publicité en ligne" },
          { href: "/tarifs", label: "Nos tarifs" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Notre agence : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Beaucoup d&apos;agences web affichent une liste de villes qu&apos;elles
          n&apos;ont jamais visitées. Nous préférons commencer par ce qui est
          vérifiable : <strong>nous sommes une petite équipe installée à
          Chambéry, au 7 rue Ernest Filliard</strong>, et nous développons des
          sites, des boutiques en ligne et des applications métier. Cette page
          explique où nous intervenons réellement, et ce que nous observons du
          marché local.
        </p>

        <GuideToc
          items={[
            { id: "ou-nous-sommes", label: "1. Où nous sommes, concrètement" },
            { id: "territoire", label: "2. Le territoire que nous couvrons" },
            { id: "economie-locale", label: "3. Le tissu économique savoyard" },
            { id: "constat", label: "4. Ce que nous constatons sur les sites du bassin" },
            { id: "paysage", label: "5. Le paysage des agences locales, sans détour" },
            { id: "ce-que-nous-faisons", label: "6. Ce que nous faisons" },
            { id: "comment-on-travaille", label: "7. Comment nous travaillons" },
            { id: "au-dela", label: "8. Au-delà de la Savoie" },
          ]}
        />

        <h2 id="ou-nous-sommes">1. Où nous sommes, concrètement</h2>
        <p>
          Hagnéré Code est une SAS créée le 30 septembre 2025, dont le siège est
          au <strong>7 rue Ernest Filliard, 73000 Chambéry</strong>. Ce
          n&apos;est pas une adresse de domiciliation prise pour afficher un
          code postal savoyard : c&apos;est là que nous travaillons, et vous
          pouvez y venir.
        </p>
        <p>
          Nous le précisons parce que ce n&apos;est pas la norme. En cherchant
          qui se positionne sur les recherches « agence web » dans les villes de
          Savoie, nous avons trouvé plusieurs prestataires qui vendent des
          prestations locales depuis plusieurs centaines de kilomètres — jusqu&apos;à
          une société bretonne proposant du référencement local en Maurienne.
          Ce n&apos;est pas illégal, et le travail livré peut être correct. Mais
          quand vous cherchez une agence dans votre ville, vous méritez de savoir
          si elle y est.
        </p>

        <h2 id="territoire">2. Le territoire que nous couvrons</h2>
        <p>
          Nous distinguons trois cercles, parce qu&apos;ils n&apos;impliquent pas
          la même chose pour vous.
        </p>
        <GuideTable
          headers={["Cercle", "Communes et zones", "Ce que ça change"]}
          rows={[
            ["Bassin chambérien", "Chambéry et les communes de Grand Chambéry : La Motte-Servolex, La Ravoire, Cognin, Barberaz, Saint-Alban-Leysse, Bassens, Barby, Jacob-Bellecombette, Challes-les-Eaux…", "Rendez-vous sur place sans difficulté, y compris pour des points courts"],
            ["Savoie et Haute-Savoie", "Aix-les-Bains et le tour du lac du Bourget, Le Bourget-du-Lac et Savoie Technolac, Combe de Savoie, Albertville, Annecy, Annemasse, Cluses, Thonon-les-Bains", "Déplacement pour le cadrage et les étapes clés, le reste à distance"],
            ["Reste de la France", "Partout", "Travail entièrement à distance, mêmes engagements contractuels"],
          ]}
        />
        <InfoBox variant="blue" title="Une précision de géographie que beaucoup se trompent">
          <strong>Aix-les-Bains et Le Bourget-du-Lac ne font pas partie de
          Grand Chambéry</strong> : ces deux communes relèvent de la
          communauté d&apos;agglomération Grand Lac. De même, Montmélian et
          Porte-de-Savoie appartiennent à Cœur de Savoie. Ce sont des détails
          administratifs, mais ils comptent : une agence qui écrit
          « Aix-les-Bains, dans l&apos;agglomération chambérienne » signale
          qu&apos;elle a rédigé sa page depuis un tableur, pas depuis le
          territoire.
        </InfoBox>

        <h2 id="economie-locale">3. Le tissu économique savoyard</h2>
        <p>
          Chambéry est une <strong>économie tertiaire et administrative</strong>,
          et les chiffres le disent nettement. D&apos;après le recensement de
          l&apos;INSEE de 2023, l&apos;emploi de la commune se répartit ainsi :{" "}
          <strong>46,3 % dans le commerce, les transports et les services
          divers</strong>, <strong>38,9 % dans l&apos;administration publique,
          l&apos;enseignement, la santé et l&apos;action sociale</strong>, 9,4 %
          dans l&apos;industrie et 5,0 % dans la construction. Autrement dit,
          plus de huit emplois sur dix relèvent des services et du secteur
          public.
        </p>
        <p>
          Cela ne veut pas dire qu&apos;il n&apos;y a pas d&apos;industrie : elle
          est surtout située en périphérie et dans la vallée, sur les zones de
          Bissy et des Landiers, et plus loin sur le parc Alpespace. Le
          département, lui, revendique quatre filières d&apos;excellence selon
          la CCI Savoie : l&apos;agroalimentaire, les industries
          électro-intensives, l&apos;aménagement de la montagne et les énergies
          renouvelables. Du côté de l&apos;agence de développement économique
          Chambéry-Grand Lac économie, cinq filières sont mises en avant :
          énergies intelligentes, outdoor-santé-bien-être, numérique, ingénierie
          de la montagne et agroalimentaire.
        </p>
        <p>
          Un point mérite d&apos;être connu si vous travaillez dans
          l&apos;énergie : l&apos;<strong>Institut national de l&apos;énergie
          solaire</strong>, implanté sur Savoie Technolac au Bourget-du-Lac,
          rassemble environ 500 collaborateurs sur 22 000 m². C&apos;est le
          centre de référence français du solaire, et il structure tout un
          écosystème d&apos;entreprises autour de lui.
        </p>

        <h2 id="constat">4. Ce que nous constatons sur les sites du bassin</h2>
        <p>
          Plutôt que d&apos;affirmer que « les entreprises locales ont besoin de
          se digitaliser », nous avons mesuré. En juillet 2026, nous avons passé{" "}
          <strong>neuf sites d&apos;entreprises et de commerces indépendants</strong>{" "}
          de Chambéry, Aix-les-Bains et du bassin d&apos;Albertville dans
          Lighthouse, l&apos;outil de mesure de Google, en configuration mobile.
        </p>
        <p>
          Le résultat : <strong>aucun des neuf n&apos;atteignait 90 sur 100 en
          performance</strong>, et la médiane se situait autour de 55 à 60. Sur
          plusieurs d&apos;entre eux, l&apos;affichage du contenu principal
          dépassait dix secondes en conditions de réseau mobile dégradé, et le
          poids des pages dépassait fréquemment deux méga-octets.
        </p>
        <InfoBox variant="amber" title="Ce que vaut — et ne vaut pas — cette mesure">
          Neuf sites, ce n&apos;est pas un échantillon représentatif du
          département : c&apos;est un sondage. Nous avons choisi des entreprises
          indépendantes (hôtels, artisans, commerces) et écarté volontairement
          les chaînes nationales, dont les sites sont gérés par un siège.
          Nous avons aussi constaté que <strong>ces mesures varient fortement
          d&apos;un passage à l&apos;autre</strong> : sur trois sites re-testés,
          l&apos;écart atteignait dix-huit points. C&apos;est pourquoi nous ne
          publions ni le nom des sites testés, ni leur score individuel — ce
          serait à la fois instable et déloyal. Ce qui reste solide, c&apos;est
          l&apos;ordre de grandeur : le niveau technique moyen est bas, et il y a
          de la place pour faire mieux.
        </InfoBox>
        <p>
          Pourquoi cela compte pour vous : la vitesse d&apos;affichage sur mobile
          est un critère utilisé par Google dans son classement, et elle influence
          directement le nombre de visiteurs qui restent. Notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">guide sur le prix
          d&apos;un site internet</Link> détaille ce mécanisme, chiffres à
          l&apos;appui. C&apos;est aussi la raison pour laquelle nous
          contractualisons un score Lighthouse mobile d&apos;au moins 95 sur nos
          livraisons : c&apos;est vérifiable par vous, gratuitement, en trente
          secondes.
        </p>

        <h2 id="paysage">5. Le paysage des agences locales, sans détour</h2>
        <p>
          La Savoie compte des agences installées de longue date, et sérieuses :
          plusieurs existent depuis la fin des années 1990 ou le début des
          années 2000, avec des références clients nommées et vérifiables. Nous
          n&apos;allons pas prétendre le contraire pour nous vendre.
        </p>
        <p>
          Deux constats factuels, issus de la lecture de leurs sites en juillet
          2026, expliquent néanmoins pourquoi nous existons.
        </p>
        <ul>
          <li>
            <strong>Ce sont majoritairement des agences de communication
            généralistes</strong>, qui couvrent l&apos;identité visuelle, le
            print, les réseaux sociaux, la vidéo — et le site web parmi le reste.
            C&apos;est un métier différent du développement. Une exception
            notable dans le bassin : une agence chambérienne positionnée
            sérieusement sur les applications métier et l&apos;automatisation.
          </li>
          <li>
            <strong>Aucune n&apos;affiche de stack React, Next.js ou
            TypeScript.</strong> Le socle explicitement mis en avant, quand il
            l&apos;est, est WordPress. Ce n&apos;est pas un défaut en soi —
            WordPress fait tourner une grande partie du web et convient à
            beaucoup de projets. Mais cela borne ce qu&apos;on peut construire,
            et cela pèse sur la performance et sur l&apos;entretien. Notre{" "}
            <Link href="/guides/nextjs-ou-wordpress">comparatif Next.js ou
            WordPress</Link> traite la question honnêtement, y compris les cas
            où WordPress reste le bon choix.
          </li>
        </ul>
        <p>
          Troisième observation, sur les prix : <strong>aucune des agences
          savoyardes dont nous avons consulté le site ne publie ses
          tarifs</strong>. Nous publions les nôtres sur notre{" "}
          <Link href="/tarifs">page tarifs</Link>, et nous travaillons au
          forfait fixe contractuel. Ce n&apos;est pas une supériorité morale,
          c&apos;est un choix commercial : cela filtre les projets hors budget
          avant le premier rendez-vous, ce qui fait gagner du temps à tout le
          monde.
        </p>

        <GuideInlineCTA
          title="Un projet en Savoie ou ailleurs ?"
          description="Décrivez-le en 3 minutes. Nous répondons personnellement sous 24 h ouvrées, gratuitement et sans engagement — y compris quand notre réponse est qu'une solution plus simple suffirait."
        />

        <h2 id="ce-que-nous-faisons">6. Ce que nous faisons</h2>
        <p>
          Nous sommes une agence complète, au sens où nous couvrons la chaîne
          entière : construire le site ou l&apos;outil, puis le faire trouver et
          le faire vivre.
        </p>
        <GuideTable
          headers={["Prestation", "Pour qui", "À partir de"]}
          rows={[
            ["Site vitrine sur mesure", "TPE et PME qui veulent être trouvées et convertir", "6 900 €"],
            ["Boutique en ligne sur mesure", "Commerces et marques qui vendent en ligne sérieusement", "15 000 €"],
            ["Logiciel en ligne, application métier", "Entreprises qui ont un processus à outiller", "15 000 €"],
            ["Outils internes, automatisation", "Équipes qui perdent du temps sur des tâches répétitives", "Sur devis"],
            ["Référencement naturel", "Ceux qui veulent durer dans les résultats Google", "Sur devis"],
            ["Campagnes Google Ads", "Ceux qui ont besoin de visibilité tout de suite", "Sur devis"],
          ]}
        />
        <p>
          Le détail de chaque prestation est sur les pages correspondantes :{" "}
          <Link href="/services/sites-vitrines">sites vitrines</Link>,{" "}
          <Link href="/services/ecommerce">e-commerce</Link>,{" "}
          <Link href="/services/saas-applications-metier">SaaS et applications
          métier</Link>,{" "}
          <Link href="/services/outils-internes-sur-mesure">outils
          internes</Link>,{" "}
          <Link href="/services/referencement-google">référencement
          naturel</Link> et{" "}
          <Link href="/services/publicite-en-ligne">publicité en ligne</Link>.
        </p>

        <h2 id="comment-on-travaille">7. Comment nous travaillons</h2>
        <p>
          Trois engagements, les mêmes pour tout le monde, qu&apos;on soit à
          Chambéry ou à Lille.
        </p>
        <ul>
          <li>
            <strong>Forfait fixe contractuel.</strong> Le périmètre est écrit, le
            prix est arrêté avant de commencer, et il ne bouge pas. Tout ajout
            en cours de route passe par un avenant chiffré — pas par une facture
            surprise à la fin.
          </li>
          <li>
            <strong>Performance garantie par contrat.</strong> Un score
            Lighthouse mobile d&apos;au moins 95 sur 100 à la livraison,
            corrections gratuites si le seuil n&apos;est pas tenu. C&apos;est
            l&apos;engagement le plus facile à vérifier de tout notre contrat :
            vous ouvrez PageSpeed Insights et vous regardez.
          </li>
          <li>
            <strong>Le code est à vous.</strong> Cession des droits écrite,
            dépôt du code sur un compte à votre nom, nom de domaine enregistré
            au vôtre. En droit français, payer une prestation ne rend pas
            automatiquement propriétaire du code — c&apos;est un point que
            beaucoup de contrats laissent volontairement flou, et notre{" "}
            <Link href="/guides/choisir-son-agence-web">guide pour choisir son
            agence web</Link> explique comment le vérifier chez n&apos;importe
            quel prestataire, nous compris.
          </li>
        </ul>
        <p>
          Le déroulé complet, du cadrage à la mise en ligne, est décrit sur notre{" "}
          <Link href="/methode">page méthode</Link>. Les projets démarrent
          généralement par un Discovery Sprint de deux jours à 1 500 €, déduits
          intégralement du projet s&apos;il se lance.
        </p>

        <h2 id="au-dela">8. Au-delà de la Savoie</h2>
        <p>
          Notre ancrage est savoyard, mais notre travail ne l&apos;est pas. Le
          développement web se conduit très bien à distance : nous livrons du
          code, des maquettes et des démonstrations en ligne, pas des chantiers
          qui exigent une présence physique. Nous accompagnons des clients hors
          de la région, et le cadre contractuel est identique.
        </p>
        <p>
          Ce que la proximité change vraiment, c&apos;est le premier
          rendez-vous : rencontrer quelqu&apos;un avant de lui confier un budget
          à cinq chiffres rassure, et c&apos;est normal. Si vous êtes en Savoie
          ou en Haute-Savoie, on se voit. Si vous êtes ailleurs, on commence en
          visioconférence, et cela n&apos;a jamais empêché un projet
          d&apos;aboutir.
        </p>
        <p>
          Une dernière chose, sur le référencement : si vous cherchez à
          comprendre ce que coûte un site, comment lire un devis ou comment
          choisir un prestataire, nous avons publié une vingtaine de guides
          longs et sourcés sur ces sujets. Ils sont gratuits, sans formulaire, et
          ils vous serviront même si vous travaillez avec quelqu&apos;un
          d&apos;autre — c&apos;est le principe. Le sommaire est sur notre{" "}
          <Link href="/guides">page guides</Link>.
        </p>

        <GuideInlineCTA
          title="Parlons de votre projet"
          description="Décrivez votre besoin en 3 minutes : réponse personnelle sous 24 h ouvrées, gratuite et sans engagement. Rendez-vous sur place à Chambéry ou en visioconférence, comme vous préférez."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Répartition de l&apos;emploi à Chambéry :{" "}
          <a href="https://www.insee.fr/fr/statistiques/2011101?geo=COM-73065" target="_blank" rel="noopener noreferrer">INSEE, dossier complet de la commune de Chambéry, recensement 2023</a>.
          Filières d&apos;excellence départementales :{" "}
          <a href="https://www.savoie.cci.fr/economie-et-territoires/les-chiffres-cles-de-la-savoie" target="_blank" rel="noopener noreferrer">CCI Savoie, Les chiffres clés de la Savoie</a>.
          Filières du bassin :{" "}
          <a href="https://www.chambery-grandlac.fr/filieres-dexcellence/" target="_blank" rel="noopener noreferrer">Chambéry-Grand Lac économie</a>.
          Périmètre intercommunal :{" "}
          <a href="https://www.grandchambery.fr/lagglomeration/services-et-missions/presentation-du-territoire" target="_blank" rel="noopener noreferrer">Grand Chambéry</a>.
          Institut national de l&apos;énergie solaire :{" "}
          <a href="https://www.ines-solaire.org/contact/" target="_blank" rel="noopener noreferrer">INES</a>.
          Mesures de performance : relevés Lighthouse 12.8.2 en configuration
          mobile réalisés le 18 juillet 2026 sur neuf sites d&apos;entreprises
          indépendantes du bassin, méthodologie et limites décrites en
          section 4.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
