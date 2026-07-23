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
import { SearchVisibilityDiagnostic } from "@/components/guides/SearchVisibilityDiagnostic";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("pourquoi-site-pas-visible-google");

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
        alt: "Identifier l’endroit où une page cesse d’être visible sur Google",
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
      name: "Pourquoi votre site n’apparaît-il pas sur Google ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Ce diagnostic couvre-t-il Google Maps et la fiche d’établissement ?",
    answer:
      "Non. La présence dans Google Maps et la gestion d’une fiche d’établissement suivent d’autres outils et d’autres signaux. Une entreprise peut être visible sur la carte alors qu’une page de son site reste absente d’une recherche classique, ou l’inverse.",
  },
  {
    question:
      "La navigation privée montre-t-elle la position réelle de mon site ?",
    answer:
      "Non, elle ne crée pas une position universelle. Le lieu, l’appareil, la langue et la composition des résultats peuvent encore varier. Utilisez-la pour observer un résultat, mais appuyez le diagnostic sur une page, une recherche, une période et les données disponibles dans Search Console.",
  },
  {
    question:
      "Dois-je donner le mot de passe de mon compte Google à un prestataire ?",
    answer:
      "Non. Le propriétaire du compte peut ajouter un utilisateur avec le niveau d’accès nécessaire. Transmettez la fiche copiée et les captures utiles si une lecture suffit ; ne partagez ni mot de passe, ni code de double authentification.",
  },
  {
    question: "Que faut-il envoyer avec le diagnostic à mon prestataire ?",
    answer:
      "Envoyez l’URL complète, la recherche, la période, le pays et l’appareil, puis des captures datées des écrans dont vous avez recopié les informations. Masquez les données personnelles et demandez en retour une correction, un responsable et un test précis.",
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
          { label: "Site invisible sur Google" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Prenez une page et une recherche précises, puis vérifiez où la visibilité s’arrête réellement avant de payer une refonte, des articles ou des liens."
        heroAction={{ href: "#diagnostic", label: "Faire le diagnostic" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "1 page + 1 recherche",
            description: "",
            color: "emerald",
          },
          {
            number: "02",
            title: "6 preuves à suivre",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Outil local gratuit",
            description: "",
            color: "violet",
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
            href: "/guides/audit-seo-que-contient-il",
            label: "Vérifier ce que doit livrer un audit SEO",
          },
          {
            href: "/guides/refonte-sans-perdre-son-seo",
            label: "Protéger les pages lors d’une refonte",
          },
          {
            href: "/guides/pourquoi-mon-site-ne-convertit-pas",
            label:
              "Diagnostiquer les visites qui ne deviennent pas des demandes",
          },
          {
            href: "/guides/seo-local-pme",
            label: "Améliorer la visibilité locale de votre entreprise",
          },
        ]}
        faqTitle="Site absent de Google : les réponses sans raccourci"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Votre site est en ligne, mais lorsque vous tapez votre activité et
          votre ville dans Google, vous ne le voyez pas. Faut-il attendre,
          demander l’indexation, publier davantage d’articles ou refaire le site
          ? Avant de dépenser, il faut répondre à une question plus simple :{" "}
          <strong>à quel endroit précis la visibilité s’arrête-t-elle ?</strong>
        </p>
        <p>
          Dans ce guide, vous allez contrôler une adresse de page et une
          recherche exactes. Vous verrez si Google connaît la page, peut
          l’ouvrir, l’a retenue dans son index, la propose pour cette recherche
          et si la page reçoit des clics que Search Console comptabilise. Vous
          séparerez ensuite ces clics des appels et formulaires réellement
          attribuables. À la fin, vous saurez quoi corriger, quoi mesurer, quand
          attendre et dans quels cas un audit devient utile.
        </p>

        <GuideToc
          items={[
            { id: "paire", label: "1. Choisir une page et une recherche" },
            { id: "chaine", label: "2. Comprendre les six étapes" },
            { id: "diagnostic", label: "3. Remplir le diagnostic" },
            { id: "preuves", label: "4. Lire les preuves sans se tromper" },
            { id: "exemple", label: "5. Suivre l’exemple BatiClair 73" },
            { id: "decisions", label: "6. Corriger, attendre ou mesurer" },
            { id: "audit", label: "7. Savoir si un audit est utile" },
            { id: "limites", label: "8. Conserver un diagnostic honnête" },
          ]}
        />

        <h2 id="paire">
          1. « Mon site est invisible » ne suffit pas : choisissez une page et
          une recherche
        </h2>
        <p>
          Un site n’a pas un état unique dans Google. Sa page d’accueil peut
          apparaître lorsque vous tapez le nom de l’entreprise, tandis qu’une
          page de service reste absente sur une recherche métier. Une autre page
          peut être indexée, recevoir des impressions, puis ne générer aucun
          clic. Dire seulement « le site n’apparaît pas » mélange des problèmes
          qui n’ont ni la même cause, ni la même correction.
        </p>
        <p>
          Commencez par recopier l’adresse complète de la page concernée. Puis
          écrivez la recherche comme un prospect la formulerait : par exemple «
          isolation extérieure Chambéry ». Faites un contrôle séparé pour le nom
          de l’entreprise. Cette distinction évite de prendre une présence sur
          la marque — une personne qui vous connaît déjà — pour une visibilité
          sur votre métier.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
            <p className="mb-1 text-sm font-bold text-emerald-950 dark:text-emerald-100">
              Recherche de marque
            </p>
            <p className="mb-0 text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
              « BatiClair 73 » : la personne connaît déjà le nom. Ce contrôle
              vérifie surtout si elle retrouve l’entreprise.
            </p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
            <p className="mb-1 text-sm font-bold text-blue-950 dark:text-blue-100">
              Recherche métier
            </p>
            <p className="mb-0 text-sm leading-relaxed text-blue-800 dark:text-blue-300">
              « isolation extérieure Chambéry » : la personne cherche une
              réponse, sans avoir encore choisi l’entreprise.
            </p>
          </div>
        </div>
        <p>
          Ajoutez une période visible dans l’outil, ainsi que le pays et
          l’appareil si cela change la situation. Google explique que la
          diffusion d’un résultat peut varier selon la recherche, la langue, le
          lieu et l’appareil dans sa documentation sur le{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            fonctionnement de Google Search
          </a>
          . Une capture isolée de votre propre téléphone ne suffit donc pas à
          mesurer la visibilité de tous vos prospects.
        </p>

        <h2 id="chaine">
          2. La visibilité peut s’arrêter à six endroits différents
        </h2>
        <p>
          Google présente trois grandes étapes : exploration, indexation et
          diffusion. Pour prendre une décision d’entreprise, nous détaillons ici
          cette progression en six preuves observables. Ce découpage est un
          outil pédagogique Hagnéré Code ; il ne s’agit pas d’une terminologie
          officielle de Google.
        </p>
        <div className="not-prose my-6 space-y-3">
          {[
            [
              "01",
              "Google connaît-il l’adresse ?",
              "L’inspection d’URL reconnaît la page ou indique qu’elle est inconnue. La présence dans un sitemap peut aider, mais ne prouve pas cette découverte.",
            ],
            [
              "02",
              "Google peut-il ouvrir la page ?",
              "La dernière exploration a-t-elle réussi ? Une réponse serveur, une redirection ou un blocage observé peut arrêter le diagnostic ici.",
            ],
            [
              "03",
              "A-t-il retenu cette version ?",
              "La page est-elle indexée ? Google a-t-il choisi la même adresse principale que celle déclarée par le site ?",
            ],
            [
              "04",
              "La propose-t-il pour cette recherche ?",
              "Le rapport Performances montre-t-il des impressions visibles pour la même page, la même recherche et la même période ?",
            ],
            [
              "05",
              "Les personnes choisissent-elles le résultat ?",
              "Des clics sont-ils visibles avec exactement les mêmes filtres ? Une impression n’est ni une visite certaine, ni une demande.",
            ],
            [
              "06",
              "Ces clics deviennent-ils des demandes attribuables ?",
              "Formulaires, appels ou rendez-vous doivent être mesurés ailleurs et reliés au même parcours avant tout taux de conversion.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-[3rem_1fr] sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                {number}
              </div>
              <div>
                <p className="mb-1 font-bold text-zinc-950 dark:text-white">
                  {title}
                </p>
                <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <InfoBox
          variant="amber"
          title="Commencez toujours par la première preuve manquante"
        >
          Si Google n’a pas pu ouvrir la page, le nombre de mots ou la qualité
          du bouton ne sont pas encore le premier sujet. Si la page est indexée
          et reçoit déjà des impressions, demander encore son indexation ne
          traite pas le problème observé. Chaque étape ferme une hypothèse avant
          d’en ouvrir une autre.
        </InfoBox>

        <h2 id="diagnostic">
          3. Remplissez votre diagnostic URL–recherche sans donner vos accès
        </h2>
        <p>
          <a
            href="https://search.google.com/search-console/about?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Console
          </a>{" "}
          est l’outil gratuit de Google qui renseigne notamment l’exploration,
          l’indexation, les impressions et les clics d’un site. Pour inspecter
          une adresse, le site doit y être enregistré — Google l’appelle une
          propriété — et votre compte doit posséder un accès suffisant.
        </p>
        <p>
          Si vous n’avez pas cet accès, demandez au propriétaire du compte de
          vous ajouter comme utilisateur ou de recopier les informations avec
          vous. Ne partagez jamais son mot de passe ni son code de double
          authentification. Si Search Console n’est pas encore configuré,
          indiquez « inconnu » pour les preuves concernées : une recherche
          publique ne remplace pas les rapports du site.
        </p>
        <p>
          Ouvrez ensuite Search Console dans un autre onglet et recopiez
          uniquement ce que vous voyez. L’outil ci-dessous ne demande ni
          connexion, ni adresse e-mail. Rien n’est transmis au serveur et rien
          n’est sauvegardé après le rechargement de la page. Vous pouvez copier
          le résultat pour le transmettre à votre équipe ou à votre prestataire
          actuel.
        </p>
        <SearchVisibilityDiagnostic />
        <p>
          Faites une fiche par paire. Si trois pages importantes posent
          problème, vous obtiendrez trois diagnostics. Cette discipline paraît
          plus lente qu’une liste de vingt causes possibles ; elle évite surtout
          de financer la mauvaise correction sur tout le site.
        </p>

        <h2 id="preuves">
          4. Comment lire les preuves sans leur faire dire plus qu’elles ne
          disent
        </h2>
        <p>
          Le premier écran à utiliser est l’outil d’inspection d’URL. Google
          précise qu’il montre la dernière version connue dans son index et
          permet séparément de tester la version actuellement en ligne. Une
          correction visible aujourd’hui sur votre site peut donc ne pas encore
          être celle enregistrée. La mention « Cette URL est sur Google »
          signifie qu’elle peut apparaître ; elle ne garantit pas qu’elle sera
          affichée pour votre recherche. Ces limites figurent dans l’{" "}
          <a
            href="https://support.google.com/webmasters/answer/9012289?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide officielle sur l’inspection d’URL
          </a>
          .
        </p>
        <h3>La commande site: est un indice, pas un verdict</h3>
        <p>
          Taper <code>site:votredomaine.fr</code> peut fournir un premier
          repère, mais Google indique que cette recherche ne renvoie pas
          nécessairement toutes les adresses indexées. Une page peut être dans
          l’index sans apparaître dans ce résultat. Pour une page décisive,
          utilisez l’inspection d’URL et gardez la{" "}
          <a
            href="https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            limite officielle de l’opérateur site:
          </a>{" "}
          dans votre compte rendu.
        </p>
        <h3>Un sitemap aide Google ; il ne donne aucune garantie</h3>
        <p>
          Un sitemap est un fichier qui liste les adresses que le site souhaite
          faire connaître. Il est utile lorsqu’une page possède peu de liens ou
          qu’un grand nombre d’adresses change. Google le décrit toutefois comme
          une aide à la découverte, sans garantie d’exploration ni d’indexation.
          Vérifier sa présence est donc une action possible, mais pas la preuve
          que Google connaît déjà la page. Consultez la{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            présentation officielle des sitemaps
          </a>
          .
        </p>
        <h3>Aucune donnée visible ne veut pas toujours dire zéro</h3>
        <p>
          Dans Performances, filtrez d’abord la page et la requête. Recopiez la
          période et les éventuels filtres de pays ou d’appareil. Google
          prévient que certaines recherches sont anonymisées et peuvent être
          absentes des lignes du tableau. Écrivez donc « aucune donnée visible »
          lorsque rien n’apparaît ; n’inventez pas un zéro certain. L’{" "}
          <a
            href="https://support.google.com/webmasters/answer/17011259?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            aide sur les dimensions et regroupements de Search Console
          </a>{" "}
          détaille cette limite.
        </p>
        <h3>Les demandes se mesurent dans un autre outil</h3>
        <p>
          Search Console compte les impressions et les clics selon ses propres
          règles. Votre outil de mesure, votre téléphone et votre logiciel
          commercial comptent les formulaires, appels et ventes. Deux demandes
          observées pendant le même mois ne peuvent pas être divisées par
          vingt-neuf clics Search Console sans preuve qu’elles viennent du même
          parcours. Commencez par l’attribution ; analysez ensuite la page et le
          traitement commercial. Le guide sur les{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">
            visites qui ne deviennent pas des demandes
          </Link>{" "}
          prend le relais une fois ce comptage fiabilisé.
        </p>

        <h2 id="exemple">
          5. Exemple illustratif fictif : BatiClair 73 ne possède pas un seul
          problème Google
        </h2>
        <InfoBox variant="blue" title="Exemple entièrement fictif">
          BatiClair 73 est une entreprise imaginaire de rénovation en Savoie. Le
          domaine .example, les pages, les dates et toutes les valeurs sont
          inventés pour expliquer la méthode. Ils ne représentent ni un client,
          ni une moyenne, ni un objectif de performance.
        </InfoBox>
        <p>
          La gérante commence par dire : « mon site n’apparaît pas ». Quatre
          fiches URL–recherche révèlent pourtant quatre situations différentes.
          Elle peut alors choisir quatre actions limitées au lieu de commander
          une refonte générale.
        </p>
        <GuideTable
          caption="Quatre diagnostics fictifs pour un même site"
          headers={["Page et recherche", "Preuve recopiée", "Décision"]}
          rows={[
            [
              "Accueil + « BatiClair 73 »",
              "URL indexée ; 112 impressions et 29 clics visibles sur 28 jours ; 2 demandes observées ailleurs, attribution non prouvée",
              "La page apparaît sur la marque. Le taux de clics fictif (CTR) vaut 29 ÷ 112 × 100 = 25,9 %. Aucun taux clic-demande n’est calculable.",
            ],
            [
              "Isolation extérieure + recherche métier locale",
              "Exploration réussie avec une réponse normale du serveur (code HTTP 200) ; la page se déclare comme adresse principale, mais Google choisit fictivement l’accueil ; page non indexée séparément",
              "Examiner le doublon, le contenu et l’adresse principale déclarée et choisie par Google — dite canonique — avant de parler de position ou de clics.",
            ],
            [
              "Rénovation énergétique + recherche Savoie",
              "URL indexée ; 54 impressions et 1 clic visibles sur 28 jours ; aucune demande attribuable",
              "Le CTR fictif vaut 1 ÷ 54 × 100 = 1,9 %. Examiner le résultat affiché et la correspondance à la recherche, sans conclure sur la conversion avec un clic.",
            ],
            [
              "Aides rénovation + recherche Chambéry",
              "Adresse non reconnue dans l’inspection ; aucune donnée de performance visible",
              "Vérifier les liens internes et le sitemap, puis fixer une date de recontrôle sans promettre l’indexation.",
            ],
          ]}
        />
        <p>
          Les taux de 25,9 % et 1,9 % décrivent uniquement les lignes fictives
          dont les impressions et les clics partagent les mêmes filtres. Ils ne
          disent pas quel taux votre entreprise devrait atteindre. Les deux
          demandes de la première ligne restent séparées : leur existence est
          connue, leur origine ne l’est pas.
        </p>
        <p>
          BatiClair ne refait donc pas tout son site. Elle fait examiner
          l’adresse principale de la page isolation, relie mieux la page sur les
          aides, observe le résultat affiché pour la rénovation et organise le
          suivi des demandes. Si ces contrôles invalident une hypothèse, elle
          revient à la première preuve réellement manquante.
        </p>

        <h2 id="decisions">
          6. À la fin, décidez de corriger, mesurer, attendre ou suspendre une
          refonte
        </h2>
        <p>
          Un bon diagnostic ne produit pas automatiquement un devis. Il peut
          conclure qu’une correction interne suffit, qu’une nouvelle mesure est
          nécessaire ou qu’il faut simplement recontrôler plus tard. Utilisez la
          première ligne non fermée pour choisir l’action proportionnée.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Corriger un obstacle observé",
              "Réponse serveur, redirection, instruction noindex demandant à Google de ne pas indexer la page ou adresse principale incohérente : nommez la correction, le responsable et son test.",
            ],
            [
              "Mesurer avant d’accuser la page",
              "Les clics existent, mais l’origine des appels ou formulaires reste inconnue. Réparez le comptage et l’attribution avant de conclure sur la conversion.",
            ],
            [
              "Attendre avec une date",
              "La page vient d’être publiée, aucun blocage n’est observé et la demande d’exploration a été faite une fois. Fixez un recontrôle plutôt que répéter l’action chaque jour.",
            ],
            [
              "Reporter une refonte générale",
              "Le problème est limité à une page ou à une configuration ciblée. Ne remplacez pas tout le site sans comparer le bénéfice attendu, le coût et le risque de migration.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900 sm:p-6"
            >
              <p className="mb-2 text-lg font-bold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Si vous demandez une nouvelle exploration, Google indique que le
          traitement peut prendre de quelques jours à quelques semaines, sans
          garantie d’inclusion, et que répéter la demande n’accélère pas le
          processus. Cette information vient de la page officielle{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            demander une nouvelle exploration
          </a>
          . Elle ne constitue pas une promesse de délai pour votre page.
        </p>

        <h2 id="audit">7. Quand un audit SEO devient-il réellement utile ?</h2>
        <p>
          Une aide extérieure devient proportionnée lorsque plusieurs pages
          importantes échouent au même endroit, que les causes techniques se
          contredisent ou qu’une refonte récente a modifié les adresses. Elle
          est aussi prioritaire si Search Console signale une action manuelle,
          un problème de sécurité ou des erreurs serveur étendues. Dans ces cas,
          le diagnostic réduit déjà le périmètre de la mission.
        </p>
        <GuideTable
          caption="Situations où demander de l’aide ou agir seul"
          headers={["Situation", "Décision raisonnable"]}
          rows={[
            [
              "Plusieurs pages importantes sont inconnues, bloquées ou remplacées par d’autres adresses",
              "Demander un audit ciblé avec liste des URL, preuves et critères de correction.",
            ],
            [
              "Une refonte ou un changement d’adresses précède la disparition",
              "Contrôler redirections, adresses principales, liens et sitemap avant toute nouvelle migration.",
            ],
            [
              "Une seule directive noindex involontaire est confirmée",
              "Faire corriger puis tester ce point ; un audit complet n’est pas automatique.",
            ],
            [
              "La page vient d’être publiée et aucun obstacle n’est observé",
              "Dater le recontrôle avant d’acheter une prestation.",
            ],
            [
              "Des clics existent mais les demandes ne sont pas attribuables",
              "Contrôler la mesure et le traitement commercial, pas l’indexation.",
            ],
          ]}
        />
        <p>
          Si vous achetez un audit, demandez une recommandation qui indique la
          page concernée, la preuve, la correction, le responsable et le test de
          réception. Le guide consacré au{" "}
          <Link href="/guides/audit-seo-que-contient-il">
            contenu d’un audit SEO exploitable
          </Link>{" "}
          vous aide à refuser une liste d’alertes sans décision ni preuve.
        </p>

        <h2 id="limites">
          8. Conservez un diagnostic daté, sans promesse de position
        </h2>
        <p>
          Même lorsque les six étapes sont renseignées, la fiche ne garantit ni
          une position, ni un nombre de clics, ni des clients. Dans sa
          documentation sur le{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            fonctionnement de Google Search
          </a>
          , Google rappelle qu’une page conforme aux exigences essentielles
          n’est pas assurée d’être explorée, indexée ou diffusée. Les résultats
          évoluent et certaines données de Search Console restent limitées.
        </p>
        <p>
          Conservez donc la date, les filtres et la formulation exacte de chaque
          preuve. Écrivez aussi ce qu’elle ne permet pas de conclure. Cette
          habitude vous protège contre les diagnostics trop rapides : « Google
          m’a pénalisé », « il faut mille mots », « le sitemap va tout indexer »
          ou « une refonte réglera forcément le problème ».
        </p>
        <InfoBox
          variant="emerald"
          title="Le résultat utile tient en quatre lignes"
        >
          Une URL et une recherche. La première preuve qui manque. L’action
          suivante avec son responsable. Une date de recontrôle. Si ces quatre
          lignes sont claires, vous pouvez demander une correction comparable —
          ou décider honnêtement de ne rien acheter pour l’instant.
        </InfoBox>

        <GuideInlineCTA
          title="Faire identifier le premier blocage de vos pages importantes"
          description="Envoyez les URL, recherches et diagnostics que vous avez préparés. Quentin Hagnéré examine directement la situation et vous indique si elle relève d’une correction ciblée, d’un audit plus large, d’un problème de mesure ou d’un simple recontrôle. Le délai de première réponse vous est confirmé après réception, sans obligation de commander."
          tags={[
            "Lecture directe",
            "Preuves avant devis",
            "Aucune refonte imposée",
          ]}
          ctaLabel="Présenter mon problème de visibilité"
          ctaHref="/demarrer-un-projet"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
