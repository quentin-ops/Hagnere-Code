import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("landing-page-ou-site-vitrine");

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
        alt: "Trois décisions possibles : conserver une page, créer une page dédiée ou structurer plusieurs pages",
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
      name: "Landing page ou site vitrine",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Puis-je utiliser la même page pour Google Ads et le référencement naturel ?",
    answer:
      "Oui, si les visiteurs cherchent la même offre et doivent obtenir les mêmes réponses. Suivez toutefois séparément l’origine des visites et des demandes. Si l’annonce promet autre chose que la page destinée aux recherches naturelles, une page dédiée peut être plus claire.",
  },
  {
    question:
      "Une fiche Google Business Profile ou une plateforme peut-elle suffire ?",
    answer:
      "Parfois. Si vos clients veulent surtout vérifier des horaires, une adresse ou un téléphone et que la plateforme répond correctement à ce besoin, n’achetez pas un site par réflexe. Notez simplement ce que vous ne contrôlez pas sur cette plateforme.",
  },
  {
    question: "Qui doit posséder le nom de domaine et les accès du site ?",
    answer:
      "Votre entreprise doit au minimum savoir quels comptes utilisent le nom de domaine, l’hébergement, la mesure d’audience et les formulaires, et disposer des accès administrateur prévus au contrat. Faites écrire dans le devis ce qui sera créé, au nom de qui et ce qui vous sera remis.",
  },
  {
    question: "Plusieurs campagnes peuvent-elles envoyer vers la même page ?",
    answer:
      "Oui, si elles s’adressent au même public, présentent la même offre et conduisent vers la même action. Si ces éléments diffèrent, une seule page risque de devenir vague. Décidez à partir des questions du visiteur, pas du nombre de campagnes.",
  },
  {
    question: "Peut-on commencer par une page puis agrandir le site ?",
    answer:
      "Oui, si vous choisissez dès le départ une adresse durable, un responsable des contenus et une place future dans la navigation. Cette progression doit être prévue ; elle n’est pas automatiquement moins coûteuse.",
  },
];

const visitorJourneys = [
  {
    id: "visitor-offer",
    number: "01",
    title: "Le visiteur sait déjà quelle offre l’intéresse",
    situation:
      "Il vient de cliquer sur une annonce, un e-mail, un QR code ou le lien d’un partenaire consacré à une offre précise.",
    questions:
      "Il veut confirmer le contenu de l’offre, la zone couverte, les éléments qui rassurent et la prochaine action.",
    likelyChoice:
      "Une page existante conservée ou corrigée, ou une page dédiée dans le site, peut suffire.",
  },
  {
    id: "visitor-company",
    number: "02",
    title: "Le visiteur doit encore comprendre l’entreprise",
    situation:
      "Il a entendu votre nom, cherche une solution ou compare plusieurs entreprises sans savoir quel service lui correspond.",
    questions:
      "Il veut découvrir vos offres, votre équipe, vos réalisations, votre manière de travailler et vos informations pratiques.",
    likelyChoice:
      "Un site vitrine structuré avec plusieurs pages lui donne des chemins plus clairs.",
  },
];

const questionGroups = [
  {
    id: "questions-offer",
    title: "Questions sur l’offre",
    text: "Que comprend-elle ? Pour qui est-elle faite ? Dans quelle zone ? Que se passe-t-il après le contact ?",
  },
  {
    id: "questions-company",
    title: "Questions sur l’entreprise",
    text: "Qui intervient ? Quelles réalisations peut-on consulter ? Où l’entreprise travaille-t-elle ? Comment la joindre ?",
  },
  {
    id: "questions-choice",
    title: "Questions pour choisir",
    text: "Quel service correspond à mon cas ? Les autres offres répondent-elles à un autre besoin ? Quelle démarche suivre ?",
  },
  {
    id: "questions-practical",
    title: "Questions pratiques",
    text: "Quel formulaire utiliser ? Quelles données fournir ? Quelles informations légales ou relatives aux données consulter ?",
  },
];

const baseChoices = [
  {
    id: "choice-existing",
    number: "1",
    title: "Conserver ou améliorer une page existante",
    when: "La bonne page existe déjà, correspond au message vu avant l’arrivée et contient les informations nécessaires.",
    work: "Ne changez rien sans motif. S’il manque une réponse ou une fonction, corrigez seulement ce point, puis testez le formulaire ou l’appel.",
    warning:
      "Ne reconstruisez pas le site uniquement parce que la page actuelle demande une correction ciblée.",
  },
  {
    id: "choice-dedicated",
    number: "2",
    title: "Créer une page dédiée",
    when: "Une offre, un public ou une campagne mérite un message précis, tandis que l’entreprise possède déjà des informations utiles ailleurs.",
    work: "Poursuivez la promesse qui a conduit le visiteur jusqu’ici et reliez la page aux réalisations, à l’équipe ou aux informations pratiques utiles.",
    warning:
      "Cette page n’a pas besoin d’être placée sur un autre domaine ni coupée du site par principe.",
  },
  {
    id: "choice-site",
    number: "3",
    title: "Développer ou réorganiser un site vitrine",
    when: "Plusieurs publics, services ou questions durables demandent des réponses distinctes avant le contact.",
    work: "Donnez à chaque sujet important une page compréhensible, puis rendez les passages entre ces pages évidents.",
    warning:
      "N’ajoutez pas des pages pour atteindre un nombre arbitraire ou simplement pour « faire du SEO ».",
  },
];

const fictionalExamples = [
  {
    id: "example-existing",
    title: "Une page de contrat d’entretien devenue incomplète",
    arrival:
      "Un responsable de locaux arrive depuis une recherche ou une annonce consacrée à ce contrat.",
    remaining:
      "Il doit vérifier la zone couverte, le contenu à jour, les interventions, le contact et l’entreprise qui s’engage.",
    decision:
      "Conserver l’adresse et améliorer seulement la page existante. Sa promesse est déjà la bonne ; ce sont les réponses et les éléments qui rassurent qui manquent.",
  },
  {
    id: "example-dedicated",
    title: "Une session de formation destinée aux responsables d’équipe",
    arrival:
      "Les visiteurs viennent d’un e-mail ou d’une publication consacrés à cette session précise.",
    remaining:
      "Ils vérifient le programme, le public, les dates, l’intervenant, les conditions et la manière de s’inscrire.",
    decision:
      "Créer une page dédiée dans le site existant. Le site présente l’organisme et les autres formations ; cette page répond précisément à ce visiteur.",
  },
  {
    id: "example-site",
    title: "Un cabinet de conseil avec trois offres différentes",
    arrival:
      "Les visiteurs viennent d’une recommandation, d’une recherche du nom, d’un partenaire ou d’une recherche liée à leur problème.",
    remaining:
      "Ils ne cherchent pas tous la même intervention et veulent comprendre qui intervient, comment et pour quelle prochaine étape.",
    decision:
      "Développer ou réorganiser le site avec plusieurs pages dédiées lorsque les questions diffèrent. Une page unique obligerait des publics distincts à trier un discours trop large.",
  },
];

const publicationChecks = [
  {
    id: "check-request",
    title: "La demande arrive-t-elle vraiment ?",
    text: "Envoyez un formulaire test et appelez le numéro affiché. Vérifiez la réception, la réponse automatique éventuelle et la personne qui reprend la demande.",
  },
  {
    id: "check-update",
    title: "Qui corrige la page après sa mise en ligne ?",
    text: "Écrivez le nom de la personne qui mettra à jour une offre, une date, une réalisation ou une information devenue fausse.",
  },
  {
    id: "check-rights",
    title: "Pouvez-vous publier chaque contenu ?",
    text: "Confirmez les droits d’utilisation des textes, photos, logos, avis et réalisations avant de les mettre en ligne.",
  },
  {
    id: "check-unknown",
    title: "Qu’est-ce qui restera inconnu ?",
    text: "Distinguez les visites, les demandes reçues, les demandes acceptées et les ventes. Aucun de ces nombres ne se déduit automatiquement du précédent.",
  },
];

const choiceSheet = [
  "OFFRE OU SITUATION :",
  "VISITEURS VISÉS :",
  "SOURCE(S) D’ARRIVÉE :",
  "CE QU’ILS ONT VU OU COMPRIS AVANT D’ARRIVER :",
  "PROMESSE À POURSUIVRE SUR LA PAGE :",
  "INFORMATIONS NÉCESSAIRES AVANT D’AGIR :",
  "ACTION PRINCIPALE ATTENDUE :",
  "AUTRES QUESTIONS AVANT CETTE ACTION :",
  "PAGES OU INFORMATIONS À CONSULTER :",
  "MESURE UTILE (demande reçue, appel, rendez-vous, vente...) :",
  "PERSONNE QUI TRAITE CETTE ACTION :",
  "PERSONNE QUI MET LA PAGE À JOUR :",
  "DROITS D’UTILISATION DES TEXTES, PHOTOS ET ÉLÉMENTS PUBLIÉS : acquis / à obtenir / inconnu",
  "DURÉE DE VIE OU DATE DE FIN :",
  "DESTINATION DE L’URL À LA FIN — SI PAGE TEMPORAIRE :",
  "PAGE, PROFIL OU OUTIL EXISTANT À RÉUTILISER :",
  "",
  "DÉCISION DE BASE — UNE SEULE CASE :",
  "[ ] conserver ou améliorer une page existante",
  "[ ] créer une page dédiée",
  "[ ] développer ou réorganiser un site avec plusieurs pages dédiées",
  "",
  "DURÉE — UNE SEULE CASE :",
  "[ ] durable, sans date de fin connue et avec un responsable de mise à jour",
  "[ ] temporaire, avec date de fin et destination future de l’URL",
  "",
  "EMPLACEMENT — UNE SEULE CASE :",
  "[ ] site principal ou site existant",
  "[ ] mini-site seulement si une contrainte impose la séparation OU si identité et public sont tous deux propres au projet ; responsable et durée de vie nommés dans les deux cas",
  "",
  "CONDITION D’ARRÊT :",
  "[ ] attendre : une information, un contenu, un droit ou une personne responsable manque encore",
  "",
  "RAISON PRINCIPALE :",
  "INCONNUES À LEVER :",
  "DATE DE REVUE :",
].join("\n");

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
          { label: "Landing page ou site vitrine" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous préparez une campagne, lancez une offre ou refondez votre présence en ligne ? Partez de ce que vos visiteurs savent déjà et de ce qu’ils doivent encore vérifier avant de vous contacter."
        heroAction={{
          href: "#deux-visiteurs",
          label: "Comparer deux parcours",
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
            title: "3 décisions de base",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Durée + emplacement",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "1 fiche à copier",
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
            href: "/guides/landing-page-google-ads",
            label: "Vérifier une page destinée à Google Ads",
          },
          {
            href: "/guides/preparer-contenus-site-vitrine",
            label: "Préparer les contenus et les éléments qui rassurent",
          },
          {
            href: "/guides/template-ou-site-sur-mesure",
            label: "Choisir le niveau de personnalisation utile",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Comprendre le prix d’un site vitrine",
          },
          {
            href: "/services/sites-vitrines",
            label: "Découvrir l’accompagnement site vitrine",
          },
        ]}
        faqTitle="Landing page et site vitrine : réponses directes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous lancez une offre, une campagne ou votre activité et vous hésitez
          : faut-il créer une page qui conduit vers un formulaire, ou un site
          vitrine qui présente toute l’entreprise ? Si les visiteurs arrivent
          pour une offre claire, une page dédiée peut suffire — et elle peut
          parfaitement faire partie de votre site. S’ils doivent comparer
          plusieurs services, vérifier qui vous êtes ou consulter des
          réalisations, un site avec plusieurs pages sera généralement plus
          utile. Vous pouvez aussi conserver ou corriger une page déjà publiée.
          Enfin, si l’offre, les informations qui rassurent ou la personne
          chargée de répondre ne sont pas prêtes, mieux vaut attendre que
          financer une page sans suite. Ce guide vous aide à choisir à partir du
          parcours réel de vos visiteurs.
        </p>

        <GuideToc
          items={[
            {
              id: "deux-visiteurs",
              label: "1. Deux visiteurs, deux besoins",
            },
            {
              id: "role-et-forme",
              label: "2. Landing page, one-page et site vitrine",
            },
            {
              id: "origine",
              label: "3. Ce qui précède l’arrivée",
            },
            {
              id: "questions",
              label: "4. Les questions déterminent les pages",
            },
            {
              id: "trois-decisions",
              label: "5. Trois décisions de base",
            },
            {
              id: "qualificatifs",
              label: "6. Durée et emplacement",
            },
            {
              id: "google-et-confiance",
              label: "7. Ce que Google change — et ne change pas",
            },
            {
              id: "fiche",
              label: "8. La fiche avant le devis",
            },
            {
              id: "situations",
              label: "9. Trois situations concrètes",
            },
            {
              id: "apres-clic",
              label: "10. Qui répond et qui maintient ?",
            },
            { id: "verdict", label: "Votre décision aujourd’hui" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="deux-visiteurs">
          1. Deux visiteurs, deux niveaux d’information
        </h2>

        <p>
          Imaginez deux personnes qui arrivent le même jour sur le site d’une
          entreprise. La première connaît déjà l’offre. La seconde connaît à
          peine l’entreprise. Leur imposer exactement la même page revient à
          ignorer ce qui s’est passé avant leur visite.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          {visitorJourneys.map((journey) => (
            <section
              key={journey.id}
              aria-labelledby={journey.id}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <p className="mb-2 text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400">
                PARCOURS {journey.number}
              </p>
              <h3
                id={journey.id}
                className="mb-4 text-base font-semibold text-zinc-950 dark:text-white"
              >
                {journey.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Avant d’arriver :</strong> {journey.situation}
              </p>
              <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Il doit encore savoir :</strong> {journey.questions}
              </p>
              <p className="mb-0 text-sm font-medium leading-relaxed text-zinc-950 dark:text-zinc-100">
                {journey.likelyChoice}
              </p>
            </section>
          ))}
        </div>

        <p>
          Le premier parcours n’impose pas une nouvelle page. Si une page de
          service existante reprend déjà la même promesse, conservez-la ou
          corrigez seulement ce qui manque. À l’inverse, le second parcours ne
          signifie pas qu’il faut publier dix pages : il montre seulement que le
          visiteur doit pouvoir explorer plusieurs réponses avant de choisir.
        </p>

        <h2 id="role-et-forme">
          2. Landing page, site one-page et site vitrine ne désignent pas la
          même chose
        </h2>

        <p>
          Une landing page est d’abord une <strong>page d’arrivée</strong>. Dans
          Google Ads, Google la définit comme la page vers laquelle l’annonce
          envoie l’utilisateur, généralement l’adresse finale de l’annonce. La
          documentation ne dit pas que cette page doit être séparée du site.{" "}
          <a
            href="https://support.google.com/google-ads/answer/14086?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir la définition officielle de Google Ads
          </a>
          .
        </p>

        <GuideTable
          caption="Trois expressions qui ne décrivent pas la même chose"
          headers={["Expression", "Ce qu’elle décrit", "Ce qu’il faut retenir"]}
          rows={[
            [
              "Landing page",
              "Le rôle d’une page dans un parcours : c’est l’endroit où une personne arrive après un clic ou un lien.",
              "Elle peut être une page de campagne ou une page de service intégrée au site.",
            ],
            [
              "Site one-page",
              "La forme d’un site dont les contenus principaux sont réunis sur une longue page.",
              "Il peut recevoir plusieurs types de visiteurs ; ce n’est pas un synonyme de landing page.",
            ],
            [
              "Site vitrine",
              "La présence durable qui présente l’entreprise, ses offres et les moyens de la contacter.",
              "Il peut contenir une seule longue page ou plusieurs pages, dont des landing pages.",
            ],
          ]}
        />

        <InfoBox variant="emerald" title="Une combinaison souvent logique">
          Un site vitrine peut présenter l’entreprise pendant plusieurs années
          et contenir une page dédiée à chaque offre ou campagne qui mérite un
          message précis. Le visiteur reçoit une réponse concentrée, sans perdre
          l’accès aux réalisations, à l’équipe ou aux informations pratiques.
        </InfoBox>

        <h2 id="origine">3. Ce que le visiteur vient de voir change la page</h2>

        <p>
          Écrivez une phrase simple : « Cette personne arrive après avoir vu… ».
          Une annonce consacrée à un contrat d’entretien ne prépare pas la même
          attente qu’une recherche du nom de l’entreprise. Un QR code sur une
          invitation ne donne pas les mêmes informations préalables qu’un
          article trouvé sur Google.
        </p>

        <ul>
          <li>
            <strong>Annonce ou e-mail sur une offre précise :</strong> reprenez
            la même offre, les mêmes conditions importantes et la même prochaine
            action.
          </li>
          <li>
            <strong>Recommandation ou recherche du nom :</strong> aidez le
            visiteur à vérifier l’entreprise, les personnes, les réalisations et
            les différents services.
          </li>
          <li>
            <strong>Recherche d’un problème :</strong> répondez au problème,
            montrez pour qui la solution convient et laissez un chemin vers les
            informations complémentaires.
          </li>
          <li>
            <strong>Invitation, QR code ou partenaire :</strong> rappelez le
            contexte que le visiteur connaît déjà et concentrez la page sur ce
            qui manque encore.
          </li>
          <li>
            <strong>Accès direct sans origine connue :</strong> ne supposez pas
            que la personne connaît déjà l’offre. Donnez-lui assez de contexte
            pour comprendre où elle se trouve.
          </li>
        </ul>

        <p>
          Pour une campagne Google Ads, Google conseille de faire correspondre
          précisément la page à l’annonce et de rendre l’action promise facile à
          trouver. Cela peut conduire à garder une page existante, à la corriger
          ou à créer une page plus précise ; ce n’est pas une obligation de
          produire un site séparé.{" "}
          <a
            href="https://support.google.com/google-ads/answer/6238826?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lire les conseils officiels sur les pages de destination
          </a>
          . Si vous avez déjà retenu Google Ads, utilisez ensuite notre guide
          pour{" "}
          <Link href="/guides/landing-page-google-ads">
            vérifier toute la page de destination
          </Link>
          . Si vous ne savez pas encore comment attirer ces visiteurs, commencez
          par{" "}
          <Link href="/guides/seo-ou-google-ads">
            choisir entre référencement naturel et Google Ads
          </Link>
          .
        </p>

        <h2 id="questions">4. Le bon nombre de pages dépend des questions</h2>

        <p>
          Une page suffit lorsque le visiteur peut comprendre l’offre, vérifier
          les informations importantes et agir sans trier plusieurs discours.
          Plusieurs pages deviennent utiles lorsque des questions distinctes et
          durables demandent chacune une vraie réponse.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {questionGroups.map((item) => (
            <section
              key={item.id}
              aria-labelledby={item.id}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3
                id={item.id}
                className="mb-2 text-base font-semibold text-zinc-950 dark:text-white"
              >
                {item.title}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </section>
          ))}
        </div>

        <p>
          Google recommande une organisation logique et des liens descriptifs
          pour aider les personnes et le moteur à comprendre les relations entre
          les pages. Cette recommandation ne fixe aucun nombre idéal de pages et
          ne promet aucune position.{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulter le guide de démarrage SEO de Google
          </a>{" "}
          et ses{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            conseils sur les liens
          </a>
          .
        </p>

        <InfoBox
          variant="amber"
          title="Le nombre de pages n’est pas un objectif"
        >
          Ne découpez pas une phrase en cinq pages pour donner l’impression que
          le site est complet. À l’inverse, ne forcez pas plusieurs publics à
          déchiffrer une seule page si leurs questions, leurs offres et leurs
          prochaines actions sont différentes.
        </InfoBox>

        <h2 id="trois-decisions">
          5. Trois décisions de base, pas six produits
        </h2>

        <p>
          Commencez par la solution la plus proche de ce qui existe. Ne passez à
          la suivante que si la précédente laisse des questions importantes sans
          réponse.
        </p>

        <div className="not-prose my-6 space-y-4">
          {baseChoices.map((choice) => (
            <section
              key={choice.id}
              aria-labelledby={choice.id}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                  {choice.number}
                </span>
                <h3 id={choice.id} className="mb-0 text-lg font-semibold">
                  {choice.title}
                </h3>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Quand :</strong> {choice.when}
              </p>
              <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>À faire :</strong> {choice.work}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                <strong className="text-zinc-700 dark:text-zinc-300">
                  À éviter :
                </strong>{" "}
                {choice.warning}
              </p>
            </section>
          ))}
        </div>

        <p>
          Une page ajoutée au site peut réutiliser son identité visuelle, ses
          composants, ses informations pratiques et une partie de ses contenus.
          Cela ne supprime pas le travail propre à la nouvelle page. Demandez au
          devis de distinguer ce qui est réellement réutilisé de ce qui doit
          être écrit, conçu, développé ou mesuré pour la nouvelle offre.
        </p>

        <h2 id="qualificatifs">
          6. Durée et emplacement : deux choix indépendants
        </h2>

        <p>
          Après la décision de base, répondez à deux questions indépendantes :
          combien de temps la page ou le site doit-il vivre, puis où doit-il
          être installé ? Un contenu temporaire peut rester dans le site
          principal. Un mini-site peut, exceptionnellement, être durable. Ne
          mélangez donc pas la durée et l’emplacement dans un seul choix.
        </p>

        <GuideTable
          caption="Choisissez une durée après la décision de base"
          headers={["Durée", "Quand la choisir", "Ce qu’il faut écrire"]}
          rows={[
            [
              "Durable",
              "La page ou le site doit rester utile sans date de fin connue.",
              "La personne qui vérifiera et mettra les informations à jour.",
            ],
            [
              "Temporaire",
              "L’offre, l’événement ou la source d’arrivée possède une fin clairement connue.",
              "Un responsable, une date de retrait et la future destination de l’adresse.",
            ],
          ]}
        />

        <GuideTable
          caption="Choisissez ensuite un emplacement, indépendamment de la durée"
          headers={[
            "Emplacement",
            "Quand la choisir",
            "Conséquence à accepter",
          ]}
          rows={[
            [
              "Site principal",
              "Choix par défaut lorsque le projet appartient à la même entreprise et peut réutiliser ses informations.",
              "La page rejoint la navigation et la maintenance déjà en place selon ce qui est utile au visiteur.",
            ],
            [
              "Mini-site réellement séparé",
              "Seulement si une contrainte impose la séparation, ou si le projet possède à la fois sa propre identité et son propre public.",
              "Dans tous les cas : un responsable et une durée de vie nommés, puis les comptes, données, mises à jour et éventuelle fermeture à gérer.",
            ],
          ]}
        />

        <InfoBox variant="blue" title="Deux choix qui peuvent se combiner">
          Une page dédiée à une session limitée peut être temporaire et rester
          dans le site principal. Un mini-site ne devient une exception honnête
          que si une contrainte impose la séparation, ou si l’identité et le
          public du projet sont tous deux propres. Dans chaque cas, nommez son
          responsable et sa durée de vie.
        </InfoBox>

        <p>
          Une page courte n’efface pas les obligations d’un site professionnel.
          Les informations d’identification et d’hébergement applicables doivent
          rester accessibles selon la situation de l’entreprise. Le{" "}
          <a
            href="https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter"
            target="_blank"
            rel="noopener noreferrer"
          >
            ministère de l’Économie présente ces obligations générales
          </a>
          . Pour un formulaire, la CNIL rappelle de{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            limiter les données demandées à ce qui est nécessaire
          </a>{" "}
          et d’
          <a
            href="https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence"
            target="_blank"
            rel="noopener noreferrer"
          >
            informer les personnes au moment de la collecte
          </a>
          . Ces liens donnent des principes généraux, pas un avis juridique sur
          votre cas.
        </p>

        <InfoBox variant="amber" title="Attendre est parfois la bonne décision">
          Ne publiez pas encore si vous ne pouvez pas expliquer l’offre, montrer
          les informations nécessaires, confirmer le droit d’utiliser les
          contenus ou désigner la personne qui répondra. Une belle page sans
          réponse derrière le formulaire ne résout pas le problème de
          l’entreprise.
        </InfoBox>

        <h2 id="google-et-confiance">
          7. Ce que Google change — et ne change pas
        </h2>

        <h3>Une page unique n’est pas interdite dans Google</h3>

        <p>
          Google indique qu’une page doit être accessible à Googlebot, répondre
          correctement et contenir du texte indexable pour être éligible aux
          résultats. Une page unique peut remplir ces conditions. Elles ne
          garantissent toutefois ni son indexation, ni son classement.{" "}
          <a
            href="https://developers.google.com/search/docs/essentials/technical?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lire les exigences techniques minimales de Google
          </a>
          .
        </p>

        <h3>Plusieurs pages ne créent pas automatiquement de la visibilité</h3>

        <p>
          Des pages distinctes peuvent être utiles si elles répondent à des
          besoins distincts. Elles deviennent inutiles lorsqu’elles répètent le
          même discours avec quelques mots changés. Google recommande un contenu
          conçu d’abord pour les personnes, avec un public et un objectif
          principaux clairement identifiables.{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir les questions d’évaluation du contenu utile
          </a>
          .
        </p>

        <h3>Un lien peut aider sans distraire</h3>

        <p>
          Un visiteur prêt à remplir le formulaire n’a pas besoin de parcourir
          tout le site. Un visiteur encore hésitant peut vouloir consulter une
          réalisation, l’équipe ou une information pratique. Faites ressortir
          l’action principale, puis gardez les liens utiles au lieu de supprimer
          la navigation par dogme. Le bon test est simple : le lien répond-il à
          une question qui bloque réellement la décision ?
        </p>

        <h2 id="fiche">8. Une fiche à remplir avant de demander un devis</h2>

        <p>
          Remplissez cette fiche dans une note avec les personnes qui recevront
          les demandes. Si plusieurs réponses restent vagues, ne compensez pas
          par davantage de pages : listez d’abord les inconnues à lever.
        </p>

        <FormulaBox>{choiceSheet}</FormulaBox>

        <p>
          Cochez une seule décision de base, une durée et un emplacement. La
          case « attendre » n’est pas un produit supplémentaire : c’est une
          condition d’arrêt si un contenu, un droit ou une personne responsable
          manque encore.
        </p>

        <p>
          La ligne « mesure utile » ne demande pas un taux idéal. Elle demande
          ce que votre entreprise veut observer : un formulaire effectivement
          reçu, un appel, un rendez-vous confirmé ou une vente rapprochée de son
          origine. Un clic et une demande ne sont pas la même chose ; une
          demande et une vente non plus.
        </p>

        <p>
          Une fois les pages choisies, vous pouvez{" "}
          <Link href="/guides/preparer-contenus-site-vitrine">
            préparer les textes, images et informations du site
          </Link>
          , puis{" "}
          <Link href="/guides/template-ou-site-sur-mesure">
            choisir le niveau de personnalisation réellement utile
          </Link>
          . Pour comparer les budgets, consultez ensuite le guide sur le{" "}
          <Link href="/guides/prix-site-vitrine">prix d’un site vitrine</Link>{" "}
          et, pour organiser les validations, celui sur le{" "}
          <Link href="/guides/combien-de-temps-pour-creer-un-site">
            temps nécessaire à sa création
          </Link>
          .
        </p>

        <h2 id="situations">
          9. Trois situations, trois décisions différentes
        </h2>

        <InfoBox variant="blue" title="Exemples entièrement fictifs">
          Les trois situations ci-dessous sont inventées pour expliquer la
          méthode. Elles ne décrivent aucun client Hagnéré Code et n’annoncent
          aucun résultat de conversion ou de référencement.
        </InfoBox>

        <div className="not-prose my-6 space-y-4">
          {fictionalExamples.map((example, index) => (
            <section
              key={example.id}
              aria-labelledby={example.id}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-400">
                EXEMPLE FICTIF {index + 1}
              </p>
              <h3
                id={example.id}
                className="mb-4 text-base font-semibold text-zinc-950 dark:text-white"
              >
                {example.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Arrivée :</strong> {example.arrival}
              </p>
              <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                <strong>Questions restantes :</strong> {example.remaining}
              </p>
              <p className="mb-0 text-sm font-medium leading-relaxed text-zinc-950 dark:text-zinc-100">
                <strong>Décision de base illustrée :</strong> {example.decision}
              </p>
            </section>
          ))}
        </div>

        <p>
          Ces trois situations couvrent séparément les trois décisions de base.
          Choisissez ensuite leur durée et leur emplacement. Par exemple, la
          page de formation peut être temporaire tout en restant dans le site
          principal. Le mini-site ne devient pertinent que si une contrainte
          impose la séparation, ou si le projet possède à la fois son identité
          et son public propres. Dans les deux cas, il lui faut un responsable
          et une durée de vie explicites.
        </p>

        <h2 id="apres-clic">
          10. Après le clic, qui répond et qui maintient ?
        </h2>

        <p>
          La page ne s’arrête pas au bouton. Elle doit conduire vers une action
          qui fonctionne, une personne qui répond et une information que
          quelqu’un maintiendra. Faites ces quatre contrôles avec les personnes
          concernées, pas uniquement avec le prestataire qui construit le site.
        </p>

        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {publicationChecks.map((check) => (
            <section
              key={check.id}
              aria-labelledby={check.id}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3
                id={check.id}
                className="mb-2 text-base font-semibold text-zinc-950 dark:text-white"
              >
                {check.title}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {check.text}
              </p>
            </section>
          ))}
        </div>

        <p>
          Pour une page temporaire, ajoutez un dernier contrôle : notez la date
          de retrait et l’adresse utile vers laquelle elle renverra. Pour une
          page durable, ne remplissez pas artificiellement ce champ. Elle doit
          seulement avoir une personne responsable et une date de revue.
        </p>

        <InfoBox variant="emerald" title="Le contrôle final à faire vous-même">
          Ouvrez la page sur un téléphone, suivez les liens importants, envoyez
          une demande test et demandez à la personne responsable de confirmer sa
          réception. Pour une destination publicitaire, Google exige notamment
          qu’elle fonctionne, soit utile et permette de naviguer.{" "}
          <a
            href="https://support.google.com/adspolicy/answer/16427615?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulter les exigences de destination Google Ads
          </a>
          .
        </InfoBox>

        <h2 id="verdict">Votre décision aujourd’hui</h2>

        <p>
          <strong>Conservez ou corrigez l’existant</strong> si la bonne page est
          déjà là. Ne changez rien sans raison identifiable.{" "}
          <strong>Ajoutez une page dédiée</strong> si un visiteur et une offre
          méritent un message plus précis.{" "}
          <strong>Développez ou réorganisez plusieurs pages</strong> si les
          publics et les questions diffèrent durablement. Décidez ensuite si le
          besoin est durable ou temporaire, puis s’il reste dans le site
          principal. Ne retenez un mini-site que si une contrainte impose la
          séparation, ou si le projet possède à la fois son identité et son
          public propres. Si l’offre, les informations, les droits ou la
          personne qui répond manquent encore, attendez.
        </p>

        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <section
            aria-labelledby="fit-guide"
            className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-800 dark:bg-emerald-950/30"
          >
            <h3
              id="fit-guide"
              className="mb-2 text-base font-semibold text-emerald-900 dark:text-emerald-200"
            >
              Ce guide correspond à votre besoin si…
            </h3>
            <p className="mb-0 text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
              vous connaissez l’offre et les visiteurs visés, vous pouvez
              rassembler les informations nécessaires et une personne prendra
              réellement en charge les demandes.
            </p>
          </section>
          <section
            aria-labelledby="not-fit-guide"
            className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 dark:border-amber-800 dark:bg-amber-950/30"
          >
            <h3
              id="not-fit-guide"
              className="mb-2 text-base font-semibold text-amber-900 dark:text-amber-200"
            >
              Ne commandez pas encore un site si…
            </h3>
            <p className="mb-0 text-sm leading-relaxed text-amber-800 dark:text-amber-300">
              l’offre reste indéfinie, personne ne répondra, un simple profil
              professionnel suffit ou vous attendez une position Google ou un
              taux de conversion garanti.
            </p>
          </section>
        </div>

        <InfoBox variant="amber" title="Notre intérêt commercial est explicite">
          Hagnéré Code vend des sites et a donc intérêt à ce que vous en
          commandiez un. Utilisez la fiche avant de nous contacter : elle doit
          pouvoir conclure qu’aucun nouveau site n’est nécessaire.
        </InfoBox>

        <GuideInlineCTA
          title="Faire relire mon choix de pages"
          description="Apportez la fiche remplie, les pages déjà publiées et les questions de vos visiteurs. Nous vous aidons à distinguer ce qu’il faut corriger, ajouter ou laisser de côté avant la conception. Cette première orientation ne promet ni position Google ni taux de conversion."
          tags={[
            "L’existant peut être conservé",
            "Les pages sont justifiées une par une",
            "Aucun résultat commercial promis",
          ]}
          ctaLabel="Faire relire mon choix"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="sources">Sources et limites de ce guide</h2>

        <p>
          Les sources officielles ci-dessous ont été consultées le 22 juillet
          2026. Elles définissent une destination publicitaire, des conditions
          techniques générales, des principes d’organisation et certaines
          obligations. Elles ne disent pas qu’une landing page convertit mieux,
          qu’un site multipage se classe mieux, ni qu’un nombre donné de pages
          produira des demandes.
        </p>

        <ul>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/14086?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Définition d’une page de destination
            </a>
            , pour distinguer le rôle de la page de la structure du site.
          </li>
          <li>
            <a
              href="https://support.google.com/google-ads/answer/6238826?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads — Optimiser les annonces et les pages de destination
            </a>
            , pour la continuité entre le message et la page.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Créer du contenu utile, fiable et axé sur
              les utilisateurs
            </a>
            , pour partir du public et de son besoin plutôt que du nombre de
            pages.
          </li>
          <li>
            <a
              href="https://developers.google.com/search/docs/essentials/technical?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Search Central — Exigences techniques
            </a>
            , pour les conditions minimales sans garantie d’indexation.
          </li>
          <li>
            <a
              href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/creer-un-site-internet-pour-developper"
              target="_blank"
              rel="noopener noreferrer"
            >
              France Num — Créer un site internet pour développer son entreprise
            </a>
            , pour les questions d’objectifs, de publics et de mise à jour.
          </li>
          <li>
            <a
              href="https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministère de l’Économie — Mentions obligatoires sur un site
              internet
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Minimiser les données collectées
            </a>
            , pour les limites générales liées aux informations et formulaires.
          </li>
        </ul>

        <p>
          La méthode de choix proposée dans ce guide est une recommandation
          éditoriale de Hagnéré Code, pas une règle de Google. Elle prépare une
          discussion et un devis ; elle ne remplace pas un audit juridique, une
          étude de marché ou l’examen détaillé de votre site et de vos données.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
