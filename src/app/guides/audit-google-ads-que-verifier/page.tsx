import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("audit-google-ads-que-verifier");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: guideRobots(guide),
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Audit Google Ads : relier clics, prospects et ventes avant d’augmenter le budget",
      },
    ],
    publishedTime: guide.datePublished + "T09:00:00+02:00",
    modifiedTime: guide.dateModified + "T09:00:00+02:00",
    authors: [SITE_URL + "/equipe"],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [guideUrl(guide) + "/opengraph-image"],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": SITE_URL + "/guides",
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: SITE_URL + "/equipe",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: SITE_URL + "/logos/logo-dark.png" },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: SITE_URL + "/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Audit Google Ads : que vérifier ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Par quoi commencer un audit Google Ads ?",
    answer:
      "Commencez par répondre à une question : qu’attendez-vous réellement de la campagne — un appel utile, un prospect qualifié ou une vente ? Vérifiez ensuite que Google compte bien cette action, une seule fois. Sans cela, les autres chiffres peuvent être trompeurs.",
  },
  {
    question: "Combien de mois de données faut-il analyser ?",
    answer:
      "Il n’existe pas de durée valable pour tous les comptes. La période doit couvrir assez de ventes, le délai entre le clic et la vente, les changements récents et, si nécessaire, la saisonnalité. L’audit doit dire clairement ce que cette période permet de conclure.",
  },
  {
    question: "Un accès en lecture seule suffit-il pour l’audit ?",
    answer:
      "Oui, généralement, pour examiner Google Ads sans rien modifier. Il faut parfois aussi lire Analytics, Merchant Center, l’outil de consentement ou le logiciel commercial. Une correction ne doit commencer qu’après votre autorisation et la conservation de l’état initial.",
  },
  {
    question: "Le score d’optimisation suffit-il pour juger le compte ?",
    answer:
      "Non. Ce score reflète les recommandations de Google ; il ne dit pas si vos contacts sont qualifiés ni si vos ventes sont rentables. Une recommandation n’est utile que si elle sert votre objectif commercial.",
  },
  {
    question: "Faut-il viser un Quality Score de 10 sur 10 ?",
    answer:
      "Non. Le Quality Score, ou niveau de qualité, aide à repérer un problème de pertinence sur certaines campagnes Search. Google précise que ce n’est ni un indicateur de résultat commercial ni une entrée directe de l’enchère. Cherchez la cause d’une mauvaise note au lieu de poursuivre le 10 sur 10.",
  },
  {
    question: "Peut-on vraiment auditer Performance Max ?",
    answer:
      "Oui, dans les limites des rapports disponibles. L’audit peut vérifier les objectifs, les contenus diffusés, les requêtes visibles, les pages, les exclusions, le catalogue et les ventes obtenues. Il ne peut pas prétendre voir chaque décision de l’algorithme ; certaines questions nécessitent un test séparé.",
  },
  {
    question: "Consent Mode rend-il le suivi conforme au RGPD ?",
    answer:
      "Non. Consent Mode transmet des choix de consentement aux outils Google, mais ne fournit pas la bannière et ne règle pas à lui seul les obligations juridiques. Un audit Google Ads n’est pas une certification RGPD.",
  },
  {
    question: "L’audit autorise-t-il automatiquement une hausse de budget ?",
    answer:
      "Non. Il peut recommander d’attendre, de corriger le suivi, de tester un changement ou d’augmenter progressivement. Une hausse raisonnable conserve toujours un plafond, une durée d’essai et une condition d’arrêt.",
  },
];

function AdsDecisionCheck() {
  return (
    <figure
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="ads-register-title"
    >
      <figcaption id="ads-register-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
          Exemple de contrôle avant une hausse de budget
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Ce que Google compte et ce que l’entreprise reçoit
        </span>
        <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-zinc-400">
          Exemple illustratif fictif. Ces volumes ne constituent ni un
          benchmark, ni un résultat client, ni une preuve de rentabilité.
        </span>
      </figcaption>

      <div className="mb-4 grid gap-2 sm:grid-cols-4">
        {[
          ["Observé", "fait reproductible", "text-emerald-300"],
          ["Hypothèse", "cause plausible", "text-amber-300"],
          ["Test", "expérience requise", "text-blue-300"],
          ["Limite", "donnée absente", "text-zinc-300"],
        ].map(([label, detail, color]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.045] p-3"
          >
            <p className={"m-0 text-xs font-bold " + color}>{label}</p>
            <p className="mb-0 mt-1 text-xs text-zinc-400">{detail}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4">
        <p className="m-0 text-sm font-bold text-white">
          Question : peut-on augmenter le budget de génération de prospects ?
        </p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-black/20 p-3">
            <dt className="text-xs font-semibold text-blue-300">
              Dans Google Ads
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-zinc-400">
              42 actions « formulaire envoyé » sur la période choisie, avec
              origine et paramètres à vérifier.
            </dd>
          </div>
          <div className="rounded-lg bg-black/20 p-3">
            <dt className="text-xs font-semibold text-emerald-300">
              Dans le suivi commercial
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-zinc-400">
              17 contacts uniques dans le logiciel de suivi commercial (CRM),
              dont 6 qualifiés et 2 ventes ; marge et lien avec la campagne
              encore inconnus.
            </dd>
          </div>
          <div className="rounded-lg bg-black/20 p-3">
            <dt className="text-xs font-semibold text-amber-300">
              Ce qui reste à comprendre
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-zinc-400">
              Écart observé ; doublons, tests, dates, consentement et règle
              reliant la vente à la campagne restent à expliquer.
            </dd>
          </div>
          <div className="rounded-lg bg-black/20 p-3">
            <dt className="text-xs font-semibold text-violet-300">
              Décision raisonnable
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-zinc-400">
              Correction préalable. Tester l’événement réel et rapprocher les
              identifiants avant toute hausse.
            </dd>
          </div>
        </dl>
      </div>
    </figure>
  );
}

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
          { label: "Audit Google Ads : que vérifier ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous payez des clics, Google annonce des conversions, mais vous ne savez pas combien sont devenues de vrais prospects ou de vraies ventes ? Un audit vérifie cette chaîne avant de vous conseiller de corriger, tester ou augmenter le budget."
        heroAction={{
          href: "#verdict",
          label: "Voir les 4 décisions possibles",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Conversions réellement vérifiées",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Requêtes et pages contrôlées",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Décision de budget explicite",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/pourquoi-google-ads-ne-convertit-pas",
            label: "Trouver pourquoi les clics ne deviennent pas des clients",
          },
          {
            href: "/guides/prix-gestion-google-ads",
            label: "Comparer le coût complet de Google Ads",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label: "Vérifier ce qui se passe après le clic",
          },
          {
            href: "/services/publicite-en-ligne",
            label: "Audit et pilotage de publicité en ligne",
          },
          {
            href: "/guides/prix-referencement-naturel",
            label: "Comparer avec une stratégie SEO",
          },
          {
            href: "/guides/seo-ou-google-ads",
            label: "Décider entre SEO, Google Ads, hybride ou report",
          },
        ]}
        faqTitle="Audit Google Ads : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Chaque mois, la facture Google Ads tombe. Le tableau de bord affiche
            des clics et des conversions, mais personne ne sait dire combien de
            ces conversions sont devenues des appels utiles, des devis signés ou
            des ventes rentables.
          </strong>{" "}
          Dans cette situation, augmenter le budget revient à accélérer sans
          savoir si l’argent va au bon endroit. La réponse simple est de
          vérifier d’abord ce que Google mesure, les recherches payées, les
          pages d’arrivée et ce que votre équipe commerciale reçoit réellement.
        </p>

        <p>
          Un <strong>audit Google Ads</strong> est un contrôle ponctuel du
          compte et du parcours qui suit le clic. Il doit déboucher sur une
          décision compréhensible par un dirigeant :{" "}
          <strong>attendre faute de données</strong>,{" "}
          <strong>corriger avant de dépenser davantage</strong>,{" "}
          <strong>tester un changement précis</strong> ou{" "}
          <strong>augmenter progressivement avec une limite</strong>. Ce guide
          vous montre quoi demander et comment repérer un audit qui se contente
          de commenter les écrans de Google.
        </p>

        <InfoBox
          variant="amber"
          title="Ce qu’un audit ne peut pas vous promettre"
        >
          Il peut montrer un problème, proposer une explication et préparer un
          test. Il ne peut pas garantir un gain, attribuer chaque baisse à un
          réglage unique ni certifier la conformité juridique de tous vos
          traitements de données.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "point-depart",
              label: "Avant l’audit : objectif, accès et période",
            },
            {
              id: "suivi",
              label: "1. Le suivi mesure-t-il une action utile ?",
            },
            { id: "recherches", label: "2. Quelles recherches payez-vous ?" },
            { id: "annonces", label: "3. Que promettent les annonces ?" },
            { id: "pages", label: "4. Que se passe-t-il sur les pages ?" },
            {
              id: "contacts",
              label: "5. Les contacts deviennent-ils clients ?",
            },
            {
              id: "budget",
              label: "6. Le budget poursuit-il le bon résultat ?",
            },
            {
              id: "cas-complexes",
              label: "Bloc optionnel : PMax, AI Max et imports",
            },
            { id: "livrable", label: "Le résultat à recevoir" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="point-depart">
          Avant l’audit : fixez l’objectif, les accès et la période
        </h2>

        <p>
          Écrivez d’abord le résultat qui paie la campagne, le délai habituel
          entre clic et vente, la marge utilisable, les zones servies et la
          capacité de l’équipe à traiter les demandes. La période d’analyse doit
          couvrir ce cycle et signaler les changements de prix, d’offre, de
          site, de consentement ou de stock. Sans ce contexte, un coût par
          conversion peut être exact dans Google et inutile pour décider.
        </p>

        <p>
          Les{" "}
          <a
            href="https://support.google.com/google-ads/answer/9978556?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            niveaux d’accès Google Ads
          </a>{" "}
          distinguent notamment lecture, facturation, standard et
          administration. Un diagnostic peut généralement commencer en lecture
          seule. Les modifications demandent une autorisation séparée, un
          responsable et un retour arrière. Les autres outils — Analytics,
          Merchant Center, gestionnaire de balises, plateforme de consentement
          et CRM — ont leurs propres droits.
        </p>

        <p>
          Vérifiez aussi qui possède et administre le compte. Google documente
          la{" "}
          <a
            href="https://support.google.com/google-ads/answer/7456532?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            propriété dans la relation entre compte administrateur et compte
            client
          </a>
          . L’entreprise devrait conserver un accès administrateur direct,
          connaître les comptes associés et pouvoir révoquer l’auditeur. Le
          statut exact dépend de l’organisation du compte ; ne le déduisez pas
          d’un logo d’agence.
        </p>

        <p>
          Avant toute modification, conservez une photographie datée des
          campagnes, objectifs, budgets, enchères, utilisateurs, comptes liés,
          automatisations et historique disponibles. Listez les accès et données
          absents : une conclusion doit rester partielle lorsque sa preuve
          manque.
        </p>

        <h2 id="suivi">1. Le suivi mesure-t-il une action vraiment utile ?</h2>

        <p>
          Une <strong>conversion</strong> est une action définie comme utile
          dans la configuration. Google distingue{" "}
          <a
            href="https://support.google.com/google-ads/answer/10993988?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            actions principales et secondaires
          </a>{" "}
          selon leur usage dans les rapports et les enchères. Plusieurs actions
          peuvent être pertinentes ; la question n’est pas d’en imposer une
          seule, mais de savoir lesquelles pilotent chaque campagne et si elles
          représentent bien le résultat attendu.
        </p>

        <ol>
          <li>
            <strong>Inventoriez chaque action :</strong> origine, catégorie,
            principale ou secondaire, valeur, devise, comptage, période pendant
            laquelle l’action reste rattachée au clic, règle d’attribution — la
            façon dont la plateforme répartit le crédit — et campagnes qui
            l’utilisent.
          </li>
          <li>
            <strong>Exécutez l’action réelle :</strong> envoi confirmé,
            transaction, appel ou changement CRM. Un clic sur un bouton ne
            prouve pas la réception.
          </li>
          <li>
            <strong>Contrôlez doublons et tests :</strong> identifiant de
            transaction, rechargement de page, envois internes, annulations et
            remboursements selon le modèle.
          </li>
          <li>
            <strong>Rapprochez la chaîne :</strong> action Ads, contact unique,
            qualification, opportunité, vente et marge disponible, en expliquant
            dates et attribution.
          </li>
        </ol>

        <p>
          Les{" "}
          <a
            href="https://support.google.com/google-ads/answer/14681508?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            diagnostics de balise
          </a>{" "}
          et de{" "}
          <a
            href="https://support.google.com/google-ads/answer/11956168?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            suivi avancé des conversions
          </a>{" "}
          aident à repérer des états techniques. Ils ne remplacent pas le test
          métier. Pour les prospects, Google permet aussi de distinguer{" "}
          <a
            href="https://support.google.com/google-ads/answer/11459091?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            leads qualifiés et convertis
          </a>{" "}
          dans les imports hors connexion. Les définitions, la fraîcheur et la
          qualité du CRM restent sous la responsabilité de l’annonceur.
        </p>

        <InfoBox
          variant="blue"
          title="Un appel long n’est pas forcément un bon prospect"
        >
          La{" "}
          <a
            href="https://support.google.com/google-ads/answer/6100664?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            conversion d’appel Google Ads
          </a>{" "}
          peut dépendre d’une durée configurée. Auditez aussi appels manqués,
          doublons, motif, qualification et vente. La durée prouve une durée,
          pas une intention d’achat.
        </InfoBox>

        <h3>
          Vérifiez aussi ce que le suivi fait avant et après le choix de
          l’utilisateur
        </h3>

        <p>
          Une CMP, ou plateforme de gestion du consentement, recueille et
          transmet les choix de l’utilisateur selon sa configuration. Le{" "}
          <a
            href="https://developers.google.com/tag-platform/security/guides/consent?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide Google Consent Mode
          </a>{" "}
          décrit des états par défaut puis leur mise à jour. Consent Mode ne
          fournit pas la bannière et ne valide pas à lui seul le droit
          applicable.
        </p>

        <GuideTable
          headers={[
            "État à tester",
            "Ce qu’il faut observer",
            "Question de contrôle",
          ]}
          rows={[
            [
              "Avant le choix",
              "états par défaut transmis avant le déclenchement concerné",
              "des traceurs partent-ils avant la décision ?",
            ],
            [
              "Après acceptation",
              "mise à jour reçue et événement réel observable",
              "la conversion est-elle comptée une seule fois ?",
            ],
            [
              "Après refus",
              "comportement conforme à la configuration déclarée",
              "le rapport distingue-t-il mesure observée, modélisée et absente ?",
            ],
            [
              "Après retrait",
              "nouvel état appliqué et information cohérente",
              "la révocation fonctionne-t-elle dans les outils concernés ?",
            ],
          ]}
        />

        <p>
          En France, la{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL rappelle le principe de consentement préalable pour les
            traceurs publicitaires
          </a>{" "}
          dans le périmètre qu’elle décrit. Les conversions améliorées peuvent
          hacher certaines données ; « haché » ne veut pas dire automatiquement
          « anonyme ». Vérifiez finalité, information, base applicable, durée,
          sécurité, rôles et fournisseurs avec les compétences appropriées. Le
          guide ne remplace pas un avis juridique ou une analyse RGPD.
        </p>

        <h2 id="recherches">
          2. Quels mots, zones et horaires payez-vous réellement ?
        </h2>

        <p>
          Comparez mots-clés, termes de recherche, coût et issue métier. Google
          précise que le{" "}
          <a
            href="https://support.google.com/google-ads/answer/2472708?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport sur les termes de recherche
          </a>{" "}
          n’est pas exhaustif : certaines requêtes peu actives n’y figurent pas.
          L’échantillon visible peut montrer un problème ; il ne permet pas de
          décrire toute la demande avec certitude.
        </p>

        <p>
          Ne traduisez pas non plus « correspondance exacte » par « texte
          identique ». Les{" "}
          <a
            href="https://support.google.com/google-ads/answer/7478529?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            types de correspondance Google Ads
          </a>{" "}
          peuvent couvrir un même sens ou une même intention. Examinez négatifs,
          conflits, marque et générique, mais rattachez chaque correction à une
          requête et à son résultat plutôt qu’à une doctrine universelle sur la
          requête large.
        </p>

        <p>
          Contrôlez enfin zones ciblées, lieux observés, langues, horaires,
          appareils, partenaires de recherche et extension éventuelle au
          Display. Google indique que la{" "}
          <a
            href="https://support.google.com/google-ads/answer/1722038?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            géolocalisation n’est pas exacte à cent pour cent
          </a>{" "}
          et que les options peuvent viser présence ou intérêt. Segmentez avant
          de désactiver : aucun réglage n’est mauvais indépendamment de l’offre,
          de la zone servie et du résultat observé.
        </p>

        <h2 id="annonces">
          3. Les annonces promettent-elles ce que l’offre délivre ?
        </h2>

        <p>
          Vérifiez l’approbation, la promesse, le prix, les conditions, les
          mentions nécessaires et les combinaisons possibles des annonces
          responsives. Lorsqu’une information doit toujours apparaître, le
          verrouillage des composants se décide avec ses conséquences. La{" "}
          <a
            href="https://support.google.com/google-ads/answer/9921843?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            force de l’annonce
          </a>{" "}
          ne calcule ni Ad Rank, ni Quality Score, ni gain aux enchères : une
          appréciation « excellente » ne remplace pas la cohérence de l’offre.
        </p>

        <p>
          Le <strong>Quality Score</strong>, ou niveau de qualité, est lui aussi
          un{" "}
          <a
            href="https://support.google.com/google-ads/answer/6167118?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            outil de diagnostic selon Google
          </a>
          , pas un KPI métier ni une entrée directe de l’enchère. Utilisez ses
          composantes pour enquêter sur requête, annonce et page ; ne fixez pas
          un objectif de dix sur dix indépendant des ventes.
        </p>

        <h2 id="pages">
          4. La page permet-elle de comprendre l’offre et d’aller au bout ?
        </h2>

        <p>
          Ouvrez ensuite chaque destination sur mobile et ordinateur. Contrôlez
          URL, redirections, contenu promis, prix, disponibilité, formulaire,
          appel, confirmation, déduplication et restrictions du secteur. Si le
          site perd le contact après le clic, renvoyez vers le diagnostic{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            pourquoi le site ne convertit pas
          </Link>{" "}
          au lieu d’attribuer mécaniquement l’échec à l’annonce.
        </p>

        <h2 id="contacts">
          5. Les contacts publicitaires deviennent-ils de vrais clients ?
        </h2>

        <p>
          Reliez chaque chiffre Google à un contact unique, une qualification,
          un devis, une vente et, lorsque c’est pertinent, une marge. Le CRM —
          logiciel de gestion de la relation client — doit aussi faire
          apparaître spam, doublons, appels non décrochés, délai de rappel et
          motifs de rejet. Un coût par prospect bas peut cacher des demandes
          hors cible.
        </p>

        <AdsDecisionCheck />

        <p>
          Dans le registre d’audit, placez côte à côte : question, chiffre
          Google Ads, résultat commercial, inconnue, priorité, correction ou
          test, responsable, résultat attendu et condition d’arrêt. Les deux
          systèmes ne doivent pas forcément afficher le même total : dates,
          fenêtres, attribution, consentement, modélisation et identifiants
          peuvent créer des écarts légitimes, à expliquer plutôt qu’à masquer.
        </p>

        <InfoBox
          variant="amber"
          title="Un retour sur dépenses publicitaires (ROAS) n’est pas automatiquement une rentabilité"
        >
          Le retour sur dépenses publicitaires dépend de la valeur correctement
          importée. La rentabilité dépend aussi de la marge, des coûts de
          service, des remboursements, des délais et de l’attribution. Ne
          qualifiez pas le compte de rentable sans pont explicite vers le
          résultat de l’entreprise.
        </InfoBox>

        <h2 id="budget">
          6. Le budget et les enchères poursuivent-ils le bon résultat ?
        </h2>

        <p>
          Reliez la stratégie d’enchères à l’objectif : clic, visibilité,
          conversion ou valeur. Examinez états, budgets partagés, objectifs de
          coût ou de rendement, délais et automatisations. Une campagne «
          limitée par le budget » décrit une contrainte de diffusion ; elle
          n’ordonne pas à l’entreprise de dépenser plus.
        </p>

        <GuideTable
          headers={["Contrôle", "Question utile", "Faux raccourci"]}
          rows={[
            [
              "Objectif d’enchère",
              "l’action et sa valeur correspondent-elles au résultat métier ?",
              "une stratégie automatisée trouve seule la bonne économie",
            ],
            [
              "Délai de conversion",
              "les jours récents ont-ils eu le temps de produire leur issue ?",
              "la dernière semaine prouve immédiatement une baisse",
            ],
            [
              "Recommandations",
              "la recommandation sert-elle l’objectif, avec quelle conséquence ?",
              "appliquer automatiquement parce que le score augmente",
            ],
            [
              "Historique",
              "quelle personne, règle ou automatisation a modifié quoi et quand ?",
              "attribuer une rupture sans événement daté",
            ],
          ]}
        />

        <p>
          Google explique le{" "}
          <a
            href="https://support.google.com/google-ads/answer/14545572?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            délai de conversion
          </a>{" "}
          et précise que les performances récentes peuvent apparaître
          provisoirement plus faibles. Il présente aussi le{" "}
          <a
            href="https://support.google.com/google-ads/answer/9061546?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            score d’optimisation
          </a>{" "}
          comme une estimation liée à ses recommandations. Ce score peut guider
          une revue ; il ne remplace ni les ventes, ni la marge, ni l’avis
          indépendant.
        </p>

        <h3>Expliquez une variation avant de changer plusieurs réglages</h3>

        <p>
          L’
          <a
            href="https://support.google.com/google-ads/answer/2454137?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            historique des modifications Google Ads
          </a>{" "}
          permet d’identifier campagnes, budgets, objectifs, règles ou
          utilisateurs ayant changé la configuration. Superposez-le aux
          changements d’offre, de page, de consentement, de stock et de force de
          vente. Une coïncidence temporelle produit une piste, pas toujours une
          cause.
        </p>

        <p>
          Lorsque l’incertitude reste décisive, les{" "}
          <a
            href="https://support.google.com/google-ads/answer/10682377?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            expériences Google Ads
          </a>{" "}
          peuvent comparer une base et une variante avec une répartition
          définie, selon les formats disponibles. Écrivez avant lancement :
          hypothèse, population, période compatible avec le délai, indicateur
          métier, changement isolé, seuil d’arrêt et décision. Plusieurs tests
          simultanés peuvent interférer ; la plateforme ne supprime pas ce
          risque méthodologique.
        </p>

        <h2 id="cas-complexes">
          Bloc optionnel : PMax, AI Max, Shopping et imports hors connexion
        </h2>

        <p>
          N’ajoutez ce bloc que si ces fonctions sont réellement actives pendant
          la période. Leur présence ne remplace pas les six questions
          précédentes et leurs rapports ne rendent pas toute la diffusion
          observable.
        </p>

        <GuideTable
          headers={["Fonction active", "Contrôle propre", "Limite à déclarer"]}
          rows={[
            [
              "Performance Max",
              "objectifs, éléments, requêtes ou catégories visibles, pages, extension d’URL, exclusions et flux",
              "niveau de détail disponible dans les rapports au jour de l’audit",
            ],
            [
              "AI Max pour Search",
              "adaptation du texte, extension d’URL, contrôles de marque et correspondance activés",
              "configuration et documentation susceptibles d’évoluer",
            ],
            [
              "Shopping",
              "refus, prix, stock, devise, variantes, destination et achat",
              "qualité du flux et du site distincte de la stratégie d’enchères",
            ],
            [
              "Imports hors connexion",
              "identifiant, définition du statut, date, devise, valeur, doublons et fraîcheur du CRM",
              "un import accepté techniquement ne prouve pas la qualité métier de la donnée",
            ],
          ]}
        />

        <p>
          Google documente le{" "}
          <a
            href="https://support.google.com/google-ads/answer/16327396?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport Performance Max
          </a>
          , les{" "}
          <a
            href="https://support.google.com/google-ads/answer/14337773?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            exclusions d’extension d’URL
          </a>{" "}
          et le{" "}
          <a
            href="https://support.google.com/google-ads/answer/15910187?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            fonctionnement d’AI Max
          </a>
          . Notez la configuration observée et n’appliquez pas la configuration
          actuelle à une période historique sans preuve.
        </p>

        <h2 id="livrable">
          Exigez un résultat que votre équipe peut comprendre et appliquer
        </h2>

        <p>
          Le nombre de pages ne mesure pas la qualité. À la fin, vous devez
          comprendre ce qui bloque, ce qui fonctionne déjà, ce qui doit changer
          en premier et comment vérifier l’effet de la correction. Demandez les
          éléments suivants dans un format que votre équipe peut reprendre :
        </p>

        <ol>
          <li>
            <strong>Résumé pour décider :</strong> objectif, réponse, blocages
            et inconnues sur une page courte.
          </li>
          <li>
            <strong>Périmètre et point de départ :</strong> comptes, campagnes,
            période, accès, exclusions, configuration et chiffres à conserver.
          </li>
          <li>
            <strong>Registre de preuves :</strong> chiffre Google, résultat
            commercial, source, inconnue, priorité et limite connue.
          </li>
          <li>
            <strong>Plan d’action éditable :</strong> correction ou test,
            responsable, dépendances, durée, indicateur, règle d’arrêt et retour
            arrière.
          </li>
          <li>
            <strong>Passation :</strong> exports utiles, sources, décisions,
            propriété des comptes et révocation des accès temporaires.
          </li>
        </ol>

        <p>
          Séparez diagnostic et mise en œuvre dans le devis. L’auditeur peut
          aussi corriger, mais ce n’est pas automatique. Pour comparer les coûts
          à périmètre constant, utilisez le guide sur le{" "}
          <Link href="/guides/prix-gestion-google-ads">
            prix complet de la gestion Google Ads
          </Link>
          .
        </p>

        <p>
          La conclusion doit choisir entre quatre suites : attendre une donnée
          manquante, corriger une chaîne défaillante, tester une explication ou
          augmenter progressivement avec une limite. Le format de mission dépend
          du nombre de questions encore ouvertes :
        </p>

        <GuideTable
          headers={["Format", "Quand le choisir", "Ce que vous devez obtenir"]}
          rows={[
            [
              "Revue interne",
              "la question est unique, le compte est lisible et l’équipe maîtrise déjà mesure et historique",
              "un contrôle daté, un test exécuté et une décision consignée ; elle n’apporte pas de regard indépendant",
            ],
            [
              "Audit ciblé",
              "une chaîne précise bloque la décision : conversion, requêtes, accès, page ou qualité des contacts",
              "la cause confirmée ou l’explication à tester, la correction et son contrôle ; le reste du compte n’est pas validé",
            ],
            [
              "Audit complet",
              "plusieurs campagnes, outils ou équipes doivent être rapprochés avant un choix de budget ou de prestataire",
              "un résumé de décision, une liste d’actions, un plan de test et une passation ; la conclusion reste limitée aux données observées",
            ],
          ]}
        />

        <InfoBox
          variant="emerald"
          title="Quand Hagnéré Code est adapté — et quand une revue interne suffit"
        >
          <p className="mb-2">
            <strong>Cas adapté :</strong> compte actif, mesure ou qualité
            discutée, plusieurs systèmes à réconcilier, automatisations ou
            formats complexes, et responsable métier capable d’expliquer marge,
            qualification et capacité.
          </p>
          <p className="mb-0">
            <strong>Cas plus simple :</strong> une petite campagne lisible, une
            conversion déjà testée et une question unique peuvent relever d’un
            contrôle ciblé ou d’une revue interne. Un compte sans activité
            exploitable appelle plutôt un cadrage de lancement. Une demande de
            garantie de résultat ou un secteur hors compétence doit être refusé.
          </p>
        </InfoBox>

        <GuideInlineCTA
          title="Savoir quoi corriger avant de remettre du budget"
          description="Vous avez déjà un compte mais vous ne savez pas si ses conversions deviennent de vrais clients ? Décrivez votre objectif, vos campagnes et le doute principal. Vous saurez si une vérification ciblée suffit, si le suivi doit être réparé ou si un audit complet est utile."
          tags={[
            "Conversions vérifiées",
            "Priorités compréhensibles",
            "Budget mieux décidé",
          ]}
          ctaLabel="Vérifier mon compte Google Ads"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <p>
          Sources consultées le 20 juillet 2026. Les fonctionnalités Google Ads,
          notamment Performance Max, AI Max, les objectifs et les rapports,
          évoluent : vérifiez la configuration et la documentation le jour de
          l’audit. Les sources CNIL et le RGPD doivent être appliqués aux
          traitements réels. Ce guide n’est ni un avis juridique, ni une
          certification, ni une promesse de performance.
        </p>

        <ul>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/9978556?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — À propos des niveaux d’accès
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/7456532?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              propriété des comptes client
            </a>
            .
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/10993988?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Objectifs de conversion
            </a>
            , diagnostics de balise et imports de leads qualifiés.
          </li>
          <li>
            <a
              href="https://developers.google.com/tag-platform/security/guides/consent?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Tag Platform — Configurer Consent Mode
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — FAQ cookies et traceurs
            </a>
            .
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/2472708?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Rapport sur les termes de recherche
            </a>
            ,{" "}
            <a
              href="https://support.google.com/google-ads/answer/7478529?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              types de correspondance
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/1722038?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              ciblage géographique
            </a>
            .
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/16327396?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Rapport Performance Max
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/15910187?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonctionnement d’AI Max
            </a>
            .
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/9921843?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Force de l’annonce
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/6167118?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quality Score
            </a>
            .
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/14545572?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Délai de conversion
            </a>
            ,{" "}
            <a
              href="https://support.google.com/google-ads/answer/9061546?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              score d’optimisation
            </a>
            ,{" "}
            <a
              href="https://support.google.com/google-ads/answer/2454137?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              historique des modifications
            </a>{" "}
            et{" "}
            <a
              href="https://support.google.com/google-ads/answer/10682377?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              expériences
            </a>
            .
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
