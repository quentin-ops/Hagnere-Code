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

const guide = getGuide("proprietaire-site-internet-code-source");

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
  wordCount: 5400,
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
      "Propriété intellectuelle du logiciel",
      "Contrats de prestation web",
      "Cession de droits d'auteur",
      "Réversibilité technique",
      "RGPD",
      "Développement sur mesure",
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
    { "@type": "ListItem", position: 3, name: "Propriété d'un site et du code source", item: guideUrl(guide) },
  ],
});

const faqItems = [
  {
    question: "J'ai payé mon site 15 000 euros : est-ce qu'il est à moi, oui ou non ?",
    answer:
      "Pas automatiquement, et c'est la mauvaise nouvelle de ce guide. L'article L111-1 du code de la propriété intellectuelle est explicite dans son troisième alinéa : l'existence d'un contrat de commande n'emporte aucune dérogation à la jouissance du droit d'auteur. Autrement dit, payer une prestation ne transfère aucun droit sur le code. À défaut d'un écrit de cession conforme, votre développeur reste titulaire des droits, quel que soit le montant de la facture. Ce qui vous appartient en revanche sans aucune clause : vos textes, vos photos, votre logo, vos données clients — voyez la question sur ce point.",
  },
  {
    question: "Mon agence refuse de me donner les accès et le code source, elle en a le droit ?",
    answer:
      "Cela dépend entièrement de ce que dit votre contrat, et la jurisprudence va dans les deux sens. Le tribunal de commerce de Besançon a jugé le 23 mars 2016 qu'en l'absence de cession, le refus de remettre les codes sources était légalement fondé, le client ne disposant que d'un droit d'usage. À l'inverse, la cour d'appel de Douai a contraint un éditeur le 7 avril 2022 à transmettre le code sous huit jours, sous astreinte de 100 euros par jour, au motif que la communication du code était indispensable à l'utilisation du logiciel conformément à sa destination. Ces deux décisions ne se contredisent pas : elles montrent que tout se joue sur la rédaction du contrat. Précision utile : ces deux décisions sont rapportées par des cabinets d'avocats, sans numéro de rôle publié.",
  },
  {
    question: "Je veux changer de prestataire : qu'est-ce que je peux emporter, concrètement ?",
    answer:
      "C'est la bonne question, et elle n'est pas juridique. En pratique, ce qui décide de votre liberté tient en trois éléments : la titularité des droits, les accès techniques, et le caractère standard de la technologie. On peut être juridiquement propriétaire de son code et rester totalement bloqué — sans accès au dépôt, avec un nom de domaine enregistré au nom de l'agence. Et on peut n'être propriétaire de rien et partir en une semaine, si l'on a tous les accès et une technologie que n'importe quel prestataire sait reprendre. La section 10 de ce guide liste les quatorze accès à réclamer : dans la vraie vie, ils valent plus que la cession.",
  },
  {
    question: "Dans mon devis il n'y a rien d'écrit sur les droits. Je fais quoi maintenant ?",
    answer:
      "Trois choses, dans cet ordre, et aucune ne nécessite un avocat pour commencer. D'abord, sécurisez ce qui est sécurisable immédiatement : vérifiez qui est le titulaire déclaré de votre nom de domaine, et demandez par écrit tous les accès listés en section 10. Ensuite, demandez la restitution de vos données personnelles — l'article 28 du RGPD vous en donne le droit indépendamment de toute question de propriété intellectuelle, c'est un levier que presque personne n'utilise. Enfin seulement, ouvrez la négociation sur les droits. L'ordre compte : une fois les accès obtenus, votre position de négociation change complètement.",
  },
  {
    question: "Comment je repère dans mon contrat si les droits m'ont été cédés ?",
    answer:
      "Cherchez cinq formulations. « Droit d'usage », « licence d'utilisation », « licence non exclusive », « tous droits réservés » et « le prestataire reste propriétaire » signifient toutes la même chose : vous n'avez pas la propriété. À l'inverse, une vraie cession doit énumérer les droits cédés un par un — reproduction, représentation, adaptation, modification, mise sur le marché — et délimiter l'étendue, la destination, le territoire et la durée. C'est le formalisme imposé par l'article L131-3. Une formule globale du type « cession pleine et entière de tous les droits », sans cette énumération, est fragile : l'article L122-7 impose une interprétation restrictive, et tout ce qui n'est pas expressément cédé reste à l'auteur.",
  },
  {
    question: "Combien coûte de racheter les droits sur mon site après coup ?",
    answer:
      "Nous devons être honnêtes : il n'existe aucun barème public. Aucune étude sectorielle, aucun organisme professionnel, aucune source primaire ne publie de fourchette pour le prix d'une cession de droits sur un site. Les seuls chiffres qui circulent viennent de plateformes de mise en relation rémunérées à l'apport d'affaires, et nous ne les reprendrons pas. Ce que nous pouvons dire relève de nos propres observations, présentées comme telles : négociée à la commande, une cession renchérit peu un devis parce qu'elle ne coûte au prestataire qu'une rédaction. Négociée a posteriori, dans un rapport de force défavorable, elle se chiffre à ce que l'autre partie estime pouvoir obtenir — ce qui est une autre façon de dire qu'il n'y a pas de prix.",
  },
  {
    question: "Le nom de domaine a été déposé par l'agence à son nom : comment je le récupère ?",
    answer:
      "L'AFNIC, le registre officiel du .fr, identifie explicitement cette situation comme un cas à risque dans son guide du titulaire : un prestataire qui enregistre le nom de domaine en son nom à la place de son client, par simple souci de facilité. Le point de droit est net : le titulaire déclaré détient les droits, indépendamment de qui paie la facture. Pour récupérer le domaine, il faut faire modifier le titulaire dans le fichier du registre — ce qui demande l'accord du titulaire actuel. Pour changer de bureau d'enregistrement, vous aurez besoin d'un code dit « auth-info » que votre bureau actuel est tenu de vous communiquer ou de mettre à votre disposition. Le changement de bureau est généralement payant.",
  },
  {
    question: "Mes textes, mes photos et mon logo m'appartiennent quand même ?",
    answer:
      "Oui, et c'est un levier de négociation que presque personne n'utilise. Vos apports restent votre propriété même en l'absence de toute cession sur le code : les textes que vous avez fournis, vos photographies, votre logo si vous en détenez les droits, vos maquettes, et bien sûr vos données clients. S'y ajoute une obligation qui pèse sur votre prestataire dès qu'il traite des données personnelles pour votre compte : l'article 28.3 g) du RGPD impose qu'au terme de la prestation il supprime ou vous renvoie toutes les données, selon votre choix, et détruise les copies. Attention à un point : les délais souvent cités — trente jours pour restituer, soixante pour certifier — ne figurent nulle part dans le RGPD. Ils viennent de modèles de contrats commerciaux. À négocier, donc, pas à invoquer comme légaux.",
  },
  {
    question: "Si mon agence dépose le bilan, je perds mon site ?",
    answer:
      "C'est un scénario que presque aucun contrat n'anticipe. La parade s'appelle l'entiercement : le dépôt du code chez un tiers de confiance qui vous le remet si le prestataire disparaît. L'Agence pour la protection des programmes propose ce service, et ses tarifs officiels sont publics — grille de juin 2024 : l'adhésion annuelle, préalable obligatoire, coûte 830 euros hors taxes par an, un dépôt standard 195 euros, et l'entiercement de 450 à 1 200 euros par an selon la formule. La formule la plus protectrice est celle où l'agence est elle-même cosignataire de l'accord, à 1 200 euros par an, car c'est la seule où le tiers de confiance peut déclencher la remise. Pour un site vitrine, ce dispositif est disproportionné ; pour une application métier dont dépend votre activité, il se discute.",
  },
  {
    question: "Mon site est sur Shopify ou Wix : la question se pose pareil ?",
    answer:
      "Non, et c'est le cas de figure le plus fréquent chez les PME françaises. Sur une plateforme en ligne, il n'existe pas de code source cessible : l'architecture appartient à l'éditeur et le site tourne sur ses serveurs. Wix le documente explicitement — l'export du site vers un autre hébergeur n'est pas possible, tout en reconnaissant que le contenu appartient au client. Webflow permet un export du code, mais réservé à certaines formules payantes et avec des exclusions notables. La question à poser n'est donc pas « suis-je propriétaire du code », qui est sans objet, mais « que puis-je exporter, et sous quel format ». C'est un arbitrage de réversibilité, pas de propriété intellectuelle.",
  },
  {
    question: "Le développeur dit avoir fait le site en grande partie avec l'IA : qui est propriétaire ?",
    answer:
      "C'est une zone grise réelle, et méfiez-vous de qui vous répondra avec assurance. Le raisonnement de droit est le suivant : une œuvre n'est protégée que si elle est originale, ce que la Cour de cassation définit depuis l'arrêt Babolat contre Pachot de 1986 comme un apport intellectuel et un effort personnalisé dépassant la mise en œuvre d'une logique automatique. La Cour de justice de l'Union européenne exige de son côté une création intellectuelle propre à son auteur, supposant des choix libres et créatifs. Une production sans apport humain original n'étant pas protégeable, il n'y aurait tout simplement rien à céder. Aux États-Unis, le Copyright Office a conclu en janvier 2025 qu'une production entièrement générée en réponse à un prompt n'est pas protégeable — c'est du droit américain, donc un indice de convergence, pas une règle applicable en France. Aucune juridiction française n'a tranché à notre connaissance.",
  },
  {
    question: "L'agence dit que le site m'appartient mais qu'elle garde le code : c'est possible ?",
    answer:
      "Techniquement oui, et c'est même la situation la plus courante. Ce que l'agence appelle « votre site » désigne alors le résultat affiché en ligne, dont vous avez l'usage. Le code source — le texte écrit par le développeur, lisible et modifiable — reste le sien. C'est confortable pour elle : vous ne pouvez faire évoluer le site que par elle. La contrepartie honnête existe cependant : si la technologie est standard et que vous avez tous les accès, un autre prestataire peut reprendre le site sans le code d'origine, en repartant de ce qui tourne. C'est moins agréable qu'une reprise propre, mais ce n'est pas une impasse.",
  },
  {
    question: "C'est mon salarié qui a développé le site : il appartient à lui ou à ma société ?",
    answer:
      "À votre société, et c'est l'un des rares cas simples. L'article L113-9 du code de la propriété intellectuelle prévoit une dévolution automatique à l'employeur des droits patrimoniaux sur les logiciels créés par un salarié dans l'exercice de ses fonctions, sauf stipulation contraire. C'est une exception propre au logiciel : ailleurs en droit d'auteur, cette dévolution automatique n'existe pas. Une ordonnance du 15 décembre 2021 a étendu ce régime à certaines personnes non salariées accueillies par convention, notamment les stagiaires et doctorants. Attention en revanche : ce régime ne couvre pas le prestataire indépendant classique. Un freelance qui développe pour vous reste titulaire de ses droits à défaut d'écrit.",
  },
  {
    question: "Mon prestataire a fait appel à un freelance : la cession qu'il me propose tient ?",
    answer:
      "C'est exactement la bonne question, et personne ne la pose. Le principe est simple : une agence ne peut vous céder que ce qu'elle détient réellement. Elle détient les droits sur le code écrit par ses salariés, par l'effet de la dévolution automatique. Elle ne les détient pas sur le code de ses freelances, de ses sous-traitants offshore ou de ses prestataires occasionnels, sauf à avoir elle-même signé avec eux une cession conforme. Exigez donc dans le contrat une garantie de titularité couvrant toute la chaîne de sous-traitance, avec obligation de vous communiquer les actes de cession en amont sur simple demande. Une agence sérieuse acceptera : elle a normalement ces documents.",
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
          { label: "Propriété du site et du code source" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Payer une prestation ne transfère aucun droit — c'est la loi, article L111-1. Mais la titularité n'est qu'un tiers du sujet : ce guide traite aussi les briques que personne ne peut vous céder, les quatorze accès qui valent plus que le code, le modèle de clause conforme, et la marche à suivre quand le conflit est déjà là."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Payer ne transfère aucun droit (L111-1)", description: "", color: "violet" },
          { number: "02", title: "Titularité + accès + technologie standard", description: "", color: "blue" },
          { number: "03", title: "Les 14 accès à réclamer, dans l'ordre", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/choisir-son-agence-web", label: "Choisir son agence web" },
          { href: "/guides/cahier-des-charges-site-internet", label: "Cahier des charges" },
          { href: "/guides/combien-coute-un-site-internet", label: "Prix d'un site internet" },
          { href: "/guides/prix-logiciel-sur-mesure", label: "Prix d'un logiciel sur mesure" },
          { href: "/guides/agence-web-ou-freelance", label: "Agence ou freelance ?" },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Propriété du site : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          <strong>Payer une prestation ne vous transfère aucun droit sur le
          code</strong> : le code de la propriété intellectuelle le dit
          explicitement. Mais s&apos;arrêter là serait vous rendre un mauvais
          service, parce que la titularité des droits n&apos;est qu&apos;un
          tiers du sujet. Ce qui décide réellement de votre liberté, c&apos;est{" "}
          <strong>la titularité, les accès et le caractère standard de la
          technologie</strong> — et sur les trois, c&apos;est le deuxième qui
          vous bloque en pratique.
        </p>

        <InfoBox variant="blue" title="La distinction que ce guide ajoute au sujet">
          On peut être <strong>juridiquement propriétaire de son code et
          rester totalement prisonnier</strong> de son prestataire : pas
          d&apos;accès au dépôt, nom de domaine enregistré à son nom, clés
          d&apos;accès jamais transmises.
          <br />
          <br />
          Et l&apos;inverse est vrai : on peut{" "}
          <strong>n&apos;être propriétaire de rien et partir en une
          semaine</strong>, avec tous les accès et une technologie que
          n&apos;importe quel prestataire sait reprendre.
          <br />
          <br />
          Les pages qui traitent ce sujet répondent presque toutes à la
          question de droit et ignorent la question de dépendance. Nous
          traitons les deux, et nous vous dirons laquelle compte le plus dans
          votre cas.
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse en 90 secondes" },
            { id: "six-choses", label: "2. Les six choses qu'on appelle « le site »" },
            { id: "loi", label: "3. Ce que dit vraiment la loi française" },
            { id: "deja-a-vous", label: "4. Ce qui vous appartient déjà sans aucune clause" },
            { id: "saas", label: "5. Wix, Shopify, Webflow : quand il n'y a pas de code à céder" },
            { id: "briques", label: "6. Les briques que votre prestataire ne peut pas céder" },
            { id: "ia", label: "7. Le code écrit par une IA" },
            { id: "chaine", label: "8. Freelance, offshore, stagiaire : la chaîne de titularité" },
            { id: "liberte", label: "9. Posséder le code ou pouvoir changer de prestataire" },
            { id: "checklist", label: "10. La checklist de passation : les 14 accès" },
            { id: "prix", label: "11. Combien coûte une cession de droits" },
            { id: "modele", label: "12. Le modèle de clause conforme à L131-3" },
            { id: "relire-devis", label: "13. Relisez votre devis en trois minutes" },
            { id: "conflit", label: "14. Le conflit est déjà là : que faire" },
            { id: "disparition", label: "15. Si le prestataire disparaît" },
            { id: "methode", label: "16. Sécuriser sa titularité : la méthode en 5 étapes" },
          ]}
        />

        <InfoBox variant="amber" title="Le fil rouge : Sandrine, bureau d'études thermiques à Rumilly">
          Onze salariés, 1,4 M€ de chiffre d&apos;affaires. En mars 2023,
          Sandrine a payé <strong>21 600 € HT</strong> à une agence lyonnaise
          pour un site et un configurateur d&apos;audit énergétique qui
          génère 40 à 60 demandes de devis par mois — sa première source de
          contacts. Le devis, deux pages, mentionnait{" "}
          <em>« livraison d&apos;un droit d&apos;usage du site »</em> et
          aucune clause d&apos;accès.
          <br />
          <br />
          En juin 2026, elle veut changer de prestataire. L&apos;agence
          refuse de livrer le dépôt de code et facture{" "}
          <strong>9 000 € HT</strong> « le rachat des droits ». Sandrine
          découvre au passage que son nom de domaine est enregistré au nom de
          l&apos;agence, que le configurateur repose sur un thème sous licence
          annuelle à 79 € rattachée au compte de l&apos;agence, et
          qu&apos;une partie du code a été écrite par un freelance
          sous-traité. Une nouvelle agence lui propose de tout redévelopper
          pour <strong>14 500 € HT</strong> en six semaines.
          <br />
          <br />
          Payer, attaquer, ou repartir de zéro ? Son arbitrage se tranche en
          section 14.
        </InfoBox>

        <h2 id="reponse-rapide">1. La réponse en 90 secondes</h2>
        <GuideTable
          headers={["Ce que vous croyez posséder", "La réalité juridique par défaut"]}
          rows={[
            ["Le code source du site", "Au développeur, sauf cession écrite conforme. Payer ne suffit pas"],
            ["Le nom de domaine", "Au titulaire déclaré chez le bureau d'enregistrement — souvent l'agence"],
            ["Vos textes, photos, logo", "À vous. Ce sont vos apports, aucune clause n'est nécessaire"],
            ["Vos données clients", "À vous, et le RGPD impose leur restitution en fin de contrat"],
            ["Le thème et les extensions", "À leurs éditeurs. Personne ne peut vous les céder"],
            ["Les comptes tiers (mesure d'audience, paiement)", "À qui détient le compte — vérifiez au nom de qui il est ouvert"],
          ]}
        />
        <p>
          Si vous ne devez retenir qu&apos;une chose :{" "}
          <strong>réclamez les accès avant de négocier les droits</strong>.
          Les accès sont obtenables rapidement, souvent sans conflit, et ils
          changent totalement votre position de négociation ensuite. La
          section 10 en donne la liste.
        </p>

        <h2 id="six-choses">2. Les six choses qu&apos;on appelle « le site »</h2>
        <p>
          Le mot « site » recouvre six objets distincts, qui ont chacun leur
          propriétaire et leur régime. C&apos;est la confusion entre eux qui
          rend les discussions stériles.
        </p>
        <GuideTable
          headers={["L'objet", "Ce que c'est", "À qui c'est, par défaut"]}
          rows={[
            ["Le nom de domaine", "Votre adresse sur internet", "Au titulaire déclaré au registre"],
            ["L'hébergement", "La location du serveur qui garde le site en ligne", "Au titulaire du compte chez l'hébergeur"],
            ["Le code source", "Le texte écrit par le développeur, lisible et modifiable", "Au développeur, sauf cession écrite"],
            ["Les contenus", "Textes, photos, logo, vidéos", "À vous, si vous les avez fournis ou fait produire avec cession"],
            ["Les données", "Vos clients, vos commandes, vos formulaires", "À vous, avec obligation de restitution (RGPD art. 28)"],
            ["Les comptes tiers", "Mesure d'audience, Search Console, paiement, e-mailing", "Au titulaire du compte"],
          ]}
        />
        <p>
          Un dirigeant qui dit « mon site m&apos;appartient » pense
          généralement aux contenus et aux données — et il a raison sur ces
          deux-là. L&apos;agence qui répond « le code reste à nous » a
          également raison. Les deux parlent d&apos;objets différents.
        </p>

        <h2 id="loi">3. Ce que dit vraiment la loi française</h2>
        <p>
          Trois textes suffisent à comprendre l&apos;essentiel, et ils sont
          consultables gratuitement sur Légifrance.
        </p>
        <GuideTable
          headers={["Texte", "Ce qu'il établit"]}
          rows={[
            ["Art. L111-1 CPI, alinéa 3", "L'existence d'un contrat de commande n'emporte aucune dérogation à la jouissance du droit d'auteur. C'est le socle : la commande n'emporte pas cession"],
            ["Art. L131-3 CPI", "Formalisme impératif : chaque droit cédé fait l'objet d'une mention distincte, et le domaine d'exploitation est délimité quant à l'étendue, la destination, le lieu et la durée"],
            ["Art. L122-7 CPI", "Interprétation restrictive : la cession d'un droit n'emporte pas celle des autres. Tout ce qui n'est pas expressément cédé reste à l'auteur"],
            ["Art. L113-9 CPI", "Exception logiciel : les droits sur le code écrit par un SALARIÉ sont dévolus automatiquement à l'employeur, sans clause"],
            ["Art. L131-1 CPI", "La cession globale des œuvres futures est nulle — point d'attention sur les contrats de maintenance"],
            ["Art. L611-10 CPI", "Un programme d'ordinateur « en tant que tel » n'est pas brevetable : on ne « dépose pas son site à l'INPI »"],
          ]}
        />
        <InfoBox variant="emerald" title="L'exception salarié, et ce qu'elle ne couvre pas">
          L&apos;article L113-9 est une singularité du droit du logiciel :
          les droits sur le code écrit par vos <strong>salariés</strong> dans
          l&apos;exercice de leurs fonctions vous reviennent{" "}
          <strong>automatiquement</strong>, sans acte de cession. Une
          ordonnance du 15 décembre 2021 a étendu ce régime à certaines
          personnes accueillies par convention, notamment les stagiaires et
          les doctorants.
          <br />
          <br />
          Ce que cette dévolution <strong>ne couvre pas</strong> : le
          prestataire indépendant. Un freelance qui développe pour vous reste
          titulaire de ses droits à défaut d&apos;écrit conforme. Retenez
          cette frontière — elle est le cœur de la section 8.
        </InfoBox>
        <InfoBox variant="amber" title="Non, on ne « dépose pas son site à l'INPI »">
          L&apos;argument revient dans des argumentaires commerciaux. Il est
          faux : l&apos;article L611-10 exclut le programme
          d&apos;ordinateur « en tant que tel » de la brevetabilité, et
          l&apos;INPI le confirme sur sa propre page consacrée aux logiciels.
          Déposer un brevet sur un logiciel en tant que tel expose au rejet et
          à la perte des taxes.
          <br />
          <br />
          La protection du code, c&apos;est le droit d&apos;auteur : acquis{" "}
          <strong>sans formalité</strong> dès la création, à condition que
          l&apos;œuvre soit originale. Un dépôt — auprès de l&apos;Agence pour
          la protection des programmes, par enveloppe Soleau ou par constat —
          ne crée aucun droit : c&apos;est un élément de{" "}
          <strong>preuve</strong> de date et de contenu. La Cour de cassation
          l&apos;a d&apos;ailleurs jugé le 17 octobre 2012 : les juges ne
          peuvent pas déduire l&apos;originalité de l&apos;existence de dépôts
          administratifs. Nuance à conserver : une invention à effet technique
          mise en œuvre par un logiciel reste, elle, brevetable.
        </InfoBox>

        <h2 id="deja-a-vous">4. Ce qui vous appartient déjà sans aucune clause</h2>
        <p>
          Cette section change le rapport de force, et presque personne ne
          l&apos;exploite.
        </p>
        <ul>
          <li>
            <strong>Vos apports</strong> : textes que vous avez rédigés ou
            fournis, photographies, logo dont vous détenez les droits,
            maquettes. Ils restent votre propriété quelle que soit la
            situation du code.
          </li>
          <li>
            <strong>Vos données</strong> : clients, commandes, formulaires,
            historique. Elles ne sont pas au prestataire, elles transitent
            par lui.
          </li>
          <li>
            <strong>Le levier RGPD</strong> : l&apos;article 28.3 g) impose
            au sous-traitant, au terme de la prestation et{" "}
            <strong>selon votre choix</strong>, de supprimer ou de vous
            renvoyer toutes les données personnelles, et de détruire les
            copies existantes — sauf obligation légale de conservation.
          </li>
        </ul>
        <InfoBox variant="blue" title="Attention à deux délais qui n'existent pas">
          Vous lirez souvent que le prestataire doit restituer les données
          « sous 30 jours » et certifier leur suppression « sous 60 jours ».{" "}
          <strong>Ces délais ne figurent nulle part dans le RGPD.</strong> Ils
          proviennent de modèles de contrats commerciaux et sont devenus des
          standards par répétition.
          <br />
          <br />
          Conséquence pratique, et elle est à votre avantage : le principe est
          légal, les délais sont <strong>à négocier</strong>. Inscrivez-les
          dans votre contrat plutôt que de croire qu&apos;ils s&apos;imposent
          d&apos;eux-mêmes.
        </InfoBox>

        <GuideInlineCTA
          title="Un doute sur ce que dit votre devis ?"
          description="Envoyez-nous votre situation en 3 minutes. Réponse personnelle sous 24 h ouvrées, gratuite — y compris quand la réponse est « ne négociez pas la cession, réclamez les accès »."
        />

        <h2 id="saas">5. Wix, Shopify, Webflow : quand il n&apos;y a pas de code à céder</h2>
        <p>
          C&apos;est la situation d&apos;une large part des PME françaises, et
          elle est absente des pages qui traitent ce sujet. Sur une
          plateforme en ligne, la question « suis-je propriétaire du code »
          est <strong>sans objet</strong> : il n&apos;existe pas de code
          source cessible, l&apos;architecture appartient à l&apos;éditeur et
          le site tourne sur ses serveurs.
        </p>
        <p>
          Ce n&apos;est pas un défaut en soi, et cette section n&apos;est pas
          un argumentaire contre les plateformes — beaucoup
          d&apos;entreprises y sont très bien. C&apos;est simplement que la
          bonne question change : elle devient{" "}
          <strong>« que puis-je exporter, et sous quel format ? »</strong>.
        </p>
        <GuideTable
          headers={["Plateforme", "Ce que dit sa documentation officielle"]}
          rows={[
            ["Wix", "L'export du site ou de son code vers un autre hébergeur n'est pas possible : l'architecture est propriétaire. Wix reconnaît en revanche que le contenu appartient au client"],
            ["Webflow", "L'export du code est possible, mais réservé aux formules payantes de niveau Workspace, avec des exclusions notables (contenu du CMS, comptes utilisateurs, e-commerce, composants de code)"],
            ["Shopify", "Formules France relevées le 19/07/2026 : Basic 36 €/mois, Grow 105 €, Advanced 384 €, Plus à partir de 2 100 € — respectivement 25 €, 66 € et 289 € en engagement annuel"],
          ]}
        />
        <p>
          Votre checklist de réversibilité sur plateforme tient en quatre
          points : exportez régulièrement vos <strong>contenus</strong> et
          votre <strong>base clients</strong> dans un format ouvert ; vérifiez
          que le <strong>nom de domaine</strong> est enregistré à votre nom et
          non à celui de la plateforme ou de l&apos;agence ; conservez vos{" "}
          <strong>visuels sources</strong> ailleurs que sur la plateforme ; et
          gardez à l&apos;esprit que la mise en page, elle, n&apos;est pas
          portable. Notre guide{" "}
          <Link href="/guides/wix-ou-wordpress">Wix ou WordPress</Link> chiffre
          ce que coûte réellement une sortie.
        </p>

        <h2 id="briques">6. Les briques que votre prestataire ne peut pas céder</h2>
        <p>
          Voici le point que ne dit aucune page concurrente, et il rend une
          formule contractuelle très répandue{" "}
          <strong>partiellement inexécutable</strong>. Quand un devis promet
          la « cession pleine et entière de tous les droits », il promet plus
          que ce que son auteur détient.
        </p>
        <GuideTable
          headers={["La brique", "Pourquoi elle échappe à la cession"]}
          rows={[
            ["Thème premium acheté sur une place de marché", "La licence n'est en principe pas transférable au-delà d'un produit final unique : un thème acheté une fois ne couvre qu'un site"],
            ["Extensions et modules WordPress", "WordPress est sous licence GPL, et la fondation considère thèmes et extensions comme des œuvres dérivées relevant de cette licence"],
            ["Composants open source (npm, bibliothèques)", "Ils restent régis par leur licence d'origine — MIT, GPL, Apache. Personne ne peut vous les céder"],
            ["Polices de caractères", "Sous licence d'usage, souvent limitée en nombre de pages vues ou de domaines"],
            ["Photographies de banque d'images", "Licence d'utilisation, généralement non transférable sans avenant"],
          ]}
        />
        <InfoBox variant="emerald" title="La clause qui manque à tous les contrats">
          Un contrat sérieux doit comporter une{" "}
          <strong>annexe listant les briques NON cédées</strong>, avec pour
          chacune son éditeur, son régime de licence, son coût annuel et le
          compte auquel elle est rattachée. C&apos;est en trois lignes, et
          cela évite exactement la mauvaise surprise de Sandrine : son
          configurateur repose sur un thème sous licence à 79 € par an
          rattachée au compte de l&apos;agence. Aucune cession de droits sur
          le code ne réglera ce point — il faut ouvrir sa propre licence.
          <br />
          <br />
          Demandez cette annexe. Une agence qui refuse de lister ce
          qu&apos;elle ne peut pas vous céder vous dit quelque chose
          d&apos;utile.
        </InfoBox>

        <h2 id="ia">7. Le code écrit par une IA</h2>
        <p>
          Sujet neuf, et nous allons être prudents là où d&apos;autres seront
          affirmatifs. <strong>Le droit français n&apos;a pas tranché</strong>{" "}
          à notre connaissance, et personne ne peut vous dire aujourd&apos;hui
          avec certitude ce que vaut une clause de cession portant sur du code
          généré.
        </p>
        <p>Le raisonnement, lui, est solide et se déroule en trois temps.</p>
        <ol>
          <li>
            Une œuvre n&apos;est protégée que si elle est{" "}
            <strong>originale</strong>. Pour le logiciel, la Cour de cassation
            définit ce critère depuis l&apos;arrêt Babolat contre Pachot du
            7 mars 1986 : un apport intellectuel et un effort personnalisé
            dépassant la mise en œuvre d&apos;une logique automatique et
            contraignante.
          </li>
          <li>
            La Cour de justice de l&apos;Union européenne exige, depuis
            l&apos;arrêt Infopaq du 16 juillet 2009, une{" "}
            <strong>création intellectuelle propre à son auteur</strong>,
            supposant des choix libres et créatifs.
          </li>
          <li>
            Si une production n&apos;est pas protégeable faute
            d&apos;originalité, alors{" "}
            <strong>il n&apos;y a rien à céder</strong> : la clause porte sur
            un objet inexistant.
          </li>
        </ol>
        <InfoBox variant="amber" title="Les deux chiffres qu'on vous citera, et ce qu'ils valent">
          <strong>« GitHub Copilot écrit 46 % du code »</strong> : le chiffre
          vient de la télémétrie interne de l&apos;éditeur de l&apos;outil.
          Ce qu&apos;elle mesure, c&apos;est l&apos;acceptation de suggestions
          dans les fichiers où l&apos;outil est actif — pas la part de code
          d&apos;un projet livré. Aucune méthodologie n&apos;est publiée.
          <br />
          <br />
          <strong>« Plus de 25 % du nouveau code de Google est généré par
          IA »</strong> : c&apos;est une déclaration orale du dirigeant
          d&apos;Alphabet lors d&apos;une conférence de résultats en octobre
          2024, sans définition de la métrique ni audit. Une entreprise qui
          vend des outils d&apos;IA parlant de sa propre adoption d&apos;IA.
          <br />
          <br />
          La donnée la plus honnête disponible est l&apos;usage{" "}
          <em>déclaré</em> : selon l&apos;enquête Stack Overflow 2025, menée
          auprès de 33 662 répondants dont 26 004 développeurs
          professionnels, 84 % utilisent ou prévoient d&apos;utiliser des
          outils d&apos;IA et 51 % des professionnels en utilisent
          quotidiennement — mais 46 % se méfient de l&apos;exactitude des
          résultats. Échantillon auto-sélectionné, donc non représentatif :
          cela mesure un usage, pas un volume de code.
        </InfoBox>
        <p>
          Que faire concrètement ? Ajoutez au contrat une{" "}
          <strong>déclaration du prestataire sur le recours à des outils de
          génération</strong> et une garantie d&apos;éviction couvrant les
          réclamations de tiers. Ce n&apos;est pas une protection absolue —
          rien ne l&apos;est sur un sujet non tranché — mais c&apos;est la
          seule chose sérieuse à faire aujourd&apos;hui. À titre
          d&apos;indice de convergence, et non de règle applicable en France :
          le Copyright Office américain a conclu en janvier 2025 qu&apos;une
          production entièrement générée en réponse à un prompt n&apos;est pas
          protégeable, la seule sélection de prompts ne suffisant pas.
        </p>

        <h2 id="chaine">8. Freelance, offshore, stagiaire : la chaîne de titularité</h2>
        <p>
          Le principe tient en une phrase :{" "}
          <strong>une agence ne peut vous céder que ce qu&apos;elle détient
          réellement</strong>.
        </p>
        <GuideTable
          headers={["Qui a écrit le code", "L'agence détient-elle les droits ?"]}
          rows={[
            ["Un salarié de l'agence", "Oui, automatiquement (art. L113-9)"],
            ["Un stagiaire accueilli par convention", "Oui, depuis l'ordonnance du 15 décembre 2021"],
            ["Un freelance sous-traité", "NON, sauf cession écrite conforme signée entre l'agence et lui"],
            ["Un prestataire offshore", "NON, même réponse — et la preuve est plus difficile à obtenir"],
            ["Un développeur généraliste occasionnel", "NON, sauf écrit"],
          ]}
        />
        <p>
          La clause à exiger tient en deux lignes :{" "}
          <em>« Le prestataire garantit détenir l&apos;intégralité des droits
          cédés, y compris ceux afférents aux développements réalisés par ses
          sous-traitants, et s&apos;engage à communiquer sur simple demande
          les actes de cession correspondants. »</em> Une agence sérieuse
          l&apos;accepte sans discuter : elle a normalement ces documents.
          Une agence qui hésite vous apprend quelque chose sur son
          organisation.
        </p>

        <h2 id="liberte">9. Posséder le code ou pouvoir changer de prestataire</h2>
        <p>
          Voici le tableau qui résume la thèse de ce guide. Trois variables,
          et la propriété n&apos;est pas la plus déterminante.
        </p>
        <FormulaBox>
          {`VOTRE LIBERTÉ RÉELLE = TITULARITÉ × ACCÈS × STANDARDITÉ

  Titularité   : détenez-vous les droits sur le code ?
  Accès        : pouvez-vous, aujourd'hui, atteindre le domaine,
                 le serveur, la base et le dépôt de code ?
  Standardité  : un autre prestataire sait-il reprendre
                 cette technologie sans formation spécifique ?

C'est un produit, pas une somme : une seule variable à zéro
et le résultat est zéro.`}
        </FormulaBox>
        <GuideTable
          headers={["Votre situation", "Diagnostic"]}
          rows={[
            ["Droits cédés, accès complets, technologie standard", "Libre. Vous changez de prestataire en une à deux semaines"],
            ["Droits cédés, mais aucun accès", "Bloqué. Vous êtes propriétaire d'un code que vous ne pouvez pas atteindre"],
            ["Pas de cession, mais accès complets et technologie standard", "Largement libre en pratique — c'est le cas le plus sous-estimé"],
            ["Droits cédés, accès complets, technologie exotique", "Semi-libre : peu de prestataires savent reprendre, donc peu de concurrence sur les devis"],
            ["Ni cession, ni accès", "Situation de Sandrine. Voir la section 14"],
          ]}
        />
        <p>
          Conséquence pour votre prochain devis : si vous devez négocier une
          seule chose, <strong>négociez les accès</strong>. Ils coûtent zéro
          euro au prestataire, se refusent difficilement, et vous protègent
          davantage qu&apos;une clause de cession mal rédigée.
        </p>

        <h2 id="checklist">10. La checklist de passation : les 14 accès</h2>
        <p>
          À réclamer dans cet ordre. Les quatre premiers sont les plus
          urgents : ils conditionnent l&apos;existence même de votre site en
          ligne.
        </p>
        <GuideTable
          headers={["#", "L'accès", "Pourquoi il compte"]}
          rows={[
            ["1", "Compte chez le bureau d'enregistrement, avec vous comme titulaire déclaré", "Le titulaire déclaré détient le domaine, indépendamment de qui paie"],
            ["2", "Le code « auth-info » du domaine", "Sans lui, impossible de changer de bureau d'enregistrement"],
            ["3", "La zone DNS", "Qui la contrôle peut faire disparaître votre site en dix minutes"],
            ["4", "Le compte hébergeur ou serveur", "L'endroit où vit réellement le site"],
            ["5", "La base de données : accès et export récent", "Vos contenus et vos données y sont"],
            ["6", "Le dépôt de code, avec tout son historique", "Sans lui, une cession de droits ne sert à rien en pratique"],
            ["7", "Le back-office en compte administrateur", "Pour publier sans dépendre de personne"],
            ["8", "Les variables d'environnement et les clés d'accès", "Elles ne sont jamais dans le code et se transmettent à part"],
            ["9", "La gestion du certificat de sécurité", "Son expiration rend le site inaccessible"],
            ["10", "La Search Console, en propriété vérifiée", "C'est votre historique de référencement"],
            ["11", "L'outil de mesure d'audience", "Vos statistiques, souvent non exportables après coup"],
            ["12", "Le compte du prestataire de paiement", "Il porte vos flux financiers"],
            ["13", "Le service d'envoi d'e-mails", "Formulaires, confirmations de commande, newsletters"],
            ["14", "Les licences des briques tierces, rattachées à VOTRE compte", "Voir la section 6 : elles ne se cèdent pas, elles se rachètent"],
          ]}
        />
        <InfoBox variant="blue" title="Le message à envoyer, tel quel">
          <em>« Bonjour, dans le cadre de la bonne tenue de nos actifs
          numériques, je vous remercie de me transmettre sous quinze jours la
          liste des accès suivants, ainsi qu&apos;un export à jour de la base
          de données : [liste]. Je vous demande également, au titre de
          l&apos;article 28.3 g) du RGPD, de préciser les modalités de
          restitution des données personnelles traitées pour notre compte.
          Merci de me confirmer par retour le nom du titulaire déclaré de
          notre nom de domaine. »</em>
          <br />
          <br />
          Ce message ne déclare aucun conflit — il demande une mise en ordre.
          C&apos;est ce qui le rend efficace. Envoyez-le{" "}
          <strong>avant</strong> d&apos;annoncer que vous changez de
          prestataire.
        </InfoBox>

        <h2 id="prix">11. Combien coûte une cession de droits</h2>
        <p>
          Nous devons ici faire quelque chose qu&apos;aucune page concurrente
          ne fait : <strong>reconnaître que nous ne savons pas</strong>.
        </p>
        <p>
          Il n&apos;existe <strong>aucun barème public</strong> du prix
          d&apos;une cession de droits sur un site. Aucune étude sectorielle,
          aucun organisme professionnel, aucune source primaire. Les seuls
          chiffres qui circulent proviennent de plateformes de mise en
          relation rémunérées à l&apos;apport d&apos;affaires, avec des
          méthodologies non publiées. Nous ne les reprendrons pas, et nous
          n&apos;inventerons pas la fourchette que d&apos;autres auraient
          publiée à notre place.
        </p>
        <p>
          Ce que nous pouvons dire relève de nos propres observations
          d&apos;agence, et nous l&apos;identifions comme tel :
        </p>
        <ul>
          <li>
            <strong>Négociée à la commande</strong>, une cession ne coûte au
            prestataire qu&apos;un temps de rédaction. Elle renchérit donc peu
            un devis — et si on vous annonce un supplément important, demandez
            ce qu&apos;il finance exactement.
          </li>
          <li>
            <strong>Négociée a posteriori</strong>, il n&apos;y a pas de prix
            de marché : il y a ce que l&apos;autre partie estime pouvoir
            obtenir, en fonction de votre dépendance. C&apos;est précisément
            pourquoi la section 10 passe avant celle-ci.
          </li>
        </ul>
        <InfoBox variant="amber" title="Notre conflit d'intérêt, et les cas où nous déconseillons la cession">
          Nous vendons du développement sur mesure, et nous cédons les droits
          par défaut. Nous avons donc intérêt à ce que vous jugiez ce point
          important. Voici les cas où, malgré cela, négocier une cession ne
          vaut pas son coût :
          <ul className="list-disc pl-4 space-y-1.5 mt-3">
            <li>Votre site est sur une plateforme en ligne : il n&apos;y a pas de code cessible, la question est sans objet (section 5).</li>
            <li>C&apos;est un site vitrine standard de moins de 10 000 € : le redévelopper coûterait souvent moins cher qu&apos;une négociation tendue.</li>
            <li>Vous n&apos;avez pas encore sécurisé vos accès : mettez ce budget-là en priorité, il vous protège davantage.</li>
          </ul>
        </InfoBox>

        <h2 id="modele">12. Le modèle de clause conforme à L131-3</h2>
        <p>
          Deux pages ayant « contrat » dans leur titre ne fournissent aucun
          texte. Voici le nôtre. Ce n&apos;est pas un modèle prêt à signer —
          faites-le relire — mais il montre ce à quoi doit ressembler une
          clause qui respecte le formalisme.
        </p>
        <FormulaBox>
          {`CLAUSE DE CESSION — version contrat

Le Prestataire cède au Client, à titre exclusif et définitif,
les droits patrimoniaux suivants sur les développements
spécifiques réalisés au titre du présent contrat :

  · le droit de reproduction, permanente ou provisoire,
    en tout ou partie et par tout moyen ;
  · le droit de traduction, d'adaptation, d'arrangement
    et de modification, et de reproduction du résultat ;
  · le droit de mise sur le marché, à titre gratuit
    ou onéreux, y compris la location.

Étendue     : tous supports, exploitation interne et externe
Destination : exploitation commerciale et non commerciale
Territoire  : monde entier
Durée       : durée légale de protection du droit d'auteur

Le Prestataire garantit détenir l'intégralité des droits cédés,
y compris ceux afférents aux développements de ses sous-traitants,
et communiquera les actes de cession correspondants sur demande.

Les éléments tiers listés en Annexe 1 sont exclus de la présente
cession et demeurent régis par leur licence d'origine.

ANNEXE 1 — éléments non cédés
  Pour chacun : éditeur · licence · coût annuel · compte de rattachement`}
        </FormulaBox>
        <InfoBox variant="emerald" title="La version courte, insérable dans un devis">
          <em>« Cession exclusive et définitive au Client des droits
          patrimoniaux (reproduction, adaptation, modification, mise sur le
          marché) sur les développements spécifiques, pour tous supports, le
          monde entier et la durée légale de protection. Garantie de
          titularité étendue aux sous-traitants. Éléments tiers sous licence
          exclus et listés en annexe. Remise des accès et du dépôt de code à
          la livraison. »</em>
          <br />
          <br />
          Trois précisions importantes. Le <strong>droit moral</strong> —
          être cité comme auteur — n&apos;est pas cessible en droit français :
          aucune clause ne peut l&apos;acheter. Une{" "}
          <strong>licence, même exclusive et perpétuelle, n&apos;est pas une
          cession</strong> : c&apos;est une autorisation, et elle ne survit
          pas nécessairement à une liquidation. Enfin, l&apos;article L131-1
          frappe de nullité la cession globale des œuvres futures — attention
          aux contrats de maintenance qui prétendraient céder par avance tous
          les développements à venir.
        </InfoBox>

        <h2 id="relire-devis">13. Relisez votre devis en trois minutes</h2>
        <GuideTable
          headers={["Si vous lisez…", "Ce que cela signifie"]}
          rows={[
            ["« droit d'usage », « licence d'utilisation »", "Vous n'êtes PAS propriétaire. C'est une autorisation"],
            ["« licence non exclusive »", "Le prestataire peut réutiliser le même code chez un concurrent"],
            ["« tous droits réservés » / « le prestataire reste propriétaire »", "Position explicite : aucune cession"],
            ["« cession pleine et entière de tous les droits », sans énumération", "Formule fragile au regard de L131-3, et partiellement inexécutable (section 6)"],
            ["Rien du tout sur les droits", "Le droit commun s'applique : le prestataire reste titulaire"],
            ["Aucune mention des accès ni du dépôt de code", "Le signal le plus important, et le plus fréquemment absent"],
          ]}
        />
        <p>
          Les trois questions à poser avant de signer, dans cet ordre :{" "}
          <strong>qui sera le titulaire déclaré du nom de domaine ?</strong>{" "}
          <strong>Le dépôt de code me sera-t-il remis à la livraison ?</strong>{" "}
          <strong>Quelles briques tierces resteront rattachées à votre
          compte ?</strong> Les réponses tiennent en trois lignes dans un
          devis, et elles valent plus que dix pages de conditions générales.
          Notre guide{" "}
          <Link href="/guides/choisir-son-agence-web">choisir son agence
          web</Link> donne la grille de lecture complète d&apos;une
          proposition.
        </p>

        <h2 id="conflit">14. Le conflit est déjà là : que faire</h2>
        <p>
          La plupart des pages sur ce sujet s&apos;arrêtent à « il aurait
          fallu prévoir une clause » — ce qui est parfaitement inutile pour
          qui les lit justement parce qu&apos;il ne l&apos;a pas fait. Voici
          la marche à suivre.
        </p>
        <ol>
          <li>
            <strong>Constatez et sauvegardez.</strong> Exportez tout ce à quoi
            vous avez encore accès : contenus, base de données, statistiques.
            Faites-le avant toute annonce.
          </li>
          <li>
            <strong>Demandez par écrit</strong>, calmement, la liste des
            accès de la section 10 et la restitution des données au titre du
            RGPD. Recommandé avec accusé de réception.
          </li>
          <li>
            <strong>Mise en demeure</strong>, avec un délai raisonnable et
            l&apos;énumération précise de ce que vous réclamez.
          </li>
          <li>
            <strong>Référé</strong> si l&apos;urgence est caractérisée. Le
            juge des référés peut ordonner des mesures conservatoires pour
            faire cesser un trouble manifestement illicite.
          </li>
        </ol>
        <InfoBox variant="amber" title="Les vrais délais de la justice française">
          Selon les statistiques du ministère de la justice pour 2023, les
          tribunaux judiciaires traitent les affaires en{" "}
          <strong>7,3 mois en moyenne</strong> — dont{" "}
          <strong>3,7 mois pour les référés</strong> et{" "}
          <strong>8,1 mois au fond</strong>. La moitié des affaires sont
          terminées en moins de 4,4 mois. L&apos;âge du stock au 31 décembre
          2023 était de 18,3 mois.
          <br />
          <br />
          Attention à un chiffre que nous avons vu mal attribué : les{" "}
          <strong>14,3 mois</strong> souvent cités sont le délai moyen des{" "}
          <strong>conseils de prud&apos;hommes</strong>, pas des tribunaux
          judiciaires. Un litige sur la propriété d&apos;un site relève du
          tribunal judiciaire, ou du tribunal de commerce entre commerçants.
          <br />
          <br />
          Autre précision utile : un constat par commissaire de justice sur
          internet relève des <strong>honoraires libres</strong>, pas du tarif
          réglementé. Les fourchettes qui circulent sont des observations de
          marché — faites chiffrer au cas par cas.
        </InfoBox>
        <InfoBox variant="emerald" title="L'arbitrage de Sandrine">
          Trois options chiffrées, à comparer honnêtement.
          <br />
          <br />
          <strong>Payer les 9 000 € HT</strong> : le plus rapide, mais elle
          achète des droits sur un code qu&apos;elle n&apos;a jamais vu, dont
          une partie vient d&apos;un freelance sous-traité — la garantie de
          titularité est douteuse — et une partie n&apos;est peut-être pas
          protégeable. Elle paierait pour un objet mal défini, et le thème
          sous licence resterait à racheter.
          <br />
          <br />
          <strong>Engager une procédure</strong> : 3,7 mois en référé dans le
          meilleur des cas, avec des frais d&apos;avocat, un résultat
          incertain — la jurisprudence va dans les deux sens — et un
          configurateur qui génère 40 à 60 demandes par mois pendant ce
          temps-là. L&apos;incertitude est le vrai coût.
          <br />
          <br />
          <strong>Redévelopper pour 14 500 € HT</strong> : plus cher de 5 500 €
          que le rachat, mais elle obtient un code neuf, une cession propre
          rédigée dès le devis, ses propres licences, ses accès, et six
          semaines de délai maîtrisé. <strong>C&apos;est ce qu&apos;elle a
          choisi</strong> — en récupérant d&apos;abord son nom de domaine, qui
          était le seul point réellement bloquant.
          <br />
          <br />
          La leçon générale : dès que le rachat approche le coût du
          redéveloppement, le redéveloppement gagne presque toujours, parce
          qu&apos;il achète en plus de la certitude.
        </InfoBox>

        <h2 id="disparition">15. Si le prestataire disparaît</h2>
        <p>
          Liquidation judiciaire, cessation d&apos;activité, décès du
          freelance, agence rachetée : ce scénario n&apos;est traité par
          aucune des pages concurrentes, et c&apos;est celui contre lequel une
          clause de cession vous protège le moins.
        </p>
        <p>
          La parade s&apos;appelle l&apos;<strong>entiercement</strong> : le
          dépôt du code chez un tiers de confiance qui vous le remet si le
          prestataire disparaît. L&apos;Agence pour la protection des
          programmes publie ses tarifs, ce qui permet de raisonner
          concrètement.
        </p>
        <GuideTable
          headers={["Prestation (grille officielle de juin 2024)", "Prix HT"]}
          rows={[
            ["Adhésion annuelle — préalable obligatoire à tout dépôt", "830 €/an"],
            ["Dépôt standard (jusqu'à 10 Go et 1 000 fichiers, stockage en France)", "195 € par dépôt"],
            ["Dépôt vérifié (inventaire, empreinte de chaque fichier, rapport)", "800 € par dépôt"],
            ["Dépôt contrôlé (installation et configuration des environnements)", "à partir de 3 800 €"],
            ["Entiercement — clause d'accès, jusqu'à 5 bénéficiaires", "450 €/an"],
            ["Accord d'entiercement bipartite", "900 €/an"],
            ["Accord d'entiercement avec l'APP cosignataire", "1 200 €/an"],
          ]}
        />
        <InfoBox variant="blue" title="Deux choses à savoir avant d'y aller">
          La formule à <strong>1 200 € par an</strong> est la seule où le
          tiers de confiance est <strong>partie à l&apos;accord</strong> et
          peut donc déclencher la remise. Les formules moins chères ne lui
          donnent pas ce rôle — vérifiez ce point, il conditionne l&apos;utilité
          du dispositif.
          <br />
          <br />
          Le coût réel d&apos;entrée la première année est donc de{" "}
          <strong>830 € d&apos;adhésion + 195 € de dépôt</strong>, soit
          1 025 € HT, avant même l&apos;entiercement. À comparer au chiffre de
          « 45 € valable 4 ans » encore répété dans des articles de
          vulgarisation : il est périmé d&apos;un facteur vingt. Une réduction
          de moitié sur l&apos;adhésion existe pour les start-up pendant trois
          ans.
          <br />
          <br />
          Notre avis franc : pour un site vitrine, c&apos;est
          disproportionné. Pour une application métier dont dépend votre
          activité — le configurateur de Sandrine, par exemple — cela se
          discute sérieusement.
        </InfoBox>

        <h2 id="methode">16. Sécuriser sa titularité : la méthode en 5 étapes</h2>
        <ol>
          <li>
            <strong>Vérifiez aujourd&apos;hui qui est le titulaire déclaré de
            votre nom de domaine.</strong> C&apos;est gratuit, cela prend deux
            minutes, et c&apos;est le point de blocage le plus fréquent.
          </li>
          <li>
            <strong>Réclamez les 14 accès de la section 10</strong>, avec le
            message type fourni. Avant tout conflit, pas pendant.
          </li>
          <li>
            <strong>Faites inscrire la cession dans le prochain devis</strong>,
            avec l&apos;annexe des briques non cédables et la garantie de
            titularité étendue aux sous-traitants.
          </li>
          <li>
            <strong>Exportez régulièrement</strong> contenus, base de données
            et statistiques. C&apos;est votre assurance, et elle est gratuite.
          </li>
          <li>
            <strong>Documentez la chaîne</strong> : qui a écrit quoi, sous
            quel statut, avec quelles licences. C&apos;est exactement ce
            qu&apos;un repreneur ou un fonds vérifiera en audit d&apos;acquisition,
            des années avant que vous n&apos;y pensiez.
          </li>
        </ol>
        <p>
          Chez Hagnéré Code, <strong>la cession des droits est écrite dans le
          devis par défaut</strong>, l&apos;annexe des briques tierces est
          fournie, le nom de domaine est enregistré à votre nom et le dépôt de
          code vous est remis à la livraison. Ce n&apos;est pas une faveur :
          c&apos;est le minimum, et il devrait être partout. Nos{" "}
          <Link href="/tarifs">tarifs sont publics</Link>, et notre guide{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">prix d&apos;un
          logiciel sur mesure</Link> détaille ce que recouvre un
          développement spécifique.
        </p>

        <GuideInlineCTA
          title="Faites relire votre contrat avant de signer"
          description="Décrivez votre situation en 3 minutes : réponse personnelle sous 24 h ouvrées, gratuite et sans engagement. Nous vous dirons franchement si la cession vaut le coup — ou s'il faut d'abord réclamer vos accès."
        />

        <InfoBox variant="emerald" title="À retenir : les 7 points de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Payer ne transfère aucun droit</strong> : l&apos;article L111-1, alinéa 3, est explicite.</li>
            <li><strong>Titularité × accès × standardité</strong> : c&apos;est un produit. Une variable à zéro et vous êtes bloqué.</li>
            <li><strong>Les accès valent plus que la cession</strong> en pratique — et ils coûtent zéro euro au prestataire.</li>
            <li><strong>Une « cession de tous les droits » est partiellement inexécutable</strong> : thèmes, extensions, composants et polices restent à leurs éditeurs.</li>
            <li><strong>L&apos;agence ne cède que ce qu&apos;elle détient</strong> : ses salariés oui, ses freelances non.</li>
            <li><strong>Vos contenus et vos données sont déjà à vous</strong>, et le RGPD impose leur restitution.</li>
            <li><strong>Aucun barème public n&apos;existe</strong> pour le prix d&apos;une cession. Qui vous en donne un l&apos;a inventé.</li>
          </ul>
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Textes de loi (Légifrance) :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278868" target="_blank" rel="noopener noreferrer">art. L111-1 CPI</a>,{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958" target="_blank" rel="noopener noreferrer">art. L131-3 CPI</a>,{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278922" target="_blank" rel="noopener noreferrer">art. L122-7 CPI</a>,{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818" target="_blank" rel="noopener noreferrer">art. L113-9 CPI</a>,{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006279404" target="_blank" rel="noopener noreferrer">art. L611-10 CPI</a>.
          Jurisprudence :{" "}
          <a href="https://www.legifrance.gouv.fr/juri/id/JURITEXT000026516632" target="_blank" rel="noopener noreferrer">Cass. 1re civ., 17 octobre 2012, n° 11-21.641</a> ;
          Cass. Ass. plén., 7 mars 1986, n° 83-10.477 (Babolat c/ Pachot) ;
          CJCE, 16 juillet 2009, Infopaq, aff. C-5/08.
          Nom de domaine :{" "}
          <a href="https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf" target="_blank" rel="noopener noreferrer">AFNIC, Guide pratique du titulaire d&apos;un nom de domaine en .fr, édition 2024</a>.
          Entiercement :{" "}
          <a href="https://www.app.asso.fr/wp-content/uploads/APP-price-legal-entities.pdf" target="_blank" rel="noopener noreferrer">APP, grille tarifaire personnes morales, applicable au 17 juin 2024</a>.
          Données de justice :{" "}
          <a href="https://www.justice.gouv.fr/sites/default/files/2025-01/RSJ2024%20Chapitre%204.pdf" target="_blank" rel="noopener noreferrer">Ministère de la justice, Références Statistiques Justice, édition 2024, données 2023</a>.
          Plateformes :{" "}
          <a href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere" target="_blank" rel="noopener noreferrer">Wix Help Center</a>,{" "}
          <a href="https://www.shopify.com/fr/tarifs" target="_blank" rel="noopener noreferrer">Shopify France (relevé le 19/07/2026)</a>.
          Code généré :{" "}
          <a href="https://www.copyright.gov/newsnet/2025/1060.html" target="_blank" rel="noopener noreferrer">U.S. Copyright Office, « Copyright and Artificial Intelligence, Part 2 », 29 janvier 2025</a> et{" "}
          <a href="https://survey.stackoverflow.co/2025/ai" target="_blank" rel="noopener noreferrer">Stack Overflow Developer Survey 2025</a>.
        </p>
        <p className="text-sm">
          <strong>Ce guide est une information générale, pas un conseil
          juridique.</strong> Il ne remplace pas l&apos;analyse d&apos;un
          avocat en propriété intellectuelle, que nous vous recommandons pour
          la rédaction définitive d&apos;une clause comme pour toute
          procédure. Les décisions du tribunal de commerce de Besançon
          (23 mars 2016) et de la cour d&apos;appel de Douai (7 avril 2022)
          sont rapportées par des cabinets d&apos;avocats sans numéro de rôle
          publié, et sont des décisions d&apos;espèce : elles ne valent pas
          règle générale. La protégeabilité du code généré par une IA
          n&apos;est tranchée par aucune juridiction française à notre
          connaissance ; le rapport du Copyright Office relève du droit
          américain et n&apos;est cité qu&apos;à titre d&apos;indice de
          convergence. Les tarifs ont été relevés sur les pages officielles
          aux dates indiquées et peuvent avoir changé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
