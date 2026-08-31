import Image from "next/image";
import Link from "next/link";
import {
  FormulaBox,
  GuideTable,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { SearchVisibilityDiagnostic } from "@/components/guides/SearchVisibilityDiagnostic";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import {
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";

const guide = getGuide("pourquoi-site-pas-visible-google");
const breadcrumbName = "Pourquoi mon site n’est pas visible sur Google";
const imageAlt =
  "Diagnostiquer une URL de l’exploration aux clics dans Google Search Console";

export const metadata = buildGuideMetadata(guide, imageAlt);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "url-recherche",
    number: "01",
    label: "Réponse directe",
    shortLabel: "Réponse",
  },
  {
    id: "exploration",
    number: "02",
    label: "Ce que répond votre serveur",
    shortLabel: "Serveur",
  },
  {
    id: "indexation",
    number: "03",
    label: "Ce que Google a retenu",
    shortLabel: "Index",
  },
  {
    id: "impressions",
    number: "04",
    label: "Lire les impressions",
    shortLabel: "Impressions",
  },
  {
    id: "clics",
    number: "05",
    label: "Ce que Performances mesure",
    shortLabel: "Performances",
  },
  {
    id: "incidents",
    number: "06",
    label: "Ce qui rate",
    shortLabel: "Incidents",
  },
  {
    id: "fiche",
    number: "07",
    label: "Le délai et le relevé",
    shortLabel: "Délai",
  },
  {
    id: "decision",
    number: "08",
    label: "Corriger, attendre ou auditer",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "verifier",
    num: "01",
    label: "Vérifier par soi-même",
    items: [
      {
        question:
          "La commande site: prouve-t-elle que ma page est indexée\u00a0?",
        answer:
          "L’opérateur est utile pour trouver une page, jamais pour prouver son absence. Sa documentation écrit qu’il ne renvoie pas nécessairement toutes les URL indexées sous le préfixe demandé, et qu’une requête site: sans mot-clé ne classe pas les résultats. La même page ajoute un piège\u00a0: site:https://www.exemple.fr et site:https://exemple.fr/ ne renvoient pas les mêmes résultats. Pour connaître l’état enregistré par Google, il n’existe qu’un endroit, l’inspection d’URL de la Search Console.",
      },
      {
        question:
          "Ma page sort sur mon téléphone mais pas sur celui de mon associé\u00a0: qui a raison\u00a0?",
        answer:
          "Les deux, et aucun des deux ne mesure quoi que ce soit. Une recherche manuelle dépend du lieu, de l’appareil, de la langue et de l’historique du navigateur\u00a0; deux personnes ne voient pas la même page de résultats. Le rapport Performances, lui, enregistre les impressions réellement servies, avec un pays, un appareil et une période que vous fixez. Comparez toujours deux relevés pris avec exactement les mêmes filtres, sinon vous comparez deux contextes.",
      },
      {
        question:
          "Un sitemap est-il utile quand on a moins de cent pages\u00a0?",
        answer:
          "Il aide Google à découvrir des URL, sans garantir ni exploration ni indexation. Sa limite officielle plafonne un fichier à 50\u00a0Mo sans compression ou 50\u00a0000\u00a0URL, très loin d’un site de cent pages\u00a0: le sitemap n’est donc jamais le facteur limitant à cette taille. Ce qui compte davantage, c’est qu’il ne déclare que les adresses que vous voulez voir retenues, et qu’il ne contredise ni vos redirections ni vos balises canoniques.",
      },
    ],
  },
  {
    key: "delais",
    num: "02",
    label: "Délais et frontières",
    items: [
      {
        question:
          "Je n’ai jamais ouvert de Search Console\u00a0: par où commencer\u00a0?",
        answer:
          "Par la création de la propriété, avant tout diagnostic. Le service est gratuit, et Google demande de prouver que le site vous appartient avant d’ouvrir les rapports\u00a0: la personne qui gère votre hébergement ou votre nom de domaine sait le faire. Sans cette étape, les sections 03 à 05 de ce guide ne sont pas reproductibles, puisque leurs champs n’existent nulle part ailleurs. Les commandes de la section 02, elles, se jouent depuis n’importe quel poste, sans aucun compte.",
      },
      {
        question:
          "Mon site vient d’être mis en ligne\u00a0: à partir de quand faut-il s’inquiéter\u00a0?",
        answer:
          "L’aide du rapport sur l’indexation des pages annonce qu’il faut jusqu’à une semaine pour que Google commence à explorer et à indexer une nouvelle page ou un nouveau site. Avant ce délai, l’absence ne signifie rien. Après, la question n’est plus «\u00a0est-ce indexé\u00a0» mais «\u00a0quel libellé s’affiche dans le rapport\u00a0»\u00a0: détectée sans exploration, explorée sans indexation et double d’une autre page appellent trois corrections sans rapport entre elles.",
      },
      {
        question: "Le budget d’exploration me concerne-t-il\u00a0?",
        answer:
          "Le guide Google sur le sujet vise les sites de plus d’un million de pages uniques dont le contenu change chaque semaine, ceux de plus de 10\u00a0000\u00a0pages dont le contenu change chaque jour, et ceux dont une part importante des URL est classée «\u00a0Détectée, actuellement non indexée\u00a0». Il précise que ces nombres sont des approximations. Pour un site vitrine ou un catalogue de quelques centaines de pages, ce n’est pas le sujet, et une prestation vendue sur cet argument mérite une question précise.",
      },
      {
        question: "Ce guide explique-t-il une absence dans Google Maps\u00a0?",
        answer:
          "Il traite une page web dans les résultats de recherche et les rapports de la Search Console. Une fiche d’établissement absente de Google Maps relève d’un autre produit, avec d’autres contrôles et d’autres motifs de suspension. Commencez par séparer les deux objets\u00a0: l’URL de la page d’un côté, le nom exact de la fiche locale de l’autre. Les corrections, les délais et les interlocuteurs ne sont pas les mêmes.",
      },
    ],
  },
  {
    key: "acces",
    num: "03",
    label: "Accès, outils et coûts",
    items: [
      {
        question:
          "Dois-je donner mon mot de passe Search Console à mon agence\u00a0?",
        answer:
          "Non. Ajoutez la personne comme utilisateur, avec le niveau d’autorisation nécessaire, puis retirez cet accès à la fin de l’intervention. La page «\u00a0utilisateurs et autorisations\u00a0» décrit quatre niveaux et n’accorde l’inspection d’URL qu’aux deux premiers\u00a0; celle sur la demande d’exploration ajoute qu’une indexation ne peut être demandée que par un propriétaire ou un utilisateur avec accès complet. Ne transmettez ni mot de passe ni code de connexion\u00a0: c’est notre recommandation, pas une consigne de Google, et une agence qui l’exige vous demande aussi de perdre la trace de qui a fait quoi.",
      },
      {
        question:
          "Un outil SEO du marché remplace-t-il la Search Console\u00a0?",
        answer:
          "Un robot d’exploration tiers voit ce que votre serveur sert\u00a0: codes HTTP, balises, redirections, temps de réponse. C’est précieux, et c’est la moitié du diagnostic. Il ne voit pas ce que Google a enregistré\u00a0: l’URL canonique sélectionnée par Google, le motif d’exclusion, la date de dernière exploration, les impressions par requête. Ces champs n’existent que dans la Search Console de votre propriété. Les deux outils sont complémentaires, ils ne sont pas interchangeables.",
      },
      {
        question:
          "Combien coûte une intervention si je ne trouve pas la panne\u00a0?",
        answer:
          "Nos points d’entrée payants publiés sur la page tarifs encadrent la dépense\u00a0: audit flash à 2\u00a0000\u00a0€ HT côté maintenance, audit Express à 8\u00a0000\u00a0€ HT côté audit technique, Discovery Sprint à 1\u00a0500\u00a0€ HT et deux jours pour un projet. Notre offre de référencement, elle, ne publie aucun montant\u00a0: il dépend du nombre d’URL et des gabarits, et il est fixé au devis. Un blocage que l’inspection d’URL affiche en clair ne justifie aucun de ces montants.",
      },
    ],
  },
];

export default function Page() {
  return (
    <GuidesShell>
      {structuredData.map((item) => (
        <script
          key={item["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <GuidePremiumLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: breadcrumbName },
        ]}
        badges={[
          { label: "Diagnostic SEO", variant: "dark" },
          { label: "Search Console", variant: "neutral" },
          { label: "Outil local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Pourquoi mon site n’est-il pas"
        heroTitleEm={"visible sur Google\u00a0?"}
        heroDescription={
          "«\u00a0Mon site est invisible\u00a0» recouvre cinq pannes distinctes, qui ne se corrigent ni au même endroit ni au même prix. Ce guide donne le protocole de mesure\u00a0: la commande à taper, le champ à lire dans la Search Console, ce que le constat prouve et ce qu’il ne prouve pas. Vous saurez lequel des cinq maillons a cédé, et si la suite se règle chez vous ou demande un audit payant."
        }
        stats={[
          { label: "Pannes distinctes", value: "5" },
          { label: "Écrans à ouvrir", value: "3" },
          { label: "Lu par Googlebot", value: "2\u00a0Mo" },
          { label: "Fiche · envoi", value: "Aucun" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Diagnostic daté, pas devis",
          titleStart: "Faire relire",
          titleEm: "vos relevés",
          description:
            "Apportez vos relevés Search Console — exploration, indexation, impressions, clics — et la date de votre dernière modification. Le premier échange peut conclure qu’il faut attendre plutôt que corriger.",
          benefits: [
            "La panne est nommée avant qu’on parle de prestation",
            "Attendre reste une conclusion valable",
            "Les cinq causes derrière « invisible » sont écartées une à une",
          ],
          primaryCtaLabel: "Voir le service référencement Google",
          primaryCtaHref: "/services/referencement-google",
          phoneLabel: CONTACT_PHONE_DISPLAY_NATIONAL,
          phoneHref: `tel:${CONTACT_PHONE_E164}`,
        }}
        toc={toc}
        tocLabel="Trouver où la visibilité s’arrête"
        mobileCtaLabel="Faire relire mon diagnostic"
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Écarter les",
          titleEm: "faux verdicts",
          titleEnd: "avant de modifier le site.",
          subtitle:
            "Opérateur site:, recherche manuelle, sitemap, première propriété Search Console, délai d’un site neuf, budget d’exploration, fiche Google Maps, accès par rôle, outils du marché et coût d’une intervention.",
          ctaTitle: "Vous avez un relevé complet et un premier arrêt\u00a0?",
          ctaDescription:
            "Transmettez l’URL, la recherche, les filtres et les motifs relevés, sans communiquer vos mots de passe. Nous vérifions l’ordre des contrôles avant de proposer quoi que ce soit.",
          ctaLabel: "Faire relire le relevé",
          ctaHref: "/demarrer-un-projet",
        }}
        strategyCta={{
          titleStart: "Faire relire",
          titleEm: "un diagnostic daté",
          description:
            "Transmettez l’URL, la recherche, la période et les motifs relevés. Nous regardons d’abord si le blocage vient du serveur, de l’indexation ou s’il demande une analyse distincte de la visibilité. La conclusion peut être qu’il n’y a rien à acheter.",
          badges: [
            "Accès Search Console par rôle",
            "Aucune promesse de position",
            "Vérifications prévues par écrit",
          ],
          ctaLabel: "Faire relire mon diagnostic",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={[
          {
            source: "Google Search Central · fonctionnement de la recherche",
            href: "https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr",
            description:
              "Exploration, indexation et diffusion des résultats, avec la mention explicite qu’aucune de ces étapes n’est garantie pour une page donnée. Consultée le 30 août 2026.",
          },
          {
            source: "Google Search Central · Googlebot",
            href: "https://developers.google.com/search/docs/crawling-indexing/googlebot?hl=fr",
            description:
              "Page mise à jour le 5 février 2026\u00a0: Googlebot explore les 2 premiers Mo d’un type de fichier compatible et les 64 premiers Mo d’un PDF, limite appliquée aux données non compressées, chaque ressource référencée étant récupérée séparément.",
          },
          {
            source:
              "Google Search Central · présentation des robots d’exploration Google",
            href: "https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=fr",
            description:
              "Page mise à jour le 16 juin 2026\u00a0: par défaut, les robots d’exploration et les extracteurs de Google n’explorent que les 15 premiers Mo d’un fichier. C’est l’origine du repère de 15\u00a0Mo souvent attribué à tort à Googlebot pour la recherche.",
          },
          {
            source:
              "Google Search Central · codes d’état HTTP et erreurs réseau",
            href: "https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=fr",
            description:
              "Page mise à jour le 5 mars 2026\u00a0: un 2xx ne garantit pas l’indexation, les 4xx sortent l’URL de l’index, les 5xx et 429 ralentissent l’exploration, la redirection 301 est un signal fort et 302 un signal faible, jusqu’à 10 sauts suivis — mais les outils d’inspection Google ne suivent pas les redirections.",
          },
          {
            source: "Google Search Central · réduire la vitesse d’exploration",
            href: "https://developers.google.com/search/docs/crawling-indexing/reduce-crawl-rate?hl=fr",
            description:
              "Renvoyer 500, 503 ou 429 est réservé à quelques heures, un à deux jours au plus. Au-delà, Google avertit qu’une URL servant ces codes plusieurs jours peut être supprimée de l’index, et le ralentissement porte sur le nom d’hôte entier.",
          },
          {
            source:
              "Google Search Central · spécifications du fichier robots.txt",
            href: "https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt?hl=fr",
            description:
              "Limite de taille de 500\u00a0Kio, contenu au-delà ignoré, mise en cache d’environ 24 heures, et traitement d’un robots.txt en erreur 5xx\u00a0: arrêt d’exploration pendant 12 heures, puis 30 jours sur la dernière version valide.",
          },
          {
            source: "Google Search Central · règle noindex",
            href: "https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=fr",
            description:
              "Balise meta ou en-tête X-Robots-Tag lus pendant l’exploration. La page ne doit pas être bloquée par robots.txt, sinon la règle n’est pas détectée et la page peut continuer à s’afficher.",
          },
          {
            source: "Google Search Central · choix de l’URL canonique",
            href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=fr",
            description:
              "Hiérarchie explicite des signaux\u00a0: la redirection et l’annotation link rel=canonical sont des signaux forts, l’inclusion dans un sitemap un signal faible.",
          },
          {
            source: "Google Search Central · sitemaps",
            href: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr",
            description:
              "Un seul sitemap est plafonné à 50\u00a0Mo sans compression ou 50\u00a0000\u00a0URL, doit être encodé en UTF-8 et ne contenir que des URL absolues et complètes. Il aide la découverte, il ne garantit ni exploration ni indexation.",
          },
          {
            source: "Google Search Central · demander une nouvelle exploration",
            href: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr",
            description:
              "L’exploration peut prendre plusieurs jours, voire plusieurs semaines, l’inclusion n’est pas garantie et peut ne jamais avoir lieu. Un quota limite l’envoi d’URL individuelles, et répéter la demande pour la même URL n’accélère rien. C’est aussi cette page qui porte la règle d’accès\u00a0: demander une indexation dans l’outil d’inspection d’URL exige d’être propriétaire ou utilisateur avec accès complet sur la propriété.",
          },
          {
            source:
              "Google Search Central · changement d’adresse avec modification des URL",
            href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr",
            description:
              "Page mise à jour le 24 juin 2026\u00a0: la migration est considérée comme terminée lorsque Googlebot a accédé au moins une fois à toutes les URL de l’ancien et du nouveau site, et les redirections sont à conserver aussi longtemps que possible, généralement au moins un an.",
          },
          {
            source: "Google Search Central · optimiser le budget d’exploration",
            href: "https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget?hl=fr",
            description:
              "Guide réservé aux sites de plus d’un million de pages uniques changeant chaque semaine, à ceux de plus de 10\u00a0000\u00a0pages changeant chaque jour, et à ceux dont une part importante des URL est classée «\u00a0Détectée, actuellement non indexée\u00a0». Ces nombres sont annoncés comme des approximations.",
          },
          {
            source: "Google Search Central · opérateur de recherche site:",
            href: "https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site",
            description:
              "L’opérateur ne renvoie pas nécessairement toutes les URL indexées sous le préfixe demandé, une requête sans mot-clé ne classe pas les résultats, et la page précise que site:https://www.example.com ne renvoie pas les mêmes résultats que site:https://example.com/.",
          },
          {
            source:
              "Google Search Console · rapport sur l’indexation des pages",
            href: "https://support.google.com/webmasters/answer/7440203?hl=fr",
            description:
              'Motifs d’indexation et leur sens, avec les libellés repris mot pour mot dans ce guide\u00a0: «\u00a0Explorée, actuellement non indexée\u00a0», «\u00a0Détectée, actuellement non indexée\u00a0», «\u00a0Page en double sans URL canonique sélectionnée par l’utilisateur\u00a0», «\u00a0URL marquée "noindex"\u00a0» et «\u00a0URL bloquée par le fichier robots.txt\u00a0». Tableau d’exemples plafonné à 1\u00a0000\u00a0lignes, et délai d’environ une semaine avant la première exploration d’un site neuf.',
          },
          {
            source: "Google Search Console · inspection d’URL",
            href: "https://support.google.com/webmasters/answer/9012289?hl=fr",
            description:
              "Différence entre la version indexée et le test en ligne, ouvert par le bouton «\u00a0Tester l’URL active\u00a0». Champs «\u00a0URL canonique déclarée par l’utilisateur\u00a0» et «\u00a0URL canonique sélectionnée par Google\u00a0», et limites du message «\u00a0Cette URL est sur Google\u00a0». Consultée le 30 août 2026.",
          },
          {
            source: "Google Search Console · rapport Performances",
            href: "https://support.google.com/webmasters/answer/7576553?hl=fr",
            description:
              "Définition des clics, des impressions et de la position moyenne — dans le graphique, celle du résultat le mieux classé de l’ensemble du site\u00a0; dans le tableau, celle de la ligne affichée. Vue par défaut sur les trois derniers mois, vue 24 heures en données préliminaires.",
          },
          {
            source: "Google Search Console · dimensions et regroupements",
            href: "https://support.google.com/webmasters/answer/17011259?hl=fr",
            description:
              "Attribution de la plupart des données à l’URL canonique et non aux doublons, requêtes anonymisées exclues du total dès qu’un filtre de requête est appliqué, et troncature du tableau aux lignes les plus importantes.",
          },
          {
            source: "Google Search Console · utilisateurs et autorisations",
            href: "https://support.google.com/webmasters/answer/7687615?hl=fr",
            description:
              "Quatre niveaux d’autorisation — propriétaire, utilisateur avec accès complet, utilisateur avec accès limité, associé — et un tableau qui accorde l’inspection d’URL aux deux premiers, en «\u00a0Exploration uniquement\u00a0» pour l’accès limité. Un utilisateur s’ajoute par son adresse de compte Google. Consultée le 30 août 2026.",
          },
          {
            source: "Google Search Console API · quotas d’utilisation",
            href: "https://developers.google.com/webmaster-tools/limits",
            description:
              "Inspection d’URL\u00a0: 2\u00a0000\u00a0requêtes par jour et 600 par minute et par site. Search Analytics\u00a0: 1\u00a0200\u00a0requêtes par minute et par site. Consultée le 30 août 2026.",
          },
          {
            source: "Google Search Console API · searchAnalytics.query",
            href: "https://developers.google.com/webmaster-tools/v1/searchanalytics/query",
            description:
              "Paramètre rowLimit compris entre 1 et 25\u00a0000, valeur par défaut 1\u00a0000, pagination par startRow. C’est la seule façon de dépasser l’affichage du rapport sans passer par l’exportation groupée.",
          },
          {
            source: "web.dev · Time to First Byte",
            href: "https://web.dev/articles/ttfb",
            description:
              "Repères publiés\u00a0: 0,8\u00a0seconde ou moins pour un bon TTFB, au-delà de 1,8\u00a0seconde pour un mauvais. La page rattache son 75e centile au First Contentful Paint, pas à ces deux seuils, et rappelle que le TTFB n’est pas un signal web essentiel.",
          },
          {
            source: "Hagnéré Code · tarifs publics",
            href: "/tarifs",
            description:
              "Grille relevée le 30 août 2026\u00a0: audit flash 2\u00a0000\u00a0€ HT, audit Express 8\u00a0000\u00a0€ HT, Discovery Sprint 1\u00a0500\u00a0€ HT sur deux jours. L’offre de référencement ne publie aucun montant\u00a0; le prix est fixé au devis.",
          },
        ]}
        disclaimer={{
          eyebrow: "Périmètre du guide",
          title:
            "Ce guide localise un blocage\u00a0; il ne promet aucun classement",
          description:
            "Les interfaces et libellés de la Search Console évoluent, et les sources officielles citées ici ont été relues le 30 août 2026\u00a0: revérifiez-les avant de vous engager sur un chiffre. Les durées et les coûts internes de ce guide sont des hypothèses éditoriales choisies pour l’exemple, jamais des relevés faits chez un client. Le protocole ne mesure ni la demande, ni la concurrence, ni l’intention derrière une recherche, et il ne prédit aucun délai de retour. Il s’arrête dès que l’URL est indexée et reçoit des impressions.",
        }}
        relatedGuides={[
          {
            label: "Prix de la gestion Google Ads en 2026",
            href: "/guides/prix-gestion-google-ads",
          },
          {
            label: "Plan de recette d’une application métier",
            href: "/guides/plan-recette-application-metier",
          },
        ]}
        relatedGuidesLabel="2 guides complémentaires"
      >
        <GuidePremiumSection
          id="url-recherche"
          number="01"
          label="Réponse directe"
          title={
            "Cinq pannes différentes se cachent derrière le mot «\u00a0invisible\u00a0»"
          }
        >
          <p>
            Vous tapez la recherche sur laquelle vous attendez votre page de
            service. Elle n’est pas là. La réunion qui suit parle de contenu, de
            mots-clés et de refonte, avant que personne ait ouvert la Search
            Console — l’outil gratuit où Google dit au propriétaire d’un site ce
            qu’il a vu, retenu et affiché.
          </p>

          <p>
            <strong>
              Une page absente de Google n’est jamais un problème unique&nbsp;:
              c’est une chaîne dont un maillon a cédé, et il y en a cinq.
            </strong>{" "}
            Google décrit lui-même trois temps — exploration, indexation,
            diffusion — et écrit qu’aucun n’est garanti pour une page donnée.
            Chaque maillon se lit dans un champ précis.
          </p>

          <p>
            Le tri initial demande une vingtaine de minutes par adresse&nbsp;:
            trois commandes à taper depuis votre poste, puis trois écrans de la
            Search Console — l’inspection d’URL, le rapport sur l’indexation des
            pages et le rapport Performances. Cette durée est une{" "}
            <strong>estimation éditoriale Hagnéré Code</strong>, pas un
            relevé&nbsp;: une seule adresse, des accès déjà ouverts. À
            l’arrivée, vous savez lequel des cinq maillons a cédé, et si la
            suite se règle chez vous ou demande un audit payant.
          </p>

          <GuidePremiumCase
            initial="68"
            eyebrow="Fil rouge du guide · exemple construit"
            title={
              "Soixante-huit pages, une refonte, et la page qui vend n’apparaît plus"
            }
          >
            <p>
              <em>
                Exemple construit&nbsp;: le métier, la ville, les volumes et les
                durées d’intervention sont choisis pour l’exemple et ne viennent
                d’aucune source&nbsp;; seuls les mécanismes décrits par Google
                sont repris de sa documentation. Ce n’est pas un dossier client.
              </em>{" "}
              Un imprimeur d’étiquettes adhésives, à Tours. Le site aurait été
              refait il y a quatre mois&nbsp;: 68&nbsp;pages en ligne, un
              sitemap qui en déclare 74. La page{" "}
              <code>/etiquettes-adhesives-personnalisees</code> ne ressortirait
              sur aucune recherche métier, quand l’ancienne adresse{" "}
              <code>/nos-produits/etiquettes.html</code> apparaîtrait encore.
            </p>
            <p>
              La responsable marketing aurait demandé l’indexation trois fois en
              six semaines&nbsp;; le développeur qui a livré la refonte ne
              serait plus sous contrat. Nous suivrons ce dossier jusqu’à la
              section&nbsp;08.
            </p>
          </GuidePremiumCase>

          <p>
            Un mot revient dans deux des cinq lignes ci-dessous&nbsp;: la{" "}
            <strong>canonique</strong>, l’adresse que Google retient comme
            version officielle quand plusieurs adresses affichent le même
            contenu. Les autres passent pour des doubles et n’apparaissent pas
            dans les résultats.
          </p>

          <GuideTable
            caption="Les cinq endroits où la chaîne casse, et ce que chaque constat ne prouve pas"
            headers={[
              "Ce que vous constatez",
              "Où la preuve se lit",
              "Ce que le constat ne prouve pas",
            ]}
            rows={[
              [
                "Google ne connaît pas l’adresse",
                "Inspection d’URL\u00a0: URL inconnue de Google",
                "Que la page soit mauvaise\u00a0: elle n’a jamais été atteinte",
              ],
              [
                "L’adresse est connue mais jamais explorée",
                "Rapport Indexation\u00a0: «\u00a0Détectée, actuellement non indexée\u00a0»",
                "Un défaut de contenu\u00a0: Google l’attribue à une exploration reportée pour ne pas surcharger le serveur",
              ],
              [
                "La page est explorée mais reste hors index",
                "Rapport Indexation\u00a0: «\u00a0Explorée, actuellement non indexée\u00a0»",
                "Une sanction\u00a0: Google écrit qu’il est inutile de renvoyer l’URL",
              ],
              [
                "Une autre adresse est indexée à sa place",
                "Inspection d’URL\u00a0: l’URL canonique sélectionnée par Google diffère de celle déclarée par l’utilisateur",
                "Que votre page soit en cause\u00a0: deux adresses se ressemblent, Google en garde une seule",
              ],
              [
                "L’URL est indexée, sans ligne pour la recherche visée",
                "Performances, filtre page puis filtre requête",
                "Zéro impression\u00a0: les requêtes anonymisées sortent du total filtré",
              ],
            ]}
          />

          <p>
            Les sections suivantes les prennent dans l’ordre où elles se
            mesurent, en partant de votre serveur. Si vous n’avez aucune
            propriété dans la Search Console, ouvrez-la d’abord&nbsp;: le
            service est gratuit, la personne qui gère votre hébergement sait
            prouver que le site vous appartient, et les sections&nbsp;03
            à&nbsp;05 n’ont aucun sens sans elle.
          </p>

          <InfoBox
            variant="amber"
            title={
              "Le site entier a disparu\u00a0: arrêtez le diagnostic page par page"
            }
          >
            <p className="m-0">
              Si plus aucune page ne ressort, y compris sur le nom de
              l’entreprise, traitez d’abord l’incident&nbsp;: piratage, domaine
              expiré, certificat invalide, migration inachevée, propriété
              Search&nbsp;Console perdue. Un diagnostic URL par URL suppose un
              site qui répond normalement.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exploration"
          number="02"
          label="Contrôle 1"
          title={
            "Google peut-il ouvrir votre page, et à quel prix pour votre serveur\u00a0?"
          }
        >
          <p>
            Le premier contrôle ne se fait pas dans la Search Console&nbsp;:
            elle montre ce que Google a vu à sa dernière visite, pas ce que le
            serveur répond maintenant. Trois commandes donnent le code HTTP, le
            temps jusqu’au premier octet, la cible d’une redirection et les deux
            endroits où se cache une consigne <code>noindex</code>.
          </p>

          <FormulaBox>
            {`# 1. Ce que le serveur répond maintenant, sur l’URL exacte
curl -sS -o /dev/null -A Googlebot \\
  -w '%{http_code} | %{time_starttransfer}s | %{redirect_url}\\n' \\
  https://exemple.fr/etiquettes-adhesives-personnalisees

# 2. L’en-tête X-Robots-Tag, sous le même nom d’agent
curl -sS -A Googlebot -D - -o page.html \\
  https://exemple.fr/etiquettes-adhesives-personnalisees | grep -i x-robots-tag

# 3. La balise meta robots du HTML initial
grep -io '<meta[^>]*name=.robots.[^>]*>' page.html`}
          </FormulaBox>

          <p>
            Ce relevé ne vaut qu’assorti de ses réserves. L’option{" "}
            <code>-A</code> annonce un nom d’agent{"\u00a0"}: elle révèle un
            traitement différencié fondé sur ce nom, jamais un filtrage par
            adresse IP. Elle figure sur les trois commandes parce qu’un{" "}
            <code>noindex</code> servi au seul Googlebot passerait à travers un
            contrôle joué sous le nom d’agent de votre navigateur. Le HTML
            récupéré est le HTML initial{"\u00a0"}: des balises posées par du
            JavaScript n’y figurent pas, et seul le test en ligne, ouvert par «
            {"\u00a0"}Tester l’URL active{"\u00a0"}», montre la version rendue.
            Enfin, les outils d’inspection de Google ne suivent pas les
            redirections{"\u00a0"}: inspectez la cible finale, jamais l’adresse
            de départ.
          </p>

          <GuideTable
            caption="Ce que Google fait de chaque code, et ce que vous en tirez"
            headers={[
              "Code observé",
              "Ce que Google en fait",
              "Ce que vous mesurez ensuite",
              "L’action proportionnée",
            ]}
            rows={[
              [
                "200",
                "Le contenu peut être indexé, sans aucune garantie",
                "Le contenu servi, pas celui de votre navigateur connecté",
                "Passer au contrôle d’indexation",
              ],
              [
                "301",
                "Signal fort désignant la cible comme adresse principale",
                "Le nombre de sauts et l’adresse finale\u00a0; jusqu’à 10 sauts sont suivis",
                "Inspecter la cible, jamais l’adresse de départ",
              ],
              [
                "302",
                "Signal faible\u00a0: la cible n’est pas désignée avec la même force",
                "Depuis quand la redirection est en place",
                "Passer en 301 si le déplacement est définitif",
              ],
              [
                "404 ou 410",
                "L’URL n’est pas indexée, et si elle l’était, elle est retirée de l’index",
                "Si cette adresse recevait des impressions avant la refonte",
                "Rétablir la page ou rediriger vers l’équivalent réel, jamais vers l’accueil",
              ],
              [
                "429, 500 ou 503",
                "Exploration ralentie sur tout le nom d’hôte, et suppression possible de l’index après plusieurs jours",
                "La fréquence et la fenêtre horaire des erreurs sur 28 jours",
                "Traiter la capacité du serveur\u00a0; ces codes sont réservés à un ou deux jours au plus",
              ],
            ]}
          />

          <h3>Trois plafonds documentés, et ce qu’ils limitent vraiment</h3>
          <p>
            <strong>La taille lue. </strong>La page Googlebot, mise à jour le
            5&nbsp;février 2026, écrit que le robot explore les{" "}
            <strong>2 premiers Mo </strong>d’un type de fichier compatible et
            les 64 premiers Mo d’un PDF, sur les données non compressées. Le
            repère de 15&nbsp;Mo qui circule encore vient d’une autre page, la
            présentation des robots d’exploration Google&nbsp;: il y décrit le
            comportement par défaut de l’ensemble des robots et extracteurs de
            Google, pas celui de Googlebot pour la recherche. Un gabarit qui
            embarque son catalogue en JSON dans le HTML atteint vite la
            limite&nbsp;; la partie tronquée n’est jamais indexée.
          </p>
          <p>
            <strong>
              Le fichier <code>robots.txt</code>.
            </strong>{" "}
            Google en lit au plus 500&nbsp;Kio, ignore le reste, le met en cache
            environ 24&nbsp;heures, et traite ses erreurs serveur en trois
            temps&nbsp;: exploration arrêtée pendant les 12&nbsp;premières
            heures, puis 30&nbsp;jours sur la dernière version valide, puis
            absence de restriction ou arrêt complet selon la disponibilité du
            site. Une règle corrigée à 9&nbsp;heures ne produit pas d’effet à
            9&nbsp;h&nbsp;05.
          </p>
          <p>
            <strong>Le temps de réponse</strong>, où aucun seuil officiel
            n’existe côté exploration&nbsp;: la capacité monte quand les temps
            de réponse restent stables, baisse quand la latence grimpe ou que le
            serveur renvoie des erreurs. Les repères publiés pour le Time to
            First Byte, le délai avant le premier octet, donnent un ordre de
            grandeur&nbsp;: 0,8&nbsp;seconde ou moins est bon, au-delà de
            1,8&nbsp;seconde mauvais. Deux précautions&nbsp;: web.dev rattache
            son 75<sup>e</sup> centile au First Contentful Paint, pas à ces deux
            seuils{"\u00a0"}; et la commande ci-dessus mesure un seul chargement
            depuis votre poste, ce qui n’est ni un centile ni une mesure de
            terrain.
          </p>

          <InfoBox
            variant="blue"
            title={
              "Une page de maintenance qui dure devient un signal de disponibilité"
            }
          >
            <p className="m-0">
              Renvoyer 500, 503 ou 429 est la bonne réponse pour quelques
              heures, un à deux jours au plus. Au-delà, Google avertit qu’une
              URL servant ces codes plusieurs jours peut être supprimée de
              l’index, et que le ralentissement s’applique au nom d’hôte entier.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="indexation"
          number="03"
          label="Contrôle 2"
          title={
            "Pourquoi une page lue par Google peut-elle ne jamais être indexée\u00a0?"
          }
        >
          <p>
            Un code 200 n’est pas une promesse&nbsp;: la documentation écrit que
            pour la recherche Google, un code d’état 2xx ne garantit pas
            l’indexation. Entre la lecture et l’index, Google compare la page à
            ses voisines et choisit une adresse principale. Le rapport sur
            l’indexation des pages nomme le résultat de ce choix&nbsp;; les cinq
            libellés ci-dessous sont reproduits tels que l’aide de Google les
            écrit.
          </p>

          <GuideTable
            caption="Cinq libellés du rapport, leur cause réelle et la correction qui leur correspond"
            headers={[
              "Le libellé affiché",
              "Ce qu’il dit vraiment",
              "Le contrôle qui tranche",
              "La correction",
            ]}
            rows={[
              [
                "«\u00a0Explorée, actuellement non indexée\u00a0»",
                "Page lue, non retenue, peut-être retenue plus tard\u00a0; Google précise qu’il est inutile de renvoyer l’URL",
                "Comparer la page à celles du même site qui sont indexées",
                "Travailler la page elle-même, pas le bouton de demande d’indexation",
              ],
              [
                "«\u00a0Détectée, actuellement non indexée\u00a0»",
                "Adresse connue, jamais explorée\u00a0; exploration reportée pour ne pas surcharger le site",
                "Temps de réponse et taux d’erreurs 5xx sur les 28 derniers jours",
                "Capacité du serveur et temps de réponse, pas le contenu",
              ],
              [
                "«\u00a0Page en double sans URL canonique sélectionnée par l’utilisateur\u00a0»",
                "Deux adresses se ressemblent et Google a choisi l’autre",
                "Comparer l’URL canonique déclarée par l’utilisateur et l’URL canonique sélectionnée par Google",
                "Aligner redirection, balise canonique et sitemap sur une seule adresse",
              ],
              [
                '«\u00a0URL marquée "noindex"\u00a0»',
                "Une balise meta ou un en-tête X-Robots-Tag a été lu pendant l’exploration",
                "En-tête HTTP et HTML initial, puis version rendue par le test en ligne",
                "Retirer la règle, rejouer le test en ligne, puis dater la demande",
              ],
              [
                "«\u00a0URL bloquée par le fichier robots.txt\u00a0»",
                "La règle empêche la lecture, donc aussi celle d’un éventuel noindex",
                "Tester l’URL exacte contre le fichier réellement servi",
                "Ouvrir l’exploration avant toute autre correction",
              ],
            ]}
          />

          <p>
            Les deux dernières lignes se contredisent souvent&nbsp;: pour qu’une
            règle <code>noindex</code> soit efficace, la page ne doit pas être
            bloquée par <code>robots.txt</code>, sinon le robot ne détecte
            jamais la règle et la page peut continuer à s’afficher. Empiler les
            deux protections produit l’effet inverse.
          </p>

          <p>
            Une réserve sur la deuxième ligne. L’explication par la charge du
            serveur est celle de Google, mais elle ne couvre pas tous les
            cas&nbsp;: un site aux temps de réponse irréprochables qui reste des
            mois dans cet état se heurte à un arbitrage que Google ne détaille
            dans aucun champ public. Mesurez le serveur d’abord&nbsp;: c’est la
            seule piste que vous puissiez fermer.
          </p>

          <h3>Le cas de l’imprimeur, résolu ligne à ligne</h3>
          <p>
            Dans l’exemple, l’inspection de{" "}
            <code>/etiquettes-adhesives-personnalisees</code> afficherait une
            URL canonique déclarée par l’utilisateur pointant vers elle-même, et
            une URL canonique sélectionnée par Google pointant vers{" "}
            <code>/nos-produits/etiquettes.html</code>. Les deux répondraient
            200, décriraient le même produit, et aucune redirection ne les
            relierait. Le sitemap déclarerait ces deux adresses en ligne, plus
            six adresses supprimées lors de la refonte&nbsp;: 74&nbsp;URL
            déclarées pour 68&nbsp;pages en ligne.
          </p>
          <p>
            La hiérarchie officielle des signaux règle le dossier. Une
            redirection est un signal fort, une annotation{" "}
            <code>link rel=canonical</code> aussi, l’inclusion dans un sitemap
            un signal faible. Aucun signal fort ne désignerait la nouvelle page
            comme remplaçante{"\u00a0"}: Google garde l’ancienne, mieux connue.
            Deux gestes suffisent — une redirection 301 vers la nouvelle, et les
            six adresses supprimées retirées du sitemap.
          </p>

          <h3>Vérifier 68 pages sans cliquer 68 fois</h3>
          <p>
            Le tableau d’exemples du rapport plafonne à 1&nbsp;000&nbsp;lignes,
            et l’inspection manuelle ne tient pas au-delà de quelques dizaines
            d’URL. L’API d’inspection accepte 2&nbsp;000&nbsp;requêtes par jour
            et 600 par minute et par propriété&nbsp;— ce n’est pas un écran mais
            un appel de programme, à confier à un développeur autorisé sur la
            propriété. Les 68&nbsp;pages de l’exemple tiennent dans une seule
            minute de quota, avec pour chacune l’état d’indexation, les deux URL
            canoniques et la dernière exploration. Un catalogue de
            12&nbsp;000&nbsp;URL demande six jours au quota journalier&nbsp;: un
            travail à planifier.
          </p>

          <GuidePremiumMemo
            eyebrow="Ordre des gestes"
            title="Une correction, puis une demande, puis une date — jamais l’inverse"
          >
            <ul>
              <li>
                <strong>Corriger d’abord. </strong>Une demande envoyée avant la
                correction ne fait que consommer le quota.
              </li>
              <li>
                <strong>Rejouer le test en ligne. </strong>Il prouve que la
                version servie maintenant est récupérable, rien de plus.
              </li>
              <li>
                <strong>Dater. </strong>Correction, demande, recontrôle&nbsp;:
                sans ces trois dates, le contrôle suivant n’est comparable à
                rien.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="impressions"
          number="04"
          label="Contrôle 3"
          title="Une URL indexée peut rester absente de la recherche que vous visez"
        >
          <p>
            Le message «&nbsp;Cette URL est sur Google&nbsp;» signifie que la
            page peut être éligible à l’affichage. Il ne dit pas qu’elle a été
            affichée, ni pour quelle recherche. La suite se lit dans le rapport
            Performances, et l’ordre des filtres change ce que vous lisez&nbsp;:
            fixez d’abord le contexte — période, pays, appareil, type de
            recherche —, puis la page, puis la requête.
          </p>

          <p>
            Cet ordre a une raison. La page filtrée seule donne son total, donc
            l’information «&nbsp;affichée, mais pour autre chose&nbsp;». La
            requête posée d’abord ne donne qu’une absence de ligne. Filtrez sur
            l’URL canonique sélectionnée par Google, relevée à l’étape
            précédente&nbsp;: la Search Console attribue la plupart des données
            à cette adresse, pas à ses doublons.
          </p>

          <p>
            C’est le piège de l’exemple&nbsp;: la nouvelle page afficherait zéro
            impression, ses clics étant comptés sur{" "}
            <code>/nos-produits/etiquettes.html</code>. Tant que la redirection
            n’est pas posée, chaque relevé confirmerait une panne qui n’existe
            pas.
          </p>

          <InfoBox
            variant="blue"
            title={
              "Une requête absente du tableau ne prouve pas zéro impression"
            }
          >
            <p className="m-0">
              Certaines requêtes sont anonymisées pour protéger la
              confidentialité des internautes. Elles comptent dans les totaux du
              graphique, mais elles en sortent dès qu’un filtre de requête est
              appliqué, et la Search Console tronque le tableau aux lignes les
              plus importantes. Écrivez donc «&nbsp;aucune donnée visible avec
              ces filtres&nbsp;», jamais «&nbsp;zéro impression
              prouvée&nbsp;»&nbsp;: la liste la plus complète passe par
              l’exportation groupée de données.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="clics"
          number="05"
          label="Contrôle 4"
          title="Ce que le rapport Performances mesure vraiment"
        >
          <p>
            Une impression compte un affichage de votre site dans les résultats,
            un clic un départ vers votre site. La position moyenne, elle, se lit
            de deux façons selon l’endroit où elle s’affiche.
          </p>

          <p>
            Dans le graphique, la valeur est la position moyenne du{" "}
            <strong>résultat le mieux classé de l’ensemble du site</strong>.
            Dans le tableau, c’est celle de la ligne affichée. Une
            «&nbsp;position moyenne de 6,2&nbsp;» sur le graphique n’est donc
            pas la position moyenne de vos pages&nbsp;: c’est une moyenne de vos
            meilleurs résultats, sur les seules requêtes qui ont généré des
            impressions ce mois-là. La comparer d’un mois à l’autre revient à
            comparer deux ensembles différents. Même prudence sur la
            période&nbsp;: la vue par défaut porte sur les trois derniers mois,
            et la vue 24&nbsp;heures affiche des données préliminaires.
          </p>

          <h3>Sortir du tableau quand il ne suffit plus</h3>
          <p>
            L’affichage tronque, l’API Search Analytics beaucoup moins — à
            condition qu’un développeur l’appelle pour vous, depuis un accès
            autorisé. Le paramètre <code>rowLimit</code> accepte de 1 à 25
            {"\u00a0"}000{"\u00a0"}lignes, sa valeur par défaut est 1{"\u00a0"}
            000, et <code>startRow</code> parcourt la suite. Le quota, 1
            {"\u00a0"}200{"\u00a0"}requêtes par minute et par site, reste hors
            d’atteinte pour un relevé mensuel.
          </p>

          <FormulaBox>
            {`# searchAnalytics.query — une extraction page par requête
startDate  : 2026-07-01
endDate    : 2026-07-28
dimensions : page, query
rowLimit   : 25000     # maximum autorisé, 1000 par défaut
startRow   : 0         # puis 25000, 50000… tant que des lignes reviennent`}
          </FormulaBox>

          <p>
            Des impressions sans clic prouvent une seule chose&nbsp;: la page a
            été proposée et n’a pas été choisie, dans ce relevé. Elles ne disent
            ni si la demande est forte, ni si la position était stable, ni si le
            titre affiché était le vôtre — Google peut le réécrire. Ce constat
            seul ne justifie ni une refonte ni une production de contenus, et
            c’est ici que ce guide s’arrête&nbsp;: la suite relève d’une analyse
            de la recherche, du résultat affiché et de la concurrence.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incidents"
          number="06"
          label="Ce qui rate"
          title="Ce qui rate, et ce que ça coûte"
        >
          <p>
            Les trois scénarios ci-dessous sont construits sur le site de
            l’imprimeur&nbsp;— ce ne sont pas des dossiers clients, et ils ne se
            cumulent pas&nbsp;: ce sont trois façons distinctes dont une même
            refonte peut mal tourner.
          </p>

          <p>
            Deux familles d’hypothèses les chiffrent, toutes deux choisies pour
            l’exemple. La première est un coût interne de{" "}
            <strong>350&nbsp;€ le jour chargé</strong>, soit 50&nbsp;€ l’heure
            sur une base de sept heures&nbsp;; remplacez-la par la vôtre, que
            votre expert-comptable calcule à partir du brut, des charges et des
            jours réellement travaillés. La seconde est la durée de chaque
            intervention — une heure, une demi-journée, deux, trois ou quatre
            jours. Aucune de ces durées ne vient d’une source&nbsp;: elles
            rendent le décompte vérifiable, rien de plus. Tous les montants de
            cette section en découlent.
          </p>

          <h3>
            Un noindex oublié sur la version d’essai&nbsp;: 34&nbsp;pages hors
            index et 750&nbsp;€
          </h3>
          <p>
            Supposons que la version d’essai du site — celle où l’on vérifie
            tout avant d’ouvrir au public — porte une règle <code>noindex</code>{" "}
            sur le gabarit des pages produit, et que la mise en ligne reprenne
            ce gabarit sans la retirer. Au fil des explorations, 34&nbsp;pages
            sur 68 basculeraient en «&nbsp;URL marquée
            &quot;noindex&quot;&nbsp;», et le défaut vivrait cinq semaines faute
            d’un regard sur le rapport. La correction demanderait une heure,
            soit 50&nbsp;€&nbsp;; la reprise, deux jours — relever les
            34&nbsp;URL, demander l’indexation dans la limite du quota, vérifier
            une à une —, soit 700&nbsp;€. Total, 750&nbsp;€, sans compter cinq
            semaines de diffusion perdues que rien ne rattrape&nbsp;: la
            documentation ne promet aucun délai de retour. Le contrôle qui
            l’aurait évité tient dans les trois commandes de la section&nbsp;02,
            jouées le jour de la mise en ligne.
          </p>

          <h3>
            Un sitemap qui contredit la balise canonique&nbsp;:
            1&nbsp;400&nbsp;€ de réécriture pour rien
          </h3>
          <p>
            La nouvelle page afficherait zéro impression, parce que la Search
            Console compte tout sur l’URL canonique sélectionnée par Google.
            L’équipe pourrait en déduire que la page ne fonctionne pas et la
            réécrire&nbsp;: quatre jours, 1&nbsp;400&nbsp;€. Trois mois plus
            tard, rien n’aurait bougé&nbsp;— le texte n’avait jamais été en
            cause. La vraie correction coûterait une heure et 50&nbsp;€&nbsp;:
            une redirection 301, et six lignes retirées du sitemap. L’écart
            entre les deux, 1&nbsp;350&nbsp;€, se joue sur la lecture de deux
            champs de l’inspection d’URL.
          </p>

          <h3>
            Une sauvegarde nocturne qui répond 503&nbsp;: 1&nbsp;050&nbsp;€ sur
            la mauvaise piste
          </h3>
          <p>
            Supposons la base verrouillée de 2&nbsp;h à 3&nbsp;h&nbsp;30 chaque
            nuit, le site répondant 503 pendant 90&nbsp;minutes. Au bout de six
            semaines, des URL passeraient en «&nbsp;Détectée, actuellement non
            indexée&nbsp;», libellé que la documentation attribue à une
            exploration reportée pour ne pas surcharger le site. L’agence en
            place chercherait du côté des titres et des descriptions&nbsp;:
            trois jours, 1&nbsp;050&nbsp;€ facturés. La correction serait de
            servir le cache en lecture seule pendant le verrou, ce qui rend un
            200 avec le vrai contenu au lieu d’un 503&nbsp;— une demi-journée
            d’administrateur système, 175&nbsp;€.
          </p>
          <p>
            La réserve appartient à ce scénario. Il applique à une cause
            plausible le mécanisme décrit par l’aide du rapport, mais il
            n’établit pas qu’une fenêtre de 503 nocturnes produise ce libellé,
            et aucun champ de la Search Console ne le confirmerait&nbsp;: la
            fenêtre de sauvegarde est la piste à fermer en premier, pas un
            diagnostic rendu.
          </p>

          <p>
            Ces trois scénarios s’excluent&nbsp;: leur somme ne décrit aucune
            facture réelle, elle compare trois façons de se tromper. Ainsi lus,
            les trois scénarios pèsent 3&nbsp;425&nbsp;€&nbsp;: 50&nbsp;€ et
            700&nbsp;€ pour le premier, 1&nbsp;400&nbsp;€ et 50&nbsp;€ pour le
            deuxième, 1&nbsp;050&nbsp;€ et 175&nbsp;€ pour le troisième. Ce
            comparateur se lit de deux manières. Par nature de dépense&nbsp;:
            275&nbsp;€ de corrections utiles, 2&nbsp;450&nbsp;€ engagés sur la
            mauvaise cause, 700&nbsp;€ de reprise qu’un contrôle le jour de la
            mise en ligne aurait évités. Par payeur&nbsp;: 2&nbsp;375&nbsp;€ de
            temps interne et 1&nbsp;050&nbsp;€ facturés par une agence
            extérieure — ce total ne s’appelle donc pas «&nbsp;temps
            interne&nbsp;». Aucun de ces montants ne dépend d’un outil payant.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="fiche"
          number="07"
          label="Délai et relevé"
          title={"Combien de temps faut-il attendre avant de conclure\u00a0?"}
        >
          <p>
            La documentation répond sans ambiguïté&nbsp;: une nouvelle
            exploration peut prendre plusieurs jours, voire plusieurs semaines,
            l’inclusion dans les résultats n’est pas garantie et peut ne jamais
            avoir lieu. Un quota limite l’envoi d’URL individuelles, et répéter
            la demande n’accélère rien. Pour un site neuf, l’aide annonce
            jusqu’à une semaine avant que Google commence seulement à explorer.
          </p>

          <GuidePremiumMemo
            eyebrow="Le calendrier de recontrôle"
            title="Quatre relevés, quatre décisions possibles, aucune promesse de date"
          >
            <ul>
              <li>
                <strong>Jour 0. </strong>Correction posée, test en ligne rejoué,
                demande envoyée une fois. Notez le motif affiché avant
                correction.
              </li>
              <li>
                <strong>Jour 3. </strong>Inspection d’URL seule. Une date de
                dernière exploration inchangée n’est pas un échec, c’est un
                délai normal.
              </li>
              <li>
                <strong>Jour 10. </strong>Le libellé a-t-il changé de
                catégorie&nbsp;? Un passage de «&nbsp;bloquée&nbsp;» à
                «&nbsp;Explorée, actuellement non indexée&nbsp;» est un progrès,
                même sans impression.
              </li>
              <li>
                <strong>Jour 30. </strong>Exploration faite, motif
                inchangé&nbsp;: la correction n’était pas la bonne. Rouvrez le
                diagnostic plutôt que de renvoyer l’URL une quatrième fois.
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            Une migration d’URL suit un calendrier plus long encore. La page de
            Google sur le changement d’adresse avec modification des URL
            considère la migration terminée lorsque Googlebot a accédé au moins
            une fois à toutes les anciennes et à toutes les nouvelles adresses,
            et recommande de conserver les redirections aussi longtemps que
            possible, généralement au moins un an. Les démonter trois mois après
            une refonte est une façon fiable de perdre deux fois le même trafic.
          </p>

          <p>
            Acheter de la visibilité pendant l’attente reste légitime, à
            condition de ne pas la confondre avec une correction&nbsp;: une
            campagne payante ne modifie ni l’exploration ni l’indexation. Le
            guide sur le{" "}
            <Link href="/guides/prix-gestion-google-ads">
              prix de la gestion Google Ads
            </Link>{" "}
            donne les modèles de facturation.
          </p>

          <h3>Le relevé qui rend le dossier transmissible</h3>
          <p>
            Une capture d’écran sans URL, sans filtre et sans date ne vaut rien
            trois semaines plus tard. La fiche ci-dessous rassemble l’identité
            du contrôle, les quatre constats et le premier point à
            reprendre&nbsp;: elle fonctionne dans votre navigateur, aucune
            valeur n’est envoyée à Hagnéré Code ni enregistrée.
          </p>

          <div data-read-time-exclude="true">
            <SearchVisibilityDiagnostic />
          </div>

          <p>
            Relisez la fiche avant de la transmettre&nbsp;: elle peut contenir
            une adresse non publique. Pour ouvrir la Search Console à un
            développeur ou à un consultant, créez un accès utilisateur plutôt
            que de partager votre compte, et retirez-le à la fin de
            l’intervention.
          </p>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/pourquoi-site-pas-visible-google/diagnostic-google-16x9.svg"
              width={1600}
              height={900}
              sizes="(max-width: 768px) calc(100vw - 32px), 760px"
              alt="Une fiche avec une URL et une recherche reliée aux contrôles d’exploration, d’indexation, d’impressions et de clics"
              className="h-auto w-full"
              unoptimized
            />
            <figcaption className="border-t border-zinc-800 bg-zinc-950 px-4 py-3 text-sm leading-relaxed text-zinc-300 sm:px-5">
              Une URL, une recherche, quatre constats. Le premier contrôle non
              confirmé détermine la seule action à engager.
            </figcaption>
          </figure>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="08"
          label="Suite proportionnée"
          title={
            "Corriger, attendre ou payer un audit\u00a0: comment trancher\u00a0?"
          }
        >
          <p>
            Le relevé débouche sur une seule action, choisie par le premier
            contrôle non confirmé. Le tableau ci-dessous met en face de chaque
            arrêt son coût de correction et son coût d’inaction, aux mêmes
            350&nbsp;€ le jour que la section&nbsp;06. Ses durées viennent,
            comme là-bas, de l’exemple et d’aucune source&nbsp;: remplacez-les
            par les vôtres avant d’en tirer un budget.
          </p>

          <GuideTable
            caption="Le premier arrêt commande l’action, son coût et le coût de ne rien faire"
            headers={[
              "Premier arrêt",
              "Action proportionnée",
              "Ce qu’elle coûte",
              "Ce que coûte l’attente",
            ]}
            rows={[
              [
                "Adresse inconnue de Google",
                "Poser un lien interne depuis une page déjà explorée, corriger le sitemap",
                "1\u00a0h, soit 50\u00a0€",
                "Une page qui n’existe pas pour Google",
              ],
              [
                "Récupération en échec",
                "Traiter le code exact\u00a0: hébergement, redirection, capacité — jamais le contenu",
                "0,5 à 2\u00a0j, soit 175 à 700\u00a0€",
                "Après plusieurs jours d’erreurs, l’URL peut sortir de l’index",
              ],
              [
                "Exclue par noindex ou robots.txt",
                "Retirer la règle, rejouer le test en ligne, dater la demande",
                "1\u00a0h, soit 50\u00a0€",
                "Chaque semaine d’exclusion est une semaine de diffusion perdue",
              ],
              [
                "Autre adresse choisie comme canonique",
                "Redirection 301, balise canonique et sitemap alignés sur une seule adresse",
                "1 à 2\u00a0h, soit 50 à 100\u00a0€",
                "Impressions et clics restent comptés sur l’ancienne adresse",
              ],
              [
                "Explorée, actuellement non indexée",
                "Comparer la page à celles du même site qui sont indexées",
                "1\u00a0j, soit 350\u00a0€",
                "Rien ne se dégrade, mais rien ne bouge non plus",
              ],
              [
                "Indexée, avec impressions, sans clic",
                "Sortir de ce guide\u00a0: c’est une question de résultat affiché et de concurrence",
                "Une analyse dédiée, chiffrée au nombre d’URL et de gabarits",
                "Une refonte lancée sur un mauvais diagnostic",
              ],
            ]}
          />

          <p>
            Les quatre premières lignes se règlent en interne, avec un
            développeur ou un administrateur système, et aucune ne dépasse
            700&nbsp;€. Si le premier arrêt reste technique après correction, un{" "}
            <Link href="/services/audit-technique">audit technique</Link>{" "}
            devient défendable&nbsp;: notre point d’entrée publié est l’audit
            Express à 8&nbsp;000&nbsp;€ HT, et l’audit flash de la page{" "}
            <Link href="/services/maintenance-evolution">
              maintenance et évolution
            </Link>{" "}
            à 2&nbsp;000&nbsp;€ HT couvre les cas plus resserrés. Pour une URL
            indexée qui reçoit des impressions, c’est une analyse de{" "}
            <Link href="/services/referencement-google">
              référencement Google
            </Link>{" "}
            qui répond&nbsp;: son prix dépend du nombre d’URL et des gabarits,
            et aucune de nos pages n’en publie de montant, ni la{" "}
            <Link href="/tarifs">grille tarifaire</Link> ni la page service.
          </p>

          <InfoBox
            variant="emerald"
            title={"Ne rien acheter aujourd’hui est souvent la bonne décision"}
          >
            <p className="m-0">
              Si une correction vient d’être posée et qu’une demande
              d’exploration a été envoyée, le seul geste utile est d’attendre la
              date de recontrôle&nbsp;: aucun outil et aucune prestation
              n’accélère le traitement de cette demande par Google. Un blocage
              que l’inspection d’URL affiche en clair ne justifie pas
              2&nbsp;000&nbsp;€ d’audit, et nous le dirons avant de vous envoyer
              un devis.
            </p>
          </InfoBox>

          <p className="text-sm">
            <strong>Transparence. </strong>Hagnéré Code vend du développement
            web, de la maintenance et des prestations de référencement&nbsp;: la
            dernière ligne du tableau ci-dessus peut donc nous rapporter, les
            cinq autres non. Rien ici n’exige de passer par nous&nbsp;: les
            commandes, les libellés, les quotas d’API et le calendrier de
            recontrôle se rejouent avec vos propres relevés. Les sources
            officielles ont été relues le 30&nbsp;août 2026 et les libellés de
            la Search Console changent&nbsp;: revérifiez-les avant de vous
            engager. Aucune position, aucune date d’indexation et aucun volume
            de trafic ne sont garantis par cette page.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
