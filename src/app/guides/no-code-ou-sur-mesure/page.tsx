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

const guide = getGuide("no-code-ou-sur-mesure");

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
  wordCount: 5240,
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
      "No-code",
      "Applications métier",
      "React",
      "Next.js",
      "Coût total de possession",
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
    { "@type": "ListItem", position: 3, name: "No-code ou sur-mesure", item: guideUrl(guide) },
  ],
});

const faqItems = [
  {
    question: "Le no-code coûte-t-il vraiment moins cher que le sur-mesure ?",
    answer:
      "Au démarrage, oui, et l'écart est énorme : quelques dizaines d'euros par mois contre plusieurs milliers d'euros de développement. Sur la durée, la réponse dépend d'une seule variable — le nombre d'utilisateurs. Les outils no-code facturent presque tous par siège, par enregistrement ou par unité de traitement : votre facture grimpe quand votre activité grandit, exactement au moment où vous auriez besoin de marges. Un développement sur mesure coûte cher une fois, puis presque rien. Le point où les deux courbes se croisent se situe le plus souvent entre la deuxième et la quatrième année pour un outil interne, et bien plus tôt dès qu'il y a beaucoup d'utilisateurs externes.",
  },
  {
    question: "Quels sont les plafonds techniques réels des outils no-code ?",
    answer:
      "Ils sont publiés par les éditeurs eux-mêmes, et rarement lus. Airtable limite son interface de programmation à 5 requêtes par seconde et par base : au-delà, le service refuse la demande et impose 30 secondes d'attente. C'est l'ordre de grandeur d'un seul utilisateur actif sur une interface un peu dense — ce plafond disqualifie Airtable comme socle d'une application à trafic réel. Chez Bubble, la contrainte est différente : la formule à 209 dollars par mois n'autorise que deux personnes à modifier l'application simultanément, et cinq à 549 dollars. Sur un développement sur mesure, il n'existe aucune limite de ce genre.",
  },
  {
    question: "Est-on prisonnier d'un outil no-code ?",
    answer:
      "Partiellement, et il faut distinguer deux choses. Vos données sortent généralement sans difficulté : la plupart des outils proposent un export. Votre logique métier, elle, ne sort pas — les règles que vous avez construites dans l'éditeur visuel n'existent que dans cet éditeur, et il n'y a pas de fichier à emporter. Concrètement : si vous changez d'outil, vous récupérez votre base et vous reconstruisez tout le reste. C'est la raison pour laquelle nous recommandons de passer le test de réversibilité en six questions de ce guide avant de signer, et non le jour où vous voudrez partir.",
  },
  {
    question: "Un éditeur no-code peut-il changer ses conditions du jour au lendemain ?",
    answer:
      "Oui, et ce n'est pas théorique. Webflow a supprimé sa fonctionnalité Logic en juin 2025, puis les comptes utilisateurs en janvier 2026 — des fonctions sur lesquelles des clients avaient bâti leur produit. En mai 2026, la même société a fusionné deux formules : la bande passante incluse dans l'ancienne offre Business est passée de 100 à 50 gigaoctets, et les quotas de son offre d'hébergement de 10 millions à 2 millions de requêtes par mois. Ces changements s'appliquent automatiquement au renouvellement. C'est le risque structurel du modèle : vous louez une plateforme dont vous ne maîtrisez ni le prix, ni le périmètre, ni le calendrier.",
  },
  {
    question: "Le no-code permet-il de respecter le RGPD ?",
    answer:
      "Cela dépend de l'outil, et le critère à vérifier est l'endroit où sont stockées vos données. Chez Bubble, le choix de la localisation d'hébergement n'est disponible que sur l'offre Enterprise, sur devis : sur les formules courantes, une entreprise française ne choisit pas où atterrissent ses données. Make, à l'inverse, propose un hébergement dans l'Union européenne sur toutes ses formules. Ce n'est pas un détail si vous traitez des données de santé, des données de salariés ou des informations sensibles : c'est le premier point à vérifier, avant même le prix.",
  },
  {
    question: "Que valent les statistiques qu'on lit sur le no-code ?",
    answer:
      "Beaucoup sont inventées, y compris par des agences de développement sur mesure — c'est-à-dire par notre propre camp. L'affirmation la plus citée, selon laquelle « 68 % des applications Bubble plantent sous 10 000 utilisateurs », n'a aucune source : nous avons cherché sur le forum officiel de l'éditeur et ailleurs, elle n'existe nulle part. Le fameux « 70 % des applications utiliseront du low-code d'ici 2025 » de Gartner existe, lui, mais c'est une prévision de 2021 que personne n'a jamais vérifiée après coup. Notre position : les vrais plafonds publiés par les éditeurs sont bien plus parlants que ces chiffres, et ils sont vérifiables en trois clics.",
  },
  {
    question: "Le no-code convient-il pour un site vitrine ?",
    answer:
      "Pour un site simple qui doit exister sans enjeu d'acquisition, oui, sans hésiter. Webflow produit des sites corrects, et pour une plaquette de quelques pages, c'est un choix raisonnable. La limite apparaît sur deux terrains : la performance, où un site pré-généré sur mesure conserve une avance nette, et la bande passante, facturée chez Webflow autour de 0,40 dollar par gigaoctet — un tarif sans rapport avec le marché de l'hébergement, qui transforme un site à fort trafic en abonnement coûteux. Notre guide du prix d'un site vitrine chiffre les deux scénarios.",
  },
  {
    question: "Peut-on migrer d'un outil no-code vers du sur-mesure ?",
    answer:
      "Oui, et c'est même le scénario que nous rencontrons le plus souvent : l'outil a permis de valider l'idée, puis il a atteint un plafond. La bonne nouvelle, c'est que la migration se fait rarement à l'aveugle — après un ou deux ans d'usage réel, vous savez exactement ce dont vous avez besoin, ce qui réduit fortement le risque de développer la mauvaise chose. La moins bonne : la logique métier se reconstruit intégralement. Comptez le budget d'un développement neuf, moins l'économie de cadrage, plus la reprise des données existantes.",
  },
  {
    question: "n8n est-il open source ?",
    answer:
      "Non, et l'éditeur le dit lui-même explicitement. n8n est distribué sous une licence dite « Sustainable Use License », qui limite l'usage à vos besoins internes ou à un usage non commercial. Vous ne pouvez pas revendre un produit dont la valeur dépend substantiellement de n8n, ni héberger l'outil et facturer l'accès à des tiers. L'éditeur écrit noir sur blanc que les licences open source ne peuvent pas comporter de limitation d'usage, et qu'il ne se qualifie donc pas ainsi. Beaucoup d'articles le présentent pourtant comme open source : c'est faux, et cela change ce que vous avez le droit d'en faire.",
  },
  {
    question: "Combien de temps faut-il pour construire avec du no-code ?",
    answer:
      "Nettement moins qu'en développement, et c'est son intérêt principal. Un outil interne simple se monte en quelques jours ; un prototype présentable en une à deux semaines. C'est imbattable pour valider une idée avant d'engager un budget. La nuance est que ce temps de construction rapide masque un temps d'exploitation qui, lui, s'allonge : contournements successifs, dépendance à la personne qui a construit l'outil, et travaux de maintenance quand l'éditeur change quelque chose. La vitesse initiale est réelle, la vitesse au bout de deux ans l'est beaucoup moins.",
  },
  {
    question: "Le no-code peut-il gérer beaucoup d'utilisateurs externes ?",
    answer:
      "C'est précisément là que le modèle devient coûteux. Airtable facture l'accès d'utilisateurs externes via un module complémentaire à partir d'environ 120 dollars pour quinze invités par mois, soit 8 à 10 dollars par personne et par mois. Pour cent partenaires ou clients, vous êtes à plusieurs centaines de dollars mensuels, indéfiniment. Sur un développement sur mesure, le nombre d'utilisateurs n'a aucun effet sur la facture : c'est une ligne de base de données de plus. Dès que vous ouvrez un outil à l'extérieur, faites le calcul sur cinq ans avant de choisir.",
  },
  {
    question: "Quand le no-code est-il clairement le bon choix ?",
    answer:
      "Dans quatre situations que nous nommons sans détour, parce qu'elles nous font perdre des missions. Pour valider une idée avant d'investir : construire un prototype en deux semaines vaut mieux que dépenser 20 000 euros dans le vide. Pour un outil interne à faible enjeu, utilisé par une poignée de personnes, dont la panne ne coûte rien. Pour automatiser des tâches répétitives entre logiciels existants, où Make et n8n sont excellents et n'ont pas d'équivalent sur mesure raisonnable. Et quand votre budget total est inférieur à 3 000 euros : le sur-mesure n'a alors aucun sens.",
  },
  {
    question: "Comment savoir si j'ai atteint les limites de mon outil no-code ?",
    answer:
      "Cinq signaux, et il en faut au moins trois. Votre facture mensuelle dépasse le coût amorti d'un développement sur cinq ans. Vous passez plus de temps à contourner l'outil qu'à l'utiliser. Une seule personne sait comment il fonctionne, et son départ serait un problème. Vous avez commencé à exporter des données vers un tableur pour faire ce que l'outil ne sait pas faire. Et vous avez déjà subi un changement de conditions imposé par l'éditeur. Si vous cochez trois de ces cases, le calcul de ce guide vaut la peine d'être fait sérieusement.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "No-code ou sur-mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les tarifs réellement relevés le 18 juillet 2026 sur les pages officielles, les plafonds contractuels que les éditeurs publient et que personne ne lit, quatre chiffres du secteur démontés à la source — dont un fabriqué par des agences sur mesure —, et la courbe de coût sur cinq ans."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Tarifs relevés le 18/07/2026", description: "", color: "violet" },
          { number: "02", title: "Airtable : 5 requêtes/seconde par base", description: "", color: "blue" },
          { number: "03", title: "4 chiffres bidon démontés", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/transformer-excel-en-application", label: "Transformer Excel en application" },
          { href: "/guides/prix-logiciel-sur-mesure", label: "Prix d'un logiciel sur mesure" },
          { href: "/guides/combien-coute-un-saas", label: "Combien coûte un SaaS ?" },
          { href: "/services/outils-internes-sur-mesure", label: "Outils internes sur mesure" },
          { href: "/services/saas-applications-metier", label: "SaaS et applications métier" },
          { href: "/agence-react", label: "Agence React" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="No-code ou sur-mesure : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Le débat est pollué par deux camps qui ont chacun un produit à
          vendre. Nous en faisons partie — nous développons sur mesure — et
          nous avons découvert en préparant ce guide que{" "}
          <strong>l&apos;un des chiffres les plus cités contre le no-code a
          été fabriqué par des agences comme la nôtre</strong>. Alors
          plutôt qu&apos;un avis, voici des tarifs relevés à la main, des
          plafonds publiés par les éditeurs, et un calcul que vous ferez
          vous-même.
        </p>

        <InfoBox variant="amber" title="Les 10 mots de ce guide, traduits en français courant">
          <strong>No-code</strong> : construire un outil ou un site en
          assemblant des blocs dans une interface visuelle, sans écrire de
          code. <strong>Low-code</strong> : la même chose, mais avec un peu
          de code pour les cas particuliers.{" "}
          <strong>Sur-mesure</strong> : un logiciel écrit ligne à ligne pour
          vous. <strong>Éditeur</strong> : l&apos;entreprise qui fournit
          l&apos;outil no-code et fixe ses règles.{" "}
          <strong>API</strong> : le passe-plat numérique par lequel deux
          logiciels s&apos;échangent des données.{" "}
          <strong>Réversibilité</strong> : votre capacité à partir en
          emportant ce qui vous appartient.{" "}
          <strong>Verrouillage propriétaire</strong> : la situation où
          partir coûte si cher qu&apos;on reste.{" "}
          <strong>Coût total de possession</strong> : ce que l&apos;outil
          coûte sur plusieurs années, abonnements compris — pas seulement à
          l&apos;achat. <strong>Siège (ou licence)</strong> : une place
          payante, facturée par personne et par mois.{" "}
          <strong>Bande passante</strong> : le volume de données que votre
          site envoie à ses visiteurs, souvent facturé au gigaoctet.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. De quoi parle-t-on exactement" },
            { id: "tarifs", label: "3. Les tarifs réels, relevés le 18 juillet 2026" },
            { id: "chiffres-faux", label: "4. Quatre chiffres qu'on vous répète et qui n'existent pas" },
            { id: "plafonds", label: "5. Les plafonds techniques que les éditeurs publient" },
            { id: "changements", label: "6. Quand l'éditeur change les règles en cours de route" },
            { id: "cout-5-ans", label: "7. La courbe sur 5 ans : trois scénarios chiffrés" },
            { id: "reversibilite", label: "8. Le test de réversibilité en 6 questions" },
            { id: "juridique", label: "9. Propriété, RGPD, accessibilité" },
            { id: "quand-no-code", label: "10. Les 4 cas où le no-code est le bon choix" },
            { id: "quand-sur-mesure", label: "11. Les 5 signaux qui disent qu'il faut basculer" },
            { id: "migration", label: "12. Passer du no-code au sur-mesure" },
            { id: "verdict-par-profil", label: "13. Le verdict, profil par profil" },
            { id: "methode", label: "14. Méthode : trancher en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          <strong>Le no-code gagne au démarrage, le sur-mesure gagne sur la
          durée</strong>, et le point de bascule dépend presque entièrement
          du nombre d&apos;utilisateurs. Les outils no-code facturent par
          personne, par enregistrement ou par unité de traitement : votre
          facture grandit avec votre activité. Un développement sur mesure
          coûte cher une fois, puis presque rien.
        </p>
        <GuideTable
          headers={["Votre situation", "Verdict", "Pourquoi"]}
          rows={[
            ["Vous voulez valider une idée avant d'investir", "No-code, sans hésiter", "Deux semaines et quelques dizaines d'euros valent mieux que 20 000 € dans le vide"],
            ["Outil interne, moins de 10 personnes, faible enjeu", "No-code", "La facture reste basse et la panne ne coûte rien"],
            ["Automatiser des tâches entre logiciels existants", "No-code (Make, n8n)", "Aucun équivalent sur mesure raisonnable à ce prix"],
            ["Budget total sous 3 000 €", "No-code", "Le sur-mesure n'a aucun sens à ce niveau"],
            ["Outil ouvert à des dizaines d'utilisateurs externes", "Sur-mesure", "8 à 10 $ par utilisateur et par mois, indéfiniment, sur les outils no-code"],
            ["Le produit EST votre activité", "Sur-mesure", "Vous ne pouvez pas louer ce qui fait votre différence"],
            ["Données sensibles, exigence de localisation", "Sur-mesure ou outil avec hébergement UE", "Chez certains éditeurs, choisir où sont vos données coûte une offre Enterprise"],
          ]}
        />

        <h2 id="de-quoi-parle-t-on">2. De quoi parle-t-on exactement</h2>
        <p>
          « No-code » recouvre en réalité quatre familles d&apos;outils qui
          n&apos;ont ni les mêmes usages, ni les mêmes limites. Les
          confondre est la première source de mauvaise décision.
        </p>
        <GuideTable
          headers={["Famille", "Exemples", "À quoi ça sert", "Là où ça coince"]}
          rows={[
            ["Construction d'applications", "Bubble", "Créer une application web ou mobile complète sans coder", "Facturation à l'unité de traitement, nombre d'éditeurs plafonné"],
            ["Création de sites", "Webflow", "Sites vitrines et éditoriaux au design soigné", "Bande passante facturée cher, fonctions supprimées sans préavis"],
            ["Bases de données visuelles", "Airtable", "Remplacer un tableur par une base structurée et partagée", "5 requêtes par seconde et par base, coût par utilisateur externe"],
            ["Automatisation entre outils", "Make, n8n, Zapier", "Faire dialoguer des logiciels existants", "Facturation à l'action ou à l'exécution, qui grimpe vite en volume"],
          ]}
        />
        <p>
          Une nuance de vocabulaire, parce qu&apos;elle revient dans tous
          les devis : le <strong>low-code</strong> désigne les mêmes outils,
          mais avec la possibilité d&apos;ajouter un peu de code pour les
          cas que l&apos;interface visuelle ne couvre pas. C&apos;est
          rassurant sur le papier. En pratique, ce code vit dans la
          plateforme et ne s&apos;exporte pas davantage que le reste — la
          question de la réversibilité se pose exactement dans les mêmes
          termes.
        </p>
        <p>
          Une analogie utile pour la suite : le no-code, c&apos;est{" "}
          <strong>louer un local aménagé</strong>. Vous emménagez en
          quelques jours, vous ne payez rien à l&apos;entrée, et vous
          démarrez vite. Mais vous payez un loyer à vie, vous ne pouvez pas
          pousser les murs, et le propriétaire peut décider seul
          d&apos;augmenter le loyer ou de condamner une pièce. Le
          sur-mesure, c&apos;est faire construire : c&apos;est cher au
          départ, long, et ça vous appartient.
        </p>

        <InfoBox variant="blue" title="Le fil rouge de ce guide : Sophie, cabinet de recrutement, 14 salariés">
          Sophie dirige un cabinet de recrutement à Chambéry. Elle suit ses
          candidats dans un tableur partagé qui atteint ses limites :
          quatorze personnes y écrivent, deux versions circulent, et
          personne ne sait laquelle fait foi. Elle hésite entre un outil
          no-code monté en interne et un développement sur mesure. Nous la
          retrouverons à chaque étape du calcul — parce que sa situation est
          exactement celle où la réponse n&apos;est évidente <em>ni</em> dans
          un sens <em>ni</em> dans l&apos;autre.
        </InfoBox>

        <h2 id="tarifs">3. Les tarifs réels, relevés le 18 juillet 2026</h2>
        <p>
          Les comparatifs que nous avons lus reprennent des prix périmés,
          parfois de deux ans. Voici un relevé fait à la main sur les pages
          tarifaires officielles, le 18 juillet 2026. Les montants sont en
          dollars hors taxes, en facturation annuelle sauf mention
          contraire.
        </p>
        <GuideTable
          headers={["Outil", "Entrée de gamme", "Palier intermédiaire", "Ce qui est facturé"]}
          rows={[
            ["Bubble (web + mobile)", "59 $/mois — 175 000 unités de traitement", "209 $/mois — 250 000 unités, 2 éditeurs", "Unités de traitement, cumulées web et mobile"],
            ["Webflow (site)", "15 $/mois — sans gestion de contenu", "25 $/mois — avec gestion de contenu", "Par site, plus la bande passante en supplément"],
            ["Airtable", "20 $/licence/mois — 50 000 enregistrements", "45 $/licence/mois — 125 000 enregistrements", "Par personne et par mois"],
            ["Make", "9 $/mois — 10 000 crédits", "29 $/mois — 10 000 crédits, équipe", "1 crédit par action de module"],
            ["n8n", "20 €/mois — 2 500 exécutions", "50 €/mois — 10 000 exécutions", "Par exécution de scénario complet, utilisateurs illimités"],
          ]}
        />
        <InfoBox variant="blue" title="Trois pièges de facturation que le tableau ne montre pas">
          <strong>Le prix des dépassements chez Bubble n&apos;est pas
          publié.</strong> La page tarifaire indique que les dépassements
          sont facturés « par tranche de 1 000 unités supplémentaires »,
          sans donner le prix de la tranche. Nous ne l&apos;inventons pas :
          nous signalons l&apos;opacité.
          <br />
          <br />
          <strong>La bande passante Webflow revient à environ 0,40 $ par
          gigaoctet et par mois</strong>, d&apos;après les scénarios que
          l&apos;éditeur publie lui-même. Un hébergement standard se compte
          en centimes par gigaoctet. Sur un site à fort trafic, ce poste
          dépasse largement le prix de l&apos;abonnement.
          <br />
          <br />
          <strong>Le saut de palier de n8n est brutal</strong> : de 50 € à
          667 € par mois, soit treize fois le prix pour quatre fois le
          volume. C&apos;est le genre de marche qui transforme un budget
          maîtrisé en mauvaise surprise.
        </InfoBox>

        <h2 id="chiffres-faux">4. Quatre chiffres qu&apos;on vous répète et qui n&apos;existent pas</h2>
        <p>
          Cette section est celle qui nous a le plus surpris à écrire. Nous
          avons voulu vérifier les statistiques qui circulent contre le
          no-code — celles qui servent notre camp. Elles ne tiennent pas.
        </p>
        <GuideTable
          headers={["Le chiffre répété", "Ce qu'on trouve en remontant à la source"]}
          rows={[
            ["« 68 % des applications Bubble plantent sous 10 000 utilisateurs, 42 % des fondateurs abandonnent »", "Aucune trace de cette enquête, ni sur le forum officiel de l'éditeur, ni ailleurs. La source n'existe pas — et ce chiffre est diffusé par des agences de développement sur mesure"],
            ["« Bubble plafonne à environ 100 lignes par seconde »", "Aucune source éditeur. La documentation officielle des limites ne contient rien de tel"],
            ["« Gartner : 70 % des applications utiliseront du low-code d'ici 2025 »", "La prévision existe, mais elle date de 2021, elle est régulièrement mal attribuée, et personne ne l'a vérifiée après coup. Nous sommes en 2026 : aucune évaluation publiée"],
            ["« Le no-code, c'est 10 fois plus rapide et 80 % moins cher »", "Slogan commercial. Aucune étude méthodologiquement défendable derrière"],
          ]}
        />
        <p>
          Nous laissons ces chiffres de côté et nous nous appuyons
          uniquement sur ce que les éditeurs publient eux-mêmes. C&apos;est
          plus solide, et franchement plus parlant : les vraies limites sont
          plus contraignantes que les fausses.
        </p>
        <InfoBox variant="amber" title="Pourquoi ces chiffres existent : deux camps, deux intérêts">
          Il faut comprendre d&apos;où viennent ces statistiques pour
          savoir quoi en faire. <strong>D&apos;un côté, les éditeurs
          no-code et les agences qui construisent dessus</strong> : leur
          intérêt est de faire croire que tout est faisable sans code,
          d&apos;où les « dix fois plus rapide, 80 % moins cher » et les
          prévisions Gartner ressorties chaque année sans jamais être
          vérifiées. <strong>De l&apos;autre, les agences de développement
          sur mesure — nous</strong> : notre intérêt est de faire peur sur
          les plafonds et le verrouillage, d&apos;où des chiffres
          d&apos;échec spectaculaires que personne n&apos;a jamais mesurés.
          <br />
          <br />
          Le fait que nous ayons trouvé le chiffre fabriqué dans{" "}
          <em>notre</em> camp en dit long sur l&apos;état du débat. La seule
          sortie honnête consiste à ne citer que ce qui est vérifiable en
          trois clics : les pages tarifaires et la documentation des
          éditeurs. C&apos;est ce que fait ce guide, et c&apos;est pour cela
          que chaque chiffre y porte sa date de relevé.
        </InfoBox>

        <h2 id="plafonds">5. Les plafonds techniques que les éditeurs publient</h2>
        <p>
          Ces limites figurent dans la documentation officielle. Elles ne
          sont pas cachées — elles sont simplement rarement lues avant de
          signer.
        </p>
        <ul>
          <li>
            <strong>Airtable : 5 requêtes par seconde et par base.</strong>{" "}
            Au-delà, le service refuse la demande et impose 30 secondes
            d&apos;attente. Pour donner l&apos;échelle : cinq requêtes par
            seconde, c&apos;est l&apos;ordre de grandeur d&apos;un{" "}
            <em>seul</em> utilisateur actif sur une interface un peu dense.
            C&apos;est le plafond qui disqualifie Airtable comme socle
            d&apos;une application à trafic réel.
          </li>
          <li>
            <strong>Bubble : le nombre de personnes qui peuvent modifier
            l&apos;application est plafonné.</strong> Deux éditeurs à
            209 dollars par mois, cinq à 549 dollars. Sur un développement
            sur mesure, le nombre de développeurs pouvant travailler sur le
            code est illimité et gratuit.
          </li>
          <li>
            <strong>Make : un crédit par action.</strong> Un scénario
            comportant douze étapes, déclenché mille fois par mois, consomme
            douze mille crédits — soit davantage que ce qu&apos;incluent les
            formules courantes. La facturation à l&apos;action se calcule
            avant de s&apos;engager, pas après.
          </li>
          <li>
            <strong>Airtable : les utilisateurs externes se paient à
            part.</strong> Le module qui permet d&apos;ouvrir un accès à des
            personnes extérieures démarre autour de 120 dollars pour quinze
            invités mensuels, soit 8 à 10 dollars par personne et par mois.
          </li>
        </ul>

        <GuideInlineCTA
          title="Vous hésitez entre les deux ?"
          description="Décrivez votre besoin en 3 minutes. Réponse personnelle sous 24 h ouvrées, gratuite et sans engagement — y compris quand notre réponse est qu'un outil no-code suffira largement."
        />

        <h2 id="changements">6. Quand l&apos;éditeur change les règles en cours de route</h2>
        <p>
          C&apos;est le risque le plus sous-estimé, et il ne relève pas de
          la spéculation : les trois exemples ci-dessous sont documentés et
          récents.
        </p>
        <GuideTable
          headers={["Quand", "Ce qui a changé", "Conséquence pour les clients"]}
          rows={[
            ["Juin 2025", "Webflow supprime sa fonctionnalité Logic (automatisations internes)", "Les clients qui avaient bâti dessus ont dû reconstruire ailleurs"],
            ["29 janvier 2026", "Webflow supprime les comptes utilisateurs (espaces membres)", "Fonction structurante retirée : impossible de garder un espace membre sur la plateforme"],
            ["Mai 2026", "Webflow fusionne deux formules ; la bande passante incluse de l'ancienne offre Business passe de 100 à 50 Go, et les quotas d'hébergement de 10 à 2 millions de requêtes", "Dégradation appliquée automatiquement au renouvellement"],
          ]}
        />
        <InfoBox variant="amber" title="Ce que ces trois cas ont en commun">
          Aucun n&apos;était négociable, aucun n&apos;était prévisible, et
          tous se sont appliqués <strong>à des clients qui payaient</strong>.
          C&apos;est la contrepartie structurelle du modèle locatif : vous
          n&apos;achetez pas un outil, vous louez l&apos;accès à une
          plateforme dont l&apos;éditeur maîtrise seul le prix, le périmètre
          et le calendrier. Ce n&apos;est pas une critique morale — c&apos;est
          un risque à intégrer au calcul, au même titre qu&apos;une clause de
          bail.
        </InfoBox>

        <h2 id="cout-5-ans">7. La courbe sur 5 ans : trois scénarios chiffrés</h2>
        <p>
          Voici le calcul que personne ne fait, et qui tranche le débat mieux
          que n&apos;importe quel argument. Les hypothèses sont indiquées
          pour que vous puissiez les remplacer par les vôtres.
        </p>
        <FormulaBox>
          {`SCÉNARIO A — Outil interne, 12 utilisateurs
  No-code (base + automatisations)     ~ 45 $/user/mois
  → 12 × 45 × 12 mois                  ≈ 6 500 $/an
  → sur 5 ans                          ≈ 32 400 $
  Sur-mesure : 15 000 € + ~1 500 €/an  ≈ 22 500 €
  → CROISEMENT vers la 3e année

SCÉNARIO B — Outil ouvert à 100 partenaires externes
  No-code : 12 sièges internes + 100 invités
  → 6 500 $ + (100 × 9 $ × 12)         ≈ 17 300 $/an
  → sur 5 ans                          ≈ 86 500 $
  Sur-mesure : 25 000 € + ~2 500 €/an  ≈ 37 500 €
  → CROISEMENT dès la 2e année

SCÉNARIO C — Prototype pour valider une idée
  No-code : 2 mois × 60 $              ≈ 120 $
  Sur-mesure : 15 000 € minimum
  → LE NO-CODE GAGNE, et de très loin`}
        </FormulaBox>
        <p>
          <strong>Appliquons-le à Sophie.</strong> Son cabinet compte
          quatorze personnes, toutes internes, et aucun candidat
          n&apos;aura accès à l&apos;outil — les échanges continueront par
          e-mail. Elle est donc dans le scénario A, avec deux personnes de
          plus. Une base no-code correctement outillée lui coûterait autour
          de 7 500 dollars par an, soit environ 37 500 dollars sur cinq
          ans. Un développement sur mesure pour ce périmètre se situerait
          vers 15 000 euros, plus l&apos;entretien : environ 22 500 euros
          sur la même durée.
        </p>
        <p>
          Le croisement se produit dans sa troisième année. Ce qui veut
          dire, très concrètement : <strong>si elle compte garder cet outil
          plus de trois ans, le sur-mesure est moins cher ; si elle
          n&apos;en sait rien, le no-code est le pari raisonnable</strong>.
          Et comme son processus de recrutement n&apos;a jamais été formalisé
          — c&apos;est justement pour cela que le tableur a dérivé —, notre
          conseil serait de commencer en no-code, précisément pour découvrir
          ce dont elle a besoin avant de le faire construire.
        </p>
        <p>
          Lecture honnête de ces trois calculs :{" "}
          <strong>le no-code n&apos;est pas « moins cher », il est moins
          cher au démarrage et plus cher à l&apos;échelle</strong>. Le
          facteur qui décide n&apos;est presque jamais la complexité
          technique — c&apos;est le nombre d&apos;utilisateurs, et surtout
          la présence d&apos;utilisateurs externes. Un outil pour douze
          personnes peut rester en no-code des années sans que cela pose
          problème. Le même outil ouvert à cent partenaires devient un
          mauvais calcul dès la deuxième année.
        </p>
        <p>
          Notre{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">guide du prix
          d&apos;un logiciel sur mesure</Link> détaille la méthode de
          chiffrage du second terme de l&apos;équation, et notre{" "}
          <Link href="/guides/combien-coute-un-saas">guide du coût d&apos;un
          SaaS</Link> traite le cas où l&apos;outil devient un produit.
        </p>

        <h2 id="reversibilite">8. Le test de réversibilité en 6 questions</h2>
        <p>
          À passer <strong>avant</strong> de signer, pas le jour où vous
          voudrez partir. Six questions, vingt minutes, et vous saurez à quoi
          vous vous engagez réellement.
        </p>
        <p>
          Avant les six questions, un tableau qui répond à la plus
          importante d&apos;entre elles. Ce que chaque outil laisse
          réellement sortir, d&apos;après leur documentation officielle :
        </p>
        <GuideTable
          headers={["Outil", "Vos données", "Votre logique métier", "Le détail qui compte"]}
          rows={[
            ["Webflow", "Oui, séparément en CSV", "Le design seulement", "L'export de code n'existe que sur les formules Workspace, et il restitue une coquille vide pour un site à contenu : les listes s'affichent sans données"],
            ["Bubble", "Oui", "Non", "Aucune fonction d'export du code source. La demande est ouverte sur le forum officiel de l'éditeur, dans la catégorie « idée » — c'est-à-dire non implémentée"],
            ["Airtable", "Oui, en CSV ou par interface de programmation", "Non", "Les automatisations et les vues ne s'exportent pas"],
            ["Make, Softr, Glide", "Oui", "Non", "Même logique : les données sortent, les règles restent"],
            ["Développement sur mesure", "Oui", "Oui — c'est du code", "Le dépôt vous appartient, n'importe quel développeur peut le reprendre"],
          ]}
        />
        <p>
          Ce tableau explique la mécanique du verrouillage bien mieux
          qu&apos;un discours : <strong>ce n&apos;est pas vos données qui
          vous retiennent, c&apos;est le travail que vous avez investi dans
          les règles</strong>. Et c&apos;est aussi pourquoi un client
          n&apos;a aucun levier quand l&apos;éditeur change son modèle de
          facturation : il ne peut ni exporter, ni héberger ailleurs, ni
          négocier.
        </p>
        <ol>
          <li>
            <strong>Puis-je exporter mes données dans un format
            standard ?</strong> Réponse généralement oui. C&apos;est la
            partie facile.
          </li>
          <li>
            <strong>Puis-je exporter ma logique métier ?</strong> Réponse
            généralement non — et c&apos;est le point décisif. Les règles
            que vous construisez dans l&apos;éditeur visuel n&apos;existent
            que là. En partant, vous emportez vos données et vous
            reconstruisez tout le reste.
          </li>
          <li>
            <strong>Qui possède le compte ?</strong> S&apos;il est au nom
            d&apos;un prestataire ou d&apos;un salarié, réglez ce point
            aujourd&apos;hui.
          </li>
          <li>
            <strong>Que dit exactement la licence sur l&apos;usage
            commercial ?</strong> Question loin d&apos;être théorique : n8n
            interdit de revendre un produit dont la valeur dépend
            substantiellement de l&apos;outil, ou d&apos;en héberger une
            instance et d&apos;en facturer l&apos;accès.
          </li>
          <li>
            <strong>Que se passe-t-il si le prix double l&apos;an
            prochain ?</strong> Regardez l&apos;historique de l&apos;éditeur
            plutôt que ses promesses — la section 6 donne trois précédents.
          </li>
          <li>
            <strong>Combien de personnes hors de mon entreprise savent
            maintenir cet outil ?</strong> Si la réponse est « une », vous
            avez un problème de continuité, exactement comme avec un
            développeur unique.
          </li>
        </ol>

        <h2 id="juridique">9. Propriété, RGPD, accessibilité</h2>
        <p>
          Trois points juridiques que les comparatifs ignorent et qui
          peuvent coûter cher.
        </p>
        <p>
          <strong>La propriété.</strong> Sur un développement sur mesure, la
          question se règle par une clause de cession conforme à
          l&apos;article L131-3 du Code de la propriété intellectuelle — en
          droit français, payer ne rend pas automatiquement propriétaire du
          code. Sur du no-code, la question ne se pose même pas : il
          n&apos;y a pas de code à céder. Vous n&apos;êtes propriétaire que
          de vos données.
        </p>
        <p>
          <strong>Le RGPD et la localisation des données.</strong> C&apos;est
          le point à vérifier en premier si vous traitez des données
          sensibles. Chez Bubble, le choix de la localisation
          d&apos;hébergement n&apos;est disponible que sur l&apos;offre
          Enterprise, sur devis : sur les formules courantes, vous ne
          choisissez pas où sont vos données. Make, à l&apos;inverse,
          propose un hébergement européen sur toutes ses formules. Notre
          page <Link href="/services/securite-rgpd">sécurité et RGPD</Link>{" "}
          détaille ce que cela implique.
        </p>
        <p>
          <strong>L&apos;accessibilité.</strong> La réglementation
          européenne sur l&apos;accessibilité s&apos;applique depuis le
          28 juin 2025 à de nombreux services en ligne vendus aux
          particuliers. Sur un outil no-code, votre marge de manœuvre pour
          corriger un défaut d&apos;accessibilité est limitée à ce que
          l&apos;éditeur permet. Sur un développement sur mesure, tout est
          modifiable.
        </p>

        <h2 id="quand-no-code">10. Les 4 cas où le no-code est le bon choix</h2>
        <p>
          Nous vendons du développement sur mesure. Voici néanmoins les
          situations où nous vous dirons d&apos;aller vers le no-code —
          elles nous font perdre des missions, et elles sont réelles.
        </p>
        <ul>
          <li>
            <strong>Valider une idée avant d&apos;investir.</strong>{" "}
            Construire un prototype en deux semaines pour quelques dizaines
            d&apos;euros vaut infiniment mieux que dépenser 20 000 euros sur
            une intuition. C&apos;est le meilleur usage du no-code, et de
            loin.
          </li>
          <li>
            <strong>Un outil interne à faible enjeu.</strong> Moins de dix
            personnes, une panne qui ne coûte rien, un processus stable :
            la facture reste basse et le risque est nul.
          </li>
          <li>
            <strong>Automatiser des tâches entre logiciels
            existants.</strong> Make et n8n sont excellents sur ce terrain,
            et il n&apos;existe pas d&apos;équivalent sur mesure raisonnable
            à ce prix. Nous les utilisons nous-mêmes.
          </li>
          <li>
            <strong>Un budget total inférieur à 3 000 euros.</strong> À ce
            niveau, le sur-mesure n&apos;a aucun sens. Nous vous le dirons
            au premier rendez-vous plutôt que de vous vendre un forfait
            surdimensionné.
          </li>
        </ul>

        <h2 id="quand-sur-mesure">11. Les 5 signaux qui disent qu&apos;il faut basculer</h2>
        <p>
          À l&apos;inverse, voici les signaux de saturation. Il en faut au
          moins trois pour que le calcul vaille la peine d&apos;être fait
          sérieusement.
        </p>
        <ol>
          <li>
            <strong>Votre facture mensuelle dépasse le coût amorti
            d&apos;un développement sur cinq ans.</strong> C&apos;est le
            calcul de la section 7, appliqué à vos chiffres.
          </li>
          <li>
            <strong>Vous passez plus de temps à contourner l&apos;outil
            qu&apos;à l&apos;utiliser.</strong> Les contournements
            s&apos;empilent, et chacun devient une fragilité.
          </li>
          <li>
            <strong>Une seule personne sait comment il fonctionne.</strong>{" "}
            C&apos;est un risque de continuité identique à celui d&apos;un
            développeur unique — souvent invoqué contre le sur-mesure,
            rarement contre le no-code.
          </li>
          <li>
            <strong>Vous exportez vers un tableur pour faire ce que
            l&apos;outil ne sait pas faire.</strong> Signal classique : la
            plateforme a atteint sa limite fonctionnelle.
          </li>
          <li>
            <strong>Vous avez déjà subi un changement de conditions
            imposé.</strong> S&apos;il y en a eu un, il y en aura
            d&apos;autres.
          </li>
        </ol>

        <h2 id="migration">12. Passer du no-code au sur-mesure</h2>
        <p>
          C&apos;est le scénario que nous rencontrons le plus souvent, et il
          a un avantage considérable qu&apos;on oublie de mentionner :{" "}
          <strong>après un ou deux ans d&apos;usage réel, vous savez
          exactement ce dont vous avez besoin</strong>. Le premier risque
          d&apos;un développement sur mesure — construire la mauvaise chose —
          est fortement réduit. Votre outil no-code a servi de cahier des
          charges vivant.
        </p>
        <p>
          Ce qui se migre : vos données, sans difficulté majeure. Ce qui ne
          se migre pas : la logique métier, à reconstruire intégralement.
          Comptez donc le budget d&apos;un développement neuf, diminué de
          l&apos;économie de cadrage, augmenté de la reprise des données.
        </p>
        <p>
          Notre recommandation de méthode : ne basculez jamais tout d&apos;un
          coup. Gardez l&apos;outil no-code en fonctionnement pendant que le
          nouveau se construit, migrez un périmètre à la fois, et ne coupez
          l&apos;ancien qu&apos;une fois le nouveau éprouvé. C&apos;est plus
          long, et c&apos;est ce qui évite les migrations catastrophiques.
        </p>

        <h2 id="verdict-par-profil">13. Le verdict, profil par profil</h2>
        <GuideTable
          headers={["Votre profil", "Notre verdict", "Pourquoi"]}
          rows={[
            ["Créateur d'entreprise qui teste une idée", "No-code", "Le coût d'un prototype est sans commune mesure avec celui d'un développement"],
            ["TPE, outil interne pour 5 à 10 personnes", "No-code", "La facture reste maîtrisée et l'enjeu est faible"],
            ["PME, outil interne pour 20 personnes et plus", "Calculez sur 5 ans", "Le croisement se produit généralement entre la 2e et la 3e année"],
            ["Outil ouvert à des clients ou partenaires", "Sur-mesure", "Le coût par utilisateur externe rend le no-code intenable à l'échelle"],
            ["Éditeur de logiciel : le produit EST l'activité", "Sur-mesure", "On ne loue pas ce qui fait sa différence, et la propriété devient stratégique"],
            ["Automatisation entre logiciels existants", "No-code", "Make et n8n sont les bons outils, y compris pour nous"],
            ["Données de santé, RH ou sensibles", "Sur-mesure ou outil à hébergement UE vérifié", "La localisation des données n'est pas négociable et n'est pas garantie partout"],
          ]}
        />

        <InfoBox variant="emerald" title="Ce que nous avons conseillé à Sophie">
          Commencer en no-code, sur une base structurée, pour un coût de
          quelques centaines d&apos;euros par an. Non pas parce que le
          sur-mesure serait mauvais pour elle — le calcul montre
          l&apos;inverse au-delà de trois ans —, mais parce que{" "}
          <strong>son processus de recrutement n&apos;est pas encore
          écrit</strong>. Développer sur mesure aujourd&apos;hui reviendrait
          à figer dans du code une organisation qu&apos;elle est en train de
          découvrir.
          <br />
          <br />
          Le rendez-vous est pris dans dix-huit mois : à ce moment-là, elle
          saura exactement ce dont son cabinet a besoin, son outil no-code
          aura servi de cahier des charges vivant, et le développement se
          fera sans le premier risque de tout projet — construire la
          mauvaise chose. C&apos;est une mission que nous ne prenons pas
          maintenant, et c&apos;est la bonne décision.
        </InfoBox>

        <h2 id="methode">14. Méthode : trancher en 5 étapes</h2>
        <ol>
          <li>
            <strong>Comptez vos utilisateurs, en séparant internes et
            externes.</strong> C&apos;est la variable qui décide, avant la
            complexité technique.
          </li>
          <li>
            <strong>Faites le calcul sur cinq ans</strong> avec la trame de
            la section 7 et les tarifs de la section 3, remplacés par ceux
            que vous relèverez vous-même le jour de votre décision.
          </li>
          <li>
            <strong>Passez le test de réversibilité</strong> de la
            section 8. Vingt minutes, et la question 2 vous donnera
            l&apos;essentiel de la réponse.
          </li>
          <li>
            <strong>Vérifiez la localisation de vos données</strong> si vous
            traitez autre chose que des informations publiques.
          </li>
          <li>
            <strong>Commencez petit, quel que soit le camp choisi.</strong>{" "}
            En no-code, un premier périmètre resserré. En sur-mesure, une
            première version utilisable plutôt qu&apos;un produit complet —
            c&apos;est l&apos;objet de notre{" "}
            <Link href="/methode">Discovery Sprint</Link>, deux jours de
            cadrage à 1 500 €, intégralement déduits si le projet se lance.
          </li>
        </ol>
        <p>
          Nos projets sur mesure démarrent à 15 000 € pour une première
          version d&apos;outil réellement utilisable, au forfait fixe
          contractuel, code déposé sur un compte à votre nom. Le détail est
          sur notre page{" "}
          <Link href="/services/outils-internes-sur-mesure">outils internes
          sur mesure</Link> et dans nos{" "}
          <Link href="/tarifs">tarifs publics</Link>.
        </p>

        <GuideInlineCTA
          title="Un outil à construire, un no-code qui sature ?"
          description="Décrivez votre situation en 3 minutes : réponse personnelle sous 24 h ouvrées, gratuite et sans engagement. Si le no-code suffit, nous vous le dirons — c'est déjà arrivé."
        />

        <InfoBox variant="emerald" title="À retenir : les 6 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>5 requêtes/seconde</strong> : le plafond d&apos;Airtable par base — l&apos;ordre de grandeur d&apos;un seul utilisateur actif.</li>
            <li><strong>2 éditeurs</strong> : le nombre de personnes pouvant modifier une application Bubble à 209 $/mois.</li>
            <li><strong>0,40 $ par gigaoctet</strong> : le coût de la bande passante chez Webflow, quand un hébergement standard se compte en centimes.</li>
            <li><strong>× 13 pour × 4</strong> : le saut de palier de n8n, de 50 € à 667 € par mois.</li>
            <li><strong>8 à 10 $ par mois</strong> : le prix d&apos;un utilisateur externe sur Airtable, indéfiniment.</li>
            <li><strong>2e à 3e année</strong> : le moment où la courbe du sur-mesure passe sous celle du no-code sur un outil interne.</li>
          </ul>
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Tarifs et limites relevés le 18 juillet 2026 sur les pages
          officielles :{" "}
          <a href="https://bubble.io/pricing" target="_blank" rel="noopener noreferrer">Bubble</a> ;{" "}
          <a href="https://webflow.com/pricing" target="_blank" rel="noopener noreferrer">Webflow</a> ;{" "}
          <a href="https://www.airtable.com/pricing" target="_blank" rel="noopener noreferrer">Airtable</a> et{" "}
          <a href="https://airtable.com/developers/web/api/rate-limits" target="_blank" rel="noopener noreferrer">ses limites d&apos;interface de programmation</a> ;{" "}
          <a href="https://www.make.com/en/pricing" target="_blank" rel="noopener noreferrer">Make</a> ;{" "}
          <a href="https://n8n.io/pricing/" target="_blank" rel="noopener noreferrer">n8n</a> et sa{" "}
          <a href="https://docs.n8n.io/sustainable-use-license/" target="_blank" rel="noopener noreferrer">Sustainable Use License</a>.
          Cadre juridique :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958" target="_blank" rel="noopener noreferrer">article L131-3 du Code de la propriété intellectuelle</a>.
          Les changements de conditions cités en section 6 proviennent des
          annonces publiées par l&apos;éditeur concerné.
        </p>
        <p className="text-sm">
          Les tarifs des éditeurs no-code changent fréquemment : le relevé
          ci-dessus est daté, et nous le réactualisons périodiquement.
          Vérifiez les montants sur les pages officielles le jour de votre
          décision. Les scénarios de coût sur cinq ans sont des modèles dont
          les hypothèses sont affichées, pas des devis. Cet article ne
          constitue pas un conseil juridique personnalisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
