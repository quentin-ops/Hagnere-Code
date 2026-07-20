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
        alt: "Registre d’audit Google Ads reliant preuves de plateforme et preuves métier",
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
      "Commencez par définir le résultat métier attendu et par vérifier les conversions qui alimentent les rapports et les enchères. Si le compte optimise un clic, une visite ou un formulaire en double alors que l’entreprise attend un prospect qualifié ou une vente, les autres réglages seront interprétés sur une base trompeuse.",
  },
  {
    question: "Combien de mois de données faut-il analyser ?",
    answer:
      "Il n’existe pas de fenêtre universelle. Elle doit couvrir le délai de conversion, les changements récents, le volume disponible et, lorsque c’est pertinent, la saisonnalité. L’audit doit expliquer pourquoi la période choisie permet ou non de conclure.",
  },
  {
    question: "Un accès en lecture seule suffit-il pour l’audit ?",
    answer:
      "Il suffit généralement pour diagnostiquer le compte Google Ads. Search Console, Analytics, Merchant Center, la plateforme de consentement ou le logiciel de suivi commercial (CRM) peuvent nécessiter des droits de lecture ou des exports séparés. Toute modification doit faire l’objet d’une autorisation distincte et d’un état initial conservé.",
  },
  {
    question: "Le score d’optimisation suffit-il pour juger le compte ?",
    answer:
      "Non. Il s’agit d’une estimation produite par Google et reliée aux recommandations de la plateforme. Il ne prouve ni la fiabilité des conversions, ni la qualité des prospects, ni la marge, ni la rentabilité. Chaque recommandation doit être reliée à l’objectif réel avant d’être acceptée.",
  },
  {
    question: "Faut-il viser un Quality Score de 10 sur 10 ?",
    answer:
      "Non. Le Quality Score, ou niveau de qualité, sert au diagnostic de la pertinence et de l’expérience pour certains mots-clés des campagnes sur le moteur de recherche, dites Search. Google précise qu’il n’est pas un indicateur clé de performance métier ni une entrée directe de l’enchère. Corrigez une cause vérifiée, pas une note pour elle-même.",
  },
  {
    question: "Peut-on vraiment auditer Performance Max ?",
    answer:
      "Oui, avec les rapports, contrôles et historiques disponibles au moment de l’audit, mais sans prétendre à une transparence absolue. Il faut examiner objectifs, éléments créatifs ou textuels appelés actifs, requêtes ou catégories visibles, pages de destination, exclusions, flux et résultats métier. Savoir quelles ventes n’auraient pas existé sans la campagne — son incrémentalité — peut nécessiter un test adapté.",
  },
  {
    question: "Consent Mode rend-il le suivi conforme au RGPD ?",
    answer:
      "Non. Consent Mode transmet et applique des états de consentement dans les balises Google ; il ne fournit pas la bannière et ne remplace ni l’analyse des finalités, ni l’information, ni la base juridique, ni les autres obligations applicables. L’audit Ads n’est pas une certification RGPD.",
  },
  {
    question: "L’audit autorise-t-il automatiquement une hausse de budget ?",
    answer:
      "Non. Il peut conclure que les données sont insuffisantes, qu’une correction doit précéder toute hausse, qu’un test isolé est nécessaire ou qu’une tranche supplémentaire peut être encadrée. Même cette dernière décision conserve un plafond, une fenêtre d’observation et un critère de retour arrière.",
  },
];


function AdsEvidenceRegister() {
  return (
    <figure
      className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 p-4 shadow-sm sm:p-6 dark:border-zinc-800"
      aria-labelledby="ads-register-title"
    >
      <figcaption id="ads-register-title" className="mb-5">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
          Registre à double entrée
        </span>
        <span className="mt-2 block text-lg font-bold text-white">
          Une preuve Google Ads face à une preuve métier
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
              Preuve Google Ads
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-zinc-400">
              42 actions « formulaire envoyé » sur la période choisie, avec
              origine et paramètres à vérifier.
            </dd>
          </div>
          <div className="rounded-lg bg-black/20 p-3">
            <dt className="text-xs font-semibold text-emerald-300">
              Preuve métier
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-zinc-400">
              17 contacts uniques dans le logiciel de suivi commercial (CRM),
              dont 6 qualifiés et 2 ventes ; marge et lien avec la campagne
              encore inconnus.
            </dd>
          </div>
          <div className="rounded-lg bg-black/20 p-3">
            <dt className="text-xs font-semibold text-amber-300">
              Nature et inconnues
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-zinc-400">
              Écart observé ; doublons, tests, dates, consentement et règle
              reliant la vente à la campagne restent à expliquer.
            </dd>
          </div>
          <div className="rounded-lg bg-black/20 p-3">
            <dt className="text-xs font-semibold text-violet-300">
              Décision et vérification
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
        heroDescription="Un audit utile réconcilie ce que Google compte avec ce que l’entreprise obtient : conversions réelles, demande achetée, qualité des prospects, ventes, accès et décisions. Il peut aussi conclure qu’il est trop tôt pour augmenter le budget."
        heroAction={{
          href: "#registre",
          label: "Voir le registre de preuves",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Publié le " + formatGuideDate(guide.datePublished)}
        keyPoints={[
          {
            number: "01",
            title: "Preuves Ads et métier rapprochées",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Aucun score global",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 décisions de sortie",
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
        ]}
        faqTitle="Audit Google Ads : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Un compte peut afficher des conversions, un score d’optimisation
            élevé et des annonces jugées « excellentes » tout en envoyant
            l’algorithme vers le mauvais résultat métier.
          </strong>{" "}
          Auditer Google Ads ne consiste donc pas à additionner des réglages. Il
          faut rapprocher chaque preuve de plateforme d’un contact, d’une
          commande, d’une vente ou d’une limite observable hors de Google.
        </p>

        <p>
          Avant d’augmenter le budget, l’audit doit vérifier quatre chaînes :
          <strong> mesure</strong>, <strong>demande achetée</strong>,{" "}
          <strong>promesse jusqu’à la destination</strong> et{" "}
          <strong>valeur métier</strong>. Sa conclusion n’est pas toujours «
          optimiser puis dépenser plus ». Elle peut être : données
          insuffisantes, correction préalable, test isolé ou hausse encadrée.
        </p>

        <InfoBox
          variant="amber"
          title="Une photographie ne prouve pas une cause"
        >
          Un audit peut constater un écart, documenter une configuration et
          proposer une hypothèse. Il ne peut pas attribuer honnêtement toute
          variation à un seul réglage, projeter un gain certain ou certifier la
          conformité juridique sans méthode et périmètre adaptés.
        </InfoBox>

        <GuideToc
          items={[
            { id: "verdict", label: "1. Les quatre sorties possibles" },
            { id: "portee", label: "2. Ce qu’un audit peut prouver" },
            { id: "registre", label: "3. Le registre à double entrée" },
            { id: "avant-compte", label: "4. Avant d’ouvrir le compte" },
            { id: "acces", label: "5. Accès et photographie initiale" },
            { id: "conversions", label: "6. Mesure et conversions" },
            { id: "consentement", label: "7. Consentement et données" },
            { id: "demande", label: "8. Demande et inventaires achetés" },
            {
              id: "formats",
              label: "9. Quatre formats à auditer différemment",
            },
            { id: "annonces", label: "10. Annonces et destinations" },
            { id: "encheres", label: "11. Enchères et automatisations" },
            { id: "crm", label: "12. Le verdict commercial" },
            { id: "tests", label: "13. Historique, hypothèses et tests" },
            { id: "livrable", label: "14. Le livrable professionnel" },
            { id: "decision", label: "15. Décider sans faux feu vert" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="verdict">
          1. La première réponse de l’audit est une décision, pas une note
        </h2>

        <GuideTable
          headers={["Sortie", "Quand elle s’impose", "Action suivante"]}
          rows={[
            [
              "Données insuffisantes",
              "conversion non testable, accès manquant, période incohérente ou aucun rapprochement métier",
              "obtenir la preuve absente avant de juger les campagnes",
            ],
            [
              "Correction préalable",
              "l’algorithme optimise une mauvaise action, les droits sont fragiles ou le parcours perd les contacts",
              "corriger, vérifier la correction et constituer un nouvel état de référence",
            ],
            [
              "Test isolé",
              "plusieurs causes restent plausibles et une modification contrôlée peut les départager",
              "écrire hypothèse, base, variante, fenêtre et arrêt avant le test",
            ],
            [
              "Hausse encadrée",
              "mesure, demande, capacité et économie sont suffisamment cohérentes pour apprendre avec une tranche supplémentaire",
              "fixer plafond, fenêtre, indicateurs métier et retour arrière",
            ],
          ]}
        />

        <p>
          Ces sorties ne forment pas un classement du compte. Une campagne peut
          être techniquement propre et rester inadaptée à une offre sans marge,
          à un stock indisponible ou à une équipe qui rappelle trop tard. À
          l’inverse, une campagne imparfaite peut produire des clients utiles :
          la priorité consiste alors à préserver ce qui fonctionne pendant le
          test, pas à reconstruire pour satisfaire une checklist.
        </p>

        <h2 id="portee">
          2. Distinguez constat, causalité, projection et certification
        </h2>

        <p>
          Un <strong>constat</strong> est reproductible : une campagne utilise
          tel objectif, une requête a déclenché telle dépense, un formulaire
          s’envoie deux fois. Une <strong>hypothèse causale</strong> explique
          pourquoi : elle doit encore être testée lorsque d’autres causes
          tiennent. Une <strong>projection</strong> estime la suite sous des
          hypothèses explicites. Une <strong>certification</strong> répond à un
          référentiel et à une méthode distincts ; un audit Ads généraliste n’en
          crée pas une par son intitulé.
        </p>

        <GuideTable
          headers={["Formulation", "Preuve minimale", "Limite à écrire"]}
          rows={[
            [
              "Le formulaire est compté deux fois",
              "test réel, identifiants ou événements datés et rapprochement de la confirmation",
              "période, navigateur, consentement et configuration testés",
            ],
            [
              "Les requêtes semblent trop larges",
              "termes visibles, coûts, correspondances et issues métier",
              "rapport non exhaustif et autres causes de mauvaise qualification",
            ],
            [
              "Cette enchère cause la hausse",
              "historique de modification et test ou rupture suffisamment isolée",
              "saisonnalité, concurrence, offre et délai de conversion",
            ],
            [
              "Consent Mode est actif",
              "états avant choix, acceptation, refus et retrait observés",
              "fonctionnement technique distinct de la conformité juridique",
            ],
          ]}
        />

        <p>
          Bannissez donc les titres « budget gaspillé » calculés en appliquant
          un scénario idéal à chaque clic non converti. Sans contrefactuel — ce
          qui se serait passé avec une autre décision — et sans marge
          attribuable, il s’agit au mieux d’un potentiel à examiner, pas d’une
          économie certaine.
        </p>

        <h2 id="registre">
          3. Recevez chaque constat dans un registre à double entrée
        </h2>

        <p>
          Le registre empêche un export d’outil de se faire passer pour une
          décision. Chaque ligne contient une question, une preuve Google datée,
          une preuve hors plateforme, sa nature, l’action ou le test, le
          responsable, le test d’acceptation — la preuve que la correction
          fonctionne —, le retour arrière et la limite. Une ligne sans preuve
          métier reste explicitement incomplète.
        </p>

        <AdsEvidenceRegister />

        <p>
          Copiez ces colonnes dans votre tableur :{" "}
          <strong>
            ID · question · preuve Ads · preuve métier · nature · priorité ·
            action ou test · responsable · acceptation · retour arrière · limite
          </strong>
          . N’ajoutez pas de moyenne générale. Une conversion cassée, un compte
          inaccessible ou une destination interdite ne doit pas être compensé
          par dix bonnes notes ailleurs.
        </p>

        <h2 id="avant-compte">
          4. Définissez le métier avant d’ouvrir le compte
        </h2>

        <p>
          Une même dépense n’a pas le même sens selon la marge, le délai de
          vente et la capacité de l’entreprise. Avant le premier export,
          consignez le produit ou service, les zones réellement servies, les
          périodes de stock, les promotions, les changements récents, la
          qualification d’un prospect, la vente attendue et qui peut traiter le
          volume.
        </p>

        <GuideTable
          headers={[
            "Question",
            "Pourquoi elle change l’audit",
            "Preuve à obtenir",
          ]}
          rows={[
            [
              "Quel résultat paie réellement la campagne ?",
              "un formulaire, un prospect qualifié et une vente ne valent pas la même chose",
              "définition CRM, statut et marge ou valeur utilisable",
            ],
            [
              "Quel est le délai de conversion ?",
              "les jours récents peuvent être incomplets et fausser la comparaison",
              "durée observée entre clic, contact, qualification et vente",
            ],
            [
              "Quelle capacité peut absorber la demande ?",
              "plus de contacts peut dégrader délai de rappel, qualité et satisfaction",
              "horaires, routage, stock, équipe et rejets",
            ],
            [
              "Qu’est-ce qui a changé ?",
              "offre, prix, site, consentement ou force de vente peuvent expliquer la rupture",
              "journal daté des changements internes et publicitaires",
            ],
          ]}
        />

        <p>
          La période d’analyse découle de ces éléments. Imposer trois mois ou
          douze mois dans tous les comptes ignore le délai de conversion, le
          volume et la saisonnalité. L’audit doit dire ce que la fenêtre inclut,
          ce qu’elle exclut et ce qu’elle permet réellement de comparer.
        </p>

        <h2 id="acces">
          5. Commencez en lecture seule et conservez l’état initial
        </h2>

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
          La photographie initiale contient au minimum : identifiant, devise,
          fuseau, pays, campagnes et objectifs actifs, budgets, stratégies
          d’enchères, utilisateurs, comptes liés, règles, scripts,
          recommandations auto-appliquées et historique disponible. Exportez ce
          qui permet de revenir au diagnostic et listez ce qui n’a pas été
          accessible. Le silence sur un angle mort est plus dangereux que
          l’angle mort lui-même.
        </p>

        <h2 id="conversions">6. Testez ce que Google appelle une conversion</h2>

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
            principale ou secondaire, valeur, devise, comptage, fenêtre, règle
            d’attribution — la façon dont la plateforme répartit le crédit — et
            campagnes qui l’utilisent.
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

        <h2 id="consentement">
          7. Vérifiez ce que le consentement change dans la mesure
        </h2>

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
            "Preuve technique",
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

        <h2 id="demande">
          8. Identifiez les recherches et inventaires réellement achetés
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

        <h2 id="formats">
          9. Recherche, Performance Max, AI Max et Shopping demandent des
          branches différentes
        </h2>

        <p>
          Ces noms ne désignent pas quatre niveaux de qualité. Les campagnes
          <strong> Search</strong> diffusent des annonces sur le moteur de
          recherche. <strong>Performance Max (PMax)</strong> répartit la
          diffusion sur plusieurs emplacements Google à partir d’objectifs et
          d’éléments fournis. <strong>AI Max</strong> ajoute des fonctions
          automatisées aux campagnes Search. <strong>Shopping</strong> s’appuie
          sur un catalogue de produits. On ne leur applique donc pas une seule
          checklist.
        </p>

        <GuideTable
          headers={["Format utilisé", "Contrôles propres", "Limite à déclarer"]}
          rows={[
            [
              "Réseau de Recherche (Search)",
              "termes, correspondances, négatifs, marque, annonces, extensions, zones et pages",
              "rapport de requêtes non exhaustif et enchère contextuelle",
            ],
            [
              "Performance Max (PMax)",
              "objectifs, éléments créatifs ou textuels (actifs), requêtes ou catégories visibles, pages, extension d’URL, exclusions, flux et résultats du logiciel commercial",
              "rapports, métriques et historique disponibles au moment de l’audit",
            ],
            [
              "AI Max pour Search",
              "adaptation du texte, extension d’URL, contrôles de marque et correspondance réellement activés",
              "fonctionnalité volatile ; vérifier le compte et la documentation actuelle",
            ],
            [
              "Shopping",
              "refus, flux, prix, stock, devise, variantes, destination et achat",
              "qualité du flux et du site distincte de l’enchère",
            ],
          ]}
        />

        <p>
          Google expose un{" "}
          <a
            href="https://support.google.com/google-ads/answer/16327396?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapport de Performance Max
          </a>{" "}
          avec des informations sur termes, formats et pages, assorties de
          limites. Il documente aussi les{" "}
          <a
            href="https://support.google.com/google-ads/answer/14337773?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            exclusions liées à l’extension d’URL finale
          </a>
          . Auditer PMax est donc possible, sans promettre de voir tout ce qui
          contribue à chaque impression. Pour savoir si la campagne capte des
          ventes qui auraient eu lieu sans elle — ce que mesure l’incrémentalité
          — ou si elle reprend la demande de marque, il faut une preuve adaptée,
          pas le seul nom du format.
        </p>

        <p>
          Si AI Max est actif, sa{" "}
          <a
            href="https://support.google.com/google-ads/answer/15910187?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation actuelle
          </a>{" "}
          décrit notamment adaptation du texte, extension d’URL et contrôles de
          marque. Notez ce qui était actif pendant la période ; ne relisez pas
          des résultats historiques avec la configuration d’aujourd’hui.
        </p>

        <h2 id="annonces">10. Suivez la promesse jusqu’à la destination</h2>

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

        <h2 id="encheres">
          11. Demandez ce que l’algorithme optimise réellement
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

        <h2 id="crm">
          12. Le CRM, logiciel de suivi commercial, peut inverser le verdict
        </h2>

        <p>
          Le CRM — logiciel de gestion de la relation client — doit distinguer
          au minimum contact unique, qualification, opportunité et vente selon
          le cycle réel. Rapprochez spam, doublons, appels non décrochés, délai
          de rappel, motifs de rejet, stock et capacité. Un coût par prospect
          bas peut cacher des demandes hors cible ; un coût plus élevé peut
          rester soutenable si la marge et la signature le justifient.
        </p>

        <p>
          Cette réconciliation ne force pas Google Ads et le CRM à afficher le
          même chiffre. Dates, fenêtres, attribution, consentement, modélisation
          et identifiants peuvent produire des écarts légitimes. L’audit décrit
          ces objets avant de les comparer et indique ce qui reste impossible à
          rapprocher.
        </p>

        <InfoBox
          variant="amber"
          title="Un retour sur dépenses publicitaires (ROAS) n’est pas automatiquement une rentabilité"
        >
          Le retour sur dépenses publicitaires dépend de la valeur correctement
          importée. La rentabilité de l’entreprise dépend aussi de marge, coûts
          de service, remboursements, délais et attribution. Ne qualifiez pas le
          compte de rentable tant que le pont entre valeur Google et résultat
          comptable n’est pas explicite.
        </InfoBox>

        <h2 id="tests">13. Reliez l’historique à une hypothèse testable</h2>

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

        <h2 id="livrable">
          14. Exigez un livrable qu’une autre équipe peut exécuter
        </h2>

        <p>
          Le nombre de pages ou de contrôles ne mesure pas la qualité. Un audit
          professionnel doit permettre au dirigeant de décider et à une équipe
          distincte d’appliquer puis de vérifier. Demandez le paquet de sortie
          suivant :
        </p>

        <ol>
          <li>
            <strong>Note de décision :</strong> objectifs, verdict, blocages et
            inconnues sur une lecture courte.
          </li>
          <li>
            <strong>Périmètre :</strong> comptes, pays, campagnes, période,
            accès, données vues et exclusions.
          </li>
          <li>
            <strong>État initial :</strong> configuration et preuves nécessaires
            pour comparer après intervention.
          </li>
          <li>
            <strong>Registre :</strong> preuve Ads, preuve métier, nature,
            priorité, action, responsable, test d’acceptation et limite.
          </li>
          <li>
            <strong>Liste de tâches éditable :</strong> actions transmissibles,
            ordre, dépendances, estimation et responsabilité.
          </li>
          <li>
            <strong>Plan de test :</strong> changements isolés, fenêtre,
            indicateurs, arrêt et retour arrière.
          </li>
          <li>
            <strong>Annexes :</strong> exports bruts utiles, sources et
            instructions de conservation.
          </li>
          <li>
            <strong>Sortie :</strong> restitution, décisions consignées,
            propriété des comptes et révocation des accès.
          </li>
        </ol>

        <p>
          Séparez diagnostic et mise en œuvre dans le devis. L’auditeur peut
          aussi corriger, mais ce n’est pas automatique. Pour comparer les coûts
          à périmètre constant, utilisez le guide sur le{" "}
          <Link href="/guides/prix-gestion-google-ads">
            prix complet de la gestion Google Ads
          </Link>
          . Pour comprendre le périmètre public actuel d’Hagnéré Code, consultez
          le service de{" "}
          <Link href="/services/publicite-en-ligne">publicité en ligne</Link>.
        </p>

        <h2 id="decision">
          15. N’augmentez que ce que vous savez encore arrêter
        </h2>

        <p>
          Reprenez les quatre sorties de départ. Si la preuve primaire est
          mauvaise, corrigez-la. Si deux causes restent plausibles, testez-en
          une. Si les données sont trop faibles, écrivez ce qui manque. Si une
          hausse est justifiée, elle reste une expérience : tranche, plafond,
          fenêtre, valeur métier, capacité opérationnelle et retour arrière.
        </p>

        <GuideTable
          headers={[
            "Format",
            "Il suffit lorsque",
            "Livrable attendu",
            "Limite",
          ]}
          rows={[
            [
              "Revue interne",
              "la question est unique, le compte est lisible et l’équipe maîtrise déjà mesure et historique",
              "constat daté, test exécuté et décision consignée",
              "pas de regard indépendant ni de réconciliation large",
            ],
            [
              "Audit ciblé",
              "une chaîne précise bloque la décision : conversion, requêtes, accès, page ou qualité des contacts",
              "périmètre, preuves, cause ou hypothèse, correction et test d’acceptation",
              "ne vaut pas validation du reste du compte",
            ],
            [
              "Audit complet",
              "plusieurs campagnes, outils ou équipes doivent être rapprochés avant un choix de budget ou de prestataire",
              "note de décision, registre, liste de tâches, plan de test, limites et passation",
              "conclusion bornée aux accès, données et période réellement observés",
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
          title="Sécuriser la prochaine décision de budget Google Ads"
          description="Vous avez déjà un compte et hésitez à augmenter, restructurer ou changer de pilotage ? Décrivez l’objectif métier, les campagnes utilisées et le doute principal. Nous cadrons les accès minimaux, les preuves attendues et le livrable — ou nous indiquons si une revue interne suffit."
          tags={[
            "Accès minimaux",
            "Preuves avant recommandation",
            "Audit ciblé ou complet",
          ]}
          ctaLabel="Cadrer mon audit Google Ads"
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
