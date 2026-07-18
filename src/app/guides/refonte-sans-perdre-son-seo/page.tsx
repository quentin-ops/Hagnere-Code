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

const guide = getGuide("refonte-sans-perdre-son-seo");

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
  wordCount: 5048,
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
      "SEO technique",
      "Migrations de sites",
      "React",
      "Next.js",
      "Core Web Vitals",
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
      name: "Refonte sans perdre son SEO",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Est-ce que refaire son site internet fait perdre le référencement Google ?",
    answer:
      "Pas si la refonte est menée avec méthode — et c'est Google lui-même qui documente la procédure. La perte de trafic n'est pas une fatalité de la refonte : c'est le symptôme d'une refonte sans plan de migration. Les trois causes réelles des catastrophes : des pages supprimées sans redirection (leurs signaux accumulés disparaissent), des adresses changées sans redirection une-à-une, et des contenus qui rapportaient du trafic réécrits ou supprimés. À l'inverse, une refonte à adresses conservées est traitée par Google comme un simple changement d'infrastructure — aucune perte attendue —, et une refonte bien redirigée fluctue quelques semaines avant de se stabiliser. Ce guide déroule la méthode complète, étape par étape.",
  },
  {
    question: "Comment refaire son site sans perdre son référencement ?",
    answer:
      "Cinq gestes, tous documentés par Google : inventorier 100 % des adresses existantes AVANT la bascule (crawl + export Search Console) ; rediriger chaque ancienne page vers sa nouvelle équivalente exacte — jamais tout vers l'accueil, que Google traite comme une erreur ; conserver les contenus et balises des pages qui rapportent du trafic ; garder les redirections au moins un an ; et surveiller la Search Console selon un protocole daté (J+1, S+1, M+1, M+3). Un sixième geste contractuel les protège tous : exiger que le plan de redirection figure comme livrable nommé dans le devis de refonte. La méthode complète, avec les seuils d'alerte, est dans ce guide.",
  },
  {
    question: "Une baisse de trafic est-elle normale après une refonte ?",
    answer:
      "Une fluctuation temporaire, oui — une chute durable, non. Google indique qu'un site de taille petite ou moyenne met « quelques semaines » à voir la plupart de ses pages retraitées après un changement d'adresses ; pendant cette fenêtre, des variations de positions sont normales et documentées. Les repères de décision que nous utilisons : une baisse qui reste sous ~15 % pendant les premières semaines relève de la fluctuation attendue ; entre 15 et 30 %, vérifiez le plan de redirection et la Search Console ; au-delà de 30 %, ou si la baisse persiste après un mois, c'est un signal d'audit urgent — le plan d'urgence de ce guide liste les causes par ordre de probabilité.",
  },
  {
    question: "Combien de temps pour retrouver mon trafic après une refonte ?",
    answer:
      "Tout dépend du scénario. Refonte à adresses conservées : pas de perte à retrouver — le trafic ne doit pas bouger. Refonte avec changement d'adresses bien redirigée : quelques semaines de fluctuations (délai officiel Google pour le retraitement), puis stabilisation. Changement de domaine — le pire scénario : la plus grande étude disponible (892 migrations de domaine analysées, Search Engine Journal 2025) mesure une récupération moyenne de 523 jours, les cas les mieux préparés récupérant en 19 à 33 jours… et 17 % ne retrouvant jamais leur niveau. C'est pourquoi la règle d'or de Google est de ne changer qu'une chose à la fois — et pourquoi ce guide déconseille de cumuler refonte et changement de domaine.",
  },
  {
    question: "Qu'est-ce qu'une redirection 301 et pourquoi c'est si important ?",
    answer:
      "Une redirection 301 est un panneau « déménagé définitivement » : quand un visiteur ou Google demande l'ancienne adresse d'une page, le serveur l'envoie automatiquement vers la nouvelle. C'est LE mécanisme qui transfère à la nouvelle page les signaux accumulés par l'ancienne — liens entrants, historique, confiance. Deux faits officiels à connaître : depuis 2016, Google confirme que les redirections permanentes ne font perdre aucun PageRank (le mythe du « jus perdu » est mort), et Google demande de les conserver au moins un an. La condition : rediriger page par page vers l'équivalent exact — une redirection vers une page sans rapport est requalifiée en erreur par Google.",
  },
  {
    question: "Faut-il garder exactement les mêmes URLs ?",
    answer:
      "Si vous le pouvez, oui — c'est l'assurance-vie de votre référencement. Une refonte à adresses identiques (même les plus profondes) est traitée par Google comme un simple changement de moteur : rien à déclarer, aucune perte attendue, même si tout le design et la technologie changent en dessous. C'est d'ailleurs notre méthode par défaut lors d'une migration WordPress vers Next.js : conserver les slugs (la partie de l'adresse propre à chaque page) à l'identique. Ne changez une adresse que si le gain est réel (structure illogique, adresses générées ou dupliquées) — chaque URL modifiée exige une redirection et un retraitement par Google : un changement d'arborescence « pour faire propre » est un risque pris pour rien.",
  },
  {
    question: "Peut-on changer de CMS (WordPress, Wix, Shopify) sans perdre son SEO ?",
    answer:
      "Oui — le CMS (le logiciel qui fait tourner votre site : WordPress, Wix, Shopify…) n'est pas ce que Google classe : Google classe des pages, à des adresses, avec des contenus. Changer de plateforme sans perte repose sur trois conservations : les adresses (idéalement identiques ; sinon, redirections une-à-une), les contenus et balises des pages qui rapportent du trafic, et l'accessibilité technique (pas de blocage robots.txt ou noindex oublié en production — l'erreur classique du jour J). Cas particulier des plateformes fermées type Wix : l'export est limité, le contenu se migre souvent à la main — prévoyez-le au devis. Et bien menée, la migration peut même AMÉLIORER le référencement, via la vitesse : c'est le cas WordPress → Next.js détaillé dans ce guide.",
  },
  {
    question: "Puis-je changer de nom de domaine pendant la refonte ?",
    answer:
      "Vous pouvez — mais ne le faites pas en même temps. La consigne officielle de Google est explicite : « planifiez vos changements l'un après l'autre, pas tout en même temps ». Le changement de domaine est le scénario le plus risqué (récupération moyenne de 523 jours sur 892 cas étudiés) et il exige une procédure propre : redirections 301 en place, outil « Changement d'adresse » de la Search Console — réservé à ce seul cas —, et transfert des signaux par Google pendant 180 jours. Faites la refonte d'abord, stabilisez le trafic, puis changez de domaine six mois plus tard si le changement se justifie vraiment — ou l'inverse. Jamais les deux le même mois.",
  },
  {
    question: "Faut-il prévenir Google quand on refait son site ?",
    answer:
      "Cela dépend du scénario — et l'erreur est fréquente dans les deux sens. Refonte à adresses conservées : rien à déclarer, aucun outil à activer — Google découvre les nouvelles pages en recrawlant naturellement. Refonte avec changement d'adresses sur le même domaine : pas d'outil non plus, mais deux gestes indispensables — les redirections 301 et la soumission du nouveau sitemap (le plan du site lisible par Google) dans la Search Console. Changement de domaine uniquement : l'outil « Changement d'adresse » de la Search Console, en plus des redirections. Utiliser cet outil pour une simple refonte est une erreur ; ne pas l'utiliser pour un changement de domaine en est une autre.",
  },
  {
    question: "Pourquoi mon site a disparu de Google après la refonte ?",
    answer:
      "Dans l'ordre des causes constatées : un noindex oublié — l'instruction « ne pas indexer » posée sur le site de test a été mise en production avec lui ; un robots.txt qui bloque tout (même origine) ; des redirections absentes ou cassées — les anciennes adresses renvoient des erreurs 404 ; tout redirigé vers la page d'accueil — requalifié en erreur par Google ; ou des contenus supprimés. La bonne nouvelle : les deux premières causes, les plus fréquentes, se corrigent en une heure et le trafic revient en quelques jours à quelques semaines. Vérifiez-les vous-même : ouvrez votresite.fr/robots.txt, et cherchez « noindex » dans le code source de votre page d'accueil. Le plan d'urgence complet est en fin de guide.",
  },
  {
    question: "Que faire si j'ai déjà perdu du trafic après ma refonte ?",
    answer:
      "Agir vite — la plupart des pertes sont réversibles si la cause est corrigée dans les semaines qui suivent. Le diagnostic, dans l'ordre : 1) noindex ou robots.txt bloquant restés en production (vérifiable en une minute) ; 2) redirections absentes — testez à la main 10 anciennes adresses importantes ; 3) redirections vers la page d'accueil ou des pages sans rapport (requalifiées en erreurs par Google) ; 4) contenus performants supprimés ou vidés ; 5) chute de vitesse. La Search Console vous montre tout : pages en erreur, couverture d'indexation, requêtes perdues. Et si les redirections manquaient : posez-les maintenant — Google recommande de les garder au moins un an précisément parce qu'elles restent utiles des mois après la bascule.",
  },
  {
    question: "Une refonte peut-elle améliorer mon SEO ?",
    answer:
      "Oui — c'est même l'issue normale d'une refonte bien menée, pour une raison documentée par Google : les Core Web Vitals (les mesures officielles de vitesse et de stabilité) « sont utilisés par nos systèmes de classement ». Un WordPress alourdi par des années d'extensions traîne une dette de performance qu'une refonte en code moderne convertit en gain mesurable : la migration Personio (WordPress → Next.js, chiffres publiés par Vercel, l'éditeur de la plateforme d'arrivée) a amélioré la stabilité visuelle de plus de 90 % et la vitesse mobile de 29 %. L'impact business est chiffré par Google lui-même : 1 seconde de chargement gagnée = +13 % de conversions chez Renault. Nuance d'honnêteté : la pertinence du contenu prime toujours — la vitesse départage à contenu comparable, elle ne remplace pas le fond.",
  },
  {
    question: "Combien coûte une refonte de site internet ?",
    answer:
      "Les fourchettes complètes sont dans notre guide dédié au prix d'une refonte : 1 500 à 8 000 € pour un site vitrine de TPE, 3 000 à 15 000 € pour un site PME, davantage en e-commerce — et surtout, le poste que les devis oublient : la migration SEO (inventaire des adresses, plan de redirection, contrôles post-bascule), facturée 1 500 à 10 000 € selon la taille du site. Chez Hagnéré Code, la refonte vers un socle moderne suit notre grille publique — 6 900 €, 14 900 € ou 22 000 € et plus — avec le plan de migration SEO inclus et une note Google Lighthouse de 95+ garantie par contrat. Méfiez-vous d'un devis de refonte sans ligne « migration SEO » : l'économie apparente peut coûter votre trafic.",
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
          { label: "Refonte sans perdre son SEO" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les règles officielles de Google citées au mot près, les mythes qui circulent démontés à la source, le plan de redirection expliqué, un protocole de surveillance daté avec seuils d'alerte, le cas WordPress → Next.js chiffré — et le plan d'urgence si le trafic a déjà chuté. Le guide que nous aurions voulu que nos clients lisent avant leur première refonte."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Redirection permanente : zéro perte SEO (officiel)", description: "", color: "violet" },
          { number: "02", title: "Redirections à garder ≥ 1 an", description: "", color: "blue" },
          { number: "03", title: "URLs conservées = risque quasi nul", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte de site" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/cout-maintenance-site-internet", label: "Coût de la maintenance" },
          { href: "/guides/combien-de-temps-pour-creer-un-site", label: "Combien de temps pour créer un site ?" },
          { href: "/services/sites-vitrines", label: "Sites vitrines" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Refonte et SEO : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          « Si je refais mon site, est-ce que je vais disparaître de
          Google ? » — la question qui retarde des centaines de
          refontes nécessaires. La réponse honnête :{" "}
          <strong>la perte de trafic n&apos;est pas une fatalité de la
          refonte, c&apos;est le symptôme d&apos;une refonte sans
          méthode</strong>. Et la méthode, Google la documente —
          personne, curieusement, ne la cite. Nous, si.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "de-quoi-parle-t-on", label: "2. Les 3 scénarios officiels — et leurs 3 niveaux de risque" },
            { id: "mythes", label: "3. Les mythes qui circulent, démontés à la source" },
            { id: "ce-que-dit-google", label: "4. Ce que Google dit officiellement (au mot près)" },
            { id: "avant", label: "5. Avant la refonte : figer la photographie de votre SEO" },
            { id: "redirections", label: "6. Le plan de redirection : la pièce maîtresse" },
            { id: "pendant", label: "7. Pendant le chantier : les pièges du site de test" },
            { id: "jour-j", label: "8. Le jour J : la bascule, et le plan de retour arrière" },
            { id: "apres", label: "9. Après : le protocole de surveillance daté (J+1 → M+3)" },
            { id: "wordpress-vers-nextjs", label: "10. Le cas signature : sortir de WordPress vers Next.js" },
            { id: "urgence", label: "11. Plan d'urgence : « j'ai déjà perdu mon trafic »" },
            { id: "contrat", label: "12. Le volet contractuel : ce que votre devis doit garantir" },
            { id: "combien", label: "13. Combien coûte une refonte qui protège son SEO" },
            { id: "methode", label: "14. Méthode : la refonte SEO-safe en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          Refondre un site sans perdre son référencement repose sur{" "}
          <strong>trois conservations</strong> : les adresses de pages
          (identiques si possible, sinon <strong>redirigées une à une
          — jamais toutes vers l&apos;accueil</strong>), les contenus
          qui rapportent du trafic, et l&apos;accessibilité technique
          (pas de blocage oublié en production). Les faits officiels
          qui cadrent tout : les redirections permanentes{" "}
          <strong>ne font perdre aucun PageRank</strong> — la note de
          popularité que Google attribue à vos pages — (Google,
          2016), elles se conservent <strong>au moins un an</strong>,
          un site moyen est retraité en <strong>« quelques
          semaines »</strong>, et la consigne d&apos;or est de{" "}
          <strong>ne changer qu&apos;une chose à la fois</strong> —
          jamais refonte + changement de domaine le même mois. Bien
          menée, une refonte ne se contente pas de préserver : elle
          peut <strong>améliorer</strong> le référencement, par la
          vitesse — les Core Web Vitals sont un signal de classement
          officiel.
        </p>
        <GuideTable
          headers={["Votre scénario", "Niveau de risque", "Ce que Google demande"]}
          rows={[
            ["Refonte graphique/technique, adresses conservées", "Quasi nul", "Rien à déclarer — simple changement d'infrastructure pour Google"],
            ["Refonte avec adresses modifiées (même domaine)", "Moyen — tout repose sur le plan de redirection", "301 une-à-une + nouveau sitemap dans la Search Console — PAS l'outil Changement d'adresse"],
            ["Changement de plateforme (WordPress, Wix → code moderne)", "Moyen — plus la migration des contenus", "Mêmes règles + vigilance noindex/robots.txt du site de test (section 7)"],
            ["Changement de domaine", "Maximal — 523 jours de récupération moyenne", "301 + outil Changement d'adresse (180 jours de transfert) — et jamais en même temps qu'une refonte"],
          ]}
        />

        <InfoBox variant="blue" title="Les 14 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Refonte</strong> : reconstruire son site — design, technologie ou structure — en gardant (ou pas) ses adresses.</li>
            <li><strong>Redirection 301</strong> : le panneau « déménagé définitivement » qui envoie visiteurs et Google de l&apos;ancienne adresse vers la nouvelle.</li>
            <li><strong>Mapping d&apos;URLs</strong> : le tableau de correspondance « ancienne adresse → nouvelle adresse », page par page.</li>
            <li><strong>Search Console</strong> : le tableau de bord gratuit de Google qui montre vos pages indexées, vos requêtes et vos erreurs.</li>
            <li><strong>Sitemap</strong> : le plan du site lisible par Google — la liste de toutes vos pages, à resoumettre après la bascule.</li>
            <li><strong>Crawl</strong> : le passage d&apos;un robot qui parcourt toutes les pages d&apos;un site — celui de Google, ou le vôtre pour l&apos;inventaire.</li>
            <li><strong>Préproduction (staging)</strong> : la copie de travail du nouveau site, cachée du public — et à cacher de Google aussi.</li>
            <li><strong>Noindex</strong> : l&apos;instruction « ne pas mettre cette page dans Google » — vitale sur le site de test, catastrophique si elle part en production.</li>
            <li><strong>Soft 404</strong> : une page que Google requalifie en erreur — le sort des redirections « tout vers l&apos;accueil ».</li>
            <li><strong>Core Web Vitals</strong> : les mesures officielles de vitesse et de stabilité de Google — le « contrôle technique » du site, utilisé par le classement.</li>
            <li><strong>Slug</strong> : la partie de l&apos;adresse propre à chaque page (/guides/refonte-sans-perdre-son-seo) — à conserver en priorité.</li>
            <li><strong>Retour arrière (rollback)</strong> : la procédure pour remettre l&apos;ancien site en ligne si la bascule tourne mal — à prévoir AVANT.</li>
            <li><strong>PageRank</strong> : la note de popularité que Google attribue à chaque page grâce aux liens qui pointent vers elle — le capital que les redirections doivent transférer.</li>
            <li><strong>Robots.txt</strong> : le petit fichier public de votre site (votresite.fr/robots.txt) qui dit aux robots ce qu&apos;ils ont le droit de visiter — une ligne « Disallow: / » oubliée y interdit tout Google.</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Les 3 scénarios officiels — et leurs 3 niveaux de risque</h2>
        <p>
          Première clarification, car la confusion règne jusque chez
          les prestataires : Google distingue officiellement{" "}
          <strong>trois situations</strong>, aux procédures
          différentes. <strong>Un : la refonte à adresses
          conservées</strong> — nouveau design, nouvelle technologie,
          mêmes URLs. Pour Google, c&apos;est un changement
          d&apos;infrastructure : rien à déclarer, aucune perte
          attendue si contenus et balises (les étiquettes invisibles —
          titre, description — que Google lit sur chaque page) restent
          servis à l&apos;identique.
        </p>
        <p>
          <strong>Deux : la refonte avec adresses
          modifiées, sur le même domaine</strong> — tout repose alors
          sur le plan de redirection (section 6) et le nouveau
          sitemap ; l&apos;outil « Changement d&apos;adresse » de la
          Search Console ne doit PAS être utilisé.{" "}
          <strong>Trois : le changement de domaine</strong> — le seul
          cas qui exige cet outil, et le plus risqué de tous.
        </p>
        <p>
          Vous
          avez compté quatre lignes dans le tableau de la section 1 ?
          La ligne « changement de plateforme » n&apos;est pas un
          quatrième scénario Google : c&apos;est le cas pratique le
          plus fréquent, et il obéit aux règles du scénario un ou du
          scénario deux — selon que vos adresses changent ou non.
        </p>
        <p>
          Fil rouge de ce guide :{" "}
          <strong>Élodie, courtière en assurance à
          Annecy</strong> — un WordPress de 2019, 60 % de ses contacts
          arrivent par Google, et une peur bleue de tout perdre en
          refondant. Dans sa tête, changer de plateforme, c&apos;est
          tout changer — donc forcément le scénario le plus risqué.
          En réalité, son nom de domaine ne bouge pas, et ses
          adresses de pages peuvent être conservées à
          l&apos;identique sur le nouveau socle (la méthode de la
          section 10) : <strong>scénario un, risque quasi nul</strong>.
          Si quelques adresses devaient malgré tout changer, elle
          passerait simplement au scénario deux — celui du plan de
          redirection. Cette distinction va lui épargner beaucoup
          d&apos;angoisse et quelques erreurs.
        </p>

        <h2 id="mythes">3. Les mythes qui circulent, démontés à la source</h2>
        <p>
          Les pages concurrentes sur cette requête répètent des
          chiffres que personne ne source. Confrontons-les aux textes
          officiels — c&apos;est rapide et c&apos;est définitif.{" "}
          <strong>« Une 301 ne transfère que 90 % du jus SEO »</strong> :
          faux depuis 2016 — Gary Illyes (Google) a confirmé que les
          redirections permanentes ne font plus perdre de PageRank ;
          la doc officielle actuelle l&apos;écrit noir sur blanc.{" "}
          <strong>« Il existe une quarantaine SEO de 30 jours »</strong> :
          cette notion n&apos;existe dans aucun texte de Google — le
          délai officiel est « quelques semaines » de retraitement
          pour un site moyen, sans pénalité d&apos;aucune sorte.{" "}
          <strong>« Une refonte fait perdre 5-7 % / 30-50 % / 50-80 %
          du trafic »</strong> : trois fourchettes recopiées de blog
          en blog, aucune étude primaire derrière — Google ne publie
          aucun chiffre de perte moyenne, et la seule vraie étude
          (Search Engine Journal, 892 cas) porte sur les{" "}
          <em>changements de domaine</em>, le pire scénario, pas sur
          les refontes ordinaires. Retenez la version honnête :{" "}
          <strong>bien exécutée, une refonte fluctue quelques
          semaines ; ratée, elle peut ne jamais récupérer</strong>{" "}
          (17 % des cas de l&apos;étude) — et tout ce guide sert à
          vous placer dans la première catégorie.
        </p>

        <h2 id="ce-que-dit-google">4. Ce que Google dit officiellement (au mot près)</h2>
        <GuideTable
          headers={["La règle officielle", "La source", "Ce que ça change pour vous"]}
          rows={[
            ["Un site petit/moyen est retraité en « quelques semaines »", "Doc « Site moves », Google Search Central", "Les fluctuations des premières semaines sont normales — pas de panique prématurée"],
            ["Redirections à conserver « au moins 1 an »", "Doc « Site moves »", "Ne supprimez jamais les 301 au bout de 3 mois — clause à mettre au contrat de maintenance"],
            ["« Les redirections permanentes ne causent aucune perte de PageRank »", "Doc « Site moves » + Gary Illyes (2016)", "Le mythe du « jus perdu » ne doit plus vous faire renoncer à une refonte utile"],
            ["Chaînes de redirections : 3 maxi idéalement, 10 sauts suivis au plus", "Doc « Site moves »", "Rediriger directement vers l'adresse finale — pas ancienne → intermédiaire → nouvelle"],
            ["« Planifiez vos changements l'un après l'autre, pas tout en même temps »", "Doc « Site moves »", "Jamais refonte + changement de domaine simultanés — la règle d'or"],
            ["Tout rediriger vers l'accueil = requalifié en erreur (soft 404)", "John Mueller (Google)", "La redirection « paresseuse » détruit les signaux qu'elle prétend sauver"],
            ["« Les Core Web Vitals sont utilisés par nos systèmes de classement »", "Doc « Page experience »", "La vitesse gagnée par une refonte moderne est un gain SEO réel — pas du marketing"],
          ]}
        />
        <p>
          Chaque ligne de ce tableau est vérifiable dans les sources
          en fin de guide. Si votre prestataire affirme le contraire
          de l&apos;une d&apos;elles, montrez-lui la doc — c&apos;est
          aussi à ça que sert ce guide.
        </p>

        <h2 id="avant">5. Avant la refonte : figer la photographie de votre SEO</h2>
        <p>
          L&apos;erreur de calendrier la plus coûteuse : commencer la
          checklist SEO au moment du lancement. Tout se joue{" "}
          <strong>avant</strong>, en trois inventaires.{" "}
          <strong>L&apos;export Search Console</strong>, d&apos;abord,
          et c&apos;est urgent dans tous les cas : Google ne conserve
          que <strong>16 mois glissants</strong> de données — exportez
          maintenant la liste des pages et requêtes qui vous rapportent
          du trafic, c&apos;est la photographie de référence qui
          permettra de mesurer la refonte (et de prouver une
          régression, le cas échéant). <strong>Le crawl de
          référence</strong>, ensuite : un outil comme Screaming Frog
          (gratuit jusqu&apos;à 500 adresses, 245 €/an au-delà)
          parcourt votre site et dresse la liste exhaustive de ses
          pages — la base du mapping de la section 6, qui inclut les
          pages oubliées que plus personne ne regarde mais que Google
          connaît. <strong>L&apos;inventaire des pages qui
          comptent</strong>, enfin : croiser les deux listes pour
          identifier les 20 % de pages qui font 80 % du trafic —
          celles dont contenus, titres et balises devront être{" "}
          <strong>conservés, pas « améliorés » au passage</strong>.
          C&apos;est aussi le moment de trier : les pages sans trafic
          ni liens peuvent disparaître proprement (une vraie erreur
          404 ne pénalise pas le reste du site) plutôt que
          d&apos;être redirigées sans logique.
        </p>
        <p>
          Une image pour fixer l&apos;esprit de cette étape :
          l&apos;état des lieux avant travaux. Personne ne rénove un
          local commercial sans photographier l&apos;existant — votre
          référencement mérite la même précaution, car c&apos;est un
          actif qui s&apos;est construit sur des années. Complétez
          l&apos;inventaire par <strong>la liste de vos liens
          entrants</strong> (les sites qui pointent vers vous — votre
          capital de notoriété) : après la bascule, les plus
          importants d&apos;entre eux méritent un e-mail pour mettre à
          jour leur lien vers la nouvelle adresse plutôt que de passer
          éternellement par une redirection.
        </p>

        <h2 id="redirections">6. Le plan de redirection : la pièce maîtresse</h2>
        <p>
          Si vos adresses changent, ce document est votre
          assurance-vie : <strong>le tableau de correspondance
          « ancienne adresse → nouvelle adresse », page par page</strong> —
          Google impose le principe dans sa documentation de
          migration. Les règles d&apos;exécution :{" "}
          <strong>une redirection 301 par page, vers
          l&apos;équivalent exact</strong> — le piège n°1 des refontes
          low-cost est de tout rediriger vers la page
          d&apos;accueil, ce que Google requalifie en soft 404 :
          « nous les traitons essentiellement comme des 404, il
          n&apos;y a aucun bénéfice » (John Mueller). S&apos;il
          n&apos;existe pas d&apos;équivalent, un vrai 404 vaut mieux
          qu&apos;une fausse redirection. <strong>Pas de
          chaînes</strong> : redirigez directement vers l&apos;adresse
          finale (Google suit 10 sauts au maximum et en recommande 3
          au plus). <strong>Redirigez aussi les ressources</strong> —
          images et PDF qui reçoivent des liens. Et surtout :{" "}
          <strong>exigez ce tableau comme livrable nommé de votre
          devis de refonte</strong> — un prestataire qui ne le prévoit
          pas ne protège pas votre trafic, quel que soit son discours.
        </p>
        <p>
          Deux compléments que les redirections ne remplacent pas.{" "}
          <strong>Les liens internes du nouveau site</strong> — menu,
          pied de page, maillage entre pages — doivent pointer
          directement vers les nouvelles adresses : un site neuf dont
          les liens passent encore par les anciennes URLs fait
          transiter chaque visite (et chaque passage de Google) par
          une redirection évitable ; Google le recommande
          explicitement dans sa documentation de migration.{" "}
          <strong>Cas e-commerce</strong>, trois règles propres aux
          boutiques : un produit définitivement supprimé (fin de
          série) se redirige vers sa catégorie parente la plus
          proche — jamais vers l&apos;accueil ; une rupture temporaire,
          elle, garde sa page en ligne, disponibilité à jour ; les pages de
          catégories et de filtres qui reçoivent du trafic figurent
          au mapping au même titre que les fiches produits (votre
          export Search Console vous dit lesquelles) ; et les données
          structurées (prix, avis, disponibilité) qui alimentent vos
          résultats enrichis doivent être reconduites sur le nouveau
          socle — leur disparition ne fait pas perdre le classement,
          mais fait perdre les étoiles dans Google, donc des clics.
        </p>

        <GuideInlineCTA
          title="Une refonte en vue, et un trafic Google à protéger ?"
          description="Décrivez votre site en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, avec un avis franc sur le niveau de risque de VOTRE scénario. Le Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si le projet se lance) inclut l'audit pré-refonte : export Search Console, crawl de référence et stratégie de migration."
          tags={["Réponse sous 24 h ouvrées", "Plan de redirection livré au contrat", "Note vitesse Google (Lighthouse) ≥ 95/100, au contrat"]}
        />

        <h2 id="pendant">7. Pendant le chantier : les pièges du site de test</h2>
        <p>
          Le nouveau site se construit sur une{" "}
          <strong>préproduction</strong> — une copie de travail cachée
          du public. Deux impératifs symétriques, responsables à eux
          seuls d&apos;une bonne partie des catastrophes.{" "}
          <strong>Pendant le chantier : cacher la préproduction de
          Google</strong> (noindex, ou mieux, accès protégé par mot de
          passe) — sinon Google indexe le site de test et votre futur
          contenu entre en concurrence avec votre site actuel.{" "}
          <strong>Au lancement : penser à retirer ce verrou</strong> —
          le noindex ou le robots.txt bloquant oublié en production
          est LA cause n°1 des « mon site a disparu de Google », et
          elle est entièrement évitable par une recette de
          lancement : vérifier le robots.txt, chercher « noindex »
          dans le code des pages clés, tester une indexation via la
          Search Console. Pendant le chantier toujours :{" "}
          <strong>préservez les contenus qui rapportent</strong> —
          la refonte est une tentation permanente de « réécrire en
          mieux » des pages qui, justement, se classent ; améliorez
          après stabilisation, pas pendant la migration (la consigne
          « une chose à la fois » vaut aussi pour les contenus). Et
          faites auditer le SEO <strong>dès les maquettes</strong> —
          structure de titres, arborescence, maillage — pas la
          veille du lancement, quand tout coûte cher à corriger.
        </p>

        <h2 id="jour-j">8. Le jour J : la bascule, et le plan de retour arrière</h2>
        <p>
          Premier choix de pilotage, avant toute technique :{" "}
          <strong>la date</strong>. Basculez en période creuse pour
          votre activité — jamais dans les semaines qui précèdent vos
          pics (fêtes, soldes, saison haute) : les fluctuations
          normales des premières semaines (section 4) doivent tomber
          sur vos semaines les moins chères, et l&apos;équipe qui a
          fait la bascule doit être disponible les jours suivants.
          La bascule d&apos;un site petit ou moyen se fait ensuite{" "}
          <strong>en une fois</strong> — recommandation officielle
          (la migration section par section est réservée aux très
          gros sites). La séquence : mise en production, activation
          du plan de redirection, <strong>vérification immédiate des
          verrous</strong> (robots.txt, noindex — section 7),
          soumission du <strong>nouveau sitemap</strong> dans la
          Search Console, puis <strong>test manuel d&apos;un
          échantillon d&apos;anciennes adresses</strong> — prenez vos
          20 pages les plus importantes et vérifiez une à une
          qu&apos;elles redirigent au bon endroit ; c&apos;est à la
          portée de n&apos;importe quel dirigeant, et ça détecte
          l&apos;essentiel. Pour un site dépassant quelques centaines
          de pages, l&apos;échantillon manuel ne suffit pas : exigez
          du prestataire un <strong>test automatisé de 100 % du
          mapping</strong> — un crawl « en mode liste » de toutes les
          anciennes adresses, qui vérifie que chacune répond par une
          301 vers la bonne cible, sans chaîne ni erreur (Screaming
          Frog, l&apos;outil de la section 5, le fait en mode
          liste) ; le rapport de ce test est un livrable au même titre
          que le plan de redirection. Ajoutez à la recette{" "}
          <strong>la continuité de mesure</strong> : vérifiez dès la
          première heure que la balise Analytics et le suivi des
          conversions sont présents sur le nouveau site — sans eux,
          le protocole de la section 9 est aveugle, incapable de
          distinguer une chute réelle d&apos;un trou de mesure. Prévoyez enfin ce que presque personne ne
          prévoit : <strong>le plan de retour arrière</strong> —
          l&apos;ancien site conservé, restaurable pendant au moins
          les 4 à 8 semaines de la fenêtre de correction
          (section 12) — et réservé aux incidents majeurs constatés à
          J+1 (site inaccessible, verrou d&apos;indexation impossible
          à corriger à chaud) ; les anomalies de redirection, elles,
          se corrigent sans rebasculer. On ne s&apos;en sert presque
          jamais ; le jour où on en a besoin, il vaut tout
          l&apos;or du monde. Un détail d&apos;anticipation
          documenté : Google recrawle plus intensément juste après
          une bascule — vérifiez que votre hébergement encaissera ce
          surcroît de passage.
        </p>
        <p>
          Trois pièges techniques du jour J, absents de toutes les
          checklists françaises que nous avons analysées :{" "}
          <strong>le délai de propagation DNS</strong> — si le
          changement touche l&apos;hébergement, abaissez le TTL (la
          durée de mise en cache de l&apos;adresse du serveur)
          plusieurs jours avant, pour que la bascule soit vue vite et
          partout ; <strong>les redirections des ressources</strong> —
          images et documents PDF liés depuis d&apos;autres sites
          doivent être redirigés comme les pages ; et{" "}
          <strong>les adresses techniques</strong> (flux, sitemap
          ancien) qui continuent de recevoir des visites de robots
          longtemps après. Rien d&apos;insurmontable — à condition
          d&apos;y penser avant 18 h le jour de la bascule.
        </p>

        <h2 id="apres">9. Après : le protocole de surveillance daté (J+1 → M+3)</h2>
        <GuideTable
          headers={["Échéance", "Quoi vérifier", "Seuil d'alerte"]}
          rows={[
            ["J+1", "Robots.txt, noindex, sitemap soumis, échantillon de 301 testé à la main", "Toute ancienne adresse importante en erreur = correction immédiate"],
            ["S+1", "Search Console : erreurs de couverture, soft 404, pages « explorées, non indexées »", "Une vague de soft 404 = redirections non pertinentes à revoir"],
            ["M+1", "Courbe de clics/impressions vs l'export de référence (section 5), Core Web Vitals", "Baisse > 15-30 % persistante = audit du plan de redirection ; > 30 % = urgence (section 11)"],
            ["M+3", "Positions sur vos requêtes clés vs la photographie de référence, liens entrants (section 5) à faire mettre à jour", "Stabilisation attendue — sinon, diagnostic complet ; les 301 restent en place ≥ 1 an"],
          ]}
        />
        <p>
          Ce protocole est la partie que les checklists concurrentes
          survolent — « surveillez la Search Console » sans dire
          quoi, quand, ni à partir de quel seuil réagir. Les
          fluctuations des premières semaines sont normales et
          documentées (section 4) : le protocole sert précisément à
          distinguer le retraitement attendu du vrai problème, et à
          réagir vite dans le second cas — la précocité de la
          correction fait toute la différence (section 11). Élodie,
          notre courtière : sa refonte à adresses conservées n&apos;a
          pas bougé d&apos;un clic en S+1 ; la version enrichie de ses
          pages « assurance emprunteur », publiée un mois APRÈS
          stabilisation — une chose à la fois —, lui a gagné trois
          positions.
        </p>

        <InfoBox variant="amber" title="En clair : ce que vous pouvez vérifier vous-même, sans être technicien">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Les redirections</strong> : prenez 10 anciennes adresses importantes (vos pages services, vos meilleurs articles) et tapez-les dans le navigateur — chacune doit atterrir sur sa nouvelle équivalente, pas sur l&apos;accueil ni sur une erreur.</li>
            <li><strong>Le verrou d&apos;indexation</strong> : ouvrez votresite.fr/robots.txt (aucun « Disallow: / ») et vérifiez la page d&apos;accueil — clic droit → « Afficher le code source de la page », puis Ctrl + F (Cmd + F sur Mac) et tapez « noindex » : aucun résultat = tout va bien.</li>
            <li><strong>La courbe Search Console</strong> : menu « Performances », clics et impressions comparés semaine par semaine à votre export de référence — c&apos;est votre tableau de bord, et il doit rester sur VOTRE compte.</li>
            <li><strong>La vitesse</strong> : testez la nouvelle page d&apos;accueil sur PageSpeed Insights — gratuitement, comme le fera Google. Les seuils officiels à viser, mesurés sur les visites réelles : affichage principal (LCP) sous 2,5 s, réactivité (INP) sous 200 ms, stabilité visuelle (CLS) sous 0,1. La même page affiche aussi la note Lighthouse sur 100 — celle que nous garantissons au contrat.</li>
          </ul>
        </InfoBox>

        <h2 id="wordpress-vers-nextjs">10. Le cas signature : sortir de WordPress vers Next.js</h2>
        <p>
          Le scénario dont personne ne parle sur cette requête, et
          qui est pourtant devenu le cas majoritaire en 2026 :
          quitter WordPress ou un éditeur en ligne pour du code
          moderne (React/Next.js) — le développement assisté par IA
          en a fait baisser le coût, notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">comparatif
          Next.js ou WordPress</Link> détaille pourquoi. Côté SEO, la
          méthode tient en trois principes. <strong>Conserver les
          slugs</strong> : les adresses de pages peuvent rester
          strictement identiques sur le nouveau socle — scénario 1,
          risque quasi nul ; quand certaines changent, le nouveau
          socle gère les redirections proprement, dans un fichier
          unique dont chaque modification reste tracée — facile à
          contrôler, impossible à égarer. <strong>Servir les pages en HTML complet</strong>{" "}
          (rendu côté serveur) : les frameworks modernes bien
          configurés servent à Google des pages complètes — le
          contraire du mythe « le JavaScript est mauvais pour le
          SEO ». <strong>Convertir la dette de vitesse en
          gain</strong> : un WordPress chargé d&apos;extensions
          accumule des années de lest ; la migration Personio
          (WordPress → Next.js, publiée par Vercel — source éditeur,
          à lire comme telle) mesure une stabilité visuelle améliorée
          de plus de 90 % et une vitesse d&apos;affichage mobile
          améliorée de 29 %. Et
          l&apos;impact business de ces gains est documenté par
          Google même : <strong>1 seconde de chargement gagnée =
          +13 % de conversions</strong> (Renault, 10 M de visites) ;
          0,1 seconde = +8,4 % de conversions retail
          (Deloitte × Google). C&apos;est le sens de notre engagement
          contractuel Lighthouse 95+ : une refonte bien menée ne
          « sauve » pas votre SEO — elle le renforce. Dernier
          conseil de méthode pour les gros sites : la migration peut
          être <strong>incrémentale</strong> — le nouveau socle prend
          le relais page par page, sans big bang, exactement la
          logique « une chose à la fois » de Google. C&apos;est le
          chemin exact d&apos;Élodie, notre courtière : son WordPress
          de 2019 reconstruit en Next.js, adresses conservées à la
          lettre — le résultat se lit en section 9.
        </p>

        <h2 id="urgence">11. Plan d&apos;urgence : « j&apos;ai déjà perdu mon trafic »</h2>
        <p>
          Si vous lisez ce guide trop tard, voici le diagnostic dans
          l&apos;ordre de probabilité — et la bonne nouvelle :{" "}
          <strong>traitées vite, la plupart des chutes sont
          réversibles</strong>. <strong>Un : le verrou oublié</strong> —
          ouvrez votresite.fr/robots.txt et cherchez « noindex » dans
          le code source de vos pages clés ; c&apos;est la cause la
          plus fréquente, et elle se corrige en une heure.{" "}
          <strong>Deux : les redirections absentes ou cassées</strong> —
          testez à la main 10 anciennes adresses importantes (votre
          export d&apos;avant-refonte, ou la Search Console, vous les
          donne) : si elles affichent des erreurs, posez les 301
          maintenant — elles restent utiles des mois après la bascule.{" "}
          <strong>Trois : les redirections paresseuses</strong> — tout
          pointe vers l&apos;accueil ou des pages sans rapport :
          refaites le mapping page à page.{" "}
          <strong>Quatre : les contenus supprimés</strong> — comparez
          avec votre photographie de référence et republiez ce qui
          rapportait. <strong>Cinq : l&apos;effondrement de
          vitesse</strong> — testez sur PageSpeed Insights. Dans tous
          les cas, la Search Console est votre tableau de bord :
          pages en erreur, couverture, requêtes perdues. Et si le
          prestataire qui a causé la chute est aux abonnés absents,
          le diagnostic ci-dessus est exactement ce qu&apos;un audit
          professionnel commencera par vérifier.
        </p>

        <h2 id="contrat">12. Le volet contractuel : ce que votre devis doit garantir</h2>
        <p>
          Une refonte « qui préserve le SEO » ne se promet pas,
          elle se contractualise — quatre clauses à exiger, valables
          pour tout prestataire. <strong>Le plan de redirection comme
          livrable nommé</strong> : le tableau de correspondance
          d&apos;URLs figure au devis, vous en recevez copie.{" "}
          <strong>La fenêtre de correction post-lancement</strong> :
          4 à 8 semaines incluses, pendant lesquelles les anomalies
          détectées par le protocole de la section 9 sont corrigées
          sans supplément. <strong>La propriété de vos accès</strong> :
          la Search Console reste sur VOTRE compte Google (le
          prestataire y est invité), comme le domaine et
          l&apos;hébergement — le jour où vous changez de
          prestataire, vos données de référence partent avec vous.{" "}
          <strong>Un engagement de performance mesurable</strong> :
          nous contractualisons une note minimale de 95 sur 100 à
          Google Lighthouse (l&apos;outil public avec lequel Google
          note la performance d&apos;un site) — la vitesse étant un
          signal de classement officiel, cet engagement est aussi un
          engagement SEO. Et une vigilance de
          bon sens : un devis de refonte{" "}
          <strong>sans ligne « migration SEO »</strong> n&apos;est pas
          moins cher — il transfère simplement le risque sur vous
          (notre <Link href="/guides/prix-refonte-site-internet">guide
          du prix d&apos;une refonte</Link> chiffre ce poste à 1 500 à
          10 000 € selon la taille du site).
        </p>

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>0 %</strong> : la perte de PageRank d&apos;une redirection permanente — officiel depuis 2016, le mythe du « jus perdu » est mort.</li>
            <li><strong>≥ 1 an</strong> : la durée officielle de conservation des redirections — à écrire dans le contrat de maintenance.</li>
            <li><strong>« Quelques semaines »</strong> : le délai officiel de retraitement d&apos;un site moyen — les fluctuations de cette fenêtre sont normales.</li>
            <li><strong>523 jours</strong> : la récupération moyenne d&apos;un changement de DOMAINE (892 cas étudiés — 17 % ne récupèrent jamais) — le scénario à ne jamais cumuler avec une refonte.</li>
            <li><strong>+13 %</strong> : les conversions gagnées par seconde de chargement économisée (Renault, mesuré par Google) — une refonte moderne bien menée AMÉLIORE le SEO.</li>
          </ul>
        </InfoBox>

        <h2 id="combien">13. Combien coûte une refonte qui protège son SEO</h2>
        <p>
          Les fourchettes complètes du marché sont dans notre{" "}
          <Link href="/guides/prix-refonte-site-internet">guide du
          prix d&apos;une refonte</Link> ; côté SEO, retenez la
          structure du budget. <strong>Le poste « migration SEO »</strong>{" "}
          (inventaire, mapping, plan de redirection, recette,
          contrôles post-bascule) se facture{" "}
          <strong>1 500 à 10 000 €</strong> selon le volume de pages —
          c&apos;est le poste que les devis « attractifs » retirent
          en premier, et le seul qui protège votre actif.{" "}
          <strong>L&apos;outillage</strong> est marginal : Screaming
          Frog gratuit jusqu&apos;à 500 adresses (245 €/an au-delà),
          Search Console et PageSpeed gratuits. <strong>Chez
          nous</strong> : la refonte vers un socle moderne suit la
          grille publique — 6 900 €, 14 900 € ou 22 000 € et plus
          selon l&apos;ambition — <strong>plan de migration SEO
          inclus</strong>, note Lighthouse 95+ contractuelle, et le{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à
          100 %)</strong> comme porte d&apos;entrée : il produit
          l&apos;audit pré-refonte de la section 5 — export Search
          Console, crawl de référence, stratégie de migration — avant
          tout engagement. Le vrai calcul à poser face à un devis
          sans volet SEO : combien vaut un mois de votre trafic
          Google ?
        </p>

        <h2 id="methode">14. Méthode : la refonte SEO-safe en 5 étapes</h2>
        <ol>
          <li>
            <strong>Figez la photographie</strong> — export Search
            Console (16 mois de données maximum, faites-le
            maintenant), crawl de référence, liste des pages qui
            rapportent (section 5).
          </li>
          <li>
            <strong>Choisissez votre scénario en conscience</strong> —
            adresses conservées si possible ; sinon, mapping un-à-un ;
            changement de domaine : jamais en même temps
            (sections 2 et 4).
          </li>
          <li>
            <strong>Exigez le plan de redirection au devis</strong> —
            livrable nommé, fenêtre de correction 4-8 semaines,
            Search Console à votre nom (section 12).
          </li>
          <li>
            <strong>Verrouillez le jour J</strong> — recette de
            lancement (robots.txt, noindex, sitemap, échantillon de
            301 testé à la main) et plan de retour arrière
            (section 8).
          </li>
          <li>
            <strong>Surveillez selon le protocole daté</strong> —
            J+1, S+1, M+1, M+3, avec les seuils d&apos;alerte de la
            section 9 — et gardez les redirections au moins un an.
          </li>
        </ol>
        <p>
          Et si vous préférez confier la manœuvre à une équipe qui la
          contractualise : <strong>refonte sur socle moderne dès
          6 900 €, plan de migration SEO inclus, Lighthouse 95+
          garanti par contrat</strong> (méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>).{" "}
          <Link href="/demarrer-un-projet">Décrivez votre site en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées,
          gratuite et sans engagement — avec un avis franc sur le
          niveau de risque réel de votre scénario.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) :{" "}
          <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">Google Search Central, « Site moves with URL changes » (délais, redirections ≥ 1 an, chaînes, une chose à la fois)</a> ;{" "}
          <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes" target="_blank" rel="noopener noreferrer">Google, « Site moves without URL changes » (refonte à adresses conservées)</a> ;{" "}
          <a href="https://support.google.com/webmasters/answer/9370220" target="_blank" rel="noopener noreferrer">Google, outil Changement d&apos;adresse (changements de domaine uniquement, 180 jours)</a> ;{" "}
          <a href="https://developers.google.com/search/docs/crawling-indexing/301-redirects" target="_blank" rel="noopener noreferrer">Google, « Redirects and Google Search » (301/308 comme signal canonique fort)</a> ;{" "}
          <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer">Google, « Understanding page experience » (Core Web Vitals et classement)</a> ;{" "}
          <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">web.dev, seuils officiels des Core Web Vitals</a> ;{" "}
          <a href="https://www.searchenginejournal.com/study-how-long-should-seo-migration-take/492050/" target="_blank" rel="noopener noreferrer">Search Engine Journal, étude sur 892 changements de domaine (2025)</a> ;{" "}
          <a href="https://web.dev/case-studies/renault" target="_blank" rel="noopener noreferrer">Google/web.dev, cas Renault (1 s de LCP = +13 % de conversions)</a> ;{" "}
          <a href="https://vercel.com/blog/from-wordpress-monolith-to-vercel-personio-elevates-site-performance" target="_blank" rel="noopener noreferrer">Vercel, migration Personio WordPress → Next.js (source éditeur)</a> ;{" "}
          <a href="https://www.screamingfrog.co.uk/seo-spider/pricing/" target="_blank" rel="noopener noreferrer">Screaming Frog, tarifs officiels</a> ;
          Gary Illyes (Google, 2016, via Search Engine Land) — fin de
          la perte de PageRank sur les 30x ; John Mueller (Google, via
          Search Engine Roundtable) — redirections vers
          l&apos;accueil traitées en soft 404 ; Deloitte × Google,
          « Milliseconds Make Millions » (2020) ; aide Search Console
          (rétention 16 mois). Les chiffres de perte « qui
          circulent » sans source primaire (5-7 %, 30-50 %, 50-80 %,
          « quarantaine de 30 jours ») sont signalés comme tels en
          section 3.
        </p>
        <p className="text-sm">
          <em>
            Ces repères sont fournis à titre indicatif : chaque
            migration a son contexte, et seul un audit de votre site
            permet d&apos;évaluer votre risque réel. Les règles Google
            citées évoluent : vérifiez la documentation officielle en
            cas de doute.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
