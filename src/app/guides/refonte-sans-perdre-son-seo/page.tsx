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
      "Pas nécessairement. La perte de trafic n'est pas un effet mécanique de la refonte, mais elle peut survenir si la migration est mal préparée ou si plusieurs changements sont cumulés. Parmi les causes fréquentes : des pages supprimées sans redirection, des adresses changées sans correspondance une-à-une et des contenus qui rapportaient du trafic réécrits ou supprimés. À adresses conservées, Google traite l'opération comme un changement d'infrastructure : le risque lié au changement d'adresses disparaît, sans que cela garantisse un trafic immobile. Si les adresses changent, des fluctuations sont possibles pendant leur retraitement, même avec des redirections correctes. Ce guide déroule la méthode complète, étape par étape.",
  },
  {
    question: "Comment refaire son site sans perdre son référencement ?",
    answer:
      "Cinq gestes structurent la méthode : inventorier les adresses existantes AVANT la bascule (crawl + export Search Console) ; rediriger chaque ancienne page vers sa nouvelle équivalente exacte — jamais tout vers l'accueil, que Google peut traiter comme une erreur ; conserver les contenus et balises des pages qui rapportent du trafic ; garder les redirections au moins un an ; et surveiller la Search Console selon un protocole daté (J+1, S+1, M+1, M+3). Un sixième geste contractuel les protège tous : exiger que le plan de redirection figure comme livrable nommé dans le devis de refonte. La méthode complète, avec nos repères opérationnels internes — et non des seuils universels publiés par Google —, est dans ce guide.",
  },
  {
    question: "Une baisse de trafic est-elle normale après une refonte ?",
    answer:
      "Une fluctuation temporaire peut survenir ; une baisse durable mérite d'être examinée. Google indique qu'un site de taille petite ou moyenne met « quelques semaines » à voir la plupart de ses pages retraitées après un changement d'adresses. Les fourchettes que nous utilisons sont des repères opérationnels internes, pas des seuils établis par Google ni des prédictions universelles : sous environ 15 %, nous renforçons la surveillance ; entre 15 et 30 %, nous vérifions le plan de redirection et la Search Console ; au-delà de 30 %, ou si la baisse persiste après un mois, nous déclenchons un audit prioritaire. Il faut toujours les interpréter selon la saisonnalité, la fiabilité de la mesure et l'ampleur des changements.",
  },
  {
    question: "Combien de temps pour retrouver mon trafic après une refonte ?",
    answer:
      "Tout dépend du scénario. À adresses conservées, il n'y a pas de migration d'URLs à retraiter, mais le trafic peut tout de même varier si les contenus, le rendu technique ou la mesure changent. Avec des adresses modifiées et bien redirigées, Google évoque quelques semaines pour retraiter la plupart des pages d'un site petit ou moyen, sans promettre une date de stabilisation. À part, l'étude Search Engine Journal citée ici porte sur 892 changements de domaine : elle mesure 523 jours de récupération moyenne et 17 % des cas n'avaient pas retrouvé leur niveau pendant la période observée. Ces chiffres décrivent cet échantillon de changements de domaine et ne doivent pas servir à estimer une refonte ordinaire. C'est pourquoi ce guide déconseille de cumuler refonte et changement de domaine.",
  },
  {
    question: "Qu'est-ce qu'une redirection 301 et pourquoi c'est si important ?",
    answer:
      "Une redirection 301 est un panneau « déménagé définitivement » : quand un visiteur ou Google demande l'ancienne adresse d'une page, le serveur l'envoie automatiquement vers la nouvelle. C'est le mécanisme principal pour transmettre à la nouvelle page les signaux associés à l'ancienne. Google indique que les redirections permanentes ne perdent pas de PageRank du seul fait de leur type et demande de les conserver au moins un an. La condition : rediriger page par page vers l'équivalent exact — une cible sans rapport peut être traitée comme une erreur par Google.",
  },
  {
    question: "Faut-il garder exactement les mêmes URLs ?",
    answer:
      "Si vous le pouvez, oui : conserver les adresses réduit nettement le risque de migration. Google traite alors l'opération comme un changement d'infrastructure, sans outil de changement d'adresse à activer. Cela ne garantit toutefois ni des positions ni un trafic identiques si les contenus, les balises, le maillage ou le rendu changent. C'est notre méthode par défaut lors d'une migration WordPress vers Next.js : conserver les slugs (la partie de l'adresse propre à chaque page) à l'identique. Ne changez une adresse que si le gain est réel (structure illogique, adresses générées ou dupliquées) — chaque URL modifiée exige une redirection et un retraitement par Google.",
  },
  {
    question: "Peut-on changer de CMS (WordPress, Wix, Shopify) sans perdre son SEO ?",
    answer:
      "Oui, en limitant les changements simultanés. Le CMS (le logiciel qui fait tourner votre site : WordPress, Wix, Shopify…) n'est pas classé en tant que tel : Google évalue les pages accessibles à leurs adresses, leur contenu et de nombreux signaux. Le risque se réduit en conservant les adresses (ou en les redirigeant une à une), les contenus et balises des pages qui rapportent du trafic, ainsi que leur accessibilité technique. Cas particulier des plateformes fermées type Wix : l'export est limité et le contenu se migre souvent à la main — prévoyez-le au devis. Une migration peut aussi améliorer la performance technique et contribuer au SEO, mais ni la technologie choisie ni la vitesse ne garantissent un gain de classement.",
  },
  {
    question: "Puis-je changer de nom de domaine pendant la refonte ?",
    answer:
      "Vous pouvez, mais mieux vaut séparer les opérations. Google recommande de planifier les changements l'un après l'autre. Le changement de domaine ajoute un risque propre ; l'étude citée dans ce guide observe une récupération moyenne de 523 jours sur son échantillon de 892 changements de domaine, résultat qui ne s'applique pas aux refontes ordinaires. La procédure exige notamment des redirections permanentes et l'outil « Changement d'adresse » de la Search Console, réservé à ce cas. Faites d'abord une opération, mesurez sa stabilisation, puis planifiez l'autre selon le contexte du site.",
  },
  {
    question: "Faut-il prévenir Google quand on refait son site ?",
    answer:
      "Cela dépend du scénario — et l'erreur est fréquente dans les deux sens. Refonte à adresses conservées : rien à déclarer, aucun outil à activer — Google découvre les nouvelles pages en les revisitant naturellement. Refonte avec changement d'adresses sur le même domaine : pas d'outil non plus, mais deux gestes indispensables — les redirections 301 et la soumission du nouveau sitemap (le plan du site lisible par Google) dans la Search Console. Changement de domaine uniquement : l'outil « Changement d'adresse » de la Search Console, en plus des redirections. Utiliser cet outil pour une simple refonte est une erreur ; ne pas l'utiliser pour un changement de domaine en est une autre.",
  },
  {
    question: "Pourquoi mon site a disparu de Google après la refonte ?",
    answer:
      "Parmi les causes à vérifier en priorité : un noindex oublié — l'instruction « ne pas indexer » posée sur le site de test a été mise en production avec lui ; un robots.txt qui bloque tout ; des redirections absentes ou cassées ; des redirections vers la page d'accueil que Google traite comme des erreurs ; ou des contenus supprimés. Les deux premiers points peuvent souvent être corrigés rapidement, mais le retour dans les résultats dépend ensuite du nouveau passage de Google et ne suit pas un délai garanti. Ouvrez votresite.fr/robots.txt et cherchez « noindex » dans le code source de votre page d'accueil. Le plan d'urgence complet est en fin de guide.",
  },
  {
    question: "Que faire si j'ai déjà perdu du trafic après ma refonte ?",
    answer:
      "Agissez vite : certaines pertes peuvent être corrigées lorsque leur cause est identifiée. Vérifiez, dans cet ordre pratique : 1) noindex ou robots.txt bloquant restés en production ; 2) redirections absentes — testez à la main 10 anciennes adresses importantes ; 3) redirections vers la page d'accueil ou des pages sans rapport ; 4) contenus performants supprimés ou vidés ; 5) dégradation de la vitesse. La Search Console aide à objectiver les pages en erreur, l'indexation et les requêtes perdues. Si les redirections manquaient, posez-les maintenant et conservez-les au moins un an, comme le recommande Google.",
  },
  {
    question: "Une refonte peut-elle améliorer mon SEO ?",
    answer:
      "Oui, elle peut améliorer la performance technique et contribuer au SEO, sans garantir un gain de positions. Google indique que les Core Web Vitals sont utilisés par ses systèmes de classement, parmi de nombreux autres signaux. Deux études de cas illustrent des résultats propres à leur contexte : Vercel rapporte, pour la migration Personio de WordPress vers Next.js, plus de 90 % d'amélioration de la stabilité visuelle et 29 % de vitesse mobile en plus ; web.dev rapporte chez Renault 13 % de conversions supplémentaires après une amélioration d'une seconde du LCP. Ces chiffres ne constituent pas une prévision pour un autre site. La pertinence du contenu et l'intention de recherche restent déterminantes.",
  },
  {
    question: "Combien coûte une refonte de site internet ?",
    answer:
      "Les fourchettes complètes sont dans notre guide dédié au prix d'une refonte : 1 500 à 8 000 € pour un site vitrine de TPE, 3 000 à 15 000 € pour un site PME, davantage en e-commerce — et surtout, le poste que les devis oublient : la migration SEO (inventaire des adresses, plan de redirection, contrôles post-bascule), facturée 1 500 à 10 000 € selon la taille du site. Chez Hagnéré Code, la refonte vers un socle moderne suit notre grille publique — 6 900 €, 14 900 € ou 22 000 € et plus — avec le plan de migration SEO inclus et un score technique Lighthouse de 95+ contractualisé dans des conditions de mesure définies. Ce score de laboratoire ne garantit ni positions, ni trafic, ni conversions.",
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
        heroDescription="Les règles officielles de Google citées au mot près, les mythes qui circulent démontés à la source, le plan de redirection expliqué, un protocole de surveillance daté avec des repères d'alerte internes, le cas WordPress → Next.js chiffré — et le plan d'urgence si le trafic a déjà chuté. Le guide que nous aurions voulu que nos clients lisent avant leur première refonte."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "301/308 : pas de perte de PageRank due à la redirection", description: "", color: "violet" },
          { number: "02", title: "Redirections à garder ≥ 1 an", description: "", color: "blue" },
          { number: "03", title: "Adresses conservées = risque de migration réduit", description: "", color: "emerald" },
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
        showWhitePaperPromo
      >
        <p className="lead">
          « Si je refais mon site, est-ce que je vais disparaître de
          Google ? » — la question qui retarde des centaines de
          refontes nécessaires. La réponse honnête :{" "}
          <strong>la perte de trafic n&apos;est pas un effet mécanique de
          la refonte, mais le risque augmente quand la migration est
          mal préparée ou cumule trop de changements</strong>. Google
          documente la méthode ; ses règles sont pourtant souvent
          résumées sans leur contexte. Nous les détaillons ici.
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
            { id: "methode", label: "14. Méthode : limiter le risque SEO en 5 étapes" },
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
          qui cadrent tout : selon Google, le type de redirection
          permanente n&apos;entraîne pas à lui seul de perte de
          PageRank — la note de popularité attribuée aux pages —,
          les redirections se conservent <strong>au moins un an</strong>,
          un site moyen est retraité en <strong>« quelques
          semaines »</strong>, et la consigne d&apos;or est de{" "}
          <strong>ne changer qu&apos;une chose à la fois</strong> —
          évitez de cumuler refonte et changement de domaine. Une
          refonte peut aussi améliorer la performance technique et
          contribuer au référencement : les Core Web Vitals font
          partie des nombreux signaux utilisés par les systèmes de
          classement, sans garantir à eux seuls un gain de position.
        </p>
        <GuideTable
          headers={["Votre scénario", "Niveau de risque", "Ce que Google demande"]}
          rows={[
            ["Refonte graphique/technique, adresses conservées", "Plus faible si contenus et accès restent stables", "Pas d'outil de changement d'adresse — contrôler néanmoins le rendu, les balises et le maillage"],
            ["Refonte avec adresses modifiées (même domaine)", "Moyen — dépend largement du plan de redirection", "301 une-à-une + nouveau sitemap dans la Search Console — PAS l'outil Changement d'adresse"],
            ["Changement de plateforme (WordPress, Wix → code moderne)", "Moyen — plus la migration des contenus", "Mêmes règles + vigilance noindex/robots.txt du site de test (section 7)"],
            ["Changement de domaine", "Élevé — 523 jours de récupération moyenne dans l'étude de domaines citée", "301 + outil Changement d'adresse ; séparer cette opération de la refonte"],
          ]}
        />

        <InfoBox variant="blue" title="Les 14 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>SEO (référencement naturel)</strong> : le travail qui aide vos pages à être comprises, indexées et trouvées dans les résultats non payants de Google.</li>
            <li><strong>Redirection 301</strong> : le panneau « déménagé définitivement » qui envoie visiteurs et Google de l&apos;ancienne adresse vers la nouvelle.</li>
            <li><strong>Mapping d&apos;URLs</strong> : le tableau de correspondance « ancienne adresse → nouvelle adresse », page par page.</li>
            <li><strong>Search Console</strong> : le tableau de bord gratuit de Google qui montre vos pages indexées, vos requêtes et vos erreurs.</li>
            <li><strong>Sitemap</strong> : le plan du site lisible par Google — la liste de toutes vos pages, à resoumettre après la bascule.</li>
            <li><strong>Crawl</strong> : le passage d&apos;un robot qui parcourt toutes les pages d&apos;un site — celui de Google, ou le vôtre pour l&apos;inventaire.</li>
            <li><strong>Préproduction (staging)</strong> : la copie de travail du nouveau site, cachée du public — et à cacher de Google aussi.</li>
            <li><strong>Noindex</strong> : l&apos;instruction « ne pas mettre cette page dans Google » — utile sur le site de test, mais bloquante si elle part en production.</li>
            <li><strong>Soft 404</strong> : une page que Google requalifie en erreur — le sort des redirections « tout vers l&apos;accueil ».</li>
            <li><strong>Core Web Vitals</strong> : les mesures de vitesse, de réactivité et de stabilité définies par Google — un signal parmi d&apos;autres pour ses systèmes de classement.</li>
            <li><strong>Refonte</strong> : reconstruire son site — design, technologie ou structure — en gardant (ou pas) ses adresses.</li>
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
          d&apos;infrastructure : aucun outil de changement d&apos;adresse
          n&apos;est requis si contenus et balises (les étiquettes
          invisibles — titre, description — que Google lit sur chaque
          page) restent servis correctement. Le risque lié aux adresses
          est alors réduit, sans garantie sur le trafic si d&apos;autres
          éléments changent.
        </p>
        <p>
          <strong>Deux : la refonte avec adresses
          modifiées, sur le même domaine</strong> — tout repose alors
          sur le plan de redirection (section 6) et le nouveau
          sitemap ; l&apos;outil « Changement d&apos;adresse » de la
          Search Console ne doit PAS être utilisé.{" "}
          <strong>Trois : le changement de domaine</strong> — le cas
          auquel cet outil est réservé, avec un risque supplémentaire.
        </p>
        <p>
          Vous
          avez compté quatre lignes dans le tableau de la section 1 ?
          La ligne « changement de plateforme » n&apos;est pas un
          quatrième scénario Google : c&apos;est un cas pratique courant,
          et il obéit aux règles du scénario un ou du
          scénario deux — selon que vos adresses changent ou non.
        </p>
        <p>
          Fil rouge de ce guide :{" "}
          <strong>Élodie, courtière en assurance à
          Annecy</strong>. Ce personnage est fictif : son scénario
          sert à suivre les décisions, pas à simuler une preuve
          client. Son WordPress date de 2019 et 60 % de ses contacts
          arrivent par Google, et une peur bleue de tout perdre en
          refondant. Dans sa tête, changer de plateforme, c&apos;est
          tout changer — donc forcément le scénario le plus risqué.
          En réalité, son nom de domaine ne bouge pas, et ses
          adresses de pages peuvent être conservées à
          l&apos;identique sur le nouveau socle (la méthode de la
          section 10) : <strong>scénario un, risque de migration
          d&apos;adresses réduit</strong>.
          Si quelques adresses devaient malgré tout changer, elle
          passerait simplement au scénario deux — celui du plan de
          redirection. Cette distinction va lui épargner beaucoup
          d&apos;angoisse et quelques erreurs.
        </p>

        <InfoBox variant="amber" title="La décision à prendre avant de demander des devis">
          <p>
            Nommez d&apos;abord votre scénario dans une phrase :
            domaine conservé ou changé, adresses conservées ou
            modifiées, contenus maintenus ou réécrits. Cette phrase
            fixe la procédure, le niveau de risque et les livrables à
            chiffrer. Si ce scénario n&apos;est pas encore défini, le
            projet n&apos;est pas prêt à être comparé sur le prix.
          </p>
          <p>
            Le choix appartient au dirigeant, car il engage le trafic
            et le calendrier commercial. Le prestataire doit en
            expliquer les conséquences et proposer la solution la moins
            risquée. Une recommandation technique sans scénario nommé
            n&apos;est pas encore une stratégie de migration.
          </p>
        </InfoBox>

        <h2 id="mythes">3. Les mythes qui circulent, démontés à la source</h2>
        <p>
          Certaines pages sur cette requête reprennent des chiffres
          sans source primaire identifiable. Comparons-les aux textes
          officiels et aux études citées ici.{" "}
          <strong>« Une 301 ne transfère que 90 % du jus SEO »</strong> :
          faux depuis 2016 — Gary Illyes (Google) a confirmé que les
          redirections permanentes ne font plus perdre de PageRank ;
          la doc officielle actuelle l&apos;écrit noir sur blanc.{" "}
          <strong>« Il existe une quarantaine SEO de 30 jours »</strong> :
          nous n&apos;en avons trouvé aucune trace dans la
          documentation Google consultée — le
          délai indiqué est « quelques semaines » de retraitement
          pour un site moyen, sans « quarantaine » punitive documentée.{" "}
          <strong>« Une refonte fait perdre 5-7 % / 30-50 % / 50-80 %
          du trafic »</strong> : trois fourchettes recopiées de blog
          en blog, sans étude primaire identifiable parmi les sources
          examinées. La documentation Google citée ne publie pas de
          perte moyenne. L&apos;étude chiffrée de Search Engine Journal
          (892 cas) porte exclusivement sur les{" "}
          <em>changements de domaine</em>, pas sur les refontes
          ordinaires. Son résultat de 17 % de sites n&apos;ayant pas
          retrouvé leur niveau pendant la période observée ne doit
          donc pas être transposé à une refonte sur le même domaine.
          La conclusion utile : un changement d&apos;adresses peut
          entraîner quelques semaines de retraitement, tandis que
          l&apos;ampleur et la durée des variations dépendent du
          scénario et de son exécution.
        </p>

        <h2 id="ce-que-dit-google">4. Ce que Google dit officiellement (au mot près)</h2>
        <GuideTable
          headers={["La règle officielle", "La source", "Ce que ça change pour vous"]}
          rows={[
            ["Un site petit/moyen est retraité en « quelques semaines »", "Doc « Site moves », Google Search Central", "Des fluctuations peuvent survenir pendant cette période ; comparez-les à l'état de référence"],
            ["Redirections à conserver « au moins 1 an »", "Doc « Site moves »", "Conservez-les au-delà de 3 mois et inscrivez la durée au contrat de maintenance"],
            ["« Les redirections permanentes ne causent aucune perte de PageRank »", "Doc « Site moves » + Gary Illyes (2016)", "Le mythe du « jus perdu » ne doit plus vous faire renoncer à une refonte utile"],
            ["Chaînes de redirections : 3 maxi idéalement, 10 sauts suivis au plus", "Doc « Site moves »", "Rediriger directement vers l'adresse finale — pas ancienne → intermédiaire → nouvelle"],
            ["« Planifiez vos changements l'un après l'autre, pas tout en même temps »", "Doc « Site moves »", "Séparez autant que possible la refonte et le changement de domaine"],
            ["Tout rediriger vers l'accueil = requalifié en erreur (soft 404)", "John Mueller (Google)", "Une cible sans rapport peut être traitée comme une erreur et ne pas transférer les signaux attendus"],
            ["« Les Core Web Vitals sont utilisés par nos systèmes de classement »", "Doc « Page experience »", "La performance peut contribuer au SEO parmi de nombreux signaux ; elle ne garantit pas un classement"],
          ]}
        />
        <p>
          Chaque ligne de ce tableau renvoie aux sources en fin de
          guide. En cas d&apos;affirmation contradictoire, revenez à la
          documentation et au périmètre exact de la règle citée.
        </p>

        <h2 id="avant">5. Avant la refonte : figer la photographie de votre SEO</h2>
        <p>
          L&apos;erreur de calendrier la plus coûteuse : commencer la
          liste de contrôle SEO au moment du lancement. Tout se joue{" "}
          <strong>avant</strong>, en trois inventaires.{" "}
          <strong>L&apos;export Search Console</strong>, d&apos;abord,
          à réaliser tôt : Google ne conserve
          que <strong>16 mois glissants</strong> de données — exportez
          maintenant la liste des pages et requêtes qui vous rapportent
          du trafic, c&apos;est la photographie de référence qui
          permettra de mesurer la refonte (et de prouver une
          régression, le cas échéant). <strong>Le crawl de
          référence</strong>, ensuite : un outil comme Screaming Frog
          (gratuit jusqu&apos;à 500 adresses, 245 €/an au-delà)
          parcourt votre site et dresse la liste exhaustive de ses
          pages — la base du mapping de la section 6, qui inclut les
          pages rarement consultées mais encore connues de Google.
          <strong>L&apos;inventaire des pages qui comptent</strong>,
          enfin : croiser les deux listes pour identifier les pages
          qui concentrent l&apos;essentiel du trafic —
          celles dont contenus, titres et balises devront être{" "}
          <strong>conservés, pas « améliorés » au passage</strong>.
          C&apos;est aussi le moment de trier : les pages sans trafic
          ni liens peuvent disparaître proprement (une vraie erreur
          404 ne pénalise pas le reste du site) plutôt que
          d&apos;être redirigées sans logique.
        </p>
        <p>
          Une image pour fixer l&apos;esprit de cette étape :
          l&apos;état des lieux avant travaux. Avant de rénover un local
          commercial, on photographie généralement l&apos;existant — votre
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
          Si vos adresses changent, ce document est central :{" "}
          <strong>le tableau de correspondance
          « ancienne adresse → nouvelle adresse », page par page</strong> —
          Google demande ce travail dans sa documentation de
          migration. Les règles d&apos;exécution :{" "}
          <strong>une redirection 301 par page, vers
          l&apos;équivalent exact</strong> — un raccourci risqué consiste
          à tout rediriger vers la page
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
          devis de refonte</strong> — sans ce livrable, le risque de
          migration reste insuffisamment contrôlé.
        </p>
        <p>
          Deux compléments que les redirections ne remplacent pas.{" "}
          <strong>Les liens internes du nouveau site</strong> — menu,
          pied de page, maillage entre pages — doivent pointer
          directement vers les nouvelles adresses : un site neuf dont
          les liens passent encore par les anciennes adresses fait
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
          socle — leur disparition peut supprimer des résultats
          enrichis, avec un effet possible sur la visibilité et les
          clics.
        </p>

        <GuideInlineCTA
          title="Une refonte en vue, et un trafic Google à protéger ?"
          description="Décrivez votre site en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées, avec un avis franc sur le niveau de risque de VOTRE scénario. Le Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si le projet se lance) inclut l'audit pré-refonte : export Search Console, crawl de référence et stratégie de migration."
          tags={["Réponse sous 24 h ouvrées", "Plan de redirection livré au contrat", "Score technique Lighthouse ≥ 95/100, au contrat"]}
          ctaLabel="Sécuriser ma refonte"
        />

        <h2 id="pendant">7. Pendant le chantier : les pièges du site de test</h2>
        <p>
          Le nouveau site se construit sur une{" "}
          <strong>préproduction</strong> — une copie de travail cachée
          du public. Deux points de vigilance symétriques concentrent
          une part importante du risque.{" "}
          <strong>Pendant le chantier : cacher la préproduction de
          Google</strong> (noindex, ou mieux, accès protégé par mot de
          passe) — sinon Google indexe le site de test et votre futur
          contenu entre en concurrence avec votre site actuel.{" "}
          <strong>Au lancement : penser à retirer ce verrou</strong> —
          le noindex ou le robots.txt bloquant oublié en production
          fait partie des causes fréquentes de disparition des
          résultats. Une recette de lancement permet de le prévenir :
          vérifier le robots.txt, chercher « noindex »
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
          votre activité — évitez autant que possible les semaines qui
          précèdent vos pics (fêtes, soldes, saison haute) : les
          fluctuations possibles des premières semaines (section 4)
          devraient tomber sur vos semaines les moins exposées, et
          l&apos;équipe qui a fait la bascule doit être disponible les
          jours suivants.
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
          le protocole de la section 9 ne peut pas distinguer une chute
          réelle d&apos;un trou de mesure. Prévoyez enfin un élément
          souvent omis : <strong>le plan de retour arrière</strong> —
          l&apos;ancien site conservé, restaurable pendant au moins
          les 4 à 8 semaines de la fenêtre de correction
          (section 12) — et réservé aux incidents majeurs constatés à
          J+1 (site inaccessible, verrou d&apos;indexation impossible
          à corriger à chaud) ; les anomalies de redirection, elles,
          se corrigent sans rebasculer. Cette procédure est rarement
          utilisée, mais elle réduit le délai de reprise lors d&apos;un
          incident majeur. Un détail d&apos;anticipation
          documenté : Google revisite plus intensément juste après
          une bascule — vérifiez que votre hébergement encaissera ce
          surcroît de passage.
        </p>
        <p>
          Trois pièges techniques du jour J, rarement détaillés dans
          les listes de contrôle généralistes que nous avons
          consultées :{" "}
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

        <InfoBox variant="amber" title="Feu vert ou feu rouge : qui autorise la bascule ?">
          <p>
            Le prestataire apporte les preuves ; le client donne le feu
            vert en fonction de son risque commercial. Avant de lancer,
            vous devez pouvoir ouvrir et comprendre les éléments
            suivants :
          </p>
          <ul className="list-disc pl-4 space-y-1.5">
            <li>l&apos;inventaire de référence et la liste des pages qui rapportent du trafic ;</li>
            <li>le tableau de correspondance validé et son rapport de test ;</li>
            <li>la liste de contrôle de mise en ligne, avec une personne nommée pour chaque vérification ;</li>
            <li>la procédure de retour arrière, relue avant d&apos;en avoir besoin ;</li>
            <li>les accès à la Search Console et à la mesure des conversions sur un compte qui vous appartient.</li>
          </ul>
          <p>
            Une preuve manquante n&apos;est pas un détail à régler
            après. C&apos;est un motif de report de la bascule.
          </p>
        </InfoBox>

        <h2 id="apres">9. Après : le protocole de surveillance daté (J+1 → M+3)</h2>
        <GuideTable
          headers={["Échéance", "Quoi vérifier", "Repère opérationnel interne"]}
          rows={[
            ["J+1", "Robots.txt, noindex, sitemap soumis, échantillon de 301 testé à la main", "Toute ancienne adresse importante en erreur = correction immédiate"],
            ["S+1", "Search Console : erreurs de couverture, soft 404, pages « explorées, non indexées »", "Une vague de soft 404 = redirections non pertinentes à revoir"],
            ["M+1", "Courbe de clics/impressions vs l'export de référence (section 5), Core Web Vitals", "Baisse de 15 à 30 % persistante = audit du plan de redirection ; au-delà de 30 % = urgence (section 11)"],
            ["M+3", "Positions sur vos requêtes clés vs la photographie de référence, liens entrants (section 5) à faire mettre à jour", "Sans tendance à la stabilisation, diagnostic complet ; les 301 restent en place ≥ 1 an"],
          ]}
        />
        <p>
          Ce protocole précise quoi regarder et quand réagir. Les
          fourchettes de 15 % et 30 % sont nos repères opérationnels
          internes : Google ne les publie pas et elles ne constituent
          ni des standards universels ni une prévision. Interprétez-les
          selon la saisonnalité, la qualité du suivi, la surface du site
          modifiée et la photographie de référence. Google documente
          quelques semaines de retraitement après un changement
          d&apos;adresses, pas un pourcentage de baisse attendu. Dans
          notre scénario pédagogique, nous posons l&apos;hypothèse que
          la courbe d&apos;Élodie reste stable en S+1, puis que ses
          contenus sont enrichis après stabilisation afin de ne pas
          cumuler les changements.
        </p>

        <InfoBox variant="amber" title="En clair : ce que vous pouvez vérifier vous-même, sans être technicien">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Les redirections</strong> : prenez 10 anciennes adresses importantes (vos pages services, vos meilleurs articles) et tapez-les dans le navigateur — chacune doit atterrir sur sa nouvelle équivalente, pas sur l&apos;accueil ni sur une erreur.</li>
            <li><strong>Le verrou d&apos;indexation</strong> : ouvrez votresite.fr/robots.txt (pas de « Disallow: / » global) et vérifiez plusieurs pages clés — clic droit → « Afficher le code source de la page », puis Ctrl + F (Cmd + F sur Mac) et tapez « noindex ». Son absence réduit ce risque ; la Search Console permet de compléter le contrôle.</li>
            <li><strong>La courbe Search Console</strong> : menu « Performances », clics et impressions comparés semaine par semaine à votre export de référence — c&apos;est votre tableau de bord, et il doit rester sur VOTRE compte.</li>
            <li><strong>La vitesse</strong> : testez plusieurs pages sur PageSpeed Insights. L&apos;outil distingue les données de visites réelles, lorsqu&apos;elles existent, et l&apos;audit Lighthouse simulé. Pour les Core Web Vitals, les seuils « bons » sont : LCP sous 2,5 s, INP sous 200 ms et CLS sous 0,1. Notre score Lighthouse contractualisé est un engagement technique mesuré dans des conditions définies ; ce n&apos;est ni le score utilisé directement pour classer une page, ni une garantie SEO.</li>
          </ul>
        </InfoBox>

        <h2 id="wordpress-vers-nextjs">10. Le cas signature : sortir de WordPress vers Next.js</h2>
        <p>
          Une option encore peu détaillée dans les guides généralistes
          consiste à quitter WordPress ou un éditeur en ligne pour du
          code moderne (React/Next.js). Le développement assisté par IA
          peut en réduire certains coûts, sans en faire la bonne
          solution pour chaque projet. Notre{" "}
          <Link href="/guides/nextjs-ou-wordpress">comparatif
          Next.js ou WordPress</Link> détaille pourquoi, et notre{" "}
          <Link href="/guides/migrer-wordpress-vers-nextjs">guide de
          la migration WordPress vers Next.js</Link> en donne le
          processus complet, les prix en euros et les cas où il ne
          faut pas la lancer. Côté SEO, la
          méthode tient en trois principes. <strong>Conserver les
          slugs</strong>, c&apos;est-à-dire la partie propre à chaque
          page dans son adresse : les adresses peuvent rester
          strictement identiques sur le nouveau socle — scénario 1,
          risque de migration d&apos;adresses réduit ; quand certaines changent, le nouveau
          socle gère les redirections proprement, dans un fichier
          unique dont chaque modification reste tracée et peut être
          auditée. <strong>Servir les pages en HTML complet</strong>{" "}
          (rendu côté serveur) : les frameworks modernes bien
          configurés servent à Google des pages complètes — le
          contraire du mythe « le JavaScript est mauvais pour le
          SEO ». <strong>Convertir la dette de vitesse en
          gain</strong> : un WordPress chargé d&apos;extensions
          accumule des années de lest ; la migration Personio
          (WordPress → Next.js, publiée par Vercel — source éditeur,
          à lire comme telle) rapporte une stabilité visuelle améliorée
          de plus de 90 % et une vitesse d&apos;affichage mobile
          améliorée de 29 %. Ce résultat reste propre au projet
          Personio. Deux autres études de cas illustrent un lien
          possible avec la conversion : web.dev rapporte chez Renault
          <strong> +13 % de conversions après une amélioration d&apos;une
          seconde du LCP</strong>, et Deloitte × Google rapporte
          +8,4 % après un gain de 0,1 seconde sur un échantillon retail.
          Ces résultats ne prédisent pas le gain d&apos;un autre site.
          Notre engagement Lighthouse 95+ porte uniquement sur une
          mesure technique en laboratoire, dans des conditions
          définies ; il ne garantit ni classement, ni trafic, ni
          conversion. Dernier
          conseil de méthode pour les gros sites : la migration peut
          être <strong>incrémentale</strong> — le nouveau socle prend
          le relais page par page, sans bascule générale, exactement la
          logique « une chose à la fois » de Google. C&apos;est le
          chemin suivi par Élodie dans notre scénario pédagogique : son WordPress
          de 2019 reconstruit en Next.js, adresses conservées à la
          lettre — le résultat se lit en section 9. Ce scénario est le
          quotidien de notre{" "}
          <Link href="/agence-next-js">agence Next.js</Link>, migrations
          WordPress comprises.
        </p>

        <h2 id="urgence">11. Plan d&apos;urgence : « j&apos;ai déjà perdu mon trafic »</h2>
        <p>
          Si vous lisez ce guide après la baisse, voici un ordre
          pratique de vérification. Certaines chutes peuvent être
          corrigées lorsque leur cause est identifiée rapidement.{" "}
          <strong>Un : le verrou oublié</strong> —
          ouvrez votresite.fr/robots.txt et cherchez « noindex » dans
          le code source de vos pages clés ; c&apos;est une cause
          fréquente et souvent rapide à corriger.{" "}
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
          vitesse</strong> — testez sur PageSpeed Insights. La Search
          Console aide à objectiver les pages en erreur, l&apos;indexation
          et les requêtes perdues. Et si le
          prestataire qui a causé la chute est aux abonnés absents,
          ces contrôles constituent un point de départ utile pour un
          audit professionnel.
        </p>

        <h2 id="contrat">12. Le volet contractuel : ce que votre devis doit garantir</h2>
        <p>
          La réduction du risque SEO doit se traduire par des
          livrables vérifiables — quatre clauses à examiner avec tout
          prestataire. <strong>Le plan de redirection comme
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
          <strong>Un engagement technique mesurable</strong> : nous
          contractualisons un score minimal de 95 sur 100 à Lighthouse,
          l&apos;outil open source de Google qui audite une page dans des
          conditions simulées précisées au contrat. Ce score mesure une
          qualité technique ; il n&apos;est pas utilisé directement comme
          score de classement et ne constitue pas une garantie SEO. Une
          vigilance de bon sens : un devis de refonte{" "}
          <strong>sans ligne « migration SEO »</strong> n&apos;est pas
          moins cher — il transfère simplement le risque sur vous
          (notre <Link href="/guides/prix-refonte-site-internet">guide
          du prix d&apos;une refonte</Link> chiffre ce poste à 1 500 à
          10 000 € selon la taille du site). Pour l&apos;accompagnement
          récurrent qui suit la bascule, notre guide du{" "}
          <Link href="/guides/prix-referencement-naturel">prix du
          référencement naturel</Link> convertit chaque forfait mensuel
          en heures de travail réelles.
        </p>

        <p>
          Pour rendre ces clauses vérifiables, le devis doit aussi
          répartir les responsabilités. « Pris en charge » ne suffit
          pas : chaque action attend un propriétaire, un livrable et une
          preuve d&apos;acceptation.
        </p>
        <GuideTable
          headers={["Sujet", "Responsabilité du client", "Responsabilité du prestataire", "Preuve à recevoir"]}
          rows={[
            ["Photographie de départ", "Donner les accès et valider les pages vitales pour l'activité", "Exporter, parcourir le site et croiser les listes", "Exports datés et inventaire partageable"],
            ["Correspondance des adresses", "Valider qu'une ancienne page mène au bon équivalent métier", "Rédiger, implémenter et tester chaque redirection", "Tableau complet et rapport de test"],
            ["Mise en ligne", "Choisir la fenêtre commerciale et autoriser la bascule", "Exécuter la liste de contrôle et préparer le retour arrière", "Compte rendu de recette et procédure de restauration"],
            ["Surveillance", "Rester propriétaire des comptes et signaler l'impact commercial", "Contrôler les erreurs et corriger dans la fenêtre prévue", "Relevés comparés à l'état de départ"],
          ]}
        />

        <InfoBox variant="amber" title="Les signaux d&apos;alerte avant signature">
          <ul className="list-disc pl-4 space-y-1.5">
            <li>le référencement est renvoyé à « après la mise en ligne » ;</li>
            <li>le devis ne nomme ni inventaire, ni tableau de correspondance, ni rapport de test ;</li>
            <li>toutes les anciennes pages doivent être renvoyées vers l&apos;accueil ;</li>
            <li>la Search Console, le domaine ou l&apos;hébergement resteraient au nom du prestataire ;</li>
            <li>aucun responsable n&apos;est nommé pour le feu vert, le retour arrière ou la surveillance.</li>
          </ul>
          <p>
            Chacun de ces points mérite une clarification écrite avant
            de comparer le prix. Plusieurs signaux réunis indiquent que
            le risque a simplement été sorti du devis et laissé au
            client.
          </p>
        </InfoBox>

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>0 %</strong> : selon Google, une redirection permanente ne perd pas de PageRank du seul fait de son type ; cela ne garantit pas le maintien de tout le trafic.</li>
            <li><strong>≥ 1 an</strong> : la durée officielle de conservation des redirections — à écrire dans le contrat de maintenance.</li>
            <li><strong>« Quelques semaines »</strong> : l&apos;ordre de grandeur donné par Google pour retraiter la plupart des pages d&apos;un site petit ou moyen après un changement d&apos;adresses.</li>
            <li><strong>523 jours</strong> : la récupération moyenne dans l&apos;échantillon de 892 changements de domaine étudiés ; 17 % n&apos;avaient pas récupéré pendant la période observée. Ces résultats ne concernent pas les refontes ordinaires.</li>
            <li><strong>+13 %</strong> : le gain de conversions observé dans le seul cas Renault après une amélioration d&apos;une seconde du LCP — un résultat contextuel, pas une promesse pour un autre site.</li>
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
          ce poste traite directement le risque de migration et doit
          rester visible dans le devis. Chez nous, il est intégré à la
          prestation de{" "}
          <Link href="/services/referencement-google">référencement
          Google</Link>.{" "}
          <strong>L&apos;outillage</strong> est marginal : Screaming
          Frog gratuit jusqu&apos;à 500 adresses (245 €/an au-delà),
          Search Console et PageSpeed gratuits. <strong>Chez
          nous</strong> : la refonte vers un socle moderne suit la
          grille publique — 6 900 €, 14 900 € ou 22 000 € et plus
          selon l&apos;ambition — <strong>plan de migration SEO
          inclus</strong>, score technique Lighthouse 95+
          contractualisé sans garantie de classement, et le{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à
          100 %)</strong> comme porte d&apos;entrée : il produit
          l&apos;audit pré-refonte de la section 5 — export Search
          Console, crawl de référence, stratégie de migration — avant
          tout engagement. Le calcul à poser face à un devis
          sans volet SEO : combien vaut un mois de votre trafic
          Google ?
        </p>

        <h2 id="methode">14. Méthode : limiter le risque SEO en 5 étapes</h2>
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
            changement de domaine : planifiez-le séparément
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
            J+1, S+1, M+1, M+3, avec les repères opérationnels internes
            de la section 9 — et gardez les redirections au moins un an.
          </li>
        </ol>
        <p>
          Et si vous préférez confier la manœuvre à une équipe qui la
          contractualise : <strong>refonte sur socle moderne dès
          6 900 €, plan de migration SEO inclus, score technique
          Lighthouse 95+ contractualisé sans garantie de classement</strong>{" "}
          (méthode{" "}
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
          circulent » sans source primaire identifiée parmi les
          références consultées (5-7 %, 30-50 %, 50-80 %,
          « quarantaine de 30 jours ») sont signalés comme tels en
          section 3.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes d&apos;alerte de 15 % et 30 % sont des
            repères opérationnels internes, pas des standards Google
            ni des seuils universels. Chaque migration a son contexte,
            et un audit du site permet d&apos;évaluer son risque.
            Les règles Google citées évoluent : vérifiez la
            documentation officielle en cas de doute.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
