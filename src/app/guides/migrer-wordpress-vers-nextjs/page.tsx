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

const guide = getGuide("migrer-wordpress-vers-nextjs");

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
  headline: guide.heroTitle,
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
      "Next.js",
      "WordPress",
      "SEO technique",
      "Migrations de sites",
      "Architecture headless",
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
      name: "Migrer WordPress vers Next.js",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte une migration de WordPress vers Next.js ?",
    answer:
      "Les scénarios Hagnéré de ce guide retiennent 4 000 à 9 000 € pour une vitrine, 9 000 à 20 000 € pour un site à contenu et davantage avec une boutique ou des connexions métier. Ce n'est pas une moyenne de devis : nous faisons varier le nombre de mises en page, les fonctions à remplacer et les contenus difficiles à récupérer.",
  },
  {
    question: "Combien de temps prend la migration ?",
    answer:
      "Pour préparer le calendrier, nos scénarios retiennent 2 à 4 semaines pour une petite vitrine, 6 à 10 semaines pour un site de 100 à 500 articles et davantage pour un grand site ou une boutique. Ce ne sont pas des délais de marché : l’inventaire, les validations, le nettoyage du contenu et les tests doivent apparaître dans le planning du devis.",
  },
  {
    question: "Vais-je perdre mon référencement Google en migrant ?",
    answer:
      "Une baisse ne peut jamais être exclue. Conserver les mêmes adresses réduit le risque, sans le rendre nul. Si elles changent, chaque ancienne page doit renvoyer vers son véritable équivalent. Prévoyez inventaire, tests, contrôle de l'indexation et suivi dans la Search Console après la mise en ligne.",
  },
  {
    question: "Que devient mon contenu : articles, images, pages ?",
    answer:
      "L’export WordPress couvre notamment les articles, pages, catégories et champs personnalisés. Les fichiers médias, les mises en page Elementor ou Divi et les données ajoutées par des extensions doivent être contrôlés séparément. Faites récupérer un échantillon représentatif avant le devis.",
  },
  {
    question:
      "Mon équipe pourra-t-elle encore modifier le site sans développeur ?",
    answer:
      "Oui pour les textes et images si une interface d'administration est prévue. La création de nouvelles mises en page ou fonctions demandera plus souvent un développeur. Faites tester l'éditeur par les personnes qui publient avant de choisir l'architecture.",
  },
  {
    question:
      "Peut-on garder WordPress juste pour l'administration (headless) ?",
    answer:
      "Oui. WordPress peut rester l'outil d'édition tandis que Next.js affiche le site public. L'équipe conserve ses habitudes, mais il faut maintenir deux environnements et reconstruire la prévisualisation. Les constructeurs visuels ne contrôlent plus directement l'affichage.",
  },
  {
    question: "J'ai une boutique WooCommerce, est-ce que ça se migre ?",
    answer:
      "Oui, mais ce n'est plus une simple migration de site. Catalogue, panier, paiement, comptes clients, stocks et extensions métier doivent être audités. Vous pouvez garder la boutique, ne migrer que la vitrine ou traiter le commerce comme un projet séparé.",
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
          { label: "Migrer WordPress vers Next.js" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre site WordPress est lent, fragile ou difficile à faire évoluer ? Avant de le reconstruire, comparez quatre choix : le conserver, le réparer, améliorer son hébergement ou le migrer vers Next.js."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Commencez par auditer l'existant",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Conserver les adresses réduit le risque SEO",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Scénarios Hagnéré : à partir de 4 000 €",
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
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          {
            href: "/guides/refonte-sans-perdre-son-seo",
            label: "Refonte sans perdre son SEO",
          },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Prix d'une refonte",
          },
          {
            href: "/guides/cout-maintenance-site-internet",
            label: "Coût de la maintenance",
          },
          { href: "/services/sites-vitrines", label: "Sites vitrines" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Migration WordPress → Next.js : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous vous demandez s&apos;il faut remplacer votre WordPress par un
          site Next.js. Concrètement, cela signifie reconstruire ce que voient
          les visiteurs dans une technologie séparée ; WordPress peut rester
          l&apos;outil de publication ou être remplacé. La réponse simple :{" "}
          <strong>
            ne migrez pas uniquement parce que WordPress est ancien ou
            qu&apos;un score de vitesse est moyen
          </strong>
          . Commencez par chiffrer une réparation, un meilleur hébergement et
          une migration. Next.js devient intéressant si un problème mesuré de
          vitesse, de sécurité ou d&apos;évolution justifie réellement le coût
          et le changement d&apos;outil pour votre équipe.
        </p>

        <InfoBox
          variant="amber"
          title="Le bon diagnostic tient en quatre questions"
        >
          Votre site fait-il perdre des demandes de contact ? Combien coûte sa
          maintenance annuelle ? Quelles fonctions dépendent d&apos;extensions
          difficiles à remplacer ? Votre équipe doit-elle pouvoir créer seule de
          nouvelles mises en page ? Répondez avec des faits et des factures. Les
          mots techniques seront expliqués lorsqu&apos;ils deviennent utiles.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Faut-il vraiment migrer ?" },
            {
              id: "pourquoi-migrer",
              label: "2. Les raisons valables de migrer",
            },
            {
              id: "trois-architectures",
              label: "3. Trois façons de reconstruire",
            },
            {
              id: "ce-qui-casse",
              label: "4. Ce qui casse, et ce qui le remplace",
            },
            {
              id: "woocommerce",
              label: "5. WooCommerce : le cas qu'il faut traiter à part",
            },
            { id: "seo", label: "6. Protéger le référencement" },
            {
              id: "etapes",
              label: "7. Avant, pendant et après la mise en ligne",
            },
            { id: "prix", label: "8. Budget et coût sur trois ans" },
            { id: "quand-ne-pas-migrer", label: "9. Quand garder WordPress" },
            {
              id: "contrat",
              label: "10. Ce que le contrat doit prévoir",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Faut-il vraiment migrer ?</h2>
        <p>
          Migrer signifie garder le contenu et, si possible, les mêmes adresses,
          mais remplacer la partie technique qui affiche le site. Pour préparer
          un budget, comptez{" "}
          <strong>
            4 000 à 9 000 € pour une vitrine, 9 000 à 20 000 € pour un site à
            contenu et davantage pour une boutique
          </strong>
          . Ce sont des scénarios Hagnéré, pas une moyenne du marché. Ils
          supposent que le contenu peut être récupéré et font varier le nombre
          de modèles de pages, les fonctions à remplacer et le volume à
          contrôler. Notre <Link href="/tarifs">grille publique</Link> permet de
          situer nos offres ; seul l&apos;inventaire du site permet un devis.
          Même avec les mêmes adresses, aucune agence ne peut garantir
          l&apos;absence de fluctuation dans Google.
        </p>
        <p>
          Next.js peut faciliter un site rapide, réduire l&apos;exposition aux
          extensions WordPress et donner plus de liberté de conception. Il
          n&apos;élimine ni la maintenance, ni les failles, ni le besoin de
          développeurs. WordPress reste adapté à de nombreuses entreprises : si
          votre site est rapide, tenu à jour et facile à publier, le conserver
          est souvent le meilleur investissement.
        </p>
        <GuideTable
          headers={[
            "Votre situation",
            "Option à examiner",
            "Budget d'ordre de grandeur",
          ]}
          rows={[
            [
              "WordPress récent, rapide et simple à maintenir",
              "Gardez-le et mesurez à nouveau",
              "Maintenance et améliorations ciblées",
            ],
            [
              "Site lent à cause de l'hébergement, des images ou de quelques extensions",
              "Réparez avant de reconstruire",
              "Audit puis corrections chiffrées",
            ],
            [
              "Vitrine ancienne, refonte nécessaire et peu de contenu",
              "Comparez refonte WordPress et Next.js",
              "Migration Next.js : 4 000 – 9 000 €",
            ],
            [
              "Blog stratégique avec une équipe qui publie souvent",
              "Testez WordPress conservé pour l'édition",
              "Scénario : 12 000 – 25 000 €",
            ],
            [
              "Boutique WooCommerce au cœur du chiffre d'affaires",
              "Traitez-la comme un projet séparé",
              "Scénario : 20 000 – 50 000 € et plus",
            ],
          ]}
        />

        <h2 id="pourquoi-migrer">2. Les raisons valables de migrer</h2>
        <p>
          « WordPress est dépassé », « Next.js est forcément plus rapide » ou «
          Google vous classera mieux » ne sont pas des raisons suffisantes.{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/page-experience?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google explique
          </a>{" "}
          qu&apos;une bonne expérience de page peut contribuer au référencement,
          sans garantir une bonne position. Voici les raisons à examiner avec
          vos propres mesures.
        </p>
        <p>Quatre situations peuvent justifier une migration :</p>
        <ul>
          <li>
            <strong>La lenteur gêne un parcours important.</strong> Testez les
            pages qui portent les demandes, les achats ou les inscriptions. Une
            meilleure note technique ne prouve pas une hausse des ventes :
            relevez aussi les formulaires envoyés et les abandons.
          </li>
          <li>
            <strong>
              La maintenance de WordPress devient difficile à assurer.
            </strong>{" "}
            La{" "}
            <a
              href="https://wordpress.org/documentation/article/manage-plugins/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation officielle de WordPress
            </a>{" "}
            recommande de tenir les extensions à jour. Inventoriez celles que
            vous utilisez, la date de leur dernière mise à jour, les sauvegardes
            et le délai d&apos;intervention avant de conclure qu&apos;une
            migration est nécessaire.
          </li>
          <li>
            <strong>
              Certains coûts récurrents deviennent disproportionnés.
            </strong>{" "}
            Des licences d&apos;extensions et une partie de la maintenance
            WordPress peuvent disparaître. Elles sont remplacées par
            l&apos;hébergement, les mises à jour du nouveau code et le support
            des services connectés.
          </li>
          <li>
            <strong>
              Une fonction importante est difficile à construire proprement.
            </strong>{" "}
            Une interface ou un parcours réellement particulier peut être plus
            simple à maintenir dans un projet conçu pour lui. Mais un thème
            WordPress sur mesure peut aussi offrir une grande liberté : comparez
            les deux solutions à fonction et niveau de finition identiques.
          </li>
        </ul>
        <InfoBox variant="blue" title="Quel résultat justifie la dépense ?">
          Notez le problème observé, son coût actuel et le résultat attendu. Si
          un meilleur hébergement, une mise à jour ou quelques corrections
          suffisent, gardez WordPress. Si un parcours important reste impossible
          à construire ou à maintenir, comparez une refonte WordPress et une
          reconstruction en Next.js sur les mêmes fonctions. Le calcul sur trois
          ans présenté plus loin aide à comparer ; il ne décide pas à votre
          place.
        </InfoBox>

        <h2 id="trois-architectures">3. Trois façons de reconstruire</h2>
        <p>
          « Migrer vers Next.js » recouvre trois projets très différents, dont
          le coût et les conséquences pour votre équipe n&apos;ont rien à voir.
          Voici une grille pour les arbitrer du point de vue d&apos;un
          dirigeant.
        </p>
        <GuideTable
          headers={["Organisation", "Pour qui", "Coût et contrainte à prévoir"]}
          rows={[
            [
              "Garder WordPress pour écrire ; Next.js affiche le public",
              "Équipe éditoriale attachée à WordPress",
              "Deux environnements à héberger et maintenir ; prévisualisation à reconstruire",
            ],
            [
              "Déplacer le contenu dans un nouvel outil d'édition",
              "Site à contenu structuré et équipe prête à changer",
              "Migration, formation et abonnement éventuel par utilisateur",
            ],
            [
              "Conserver le contenu directement avec le code",
              "Petite vitrine modifiée rarement",
              "Peu de licences, mais un développeur intervient pour publier ou changer la structure",
            ],
          ]}
        />
        <p>
          <strong>Garder WordPress pour écrire</strong> limite la migration du
          contenu et la formation. Elle a deux coûts cachés : vous payez et
          maintenez deux environnements, et la surface d&apos;attaque des
          extensions reste présente côté administration. Les constructeurs
          visuels comme Elementor ne pilotent plus l&apos;affichage : c&apos;est
          souvent le point de rupture avec l&apos;équipe qui publie.
        </p>
        <p>
          <strong>Changer d&apos;outil d&apos;édition</strong> permet de
          structurer le contenu pour votre métier, mais impose une migration et
          une formation. Ces outils peuvent facturer par personne, par volume ou
          par formule. Vérifiez le prix officiel actuel, l&apos;export et la
          possibilité d&apos;héberger ailleurs avant de choisir.
        </p>
        <p>
          <strong>Placer le contenu avec le code</strong> peut réduire les
          licences, mais a un prix organisationnel clair : publier passe par un
          développeur ou par un dépôt de code — le coffre en ligne où le code
          source est stocké et historisé, de type GitHub. Cette organisation
          convient aux vitrines dont le contenu bouge quelques fois par an, pas
          à un site qui publie chaque semaine.
        </p>
        <p>
          Une question revient systématiquement :{" "}
          <strong>où le site est-il hébergé après la migration ?</strong> Des
          plateformes spécialisées comme Vercel ou Netlify simplifient la mise
          en ligne ; des acteurs européens ou français peuvent aussi convenir.
          Le pays de la société ne suffit pas à répondre au RGPD : vérifiez la
          localisation, les transferts, les sous-traitants, les sauvegardes et
          les fonctions réellement utilisées.
        </p>
        <InfoBox
          variant="blue"
          title="Faites tester l’édition avant de choisir"
        >
          Demandez aux personnes qui publient de créer un article, modifier une
          page et prévisualiser le résultat. Notez combien de personnes
          publient, à quelle fréquence et si elles doivent inventer de nouvelles
          mises en page. Le meilleur montage technique est celui que votre
          équipe peut réellement utiliser.
        </InfoBox>

        <h2 id="ce-qui-casse">4. Ce qui casse, et ce qui le remplace</h2>
        <p>
          Une extension WordPress ne fonctionne pas directement dans le nouveau
          site. Chaque fonction réellement utilisée doit donc être supprimée,
          reconstruite ou remplacée. Faites apparaître ces choix dans le devis
          pour éviter un coût découvert en cours de chantier.
        </p>
        <h3>Demandes de contact et mesure</h3>
        <ul>
          <li>
            <strong>Les formulaires et les e-mails automatiques</strong> doivent
            être reconstruits avec leur envoi, leur protection contre les
            messages indésirables et, si nécessaire, leur connexion à votre
            logiciel commercial.
          </li>
          <li>
            <strong>Le suivi d&apos;audience et des campagnes</strong> doit être
            réinstallé et testé avant la mise en ligne. Sinon, vous perdez le
            point de comparaison précisément au moment où vous en avez besoin.
          </li>
          <li>
            <strong>La gestion des traceurs</strong> dépend des outils remis en
            place. La{" "}
            <a
              href="https://www.cnil.fr/fr/questions-reponses-lignes-directrices-modificatives-et-recommandation-cookies-traceurs"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL
            </a>{" "}
            prévoit des cas soumis au consentement et certaines exemptions sous
            conditions : faites reproduire la règle correspondant à vos
            traceurs, pas simplement l&apos;ancien bandeau.
          </li>
        </ul>

        <h3>Publication et référencement</h3>
        <ul>
          <li>
            <strong>Les réglages de référencement</strong> gérés par Yoast ou
            Rank Math ne pilotent plus le site public. Titres, descriptions,
            plan du site et données structurées doivent être repris et testés.
          </li>
          <li>
            <strong>Les mises en page Elementor ou Divi</strong> ne deviennent
            pas automatiquement des pages Next.js. Comptez les modèles
            différents et leurs exceptions avant le devis.
          </li>
          <li>
            <strong>Les langues, la recherche et les commentaires</strong>{" "}
            demandent une décision explicite : conserver la fonction, la
            remplacer ou la supprimer si elle n&apos;est plus utilisée.
          </li>
        </ul>

        <h3>Performance et sécurité</h3>
        <p>
          Les extensions de cache, d&apos;optimisation ou de sécurité ne
          protègent pas le nouveau site public. Le devis doit prévoir les
          protections, les sauvegardes et les tests adaptés au nouvel
          hébergement. Si WordPress reste l&apos;outil d&apos;édition, il doit
          toujours être mis à jour et protégé de son côté. La boutique
          WooCommerce demande, elle, la décision séparée de la section suivante.
        </p>
        <InfoBox variant="amber" title="Le poste de devis souvent sous-estimé">
          Le contenu produit par un constructeur de pages arrive souvent avec
          une mise en forme difficile à réutiliser. Un article simple peut être
          transféré automatiquement ; une page composée dans Elementor demande
          souvent une reconstruction. Avant de signer, demandez à votre
          prestataire de{" "}
          <strong>compter vos gabarits de pages distincts</strong> — pas
          seulement vos pages. Le nombre de modèles, leurs exceptions et les
          fonctions qu&apos;ils contiennent donnent une meilleure estimation du
          travail.
        </InfoBox>

        <h2 id="woocommerce">
          5. WooCommerce : le cas qu&apos;il faut traiter à part
        </h2>
        <p>
          <strong>
            Une boutique WooCommerce ne se migre pas comme un site éditorial.
          </strong>{" "}
          Elle encaisse des paiements, tient des commandes et parfois des stocks
          : une erreur peut interrompre le chiffre d&apos;affaires.
        </p>
        <p>
          Le catalogue, les fiches produit et les catégories sont généralement
          exportables, sous réserve de contrôler variantes, images et champs
          personnalisés. Le panier, le paiement, les comptes clients et
          l&apos;authentification demandent un audit séparé. Si WordPress
          continue de gérer les commandes, il reste à héberger, sécuriser et
          dimensionner pour le trafic envoyé par le nouveau site.
        </p>
        <p>
          Trois options doivent être comparées. Leur risque dépend de votre
          boutique, de ses extensions et de l&apos;équipe qui l&apos;exploite :
        </p>
        <ul>
          <li>
            <strong>Garder WooCommerce tel quel</strong> si la boutique
            fonctionne correctement.
          </li>
          <li>
            <strong>Ne migrer que la partie éditoriale et la vitrine</strong>,
            en laissant la boutique où elle est.
          </li>
          <li>
            <strong>
              Reconstruire ou changer la base de la boutique dans un projet
              séparé
            </strong>
            , après comparaison de WooCommerce, d&apos;une autre plateforme et
            d&apos;une solution spécifique sur les mêmes besoins.
          </li>
        </ul>
        <p>
          Notre{" "}
          <Link href="/guides/prix-site-e-commerce">
            guide du prix d&apos;un site e-commerce
          </Link>{" "}
          chiffre les trois, et notre{" "}
          <Link href="/guides/woocommerce-ou-shopify">
            comparatif WooCommerce ou Shopify
          </Link>{" "}
          aide à choisir la base du futur site avant de parler technique.
        </p>

        <h2 id="seo">6. Protéger le référencement</h2>
        <p>
          Une migration peut modifier ce que Google explore, comprend et
          affiche. La documentation de Google permet de réduire les erreurs
          évitables, mais pas de garantir des positions identiques.
        </p>
        <ul>
          <li>
            <strong>
              Conservez les mêmes adresses lorsque c&apos;est possible.
            </strong>{" "}
            Vous évitez ainsi une partie des redirections et facilitez la
            comparaison avant/après.
          </li>
          <li>
            <strong>
              Si une adresse change, utilisez une redirection permanente.
            </strong>{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google recommande
            </a>{" "}
            de conserver ces redirections au moins un an. Gardez-les plus
            longtemps si elles restent utiles.
          </li>
          <li>
            <strong>Ne redirigez jamais tout vers l&apos;accueil.</strong>{" "}
            Chaque adresse doit aller vers son équivalent réel. En
            l&apos;absence d&apos;équivalent, une page introuvable claire vaut
            mieux qu&apos;un renvoi trompeur.
          </li>
          <li>
            <strong>Ne changez qu&apos;une chose à la fois.</strong> Évitez de
            cumuler migration technique, nouvelles adresses, nouveau domaine et
            refonte massive du contenu. Vous identifierez plus facilement
            l&apos;origine d&apos;un problème.
          </li>
          <li>
            <strong>Surveillez au lieu de supposer.</strong> Comparez pages
            indexées, erreurs, clics, demandes de contact et positions pendant
            plusieurs semaines. Le délai varie selon la taille et la fréquence
            d&apos;exploration du site.
          </li>
        </ul>
        <p>
          L&apos;inventaire doit couvrir aussi les pages qui reçoivent peu de
          visites : leur trafic cumulé peut être important. Pour chaque adresse,
          contrôlez le titre, la description, le contenu principal, les liens
          internes, l&apos;adresse canonique et, le cas échéant, la redirection.
          Un cas public sans baisse déclarée reste un exemple, pas une garantie
          pour le vôtre.
        </p>
        <InfoBox
          variant="emerald"
          title="Le scénario généralement le plus simple à contrôler"
        >
          <strong>Conserver les adresses à l&apos;identique.</strong> Next.js
          n&apos;impose aucune structure : votre
          /nos-services/plomberie-chambery/ reste exactement le même après la
          migration. Cela retire une source de risque, sans supprimer les autres
          : contenu manquant, liens cassés, balises différentes ou site de test
          accidentellement indexé. La Search Console — le tableau de bord
          gratuit de Google — sert à surveiller le résultat. Nous ne modifions
          une adresse que lorsque le gain est démontrable. Le protocole complet,
          avec les seuils d&apos;alerte à surveiller, est dans notre{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">
            guide de la refonte sans perdre son SEO
          </Link>
          .
        </InfoBox>

        <h2 id="etapes">7. Avant, pendant et après la mise en ligne</h2>
        <p>
          Les durées de la section suivante couvrent la préparation et la
          construction. Dans nos scénarios, nous réservons ensuite trente à
          soixante jours de surveillance. Cette durée doit être adaptée à la
          taille du site et à ses résultats habituels : une migration n&apos;est
          pas terminée lorsque la nouvelle page d&apos;accueil apparaît.
        </p>
        <GuideTable
          headers={[
            "Moment",
            "Travail indispensable",
            "Ce que vous devez recevoir",
          ]}
          rows={[
            [
              "Avant la construction",
              "Liste des pages, fonctions, formulaires, contenus et résultats actuels",
              "Inventaire daté et décision pour chaque ancienne adresse",
            ],
            [
              "Pendant la construction",
              "Récupération d'un échantillon, création des pages et tests progressifs",
              "Site privé que votre équipe peut relire et utiliser",
            ],
            [
              "Avant la mise en ligne",
              "Vérification des liens, formulaires, mobiles, mesures et redirections",
              "Liste de contrôles terminée, sauvegarde et procédure de retour",
            ],
            [
              "Le jour du changement",
              "Faire pointer le domaine vers le nouveau site sans toucher à la messagerie",
              "Contrôle immédiat des pages importantes et des demandes de contact",
            ],
            [
              "Pendant 30 à 60 jours",
              "Surveiller les pages introuvables, l'indexation, les clics et les conversions",
              "Bilan comparé à la situation de départ et corrections prévues",
            ],
          ]}
        />

        <h2 id="prix">8. Budget et coût sur trois ans</h2>
        <p>
          Les fourchettes ci-dessous sont des scénarios Hagnéré, pas un relevé
          statistique du marché. Elles supposent que les contenus sont
          récupérables et font varier le nombre de modèles de pages, les
          fonctions à reconstruire et les contrôles nécessaires. Remplacez-les
          par un inventaire et des devis portant sur les mêmes travaux.
        </p>
        <GuideTable
          headers={[
            "Type de site",
            "Budget et délai indicatifs",
            "Ce qui fait varier",
          ]}
          rows={[
            [
              "Vitrine 10 – 30 pages",
              "4 000 – 9 000 € ; 2 à 4 semaines",
              "Modèles de pages et conservation ou non du design",
            ],
            [
              "Site à contenu, 100 – 500 articles",
              "9 000 – 20 000 € ; 6 à 10 semaines",
              "Constructeur de pages, langues et qualité des contenus",
            ],
            [
              "WordPress conservé pour écrire",
              "12 000 – 25 000 € ; 6 à 12 semaines",
              "Deux environnements et prévisualisation à reconstruire",
            ],
            [
              "Site complexe, milliers de pages",
              "20 000 – 45 000 € ; 3 à 6 mois",
              "Types de contenus, exceptions et connexions métier",
            ],
            [
              "Boutique, traitée comme projet séparé",
              "20 000 – 50 000 € et plus ; 2 à 6 mois",
              "Commande, paiement, comptes, stocks et logiciel de gestion",
            ],
            [
              "Migration sans nouveau design",
              "4 000 – 8 000 € ; 2 à 4 semaines",
              "Fidélité du rendu et fonctions présentes dans le thème",
            ],
          ]}
        />
        <p>
          Pour contrôler un devis, cherchez quatre lignes distinctes : design,
          récupération des contenus, reconstruction des fonctions, puis tests et
          protection du référencement. Si l’une manque, demandez si elle est
          inutile, incluse ailleurs ou exclue. Un site qui garde son design peut
          demander davantage de nettoyage de contenu, et inversement.
        </p>
        <p>
          Chez <Link href="/services/sites-vitrines">Hagnéré Code</Link>, une
          migration entre dans notre grille publique — 6 900 €, 14 900 € ou 22
          000 € et plus selon les travaux — au forfait fixe après analyse du
          site. Le plan de redirection, les objectifs de performance, les
          vérifications et la période de correction dépendent de la liste
          convenue. Le détail de ce que nous construisons est sur notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link>. Notre{" "}
          <Link href="/guides/prix-refonte-site-internet">
            guide du prix d&apos;une refonte
          </Link>{" "}
          détaille comment lire et comparer deux devis portant sur les mêmes
          travaux.
        </p>

        <h3 id="tco">Comparez le coût total sur trois ans</h3>
        <p>
          Garder WordPress n&apos;est pas gratuit ; migrer vers Next.js ne se
          résume pas au prix de création. Comparez tout ce que chaque scénario
          coûte sur trois ans : audit, chantier, hébergement, licences,
          maintenance, évolutions, temps de l&apos;équipe et éventuels
          incidents. Utilisez vos factures des douze derniers mois pour
          WordPress et des offres écrites pour la migration.
        </p>
        <FormulaBox>
          {`GARDER WORDPRESS — 3 ANS
= 3 × (hébergement + licences + maintenance annuelle)
+ corrections prévues + temps interne

MIGRER VERS NEXT.JS — 3 ANS
= prix de migration
+ 36 × hébergement mensuel
+ maintenance + services externes + temps interne

Comparez seulement des montants qui couvrent les mêmes fonctions.`}
        </FormulaBox>
        <p>
          Une petite vitrine peut rendre la migration compétitive, tandis
          qu&apos;un site à contenu peut rester moins cher sous WordPress. Le
          résultat change avec le nombre d&apos;évolutions, le niveau de support
          et le temps réellement consacré par votre équipe.
        </p>
        <p>
          N&apos;ajoutez pas automatiquement un revenu supposé lié à la vitesse.
          Mesurez d&apos;abord le taux de contact actuel, puis testez-le après
          les corrections ou la migration. La décision peut être de migrer
          maintenant, d&apos;optimiser WordPress, ou d&apos;attendre une refonte
          déjà prévue. Aucun calendrier de rentabilité n&apos;est universel.
        </p>

        <h2 id="quand-ne-pas-migrer">9. Quand garder WordPress</h2>
        <p>
          Next.js n&apos;est pas le choix par défaut d&apos;un site
          professionnel. WordPress reste souvent plus économique et plus facile
          à administrer. Voici cinq situations où conserver ou améliorer
          l&apos;existant mérite la priorité.
        </p>
        <ol>
          <li>
            <strong>Votre WordPress est récent et rapide.</strong> Si les
            indicateurs d&apos;expérience de Google sont satisfaisants et que
            les visiteurs accomplissent facilement leur objectif, commencez par
            entretenir : faire le ménage dans les extensions, changer
            d&apos;hébergement, alléger les images. Vous pouvez ainsi obtenir le
            résultat attendu sans financer une migration.
          </li>
          <li>
            <strong>
              Le budget ne couvre pas l&apos;inventaire, les tests et la
              surveillance.
            </strong>{" "}
            Le montant dépend du site ; il n&apos;existe pas de seuil universel.
            Si les postes essentiels ne peuvent pas être financés, reportez la
            migration et consacrez le budget à{" "}
            <Link href="/services/maintenance-evolution">
              l&apos;entretien de votre WordPress existant
            </Link>
            .
          </li>
          <li>
            <strong>Votre équipe éditoriale est nombreuse et exigeante.</strong>{" "}
            Publication quotidienne, prévisualisation instantanée, mise en page
            libre : le temps perdu dans un nouvel outil peut annuler une partie
            du bénéfice technique. Faites essayer le futur mode de publication
            avant de changer.
          </li>
          <li>
            <strong>
              Votre boutique WooCommerce est imbriquée avec des extensions
              métier.
            </strong>{" "}
            Si plusieurs fonctions indispensables n&apos;ont pas
            d&apos;équivalent identifié, la migration devient un projet
            commercial et métier à chiffrer séparément.
          </li>
          <li>
            <strong>Vous voulez juste un nouveau design.</strong> Changer
            d&apos;apparence n&apos;impose pas de changer de base technique.
            Demandez aussi le prix d&apos;un nouveau thème ou d&apos;une refonte
            WordPress, puis comparez le résultat, le délai et la maintenance.
          </li>
        </ol>

        <h2 id="contrat">10. Ce que le contrat doit prévoir</h2>
        <p>
          Le paiement ne règle pas à lui seul tous les droits sur le code, le
          design et les contenus. L&apos;article L131-3 du Code de la propriété
          intellectuelle encadre la cession de droits. Le contrat doit donc
          identifier ce qui est créé pour vous, ce qui vient de composants tiers
          et les droits ou licences dont vous disposez. Faites adapter et
          valider ces clauses pour votre projet.
        </p>
        <p>
          La question pratique est simple : si vous changez d&apos;agence
          demain, le nouveau prestataire reçoit-il le code, les données, les
          accès, la documentation et le droit de les utiliser ? Faites décrire
          cette remise avant la signature, avec son délai et son éventuel coût.
        </p>
        <p>Les cinq points à négocier et faire écrire :</p>
        <ul>
          <li>
            <strong>Droits sur le code, le design et les contenus</strong> :
            éléments concernés, durée, usages, territoire, moment d&apos;effet
            et composants tiers.
          </li>
          <li>
            <strong>Dépôt du code et comptes techniques</strong> : précisez qui
            les détient pendant le chantier et ce qui vous est remis.
          </li>
          <li>
            <strong>Nom de domaine et services externes</strong> : titulaire,
            administrateurs, facturation et procédure de récupération.
          </li>
          <li>
            <strong>Changement de prestataire</strong> : format des données,
            documentation, assistance, calendrier et coût de sortie.
          </li>
          <li>
            <strong>Plan de retour arrière</strong> : durée de conservation de
            l&apos;ancien site, sauvegarde testée, responsabilités et procédure.
          </li>
        </ul>
        <p>
          Ces exigences valent pour nous comme pour n&apos;importe quel
          prestataire : notre{" "}
          <Link href="/guides/choisir-son-agence-web">
            guide pour choisir son agence web
          </Link>{" "}
          donne la méthode complète de vérification, y compris celle qui permet
          de nous auditer.
        </p>

        <GuideInlineCTA
          title="Décidez entre réparer, conserver ou migrer"
          description="Indiquez l'adresse du site, les difficultés constatées et la façon dont votre équipe publie. Nous vous dirons quelle option mérite un audit et ce qu'il faut mesurer avant un devis."
        />

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Consultées en juillet 2026 :{" "}
          <a
            href="https://wordpress.org/documentation/article/tools-export-screen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress, contenu couvert par l&apos;export
          </a>{" "}
          ;{" "}
          <a
            href="https://developer.wordpress.org/rest-api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress, interface officielle d&apos;accès aux contenus
          </a>{" "}
          ;{" "}
          <a
            href="https://wordpress.org/documentation/article/manage-plugins/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress, mise à jour et contrôle des extensions
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central, migrations de site avec changement d&apos;URL
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/page-experience?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central, expérience de page et référencement
          </a>{" "}
          ;{" "}
          <a
            href="https://www.cnil.fr/fr/questions-reponses-lignes-directrices-modificatives-et-recommandation-cookies-traceurs"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL, consentement et exemptions pour certains traceurs
          </a>{" "}
          ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            Légifrance, article L131-3 du Code de la propriété intellectuelle
          </a>
          .
        </p>
        <p className="text-sm">
          Les fourchettes de prix sont des scénarios Hagnéré fondés sur les
          tailles et fonctions décrites dans le tableau, pas une moyenne de
          marché. Seul un inventaire du site existant permet un chiffrage ferme.
          Cet article ne constitue pas un conseil juridique personnalisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
