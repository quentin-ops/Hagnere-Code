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
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("creer-un-site-avec-ia");

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
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
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
      "Intelligence artificielle",
      "React",
      "Next.js",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Créer un site avec l'IA",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quelle est la meilleure IA pour créer un site web ?",
    answer:
      "Pour une présence simple ou un test, un générateur comme Wix ou Hostinger peut suffire. Pour montrer rapidement une application, Lovable, Bolt ou v0 peuvent produire un prototype. Si le site doit soutenir durablement vos ventes, l’outil compte moins que la conception, les contrôles et la personne responsable de la maintenance.",
  },
  {
    question: "Peut-on créer un site internet avec l'IA gratuitement ?",
    answer:
      "Oui pour essayer l’outil, rarement pour exploiter un site professionnel. Les offres gratuites imposent souvent une adresse de la plateforme, de la publicité ou des fonctions limitées. Prévoyez au minimum le nom de domaine et l’abonnement nécessaire pour le connecter.",
  },
  {
    question: "Combien coûte un site créé avec l'IA ?",
    answer:
      "Un générateur coûte généralement de quelques euros à quelques dizaines d’euros par mois, auxquels s’ajoutent le domaine, les options et votre temps. Les prix promotionnels et les renouvellements diffèrent : vérifiez toujours la page officielle. Un prototype généré peut aussi demander une reprise par un développeur. Comparez les solutions sur trois ans et pour le même besoin.",
  },
  {
    question: "Google pénalise-t-il les sites créés par une IA ?",
    answer:
      "Google indique qu’il évalue d’abord la qualité du contenu, quel que soit son mode de production. En revanche, ses règles anti-spam visent la création massive de pages conçues surtout pour manipuler le classement. L’IA n’est donc pas le problème en soi ; un contenu générique et sans valeur l’est.",
  },
  {
    question: "C'est quoi le vibe coding ?",
    answer:
      "Le vibe coding consiste à décrire une application en langage courant pour qu’un outil génère le code. C’est très utile pour une maquette ou un prototype. Avant d’y placer des données réelles, il faut toutefois vérifier les accès, la sécurité, les sauvegardes et la capacité à maintenir le code.",
  },
  {
    question: "À qui appartiennent le site, le code et les données ?",
    answer:
      "Cela dépend de l’outil et du contrat. Vérifiez si vous pouvez exporter le code, les contenus et les données, puis les faire fonctionner ailleurs. En sur-mesure, demandez une cession écrite des droits et la liste des composants tiers. Gardez le domaine et les comptes principaux au nom de votre entreprise.",
  },
  {
    question: "Un site généré par IA est-il conforme au RGPD ?",
    answer:
      "Non. Il faut encore identifier les données collectées, informer les personnes, choisir les bons réglages de mesure d’audience, encadrer les prestataires et sécuriser les accès. Un modèle de page juridique ne suffit pas à rendre le site conforme.",
  },
  {
    question: "Créer son site avec l'IA ou se faire accompagner ?",
    answer:
      "Un générateur peut suffire pour tester une idée ou publier une présence simple. Une agence devient utile lorsque le site doit se différencier, se connecter à d’autres outils, traiter des données sensibles ou générer une part importante des ventes. Conserver le site actuel et l’améliorer reste aussi une option.",
  },
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Créer un site avec l'IA" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous voulez créer ou refaire votre site avec l’IA ? Voici ce qu’un générateur peut réellement faire, quand il suffit, quand garder votre site actuel est préférable et quand un accompagnement professionnel devient utile."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "3 familles d'outils, 3 usages",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Tarifs datés, renouvellements à vérifier",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Google : la position officielle",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          {
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          { href: "/guides/wix-ou-wordpress", label: "Wix ou WordPress ?" },
          {
            href: "/guides/combien-de-temps-pour-creer-un-site",
            label: "Combien de temps pour créer un site ?",
          },
          { href: "/services/sites-vitrines", label: "Sites vitrines" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Créer un site avec l'IA : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          <strong>
            Vous vous demandez si une intelligence artificielle peut créer le
            site de votre entreprise sans agence ni développeur ?
          </strong>{" "}
          Oui, un générateur peut publier rapidement une page simple et peu
          coûteuse. C’est une bonne option pour tester une idée, annoncer une
          activité ou remplacer provisoirement une absence totale de site. En
          revanche, l’outil ne décide pas à votre place de l’offre, des textes,
          des données à protéger, des connexions avec vos logiciels ni de la
          maintenance. Si votre site actuel fonctionne, le conserver et corriger
          ses pages prioritaires peut coûter moins cher qu’une reconstruction.
          Ce guide compare donc quatre choix honnêtes : utiliser un générateur,
          produire un prototype avec l’IA, faire développer un site accompagné,
          ou ne rien reconstruire pour l’instant.
        </p>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Ce que l’IA peut faire pour vous",
            },
            {
              id: "de-quoi-parle-t-on",
              label: "2. Trois façons très différentes d’utiliser l’IA",
            },
            {
              id: "generateurs-no-code",
              label: "3. Publier un site simple avec un générateur",
            },
            { id: "vibe-coding", label: "4. Créer rapidement un prototype" },
            {
              id: "assistants-pro",
              label: "5. Aider un développeur sans remplacer son travail",
            },
            {
              id: "google-seo",
              label: "6. L’IA empêche-t-elle d’être visible sur Google ?",
            },
            { id: "pieges", label: "7. Les coûts et risques à vérifier" },
            {
              id: "cout-reel",
              label: "8. Le coût réel sur 3 ans, toutes familles confondues",
            },
            {
              id: "quand-outil-suffit",
              label: "9. Quand un générateur suffit",
            },
            {
              id: "rgpd-propriete",
              label: "10. Garder ses droits, ses données et une maintenance",
            },
            {
              id: "verdict-par-profil",
              label: "11. Quel choix selon votre besoin ?",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Ce que l’IA peut faire pour vous</h2>
        <p>
          Un générateur sans code comme Wix ou Hostinger peut suffire pour une
          présence simple. Au 21 juillet 2026,{" "}
          <a
            href="https://www.hostinger.com/fr/createur-de-sites-internet-ia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hostinger affichait une promotion à partir de 2,99 € par mois
          </a>{" "}
          avec un engagement long et un renouvellement plus élevé ;{" "}
          <a
            href="https://support.wix.com/fr/article/prix-des-forfaits-premium-wix"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wix précise que ses prix varient selon la localisation
          </a>
          . Un outil qui génère du code à partir d’une description, comme
          Lovable, Bolt ou v0, sert surtout à produire un prototype. Un
          assistant de développement aide un professionnel à travailler, mais ne
          remplace ni la conception ni les contrôles. Enfin, garder le site
          actuel est rationnel si une amélioration ciblée suffit. Chez Hagnéré
          Code, la première offre vitrine est{" "}
          <Link href="/tarifs">affichée à 6 900 €</Link> ; ce prix ne devient
          pertinent que si les pages, les fonctions et l’accompagnement proposés
          répondent réellement au besoin.
        </p>
        <GuideTable
          headers={["Votre situation", "Choix raisonnable", "Budget à prévoir"]}
          rows={[
            [
              "Vous testez une idée ou avez seulement besoin d’une carte de visite",
              "Générateur sans code",
              "Promotion Hostinger dès 2,99 €/mois au 21 juillet 2026 ; renouvellement, domaine et options à vérifier",
            ],
            [
              "Vous devez montrer une application avant de la financer",
              "Prototype généré avec Lovable, Bolt ou v0",
              "Abonnement et crédits selon l’outil, puis éventuelle reprise professionnelle",
            ],
            [
              "Votre site actuel fonctionne mais peut mieux convertir",
              "Le conserver et améliorer les pages prioritaires",
              "Audit et corrections ciblées à chiffrer",
            ],
            [
              "Le site doit soutenir durablement les ventes ou des intégrations métier",
              "Développement accompagné",
              "À partir de 6 900 € dans notre grille, selon le devis",
            ],
            [
              "Vous vendez un catalogue standard",
              "Plateforme existante comme Shopify",
              "Abonnement, applications et accompagnement éventuel",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Ne choisissez pas un outil avant d’avoir choisi le rôle du site"
        >
          Un site destiné à tester une idée n’a pas besoin du même
          investissement qu’un site qui doit générer des demandes tous les mois.
          Écrivez d’abord le résultat attendu, les données traitées, les outils
          à connecter et ce que vous devez pouvoir récupérer si vous changez de
          solution.
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">
          2. Trois façons très différentes d’utiliser l’IA
        </h2>
        <p>
          Les{" "}
          <strong>
            {" "}
            <Link href="/guides/no-code-ou-sur-mesure">
              générateurs sans code
            </Link>
          </strong>{" "}
          assemblent un site à partir de modèles et l’hébergent sur leur
          plateforme. Les outils de <strong>génération de code</strong>, parfois
          appelés vibe coding, transforment une description en prototype
          exportable. Les <strong>assistants de développement</strong>
          aident une personne qui sait déjà concevoir, tester et maintenir du
          logiciel. Ces trois familles ne répondent pas au même besoin.
        </p>
        <InfoBox
          variant="blue"
          title="Exemple fictif : tester une nouvelle offre avec 3 000 €"
        >
          Cet exemple ne décrit ni un client ni un témoignage réel. Une
          entreprise disposant de 3 000 € pour tester une nouvelle offre peut
          utiliser l’IA pour préparer ses textes et publier une première page.
          Elle doit encore décider qui vérifie les promesses, suit les demandes
          et entretient le site. À ce stade, améliorer l’existant ou tester avec
          un générateur peut être plus raisonnable qu’une reconstruction.
        </InfoBox>

        <h2 id="generateurs-no-code">
          3. Publier un site simple avec un générateur
        </h2>
        <p>
          Wix, Hostinger, Durable ou Framer peuvent produire rapidement une mise
          en page, des textes de départ et un hébergement. Pour une entreprise
          qui n’a pas encore de site ou veut tester une offre, c’est une
          solution utile. Wix propose une offre gratuite et des formules
          payantes dont le prix varie selon la localisation ; un abonnement
          payant est nécessaire pour connecter son propre domaine. Le détail est
          présenté dans notre{" "}
          <Link href="/guides/wix-ou-wordpress">guide Wix ou WordPress</Link>.
          Hostinger affiche des prix promotionnels liés à un engagement long,
          puis un renouvellement plus élevé. Les autres plateformes modifient
          également leurs offres : comparez le prix payé aujourd’hui, la durée
          d’engagement et le renouvellement sur leur page officielle.
        </p>
        <p>
          Le point décisif est la sortie. Wix indique qu’un site ne peut pas
          être exporté pour fonctionner ailleurs. Vous pouvez récupérer certains
          contenus et votre domaine si vous en êtes propriétaire, mais un départ
          implique généralement de reconstruire le site. Ce modèle n’est pas un
          problème si vous l’acceptez dès le départ et si le faible coût répond
          à votre besoin actuel.
        </p>

        <h2 id="vibe-coding">
          4. Créer rapidement un prototype avec du code généré
        </h2>
        <p>
          Lovable, Bolt et v0 génèrent une interface et du code à partir d’une
          description. Lovable indique que vous restez propriétaire du code et
          des projets créés, sous réserve des droits de tiers précisés dans ses
          conditions.{" "}
          <a
            href="https://lovable.dev/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Les formules de Lovable
          </a>{" "}
          combinent abonnement et crédits d’usage. Pour une entreprise, ce type
          d’outil peut servir à montrer un espace client à quelques prospects
          avant de financer une version complète.
        </p>
        <p>
          Un prototype n’est toutefois pas automatiquement prêt à recevoir des
          données réelles. Le rapport Veracode 2025 cité a trouvé au moins une
          faiblesse de sécurité reconnue dans 45 % des échantillons de code
          généré testés. Cette étude provient d&apos;un éditeur de solutions de
          sécurité et ne décrit ni tous les outils ni tous les sites. Elle
          justifie néanmoins une revue des accès, des données, des sauvegardes
          et du code avant la mise en ligne.
        </p>

        <h2 id="assistants-pro">
          5. Aider un développeur sans remplacer son travail
        </h2>
        <p>
          Cette troisième famille s’adresse d’abord aux développeurs.{" "}
          <strong>Claude Code, GitHub Copilot et Cursor</strong> sont facturés
          par abonnement ou selon l’usage, avec des offres qui évoluent. Ils
          peuvent accélérer certaines tâches, mais le résultat dépend du travail
          demandé, de la personne qui contrôle le code et du projet existant.
          Une expérience publiée par GitHub a mesuré une tâche standard terminée
          55 % plus vite avec son propre outil. À l&apos;inverse, une expérience
          indépendante de METR a mesuré des développeurs expérimentés 19 % plus
          lents avec des outils d&apos;IA sur leurs propres projets. Ces deux
          résultats portent sur des situations différentes et ne permettent pas
          de promettre une réduction du prix ou du délai de votre site.
        </p>

        <InfoBox
          variant="amber"
          title="Les études ne promettent pas le même gain sur tous les projets"
        >
          <p>
            La bonne question pour un dirigeant n&apos;est pas « quel
            pourcentage l&apos;IA fait-elle gagner ? », mais « qui vérifie ce
            qu&apos;elle produit ? ». Demandez comment les fonctions seront
            testées, comment les données seront protégées et qui pourra
            maintenir le site après sa livraison.
          </p>
        </InfoBox>

        <h2 id="google-seo">
          6. L’IA empêche-t-elle d’être visible sur Google ?
        </h2>
        <p>
          Google indique depuis 2023 que son objectif est de favoriser un
          contenu utile et fiable, indépendamment de la manière dont il est
          produit. Ses règles anti-spam visent en revanche la création à grande
          échelle de pages principalement destinées à manipuler le classement.
          Sa documentation invite notamment à examiner l’expérience de l’auteur,
          son expertise, la fiabilité des informations et la confiance que la
          page inspire. L&apos;outil de création n&apos;attribue pas
          automatiquement ces qualités au contenu.
        </p>
        <p>
          Dans son étude de 600 000 pages, Ahrefs n’observe pas de relation
          simple entre la part de texte généré et la position. Cette étude d’un
          éditeur d’outils SEO reste observationnelle. La conclusion raisonnable
          est donc simple : vérifiez les faits, ajoutez votre expérience et
          répondez mieux que les pages génériques à la question du client.
        </p>
        <InfoBox
          variant="blue"
          title="En clair : 3 questions avant de publier un contenu généré par IA"
        >
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              <strong>
                Le texte répond-il clairement à une question réelle du client ?
              </strong>
            </li>
            <li>
              <strong>
                Une personne compétente a-t-elle vérifié les faits et ajouté
                l’expérience de l’entreprise ?
              </strong>
            </li>
            <li>
              <strong>
                La page apporte-t-elle quelque chose d’utile au lieu de
                reformuler les mêmes généralités ?
              </strong>
            </li>
          </ul>
        </InfoBox>

        <h2 id="pieges">
          7. Vérifiez ces cinq coûts et risques avant de choisir
        </h2>
        <ul>
          <li>
            <strong>Le prix après la promotion.</strong> Le « 2,99 €/mois »
            d&apos;Hostinger engage 48 mois payés d&apos;avance, puis renouvelle
            plus cher. Comparez le prix de la première période et celui du
            renouvellement.
          </li>
          <li>
            <strong>Les crédits IA au compteur.</strong> Lovable indique que le
            nombre de crédits consommés dépend de la fonction et de la
            complexité de la demande. Vérifiez le coût des retouches, de
            l&apos;hébergement et des fonctions utilisées par vos visiteurs dans
            la formule choisie.
          </li>
          <li>
            <strong>Le verrouillage.</strong> Wix indique qu&apos;un site créé
            sur sa plateforme ne peut pas être exporté pour fonctionner
            ailleurs. Demandez ce que vous pourrez récupérer avant de vous
            engager.
          </li>
          <li>
            <strong>La sécurité du code généré.</strong> Dans son rapport 2025,
            Veracode indique que 45 % des échantillons testés présentaient au
            moins une faiblesse de sécurité reconnue. Ce résultat ne décrit pas
            tous les outils ni tous les sites, mais il interdit de confondre
            génération et contrôle. Avant d’utiliser de vraies données, faites
            vérifier les accès, les composants extérieurs et les sauvegardes.
          </li>
          <li>
            <strong>Le conflit d&apos;intérêt des comparatifs.</strong> Une
            plateforme présente naturellement son propre outil sous un jour
            favorable, et certains comparatifs sont rémunérés par affiliation.
            Hagnéré Code vend du sur-mesure : comparez donc les affirmations de
            ce guide à leurs sources et à votre besoin.
          </li>
        </ul>

        <h2 id="cout-reel">
          8. Le coût réel sur 3 ans, toutes familles confondues
        </h2>
        <p>
          Le tableau suivant applique des hypothèses Hagnéré visibles à trois
          années d’utilisation. Il ne prétend pas reproduire tous les tarifs :
          remplacez l’abonnement mensuel, le renouvellement, le domaine et les
          options par les prix officiels affichés le jour de votre décision.
        </p>
        <GuideTable
          headers={[
            "Option",
            "Illustration Hagnéré sur 3 ans",
            "Ce que vous pouvez récupérer",
          ]}
          rows={[
            [
              "Générateur, formule d’entrée",
              "Environ 450 – 1 170 € : hypothèse de 10 – 30 €/mois pendant 36 mois + 90 € de domaine",
              "Domaine et contenus selon les conditions ; le site complet peut ne pas être exportable",
            ],
            [
              "Générateur, formule professionnelle",
              "Environ 1 530 – 3 690 € : hypothèse de 40 – 100 €/mois pendant 36 mois + 90 € de domaine",
              "Contenus et données selon l’outil ; fonctionnement lié à la plateforme",
            ],
            [
              "Prototype avec Lovable, Bolt ou v0",
              "Abonnement et crédits au tarif officiel + contrôle et reprise éventuels",
              "Code, données et conditions de reprise à vérifier dans la formule choisie",
            ],
            [
              "Site actuel amélioré",
              "Audit et corrections à chiffrer",
              "Vous conservez l’actif existant et évitez une reconstruction inutile",
            ],
            [
              "Sur-mesure assisté par IA (grille Hagnéré Code)",
              "À partir de 6 900 € selon le besoin",
              "Droits, dépôt, composants tiers et maintenance définis au devis",
            ],
          ]}
        />
        <p>
          Pour tester ou publier une présence simple, le générateur est
          nettement moins cher. Pour un site qui doit générer des clients, le
          sur-mesure n’est pas automatiquement meilleur : il doit apporter un
          avantage concret en matière de message, de parcours, d’intégration ou
          de propriété. L’amélioration du site actuel doit toujours être
          chiffrée comme une option. Propriété, droits, dépôt, hébergement et
          coûts récurrents doivent être vérifiés dans les deux contrats : aucun
          outil n&apos;implique automatiquement que vous possédiez tout ou
          qu&apos;il n&apos;existe aucun plafond. Les budgets complets par type
          de site sont dans notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            guide des prix d&apos;un site internet
          </Link>{" "}
          et notre{" "}
          <Link href="/guides/prix-site-vitrine">
            guide du prix d&apos;un site vitrine
          </Link>
          .
        </p>

        <h2 id="quand-outil-suffit">9. Quand un générateur suffit</h2>
        <p>
          Choisissez un générateur pour tester une offre, publier une présence
          minimale, lancer un projet secondaire ou travailler avec un budget
          très limité. Utilisez un outil de génération de code pour montrer une
          idée d’application à des associés avant de la construire. Dans les
          deux cas, gardez le domaine à votre nom, sauvegardez les contenus et
          fixez une date de réévaluation. Si le site actuel remplit déjà ces
          fonctions, ne le remplacez pas uniquement pour ajouter l’étiquette «
          IA ».
        </p>

        <h2 id="rgpd-propriete">
          10. Gardez vos droits, vos données et une maintenance
        </h2>
        <p>
          <strong>Pour les droits</strong>, vérifiez ce que la plateforme permet
          d’exporter et sous quel format. Lorsque du code ou des créations sont
          réalisés sur mesure, demandez une cession écrite adaptée ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            l’article L131-3 du Code de la propriété intellectuelle
          </a>{" "}
          encadre la précision de cette cession. Une trame figure dans notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges
          </Link>
          .
        </p>
        <p>
          <strong>Pour les données</strong>, le Règlement général sur la
          protection des données (RGPD) demande une analyse adaptée aux
          traitements réels. Mentions, information, consentement lorsque requis,
          fournisseurs et sécurité ne sont pas réglés par un bouton « générer ».
          Notre prestation{" "}
          <Link href="/services/securite-rgpd">
            sécurité et conformité RGPD
          </Link>{" "}
          traite ce sujet selon le besoin ; cette page n’est pas un avis
          juridique.
        </p>
        <p>
          <strong>Pour la maintenance</strong>, désignez qui intervient sur le
          contenu, les formulaires, les intégrations et les incidents. La
          plateforme entretient son infrastructure, pas toutes vos décisions ni
          toutes vos connexions. Le{" "}
          <Link href="/guides/cout-maintenance-site-internet">
            guide de la maintenance
          </Link>{" "}
          détaille les responsabilités à écrire.
        </p>

        <h2 id="verdict-par-profil">11. Quel choix selon votre besoin ?</h2>
        <GuideTable
          headers={["Votre profil", "Choix à examiner", "Pourquoi"]}
          rows={[
            [
              "Idée ou activité à tester",
              "Générateur peu coûteux",
              "Apprendre avant d’investir davantage",
            ],
            [
              "Prototype d’application à montrer",
              "Lovable, Bolt ou v0",
              "Démontrer le parcours, puis faire contrôler la production",
            ],
            [
              "Site actuel encore utile",
              "Le conserver et corriger les priorités",
              "Éviter une reconstruction sans bénéfice démontré",
            ],
            [
              "PME dont le site soutient les ventes",
              "Comparer amélioration, plateforme et sur-mesure",
              "Choisir selon le parcours, les connexions et les droits nécessaires",
            ],
            [
              "Entreprise limitée par sa plateforme",
              "Auditer avant de migrer",
              "Comparer le coût total, l’export et le bénéfice attendu",
            ],
            [
              "Catalogue standard",
              "Plateforme e-commerce existante",
              "Bénéficier des fonctions déjà maintenues",
            ],
          ]}
        />
        <p>
          Plus le site est proche de votre chiffre d’affaires, plus la qualité
          du parcours, des données et de la maintenance compte. Cela ne rend pas
          le sur-mesure automatique : notre comparatif{" "}
          <Link href="/guides/nextjs-ou-wordpress">Next.js ou WordPress</Link>{" "}
          comme notre guide{" "}
          <Link href="/guides/wix-ou-wordpress">Wix ou WordPress</Link>{" "}
          détaillent les alternatives.
        </p>

        <GuideInlineCTA
          title="Choisir entre un générateur, une amélioration ciblée et un site sur mesure"
          description="Décrivez le rôle du site, le budget, l’existant et les outils à connecter. Nous vous indiquons la voie la plus proportionnée, y compris si la bonne décision consiste à garder votre site actuel ou à utiliser un générateur peu coûteux."
          tags={[
            "Option la plus simple étudiée",
            "Coût sur plusieurs années",
            "Droits et sortie vérifiés",
          ]}
        />

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide (consultées
          en juillet 2026) :{" "}
          <a
            href="https://developers.google.com/search/blog/2023/02/google-search-and-ai-content"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central, position officielle sur le contenu IA (fév.
            2023)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/essentials/spam-policies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google, politique anti-spam « scaled content abuse » (mars 2024)
          </a>{" "}
          ;{" "}
          <a
            href="https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahrefs, part du contenu IA dans les nouvelles pages (2025)
          </a>{" "}
          ;{" "}
          <a
            href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub, étude contrôlée publiée par l&apos;éditeur de Copilot (55 %
            plus rapide sur la tâche étudiée)
          </a>{" "}
          ;{" "}
          <a
            href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
            target="_blank"
            rel="noopener noreferrer"
          >
            METR, essai randomisé développeurs expérimentés (juillet 2025)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veracode, GenAI Code Security Report 2025 (45 % des échantillons
            testés avec au moins une faiblesse)
          </a>{" "}
          ;{" "}
          <a
            href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wix, impossibilité d&apos;exporter un site (documentation
            officielle)
          </a>{" "}
          ;{" "}
          <a
            href="https://lovable.dev/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lovable, tarifs et propriété du code (« You own your code »)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.hostinger.com/fr/createur-de-sites-internet-ia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hostinger, offre promotionnelle et prix de renouvellement
          </a>{" "}
          ;{" "}
          <a
            href="https://support.wix.com/fr/article/prix-des-forfaits-premium-wix"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wix, prix variables selon la localisation et domaine personnalisé
          </a>
          . Les prix sont volatils : vérifiez ces pages avant de souscrire.
        </p>
        <p className="text-sm">
          <em>
            Ces fourchettes et comparaisons sont fournies à titre indicatif :
            seul un devis établi sur la liste exacte des travaux vous engage.
            Wix, Hostinger, Durable, Framer, Lovable, Bolt, v0, ChatGPT, Claude,
            Copilot, Cursor et Shopify sont des marques de leurs propriétaires
            respectifs ; ce guide est indépendant et sans affiliation — aucun
            lien de ce guide n&apos;est rémunéré.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
