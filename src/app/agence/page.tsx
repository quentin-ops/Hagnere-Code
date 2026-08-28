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
import {
  formatLocalPageDate,
  getLocalPage,
  localPagePath,
  localPageUrl,
} from "@/lib/local-pages";
import { PUBLIC_ORGANIZATION_JSON_LD } from "@/lib/organization-structured-data";
import { PUBLISHED_GUIDES } from "@/lib/guides";

const page = getLocalPage("agence", "");

// Image sociale dédiée : les trois pages locales partageaient /og-image.png
// avec l'accueil et 25 autres URL — un partage LinkedIn de cette page affichait
// exactement la même vignette que la home.
const LOCAL_OG_IMAGE = {
  url: `${SITE_URL}/agence/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Hagnéré Code — agence web à Bassens, aux portes de Chambéry",
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

// --- JSON-LD : ProfessionalService rattaché à l'entité #organization déclarée
// sur l'accueil (pas de seconde déclaration d'établissement), + fil d'Ariane
// + FAQ. Voir docs/plan-seo-local-savoie.md §6.
const businessJsonLd = JSON.stringify(PUBLIC_ORGANIZATION_JSON_LD);

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
      "Au 82 impasse de Bellevue, à Bassens, commune limitrophe de Chambéry, en Savoie. Nous recevons sur rendez-vous et pouvons nous déplacer dans le bassin chambérien, autour d'Aix-les-Bains, en Combe de Savoie et en Haute-Savoie selon le projet. Pour les entreprises plus éloignées, cadrage, points d'étape et démonstrations peuvent être conduits à distance.",
  },
  {
    question: "Travaillez-vous uniquement avec des entreprises savoyardes ?",
    answer:
      "Non. Notre ancrage est savoyard, notre marché est national. Le développement web ne demande pas de proximité physique : nous livrons du code, pas des chantiers. Ce que la proximité change, c'est le premier rendez-vous — beaucoup de dirigeants préfèrent rencontrer physiquement la personne à qui ils confient plusieurs milliers d'euros, et c'est légitime. Si vous êtes en Savoie ou en Haute-Savoie, on se voit. Si vous êtes ailleurs en France, on travaille en visioconférence, avec exactement les mêmes engagements contractuels.",
  },
  {
    question: "Quelle est la différence avec les agences de communication du bassin ?",
    answer:
      "Les prestataires du bassin ont des périmètres différents : certains réunissent communication, identité, impression, réseaux sociaux et web ; d'autres se spécialisent dans le développement ou l'acquisition. Notre cœur est le développement d'interfaces, d'applications et d'intégrations. Cela ne signifie pas que nous sommes toujours le bon choix : comparez les livrables, les compétences réellement affectées, la recette, les droits et la réversibilité au devis.",
  },
  {
    question: "Combien coûte un site chez vous, et pourquoi affichez-vous vos prix ?",
    answer:
      "Un site vitrine sur mesure démarre à 6 900 € HT, avec deux périmètres publics à 14 900 € HT et 22 000 € HT et plus. Une boutique en ligne sur mesure va de 15 000 à 120 000 € HT, une première version de logiciel en ligne démarre à 15 000 € HT. Tous nos prix sont indiqués hors taxes, TVA 20 % en sus, pour une clientèle professionnelle. Ces repères de prix sont publics et indicatifs ; le devis signé après cadrage fixe le prix ferme, le périmètre, le planning et les conditions d'avenant. Le détail est sur notre page tarifs.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "Le devis précise la recette, la période de correction, le dépôt, les accès, le domaine, la documentation et la réversibilité. Les livrables spécifiques sont transférés après paiement complet selon les CGV, sous réserve des composants préexistants et licences tierces. Ensuite, vous pouvez choisir une maintenance, une intervention ponctuelle ou une reprise par votre équipe.",
  },
  {
    question: "Faites-vous aussi le référencement et la publicité en ligne ?",
    answer:
      "Oui, et c'est même une partie importante de notre travail. Le référencement naturel est intégré dès la construction — structure des pages, vitesse, balisage, contenus — parce qu'il coûte beaucoup moins cher quand il est prévu dès le début que rattrapé après coup. Nous gérons également des campagnes Google Ads, qui répondent à un besoin différent : le référencement naturel construit un actif lentement, la publicité achète de la visibilité immédiatement. Les deux sont complémentaires, et le bon dosage dépend de votre urgence et de votre budget.",
  },
];


export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: businessJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <GuideLayout
        breadcrumbs={[{ label: "Notre agence" }]}
        heroTitle={page.heroTitle}
        heroDescription="Nous sommes installés au 82 impasse de Bellevue, à Bassens, aux portes de Chambéry. Cette page indique où nous travaillons, les besoins que nous savons traiter et comment nous intervenons — sur place en Savoie et Haute-Savoie, à distance ailleurs en France."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatLocalPageDate(page.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Bassens, aux portes de Chambéry", description: "", color: "violet" },
          { number: "02", title: "Savoie et Haute-Savoie sur place", description: "", color: "blue" },
          { number: "03", title: "Toute la France à distance", description: "", color: "emerald" },
          { number: "04", title: "Forfait fixe, prix publiés HT", description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/agence/savoie", label: "Notre territoire en Savoie" },
          { href: "/agence/savoie/chambery", label: "Agence web à Chambéry" },
          { href: "/services/sites-vitrines", label: "Création de sites vitrines" },
          { href: "/services/saas-applications-metier", label: "SaaS et applications métier" },
          { href: "/agence-next-js", label: "Agence Next.js" },
          { href: "/agence-react", label: "Agence React" },
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
          Bassens, aux portes de Chambéry, au 82 impasse de Bellevue</strong>, et nous développons des
          sites, des boutiques en ligne et des applications métier. Cette page
          explique où nous intervenons et comment évaluer un besoin web local
          sans inventer d&apos;historique client.
        </p>

        <GuideToc
          items={[
            { id: "ou-nous-sommes", label: "1. Où nous sommes, concrètement" },
            { id: "territoire", label: "2. Le territoire que nous couvrons" },
            { id: "economie-locale", label: "3. Le tissu économique savoyard" },
            { id: "constat", label: "4. Ce qu'il faut vérifier sur un site local" },
            { id: "paysage", label: "5. Le paysage des agences locales, sans détour" },
            { id: "ce-que-nous-faisons", label: "6. Ce que nous faisons" },
            { id: "comment-on-travaille", label: "7. Comment nous travaillons" },
            { id: "au-dela", label: "8. Au-delà de la Savoie" },
          ]}
        />

        <h2 id="ou-nous-sommes">1. Où nous sommes, concrètement</h2>
        <p>
          Hagnéré Code est une SAS créée le 30 septembre 2025, dont le siège est
          au <strong>82 impasse de Bellevue, 73000 Bassens</strong>. Ce
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
        <p>
          Deux pages détaillent ce territoire plus finement : notre{" "}
          <Link href="/agence/savoie">page consacrée à la Savoie</Link>{" "}
          décrit les six bassins du département et ce qu&apos;ils achètent
          réellement en matière de numérique, et notre{" "}
          <Link href="/agence/savoie/chambery">page Chambéry</Link> entre
          dans le détail de l&apos;économie de la ville, de ses zones
          d&apos;activité et de ses employeurs.
        </p>
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

        <h2 id="constat">4. Ce qu&apos;il faut vérifier sur un site local</h2>
        <p>
          Une comparaison utile ne part pas d&apos;une moyenne locale invérifiable.
          Elle teste votre propre site, sur ses pages importantes, avec les mêmes
          conditions et les mêmes outils avant et après une intervention.
        </p>
        <p>
          Les vérifications prioritaires sont le rendu mobile, les Core Web Vitals
          de terrain, l&apos;indexation, les formulaires, les conversions réellement
          reçues, les mentions locales cohérentes et la propriété des comptes.
        </p>
        <InfoBox variant="amber" title="Ce qu&apos;un score ne prouve pas">
          Lighthouse est un outil de laboratoire utile, mais un passage isolé
          ne démontre ni le comportement de tous les visiteurs, ni le référencement,
          ni la conversion. Le protocole de mesure, les pages et les scripts tiers
          doivent être documentés pour rendre la comparaison honnête.
        </InfoBox>
        <p>
          Pourquoi cela compte pour vous : la vitesse d&apos;affichage sur mobile
          fait partie des signaux d&apos;expérience de page documentés par Google et
          peut affecter l&apos;usage, sans garantir classement ni conversion.
          C&apos;est aussi la raison pour laquelle notre{" "}
          <Link href="/services/sites-vitrines">offre de sites vitrines</Link>{" "}
          peut inscrire au devis un budget de performance avec pages,
          conditions, responsabilités et seuils de recette explicites.
        </p>

        <h2 id="paysage">5. Comparer les prestataires locaux sur des critères vérifiables</h2>
        <p>
          La proximité ou l&apos;ancienneté ne suffisent pas à choisir un prestataire.
          Demandez à chacun de nommer le périmètre, l&apos;équipe affectée, les
          technologies retenues, les coûts tiers, les tests et les conditions de sortie.
        </p>
        <p>
          Les sites publics ne montrent pas toujours la stack, les tarifs ou les
          modalités contractuelles ; leur absence en ligne ne prouve donc pas leur
          absence dans une proposition. Utilisez plutôt cette grille :
        </p>
        <ul>
          <li>
            <strong>Compétences et responsabilités.</strong> Qui cadre, conçoit,
            développe, teste, rédige et répond après livraison ? Les personnes et
            leurs relais doivent être identifiables dans le devis.
          </li>
          <li>
            <strong>Socle et réversibilité.</strong> Demandez pourquoi la solution
            convient au besoin, qui possède le domaine, le dépôt et les comptes,
            quelles dépendances sont utilisées et comment un tiers peut reprendre.
            Notre <Link href="/methode">méthode de projet</Link> décrit les
            accès, livrables et critères de reprise à exiger.
          </li>
        </ul>
        <p>
          Sur les prix, comparez le coût total et les mêmes livrables. Nous publions
          nos repères sur la <Link href="/tarifs">page tarifs</Link>, mais ils
          ne permettent pas de conclure sur le tarif d&apos;un autre prestataire :
          demandez HT/TTC, abonnements, maintenance, licences, hébergement et sortie.
        </p>

        <GuideInlineCTA
          title="Un projet en Savoie ou ailleurs ?"
          description="Décrivez-le en 3 minutes. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti, gratuitement et sans engagement — y compris quand notre réponse est qu'une solution plus simple suffirait."
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
            <strong>Performance cadrée.</strong> Si le projet le justifie, le devis
            fixe les pages, appareils, réseau, scripts tiers, outil et seuils de recette.
          </li>
          <li>
            <strong>Livrables et réversibilité explicites.</strong> Les livrables
            spécifiques sont transférés après paiement complet selon les CGV.
            Le devis inventorie le dépôt, les accès, le domaine, les exclusions
            et les composants tiers. Notre{" "}
            <Link href="/tarifs">présentation des tarifs et livrables</Link>{" "}
            donne les points à vérifier chez n&apos;importe quel prestataire,
            nous compris.
          </li>
        </ul>
        <p>
          Le déroulé complet, du cadrage à la mise en ligne, est décrit sur notre{" "}
          <Link href="/methode">page méthode</Link>. Les projets démarrent
          par un cadrage dont le format, le prix, les livrables et toute remise
          éventuelle sont inscrits dans le devis.
        </p>

        <h2 id="au-dela">8. Au-delà de la Savoie</h2>
        <p>
          Notre ancrage est savoyard, mais notre travail ne l&apos;est pas. Le
          développement web se conduit très bien à distance : nous livrons du
          code, des maquettes et des démonstrations en ligne, pas des chantiers
          qui exigent une présence physique. Le même fonctionnement peut être
          proposé à une entreprise située ailleurs en France.
        </p>
        <p>
          Ce que la proximité change vraiment, c&apos;est le premier
          rendez-vous : rencontrer quelqu&apos;un avant de lui confier un budget
          à cinq chiffres rassure, et c&apos;est normal. Si vous êtes en Savoie
          ou en Haute-Savoie, on se voit. Si vous êtes ailleurs, on commence en
          visioconférence, avec des jalons et critères de décision explicites.
        </p>
        <p>
          Une dernière chose, sur le référencement : si vous cherchez à
          comprendre ce que coûte un site, comment lire un devis ou comment
          choisir un prestataire, nous reconstruisons actuellement notre
          bibliothèque éditoriale. {PUBLISHED_GUIDES.length === 1
            ? "Un guide long et sourcé est déjà publié."
            : `${PUBLISHED_GUIDES.length} guides longs et sourcés sont déjà publiés.`}{" "}
          L&apos;accès reste gratuit et sans formulaire, même si vous travaillez
          avec quelqu&apos;un d&apos;autre. Le sommaire est sur notre{" "}
          <Link href="/guides">page guides</Link>.
        </p>

        <GuideInlineCTA
          title="Parlons de votre projet"
          description="Décrivez votre besoin en 3 minutes : objectif de réponse personnelle le prochain jour ouvré, gratuite et sans engagement. Rendez-vous à Bassens, aux portes de Chambéry, ou en visioconférence, comme vous préférez."
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
