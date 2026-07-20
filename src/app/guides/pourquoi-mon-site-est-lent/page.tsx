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

const guide = getGuide("pourquoi-mon-site-est-lent");

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
      "Performance web",
      "Core Web Vitals",
      "SEO technique",
      "Next.js",
      "Hébergement web",
      "Optimisation front-end",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/logo-dark.png` },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "Pourquoi mon site est lent", item: guideUrl(guide) },
  ],
});

const faqItems = [
  {
    question: "Comment savoir si mon site est vraiment lent ?",
    answer:
      "Ouvrez PageSpeed Insights, l'outil gratuit de Google, collez l'adresse de votre site et lisez l'onglet mobile. Deux blocs apparaissent. En haut, les données terrain : ce que vivent vos vrais visiteurs, sur leurs vrais téléphones. En dessous, les données de laboratoire : une simulation faite sur un appareil standardisé. Regardez d'abord le bloc du haut — Google écrit explicitement que ce sont les données terrain qui doivent guider vos priorités. Si ce bloc est absent, c'est que votre site n'a pas assez de trafic pour que Google ait collecté des mesures réelles ; il faudra alors vous fier au laboratoire, en gardant en tête ses limites.",
  },
  {
    question: "Quels sont les seuils officiels de Google en 2026 ?",
    answer:
      "Trois mesures, et trois seuils. L'affichage du contenu principal doit tenir sous ou à 2,5 secondes. La réactivité aux interactions doit rester sous ou à 200 millisecondes. La stabilité visuelle doit rester sous ou à 0,1. Google évalue le 75e percentile : au moins 75 % des expériences doivent donc être au niveau du seuil ou meilleures. INP a remplacé FID comme Core Web Vital le 12 mars 2024 ; FID peut encore apparaître dans des données historiques.",
  },
  {
    question: "Pourquoi mon score change à chaque test ?",
    answer:
      "Parce que la mesure de laboratoire varie avec l'environnement. La documentation Lighthouse cite notamment le routage, le matériel, les extensions, les antivirus et les variations de contenu. Ne tirez donc pas de conclusion d'un seul passage : répétez le test dans les mêmes conditions, conservez les résultats et distinguez toujours laboratoire et données de terrain.",
  },
  {
    question: "Faut-il d'abord optimiser les images ?",
    answer:
      "Les images peuvent être le premier poste en volume et l'élément principal affiché ; les dimensionner, compresser et charger correctement est donc souvent utile. Mais il faut d'abord lire la trace : le temps serveur dépend de l'hébergement, du cache, du code, de la base de données, des appels externes et du réseau. Le diagnostic choisit le correctif à partir de la cause mesurée, pas d'une recette universelle.",
  },
  {
    question: "Mon hébergement mutualisé est-il responsable ?",
    answer:
      "C'est une hypothèse à tester, pas un verdict. Un temps serveur élevé peut venir des ressources, mais aussi du cache, du code, de la base, d'une extension ou d'un appel externe. Comparez plusieurs pages, consultez les métriques de l'hébergeur et profilez la requête avant de migrer. Une offre dédiée ne corrige pas automatiquement une application lente.",
  },
  {
    question: "Combien pèse une page web normale ?",
    answer:
      "Les médianes du Web Almanac donnent un repère, pas une cible pour chaque site. Images et JavaScript n'ont pas le même profil : les images demandent transfert, décodage et parfois rendu critique ; le JavaScript demande aussi analyse et exécution, dont une partie peut occuper le fil principal. Leur coût réel dépend du chargement, de l'appareil et de ce qui bloque l'affichage ou l'interaction.",
  },
  {
    question: "Les extensions WordPress ralentissent-elles vraiment un site ?",
    answer:
      "Certaines oui, d'autres non. Le nombre d'extensions ne mesure ni les requêtes, ni les scripts chargés, ni la qualité du cache. Vérifiez page par page ce qui est exécuté côté serveur et envoyé au navigateur ; certaines extensions chargent partout, d'autres conditionnent correctement leurs ressources. Désactivez et mesurez dans un environnement de test avant de conclure.",
  },
  {
    question: "Que valent les chiffres du type « 100 ms de latence = 1 % de chiffre d'affaires » ?",
    answer:
      "Rien, en tant que donnée. Ce chiffre, attribué à Amazon, vient d'une diapositive présentée par un ancien ingénieur lors d'un cours à Stanford en décembre 2006. Amazon n'a jamais publié cette étude : il n'existe aucune méthodologie, aucun échantillon, aucun intervalle de confiance. Le chiffre a vingt ans et porte sur une place de marché mondiale dont l'économie n'a rien de commun avec un site vitrine français. C'est une anecdote de conférence promue au rang de loi. Les études sérieuses existent — celle de Deloitte pour Google sur 37 marques, par exemple — et il vaut mieux citer celles-là.",
  },
  {
    question: "Un site lent perd-il vraiment des positions sur Google ?",
    answer:
      "La vitesse est utilisée par les systèmes de classement de Google, qui le documente. Mais attention à ne pas surinterpréter : ce n'est pas un interrupteur, et la pertinence du contenu prime toujours. Concrètement, la vitesse départage deux pages de qualité comparable ; elle ne fait pas remonter une page qui répond mal à la question posée. En revanche, l'effet sur le comportement des visiteurs est direct et immédiat : un site qui met dix secondes à s'afficher perd une partie de son audience avant même qu'elle ait vu l'offre. C'est souvent là que la lenteur coûte le plus cher, bien avant le classement.",
  },
  {
    question: "Combien coûte l'optimisation d'un site lent ?",
    answer:
      "Cela dépend entièrement de la cause, et c'est pourquoi l'ordre de diagnostic de ce guide compte. Un changement d'hébergement se règle pour 20 à 50 euros par mois. Une compression d'images et la mise en place d'un cache représentent une à trois journées de travail. Le nettoyage d'extensions et de scripts tiers, deux à cinq journées. En revanche, si le problème vient du socle lui-même — un thème abandonné, un constructeur de pages qui génère du code illisible, une dette accumulée pendant des années —, l'optimisation atteint vite son plafond et la refonte devient plus rentable. Notre guide du prix d'une refonte chiffre ce scénario.",
  },
  {
    question: "Quand faut-il refaire le site plutôt que l'optimiser ?",
    answer:
      "Cinq signaux, et il en faut au moins trois. Un temps d'affichage supérieur à 4 secondes qui persiste après avoir traité le cache, les images et la distribution de contenu. Une instabilité visuelle supérieure à 0,25 qui vient du thème lui-même. Une dépendance à un thème ou à un constructeur de pages qui n'est plus maintenu. Un empilement de dette tel que chaque correctif en casse un autre. Et une réactivité au-delà de 500 millisecondes causée par le socle JavaScript. En dessous de trois signaux, optimisez : vous économiserez plusieurs milliers d'euros pour un résultat proche.",
  },
  {
    question: "Un site Next.js est-il forcément plus rapide ?",
    answer:
      "Non. La pré-génération peut réduire le travail serveur au moment de la visite, mais images, polices, JavaScript, scripts tiers et stratégie de cache restent déterminants. Une cible de performance utile précise les pages, l'appareil, le réseau, l'outil, le nombre de passages et les exclusions ; elle n'existe que si le devis la prévoit.",
  },
  {
    question: "Comment vérifier que mon prestataire tient ses promesses de performance ?",
    answer:
      "Faites écrire un protocole de recette : pages testées, appareil et réseau simulés, outil et version, nombre de passages, données terrain attendues lorsqu'elles existent, seuils, exclusions et procédure de correction. Un score Lighthouse isolé n'est ni un Core Web Vital de terrain, ni une garantie de classement ou de conversion.",
  },
];


export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Pourquoi mon site est lent" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les causes mesurées sur le web mondial, la différence entre données de laboratoire et données terrain, trois chiffres du secteur vérifiés à la source — et les correctifs classés par rapport gain sur effort, du gratuit au chantier."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Mesurer avant de choisir le correctif", description: "", color: "violet" },
          { number: "02", title: "Seuils 2026 : 2,5 s · 200 ms · 0,1", description: "", color: "blue" },
          { number: "03", title: "INP a remplacé FID dans les Core Web Vitals", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/services/audit-technique", label: "Audit technique" },
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte" },
          { href: "/guides/nextjs-ou-wordpress", label: "Next.js ou WordPress ?" },
          { href: "/guides/cout-maintenance-site-internet", label: "Coût de la maintenance" },
          { href: "/agence-next-js", label: "Agence Next.js" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Site lent : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Le conseil universel, c&apos;est « optimisez vos images ». Il
          peut être utile, mais aucune cause n&apos;est universelle. Serveur,
          cache, HTML, CSS, JavaScript, images, polices et scripts tiers
          interagissent. Une statistique agrégée du web ne diagnostique pas votre
          page : ce guide sépare les mesures terrain et laboratoire avant de
          choisir un correctif.
        </p>

        <InfoBox variant="amber" title="Les 10 mots de ce guide, traduits en français courant">
          <strong>Core Web Vitals</strong> : les trois mesures officielles de
          Google sur la qualité d&apos;affichage d&apos;une page.{" "}
          <strong>LCP</strong> : le temps que met le contenu principal à
          s&apos;afficher. <strong>INP</strong> : le délai entre le moment où
          vous cliquez et celui où la page réagit.{" "}
          <strong>CLS</strong> : la mesure du contenu qui saute pendant le
          chargement. <strong>TTFB</strong> : le délai jusqu&apos;au premier octet,
          influencé notamment par le réseau, le cache, l&apos;application, la base
          de données, le CDN et l&apos;hébergement.{" "}
          <strong>Données terrain</strong> : ce que vivent vos vrais
          visiteurs. <strong>Données de laboratoire</strong> : une simulation
          faite sur un appareil standardisé.{" "}
          <strong>75e percentile</strong> : le seuil qui exige que trois
          visiteurs sur quatre soient satisfaits, pas la moyenne.{" "}
          <strong>Cache</strong> : la mise en mémoire d&apos;une page déjà
          calculée, pour ne pas la refabriquer à chaque visite.{" "}
          <strong>CDN</strong> : un réseau de serveurs répartis qui rapproche
          vos fichiers de vos visiteurs.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "mesurer", label: "2. Mesurer correctement, en trois minutes" },
            { id: "labo-terrain", label: "3. Laboratoire ou terrain : la distinction qui change tout" },
            { id: "seuils", label: "4. Les seuils officiels 2026 (et celui qui n'existe plus)" },
            { id: "maillon-faible", label: "5. Ce que montrent les statistiques agrégées" },
            { id: "poids", label: "6. Ce que pèse une page, poste par poste" },
            { id: "causes", label: "7. Les causes à tester" },
            { id: "chiffres-faux", label: "8. Trois chiffres qu'on vous répète et qui ne valent rien" },
            { id: "correctifs", label: "9. Les correctifs par rapport gain sur effort" },
            { id: "hebergement", label: "10. Quand c'est l'hébergement" },
            { id: "structurel", label: "11. Quand c'est structurel : optimiser ou refaire" },
            { id: "combien", label: "12. Combien ça coûte de corriger" },
            { id: "verdict-par-profil", label: "13. Le verdict, profil par profil" },
            { id: "methode", label: "14. Méthode : diagnostiquer en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          Un site est lent pour l&apos;une de ces cinq raisons, et
          l&apos;ordre compte : <strong>un serveur trop lent à répondre, des
          images trop lourdes, trop de JavaScript, des scripts tiers, ou un
          socle technique à bout de souffle</strong>. Le diagnostic prend
          trois minutes et il est gratuit — le faire avant de dépenser vous
          évitera de payer une optimisation qui ne traitera pas la cause.
        </p>
        <GuideTable
          headers={["Ce que vous observez", "Cause probable", "Correctif type", "Ordre de coût"]}
          rows={[
            ["Serveur lent à répondre, page pourtant légère", "Hébergement mutualisé saturé", "Changer d'offre d'hébergement", "20 à 50 €/mois"],
            ["Contenu principal long à s'afficher, grosse image en haut de page", "Images non optimisées", "Compression, formats modernes, dimensions adaptées", "1 à 3 jours"],
            ["Page qui se fige quelques secondes après affichage", "Trop de JavaScript exécuté", "Nettoyage des extensions et scripts", "2 à 5 jours"],
            ["Contenu qui saute pendant le chargement", "Dimensions d'images absentes, bandeaux insérés après coup", "Réserver la place dans le code", "1 à 2 jours"],
            ["Tout est lent, et chaque correctif en casse un autre", "Socle en fin de vie", "Refonte", "Voir notre guide du prix d'une refonte"],
          ]}
        />

        <InfoBox variant="blue" title="Le fil rouge : scénario fictif composite — Karim, magasin de sport (ni client ni témoignage réel)">
          Dans ce scénario, Karim vendrait du matériel de montagne et ferait
          un tiers de son chiffre d&apos;affaires en ligne. Depuis l&apos;hiver,
          son site WordPress « ramerait », surtout au téléphone. Une agence
          lui aurait proposé une refonte à 14 000 euros. Nous suivrons cette
          hypothèse section par section — parce que son budget de correction
          n&apos;aurait rien à voir avec ce
          devis, et que la raison vous concerne probablement aussi.
        </InfoBox>

        <h2 id="mesurer">2. Mesurer correctement, en trois minutes</h2>
        <p>
          Ouvrez <strong>pagespeed.web.dev</strong>, l&apos;outil gratuit de
          Google, sans compte à créer. Collez l&apos;adresse de votre site
          et lisez l&apos;onglet <strong>Mobile</strong>, affiché par défaut :
          c&apos;est là que se joue la majorité du trafic, et c&apos;est là
          que les sites lents s&apos;effondrent.
        </p>
        <p>
          Relancez le test deux ou trois fois. Le score bouge, parfois
          beaucoup selon l&apos;environnement. Retenez une série réalisée dans
          des conditions comparables, jamais le chiffre exact d&apos;une mesure
          unique.
        </p>

        <h2 id="labo-terrain">3. Laboratoire ou terrain : la distinction qui change tout</h2>
        <p>
          Cette distinction détermine sur quoi vous devez travailler.
          L&apos;outil affiche <strong>deux blocs</strong>, et ils ne
          mesurent pas la même chose.
        </p>
        <GuideTable
          headers={["", "Données terrain", "Données de laboratoire"]}
          rows={[
            ["Ce que c'est", "Ce que vivent vos vrais visiteurs, sur leurs vrais appareils", "Une simulation sur un appareil standardisé, en réseau dégradé"],
            ["Disponible quand", "Votre site a assez de trafic pour que Google ait collecté des mesures", "Toujours"],
            ["Utilisé par Google pour le classement", "Oui", "Non"],
            ["Stabilité", "Stable, moyennée sur 28 jours", "Variable d'un test à l'autre"],
            ["À quoi ça sert", "Décider des priorités", "Diagnostiquer et vérifier une correction"],
          ]}
        />
        <InfoBox variant="blue" title="La phrase de Google qui tranche">
          La documentation officielle est explicite : lorsque vous disposez
          des deux, <strong>ce sont les données terrain qui doivent guider
          vos priorités</strong>. Le laboratoire sert à comprendre pourquoi
          et à vérifier qu&apos;une correction a fonctionné — pas à décider
          quoi corriger.
          <br />
          <br />
          Corollaire important : si le bloc terrain est absent chez vous,
          c&apos;est que votre site n&apos;a pas assez de visiteurs pour que
          Google ait pu mesurer. Ce n&apos;est pas une erreur, et cela veut
          ne dit rien, à lui seul, sur la priorité à donner à la vitesse : utilisez
          alors le laboratoire et, si possible, votre propre mesure utilisateur.
        </InfoBox>

        <h2 id="seuils">4. Les seuils officiels 2026 (et celui qui n&apos;existe plus)</h2>
        <GuideTable
          headers={["Mesure", "Ce qu'elle mesure", "Seuil « bon »", "Seuil « mauvais »"]}
          rows={[
            ["LCP", "Le temps d'affichage du contenu principal", "≤ 2,5 secondes", "> 4 secondes"],
            ["INP", "Le délai de réaction quand on clique", "≤ 200 millisecondes", "> 500 millisecondes"],
            ["CLS", "Le contenu qui saute pendant le chargement", "≤ 0,1", "> 0,25"],
          ]}
        />
        <p>
          Ces seuils s&apos;évaluent au <strong>75e percentile</strong> :
          il ne s&apos;agit pas d&apos;une moyenne, mais d&apos;une exigence
          qu&apos;au moins trois visites sur quatre soient au niveau « bon » : LCP
          et INP au plus égaux au seuil, CLS au plus égal à 0,1. Un site
          rapide pour la moitié de son audience et catastrophique pour
          l&apos;autre moitié échoue au test.
        </p>
        <InfoBox variant="amber" title="FID reste une mesure historique ; INP est la métrique Core Web Vitals actuelle">
          La mesure de réactivité s&apos;appelle <strong>INP</strong> depuis
          le <strong>12 mars 2024</strong>. Elle a remplacé l&apos;ancienne
          mesure FID comme Core Web Vital. FID peut encore apparaître dans des
          archives, bibliothèques ou historiques ; il ne faut pas la confondre
          avec la métrique actuelle utilisée pour ce volet de l&apos;évaluation.
        </InfoBox>

        <h2 id="maillon-faible">5. Ce que montrent les statistiques agrégées</h2>
        <p>
          Voici la donnée qui devrait réorienter la moitié des budgets
          d&apos;optimisation. Sur le web mobile mondial, la part de pages
          qui obtiennent un bon résultat :
        </p>
        <GuideTable
          headers={["Mesure", "Pages mobiles au vert", "Pages ordinateur au vert"]}
          rows={[
            ["Réactivité (INP)", "77 %", "97 %"],
            ["Affichage du contenu principal (LCP)", "62 %", "74 %"],
            ["Temps de réponse serveur (TTFB)", "44 %", "55 %"],
          ]}
        />
        <p>
          <strong>Le temps de réponse du serveur est le pire score de toutes
          les mesures</strong>, et de loin. Or il ne dépend ni de vos
          images, ni de votre thème, ni de votre nombre d&apos;extensions :
          il dépend de votre hébergement et de ce que votre site calcule
          avant de répondre. C&apos;est exactement ce que le conseil
          « optimisez vos images » ne traite pas.
        </p>
        <p>
          Cela ne veut pas dire qu&apos;il faut ignorer les images —
          la section 9 leur donne toujours le meilleur rapport gain sur
          effort. Cela veut dire qu&apos;il faut{" "}
          <strong>regarder son temps de réponse serveur avant de commencer</strong>,
          parce qu&apos;aucune compression d&apos;image ne rattrapera un
          serveur qui met deux secondes à répondre.
        </p>

        <p>
          <strong>Dans le scénario, Karim découvrirait ceci</strong> : son temps de réponse
          serveur serait de 2,1 secondes. Son site n&apos;aurait même pas commencé à
          envoyer sa page que deux secondes sont déjà perdues. Aucune
          compression d&apos;image n&apos;y changerait quoi que ce soit — et
          la refonte à 14 000 euros qu&apos;on lui propose ne traite pas ce
          poste non plus, puisqu&apos;elle prévoit de rester sur le même
          hébergement mutualisé à 4 euros par mois.
        </p>

        <GuideInlineCTA
          title="Votre site est lent et vous ne savez pas pourquoi ?"
          description="Décrivez votre situation en 3 minutes. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti. Cette première réponse est gratuite et sans engagement — y compris si elle consiste à recommander un changement d'hébergement."
        />

        <h2 id="poids">6. Ce que pèse une page, poste par poste</h2>
        <p>
          Les valeurs médianes mesurées sur le web mobile en 2025 donnent un
          point de comparaison utile pour situer votre propre site.
        </p>
        <FormulaBox>
          {`PAGE MOBILE MÉDIANE — répartition du poids
  Images                911 Ko
  JavaScript            632 Ko
  Polices               122 Ko
  Feuilles de style      77 Ko
  HTML                   22 Ko

POIDS MÉDIAN PAR SOCLE (mobile)
  Squarespace         3 974 Ko
  WordPress           2 894 Ko`}
        </FormulaBox>
        <InfoBox variant="blue" title="911 Ko d'images n'égalent pas 911 Ko de JavaScript">
          Cette nuance est décisive. Images et scripts n&apos;ont pas le même coût,
          mais aucune règle « au kilo-octet » n&apos;est universelle. Une image peut
          être l&apos;élément LCP et retarder l&apos;affichage si elle est lourde, mal
          dimensionnée ou découverte tard. Le JavaScript peut, selon son mode de
          chargement et son exécution, occuper le fil principal et retarder rendu
          ou interactions.
          <br />
          <br />
          Comparez donc le chemin critique, le temps CPU, le LCP et l&apos;INP plutôt
          que le poids total seul. Deux ressources du même poids peuvent avoir des
          effets très différents selon leur priorité, leur cache et l&apos;appareil.
        </InfoBox>

        <h2 id="causes">7. Les causes à tester, sans ordre universel</h2>
        <ol>
          <li>
            <strong>Le serveur et le chemin réseau.</strong> Mesurez le TTFB et
            séparez DNS, connexion, cache, calcul applicatif, base de données,
            CDN et ressources de l&apos;hébergement avant de conclure.
          </li>
          <li>
            <strong>Les images.</strong> Vérifiez l&apos;élément LCP, les dimensions,
            le format, la compression, les variantes responsives, la priorité de
            l&apos;image principale et le chargement différé des autres.
          </li>
          <li>
            <strong>Le JavaScript.</strong> 632 kilooctets médians, avec le
            coût d&apos;exécution décrit plus haut. Une extension peut charger du
            code globalement ou seulement sur certaines pages : l&apos;onglet réseau
            et le profil CPU permettent de le vérifier.
          </li>
          <li>
            <strong>Les scripts tiers.</strong> Mesure d&apos;audience,
            bandeau de consentement, chat, pixels publicitaires, polices
            distantes : chacun ajoute une connexion à un serveur que vous ne
            maîtrisez pas entièrement. Leur configuration, leur consentement,
            leur chargement et parfois leur auto-hébergement peuvent toutefois
            réduire l&apos;impact.
          </li>
          <li>
            <strong>L&apos;absence de cache.</strong> Sans mise en mémoire,
            votre site refabrique chaque page à chaque visite. C&apos;est le
            correctif potentiellement efficace sur un site dynamique, à valider
            selon la fraîcheur des données et les règles d&apos;invalidation.
          </li>
        </ol>

        <h2 id="chiffres-faux">8. Trois chiffres qu&apos;on vous répète et qui ne valent rien</h2>
        <GuideTable
          headers={["Le chiffre", "Ce qu'on trouve en remontant à la source"]}
          rows={[
            ["« Amazon : 100 ms de latence = 1 % de chiffre d'affaires en moins »", "Une diapositive présentée par un ancien ingénieur lors d'un cours à Stanford en décembre 2006. Amazon n'a jamais publié l'étude : ni méthodologie, ni échantillon. Le chiffre a 20 ans"],
            ["« Google : 500 ms de latence = 20 % de trafic en moins »", "Même famille : une anecdote de conférence, jamais publiée sous forme d'étude vérifiable"],
            ["« 25 extensions = 80 à 150 requêtes en base et 800 à 1 500 ms côté serveur »", "Un unique article de blog, publié par l'éditeur d'un CMS concurrent de WordPress. Aucune méthodologie, aucun environnement de test, aucune liste d'extensions"],
          ]}
        />
        <p>
          Les études sérieuses existent — celle menée par Deloitte pour
          Google, publiée en 2020, qui mesure l&apos;effet d&apos;un dixième
          de seconde gagné sur des dizaines de marques et des millions de
          sessions mobiles, avec sa méthodologie publiée. Autant citer
          celles-là. Un chiffre de 2006 sur une place de marché mondiale ne
          dit rien de votre site vitrine savoyard.
        </p>

        <h2 id="correctifs">9. Les correctifs par rapport gain sur effort</h2>
        <GuideTable
          headers={["Correctif", "Gain typique", "Effort", "À faire soi-même ?"]}
          rows={[
            ["Compresser les images et passer aux formats modernes", "Fort — c'est le meilleur rapport du secteur", "1 à 3 jours", "Oui, avec un outil gratuit"],
            ["Activer un cache", "Fort sur un site dynamique", "Quelques heures", "Oui sur WordPress"],
            ["Réserver la place des images et bandeaux dans le code", "Fort sur la stabilité visuelle", "1 à 2 jours", "Non, demande du code"],
            ["Changer d'hébergement", "Décisif si le serveur est en cause", "Une demi-journée", "Oui, avec précaution"],
            ["Retirer les extensions et scripts inutiles", "Moyen à fort", "2 à 5 jours", "Partiellement"],
            ["Mettre en place un réseau de distribution (CDN)", "Moyen", "Quelques heures", "Oui sur les offres modernes"],
            ["Différer les scripts tiers", "Moyen", "1 à 2 jours", "Non"],
          ]}
        />
        <InfoBox variant="emerald" title="Budget de correction dans le scénario Karim">
          Hypothèse de changement d&apos;hébergement pour une offre à ressources dédiées :
          <strong> 39 euros par mois</strong>, temps de réponse serveur
          qui ramènerait le temps de réponse serveur sous 400 millisecondes en une demi-journée. Compression des
          photos de matériel, encore au format d&apos;origine sorti de
          l&apos;appareil photo : <strong>deux jours de travail</strong>.
          Retrait de quatre extensions dont deux ne servaient plus depuis
          2023 : <strong>une journée</strong>.
          <br />
          <br />
          Total : environ <strong>2 800 euros</strong> et 39 euros par mois,
          contre 14 000 euros pour la refonte proposée. Son site ne serait
          pas neuf, mais il serait rapide — et il pourrait décider de la refonte
          quand elle se justifiera vraiment, pas quand la lenteur sert
          d&apos;argument de vente.
        </InfoBox>
        <p>
          Faites-les <strong>dans cet ordre</strong>, et remesurez après
          chacun. C&apos;est la seule façon de savoir ce qui a produit
          l&apos;effet — et d&apos;éviter de payer pour un chantier qui
          n&apos;était pas nécessaire.
        </p>

        <h2 id="hebergement">10. Quand c&apos;est l&apos;hébergement</h2>
        <p>
          Le test est simple : regardez votre <strong>temps de réponse
          serveur</strong>. S&apos;il dépasse 1,5 seconde alors que votre
          page est légère et que vos images sont correctes, le problème est
          en amont de votre site.
        </p>
        <p>
          Point important à comprendre, parce qu&apos;il change la façon
          d&apos;en parler à votre hébergeur :{" "}
          <strong>ce n&apos;est pas une défaillance, c&apos;est le produit
          que vous avez acheté</strong>. Les offres mutualisées d&apos;entrée
          de gamme annoncent explicitement des ressources partagées, sans
          garantie de processeur ni de mémoire. Quand un autre site du même
          serveur reçoit un pic de trafic, le vôtre ralentit. C&apos;est
          contractuel.
        </p>
        <p>
          Le correctif dépend de la cause : cache, CDN, requêtes, application,
          base de données, offre d&apos;hébergement ou architecture. Son coût et sa
          difficulté ne peuvent pas être déduits du TTFB seul. Une page pré-générée
          réduit le calcul à la visite, mais conserve DNS, réseau, CDN, fonctions
          éventuelles, cache et origine : le temps de réponse ne disparaît pas.
          Notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">comparatif Next.js ou
          WordPress</Link> détaille ce mécanisme.
        </p>

        <h2 id="structurel">11. Quand c&apos;est structurel : optimiser ou refaire</h2>
        <p>
          L&apos;optimisation a un plafond. Voici les cinq signaux qui
          indiquent que vous l&apos;avez atteint — il en faut au moins trois.
        </p>
        <ul>
          <li>
            Un temps d&apos;affichage supérieur à <strong>4 secondes</strong>{" "}
            qui persiste après avoir traité le cache, les images et la
            distribution de contenu.
          </li>
          <li>
            Une instabilité visuelle supérieure à <strong>0,25</strong> dont
            l&apos;origine est le thème lui-même.
          </li>
          <li>
            Une dépendance à un thème ou à un constructeur de pages qui
            n&apos;est plus maintenu.
          </li>
          <li>
            Une dette telle que <strong>chaque correctif en casse un
            autre</strong>.
          </li>
          <li>
            Une réactivité au-delà de <strong>500 millisecondes</strong>{" "}
            causée par le socle JavaScript.
          </li>
        </ul>
        <p>
          Dans le scénario, Karim en compterait <strong>un seul</strong> : son thème ne serait
          plus mis à jour depuis 2024. Un signal sur cinq, c&apos;est un
          point de vigilance à surveiller, pas une refonte à 14 000 euros.
          C&apos;est précisément le calcul que la proposition simulée ne
          montrerait nulle part.
        </p>
        <p>
          En dessous de trois signaux : optimisez. Vous économiserez
          plusieurs milliers d&apos;euros pour un résultat proche, et notre{" "}
          <Link href="/guides/prix-refonte-site-internet">guide du prix
          d&apos;une refonte</Link> vous dira franchement quand elle ne se
          justifie pas.
        </p>

        <h2 id="combien">12. Combien ça coûte de corriger</h2>
        <GuideTable
          headers={["Intervention", "Ordre de prix", "Quand la choisir"]}
          rows={[
            ["Changement d'hébergement", "20 à 50 €/mois", "Temps de réponse serveur au-dessus de 1,5 s"],
            ["Optimisation ciblée (images, cache, stabilité)", "1 000 à 3 000 €", "Front-end perfectible, socle sain"],
            ["Nettoyage complet (extensions, scripts, base)", "2 000 à 5 000 €", "Site chargé au fil des années"],
            ["Audit technique avec plan d'action chiffré", "Sur devis, volontairement court", "Vous voulez savoir avant d'engager"],
            ["Refonte sur socle moderne", "À partir de 6 900 €", "Au moins trois signaux structurels"],
          ]}
        />
        <p>
          Notre page{" "}
          <Link href="/services/audit-technique">audit technique</Link>{" "}
          décrit la première étape : mesurer, identifier la cause réelle, et
          chiffrer les deux scénarios — optimiser ou refaire — plutôt
          qu&apos;en imposer un.
        </p>

        <h2 id="verdict-par-profil">13. Le verdict, profil par profil</h2>
        <GuideTable
          headers={["Votre situation", "Ce qu'il faut faire d'abord", "Pourquoi"]}
          rows={[
            ["Site vitrine, peu de trafic, pas de données terrain", "Rien d'urgent", "Sans visiteurs mesurés, la vitesse n'est pas votre priorité"],
            ["Temps de réponse serveur au-dessus de 1,5 s", "Changer d'offre d'hébergement", "Aucune optimisation d'image ne rattrapera ça"],
            ["Grosse image en haut de page, score mobile bas", "Compresser et passer aux formats modernes", "Meilleur rapport gain sur effort du secteur"],
            ["Page qui se fige après affichage", "Auditer les extensions et scripts tiers", "C'est le JavaScript qui bloque le fil principal"],
            ["WordPress alourdi depuis des années, correctifs qui s'annulent", "Chiffrer refonte contre optimisation", "L'optimisation a un plafond, et vous l'avez atteint"],
            ["Boutique en ligne lente en période de pic", "Traiter l'hébergement en priorité", "Le serveur est le point de rupture sous charge"],
          ]}
        />

        <p>
          Un dernier cas, fréquent et coûteux : vous trouvez votre site lent
          parce qu&apos;il ne vous rapporte pas de demandes. Ce sont deux
          diagnostics distincts, et la vitesse est rarement le coupable.
          Notre guide{" "}
          <Link href="/guides/pourquoi-mon-site-ne-convertit-pas">pourquoi
          mon site ne convertit pas</Link> donne l&apos;arbre de diagnostic à
          dérouler avant d&apos;engager le moindre budget.
        </p>

        <h2 id="methode">14. Méthode : diagnostiquer en 5 étapes</h2>
        <ol>
          <li>
            <strong>Mesurez sur PageSpeed Insights, onglet mobile</strong>,
            deux ou trois fois, et retenez l&apos;ordre de grandeur.
          </li>
          <li>
            <strong>Lisez le bloc terrain en premier.</strong> S&apos;il est
            absent, votre priorité n&apos;est probablement pas la vitesse.
          </li>
          <li>
            <strong>Regardez le temps de réponse serveur avant tout le
            reste.</strong> C&apos;est le poste le plus faible du web mobile
            et le moins souvent traité.
          </li>
          <li>
            <strong>Appliquez les correctifs dans l&apos;ordre de la
            section 9</strong>, en remesurant après chacun.
          </li>
          <li>
            <strong>Comptez les signaux structurels de la section 11.</strong>{" "}
            À trois ou plus, faites chiffrer une refonte avant de continuer
            à optimiser.
          </li>
        </ol>
        <p>
          Chez Hagnéré Code, une éventuelle cible de performance est définie
          avec ses pages, conditions de mesure, exclusions et procédure de
          correction dans le devis. Un score de laboratoire ne remplace pas
          les données de terrain et ne garantit aucun résultat SEO. Le détail est sur notre page{" "}
          <Link href="/agence-next-js">agence Next.js</Link> et dans nos{" "}
          <Link href="/tarifs">tarifs publics</Link>.
        </p>

        <GuideInlineCTA
          title="Faites poser le bon diagnostic"
          description="Décrivez votre site en 3 minutes : objectif de réponse personnelle le prochain jour ouvré, gratuite et sans engagement. Si un changement d'hébergement suffit, nous vous le dirons."
        />

        <InfoBox variant="emerald" title="À retenir : les 6 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>44 %</strong> : la part de pages mobiles ayant un bon temps de réponse serveur — le pire score de toutes les mesures.</li>
            <li><strong>2,5 s · 200 ms · 0,1</strong> : les trois seuils officiels de Google, évalués au 75e percentile.</li>
            <li><strong>12 mars 2024</strong> : la date où INP a remplacé FID. Un document qui cite encore FID a deux ans de retard.</li>
            <li><strong>911 Ko d&apos;images, 632 Ko de JavaScript</strong> : la répartition médiane d&apos;une page mobile — mais le JavaScript coûte bien plus cher à poids égal.</li>
            <li><strong>2 894 Ko</strong> : le poids médian d&apos;une page WordPress sur mobile.</li>
            <li><strong>3 signaux structurels</strong> : le seuil à partir duquel il faut chiffrer une refonte plutôt que continuer à optimiser.</li>
          </ul>
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Seuils et méthodologie officiels :{" "}
          <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">Google web.dev, Core Web Vitals</a>,{" "}
          <a href="https://web.dev/articles/lcp" target="_blank" rel="noopener noreferrer">documentation LCP</a> et{" "}
          <a href="https://web.dev/blog/inp-cwv-march-12" target="_blank" rel="noopener noreferrer">annonce du remplacement de FID par INP, 12 mars 2024</a>.
          Données d&apos;usage du web :{" "}
          <a href="https://almanac.httparchive.org/en/2025/performance" target="_blank" rel="noopener noreferrer">Web Almanac 2025, chapitre Performance</a>,{" "}
          <a href="https://almanac.httparchive.org/en/2025/page-weight" target="_blank" rel="noopener noreferrer">chapitre Page Weight</a> et{" "}
          <a href="https://almanac.httparchive.org/en/2025/third-parties" target="_blank" rel="noopener noreferrer">chapitre Third Parties</a>.
          Impact commercial de la vitesse :{" "}
          <a href="https://web.dev/case-studies/milliseconds-make-millions" target="_blank" rel="noopener noreferrer">Deloitte pour Google, « Milliseconds Make Millions » (2020)</a>.
        </p>
        <p className="text-sm">
          Les mesures de performance varient d&apos;un passage à l&apos;autre :
          les ordres de grandeur cités valent comme repères, pas comme
          garanties. Les fourchettes de prix sont des ordres de grandeur de
          marché ; seul un audit du site existant permet un chiffrage ferme.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
