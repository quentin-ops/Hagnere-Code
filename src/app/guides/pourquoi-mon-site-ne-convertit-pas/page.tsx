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

const guide = getGuide("pourquoi-mon-site-ne-convertit-pas");

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
  wordCount: 5300,
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
      "Taux de conversion",
      "Mesure d'audience",
      "Consentement et RGPD",
      "Acquisition de clients",
      "Refonte de site internet",
      "Statistiques web",
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
    { "@type": "ListItem", position: 3, name: "Pourquoi mon site ne convertit pas", item: guideUrl(guide) },
  ],
});

const faqItems = [
  {
    question: "J'ai des visiteurs mais le téléphone ne sonne pas : c'est normal ?",
    answer:
      "Peut-être, et c'est la première chose à vérifier avant de dépenser un euro. Le téléphone qui ne sonne pas et le site qui ne convertit pas sont deux constats différents, parce que la majorité des contacts d'une entreprise artisanale ou de services ne passe pas par le formulaire. Comptez pendant trente jours : affichez sur le site un numéro de téléphone utilisé nulle part ailleurs, et demandez systématiquement à la personne qui décroche comment le client vous a trouvé. C'est gratuit, cela ne demande aucun outil, et dans notre expérience le nombre de contacts réels dépasse largement le nombre de formulaires. Tant que ce comptage n'est pas fait, vous ne savez pas si votre site convertit.",
  },
  {
    question: "Avec 500 visites par mois, je devrais recevoir combien de demandes ?",
    answer:
      "Personne ne peut vous le dire honnêtement, et méfiez-vous de qui vous répond par un chiffre. Les tableaux de « taux de conversion moyen par secteur » qui circulent en France n'ont aucune source primaire : la FEVAD, seule fédération professionnelle française à publier des données de référence sur le commerce en ligne, publie des volumes, des paniers moyens et des nombres de transactions — mais pas de taux de conversion sectoriel. Surtout, ces tableaux ne déclarent jamais leur dénominateur : un même site affiche un taux qui varie du simple au double selon qu'on divise les contacts par les sessions, par les utilisateurs ou par les visiteurs uniques. Sans dénominateur déclaré, une comparaison sectorielle n'est pas contestable, elle est dénuée de sens.",
  },
  {
    question: "Est-ce mon site le problème, ou personne ne cherche ce que je vends ?",
    answer:
      "C'est la deuxième branche de l'arbre de diagnostic, et elle est souvent la bonne. Un site peut très bien convertir excellemment des visites qui n'ont aucune intention d'achat. Le test : ouvrez votre Search Console et regardez les requêtes qui vous amènent des visiteurs. Si ce sont des questions générales — « comment poser un parquet », « prix moyen d'une véranda » — vous captez des curieux, pas des acheteurs. Si ce sont des requêtes avec une intention nette — votre métier plus votre ville, « devis », « près de chez moi » — alors le trafic est bon et le problème est ailleurs. Un site qui reçoit les mauvaises visites n'a pas besoin d'être refait : il a besoin d'être trouvé sur d'autres requêtes.",
  },
  {
    question: "Mon agence dit qu'il faut tout refaire. Comment savoir si c'est justifié ?",
    answer:
      "En posant une question simple : sur quelles données repose ce diagnostic ? Une refonte se justifie sur des faits observables — un site inutilisable sur téléphone, un temps d'affichage qui dépasse largement les seuils de Google, une technologie qui n'est plus maintenue, un contenu qui ne dit pas ce que vous vendez. Elle ne se justifie pas sur un taux de conversion mal mesuré, ni sur un chiffre de benchmark sans source. Nous vendons des refontes, donc prenez cette réponse pour ce qu'elle est : nous avons intérêt à ce que vous en commandiez une. C'est précisément pourquoi la section 13 de ce guide liste les sept signes chiffrés qui disent de NE PAS refondre.",
  },
  {
    question: "Je reçois des appels sans savoir s'ils viennent du site. Comment le savoir ?",
    answer:
      "Deux méthodes, l'une gratuite et l'autre à quelques centaines d'euros par an. La gratuite : demandez à chaque personne qui décroche de poser la question « comment nous avez-vous trouvés ? » et de noter la réponse dans un tableur. C'est imparfait mais cela donne un ordre de grandeur en un mois. La payante : affichez sur le site un numéro de téléphone dédié, utilisé nulle part ailleurs — ni sur vos devis, ni sur votre camionnette, ni sur votre fiche Google. Tout appel sur ce numéro vient donc du site. Précision utile : compter un appel n'est pas ficher quelqu'un, vous ne traitez aucune donnée personnelle en incrémentant un compteur.",
  },
  {
    question: "Mon site est beau, tout le monde me le dit. Pourquoi ça ne rapporte rien ?",
    answer:
      "Parce que beau et convaincant sont deux choses différentes, et parce que le chiffre qu'on vous a probablement cité pour vendre le design est faux. On lit partout que « 75 % des jugements de crédibilité reposent sur le design », attribué à Stanford. Aucune étude de Stanford ne contient ce chiffre. L'étude réelle, menée en 2002 sur 2 684 participants, établit que 46,1 % des participants citent l'attrait visuel parmi les critères ayant nourri leur jugement — soit 46 %, pas 75 %, et « citent parmi les critères », pas « repose sur ». Elle date d'avant le mobile, les réseaux sociaux et les avis Google. Un beau site qui ne dit ni ce que vous faites, ni pour qui, ni combien, ne convertit pas mieux qu'un site laid qui le dit.",
  },
  {
    question: "Google Analytics affiche 1,2 %. C'est bon ou mauvais pour mon métier ?",
    answer:
      "Ce chiffre est faux, et il est faux dans les deux sens à la fois — c'est ce que ce guide démontre en section 3. Il est trop bas parce que vos appels téléphoniques, vos courriels directs et vos visites en boutique déclenchés par le site ne sont comptés nulle part. Il est trop haut parce que les visiteurs qui refusent le bandeau cookies ou utilisent un bloqueur n'apparaissent pas au dénominateur, qui est donc sous-estimé. Un guide qui ne corrigerait que dans un sens fabriquerait un autre chiffre faux. La seule sortie honnête est de raisonner en fourchette, jamais en décimale — et de regarder le nombre de contacts en valeur absolue plutôt que le pourcentage.",
  },
  {
    question: "Depuis le bandeau cookies mes chiffres se sont effondrés. Je perds des clients ?",
    answer:
      "Non : vous perdez des statistiques. Les visiteurs qui refusent le bandeau viennent toujours sur votre site, ils deviennent simplement invisibles pour votre outil de mesure. Un point mérite d'être connu, parce qu'il est documenté par Google lui-même : la modélisation censée reboucher ces trous ne s'active qu'au-dessus de seuils très élevés — de l'ordre d'un millier d'événements refusés par jour et d'un millier d'utilisateurs consentants par jour, sur plusieurs jours. Google précise même qu'atteindre ces seuils ne garantit pas l'éligibilité. Un site à 500 visites par mois représente une quinzaine d'événements par jour : il est cent fois en dessous. Sa mesure est structurellement amputée, et rien ne la corrige.",
  },
  {
    question: "J'ai 2 000 € à mettre. Je commence par quoi ?",
    answer:
      "Par ce qui ne coûte rien, puis par ce qui coûte le moins. Un : comptez vos contacts réels pendant trente jours, tous canaux confondus. Zéro euro. Deux : mesurez votre délai de rappel — si vous rappelez en plus de vingt-quatre heures, c'est là que se perd votre argent, et le corriger coûte zéro euro aussi. Trois : vérifiez la vitesse de votre site sur mobile, gratuitement. Quatre : réécrivez vos deux pages les plus visitées pour qu'elles disent ce que vous faites, pour qui, et des fourchettes de prix. C'est le poste où vos 2 000 € produisent le plus d'effet. Ce qui n'est pas dans cette liste : une refonte complète, qui à ce budget-là ne se fera pas correctement.",
  },
  {
    question: "Mon formulaire demande le budget et le téléphone : ça fait fuir les gens ?",
    answer:
      "Cela réduit le nombre de demandes, et c'est parfois exactement ce que vous voulez. Un formulaire court remplit votre boîte de contacts peu qualifiés ; un formulaire qui demande le budget et le délai en fait passer moins mais les fait passer mieux. Le bon arbitrage dépend de ce qui vous manque : si vous croulez sous des demandes non sérieuses, allongez le formulaire. Si votre problème est le volume, raccourcissez-le et posez les questions au téléphone. Une règle qui vaut dans les deux cas : ne demandez jamais une information dont vous ne ferez rien, et expliquez en une ligne ce qui va se passer après l'envoi.",
  },
  {
    question: "Les demandes que je reçois ne sont pas sérieuses. Comment faire ?",
    answer:
      "C'est un problème de trafic ou de cadrage, pas de site. Trois leviers, du plus rapide au plus long. Affichez des fourchettes de prix indicatives : rien ne filtre mieux que le prix, et cela vous évite les rendez-vous inutiles. Précisez votre périmètre — les métiers que vous faites, ceux que vous ne faites pas, la zone que vous couvrez. Et regardez sur quelles requêtes vous êtes trouvé : si ce sont des questions générales, vous attirez des curieux. Notre guide du prix du référencement naturel explique comment réorienter un portefeuille de requêtes vers l'intention d'achat.",
  },
  {
    question: "Si je change quelque chose, au bout de combien de temps je peux conclure ?",
    answer:
      "Cela dépend de votre fenêtre de conversion, c'est-à-dire du délai entre la première visite et la signature. Sur un escalier sur mesure ou un marché avec un promoteur, un contact de janvier signe en juin : juger un changement sur trente jours n'a alors aucun sens. Deuxième contrainte, plus dure : à quelques contacts par mois, un écart de deux ou trois en valeur absolue fait « doubler » votre taux sans que rien n'ait changé. La bonne pratique est de comparer des groupes de visiteurs arrivés sur une même période et suivis jusqu'à leur décision, sur au moins deux fois votre fenêtre de conversion — et d'accepter que le résultat reste un ordre de grandeur.",
  },
  {
    question: "Faut-il tester deux versions d'une page quand on a peu de visites ?",
    answer:
      "Non, et le calcul est sans appel. Pour détecter une amélioration de 20 % à partir d'une base de 2 % de conversion, avec les niveaux de confiance et de puissance standard, il faut environ 19 230 visiteurs par version, soit 38 460 au total. Sur une base de 1 %, il en faut 38 852 par version. Même en ne cherchant qu'un effet énorme — plus 50 % — il faut encore 3 077 visiteurs par version. À 300 visites par mois, atteindre 38 460 visiteurs demande près de onze ans. Ce n'est pas une opinion, c'est une identité mathématique. Toute page qui recommande cette méthode à une PME de ce volume recommande une chose impossible. Les cartes de chaleur et les enregistrements de session, en revanche, restent utiles à faible volume : ils servent à comprendre, pas à mesurer.",
  },
  {
    question: "Dois-je payer de la publicité, ou est-ce jeté par la fenêtre ?",
    answer:
      "La publicité amplifie ce qui existe : elle multiplie votre trafic, donc elle multiplie aussi bien vos contacts que votre taux d'échec. Deux conditions avant de dépenser. Un : vous devez savoir combien de contacts vous obtenez aujourd'hui, réellement, tous canaux confondus — sinon vous ne saurez jamais si la publicité a produit quelque chose. Deux : vous devez rappeler vite. Payer pour des contacts que vous traitez en trois jours revient à acheter des prospects pour les laisser refroidir. Si ces deux conditions sont remplies, la publicité est le levier le plus rapide qui existe, et bien plus rapide que le référencement naturel.",
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
          { label: "Pourquoi mon site ne convertit pas" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Avant de refaire votre site, prouvez qu'il est en cause — et dans beaucoup de cas il ne l'est pas. Le taux affiché par vos statistiques est faux dans les deux sens à la fois, les chiffres de référence qu'on vous oppose sont démontés ici à la source, et les sept signes chiffrés qui disent de NE PAS refondre sont donnés, contre notre propre intérêt."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Votre taux est faux dans les deux sens", description: "", color: "violet" },
          { number: "02", title: "7 signes qui disent de NE PAS refondre", description: "", color: "blue" },
          { number: "03", title: "Une simulation à 14 900 € que le diagnostic remet en cause", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/pourquoi-mon-site-est-lent", label: "Pourquoi mon site est lent" },
          { href: "/guides/prix-refonte-site-internet", label: "Prix d'une refonte" },
          { href: "/guides/prix-referencement-naturel", label: "Prix du référencement" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/services/audit-technique", label: "Audit technique" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Conversion : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Avant de dépenser un euro,{" "}
          <strong>il faut prouver que votre site est en cause</strong> — et
          dans une bonne partie des cas que nous voyons, il ne l&apos;est pas.
          Le chiffre affiché par vos statistiques est faux, et il l&apos;est{" "}
          <strong>dans les deux sens à la fois</strong> : trop bas parce que
          vos appels ne sont comptés nulle part, trop haut parce
          qu&apos;une partie de vos visiteurs est invisible.
        </p>

        <InfoBox variant="blue" title="Ce guide est écrit contre notre propre intérêt commercial">
          Nous vendons des refontes à 6 900, 14 900 et 22 000 €. Nous avons
          donc intérêt à ce que vous concluiez que votre site est le problème.
          <br />
          <br />
          Le fil rouge de ce guide est pourtant <strong>un scénario fictif
          composite — ni client ni témoignage réel — autour d&apos;un devis
          de refonte à 14 900 € que la méthode conduirait à déconseiller</strong>,
          et la section 13 donne
          les sept signes chiffrés qui disent de ne pas refondre. Si aucune
          section de ce guide ne vous dissuade d&apos;acheter chez nous, nous
          l&apos;aurons raté.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 30 secondes" },
            { id: "definition", label: "2. « Taux de conversion » : la définition que personne ne donne" },
            { id: "chiffre-faux", label: "3. Pourquoi le chiffre affiché est faux — dans les deux sens" },
            { id: "compter", label: "4. Compter ce qui n'est compté nulle part" },
            { id: "volume", label: "5. Combien de visites, et sur combien de temps ?" },
            { id: "chiffres-opposes", label: "6. Les chiffres qu'on vous oppose, source par source" },
            { id: "arbre", label: "7. L'arbre de diagnostic : sept questions, dans cet ordre" },
            { id: "trafic", label: "8. Le trafic : et si vous convertissiez bien les mauvaises visites ?" },
            { id: "page", label: "9. La page : ce qui empêche de demander un devis" },
            { id: "confiance", label: "10. Les signaux de confiance propres au marché français" },
            { id: "apres-formulaire", label: "11. Après le formulaire : le maillon humain" },
            { id: "pas-le-site", label: "12. Et si le problème n'était pas le site ?" },
            { id: "ne-pas-refaire", label: "13. Les sept signes qui disent de NE PAS refaire" },
            { id: "prix-correctifs", label: "14. Le prix réel de chaque correctif" },
            { id: "methode", label: "15. Méthode : votre diagnostic en 5 étapes" },
          ]}
        />

        <InfoBox variant="amber" title="Le scénario fictif composite : Sylvain, menuiserie-agencement à Faverges">
          Onze salariés, 1,6 M€ de chiffre d&apos;affaires. Moitié
          particuliers — escaliers, dressings sur mesure — moitié marchés de
          second œuvre pour des promoteurs annéciens. Son site, refait en
          mars 2024 pour <strong>9 200 €</strong>, affiche{" "}
          <strong>610 sessions et 7 formulaires par mois</strong>, soit{" "}
          <strong>1,15 %</strong>.
          <br />
          <br />
          Dans l&apos;hypothèse, il conclurait que son site ne convertit pas
          et demanderait un devis de refonte estimé à <strong>14 900 €</strong>.
          Le diagnostic conduirait à ne pas le signer avant d&apos;avoir compté
          pendant trente jours. La suite du scénario traverse tout ce guide.
        </InfoBox>

        <h2 id="reponse-rapide">1. La réponse en 30 secondes</h2>
        <p>
          Sept causes possibles, et elles doivent être examinées{" "}
          <strong>dans cet ordre</strong>. Sauter une étape, c&apos;est
          risquer de corriger la mauvaise.
        </p>
        <GuideTable
          headers={["#", "La question", "Si la réponse est mauvaise"]}
          rows={[
            ["1", "Mesurez-vous correctement ?", "Vous ne savez pas si vous avez un problème. Commencez ici"],
            ["2", "Avez-vous assez de volume pour conclure ?", "Aucune décision n'est fondée. Ne changez rien encore"],
            ["3", "Le trafic a-t-il une intention d'achat ?", "Vous convertissez peut-être très bien de mauvaises visites"],
            ["4", "La page dit-elle ce que vous vendez, à qui, et combien ?", "C'est le correctif le plus rentable du guide"],
            ["5", "Les signaux de confiance sont-ils là ?", "Le visiteur hésite et repart chez un concurrent"],
            ["6", "Rappelez-vous vite, et relancez-vous ?", "Vous perdez des clients déjà acquis — le plus coûteux"],
            ["7", "L'offre et le prix sont-ils justes ?", "Aucun site au monde ne le rattrapera"],
          ]}
        />
        <p>
          Le point souvent négligé est le suivi commercial&nbsp;: un rappel tardif
          ou l&apos;absence de relance peut annuler les efforts du site. Mesurez ce
          maillon séparément avant d&apos;attribuer toute la baisse à l&apos;interface.
        </p>

        <h2 id="definition">2. « Taux de conversion » : la définition que personne ne donne</h2>
        <p>
          Un même site affiche un taux qui{" "}
          <strong>varie du simple au double</strong> selon ce qu&apos;on met
          au numérateur et au dénominateur. C&apos;est la raison pour laquelle
          les comparaisons de secteur ne veulent rien dire.
        </p>
        <GuideTable
          headers={["Ce que vous divisez", "Effet sur le chiffre affiché"]}
          rows={[
            ["Contacts ÷ sessions", "Le plus bas : un même client revenu 3 fois compte 3 fois au dénominateur"],
            ["Contacts ÷ utilisateurs", "Plus élevé : le client revenu 3 fois ne compte qu'une fois"],
            ["Formulaires seuls ÷ sessions", "Très bas : ignore appels, courriels et visites"],
            ["Tous contacts ÷ sessions", "Le chiffre honnête, mais il demande de compter à la main"],
            ["Devis signés ÷ sessions", "Le seul qui parle d'argent — et le plus rarement calculé"],
          ]}
        />
        <InfoBox variant="emerald" title="La question à poser avant tout benchmark">
          Quand on vous montre un tableau de « taux de conversion moyen par
          secteur », posez une seule question :{" "}
          <strong>quel est le dénominateur ?</strong> Dans la quasi-totalité
          des cas, il n&apos;est pas déclaré — et sans lui, la comparaison
          n&apos;est pas discutable, elle est arithmétiquement dénuée de sens.
          <br />
          <br />
          Deuxième signal d&apos;alerte : la précision décimale. Un tableau
          qui annonce « artisan 3,2 %, B2B 1,8 % » affiche une précision
          qu&apos;aucune méthodologie plausible ne permet d&apos;atteindre.
        </InfoBox>

        <h2 id="chiffre-faux">3. Pourquoi le chiffre affiché est faux — dans les deux sens</h2>
        <p>
          C&apos;est le cœur de ce guide, et le point que ne traite aucune
          page concurrente. Vos statistiques se trompent{" "}
          <strong>simultanément dans les deux directions</strong>.
        </p>
        <GuideTable
          headers={["Le biais", "Ce qu'il fausse", "Dans quel sens"]}
          rows={[
            ["Appels, courriels directs, visites en boutique", "Le numérateur : ces contacts ne sont comptés nulle part", "Votre taux paraît TROP BAS"],
            ["Refus du bandeau de consentement", "Le dénominateur : ces visiteurs sont invisibles", "Votre taux paraît TROP HAUT"],
            ["Bloqueurs de publicité", "Le dénominateur : le script de mesure ne se charge pas", "Votre taux paraît TROP HAUT"],
            ["Un client sur téléphone puis sur ordinateur", "Compté comme deux personnes distinctes", "Votre taux paraît TROP BAS"],
          ]}
        />
        <InfoBox variant="blue" title="Le seuil que Google documente lui-même, et que presque personne ne cite">
          Google propose une <strong>modélisation</strong> censée estimer les
          visites qu&apos;il n&apos;a pas eu le droit de mesurer. Sa
          documentation officielle en donne les conditions
          d&apos;activation : de l&apos;ordre de{" "}
          <strong>1 000 événements par jour</strong> avec consentement refusé
          pendant au moins sept jours, <strong>et</strong> au moins{" "}
          <strong>1 000 utilisateurs quotidiens</strong> ayant consenti sur au
          moins sept des vingt-huit derniers jours. Google précise en outre
          qu&apos;atteindre ces seuils{" "}
          <strong>ne garantit pas</strong> l&apos;éligibilité.
          <br />
          <br />
          Faites le calcul pour vous : un site à 500 visites par mois génère
          une quinzaine d&apos;événements par jour. Il est{" "}
          <strong>plusieurs dizaines de fois en dessous du seuil</strong>. Sa
          mesure n&apos;est donc pas approximative — elle est amputée, et rien
          ne la corrige. C&apos;est un fait documenté par l&apos;éditeur de
          l&apos;outil lui-même.
        </InfoBox>
        <InfoBox variant="amber" title="Nous ne vous donnerons pas le pourcentage que vous perdez">
          Vous lirez souvent que « le consentement et les bloqueurs vous font
          perdre 20 à 50 % de vos sessions ». Cette fourchette{" "}
          <strong>n&apos;a aucune source primaire</strong>. Elle additionne
          deux estimations elles-mêmes incertaines — un taux de refus des
          cookies dont aucune mesure française n&apos;est publiquement
          vérifiable, et un taux de bloqueurs dont les estimations françaises
          vont de 31 % à 44 % en remontant pour l&apos;essentiel à une étude
          de 2016. Les deux populations se recoupent partiellement, donc les
          additionner surestime la perte.
          <br />
          <br />
          Nous préférons le dire :{" "}
          <strong>il n&apos;existe pas de mesure française publique et
          récente de ces taux</strong>. C&apos;est en soi une information
          utile, et c&apos;est pourquoi nous fondons la démonstration sur le
          seuil de modélisation, qui est documenté, plutôt que sur un
          pourcentage inventé.
        </InfoBox>

        <h2 id="compter">4. Compter ce qui n&apos;est compté nulle part</h2>
        <p>
          Le protocole tient en trois lignes, il dure trente jours, et il ne
          demande aucun outil payant pour démarrer.
        </p>
        <ol>
          <li>
            <strong>Un numéro dédié</strong> affiché uniquement sur le site —
            ni sur vos devis, ni sur vos véhicules, ni sur votre fiche Google.
            Tout appel qui y arrive vient du site. Compter environ 350 € pour
            douze mois.
          </li>
          <li>
            <strong>Une question systématique</strong> posée par la personne
            qui décroche : « comment nous avez-vous trouvés ? », notée dans un
            tableur. Gratuit, imparfait, suffisant pour un ordre de grandeur.
          </li>
          <li>
            <strong>Une adresse de courriel dédiée</strong> au site, distincte
            de votre adresse générale.
          </li>
        </ol>
        <InfoBox variant="emerald" title="Ce que le comptage montrerait dans le scénario Sylvain">
          Aux <strong>7 formulaires</strong> se sont ajoutés{" "}
          <strong>11 appels</strong> et <strong>3 courriels directs</strong>{" "}
          venus du site. Soit <strong>21 contacts pour 610 sessions</strong>{" "}
          mesurées, c&apos;est-à-dire <strong>3,4 %</strong> —{" "}
          <strong>trois fois le chiffre affiché</strong> par son outil de
          statistiques.
          <br />
          <br />
          Correction en sens inverse, et elle est indispensable : une part de
          ses visiteurs refuse le bandeau et n&apos;apparaît pas dans les 610
          sessions. Le dénominateur réel est donc plus grand, et son taux
          réel se situe <strong>quelque part entre 2,4 % et 3,4 %</strong>.
          <br />
          <br />
          Une fourchette, jamais une décimale. Mais entre 1,15 % et « entre
          2,4 et 3,4 % », le diagnostic n&apos;est plus du tout le même — et
          la refonte à 14 900 € perdrait son principal argument.
        </InfoBox>
        <p>
          Une précision, parce que la question revient :{" "}
          <strong>compter un appel n&apos;est pas ficher quelqu&apos;un</strong>.
          Incrémenter un compteur ne traite aucune donnée personnelle. Vous
          n&apos;avez besoin ni d&apos;un outil, ni d&apos;une mention
          supplémentaire, ni d&apos;un consentement pour commencer.
        </p>

        <GuideInlineCTA
          title="Faites compter avant de faire refaire"
          description="Décrivez votre situation en 3 minutes : objectif de réponse personnelle le prochain jour ouvré, gratuite et sans engagement. Le diagnostic peut très bien conclure : « ne refaites pas votre site »."
        />

        <h2 id="volume">5. Combien de visites, et sur combien de temps ?</h2>
        <p>
          Deux contraintes, et elles éliminent la plupart des méthodes qu&apos;on
          vous recommandera.
        </p>
        <p>
          <strong>Le bruit.</strong> À quelques contacts par mois, un écart de
          deux ou trois en valeur absolue fait « doubler » votre taux sans que
          rien n&apos;ait changé. Nous ne vous donnerons pas de seuil inventé
          du type « il faut 1 000 visites » : regardez simplement vos douze
          derniers mois. Si votre nombre de contacts mensuels oscille entre 4
          et 11 sans raison identifiable, aucune décision fondée sur un mois
          n&apos;est possible.
        </p>
        <p>
          <strong>La fenêtre de conversion.</strong> Sur un escalier sur
          mesure ou un marché avec un promoteur, un contact de janvier signe
          en juin. Juger un changement sur trente jours n&apos;a alors aucun
          sens. Comparez des groupes de visiteurs arrivés sur une même
          période et suivis jusqu&apos;à leur décision, sur au moins deux fois
          votre délai habituel.
        </p>
        <FormulaBox>
          {`TEST A/B — VISITEURS NÉCESSAIRES
(seuils standard : confiance 95 %, puissance 80 %)

Base 2 %, détecter +20 % relatif  → 19 230 par version  (38 460 au total)
Base 1 %, détecter +20 % relatif  → 38 852 par version  (77 704 au total)
Base 3 %, détecter +20 % relatif  → 12 689 par version
Base 2 %, détecter +50 % relatif  →  3 077 par version   (6 154 au total)

À 300 visites/mois, réunir 38 460 visiteurs demande ≈ 10,7 ans.`}
        </FormulaBox>
        <p>
          Ce n&apos;est pas une opinion, c&apos;est une identité
          mathématique.{" "}
          <strong>Toute page qui recommande de tester deux versions à une PME
          de ce volume recommande une chose impossible.</strong> Les cartes de
          chaleur et les enregistrements de session, en revanche, gardent tout
          leur intérêt à faible volume : ils servent à{" "}
          <em>comprendre</em> un comportement, pas à <em>mesurer</em> un
          écart.
        </p>

        <h2 id="chiffres-opposes">6. Les chiffres qu&apos;on vous oppose, source par source</h2>
        <GuideTable
          headers={["Le chiffre", "Ce qu'on trouve en remontant à la source"]}
          rows={[
            ["« Taux de conversion moyen : 2,35 %, et 11,45 % pour les meilleurs »", "Une agence américaine de publicité, article de 2014 réactualisé sans que la donnée le soit. Échantillon : ses propres comptes clients, sur des pages de campagnes payantes à intention forte. Le filtre exclut les comptes à moins de 10 conversions/mois — donc précisément les petits sites"],
            ["« 53 % des visiteurs mobiles partent après 3 secondes »", "Étude Google de septembre 2016 sur 3 700 sites mobiles s'étant portés volontaires. Population : des éditeurs de contenu monétisés par la publicité, pas des entreprises vendant un service. Le chiffre a dix ans"],
            ["« 75 % des jugements de crédibilité reposent sur le design » (Stanford)", "Aucune étude de Stanford ne contient ce chiffre. L'étude réelle (2002, 2 684 participants) mesure que 46,1 % citent l'attrait visuel PARMI les critères. Inflation de 46 à 75, et glissement de « cite parmi » à « repose sur »"],
            ["« Rappeler en 5 minutes multiplie par 100 vos chances »", "L'étude universitaire réelle (2011, 2 241 entreprises américaines) donne environ 7 fois, et environ 60 fois par rapport à une attente de plus de 24 h. Les multiplicateurs à 100 viennent d'un éditeur de logiciels de relance — dont le fondateur co-signe l'article universitaire"],
            ["« 88 % font autant confiance aux avis qu'à une recommandation »", "Enquête d'un vendeur de logiciels de gestion d'avis, sur un panel d'environ 1 000 adultes américains. Le pourcentage change à chaque édition (67 % en 2010, 86 % en 2018, 87 % en 2020) : les articles figent une édition arbitraire"],
            ["Les tableaux de « taux par secteur en France »", "Aucune source primaire française. La FEVAD publie des volumes et des paniers moyens, pas de taux de conversion sectoriel. Et aucun de ces tableaux ne déclare son dénominateur"],
          ]}
        />
        <InfoBox variant="amber" title="Le point commun de ces six chiffres">
          Chacun est publié par quelqu&apos;un qui{" "}
          <strong>vend la solution au problème qu&apos;il chiffre</strong> :
          l&apos;agence de publicité qui mesure ses propres clients,
          l&apos;éditeur de logiciels de relance qui gonfle l&apos;effet de la
          relance, le vendeur d&apos;avis clients qui mesure la confiance
          dans les avis. Ce n&apos;est pas de la malhonnêteté délibérée,
          c&apos;est un biais structurel — mais il rend ces chiffres
          inutilisables pour décider.
          <br />
          <br />
          Nous sommes dans la même position quand nous parlons de refonte.
          C&apos;est pourquoi nous préférons vous donner{" "}
          <strong>la méthode plutôt que le résultat</strong>.
        </InfoBox>

        <h2 id="arbre">7. L&apos;arbre de diagnostic : sept questions, dans cet ordre</h2>
        <p>
          La quasi-totalité des pages sur ce sujet listent les causes{" "}
          <em>en parallèle</em>, ce qui produit soit l&apos;inaction, soit une
          correction au hasard. Voici un arbre : à chaque étape, on ne passe à
          la suivante que si la précédente est validée.
        </p>
        <FormulaBox>
          {`1 · MESURE      Comptez-vous tous les contacts ? (section 4)
                 NON → comptez 30 jours. STOP, ne changez rien.

2 · VOLUME      Assez de contacts pour distinguer un signal du bruit ?
                 NON → travaillez le trafic d'abord. STOP.

3 · TRAFIC      Les visiteurs ont-ils une intention d'achat ?
                 NON → problème de référencement, pas de site. (section 8)

4 · PAGE        La page dit-elle quoi, pour qui, combien ?
                 NON → réécriture. Meilleur rapport du guide. (section 9)

5 · CONFIANCE   SIRET, assurance, avis, interlocuteur nommé ?
                 NON → ajouts gratuits ou presque. (section 10)

6 · SUIVI       Rappel sous 4 h ouvrées ? Relance à J+7 ?
                 NON → correctif à 0 €, et souvent le plus rentable. (section 11)

7 · OFFRE       Le prix et le positionnement sont-ils justes ?
                 NON → aucun site ne le rattrapera. (section 12)`}
        </FormulaBox>

        <h2 id="trafic">8. Le trafic : et si vous convertissiez bien les mauvaises visites ?</h2>
        <p>
          Un site peut convertir excellemment des visiteurs qui n&apos;ont
          aucune intention d&apos;acheter. Le test est gratuit : ouvrez votre
          Search Console et regardez les requêtes qui vous amènent du monde.
        </p>
        <GuideTable
          headers={["Ce que vous voyez", "Diagnostic", "Correctif"]}
          rows={[
            ["« comment poser un parquet », « prix moyen d'une véranda »", "Vous captez des curieux, pas des acheteurs", "Réorienter vers des requêtes d'intention"],
            ["Votre métier + votre ville, « devis », « près de chez moi »", "Le trafic est bon — le problème est ailleurs", "Passez à l'étape 4"],
            ["Votre nom d'entreprise, majoritairement", "Les gens vous connaissent déjà : votre site n'acquiert pas", "Travail de visibilité, pas de conversion"],
            ["Beaucoup de visites, zéro requête locale", "Vous n'existez pas sur votre zone de chalandise", "Fiche Google Business Profile et pages locales"],
          ]}
        />
        <p>
          Notre guide du{" "}
          <Link href="/guides/prix-referencement-naturel">prix du
          référencement naturel</Link> explique comment un portefeuille de
          requêtes se réoriente vers l&apos;intention d&apos;achat — et
          pourquoi les contenus purement explicatifs se déprécient.
        </p>

        <h2 id="page">9. La page : ce qui empêche de demander un devis</h2>
        <p>
          Si les étapes 1 à 3 sont validées, c&apos;est ici que le correctif
          est le plus rentable. Quatre défauts reviennent constamment.
        </p>
        <ul>
          <li>
            <strong>On ne comprend pas ce que vous vendez en dix
            secondes.</strong> Le titre de votre page d&apos;accueil doit dire
            le métier et la zone, pas une formule d&apos;ambiance.
          </li>
          <li>
            <strong>Aucun ordre de grandeur de prix.</strong> C&apos;est le
            premier motif de départ, et c&apos;est aussi le meilleur filtre
            contre les demandes non sérieuses.
          </li>
          <li>
            <strong>Aucune réalisation montrée.</strong> Sur un métier
            visuel, trois chantiers photographiés valent dix paragraphes.
          </li>
          <li>
            <strong>Le site est lent sur téléphone.</strong> Vérifiable
            gratuitement en trente secondes — voyez notre guide{" "}
            <Link href="/guides/pourquoi-mon-site-est-lent">pourquoi mon site
            est lent</Link>, qui explique aussi pourquoi le fameux « 53 % à
            3 secondes » ne s&apos;applique probablement pas à vous.
          </li>
        </ul>
        <InfoBox variant="blue" title="Sur le formulaire : plus court n'est pas toujours mieux">
          Un formulaire court fait passer plus de demandes, mais des demandes
          moins qualifiées. Un formulaire qui demande le budget et le délai en
          fait passer moins, mais mieux.{" "}
          <strong>Le bon arbitrage dépend de ce qui vous manque.</strong> Si
          vous croulez sous des demandes sans suite, allongez-le. Si votre
          problème est le volume, raccourcissez-le et posez les questions au
          téléphone.
          <br />
          <br />
          Deux règles qui valent dans les deux cas : ne demandez jamais une
          information dont vous ne ferez rien, et écrivez en une ligne ce qui
          va se passer après l&apos;envoi — « nous vous rappelons sous 4 heures
          ouvrées » vaut mieux que « merci de votre message ».
        </InfoBox>

        <h2 id="confiance">10. Les signaux de confiance propres au marché français</h2>
        <p>
          Voici un angle qu&apos;aucune page concurrente ne traite : en
          France, plusieurs obligations légales peuvent être transformées en
          arguments de confiance, à condition de les afficher là où le
          visiteur les voit.
        </p>
        <GuideTable
          headers={["Le signal", "Le fondement", "Où l'afficher"]}
          rows={[
            ["Mentions légales complètes", "La loi pour la confiance dans l'économie numérique les impose à tout éditeur professionnel", "Page dédiée, lien en pied de page"],
            ["Assurance professionnelle et coordonnées de l'assureur", "Obligatoire sur les devis et factures des entreprises artisanales (loi Pinel)", "Sur le site aussi — c'est là que ça devient différenciant"],
            ["Attestation de garantie décennale", "Obligation d'assurance pour qui relève de la responsabilité décennale", "Page « à propos » ou page métier"],
            ["Avis clients affichés dans les règles", "Le code de la consommation impose date de publication, date de l'expérience, critères de classement et information sur le contrôle", "À proximité immédiate des avis"],
            ["Un interlocuteur nommé, avec photo", "Aucune obligation — mais c'est le signal le moins coûteux et le plus rare", "Page équipe, page contact"],
          ]}
        />
        <InfoBox variant="emerald" title="L'obligation qui devient un avantage">
          Un artisan du bâtiment doit indiquer son assurance professionnelle,
          les coordonnées de son assureur et la couverture géographique de son
          contrat sur ses devis et ses factures. Rien ne l&apos;oblige à le
          faire <strong>sur son site</strong> — et c&apos;est exactement pour
          cela que le faire vous distingue.
          <br />
          <br />
          Le visiteur qui hésite entre trois menuisiers ne lit pas vos
          conditions générales. Mais un bloc « assuré chez X, décennale
          jusqu&apos;au…, nous intervenons sur la Haute-Savoie et la Savoie »
          répond en trois lignes aux trois questions qu&apos;il se pose. Coût :
          une demi-heure.
        </InfoBox>

        <h2 id="apres-formulaire">11. Après le formulaire : le maillon humain</h2>
        <p>
          C&apos;est le maillon que personne n&apos;audite, parce
          qu&apos;aucun prestataire ne vend de solution pour le réparer.
        </p>
        <p>
          L&apos;étude universitaire de référence, publiée en 2011 sur un
          audit de 2 241 entreprises américaines, mesure que{" "}
          <strong>37 % répondent dans l&apos;heure</strong>, 16 % entre une et
          vingt-quatre heures, 24 % au-delà de vingt-quatre heures, et que{" "}
          <strong>23 % ne répondent jamais</strong>. Le délai moyen, parmi
          celles qui répondent, est de <strong>42 heures</strong>. Contacter
          dans l&apos;heure rend la qualification du prospect environ{" "}
          <strong>7 fois</strong> plus probable, et environ 60 fois plus
          qu&apos;en attendant au-delà de vingt-quatre heures.
        </p>
        <p>
          Trois réserves, parce qu&apos;elles comptent : ces données sont
          américaines, elles ont quinze ans, et l&apos;un des co-auteurs
          dirige une société qui vend des logiciels de relance commerciale.
          C&apos;est d&apos;ailleurs de là que sortent les versions
          spectaculaires du chiffre — « multipliez par 100 » — que la section 6
          démonte. Le fond, lui, reste solide et utile.
        </p>
        <InfoBox variant="amber" title="Le problème révélé par le scénario Sylvain">
          D&apos;avril à septembre, en pleine saison de pose, son délai moyen
          de rappel est de <strong>2,6 jours ouvrés</strong>. Et sur les{" "}
          <strong>13 devis</strong> émis au dernier trimestre,{" "}
          <strong>6 n&apos;ont jamais été relancés</strong>. Résultat :{" "}
          <strong>4 signatures</strong>.
          <br />
          <br />
          Dans cette hypothèse, le site n&apos;y serait pour rien : il
          aurait produit 21 contacts en un mois. La perte se situerait après.
        </InfoBox>
        <p>
          Le correctif coûte <strong>zéro euro</strong> : un engagement de
          rappel sous quatre heures ouvrées, une relance systématique à sept
          jours, et une ligne dans un tableur pour ne rien laisser tomber. Le
          seul chiffre qui vous concerne vraiment n&apos;est d&apos;ailleurs
          pas le taux de conversion, c&apos;est le{" "}
          <strong>coût d&apos;acquisition d&apos;un client signé</strong> — et
          il peut se dégrader pendant que votre taux de conversion
          s&apos;améliore, si vous attirez plus de contacts que vous
          n&apos;en traitez.
        </p>

        <h2 id="pas-le-site">12. Et si le problème n&apos;était pas le site ?</h2>
        <GuideTable
          headers={["Symptôme", "Cause probable, hors site"]}
          rows={[
            ["Beaucoup de demandes, aucune ne signe", "Prix hors marché, ou positionnement flou"],
            ["Les prospects disparaissent après le devis", "Délai d'envoi, absence de relance, devis illisible"],
            ["Personne ne cherche votre offre", "La demande n'existe pas sous cette forme sur votre zone"],
            ["Vos concurrents signent ce que vous perdez", "Différence de délai, de réactivité ou de preuve — rarement de site"],
            ["Beaucoup de curieux, peu d'acheteurs", "Vous êtes visible sur des requêtes informatives (section 8)"],
          ]}
        />
        <p>
          Le cadrage de marché est un exercice à part entière : notre guide{" "}
          <Link href="/guides/prix-site-vitrine">prix d&apos;un site
          vitrine</Link> détaille ce qu&apos;un site peut et ne peut pas
          résoudre à lui seul.
        </p>

        <h2 id="ne-pas-refaire">13. Les sept signes qui disent de NE PAS refaire</h2>
        <p>
          Nous vendons des refontes. Voici quand même les sept situations où
          nous vous déconseillons d&apos;en commander une —{" "}
          <strong>y compris chez nous</strong>.
        </p>
        <GuideTable
          headers={["#", "Le signe", "Ce qu'il faut faire à la place"]}
          rows={[
            ["1", "Vous n'avez pas encore compté vos contacts hors formulaire", "Comptez 30 jours. Coût : 0 €"],
            ["2", "Votre taux corrigé dépasse 2 %", "Le site fait son travail. Regardez l'étape 6"],
            ["3", "Votre délai de rappel dépasse 24 heures", "Corrigez d'abord ça. Coût : 0 €"],
            ["4", "Moins d'un devis sur deux est relancé", "Un tableur et une règle à J+7 suffisent"],
            ["5", "Votre trafic est majoritairement informatif", "C'est un sujet de référencement, pas de refonte"],
            ["6", "Le site a moins de trois ans et charge correctement sur mobile", "Réécrivez deux pages plutôt que tout refaire"],
            ["7", "Votre budget est inférieur à 3 000 €", "À ce montant, une refonte ne se fera pas correctement. Ciblez"],
          ]}
        />
        <p>
          Notre guide{" "}
          <Link href="/guides/prix-refonte-site-internet">prix d&apos;une
          refonte</Link> donne le raisonnement inverse : les cas où elle se
          justifie réellement. Et si vous refondez malgré tout, lisez{" "}
          <Link href="/guides/refonte-sans-perdre-son-seo">refonte sans
          perdre son référencement</Link> avant de lancer quoi que ce soit.
        </p>

        <h2 id="prix-correctifs">14. Le prix réel de chaque correctif</h2>
        <GuideTable
          headers={["Correctif", "Coût", "Quand il se rembourse"]}
          rows={[
            ["Protocole de rappel sous 4 h ouvrées", "0 €", "Immédiatement, dès le premier devis sauvé"],
            ["Relance systématique à J+7", "0 €", "Immédiatement"],
            ["Question « comment nous avez-vous trouvés ? »", "0 €", "Dès le premier mois de comptage"],
            ["Affichage assurance, décennale, interlocuteur nommé", "0 à 200 €", "Dès la première hésitation levée"],
            ["Numéro de téléphone dédié", "≈ 350 €/an", "Dès qu'il évite une décision de refonte injustifiée"],
            ["Réécriture de deux pages métier avec fourchettes de prix", "1 500 à 2 500 €", "Sur 6 à 12 mois selon votre volume"],
            ["Correction de la vitesse mobile", "1 000 à 3 000 €", "Variable — mesurez avant"],
            ["Refonte complète", "à partir de 6 900 €", "Seulement si trois signes structurels sont réunis"],
          ]}
        />
        <InfoBox variant="emerald" title="Décision et résultat simulés pour Sylvain">
          <strong>La refonte à 14 900 € serait reportée.</strong> À la place :{" "}
          <strong>0 €</strong> pour le protocole de rappel sous quatre heures
          ouvrées et la relance à sept jours,{" "}
          <strong>350 €</strong> pour douze mois de numéro dédié, et{" "}
          <strong>1 900 €</strong> pour réécrire deux pages métier avec des
          fourchettes de prix indicatives. Total : 2 250 €.
          <br />
          <br />
          Au trimestre suivant simulé, il passerait de{" "}
          <strong>4 signatures sur 13 devis à 7 sur 14</strong>, sans
          qu&apos;une seule ligne de son site n&apos;ait été refaite.
          <br />
          <br />
          <strong>Une réserve d&apos;honnêteté, et elle est importante :</strong>{" "}
          13 puis 14 devis formeraient un échantillon minuscule sur un seul
          trimestre. On ne pourrait rien en généraliser, et une bonne saison
          suffirait à produire le même écart. Ce scénario illustre une méthode ;
          il ne rapporte pas un résultat observé et n&apos;en promet aucun.
        </InfoBox>

        <h2 id="methode">15. Méthode : votre diagnostic en 5 étapes</h2>
        <ol>
          <li>
            <strong>Comptez trente jours</strong>, tous canaux confondus.
            Numéro dédié ou question au standard. Ne changez rien pendant ce
            temps.
          </li>
          <li>
            <strong>Calculez votre fourchette</strong>, pas votre décimale :
            tous contacts divisés par les sessions mesurées donne la borne
            haute ; tenez compte des visiteurs invisibles pour la borne basse.
          </li>
          <li>
            <strong>Mesurez votre délai de rappel</strong> sur les trois
            derniers mois, et comptez combien de devis n&apos;ont jamais été
            relancés. C&apos;est souvent là que se trouve la réponse.
          </li>
          <li>
            <strong>Ouvrez votre Search Console</strong> et regardez si vos
            requêtes portent une intention d&apos;achat.
          </li>
          <li>
            <strong>Comptez vos signes de la section 13.</strong> À moins de
            trois, ne refondez pas : corrigez ce qui coûte zéro euro, puis
            réécrivez deux pages.
          </li>
        </ol>
        <p>
          Chez Hagnéré Code, nous commençons systématiquement par cette
          mesure — c&apos;est l&apos;objet de notre{" "}
          <Link href="/services/audit-technique">audit technique</Link>, et
          c&apos;est aussi la raison pour laquelle nous refusons régulièrement
          des refontes. Nos{" "}
          <Link href="/tarifs">tarifs sont publics</Link>, et notre réponse
          reste gratuite même quand elle nous fait perdre la mission.
        </p>

        <GuideInlineCTA
          title="Faites poser le diagnostic avant d'engager un budget"
          description="Décrivez votre situation en 3 minutes : objectif de réponse personnelle le prochain jour ouvré, gratuite et sans engagement. Nous vous dirons franchement si votre site est en cause — ou s'il ne l'est pas."
        />

        <InfoBox variant="emerald" title="À retenir : les 7 points de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Votre taux affiché est faux dans les deux sens</strong> : numérateur amputé, dénominateur sous-estimé.</li>
            <li><strong>La modélisation de Google ne s&apos;active pas chez vous</strong> : les seuils documentés sont hors de portée d&apos;un site de PME.</li>
            <li><strong>Comptez avant de corriger</strong> : trente jours, zéro euro, et le diagnostic change souvent du tout au tout.</li>
            <li><strong>38 460 visiteurs</strong> pour tester deux versions d&apos;une page sur une base de 2 % — soit près de onze ans à 300 visites par mois.</li>
            <li><strong>Six chiffres de référence démontés</strong>, tous publiés par quelqu&apos;un qui vend la solution au problème qu&apos;il chiffre.</li>
            <li><strong>Le maillon humain pèse plus lourd que le site</strong>, et il se corrige pour zéro euro.</li>
            <li><strong>Sept signes disent de ne PAS refondre</strong> — y compris chez nous.</li>
          </ul>
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Mesure et consentement :{" "}
          <a href="https://support.google.com/analytics/answer/11161109" target="_blank" rel="noopener noreferrer">Google, « Behavioral modeling for consent mode » (consulté le 19/07/2026)</a> et{" "}
          <a href="https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience" target="_blank" rel="noopener noreferrer">CNIL, « Cookies : solutions pour les outils de mesure d&apos;audience » (mise à jour du 04/07/2025)</a>.
          Délai de rappel :{" "}
          <a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer">Oldroyd, McElheran et Elkington, « The Short Life of Online Sales Leads », Harvard Business Review, mars 2011</a>.
          Crédibilité perçue :{" "}
          <a href="https://credibility.stanford.edu/pdf/Stanford-MakovskyWebCredStudy2002-prelim.pdf" target="_blank" rel="noopener noreferrer">Fogg et al., Stanford-Makovsky Web Credibility Study, 2002</a>.
          Vitesse et abandon :{" "}
          <a href="https://www.thinkwithgoogle.com/_qs/documents/2340/bc22e_The_Need_for_Mobile_Speed_-_FINAL_1.pdf" target="_blank" rel="noopener noreferrer">Google / DoubleClick, « The Need for Mobile Speed », septembre 2016</a>.
          Marché français :{" "}
          <a href="https://www.fevad.com/chiffres-cles-ecommerce-2026/" target="_blank" rel="noopener noreferrer">FEVAD, Chiffres clés du e-commerce, édition 2026</a> et{" "}
          <a href="https://www.francenum.gouv.fr/barometre-france-num" target="_blank" rel="noopener noreferrer">Baromètre France Num 2025, Direction générale des Entreprises</a>.
          Obligations d&apos;affichage :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049571119" target="_blank" rel="noopener noreferrer">art. L111-7-2 du code de la consommation (avis en ligne)</a> et{" "}
          <a href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000038587815" target="_blank" rel="noopener noreferrer">art. 22-2 de la loi n° 96-603 du 5 juillet 1996 (assurance professionnelle)</a>.
        </p>
        <p className="text-sm">
          Les tailles d&apos;échantillon des tests à deux versions sont
          calculées selon la formule standard de comparaison de deux
          proportions, avec un niveau de confiance de 95 % et une puissance de
          80 %. Les études Harvard Business Review, Stanford et
          Google/DoubleClick portent sur des populations américaines ou
          mondiales et non françaises, ce que nous signalons plutôt que de les
          présenter comme des références nationales. Il n&apos;existe pas, à
          notre connaissance, de mesure française publique et récente du taux
          de refus des bandeaux de consentement ni du taux d&apos;utilisation
          des bloqueurs : nous ne publions donc aucun pourcentage sur ces deux
          points. Les chiffres du fil rouge sont des hypothèses du scénario
          fictif composite — ni données client ni résultat observé. Ils
          illustrent une méthode et ne permettent aucune généralisation. Ce guide est une information générale et ne
          constitue pas un conseil juridique.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
