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

const guide = getGuide("choisir-son-agence-web");

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
  wordCount: 5290,
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
      "Achat de prestation digitale",
      "Contrats de prestation",
      "Propriété du code source",
      "Core Web Vitals",
      "SEO technique",
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
      name: "Choisir son agence web",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Comment savoir si une agence web est sérieuse ?",
    answer:
      "Trois signaux valent mieux que dix arguments commerciaux. D'abord, elle pose des questions avant de chiffrer : une agence qui annonce un prix au premier rendez-vous sans avoir compris votre activité vend un catalogue, pas un projet. Ensuite, ses réalisations sont vérifiables : elle vous donne trois adresses de sites en ligne, et vous pouvez les tester vous-même sur PageSpeed Insights, l'outil gratuit de Google. Enfin, elle accepte de vous mettre en relation avec deux clients récents — un refus sur ce point, justifié par la confidentialité, est un signal en soi. Ajoutez une vérification administrative gratuite sur Pappers, et vous avez éliminé l'essentiel du risque en une heure.",
  },
  {
    question: "Quel est le prix normal d'un site internet fait par une agence ?",
    answer:
      "Les fourchettes constatées sur le marché français en 2026 : 2 000 à 8 000 € pour un site vitrine, 3 000 à 15 000 € pour un e-commerce sur plateforme, environ 7 000 € et au-delà pour du sur-mesure — un plancher qui a baissé ces deux dernières années, la construction demandant moins de jours qu'avant. L'écart ne s'explique presque jamais par « le même site en moins cher » : il vient du périmètre réellement couvert — rédaction des contenus, référencement, recette, garantie, propriété du code — et de la nature du livrable, thème acheté ou interface dessinée pour vous. Nos guides détaillent chaque fourchette par type de projet. La règle de lecture : un devis à 300 € pour un site professionnel est mathématiquement impossible sans thème revendu ou montage financier caché.",
  },
  {
    question: "Quel acompte une agence peut-elle demander ?",
    answer:
      "L'usage du marché est de 25 à 50 % à la commande, le solde à la livraison, avec des jalons intermédiaires sur les projets qui dépassent deux mois. Un échéancier sain ressemble à 30 % à la signature, 30 % à la validation des maquettes, 40 % à la mise en ligne : chaque paiement est adossé à un livrable que vous pouvez vérifier. Au-delà de 50 % avant tout livrable, vous perdez votre principal levier de négociation en cas de dérapage. Un acompte de 100 % d'avance est éliminatoire, quelle que soit la remise proposée en échange — c'est précisément la structure des montages qui tournent mal.",
  },
  {
    question: "Faut-il se méfier des sites internet « gratuits » ou à abonnement ?",
    answer:
      "Oui, et la justice l'a tranché. Le schéma classique : un démarchage téléphonique, un « site offert, vous ne payez que la maintenance », puis deux contrats séparés — la prestation de création d'un côté, une location financière cédée à un organisme tiers de l'autre. Vous payez le loueur pendant 48 à 63 mois, même si le site n'est jamais livré ou si le prestataire disparaît. En janvier 2026, la Cour de cassation a confirmé la condamnation pénale d'un loueur, filiale d'un grand groupe bancaire, à 1,2 million d'euros d'amende pour pratiques commerciales trompeuses, avec une centaine de professionnels indemnisés — coiffeurs, garagistes, infirmières. Les contrats en cause totalisaient 20 000 à 30 000 € pour des prestations valant une fraction de ce prix.",
  },
  {
    question: "Serai-je vraiment propriétaire de mon site ?",
    answer:
      "Pas par défaut, et c'est le point le plus méconnu. En droit français, le code et le design appartiennent d'abord à celui qui les a créés : payer ne rend pas propriétaire. Pour que le code, le design et les contenus vous appartiennent, il faut une clause écrite de cession. L'article L131-3 du Code de la propriété intellectuelle en fixe le contenu : chaque droit cédé doit être mentionné distinctement, avec son étendue, sa destination, son lieu et sa durée. Sans cette clause, vous n'avez qu'une tolérance d'usage. Un tribunal parisien a condamné pour contrefaçon, en 2011, un client qui avait fait reproduire « son » site par un autre prestataire sans cession écrite. Exigez la clause, et le nom de domaine enregistré à votre nom.",
  },
  {
    question: "Qu'est-ce qu'une clause de réversibilité et pourquoi l'exiger ?",
    answer:
      "C'est l'engagement écrit de votre prestataire à vous restituer, le jour où vous partez, tout ce qui vous appartient : le code source, les données exportées dans un format exploitable, les accès d'administration, la documentation, et les configurations d'hébergement. Elle prévoit aussi un délai et une assistance au prestataire suivant. Aucune obligation légale générale ne l'impose entre entreprises : si elle n'est pas au contrat, elle n'existe pas. Son absence transforme un changement d'agence en négociation sous contrainte, souvent au pire moment. C'est une clause qu'un prestataire confiant dans son travail accepte sans discuter — la réaction à votre demande est en soi un test.",
  },
  {
    question: "Une agence m'a démarché par téléphone, puis-je annuler après signature ?",
    answer:
      "Souvent oui, et c'est peu connu. L'article L221-3 du Code de la consommation étend les protections du consommateur à certains professionnels. Trois conditions : cinq salariés au maximum, un contrat signé hors de votre établissement — donc en démarchage — et un objet étranger à votre activité principale. Un boulanger ou un kinésithérapeute qui signe pour un site internet est concerné : il dispose alors d'un délai de rétractation de quatorze jours. La Cour de cassation a confirmé cette lecture en janvier 2026 dans une affaire de location financière de sites web. Si le formulaire de rétractation ne vous a pas été remis, le délai est prolongé. Agissez vite et par écrit recommandé.",
  },
  {
    question: "Vaut-il mieux une agence ou un freelance ?",
    answer:
      "La vraie question n'est pas la taille du prestataire, mais le temps que vous pouvez consacrer au projet : un freelance suppose que vous pilotiez, une agence suppose que vous validiez. Si vous avez quelqu'un en interne capable de trancher chaque semaine et de relancer, un excellent freelance vous coûtera moins cher pour un résultat équivalent sur un projet bien cadré. Si personne chez vous n'a ce temps, payez pour que quelqu'un le prenne : c'est ce que vend une agence, en plus de réunir design, développement et référencement sous un même contrat. Notre guide dédié compare les deux options budget par budget, avec notre biais déclaré.",
  },
  {
    question: "Faut-il choisir une agence près de chez moi ?",
    answer:
      "Si votre clientèle est locale, la proximité vaut surtout pour une raison rarement citée : l'agence connaît vos concurrents directs et peut le montrer dès le premier rendez-vous. Demandez-le-lui — l'incapacité à citer trois concurrents locaux et à dire ce que font leurs sites en dit plus long que l'adresse sur la carte. À l'inverse, une agence installée à trois rues de chez vous ne vous protège de rien si elle échoue aux vérifications de ce guide : la visio a réglé la question de la distance, pas celle de la compétence. Utilisez donc la proximité comme critère de départage entre deux prestataires équivalents, jamais comme critère de sélection principal. Un test simple pour trancher : demandez à chacun de citer trois de vos concurrents locaux et de dire ce que valent leurs sites. Celui qui y arrive a fait le travail, qu'il soit à trois rues ou à trois cents kilomètres.",
  },
  {
    question: "Combien de temps faut-il pour créer un site avec une agence ?",
    answer:
      "Comptez 4 à 12 semaines pour un site vitrine et 2 à 6 mois pour un e-commerce, en sachant que votre propre réactivité pèse sur la moitié du délai. Le décalage vient de là : un site vitrine sur mesure représente une vingtaine de jours de travail, mais s'étale sur huit semaines parce que la validation des maquettes, la fourniture des textes et des photos et les retours de vos différents décideurs rythment le projet. C'est même le premier facteur de retard constaté par les professionnels du secteur. La parade est simple : désignez un décideur unique, bloquez vos créneaux de validation dès le calendrier initial, et préparez vos contenus avant le démarrage.",
  },
  {
    question: "Que doit contenir un devis de site internet ?",
    answer:
      "Six éléments, tous vérifiables. Le périmètre détaillé — nombre de pages, fonctionnalités, qui rédige les contenus, ce que couvre le référencement. La technologie retenue, avec la justification pour votre besoin précis. La ventilation en jours ou en postes, cadrage, design, développement, recette et mise en ligne compris. L'échéancier de paiement adossé à des jalons. La propriété des livrables, avec la clause de cession. Et surtout, la liste de ce qui n'est PAS inclus : c'est la ligne la plus utile d'un devis honnête. Un document qui annonce « création de site : 3 500 € » sans autre détail n'est pas un devis, c'est une intention de vente.",
  },
  {
    question: "Combien coûte la maintenance d'un site et que doit-elle couvrir ?",
    answer:
      "Comptez 30 à 200 € par mois pour un site professionnel courant, davantage pour une boutique. Le périmètre doit être écrit noir sur blanc : mises à jour de sécurité, sauvegardes avec leur fréquence et leur durée de conservation, corrections de dysfonctionnements, délai maximal d'intervention en cas de panne, et le volume de petites modifications inclus chaque mois. Sans ce détail, vous payez une assurance dont personne ne connaît les garanties. Notez que le coût dépend surtout du socle technique : un site construit sur un CMS chargé d'extensions demande une vigilance hebdomadaire, là où un site statique moderne se limite à ses dépendances. Notre guide dédié chiffre les deux régimes.",
  },
  {
    question: "Que faire si mon agence ne livre pas ou retient mon site ?",
    answer:
      "Dans l'ordre. Rassemblez les preuves écrites : devis signé, échanges, jalons manqués, livrables reçus. Envoyez une mise en demeure en recommandé avec accusé de réception, fixant un délai raisonnable et rappelant les clauses du contrat — réversibilité, calendrier, pénalités éventuelles. En parallèle, saisissez le Médiateur des entreprises : ce dispositif public est gratuit et souvent plus rapide qu'un contentieux. Si le blocage porte sur votre nom de domaine, une procédure dédiée existe auprès de l'AFNIC pour les domaines en .fr, pour un coût modeste et un délai d'environ deux mois. Le tribunal reste l'ultime recours, avec une procédure simplifiée sous 5 000 €.",
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
          { label: "Choisir son agence web" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Tout le monde publie des listes de critères. Ce guide donne autre chose : dix-huit vérifications que vous pouvez mener vous-même gratuitement en une heure, treize questions avec le barème des bonnes et des mauvaises réponses, les pièges confirmés par la Cour de cassation — et la méthode pour nous auditer, nous aussi."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "18 vérifications gratuites, 1 heure de travail", description: "", color: "violet" },
          { number: "02", title: "Payer ne rend pas propriétaire du code", description: "", color: "blue" },
          { number: "03", title: "1,2 M€ d'amende : l'abonnement-piège jugé en 2026", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/agence-web-ou-freelance", label: "Agence web ou freelance ?" },
          { href: "/guides/cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/tjm-developpeur-web", label: "TJM développeur web" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/realisations", label: "Nos réalisations" },
        ]}
        faqTitle="Choisir son agence web : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Choisir une agence web, c&apos;est confier plusieurs milliers
          d&apos;euros et l&apos;image de son entreprise à des gens
          dont on ne sait pas évaluer le travail. Le secteur n&apos;a{" "}
          <strong>aucune barrière à l&apos;entrée, aucune
          certification obligatoire, aucun ordre professionnel</strong>{" "}
          — n&apos;importe qui peut ouvrir une agence web demain
          matin. La vérification vous incombe donc entièrement. Bonne
          nouvelle : elle est faisable en une heure, gratuitement, et
          ce guide vous donne la procédure exacte.
        </p>

        <InfoBox variant="blue" title="Notre conflit d'intérêt, déclaré d'emblée">
          Hagnéré Code est une agence web. Nous écrivons donc un guide
          sur la façon de choisir… des gens comme nous. Deux garde-fous
          : d&apos;abord, toutes les vérifications de ce guide sont
          neutres — elles s&apos;appliquent à n&apos;importe quel
          prestataire, y compris nous. Ensuite, la section 15 vous
          explique explicitement{" "}
          <strong>comment nous auditer</strong> : testez
          hagnere-code.ai sur PageSpeed Insights, vérifiez notre
          entreprise sur Pappers, examinez le code source de nos
          réalisations. Si un critère de ce guide nous dessert, il
          reste dans le guide.
        </InfoBox>

        <InfoBox variant="amber" title="Les 11 mots de ce guide, traduits en français courant">
          <strong>Lighthouse</strong> : l&apos;outil gratuit de Google
          qui note la qualité technique d&apos;une page sur 100.{" "}
          <strong>Core Web Vitals</strong> : les trois mesures
          officielles de Google sur la vitesse et la stabilité
          d&apos;une page. <strong>CMS</strong> : le logiciel qui
          permet de modifier son site sans coder (WordPress en est
          un). <strong>Thème</strong> : une maquette toute faite,
          achetée et utilisée par des milliers d&apos;autres sites.{" "}
          <strong>Sur-mesure</strong> : une interface dessinée et
          développée pour vous seul.{" "}
          <strong>React et Next.js</strong> : deux outils de
          développement modernes qui servent à construire un site
          entièrement écrit sur mesure, sans thème acheté ni CMS
          installé — c&apos;est ce qui permet des pages très rapides.{" "}
          <strong>Cession de droits</strong> : l&apos;acte écrit par
          lequel le créateur vous transfère la propriété de son
          travail. <strong>Réversibilité</strong> : l&apos;engagement
          de tout vous restituer si vous changez de prestataire.{" "}
          <strong>Recette</strong> : la phase de tests et de validation
          avant la mise en ligne. <strong>Location financière</strong> :
          un contrat de loyer mensuel conclu avec un organisme tiers,
          souvent sur 48 mois et quasi impossible à rompre.{" "}
          <strong>Mentions légales</strong> : les informations
          d&apos;identification obligatoires sur tout site
          professionnel.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "marche", label: "2. Le marché : pourquoi la vérification vous incombe" },
            { id: "definir-besoin", label: "3. Étape zéro : savoir ce que vous achetez" },
            { id: "tester-realisations", label: "4. Tester 3 réalisations en 10 minutes" },
            { id: "verifier-entreprise", label: "5. Vérifier l'entreprise, gratuitement" },
            { id: "portfolio-reel", label: "6. Croiser le portfolio avec le code réel" },
            { id: "appeler-clients", label: "7. Appeler deux clients : les 5 questions" },
            { id: "leur-propre-site", label: "8. Auditer leur propre site" },
            { id: "questions-rdv", label: "9. Les 13 questions du rendez-vous, avec le barème" },
            { id: "red-flags", label: "10. Les signaux d'alerte, ancrés dans le droit" },
            { id: "abonnement-piege", label: "11. L'abonnement-piège : ce que la justice a tranché" },
            { id: "contrat", label: "12. Les 6 clauses non négociables du contrat" },
            { id: "comparer-devis", label: "13. Comparer deux devis sans se tromper" },
            { id: "locale-ou-non", label: "14. Locale ou distante, agence ou freelance" },
            { id: "auditez-nous", label: "15. Comment nous auditer, nous" },
            { id: "litige", label: "16. En cas de litige : les recours réels" },
            { id: "methode", label: "17. Méthode : choisir en 6 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          Choisir une agence web se résume à{" "}
          <strong>trois vérifications objectives et une lecture de
          contrat</strong>. Testez trois de ses réalisations sur
          PageSpeed Insights en mode mobile : trois sites sous 50, ce
          n&apos;est plus la faute des clients. Vérifiez
          l&apos;entreprise sur Pappers : ancienneté, effectif réel,
          procédures en cours. Croisez son discours avec le code de ses
          références : une agence « sur-mesure » dont tout le portfolio
          tourne sur un thème acheté vous vend autre chose que ce
          qu&apos;elle annonce. Puis exigez au contrat la cession des
          droits, le domaine à votre nom et la réversibilité.
        </p>
        <GuideTable
          headers={["Vérification", "Outil", "Temps", "Ce qui doit vous alerter"]}
          rows={[
            ["Performance des réalisations", "PageSpeed Insights (gratuit)", "10 min", "3 sites sur 3 sous 50 en mobile"],
            ["Santé de l'entreprise", "Pappers ou Annuaire des Entreprises (gratuit)", "10 min", "Procédure collective en cours (sauvegarde, redressement ou liquidation), société de moins d'un an, effectif incompatible avec le discours"],
            ["Cohérence du portfolio", "Code source de la page, extension gratuite Wappalyzer (elle affiche en un clic sur quelle technologie tourne un site)", "10 min", "Discours sur-mesure, réalité 100 % thème acheté"],
            ["Références clients", "Deux appels téléphoniques", "20 min", "Refus de fournir des contacts"],
            ["Site de l'agence elle-même", "PageSpeed + mentions légales", "10 min", "Site lent, mentions légales absentes, aucun contenu publié depuis dix-huit mois"],
          ]}
        />
        <p>
          Les sections 4 à 8 détaillent ces cinq blocs en dix-huit
          contrôles élémentaires : 1 test de performance mené sur trois
          réalisations, 5 points de vérification d&apos;entreprise,
          4 contrôles de portfolio, 5 questions aux clients référence
          et 3 contrôles sur le site de l&apos;agence.
        </p>
        <p>
          Une heure de travail, zéro euro, et vous aurez écarté
          l&apos;essentiel des mauvaises surprises. Le reste de ce
          guide détaille chaque étape, puis passe au contrat — là où se
          jouent les vrais dégâts.
        </p>

        <h2 id="marche">2. Le marché : pourquoi la vérification vous incombe</h2>
        <p>
          Premier constat, et il est méthodologique :{" "}
          <strong>personne ne sait combien il y a d&apos;agences web en
          France</strong>. Ni l&apos;INSEE ni aucun syndicat ne publie
          ce chiffre, parce que ces entreprises se répartissent entre
          plusieurs codes d&apos;activité — programmation, conseil,
          publicité, portails internet. Les chiffres de 12 000, 20 000
          ou 35 000 agences que vous croiserez circulent de blog en
          blog sans source vérifiable. Nous préférons vous le dire que
          vous servir un chiffre inventé.
        </p>
        <p>
          Ce que l&apos;on sait, en revanche, est instructif. Le
          secteur qui englobe les agences web comptait{" "}
          <strong>86 044 entreprises pour environ 351 000 emplois en
          équivalent temps plein</strong> selon les dernières données
          consolidées de l&apos;INSEE (portant sur 2019), soit une
          moyenne d&apos;un peu plus de quatre personnes par
          entreprise. Autrement dit :{" "}
          <strong>l&apos;écrasante majorité des « agences » sont des
          très petites entreprises</strong>, ce qui n&apos;est ni bien
          ni mal en soi, mais change la lecture du risque.
        </p>
        <p>
          Car le risque de disparition est réel et chiffré. La France a
          enregistré <strong>69 957 défaillances d&apos;entreprises en
          2025</strong>, en hausse de 3,1 %, et selon le baromètre
          Altares du premier trimestre 2026, la tendance se retourne
          dans les services informatiques, avec 400 défaillances sur
          le trimestre, en progression de 8 %. Surtout : <strong>75 % des procédures touchent des
          structures de moins de trois salariés</strong>. Vérifier la
          santé financière de votre prestataire avant de verser un
          acompte n&apos;est pas de la paranoïa — c&apos;est de la
          gestion élémentaire, et cela prend dix minutes (section 5).
        </p>

        <h2 id="definir-besoin">3. Étape zéro : savoir ce que vous achetez</h2>
        <p>
          La cause numéro un des projets ratés n&apos;est pas le choix
          du prestataire : c&apos;est un besoin flou qui laisse chaque
          agence proposer ce qu&apos;elle sait faire, rendant les devis
          incomparables. Avant tout rendez-vous, tranchez quatre
          points.
        </p>
        <ul>
          <li>
            <strong>Le rôle du site.</strong> Doit-il simplement
            exister et rassurer quelqu&apos;un qui vous cherche déjà,
            ou doit-il faire venir des clients qui ne vous connaissent
            pas via Google ? Les deux réponses n&apos;ouvrent ni le
            même budget ni le même prestataire.
          </li>
          <li>
            <strong>Ce que vous mesurerez.</strong> Un objectif écrit —
            « recevoir dix demandes de devis par mois d&apos;ici un
            an » — vaut mieux que « avoir un beau site ». Il rend le
            projet évaluable, et c&apos;est ce qui distingue un achat
            d&apos;une dépense.
          </li>
          <li>
            <strong>Qui écrit les contenus.</strong> C&apos;est le
            coût caché numéro un des devis bas. Si vous ne l&apos;avez
            pas tranché, chaque agence fera une hypothèse différente et
            vous comparerez des choux et des carottes.
          </li>
          <li>
            <strong>Votre autonomie après livraison.</strong> Voulez-vous
            modifier vos textes vous-même, publier des articles, ajouter
            des pages ? Cette réponse conditionne le socle technique
            autant que le budget.
          </li>
        </ul>
        <p>
          Ces quatre réponses tiennent sur une page. Notre{" "}
          <Link href="/guides/cahier-des-charges-site-internet">modèle
          de cahier des charges</Link> vous donne la trame complète, et
          notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">guide du
          prix d&apos;un site internet</Link> les fourchettes
          correspondantes. Un périmètre écrit est ce qui rend deux
          devis comparables — sans lui, la suite de ce guide perd la
          moitié de son utilité.
        </p>

        <h2 id="tester-realisations">4. Tester 3 réalisations en 10 minutes</h2>
        <p>
          C&apos;est la vérification la plus rentable, et presque
          personne ne la fait. Un portfolio se regarde généralement
          avec les yeux ; il se <strong>mesure</strong> en dix minutes.
        </p>
        <ol>
          <li>
            <strong>Demandez trois adresses de sites livrés</strong> et
            en ligne depuis moins de dix-huit mois — pas des captures
            d&apos;écran, pas des maquettes.
          </li>
          <li>
            <strong>Ouvrez pagespeed.web.dev</strong>, l&apos;outil
            gratuit de Google, sans compte à créer. Collez
            l&apos;adresse et lisez l&apos;onglet{" "}
            <strong>Mobile</strong>, affiché par défaut : c&apos;est
            sur mobile que se joue la majorité du trafic, et c&apos;est
            là que les mauvais sites s&apos;effondrent.
          </li>
          <li>
            <strong>Lisez le score de performance.</strong> De 0 à 49,
            c&apos;est rouge ; de 50 à 89, orange ; de 90 à 100, vert.
            Ce chiffre est produit par Lighthouse, le moteur
            d&apos;analyse de Google : « score de performance » sur
            PageSpeed Insights et « score Lighthouse » dans un devis
            désignent la même mesure.
            Regardez aussi les trois mesures officielles de Google :
            l&apos;affichage du contenu principal doit tenir sous
            2,5 secondes, la réactivité aux clics sous 200
            millisecondes, et la stabilité visuelle rester sous 0,1
            sur l&apos;échelle affichée par l&apos;outil —
            concrètement, le contenu ne doit pas sauter pendant le
            chargement, ce moment agaçant où le bouton se déplace
            juste au moment où vous cliquez dessus.
          </li>
          <li>
            <strong>Relancez le test deux ou trois fois.</strong> Le
            score varie d&apos;une exécution à l&apos;autre selon le
            réseau : retenez l&apos;ordre de grandeur, pas le chiffre
            exact.
          </li>
        </ol>
        <InfoBox variant="amber" title="La règle de décision">
          Un site raté sur trois, c&apos;est peut-être le client qui a
          imposé une vidéo de 40 Mo en page d&apos;accueil.{" "}
          <strong>Trois sites sur trois sous 50 en mobile, c&apos;est
          l&apos;agence.</strong> Et si elle vous vend de la
          performance ou du référencement, elle doit accepter un{" "}
          <strong>engagement chiffré au contrat</strong> : un score
          minimum à la livraison, avec corrections gratuites en cas de
          manquement. C&apos;est le détecteur de sérieux le plus fiable
          du marché — et le plus rarement proposé spontanément.
        </InfoBox>

        <h2 id="verifier-entreprise">5. Vérifier l&apos;entreprise, gratuitement</h2>
        <p>
          Deux services gratuits suffisent :{" "}
          <strong>annuaire-entreprises.data.gouv.fr</strong>, le
          service officiel de l&apos;État, et{" "}
          <strong>pappers.fr</strong>, qui agrège les registres et les
          annonces légales. Cinq points à regarder, dix minutes en
          tout.
        </p>
        <GuideTable
          headers={["Ce que vous regardez", "Où", "Ce qui rassure", "Ce qui alerte"]}
          rows={[
            ["Ancienneté", "Date d'immatriculation", "Plusieurs années d'existence continue", "Société créée il y a six mois qui affiche « 15 ans d'expérience »"],
            ["Procédures collectives", "Historique des annonces légales", "Aucune procédure en cours", "Sauvegarde, redressement ou liquidation : votre acompte est en risque"],
            ["Comptes déposés", "Chiffre d'affaires, résultat, effectif", "Cohérence avec le discours commercial", "« Notre équipe de 20 experts » avec un salarié déclaré"],
            ["Dirigeants", "Mandats actuels et passés", "Stabilité", "Série de sociétés liquidées puis recréées par la même personne"],
            ["Cohérence d'identité", "SIREN et adresse du site vs fiche officielle", "Identiques", "Mentions légales absentes ou ne correspondant pas"],
          ]}
        />
        <p>
          Une nuance d&apos;honnêteté : des comptes non déposés ne sont
          pas un signal d&apos;alerte en soi — beaucoup de petites
          sociétés demandent légalement la confidentialité de leurs
          comptes. Ce qui compte, c&apos;est la cohérence
          d&apos;ensemble entre ce qu&apos;on vous raconte et ce que
          disent les registres.
        </p>

        <h2 id="portfolio-reel">6. Croiser le portfolio avec le code réel</h2>
        <p>
          Voici la vérification qui distingue les discours des
          pratiques. Quatre contrôles, aucune compétence technique
          requise.
        </p>
        <ol>
          <li>
            Sur n&apos;importe quelle réalisation présentée, faites un
            clic droit puis « Afficher le code source de la page », et
            cherchez le terme <code>wp-content</code> : sa présence
            signale un site WordPress, et le chemin qui suit révèle
            souvent le nom du thème utilisé.
          </li>
          <li>
            Listez les technologies avec Wappalyzer, l&apos;extension
            gratuite à ajouter à votre navigateur, qui affiche en un
            clic sur quoi tourne un site.
          </li>
          <li>
            Vérifiez le crédit en pied de page du site client :
            mentionne-t-il bien l&apos;agence ?
          </li>
          <li>
            Sur web.archive.org, service d&apos;archivage du web depuis
            1996, regardez depuis quand ce site existe réellement — une
            « réalisation 2025 » archivée depuis 2018 sous une autre
            identité mérite une question.
          </li>
        </ol>
        <p>
          Ce que vous cherchez n&apos;est pas WordPress en soi — livrer
          du WordPress n&apos;est pas une faute.{" "}
          <strong>Le vendre comme du sur-mesure, si.</strong> Une
          agence qui vous parle de « développement React sur mesure »
          et dont les dix réalisations tournent sur le même thème
          acheté à 60 € ne ment pas forcément sur la qualité de son
          travail : elle ment sur ce que vous achetez, et donc sur le
          prix que vous devriez le payer.
        </p>
        <p>
          Une précision de contexte, et elle est datée. Jusque vers
          2023, le sur-mesure coûtait trois à quatre fois le prix
          d&apos;un thème, ce qui rendait le thème raisonnable pour la
          plupart des TPE. L&apos;écart s&apos;est resserré : les
          outils d&apos;assistance à l&apos;écriture de code ont fait
          chuter le temps de construction, et un site développé sur
          mesure est aujourd&apos;hui accessible là où il ne
          l&apos;était pas. Pour une entreprise dont le site doit
          convertir — faire venir des clients, pas seulement exister —
          c&apos;est devenu le choix par défaut. Le thème garde du sens
          dans quelques cas résiduels, que nous nommons précisément à
          la section 15 — y compris quand ils nous font perdre
          l&apos;affaire.
        </p>

        <GuideInlineCTA
          title="Vous voulez nous appliquer cette méthode ?"
          description="Testez hagnere-code.ai sur PageSpeed Insights, cherchez notre SIREN sur Pappers, ouvrez le code source de nos réalisations. Puis décrivez-nous votre projet en 3 minutes : réponse personnelle sous 24 h ouvrées, sans engagement."
        />

        <h2 id="appeler-clients">7. Appeler deux clients : les 5 questions</h2>
        <p>
          Demandez à l&apos;agence deux ou trois clients à contacter
          directement. Le refus, quel que soit le prétexte invoqué, est
          un signal en soi : un prestataire qui a des clients satisfaits
          n&apos;a aucune raison de vous en priver. Cinq questions
          suffisent, et elles se posent en dix minutes au téléphone.
        </p>
        <ul>
          <li>
            <strong>Les délais annoncés ont-ils été tenus ?</strong> Et
            si non, l&apos;agence a-t-elle prévenu à l&apos;avance ou
            constaté le retard après coup ?
          </li>
          <li>
            <strong>Le budget final correspondait-il au devis ?</strong>{" "}
            Un dépassement peut être légitime — mais il doit avoir été
            annoncé, chiffré et validé avant d&apos;être engagé.
          </li>
          <li>
            <strong>Qui a réellement travaillé sur le projet ?</strong>{" "}
            Les personnes rencontrées au rendez-vous commercial, ou
            d&apos;autres, jamais présentées ?
          </li>
          <li>
            <strong>Comment ça se passe après la livraison ?</strong>{" "}
            Combien de temps met l&apos;agence à répondre quand quelque
            chose casse ? C&apos;est la question la plus révélatrice,
            car beaucoup d&apos;agences vendent bien et abandonnent
            après.
          </li>
          <li>
            <strong>Referiez-vous appel à eux ?</strong> L&apos;hésitation
            dans la réponse vous en dira plus que la réponse
            elle-même.
          </li>
        </ul>

        <h2 id="leur-propre-site">8. Auditer leur propre site</h2>
        <p>
          Le cordonnier mal chaussé est un classique du secteur, et il
          se détecte en cinq minutes. Passez le site de
          l&apos;agence elle-même dans PageSpeed Insights : une agence
          qui vend de la performance avec un site à 40 sur 100 en
          mobile vous montre son niveau d&apos;exigence réel.
        </p>
        <p>
          Vérifiez ensuite ses{" "}
          <strong>mentions légales</strong> : identité, numéro SIREN,
          adresse, hébergeur. Elles sont obligatoires depuis la loi
          pour la confiance dans l&apos;économie numérique de 2004, et
          leur absence est passible de sanctions lourdes — jusqu&apos;à
          75 000 € d&apos;amende pour une personne physique et 375 000 €
          pour une société. Une agence hors la loi sur son propre site
          ne mettra pas le vôtre en conformité.
        </p>
        <p>
          Enfin, regardez la date du dernier contenu publié. Un blog ou
          des études de cas figés depuis dix-huit mois signalent une
          activité éditoriale morte — ce qui n&apos;est pas
          disqualifiant en soi, mais interroge quand l&apos;agence vous
          vend une stratégie de contenus.
        </p>

        <h2 id="questions-rdv">9. Les 13 questions du rendez-vous, avec le barème</h2>
        <p>
          Tout le monde publie des listes de questions. Personne ne
          publie le barème. Voici les treize questions qui comptent, et
          ce que valent les réponses.
        </p>
        <GuideTable
          headers={["Question", "Bonne réponse", "Mauvaise réponse"]}
          rows={[
            ["Qui va réellement travailler sur mon projet ?", "Des noms, des rôles, et de préférence les personnes présentes au rendez-vous", "« Notre équipe », refus de nommer qui que ce soit"],
            ["Serai-je propriétaire du code, du design et du domaine ?", "Oui, cession écrite au paiement du solde ; domaine à votre nom", "« Vous avez un droit d'utilisation », « le domaine reste chez nous »"],
            ["Quel score Lighthouse mobile à la livraison ?", "Un chiffre précis, inscrit au contrat", "« Ça dépend de beaucoup de choses », ou aucune mesure prévue"],
            ["Puis-je appeler deux de vos clients ?", "Coordonnées fournies sous 48 heures", "Refus, invocation vague de la confidentialité"],
            ["Que se passe-t-il si je pars dans deux ans ?", "Réversibilité écrite : export, accès, documentation, sans pénalité", "Flou, frais de sortie, hébergement dont on ne peut pas partir"],
            ["Pourquoi cette technologie pour MON besoin ?", "Une justification liée à votre cas — et l'aveu quand un socle plus simple suffirait", "La même solution vendue à tout le monde, du jargon en guise d'écran"],
            ["Que comprend la maintenance, à quel prix ?", "Périmètre écrit, délai d'intervention, tarif", "« On verra ça plus tard », rien d'écrit"],
            ["Combien de cycles de retours sont inclus ?", "Un nombre défini, plus le prix d'un avenant", "« Retours illimités » — commercialement séduisant, contractuellement faux"],
            ["Comment gérez-vous le référencement lors de la mise en ligne ?", "Redirections page à page et surveillance après la bascule", "« Google s'en occupe tout seul »"],
            ["Qui rédige les contenus ?", "Une réponse claire, et chiffrée si c'est eux", "Poste absent du devis — le coût caché numéro un"],
            ["Quels sont les jalons, et que se passe-t-il en cas de retard ?", "Un calendrier jalonné avec un mécanisme prévu", "Une date unique, sans étapes intermédiaires"],
            ["Quel est l'échéancier de paiement ?", "25 à 50 % à la signature (30 % est l'usage sain), puis des jalons, solde à la mise en ligne", "100 % d'avance, ou une mensualité étalée sur quatre à cinq ans"],
            ["Pouvez-vous me garantir la première position Google ?", "« Personne ne peut, et Google l'écrit lui-même »", "« Oui » — éliminatoire immédiat, sans discussion"],
          ]}
        />
        <p>
          La dernière question est un piège volontaire, et il est
          décisif. Google écrit noir sur blanc dans sa documentation
          que personne ne peut garantir une première position, et
          recommande explicitement de fuir quiconque le promet ou
          prétend entretenir une relation privilégiée avec lui.
        </p>
        <p>
          Google précise deux autres choses utiles. D&apos;abord, quand
          un prestataire demande à auditer votre référencement, ne lui
          donnez qu&apos;un <strong>accès en lecture</strong> à votre
          Search Console — l&apos;outil gratuit de Google qui montre
          comment votre site apparaît dans les résultats de recherche.
          Ensuite, <strong>vous êtes responsable des actions des
          prestataires que vous employez</strong> : un référencement
          obtenu par des méthodes douteuses vous expose, vous, à la
          sanction.
        </p>

        <h2 id="red-flags">10. Les signaux d&apos;alerte, ancrés dans le droit</h2>
        <p>
          Les listes de signaux d&apos;alerte abondent sur le web. Ce
          qui manque, c&apos;est leur fondement : voici les nôtres,
          avec ce qui les justifie juridiquement ou factuellement.
        </p>
        <GuideTable
          headers={["Signal", "Pourquoi c'est grave", "La parade"]}
          rows={[
            ["« Première position Google garantie »", "Google écrit lui-même que personne ne peut le garantir", "Éliminez le prestataire, sans négocier"],
            ["Location de site sur 48 à 63 mois", "Condamnation pénale confirmée en cassation en janvier 2026 (voir section 11)", "Refusez tout montage impliquant un organisme financier tiers"],
            ["Propriété du code non cédée", "En droit français, payer ne rend pas propriétaire (art. L131-3 CPI)", "Exigez la clause de cession écrite au contrat"],
            ["Domaine déposé au nom de l'agence", "Ce qui compte est la ligne « titulaire », pas la facture", "Enregistrez-le vous-même, avant tout démarrage"],
            ["Devis sans détail des postes", "France Num, l'organisme public d'accompagnement au numérique, alerte sur les devis anormalement bas : ils traduisent le plus souvent un périmètre incomplet ou une sous-traitance mal maîtrisée", "Redemandez une ventilation par poste"],
            ["Acompte de 100 %", "Vous perdez tout levier en cas de dérapage", "50 % maximum, adossés à des jalons"],
            ["Rien d'écrit sur la maintenance", "Vous découvrirez le tarif quand vous en aurez besoin", "Périmètre et prix au contrat, dès le devis initial"],
            ["Équipe du rendez-vous ≠ équipe qui produit", "Sous-traitance non assumée, souvent invisible jusqu'au premier problème", "Croisez avec l'effectif déclaré, demandez qui code"],
            ["Maquette gratuite non sollicitée + « offre valable aujourd'hui »", "Techniques classiques de la vente en un seul rendez-vous", "Un projet de plusieurs milliers d'euros ne se signe jamais le jour du premier rendez-vous, quel que soit le rabais annoncé"],
          ]}
        />

        <h2 id="abonnement-piege">11. L&apos;abonnement-piège : ce que la justice a tranché</h2>
        <p>
          C&apos;est le sujet que les guides d&apos;agences évitent, et
          c&apos;est celui qui ruine le plus de petites entreprises.
          Le schéma est stable depuis quinze ans.
        </p>
        <FormulaBox>
          {`LE MONTAGE, ÉTAPE PAR ÉTAPE

  1. Démarchage téléphonique ou visite non sollicitée
  2. « Votre site est offert — vous ne payez que la maintenance »
  3. Signature de DEUX contrats le même jour :
       • prestation de création (avec le prestataire)
       • location financière (avec un organisme tiers)
  4. Mensualités de 100 à 300 € pendant 48 à 63 mois
  5. Le prestataire disparaît — le bailleur, lui, continue de prélever

  COÛT TOTAL DU MONTAGE : 4 800 à 18 900 €
  selon la mensualité et la durée
  (exemple courant : 250 €/mois × 48 mois = 12 000 €,
   sans rien posséder à la fin)

  Dans l'affaire jugée en 2026, certains contrats
  atteignaient 20 000 à 30 000 €.`}
        </FormulaBox>
        <p>
          Ce n&apos;est pas une mise en garde théorique. Le{" "}
          <strong>6 janvier 2026, la chambre criminelle de la Cour de
          cassation a confirmé la condamnation d&apos;un loueur —
          filiale d&apos;un grand groupe bancaire — à 1,2 million
          d&apos;euros d&apos;amende</strong>, avec publication de la
          décision, pour pratiques commerciales trompeuses, perception
          de paiements avant l&apos;expiration du délai de rétractation
          et défaut de remise d&apos;un exemplaire conforme du contrat.
          Une centaine de parties civiles ont été indemnisées :
          coiffeurs, garagistes, menuisiers, infirmières, médecins,
          psychologues.
        </p>
        <p>Trois enseignements juridiques directement utilisables :</p>
        <ul>
          <li>
            <strong>Vous avez peut-être quatorze jours pour vous
            rétracter.</strong> L&apos;article L221-3 du Code de la
            consommation étend les protections consommateur aux
            professionnels de cinq salariés au maximum, démarchés hors
            de leur établissement, sur un objet étranger à leur
            activité principale. Un boulanger qui signe pour un site
            internet est concerné.
          </li>
          <li>
            <strong>Les deux contrats sont interdépendants.</strong>{" "}
            Depuis un arrêt de chambre mixte de 2013, les contrats
            concomitants intégrant une location financière sont liés :
            si la prestation tombe, le contrat de location tombe avec —
            et les clauses qui prévoient l&apos;inverse sont réputées
            non écrites, c&apos;est-à-dire sans aucun effet, comme si
            elles n&apos;avaient jamais été signées.
          </li>
          <li>
            <strong>Un bon de commande vide est annulable.</strong> Une
            cour d&apos;appel a prononcé la nullité d&apos;un contrat
            de location désignant « un site internet » sans nom de
            fournisseur ni descriptif.
          </li>
        </ul>
        <p>
          La règle à retenir est simple :{" "}
          <strong>ne signez jamais un contrat de site internet
          impliquant un organisme financier tiers</strong>. Un site
          s&apos;achète, ou se paie en plusieurs fois directement
          auprès de son créateur. Notre{" "}
          <Link href="/guides/prix-site-vitrine">guide du prix
          d&apos;un site vitrine</Link> chiffre l&apos;alternative :
          à l&apos;exemple courant de 12 000 € sur quatre ans, la
          location coûte près du double d&apos;un site vitrine sur
          mesure d&apos;entrée de gamme — et à la fin, elle ne vous
          laisse rien, pas même le nom de domaine.
        </p>

        <h2 id="contrat">12. Les 6 clauses non négociables du contrat</h2>
        <p>
          Le devis vous dit ce que vous payez ; le contrat dit ce que
          vous possédez. Voici les six clauses à obtenir avant de
          verser le moindre acompte.
        </p>
        <ol>
          <li>
            <strong>La cession des droits.</strong> En droit français,
            le code et le design appartiennent d&apos;abord à celui qui
            les a créés : payer ne rend pas propriétaire. L&apos;article L131-3 du Code de
            la propriété intellectuelle exige un écrit mentionnant
            distinctement chaque droit cédé et délimitant son étendue,
            sa destination, son lieu et sa durée. Sans cette clause,
            l&apos;agence reste titulaire du code — un tribunal
            parisien a condamné pour contrefaçon, en 2011, un client
            qui avait fait reproduire « son » site ailleurs sans
            cession écrite.
          </li>
          <li>
            <strong>Le nom de domaine à votre nom.</strong> Ce qui
            compte juridiquement est la ligne « titulaire » du registre,
            pas celui qui paie la facture. Idéalement, enregistrez-le
            vous-même avant le démarrage.
          </li>
          <li>
            <strong>La réversibilité.</strong> Restitution du code, des
            données dans un format exploitable, des accès
            d&apos;administration et de la documentation, avec un délai
            et une assistance au prestataire suivant. Aucune loi ne
            l&apos;impose entre entreprises : si elle n&apos;est pas
            écrite, elle n&apos;existe pas.
          </li>
          <li>
            <strong>La recette et la garantie.</strong> La garantie
            légale de conformité du Code de la consommation ne protège
            que les particuliers. Entre entreprises, votre protection
            vient du contrat : une phase de validation formelle, puis
            une garantie corrective d&apos;une durée définie après la
            mise en ligne.
          </li>
          <li>
            <strong>Le contrat de sous-traitance des données.</strong>{" "}
            Dès que l&apos;agence héberge ou maintient votre site, elle
            traite des données personnelles pour votre compte :
            l&apos;article 28 du RGPD impose un contrat écrit
            prévoyant, entre autres, la suppression ou la restitution
            des données en fin de contrat. Le manquement expose le
            responsable du traitement — c&apos;est-à-dire vous, pas
            seulement votre agence — à une sanction de la CNIL. Le
            plafond légal est de 10 millions d&apos;euros ou 2 % du
            chiffre d&apos;affaires mondial ; pour une TPE, les
            montants prononcés se comptent en milliers d&apos;euros,
            mais l&apos;absence de ce contrat est un manquement
            constatable lors d&apos;un simple contrôle.
          </li>
          <li>
            <strong>La maintenance et les délais
            d&apos;intervention.</strong> Périmètre, tarif, délai
            maximal pour commencer à traiter un incident et délai
            maximal pour rétablir le service. Notre{" "}
            <Link href="/guides/cout-maintenance-site-internet">guide
            du coût de la maintenance</Link> décode ces engagements
            ligne à ligne.
          </li>
        </ol>

        <h2 id="comparer-devis">13. Comparer deux devis sans se tromper</h2>
        <p>
          Deux devis pour « le même site » affichent 3 200 € et
          9 800 €. Neuf fois sur dix, ils ne décrivent pas le même
          projet. La méthode consiste à les ramener au même périmètre
          avant de regarder le total.
        </p>
        <GuideTable
          headers={["Ligne à comparer", "Devis A", "Devis B", "La question à poser"]}
          rows={[
            ["Rédaction des contenus", "Non incluse", "Incluse, 8 pages", "Combien coûtera la rédaction si elle n'est pas prévue ?"],
            ["Design", "Thème adapté", "Maquettes sur mesure", "Combien d'autres sites utilisent ce thème ?"],
            ["Référencement technique", "Non mentionné", "Balises de titre, plan du site, données structurées (le code invisible qui aide Google à comprendre chaque page)", "Qui écrit les balises, et sont-elles vérifiables ?"],
            ["Recette et tests", "Absente du devis", "3 jours", "Qui teste, sur quels appareils, et qui corrige ?"],
            ["Engagement de performance", "Aucun", "Score mobile 95 minimum au contrat", "Acceptez-vous un chiffre écrit ?"],
            ["Propriété du code", "Non mentionnée", "Cession au solde", "Puis-je partir avec mon site ?"],
            ["Maintenance", "Non chiffrée", "90 €/mois, périmètre écrit", "Quel est le coût sur 12 mois, tout compris ?"],
            ["Hébergement et nom de domaine", "Non précisé", "Hébergement inclus 12 mois, domaine à votre nom", "Qui paie l'hébergement en année 2, et à quel tarif ?"],
            ["Montants HT ou TTC", "À vérifier", "HT", "Le prestataire facture-t-il la TVA ?"],
            ["Coût total sur 12 mois", "3 200 € + inconnues", "9 800 € + 1 080 €", "Lequel des deux connaissez-vous vraiment ?"],
          ]}
        />
        <p>
          Ramenez toujours les devis au même régime : un prestataire
          non assujetti à la TVA affiche un prix qui paraît 20 % plus
          bas sans l&apos;être, si vous récupérez la TVA.
        </p>
        <p>
          Et quand il y en a trois ? Le devis le plus bas ne
          s&apos;écarte pas d&apos;office : renvoyez-lui votre
          périmètre écrit d&apos;une page et demandez un re-chiffrage
          sur cette base. Deux issues, toutes deux instructives — le
          prix rejoint les autres, et vous savez que l&apos;écart
          venait du périmètre ; ou il ne bouge pas, et vous demandez
          ce qui est retiré pour tenir ce montant.
        </p>
        <p>
          Un dernier contrôle, emprunté à notre{" "}
          <Link href="/guides/tjm-developpeur-web">guide du tarif
          journalier</Link> : divisez le total du devis par le nombre
          de jours annoncé. Vous obtenez le tarif journalier implicite
          du prestataire, comparable aux baromètres publics. Un tarif
          implicite très bas assorti d&apos;un nombre de jours élevé
          n&apos;est pas une bonne affaire — c&apos;est le même prix
          pour un travail moins expérimenté.
        </p>

        <h2 id="locale-ou-non">14. Locale ou distante, agence ou freelance</h2>
        <p>
          Deux arbitrages reviennent systématiquement, et ils méritent
          des réponses nuancées plutôt que des slogans.
        </p>
        <p>
          <strong>Agence ou freelance.</strong> Un freelance
          expérimenté coûte moins cher, vous donne un interlocuteur
          unique et convient parfaitement à un projet bien cadré. Une
          agence apporte plusieurs métiers réunis et une continuité de
          service — le point qui compte le jour où votre interlocuteur
          tombe malade ou change de vie. Un point de prudence, sans en
          faire un argument massue : les trois quarts des procédures
          collectives visent des structures de moins de trois salariés
          (section 2). Ce chiffre dit surtout que la France est un
          pays de très petites entreprises — il ne prouve pas
          qu&apos;un freelance soit plus fragile qu&apos;une agence de
          quatre personnes. Ce qui compte réellement, c&apos;est ce
          qui se passe si votre interlocuteur unique s&apos;arrête :
          posez la question, et demandez ce qui est prévu au contrat.
          Notre{" "}
          <Link href="/guides/agence-web-ou-freelance">comparatif
          détaillé</Link> tranche budget par budget, avec notre biais
          déclaré.
        </p>
        <p>
          <strong>Locale ou distante.</strong> La proximité facilite le
          cadrage initial, la compréhension d&apos;un marché local et
          le recours en cas de conflit. Elle ne garantit ni la qualité
          technique ni la tenue des délais, et certaines agences très
          visibles localement sous-traitent l&apos;essentiel de leur
          production. Notre position, en tant qu&apos;équipe basée à
          Chambéry : la proximité est un excellent critère de départage
          entre deux prestataires équivalents, jamais un critère de
          sélection principal.
        </p>

        <h2 id="auditez-nous">15. Comment nous auditer, nous</h2>
        <p>
          Un guide écrit par une agence sur le choix d&apos;une agence
          ne vaut que s&apos;il accepte de se retourner contre son
          auteur. Voici donc, appliquée à nous, la méthode que nous
          venons de décrire.
        </p>
        <ul>
          <li>
            <strong>Testez ce site.</strong> Passez hagnere-code.ai
            dans PageSpeed Insights en mode mobile. Nous garantissons
            un score de 95 minimum par contrat à nos clients : il
            serait malvenu que notre propre site n&apos;y soit pas.
          </li>
          <li>
            <strong>Vérifiez notre entreprise.</strong> Cherchez
            Hagnéré Code sur pappers.fr ou sur
            annuaire-entreprises.data.gouv.fr : date de création,
            dirigeant, absence de procédure. Dix minutes.
          </li>
          <li>
            <strong>Ouvrez le code de nos réalisations.</strong> Clic
            droit, « Afficher le code source », ou l&apos;extension
            Wappalyzer. Vous n&apos;y trouverez pas de{" "}
            <code>wp-content</code> : nos sites sont développés en
            Next.js et React, ce que nous annonçons. Ce site en est
            lui-même la démonstration.
          </li>
          <li>
            <strong>Posez-nous les treize questions de la
            section 9.</strong> Y compris la treizième, sur la
            garantie de première position — notre réponse est celle du
            barème : personne ne peut la garantir, et Google
            l&apos;écrit lui-même.
          </li>
          <li>
            <strong>Demandez-nous nos limites.</strong> Nous
            travaillons en React et Next.js. Il y a trois cas où nous
            vous dirons d&apos;aller ailleurs. Un site purement
            informatif de moins de cinq pages, sans objectif
            d&apos;acquisition : le budget ne se justifie pas. Une
            boutique de moins de trente références dont la logistique
            tourne déjà sur un abonnement existant. Une
            association ou une activité en création dont le budget
            total est inférieur à 3 000 €. Dans ces trois cas, une
            solution plus simple suffit, et nous le disons au premier
            rendez-vous.
          </li>
        </ul>

        <h2 id="litige">16. En cas de litige : les recours réels</h2>
        <p>
          Si le projet tourne mal, quatre recours existent, du moins au
          plus lourd.
        </p>
        <ol>
          <li>
            <strong>La mise en demeure écrite.</strong> Lettre
            recommandée avec accusé de réception rappelant les
            engagements contractuels, les manquements constatés et le
            délai accordé pour y remédier. C&apos;est le préalable
            indispensable à toute suite, et cela suffit souvent à
            débloquer la situation.
          </li>
          <li>
            <strong>Le Médiateur des entreprises.</strong> Dispositif
            public et gratuit de médiation entre entreprises, plus
            rapide et bien moins coûteux qu&apos;un contentieux.
            Largement méconnu des TPE.
          </li>
          <li>
            <strong>La procédure dédiée aux noms de domaine.</strong>{" "}
            Si le blocage porte sur un domaine en .fr détenu par votre
            prestataire, l&apos;AFNIC propose une procédure de
            résolution de litige, pour un coût de 250 € hors taxes et
            un délai d&apos;environ deux mois.
          </li>
          <li>
            <strong>Le tribunal.</strong> Pour les litiges sous
            5 000 €, une procédure simplifiée existe. Au-delà, le
            tribunal de commerce est compétent entre entreprises. Une
            précision utile : en cas de démarchage, les faits relevant
            de pratiques commerciales trompeuses peuvent aussi être
            signalés à la direction départementale de la protection
            des populations.
          </li>
        </ol>

        <h2 id="methode">17. Méthode : choisir en 6 étapes</h2>
        <ol>
          <li>
            <strong>Écrivez votre besoin sur une page</strong> avant
            tout contact — rôle du site, objectif mesurable, qui rédige,
            quelle autonomie ensuite (section 3).
          </li>
          <li>
            <strong>Présélectionnez trois prestataires</strong> par
            recommandation, recherche locale ou annuaires publics, sans
            vous arrêter aux classements des annuaires payants.
          </li>
          <li>
            <strong>Vérifiez avant de rencontrer.</strong> Quarante
            minutes en autonomie — PageSpeed sur trois réalisations,
            Pappers, code source du portfolio, leur propre site —
            puis vingt minutes d&apos;appels aux clients référence dès
            que l&apos;agence vous a donné les contacts. Une heure au
            total. Deux prestataires sur trois
            sont souvent éliminés à ce stade.
          </li>
          <li>
            <strong>Menez les rendez-vous avec le barème.</strong> Les
            treize questions de la section 9, et la treizième posée
            sans prévenir.
          </li>
          <li>
            <strong>Comparez les devis à périmètre égal,</strong>{" "}
            ligne par ligne, sur douze mois, avec le contrôle du tarif
            journalier implicite (section 13).
          </li>
          <li>
            <strong>Lisez le contrat avant l&apos;acompte.</strong> Les
            six clauses de la section 12. Un prestataire sérieux les
            accepte toutes sans discuter — sa réaction est votre
            dernier test.
          </li>
        </ol>
        <p>
          Comptez trois à six semaines pour l&apos;ensemble du
          processus. C&apos;est long, et c&apos;est exactement le
          point : les projets qui tournent mal se signent presque
          toujours dans la précipitation, souvent le jour du premier
          rendez-vous.
        </p>

        <GuideInlineCTA
          title="Prêt à mettre un prestataire à l'épreuve ?"
          description="Commencez par nous. Décrivez votre projet en 3 minutes : nous répondons personnellement sous 24 h ouvrées, gratuitement et sans engagement — y compris quand notre réponse est qu'une solution plus simple suffirait à votre besoin."
        />

        <InfoBox variant="emerald" title="À retenir : les 6 réflexes avant de signer">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Mesurez trois réalisations</strong> sur PageSpeed Insights en mobile : trois scores sous 50, c&apos;est l&apos;agence, pas les clients.</li>
            <li><strong>Vérifiez l&apos;entreprise</strong> sur Pappers : ancienneté, effectif réel, procédures en cours. Dix minutes, zéro euro.</li>
            <li><strong>Exigez la cession des droits par écrit</strong> : en droit français, payer ne rend pas propriétaire du code.</li>
            <li><strong>Refusez tout montage à trois</strong> incluant un organisme financier : c&apos;est le schéma condamné à 1,2 M€ d&apos;amende en janvier 2026.</li>
            <li><strong>Comparez sur douze mois à périmètre écrit égal</strong>, jamais sur le prix affiché.</li>
            <li><strong>Ne signez jamais le jour du premier rendez-vous.</strong> L&apos;urgence est toujours celle du vendeur.</li>
          </ul>
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Consultées en juillet 2026 :{" "}
          <a href="https://www.insee.fr/fr/statistiques/6041754" target="_blank" rel="noopener noreferrer">INSEE, fiche sectorielle « Programmation, conseil et autres activités informatiques » (données 2019)</a> ;{" "}
          <a href="https://www.altares.com/fr/statistiques-defaillance-entreprises-france/bilan-2025/" target="_blank" rel="noopener noreferrer">Altares, bilan 2025 des défaillances d&apos;entreprises</a> ;{" "}
          <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo" target="_blank" rel="noopener noreferrer">Google Search Central, « Avez-vous besoin d&apos;un référenceur ? »</a> ;{" "}
          <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">Google web.dev, seuils des Core Web Vitals</a> ;{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958" target="_blank" rel="noopener noreferrer">Légifrance, article L131-3 du Code de la propriété intellectuelle</a> ;{" "}
          <a href="https://www.legifrance.gouv.fr/juri/id/JURITEXT000027424507/" target="_blank" rel="noopener noreferrer">Cour de cassation, chambre mixte, 17 mai 2013 (interdépendance des contrats)</a> ;{" "}
          <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e" target="_blank" rel="noopener noreferrer">France Num, combien payer pour un site web</a> ;{" "}
          <a href="https://www.cnil.fr/sites/cnil/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf" target="_blank" rel="noopener noreferrer">CNIL, guide du sous-traitant (RGPD, article 28)</a> ;{" "}
          <a href="https://www.afnic.fr/en/domain-names-and-support/resolve-a-dispute/" target="_blank" rel="noopener noreferrer">AFNIC, résolution des litiges sur les noms de domaine .fr</a> ;{" "}
          <a href="https://www.economie.gouv.fr/mediateur-des-entreprises" target="_blank" rel="noopener noreferrer">Médiateur des entreprises</a> ; arrêt de la chambre criminelle de la Cour de cassation du 6 janvier 2026 (n° 24-81.212) relatif à la location financière auprès de petits professionnels, rapporté par plusieurs cabinets d&apos;avocats ; bilan 2024 de la DGCCRF ; jurisprudence TGI Paris, 10 novembre 2011 (cession de droits sur un site web).
        </p>
        <p className="text-sm">
          Cet article est rédigé par une agence web : le conflit
          d&apos;intérêt est déclaré en tête de guide, et la section 15
          donne la méthode pour nous appliquer nos propres critères.
          Les fourchettes de prix citées sont des ordres de grandeur de
          marché, détaillés dans nos guides dédiés. Cet article ne
          constitue pas un conseil juridique personnalisé : pour un
          litige en cours, consultez un avocat.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
